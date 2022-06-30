/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [41],
  {
    "+58p": function (e, t, r) {
      var n = {
        "./shared_arabic.json": ["A8mv", 134],
        "./shared_brazilian.json": ["f7Ht", 135],
        "./shared_bulgarian.json": ["VJ/X", 136],
        "./shared_czech.json": ["WyQd", 137],
        "./shared_danish.json": ["WlkD", 138],
        "./shared_dutch.json": ["SHbT", 139],
        "./shared_english.json": ["7foF", 140],
        "./shared_finnish.json": ["+HzT", 141],
        "./shared_french.json": ["wr2i", 142],
        "./shared_german.json": ["CzjK", 143],
        "./shared_greek.json": ["T1Vt", 144],
        "./shared_hungarian.json": ["6rq4", 145],
        "./shared_italian.json": ["yba0", 146],
        "./shared_japanese.json": ["MIMz", 147],
        "./shared_koreana.json": ["wrJg", 148],
        "./shared_latam.json": ["Q3r2", 149],
        "./shared_norwegian.json": ["Lp4u", 150],
        "./shared_polish.json": ["wbdj", 151],
        "./shared_portuguese.json": ["GKZf", 152],
        "./shared_romanian.json": ["wYo1", 153],
        "./shared_russian.json": ["Efj/", 154],
        "./shared_sc_schinese.json": ["7Bs/", 155],
        "./shared_schinese.json": ["x+JX", 156],
        "./shared_spanish.json": ["/xtB", 157],
        "./shared_swedish.json": ["tdT9", 158],
        "./shared_tchinese.json": ["JQjP", 159],
        "./shared_thai.json": ["8I3t", 160],
        "./shared_turkish.json": ["W4c2", 161],
        "./shared_ukrainian.json": ["0xx/", 162],
        "./shared_vietnamese.json": ["CxfU", 163],
      };
      function i(e) {
        if (!r.o(n, e))
          return Promise.resolve().then(function () {
            var t = new Error("Cannot find module '" + e + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          });
        var t = n[e],
          i = t[0];
        return r.e(t[1]).then(function () {
          return r.t(i, 3);
        });
      }
      (i.keys = function () {
        return Object.keys(n);
      }),
        (i.id = "+58p"),
        (e.exports = i);
    },
    "+aRA": function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return s;
      });
      var n = r("mrSG"),
        i = r("q1tI"),
        a = (r("suz2"), r("hCpY"));
      class s extends i.Component {
        constructor(e) {
          super(e), (this.state = {}), (this.state.lastErrorKey = e.errorKey);
        }
        static InstallErrorReportingStore(e) {
          this.sm_ErrorReportingStore = e;
        }
        componentDidCatch(e, t) {
          const r = s.sm_ErrorReportingStore;
          r
            ? r
                .ReportError(e)
                .then(
                  (e) =>
                    e && this.setState({ identifierHash: e.identifierHash })
                )
            : console.warn(
                "No ErrorReportingStore - use ErrorReportingStore().Init() to configure error reporting to server"
              ),
            this.setState({
              error: { error: e, info: t },
              lastErrorKey: this.props.errorKey,
            });
        }
        Reset() {
          this.setState({ error: null });
        }
        render() {
          const { children: e, fallback: t, errorKey: r } = this.props,
            { error: n, identifierHash: a, lastErrorKey: c } = this.state;
          return n && r == c
            ? void 0 !== t
              ? "function" == typeof t
                ? t(n.error)
                : t
              : s.sm_ErrorReportingStore &&
                s.sm_ErrorReportingStore.reporting_enabled
              ? i.createElement(l, {
                  error: n,
                  identifierHash: a,
                  store: s.sm_ErrorReportingStore,
                  onRefresh: this.Reset,
                })
              : i.createElement(o, { error: n, onDismiss: this.Reset })
            : e;
        }
      }
      Object(n.b)([a.b], s.prototype, "Reset", null);
      const o = ({ error: e, onDismiss: t }) => {
          let r = e.error ? e.error.stack : "Stack missing",
            n = e.info ? e.info.componentStack : "",
            a = (e.error && e.error.message) || "unknown error";
          return i.createElement(
            c,
            null,
            i.createElement(d, null, 'Error: "', a, '"'),
            "   ",
            i.createElement(
              "span",
              {
                style: { textDecoration: "underline", cursor: "pointer" },
                onClick: t,
              },
              "(x) Dismiss"
            ),
            i.createElement("br", null),
            i.createElement(u, null, r),
            i.createElement(u, null, "The error occurred while rendering:", n)
          );
        },
        l = (e) => {
          const { error: t, onRefresh: r, identifierHash: n, store: a } = e,
            s = (t.error && t.error.message) || "unknown error",
            o = `${a.product}_${a.version}_${n}`;
          return i.createElement(
            c,
            null,
            i.createElement(
              d,
              null,
              "Something went wrong while displaying this content. ",
              i.createElement(
                "span",
                {
                  style: { textDecoration: "underline", cursor: "pointer" },
                  onClick: r,
                },
                "Refresh"
              )
            ),
            i.createElement(u, null, "Error Reference: ", o),
            i.createElement(u, null, s)
          );
        },
        c = ({ children: e }) =>
          i.createElement(
            "div",
            {
              style: {
                overflow: "auto",
                marginLeft: "15px",
                color: "white",
                fontSize: "16px",
                userSelect: "auto",
              },
              className: "ErrorBoundary",
            },
            e
          ),
        d = ({ children: e }) =>
          i.createElement(
            "h1",
            {
              style: {
                fontSize: "20px",
                display: "inline-block",
                marginTop: "15px",
                userSelect: "auto",
              },
            },
            e
          ),
        u = ({ children: e }) =>
          i.createElement(
            "pre",
            { style: { marginTop: "15px", opacity: 0.7, userSelect: "auto" } },
            e
          );
    },
    "/Q1a": function (e, t, r) {
      "use strict";
      r.d(t, "d", function () {
        return s;
      }),
        r.d(t, "l", function () {
          return o;
        }),
        r.d(t, "b", function () {
          return l;
        }),
        r.d(t, "c", function () {
          return c;
        }),
        r.d(t, "e", function () {
          return d;
        }),
        r.d(t, "a", function () {
          return h;
        }),
        r.d(t, "j", function () {
          return p;
        }),
        r.d(t, "k", function () {
          return f;
        }),
        r.d(t, "h", function () {
          return g;
        }),
        r.d(t, "i", function () {
          return b;
        }),
        r.d(t, "f", function () {
          return y;
        }),
        r.d(t, "g", function () {
          return S;
        });
      var n = r("mrSG"),
        i = r("7VqR"),
        a = r("EuLa");
      r("msu0");
      const s = {
          EUNIVERSE: 0,
          WEB_UNIVERSE: "",
          LANGUAGE: "english",
          SUPPORTED_LANGUAGES: [],
          COUNTRY: "",
          AVATAR_BASE_URL: "",
          MEDIA_CDN_COMMUNITY_URL: "",
          MEDIA_CDN_URL: "",
          COMMUNITY_CDN_URL: "",
          COMMUNITY_CDN_ASSET_URL: "",
          STORE_CDN_URL: "",
          PUBLIC_SHARED_URL: "",
          COMMUNITY_BASE_URL: "",
          CHAT_BASE_URL: "",
          STORE_BASE_URL: "",
          LOGIN_BASE_URL: "",
          STORE_ICON_BASE_URL: "",
          IMG_URL: "",
          STEAMTV_BASE_URL: "",
          HELP_BASE_URL: "",
          PARTNER_BASE_URL: "",
          STATS_BASE_URL: "",
          INTERNAL_STATS_BASE_URL: "",
          BASE_URL_STORE_CDN_ASSETS: "",
          IN_CLIENT: !1,
          USE_POPUPS: !1,
          IN_MOBILE: !1,
          IN_TENFOOT: !1,
          PLATFORM: "",
          SNR: "",
          LAUNCHER_TYPE: 0,
          EREALM: 0,
          IN_CHROMEOS: !1,
          LOCAL_HOSTNAME: "",
          WEBAPI_BASE_URL: "",
          COMMUNITY_WEBAPI_BASE_URL: "",
          TOKEN_URL: "",
          BUILD_TIMESTAMP: 0,
          PAGE_TIMESTAMP: 0,
          FROM_WEB: !1,
          get SESSIONID() {
            return (function () {
              if (!Object(a.a)()) return u || (u = m()), u;
              let e = Object(a.b)("sessionid");
              e || (e = m());
              return e;
            })();
          },
          FRIENDSUI_BETA: !1,
          STEAM_TV: !1,
          DEV_MODE: !1,
          IN_LIBRARY: !1,
          IN_GAMEPADUI: !1,
          ON_DECK: !1,
          IN_LOGIN: !1,
          IN_STANDALONE_KEYBOARD: !1,
        },
        o = {
          logged_in: !1,
          steamid: "",
          accountid: 0,
          account_name: "",
          token: void 0,
          token_use_id: void 0,
          webapi_token: "",
          authwgtoken: "",
          is_support: !1,
          is_limited: !1,
          is_partner_member: !1,
          short_url: "",
          country_code: "",
        },
        l = { steamid: "", clanid: 0, listid: 0 },
        c = {
          CLANSTEAMID: "",
          CLANACCOUNTID: 0,
          APPID: 0,
          VANITY_ID: "",
          IS_CREATOR_HOME: !1,
          IS_CURATOR: !1,
          IS_OGG: !1,
          CAN_UPLOAD_IMAGES: !1,
          APP_NAME: "",
          HEADER_IMAGE: "",
          HAS_ADULT_CONTENT: !1,
          HAS_ADULT_CONTENT_SEX: !1,
          HAS_ADULT_CONTENT_VIOLENCE: !1,
          IS_VALVE_GROUP: !1,
          IS_ALLOWED_SC: !1,
        },
        d = { ANNOUNCEMENT_GID: "", TAKEOVER_ANNOUNCEMENT_GID: "" };
      let u;
      function m() {
        let e = (function () {
          let e = "";
          for (let t = 0; t < 24; t++) e += Object(i.b)(0, 35).toString(36);
          return e;
        })();
        return Object(a.c)("sessionid", e, 0), e;
      }
      function h() {
        let e = null;
        return (
          Object(a.a)() && (e = Object(a.b)("presentation_mode")),
          Boolean(e && 1 === Number.parseInt(e))
        );
      }
      function p(e = "webui_config") {
        const t = {},
          r = g("config", e);
        r && (delete r.SESSIONID, Object.assign(s, r), (t.config = !0));
        const n = g("userinfo", e);
        n &&
          (Object.assign(o, n),
          (t.userConfig = !0),
          o.is_support && h() && (o.is_support = !1));
        const i = g("broadcast", e);
        i && (Object.assign(l, i), (t.broadcastConfig = !0));
        const a = g("community", e);
        a && (Object.assign(c, a), (t.communityConfig = !0));
        const u = g("event", e);
        return u && (Object.assign(d, u), (t.eventConfig = !0)), t;
      }
      function f(e, t, r) {
        return Object(n.a)(this, void 0, void 0, function* () {
          if (r.config) {
            const r = (yield e.get(t + "ajaxgetconfig")).data;
            r && (delete r.SESSIONID, Object.assign(s, r));
          }
          if (r.userConfig) {
            const r = (yield e.get(t + "ajaxgetuserconfig", {
              withCredentials: !0,
            })).data;
            r && Object.assign(o, r);
          }
        });
      }
      function _(e, t = "webui_config", r) {
        let n;
        if (
          ((n =
            "string" == typeof t
              ? !Object({ NODE_ENV: "production", STEAM_BUILD: "buildbot" })
                  .MOBILE_BUILD && document.getElementById(t)
              : t),
          n)
        )
          try {
            if (n.hasAttribute("data-" + e)) {
              return JSON.parse(n.getAttribute("data-" + e));
            }
            return null;
          } catch (e) {
            console.error("Failed to parse config", e);
          }
        else r && console.error("Missing config element #", t);
      }
      function g(e, t = "webui_config") {
        return _(e, t, !0);
      }
      function b(e, t = "webui_config") {
        return _(e, t, !1);
      }
      function w(e, t) {
        return 0 != t.length && e.startsWith(t);
      }
      function y() {
        if (!window || !window.location || !window.location.href)
          return console.warn("Unable to determine base url!"), "unknown";
        const e = window.location.href;
        return w(e, s.STORE_BASE_URL)
          ? s.STORE_BASE_URL
          : w(e, s.COMMUNITY_BASE_URL)
          ? s.COMMUNITY_BASE_URL
          : w(e, s.CHAT_BASE_URL)
          ? s.CHAT_BASE_URL
          : w(e, s.PARTNER_BASE_URL)
          ? s.PARTNER_BASE_URL
          : w(e, s.HELP_BASE_URL)
          ? s.HELP_BASE_URL
          : w(e, s.STEAMTV_BASE_URL)
          ? s.STEAMTV_BASE_URL
          : w(e, s.STATS_BASE_URL)
          ? s.STATS_BASE_URL
          : w(e, s.INTERNAL_STATS_BASE_URL)
          ? s.INTERNAL_STATS_BASE_URL
          : w(e, "https://steamloopback.host")
          ? "https://steamloopback.host"
          : "";
      }
      function S() {
        const e = window.location.href;
        return e.startsWith(s.STORE_BASE_URL)
          ? "store"
          : e.startsWith(s.COMMUNITY_BASE_URL)
          ? "community"
          : e.startsWith(s.PARTNER_BASE_URL)
          ? "partnerweb"
          : e.startsWith(s.HELP_BASE_URL)
          ? "help"
          : e.startsWith(s.STEAMTV_BASE_URL)
          ? "steamtv"
          : e.startsWith(s.STATS_BASE_URL) ||
            e.startsWith(s.INTERNAL_STATS_BASE_URL)
          ? "stats"
          : "";
      }
    },
    "1+R+": function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return m;
      });
      var n = r("mrSG"),
        i = (r("ApMK"), r("vDqi")),
        a = r.n(i),
        s = r("xYro"),
        o = r("VnJP"),
        l = r("vYsE"),
        c = r("3u1o"),
        d = (r("7VqR"), r("pJv3"), r("f5iL"));
      var u;
      !(function (e) {
        (e[(e.None = 0)] = "None"),
          (e[(e.Append = 1)] = "Append"),
          (e[(e.Remove = 2)] = "Remove");
      })(u || (u = {}));
      class m {
        constructor(e, t, r, n) {
          (this.m_callbacks = null),
            (this.m_mpd = null),
            (this.m_adaptation = null),
            (this.m_mediaSource = null),
            (this.m_sourceBuffer = null),
            (this.m_nTrackBufferMS = 0),
            (this.m_representation = null),
            (this.m_eBufferUpdate = u.None),
            (this.m_rgBufferedSegments = []),
            (this.m_bNeedInitSegment = !0),
            (this.m_nNextSegment = 0),
            (this.m_bRemoveBufferState = !1),
            (this.m_bSeekInProgress = !1),
            (this.m_tsLastBufferRemove = 0),
            (this.m_schNextDownload = new c.b()),
            (this.m_xhrDownload = null),
            (this.m_listeners = new c.c()),
            (this.m_rgDownloadLog = []),
            (this.m_nCurDownloadProgress = 0),
            (this.m_nCurDownloadBitrate = 0),
            (this.m_nNumConsecutiveDownloadGones = 0),
            (this.m_statsGameData = null),
            (this.m_callbacks = e),
            (this.m_mpd = t),
            (this.m_adaptation = r),
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
            e.join(" & ")
          );
        }
        GetMaxSegment() {
          if (this.m_mpd.IsLiveContent()) return Number.MAX_VALUE;
          {
            let e = this.m_mpd.GetEndTime();
            return Object(s.f)(this.m_adaptation, 1e3 * e) - 1;
          }
        }
        GetAmountBufferedInPlayerMS(e) {
          if (!this.m_sourceBuffer) return 0;
          let t = this.m_sourceBuffer.buffered;
          if (0 == t.length) return 0;
          e < t.start(0) && (e = t.start(0)), e > t.end(0) && (e = t.end(0));
          let r = t.end(0) - e;
          return Math.floor(1e3 * r);
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
              Object(o.c)(
                `${this.GetDebugName()} changing representation to ${
                  e.nHeight || 0
                }p at ${Math.ceil(e.nBandwidth / 1e3)}KB for segment ${
                  this.m_nNextSegment
                }`
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
              Object(o.c)(t),
              this.m_listeners.AddEventListener(
                this.m_sourceBuffer,
                "updateend",
                this.OnSourceBufferUpdateEnd
              ),
              this.m_listeners.AddEventListener(
                this.m_sourceBuffer,
                "error",
                this.OnSourceBufferError
              ),
              this.m_listeners.AddEventListener(
                this.m_sourceBuffer,
                "abort",
                this.OnSourceBufferAbort
              );
          }
          return e;
        }
        Close() {
          this.m_listeners.Unregister(),
            (this.m_sourceBuffer = null),
            this.ForceStopDownloads(),
            (this.m_eBufferUpdate = u.None),
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
            r = this.GetAmountBufferedInPlayerMS(t);
          Object(o.c)(
            `${this.GetDebugName()} OnSourceBufferUpdateEnd: [playback=${t}][buffered=${r}][start=${this.GetBufferedStart()}][end=${this.GetBufferedEnd()}]`
          );
          let n = this.m_eBufferUpdate;
          (this.m_eBufferUpdate = u.None),
            n == u.Append && this.m_callbacks.OnSegmentDownloaded(this),
            this.m_bSeekInProgress &&
              n == u.Remove &&
              !this.m_bRemoveBufferState &&
              this.ContinueSeek(),
            this.UpdateBuffer();
        }
        OnSourceBufferError(e) {
          console.log("OnSourceBufferError");
        }
        OnSourceBufferAbort(e) {
          console.log("OnSourceBufferAbort");
        }
        ScheduleNextDownload() {
          if (this.m_bNeedInitSegment) return void this.DownloadNextSegment();
          if ((this.m_schNextDownload.Cancel(), this.m_xhrDownload))
            return void Object(o.c)(
              `${this.GetDebugName()} ScheduleNextDownload - download already going`
            );
          if (this.m_bSeekInProgress)
            return void Object(o.c)(
              `${this.GetDebugName()} ScheduleNextDownload - seeking`
            );
          if (this.m_nNextSegment > this.GetMaxSegment())
            return void Object(o.c)(
              `${this.GetDebugName()} ScheduleNextDownload - reached max segment`
            );
          let e = this.m_callbacks.GetCurrentPlayTime(),
            t = this.m_callbacks.GetPlaybackRate(),
            r = Object(s.d)(this.m_mpd, this.m_adaptation, this.m_nNextSegment);
          if (r > 0)
            return (
              Object(o.c)(
                `${this.GetDebugName()} ScheduleNextDownload - segment in future`
              ),
              void this.m_schNextDownload.Schedule(r, this.ScheduleNextDownload)
            );
          let n = this.GetAmountBufferedMS(e);
          if ((t > 1 && (n /= t), n < 4e4))
            return (
              Object(o.c)(
                `${this.GetDebugName()} ScheduleNextDownload - download now`
              ),
              void this.DownloadNextSegment()
            );
          let i = 1.1 * Object(s.e)(this.m_adaptation),
            a = this.GetAmountBufferedInPlayerMS(
              this.m_callbacks.GetCurrentPlayTime()
            );
          Object(o.c)(
            `${this.GetDebugName()} ScheduleNextDownload - buffered, schedule later [sleep=${i}ms][buffer=${a}]`
          ),
            this.m_schNextDownload.Schedule(i, this.ScheduleNextDownload);
        }
        DownloadNextSegment() {
          this.m_schNextDownload.Cancel();
          let e = "",
            t = 0;
          if (this.m_bNeedInitSegment)
            (this.m_bNeedInitSegment = !1),
              (e = Object(s.c)(
                this.m_mpd.GetBaseURL(),
                this.m_adaptation,
                this.m_representation
              )),
              (t = 0);
          else {
            if (this.m_nNextSegment < 0)
              return void console.error(
                "Attempting to download negative segment:",
                this.m_nNextSegment
              );
            (e = Object(s.g)(
              this.m_mpd.GetBaseURL(),
              this.m_adaptation,
              this.m_representation,
              this.m_nNextSegment
            )),
              (t = Object(s.e)(this.m_adaptation)),
              this.m_nNextSegment++;
          }
          this.DownloadSegment(this.m_representation.strID, e, t);
        }
        DownloadSegment(e, t, r, i = performance.now()) {
          return Object(n.a)(this, void 0, void 0, function* () {
            Object(d.a)(
              null === this.m_xhrDownload,
              "Trying to download another segment while a download is already in flight"
            ),
              this.m_schNextDownload.Cancel();
            const n = this.m_callbacks.GetCDNAuthURLParameter();
            n && (t += n), Object(o.c)("Downloading: " + t);
            let s = null,
              l = performance.now(),
              c = a.a.CancelToken.source();
            try {
              (this.m_nCurDownloadProgress = 0), (this.m_xhrDownload = c);
              let e = {
                cancelToken: this.m_xhrDownload.token,
                timeout: 15e3,
                responseType: "arraybuffer",
                onDownloadProgress: (e) => {
                  (this.m_nCurDownloadProgress = e.loaded / e.total),
                    (this.m_nCurDownloadBitrate =
                      (8 * e.loaded * 1e3) /
                      Math.max(1, performance.now() - l));
                },
              };
              this.ContainsGame() && (e.responseType = "json"),
                (s = yield a.a.get(t, e));
            } catch (e) {
              Object(o.c)("Failed to download segment: " + e), (s = e.response);
            }
            if (!this.m_xhrDownload || this.m_xhrDownload != c) return;
            let u = performance.now(),
              m = Math.floor(performance.now() - l),
              h = s ? s.status : 0;
            if (((this.m_xhrDownload = null), this.m_bSeekInProgress))
              this.ContinueSeek();
            else {
              if (!s || 200 != s.status)
                return this.ContainsGame()
                  ? void this.ScheduleNextDownload()
                  : (this.m_stats.LogSegmentDownloadFailure(
                      m,
                      s ? s.status : 444
                    ),
                    u - i > 9e3
                      ? (Object(o.c)(
                          `${this.GetDebugName()} HTTP download failed.. stopping loader: ${
                            u - i
                          }ms`
                        ),
                        void this.DownloadFailed())
                      : 410 == h
                      ? ((this.m_nNumConsecutiveDownloadGones += 1),
                        Object(o.c)(
                          `${this.GetDebugName()} HTTP download gone.. informing the player: ${
                            u - i
                          }ms`
                        ),
                        void this.DownloadGone())
                      : void this.m_schNextDownload.Schedule(500, () =>
                          this.DownloadSegment(e, t, r, i)
                        ));
              if (
                ((this.m_nNumConsecutiveDownloadGones = 0), this.ContainsGame())
              ) {
                let e = s.data;
                this.m_rgGameDataFrames || (this.m_rgGameDataFrames = []);
                let t = Number.MIN_VALUE,
                  r = Number.MIN_VALUE;
                this.m_rgGameDataFrames.length > 0 &&
                  ((t =
                    this.m_rgGameDataFrames[this.m_rgGameDataFrames.length - 1]
                      .pts),
                  (r =
                    this.m_rgGameDataFrames[this.m_rgGameDataFrames.length - 1]
                      .gdi));
                const n = e.frame;
                n &&
                  (n.pts && n.gamedata && n.gdi
                    ? n.pts <= t
                      ? Object(o.c)("Invalid game pts")
                      : n.gdi != r && this.m_rgGameDataFrames.push(n)
                    : Object(o.c)("Invalid game data")),
                  this.TrimGameDataIfNecessary(),
                  (this.m_statsGameData = {
                    nAppID: e.appid,
                    ulBroadcastRelayID: e.broadcastrelayid,
                    nSegmentID: e.segmentid,
                  });
              } else {
                let n = new Uint8Array(s.data);
                this.m_rgBufferedSegments.push({
                  nDurationMS: r,
                  data: n,
                  representationStrID: e,
                }),
                  this.LogDownload(l, n.length),
                  this.UpdateBuffer();
                {
                  let e = n.length / 1e3;
                  Object(o.c)(`HTTP ${h} (${m}ms, ${Math.floor(e)}k): ${t}`);
                }
              }
              this.ScheduleNextDownload();
            }
          });
        }
        DownloadFailed() {
          this.m_callbacks.OnSegmentDownloadFailed(this);
        }
        DownloadGone() {
          this.m_callbacks.OnSegmentDownloadGone(this);
        }
        TrimGameDataIfNecessary() {}
        UpdateBuffer() {
          if (this.m_eBufferUpdate != u.None) return;
          if (this.m_bRemoveBufferState) return void this.RemoveAllBuffers();
          if (!this.m_sourceBuffer)
            return void Object(o.c)("No source buffer?");
          if (this.m_rgBufferedSegments.length > 0) {
            try {
              this.m_eBufferUpdate = u.Append;
              let e = this.m_rgBufferedSegments[0];
              this.m_sourceBuffer.appendBuffer(e.data),
                this.m_rgBufferedSegments.splice(0, 1);
            } catch (e) {
              "QuotaExceededError" === e.name
                ? ((this.m_eBufferUpdate = u.None),
                  Object(o.c)(
                    `${this.GetDebugName()} Buffer - QuotaExceededError`
                  ))
                : Object(o.c)(`${this.GetDebugName()} Buffer - Exception`, e);
            }
            return;
          }
          let e = performance.now();
          if (!this.m_bSeekInProgress && e - this.m_tsLastBufferRemove > 1e4) {
            let t = this.GetBufferedStart(),
              r = this.m_callbacks.GetCurrentPlayTime() - 40;
            if (t < r) {
              let n = Math.min(this.GetBufferedEnd(), r);
              return void (
                n != t &&
                ((this.m_eBufferUpdate = u.Remove),
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
            for (let r = 0; r < t.length; r++) e < t.end(r) && (e = t.end(r));
          }
          (this.m_bRemoveBufferState = !1),
            (this.m_eBufferUpdate = u.Remove),
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
            r = this.GetBufferedEnd(),
            n = e < t || e > r;
          if (
            (0 == t && 0 == r && (n = !0),
            Object(o.c)(
              `${this.GetDebugName()} making an ${
                n ? "unbuffered" : "buffered"
              } seek to ${e}`
            ),
            !this.m_bSeekInProgress && !n && !this.m_bNeedInitSegment)
          )
            return void this.ScheduleNextDownload();
          (this.m_bSeekInProgress = !0), this.ForceStopDownloads();
          let i = Object(s.f)(this.m_adaptation, 1e3 * e);
          if (
            ((this.m_nNextSegment = Math.min(i, this.GetMaxSegment())),
            Object(o.c)(
              "Seek To Next Segment: " +
                this.m_nNextSegment +
                " at approx. " +
                Object(o.d)(
                  ((this.m_nNextSegment - 1) * Object(s.e)(this.m_adaptation)) /
                    1e3
                ) +
                " seconds."
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
            (this.m_eBufferUpdate == u.Remove ||
              this.m_bRemoveBufferState ||
              ((this.m_bSeekInProgress = !1), this.ScheduleNextDownload()));
        }
        BHasEnoughBuffered(e) {
          return (
            !this.m_bSeekInProgress &&
            (!!this.ContainsGame() ||
              this.GetAmountBufferedInPlayerMS(e) >= this.m_nTrackBufferMS ||
              this.m_nNextSegment >= this.GetMaxSegment())
          );
        }
        LogDownload(e, t) {
          this.m_rgDownloadLog.length >= 4 && this.m_rgDownloadLog.shift();
          let r = performance.now() - e;
          r <= 0 ||
            (this.m_rgDownloadLog.push({ cubData: t, nDownloadMS: r }),
            this.m_stats.LogDownload(t, r));
        }
        GetDownloadHistory() {
          return this.m_rgDownloadLog;
        }
        GetAvgDownloadRate() {
          let e = 0,
            t = 0;
          for (let r of this.m_rgDownloadLog)
            (e += r.nDownloadMS), (t += r.cubData);
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
      Object(n.b)([l.a], m.prototype, "OnSourceBufferUpdateEnd", null),
        Object(n.b)([l.a], m.prototype, "OnSourceBufferError", null),
        Object(n.b)([l.a], m.prototype, "OnSourceBufferAbort", null),
        Object(n.b)([l.a], m.prototype, "ScheduleNextDownload", null),
        Object(n.b)([l.a], m.prototype, "DownloadNextSegment", null),
        Object(n.b)([l.a], m.prototype, "DownloadFailed", null),
        Object(n.b)([l.a], m.prototype, "DownloadGone", null);
    },
    "1fPh": function (e, t, r) {
      "use strict";
      r.d(t, "b", function () {
        return c;
      }),
        r.d(t, "a", function () {
          return d;
        });
      var n = r("/Q1a");
      const i = {},
        a = { LoyaltyKeyboard: () => "/points/shop/c/keyboard" },
        s = {
          LoyaltySteamBadge: () => "/points/shop/c/steambadge",
          LoyaltyProfileCustomizations: () => "/points/shop/profileshowcases",
        },
        o = {
          LoyaltyItemBundles: () => "/points/shop/c/itembundles",
          LoyaltyItemBundle: (e) => `/points/shop/bundle/${e}`,
        },
        l = {},
        c = Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(
                      Object.assign(
                        Object.assign(
                          Object.assign(
                            Object.assign(
                              Object.assign(
                                Object.assign(
                                  Object.assign(
                                    {
                                      Home: () => "/",
                                      Login: () => "/login",
                                      AppStorePage: () =>
                                        "/app/:appid(\\d+)/:gamename?",
                                      PackageStorePage: () =>
                                        "/sub/:subid(\\d+)/:packagename?",
                                      BundleStorePage: () =>
                                        "/bundle/:bundleid(\\d+)/:bundlename?",
                                      SaleLandingPage: () =>
                                        "/sale/:salePageName",
                                      RemotePlay: () => "/remoteplay_hub/",
                                      VRHardware: () => "/vrhardware/",
                                      RemotePlayTogether: () => "/together/",
                                      SteamDeck: () => "/steamdeck/",
                                      CreatorSaleLandingPage: () =>
                                        "/:prefix(curator|publisher|pub|dev|developer|franchise)/:creatorPageName/sale/:salePageName?",
                                      SubscriptionPlanLandingPage: () =>
                                        "/subscriptions/:salePageName",
                                      CuratorHomePage: () => [
                                        "/:prefix(publisher|pub|dev|developer|franchise|subscriptions|curator)/:curatorPageName",
                                        "/:prefix(dlc)/:appid(\\d+)/:curatorPageName",
                                      ],
                                      CuratorListPage: () => [
                                        "/:prefix(publisher|pub|dev|developer|franchise|subscriptions|curator)/:curatorPageName/:infix(list)?/:listid(\\d+)?",
                                        "/:prefix(dlc)/:appid(\\d+)/:curatorPageName/:infix(list)?/:listid(\\d+)?",
                                      ],
                                      CuratorAdminPage: () =>
                                        "/:prefix(publisher|pub|dev|developer|franchise|subscriptions|curator)/:curatorVanity/admin",
                                    },
                                    {
                                      NewsHub: () =>
                                        "/:prefix(news|newshub|events)",
                                      NewsHubApp: (e, t) =>
                                        `/:prefix(news|newshub|events)/app/${e}/${t}`,
                                      NewsHubGroup: (e, t) =>
                                        `/:prefix(news|newshub|events)/group/${e}/${t}`,
                                      NewsHubCollection: (e, t) =>
                                        `/:prefix(news|newshub|events)/collection/${e}/${t}`,
                                      NewsHubSale: (e, t) =>
                                        `/:prefix(news|newshub|events)/sale/${e}/${t}`,
                                      NewsHubContentHub: (e, t, r) =>
                                        `/:prefix(news|newshub|events)/${e}/${t}/${r}`,
                                      EventViewByApp: (e, t, r) =>
                                        `/:prefix(news|newshub|events)/app/${e}/:viewtype(view|inline)/${t}/${r}`,
                                      EventViewByGroup: (e, t, r) =>
                                        `/:prefix(news|newshub|events)/group/${e}/:viewtype(view|inline)/${t}/${r}`,
                                      OldAnnouncementViewByApp: (e, t, r) =>
                                        `/:prefix(news|newshub|events)/app/${e}/:viewtype(old_view|old_inline)/${t}/${r}`,
                                      OldAnnouncementViewByGroup: (e, t, r) =>
                                        `/:prefix(news|newshub|events)/group/${e}/:viewtype(old_view|old_inline)/${t}/${r}`,
                                    }
                                  ),
                                  {
                                    EventAdmin: () => "/events_admin",
                                    EventModeration: () =>
                                      "/events_admin/(moderate)?/:appid(\\d+)?/",
                                    EventBackfill: () =>
                                      "/events_admin/backfill/",
                                  }
                                ),
                                {
                                  EventModeration: () =>
                                    "/events_admin/:infix(moderate)?/:appid(\\d+)?/",
                                  EventBackfill: () =>
                                    "/events_admin/backfill/",
                                  EventGameFestivalDebug: () =>
                                    "/events_admin/gamefestival/:clanacountid(\\d+)/:claneventgid(\\d+)",
                                  EventRSSModeration: () =>
                                    "/events_admin/rss_admin/",
                                  InteractiveRecommender: () =>
                                    "/recommender/:steamid(\\d+)?/",
                                  LabsSandbox: () => "/labs/sandbox",
                                  AccountPreferences: () => "/account/",
                                }
                              ),
                              l
                            ),
                            {
                              Loyalty: () => "/points",
                              LoyaltyStore: () => "/points/shop",
                              LoyaltyGetPoints: () => "/points/getpoints",
                              LoyaltyHowItWorks: () => "/points/howitworks",
                              LoyaltyStickers: () => "/points/shop/c/stickers",
                              LoyaltyEmoticons: () =>
                                "/points/shop/c/emoticons",
                              LoyaltyChatEffects: () =>
                                "/points/shop/c/chateffects",
                              LoyaltyBackgrounds: () =>
                                "/points/shop/c/backgrounds",
                              LoyaltyProfile: () => "/points/shop/c/profile",
                              LoyaltyAvatar: () => "/points/shop/c/avatar",
                              LoyaltyByGame: () => "/points/shop/c/games",
                              LoyaltyGiveawayRules: () =>
                                "/points/giveawayrules",
                            }
                          ),
                          a
                        ),
                        i
                      ),
                      s
                    ),
                    o
                  ),
                  {
                    LoyaltyProfileBundles: () =>
                      "/points/shop/c/profilebundles",
                    LoyaltyArtistProfiles: () =>
                      "/points/shop/c/artistprofiles",
                  }
                ),
                {
                  ContentHubHome: () =>
                    "/:prefix(tags|category|genre|videos|weekly|vr|software|macos|linux|freetoplay|earlyaccess|pccafe|demos|specials|remoteplay_phone|remoteplay_tablet|remoteplay_tv|remoteplay_together|games|adultonly|soundtracks|greatondeck|controller)",
                }
              ),
              { Categories: () => "/categories/" }
            ),
            { SummerSale2021Story: () => "/forgeyourfate" }
          ),
          { DiagData: () => "/:anything*/diagdata" }
        );
      function d() {
        let e = document.createElement("a");
        e.href = n.d.STORE_BASE_URL;
        let t = e.pathname;
        return t.endsWith("/") || (t += "/"), t;
      }
    },
    "3dpo": function (e, t, r) {
      "use strict";
      r.d(t, "d", function () {
        return i;
      }),
        r.d(t, "h", function () {
          return a;
        }),
        r.d(t, "e", function () {
          return s;
        }),
        r.d(t, "c", function () {
          return o;
        }),
        r.d(t, "g", function () {
          return l;
        }),
        r.d(t, "b", function () {
          return c;
        }),
        r.d(t, "f", function () {
          return d;
        }),
        r.d(t, "a", function () {
          return u;
        });
      var n = r("hRO2");
      const i = n.BinaryReader.prototype,
        a = n.BinaryWriter.prototype;
      function s(e) {
        let t = {};
        const { fields: r } = e;
        for (let e in r) {
          const n = r[e];
          t[n.n] = n;
        }
        return t;
      }
      function o(e, t) {
        const { proto: r, fields: i } = e,
          a = new r();
        for (let e in i) {
          const { n: r, c: s, r: o, d: l, q: c } = i[e];
          if (!t.hasOwnProperty(e)) continue;
          const d = t[e];
          s
            ? o
              ? n.Message.setRepeatedWrapperField(
                  a,
                  r,
                  Array.isArray(d) ? d.map((e) => s.fromObject(e)) : []
                )
              : n.Message.setWrapperField(a, r, s.fromObject(d))
            : n.Message.setField(a, r, d);
        }
        return a;
      }
      function l(e, t, r) {
        const { proto: i, fields: a } = e;
        let s = {};
        for (let e in a) {
          const { n: i, c: o, r: l, d: c, q: d } = a[e];
          if (o)
            if (l)
              s[e] = n.Message.toObjectList(
                n.Message.getRepeatedWrapperField(r, o, i),
                o.toObject,
                t
              );
            else {
              const a = n.Message.getWrapperField(r, o, i, d ? 1 : 0);
              a && (s[e] = o.toObject(t, a));
            }
          else {
            const t = n.Message.getFieldWithDefault(
              r,
              i,
              void 0 !== c ? c : null
            );
            (null !== t || d) && (s[e] = t);
          }
        }
        return t && (s.$jspbMessageInstance = r), s;
      }
      function c(e, t, r) {
        for (; r.nextField() && !r.isEndGroup(); ) {
          const i = e[r.getFieldNumber()];
          if (i) {
            const { n: e, c: a, r: s, d: o, q: l, br: c } = i;
            if (a) {
              const i = new a();
              r.readMessage(i, a.deserializeBinaryFromReader),
                s
                  ? n.Message.addToRepeatedWrapperField(t, e, i, a)
                  : n.Message.setWrapperField(t, e, i);
            } else if (c) {
              const i = c.call(r);
              s
                ? n.Message.addToRepeatedField(t, e, i)
                : n.Message.setField(t, e, i);
            } else
              console.assert(
                c,
                `Reader func not set for field number ${e} in class ${a}`
              ),
                r.skipField();
          } else r.skipField();
        }
        return t;
      }
      function d(e, t, r) {
        const { fields: i } = e;
        for (let e in i) {
          const { n: a, c: s, r: o, d: l, q: c, bw: d } = i[e];
          if (s)
            if (o) {
              const e = n.Message.getRepeatedWrapperField(t, s, a);
              ((e && e.length) || c) &&
                r.writeRepeatedMessage(a, e, s.serializeBinaryToWriter);
            } else {
              const e = n.Message.getWrapperField(t, s, a, c ? 1 : 0);
              e && r.writeMessage(a, e, s.serializeBinaryToWriter);
            }
          else if (d) {
            const e = n.Message.getField(t, a);
            void 0 !== e && d.call(r, a, e);
          } else
            console.assert(
              d,
              `Writer func not set for field number ${a} in class ${s}`
            );
        }
      }
      function u(e) {
        const t = e.proto;
        for (const r in e.fields) {
          const i = e.fields[r],
            { n: a, c: s, r: o, d: l, q: c } = i;
          i.hasOwnProperty("d")
            ? (t.prototype[r] = m(n.Message.getFieldWithDefault, a, l))
            : (t.prototype[r] = s
                ? o
                  ? m(n.Message.getRepeatedWrapperField, s, a)
                  : h(s, a)
                : m(n.Message.getField, a)),
            (t.prototype[`set_${r}`] = p(
              s
                ? o
                  ? n.Message.setRepeatedWrapperField
                  : n.Message.setWrapperField
                : n.Message.setField,
              a
            )),
            o && (t.prototype[`add_${r}`] = f(a, s));
        }
      }
      function m(e, ...t) {
        return function () {
          return e(this, ...t);
        };
      }
      function h(e, t) {
        return function (r = !0) {
          return n.Message.getWrapperField(this, e, t, r ? 1 : 0);
        };
      }
      function p(e, t) {
        return function (r) {
          return e(this, t, r);
        };
      }
      function f(e, t) {
        return t
          ? function (r, i) {
              return n.Message.addToRepeatedWrapperField(this, e, r, t, i);
            }
          : function (t, r) {
              n.Message.addToRepeatedField(this, e, t, r);
            };
      }
    },
    "3idx": function (e, t, r) {
      "use strict";
      function n(e, t) {
        return e < t ? -1 : e > t ? 1 : 0;
      }
      function i(e, t) {
        let r = e.toString(),
          n = "";
        for (let e = 0; e < t - r.length; e++) n += "0";
        return n + r;
      }
      function a(e, t = !1) {
        if (Number.isNaN(e) || !Number.isFinite(e)) return "";
        let r = e < 0;
        e = Math.abs(e);
        let n = Math.floor(e / 3600),
          a = Math.floor((e % 3600) / 60),
          s = Math.floor(e % 60),
          o = r ? "-" : "";
        return !t || n > 0
          ? `${o}${n}:${i(a, 2)}:${i(s, 2)}`
          : `${o}${a}:${i(s, 2)}`;
      }
      function s(e) {
        if (!e) return "";
        if (DOMParser) {
          return new DOMParser().parseFromString(e, "text/html").documentElement
            .textContent;
        }
        return e;
      }
      function o(e, t = "") {
        return e.replace(/\bhttps?:\/\/\S+/gi, t);
      }
      function l(e, t, r = !0) {
        let n = e.trim();
        if (((n = n.replace(r ? /\s+/g : /[ \t]+/g, " ")), n.length > t)) {
          n = n.substring(0, t);
          let e = n.replace(/^(.*([.!?])) .*$/, "$1"),
            i = e.length;
          (i < 0.6 * t || i == t) && (e = n.replace(/ [^ ]*$/, "...")),
            (n = r ? e.replace(/(\r\n|\n|\r)/gm, "") : e);
        }
        return n;
      }
      function c(e) {
        let t,
          r,
          n = 0;
        if (0 === e.length) return n;
        for (t = 0; t < e.length; t++)
          (r = e.charCodeAt(t)), (n = (n << 5) - n + r), (n |= 0);
        return n;
      }
      function d(e) {
        return e.length <= 1
          ? e.toUpperCase()
          : e.charAt(0).toUpperCase() + e.slice(1);
      }
      r.d(t, "g", function () {
        return n;
      }),
        r.d(t, "a", function () {
          return a;
        }),
        r.d(t, "c", function () {
          return s;
        }),
        r.d(t, "d", function () {
          return o;
        }),
        r.d(t, "e", function () {
          return l;
        }),
        r.d(t, "b", function () {
          return c;
        }),
        r.d(t, "f", function () {
          return d;
        });
    },
    "3u1o": function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return s;
      }),
        r.d(t, "e", function () {
          return l;
        }),
        r.d(t, "b", function () {
          return c;
        }),
        r.d(t, "c", function () {
          return d;
        }),
        r.d(t, "d", function () {
          return u;
        });
      var n = r("mrSG"),
        i = r("ApMK"),
        a = r("vYsE");
      class s {
        constructor() {
          this.m_vecCallbacks = [];
        }
        Register(e) {
          this.m_vecCallbacks.push(e);
          return {
            Unregister: () => {
              i.b(this.m_vecCallbacks, e);
            },
          };
        }
        Dispatch(...e) {
          for (const t of Array.from(this.m_vecCallbacks)) t(...e);
        }
        ClearAllCallbacks() {
          this.m_vecCallbacks = [];
        }
        CountRegistered() {
          return this.m_vecCallbacks.length;
        }
      }
      class o {
        constructor(e) {
          (this.m_callbacks = new s()), (this.m_currentValue = e);
        }
        Set(e) {
          (this.m_currentValue = e), this.m_callbacks.Dispatch(e);
        }
        get Value() {
          return this.m_currentValue;
        }
        Subscribe(e) {
          return { Unsubscribe: this.m_callbacks.Register(e).Unregister };
        }
      }
      function l(e) {
        return new o(e);
      }
      class c {
        Schedule(e, t) {
          this.IsScheduled() && this.Cancel(),
            (this.m_fnCallback = t),
            (this.m_schTimer = window.setTimeout(this.ScheduledInternal, e));
        }
        IsScheduled() {
          return void 0 !== this.m_schTimer;
        }
        Cancel() {
          this.m_schTimer &&
            (clearTimeout(this.m_schTimer), (this.m_schTimer = void 0));
        }
        ScheduledInternal() {
          this.m_schTimer = void 0;
          let e = this.m_fnCallback;
          (this.m_fnCallback = void 0), e();
        }
      }
      Object(n.b)([a.a], c.prototype, "ScheduledInternal", null);
      class d {
        constructor() {
          this.m_rgListeners = [];
        }
        AddEventListener(e, t, r) {
          e.addEventListener(t, r),
            this.m_rgListeners.push({ element: e, type: t, listener: r });
        }
        Unregister() {
          for (let e of this.m_rgListeners)
            e.element.removeEventListener(e.type, e.listener);
          this.m_rgListeners = [];
        }
      }
      function u(e) {
        return Object(n.a)(this, void 0, void 0, function* () {
          let t = [];
          const r = Object.keys(e);
          r.forEach((r) => t.push(e[r]));
          return (yield Promise.all(t)).reduce(
            (e, t, n) => ((e[r[n]] = t), e),
            {}
          );
        });
      }
    },
    "5YvR": function (e, t, r) {
      var n = {
        "./marketing_brazilian.json": ["8xPd", 72],
        "./marketing_bulgarian.json": ["l4JQ", 73],
        "./marketing_czech.json": ["v392", 74],
        "./marketing_danish.json": ["nZPB", 75],
        "./marketing_dutch.json": ["KEZw", 76],
        "./marketing_english.json": ["lr6y", 77],
        "./marketing_finnish.json": ["Z8YI", 78],
        "./marketing_french.json": ["wNWg", 79],
        "./marketing_german.json": ["5zDj", 80],
        "./marketing_greek.json": ["/TBC", 81],
        "./marketing_hungarian.json": ["YGNc", 82],
        "./marketing_italian.json": ["xrKz", 83],
        "./marketing_japanese.json": ["dWul", 84],
        "./marketing_koreana.json": ["nWht", 85],
        "./marketing_latam.json": ["nGdQ", 86],
        "./marketing_norwegian.json": ["ZM5d", 87],
        "./marketing_polish.json": ["M2pn", 88],
        "./marketing_portuguese.json": ["TvUQ", 89],
        "./marketing_romanian.json": ["FhW0", 90],
        "./marketing_russian.json": ["VgI9", 91],
        "./marketing_sc_schinese.json": ["Z1QK", 92],
        "./marketing_schinese.json": ["0Cvn", 93],
        "./marketing_spanish.json": ["PTjI", 94],
        "./marketing_swedish.json": ["oaHe", 95],
        "./marketing_tchinese.json": ["UXMr", 96],
        "./marketing_thai.json": ["X8wz", 97],
        "./marketing_turkish.json": ["x+BD", 98],
        "./marketing_ukrainian.json": ["EfsZ", 99],
        "./marketing_vietnamese.json": ["nbZq", 100],
      };
      function i(e) {
        if (!r.o(n, e))
          return Promise.resolve().then(function () {
            var t = new Error("Cannot find module '" + e + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          });
        var t = n[e],
          i = t[0];
        return r.e(t[1]).then(function () {
          return r.t(i, 3);
        });
      }
      (i.keys = function () {
        return Object.keys(n);
      }),
        (i.id = "5YvR"),
        (e.exports = i);
    },
    "60Pl": function (e, t, r) {
      e.exports = {
        EmoticonBow: "shared_svg_library_EmoticonBow_S9_rt",
        EmoticonBow_st0: "shared_svg_library_EmoticonBow_st0_1MS_8",
        EmoticonBow_st1: "shared_svg_library_EmoticonBow_st1_3nqUN",
        SteamDeckCompatInfo: "shared_svg_library_SteamDeckCompatInfo_2LcFI",
        SteamDeckCompatLogo: "shared_svg_library_SteamDeckCompatLogo_Tplfb",
        SteamDeckCompatIcon: "shared_svg_library_SteamDeckCompatIcon_2hEWY",
        SteamDeckCompatVerified:
          "shared_svg_library_SteamDeckCompatVerified_3mvZq",
        SteamDeckCompatPlayable:
          "shared_svg_library_SteamDeckCompatPlayable_S7BDm",
        SteamDeckCompatUnsupported:
          "shared_svg_library_SteamDeckCompatUnsupported_1SeOP",
        SteamDeckCompatUnknown:
          "shared_svg_library_SteamDeckCompatUnknown_15dEs",
      };
    },
    "6B8T": function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return c;
      });
      var n = r("mrSG"),
        i = r("q1tI"),
        a = r("+aRA"),
        s = r("FhWJ"),
        o = r("GbHM"),
        l = r("hCpY");
      r("GTHt");
      function c(e) {
        const { ModalManager: t, DialogWrapper: r } = e,
          a = Object(n.c)(e, ["ModalManager", "DialogWrapper"]),
          c = t.modals,
          m = c && !!c.length,
          h = t.active_modal;
        if (
          ((function (e) {
            i.useEffect(() => {
              if (e)
                return (
                  document.body.classList.add(s.BodyNoScrollDialog),
                  () => document.body.classList.remove(s.BodyNoScrollDialog)
                );
            }, [e]);
          })(m),
          (function (e) {
            const t = Object(l.f)();
            i.useLayoutEffect(() => {
              const r = { forceUpdate: t };
              return e.RegisterOverlay(r), () => e.UnregisterOverlay(r);
            }, [e, t]);
          })(t),
          !c || !c.length)
        )
          return null;
        const p = c.map((e) =>
          i.createElement(d, {
            key: e.key,
            modal: e,
            active: e == h,
            Component: null != r ? r : u,
          })
        );
        return i.createElement(
          "div",
          Object.assign({}, a, {
            className: Object(o.a)(a.className, "FullModalOverlay"),
          }),
          i.createElement("div", {
            className: "ModalOverlayContent ModalOverlayBackground",
          }),
          p
        );
      }
      function d(e) {
        const { modal: t, active: r, Component: n } = e,
          s = Object(l.f)();
        return (
          Object(l.e)(t.ModalUpdatedCallback, s),
          i.createElement(
            a.a,
            null,
            i.createElement(
              n,
              {
                className: Object(o.a)(
                  "ModalOverlayContent",
                  r ? "active" : "inactive"
                ),
                active: r,
                modalKey: t.key,
              },
              t.element
            )
          )
        );
      }
      function u(e) {
        const { className: t, active: r, children: n } = e,
          a = i.useRef();
        return (
          i.useEffect(() => {
            const e = a.current;
            if (e && r) {
              const t = e.firstChild;
              t && t.focus && t.focus();
            }
          }, [r]),
          i.createElement("div", { ref: a, className: t, tabIndex: -1 }, n)
        );
      }
    },
    "6TF7": function (e, t, r) {
      e.exports = { App: "app_App_2uHYt" };
    },
    "6cEw": function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return i;
      });
      var n = r("hRO2");
      r("3dpo");
      n.Message;
      function i(e) {
        return "unknown EMsg ( " + e + " )";
      }
    },
    "7VqR": function (e, t, r) {
      "use strict";
      function n(e, t) {
        return (
          (e = Math.ceil(e)),
          (t = Math.floor(t)),
          Math.floor(Math.random() * (t - e + 1)) + e
        );
      }
      function i(e, t, r) {
        return null == e || isNaN(e) ? e : Math.max(t, Math.min(r, e));
      }
      function a(e, t, r, n, i) {
        return n + ((i - n) * (e - t)) / (r - t);
      }
      r.d(t, "b", function () {
        return n;
      }),
        r.d(t, "a", function () {
          return i;
        }),
        r.d(t, "c", function () {
          return a;
        });
    },
    "8G9o": function (e, t, r) {
      "use strict";
      var n = r("hRO2");
      r("3dpo"), r("Nr4G");
      n.Message;
    },
    "8aua": function (e, t, r) {
      e.exports = {
        LoadingWrapper: "throbber_LoadingWrapper_3Z36h",
        Static: "throbber_Static_kwzRJ",
        none: "throbber_none_2iT5l",
        bottomCircle: "throbber_bottomCircle_3-sjx",
        noString: "throbber_noString_M4pF_",
        Throbber: "throbber_Throbber_7MdwT",
        throbber_small: "throbber_throbber_small_29-XT",
        throbber_medium: "throbber_throbber_medium_1yqSo",
        throbber_large: "throbber_throbber_large_1u2tL",
        throbber_center_wrapper: "throbber_throbber_center_wrapper_Yi4EM",
        ThrobberText: "throbber_ThrobberText_1Zlvf",
        blur: "throbber_blur_3ebLc",
        ThrobberRoundLoop: "throbber_ThrobberRoundLoop_3SEk8",
        roundOuterOutline: "throbber_roundOuterOutline_3M8Ar",
        roundOuter: "throbber_roundOuter_3H7At",
        roundFill: "throbber_roundFill_2FWWt",
        ThrobberFillLoop: "throbber_ThrobberFillLoop_1-rlb",
        topCircle: "throbber_topCircle_3znUF",
        circlePulse: "throbber_circlePulse_1oQUO",
        ThrobberTopCircleLoop: "throbber_ThrobberTopCircleLoop_3oqZE",
        ThrobberBottomCircleLoop: "throbber_ThrobberBottomCircleLoop_3veQr",
        roundThrobber15: "throbber_roundThrobber15_1gQte",
        roundThrobber14: "throbber_roundThrobber14_3DXeR",
        roundThrobber13: "throbber_roundThrobber13_5VEyI",
        roundThrobber12: "throbber_roundThrobber12_wOdFm",
        roundThrobber11: "throbber_roundThrobber11_3Jmyz",
        roundThrobber10: "throbber_roundThrobber10_3QwXn",
        roundThrobber09: "throbber_roundThrobber09_2Yhvq",
        roundThrobber08: "throbber_roundThrobber08_3HcIU",
        roundThrobber07: "throbber_roundThrobber07__2fn3",
        roundThrobber06: "throbber_roundThrobber06_2gCCI",
        roundThrobber05: "throbber_roundThrobber05_1SrtW",
        roundThrobber04: "throbber_roundThrobber04_2P5xs",
        roundThrobber03: "throbber_roundThrobber03_3zYDa",
        roundThrobber02: "throbber_roundThrobber02_2_KYJ",
        roundThrobber01: "throbber_roundThrobber01_3N41H",
        ThrobberRoundLoopThickness: "throbber_ThrobberRoundLoopThickness_1wAwc",
        throbber_xlarge: "throbber_throbber_xlarge_2jzZM",
        throbber_xxlarge: "throbber_throbber_xxlarge_1DFOT",
      };
    },
    "9XWO": function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return s;
      }),
        r.d(t, "b", function () {
          return o;
        });
      var n = r("hRO2"),
        i = (r("msu0"), r("oleE"), r("6cEw"), r("QAsS")),
        a = (r("suz2"), r("rMum"));
      class s {
        constructor(e, t, r, a, s) {
          if (a)
            (this.m_eMsg = a.m_eMsg),
              (this.m_bValid = a.m_bValid),
              this.m_bValid &&
                ((this.m_netPacket = a.m_netPacket),
                (this.m_cubHeader = a.m_cubHeader),
                (this.m_header = a.m_header),
                this.InitForType(r));
          else {
            if (((this.m_header = new i.d(null)), (this.m_bValid = !0), t))
              if (
                ((this.m_netPacket = t),
                this.m_netPacket.SeekGetHead(),
                (this.m_eMsg = this.m_netPacket.GetUint32()),
                2147483648 & this.m_eMsg)
              ) {
                (this.m_eMsg = 2147483647 & this.m_eMsg),
                  (this.m_cubHeader = this.m_netPacket.GetUint32());
                try {
                  i.d.deserializeBinaryFromReader(
                    this.m_header,
                    new n.BinaryReader(
                      this.m_netPacket.GetPacket(),
                      this.m_netPacket.TellGet(),
                      this.m_cubHeader
                    )
                  ),
                    this.m_netPacket.SeekGetCurrent(this.m_cubHeader),
                    r && this.InitForType(r);
                } catch (e) {
                  console.error("Exception deserializing protobuf", e),
                    (this.m_bValid = !1);
                }
              } else this.m_bValid = !1;
            else e && (this.m_eMsg = e), r && (this.m_body = new r());
            s && this.m_header.set_jobid_target(s.Hdr().jobid_target());
          }
        }
        static InstallErrorReportingStore(e) {
          this.sm_ErrorReportingStore = e;
        }
        static InitHeaderFromPacket(e) {
          return new s(void 0, e);
        }
        InitForType(e) {
          if (((this.m_body = new e()), this.m_netPacket)) {
            this.m_netPacket.SeekGetHead(8 + this.m_cubHeader);
            try {
              e.deserializeBinaryFromReader(
                this.m_body,
                new n.BinaryReader(
                  this.m_netPacket.GetPacket(),
                  this.m_netPacket.TellGet(),
                  this.m_netPacket.GetCountBytesRemaining()
                )
              );
            } catch (e) {
              this.m_bValid = !1;
              const t = s.sm_ErrorReportingStore,
                r = `Exception parsing protobuf message body of type ${this.m_eMsg}.  Definitions may be out of sync with server version.`;
              t &&
                t.ReportError(new Error(r), {
                  bIncludeMessageInIdentifier: !0,
                }),
                console.warn(r),
                console.log(e.stack || e);
            }
          }
        }
        BIsValid() {
          return this.m_bValid;
        }
        Body() {
          return this.m_body;
        }
        SetBodyJSON(e) {
          (e.toObject = () => e), (this.m_body = e);
        }
        Hdr() {
          return this.m_header;
        }
        GetEMsg() {
          return this.m_eMsg;
        }
        SetEMsg(e) {
          this.m_eMsg = e;
        }
        GetEResult() {
          return this.Hdr().eresult();
        }
        Serialize() {
          let e = this.m_header.serializeBinary(),
            t = this.m_body.serializeBinary(),
            r = 2147483648 | this.m_eMsg,
            n = new Uint8Array(8 + e.length + t.length),
            i = new a.a(n);
          return (
            i.PutUint32(r),
            i.PutUint32(e.length),
            i.PutBytes(e),
            i.PutBytes(t),
            n
          );
        }
        SerializeBody() {
          let e = this.m_body.serializeBinary(),
            t = new Uint8Array(e.length);
          return new a.a(t).PutBytes(e), t;
        }
        DEBUG_ToObject() {
          return {};
        }
        DEBUG_LogToConsole() {
          0;
        }
      }
      class o extends s {
        constructor(e, t = 0, r, n) {
          super(t, r, e, n);
        }
        static InitFromPacket(e, t) {
          return new o(e, 0, t);
        }
        static InitFromMsg(e, t) {
          return new o(e, void 0, void 0, t);
        }
        static Init(e, t) {
          return new o(e, t);
        }
        Body() {
          return super.Body();
        }
        SetBodyFields(e) {
          for (let t in e)
            Array.isArray(e[t])
              ? this.Body()[`add_${t}`] &&
                e[t].forEach((e) => {
                  this.Body()[`add_${t}`](e);
                })
              : this.Body()[`set_${t}`] && this.Body()[`set_${t}`](e[t]);
        }
      }
    },
    ApMK: function (e, t, r) {
      "use strict";
      r.d(t, "f", function () {
        return n;
      }),
        r.d(t, "d", function () {
          return i;
        }),
        r.d(t, "a", function () {
          return a;
        }),
        r.d(t, "b", function () {
          return s;
        }),
        r.d(t, "c", function () {
          return o;
        }),
        r.d(t, "g", function () {
          return l;
        }),
        r.d(t, "e", function () {
          return c;
        });
      r("f5iL");
      function n(e) {
        if ((null == e ? void 0 : e.length) > 1) {
          let t = e.length;
          for (; 0 !== t; ) {
            let r = Math.floor(Math.random() * t);
            t -= 1;
            let n = e[t];
            (e[t] = e[r]), (e[r] = n);
          }
        }
      }
      function i(e, t, r) {
        t < 0 ||
          r < 0 ||
          (r >= e.length && (e[r] = void 0), e.splice(r, 0, e.splice(t, 1)[0]));
      }
      function a(e, t) {
        if (!e && !t) return !0;
        if (!e || !t) return !1;
        if (e.length != t.length) return !1;
        for (let r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
        return !0;
      }
      function s(e, t) {
        return o(e, (e) => t == e);
      }
      function o(e, t) {
        let r = e.findIndex(t);
        return r >= 0 && (e.splice(r, 1), !0);
      }
      function l(e, t, r) {
        let n = 0,
          i = e.length - 1;
        for (; n <= i; ) {
          let a = Math.floor((n + i) / 2),
            s = r(e[a], t);
          if (s < 0) n = a + 1;
          else if (s > 0) i = a - 1;
          else {
            if (i == a) return a;
            if (a == n) return i > a && r(t, e[a + 1]) < 0 ? a : a + 1;
            n = a;
          }
        }
        return i;
      }
      function c(e, t, r) {
        return (
          e ||
            console.error(
              "array should be defined for us to fill in the missing indexes"
            ),
          e.length < t ? e.concat(Array(t - e.length).fill(r)) : e
        );
      }
    },
    AvbV: function (e, t, r) {
      var n = {
        "./main_brazilian.json": ["TFAN", 42],
        "./main_bulgarian.json": ["c2SO", 43],
        "./main_czech.json": ["peP3", 44],
        "./main_danish.json": ["0bnV", 45],
        "./main_dutch.json": ["wcLc", 46],
        "./main_english.json": ["/rNK", 47],
        "./main_finnish.json": ["iywU", 48],
        "./main_french.json": ["Xnpc", 49],
        "./main_german.json": ["pmKi", 50],
        "./main_greek.json": ["mTRv", 51],
        "./main_hungarian.json": ["WkHb", 52],
        "./main_italian.json": ["Jz5U", 53],
        "./main_japanese.json": ["3Dk9", 54],
        "./main_koreana.json": ["neQD", 55],
        "./main_latam.json": ["6oHD", 56],
        "./main_norwegian.json": ["2OvS", 57],
        "./main_polish.json": ["3pwE", 58],
        "./main_portuguese.json": ["hY40", 59],
        "./main_romanian.json": ["Q95+", 60],
        "./main_russian.json": ["bsPT", 61],
        "./main_sc_schinese.json": ["GOaQ", 62],
        "./main_schinese.json": ["B/Zz", 63],
        "./main_spanish.json": ["U6iL", 64],
        "./main_swedish.json": ["4uPU", 65],
        "./main_tchinese.json": ["rgC9", 66],
        "./main_thai.json": ["87dp", 67],
        "./main_turkish.json": ["yMpO", 68],
        "./main_ukrainian.json": ["zTWm", 69],
        "./main_vietnamese.json": ["wqiy", 70],
      };
      function i(e) {
        if (!r.o(n, e))
          return Promise.resolve().then(function () {
            var t = new Error("Cannot find module '" + e + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          });
        var t = n[e],
          i = t[0];
        return r.e(t[1]).then(function () {
          return r.t(i, 3);
        });
      }
      (i.keys = function () {
        return Object.keys(n);
      }),
        (i.id = "AvbV"),
        (e.exports = i);
    },
    EuLa: function (e, t, r) {
      "use strict";
      function n(e) {
        if (!a() || !window.document.cookie) return null;
        let t = document.cookie.match("(^|; )" + e + "=([^;]*)");
        return t && t[2] ? decodeURIComponent(t[2]) : null;
      }
      function i(e, t, r, n) {
        if (!a()) return;
        n || (n = "/");
        let i = "";
        if (void 0 !== r && r) {
          let e = new Date();
          e.setTime(e.getTime() + 864e5 * r),
            (i = "; expires=" + e.toUTCString());
        }
        document.cookie =
          encodeURIComponent(e) +
          "=" +
          encodeURIComponent(t) +
          i +
          ";path=" +
          n;
      }
      function a() {
        return !!window.document;
      }
      r.d(t, "b", function () {
        return n;
      }),
        r.d(t, "c", function () {
          return i;
        }),
        r.d(t, "a", function () {
          return a;
        });
    },
    FhWJ: function (e, t, r) {
      e.exports = {
        BodyNoScroll: "modals_BodyNoScroll_3ItVl",
        BodyNoScrollDialog: "modals_BodyNoScrollDialog_3lrlA",
        OverlayModal: "modals_OverlayModal_1RM4p",
        GamepadOnlyModalWrapper: "modals_GamepadOnlyModalWrapper_3tgce",
        GamepadOnlyPanelWrapper: "modals_GamepadOnlyPanelWrapper_1vgBE",
      };
    },
    GTHt: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return d;
      });
      r("q1tI");
      var n = r("R1j/"),
        i = r("f5iL"),
        a = r("3u1o");
      class s {
        constructor(e) {
          (this.ModalUpdatedCallback = new a.a()),
            (this.key = "Modal_" + s.sm_lastKey++),
            (this.element = e);
        }
        UpdateModal(e) {
          (this.element = e), this.ModalUpdatedCallback.Dispatch();
        }
      }
      s.sm_lastKey = 0;
      class o {
        constructor() {
          (this.m_bUsePopups = !0),
            (this.m_rgModals = []),
            (this.m_ActiveOverlay = null),
            (this.m_OnModalShownCallbacks = new a.a()),
            (this.m_OnModalHiddenCallbacks = new a.a());
        }
        RegisterOverlay(e) {
          Object(i.a)(!this.m_ActiveOverlay, "Registering second overlay"),
            (this.m_ActiveOverlay = e),
            this.ForceUpdate();
        }
        UnregisterOverlay(e) {
          Object(i.a)(this.m_ActiveOverlay == e, "Active overlay mismatch"),
            this.m_ActiveOverlay == e && (this.m_ActiveOverlay = null);
        }
        RegisterOnModalShownCallback(e) {
          return this.m_OnModalShownCallbacks.Register(e);
        }
        RegisterOnModalHiddenCallback(e) {
          return this.m_OnModalHiddenCallbacks.Register(e);
        }
        get hasOverlay() {
          return null != this.m_ActiveOverlay;
        }
        ForceUpdate() {
          this.m_ActiveOverlay
            ? window.setTimeout(() => this.m_ActiveOverlay.forceUpdate(), 1)
            : Object(i.a)(
                !1,
                "Modal action was taken, but there is no <DialogOverlay> element to show it in.  Will retry when one is ready."
              );
        }
        get modals() {
          return this.m_rgModals;
        }
        get active_modal() {
          return this.m_rgModals.length
            ? this.m_rgModals[this.m_rgModals.length - 1]
            : void 0;
        }
        ShowModal(e) {
          return this.ShowModalInternal(e);
        }
        ShowModalInternal(e) {
          const t = new s(e);
          this.m_rgModals.push(t), this.ForceUpdate();
          const r = {
            Close: () => {
              let e = this.m_rgModals.indexOf(t);
              -1 != e && this.m_rgModals.splice(e, 1),
                this.ForceUpdate(),
                this.m_OnModalHiddenCallbacks.Dispatch(
                  r,
                  this.m_rgModals.length
                );
            },
            Update: (e) => {
              t.UpdateModal(e);
            },
          };
          return (
            this.m_OnModalShownCallbacks.Dispatch(r, this.m_rgModals.length), r
          );
        }
        SetUsePopups(e) {
          this.m_bUsePopups = e;
        }
        BUsePopups() {
          return this.m_bUsePopups;
        }
      }
      class l {
        constructor() {
          this.m_mapModalManager = new WeakMap();
        }
        GetModalManager(e) {
          let t = this.m_mapModalManager.get(e);
          return t || ((t = new o()), this.m_mapModalManager.set(e, t)), t;
        }
      }
      const c = Object(n.a)("ModalManagerFactory", () => new l());
      function d(e) {
        return c.GetModalManager(e);
      }
    },
    GXif: function (e, t, r) {
      "use strict";
      r.d(t, "b", function () {
        return d;
      }),
        r.d(t, "g", function () {
          return u;
        }),
        r.d(t, "p", function () {
          return m;
        }),
        r.d(t, "m", function () {
          return h;
        }),
        r.d(t, "n", function () {
          return p;
        }),
        r.d(t, "o", function () {
          return _;
        }),
        r.d(t, "a", function () {
          return b;
        }),
        r.d(t, "e", function () {
          return y;
        }),
        r.d(t, "c", function () {
          return S;
        }),
        r.d(t, "d", function () {
          return B;
        }),
        r.d(t, "f", function () {
          return v;
        });
      var n = r("q1tI"),
        i = r("msu0"),
        a = r("Zdsb"),
        s = r("/Q1a"),
        o = r("ApMK"),
        l = (r("f5iL"), r("suz2"), r("3u1o")),
        c = r("gwss");
      r.d(t, "h", function () {
        return c.b;
      }),
        r.d(t, "i", function () {
          return c.c;
        }),
        r.d(t, "k", function () {
          return c.e;
        }),
        r.d(t, "l", function () {
          return c.f;
        }),
        r.d(t, "q", function () {
          return c.h;
        }),
        r.d(t, "r", function () {
          return c.i;
        }),
        r.d(t, "s", function () {
          return c.j;
        }),
        r.d(t, "j", function () {
          return c.d;
        });
      class d {
        constructor() {
          (this.m_mapTokens = new Map()),
            (this.m_mapFallbackTokens = new Map()),
            (this.m_cbkTokensChanged = new l.a());
        }
        static InstallErrorReportingStore(e) {
          this.sm_ErrorReportingStore = e;
        }
        static GetLanguageFallback(e) {
          return "sc_schinese" === e ? "schinese" : "english";
        }
        static GetELanguageFallback(e) {
          return 29 === e ? 6 : 0;
        }
        static IsELanguageValidInRealm(e, t) {
          return (
            t === (29 === e ? a.h.k_ESteamRealmChina : a.h.k_ESteamRealmGlobal)
          );
        }
        static GetLanguageListForRealms(e) {
          const t = new Array();
          for (let r = 0; r < 30; r++)
            for (const n of e)
              if (this.IsELanguageValidInRealm(r, n)) {
                t.push(r);
                break;
              }
          return t;
        }
        InitFromObjects(e, t, r, n, i) {
          i || this.m_mapTokens.clear();
          const a = Object.assign(Object.assign({}, r || {}), e),
            s = Object.assign(Object.assign({}, n || {}), t || {});
          this.AddTokens(a, s), this.m_cbkTokensChanged.Dispatch();
        }
        InitDirect(e, t) {
          this.m_mapTokens.clear(),
            this.m_mapFallbackTokens.clear(),
            this.AddTokens(e, t),
            this.m_cbkTokensChanged.Dispatch();
        }
        AddTokens(e, t) {
          Object.keys(e).forEach((t) => {
            this.m_mapTokens.set(t, e[t]);
          }),
            t &&
              Object.keys(t).forEach((e) => {
                this.m_mapTokens.has(e) || this.m_mapTokens.set(e, t[e]),
                  this.m_mapFallbackTokens.set(e, t[e]);
              });
        }
        GetTokensChangedCallbackList() {
          return this.m_cbkTokensChanged;
        }
        GetPreferredLocales() {
          return this.m_rgLocalesToUse
            ? this.m_rgLocalesToUse
            : navigator && navigator.languages
            ? navigator.languages
            : ["en-US"];
        }
        GetELanguageFallbackOrder(e = null) {
          let t = new Array();
          if (
            (t.push(Object(i.g)(s.d.LANGUAGE)),
            (s.d.SUPPORTED_LANGUAGES || []).forEach((e) => {
              e.value != s.d.LANGUAGE && t.push(Object(i.g)(e.value));
            }),
            e)
          ) {
            d.GetLanguageListForRealms(e).forEach((e) => {
              -1 == t.indexOf(e) && t.push(e);
            });
          }
          return t;
        }
        SetPreferredLocales(e) {
          this.m_rgLocalesToUse = e;
        }
        LocalizeString(e, t) {
          if (!e || 0 == e.length || "#" != e.charAt(0)) return;
          let r = this.m_mapTokens.get(e.substring(1));
          if (void 0 !== r) return r;
          !t &&
            d.sm_ErrorReportingStore &&
            d.sm_ErrorReportingStore.ReportError(
              new Error(
                `Unable to find localization token '${e}' for language '${s.d.LANGUAGE}', ${this.m_mapTokens.size} tokens in map`
              ),
              { bIncludeMessageInIdentifier: !0 }
            );
        }
        LocalizeStringFromFallback(e) {
          if (!e || 0 == e.length || "#" != e.charAt(0)) return;
          let t = this.m_mapFallbackTokens.get(e.substring(1));
          return void 0 !== t ? t : void 0;
        }
      }
      function u(e, ...t) {
        let r = v.LocalizeString(e);
        return void 0 === r ? e : g(r, ...t);
      }
      function m(e, ...t) {
        let r = v.LocalizeString(e);
        if (void 0 === r) return e;
        let i,
          a = [],
          s = /(.*?)%(\d+)\$s/g,
          o = 0;
        for (; (i = s.exec(r)); ) {
          (o += i[0].length), a.push(i[1]);
          let e = parseInt(i[2]);
          e >= 1 && e <= t.length && a.push(t[e - 1]);
        }
        return a.push(r.substr(o)), n.createElement(n.Fragment, null, ...a);
      }
      function h(e, ...t) {
        let r = v.LocalizeString(e);
        return void 0 === r ? e : f(r, ...t);
      }
      function p(e, t, ...r) {
        let n;
        return (
          (n = u(1 === t || "1" === t ? e : e + "_Plural", t)),
          void 0 === n ? e : f(n, ...r)
        );
      }
      function f(e, ...t) {
        let r,
          i = [],
          a = /(.*?)<(\d+)>(.*)<\/(\2)>/g,
          s = 0;
        for (; (r = a.exec(e)); ) {
          (s += r[0].length), i.push(r[1]);
          let e = parseInt(r[2]),
            a = r[3] || "",
            o = (e >= 1 && e <= t.length ? t[e - 1] : null)
              ? n.cloneElement(t[e - 1], {}, [a])
              : a;
          i.push(o);
        }
        return i.push(e.substr(s)), n.createElement(n.Fragment, null, ...i);
      }
      function _(e, t, ...r) {
        return 1 === t || "1" === t ? u(e, t, ...r) : u(e + "_Plural", t, ...r);
      }
      function g(e, ...t) {
        return 0 == t.length
          ? e
          : (e = e.replace(/%(?:(\d+)\$)?s/g, function (e, r) {
              if (r <= t.length && r >= 1) {
                let e = t[r - 1];
                return String(null == e ? "" : e);
              }
              return e;
            }));
      }
      class b {
        static Set(e, t, r) {
          if (e.length <= t) {
            if (t >= 30) return e;
            e = Object(o.e)(e, t + 1, null);
          }
          return (e[t] = r), e;
        }
        static Get(e, t) {
          return (e && e.length > t && e[t]) || "";
        }
        static GetWithFallback(e, t) {
          if (e) {
            return b.Get(e, t) || b.Get(e, d.GetELanguageFallback(t));
          }
          return null;
        }
      }
      const w = {
          english: "en",
          german: "de",
          french: "fr",
          italian: "it",
          korean: "ko",
          latam: "es-419",
          spanish: "es",
          schinese: "zh-cn",
          tchinese: "zh-tw",
          russian: "ru",
          thai: "th",
          japanese: "ja",
          brazilian: "pt-br",
          portuguese: "pt",
          polish: "pl",
          danish: "da",
          dutch: "nl",
          finnish: "fi",
          norwegian: "no",
          swedish: "sv",
          hungarian: "hu",
          czech: "cs",
          romanian: "ro",
          turkish: "tr",
          arabic: "ar",
          bulgarian: "bg",
          greek: "el",
          ukrainian: "uk",
          vietnamese: "vn",
          sc_schinese: "zh-cn",
          koreana: "ko",
        },
        y = {
          "en-US": 0,
          "de-DE": 1,
          "fr-FR": 2,
          "it-IT": 3,
          "ko-KR": 4,
          "es-ES": 5,
          "zh-CH": 6,
          "zh-CN": 7,
          "ru-RU": 8,
          "th-TH": 9,
          "ja-JP": 10,
          "pt-PT": 11,
          "pl-PL": 12,
          "da-DK": 13,
          "nl-NL": 14,
          "fi-FI": 15,
          "nb-NO": 16,
          "sv-SE": 17,
          "hu-HU": 18,
          "cs-CZ": 19,
          "ro-RO": 20,
          "tr-TR": 21,
          "pt-BR": 22,
          "bg-BG": 23,
          "el-GR": 24,
          "ar-SA": 25,
          "uk-UA": 26,
          "es-419": 27,
          "vi-VN": 28,
        };
      function S() {
        return w[s.d.LANGUAGE] || null;
      }
      function B(e) {
        let t,
          r = new Promise((e) => (t = e)),
          n = Array(e.length),
          i = e.length;
        return (
          e.map((e, r) => {
            Promise.resolve(e)
              .then((e) => {
                (n[r] = e), i--, 0 == i && t(n);
              })
              .catch((e) => {
                console.error("Failed to load localiation file: " + e),
                  (n[r] = {}),
                  i--,
                  0 == i && t(n);
              });
          }),
          r
        );
      }
      const v = new d();
      window.LocalizationManager = v;
    },
    GbHM: function (e, t, r) {
      "use strict";
      function n(e) {
        return Object.keys(e).reduce(
          (t, r) => (e[r] ? (t ? `${t} ${r}` : r) : t),
          ""
        );
      }
      t.a = function (...e) {
        return e.reduce(
          (e, t) =>
            t
              ? "string" == typeof t
                ? e
                  ? `${e} ${t}`
                  : t
                : "object" == typeof t
                ? e
                  ? `${e} ${n(t)}`
                  : n(t)
                : e
              : e,
          ""
        );
      };
    },
    HGFm: function (e, t, r) {
      "use strict";
      var n;
      function i(e) {
        return e === n.k_ESteamRealmChina;
      }
      r.d(t, "b", function () {
        return n;
      }),
        r.d(t, "a", function () {
          return i;
        }),
        (function (e) {
          (e[(e.k_ESteamRealmUnknown = 0)] = "k_ESteamRealmUnknown"),
            (e[(e.k_ESteamRealmGlobal = 1)] = "k_ESteamRealmGlobal"),
            (e[(e.k_ESteamRealmChina = 2)] = "k_ESteamRealmChina");
        })(n || (n = {}));
    },
    Jsk2: function (e, t, r) {},
    KSg0: function (e, t, r) {
      e.exports = {
        v6: "shared_common_v6_3r3Le",
        SubText: "shared_common_SubText_3Ctn8",
        AvatarImageContainer: "shared_common_AvatarImageContainer_10L8e",
        GameImageContainer: "shared_common_GameImageContainer_2opUa",
        AvatarImage: "shared_common_AvatarImage_3GB71",
        STV_HomeGridPreviewDetails:
          "shared_common_STV_HomeGridPreviewDetails_h3usS",
        ChatAvatarImage: "shared_common_ChatAvatarImage_1GZJG",
        EditButton: "shared_common_EditButton_utVo_",
        Small: "shared_common_Small_2MbrV",
        FlexCenter: "shared_common_FlexCenter_24qeH",
        ThrobberCtn: "shared_common_ThrobberCtn_r-SBj",
        MarkdownLink: "shared_common_MarkdownLink_2KgeH",
        SummaryTextArea: "shared_common_SummaryTextArea_2xqdR",
        RemoveIcon: "shared_common_RemoveIcon_1iOrE",
      };
    },
    Nr4G: function (e, t, r) {
      "use strict";
      var n = r("hRO2");
      r("3dpo");
      n.Message;
    },
    Nt3m: function (e, t, r) {
      "use strict";
      r.d(t, "e", function () {
        return n;
      }),
        r.d(t, "a", function () {
          return i;
        }),
        r.d(t, "b", function () {
          return a;
        }),
        r.d(t, "c", function () {
          return s;
        }),
        r.d(t, "d", function () {
          return o;
        }),
        r.d(t, "f", function () {
          return l;
        });
      const n = {
        PerYear: 31536e3,
        PerMonth: 2628e3,
        PerWeek: 604800,
        PerDay: 86400,
        PerHour: 3600,
        PerMinute: 60,
      };
      function i(e, t) {
        return (
          e.getFullYear() == t.getFullYear() &&
          e.getMonth() == t.getMonth() &&
          e.getDate() == t.getDate()
        );
      }
      function a(e, t) {
        return e.getFullYear() == t.getFullYear();
      }
      function s(e) {
        return new Date(
          e.getFullYear(),
          e.getMonth(),
          e.getDate(),
          e.getHours(),
          0,
          0,
          0
        );
      }
      function o(e) {
        return new Date(e.getFullYear(), e.getMonth(), 1, 0, 0, 0, 0);
      }
      function l(e) {
        return new Promise((t) => setTimeout(t, e));
      }
    },
    QAsS: function (e, t, r) {
      "use strict";
      r.d(t, "c", function () {
        return s;
      }),
        r.d(t, "d", function () {
          return o;
        }),
        r.d(t, "a", function () {
          return l;
        }),
        r.d(t, "b", function () {
          return d;
        });
      var n = r("hRO2"),
        i = r("3dpo");
      const a = n.Message;
      class s extends a {
        constructor(e = null) {
          super(),
            s.prototype.v4 || i.a(s.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            s.sm_m ||
              (s.sm_m = {
                proto: s,
                fields: {
                  v4: { n: 1, br: i.d.readFixed32, bw: i.h.writeFixed32 },
                  v6: { n: 2, br: i.d.readBytes, bw: i.h.writeBytes },
                },
              }),
            s.sm_m
          );
        }
        static MBF() {
          return s.sm_mbf || (s.sm_mbf = i.e(s.M())), s.sm_mbf;
        }
        toObject(e = !1) {
          return s.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(s.M(), e, t);
        }
        static fromObject(e) {
          return i.c(s.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new s();
          return s.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(s.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return s.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(s.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return s.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgIPAddress";
        }
      }
      class o extends a {
        constructor(e = null) {
          super(),
            o.prototype.steamid || i.a(o.M()),
            a.initialize(this, e, 0, -1, [27], null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  steamid: {
                    n: 1,
                    br: i.d.readFixed64String,
                    bw: i.h.writeFixed64String,
                  },
                  client_sessionid: {
                    n: 2,
                    br: i.d.readInt32,
                    bw: i.h.writeInt32,
                  },
                  routing_appid: {
                    n: 3,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                  jobid_source: {
                    n: 10,
                    d: "18446744073709551615",
                    br: i.d.readFixed64String,
                    bw: i.h.writeFixed64String,
                  },
                  jobid_target: {
                    n: 11,
                    d: "18446744073709551615",
                    br: i.d.readFixed64String,
                    bw: i.h.writeFixed64String,
                  },
                  target_job_name: {
                    n: 12,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  seq_num: { n: 24, br: i.d.readInt32, bw: i.h.writeInt32 },
                  eresult: {
                    n: 13,
                    d: 2,
                    br: i.d.readInt32,
                    bw: i.h.writeInt32,
                  },
                  error_message: {
                    n: 14,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  ip: { n: 15, br: i.d.readUint32, bw: i.h.writeUint32 },
                  ip_v6: { n: 29, br: i.d.readBytes, bw: i.h.writeBytes },
                  auth_account_flags: {
                    n: 16,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                  token_source: {
                    n: 22,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                  admin_spoofing_user: {
                    n: 23,
                    br: i.d.readBool,
                    bw: i.h.writeBool,
                  },
                  transport_error: {
                    n: 17,
                    d: 1,
                    br: i.d.readInt32,
                    bw: i.h.writeInt32,
                  },
                  messageid: {
                    n: 18,
                    d: "18446744073709551615",
                    br: i.d.readUint64String,
                    bw: i.h.writeUint64String,
                  },
                  publisher_group_id: {
                    n: 19,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                  sysid: { n: 20, br: i.d.readUint32, bw: i.h.writeUint32 },
                  trace_tag: {
                    n: 21,
                    br: i.d.readUint64String,
                    bw: i.h.writeUint64String,
                  },
                  webapi_key_id: {
                    n: 25,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                  is_from_external_source: {
                    n: 26,
                    br: i.d.readBool,
                    bw: i.h.writeBool,
                  },
                  forward_to_sysid: {
                    n: 27,
                    r: !0,
                    q: !0,
                    br: i.d.readUint32,
                    bw: i.h.writeRepeatedUint32,
                  },
                  cm_sysid: { n: 28, br: i.d.readUint32, bw: i.h.writeUint32 },
                  launcher_type: {
                    n: 31,
                    d: 0,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                  realm: {
                    n: 32,
                    d: 0,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                  timeout_ms: {
                    n: 33,
                    d: -1,
                    br: i.d.readInt32,
                    bw: i.h.writeInt32,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = i.e(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(o.M(), e, t);
        }
        static fromObject(e) {
          return i.c(o.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new o();
          return o.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(o.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgProtoBufHeader";
        }
      }
      class l extends a {
        constructor(e = null) {
          super(),
            l.prototype.appid || i.a(l.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  appid: { n: 1, br: i.d.readUint32, bw: i.h.writeUint32 },
                  name: { n: 2, br: i.d.readString, bw: i.h.writeString },
                  icon: { n: 3, br: i.d.readString, bw: i.h.writeString },
                  tool: { n: 6, br: i.d.readBool, bw: i.h.writeBool },
                  demo: { n: 7, br: i.d.readBool, bw: i.h.writeBool },
                  media: { n: 8, br: i.d.readBool, bw: i.h.writeBool },
                  community_visible_stats: {
                    n: 9,
                    br: i.d.readBool,
                    bw: i.h.writeBool,
                  },
                  friendly_name: {
                    n: 10,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  propagation: {
                    n: 11,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  has_adult_content: {
                    n: 12,
                    br: i.d.readBool,
                    bw: i.h.writeBool,
                  },
                  is_visible_in_steam_china: {
                    n: 13,
                    br: i.d.readBool,
                    bw: i.h.writeBool,
                  },
                  app_type: { n: 14, br: i.d.readUint32, bw: i.h.writeUint32 },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = i.e(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(l.M(), e, t);
        }
        static fromObject(e) {
          return i.c(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCDDBAppDetailCommon";
        }
      }
      class c extends a {
        constructor(e = null) {
          super(),
            c.prototype.clanid || i.a(c.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  clanid: { n: 1, br: i.d.readUint32, bw: i.h.writeUint32 },
                  event_gid: {
                    n: 2,
                    br: i.d.readFixed64String,
                    bw: i.h.writeFixed64String,
                  },
                  announcement_gid: {
                    n: 3,
                    br: i.d.readFixed64String,
                    bw: i.h.writeFixed64String,
                  },
                  rtime_start: {
                    n: 4,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                  rtime_end: { n: 5, br: i.d.readUint32, bw: i.h.writeUint32 },
                  priority_score: {
                    n: 6,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                  type: { n: 7, br: i.d.readUint32, bw: i.h.writeUint32 },
                  clamp_range_slot: {
                    n: 8,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                  appid: { n: 9, br: i.d.readUint32, bw: i.h.writeUint32 },
                  rtime32_last_modified: {
                    n: 10,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = i.e(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(c.M(), e, t);
        }
        static fromObject(e) {
          return i.c(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanEventUserNewsTuple";
        }
      }
      class d extends a {
        constructor(e = null) {
          super(),
            d.prototype.rtime_before || i.a(d.M()),
            a.initialize(this, e, 0, -1, [4], null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  rtime_before: {
                    n: 1,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                  rtime_after: {
                    n: 2,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                  qualified: { n: 3, br: i.d.readUint32, bw: i.h.writeUint32 },
                  events: { n: 4, c: c, r: !0, q: !0 },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = i.e(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(d.M(), e, t);
        }
        static fromObject(e) {
          return i.c(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanMatchEventByRange";
        }
      }
    },
    Qfle: function (e, t, r) {
      e.exports = {
        nTimelineHoverEdgePadding: "4",
        TrailerPlayer: "trailerplayer_TrailerPlayer_1i1EC",
        PlayerControls: "trailerplayer_PlayerControls_17DgC",
        LowerControls: "trailerplayer_LowerControls_3uzFv",
        Timeline: "trailerplayer_Timeline_2Gb_i",
        Bar: "trailerplayer_Bar_1BXDR",
        Buffered: "trailerplayer_Buffered_2kyax",
        Played: "trailerplayer_Played_3S8so",
        HoverTick: "trailerplayer_HoverTick_1W9oI",
        HoverTime: "trailerplayer_HoverTime_3M1RD",
        UserInputNeeded: "trailerplayer_UserInputNeeded_tH6oU",
      };
    },
    Qhkv: function (e, t, r) {
      "use strict";
      var n = r("hRO2");
      r("3dpo");
      n.Message;
    },
    "R1j/": function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return n;
      });
      r("f5iL"), r("msu0");
      function n(e, t) {
        return t();
      }
    },
    "Ru/g": function (e, t, r) {
      "use strict";
      r.d(t, "b", function () {
        return w;
      }),
        r.d(t, "a", function () {
          return B;
        });
      var n = r("mrSG"),
        i = r("vDqi"),
        a = r.n(i),
        s = r("2vnA"),
        o = r("msu0"),
        l = (r("hbtq"), r("ApMK"), r("f5iL")),
        c = r("3u1o"),
        d = r("GXif"),
        u = r("7VqR"),
        m = r("vYsE"),
        h = r("Nt3m"),
        p = r("/Q1a"),
        f = r("VnJP"),
        _ = r("pJv3"),
        g = r("xYro"),
        b = r("1+R+");
      r("bFkU");
      const w = 5,
        y = "auto";
      var S;
      !(function (e) {
        (e[(e.HAVE_NOTHING = 0)] = "HAVE_NOTHING"),
          (e[(e.HAVE_METADATA = 1)] = "HAVE_METADATA"),
          (e[(e.HAVE_CURRENT_DATA = 2)] = "HAVE_CURRENT_DATA"),
          (e[(e.HAVE_FUTURE_DATA = 3)] = "HAVE_FUTURE_DATA"),
          (e[(e.HAVE_ENOUGH_DATA = 4)] = "HAVE_ENOUGH_DATA");
      })(S || (S = {}));
      class B {
        constructor(e, t = !1) {
          (this.m_elVideo = null),
            (this.m_strMPD = ""),
            (this.m_strHLS = ""),
            (this.m_strCDNAuthURLParameters = null),
            (this.m_schUpdateMPD = new c.b()),
            (this.m_bUseHLSManifest = !1),
            (this.m_strVideoAdaptationID = ""),
            (this.m_strAudioAdaptationID = ""),
            (this.m_strGameAdaptationID = ""),
            (this.m_rgLoaders = []),
            (this.m_mediaSource = null),
            (this.m_nTrackBufferMS = 0),
            (this.m_nLimitFPS = 0),
            (this.m_bIsBuffering = !0),
            (this.m_nSeekingToTime = -1),
            (this.m_listeners = new c.c()),
            (this.m_bFirstPlay = !0),
            (this.m_schGameDataEventTrigger = new c.b()),
            (this.m_schReportPlayerTrigger = new c.b()),
            (this.m_nGameDataLastFramePTS = -1),
            (this.m_bStatsViewVisible = !1),
            (this.m_schCaptureDisplayStatsTrigger = new c.b()),
            (this.m_videoRepSelected = null),
            (this.m_nAudioRepresentationIndex = 0),
            (this.m_timedTextRepSelected = null),
            (this.m_stats = new _.a()),
            (this.m_bClosing = !1),
            (this.m_hlsTimeOffset = 0),
            (this.m_bUserPlayChoice = !0),
            (this.m_bUserLiveEdgeChoice = !0),
            (this.m_schFirstFrameThrottler = new c.b()),
            (this.m_bookMarkAdapter = null),
            (this.m_schBookmarkUpdater = new c.b()),
            (this.m_elVideo = e),
            this.m_schReportPlayerTrigger.Schedule(3e4, this.ReportPlayerStats),
            (this.m_bUseHLSManifest = t);
        }
        CalcVideoStartRelativeToSystemClock(e) {
          let t =
            (e ? new Date(e).getTime() : Date.now()) -
            this.m_mpd.GetAvailabilityStartTime().getTime();
          this.m_mpd.StartLiveContentNow(t), Object(f.c)("server time: " + e);
        }
        PlayMPD(e, t, r) {
          return Object(n.a)(this, void 0, void 0, function* () {
            (this.m_strMPD = e),
              (this.m_strHLS = r),
              (this.m_strCDNAuthURLParameters = t);
            let n = yield this.DownloadMPD();
            if (n)
              if (((this.m_mpd = new g.b()), this.m_mpd.BParse(n.data))) {
                if (
                  (this.IsLiveContent() &&
                    (this.m_mpd.GetMinimumUpdatePeriod() > 0 &&
                      this.m_schUpdateMPD.Schedule(
                        1e3 * this.m_mpd.GetMinimumUpdatePeriod(),
                        this.UpdateMPD
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
                      this.OnVisibilityChange
                    )
                  );
                this.BCreateLoaders()
                  ? (this.m_stats.SetSegmentDurationMS(
                      Object(g.e)(this.GetCurrentVideoAdaptation())
                    ),
                    this.m_stats.SetAnalyticLinks(
                      this.m_mpd.GetStatsLink(),
                      this.m_mpd.GetStalledLink(),
                      this.m_mpd.GetEventLink()
                    ),
                    this.m_stats.SetVideoInitializationURL(
                      this.GetCurrentVideoAdaptation().segmentTemplate
                        .strInitialization
                    ),
                    this.InitVideoControl(),
                    this.InitTimedText())
                  : this.CloseWithError(
                      "playbackerror",
                      "Failed to create segment loaders"
                    );
              } else
                this.CloseWithError(
                  "playbackerror",
                  "Failed to parse MPD file",
                  this.m_strMPD
                );
          });
        }
        InitTimedText() {
          let e = !0;
          this.m_mpd.GetTimedTextAdaptionSet(0).forEach((t) => {
            let r = Object(o.g)(p.d.LANGUAGE);
            if (
              t.rgRepresentations.length > 0 &&
              t.rgRepresentations[0].strClosedCaptionFile &&
              d.e[t.strLanguage]
            ) {
              const n = document.createElement("track");
              (n.kind = "subtitles"),
                (n.label = Object(d.g)(
                  "#Language_" + Object(o.d)(d.e[t.strLanguage])
                )),
                (n.srclang = t.strLanguage),
                (n.src = t.rgRepresentations[0].strClosedCaptionFile),
                0 != r &&
                  d.e[t.strLanguage] == r &&
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
          for (let r = 0; r < this.m_elVideo.textTracks.length; r++) {
            const n = this.m_elVideo.textTracks[r];
            if (d.e[n.language] == e) {
              let e = this.GetTimeTextAdaptions(0).filter(
                (e) => e.strLanguage == n.language
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
        PlayWebRTC(e, t, r, n, i) {}
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
                this.OnVisibilityChange
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
            (this.m_nSeekingToTime = -1),
            (this.m_nGameDataLastFramePTS = -1),
            (this.m_bStatsViewVisible = !1),
            (this.m_videoRepSelected = null),
            (this.m_nAudioRepresentationIndex = 0),
            this.m_stats && this.m_stats.GetFPSMonitor().Close(),
            (this.m_stats = null),
            (this.m_bFirstPlay = !0);
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
          this.m_bIsBuffering = !0;
        }
        IsBuffering() {
          return this.m_bIsBuffering;
        }
        IsLiveContent() {
          return !!this.m_mpd && this.m_mpd.IsLiveContent();
        }
        DownloadMPD() {
          return Object(n.a)(this, void 0, void 0, function* () {
            if (this.m_xhrUpdateMPD)
              return Object(l.a)(!1, "Multiple MPD download requests"), null;
            let e = performance.now();
            for (; performance.now() - e < 3e4; ) {
              let e = null;
              try {
                this.m_xhrUpdateMPD = a.a.CancelToken.source();
                const t =
                  this.m_strMPD +
                  (this.m_strCDNAuthURLParameters
                    ? this.m_strCDNAuthURLParameters
                    : "");
                e = yield a.a.get(t, {
                  cancelToken: this.m_xhrUpdateMPD.token,
                });
              } catch (e) {}
              if (((this.m_xhrUpdateMPD = null), this.m_bClosing)) return null;
              if (e && 200 == e.status) return e;
              if (e && 410 == e.status)
                return (
                  this.CloseWithError(
                    "playbackerror",
                    "Failed to download MPD: 410 Gone"
                  ),
                  null
                );
              Object(f.c)("Failed to download, will retry: " + this.m_strMPD),
                yield Object(h.f)(200);
            }
            return Object(f.c)("Failed to download: " + this.m_strMPD), null;
          });
        }
        UpdateMPD() {
          return Object(n.a)(this, void 0, void 0, function* () {
            let e = yield this.DownloadMPD();
            e &&
              (this.m_mpd.BUpdate(e.data)
                ? (this.CalcVideoStartRelativeToSystemClock(e.headers.date),
                  this.m_stats.SetAnalyticLinks(
                    this.m_mpd.GetStatsLink(),
                    this.m_mpd.GetStalledLink(),
                    this.m_mpd.GetEventLink()
                  ),
                  this.m_mpd.GetMinimumUpdatePeriod() > 0 &&
                    this.m_schUpdateMPD.Schedule(
                      1e3 * this.m_mpd.GetMinimumUpdatePeriod(),
                      this.UpdateMPD
                    ))
                : this.CloseWithError(
                    "playbackerror",
                    "Failed to parse on Update the MPD file"
                  ));
          });
        }
        CloseWithError(e, ...t) {
          this.Close(), Object(f.c)(...t);
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
                Object(g.a)(e) &&
                ((t = e), (this.m_strVideoAdaptationID = e.strID)),
              !this.m_strAudioAdaptationID &&
                e.bContainsAudio &&
                Object(g.a)(e) &&
                ((t = e), (this.m_strAudioAdaptationID = e.strID)),
              !this.m_strGameAdaptationID &&
                e.bContainsGame &&
                ((t = e), (this.m_strGameAdaptationID = e.strID)),
              t)
            ) {
              let e = new b.a(this, this.m_mpd, t, this.m_stats);
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
              this.OnMediaSourceOpen
            ),
            this.m_listeners.AddEventListener(
              e,
              "sourceended",
              this.OnMediaSourceEnded
            ),
            this.m_listeners.AddEventListener(
              e,
              "sourceclose",
              this.OnMediaSourceClose
            ),
            this.m_listeners.AddEventListener(
              this.m_elVideo,
              "waiting",
              this.OnVideoWaiting
            ),
            this.m_listeners.AddEventListener(
              this.m_elVideo,
              "error",
              this.OnVideoError
            ),
            this.m_listeners.AddEventListener(
              this.m_elVideo,
              "canplay",
              this.OnVideoCanPlay
            ),
            this.m_listeners.AddEventListener(
              this.m_elVideo,
              "pause",
              this.OnVideoPause
            ),
            this.m_listeners.AddEventListener(
              this.m_elVideo,
              "resize",
              this.OnVideoResize
            ),
            this.m_listeners.AddEventListener(
              this.m_elVideo,
              "valve-bufferupdate",
              this.OnVideoTimeUpdate
            ),
            this.m_listeners.AddEventListener(
              this.m_elVideo,
              "timeupdate",
              this.OnVideoTimeUpdate
            ),
            this.m_listeners.AddEventListener(
              this.m_elVideo,
              "play",
              this.OnPlayAction
            );
        }
        OnMediaSourceOpen(e) {
          Object(f.c)("OnMediaSourceOpen");
          for (let e of this.m_rgLoaders) e.SetMediaSource(this.m_mediaSource);
          this.BeginPlayback();
        }
        OnMediaSourceEnded(e) {
          Object(f.c)("OnMediaSourceEnded");
        }
        OnMediaSourceClose(e) {
          Object(f.c)("OnMediaSourceClose");
        }
        OnVideoWaiting(e) {
          if (
            !this.IsLiveContent() &&
            this.m_mpd &&
            this.m_mpd.GetEndTime() - this.GetCurrentPlayTime() < 1
          )
            this.Pause();
          else if (
            !this.BIsPlayerBufferedBetween(
              this.m_elVideo.currentTime,
              this.m_elVideo.currentTime + 0.5
            )
          ) {
            if (this.m_elVideo && this.m_elVideo.buffered.length > 1) {
              let e = this.m_elVideo.currentTime,
                t = this.m_elVideo.buffered;
              for (let r = 0; r < t.length; ++r)
                if (
                  (Object(f.c)(
                    "OnVideoWaiting buffer " +
                      r +
                      " start:" +
                      t.start(r) +
                      " end: " +
                      t.end(r) +
                      " playerTime: " +
                      e
                  ),
                  t.start(r) <= e && e <= t.end(r))
                )
                  return (
                    Object(f.c)(
                      "OnVideoWaiting - time splitting, jumping to buffer " + r
                    ),
                    void this.Seek(t.start(r))
                  );
            }
            if (
              (this.m_stats.ReportVideoStalled(
                this.m_rgLoaders,
                this.m_elVideo
              ),
              null === this.m_videoRepSelected)
            ) {
              let e = !0,
                t = this.GetVideoLoader();
              if (t) {
                let r = this.m_mpd.GetLowestRepresentation(
                  this.GetCurrentVideoAdaptation().strID
                );
                r &&
                  !t.BIsCurrentRepresentation(r) &&
                  (t.ChangeRepresentation(r),
                  Object(f.c)(
                    "OnVideoWaiting - Stalled, forced restart download at resolution: " +
                      r.nWidth +
                      "x" +
                      r.nHeight +
                      "@" +
                      r.nFrameRate +
                      " instead"
                  ),
                  (e = !1)),
                  this.Seek(this.m_elVideo.currentTime);
              }
              e &&
                Object(f.c)(
                  "OnVideoWaiting - Stalled, already at lowest resolution. No action taken. BHasLoader: " +
                    (null != t)
                );
            } else
              Object(f.c)(
                "OnVideoWaiting - Stalled, user explicitly chose a resolution: " +
                  this.m_videoRepSelected.nWidth +
                  "x" +
                  this.m_videoRepSelected.nHeight +
                  "@" +
                  this.m_videoRepSelected.nFrameRate
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
            r = this.GetVideoLoader();
          this.m_elVideo &&
            r &&
            (t = r.GetAmountBufferedInPlayerMS(this.m_elVideo.currentTime)),
            Object(f.c)(
              "DebugMessage - Stats: " + e.type + " BufferedMS: " + t
            );
        }
        OnVideoError(e) {
          Object(f.c)("OnVideoError");
        }
        OnVideoCanPlay(e) {
          this.m_bIsBuffering ||
            (this.m_bUserPlayChoice && this.PlayOnElement(),
            this.m_stats.LogVideoOnCanPlay(e));
        }
        GetCurrentPlayTime() {
          return -1 != this.m_nSeekingToTime
            ? this.m_nSeekingToTime
            : this.m_bUseHLSManifest && this.m_mpd
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
                Object(f.c)(
                  "User is behind by " +
                    t.toFixed(2) +
                    " seconds, increasing playback speed to catch-up to live edge."
                );
            } else
              1.1 == this.m_elVideo.playbackRate &&
                this.m_elVideo.currentTime >= e - 1 &&
                ((this.m_elVideo.playbackRate = 1),
                Object(f.c)("User is caught up, returning to normal playrate"));
          }
        }
        SetBookmarkAdapter(e) {
          this.m_bookMarkAdapter = e;
        }
        SendUpdateToBookmarkServiceIfNeeded() {
          if (this.m_bookMarkAdapter) {
            let e = this.m_elVideo.currentTime,
              t = this.GetCurrentVideoAdaptation(),
              r = t && t.strID ? t.strID : null,
              n = this.GetCurrentAudioAdaptationfunction(),
              i = n && n.strID ? n.strID : null,
              a = this.GetCurrentTimedTextRepresentation(),
              s = a && a.strID ? a.strID : null;
            this.m_bookMarkAdapter.SetBookmark(e >= 0 ? e : 0, r, i, s),
              this.IsPaused()
                ? this.m_schBookmarkUpdater.Cancel()
                : this.m_schBookmarkUpdater.Schedule(
                    6e4,
                    this.SendUpdateToBookmarkServiceIfNeeded
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
              r = this.GetBufferedLiveEdgeTime(),
              n = this.m_mpd.GetTimeShiftBufferDepth();
            e = u.a(t - n + 10, 0, r);
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
                    1e3
                )
              : this.m_mpd.GetEndTime()),
            e
          );
        }
        IsPaused() {
          return this.m_elVideo.paused;
        }
        Play() {
          (this.m_bUserPlayChoice = !0),
            !this.IsLiveContent() &&
            this.m_mpd &&
            this.m_mpd.GetEndTime() - this.GetCurrentPlayTime() < 1
              ? this.Seek(this.m_mpd.GetStartTime())
              : this.Seek(this.GetCurrentPlayTime());
        }
        Pause() {
          (this.m_bUserLiveEdgeChoice = !1),
            1.1 == this.m_elVideo.playbackRate &&
              (this.m_elVideo.playbackRate = 1),
            (this.m_bUserPlayChoice = !1),
            this.m_elVideo.pause();
        }
        GetPlaybackRate() {
          return this.m_elVideo.paused ? 0 : this.m_elVideo.playbackRate;
        }
        GetCDNAuthURLParameter() {
          return this.m_strCDNAuthURLParameters;
        }
        OnSegmentDownloaded(e) {
          Object(f.c)(e.GetDebugName() + " OnSegmentDownloaded"),
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
                      this.m_stats.ExtractFrameInfo(this.m_elVideo)
                    );
                })
                .catch((t) => {
                  e && this.DispatchEvent("valve-userinputneeded");
                })
            : this.m_stats
                .GetFPSMonitor()
                .StartTracking(() =>
                  this.m_stats.ExtractFrameInfo(this.m_elVideo)
                );
        }
        OnVideoBufferProgress() {
          if (!this.IsBuffering()) return;
          let e = this.m_rgLoaders.length > 0,
            t = -1 != this.m_nSeekingToTime ? this.m_nSeekingToTime : 0;
          for (let r of this.m_rgLoaders) {
            if (!r.BHasEnoughBuffered(t)) {
              e = !1;
              break;
            }
            t = Math.max(t, r.GetBufferedStart());
          }
          e &&
            ((this.m_bIsBuffering = !1),
            (this.m_nSeekingToTime = -1),
            this.m_elVideo.currentTime != t
              ? (this.m_elVideo.currentTime = t)
              : this.m_elVideo.paused &&
                this.m_bUserPlayChoice &&
                this.PlayOnElement(),
            this.DispatchEvent("valve-bufferupdate"));
        }
        OnSegmentDownloadFailed(e) {
          this.StopDownloads(), this.DispatchEvent("valve-downloadfailed");
        }
        OnSegmentDownloadGone(e) {
          this.m_bIsBuffering && e.GetNumConsecutiveDownloadGones() <= 3
            ? this.Seek(
                this.GetCurrentPlayTime() +
                  Object(g.e)(this.GetCurrentVideoAdaptation()) / 1e3
              )
            : (Object(f.c)(
                "OnSegmentDownloadGone: too many consecutive 'gone', erroring the download: " +
                  e.GetNumConsecutiveDownloadGones()
              ),
              this.OnSegmentDownloadFailed(e));
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
          let e = 0;
          if (this.IsLiveContent()) {
            let t = Object(g.e)(this.GetCurrentVideoAdaptation()),
              r = 1e3 * this.m_mpd.GetMinBufferTime(),
              n = Math.max(t, r);
            this.SetTrackBufferMS(n),
              (e = this.GetBufferedLiveEdgeTime()),
              Object(f.c)(
                `Begin playback of live content [this.buffer=${this.m_nTrackBufferMS}][nStartTime=${e}]`
              );
          } else
            this.SetTrackBufferMS(8e3),
              (e = 0),
              this.m_bookMarkAdapter &&
                ((e = this.m_bookMarkAdapter.GetBeginPlaytime()),
                this.m_mpd.GetEndTime() - e < 5 && (e = 0)),
              Object(f.c)(
                `Begin playback of non-live content [this.buffer=${this.m_nTrackBufferMS}][nStartTime=${e}]`
              );
          if (
            (Object(f.c)("Starting playback at " + e), !this.m_bUseHLSManifest)
          ) {
            let e = this.PickStartingVideoRepresentation();
            for (let t of this.m_rgLoaders)
              if (t.ContainsVideo()) {
                t.ChangeRepresentation(e);
                let r = Object(g.e)(t.GetAdaptation());
                this.m_schFirstFrameThrottler.Schedule(
                  r / 2,
                  this.VerifyFirstSegementDownloadProgress
                );
              } else if (t.ContainsAudio() || t.ContainsGame()) {
                let e =
                  t.GetAdaptation().rgRepresentations.length > 0
                    ? t.GetAdaptation().rgRepresentations[0]
                    : null;
                t.ChangeRepresentation(e);
              }
          }
          this.Seek(e),
            this.GetGameLoader() &&
              this.m_schGameDataEventTrigger.Schedule(
                500,
                this.GameDataEventTrigger
              );
        }
        VerifyFirstSegementDownloadProgress() {
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
              Object(f.c)(
                "Video download progressing too slowly, choosing " +
                  t.nWidth +
                  "x" +
                  t.nHeight +
                  "@" +
                  t.nFrameRate +
                  " instead"
              ));
          }
        }
        PickStartingVideoRepresentation() {
          let e = this.GetVideoLoader();
          if (!e) return null;
          let t = e.GetAdaptation(),
            r = null;
          for (let n = e.GetRepresentationsCount() - 1; n >= 0; n--) {
            let e = t.rgRepresentations[n],
              i = e.nFrameRate ? e.nFrameRate : 0;
            if (
              !(this.m_nLimitFPS > 0 && i > this.m_nLimitFPS) &&
              ((r = e), this.GetVideoPlayerHeight() <= e.nHeight)
            )
              break;
          }
          return r;
        }
        DetermineBestVideoRepresentation() {
          let e = this.GetVideoLoader(),
            t = this.GetAudioLoader(),
            r = t && t != e ? t.GetEstimatedAudioRate() : 0,
            n = this.GetAvgLoaderDownloadRate(),
            i = e.GetRepresentationsCount() - 1,
            a = e.GetAdaptation().rgRepresentations[i];
          for (let t = i - 1; t >= 0; t--) {
            let i = e.GetAdaptation().rgRepresentations[t],
              s = (i.nBandwidth + r) * this.m_elVideo.playbackRate * 1.15;
            if (n < s) {
              Object(f.c)(
                `Video select: Skipping ${t} due to rate: [avg=${n}][required=${s}]`
              );
              continue;
            }
            let o = i.nFrameRate || 0;
            if (this.IsLiveContent() && o > 30) {
              let e = this.m_stats.GetFPSMonitor();
              if (
                e.BIsDroppingFrames() ||
                (e.BHasCurrentFPS() && Math.ceil(e.GetCurrentFPS()) < 29)
              ) {
                Object(f.c)(
                  `Video select: Skipping ${t} due to dropping frames and high FPS representation: [fps:${o}]`
                );
                continue;
              }
            }
            if (this.m_nLimitFPS > 0 && o > this.m_nLimitFPS) {
              Object(f.c)(
                `Video select: Skipping ${t} due to frame rate limit`
              );
              continue;
            }
            let l = a.nHeight || 0,
              c = i.nHeight || 0,
              d = this.GetVideoPlayerHeight();
            if (d > 0 && l > 0) {
              if (c > v(d)) break;
            }
            a = i;
          }
          return a;
        }
        UpdateVideoRepresentation(e) {
          if (e && this.m_videoRepSelected == e) return null;
          let t = this.GetVideoLoader();
          if (!t) return null;
          if (this.IsBuffering()) return null;
          let r = this.DetermineBestVideoRepresentation();
          return (this.m_videoRepSelected = null), t.ChangeRepresentation(r);
        }
        CanSeek() {
          return !0;
        }
        SeekAndPlay(e) {
          return (this.m_bUserPlayChoice = !0), this.Seek(e);
        }
        Seek(e) {
          if (!this.m_mpd) return 0;
          let t = this.GetAvailableVideoStartTime(),
            r = this.GetBufferedLiveEdgeTime();
          (e = u.a(e, t, r)), (this.m_bUserLiveEdgeChoice = e >= r - w);
          let n = this.m_elVideo.paused;
          if ((n || this.m_elVideo.pause(), this.m_bUseHLSManifest))
            (this.m_elVideo.currentTime = e - this.m_hlsTimeOffset),
              this.m_elVideo.play();
          else {
            (this.m_bIsBuffering = !0), (this.m_nSeekingToTime = e);
            for (let t of this.m_rgLoaders)
              t.ContainsGame() && (e = this.GetBufferedLiveEdgeTime()),
                t.Seek(e);
            this.DispatchEvent("valve-bufferupdate"),
              n && this.OnVideoBufferProgress();
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
            r = [this.GetVideoLoader()];
          for (let n of r) n && ((e += n.GetAvgDownloadRate()), t++);
          return 0 == t ? 0 : e / t;
        }
        GameDataEventTrigger() {
          let e = this.GetGameLoader();
          if (!e) return;
          let t = e.GetGameDataFrames(),
            r = -1;
          if (((r = t.length - 1), r >= 0)) {
            let n = t[r];
            n.pts != this.m_nGameDataLastFramePTS &&
              ((this.m_nGameDataLastFramePTS = n.pts),
              (n.gamedata.appid = e.GetLatestGameDataFrameAppID()),
              this.DispatchEvent("valve-gamedataupdate", n));
          }
          this.m_schGameDataEventTrigger.Schedule(
            500,
            this.GameDataEventTrigger
          );
        }
        DispatchEvent(e, t = null) {
          let r = new CustomEvent(e, {
            cancelable: !0,
            bubbles: !0,
            detail: t,
          });
          this.m_elVideo.dispatchEvent(r);
        }
        IsMuted() {
          return this.m_elVideo.muted;
        }
        SetMuted(e) {
          this.m_elVideo.muted = e;
        }
        SetVolume(e) {
          (e = u.a(e, 0, 1)), (this.m_elVideo.volume = e);
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
                this.CaptureStatsForDisplay
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
            this.m_elVideo.clientHeight
          ),
            this.m_stats.CaptureFrequentlyUpdatingInformation(
              this.m_elVideo,
              this.m_rgLoaders
            ),
            this.m_schCaptureDisplayStatsTrigger.Schedule(
              250,
              this.CaptureStatsForDisplay
            );
        }
        GetVideoRepresentations() {
          let e = [];
          if (
            (e.push({
              id: y,
              displayName: "Auto",
              selected: null === this.m_videoRepSelected,
            }),
            this.m_bUseHLSManifest)
          )
            return e;
          let t = this.GetCurrentVideoAdaptation();
          if (t)
            for (let r of t.rgRepresentations) {
              let t =
                  this.m_videoRepSelected &&
                  this.m_videoRepSelected.strID == r.strID,
                n = r.nFrameRate;
              n > 50 && r.nFrameRate < 70
                ? (n = 60)
                : n > 25 && n < 35 && (n = 30);
              let i = `${r.nWidth}x${r.nHeight} @ ${n}fps`;
              e.push({
                id: r.strID,
                displayName: i,
                selected: t,
                width: r.nWidth,
                fps: n,
              });
            }
          return (
            e.sort((e, t) =>
              e.width === t.width ? t.fps - e.fps : t.width - e.width
            ),
            e
          );
        }
        SetVideoRepresentation(e) {
          let t = !0,
            r = this.GetVideoLoader();
          if (e && e.id != y) {
            let n = r.GetRepresentationByID(e.id);
            n &&
              ((t = !1),
              (null !== this.m_videoRepSelected &&
                this.m_videoRepSelected.strID == n.strID) ||
                ((this.m_videoRepSelected = n),
                r.ChangeRepresentation(n),
                this.Seek(this.GetCurrentPlayTime())));
          }
          t && (this.m_videoRepSelected = null);
        }
        GetThumbnailForTimestamp(e) {
          try {
            const t =
                this.m_mpd.GetPeriods()[0].rgAdaptationSets[0].segmentTemplate
                  .nDuration / 1e3,
              r = e - (e % (t * 10)),
              n = Math.floor(r / t) + 1;
            let i =
              this.m_mpd.GetPeriods()[0].rgAdaptationSets[0].segmentTemplate
                .strMedia;
            return (
              (i = i.replace("/video/", "/scrollthumb/")),
              (i = i.replace("$RepresentationID$", "1")),
              (i = i.replace("$Number$", n.toString())),
              i
            );
          } catch (e) {
            return "";
          }
        }
      }
      function v(e) {
        return e < 360 ? 480 : e < 480 ? 720 : 4320;
      }
      Object(n.b)([m.a], B.prototype, "OnVisibilityChange", null),
        Object(n.b)([m.a], B.prototype, "UpdateMPD", null),
        Object(n.b)([m.a], B.prototype, "OnMediaSourceOpen", null),
        Object(n.b)([m.a], B.prototype, "OnMediaSourceEnded", null),
        Object(n.b)([m.a], B.prototype, "OnMediaSourceClose", null),
        Object(n.b)([m.a], B.prototype, "OnVideoWaiting", null),
        Object(n.b)([m.a], B.prototype, "OnVideoPause", null),
        Object(n.b)([m.a], B.prototype, "OnVideoResize", null),
        Object(n.b)(
          [m.a],
          B.prototype,
          "OnDebugPrintEventInfoAndAvailableBuffer",
          null
        ),
        Object(n.b)([m.a], B.prototype, "OnVideoError", null),
        Object(n.b)([m.a], B.prototype, "OnVideoCanPlay", null),
        Object(n.b)([m.a], B.prototype, "GetCurrentPlayTime", null),
        Object(n.b)([m.a], B.prototype, "OnVideoTimeUpdate", null),
        Object(n.b)(
          [m.a],
          B.prototype,
          "SendUpdateToBookmarkServiceIfNeeded",
          null
        ),
        Object(n.b)([m.a], B.prototype, "OnPlayAction", null),
        Object(n.b)([m.a], B.prototype, "GetPlaybackRate", null),
        Object(n.b)([m.a], B.prototype, "GetCDNAuthURLParameter", null),
        Object(n.b)([m.a], B.prototype, "OnSegmentDownloaded", null),
        Object(n.b)([m.a], B.prototype, "PlayOnElement", null),
        Object(n.b)([m.a], B.prototype, "OnSegmentDownloadFailed", null),
        Object(n.b)([m.a], B.prototype, "OnSegmentDownloadGone", null),
        Object(n.b)(
          [m.a],
          B.prototype,
          "VerifyFirstSegementDownloadProgress",
          null
        ),
        Object(n.b)([m.a], B.prototype, "GameDataEventTrigger", null),
        Object(n.b)([m.a], B.prototype, "ReportPlayerStats", null),
        Object(n.b)([s.k.bound], B.prototype, "CaptureStatsForDisplay", null);
    },
    TqgT: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return s;
      });
      r("msu0");
      var n = r("vDqi"),
        i = r.n(n),
        a = r("9XWO");
      function s(e) {
        if (i.a.isCancel(e))
          return { strErrorMsg: "Action Cancelled:" + e, errorCode: 52 };
        if (
          void 0 !== e.response &&
          e.response.data &&
          "object" == typeof e.response.data
        ) {
          if ("msg" in e.response.data)
            return {
              strErrorMsg: e.response.data.msg,
              errorCode: e.response.data.success,
            };
          if ("err_msg" in e.response.data)
            return {
              strErrorMsg: e.response.data.err_msg,
              errorCode: e.response.data.success,
            };
          if ("message" in e.response.data)
            return {
              strErrorMsg: e.response.data.message,
              errorCode: e.response.data.success,
            };
        } else {
          if (void 0 !== e.success && void 0 !== e.msg)
            return { strErrorMsg: e.msg, errorCode: e.success };
          if (void 0 !== e.success && void 0 !== e.message)
            return { strErrorMsg: e.message, errorCode: e.success };
          if (void 0 !== e.success && void 0 !== e.err_msg)
            return { strErrorMsg: e.err_msg, errorCode: e.success };
          if ("string" == typeof e && e.length > 1024)
            console.groupCollapsed(
              "GetMsgAndErrorCodeFromResponse cannot parse: "
            ),
              console.error(e),
              console.groupEnd();
          else {
            if ("object" == typeof e && e instanceof a.b)
              return {
                strErrorMsg: "" + e.GetEResult(),
                errorCode: e.GetEResult(),
              };
            console.error("GetMsgAndErrorCodeFromResponse cannot parse: ", e);
          }
        }
        return "object" == typeof e && "status" in e
          ? {
              strErrorMsg: "Unknown Error: " + e + "\nStatus Code:" + e.status,
              errorCode: 2,
            }
          : { strErrorMsg: "Unknown Error: " + e, errorCode: 2 };
      }
    },
    VnJP: function (e, t, r) {
      "use strict";
      function n(...e) {}
      function i(e) {
        let t = Math.floor(e / 3600),
          r = Math.floor(e / 60) % 60,
          n = Math.floor(e) % 60,
          i = n.toString();
        n < 10 && (i = "0" + i);
        let a = r.toString();
        return (
          r < 10 && t > 0 && (a = "0" + a), (t > 0 ? t + ":" : "") + a + ":" + i
        );
      }
      function a() {
        let e = !1;
        try {
          e = MediaSource.isTypeSupported(
            'video/mp4;codecs="avc1.4d4032,mp4a.40.2"'
          );
        } catch (e) {}
        return e;
      }
      function s() {
        let e = document
          .createElement("video")
          .canPlayType(
            'application/vnd.apple.mpegurl;codecs="avc1.64001f,mp4a.40.02"'
          );
        return "probably" === e || "maybe" === e;
      }
      r.d(t, "c", function () {
        return n;
      }),
        r.d(t, "d", function () {
          return i;
        }),
        r.d(t, "a", function () {
          return a;
        }),
        r.d(t, "b", function () {
          return s;
        });
    },
    XThB: function (e, t, r) {
      "use strict";
    },
    Zdsb: function (e, t, r) {
      "use strict";
      r.d(t, "g", function () {
        return n.e;
      }),
        r.d(t, "k", function () {
          return n.f;
        }),
        r.d(t, "f", function () {
          return n.d;
        }),
        r.d(t, "l", function () {
          return n.g;
        }),
        r.d(t, "e", function () {
          return n.c;
        }),
        r.d(t, "h", function () {
          return s.b;
        }),
        r.d(t, "b", function () {
          return s.a;
        }),
        r.d(t, "d", function () {
          return l;
        }),
        r.d(t, "i", function () {
          return c;
        }),
        r.d(t, "m", function () {
          return u;
        }),
        r.d(t, "j", function () {
          return w;
        }),
        r.d(t, "a", function () {
          return B;
        }),
        r.d(t, "c", function () {
          return v;
        });
      var n = r("msu0");
      var i, a;
      !(function (e) {
        (e[(e.Input = 0)] = "Input"), (e[(e.Output = 1)] = "Output");
      })(i || (i = {})),
        (function (e) {
          (e[(e.Input = 0)] = "Input"),
            (e[(e.AllOutput = 1)] = "AllOutput"),
            (e[(e.Left = 2)] = "Left"),
            (e[(e.Right = 3)] = "Right"),
            (e[(e.Sub = 4)] = "Sub"),
            (e[(e.BackLeft = 5)] = "BackLeft"),
            (e[(e.BackRight = 6)] = "BackRight");
        })(a || (a = {}));
      var s = r("HGFm");
      var o;
      !(function (e) {
        (e[(e.k_BluetoothDeviceType_Invalid = 0)] =
          "k_BluetoothDeviceType_Invalid"),
          (e[(e.k_BluetoothDeviceType_Unknown = 1)] =
            "k_BluetoothDeviceType_Unknown"),
          (e[(e.k_BluetoothDeviceType_Phone = 2)] =
            "k_BluetoothDeviceType_Phone"),
          (e[(e.k_BluetoothDeviceType_Computer = 3)] =
            "k_BluetoothDeviceType_Computer"),
          (e[(e.k_BluetoothDeviceType_Headset = 4)] =
            "k_BluetoothDeviceType_Headset"),
          (e[(e.k_BluetoothDeviceType_Headphones = 5)] =
            "k_BluetoothDeviceType_Headphones"),
          (e[(e.k_BluetoothDeviceType_Speakers = 6)] =
            "k_BluetoothDeviceType_Speakers"),
          (e[(e.k_BluetoothDeviceType_OtherAudio = 7)] =
            "k_BluetoothDeviceType_OtherAudio"),
          (e[(e.k_BluetoothDeviceType_Mouse = 8)] =
            "k_BluetoothDeviceType_Mouse"),
          (e[(e.k_BluetoothDeviceType_Joystick = 9)] =
            "k_BluetoothDeviceType_Joystick"),
          (e[(e.k_BluetoothDeviceType_Gamepad = 10)] =
            "k_BluetoothDeviceType_Gamepad"),
          (e[(e.k_BluetoothDeviceType_Keyboard = 11)] =
            "k_BluetoothDeviceType_Keyboard");
      })(o || (o = {}));
      var l, c, d;
      !(function (e) {
        (e[(e.EBrowserType_OffScreen = 0)] = "EBrowserType_OffScreen"),
          (e[(e.EBrowserType_OpenVROverlay = 1)] =
            "EBrowserType_OpenVROverlay"),
          (e[(e.EBrowserType_OpenVROverlay_Dashboard = 2)] =
            "EBrowserType_OpenVROverlay_Dashboard"),
          (e[(e.EBrowserType_DirectHWND = 3)] = "EBrowserType_DirectHWND"),
          (e[(e.EBrowserType_DirectHWND_Borderless = 4)] =
            "EBrowserType_DirectHWND_Borderless"),
          (e[(e.EBrowserType_DirectHWND_Hidden = 5)] =
            "EBrowserType_DirectHWND_Hidden"),
          (e[(e.EBrowserType_ChildHWNDNative = 6)] =
            "EBrowserType_ChildHWNDNative"),
          (e[(e.EBrowserType_Transparent_Toplevel = 7)] =
            "EBrowserType_Transparent_Toplevel"),
          (e[(e.EBrowserType_OffScreen_SharedTexture = 8)] =
            "EBrowserType_OffScreen_SharedTexture"),
          (e[(e.EBrowserType_OffScreen_GameOverlay = 9)] =
            "EBrowserType_OffScreen_GameOverlay"),
          (e[(e.EBrowserType_OffScreen_GameOverlay_SharedTexture = 10)] =
            "EBrowserType_OffScreen_GameOverlay_SharedTexture"),
          (e[(e.EBrowserType_Offscreen_FriendsUI = 11)] =
            "EBrowserType_Offscreen_FriendsUI"),
          (e[(e.EBrowserType_MAX = 12)] = "EBrowserType_MAX");
      })(l || (l = {})),
        (function (e) {
          (e[(e.SystemKey0 = 0)] = "SystemKey0"),
            (e[(e.SystemKey1 = 1)] = "SystemKey1");
        })(c || (c = {})),
        (function (e) {
          (e[(e.Hidden = 0)] = "Hidden"),
            (e[(e.Notification = 1)] = "Notification"),
            (e[(e.Overlay = 2)] = "Overlay"),
            (e[(e.Opaque = 3)] = "Opaque"),
            (e[(e.OverlayKeyboard = 4)] = "OverlayKeyboard");
        })(d || (d = {}));
      class u {}
      var m;
      !(function (e) {
        (e[(e.k_EPending = 0)] = "k_EPending"),
          (e[(e.k_EAccepted = 1)] = "k_EAccepted"),
          (e[(e.k_ERejected = 2)] = "k_ERejected");
      })(m || (m = {}));
      var h = r("hRO2");
      r("3dpo");
      h.Message;
      var p, f, _;
      !(function (e) {
        (e[(e.k_EControllerBindingType_None = 0)] =
          "k_EControllerBindingType_None"),
          (e[(e.k_EControllerBindingType_Key = 1)] =
            "k_EControllerBindingType_Key"),
          (e[(e.k_EControllerBindingType_MouseButton = 2)] =
            "k_EControllerBindingType_MouseButton"),
          (e[(e.k_EControllerBindingType_Gamepad = 3)] =
            "k_EControllerBindingType_Gamepad"),
          (e[(e.k_EControllerBindingType_Mousewheel = 4)] =
            "k_EControllerBindingType_Mousewheel"),
          (e[(e.k_EControllerBindingType_Modeshift = 5)] =
            "k_EControllerBindingType_Modeshift"),
          (e[(e.k_EControllerBindingType_GameAction = 6)] =
            "k_EControllerBindingType_GameAction"),
          (e[(e.k_EControllerBindingType_ControllerAction = 7)] =
            "k_EControllerBindingType_ControllerAction");
      })(p || (p = {}));
      !(function (e) {
        (e[(e.k_ERemoteClientLaunchOK = 1)] = "k_ERemoteClientLaunchOK"),
          (e[(e.k_ERemoteClientLaunchFail = 2)] = "k_ERemoteClientLaunchFail"),
          (e[(e.k_ERemoteClientLaunchRequiresUI = 3)] =
            "k_ERemoteClientLaunchRequiresUI"),
          (e[(e.k_ERemoteClientLaunchRequiresLaunchOption = 4)] =
            "k_ERemoteClientLaunchRequiresLaunchOption"),
          (e[(e.k_ERemoteClientLaunchRequiresEULA = 5)] =
            "k_ERemoteClientLaunchRequiresEULA"),
          (e[(e.k_ERemoteClientLaunchTimeout = 6)] =
            "k_ERemoteClientLaunchTimeout"),
          (e[(e.k_ERemoteClientLaunchStreamTimeout = 7)] =
            "k_ERemoteClientLaunchStreamTimeout"),
          (e[(e.k_ERemoteClientLaunchStreamClientFail = 8)] =
            "k_ERemoteClientLaunchStreamClientFail"),
          (e[(e.k_ERemoteClientLaunchOtherGameRunning = 9)] =
            "k_ERemoteClientLaunchOtherGameRunning"),
          (e[(e.k_ERemoteClientLaunchDownloadStarted = 10)] =
            "k_ERemoteClientLaunchDownloadStarted"),
          (e[(e.k_ERemoteClientLaunchDownloadNoSpace = 11)] =
            "k_ERemoteClientLaunchDownloadNoSpace"),
          (e[(e.k_ERemoteClientLaunchDownloadFiltered = 12)] =
            "k_ERemoteClientLaunchDownloadFiltered"),
          (e[(e.k_ERemoteClientLaunchDownloadRequiresUI = 13)] =
            "k_ERemoteClientLaunchDownloadRequiresUI"),
          (e[(e.k_ERemoteClientLaunchAccessDenied = 14)] =
            "k_ERemoteClientLaunchAccessDenied"),
          (e[(e.k_ERemoteClientLaunchNetworkError = 15)] =
            "k_ERemoteClientLaunchNetworkError"),
          (e[(e.k_ERemoteClientLaunchProgress = 16)] =
            "k_ERemoteClientLaunchProgress"),
          (e[(e.k_ERemoteClientLaunchParentalUnlockFailed = 17)] =
            "k_ERemoteClientLaunchParentalUnlockFailed"),
          (e[(e.k_ERemoteClientLaunchScreenLocked = 18)] =
            "k_ERemoteClientLaunchScreenLocked"),
          (e[(e.k_ERemoteClientLaunchUnsupported = 19)] =
            "k_ERemoteClientLaunchUnsupported"),
          (e[(e.k_ERemoteClientLaunchDisabledLocal = 20)] =
            "k_ERemoteClientLaunchDisabledLocal"),
          (e[(e.k_ERemoteClientLaunchDisabledRemote = 21)] =
            "k_ERemoteClientLaunchDisabledRemote"),
          (e[(e.k_ERemoteClientLaunchBroadcasting = 22)] =
            "k_ERemoteClientLaunchBroadcasting"),
          (e[(e.k_ERemoteClientLaunchBusy = 23)] = "k_ERemoteClientLaunchBusy"),
          (e[(e.k_ERemoteClientLaunchDriversNotInstalled = 24)] =
            "k_ERemoteClientLaunchDriversNotInstalled"),
          (e[(e.k_ERemoteClientLaunchTransportUnavailable = 25)] =
            "k_ERemoteClientLaunchTransportUnavailable"),
          (e[(e.k_ERemoteClientLaunchCanceled = 26)] =
            "k_ERemoteClientLaunchCanceled"),
          (e[(e.k_ERemoteClientLaunchInvisible = 27)] =
            "k_ERemoteClientLaunchInvisible"),
          (e[(e.k_ERemoteClientLaunchRestrictedCountry = 28)] =
            "k_ERemoteClientLaunchRestrictedCountry");
      })(f || (f = {}));
      !(function (e) {
        (e[(e.k_EClientUINotificationGroupChatMessage = 1)] =
          "k_EClientUINotificationGroupChatMessage"),
          (e[(e.k_EClientUINotificationFriendChatMessage = 2)] =
            "k_EClientUINotificationFriendChatMessage"),
          (e[(e.k_EClientUINotificationFriendPersonaState = 3)] =
            "k_EClientUINotificationFriendPersonaState");
      })(_ || (_ = {}));
      var g, b, w, y, S;
      !(function (e) {
        (e[(e.Unknown = 0)] = "Unknown"),
          (e[(e.Wired = 1)] = "Wired"),
          (e[(e.Wireless = 2)] = "Wireless"),
          (e[(e.Virtual = 3)] = "Virtual");
      })(g || (g = {})),
        (function (e) {
          (e[(e.NotPresent = 0)] = "NotPresent"),
            (e[(e.Failed = 1)] = "Failed"),
            (e[(e.Disconnected = 2)] = "Disconnected"),
            (e[(e.Disconnecting = 3)] = "Disconnecting"),
            (e[(e.Connecting = 4)] = "Connecting"),
            (e[(e.Connected = 5)] = "Connected"),
            (e[(e.Retrying = 6)] = "Retrying");
        })(b || (b = {})),
        (function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.Weak = 1)] = "Weak"),
            (e[(e.Ok = 2)] = "Ok"),
            (e[(e.Good = 3)] = "Good"),
            (e[(e.Excellent = 4)] = "Excellent");
        })(w || (w = {})),
        (function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.StaticWep = 1)] = "StaticWep"),
            (e[(e.DynamicWep = 2)] = "DynamicWep"),
            (e[(e.Wpa = 4)] = "Wpa"),
            (e[(e.WpaEnterprise = 8)] = "WpaEnterprise"),
            (e[(e.Wpa2 = 16)] = "Wpa2"),
            (e[(e.Wpa2Enterprise = 32)] = "Wpa2Enterprise"),
            (e[(e.Unsupported = 32768)] = "Unsupported");
        })(y || (y = {})),
        (function (e) {
          (e[(e.k_EHTTPProxyMode_Invalid = 0)] = "k_EHTTPProxyMode_Invalid"),
            (e[(e.k_EHTTPProxyMode_None = 1)] = "k_EHTTPProxyMode_None"),
            (e[(e.k_EHTTPProxyMode_Manual = 2)] = "k_EHTTPProxyMode_Manual"),
            (e[(e.k_EHTTPProxyMode_Automatic = 3)] =
              "k_EHTTPProxyMode_Automatic");
        })(S || (S = {}));
      r("8G9o"), r("yfxr");
      function B(e) {
        switch (e) {
          case 0:
            return "game";
          case 6:
            return "software";
          case 1:
            return "demo";
          case 4:
            return "dlc";
          case 7:
          case 3:
            return "video";
          case 11:
            return "music";
          case 12:
            return "beta";
          case 2:
            return "mod";
        }
        return "invalid";
      }
      function v(e) {
        return (
          "game" === e ||
          "dlc" === e ||
          "software" === e ||
          "music" === e ||
          "application" === e ||
          "demo" === e ||
          "hardware" === e ||
          "mod" === e ||
          "video" == e ||
          "beta" === e ||
          "advertising" === e
        );
      }
      var C, M;
      !(function (e) {
        (e[(e.k_EComputerActiveStateInvalid = 0)] =
          "k_EComputerActiveStateInvalid"),
          (e[(e.k_EComputerActiveStateActive = 1)] =
            "k_EComputerActiveStateActive"),
          (e[(e.k_EComputerActiveStateIdle = 2)] =
            "k_EComputerActiveStateIdle");
      })(C || (C = {})),
        (function (e) {
          (e[(e.k_EClientUsedInputTypeKeyboard = 0)] =
            "k_EClientUsedInputTypeKeyboard"),
            (e[(e.k_EClientUsedInputTypeMouse = 1)] =
              "k_EClientUsedInputTypeMouse"),
            (e[(e.k_EClientUsedInputTypeController = 2)] =
              "k_EClientUsedInputTypeController"),
            (e[(e.k_EClientUsedInputTypeMax = 3)] =
              "k_EClientUsedInputTypeMax");
        })(M || (M = {}));
    },
    bFkU: function (e, t, r) {
      "use strict";
      r("pJv3");
    },
    e356: function (e, t, r) {
      "use strict";
      r.d(t, "gb", function () {
        return u;
      }),
        r.d(t, "y", function () {
          return m;
        }),
        r.d(t, "E", function () {
          return h;
        }),
        r.d(t, "Q", function () {
          return p;
        }),
        r.d(t, "r", function () {
          return f;
        }),
        r.d(t, "C", function () {
          return _;
        }),
        r.d(t, "qb", function () {
          return g;
        }),
        r.d(t, "M", function () {
          return b;
        }),
        r.d(t, "Fb", function () {
          return w;
        }),
        r.d(t, "Gb", function () {
          return y;
        }),
        r.d(t, "W", function () {
          return S;
        }),
        r.d(t, "Cb", function () {
          return B;
        }),
        r.d(t, "Ab", function () {
          return v;
        }),
        r.d(t, "Z", function () {
          return C;
        }),
        r.d(t, "Y", function () {
          return M;
        }),
        r.d(t, "q", function () {
          return E;
        }),
        r.d(t, "v", function () {
          return k;
        }),
        r.d(t, "O", function () {
          return T;
        }),
        r.d(t, "sb", function () {
          return L;
        }),
        r.d(t, "g", function () {
          return R;
        }),
        r.d(t, "c", function () {
          return x;
        }),
        r.d(t, "u", function () {
          return O;
        }),
        r.d(t, "x", function () {
          return D;
        }),
        r.d(t, "rb", function () {
          return I;
        }),
        r.d(t, "R", function () {
          return G;
        }),
        r.d(t, "U", function () {
          return j;
        }),
        r.d(t, "cb", function () {
          return A;
        }),
        r.d(t, "bb", function () {
          return F;
        }),
        r.d(t, "vb", function () {
          return P;
        }),
        r.d(t, "H", function () {
          return N;
        }),
        r.d(t, "w", function () {
          return V;
        }),
        r.d(t, "S", function () {
          return z;
        }),
        r.d(t, "ob", function () {
          return U;
        }),
        r.d(t, "Bb", function () {
          return W;
        }),
        r.d(t, "m", function () {
          return H;
        }),
        r.d(t, "I", function () {
          return $;
        }),
        r.d(t, "ib", function () {
          return q;
        }),
        r.d(t, "eb", function () {
          return Z;
        }),
        r.d(t, "fb", function () {
          return Y;
        }),
        r.d(t, "h", function () {
          return K;
        }),
        r.d(t, "V", function () {
          return X;
        }),
        r.d(t, "zb", function () {
          return Q;
        }),
        r.d(t, "N", function () {
          return J;
        }),
        r.d(t, "D", function () {
          return ee;
        }),
        r.d(t, "xb", function () {
          return te;
        }),
        r.d(t, "wb", function () {
          return re;
        }),
        r.d(t, "l", function () {
          return ne;
        }),
        r.d(t, "s", function () {
          return ie;
        }),
        r.d(t, "J", function () {
          return ae;
        }),
        r.d(t, "jb", function () {
          return se;
        }),
        r.d(t, "z", function () {
          return oe;
        }),
        r.d(t, "G", function () {
          return le;
        }),
        r.d(t, "B", function () {
          return ce;
        }),
        r.d(t, "K", function () {
          return de;
        }),
        r.d(t, "A", function () {
          return ue;
        }),
        r.d(t, "X", function () {
          return me;
        }),
        r.d(t, "b", function () {
          return he;
        }),
        r.d(t, "Db", function () {
          return pe;
        }),
        r.d(t, "a", function () {
          return fe;
        }),
        r.d(t, "T", function () {
          return _e;
        }),
        r.d(t, "L", function () {
          return ge;
        }),
        r.d(t, "F", function () {
          return be;
        }),
        r.d(t, "t", function () {
          return we;
        }),
        r.d(t, "tb", function () {
          return ye;
        }),
        r.d(t, "yb", function () {
          return Se;
        }),
        r.d(t, "p", function () {
          return Be;
        }),
        r.d(t, "o", function () {
          return ve;
        }),
        r.d(t, "n", function () {
          return Ce;
        }),
        r.d(t, "e", function () {
          return Me;
        }),
        r.d(t, "f", function () {
          return Ee;
        }),
        r.d(t, "ub", function () {
          return ke;
        }),
        r.d(t, "db", function () {
          return Te;
        }),
        r.d(t, "d", function () {
          return Le;
        }),
        r.d(t, "P", function () {
          return Re;
        }),
        r.d(t, "ab", function () {
          return xe;
        }),
        r.d(t, "Eb", function () {
          return Oe;
        }),
        r.d(t, "k", function () {
          return De;
        }),
        r.d(t, "j", function () {
          return Ie;
        }),
        r.d(t, "i", function () {
          return Ge;
        }),
        r.d(t, "hb", function () {
          return je;
        }),
        r.d(t, "pb", function () {
          return Ae;
        }),
        r.d(t, "nb", function () {
          return Fe;
        }),
        r.d(t, "kb", function () {
          return Pe;
        }),
        r.d(t, "mb", function () {
          return Ne;
        }),
        r.d(t, "lb", function () {
          return Ve;
        });
      var n = r("mrSG"),
        i = r("q1tI"),
        a = r("8aua"),
        s = r.n(a),
        o = r("GbHM"),
        l = (r("7VqR"), r("60Pl")),
        c = r.n(l),
        d = r("/Q1a");
      function u() {
        return i.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Settings",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "-305.5 396.5 256 256",
            enableBackground: "new -305.5 396.5 256 256",
          },
          i.createElement("path", {
            d: "M-232.755,589.942l3.103,2.408c5.78,4.492,11.973,8.18,18.409,10.959l3.581,1.547l2.276,33.783 c0.089,1.33,1.385,2.54,2.715,2.54h48.62c1.355,0,2.745-1.273,2.852-2.621l2.74-33.284l3.602-1.496 c6.406-2.656,12.646-6.262,18.554-10.707l3.137-2.366l30.578,15.009c1.155,0.571,2.924,0.017,3.563-1.087l24.303-42.1 c0.674-1.173,0.265-3.014-0.852-3.785l-27.872-19.309l0.469-3.832c0.495-4.032,0.725-7.395,0.725-10.57 c0-3.129-0.227-6.5-0.687-10.307l-0.469-3.896l28.699-19.253c1.112-0.741,1.509-2.473,0.84-3.627l-24.3-42.104 c-0.657-1.139-2.502-1.727-3.7-1.155l-31.208,14.748l-3.091-2.341c-5.571-4.224-11.466-7.688-17.522-10.306l-3.58-1.548 l-2.34-34.887c-0.089-1.33-1.381-2.536-2.715-2.536h-48.617c-1.355,0-2.74,1.274-2.851,2.626l-2.834,34.371l-3.593,1.501 c-6.082,2.535-12.028,5.924-17.667,10.071l-3.124,2.302l-31.392-15.413c-1.168-0.575-2.924-0.025-3.559,1.074l-24.309,42.107 c-0.678,1.172-0.264,3.014,0.848,3.781l28.068,19.444l-0.524,3.883c-0.592,4.378-0.865,8.018-0.865,11.462 c0,2.988,0.179,6.065,0.55,9.403l0.431,3.853l-28.528,19.125c-1.108,0.742-1.509,2.468-0.84,3.632l24.308,42.1 c0.656,1.142,2.489,1.726,3.7,1.154L-232.755,589.942z M-177.498,560.051c-19.311,0-35.02-15.709-35.02-35.02 s15.709-35.02,35.02-35.02s35.02,15.709,35.02,35.02S-158.188,560.051-177.498,560.051z",
            fill: "currentColor",
          })
        );
      }
      function m() {
        return i.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_DownArrowContextMenu",
            "data-name": "Layer 1",
            viewBox: "0 0 128 128",
            x: "0px",
            y: "0px",
          },
          i.createElement("polygon", {
            points:
              "50 59.49 13.21 22.89 4.74 31.39 50 76.41 95.26 31.39 86.79 22.89 50 59.49",
          })
        );
      }
      function h(e) {
        return i.createElement(
          "svg",
          {
            style: { transform: `rotate(${e.angle}deg)` },
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0px",
            y: "0px",
            width: "24.833px",
            height: "21.917px",
            viewBox: "0 0 24.833 21.917",
          },
          i.createElement("polygon", {
            points:
              "12.5,14.873 3.302,5.723 1.185,7.848 12.5,19.103 23.814,7.848 21.697,5.723 ",
          })
        );
      }
      function p(e) {
        let t = "SVGIcon_Button SVGIcon_MagnifyingGlass";
        return (
          e.className && (t += ` ${e.className}`),
          i.createElement(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: t,
              version: "1.1",
              x: "0px",
              y: "0px",
              viewBox: "0 0 100 100",
            },
            i.createElement(
              "g",
              { transform: "translate(0,-952.36218)" },
              i.createElement("path", {
                className: "ColorSelector",
                d: "m 40.99855,964.36216 c -15.9798,0 -28.9986,13.01864 -28.9986,28.99862 0,15.97992 13.0188,28.99862 28.9986,28.99862 6.9189,0 13.2881,-2.4349 18.2803,-6.4997 l 23.5927,23.6239 c 1.1714,1.1714 3.0784,1.1715 4.2498,0 1.1716,-1.1715 1.1716,-3.0783 0,-4.2498 l -23.6239,-23.5926 c 4.0649,-4.9923 6.4997,-11.3615 6.4997,-18.28042 0,-15.97998 -13.0187,-28.99862 -28.9986,-28.99862 z m 0,5.99972 c 12.7374,0 22.9989,10.26145 22.9989,22.9989 0,12.73732 -10.2615,22.99892 -22.9989,22.99892 -12.7374,0 -22.9989,-10.2616 -22.9989,-22.99892 0,-12.73745 10.2615,-22.9989 22.9989,-22.9989 z",
                fill: "#ffffff",
                fillOpacity: "1",
                stroke: "none",
                visibility: "visible",
                display: "inline",
                overflow: "visible",
              })
            )
          )
        );
      }
      function f() {
        return i.createElement(
          "svg",
          {
            className: "SVGIcon_Button SVGIcon_Clock",
            version: "1.1",
            x: "0px",
            y: "0px",
            width: "20px",
            height: "20px",
            viewBox: "0 0 20 20",
          },
          i.createElement("path", {
            d: "M15.999 15c-.15 0-.303-.034-.446-.105l-4-2A1.001 1.001 0 0111 12V5a1 1 0 012 0v6.382l3.447 1.724A1 1 0 0115.999 15zM12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z",
          })
        );
      }
      function _() {
        return i.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Emoticon",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
          },
          i.createElement("circle", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "12",
            strokeMiterlimit: "10",
            cx: "128",
            cy: "128",
            r: "107.5",
          }),
          i.createElement("path", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "12",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            d: "M74.484,145.945 c0,0,12.996,37.533,53.514,37.533c38.084,0,53.499-37.533,53.499-37.533",
          }),
          i.createElement("line", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "12",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            x1: "94.5",
            y1: "97.5",
            x2: "94.5",
            y2: "109.5",
          }),
          i.createElement("line", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "12",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            x1: "160.5",
            y1: "97.5",
            x2: "160.5",
            y2: "109.5",
          })
        );
      }
      function g(e) {
        return d.d.IN_GAMEPADUI
          ? i.createElement(
              "svg",
              Object.assign(
                {
                  width: "24",
                  height: "24",
                  viewBox: "0 0 36 36",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "SVGIcon_Button SVGIcon_Submit",
                },
                e
              ),
              i.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M4.16683 8.982C4.10732 8.3908 3.83847 7.42693 4.15486 7.17995C4.46877 6.93489 4.7797 6.90487 5.90123 7.31306L31.1931 17.2282C32.2693 17.6503 32.2686 18.335 31.1931 18.7564L5.90123 28.6715C4.77972 29.1235 4.46864 29.0497 4.15487 28.8049C3.83836 28.5579 4.0953 27.5939 4.15484 27.0028L4.7797 21.2151C4.89862 20.0374 5.92644 18.9801 7.0706 18.854L15.467 18.4429C24.1686 17.9924 24.1686 17.9924 15.467 17.5419L7.0706 17.1313C5.92423 17.0053 4.89825 15.9476 4.7797 14.7706L4.16683 8.982Z",
                fill: "currentColor",
              })
            )
          : i.createElement(
              "svg",
              {
                fill: "#FFFFFF",
                xmlns: "http://www.w3.org/2000/svg",
                className: "SVGIcon_Button SVGIcon_Submit",
                version: "1.1",
                x: "0px",
                y: "0px",
                viewBox: "0 0 100 100",
              },
              i.createElement(
                "g",
                { transform: "translate(0,-952.36218)" },
                i.createElement("path", {
                  d: "m 92.115057,974.14842 a 2.0001999,2.0001999 0 0 0 -1.96764,2.02965 l 0.0376,31.19553 -77.475501,0 16.161909,-15.73013 a 2.0002746,2.0002746 0 1 0 -2.790355,-2.8667 L 6.3913393,1007.9405 a 2.0001999,2.0001999 0 0 0 -0.0011,2.8646 l 19.6896957,19.2036 a 2.0002671,2.0002671 0 1 0 2.792551,-2.8646 l -16.170767,-15.771 79.153048,0 a 2.0001999,2.0001999 0 0 0 1.72959,-0.5437 2.0001999,2.0001999 0 0 0 0.0598,-0.058 2.0001999,2.0001999 0 0 0 0.54259,-1.7218 l -0.0388,-32.87638 a 2.0001999,2.0001999 0 0 0 -2.03297,-2.02522 z",
                  fill: "#FFFFFF",
                  fillOpacity: "1",
                  fillRule: "evenodd",
                  stroke: "none",
                  visibility: "visible",
                  display: "inline",
                  overflow: "visible",
                })
              )
            );
      }
      function b() {
        return i.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0px",
            y: "0px",
            width: "100px",
            height: "91.582px",
            viewBox: "0 0 100 91.582",
            enableBackground: "new 0 0 100 91.582",
          },
          i.createElement(
            "g",
            null,
            i.createElement("path", {
              clipPath: "url(#SVGID_2_)",
              d: "M88.853,29.724H62.271V11.351C62.262,5.18,57.26,0.179,51.089,0.169H11.255\r\n\t\t\t\tC5.085,0.179,0.085,5.18,0.074,11.351v24.908c-0.001,2.207,0.657,4.36,1.888,6.19c3.942,7.586,22.118,18.799,22.314,18.916\r\n\t\t\t\tc0.389,0.229,0.83,0.354,1.281,0.361c1.351,0.01,2.455-1.074,2.468-2.426c0.003-0.329-0.062-0.654-0.187-0.958\r\n\t\t\t\tc-1.319-3.565-2.341-7.233-3.053-10.968h13.135v18.389C37.93,71.9,42.882,76.882,49.02,76.928H75.29\r\n\t\t\t\tc-0.715,3.724-1.737,7.379-3.054,10.936c-0.517,1.248,0.076,2.678,1.323,3.196c0.303,0.125,0.63,0.188,0.959,0.186\r\n\t\t\t\tc0.451-0.006,0.894-0.13,1.279-0.361c0.197-0.115,18.373-11.329,22.314-18.914c1.235-1.834,1.894-3.997,1.888-6.207V40.906\r\n\t\t\t\tC99.99,34.746,95.01,29.751,88.853,29.724 M32.797,42.449H21.831c-0.721,0.01-1.4,0.327-1.873,0.869\r\n\t\t\t\tc-0.464,0.544-0.669,1.265-0.558,1.973c0,0.228,0.59,3.79,1.641,8.028c-5.517-3.842-12.773-9.425-14.776-13.136\r\n\t\t\t\tc-0.067-0.162-0.149-0.314-0.247-0.46c-0.738-1.033-1.13-2.276-1.116-3.546V11.351c0.008-3.463,2.825-6.264,6.288-6.255h0.065\r\n\t\t\t\th39.833c3.45,0.007,6.246,2.804,6.255,6.255v18.373H49.02c-3.223,0.005-6.286,1.399-8.406,3.825\r\n\t\t\t\tc-1.744-0.054-3.464-0.427-5.074-1.101c2.588-3.257,4.169-7.2,4.548-11.345h1.33c1.359,0,2.463-1.103,2.463-2.463\r\n\t\t\t\tc0-1.361-1.104-2.461-2.463-2.461h-7.784v-4.384c0-1.36-1.102-2.464-2.461-2.464c-1.361,0-2.463,1.104-2.463,2.464v4.384h-7.668\r\n\t\t\t\tc-1.361,0-2.462,1.1-2.462,2.461c0,1.36,1.102,2.463,2.462,2.463H35.13c-0.348,3.137-1.604,6.104-3.613,8.538\r\n\t\t\t\tc-1.439-1.598-2.553-3.46-3.284-5.482c-0.489-1.271-1.916-1.903-3.185-1.414c-1.27,0.489-1.902,1.917-1.412,3.185\r\n\t\t\t\tc0.892,2.395,2.192,4.619,3.841,6.57c-2.017,0.812-4.178,1.208-6.354,1.165c-1.359,0-2.463,1.102-2.463,2.461\r\n\t\t\t\tc0,1.362,1.104,2.465,2.463,2.465c3.647,0.07,7.244-0.868,10.393-2.71c2.032,1.239,4.293,2.049,6.649,2.38\r\n\t\t\t\tc-0.218,0.859-0.327,1.741-0.327,2.627v1.641L32.797,42.449z M95.19,65.763c0.013,1.271-0.379,2.514-1.117,3.547\r\n\t\t\t\tc-0.097,0.138-0.181,0.287-0.246,0.443c-1.938,3.678-9.211,9.277-14.776,13.135c1.099-4.236,1.64-7.799,1.64-8.03\r\n\t\t\t\tc0.111-0.704-0.091-1.425-0.558-1.969c-0.462-0.548-1.138-0.871-1.854-0.887H49.02c-3.447,0-6.246-2.791-6.255-6.239V40.906\r\n\t\t\t\tc0.009-3.452,2.805-6.249,6.255-6.257h39.833c3.449,0.008,6.246,2.805,6.256,6.257L95.19,65.763z M77.834,56.635L77.834,56.635\r\n\t\t\t\tl-6.564-16.42c-0.037-0.092-0.081-0.18-0.133-0.262l-0.099-0.165c-0.047-0.078-0.102-0.15-0.164-0.214l-0.132-0.164l-0.182-0.147\r\n\t\t\t\tl-0.195-0.099c-0.056-0.043-0.116-0.076-0.182-0.098l-0.246-0.132c-0.06-0.009-0.121-0.009-0.18,0l-0.248-0.082h-0.245h-0.231\r\n\t\t\t\th-0.261h-0.214l-0.279,0.082c-0.055-0.007-0.109-0.007-0.164,0l-0.246,0.132l-0.247,0.098c-0.064,0.044-0.124,0.095-0.18,0.147\r\n\t\t\t\tl-0.182,0.148l-0.149,0.166c-0.056,0.066-0.113,0.138-0.161,0.211v0.166l-0.149,0.263l-6.567,16.418l-3.282,8.21\r\n\t\t\t\tc-0.546,1.246,0.026,2.697,1.272,3.24c0.036,0.016,0.072,0.029,0.105,0.042c0.29,0.127,0.604,0.189,0.919,0.182\r\n\t\t\t\tc1.005-0.006,1.905-0.616,2.283-1.544l2.657-6.665h9.854l2.66,6.665c0.383,0.931,1.291,1.54,2.298,1.544\r\n\t\t\t\tc0.31,0.003,0.619-0.059,0.904-0.182c1.269-0.485,1.906-1.907,1.422-3.18c-0.014-0.034-0.028-0.069-0.044-0.103L77.834,56.635z\r\n\t\t\t\tM66.062,55.123l2.939-7.323l2.923,7.323H66.062z",
            })
          )
        );
      }
      function w(e) {
        return i.createElement(
          "svg",
          Object.assign(
            {
              fill: "#FFFFFF",
              xmlns: "http://www.w3.org/2000/svg",
              className: "SVGIcon_Button SVGIcon_X",
              version: "1.1",
              x: "0px",
              y: "0px",
              viewBox: "-165 95 100 100",
            },
            e
          ),
          i.createElement(
            "g",
            null,
            i.createElement("polygon", {
              points:
                "-74.9,117.2 -102.2,145 -74.9,172.8 -89.1,186.8 -116.2,159.3 -143.2,186.8 -157.5,172.8 -130.2,145 -157.5,117.2 -143.2,103.2 -116.2,130.7 -89.1,103.2",
            })
          )
        );
      }
      function y(e) {
        const t = e.color || "#FFFFFF";
        return i.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_2",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_X_Line",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
          },
          i.createElement("line", {
            fill: "none",
            stroke: t,
            strokeWidth: "45",
            strokeMiterlimit: "10",
            x1: "212",
            y1: "212",
            x2: "44",
            y2: "44",
          }),
          i.createElement("line", {
            fill: "none",
            stroke: t,
            strokeWidth: "45",
            strokeMiterlimit: "10",
            x1: "44",
            y1: "212",
            x2: "212",
            y2: "44",
          })
        );
      }
      function S() {
        return i.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_5",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Paperclip",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
          },
          i.createElement("path", {
            fill: "none",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            d: "M167.768,62.647 l-0.012,123.052c0,24.729-19.334,44.856-43.096,44.866c-23.765-0.006-43.099-20.134-43.096-44.872L81.557,48.851 c0-15.345,14.483-27.827,29.83-27.83c15.342,0.003,27.827,12.488,27.833,27.833l-0.002,139.245 c0.003,6.376-8.546,12.925-14.925,12.925c0,0-13.929-0.166-13.929-12.928l0.003-124.839",
          })
        );
      }
      function B(e) {
        const { muted: t, className: r } = e;
        return i.createElement(
          "svg",
          {
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            className: Object(o.a)("SVGIcon_Button", "SVGIcon_Volume", r),
            x: "0px",
            y: "0px",
            width: "256px",
            height: "255.999px",
            viewBox: "0 0 256 255.999",
          },
          i.createElement(
            "g",
            { className: "Speaker" },
            i.createElement("path", {
              d: "M93.785,52.265c-0.946,0-2.357,0.63-3.304,1.577L40.284,98.022c-0.947,0.789-2.831,1.578-4.093,1.578H9.367 C8.104,99.6,7,100.706,7,101.967v52.069c0,1.264,1.104,2.367,2.367,2.367H36.19c1.262,0,3.146,0.632,4.093,1.578l50.197,44.181 c0.947,0.789,2.516,1.578,3.304,1.578s1.578-1.104,1.578-2.367V54.631C95.363,53.369,94.731,52.265,93.785,52.265z",
            })
          ),
          !t &&
            i.createElement(
              "g",
              { className: "SoundWaves" },
              i.createElement("path", {
                className: "SoundWavesHighest",
                d: "M193.826,30.402c24.959,24.958,40.349,59.403,40.349,97.604c0,38.199-15.388,72.645-40.349,97.603l9.916,9.916 c28.067-28.067,44.263-64.673,44.263-107.521c0-42.847-16.196-79.455-44.263-107.521",
              }),
              i.createElement("path", {
                className: "SoundWavesHigh",
                d: "M175.737,47.628l-8.924,8.924c18.271,18.27,29.536,43.484,29.536,71.448s-11.264,53.178-29.536,71.448l8.924,8.924 c20.546-20.546,33.234-49.008,33.234-80.374c0-31.366-12.688-59.829-33.234-80.374V47.628z",
              }),
              i.createElement("path", {
                className: "SoundWavesMed",
                d: "M148.913,74.454l-8.925,8.925c11.488,11.488,18.491,27.236,18.491,44.624c0,17.388-7.054,33.281-18.491,44.575l8.875,8.975 c13.811-13.635,22.239-32.753,22.239-53.55c0-20.797-8.432-39.793-22.189-53.55V74.454z",
              }),
              i.createElement("path", {
                className: "SoundWavesLow",
                d: "M121.989,101.229l-8.778,9.073c4.641,4.516,7.397,10.706,7.397,17.702c0,6.995-2.755,13.186-7.397,17.702l8.778,9.073 c7.035-6.844,11.243-16.413,11.243-26.775C133.232,117.643,129.024,108.075,121.989,101.229z",
              })
            ),
          i.createElement(
            "g",
            { className: "SoundX" },
            i.createElement("line", {
              fill: "none",
              strokeWidth: t ? 10 : 0,
              stroke: "#fff",
              strokeMiterlimit: "10",
              x1: "137",
              y1: "170.667",
              x2: "223.167",
              y2: "84.5",
            }),
            i.createElement("line", {
              fill: "none",
              strokeWidth: t ? 10 : 0,
              stroke: "#fff",
              strokeMiterlimit: "10",
              x1: "137",
              y1: "84.5",
              x2: "223.167",
              y2: "170.667",
            })
          )
        );
      }
      function v() {
        return i.createElement(
          "svg",
          { width: "50px", height: "25px", viewBox: "0 0 50 25" },
          i.createElement("path", {
            d: "M46 0H4C1.8 0 0 1.8 0 4v17c0 2.2 1.8 4 4 4h42c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zM21 18.916V5.084L32.805 12 21 18.916z",
          })
        );
      }
      function C() {
        return i.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Play",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
          },
          i.createElement("path", {
            className: "playTriangle",
            d: "M65.321,33.521c-11.274-6.615-20.342-1.471-20.342,11.52V210.96c0,12.989,9.068,18.135,20.342,11.521l137.244-82.348 c11.274-6.618,11.274-17.646,0-24.509L65.321,33.521z",
          })
        );
      }
      function M() {
        return i.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Pause",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
          },
          i.createElement("path", {
            d: "M44.979,219.364c0,3.3,2.7,6,6,6h49.753c3.3,0,6-2.7,6-6V36.5c0-3.3-2.7-6-6-6H50.979c-3.3,0-6,2.7-6,6V219.364z",
          }),
          i.createElement("path", {
            d: "M149.267,219.364c0,3.3,2.7,6,6,6h49.753c3.3,0,6-2.7,6-6V36.5c0-3.3-2.7-6-6-6h-49.753c-3.3,0-6,2.7-6,6V219.364z",
          })
        );
      }
      function E() {
        return i.createElement(
          "svg",
          {
            version: "1.1",
            id: "base",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Check",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
          },
          i.createElement("polyline", {
            fill: "none",
            stroke: "#fff",
            strokeWidth: "24",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "10",
            points: "49.5,147.75 95,210.75 206.5,45.25 ",
          })
        );
      }
      function k(e) {
        let t = e.highlightColor || "#00ccff",
          r = e.color || "#2d73ff";
        return i.createElement(
          "svg",
          {
            version: "1.1",
            id: "base",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_DialogCheck",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
          },
          i.createElement(
            "defs",
            null,
            i.createElement(
              "linearGradient",
              { id: "linear", x1: "0%", y1: "0%", x2: "100%", y2: "100%" },
              i.createElement("stop", {
                id: "stop0",
                offset: "0%",
                stopColor: t,
              }),
              i.createElement("stop", {
                id: "stop1",
                offset: "100%",
                stopColor: r,
              })
            ),
            i.createElement(
              "filter",
              { id: "f1", x: "0", y: "0", width: "200%", height: "200%" },
              i.createElement("feOffset", {
                result: "offOut",
                in: "SourceAlpha",
                dx: "20",
                dy: "20",
              }),
              i.createElement("feGaussianBlur", {
                result: "blurOut",
                in: "offOut",
                stdDeviation: "10",
              }),
              i.createElement("feBlend", {
                in: "SourceGraphic",
                in2: "blurOut",
                mode: "normal",
              })
            )
          ),
          i.createElement("path", {
            fill: "none",
            stroke: "url(#linear)",
            strokeWidth: "24",
            strokeLinecap: "round",
            strokeLinejoin: "miter",
            strokeMiterlimit: "10",
            d: "M206.5,45.25L95,210.75l-45.5-63",
            strokeDasharray: "365.19 365.19",
            strokeDashoffset: "0.00",
          }),
          i.createElement("path", {
            fill: "none",
            opacity: ".2",
            filter: "url(#f1)",
            stroke: "url(#linear)",
            strokeWidth: "24",
            strokeLinecap: "round",
            strokeLinejoin: "miter",
            strokeMiterlimit: "10",
            d: "M206.5,45.25L95,210.75l-45.5-63",
            strokeDasharray: "365.19 365.19",
            strokeDashoffset: "0.00",
          })
        );
      }
      function T() {
        return i.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Lock",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
          },
          i.createElement("path", {
            className: "topLock",
            d: "M203.553,197.794c0,21.929-17.778,39.706-39.706,39.706H92.154c-21.929,0-39.706-17.777-39.706-39.706v-71.693 c0-21.928,17.778-39.706,39.706-39.706h71.692c21.928,0,39.706,17.778,39.706,39.706V197.794z M128.001,129.664 c-8.941,0-16.19,7.248-16.19,16.189c0,5.589,2.833,10.518,7.137,13.427c2.066,1.395,0.318,23.508,0.318,32.842 c0,2.292-0.078,3.65,8.734,3.65c8.676,0,8.75-1.221,8.75-3.654c0-9.348-1.708-31.469,0.368-32.886 c4.269-2.916,7.071-7.821,7.071-13.38C144.191,136.912,136.941,129.664,128.001,129.664z",
          }),
          i.createElement("path", {
            className: "baseLock",
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "22",
            strokeMiterlimit: "10",
            d: "M84.813,172.74V73.688l0,0 c0-23.85,19.335-43.188,43.187-43.188l0,0c23.852,0,43.188,19.337,43.188,43.188l0,0v23.885",
          })
        );
      }
      function L(e) {
        let t = "SVGIcon_Button SVGIcon_Throbber ";
        return (
          e.className && (t += e.className),
          i.createElement(
            "svg",
            {
              version: "1.1",
              id: "base",
              xmlns: "http://www.w3.org/2000/svg",
              className: t,
              x: "0px",
              y: "0px",
              width: "256px",
              height: "256px",
              viewBox: "0 0 256 256",
            },
            i.createElement(
              "g",
              { className: s.a.partCircle },
              i.createElement("path", {
                className: s.a.roundOuter,
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895",
              }),
              i.createElement("path", {
                className: s.a.roundOuter,
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M201.432,101.166",
              }),
              i.createElement("path", {
                className: s.a.roundOuter,
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754",
              })
            ),
            i.createElement(
              "g",
              { className: s.a.mainOutline },
              i.createElement("path", {
                className: s.a.roundFill,
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              i.createElement("path", {
                className: s.a.roundOuterOutline,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              i.createElement("path", {
                className: s.a.roundThrobber01,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              i.createElement("path", {
                className: s.a.roundThrobber02,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              i.createElement("path", {
                className: s.a.roundThrobber03,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              i.createElement("path", {
                className: s.a.roundThrobber04,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              i.createElement("path", {
                className: s.a.roundThrobber05,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              i.createElement("path", {
                className: s.a.roundThrobber06,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              i.createElement("path", {
                className: s.a.roundThrobber07,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              i.createElement("path", {
                className: s.a.roundThrobber08,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              i.createElement("path", {
                className: s.a.roundThrobber09,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              i.createElement("path", {
                className: s.a.roundThrobber10,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              i.createElement("path", {
                className: s.a.roundThrobber11,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              i.createElement("path", {
                className: s.a.roundThrobber12,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              i.createElement("path", {
                className: s.a.roundThrobber13,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              i.createElement("path", {
                className: s.a.roundThrobber14,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              i.createElement("path", {
                className: s.a.roundThrobber15,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              })
            ),
            i.createElement(
              "g",
              { className: s.a.bottomCircle },
              i.createElement("path", {
                fill: "#ffffff",
                d: "M89.226,181.579L76.5,176.321c2.256,4.696,6.159,8.628,11.339,10.786 c11.197,4.668,24.11-0.647,28.779-11.854c2.259-5.425,2.274-11.405,0.033-16.841c-2.237-5.436-6.46-9.675-11.886-11.938 c-5.384-2.24-11.151-2.156-16.22-0.244l13.146,5.436c8.261,3.443,12.166,12.93,8.725,21.189 C106.976,181.115,97.486,185.022,89.226,181.579",
              })
            ),
            i.createElement(
              "g",
              { className: s.a.topCircle },
              i.createElement("circle", {
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                cx: "161.731",
                cy: "101.274",
                r: "23.019",
              })
            )
          )
        );
      }
      function R(e) {
        return d.d.IN_GAMEPADUI
          ? i.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "SVGIcon_Button SVGIcon_Bell",
                  viewBox: "0 0 36 36",
                  fill: "none",
                },
                e
              ),
              i.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M32 24V26H4V24L8 19V12C8 9.34784 9.05357 6.8043 10.9289 4.92893C12.8043 3.05357 15.3478 2 18 2C20.6522 2 23.1957 3.05357 25.0711 4.92893C26.9464 6.8043 28 9.34784 28 12V19L32 24ZM18 34C19.2396 33.9986 20.4483 33.6133 21.46 32.897C22.4718 32.1807 23.2368 31.1687 23.65 30H12.35C12.7632 31.1687 13.5282 32.1807 14.54 32.897C15.5517 33.6133 16.7604 33.9986 18 34Z",
                fill: "currentColor",
              })
            )
          : i.createElement(
              "svg",
              {
                version: "1.1",
                id: "base",
                xmlns: "http://www.w3.org/2000/svg",
                className: "SVGIcon_Button SVGIcon_Bell",
                x: "0px",
                y: "0px",
                width: "256px",
                height: "256px",
                viewBox: "0 0 256 256",
              },
              i.createElement("path", {
                d: "M107.785,33.965c-34.875,8.972-60.644,40.618-60.644,78.308v53.903c0,4.965-4.035,8.99-8.975,8.99 c-9.929,0-17.978,8.066-17.978,17.971c0,9.924,8.059,17.969,18.013,17.969h179.598c9.948,0,18.014-8.066,18.014-17.969 c0-9.926-8.087-17.971-17.979-17.971c-4.956,0-8.975-3.993-8.975-8.99v-53.903c0-37.676-25.763-69.333-60.644-78.308v-9.281 c0-11.193-9.052-20.219-20.215-20.219c-11.143,0-20.215,9.052-20.215,20.219V33.965L107.785,33.965z M96.554,220.09h62.891 c0,17.366-14.079,31.445-31.445,31.445C110.633,251.535,96.554,237.458,96.554,220.09z",
              })
            );
      }
      function x(e) {
        return i.createElement(
          "svg",
          {
            style: { transform: `rotate(${e.angle}deg)` },
            version: "1.1",
            id: "arrowBase",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Arrow",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
          },
          i.createElement("polyline", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "10",
            points: "128,247.688 128,8.313 181.061,61.674 ",
          }),
          i.createElement("polyline", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "10",
            points: "128,247.688 128,8.313 74.939,61.674 ",
          })
        );
      }
      function O() {
        return i.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0px",
            y: "0px",
            width: "50px",
            height: "100px",
            viewBox: "0 0 50 100",
          },
          i.createElement("polygon", {
            fill: "#ffffff",
            points:
              "0,0.093 0,25.702 24.323,50.026 0,74.349 0,99.955 49.929,50.026 ",
          })
        );
      }
      function D(e) {
        return i.createElement(
          "svg",
          {
            style: { transform: `rotate(${e.angle}deg)` },
            version: "1.1",
            id: "arrowBase",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_DoubleArrow",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
          },
          i.createElement("polyline", {
            className: "Arrow1",
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "23",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            points: "135.65,21.667 30.081,127.235 137.18,234.333 ",
          }),
          !e.singlearrow &&
            i.createElement("polyline", {
              className: "Arrow2",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "23",
              strokeLinecap: "round",
              strokeMiterlimit: "10",
              points: "224.389,21.667 118.821,127.235 225.92,234.333 ",
            })
        );
      }
      function I(e) {
        const { angle: t } = e,
          r = Object(n.c)(e, ["angle"]);
        return i.createElement(
          "svg",
          Object.assign(
            {
              style: { transform: `rotate(${e.angle}deg)` },
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 32 32",
              fill: "none",
            },
            r
          ),
          i.createElement("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M16.0855 15.5837L8.88892 8.38708L12.0316 5.24438L22.3709 15.5837L12.0316 25.923L8.88892 22.7803L16.0855 15.5837Z",
          })
        );
      }
      function G() {
        return i.createElement(
          "svg",
          {
            version: "1.1",
            id: "base",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Maximize",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
          },
          i.createElement("rect", {
            x: "24",
            y: "42.167",
            fill: "none",
            stroke: "rgb(120, 138, 146)",
            strokeWidth: "18",
            strokeMiterlimit: "10",
            width: "208",
            height: "171.667",
          }),
          i.createElement("line", {
            fill: "none",
            stroke: "rgb(120, 138, 146)",
            strokeWidth: "42",
            strokeMiterlimit: "10",
            x1: "24",
            y1: "54.01",
            x2: "232",
            y2: "54.01",
          })
        );
      }
      function j() {
        return i.createElement(
          "svg",
          {
            version: "1.1",
            id: "base",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Minimize",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
          },
          i.createElement("line", {
            fill: "none",
            stroke: "rgb(120, 138, 146)",
            strokeWidth: "18",
            strokeMiterlimit: "10",
            x1: "24",
            y1: "209.01",
            x2: "232",
            y2: "209.01",
          })
        );
      }
      function A() {
        return i.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_2",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Restore",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
          },
          i.createElement("polyline", {
            fill: "none",
            stroke: "rgb(120, 138, 146)",
            strokeWidth: "12",
            strokeMiterlimit: "10",
            points: "83,90.861 83,42.167 232,42.167 232,165.14 173,165.14 ",
          }),
          i.createElement("rect", {
            x: "24",
            y: "90.861",
            fill: "none",
            stroke: "rgb(120, 138, 146)",
            strokeWidth: "18",
            strokeMiterlimit: "10",
            width: "149",
            height: "122.973",
          })
        );
      }
      function F() {
        return i.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_2",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Reload",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
          },
          i.createElement("path", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "30",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            d: "M229.809,147.639 c-9.178,47.863-51.27,84.027-101.809,84.027c-57.253,0-103.667-46.412-103.667-103.666S70.747,24.334,128,24.334 c34.107,0,64.368,16.472,83.261,41.895",
          }),
          i.createElement("polygon", {
            points: "147.639,108.361 245.755,10.166 245.834,108.361 ",
          })
        );
      }
      function P() {
        return i.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Trash",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
          },
          i.createElement(
            "g",
            { className: "base" },
            i.createElement("path", {
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "10",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M216.773,43.909 l-7.399,177.589c-0.37,8.893-7.919,16.1-16.812,16.1H63.437c-8.914,0-16.442-7.24-16.812-16.1L39.226,43.909",
            })
          ),
          i.createElement(
            "g",
            { className: "lines" },
            i.createElement("path", {
              className: "line1",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "10",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M128,68.12v137.197",
            }),
            i.createElement("path", {
              className: "line2",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "10",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M83.613,68.12 l4.035,137.197",
            }),
            i.createElement("path", {
              className: "line3",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "10",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M172.387,68.12 l-4.035,137.197",
            })
          ),
          i.createElement(
            "g",
            { className: "lid" },
            i.createElement("path", {
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "10",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M27.121,38.577H228.88",
            }),
            i.createElement("path", {
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "10",
              d: "M87.648,38.577l4.319-10.796c2.072-5.181,8.292-9.379,13.84-9.379h44.386 c5.572,0,11.761,4.18,13.841,9.379l4.319,10.796",
            })
          )
        );
      }
      function N(e) {
        return i.createElement(
          "svg",
          {
            style: { transform: `rotate(${e.angle}deg)` },
            version: "1.1",
            id: "base",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_FlatArrow",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
          },
          i.createElement("polygon", {
            points: "13.913,141 128,59 242.087,141 ",
            fill: "#ffffff",
          })
        );
      }
      function V() {
        return i.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_DoNotDisturb",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
          },
          i.createElement("circle", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "24",
            strokeMiterlimit: "10",
            cx: "128",
            cy: "128",
            r: "101.5",
          }),
          i.createElement("line", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "24",
            strokeMiterlimit: "10",
            x1: "73",
            y1: "128",
            x2: "183",
            y2: "128",
          })
        );
      }
      function z(e) {
        return i.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            style: { transform: `scaleX(${e.bFlipHorizontal ? -1 : 1})` },
            className: "SVGIcon_Button SVGIcon_MediaControls",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
          },
          i.createElement("path", {
            className: "Arrow",
            d: "M77.003,54.763h32.784c3.794,0,9.113,2.181,11.814,4.848l63.604,62.773c2.703,2.667,2.727,7.054,0.05,9.748 l-63.705,64.206c-2.674,2.693-7.968,4.898-11.763,4.898H77.003",
          }),
          i.createElement("polyline", {
            className: "preArrowBox",
            opacity: e.bHidePreArrow ? "0" : "1",
            points: "6.833,54.763 46.71,54.763 46.71,201.236 6.833,201.236 \t",
          }),
          i.createElement("polyline", {
            className: "jumpAheadBox",
            opacity: e.bShowJumpAheadBox ? "1" : "0",
            points:
              "6.833,54.764 86.386,54.764 86.386,201.236 6.833,201.236 \t",
          }),
          i.createElement("polyline", {
            className: "postArrowBox",
            opacity: e.bHidePostArrow ? "0" : "1",
            points:
              "209.29,54.763 249.167,54.763 249.167,201.236 209.29,201.236 \t",
          })
        );
      }
      function U(e) {
        const t = Object(o.a)(
          "SVGIcon_Button",
          "SVGIcon_SteamLogo",
          e && e.className
        );
        return i.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            className: t,
            x: "0px",
            y: "0px",
            viewBox: "0 0 256 256",
          },
          i.createElement("path", {
            fill: "#ffffff",
            d: "M127.374,5.355c-64.404,0-117.167,49.661-122.18,112.77l65.712,27.171 c5.567-3.808,12.293-6.032,19.53-6.032c0.649,0,1.294,0.017,1.934,0.051l29.226-42.354c0-0.202-0.005-0.399-0.005-0.598 c0-25.496,20.74-46.241,46.237-46.241c25.498,0,46.238,20.745,46.238,46.241c0,25.494-20.74,46.242-46.238,46.242 c-0.352,0-0.698-0.011-1.047-0.021l-41.68,29.741c0.022,0.546,0.041,1.095,0.041,1.644c0,19.141-15.569,34.707-34.706,34.707 c-16.796,0-30.843-11.99-34.026-27.869l-46.993-19.43c14.55,51.464,61.831,89.189,117.957,89.189 c67.713,0,122.604-54.893,122.604-122.604C249.979,60.244,195.086,5.355,127.374,5.355",
          }),
          i.createElement("path", {
            fill: "#ffffff",
            d: "M82.026,191.387l-15.061-6.22c2.67,5.56,7.285,10.208,13.418,12.767 c13.25,5.521,28.531-0.771,34.054-14.027c2.674-6.416,2.694-13.5,0.04-19.93c-2.646-6.431-7.64-11.451-14.063-14.129 c-6.371-2.647-13.196-2.552-19.198-0.291l15.561,6.437c9.776,4.073,14.396,15.299,10.324,25.071 C103.031,190.841,91.801,195.464,82.026,191.387",
          }),
          i.createElement("path", {
            fill: "#ffffff",
            d: "M198.639,96.359c0-16.987-13.82-30.809-30.809-30.809c-16.987,0-30.813,13.821-30.813,30.809 c0,16.988,13.824,30.806,30.813,30.806S198.639,113.347,198.639,96.359 M144.736,96.306c0-12.783,10.363-23.142,23.145-23.142 c12.783,0,23.145,10.359,23.145,23.142c0,12.783-10.36,23.142-23.145,23.142C155.1,119.447,144.736,109.089,144.736,96.306",
          })
        );
      }
      function W() {
        return i.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Viewers",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
          },
          i.createElement("path", {
            className: "frontGuy",
            fill: "#666666",
            d: "M181.732,53.151c-17.255,0-31.321,13.316-31.321,32.634v25.132 c0,18.005,24.006,21.006,24.382,21.381c-10.691,2.813-30.947,8.252-40.888,15.566c-8.252,6.003-11.44,18.005-13.128,22.882 c-0.75,2.063-1.688,5.064-1.688,7.127c0,0,0,9.94,0,19.881s12.941,16.505,18.005,16.505h89.65c4.877,0,18.006-5.627,18.006-16.505 s0-19.881,0-19.881c0-2.251-0.938-5.627-1.688-7.689c-4.313-10.878-4.688-16.316-13.315-22.319 c-9.941-6.939-30.009-12.19-40.512-15.004c0.374-0.563,24.193-4.127,24.193-22.131V85.785 C213.053,66.467,198.986,53.151,181.732,53.151L181.732,53.151z",
          }),
          i.createElement("path", {
            className: "backGuy",
            fill: "rgb(144, 153, 161)",
            d: "M84.204,34.396c-20.068,0-36.385,15.38-36.385,38.074v29.258c0,20.818,27.945,24.382,28.32,24.944 c-12.378,3.189-36.01,9.565-47.638,18.006c-9.753,7.127-13.504,21.006-15.379,26.632c-0.75,2.251-1.876,6.002-1.876,8.253  c0,0,0,11.44,0,23.257c0,11.815,15.004,19.13,20.819,19.13h104.279c5.814,0,20.818-6.564,20.818-19.13c0-12.566,0-23.257,0-23.257 c0-2.438-1.125-6.564-2.063-8.815c-5.063-12.566-5.438-18.942-15.566-26.069c-11.628-8.065-34.885-14.067-47.076-17.443 c0.375-0.563,28.133-4.876,28.133-25.695V72.469C120.59,49.775,104.272,34.396,84.204,34.396L84.204,34.396z",
          })
        );
      }
      function H() {
        return i.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_5",
            className: "SVGIcon_Button SVGIcon_ChatBubble",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0px",
            y: "0px",
            viewBox: "0 0 64 64",
          },
          i.createElement(
            "g",
            null,
            i.createElement("path", {
              d: "M33,5C18.7,5,7.1,16.6,7.1,30.9c0,5.2,1.5,10.1,4.2,14.1c-0.6,3.7-4.5,10.5-6.2,13.5c-1.3,2.2,11.4-3.8,16.3-4.5c3.5,1.8,7.5,2.8,11.7,2.8c14.3,0,25.9-11.6,25.9-25.9S47.3,5,33,5z",
            })
          )
        );
      }
      function $() {
        return i.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_5",
            className: "SVGIcon_Button SVGIcon_Globe",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0px",
            y: "0px",
            viewBox: "0 0 64 64",
          },
          i.createElement(
            "g",
            null,
            i.createElement("path", {
              d: "M32.5,5C17.9,5,6,16.9,6,31.5C6,46.1,17.9,58,32.5,58S59,46.1,59,31.5C59,16.9,47.1,5,32.5,5 M32.5,54.7c-1.2,0-2.5-0.1-3.7-0.3c-1.1-1.1-2.1-2.8-3-4.8c-0.8-1.8-1.4-3.8-2-6c2.7-0.3,5.6-0.5,8.6-0.5c3,0,5.9,0.2,8.6,0.5c-0.5,2.2-1.2,4.2-2,6c-0.9,2-1.9,3.7-3,4.8C35,54.6,33.7,54.7,32.5,54.7 M32.5,41.4c-3.2,0-6.2,0.2-9,0.5c-0.6-3-0.9-6.2-1-9.6h19.9c0,3.4-0.4,6.6-1,9.6C38.7,41.6,35.7,41.4,32.5,41.4 M32.5,8.3c1.2,0,2.5,0.1,3.7,0.3c1.1,1.1,2.1,2.8,3,4.8c0.8,1.8,1.4,3.8,2,6c-2.7,0.3-5.6,0.5-8.6,0.5c-3,0-5.9-0.2-8.6-0.5c0.5-2.2,1.2-4.2,2-6c0.9-2,1.9-3.7,3-4.8C30,8.4,31.3,8.3,32.5,8.3 M32.5,21.6c3.2,0,6.2-0.2,9-0.5c0.6,3,0.9,6.2,1,9.6H22.6c0-3.4,0.4-6.6,1-9.6C26.3,21.4,29.3,21.6,32.5,21.6 M44.1,30.7c0-3.5-0.4-6.8-1-9.8c3.4-0.5,6.4-1.1,8.8-2c2.3,3.5,3.6,7.5,3.7,11.8H44.1z M20.9,30.7H9.3c0.1-4.2,1.4-8.3,3.7-11.8c2.5,0.8,5.5,1.5,8.8,2C21.3,23.9,21,27.2,20.9,30.7 M20.9,32.3c0,3.5,0.4,6.8,1,9.8c-3.4,0.5-6.4,1.1-8.8,2c-2.3-3.5-3.6-7.5-3.7-11.8H20.9z M44.1,32.3h11.6c-0.1,4.2-1.4,8.3-3.7,11.8c-2.5-0.8-5.5-1.5-8.8-2C43.7,39.1,44,35.8,44.1,32.3 M51,17.5c-0.1,0-0.2,0.1-0.3,0.1c-2.3,0.7-5,1.3-7.9,1.7c-0.9-4.1-2.3-7.6-4-10.1c3.8,1.1,7.3,3.1,10.2,5.9C49.6,15.9,50.3,16.6,51,17.5 M26.3,9.2c-1.7,2.5-3.1,6-4,10.1c-2.9-0.4-5.6-1-7.9-1.7c-0.1,0-0.2-0.1-0.3-0.1c0.6-0.8,1.3-1.6,2.1-2.4C19,12.2,22.5,10.2,26.3,9.2 M14,45.5c0.1,0,0.2-0.1,0.3-0.1c2.3-0.7,5-1.3,7.9-1.7c0.9,4.1,2.3,7.6,4,10.1c-3.8-1.1-7.3-3.1-10.2-5.9C15.4,47.1,14.7,46.4,14,45.5 M38.7,53.8c1.7-2.5,3.1-6,4-10.1c2.9,0.4,5.6,1,7.9,1.7c0.1,0,0.2,0.1,0.3,0.1c-0.6,0.8-1.3,1.6-2.1,2.4C46,50.8,42.5,52.8,38.7,53.8",
            })
          )
        );
      }
      function q() {
        return i.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_5",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0px",
            y: "0px",
            viewBox: "0 0 64 64",
          },
          i.createElement(
            "g",
            null,
            i.createElement("path", {
              d: "M40.6,32.7l15.1-15.1c2.6-2.6,2.6-6.7,0-9.3c-2.6-2.6-6.7-2.6-9.3,0L31.3,23.4L16.2,8.3c-2.6-2.6-6.7-2.6-9.3,0c-2.6,2.6-2.6,6.7,0,9.3L22,32.7L6.9,47.8c-2.6,2.6-2.6,6.7,0,9.3c1.3,1.3,3,1.9,4.7,1.9s3.4-0.6,4.7-1.9L31.3,42l15.1,15.1c1.3,1.3,3,1.9,4.7,1.9s3.4-0.6,4.7-1.9c2.6-2.6,2.6-6.7,0-9.3L40.6,32.7z",
            })
          )
        );
      }
      function Z() {
        return i.createElement(
          "svg",
          {
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_STVTimelineGrabber",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
          },
          i.createElement(
            "g",
            { className: "leftarrow", opacity: "0" },
            i.createElement("polygon", {
              points: "127.817,4.403 4,128 127.817,251.598",
            })
          ),
          i.createElement(
            "g",
            { className: "rightarrow", opacity: "0" },
            i.createElement("polygon", {
              points: "127.816,4.403 251.633,128 127.816,251.598",
            })
          ),
          i.createElement(
            "g",
            { className: "grabber" },
            i.createElement("polygon", {
              points:
                "145.692,22.132 145.692,234.361 127.817,251.598 110.307,234.361 110.307,22.132 127.817,4.403",
            })
          )
        );
      }
      function Y() {
        return i.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_STVTimelineMarker",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
          },
          i.createElement("polygon", {
            className: "pointer",
            points:
              "128,154.979 46.374,230.548 46.374,253.333 209.626,253.333 209.626,230.548 \t",
          }),
          i.createElement("rect", {
            className: "line",
            x: "116.271",
            y: "3.168",
            width: "23.459",
            height: "137.332",
          })
        );
      }
      function K() {
        return i.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_2",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_BigPicture",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
          },
          i.createElement("path", {
            fill: "currentColor",
            d: "M213.771,68.659c-4.108-7.066-46.007-7.231-49.293-7.231H128H91.522c-3.286,0-45.186,0.165-49.293,7.231 c-19.555,29.248-27.385,100.263-27.276,104.01c0.238,8.294,2.11,24.583,16.595,35.162c9.201,6.72,22.183,8.709,29.083,3.614 c4.989-3.682,11.995-19.224,19.061-32.204c7.064-12.981,9.202-11.174,12.98-12.159c3.78-0.986,36.066-0.74,36.066-0.74 s30.809-0.247,34.588,0.74c3.777,0.985,5.915-0.822,12.98,12.159c7.064,12.98,14.07,28.522,19.061,32.204 c6.9,5.095,19.882,3.106,29.083-3.614c14.485-10.58,16.356-26.868,16.595-35.162C241.154,168.922,233.325,97.906,213.771,68.659z M67.251,128.14c-14.974,0-27.112-12.137-27.112-27.111c0-14.975,12.137-27.112,27.112-27.112 c14.973,0,27.111,12.137,27.111,27.112C94.362,116.003,82.224,128.14,67.251,128.14z M188.749,128.14 c-14.974,0-27.111-12.137-27.111-27.111c0-14.975,12.138-27.112,27.111-27.112c14.973,0,27.111,12.137,27.111,27.112 C215.86,116.003,203.722,128.14,188.749,128.14z",
          })
        );
      }
      function X(e) {
        const { className: t } = e;
        return i.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_2",
            xmlns: "http://www.w3.org/2000/svg",
            className: Object(o.a)("SVGIcon_Button", "SVGIcon_MobilePhone", t),
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
          },
          i.createElement("path", {
            d: "M165.693,45.186H91.368c-7.963,0-14.41,6.447-14.41,14.41V210.9c0,7.964,6.447,14.41,14.41,14.41h74.134 c7.965,0,14.41-6.447,14.41-14.41V59.596C180.102,51.633,173.657,45.186,165.693,45.186z M113.172,57.509h30.717 c1.707,0,3.223,1.327,3.223,3.224c0,1.896-1.328,3.223-3.223,3.223h-30.717c-1.707,0-3.223-1.328-3.223-3.223 C109.949,58.837,111.465,57.509,113.172,57.509z M128.529,213.554c-4.551,0-8.152-3.603-8.152-8.153c0-4.55,3.604-8.152,8.152-8.152 s8.151,3.603,8.151,8.152C136.682,209.761,133.081,213.554,128.529,213.554z M169.105,186.819h-81.15V74.384h81.15V186.819 L169.105,186.819z",
          })
        );
      }
      function Q() {
        return i.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_2",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_VR",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
          },
          i.createElement("path", {
            d: "M224.389,62.411H31.613c-10.147,0-18.36,8.214-18.36,18.36v94.453c0,10.147,8.215,18.359,18.36,18.359h192.775 c10.146,0.241,18.358-7.968,18.358-18.116V80.771C242.747,70.625,234.534,62.411,224.389,62.411z M92.317,175.026H71.646 L35.472,79.832h21.895l25.022,72.484l24.343-72.484h21.895L92.317,175.026z M195.264,175.026l-19.175-32.095h-2.176h-14.279 v32.095h-19.991V79.832h35.63c13.056,0,22.664,2.607,28.831,7.819c6.164,5.215,9.247,12.49,9.247,21.827 c0,7.343-1.61,13.463-4.828,18.359c-3.219,4.896-7.729,8.614-13.531,11.151l22.575,36.038H195.264z",
          }),
          i.createElement("path", {
            d: "M187.784,100.298c-2.812-2.312-7.391-3.468-13.735-3.468h-14.415v28.966h15.639c5.257,0,9.36-1.336,12.308-4.012 c2.945-2.673,4.42-6.368,4.42-11.083C192,106.078,190.593,102.61,187.784,100.298z",
          })
        );
      }
      function J() {
        return i.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_2",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_LargeMobilePhone",
            x: "0px",
            y: "0px",
            width: "128px",
            height: "255px",
            viewBox: "0 0 128 255",
          },
          i.createElement("rect", {
            className: "screen",
            x: "7.756",
            y: "5.518",
            fill: "#292D33",
            width: "112.144",
            height: "234.357",
          }),
          i.createElement("path", {
            className: "frame",
            fill: "#3C414B",
            d: "M40.334,15.72h47.237c3.957,0,7.164-3.259,7.164-7.28c0-1.113,0.889-2.017,1.984-2.017h9.746 c7.417,0,13.432,6.108,13.432,13.646v206.156c0,7.538-6.015,13.647-13.431,13.647H21.459c-7.417,0-13.429-6.109-13.429-13.647 V20.071c0-7.536,6.013-13.646,13.429-13.646h9.728c1.096,0,1.983,0.903,1.983,2.017C33.17,12.461,36.377,15.72,40.334,15.72 M107.057,0.001H20.87c-9.922,0-17.965,8.174-17.965,18.256v217.505c0,10.082,8.043,18.256,17.965,18.256h86.188 c9.923,0,17.966-8.174,17.966-18.256V18.257C125.022,8.175,116.979,0.001,107.057,0.001",
          }),
          i.createElement("path", {
            fill: "#3C414B",
            d: "M0.826,33.349C0.369,33.349,0,33.725,0,34.189v7.616c0,0.464,0.37,0.84,0.826,0.84s0.827-0.376,0.827-0.84 v-7.617C1.653,33.725,1.283,33.349,0.826,33.349",
          }),
          i.createElement("path", {
            fill: "#3C414B",
            d: "M0.826,51.56C0.369,51.56,0,51.936,0,52.4v16.8c0,0.465,0.37,0.841,0.826,0.841s0.827-0.376,0.827-0.841 V52.4C1.653,51.936,1.283,51.56,0.826,51.56",
          }),
          i.createElement("path", {
            fill: "#3C414B",
            d: "M0.826,75.304C0.369,75.304,0,75.68,0,76.144v15.904c0,0.464,0.37,0.84,0.826,0.84s0.827-0.376,0.827-0.84 V76.144C1.653,75.68,1.283,75.304,0.826,75.304",
          }),
          i.createElement("path", {
            fill: "#3C414B",
            d: "M127.617,58.056c-0.457,0-0.827,0.376-0.827,0.84v27.328c0,0.464,0.37,0.84,0.827,0.84 c0.456,0,0.826-0.376,0.826-0.84V58.896C128.443,58.432,128.073,58.056,127.617,58.056",
          })
        );
      }
      function ee() {
        return i.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_2",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Envelope",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
          },
          i.createElement("polygon", {
            fill: "#3C414B",
            points: "3.167,48.809 127.22,128 252.833,48.809 ",
          }),
          i.createElement("polygon", {
            fill: "#3C414B",
            points: "252.833,203.68 252.833,55.439 185.151,99.131 ",
          }),
          i.createElement("polygon", {
            fill: "#3C414B",
            points:
              "247.958,207.191 180.47,101.472 128.001,134.24 75.142,101.472 7.849,207.191 ",
          }),
          i.createElement("polygon", {
            fill: "#3C414B",
            points: "3.167,203.682 3.167,55.441 70.851,99.132 ",
          })
        );
      }
      function te() {
        return i.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_3",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Twitter",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
          },
          i.createElement("path", {
            d: "M250.151,128.021c0,67.418-54.604,122.022-122.022,122.022S6.107,195.439,6.107,128.021C6.107,60.604,60.712,6,128.129,6 S250.151,60.604,250.151,128.021z M105.799,192.389c54.117,0,83.707-44.842,83.707-83.707c0-1.282,0-2.563-0.062-3.783 c5.736-4.148,10.739-9.335,14.705-15.252c-5.247,2.318-10.922,3.905-16.901,4.637c6.103-3.661,10.738-9.396,12.936-16.29 c-5.675,3.355-11.959,5.796-18.67,7.138c-5.369-5.734-12.995-9.273-21.477-9.273c-16.228,0-29.406,13.179-29.406,29.407 c0,2.318,0.243,4.576,0.793,6.711c-24.466-1.22-46.125-12.934-60.646-30.75c-2.501,4.332-3.965,9.396-3.965,14.765 c0,10.189,5.186,19.218,13.117,24.465c-4.819-0.122-9.334-1.464-13.3-3.661c0,0.122,0,0.244,0,0.366 c0,14.275,10.128,26.113,23.611,28.857c-2.44,0.672-5.064,1.039-7.748,1.039c-1.892,0-3.723-0.184-5.553-0.551 c3.722,11.714,14.581,20.195,27.455,20.44c-10.067,7.868-22.757,12.566-36.546,12.566c-2.379,0-4.697-0.122-7.016-0.427 C73.707,187.507,89.204,192.389,105.799,192.389",
          })
        );
      }
      function re() {
        return i.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_3",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_TwitchTV",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
          },
          i.createElement("path", {
            d: "M28.176,8.026L11.763,49.97v171.427h58.358v31.003h32.826l31.003-31.003h47.414l63.829-63.829V8.026H28.176z M223.311,146.625l-36.474,36.474h-58.359l-31.002,31.003v-31.003H48.237V29.91h175.074V146.625z M186.837,71.855v63.829h-21.885 V71.855H186.837z M128.478,71.855v63.829h-21.883V71.855H128.478z",
          })
        );
      }
      function ne() {
        return i.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_2",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_CSGO",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
          },
          i.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M236.979,138.059c0.548,0.078,6.91,0.101,7.772,0.032 c1.215-0.095,1.396,0.068,1.388,0.708c-0.01,0.397,0.012,3.039-2.365,7.32c-3.301,5.948-12.079,10.436-12.55,10.672 c-0.47,0.233-0.53,0.484-0.136,0.75c0.434,0.295,8.068,1.454,9.084,1.611c1.017,0.154,0.637,1.001,0.637,1.001 s-0.704,2.621-2.895,5.36c-2.189,2.738-9.311,6.123-8.583,6.123c0.731,0,7.187,0.159,6.181,1.422 c-3.019,3.786-13.603,9.528-18.43,13.813c-13.388,11.885-13.217,12.864-15.52,15.09c-0.983-3.298-3.02-12.658-3.02-12.658 l-6.105-11.467c4.413,0.18,6.364,0.081,8.952,0.081c9.214,0,17.525-2.185,22.234-5.841l2.371-1.843l-2.911-0.728 c-2.131-0.528-7.121-1.782-11.896-2.979c2.184-0.104,10.803-1.299,14.413-5.339c0.136-0.151,0.276-0.321,0.406-0.494l1.245-1.664 l-2.404-0.735c-2.607-0.799-5.948-1.682-8.517-2.335c3.173-1.572,7.585-3.942,10.048-6.088c4.83-4.203,7.226-9.709,7.322-9.943 l0.9-2.098l-10.772,0.318c1.503-1.483,3.218-3.197,3.939-3.991c1.43-1.571,4.053-6.221,4.198-9.896l0.072-1.787l-1.763,0.288 c-1.979,0.322-5.301,1.279-8.179,2.173c2.025-2.193,4.296-4.767,5.46-6.484c2.687-3.964,2.76-8.371,2.597-12.916l-0.104-2.881 l-2.261,1.79c-2.559,2.028-7.595,5.031-11.097,7.047c1.538-3.644,3.54-8.752,3.813-11.276c0.5-4.681-0.248-10.196-0.248-10.196 l-10.76,9.394c0.885-1.953,1.684-4.013,2.117-5.832c1.735-7.29,0.055-17.892-0.021-18.338l-0.452-2.807l-7.777,7.739 c0.722-3.535,1.465-8.253,1.23-11.789c-0.426-6.321-2.278-10.517-2.359-10.694l-1.01-2.251l-6.465,8.577 c0.231-4.285,0.27-10.24-0.948-13.547c-1.934-5.262-3.651-8.007-3.723-8.121l-1.232-1.958l-3.057,4.85 c0.018-2.967-0.11-6.475-0.69-8.68c-1.202-4.543-2.825-6.396-3.002-6.592l-1.325-1.433l-1.623,2.705 c-0.278-3.19-1.112-7.084-3.343-9.478l-0.814-0.872l-1.012,0.623c-0.327,0.201-0.714,0.497-1.104,0.823 c-0.154-1.135-0.365-2.451-0.639-3.691c0.563-4.733,1.186-10.03,1.206-10.452c0.027-0.547,0.274-0.767,1.017-0.391 c0.898,0.452,3.156,2.064,5.187,6.133c2.036,4.067,3.132,11.324,3.117,12.044c-0.009,0.383,0.291,0.757,0.438,0.151 c0.145-0.607,0.478-7.591,0.623-8.312c0.081-0.383,0.199-0.484,0.737-0.212c0.496,0.249,2.959,2.181,4.899,6.463 c1.179,2.599,1.634,11.946,1.574,12.653c-0.106,1.278,0.313,0.891,0.339,0.883c-0.009,0.013-0.025,0.04-0.03,0.049 c0.03-0.041,0.036-0.049,0.03-0.049c0.573-0.841,4.21-8.99,4.519-9.377c0.313-0.39,0.521-0.395,0.835,0.002 c0.262,0.33,2.095,1.717,4.049,10.088c1.902,8.135,1.949,11.542,1.848,12.682c-0.08,0.86,0.339,0.993,0.731,0.524 c0.389-0.47,5.104-9.201,5.497-9.515c0.389-0.313,0.613-0.309,0.927,0.161c0.312,0.469,2.718,4.762,3.684,11.448 c0.861,5.947,0.608,13.599,0.375,14.381c-0.235,0.782-0.135,1.077,0.493,0.53c0.623-0.548,10.299-8.412,11.004-9.038 c0.703-0.627,1.18-0.65,1.34-0.046c0.172,0.654,0.822,8.654,0.275,15.225c-0.549,6.571-2.626,12.752-2.94,13.145 c-0.312,0.391,0.087,0.712,0.478,0.555c0.394-0.157,11.902-10.018,12.645-10.402c0.711-0.367,1.043,0.005,1.105,0.507 c0.068,0.544,0.966,3.098-0.419,11.269c-0.959,5.65-3.54,11.876-3.855,12.033c-0.313,0.157-0.077,0.336,0.234,0.259 c0.315-0.079,8.324-3.488,8.872-3.567c0.546-0.079,0.671,0.339,0.514,0.808c-0.158,0.469-0.458,6.273-2.534,11.639 c-2.603,6.732-6.056,11.001-6.056,11.001s-0.252,0.519,0.217,0.519s9.266-0.186,9.813-0.263c0.547-0.079,0.627,0.156,0.547,0.704 c-0.077,0.547,0.858,9.116-8.624,14.601C236.524,137.734,236.432,137.979,236.979,138.059z M174.473,24.823 c1.981,3.34,2.018,9.248,1.836,11.469l-0.52,6.238l5.25-8.744c0.395,0.843,0.85,2.003,1.25,3.524 c1.02,3.877,0.422,13.082,0.417,13.173l-0.384,5.752l6.435-10.212c0.628,1.27,1.45,3.097,2.32,5.459 c1.466,3.983,0.772,13.806,0.381,17.257l-0.602,5.308l9.568-12.69c0.493,1.707,1.058,4.21,1.259,7.227 c0.39,5.821-2.272,15.731-2.299,15.83l-1.428,5.26l11.125-11.068c0.377,3.586,0.772,9.774-0.304,14.302 c-1.2,5.057-5.778,12.588-5.823,12.664l-1.806,3.992l16.878-14.09c-0.116,1.366-0.262,2.944-0.423,4.435 c-0.312,2.935-3.954,11.389-5.335,14.399l-1.827,4.002l3.856-2.115c0.381-0.208,8.027-4.41,12.979-7.778 c-0.039,3.484-0.537,6.042-2.139,8.4c-2.189,3.234-9.05,10.198-9.118,10.268l-4.352,4.408l5.861-2.004 c0.08-0.025,6.868-2.34,11.188-3.41c-0.675,2.445-2.208,5.125-3.11,6.118c-1.319,1.449-6.429,6.429-6.48,6.482l-2.682,2.614 l13.475-0.404c-1.06,1.837-2.89,4.549-5.457,6.783c-3.727,3.244-12.956,7.341-13.048,7.383l-3.952,1.746l4.201,1.008 c0.062,0.015,5.637,1.354,10.266,2.67c-3.412,2.191-9.291,3.081-10.948,3.138c-2.06,0.072-11.075,0.125-11.075,0.125l-11.51,0.069 l11.162,2.804c0,0,12.587,3.164,19.486,4.894c-4.398,2.216-10.717,3.493-17.657,3.493c-3.102,0-10.335-0.284-15.048-0.483 c4.064,6.069,7.041,11.004,7.992,13.681c2.813,7.915,6.777,28.269,6.889,48.907c0.039,6.572-1.081,11.649-9.022,11.649 c-0.288,0-0.597-0.038-0.908-0.092c-1.846,0.339-4.351,0.595-5.438-0.095c-1.805-1.149-3.163-2.627-3.544-3.957 c-0.383-1.334-1.146-9.374-3.106-20.675c-1.92-11.046-4.038-19.431-4.237-19.525c-1.535-0.731-9.358-18.45-9.358-18.45 l-37.23-47.615c0,0-20.737,23.917-37.455,47.8c-0.867,1.235-5.994,11.251-9.275,17.989c-0.212,0.437-0.181,0.475-0.281,0.808 c-0.604,2.015-2.396,9.525-4.039,18.994c-1.962,11.301-2.725,19.341-3.105,20.675c-0.384,1.33-1.74,2.808-3.546,3.957 c-1.085,0.689-3.592,0.434-5.437,0.095c-0.313,0.054-0.621,0.092-0.909,0.092c-7.941,0-9.061-5.077-9.024-11.649 c0.114-20.639,4.078-40.992,6.892-48.907c0.95-2.677,3.926-7.611,7.993-13.681c-4.714,0.199-11.946,0.483-15.051,0.483 c-6.939,0-13.26-1.277-17.653-3.493c6.896-1.729,19.486-4.894,19.486-4.894l11.159-2.804l-11.508-0.069 c0,0-9.019-0.053-11.076-0.125c-1.66-0.057-7.537-0.946-10.949-3.138c4.629-1.315,10.202-2.655,10.264-2.67l4.201-1.008l-3.95-1.746 c-0.094-0.042-9.324-4.139-13.049-7.383c-2.566-2.234-4.397-4.946-5.458-6.783l13.477,0.404l-2.684-2.614 c-0.05-0.054-5.16-5.033-6.48-6.482c-0.9-0.993-2.436-3.673-3.108-6.118c4.319,1.069,11.108,3.384,11.188,3.41l5.861,2.004 l-4.352-4.408c-0.069-0.069-6.928-7.033-9.12-10.268c-1.601-2.358-2.099-4.916-2.139-8.4c4.953,3.368,12.601,7.57,12.98,7.778 l3.858,2.115l-1.829-4.002c-1.379-3.011-5.022-11.465-5.334-14.399c-0.161-1.491-0.305-3.068-0.421-4.435l16.877,14.09l-1.806-3.992 c-0.046-0.076-4.622-7.607-5.821-12.664c-1.078-4.528-0.682-10.716-0.307-14.302L58.57,89.672l-1.426-5.26 c-0.025-0.098-2.688-10.008-2.3-15.83c0.203-3.017,0.767-5.52,1.26-7.227l9.566,12.69l-0.601-5.308 c-0.391-3.451-1.083-13.274,0.381-17.257c0.871-2.362,1.693-4.189,2.32-5.459l6.435,10.212l-0.382-5.752 c-0.006-0.091-0.604-9.295,0.416-13.173c0.401-1.521,0.854-2.681,1.251-3.524l5.249,8.744l-0.52-6.238 c-0.181-2.221-0.144-8.129,1.836-11.469c0.596,0.522,1.248,1.148,1.67,1.575l2.215,2.245l0.276-3.142 c0.162-1.838,0.783-7.003,1.703-8.813c1.342-2.635,4.69-3.91,7.104-4.505c-6.691,13.614-36.889,77.59-36.889,122.937 c0,23.658,16.206,23.931,16.368,23.931c4.881,0,6.947-7.914,6.947-11.063V133.45c0-2.744,1.148-2.744,1.835-2.744 c5.807,0,10.48,3.196,13.855,6.69c8.813-11.615,15.81-20.526,15.81-20.526s0.16-0.182,0.248-0.345 c-1.03-2.443-7.165-16.995-7.165-16.995l1.708-43.717c0,0-0.278-3.797,1.044-6.052c1.314-2.245,4.247-3.175,4.247-3.175 l13.307,41.443c0,0-4.107,0.866-4.107,5.585c0,2.982,2.658,4.99,6.227,5.013c3.572-0.022,6.227-2.031,6.227-5.013 c0-4.719-4.109-5.585-4.109-5.585l13.311-41.443c0,0,2.93,0.93,4.245,3.175c1.322,2.255,1.043,6.052,1.043,6.052l1.709,43.717 l-7.309,17.34c0,0,6.997,8.911,15.809,20.526c3.375-3.494,8.048-6.69,13.855-6.69c0.687,0,1.833,0,1.833,2.744v14.538 c0,3.148,2.068,11.063,6.95,11.063c0.159,0,16.367-0.272,16.367-23.931c0-45.347-30.197-109.322-36.888-122.937 c2.412,0.595,5.761,1.87,7.104,4.505c0.92,1.809,1.541,6.975,1.705,8.813l0.275,3.142l2.213-2.245 C173.226,25.972,173.875,25.345,174.473,24.823z M176.157,181.396c-1.644-2.189-41.07-55.856-41.07-55.856l-6.723,8.809 l-0.946-1.233l-0.829-1.082l-5.053-6.594l-0.095,0.101c0,0-39.427,53.667-41.07,55.856c-1.643,2.191-4.777,6.708-6.058,9.322 c-1.279,2.614-8.946,39.306-8.946,42.592c0,2.005,0.041,8.618,0.071,13.47c1.536,0.2,3.411,0.761,4.357,0.125 c1.624-1.093,2.363-2.323,2.491-3.372c0.128-1.048,1.367-12.969,2.69-20.812c1.779-10.547,4.571-19.005,4.415-18.97 c3.213-6.672,8.966-17.938,9.887-19.252c17.808-25.439,38.994-49.947,38.994-49.947s21.166,24.502,38.978,49.947 c0.921,1.313,6.672,12.58,9.888,19.252c-0.158-0.035,2.635,8.423,4.414,18.97c1.322,7.843,2.562,19.764,2.688,20.812 c0.131,1.049,0.87,2.279,2.493,3.372c0.944,0.636,2.818,0.075,4.355-0.125c0.032-4.852,0.073-11.465,0.073-13.47 c0-3.286-7.667-39.978-8.948-42.592C180.936,188.104,177.801,183.588,176.157,181.396z M82.538,21.517l-1.014-0.623l-0.813,0.872 c-2.231,2.394-3.063,6.287-3.342,9.478l-1.624-2.705l-1.323,1.433c-0.179,0.197-1.801,2.049-3.004,6.592 c-0.581,2.205-0.709,5.712-0.689,8.68l-3.057-4.85l-1.234,1.958c-0.072,0.114-1.787,2.859-3.722,8.121 c-1.22,3.307-1.179,9.262-0.949,13.547l-6.463-8.577l-1.012,2.251c-0.08,0.177-1.934,4.373-2.359,10.694 c-0.234,3.536,0.51,8.253,1.231,11.789l-7.778-7.739l-0.453,2.807c-0.073,0.446-1.754,11.048-0.02,18.338 c0.433,1.819,1.231,3.879,2.117,5.832l-10.759-9.394c0,0-0.749,5.515-0.248,10.196c0.271,2.523,2.272,7.632,3.813,11.276 c-3.503-2.016-8.539-5.019-11.099-7.047l-2.259-1.79l-0.106,2.881c-0.162,4.545-0.087,8.952,2.6,12.916 c1.161,1.717,3.433,4.291,5.459,6.484c-2.877-0.894-6.201-1.851-8.179-2.173l-1.763-0.288l0.071,1.787 c0.148,3.675,2.771,8.324,4.198,9.896c0.723,0.794,2.436,2.508,3.941,3.991L21.93,137.83l0.896,2.098 c0.1,0.234,2.493,5.74,7.324,9.943c2.464,2.146,6.876,4.516,10.047,6.088c-2.57,0.653-5.908,1.536-8.518,2.335l-2.402,0.735 l1.246,1.664c0.13,0.173,0.27,0.343,0.407,0.494c3.608,4.04,12.229,5.234,14.412,5.339c-4.774,1.197-9.767,2.451-11.896,2.979 l-2.911,0.728l2.371,1.843c4.708,3.656,13.02,5.841,22.233,5.841c2.588,0,4.539,0.099,8.954-0.081l-6.105,11.467 c0,0-2.038,9.36-3.02,12.658c-2.304-2.226-2.133-3.205-15.52-15.09c-4.829-4.284-15.411-10.026-18.429-13.813 c-1.005-1.263,5.449-1.422,6.179-1.422c0.73,0-6.393-3.385-8.582-6.123c-2.191-2.739-2.895-5.36-2.895-5.36s-0.38-0.847,0.637-1.001 c1.018-0.157,8.65-1.316,9.084-1.611c0.395-0.266,0.332-0.517-0.137-0.75c-0.469-0.236-9.248-4.724-12.548-10.672 c-2.375-4.281-2.357-6.923-2.364-7.32c-0.01-0.64,0.17-0.803,1.385-0.708c0.862,0.068,7.226,0.046,7.774-0.032 c0.546-0.08,0.453-0.324,0.019-0.576c-9.483-5.484-8.546-14.054-8.624-14.601c-0.079-0.548,0-0.783,0.548-0.704 c0.546,0.077,9.342,0.263,9.812,0.263c0.469,0,0.218-0.519,0.218-0.519s-3.452-4.27-6.056-11.001 c-2.077-5.366-2.377-11.169-2.533-11.639c-0.157-0.469-0.034-0.887,0.514-0.808c0.549,0.079,8.558,3.488,8.87,3.567 c0.313,0.077,0.548-0.103,0.235-0.259c-0.314-0.157-2.896-6.383-3.855-12.033c-1.384-8.17-0.488-10.725-0.42-11.269 c0.063-0.502,0.397-0.874,1.105-0.507c0.743,0.385,12.255,10.245,12.646,10.402c0.391,0.157,0.79-0.164,0.477-0.555 c-0.313-0.392-2.392-6.574-2.938-13.145c-0.548-6.571,0.1-14.571,0.274-15.225c0.161-0.604,0.635-0.581,1.339,0.046 c0.704,0.626,10.381,8.489,11.006,9.038c0.625,0.547,0.727,0.252,0.492-0.53c-0.235-0.782-0.484-8.435,0.375-14.381 c0.965-6.686,3.372-10.979,3.685-11.448s0.536-0.474,0.927-0.161c0.391,0.313,5.106,9.045,5.497,9.515 c0.391,0.469,0.809,0.336,0.732-0.524c-0.104-1.14-0.057-4.547,1.845-12.682c1.956-8.371,3.789-9.758,4.052-10.088 c0.313-0.396,0.521-0.392,0.833-0.002c0.309,0.387,3.945,8.536,4.519,9.377c-0.005,0,0,0.008,0.031,0.049 c-0.007-0.009-0.022-0.036-0.031-0.049c0.025,0.008,0.446,0.395,0.34-0.883c-0.058-0.707,0.396-10.055,1.574-12.653 c1.941-4.282,4.404-6.214,4.899-6.463c0.54-0.272,0.658-0.171,0.737,0.212c0.146,0.721,0.478,7.705,0.625,8.312 c0.146,0.606,0.444,0.232,0.437-0.151c-0.015-0.72,1.081-7.977,3.115-12.044c2.033-4.069,4.292-5.681,5.188-6.133 c0.742-0.376,0.989-0.156,1.018,0.391c0.022,0.422,0.645,5.719,1.206,10.452c-0.272,1.24-0.484,2.556-0.639,3.691 C83.251,22.014,82.866,21.718,82.538,21.517z M127.35,141.814c-1.158,12.032-4.978,23.045-6.326,29.486 c-1.643,7.849-4.788,18.061-6.793,20.931c-4.433,6.343-18.036,18.547-20.403,19.732c-1.094,0.547-6.376-4.115-6.56-4.846 c-0.182-0.728,2.883-3.993,2.154-3.627c-0.731,0.364-4.104,0.906-5.06,0.87c-0.753-0.026,0.633-2.728,0.633-2.728 s-1.484,2.217-3.021,2.947c-0.03,0.015,9.433-18.119,9.433-18.119S127.52,140.043,127.35,141.814z M119.7,169.39l3.104-10.647 l-1.869-0.559l-3.152,10.656L119.7,169.39z M114.072,167.242l4.687-10.051l-1.764-0.838l-4.735,10.055L114.072,167.242z  M126.961,159.319l-0.82,11.06l-1.991-0.139l0.867-11.079L126.961,159.319z M131.727,170.391l-1.986,0.167l-0.828-11.078 l1.944-0.144L131.727,170.391z M164.422,186.462c0,0,9.463,18.134,9.434,18.119c-1.54-0.73-3.021-2.947-3.021-2.947 s1.384,2.701,0.633,2.728c-0.957,0.036-4.33-0.506-5.06-0.87c-0.731-0.366,2.334,2.899,2.153,3.627 c-0.185,0.73-5.467,5.393-6.56,4.846c-2.368-1.186-15.973-13.39-20.404-19.732c-2.007-2.87-5.149-13.082-6.792-20.931 c-1.349-6.441-4.621-17.127-5.778-29.16C128.854,140.373,164.422,186.462,164.422,186.462z M142.029,167.242l1.813-0.834 l-4.735-10.055l-1.762,0.838L142.029,167.242z M136.402,169.39l1.917-0.55l-3.152-10.656l-1.868,0.559L136.402,169.39z",
          })
        );
      }
      function ie() {
        return i.createElement(
          "svg",
          {
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_ClosedCaption",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
          },
          i.createElement("path", {
            className: "CCBox",
            fill: "none",
            stroke: "#000000",
            strokeWidth: "10",
            strokeMiterlimit: "10",
            d: "M238,210c0,6.627-5.373,12-12,12H30 c-6.627,0-12-5.373-12-12V46c0-6.627,5.373-12,12-12h196c6.627,0,12,5.373,12,12V210z",
          }),
          i.createElement("path", {
            className: "C1",
            d: "M90.505,173.207c11.431,0,22.338-4.276,30.72-12.036c2.6-2.407,2.753-6.47,0.347-9.068c-2.41-2.604-6.47-2.757-9.072-0.349 c-5.998,5.559-13.811,8.62-21.995,8.62c-17.852,0-32.373-14.524-32.373-32.372c0-17.849,14.521-32.373,32.373-32.373 c8.177,0,15.981,3.055,21.979,8.603c2.603,2.407,6.662,2.25,9.072-0.353c2.407-2.602,2.249-6.662-0.353-9.068 c-8.375-7.751-19.276-12.019-30.694-12.019c-24.931,0-45.209,20.281-45.209,45.209C45.3,152.93,65.574,173.207,90.505,173.207z",
          }),
          i.createElement("path", {
            className: "C1",
            d: "M177.926,173.207c11.431,0,22.338-4.276,30.721-12.036c2.6-2.407,2.754-6.47,0.347-9.068 c-2.41-2.604-6.47-2.757-9.072-0.349c-5.998,5.559-13.812,8.62-21.995,8.62c-17.852,0-32.372-14.524-32.372-32.372 c0-17.849,14.521-32.373,32.372-32.373c8.178,0,15.981,3.055,21.979,8.603c2.604,2.407,6.663,2.25,9.072-0.353 c2.407-2.602,2.25-6.662-0.353-9.068c-8.375-7.751-19.277-12.019-30.694-12.019c-24.932,0-45.209,20.281-45.209,45.209 C132.721,152.93,152.996,173.207,177.926,173.207z",
          })
        );
      }
      function ae() {
        return i.createElement(
          "svg",
          {
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Hidden",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
          },
          i.createElement("path", {
            fill: "none",
            stroke: "#FFFFFF",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            d: "M62.499,172.263 c-32.755-16.197-47.415-39.509-47.415-39.509",
          }),
          i.createElement("path", {
            fill: "none",
            stroke: "#FFFFFF",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            d: "M177.948,85.392 c48.213,14.998,68.451,47.362,68.451,47.362s-36.393,54.737-115.689,54.737c-17.938,0-33.591-2.671-47.096-6.832",
          }),
          i.createElement("path", {
            fill: "none",
            stroke: "#FFFFFF",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            d: "M15.084,132.754 c0,0,32.933-56.576,115.674-54.785c8.505,0.185,16.486,0.913,23.96,2.072",
          }),
          i.createElement("path", {
            fill: "none",
            stroke: "#FFFFFF",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            d: "M93.981,141.131 c-0.475-2.385-0.725-4.852-0.725-7.377c0-20.711,16.789-37.5,37.5-37.5c2.42,0,4.787,0.229,7.08,0.668",
          }),
          i.createElement("path", {
            fill: "none",
            stroke: "#FFFFFF",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            d: "M156.528,106.512 c7.223,6.836,11.729,16.513,11.729,27.242c0,20.711-16.789,37.5-37.5,37.5c-10.609,0-20.189-4.405-27.012-11.487",
          }),
          i.createElement("line", {
            fill: "none",
            stroke: "#FFFFFF",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            x1: "53.007",
            y1: "210.504",
            x2: "208.507",
            y2: "55.004",
          })
        );
      }
      function se(e) {
        const t = Object(o.a)(
          "SVGIcon_Button",
          e.filled ? "SVGIcon_Star_Filled" : "SVGIcon_Star_Unfilled"
        );
        return i.createElement(
          "svg",
          {
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            className: t,
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
          },
          i.createElement("path", {
            fill: e.filled ? "#currentColor" : "none",
            stroke: "#currentColor",
            strokeWidth: "10",
            strokeMiterlimit: "10",
            d: "M127.755,18.624 c-2.061,0.101-3.846,1.465-4.485,3.427L98.312,96.933H18.379c-2.745,0.01-4.963,2.242-4.955,4.989 c0.006,1.572,0.754,3.05,2.019,3.984l64.925,47.476L55.41,230.873c-0.848,2.612,0.582,5.417,3.192,6.265 c1.521,0.495,3.186,0.228,4.475-0.719L128,188.945l64.926,47.474c2.212,1.624,5.324,1.144,6.947-1.071 c0.944-1.29,1.211-2.954,0.719-4.475l-24.959-77.492l64.922-47.476c2.211-1.63,2.681-4.743,1.049-6.953 c-0.934-1.265-2.41-2.015-3.984-2.02H157.69l-24.959-74.882C132.033,19.917,129.997,18.513,127.755,18.624z",
          })
        );
      }
      function oe() {
        return i.createElement(
          "svg",
          {
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Download",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
          },
          i.createElement(
            "g",
            { className: "arrow" },
            i.createElement("line", {
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "12",
              strokeLinecap: "round",
              strokeMiterlimit: "10",
              x1: "129",
              y1: "182",
              x2: "129",
              y2: "24",
            }),
            i.createElement("polyline", {
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "12",
              strokeLinecap: "round",
              strokeMiterlimit: "10",
              points: "174.25,141.25 128.732,183.625 84.25,141.25",
            })
          ),
          i.createElement(
            "g",
            { className: "catch" },
            i.createElement("polyline", {
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "12",
              strokeLinecap: "round",
              strokeMiterlimit: "10",
              points: "23.25,173.5 23.25,235.75 234.75,235.75 234.75,173.5",
            })
          )
        );
      }
      function le() {
        return i.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_3",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Filter",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
          },
          i.createElement("path", {
            d: "M236.445,23.522c-1.085-2.35-3.438-3.855-6.025-3.855H25.58c-2.586,0-4.936,1.501-6.024,3.855 c-1.08,2.349-0.698,5.112,0.983,7.083l80.328,94.039v104.181c0,2.74,1.682,5.194,4.237,6.188c0.778,0.3,1.588,0.445,2.392,0.445 c1.832,0,3.626-0.762,4.91-2.17l41.012-45.13c1.111-1.219,1.724-2.811,1.724-4.459v-59.054l80.325-94.04 C237.144,28.634,237.526,25.867,236.445,23.522z",
          })
        );
      }
      function ce() {
        return i.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_2",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Edit",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
          },
          i.createElement("path", {
            d: "M16.757,233.795c-1.324,3.973,2.455,7.752,6.427,6.428l50.912-16.971l-40.368-40.367L16.757,233.795z",
          }),
          i.createElement("rect", {
            x: "83.614",
            y: "75.466",
            transform:
              "matrix(-0.7071 -0.7071 0.7071 -0.7071 93.7468 324.5916)",
            width: "60.971",
            height: "134.827",
          }),
          i.createElement("rect", {
            x: "149.28",
            y: "68.116",
            transform:
              "matrix(-0.7071 -0.7071 0.7071 -0.7071 252.0431 259.4951)",
            width: "60.971",
            height: "18.862",
          }),
          i.createElement("path", {
            d: "M233.545,37.803l-14.368-14.369c-7.928-7.928-20.846-7.897-28.809,0.064l-14.305,14.307l43.112,43.111l14.306-14.305 C241.511,58.582,241.513,45.771,233.545,37.803z",
          })
        );
      }
      function de() {
        return i.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_2",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Information",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
          },
          i.createElement("polyline", {
            className: "I",
            points:
              "86.883,110.957 152.894,110.957 152.894,181.406 177.117,181.406 177.117,202.485 86.883,202.485 86.883,181.775 109.441,181.775 109.441,130.372 86.883,130.372 ",
          }),
          i.createElement("circle", {
            className: "I",
            cx: "128.47",
            cy: "67.607",
            r: "25.517",
          }),
          i.createElement("circle", {
            fill: "none",
            stroke: "#000000",
            strokeWidth: "14",
            strokeMiterlimit: "10",
            cx: "128",
            cy: "128",
            r: "116.833",
          })
        );
      }
      function ue(e) {
        return i.createElement(
          "svg",
          {
            style: { height: e.height, width: e.height },
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_DynamicCollection",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
          },
          i.createElement("polyline", {
            style: { opacity: 0.2 },
            points:
              "27.875,27.875 73.692,27.893 51.91,154.75 74.672,155 62.787,227.93 27.875,228.125",
          }),
          i.createElement("polyline", {
            style: { opacity: 0.2 },
            points:
              "202.723,27.875 228.147,27.875 228.541,227.93 111.667,227.93 209.345,91.25 175.523,91.218",
          }),
          i.createElement("polygon", {
            points:
              "178.671,16.667 103.833,16.667 75.506,140.146 103.83,140.025 75.506,242.5 174.837,107.74 142.5,107.5",
          })
        );
      }
      function me() {
        return i.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_2",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Patch",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
          },
          i.createElement("path", {
            d: "M171.176,136.219c-5.516-5.516-14.166-5.948-20.223-1.406L92.125,75.984l-8.002-29.738c-0.324-1.406-1.73-3.027-3.028-3.785 L46.49,24.186c-1.298-0.648-3.136-0.433-4.218,0.648L25.295,41.813c-0.974,0.973-1.298,2.92-0.649,4.217l18.276,34.605 c0.648,1.297,2.379,2.596,3.785,3.027l29.739,8.003l58.828,58.828c-4.542,6.056-4.109,14.707,1.405,20.222l56.882,56.882 c6.056,6.056,15.896,6.056,21.845,0l12.544-12.544c6.056-6.056,6.056-15.788,0-21.845L171.176,136.219z",
          }),
          i.createElement("path", {
            d: "M153.116,122.16c2.271-0.648,4.65-0.973,7.138-0.973c0.865,0,1.622,0,2.486,0.107l26.928-26.927 c12.328,2.92,25.846-0.324,35.361-9.948c9.517-9.625,12.869-23.034,9.949-35.254l-20.33,20.33l-21.845-5.84l-5.84-21.952 l20.331-20.33c-12.221-2.92-25.738,0.324-35.254,9.948c-9.625,9.625-12.869,23.143-9.949,35.362L129.866,98.91L153.116,122.16z",
          }),
          i.createElement("path", {
            d: "M99.371,129.406l-32.226,32.226c-12.328-2.92-25.845,0.324-35.362,9.948c-9.517,9.625-12.869,23.034-9.949,35.254 l20.331-20.33l21.953,5.84l5.839,21.952l-20.331,20.33c12.22,2.92,25.737-0.324,35.254-9.949 c9.625-9.624,12.869-23.142,9.949-35.361l27.035-27.035c-0.325-3.136,0-6.38,0.865-9.517L99.371,129.406z",
          })
        );
      }
      function he() {
        return i.createElement(
          "svg",
          {
            version: "1.1",
            id: "base",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_AppleLogo",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
          },
          i.createElement("path", {
            d: "M138.365,26.557c16.139-21.272,38.578-21.376,38.578-21.376s3.336,19.999-12.696,39.266 c-17.12,20.572-36.58,17.206-36.58,17.206S124.012,45.473,138.365,26.557z",
          }),
          i.createElement("path", {
            d: "M129.719,75.662c8.305,0,23.713-11.413,43.771-11.413c34.527,0,48.109,24.566,48.109,24.566s-26.565,13.583-26.565,46.54 c0,37.179,33.093,49.991,33.093,49.991s-23.134,65.112-54.38,65.112c-14.353,0-25.509-9.672-40.631-9.672 c-15.41,0-30.702,10.032-40.662,10.032c-28.533,0-64.581-61.765-64.581-111.414c0-48.849,30.512-74.474,59.13-74.474 C105.61,64.933,120.047,75.662,129.719,75.662z",
          })
        );
      }
      function pe() {
        return i.createElement(
          "svg",
          {
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0px",
            y: "0px",
            className: "SVGIcon_Button SVGIcon_WindowsLogo",
            width: "100%",
            height: "100%",
            viewBox: "0 0 128 128",
            enableBackground: "new 0 0 128 128",
          },
          i.createElement("rect", {
            fill: "#FFFFFF",
            width: "60.834",
            height: "60.835",
          }),
          i.createElement("rect", {
            x: "67.165",
            fill: "#FFFFFF",
            width: "60.835",
            height: "60.835",
          }),
          i.createElement("rect", {
            y: "67.164",
            fill: "#FFFFFF",
            width: "60.834",
            height: "60.836",
          }),
          i.createElement("rect", {
            x: "67.165",
            y: "67.164",
            fill: "#FFFFFF",
            width: "60.835",
            height: "60.836",
          })
        );
      }
      function fe() {
        return i.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_3_copy",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0px",
            y: "0px",
            viewBox: "0 0 256 256",
          },
          i.createElement(
            "g",
            { id: "Layer_3_copy" },
            i.createElement(
              "g",
              { id: "g4768_1_", transform: "translate(-6.9308024,-10)" },
              i.createElement("g", { id: "g4763_1_" })
            ),
            i.createElement("path", {
              d: "M206.3,36.6c-19.4,0-35.8,14.1-40.3,33H24.8c-6,0-10.8,4.8-10.8,10.8s4.8,10.8,10.8,10.8h141.3\r\n\t\t\t\tc4.7,18.6,20.9,32.4,40.2,32.4c22.9,0,41.5-19.5,41.5-43.5C247.9,56.2,229.2,36.6,206.3,36.6z M206.3,109.7\r\n\t\t\t\tc-15.2,0-27.5-13.2-27.5-29.5c0-16.3,12.4-29.5,27.5-29.5s27.5,13.2,27.5,29.5C233.9,96.4,221.5,109.7,206.3,109.7z",
            }),
            i.createElement("path", {
              d: "M230.4,157.3H107.9c-4.6-14.6-18.3-25.2-34.3-25.2s-29.7,10.6-34.3,25.2H24.8c-6,0-10.8,4.8-10.8,10.8\r\n\t\t\t\tS18.9,179,24.8,179h14.3c4.6,14.6,18.3,25.2,34.3,25.2s29.7-10.6,34.3-25.2h122.5c6,0,10.8-4.8,10.8-10.8S236.4,157.3,230.4,157.3z\r\n\t\t\t\tM73.5,189.8c-8,0-14.9-4.3-18.7-10.8l0,0c-0.7-1.2-1.3-2.4-1.7-3.7c0,0,0-0.1,0-0.1c-0.1-0.4-0.2-0.8-0.4-1.2c0-0.1,0-0.1,0-0.2\r\n\t\t\t\tc-0.2-0.8-0.4-1.7-0.5-2.6c0-0.1,0-0.2,0-0.3c0-0.3-0.1-0.7-0.1-1c0-0.1,0-0.2,0-0.4c0-0.4,0-0.9,0-1.3s0-0.9,0-1.3\r\n\t\t\t\tc0-0.1,0-0.2,0-0.4c0-0.3,0.1-0.7,0.1-1c0-0.1,0-0.2,0-0.3c0.1-0.9,0.3-1.8,0.5-2.6c0-0.1,0-0.1,0-0.2c0.1-0.4,0.2-0.8,0.4-1.2\r\n\t\t\t\tc0,0,0-0.1,0-0.1c0.5-1.3,1-2.6,1.7-3.7c3.7-6.4,10.7-10.8,18.7-10.8c8,0,14.9,4.3,18.7,10.8c0.7,1.2,1.3,2.4,1.7,3.7\r\n\t\t\t\tc0,0,0,0.1,0,0.1c0.1,0.4,0.3,0.8,0.4,1.2c0,0.1,0,0.1,0,0.2c0.2,0.8,0.4,1.7,0.5,2.6c0,0.1,0,0.2,0,0.3c0,0.3,0.1,0.7,0.1,1\r\n\t\t\t\tc0,0.1,0,0.2,0,0.4c0,0.4,0,0.9,0,1.3s0,0.9,0,1.3c0,0.1,0,0.2,0,0.4c0,0.3-0.1,0.7-0.1,1c0,0.1,0,0.2,0,0.3\r\n\t\t\t\tc-0.1,0.9-0.3,1.8-0.5,2.6c0,0.1,0,0.1,0,0.2c-0.1,0.4-0.2,0.8-0.4,1.2c0,0,0,0.1,0,0.1c-0.5,1.3-1,2.6-1.7,3.7l0,0\r\n\t\t\t\tC88.5,185.4,81.5,189.8,73.5,189.8z",
            })
          )
        );
      }
      function _e() {
        return i.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0px",
            y: "0px",
            viewBox: "0 0 256 256",
          },
          i.createElement("circle", { cx: "126", cy: "134", r: "20.6" }),
          i.createElement("circle", { cx: "189.4", cy: "134", r: "20.6" }),
          i.createElement("circle", { cx: "62.6", cy: "134", r: "20.6" })
        );
      }
      function ge() {
        return i.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Invalid",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
          },
          i.createElement("path", {
            d: "M128.5,27.4C74.1,27.4,30,71.5,30,125.9c0,54.4,44.1,98.5,98.5,98.5s98.5-44.1,98.5-98.5C226.9,71.5,182.9,27.4,128.5,27.4 z M206.8,125.9c0,17.7-5.9,34-15.8,47.2L81.3,63.3c13.1-9.9,29.5-15.8,47.2-15.8C171.7,47.5,206.8,82.6,206.8,125.9z M50.2,125.9 c0-17.7,5.9-34,15.8-47.2l109.7,109.7c-13.1,9.9-29.5,15.8-47.2,15.8C85.2,204.2,50.2,169.1,50.2,125.9z",
          })
        );
      }
      function be() {
        return i.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 18 18",
            version: "1.1",
            x: "0px",
            y: "0px",
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinejoin: "round",
            strokeMiterlimit: "1.41421",
          },
          i.createElement("path", {
            d: "M12.621,2.491c-0.021,0.019 -0.042,0.039 -0.063,0.06l-5.125,5.201c-0.579,0.587 -0.575,1.527 -0.001,2.109l0.691,0.702c0.576,0.584 1.505,0.582 2.079,-0.001l5.126,-5.201c0.021,-0.021 0.04,-0.042 0.059,-0.063l1.573,1.595c0.573,0.582 1.04,0.386 1.04,-0.439l0,-5.957c0,-0.276 -0.219,-0.497 -0.49,-0.497l-5.87,0c-0.82,0 -1.008,0.473 -0.434,1.056l1.415,1.435Zm-9.618,-2.491c-1.665,0 -3.003,1.344 -3.003,3.003l0,11.994c0,1.665 1.344,3.003 3.003,3.003l11.994,0c1.665,0 3.003,-1.344 3.003,-3.003l0,-7.746l0,4.249l-3,-2.488l0,4.492c0,0.826 -0.671,1.496 -1.496,1.496l-9.008,0c-0.826,0 -1.496,-0.671 -1.496,-1.496l0,-9.008c0,-0.826 0.671,-1.496 1.496,-1.496l4.504,0l-2.5,-3l4.249,0l-7.746,0Z",
          })
        );
      }
      function we(e, t) {
        return d.d.IN_GAMEPADUI
          ? i.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 36 36",
                  fill: "none",
                },
                e
              ),
              i.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M2 4V16V20L7 16H24V4H2ZM12 20V32H29L34 36V32V20H12Z",
                fill: "currentColor",
              })
            )
          : i.createElement(
              "svg",
              {
                version: "1.1",
                id: "Layer_2",
                xmlns: "http://www.w3.org/2000/svg",
                className: e.className,
                x: "0px",
                y: "0px",
                width: "256px",
                height: "256px",
                viewBox: "0 0 409.6 409.6",
              },
              i.createElement("path", {
                d: "M109.9,96.2H302c16.3,0,29.6,13,29.6,29v101.4c0,16-13.2,29-29.6,29h-90.1l-57.6,57.9L138,255.6h-28.1\r\n\t\t\t\tc-16.3,0-29.6-13-29.6-29V125.2C80.4,109.2,93.6,96.2,109.9,96.2z",
              })
            );
      }
      function ye(e) {
        return i.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_2",
            xmlns: "http://www.w3.org/2000/svg",
            className: e.className,
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 409.6 409.6",
          },
          i.createElement("path", {
            d: "M225.1,328.8c-12.6,0-15.3-1.9-29.5-5.3c-18.7-4.8-35.3-6.3-51-5.3c-3.5,0.5-7.1,0.5-10.6,1l-7.6,1\r\n\t\t\t\tc-2.5,0.5-4.5-1-5.6-3.4c-12.6-36.2-16.6-74.7-11.6-117.6c0-2.4,2-3.9,4.5-4.3l4.5-0.5c3.5-0.5,6.6-1,10.1-1c5-0.5,9.6-2.9,13.1-7.2\r\n\t\t\t\tl0.5-1c0.5-0.5,1-1.4,1.5-2.4c9.1-14.5,22.2-25.6,36.8-37.6c7.6-6.3,14.1-12.5,20.2-18.3c6.6-7.2,10.1-16.4,10.6-27\r\n\t\t\t\tc0-9.6,5.6-15.4,16.1-16.4c13.6-1,22.7,3.9,27.8,15.9c7.6,16.4-4.4,33.3-13.9,50.6c-2,3.9-4.5,7.2-7.1,10.6c-1,1.4-2,2.9-3,4.3\r\n\t\t\t\tl-3.5,4.8c-1.5,1.9-3,3.9-4.5,6.3c4,0,7.6,0,11.6,0c11.1-0.5,34.6-0.5,46.7,1.4c7.6,1,13.6,4.8,17.7,10.1c3.5,4.8,4.5,11.1,3,17.8\r\n\t\t\t\tc-0.5,2.9-2,5.8-5,9.2c-1.5,1.9-14.4,3.9-16.5,5.3h10.9c2.5,1.9,5,3.9,7.1,6.3c4,4.3,5.6,9.2,5,14.9c-0.5,5.3-3,10.6-7.6,14\r\n\t\t\t\tc-2.5,1.9-16,3.9-18.5,5.3c5,5.3,18,12.1,16.5,19.3c-2,9.6-7.6,15.4-18.2,17.8c2.5,3.9,3,8.7,1.5,13.5c-0.5,2.4-1.5,4.3-2.5,6.3\r\n\t\t\t\tc-2.5,5.3-6.6,8.2-13.1,9.6C253.2,327.8,233.7,328.8,225.1,328.8z",
          })
        );
      }
      function Se(e) {
        return i.createElement(
          "svg",
          {
            className: e.className,
            height: "100px",
            width: "100px",
            version: "1.1",
            x: "0px",
            y: "0px",
            viewBox: "0 0 100 100",
            enableBackground: "new 0 0 100 100",
          },
          i.createElement(
            "g",
            { display: "none" },
            i.createElement("rect", {
              x: "-660.877",
              y: "-37.172",
              display: "inline",
              width: "1370.931",
              height: "1263.231",
            })
          ),
          i.createElement(
            "g",
            null,
            i.createElement("path", {
              d: "M34.367,31.803c0.49,0.443,1.228,0.404,1.698-0.06c3.869-3.823,8.894-6.045,14.425-6.337   c11.044-0.495,20.558,7.281,22.518,17.866c0.133,0.717-0.429,1.379-1.157,1.413l-4.83,0.223c-1.092,0.05-1.578,1.397-0.769,2.133   l13.999,12.733c0.502,0.456,1.279,0.419,1.734-0.084L94.68,45.676c0.733-0.809,0.123-2.1-0.967-2.048l-6.486,0.309   c-1.82-18.94-18.238-33.327-37.455-32.439c-9.122,0.484-17.619,4.28-23.984,10.844c-0.48,0.495-0.439,1.299,0.072,1.762   L34.367,31.803z",
            }),
            i.createElement("path", {
              d: "M6.229,53.869h6.11c0.622,0,1.132,0.468,1.207,1.085c1.029,8.437,4.787,16.288,10.854,22.357   c7.249,7.217,16.85,11.23,27.047,11.23c9.778,0.07,19.009-3.568,26.131-10.258c0.502-0.471,0.502-1.276,0.015-1.763l-9.587-9.587   c-4.379,4.389-10.288,6.838-16.559,6.838c-6.224,0-12.068-2.506-16.541-6.934c-3.179-3.179-5.282-7.178-6.168-11.481   c-0.154-0.746,0.447-1.436,1.209-1.436h5.183c1.092,0,1.639-1.319,0.869-2.092L21.572,37.352c-0.478-0.48-1.255-0.481-1.734-0.003   L5.363,51.773C4.589,52.545,5.135,53.869,6.229,53.869z",
            })
          )
        );
      }
      function Be(e) {
        const { className: t } = e;
        Object(n.c)(e, ["className"]);
        return i.createElement(
          "svg",
          {
            className: Object(o.a)(t, "SVGIcon_Button"),
            width: "59px",
            height: "59px",
            viewBox: "0 0 59 59",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          i.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M57.9907 30.2382L57.9932 30.1318L23.3635 58.4652L23.159 58.2152L23.0596 58.295C9.86456 55.3567 0 43.5804 0 29.5C0 13.2076 13.2076 0 29.5 0C45.7683 0 58.9609 13.1684 59 29.4275L57.9907 30.2382ZM57.9886 28.6833C52.956 26.4605 41.9077 24.7254 31.9404 33.2687C22.1502 41.6604 21.6264 52.0873 22.7598 57.1984C10.2728 54.1704 1 42.9181 1 29.5C1 13.7599 13.7599 1 29.5 1C44.967 1 57.5563 13.3209 57.9886 28.6833ZM57.2445 29.4523L23.7148 56.8857C22.676 52.0493 23.1845 42.0909 32.5912 34.028C41.9759 25.984 52.3311 27.4183 57.2445 29.4523Z",
            fill: "",
          })
        );
      }
      function ve(e) {
        const { className: t } = e,
          r = Object(n.c)(e, ["className"]);
        return i.createElement(
          "svg",
          Object.assign(
            {
              className: Object(o.a)(t, "SVGIcon_Button"),
              width: "60px",
              height: "52px",
              viewBox: "0 0 60 52",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            r
          ),
          i.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M0.5 5.5C0.5 2.46243 2.96243 0 6 0H54C57.0376 0 59.5 2.46243 59.5 5.5V35C59.5 38.0376 57.0376 40.5 54 40.5H52.5C51.6716 40.5 51 41.1716 51 42V50.0858C51 51.4221 49.3843 52.0914 48.4393 51.1464L37.7929 40.5H6C2.96243 40.5 0.5 38.0376 0.5 35V5.5ZM6 1C3.51472 1 1.5 3.01472 1.5 5.5V35C1.5 37.4853 3.51472 39.5 6 39.5H38H38.2071L38.3536 39.6464L49.1464 50.4393C49.4614 50.7543 50 50.5312 50 50.0858V42C50 40.6193 51.1193 39.5 52.5 39.5H54C56.4853 39.5 58.5 37.4853 58.5 35V5.5C58.5 3.01472 56.4853 1 54 1H6ZM30 32C36.6274 32 42 26.6274 42 20C42 13.3726 36.6274 8 30 8C23.3726 8 18 13.3726 18 20C18 26.6274 23.3726 32 30 32ZM30 33C37.1797 33 43 27.1797 43 20C43 12.8203 37.1797 7 30 7C22.8203 7 17 12.8203 17 20C17 27.1797 22.8203 33 30 33ZM26.5 18C27.3284 18 28 17.3284 28 16.5C28 15.6716 27.3284 15 26.5 15C25.6716 15 25 15.6716 25 16.5C25 17.3284 25.6716 18 26.5 18ZM35 16.5C35 17.3284 34.3284 18 33.5 18C32.6716 18 32 17.3284 32 16.5C32 15.6716 32.6716 15 33.5 15C34.3284 15 35 15.6716 35 16.5ZM24.5 22C24.5 24.4853 26.5147 26.5 29 26.5H31C33.4853 26.5 35.5 24.4853 35.5 22H34.5C34.5 23.933 32.933 25.5 31 25.5H29C27.067 25.5 25.5 23.933 25.5 22H24.5Z",
            fill: "",
          })
        );
      }
      function Ce(e) {
        const { className: t } = e,
          r = Object(n.c)(e, ["className"]);
        return i.createElement(
          "svg",
          Object.assign(
            {
              className: Object(o.a)(t, "SVGIcon_Button"),
              width: "60px",
              height: "52px",
              viewBox: "0 0 60 52",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            r
          ),
          i.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M6 0C2.96243 0 0.5 2.46243 0.5 5.5V35C0.5 38.0376 2.96243 40.5 6 40.5H37.7929L48.4393 51.1464C49.3843 52.0914 51 51.4221 51 50.0858V42C51 41.1716 51.6716 40.5 52.5 40.5H54C57.0376 40.5 59.5 38.0376 59.5 35V5.5C59.5 2.46243 57.0376 0 54 0H6ZM1.5 5.5C1.5 3.01472 3.51472 1 6 1H54C56.4853 1 58.5 3.01472 58.5 5.5V35C58.5 37.4853 56.4853 39.5 54 39.5H52.5C51.1193 39.5 50 40.6193 50 42V50.0858C50 50.5312 49.4614 50.7543 49.1464 50.4393L38.3536 39.6464L38.2071 39.5H38H6C3.51472 39.5 1.5 37.4853 1.5 35V5.5ZM16 8.88154L17.8736 13.9448C18.0761 14.4922 18.5078 14.9239 19.0552 15.1264L24.1185 17L19.0552 18.8736C18.5078 19.0761 18.0761 19.5078 17.8736 20.0552L16 25.1185L14.1264 20.0552C13.9239 19.5078 13.4922 19.0761 12.9448 18.8736L7.88154 17L12.9448 15.1264C13.4922 14.9239 13.9239 14.4922 14.1264 13.9448L16 8.88154ZM15.0621 8.53451C15.3843 7.66389 16.6157 7.66389 16.9379 8.5345L18.8114 13.5978C18.9127 13.8715 19.1285 14.0873 19.4022 14.1886L24.4655 16.0621C25.3361 16.3843 25.3361 17.6157 24.4655 17.9379L19.4022 19.8114C19.1285 19.9127 18.9127 20.1285 18.8114 20.4022L16.9379 25.4655C16.6157 26.3361 15.3843 26.3361 15.0621 25.4655L13.1886 20.4022C13.0873 20.1285 12.8715 19.9127 12.5978 19.8114L7.53451 17.9379C6.66389 17.6157 6.66389 16.3843 7.5345 16.0621L12.5978 14.1886C12.8715 14.0873 13.0873 13.8715 13.1886 13.5978L15.0621 8.53451ZM32.8736 23.9448L31 18.8815L29.1264 23.9448C28.9239 24.4922 28.4922 24.9239 27.9448 25.1264L22.8815 27L27.9448 28.8736C28.4922 29.0761 28.9239 29.5078 29.1264 30.0552L31 35.1185L32.8736 30.0552C33.0761 29.5078 33.5078 29.0761 34.0552 28.8736L39.1185 27L34.0552 25.1264C33.5078 24.9239 33.0761 24.4922 32.8736 23.9448ZM31.9379 18.5345C31.6157 17.6639 30.3843 17.6639 30.0621 18.5345L28.1886 23.5978C28.0873 23.8715 27.8715 24.0873 27.5978 24.1886L22.5345 26.0621C21.6639 26.3843 21.6639 27.6157 22.5345 27.9379L27.5978 29.8114C27.8715 29.9127 28.0873 30.1285 28.1886 30.4022L30.0621 35.4655C30.3843 36.3361 31.6157 36.3361 31.9379 35.4655L33.8114 30.4022C33.9127 30.1285 34.1285 29.9127 34.4022 29.8114L39.4655 27.9379C40.3361 27.6157 40.3361 26.3843 39.4655 26.0621L34.4022 24.1886C34.1285 24.0873 33.9127 23.8715 33.8114 23.5978L31.9379 18.5345ZM43 4.88154L44.8736 9.9448C45.0761 10.4922 45.5078 10.9239 46.0552 11.1264L51.1185 13L46.0552 14.8736C45.5078 15.0761 45.0761 15.5078 44.8736 16.0552L43 21.1185L41.1264 16.0552C40.9239 15.5078 40.4922 15.0761 39.9448 14.8736L34.8815 13L39.9448 11.1264C40.4922 10.9239 40.9239 10.4922 41.1264 9.9448L43 4.88154ZM42.0621 4.53451C42.3843 3.66389 43.6157 3.66389 43.9379 4.5345L45.8114 9.59776C45.9127 9.87148 46.1285 10.0873 46.4022 10.1886L51.4655 12.0621C52.3361 12.3843 52.3361 13.6157 51.4655 13.9379L46.4022 15.8114C46.1285 15.9127 45.9127 16.1285 45.8114 16.4022L43.9379 21.4655C43.6157 22.3361 42.3843 22.3361 42.0621 21.4655L40.1886 16.4022C40.0873 16.1285 39.8715 15.9127 39.5978 15.8114L34.5345 13.9379C33.6639 13.6157 33.6639 12.3843 34.5345 12.0621L39.5978 10.1886C39.8715 10.0873 40.0873 9.87148 40.1886 9.59776L42.0621 4.53451Z",
            fill: "",
          })
        );
      }
      function Me(e) {
        const { className: t } = e,
          r = Object(n.c)(e, ["className"]);
        return i.createElement(
          "svg",
          Object.assign(
            {
              className: Object(o.a)(t, "SVGIcon_Button"),
              width: "78px",
              height: "59px",
              viewBox: "0 0 78 59",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            r
          ),
          i.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M3 2H75C75.5523 2 76 2.44772 76 3V25.6362L68.5063 32.7893L55.6643 18.4365L54.9851 17.6774L54.2386 18.3705L47.6334 24.504L33.3138 11.2072L32.6449 10.5861L31.9655 11.1958L17.0936 24.5423L12.5854 20.7277L11.9914 20.2251L11.3582 20.6773L2 27.3618V3C2 2.44772 2.44772 2 3 2ZM2 44.3885V55.898C2 56.4502 2.44772 56.898 3 56.898H75C75.5523 56.898 76 56.4502 76 55.898V44.4179L70.3673 42.7281C69.6315 42.5074 68.8478 42.5032 68.1097 42.716L62.7717 44.2552C61.5774 44.5995 60.3057 44.5645 59.1323 44.1549L55.3406 42.8316C54.5367 42.5511 53.6643 42.5343 52.8502 42.7838L48.1375 44.2284C46.9576 44.5901 45.6948 44.5791 44.5213 44.197L40.1648 42.7783C39.397 42.5283 38.5714 42.5165 37.7968 42.7446L32.6112 44.271C31.4845 44.6027 30.2852 44.5963 29.162 44.2528L24.2385 42.7469C23.483 42.5158 22.6759 42.5137 21.9192 42.7407L16.9269 44.2384C15.7429 44.5936 14.4782 44.5744 13.3055 44.1835L9.22505 42.8234C8.40398 42.5497 7.5163 42.5497 6.69523 42.8234L2 44.3885ZM2 42.2803L6.06277 40.926C7.29438 40.5155 8.62591 40.5155 9.85751 40.926L13.9379 42.2862C14.7197 42.5468 15.5629 42.5595 16.3522 42.3227L21.3445 40.8251C22.4796 40.4845 23.6902 40.4878 24.8235 40.8344L29.747 42.3403C30.4957 42.5693 31.2953 42.5735 32.0464 42.3524L37.232 40.826C38.394 40.4839 39.6323 40.5016 40.7841 40.8766L45.1406 42.2953C45.9229 42.55 46.7647 42.5573 47.5514 42.3162L52.2641 40.8716C53.4852 40.4974 54.7938 40.5225 55.9996 40.9433L59.7913 42.2667C60.5736 42.5397 61.4214 42.563 62.2176 42.3335L67.5556 40.7943C68.6627 40.4751 69.8383 40.4814 70.942 40.8125L76 42.3299V28.4011L69.1402 34.9491L68.3931 35.6622L67.7044 34.8925L54.8531 20.5292L44.4567 30.183L43.0958 28.7174L46.1637 25.8686L32.6219 13.294L18.6349 25.8464L22.9324 29.4828L21.6405 31.0095L16.467 26.632L11.8875 22.7571L2 29.8196V42.2803ZM0 3C0 1.34315 1.34315 0 3 0H75C76.6569 0 78 1.34315 78 3V55.898C78 57.5548 76.6569 58.898 75 58.898H3C1.34315 58.898 0 57.5548 0 55.898V3ZM17.6094 13.1832C18.414 11.5742 18.9328 10.7593 19.4551 10.3118C19.8967 9.93322 20.4163 9.75659 21.4905 9.75659C22.0428 9.75659 22.4905 9.30888 22.4905 8.75659C22.4905 8.20431 22.0428 7.75659 21.4905 7.75659C20.177 7.75659 19.1047 7.97793 18.1535 8.79321C17.4662 9.38227 16.9009 10.2384 16.3059 11.3474C13.8336 10.1236 11.0561 10.2073 9.15781 11.0209C8.65018 11.2384 8.41503 11.8263 8.63259 12.334C8.85014 12.8416 9.43802 13.0767 9.94565 12.8592C11.5101 12.1887 14.0696 12.1744 16.1604 13.568L17.1028 14.1963L17.6094 13.1832ZM62.8781 15.5106C64.8505 15.5106 66.4495 13.9116 66.4495 11.9392C66.4495 9.96674 64.8505 8.36776 62.8781 8.36776C60.9056 8.36776 59.3066 9.96674 59.3066 11.9392C59.3066 13.9116 60.9056 15.5106 62.8781 15.5106ZM62.8781 17.5106C65.9551 17.5106 68.4495 15.0162 68.4495 11.9392C68.4495 8.86217 65.9551 6.36776 62.8781 6.36776C59.8011 6.36776 57.3066 8.86217 57.3066 11.9392C57.3066 15.0162 59.8011 17.5106 62.8781 17.5106Z",
            fill: "",
          })
        );
      }
      function Ee(e) {
        const { className: t } = e;
        Object(n.c)(e, ["className"]);
        return i.createElement(
          "svg",
          {
            className: Object(o.a)(t, "SVGIcon_Button"),
            width: "46px",
            height: "62px",
            viewBox: "0 0 46 62",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          i.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M24.425 1.87316L27.6636 5.16235C28.5084 6.02034 29.6947 6.45213 30.8934 6.33789L35.4885 5.89995C36.6002 5.794 37.5833 6.61889 37.672 7.73207L38.0386 12.3335C38.1343 13.5337 38.7655 14.6271 39.7571 15.31L43.5587 17.9282C44.4784 18.5616 44.7013 19.8255 44.0537 20.7352L41.3768 24.4958C40.6786 25.4767 40.4594 26.72 40.78 27.8806L42.0092 32.3299C42.3066 33.4063 41.6649 34.5176 40.5841 34.7983L36.1163 35.9584C34.9508 36.261 33.9837 37.0725 33.4833 38.1677L31.565 42.3662C31.101 43.3819 29.895 43.8208 28.8867 43.341L24.7184 41.3579C23.6311 40.8405 22.3687 40.8405 21.2814 41.3579L17.1131 43.341C16.1047 43.8208 14.8988 43.3819 14.4347 42.3662L12.5164 38.1677C12.0161 37.0725 11.0489 36.261 9.88351 35.9584L5.41569 34.7983C4.33483 34.5176 3.69318 33.4063 3.99056 32.3299L5.21979 27.8806C5.54043 26.72 5.32121 25.4767 4.62295 24.4958L1.9461 20.7352C1.29852 19.8255 1.52136 18.5617 2.44105 17.9282L6.24264 15.31C7.23429 14.6271 7.86553 13.5337 7.96117 12.3335L8.32782 7.73206C8.41652 6.61889 9.39959 5.794 10.5112 5.89995L15.1064 6.33789C16.305 6.45213 17.4914 6.02034 18.3362 5.16235L21.5748 1.87316C22.3582 1.07744 23.6415 1.07744 24.425 1.87316ZM20.8622 1.17156C22.0374 -0.0220298 23.9624 -0.0220289 25.1376 1.17156L28.3762 4.46075C29.0098 5.10424 29.8995 5.42808 30.7985 5.34241L35.3937 4.90446C37.0612 4.74554 38.5358 5.98288 38.6688 7.65264L39.0355 12.254C39.1072 13.1542 39.5806 13.9742 40.3243 14.4865L44.1259 17.1047C45.5055 18.0548 45.8397 19.9505 44.8684 21.3151L42.1915 25.0757C41.6678 25.8114 41.5034 26.7438 41.7439 27.6143L42.9731 32.0636C43.4192 33.6782 42.4567 35.3452 40.8354 35.7662L36.3676 36.9263C36.0989 36.9961 35.8442 37.1019 35.6095 37.2389L42.0805 56.2205C42.5334 57.5492 41.0763 58.7164 39.8785 57.9845L34.3458 54.6034C34.0661 54.4324 33.7003 54.5724 33.6061 54.8863L31.865 60.6901C31.4472 62.0828 29.4909 62.126 29.012 60.7531L22.9999 43.5185L16.9878 60.7531C16.5089 62.126 14.5526 62.0828 14.1348 60.6901L12.3936 54.8863C12.2994 54.5724 11.9337 54.4324 11.654 54.6034L6.12127 57.9845C4.9235 58.7164 3.46639 57.5492 3.91933 56.2205L10.3903 37.2389C10.1556 37.1019 9.90091 36.9961 9.63218 36.9263L5.16437 35.7662C3.54308 35.3452 2.5806 33.6782 3.02667 32.0636L4.2559 27.6143C4.49638 26.7439 4.33196 25.8114 3.80827 25.0757L1.13142 21.3151C0.160044 19.9505 0.494311 18.0548 1.87384 17.1047L5.67543 14.4865C6.41917 13.9742 6.8926 13.1542 6.96433 12.254L7.33098 7.65263C7.46402 5.98288 8.93863 4.74554 10.6061 4.90446L15.2013 5.34241C16.1003 5.42808 16.99 5.10424 17.6236 4.46075L20.8622 1.17156ZM34.3929 38.5833C34.4993 38.3504 34.6338 38.1347 34.7919 37.9398L41.1339 56.5432C41.2849 56.9861 40.7992 57.3752 40.4 57.1312L34.8672 53.7501C34.0281 53.2373 32.9309 53.6571 32.6483 54.599L30.9072 60.4027C30.7679 60.867 30.1158 60.8814 29.9562 60.4238L23.5356 42.0181C23.7936 42.0649 24.047 42.1458 24.2888 42.2609L28.457 44.244C29.9696 44.9637 31.7785 44.3053 32.4746 42.7818L34.3929 38.5833ZM22.9999 42.0004L22.9156 41.9711C22.9718 41.9695 23.028 41.9695 23.0841 41.9711L22.9999 42.0004ZM11.2079 37.9398L4.86584 56.5432C4.71486 56.9861 5.20057 57.3752 5.59982 57.1312L11.1326 53.7501C11.9716 53.2373 13.0689 53.6571 13.3515 54.599L15.0926 60.4027C15.2319 60.867 15.884 60.8814 16.0436 60.4238L22.4642 42.0181C22.2061 42.0649 21.9528 42.1458 21.711 42.2609L17.5428 44.244C16.0302 44.9637 14.2213 44.3053 13.5252 42.7818L11.6069 38.5833C11.5005 38.3504 11.366 38.1347 11.2079 37.9398ZM33.9999 23.0004C33.9999 29.0756 29.075 34.0005 22.9999 34.0005C16.9248 34.0005 11.9999 29.0756 11.9999 23.0004C11.9999 16.9253 16.9248 12.0004 22.9999 12.0004C29.075 12.0004 33.9999 16.9253 33.9999 23.0004ZM34.9999 23.0004C34.9999 29.6279 29.6273 35.0005 22.9999 35.0005C16.3725 35.0005 10.9999 29.6279 10.9999 23.0004C10.9999 16.373 16.3725 11.0004 22.9999 11.0004C29.6273 11.0004 34.9999 16.373 34.9999 23.0004Z",
          })
        );
      }
      function ke(e) {
        return i.createElement(
          "svg",
          Object.assign(
            {
              width: "29",
              height: "26",
              viewBox: "0 0 29 26",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e
          ),
          i.createElement("path", {
            d: "M18.6753 0C13.7187 0 9.58825 3.59513 8.90967 8.25443C9.11619 8.22567 9.32272 8.19691 9.55875 8.19691C11.1224 8.19691 12.5681 9.00221 13.3647 10.2965L18.7934 19.1836C24.163 19.0974 28.5 14.8407 28.5 9.57744C28.5295 4.31416 24.104 0 18.6753 0ZM22.7468 10.6704H18.6753C18.0558 10.6704 17.5837 10.1814 17.5837 9.6062V4.63053C17.5837 4.02655 18.0853 3.56637 18.6753 3.56637C19.2949 3.56637 19.767 4.05531 19.767 4.63053V8.54204H22.7468C23.3664 8.54204 23.8385 9.03098 23.8385 9.6062C23.868 10.2102 23.3664 10.6704 22.7468 10.6704Z",
            fill: "#E1E7EA",
          }),
          i.createElement("path", {
            d: "M11.3288 11.5332C10.5322 10.2389 8.58496 10.2389 7.78836 11.5332L0.796018 22.9801C-0.0300818 24.3031 0.973039 26 2.56623 26H16.5804C18.1736 26 19.1472 24.3031 18.3506 22.9801L11.3288 11.5332ZM9.47007 14.1217C10.1191 14.0642 10.6797 14.5243 10.7092 15.1571C10.7092 15.2146 10.7092 15.3009 10.7092 15.3584L10.3257 19.6438C10.2962 20.0465 9.91262 20.3628 9.49957 20.3341C9.11602 20.3053 8.82099 20.0177 8.79148 19.6438L8.40794 15.3584C8.34893 14.7257 8.82099 14.1792 9.47007 14.1217ZM9.55858 23.6704C8.87999 23.6704 8.31943 23.1239 8.31943 22.4624C8.31943 21.8009 8.87999 21.2544 9.55858 21.2544C10.2372 21.2544 10.7977 21.8009 10.7977 22.4624C10.7977 23.1239 10.2372 23.6704 9.55858 23.6704Z",
            fill: "#E1E7EA",
          })
        );
      }
      function Te(e) {
        const { className: t } = e,
          r = Object(n.c)(e, ["className"]);
        return i.createElement(
          "svg",
          Object.assign(
            {
              className: Object(o.a)(t, "SVGIcon_Button"),
              width: "1em",
              height: "1em",
              viewBox: "0 0 148 148",
              fill: "none",
            },
            r
          ),
          i.createElement("path", {
            d: "M151.309 62.585L87.852.305 25.31 63.348l12.204 12.365 50.338-49.458 63.457 61.059V62.585z",
            fill: "#189AD3",
          }),
          i.createElement("path", {
            d: "M151.309 62.585L87.852.305 25.31 63.348l12.204 12.365 50.338-49.458 63.457 61.059V62.585z",
            fill: "url(#prefix__paint0_linear)",
          }),
          i.createElement("path", {
            d: "M151.309 62.585L87.852.305 25.31 63.348l12.204 12.365 50.338-49.458 63.457 61.059V62.585z",
            fill: "url(#prefix__paint1_linear)",
          }),
          i.createElement("path", {
            d: "M88.31 0H63.444L.294 63.501l62.236 62.891 13.424-12.823L25.31 63.501 88.31 0z",
            fill: "#B1AEAE",
          }),
          i.createElement("path", {
            d: "M88.31 0H63.444L.294 63.501l62.236 62.891 13.424-12.823L25.31 63.501 88.31 0z",
            fill: "url(#prefix__paint2_linear)",
          }),
          i.createElement("path", {
            d: "M88.31 0H63.444L.294 63.501l62.236 62.891 13.424-12.823L25.31 63.501 88.31 0z",
            fill: "url(#prefix__paint3_linear)",
          }),
          i.createElement("path", {
            d: "M87.547 26.255L75.954 38.162l50.033 49.152-63.457 63.501h25.017l63.914-63.501-63.914-61.059z",
            fill: "#B1AEAE",
          }),
          i.createElement("path", {
            d: "M87.547 26.255L75.954 38.162l50.033 49.152-63.457 63.501h25.017l63.914-63.501-63.914-61.059z",
            fill: "url(#prefix__paint4_linear)",
          }),
          i.createElement("path", {
            d: "M87.547 26.255L75.954 38.162l50.033 49.152-63.457 63.501h25.017l63.914-63.501-63.914-61.059z",
            fill: "url(#prefix__paint5_linear)",
          }),
          i.createElement("path", {
            d: "M.904 88.23V63.5l61.931 62.585 51.406-50.22 11.746 11.448-63.152 63.196L.904 88.23z",
            fill: "#1351CB",
          }),
          i.createElement("path", {
            d: "M.904 88.23V63.5l61.931 62.585 51.406-50.22 11.746 11.448-63.152 63.196L.904 88.23z",
            fill: "url(#prefix__paint6_linear)",
          }),
          i.createElement("path", {
            d: "M.904 88.23V63.5l61.931 62.585 51.406-50.22 11.746 11.448-63.152 63.196L.904 88.23z",
            fill: "url(#prefix__paint7_linear)",
          }),
          i.createElement(
            "defs",
            null,
            i.createElement(
              "linearGradient",
              {
                id: "prefix__paint0_linear",
                x1: 88.309,
                y1: 0.305,
                x2: 39.697,
                y2: 70.698,
                gradientUnits: "userSpaceOnUse",
              },
              i.createElement("stop", { offset: 0.458, stopColor: "#2682D7" }),
              i.createElement("stop", { offset: 0.88, stopColor: "#13538E" }),
              i.createElement("stop", { offset: 1, stopColor: "#0F2C64" })
            ),
            i.createElement(
              "linearGradient",
              {
                id: "prefix__paint1_linear",
                x1: 151.461,
                y1: 63.725,
                x2: 113.241,
                y2: 31.243,
                gradientUnits: "userSpaceOnUse",
              },
              i.createElement("stop", { offset: 0.005, stopColor: "#114B82" }),
              i.createElement("stop", { offset: 0.672, stopColor: "#1974C7" }),
              i.createElement("stop", {
                offset: 1,
                stopColor: "#166588",
                stopOpacity: 0,
              })
            ),
            i.createElement(
              "linearGradient",
              {
                id: "prefix__paint2_linear",
                x1: 72.598,
                y1: 0,
                x2: 151.522,
                y2: 89.161,
                gradientUnits: "userSpaceOnUse",
              },
              i.createElement("stop", { stopColor: "#9D99A9" }),
              i.createElement("stop", { offset: 0.484, stopColor: "#DFDEE1" }),
              i.createElement("stop", { offset: 0.734, stopColor: "#6D6B74" }),
              i.createElement("stop", { offset: 1, stopColor: "#22202D" })
            ),
            i.createElement(
              "linearGradient",
              {
                id: "prefix__paint3_linear",
                x1: 65.886,
                y1: 141.046,
                x2: 80.542,
                y2: 158.743,
                gradientUnits: "userSpaceOnUse",
              },
              i.createElement("stop", {
                offset: 0.531,
                stopColor: "#7B7474",
                stopOpacity: 0,
              }),
              i.createElement("stop", { offset: 1, stopColor: "#535661" })
            ),
            i.createElement(
              "linearGradient",
              {
                id: "prefix__paint4_linear",
                x1: 72.598,
                y1: 0,
                x2: 151.522,
                y2: 89.161,
                gradientUnits: "userSpaceOnUse",
              },
              i.createElement("stop", { stopColor: "#9D99A9" }),
              i.createElement("stop", { offset: 0.484, stopColor: "#DFDEE1" }),
              i.createElement("stop", { offset: 0.734, stopColor: "#6D6B74" }),
              i.createElement("stop", { offset: 1, stopColor: "#22202D" })
            ),
            i.createElement(
              "linearGradient",
              {
                id: "prefix__paint5_linear",
                x1: 65.886,
                y1: 141.046,
                x2: 80.542,
                y2: 158.743,
                gradientUnits: "userSpaceOnUse",
              },
              i.createElement("stop", {
                offset: 0.531,
                stopColor: "#7B7474",
                stopOpacity: 0,
              }),
              i.createElement("stop", { offset: 1, stopColor: "#535661" })
            ),
            i.createElement(
              "linearGradient",
              {
                id: "prefix__paint6_linear",
                x1: 0.904,
                y1: 81.208,
                x2: 80.116,
                y2: 82.127,
                gradientUnits: "userSpaceOnUse",
              },
              i.createElement("stop", { stopColor: "#234BB3" }),
              i.createElement("stop", { offset: 0.068, stopColor: "#032939" }),
              i.createElement("stop", {
                offset: 0.547,
                stopColor: "#45556D",
                stopOpacity: 0.737,
              }),
              i.createElement("stop", {
                offset: 1,
                stopColor: "#fff",
                stopOpacity: 0,
              })
            ),
            i.createElement(
              "linearGradient",
              {
                id: "prefix__paint7_linear",
                x1: 126.031,
                y1: 88.506,
                x2: 75.005,
                y2: 136.736,
                gradientUnits: "userSpaceOnUse",
              },
              i.createElement("stop", { offset: 0.089, stopColor: "#0D66A6" }),
              i.createElement("stop", { offset: 0.402, stopColor: "#6699D5" }),
              i.createElement("stop", {
                offset: 1,
                stopColor: "#fff",
                stopOpacity: 0,
              })
            )
          )
        );
      }
      function Le(e) {
        const { className: t, color: r } = e;
        return i.createElement(
          "svg",
          {
            className: Object(o.a)(t),
            width: "13",
            height: "21",
            viewBox: "0 0 13 21",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          i.createElement("path", {
            fill: r || "#ffc83d",
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M5.80814 0.197492L5.19324 0.62086C4.96265 0.774812 4.69363 0.851788 4.38619 0.8133L3.92501 0.736324C3.42541 0.697836 2.96424 0.928764 2.73365 1.39062L2.4262 2.04492C2.27248 2.31433 2.08032 2.50677 1.8113 2.62224L1.38856 2.81468C0.92739 3.00712 0.658372 3.46897 0.696803 3.96932L0.735234 4.70059C0.773665 5.00849 0.696803 5.23942 0.504648 5.47035L0.23563 5.85523C-0.0718184 6.24011 -0.0718184 6.77894 0.197199 7.20231L0.619941 7.81812C0.773665 8.04904 0.812097 8.31846 0.812097 8.62636L0.735234 9.08822C0.696803 9.58856 0.92739 10.0504 1.38856 10.2813L2.04189 10.5893C2.31091 10.7432 2.50306 10.9356 2.61836 11.2051L2.77208 11.6284C3.00267 12.0903 3.42541 12.3597 3.96344 12.3212L4.69363 12.2827C4.96265 12.2442 5.23167 12.3212 5.46226 12.5137L5.84657 12.7831C6.23088 13.091 6.76891 13.091 7.19165 12.8216L7.80655 12.3982C8.03714 12.2442 8.30616 12.2057 8.57517 12.2057L9.03635 12.2827C9.53595 12.3212 10.0356 12.0903 10.2277 11.6284L10.5736 10.9741C10.6889 10.7047 10.881 10.5123 11.1501 10.3968L11.5728 10.2429C12.034 10.0119 12.3414 9.58856 12.303 9.04973L12.2646 8.31846C12.2261 8.04904 12.303 7.77963 12.4951 7.5487L12.7642 7.16382C13.0716 6.77894 13.0716 6.24011 12.8026 5.81674L12.3798 5.20093C12.2261 4.97 12.1493 4.70059 12.1877 4.43117L12.2646 3.96932C12.303 3.46897 12.0724 2.96863 11.6112 2.77619L10.9579 2.4298C10.6889 2.31433 10.4967 2.12189 10.3814 1.85248L10.1893 1.42911C9.99712 0.967252 9.53595 0.659348 9.03635 0.697836L8.30616 0.736324C7.99871 0.774812 7.76812 0.697836 7.53753 0.505396L7.15322 0.23598C6.76891 -0.0719243 6.23088 -0.0719243 5.80814 0.197492ZM6.4999 2.69921C4.38619 2.69921 2.65679 4.39268 2.65679 6.50952C2.65679 8.62636 4.38619 10.3583 6.4999 10.3583C8.6136 10.3583 10.3046 8.62636 10.3046 6.50952C10.3046 4.39268 8.6136 2.69921 6.4999 2.69921Z",
          }),
          i.createElement("path", {
            fill: r || "#ffc83d",
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M3.04084 12.7833V20.096L6.49963 17.6328L9.95843 20.096V12.7833C9.65098 12.8988 9.3051 12.9758 8.95922 12.9373L8.53648 12.8603C8.38276 12.8603 8.26746 12.8988 8.15217 12.9758L7.53727 13.3606C6.88394 13.784 6.07689 13.784 5.42356 13.3222L5.07768 13.0143C4.96239 12.9373 4.8471 12.9373 4.7318 12.9373L4.00161 12.9758C3.65573 12.9758 3.30985 12.9373 3.04084 12.7833Z",
          })
        );
      }
      function Re(e) {
        const { className: t } = e;
        Object(n.c)(e, ["className"]);
        return i.createElement(
          "svg",
          {
            className: t,
            width: "32",
            height: "32",
            viewBox: "0 0 32 32",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          i.createElement("circle", {
            cx: "16",
            cy: "16",
            r: "16",
            fill: "#BDCCDB",
          }),
          i.createElement("circle", {
            cx: "16",
            cy: "16",
            r: "16",
            fill: "url(#paint0_linear)",
          }),
          i.createElement("circle", {
            cx: "16",
            cy: "16",
            r: "14.2745",
            fill: "#98A8B7",
          }),
          i.createElement("circle", {
            cx: "16",
            cy: "16",
            r: "14.2745",
            fill: "url(#paint1_linear)",
          }),
          i.createElement("circle", {
            cx: "16",
            cy: "16",
            r: "14.2745",
            stroke: "#7A92A9",
          }),
          i.createElement("circle", {
            cx: "16",
            cy: "16",
            r: "11.1309",
            fill: "#BDCCDB",
          }),
          i.createElement("circle", {
            cx: "16",
            cy: "16",
            r: "11.1309",
            fill: "url(#paint2_linear)",
          }),
          i.createElement("circle", {
            cx: "16",
            cy: "16",
            r: "10.2107",
            fill: "#5792C8",
          }),
          i.createElement("circle", {
            cx: "16",
            cy: "16",
            r: "10.2107",
            fill: "url(#paint3_linear)",
          }),
          i.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M20.6016 17.9523C22.8425 17.9523 24.6591 16.1357 24.6591 13.8948C24.6591 11.6539 22.8425 9.83727 20.6016 9.83727C18.3607 9.83727 16.5441 11.6539 16.5441 13.8948C16.5441 13.9609 16.5457 14.0266 16.5488 14.0919L14.0477 17.6314C14.0205 17.6306 13.9933 17.6303 13.966 17.6303C13.2606 17.6303 12.6127 17.8767 12.1038 18.2882L6.33398 15.9235C6.33398 17.4638 6.62381 19.1438 6.97803 19.5302C7.16531 19.7345 9.1256 20.4564 11.0502 21.127C11.3013 22.5093 12.5112 23.5574 13.966 23.5574C15.6027 23.5574 16.9296 22.2306 16.9296 20.5939C16.9296 20.5326 16.9277 20.4717 16.924 20.4113L20.2613 17.9382C20.3735 17.9475 20.487 17.9523 20.6016 17.9523ZM12.1995 21.5232C12.5338 22.1572 13.1994 22.5894 13.966 22.5894C15.0681 22.5894 15.9615 21.696 15.9615 20.5939C15.9615 19.4917 15.0681 18.5983 13.966 18.5983C13.7007 18.5983 13.4475 18.65 13.216 18.744L14.1914 19.1438L14.1886 19.1617C14.8832 19.2688 15.4151 19.8692 15.4151 20.5939C15.4151 21.3942 14.7663 22.043 13.966 22.043C13.8901 22.043 13.8157 22.0371 13.743 22.0259L13.7405 22.042L13.6136 21.9998C13.5414 21.9818 13.4713 21.9583 13.4038 21.9299C13.0402 21.8084 12.6309 21.6704 12.1995 21.5232ZM20.6016 16.5998C22.0956 16.5998 23.3066 15.3887 23.3066 13.8948C23.3066 12.4008 22.0956 11.1898 20.6016 11.1898C19.1077 11.1898 17.8966 12.4008 17.8966 13.8948C17.8966 15.3887 19.1077 16.5998 20.6016 16.5998ZM22.4 13.8948C22.4 14.888 21.5948 15.6932 20.6016 15.6932C19.6083 15.6932 18.8032 14.888 18.8032 13.8948C18.8032 12.9015 19.6083 12.0964 20.6016 12.0964C21.5948 12.0964 22.4 12.9015 22.4 13.8948Z",
            fill: "#BDCCDB",
          }),
          i.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M20.6016 17.9523C22.8425 17.9523 24.6591 16.1357 24.6591 13.8948C24.6591 11.6539 22.8425 9.83727 20.6016 9.83727C18.3607 9.83727 16.5441 11.6539 16.5441 13.8948C16.5441 13.9609 16.5457 14.0266 16.5488 14.0919L14.0477 17.6314C14.0205 17.6306 13.9933 17.6303 13.966 17.6303C13.2606 17.6303 12.6127 17.8767 12.1038 18.2882L6.33398 15.9235C6.33398 17.4638 6.62381 19.1438 6.97803 19.5302C7.16531 19.7345 9.1256 20.4564 11.0502 21.127C11.3013 22.5093 12.5112 23.5574 13.966 23.5574C15.6027 23.5574 16.9296 22.2306 16.9296 20.5939C16.9296 20.5326 16.9277 20.4717 16.924 20.4113L20.2613 17.9382C20.3735 17.9475 20.487 17.9523 20.6016 17.9523ZM12.1995 21.5232C12.5338 22.1572 13.1994 22.5894 13.966 22.5894C15.0681 22.5894 15.9615 21.696 15.9615 20.5939C15.9615 19.4917 15.0681 18.5983 13.966 18.5983C13.7007 18.5983 13.4475 18.65 13.216 18.744L14.1914 19.1438L14.1886 19.1617C14.8832 19.2688 15.4151 19.8692 15.4151 20.5939C15.4151 21.3942 14.7663 22.043 13.966 22.043C13.8901 22.043 13.8157 22.0371 13.743 22.0259L13.7405 22.042L13.6136 21.9998C13.5414 21.9818 13.4713 21.9583 13.4038 21.9299C13.0402 21.8084 12.6309 21.6704 12.1995 21.5232ZM20.6016 16.5998C22.0956 16.5998 23.3066 15.3887 23.3066 13.8948C23.3066 12.4008 22.0956 11.1898 20.6016 11.1898C19.1077 11.1898 17.8966 12.4008 17.8966 13.8948C17.8966 15.3887 19.1077 16.5998 20.6016 16.5998ZM22.4 13.8948C22.4 14.888 21.5948 15.6932 20.6016 15.6932C19.6083 15.6932 18.8032 14.888 18.8032 13.8948C18.8032 12.9015 19.6083 12.0964 20.6016 12.0964C21.5948 12.0964 22.4 12.9015 22.4 13.8948Z",
            fill: "url(#paint4_linear)",
          }),
          i.createElement(
            "defs",
            null,
            i.createElement(
              "linearGradient",
              {
                id: "paint0_linear",
                x1: "8.4375",
                y1: "1.75",
                x2: "23.1875",
                y2: "22.9375",
                gradientUnits: "userSpaceOnUse",
              },
              i.createElement("stop", {
                stopColor: "white",
                stopOpacity: "0.54",
              }),
              i.createElement("stop", {
                offset: "1",
                stopColor: "white",
                stopOpacity: "0",
              })
            ),
            i.createElement(
              "linearGradient",
              {
                id: "paint1_linear",
                x1: "9",
                y1: "3.125",
                x2: "22.4375",
                y2: "24.625",
                gradientUnits: "userSpaceOnUse",
              },
              i.createElement("stop", {
                stopColor: "white",
                stopOpacity: "0.25",
              }),
              i.createElement("stop", {
                offset: "1",
                stopColor: "white",
                stopOpacity: "0",
              })
            ),
            i.createElement(
              "linearGradient",
              {
                id: "paint2_linear",
                x1: "10.3125",
                y1: "6.375",
                x2: "19.6875",
                y2: "23.125",
                gradientUnits: "userSpaceOnUse",
              },
              i.createElement("stop", {
                stopColor: "white",
                stopOpacity: "0.65",
              }),
              i.createElement("stop", {
                offset: "1",
                stopColor: "white",
                stopOpacity: "0",
              })
            ),
            i.createElement(
              "linearGradient",
              {
                id: "paint3_linear",
                x1: "10",
                y1: "8",
                x2: "20.5",
                y2: "26.2107",
                gradientUnits: "userSpaceOnUse",
              },
              i.createElement("stop", { stopColor: "#72A5D3" }),
              i.createElement("stop", { offset: "1", stopColor: "#4F7294" })
            ),
            i.createElement(
              "linearGradient",
              {
                id: "paint4_linear",
                x1: "12.1875",
                y1: "13.5625",
                x2: "18.5625",
                y2: "23.5574",
                gradientUnits: "userSpaceOnUse",
              },
              i.createElement("stop", {
                stopColor: "white",
                stopOpacity: "0.44",
              }),
              i.createElement("stop", {
                offset: "1",
                stopColor: "white",
                stopOpacity: "0",
              })
            )
          )
        );
      }
      function xe() {
        return i.createElement(
          "svg",
          {
            height: "100px",
            width: "100px",
            fill: "#000000",
            x: "0px",
            y: "0px",
            viewBox: "0 0 101 101",
            enableBackground: "new 0 0 101 101",
            xmlns: "http://www.w3.org/2000/svg",
            version: "1.1",
          },
          i.createElement(
            "g",
            null,
            i.createElement("path", {
              d: "M16.929,30.115 M84.446,84.262c0-37.271-30.323-67.613-67.587-67.613l0,0l0.069,13.467   c29.777,0.039,53.995,24.256,54.051,54.042L84.446,84.262z",
            }),
            i.createElement("path", {
              d: "M16.843,53.089 M61.472,84.262c0-24.616-20.026-44.639-44.628-44.639l0,0v13.466c17.182,0,31.161,13.984,31.161,31.173   H61.472z",
            }),
            i.createElement("circle", {
              cx: "26.695",
              cy: "74.305",
              r: "9.812",
            })
          )
        );
      }
      function Oe(e) {
        return i.createElement(
          "svg",
          Object.assign({}, e, {
            height: "24px",
            width: "24px",
            viewBox: "0 0 24 24",
            x: "0px",
            y: "0px",
          }),
          i.createElement("path", {
            fill: "white",
            d: "M3.3,0.5v23h17.5v-23H3.3z M10.2,9.6l-3-2.2h3.7L12,3.9l1.2,3.6H17l-3,2.2l1.2,3.6L12,11l-3,2.2L10.2,9.6z M17.3,16.1 M17.4,18H6.6v-1.2h10.7L17.4,18L17.4,18z M17.3,19.9",
          })
        );
      }
      function De() {
        return i.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0px",
            y: "0px",
            viewBox: "0 0 32 32",
            enableBackground: "new 0 0 32 32",
          },
          i.createElement("path", {
            fill: "white",
            d: "M24.68,19.53l6.9-5.69c0.98-0.81,0.47-2.39-0.81-2.46l-8.89-0.54c-0.54-0.03-1.01-0.37-1.21-0.88L17.4,1.61\r\n\t\t\tc-0.47-1.18-2.12-1.18-2.59,0l-3.27,8.32c-0.2,0.51-0.67,0.84-1.21,0.88l-8.92,0.54c-1.28,0.07-1.78,1.65-0.81,2.46l6.9,5.66\r\n\t\t\tc0.4,0.34,0.61,0.91,0.47,1.41l-2.26,8.65c-0.3,1.21,1.01,2.19,2.09,1.52l7.51-4.81c0.47-0.3,1.04-0.3,1.48,0l7.54,4.81\r\n\t\t\tc1.08,0.67,2.39-0.3,2.09-1.52l-2.26-8.62C24.07,20.4,24.24,19.86,24.68,19.53z",
          })
        );
      }
      function Ie() {
        return i.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0px",
            y: "0px",
            viewBox: "0 0 32 32",
            enableBackground: "new 0 0 32 32",
          },
          i.createElement(
            "g",
            null,
            i.createElement("path", {
              fill: "white",
              d: "M28.4,1.49H3.79c-1.99,0-3.6,1.61-3.6,3.6v14.88c0,1.99,1.61,3.6,3.6,3.6h2.37c0,1.61-0.38,3.7-1.51,5.88\r\n\t\t\tc-0.28,0.57-0.19,1.33,0.19,1.8c0.28,0.38,0.76,0.47,1.14,0.47c0.19,0,0.38,0,0.57-0.09c4.07-1.61,7.57-5.59,9.47-8.05h12.4\r\n\t\t\tc1.99,0,3.6-1.61,3.6-3.6V5.1C31.91,3.11,30.3,1.49,28.4,1.49z M8.23,14.97c-1.33,0-2.37-1.04-2.37-2.37s1.04-2.37,2.37-2.37\r\n\t\t\ts2.37,1.04,2.37,2.37S9.56,14.97,8.23,14.97z M15.99,14.97c-1.33,0-2.37-1.04-2.37-2.37s1.04-2.37,2.37-2.37\r\n\t\t\tc1.33,0,2.37,1.04,2.37,2.37S17.32,14.97,15.99,14.97z M23.85,14.97c-1.33,0-2.37-1.04-2.37-2.37s1.04-2.37,2.37-2.37\r\n\t\t\tc1.33,0,2.37,1.04,2.37,2.37S25.18,14.97,23.85,14.97z",
            })
          )
        );
      }
      function Ge() {
        return i.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0px",
            y: "0px",
            viewBox: "0 0 32 32",
            enableBackground: "new 0 0 32 32",
          },
          i.createElement(
            "g",
            null,
            i.createElement("path", {
              fill: "white",
              d: "M23.32,28.28C23,25.55,20.68,23.52,18,23.52h-3.78c-2.73,0-5,2.03-5.33,4.76L8.56,30.8h15.09L23.32,28.28z",
            }),
            i.createElement("path", {
              fill: "white",
              d: "M16.08,22.15c2.82,0,5.1-2.28,5.1-5.1c0-2.82-2.28-5.1-5.1-5.1s-5.1,2.28-5.1,5.1\r\n\t\t\tC10.98,19.86,13.27,22.15,16.08,22.15z",
            }),
            i.createElement(
              "g",
              null,
              i.createElement("path", {
                fill: "white",
                d: "M24.09,10.21c-0.94-1.22-2.18-2.23-3.57-2.9c-1.39-0.68-2.94-1.02-4.48-1.01l-0.02,0L16,6.3\r\n\t\t\t\tc-0.03,0-0.05,0-0.08,0c-1.52,0-3.04,0.35-4.4,1.01c-1.39,0.68-2.62,1.68-3.57,2.9c-0.94,1.22-1.6,2.67-1.91,4.18\r\n\t\t\t\tc-0.3,1.51-0.25,3.1,0.15,4.59c0.14,0.55,0.62,0.92,1.18,0.92c0.01,0,0.02,0,0.04,0h0.27l0.03-0.01c0.32-0.08,0.59-0.29,0.76-0.57\r\n\t\t\t\tl0.07-0.1c0.14-0.21,0.18-0.46,0.11-0.7L8.6,18.38c-0.18-0.62-0.27-1.27-0.29-1.92c0-4.24,3.45-7.68,7.69-7.68h0.04\r\n\t\t\t\tc4.24,0,7.69,3.45,7.69,7.68c-0.02,0.65-0.11,1.3-0.29,1.92l-0.04,0.15c-0.07,0.24-0.03,0.49,0.11,0.7l0.07,0.1\r\n\t\t\t\tc0.17,0.28,0.44,0.49,0.76,0.57l0.03,0.01l0.26,0c0.01,0,0.02,0,0.04,0c0.56,0,1.04-0.37,1.18-0.92c0.4-1.49,0.46-3.08,0.15-4.59\r\n\t\t\t\tC25.69,12.88,25.04,11.44,24.09,10.21z",
              }),
              i.createElement("path", {
                fill: "white",
                d: "M16.02,0.68c-8.83,0-15.99,7.16-16,15.99h0.01c-0.02,2.68,0.74,5.31,2.18,7.57l0,0.01l0.01,0.01\r\n\t\t\t\tc0.37,0.43,1,0.51,1.47,0.19c0.47-0.32,0.62-0.94,0.36-1.44l0,0l0,0c-1.19-1.89-1.81-4.09-1.79-6.32v0v0\r\n\t\t\t\tc0-7.6,6.16-13.76,13.76-13.76c7.6,0,13.76,6.16,13.76,13.76v0v0c0.03,2.24-0.59,4.43-1.79,6.32l0,0l0,0\r\n\t\t\t\tc-0.26,0.5-0.11,1.12,0.36,1.44c0.47,0.32,1.1,0.24,1.47-0.19l0.01-0.01l0-0.01c1.45-2.26,2.2-4.89,2.18-7.57h0.01\r\n\t\t\t\tC32.02,7.84,24.86,0.68,16.02,0.68",
              })
            )
          )
        );
      }
      function je(e) {
        return i.createElement(
          "svg",
          Object.assign({}, e, {
            height: "100px",
            width: "100px",
            fill: "#000000",
            xmlns: "http://www.w3.org/2000/svg",
            version: "1.1",
            viewBox: "0 0 32 32",
            x: "0px",
            y: "0px",
          }),
          i.createElement("path", {
            d: "M26.286 0c-3.142 0-5.714 2.572-5.714 5.714 0 0.512 0.074 1.006 0.202 1.479l-10.573 5.287c-1.049-1.332-2.67-2.194-4.487-2.194-3.142 0-5.714 2.572-5.714 5.714s2.572 5.714 5.714 5.714c1.815 0 3.437-0.862 4.486-2.193l10.574 5.287c-0.127 0.473-0.202 0.966-0.202 1.478 0 3.142 2.572 5.714 5.714 5.714s5.714-2.572 5.714-5.714c0-3.142-2.572-5.714-5.714-5.714-1.817 0-3.438 0.862-4.487 2.194l-10.573-5.287c0.128-0.473 0.202-0.967 0.202-1.479s-0.074-1.005-0.202-1.478l10.574-5.287c1.049 1.331 2.67 2.193 4.486 2.193 3.142 0 5.714-2.572 5.714-5.714s-2.572-5.714-5.714-5.714zM26.286 2.286c1.907 0 3.429 1.522 3.429 3.429s-1.522 3.429-3.429 3.429c-1.907 0-3.429-1.522-3.429-3.429s1.522-3.429 3.429-3.429zM5.714 12.571c1.907 0 3.429 1.522 3.429 3.429s-1.522 3.429-3.429 3.429c-1.907 0-3.429-1.522-3.429-3.429s1.522-3.429 3.429-3.429zM26.286 22.857c1.907 0 3.429 1.522 3.429 3.429s-1.522 3.429-3.429 3.429c-1.907 0-3.429-1.522-3.429-3.429s1.522-3.429 3.429-3.429z",
          })
        );
      }
      function Ae() {
        return i.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0px",
            y: "0px",
            viewBox: "0 0 44 44",
            enableBackground: "new 0 0 44 44",
          },
          i.createElement(
            "g",
            null,
            i.createElement("path", {
              d: "M2 5.90007C2 5.90007 4.92505 2 11.7502 2C18.5753 2 21.5003 5.90007 21.5003 5.90007V33.2005C21.5003 33.2005 18.5753 31.2505 11.7502 31.2505C4.92505 31.2505 2 33.2005 2 33.2005V5.90007Z",
              stroke: "#fefeef",
              fill: "none",
              strokeWidth: "3",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            i.createElement("path", {
              d: "M21.4998 5.90007C21.4998 5.90007 24.4248 2 31.2499 2C38.075 2 41.0001 5.90007 41.0001 5.90007V33.2005C41.0001 33.2005 38.075 31.2505 31.2499 31.2505C24.4248 31.2505 21.4998 33.2005 21.4998 33.2005V5.90007Z",
              stroke: "#fefeef",
              fill: "none",
              strokeWidth: "3",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          )
        );
      }
      function Fe(e) {
        const { className: t } = e,
          r = Object(n.c)(e, ["className"]);
        return i.createElement(
          "svg",
          Object.assign(
            {
              className: Object(o.a)(
                c.a.SteamDeckCompatIcon,
                c.a.SteamDeckCompatVerified,
                t
              ),
            },
            r,
            {
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            }
          ),
          i.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19ZM8.33342 11.9222L14.4945 5.76667L16.4556 7.72779L8.33342 15.8556L3.26675 10.7833L5.22786 8.82223L8.33342 11.9222Z",
            fill: "currentColor",
          })
        );
      }
      function Pe(e) {
        const { className: t } = e,
          r = Object(n.c)(e, ["className"]);
        return i.createElement(
          "svg",
          Object.assign(
            {
              className: Object(o.a)(
                c.a.SteamDeckCompatIcon,
                c.a.SteamDeckCompatPlayable,
                t
              ),
            },
            r,
            {
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            }
          ),
          i.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19ZM8.61079 9.44444V15H11.3886V9.44444H8.61079ZM9.07372 8.05245C9.34781 8.23558 9.67004 8.33333 9.99967 8.33333C10.4417 8.33333 10.8656 8.15774 11.1782 7.84518C11.4907 7.53262 11.6663 7.10869 11.6663 6.66667C11.6663 6.33703 11.5686 6.0148 11.3855 5.74072C11.2023 5.46663 10.942 5.25301 10.6375 5.12687C10.3329 5.00072 9.99783 4.96771 9.67452 5.03202C9.35122 5.09633 9.05425 5.25507 8.82116 5.48815C8.58808 5.72124 8.42934 6.01821 8.36503 6.34152C8.30072 6.66482 8.33373 6.99993 8.45988 7.30447C8.58602 7.60902 8.79964 7.86931 9.07372 8.05245Z",
            fill: "currentColor",
          })
        );
      }
      function Ne(e) {
        const { className: t } = e,
          r = Object(n.c)(e, ["className"]);
        return i.createElement(
          "svg",
          Object.assign(
            {
              className: Object(o.a)(
                c.a.SteamDeckCompatIcon,
                c.a.SteamDeckCompatUnsupported,
                t
              ),
            },
            r,
            {
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            }
          ),
          i.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M14.1931 15.6064C13.0246 16.4816 11.5733 17 10.001 17C6.13498 17 3.00098 13.866 3.00098 10C3.00098 8.42766 3.51938 6.97641 4.39459 5.80783L14.1931 15.6064ZM15.6074 14.1922C16.4826 13.0236 17.001 11.5723 17.001 10C17.001 6.13401 13.867 3 10.001 3C8.42864 3 6.97739 3.5184 5.80881 4.39362L15.6074 14.1922ZM19.001 10C19.001 14.9706 14.9715 19 10.001 19C5.03041 19 1.00098 14.9706 1.00098 10C1.00098 5.02944 5.03041 1 10.001 1C14.9715 1 19.001 5.02944 19.001 10Z",
            fill: "currentColor",
          })
        );
      }
      function Ve(e) {
        const { className: t } = e,
          r = Object(n.c)(e, ["className"]);
        return i.createElement(
          "svg",
          Object.assign(
            {
              className: Object(o.a)(
                c.a.SteamDeckCompatIcon,
                c.a.SteamDeckCompatUnknown,
                t
              ),
            },
            r,
            {
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            }
          ),
          i.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M17.3972 11.2461L18.8767 11.4932C18.9578 11.0075 19 10.5087 19 10C19 9.49131 18.9578 8.99248 18.8767 8.50682L17.3972 8.75386C17.4647 9.15821 17.5 9.57442 17.5 10C17.5 10.4256 17.4647 10.8418 17.3972 11.2461ZM17.0295 7.3783L18.4348 6.8539C18.0814 5.90668 17.5729 5.03501 16.9403 4.26971L15.7842 5.22538C16.3119 5.86387 16.7354 6.59021 17.0295 7.3783ZM14.7746 4.21582L15.7303 3.05967C14.965 2.42708 14.0933 1.91864 13.1461 1.56519L12.6217 2.97054C13.4098 3.26461 14.1361 3.68805 14.7746 4.21582ZM11.2461 2.60281L11.4932 1.1233C11.0075 1.0422 10.5087 1 10 1C9.49131 1 8.99248 1.0422 8.50682 1.1233L8.75386 2.60281C9.15821 2.5353 9.57442 2.5 10 2.5C10.4256 2.5 10.8418 2.5353 11.2461 2.60281ZM7.3783 2.97054L6.8539 1.56519C5.90668 1.91864 5.03501 2.42708 4.26971 3.05967L5.22538 4.21582C5.86387 3.68805 6.59021 3.26461 7.3783 2.97054ZM4.21582 5.22538L3.05967 4.26971C2.42708 5.03501 1.91864 5.90668 1.56519 6.8539L2.97054 7.3783C3.26461 6.59022 3.68805 5.86387 4.21582 5.22538ZM1 10C1 9.49131 1.0422 8.99248 1.1233 8.50682L2.60281 8.75386C2.5353 9.15821 2.5 9.57442 2.5 10C2.5 10.4256 2.5353 10.8418 2.60281 11.2461L1.1233 11.4932C1.0422 11.0075 1 10.5087 1 10ZM2.97054 12.6217L1.56519 13.1461C1.91864 14.0933 2.42708 14.965 3.05967 15.7303L4.21582 14.7746C3.68805 14.1361 3.26461 13.4098 2.97054 12.6217ZM5.22538 15.7842L4.26971 16.9403C5.03501 17.5729 5.90668 18.0814 6.8539 18.4348L7.3783 17.0295C6.59022 16.7354 5.86387 16.3119 5.22538 15.7842ZM8.75386 17.3972L8.50682 18.8767C8.99248 18.9578 9.49131 19 10 19C10.5087 19 11.0075 18.9578 11.4932 18.8767L11.2461 17.3972C10.8418 17.4647 10.4256 17.5 10 17.5C9.57442 17.5 9.15821 17.4647 8.75386 17.3972ZM12.6217 17.0295L13.1461 18.4348C14.0933 18.0814 14.965 17.5729 15.7303 16.9403L14.7746 15.7842C14.1361 16.3119 13.4098 16.7354 12.6217 17.0295ZM15.7842 14.7746L16.9403 15.7303C17.5729 14.965 18.0814 14.0933 18.4348 13.1461L17.0295 12.6217C16.7354 13.4098 16.3119 14.1361 15.7842 14.7746ZM9.2425 14.7702C9.46679 14.92 9.73048 15 10.0002 15C10.362 15 10.7089 14.8563 10.9646 14.6006C11.2204 14.3448 11.3641 13.998 11.3641 13.6363C11.3641 13.3666 11.2841 13.1029 11.1343 12.8787C10.9844 12.6544 10.7714 12.4796 10.5222 12.3764C10.2729 12.2732 9.99872 12.2462 9.73415 12.2988C9.46958 12.3514 9.22656 12.4813 9.03582 12.672C8.84508 12.8628 8.71518 13.1057 8.66255 13.3703C8.60993 13.6348 8.63694 13.909 8.74016 14.1582C8.84339 14.4074 9.01821 14.6203 9.2425 14.7702ZM11.0981 10.3552C11.1722 10.2348 11.2765 10.1358 11.4005 10.068C11.8099 9.82315 12.1479 9.47526 12.3808 9.05903C12.6137 8.64279 12.7333 8.17276 12.7278 7.69584C12.7223 7.21892 12.5918 6.75179 12.3493 6.34105C12.1069 5.93031 11.7609 5.59033 11.346 5.35502C10.9311 5.11972 10.4617 4.99732 9.98466 5.00004C9.50764 5.00277 9.03969 5.13052 8.62748 5.37054C8.21527 5.61057 7.87321 5.95448 7.63545 6.36796C7.39769 6.78144 7.27253 7.25004 7.27246 7.72699H9.23191C9.23191 7.6261 9.25178 7.52621 9.29039 7.43301C9.32901 7.3398 9.3856 7.25511 9.45694 7.18378C9.52829 7.11244 9.61299 7.05586 9.70621 7.01725C9.79942 6.97865 9.89933 6.95878 10.0002 6.95878C10.1659 6.96387 10.3255 7.02207 10.4556 7.12479C10.5856 7.22751 10.6792 7.3693 10.7225 7.52925C10.7658 7.6892 10.7565 7.85883 10.6961 8.01311C10.6356 8.16739 10.5271 8.29816 10.3867 8.3861C9.97322 8.62846 9.63003 8.97429 9.39088 9.38955C9.15173 9.80482 9.02487 10.2752 9.02278 10.7544V11.3635H10.9777V10.7544C10.9825 10.6131 11.024 10.4755 11.0981 10.3552Z",
            fill: "currentColor",
          })
        );
      }
    },
    f5iL: function (e, t, r) {
      "use strict";
      function n(e, t, ...r) {
        console.assert
          ? 0 == r.length
            ? console.assert(!!e, t)
            : console.assert(!!e, t, ...r)
          : e || console.warn(t, ...r);
      }
      r.d(t, "a", function () {
        return n;
      });
    },
    gfbn: function (e, t, r) {
      "use strict";
      r.r(t);
      var n = r("mrSG"),
        i = (r("iNgL"), r("Wr5T"), r("i8i4")),
        a = r.n(i),
        s = r("q1tI"),
        o = r.n(s),
        l = r("vDqi"),
        c = r.n(l),
        d = r("/Q1a"),
        u = r("GXif");
      r("msu0");
      var m = r("1fPh"),
        h = r("6TF7"),
        p = r.n(h),
        f = r("55Ip"),
        _ = r("EC67"),
        g = r("Zdsb");
      class b extends s.Component {
        render() {
          if ("dev" !== d.d.WEB_UNIVERSE) return null;
          let e = document.getElementById(this.props.strConfigID);
          if (!e) return null;
          let t = new Array();
          return (
            e.getAttributeNames().forEach((r) => {
              r.toLocaleLowerCase().startsWith("data-") &&
                (t.push(s.createElement("h1", { key: "header-" + r }, r)),
                t.push(
                  s.createElement(w, {
                    key: "body-" + r,
                    data: JSON.parse(e.getAttribute(r)),
                  })
                ));
            }),
            s.createElement("div", null, t)
          );
        }
      }
      class w extends s.Component {
        render() {
          return s.createElement(
            "div",
            null,
            s.createElement(
              "pre",
              null,
              JSON.stringify(this.props.data, null, 2)
            )
          );
        }
      }
      var y = r("vEiK"),
        S = r("6B8T"),
        B = r("GTHt");
      const v = ({ config: e }) =>
        o.a.createElement(
          o.a.Fragment,
          null,
          Object.keys(e || {}).map((t) => {
            const r = document.querySelectorAll(`[data-featuretarget=${t}`);
            return r.length
              ? Array.from(r).map((r, n) => {
                  const a = (function (e, t) {
                    if (!e) return {};
                    try {
                      const t = JSON.parse(e);
                      if (!t || "object" != typeof t || Array.isArray(t))
                        throw new Error();
                      return t;
                    } catch (e) {
                      return (
                        console.error(
                          `There was a problem parsing props for feature target "${t}"`
                        ),
                        {}
                      );
                    }
                  })(r.getAttribute("data-props"), t);
                  return Object(i.createPortal)(e[t](a), r, `${t}${n}`);
                })
              : null;
          })
        );
      var C = r("2vnA"),
        M = r("e356"),
        E = r("7VqR"),
        k = r("Qfle"),
        T = r.n(k),
        L = r("Ru/g"),
        R = r("3u1o"),
        x = r("hCpY");
      class O {
        constructor() {
          (this.m_elVideo = null),
            (this.m_player = null),
            (this.m_listeners = new R.c()),
            (this.m_bPaused = !1),
            (this.m_bUserInputNeeded = !1),
            (this.m_nPlaybackTime = 0),
            (this.m_nVideoStartTime = 0),
            (this.m_nVideoDuration = 0);
        }
        IsPaused() {
          return this.m_bPaused;
        }
        GetUserInputNeeded() {
          return this.m_bUserInputNeeded;
        }
        GetPlaybackTime() {
          return this.m_nPlaybackTime;
        }
        GetTimelineDuration() {
          return this.m_nVideoDuration;
        }
        Start(e, t) {
          this.Stop(),
            (this.m_elVideo = e),
            this.m_listeners.AddEventListener(
              this.m_elVideo,
              "playing",
              this.OnVideoPlaying
            ),
            this.m_listeners.AddEventListener(
              this.m_elVideo,
              "pause",
              this.OnVideoPause
            ),
            this.m_listeners.AddEventListener(
              this.m_elVideo,
              "timeupdate",
              this.OnVideoTimeUpdate
            ),
            this.m_listeners.AddEventListener(
              this.m_elVideo,
              "ended",
              this.OnVideoEnd
            ),
            this.m_listeners.AddEventListener(
              this.m_elVideo,
              "valve-bufferupdate",
              this.OnVideoTimeUpdate
            ),
            this.m_listeners.AddEventListener(
              this.m_elVideo,
              "valve-downloadfailed",
              this.OnDownloadFailed
            ),
            this.m_listeners.AddEventListener(
              this.m_elVideo,
              "valve-userinputneeded",
              this.OnUserInputNeeded
            ),
            (this.m_player = new L.a(this.m_elVideo, !1)),
            this.SetMute(!0),
            this.m_player.PlayMPD(t, null, null);
        }
        Stop() {
          this.m_listeners.Unregister(),
            this.m_player && this.m_player.Close(),
            (this.m_elVideo = null),
            (this.m_player = null),
            (this.m_bPaused = !1),
            (this.m_bUserInputNeeded = !1),
            (this.m_nPlaybackTime = 0),
            (this.m_nVideoStartTime = 0),
            (this.m_nVideoDuration = 0);
        }
        IsInitialized() {
          return !!this.m_player;
        }
        OnVideoPlaying() {
          (this.m_bPaused = !1), console.log("video playing");
        }
        OnVideoPause() {
          (this.m_bPaused = !0), console.log("video paused");
        }
        OnVideoTimeUpdate() {
          (this.m_nVideoStartTime = this.m_player.GetAvailableVideoStartTime()),
            (this.m_nVideoDuration =
              this.m_player.GetBufferedLiveEdgeTime() - this.m_nVideoStartTime),
            (this.m_nPlaybackTime =
              this.m_player.GetCurrentPlayTime() - this.m_nVideoStartTime);
        }
        OnVideoEnd() {
          console.log("video ended");
        }
        OnDownloadFailed() {
          console.log("video download failed");
        }
        OnUserInputNeeded() {
          this.m_bUserInputNeeded = !0;
        }
        UserInputRecieved() {
          this.IsInitialized() &&
            ((this.m_bUserInputNeeded = !1), this.m_player.SeekAndPlay(0));
        }
        SetVolume(e) {
          this.IsInitialized() && this.m_player.SetVolume(e);
        }
        SetMute(e) {
          this.IsInitialized() && this.m_player.SetMuted(e);
        }
        TogglePlayPause() {
          this.IsInitialized() &&
            (this.m_player.IsPaused() ? this.Play() : this.Pause());
        }
        Play() {
          this.IsInitialized() && this.m_player.Play();
        }
        Pause() {
          this.IsInitialized() && this.m_player.Pause();
        }
        Seek(e) {
          this.m_player.Seek(this.m_nVideoStartTime + e);
        }
      }
      Object(n.b)([C.C], O.prototype, "m_bPaused", void 0),
        Object(n.b)([C.C], O.prototype, "m_bUserInputNeeded", void 0),
        Object(n.b)([C.C], O.prototype, "m_nPlaybackTime", void 0),
        Object(n.b)([C.C], O.prototype, "m_nVideoStartTime", void 0),
        Object(n.b)([C.C], O.prototype, "m_nVideoDuration", void 0),
        Object(n.b)([x.b], O.prototype, "OnVideoPlaying", null),
        Object(n.b)([x.b], O.prototype, "OnVideoPause", null),
        Object(n.b)([x.b], O.prototype, "OnVideoTimeUpdate", null),
        Object(n.b)([x.b], O.prototype, "OnVideoEnd", null),
        Object(n.b)([x.b], O.prototype, "OnDownloadFailed", null),
        Object(n.b)([x.b], O.prototype, "OnUserInputNeeded", null),
        Object(n.b)([x.b], O.prototype, "UserInputRecieved", null);
      var D = r("aoTL"),
        I = r("GbHM"),
        G = r("3idx");
      const j = parseInt(T.a.nTimelineHoverEdgePadding);
      function A(e) {
        let { manifest: t, forcePause: r } = e,
          [n, i] = (function (e) {
            let t = s.useRef(new O());
            return [
              Object(x.i)(
                (r) => {
                  if (r) return t.current.Start(r, e), () => t.current.Stop();
                },
                [t, e]
              ),
              t.current,
            ];
          })(t);
        !(function (e, t) {
          let r = s.useRef(!1),
            n = s.useRef(!1);
          if (r.current == t) return;
          t ? ((n.current = e.IsPaused()), e.Pause()) : n.current || e.Play();
          r.current = t;
        })(i, r);
        let a = Object(D.d)(() => i.GetUserInputNeeded());
        return s.createElement(
          "div",
          { className: T.a.TrailerPlayer },
          s.createElement("video", { ref: n }),
          s.createElement(F, { player: i }),
          a && s.createElement(W, { player: i })
        );
      }
      function F(e) {
        let { player: t } = e,
          r = s.useCallback(() => {
            t.TogglePlayPause();
          }, [t]);
        return s.createElement(
          "div",
          { className: T.a.PlayerControls, onClick: r },
          s.createElement(
            "div",
            { className: T.a.LowerControls },
            s.createElement(
              "div",
              { className: T.a.LoweControlTopRow },
              s.createElement(N, { player: t }),
              s.createElement(V, { player: t }),
              s.createElement(z, { player: t }),
              s.createElement(U, { player: t })
            ),
            s.createElement(P, { player: t })
          )
        );
      }
      function P(e) {
        let { player: t } = e,
          [r, n] = (function (e) {
            return Object(D.d)(() => [
              e.GetPlaybackTime(),
              e.GetTimelineDuration(),
            ]);
          })(t),
          i = (function (e) {
            return s.useCallback(
              (t) => {
                let r = t.currentTarget.getBoundingClientRect(),
                  n = (t.pageX - r.left) / (r.right - r.left);
                e.Seek(n * e.GetTimelineDuration()),
                  t.preventDefault(),
                  t.stopPropagation();
              },
              [e]
            );
          })(t),
          [a, o, l, c, d, u, m, h] = (function (e) {
            let t = s.useRef(null),
              [r, n] = s.useState(!1),
              [i, a] = s.useState({
                nTickOffset: 0,
                nHoverOffset: 0,
                nPlaybackSeconds: 0,
              }),
              o = s.useCallback(
                (e) => {
                  n(!0);
                },
                [n]
              ),
              l = s.useCallback(
                (e) => {
                  n(!1);
                },
                [n]
              ),
              c = s.useCallback(
                (r) => {
                  if (!t.current) return;
                  let n = r.currentTarget.getBoundingClientRect(),
                    i = r.pageX - n.left,
                    s = i / (n.right - n.left),
                    o = Math.round(e.GetTimelineDuration() * s),
                    l = t.current.getBoundingClientRect(),
                    c = n.right - n.left,
                    d = l.right - l.left,
                    u = E.a(i - d / 2, 0 + j, c - d - j);
                  a({ nTickOffset: i, nHoverOffset: u, nPlaybackSeconds: o });
                },
                [e, a]
              );
            return [
              t,
              o,
              l,
              c,
              r,
              i.nTickOffset,
              i.nHoverOffset,
              i.nPlaybackSeconds,
            ];
          })(t),
          p = { left: u, display: d ? "block" : "none" },
          f = { left: m, display: d ? "block" : "none" },
          _ = { width: `${E.c(r, 0, n, 0, 100).toFixed(1)}%` };
        return s.createElement(
          "div",
          {
            className: T.a.Timeline,
            onClick: i,
            onMouseMove: c,
            onMouseEnter: o,
            onMouseLeave: l,
          },
          s.createElement("div", {
            className: Object(I.a)(T.a.Bar, T.a.Buffered),
          }),
          s.createElement("div", {
            className: Object(I.a)(T.a.Bar, T.a.Played),
            style: _,
          }),
          s.createElement("div", {
            className: Object(I.a)(T.a.HoverTick),
            style: p,
          }),
          s.createElement(
            "div",
            { ref: a, className: Object(I.a)(T.a.HoverTime), style: f },
            Object(G.a)(h, !0)
          )
        );
      }
      function N(e) {
        return s.createElement("div", null);
      }
      function V(e) {
        return s.createElement("div", null);
      }
      function z(e) {
        return s.createElement("div", null);
      }
      function U(e) {
        return s.createElement("div", null);
      }
      function W(e) {
        let { player: t } = e,
          r = s.useCallback(() => {
            t.UserInputRecieved();
          }, [t]);
        return s.createElement(
          "div",
          { className: T.a.UserInputNeeded, onClick: r },
          s.createElement(M.Z, null)
        );
      }
      function H(e) {
        let { id: t, manifest: r } = e,
          n = Object(D.d)(
            () =>
              !(function () {
                q ||
                  ((q = new $()),
                  (window.GameHighlightTrailers = q),
                  window.dispatchEvent(
                    new CustomEvent("valve_gamehighlighttrailers_ready")
                  ));
                return q;
              })().BPlayTrailer(t)
          );
        return (function (e) {
          let t = s.useRef(!1);
          e || (t.current = !0);
          return t.current;
        })(n)
          ? s.createElement(A, { manifest: r, forcePause: n })
          : null;
      }
      class $ {
        constructor() {
          this.m_mapTrailerPlay = new Map();
        }
        SetTrailerState(e, t) {
          this.m_mapTrailerPlay.set(e, t);
        }
        BPlayTrailer(e) {
          let t = this.m_mapTrailerPlay.get(e);
          return void 0 !== t && t;
        }
      }
      Object(n.b)([C.C], $.prototype, "m_mapTrailerPlay", void 0);
      let q = null;
      function Z(e) {
        return (t) => {
          const [n, i] = Object(s.useState)(null);
          return (
            n ||
            (Promise.all([
              r.e(1),
              r.e(13),
              r.e(18),
              r.e(22),
              r.e(25),
              r.e(0),
              r.e(2),
              r.e(3),
              r.e(5),
              r.e(6),
              r.e(4),
              r.e(7),
              r.e(10),
              r.e(9),
              r.e(8),
              r.e(11),
              r.e(12),
              r.e(14),
              r.e(15),
              r.e(16),
              r.e(17),
              r.e(19),
              r.e(21),
              r.e(23),
              r.e(20),
              r.e(24),
              r.e(33),
            ])
              .then(r.bind(null, "Wym2"))
              .then((r) => {
                i(o.a.createElement(r[e], t));
              }),
            null)
          );
        };
      }
      const Y = Z("Events"),
        K = Z("DemoAndQuickPitch");
      var X = r("1ZD8");
      r("99tq");
      function Q(e) {
        const t = s.useRef(J);
        let r = e.children;
        return (
          e.debug,
          s.createElement(X.QueryClientProvider, { client: t.current }, r)
        );
      }
      const J = new X.QueryClient({
          defaultOptions: { queries: { staleTime: 1 / 0 } },
        }),
        ee = o.a.lazy(() =>
          Promise.all([
            r.e(1),
            r.e(36),
            r.e(0),
            r.e(2),
            r.e(3),
            r.e(4),
            r.e(34),
          ]).then(r.bind(null, "3WEt"))
        ),
        te = o.a.lazy(() =>
          Promise.all([
            r.e(1),
            r.e(26),
            r.e(0),
            r.e(2),
            r.e(3),
            r.e(5),
            r.e(6),
            r.e(4),
            r.e(7),
            r.e(8),
            r.e(15),
            r.e(17),
            r.e(40),
          ]).then(r.bind(null, "CGeh"))
        ),
        re = o.a.lazy(() =>
          Promise.all([r.e(1), r.e(26), r.e(0), r.e(15), r.e(103)]).then(
            r.bind(null, "cprX")
          )
        ),
        ne = o.a.lazy(() =>
          Promise.all([
            r.e(1),
            r.e(13),
            r.e(18),
            r.e(0),
            r.e(2),
            r.e(3),
            r.e(5),
            r.e(6),
            r.e(4),
            r.e(7),
            r.e(10),
            r.e(9),
            r.e(8),
            r.e(11),
            r.e(12),
            r.e(14),
            r.e(16),
            r.e(21),
            r.e(28),
          ]).then(r.bind(null, "3fR/"))
        ),
        ie = o.a.lazy(() =>
          Promise.all([
            r.e(1),
            r.e(0),
            r.e(2),
            r.e(3),
            r.e(5),
            r.e(10),
            r.e(35),
          ]).then(r.bind(null, "JO2d"))
        ),
        ae = o.a.lazy(() =>
          Promise.all([
            r.e(1),
            r.e(13),
            r.e(0),
            r.e(2),
            r.e(3),
            r.e(5),
            r.e(6),
            r.e(4),
            r.e(10),
            r.e(9),
            r.e(8),
            r.e(11),
            r.e(23),
          ]).then(r.bind(null, "+zS6"))
        ),
        se = o.a.lazy(() =>
          Promise.all([r.e(1), r.e(0), r.e(27)]).then(r.bind(null, "byIC"))
        ),
        oe = o.a.lazy(() =>
          Promise.all([r.e(6), r.e(7), r.e(164)]).then(r.bind(null, "AFtM"))
        ),
        le = o.a.lazy(() =>
          Promise.all([
            r.e(1),
            r.e(13),
            r.e(18),
            r.e(0),
            r.e(2),
            r.e(3),
            r.e(5),
            r.e(6),
            r.e(4),
            r.e(7),
            r.e(10),
            r.e(9),
            r.e(8),
            r.e(11),
            r.e(12),
            r.e(14),
            r.e(16),
            r.e(20),
            r.e(29),
          ]).then(r.bind(null, "+KBl"))
        ),
        ce = o.a.lazy(() =>
          Promise.all([r.e(1), r.e(0), r.e(9), r.e(12), r.e(30)]).then(
            r.bind(null, "TFpc")
          )
        ),
        de = o.a.lazy(() =>
          Promise.all([
            r.e(1),
            r.e(13),
            r.e(18),
            r.e(22),
            r.e(25),
            r.e(0),
            r.e(2),
            r.e(3),
            r.e(5),
            r.e(6),
            r.e(4),
            r.e(7),
            r.e(10),
            r.e(9),
            r.e(8),
            r.e(11),
            r.e(12),
            r.e(14),
            r.e(15),
            r.e(16),
            r.e(17),
            r.e(19),
            r.e(21),
            r.e(23),
            r.e(20),
            r.e(24),
            r.e(33),
          ]).then(r.bind(null, "4yG/"))
        ),
        ue = o.a.lazy(() =>
          Promise.all([
            r.e(1),
            r.e(13),
            r.e(18),
            r.e(22),
            r.e(25),
            r.e(37),
            r.e(0),
            r.e(2),
            r.e(3),
            r.e(5),
            r.e(6),
            r.e(4),
            r.e(7),
            r.e(10),
            r.e(9),
            r.e(8),
            r.e(11),
            r.e(12),
            r.e(14),
            r.e(15),
            r.e(16),
            r.e(17),
            r.e(19),
            r.e(21),
            r.e(23),
            r.e(20),
            r.e(24),
            r.e(32),
          ]).then(r.bind(null, "3rT3"))
        ),
        me = o.a.lazy(() =>
          Promise.all([
            r.e(1),
            r.e(13),
            r.e(18),
            r.e(22),
            r.e(25),
            r.e(37),
            r.e(0),
            r.e(2),
            r.e(3),
            r.e(5),
            r.e(6),
            r.e(4),
            r.e(7),
            r.e(10),
            r.e(9),
            r.e(8),
            r.e(11),
            r.e(12),
            r.e(14),
            r.e(15),
            r.e(16),
            r.e(17),
            r.e(19),
            r.e(21),
            r.e(23),
            r.e(20),
            r.e(24),
            r.e(32),
          ]).then(r.bind(null, "/EF7"))
        ),
        he = o.a.lazy(() =>
          Promise.all([
            r.e(1),
            r.e(13),
            r.e(18),
            r.e(22),
            r.e(25),
            r.e(0),
            r.e(2),
            r.e(3),
            r.e(5),
            r.e(6),
            r.e(4),
            r.e(7),
            r.e(10),
            r.e(9),
            r.e(8),
            r.e(11),
            r.e(12),
            r.e(14),
            r.e(15),
            r.e(16),
            r.e(17),
            r.e(19),
            r.e(21),
            r.e(23),
            r.e(20),
            r.e(24),
            r.e(104),
          ]).then(r.bind(null, "21NE"))
        ),
        pe = o.a.lazy(() =>
          Promise.all([
            r.e(1),
            r.e(13),
            r.e(18),
            r.e(22),
            r.e(25),
            r.e(0),
            r.e(2),
            r.e(3),
            r.e(5),
            r.e(6),
            r.e(4),
            r.e(7),
            r.e(10),
            r.e(9),
            r.e(8),
            r.e(11),
            r.e(12),
            r.e(14),
            r.e(15),
            r.e(16),
            r.e(17),
            r.e(19),
            r.e(21),
            r.e(23),
            r.e(20),
            r.e(24),
            r.e(104),
          ]).then(r.bind(null, "OVk1"))
        ),
        fe = o.a.lazy(() =>
          Promise.all([r.e(2), r.e(39)]).then(r.bind(null, "oTPU"))
        ),
        _e = o.a.lazy(() =>
          Promise.all([
            r.e(1),
            r.e(13),
            r.e(22),
            r.e(0),
            r.e(2),
            r.e(3),
            r.e(5),
            r.e(6),
            r.e(4),
            r.e(7),
            r.e(10),
            r.e(9),
            r.e(8),
            r.e(11),
            r.e(12),
            r.e(14),
            r.e(17),
            r.e(19),
            r.e(31),
          ]).then(r.bind(null, "246V"))
        );
      class ge extends o.a.Component {
        componentDidMount() {
          const e = Object(u.c)();
          e &&
            (document.documentElement.setAttribute("lang", e),
            u.f.SetPreferredLocales([e]));
        }
        render() {
          return o.a.createElement(
            f.a,
            { basename: Object(m.a)() },
            o.a.createElement(
              "div",
              { className: p.a.App },
              o.a.createElement(
                be,
                null,
                o.a.createElement(
                  o.a.Suspense,
                  { fallback: o.a.createElement("div", null) },
                  o.a.createElement(
                    _.d,
                    null,
                    o.a.createElement(_.b, {
                      exact: !0,
                      path: m.b.DiagData(),
                      render: (e) =>
                        o.a.createElement(
                          b,
                          Object.assign({}, e, {
                            key: "diab_data_" + e.match.params.gid,
                            strConfigID: "application_config",
                          })
                        ),
                    }),
                    o.a.createElement(
                      _.b,
                      { exact: !0, path: m.b.Login() },
                      o.a.createElement(v, {
                        config: {
                          login: (e) =>
                            o.a.createElement(fe, Object.assign({}, e)),
                        },
                      })
                    ),
                    o.a.createElement(_.b, {
                      exact: !0,
                      path: m.b.AppStorePage(),
                      render: (e) => {
                        const {
                          match: {
                            params: { appid: t },
                          },
                        } = e;
                        return o.a.createElement(v, {
                          config: {
                            "events-row": () =>
                              o.a.createElement(Y, {
                                key: `appeventrow${t}`,
                                appid: Number.parseInt(t),
                              }),
                            "review-award": () =>
                              o.a.createElement(re, {
                                key: `appawardmodal${t}`,
                              }),
                            "steamawardsvote-embed": () =>
                              o.a.createElement(ae, {
                                key: `steamawardsvote_${t}`,
                                appID: Number.parseInt(t),
                              }),
                            "broadcast-embed": () =>
                              o.a.createElement(
                                ne,
                                Object.assign(
                                  { key: `appbroadcastcast_${t}` },
                                  e,
                                  { appid: Number.parseInt(t) }
                                )
                              ),
                            "demo-and-quick-pitch": () =>
                              o.a.createElement(K, {
                                key: `appdemoquickpitch_${t}`,
                                appID: Number.parseInt(t),
                              }),
                            "deck-verified-results": () =>
                              o.a.createElement(ce, {
                                appID: Number.parseInt(t),
                                results: Object(d.h)(
                                  "deckcompatibility",
                                  "application_config"
                                ),
                                appName: Object(d.h)(
                                  "appname",
                                  "application_config"
                                ),
                              }),
                            "gamehighlight-trailer": (e) =>
                              o.a.createElement(H, Object.assign({}, e)),
                            "discovery-queue-app-widget": () =>
                              o.a.createElement(_e, {
                                key: `discoveryqueue${t}`,
                                appID: Number.parseInt(t),
                              }),
                          },
                        });
                      },
                    }),
                    o.a.createElement(_.b, {
                      exact: !0,
                      path: m.b.SaleLandingPage(),
                      render: (e) => {
                        const {
                          match: {
                            params: { salePagename: t },
                          },
                        } = e;
                        return o.a.createElement(v, {
                          config: {
                            "sale-display": () =>
                              o.a.createElement(he, {
                                key: `sale_${t}`,
                                promotionName: `sale_${t}`,
                                language: Object(g.l)(d.d.LANGUAGE),
                              }),
                            "broadcast-embed": () =>
                              o.a.createElement(
                                ne,
                                Object.assign(
                                  { key: `broadcastsale_${t}` },
                                  e,
                                  { promotionName: t }
                                )
                              ),
                          },
                        });
                      },
                    }),
                    o.a.createElement(_.b, {
                      path: m.b.CuratorAdminPage(),
                      component: ue,
                    }),
                    o.a.createElement(_.b, {
                      exact: !0,
                      path: m.b.CreatorSaleLandingPage(),
                      render: (e) =>
                        o.a.createElement(v, {
                          config: {
                            "sale-display": () =>
                              o.a.createElement(he, {
                                key:
                                  "salecreator_" +
                                  e.match.params.creatorPageName +
                                  "_" +
                                  e.match.params.salePageName,
                                promotionName:
                                  "sale_" + e.match.params.salePageName,
                                language: Object(g.l)(d.d.LANGUAGE),
                              }),
                          },
                        }),
                    }),
                    o.a.createElement(_.b, {
                      exact: !0,
                      path: m.b.SubscriptionPlanLandingPage(),
                      render: (e) =>
                        o.a.createElement(v, {
                          config: {
                            "sale-display": () =>
                              o.a.createElement(he, {
                                key:
                                  "subscription_plan_" +
                                  e.match.params.salePageName,
                                promotionName:
                                  "sale_" + e.match.params.salePageName,
                                language: Object(g.l)(d.d.LANGUAGE),
                              }),
                          },
                        }),
                    }),
                    o.a.createElement(_.b, {
                      path: m.b.RemotePlay(),
                      render: (e) =>
                        o.a.createElement(v, {
                          config: {
                            "sale-display": () =>
                              o.a.createElement(he, {
                                key: "sale_remoteplaylanding",
                                promotionName: "remoteplaylanding",
                                language: Object(g.l)(d.d.LANGUAGE),
                              }),
                          },
                        }),
                    }),
                    o.a.createElement(_.b, {
                      path: m.b.RemotePlayTogether(),
                      render: (e) =>
                        o.a.createElement(v, {
                          config: {
                            "sale-display": () =>
                              o.a.createElement(he, {
                                key: "sale_together",
                                promotionName: "sale_together",
                                language: Object(g.l)(d.d.LANGUAGE),
                              }),
                          },
                        }),
                    }),
                    o.a.createElement(_.b, {
                      path: m.b.VRHardware(),
                      render: (e) =>
                        o.a.createElement(v, {
                          config: {
                            "sale-display": () =>
                              o.a.createElement(he, {
                                key: "sale_vrhardware",
                                promotionName: "vrhardware",
                                language: Object(g.l)(d.d.LANGUAGE),
                              }),
                          },
                        }),
                    }),
                    o.a.createElement(_.b, {
                      path: m.b.SteamDeck(),
                      render: (e) =>
                        o.a.createElement(v, {
                          config: {
                            "sale-display": () =>
                              o.a.createElement(he, {
                                key: "sale_steamdeck",
                                promotionName: "steamdeck",
                                language: Object(g.l)(d.d.LANGUAGE),
                              }),
                          },
                        }),
                    }),
                    o.a.createElement(_.b, {
                      exact: !0,
                      path: m.b.CuratorHomePage(),
                      render: (e) =>
                        o.a.createElement(v, {
                          config: {
                            "broadcast-embed": () =>
                              o.a.createElement(
                                ne,
                                Object.assign(
                                  {
                                    key:
                                      "curatorbroadcast_" +
                                      d.b.clanid +
                                      "_" +
                                      d.b.listid,
                                  },
                                  e,
                                  { clanid: d.b.clanid, listid: d.b.listid }
                                )
                              ),
                          },
                        }),
                    }),
                    o.a.createElement(_.b, {
                      exact: !0,
                      path: m.b.CuratorListPage(),
                      render: (e) =>
                        o.a.createElement(v, {
                          config: {
                            "list-display": () =>
                              o.a.createElement(le, {
                                key: "curator_list",
                                listid: e.match.params.listid,
                              }),
                          },
                        }),
                    }),
                    o.a.createElement(_.b, {
                      exact: !0,
                      path: m.b.PackageStorePage(),
                      render: (e) =>
                        o.a.createElement(ne, {
                          key: "packagebroadcast_" + e.match.params.subid,
                          subid: Number.parseInt(e.match.params.subid),
                        }),
                    }),
                    o.a.createElement(_.b, {
                      exact: !0,
                      path: m.b.BundleStorePage(),
                      render: (e) =>
                        o.a.createElement(ne, {
                          key: "bundlebroadcast_" + e.match.params.bundleid,
                          bundleid: Number.parseInt(e.match.params.bundleid),
                        }),
                    }),
                    o.a.createElement(_.b, {
                      path: m.b.NewsHub(),
                      render: (e) => o.a.createElement(de, null),
                    }),
                    o.a.createElement(_.b, {
                      path: m.b.EventAdmin(),
                      render: (e) => o.a.createElement(me, null),
                    }),
                    o.a.createElement(_.b, {
                      exact: !0,
                      path: m.b.InteractiveRecommender(),
                      render: (e) => o.a.createElement(ee, null),
                    }),
                    o.a.createElement(_.b, {
                      path: m.b.LabsSandbox(),
                      render: (e) => o.a.createElement(ie, null),
                    }),
                    !1,
                    o.a.createElement(_.b, {
                      path: m.b.Loyalty(),
                      render: () => o.a.createElement(te, null),
                    }),
                    o.a.createElement(_.b, {
                      path: m.b.ContentHubHome(),
                      render: (e) => {
                        const {
                          match: {
                            params: { category: t },
                          },
                        } = e;
                        return o.a.createElement(v, {
                          config: {
                            "sale-display": () =>
                              o.a.createElement(he, {
                                key: "contenthub_" + t,
                                promotionName: "contenthub_" + t,
                                language: Object(g.l)(d.d.LANGUAGE),
                              }),
                          },
                        });
                      },
                    }),
                    o.a.createElement(_.b, {
                      path: m.b.Categories(),
                      render: (e) => o.a.createElement(pe, null),
                    }),
                    o.a.createElement(_.b, {
                      path: m.b.AccountPreferences(),
                      render: (e) =>
                        o.a.createElement(se, Object.assign({}, e)),
                    }),
                    o.a.createElement(_.b, {
                      exact: !0,
                      path: m.b.SummerSale2021Story(),
                      render: (e) => o.a.createElement(oe, null),
                    }),
                    o.a.createElement(_.b, null, !1)
                  )
                )
              )
            )
          );
        }
      }
      function be(e) {
        const { children: t } = e;
        return o.a.createElement(
          y.a.Provider,
          { value: { bCanUseLink: !0 } },
          o.a.createElement(Q, null, t, o.a.createElement(we, null))
        );
      }
      const we = (e) => {
        const t = o.a.createElement(S.a, { ModalManager: Object(B.a)(window) });
        return a.a.createPortal(t, document.body);
      };
      var ye = r("rmVU"),
        Se = r("kslQ"),
        Be = r("rSrx");
      r("KSg0"), r("Jsk2");
      Be.v(function () {
        return Object(n.a)(this, void 0, void 0, function* () {
          Object(d.j)("application_config").userConfig ||
            (yield Object(d.k)(c.a, d.d.STORE_BASE_URL + "actions/", {
              userConfig: !0,
            })),
            Object(Se.a)().Init(
              "Store",
              CLSTAMP,
              new ye.a(d.d.WEBAPI_BASE_URL).GetServiceTransport()
            ),
            yield (function (e) {
              return Object(n.a)(this, void 0, void 0, function* () {
                const t = u.b.GetLanguageFallback(e),
                  n = e === t,
                  [i, a, s, o, l, c, d, m] = yield Object(u.d)([
                    r("+58p")(`./shared_${e}.json`),
                    r("uhdG")(`./sales_${e}.json`),
                    r("AvbV")(`./main_${e}.json`),
                    r("5YvR")(`./marketing_${e}.json`),
                    n ? {} : r("+58p")(`./shared_${t}.json`),
                    n ? {} : r("uhdG")(`./sales_${t}.json`),
                    n ? {} : r("AvbV")(`./main_${t}.json`),
                    n ? {} : r("5YvR")(`./marketing_${t}.json`),
                  ]);
                u.f.AddTokens(
                  Object.assign(
                    Object.assign(Object.assign(Object.assign({}, a), i), s),
                    o
                  ),
                  Object.assign(
                    Object.assign(Object.assign(Object.assign({}, c), l), d),
                    m
                  )
                );
              });
            })(d.d.LANGUAGE),
            document.getElementById("application_root")
              ? a.a.render(
                  o.a.createElement(ge),
                  document.getElementById("application_root")
                )
              : console.error('No "application_root" was found to target');
        });
      });
    },
    gwss: function (e, t, r) {
      "use strict";
      r.d(t, "j", function () {
        return o;
      }),
        r.d(t, "f", function () {
          return l;
        }),
        r.d(t, "h", function () {
          return c;
        }),
        r.d(t, "g", function () {
          return u;
        }),
        r.d(t, "i", function () {
          return p;
        }),
        r.d(t, "b", function () {
          return f;
        }),
        r.d(t, "d", function () {
          return S;
        }),
        r.d(t, "c", function () {
          return B;
        }),
        r.d(t, "e", function () {
          return C;
        }),
        r.d(t, "a", function () {
          return M;
        });
      var n,
        i = r("GXif"),
        a = r("Nt3m"),
        s = r("Gp1o");
      function o(e, t, r) {
        let s;
        if ("boolean" == typeof t) {
          s = {
            eSuffix: t ? n.None : n.Ago,
            bForceSingleUnits: r,
            bHighGranularity: !1,
          };
        } else
          s = Object.assign(
            { eSuffix: n.Ago, bForceSingleUnits: !1, bHighGranularity: !1 },
            t
          );
        let o = "#TimeInterval_";
        if (
          (s.eSuffix == n.Ago
            ? (o = "#TimeSince_")
            : s.eSuffix == n.Remaining && (o = "#TimeRemaining_"),
          e >= 2 * a.e.PerYear)
        )
          return Object(i.g)(o + "XYears", Math.floor(e / a.e.PerYear));
        if (e >= a.e.PerYear)
          return (e -= a.e.PerYear) >= 2 * a.e.PerMonth && !s.bForceSingleUnits
            ? Object(i.g)(o + "1YearXMonths", Math.floor(e / a.e.PerMonth))
            : Object(i.g)(o + "1Year");
        if (e >= 2 * a.e.PerMonth)
          return Object(i.g)(o + "XMonths", Math.floor(e / a.e.PerMonth));
        if (e >= 2 * a.e.PerWeek)
          return Object(i.g)(o + "XWeeks", Math.floor(e / a.e.PerWeek));
        if (e >= a.e.PerWeek)
          return Object(i.g)(o + "1Week", Math.floor(e / a.e.PerWeek));
        if (e >= 2 * a.e.PerDay)
          return Object(i.g)(o + "XDays", Math.floor(e / a.e.PerDay));
        if (e >= a.e.PerDay)
          return (e -= a.e.PerDay) >= 2 * a.e.PerHour && !s.bForceSingleUnits
            ? Object(i.g)(o + "1DayXHours", Math.floor(e / a.e.PerHour))
            : Object(i.g)(o + "1Day");
        if (e >= 2 * a.e.PerHour)
          return Object(i.g)(o + "XHours", Math.floor(e / a.e.PerHour));
        if (e >= a.e.PerHour)
          return (e -= a.e.PerHour) >= 2 * a.e.PerMinute && !s.bForceSingleUnits
            ? Object(i.g)(o + "1HourXMinutes", Math.floor(e / a.e.PerMinute))
            : Object(i.g)(o + "1Hour");
        if (e >= 2 * a.e.PerMinute) {
          const t = Math.floor(e / a.e.PerMinute),
            r = e % a.e.PerMinute;
          return s.bHighGranularity && 0 != r
            ? 1 == r
              ? Object(i.g)(o + "XMinutes1Second", t)
              : Object(i.g)(o + "XMinutesXSeconds", t, r)
            : Object(i.g)(o + "XMinutes", t);
        }
        if (e >= a.e.PerMinute) {
          const t = e % a.e.PerMinute;
          return s.bHighGranularity && 0 != t
            ? 1 == t
              ? Object(i.g)(o + "1Minute1Second")
              : Object(i.g)(o + "1MinuteXSeconds", t)
            : Object(i.g)(o + "1Minute");
        }
        return s.bHighGranularity
          ? 1 == e
            ? Object(i.g)(o + "1Second")
            : Object(i.g)(o + "XSeconds", e)
          : Object(i.g)(o + "LessThanAMinute");
      }
      function l(e, t, r) {
        const n = {
          weekday: r ? "long" : "short",
          month: "long",
          day: "numeric",
          year: t ? void 0 : "numeric",
        };
        return new Date(1e3 * e).toLocaleDateString(
          i.f.GetPreferredLocales(),
          n
        );
      }
      function c(e) {
        let t = new Date(1e3 * e);
        const r = t.setHours(0, 0, 0, 0);
        let n = m.get(r);
        if (n) return n;
        return (
          (n = t.toLocaleDateString(i.f.GetPreferredLocales(), {
            year: "numeric",
            month: "short",
            day: "numeric",
          })),
          m.set(r, n),
          n
        );
      }
      !(function (e) {
        (e[(e.None = 0)] = "None"),
          (e[(e.Ago = 1)] = "Ago"),
          (e[(e.Remaining = 2)] = "Remaining");
      })(n || (n = {}));
      const d = new Map();
      function u(e, t) {
        const r = new Date(1e3 * e),
          n = i.f.GetPreferredLocales(),
          a =
            t.bForce24HourClock ||
            (function (e) {
              let t = d.get(e);
              if (!0 === t || !1 === t) return t;
              const r = new Date();
              return (
                r.setHours(15),
                (t =
                  r.toLocaleTimeString(e, { hour: "numeric" }) ==
                  r.toLocaleTimeString(e, { hour: "numeric", hour12: !1 })),
                d.set(e, t),
                t
              );
            })(n[0]);
        return r.toLocaleTimeString(
          n,
          a
            ? { hour: "numeric", minute: "2-digit", hourCycle: "h23" }
            : { hour: "numeric", minute: "2-digit" }
        );
      }
      const m = new Map(),
        h = new Map();
      function p(e, t, r = !0, n = !0) {
        const a = new Date(),
          o = new Date(1e3 * e);
        if (o.getFullYear() != a.getFullYear()) return c(e);
        n && s.b(new Date().setHours(24, 0, 0, 0) - a.getTime());
        const l = new Date();
        if ((l.setHours(0, 0, 0, 0), r))
          if (o >= l) {
            if ((l.setDate(l.getDate() + 1), o < l))
              return Object(i.g)("#Time_Today");
            if ((l.setDate(l.getDate() + 1), o < l))
              return Object(i.g)("#Time_Tomorrow");
          } else if ((l.setDate(l.getDate() - 1), o >= l))
            return Object(i.g)("#Time_Yesterday");
        const d = { month: t ? "long" : "short", day: "numeric" },
          u = o.setHours(0, 0, 0, 0) + d.month;
        let m = h.get(u);
        return (
          m ||
          ((m = o.toLocaleDateString(i.f.GetPreferredLocales(), d)),
          h.set(u, m),
          m)
        );
      }
      function f(e, t) {
        const r = new Date(1e3 * e),
          n = new Date(),
          o = Object.assign(
            {
              bGranularFutureTime: !1,
              bGranularTodayTimeOnly: !1,
              bGranularToday: !1,
              bGranularYesterday: !1,
              bGranularWeek: !1,
              bGranularPast: !1,
              bAbbreviateDayOfWeek: !1,
              bForce24HourClock: !1,
            },
            t
          );
        if (r > n) {
          if (!o.bGranularFutureTime)
            return (
              s.b(r.getTime() - n.getTime()),
              r.getFullYear() == n.getFullYear() ? v(r) : M(r)
            );
          s.b(new Date().setHours(24, 0, 0, 0) - n.getTime());
          let e = new Date();
          return (
            e.setHours(0, 0, 0, 0),
            e.setDate(e.getDate() + 1),
            r < e
              ? Object(i.g)("#Time_Today")
              : (e.setDate(e.getDate() + 1),
                r < e
                  ? Object(i.g)("#Time_Tomorrow")
                  : (e.setDate(e.getDate() + 5),
                    r < e ? B(r) : S(r, !0, o.bAbbreviateDayOfWeek)))
          );
        }
        s.b(new Date().setHours(24, 0, 0, 0) - n.getTime());
        let c = new Date();
        if ((c.setHours(0, 0, 0, 0), r >= c))
          return o.bGranularToday
            ? o.bGranularTodayTimeOnly
              ? u(e, { bForce24HourClock: o.bForce24HourClock })
              : Object(i.g)(
                  "#Time_Today_At",
                  u(e, { bForce24HourClock: o.bForce24HourClock })
                )
            : Object(i.g)("#Time_Today");
        if ((c.setDate(n.getDate() - 1), r >= c))
          return o.bGranularYesterday
            ? Object(i.g)(
                "#Time_Yesterday_At",
                u(e, { bForce24HourClock: o.bForce24HourClock })
              )
            : Object(i.g)("#Time_Yesterday");
        c.setDate(n.getDate() - 6);
        const d = new Date(c);
        if (o.bGranularWeek && r >= d) return S(r, !1, !o.bAbbreviateDayOfWeek);
        if (o.bGranularPast)
          return Object(i.g)(
            "#Time_Past_At",
            l(e, r.getFullYear() == n.getFullYear(), !o.bAbbreviateDayOfWeek),
            u(e, { bForce24HourClock: o.bForce24HourClock })
          );
        if (r >= d) return Object(i.g)("#TimeSince_ThisWeek");
        if (
          r.getMonth() == n.getMonth() &&
          r.getFullYear() == n.getFullYear()
        ) {
          const e =
            Math.floor((d.valueOf() - r.valueOf()) / (1e3 * a.e.PerWeek)) + 1;
          return 1 == e
            ? Object(i.g)("#TimeSince_1Week")
            : Object(i.g)("#TimeSince_XWeeks", e);
        }
        return r.getFullYear() == n.getFullYear() ? v(r) : M(r);
      }
      const _ = new Map(),
        g = new Map(),
        b = new Map(),
        w = new Map(),
        y = new Map();
      function S(e, t = !1, r = !0) {
        const n = {
            weekday: r ? "long" : "short",
            day: "numeric",
            month: t ? "long" : "short",
          },
          a = e.setHours(0, 0, 0, 0) + n.weekday + n.month;
        let s = y.get(a);
        return (
          s ||
          ((s = e.toLocaleDateString(i.f.GetPreferredLocales(), n)),
          y.set(a, s),
          s)
        );
      }
      function B(e) {
        let t = _.get(e.getDay());
        return (
          t ||
          ((t = e.toLocaleDateString(i.f.GetPreferredLocales(), {
            weekday: "long",
          })),
          _.set(e.getDay(), t),
          t)
        );
      }
      function v(e) {
        let t = g.get(e.getMonth());
        return (
          t ||
          ((t = e.toLocaleDateString(i.f.GetPreferredLocales(), {
            month: "long",
          })),
          g.set(e.getMonth(), t),
          t)
        );
      }
      function C(e) {
        let t = b.get(e.getFullYear());
        return (
          t ||
          ((t = e.toLocaleDateString(i.f.GetPreferredLocales(), {
            year: "numeric",
          })),
          b.set(e.getFullYear(), t),
          t)
        );
      }
      function M(e) {
        const t = e.getMonth() + 12 * e.getFullYear();
        let r = w.get(t);
        return (
          r ||
          ((r = e.toLocaleDateString(i.f.GetPreferredLocales(), {
            month: "long",
            year: "numeric",
          })),
          w.set(t, r),
          r)
        );
      }
    },
    hCpY: function (e, t, r) {
      "use strict";
      r.d(t, "c", function () {
        return i;
      }),
        r.d(t, "f", function () {
          return a;
        }),
        r.d(t, "e", function () {
          return s;
        }),
        r.d(t, "k", function () {
          return o;
        }),
        r.d(t, "d", function () {
          return l;
        }),
        r.d(t, "g", function () {
          return c;
        }),
        r.d(t, "a", function () {
          return d;
        }),
        r.d(t, "i", function () {
          return u;
        }),
        r.d(t, "h", function () {
          return m;
        }),
        r.d(t, "j", function () {
          return f;
        }),
        r.d(t, "b", function () {
          return _.a;
        });
      var n = r("q1tI");
      r("3u1o");
      function i(e, t, r) {
        return [e, t, r];
      }
      function a() {
        const [, e] = n.useState(0);
        return n.useCallback(() => e((e) => e + 1), []);
      }
      function s(e, t) {
        n.useLayoutEffect(() => {
          if (!t || !e) return;
          let r = e.Register(t);
          return () => r.Unregister();
        }, [e, t]);
      }
      function o(e) {
        const [t, r] = n.useState(null == e ? void 0 : e.Value);
        return (
          n.useEffect(() => {
            if (null == e) return () => {};
            const n = e.Subscribe(r);
            return (
              t !== e.Value && r(e.Value), null == n ? void 0 : n.Unsubscribe
            );
          }, [e]),
          t
        );
      }
      function l(e, t) {
        null != e &&
          ("function" == typeof e ? e(t) : "current" in e && (e.current = t));
      }
      function c(...e) {
        return n.useCallback((t) => {
          for (const r of e) l(r, t);
        }, e);
      }
      function d(...e) {
        if (e && 0 !== e.length)
          return 1 === e.length
            ? e[0]
            : (t) =>
                e.forEach((e) => {
                  e && ("function" == typeof e ? e(t) : (e.current = t));
                });
      }
      function u(e, t) {
        const r = n.useRef();
        return n.useCallback((t) => {
          r.current && r.current(), (r.current = e(t));
        }, t);
      }
      function m(e) {
        const t = n.useRef(null);
        return { refWithValue: t, refForElement: c(e, t) };
      }
      var h = r("f5iL");
      function p(e, t) {
        return u(
          (r) => {
            if (!r) return;
            const n = t((t) => {
              e(t[0]);
            });
            return n.observe(r), () => n.unobserve(r);
          },
          [e, t]
        );
      }
      function f(e) {
        return p(
          e,
          n.useCallback(
            (e) =>
              "undefined" != typeof ResizeObserver
                ? new ResizeObserver(e)
                : (Object(h.a)(!1, "ResizeObserver is not available"),
                  {
                    observe: () => {},
                    unobserve: () => {},
                    disconnect: () => {},
                  }),
            []
          )
        );
      }
      var _ = r("vYsE");
    },
    hbtq: function (e, t, r) {
      "use strict";
      r.d(t, "b", function () {
        return u;
      }),
        r.d(t, "a", function () {
          return m;
        });
      var n = r("mrSG"),
        i = r("vDqi"),
        a = r.n(i),
        s = (r("2vnA"), r("msu0"), r("Zdsb"), r("9XWO")),
        o = r("rmVU"),
        l = r("wgTw"),
        c = (r("sTxY"), r("TqgT")),
        d = r("/Q1a");
      class u {
        constructor() {
          (this.m_LoadingOAuth = null), (this.m_mapBookmarks = new Map());
        }
        SetBookmarkForApp(e, t) {
          this.ValidateBookmarkData(t)
            ? this.m_mapBookmarks.set(e, l.b.fromObject(t))
            : this.InitializeBookmarkForApp(e);
        }
        ValidateBookmarkData(e) {
          const t = e;
          return (
            "object" == typeof t &&
            Number.isInteger(t.playback_position_in_seconds) &&
            Number.isInteger(t.app_id)
          );
        }
        InitializeBookmarkForApp(e) {
          if (!this.m_mapBookmarks.has(e)) {
            let t = {
              app_id: e,
              playback_position_in_seconds: 0,
              video_track_id: "0",
              audio_track_id: "0",
              timedtext_track_id: "0",
              hide_from_watch_history: !1,
              hide_from_library: !1,
            };
            this.m_mapBookmarks.set(e, new l.b(t));
          }
        }
        GetBookmarkPlayTimeInSeconds(e) {
          if (this.m_mapBookmarks.has(e)) {
            let t = this.m_mapBookmarks.get(e).playback_position_in_seconds();
            if (Number.isInteger(t)) return t;
          }
          return 0;
        }
        SendBookMarkedTimeToServer(e, t, r, i, a) {
          return Object(n.a)(this, void 0, void 0, function* () {
            if (!d.l.logged_in) return;
            if (
              !this.m_transport &&
              (yield this.m_LoadingOAuth, !this.m_transport)
            )
              return void console.warn(
                "CVideoBookmarkStore:SetBookMark no auth token / transport"
              );
            const n = s.b.Init(l.a);
            if (this.m_mapBookmarks.has(e)) {
              let s = this.m_mapBookmarks.get(e),
                o = !1;
              s.app_id() != e && ((o = !0), s.set_app_id(e)),
                s.playback_position_in_seconds() != t &&
                  ((o = !0), s.set_playback_position_in_seconds(t)),
                (r = r || "0"),
                s.video_track_id() != r && (s.set_video_track_id(r), (o = !0)),
                (i = i || "0"),
                s.audio_track_id() != i && (s.set_audio_track_id(i), (o = !0)),
                (a = a || "0") != s.timedtext_track_id() &&
                  (s.set_timedtext_track_id(a), (o = !0)),
                o &&
                  (n.Body().add_bookmarks(s),
                  l.c.SetVideoBookmark(this.m_transport, n));
            }
          });
        }
        static Get() {
          return (
            u.s_VODStore || ((u.s_VODStore = new u()), u.s_VODStore.Init()),
            u.s_VODStore
          );
        }
        Init() {
          d.l.logged_in && this.LoadWatchVideoOAuthToken();
        }
        LoadWatchVideoOAuthToken() {
          return Object(n.a)(this, void 0, void 0, function* () {
            const e =
                "community" == Object(d.g)()
                  ? d.d.COMMUNITY_BASE_URL + "actions/ajaxgetwatchvodtoken"
                  : d.d.STORE_BASE_URL + "actions/ajaxgetwatchvodtoken",
              t = {};
            try {
              let r = yield a.a.get(e, { params: t, withCredentials: !0 });
              if (
                r &&
                200 == r.status &&
                r.data &&
                1 == r.data.success &&
                r.data.webapi_token
              )
                return (
                  (this.m_transport = new o.a(
                    d.d.WEBAPI_BASE_URL,
                    r.data.webapi_token
                  ).GetServiceTransport()),
                  this.m_transport
                );
            } catch (e) {
              let t = Object(c.a)(e);
              console.error(
                "CVideoBookmarkStore:LoadWatchVideoOAuthToken: Failed " +
                  t.strErrorMsg,
                t
              );
            }
            return null;
          });
        }
      }
      class m {
        constructor(e) {
          this.m_appid = e;
        }
        SetBookmark(e, t, r, i) {
          return Object(n.a)(this, void 0, void 0, function* () {
            d.l.logged_in &&
              u
                .Get()
                .SendBookMarkedTimeToServer(
                  this.m_appid,
                  Math.floor(e),
                  t,
                  r,
                  i
                );
          });
        }
        GetBeginPlaytime() {
          return d.l.logged_in
            ? u.Get().GetBookmarkPlayTimeInSeconds(this.m_appid)
            : 0;
        }
      }
    },
    iNgL: function (e, t, r) {
      "use strict";
      "VALVE_PUBLIC_PATH" in window
        ? (r.p = window.VALVE_PUBLIC_PATH)
        : console.error(
            "VALVE_PUBLIC_PATH not defined; check for a call to CHTMLHelpers::WebpackConfigScriptlet"
          ),
        console.assert(
          123 === Array.from(new Set([123]))[0],
          "Should not include prototypejs."
        );
    },
    if9A: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return s;
      }),
        r.d(t, "b", function () {
          return o;
        }),
        r.d(t, "c", function () {
          return l;
        });
      var n = r("hRO2"),
        i = r("3dpo");
      n.Message;
      const a = n.Message;
      class s extends a {
        constructor(e = null) {
          super(),
            s.prototype.product || i.a(s.M()),
            a.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            s.sm_m ||
              (s.sm_m = {
                proto: s,
                fields: {
                  product: { n: 1, br: i.d.readString, bw: i.h.writeString },
                  version: { n: 2, br: i.d.readString, bw: i.h.writeString },
                  errors: { n: 3, c: o, r: !0, q: !0 },
                },
              }),
            s.sm_m
          );
        }
        static MBF() {
          return s.sm_mbf || (s.sm_mbf = i.e(s.M())), s.sm_mbf;
        }
        toObject(e = !1) {
          return s.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(s.M(), e, t);
        }
        static fromObject(e) {
          return i.c(s.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new s();
          return s.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(s.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return s.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(s.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return s.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ReportClientError_Notification";
        }
      }
      class o extends a {
        constructor(e = null) {
          super(),
            o.prototype.identifier || i.a(o.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  identifier: { n: 1, br: i.d.readString, bw: i.h.writeString },
                  message: { n: 2, br: i.d.readString, bw: i.h.writeString },
                  count: { n: 3, br: i.d.readUint32, bw: i.h.writeUint32 },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = i.e(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(o.M(), e, t);
        }
        static fromObject(e) {
          return i.c(o.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new o();
          return o.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(o.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ReportClientError_Notification_Error";
        }
      }
      var l;
      !(function (e) {
        (e.ClientAppInterfaceStatsReport = function (e, t) {
          return e.SendNotification(
            "ClientMetrics.ClientAppInterfaceStatsReport#1",
            t,
            { ePrivilege: 1 }
          );
        }),
          (e.ClientIPv6ConnectivityReport = function (e, t) {
            return e.SendNotification(
              "ClientMetrics.ClientIPv6ConnectivityReport#1",
              t,
              { ePrivilege: 1 }
            );
          }),
          (e.SteamPipeWorkStatsReport = function (e, t) {
            return e.SendNotification(
              "ClientMetrics.SteamPipeWorkStatsReport#1",
              t,
              { ePrivilege: 1 }
            );
          }),
          (e.ReportReactUsage = function (e, t) {
            return e.SendNotification("ClientMetrics.ReportReactUsage#1", t, {
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.ReportClientError = function (e, t) {
            return e.SendNotification("ClientMetrics.ReportClientError#1", t, {
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.ClientBootstrapReport = function (e, t) {
            return e.SendNotification(
              "ClientMetrics.ClientBootstrapReport#1",
              t,
              { ePrivilege: 1 }
            );
          }),
          (e.ClientDownloadRatesReport = function (e, t) {
            return e.SendNotification(
              "ClientMetrics.ClientDownloadRatesReport#1",
              t,
              { ePrivilege: 1 }
            );
          }),
          (e.ClientContentValidationReport = function (e, t) {
            return e.SendNotification(
              "ClientMetrics.ClientContentValidationReport#1",
              t,
              { ePrivilege: 1 }
            );
          }),
          (e.ClientCloudAppSyncStats = function (e, t) {
            return e.SendNotification(
              "ClientMetrics.ClientCloudAppSyncStats#1",
              t,
              { ePrivilege: 1 }
            );
          }),
          (e.ClientDownloadResponseCodeCounts = function (e, t) {
            return e.SendNotification(
              "ClientMetrics.ClientDownloadResponseCodeCounts#1",
              t,
              { ePrivilege: 1 }
            );
          });
      })(l || (l = {}));
    },
    kslQ: function (e, t, r) {
      "use strict";
      (function (e) {
        r.d(t, "a", function () {
          return S;
        });
        var n = r("mrSG"),
          i = r("9XWO"),
          a = r("if9A"),
          s = (r("suz2"), r("+aRA")),
          o = r("GXif"),
          l = r("vj95");
        const c =
          window.addEventListener || (e && e.addEventListener) || (() => {});
        let d,
          u = [],
          m = (e, t) => u.push({ error: e, cCallsitesToIgnore: t });
        const h = !0;
        {
          const e = console.assert;
          console.assert = (t, r, ...n) => {
            t || m(new Error(_(r, ...n)), 2), e.apply(console, [t, r, ...n]);
          };
          const t = console.error;
          (console.error = (e, ...r) => {
            m(new Error(_(e, ...r)), 1), t.apply(console, [e, ...r]);
          }),
            c("error", (e) => {
              m(e.error, 0);
            }),
            (d = window.setTimeout(() => {
              (u = []), (m = () => {});
            }, 3e4));
        }
        const p = { cCallsitesToIgnore: 0, bIncludeMessageInIdentifier: !1 };
        class f {
          constructor(e = !0) {
            (this.m_transport = null),
              (this.m_rgErrorQueue = []),
              (this.m_sendTimer = null),
              (this.m_bEnabled = !0),
              (this.m_bInitialized = !1),
              e
                ? (u.forEach(({ error: e, cCallsitesToIgnore: t }) =>
                    this.ReportError(e, { cCallsitesToIgnore: t })
                  ),
                  (m = (e, t) =>
                    this.ReportError(e, { cCallsitesToIgnore: t })))
                : (m = () => {}),
              (u = []),
              clearTimeout(d),
              window.setTimeout(() => {
                this.m_bInitialized ||
                  ((this.m_bEnabled = !1), (this.m_rgErrorQueue = []));
              }, 3e4);
          }
          Init(e, t, r) {
            (this.m_bInitialized = !0),
              (this.m_strProduct = e),
              (this.m_strVersion = t),
              (this.m_transport = r),
              this.m_bEnabled ||
                (console.error(
                  "Error reporting was initialized after being disabled, possibly dropping errors."
                ),
                (this.m_bEnabled = !0)),
              this.m_rgErrorQueue.length &&
                (this.SendErrorReports(this.m_rgErrorQueue),
                (this.m_rgErrorQueue = []));
          }
          ReportError(e, t) {
            return Object(n.a)(this, void 0, void 0, function* () {
              if (!e)
                return (
                  console.warn(
                    "Failed to report error: ReportError() was called without an error to report."
                  ),
                  null
                );
              try {
                const r = Object.assign(Object.assign({}, p), t);
                if (!this.m_bEnabled) return null;
                0;
                const i = yield (function (e, t) {
                  try {
                    return e.stack && e.stack.match(g)
                      ? (function (e, t) {
                          return Object(n.a)(
                            this,
                            void 0,
                            void 0,
                            function* () {
                              const {
                                  cCallsitesToIgnore: r,
                                  bIncludeMessageInIdentifier: n,
                                } = t,
                                i = e.stack.split("\n");
                              let a = w(i.filter((e) => !!e.match(g))[r]);
                              n && (a = `${a} ${e.message}`);
                              const s = i
                                .map((e) => {
                                  const t = e.match(/(.*)\((.*):(\d+):(\d+)\)/);
                                  if (!t) return e;
                                  if (5 === t.length) {
                                    const [e, r, n, i, a] = t,
                                      s = parseInt(i),
                                      o = parseInt(a);
                                    if (!isNaN(s) && !isNaN(o))
                                      return [r, n, s, o];
                                  }
                                  return e;
                                })
                                .filter((e) => !!e);
                              return {
                                identifier: a,
                                identifierHash: yield v(a),
                                message: s,
                              };
                            }
                          );
                        })(e, t)
                      : e.stack && e.stack.match(b)
                      ? (function (e, t) {
                          return Object(n.a)(
                            this,
                            void 0,
                            void 0,
                            function* () {
                              const {
                                  cCallsitesToIgnore: r,
                                  bIncludeMessageInIdentifier: n,
                                } = t,
                                i = e.stack.split("\n");
                              let a = w(i.filter((e) => !!e.match(b))[r]);
                              n && (a = `${a} ${e.message}`);
                              const s = i
                                .map((e) => {
                                  const t = e.match(/(.*@)?(.*):(\d+):(\d+)/);
                                  if (!t) return e;
                                  if (4 === t.length) {
                                    const [e, r, n, i] = t,
                                      a = parseInt(n),
                                      s = parseInt(i);
                                    if (!isNaN(a) && !isNaN(s))
                                      return [e, r, a, s];
                                  }
                                  return e;
                                })
                                .filter((e) => !!e);
                              return {
                                identifier: a,
                                identifierHash: yield v(a),
                                message: [e.message, ...s],
                              };
                            }
                          );
                        })(e, t)
                      : null;
                  } catch (e) {
                    return (
                      console.warn(`Failed to normalize error stack: ${e}`),
                      null
                    );
                  }
                })(e, r);
                return i ? (this.SendErrorReport(i), i) : null;
              } catch (e) {
                return console.log(`Failed to report error: ${e}`), null;
              }
            });
          }
          SendErrorReport(e) {
            this.m_transport ? this.QueueSend(e) : this.m_rgErrorQueue.push(e);
          }
          QueueSend(e) {
            this.m_rgErrorQueue.push(e),
              this.m_sendTimer ||
                (this.m_sendTimer = window.setTimeout(() => {
                  this.SendErrorReports(this.m_rgErrorQueue),
                    (this.m_rgErrorQueue = []),
                    (this.m_sendTimer = null);
                }, 6e4));
          }
          SendErrorReports(e) {
            if (!e || !e.length) return;
            const t = i.b.Init(a.a),
              r = e.reduce(
                (e, t) => (
                  e[t.identifier]
                    ? e[t.identifier].count++
                    : (e[t.identifier] = { report: t, count: 1 }),
                  e
                ),
                {}
              ),
              n = Object.keys(r).map((e) => {
                const { report: t, count: n } = r[e],
                  i = new a.b();
                return (
                  i.set_count(n),
                  i.set_identifier(t.identifier + " " + t.identifierHash),
                  i.set_message(JSON.stringify(t.message)),
                  i
                );
              });
            t.Body().set_product(this.m_strProduct),
              t.Body().set_version(this.m_strVersion),
              t.Body().set_errors(n),
              a.c.ReportClientError(this.m_transport, t);
          }
          get version() {
            return this.m_strVersion;
          }
          get product() {
            return this.m_strProduct;
          }
          get reporting_enabled() {
            return h;
          }
        }
        function _(e, ...t) {
          if ("string" == typeof e && 0 === t.length) return e;
          return [e, ...t]
            .map((e) => {
              try {
                return String(e);
              } catch (e) {
                return "[Stringify Error]";
              }
            })
            .join(", ");
        }
        const g = /^\s*at .*(\S+:\d+|\(native\))/m,
          b = /(^|@)\S+:\d+/;
        function w(e) {
          return (function (e) {
            const t = "https://",
              r = e.indexOf(t);
            if (-1 === r) return e;
            const n = e.indexOf("/", r + t.length);
            return -1 === n ? e : e.slice(0, r) + e.slice(n);
          })(
            (function (e) {
              const t = e.lastIndexOf("?");
              if (-1 === t) return e;
              const r = e.indexOf(":", t);
              return -1 === r ? e : e.slice(0, t) + e.slice(r);
            })(e)
          );
        }
        let y;
        const S = () => (y || B(new f()), y),
          B = (e) => {
            (y = e),
              s.a.InstallErrorReportingStore(y),
              i.a.InstallErrorReportingStore(y),
              o.b.InstallErrorReportingStore(y),
              l.a.InstallErrorReportingStore(y);
          };
        function v(e) {
          return Object(n.a)(this, void 0, void 0, function* () {
            try {
              const r = yield window.crypto.subtle.digest(
                "SHA-256",
                (function (e) {
                  const t = new ArrayBuffer(2 * e.length),
                    r = new Uint16Array(t);
                  for (let t = 0, n = e.length; t < n; t++)
                    r[t] = e.charCodeAt(t);
                  return t;
                })(e)
              );
              return ((t = r),
              Array.prototype.map
                .call(new Uint8Array(t), (e) =>
                  ("00" + e.toString(16)).slice(-2)
                )
                .join("")).slice(0, 16);
            } catch (e) {
              return "";
            }
            var t;
          });
        }
      }.call(this, r("yLpj")));
    },
    msu0: function (e, t, r) {
      "use strict";
      function n(e) {
        return 3 == e || 6 == e;
      }
      function i(e) {
        return 5 == e || 6 == e;
      }
      r.d(t, "b", function () {
        return n;
      }),
        r.d(t, "a", function () {
          return i;
        }),
        r.d(t, "i", function () {
          return a;
        }),
        r.d(t, "j", function () {
          return s;
        }),
        r.d(t, "h", function () {
          return o;
        }),
        r.d(t, "e", function () {
          return l;
        }),
        r.d(t, "f", function () {
          return c;
        }),
        r.d(t, "d", function () {
          return d;
        }),
        r.d(t, "g", function () {
          return u;
        }),
        r.d(t, "c", function () {
          return m;
        });
      const a = 1,
        s = 4,
        o = "18446744073709551615";
      function l(e, t = "en") {
        switch (e) {
          case 0:
            return "en";
          case 1:
            return "de";
          case 2:
            return "fr";
          case 3:
            return "it";
          case 4:
            return "ko";
          case 5:
            return "es";
          case 6:
            return "zh-cn";
          case 7:
            return "zh-tw";
          case 8:
            return "ru";
          case 9:
            return "th";
          case 10:
            return "ja";
          case 11:
            return "pt";
          case 12:
            return "pl";
          case 13:
            return "da";
          case 14:
            return "nl";
          case 15:
            return "fi";
          case 16:
            return "no";
          case 17:
            return "sv";
          case 18:
            return "hu";
          case 19:
            return "cs";
          case 20:
            return "ro";
          case 21:
            return "tr";
          case 25:
            return "ar";
          case 22:
            return "pt-br";
          case 23:
            return "bg";
          case 24:
            return "el";
          case 26:
            return "uk";
          case 27:
            return "es-419";
          case 28:
            return "vn";
          case 29:
            return "sc-sc";
          default:
            return t;
        }
      }
      const c = (e) => ("koreana" === e ? "korean" : e);
      function d(e, t = "") {
        switch (e) {
          case 0:
            return "english";
          case 1:
            return "german";
          case 2:
            return "french";
          case 3:
            return "italian";
          case 4:
            return "koreana";
          case 5:
            return "spanish";
          case 6:
            return "schinese";
          case 7:
            return "tchinese";
          case 8:
            return "russian";
          case 9:
            return "thai";
          case 10:
            return "japanese";
          case 11:
            return "portuguese";
          case 12:
            return "polish";
          case 13:
            return "danish";
          case 14:
            return "dutch";
          case 15:
            return "finnish";
          case 16:
            return "norwegian";
          case 17:
            return "swedish";
          case 18:
            return "hungarian";
          case 19:
            return "czech";
          case 20:
            return "romanian";
          case 21:
            return "turkish";
          case 25:
            return "arabic";
          case 22:
            return "brazilian";
          case 23:
            return "bulgarian";
          case 24:
            return "greek";
          case 26:
            return "ukrainian";
          case 27:
            return "latam";
          case 28:
            return "vietnamese";
          case 29:
            return "sc_schinese";
          default:
            return t;
        }
      }
      function u(e, t = 0) {
        switch (e) {
          case "english":
            return 0;
          case "german":
            return 1;
          case "french":
            return 2;
          case "italian":
            return 3;
          case "korean":
          case "koreana":
            return 4;
          case "spanish":
            return 5;
          case "schinese":
            return 6;
          case "tchinese":
            return 7;
          case "russian":
            return 8;
          case "thai":
            return 9;
          case "japanese":
            return 10;
          case "portuguese":
            return 11;
          case "polish":
            return 12;
          case "danish":
            return 13;
          case "dutch":
            return 14;
          case "finnish":
            return 15;
          case "norwegian":
            return 16;
          case "swedish":
            return 17;
          case "hungarian":
            return 18;
          case "czech":
            return 19;
          case "romanian":
            return 20;
          case "turkish":
            return 21;
          case "arabic":
            return 25;
          case "brazilian":
            return 22;
          case "bulgarian":
            return 23;
          case "greek":
            return 24;
          case "ukrainian":
            return 26;
          case "latam":
            return 27;
          case "vietnamese":
            return 28;
          case "sc_schinese":
            return 29;
          default:
            return t;
        }
      }
      const m = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 31, 32, 34, 35,
      ];
      var h, p, f, _, g, b, w;
      !(function (e) {
        (e[(e.k_EConnectivityTestResult_Unknown = 0)] =
          "k_EConnectivityTestResult_Unknown"),
          (e[(e.k_EConnectivityTestResult_Connected = 1)] =
            "k_EConnectivityTestResult_Connected"),
          (e[(e.k_EConnectivityTestResult_CaptivePortal = 2)] =
            "k_EConnectivityTestResult_CaptivePortal"),
          (e[(e.k_EConnectivityTestResult_TimedOut = 3)] =
            "k_EConnectivityTestResult_TimedOut"),
          (e[(e.k_EConnectivityTestResult_Failed = 4)] =
            "k_EConnectivityTestResult_Failed"),
          (e[(e.k_EConnectivityTestResult_WifiDisabled = 5)] =
            "k_EConnectivityTestResult_WifiDisabled"),
          (e[(e.k_EConnectivityTestResult_NoLAN = 6)] =
            "k_EConnectivityTestResult_NoLAN");
      })(h || (h = {})),
        (function (e) {
          (e[(e.k_ENetFakeLocalSystemState_Normal = 0)] =
            "k_ENetFakeLocalSystemState_Normal"),
            (e[(e.k_ENetFakeLocalSystemState_NoLAN = 1)] =
              "k_ENetFakeLocalSystemState_NoLAN"),
            (e[(e.k_ENetFakeLocalSystemState_CaptivePortal_Redirected = 2)] =
              "k_ENetFakeLocalSystemState_CaptivePortal_Redirected"),
            (e[(e.k_ENetFakeLocalSystemState_CaptivePortal_InPlace = 3)] =
              "k_ENetFakeLocalSystemState_CaptivePortal_InPlace"),
            (e[(e.k_ENetFakeLocalSystemState_NoInternet = 4)] =
              "k_ENetFakeLocalSystemState_NoInternet"),
            (e[(e.k_ENetFakeLocalSystemState_NoSteam = 5)] =
              "k_ENetFakeLocalSystemState_NoSteam");
        })(p || (p = {})),
        (function (e) {
          (e[(e.k_ESuspendResumeProgressState_Invalid = 0)] =
            "k_ESuspendResumeProgressState_Invalid"),
            (e[(e.k_ESuspendResumeProgressState_Complete = 1)] =
              "k_ESuspendResumeProgressState_Complete"),
            (e[(e.k_ESuspendResumeProgressState_CloudSync = 2)] =
              "k_ESuspendResumeProgressState_CloudSync"),
            (e[(e.k_ESuspendResumeProgressState_LoggingIn = 3)] =
              "k_ESuspendResumeProgressState_LoggingIn"),
            (e[(e.k_ESuspendResumeProgressState_WaitingForApp = 4)] =
              "k_ESuspendResumeProgressState_WaitingForApp"),
            (e[(e.k_ESuspendResumeProgressState_Working = 5)] =
              "k_ESuspendResumeProgressState_Working");
        })(f || (f = {})),
        (function (e) {
          (e[(e.k_EFloatingGamepadTextInputModeModeSingleLine = 0)] =
            "k_EFloatingGamepadTextInputModeModeSingleLine"),
            (e[(e.k_EFloatingGamepadTextInputModeModeMultipleLines = 1)] =
              "k_EFloatingGamepadTextInputModeModeMultipleLines"),
            (e[(e.k_EFloatingGamepadTextInputModeModeEmail = 2)] =
              "k_EFloatingGamepadTextInputModeModeEmail"),
            (e[(e.k_EFloatingGamepadTextInputModeModeNumeric = 3)] =
              "k_EFloatingGamepadTextInputModeModeNumeric");
        })(_ || (_ = {})),
        (function (e) {
          (e[(e.k_EAppUpdateContentType_Content = 0)] =
            "k_EAppUpdateContentType_Content"),
            (e[(e.k_EAppUpdateContentType_Workshop = 1)] =
              "k_EAppUpdateContentType_Workshop"),
            (e[(e.k_EAppUpdateContentType_Shader = 2)] =
              "k_EAppUpdateContentType_Shader"),
            (e[(e.k_EAppUpdateContentType_Max = 3)] =
              "k_EAppUpdateContentType_Max");
        })(g || (g = {})),
        (function (e) {
          (e[(e.k_EOverlayToStoreFlag_None = 0)] =
            "k_EOverlayToStoreFlag_None"),
            (e[(e.k_EOverlayToStoreFlag_AddToCart = 1)] =
              "k_EOverlayToStoreFlag_AddToCart"),
            (e[(e.k_EOverlayToStoreFlag_AddToCartAndShow = 2)] =
              "k_EOverlayToStoreFlag_AddToCartAndShow");
        })(b || (b = {})),
        (function (e) {
          (e[(e.k_EActivateGameOverlayToWebPageMode_Default = 0)] =
            "k_EActivateGameOverlayToWebPageMode_Default"),
            (e[(e.k_EActivateGameOverlayToWebPageMode_Modal = 1)] =
              "k_EActivateGameOverlayToWebPageMode_Modal");
        })(w || (w = {}));
    },
    oleE: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return o;
      });
      var n = r("2lpH"),
        i = r.n(n),
        a = r("msu0"),
        s = r("/Q1a");
      r("f5iL");
      class o {
        constructor(e = 0, t, r, n) {
          e instanceof o
            ? (this.m_ulSteamID = e.m_ulSteamID)
            : "string" == typeof e
            ? (this.m_ulSteamID = i.a.fromString(e, !0))
            : t && r && void 0 !== n
            ? this.SetFromComponents(e, n, r, t)
            : (this.m_ulSteamID = e ? i.a.fromNumber(e, !0) : i.a.UZERO);
        }
        static InitFromAccountID(e) {
          return new o(Number(e), s.d.EUNIVERSE, 1, a.i);
        }
        static InitFromClanID(e) {
          return new o(Number(e), s.d.EUNIVERSE, 7, 0);
        }
        GetAccountID() {
          return this.m_ulSteamID.getLowBitsUnsigned();
        }
        GetInstance() {
          return 1048575 & this.m_ulSteamID.getHighBitsUnsigned();
        }
        GetAccountType() {
          return (this.m_ulSteamID.getHighBitsUnsigned() >> 20) & 15;
        }
        GetUniverse() {
          return (this.m_ulSteamID.getHighBitsUnsigned() >> 24) & 255;
        }
        ConvertTo64BitString() {
          return this.m_ulSteamID.toString();
        }
        Render() {
          switch (this.GetAccountType()) {
            case 0:
              return (
                "[I:" + this.GetUniverse() + ":" + this.GetAccountID() + "]"
              );
            case 7:
              return (
                "[g:" + this.GetUniverse() + ":" + this.GetAccountID() + "]"
              );
            case 4:
              return (
                "[A:" +
                this.GetUniverse() +
                ":" +
                this.GetAccountID() +
                ":" +
                this.GetInstance() +
                "]"
              );
            case 3:
              return (
                "[G:" + this.GetUniverse() + ":" + this.GetAccountID() + "]"
              );
            case 2:
              return (
                "[M:" +
                this.GetUniverse() +
                ":" +
                this.GetAccountID() +
                ":" +
                this.GetInstance() +
                "]"
              );
            case 5:
              return (
                "[P:" + this.GetUniverse() + ":" + this.GetAccountID() + "]"
              );
            case 6:
              return (
                "[C:" + this.GetUniverse() + ":" + this.GetAccountID() + "]"
              );
            default:
              return (
                "[U:" + this.GetUniverse() + ":" + this.GetAccountID() + "]"
              );
          }
        }
        BIsValid() {
          let e = this.GetAccountType();
          if (e <= 0 || e >= 11) return !1;
          let t = this.GetUniverse();
          if (t <= 0 || t >= 5) return !1;
          if (1 == e) {
            if (0 == this.GetAccountID() || this.GetInstance() > a.j) return !1;
          } else if (7 == e) {
            if (0 == this.GetAccountID() || 0 != this.GetInstance()) return !1;
          } else if (3 == e && 0 == this.GetAccountID()) return !1;
          return !0;
        }
        BIsIndividualAccount() {
          return 1 == this.GetAccountType();
        }
        BIsClanAccount() {
          return 7 == this.GetAccountType();
        }
        SetAccountID(e) {
          this.m_ulSteamID = new i.a(
            e,
            this.m_ulSteamID.getHighBitsUnsigned(),
            !0
          );
        }
        SetInstance(e) {
          this.SetFromComponents(
            this.GetAccountID(),
            e,
            this.GetAccountType(),
            this.GetUniverse()
          );
        }
        SetAccountType(e) {
          this.SetFromComponents(
            this.GetAccountID(),
            this.GetInstance(),
            e,
            this.GetUniverse()
          );
        }
        SetUniverse(e) {
          this.SetFromComponents(
            this.GetAccountID(),
            this.GetInstance(),
            this.GetAccountType(),
            e
          );
        }
        SetFromComponents(e, t, r, n) {
          let a = ((255 & n) << 24) + ((15 & r) << 20) + (1048575 & t),
            s = 4294967295 & e;
          this.m_ulSteamID = new i.a(s, a, !0);
        }
      }
    },
    pJv3: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return g;
      });
      var n = r("mrSG"),
        i = r("2vnA"),
        a = r("vDqi"),
        s = r.n(a),
        o = r("oleE"),
        l = (r("1+R+"), r("VnJP")),
        c = r("/Q1a"),
        d = (r("xYro"), r("3u1o")),
        u = r("GXif"),
        m = r("r0f0");
      r("PENG");
      const h = 1e6;
      class p {
        constructor() {
          this.playback_speed = 1;
        }
      }
      class f extends p {}
      class _ extends p {}
      class g {
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
            (this.m_allTimeSnapshot = new b(0)),
            (this.m_rgSnapShots = new Array(new b(0))),
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
            (this.m_fpsMonitor = new y());
        }
        GetBytesReceivedToDisplay() {
          return Object(m.b)(this.m_allTimeSnapshot.m_nBytesReceived, 1);
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
            ? Object(l.d)(this.m_videoBufferedRanges.start(e)) +
                " - " +
                Object(l.d)(this.m_videoBufferedRanges.end(e))
            : Object(u.g)("#DASHPlayerStats_VideoNoRangeInformation");
        }
        GetBufferedAudioSegmentForDisplay(e) {
          return this.m_audioBufferedRanges &&
            e < this.m_audioBufferedRanges.length
            ? Object(l.d)(this.m_audioBufferedRanges.start(e)) +
                " - " +
                Object(l.d)(this.m_audioBufferedRanges.end(e))
            : Object(u.g)("#DASHPlayerStats_AudioNoRangeInformation");
        }
        GetBandwidthStatsToDisplay() {
          if (this.m_rgSnapShots.length < 2)
            return (
              (this.m_allTimeSnapshot.m_nBandwidthMin / h).toFixed(3) +
              " / " +
              (this.m_allTimeSnapshot.m_nBandwidthMax / h).toFixed(3) +
              " / " +
              (this.m_allTimeSnapshot.GetAverageBandwidth() / h).toFixed(3)
            );
          {
            let e = this.m_rgSnapShots[this.m_rgSnapShots.length - 2],
              t = this.m_rgSnapShots[this.m_rgSnapShots.length - 1];
            return (
              (
                (0 == t.m_nBandwidthMin
                  ? e.m_nBandwidthMin
                  : Math.min(e.m_nBandwidthMin, t.m_nBandwidthMin)) / h
              ).toFixed(3) +
              " / " +
              (Math.max(e.m_nBandwidthMax, t.m_nBandwidthMax) / h).toFixed(3) +
              " / " +
              (e.GetAverageBandwidthFromTwo(t) / h).toFixed(3)
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
                      t.m_nSegmentDownloadTimeMinMS
                    )) / 1e3
              ).toFixed(3) +
              " / " +
              (
                Math.max(
                  e.m_nSegmentDownloadTimeMaxMS,
                  t.m_nSegmentDownloadTimeMaxMS
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
          return (this.m_nBandwidthRequired / h).toFixed(3);
        }
        GetBandwithVideoToDisplay() {
          return (this.m_nCurBandwidthVideo / h).toFixed(3);
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
            : Object(u.g)("#DASHPlayerStats_Tracking");
        }
        GetPlaybackRateForDisplay() {
          return this.m_nPlaybackRate.toFixed(1) + "x";
        }
        GetFPSMonitor() {
          return this.m_fpsMonitor;
        }
        SetHTMLVideoPlayerDisplay(e, t, r, n) {
          this.m_htmlVideoResolution != n &&
            ((this.m_htmlVideoResolution = n),
            (this.m_strHtmlVideoDisplay = r + "x" + n)),
            this.m_nPlaybackVideoResolution != t &&
              ((this.m_nPlaybackVideoResolution = t),
              (this.m_strPlaybackVideoResolution = e + "x" + t));
        }
        SetVideoPlaybackResolution(e, t, r) {
          0 == this.m_videoResolution &&
            ((this.m_allTimeSnapshot.m_nInitialVideoResolution = t),
            (this.m_rgSnapShots[
              this.m_rgSnapShots.length - 1
            ].m_nInitialVideoResolution = t)),
            (this.m_strBufferingVideoResolution = e + "x" + t + "@" + r),
            (this.m_videoResolution = t),
            (this.m_frameRate = r);
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
                  e.nFrameRate
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
        SetBroadcasterAndViewerInfo(e, t, r, n, i) {
          (this.m_steamIDBroadcast = e),
            (this.m_steamIDViewer = t),
            (this.m_broadcastID = r),
            (this.m_ulViewerToken = n),
            (this.m_strCDNAuthUrlParameters = i);
        }
        SetAnalyticLinks(e, t, r) {
          (this.m_strStatsLink = e),
            (this.m_strStalledLink = t),
            (this.m_strEventLogLink = r);
        }
        SetVideoInitializationURL(e) {
          let t = new URL(e);
          (this.m_host = t.hostname),
            (this.m_strBroadcastOrigin =
              t.searchParams.get("broadcast_origin") || "");
          let r = this.m_strBroadcastOrigin.indexOf(":");
          -1 !== r &&
            (this.m_strBroadcastOrigin = this.m_strBroadcastOrigin.substr(
              0,
              r
            ));
        }
        SetAudioRate(e) {
          this.m_audioRate = e;
        }
        CaptureFrequentlyUpdatingInformation(e, t) {
          let r = this.ExtractFrameInfo(e);
          this.LogFrameInfo(r), this.LogBufferDuration(t, e);
        }
        LogDownload(e, t) {
          this.m_allTimeSnapshot.SegmentReceived(e, t),
            this.m_rgSnapShots[this.m_rgSnapShots.length - 1].SegmentReceived(
              e,
              t
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
          let r = this.FindBehindSegmentLoader(e, t);
          if (!r)
            return void Object(l.c)(
              "DASHStats: Did not find any audio or video loaders"
            );
          (this.m_allTimeSnapshot.m_nStallEvents += 1),
            (this.m_rgSnapShots[
              this.m_rgSnapShots.length - 1
            ].m_nStallEvents += 1);
          let n = new _();
          this.GatherCommonStats(
            n,
            t,
            r.GetBandwidthRequired(),
            r.GetAvgDownloadRate()
          ),
            (n.last_segment_response =
              this.m_rgSnapShots[
                this.m_rgSnapShots.length - 1
              ].m_nLastSegementDownloadStatus),
            (n.audio_stalled = r.ContainsAudio()),
            this.CaptureActiveDownloads(e),
            (n.active_downloads = this.m_nActiveDownloads),
            (n.vid_down_progress = this.m_nVideoDownloadProgress);
          let i = r.GetDownloadHistory(),
            a = 0;
          for (let e = i.length - 1; e >= 0 && a < 3; --e)
            ++a,
              (n["segment" + a + "_bytes"] = i[e].cubData),
              (n["segment" + a + "_time"] = Math.round(i[e].nDownloadMS) / 1e3);
          this.SendReportToServer(n, this.m_strStalledLink);
        }
        FindBehindSegmentLoader(e, t) {
          let r = !1,
            n = !1,
            i = t.currentTime,
            a = null,
            s = null;
          for (let t of e)
            (s = t.ContainsAudio() ? t : s),
              (a = t.ContainsVideo() ? t : s),
              t.BHasEnoughBuffered(i) &&
                ((n = n || t.ContainsAudio()), (r = r || t.ContainsVideo()));
          return (n = n || null == s), !r || (r && n) ? a : s;
        }
        ExtractFrameInfo(e) {
          let t = 0,
            r = 0;
          if (e.getVideoPlaybackQuality)
            try {
              let n = e.getVideoPlaybackQuality();
              (r = n.totalVideoFrames), (t = n.droppedVideoFrames);
            } catch (e) {
              Object(l.c)(
                "Browser does not support HTMLVideoElement.getVideoPlaybackQuality()",
                e.message
              );
            }
          else
            e.webkitDecodedFrames
              ? ((r = e.webkitDecodedFrames), (t = e.webkitDroppedFrames))
              : e.webkitDecodedFrameCount &&
                ((r = e.webkitDecodedFrameCount),
                (t = e.webkitDroppedFrameCount));
          return { framesDecoded: r, framesDropped: t };
        }
        LogFrameInfo(e) {
          (this.m_allTimeSnapshot.m_nFramesDecoded = e.framesDecoded),
            (this.m_allTimeSnapshot.m_nFramesDropped = e.framesDropped);
          let t = this.m_rgSnapShots[this.m_rgSnapShots.length - 1];
          if (1 == this.m_rgSnapShots.length)
            (t.m_nFramesDecoded = e.framesDecoded),
              (t.m_nFramesDropped = e.framesDropped);
          else {
            let r = this.m_rgSnapShots[this.m_rgSnapShots.length - 2];
            (t.m_nFramesDecoded = e.framesDecoded - r.m_nFramesDecoded),
              (t.m_nFramesDropped = e.framesDropped - r.m_nFramesDropped);
          }
        }
        LogBufferDuration(e, t) {
          this.m_nActiveDownloads = 0;
          for (let r of e)
            r.ContainsAudio()
              ? ((this.m_nAudioBufferedMS = r.GetAmountBufferedMS(
                  t.currentTime
                )),
                (this.m_audioBufferedRanges = r.GetSourceBufferTimeRanges()))
              : r.ContainsVideo() &&
                ((this.m_nVideoBufferedMS = r.GetAmountBufferedMS(
                  t.currentTime
                )),
                (this.m_videoBufferedRanges = r.GetSourceBufferTimeRanges())),
              (this.m_nActiveDownloads += r.GetActiveDownloads()),
              r.ContainsVideo() &&
                (this.m_nVideoDownloadProgress = r.GetActiveDownloadProgress());
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
          let r = this.ExtractFrameInfo(t);
          if (
            r.framesDecoded == this.m_allTimeSnapshot.m_nFramesDecoded &&
            0 ==
              this.m_rgSnapShots[this.m_rgSnapShots.length - 1].m_nBytesReceived
          )
            return void this.CreateNewEmptySnapshot(t.videoHeight);
          this.LogFrameInfo(r), this.LogBufferDuration(e, t);
          let n = new f(),
            i = this.m_rgSnapShots[this.m_rgSnapShots.length - 1];
          (n.frames_decoded = i.m_nFramesDecoded),
            (n.frames_dropped = i.m_nFramesDropped),
            (n.bytes_received = i.m_nBytesReceived),
            (n.seconds_delta = Math.round((Date.now() - i.m_timeMS) / 1e3)),
            (n.failed_segments = i.m_nFailedSegments),
            (n.bw_min = i.m_nBandwidthMin),
            (n.bw_max = i.m_nBandwidthMax),
            (n.audio_buffer = Math.round(this.m_nAudioBufferedMS / 1e3)),
            (n.video_buffer = Math.round(this.m_nVideoBufferedMS / 1e3)),
            (n.seg_time_avg = Math.round(i.GetAverageDownloadTime()) / 1e3),
            (n.seg_time_min = Math.round(i.m_nSegmentDownloadTimeMinMS) / 1e3),
            (n.seg_time_max = Math.round(i.m_nSegmentDownloadTimeMaxMS) / 1e3),
            (n.initial_vid_res = i.m_nInitialVideoResolution),
            (n.ttff = this.m_nTimeToFirstFrameMS),
            (n.seg_duration = this.m_nSegmentDurationMS),
            this.GatherCommonStats(
              n,
              t,
              this.m_nBandwidthRequired,
              i.GetAverageBandwidth()
            ),
            this.CreateNewEmptySnapshot(t.videoHeight),
            this.SendReportToServer(n, this.m_strStatsLink);
        }
        SendReportToServer(e, t) {
          return Object(n.a)(this, void 0, void 0, function* () {
            let r = new URL(t),
              n = new FormData();
            for (let t of Object.keys(e)) n.append(t, e[t]);
            n.append("l", r.searchParams.get("l")),
              n.append("e", r.searchParams.get("e")),
              n.append("h", r.searchParams.get("h")),
              Object(l.c)("CDASHStats Sending Report to Server", e),
              s.a.post(t, n).catch((e) => {
                Object(l.c)("Failed to upload stats: ", e);
              });
          });
        }
        CreateNewEmptySnapshot(e) {
          this.m_rgSnapShots.length >= 5 && this.m_rgSnapShots.shift(),
            this.m_rgSnapShots.push(new b(e));
        }
        GatherCommonStats(e, t, r, n) {
          (e.steamid = this.m_steamIDViewer),
            (e.host = this.m_host),
            (e.playback_position = Math.round(t.currentTime)),
            (e.video_res = this.m_videoResolution),
            (e.audio_rate = this.m_audioRate),
            (e.audio_ch = this.m_audioChannel),
            (e.bw_required = r),
            (e.bw_avg = Math.round(n)),
            (e.broadcast_accountid = this.m_steamIDBroadcast
              ? new o.a(this.m_steamIDBroadcast).GetAccountID()
              : 0),
            (e.useragent = window.navigator.userAgent),
            (e.sessionid = c.d.SESSIONID),
            (e.broadcast_origin = this.m_strBroadcastOrigin);
        }
      }
      Object(n.b)([i.C], g.prototype, "m_allTimeSnapshot", void 0),
        Object(n.b)(
          [i.C],
          g.prototype,
          "m_strBufferingVideoResolution",
          void 0
        ),
        Object(n.b)([i.C], g.prototype, "m_strPlaybackVideoResolution", void 0),
        Object(n.b)([i.C], g.prototype, "m_strHtmlVideoDisplay", void 0),
        Object(n.b)([i.C], g.prototype, "m_nBandwidthRequired", void 0),
        Object(n.b)([i.C], g.prototype, "m_nCurBandwidthVideo", void 0),
        Object(n.b)([i.C], g.prototype, "m_nAudioBufferedMS", void 0),
        Object(n.b)([i.C], g.prototype, "m_nVideoBufferedMS", void 0),
        Object(n.b)([i.C], g.prototype, "m_nActiveDownloads", void 0),
        Object(n.b)([i.C], g.prototype, "m_nVideoDownloadProgress", void 0),
        Object(n.b)([i.C], g.prototype, "m_videoBufferedRanges", void 0),
        Object(n.b)([i.C], g.prototype, "m_audioBufferedRanges", void 0),
        Object(n.b)([i.C], g.prototype, "m_nPlaybackRate", void 0),
        Object(n.b)([i.k], g.prototype, "SetVideoPlaybackResolution", null),
        Object(n.b)([i.k], g.prototype, "SetRepresentation", null),
        Object(n.b)([i.k], g.prototype, "SetCurrentVideoBandwidth", null),
        Object(n.b)(
          [i.k],
          g.prototype,
          "CaptureFrequentlyUpdatingInformation",
          null
        ),
        Object(n.b)([i.k], g.prototype, "LogDownload", null),
        Object(n.b)([i.k], g.prototype, "LogSegmentDownloadFailure", null),
        Object(n.b)([i.k], g.prototype, "LogFrameInfo", null),
        Object(n.b)([i.k], g.prototype, "LogBufferDuration", null);
      class b {
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
          let r = Math.round((8 * e * 1e3) / Math.max(t, 1));
          0 == this.m_nEntries
            ? ((this.m_nSegmentDownloadTimeMinMS = t),
              (this.m_nBandwidthMin = r))
            : ((this.m_nSegmentDownloadTimeMinMS = Math.min(
                t,
                this.m_nSegmentDownloadTimeMinMS
              )),
              (this.m_nBandwidthMin = Math.min(r, this.m_nBandwidthMin))),
            (this.m_nBandwidthMax = Math.max(r, this.m_nBandwidthMax)),
            (this.m_nSegmentDownloadTimeMaxMS = Math.max(
              t,
              this.m_nSegmentDownloadTimeMaxMS
            )),
            (this.m_nBandwidthTotal += r),
            (this.m_nSegmentDownloadTimeTotalMS += t),
            (this.m_nEntries += 1);
        }
      }
      Object(n.b)([i.C], b.prototype, "m_nBytesReceived", void 0),
        Object(n.b)([i.C], b.prototype, "m_nFailedSegments", void 0),
        Object(n.b)([i.C], b.prototype, "m_nStallEvents", void 0),
        Object(n.b)([i.C], b.prototype, "m_nSegmentDownloadTimeMaxMS", void 0),
        Object(n.b)([i.C], b.prototype, "m_nSegmentDownloadTimeMinMS", void 0),
        Object(n.b)([i.C], b.prototype, "m_nBandwidthMin", void 0),
        Object(n.b)([i.C], b.prototype, "m_nBandwidthMax", void 0),
        Object(n.b)([i.C], b.prototype, "m_nFramesDecoded", void 0),
        Object(n.b)([i.C], b.prototype, "m_nFramesDropped", void 0),
        Object(n.b)([i.k], b.prototype, "SegmentReceived", null);
      class w {
        reset(e, t) {
          (this.bDropReading = e), (this.nTotalDecodedFrames = t);
        }
      }
      class y {
        constructor() {
          (this.k_nTestFrequencyMS = 1e3),
            (this.k_nSlidingWindow = 6),
            (this.k_nDroppedFramesThreshold = 1),
            (this.k_nFailThreshold = 3),
            (this.k_nIgnoreReadingAroundResizeMS = 2e3),
            (this.m_schTracker = new d.b()),
            (this.m_rgResultsWindow = []),
            (this.m_nLastResizeMS = 0),
            (this.m_bDroppingFrameDetected = !1),
            (this.m_nCurrentFPS = 0);
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
          let r;
          (r =
            this.m_rgResultsWindow.length >= this.k_nSlidingWindow
              ? this.m_rgResultsWindow.shift()
              : new w()),
            r.reset(e, t),
            this.m_rgResultsWindow.push(r);
        }
      }
      Object(n.b)([i.C], y.prototype, "m_bDroppingFrameDetected", void 0),
        Object(n.b)([i.C], y.prototype, "m_nCurrentFPS", void 0),
        Object(n.b)([i.k.bound], y.prototype, "TakeReading", null);
    },
    r0f0: function (e, t, r) {
      "use strict";
      r.d(t, "b", function () {
        return i;
      }),
        r.d(t, "a", function () {
          return a;
        });
      var n = r("GXif");
      function i(e, t, r, i) {
        let a = t;
        a =
          "number" == typeof a
            ? {
                nDigitsAfterDecimal: t,
                bUseBinary1K: r || void 0 === r,
                bValueIsInBytes: !i,
                bValueIsRate: i,
                nMinimumDigitsAfterDecimal: 0,
              }
            : Object.assign(
                {
                  nDigitsAfterDecimal: 2,
                  bUseBinary1K: !0,
                  bValueIsInBytes: !0,
                  bValueIsRate: !1,
                  nMinimumDigitsAfterDecimal: 0,
                },
                a
              );
        const s = a.bUseBinary1K ? 1024 : 1e3,
          o = s * s,
          l = o * s,
          c = l * s;
        let d,
          u = "";
        e > c
          ? ((d = e / c), (u = "Tera"))
          : e > l
          ? ((d = e / l), (u = "Giga"))
          : e > o
          ? ((d = e / o), (u = "Mega"))
          : e > s
          ? ((d = e / s), (u = "Kilo"))
          : (d = e);
        const m =
          "#" +
          u +
          (a.bValueIsInBytes ? "bytes" : "bits") +
          (a.bValueIsRate ? "_PerSecond" : "");
        return Object(n.g)(
          m,
          d.toLocaleString(n.f.GetPreferredLocales(), {
            minimumFractionDigits: a.nMinimumDigitsAfterDecimal,
            maximumFractionDigits: a.nDigitsAfterDecimal,
          })
        );
      }
      function a(e) {
        return e.toLocaleString(n.f.GetPreferredLocales());
      }
    },
    rMum: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return n;
      });
      class n {
        constructor(e, t = 0, r) {
          (this.m_nOffset = t || 0),
            e instanceof Uint8Array || e instanceof DataView
              ? ((this.m_nLength = r || e.byteLength - this.m_nOffset),
                (this.m_nOffset += e.byteOffset),
                (this.m_viewPacket = new DataView(
                  e.buffer,
                  this.m_nOffset,
                  this.m_nLength
                )))
              : ((this.m_nLength = r || e.byteLength - this.m_nOffset),
                (this.m_viewPacket = new DataView(
                  e,
                  this.m_nOffset,
                  this.m_nLength
                ))),
            (this.m_rgubPacket = new Uint8Array(
              this.m_viewPacket.buffer,
              this.m_viewPacket.byteOffset,
              this.m_viewPacket.byteLength
            )),
            (this.m_iGet = 0),
            (this.m_iPut = 0);
        }
        TellGet() {
          return this.m_iGet + this.m_viewPacket.byteOffset;
        }
        GetPacket() {
          return this.m_viewPacket.buffer;
        }
        GetUint8() {
          return this.m_viewPacket.getUint8(this.m_iGet++);
        }
        GetUint32(e = !0) {
          let t = this.m_viewPacket.getUint32(this.m_iGet, e);
          return (this.m_iGet += 4), t;
        }
        SeekGetHead(e = 0) {
          this.m_iGet = e || 0;
        }
        SeekGetCurrent(e) {
          this.m_iGet += e;
        }
        TellPut() {
          return this.m_iPut + this.m_viewPacket.byteOffset;
        }
        TellMaxPut() {
          return this.m_viewPacket.byteLength;
        }
        PutUint8(e) {
          this.m_viewPacket.setUint8(this.m_iPut++, e);
        }
        PutUint32(e, t = !0) {
          this.m_viewPacket.setUint32(this.m_iPut, e, t), (this.m_iPut += 4);
        }
        PutBytes(e) {
          this.m_rgubPacket.set(e, this.m_iPut), (this.m_iPut += e.length);
        }
        SeekPut(e) {
          this.m_iPut += e;
        }
        GetCountBytesRemaining() {
          return this.m_viewPacket.byteLength - this.m_iGet;
        }
      }
    },
    rSrx: function (e, t, r) {
      "use strict";
      r.d(t, "q", function () {
        return n;
      }),
        r.d(t, "e", function () {
          return i;
        }),
        r.d(t, "d", function () {
          return a;
        }),
        r.d(t, "k", function () {
          return s;
        }),
        r.d(t, "h", function () {
          return o;
        }),
        r.d(t, "o", function () {
          return l;
        }),
        r.d(t, "n", function () {
          return c;
        }),
        r.d(t, "i", function () {
          return d;
        }),
        r.d(t, "j", function () {
          return u;
        }),
        r.d(t, "b", function () {
          return m;
        }),
        r.d(t, "u", function () {
          return h;
        }),
        r.d(t, "g", function () {
          return p;
        }),
        r.d(t, "s", function () {
          return f;
        }),
        r.d(t, "t", function () {
          return _;
        }),
        r.d(t, "r", function () {
          return g;
        }),
        r.d(t, "v", function () {
          return b;
        }),
        r.d(t, "f", function () {
          return w;
        }),
        r.d(t, "m", function () {
          return y;
        }),
        r.d(t, "l", function () {
          return S;
        }),
        r.d(t, "c", function () {
          return B;
        }),
        r.d(t, "p", function () {
          return v;
        }),
        r.d(t, "a", function () {
          return C;
        });
      r("mrSG"), r("ApMK"), r("f5iL");
      function n(e) {
        return null != e && void 0 !== e.focus;
      }
      function i(e, t) {
        for (; t; ) {
          if (
            (t.parentNode.nodeType == Node.DOCUMENT_FRAGMENT_NODE &&
              (t = t.parentNode.host),
            t == e)
          )
            return !0;
          t = t.parentElement;
        }
        return !1;
      }
      function a(e, t) {
        for (; t; ) if ((t = t.parentElement) == e) return !0;
        return !1;
      }
      function s(e, t) {
        let r = 0,
          n = 0;
        return (
          t.right < e.left
            ? (r = e.left - t.right)
            : t.left > e.right && (r = t.left - e.right),
          t.bottom < e.top
            ? (n = e.top - t.bottom)
            : t.top > e.bottom && (n = t.top - e.bottom),
          Math.sqrt(r * r + n * n)
        );
      }
      function o(e, t) {
        return {
          width: t.width,
          height: t.height,
          top: e.screenTop + t.top,
          bottom: e.screenTop + t.bottom,
          left: e.screenLeft + t.left,
          right: e.screenLeft + t.right,
        };
      }
      function l(e) {
        let t;
        return (
          e &&
            n(e.currentTarget) &&
            (t = e.currentTarget.ownerDocument.defaultView),
          t
        );
      }
      function c(e) {
        let t;
        return e && (t = e.ownerDocument.defaultView), t;
      }
      function d(e) {
        let t = window.document;
        try {
          t = window.top.document;
        } catch (e) {}
        let r = t.createElement("textarea");
        (r.textContent = e),
          (r.style.position = "fixed"),
          t.body.appendChild(r),
          r.select();
        try {
          t.execCommand("copy");
        } catch (e) {
          console.warn("Copy to clipboard failed.", e);
        } finally {
          t.body.removeChild(r);
        }
      }
      function u(e) {
        const t = "steam://openurl/";
        e.startsWith(t) && (e = e.slice(t.length)), d(e);
      }
      function m(e) {
        let t = e.ownerDocument;
        return (
          t.fullscreen ||
          t.webkitIsFullScreen ||
          t.mozFullScreen ||
          t.msFullscreenElement
        );
      }
      function h(e, t) {
        let r = e;
        r.requestFullscreen
          ? r.requestFullscreen()
          : r.webkitRequestFullscreen
          ? r.webkitRequestFullscreen()
          : t && t.webkitSetPresentationMode
          ? t.webkitSetPresentationMode("fullscreen")
          : r.mozRequestFullScreen
          ? r.mozRequestFullScreen()
          : r.msRequestFullscreen && r.msRequestFullscreen();
      }
      function p(e) {
        let t = e.ownerDocument;
        t.cancelFullscreen
          ? t.cancelFullscreen()
          : t.webkitCancelFullScreen
          ? t.webkitCancelFullScreen()
          : t.mozCancelFullScreen
          ? t.mozCancelFullScreen()
          : t.msExitFullscreen && t.msExitFullscreen();
      }
      function f(e) {
        return "INPUT" === e.nodeName;
      }
      function _(e) {
        return "TEXTAREA" === e.nodeName;
      }
      function g(e, t) {
        switch (e) {
          case "TEXTAREA":
            return !0;
          case "INPUT":
            switch (t) {
              case "date":
              case "datetime-local":
              case "datetime":
              case "email":
              case "month":
              case "number":
              case "password":
              case "search":
              case "tel":
              case "text":
              case "time":
              case "url":
              case "week":
                return !0;
              default:
                return !1;
            }
          default:
            return !1;
        }
      }
      function b(e) {
        "loading" == document.readyState
          ? document.addEventListener("DOMContentLoaded", e)
          : e();
      }
      function w(e, t) {
        const r = e;
        return (
          (r.lastModifiedDate = new Date()),
          (r.name = t || Date.now().toString()),
          e
        );
      }
      function y(e, t) {
        let r = e.parentElement;
        for (; r; ) {
          if (!t || "x" == t) {
            let e = window.getComputedStyle(r);
            if (
              "scroll" == e.overflowX ||
              "auto" == e.overflowX ||
              "fixed" == e.position
            )
              break;
          }
          if (!t || "y" == t) {
            let e = window.getComputedStyle(r);
            if (
              "scroll" == e.overflowY ||
              "auto" == e.overflowY ||
              "fixed" == e.position
            )
              break;
          }
          r = r.parentElement;
        }
        return r;
      }
      function S(e, t) {
        for (; e; ) {
          if (t(e)) return e;
          e = e.parentElement;
        }
      }
      function B(e, t) {
        if (!("ownerDocument" in e)) return !0;
        const r = e.ownerDocument.defaultView.getComputedStyle(e),
          n = "x" === t ? r.overflowX : r.overflowY;
        return "auto" === n || "scroll" === n;
      }
      function v() {
        return (function (e) {
          const t = {};
          return (
            e.querySelectorAll('link[rel="stylesheet"]').forEach((e) => {
              t[e.href] = e;
            }),
            t
          );
        })(document);
      }
      function C(e, t) {
        M(e.document, t, !0);
      }
      function M(e, t, r) {
        const n = Object.assign({}, t),
          i = e.getElementsByTagName("head")[0],
          a = i.getElementsByTagName("link"),
          s = a.length;
        for (let e = 0; e < s; ++e) {
          const t = a[e];
          n[t.href] ? delete n[t.href] : r && t.parentNode.removeChild(t);
        }
        let o = [];
        for (let t in n) {
          const r = n[t],
            i = e.createElement("link");
          for (let e = 0; e < r.attributes.length; e++) {
            let t = r.attributes.item(e);
            i.setAttribute(t.name, t.value);
          }
          o.push(i);
        }
        return i.prepend(...o), o;
      }
    },
    rmVU: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return m;
      });
      var n = r("mrSG"),
        i = r("H7XF"),
        a = r("hRO2"),
        s = r("9XWO"),
        o = r("vYsE"),
        l = r("vDqi"),
        c = r.n(l),
        d = (r("msu0"), r("rMum")),
        u = (r("6cEw"), r("oleE"));
      r("XThB"), r("3dpo");
      a.Message;
      class m {
        constructor(e, t, r = !1) {
          (this.m_webApiAccessToken = ""),
            (this.m_bJsonMode = !1),
            (this.m_strWebAPIBaseURL = e),
            (this.m_webApiAccessToken = t),
            (this.m_bJsonMode = r),
            this.ConstructServiceTransport();
        }
        WaitUntilLoggedOn() {
          return Promise.resolve();
        }
        GetServerRTime32() {
          return Number(new Date());
        }
        get steamid() {
          return new u.a();
        }
        RTime32ToDate(e) {
          return new Date(1e3 * e);
        }
        GetServiceTransport() {
          return this.m_ServiceTransport;
        }
        GetWebAPIAccessToken() {
          return this.m_webApiAccessToken;
        }
        GetAnonymousServiceTransport() {
          return this.m_AnonymousServiceTransport;
        }
        ConstructServiceTransport() {
          (this.m_ServiceTransport = {
            SendMsg: this.SendMsgAndAwaitResponse.bind(this, { bSendAuth: !0 }),
            SendNotification: this.SendNotification.bind(this, {
              bSendAuth: !0,
            }),
          }),
            (this.m_AnonymousServiceTransport = {
              SendMsg: this.SendMsgAndAwaitResponse.bind(this, {
                bSendAuth: !1,
              }),
              SendNotification: this.SendNotification.bind(this, {
                bSendAuth: !1,
              }),
            });
        }
        SendMsgAndAwaitResponse(e, t, r, i, o) {
          return Object(n.a)(this, void 0, void 0, function* () {
            let n = null;
            try {
              let l = yield this.Send(e, t, r, o);
              if (200 != l.status || !l.data) throw new Error("Request Error");
              if (
                ((n = s.b.Init(i, 147)),
                l.headers &&
                  (l.headers["x-eresult"] &&
                    n.Hdr().set_eresult(parseInt(l.headers["x-eresult"])),
                  l.headers["x-error_message"] &&
                    n.Hdr().set_error_message(l.headers["x-error_message"])),
                this.m_bJsonMode)
              )
                n.SetBodyJSON(l.data.response);
              else {
                let e = new d.a(l.data),
                  t = new a.BinaryReader(
                    e.GetPacket(),
                    e.TellGet(),
                    e.GetCountBytesRemaining()
                  );
                i.deserializeBinaryFromReader(n.Body(), t);
              }
              0;
            } catch (e) {
              n = this.CreateFailedMsgProtobuf(i, 3, null);
            }
            return n;
          });
        }
        SendNotification(e, t, r, n) {
          return this.Send(e, t, r, n), !0;
        }
        Send(e, t, r, n) {
          let a = this.CreateWebAPIURL(t),
            s = r.SerializeBody(),
            o = i.fromByteArray(s);
          const l = n.eWebAPIKeyRequirement;
          let d = 0 == n.ePrivilege && 1 == l,
            u = {
              responseType: this.m_bJsonMode ? "json" : "arraybuffer",
              params: {},
            };
          if (
            (e.bSendAuth ||
              1 == l ||
              console.error(
                `Attempting to invoke service ${t} without auth, but auth is required.`
              ),
            this.m_webApiAccessToken &&
              e.bSendAuth &&
              !d &&
              (u.params.access_token = this.m_webApiAccessToken),
            !n.bConstMethod)
          ) {
            const e = new FormData();
            return (
              this.m_bJsonMode
                ? e.append("input_json", JSON.stringify(r.Body().toObject()))
                : e.append("input_protobuf_encoded", o),
              c.a.post(a, e, u)
            );
          }
          return (
            this.m_bJsonMode
              ? (u.params = Object.assign(Object.assign({}, u.params), {
                  input_json: JSON.stringify(r.Body().toObject()),
                }))
              : (u.params = Object.assign(Object.assign({}, u.params), {
                  input_protobuf_encoded: o,
                })),
            c.a.get(a, u)
          );
        }
        CreateWebAPIURL(e) {
          let t = e.match(/([^\.]+)\.(.+)#(\d+)/);
          return t && 4 == t.length
            ? `${this.m_strWebAPIBaseURL}I${t[1]}Service/${t[2]}/v${t[3]}`
            : null;
        }
        CreateFailedMsgProtobuf(e, t, r) {
          let n = s.b.Init(e);
          return (
            n.Hdr().set_eresult(2),
            n.Hdr().set_transport_error(t),
            r && n.Hdr().set_error_message(r),
            n
          );
        }
      }
      Object(n.b)([o.a], m.prototype, "SendMsgAndAwaitResponse", null),
        Object(n.b)([o.a], m.prototype, "SendNotification", null),
        Object(n.b)([o.a], m.prototype, "Send", null);
    },
    sTxY: function (e, t, r) {
      "use strict";
      r("msu0");
    },
    suz2: function (e, t, r) {},
    uhdG: function (e, t, r) {
      var n = {
        "./sales_brazilian.json": ["+cMs", 105],
        "./sales_bulgarian.json": ["ObVs", 106],
        "./sales_czech.json": ["CoMO", 107],
        "./sales_danish.json": ["G2Cs", 108],
        "./sales_dutch.json": ["qEt3", 109],
        "./sales_english.json": ["EnkW", 110],
        "./sales_finnish.json": ["aW7y", 111],
        "./sales_french.json": ["zxZG", 112],
        "./sales_german.json": ["2ydi", 113],
        "./sales_greek.json": ["Xebg", 114],
        "./sales_hungarian.json": ["AGuh", 115],
        "./sales_italian.json": ["/ptQ", 116],
        "./sales_japanese.json": ["gLno", 117],
        "./sales_koreana.json": ["FMlb", 118],
        "./sales_latam.json": ["qta4", 119],
        "./sales_norwegian.json": ["7zdQ", 120],
        "./sales_polish.json": ["ViiN", 121],
        "./sales_portuguese.json": ["wIrF", 122],
        "./sales_romanian.json": ["rBcb", 123],
        "./sales_russian.json": ["3DF0", 124],
        "./sales_sc_schinese.json": ["K/cD", 125],
        "./sales_schinese.json": ["hUJS", 126],
        "./sales_spanish.json": ["6i74", 127],
        "./sales_swedish.json": ["4vnE", 128],
        "./sales_tchinese.json": ["9uzb", 129],
        "./sales_thai.json": ["NP1P", 130],
        "./sales_turkish.json": ["jIRL", 131],
        "./sales_ukrainian.json": ["TgQj", 132],
        "./sales_vietnamese.json": ["EKJ7", 133],
      };
      function i(e) {
        if (!r.o(n, e))
          return Promise.resolve().then(function () {
            var t = new Error("Cannot find module '" + e + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          });
        var t = n[e],
          i = t[0];
        return r.e(t[1]).then(function () {
          return r.t(i, 3);
        });
      }
      (i.keys = function () {
        return Object.keys(n);
      }),
        (i.id = "uhdG"),
        (e.exports = i);
    },
    vEiK: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return i;
      });
      var n = r("q1tI");
      const i = n.createContext({ bCanUseLink: !1 });
    },
    vYsE: function (e, t, r) {
      "use strict";
      function n(e, t, r) {
        return {
          get() {
            let e = r.value.bind(this);
            return (
              this.hasOwnProperty(t) ||
                Object.defineProperty(this, t, { value: e }),
              e
            );
          },
        };
      }
      r.d(t, "a", function () {
        return n;
      });
    },
    vj95: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return o;
      });
      var n = r("mrSG"),
        i = r("9XWO"),
        a = (r("6cEw"), r("hRO2"), r("2vnA"));
      r("msu0"), r("XThB"), r("suz2");
      class s {
        constructor() {
          (this.m_mapCallbacks = new Map()),
            (this.m_rgRegisteredEMsgs = []),
            (this.m_mapServiceMethodHandlers = new Map()),
            (this.m_rgRegisteredServiceMethodHandlers = []);
        }
        InstallErrorReportingStore(e) {
          this.m_ErrorReportingStore = e;
        }
        DispatchMsgToHandlers(e, t) {
          let r = e.GetEMsg();
          if (146 == r) {
            let r = e.Hdr().target_job_name();
            if (r) {
              let n = this.m_mapServiceMethodHandlers.get(r);
              if (n) {
                this.DEBUG_LogMessageDispatch(e, n[0]);
                for (let r of n)
                  try {
                    r.invoke(e, t);
                  } catch (e) {
                    e instanceof Error && this.m_ErrorReportingStore
                      ? this.m_ErrorReportingStore.ReportError(e)
                      : console.error(
                          "MessageHandlers failed to dispatch message to handler: ",
                          e
                        );
                  }
                return !0;
              }
            }
          } else {
            let t = this.m_mapCallbacks.get(r);
            if (t) {
              this.DEBUG_LogMessageDispatch(e, t[0]);
              for (let r of t)
                try {
                  r.invoke(e);
                } catch (e) {
                  e instanceof Error && this.m_ErrorReportingStore
                    ? this.m_ErrorReportingStore.ReportError(e)
                    : console.error(
                        "MessageHandlers failed to dispatch message to handler: ",
                        e
                      );
                }
              return !0;
            }
          }
          return !1;
        }
        DEBUG_LogMessageDispatch(e, t) {
          0;
        }
        get emsg_list() {
          return this.m_rgRegisteredEMsgs;
        }
        get servicemethod_list() {
          return this.m_rgRegisteredServiceMethodHandlers;
        }
        AddCallback(e, t, r) {
          let n = this.m_mapCallbacks.get(e);
          return (
            n ||
              ((n = []),
              this.m_mapCallbacks.set(e, n),
              this.m_rgRegisteredEMsgs.push(e)),
            n.push({ invoke: r, msgClass: t }),
            {
              invoke: r,
              unregister: () => {
                let t = this.m_mapCallbacks.get(e);
                if (t)
                  for (let e = 0; e < t.length; e++)
                    t[e].invoke == r && (t.splice(e, 1), e--);
              },
            }
          );
        }
        AddServiceMethodHandler(e, t) {
          let r = (r, n) => {
            let a = i.b.InitFromMsg(e.request, r),
              s = i.b.Init(e.response, 147),
              o = t(a, s),
              l = (e) => {
                s.Hdr().set_eresult(e), n(s);
              };
            o instanceof Promise
              ? o.then(l).catch(() => {
                  l(2);
                })
              : l(o);
          };
          return (
            this.m_mapServiceMethodHandlers.has(e.name)
              ? console.error("Duplicate registration for method " + e.name)
              : (this.m_mapServiceMethodHandlers.set(e.name, [
                  { invoke: r, msgClass: e.request },
                ]),
                this.m_rgRegisteredServiceMethodHandlers.push(e.name)),
            {
              invoke: r,
              unregister: () => {
                let t = this.m_mapServiceMethodHandlers.get(e.name);
                if (t)
                  for (let e = 0; e < t.length; e++)
                    t[e].invoke == r && (t.splice(e, 1), e--);
              },
            }
          );
        }
        AddServiceNotificationHandler(e, t) {
          let r = (r, n) => {
              let a = i.b.InitFromMsg(e.request, r);
              t(a);
            },
            n = this.m_mapServiceMethodHandlers.get(e.name);
          return (
            n ||
              ((n = []),
              this.m_mapServiceMethodHandlers.set(e.name, n),
              this.m_rgRegisteredServiceMethodHandlers.push(e.name)),
            n.push({ invoke: r, msgClass: e.request }),
            {
              invoke: r,
              unregister: () => {
                let t = this.m_mapServiceMethodHandlers.get(e.name);
                if (t)
                  for (let e = 0; e < t.length; e++)
                    t[e].invoke == r && (t.splice(e, 1), e--);
              },
            }
          );
        }
      }
      Object(n.b)([a.C], s.prototype, "m_rgRegisteredEMsgs", void 0),
        Object(n.b)(
          [a.C],
          s.prototype,
          "m_rgRegisteredServiceMethodHandlers",
          void 0
        );
      let o = new s();
    },
    wgTw: function (e, t, r) {
      "use strict";
      r.d(t, "b", function () {
        return c;
      }),
        r.d(t, "a", function () {
          return d;
        }),
        r.d(t, "c", function () {
          return m;
        });
      var n = r("hRO2"),
        i = r("3dpo");
      const a = n.Message;
      class s extends a {
        constructor(e = null) {
          super(),
            s.prototype.video_id || i.a(s.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            s.sm_m ||
              (s.sm_m = {
                proto: s,
                fields: {
                  video_id: {
                    n: 1,
                    br: i.d.readUint64String,
                    bw: i.h.writeUint64String,
                  },
                  video_url: { n: 2, br: i.d.readString, bw: i.h.writeString },
                },
              }),
            s.sm_m
          );
        }
        static MBF() {
          return s.sm_mbf || (s.sm_mbf = i.e(s.M())), s.sm_mbf;
        }
        toObject(e = !1) {
          return s.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(s.M(), e, t);
        }
        static fromObject(e) {
          return i.c(s.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new s();
          return s.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(s.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return s.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(s.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return s.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_ClientGetVideoURL_Response";
        }
      }
      class o extends a {
        constructor(e = null) {
          super(),
            o.prototype.encryption_key || i.a(o.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  encryption_key: {
                    n: 1,
                    br: i.d.readBytes,
                    bw: i.h.writeBytes,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = i.e(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(o.M(), e, t);
        }
        static fromObject(e) {
          return i.c(o.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new o();
          return o.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(o.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_UnlockedH264_Notification";
        }
      }
      class l extends a {
        constructor(e = null) {
          super(),
            l.prototype.app_id || i.a(l.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  app_id: { n: 1, br: i.d.readUint32, bw: i.h.writeUint32 },
                  opf_settings: {
                    n: 2,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = i.e(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(l.M(), e, t);
        }
        static fromObject(e) {
          return i.c(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFovasVideo_ClientGetOPFSettings_Response";
        }
      }
      class c extends a {
        constructor(e = null) {
          super(),
            c.prototype.app_id || i.a(c.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  app_id: { n: 1, br: i.d.readUint32, bw: i.h.writeUint32 },
                  playback_position_in_seconds: {
                    n: 2,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                  video_track_id: {
                    n: 3,
                    br: i.d.readUint64String,
                    bw: i.h.writeUint64String,
                  },
                  audio_track_id: {
                    n: 4,
                    br: i.d.readUint64String,
                    bw: i.h.writeUint64String,
                  },
                  timedtext_track_id: {
                    n: 5,
                    br: i.d.readUint64String,
                    bw: i.h.writeUint64String,
                  },
                  last_modified: {
                    n: 6,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                  hide_from_watch_history: {
                    n: 7,
                    d: !1,
                    br: i.d.readBool,
                    bw: i.h.writeBool,
                  },
                  hide_from_library: {
                    n: 8,
                    d: !1,
                    br: i.d.readBool,
                    bw: i.h.writeBool,
                  },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = i.e(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(c.M(), e, t);
        }
        static fromObject(e) {
          return i.c(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "VideoBookmark";
        }
      }
      class d extends a {
        constructor(e = null) {
          super(),
            d.prototype.bookmarks || i.a(d.M()),
            a.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: { bookmarks: { n: 1, c: c, r: !0, q: !0 } },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = i.e(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(d.M(), e, t);
        }
        static fromObject(e) {
          return i.c(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_SetVideoBookmark_Notification";
        }
      }
      class u extends a {
        constructor(e = null) {
          super(),
            u.prototype.bookmarks || i.a(u.M()),
            a.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: { bookmarks: { n: 1, c: c, r: !0, q: !0 } },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = i.e(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(u.M(), e, t);
        }
        static fromObject(e) {
          return i.c(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_GetVideoBookmarks_Response";
        }
      }
      var m, h, p;
      !(function (e) {
        (e.ClientGetVideoURL = function (e, t) {
          return e.SendMsg("Video.ClientGetVideoURL#1", t, s, {
            ePrivilege: 1,
          });
        }),
          (e.SetVideoBookmark = function (e, t) {
            return e.SendNotification("Video.SetVideoBookmark#1", t, {
              ePrivilege: 1,
            });
          }),
          (e.GetVideoBookmarks = function (e, t) {
            return e.SendMsg("Video.GetVideoBookmarks#1", t, u, {
              ePrivilege: 1,
            });
          });
      })(m || (m = {})),
        (function (e) {
          e.NotifyUnlockedH264Handler = {
            name: "VideoClient.NotifyUnlockedH264#1",
            request: o,
          };
        })(h || (h = {})),
        (function (e) {
          e.ClientGetOPFSettings = function (e, t) {
            return e.SendMsg("FovasVideo.ClientGetOPFSettings#1", t, l, {
              ePrivilege: 1,
            });
          };
        })(p || (p = {}));
    },
    xYro: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return h;
      }),
        r.d(t, "e", function () {
          return p;
        }),
        r.d(t, "f", function () {
          return f;
        }),
        r.d(t, "c", function () {
          return _;
        }),
        r.d(t, "g", function () {
          return g;
        }),
        r.d(t, "d", function () {
          return b;
        }),
        r.d(t, "b", function () {
          return w;
        });
      var n = r("/Q1a"),
        i = r("VnJP");
      function a(e, t) {
        let r = e.getElementsByTagName("MPD");
        return r && 1 == r.length ? r[0] : null;
      }
      function s(e, t) {
        for (let r = 0; r < e.children.length; r++) {
          let n = e.children[r];
          if (n.tagName == t) return n;
        }
        return null;
      }
      function o(e, t) {
        let r = e.getAttribute(t);
        if (!r) return null;
        let n = new Date(r);
        return "[object Date]" === Object.prototype.toString.call(n) ? n : null;
      }
      function l(e, t) {
        let r = e.getAttribute(t);
        if (!r) return null;
        let n = 0,
          i = r.match(/(\d*)H/);
        return (
          i && (n += 60 * parseFloat(i[1]) * 60),
          (i = r.match(/(\d*)M/)),
          i && (n += 60 * parseFloat(i[1])),
          (i = r.match(/(\d*\.?\d*)S/)),
          i && (n += parseFloat(i[1])),
          n
        );
      }
      function c(e, t) {
        let r = e.getAttribute(t);
        return r
          ? ((r = r.toLowerCase()), "true" == r || ("false" != r && null))
          : null;
      }
      function d(e, t) {
        let r = e.getAttribute(t);
        return r ? parseInt(r) : null;
      }
      function u(e, t) {
        let r = e.getAttribute(t);
        return r || "";
      }
      function m(e, t, r) {
        return (e = (e = e.replace("$RepresentationID$", t)).replace(
          "$Number$",
          r.toString()
        ));
      }
      function h(e) {
        return (
          0 == e.rgRoles.length || e.rgRoles.findIndex((e) => "main" == e) >= 0
        );
      }
      function p(e) {
        return e
          ? 1e3 == e.segmentTemplate.nTimeScale
            ? e.segmentTemplate.nDuration
            : (e.segmentTemplate.nDuration / e.segmentTemplate.nTimeScale) * 1e3
          : 0;
      }
      function f(e, t) {
        let r = p(e);
        return Math.floor(t / r) + 1;
      }
      function _(e, t, r) {
        return m(e + t.segmentTemplate.strInitialization, r.strID, 0);
      }
      function g(e, t, r, n) {
        return m(e + t.segmentTemplate.strMedia, r.strID, n);
      }
      function b(e, t, r) {
        if (!e.IsLiveContent()) return 0;
        let n = p(t);
        return (
          (r - t.segmentTemplate.nStartNumber) * n - e.GetDurationSinceStarted()
        );
      }
      class w {
        constructor() {
          (this.m_nMinBufferTime = 0),
            (this.m_dtAvailabilityStartTime = null),
            (this.m_dtPublishTime = null),
            (this.m_nMinimumUpdatePeriod = 0),
            (this.m_nTimeShiftBufferDepth = 0),
            (this.m_dtMediaPresentationDuration = null),
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
                (e) => e.bIsTimedText
              );
        }
        IsLiveContent() {
          return "dynamic" == this.GetType();
        }
        GetAdaptationByTrackID(e) {
          if (!this.m_rgPeriods || 0 == this.m_rgPeriods.length) return null;
          let t = this.m_rgPeriods[0];
          for (let r of t.rgAdaptationSets) if (e == r.strID) return r;
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
          return !this.IsLiveContent() && this.m_rgPeriods.length > 0
            ? this.GetStartTime() + this.m_rgPeriods[0].nDuration
            : Number.MAX_VALUE;
        }
        GetLowestRepresentation(e) {
          let t = this.GetAdaptationByTrackID(e);
          if (!t) return null;
          let r = t.rgRepresentations[0];
          for (let e of t.rgRepresentations)
            e.nBandwidth < r.nBandwidth && (r = e);
          return r;
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
        ParseRepresentation(e, t) {
          const r = t;
          let n = {
            strID: u(e, "id"),
            strMimeType: u(e, "mimeType"),
            strCodecs: u(e, "codecs"),
            nBandwidth: d(e, "bandwidth"),
          };
          if (r.bContainsVideo) {
            if (
              ((n.nWidth = d(e, "width")),
              (n.nHeight = d(e, "height")),
              (n.nFrameRate = d(e, "frameRate")),
              !(n.strID && n.strMimeType && n.strCodecs && n.nBandwidth))
            )
              return (
                Object(i.c)("MPD - Representation Video Data Missing"), null
              );
          } else if (r.bContainsAudio) {
            n.nAudioSamplingRate = d(e, "audioSamplingRate");
            let t = s(e, "AudioChannelConfiguration");
            if (
              (t && (n.nAudioChannels = d(t, "value")),
              n.nAudioChannels || (n.nAudioChannels = 2),
              !(
                n.strID &&
                n.strMimeType &&
                n.strCodecs &&
                n.nAudioSamplingRate &&
                n.nAudioChannels
              ))
            )
              return (
                Object(i.c)("MPD - Representation Audio Data Missing"), null
              );
          }
          return n;
        }
        BParse(e) {
          let t = new DOMParser().parseFromString(e, "application/xml"),
            r = a(t);
          if (!r) return !1;
          let h = r.getAttribute("type");
          if (
            ((this.m_nMinBufferTime = l(r, "minBufferTime")), "dynamic" == h)
          ) {
            if (
              ((this.m_strType = "dynamic"),
              (this.m_dtAvailabilityStartTime = o(r, "availabilityStartTime")),
              (this.m_dtPublishTime = o(r, "publishTime")),
              (this.m_nMinimumUpdatePeriod = l(r, "minimumUpdatePeriod")),
              (this.m_nTimeShiftBufferDepth = l(r, "timeShiftBufferDepth")),
              !(
                this.m_dtAvailabilityStartTime &&
                this.m_dtPublishTime &&
                this.m_nMinimumUpdatePeriod &&
                this.m_nMinBufferTime &&
                this.m_nTimeShiftBufferDepth
              ))
            )
              return !1;
          } else {
            if ("static" != h) return Object(i.c)("MPD - Unknown type"), !1;
            if (
              ((this.m_strType = "static"),
              (this.m_dtMediaPresentationDuration = o(
                r,
                "mediaPresentationDuration"
              )),
              !this.m_nMinBufferTime || !this.m_dtMediaPresentationDuration)
            )
              return (
                Object(i.c)(
                  "MPD - Missing Buffer Time or Presentation Duration"
                ),
                !1
              );
          }
          let p = s(r, "BASEURL");
          p && (this.m_strBaseURL = p.textContent);
          let f = s(r, "Analytics");
          f &&
            ((this.m_strStatsLink = u(f, "statslink")),
            (this.m_strStalledLink = u(f, "stalledlink")),
            (this.m_strEventLogLink = u(f, "eventlink")));
          let _ = t.getElementsByTagName("Period");
          if (0 == _.length) return !1;
          let g = _[0],
            b = {
              strID: u(g, "id"),
              nStart: l(g, "start"),
              nDuration: l(g, "duration"),
              rgAdaptationSets: [],
            };
          if (!b.strID || null === b.nStart)
            return Object(i.c)("MPD - Missing Period Information."), !1;
          (this.m_rgPeriods = []), this.m_rgPeriods.push(b);
          let w = g.getElementsByTagName("AdaptationSet");
          for (let e = 0; e < w.length; e++) {
            let t = w[e],
              r = u(t, "description"),
              a = u(t, "lang"),
              o = {
                bSegmentAlignment: c(t, "segmentAlignment"),
                bIsTimedText: "text/vtt" == u(t, "mimeType"),
                strLanguage: u(t, "lang"),
                bContainsVideo: !1,
                bContainsAudio: !1,
                bContainsGame: !1,
                strDescription: r || a,
                strForceSub: u(t, "forceSub"),
                strID: u(t, "id"),
                rgRoles: [],
                rgRepresentations: [],
                thumbnails: null,
                segmentTemplate: null,
              };
            if ((b.rgAdaptationSets.push(o), o.bIsTimedText)) {
              o.rgRoles.push("subtitle");
              let e = t.getElementsByTagName("Role");
              for (let t = 0; t < e.length; t++) {
                let r = u(e[t], "value");
                r && "subtitle" != r && o.rgRoles.push(r);
              }
              let r = t.getElementsByTagName("Representation");
              for (let e = 0; e < r.length; e++) {
                let t = r[e],
                  a = {
                    strID: u(t, "id"),
                    nBandwidth: d(t, "bandwidth"),
                    strClosedCaptionFile: "",
                  },
                  l = s(t, "BaseURL"),
                  c = l ? l.textContent : "";
                if (!c) {
                  Object(i.c)(
                    "Closed Caption File has no BaseURL for (id): " + a.strID
                  );
                  continue;
                }
                a.strClosedCaptionFile = this.m_strBaseURL + m(c, a.strID, 0);
                ("store" != Object(n.g)() && "dev" != n.d.WEB_UNIVERSE) ||
                  (a.strClosedCaptionFile =
                    n.d.STORE_BASE_URL +
                    "vtt/video/" +
                    a.strClosedCaptionFile.substr(
                      "https://steamvideo-a.akamaihd.net/video/".length
                    )),
                  o.rgRepresentations.push(a);
              }
              continue;
            }
            if (!o.bSegmentAlignment)
              return Object(i.c)("MPD - Segment Alignment Missing"), !1;
            let l = t.getElementsByTagName("ContentComponent");
            for (let e = 0; e < l.length; e++) {
              let t = u(l[e], "contentType");
              "video" == t && (o.bContainsVideo = !0),
                "audio" == t && (o.bContainsAudio = !0),
                "game" == t && (o.bContainsGame = !0);
            }
            if (o.bContainsVideo) {
              let e = s(t, "Thumbnails");
              if (e) {
                let t = d(e, "sheet"),
                  r = d(e, "period");
                o.thumbnails = {
                  nPeriod: r,
                  strTemplate: u(e, "template"),
                  nSheet: t,
                  nSheetSeconds: t * r,
                };
              }
            }
            let h = t.getElementsByTagName("Role");
            for (let e = 0; e < h.length; e++) {
              let t = u(h[e], "value");
              t && o.rgRoles.push(t);
            }
            let p = t.getElementsByTagName("SegmentTemplate");
            if (0 == p.length)
              return Object(i.c)("MPD - Segment Template Missing"), !1;
            let f = p[0];
            o.segmentTemplate = {
              nTimeScale: d(f, "timescale"),
              nDuration: d(f, "duration"),
              nStartNumber: d(f, "startNumber"),
              strMedia: u(f, "media"),
              strInitialization: "",
            };
            let _ = o.segmentTemplate;
            if (
              (o.bContainsGame
                ? (_.strInitialization = _.strMedia)
                : (_.strInitialization = u(f, "initialization")),
              !(
                _.nTimeScale &&
                _.nDuration &&
                _.nStartNumber &&
                _.strMedia &&
                _.strInitialization
              ))
            )
              return Object(i.c)("MPD - Segment Template Data Missing"), !1;
            let g = t.getElementsByTagName("Representation");
            for (let e = 0; e < g.length; e++) {
              let t = g[e],
                r = this.ParseRepresentation(t, o);
              if (!r) return !1;
              o.rgRepresentations.push(r);
            }
          }
          return !0;
        }
        BUpdate(e) {
          let t = new DOMParser().parseFromString(e, "application/xml"),
            r = a(t);
          if (!r) return !1;
          if (this.IsLiveContent()) {
            let e = t.getElementsByTagName("Period");
            if (0 == e.length) return !1;
            let r = e[0].getElementsByTagName("AdaptationSet");
            for (let e = 0; e < r.length; e++) {
              let t = r[e],
                n = u(t, "id"),
                a = this.GetAdaptationByTrackID(n);
              if (a) {
                const e = t.getElementsByTagName("SegmentTemplate");
                if (0 == e.length)
                  return Object(i.c)("MPD - Segment Template Missing"), !1;
                const r = e[0];
                a.segmentTemplate.strMedia = u(r, "media");
                let n = t.getElementsByTagName("Representation");
                if (n.length > 1)
                  for (let e = 0; e < n.length; e++) {
                    let t = n[e],
                      r = this.ParseRepresentation(t, a),
                      i = !0;
                    for (let e of a.rgRepresentations)
                      if (r.strID == e.strID) {
                        i = !1;
                        break;
                      }
                    i && a.rgRepresentations.push(r);
                  }
                break;
              }
            }
          }
          let n = s(r, "Analytics");
          return (
            n &&
              ((this.m_strStatsLink = u(n, "statslink")),
              (this.m_strStalledLink = u(n, "stalledlink")),
              (this.m_strEventLogLink = u(n, "eventlink"))),
            !0
          );
        }
      }
    },
    yfxr: function (e, t, r) {
      "use strict";
      r.d(t, "f", function () {
        return o;
      }),
        r.d(t, "d", function () {
          return T;
        }),
        r.d(t, "c", function () {
          return L;
        }),
        r.d(t, "g", function () {
          return R;
        }),
        r.d(t, "a", function () {
          return x;
        }),
        r.d(t, "b", function () {
          return O;
        }),
        r.d(t, "e", function () {
          return G;
        });
      var n = r("hRO2"),
        i = r("3dpo");
      r("Qhkv"), r("Nr4G");
      const a = n.Message;
      class s extends a {
        constructor(e = null) {
          super(),
            s.prototype.type || i.a(s.M()),
            a.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            s.sm_m ||
              (s.sm_m = {
                proto: s,
                fields: {
                  type: { n: 1, br: i.d.readString, bw: i.h.writeString },
                  rating: { n: 2, br: i.d.readString, bw: i.h.writeString },
                  descriptors: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: i.d.readString,
                    bw: i.h.writeRepeatedString,
                  },
                  interactive_elements: {
                    n: 4,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  required_age: {
                    n: 10,
                    br: i.d.readInt32,
                    bw: i.h.writeInt32,
                  },
                  use_age_gate: { n: 11, br: i.d.readBool, bw: i.h.writeBool },
                  image_url: { n: 20, br: i.d.readString, bw: i.h.writeString },
                  image_target: {
                    n: 21,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                },
              }),
            s.sm_m
          );
        }
        static MBF() {
          return s.sm_mbf || (s.sm_mbf = i.e(s.M())), s.sm_mbf;
        }
        toObject(e = !1) {
          return s.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(s.M(), e, t);
        }
        static fromObject(e) {
          return i.c(s.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new s();
          return s.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(s.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return s.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(s.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return s.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreGameRating";
        }
      }
      class o extends a {
        constructor(e = null) {
          super(),
            o.prototype.item_type || i.a(o.M()),
            a.initialize(
              this,
              e,
              0,
              -1,
              [11, 12, 20, 21, 25, 41, 42, 52],
              null
            );
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  item_type: { n: 1, br: i.d.readEnum, bw: i.h.writeEnum },
                  id: { n: 2, br: i.d.readUint32, bw: i.h.writeUint32 },
                  success: { n: 3, br: i.d.readUint32, bw: i.h.writeUint32 },
                  visible: { n: 4, br: i.d.readBool, bw: i.h.writeBool },
                  unvailable_for_country_restriction: {
                    n: 5,
                    br: i.d.readBool,
                    bw: i.h.writeBool,
                  },
                  name: { n: 6, br: i.d.readString, bw: i.h.writeString },
                  store_url_path: {
                    n: 7,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  appid: { n: 9, br: i.d.readUint32, bw: i.h.writeUint32 },
                  type: { n: 10, br: i.d.readEnum, bw: i.h.writeEnum },
                  included_types: {
                    n: 11,
                    r: !0,
                    q: !0,
                    br: i.d.readEnum,
                    bw: i.h.writeRepeatedEnum,
                  },
                  included_appids: {
                    n: 12,
                    r: !0,
                    q: !0,
                    br: i.d.readUint32,
                    bw: i.h.writeRepeatedUint32,
                  },
                  is_free: { n: 13, br: i.d.readBool, bw: i.h.writeBool },
                  is_early_access: {
                    n: 14,
                    br: i.d.readBool,
                    bw: i.h.writeBool,
                  },
                  related_items: { n: 15, c: l },
                  content_descriptorids: {
                    n: 20,
                    r: !0,
                    q: !0,
                    br: i.d.readEnum,
                    bw: i.h.writeRepeatedEnum,
                  },
                  tagids: {
                    n: 21,
                    r: !0,
                    q: !0,
                    br: i.d.readUint32,
                    bw: i.h.writeRepeatedUint32,
                  },
                  categories: { n: 22, c: c },
                  reviews: { n: 23, c: d },
                  basic_info: { n: 24, c: m },
                  tags: { n: 25, c: p, r: !0, q: !0 },
                  assets: { n: 30, c: f },
                  release: { n: 31, c: _ },
                  platforms: { n: 32, c: g },
                  game_rating: { n: 33, c: s },
                  best_purchase_option: { n: 40, c: w },
                  purchase_options: { n: 41, c: w, r: !0, q: !0 },
                  accessories: { n: 42, c: w, r: !0, q: !0 },
                  screenshots: { n: 50, c: S },
                  trailers: { n: 51, c: v },
                  supported_languages: { n: 52, c: E, r: !0, q: !0 },
                  store_url_path_override: {
                    n: 53,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  free_weekend: { n: 54, c: k },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = i.e(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(o.M(), e, t);
        }
        static fromObject(e) {
          return i.c(o.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new o();
          return o.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(o.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem";
        }
      }
      class l extends a {
        constructor(e = null) {
          super(),
            l.prototype.parent_appid || i.a(l.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  parent_appid: {
                    n: 1,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = i.e(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(l.M(), e, t);
        }
        static fromObject(e) {
          return i.c(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_RelatedItems";
        }
      }
      class c extends a {
        constructor(e = null) {
          super(),
            c.prototype.supported_player_categoryids || i.a(c.M()),
            a.initialize(this, e, 0, -1, [2, 3, 4], null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  supported_player_categoryids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: i.d.readUint32,
                    bw: i.h.writeRepeatedUint32,
                  },
                  feature_categoryids: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: i.d.readUint32,
                    bw: i.h.writeRepeatedUint32,
                  },
                  controller_categoryids: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: i.d.readUint32,
                    bw: i.h.writeRepeatedUint32,
                  },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = i.e(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(c.M(), e, t);
        }
        static fromObject(e) {
          return i.c(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Categories";
        }
      }
      class d extends a {
        constructor(e = null) {
          super(),
            d.prototype.summary_filtered || i.a(d.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  summary_filtered: { n: 1, c: u },
                  summary_unfiltered: { n: 2, c: u },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = i.e(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(d.M(), e, t);
        }
        static fromObject(e) {
          return i.c(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Reviews";
        }
      }
      class u extends a {
        constructor(e = null) {
          super(),
            u.prototype.review_count || i.a(u.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  review_count: {
                    n: 1,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                  percent_positive: {
                    n: 2,
                    br: i.d.readInt32,
                    bw: i.h.writeInt32,
                  },
                  review_score: { n: 3, br: i.d.readEnum, bw: i.h.writeEnum },
                  review_score_label: {
                    n: 4,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = i.e(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(u.M(), e, t);
        }
        static fromObject(e) {
          return i.c(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Reviews_StoreReviewSummary";
        }
      }
      class m extends a {
        constructor(e = null) {
          super(),
            m.prototype.short_description || i.a(m.M()),
            a.initialize(this, e, 0, -1, [2, 3, 4], null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  short_description: {
                    n: 1,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  publishers: { n: 2, c: h, r: !0, q: !0 },
                  developers: { n: 3, c: h, r: !0, q: !0 },
                  franchises: { n: 4, c: h, r: !0, q: !0 },
                  capsule_headline: {
                    n: 5,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = i.e(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(m.M(), e, t);
        }
        static fromObject(e) {
          return i.c(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_BasicInfo";
        }
      }
      class h extends a {
        constructor(e = null) {
          super(),
            h.prototype.name || i.a(h.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  name: { n: 1, br: i.d.readString, bw: i.h.writeString },
                  creator_clan_account_id: {
                    n: 2,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = i.e(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(h.M(), e, t);
        }
        static fromObject(e) {
          return i.c(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_BasicInfo_CreatorHomeLink";
        }
      }
      class p extends a {
        constructor(e = null) {
          super(),
            p.prototype.tagid || i.a(p.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  tagid: { n: 1, br: i.d.readUint32, bw: i.h.writeUint32 },
                  weight: { n: 2, br: i.d.readUint32, bw: i.h.writeUint32 },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = i.e(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(p.M(), e, t);
        }
        static fromObject(e) {
          return i.c(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Tag";
        }
      }
      class f extends a {
        constructor(e = null) {
          super(),
            f.prototype.asset_url_format || i.a(f.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  asset_url_format: {
                    n: 1,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  main_capsule: {
                    n: 2,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  small_capsule: {
                    n: 3,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  header: { n: 4, br: i.d.readString, bw: i.h.writeString },
                  package_header: {
                    n: 5,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  page_background: {
                    n: 6,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  hero_capsule: {
                    n: 7,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  hero_capsule_2x: {
                    n: 8,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  library_capsule: {
                    n: 9,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  library_capsule_2x: {
                    n: 10,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  library_hero: {
                    n: 11,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  library_hero_2x: {
                    n: 12,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  community_icon: {
                    n: 13,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = i.e(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(f.M(), e, t);
        }
        static fromObject(e) {
          return i.c(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Assets";
        }
      }
      class _ extends a {
        constructor(e = null) {
          super(),
            _.prototype.steam_release_date || i.a(_.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  steam_release_date: {
                    n: 1,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                  original_release_date: {
                    n: 2,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                  original_steam_release_date: {
                    n: 3,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                  is_coming_soon: { n: 4, br: i.d.readBool, bw: i.h.writeBool },
                  is_preload: { n: 5, br: i.d.readBool, bw: i.h.writeBool },
                  custom_release_date_message: {
                    n: 6,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  is_abridged_release_date: {
                    n: 7,
                    br: i.d.readBool,
                    bw: i.h.writeBool,
                  },
                  is_early_access: {
                    n: 10,
                    br: i.d.readBool,
                    bw: i.h.writeBool,
                  },
                  mac_release_date: {
                    n: 20,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                  linux_release_date: {
                    n: 21,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = i.e(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(_.M(), e, t);
        }
        static fromObject(e) {
          return i.c(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_ReleaseInfo";
        }
      }
      class g extends a {
        constructor(e = null) {
          super(),
            g.prototype.windows || i.a(g.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  windows: { n: 1, br: i.d.readBool, bw: i.h.writeBool },
                  mac: { n: 2, br: i.d.readBool, bw: i.h.writeBool },
                  linux: { n: 3, br: i.d.readBool, bw: i.h.writeBool },
                  vr_support: { n: 10, c: b },
                  steam_deck_compat_category: {
                    n: 11,
                    br: i.d.readEnum,
                    bw: i.h.writeEnum,
                  },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = i.e(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(g.M(), e, t);
        }
        static fromObject(e) {
          return i.c(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Platforms";
        }
      }
      class b extends a {
        constructor(e = null) {
          super(),
            b.prototype.vrhmd || i.a(b.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  vrhmd: { n: 1, br: i.d.readBool, bw: i.h.writeBool },
                  vrhmd_only: { n: 2, br: i.d.readBool, bw: i.h.writeBool },
                  htc_vive: { n: 40, br: i.d.readBool, bw: i.h.writeBool },
                  oculus_rift: { n: 41, br: i.d.readBool, bw: i.h.writeBool },
                  windows_mr: { n: 42, br: i.d.readBool, bw: i.h.writeBool },
                  valve_index: { n: 43, br: i.d.readBool, bw: i.h.writeBool },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = i.e(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(b.M(), e, t);
        }
        static fromObject(e) {
          return i.c(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Platforms_VRSupport";
        }
      }
      class w extends a {
        constructor(e = null) {
          super(),
            w.prototype.packageid || i.a(w.M()),
            a.initialize(this, e, 0, -1, [20, 21, 22], null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  packageid: { n: 1, br: i.d.readInt32, bw: i.h.writeInt32 },
                  bundleid: { n: 2, br: i.d.readInt32, bw: i.h.writeInt32 },
                  purchase_option_name: {
                    n: 3,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  final_price_in_cents: {
                    n: 5,
                    br: i.d.readInt64String,
                    bw: i.h.writeInt64String,
                  },
                  original_price_in_cents: {
                    n: 6,
                    br: i.d.readInt64String,
                    bw: i.h.writeInt64String,
                  },
                  user_final_price_in_cents: {
                    n: 7,
                    br: i.d.readInt64String,
                    bw: i.h.writeInt64String,
                  },
                  formatted_final_price: {
                    n: 8,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  formatted_original_price: {
                    n: 9,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  discount_pct: {
                    n: 10,
                    br: i.d.readInt32,
                    bw: i.h.writeInt32,
                  },
                  user_discount_pct: {
                    n: 11,
                    br: i.d.readInt32,
                    bw: i.h.writeInt32,
                  },
                  bundle_discount_pct: {
                    n: 12,
                    br: i.d.readInt32,
                    bw: i.h.writeInt32,
                  },
                  active_discounts: { n: 20, c: y, r: !0, q: !0 },
                  user_active_discounts: { n: 21, c: y, r: !0, q: !0 },
                  inactive_discounts: { n: 22, c: y, r: !0, q: !0 },
                  user_can_purchase: {
                    n: 30,
                    br: i.d.readBool,
                    bw: i.h.writeBool,
                  },
                  user_can_purchase_as_gift: {
                    n: 31,
                    br: i.d.readBool,
                    bw: i.h.writeBool,
                  },
                  is_commercial_license: {
                    n: 40,
                    br: i.d.readBool,
                    bw: i.h.writeBool,
                  },
                  should_suppress_discount_pct: {
                    n: 41,
                    br: i.d.readBool,
                    bw: i.h.writeBool,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = i.e(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(w.M(), e, t);
        }
        static fromObject(e) {
          return i.c(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_PurchaseOption";
        }
      }
      class y extends a {
        constructor(e = null) {
          super(),
            y.prototype.discount_amount || i.a(y.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  discount_amount: {
                    n: 1,
                    br: i.d.readInt64String,
                    bw: i.h.writeInt64String,
                  },
                  discount_description: {
                    n: 2,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  discount_end_date: {
                    n: 3,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = i.e(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(y.M(), e, t);
        }
        static fromObject(e) {
          return i.c(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_PurchaseOption_Discount";
        }
      }
      class S extends a {
        constructor(e = null) {
          super(),
            S.prototype.all_ages_screenshots || i.a(S.M()),
            a.initialize(this, e, 0, -1, [2, 3], null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  all_ages_screenshots: { n: 2, c: B, r: !0, q: !0 },
                  mature_content_screenshots: { n: 3, c: B, r: !0, q: !0 },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = i.e(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(S.M(), e, t);
        }
        static fromObject(e) {
          return i.c(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Screenshots";
        }
      }
      class B extends a {
        constructor(e = null) {
          super(),
            B.prototype.filename || i.a(B.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  filename: { n: 1, br: i.d.readString, bw: i.h.writeString },
                  ordinal: { n: 2, br: i.d.readInt32, bw: i.h.writeInt32 },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = i.e(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(B.M(), e, t);
        }
        static fromObject(e) {
          return i.c(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Screenshots_Screenshot";
        }
      }
      class v extends a {
        constructor(e = null) {
          super(),
            v.prototype.highlights || i.a(v.M()),
            a.initialize(this, e, 0, -1, [1, 2], null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  highlights: { n: 1, c: M, r: !0, q: !0 },
                  other_trailers: { n: 2, c: M, r: !0, q: !0 },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = i.e(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(v.M(), e, t);
        }
        static fromObject(e) {
          return i.c(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Trailers";
        }
      }
      class C extends a {
        constructor(e = null) {
          super(),
            C.prototype.filename || i.a(C.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  filename: { n: 1, br: i.d.readString, bw: i.h.writeString },
                  type: { n: 2, br: i.d.readString, bw: i.h.writeString },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = i.e(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(C.M(), e, t);
        }
        static fromObject(e) {
          return i.c(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Trailers_VideoSource";
        }
      }
      class M extends a {
        constructor(e = null) {
          super(),
            M.prototype.trailer_name || i.a(M.M()),
            a.initialize(this, e, 0, -1, [3, 4, 5], null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  trailer_name: {
                    n: 1,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  trailer_url_format: {
                    n: 2,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  trailer_480p: { n: 3, c: C, r: !0, q: !0 },
                  trailer_max: { n: 4, c: C, r: !0, q: !0 },
                  microtrailer: { n: 5, c: C, r: !0, q: !0 },
                  screenshot_medium: {
                    n: 10,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  screenshot_full: {
                    n: 11,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  trailer_base_id: {
                    n: 12,
                    br: i.d.readInt32,
                    bw: i.h.writeInt32,
                  },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = i.e(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(M.M(), e, t);
        }
        static fromObject(e) {
          return i.c(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Trailers_Trailer";
        }
      }
      class E extends a {
        constructor(e = null) {
          super(),
            E.prototype.elanguage || i.a(E.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  elanguage: { n: 1, br: i.d.readInt32, bw: i.h.writeInt32 },
                  supported: { n: 2, br: i.d.readBool, bw: i.h.writeBool },
                  full_audio: { n: 3, br: i.d.readBool, bw: i.h.writeBool },
                  subtitles: { n: 4, br: i.d.readBool, bw: i.h.writeBool },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = i.e(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(E.M(), e, t);
        }
        static fromObject(e) {
          return i.c(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_SupportedLanguage";
        }
      }
      class k extends a {
        constructor(e = null) {
          super(),
            k.prototype.start_time || i.a(k.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: {
                  start_time: { n: 1, br: i.d.readUint32, bw: i.h.writeUint32 },
                  end_time: { n: 2, br: i.d.readUint32, bw: i.h.writeUint32 },
                  text: { n: 3, br: i.d.readString, bw: i.h.writeString },
                },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = i.e(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(k.M(), e, t);
        }
        static fromObject(e) {
          return i.c(k.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(k.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(k.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_FreeWeekend";
        }
      }
      class T extends a {
        constructor(e = null) {
          super(),
            T.prototype.include_assets || i.a(T.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  include_assets: { n: 1, br: i.d.readBool, bw: i.h.writeBool },
                  include_release: {
                    n: 2,
                    br: i.d.readBool,
                    bw: i.h.writeBool,
                  },
                  include_platforms: {
                    n: 3,
                    br: i.d.readBool,
                    bw: i.h.writeBool,
                  },
                  include_all_purchase_options: {
                    n: 4,
                    br: i.d.readBool,
                    bw: i.h.writeBool,
                  },
                  include_screenshots: {
                    n: 5,
                    br: i.d.readBool,
                    bw: i.h.writeBool,
                  },
                  include_trailers: {
                    n: 6,
                    br: i.d.readBool,
                    bw: i.h.writeBool,
                  },
                  include_ratings: {
                    n: 7,
                    br: i.d.readBool,
                    bw: i.h.writeBool,
                  },
                  include_tag_count: {
                    n: 8,
                    br: i.d.readInt32,
                    bw: i.h.writeInt32,
                  },
                  include_reviews: {
                    n: 9,
                    br: i.d.readBool,
                    bw: i.h.writeBool,
                  },
                  include_basic_info: {
                    n: 10,
                    br: i.d.readBool,
                    bw: i.h.writeBool,
                  },
                  include_supported_languages: {
                    n: 11,
                    br: i.d.readBool,
                    bw: i.h.writeBool,
                  },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = i.e(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(T.M(), e, t);
        }
        static fromObject(e) {
          return i.c(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreBrowseItemDataRequest";
        }
      }
      class L extends a {
        constructor(e = null) {
          super(),
            L.prototype.language || i.a(L.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: {
                  language: { n: 1, br: i.d.readString, bw: i.h.writeString },
                  elanguage: { n: 2, br: i.d.readInt32, bw: i.h.writeInt32 },
                  country_code: {
                    n: 3,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  steam_realm: { n: 4, br: i.d.readInt32, bw: i.h.writeInt32 },
                },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = i.e(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(L.M(), e, t);
        }
        static fromObject(e) {
          return i.c(L.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(L.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(L.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreBrowseContext";
        }
      }
      class R extends a {
        constructor(e = null) {
          super(),
            R.prototype.appid || i.a(R.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  appid: { n: 1, br: i.d.readUint32, bw: i.h.writeUint32 },
                  packageid: { n: 2, br: i.d.readUint32, bw: i.h.writeUint32 },
                  bundleid: { n: 3, br: i.d.readUint32, bw: i.h.writeUint32 },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = i.e(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(R.M(), e, t);
        }
        static fromObject(e) {
          return i.c(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItemID";
        }
      }
      class x extends a {
        constructor(e = null) {
          super(),
            x.prototype.ids || i.a(x.M()),
            a.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  ids: { n: 1, c: R, r: !0, q: !0 },
                  context: { n: 2, c: L },
                  data_request: { n: 3, c: T },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = i.e(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(x.M(), e, t);
        }
        static fromObject(e) {
          return i.c(x.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(x.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(x.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetItems_Request";
        }
      }
      class O extends a {
        constructor(e = null) {
          super(),
            O.prototype.store_items || i.a(O.M()),
            a.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: { store_items: { n: 1, c: o, r: !0, q: !0 } },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = i.e(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(O.M(), e, t);
        }
        static fromObject(e) {
          return i.c(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetItems_Response";
        }
      }
      class D extends a {
        constructor(e = null) {
          super(),
            D.prototype.categories || i.a(D.M()),
            a.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: { categories: { n: 1, c: I, r: !0, q: !0 } },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = i.e(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(D.M(), e, t);
        }
        static fromObject(e) {
          return i.c(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetStoreCategories_Response";
        }
      }
      class I extends a {
        constructor(e = null) {
          super(),
            I.prototype.categoryid || i.a(I.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  categoryid: { n: 1, br: i.d.readUint32, bw: i.h.writeUint32 },
                  type: { n: 2, br: i.d.readEnum, bw: i.h.writeEnum },
                  internal_name: {
                    n: 3,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  display_name: {
                    n: 4,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  image_url: { n: 5, br: i.d.readString, bw: i.h.writeString },
                  show_in_search: { n: 6, br: i.d.readBool, bw: i.h.writeBool },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = i.e(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(I.M(), e, t);
        }
        static fromObject(e) {
          return i.c(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetStoreCategories_Response_Category";
        }
      }
      var G;
      !(function (e) {
        (e.GetItems = function (e, t) {
          return e.SendMsg("StoreBrowse.GetItems#1", t, O, {
            bConstMethod: !0,
            ePrivilege: 2,
            eWebAPIKeyRequirement: 1,
          });
        }),
          (e.GetStoreCategories = function (e, t) {
            return e.SendMsg("StoreBrowse.GetStoreCategories#1", t, D, {
              bConstMethod: !0,
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          });
      })(G || (G = {}));
    },
  },
  [["gfbn", 71, 38]],
]);
