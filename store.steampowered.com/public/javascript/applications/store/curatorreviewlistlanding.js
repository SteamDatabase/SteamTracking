/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [29],
  {
    "+KBl": function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "CuratorReviewListContainer", function () {
          return X;
        });
      var a = n("TyAF"),
        r = n("q1tI"),
        o = n.n(r),
        i = n("uzoi"),
        l = n("msu0"),
        c = (n("Zdsb"), n("fsrB")),
        s = n("lo3/"),
        u = n("Lsvi"),
        d = n("Ao8p"),
        m = (n("XrGS"), n("rB+X")),
        p = n("oleE"),
        v = n("lfGQ"),
        f = n("mrSG"),
        b = n("2VXD"),
        _ = n("vDqi"),
        h = n.n(_),
        w = (n("sTxY"), n("/Q1a")),
        g = n("TqgT");
      function E(e, t) {
        const [n, a] = Object(r.useState)(
            (null == e ? void 0 : e.BUsesContentHubForItemSource())
              ? new Set()
              : null
          ),
          o = Object(b.a)("useFilteredAppViaContentHub");
        return (
          Object(r.useEffect)(() => {
            (null == e ? void 0 : e.BUsesContentHubForItemSource()) &&
              !n &&
              (function (e, t) {
                var n;
                return Object(f.a)(this, void 0, void 0, function* () {
                  const a =
                      w.d.STORE_BASE_URL +
                      "contenthub/ajaxfilterappsbycontenthub",
                    r = {
                      hubtype: e.GetContentHubType(),
                      category: e.GetContentHubCategory(),
                      tagid: e.GetContentHubTag(),
                      prune_list_optin_name: e.jsondata.prune_list_optin_name,
                      optin_tagid: e.jsondata.optin_tagid,
                      optin_prune_tagid: e.jsondata.optin_prune_tagid,
                      applist: t.sort().join(","),
                    };
                  let o = null;
                  const i = new Set();
                  try {
                    const e = yield h.a.get(a, { params: r });
                    if (
                      1 ==
                      (null === (n = null == e ? void 0 : e.data) ||
                      void 0 === n
                        ? void 0
                        : n.success)
                    )
                      return e.data.appids.forEach((e) => i.add(e)), i;
                    o = Object(g.a)(e);
                  } catch (e) {
                    o = Object(g.a)(e);
                  }
                  return (
                    console.error(
                      "LoadContentHubFilteredApps failed: " +
                        (null == o ? void 0 : o.strErrorMsg),
                      o
                    ),
                    i
                  );
                });
              })(e, t).then((e) => {
                o.token.reason || a(e);
              });
          }, [n, o.token.reason, e, t]),
          n
        );
      }
      var y = n("lmAv"),
        C = n("Sn0s"),
        O = n("44wC"),
        T = n("FmLm"),
        j = n("Ys0h"),
        R = n("hAgw"),
        S = n("RrtU"),
        B = n("emic"),
        N = n.n(B),
        I = n("e356"),
        L = (n("2dJq"), n("GbHM")),
        P = n("T9kP");
      const F = new RegExp(
        "(?:https?://)?(?:www.)?twitch.tv/videos/([0-9]+)S*"
      );
      function G(e) {
        const t = F.exec(e);
        return (null == t ? void 0 : t.length) > 1 ? t[1] : null;
      }
      function x(e) {
        const {
            posterURL: t,
            videoid: n,
            muted: a,
            autoplay: o,
            bIsClipID: i,
            time: l,
            width: c,
            height: s,
          } = e,
          [u, d] = r.useState(Boolean(t)),
          m = null != o && null != o && o;
        if (u)
          return r.createElement(
            "div",
            {
              className: Object(L.a)(
                "YoutubePreviewContainer",
                P.YoutubePreviewImage,
                e.imageClassnames
              ),
              onClick: () => d(!1),
            },
            r.createElement("img", {
              className: Object(L.a)(
                "YoutubePreviewImage",
                P.YoutubePreviewImage
              ),
              src:
                t ||
                w.d.COMMUNITY_CDN_URL +
                  "public/shared/images/responsive/youtube_16x9_placeholder.gif",
            }),
            r.createElement(
              "div",
              { className: "YoutubePreviewPlay" },
              r.createElement(I.Ab, null)
            )
          );
        let p = Object(w.f)().replace("https://", "");
        const v = p.indexOf("/");
        v >= 0 && (p = p.substring(0, v));
        let f = i
          ? `https://clips.twitch.tv/embed?clip=${n}`
          : `https://player.twitch.tv/?video=${n}`;
        return (
          (f += `&parent=${p}&autoplay=${m}&muted=${Boolean(a)}`),
          l &&
            (f += `&time=${(function (e) {
              const t = Math.floor(e / 3600);
              e -= 60 * t * 60;
              const n = Math.floor(e / 60);
              return `${t}h${n}m${(e -= n * e)}s`;
            })(l)}`),
          r.createElement(
            "div",
            { className: Object(L.a)("YoutubePlayer", N.a.TwitchPlayer) },
            r.createElement("img", {
              className: Object(L.a)(
                "YoutubePreviewContainer",
                P.YoutubePreviewImage,
                e.imageClassnames
              ),
              src:
                w.d.COMMUNITY_CDN_URL +
                "public/shared/images/responsive/youtube_16x9_placeholder.gif",
            }),
            r.createElement("iframe", {
              src: f,
              allowFullScreen: !0,
              frameBorder: 0,
              width: c || 460,
              height: s || 300,
            })
          )
        );
      }
      var k = n("oEKi"),
        D = n("upZW"),
        A = n("4EJs"),
        Y = n("E4gw"),
        H = n("kWcV"),
        U = n("aF8t"),
        M = n("yENa"),
        W = n("GXif"),
        V = n("pSt8"),
        z = n("pcg8"),
        $ = n.n(z),
        q = (n("wijF"), n("QY55")),
        Q = n("C4Er");
      function J(e) {
        const { clanInfo: t } = e,
          { curator_link: n, curator_medium_avatar: a } = Object(w.h)(
            "curator_header",
            "application_config"
          );
        return o.a.createElement(
          u.a,
          {
            className: "page_content_ctn",
            "flow-children": "column",
            autoFocus: !0,
          },
          o.a.createElement(
            "div",
            { className: "page_content" },
            o.a.createElement(
              u.a,
              { className: "list_header_area", "flow-children": "row" },
              o.a.createElement(
                "div",
                { className: "curator_avatar_image" },
                o.a.createElement(
                  c.c,
                  { href: n },
                  o.a.createElement("img", {
                    className: "curator_avatar",
                    src: a,
                  })
                )
              ),
              o.a.createElement(
                "div",
                { className: "curator_details" },
                o.a.createElement(q.a, {
                  className: Q.BreadContainer,
                  crumbs: Object(w.h)("breadcrumbs", "application_config"),
                }),
                o.a.createElement(
                  c.c,
                  { className: "pageheader curator_name", href: n },
                  Object(W.g)("#SteamCurator_List_Header_List", t.group_name)
                )
              )
            )
          )
        );
      }
      t.default = function (e) {
        const t = Object(C.a)();
        return o.a.createElement(
          s.a,
          { navID: "StoreCuratorPageRoot", NavigationManager: t },
          o.a.createElement(X, { listid: e.listid })
        );
      };
      function X(e) {
        const t = parseInt(
            Object(w.h)("curator_account_id", "application_config")
          ),
          n = Object(y.e)(t),
          a = Object(y.f)(null == n ? void 0 : n.clanSteamID, e.listid);
        return a
          ? o.a.createElement(
              o.a.Fragment,
              null,
              o.a.createElement(J, { clanInfo: n }),
              o.a.createElement(
                "div",
                { className: "page_content_ctn grayscale" },
                o.a.createElement(
                  "div",
                  { className: "page_content" },
                  o.a.createElement(
                    "div",
                    { className: $.a.CuratorListCtn },
                    o.a.createElement(ee, { listDetails: a }),
                    Object(y.a)(a)
                      ? o.a.createElement(Z, { listDetails: a })
                      : o.a.createElement(K, {
                          listDetails: a,
                          rgListItems: a.apps,
                        }),
                    o.a.createElement(
                      "div",
                      { className: $.a.CuratorMoreCtn },
                      o.a.createElement(
                        "h2",
                        null,
                        Object(W.g)("#SteamCurator_ExploreMoreTitle")
                      ),
                      o.a.createElement(
                        c.c,
                        { href: n.vanity_url },
                        Object(W.p)("#SteamCurator_MoreReviews", n.group_name)
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
          [n, a] = Object(r.useState)(null),
          i = new p.a(t.sale_clan_steamid),
          l = Object(m.a)(i.GetAccountID(), t.sale_clan_event_gid),
          c = Object(r.useMemo)(
            () => (t.apps || []).map((e) => e.recommended_app.appid),
            [t]
          ),
          s = E(l, c);
        return (
          Object(r.useEffect)(() => {
            var e, n;
            if (l)
              if (l.BUsesContentHubForItemSource())
                s &&
                  a(
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
                const e = l.GetSaleFeaturedApps();
                a(
                  null === (n = t.apps) || void 0 === n
                    ? void 0
                    : n.filter((t) => {
                        var n;
                        return e.has(
                          null === (n = t.recommended_app) || void 0 === n
                            ? void 0
                            : n.appid
                        );
                      })
                );
              }
          }, [t, l, s]),
          o.a.createElement(K, { listDetails: t, rgListItems: n })
        );
      }
      function K(e) {
        const { listDetails: t, rgListItems: n } = e,
          [a, i] = Object(r.useState)(0),
          [l, s] = Object(r.useState)(null),
          d = Object(b.a)("CuratorAppListDisplay");
        if (
          (o.a.useEffect(() => {
            n &&
              (i((null == n ? void 0 : n.length) || 0),
              T.a
                .Get()
                .HintLoad()
                .then(() => {
                  const e = n.map((e) => e.recommended_app.appid);
                  j.a
                    .Get()
                    .QueueMultipleAppRequests(e, D.i)
                    .then(() => {
                      d.token.reason ||
                        s(
                          n.filter(
                            (e) =>
                              !Object(D.e)(
                                j.a.Get().GetApp(e.recommended_app.appid)
                              )
                          )
                        );
                    })
                    .catch(() => {
                      d.token.reason || s([]);
                    });
                }));
          }, [n, d]),
          null == l)
        )
          return o.a.createElement(H.a, {
            string: Object(W.g)("#Loading"),
            position: "center",
            size: "medium",
          });
        const m = 1 == t.list_type;
        return o.a.createElement(
          o.a.Fragment,
          null,
          o.a.createElement(
            u.a,
            {
              className: Object(L.a)($.a.CuratorList, m && $.a.CuratorListGrid),
              "flow-children": "grid",
            },
            l.map((e, n) =>
              o.a.createElement(te, {
                key: "rec_" + e.recommended_app.appid,
                item: e,
                listDetails: t,
                bAutoFocus: 0 == n,
              })
            )
          ),
          Boolean(a > l.length) &&
            o.a.createElement(
              "div",
              null,
              o.a.createElement(
                "span",
                null,
                Object(W.o)("#SteamCurator_Hidden", a - l.length),
                " "
              ),
              o.a.createElement(
                c.c,
                { href: w.d.STORE_BASE_URL + "account/preferences/" },
                Object(W.g)("#SteamCurator_Setting")
              )
            )
        );
      }
      function ee(e) {
        const { listDetails: t } = e,
          n = Object(y.d)(t),
          a = Object(w.h)("showlisttitle", "application_config"),
          r = Object(w.h)("titleareaheight", "application_config"),
          i =
            t.list_jsondata.youtube_link &&
            Object(d.b)(t.list_jsondata.youtube_link),
          s = t.list_jsondata.youtube_link && G(t.list_jsondata.youtube_link),
          u = Object(l.g)(w.d.LANGUAGE),
          m = W.a.GetWithFallback(t.localized_flat_title, u),
          p = W.a.GetWithFallback(t.localized_flat_blurb, u),
          v = W.a.GetWithFallback(t.localized_flat_link, u),
          f =
            n &&
            n.GetImageURL(
              Object(U.a)() ? "product_mobile_banner" : "product_banner",
              u
            );
        return o.a.createElement(
          "div",
          { className: $.a.TopReviewInfo },
          Boolean(f) &&
            o.a.createElement(
              c.c,
              { href: n.GetSaleURL() },
              o.a.createElement("img", { className: $.a.SaleBanner, src: f })
            ),
          a && m && o.a.createElement("div", { className: $.a.Title }, m),
          a && p && o.a.createElement("div", { className: $.a.Blurb }, p),
          Boolean(r > 0) && o.a.createElement("div", { style: { height: r } }),
          i &&
            o.a.createElement(
              "div",
              { className: $.a.VideoReviewCtn },
              o.a.createElement(M.b, {
                video: i.strVideoID,
                startSeconds: i.nStartSeconds,
                autoplay: !0,
                autopause: !0,
                showFullscreenBtn: !0,
                controls: !0,
                preloadYoutubeScripts: !0,
                playsInline: !0,
                imageClassnames: $.a.YouTubePreviewImage,
              })
            ),
          Boolean(s) &&
            o.a.createElement(
              "div",
              { className: $.a.VideoReviewCtn },
              o.a.createElement(x, {
                videoid: s,
                posterURL: "",
                imageClassnames: $.a.YouTubePreviewImage,
              })
            ),
          v && o.a.createElement(re, { url: v })
        );
      }
      const te = Object(a.a)((e) => {
        var t, n;
        const { item: a, listDetails: i, bAutoFocus: l } = e,
          c = parseInt(Object(w.h)("curator_account_id", "application_config")),
          s = Object(y.e)(c),
          [m] = Object(S.b)(
            null === (t = null == a ? void 0 : a.recommended_app) ||
              void 0 === t
              ? void 0
              : t.appid,
            { include_assets: !0, include_release: !0 }
          ),
          p = Object(r.useMemo)(
            () => ({
              id: null == m ? void 0 : m.GetID(),
              type: Object(R.a)(
                null == m ? void 0 : m.GetStoreItemType(),
                null == m ? void 0 : m.GetAppType()
              ),
            }),
            [m]
          );
        if (!s || !m) return null;
        const {
            appid: v,
            link_url: f,
            blurb: b,
            time_recommended: _,
            recommendation_state: h,
          } = a.recommended_app,
          g = s.is_creator_home && !s.is_ogg,
          E =
            null === (n = i.list_jsondata.app_data) || void 0 === n
              ? void 0
              : n[v],
          C = f && Object(d.b)(f),
          T = f && G(f),
          j = b != y.c && b,
          B = O.a.Get().BHasDemoAppID(v),
          N = null == E ? void 0 : E.img_url,
          I = `curator_clanid=${s.clanAccountID}&curator_listid=${i.listid}`;
        return o.a.createElement(
          u.a,
          { className: $.a.CuratorReview, autoFocus: l },
          o.a.createElement(
            "div",
            { className: $.a.CapsuleCtn },
            Boolean(C || T)
              ? o.a.createElement(ne, {
                  strVideoID: (null == C ? void 0 : C.strVideoID) || T,
                  nStartSeconds: null == C ? void 0 : C.nStartSeconds,
                  info: p,
                  strImgOverrideUrl: N,
                  bShowDemoButton: B,
                  strExtraParams: I,
                  bTwitchVideo: Boolean(T),
                })
              : o.a.createElement(Y.a, {
                  imageType: "header",
                  bAutoFocus: l,
                  capsule: p,
                  bShowDemoButton: B,
                  strExtraParams: I,
                })
          ),
          o.a.createElement(
            "div",
            { className: $.a.ReviewTextSection },
            o.a.createElement("div", { className: $.a.GameTitle }, m.GetName()),
            o.a.createElement(
              "div",
              { className: $.a.RecommendationTypeAndDate },
              o.a.createElement(ae, { type: h }),
              o.a.createElement(
                "div",
                { className: $.a.ReviewDate },
                g ? m.GetFormattedSteamReleaseDate() : Object(W.q)(_)
              )
            ),
            Boolean(j) &&
              o.a.createElement(
                "div",
                { className: $.a.ReviewBlurb },
                Object(W.g)("#SteamCurator_ReviewTextQuoted", j)
              ),
            Boolean(f) && o.a.createElement(re, { url: f })
          )
        );
      });
      function ne(e) {
        const {
            strVideoID: t,
            nStartSeconds: n,
            info: a,
            strImgOverrideUrl: r,
            bShowDemoButton: i,
            strExtraParams: l,
            bTwitchVideo: c,
          } = e,
          [s] = Object(S.a)(a.id, Object(R.d)(a.type), { include_assets: !0 });
        return o.a.createElement(
          "div",
          { className: $.a.YouTubeCapsule },
          o.a.createElement(
            "div",
            { className: $.a.YouTubeCtn },
            c
              ? o.a.createElement(x, {
                  videoid: t,
                  posterURL: null == s ? void 0 : s.GetAssets().GetHeaderURL(),
                  imageClassnames: $.a.YouTubePreviewImage,
                  autoplay: !0,
                })
              : o.a.createElement(M.b, {
                  video: t,
                  startSeconds: n,
                  autoplay: !0,
                  autopause: !0,
                  showFullscreenBtn: !0,
                  controls: !0,
                  preloadYoutubeScripts: !0,
                  playsInline: !0,
                  imageClassnames: $.a.YouTubePreviewImage,
                  altImg: r,
                })
          ),
          o.a.createElement(
            "div",
            { className: $.a.YouTubeCapsuleBottomBar },
            o.a.createElement(
              "div",
              { className: $.a.GameImageCtn },
              o.a.createElement(
                k.d,
                {
                  item: a,
                  bShowDemoButton: i,
                  nDelayShowMs: 300,
                  strExtraParams: l,
                  hoverProps: {
                    direction: "overlay-center",
                    style: { minWidth: "300px" },
                  },
                },
                o.a.createElement("img", {
                  className: $.a.GameImage,
                  src:
                    null == s ? void 0 : s.GetAssets().GetLibraryCapsuleURL(),
                })
              )
            ),
            o.a.createElement(A.a, { info: a, strClassName: $.a.FullWidth })
          )
        );
      }
      function ae(e) {
        switch (e.type) {
          case 0:
            return o.a.createElement(
              "div",
              { className: $.a.Recommended },
              Object(W.g)("#SteamCurator_Recommended")
            );
          case 1:
            return o.a.createElement(
              "div",
              { className: $.a.NotRecommended },
              Object(W.g)("#SteamCurator_NotRecommended")
            );
          case 2:
            return o.a.createElement(
              "div",
              { className: $.a.Informational },
              Object(W.g)("#SteamCurator_Informational")
            );
          default:
            return null;
        }
      }
      function re(e) {
        let t = Object(v.d)(e.url);
        Object(i.b)(t) &&
          (t =
            (w.d.IN_CLIENT ? "steam://openurl_external/" : "") +
            w.d.COMMUNITY_BASE_URL +
            "linkfilter/?url=" +
            t);
        const n = Object(V.f)(e.url),
          a = Object(d.a)(e.url);
        return o.a.createElement(
          "div",
          { className: $.a.FullReviewLink },
          o.a.createElement(
            c.c,
            {
              className: $.a.FullReviewAnchor,
              href: t,
              rel: "noopener nofollow",
              preferredFocus: !1,
              autoFocus: !1,
            },
            Object(W.g)(
              a
                ? "#SteamCurator_WatchFullReview"
                : "#SteamCurator_ReadFullReview"
            )
          ),
          o.a.createElement(
            "div",
            { className: $.a.FullReviewDomain },
            Object(W.g)("#SteamCurator_ReviewLinkHostnameBracketed", n)
          )
        );
      }
    },
    "1TsT": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return s;
      });
      var a = !(
        "undefined" == typeof window ||
        !window.document ||
        !window.document.createElement
      );
      var r = void 0;
      function o() {
        return (
          void 0 === r &&
            (r = (function () {
              if (!a) return !1;
              if (
                !window.addEventListener ||
                !window.removeEventListener ||
                !Object.defineProperty
              )
                return !1;
              var e = !1;
              try {
                var t = Object.defineProperty({}, "passive", {
                    get: function () {
                      e = !0;
                    },
                  }),
                  n = function () {};
                window.addEventListener("testPassiveEventSupport", n, t),
                  window.removeEventListener("testPassiveEventSupport", n, t);
              } catch (e) {}
              return e;
            })()),
          r
        );
      }
      function i(e) {
        e.handlers === e.nextHandlers && (e.nextHandlers = e.handlers.slice());
      }
      function l(e) {
        (this.target = e), (this.events = {});
      }
      (l.prototype.getEventHandlers = function (e, t) {
        var n,
          a =
            String(e) +
            " " +
            String(
              (n = t)
                ? !0 === n
                  ? 100
                  : (n.capture << 0) + (n.passive << 1) + (n.once << 2)
                : 0
            );
        return (
          this.events[a] ||
            ((this.events[a] = { handlers: [], handleEvent: void 0 }),
            (this.events[a].nextHandlers = this.events[a].handlers)),
          this.events[a]
        );
      }),
        (l.prototype.handleEvent = function (e, t, n) {
          var a = this.getEventHandlers(e, t);
          (a.handlers = a.nextHandlers),
            a.handlers.forEach(function (e) {
              e && e(n);
            });
        }),
        (l.prototype.add = function (e, t, n) {
          var a = this,
            r = this.getEventHandlers(e, n);
          i(r),
            0 === r.nextHandlers.length &&
              ((r.handleEvent = this.handleEvent.bind(this, e, n)),
              this.target.addEventListener(e, r.handleEvent, n)),
            r.nextHandlers.push(t);
          var o = !0;
          return function () {
            if (o) {
              (o = !1), i(r);
              var l = r.nextHandlers.indexOf(t);
              r.nextHandlers.splice(l, 1),
                0 === r.nextHandlers.length &&
                  (a.target &&
                    a.target.removeEventListener(e, r.handleEvent, n),
                  (r.handleEvent = void 0));
            }
          };
        });
      var c = "__consolidated_events_handlers__";
      function s(e, t, n, a) {
        e[c] || (e[c] = new l(e));
        var r = (function (e) {
          if (e) return o() ? e : !!e.capture;
        })(a);
        return e[c].add(t, n, r);
      }
    },
    C4Er: function (e, t, n) {
      e.exports = { BreadContainer: "curatorminiheader_BreadContainer_GkVFI" };
    },
    QY55: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return s;
      });
      var a = n("q1tI"),
        r = n("TGWf"),
        o = n("GbHM"),
        i = n("55Ip"),
        l = n("fsrB"),
        c = n("Lsvi");
      function s(e) {
        const { crumbs: t, className: n } = e;
        return t && 0 != t.length
          ? a.createElement(
              "div",
              { className: Object(o.a)(r.BreadContainer, n) },
              a.createElement(
                c.a,
                { className: "blockbg", "flow-children": "row" },
                t.map((e) => {
                  const t = new Array();
                  return (
                    e.url.startsWith("http")
                      ? t.push(
                          a.createElement(
                            l.c,
                            { key: "anchor_" + e.name, href: e.url },
                            e.name
                          )
                        )
                      : t.push(
                          a.createElement(
                            i.b,
                            { key: "link_" + e.name, to: e.url },
                            e.name
                          )
                        ),
                    t.push(
                      a.createElement("span", { key: e.name + "span" }, " > ")
                    ),
                    t
                  );
                })
              ),
              a.createElement("div", { style: { clear: "left" } })
            )
          : null;
      }
    },
    TGWf: function (e, t, n) {
      e.exports = { BreadContainer: "breadcrumbs_BreadContainer_1QPim" };
    },
    emic: function (e, t, n) {
      e.exports = {
        VideoReviewCtn: "twitchembed_VideoReviewCtn_nNaTz",
        YouTubePreviewImage: "twitchembed_YouTubePreviewImage__mxmF",
        TwitchPlayer: "twitchembed_TwitchPlayer_Ny5PH",
      };
    },
    "lo3/": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return u;
      });
      var a = n("mrSG"),
        r = n("q1tI"),
        o = n.n(r),
        i = n("fsrB"),
        l = n("ez+p"),
        c = n("hCpY"),
        s = n("/Q1a");
      function u(e) {
        const { children: t, navTreeRef: n } = e,
          r = Object(a.c)(e, ["children", "navTreeRef"]),
          u = o.a.useRef(),
          d = Object(c.g)(u, n);
        if (s.d.IN_GAMEPADUI) {
          const e = window.__nav_tree_root;
          return o.a.createElement(
            i.b,
            Object.assign({}, r, {
              navTreeRef: d,
              secondary: !0,
              parentEmbeddedNavTree: e,
            }),
            o.a.createElement(l.a, null, t)
          );
        }
        return o.a.createElement(o.a.Fragment, null, t);
      }
    },
    pcg8: function (e, t, n) {
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
    uuth: function (e, t, n) {
      "use strict";
      (function (e) {
        n.d(t, "a", function () {
          return y;
        });
        var a = n("1TsT"),
          r = (n("17x9"), n("q1tI")),
          o = n.n(r),
          i = n("TOwV");
        function l(e, t) {
          for (var n = 0; n < t.length; n++) {
            var a = t[n];
            (a.enumerable = a.enumerable || !1),
              (a.configurable = !0),
              "value" in a && (a.writable = !0),
              Object.defineProperty(e, a.key, a);
          }
        }
        function c(e) {
          return (c = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        function s(e, t) {
          return (s =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        function u(e, t) {
          return !t || ("object" != typeof t && "function" != typeof t)
            ? (function (e) {
                if (void 0 === e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return e;
              })(e)
            : t;
        }
        function d(e) {
          var t = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          })();
          return function () {
            var n,
              a = c(e);
            if (t) {
              var r = c(this).constructor;
              n = Reflect.construct(a, arguments, r);
            } else n = a.apply(this, arguments);
            return u(this, n);
          };
        }
        function m(e, t) {
          var n,
            a =
              ((n = e),
              !isNaN(parseFloat(n)) && isFinite(n)
                ? parseFloat(n)
                : "px" === n.slice(-2)
                ? parseFloat(n.slice(0, -2))
                : void 0);
          if ("number" == typeof a) return a;
          var r = (function (e) {
            if ("%" === e.slice(-1)) return parseFloat(e.slice(0, -1)) / 100;
          })(e);
          return "number" == typeof r ? r * t : void 0;
        }
        var p = "above",
          v = "inside",
          f = "below",
          b = "invisible";
        function _(e) {
          return "string" == typeof e.type;
        }
        var h;
        var w = [];
        function g(e) {
          w.push(e),
            h ||
              (h = setTimeout(function () {
                var e;
                for (h = null; (e = w.shift()); ) e();
              }, 0));
          var t = !0;
          return function () {
            if (t) {
              t = !1;
              var n = w.indexOf(e);
              -1 !== n &&
                (w.splice(n, 1),
                !w.length && h && (clearTimeout(h), (h = null)));
            }
          };
        }
        var E = {
            debug: !1,
            scrollableAncestor: void 0,
            children: void 0,
            topOffset: "0px",
            bottomOffset: "0px",
            horizontal: !1,
            onEnter: function () {},
            onLeave: function () {},
            onPositionChange: function () {},
            fireOnRapidScroll: !0,
          },
          y = (function (t) {
            !(function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t && s(e, t);
            })(h, t);
            var n,
              r,
              c,
              u = d(h);
            function h(e) {
              var t;
              return (
                (function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, h),
                ((t = u.call(this, e)).refElement = function (e) {
                  t._ref = e;
                }),
                t
              );
            }
            return (
              (n = h),
              (r = [
                {
                  key: "componentDidMount",
                  value: function () {
                    var e = this;
                    h.getWindow() &&
                      (this.cancelOnNextTick = g(function () {
                        e.cancelOnNextTick = null;
                        var t = e.props,
                          n = t.children;
                        t.debug,
                          (function (e, t) {
                            if (e && !_(e) && !t)
                              throw new Error(
                                "<Waypoint> needs a DOM element to compute boundaries. The child you passed is neither a DOM element (e.g. <div>) nor does it use the innerRef prop.\n\nSee https://goo.gl/LrBNgw for more info."
                              );
                          })(n, e._ref),
                          (e._handleScroll = e._handleScroll.bind(e)),
                          (e.scrollableAncestor = e._findScrollableAncestor()),
                          (e.scrollEventListenerUnsubscribe = Object(a.a)(
                            e.scrollableAncestor,
                            "scroll",
                            e._handleScroll,
                            { passive: !0 }
                          )),
                          (e.resizeEventListenerUnsubscribe = Object(a.a)(
                            window,
                            "resize",
                            e._handleScroll,
                            { passive: !0 }
                          )),
                          e._handleScroll(null);
                      }));
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function () {
                    var e = this;
                    h.getWindow() &&
                      this.scrollableAncestor &&
                      (this.cancelOnNextTick ||
                        (this.cancelOnNextTick = g(function () {
                          (e.cancelOnNextTick = null), e._handleScroll(null);
                        })));
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    h.getWindow() &&
                      (this.scrollEventListenerUnsubscribe &&
                        this.scrollEventListenerUnsubscribe(),
                      this.resizeEventListenerUnsubscribe &&
                        this.resizeEventListenerUnsubscribe(),
                      this.cancelOnNextTick && this.cancelOnNextTick());
                  },
                },
                {
                  key: "_findScrollableAncestor",
                  value: function () {
                    var t = this.props,
                      n = t.horizontal,
                      a = t.scrollableAncestor;
                    if (a)
                      return (function (t) {
                        return "window" === t ? e.window : t;
                      })(a);
                    for (var r = this._ref; r.parentNode; ) {
                      if ((r = r.parentNode) === document.body) return window;
                      var o = window.getComputedStyle(r),
                        i =
                          (n
                            ? o.getPropertyValue("overflow-x")
                            : o.getPropertyValue("overflow-y")) ||
                          o.getPropertyValue("overflow");
                      if ("auto" === i || "scroll" === i || "overlay" === i)
                        return r;
                    }
                    return window;
                  },
                },
                {
                  key: "_handleScroll",
                  value: function (e) {
                    if (this._ref) {
                      var t = this._getBounds(),
                        n = (function (e) {
                          return e.viewportBottom - e.viewportTop == 0
                            ? b
                            : (e.viewportTop <= e.waypointTop &&
                                e.waypointTop <= e.viewportBottom) ||
                              (e.viewportTop <= e.waypointBottom &&
                                e.waypointBottom <= e.viewportBottom) ||
                              (e.waypointTop <= e.viewportTop &&
                                e.viewportBottom <= e.waypointBottom)
                            ? v
                            : e.viewportBottom < e.waypointTop
                            ? f
                            : e.waypointTop < e.viewportTop
                            ? p
                            : b;
                        })(t),
                        a = this._previousPosition,
                        r = this.props,
                        o = (r.debug, r.onPositionChange),
                        i = r.onEnter,
                        l = r.onLeave,
                        c = r.fireOnRapidScroll;
                      if (((this._previousPosition = n), a !== n)) {
                        var s = {
                          currentPosition: n,
                          previousPosition: a,
                          event: e,
                          waypointTop: t.waypointTop,
                          waypointBottom: t.waypointBottom,
                          viewportTop: t.viewportTop,
                          viewportBottom: t.viewportBottom,
                        };
                        o.call(this, s),
                          n === v
                            ? i.call(this, s)
                            : a === v && l.call(this, s),
                          c &&
                            ((a === f && n === p) || (a === p && n === f)) &&
                            (i.call(this, {
                              currentPosition: v,
                              previousPosition: a,
                              event: e,
                              waypointTop: t.waypointTop,
                              waypointBottom: t.waypointBottom,
                              viewportTop: t.viewportTop,
                              viewportBottom: t.viewportBottom,
                            }),
                            l.call(this, {
                              currentPosition: n,
                              previousPosition: v,
                              event: e,
                              waypointTop: t.waypointTop,
                              waypointBottom: t.waypointBottom,
                              viewportTop: t.viewportTop,
                              viewportBottom: t.viewportBottom,
                            }));
                      }
                    }
                  },
                },
                {
                  key: "_getBounds",
                  value: function () {
                    var e,
                      t,
                      n = this.props,
                      a = n.horizontal,
                      r = (n.debug, this._ref.getBoundingClientRect()),
                      o = r.left,
                      i = r.top,
                      l = r.right,
                      c = r.bottom,
                      s = a ? o : i,
                      u = a ? l : c;
                    this.scrollableAncestor === window
                      ? ((e = a ? window.innerWidth : window.innerHeight),
                        (t = 0))
                      : ((e = a
                          ? this.scrollableAncestor.offsetWidth
                          : this.scrollableAncestor.offsetHeight),
                        (t = a
                          ? this.scrollableAncestor.getBoundingClientRect().left
                          : this.scrollableAncestor.getBoundingClientRect()
                              .top));
                    var d = this.props,
                      p = d.bottomOffset;
                    return {
                      waypointTop: s,
                      waypointBottom: u,
                      viewportTop: t + m(d.topOffset, e),
                      viewportBottom: t + e - m(p, e),
                    };
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this,
                      t = this.props.children;
                    return t
                      ? _(t) || Object(i.isForwardRef)(t)
                        ? o.a.cloneElement(t, {
                            ref: function (n) {
                              e.refElement(n),
                                t.ref &&
                                  ("function" == typeof t.ref
                                    ? t.ref(n)
                                    : (t.ref.current = n));
                            },
                          })
                        : o.a.cloneElement(t, { innerRef: this.refElement })
                      : o.a.createElement("span", {
                          ref: this.refElement,
                          style: { fontSize: 0 },
                        });
                  },
                },
              ]) && l(n.prototype, r),
              c && l(n, c),
              h
            );
          })(o.a.PureComponent);
        (y.above = p),
          (y.below = f),
          (y.inside = v),
          (y.invisible = b),
          (y.getWindow = function () {
            if ("undefined" != typeof window) return window;
          }),
          (y.defaultProps = E),
          (y.displayName = "Waypoint");
      }.call(this, n("yLpj")));
    },
  },
]);
