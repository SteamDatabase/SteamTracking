/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [3207],
  {
    99312: (e) => {
      e.exports = {
        VideoReviewCtn: "twitchembed_VideoReviewCtn_nNaTz",
        YouTubePreviewImage: "twitchembed_YouTubePreviewImage__mxmF",
        TwitchPlayer: "twitchembed_TwitchPlayer_Ny5PH",
      };
    },
    21807: (e) => {
      e.exports = { BreadContainer: "breadcrumbs_BreadContainer_1QPim" };
    },
    47784: (e) => {
      e.exports = {
        YoutubePreviewImage: "youtubepreviewimage_YoutubePreviewImage_MzScK",
        YoutubePlayer: "youtubepreviewimage_YoutubePlayer_3uK6c",
      };
    },
    86196: (e) => {
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
    38547: (e) => {
      e.exports = { BreadContainer: "curatorminiheader_BreadContainer_GkVFI" };
    },
    34425: (e, t, a) => {
      "use strict";
      a.d(t, { p: () => c });
      var r = a(70655),
        n = a(67294),
        l = a(7707),
        o = a(27745),
        i = a(64839),
        s = a(90666);
      function c(e) {
        const { children: t, navTreeRef: a } = e,
          c = (0, r._T)(e, ["children", "navTreeRef"]),
          u = n.useRef(),
          m = (0, i.BE)(u, a);
        if ((0, s.id)()) {
          const e = window.__nav_tree_root;
          return n.createElement(
            l.Fe,
            Object.assign({}, c, {
              navTreeRef: m,
              secondary: !0,
              parentEmbeddedNavTree: e,
            }),
            n.createElement(o.O, null, t)
          );
        }
        return n.createElement(n.Fragment, null, t);
      }
    },
    54881: (e, t, a) => {
      "use strict";
      a.d(t, { b: () => c });
      var r = a(67294),
        n = a(21807),
        l = a(7573),
        o = a(73727),
        i = a(7707),
        s = a(35921);
      function c(e) {
        const { crumbs: t, className: a } = e;
        return t && 0 != t.length
          ? r.createElement(
              "div",
              { className: (0, l.Z)(n.BreadContainer, a) },
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
                            e.name
                          )
                        )
                      : t.push(
                          r.createElement(
                            o.rU,
                            { key: "link_" + e.name, to: e.url },
                            e.name
                          )
                        ),
                    t.push(
                      r.createElement("span", { key: e.name + "span" }, " > ")
                    ),
                    t
                  );
                })
              ),
              r.createElement("div", { style: { clear: "left" } })
            )
          : null;
      }
    },
    52962: (e, t, a) => {
      "use strict";
      a.d(t, { C: () => d, q: () => m });
      var r = a(67294),
        n = a(96187),
        l = a(95598),
        o = a(90844),
        i = a(7573),
        s = a(41311),
        c = a(47784),
        u = a.n(c);
      const m = (e) => {
          const t = ["maxresdefault", "mqdefault", "default"],
            [a, l] = r.useState(0);
          r.useEffect(() => l(0), [e.video]);
          const o = r.useRef();
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
                a + 1 < t.length && l(a + 1);
              },
              c = () => {
                o.current && o.current.naturalHeight < 91 && s();
              };
            return r.createElement("img", {
              ref: o,
              onLoad: c,
              onError: s,
              src: n,
              className: (0, i.Z)(u().YoutubePreviewImage, e.className),
            });
          }
        },
        d = (e) => {
          const [t, a] = r.useState(!1);
          if (
            (r.useEffect(() => {
              e.preloadYoutubeScripts && (0, o.m)(() => {});
            }, [e.preloadYoutubeScripts]),
            t)
          )
            return r.createElement(
              o.e,
              Object.assign({}, e, {
                classnames: (0, i.Z)(u().YoutubePlayer, e.classnames),
              })
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
                  u().YoutubePreviewImage,
                  e.imageClassnames
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
                r.createElement(l.GhU, null)
              ),
              r.createElement(
                "div",
                { className: "VideoHintText" },
                (0, s.Xx)("#EventCalendar_WatchYouTubeVideo")
              )
            );
          }
        };
    },
    53881: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { CuratorReviewListContainer: () => q, default: () => z });
      var r = a(29323),
        n = a(67294),
        l = a(63473),
        o = a(26149),
        i = (a(54698), a(7707)),
        s = a(34425),
        c = a(35921),
        u = a(4224),
        m = (a(37662), a(50153)),
        d = a(3389),
        p = a(67833),
        _ = a(70655),
        v = a(74163),
        g = a(9669),
        b = a.n(g),
        E = (a(82946), a(90666)),
        h = a(93976);
      function C(e, t) {
        const [a, r] = (0, n.useState)(
            (null == e ? void 0 : e.BUsesContentHubForItemSource())
              ? new Set()
              : null
          ),
          l = (0, v.T)("useFilteredAppViaContentHub");
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
                      applist: t.sort().join(","),
                    };
                  let l = null;
                  const o = new Set();
                  try {
                    const e = yield b().get(r, { params: n });
                    if (
                      1 ==
                      (null === (a = null == e ? void 0 : e.data) ||
                      void 0 === a
                        ? void 0
                        : a.success)
                    )
                      return e.data.appids.forEach((e) => o.add(e)), o;
                    l = (0, h.l)(e);
                  } catch (e) {
                    l = (0, h.l)(e);
                  }
                  return (
                    console.error(
                      "LoadContentHubFilteredApps failed: " +
                        (null == l ? void 0 : l.strErrorMsg),
                      l
                    ),
                    o
                  );
                });
              })(e, t).then((e) => {
                l.token.reason || r(e);
              });
          }, [a, l.token.reason, e, t]),
          a
        );
      }
      var w = a(13354),
        f = a(71174),
        I = a(39388),
        N = a(77636),
        S = a(159),
        R = a(48116),
        T = a(52114),
        y = a(99312),
        F = a.n(y),
        B = a(95598),
        D = (a(8456), a(7573)),
        k = a(47784);
      const P = new RegExp(
        "(?:https?://)?(?:www.)?twitch.tv/videos/([0-9]+)S*"
      );
      function G(e) {
        const t = P.exec(e);
        return (null == t ? void 0 : t.length) > 1 ? t[1] : null;
      }
      function Y(e) {
        const {
            posterURL: t,
            videoid: a,
            muted: r,
            autoplay: l,
            bIsClipID: o,
            time: i,
            width: s,
            height: c,
          } = e,
          [u, m] = n.useState(Boolean(t)),
          d = null != l && null != l && l;
        if (u)
          return n.createElement(
            "div",
            {
              className: (0, D.Z)(
                "YoutubePreviewContainer",
                k.YoutubePreviewImage,
                e.imageClassnames
              ),
              onClick: () => m(!1),
            },
            n.createElement("img", {
              className: (0, D.Z)("YoutubePreviewImage", k.YoutubePreviewImage),
              src:
                t ||
                E.De.COMMUNITY_CDN_URL +
                  "public/shared/images/responsive/youtube_16x9_placeholder.gif",
            }),
            n.createElement(
              "div",
              { className: "YoutubePreviewPlay" },
              n.createElement(B.GhU, null)
            )
          );
        let p = (0, E.Kc)().replace("https://", "");
        const _ = p.indexOf("/");
        _ >= 0 && (p = p.substring(0, _));
        let v = o
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
            { className: (0, D.Z)("YoutubePlayer", F().TwitchPlayer) },
            n.createElement("img", {
              className: (0, D.Z)(
                "YoutubePreviewContainer",
                k.YoutubePreviewImage,
                e.imageClassnames
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
              height: c || 300,
            })
          )
        );
      }
      var L = a(67777),
        x = a(89673),
        A = a(85732),
        M = a(87541),
        U = a(13596),
        H = a(6092),
        W = a(52962),
        j = a(41311),
        V = a(35092),
        Z = a(86196),
        O = a.n(Z),
        X = (a(76776), a(54881)),
        Q = a(38547);
      function $(e) {
        const { clanInfo: t } = e,
          { curator_link: a, curator_medium_avatar: r } = (0, E.kQ)(
            "curator_header",
            "application_config"
          );
        return n.createElement(
          c.s,
          {
            className: "page_content_ctn",
            "flow-children": "column",
            autoFocus: !0,
          },
          n.createElement(
            "div",
            { className: "page_content" },
            n.createElement(
              c.s,
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
                  })
                )
              ),
              n.createElement(
                "div",
                { className: "curator_details" },
                n.createElement(X.b, {
                  className: Q.BreadContainer,
                  crumbs: (0, E.kQ)("breadcrumbs", "application_config"),
                }),
                n.createElement(
                  i.IS,
                  { className: "pageheader curator_name", href: a },
                  (0, j.Xx)("#SteamCurator_List_Header_List", t.group_name)
                )
              )
            )
          )
        );
      }
      const z = function (e) {
        const t = (0, f.L)();
        return n.createElement(
          s.p,
          { navID: "StoreCuratorPageRoot", NavigationManager: t },
          n.createElement(q, { listid: e.listid })
        );
      };
      function q(e) {
        const t = parseInt(
            (0, E.kQ)("curator_account_id", "application_config")
          ),
          a = (0, w.P4)(t),
          r = (0, w.N)(null == a ? void 0 : a.clanSteamID, e.listid);
        return r
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
                    { className: O().CuratorListCtn },
                    n.createElement(ee, { listDetails: r }),
                    (0, w.FG)(r)
                      ? n.createElement(K, { listDetails: r })
                      : n.createElement(J, {
                          listDetails: r,
                          rgListItems: r.apps,
                        }),
                    n.createElement(
                      "div",
                      { className: O().CuratorMoreCtn },
                      n.createElement(
                        "h2",
                        null,
                        (0, j.Xx)("#SteamCurator_ExploreMoreTitle")
                      ),
                      n.createElement(
                        i.IS,
                        { href: a.vanity_url },
                        (0, j.kQ)("#SteamCurator_MoreReviews", a.group_name)
                      )
                    )
                  )
                )
              )
            )
          : null;
      }
      function K(e) {
        const { listDetails: t } = e,
          [a, r] = (0, n.useState)(null),
          l = new d.K(t.sale_clan_steamid),
          o = (0, m.Mx)(l.GetAccountID(), t.sale_clan_event_gid),
          i = (0, n.useMemo)(
            () => (t.apps || []).map((e) => e.recommended_app.appid),
            [t]
          ),
          s = C(o, i);
        return (
          (0, n.useEffect)(() => {
            var e, a;
            if (o)
              if (o.BUsesContentHubForItemSource())
                s &&
                  r(
                    null === (e = t.apps) || void 0 === e
                      ? void 0
                      : e.filter((e) => {
                          var t;
                          return s.has(
                            null === (t = e.recommended_app) || void 0 === t
                              ? void 0
                              : t.appid
                          );
                        })
                  );
              else {
                const e = o.GetSaleFeaturedApps();
                r(
                  null === (a = t.apps) || void 0 === a
                    ? void 0
                    : a.filter((t) => {
                        var a;
                        return e.has(
                          null === (a = t.recommended_app) || void 0 === a
                            ? void 0
                            : a.appid
                        );
                      })
                );
              }
          }, [t, o, s]),
          n.createElement(J, { listDetails: t, rgListItems: a })
        );
      }
      function J(e) {
        const { listDetails: t, rgListItems: a } = e,
          [r, l] = (0, n.useState)(0),
          [o, s] = (0, n.useState)(null),
          u = (0, v.T)("CuratorAppListDisplay");
        if (
          (n.useEffect(() => {
            a &&
              (l((null == a ? void 0 : a.length) || 0),
              N.jg
                .Get()
                .HintLoad()
                .then(() => {
                  const e = a.map((e) => e.recommended_app.appid);
                  S.Z.Get()
                    .QueueMultipleAppRequests(e, x.NC)
                    .then(() => {
                      u.token.reason ||
                        s(
                          a.filter(
                            (e) =>
                              !(0, x.TR)(
                                S.Z.Get().GetApp(e.recommended_app.appid)
                              )
                          )
                        );
                    })
                    .catch(() => {
                      u.token.reason || s([]);
                    });
                }));
          }, [a, u]),
          null == o)
        )
          return n.createElement(U.V, {
            string: (0, j.Xx)("#Loading"),
            position: "center",
            size: "medium",
          });
        const m = 1 == t.list_type;
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(
            c.s,
            {
              className: (0, D.Z)(O().CuratorList, m && O().CuratorListGrid),
              "flow-children": "grid",
            },
            o.map((e, a) =>
              n.createElement(te, {
                key: "rec_" + e.recommended_app.appid,
                item: e,
                listDetails: t,
                bAutoFocus: 0 == a,
              })
            )
          ),
          Boolean(r > o.length) &&
            n.createElement(
              "div",
              null,
              n.createElement(
                "span",
                null,
                (0, j.kb)("#SteamCurator_Hidden", r - o.length),
                " "
              ),
              n.createElement(
                i.IS,
                { href: E.De.STORE_BASE_URL + "account/preferences/" },
                (0, j.Xx)("#SteamCurator_Setting")
              )
            )
        );
      }
      function ee(e) {
        const { listDetails: t } = e,
          a = (0, w.yS)(t),
          r = (0, E.kQ)("showlisttitle", "application_config"),
          l = (0, E.kQ)("titleareaheight", "application_config"),
          s =
            t.list_jsondata.youtube_link &&
            (0, u.S6)(t.list_jsondata.youtube_link),
          c = t.list_jsondata.youtube_link && G(t.list_jsondata.youtube_link),
          m = (0, o.jM)(E.De.LANGUAGE),
          d = j.LZ.GetWithFallback(t.localized_flat_title, m),
          p = j.LZ.GetWithFallback(t.localized_flat_blurb, m),
          _ = j.LZ.GetWithFallback(t.localized_flat_link, m),
          v =
            a &&
            a.GetImageURL(
              (0, H.p)() ? "product_mobile_banner" : "product_banner",
              m
            );
        return n.createElement(
          "div",
          { className: O().TopReviewInfo },
          Boolean(v) &&
            n.createElement(
              i.IS,
              { href: a.GetSaleURL() },
              n.createElement("img", { className: O().SaleBanner, src: v })
            ),
          r && d && n.createElement("div", { className: O().Title }, d),
          r && p && n.createElement("div", { className: O().Blurb }, p),
          Boolean(l > 0) && n.createElement("div", { style: { height: l } }),
          s &&
            n.createElement(
              "div",
              { className: O().VideoReviewCtn },
              n.createElement(W.C, {
                video: s.strVideoID,
                startSeconds: s.nStartSeconds,
                autoplay: !0,
                autopause: !0,
                showFullscreenBtn: !0,
                controls: !0,
                preloadYoutubeScripts: !0,
                playsInline: !0,
                imageClassnames: O().YouTubePreviewImage,
              })
            ),
          Boolean(c) &&
            n.createElement(
              "div",
              { className: O().VideoReviewCtn },
              n.createElement(Y, {
                videoid: c,
                posterURL: "",
                imageClassnames: O().YouTubePreviewImage,
              })
            ),
          _ && n.createElement(ne, { url: _ })
        );
      }
      const te = (0, r.Pi)((e) => {
        var t, a;
        const { item: r, listDetails: l, bAutoFocus: o } = e,
          i = parseInt((0, E.kQ)("curator_account_id", "application_config")),
          s = (0, w.P4)(i),
          [m] = (0, T.vs)(
            null === (t = null == r ? void 0 : r.recommended_app) ||
              void 0 === t
              ? void 0
              : t.appid,
            { include_assets: !0, include_release: !0 }
          ),
          d = (0, n.useMemo)(
            () => ({
              id: null == m ? void 0 : m.GetID(),
              type: (0, R.Ds)(
                null == m ? void 0 : m.GetStoreItemType(),
                null == m ? void 0 : m.GetAppType()
              ),
            }),
            [m]
          );
        if (!s || !m) return null;
        const {
            appid: p,
            link_url: _,
            blurb: v,
            time_recommended: g,
            recommendation_state: b,
          } = r.recommended_app,
          h = s.is_creator_home && !s.is_ogg,
          C =
            null === (a = l.list_jsondata.app_data) || void 0 === a
              ? void 0
              : a[p],
          f = _ && (0, u.S6)(_),
          N = _ && G(_),
          S = v != w.mb && v,
          y = I.ZP.Get().BHasDemoAppID(p),
          F = null == C ? void 0 : C.img_url,
          B = `curator_clanid=${s.clanAccountID}&curator_listid=${l.listid}`;
        return n.createElement(
          c.s,
          { className: O().CuratorReview, autoFocus: o },
          n.createElement(
            "div",
            { className: O().CapsuleCtn },
            Boolean(f || N)
              ? n.createElement(ae, {
                  strVideoID: (null == f ? void 0 : f.strVideoID) || N,
                  nStartSeconds: null == f ? void 0 : f.nStartSeconds,
                  info: d,
                  strImgOverrideUrl: F,
                  bShowDemoButton: y,
                  strExtraParams: B,
                  bTwitchVideo: Boolean(N),
                })
              : n.createElement(M.B, {
                  imageType: "header",
                  bAutoFocus: o,
                  capsule: d,
                  bShowDemoButton: y,
                  strExtraParams: B,
                })
          ),
          n.createElement(
            "div",
            { className: O().ReviewTextSection },
            n.createElement("div", { className: O().GameTitle }, m.GetName()),
            n.createElement(
              "div",
              { className: O().RecommendationTypeAndDate },
              n.createElement(re, { type: b }),
              n.createElement(
                "div",
                { className: O().ReviewDate },
                h || !Boolean(g)
                  ? (0, j.Xx)(
                      "#EventModTile_ReleaseDate",
                      m.GetFormattedSteamReleaseDate()
                    )
                  : (0, j.vX)(g)
              )
            ),
            Boolean(S) &&
              n.createElement(
                "div",
                { className: O().ReviewBlurb },
                (0, j.Xx)("#SteamCurator_ReviewTextQuoted", S)
              ),
            Boolean(_) && n.createElement(ne, { url: _ })
          )
        );
      });
      function ae(e) {
        const {
            strVideoID: t,
            nStartSeconds: a,
            info: r,
            strImgOverrideUrl: l,
            bShowDemoButton: o,
            strExtraParams: i,
            bTwitchVideo: s,
          } = e,
          [c] = (0, T.jk)(r.id, (0, R.TM)(r.type), { include_assets: !0 });
        return n.createElement(
          "div",
          { className: O().YouTubeCapsule },
          n.createElement(
            "div",
            { className: O().YouTubeCtn },
            s
              ? n.createElement(Y, {
                  videoid: t,
                  posterURL: null == c ? void 0 : c.GetAssets().GetHeaderURL(),
                  imageClassnames: O().YouTubePreviewImage,
                  autoplay: !0,
                })
              : n.createElement(W.C, {
                  video: t,
                  startSeconds: a,
                  autoplay: !0,
                  autopause: !0,
                  showFullscreenBtn: !0,
                  controls: !0,
                  preloadYoutubeScripts: !0,
                  playsInline: !0,
                  imageClassnames: O().YouTubePreviewImage,
                  altImg: l,
                })
          ),
          n.createElement(
            "div",
            { className: O().YouTubeCapsuleBottomBar },
            n.createElement(
              "div",
              { className: O().GameImageCtn },
              n.createElement(
                L.ll,
                {
                  item: r,
                  bShowDemoButton: o,
                  nDelayShowMs: 300,
                  strExtraParams: i,
                  hoverProps: {
                    direction: "overlay-center",
                    style: { minWidth: "300px" },
                  },
                },
                n.createElement("img", {
                  className: O().GameImage,
                  src:
                    null == c ? void 0 : c.GetAssets().GetLibraryCapsuleURL(),
                })
              )
            ),
            n.createElement(A.Hl, { info: r, strClassName: O().FullWidth })
          )
        );
      }
      function re(e) {
        switch (e.type) {
          case 0:
            return n.createElement(
              "div",
              { className: O().Recommended },
              (0, j.Xx)("#SteamCurator_Recommended")
            );
          case 1:
            return n.createElement(
              "div",
              { className: O().NotRecommended },
              (0, j.Xx)("#SteamCurator_NotRecommended")
            );
          case 2:
            return n.createElement(
              "div",
              { className: O().Informational },
              (0, j.Xx)("#SteamCurator_Informational")
            );
          default:
            return null;
        }
      }
      function ne(e) {
        let t = (0, p.B1)(e.url);
        (0, l.Ah)(t) &&
          (t =
            (E.De.IN_CLIENT ? "steam://openurl_external/" : "") +
            E.De.COMMUNITY_BASE_URL +
            "linkfilter/?url=" +
            t);
        const a = (0, V.FM)(e.url),
          r = (0, u.HO)(e.url);
        return n.createElement(
          "div",
          { className: O().FullReviewLink },
          n.createElement(
            i.IS,
            {
              className: O().FullReviewAnchor,
              href: t,
              rel: "noopener nofollow",
              preferredFocus: !1,
              autoFocus: !1,
            },
            (0, j.Xx)(
              r
                ? "#SteamCurator_WatchFullReview"
                : "#SteamCurator_ReadFullReview"
            )
          ),
          n.createElement(
            "div",
            { className: O().FullReviewDomain },
            (0, j.Xx)("#SteamCurator_ReviewLinkHostnameBracketed", a)
          )
        );
      }
    },
  },
]);
