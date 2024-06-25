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
      var n = a(47427),
        r = a(82493),
        o = a(4030),
        s = a(20417),
        l = a(37563),
        i = a(35643);
      function c(e) {
        const { children: t, navTreeRef: a, ...c } = e,
          u = n.useRef(),
          m = (0, s.BE)(u, a),
          d = (0, l.id)(),
          p = window.__virtual_keyboard_client;
        if (d) {
          const e = window.__nav_tree_root;
          return n.createElement(
            r.Fe,
            { ...c, navTreeRef: m, secondary: !0, parentEmbeddedNavTree: e },
            n.createElement(
              i.o5,
              { factory: p },
              n.createElement(o.O, null, t),
            ),
          );
        }
        return n.createElement(n.Fragment, null, t);
      }
    },
    89e3: (e, t, a) => {
      "use strict";
      a.d(t, { HO: () => c, S6: () => m });
      const n = 20,
        r = /^.*youtube[^v]+v=(.{11}).*/,
        o = /^.*youtu\.be\/(.{11}).*/,
        s = /^.*youtube.*\/embed\/(.{11}).*/,
        l = /^.*[?&]t=([^&]+)(?:&|$)/,
        i = /^(?:(?:([\d]+)h)?(?:([\d]+)m)?(?:([\d]+)s)?|([\d]+))$/;
      function c(e) {
        return !!u(e);
      }
      function u(e) {
        const t = e?.length < n ? void 0 : r.exec(e) || o.exec(e) || s.exec(e);
        return t?.[1];
      }
      function m(e) {
        const t = u(e);
        if (!t) return;
        const a = (function (e) {
            const t = l.exec(e);
            return t?.[1];
          })(e),
          n = a
            ? (function (e) {
                const t = i.exec(e);
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
    29292: (e, t, a) => {
      "use strict";
      a.d(t, { Me: () => i, Mx: () => u, XC: () => c });
      var n = a(47427),
        r = a(82071),
        o = a(29480),
        s = a(35427),
        l = a(37563);
      a(22520);
      function i(e, t = 0, a) {
        const [i, c] = (0, n.useState)(r.j1.GetClanEventFromAnnouncementGID(e)),
          u = (0, o.T)("usePartnerEventByAnnouncementGID");
        return (
          (0, n.useEffect)(() => {
            if (i?.AnnouncementGID != e) {
              r.j1.Init();
              const n = new s.K(l.JA.CLANSTEAMID);
              r.j1
                .LoadPartnerEventFromAnnoucementGIDAndClanSteamID(n, e, t, a)
                .then((e) => {
                  e && !u.token.reason && c(e);
                });
            }
          }, [e, t, a, i, u]),
          i
        );
      }
      function c(e) {
        const [t, a] = (0, n.useState)(r.j1.GetClanEventModel(e)),
          s = (0, o.T)("usePartnerEventByEventGID");
        return (
          (0, n.useEffect)(() => {
            t?.GID != e &&
              (r.j1.Init(),
              r.j1
                .LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs([e], [], s)
                .then((t) => {
                  1 != t?.length || t[0].GID != e || s.token.reason || a(t[0]);
                }));
          }, [e, t, s]),
          t
        );
      }
      function u(e, t, a) {
        const [l, i] = (0, n.useState)(r.j1.GetClanEventModel(t)),
          [c, u] = (0, n.useState)(!!e && !!t),
          [m, d] = (0, n.useState)(),
          p = (0, o.T)("usePartnerEventByClanAccountAndEventGID");
        return (
          (0, n.useEffect)(() => {
            (async () => {
              try {
                if (l?.GID != t) {
                  r.j1.Init();
                  const n = s.K.InitFromClanID(e);
                  let o;
                  try {
                    o =
                      await r.j1.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                        n,
                        t,
                        0,
                        a,
                      );
                  } catch (e) {
                    d(e?.response?.data?.err_msg);
                  }
                  p.token.reason || i(o);
                }
              } finally {
                u(!1);
              }
            })();
          }, [e, t, l, a, p]),
          { eventModel: l, bLoading: c, sErrorMessage: m }
        );
      }
    },
    78910: (e, t, a) => {
      "use strict";
      a.d(t, {
        Bo: () => I,
        FG: () => w,
        N: () => b,
        P4: () => S,
        mb: () => v,
        yS: () => L,
      });
      var n = a(85556),
        r = a(80751),
        o = a.n(r),
        s = a(54842),
        l = a(47427),
        i = a(35427),
        c = a(93243),
        u = a(84270),
        m = a(77151),
        d = a(82071),
        p = a(50369),
        _ = a(87225),
        h = a(62210),
        y = a(16649),
        g = a(20417),
        f = a(37563);
      function E(e) {
        e.list_jsondata && "string" == typeof e.list_jsondata
          ? (e.list_jsondata = JSON.parse(e.list_jsondata))
          : ((0, h.X)(
              !e.list_jsondata,
              "Found unexpected ListDetails_t.list_jsondata type: " +
                typeof e.list_jsondata,
            ),
            (e.list_jsondata = {}));
      }
      const v = "0";
      function C(e, t) {
        (t.localized_flat_title = (0, _.LG)([], 31, null)),
          (t.localized_flat_blurb = (0, _.LG)([], 31, null)),
          (t.localized_flat_link = (0, _.LG)([], 31, null)),
          t.title !== v && (t.localized_flat_title[e] = t.title),
          t.blurb !== v && (t.localized_flat_blurb[e] = t.blurb),
          t.link !== v && (t.localized_flat_link[e] = t.link),
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
              f.De.STORE_BASE_URL +
              "curator/" +
              e.GetAccountID() +
              "/admin/ajaxgetlistdetails",
            r = { listid: t };
          try {
            const s = await o().get(n, { params: r, cancelToken: a?.token });
            if (1 == s?.data?.success) {
              const a = { ...s.data.list_details };
              return (
                (0, h.X)(t == a?.listid, "Wanted" + t + "but got" + a?.listid),
                E(a),
                C(s.data.curation_language, a),
                this.m_mapList.set(t, a),
                this.m_mapListIDToClanAccount.set(t, e.GetAccountID()),
                a
              );
            }
          } catch (e) {
            const t = (0, y.l)(e);
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
            !f.L7.logged_in ||
            (m.jg.Get().BIsLoaded() &&
              0 == m.jg.Get().GetFollowedCuratorCount())
          )
            return [];
          const n = f.De.STORE_BASE_URL + "curators/ajaxgetmycuratorsalelists",
            r = {
              clan_account_id: e.GetAccountID(),
              clan_event_gid: t,
              origin: self.origin,
              curator_clan_account_followed: m.jg.Get().BIsLoaded()
                ? m.jg.Get().GetFollowedCuratorsAccountID().join(",")
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
          const n = f.De.STORE_BASE_URL + "curators/ajaxfindcuratorlists",
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
        async InternalLoadSaleCuratorLists(e, t, a, n, r, l) {
          try {
            const a = await o().get(e, { params: t, cancelToken: l?.token });
            if (1 == a?.data?.success) {
              const e = new Array();
              return (
                (0, s.z)(() => {
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
            const t = (0, y.l)(e);
            console.error(a + ": error on load: " + t.strErrorMsg, t);
          }
          return [];
        }
        static s_Singleton;
        static Get() {
          return I.s_Singleton || (I.s_Singleton = new I()), I.s_Singleton;
        }
        constructor() {
          (0, s.rC)(this),
            "dev" == f.De.WEB_UNIVERSE && (window.g_curatorListStore = this);
          let e = (0, f.kQ)("curatorlistdata", "application_config");
          ("dev" != f.De.WEB_UNIVERSE && "beta" != f.De.WEB_UNIVERSE) ||
            console.log(
              "DEV_DEBUG: CCuratorListStore loading list payload: " + e?.length,
              e,
            ),
            this.ValidateStoreDefault(e) &&
              (0, s.z)(() => {
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
      function b(e, t) {
        const a = (0, g.NW)();
        return (
          (0, l.useEffect)(() => {
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
                    (0, p.qr)(e, {
                      ...p.NC,
                      include_assets: !0,
                      include_release: !0,
                    }),
                      u.ZP.Get().LoadAppIDsBatch(e.map((e) => e.id)),
                      a();
                  } else console.error("Found no list data");
              })(),
              () => n.cancel("unmounting CuratorList")
            );
          }, [e, t, a]),
          I.Get().GetListDetails(t)
        );
      }
      function S(e) {
        const t = e && c.sV.GetClanInfoByClanAccountID(e),
          [a, n] = (0, l.useState)(!!t);
        return (
          (0, l.useEffect)(() => {
            if (a && e) {
              const t = i.K.InitFromClanID(e);
              c.sV.LoadClanInfoForClanSteamID(t).finally(() => {
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
      function L(e) {
        const t = (0, g.NW)(),
          a = w(e) ? e.sale_clan_event_gid : null,
          n = a && d.j1.GetClanEventModel(a);
        return (
          (0, l.useEffect)(() => {
            if (n || !w(e)) return;
            const r = o().CancelToken.source();
            return (
              (async () => {
                d.j1.Init(),
                  await d.j1.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                    new i.K(e.sale_clan_steamid),
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
      (0, n.gn)([s.LO], I.prototype, "m_mapList", void 0);
    },
    16390: (e, t, a) => {
      "use strict";
      a.d(t, { b: () => c });
      var n = a(47427),
        r = a(9573),
        o = a(13129),
        s = a(28017),
        l = a(82493),
        i = a(91618);
      function c(e) {
        const { crumbs: t, className: a } = e;
        return t && 0 != t.length
          ? n.createElement(
              "div",
              { className: (0, o.Z)(r.BreadContainer, a) },
              n.createElement(
                i.s,
                { className: "blockbg", "flow-children": "row" },
                t.map((e) => {
                  const t = new Array();
                  return (
                    e.url.startsWith("http")
                      ? t.push(
                          n.createElement(
                            l.IS,
                            { key: "anchor_" + e.name, href: e.url },
                            e.name,
                          ),
                        )
                      : t.push(
                          n.createElement(
                            s.rU,
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
        r = a(85556),
        o = a(47427),
        s = a(87225),
        l = a(58112),
        i = a(20417),
        c = a(13129),
        u = a(46882);
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
          this.DestroyPlayer(), (e = this.OnYoutubeScriptsReady), s.Zf(d, e);
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
          let s = {
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
            l = this.m_playerContainer.firstElementChild;
          (this.m_bPlayerReady = !1), (this.m_player = new YT.Player(l, s));
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
              className: (0, c.Z)("YoutubePlayer", this.props.classnames),
            },
            o.createElement(u.V, { className: "YoutubePlayerThrobber" }),
          );
          return this.props.autopause
            ? o.createElement(l.h, { onLeave: this.OnPlayerLeftView }, e)
            : e;
        }
      }
      (0, r.gn)([i.ak], h.prototype, "BindPlayerContainer", null),
        (0, r.gn)([i.ak], h.prototype, "OnYoutubeScriptsReady", null),
        (0, r.gn)([i.ak], h.prototype, "CreatePlayer", null),
        (0, r.gn)([i.ak], h.prototype, "OnPlayerReady", null),
        (0, r.gn)([i.ak], h.prototype, "OnPlayerStateChange", null),
        (0, r.gn)([i.ak], h.prototype, "OnError", null),
        (0, r.gn)([i.ak], h.prototype, "OnPlayerLeftView", null),
        (0, r.gn)([i.ak], h.prototype, "PlayVideo", null);
    },
    26028: (e, t, a) => {
      "use strict";
      a.d(t, { C: () => d, q: () => m });
      var n = a(47427),
        r = a(31659),
        o = a(62613),
        s = a(61582),
        l = a(13129),
        i = a(31846),
        c = a(46612),
        u = a.n(c);
      const m = (e) => {
          const t = ["maxresdefault", "mqdefault", "default"],
            [a, o] = n.useState(0);
          n.useEffect(() => o(0), [e.video]);
          const s = n.useRef();
          if (e.altImgWithFallback && e.altImgWithFallback.length > 0)
            return n.createElement(r.J, {
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
              i = () => {
                a + 1 < t.length && o(a + 1);
              },
              c = () => {
                s.current && s.current.naturalHeight < 91 && i();
              };
            return n.createElement("img", {
              ref: s,
              onLoad: c,
              onError: i,
              src: r,
              className: (0, l.Z)(u().YoutubePreviewImage, e.className),
            });
          }
        },
        d = (e) => {
          const [t, a] = n.useState(!1);
          if (
            (n.useEffect(() => {
              e.preloadYoutubeScripts && (0, s.m)(() => {});
            }, [e.preloadYoutubeScripts]),
            t)
          )
            return n.createElement(s.e, {
              ...e,
              classnames: (0, l.Z)(u().YoutubePlayer, e.classnames),
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
                className: (0, l.Z)(
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
                n.createElement(o.GhU, null),
              ),
              n.createElement(
                "div",
                { className: "VideoHintText" },
                (0, i.Xx)("#EventCalendar_WatchYouTubeVideo"),
              ),
            );
          }
        };
    },
    33955: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { CuratorReviewListContainer: () => $, default: () => Q });
      var n = a(27605),
        r = a(47427),
        o = a(43090),
        s = a(77936),
        l = a(82493),
        i = a(13043),
        c = a(91618),
        u = a(89e3),
        m = a(29292),
        d = a(35427),
        p = a(31421),
        _ = a(29480),
        h = a(80751),
        y = a.n(h),
        g = a(37563),
        f = a(16649);
      function E(e, t) {
        const [a, n] = (0, r.useState)(
            e?.BUsesContentHubForItemSource() ? new Set() : null,
          ),
          o = (0, _.T)("useFilteredAppViaContentHub");
        return (
          (0, r.useEffect)(() => {
            e?.BUsesContentHubForItemSource() &&
              !a &&
              (async function (e, t) {
                const a =
                    g.De.STORE_BASE_URL +
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
                  const e = await y().get(a, { params: n });
                  if (1 == e?.data?.success)
                    return e.data.appids.forEach((e) => o.add(e)), o;
                  r = (0, f.l)(e);
                } catch (e) {
                  r = (0, f.l)(e);
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
      var v = a(78910),
        C = a(41130),
        I = a(84270),
        b = a(77151),
        S = a(15690),
        w = a(86437),
        L = a(80886),
        D = a(74031),
        P = a(36998),
        N = a.n(P),
        R = a(62613),
        G = a(13129),
        k = a(46612);
      const T = new RegExp(
        "(?:https?://)?(?:www.)?twitch.tv/videos/([0-9]+)S*",
      );
      function B(e) {
        const t = T.exec(e);
        return t?.length > 1 ? t[1] : null;
      }
      function A(e) {
        const {
            posterURL: t,
            videoid: a,
            muted: n,
            autoplay: o,
            bIsClipID: s,
            time: l,
            width: i,
            height: c,
          } = e,
          [u, m] = r.useState(Boolean(t)),
          d = null != o && null != o && o;
        if (u)
          return r.createElement(
            "div",
            {
              className: (0, G.Z)(
                "YoutubePreviewContainer",
                k.YoutubePreviewImage,
                e.imageClassnames,
              ),
              onClick: () => m(!1),
            },
            r.createElement("img", {
              className: (0, G.Z)("YoutubePreviewImage", k.YoutubePreviewImage),
              src:
                t ||
                g.De.COMMUNITY_CDN_URL +
                  "public/shared/images/responsive/youtube_16x9_placeholder.gif",
            }),
            r.createElement(
              "div",
              { className: "YoutubePreviewPlay" },
              r.createElement(R.GhU, null),
            ),
          );
        let p = (0, g.Kc)().replace("https://", "");
        const _ = p.indexOf("/");
        _ >= 0 && (p = p.substring(0, _));
        let h = s
          ? `https://clips.twitch.tv/embed?clip=${a}`
          : `https://player.twitch.tv/?video=${a}`;
        return (
          (h += `&parent=${p}&autoplay=${d}&muted=${Boolean(n)}`),
          l &&
            (h += `&time=${(function (e) {
              const t = Math.floor(e / 3600);
              e -= 60 * t * 60;
              const a = Math.floor(e / 60);
              return `${t}h${a}m${(e -= a * e)}s`;
            })(l)}`),
          r.createElement(
            "div",
            { className: (0, G.Z)("YoutubePlayer", N().TwitchPlayer) },
            r.createElement("img", {
              className: (0, G.Z)(
                "YoutubePreviewContainer",
                k.YoutubePreviewImage,
                e.imageClassnames,
              ),
              src:
                g.De.COMMUNITY_CDN_URL +
                "public/shared/images/responsive/youtube_16x9_placeholder.gif",
            }),
            r.createElement("iframe", {
              src: h,
              allowFullScreen: !0,
              frameBorder: 0,
              width: i || 460,
              height: c || 300,
            }),
          )
        );
      }
      var F = a(85305),
        Y = a(50369),
        x = a(85884),
        j = a(40833),
        M = a(46882),
        V = a(83059),
        O = a(26028),
        z = a(31846),
        U = a(13499),
        Z = a(26416),
        W = a.n(Z),
        X = a(16390),
        H = a(50747);
      function K(e) {
        const { clanInfo: t } = e,
          { curator_link: a, curator_medium_avatar: n } = (0, g.kQ)(
            "curator_header",
            "application_config",
          );
        return r.createElement(
          c.s,
          {
            className: "page_content_ctn",
            "flow-children": "column",
            autoFocus: !0,
          },
          r.createElement(
            "div",
            { className: "page_content" },
            r.createElement(
              c.s,
              { className: "list_header_area", "flow-children": "row" },
              r.createElement(
                "div",
                { className: "curator_avatar_image" },
                r.createElement(
                  l.IS,
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
                r.createElement(X.b, {
                  className: H.BreadContainer,
                  crumbs: (0, g.kQ)("breadcrumbs", "application_config"),
                }),
                r.createElement(
                  l.IS,
                  { className: "pageheader curator_name", href: a },
                  (0, z.Xx)("#SteamCurator_List_Header_List", t.group_name),
                ),
              ),
            ),
          ),
        );
      }
      const Q = function (e) {
        const t = (0, C.L)();
        return r.createElement(
          i.p,
          { navID: "StoreCuratorPageRoot", NavigationManager: t },
          r.createElement($, { listid: e.listid }),
        );
      };
      function $(e) {
        const t = parseInt(
            (0, g.kQ)("curator_account_id", "application_config"),
          ),
          a = (0, v.P4)(t),
          n = (0, v.N)(a?.clanSteamID, e.listid);
        return (
          (0, D.ue)(),
          n
            ? r.createElement(
                r.Fragment,
                null,
                r.createElement(K, { clanInfo: a }),
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
                      (0, v.FG)(n)
                        ? r.createElement(q, { listDetails: n })
                        : r.createElement(J, {
                            listDetails: n,
                            rgListItems: n.apps,
                          }),
                      r.createElement(
                        "div",
                        { className: W().CuratorMoreCtn },
                        r.createElement(
                          "h2",
                          null,
                          (0, z.Xx)("#SteamCurator_ExploreMoreTitle"),
                        ),
                        r.createElement(
                          l.IS,
                          { href: a.vanity_url },
                          (0, z.kQ)("#SteamCurator_MoreReviews", a.group_name),
                        ),
                      ),
                    ),
                  ),
                ),
              )
            : null
        );
      }
      function q(e) {
        const { listDetails: t } = e,
          [a, n] = (0, r.useState)(null),
          o = new d.K(t.sale_clan_steamid),
          { eventModel: s } = (0, m.Mx)(
            o.GetAccountID(),
            t.sale_clan_event_gid,
          ),
          l = (0, r.useMemo)(
            () => (t.apps || []).map((e) => e.recommended_app.appid),
            [t],
          ),
          i = E(s, l);
        return (
          (0, r.useEffect)(() => {
            if (s)
              if (s.BUsesContentHubForItemSource())
                i && n(t.apps?.filter((e) => i.has(e.recommended_app?.appid)));
              else {
                const e = s.GetSaleFeaturedApps();
                n(t.apps?.filter((t) => e.has(t.recommended_app?.appid)));
              }
          }, [t, s, i]),
          r.createElement(J, { listDetails: t, rgListItems: a })
        );
      }
      function J(e) {
        const { listDetails: t, rgListItems: a } = e,
          [n, o] = (0, r.useState)(0),
          [s, i] = (0, r.useState)(null),
          u = (0, _.T)("CuratorAppListDisplay");
        if (
          (r.useEffect(() => {
            a &&
              (o(a?.length || 0),
              b.jg
                .Get()
                .HintLoad()
                .then(() => {
                  const e = a.map((e) => e.recommended_app.appid);
                  S.Z.Get()
                    .QueueMultipleAppRequests(e, Y.NC)
                    .then(() => {
                      u.token.reason ||
                        i(
                          a.filter(
                            (e) =>
                              !(0, Y.TR)(
                                S.Z.Get().GetApp(e.recommended_app.appid),
                              ),
                          ),
                        );
                    })
                    .catch(() => {
                      u.token.reason || i([]);
                    });
                }));
          }, [a, u]),
          null == s)
        )
          return r.createElement(M.V, {
            string: (0, z.Xx)("#Loading"),
            position: "center",
            size: "medium",
          });
        const m = 1 == t.list_type;
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            c.s,
            {
              className: (0, G.Z)(W().CuratorList, m && W().CuratorListGrid),
              "flow-children": "grid",
            },
            s.map((e, a) =>
              r.createElement(te, {
                key: "rec_" + e.recommended_app.appid,
                item: e,
                listDetails: t,
                bAutoFocus: 0 == a,
              }),
            ),
          ),
          Boolean(n > s.length) &&
            r.createElement(
              "div",
              null,
              r.createElement(
                "span",
                null,
                (0, z.kb)("#SteamCurator_Hidden", n - s.length),
                " ",
              ),
              r.createElement(
                l.IS,
                { href: g.De.STORE_BASE_URL + "account/preferences/" },
                (0, z.Xx)("#SteamCurator_Setting"),
              ),
            ),
        );
      }
      function ee(e) {
        const { listDetails: t } = e,
          a = (0, v.yS)(t),
          n = (0, g.kQ)("showlisttitle", "application_config"),
          o = (0, g.kQ)("titleareaheight", "application_config"),
          i =
            t.list_jsondata.youtube_link &&
            (0, u.S6)(t.list_jsondata.youtube_link),
          c = t.list_jsondata.youtube_link && B(t.list_jsondata.youtube_link),
          m = (0, s.jM)(g.De.LANGUAGE),
          d = z.LZ.GetWithFallback(t.localized_flat_title, m),
          p = z.LZ.GetWithFallback(t.localized_flat_blurb, m),
          _ = z.LZ.GetWithFallback(t.localized_flat_link, m),
          h =
            a &&
            a.GetImageURL(
              (0, V.p)() ? "product_mobile_banner" : "product_banner",
              m,
            );
        return r.createElement(
          "div",
          { className: W().TopReviewInfo },
          Boolean(h) &&
            r.createElement(
              l.IS,
              { href: a.GetSaleURL() },
              r.createElement("img", { className: W().SaleBanner, src: h }),
            ),
          n && d && r.createElement("div", { className: W().Title }, d),
          n && p && r.createElement("div", { className: W().Blurb }, p),
          Boolean(o > 0) && r.createElement("div", { style: { height: o } }),
          i &&
            r.createElement(
              "div",
              { className: W().VideoReviewCtn },
              r.createElement(O.C, {
                video: i.strVideoID,
                startSeconds: i.nStartSeconds,
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
              r.createElement(A, {
                videoid: c,
                posterURL: "",
                imageClassnames: W().YouTubePreviewImage,
              }),
            ),
          _ && r.createElement(re, { url: _ }),
        );
      }
      const te = (0, n.Pi)((e) => {
        const { item: t, listDetails: a, bAutoFocus: n } = e,
          o = parseInt((0, g.kQ)("curator_account_id", "application_config")),
          s = (0, v.P4)(o),
          [l] = (0, L.vs)(t?.recommended_app?.appid, {
            include_assets: !0,
            include_release: !0,
          }),
          i = (0, r.useMemo)(
            () => ({
              id: l?.GetID(),
              type: (0, w.Ds)(l?.GetStoreItemType(), l?.GetAppType()),
            }),
            [l],
          );
        if (!s || !l) return null;
        const {
            appid: m,
            link_url: d,
            blurb: p,
            time_recommended: _,
            recommendation_state: h,
          } = t.recommended_app,
          y = s.is_creator_home && !s.is_ogg,
          f = a.list_jsondata.app_data?.[m],
          E = d && (0, u.S6)(d),
          C = d && B(d),
          b = p != v.mb && p,
          S = I.ZP.Get().BHasDemoAppID(m),
          D = f?.img_url,
          P = `curator_clanid=${s.clanAccountID}&curator_listid=${a.listid}`;
        return r.createElement(
          c.s,
          { className: W().CuratorReview, autoFocus: n },
          r.createElement(
            "div",
            { className: W().CapsuleCtn },
            Boolean(E || C)
              ? r.createElement(ae, {
                  strVideoID: E?.strVideoID || C,
                  nStartSeconds: E?.nStartSeconds,
                  info: i,
                  strImgOverrideUrl: D,
                  bShowDemoButton: S,
                  strExtraParams: P,
                  bTwitchVideo: Boolean(C),
                })
              : r.createElement(j.B, {
                  imageType: "header",
                  capsule: i,
                  bShowDemoButton: S,
                  strExtraParams: P,
                }),
          ),
          r.createElement(
            "div",
            { className: W().ReviewTextSection },
            r.createElement("div", { className: W().GameTitle }, l.GetName()),
            r.createElement(
              "div",
              { className: W().RecommendationTypeAndDate },
              r.createElement(ne, { type: h }),
              r.createElement(
                "div",
                { className: W().ReviewDate },
                y || !Boolean(_)
                  ? (0, z.Xx)(
                      "#EventModTile_ReleaseDate",
                      l.GetFormattedSteamReleaseDate(),
                    )
                  : (0, z.vX)(_),
              ),
            ),
            Boolean(b) &&
              r.createElement(
                "div",
                { className: W().ReviewBlurb },
                (0, z.Xx)("#SteamCurator_ReviewTextQuoted", b),
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
            bShowDemoButton: s,
            strExtraParams: l,
            bTwitchVideo: i,
          } = e,
          [c] = (0, L.jk)(n.id, (0, w.TM)(n.type), { include_assets: !0 });
        return r.createElement(
          "div",
          { className: W().YouTubeCapsule },
          r.createElement(
            "div",
            { className: W().YouTubeCtn },
            i
              ? r.createElement(A, {
                  videoid: t,
                  posterURL: c?.GetAssets().GetHeaderURL(),
                  imageClassnames: W().YouTubePreviewImage,
                  autoplay: !0,
                })
              : r.createElement(O.C, {
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
                F.ll,
                {
                  item: n,
                  bShowDemoButton: s,
                  nDelayShowMs: 300,
                  strExtraParams: l,
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
            r.createElement(x.Hl, { info: n, strClassName: W().FullWidth }),
          ),
        );
      }
      function ne(e) {
        switch (e.type) {
          case 0:
            return r.createElement(
              "div",
              { className: W().Recommended },
              (0, z.Xx)("#SteamCurator_Recommended"),
            );
          case 1:
            return r.createElement(
              "div",
              { className: W().NotRecommended },
              (0, z.Xx)("#SteamCurator_NotRecommended"),
            );
          case 2:
            return r.createElement(
              "div",
              { className: W().Informational },
              (0, z.Xx)("#SteamCurator_Informational"),
            );
          default:
            return null;
        }
      }
      function re(e) {
        let t = (0, p.B1)(e.url);
        (0, o.A)(t) &&
          (t =
            (g.De.IN_CLIENT ? "steam://openurl_external/" : "") +
            g.De.COMMUNITY_BASE_URL +
            "linkfilter/?url=" +
            t);
        const a = (0, U.FM)(e.url),
          n = (0, u.HO)(e.url);
        return r.createElement(
          "div",
          { className: W().FullReviewLink },
          r.createElement(
            l.IS,
            {
              className: W().FullReviewAnchor,
              href: t,
              rel: "noopener nofollow",
              preferredFocus: !1,
              autoFocus: !1,
            },
            (0, z.Xx)(
              n
                ? "#SteamCurator_WatchFullReview"
                : "#SteamCurator_ReadFullReview",
            ),
          ),
          r.createElement(
            "div",
            { className: W().FullReviewDomain },
            (0, z.Xx)("#SteamCurator_ReviewLinkHostnameBracketed", a),
          ),
        );
      }
    },
  },
]);
