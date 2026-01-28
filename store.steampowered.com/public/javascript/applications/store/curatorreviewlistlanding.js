/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [716],
  {
    33380: (e) => {
      e.exports = {
        VideoReviewCtn: "V6zz2NPPxfnGjAchCe56r",
        YouTubePreviewImage: "_3joL1ZVcmC-6lCOLfjuIq7",
        TwitchPlayer: "_1Q0Ym9jG7UCFeD3c9LbOSy",
      };
    },
    66272: (e) => {
      e.exports = { BreadContainer: "_3jswbLK3E0Uf47oGyc6qUG" };
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
      };
    },
    22584: (e) => {
      e.exports = { BreadContainer: "GkVFIKIAijTGzfSc4BEQl" };
    },
    17083: (e, t, a) => {
      "use strict";
      a.d(t, { N_: () => f, k2: () => E });
      var n = a(92757),
        r = a(42891),
        l = a(90626),
        o = a(29248),
        i = a(58584),
        s = a(81115),
        c = a(68841);
      l.Component;
      l.Component;
      var u = function (e, t) {
          return "function" == typeof e ? e(t) : e;
        },
        m = function (e, t) {
          return "string" == typeof e ? (0, o.yJ)(e, null, null, t) : e;
        },
        d = function (e) {
          return e;
        },
        _ = l.forwardRef;
      void 0 === _ && (_ = d);
      var p = _(function (e, t) {
        var a = e.innerRef,
          n = e.navigate,
          r = e.onClick,
          o = (0, s.A)(e, ["innerRef", "navigate", "onClick"]),
          c = o.target,
          u = (0, i.A)({}, o, {
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
                (e.preventDefault(), n());
            },
          });
        return (u.ref = (d !== _ && t) || a), l.createElement("a", u);
      });
      var f = _(function (e, t) {
          var a = e.component,
            r = void 0 === a ? p : a,
            f = e.replace,
            g = e.to,
            v = e.innerRef,
            E = (0, s.A)(e, ["component", "replace", "to", "innerRef"]);
          return l.createElement(n.XZ.Consumer, null, function (e) {
            e || (0, c.A)(!1);
            var a = e.history,
              n = m(u(g, e.location), e.location),
              s = n ? a.createHref(n) : "",
              p = (0, i.A)({}, E, {
                href: s,
                navigate: function () {
                  var t = u(g, e.location),
                    n = (0, o.AO)(e.location) === (0, o.AO)(m(t));
                  (f || n ? a.replace : a.push)(t);
                },
              });
            return (
              d !== _ ? (p.ref = t || v) : (p.innerRef = v),
              l.createElement(r, p)
            );
          });
        }),
        g = function (e) {
          return e;
        },
        v = l.forwardRef;
      void 0 === v && (v = g);
      var E = v(function (e, t) {
        var a = e["aria-current"],
          r = void 0 === a ? "page" : a,
          o = e.activeClassName,
          d = void 0 === o ? "active" : o,
          _ = e.activeStyle,
          p = e.className,
          E = e.exact,
          h = e.isActive,
          C = e.location,
          b = e.sensitive,
          y = e.strict,
          I = e.style,
          w = e.to,
          S = e.innerRef,
          L = (0, s.A)(e, [
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
        return l.createElement(n.XZ.Consumer, null, function (e) {
          e || (0, c.A)(!1);
          var a = C || e.location,
            o = m(u(w, a), a),
            s = o.pathname,
            A = s && s.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
            N = A
              ? (0, n.B6)(a.pathname, {
                  path: A,
                  exact: E,
                  sensitive: b,
                  strict: y,
                })
              : null,
            R = !!(h ? h(N, a) : N),
            T = "function" == typeof p ? p(R) : p,
            D = "function" == typeof I ? I(R) : I;
          R &&
            ((T = (function () {
              for (
                var e = arguments.length, t = new Array(e), a = 0;
                a < e;
                a++
              )
                t[a] = arguments[a];
              return t
                .filter(function (e) {
                  return e;
                })
                .join(" ");
            })(T, d)),
            (D = (0, i.A)({}, D, _)));
          var G = (0, i.A)(
            { "aria-current": (R && r) || null, className: T, style: D, to: o },
            L,
          );
          return (
            g !== v ? (G.ref = t || S) : (G.innerRef = S), l.createElement(f, G)
          );
        });
      });
    },
    70995: (e, t, a) => {
      "use strict";
      a.d(t, { Lg: () => c, XU: () => m });
      const n = 20,
        r = /^.*youtube[^v]+v=(.{11}).*/,
        l = /^.*youtu\.be\/(.{11}).*/,
        o = /^.*youtube.*\/embed\/(.{11}).*/,
        i = /^.*[?&]t=([^&]+)(?:&|$)/,
        s = /^(?:(?:([\d]+)h)?(?:([\d]+)m)?(?:([\d]+)s)?|([\d]+))$/;
      function c(e) {
        return !!u(e);
      }
      function u(e) {
        const t = e?.length < n ? void 0 : r.exec(e) || l.exec(e) || o.exec(e);
        return t?.[1];
      }
      function m(e) {
        const t = u(e);
        if (!t) return;
        const a = (function (e) {
            const t = i.exec(e);
            return t?.[1];
          })(e),
          n = a
            ? (function (e) {
                const t = s.exec(e);
                if (!(t?.[1] || t?.[2] || t?.[3] || t?.[4])) return;
                if (t?.[4]) return parseInt(t?.[4]);
                let a = 0;
                return (
                  t?.[1] && (a += 3600 * parseInt(t[1])),
                  t?.[2] && (a += 60 * parseInt(t[2])),
                  t?.[3] && (a += parseInt(t[3])),
                  a
                );
              })(a)
            : void 0;
        return { strVideoID: t, nStartSeconds: n };
      }
    },
    6626: (e, t, a) => {
      "use strict";
      a.d(t, {
        F6: () => h,
        ME: () => y,
        RA: () => b,
        cc: () => w,
        fq: () => S,
        m1: () => I,
      });
      var n = a(34629),
        r = a(41735),
        l = a.n(r),
        o = a(14947),
        i = a(90626),
        s = a(17720),
        c = a(4796),
        u = a(30894),
        m = a(6379),
        d = a(99032),
        _ = a(62490),
        p = a(81393),
        f = a(68797),
        g = a(84933),
        v = a(78327);
      function E(e) {
        e.list_jsondata && "string" == typeof e.list_jsondata
          ? (e.list_jsondata = JSON.parse(e.list_jsondata))
          : ((0, p.wT)(
              !e.list_jsondata,
              "Found unexpected ListDetails_t.list_jsondata type: " +
                typeof e.list_jsondata,
            ),
            (e.list_jsondata = {}));
      }
      const h = "0";
      function C(e, t) {
        (t.localized_flat_title = (0, _.$Y)([], 31, null)),
          (t.localized_flat_blurb = (0, _.$Y)([], 31, null)),
          (t.localized_flat_link = (0, _.$Y)([], 31, null)),
          t.title !== h && (t.localized_flat_title[e] = t.title),
          t.blurb !== h && (t.localized_flat_blurb[e] = t.blurb),
          t.link !== h && (t.localized_flat_link[e] = t.link),
          t.title_localization.forEach((e) => {
            e.localized_string?.length > 0 &&
              (t.localized_flat_title[e.language] = e.localized_string);
          }),
          t.blurb_localization.forEach((e) => {
            e.localized_string?.length > 0 &&
              (t.localized_flat_blurb[e.language] = e.localized_string);
          }),
          t.link_localization.forEach((e) => {
            e.localized_string?.length > 0 &&
              (t.localized_flat_link[e.language] = e.localized_string);
          });
      }
      class b {
        m_mapList = new Map();
        m_mapEventGIDToLists = new Map();
        m_mapListIDToClanAccount = new Map();
        GetListDetails(e) {
          return this.m_mapList.get(e);
        }
        GetAllSaleCurationLists(e) {
          return this.m_mapEventGIDToLists.get(e) || [];
        }
        GetClanAccountFromListID(e) {
          return this.m_mapListIDToClanAccount.get(e);
        }
        async LoadListDetails(e, t, a) {
          if (this.m_mapList.has(t)) return this.m_mapList.get(t);
          const n =
              v.TS.STORE_BASE_URL +
              "curator/" +
              e.GetAccountID() +
              "/admin/ajaxgetlistdetails",
            r = { listid: t };
          try {
            const o = await l().get(n, { params: r, cancelToken: a?.token });
            if (1 == o?.data?.success) {
              const a = { ...o.data.list_details };
              return (
                (0, p.wT)(t == a?.listid, "Wanted" + t + "but got" + a?.listid),
                E(a),
                C(o.data.curation_language, a),
                this.m_mapList.set(t, a),
                this.m_mapListIDToClanAccount.set(t, e.GetAccountID()),
                a
              );
            }
          } catch (e) {
            const t = (0, f.H)(e);
            console.error(
              "CCuratorListStore.LoadListDetails: error on load: " +
                t.strErrorMsg,
              t,
            );
          }
          return null;
        }
        async LoadMyFollowedSaleCurationLists(e, t, a) {
          if (
            !v.iA.logged_in ||
            (u.Fm.Get().BIsLoaded() &&
              0 == u.Fm.Get().GetFollowedCuratorCount())
          )
            return [];
          const n = v.TS.STORE_BASE_URL + "curators/ajaxgetmycuratorsalelists",
            r = {
              clan_account_id: e.GetAccountID(),
              clan_event_gid: t,
              origin: self.origin,
              curator_clan_account_followed: u.Fm.Get().BIsLoaded()
                ? u.Fm.Get().GetFollowedCuratorsAccountID().join(",")
                : void 0,
            };
          return this.InternalLoadSaleCuratorLists(
            n,
            r,
            "CCuratorListStore.LoadMyFollowedSaleCurationLists",
            e,
            t,
            a,
          );
        }
        async LoadAllSaleCurationLists(e, t, a) {
          if (this.m_mapEventGIDToLists.has(t))
            return this.m_mapEventGIDToLists.get(t);
          const n = v.TS.STORE_BASE_URL + "curators/ajaxfindcuratorlists",
            r = {
              clan_account_id: e.GetAccountID(),
              clan_event_gid: t,
              origin: self.origin,
            };
          return this.InternalLoadSaleCuratorLists(
            n,
            r,
            "CCuratorListStore.LoadAllSaleCurationLists",
            e,
            t,
            a,
          );
        }
        async InternalLoadSaleCuratorLists(e, t, a, n, r, i) {
          try {
            const a = await l().get(e, { params: t, cancelToken: i?.token });
            if (1 == a?.data?.success) {
              const e = new Array();
              return (
                (0, o.h5)(() => {
                  a.data.matches &&
                    a.data.matches.forEach((t) => {
                      t.multi_detail_lists.forEach((a) => {
                        this.m_mapListIDToClanAccount.set(
                          a.listid,
                          t.clan_account_id,
                        ),
                          E(a),
                          C(t.curation_language, a),
                          this.m_mapList.set(a.listid, a),
                          e.push(a);
                      });
                    }),
                    this.m_mapEventGIDToLists.set(r, e);
                }),
                e
              );
            }
          } catch (e) {
            const t = (0, f.H)(e);
            console.error(a + ": error on load: " + t.strErrorMsg, t);
          }
          return [];
        }
        static s_Singleton;
        static Get() {
          return b.s_Singleton || (b.s_Singleton = new b()), b.s_Singleton;
        }
        constructor() {
          (0, o.Gn)(this),
            "dev" == v.TS.WEB_UNIVERSE && (window.g_curatorListStore = this);
          let e = (0, v.Tc)("curatorlistdata", "application_config");
          ("dev" != v.TS.WEB_UNIVERSE && "beta" != v.TS.WEB_UNIVERSE) ||
            console.log(
              "DEV_DEBUG: CCuratorListStore loading list payload: " + e?.length,
              e,
            ),
            this.ValidateStoreDefault(e) &&
              (0, o.h5)(() => {
                e.forEach((e) => {
                  e.multi_detail_lists.forEach((t) => {
                    E(t),
                      C(e.curation_language, t),
                      this.m_mapList.set(t.listid, t);
                  });
                });
              });
        }
        ValidateStoreDefault(e) {
          const t = e;
          return t &&
            Array.isArray(t) &&
            t.length > 0 &&
            "object" == typeof t[0]
            ? "number" == typeof t[0].curation_language &&
                t[0].multi_detail_lists &&
                Array.isArray(t[0].multi_detail_lists) &&
                "string" == typeof t[0].multi_detail_lists[0].listid &&
                "number" == typeof t[0].multi_detail_lists[0].list_type &&
                "number" == typeof t[0].multi_detail_lists[0].list_state
            : t && Array.isArray(t) && 0 == t.length;
        }
      }
      function y(e, t) {
        const a = (0, g.CH)();
        return (
          (0, i.useEffect)(() => {
            if (b.Get().GetListDetails(t) || !e) return;
            const n = l().CancelToken.source();
            return (
              (async () => {
                const r = await b.Get().LoadListDetails(e, t);
                if (!n.token.reason)
                  if (r?.apps?.length) {
                    const e = [];
                    for (const t of r.apps) {
                      const a = t?.recommended_app?.appid;
                      a && e.push({ id: a, type: "game" });
                    }
                    (0, d.H2)(e, {
                      ...d.jy,
                      include_assets: !0,
                      include_release: !0,
                    }),
                      a();
                  } else console.error("Found no list data");
              })(),
              () => n.cancel("unmounting CuratorList")
            );
          }, [e, t, a]),
          b.Get().GetListDetails(t)
        );
      }
      function I(e) {
        const t = e && c.ac.GetClanInfoByClanAccountID(e),
          [a, n] = (0, i.useState)(!!t);
        return (
          (0, i.useEffect)(() => {
            if (a && e) {
              const t = s.b.InitFromClanID(e);
              c.ac.LoadClanInfoForClanSteamID(t).finally(() => {
                n(!0);
              });
            }
          }, [a, e]),
          t
        );
      }
      function w(e) {
        return Boolean(e?.sale_clan_event_gid) && Boolean(e?.sale_clan_steamid);
      }
      function S(e) {
        const t = (0, g.CH)(),
          a = w(e) ? e.sale_clan_event_gid : null,
          n = a && m.O3.GetClanEventModel(a);
        return (
          (0, i.useEffect)(() => {
            if (n || !w(e)) return;
            const r = l().CancelToken.source();
            return (
              (async () => {
                m.O3.Init(),
                  await m.O3.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                    new s.b(e.sale_clan_steamid),
                    a,
                    0,
                  ),
                  r.token.reason || t();
              })(),
              () => r.cancel("unmounting CuratorList")
            );
          }, [e, a, n, t]),
          n
        );
      }
      (0, n.Cg)([o.sH], b.prototype, "m_mapList", void 0);
    },
    22305: (e, t, a) => {
      "use strict";
      a.d(t, { r: () => c });
      var n = a(90626),
        r = a(66272),
        l = a(52038),
        o = a(17083),
        i = a(45699),
        s = a(76217);
      function c(e) {
        const { crumbs: t, className: a } = e;
        return t && 0 != t.length
          ? n.createElement(
              "div",
              { className: (0, l.A)(r.BreadContainer, a) },
              n.createElement(
                s.Z,
                { className: "blockbg", "flow-children": "row" },
                t.map((e) => {
                  const t = new Array();
                  return (
                    e.url.startsWith("http")
                      ? t.push(
                          n.createElement(
                            i.Ii,
                            { key: "anchor_" + e.name, href: e.url },
                            e.name,
                          ),
                        )
                      : t.push(
                          n.createElement(
                            o.N_,
                            { key: "link_" + e.name, to: e.url },
                            e.name,
                          ),
                        ),
                    t.push(
                      n.createElement("span", { key: e.name + "span" }, " > "),
                    ),
                    t
                  );
                }),
              ),
              n.createElement("div", { style: { clear: "left" } }),
            )
          : null;
      }
    },
    94743: (e, t, a) => {
      "use strict";
      a.d(t, { l: () => _, r: () => d });
      var n = a(90626),
        r = a(26296),
        l = a(12155),
        o = a(48211),
        i = a(52038),
        s = a(61859),
        c = a(70758),
        u = a.n(c),
        m = a(61949);
      const d = (e) => {
          const t = ["maxresdefault", "mqdefault", "default"],
            [a, l] = n.useState(0);
          n.useEffect(() => l(0), [e.video]);
          const o = n.useRef(void 0);
          if (e.altImgWithFallback && e.altImgWithFallback.length > 0)
            return n.createElement(r.o, {
              className: e.className,
              srcs: e.altImgWithFallback,
            });
          if (e.altImg)
            return n.createElement("img", {
              src: e.altImg,
              className: e.className,
            });
          {
            const r =
                "https://img.youtube.com/vi/" + e.video + "/" + t[a] + ".jpg",
              s = () => {
                a + 1 < t.length && l(a + 1);
              },
              c = () => {
                o.current && o.current.naturalHeight < 91 && s();
              };
            return n.createElement("img", {
              ref: o,
              onLoad: c,
              onError: s,
              src: r,
              className: (0, i.A)(u().YoutubePreviewImage, e.className),
            });
          }
        },
        _ = (e) => {
          const [t, a] = n.useState(!1);
          (0, o.VC)(!!e.preloadYoutubeScripts);
          const r = (0, m.Rp)("youtube");
          if (t && r)
            return n.createElement(o.N1, {
              ...e,
              classnames: (0, i.A)(u().YoutubePlayer, e.classnames),
            });
          {
            const t = (t) => {
              e.onPlayerActivated && e.onPlayerActivated(),
                a(!0),
                t.stopPropagation(),
                t.preventDefault();
            };
            return n.createElement(
              "div",
              {
                className: (0, i.A)(
                  "YoutubePreviewContainer",
                  u().YoutubePreviewImage,
                  e.imageClassnames,
                ),
                onClick: r ? t : void 0,
              },
              n.createElement(d, {
                className: "YoutubePreviewImage",
                altImgWithFallback: e.altImgWithFallback,
                altImg: e.altImg,
                video: e.video,
              }),
              r &&
                n.createElement(
                  n.Fragment,
                  null,
                  n.createElement(
                    "div",
                    { className: "YoutubePreviewPlay" },
                    n.createElement(l.IOc, null),
                  ),
                  n.createElement(
                    "div",
                    { className: "VideoHintText" },
                    (0, s.we)("#EventCalendar_WatchYouTubeVideo"),
                  ),
                ),
            );
          }
        };
    },
    49271: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { CuratorReviewListContainer: () => X, default: () => q });
      var n = a(75844),
        r = a(90626),
        l = a(15759),
        o = a(22837),
        i = a(45699),
        s = a(75422),
        c = a(76217),
        u = a(70995),
        m = a(38390),
        d = a(17720),
        _ = a(55963),
        p = a(4434),
        f = a(41735),
        g = a.n(f),
        v = a(78327),
        E = a(68797);
      function h(e, t) {
        const [a, n] = (0, r.useState)(
            e?.BUsesContentHubForItemSource() ? new Set() : null,
          ),
          l = (0, p.m)("useFilteredAppViaContentHub");
        return (
          (0, r.useEffect)(() => {
            e?.BUsesContentHubForItemSource() &&
              !a &&
              (async function (e, t) {
                const a =
                    v.TS.STORE_BASE_URL +
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
                let r = null;
                const l = new Set();
                try {
                  const e = await g().get(a, { params: n });
                  if (1 == e?.data?.success)
                    return e.data.appids.forEach((e) => l.add(e)), l;
                  r = (0, E.H)(e);
                } catch (e) {
                  r = (0, E.H)(e);
                }
                return (
                  console.error(
                    "LoadContentHubFilteredApps failed: " + r?.strErrorMsg,
                    r,
                  ),
                  l
                );
              })(e, t).then((e) => {
                l.token.reason || n(e);
              });
          }, [a, l.token.reason, e, t]),
          a
        );
      }
      var C = a(6626),
        b = a(30894),
        y = a(16021),
        I = a(62792),
        w = a(55263),
        S = a(39020),
        L = a(33380),
        A = a.n(L),
        N = a(12155),
        R = a(52038),
        T = a(70758);
      const D = new RegExp(
        "(?:https?://)?(?:www.)?twitch.tv/videos/([0-9]+)S*",
      );
      function G(e) {
        const t = D.exec(e);
        return t?.length > 1 ? t[1] : null;
      }
      function k(e) {
        const {
            posterURL: t,
            videoid: a,
            muted: n,
            autoplay: l,
            bIsClipID: o,
            time: i,
            width: s,
            height: c,
          } = e,
          [u, m] = r.useState(Boolean(t)),
          d = null != l && null != l && l;
        if (u)
          return r.createElement(
            "div",
            {
              className: (0, R.A)(
                "YoutubePreviewContainer",
                T.YoutubePreviewImage,
                e.imageClassnames,
              ),
              onClick: () => m(!1),
            },
            r.createElement("img", {
              className: (0, R.A)("YoutubePreviewImage", T.YoutubePreviewImage),
              src:
                t ||
                v.TS.COMMUNITY_CDN_URL +
                  "public/shared/images/responsive/youtube_16x9_placeholder.gif",
            }),
            r.createElement(
              "div",
              { className: "YoutubePreviewPlay" },
              r.createElement(N.IOc, null),
            ),
          );
        let _ = (0, v.xv)().replace("https://", "");
        const p = _.indexOf("/");
        p >= 0 && (_ = _.substring(0, p));
        let f = o
          ? `https://clips.twitch.tv/embed?clip=${a}`
          : `https://player.twitch.tv/?video=${a}`;
        return (
          (f += `&parent=${_}&autoplay=${d}&muted=${Boolean(n)}`),
          i &&
            (f += `&time=${(function (e) {
              const t = Math.floor(e / 3600);
              e -= 60 * t * 60;
              const a = Math.floor(e / 60);
              return `${t}h${a}m${(e -= a * e)}s`;
            })(i)}`),
          r.createElement(
            "div",
            { className: (0, R.A)("YoutubePlayer", A().TwitchPlayer) },
            r.createElement("img", {
              className: (0, R.A)(
                "YoutubePreviewContainer",
                T.YoutubePreviewImage,
                e.imageClassnames,
              ),
              src:
                v.TS.COMMUNITY_CDN_URL +
                "public/shared/images/responsive/youtube_16x9_placeholder.gif",
            }),
            r.createElement("iframe", {
              src: f,
              allowFullScreen: !0,
              frameBorder: 0,
              width: s || 460,
              height: c || 300,
            }),
          )
        );
      }
      var F = a(26101),
        B = a(99032),
        P = a(75152),
        Y = a(46416),
        x = a(22797),
        j = a(10224),
        M = a(94743),
        U = a(61859),
        z = a(61336),
        O = a(62014),
        V = a.n(O),
        H = a(22305),
        W = a(22584);
      function Z(e) {
        const { clanInfo: t } = e,
          { curator_link: a, curator_medium_avatar: n } = (0, v.Tc)(
            "curator_header",
            "application_config",
          );
        return r.createElement(
          c.Z,
          {
            className: "page_content_ctn",
            "flow-children": "column",
            autoFocus: !0,
          },
          r.createElement(
            "div",
            { className: "page_content" },
            r.createElement(
              c.Z,
              { className: "list_header_area", "flow-children": "row" },
              r.createElement(
                "div",
                { className: "curator_avatar_image" },
                r.createElement(
                  i.Ii,
                  { href: a },
                  r.createElement("img", {
                    className: "curator_avatar",
                    src: n,
                  }),
                ),
              ),
              r.createElement(
                "div",
                { className: "curator_details" },
                r.createElement(H.r, {
                  className: W.BreadContainer,
                  crumbs: (0, v.Tc)("breadcrumbs", "application_config"),
                }),
                r.createElement(
                  i.Ii,
                  { className: "pageheader curator_name", href: a },
                  (0, U.we)("#SteamCurator_List_Header_List", t.group_name),
                ),
              ),
            ),
          ),
        );
      }
      var $ = a(32630),
        K = a(35380);
      const q = function (e) {
        return r.createElement(
          s.u,
          { navID: "StoreCuratorPageRoot" },
          r.createElement(X, { listid: e.listid }),
        );
      };
      function X(e) {
        const t = parseInt(
            (0, v.Tc)("curator_account_id", "application_config"),
          ),
          a = (0, C.m1)(t),
          n = (0, C.ME)(a?.clanSteamID, e.listid);
        return (
          (0, S.vb)(v.TS.LANGUAGE),
          n
            ? r.createElement(
                $.Ay,
                { feature: "curatorlistcapsule" },
                r.createElement(Z, { clanInfo: a }),
                r.createElement(
                  "div",
                  { className: "page_content_ctn grayscale" },
                  r.createElement(
                    "div",
                    { className: "page_content" },
                    r.createElement(
                      "div",
                      { className: V().CuratorListCtn },
                      r.createElement(ee, { listDetails: n }),
                      (0, C.cc)(n)
                        ? r.createElement(J, { listDetails: n })
                        : r.createElement(Q, {
                            listDetails: n,
                            rgListItems: n.apps,
                          }),
                      r.createElement(
                        "div",
                        { className: V().CuratorMoreCtn },
                        r.createElement(
                          "h2",
                          null,
                          (0, U.we)("#SteamCurator_ExploreMoreTitle"),
                        ),
                        r.createElement(
                          i.Ii,
                          { href: a.vanity_url },
                          (0, U.PP)("#SteamCurator_MoreReviews", a.group_name),
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
          [a, n] = (0, r.useState)(null),
          l = new d.b(t.sale_clan_steamid),
          { eventModel: o } = (0, m.B9)(
            l.GetAccountID(),
            t.sale_clan_event_gid,
          ),
          i = (0, r.useMemo)(
            () => (t.apps || []).map((e) => e.recommended_app.appid),
            [t],
          ),
          s = h(o, i);
        return (
          (0, r.useEffect)(() => {
            if (o)
              if (o.BUsesContentHubForItemSource())
                s && n(t.apps?.filter((e) => s.has(e.recommended_app?.appid)));
              else {
                const e = o.GetSaleFeaturedApps();
                n(t.apps?.filter((t) => e.has(t.recommended_app?.appid)));
              }
          }, [t, o, s]),
          r.createElement(Q, { listDetails: t, rgListItems: a })
        );
      }
      function Q(e) {
        const { listDetails: t, rgListItems: a } = e,
          [n, l] = (0, r.useState)(0),
          [o, s] = (0, r.useState)(null),
          u = (0, p.m)("CuratorAppListDisplay");
        if (
          (r.useEffect(() => {
            a &&
              (l(a?.length || 0),
              b.Fm.Get()
                .HintLoad()
                .then(() => {
                  const e = a.map((e) => e.recommended_app.appid);
                  y.A.Get()
                    .QueueMultipleAppRequests(e, B.jy)
                    .then(() => {
                      u.token.reason ||
                        s(
                          a.filter(
                            (e) =>
                              !(0, B.Li)(
                                y.A.Get().GetApp(e.recommended_app.appid),
                              ),
                          ),
                        );
                    })
                    .catch(() => {
                      u.token.reason || s([]);
                    });
                }));
          }, [a, u]),
          null == o)
        )
          return r.createElement(x.t, {
            string: (0, U.we)("#Loading"),
            position: "center",
            size: "medium",
          });
        const m = 1 == t.list_type;
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            c.Z,
            {
              className: (0, R.A)(V().CuratorList, m && V().CuratorListGrid),
              "flow-children": "grid",
            },
            o.map((e, a) =>
              r.createElement(te, {
                key: "rec_" + e.recommended_app.appid,
                item: e,
                listDetails: t,
                bAutoFocus: 0 == a,
              }),
            ),
          ),
          Boolean(100 > o.length) &&
            r.createElement(
              "div",
              null,
              r.createElement(
                "span",
                null,
                (0, U.Yp)("#SteamCurator_Hidden", n - o.length),
                " ",
              ),
              r.createElement(
                i.Ii,
                { href: v.TS.STORE_BASE_URL + "account/preferences/" },
                (0, U.we)("#SteamCurator_Setting"),
              ),
            ),
        );
      }
      function ee(e) {
        const { listDetails: t } = e,
          a = (0, C.fq)(t),
          n = (0, v.Tc)("showlisttitle", "application_config"),
          l = (0, v.Tc)("titleareaheight", "application_config"),
          s =
            t.list_jsondata.youtube_link &&
            (0, u.XU)(t.list_jsondata.youtube_link),
          c = t.list_jsondata.youtube_link && G(t.list_jsondata.youtube_link),
          m = (0, o.sf)(v.TS.LANGUAGE),
          d = U.NT.GetWithFallback(t.localized_flat_title, m),
          _ = U.NT.GetWithFallback(t.localized_flat_blurb, m),
          p = U.NT.GetWithFallback(t.localized_flat_link, m),
          f =
            a &&
            a.GetImageURL(
              (0, j.c5)() ? "product_mobile_banner" : "product_banner",
              m,
            );
        return r.createElement(
          "div",
          { className: V().TopReviewInfo },
          Boolean(f) &&
            r.createElement(
              i.Ii,
              { href: a.GetSaleURL() },
              r.createElement("img", { className: V().SaleBanner, src: f }),
            ),
          n && d && r.createElement("div", { className: V().Title }, d),
          n && _ && r.createElement("div", { className: V().Blurb }, _),
          Boolean(l > 0) && r.createElement("div", { style: { height: l } }),
          s &&
            r.createElement(
              "div",
              { className: V().VideoReviewCtn },
              r.createElement(M.l, {
                video: s.strVideoID,
                startSeconds: s.nStartSeconds,
                autoplay: !0,
                autopause: !0,
                showFullscreenBtn: !0,
                controls: !0,
                preloadYoutubeScripts: !0,
                playsInline: !0,
                imageClassnames: V().YouTubePreviewImage,
              }),
            ),
          Boolean(c) &&
            r.createElement(
              "div",
              { className: V().VideoReviewCtn },
              r.createElement(k, {
                videoid: c,
                posterURL: "",
                imageClassnames: V().YouTubePreviewImage,
              }),
            ),
          p && r.createElement(re, { url: p }),
        );
      }
      const te = (0, n.PA)((e) => {
        const { item: t, listDetails: a, bAutoFocus: n } = e,
          l = parseInt((0, v.Tc)("curator_account_id", "application_config")),
          o = (0, C.m1)(l),
          [i] = (0, w.t7)(t?.recommended_app?.appid, {
            include_assets: !0,
            include_release: !0,
          }),
          s = (0, r.useMemo)(
            () => ({
              id: i?.GetID(),
              type: (0, I._4)(i?.GetStoreItemType(), i?.GetAppType()),
            }),
            [i],
          );
        if (!o || !i) return null;
        const {
            appid: m,
            link_url: d,
            blurb: _,
            time_recommended: p,
            recommendation_state: f,
          } = t.recommended_app,
          g = o.is_creator_home && !o.is_ogg,
          E = a.list_jsondata.app_data?.[m],
          h = d && (0, u.XU)(d),
          b = d && G(d),
          y = _ != C.F6 && _,
          S = i.BHasDemo(),
          L = E?.img_url,
          A = `curator_clanid=${o.clanAccountID}&curator_listid=${a.listid}`,
          N = i.GetStorePageURL() + "/?curator_clanid=" + o.clanAccountID;
        return r.createElement(
          c.Z,
          { className: V().CuratorReview, autoFocus: n },
          r.createElement(
            "div",
            { className: V().CapsuleCtn },
            Boolean(h || b)
              ? r.createElement(ae, {
                  strVideoID: h?.strVideoID || b,
                  nStartSeconds: h?.nStartSeconds,
                  info: s,
                  strImgOverrideUrl: L,
                  bShowDemoButton: S,
                  strExtraParams: A,
                  bTwitchVideo: Boolean(b),
                })
              : r.createElement(Y.W, {
                  imageType: "header",
                  capsule: s,
                  bShowDemoButton: S,
                  strExtraParams: A,
                  bPreferAssetWithoutOverride: !1,
                }),
          ),
          r.createElement(
            "div",
            { className: V().ReviewTextSection },
            r.createElement(
              "a",
              { className: V().GameTitle, href: N },
              i.GetName(),
            ),
            r.createElement(
              "div",
              { className: V().RecommendationTypeAndDate },
              r.createElement(ne, { type: f }),
              r.createElement(
                "div",
                { className: V().ReviewDate },
                g || !Boolean(p)
                  ? (0, U.we)(
                      "#EventModTile_ReleaseDate",
                      i.GetFormattedSteamReleaseDate(),
                    )
                  : (0, U.$z)(p),
              ),
            ),
            Boolean(y) &&
              r.createElement(
                "div",
                { className: V().ReviewBlurb },
                (0, U.we)("#SteamCurator_ReviewTextQuoted", y),
              ),
            Boolean(d) && r.createElement(re, { url: d }),
          ),
        );
      });
      function ae(e) {
        const {
            strVideoID: t,
            nStartSeconds: a,
            info: n,
            strImgOverrideUrl: l,
            bShowDemoButton: o,
            strExtraParams: i,
            bTwitchVideo: s,
          } = e,
          [c] = (0, w.G6)(n.id, (0, I.SW)(n.type), { include_assets: !0 }),
          u = (0, K.rt)(n);
        return r.createElement(
          "div",
          { className: V().YouTubeCapsule },
          r.createElement(
            "div",
            { className: V().YouTubeCtn },
            s
              ? r.createElement(k, {
                  videoid: t,
                  posterURL: c?.GetAssets().GetHeaderURL(),
                  imageClassnames: V().YouTubePreviewImage,
                  autoplay: !0,
                })
              : r.createElement(M.l, {
                  video: t,
                  startSeconds: a,
                  autoplay: !0,
                  autopause: !0,
                  showFullscreenBtn: !0,
                  controls: !0,
                  preloadYoutubeScripts: !0,
                  playsInline: !0,
                  imageClassnames: V().YouTubePreviewImage,
                  altImg: l,
                }),
          ),
          r.createElement(
            "div",
            { className: V().YouTubeCapsuleBottomBar },
            r.createElement(
              "div",
              { className: V().GameImageCtn },
              r.createElement(
                F.Qf,
                {
                  item: n,
                  bShowDemoButton: o,
                  nDelayShowMs: 300,
                  strExtraParams: i,
                  hoverProps: {
                    direction: "overlay-center",
                    style: { minWidth: "300px" },
                  },
                },
                r.createElement("img", {
                  className: V().GameImage,
                  src: c?.GetAssets().GetLibraryCapsuleURL(),
                }),
              ),
            ),
            r.createElement(P.q, { id: u, strClassName: V().FullWidth }),
          ),
        );
      }
      function ne(e) {
        switch (e.type) {
          case 0:
            return r.createElement(
              "div",
              { className: V().Recommended },
              (0, U.we)("#SteamCurator_Recommended"),
            );
          case 1:
            return r.createElement(
              "div",
              { className: V().NotRecommended },
              (0, U.we)("#SteamCurator_NotRecommended"),
            );
          case 2:
            return r.createElement(
              "div",
              { className: V().Informational },
              (0, U.we)("#SteamCurator_Informational"),
            );
          default:
            return null;
        }
      }
      function re(e) {
        let t = (0, _.OZ)(e.url);
        (0, l.p)(t) &&
          (t =
            (v.TS.IN_CLIENT ? "steam://openurl_external/" : "") +
            v.TS.COMMUNITY_BASE_URL +
            "linkfilter/?url=" +
            t);
        const a = (0, z.wm)(e.url),
          n = (0, u.Lg)(e.url);
        return r.createElement(
          "div",
          { className: V().FullReviewLink },
          r.createElement(
            i.Ii,
            {
              className: V().FullReviewAnchor,
              href: t,
              rel: "noopener nofollow",
              preferredFocus: !1,
              autoFocus: !1,
            },
            (0, U.we)(
              n
                ? "#SteamCurator_WatchFullReview"
                : "#SteamCurator_ReadFullReview",
            ),
          ),
          r.createElement(
            "div",
            { className: V().FullReviewDomain },
            (0, U.we)("#SteamCurator_ReviewLinkHostnameBracketed", a),
          ),
        );
      }
    },
  },
]);
