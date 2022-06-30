/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [16],
  {
    "/MtM": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return f;
      });
      var a,
        i = n("mrSG"),
        o = n("vDqi"),
        r = n.n(o),
        s = n("2vnA"),
        l = n("TyAF"),
        c = n("q1tI"),
        d = n("C2dt"),
        m = n("kWcV"),
        u = n("GbHM"),
        b = n("GXif"),
        _ = n("TqgT"),
        p = n("hCpY"),
        h = n("/Q1a"),
        E = n("2dJq"),
        g = n.n(E),
        v = n("r0f0");
      let f = (a = class extends c.Component {
        constructor(e) {
          super(e), (this.m_cancelSignal = r.a.CancelToken.source());
          let t = !this.props.bShowVideoImmediately;
          (this.state = { bSummaryMode: t, bLoadedMetaData: !1 }),
            (this.m_youtubeInfo = {
              title: Object(b.g)("#Loading"),
              description: "",
              videoid: e.videoID,
              views: "0",
            });
        }
        componentDidMount() {
          this.state.bSummaryMode && this.HintLoadMetadata();
        }
        componentWillUnmount() {
          this.m_cancelSignal.cancel(
            "YouTubeInlineSnippet component unmounted"
          );
        }
        HintLoadMetadata() {
          return Object(i.a)(this, void 0, void 0, function* () {
            d.a
              .LoadYouTubeDynamicData([this.props.videoID], this.m_cancelSignal)
              .then((e) => {
                !this.m_cancelSignal.token.reason &&
                  e.length > 0 &&
                  ((this.m_youtubeInfo = e[0]),
                  this.setState({ bLoadedMetaData: !0 }));
              })
              .catch((e) =>
                console.error(
                  "YouTubeInlineSnippet: " + Object(_.a)(e).strErrorMsg
                )
              );
          });
        }
        OnClick() {
          this.setState({ bSummaryMode: !1 });
        }
        render() {
          let e = this.props.videoID;
          if (this.state.bSummaryMode) {
            let t = this.m_youtubeInfo.title,
              n = this.m_youtubeInfo.views,
              a = this.m_youtubeInfo.description;
            return c.createElement(
              "div",
              { className: g.a.DynamicLinkBox, onClick: this.OnClick },
              c.createElement("img", {
                className: g.a.DynamicLink_Preview,
                src: "https://img.youtube.com/vi/" + e + "/0.jpg",
              }),
              c.createElement(
                "div",
                { className: g.a.DynamicLink_Content },
                c.createElement(
                  "div",
                  { className: g.a.DynamicLink_Name },
                  Object(b.g)("#EventEditor_YouTubeVideoTitle", t)
                ),
                c.createElement(
                  "div",
                  { className: g.a.DynamicLink_YoutubeViews },
                  Object(b.g)(
                    "#EventEditor_YouTubeVideoViews",
                    Object(v.a)(Number(n))
                  )
                ),
                c.createElement(
                  "div",
                  { className: g.a.Dynamiclink_Content },
                  this.state.bLoadedMetaData && a,
                  !this.state.bLoadedMetaData && c.createElement(m.a, null)
                )
              )
            );
          }
          {
            let t = this.props.classNameSize,
              n = this.props.classNameAlign;
            const i =
              "https://www.youtube.com/embed/" +
              e +
              a.m_strYouTubeOptions +
              (this.props.bAutoPlay ? "&autoplay=1" : "") +
              (this.props.nStartSeconds
                ? "&t=" + this.props.nStartSeconds
                : "");
            return c.createElement(
              "div",
              { className: Object(u.a)(g.a.PreviewYouTubeVideo, t, n), id: e },
              c.createElement("img", {
                src:
                  h.d.COMMUNITY_CDN_URL +
                  "public/shared/images/responsive/youtube_16x9_placeholder.gif",
              }),
              c.createElement("iframe", {
                className: Object(u.a)(g.a.PreviewYouTubeVideo, t, n),
                src: i,
                allowFullScreen: !0,
                frameBorder: 0,
              })
            );
          }
        }
      });
      (f.m_strYouTubeOptions = "?fs=1&modestbranding=1&rel=0"),
        Object(i.b)([s.C], f.prototype, "m_youtubeInfo", void 0),
        Object(i.b)([p.b], f.prototype, "OnClick", null),
        (f = a = Object(i.b)([l.a], f));
    },
    "2+iD": function (e, t, n) {
      e.exports = {
        FlexColumnContainer: "eventreminder_FlexColumnContainer_1WvmG",
        FullStartTime: "eventreminder_FullStartTime_1gZlx",
        ReminderDialog: "eventreminder_ReminderDialog_2S_bd",
        ReminderOptions: "eventreminder_ReminderOptions_P5dFj",
        ReminderBackground: "eventreminder_ReminderBackground_GDF1p",
        ReminderExpandsLeft: "eventreminder_ReminderExpandsLeft_3RoUk",
        ReminderOption: "eventreminder_ReminderOption_RNhWc",
        Unverified: "eventreminder_Unverified_PNHvX",
        CheckboxWrapper: "eventreminder_CheckboxWrapper_1g3ts",
        ReminderOptionTooltip: "eventreminder_ReminderOptionTooltip_ZL-f2",
        ReminderCheckBox: "eventreminder_ReminderCheckBox_2bkmL",
        IconMode: "eventreminder_IconMode_3L1VN",
        RemindBell: "eventreminder_RemindBell_1MZ5h",
        RemindCheck: "eventreminder_RemindCheck_30e1o",
        ReminderDefault: "eventreminder_ReminderDefault_10z6n",
        TextMode: "eventreminder_TextMode_2CgU9",
        ReminderCheck: "eventreminder_ReminderCheck_FpEF0",
        ReminderOpennedOptions: "eventreminder_ReminderOpennedOptions_1Zj38",
        ReminderOptionsHeader: "eventreminder_ReminderOptionsHeader_1GBAq",
        ReminderCalendarOptions: "eventreminder_ReminderCalendarOptions_1GxfZ",
        ReminderSettings: "eventreminder_ReminderSettings_L3OIh",
        ReminderNotes: "eventreminder_ReminderNotes_1l8Na",
        RpcThrobber: "eventreminder_RpcThrobber_2f9gF",
      };
    },
    "2dJq": function (e, t, n) {
      e.exports = {
        DynamicLinkBox: "youtubeembed_DynamicLinkBox_5Ycv2",
        DynamicLink_Preview: "youtubeembed_DynamicLink_Preview_1SXvQ",
        DynamicLink_Author: "youtubeembed_DynamicLink_Author_3_zLB",
        DynamicLink_Description: "youtubeembed_DynamicLink_Description_2LLBo",
        DynamicLink_Content: "youtubeembed_DynamicLink_Content_30q6o",
        DynamicLink_Name: "youtubeembed_DynamicLink_Name_22TUb",
        DynamicLink_YoutubeViews: "youtubeembed_DynamicLink_YoutubeViews_3wb0B",
        Dynamiclink_Content: "youtubeembed_Dynamiclink_Content_91C09",
        DynamicLink_URL: "youtubeembed_DynamicLink_URL_2wwTh",
        DynamicLink_AuthorName: "youtubeembed_DynamicLink_AuthorName_1Thfl",
        DynamicLink_Date: "youtubeembed_DynamicLink_Date_3MAjB",
        PreviewYouTubeVideo: "youtubeembed_PreviewYouTubeVideo_2ydks",
        sizeThumb: "youtubeembed_sizeThumb_kQ_wg",
        sizeFull: "youtubeembed_sizeFull_2GDYx",
        floatLeft: "youtubeembed_floatLeft_3ZwVB",
        floatRight: "youtubeembed_floatRight_1VimJ",
      };
    },
    "7myZ": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return b;
      });
      var a = n("mrSG"),
        i = n("q1tI"),
        o = n.n(i),
        r = n("msu0"),
        s = n("Zdsb"),
        l = n("GXif"),
        c = n("pSt8"),
        d = n("/Q1a"),
        m = n("hCpY");
      class u {
        constructor() {
          (this.m_bUserHasVolumePreference = !1),
            (this.m_flVolumePreference = 0);
        }
        BUserHasVolumePreference() {
          return this.m_bUserHasVolumePreference;
        }
        SetVolumePreference(e) {
          (this.m_flVolumePreference = e),
            (this.m_bUserHasVolumePreference = !0);
        }
        GetVolumePreference() {
          return this.m_flVolumePreference;
        }
        BVolumePreferenceMuted() {
          return this.m_flVolumePreference < 0.001;
        }
        static Get() {
          return u.s_Singleton || (u.s_Singleton = new u()), u.s_Singleton;
        }
      }
      Object(a.b)([m.b], u.prototype, "BUserHasVolumePreference", null),
        Object(a.b)([m.b], u.prototype, "SetVolumePreference", null);
      const b = (e) => {
        const { video: t, bAutoPlay: n, bControls: a, bLoop: m, bMuted: b } = e,
          _ = Object(i.useMemo)(() => {
            var e;
            return Boolean(
              null === (e = t.rgVideoTracks) || void 0 === e
                ? void 0
                : e.some((e) => "subtitles" == e.sKind || "captions" == e.sKind)
            );
          }, [t.rgVideoTracks]),
          [p, h] = o.a.useState(!1);
        if (!t.rgVideoSources || !t.rgVideoSources.length) return null;
        const E = (e) => {
            const t = new URL(e);
            return (
              (t.search =
                (t.search ? t.search + "&" : "?") + "origin=" + Object(d.f)()),
              t.toString()
            );
          },
          g = t.rgVideoSources
            .filter((e) => Boolean(e.sURL))
            .map((e) =>
              o.a.createElement("source", {
                key: e.sURL,
                src: E(e.sURL),
                type: e.sFormat,
              })
            ),
          v = t.rgVideoTracks
            ? t.rgVideoTracks.map((e) => {
                let n = e.eLanguage;
                if (d.d.EREALM === s.h.k_ESteamRealmChina)
                  if (l.b.IsELanguageValidInRealm(n, s.h.k_ESteamRealmChina))
                    n = l.b.GetELanguageFallback(n);
                  else {
                    if (6 !== n) return null;
                    if (
                      t.rgVideoTracks.find(
                        (e) => l.b.GetELanguageFallback(e.eLanguage) === n
                      )
                    )
                      return null;
                  }
                else if (
                  !l.b.IsELanguageValidInRealm(n, s.h.k_ESteamRealmGlobal)
                )
                  return null;
                return o.a.createElement("track", {
                  key: e.sURL + n,
                  src: E(e.sURL),
                  kind: e.sKind,
                  default: e.bDefault,
                  srcLang: Object(r.e)(n),
                  label: Object(l.g)("#language_selection_" + Object(r.d)(n)),
                });
              })
            : null;
        let f;
        (!(function (e) {
          return !(
            !Object(c.a)(e.sPoster) ||
            (e.rgVideoSources &&
              e.rgVideoSources.some((e) => !Object(c.a)(e.sURL))) ||
            (e.rgVideoTracks &&
              e.rgVideoTracks.some((e) => !Object(c.a)(e.sURL)))
          );
        })(t) ||
          (_ && "public" == d.d.WEB_UNIVERSE)) &&
          (f = "anonymous");
        const O = b || (n && u.Get().BVolumePreferenceMuted()),
          y = t.sPoster ? E(t.sPoster) : "";
        return o.a.createElement(
          "video",
          {
            width: "100%",
            height: "auto",
            autoPlay: n,
            muted: O,
            playsInline: !0,
            controls: a,
            poster: y,
            loop: m,
            crossOrigin: f,
            onVolumeChange: (e) => {
              const t = e.target,
                n = t.muted ? 0 : t.volume;
              p && u.Get().SetVolumePreference(n);
            },
            onPlay: (e) => {
              const t = e.target,
                a = 0 == t.currentTime,
                i = u.Get().BUserHasVolumePreference();
              if ((h(!0), a))
                if (i || n)
                  i &&
                    ((t.volume = u.Get().GetVolumePreference()),
                    (t.muted = u.Get().BVolumePreferenceMuted()));
                else {
                  const e = t.muted ? 0 : t.volume;
                  u.Get().SetVolumePreference(e);
                }
            },
          },
          g,
          v
        );
      };
    },
    C2dt: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return c;
      });
      var a = n("mrSG"),
        i = n("vDqi"),
        o = n.n(i),
        r = n("2vnA"),
        s = n("/Q1a");
      class l {
        constructor() {
          (this.m_mapYouTubeVideo = new Map()),
            (this.m_mapSharedFile = new Map());
        }
        LoadYouTubeDynamicData(e, t) {
          return Object(a.a)(this, void 0, void 0, function* () {
            let n = new Array(),
              a = "";
            if (
              (e.forEach((e, t) => {
                this.m_mapYouTubeVideo.has(e)
                  ? n.push(this.m_mapYouTubeVideo.get(e))
                  : (a.length > 0 && (a += ","), (a += e));
              }),
              0 == a.length)
            )
              return n;
            let i = { youtubevideoids: a },
              l = null;
            return (
              (l = yield o.a.get(
                s.d.STORE_BASE_URL + "/events/ajaxgetdynamiceventmetadata",
                { params: i, cancelToken: t.token }
              )),
              l &&
                l.data &&
                l.data.youtube &&
                Object(r.G)(() => {
                  l.data.youtube.forEach((e, t) => {
                    this.m_mapYouTubeVideo.set(e.videoid, e), n.push(e);
                  });
                }),
              n
            );
          });
        }
        LoadSharedFileDynamicData(e, t) {
          return Object(a.a)(this, void 0, void 0, function* () {
            let n = new Array(),
              a = "";
            if (
              (e.forEach((e, t) => {
                this.m_mapSharedFile.has(e)
                  ? n.push(this.m_mapSharedFile.get(e))
                  : (a.length > 0 && (a += ","), (a += e));
              }),
              0 == a.length)
            )
              return n;
            let i = { sharedfileids: a },
              l = null;
            return (
              (l = yield o.a.get(
                s.d.STORE_BASE_URL + "/events/ajaxgetdynamiceventmetadata",
                { params: i, cancelToken: t.token }
              )),
              l &&
                l.data &&
                l.data.sharedfiles &&
                Object(r.G)(() => {
                  l.data.sharedfiles.forEach((e, t) => {
                    this.m_mapSharedFile.set(e.sharedfileid, e), n.push(e);
                  });
                }),
              n
            );
          });
        }
      }
      Object(a.b)([r.C], l.prototype, "m_mapYouTubeVideo", void 0),
        Object(a.b)([r.C], l.prototype, "m_mapSharedFile", void 0);
      const c = new l();
    },
    fmsa: function (e, t, n) {
      "use strict";
      n.d(t, "e", function () {
        return _;
      }),
        n.d(t, "d", function () {
          return p;
        }),
        n.d(t, "a", function () {
          return h;
        }),
        n.d(t, "f", function () {
          return E;
        }),
        n.d(t, "b", function () {
          return g;
        }),
        n.d(t, "c", function () {
          return v;
        });
      var a = n("mrSG"),
        i = n("q1tI"),
        o = n("xoHR"),
        r = n("GXif"),
        s = n("TyAF"),
        l = n("GbHM"),
        c = n("Nt3m"),
        d = n("ox7B"),
        m = n.n(d),
        u = n("ue1x");
      const b = n("f0Wu");
      function _(e) {
        const t = b.tz.guess(),
          n = b.unix(e).tz(t),
          a = Object(r.c)();
        return a && n.locale(a), n.format("LT");
      }
      function p(e, t) {
        const n = b.tz.guess(),
          a = b.unix(e).tz(n),
          o = Object(r.c)();
        return (
          o && a.locale(o),
          i.createElement(
            i.Fragment,
            null,
            a.format("LT"),
            t
              ? i.createElement(
                  "span",
                  { "data-tooltip-text": a.format("Z") + ", " + n },
                  " ",
                  a.zoneAbbr()
                )
              : null
          )
        );
      }
      const h = Object(s.a)((e) => {
          const {
              dateAndTime: t,
              bSingleLine: n,
              bOnlyTime: a,
              bOnlyDate: o,
            } = e,
            s = !a && Boolean(t),
            l = !o && Boolean(t),
            c = s && Object(r.l)(t),
            d = e.stylesmodule
              ? Object.assign(Object.assign({}, m.a), e.stylesmodule)
              : m.a;
          return n
            ? i.createElement(
                "span",
                { className: a || o ? d.DateAndTimeInline : d.DateAndTime },
                s && c,
                i.createElement("span", null, " "),
                Boolean(t && l) && p(t, !0)
              )
            : i.createElement(
                "div",
                { className: d.DateAndTime },
                s &&
                  i.createElement(
                    i.Fragment,
                    null,
                    i.createElement("div", { className: d.LocalizedDate }, c),
                    " ",
                    i.createElement("span", { className: d.At }, "@")
                  ),
                i.createElement(
                  "div",
                  { className: d.LocalizedTime },
                  Boolean(t && l) && p(t, !0)
                )
              );
        }),
        E = (e) => {
          var t;
          const n = i.createElement(h, {
            dateAndTime: e.rtFullDate,
            bSingleLine: !0,
            stylesmodule: e.stylesmodule,
          });
          return i.createElement(
            o.a,
            {
              toolTipContent: n,
              direction: "top",
              className: e.className,
              strTooltipClassname:
                null === (t = e.stylesmodule) || void 0 === t
                  ? void 0
                  : t.DateToolTip,
            },
            e.children
          );
        };
      let g = class extends i.Component {
        render() {
          const { startDateAndTime: e, endDateAndTime: t } = this.props,
            n = this.props.stylesmodule
              ? Object.assign(Object.assign({}, m.a), this.props.stylesmodule)
              : m.a;
          let a =
            this.props.bHideEndTime ||
            null == this.props.endDateAndTime ||
            this.props.endDateAndTime < 1;
          if (null == e || 0 == e)
            return i.createElement(
              "div",
              { className: n.DateAndTime },
              i.createElement(
                "span",
                { className: n.RightSideTitles },
                Object(r.g)("#EventDisplay_TimeRange")
              ),
              Object(r.g)("#EventDisplay_TimeDisplayNone")
            );
          let o = u.a.GetTimeNowWithOverride();
          if (a)
            return i.createElement(
              "div",
              { className: n.StartDate },
              i.createElement(
                "div",
                { className: n.RightSideTitles },
                Object(r.g)(
                  e < o
                    ? "#EventDisplay_TimeInPast"
                    : "#EventDisplay_TimeUpcoming"
                ),
                " "
              ),
              i.createElement(h, { stylesmodule: n, dateAndTime: e })
            );
          let s = e <= o && o <= t;
          const d = Object(c.a)(new Date(1e3 * e), new Date(1e3 * t));
          return i.createElement(
            "div",
            { className: n.MultiDateAndTime },
            i.createElement(
              "div",
              { className: n.StartDate },
              i.createElement(
                "span",
                { className: n.RightSideTitles },
                Object(r.g)(
                  e >= o
                    ? "#EventDisplay_TimeBeginsOn"
                    : t >= o
                    ? "#EventDisplay_TimeBeginsOn_Past"
                    : "#EventDisplay_TimeBeginsOn_StartAndEnd_Past"
                )
              ),
              i.createElement(h, {
                stylesmodule: n,
                bSingleLine: !0,
                dateAndTime: e,
              })
            ),
            i.createElement(
              "div",
              { className: n.EndDate },
              i.createElement(
                "span",
                { className: n.RightSideTitles },
                Object(r.g)(
                  t < o
                    ? "#EventDisplay_TimeEndsOn_Past"
                    : "#EventDisplay_TimeEndsOn"
                )
              ),
              i.createElement(h, {
                stylesmodule: n,
                bSingleLine: !0,
                bOnlyTime: d,
                dateAndTime: t,
              })
            ),
            s &&
              i.createElement(
                "span",
                { className: n.ActiveEvent },
                i.createElement(
                  "span",
                  {
                    className: Object(l.a)(
                      n.RightSideTitles,
                      n.ActiveEventCallOut
                    ),
                  },
                  Object(r.g)("#Time_Now")
                )
              )
          );
        }
      };
      g = Object(a.b)([s.a], g);
      let v = class extends i.Component {
        render() {
          const {
              startDateAndTime: e,
              endDateAndTime: t,
              bHideEndTime: n,
            } = this.props,
            a = this.props.stylesmodule
              ? Object.assign(Object.assign({}, m.a), this.props.stylesmodule)
              : m.a;
          if (null == e || 0 == e)
            return i.createElement(
              "div",
              { className: a.DateAndTime },
              i.createElement(
                "span",
                { className: a.RightSideTitles },
                Object(r.g)("#EventDisplay_TimeRange")
              ),
              Object(r.g)("#EventDisplay_TimeDisplayNone")
            );
          const o = u.a.GetTimeNowWithOverrideAsDate(),
            s = u.a.GetTimeNowWithOverride(),
            l = Object(c.b)(new Date(1e3 * e), o),
            d = i.createElement(
              "div",
              { className: a.ShortDateAndTime },
              Object(r.l)(e, l)
            );
          let b = i.createElement(
            E,
            { rtFullDate: e, stylesmodule: a },
            i.createElement(
              "div",
              { className: a.RightSideTitles },
              Object(r.g)(
                e < s
                  ? "#EventDisplay_TimeInPast"
                  : "#EventDisplay_TimeUpcoming"
              )
            ),
            d
          );
          if (
            (s < e &&
              e < s + c.e.PerWeek &&
              (b = i.createElement(
                E,
                { rtFullDate: e, stylesmodule: a },
                i.createElement(
                  "div",
                  { className: a.RightSideTitles },
                  Object(r.p)(
                    "#EventDisplay_EventUpcoming_WithDateAndTime",
                    d,
                    i.createElement(
                      "div",
                      { className: a.ShortDateAndTime },
                      p(e),
                      " "
                    )
                  )
                )
              )),
            n || null == t || t < 1)
          )
            return b;
          const _ = e <= s && s <= t;
          _ &&
            (b = i.createElement(
              E,
              { rtFullDate: e, className: a.ActiveEvent, stylesmodule: a },
              i.createElement(
                "span",
                { className: a.ActiveEventCallOut },
                Object(r.g)("#Time_Now")
              )
            ));
          let h = null;
          const g = _ ? t - s : t - e;
          if (g <= c.e.PerDay) {
            const e = i.createElement(
              "div",
              { className: a.ShortDateAndTime },
              Object(r.s)(g, !0)
            );
            h =
              t < s
                ? i.createElement(
                    "div",
                    { className: a.RightSideTitles },
                    Object(r.g)("#EventDisplay_TimeEndsOn_Ran"),
                    e
                  )
                : i.createElement(
                    "div",
                    { className: a.RightSideTitles },
                    Object(r.p)(
                      _
                        ? "#EventDisplay_TimeLeft"
                        : "#EventDisplay_RunsForDuration",
                      e
                    )
                  );
          } else {
            const e = o.getFullYear() == new Date(1e3 * t).getFullYear();
            h = i.createElement(
              i.Fragment,
              null,
              i.createElement(
                "div",
                { className: a.RightSideTitles },
                Object(r.g)(
                  t < s
                    ? "#EventDisplay_TimeEndsOn_Past"
                    : "#EventDisplay_TimeEndsOn"
                )
              ),
              i.createElement(
                "div",
                { className: a.ShortDateAndTime },
                Object(r.l)(t, e)
              )
            );
          }
          const v = i.createElement(E, { rtFullDate: t, stylesmodule: a }, h);
          return i.createElement("div", { className: a.ShortDateRange }, b, v);
        }
      };
      v = Object(a.b)([s.a], v);
    },
    mc3D: function (e, t, n) {
      e.exports = {
        Header1: "eventbbcodeparser_Header1_15FlI",
        Header2: "eventbbcodeparser_Header2_1SWg2",
        Header3: "eventbbcodeparser_Header3_AX80F",
        Link: "eventbbcodeparser_Link_3I3zk",
        LinkHost: "eventbbcodeparser_LinkHost_3jOM4",
        LinkButton: "eventbbcodeparser_LinkButton_1PfAd",
        UnorderedList: "eventbbcodeparser_UnorderedList_3sYJ7",
        OrderedList: "eventbbcodeparser_OrderedList_60l9Y",
        StoreWidget: "eventbbcodeparser_StoreWidget_3TYlQ",
        MedalTVWidget: "eventbbcodeparser_MedalTVWidget_1Ysh1",
        AppSummaryWidgetCtn: "eventbbcodeparser_AppSummaryWidgetCtn_3Mdza",
        LoyaltyRewardCtn: "eventbbcodeparser_LoyaltyRewardCtn_2SGke",
        SaleSectionCtn: "eventbbcodeparser_SaleSectionCtn_2Xrw_",
        ReminderCtn: "eventbbcodeparser_ReminderCtn_1dtL2",
        BlockQuote: "eventbbcodeparser_BlockQuote_2mfpG",
        SocialLink: "eventbbcodeparser_SocialLink_wn4Fw",
        SocialIcon: "eventbbcodeparser_SocialIcon_1wyn6",
        LocalizeBlock: "eventbbcodeparser_LocalizeBlock_hXuYi",
      };
    },
    "nWW+": function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return V;
      }),
        n.d(t, "a", function () {
          return P;
        });
      var a = n("mrSG"),
        i = n("TyAF"),
        o = n("wd/R"),
        r = n("q1tI"),
        s = n("msu0"),
        l = (n("Zdsb"), n("pC2t")),
        c = n("/4gK"),
        d = n("rB+X"),
        m = (n("XrGS"), n("wijF")),
        u = n("VJsr"),
        b = n("ue1x"),
        _ = n("AM5O"),
        p = n("2vnA"),
        h = n("/Q1a"),
        E = (n("sTxY"), n("vDqi")),
        g = n.n(E);
      class v {
        constructor() {
          (this.m_bValidatedEmail = !1),
            (this.m_nMobileDeviceCount = 0),
            (this.m_bIsLoaded = !1),
            (this.m_bLoadedFromConfig = !1);
        }
        LazyInit() {
          if (!this.m_bLoadedFromConfig) {
            let e = Object(h.i)("notificationstore", "application_config");
            this.ValidateStoreDefault(e) &&
              Object(p.G)(() => {
                (this.m_bIsLoaded = !0),
                  (this.m_bValidatedEmail = e.email_validated),
                  (this.m_nMobileDeviceCount = e.mobile_device_count);
              }),
              (this.m_bLoadedFromConfig = !0);
          }
        }
        ValidateStoreDefault(e) {
          return (
            e &&
            "object" == typeof e &&
            "number" == typeof e.mobile_device_count
          );
        }
        BIsLoaded() {
          return this.m_bIsLoaded;
        }
        BHasValidatedEmail() {
          return this.m_bValidatedEmail;
        }
        BHasPushNotification() {
          return this.m_nMobileDeviceCount > 0;
        }
        HintLoad() {
          return Object(a.a)(this, void 0, void 0, function* () {
            return (
              this.LazyInit(),
              this.m_bIsLoaded
                ? 1
                : h.l.logged_in
                ? (this.m_promise || (this.m_promise = this.InternalLoad()),
                  this.m_promise)
                : 1
            );
          });
        }
        InternalLoad() {
          return Object(a.a)(this, void 0, void 0, function* () {
            const e = h.d.STORE_BASE_URL + "notification/ajaxusersettings",
              t = { authwgtoken: h.l.authwgtoken },
              n = yield g.a.get(e, { params: t, withCredentials: !0 });
            return (
              1 == n.data.success &&
                Object(p.G)(() => {
                  (this.m_bIsLoaded = !0),
                    (this.m_bValidatedEmail = n.data.email_validated),
                    (this.m_nMobileDeviceCount = n.data.mobile_device_count);
                }),
              n.data.success
            );
          });
        }
      }
      Object(a.b)([p.C], v.prototype, "m_bValidatedEmail", void 0),
        Object(a.b)([p.C], v.prototype, "m_nMobileDeviceCount", void 0);
      let f = new v();
      var O = n("RLZf"),
        y = n("7ast"),
        S = n("fmsa"),
        D = n("thkD"),
        T = n("jIgc"),
        C = n("e356"),
        N = n("kWcV"),
        R = n("xoHR"),
        L = n("TqgT"),
        k = n("GbHM"),
        j = n("GXif"),
        I = n("hCpY"),
        w = n("Nt3m"),
        B = n("pSt8"),
        A = n("mc3D"),
        M = n.n(A),
        x = n("j4v3"),
        G = n("2+iD"),
        F = n("+VGL"),
        H = n("tXj3");
      let V = class extends r.Component {
        constructor() {
          super(...arguments),
            (this.m_elDropDownRef = r.createRef()),
            (this.m_bLoadWasCancelled = !1),
            (this.state = {
              bIsOpen: !1,
              bIsLoadingNotificationSettings: !f.BIsLoaded(),
            });
        }
        componentDidMount() {
          this.state.bIsLoadingNotificationSettings &&
            f
              .HintLoad()
              .catch(
                (e) => (
                  console.error(
                    "EventReminderWidget load fail: " +
                      Object(L.a)(e).strErrorMsg
                  ),
                  2
                )
              )
              .then((e) => {
                1 != e ||
                  this.m_bLoadWasCancelled ||
                  this.setState({ bIsLoadingNotificationSettings: !1 });
              }),
            !this.props.eventModel.appid &&
              this.props.eventModel.clanSteamID &&
              m.a.LoadClanInfoForClanSteamID(this.props.eventModel.clanSteamID);
        }
        componentWillUnmount() {
          this.m_bLoadWasCancelled = !0;
        }
        ToggleMenu(e) {
          const t = _.a.Get().BIsUserLoggedIn();
          t || h.d.IN_CLIENT
            ? (!t &&
                h.d.IN_CLIENT &&
                console.log(
                  "EventReminderWidget: In Client: Cannot use login widget. We expect to be already logged in."
                ),
              this.state.bIsOpen ? this.HideMenu() : this.ShowMenu(),
              e.stopPropagation(),
              e.preventDefault())
            : Object(T.d)(
                r.createElement(D.e, {
                  strTitle: Object(j.g)("#EventDisplay_Share_NotLoggedIn"),
                  strDescription: Object(j.g)(
                    "#EventDisplay_Share_NotLoggedIn_Description"
                  ),
                  strOKButtonText: Object(j.g)("#MobileLogin_SignIn"),
                  onOK: () => Object(H.a)(),
                }),
                window
              );
        }
        ShowMenu() {
          if (this.m_iMenuInstance) this.m_iMenuInstance.Show();
          else {
            let e = r.createElement(
                W,
                Object.assign({}, this.props, {
                  fnHasReminderSet: () => this.BHasSomeNotificationSetting(),
                  fnHidePanel: this.HideMenu,
                })
              ),
              t = {
                bOverlapHorizontal: !0,
                bOverlapVertical: !0,
                bDisablePopTop: !0,
                bMatchWidth: !0,
                strClassName: Object(k.a)(
                  G.ReminderDialog,
                  G.ReminderOptions,
                  O.contextMenu
                ),
              };
            (this.m_iMenuInstance = Object(l.a)(
              e,
              this.m_elDropDownRef.current,
              t
            )),
              this.m_iMenuInstance.SetOnHideCallback(this.HideMenu);
          }
          this.setState({ bIsOpen: !0 }),
            u.b.RecordAppInteractionEvent(
              this.props.eventModel.appid,
              u.a.k_eReminder_Opened
            );
        }
        HideMenu() {
          this.m_iMenuInstance && this.m_iMenuInstance.Hide(),
            this.setState({ bIsOpen: !1 });
        }
        BHasSomeNotificationSetting() {
          const { eventModel: e } = this.props,
            t = e.GID;
          return (
            (f.BHasValidatedEmail() &&
              _.a
                .Get()
                .BFollowsEventAndNotifiedBy(
                  e.clanSteamID,
                  t,
                  _.b.k_ENotifyFlagByEmail
                )) ||
            (f.BHasPushNotification() &&
              _.a
                .Get()
                .BFollowsEventAndNotifiedBy(
                  e.clanSteamID,
                  t,
                  _.b.k_ENotifyFlagByPush
                ))
          );
        }
        render() {
          const e = this.props.bOnlyShowIcon && !this.state.bIsOpen,
            t = this.BHasSomeNotificationSetting();
          return r.createElement(
            "div",
            {
              className: Object(k.a)({
                [G.ReminderCheckBox]: !0,
                [M.a.ReminderCtn]: !0,
                [G.IconMode]: e,
                [G.TextMode]: !e,
                ReminderSet: t,
                RemindMeWidget: !0,
              }),
              onClick: this.ToggleMenu,
              ref: this.m_elDropDownRef,
            },
            t &&
              r.createElement(
                "div",
                { className: G.RemindCheck },
                r.createElement(C.q, null)
              ),
            e &&
              r.createElement(
                "div",
                { className: G.RemindBell },
                r.createElement(C.g, null)
              ),
            r.createElement(
              "div",
              { className: G.ReminderDefault },
              Object(j.g)("#EventDisplay_Reminder_SetReminder")
            ),
            r.createElement("div", { className: G.ReminderOptions })
          );
        }
      };
      function P(e) {
        const { eventGID: t } = e,
          n = Object(a.c)(e, ["eventGID"]),
          i = Object(d.b)(t);
        if (!i) return null;
        const o = Object(s.g)(h.d.LANGUAGE);
        return r.createElement(
          V,
          Object.assign({ lang: o }, n, { eventModel: i })
        );
      }
      function U(e) {
        return o.unix(e).utc().format("YYYYMMDD[T]HHmmss[Z]");
      }
      Object(a.b)([I.b], V.prototype, "ToggleMenu", null),
        Object(a.b)([I.b], V.prototype, "ShowMenu", null),
        Object(a.b)([I.b], V.prototype, "HideMenu", null),
        (V = Object(a.b)([i.a], V));
      let W = class extends r.Component {
        constructor() {
          super(...arguments), (this.state = { bIsRequestInFlight: !1 });
        }
        OnChangeFollowOrIgnore(e, t, n) {
          return Object(a.a)(this, void 0, void 0, function* () {
            const { eventModel: a } = this.props,
              i = null == a ? void 0 : a.GID;
            if (i && i != s.h) {
              this.setState({ bIsRequestInFlight: !0 });
              try {
                yield _.a
                  .Get()
                  .SetFollowOrUnfollowEvent(!e, t, a.clanSteamID, i, n),
                  e &&
                    (n === _.b.k_ENotifyFlagByEmail
                      ? this.TrackEventAction(u.a.k_eReminder_Email)
                      : n === _.b.k_ENotifyFlagByPush &&
                        this.TrackEventAction(u.a.k_eReminder_MobilePush));
              } catch (e) {
                Object(T.c)(
                  r.createElement(
                    D.g,
                    {
                      strTitle: Object(j.g)(
                        t
                          ? "#EventDisplay_Reminder_IgnoreEvent_Error"
                          : "#EventDisplay_Reminder_FollowEvent_Error"
                      ),
                      strDescription: Object(j.g)(
                        t
                          ? "#EventDisplay_Reminder_IgnoreEvent_ErrorDesc"
                          : "#EventDisplay_Reminder_FollowEvent_ErrorDesc"
                      ),
                    },
                    Object(L.a)(e).strErrorMsg
                  ),
                  window
                );
              }
              this.setState({ bIsRequestInFlight: !1 });
            }
          });
        }
        OnChangeFollowByEmail(e) {
          this.OnChangeFollowOrIgnore(e, !1, _.b.k_ENotifyFlagByEmail);
        }
        OnChangeFollowByPush(e) {
          this.OnChangeFollowOrIgnore(e, !1, _.b.k_ENotifyFlagByPush);
        }
        GetExternalCalendarEventTitle() {
          const { eventModel: e, lang: t } = this.props,
            n = e.GetNameWithFallback(t);
          if (c.d.BHasEntityNameForID(e.appid, e.clanSteamID.GetAccountID())) {
            return `${c.d.GetEntityNameForID(
              e.appid,
              e.clanSteamID.GetAccountID()
            )}: ${n}`;
          }
          return n;
        }
        TrackEventAction(e) {
          const { eventModel: t } = this.props;
          u.b.RecordAppInteractionEvent(t.appid, e);
        }
        GetExternalCalendarEventBody() {
          const { eventModel: e, lang: t } = this.props;
          let n = e.GetSubTitleWithLanguageFallback(t);
          n = n ? `${n}\n\n\n` : "";
          const a = e.GetSummaryWithFallback(t),
            i = e.jsondata.bSaleEnabled
              ? x.a.k_eStoreSalePage
              : x.a.k_eStoreView;
          return `${n}${a}\n\n${Object(x.d)(e, i, "forceAbsolute")}`;
        }
        GetGoogleCalendarLink() {
          const { eventModel: e } = this.props,
            t = encodeURIComponent(this.GetExternalCalendarEventTitle()),
            n = encodeURIComponent(this.GetExternalCalendarEventBody()),
            a = e.GetStartTimeAndDateUnixSeconds(),
            i = U(a),
            o = U(e.GetEndTimeAndDateUnixSeconds() || a + w.e.PerHour),
            r =
              (h.d.IN_CLIENT ? "steam://openurl_external/" : "") +
              `https://calendar.google.com/calendar/r/eventedit?text=${t}&details=${n}&dates=${i}/${o}`;
          return Object(B.h)(r);
        }
        GetICSDownloadLink(e) {
          const { eventModel: t, lang: n } = this.props,
            a = t.appid
              ? "app/" + t.appid
              : "group/" + t.clanSteamID.GetAccountID(),
            i = "l=" + Object(s.d)(n);
          return `${h.d.STORE_BASE_URL}${Object(x.f)()}/download/${a}/${e}/${
            t.GID
          }?${i}`;
        }
        render() {
          const {
              eventModel: e,
              bShowStartTime: t,
              bExpandLeft: n,
              bOnlyShowIcon: a,
              fnHasReminderSet: i,
              fnHidePanel: o,
            } = this.props,
            s = f.BHasValidatedEmail(),
            l = f.BHasPushNotification(),
            c = t && e.GetStartTimeAndDateUnixSeconds();
          return r.createElement(
            "div",
            null,
            r.createElement(
              "div",
              {
                className: Object(k.a)(
                  G.ReminderCheckBox,
                  a ? G.IconMode : G.TextMode,
                  "RemindMeWidget"
                ),
                onClick: o,
              },
              i() &&
                r.createElement(
                  "div",
                  { className: G.RemindCheck },
                  r.createElement(C.q, null)
                ),
              a &&
                r.createElement(
                  "div",
                  { className: G.RemindBell },
                  r.createElement(C.g, null)
                ),
              r.createElement(
                "div",
                { className: G.ReminderDefault },
                Object(j.g)("#EventDisplay_Reminder_SetReminder")
              ),
              r.createElement("div", { className: G.ReminderOpennedOptions })
            ),
            r.createElement(
              "div",
              {
                className: Object(k.a)(
                  G.FlexColumnContainer,
                  G.ReminderBackground,
                  n && G.ReminderExpandsLeft
                ),
              },
              this.state.bIsRequestInFlight &&
                r.createElement(N.a, {
                  className: G.RpcThrobber,
                  size: "xlarge",
                  position: "center",
                }),
              c &&
                r.createElement(
                  "div",
                  { className: G.FullStartTime },
                  Object(j.p)(
                    "#EventDisplay_EventUpcoming_WithDateAndTime",
                    Object(j.l)(
                      c,
                      Object(w.b)(
                        new Date(1e3 * c),
                        b.a.GetTimeNowWithOverrideAsDate()
                      )
                    ),
                    Object(S.d)(c, !0)
                  )
                ),
              r.createElement(
                "div",
                { className: G.ReminderOptionsHeader },
                Object(j.g)("#EventDisplay_Reminder_GetNotification_Via")
              ),
              r.createElement(
                "div",
                {
                  className: Object(k.a)(G.ReminderOption, !s && G.Unverified),
                },
                r.createElement(
                  R.a,
                  {
                    className: G.CheckboxWrapper,
                    strTooltipClassname: G.ReminderOptionTooltip,
                    toolTipContent: Object(j.g)(
                      s
                        ? "#EventReminder_NotifyByEmail_ttip"
                        : "#EventReminder_NotifyByEmail_Missing"
                    ),
                  },
                  r.createElement(y.f, {
                    label: Object(j.g)("#EventDisplay_Reminder_ViaEmail"),
                    disabled: !s,
                    checked: _.a
                      .Get()
                      .BFollowsEventAndNotifiedBy(
                        e.clanSteamID,
                        e.GID,
                        _.b.k_ENotifyFlagByEmail
                      ),
                    onChange: this.OnChangeFollowByEmail,
                  })
                ),
                !s &&
                  r.createElement(
                    "div",
                    { className: F.FlexColumnContainer },
                    r.createElement(
                      "a",
                      {
                        href: h.d.STORE_BASE_URL + "account/",
                        target: h.d.IN_CLIENT ? void 0 : "_blank",
                        onClick: () =>
                          this.TrackEventAction(
                            u.a.k_eReminder_EmailUnverified
                          ),
                      },
                      Object(j.g)("#EventReminder_NotifyByEmail_Missing_Add")
                    )
                  )
              ),
              r.createElement(
                "div",
                {
                  className: Object(k.a)(G.ReminderOption, !l && G.Unverified),
                },
                r.createElement(
                  R.a,
                  {
                    className: G.CheckboxWrapper,
                    strTooltipClassname: G.ReminderOptionTooltip,
                    toolTipContent: Object(j.g)(
                      l
                        ? "#EventReminder_NotifyByMobile_ttip"
                        : "#EventReminder_NotifyByMobile_Missing"
                    ),
                  },
                  r.createElement(y.f, {
                    label: Object(j.g)("#EventDisplay_Reminder_ViaMobileApp"),
                    disabled: !l,
                    checked: _.a
                      .Get()
                      .BFollowsEventAndNotifiedBy(
                        e.clanSteamID,
                        e.GID,
                        _.b.k_ENotifyFlagByPush
                      ),
                    onChange: this.OnChangeFollowByPush,
                  })
                ),
                !l &&
                  r.createElement(
                    "div",
                    { className: F.FlexColumnContainer },
                    r.createElement(
                      "a",
                      {
                        href: h.d.STORE_BASE_URL + "mobile/?show=steamapp",
                        target: h.d.IN_CLIENT ? void 0 : "_blank",
                        onClick: () =>
                          this.TrackEventAction(
                            u.a.k_eReminder_MobilePushMissing
                          ),
                      },
                      Object(j.g)("#EventReminder_NotifyByMobile_Install")
                    )
                  )
              ),
              r.createElement(
                r.Fragment,
                null,
                r.createElement(
                  "div",
                  { className: G.ReminderOptionsHeader },
                  Object(j.g)("#EventDisplay_Reminder_AddToCalendar")
                ),
                r.createElement(
                  "div",
                  { className: G.ReminderCalendarOptions },
                  r.createElement(
                    "a",
                    {
                      className: G.ReminderOption,
                      href: this.GetICSDownloadLink("ics"),
                      onClick: () =>
                        this.TrackEventAction(u.a.k_eReminder_CalendarApple),
                    },
                    Object(j.g)("#EventDisplay_Reminder_AppleCalendar_Short")
                  ),
                  r.createElement(
                    "a",
                    {
                      className: G.ReminderOption,
                      target: h.d.IN_CLIENT ? void 0 : "_blank",
                      href: this.GetGoogleCalendarLink(),
                      onClick: () =>
                        this.TrackEventAction(u.a.k_eReminder_CalendarGoogle),
                    },
                    Object(j.g)("#EventDisplay_Reminder_GoogleCalendar_Short")
                  ),
                  r.createElement(
                    "a",
                    {
                      className: G.ReminderOption,
                      href: this.GetICSDownloadLink("outlook"),
                      onClick: () =>
                        this.TrackEventAction(u.a.k_eReminder_CalendarOutlook),
                    },
                    Object(j.g)("#EventDisplay_Reminder_OutlookCalendar_Short")
                  )
                )
              ),
              !1
            )
          );
        }
      };
      Object(a.b)([I.b], W.prototype, "OnChangeFollowByEmail", null),
        Object(a.b)([I.b], W.prototype, "OnChangeFollowByPush", null),
        Object(a.b)([I.b], W.prototype, "TrackEventAction", null),
        (W = Object(a.b)([i.a], W));
    },
    ox7B: function (e, t, n) {
      e.exports = {
        DateAndTime: "localdateandtime_DateAndTime_1miMh",
        DateAndTimeInline: "localdateandtime_DateAndTimeInline_1jG_-",
        At: "localdateandtime_At_3D4jI",
        ActiveEvent: "localdateandtime_ActiveEvent_2ZcVE",
        ActiveEventCallOut: "localdateandtime_ActiveEventCallOut__y2DQ",
        RightSideTitles: "localdateandtime_RightSideTitles_3sPON",
        DateToolTip: "localdateandtime_DateToolTip_3zhja",
        ShortDateAndTime: "localdateandtime_ShortDateAndTime_4K3Bl",
        ShortDateRange: "localdateandtime_ShortDateRange_3sqcQ",
      };
    },
    qMjo: function (e, t, n) {
      e.exports = {
        Bold: "bbcodes_Bold_1opdq",
        Italic: "bbcodes_Italic_3PSCE",
        Header1: "bbcodes_Header1_38GFQ",
        Header2: "bbcodes_Header2_2ZqUv",
        Header3: "bbcodes_Header3_KePJs",
        Header4: "bbcodes_Header4_12a97",
        Header5: "bbcodes_Header5_4GmIV",
        SmallText: "bbcodes_SmallText_UvZC_",
        Underline: "bbcodes_Underline_3vpZi",
        Strike: "bbcodes_Strike_3dQvq",
        Spoiler: "bbcodes_Spoiler_3Caxn",
        SpoilerText: "bbcodes_SpoilerText_1owPz",
        DisabledMouseEvents: "bbcodes_DisabledMouseEvents_3QOEi",
        BlockQuote: "bbcodes_BlockQuote_2sfht",
        QuoteAuthor: "bbcodes_QuoteAuthor_2CMyS",
        PullQuote: "bbcodes_PullQuote_3DRIe",
        Code: "bbcodes_Code_1Aels",
        List: "bbcodes_List_tfM5V",
        OrderedList: "bbcodes_OrderedList_3Ve1E",
        ListItem: "bbcodes_ListItem_3DlO0",
        HR: "bbcodes_HR_26oRB",
        Table: "bbcodes_Table_2Z51g",
        NoBorder: "bbcodes_NoBorder_3aoME",
        TableRow: "bbcodes_TableRow_Ms77J",
        TableData: "bbcodes_TableData_2t3YC",
        TableHeader: "bbcodes_TableHeader_1vvfx",
        EqualCells: "bbcodes_EqualCells_5b-QB",
        ExpandSectionBlock: "bbcodes_ExpandSectionBlock_YvEQh",
        ExpandSectionHeader: "bbcodes_ExpandSectionHeader_3OxxM",
        EmbedArrow: "bbcodes_EmbedArrow_WXJl-",
        ExpandSectionBody: "bbcodes_ExpandSectionBody_2sCNL",
        ExpandSection_WithTitle: "bbcodes_ExpandSection_WithTitle_22nl0",
        LinkButton: "bbcodes_LinkButton_lMVeY",
      };
    },
    "rB+X": function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return s;
      }),
        n.d(t, "a", function () {
          return l;
        });
      n("aoTL");
      var a = n("q1tI"),
        i = (n("Zdsb"), n("XrGS"), n("KVor")),
        o = n("2VXD"),
        r = n("oleE");
      function s(e) {
        const [t, n] = Object(a.useState)(i.b.GetClanEventModel(e)),
          r = Object(o.a)("usePartnerEventByEventGID");
        return (
          Object(a.useEffect)(() => {
            (null == t ? void 0 : t.GID) != e &&
              (i.b.Init(),
              i.b
                .LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs([e], [], r)
                .then((t) => {
                  1 != (null == t ? void 0 : t.length) ||
                    t[0].GID != e ||
                    r.token.reason ||
                    n(t[0]);
                }));
          }, [e, t, r]),
          t
        );
      }
      function l(e, t, n) {
        const [s, l] = Object(a.useState)(i.b.GetClanEventModel(t)),
          c = Object(o.a)("usePartnerEventByClanAccountAndEventGID");
        return (
          Object(a.useEffect)(() => {
            if ((null == s ? void 0 : s.GID) != t) {
              i.b.Init();
              const a = r.a.InitFromClanID(e);
              i.b
                .LoadPartnerEventFromClanEventGIDAndClanSteamID(a, t, 0, n)
                .then((e) => {
                  c.token.reason || l(e);
                });
            }
          }, [e, t, s, c]),
          s
        );
      }
    },
    uzoi: function (e, t, n) {
      "use strict";
      n.d(t, "c", function () {
        return S;
      }),
        n.d(t, "d", function () {
          return D;
        }),
        n.d(t, "b", function () {
          return T;
        }),
        n.d(t, "e", function () {
          return C;
        }),
        n.d(t, "a", function () {
          return N;
        }),
        n.d(t, "f", function () {
          return L;
        }),
        n.d(t, "g", function () {
          return k;
        }),
        n.d(t, "h", function () {
          return j;
        }),
        n.d(t, "n", function () {
          return w;
        }),
        n.d(t, "i", function () {
          return B;
        }),
        n.d(t, "l", function () {
          return A;
        }),
        n.d(t, "j", function () {
          return M;
        }),
        n.d(t, "m", function () {
          return x;
        }),
        n.d(t, "k", function () {
          return F;
        }),
        n.d(t, "o", function () {
          return H;
        }),
        n.d(t, "p", function () {
          return V;
        });
      var a = n("mrSG"),
        i = n("q1tI"),
        o = n("msu0"),
        r = n("Zdsb"),
        s = n("fsrB"),
        l = (n("Ao8p"), n("XrGS"), n("lfGQ")),
        c = n("JUQq"),
        d = n("/MtM"),
        m = n("2dJq"),
        u = n("nWW+"),
        b = n("7myZ"),
        _ = n("e356"),
        p = n("0JCO"),
        h = n("GbHM"),
        E = n("GXif"),
        g = n("pSt8"),
        v = n("/Q1a"),
        f = n("pY4P"),
        O = n("qMjo"),
        y = n.n(O);
      const S = new Map([
        [
          "b",
          {
            Constructor: function (e) {
              return i.createElement(
                "div",
                { className: y.a.Bold },
                e.children
              );
            },
            autocloses: !1,
          },
        ],
        [
          "i",
          {
            Constructor: function (e) {
              return i.createElement(
                "div",
                { className: Object(h.a)(y.a.Italic, "BB_Italic") },
                e.children
              );
            },
            autocloses: !1,
          },
        ],
        ["h1", { Constructor: L, autocloses: !1, skipFollowingNewline: !0 }],
        ["h2", { Constructor: k, autocloses: !1, skipFollowingNewline: !0 }],
        ["h3", { Constructor: j, autocloses: !1, skipFollowingNewline: !0 }],
        [
          "h4",
          {
            Constructor: function (e) {
              return R(e, Object(h.a)(y.a.Header4, "BB_Header4"));
            },
            autocloses: !1,
            skipFollowingNewline: !0,
          },
        ],
        [
          "h5",
          {
            Constructor: function (e) {
              return R(e, Object(h.a)(y.a.Header5, "BB_Header5"));
            },
            autocloses: !1,
            skipFollowingNewline: !0,
          },
        ],
        [
          "smalltext",
          {
            Constructor: function (e) {
              return R(e, Object(h.a)(y.a.SmallText, "BB_SmallText"));
            },
            autocloses: !1,
            skipFollowingNewline: !0,
          },
        ],
        [
          "u",
          {
            Constructor: function (e) {
              return i.createElement(
                "div",
                { className: y.a.Underline },
                e.children
              );
            },
            autocloses: !1,
          },
        ],
        [
          "strike",
          {
            Constructor: function (e) {
              return i.createElement(
                "div",
                { className: y.a.Strike },
                e.children
              );
            },
            autocloses: !1,
          },
        ],
        [
          "spoiler",
          {
            Constructor: function (e) {
              return i.createElement(
                "span",
                { className: y.a.Spoiler },
                i.createElement(
                  "span",
                  { className: y.a.SpoilerText },
                  e.children
                )
              );
            },
            autocloses: !1,
          },
        ],
        [
          "hr",
          {
            Constructor: function (e) {
              return i.createElement("div", { className: y.a.HR });
            },
            autocloses: !1,
          },
        ],
        [
          "noparse",
          {
            Constructor: function (e) {
              return e.children;
            },
            autocloses: !1,
          },
        ],
        [
          "url",
          {
            Constructor: function (e) {
              const t = C(e.args),
                n = "button" == C(e.args, "style") ? y.a.LinkButton : null;
              let a = C(e.args, "id");
              a &&
                "string" == typeof a &&
                a.length > 0 &&
                "#" === a[0] &&
                (a = a.substring(1));
              if (void 0 === t && !a) return e.children || "";
              if (
                void 0 === t ||
                ("string" == typeof t && t.length > 0 && "#" == t[0])
              )
                return i.createElement(
                  "a",
                  { href: null != t ? t : null, id: a },
                  e.children
                );
              return i.createElement(
                I,
                { className: n, href: t, id: a },
                e.children
              );
            },
            autocloses: !1,
          },
        ],
        ["quote", { Constructor: w, autocloses: !1 }],
        [
          "pullquote",
          {
            Constructor: function (e) {
              return i.createElement(
                "div",
                { className: y.a.PullQuote },
                e.children
              );
            },
            autocloses: !1,
          },
        ],
        [
          "code",
          {
            Constructor: function (e) {
              return i.createElement(
                "div",
                { className: y.a.Code },
                e.children
              );
            },
            autocloses: !1,
          },
        ],
        ["list", { Constructor: B, autocloses: !1, skipInternalNewline: !0 }],
        ["olist", { Constructor: A, autocloses: !1, skipInternalNewline: !0 }],
        ["*", { Constructor: M, autocloses: !0, skipInternalNewline: !0 }],
        [
          "table",
          {
            Constructor: function (e) {
              const t = C(e.args, "noborder"),
                n = C(e.args, "equalcells");
              return i.createElement(
                "div",
                {
                  className: Object(h.a)(
                    y.a.Table,
                    "BB_Table",
                    t && y.a.NoBorder,
                    n && y.a.EqualCells
                  ),
                },
                e.children
              );
            },
            autocloses: !1,
            skipInternalNewline: !0,
          },
        ],
        [
          "tr",
          {
            Constructor: function (e) {
              return i.createElement(
                "div",
                { className: Object(h.a)(y.a.TableRow, "BB_TableRow") },
                e.children
              );
            },
            autocloses: !1,
            skipInternalNewline: !0,
            skipFollowingNewline: !0,
          },
        ],
        [
          "th",
          {
            Constructor: function (e) {
              return i.createElement(
                "div",
                { className: y.a.TableHeader },
                e.children
              );
            },
            autocloses: !1,
            skipInternalNewline: !0,
            skipFollowingNewline: !0,
          },
        ],
        [
          "td",
          {
            Constructor: function (e) {
              const t = C(e.args, "width");
              return i.createElement(
                "div",
                {
                  className: Object(h.a)(y.a.TableData, "BB_TableData"),
                  style: t && { width: t },
                },
                e.children
              );
            },
            autocloses: !1,
            skipInternalNewline: !0,
            skipFollowingNewline: !0,
          },
        ],
        [
          "expand",
          {
            Constructor: function (e) {
              const t = Boolean(C(e.args, "expanded")),
                [n, a] = i.useState(t),
                o = (function (e, t) {
                  switch (e) {
                    case "details":
                      return {
                        collapsed: "#Bbcode_Expand_Details_Collapsed",
                        expanded: "#Bbcode_Expand_Details_Expanded",
                        style: y.a.ExpandSection_Details,
                      };
                    case "spoiler":
                      return {
                        collapsed: "#Bbcode_Expand_Spoiler_Collapsed",
                        expanded: "#Bbcode_Expand_Spoiler_Expanded",
                        style: y.a.ExpandSection_Spoiler,
                      };
                    case "title":
                      return {
                        collapsed: t || "#Bbcode_Expand_ShowMore_Collapsed",
                        expanded: t || "#Bbcode_Expand_ShowMore_Expanded",
                        style: y.a.ExpandSection_WithTitle,
                      };
                    default:
                    case "showmore":
                      return {
                        collapsed: "#Bbcode_Expand_ShowMore_Collapsed",
                        expanded: "#Bbcode_Expand_ShowMore_Expanded",
                        style: y.a.ExpandSection_ShowMore,
                      };
                  }
                })(C(e.args, "type"), C(e.args, "title"));
              return i.createElement(
                "div",
                {
                  className: Object(h.a)(
                    y.a.ExpandSectionBlock,
                    o.style,
                    n ? y.a.ExpandSectionExpanded : y.a.ExpandSectionCollapsed
                  ),
                },
                i.createElement(
                  "div",
                  { className: y.a.ExpandSectionHeader, onClick: () => a(!n) },
                  Object(E.g)(n ? o.expanded : o.collapsed),
                  i.createElement(
                    "div",
                    { className: y.a.EmbedArrow },
                    i.createElement(_.E, { angle: n ? 180 : 0 })
                  )
                ),
                n &&
                  i.createElement(
                    "div",
                    { className: y.a.ExpandSectionBody },
                    e.children
                  )
              );
            },
            autocloses: !1,
            skipInternalNewline: !0,
            allowWrapTextForCopying: !0,
          },
        ],
        [
          "remindme",
          {
            Constructor: function (e) {
              const { event: t } = e.context,
                n = C(e.args);
              if (n) return i.createElement(u.a, { eventGID: n });
              if (t) {
                const e = Object(o.g)(v.d.LANGUAGE);
                return i.createElement(u.b, { eventModel: t, lang: e });
              }
              return null;
            },
            autocloses: !1,
          },
        ],
        [
          "doclink",
          {
            Constructor: function (e) {
              const t = C(e.args),
                n = "button" == C(e.args, "style") ? y.a.LinkButton : null;
              return i.createElement(
                I,
                { className: n, href: `${v.d.PARTNER_BASE_URL}doc/${t}` },
                e.children
              );
            },
            autocloses: !1,
          },
        ],
      ]);
      new Map([
        ["looping_media", { Constructor: F, autocloses: !1 }],
        ["video", { Constructor: H, autocloses: !1 }],
        ["youtubeorvideo", { Constructor: V, autocloses: !1 }],
        ["previewyoutube", { Constructor: x, autocloses: !1 }],
      ]);
      function D(e, t, n = 0) {
        const a = v.d.MEDIA_CDN_COMMUNITY_URL + "images/clans/";
        if (void 0 !== e && e.startsWith(f.e))
          return a + e.substring(f.e.length + 1);
        if (void 0 !== e && e.startsWith(f.d)) {
          const i = new Array(),
            o = e.substr(f.d.length + 1),
            s = c.a.GetHashFromHashAndExt(o),
            l = c.a.GetExtensionStringFromHashAndExt(o);
          if (null != t) {
            let e = Object(r.f)(t);
            i.push(a + s + "/" + e + l + "?t=" + n),
              4 == t &&
                ((e = Object(r.k)(Object(r.f)(t))),
                i.push(a + s + "/" + e + l + "?t=" + n));
          }
          return i.push(a + o), i;
        }
        return e;
      }
      function T(e, t) {
        if (e.startsWith("steam://")) return !1;
        if (e.startsWith("/")) return !1;
        const n = Object(g.f)(e).toLowerCase(),
          a = Object(g.f)(v.d.COMMUNITY_BASE_URL).toLowerCase(),
          i = Object(g.f)(v.d.STORE_BASE_URL).toLowerCase(),
          o = Object(g.f)(v.d.HELP_BASE_URL).toLowerCase(),
          r = Object(g.f)(v.d.PARTNER_BASE_URL || "").toLowerCase();
        return (
          n !== a &&
          n !== i &&
          n !== o &&
          "support.steampowered.com" !== n &&
          n !== r &&
          (!t || 0 == t.filter((e) => n == e).length)
        );
      }
      function C(e, t) {
        return void 0 === t ? e[""] : e[t];
      }
      function N(e, t) {
        return (n) =>
          e(
            Object.assign(Object.assign({}, n), {
              className: Object(h.a)(n.className, t),
            })
          );
      }
      function R(e, t) {
        let n = C(e.args, "id");
        return (
          n &&
            "string" == typeof n &&
            n.length > 0 &&
            "#" === n[0] &&
            (n = n.substring(1)),
          i.createElement(
            "div",
            { id: n || void 0, className: Object(h.a)(t, e.className) },
            e.children
          )
        );
      }
      function L(e) {
        return R(e, Object(h.a)(y.a.Header1, "BB_Header1"));
      }
      function k(e) {
        return R(e, Object(h.a)(y.a.Header2, "BB_Header2"));
      }
      function j(e) {
        return R(e, Object(h.a)(y.a.Header3, "BB_Header3"));
      }
      const I = (e) => {
        const { href: t } = e,
          n = Object(a.c)(e, ["href"]),
          o = Object(p.c)();
        let r,
          c = Object(l.d)(t, o);
        T(c) &&
          ((c =
            (v.d.IN_CLIENT ? "steam://openurl_external/" : "") +
            v.d.COMMUNITY_BASE_URL +
            "linkfilter/?url=" +
            c),
          (r = "noopener nofollow"));
        const d =
          "string" == typeof e.children &&
          e.children.length > 0 &&
          t &&
          !t.startsWith("steam://")
            ? Object(g.g)(t)
            : void 0;
        return i.createElement(
          s.c,
          Object.assign({}, n, { href: c, rel: r }),
          i.createElement("span", { "data-tooltip-text": d }, e.children)
        );
      };
      function w(e) {
        const t = C(e.args, "author");
        return i.createElement(
          "blockquote",
          { className: Object(h.a)(y.a.BlockQuote, e.className) },
          !!t &&
            i.createElement(
              "div",
              { className: y.a.QuoteAuthor },
              Object(E.g)("#Bbcode_Originally_Posted_By") + " ",
              " ",
              i.createElement("b", null, t + ":")
            ),
          e.children
        );
      }
      function B(e) {
        return i.createElement("ul", { className: y.a.List }, e.children);
      }
      function A(e) {
        return i.createElement(
          "ol",
          { className: y.a.OrderedList },
          e.children
        );
      }
      function M(e) {
        let t = C(e.args, "id");
        return (
          t &&
            "string" == typeof t &&
            t.length > 0 &&
            "#" === t[0] &&
            (t = t.substring(1)),
          i.createElement(
            "li",
            { className: y.a.ListItem, id: t || void 0 },
            e.children
          )
        );
      }
      function x(e) {
        if (v.d.EREALM === r.h.k_ESteamRealmChina) return null;
        let t = C(e.args);
        if (t) {
          let e = t.split(";");
          if (2 == e.length) {
            let t = e[0],
              n = e[1].toLocaleLowerCase(),
              a = "full" == n ? m.sizeFull : m.sizeThumb,
              o =
                "full" == n
                  ? ""
                  : "leftthumb" == n
                  ? m.floatLeft
                  : m.floatRight;
            return i.createElement(d.a, {
              videoID: t,
              classNameAlign: o,
              classNameSize: a,
              bShowVideoImmediately: !0,
            });
          }
        }
        return i.createElement(i.Fragment, null);
      }
      function G(e) {
        let t = C(e.args, "poster");
        t && (t = Object(g.i)(t));
        const n = new Array();
        {
          const t = C(e.args, "mp4");
          t && n.push({ sURL: Object(g.i)(t), sFormat: "video/mp4" });
          const a = C(e.args, "webm");
          a && n.push({ sURL: Object(g.i)(a), sFormat: "video/webm" });
        }
        const a = Object(o.g)(v.d.LANGUAGE),
          i = 0 != a,
          s = new Array();
        for (let t = 0; t < 30; t++) {
          const n = C(e.args, "sub_" + Object(r.g)(t));
          n &&
            s.push({
              sURL: Object(g.i)(n),
              eLanguage: t,
              sKind: "subtitles",
              bDefault: i && t == a,
            });
          const o = C(e.args, "cap_" + Object(r.g)(t));
          o &&
            s.push({
              sURL: Object(g.i)(o),
              eLanguage: t,
              sKind: "captions",
              bDefault: i && t == a,
            });
        }
        return { sPoster: t, rgVideoSources: n, rgVideoTracks: s };
      }
      function F(e) {
        const t = G(e);
        return i.createElement(b.a, {
          video: t,
          bAutoPlay: !0,
          bControls: !1,
          bLoop: !0,
        });
      }
      function H(e) {
        const t = G(e),
          n = e.children ? e.children.toString() : void 0;
        n &&
          n.startsWith("http") &&
          t.rgVideoSources.push({
            sURL: Object(g.i)(n),
            sFormat: "video/webm",
          });
        const a = C(e.args, "autoplay"),
          o = "0" !== a && "off" !== a && "false" !== a,
          r = C(e.args, "controls"),
          s = "0" !== r && "off" !== r && "false" !== r;
        return i.createElement(b.a, {
          video: t,
          bAutoPlay: o,
          bControls: s,
          bLoop: o,
        });
      }
      function V(e) {
        if (
          v.d.EREALM === r.h.k_ESteamRealmChina ||
          "CN" == v.d.COUNTRY.toLocaleUpperCase()
        )
          return H(e);
        const t = C(e.args, "youtubeid"),
          n = C(e.args, "size"),
          a = C(e.args, "seconds");
        let o = "full" == n ? m.sizeFull : m.sizeThumb,
          s = "full" == n ? "" : "leftthumb" == n ? m.floatLeft : m.floatRight;
        return i.createElement(d.a, {
          videoID: t,
          nStartSeconds: a ? Number.parseInt(a) : void 0,
          classNameAlign: s,
          classNameSize: o,
          bShowVideoImmediately: !0,
        });
      }
    },
  },
]);
