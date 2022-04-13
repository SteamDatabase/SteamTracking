/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    "+KBl": function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "CuratorReviewList", function () {
          return k;
        });
      var r = a("TyAF"),
        l = a("q1tI"),
        n = a.n(l),
        c = a("rcjX"),
        o = a("mgoM"),
        i = (a("kyHq"), a("av+R")),
        s = a("ykc/"),
        u = a("qDk6"),
        m = a("+VX6"),
        d = (a("3+zv"), a("VQ2A")),
        _ = a("UCyf"),
        p = a("hwrv"),
        v = a("gOcu"),
        b = a("ee7K"),
        f = a("Fmfl"),
        E = a("gyoR"),
        C = a("5L1o"),
        R = a("4pOC"),
        g = a("0OaU"),
        h = a("3Gzo"),
        w = a("j54C"),
        O = a("exH9"),
        j = a("TLQK"),
        N = a("IzPI"),
        I = a("lkRc"),
        S = a("pcg8"),
        T = a.n(S),
        G = (a("TQGK"), a("477j")),
        F = a("C4Er");
      function y(e) {
        const { clanInfo: t } = e,
          { curator_link: a, curator_medium_avatar: r } = Object(I.h)(
            "curator_header",
            "application_config"
          );
        return n.a.createElement(
          u.a,
          {
            className: "page_content_ctn",
            "flow-children": "column",
            autoFocus: !0,
          },
          n.a.createElement(
            "div",
            { className: "page_content" },
            n.a.createElement(
              u.a,
              { className: "list_header_area", "flow-children": "row" },
              n.a.createElement(
                "div",
                { className: "curator_avatar_image" },
                n.a.createElement(
                  i.c,
                  { href: a },
                  n.a.createElement("img", {
                    className: "curator_avatar",
                    src: r,
                  })
                )
              ),
              n.a.createElement(
                "div",
                { className: "curator_details" },
                n.a.createElement(G.a, {
                  className: F.BreadContainer,
                  crumbs: Object(I.h)("breadcrumbs", "application_config"),
                }),
                n.a.createElement(
                  i.c,
                  { className: "pageheader curator_name", href: a },
                  Object(j.f)("#SteamCurator_List_Header_List", t.group_name)
                )
              )
            )
          )
        );
      }
      a("1v2s");
      var B = a("C4Nl"),
        D = a("b3LC"),
        L = a("35zc");
      t.default = function (e) {
        const t = Object(p.a)();
        return n.a.createElement(
          s.a,
          { navID: "StoreCuratorPageRoot", NavigationManager: t },
          n.a.createElement(k, { listid: e.listid })
        );
      };
      function k(e) {
        const t = parseInt(
            Object(I.h)("curator_account_id", "application_config")
          ),
          a = Object(_.f)(t),
          r = Object(_.g)(null == a ? void 0 : a.clanSteamID, e.listid),
          l = Object(_.e)(r),
          [c, o] = n.a.useState(null),
          [s, m] = n.a.useState(0);
        if (
          (n.a.useEffect(() => {
            var e;
            if (r) {
              const t = Object(_.a)(r)
                ? null === (e = r.apps) || void 0 === e
                  ? void 0
                  : e.filter((e) => {
                      var t;
                      return null == l
                        ? void 0
                        : l.has(
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
                    B.a
                      .Get()
                      .QueueMultipleAppRequests(e, E.h)
                      .then(() => {
                        o(
                          t.filter(
                            (e) =>
                              !Object(E.e)(
                                B.a.Get().GetApp(e.recommended_app.appid)
                              )
                          )
                        );
                      })
                      .catch(() => o([]));
                  });
            }
          }, [r, l]),
          !r)
        )
          return null;
        if (null == c)
          return n.a.createElement(g.a, {
            string: Object(j.f)("#Loading"),
            position: "center",
            size: "medium",
          });
        const d = 1 == r.list_type;
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(y, { clanInfo: a }),
          n.a.createElement(
            "div",
            { className: "page_content_ctn grayscale" },
            n.a.createElement(
              "div",
              { className: "page_content" },
              n.a.createElement(
                "div",
                { className: T.a.CuratorListCtn },
                n.a.createElement(A, { listDetails: r }),
                n.a.createElement(
                  u.a,
                  {
                    className: Object(O.a)(
                      T.a.CuratorList,
                      d && T.a.CuratorListGrid
                    ),
                    "flow-children": "grid",
                  },
                  c.map((e, t) =>
                    n.a.createElement(M, {
                      key: "rec_" + e.recommended_app.appid,
                      item: e,
                      listDetails: r,
                      bAutoFocus: 0 == t,
                    })
                  )
                ),
                Boolean(s > c.length) &&
                  n.a.createElement(
                    "div",
                    null,
                    n.a.createElement(
                      "span",
                      null,
                      Object(j.l)("#SteamCurator_Hidden", s - c.length),
                      " "
                    ),
                    n.a.createElement(
                      i.c,
                      { href: I.d.STORE_BASE_URL + "account/preferences/" },
                      Object(j.f)("#SteamCurator_Setting")
                    )
                  ),
                n.a.createElement(
                  "div",
                  { className: T.a.CuratorMoreCtn },
                  n.a.createElement(
                    "h2",
                    null,
                    Object(j.f)("#SteamCurator_ExploreMoreTitle")
                  ),
                  n.a.createElement(
                    i.c,
                    { href: a.vanity_url },
                    Object(j.m)("#SteamCurator_MoreReviews", a.group_name)
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
          r = Object(I.h)("showlisttitle", "application_config"),
          l = Object(I.h)("titleareaheight", "application_config"),
          c =
            t.list_jsondata.youtube_link &&
            Object(m.b)(t.list_jsondata.youtube_link),
          s = Object(o.g)(I.d.LANGUAGE),
          u = j.a.GetWithFallback(t.localized_flat_title, s),
          d = j.a.GetWithFallback(t.localized_flat_blurb, s),
          p = j.a.GetWithFallback(t.localized_flat_link, s),
          v =
            a &&
            a.GetImageURL(
              Object(h.a)() ? "product_mobile_banner" : "product_banner",
              s
            );
        return n.a.createElement(
          "div",
          { className: T.a.TopReviewInfo },
          Boolean(v) &&
            n.a.createElement(
              i.c,
              { href: a.GetSaleURL() },
              n.a.createElement("img", { className: T.a.SaleBanner, src: v })
            ),
          r && u && n.a.createElement("div", { className: T.a.Title }, u),
          r && d && n.a.createElement("div", { className: T.a.Blurb }, d),
          l > 0 && n.a.createElement("div", { style: { height: l } }),
          c &&
            n.a.createElement(
              "div",
              { className: T.a.VideoReviewCtn },
              n.a.createElement(w.b, {
                video: c.strVideoID,
                startSeconds: c.nStartSeconds,
                autoplay: !0,
                autopause: !0,
                showFullscreenBtn: !0,
                controls: !0,
                preloadYoutubeScripts: !0,
                playsInline: !0,
                imageClassnames: T.a.YouTubePreviewImage,
              })
            ),
          p && n.a.createElement(x, { url: p })
        );
      }
      const M = Object(r.a)((e) => {
        var t, a;
        const { item: r, listDetails: c, bAutoFocus: o } = e,
          i = parseInt(Object(I.h)("curator_account_id", "application_config")),
          s = Object(_.f)(i),
          [d] = Object(D.b)(
            null === (t = null == r ? void 0 : r.recommended_app) ||
              void 0 === t
              ? void 0
              : t.appid,
            { include_assets: !0, include_release: !0 }
          ),
          p = Object(l.useMemo)(
            () => ({
              id: null == d ? void 0 : d.GetID(),
              type: Object(L.a)(
                null == d ? void 0 : d.GetStoreItemType(),
                null == d ? void 0 : d.GetAppType()
              ),
            }),
            [d]
          );
        if (!s || !d) return null;
        const {
            appid: b,
            link_url: f,
            blurb: E,
            time_recommended: C,
            recommendation_state: g,
          } = r.recommended_app,
          h = s.is_creator_home && !s.is_ogg,
          w =
            null === (a = c.list_jsondata.app_data) || void 0 === a
              ? void 0
              : a[b],
          O = f && Object(m.b)(f),
          N = E != _.c && E,
          S = v.a.Get().BHasDemoAppID(b),
          G = null == w ? void 0 : w.img_url,
          F = `curator_clanid=${s.clanAccountID}&curator_listid=${c.listid}`;
        return n.a.createElement(
          u.a,
          { className: T.a.CuratorReview, autoFocus: o },
          n.a.createElement(
            "div",
            { className: T.a.CapsuleCtn },
            O
              ? n.a.createElement(P, {
                  strVideoID: O.strVideoID,
                  nStartSeconds: O.nStartSeconds,
                  info: p,
                  strImgOverrideUrl: G,
                  bShowDemoButton: S,
                  strExtraParams: F,
                })
              : n.a.createElement(R.b, {
                  imageType: "header",
                  bAutoFocus: o,
                  capsule: p,
                  bShowDemoButton: S,
                  strExtraParams: F,
                })
          ),
          n.a.createElement(
            "div",
            { className: T.a.ReviewTextSection },
            n.a.createElement("div", { className: T.a.GameTitle }, d.GetName()),
            n.a.createElement(
              "div",
              { className: T.a.RecommendationTypeAndDate },
              n.a.createElement(Y, { type: g }),
              n.a.createElement(
                "div",
                { className: T.a.ReviewDate },
                h ? d.GetFormattedSteamReleaseDate() : Object(j.n)(C)
              )
            ),
            Boolean(N) &&
              n.a.createElement(
                "div",
                { className: T.a.ReviewBlurb },
                Object(j.f)("#SteamCurator_ReviewTextQuoted", N)
              ),
            Boolean(f) && n.a.createElement(x, { url: f })
          )
        );
      });
      function P(e) {
        const {
            strVideoID: t,
            nStartSeconds: a,
            info: r,
            strImgOverrideUrl: l,
            bShowDemoButton: c,
            strExtraParams: o,
          } = e,
          [i] = Object(D.a)(r.id, Object(L.d)(r.type), { include_assets: !0 });
        return n.a.createElement(
          "div",
          { className: T.a.YouTubeCapsule },
          n.a.createElement(
            "div",
            { className: T.a.YouTubeCtn },
            n.a.createElement(w.b, {
              video: t,
              startSeconds: a,
              autoplay: !0,
              autopause: !0,
              showFullscreenBtn: !0,
              controls: !0,
              preloadYoutubeScripts: !0,
              playsInline: !0,
              imageClassnames: T.a.YouTubePreviewImage,
              altImg: l,
            })
          ),
          n.a.createElement(
            "div",
            { className: T.a.YouTubeCapsuleBottomBar },
            n.a.createElement(
              "div",
              { className: T.a.GameImageCtn },
              n.a.createElement(
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
                n.a.createElement("img", {
                  className: T.a.GameImage,
                  src:
                    null == i ? void 0 : i.GetAssets().GetLibraryCapsuleURL(),
                })
              )
            ),
            n.a.createElement(C.c, { info: r, strClassName: T.a.FullWidth })
          )
        );
      }
      function Y(e) {
        switch (e.type) {
          case 0:
            return n.a.createElement(
              "div",
              { className: T.a.Recommended },
              Object(j.f)("#SteamCurator_Recommended")
            );
          case 1:
            return n.a.createElement(
              "div",
              { className: T.a.NotRecommended },
              Object(j.f)("#SteamCurator_NotRecommended")
            );
          case 2:
            return n.a.createElement(
              "div",
              { className: T.a.Informational },
              Object(j.f)("#SteamCurator_Informational")
            );
          default:
            return null;
        }
      }
      function x(e) {
        let t = Object(d.d)(e.url);
        Object(c.b)(t) &&
          (t =
            (I.d.IN_CLIENT ? "steam://openurl_external/" : "") +
            I.d.COMMUNITY_BASE_URL +
            "linkfilter/?url=" +
            t);
        const a = Object(N.f)(e.url),
          r = Object(m.a)(e.url);
        return n.a.createElement(
          "div",
          { className: T.a.FullReviewLink },
          n.a.createElement(
            i.c,
            {
              className: T.a.FullReviewAnchor,
              href: t,
              rel: "noopener nofollow",
              preferredFocus: !1,
              autoFocus: !1,
            },
            Object(j.f)(
              r
                ? "#SteamCurator_WatchFullReview"
                : "#SteamCurator_ReadFullReview"
            )
          ),
          n.a.createElement(
            "div",
            { className: T.a.FullReviewDomain },
            Object(j.f)("#SteamCurator_ReviewLinkHostnameBracketed", a)
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
        return u;
      });
      var r = a("mrSG"),
        l = a("q1tI"),
        n = a.n(l),
        c = a("av+R"),
        o = a("yLGM"),
        i = a("opsS"),
        s = a("lkRc");
      function u(e) {
        const { children: t, navTreeRef: a } = e,
          l = Object(r.c)(e, ["children", "navTreeRef"]),
          u = n.a.useRef(),
          m = Object(i.g)(u, a);
        if (s.d.IN_GAMEPADUI) {
          const e = window.__nav_tree_root;
          return n.a.createElement(
            c.b,
            Object.assign({}, l, {
              navTreeRef: m,
              secondary: !0,
              parentEmbeddedNavTree: e,
            }),
            n.a.createElement(o.a, null, t)
          );
        }
        return n.a.createElement(n.a.Fragment, null, t);
      }
    },
  },
]);
