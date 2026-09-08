/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [20716],
  {
    2108: (e) => {
      e.exports = { BreadContainer: "YaL4BAoqywnKnb5jbU_il" };
    },
    33380: (e) => {
      e.exports = {
        VideoReviewCtn: "V6zz2NPPxfnGjAchCe56r",
        YouTubePreviewImage: "_3joL1ZVcmC-6lCOLfjuIq7",
        TwitchPlayer: "_1Q0Ym9jG7UCFeD3c9LbOSy",
      };
    },
    70758: (e) => {
      e.exports = {
        YoutubePreviewImage: "_3bVwKmAuh70AH8XVDnyf5z",
        YoutubePlayer: "_3oXEPQSJY3yN1IVhfxeSy0",
      };
    },
    62014: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        CuratorListCtn: "_2gWFdH7drZgtMXI_JjbaEe",
        CuratorMoreCtn: "_16t3PcvDZGiwAgEfjIWfND",
        TopReviewInfo: "_3SZBzK03VjBtPI7wx3Z1Pt",
        SaleBanner: "_1wbf-cPcI2i7efNOekBbhu",
        Title: "_1MhFdjaeyR9X7HgdfjSXqG",
        Blurb: "rrcHStOnbRfOfaohgKQ55",
        VideoReviewCtn: "RojwrkrnYMOZ6Ab8k-v1r",
        YouTubePreviewImage: "eObSf_yyzMWHlRgVTfVWa",
        CuratorList: "_1VI6Grz2uioikkf0a6Tw0k",
        CuratorListGrid: "qJM6j2qrVRIXCMuuxmhQA",
        CuratorReview: "_31hoQDSYDcWbwweAx-nymb",
        CapsuleCtn: "MY9Lke1NKqCw4L796pl4u",
        YouTubeCapsule: "_1siEspisMPcFe74Nhb8Y1h",
        YouTubeCtn: "_1uz1Wrv0OB4A4PzZFy-7ze",
        YouTubeCapsuleBottomBar: "_1d9MpJzvsoRCYuymkRgyB7",
        GameImageCtn: "_220F7CEs1Z6JO8qX1VpEin",
        GameImage: "_7gTF4ahFWgDDx5lj6B81t",
        FullWidth: "_3ditFur3nylrloT3tIcfyH",
        ReviewTextSection: "_1597WAIOnVRCDEZFRnmiOg",
        GameTitle: "nl2T_2iAiLU-LBJ0Vlt1g",
        RecommendationTypeAndDate: "_2lz6uYceCiIZbZ9gceZI-p",
        Recommended: "_3v9QioBsRmE5yW7CqZmejk",
        NotRecommended: "_3iOGokAKIIBxl8O2K4ReUO",
        Informational: "_261FhJXj3ppl0_SvJBDLeL",
        ReviewDate: "HCiYl0KEiRyfIc-3K7r51",
        ReviewBlurb: "_1y_bxMLn9yOlKneJzFSPkc",
        FullReviewLink: "_3_8G-9J9Ck495Bbx1AtzXb",
        FullReviewAnchor: "_3pWCNXNZaWp_KqFU6n38sy",
        FullReviewDomain: "_2R37NZqjmxkImiPnoElHtm",
        BackgroundAnimation: "_3mJ9erLLVEMyDp_3pY3KTp",
        "ItemFocusAnim-darkerGrey-nocolor": "_1ulNFI0sHkRk8TBa3fDFoS",
        "ItemFocusAnim-darkerGrey": "OAwSuqlAeZPXQNLFz_zLx",
        "ItemFocusAnim-darkGreySettings": "_1vwA5-HGmaz4WDUPfeIMXw",
        "ItemFocusAnim-darkGrey": "_16cDR36DBbspxGZ8MxxB4Z",
        "ItemFocusAnim-grey": "oS4oWYqe5S8U6CukOBsBi",
        "ItemFocusAnim-translucent-white-10": "_1jj4yrDY55YFShmQZ8VANk",
        "ItemFocusAnim-translucent-white-20": "TqUMJDChgbfs4XXKTa2UZ",
        "ItemFocusAnimBorder-darkGrey": "_35LQt0hozt0Fu6IHh1i9gW",
        "ItemFocusAnim-green": "_2cU5wBvJhWpmq45gjPgBx_",
        focusAnimation: "XfHabgjmzuwMo5SRyzbkv",
        hoverAnimation: "_2qskIW3iRVBxrrqQ3Sel07",
      };
    },
    22584: (e) => {
      e.exports = {
        BreadContainer: "GkVFIKIAijTGzfSc4BEQl",
        HeaderContent: "_2nPcyDvQVywsCXSLbgnUQp",
      };
    },
    17083: (e, t, n) => {
      "use strict";
      n.d(t, { N_: () => h, k2: () => g });
      var a = n(92757),
        r = n(42891),
        i = n(90626),
        s = n(29248),
        l = n(58584),
        o = n(81115),
        c = n(68841);
      i.Component;
      i.Component;
      var u = function (e, t) {
          return "function" == typeof e ? e(t) : e;
        },
        d = function (e, t) {
          return "string" == typeof e ? (0, s.yJ)(e, null, null, t) : e;
        },
        m = function (e) {
          return e;
        },
        _ = i.forwardRef;
      void 0 === _ && (_ = m);
      var p = _(function (e, t) {
        var n = e.innerRef,
          a = e.navigate,
          r = e.onClick,
          s = (0, o.A)(e, ["innerRef", "navigate", "onClick"]),
          c = s.target,
          u = (0, l.A)({}, s, {
            onClick: function (e) {
              try {
                r && r(e);
              } catch (t) {
                throw (e.preventDefault(), t);
              }
              e.defaultPrevented ||
                0 !== e.button ||
                (c && "_self" !== c) ||
                (function (e) {
                  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
                })(e) ||
                (e.preventDefault(), a());
            },
          });
        return (u.ref = (m !== _ && t) || n), i.createElement("a", u);
      });
      var h = _(function (e, t) {
          var n = e.component,
            r = void 0 === n ? p : n,
            h = e.replace,
            f = e.to,
            v = e.innerRef,
            g = (0, o.A)(e, ["component", "replace", "to", "innerRef"]);
          return i.createElement(a.XZ.Consumer, null, function (e) {
            e || (0, c.A)(!1);
            var n = e.history,
              a = d(u(f, e.location), e.location),
              o = a ? n.createHref(a) : "",
              p = (0, l.A)({}, g, {
                href: o,
                navigate: function () {
                  var t = u(f, e.location),
                    a = (0, s.AO)(e.location) === (0, s.AO)(d(t));
                  (h || a ? n.replace : n.push)(t);
                },
              });
            return (
              m !== _ ? (p.ref = t || v) : (p.innerRef = v),
              i.createElement(r, p)
            );
          });
        }),
        f = function (e) {
          return e;
        },
        v = i.forwardRef;
      void 0 === v && (v = f);
      var g = v(function (e, t) {
        var n = e["aria-current"],
          r = void 0 === n ? "page" : n,
          s = e.activeClassName,
          m = void 0 === s ? "active" : s,
          _ = e.activeStyle,
          p = e.className,
          g = e.exact,
          x = e.isActive,
          b = e.location,
          I = e.sensitive,
          w = e.strict,
          j = e.style,
          C = e.to,
          y = e.innerRef,
          S = (0, o.A)(e, [
            "aria-current",
            "activeClassName",
            "activeStyle",
            "className",
            "exact",
            "isActive",
            "location",
            "sensitive",
            "strict",
            "style",
            "to",
            "innerRef",
          ]);
        return i.createElement(a.XZ.Consumer, null, function (e) {
          e || (0, c.A)(!1);
          var n = b || e.location,
            s = d(u(C, n), n),
            o = s.pathname,
            A = o && o.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
            N = A
              ? (0, a.B6)(n.pathname, {
                  path: A,
                  exact: g,
                  sensitive: I,
                  strict: w,
                })
              : null,
            R = !!(x ? x(N, n) : N),
            k = "function" == typeof p ? p(R) : p,
            B = "function" == typeof j ? j(R) : j;
          R &&
            ((k = (function () {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              return t
                .filter(function (e) {
                  return e;
                })
                .join(" ");
            })(k, m)),
            (B = (0, l.A)({}, B, _)));
          var T = (0, l.A)(
            { "aria-current": (R && r) || null, className: k, style: B, to: s },
            S,
          );
          return (
            f !== v ? (T.ref = t || y) : (T.innerRef = y), i.createElement(h, T)
          );
        });
      });
    },
    81886: (e, t, n) => {
      "use strict";
      n.d(t, { fp: () => r, vm: () => i });
      var a = n(95578);
      function r(e) {
        return (
          !!e &&
          ("game" === e ||
            "dlc" === e ||
            "software" === e ||
            "music" === e ||
            "application" === e ||
            "demo" === e ||
            "hardware" === e ||
            "mod" === e ||
            "video" == e ||
            "beta" === e ||
            "advertising" === e)
        );
      }
      function i(e) {
        return (
          null != e &&
          (e == a.uE.HT ||
            e == a.uE._i ||
            e == a.uE.Sv ||
            e == a.uE.Ov ||
            e == a.uE.ue ||
            e == a.uE.Hk ||
            e == a.uE.RA ||
            e == a.uE.Wz ||
            e == a.uE.Vi ||
            e == a.uE.pl)
        );
      }
    },
    85693: (e, t, n) => {
      "use strict";
      n.d(t, { r: () => c });
      var a = n(7850),
        r = n(45699),
        i = n(76217),
        s = n(17083),
        l = n(52038),
        o = n(2108);
      function c(e) {
        const { crumbs: t, className: n, bHideLastArrow: c } = e;
        return t && 0 != t.length
          ? (0, a.jsxs)("div", {
              className: (0, l.A)(o.BreadContainer, n),
              children: [
                (0, a.jsx)(i.Z, {
                  className: "blockbg",
                  "flow-children": "row",
                  children: t.map((e, n) => {
                    const i = new Array();
                    return (
                      e.url.startsWith("http")
                        ? i.push(
                            (0, a.jsx)(
                              r.Ii,
                              { href: e.url, children: e.name },
                              "anchor_" + e.name,
                            ),
                          )
                        : i.push(
                            (0, a.jsx)(
                              s.N_,
                              { to: e.url, children: e.name },
                              "link_" + e.name,
                            ),
                          ),
                      (!c || n < t.length - 1) &&
                        i.push(
                          (0, a.jsx)(
                            "span",
                            { children: " > " },
                            e.name + "span",
                          ),
                        ),
                      i
                    );
                  }),
                }),
                (0, a.jsx)("div", { style: { clear: "left" } }),
              ],
            })
          : null;
      }
    },
    55263: (e, t, n) => {
      "use strict";
      n.d(t, {
        G6: () => _,
        Gg: () => f,
        Ow: () => h,
        Sq: () => u,
        YM: () => b,
        eR: () => d,
        ik: () => m,
        mZ: () => v,
        t7: () => p,
        zX: () => x,
      });
      var a = n(41735),
        r = n.n(a),
        i = n(90626),
        s = n(37085),
        l = n(95578),
        o = n(84933),
        c = n(16021);
      const u = 1,
        d = 2,
        m = 3;
      function _(e, t, n, a) {
        const l = (0, i.useRef)(void 0),
          _ = (0, i.useRef)(void 0),
          p = (0, o.CH)();
        l.current = e;
        const [h, f] = (0, i.useState)(void 0),
          {
            include_assets: v,
            include_release: g,
            include_platforms: x,
            include_all_purchase_options: b,
            include_screenshots: I,
            include_trailers: w,
            include_ratings: j,
            include_tag_count: C,
            include_reviews: y,
            include_basic_info: S,
            include_supported_languages: A,
            include_full_description: N,
            include_included_items: R,
            include_assets_without_overrides: k,
            apply_user_filters: B,
            include_links: T,
            include_extra_details: G,
          } = n;
        if (
          ((0, i.useEffect)(() => {
            const n = {
              include_assets: v,
              include_release: g,
              include_platforms: x,
              include_all_purchase_options: b,
              include_screenshots: I,
              include_trailers: w,
              include_ratings: j,
              include_tag_count: C,
              include_reviews: y,
              include_basic_info: S,
              include_supported_languages: A,
              include_full_description: N,
              include_included_items: R,
              include_assets_without_overrides: k,
              apply_user_filters: B,
              include_links: T,
              include_extra_details: G,
            };
            let i = null;
            return (
              !e ||
                e < 0 ||
                c.A.Get().BHasStoreItem(e, t, n) ||
                (void 0 !== h && a && a == _.current) ||
                (a !== _.current && (f(void 0), (_.current = a)),
                (i = r().CancelToken.source()),
                c.A.Get()
                  .QueueStoreItemRequest(e, t, n)
                  .then((t) => {
                    i?.token.reason || l.current !== e || f(t == s.R), p();
                  })),
              () => i?.cancel("useStoreItemCache: unmounting")
            );
          }, [
            e,
            t,
            a,
            h,
            v,
            g,
            x,
            b,
            I,
            w,
            j,
            C,
            y,
            S,
            A,
            N,
            R,
            k,
            B,
            T,
            G,
            p,
          ]),
          !e)
        )
          return [null, d];
        if (!1 === h) return [void 0, d];
        if (c.A.Get().BIsStoreItemMissing(e, t)) return [void 0, d];
        if (!c.A.Get().BHasStoreItem(e, t, n)) return [void 0, u];
        const F = c.A.Get().GetStoreItemWithLegacyVisibilityCheck(e, t);
        return F ? [F, m] : [null, d];
      }
      function p(e, t, n) {
        return _(e, l.c6.qI, t, n);
      }
      function h(e, t, n) {
        return _(e, l.c6.xO, t, n);
      }
      function f(e, t, n) {
        return _(e, l.c6.RD, t, n);
      }
      function v(e, t, n) {
        const [a, r] = _(e, t, n);
        let i;
        a?.GetStoreItemType() != l.c6.RD ||
          a.GetAssets()?.GetHeaderURL() ||
          1 != a?.GetIncludedAppIDs().length ||
          (i = a.GetIncludedAppIDs()[0]);
        const [s, o] = p(i, n);
        return i && s?.BIsVisible() ? [s, o] : [a, r];
      }
      function g(e, t, n, a) {
        const s = (0, o.CH)(),
          {
            include_assets: l,
            include_release: _,
            include_platforms: p,
            include_all_purchase_options: h,
            include_screenshots: f,
            include_trailers: v,
            include_ratings: g,
            include_tag_count: x,
            include_reviews: b,
            include_basic_info: I,
            include_supported_languages: w,
            include_full_description: j,
            include_included_items: C,
            include_assets_without_overrides: y,
            apply_user_filters: S,
            include_links: A,
            include_extra_details: N,
          } = n;
        if (
          ((0, i.useEffect)(() => {
            if (!e || 0 == e.length) return;
            const n = {
                include_assets: l,
                include_release: _,
                include_platforms: p,
                include_all_purchase_options: h,
                include_screenshots: f,
                include_trailers: v,
                include_ratings: g,
                include_tag_count: x,
                include_reviews: b,
                include_basic_info: I,
                include_supported_languages: w,
                include_full_description: j,
                include_included_items: C,
                include_assets_without_overrides: y,
                apply_user_filters: S,
                include_links: A,
                include_extra_details: N,
              },
              a = e.filter(
                (e) =>
                  !(
                    c.A.Get().BHasStoreItem(e, t, n) ||
                    c.A.Get().BIsStoreItemMissing(e, t)
                  ),
              );
            if (0 == a.length) return;
            const i = r().CancelToken.source(),
              o = a.map((e) => c.A.Get().QueueStoreItemRequest(e, t, n));
            return (
              Promise.all(o).then(() => {
                i.token.reason || s();
              }),
              () => i.cancel("useStoreItemCacheMultiplePackages: unmounting")
            );
          }, [e, t, a, s, l, _, p, h, f, v, g, x, b, I, w, j, C, y, S, A, N]),
          !e)
        )
          return d;
        if (
          !e.every(
            (e) =>
              c.A.Get().BHasStoreItem(e, t, n) ||
              c.A.Get().BIsStoreItemMissing(e, t),
          )
        )
          return u;
        return e.every((e) =>
          c.A.Get().GetStoreItemWithLegacyVisibilityCheck(e, t),
        )
          ? m
          : d;
      }
      function x(e, t, n) {
        return g(e, l.c6.qI, t, n);
      }
      function b() {
        i.useEffect(
          () => (
            c.A.Get().SetReturnUnavailableItems(!0),
            () => c.A.Get().SetReturnUnavailableItems(!1)
          ),
          [],
        );
      }
    },
    94743: (e, t, n) => {
      "use strict";
      n.d(t, { l: () => p, r: () => _ });
      var a = n(7850),
        r = n(90626),
        i = n(26296),
        s = n(12155),
        l = n(48211),
        o = n(52038),
        c = n(61859),
        u = n(70758),
        d = n.n(u),
        m = n(98735);
      const _ = (e) => {
          const t = ["maxresdefault", "mqdefault", "default"],
            [n, s] = r.useState(0);
          r.useEffect(() => s(0), [e.video]);
          const l = r.useRef(void 0);
          if (e.altImgWithFallback && e.altImgWithFallback.length > 0)
            return (0, a.jsx)(i.o, {
              className: e.className,
              srcs: e.altImgWithFallback,
            });
          if (e.altImg)
            return (0, a.jsx)("img", { src: e.altImg, className: e.className });
          {
            const r =
                "https://img.youtube.com/vi/" + e.video + "/" + t[n] + ".jpg",
              i = () => {
                n + 1 < t.length && s(n + 1);
              },
              c = () => {
                l.current && l.current.naturalHeight < 91 && i();
              };
            return (0, a.jsx)("img", {
              ref: l,
              onLoad: c,
              onError: i,
              src: r,
              className: (0, o.A)(d().YoutubePreviewImage, e.className),
            });
          }
        },
        p = (e) => {
          const [t, n] = r.useState(!1);
          (0, l.VC)(!!e.preloadYoutubeScripts);
          const i = (0, m.Rp)("youtube");
          if (t && i)
            return (0, a.jsx)(l.N1, {
              ...e,
              classnames: (0, o.A)(d().YoutubePlayer, e.classnames),
            });
          {
            const t = (t) => {
              e.onPlayerActivated && e.onPlayerActivated(),
                n(!0),
                t.stopPropagation(),
                t.preventDefault();
            };
            return (0, a.jsxs)("div", {
              className: (0, o.A)(
                "YoutubePreviewContainer",
                d().YoutubePreviewImage,
                e.imageClassnames,
              ),
              onClick: i ? t : void 0,
              children: [
                (0, a.jsx)(_, {
                  className: "YoutubePreviewImage",
                  altImgWithFallback: e.altImgWithFallback,
                  altImg: e.altImg,
                  video: e.video,
                }),
                i &&
                  (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)("div", {
                        className: "YoutubePreviewPlay",
                        children: (0, a.jsx)(s.IOc, {}),
                      }),
                      (0, a.jsx)("div", {
                        className: "VideoHintText",
                        children: (0, c.we)("#EventCalendar_WatchYouTubeVideo"),
                      }),
                    ],
                  }),
              ],
            });
          }
        };
    },
    49271: (e, t, n) => {
      "use strict";
      n.r(t),
        n.d(t, { CuratorReviewListContainer: () => ne, default: () => te });
      var a = n(7850),
        r = n(75844),
        i = n(90626),
        s = n(15759),
        l = n(22837),
        o = n(45699),
        c = n(76217),
        u = n(70995),
        d = n(76682),
        m = n(29008),
        _ = n(75152),
        p = n(38390),
        h = n(17720),
        f = n(55963),
        v = n(4434),
        g = n(41735),
        x = n.n(g),
        b = n(78327),
        I = n(68797),
        w = n(37085);
      function j(e, t) {
        const [n, a] = (0, i.useState)(
            e?.BUsesContentHubForItemSource() ? new Set() : null,
          ),
          r = (0, v.m)("useFilteredAppViaContentHub");
        return (
          (0, i.useEffect)(() => {
            e?.BUsesContentHubForItemSource() &&
              !n &&
              (async function (e, t) {
                const n =
                    b.TS.STORE_BASE_URL +
                    "contenthub/ajaxfilterappsbycontenthub",
                  a = {
                    hubtype: e.GetContentHubType(),
                    category: e.GetContentHubCategory(),
                    tagid: e.GetContentHubTag(),
                    prune_list_optin_name: e.jsondata.prune_list_optin_name,
                    optin_tagid: e.jsondata.optin_tagid,
                    optin_prune_tagid: e.jsondata.optin_prune_tagid,
                    optin_only: e.jsondata.optin_only,
                    applist: t.sort().join(","),
                  };
                let r = null;
                const i = new Set();
                try {
                  const e = await x().get(n, { params: a });
                  if (e?.data?.success == w.R)
                    return e.data.appids.forEach((e) => i.add(e)), i;
                  r = (0, I.H)(e);
                } catch (e) {
                  r = (0, I.H)(e);
                }
                return (
                  console.error(
                    "LoadContentHubFilteredApps failed: " + r?.strErrorMsg,
                    r,
                  ),
                  i
                );
              })(e, t).then((e) => {
                r.token.reason || a(e);
              });
          }, [n, r.token.reason, e, t]),
          n
        );
      }
      var C = n(6626),
        y = n(30894),
        S = n(16021),
        A = n(62792),
        N = n(55263),
        R = n(39020),
        k = n(39777),
        B = n(33380),
        T = n.n(B),
        G = n(12155),
        F = n(52038),
        D = n(70758);
      const P = new RegExp(
        "(?:https?://)?(?:www.)?twitch.tv/videos/([0-9]+)S*",
      );
      function L(e) {
        const t = P.exec(e);
        return t && t.length > 1 ? t[1] : null;
      }
      function E(e) {
        const {
            posterURL: t,
            videoid: n,
            muted: r,
            autoplay: s,
            bIsClipID: l,
            time: o,
            width: c,
            height: u,
          } = e,
          [d, m] = i.useState(Boolean(t)),
          _ = null != s && null != s && s;
        if (d)
          return (0, a.jsxs)("div", {
            className: (0, F.A)(
              "YoutubePreviewContainer",
              D.YoutubePreviewImage,
              e.imageClassnames,
            ),
            onClick: () => m(!1),
            children: [
              (0, a.jsx)("img", {
                className: (0, F.A)(
                  "YoutubePreviewImage",
                  D.YoutubePreviewImage,
                ),
                src:
                  t ||
                  b.TS.COMMUNITY_CDN_URL +
                    "public/shared/images/responsive/youtube_16x9_placeholder.gif",
              }),
              (0, a.jsx)("div", {
                className: "YoutubePreviewPlay",
                children: (0, a.jsx)(G.IOc, {}),
              }),
            ],
          });
        let p = (0, b.xv)().replace("https://", "");
        const h = p.indexOf("/");
        h >= 0 && (p = p.substring(0, h));
        let f = l
          ? `https://clips.twitch.tv/embed?clip=${n}`
          : `https://player.twitch.tv/?video=${n}`;
        return (
          (f += `&parent=${p}&autoplay=${_}&muted=${Boolean(r)}`),
          o &&
            (f += `&time=${(function (e) {
              const t = Math.floor(e / 3600);
              e -= 60 * t * 60;
              const n = Math.floor(e / 60);
              return `${t}h${n}m${(e -= n * e)}s`;
            })(o)}`),
          (0, a.jsxs)("div", {
            className: (0, F.A)("YoutubePlayer", T().TwitchPlayer),
            children: [
              (0, a.jsx)("img", {
                className: (0, F.A)(
                  "YoutubePreviewContainer",
                  D.YoutubePreviewImage,
                  e.imageClassnames,
                ),
                src:
                  b.TS.COMMUNITY_CDN_URL +
                  "public/shared/images/responsive/youtube_16x9_placeholder.gif",
              }),
              (0, a.jsx)("iframe", {
                src: f,
                allowFullScreen: !0,
                frameBorder: 0,
                width: c || 460,
                height: u || 300,
              }),
            ],
          })
        );
      }
      var Y = n(99032),
        H = n(22687),
        M = n(22797),
        V = n(10224),
        U = n(94743),
        W = n(61859),
        O = n(61336),
        Z = n(62014),
        z = n.n(Z),
        q = n(85693),
        X = n(22584);
      function Q(e) {
        const { clanInfo: t } = e,
          { curator_link: n, curator_medium_avatar: r } = (0, b.Tc)(
            "curator_header",
            "application_config",
          );
        return (0, a.jsx)(c.Z, {
          className: "page_content_ctn",
          "flow-children": "column",
          autoFocus: !0,
          children: (0, a.jsxs)("div", {
            className: "page_content " + X.HeaderContent,
            children: [
              (0, a.jsx)(q.r, {
                className: X.BreadContainer,
                crumbs: (0, b.Tc)("breadcrumbs", "application_config"),
              }),
              (0, a.jsxs)(c.Z, {
                className: "list_header_area",
                "flow-children": "row",
                children: [
                  (0, a.jsx)("div", {
                    className: "curator_avatar_image",
                    children: (0, a.jsx)(o.Ii, {
                      href: n,
                      children: (0, a.jsx)("img", {
                        className: "curator_avatar",
                        src: r,
                      }),
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className: "curator_details",
                    children: (0, a.jsx)(o.Ii, {
                      className: "pageheader curator_name",
                      href: n,
                      children: (0, W.we)(
                        "#SteamCurator_List_Header_List",
                        t.group_name,
                      ),
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var K = n(32630),
        $ = n(42834),
        J = n(64087),
        ee = n(67165);
      const te = function (e) {
        return (0, a.jsx)(ne, { listid: e.listid });
      };
      function ne(e) {
        const t = parseInt(
            (0, b.Tc)("curator_account_id", "application_config"),
          ),
          n = (0, C.m1)(t),
          r = (0, C.ME)(n?.clanSteamID, e.listid);
        if (((0, R.vb)(b.TS.LANGUAGE), !r)) return null;
        const i = n.is_ogg,
          s = n.is_creator_home && !n.is_ogg,
          l = i
            ? "#SteamCurator_MoreDLC"
            : s
              ? "#SteamCurator_MoreProducts"
              : "#SteamCurator_MoreReviews";
        return (0, a.jsxs)(K.Ay, {
          feature: "curatorlistcapsule",
          children: [
            (0, a.jsx)(Q, { clanInfo: n }),
            (0, a.jsx)("div", {
              className: "page_content_ctn grayscale",
              children: (0, a.jsx)("div", {
                className: "page_content",
                children: (0, a.jsxs)("div", {
                  className: z().CuratorListCtn,
                  children: [
                    (0, a.jsx)(ie, { listDetails: r }),
                    (0, C.cc)(r)
                      ? (0, a.jsx)(ae, { listDetails: r })
                      : (0, a.jsx)(re, { listDetails: r, rgListItems: r.apps }),
                    (0, a.jsxs)("div", {
                      className: z().CuratorMoreCtn,
                      children: [
                        (0, a.jsx)("h2", {
                          children: (0, W.we)("#SteamCurator_ExploreMoreTitle"),
                        }),
                        (0, a.jsx)(o.Ii, {
                          href: n.vanity_url,
                          children: (0, W.PP)(l, n.group_name),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          ],
        });
      }
      function ae(e) {
        const { listDetails: t } = e,
          [n, r] = (0, i.useState)(null),
          s = new h.b(t.sale_clan_steamid),
          { eventModel: l } = (0, p.B9)(
            s.GetAccountID(),
            t.sale_clan_event_gid,
          ),
          o = (0, i.useMemo)(
            () => (t.apps || []).map((e) => e.recommended_app.appid),
            [t],
          ),
          c = j(l, o);
        return (
          (0, i.useEffect)(() => {
            if (l)
              if (l.BUsesContentHubForItemSource())
                c && r(t.apps?.filter((e) => c.has(e.recommended_app?.appid)));
              else {
                const e = l.GetSaleFeaturedApps();
                r(t.apps?.filter((t) => e.has(t.recommended_app?.appid)));
              }
          }, [t, l, c]),
          (0, a.jsx)(re, { listDetails: t, rgListItems: n })
        );
      }
      function re(e) {
        const { listDetails: t, rgListItems: n } = e,
          [r, s] = (0, i.useState)(0),
          [l, u] = (0, i.useState)(null),
          d = (0, v.m)("CuratorAppListDisplay");
        if (
          (i.useEffect(() => {
            n &&
              (s(n?.length || 0),
              y.Fm.Get()
                .HintLoad()
                .then(() => {
                  const e = n.map((e) => e.recommended_app.appid);
                  S.A.Get()
                    .QueueMultipleAppRequests(e, Y.jy)
                    .then(() => {
                      d.token.reason ||
                        u(
                          n.filter(
                            (e) =>
                              !(0, Y.Li)(
                                S.A.Get().GetApp(e.recommended_app.appid),
                              ),
                          ),
                        );
                    })
                    .catch(() => {
                      d.token.reason || u([]);
                    });
                }));
          }, [n, d]),
          null == l)
        )
          return (0, a.jsx)(M.t, {
            string: (0, W.we)("#Loading"),
            position: "center",
            size: "medium",
          });
        const m = t.list_type == C.QV;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(c.Z, {
              className: (0, F.A)(z().CuratorList, m && z().CuratorListGrid),
              "flow-children": "grid",
              children: l.map((e, n) =>
                (0, a.jsx)(
                  se,
                  { item: e, listDetails: t, bAutoFocus: 0 == n },
                  "rec_" + e.recommended_app.appid,
                ),
              ),
            }),
            Boolean(100 > l.length) &&
              (0, a.jsxs)("div", {
                children: [
                  (0, a.jsxs)("span", {
                    children: [
                      (0, W.Yp)("#SteamCurator_Hidden", r - l.length),
                      " ",
                    ],
                  }),
                  (0, a.jsx)(o.Ii, {
                    href: b.TS.STORE_BASE_URL + "account/preferences/",
                    children: (0, W.we)("#SteamCurator_Setting"),
                  }),
                ],
              }),
          ],
        });
      }
      function ie(e) {
        const { listDetails: t } = e,
          n = (0, C.fq)(t),
          r = (0, b.Tc)("showlisttitle", "application_config"),
          i = (0, b.Tc)("titleareaheight", "application_config"),
          s =
            t.list_jsondata.youtube_link &&
            (0, u.XU)(t.list_jsondata.youtube_link),
          c = t.list_jsondata.youtube_link && L(t.list_jsondata.youtube_link),
          d = (0, l.sfN)(b.TS.LANGUAGE),
          m = W.NT.GetWithFallback(t.localized_flat_title, d),
          _ = W.NT.GetWithFallback(t.localized_flat_blurb, d),
          p = W.NT.GetWithFallback(t.localized_flat_link, d),
          h =
            n &&
            n.GetImageURL(
              (0, V.c5)() ? "product_mobile_banner" : "product_banner",
              d,
            );
        return (0, a.jsxs)("div", {
          className: z().TopReviewInfo,
          children: [
            Boolean(h) &&
              (0, a.jsx)(o.Ii, {
                href: (0, ee.n4)(n),
                children: (0, a.jsx)("img", {
                  className: z().SaleBanner,
                  src: h,
                }),
              }),
            r && m && (0, a.jsx)("div", { className: z().Title, children: m }),
            r && _ && (0, a.jsx)("div", { className: z().Blurb, children: _ }),
            Boolean(i > 0) && (0, a.jsx)("div", { style: { height: i } }),
            s &&
              (0, a.jsx)("div", {
                className: z().VideoReviewCtn,
                children: (0, a.jsx)(U.l, {
                  video: s.strVideoID,
                  startSeconds: s.nStartSeconds,
                  autoplay: !0,
                  autopause: !0,
                  showFullscreenBtn: !0,
                  controls: !0,
                  preloadYoutubeScripts: !0,
                  playsInline: !0,
                  imageClassnames: z().YouTubePreviewImage,
                }),
              }),
            Boolean(c) &&
              (0, a.jsx)("div", {
                className: z().VideoReviewCtn,
                children: (0, a.jsx)(E, {
                  videoid: c,
                  posterURL: "",
                  imageClassnames: z().YouTubePreviewImage,
                }),
              }),
            p && (0, a.jsx)(ce, { url: p }),
          ],
        });
      }
      const se = (0, r.PA)((e) => {
        const { item: t, listDetails: n, bAutoFocus: r } = e,
          s = parseInt((0, b.Tc)("curator_account_id", "application_config")),
          l = (0, C.m1)(s),
          [o] = (0, N.t7)(t?.recommended_app?.appid, {
            include_assets: !0,
            include_release: !0,
          }),
          m = (0, i.useMemo)(
            () => ({
              id: o?.GetID(),
              type: (0, A._4)(o?.GetStoreItemType(), o?.GetAppType()),
            }),
            [o],
          ),
          _ = (0, d.rt)(m);
        if (!l || !o) return null;
        const {
            appid: p,
            link_url: h,
            blurb: f,
            time_recommended: v,
            recommendation_state: g,
          } = t.recommended_app,
          x = l.is_creator_home && !l.is_ogg,
          I = n.list_jsondata.app_data?.[p],
          w = h && (0, u.XU)(h),
          j = h && L(h),
          y = f != C.F6 && f,
          S = o.BHasDemo(),
          R = I?.img_url,
          k = `curator_clanid=${l.clanAccountID}&curator_listid=${n.listid}`,
          B = o.GetStorePageURL() + "/?curator_clanid=" + l.clanAccountID;
        return (0, a.jsxs)(c.Z, {
          className: z().CuratorReview,
          autoFocus: r,
          children: [
            (0, a.jsx)("div", {
              className: z().CapsuleCtn,
              children: Boolean(w || j)
                ? (0, a.jsx)(le, {
                    strVideoID: w?.strVideoID || j,
                    nStartSeconds: w?.nStartSeconds,
                    id: _,
                    strImgOverrideUrl: R,
                    bShowDemoButton: S,
                    strExtraParams: k,
                    bTwitchVideo: Boolean(j),
                  })
                : (0, a.jsx)(H.W, {
                    imageType: "header",
                    capsule: m,
                    bShowDemoButton: S,
                    strExtraParams: k,
                    bPreferAssetWithoutOverride: !1,
                  }),
            }),
            (0, a.jsxs)("div", {
              className: z().ReviewTextSection,
              children: [
                (0, a.jsx)("a", {
                  className: z().GameTitle,
                  href: B,
                  children: o.GetName(),
                }),
                (0, a.jsxs)("div", {
                  className: z().RecommendationTypeAndDate,
                  children: [
                    (0, a.jsx)(oe, { type: g }),
                    (0, a.jsx)("div", {
                      className: z().ReviewDate,
                      children:
                        x || !Boolean(v)
                          ? (0, W.we)(
                              "#EventModTile_ReleaseDate",
                              o.GetFormattedSteamReleaseDate(),
                            )
                          : (0, W.$z)(v),
                    }),
                  ],
                }),
                Boolean(y) &&
                  (0, a.jsx)("div", {
                    className: z().ReviewBlurb,
                    children: (0, W.we)("#SteamCurator_ReviewTextQuoted", y),
                  }),
                Boolean(h) && (0, a.jsx)(ce, { url: h }),
              ],
            }),
          ],
        });
      });
      function le(e) {
        const {
            strVideoID: t,
            nStartSeconds: n,
            id: r,
            strImgOverrideUrl: i,
            bShowDemoButton: s,
            strExtraParams: l,
            bTwitchVideo: o,
          } = e,
          { data: c } = (0, k.lv)(r);
        return (0, a.jsxs)("div", {
          className: z().YouTubeCapsule,
          children: [
            (0, a.jsx)("div", {
              className: z().YouTubeCtn,
              children: o
                ? (0, a.jsx)(E, {
                    videoid: t,
                    posterURL: c ? (0, $.b0)(c, "header") : void 0,
                    imageClassnames: z().YouTubePreviewImage,
                    autoplay: !0,
                  })
                : (0, a.jsx)(U.l, {
                    video: t,
                    startSeconds: n,
                    autoplay: !0,
                    autopause: !0,
                    showFullscreenBtn: !0,
                    controls: !0,
                    preloadYoutubeScripts: !0,
                    playsInline: !0,
                    imageClassnames: z().YouTubePreviewImage,
                    altImg: i,
                  }),
            }),
            (0, a.jsxs)("div", {
              className: z().YouTubeCapsuleBottomBar,
              children: [
                (0, a.jsx)("div", {
                  className: z().GameImageCtn,
                  children: (0, a.jsx)(m.Q, {
                    id: r,
                    bShowDemoButton: s,
                    nDelayShowMs: 300,
                    strExtraParams: l,
                    hoverProps: {
                      direction: "overlay-center",
                      style: { minWidth: "300px" },
                    },
                    children: (0, a.jsx)("img", {
                      className: z().GameImage,
                      src: c ? (0, $.b0)(c, "library_capsule") : void 0,
                    }),
                  }),
                }),
                (0, a.jsx)(_.q, { id: r, strClassName: z().FullWidth }),
              ],
            }),
          ],
        });
      }
      function oe(e) {
        switch (e.type) {
          case J.tV.$D:
            return (0, a.jsx)("div", {
              className: z().Recommended,
              children: (0, W.we)("#SteamCurator_Recommended"),
            });
          case J.tV.qP:
            return (0, a.jsx)("div", {
              className: z().NotRecommended,
              children: (0, W.we)("#SteamCurator_NotRecommended"),
            });
          case J.tV.y8:
            return (0, a.jsx)("div", {
              className: z().Informational,
              children: (0, W.we)("#SteamCurator_Informational"),
            });
          default:
            return null;
        }
      }
      function ce(e) {
        let t = (0, f.OZ)(e.url);
        (0, s.p)(t) &&
          (t =
            (b.TS.IN_CLIENT ? "steam://openurl_external/" : "") +
            b.TS.COMMUNITY_BASE_URL +
            "linkfilter/?url=" +
            t);
        const n = (0, O.wm)(e.url),
          r = (0, u.Lg)(e.url);
        return (0, a.jsxs)("div", {
          className: z().FullReviewLink,
          children: [
            (0, a.jsx)(o.Ii, {
              className: z().FullReviewAnchor,
              href: t,
              rel: "noopener nofollow",
              preferredFocus: !1,
              autoFocus: !1,
              children: (0, W.we)(
                r
                  ? "#SteamCurator_WatchFullReview"
                  : "#SteamCurator_ReadFullReview",
              ),
            }),
            (0, a.jsx)("div", {
              className: z().FullReviewDomain,
              children: (0, W.we)(
                "#SteamCurator_ReviewLinkHostnameBracketed",
                n,
              ),
            }),
          ],
        });
      }
    },
  },
]);
