/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [3207],
  {
    16646: (e) => {
      e.exports = {
        VideoReviewCtn: "twitchembed_VideoReviewCtn_nNaTz",
        YouTubePreviewImage: "twitchembed_YouTubePreviewImage__mxmF",
        TwitchPlayer: "twitchembed_TwitchPlayer_Ny5PH",
      };
    },
    95771: (e) => {
      e.exports = { BreadContainer: "breadcrumbs_BreadContainer_1QPim" };
    },
    5089: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        OtherEventsCtn: "eventrow_OtherEventsCtn_1qNsZ",
        OtherEvents_MainImageCtn: "eventrow_OtherEvents_MainImageCtn_1_8oy",
        OtherEvents: "eventrow_OtherEvents_2ioeM",
        OtherEvents_EventCtn: "eventrow_OtherEvents_EventCtn_17gGs",
        OtherEvents_MainImage: "eventrow_OtherEvents_MainImage_3xf4A",
        OtherEvents_BGImage: "eventrow_OtherEvents_BGImage_3rp-l",
        OtherEvents_ContentCtn: "eventrow_OtherEvents_ContentCtn_3QaFW",
        OtherEvents_TextCtn: "eventrow_OtherEvents_TextCtn_2AVL1",
        OtherEvents_TextTitle: "eventrow_OtherEvents_TextTitle_3Zufl",
        UpcomingCtn: "eventrow_UpcomingCtn_--lM7",
        OtherEvents_SubTitle: "eventrow_OtherEvents_SubTitle_2UUNj",
        HoversEnabled: "eventrow_HoversEnabled_34Nxj",
        PartnerEventRowCapsule_MainImage:
          "eventrow_PartnerEventRowCapsule_MainImage_2bZBn",
        EventSummaryContainer: "eventrow_EventSummaryContainer_3PdWg",
        EventSummaryText: "eventrow_EventSummaryText_h5tE8",
        EventSummaryType: "eventrow_EventSummaryType_1Fp_l",
        HorizontalEvent: "eventrow_HorizontalEvent_1RS0b",
        HorizontalSummary: "eventrow_HorizontalSummary_3_1Qo",
        HorizontalTitle: "eventrow_HorizontalTitle_1m9zE",
        HorizontalDescriptionCtn: "eventrow_HorizontalDescriptionCtn_2s9cB",
        HorizontalDescription: "eventrow_HorizontalDescription_Dc9KC",
        AppCapsuleImage: "eventrow_AppCapsuleImage_2vo-l",
        AppCapsuleCtn: "eventrow_AppCapsuleCtn_1kYha",
        AppCapsuleImageHover: "eventrow_AppCapsuleImageHover_rcwMf",
        AppCapsulePrice: "eventrow_AppCapsulePrice_Jq75m",
      };
    },
    51857: (e) => {
      e.exports = {
        YoutubePreviewImage: "youtubepreviewimage_YoutubePreviewImage_MzScK",
        YoutubePlayer: "youtubepreviewimage_YoutubePlayer_3uK6c",
      };
    },
    94608: (e) => {
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
    11581: (e) => {
      e.exports = { BreadContainer: "curatorminiheader_BreadContainer_GkVFI" };
    },
    66294: (e, t, a) => {
      "use strict";
      a.d(t, { p: () => c });
      var n = a(33940),
        r = a(89526),
        o = a(44026),
        l = a(17589),
        i = a(4306),
        s = a(32765),
        u = a(94952);
      function c(e) {
        const { children: t, navTreeRef: a } = e,
          c = (0, n._T)(e, ["children", "navTreeRef"]),
          d = r.useRef(),
          m = (0, i.BE)(d, a),
          p = (0, s.id)(),
          _ = window.__virtual_keyboard_client;
        if (p) {
          const e = window.__nav_tree_root;
          return r.createElement(
            o.Fe,
            Object.assign({}, c, {
              navTreeRef: m,
              secondary: !0,
              parentEmbeddedNavTree: e,
            }),
            r.createElement(
              u.o5,
              { factory: _ },
              r.createElement(l.O, null, t),
            ),
          );
        }
        return r.createElement(r.Fragment, null, t);
      }
    },
    26412: (e, t, a) => {
      "use strict";
      a.d(t, { HO: () => u, S6: () => d });
      const n = 20,
        r = /^.*youtube[^v]+v=(.{11}).*/,
        o = /^.*youtu\.be\/(.{11}).*/,
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
            : r.exec(e) || o.exec(e) || l.exec(e);
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
    68818: (e, t, a) => {
      "use strict";
      a.d(t, { Me: () => s, Mx: () => c, XC: () => u });
      var n = a(89526),
        r = a(10412),
        o = a(58218),
        l = a(47165),
        i = a(32765);
      a(57361);
      function s(e, t = 0, a) {
        const [s, u] = (0, n.useState)(r.j1.GetClanEventFromAnnouncementGID(e)),
          c = (0, o.T)("usePartnerEventByAnnouncementGID");
        return (
          (0, n.useEffect)(() => {
            if ((null == s ? void 0 : s.AnnouncementGID) != e) {
              r.j1.Init();
              const n = new l.K(i.JA.CLANSTEAMID);
              r.j1
                .LoadPartnerEventFromAnnoucementGIDAndClanSteamID(n, e, t, a)
                .then((e) => {
                  e && !c.token.reason && u(e);
                });
            }
          }, [e, t, a, s, c]),
          s
        );
      }
      function u(e) {
        const [t, a] = (0, n.useState)(r.j1.GetClanEventModel(e)),
          l = (0, o.T)("usePartnerEventByEventGID");
        return (
          (0, n.useEffect)(() => {
            (null == t ? void 0 : t.GID) != e &&
              (r.j1.Init(),
              r.j1
                .LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs([e], [], l)
                .then((t) => {
                  1 != (null == t ? void 0 : t.length) ||
                    t[0].GID != e ||
                    l.token.reason ||
                    a(t[0]);
                }));
          }, [e, t, l]),
          t
        );
      }
      function c(e, t, a) {
        const [i, s] = (0, n.useState)(r.j1.GetClanEventModel(t)),
          u = (0, o.T)("usePartnerEventByClanAccountAndEventGID");
        return (
          (0, n.useEffect)(() => {
            if ((null == i ? void 0 : i.GID) != t) {
              r.j1.Init();
              const n = l.K.InitFromClanID(e);
              r.j1
                .LoadPartnerEventFromClanEventGIDAndClanSteamID(n, t, 0, a)
                .then((e) => {
                  u.token.reason || s(e);
                });
            }
          }, [e, t, i, a, u]),
          i
        );
      }
    },
    16468: (e, t, a) => {
      "use strict";
      a.d(t, {
        Bo: () => b,
        FG: () => S,
        N: () => I,
        P4: () => w,
        mb: () => f,
        yS: () => D,
      });
      var n = a(33940),
        r = a(52868),
        o = a.n(r),
        l = a(59621),
        i = a(89526),
        s = a(47165),
        u = a(82079),
        c = a(98210),
        d = a(54671),
        m = a(10412),
        p = a(70750),
        _ = a(11837),
        v = a(23801),
        h = a(23217),
        g = a(4306),
        y = a(32765);
      function E(e) {
        e.list_jsondata && "string" == typeof e.list_jsondata
          ? (e.list_jsondata = JSON.parse(e.list_jsondata))
          : ((0, v.X)(
              !e.list_jsondata,
              "Found unexpected ListDetails_t.list_jsondata type: " +
                typeof e.list_jsondata,
            ),
            (e.list_jsondata = {}));
      }
      const f = "0";
      function C(e, t) {
        (t.localized_flat_title = (0, _.LG)([], 31, null)),
          (t.localized_flat_blurb = (0, _.LG)([], 31, null)),
          (t.localized_flat_link = (0, _.LG)([], 31, null)),
          t.title !== f && (t.localized_flat_title[e] = t.title),
          t.blurb !== f && (t.localized_flat_blurb[e] = t.blurb),
          t.link !== f && (t.localized_flat_link[e] = t.link),
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
          var r;
          return (0, n.mG)(this, void 0, void 0, function* () {
            if (this.m_mapList.has(t)) return this.m_mapList.get(t);
            const n =
                y.De.STORE_BASE_URL +
                "curator/" +
                e.GetAccountID() +
                "/admin/ajaxgetlistdetails",
              l = { listid: t };
            try {
              const i = yield o().get(n, {
                params: l,
                cancelToken: null == a ? void 0 : a.token,
              });
              if (
                1 ==
                (null === (r = null == i ? void 0 : i.data) || void 0 === r
                  ? void 0
                  : r.success)
              ) {
                const a = Object.assign({}, i.data.list_details);
                return (
                  (0, v.X)(
                    t == (null == a ? void 0 : a.listid),
                    "Wanted" + t + "but got" + (null == a ? void 0 : a.listid),
                  ),
                  E(a),
                  C(i.data.curation_language, a),
                  this.m_mapList.set(t, a),
                  this.m_mapListIDToClanAccount.set(t, e.GetAccountID()),
                  a
                );
              }
            } catch (e) {
              const t = (0, h.l)(e);
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
              !y.L7.logged_in ||
              (d.jg.Get().BIsLoaded() &&
                0 == d.jg.Get().GetFollowedCuratorCount())
            )
              return [];
            const n =
                y.De.STORE_BASE_URL + "curators/ajaxgetmycuratorsalelists",
              r = {
                clan_account_id: e.GetAccountID(),
                clan_event_gid: t,
                origin: self.origin,
                curator_clan_account_followed: d.jg.Get().BIsLoaded()
                  ? d.jg.Get().GetFollowedCuratorsAccountID().join(",")
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
          });
        }
        LoadAllSaleCurationLists(e, t, a) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            if (this.m_mapEventGIDToLists.has(t))
              return this.m_mapEventGIDToLists.get(t);
            const n = y.De.STORE_BASE_URL + "curators/ajaxfindcuratorlists",
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
          });
        }
        InternalLoadSaleCuratorLists(e, t, a, r, i, s) {
          var u;
          return (0, n.mG)(this, void 0, void 0, function* () {
            try {
              const a = yield o().get(e, {
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
                            E(a),
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
              const t = (0, h.l)(e);
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
            "dev" == y.De.WEB_UNIVERSE && (window.g_curatorListStore = this);
          let e = (0, y.kQ)("curatorlistdata", "application_config");
          ("dev" != y.De.WEB_UNIVERSE && "beta" != y.De.WEB_UNIVERSE) ||
            console.log(
              "DEV_DEBUG: CCuratorListStore loading list payload: " +
                (null == e ? void 0 : e.length),
              e,
            ),
            this.ValidateStoreDefault(e) &&
              (0, l.z)(() => {
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
      function I(e, t) {
        const a = (0, g.NW)();
        return (
          (0, i.useEffect)(() => {
            if (b.Get().GetListDetails(t) || !e) return;
            const r = o().CancelToken.source();
            return (
              (() => {
                (0, n.mG)(this, void 0, void 0, function* () {
                  var n, o;
                  const l = yield b.Get().LoadListDetails(e, t);
                  if (!r.token.reason)
                    if (
                      null === (n = null == l ? void 0 : l.apps) || void 0 === n
                        ? void 0
                        : n.length
                    ) {
                      const e = [];
                      for (const t of l.apps) {
                        const a =
                          null ===
                            (o = null == t ? void 0 : t.recommended_app) ||
                          void 0 === o
                            ? void 0
                            : o.appid;
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
              () => r.cancel("unmounting CuratorList")
            );
          }, [e, t, a]),
          b.Get().GetListDetails(t)
        );
      }
      function w(e) {
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
      function S(e) {
        return (
          Boolean(null == e ? void 0 : e.sale_clan_event_gid) &&
          Boolean(null == e ? void 0 : e.sale_clan_steamid)
        );
      }
      function D(e) {
        const t = (0, g.NW)(),
          a = S(e) ? e.sale_clan_event_gid : null,
          r = a && m.j1.GetClanEventModel(a);
        return (
          (0, i.useEffect)(() => {
            if (r || !S(e)) return;
            const l = o().CancelToken.source();
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
          }, [e, a, r, t]),
          r
        );
      }
      (0, n.gn)([l.LO], b.prototype, "m_mapList", void 0);
    },
    65858: (e, t, a) => {
      "use strict";
      a.d(t, { b: () => u });
      var n = a(89526),
        r = a(95771),
        o = a(19304),
        l = a(565),
        i = a(44026),
        s = a(51438);
      function u(e) {
        const { crumbs: t, className: a } = e;
        return t && 0 != t.length
          ? n.createElement(
              "div",
              { className: (0, o.Z)(r.BreadContainer, a) },
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
    31245: (e, t, a) => {
      "use strict";
      a.d(t, { B: () => G, O: () => T });
      var n = a(89526),
        r = a(62983),
        o = a(44026),
        l = a(51438),
        i = a(16221),
        s = a(98009),
        u = a(54671),
        c = a(85886),
        d = a(25871),
        m = a(5089),
        p = a(43840),
        _ = a(44421),
        v = a(23715),
        h = a.n(v),
        g = a(67935),
        y = a(21219),
        E = a(87539),
        f = a(3991),
        C = a(33406),
        b = a(98389),
        I = a(42317),
        w = a(71161),
        S = a(19304),
        D = a(14826),
        P = a(207),
        L = a(32765);
      const T = "capsule_index_";
      function G(e) {
        const {
            capsule: t,
            bShowParentApp: a,
            strExtraParams: s,
            elElementToAppendToHover: u,
            index: _,
            navKey: v,
            bHideStoreHover: g,
          } = e,
          [y, C] = n.useState(!1),
          [I] = (0, d.jk)(t.id, (0, c.TM)(t.type), r.bk),
          [P] = (0, d.vs)(a && (null == I ? void 0 : I.GetParentAppID()), r.bk),
          G = (0, w.bJ)(),
          R = (0, L.id)();
        if (!I) return null;
        const A = Boolean(P),
          k = n.createElement(
            N,
            Object.assign({}, e, {
              info: t,
              bIsHovered: y,
              bHasParentAppToDisplay: A,
            }),
          );
        return n.createElement(
          l.s,
          {
            className: (0, S.Z)({
              [h().OuterCapsuleContainer]: !0,
              [T + _]: 0 == _,
            }),
            navEntryPreferPosition: i.c4.PREFERRED_CHILD,
            navKey: v,
          },
          n.createElement(
            f.zw,
            { appid: I.GetAppID() },
            Boolean(g)
              ? n.createElement(n.Fragment, null, k)
              : n.createElement(
                  p.ll,
                  {
                    className: h().CapsuleContainer,
                    item: t,
                    elElementToAppend: e.elElementToAppendToHover,
                    bShowDemoButton: e.bShowDemoButton,
                    bShowDeckCompatibilityDialog:
                      e.bShowDeckCompatibilityDialog,
                    bHidePrice: e.bHidePrice,
                    bUseSubscriptionLayout: e.bUseSubscriptionLayout,
                    strExtraParams: e.strExtraParams,
                    fnOnHoverStateChange: !R && C,
                    nCreatorAccountID: e.creatorAccountID,
                  },
                  k,
                ),
            Boolean(u) && n.createElement("div", null, u),
          ),
          A &&
            n.createElement(
              o.Ks,
              Object.assign(
                { className: h().CapsuleParentInfo },
                (0, E.h)(P, G, R, e.strExtraParams),
              ),
              n.createElement(
                f.zw,
                { appid: P.GetAppID() },
                n.createElement(
                  "div",
                  { className: h().ParentType },
                  (0, D.Xx)(
                    11 == I.GetAppType()
                      ? "#SalePage_ParentApp_SoundTrack"
                      : "#SalePage_ParentApp_DLC",
                  ),
                ),
                n.createElement(
                  b._,
                  {
                    type: "app",
                    id: P.GetAppID(),
                    strExtraParams: e.strExtraParams,
                  },
                  n.createElement(
                    "img",
                    Object.assign(
                      {
                        loading: "lazy",
                        className: m.AppCapsuleImage,
                        alt: P.GetName(),
                        src: P.GetAssets().GetSmallCapsuleURL(),
                      },
                      (0, r.fn)(),
                    ),
                  ),
                ),
              ),
            ),
        );
      }
      function N(e) {
        var t;
        const {
            info: a,
            bHidePriceIfOwned: r,
            bHideStatusBanners: l,
            strExtraParams: i,
            imageType: m,
            bHasParentAppToDisplay: v,
            bUseSubscriptionLayout: h,
            elElementToAppendToHover: E,
            bHidePrice: b,
            bHidePlatforms: S,
            creatorAccountID: D,
            bIsHovered: L,
          } = e,
          [T] = (0, d.jk)(a.id, (0, c.TM)(a.type), { include_platforms: !0 }),
          G = (0, w.bJ)(),
          N =
            ((0, f.Dt)(a.type),
            (0, n.useMemo)(
              () => (null == T ? void 0 : T.GetIncludedAppIDsOrSelf()),
              [T],
            )),
          R =
            T &&
            (null == T
              ? void 0
              : T.GetIncludedAppIDsOrSelf().every((e) =>
                  u.jg.Get().BOwnsApp(e),
                ));
        if (!T) return null;
        const A = R && !l,
          k = (0, P.bk)((0, s.Hf)(`${T.GetStorePageURL()}${i || ""}`, G));
        let B,
          F = null;
        if (h && 0 == (null == T ? void 0 : T.GetStoreItemType()))
          F = n.createElement(C.r, { appid: T.GetAppID(), bIsMuted: L });
        else if (E);
        else {
          const t = R && r,
            o = A;
          F = n.createElement(_.Hl, {
            info: a,
            bShowAsMuted: o,
            bHidePrice: b,
            bShowInLibraryInsteadOfPrice: t,
            bHidePlatforms: S,
            creatorAccountID: D,
            bShowName: e.bShowName,
          });
        }
        return (
          "overrideNavigation" in a &&
            (B = (e) => (
              a.overrideNavigation(e),
              e.preventDefault(),
              e.stopPropagation(),
              !1
            )),
          n.createElement(
            o.IS,
            {
              href: B ? null : k,
              style: { display: "block", cursor: "pointer" },
              preferredFocus: v,
              onClick: B,
            },
            n.createElement(y.v, { appids: N, hide_status_banners: l }),
            n.createElement(_.a4, { imageType: m, info: a }),
            n.createElement(I.y, {
              eDeckCompatibilityCategory:
                null === (t = null == T ? void 0 : T.GetPlatforms()) ||
                void 0 === t
                  ? void 0
                  : t.steam_deck_compat_category,
            }),
            Boolean(L && !(0, p.Hu)()) && n.createElement(g.v, { appInfo: a }),
            F,
          )
        );
      }
    },
    86177: (e, t, a) => {
      "use strict";
      a.d(t, { e: () => v, m: () => p });
      var n,
        r = a(33940),
        o = a(89526),
        l = a(11837),
        i = a(74802),
        s = a(4306),
        u = a(19304),
        c = a(69338);
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
      class v extends o.Component {
        constructor(e) {
          super(e),
            (this.m_strPlayerID = ""),
            (this.m_player = null),
            (this.m_playerContainer = null),
            (this.m_bPlayerReady = !1),
            (this.m_strPlayerID = "YoutubePlayer_" + v.s_nPlayerIndex++),
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
            r = !0 === e.showFullscreenBtn ? 1 : 0,
            o = !0 === e.playsInline ? 1 : 0;
          let l = {
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
          const e = o.createElement(
            "div",
            {
              key: this.m_strPlayerID,
              ref: this.BindPlayerContainer,
              className: (0, u.Z)("YoutubePlayer", this.props.classnames),
            },
            o.createElement(c.V, { className: "YoutubePlayerThrobber" }),
          );
          return this.props.autopause
            ? o.createElement(i.h, { onLeave: this.OnPlayerLeftView }, e)
            : e;
        }
      }
      (v.s_nPlayerIndex = 0),
        (0, r.gn)([s.ak], v.prototype, "BindPlayerContainer", null),
        (0, r.gn)([s.ak], v.prototype, "OnYoutubeScriptsReady", null),
        (0, r.gn)([s.ak], v.prototype, "CreatePlayer", null),
        (0, r.gn)([s.ak], v.prototype, "OnPlayerReady", null),
        (0, r.gn)([s.ak], v.prototype, "OnPlayerStateChange", null),
        (0, r.gn)([s.ak], v.prototype, "OnError", null),
        (0, r.gn)([s.ak], v.prototype, "OnPlayerLeftView", null),
        (0, r.gn)([s.ak], v.prototype, "PlayVideo", null);
    },
    6049: (e, t, a) => {
      "use strict";
      a.d(t, { C: () => m, q: () => d });
      var n = a(89526),
        r = a(54297),
        o = a(701),
        l = a(86177),
        i = a(19304),
        s = a(14826),
        u = a(51857),
        c = a.n(u);
      const d = (e) => {
          const t = ["maxresdefault", "mqdefault", "default"],
            [a, o] = n.useState(0);
          n.useEffect(() => o(0), [e.video]);
          const l = n.useRef();
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
              s = () => {
                a + 1 < t.length && o(a + 1);
              },
              u = () => {
                l.current && l.current.naturalHeight < 91 && s();
              };
            return n.createElement("img", {
              ref: l,
              onLoad: u,
              onError: s,
              src: r,
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
                n.createElement(o.GhU, null),
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
    45334: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { CuratorReviewListContainer: () => q, default: () => K });
      var n = a(88464),
        r = a(89526),
        o = a(14966),
        l = a(40442),
        i = a(44026),
        s = a(66294),
        u = a(51438),
        c = a(26412),
        d = a(68818),
        m = a(47165),
        p = a(98009),
        _ = a(33940),
        v = a(58218),
        h = a(52868),
        g = a.n(h),
        y = a(32765),
        E = a(23217);
      function f(e, t) {
        const [a, n] = (0, r.useState)(
            (null == e ? void 0 : e.BUsesContentHubForItemSource())
              ? new Set()
              : null,
          ),
          o = (0, v.T)("useFilteredAppViaContentHub");
        return (
          (0, r.useEffect)(() => {
            (null == e ? void 0 : e.BUsesContentHubForItemSource()) &&
              !a &&
              (function (e, t) {
                var a;
                return (0, _.mG)(this, void 0, void 0, function* () {
                  const n =
                      y.De.STORE_BASE_URL +
                      "contenthub/ajaxfilterappsbycontenthub",
                    r = {
                      hubtype: e.GetContentHubType(),
                      category: e.GetContentHubCategory(),
                      tagid: e.GetContentHubTag(),
                      prune_list_optin_name: e.jsondata.prune_list_optin_name,
                      optin_tagid: e.jsondata.optin_tagid,
                      optin_prune_tagid: e.jsondata.optin_prune_tagid,
                      optin_only: e.jsondata.optin_only,
                      applist: t.sort().join(","),
                    };
                  let o = null;
                  const l = new Set();
                  try {
                    const e = yield g().get(n, { params: r });
                    if (
                      1 ==
                      (null === (a = null == e ? void 0 : e.data) ||
                      void 0 === a
                        ? void 0
                        : a.success)
                    )
                      return e.data.appids.forEach((e) => l.add(e)), l;
                    o = (0, E.l)(e);
                  } catch (e) {
                    o = (0, E.l)(e);
                  }
                  return (
                    console.error(
                      "LoadContentHubFilteredApps failed: " +
                        (null == o ? void 0 : o.strErrorMsg),
                      o,
                    ),
                    l
                  );
                });
              })(e, t).then((e) => {
                o.token.reason || n(e);
              });
          }, [a, o.token.reason, e, t]),
          a
        );
      }
      var C = a(16468),
        b = a(83145),
        I = a(98210),
        w = a(54671),
        S = a(92616),
        D = a(85886),
        P = a(25871),
        L = a(95408),
        T = a(16646),
        G = a.n(T),
        N = a(701),
        R = a(19304),
        A = a(51857);
      const k = new RegExp(
        "(?:https?://)?(?:www.)?twitch.tv/videos/([0-9]+)S*",
      );
      function B(e) {
        const t = k.exec(e);
        return (null == t ? void 0 : t.length) > 1 ? t[1] : null;
      }
      function F(e) {
        const {
            posterURL: t,
            videoid: a,
            muted: n,
            autoplay: o,
            bIsClipID: l,
            time: i,
            width: s,
            height: u,
          } = e,
          [c, d] = r.useState(Boolean(t)),
          m = null != o && null != o && o;
        if (c)
          return r.createElement(
            "div",
            {
              className: (0, R.Z)(
                "YoutubePreviewContainer",
                A.YoutubePreviewImage,
                e.imageClassnames,
              ),
              onClick: () => d(!1),
            },
            r.createElement("img", {
              className: (0, R.Z)("YoutubePreviewImage", A.YoutubePreviewImage),
              src:
                t ||
                y.De.COMMUNITY_CDN_URL +
                  "public/shared/images/responsive/youtube_16x9_placeholder.gif",
            }),
            r.createElement(
              "div",
              { className: "YoutubePreviewPlay" },
              r.createElement(N.GhU, null),
            ),
          );
        let p = (0, y.Kc)().replace("https://", "");
        const _ = p.indexOf("/");
        _ >= 0 && (p = p.substring(0, _));
        let v = l
          ? `https://clips.twitch.tv/embed?clip=${a}`
          : `https://player.twitch.tv/?video=${a}`;
        return (
          (v += `&parent=${p}&autoplay=${m}&muted=${Boolean(n)}`),
          i &&
            (v += `&time=${(function (e) {
              const t = Math.floor(e / 3600);
              e -= 60 * t * 60;
              const a = Math.floor(e / 60);
              return `${t}h${a}m${(e -= a * e)}s`;
            })(i)}`),
          r.createElement(
            "div",
            { className: (0, R.Z)("YoutubePlayer", G().TwitchPlayer) },
            r.createElement("img", {
              className: (0, R.Z)(
                "YoutubePreviewContainer",
                A.YoutubePreviewImage,
                e.imageClassnames,
              ),
              src:
                y.De.COMMUNITY_CDN_URL +
                "public/shared/images/responsive/youtube_16x9_placeholder.gif",
            }),
            r.createElement("iframe", {
              src: v,
              allowFullScreen: !0,
              frameBorder: 0,
              width: s || 460,
              height: u || 300,
            }),
          )
        );
      }
      var x = a(43840),
        O = a(70750),
        Y = a(44421),
        j = a(31245),
        H = a(69338),
        M = a(66615),
        V = a(6049),
        U = a(14826),
        z = a(207),
        W = a(94608),
        Z = a.n(W),
        X = a(65858),
        Q = a(11581);
      function $(e) {
        const { clanInfo: t } = e,
          { curator_link: a, curator_medium_avatar: n } = (0, y.kQ)(
            "curator_header",
            "application_config",
          );
        return r.createElement(
          u.s,
          {
            className: "page_content_ctn",
            "flow-children": "column",
            autoFocus: !0,
          },
          r.createElement(
            "div",
            { className: "page_content" },
            r.createElement(
              u.s,
              { className: "list_header_area", "flow-children": "row" },
              r.createElement(
                "div",
                { className: "curator_avatar_image" },
                r.createElement(
                  i.IS,
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
                  className: Q.BreadContainer,
                  crumbs: (0, y.kQ)("breadcrumbs", "application_config"),
                }),
                r.createElement(
                  i.IS,
                  { className: "pageheader curator_name", href: a },
                  (0, U.Xx)("#SteamCurator_List_Header_List", t.group_name),
                ),
              ),
            ),
          ),
        );
      }
      const K = function (e) {
        const t = (0, b.L)();
        return r.createElement(
          s.p,
          { navID: "StoreCuratorPageRoot", NavigationManager: t },
          r.createElement(q, { listid: e.listid }),
        );
      };
      function q(e) {
        const t = parseInt(
            (0, y.kQ)("curator_account_id", "application_config"),
          ),
          a = (0, C.P4)(t),
          n = (0, C.N)(null == a ? void 0 : a.clanSteamID, e.listid);
        return (
          (0, L.ue)(),
          n
            ? r.createElement(
                r.Fragment,
                null,
                r.createElement($, { clanInfo: a }),
                r.createElement(
                  "div",
                  { className: "page_content_ctn grayscale" },
                  r.createElement(
                    "div",
                    { className: "page_content" },
                    r.createElement(
                      "div",
                      { className: Z().CuratorListCtn },
                      r.createElement(te, { listDetails: n }),
                      (0, C.FG)(n)
                        ? r.createElement(J, { listDetails: n })
                        : r.createElement(ee, {
                            listDetails: n,
                            rgListItems: n.apps,
                          }),
                      r.createElement(
                        "div",
                        { className: Z().CuratorMoreCtn },
                        r.createElement(
                          "h2",
                          null,
                          (0, U.Xx)("#SteamCurator_ExploreMoreTitle"),
                        ),
                        r.createElement(
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
          [a, n] = (0, r.useState)(null),
          o = new m.K(t.sale_clan_steamid),
          l = (0, d.Mx)(o.GetAccountID(), t.sale_clan_event_gid),
          i = (0, r.useMemo)(
            () => (t.apps || []).map((e) => e.recommended_app.appid),
            [t],
          ),
          s = f(l, i);
        return (
          (0, r.useEffect)(() => {
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
          r.createElement(ee, { listDetails: t, rgListItems: a })
        );
      }
      function ee(e) {
        const { listDetails: t, rgListItems: a } = e,
          [n, o] = (0, r.useState)(0),
          [l, s] = (0, r.useState)(null),
          c = (0, v.T)("CuratorAppListDisplay");
        if (
          (r.useEffect(() => {
            a &&
              (o((null == a ? void 0 : a.length) || 0),
              w.jg
                .Get()
                .HintLoad()
                .then(() => {
                  const e = a.map((e) => e.recommended_app.appid);
                  S.Z.Get()
                    .QueueMultipleAppRequests(e, O.NC)
                    .then(() => {
                      c.token.reason ||
                        s(
                          a.filter(
                            (e) =>
                              !(0, O.TR)(
                                S.Z.Get().GetApp(e.recommended_app.appid),
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
          return r.createElement(H.V, {
            string: (0, U.Xx)("#Loading"),
            position: "center",
            size: "medium",
          });
        const d = 1 == t.list_type;
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            u.s,
            {
              className: (0, R.Z)(Z().CuratorList, d && Z().CuratorListGrid),
              "flow-children": "grid",
            },
            l.map((e, a) =>
              r.createElement(ae, {
                key: "rec_" + e.recommended_app.appid,
                item: e,
                listDetails: t,
                bAutoFocus: 0 == a,
              }),
            ),
          ),
          Boolean(n > l.length) &&
            r.createElement(
              "div",
              null,
              r.createElement(
                "span",
                null,
                (0, U.kb)("#SteamCurator_Hidden", n - l.length),
                " ",
              ),
              r.createElement(
                i.IS,
                { href: y.De.STORE_BASE_URL + "account/preferences/" },
                (0, U.Xx)("#SteamCurator_Setting"),
              ),
            ),
        );
      }
      function te(e) {
        const { listDetails: t } = e,
          a = (0, C.yS)(t),
          n = (0, y.kQ)("showlisttitle", "application_config"),
          o = (0, y.kQ)("titleareaheight", "application_config"),
          s =
            t.list_jsondata.youtube_link &&
            (0, c.S6)(t.list_jsondata.youtube_link),
          u = t.list_jsondata.youtube_link && B(t.list_jsondata.youtube_link),
          d = (0, l.jM)(y.De.LANGUAGE),
          m = U.LZ.GetWithFallback(t.localized_flat_title, d),
          p = U.LZ.GetWithFallback(t.localized_flat_blurb, d),
          _ = U.LZ.GetWithFallback(t.localized_flat_link, d),
          v =
            a &&
            a.GetImageURL(
              (0, M.p)() ? "product_mobile_banner" : "product_banner",
              d,
            );
        return r.createElement(
          "div",
          { className: Z().TopReviewInfo },
          Boolean(v) &&
            r.createElement(
              i.IS,
              { href: a.GetSaleURL() },
              r.createElement("img", { className: Z().SaleBanner, src: v }),
            ),
          n && m && r.createElement("div", { className: Z().Title }, m),
          n && p && r.createElement("div", { className: Z().Blurb }, p),
          Boolean(o > 0) && r.createElement("div", { style: { height: o } }),
          s &&
            r.createElement(
              "div",
              { className: Z().VideoReviewCtn },
              r.createElement(V.C, {
                video: s.strVideoID,
                startSeconds: s.nStartSeconds,
                autoplay: !0,
                autopause: !0,
                showFullscreenBtn: !0,
                controls: !0,
                preloadYoutubeScripts: !0,
                playsInline: !0,
                imageClassnames: Z().YouTubePreviewImage,
              }),
            ),
          Boolean(u) &&
            r.createElement(
              "div",
              { className: Z().VideoReviewCtn },
              r.createElement(F, {
                videoid: u,
                posterURL: "",
                imageClassnames: Z().YouTubePreviewImage,
              }),
            ),
          _ && r.createElement(oe, { url: _ }),
        );
      }
      const ae = (0, n.Pi)((e) => {
        var t, a;
        const { item: n, listDetails: o, bAutoFocus: l } = e,
          i = parseInt((0, y.kQ)("curator_account_id", "application_config")),
          s = (0, C.P4)(i),
          [d] = (0, P.vs)(
            null === (t = null == n ? void 0 : n.recommended_app) ||
              void 0 === t
              ? void 0
              : t.appid,
            { include_assets: !0, include_release: !0 },
          ),
          m = (0, r.useMemo)(
            () => ({
              id: null == d ? void 0 : d.GetID(),
              type: (0, D.Ds)(
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
            blurb: v,
            time_recommended: h,
            recommendation_state: g,
          } = n.recommended_app,
          E = s.is_creator_home && !s.is_ogg,
          f =
            null === (a = o.list_jsondata.app_data) || void 0 === a
              ? void 0
              : a[p],
          b = _ && (0, c.S6)(_),
          w = _ && B(_),
          S = v != C.mb && v,
          L = I.ZP.Get().BHasDemoAppID(p),
          T = null == f ? void 0 : f.img_url,
          G = `curator_clanid=${s.clanAccountID}&curator_listid=${o.listid}`;
        return r.createElement(
          u.s,
          { className: Z().CuratorReview, autoFocus: l },
          r.createElement(
            "div",
            { className: Z().CapsuleCtn },
            Boolean(b || w)
              ? r.createElement(ne, {
                  strVideoID: (null == b ? void 0 : b.strVideoID) || w,
                  nStartSeconds: null == b ? void 0 : b.nStartSeconds,
                  info: m,
                  strImgOverrideUrl: T,
                  bShowDemoButton: L,
                  strExtraParams: G,
                  bTwitchVideo: Boolean(w),
                })
              : r.createElement(j.B, {
                  imageType: "header",
                  capsule: m,
                  bShowDemoButton: L,
                  strExtraParams: G,
                }),
          ),
          r.createElement(
            "div",
            { className: Z().ReviewTextSection },
            r.createElement("div", { className: Z().GameTitle }, d.GetName()),
            r.createElement(
              "div",
              { className: Z().RecommendationTypeAndDate },
              r.createElement(re, { type: g }),
              r.createElement(
                "div",
                { className: Z().ReviewDate },
                E || !Boolean(h)
                  ? (0, U.Xx)(
                      "#EventModTile_ReleaseDate",
                      d.GetFormattedSteamReleaseDate(),
                    )
                  : (0, U.vX)(h),
              ),
            ),
            Boolean(S) &&
              r.createElement(
                "div",
                { className: Z().ReviewBlurb },
                (0, U.Xx)("#SteamCurator_ReviewTextQuoted", S),
              ),
            Boolean(_) && r.createElement(oe, { url: _ }),
          ),
        );
      });
      function ne(e) {
        const {
            strVideoID: t,
            nStartSeconds: a,
            info: n,
            strImgOverrideUrl: o,
            bShowDemoButton: l,
            strExtraParams: i,
            bTwitchVideo: s,
          } = e,
          [u] = (0, P.jk)(n.id, (0, D.TM)(n.type), { include_assets: !0 });
        return r.createElement(
          "div",
          { className: Z().YouTubeCapsule },
          r.createElement(
            "div",
            { className: Z().YouTubeCtn },
            s
              ? r.createElement(F, {
                  videoid: t,
                  posterURL: null == u ? void 0 : u.GetAssets().GetHeaderURL(),
                  imageClassnames: Z().YouTubePreviewImage,
                  autoplay: !0,
                })
              : r.createElement(V.C, {
                  video: t,
                  startSeconds: a,
                  autoplay: !0,
                  autopause: !0,
                  showFullscreenBtn: !0,
                  controls: !0,
                  preloadYoutubeScripts: !0,
                  playsInline: !0,
                  imageClassnames: Z().YouTubePreviewImage,
                  altImg: o,
                }),
          ),
          r.createElement(
            "div",
            { className: Z().YouTubeCapsuleBottomBar },
            r.createElement(
              "div",
              { className: Z().GameImageCtn },
              r.createElement(
                x.ll,
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
                r.createElement("img", {
                  className: Z().GameImage,
                  src:
                    null == u ? void 0 : u.GetAssets().GetLibraryCapsuleURL(),
                }),
              ),
            ),
            r.createElement(Y.Hl, { info: n, strClassName: Z().FullWidth }),
          ),
        );
      }
      function re(e) {
        switch (e.type) {
          case 0:
            return r.createElement(
              "div",
              { className: Z().Recommended },
              (0, U.Xx)("#SteamCurator_Recommended"),
            );
          case 1:
            return r.createElement(
              "div",
              { className: Z().NotRecommended },
              (0, U.Xx)("#SteamCurator_NotRecommended"),
            );
          case 2:
            return r.createElement(
              "div",
              { className: Z().Informational },
              (0, U.Xx)("#SteamCurator_Informational"),
            );
          default:
            return null;
        }
      }
      function oe(e) {
        let t = (0, p.B1)(e.url);
        (0, o.A)(t) &&
          (t =
            (y.De.IN_CLIENT ? "steam://openurl_external/" : "") +
            y.De.COMMUNITY_BASE_URL +
            "linkfilter/?url=" +
            t);
        const a = (0, z.FM)(e.url),
          n = (0, c.HO)(e.url);
        return r.createElement(
          "div",
          { className: Z().FullReviewLink },
          r.createElement(
            i.IS,
            {
              className: Z().FullReviewAnchor,
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
          r.createElement(
            "div",
            { className: Z().FullReviewDomain },
            (0, U.Xx)("#SteamCurator_ReviewLinkHostnameBracketed", a),
          ),
        );
      }
    },
  },
]);
