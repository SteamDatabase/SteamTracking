/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [3207],
  {
    36998: (e) => {
      e.exports = {
        VideoReviewCtn: "nNaTzGQ7C6myiryvRVzbN",
        YouTubePreviewImage: "_mxmFoBEr2jCCFzAEYTHS",
        TwitchPlayer: "Ny5PHytaKtT3TcXaAuteI",
      };
    },
    9573: (e) => {
      e.exports = { BreadContainer: "_1QPim7Fhu5DRQ0XwSEa3Z7" };
    },
    46612: (e) => {
      e.exports = {
        YoutubePreviewImage: "MzScKg88ual3wOXkO-oyX",
        YoutubePlayer: "_3uK6cmDMXFX5jCG3fCz8NR",
      };
    },
    26416: (e) => {
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
    50747: (e) => {
      e.exports = { BreadContainer: "GkVFIKIAijTGzfSc4BEQl" };
    },
    13043: (e, t, a) => {
      "use strict";
      a.d(t, { p: () => c });
      var n = a(85556),
        o = a(47427),
        r = a(82493),
        l = a(4030),
        i = a(20417),
        s = a(37563),
        u = a(35643);
      function c(e) {
        const { children: t, navTreeRef: a } = e,
          c = (0, n._T)(e, ["children", "navTreeRef"]),
          d = o.useRef(),
          m = (0, i.BE)(d, a),
          p = (0, s.id)(),
          _ = window.__virtual_keyboard_client;
        if (p) {
          const e = window.__nav_tree_root;
          return o.createElement(
            r.Fe,
            Object.assign({}, c, {
              navTreeRef: m,
              secondary: !0,
              parentEmbeddedNavTree: e,
            }),
            o.createElement(
              u.o5,
              { factory: _ },
              o.createElement(l.O, null, t),
            ),
          );
        }
        return o.createElement(o.Fragment, null, t);
      }
    },
    89e3: (e, t, a) => {
      "use strict";
      a.d(t, { HO: () => u, S6: () => d });
      const n = 20,
        o = /^.*youtube[^v]+v=(.{11}).*/,
        r = /^.*youtu\.be\/(.{11}).*/,
        l = /^.*youtube.*\/embed\/(.{11}).*/,
        i = /^.*[?&]t=([^&]+)(?:&|$)/,
        s = /^(?:(?:([\d]+)h)?(?:([\d]+)m)?(?:([\d]+)s)?|([\d]+))$/;
      function u(e) {
        return !!c(e);
      }
      function c(e) {
        const t =
          (null == e ? void 0 : e.length) < n
            ? void 0
            : o.exec(e) || r.exec(e) || l.exec(e);
        return null == t ? void 0 : t[1];
      }
      function d(e) {
        const t = c(e);
        if (!t) return;
        const a = (function (e) {
            const t = i.exec(e);
            return null == t ? void 0 : t[1];
          })(e),
          n = a
            ? (function (e) {
                const t = s.exec(e);
                if (
                  !(
                    (null == t ? void 0 : t[1]) ||
                    (null == t ? void 0 : t[2]) ||
                    (null == t ? void 0 : t[3]) ||
                    (null == t ? void 0 : t[4])
                  )
                )
                  return;
                if (null == t ? void 0 : t[4])
                  return parseInt(null == t ? void 0 : t[4]);
                let a = 0;
                return (
                  (null == t ? void 0 : t[1]) && (a += 3600 * parseInt(t[1])),
                  (null == t ? void 0 : t[2]) && (a += 60 * parseInt(t[2])),
                  (null == t ? void 0 : t[3]) && (a += parseInt(t[3])),
                  a
                );
              })(a)
            : void 0;
        return { strVideoID: t, nStartSeconds: n };
      }
    },
    29292: (e, t, a) => {
      "use strict";
      a.d(t, { Me: () => u, Mx: () => d, XC: () => c });
      var n = a(85556),
        o = a(47427),
        r = a(82071),
        l = a(29480),
        i = a(35427),
        s = a(37563);
      a(22520);
      function u(e, t = 0, a) {
        const [n, u] = (0, o.useState)(r.j1.GetClanEventFromAnnouncementGID(e)),
          c = (0, l.T)("usePartnerEventByAnnouncementGID");
        return (
          (0, o.useEffect)(() => {
            if ((null == n ? void 0 : n.AnnouncementGID) != e) {
              r.j1.Init();
              const n = new i.K(s.JA.CLANSTEAMID);
              r.j1
                .LoadPartnerEventFromAnnoucementGIDAndClanSteamID(n, e, t, a)
                .then((e) => {
                  e && !c.token.reason && u(e);
                });
            }
          }, [e, t, a, n, c]),
          n
        );
      }
      function c(e) {
        const [t, a] = (0, o.useState)(r.j1.GetClanEventModel(e)),
          n = (0, l.T)("usePartnerEventByEventGID");
        return (
          (0, o.useEffect)(() => {
            (null == t ? void 0 : t.GID) != e &&
              (r.j1.Init(),
              r.j1
                .LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs([e], [], n)
                .then((t) => {
                  1 != (null == t ? void 0 : t.length) ||
                    t[0].GID != e ||
                    n.token.reason ||
                    a(t[0]);
                }));
          }, [e, t, n]),
          t
        );
      }
      function d(e, t, a) {
        const [s, u] = (0, o.useState)(r.j1.GetClanEventModel(t)),
          [c, d] = (0, o.useState)(!!e && !!t),
          [m, p] = (0, o.useState)(),
          _ = (0, l.T)("usePartnerEventByClanAccountAndEventGID");
        return (
          (0, o.useEffect)(() => {
            (() => {
              (0, n.mG)(this, void 0, void 0, function* () {
                var n, o;
                try {
                  if ((null == s ? void 0 : s.GID) != t) {
                    r.j1.Init();
                    const l = i.K.InitFromClanID(e);
                    let s;
                    try {
                      s =
                        yield r.j1.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                          l,
                          t,
                          0,
                          a,
                        );
                    } catch (e) {
                      p(
                        null ===
                          (o =
                            null === (n = null == e ? void 0 : e.response) ||
                            void 0 === n
                              ? void 0
                              : n.data) || void 0 === o
                          ? void 0
                          : o.err_msg,
                      );
                    }
                    _.token.reason || u(s);
                  }
                } finally {
                  d(!1);
                }
              });
            })();
          }, [e, t, s, a, _]),
          { eventModel: s, bLoading: c, sErrorMessage: m }
        );
      }
    },
    78910: (e, t, a) => {
      "use strict";
      a.d(t, {
        Bo: () => b,
        FG: () => w,
        N: () => I,
        P4: () => S,
        mb: () => E,
        yS: () => L,
      });
      var n = a(85556),
        o = a(80751),
        r = a.n(o),
        l = a(54842),
        i = a(47427),
        s = a(35427),
        u = a(93243),
        c = a(84270),
        d = a(77151),
        m = a(82071),
        p = a(50369),
        _ = a(83999),
        h = a(62210),
        v = a(16649),
        y = a(20417),
        f = a(37563);
      function g(e) {
        e.list_jsondata && "string" == typeof e.list_jsondata
          ? (e.list_jsondata = JSON.parse(e.list_jsondata))
          : ((0, h.X)(
              !e.list_jsondata,
              "Found unexpected ListDetails_t.list_jsondata type: " +
                typeof e.list_jsondata,
            ),
            (e.list_jsondata = {}));
      }
      const E = "0";
      function C(e, t) {
        (t.localized_flat_title = (0, _.LG)([], 31, null)),
          (t.localized_flat_blurb = (0, _.LG)([], 31, null)),
          (t.localized_flat_link = (0, _.LG)([], 31, null)),
          t.title !== E && (t.localized_flat_title[e] = t.title),
          t.blurb !== E && (t.localized_flat_blurb[e] = t.blurb),
          t.link !== E && (t.localized_flat_link[e] = t.link),
          t.title_localization.forEach((e) => {
            var a;
            (null === (a = e.localized_string) || void 0 === a
              ? void 0
              : a.length) > 0 &&
              (t.localized_flat_title[e.language] = e.localized_string);
          }),
          t.blurb_localization.forEach((e) => {
            var a;
            (null === (a = e.localized_string) || void 0 === a
              ? void 0
              : a.length) > 0 &&
              (t.localized_flat_blurb[e.language] = e.localized_string);
          }),
          t.link_localization.forEach((e) => {
            var a;
            (null === (a = e.localized_string) || void 0 === a
              ? void 0
              : a.length) > 0 &&
              (t.localized_flat_link[e.language] = e.localized_string);
          });
      }
      class b {
        GetListDetails(e) {
          return this.m_mapList.get(e);
        }
        GetAllSaleCurationLists(e) {
          return this.m_mapEventGIDToLists.get(e) || [];
        }
        GetClanAccountFromListID(e) {
          return this.m_mapListIDToClanAccount.get(e);
        }
        LoadListDetails(e, t, a) {
          var o;
          return (0, n.mG)(this, void 0, void 0, function* () {
            if (this.m_mapList.has(t)) return this.m_mapList.get(t);
            const n =
                f.De.STORE_BASE_URL +
                "curator/" +
                e.GetAccountID() +
                "/admin/ajaxgetlistdetails",
              l = { listid: t };
            try {
              const i = yield r().get(n, {
                params: l,
                cancelToken: null == a ? void 0 : a.token,
              });
              if (
                1 ==
                (null === (o = null == i ? void 0 : i.data) || void 0 === o
                  ? void 0
                  : o.success)
              ) {
                const a = Object.assign({}, i.data.list_details);
                return (
                  (0, h.X)(
                    t == (null == a ? void 0 : a.listid),
                    "Wanted" + t + "but got" + (null == a ? void 0 : a.listid),
                  ),
                  g(a),
                  C(i.data.curation_language, a),
                  this.m_mapList.set(t, a),
                  this.m_mapListIDToClanAccount.set(t, e.GetAccountID()),
                  a
                );
              }
            } catch (e) {
              const t = (0, v.l)(e);
              console.error(
                "CCuratorListStore.LoadListDetails: error on load: " +
                  t.strErrorMsg,
                t,
              );
            }
            return null;
          });
        }
        LoadMyFollowedSaleCurationLists(e, t, a) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            if (
              !f.L7.logged_in ||
              (d.jg.Get().BIsLoaded() &&
                0 == d.jg.Get().GetFollowedCuratorCount())
            )
              return [];
            const n =
                f.De.STORE_BASE_URL + "curators/ajaxgetmycuratorsalelists",
              o = {
                clan_account_id: e.GetAccountID(),
                clan_event_gid: t,
                origin: self.origin,
                curator_clan_account_followed: d.jg.Get().BIsLoaded()
                  ? d.jg.Get().GetFollowedCuratorsAccountID().join(",")
                  : void 0,
              };
            return this.InternalLoadSaleCuratorLists(
              n,
              o,
              "CCuratorListStore.LoadMyFollowedSaleCurationLists",
              e,
              t,
              a,
            );
          });
        }
        LoadAllSaleCurationLists(e, t, a) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            if (this.m_mapEventGIDToLists.has(t))
              return this.m_mapEventGIDToLists.get(t);
            const n = f.De.STORE_BASE_URL + "curators/ajaxfindcuratorlists",
              o = {
                clan_account_id: e.GetAccountID(),
                clan_event_gid: t,
                origin: self.origin,
              };
            return this.InternalLoadSaleCuratorLists(
              n,
              o,
              "CCuratorListStore.LoadAllSaleCurationLists",
              e,
              t,
              a,
            );
          });
        }
        InternalLoadSaleCuratorLists(e, t, a, o, i, s) {
          var u;
          return (0, n.mG)(this, void 0, void 0, function* () {
            try {
              const a = yield r().get(e, {
                params: t,
                cancelToken: null == s ? void 0 : s.token,
              });
              if (
                1 ==
                (null === (u = null == a ? void 0 : a.data) || void 0 === u
                  ? void 0
                  : u.success)
              ) {
                const e = new Array();
                return (
                  (0, l.z)(() => {
                    a.data.matches &&
                      a.data.matches.forEach((t) => {
                        t.multi_detail_lists.forEach((a) => {
                          this.m_mapListIDToClanAccount.set(
                            a.listid,
                            t.clan_account_id,
                          ),
                            g(a),
                            C(t.curation_language, a),
                            this.m_mapList.set(a.listid, a),
                            e.push(a);
                        });
                      }),
                      this.m_mapEventGIDToLists.set(i, e);
                  }),
                  e
                );
              }
            } catch (e) {
              const t = (0, v.l)(e);
              console.error(a + ": error on load: " + t.strErrorMsg, t);
            }
            return [];
          });
        }
        static Get() {
          return b.s_Singleton || (b.s_Singleton = new b()), b.s_Singleton;
        }
        constructor() {
          (this.m_mapList = new Map()),
            (this.m_mapEventGIDToLists = new Map()),
            (this.m_mapListIDToClanAccount = new Map()),
            (0, l.rC)(this),
            "dev" == f.De.WEB_UNIVERSE && (window.g_curatorListStore = this);
          let e = (0, f.kQ)("curatorlistdata", "application_config");
          ("dev" != f.De.WEB_UNIVERSE && "beta" != f.De.WEB_UNIVERSE) ||
            console.log(
              "DEV_DEBUG: CCuratorListStore loading list payload: " +
                (null == e ? void 0 : e.length),
              e,
            ),
            this.ValidateStoreDefault(e) &&
              (0, l.z)(() => {
                e.forEach((e) => {
                  e.multi_detail_lists.forEach((t) => {
                    g(t),
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
      function I(e, t) {
        const a = (0, y.NW)();
        return (
          (0, i.useEffect)(() => {
            if (b.Get().GetListDetails(t) || !e) return;
            const o = r().CancelToken.source();
            return (
              (() => {
                (0, n.mG)(this, void 0, void 0, function* () {
                  var n, r;
                  const l = yield b.Get().LoadListDetails(e, t);
                  if (!o.token.reason)
                    if (
                      null === (n = null == l ? void 0 : l.apps) || void 0 === n
                        ? void 0
                        : n.length
                    ) {
                      const e = [];
                      for (const t of l.apps) {
                        const a =
                          null ===
                            (r = null == t ? void 0 : t.recommended_app) ||
                          void 0 === r
                            ? void 0
                            : r.appid;
                        a && e.push({ id: a, type: "game" });
                      }
                      (0, p.qr)(
                        e,
                        Object.assign(Object.assign({}, p.NC), {
                          include_assets: !0,
                          include_release: !0,
                        }),
                      ),
                        c.ZP.Get().LoadAppIDsBatch(e.map((e) => e.id)),
                        a();
                    } else console.error("Found no list data");
                });
              })(),
              () => o.cancel("unmounting CuratorList")
            );
          }, [e, t, a]),
          b.Get().GetListDetails(t)
        );
      }
      function S(e) {
        const t = e && u.sV.GetClanInfoByClanAccountID(e),
          [a, n] = (0, i.useState)(!!t);
        return (
          (0, i.useEffect)(() => {
            if (a && e) {
              const t = s.K.InitFromClanID(e);
              u.sV.LoadClanInfoForClanSteamID(t).finally(() => {
                n(!0);
              });
            }
          }, [a, e]),
          t
        );
      }
      function w(e) {
        return (
          Boolean(null == e ? void 0 : e.sale_clan_event_gid) &&
          Boolean(null == e ? void 0 : e.sale_clan_steamid)
        );
      }
      function L(e) {
        const t = (0, y.NW)(),
          a = w(e) ? e.sale_clan_event_gid : null,
          o = a && m.j1.GetClanEventModel(a);
        return (
          (0, i.useEffect)(() => {
            if (o || !w(e)) return;
            const l = r().CancelToken.source();
            return (
              (() => {
                (0, n.mG)(this, void 0, void 0, function* () {
                  m.j1.Init(),
                    yield m.j1.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                      new s.K(e.sale_clan_steamid),
                      a,
                      0,
                    ),
                    l.token.reason || t();
                });
              })(),
              () => l.cancel("unmounting CuratorList")
            );
          }, [e, a, o, t]),
          o
        );
      }
      (0, n.gn)([l.LO], b.prototype, "m_mapList", void 0);
    },
    16390: (e, t, a) => {
      "use strict";
      a.d(t, { b: () => u });
      var n = a(47427),
        o = a(9573),
        r = a(13129),
        l = a(28017),
        i = a(82493),
        s = a(91618);
      function u(e) {
        const { crumbs: t, className: a } = e;
        return t && 0 != t.length
          ? n.createElement(
              "div",
              { className: (0, r.Z)(o.BreadContainer, a) },
              n.createElement(
                s.s,
                { className: "blockbg", "flow-children": "row" },
                t.map((e) => {
                  const t = new Array();
                  return (
                    e.url.startsWith("http")
                      ? t.push(
                          n.createElement(
                            i.IS,
                            { key: "anchor_" + e.name, href: e.url },
                            e.name,
                          ),
                        )
                      : t.push(
                          n.createElement(
                            l.rU,
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
    61582: (e, t, a) => {
      "use strict";
      a.d(t, { e: () => h, m: () => p });
      var n,
        o = a(85556),
        r = a(47427),
        l = a(83999),
        i = a(58112),
        s = a(20417),
        u = a(13129),
        c = a(46882);
      !(function (e) {
        (e[(e.NotLoaded = 0)] = "NotLoaded"),
          (e[(e.Loading = 1)] = "Loading"),
          (e[(e.Loaded = 2)] = "Loaded");
      })(n || (n = {}));
      let d = n.NotLoaded,
        m = [];
      function p(e) {
        if (d == n.Loaded) return void e();
        if (d == n.NotLoaded) {
          let e = document.createElement("script");
          e.src = "https://www.youtube.com/iframe_api";
          let t = document.getElementsByTagName("script")[0];
          t.parentNode.insertBefore(e, t), (window.onYouTubeIframeAPIReady = _);
        }
        m.findIndex((t) => e == t) < 0 && m.push(e);
      }
      function _() {
        d = n.Loaded;
        for (let e of m) e();
        m = [];
      }
      class h extends r.Component {
        constructor(e) {
          super(e),
            (this.m_strPlayerID = ""),
            (this.m_player = null),
            (this.m_playerContainer = null),
            (this.m_bPlayerReady = !1),
            (this.m_strPlayerID = "YoutubePlayer_" + h.s_nPlayerIndex++),
            (this.state = { bYoutubeLoaded: !1 });
        }
        componentWillUnmount() {
          var e;
          this.DestroyPlayer(), (e = this.OnYoutubeScriptsReady), l.Zf(m, e);
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
            o = !0 === e.showFullscreenBtn ? 1 : 0,
            r = !0 === e.playsInline ? 1 : 0;
          let l = {
              width: void 0 !== e.width ? String(e.width) : void 0,
              height: void 0 !== e.height ? String(e.height) : void 0,
              videoId: e.video,
              playerVars: {
                autoplay: t,
                showinfo: a,
                autohide: 1,
                fs: o,
                modestbranding: 1,
                rel: 0,
                playsinline: r,
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
            i = this.m_playerContainer.firstElementChild;
          (this.m_bPlayerReady = !1), (this.m_player = new YT.Player(i, l));
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
          const e = r.createElement(
            "div",
            {
              key: this.m_strPlayerID,
              ref: this.BindPlayerContainer,
              className: (0, u.Z)("YoutubePlayer", this.props.classnames),
            },
            r.createElement(c.V, { className: "YoutubePlayerThrobber" }),
          );
          return this.props.autopause
            ? r.createElement(i.h, { onLeave: this.OnPlayerLeftView }, e)
            : e;
        }
      }
      (h.s_nPlayerIndex = 0),
        (0, o.gn)([s.ak], h.prototype, "BindPlayerContainer", null),
        (0, o.gn)([s.ak], h.prototype, "OnYoutubeScriptsReady", null),
        (0, o.gn)([s.ak], h.prototype, "CreatePlayer", null),
        (0, o.gn)([s.ak], h.prototype, "OnPlayerReady", null),
        (0, o.gn)([s.ak], h.prototype, "OnPlayerStateChange", null),
        (0, o.gn)([s.ak], h.prototype, "OnError", null),
        (0, o.gn)([s.ak], h.prototype, "OnPlayerLeftView", null),
        (0, o.gn)([s.ak], h.prototype, "PlayVideo", null);
    },
    26028: (e, t, a) => {
      "use strict";
      a.d(t, { C: () => m, q: () => d });
      var n = a(47427),
        o = a(31659),
        r = a(62613),
        l = a(61582),
        i = a(13129),
        s = a(31846),
        u = a(46612),
        c = a.n(u);
      const d = (e) => {
          const t = ["maxresdefault", "mqdefault", "default"],
            [a, r] = n.useState(0);
          n.useEffect(() => r(0), [e.video]);
          const l = n.useRef();
          if (e.altImgWithFallback && e.altImgWithFallback.length > 0)
            return n.createElement(o.J, {
              className: e.className,
              srcs: e.altImgWithFallback,
            });
          if (e.altImg)
            return n.createElement("img", {
              src: e.altImg,
              className: e.className,
            });
          {
            const o =
                "https://img.youtube.com/vi/" + e.video + "/" + t[a] + ".jpg",
              s = () => {
                a + 1 < t.length && r(a + 1);
              },
              u = () => {
                l.current && l.current.naturalHeight < 91 && s();
              };
            return n.createElement("img", {
              ref: l,
              onLoad: u,
              onError: s,
              src: o,
              className: (0, i.Z)(c().YoutubePreviewImage, e.className),
            });
          }
        },
        m = (e) => {
          const [t, a] = n.useState(!1);
          if (
            (n.useEffect(() => {
              e.preloadYoutubeScripts && (0, l.m)(() => {});
            }, [e.preloadYoutubeScripts]),
            t)
          )
            return n.createElement(
              l.e,
              Object.assign({}, e, {
                classnames: (0, i.Z)(c().YoutubePlayer, e.classnames),
              }),
            );
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
                className: (0, i.Z)(
                  "YoutubePreviewContainer",
                  c().YoutubePreviewImage,
                  e.imageClassnames,
                ),
                onClick: t,
              },
              n.createElement(d, {
                className: "YoutubePreviewImage",
                altImgWithFallback: e.altImgWithFallback,
                altImg: e.altImg,
                video: e.video,
              }),
              n.createElement(
                "div",
                { className: "YoutubePreviewPlay" },
                n.createElement(r.GhU, null),
              ),
              n.createElement(
                "div",
                { className: "VideoHintText" },
                (0, s.Xx)("#EventCalendar_WatchYouTubeVideo"),
              ),
            );
          }
        };
    },
    33955: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { CuratorReviewListContainer: () => q, default: () => $ });
      var n = a(27605),
        o = a(47427),
        r = a(43090),
        l = a(77936),
        i = a(82493),
        s = a(13043),
        u = a(91618),
        c = a(89e3),
        d = a(29292),
        m = a(35427),
        p = a(31421),
        _ = a(85556),
        h = a(29480),
        v = a(80751),
        y = a.n(v),
        f = a(37563),
        g = a(16649);
      function E(e, t) {
        const [a, n] = (0, o.useState)(
            (null == e ? void 0 : e.BUsesContentHubForItemSource())
              ? new Set()
              : null,
          ),
          r = (0, h.T)("useFilteredAppViaContentHub");
        return (
          (0, o.useEffect)(() => {
            (null == e ? void 0 : e.BUsesContentHubForItemSource()) &&
              !a &&
              (function (e, t) {
                var a;
                return (0, _.mG)(this, void 0, void 0, function* () {
                  const n =
                      f.De.STORE_BASE_URL +
                      "contenthub/ajaxfilterappsbycontenthub",
                    o = {
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
                    const e = yield y().get(n, { params: o });
                    if (
                      1 ==
                      (null === (a = null == e ? void 0 : e.data) ||
                      void 0 === a
                        ? void 0
                        : a.success)
                    )
                      return e.data.appids.forEach((e) => l.add(e)), l;
                    r = (0, g.l)(e);
                  } catch (e) {
                    r = (0, g.l)(e);
                  }
                  return (
                    console.error(
                      "LoadContentHubFilteredApps failed: " +
                        (null == r ? void 0 : r.strErrorMsg),
                      r,
                    ),
                    l
                  );
                });
              })(e, t).then((e) => {
                r.token.reason || n(e);
              });
          }, [a, r.token.reason, e, t]),
          a
        );
      }
      var C = a(78910),
        b = a(41130),
        I = a(84270),
        S = a(77151),
        w = a(15690),
        L = a(86437),
        D = a(80886),
        P = a(74031),
        G = a(36998),
        N = a.n(G),
        R = a(62613),
        T = a(13129),
        k = a(46612);
      const B = new RegExp(
        "(?:https?://)?(?:www.)?twitch.tv/videos/([0-9]+)S*",
      );
      function A(e) {
        const t = B.exec(e);
        return (null == t ? void 0 : t.length) > 1 ? t[1] : null;
      }
      function F(e) {
        const {
            posterURL: t,
            videoid: a,
            muted: n,
            autoplay: r,
            bIsClipID: l,
            time: i,
            width: s,
            height: u,
          } = e,
          [c, d] = o.useState(Boolean(t)),
          m = null != r && null != r && r;
        if (c)
          return o.createElement(
            "div",
            {
              className: (0, T.Z)(
                "YoutubePreviewContainer",
                k.YoutubePreviewImage,
                e.imageClassnames,
              ),
              onClick: () => d(!1),
            },
            o.createElement("img", {
              className: (0, T.Z)("YoutubePreviewImage", k.YoutubePreviewImage),
              src:
                t ||
                f.De.COMMUNITY_CDN_URL +
                  "public/shared/images/responsive/youtube_16x9_placeholder.gif",
            }),
            o.createElement(
              "div",
              { className: "YoutubePreviewPlay" },
              o.createElement(R.GhU, null),
            ),
          );
        let p = (0, f.Kc)().replace("https://", "");
        const _ = p.indexOf("/");
        _ >= 0 && (p = p.substring(0, _));
        let h = l
          ? `https://clips.twitch.tv/embed?clip=${a}`
          : `https://player.twitch.tv/?video=${a}`;
        return (
          (h += `&parent=${p}&autoplay=${m}&muted=${Boolean(n)}`),
          i &&
            (h += `&time=${(function (e) {
              const t = Math.floor(e / 3600);
              e -= 60 * t * 60;
              const a = Math.floor(e / 60);
              return `${t}h${a}m${(e -= a * e)}s`;
            })(i)}`),
          o.createElement(
            "div",
            { className: (0, T.Z)("YoutubePlayer", N().TwitchPlayer) },
            o.createElement("img", {
              className: (0, T.Z)(
                "YoutubePreviewContainer",
                k.YoutubePreviewImage,
                e.imageClassnames,
              ),
              src:
                f.De.COMMUNITY_CDN_URL +
                "public/shared/images/responsive/youtube_16x9_placeholder.gif",
            }),
            o.createElement("iframe", {
              src: h,
              allowFullScreen: !0,
              frameBorder: 0,
              width: s || 460,
              height: u || 300,
            }),
          )
        );
      }
      var j = a(85305),
        Y = a(50369),
        x = a(85884),
        M = a(40833),
        O = a(46882),
        V = a(83059),
        z = a(26028),
        U = a(31846),
        Z = a(13499),
        W = a(26416),
        X = a.n(W),
        H = a(16390),
        K = a(50747);
      function Q(e) {
        const { clanInfo: t } = e,
          { curator_link: a, curator_medium_avatar: n } = (0, f.kQ)(
            "curator_header",
            "application_config",
          );
        return o.createElement(
          u.s,
          {
            className: "page_content_ctn",
            "flow-children": "column",
            autoFocus: !0,
          },
          o.createElement(
            "div",
            { className: "page_content" },
            o.createElement(
              u.s,
              { className: "list_header_area", "flow-children": "row" },
              o.createElement(
                "div",
                { className: "curator_avatar_image" },
                o.createElement(
                  i.IS,
                  { href: a },
                  o.createElement("img", {
                    className: "curator_avatar",
                    src: n,
                  }),
                ),
              ),
              o.createElement(
                "div",
                { className: "curator_details" },
                o.createElement(H.b, {
                  className: K.BreadContainer,
                  crumbs: (0, f.kQ)("breadcrumbs", "application_config"),
                }),
                o.createElement(
                  i.IS,
                  { className: "pageheader curator_name", href: a },
                  (0, U.Xx)("#SteamCurator_List_Header_List", t.group_name),
                ),
              ),
            ),
          ),
        );
      }
      const $ = function (e) {
        const t = (0, b.L)();
        return o.createElement(
          s.p,
          { navID: "StoreCuratorPageRoot", NavigationManager: t },
          o.createElement(q, { listid: e.listid }),
        );
      };
      function q(e) {
        const t = parseInt(
            (0, f.kQ)("curator_account_id", "application_config"),
          ),
          a = (0, C.P4)(t),
          n = (0, C.N)(null == a ? void 0 : a.clanSteamID, e.listid);
        return (
          (0, P.ue)(),
          n
            ? o.createElement(
                o.Fragment,
                null,
                o.createElement(Q, { clanInfo: a }),
                o.createElement(
                  "div",
                  { className: "page_content_ctn grayscale" },
                  o.createElement(
                    "div",
                    { className: "page_content" },
                    o.createElement(
                      "div",
                      { className: X().CuratorListCtn },
                      o.createElement(te, { listDetails: n }),
                      (0, C.FG)(n)
                        ? o.createElement(J, { listDetails: n })
                        : o.createElement(ee, {
                            listDetails: n,
                            rgListItems: n.apps,
                          }),
                      o.createElement(
                        "div",
                        { className: X().CuratorMoreCtn },
                        o.createElement(
                          "h2",
                          null,
                          (0, U.Xx)("#SteamCurator_ExploreMoreTitle"),
                        ),
                        o.createElement(
                          i.IS,
                          { href: a.vanity_url },
                          (0, U.kQ)("#SteamCurator_MoreReviews", a.group_name),
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
          [a, n] = (0, o.useState)(null),
          r = new m.K(t.sale_clan_steamid),
          { eventModel: l } = (0, d.Mx)(
            r.GetAccountID(),
            t.sale_clan_event_gid,
          ),
          i = (0, o.useMemo)(
            () => (t.apps || []).map((e) => e.recommended_app.appid),
            [t],
          ),
          s = E(l, i);
        return (
          (0, o.useEffect)(() => {
            var e, a;
            if (l)
              if (l.BUsesContentHubForItemSource())
                s &&
                  n(
                    null === (e = t.apps) || void 0 === e
                      ? void 0
                      : e.filter((e) => {
                          var t;
                          return s.has(
                            null === (t = e.recommended_app) || void 0 === t
                              ? void 0
                              : t.appid,
                          );
                        }),
                  );
              else {
                const e = l.GetSaleFeaturedApps();
                n(
                  null === (a = t.apps) || void 0 === a
                    ? void 0
                    : a.filter((t) => {
                        var a;
                        return e.has(
                          null === (a = t.recommended_app) || void 0 === a
                            ? void 0
                            : a.appid,
                        );
                      }),
                );
              }
          }, [t, l, s]),
          o.createElement(ee, { listDetails: t, rgListItems: a })
        );
      }
      function ee(e) {
        const { listDetails: t, rgListItems: a } = e,
          [n, r] = (0, o.useState)(0),
          [l, s] = (0, o.useState)(null),
          c = (0, h.T)("CuratorAppListDisplay");
        if (
          (o.useEffect(() => {
            a &&
              (r((null == a ? void 0 : a.length) || 0),
              S.jg
                .Get()
                .HintLoad()
                .then(() => {
                  const e = a.map((e) => e.recommended_app.appid);
                  w.Z.Get()
                    .QueueMultipleAppRequests(e, Y.NC)
                    .then(() => {
                      c.token.reason ||
                        s(
                          a.filter(
                            (e) =>
                              !(0, Y.TR)(
                                w.Z.Get().GetApp(e.recommended_app.appid),
                              ),
                          ),
                        );
                    })
                    .catch(() => {
                      c.token.reason || s([]);
                    });
                }));
          }, [a, c]),
          null == l)
        )
          return o.createElement(O.V, {
            string: (0, U.Xx)("#Loading"),
            position: "center",
            size: "medium",
          });
        const d = 1 == t.list_type;
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            u.s,
            {
              className: (0, T.Z)(X().CuratorList, d && X().CuratorListGrid),
              "flow-children": "grid",
            },
            l.map((e, a) =>
              o.createElement(ae, {
                key: "rec_" + e.recommended_app.appid,
                item: e,
                listDetails: t,
                bAutoFocus: 0 == a,
              }),
            ),
          ),
          Boolean(n > l.length) &&
            o.createElement(
              "div",
              null,
              o.createElement(
                "span",
                null,
                (0, U.kb)("#SteamCurator_Hidden", n - l.length),
                " ",
              ),
              o.createElement(
                i.IS,
                { href: f.De.STORE_BASE_URL + "account/preferences/" },
                (0, U.Xx)("#SteamCurator_Setting"),
              ),
            ),
        );
      }
      function te(e) {
        const { listDetails: t } = e,
          a = (0, C.yS)(t),
          n = (0, f.kQ)("showlisttitle", "application_config"),
          r = (0, f.kQ)("titleareaheight", "application_config"),
          s =
            t.list_jsondata.youtube_link &&
            (0, c.S6)(t.list_jsondata.youtube_link),
          u = t.list_jsondata.youtube_link && A(t.list_jsondata.youtube_link),
          d = (0, l.jM)(f.De.LANGUAGE),
          m = U.LZ.GetWithFallback(t.localized_flat_title, d),
          p = U.LZ.GetWithFallback(t.localized_flat_blurb, d),
          _ = U.LZ.GetWithFallback(t.localized_flat_link, d),
          h =
            a &&
            a.GetImageURL(
              (0, V.p)() ? "product_mobile_banner" : "product_banner",
              d,
            );
        return o.createElement(
          "div",
          { className: X().TopReviewInfo },
          Boolean(h) &&
            o.createElement(
              i.IS,
              { href: a.GetSaleURL() },
              o.createElement("img", { className: X().SaleBanner, src: h }),
            ),
          n && m && o.createElement("div", { className: X().Title }, m),
          n && p && o.createElement("div", { className: X().Blurb }, p),
          Boolean(r > 0) && o.createElement("div", { style: { height: r } }),
          s &&
            o.createElement(
              "div",
              { className: X().VideoReviewCtn },
              o.createElement(z.C, {
                video: s.strVideoID,
                startSeconds: s.nStartSeconds,
                autoplay: !0,
                autopause: !0,
                showFullscreenBtn: !0,
                controls: !0,
                preloadYoutubeScripts: !0,
                playsInline: !0,
                imageClassnames: X().YouTubePreviewImage,
              }),
            ),
          Boolean(u) &&
            o.createElement(
              "div",
              { className: X().VideoReviewCtn },
              o.createElement(F, {
                videoid: u,
                posterURL: "",
                imageClassnames: X().YouTubePreviewImage,
              }),
            ),
          _ && o.createElement(re, { url: _ }),
        );
      }
      const ae = (0, n.Pi)((e) => {
        var t, a;
        const { item: n, listDetails: r, bAutoFocus: l } = e,
          i = parseInt((0, f.kQ)("curator_account_id", "application_config")),
          s = (0, C.P4)(i),
          [d] = (0, D.vs)(
            null === (t = null == n ? void 0 : n.recommended_app) ||
              void 0 === t
              ? void 0
              : t.appid,
            { include_assets: !0, include_release: !0 },
          ),
          m = (0, o.useMemo)(
            () => ({
              id: null == d ? void 0 : d.GetID(),
              type: (0, L.Ds)(
                null == d ? void 0 : d.GetStoreItemType(),
                null == d ? void 0 : d.GetAppType(),
              ),
            }),
            [d],
          );
        if (!s || !d) return null;
        const {
            appid: p,
            link_url: _,
            blurb: h,
            time_recommended: v,
            recommendation_state: y,
          } = n.recommended_app,
          g = s.is_creator_home && !s.is_ogg,
          E =
            null === (a = r.list_jsondata.app_data) || void 0 === a
              ? void 0
              : a[p],
          b = _ && (0, c.S6)(_),
          S = _ && A(_),
          w = h != C.mb && h,
          P = I.ZP.Get().BHasDemoAppID(p),
          G = null == E ? void 0 : E.img_url,
          N = `curator_clanid=${s.clanAccountID}&curator_listid=${r.listid}`;
        return o.createElement(
          u.s,
          { className: X().CuratorReview, autoFocus: l },
          o.createElement(
            "div",
            { className: X().CapsuleCtn },
            Boolean(b || S)
              ? o.createElement(ne, {
                  strVideoID: (null == b ? void 0 : b.strVideoID) || S,
                  nStartSeconds: null == b ? void 0 : b.nStartSeconds,
                  info: m,
                  strImgOverrideUrl: G,
                  bShowDemoButton: P,
                  strExtraParams: N,
                  bTwitchVideo: Boolean(S),
                })
              : o.createElement(M.B, {
                  imageType: "header",
                  capsule: m,
                  bShowDemoButton: P,
                  strExtraParams: N,
                }),
          ),
          o.createElement(
            "div",
            { className: X().ReviewTextSection },
            o.createElement("div", { className: X().GameTitle }, d.GetName()),
            o.createElement(
              "div",
              { className: X().RecommendationTypeAndDate },
              o.createElement(oe, { type: y }),
              o.createElement(
                "div",
                { className: X().ReviewDate },
                g || !Boolean(v)
                  ? (0, U.Xx)(
                      "#EventModTile_ReleaseDate",
                      d.GetFormattedSteamReleaseDate(),
                    )
                  : (0, U.vX)(v),
              ),
            ),
            Boolean(w) &&
              o.createElement(
                "div",
                { className: X().ReviewBlurb },
                (0, U.Xx)("#SteamCurator_ReviewTextQuoted", w),
              ),
            Boolean(_) && o.createElement(re, { url: _ }),
          ),
        );
      });
      function ne(e) {
        const {
            strVideoID: t,
            nStartSeconds: a,
            info: n,
            strImgOverrideUrl: r,
            bShowDemoButton: l,
            strExtraParams: i,
            bTwitchVideo: s,
          } = e,
          [u] = (0, D.jk)(n.id, (0, L.TM)(n.type), { include_assets: !0 });
        return o.createElement(
          "div",
          { className: X().YouTubeCapsule },
          o.createElement(
            "div",
            { className: X().YouTubeCtn },
            s
              ? o.createElement(F, {
                  videoid: t,
                  posterURL: null == u ? void 0 : u.GetAssets().GetHeaderURL(),
                  imageClassnames: X().YouTubePreviewImage,
                  autoplay: !0,
                })
              : o.createElement(z.C, {
                  video: t,
                  startSeconds: a,
                  autoplay: !0,
                  autopause: !0,
                  showFullscreenBtn: !0,
                  controls: !0,
                  preloadYoutubeScripts: !0,
                  playsInline: !0,
                  imageClassnames: X().YouTubePreviewImage,
                  altImg: r,
                }),
          ),
          o.createElement(
            "div",
            { className: X().YouTubeCapsuleBottomBar },
            o.createElement(
              "div",
              { className: X().GameImageCtn },
              o.createElement(
                j.ll,
                {
                  item: n,
                  bShowDemoButton: l,
                  nDelayShowMs: 300,
                  strExtraParams: i,
                  hoverProps: {
                    direction: "overlay-center",
                    style: { minWidth: "300px" },
                  },
                },
                o.createElement("img", {
                  className: X().GameImage,
                  src:
                    null == u ? void 0 : u.GetAssets().GetLibraryCapsuleURL(),
                }),
              ),
            ),
            o.createElement(x.Hl, { info: n, strClassName: X().FullWidth }),
          ),
        );
      }
      function oe(e) {
        switch (e.type) {
          case 0:
            return o.createElement(
              "div",
              { className: X().Recommended },
              (0, U.Xx)("#SteamCurator_Recommended"),
            );
          case 1:
            return o.createElement(
              "div",
              { className: X().NotRecommended },
              (0, U.Xx)("#SteamCurator_NotRecommended"),
            );
          case 2:
            return o.createElement(
              "div",
              { className: X().Informational },
              (0, U.Xx)("#SteamCurator_Informational"),
            );
          default:
            return null;
        }
      }
      function re(e) {
        let t = (0, p.B1)(e.url);
        (0, r.A)(t) &&
          (t =
            (f.De.IN_CLIENT ? "steam://openurl_external/" : "") +
            f.De.COMMUNITY_BASE_URL +
            "linkfilter/?url=" +
            t);
        const a = (0, Z.FM)(e.url),
          n = (0, c.HO)(e.url);
        return o.createElement(
          "div",
          { className: X().FullReviewLink },
          o.createElement(
            i.IS,
            {
              className: X().FullReviewAnchor,
              href: t,
              rel: "noopener nofollow",
              preferredFocus: !1,
              autoFocus: !1,
            },
            (0, U.Xx)(
              n
                ? "#SteamCurator_WatchFullReview"
                : "#SteamCurator_ReadFullReview",
            ),
          ),
          o.createElement(
            "div",
            { className: X().FullReviewDomain },
            (0, U.Xx)("#SteamCurator_ReviewLinkHostnameBracketed", a),
          ),
        );
      }
    },
  },
]);
