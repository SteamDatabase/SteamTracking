/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [21],
  {
    "+KBl": function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "CuratorReviewListContainer", function () {
          return X;
        });
      var r = a("TyAF"),
        n = a("q1tI"),
        l = a.n(n),
        o = a("uzoi"),
        i = a("msu0"),
        c = (a("Zdsb"), a("fsrB")),
        s = a("lo3/"),
        u = a("Lsvi"),
        m = a("Ao8p"),
        d = (a("XrGS"), a("rB+X")),
        p = a("oleE"),
        _ = a("lfGQ"),
        b = a("mrSG"),
        v = a("2VXD"),
        f = a("vDqi"),
        E = a.n(f),
        h = (a("sTxY"), a("/Q1a")),
        w = a("TqgT");
      function g(e, t) {
        const [a, r] = Object(n.useState)(
            (null == e ? void 0 : e.BUsesContentHubForItemSource())
              ? new Set()
              : null
          ),
          l = Object(v.a)("useFilteredAppViaContentHub");
        return (
          Object(n.useEffect)(() => {
            (null == e ? void 0 : e.BUsesContentHubForItemSource()) &&
              !a &&
              (function (e, t) {
                var a;
                return Object(b.a)(this, void 0, void 0, function* () {
                  const r =
                      h.d.STORE_BASE_URL +
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
                    const e = yield E.a.get(r, { params: n });
                    if (
                      1 ==
                      (null === (a = null == e ? void 0 : e.data) ||
                      void 0 === a
                        ? void 0
                        : a.success)
                    )
                      return e.data.appids.forEach((e) => o.add(e)), o;
                    l = Object(w.a)(e);
                  } catch (e) {
                    l = Object(w.a)(e);
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
      var C = a("lmAv"),
        j = a("Sn0s"),
        O = a("44wC"),
        R = a("FmLm"),
        I = a("Ys0h"),
        N = a("hAgw"),
        S = a("RrtU"),
        T = a("emic"),
        y = a.n(T),
        B = a("e356"),
        G = (a("2dJq"), a("GbHM")),
        F = a("T9kP");
      const D = new RegExp(
        "(?:https?://)?(?:www.)?twitch.tv/videos/([0-9]+)S*"
      );
      function L(e) {
        const t = D.exec(e);
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
            width: c,
            height: s,
          } = e,
          [u, m] = n.useState(Boolean(t)),
          d = null != l && null != l && l;
        if (u)
          return n.createElement(
            "div",
            {
              className: Object(G.a)(
                "YoutubePreviewContainer",
                F.YoutubePreviewImage,
                e.imageClassnames
              ),
              onClick: () => m(!1),
            },
            n.createElement("img", {
              className: Object(G.a)(
                "YoutubePreviewImage",
                F.YoutubePreviewImage
              ),
              src:
                t ||
                h.d.COMMUNITY_CDN_URL +
                  "public/shared/images/responsive/youtube_16x9_placeholder.gif",
            }),
            n.createElement(
              "div",
              { className: "YoutubePreviewPlay" },
              n.createElement(B.Ab, null)
            )
          );
        let p = Object(h.f)().replace("https://", "");
        const _ = p.indexOf("/");
        _ >= 0 && (p = p.substring(0, _));
        let b = o
          ? `https://clips.twitch.tv/embed?clip=${a}`
          : `https://player.twitch.tv/?video=${a}`;
        return (
          (b += `&parent=${p}&autoplay=${d}&muted=${Boolean(r)}`),
          i &&
            (b += `&time=${(function (e) {
              const t = Math.floor(e / 3600);
              e -= 60 * t * 60;
              const a = Math.floor(e / 60);
              return `${t}h${a}m${(e -= a * e)}s`;
            })(i)}`),
          n.createElement(
            "div",
            { className: Object(G.a)("YoutubePlayer", y.a.TwitchPlayer) },
            n.createElement("img", {
              className: Object(G.a)(
                "YoutubePreviewContainer",
                F.YoutubePreviewImage,
                e.imageClassnames
              ),
              src:
                h.d.COMMUNITY_CDN_URL +
                "public/shared/images/responsive/youtube_16x9_placeholder.gif",
            }),
            n.createElement("iframe", {
              src: b,
              allowFullScreen: !0,
              frameBorder: 0,
              width: c || 460,
              height: s || 300,
            })
          )
        );
      }
      var A = a("oEKi"),
        k = a("upZW"),
        P = a("4EJs"),
        M = a("E4gw"),
        x = a("kWcV"),
        U = a("aF8t"),
        H = a("yENa"),
        V = a("GXif"),
        W = a("pSt8"),
        $ = a("pcg8"),
        z = a.n($),
        Q = (a("wijF"), a("QY55")),
        q = a("C4Er");
      function J(e) {
        const { clanInfo: t } = e,
          { curator_link: a, curator_medium_avatar: r } = Object(h.h)(
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
                  c.c,
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
                l.a.createElement(Q.a, {
                  className: q.BreadContainer,
                  crumbs: Object(h.h)("breadcrumbs", "application_config"),
                }),
                l.a.createElement(
                  c.c,
                  { className: "pageheader curator_name", href: a },
                  Object(V.f)("#SteamCurator_List_Header_List", t.group_name)
                )
              )
            )
          )
        );
      }
      t.default = function (e) {
        const t = Object(j.a)();
        return l.a.createElement(
          s.a,
          { navID: "StoreCuratorPageRoot", NavigationManager: t },
          l.a.createElement(X, { listid: e.listid })
        );
      };
      function X(e) {
        const t = parseInt(
            Object(h.h)("curator_account_id", "application_config")
          ),
          a = Object(C.e)(t),
          r = Object(C.f)(null == a ? void 0 : a.clanSteamID, e.listid);
        return r
          ? l.a.createElement(
              l.a.Fragment,
              null,
              l.a.createElement(J, { clanInfo: a }),
              l.a.createElement(
                "div",
                { className: "page_content_ctn grayscale" },
                l.a.createElement(
                  "div",
                  { className: "page_content" },
                  l.a.createElement(
                    "div",
                    { className: z.a.CuratorListCtn },
                    l.a.createElement(ee, { listDetails: r }),
                    Object(C.a)(r)
                      ? l.a.createElement(Z, { listDetails: r })
                      : l.a.createElement(K, {
                          listDetails: r,
                          rgListItems: r.apps,
                        }),
                    l.a.createElement(
                      "div",
                      { className: z.a.CuratorMoreCtn },
                      l.a.createElement(
                        "h2",
                        null,
                        Object(V.f)("#SteamCurator_ExploreMoreTitle")
                      ),
                      l.a.createElement(
                        c.c,
                        { href: a.vanity_url },
                        Object(V.n)("#SteamCurator_MoreReviews", a.group_name)
                      )
                    )
                  )
                )
              )
            )
          : null;
      }
      function Z(e) {
        const { listDetails: t } = e,
          [a, r] = Object(n.useState)(null),
          o = new p.a(t.sale_clan_steamid),
          i = Object(d.a)(o.GetAccountID(), t.sale_clan_event_gid),
          c = Object(n.useMemo)(
            () => (t.apps || []).map((e) => e.recommended_app.appid),
            [t]
          ),
          s = g(i, c);
        return (
          Object(n.useEffect)(() => {
            var e, a;
            if (i)
              if (i.BUsesContentHubForItemSource())
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
                const e = i.GetSaleFeaturedApps();
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
          }, [t, i, s]),
          l.a.createElement(K, { listDetails: t, rgListItems: a })
        );
      }
      function K(e) {
        const { listDetails: t, rgListItems: a } = e,
          [r, o] = Object(n.useState)(0),
          [i, s] = Object(n.useState)(null),
          m = Object(v.a)("CuratorAppListDisplay");
        if (
          (l.a.useEffect(() => {
            a &&
              (o((null == a ? void 0 : a.length) || 0),
              R.a
                .Get()
                .HintLoad()
                .then(() => {
                  const e = a.map((e) => e.recommended_app.appid);
                  I.a
                    .Get()
                    .QueueMultipleAppRequests(e, k.i)
                    .then(() => {
                      m.token.reason ||
                        s(
                          a.filter(
                            (e) =>
                              !Object(k.e)(
                                I.a.Get().GetApp(e.recommended_app.appid)
                              )
                          )
                        );
                    })
                    .catch(() => {
                      m.token.reason || s([]);
                    });
                }));
          }, [a, m]),
          null == i)
        )
          return l.a.createElement(x.a, {
            string: Object(V.f)("#Loading"),
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
              className: Object(G.a)(z.a.CuratorList, d && z.a.CuratorListGrid),
              "flow-children": "grid",
            },
            i.map((e, a) =>
              l.a.createElement(te, {
                key: "rec_" + e.recommended_app.appid,
                item: e,
                listDetails: t,
                bAutoFocus: 0 == a,
              })
            )
          ),
          Boolean(r > i.length) &&
            l.a.createElement(
              "div",
              null,
              l.a.createElement(
                "span",
                null,
                Object(V.m)("#SteamCurator_Hidden", r - i.length),
                " "
              ),
              l.a.createElement(
                c.c,
                { href: h.d.STORE_BASE_URL + "account/preferences/" },
                Object(V.f)("#SteamCurator_Setting")
              )
            )
        );
      }
      function ee(e) {
        const { listDetails: t } = e,
          a = Object(C.d)(t),
          r = Object(h.h)("showlisttitle", "application_config"),
          n = Object(h.h)("titleareaheight", "application_config"),
          o =
            t.list_jsondata.youtube_link &&
            Object(m.b)(t.list_jsondata.youtube_link),
          s = t.list_jsondata.youtube_link && L(t.list_jsondata.youtube_link),
          u = Object(i.g)(h.d.LANGUAGE),
          d = V.a.GetWithFallback(t.localized_flat_title, u),
          p = V.a.GetWithFallback(t.localized_flat_blurb, u),
          _ = V.a.GetWithFallback(t.localized_flat_link, u),
          b =
            a &&
            a.GetImageURL(
              Object(U.a)() ? "product_mobile_banner" : "product_banner",
              u
            );
        return l.a.createElement(
          "div",
          { className: z.a.TopReviewInfo },
          Boolean(b) &&
            l.a.createElement(
              c.c,
              { href: a.GetSaleURL() },
              l.a.createElement("img", { className: z.a.SaleBanner, src: b })
            ),
          r && d && l.a.createElement("div", { className: z.a.Title }, d),
          r && p && l.a.createElement("div", { className: z.a.Blurb }, p),
          Boolean(n > 0) && l.a.createElement("div", { style: { height: n } }),
          o &&
            l.a.createElement(
              "div",
              { className: z.a.VideoReviewCtn },
              l.a.createElement(H.b, {
                video: o.strVideoID,
                startSeconds: o.nStartSeconds,
                autoplay: !0,
                autopause: !0,
                showFullscreenBtn: !0,
                controls: !0,
                preloadYoutubeScripts: !0,
                playsInline: !0,
                imageClassnames: z.a.YouTubePreviewImage,
              })
            ),
          Boolean(s) &&
            l.a.createElement(
              "div",
              { className: z.a.VideoReviewCtn },
              l.a.createElement(Y, {
                videoid: s,
                posterURL: "",
                imageClassnames: z.a.YouTubePreviewImage,
              })
            ),
          _ && l.a.createElement(ne, { url: _ })
        );
      }
      const te = Object(r.a)((e) => {
        var t, a;
        const { item: r, listDetails: o, bAutoFocus: i } = e,
          c = parseInt(Object(h.h)("curator_account_id", "application_config")),
          s = Object(C.e)(c),
          [d] = Object(S.b)(
            null === (t = null == r ? void 0 : r.recommended_app) ||
              void 0 === t
              ? void 0
              : t.appid,
            { include_assets: !0, include_release: !0 }
          ),
          p = Object(n.useMemo)(
            () => ({
              id: null == d ? void 0 : d.GetID(),
              type: Object(N.a)(
                null == d ? void 0 : d.GetStoreItemType(),
                null == d ? void 0 : d.GetAppType()
              ),
            }),
            [d]
          );
        if (!s || !d) return null;
        const {
            appid: _,
            link_url: b,
            blurb: v,
            time_recommended: f,
            recommendation_state: E,
          } = r.recommended_app,
          w = s.is_creator_home && !s.is_ogg,
          g =
            null === (a = o.list_jsondata.app_data) || void 0 === a
              ? void 0
              : a[_],
          j = b && Object(m.b)(b),
          R = b && L(b),
          I = v != C.c && v,
          T = O.a.Get().BHasDemoAppID(_),
          y = null == g ? void 0 : g.img_url,
          B = `curator_clanid=${s.clanAccountID}&curator_listid=${o.listid}`;
        return l.a.createElement(
          u.a,
          { className: z.a.CuratorReview, autoFocus: i },
          l.a.createElement(
            "div",
            { className: z.a.CapsuleCtn },
            Boolean(j || R)
              ? l.a.createElement(ae, {
                  strVideoID: (null == j ? void 0 : j.strVideoID) || R,
                  nStartSeconds: null == j ? void 0 : j.nStartSeconds,
                  info: p,
                  strImgOverrideUrl: y,
                  bShowDemoButton: T,
                  strExtraParams: B,
                  bTwitchVideo: Boolean(R),
                })
              : l.a.createElement(M.b, {
                  imageType: "header",
                  bAutoFocus: i,
                  capsule: p,
                  bShowDemoButton: T,
                  strExtraParams: B,
                })
          ),
          l.a.createElement(
            "div",
            { className: z.a.ReviewTextSection },
            l.a.createElement("div", { className: z.a.GameTitle }, d.GetName()),
            l.a.createElement(
              "div",
              { className: z.a.RecommendationTypeAndDate },
              l.a.createElement(re, { type: E }),
              l.a.createElement(
                "div",
                { className: z.a.ReviewDate },
                w ? d.GetFormattedSteamReleaseDate() : Object(V.o)(f)
              )
            ),
            Boolean(I) &&
              l.a.createElement(
                "div",
                { className: z.a.ReviewBlurb },
                Object(V.f)("#SteamCurator_ReviewTextQuoted", I)
              ),
            Boolean(b) && l.a.createElement(ne, { url: b })
          )
        );
      });
      function ae(e) {
        const {
            strVideoID: t,
            nStartSeconds: a,
            info: r,
            strImgOverrideUrl: n,
            bShowDemoButton: o,
            strExtraParams: i,
            bTwitchVideo: c,
          } = e,
          [s] = Object(S.a)(r.id, Object(N.d)(r.type), { include_assets: !0 });
        return l.a.createElement(
          "div",
          { className: z.a.YouTubeCapsule },
          l.a.createElement(
            "div",
            { className: z.a.YouTubeCtn },
            c
              ? l.a.createElement(Y, {
                  videoid: t,
                  posterURL: null == s ? void 0 : s.GetAssets().GetHeaderURL(),
                  imageClassnames: z.a.YouTubePreviewImage,
                  autoplay: !0,
                })
              : l.a.createElement(H.b, {
                  video: t,
                  startSeconds: a,
                  autoplay: !0,
                  autopause: !0,
                  showFullscreenBtn: !0,
                  controls: !0,
                  preloadYoutubeScripts: !0,
                  playsInline: !0,
                  imageClassnames: z.a.YouTubePreviewImage,
                  altImg: n,
                })
          ),
          l.a.createElement(
            "div",
            { className: z.a.YouTubeCapsuleBottomBar },
            l.a.createElement(
              "div",
              { className: z.a.GameImageCtn },
              l.a.createElement(
                A.d,
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
                l.a.createElement("img", {
                  className: z.a.GameImage,
                  src:
                    null == s ? void 0 : s.GetAssets().GetLibraryCapsuleURL(),
                })
              )
            ),
            l.a.createElement(P.c, { info: r, strClassName: z.a.FullWidth })
          )
        );
      }
      function re(e) {
        switch (e.type) {
          case 0:
            return l.a.createElement(
              "div",
              { className: z.a.Recommended },
              Object(V.f)("#SteamCurator_Recommended")
            );
          case 1:
            return l.a.createElement(
              "div",
              { className: z.a.NotRecommended },
              Object(V.f)("#SteamCurator_NotRecommended")
            );
          case 2:
            return l.a.createElement(
              "div",
              { className: z.a.Informational },
              Object(V.f)("#SteamCurator_Informational")
            );
          default:
            return null;
        }
      }
      function ne(e) {
        let t = Object(_.d)(e.url);
        Object(o.b)(t) &&
          (t =
            (h.d.IN_CLIENT ? "steam://openurl_external/" : "") +
            h.d.COMMUNITY_BASE_URL +
            "linkfilter/?url=" +
            t);
        const a = Object(W.f)(e.url),
          r = Object(m.a)(e.url);
        return l.a.createElement(
          "div",
          { className: z.a.FullReviewLink },
          l.a.createElement(
            c.c,
            {
              className: z.a.FullReviewAnchor,
              href: t,
              rel: "noopener nofollow",
              preferredFocus: !1,
              autoFocus: !1,
            },
            Object(V.f)(
              r
                ? "#SteamCurator_WatchFullReview"
                : "#SteamCurator_ReadFullReview"
            )
          ),
          l.a.createElement(
            "div",
            { className: z.a.FullReviewDomain },
            Object(V.f)("#SteamCurator_ReviewLinkHostnameBracketed", a)
          )
        );
      }
    },
    C4Er: function (e, t, a) {
      e.exports = { BreadContainer: "curatorminiheader_BreadContainer_GkVFI" };
    },
    QY55: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return s;
      });
      var r = a("q1tI"),
        n = a("TGWf"),
        l = a("GbHM"),
        o = a("55Ip"),
        i = a("fsrB"),
        c = a("Lsvi");
      function s(e) {
        const { crumbs: t, className: a } = e;
        return t && 0 != t.length
          ? r.createElement(
              "div",
              { className: Object(l.a)(n.BreadContainer, a) },
              r.createElement(
                c.a,
                { className: "blockbg", "flow-children": "row" },
                t.map((e) => {
                  const t = new Array();
                  return (
                    e.url.startsWith("http")
                      ? t.push(
                          r.createElement(
                            i.c,
                            { key: "anchor_" + e.name, href: e.url },
                            e.name
                          )
                        )
                      : t.push(
                          r.createElement(
                            o.b,
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
    TGWf: function (e, t, a) {
      e.exports = { BreadContainer: "breadcrumbs_BreadContainer_1QPim" };
    },
    emic: function (e, t, a) {
      e.exports = {
        VideoReviewCtn: "twitchembed_VideoReviewCtn_nNaTz",
        YouTubePreviewImage: "twitchembed_YouTubePreviewImage__mxmF",
        TwitchPlayer: "twitchembed_TwitchPlayer_Ny5PH",
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
        i = a("ez+p"),
        c = a("hCpY"),
        s = a("/Q1a");
      function u(e) {
        const { children: t, navTreeRef: a } = e,
          n = Object(r.c)(e, ["children", "navTreeRef"]),
          u = l.a.useRef(),
          m = Object(c.g)(u, a);
        if (s.d.IN_GAMEPADUI) {
          const e = window.__nav_tree_root;
          return l.a.createElement(
            o.b,
            Object.assign({}, n, {
              navTreeRef: m,
              secondary: !0,
              parentEmbeddedNavTree: e,
            }),
            l.a.createElement(i.a, null, t)
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
