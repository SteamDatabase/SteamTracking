/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [17],
  {
    "+KBl": function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "CuratorReviewListContainer", function () {
          return U;
        });
      var r = a("TyAF"),
        n = a("q1tI"),
        l = a.n(n),
        o = a("uzoi"),
        c = a("msu0"),
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
        g = a("E4gw"),
        h = a("kWcV"),
        w = a("aF8t"),
        R = a("yENa"),
        j = a("GbHM"),
        O = a("GXif"),
        S = a("pSt8"),
        I = a("/Q1a"),
        T = a("pcg8"),
        N = a.n(T),
        F = (a("wijF"), a("QY55")),
        G = a("C4Er");
      function B(e) {
        const { clanInfo: t } = e,
          { curator_link: a, curator_medium_avatar: r } = Object(I.h)(
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
                  crumbs: Object(I.h)("breadcrumbs", "application_config"),
                }),
                l.a.createElement(
                  i.c,
                  { className: "pageheader curator_name", href: a },
                  Object(O.f)("#SteamCurator_List_Header_List", t.group_name)
                )
              )
            )
          )
        );
      }
      a("1v2s");
      var D = a("Ys0h"),
        y = a("RrtU"),
        L = a("hAgw");
      a("emic"), a("e356");
      var A = a("2VXD"),
        k = a("oleE"),
        M = a("rB+X"),
        Y = a("mrSG"),
        P = a("vDqi"),
        x = a.n(P),
        H = (a("sTxY"), a("TqgT"));
      function V(e, t) {
        const [a, r] = Object(n.useState)(
            (null == e ? void 0 : e.BUsesContentHubForItemSource())
              ? new Set()
              : null
          ),
          l = Object(A.a)("useFilteredAppViaContentHub");
        return (
          Object(n.useEffect)(() => {
            (null == e ? void 0 : e.BUsesContentHubForItemSource()) &&
              !a &&
              (function (e, t) {
                var a;
                return Object(Y.a)(this, void 0, void 0, function* () {
                  const r =
                      I.d.STORE_BASE_URL +
                      "contenthub/ajaxfilterappsbycontenthub",
                    n = {
                      hubtype: e.GetContentHubType(),
                      category: e.GetContentHubCategory(),
                      tagid: e.GetContentHubTag(),
                      prune_list_optin_name: e.jsondata.prune_list_optin_name,
                      applist: t.sort().join(","),
                    };
                  let l = null;
                  const o = new Set();
                  try {
                    const e = yield x.a.get(r, { params: n });
                    if (
                      1 ==
                      (null === (a = null == e ? void 0 : e.data) ||
                      void 0 === a
                        ? void 0
                        : a.success)
                    )
                      return e.data.appids.forEach((e) => o.add(e)), o;
                    l = Object(H.a)(e);
                  } catch (e) {
                    l = Object(H.a)(e);
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
      t.default = function (e) {
        const t = Object(p.a)();
        return l.a.createElement(
          s.a,
          { navID: "StoreCuratorPageRoot", NavigationManager: t },
          l.a.createElement(U, { listid: e.listid })
        );
      };
      function U(e) {
        const t = parseInt(
            Object(I.h)("curator_account_id", "application_config")
          ),
          a = Object(_.e)(t),
          r = Object(_.f)(null == a ? void 0 : a.clanSteamID, e.listid);
        return r
          ? l.a.createElement(
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
                    { className: N.a.CuratorListCtn },
                    l.a.createElement(Q, { listDetails: r }),
                    Object(_.a)(r)
                      ? l.a.createElement(W, { listDetails: r })
                      : l.a.createElement(z, {
                          listDetails: r,
                          rgListItems: r.apps,
                        }),
                    l.a.createElement(
                      "div",
                      { className: N.a.CuratorMoreCtn },
                      l.a.createElement(
                        "h2",
                        null,
                        Object(O.f)("#SteamCurator_ExploreMoreTitle")
                      ),
                      l.a.createElement(
                        i.c,
                        { href: a.vanity_url },
                        Object(O.m)("#SteamCurator_MoreReviews", a.group_name)
                      )
                    )
                  )
                )
              )
            )
          : null;
      }
      function W(e) {
        const { listDetails: t } = e,
          [a, r] = Object(n.useState)(null),
          o = new k.a(t.sale_clan_steamid),
          c = Object(M.a)(o.GetAccountID(), t.sale_clan_event_gid),
          i = Object(n.useMemo)(
            () => (t.apps || []).map((e) => e.recommended_app.appid),
            [t]
          ),
          s = V(c, i);
        return (
          Object(n.useEffect)(() => {
            var e, a;
            if (c)
              if (c.BUsesContentHubForItemSource())
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
                const e = c.GetSaleFeaturedApps();
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
          }, [t, c, s]),
          l.a.createElement(z, { listDetails: t, rgListItems: a })
        );
      }
      function z(e) {
        const { listDetails: t, rgListItems: a } = e,
          [r, o] = Object(n.useState)(0),
          [c, s] = Object(n.useState)(null),
          m = Object(A.a)("CuratorAppListDisplay");
        if (
          (l.a.useEffect(() => {
            a &&
              (o((null == a ? void 0 : a.length) || 0),
              v.a
                .Get()
                .HintLoad()
                .then(() => {
                  const e = a.map((e) => e.recommended_app.appid);
                  D.a
                    .Get()
                    .QueueMultipleAppRequests(e, E.h)
                    .then(() => {
                      m.token.reason ||
                        s(
                          a.filter(
                            (e) =>
                              !Object(E.e)(
                                D.a.Get().GetApp(e.recommended_app.appid)
                              )
                          )
                        );
                    })
                    .catch(() => {
                      m.token.reason || s([]);
                    });
                }));
          }, [a, m]),
          null == c)
        )
          return l.a.createElement(h.a, {
            string: Object(O.f)("#Loading"),
            position: "center",
            size: "medium",
          });
        const d = 1 == t.list_type;
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            u.a,
            {
              className: Object(j.a)(N.a.CuratorList, d && N.a.CuratorListGrid),
              "flow-children": "grid",
            },
            c.map((e, a) =>
              l.a.createElement(q, {
                key: "rec_" + e.recommended_app.appid,
                item: e,
                listDetails: t,
                bAutoFocus: 0 == a,
              })
            )
          ),
          Boolean(r > c.length) &&
            l.a.createElement(
              "div",
              null,
              l.a.createElement(
                "span",
                null,
                Object(O.l)("#SteamCurator_Hidden", r - c.length),
                " "
              ),
              l.a.createElement(
                i.c,
                { href: I.d.STORE_BASE_URL + "account/preferences/" },
                Object(O.f)("#SteamCurator_Setting")
              )
            )
        );
      }
      function Q(e) {
        const { listDetails: t } = e,
          a = Object(_.d)(t),
          r = Object(I.h)("showlisttitle", "application_config"),
          n = Object(I.h)("titleareaheight", "application_config"),
          o =
            t.list_jsondata.youtube_link &&
            Object(m.b)(t.list_jsondata.youtube_link),
          s = Object(c.g)(I.d.LANGUAGE),
          u = O.a.GetWithFallback(t.localized_flat_title, s),
          d = O.a.GetWithFallback(t.localized_flat_blurb, s),
          p = O.a.GetWithFallback(t.localized_flat_link, s),
          b =
            a &&
            a.GetImageURL(
              Object(w.a)() ? "product_mobile_banner" : "product_banner",
              s
            );
        return l.a.createElement(
          "div",
          { className: N.a.TopReviewInfo },
          Boolean(b) &&
            l.a.createElement(
              i.c,
              { href: a.GetSaleURL() },
              l.a.createElement("img", { className: N.a.SaleBanner, src: b })
            ),
          r && u && l.a.createElement("div", { className: N.a.Title }, u),
          r && d && l.a.createElement("div", { className: N.a.Blurb }, d),
          n > 0 && l.a.createElement("div", { style: { height: n } }),
          o &&
            l.a.createElement(
              "div",
              { className: N.a.VideoReviewCtn },
              l.a.createElement(R.b, {
                video: o.strVideoID,
                startSeconds: o.nStartSeconds,
                autoplay: !0,
                autopause: !0,
                showFullscreenBtn: !0,
                controls: !0,
                preloadYoutubeScripts: !0,
                playsInline: !0,
                imageClassnames: N.a.YouTubePreviewImage,
              })
            ),
          p && l.a.createElement(Z, { url: p })
        );
      }
      const q = Object(r.a)((e) => {
        var t, a;
        const { item: r, listDetails: o, bAutoFocus: c } = e,
          i = parseInt(Object(I.h)("curator_account_id", "application_config")),
          s = Object(_.e)(i),
          [d] = Object(y.b)(
            null === (t = null == r ? void 0 : r.recommended_app) ||
              void 0 === t
              ? void 0
              : t.appid,
            { include_assets: !0, include_release: !0 }
          ),
          p = Object(n.useMemo)(
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
            appid: v,
            link_url: f,
            blurb: E,
            time_recommended: C,
            recommendation_state: h,
          } = r.recommended_app,
          w = s.is_creator_home && !s.is_ogg,
          R =
            null === (a = o.list_jsondata.app_data) || void 0 === a
              ? void 0
              : a[v],
          j = f && Object(m.b)(f),
          S = E != _.c && E,
          T = b.a.Get().BHasDemoAppID(v),
          F = null == R ? void 0 : R.img_url,
          G = `curator_clanid=${s.clanAccountID}&curator_listid=${o.listid}`;
        return l.a.createElement(
          u.a,
          { className: N.a.CuratorReview, autoFocus: c },
          l.a.createElement(
            "div",
            { className: N.a.CapsuleCtn },
            j
              ? l.a.createElement(J, {
                  strVideoID: j.strVideoID,
                  nStartSeconds: j.nStartSeconds,
                  info: p,
                  strImgOverrideUrl: F,
                  bShowDemoButton: T,
                  strExtraParams: G,
                })
              : l.a.createElement(g.b, {
                  imageType: "header",
                  bAutoFocus: c,
                  capsule: p,
                  bShowDemoButton: T,
                  strExtraParams: G,
                })
          ),
          l.a.createElement(
            "div",
            { className: N.a.ReviewTextSection },
            l.a.createElement("div", { className: N.a.GameTitle }, d.GetName()),
            l.a.createElement(
              "div",
              { className: N.a.RecommendationTypeAndDate },
              l.a.createElement(X, { type: h }),
              l.a.createElement(
                "div",
                { className: N.a.ReviewDate },
                w ? d.GetFormattedSteamReleaseDate() : Object(O.n)(C)
              )
            ),
            Boolean(S) &&
              l.a.createElement(
                "div",
                { className: N.a.ReviewBlurb },
                Object(O.f)("#SteamCurator_ReviewTextQuoted", S)
              ),
            Boolean(f) && l.a.createElement(Z, { url: f })
          )
        );
      });
      function J(e) {
        const {
            strVideoID: t,
            nStartSeconds: a,
            info: r,
            strImgOverrideUrl: n,
            bShowDemoButton: o,
            strExtraParams: c,
          } = e,
          [i] = Object(y.a)(r.id, Object(L.d)(r.type), { include_assets: !0 });
        return l.a.createElement(
          "div",
          { className: N.a.YouTubeCapsule },
          l.a.createElement(
            "div",
            { className: N.a.YouTubeCtn },
            l.a.createElement(R.b, {
              video: t,
              startSeconds: a,
              autoplay: !0,
              autopause: !0,
              showFullscreenBtn: !0,
              controls: !0,
              preloadYoutubeScripts: !0,
              playsInline: !0,
              imageClassnames: N.a.YouTubePreviewImage,
              altImg: n,
            })
          ),
          l.a.createElement(
            "div",
            { className: N.a.YouTubeCapsuleBottomBar },
            l.a.createElement(
              "div",
              { className: N.a.GameImageCtn },
              l.a.createElement(
                f.d,
                {
                  item: r,
                  bShowDemoButton: o,
                  nDelayShowMs: 300,
                  strExtraParams: c,
                  hoverProps: {
                    direction: "overlay-center",
                    style: { minWidth: "300px" },
                  },
                },
                l.a.createElement("img", {
                  className: N.a.GameImage,
                  src:
                    null == i ? void 0 : i.GetAssets().GetLibraryCapsuleURL(),
                })
              )
            ),
            l.a.createElement(C.c, { info: r, strClassName: N.a.FullWidth })
          )
        );
      }
      function X(e) {
        switch (e.type) {
          case 0:
            return l.a.createElement(
              "div",
              { className: N.a.Recommended },
              Object(O.f)("#SteamCurator_Recommended")
            );
          case 1:
            return l.a.createElement(
              "div",
              { className: N.a.NotRecommended },
              Object(O.f)("#SteamCurator_NotRecommended")
            );
          case 2:
            return l.a.createElement(
              "div",
              { className: N.a.Informational },
              Object(O.f)("#SteamCurator_Informational")
            );
          default:
            return null;
        }
      }
      function Z(e) {
        let t = Object(d.d)(e.url);
        Object(o.b)(t) &&
          (t =
            (I.d.IN_CLIENT ? "steam://openurl_external/" : "") +
            I.d.COMMUNITY_BASE_URL +
            "linkfilter/?url=" +
            t);
        const a = Object(S.f)(e.url),
          r = Object(m.a)(e.url);
        return l.a.createElement(
          "div",
          { className: N.a.FullReviewLink },
          l.a.createElement(
            i.c,
            {
              className: N.a.FullReviewAnchor,
              href: t,
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
            { className: N.a.FullReviewDomain },
            Object(O.f)("#SteamCurator_ReviewLinkHostnameBracketed", a)
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
        o = a("fsrB"),
        c = a("ez+p"),
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
            o.b,
            Object.assign({}, n, {
              navTreeRef: m,
              secondary: !0,
              parentEmbeddedNavTree: e,
            }),
            l.a.createElement(c.a, null, t)
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
