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
    21807: (e) => {
      e.exports = { BreadContainer: "breadcrumbs_BreadContainer_1QPim" };
    },
    36567: (e) => {
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
    29181: (e) => {
      e.exports = { strMaxMobileWidth: "700px" };
    },
    47784: (e) => {
      e.exports = {
        YoutubePreviewImage: "youtubepreviewimage_YoutubePreviewImage_MzScK",
        YoutubePlayer: "youtubepreviewimage_YoutubePlayer_3uK6c",
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
      a.d(t, { p: () => u });
      var r = a(70655),
        n = a(67294),
        o = a(7707),
        l = a(27745),
        i = a(30156),
        s = a(90666);
      function u(e) {
        const { children: t, navTreeRef: a } = e,
          u = (0, r._T)(e, ["children", "navTreeRef"]),
          c = n.useRef(),
          d = (0, i.BE)(c, a);
        if (s.De.IN_GAMEPADUI) {
          const e = window.__nav_tree_root;
          return n.createElement(
            o.Fe,
            Object.assign({}, u, {
              navTreeRef: d,
              secondary: !0,
              parentEmbeddedNavTree: e,
            }),
            n.createElement(l.O, null, t)
          );
        }
        return n.createElement(n.Fragment, null, t);
      }
    },
    13354: (e, t, a) => {
      "use strict";
      a.d(t, {
        Bo: () => C,
        FG: () => S,
        N: () => w,
        P4: () => I,
        mb: () => f,
        yS: () => P,
      });
      var r = a(70655),
        n = a(9669),
        o = a.n(n),
        l = a(22188),
        i = a(67294),
        s = (a(26149), a(92398), a(37662), a(3389)),
        u = a(76776),
        c = a(39388),
        d = a(77636),
        m = a(7200),
        p = a(89673),
        _ = (a(82946), a(48780)),
        v = a(77520),
        h = a(93976),
        g = a(30156),
        y = a(90666);
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
      const f = "0";
      function b(e, t) {
        (t.localized_flat_title = (0, _.LG)([], 30, null)),
          (t.localized_flat_blurb = (0, _.LG)([], 30, null)),
          (t.localized_flat_link = (0, _.LG)([], 30, null)),
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
      class C {
        constructor() {
          (this.m_mapList = new Map()),
            (this.m_mapEventGIDToLists = new Map()),
            (this.m_mapListIDToClanAccount = new Map()),
            "dev" == y.De.WEB_UNIVERSE && (window.g_curatorListStore = this);
          let e = (0, y.kQ)("curatorlistdata", "application_config");
          ("dev" != y.De.WEB_UNIVERSE && "beta" != y.De.WEB_UNIVERSE) ||
            console.log(
              "DEV_DEBUG: CCuratorListStore loading list payload: " +
                (null == e ? void 0 : e.length),
              e
            ),
            this.ValidateStoreDefault(e) &&
              (0, l.z)(() => {
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
          var n;
          return (0, r.mG)(this, void 0, void 0, function* () {
            if (this.m_mapList.has(t)) return this.m_mapList.get(t);
            const r =
                y.De.STORE_BASE_URL +
                "curator/" +
                e.GetAccountID() +
                "/admin/ajaxgetlistdetails",
              l = { listid: t };
            try {
              const i = yield o().get(r, {
                params: l,
                cancelToken: null == a ? void 0 : a.token,
              });
              if (
                1 ==
                (null === (n = null == i ? void 0 : i.data) || void 0 === n
                  ? void 0
                  : n.success)
              ) {
                const a = Object.assign({}, i.data.list_details);
                return (
                  (0, v.X)(
                    t == (null == a ? void 0 : a.listid),
                    "Wanted" + t + "but got" + (null == a ? void 0 : a.listid)
                  ),
                  E(a),
                  b(i.data.curation_language, a),
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
                t
              );
            }
            return null;
          });
        }
        LoadMyFollowedSaleCurationLists(e, t, a) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            if (
              !y.L7.logged_in ||
              (d.jg.Get().BIsLoaded() &&
                0 == d.jg.Get().GetFollowedCuratorCount())
            )
              return [];
            const r =
                y.De.STORE_BASE_URL + "curators/ajaxgetmycuratorsalelists",
              n = {
                clan_account_id: e.GetAccountID(),
                clan_event_gid: t,
                origin: self.origin,
                curator_clan_account_followed: d.jg.Get().BIsLoaded()
                  ? d.jg.Get().GetFollowedCuratorsAccountID().join(",")
                  : void 0,
              };
            return this.InternalLoadSaleCuratorLists(
              r,
              n,
              "CCuratorListStore.LoadMyFollowedSaleCurationLists",
              e,
              t,
              a
            );
          });
        }
        LoadAllSaleCurationLists(e, t, a) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            if (this.m_mapEventGIDToLists.has(t))
              return this.m_mapEventGIDToLists.get(t);
            const r = y.De.STORE_BASE_URL + "curators/ajaxfindcuratorlists",
              n = {
                clan_account_id: e.GetAccountID(),
                clan_event_gid: t,
                origin: self.origin,
              };
            return this.InternalLoadSaleCuratorLists(
              r,
              n,
              "CCuratorListStore.LoadAllSaleCurationLists",
              e,
              t,
              a
            );
          });
        }
        InternalLoadSaleCuratorLists(e, t, a, n, i, s) {
          var u;
          return (0, r.mG)(this, void 0, void 0, function* () {
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
                            t.clan_account_id
                          ),
                            E(a),
                            b(t.curation_language, a),
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
          return C.s_Singleton || (C.s_Singleton = new C()), C.s_Singleton;
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
        const a = (0, g.NW)();
        return (
          (0, i.useEffect)(() => {
            if (C.Get().GetListDetails(t) || !e) return;
            const n = o().CancelToken.source();
            return (
              (() => {
                (0, r.mG)(this, void 0, void 0, function* () {
                  var r, o;
                  const l = yield C.Get().LoadListDetails(e, t);
                  if (!n.token.reason)
                    if (
                      null === (r = null == l ? void 0 : l.apps) || void 0 === r
                        ? void 0
                        : r.length
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
                        })
                      ),
                        c.ZP.Get().LoadAppIDsBatch(e.map((e) => e.id)),
                        a();
                    } else console.error("Found no list data");
                });
              })(),
              () => n.cancel("unmounting CuratorList")
            );
          }, [e, t, a]),
          C.Get().GetListDetails(t)
        );
      }
      function I(e) {
        const t = e && u.sV.GetClanInfoByClanAccountID(e),
          [a, r] = (0, i.useState)(!!t);
        return (
          (0, i.useEffect)(() => {
            if (a && e) {
              const t = s.K.InitFromClanID(e);
              u.sV.LoadClanInfoForClanSteamID(t).finally(() => {
                r(!0);
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
      function P(e) {
        const t = (0, g.NW)(),
          a = S(e) ? e.sale_clan_event_gid : null,
          n = a && m.j1.GetClanEventModel(a);
        return (
          (0, i.useEffect)(() => {
            if (n || !S(e)) return;
            const l = o().CancelToken.source();
            return (
              (() => {
                (0, r.mG)(this, void 0, void 0, function* () {
                  m.j1.Init(),
                    yield m.j1.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                      new s.K(e.sale_clan_steamid),
                      a,
                      0
                    ),
                    l.token.reason || t();
                });
              })(),
              () => l.cancel("unmounting CuratorList")
            );
          }, [e, a, n, t]),
          n
        );
      }
      (0, r.gn)([l.LO], C.prototype, "m_mapList", void 0);
    },
    54881: (e, t, a) => {
      "use strict";
      a.d(t, { b: () => u });
      var r = a(67294),
        n = a(21807),
        o = a(7573),
        l = a(73727),
        i = a(7707),
        s = a(35921);
      function u(e) {
        const { crumbs: t, className: a } = e;
        return t && 0 != t.length
          ? r.createElement(
              "div",
              { className: (0, o.Z)(n.BreadContainer, a) },
              r.createElement(
                s.s,
                { className: "blockbg", "flow-children": "row" },
                t.map((e) => {
                  const t = new Array();
                  return (
                    e.url.startsWith("http")
                      ? t.push(
                          r.createElement(
                            i.IS,
                            { key: "anchor_" + e.name, href: e.url },
                            e.name
                          )
                        )
                      : t.push(
                          r.createElement(
                            l.rU,
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
    87541: (e, t, a) => {
      "use strict";
      a.d(t, { B: () => T, O: () => L });
      var r = a(67294),
        n = a(77442),
        o = a(7707),
        l = a(35921),
        i = a(39746),
        s = (a(37662), a(67833)),
        u = (a(990), a(77636)),
        c = a(48116),
        d = a(52114),
        m = a(36567),
        p = a(67777),
        _ = a(85732),
        v = a(88335),
        h = a.n(v),
        g = a(88592),
        y = a(71387),
        E = (a(45031), a(75896)),
        f = a(72062),
        b = a(72842),
        C = a(5146),
        w = a(65160),
        I = a(65924),
        S = a(7573),
        P = a(41311),
        D = a(90666);
      const L = "capsule_index_";
      function T(e) {
        const {
            capsule: t,
            bShowParentApp: a,
            strExtraParams: s,
            elElementToAppendToHover: u,
            index: _,
            bAutoFocus: v,
          } = e,
          [g, y] = r.useState(!1),
          [b] = (0, d.jk)(t.id, (0, c.TM)(t.type), n.bk),
          [w] = (0, d.vs)(a && (null == b ? void 0 : b.GetParentAppID()), n.bk),
          T = (0, I.bJ)();
        if (!b) return null;
        const N = Boolean(w);
        return r.createElement(
          l.s,
          {
            className: (0, S.Z)({
              [h().OuterCapsuleContainer]: !0,
              [L + _]: 0 == _,
            }),
            navEntryPreferPosition: i.c4.PREFERRED_CHILD,
            autoFocus: v,
          },
          r.createElement(
            f.zw,
            { appid: b.GetAppID() },
            r.createElement(
              p.ll,
              {
                className: h().CapsuleContainer,
                item: t,
                elElementToAppend: e.elElementToAppendToHover,
                bShowDemoButton: e.bShowDemoButton,
                bShowDeckCompatibilityDialog: e.bShowDeckCompatibilityDialog,
                bHidePrice: e.bHidePrice,
                bUseSubscriptionLayout: e.bUseSubscriptionLayout,
                strExtraParams: e.strExtraParams,
                fnOnHoverStateChange: !D.De.IN_GAMEPADUI && y,
                nCreatorAccountID: e.creatorAccountID,
              },
              r.createElement(
                R,
                Object.assign({}, e, {
                  info: t,
                  bIsHovered: g,
                  bHasParentAppToDisplay: N,
                })
              )
            ),
            Boolean(u) && r.createElement("div", null, u)
          ),
          N &&
            r.createElement(
              o.Ks,
              Object.assign(
                { className: h().CapsuleParentInfo },
                (0, E.h)(w, T, e.strExtraParams)
              ),
              r.createElement(
                f.zw,
                { appid: w.GetAppID() },
                r.createElement(
                  "div",
                  { className: h().ParentType },
                  (0, P.Xx)(
                    11 == b.GetAppType()
                      ? "#SalePage_ParentApp_SoundTrack"
                      : "#SalePage_ParentApp_DLC"
                  )
                ),
                r.createElement(
                  C._,
                  {
                    type: "app",
                    id: w.GetAppID(),
                    strExtraParams: e.strExtraParams,
                  },
                  r.createElement(
                    "img",
                    Object.assign(
                      {
                        loading: "lazy",
                        className: m.AppCapsuleImage,
                        alt: w.GetName(),
                        src: w.GetAssets().GetSmallCapsuleURL(),
                      },
                      (0, n.fn)()
                    )
                  )
                )
              )
            )
        );
      }
      function R(e) {
        var t;
        const {
            info: a,
            bHidePriceIfOwned: n,
            bHideStatusBanners: l,
            strExtraParams: i,
            imageType: m,
            bHasParentAppToDisplay: v,
            bUseSubscriptionLayout: h,
            elElementToAppendToHover: E,
            bHidePrice: C,
            bHidePlatforms: S,
            creatorAccountID: P,
            bIsHovered: L,
          } = e,
          [T] = (0, d.jk)(a.id, (0, c.TM)(a.type), { include_platforms: !0 }),
          R = (0, I.bJ)(),
          N = (0, f.Dt)(a.type),
          G = (0, r.useMemo)(
            () => (null == T ? void 0 : T.GetIncludedAppIDsOrSelf()),
            [T]
          ),
          A =
            T &&
            (null == T
              ? void 0
              : T.GetIncludedAppIDsOrSelf().every((e) =>
                  u.jg.Get().BOwnsApp(e)
                ));
        if (!T) return null;
        const k = A && !l,
          B = (0, s.Hf)(
            `${D.De.STORE_BASE_URL}${N}/${a.id}${i ? `?${i}` : ""}`,
            R
          );
        let F,
          x = null;
        if (h && 0 == (null == T ? void 0 : T.GetStoreItemType()))
          x = r.createElement(b.r, { appid: T.GetAppID(), bIsMuted: L });
        else if (E);
        else {
          const e = A && n,
            t = k;
          x = r.createElement(_.Hl, {
            info: a,
            bShowAsMuted: t,
            bHidePrice: C,
            bShowInLibraryInsteadOfPrice: e,
            bHidePlatforms: S,
            creatorAccountID: P,
          });
        }
        return (
          "overrideNavigation" in a &&
            (F = (e) => (
              a.overrideNavigation(),
              e.preventDefault(),
              e.stopPropagation(),
              !1
            )),
          r.createElement(
            o.IS,
            {
              href: F ? null : B,
              style: { display: "block" },
              preferredFocus: v,
              onClick: F,
            },
            r.createElement(y.vs, { appids: G, hide_status_banners: l }),
            r.createElement(_.a4, { imageType: m, info: a }),
            r.createElement(w.y, {
              eDeckCompatibilityCategory:
                null === (t = null == T ? void 0 : T.GetPlatforms()) ||
                void 0 === t
                  ? void 0
                  : t.steam_deck_compat_category,
            }),
            Boolean(L && !(0, p.Hu)()) && r.createElement(g.v, { appInfo: a }),
            x
          )
        );
      }
    },
    6092: (e, t, a) => {
      "use strict";
      a.d(t, { p: () => o });
      var r = a(29181),
        n = a.n(r);
      function o() {
        return window.innerWidth < parseInt(n().strMaxMobileWidth);
      }
    },
    13308: (e, t, a) => {
      "use strict";
      a.d(t, { q: () => b, C: () => C });
      var r,
        n = a(67294),
        o = a(96187),
        l = a(95598),
        i = a(70655),
        s = a(48780),
        u = a(80533),
        c = a(30156),
        d = a(7573),
        m = a(13596);
      !(function (e) {
        (e[(e.NotLoaded = 0)] = "NotLoaded"),
          (e[(e.Loading = 1)] = "Loading"),
          (e[(e.Loaded = 2)] = "Loaded");
      })(r || (r = {}));
      let p = r.NotLoaded,
        _ = [];
      function v(e) {
        if (p == r.Loaded) return void e();
        if (p == r.NotLoaded) {
          let e = document.createElement("script");
          e.src = "https://www.youtube.com/iframe_api";
          let t = document.getElementsByTagName("script")[0];
          t.parentNode.insertBefore(e, t), (window.onYouTubeIframeAPIReady = h);
        }
        _.findIndex((t) => e == t) < 0 && _.push(e);
      }
      function h() {
        p = r.Loaded;
        for (let e of _) e();
        _ = [];
      }
      class g extends n.Component {
        constructor(e) {
          super(e),
            (this.m_strPlayerID = ""),
            (this.m_player = null),
            (this.m_playerContainer = null),
            (this.m_bPlayerReady = !1),
            (this.m_strPlayerID = "YoutubePlayer_" + g.s_nPlayerIndex++),
            (this.state = { bYoutubeLoaded: !1 });
        }
        componentWillUnmount() {
          var e;
          this.DestroyPlayer(), (e = this.OnYoutubeScriptsReady), s.Zf(_, e);
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
            this.m_playerContainer && v(this.OnYoutubeScriptsReady));
        }
        OnYoutubeScriptsReady() {
          this.CreatePlayer(this.props);
        }
        CreatePlayer(e) {
          if ((this.DestroyPlayer(), !this.m_playerContainer)) return;
          const t = !1 === e.autoplay ? 0 : 1,
            a = !0 === e.showInfo ? 1 : 0,
            r = !0 === e.controls ? 1 : 0,
            n = !0 === e.showFullscreenBtn ? 1 : 0,
            o = !0 === e.playsInline ? 1 : 0;
          let l = {
              width: void 0 !== e.width ? String(e.width) : void 0,
              height: void 0 !== e.height ? String(e.height) : void 0,
              videoId: e.video,
              playerVars: {
                autoplay: t,
                showinfo: a,
                autohide: 1,
                fs: n,
                modestbranding: 1,
                rel: 0,
                playsinline: o,
                iv_load_policy: 3,
                controls: r,
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
          const e = n.createElement(
            "div",
            {
              key: this.m_strPlayerID,
              ref: this.BindPlayerContainer,
              className: (0, d.Z)("YoutubePlayer", this.props.classnames),
            },
            n.createElement(m.V, { className: "YoutubePlayerThrobber" })
          );
          return this.props.autopause
            ? n.createElement(u.h, { onLeave: this.OnPlayerLeftView }, e)
            : e;
        }
      }
      (g.s_nPlayerIndex = 0),
        (0, i.gn)([c.ak], g.prototype, "BindPlayerContainer", null),
        (0, i.gn)([c.ak], g.prototype, "OnYoutubeScriptsReady", null),
        (0, i.gn)([c.ak], g.prototype, "CreatePlayer", null),
        (0, i.gn)([c.ak], g.prototype, "OnPlayerReady", null),
        (0, i.gn)([c.ak], g.prototype, "OnPlayerStateChange", null),
        (0, i.gn)([c.ak], g.prototype, "OnError", null),
        (0, i.gn)([c.ak], g.prototype, "OnPlayerLeftView", null),
        (0, i.gn)([c.ak], g.prototype, "PlayVideo", null);
      var y = a(41311),
        E = a(47784),
        f = a.n(E);
      const b = (e) => {
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
              i = () => {
                a + 1 < t.length && r(a + 1);
              },
              s = () => {
                l.current && l.current.naturalHeight < 91 && i();
              };
            return n.createElement("img", {
              ref: l,
              onLoad: s,
              onError: i,
              src: o,
              className: (0, d.Z)(f().YoutubePreviewImage, e.className),
            });
          }
        },
        C = (e) => {
          const [t, a] = n.useState(!1);
          if (
            (n.useEffect(() => {
              e.preloadYoutubeScripts && v(() => {});
            }, [e.preloadYoutubeScripts]),
            t)
          )
            return n.createElement(
              g,
              Object.assign({}, e, {
                classnames: (0, d.Z)(f().YoutubePlayer, e.classnames),
              })
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
                className: (0, d.Z)(
                  "YoutubePreviewContainer",
                  f().YoutubePreviewImage,
                  e.imageClassnames
                ),
                onClick: t,
              },
              n.createElement(b, {
                className: "YoutubePreviewImage",
                altImgWithFallback: e.altImgWithFallback,
                altImg: e.altImg,
                video: e.video,
              }),
              n.createElement(
                "div",
                { className: "YoutubePreviewPlay" },
                n.createElement(l.GhU, null)
              ),
              n.createElement(
                "div",
                { className: "VideoHintText" },
                (0, y.Xx)("#EventCalendar_WatchYouTubeVideo")
              )
            );
          }
        };
    },
    53881: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { CuratorReviewListContainer: () => K, default: () => Q });
      var r = a(29323),
        n = a(67294),
        o = a(63473),
        l = a(26149),
        i = (a(92398), a(7707)),
        s = a(34425),
        u = a(35921),
        c = a(4224),
        d = (a(37662), a(50153)),
        m = a(3389),
        p = a(67833),
        _ = a(70655),
        v = a(74163),
        h = a(9669),
        g = a.n(h),
        y = (a(82946), a(90666)),
        E = a(93976);
      function f(e, t) {
        const [a, r] = (0, n.useState)(
            (null == e ? void 0 : e.BUsesContentHubForItemSource())
              ? new Set()
              : null
          ),
          o = (0, v.T)("useFilteredAppViaContentHub");
        return (
          (0, n.useEffect)(() => {
            (null == e ? void 0 : e.BUsesContentHubForItemSource()) &&
              !a &&
              (function (e, t) {
                var a;
                return (0, _.mG)(this, void 0, void 0, function* () {
                  const r =
                      y.De.STORE_BASE_URL +
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
                  let o = null;
                  const l = new Set();
                  try {
                    const e = yield g().get(r, { params: n });
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
                      o
                    ),
                    l
                  );
                });
              })(e, t).then((e) => {
                o.token.reason || r(e);
              });
          }, [a, o.token.reason, e, t]),
          a
        );
      }
      var b = a(13354),
        C = a(71174),
        w = a(39388),
        I = a(77636),
        S = a(159),
        P = a(48116),
        D = a(52114),
        L = a(99312),
        T = a.n(L),
        R = a(95598),
        N = (a(8456), a(7573)),
        G = a(47784);
      const A = new RegExp(
        "(?:https?://)?(?:www.)?twitch.tv/videos/([0-9]+)S*"
      );
      function k(e) {
        const t = A.exec(e);
        return (null == t ? void 0 : t.length) > 1 ? t[1] : null;
      }
      function B(e) {
        const {
            posterURL: t,
            videoid: a,
            muted: r,
            autoplay: o,
            bIsClipID: l,
            time: i,
            width: s,
            height: u,
          } = e,
          [c, d] = n.useState(Boolean(t)),
          m = null != o && null != o && o;
        if (c)
          return n.createElement(
            "div",
            {
              className: (0, N.Z)(
                "YoutubePreviewContainer",
                G.YoutubePreviewImage,
                e.imageClassnames
              ),
              onClick: () => d(!1),
            },
            n.createElement("img", {
              className: (0, N.Z)("YoutubePreviewImage", G.YoutubePreviewImage),
              src:
                t ||
                y.De.COMMUNITY_CDN_URL +
                  "public/shared/images/responsive/youtube_16x9_placeholder.gif",
            }),
            n.createElement(
              "div",
              { className: "YoutubePreviewPlay" },
              n.createElement(R.GhU, null)
            )
          );
        let p = (0, y.Kc)().replace("https://", "");
        const _ = p.indexOf("/");
        _ >= 0 && (p = p.substring(0, _));
        let v = l
          ? `https://clips.twitch.tv/embed?clip=${a}`
          : `https://player.twitch.tv/?video=${a}`;
        return (
          (v += `&parent=${p}&autoplay=${m}&muted=${Boolean(r)}`),
          i &&
            (v += `&time=${(function (e) {
              const t = Math.floor(e / 3600);
              e -= 60 * t * 60;
              const a = Math.floor(e / 60);
              return `${t}h${a}m${(e -= a * e)}s`;
            })(i)}`),
          n.createElement(
            "div",
            { className: (0, N.Z)("YoutubePlayer", T().TwitchPlayer) },
            n.createElement("img", {
              className: (0, N.Z)(
                "YoutubePreviewContainer",
                G.YoutubePreviewImage,
                e.imageClassnames
              ),
              src:
                y.De.COMMUNITY_CDN_URL +
                "public/shared/images/responsive/youtube_16x9_placeholder.gif",
            }),
            n.createElement("iframe", {
              src: v,
              allowFullScreen: !0,
              frameBorder: 0,
              width: s || 460,
              height: u || 300,
            })
          )
        );
      }
      var F = a(67777),
        x = a(89673),
        O = a(85732),
        Y = a(87541),
        M = a(13596),
        H = a(6092),
        j = a(13308),
        U = a(41311),
        V = a(35092),
        z = a(86196),
        W = a.n(z),
        Z = (a(76776), a(54881)),
        X = a(38547);
      function $(e) {
        const { clanInfo: t } = e,
          { curator_link: a, curator_medium_avatar: r } = (0, y.kQ)(
            "curator_header",
            "application_config"
          );
        return n.createElement(
          u.s,
          {
            className: "page_content_ctn",
            "flow-children": "column",
            autoFocus: !0,
          },
          n.createElement(
            "div",
            { className: "page_content" },
            n.createElement(
              u.s,
              { className: "list_header_area", "flow-children": "row" },
              n.createElement(
                "div",
                { className: "curator_avatar_image" },
                n.createElement(
                  i.IS,
                  { href: a },
                  n.createElement("img", {
                    className: "curator_avatar",
                    src: r,
                  })
                )
              ),
              n.createElement(
                "div",
                { className: "curator_details" },
                n.createElement(Z.b, {
                  className: X.BreadContainer,
                  crumbs: (0, y.kQ)("breadcrumbs", "application_config"),
                }),
                n.createElement(
                  i.IS,
                  { className: "pageheader curator_name", href: a },
                  (0, U.Xx)("#SteamCurator_List_Header_List", t.group_name)
                )
              )
            )
          )
        );
      }
      const Q = function (e) {
        const t = (0, C.L)();
        return n.createElement(
          s.p,
          { navID: "StoreCuratorPageRoot", NavigationManager: t },
          n.createElement(K, { listid: e.listid })
        );
      };
      function K(e) {
        const t = parseInt(
            (0, y.kQ)("curator_account_id", "application_config")
          ),
          a = (0, b.P4)(t),
          r = (0, b.N)(null == a ? void 0 : a.clanSteamID, e.listid);
        return r
          ? n.createElement(
              n.Fragment,
              null,
              n.createElement($, { clanInfo: a }),
              n.createElement(
                "div",
                { className: "page_content_ctn grayscale" },
                n.createElement(
                  "div",
                  { className: "page_content" },
                  n.createElement(
                    "div",
                    { className: W().CuratorListCtn },
                    n.createElement(ee, { listDetails: r }),
                    (0, b.FG)(r)
                      ? n.createElement(q, { listDetails: r })
                      : n.createElement(J, {
                          listDetails: r,
                          rgListItems: r.apps,
                        }),
                    n.createElement(
                      "div",
                      { className: W().CuratorMoreCtn },
                      n.createElement(
                        "h2",
                        null,
                        (0, U.Xx)("#SteamCurator_ExploreMoreTitle")
                      ),
                      n.createElement(
                        i.IS,
                        { href: a.vanity_url },
                        (0, U.kQ)("#SteamCurator_MoreReviews", a.group_name)
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
          [a, r] = (0, n.useState)(null),
          o = new m.K(t.sale_clan_steamid),
          l = (0, d.Mx)(o.GetAccountID(), t.sale_clan_event_gid),
          i = (0, n.useMemo)(
            () => (t.apps || []).map((e) => e.recommended_app.appid),
            [t]
          ),
          s = f(l, i);
        return (
          (0, n.useEffect)(() => {
            var e, a;
            if (l)
              if (l.BUsesContentHubForItemSource())
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
                const e = l.GetSaleFeaturedApps();
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
          }, [t, l, s]),
          n.createElement(J, { listDetails: t, rgListItems: a })
        );
      }
      function J(e) {
        const { listDetails: t, rgListItems: a } = e,
          [r, o] = (0, n.useState)(0),
          [l, s] = (0, n.useState)(null),
          c = (0, v.T)("CuratorAppListDisplay");
        if (
          (n.useEffect(() => {
            a &&
              (o((null == a ? void 0 : a.length) || 0),
              I.jg
                .Get()
                .HintLoad()
                .then(() => {
                  const e = a.map((e) => e.recommended_app.appid);
                  S.Z.Get()
                    .QueueMultipleAppRequests(e, x.NC)
                    .then(() => {
                      c.token.reason ||
                        s(
                          a.filter(
                            (e) =>
                              !(0, x.TR)(
                                S.Z.Get().GetApp(e.recommended_app.appid)
                              )
                          )
                        );
                    })
                    .catch(() => {
                      c.token.reason || s([]);
                    });
                }));
          }, [a, c]),
          null == l)
        )
          return n.createElement(M.V, {
            string: (0, U.Xx)("#Loading"),
            position: "center",
            size: "medium",
          });
        const d = 1 == t.list_type;
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(
            u.s,
            {
              className: (0, N.Z)(W().CuratorList, d && W().CuratorListGrid),
              "flow-children": "grid",
            },
            l.map((e, a) =>
              n.createElement(te, {
                key: "rec_" + e.recommended_app.appid,
                item: e,
                listDetails: t,
                bAutoFocus: 0 == a,
              })
            )
          ),
          Boolean(r > l.length) &&
            n.createElement(
              "div",
              null,
              n.createElement(
                "span",
                null,
                (0, U.kb)("#SteamCurator_Hidden", r - l.length),
                " "
              ),
              n.createElement(
                i.IS,
                { href: y.De.STORE_BASE_URL + "account/preferences/" },
                (0, U.Xx)("#SteamCurator_Setting")
              )
            )
        );
      }
      function ee(e) {
        const { listDetails: t } = e,
          a = (0, b.yS)(t),
          r = (0, y.kQ)("showlisttitle", "application_config"),
          o = (0, y.kQ)("titleareaheight", "application_config"),
          s =
            t.list_jsondata.youtube_link &&
            (0, c.S6)(t.list_jsondata.youtube_link),
          u = t.list_jsondata.youtube_link && k(t.list_jsondata.youtube_link),
          d = (0, l.jM)(y.De.LANGUAGE),
          m = U.LZ.GetWithFallback(t.localized_flat_title, d),
          p = U.LZ.GetWithFallback(t.localized_flat_blurb, d),
          _ = U.LZ.GetWithFallback(t.localized_flat_link, d),
          v =
            a &&
            a.GetImageURL(
              (0, H.p)() ? "product_mobile_banner" : "product_banner",
              d
            );
        return n.createElement(
          "div",
          { className: W().TopReviewInfo },
          Boolean(v) &&
            n.createElement(
              i.IS,
              { href: a.GetSaleURL() },
              n.createElement("img", { className: W().SaleBanner, src: v })
            ),
          r && m && n.createElement("div", { className: W().Title }, m),
          r && p && n.createElement("div", { className: W().Blurb }, p),
          Boolean(o > 0) && n.createElement("div", { style: { height: o } }),
          s &&
            n.createElement(
              "div",
              { className: W().VideoReviewCtn },
              n.createElement(j.C, {
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
          Boolean(u) &&
            n.createElement(
              "div",
              { className: W().VideoReviewCtn },
              n.createElement(B, {
                videoid: u,
                posterURL: "",
                imageClassnames: W().YouTubePreviewImage,
              })
            ),
          _ && n.createElement(ne, { url: _ })
        );
      }
      const te = (0, r.Pi)((e) => {
        var t, a;
        const { item: r, listDetails: o, bAutoFocus: l } = e,
          i = parseInt((0, y.kQ)("curator_account_id", "application_config")),
          s = (0, b.P4)(i),
          [d] = (0, D.vs)(
            null === (t = null == r ? void 0 : r.recommended_app) ||
              void 0 === t
              ? void 0
              : t.appid,
            { include_assets: !0, include_release: !0 }
          ),
          m = (0, n.useMemo)(
            () => ({
              id: null == d ? void 0 : d.GetID(),
              type: (0, P.Ds)(
                null == d ? void 0 : d.GetStoreItemType(),
                null == d ? void 0 : d.GetAppType()
              ),
            }),
            [d]
          );
        if (!s || !d) return null;
        const {
            appid: p,
            link_url: _,
            blurb: v,
            time_recommended: h,
            recommendation_state: g,
          } = r.recommended_app,
          E = s.is_creator_home && !s.is_ogg,
          f =
            null === (a = o.list_jsondata.app_data) || void 0 === a
              ? void 0
              : a[p],
          C = _ && (0, c.S6)(_),
          I = _ && k(_),
          S = v != b.mb && v,
          L = w.ZP.Get().BHasDemoAppID(p),
          T = null == f ? void 0 : f.img_url,
          R = `curator_clanid=${s.clanAccountID}&curator_listid=${o.listid}`;
        return n.createElement(
          u.s,
          { className: W().CuratorReview, autoFocus: l },
          n.createElement(
            "div",
            { className: W().CapsuleCtn },
            Boolean(C || I)
              ? n.createElement(ae, {
                  strVideoID: (null == C ? void 0 : C.strVideoID) || I,
                  nStartSeconds: null == C ? void 0 : C.nStartSeconds,
                  info: m,
                  strImgOverrideUrl: T,
                  bShowDemoButton: L,
                  strExtraParams: R,
                  bTwitchVideo: Boolean(I),
                })
              : n.createElement(Y.B, {
                  imageType: "header",
                  bAutoFocus: l,
                  capsule: m,
                  bShowDemoButton: L,
                  strExtraParams: R,
                })
          ),
          n.createElement(
            "div",
            { className: W().ReviewTextSection },
            n.createElement("div", { className: W().GameTitle }, d.GetName()),
            n.createElement(
              "div",
              { className: W().RecommendationTypeAndDate },
              n.createElement(re, { type: g }),
              n.createElement(
                "div",
                { className: W().ReviewDate },
                E || !Boolean(h)
                  ? (0, U.Xx)(
                      "#EventModTile_ReleaseDate",
                      d.GetFormattedSteamReleaseDate()
                    )
                  : (0, U.vX)(h)
              )
            ),
            Boolean(S) &&
              n.createElement(
                "div",
                { className: W().ReviewBlurb },
                (0, U.Xx)("#SteamCurator_ReviewTextQuoted", S)
              ),
            Boolean(_) && n.createElement(ne, { url: _ })
          )
        );
      });
      function ae(e) {
        const {
            strVideoID: t,
            nStartSeconds: a,
            info: r,
            strImgOverrideUrl: o,
            bShowDemoButton: l,
            strExtraParams: i,
            bTwitchVideo: s,
          } = e,
          [u] = (0, D.jk)(r.id, (0, P.TM)(r.type), { include_assets: !0 });
        return n.createElement(
          "div",
          { className: W().YouTubeCapsule },
          n.createElement(
            "div",
            { className: W().YouTubeCtn },
            s
              ? n.createElement(B, {
                  videoid: t,
                  posterURL: null == u ? void 0 : u.GetAssets().GetHeaderURL(),
                  imageClassnames: W().YouTubePreviewImage,
                  autoplay: !0,
                })
              : n.createElement(j.C, {
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
                })
          ),
          n.createElement(
            "div",
            { className: W().YouTubeCapsuleBottomBar },
            n.createElement(
              "div",
              { className: W().GameImageCtn },
              n.createElement(
                F.ll,
                {
                  item: r,
                  bShowDemoButton: l,
                  nDelayShowMs: 300,
                  strExtraParams: i,
                  hoverProps: {
                    direction: "overlay-center",
                    style: { minWidth: "300px" },
                  },
                },
                n.createElement("img", {
                  className: W().GameImage,
                  src:
                    null == u ? void 0 : u.GetAssets().GetLibraryCapsuleURL(),
                })
              )
            ),
            n.createElement(O.Hl, { info: r, strClassName: W().FullWidth })
          )
        );
      }
      function re(e) {
        switch (e.type) {
          case 0:
            return n.createElement(
              "div",
              { className: W().Recommended },
              (0, U.Xx)("#SteamCurator_Recommended")
            );
          case 1:
            return n.createElement(
              "div",
              { className: W().NotRecommended },
              (0, U.Xx)("#SteamCurator_NotRecommended")
            );
          case 2:
            return n.createElement(
              "div",
              { className: W().Informational },
              (0, U.Xx)("#SteamCurator_Informational")
            );
          default:
            return null;
        }
      }
      function ne(e) {
        let t = (0, p.B1)(e.url);
        (0, o.Ah)(t) &&
          (t =
            (y.De.IN_CLIENT ? "steam://openurl_external/" : "") +
            y.De.COMMUNITY_BASE_URL +
            "linkfilter/?url=" +
            t);
        const a = (0, V.FM)(e.url),
          r = (0, c.HO)(e.url);
        return n.createElement(
          "div",
          { className: W().FullReviewLink },
          n.createElement(
            i.IS,
            {
              className: W().FullReviewAnchor,
              href: t,
              rel: "noopener nofollow",
              preferredFocus: !1,
              autoFocus: !1,
            },
            (0, U.Xx)(
              r
                ? "#SteamCurator_WatchFullReview"
                : "#SteamCurator_ReadFullReview"
            )
          ),
          n.createElement(
            "div",
            { className: W().FullReviewDomain },
            (0, U.Xx)("#SteamCurator_ReviewLinkHostnameBracketed", a)
          )
        );
      }
    },
  },
]);
