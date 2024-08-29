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
      a.d(t, { N_: () => h, k2: () => g });
      var n = a(92757),
        r = a(42891),
        o = a(90626),
        i = a(29248),
        s = a(58584),
        l = a(81115),
        c = a(68841);
      o.Component;
      o.Component;
      var u = function (e, t) {
          return "function" == typeof e ? e(t) : e;
        },
        m = function (e, t) {
          return "string" == typeof e ? (0, i.yJ)(e, null, null, t) : e;
        },
        d = function (e) {
          return e;
        },
        p = o.forwardRef;
      void 0 === p && (p = d);
      var _ = p(function (e, t) {
        var a = e.innerRef,
          n = e.navigate,
          r = e.onClick,
          i = (0, l.A)(e, ["innerRef", "navigate", "onClick"]),
          c = i.target,
          u = (0, s.A)({}, i, {
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
        return (u.ref = (d !== p && t) || a), o.createElement("a", u);
      });
      var h = p(function (e, t) {
          var a = e.component,
            r = void 0 === a ? _ : a,
            h = e.replace,
            f = e.to,
            y = e.innerRef,
            g = (0, l.A)(e, ["component", "replace", "to", "innerRef"]);
          return o.createElement(n.XZ.Consumer, null, function (e) {
            e || (0, c.A)(!1);
            var a = e.history,
              n = m(u(f, e.location), e.location),
              l = n ? a.createHref(n) : "",
              _ = (0, s.A)({}, g, {
                href: l,
                navigate: function () {
                  var t = u(f, e.location),
                    n = (0, i.AO)(e.location) === (0, i.AO)(m(t));
                  (h || n ? a.replace : a.push)(t);
                },
              });
            return (
              d !== p ? (_.ref = t || y) : (_.innerRef = y),
              o.createElement(r, _)
            );
          });
        }),
        f = function (e) {
          return e;
        },
        y = o.forwardRef;
      void 0 === y && (y = f);
      var g = y(function (e, t) {
        var a = e["aria-current"],
          r = void 0 === a ? "page" : a,
          i = e.activeClassName,
          d = void 0 === i ? "active" : i,
          p = e.activeStyle,
          _ = e.className,
          g = e.exact,
          v = e.isActive,
          E = e.location,
          C = e.sensitive,
          I = e.strict,
          b = e.style,
          w = e.to,
          S = e.innerRef,
          L = (0, l.A)(e, [
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
        return o.createElement(n.XZ.Consumer, null, function (e) {
          e || (0, c.A)(!1);
          var a = E || e.location,
            i = m(u(w, a), a),
            l = i.pathname,
            A = l && l.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
            D = A
              ? (0, n.B6)(a.pathname, {
                  path: A,
                  exact: g,
                  sensitive: C,
                  strict: I,
                })
              : null,
            P = !!(v ? v(D, a) : D),
            R = "function" == typeof _ ? _(P) : _,
            N = "function" == typeof b ? b(P) : b;
          P &&
            ((R = (function () {
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
            })(R, d)),
            (N = (0, s.A)({}, N, p)));
          var T = (0, s.A)(
            { "aria-current": (P && r) || null, className: R, style: N, to: i },
            L,
          );
          return (
            f !== y ? (T.ref = t || S) : (T.innerRef = S), o.createElement(h, T)
          );
        });
      });
    },
    55909: (e, t, a) => {
      "use strict";
      a.d(t, { u: () => c });
      var n = a(90626),
        r = a(71513),
        o = a(93007),
        i = a(56093),
        s = a(78327),
        l = a(61712);
      function c(e) {
        const { children: t, navTreeRef: a, ...c } = e,
          u = n.useRef(),
          m = (0, i.Ue)(u, a),
          d = (0, s.Qn)(),
          p = window.__virtual_keyboard_client;
        if (d) {
          const e = window.__nav_tree_root;
          return n.createElement(
            r.B2,
            { ...c, navTreeRef: m, secondary: !0, parentEmbeddedNavTree: e },
            n.createElement(
              l.F6,
              { factory: p },
              n.createElement(o.q, null, t),
            ),
          );
        }
        return n.createElement(n.Fragment, null, t);
      }
    },
    70995: (e, t, a) => {
      "use strict";
      a.d(t, { Lg: () => c, XU: () => m });
      const n = 20,
        r = /^.*youtube[^v]+v=(.{11}).*/,
        o = /^.*youtu\.be\/(.{11}).*/,
        i = /^.*youtube.*\/embed\/(.{11}).*/,
        s = /^.*[?&]t=([^&]+)(?:&|$)/,
        l = /^(?:(?:([\d]+)h)?(?:([\d]+)m)?(?:([\d]+)s)?|([\d]+))$/;
      function c(e) {
        return !!u(e);
      }
      function u(e) {
        const t = e?.length < n ? void 0 : r.exec(e) || o.exec(e) || i.exec(e);
        return t?.[1];
      }
      function m(e) {
        const t = u(e);
        if (!t) return;
        const a = (function (e) {
            const t = s.exec(e);
            return t?.[1];
          })(e),
          n = a
            ? (function (e) {
                const t = l.exec(e);
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
    38390: (e, t, a) => {
      "use strict";
      a.d(t, { B9: () => u, G4: () => l, RR: () => c });
      var n = a(90626),
        r = a(91254),
        o = a(4434),
        i = a(17720),
        s = a(78327);
      a(17690);
      function l(e, t = 0, a) {
        const [l, c] = (0, n.useState)(r.O3.GetClanEventFromAnnouncementGID(e)),
          u = (0, o.m)("usePartnerEventByAnnouncementGID");
        return (
          (0, n.useEffect)(() => {
            if (l?.AnnouncementGID != e) {
              r.O3.Init();
              const n = new i.b(s.UF.CLANSTEAMID);
              r.O3.LoadPartnerEventFromAnnoucementGIDAndClanSteamID(
                n,
                e,
                t,
                a,
              ).then((e) => {
                e && !u.token.reason && c(e);
              });
            }
          }, [e, t, a, l, u]),
          l
        );
      }
      function c(e) {
        const [t, a] = (0, n.useState)(r.O3.GetClanEventModel(e)),
          i = (0, o.m)("usePartnerEventByEventGID");
        return (
          (0, n.useEffect)(() => {
            e &&
              t?.GID != e &&
              (r.O3.Init(),
              r.O3.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(
                [e],
                [],
                i,
              ).then((t) => {
                1 != t?.length || t[0].GID != e || i.token.reason || a(t[0]);
              }));
          }, [e, t, i]),
          t
        );
      }
      function u(e, t, a) {
        const [s, l] = (0, n.useState)(r.O3.GetClanEventModel(t)),
          [c, u] = (0, n.useState)(!!e && !!t),
          [m, d] = (0, n.useState)(),
          p = (0, o.m)("usePartnerEventByClanAccountAndEventGID");
        return (
          (0, n.useEffect)(() => {
            (async () => {
              try {
                if (s?.GID != t && t) {
                  r.O3.Init();
                  const n = i.b.InitFromClanID(e);
                  let o;
                  try {
                    o =
                      await r.O3.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                        n,
                        t,
                        0,
                        a,
                      );
                  } catch (e) {
                    d(e?.response?.data?.err_msg);
                  }
                  p.token.reason || l(o);
                }
              } finally {
                u(!1);
              }
            })();
          }, [e, t, s, a, p]),
          { eventModel: s, bLoading: c, sErrorMessage: m }
        );
      }
    },
    6626: (e, t, a) => {
      "use strict";
      a.d(t, {
        F6: () => E,
        ME: () => b,
        RA: () => I,
        cc: () => S,
        fq: () => L,
        m1: () => w,
      });
      var n = a(34629),
        r = a(41735),
        o = a.n(r),
        i = a(14947),
        s = a(90626),
        l = a(17720),
        c = a(4796),
        u = a(19471),
        m = a(30894),
        d = a(91254),
        p = a(99032),
        _ = a(62490),
        h = a(44332),
        f = a(68797),
        y = a(56093),
        g = a(78327);
      function v(e) {
        e.list_jsondata && "string" == typeof e.list_jsondata
          ? (e.list_jsondata = JSON.parse(e.list_jsondata))
          : ((0, h.w)(
              !e.list_jsondata,
              "Found unexpected ListDetails_t.list_jsondata type: " +
                typeof e.list_jsondata,
            ),
            (e.list_jsondata = {}));
      }
      const E = "0";
      function C(e, t) {
        (t.localized_flat_title = (0, _.$Y)([], 31, null)),
          (t.localized_flat_blurb = (0, _.$Y)([], 31, null)),
          (t.localized_flat_link = (0, _.$Y)([], 31, null)),
          t.title !== E && (t.localized_flat_title[e] = t.title),
          t.blurb !== E && (t.localized_flat_blurb[e] = t.blurb),
          t.link !== E && (t.localized_flat_link[e] = t.link),
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
      class I {
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
              g.TS.STORE_BASE_URL +
              "curator/" +
              e.GetAccountID() +
              "/admin/ajaxgetlistdetails",
            r = { listid: t };
          try {
            const i = await o().get(n, { params: r, cancelToken: a?.token });
            if (1 == i?.data?.success) {
              const a = { ...i.data.list_details };
              return (
                (0, h.w)(t == a?.listid, "Wanted" + t + "but got" + a?.listid),
                v(a),
                C(i.data.curation_language, a),
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
            !g.iA.logged_in ||
            (m.Fm.Get().BIsLoaded() &&
              0 == m.Fm.Get().GetFollowedCuratorCount())
          )
            return [];
          const n = g.TS.STORE_BASE_URL + "curators/ajaxgetmycuratorsalelists",
            r = {
              clan_account_id: e.GetAccountID(),
              clan_event_gid: t,
              origin: self.origin,
              curator_clan_account_followed: m.Fm.Get().BIsLoaded()
                ? m.Fm.Get().GetFollowedCuratorsAccountID().join(",")
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
          const n = g.TS.STORE_BASE_URL + "curators/ajaxfindcuratorlists",
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
        async InternalLoadSaleCuratorLists(e, t, a, n, r, s) {
          try {
            const a = await o().get(e, { params: t, cancelToken: s?.token });
            if (1 == a?.data?.success) {
              const e = new Array();
              return (
                (0, i.h5)(() => {
                  a.data.matches &&
                    a.data.matches.forEach((t) => {
                      t.multi_detail_lists.forEach((a) => {
                        this.m_mapListIDToClanAccount.set(
                          a.listid,
                          t.clan_account_id,
                        ),
                          v(a),
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
          return I.s_Singleton || (I.s_Singleton = new I()), I.s_Singleton;
        }
        constructor() {
          (0, i.Gn)(this),
            "dev" == g.TS.WEB_UNIVERSE && (window.g_curatorListStore = this);
          let e = (0, g.Tc)("curatorlistdata", "application_config");
          ("dev" != g.TS.WEB_UNIVERSE && "beta" != g.TS.WEB_UNIVERSE) ||
            console.log(
              "DEV_DEBUG: CCuratorListStore loading list payload: " + e?.length,
              e,
            ),
            this.ValidateStoreDefault(e) &&
              (0, i.h5)(() => {
                e.forEach((e) => {
                  e.multi_detail_lists.forEach((t) => {
                    v(t),
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
      function b(e, t) {
        const a = (0, y.CH)();
        return (
          (0, s.useEffect)(() => {
            if (I.Get().GetListDetails(t) || !e) return;
            const n = o().CancelToken.source();
            return (
              (async () => {
                const r = await I.Get().LoadListDetails(e, t);
                if (!n.token.reason)
                  if (r?.apps?.length) {
                    const e = [];
                    for (const t of r.apps) {
                      const a = t?.recommended_app?.appid;
                      a && e.push({ id: a, type: "game" });
                    }
                    (0, p.H2)(e, {
                      ...p.jy,
                      include_assets: !0,
                      include_release: !0,
                    }),
                      u.Ay.Get().LoadAppIDsBatch(e.map((e) => e.id)),
                      a();
                  } else console.error("Found no list data");
              })(),
              () => n.cancel("unmounting CuratorList")
            );
          }, [e, t, a]),
          I.Get().GetListDetails(t)
        );
      }
      function w(e) {
        const t = e && c.ac.GetClanInfoByClanAccountID(e),
          [a, n] = (0, s.useState)(!!t);
        return (
          (0, s.useEffect)(() => {
            if (a && e) {
              const t = l.b.InitFromClanID(e);
              c.ac.LoadClanInfoForClanSteamID(t).finally(() => {
                n(!0);
              });
            }
          }, [a, e]),
          t
        );
      }
      function S(e) {
        return Boolean(e?.sale_clan_event_gid) && Boolean(e?.sale_clan_steamid);
      }
      function L(e) {
        const t = (0, y.CH)(),
          a = S(e) ? e.sale_clan_event_gid : null,
          n = a && d.O3.GetClanEventModel(a);
        return (
          (0, s.useEffect)(() => {
            if (n || !S(e)) return;
            const r = o().CancelToken.source();
            return (
              (async () => {
                d.O3.Init(),
                  await d.O3.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                    new l.b(e.sale_clan_steamid),
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
      (0, n.Cg)([i.sH], I.prototype, "m_mapList", void 0);
    },
    22305: (e, t, a) => {
      "use strict";
      a.d(t, { r: () => c });
      var n = a(90626),
        r = a(66272),
        o = a(52038),
        i = a(17083),
        s = a(71513),
        l = a(32381);
      function c(e) {
        const { crumbs: t, className: a } = e;
        return t && 0 != t.length
          ? n.createElement(
              "div",
              { className: (0, o.A)(r.BreadContainer, a) },
              n.createElement(
                l.Z,
                { className: "blockbg", "flow-children": "row" },
                t.map((e) => {
                  const t = new Array();
                  return (
                    e.url.startsWith("http")
                      ? t.push(
                          n.createElement(
                            s.Ii,
                            { key: "anchor_" + e.name, href: e.url },
                            e.name,
                          ),
                        )
                      : t.push(
                          n.createElement(
                            i.N_,
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
    48211: (e, t, a) => {
      "use strict";
      a.d(t, { N: () => h, o: () => p });
      var n,
        r = a(34629),
        o = a(90626),
        i = a(62490),
        s = a(94607),
        l = a(56093),
        c = a(52038),
        u = a(22797);
      !(function (e) {
        (e[(e.NotLoaded = 0)] = "NotLoaded"),
          (e[(e.Loading = 1)] = "Loading"),
          (e[(e.Loaded = 2)] = "Loaded");
      })(n || (n = {}));
      let m = n.NotLoaded,
        d = [];
      function p(e) {
        if (m == n.Loaded) return void e();
        if (m == n.NotLoaded) {
          let e = document.createElement("script");
          e.src = "https://www.youtube.com/iframe_api";
          let t = document.getElementsByTagName("script")[0];
          t.parentNode.insertBefore(e, t), (window.onYouTubeIframeAPIReady = _);
        }
        d.findIndex((t) => e == t) < 0 && d.push(e);
      }
      function _() {
        m = n.Loaded;
        for (let e of d) e();
        d = [];
      }
      class h extends o.Component {
        m_strPlayerID = "";
        m_player = null;
        m_playerContainer = null;
        m_bPlayerReady = !1;
        static s_nPlayerIndex = 0;
        constructor(e) {
          super(e),
            (this.m_strPlayerID = "YoutubePlayer_" + h.s_nPlayerIndex++),
            (this.state = { bYoutubeLoaded: !1 });
        }
        componentWillUnmount() {
          var e;
          this.DestroyPlayer(), (e = this.OnYoutubeScriptsReady), i.x9(d, e);
        }
        shouldComponentUpdate(e, t) {
          if (!this.m_player) return !1;
          const a = this.props;
          return a.autoplay != e.autoplay ||
            a.controls != e.controls ||
            a.showInfo != e.showInfo ||
            a.video != e.video
            ? (this.CreatePlayer(e), !1)
            : ((a.width == e.width && a.height == e.height) ||
                (this.m_bPlayerReady &&
                  e.width &&
                  e.height &&
                  this.m_player.setSize(e.width, e.height)),
              a.forcePause != e.forcePause);
        }
        componentDidUpdate(e) {
          e.forcePause != this.props.forcePause &&
            (this.props.forcePause
              ? this.m_player.pauseVideo()
              : this.m_player.playVideo());
        }
        DestroyPlayer() {
          if (this.m_player)
            try {
              this.m_player.stopVideo && this.m_player.stopVideo(),
                this.m_player.destroy && this.m_player.destroy();
            } catch (e) {
            } finally {
              this.m_player = null;
            }
        }
        BindPlayerContainer(e) {
          this.m_playerContainer != e &&
            ((this.m_playerContainer = e),
            this.DestroyPlayer(),
            this.m_playerContainer && p(this.OnYoutubeScriptsReady));
        }
        OnYoutubeScriptsReady() {
          this.CreatePlayer(this.props);
        }
        CreatePlayer(e) {
          if ((this.DestroyPlayer(), !this.m_playerContainer)) return;
          const t = !1 === e.autoplay ? 0 : 1,
            a = !0 === e.showInfo ? 1 : 0,
            n = !0 === e.controls ? 1 : 0,
            r = !0 === e.showFullscreenBtn ? 1 : 0,
            o = !0 === e.playsInline ? 1 : 0;
          let i = {
              width: void 0 !== e.width ? String(e.width) : void 0,
              height: void 0 !== e.height ? String(e.height) : void 0,
              videoId: e.video,
              playerVars: {
                autoplay: t,
                showinfo: a,
                autohide: 1,
                fs: r,
                modestbranding: 1,
                rel: 0,
                playsinline: o,
                iv_load_policy: 3,
                controls: n,
                start: e.startSeconds,
              },
              events: {
                onReady: this.OnPlayerReady,
                onStateChange: this.OnPlayerStateChange,
                onError: this.OnError,
              },
            },
            s = this.m_playerContainer.firstElementChild;
          (this.m_bPlayerReady = !1), (this.m_player = new YT.Player(s, i));
        }
        OnPlayerReady(e) {
          if (((this.m_bPlayerReady = !0), this.props.onVideoInfoChanged)) {
            let e = this.m_player.getVideoData(),
              t = { strAuthor: "", strTitle: "", strVideoID: "" };
            e.author && (t.strAuthor = e.author),
              e.title && (t.strTitle = e.title),
              e.video_id && (t.strVideoID = e.video_id),
              this.props.onVideoInfoChanged(t);
          }
          this.props.width &&
            this.props.height &&
            this.m_player.setSize(this.props.width, this.props.height),
            this.props.autoplay && this.m_player.playVideo(),
            this.props.onPlayerReady && this.props.onPlayerReady();
        }
        OnPlayerStateChange(e) {
          switch (e.data) {
            case YT.PlayerState.UNSTARTED:
              break;
            case YT.PlayerState.BUFFERING:
              this.props.onBuffering && this.props.onBuffering();
              break;
            case YT.PlayerState.PLAYING:
              this.props.onPlaying && this.props.onPlaying();
              break;
            case YT.PlayerState.PAUSED:
              this.props.onPaused && this.props.onPaused();
              break;
            case YT.PlayerState.ENDED:
              this.props.onMovieEnd && this.props.onMovieEnd();
          }
        }
        OnError(e) {
          console.log("Youtube: Playback failed", e),
            this.props.onError && this.props.onError(e);
        }
        OnPlayerLeftView() {
          this.props.autopause &&
            this.m_player &&
            this.m_bPlayerReady &&
            this.m_player.pauseVideo();
        }
        PlayVideo(e) {
          this.m_player &&
            this.m_bPlayerReady &&
            (e && this.m_player.seekTo(0, !0), this.m_player.playVideo());
        }
        render() {
          const e = o.createElement(
            "div",
            {
              key: this.m_strPlayerID,
              ref: this.BindPlayerContainer,
              className: (0, c.A)("YoutubePlayer", this.props.classnames),
            },
            o.createElement(u.t, { className: "YoutubePlayerThrobber" }),
          );
          return this.props.autopause
            ? o.createElement(s.Y, { onLeave: this.OnPlayerLeftView }, e)
            : e;
        }
      }
      (0, r.Cg)([l.oI], h.prototype, "BindPlayerContainer", null),
        (0, r.Cg)([l.oI], h.prototype, "OnYoutubeScriptsReady", null),
        (0, r.Cg)([l.oI], h.prototype, "CreatePlayer", null),
        (0, r.Cg)([l.oI], h.prototype, "OnPlayerReady", null),
        (0, r.Cg)([l.oI], h.prototype, "OnPlayerStateChange", null),
        (0, r.Cg)([l.oI], h.prototype, "OnError", null),
        (0, r.Cg)([l.oI], h.prototype, "OnPlayerLeftView", null),
        (0, r.Cg)([l.oI], h.prototype, "PlayVideo", null);
    },
    94743: (e, t, a) => {
      "use strict";
      a.d(t, { l: () => d, r: () => m });
      var n = a(90626),
        r = a(26296),
        o = a(12155),
        i = a(48211),
        s = a(52038),
        l = a(61859),
        c = a(70758),
        u = a.n(c);
      const m = (e) => {
          const t = ["maxresdefault", "mqdefault", "default"],
            [a, o] = n.useState(0);
          n.useEffect(() => o(0), [e.video]);
          const i = n.useRef();
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
              l = () => {
                a + 1 < t.length && o(a + 1);
              },
              c = () => {
                i.current && i.current.naturalHeight < 91 && l();
              };
            return n.createElement("img", {
              ref: i,
              onLoad: c,
              onError: l,
              src: r,
              className: (0, s.A)(u().YoutubePreviewImage, e.className),
            });
          }
        },
        d = (e) => {
          const [t, a] = n.useState(!1);
          if (
            (n.useEffect(() => {
              e.preloadYoutubeScripts && (0, i.o)(() => {});
            }, [e.preloadYoutubeScripts]),
            t)
          )
            return n.createElement(i.N, {
              ...e,
              classnames: (0, s.A)(u().YoutubePlayer, e.classnames),
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
                className: (0, s.A)(
                  "YoutubePreviewContainer",
                  u().YoutubePreviewImage,
                  e.imageClassnames,
                ),
                onClick: t,
              },
              n.createElement(m, {
                className: "YoutubePreviewImage",
                altImgWithFallback: e.altImgWithFallback,
                altImg: e.altImg,
                video: e.video,
              }),
              n.createElement(
                "div",
                { className: "YoutubePreviewPlay" },
                n.createElement(o.IOc, null),
              ),
              n.createElement(
                "div",
                { className: "VideoHintText" },
                (0, l.we)("#EventCalendar_WatchYouTubeVideo"),
              ),
            );
          }
        };
    },
    49271: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { CuratorReviewListContainer: () => X, default: () => K });
      var n = a(75844),
        r = a(90626),
        o = a(15759),
        i = a(22837),
        s = a(71513),
        l = a(55909),
        c = a(32381),
        u = a(70995),
        m = a(38390),
        d = a(17720),
        p = a(55963),
        _ = a(4434),
        h = a(41735),
        f = a.n(h),
        y = a(78327),
        g = a(68797);
      function v(e, t) {
        const [a, n] = (0, r.useState)(
            e?.BUsesContentHubForItemSource() ? new Set() : null,
          ),
          o = (0, _.m)("useFilteredAppViaContentHub");
        return (
          (0, r.useEffect)(() => {
            e?.BUsesContentHubForItemSource() &&
              !a &&
              (async function (e, t) {
                const a =
                    y.TS.STORE_BASE_URL +
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
                const o = new Set();
                try {
                  const e = await f().get(a, { params: n });
                  if (1 == e?.data?.success)
                    return e.data.appids.forEach((e) => o.add(e)), o;
                  r = (0, g.H)(e);
                } catch (e) {
                  r = (0, g.H)(e);
                }
                return (
                  console.error(
                    "LoadContentHubFilteredApps failed: " + r?.strErrorMsg,
                    r,
                  ),
                  o
                );
              })(e, t).then((e) => {
                o.token.reason || n(e);
              });
          }, [a, o.token.reason, e, t]),
          a
        );
      }
      var E = a(6626),
        C = a(25855),
        I = a(19471),
        b = a(30894),
        w = a(16021),
        S = a(62792),
        L = a(55263),
        A = a(80782),
        D = a(33380),
        P = a.n(D),
        R = a(12155),
        N = a(52038),
        T = a(70758);
      const G = new RegExp(
        "(?:https?://)?(?:www.)?twitch.tv/videos/([0-9]+)S*",
      );
      function B(e) {
        const t = G.exec(e);
        return t?.length > 1 ? t[1] : null;
      }
      function k(e) {
        const {
            posterURL: t,
            videoid: a,
            muted: n,
            autoplay: o,
            bIsClipID: i,
            time: s,
            width: l,
            height: c,
          } = e,
          [u, m] = r.useState(Boolean(t)),
          d = null != o && null != o && o;
        if (u)
          return r.createElement(
            "div",
            {
              className: (0, N.A)(
                "YoutubePreviewContainer",
                T.YoutubePreviewImage,
                e.imageClassnames,
              ),
              onClick: () => m(!1),
            },
            r.createElement("img", {
              className: (0, N.A)("YoutubePreviewImage", T.YoutubePreviewImage),
              src:
                t ||
                y.TS.COMMUNITY_CDN_URL +
                  "public/shared/images/responsive/youtube_16x9_placeholder.gif",
            }),
            r.createElement(
              "div",
              { className: "YoutubePreviewPlay" },
              r.createElement(R.IOc, null),
            ),
          );
        let p = (0, y.xv)().replace("https://", "");
        const _ = p.indexOf("/");
        _ >= 0 && (p = p.substring(0, _));
        let h = i
          ? `https://clips.twitch.tv/embed?clip=${a}`
          : `https://player.twitch.tv/?video=${a}`;
        return (
          (h += `&parent=${p}&autoplay=${d}&muted=${Boolean(n)}`),
          s &&
            (h += `&time=${(function (e) {
              const t = Math.floor(e / 3600);
              e -= 60 * t * 60;
              const a = Math.floor(e / 60);
              return `${t}h${a}m${(e -= a * e)}s`;
            })(s)}`),
          r.createElement(
            "div",
            { className: (0, N.A)("YoutubePlayer", P().TwitchPlayer) },
            r.createElement("img", {
              className: (0, N.A)(
                "YoutubePreviewContainer",
                T.YoutubePreviewImage,
                e.imageClassnames,
              ),
              src:
                y.TS.COMMUNITY_CDN_URL +
                "public/shared/images/responsive/youtube_16x9_placeholder.gif",
            }),
            r.createElement("iframe", {
              src: h,
              allowFullScreen: !0,
              frameBorder: 0,
              width: l || 460,
              height: c || 300,
            }),
          )
        );
      }
      var F = a(26101),
        Y = a(99032),
        O = a(45359),
        V = a(46416),
        x = a(22797),
        M = a(10224),
        j = a(94743),
        U = a(61859),
        z = a(61336),
        H = a(62014),
        W = a.n(H),
        Z = a(22305),
        $ = a(22584);
      function q(e) {
        const { clanInfo: t } = e,
          { curator_link: a, curator_medium_avatar: n } = (0, y.Tc)(
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
                  s.Ii,
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
                r.createElement(Z.r, {
                  className: $.BreadContainer,
                  crumbs: (0, y.Tc)("breadcrumbs", "application_config"),
                }),
                r.createElement(
                  s.Ii,
                  { className: "pageheader curator_name", href: a },
                  (0, U.we)("#SteamCurator_List_Header_List", t.group_name),
                ),
              ),
            ),
          ),
        );
      }
      const K = function (e) {
        const t = (0, C.A)();
        return r.createElement(
          l.u,
          { navID: "StoreCuratorPageRoot", NavigationManager: t },
          r.createElement(X, { listid: e.listid }),
        );
      };
      function X(e) {
        const t = parseInt(
            (0, y.Tc)("curator_account_id", "application_config"),
          ),
          a = (0, E.m1)(t),
          n = (0, E.ME)(a?.clanSteamID, e.listid);
        return (
          (0, A.vb)(),
          n
            ? r.createElement(
                r.Fragment,
                null,
                r.createElement(q, { clanInfo: a }),
                r.createElement(
                  "div",
                  { className: "page_content_ctn grayscale" },
                  r.createElement(
                    "div",
                    { className: "page_content" },
                    r.createElement(
                      "div",
                      { className: W().CuratorListCtn },
                      r.createElement(ee, { listDetails: n }),
                      (0, E.cc)(n)
                        ? r.createElement(J, { listDetails: n })
                        : r.createElement(Q, {
                            listDetails: n,
                            rgListItems: n.apps,
                          }),
                      r.createElement(
                        "div",
                        { className: W().CuratorMoreCtn },
                        r.createElement(
                          "h2",
                          null,
                          (0, U.we)("#SteamCurator_ExploreMoreTitle"),
                        ),
                        r.createElement(
                          s.Ii,
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
          o = new d.b(t.sale_clan_steamid),
          { eventModel: i } = (0, m.B9)(
            o.GetAccountID(),
            t.sale_clan_event_gid,
          ),
          s = (0, r.useMemo)(
            () => (t.apps || []).map((e) => e.recommended_app.appid),
            [t],
          ),
          l = v(i, s);
        return (
          (0, r.useEffect)(() => {
            if (i)
              if (i.BUsesContentHubForItemSource())
                l && n(t.apps?.filter((e) => l.has(e.recommended_app?.appid)));
              else {
                const e = i.GetSaleFeaturedApps();
                n(t.apps?.filter((t) => e.has(t.recommended_app?.appid)));
              }
          }, [t, i, l]),
          r.createElement(Q, { listDetails: t, rgListItems: a })
        );
      }
      function Q(e) {
        const { listDetails: t, rgListItems: a } = e,
          [n, o] = (0, r.useState)(0),
          [i, l] = (0, r.useState)(null),
          u = (0, _.m)("CuratorAppListDisplay");
        if (
          (r.useEffect(() => {
            a &&
              (o(a?.length || 0),
              b.Fm.Get()
                .HintLoad()
                .then(() => {
                  const e = a.map((e) => e.recommended_app.appid);
                  w.A.Get()
                    .QueueMultipleAppRequests(e, Y.jy)
                    .then(() => {
                      u.token.reason ||
                        l(
                          a.filter(
                            (e) =>
                              !(0, Y.Li)(
                                w.A.Get().GetApp(e.recommended_app.appid),
                              ),
                          ),
                        );
                    })
                    .catch(() => {
                      u.token.reason || l([]);
                    });
                }));
          }, [a, u]),
          null == i)
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
              className: (0, N.A)(W().CuratorList, m && W().CuratorListGrid),
              "flow-children": "grid",
            },
            i.map((e, a) =>
              r.createElement(te, {
                key: "rec_" + e.recommended_app.appid,
                item: e,
                listDetails: t,
                bAutoFocus: 0 == a,
              }),
            ),
          ),
          Boolean(n > i.length) &&
            r.createElement(
              "div",
              null,
              r.createElement(
                "span",
                null,
                (0, U.Yp)("#SteamCurator_Hidden", n - i.length),
                " ",
              ),
              r.createElement(
                s.Ii,
                { href: y.TS.STORE_BASE_URL + "account/preferences/" },
                (0, U.we)("#SteamCurator_Setting"),
              ),
            ),
        );
      }
      function ee(e) {
        const { listDetails: t } = e,
          a = (0, E.fq)(t),
          n = (0, y.Tc)("showlisttitle", "application_config"),
          o = (0, y.Tc)("titleareaheight", "application_config"),
          l =
            t.list_jsondata.youtube_link &&
            (0, u.XU)(t.list_jsondata.youtube_link),
          c = t.list_jsondata.youtube_link && B(t.list_jsondata.youtube_link),
          m = (0, i.sf)(y.TS.LANGUAGE),
          d = U.NT.GetWithFallback(t.localized_flat_title, m),
          p = U.NT.GetWithFallback(t.localized_flat_blurb, m),
          _ = U.NT.GetWithFallback(t.localized_flat_link, m),
          h =
            a &&
            a.GetImageURL(
              (0, M.c)() ? "product_mobile_banner" : "product_banner",
              m,
            );
        return r.createElement(
          "div",
          { className: W().TopReviewInfo },
          Boolean(h) &&
            r.createElement(
              s.Ii,
              { href: a.GetSaleURL() },
              r.createElement("img", { className: W().SaleBanner, src: h }),
            ),
          n && d && r.createElement("div", { className: W().Title }, d),
          n && p && r.createElement("div", { className: W().Blurb }, p),
          Boolean(o > 0) && r.createElement("div", { style: { height: o } }),
          l &&
            r.createElement(
              "div",
              { className: W().VideoReviewCtn },
              r.createElement(j.l, {
                video: l.strVideoID,
                startSeconds: l.nStartSeconds,
                autoplay: !0,
                autopause: !0,
                showFullscreenBtn: !0,
                controls: !0,
                preloadYoutubeScripts: !0,
                playsInline: !0,
                imageClassnames: W().YouTubePreviewImage,
              }),
            ),
          Boolean(c) &&
            r.createElement(
              "div",
              { className: W().VideoReviewCtn },
              r.createElement(k, {
                videoid: c,
                posterURL: "",
                imageClassnames: W().YouTubePreviewImage,
              }),
            ),
          _ && r.createElement(re, { url: _ }),
        );
      }
      const te = (0, n.PA)((e) => {
        const { item: t, listDetails: a, bAutoFocus: n } = e,
          o = parseInt((0, y.Tc)("curator_account_id", "application_config")),
          i = (0, E.m1)(o),
          [s] = (0, L.t7)(t?.recommended_app?.appid, {
            include_assets: !0,
            include_release: !0,
          }),
          l = (0, r.useMemo)(
            () => ({
              id: s?.GetID(),
              type: (0, S._4)(s?.GetStoreItemType(), s?.GetAppType()),
            }),
            [s],
          );
        if (!i || !s) return null;
        const {
            appid: m,
            link_url: d,
            blurb: p,
            time_recommended: _,
            recommendation_state: h,
          } = t.recommended_app,
          f = i.is_creator_home && !i.is_ogg,
          g = a.list_jsondata.app_data?.[m],
          v = d && (0, u.XU)(d),
          C = d && B(d),
          b = p != E.F6 && p,
          w = I.Ay.Get().BHasDemoAppID(m),
          A = g?.img_url,
          D = `curator_clanid=${i.clanAccountID}&curator_listid=${a.listid}`;
        return r.createElement(
          c.Z,
          { className: W().CuratorReview, autoFocus: n },
          r.createElement(
            "div",
            { className: W().CapsuleCtn },
            Boolean(v || C)
              ? r.createElement(ae, {
                  strVideoID: v?.strVideoID || C,
                  nStartSeconds: v?.nStartSeconds,
                  info: l,
                  strImgOverrideUrl: A,
                  bShowDemoButton: w,
                  strExtraParams: D,
                  bTwitchVideo: Boolean(C),
                })
              : r.createElement(V.W, {
                  imageType: "header",
                  capsule: l,
                  bShowDemoButton: w,
                  strExtraParams: D,
                }),
          ),
          r.createElement(
            "div",
            { className: W().ReviewTextSection },
            r.createElement("div", { className: W().GameTitle }, s.GetName()),
            r.createElement(
              "div",
              { className: W().RecommendationTypeAndDate },
              r.createElement(ne, { type: h }),
              r.createElement(
                "div",
                { className: W().ReviewDate },
                f || !Boolean(_)
                  ? (0, U.we)(
                      "#EventModTile_ReleaseDate",
                      s.GetFormattedSteamReleaseDate(),
                    )
                  : (0, U.$z)(_),
              ),
            ),
            Boolean(b) &&
              r.createElement(
                "div",
                { className: W().ReviewBlurb },
                (0, U.we)("#SteamCurator_ReviewTextQuoted", b),
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
            strImgOverrideUrl: o,
            bShowDemoButton: i,
            strExtraParams: s,
            bTwitchVideo: l,
          } = e,
          [c] = (0, L.G6)(n.id, (0, S.SW)(n.type), { include_assets: !0 });
        return r.createElement(
          "div",
          { className: W().YouTubeCapsule },
          r.createElement(
            "div",
            { className: W().YouTubeCtn },
            l
              ? r.createElement(k, {
                  videoid: t,
                  posterURL: c?.GetAssets().GetHeaderURL(),
                  imageClassnames: W().YouTubePreviewImage,
                  autoplay: !0,
                })
              : r.createElement(j.l, {
                  video: t,
                  startSeconds: a,
                  autoplay: !0,
                  autopause: !0,
                  showFullscreenBtn: !0,
                  controls: !0,
                  preloadYoutubeScripts: !0,
                  playsInline: !0,
                  imageClassnames: W().YouTubePreviewImage,
                  altImg: o,
                }),
          ),
          r.createElement(
            "div",
            { className: W().YouTubeCapsuleBottomBar },
            r.createElement(
              "div",
              { className: W().GameImageCtn },
              r.createElement(
                F.Qf,
                {
                  item: n,
                  bShowDemoButton: i,
                  nDelayShowMs: 300,
                  strExtraParams: s,
                  hoverProps: {
                    direction: "overlay-center",
                    style: { minWidth: "300px" },
                  },
                },
                r.createElement("img", {
                  className: W().GameImage,
                  src: c?.GetAssets().GetLibraryCapsuleURL(),
                }),
              ),
            ),
            r.createElement(O.qn, { info: n, strClassName: W().FullWidth }),
          ),
        );
      }
      function ne(e) {
        switch (e.type) {
          case 0:
            return r.createElement(
              "div",
              { className: W().Recommended },
              (0, U.we)("#SteamCurator_Recommended"),
            );
          case 1:
            return r.createElement(
              "div",
              { className: W().NotRecommended },
              (0, U.we)("#SteamCurator_NotRecommended"),
            );
          case 2:
            return r.createElement(
              "div",
              { className: W().Informational },
              (0, U.we)("#SteamCurator_Informational"),
            );
          default:
            return null;
        }
      }
      function re(e) {
        let t = (0, p.VZ)(e.url);
        (0, o.p)(t) &&
          (t =
            (y.TS.IN_CLIENT ? "steam://openurl_external/" : "") +
            y.TS.COMMUNITY_BASE_URL +
            "linkfilter/?url=" +
            t);
        const a = (0, z.wm)(e.url),
          n = (0, u.Lg)(e.url);
        return r.createElement(
          "div",
          { className: W().FullReviewLink },
          r.createElement(
            s.Ii,
            {
              className: W().FullReviewAnchor,
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
            { className: W().FullReviewDomain },
            (0, U.we)("#SteamCurator_ReviewLinkHostnameBracketed", a),
          ),
        );
      }
    },
  },
]);
