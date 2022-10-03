/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [3207],
  {
    99312: (e) => {
      e.exports = {
        VideoReviewCtn: "twitchembed_VideoReviewCtn_nNaTz",
        YouTubePreviewImage: "twitchembed_YouTubePreviewImage__mxmF",
        TwitchPlayer: "twitchembed_TwitchPlayer_Ny5PH",
      };
    },
    86196: (e) => {
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
    38547: (e) => {
      e.exports = { BreadContainer: "curatorminiheader_BreadContainer_GkVFI" };
    },
    34425: (e, t, a) => {
      "use strict";
      a.d(t, { p: () => c });
      var n = a(70655),
        l = a(67294),
        i = a(7707),
        o = a(27745),
        r = a(22975),
        s = a(90666);
      function c(e) {
        const { children: t, navTreeRef: a } = e,
          c = (0, n._T)(e, ["children", "navTreeRef"]),
          u = l.useRef(),
          d = (0, r.BE)(u, a);
        if (s.De.IN_GAMEPADUI) {
          const e = window.__nav_tree_root;
          return l.createElement(
            i.Fe,
            Object.assign({}, c, {
              navTreeRef: d,
              secondary: !0,
              parentEmbeddedNavTree: e,
            }),
            l.createElement(o.O, null, t)
          );
        }
        return l.createElement(l.Fragment, null, t);
      }
    },
    13354: (e, t, a) => {
      "use strict";
      a.d(t, {
        Bo: () => L,
        FG: () => I,
        N: () => w,
        P4: () => S,
        mb: () => C,
        yS: () => D,
      });
      var n = a(70655),
        l = a(9669),
        i = a.n(l),
        o = a(22188),
        r = a(67294),
        s = (a(26149), a(54698), a(37662), a(3389)),
        c = a(76776),
        u = a(39388),
        d = a(77636),
        m = a(7200),
        _ = a(89673),
        p = (a(82946), a(48780)),
        v = a(77520),
        g = a(93976),
        f = a(22975),
        h = a(90666);
      function E(e) {
        e.list_jsondata && "string" == typeof e.list_jsondata
          ? (e.list_jsondata = JSON.parse(e.list_jsondata))
          : ((0, v.X)(
              !e.list_jsondata,
              "Found unexpected ListDetails_t.list_jsondata type: " +
                typeof e.list_jsondata
            ),
            (e.list_jsondata = {}));
      }
      const C = "0";
      function b(e, t) {
        (t.localized_flat_title = (0, p.LG)([], 30, null)),
          (t.localized_flat_blurb = (0, p.LG)([], 30, null)),
          (t.localized_flat_link = (0, p.LG)([], 30, null)),
          t.title !== C && (t.localized_flat_title[e] = t.title),
          t.blurb !== C && (t.localized_flat_blurb[e] = t.blurb),
          t.link !== C && (t.localized_flat_link[e] = t.link),
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
      class L {
        constructor() {
          (this.m_mapList = new Map()),
            (this.m_mapEventGIDToLists = new Map()),
            (this.m_mapListIDToClanAccount = new Map()),
            "dev" == h.De.WEB_UNIVERSE && (window.g_curatorListStore = this);
          let e = (0, h.kQ)("curatorlistdata", "application_config");
          ("dev" != h.De.WEB_UNIVERSE && "beta" != h.De.WEB_UNIVERSE) ||
            console.log(
              "DEV_DEBUG: CCuratorListStore loading list payload: " +
                (null == e ? void 0 : e.length),
              e
            ),
            this.ValidateStoreDefault(e) &&
              (0, o.z)(() => {
                e.forEach((e) => {
                  e.multi_detail_lists.forEach((t) => {
                    E(t),
                      b(e.curation_language, t),
                      this.m_mapList.set(t.listid, t);
                  });
                });
              });
        }
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
          var l;
          return (0, n.mG)(this, void 0, void 0, function* () {
            if (this.m_mapList.has(t)) return this.m_mapList.get(t);
            const n =
                h.De.STORE_BASE_URL +
                "curator/" +
                e.GetAccountID() +
                "/admin/ajaxgetlistdetails",
              o = { listid: t };
            try {
              const r = yield i().get(n, {
                params: o,
                cancelToken: null == a ? void 0 : a.token,
              });
              if (
                1 ==
                (null === (l = null == r ? void 0 : r.data) || void 0 === l
                  ? void 0
                  : l.success)
              ) {
                const a = Object.assign({}, r.data.list_details);
                return (
                  (0, v.X)(
                    t == (null == a ? void 0 : a.listid),
                    "Wanted" + t + "but got" + (null == a ? void 0 : a.listid)
                  ),
                  E(a),
                  b(r.data.curation_language, a),
                  this.m_mapList.set(t, a),
                  this.m_mapListIDToClanAccount.set(t, e.GetAccountID()),
                  a
                );
              }
            } catch (e) {
              const t = (0, g.l)(e);
              console.error(
                "CCuratorListStore.LoadListDetails: error on load: " +
                  t.strErrorMsg,
                t
              );
            }
            return null;
          });
        }
        LoadMyFollowedSaleCurationLists(e, t, a) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            if (
              !h.L7.logged_in ||
              (d.jg.Get().BIsLoaded() &&
                0 == d.jg.Get().GetFollowedCuratorCount())
            )
              return [];
            const n =
                h.De.STORE_BASE_URL + "curators/ajaxgetmycuratorsalelists",
              l = {
                clan_account_id: e.GetAccountID(),
                clan_event_gid: t,
                origin: self.origin,
                curator_clan_account_followed: d.jg.Get().BIsLoaded()
                  ? d.jg.Get().GetFollowedCuratorsAccountID().join(",")
                  : void 0,
              };
            return this.InternalLoadSaleCuratorLists(
              n,
              l,
              "CCuratorListStore.LoadMyFollowedSaleCurationLists",
              e,
              t,
              a
            );
          });
        }
        LoadAllSaleCurationLists(e, t, a) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            if (this.m_mapEventGIDToLists.has(t))
              return this.m_mapEventGIDToLists.get(t);
            const n = h.De.STORE_BASE_URL + "curators/ajaxfindcuratorlists",
              l = {
                clan_account_id: e.GetAccountID(),
                clan_event_gid: t,
                origin: self.origin,
              };
            return this.InternalLoadSaleCuratorLists(
              n,
              l,
              "CCuratorListStore.LoadAllSaleCurationLists",
              e,
              t,
              a
            );
          });
        }
        InternalLoadSaleCuratorLists(e, t, a, l, r, s) {
          var c;
          return (0, n.mG)(this, void 0, void 0, function* () {
            try {
              const a = yield i().get(e, {
                params: t,
                cancelToken: null == s ? void 0 : s.token,
              });
              if (
                1 ==
                (null === (c = null == a ? void 0 : a.data) || void 0 === c
                  ? void 0
                  : c.success)
              ) {
                const e = new Array();
                return (
                  (0, o.z)(() => {
                    a.data.matches &&
                      a.data.matches.forEach((t) => {
                        t.multi_detail_lists.forEach((a) => {
                          this.m_mapListIDToClanAccount.set(
                            a.listid,
                            t.clan_account_id
                          ),
                            E(a),
                            b(t.curation_language, a),
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
              const t = (0, g.l)(e);
              console.error(a + ": error on load: " + t.strErrorMsg, t);
            }
            return [];
          });
        }
        static Get() {
          return L.s_Singleton || (L.s_Singleton = new L()), L.s_Singleton;
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
      function w(e, t) {
        const a = (0, f.NW)();
        return (
          (0, r.useEffect)(() => {
            if (L.Get().GetListDetails(t) || !e) return;
            const l = i().CancelToken.source();
            return (
              (() => {
                (0, n.mG)(this, void 0, void 0, function* () {
                  var n, i;
                  const o = yield L.Get().LoadListDetails(e, t);
                  if (!l.token.reason)
                    if (
                      null === (n = null == o ? void 0 : o.apps) || void 0 === n
                        ? void 0
                        : n.length
                    ) {
                      const e = [];
                      for (const t of o.apps) {
                        const a =
                          null ===
                            (i = null == t ? void 0 : t.recommended_app) ||
                          void 0 === i
                            ? void 0
                            : i.appid;
                        a && e.push({ id: a, type: "game" });
                      }
                      (0, _.qr)(
                        e,
                        Object.assign(Object.assign({}, _.NC), {
                          include_assets: !0,
                          include_release: !0,
                        })
                      ),
                        u.ZP.Get().LoadAppIDsBatch(e.map((e) => e.id)),
                        a();
                    } else console.error("Found no list data");
                });
              })(),
              () => l.cancel("unmounting CuratorList")
            );
          }, [e, t, a]),
          L.Get().GetListDetails(t)
        );
      }
      function S(e) {
        const t = e && c.sV.GetClanInfoByClanAccountID(e),
          [a, n] = (0, r.useState)(!!t);
        return (
          (0, r.useEffect)(() => {
            if (a && e) {
              const t = s.K.InitFromClanID(e);
              c.sV.LoadClanInfoForClanSteamID(t).finally(() => {
                n(!0);
              });
            }
          }, [a, e]),
          t
        );
      }
      function I(e) {
        return (
          Boolean(null == e ? void 0 : e.sale_clan_event_gid) &&
          Boolean(null == e ? void 0 : e.sale_clan_steamid)
        );
      }
      function D(e) {
        const t = (0, f.NW)(),
          a = I(e) ? e.sale_clan_event_gid : null,
          l = a && m.j1.GetClanEventModel(a);
        return (
          (0, r.useEffect)(() => {
            if (l || !I(e)) return;
            const o = i().CancelToken.source();
            return (
              (() => {
                (0, n.mG)(this, void 0, void 0, function* () {
                  m.j1.Init(),
                    yield m.j1.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                      new s.K(e.sale_clan_steamid),
                      a,
                      0
                    ),
                    o.token.reason || t();
                });
              })(),
              () => o.cancel("unmounting CuratorList")
            );
          }, [e, a, l, t]),
          l
        );
      }
      (0, n.gn)([o.LO], L.prototype, "m_mapList", void 0);
    },
    53881: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { CuratorReviewListContainer: () => K, default: () => $ });
      var n = a(29323),
        l = a(67294),
        i = a(63473),
        o = a(26149),
        r = (a(54698), a(7707)),
        s = a(34425),
        c = a(35921),
        u = a(4224),
        d = (a(37662), a(50153)),
        m = a(3389),
        _ = a(67833),
        p = a(70655),
        v = a(74163),
        g = a(9669),
        f = a.n(g),
        h = (a(82946), a(90666)),
        E = a(93976);
      function C(e, t) {
        const [a, n] = (0, l.useState)(
            (null == e ? void 0 : e.BUsesContentHubForItemSource())
              ? new Set()
              : null
          ),
          i = (0, v.T)("useFilteredAppViaContentHub");
        return (
          (0, l.useEffect)(() => {
            (null == e ? void 0 : e.BUsesContentHubForItemSource()) &&
              !a &&
              (function (e, t) {
                var a;
                return (0, p.mG)(this, void 0, void 0, function* () {
                  const n =
                      h.De.STORE_BASE_URL +
                      "contenthub/ajaxfilterappsbycontenthub",
                    l = {
                      hubtype: e.GetContentHubType(),
                      category: e.GetContentHubCategory(),
                      tagid: e.GetContentHubTag(),
                      prune_list_optin_name: e.jsondata.prune_list_optin_name,
                      optin_tagid: e.jsondata.optin_tagid,
                      optin_prune_tagid: e.jsondata.optin_prune_tagid,
                      applist: t.sort().join(","),
                    };
                  let i = null;
                  const o = new Set();
                  try {
                    const e = yield f().get(n, { params: l });
                    if (
                      1 ==
                      (null === (a = null == e ? void 0 : e.data) ||
                      void 0 === a
                        ? void 0
                        : a.success)
                    )
                      return e.data.appids.forEach((e) => o.add(e)), o;
                    i = (0, E.l)(e);
                  } catch (e) {
                    i = (0, E.l)(e);
                  }
                  return (
                    console.error(
                      "LoadContentHubFilteredApps failed: " +
                        (null == i ? void 0 : i.strErrorMsg),
                      i
                    ),
                    o
                  );
                });
              })(e, t).then((e) => {
                i.token.reason || n(e);
              });
          }, [a, i.token.reason, e, t]),
          a
        );
      }
      var b = a(13354),
        L = a(71174),
        w = a(39388),
        S = a(77636),
        I = a(159),
        D = a(48116),
        G = a(52114),
        R = a(99312),
        y = a.n(R),
        T = a(95598),
        N = (a(8456), a(7573)),
        B = a(47784);
      const F = new RegExp(
        "(?:https?://)?(?:www.)?twitch.tv/videos/([0-9]+)S*"
      );
      function A(e) {
        const t = F.exec(e);
        return (null == t ? void 0 : t.length) > 1 ? t[1] : null;
      }
      function k(e) {
        const {
            posterURL: t,
            videoid: a,
            muted: n,
            autoplay: i,
            bIsClipID: o,
            time: r,
            width: s,
            height: c,
          } = e,
          [u, d] = l.useState(Boolean(t)),
          m = null != i && null != i && i;
        if (u)
          return l.createElement(
            "div",
            {
              className: (0, N.Z)(
                "YoutubePreviewContainer",
                B.YoutubePreviewImage,
                e.imageClassnames
              ),
              onClick: () => d(!1),
            },
            l.createElement("img", {
              className: (0, N.Z)("YoutubePreviewImage", B.YoutubePreviewImage),
              src:
                t ||
                h.De.COMMUNITY_CDN_URL +
                  "public/shared/images/responsive/youtube_16x9_placeholder.gif",
            }),
            l.createElement(
              "div",
              { className: "YoutubePreviewPlay" },
              l.createElement(T.GhU, null)
            )
          );
        let _ = (0, h.Kc)().replace("https://", "");
        const p = _.indexOf("/");
        p >= 0 && (_ = _.substring(0, p));
        let v = o
          ? `https://clips.twitch.tv/embed?clip=${a}`
          : `https://player.twitch.tv/?video=${a}`;
        return (
          (v += `&parent=${_}&autoplay=${m}&muted=${Boolean(n)}`),
          r &&
            (v += `&time=${(function (e) {
              const t = Math.floor(e / 3600);
              e -= 60 * t * 60;
              const a = Math.floor(e / 60);
              return `${t}h${a}m${(e -= a * e)}s`;
            })(r)}`),
          l.createElement(
            "div",
            { className: (0, N.Z)("YoutubePlayer", y().TwitchPlayer) },
            l.createElement("img", {
              className: (0, N.Z)(
                "YoutubePreviewContainer",
                B.YoutubePreviewImage,
                e.imageClassnames
              ),
              src:
                h.De.COMMUNITY_CDN_URL +
                "public/shared/images/responsive/youtube_16x9_placeholder.gif",
            }),
            l.createElement("iframe", {
              src: v,
              allowFullScreen: !0,
              frameBorder: 0,
              width: s || 460,
              height: c || 300,
            })
          )
        );
      }
      var j = a(67777),
        x = a(89673),
        M = a(85732),
        P = a(87541),
        Y = a(13596),
        U = a(6092),
        z = a(52962),
        V = a(41311),
        O = a(35092),
        H = a(86196),
        W = a.n(H),
        X = (a(76776), a(54881)),
        Z = a(38547);
      function Q(e) {
        const { clanInfo: t } = e,
          { curator_link: a, curator_medium_avatar: n } = (0, h.kQ)(
            "curator_header",
            "application_config"
          );
        return l.createElement(
          c.s,
          {
            className: "page_content_ctn",
            "flow-children": "column",
            autoFocus: !0,
          },
          l.createElement(
            "div",
            { className: "page_content" },
            l.createElement(
              c.s,
              { className: "list_header_area", "flow-children": "row" },
              l.createElement(
                "div",
                { className: "curator_avatar_image" },
                l.createElement(
                  r.IS,
                  { href: a },
                  l.createElement("img", {
                    className: "curator_avatar",
                    src: n,
                  })
                )
              ),
              l.createElement(
                "div",
                { className: "curator_details" },
                l.createElement(X.b, {
                  className: Z.BreadContainer,
                  crumbs: (0, h.kQ)("breadcrumbs", "application_config"),
                }),
                l.createElement(
                  r.IS,
                  { className: "pageheader curator_name", href: a },
                  (0, V.Xx)("#SteamCurator_List_Header_List", t.group_name)
                )
              )
            )
          )
        );
      }
      const $ = function (e) {
        const t = (0, L.L)();
        return l.createElement(
          s.p,
          { navID: "StoreCuratorPageRoot", NavigationManager: t },
          l.createElement(K, { listid: e.listid })
        );
      };
      function K(e) {
        const t = parseInt(
            (0, h.kQ)("curator_account_id", "application_config")
          ),
          a = (0, b.P4)(t),
          n = (0, b.N)(null == a ? void 0 : a.clanSteamID, e.listid);
        return n
          ? l.createElement(
              l.Fragment,
              null,
              l.createElement(Q, { clanInfo: a }),
              l.createElement(
                "div",
                { className: "page_content_ctn grayscale" },
                l.createElement(
                  "div",
                  { className: "page_content" },
                  l.createElement(
                    "div",
                    { className: W().CuratorListCtn },
                    l.createElement(ee, { listDetails: n }),
                    (0, b.FG)(n)
                      ? l.createElement(q, { listDetails: n })
                      : l.createElement(J, {
                          listDetails: n,
                          rgListItems: n.apps,
                        }),
                    l.createElement(
                      "div",
                      { className: W().CuratorMoreCtn },
                      l.createElement(
                        "h2",
                        null,
                        (0, V.Xx)("#SteamCurator_ExploreMoreTitle")
                      ),
                      l.createElement(
                        r.IS,
                        { href: a.vanity_url },
                        (0, V.kQ)("#SteamCurator_MoreReviews", a.group_name)
                      )
                    )
                  )
                )
              )
            )
          : null;
      }
      function q(e) {
        const { listDetails: t } = e,
          [a, n] = (0, l.useState)(null),
          i = new m.K(t.sale_clan_steamid),
          o = (0, d.Mx)(i.GetAccountID(), t.sale_clan_event_gid),
          r = (0, l.useMemo)(
            () => (t.apps || []).map((e) => e.recommended_app.appid),
            [t]
          ),
          s = C(o, r);
        return (
          (0, l.useEffect)(() => {
            var e, a;
            if (o)
              if (o.BUsesContentHubForItemSource())
                s &&
                  n(
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
                const e = o.GetSaleFeaturedApps();
                n(
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
          }, [t, o, s]),
          l.createElement(J, { listDetails: t, rgListItems: a })
        );
      }
      function J(e) {
        const { listDetails: t, rgListItems: a } = e,
          [n, i] = (0, l.useState)(0),
          [o, s] = (0, l.useState)(null),
          u = (0, v.T)("CuratorAppListDisplay");
        if (
          (l.useEffect(() => {
            a &&
              (i((null == a ? void 0 : a.length) || 0),
              S.jg
                .Get()
                .HintLoad()
                .then(() => {
                  const e = a.map((e) => e.recommended_app.appid);
                  I.Z.Get()
                    .QueueMultipleAppRequests(e, x.NC)
                    .then(() => {
                      u.token.reason ||
                        s(
                          a.filter(
                            (e) =>
                              !(0, x.TR)(
                                I.Z.Get().GetApp(e.recommended_app.appid)
                              )
                          )
                        );
                    })
                    .catch(() => {
                      u.token.reason || s([]);
                    });
                }));
          }, [a, u]),
          null == o)
        )
          return l.createElement(Y.V, {
            string: (0, V.Xx)("#Loading"),
            position: "center",
            size: "medium",
          });
        const d = 1 == t.list_type;
        return l.createElement(
          l.Fragment,
          null,
          l.createElement(
            c.s,
            {
              className: (0, N.Z)(W().CuratorList, d && W().CuratorListGrid),
              "flow-children": "grid",
            },
            o.map((e, a) =>
              l.createElement(te, {
                key: "rec_" + e.recommended_app.appid,
                item: e,
                listDetails: t,
                bAutoFocus: 0 == a,
              })
            )
          ),
          Boolean(n > o.length) &&
            l.createElement(
              "div",
              null,
              l.createElement(
                "span",
                null,
                (0, V.kb)("#SteamCurator_Hidden", n - o.length),
                " "
              ),
              l.createElement(
                r.IS,
                { href: h.De.STORE_BASE_URL + "account/preferences/" },
                (0, V.Xx)("#SteamCurator_Setting")
              )
            )
        );
      }
      function ee(e) {
        const { listDetails: t } = e,
          a = (0, b.yS)(t),
          n = (0, h.kQ)("showlisttitle", "application_config"),
          i = (0, h.kQ)("titleareaheight", "application_config"),
          s =
            t.list_jsondata.youtube_link &&
            (0, u.S6)(t.list_jsondata.youtube_link),
          c = t.list_jsondata.youtube_link && A(t.list_jsondata.youtube_link),
          d = (0, o.jM)(h.De.LANGUAGE),
          m = V.LZ.GetWithFallback(t.localized_flat_title, d),
          _ = V.LZ.GetWithFallback(t.localized_flat_blurb, d),
          p = V.LZ.GetWithFallback(t.localized_flat_link, d),
          v =
            a &&
            a.GetImageURL(
              (0, U.p)() ? "product_mobile_banner" : "product_banner",
              d
            );
        return l.createElement(
          "div",
          { className: W().TopReviewInfo },
          Boolean(v) &&
            l.createElement(
              r.IS,
              { href: a.GetSaleURL() },
              l.createElement("img", { className: W().SaleBanner, src: v })
            ),
          n && m && l.createElement("div", { className: W().Title }, m),
          n && _ && l.createElement("div", { className: W().Blurb }, _),
          Boolean(i > 0) && l.createElement("div", { style: { height: i } }),
          s &&
            l.createElement(
              "div",
              { className: W().VideoReviewCtn },
              l.createElement(z.C, {
                video: s.strVideoID,
                startSeconds: s.nStartSeconds,
                autoplay: !0,
                autopause: !0,
                showFullscreenBtn: !0,
                controls: !0,
                preloadYoutubeScripts: !0,
                playsInline: !0,
                imageClassnames: W().YouTubePreviewImage,
              })
            ),
          Boolean(c) &&
            l.createElement(
              "div",
              { className: W().VideoReviewCtn },
              l.createElement(k, {
                videoid: c,
                posterURL: "",
                imageClassnames: W().YouTubePreviewImage,
              })
            ),
          p && l.createElement(le, { url: p })
        );
      }
      const te = (0, n.Pi)((e) => {
        var t, a;
        const { item: n, listDetails: i, bAutoFocus: o } = e,
          r = parseInt((0, h.kQ)("curator_account_id", "application_config")),
          s = (0, b.P4)(r),
          [d] = (0, G.vs)(
            null === (t = null == n ? void 0 : n.recommended_app) ||
              void 0 === t
              ? void 0
              : t.appid,
            { include_assets: !0, include_release: !0 }
          ),
          m = (0, l.useMemo)(
            () => ({
              id: null == d ? void 0 : d.GetID(),
              type: (0, D.Ds)(
                null == d ? void 0 : d.GetStoreItemType(),
                null == d ? void 0 : d.GetAppType()
              ),
            }),
            [d]
          );
        if (!s || !d) return null;
        const {
            appid: _,
            link_url: p,
            blurb: v,
            time_recommended: g,
            recommendation_state: f,
          } = n.recommended_app,
          E = s.is_creator_home && !s.is_ogg,
          C =
            null === (a = i.list_jsondata.app_data) || void 0 === a
              ? void 0
              : a[_],
          L = p && (0, u.S6)(p),
          S = p && A(p),
          I = v != b.mb && v,
          R = w.ZP.Get().BHasDemoAppID(_),
          y = null == C ? void 0 : C.img_url,
          T = `curator_clanid=${s.clanAccountID}&curator_listid=${i.listid}`;
        return l.createElement(
          c.s,
          { className: W().CuratorReview, autoFocus: o },
          l.createElement(
            "div",
            { className: W().CapsuleCtn },
            Boolean(L || S)
              ? l.createElement(ae, {
                  strVideoID: (null == L ? void 0 : L.strVideoID) || S,
                  nStartSeconds: null == L ? void 0 : L.nStartSeconds,
                  info: m,
                  strImgOverrideUrl: y,
                  bShowDemoButton: R,
                  strExtraParams: T,
                  bTwitchVideo: Boolean(S),
                })
              : l.createElement(P.B, {
                  imageType: "header",
                  bAutoFocus: o,
                  capsule: m,
                  bShowDemoButton: R,
                  strExtraParams: T,
                })
          ),
          l.createElement(
            "div",
            { className: W().ReviewTextSection },
            l.createElement("div", { className: W().GameTitle }, d.GetName()),
            l.createElement(
              "div",
              { className: W().RecommendationTypeAndDate },
              l.createElement(ne, { type: f }),
              l.createElement(
                "div",
                { className: W().ReviewDate },
                E || !Boolean(g)
                  ? (0, V.Xx)(
                      "#EventModTile_ReleaseDate",
                      d.GetFormattedSteamReleaseDate()
                    )
                  : (0, V.vX)(g)
              )
            ),
            Boolean(I) &&
              l.createElement(
                "div",
                { className: W().ReviewBlurb },
                (0, V.Xx)("#SteamCurator_ReviewTextQuoted", I)
              ),
            Boolean(p) && l.createElement(le, { url: p })
          )
        );
      });
      function ae(e) {
        const {
            strVideoID: t,
            nStartSeconds: a,
            info: n,
            strImgOverrideUrl: i,
            bShowDemoButton: o,
            strExtraParams: r,
            bTwitchVideo: s,
          } = e,
          [c] = (0, G.jk)(n.id, (0, D.TM)(n.type), { include_assets: !0 });
        return l.createElement(
          "div",
          { className: W().YouTubeCapsule },
          l.createElement(
            "div",
            { className: W().YouTubeCtn },
            s
              ? l.createElement(k, {
                  videoid: t,
                  posterURL: null == c ? void 0 : c.GetAssets().GetHeaderURL(),
                  imageClassnames: W().YouTubePreviewImage,
                  autoplay: !0,
                })
              : l.createElement(z.C, {
                  video: t,
                  startSeconds: a,
                  autoplay: !0,
                  autopause: !0,
                  showFullscreenBtn: !0,
                  controls: !0,
                  preloadYoutubeScripts: !0,
                  playsInline: !0,
                  imageClassnames: W().YouTubePreviewImage,
                  altImg: i,
                })
          ),
          l.createElement(
            "div",
            { className: W().YouTubeCapsuleBottomBar },
            l.createElement(
              "div",
              { className: W().GameImageCtn },
              l.createElement(
                j.ll,
                {
                  item: n,
                  bShowDemoButton: o,
                  nDelayShowMs: 300,
                  strExtraParams: r,
                  hoverProps: {
                    direction: "overlay-center",
                    style: { minWidth: "300px" },
                  },
                },
                l.createElement("img", {
                  className: W().GameImage,
                  src:
                    null == c ? void 0 : c.GetAssets().GetLibraryCapsuleURL(),
                })
              )
            ),
            l.createElement(M.Hl, { info: n, strClassName: W().FullWidth })
          )
        );
      }
      function ne(e) {
        switch (e.type) {
          case 0:
            return l.createElement(
              "div",
              { className: W().Recommended },
              (0, V.Xx)("#SteamCurator_Recommended")
            );
          case 1:
            return l.createElement(
              "div",
              { className: W().NotRecommended },
              (0, V.Xx)("#SteamCurator_NotRecommended")
            );
          case 2:
            return l.createElement(
              "div",
              { className: W().Informational },
              (0, V.Xx)("#SteamCurator_Informational")
            );
          default:
            return null;
        }
      }
      function le(e) {
        let t = (0, _.B1)(e.url);
        (0, i.Ah)(t) &&
          (t =
            (h.De.IN_CLIENT ? "steam://openurl_external/" : "") +
            h.De.COMMUNITY_BASE_URL +
            "linkfilter/?url=" +
            t);
        const a = (0, O.FM)(e.url),
          n = (0, u.HO)(e.url);
        return l.createElement(
          "div",
          { className: W().FullReviewLink },
          l.createElement(
            r.IS,
            {
              className: W().FullReviewAnchor,
              href: t,
              rel: "noopener nofollow",
              preferredFocus: !1,
              autoFocus: !1,
            },
            (0, V.Xx)(
              n
                ? "#SteamCurator_WatchFullReview"
                : "#SteamCurator_ReadFullReview"
            )
          ),
          l.createElement(
            "div",
            { className: W().FullReviewDomain },
            (0, V.Xx)("#SteamCurator_ReviewLinkHostnameBracketed", a)
          )
        );
      }
    },
  },
]);
