/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    "+KBl": function (e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, "CuratorReviewList", function () {
          return y;
        });
      var r = t("TyAF"),
        n = t("q1tI"),
        l = t.n(n),
        c = t("rcjX"),
        o = t("mgoM"),
        i = t("kyHq"),
        u = t("av+R"),
        s = t("ykc/"),
        m = t("qDk6"),
        d = t("+VX6"),
        _ = (t("3+zv"), t("Xhj9"), t("5eAM")),
        v = t("VQ2A"),
        p = t("UCyf"),
        b = t("hwrv"),
        f = t("gOcu"),
        E = t("ee7K"),
        C = t("Fmfl"),
        R = t("gyoR"),
        h = t("5L1o"),
        w = t("4pOC"),
        g = t("0OaU"),
        I = t("3Gzo"),
        N = t("j54C"),
        j = t("exH9"),
        O = t("TLQK"),
        S = t("IzPI"),
        T = t("lkRc"),
        F = t("pcg8"),
        B = t.n(F),
        k = (t("TQGK"), t("477j")),
        L = t("C4Er");
      function G(e) {
        var a = e.clanInfo,
          t = Object(T.h)("curator_header", "application_config"),
          r = t.curator_link,
          n = t.curator_medium_avatar;
        return l.a.createElement(
          m.a,
          {
            className: "page_content_ctn",
            "flow-children": "column",
            autoFocus: !0,
          },
          l.a.createElement(
            "div",
            { className: "page_content" },
            l.a.createElement(
              m.a,
              { className: "list_header_area", "flow-children": "row" },
              l.a.createElement(
                "div",
                { className: "curator_avatar_image" },
                l.a.createElement(
                  u.c,
                  { href: r },
                  l.a.createElement("img", {
                    className: "curator_avatar",
                    src: n,
                  })
                )
              ),
              l.a.createElement(
                "div",
                { className: "curator_details" },
                l.a.createElement(k.a, {
                  className: L.BreadContainer,
                  crumbs: Object(T.h)("breadcrumbs", "application_config"),
                }),
                l.a.createElement(
                  u.c,
                  { className: "pageheader curator_name", href: r },
                  Object(O.f)("#SteamCurator_List_Header_List", a.group_name)
                )
              )
            )
          )
        );
      }
      t("1v2s");
      a.default = function (e) {
        var a = Object(b.a)();
        return l.a.createElement(
          s.a,
          { navID: "StoreCuratorPageRoot", NavigationManager: a },
          l.a.createElement(y, { listid: e.listid })
        );
      };
      function y(e) {
        var a = parseInt(
            Object(T.h)("curator_account_id", "application_config")
          ),
          t = Object(p.f)(a),
          r = Object(p.g)(null == t ? void 0 : t.clanSteamID, e.listid),
          n = Object(p.e)(r),
          c = l.a.useState(null),
          o = c[0],
          i = c[1],
          s = l.a.useState(0),
          d = s[0],
          v = s[1];
        if (
          (l.a.useEffect(
            function () {
              var e;
              if (r) {
                var a = Object(p.a)(r)
                  ? null === (e = r.apps) || void 0 === e
                    ? void 0
                    : e.filter(function (e) {
                        var a;
                        return null == n
                          ? void 0
                          : n.has(
                              null === (a = e.recommended_app) || void 0 === a
                                ? void 0
                                : a.appid
                            );
                      })
                  : r.apps;
                v((null == a ? void 0 : a.length) || 0),
                  E.a
                    .Get()
                    .HintLoad()
                    .then(function () {
                      _.a
                        .LoadAppLinkInfo(
                          a.map(function (e) {
                            return e.recommended_app.appid;
                          })
                        )
                        .then(function () {
                          i(
                            a.filter(function (e) {
                              return !Object(R.d)(
                                _.a.GetAppLinkInfo(e.recommended_app.appid)
                              );
                            })
                          );
                        })
                        .catch(function () {
                          return i([]);
                        });
                    });
              }
            },
            [r, n]
          ),
          !r)
        )
          return null;
        if (null == o)
          return l.a.createElement(g.a, {
            string: Object(O.f)("#Loading"),
            position: "center",
            size: "medium",
          });
        var b = 1 == r.list_type;
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(G, { clanInfo: t }),
          l.a.createElement(
            "div",
            { className: "page_content_ctn grayscale" },
            l.a.createElement(
              "div",
              { className: "page_content" },
              l.a.createElement(
                "div",
                { className: B.a.CuratorListCtn },
                l.a.createElement(D, { listDetails: r }),
                l.a.createElement(
                  m.a,
                  {
                    className: Object(j.a)(
                      B.a.CuratorList,
                      b && B.a.CuratorListGrid
                    ),
                    "flow-children": "grid",
                  },
                  o.map(function (e, a) {
                    return l.a.createElement(A, {
                      key: "rec_" + e.recommended_app.appid,
                      item: e,
                      listDetails: r,
                      bAutoFocus: 0 == a,
                    });
                  })
                ),
                Boolean(d > o.length) &&
                  l.a.createElement(
                    "div",
                    null,
                    l.a.createElement(
                      "span",
                      null,
                      Object(O.l)("#SteamCurator_Hidden", d - o.length),
                      " "
                    ),
                    l.a.createElement(
                      u.c,
                      { href: T.d.STORE_BASE_URL + "account/preferences/" },
                      Object(O.f)("#SteamCurator_Setting")
                    )
                  ),
                l.a.createElement(
                  "div",
                  { className: B.a.CuratorMoreCtn },
                  l.a.createElement(
                    "h2",
                    null,
                    Object(O.f)("#SteamCurator_ExploreMoreTitle")
                  ),
                  l.a.createElement(
                    u.c,
                    { href: t.vanity_url },
                    Object(O.m)("#SteamCurator_MoreReviews", t.group_name)
                  )
                )
              )
            )
          )
        );
      }
      function D(e) {
        var a = e.listDetails,
          t = Object(p.d)(a),
          r = Object(T.h)("showlisttitle", "application_config"),
          n = Object(T.h)("titleareaheight", "application_config"),
          c =
            a.list_jsondata.youtube_link &&
            Object(d.b)(a.list_jsondata.youtube_link),
          i = Object(o.g)(T.d.LANGUAGE),
          s = O.a.GetWithFallback(a.localized_flat_title, i),
          m = O.a.GetWithFallback(a.localized_flat_blurb, i),
          _ = O.a.GetWithFallback(a.localized_flat_link, i),
          v =
            t &&
            t.GetImageURL(
              Object(I.a)() ? "product_mobile_banner" : "product_banner",
              i
            );
        return l.a.createElement(
          "div",
          { className: B.a.TopReviewInfo },
          Boolean(v) &&
            l.a.createElement(
              u.c,
              { href: t.GetSaleURL() },
              l.a.createElement("img", { className: B.a.SaleBanner, src: v })
            ),
          r && s && l.a.createElement("div", { className: B.a.Title }, s),
          r && m && l.a.createElement("div", { className: B.a.Blurb }, m),
          n > 0 && l.a.createElement("div", { style: { height: n } }),
          c &&
            l.a.createElement(
              "div",
              { className: B.a.VideoReviewCtn },
              l.a.createElement(N.b, {
                video: c.strVideoID,
                startSeconds: c.nStartSeconds,
                autoplay: !0,
                autopause: !0,
                showFullscreenBtn: !0,
                controls: !0,
                preloadYoutubeScripts: !0,
                playsInline: !0,
                imageClassnames: B.a.YouTubePreviewImage,
              })
            ),
          _ && l.a.createElement(Y, { url: _ })
        );
      }
      var A = Object(r.a)(function (e) {
        var a,
          t,
          r = e.item,
          n = e.listDetails,
          c = e.bAutoFocus,
          o = parseInt(Object(T.h)("curator_account_id", "application_config")),
          u = Object(p.f)(o);
        if (
          !u ||
          !(null === (a = null == r ? void 0 : r.recommended_app) ||
          void 0 === a
            ? void 0
            : a.appid)
        )
          return null;
        var s = r.recommended_app,
          v = s.appid,
          b = s.link_url,
          E = s.blurb,
          C = s.time_recommended,
          R = s.recommendation_state,
          h = _.a.GetAppLinkInfo(v);
        if (!h) return null;
        if (!Object(i.b)(h.type)) return null;
        var g = u.is_creator_home,
          I =
            null === (t = n.list_jsondata.app_data) || void 0 === t
              ? void 0
              : t[v],
          N = b && Object(d.b)(b),
          j = E != p.c && E,
          S = f.a.Get().BHasDemoAppID(v),
          F = null == I ? void 0 : I.img_url,
          k =
            "curator_clanid=" + u.clanAccountID + "&curator_listid=" + n.listid;
        return l.a.createElement(
          m.a,
          { className: B.a.CuratorReview, autoFocus: c },
          l.a.createElement(
            "div",
            { className: B.a.CapsuleCtn },
            N
              ? l.a.createElement(M, {
                  strVideoID: N.strVideoID,
                  nStartSeconds: N.nStartSeconds,
                  appInfo: h,
                  strImgOverrideUrl: F,
                  bShowDemoButton: S,
                  strExtraParams: k,
                })
              : l.a.createElement(w.b, {
                  imageType: "header",
                  bAutoFocus: c,
                  capsule: h,
                  bShowDemoButton: S,
                  strExtraParams: k,
                })
          ),
          l.a.createElement(
            "div",
            { className: B.a.ReviewTextSection },
            l.a.createElement(
              "div",
              { className: B.a.GameTitle },
              null == h ? void 0 : h.name
            ),
            l.a.createElement(
              "div",
              { className: B.a.RecommendationTypeAndDate },
              l.a.createElement(P, { type: R }),
              l.a.createElement(
                "div",
                { className: B.a.ReviewDate },
                g ? h.release : Object(O.n)(C)
              )
            ),
            Boolean(j) &&
              l.a.createElement(
                "div",
                { className: B.a.ReviewBlurb },
                Object(O.f)("#SteamCurator_ReviewTextQuoted", j)
              ),
            Boolean(b) && l.a.createElement(Y, { url: b })
          )
        );
      });
      function M(e) {
        var a = e.strVideoID,
          t = e.nStartSeconds,
          r = e.appInfo,
          n = e.strImgOverrideUrl,
          c = e.bShowDemoButton,
          o = e.strExtraParams;
        return l.a.createElement(
          "div",
          { className: B.a.YouTubeCapsule },
          l.a.createElement(
            "div",
            { className: B.a.YouTubeCtn },
            l.a.createElement(N.b, {
              video: a,
              startSeconds: t,
              autoplay: !0,
              autopause: !0,
              showFullscreenBtn: !0,
              controls: !0,
              preloadYoutubeScripts: !0,
              playsInline: !0,
              imageClassnames: B.a.YouTubePreviewImage,
              altImg: n,
            })
          ),
          l.a.createElement(
            "div",
            { className: B.a.YouTubeCapsuleBottomBar },
            l.a.createElement(
              "div",
              { className: B.a.GameImageCtn },
              l.a.createElement(
                C.d,
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
                  className: B.a.GameImage,
                  src: null == r ? void 0 : r.library_asset,
                })
              )
            ),
            l.a.createElement(h.c, { info: r, strClassName: B.a.FullWidth })
          )
        );
      }
      function P(e) {
        switch (e.type) {
          case 0:
            return l.a.createElement(
              "div",
              { className: B.a.Recommended },
              Object(O.f)("#SteamCurator_Recommended")
            );
          case 1:
            return l.a.createElement(
              "div",
              { className: B.a.NotRecommended },
              Object(O.f)("#SteamCurator_NotRecommended")
            );
          case 2:
            return l.a.createElement(
              "div",
              { className: B.a.Informational },
              Object(O.f)("#SteamCurator_Informational")
            );
          default:
            return null;
        }
      }
      function Y(e) {
        var a = Object(v.d)(e.url);
        Object(c.b)(a) &&
          (a =
            (T.d.IN_CLIENT ? "steam://openurl_external/" : "") +
            T.d.COMMUNITY_BASE_URL +
            "linkfilter/?url=" +
            a);
        var t = Object(S.f)(e.url),
          r = Object(d.a)(e.url);
        return l.a.createElement(
          "div",
          { className: B.a.FullReviewLink },
          l.a.createElement(
            u.c,
            {
              className: B.a.FullReviewAnchor,
              href: a,
              rel: "noopener nofollow",
              preferredFocus: !1,
              autoFocus: !1,
            },
            Object(O.f)(
              r
                ? "#SteamCurator_WatchFullReview"
                : "#SteamCurator_ReadFullReview"
            )
          ),
          l.a.createElement(
            "div",
            { className: B.a.FullReviewDomain },
            Object(O.f)("#SteamCurator_ReviewLinkHostnameBracketed", t)
          )
        );
      }
    },
    "1v2s": function (e, a, t) {
      e.exports = {
        PillTabMenuCtn: "deckmenu_PillTabMenuCtn_VkRuR",
        PillTabMenuItem: "deckmenu_PillTabMenuItem_2YcDp",
        Active: "deckmenu_Active_1uLVq",
        CartPillTabMenuItem: "deckmenu_CartPillTabMenuItem_2tbNf",
      };
    },
    C4Er: function (e, a, t) {
      e.exports = { BreadContainer: "curatorminiheader_BreadContainer_GkVFI" };
    },
    pcg8: function (e, a, t) {
      e.exports = {
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
    "ykc/": function (e, a, t) {
      "use strict";
      t.d(a, "a", function () {
        return s;
      });
      var r = t("mrSG"),
        n = t("q1tI"),
        l = t.n(n),
        c = t("av+R"),
        o = t("yLGM"),
        i = t("opsS"),
        u = t("lkRc");
      function s(e) {
        var a = e.children,
          t = e.navTreeRef,
          n = Object(r.f)(e, ["children", "navTreeRef"]),
          s = l.a.useRef(),
          m = Object(i.f)(s, t);
        if (u.d.IN_GAMEPADUI) {
          var d = window.__nav_tree_root;
          return l.a.createElement(
            c.b,
            Object(r.a)({}, n, {
              navTreeRef: m,
              secondary: !0,
              parentEmbeddedNavTree: d,
            }),
            l.a.createElement(o.a, null, a)
          );
        }
        return l.a.createElement(l.a.Fragment, null, a);
      }
    },
  },
]);
