/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [3207],
  {
    16646: (e) => {
      e.exports = {
        VideoReviewCtn: "twitchembed_VideoReviewCtn_nNaTz",
        YouTubePreviewImage: "twitchembed_YouTubePreviewImage__mxmF",
        TwitchPlayer: "twitchembed_TwitchPlayer_Ny5PH",
      };
    },
    95771: (e) => {
      e.exports = { BreadContainer: "breadcrumbs_BreadContainer_1QPim" };
    },
    5089: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        OtherEventsCtn: "eventrow_OtherEventsCtn_1qNsZ",
        OtherEvents_MainImageCtn: "eventrow_OtherEvents_MainImageCtn_1_8oy",
        OtherEvents: "eventrow_OtherEvents_2ioeM",
        OtherEvents_EventCtn: "eventrow_OtherEvents_EventCtn_17gGs",
        OtherEvents_MainImage: "eventrow_OtherEvents_MainImage_3xf4A",
        OtherEvents_BGImage: "eventrow_OtherEvents_BGImage_3rp-l",
        OtherEvents_ContentCtn: "eventrow_OtherEvents_ContentCtn_3QaFW",
        OtherEvents_TextCtn: "eventrow_OtherEvents_TextCtn_2AVL1",
        OtherEvents_TextTitle: "eventrow_OtherEvents_TextTitle_3Zufl",
        UpcomingCtn: "eventrow_UpcomingCtn_--lM7",
        OtherEvents_SubTitle: "eventrow_OtherEvents_SubTitle_2UUNj",
        HoversEnabled: "eventrow_HoversEnabled_34Nxj",
        PartnerEventRowCapsule_MainImage:
          "eventrow_PartnerEventRowCapsule_MainImage_2bZBn",
        EventSummaryContainer: "eventrow_EventSummaryContainer_3PdWg",
        EventSummaryText: "eventrow_EventSummaryText_h5tE8",
        EventSummaryType: "eventrow_EventSummaryType_1Fp_l",
        HorizontalEvent: "eventrow_HorizontalEvent_1RS0b",
        HorizontalSummary: "eventrow_HorizontalSummary_3_1Qo",
        HorizontalTitle: "eventrow_HorizontalTitle_1m9zE",
        HorizontalDescriptionCtn: "eventrow_HorizontalDescriptionCtn_2s9cB",
        HorizontalDescription: "eventrow_HorizontalDescription_Dc9KC",
        AppCapsuleImage: "eventrow_AppCapsuleImage_2vo-l",
        AppCapsuleCtn: "eventrow_AppCapsuleCtn_1kYha",
        AppCapsuleImageHover: "eventrow_AppCapsuleImageHover_rcwMf",
        AppCapsulePrice: "eventrow_AppCapsulePrice_Jq75m",
      };
    },
    51857: (e) => {
      e.exports = {
        YoutubePreviewImage: "youtubepreviewimage_YoutubePreviewImage_MzScK",
        YoutubePlayer: "youtubepreviewimage_YoutubePlayer_3uK6c",
      };
    },
    94608: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        CuratorListCtn: "curatorlist_CuratorListCtn_2gWFd",
        CuratorMoreCtn: "curatorlist_CuratorMoreCtn_16t3P",
        TopReviewInfo: "curatorlist_TopReviewInfo_3SZBz",
        SaleBanner: "curatorlist_SaleBanner_1wbf-",
        Title: "curatorlist_Title_1MhFd",
        Blurb: "curatorlist_Blurb_rrcHS",
        VideoReviewCtn: "curatorlist_VideoReviewCtn_Rojwr",
        YouTubePreviewImage: "curatorlist_YouTubePreviewImage_eObSf",
        CuratorList: "curatorlist_CuratorList_1VI6G",
        CuratorListGrid: "curatorlist_CuratorListGrid_qJM6j",
        CuratorReview: "curatorlist_CuratorReview_31hoQ",
        CapsuleCtn: "curatorlist_CapsuleCtn_MY9Lk",
        YouTubeCapsule: "curatorlist_YouTubeCapsule_1siEs",
        YouTubeCtn: "curatorlist_YouTubeCtn_1uz1W",
        YouTubeCapsuleBottomBar: "curatorlist_YouTubeCapsuleBottomBar_1d9Mp",
        GameImageCtn: "curatorlist_GameImageCtn_220F7",
        GameImage: "curatorlist_GameImage_7gTF4",
        FullWidth: "curatorlist_FullWidth_3ditF",
        ReviewTextSection: "curatorlist_ReviewTextSection_1597W",
        GameTitle: "curatorlist_GameTitle_nl2T_",
        RecommendationTypeAndDate:
          "curatorlist_RecommendationTypeAndDate_2lz6u",
        Recommended: "curatorlist_Recommended_3v9Qi",
        NotRecommended: "curatorlist_NotRecommended_3iOGo",
        Informational: "curatorlist_Informational_261Fh",
        ReviewDate: "curatorlist_ReviewDate_HCiYl",
        ReviewBlurb: "curatorlist_ReviewBlurb_1y_bx",
        FullReviewLink: "curatorlist_FullReviewLink_3_8G-",
        FullReviewAnchor: "curatorlist_FullReviewAnchor_3pWCN",
        FullReviewDomain: "curatorlist_FullReviewDomain_2R37N",
      };
    },
    11581: (e) => {
      e.exports = { BreadContainer: "curatorminiheader_BreadContainer_GkVFI" };
    },
    66294: (e, t, a) => {
      "use strict";
      a.d(t, { p: () => c });
      var r = a(33940),
        n = a(89526),
        o = a(44026),
        l = a(17589),
        i = a(4306),
        s = a(32765),
        u = a(94952);
      function c(e) {
        const { children: t, navTreeRef: a } = e,
          c = (0, r._T)(e, ["children", "navTreeRef"]),
          m = n.useRef(),
          d = (0, i.BE)(m, a),
          p = (0, s.id)(),
          _ = window.__virtual_keyboard_client;
        if (
          ((0, n.useEffect)(() => {
            u.Wz.SetHookFactory(() => _);
          }, [_]),
          p)
        ) {
          const e = window.__nav_tree_root;
          return n.createElement(
            o.Fe,
            Object.assign({}, c, {
              navTreeRef: d,
              secondary: !0,
              parentEmbeddedNavTree: e,
            }),
            n.createElement(l.O, null, t),
          );
        }
        return n.createElement(n.Fragment, null, t);
      }
    },
    26412: (e, t, a) => {
      "use strict";
      a.d(t, { HO: () => u, S6: () => m });
      const r = 20,
        n = /^.*youtube[^v]+v=(.{11}).*/,
        o = /^.*youtu\.be\/(.{11}).*/,
        l = /^.*youtube.*\/embed\/(.{11}).*/,
        i = /^.*[?&]t=([^&]+)(?:&|$)/,
        s = /^(?:(?:([\d]+)h)?(?:([\d]+)m)?(?:([\d]+)s)?|([\d]+))$/;
      function u(e) {
        return !!c(e);
      }
      function c(e) {
        const t =
          (null == e ? void 0 : e.length) < r
            ? void 0
            : n.exec(e) || o.exec(e) || l.exec(e);
        return null == t ? void 0 : t[1];
      }
      function m(e) {
        const t = c(e);
        if (!t) return;
        const a = (function (e) {
            const t = i.exec(e);
            return null == t ? void 0 : t[1];
          })(e),
          r = a
            ? (function (e) {
                const t = s.exec(e);
                if (
                  !(
                    (null == t ? void 0 : t[1]) ||
                    (null == t ? void 0 : t[2]) ||
                    (null == t ? void 0 : t[3]) ||
                    (null == t ? void 0 : t[4])
                  )
                )
                  return;
                if (null == t ? void 0 : t[4])
                  return parseInt(null == t ? void 0 : t[4]);
                let a = 0;
                return (
                  (null == t ? void 0 : t[1]) && (a += 3600 * parseInt(t[1])),
                  (null == t ? void 0 : t[2]) && (a += 60 * parseInt(t[2])),
                  (null == t ? void 0 : t[3]) && (a += parseInt(t[3])),
                  a
                );
              })(a)
            : void 0;
        return { strVideoID: t, nStartSeconds: r };
      }
    },
    68818: (e, t, a) => {
      "use strict";
      a.d(t, { Me: () => s, Mx: () => c, XC: () => u });
      var r = a(89526),
        n = a(10412),
        o = a(58218),
        l = a(47165),
        i = a(32765);
      a(57361);
      function s(e, t = 0, a) {
        const [s, u] = (0, r.useState)(n.j1.GetClanEventFromAnnouncementGID(e)),
          c = (0, o.T)("usePartnerEventByAnnouncementGID");
        return (
          (0, r.useEffect)(() => {
            if ((null == s ? void 0 : s.AnnouncementGID) != e) {
              n.j1.Init();
              const r = new l.K(i.JA.CLANSTEAMID);
              n.j1
                .LoadPartnerEventFromAnnoucementGIDAndClanSteamID(r, e, t, a)
                .then((e) => {
                  e && !c.token.reason && u(e);
                });
            }
          }, [e, t, a, s, c]),
          s
        );
      }
      function u(e) {
        const [t, a] = (0, r.useState)(n.j1.GetClanEventModel(e)),
          l = (0, o.T)("usePartnerEventByEventGID");
        return (
          (0, r.useEffect)(() => {
            (null == t ? void 0 : t.GID) != e &&
              (n.j1.Init(),
              n.j1
                .LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs([e], [], l)
                .then((t) => {
                  1 != (null == t ? void 0 : t.length) ||
                    t[0].GID != e ||
                    l.token.reason ||
                    a(t[0]);
                }));
          }, [e, t, l]),
          t
        );
      }
      function c(e, t, a) {
        const [i, s] = (0, r.useState)(n.j1.GetClanEventModel(t)),
          u = (0, o.T)("usePartnerEventByClanAccountAndEventGID");
        return (
          (0, r.useEffect)(() => {
            if ((null == i ? void 0 : i.GID) != t) {
              n.j1.Init();
              const r = l.K.InitFromClanID(e);
              n.j1
                .LoadPartnerEventFromClanEventGIDAndClanSteamID(r, t, 0, a)
                .then((e) => {
                  u.token.reason || s(e);
                });
            }
          }, [e, t, i, a, u]),
          i
        );
      }
    },
    65858: (e, t, a) => {
      "use strict";
      a.d(t, { b: () => u });
      var r = a(89526),
        n = a(95771),
        o = a(19304),
        l = a(565),
        i = a(44026),
        s = a(51438);
      function u(e) {
        const { crumbs: t, className: a } = e;
        return t && 0 != t.length
          ? r.createElement(
              "div",
              { className: (0, o.Z)(n.BreadContainer, a) },
              r.createElement(
                s.s,
                { className: "blockbg", "flow-children": "row" },
                t.map((e) => {
                  const t = new Array();
                  return (
                    e.url.startsWith("http")
                      ? t.push(
                          r.createElement(
                            i.IS,
                            { key: "anchor_" + e.name, href: e.url },
                            e.name,
                          ),
                        )
                      : t.push(
                          r.createElement(
                            l.rU,
                            { key: "link_" + e.name, to: e.url },
                            e.name,
                          ),
                        ),
                    t.push(
                      r.createElement("span", { key: e.name + "span" }, " > "),
                    ),
                    t
                  );
                }),
              ),
              r.createElement("div", { style: { clear: "left" } }),
            )
          : null;
      }
    },
    86177: (e, t, a) => {
      "use strict";
      a.d(t, { e: () => v, m: () => p });
      var r,
        n = a(33940),
        o = a(89526),
        l = a(11837),
        i = a(74802),
        s = a(4306),
        u = a(19304),
        c = a(69338);
      !(function (e) {
        (e[(e.NotLoaded = 0)] = "NotLoaded"),
          (e[(e.Loading = 1)] = "Loading"),
          (e[(e.Loaded = 2)] = "Loaded");
      })(r || (r = {}));
      let m = r.NotLoaded,
        d = [];
      function p(e) {
        if (m == r.Loaded) return void e();
        if (m == r.NotLoaded) {
          let e = document.createElement("script");
          e.src = "https://www.youtube.com/iframe_api";
          let t = document.getElementsByTagName("script")[0];
          t.parentNode.insertBefore(e, t), (window.onYouTubeIframeAPIReady = _);
        }
        d.findIndex((t) => e == t) < 0 && d.push(e);
      }
      function _() {
        m = r.Loaded;
        for (let e of d) e();
        d = [];
      }
      class v extends o.Component {
        constructor(e) {
          super(e),
            (this.m_strPlayerID = ""),
            (this.m_player = null),
            (this.m_playerContainer = null),
            (this.m_bPlayerReady = !1),
            (this.m_strPlayerID = "YoutubePlayer_" + v.s_nPlayerIndex++),
            (this.state = { bYoutubeLoaded: !1 });
        }
        componentWillUnmount() {
          var e;
          this.DestroyPlayer(), (e = this.OnYoutubeScriptsReady), l.Zf(d, e);
        }
        shouldComponentUpdate(e, t) {
          if (!this.m_player) return !1;
          const a = this.props;
          return a.autoplay != e.autoplay ||
            a.controls != e.controls ||
            a.showInfo != e.showInfo ||
            a.video != e.video
            ? (this.CreatePlayer(e), !1)
            : ((a.width == e.width && a.height == e.height) ||
                (this.m_bPlayerReady &&
                  e.width &&
                  e.height &&
                  this.m_player.setSize(e.width, e.height)),
              a.forcePause != e.forcePause);
        }
        componentDidUpdate(e) {
          e.forcePause != this.props.forcePause &&
            (this.props.forcePause
              ? this.m_player.pauseVideo()
              : this.m_player.playVideo());
        }
        DestroyPlayer() {
          if (this.m_player)
            try {
              this.m_player.stopVideo && this.m_player.stopVideo(),
                this.m_player.destroy && this.m_player.destroy();
            } catch (e) {
            } finally {
              this.m_player = null;
            }
        }
        BindPlayerContainer(e) {
          this.m_playerContainer != e &&
            ((this.m_playerContainer = e),
            this.DestroyPlayer(),
            this.m_playerContainer && p(this.OnYoutubeScriptsReady));
        }
        OnYoutubeScriptsReady() {
          this.CreatePlayer(this.props);
        }
        CreatePlayer(e) {
          if ((this.DestroyPlayer(), !this.m_playerContainer)) return;
          const t = !1 === e.autoplay ? 0 : 1,
            a = !0 === e.showInfo ? 1 : 0,
            r = !0 === e.controls ? 1 : 0,
            n = !0 === e.showFullscreenBtn ? 1 : 0,
            o = !0 === e.playsInline ? 1 : 0;
          let l = {
              width: void 0 !== e.width ? String(e.width) : void 0,
              height: void 0 !== e.height ? String(e.height) : void 0,
              videoId: e.video,
              playerVars: {
                autoplay: t,
                showinfo: a,
                autohide: 1,
                fs: n,
                modestbranding: 1,
                rel: 0,
                playsinline: o,
                iv_load_policy: 3,
                controls: r,
                start: e.startSeconds,
              },
              events: {
                onReady: this.OnPlayerReady,
                onStateChange: this.OnPlayerStateChange,
                onError: this.OnError,
              },
            },
            i = this.m_playerContainer.firstElementChild;
          (this.m_bPlayerReady = !1), (this.m_player = new YT.Player(i, l));
        }
        OnPlayerReady(e) {
          if (((this.m_bPlayerReady = !0), this.props.onVideoInfoChanged)) {
            let e = this.m_player.getVideoData(),
              t = { strAuthor: "", strTitle: "", strVideoID: "" };
            e.author && (t.strAuthor = e.author),
              e.title && (t.strTitle = e.title),
              e.video_id && (t.strVideoID = e.video_id),
              this.props.onVideoInfoChanged(t);
          }
          this.props.width &&
            this.props.height &&
            this.m_player.setSize(this.props.width, this.props.height),
            this.props.autoplay && this.m_player.playVideo(),
            this.props.onPlayerReady && this.props.onPlayerReady();
        }
        OnPlayerStateChange(e) {
          switch (e.data) {
            case YT.PlayerState.UNSTARTED:
              break;
            case YT.PlayerState.BUFFERING:
              this.props.onBuffering && this.props.onBuffering();
              break;
            case YT.PlayerState.PLAYING:
              this.props.onPlaying && this.props.onPlaying();
              break;
            case YT.PlayerState.PAUSED:
              this.props.onPaused && this.props.onPaused();
              break;
            case YT.PlayerState.ENDED:
              this.props.onMovieEnd && this.props.onMovieEnd();
          }
        }
        OnError(e) {
          console.log("Youtube: Playback failed", e),
            this.props.onError && this.props.onError(e);
        }
        OnPlayerLeftView() {
          this.props.autopause &&
            this.m_player &&
            this.m_bPlayerReady &&
            this.m_player.pauseVideo();
        }
        PlayVideo(e) {
          this.m_player &&
            this.m_bPlayerReady &&
            (e && this.m_player.seekTo(0, !0), this.m_player.playVideo());
        }
        render() {
          const e = o.createElement(
            "div",
            {
              key: this.m_strPlayerID,
              ref: this.BindPlayerContainer,
              className: (0, u.Z)("YoutubePlayer", this.props.classnames),
            },
            o.createElement(c.V, { className: "YoutubePlayerThrobber" }),
          );
          return this.props.autopause
            ? o.createElement(i.h, { onLeave: this.OnPlayerLeftView }, e)
            : e;
        }
      }
      (v.s_nPlayerIndex = 0),
        (0, n.gn)([s.ak], v.prototype, "BindPlayerContainer", null),
        (0, n.gn)([s.ak], v.prototype, "OnYoutubeScriptsReady", null),
        (0, n.gn)([s.ak], v.prototype, "CreatePlayer", null),
        (0, n.gn)([s.ak], v.prototype, "OnPlayerReady", null),
        (0, n.gn)([s.ak], v.prototype, "OnPlayerStateChange", null),
        (0, n.gn)([s.ak], v.prototype, "OnError", null),
        (0, n.gn)([s.ak], v.prototype, "OnPlayerLeftView", null),
        (0, n.gn)([s.ak], v.prototype, "PlayVideo", null);
    },
    6049: (e, t, a) => {
      "use strict";
      a.d(t, { C: () => d, q: () => m });
      var r = a(89526),
        n = a(54297),
        o = a(701),
        l = a(86177),
        i = a(19304),
        s = a(14826),
        u = a(51857),
        c = a.n(u);
      const m = (e) => {
          const t = ["maxresdefault", "mqdefault", "default"],
            [a, o] = r.useState(0);
          r.useEffect(() => o(0), [e.video]);
          const l = r.useRef();
          if (e.altImgWithFallback && e.altImgWithFallback.length > 0)
            return r.createElement(n.J, {
              className: e.className,
              srcs: e.altImgWithFallback,
            });
          if (e.altImg)
            return r.createElement("img", {
              src: e.altImg,
              className: e.className,
            });
          {
            const n =
                "https://img.youtube.com/vi/" + e.video + "/" + t[a] + ".jpg",
              s = () => {
                a + 1 < t.length && o(a + 1);
              },
              u = () => {
                l.current && l.current.naturalHeight < 91 && s();
              };
            return r.createElement("img", {
              ref: l,
              onLoad: u,
              onError: s,
              src: n,
              className: (0, i.Z)(c().YoutubePreviewImage, e.className),
            });
          }
        },
        d = (e) => {
          const [t, a] = r.useState(!1);
          if (
            (r.useEffect(() => {
              e.preloadYoutubeScripts && (0, l.m)(() => {});
            }, [e.preloadYoutubeScripts]),
            t)
          )
            return r.createElement(
              l.e,
              Object.assign({}, e, {
                classnames: (0, i.Z)(c().YoutubePlayer, e.classnames),
              }),
            );
          {
            const t = (t) => {
              e.onPlayerActivated && e.onPlayerActivated(),
                a(!0),
                t.stopPropagation(),
                t.preventDefault();
            };
            return r.createElement(
              "div",
              {
                className: (0, i.Z)(
                  "YoutubePreviewContainer",
                  c().YoutubePreviewImage,
                  e.imageClassnames,
                ),
                onClick: t,
              },
              r.createElement(m, {
                className: "YoutubePreviewImage",
                altImgWithFallback: e.altImgWithFallback,
                altImg: e.altImg,
                video: e.video,
              }),
              r.createElement(
                "div",
                { className: "YoutubePreviewPlay" },
                r.createElement(o.GhU, null),
              ),
              r.createElement(
                "div",
                { className: "VideoHintText" },
                (0, s.Xx)("#EventCalendar_WatchYouTubeVideo"),
              ),
            );
          }
        };
    },
    45334: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { CuratorReviewListContainer: () => q, default: () => K });
      var r = a(88464),
        n = a(89526),
        o = a(14966),
        l = a(40442),
        i = a(44026),
        s = a(66294),
        u = a(51438),
        c = a(26412),
        m = a(68818),
        d = a(47165),
        p = a(98009),
        _ = a(33940),
        v = a(58218),
        h = a(52868),
        y = a.n(h),
        E = a(32765),
        g = a(23217);
      function C(e, t) {
        const [a, r] = (0, n.useState)(
            (null == e ? void 0 : e.BUsesContentHubForItemSource())
              ? new Set()
              : null,
          ),
          o = (0, v.T)("useFilteredAppViaContentHub");
        return (
          (0, n.useEffect)(() => {
            (null == e ? void 0 : e.BUsesContentHubForItemSource()) &&
              !a &&
              (function (e, t) {
                var a;
                return (0, _.mG)(this, void 0, void 0, function* () {
                  const r =
                      E.De.STORE_BASE_URL +
                      "contenthub/ajaxfilterappsbycontenthub",
                    n = {
                      hubtype: e.GetContentHubType(),
                      category: e.GetContentHubCategory(),
                      tagid: e.GetContentHubTag(),
                      prune_list_optin_name: e.jsondata.prune_list_optin_name,
                      optin_tagid: e.jsondata.optin_tagid,
                      optin_prune_tagid: e.jsondata.optin_prune_tagid,
                      optin_only: e.jsondata.optin_only,
                      applist: t.sort().join(","),
                    };
                  let o = null;
                  const l = new Set();
                  try {
                    const e = yield y().get(r, { params: n });
                    if (
                      1 ==
                      (null === (a = null == e ? void 0 : e.data) ||
                      void 0 === a
                        ? void 0
                        : a.success)
                    )
                      return e.data.appids.forEach((e) => l.add(e)), l;
                    o = (0, g.l)(e);
                  } catch (e) {
                    o = (0, g.l)(e);
                  }
                  return (
                    console.error(
                      "LoadContentHubFilteredApps failed: " +
                        (null == o ? void 0 : o.strErrorMsg),
                      o,
                    ),
                    l
                  );
                });
              })(e, t).then((e) => {
                o.token.reason || r(e);
              });
          }, [a, o.token.reason, e, t]),
          a
        );
      }
      var f = a(16468),
        w = a(83145),
        b = a(98210),
        I = a(54671),
        S = a(92616),
        P = a(85886),
        R = a(25871),
        T = a(95408),
        N = a(16646),
        D = a.n(N),
        k = a(701),
        B = a(19304),
        G = a(51857);
      const L = new RegExp(
        "(?:https?://)?(?:www.)?twitch.tv/videos/([0-9]+)S*",
      );
      function Y(e) {
        const t = L.exec(e);
        return (null == t ? void 0 : t.length) > 1 ? t[1] : null;
      }
      function F(e) {
        const {
            posterURL: t,
            videoid: a,
            muted: r,
            autoplay: o,
            bIsClipID: l,
            time: i,
            width: s,
            height: u,
          } = e,
          [c, m] = n.useState(Boolean(t)),
          d = null != o && null != o && o;
        if (c)
          return n.createElement(
            "div",
            {
              className: (0, B.Z)(
                "YoutubePreviewContainer",
                G.YoutubePreviewImage,
                e.imageClassnames,
              ),
              onClick: () => m(!1),
            },
            n.createElement("img", {
              className: (0, B.Z)("YoutubePreviewImage", G.YoutubePreviewImage),
              src:
                t ||
                E.De.COMMUNITY_CDN_URL +
                  "public/shared/images/responsive/youtube_16x9_placeholder.gif",
            }),
            n.createElement(
              "div",
              { className: "YoutubePreviewPlay" },
              n.createElement(k.GhU, null),
            ),
          );
        let p = (0, E.Kc)().replace("https://", "");
        const _ = p.indexOf("/");
        _ >= 0 && (p = p.substring(0, _));
        let v = l
          ? `https://clips.twitch.tv/embed?clip=${a}`
          : `https://player.twitch.tv/?video=${a}`;
        return (
          (v += `&parent=${p}&autoplay=${d}&muted=${Boolean(r)}`),
          i &&
            (v += `&time=${(function (e) {
              const t = Math.floor(e / 3600);
              e -= 60 * t * 60;
              const a = Math.floor(e / 60);
              return `${t}h${a}m${(e -= a * e)}s`;
            })(i)}`),
          n.createElement(
            "div",
            { className: (0, B.Z)("YoutubePlayer", D().TwitchPlayer) },
            n.createElement("img", {
              className: (0, B.Z)(
                "YoutubePreviewContainer",
                G.YoutubePreviewImage,
                e.imageClassnames,
              ),
              src:
                E.De.COMMUNITY_CDN_URL +
                "public/shared/images/responsive/youtube_16x9_placeholder.gif",
            }),
            n.createElement("iframe", {
              src: v,
              allowFullScreen: !0,
              frameBorder: 0,
              width: s || 460,
              height: u || 300,
            }),
          )
        );
      }
      var x = a(51441),
        A = a(70750),
        O = a(44421),
        M = a(31245),
        V = a(69338),
        H = a(66615),
        U = a(6049),
        j = a(14826),
        z = a(207),
        W = a(94608),
        Z = a.n(W),
        Q = a(65858),
        X = a(11581);
      function $(e) {
        const { clanInfo: t } = e,
          { curator_link: a, curator_medium_avatar: r } = (0, E.kQ)(
            "curator_header",
            "application_config",
          );
        return n.createElement(
          u.s,
          {
            className: "page_content_ctn",
            "flow-children": "column",
            autoFocus: !0,
          },
          n.createElement(
            "div",
            { className: "page_content" },
            n.createElement(
              u.s,
              { className: "list_header_area", "flow-children": "row" },
              n.createElement(
                "div",
                { className: "curator_avatar_image" },
                n.createElement(
                  i.IS,
                  { href: a },
                  n.createElement("img", {
                    className: "curator_avatar",
                    src: r,
                  }),
                ),
              ),
              n.createElement(
                "div",
                { className: "curator_details" },
                n.createElement(Q.b, {
                  className: X.BreadContainer,
                  crumbs: (0, E.kQ)("breadcrumbs", "application_config"),
                }),
                n.createElement(
                  i.IS,
                  { className: "pageheader curator_name", href: a },
                  (0, j.Xx)("#SteamCurator_List_Header_List", t.group_name),
                ),
              ),
            ),
          ),
        );
      }
      const K = function (e) {
        const t = (0, w.L)();
        return n.createElement(
          s.p,
          { navID: "StoreCuratorPageRoot", NavigationManager: t },
          n.createElement(q, { listid: e.listid }),
        );
      };
      function q(e) {
        const t = parseInt(
            (0, E.kQ)("curator_account_id", "application_config"),
          ),
          a = (0, f.P4)(t),
          r = (0, f.N)(null == a ? void 0 : a.clanSteamID, e.listid);
        return (
          (0, T.ue)(),
          r
            ? n.createElement(
                n.Fragment,
                null,
                n.createElement($, { clanInfo: a }),
                n.createElement(
                  "div",
                  { className: "page_content_ctn grayscale" },
                  n.createElement(
                    "div",
                    { className: "page_content" },
                    n.createElement(
                      "div",
                      { className: Z().CuratorListCtn },
                      n.createElement(te, { listDetails: r }),
                      (0, f.FG)(r)
                        ? n.createElement(J, { listDetails: r })
                        : n.createElement(ee, {
                            listDetails: r,
                            rgListItems: r.apps,
                          }),
                      n.createElement(
                        "div",
                        { className: Z().CuratorMoreCtn },
                        n.createElement(
                          "h2",
                          null,
                          (0, j.Xx)("#SteamCurator_ExploreMoreTitle"),
                        ),
                        n.createElement(
                          i.IS,
                          { href: a.vanity_url },
                          (0, j.kQ)("#SteamCurator_MoreReviews", a.group_name),
                        ),
                      ),
                    ),
                  ),
                ),
              )
            : null
        );
      }
      function J(e) {
        const { listDetails: t } = e,
          [a, r] = (0, n.useState)(null),
          o = new d.K(t.sale_clan_steamid),
          l = (0, m.Mx)(o.GetAccountID(), t.sale_clan_event_gid),
          i = (0, n.useMemo)(
            () => (t.apps || []).map((e) => e.recommended_app.appid),
            [t],
          ),
          s = C(l, i);
        return (
          (0, n.useEffect)(() => {
            var e, a;
            if (l)
              if (l.BUsesContentHubForItemSource())
                s &&
                  r(
                    null === (e = t.apps) || void 0 === e
                      ? void 0
                      : e.filter((e) => {
                          var t;
                          return s.has(
                            null === (t = e.recommended_app) || void 0 === t
                              ? void 0
                              : t.appid,
                          );
                        }),
                  );
              else {
                const e = l.GetSaleFeaturedApps();
                r(
                  null === (a = t.apps) || void 0 === a
                    ? void 0
                    : a.filter((t) => {
                        var a;
                        return e.has(
                          null === (a = t.recommended_app) || void 0 === a
                            ? void 0
                            : a.appid,
                        );
                      }),
                );
              }
          }, [t, l, s]),
          n.createElement(ee, { listDetails: t, rgListItems: a })
        );
      }
      function ee(e) {
        const { listDetails: t, rgListItems: a } = e,
          [r, o] = (0, n.useState)(0),
          [l, s] = (0, n.useState)(null),
          c = (0, v.T)("CuratorAppListDisplay");
        if (
          (n.useEffect(() => {
            a &&
              (o((null == a ? void 0 : a.length) || 0),
              I.jg
                .Get()
                .HintLoad()
                .then(() => {
                  const e = a.map((e) => e.recommended_app.appid);
                  S.Z.Get()
                    .QueueMultipleAppRequests(e, A.NC)
                    .then(() => {
                      c.token.reason ||
                        s(
                          a.filter(
                            (e) =>
                              !(0, A.TR)(
                                S.Z.Get().GetApp(e.recommended_app.appid),
                              ),
                          ),
                        );
                    })
                    .catch(() => {
                      c.token.reason || s([]);
                    });
                }));
          }, [a, c]),
          null == l)
        )
          return n.createElement(V.V, {
            string: (0, j.Xx)("#Loading"),
            position: "center",
            size: "medium",
          });
        const m = 1 == t.list_type;
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(
            u.s,
            {
              className: (0, B.Z)(Z().CuratorList, m && Z().CuratorListGrid),
              "flow-children": "grid",
            },
            l.map((e, a) =>
              n.createElement(ae, {
                key: "rec_" + e.recommended_app.appid,
                item: e,
                listDetails: t,
                bAutoFocus: 0 == a,
              }),
            ),
          ),
          Boolean(r > l.length) &&
            n.createElement(
              "div",
              null,
              n.createElement(
                "span",
                null,
                (0, j.kb)("#SteamCurator_Hidden", r - l.length),
                " ",
              ),
              n.createElement(
                i.IS,
                { href: E.De.STORE_BASE_URL + "account/preferences/" },
                (0, j.Xx)("#SteamCurator_Setting"),
              ),
            ),
        );
      }
      function te(e) {
        const { listDetails: t } = e,
          a = (0, f.yS)(t),
          r = (0, E.kQ)("showlisttitle", "application_config"),
          o = (0, E.kQ)("titleareaheight", "application_config"),
          s =
            t.list_jsondata.youtube_link &&
            (0, c.S6)(t.list_jsondata.youtube_link),
          u = t.list_jsondata.youtube_link && Y(t.list_jsondata.youtube_link),
          m = (0, l.jM)(E.De.LANGUAGE),
          d = j.LZ.GetWithFallback(t.localized_flat_title, m),
          p = j.LZ.GetWithFallback(t.localized_flat_blurb, m),
          _ = j.LZ.GetWithFallback(t.localized_flat_link, m),
          v =
            a &&
            a.GetImageURL(
              (0, H.p)() ? "product_mobile_banner" : "product_banner",
              m,
            );
        return n.createElement(
          "div",
          { className: Z().TopReviewInfo },
          Boolean(v) &&
            n.createElement(
              i.IS,
              { href: a.GetSaleURL() },
              n.createElement("img", { className: Z().SaleBanner, src: v }),
            ),
          r && d && n.createElement("div", { className: Z().Title }, d),
          r && p && n.createElement("div", { className: Z().Blurb }, p),
          Boolean(o > 0) && n.createElement("div", { style: { height: o } }),
          s &&
            n.createElement(
              "div",
              { className: Z().VideoReviewCtn },
              n.createElement(U.C, {
                video: s.strVideoID,
                startSeconds: s.nStartSeconds,
                autoplay: !0,
                autopause: !0,
                showFullscreenBtn: !0,
                controls: !0,
                preloadYoutubeScripts: !0,
                playsInline: !0,
                imageClassnames: Z().YouTubePreviewImage,
              }),
            ),
          Boolean(u) &&
            n.createElement(
              "div",
              { className: Z().VideoReviewCtn },
              n.createElement(F, {
                videoid: u,
                posterURL: "",
                imageClassnames: Z().YouTubePreviewImage,
              }),
            ),
          _ && n.createElement(oe, { url: _ }),
        );
      }
      const ae = (0, r.Pi)((e) => {
        var t, a;
        const { item: r, listDetails: o, bAutoFocus: l } = e,
          i = parseInt((0, E.kQ)("curator_account_id", "application_config")),
          s = (0, f.P4)(i),
          [m] = (0, R.vs)(
            null === (t = null == r ? void 0 : r.recommended_app) ||
              void 0 === t
              ? void 0
              : t.appid,
            { include_assets: !0, include_release: !0 },
          ),
          d = (0, n.useMemo)(
            () => ({
              id: null == m ? void 0 : m.GetID(),
              type: (0, P.Ds)(
                null == m ? void 0 : m.GetStoreItemType(),
                null == m ? void 0 : m.GetAppType(),
              ),
            }),
            [m],
          );
        if (!s || !m) return null;
        const {
            appid: p,
            link_url: _,
            blurb: v,
            time_recommended: h,
            recommendation_state: y,
          } = r.recommended_app,
          g = s.is_creator_home && !s.is_ogg,
          C =
            null === (a = o.list_jsondata.app_data) || void 0 === a
              ? void 0
              : a[p],
          w = _ && (0, c.S6)(_),
          I = _ && Y(_),
          S = v != f.mb && v,
          T = b.ZP.Get().BHasDemoAppID(p),
          N = null == C ? void 0 : C.img_url,
          D = `curator_clanid=${s.clanAccountID}&curator_listid=${o.listid}`;
        return n.createElement(
          u.s,
          { className: Z().CuratorReview, autoFocus: l },
          n.createElement(
            "div",
            { className: Z().CapsuleCtn },
            Boolean(w || I)
              ? n.createElement(re, {
                  strVideoID: (null == w ? void 0 : w.strVideoID) || I,
                  nStartSeconds: null == w ? void 0 : w.nStartSeconds,
                  info: d,
                  strImgOverrideUrl: N,
                  bShowDemoButton: T,
                  strExtraParams: D,
                  bTwitchVideo: Boolean(I),
                })
              : n.createElement(M.B, {
                  imageType: "header",
                  capsule: d,
                  bShowDemoButton: T,
                  strExtraParams: D,
                }),
          ),
          n.createElement(
            "div",
            { className: Z().ReviewTextSection },
            n.createElement("div", { className: Z().GameTitle }, m.GetName()),
            n.createElement(
              "div",
              { className: Z().RecommendationTypeAndDate },
              n.createElement(ne, { type: y }),
              n.createElement(
                "div",
                { className: Z().ReviewDate },
                g || !Boolean(h)
                  ? (0, j.Xx)(
                      "#EventModTile_ReleaseDate",
                      m.GetFormattedSteamReleaseDate(),
                    )
                  : (0, j.vX)(h),
              ),
            ),
            Boolean(S) &&
              n.createElement(
                "div",
                { className: Z().ReviewBlurb },
                (0, j.Xx)("#SteamCurator_ReviewTextQuoted", S),
              ),
            Boolean(_) && n.createElement(oe, { url: _ }),
          ),
        );
      });
      function re(e) {
        const {
            strVideoID: t,
            nStartSeconds: a,
            info: r,
            strImgOverrideUrl: o,
            bShowDemoButton: l,
            strExtraParams: i,
            bTwitchVideo: s,
          } = e,
          [u] = (0, R.jk)(r.id, (0, P.TM)(r.type), { include_assets: !0 });
        return n.createElement(
          "div",
          { className: Z().YouTubeCapsule },
          n.createElement(
            "div",
            { className: Z().YouTubeCtn },
            s
              ? n.createElement(F, {
                  videoid: t,
                  posterURL: null == u ? void 0 : u.GetAssets().GetHeaderURL(),
                  imageClassnames: Z().YouTubePreviewImage,
                  autoplay: !0,
                })
              : n.createElement(U.C, {
                  video: t,
                  startSeconds: a,
                  autoplay: !0,
                  autopause: !0,
                  showFullscreenBtn: !0,
                  controls: !0,
                  preloadYoutubeScripts: !0,
                  playsInline: !0,
                  imageClassnames: Z().YouTubePreviewImage,
                  altImg: o,
                }),
          ),
          n.createElement(
            "div",
            { className: Z().YouTubeCapsuleBottomBar },
            n.createElement(
              "div",
              { className: Z().GameImageCtn },
              n.createElement(
                x.ll,
                {
                  item: r,
                  bShowDemoButton: l,
                  nDelayShowMs: 300,
                  strExtraParams: i,
                  hoverProps: {
                    direction: "overlay-center",
                    style: { minWidth: "300px" },
                  },
                },
                n.createElement("img", {
                  className: Z().GameImage,
                  src:
                    null == u ? void 0 : u.GetAssets().GetLibraryCapsuleURL(),
                }),
              ),
            ),
            n.createElement(O.Hl, { info: r, strClassName: Z().FullWidth }),
          ),
        );
      }
      function ne(e) {
        switch (e.type) {
          case 0:
            return n.createElement(
              "div",
              { className: Z().Recommended },
              (0, j.Xx)("#SteamCurator_Recommended"),
            );
          case 1:
            return n.createElement(
              "div",
              { className: Z().NotRecommended },
              (0, j.Xx)("#SteamCurator_NotRecommended"),
            );
          case 2:
            return n.createElement(
              "div",
              { className: Z().Informational },
              (0, j.Xx)("#SteamCurator_Informational"),
            );
          default:
            return null;
        }
      }
      function oe(e) {
        let t = (0, p.B1)(e.url);
        (0, o.A)(t) &&
          (t =
            (E.De.IN_CLIENT ? "steam://openurl_external/" : "") +
            E.De.COMMUNITY_BASE_URL +
            "linkfilter/?url=" +
            t);
        const a = (0, z.FM)(e.url),
          r = (0, c.HO)(e.url);
        return n.createElement(
          "div",
          { className: Z().FullReviewLink },
          n.createElement(
            i.IS,
            {
              className: Z().FullReviewAnchor,
              href: t,
              rel: "noopener nofollow",
              preferredFocus: !1,
              autoFocus: !1,
            },
            (0, j.Xx)(
              r
                ? "#SteamCurator_WatchFullReview"
                : "#SteamCurator_ReadFullReview",
            ),
          ),
          n.createElement(
            "div",
            { className: Z().FullReviewDomain },
            (0, j.Xx)("#SteamCurator_ReviewLinkHostnameBracketed", a),
          ),
        );
      }
    },
  },
]);
