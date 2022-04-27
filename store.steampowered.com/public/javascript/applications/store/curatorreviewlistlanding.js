/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [17],
  {
    "+KBl": function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "CuratorReviewList", function () {
          return k;
        });
      var r = a("TyAF"),
        n = a("q1tI"),
        l = a.n(n),
        c = a("rcjX"),
        o = a("mgoM"),
        i = (a("65aj"), a("av+R")),
        u = a("ykc/"),
        s = a("qDk6"),
        m = a("+VX6"),
        d = (a("3+zv"), a("VQ2A")),
        _ = a("UCyf"),
        p = a("hwrv"),
        v = a("gOcu"),
        b = a("ee7K"),
        f = a("Fmfl"),
        C = a("gyoR"),
        E = a("5L1o"),
        R = a("4pOC"),
        w = a("0OaU"),
        g = a("3Gzo"),
        h = a("j54C"),
        j = a("exH9"),
        N = a("TLQK"),
        I = a("IzPI"),
        O = a("lkRc"),
        T = a("pcg8"),
        S = a.n(T),
        G = (a("TQGK"), a("477j")),
        F = a("C4Er");
      function B(e) {
        const { clanInfo: t } = e,
          { curator_link: a, curator_medium_avatar: r } = Object(O.h)(
            "curator_header",
            "application_config"
          );
        return l.a.createElement(
          s.a,
          {
            className: "page_content_ctn",
            "flow-children": "column",
            autoFocus: !0,
          },
          l.a.createElement(
            "div",
            { className: "page_content" },
            l.a.createElement(
              s.a,
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
                l.a.createElement(G.a, {
                  className: F.BreadContainer,
                  crumbs: Object(O.h)("breadcrumbs", "application_config"),
                }),
                l.a.createElement(
                  i.c,
                  { className: "pageheader curator_name", href: a },
                  Object(N.f)("#SteamCurator_List_Header_List", t.group_name)
                )
              )
            )
          )
        );
      }
      a("1v2s");
      var y = a("C4Nl"),
        L = a("b3LC"),
        D = a("35zc");
      a("N17k"), a("6Y59");
      t.default = function (e) {
        const t = Object(p.a)();
        return l.a.createElement(
          u.a,
          { navID: "StoreCuratorPageRoot", NavigationManager: t },
          l.a.createElement(k, { listid: e.listid })
        );
      };
      function k(e) {
        const t = parseInt(
            Object(O.h)("curator_account_id", "application_config")
          ),
          a = Object(_.f)(t),
          r = Object(_.g)(null == a ? void 0 : a.clanSteamID, e.listid),
          n = Object(_.e)(r),
          [c, o] = l.a.useState(null),
          [u, m] = l.a.useState(0);
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
                b.a
                  .Get()
                  .HintLoad()
                  .then(() => {
                    const e = t.map((e) => e.recommended_app.appid);
                    y.a
                      .Get()
                      .QueueMultipleAppRequests(e, C.h)
                      .then(() => {
                        o(
                          t.filter(
                            (e) =>
                              !Object(C.e)(
                                y.a.Get().GetApp(e.recommended_app.appid)
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
          return l.a.createElement(w.a, {
            string: Object(N.f)("#Loading"),
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
                { className: S.a.CuratorListCtn },
                l.a.createElement(A, { listDetails: r }),
                l.a.createElement(
                  s.a,
                  {
                    className: Object(j.a)(
                      S.a.CuratorList,
                      d && S.a.CuratorListGrid
                    ),
                    "flow-children": "grid",
                  },
                  c.map((e, t) =>
                    l.a.createElement(M, {
                      key: "rec_" + e.recommended_app.appid,
                      item: e,
                      listDetails: r,
                      bAutoFocus: 0 == t,
                    })
                  )
                ),
                Boolean(u > c.length) &&
                  l.a.createElement(
                    "div",
                    null,
                    l.a.createElement(
                      "span",
                      null,
                      Object(N.l)("#SteamCurator_Hidden", u - c.length),
                      " "
                    ),
                    l.a.createElement(
                      i.c,
                      { href: O.d.STORE_BASE_URL + "account/preferences/" },
                      Object(N.f)("#SteamCurator_Setting")
                    )
                  ),
                l.a.createElement(
                  "div",
                  { className: S.a.CuratorMoreCtn },
                  l.a.createElement(
                    "h2",
                    null,
                    Object(N.f)("#SteamCurator_ExploreMoreTitle")
                  ),
                  l.a.createElement(
                    i.c,
                    { href: a.vanity_url },
                    Object(N.m)("#SteamCurator_MoreReviews", a.group_name)
                  )
                )
              )
            )
          )
        );
      }
      function A(e) {
        const { listDetails: t } = e,
          a = Object(_.d)(t),
          r = Object(O.h)("showlisttitle", "application_config"),
          n = Object(O.h)("titleareaheight", "application_config"),
          c =
            t.list_jsondata.youtube_link &&
            Object(m.b)(t.list_jsondata.youtube_link),
          u = Object(o.g)(O.d.LANGUAGE),
          s = N.a.GetWithFallback(t.localized_flat_title, u),
          d = N.a.GetWithFallback(t.localized_flat_blurb, u),
          p = N.a.GetWithFallback(t.localized_flat_link, u),
          v =
            a &&
            a.GetImageURL(
              Object(g.a)() ? "product_mobile_banner" : "product_banner",
              u
            );
        return l.a.createElement(
          "div",
          { className: S.a.TopReviewInfo },
          Boolean(v) &&
            l.a.createElement(
              i.c,
              { href: a.GetSaleURL() },
              l.a.createElement("img", { className: S.a.SaleBanner, src: v })
            ),
          r && s && l.a.createElement("div", { className: S.a.Title }, s),
          r && d && l.a.createElement("div", { className: S.a.Blurb }, d),
          n > 0 && l.a.createElement("div", { style: { height: n } }),
          c &&
            l.a.createElement(
              "div",
              { className: S.a.VideoReviewCtn },
              l.a.createElement(h.b, {
                video: c.strVideoID,
                startSeconds: c.nStartSeconds,
                autoplay: !0,
                autopause: !0,
                showFullscreenBtn: !0,
                controls: !0,
                preloadYoutubeScripts: !0,
                playsInline: !0,
                imageClassnames: S.a.YouTubePreviewImage,
              })
            ),
          p && l.a.createElement(x, { url: p })
        );
      }
      const M = Object(r.a)((e) => {
        var t, a;
        const { item: r, listDetails: c, bAutoFocus: o } = e,
          i = parseInt(Object(O.h)("curator_account_id", "application_config")),
          u = Object(_.f)(i),
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
              type: Object(D.a)(
                null == d ? void 0 : d.GetStoreItemType(),
                null == d ? void 0 : d.GetAppType()
              ),
            }),
            [d]
          );
        if (!u || !d) return null;
        const {
            appid: b,
            link_url: f,
            blurb: C,
            time_recommended: E,
            recommendation_state: w,
          } = r.recommended_app,
          g = u.is_creator_home && !u.is_ogg,
          h =
            null === (a = c.list_jsondata.app_data) || void 0 === a
              ? void 0
              : a[b],
          j = f && Object(m.b)(f),
          I = C != _.c && C,
          T = v.a.Get().BHasDemoAppID(b),
          G = null == h ? void 0 : h.img_url,
          F = `curator_clanid=${u.clanAccountID}&curator_listid=${c.listid}`;
        return l.a.createElement(
          s.a,
          { className: S.a.CuratorReview, autoFocus: o },
          l.a.createElement(
            "div",
            { className: S.a.CapsuleCtn },
            j
              ? l.a.createElement(Y, {
                  strVideoID: j.strVideoID,
                  nStartSeconds: j.nStartSeconds,
                  info: p,
                  strImgOverrideUrl: G,
                  bShowDemoButton: T,
                  strExtraParams: F,
                })
              : l.a.createElement(R.b, {
                  imageType: "header",
                  bAutoFocus: o,
                  capsule: p,
                  bShowDemoButton: T,
                  strExtraParams: F,
                })
          ),
          l.a.createElement(
            "div",
            { className: S.a.ReviewTextSection },
            l.a.createElement("div", { className: S.a.GameTitle }, d.GetName()),
            l.a.createElement(
              "div",
              { className: S.a.RecommendationTypeAndDate },
              l.a.createElement(P, { type: w }),
              l.a.createElement(
                "div",
                { className: S.a.ReviewDate },
                g ? d.GetFormattedSteamReleaseDate() : Object(N.n)(E)
              )
            ),
            Boolean(I) &&
              l.a.createElement(
                "div",
                { className: S.a.ReviewBlurb },
                Object(N.f)("#SteamCurator_ReviewTextQuoted", I)
              ),
            Boolean(f) && l.a.createElement(x, { url: f })
          )
        );
      });
      function Y(e) {
        const {
            strVideoID: t,
            nStartSeconds: a,
            info: r,
            strImgOverrideUrl: n,
            bShowDemoButton: c,
            strExtraParams: o,
          } = e,
          [i] = Object(L.a)(r.id, Object(D.d)(r.type), { include_assets: !0 });
        return l.a.createElement(
          "div",
          { className: S.a.YouTubeCapsule },
          l.a.createElement(
            "div",
            { className: S.a.YouTubeCtn },
            l.a.createElement(h.b, {
              video: t,
              startSeconds: a,
              autoplay: !0,
              autopause: !0,
              showFullscreenBtn: !0,
              controls: !0,
              preloadYoutubeScripts: !0,
              playsInline: !0,
              imageClassnames: S.a.YouTubePreviewImage,
              altImg: n,
            })
          ),
          l.a.createElement(
            "div",
            { className: S.a.YouTubeCapsuleBottomBar },
            l.a.createElement(
              "div",
              { className: S.a.GameImageCtn },
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
                  className: S.a.GameImage,
                  src:
                    null == i ? void 0 : i.GetAssets().GetLibraryCapsuleURL(),
                })
              )
            ),
            l.a.createElement(E.c, { info: r, strClassName: S.a.FullWidth })
          )
        );
      }
      function P(e) {
        switch (e.type) {
          case 0:
            return l.a.createElement(
              "div",
              { className: S.a.Recommended },
              Object(N.f)("#SteamCurator_Recommended")
            );
          case 1:
            return l.a.createElement(
              "div",
              { className: S.a.NotRecommended },
              Object(N.f)("#SteamCurator_NotRecommended")
            );
          case 2:
            return l.a.createElement(
              "div",
              { className: S.a.Informational },
              Object(N.f)("#SteamCurator_Informational")
            );
          default:
            return null;
        }
      }
      function x(e) {
        let t = Object(d.d)(e.url);
        Object(c.b)(t) &&
          (t =
            (O.d.IN_CLIENT ? "steam://openurl_external/" : "") +
            O.d.COMMUNITY_BASE_URL +
            "linkfilter/?url=" +
            t);
        const a = Object(I.f)(e.url),
          r = Object(m.a)(e.url);
        return l.a.createElement(
          "div",
          { className: S.a.FullReviewLink },
          l.a.createElement(
            i.c,
            {
              className: S.a.FullReviewAnchor,
              href: t,
              rel: "noopener nofollow",
              preferredFocus: !1,
              autoFocus: !1,
            },
            Object(N.f)(
              r
                ? "#SteamCurator_WatchFullReview"
                : "#SteamCurator_ReadFullReview"
            )
          ),
          l.a.createElement(
            "div",
            { className: S.a.FullReviewDomain },
            Object(N.f)("#SteamCurator_ReviewLinkHostnameBracketed", a)
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
    N17k: function (e, t, a) {
      e.exports = {
        VideoReviewCtn: "twitchembed_VideoReviewCtn_V6zz2",
        YouTubePreviewImage: "twitchembed_YouTubePreviewImage_3joL1",
      };
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
    "ykc/": function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return s;
      });
      var r = a("mrSG"),
        n = a("q1tI"),
        l = a.n(n),
        c = a("av+R"),
        o = a("yLGM"),
        i = a("opsS"),
        u = a("lkRc");
      function s(e) {
        const { children: t, navTreeRef: a } = e,
          n = Object(r.c)(e, ["children", "navTreeRef"]),
          s = l.a.useRef(),
          m = Object(i.g)(s, a);
        if (u.d.IN_GAMEPADUI) {
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
  },
]);
