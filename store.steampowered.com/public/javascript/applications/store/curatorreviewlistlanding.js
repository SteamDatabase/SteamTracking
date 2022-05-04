/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [17],
  {
    "+KBl": function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "CuratorReviewList", function () {
          return A;
        });
      var r = a("TyAF"),
        n = a("q1tI"),
        l = a.n(n),
        c = a("uzoi"),
        o = a("msu0"),
        i = (a("Zdsb"), a("fsrB")),
        s = a("lo3/"),
        u = a("Lsvi"),
        m = a("Ao8p"),
        d = (a("XrGS"), a("lfGQ")),
        _ = a("lmAv"),
        p = a("Sn0s"),
        b = a("44wC"),
        v = a("FmLm"),
        f = a("oEKi"),
        E = a("upZW"),
        C = a("4EJs"),
        w = a("E4gw"),
        h = a("kWcV"),
        R = a("aF8t"),
        g = a("yENa"),
        N = a("GbHM"),
        S = a("GXif"),
        I = a("pSt8"),
        T = a("/Q1a"),
        j = a("pcg8"),
        O = a.n(j),
        F = (a("wijF"), a("QY55")),
        G = a("C4Er");
      function B(e) {
        const { clanInfo: t } = e,
          { curator_link: a, curator_medium_avatar: r } = Object(T.h)(
            "curator_header",
            "application_config"
          );
        return l.a.createElement(
          u.a,
          {
            className: "page_content_ctn",
            "flow-children": "column",
            autoFocus: !0,
          },
          l.a.createElement(
            "div",
            { className: "page_content" },
            l.a.createElement(
              u.a,
              { className: "list_header_area", "flow-children": "row" },
              l.a.createElement(
                "div",
                { className: "curator_avatar_image" },
                l.a.createElement(
                  i.c,
                  { href: a },
                  l.a.createElement("img", {
                    className: "curator_avatar",
                    src: r,
                  })
                )
              ),
              l.a.createElement(
                "div",
                { className: "curator_details" },
                l.a.createElement(F.a, {
                  className: G.BreadContainer,
                  crumbs: Object(T.h)("breadcrumbs", "application_config"),
                }),
                l.a.createElement(
                  i.c,
                  { className: "pageheader curator_name", href: a },
                  Object(S.f)("#SteamCurator_List_Header_List", t.group_name)
                )
              )
            )
          )
        );
      }
      a("1v2s");
      var D = a("Ys0h"),
        L = a("RrtU"),
        y = a("hAgw");
      a("emic"), a("e356");
      t.default = function (e) {
        const t = Object(p.a)();
        return l.a.createElement(
          s.a,
          { navID: "StoreCuratorPageRoot", NavigationManager: t },
          l.a.createElement(A, { listid: e.listid })
        );
      };
      function A(e) {
        const t = parseInt(
            Object(T.h)("curator_account_id", "application_config")
          ),
          a = Object(_.f)(t),
          r = Object(_.g)(null == a ? void 0 : a.clanSteamID, e.listid),
          n = Object(_.e)(r),
          [c, o] = l.a.useState(null),
          [s, m] = l.a.useState(0);
        if (
          (l.a.useEffect(() => {
            var e;
            if (r) {
              const t = Object(_.a)(r)
                ? null === (e = r.apps) || void 0 === e
                  ? void 0
                  : e.filter((e) => {
                      var t;
                      return null == n
                        ? void 0
                        : n.has(
                            null === (t = e.recommended_app) || void 0 === t
                              ? void 0
                              : t.appid
                          );
                    })
                : r.apps;
              m((null == t ? void 0 : t.length) || 0),
                v.a
                  .Get()
                  .HintLoad()
                  .then(() => {
                    const e = t.map((e) => e.recommended_app.appid);
                    D.a
                      .Get()
                      .QueueMultipleAppRequests(e, E.h)
                      .then(() => {
                        o(
                          t.filter(
                            (e) =>
                              !Object(E.e)(
                                D.a.Get().GetApp(e.recommended_app.appid)
                              )
                          )
                        );
                      })
                      .catch(() => o([]));
                  });
            }
          }, [r, n]),
          !r)
        )
          return null;
        if (null == c)
          return l.a.createElement(h.a, {
            string: Object(S.f)("#Loading"),
            position: "center",
            size: "medium",
          });
        const d = 1 == r.list_type;
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(B, { clanInfo: a }),
          l.a.createElement(
            "div",
            { className: "page_content_ctn grayscale" },
            l.a.createElement(
              "div",
              { className: "page_content" },
              l.a.createElement(
                "div",
                { className: O.a.CuratorListCtn },
                l.a.createElement(k, { listDetails: r }),
                l.a.createElement(
                  u.a,
                  {
                    className: Object(N.a)(
                      O.a.CuratorList,
                      d && O.a.CuratorListGrid
                    ),
                    "flow-children": "grid",
                  },
                  c.map((e, t) =>
                    l.a.createElement(Y, {
                      key: "rec_" + e.recommended_app.appid,
                      item: e,
                      listDetails: r,
                      bAutoFocus: 0 == t,
                    })
                  )
                ),
                Boolean(s > c.length) &&
                  l.a.createElement(
                    "div",
                    null,
                    l.a.createElement(
                      "span",
                      null,
                      Object(S.l)("#SteamCurator_Hidden", s - c.length),
                      " "
                    ),
                    l.a.createElement(
                      i.c,
                      { href: T.d.STORE_BASE_URL + "account/preferences/" },
                      Object(S.f)("#SteamCurator_Setting")
                    )
                  ),
                l.a.createElement(
                  "div",
                  { className: O.a.CuratorMoreCtn },
                  l.a.createElement(
                    "h2",
                    null,
                    Object(S.f)("#SteamCurator_ExploreMoreTitle")
                  ),
                  l.a.createElement(
                    i.c,
                    { href: a.vanity_url },
                    Object(S.m)("#SteamCurator_MoreReviews", a.group_name)
                  )
                )
              )
            )
          )
        );
      }
      function k(e) {
        const { listDetails: t } = e,
          a = Object(_.d)(t),
          r = Object(T.h)("showlisttitle", "application_config"),
          n = Object(T.h)("titleareaheight", "application_config"),
          c =
            t.list_jsondata.youtube_link &&
            Object(m.b)(t.list_jsondata.youtube_link),
          s = Object(o.g)(T.d.LANGUAGE),
          u = S.a.GetWithFallback(t.localized_flat_title, s),
          d = S.a.GetWithFallback(t.localized_flat_blurb, s),
          p = S.a.GetWithFallback(t.localized_flat_link, s),
          b =
            a &&
            a.GetImageURL(
              Object(R.a)() ? "product_mobile_banner" : "product_banner",
              s
            );
        return l.a.createElement(
          "div",
          { className: O.a.TopReviewInfo },
          Boolean(b) &&
            l.a.createElement(
              i.c,
              { href: a.GetSaleURL() },
              l.a.createElement("img", { className: O.a.SaleBanner, src: b })
            ),
          r && u && l.a.createElement("div", { className: O.a.Title }, u),
          r && d && l.a.createElement("div", { className: O.a.Blurb }, d),
          n > 0 && l.a.createElement("div", { style: { height: n } }),
          c &&
            l.a.createElement(
              "div",
              { className: O.a.VideoReviewCtn },
              l.a.createElement(g.b, {
                video: c.strVideoID,
                startSeconds: c.nStartSeconds,
                autoplay: !0,
                autopause: !0,
                showFullscreenBtn: !0,
                controls: !0,
                preloadYoutubeScripts: !0,
                playsInline: !0,
                imageClassnames: O.a.YouTubePreviewImage,
              })
            ),
          p && l.a.createElement(x, { url: p })
        );
      }
      const Y = Object(r.a)((e) => {
        var t, a;
        const { item: r, listDetails: c, bAutoFocus: o } = e,
          i = parseInt(Object(T.h)("curator_account_id", "application_config")),
          s = Object(_.f)(i),
          [d] = Object(L.b)(
            null === (t = null == r ? void 0 : r.recommended_app) ||
              void 0 === t
              ? void 0
              : t.appid,
            { include_assets: !0, include_release: !0 }
          ),
          p = Object(n.useMemo)(
            () => ({
              id: null == d ? void 0 : d.GetID(),
              type: Object(y.a)(
                null == d ? void 0 : d.GetStoreItemType(),
                null == d ? void 0 : d.GetAppType()
              ),
            }),
            [d]
          );
        if (!s || !d) return null;
        const {
            appid: v,
            link_url: f,
            blurb: E,
            time_recommended: C,
            recommendation_state: h,
          } = r.recommended_app,
          R = s.is_creator_home && !s.is_ogg,
          g =
            null === (a = c.list_jsondata.app_data) || void 0 === a
              ? void 0
              : a[v],
          N = f && Object(m.b)(f),
          I = E != _.c && E,
          j = b.a.Get().BHasDemoAppID(v),
          F = null == g ? void 0 : g.img_url,
          G = `curator_clanid=${s.clanAccountID}&curator_listid=${c.listid}`;
        return l.a.createElement(
          u.a,
          { className: O.a.CuratorReview, autoFocus: o },
          l.a.createElement(
            "div",
            { className: O.a.CapsuleCtn },
            N
              ? l.a.createElement(M, {
                  strVideoID: N.strVideoID,
                  nStartSeconds: N.nStartSeconds,
                  info: p,
                  strImgOverrideUrl: F,
                  bShowDemoButton: j,
                  strExtraParams: G,
                })
              : l.a.createElement(w.b, {
                  imageType: "header",
                  bAutoFocus: o,
                  capsule: p,
                  bShowDemoButton: j,
                  strExtraParams: G,
                })
          ),
          l.a.createElement(
            "div",
            { className: O.a.ReviewTextSection },
            l.a.createElement("div", { className: O.a.GameTitle }, d.GetName()),
            l.a.createElement(
              "div",
              { className: O.a.RecommendationTypeAndDate },
              l.a.createElement(P, { type: h }),
              l.a.createElement(
                "div",
                { className: O.a.ReviewDate },
                R ? d.GetFormattedSteamReleaseDate() : Object(S.n)(C)
              )
            ),
            Boolean(I) &&
              l.a.createElement(
                "div",
                { className: O.a.ReviewBlurb },
                Object(S.f)("#SteamCurator_ReviewTextQuoted", I)
              ),
            Boolean(f) && l.a.createElement(x, { url: f })
          )
        );
      });
      function M(e) {
        const {
            strVideoID: t,
            nStartSeconds: a,
            info: r,
            strImgOverrideUrl: n,
            bShowDemoButton: c,
            strExtraParams: o,
          } = e,
          [i] = Object(L.a)(r.id, Object(y.d)(r.type), { include_assets: !0 });
        return l.a.createElement(
          "div",
          { className: O.a.YouTubeCapsule },
          l.a.createElement(
            "div",
            { className: O.a.YouTubeCtn },
            l.a.createElement(g.b, {
              video: t,
              startSeconds: a,
              autoplay: !0,
              autopause: !0,
              showFullscreenBtn: !0,
              controls: !0,
              preloadYoutubeScripts: !0,
              playsInline: !0,
              imageClassnames: O.a.YouTubePreviewImage,
              altImg: n,
            })
          ),
          l.a.createElement(
            "div",
            { className: O.a.YouTubeCapsuleBottomBar },
            l.a.createElement(
              "div",
              { className: O.a.GameImageCtn },
              l.a.createElement(
                f.d,
                {
                  item: r,
                  bShowDemoButton: c,
                  nDelayShowMs: 300,
                  strExtraParams: o,
                  hoverProps: {
                    direction: "overlay-center",
                    style: { minWidth: "300px" },
                  },
                },
                l.a.createElement("img", {
                  className: O.a.GameImage,
                  src:
                    null == i ? void 0 : i.GetAssets().GetLibraryCapsuleURL(),
                })
              )
            ),
            l.a.createElement(C.c, { info: r, strClassName: O.a.FullWidth })
          )
        );
      }
      function P(e) {
        switch (e.type) {
          case 0:
            return l.a.createElement(
              "div",
              { className: O.a.Recommended },
              Object(S.f)("#SteamCurator_Recommended")
            );
          case 1:
            return l.a.createElement(
              "div",
              { className: O.a.NotRecommended },
              Object(S.f)("#SteamCurator_NotRecommended")
            );
          case 2:
            return l.a.createElement(
              "div",
              { className: O.a.Informational },
              Object(S.f)("#SteamCurator_Informational")
            );
          default:
            return null;
        }
      }
      function x(e) {
        let t = Object(d.d)(e.url);
        Object(c.b)(t) &&
          (t =
            (T.d.IN_CLIENT ? "steam://openurl_external/" : "") +
            T.d.COMMUNITY_BASE_URL +
            "linkfilter/?url=" +
            t);
        const a = Object(I.f)(e.url),
          r = Object(m.a)(e.url);
        return l.a.createElement(
          "div",
          { className: O.a.FullReviewLink },
          l.a.createElement(
            i.c,
            {
              className: O.a.FullReviewAnchor,
              href: t,
              rel: "noopener nofollow",
              preferredFocus: !1,
              autoFocus: !1,
            },
            Object(S.f)(
              r
                ? "#SteamCurator_WatchFullReview"
                : "#SteamCurator_ReadFullReview"
            )
          ),
          l.a.createElement(
            "div",
            { className: O.a.FullReviewDomain },
            Object(S.f)("#SteamCurator_ReviewLinkHostnameBracketed", a)
          )
        );
      }
    },
    "1v2s": function (e, t, a) {
      e.exports = {
        PillTabMenuCtn: "deckmenu_PillTabMenuCtn_VkRuR",
        PillTabMenuItem: "deckmenu_PillTabMenuItem_2YcDp",
        Active: "deckmenu_Active_1uLVq",
        CartPillTabMenuItem: "deckmenu_CartPillTabMenuItem_2tbNf",
      };
    },
    C4Er: function (e, t, a) {
      e.exports = { BreadContainer: "curatorminiheader_BreadContainer_GkVFI" };
    },
    emic: function (e, t, a) {
      e.exports = {
        VideoReviewCtn: "twitchembed_VideoReviewCtn_nNaTz",
        YouTubePreviewImage: "twitchembed_YouTubePreviewImage__mxmF",
      };
    },
    "lo3/": function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return u;
      });
      var r = a("mrSG"),
        n = a("q1tI"),
        l = a.n(n),
        c = a("fsrB"),
        o = a("ez+p"),
        i = a("hCpY"),
        s = a("/Q1a");
      function u(e) {
        const { children: t, navTreeRef: a } = e,
          n = Object(r.c)(e, ["children", "navTreeRef"]),
          u = l.a.useRef(),
          m = Object(i.g)(u, a);
        if (s.d.IN_GAMEPADUI) {
          const e = window.__nav_tree_root;
          return l.a.createElement(
            c.b,
            Object.assign({}, n, {
              navTreeRef: m,
              secondary: !0,
              parentEmbeddedNavTree: e,
            }),
            l.a.createElement(o.a, null, t)
          );
        }
        return l.a.createElement(l.a.Fragment, null, t);
      }
    },
    pcg8: function (e, t, a) {
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
  },
]);
