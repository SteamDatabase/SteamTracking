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
      a.d(t, { p: () => c });
      var n = a(70655),
        r = a(67294),
        l = a(7707),
        o = a(27745),
        i = a(22975),
        s = a(90666);
      function c(e) {
        const { children: t, navTreeRef: a } = e,
          c = (0, n._T)(e, ["children", "navTreeRef"]),
          u = r.useRef(),
          m = (0, i.BE)(u, a);
        if (s.De.IN_GAMEPADUI) {
          const e = window.__nav_tree_root;
          return r.createElement(
            l.Fe,
            Object.assign({}, c, {
              navTreeRef: m,
              secondary: !0,
              parentEmbeddedNavTree: e,
            }),
            r.createElement(o.O, null, t)
          );
        }
        return r.createElement(r.Fragment, null, t);
      }
    },
    13354: (e, t, a) => {
      "use strict";
      a.d(t, {
        Bo: () => w,
        FG: () => y,
        N: () => I,
        P4: () => S,
        mb: () => b,
        yS: () => D,
      });
      var n = a(70655),
        r = a(9669),
        l = a.n(r),
        o = a(22188),
        i = a(67294),
        s = (a(26149), a(54698), a(37662), a(3389)),
        c = a(76776),
        u = a(39388),
        m = a(77636),
        d = a(7200),
        _ = a(89673),
        p = (a(82946), a(48780)),
        v = a(77520),
        E = a(93976),
        g = a(22975),
        h = a(90666);
      function f(e) {
        e.list_jsondata && "string" == typeof e.list_jsondata
          ? (e.list_jsondata = JSON.parse(e.list_jsondata))
          : ((0, v.X)(
              !e.list_jsondata,
              "Found unexpected ListDetails_t.list_jsondata type: " +
                typeof e.list_jsondata
            ),
            (e.list_jsondata = {}));
      }
      const b = "0";
      function C(e, t) {
        (t.localized_flat_title = (0, p.LG)([], 30, null)),
          (t.localized_flat_blurb = (0, p.LG)([], 30, null)),
          (t.localized_flat_link = (0, p.LG)([], 30, null)),
          t.title !== b && (t.localized_flat_title[e] = t.title),
          t.blurb !== b && (t.localized_flat_blurb[e] = t.blurb),
          t.link !== b && (t.localized_flat_link[e] = t.link),
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
      class w {
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
                    f(t),
                      C(e.curation_language, t),
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
          var r;
          return (0, n.mG)(this, void 0, void 0, function* () {
            if (this.m_mapList.has(t)) return this.m_mapList.get(t);
            const n =
                h.De.STORE_BASE_URL +
                "curator/" +
                e.GetAccountID() +
                "/admin/ajaxgetlistdetails",
              o = { listid: t };
            try {
              const i = yield l().get(n, {
                params: o,
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
                    "Wanted" + t + "but got" + (null == a ? void 0 : a.listid)
                  ),
                  f(a),
                  C(i.data.curation_language, a),
                  this.m_mapList.set(t, a),
                  this.m_mapListIDToClanAccount.set(t, e.GetAccountID()),
                  a
                );
              }
            } catch (e) {
              const t = (0, E.l)(e);
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
              (m.jg.Get().BIsLoaded() &&
                0 == m.jg.Get().GetFollowedCuratorCount())
            )
              return [];
            const n =
                h.De.STORE_BASE_URL + "curators/ajaxgetmycuratorsalelists",
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
              a
            );
          });
        }
        LoadAllSaleCurationLists(e, t, a) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            if (this.m_mapEventGIDToLists.has(t))
              return this.m_mapEventGIDToLists.get(t);
            const n = h.De.STORE_BASE_URL + "curators/ajaxfindcuratorlists",
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
              a
            );
          });
        }
        InternalLoadSaleCuratorLists(e, t, a, r, i, s) {
          var c;
          return (0, n.mG)(this, void 0, void 0, function* () {
            try {
              const a = yield l().get(e, {
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
                            f(a),
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
              const t = (0, E.l)(e);
              console.error(a + ": error on load: " + t.strErrorMsg, t);
            }
            return [];
          });
        }
        static Get() {
          return w.s_Singleton || (w.s_Singleton = new w()), w.s_Singleton;
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
            if (w.Get().GetListDetails(t) || !e) return;
            const r = l().CancelToken.source();
            return (
              (() => {
                (0, n.mG)(this, void 0, void 0, function* () {
                  var n, l;
                  const o = yield w.Get().LoadListDetails(e, t);
                  if (!r.token.reason)
                    if (
                      null === (n = null == o ? void 0 : o.apps) || void 0 === n
                        ? void 0
                        : n.length
                    ) {
                      const e = [];
                      for (const t of o.apps) {
                        const a =
                          null ===
                            (l = null == t ? void 0 : t.recommended_app) ||
                          void 0 === l
                            ? void 0
                            : l.appid;
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
              () => r.cancel("unmounting CuratorList")
            );
          }, [e, t, a]),
          w.Get().GetListDetails(t)
        );
      }
      function S(e) {
        const t = e && c.sV.GetClanInfoByClanAccountID(e),
          [a, n] = (0, i.useState)(!!t);
        return (
          (0, i.useEffect)(() => {
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
      function y(e) {
        return (
          Boolean(null == e ? void 0 : e.sale_clan_event_gid) &&
          Boolean(null == e ? void 0 : e.sale_clan_steamid)
        );
      }
      function D(e) {
        const t = (0, g.NW)(),
          a = y(e) ? e.sale_clan_event_gid : null,
          r = a && d.j1.GetClanEventModel(a);
        return (
          (0, i.useEffect)(() => {
            if (r || !y(e)) return;
            const o = l().CancelToken.source();
            return (
              (() => {
                (0, n.mG)(this, void 0, void 0, function* () {
                  d.j1.Init(),
                    yield d.j1.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                      new s.K(e.sale_clan_steamid),
                      a,
                      0
                    ),
                    o.token.reason || t();
                });
              })(),
              () => o.cancel("unmounting CuratorList")
            );
          }, [e, a, r, t]),
          r
        );
      }
      (0, n.gn)([o.LO], w.prototype, "m_mapList", void 0);
    },
    54881: (e, t, a) => {
      "use strict";
      a.d(t, { b: () => c });
      var n = a(67294),
        r = a(21807),
        l = a(7573),
        o = a(73727),
        i = a(7707),
        s = a(35921);
      function c(e) {
        const { crumbs: t, className: a } = e;
        return t && 0 != t.length
          ? n.createElement(
              "div",
              { className: (0, l.Z)(r.BreadContainer, a) },
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
                            e.name
                          )
                        )
                      : t.push(
                          n.createElement(
                            o.rU,
                            { key: "link_" + e.name, to: e.url },
                            e.name
                          )
                        ),
                    t.push(
                      n.createElement("span", { key: e.name + "span" }, " > ")
                    ),
                    t
                  );
                })
              ),
              n.createElement("div", { style: { clear: "left" } })
            )
          : null;
      }
    },
    87541: (e, t, a) => {
      "use strict";
      a.d(t, { B: () => G, O: () => T });
      var n = a(67294),
        r = a(77442),
        l = a(7707),
        o = a(35921),
        i = a(39746),
        s = (a(37662), a(67833)),
        c = (a(990), a(77636)),
        u = a(48116),
        m = a(52114),
        d = a(36567),
        _ = a(67777),
        p = a(85732),
        v = a(88335),
        E = a.n(v),
        g = a(88592),
        h = a(9487),
        f = (a(45031), a(75896)),
        b = a(72062),
        C = a(72842),
        w = a(5146),
        I = a(65160),
        S = a(65924),
        y = a(7573),
        D = a(41311),
        L = a(90666);
      const T = "capsule_index_";
      function G(e) {
        const {
            capsule: t,
            bShowParentApp: a,
            strExtraParams: s,
            elElementToAppendToHover: c,
            index: p,
            bAutoFocus: v,
          } = e,
          [g, h] = n.useState(!1),
          [C] = (0, m.jk)(t.id, (0, u.TM)(t.type), r.bk),
          [I] = (0, m.vs)(a && (null == C ? void 0 : C.GetParentAppID()), r.bk),
          G = (0, S.bJ)();
        if (!C) return null;
        const A = Boolean(I);
        return n.createElement(
          o.s,
          {
            className: (0, y.Z)({
              [E().OuterCapsuleContainer]: !0,
              [T + p]: 0 == p,
            }),
            navEntryPreferPosition: i.c4.PREFERRED_CHILD,
            autoFocus: v,
          },
          n.createElement(
            b.zw,
            { appid: C.GetAppID() },
            n.createElement(
              _.ll,
              {
                className: E().CapsuleContainer,
                item: t,
                elElementToAppend: e.elElementToAppendToHover,
                bShowDemoButton: e.bShowDemoButton,
                bShowDeckCompatibilityDialog: e.bShowDeckCompatibilityDialog,
                bHidePrice: e.bHidePrice,
                bUseSubscriptionLayout: e.bUseSubscriptionLayout,
                strExtraParams: e.strExtraParams,
                fnOnHoverStateChange: !L.De.IN_GAMEPADUI && h,
                nCreatorAccountID: e.creatorAccountID,
              },
              n.createElement(
                N,
                Object.assign({}, e, {
                  info: t,
                  bIsHovered: g,
                  bHasParentAppToDisplay: A,
                })
              )
            ),
            Boolean(c) && n.createElement("div", null, c)
          ),
          A &&
            n.createElement(
              l.Ks,
              Object.assign(
                { className: E().CapsuleParentInfo },
                (0, f.h)(I, G, e.strExtraParams)
              ),
              n.createElement(
                b.zw,
                { appid: I.GetAppID() },
                n.createElement(
                  "div",
                  { className: E().ParentType },
                  (0, D.Xx)(
                    11 == C.GetAppType()
                      ? "#SalePage_ParentApp_SoundTrack"
                      : "#SalePage_ParentApp_DLC"
                  )
                ),
                n.createElement(
                  w._,
                  {
                    type: "app",
                    id: I.GetAppID(),
                    strExtraParams: e.strExtraParams,
                  },
                  n.createElement(
                    "img",
                    Object.assign(
                      {
                        loading: "lazy",
                        className: d.AppCapsuleImage,
                        alt: I.GetName(),
                        src: I.GetAssets().GetSmallCapsuleURL(),
                      },
                      (0, r.fn)()
                    )
                  )
                )
              )
            )
        );
      }
      function N(e) {
        var t;
        const {
            info: a,
            bHidePriceIfOwned: r,
            bHideStatusBanners: o,
            strExtraParams: i,
            imageType: d,
            bHasParentAppToDisplay: v,
            bUseSubscriptionLayout: E,
            elElementToAppendToHover: f,
            bHidePrice: w,
            bHidePlatforms: y,
            creatorAccountID: D,
            bIsHovered: T,
          } = e,
          [G] = (0, m.jk)(a.id, (0, u.TM)(a.type), { include_platforms: !0 }),
          N = (0, S.bJ)(),
          A = (0, b.Dt)(a.type),
          R = (0, n.useMemo)(
            () => (null == G ? void 0 : G.GetIncludedAppIDsOrSelf()),
            [G]
          ),
          P =
            G &&
            (null == G
              ? void 0
              : G.GetIncludedAppIDsOrSelf().every((e) =>
                  c.jg.Get().BOwnsApp(e)
                ));
        if (!G) return null;
        const B = P && !o,
          k = (0, s.Hf)(
            `${L.De.STORE_BASE_URL}${A}/${a.id}${i ? `?${i}` : ""}`,
            N
          );
        let F,
          x = null;
        if (E && 0 == (null == G ? void 0 : G.GetStoreItemType()))
          x = n.createElement(C.r, { appid: G.GetAppID(), bIsMuted: T });
        else if (f);
        else {
          const e = P && r,
            t = B;
          x = n.createElement(p.Hl, {
            info: a,
            bShowAsMuted: t,
            bHidePrice: w,
            bShowInLibraryInsteadOfPrice: e,
            bHidePlatforms: y,
            creatorAccountID: D,
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
          n.createElement(
            l.IS,
            {
              href: F ? null : k,
              style: { display: "block" },
              preferredFocus: v,
              onClick: F,
            },
            n.createElement(h.vs, { appids: R, hide_status_banners: o }),
            n.createElement(p.a4, { imageType: d, info: a }),
            n.createElement(I.y, {
              eDeckCompatibilityCategory:
                null === (t = null == G ? void 0 : G.GetPlatforms()) ||
                void 0 === t
                  ? void 0
                  : t.steam_deck_compat_category,
            }),
            Boolean(T && !(0, _.Hu)()) && n.createElement(g.v, { appInfo: a }),
            x
          )
        );
      }
    },
    6092: (e, t, a) => {
      "use strict";
      a.d(t, { p: () => l });
      var n = a(29181),
        r = a.n(n);
      function l() {
        return window.innerWidth < parseInt(r().strMaxMobileWidth);
      }
    },
    52962: (e, t, a) => {
      "use strict";
      a.d(t, { C: () => d, q: () => m });
      var n = a(67294),
        r = a(96187),
        l = a(95598),
        o = a(90844),
        i = a(7573),
        s = a(41311),
        c = a(47784),
        u = a.n(c);
      const m = (e) => {
          const t = ["maxresdefault", "mqdefault", "default"],
            [a, l] = n.useState(0);
          n.useEffect(() => l(0), [e.video]);
          const o = n.useRef();
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
              className: (0, i.Z)(u().YoutubePreviewImage, e.className),
            });
          }
        },
        d = (e) => {
          const [t, a] = n.useState(!1);
          if (
            (n.useEffect(() => {
              e.preloadYoutubeScripts && (0, o.m)(() => {});
            }, [e.preloadYoutubeScripts]),
            t)
          )
            return n.createElement(
              o.e,
              Object.assign({}, e, {
                classnames: (0, i.Z)(u().YoutubePlayer, e.classnames),
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
                className: (0, i.Z)(
                  "YoutubePreviewContainer",
                  u().YoutubePreviewImage,
                  e.imageClassnames
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
                n.createElement(l.GhU, null)
              ),
              n.createElement(
                "div",
                { className: "VideoHintText" },
                (0, s.Xx)("#EventCalendar_WatchYouTubeVideo")
              )
            );
          }
        };
    },
    53881: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { CuratorReviewListContainer: () => K, default: () => Q });
      var n = a(29323),
        r = a(67294),
        l = a(63473),
        o = a(26149),
        i = (a(54698), a(7707)),
        s = a(34425),
        c = a(35921),
        u = a(4224),
        m = (a(37662), a(50153)),
        d = a(3389),
        _ = a(67833),
        p = a(70655),
        v = a(74163),
        E = a(9669),
        g = a.n(E),
        h = (a(82946), a(90666)),
        f = a(93976);
      function b(e, t) {
        const [a, n] = (0, r.useState)(
            (null == e ? void 0 : e.BUsesContentHubForItemSource())
              ? new Set()
              : null
          ),
          l = (0, v.T)("useFilteredAppViaContentHub");
        return (
          (0, r.useEffect)(() => {
            (null == e ? void 0 : e.BUsesContentHubForItemSource()) &&
              !a &&
              (function (e, t) {
                var a;
                return (0, p.mG)(this, void 0, void 0, function* () {
                  const n =
                      h.De.STORE_BASE_URL +
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
                  let l = null;
                  const o = new Set();
                  try {
                    const e = yield g().get(n, { params: r });
                    if (
                      1 ==
                      (null === (a = null == e ? void 0 : e.data) ||
                      void 0 === a
                        ? void 0
                        : a.success)
                    )
                      return e.data.appids.forEach((e) => o.add(e)), o;
                    l = (0, f.l)(e);
                  } catch (e) {
                    l = (0, f.l)(e);
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
                l.token.reason || n(e);
              });
          }, [a, l.token.reason, e, t]),
          a
        );
      }
      var C = a(13354),
        w = a(71174),
        I = a(39388),
        S = a(77636),
        y = a(159),
        D = a(48116),
        L = a(52114),
        T = a(99312),
        G = a.n(T),
        N = a(95598),
        A = (a(8456), a(7573)),
        R = a(47784);
      const P = new RegExp(
        "(?:https?://)?(?:www.)?twitch.tv/videos/([0-9]+)S*"
      );
      function B(e) {
        const t = P.exec(e);
        return (null == t ? void 0 : t.length) > 1 ? t[1] : null;
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
              className: (0, A.Z)(
                "YoutubePreviewContainer",
                R.YoutubePreviewImage,
                e.imageClassnames
              ),
              onClick: () => m(!1),
            },
            r.createElement("img", {
              className: (0, A.Z)("YoutubePreviewImage", R.YoutubePreviewImage),
              src:
                t ||
                h.De.COMMUNITY_CDN_URL +
                  "public/shared/images/responsive/youtube_16x9_placeholder.gif",
            }),
            r.createElement(
              "div",
              { className: "YoutubePreviewPlay" },
              r.createElement(N.GhU, null)
            )
          );
        let _ = (0, h.Kc)().replace("https://", "");
        const p = _.indexOf("/");
        p >= 0 && (_ = _.substring(0, p));
        let v = o
          ? `https://clips.twitch.tv/embed?clip=${a}`
          : `https://player.twitch.tv/?video=${a}`;
        return (
          (v += `&parent=${_}&autoplay=${d}&muted=${Boolean(n)}`),
          i &&
            (v += `&time=${(function (e) {
              const t = Math.floor(e / 3600);
              e -= 60 * t * 60;
              const a = Math.floor(e / 60);
              return `${t}h${a}m${(e -= a * e)}s`;
            })(i)}`),
          r.createElement(
            "div",
            { className: (0, A.Z)("YoutubePlayer", G().TwitchPlayer) },
            r.createElement("img", {
              className: (0, A.Z)(
                "YoutubePreviewContainer",
                R.YoutubePreviewImage,
                e.imageClassnames
              ),
              src:
                h.De.COMMUNITY_CDN_URL +
                "public/shared/images/responsive/youtube_16x9_placeholder.gif",
            }),
            r.createElement("iframe", {
              src: v,
              allowFullScreen: !0,
              frameBorder: 0,
              width: s || 460,
              height: c || 300,
            })
          )
        );
      }
      var F = a(67777),
        x = a(89673),
        M = a(85732),
        H = a(87541),
        O = a(13596),
        j = a(6092),
        Y = a(52962),
        z = a(41311),
        U = a(35092),
        W = a(86196),
        V = a.n(W),
        Z = (a(76776), a(54881)),
        X = a(38547);
      function $(e) {
        const { clanInfo: t } = e,
          { curator_link: a, curator_medium_avatar: n } = (0, h.kQ)(
            "curator_header",
            "application_config"
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
                  i.IS,
                  { href: a },
                  r.createElement("img", {
                    className: "curator_avatar",
                    src: n,
                  })
                )
              ),
              r.createElement(
                "div",
                { className: "curator_details" },
                r.createElement(Z.b, {
                  className: X.BreadContainer,
                  crumbs: (0, h.kQ)("breadcrumbs", "application_config"),
                }),
                r.createElement(
                  i.IS,
                  { className: "pageheader curator_name", href: a },
                  (0, z.Xx)("#SteamCurator_List_Header_List", t.group_name)
                )
              )
            )
          )
        );
      }
      const Q = function (e) {
        const t = (0, w.L)();
        return r.createElement(
          s.p,
          { navID: "StoreCuratorPageRoot", NavigationManager: t },
          r.createElement(K, { listid: e.listid })
        );
      };
      function K(e) {
        const t = parseInt(
            (0, h.kQ)("curator_account_id", "application_config")
          ),
          a = (0, C.P4)(t),
          n = (0, C.N)(null == a ? void 0 : a.clanSteamID, e.listid);
        return n
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
                    { className: V().CuratorListCtn },
                    r.createElement(ee, { listDetails: n }),
                    (0, C.FG)(n)
                      ? r.createElement(q, { listDetails: n })
                      : r.createElement(J, {
                          listDetails: n,
                          rgListItems: n.apps,
                        }),
                    r.createElement(
                      "div",
                      { className: V().CuratorMoreCtn },
                      r.createElement(
                        "h2",
                        null,
                        (0, z.Xx)("#SteamCurator_ExploreMoreTitle")
                      ),
                      r.createElement(
                        i.IS,
                        { href: a.vanity_url },
                        (0, z.kQ)("#SteamCurator_MoreReviews", a.group_name)
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
          [a, n] = (0, r.useState)(null),
          l = new d.K(t.sale_clan_steamid),
          o = (0, m.Mx)(l.GetAccountID(), t.sale_clan_event_gid),
          i = (0, r.useMemo)(
            () => (t.apps || []).map((e) => e.recommended_app.appid),
            [t]
          ),
          s = b(o, i);
        return (
          (0, r.useEffect)(() => {
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
          r.createElement(J, { listDetails: t, rgListItems: a })
        );
      }
      function J(e) {
        const { listDetails: t, rgListItems: a } = e,
          [n, l] = (0, r.useState)(0),
          [o, s] = (0, r.useState)(null),
          u = (0, v.T)("CuratorAppListDisplay");
        if (
          (r.useEffect(() => {
            a &&
              (l((null == a ? void 0 : a.length) || 0),
              S.jg
                .Get()
                .HintLoad()
                .then(() => {
                  const e = a.map((e) => e.recommended_app.appid);
                  y.Z.Get()
                    .QueueMultipleAppRequests(e, x.NC)
                    .then(() => {
                      u.token.reason ||
                        s(
                          a.filter(
                            (e) =>
                              !(0, x.TR)(
                                y.Z.Get().GetApp(e.recommended_app.appid)
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
          return r.createElement(O.V, {
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
              className: (0, A.Z)(V().CuratorList, m && V().CuratorListGrid),
              "flow-children": "grid",
            },
            o.map((e, a) =>
              r.createElement(te, {
                key: "rec_" + e.recommended_app.appid,
                item: e,
                listDetails: t,
                bAutoFocus: 0 == a,
              })
            )
          ),
          Boolean(n > o.length) &&
            r.createElement(
              "div",
              null,
              r.createElement(
                "span",
                null,
                (0, z.kb)("#SteamCurator_Hidden", n - o.length),
                " "
              ),
              r.createElement(
                i.IS,
                { href: h.De.STORE_BASE_URL + "account/preferences/" },
                (0, z.Xx)("#SteamCurator_Setting")
              )
            )
        );
      }
      function ee(e) {
        const { listDetails: t } = e,
          a = (0, C.yS)(t),
          n = (0, h.kQ)("showlisttitle", "application_config"),
          l = (0, h.kQ)("titleareaheight", "application_config"),
          s =
            t.list_jsondata.youtube_link &&
            (0, u.S6)(t.list_jsondata.youtube_link),
          c = t.list_jsondata.youtube_link && B(t.list_jsondata.youtube_link),
          m = (0, o.jM)(h.De.LANGUAGE),
          d = z.LZ.GetWithFallback(t.localized_flat_title, m),
          _ = z.LZ.GetWithFallback(t.localized_flat_blurb, m),
          p = z.LZ.GetWithFallback(t.localized_flat_link, m),
          v =
            a &&
            a.GetImageURL(
              (0, j.p)() ? "product_mobile_banner" : "product_banner",
              m
            );
        return r.createElement(
          "div",
          { className: V().TopReviewInfo },
          Boolean(v) &&
            r.createElement(
              i.IS,
              { href: a.GetSaleURL() },
              r.createElement("img", { className: V().SaleBanner, src: v })
            ),
          n && d && r.createElement("div", { className: V().Title }, d),
          n && _ && r.createElement("div", { className: V().Blurb }, _),
          Boolean(l > 0) && r.createElement("div", { style: { height: l } }),
          s &&
            r.createElement(
              "div",
              { className: V().VideoReviewCtn },
              r.createElement(Y.C, {
                video: s.strVideoID,
                startSeconds: s.nStartSeconds,
                autoplay: !0,
                autopause: !0,
                showFullscreenBtn: !0,
                controls: !0,
                preloadYoutubeScripts: !0,
                playsInline: !0,
                imageClassnames: V().YouTubePreviewImage,
              })
            ),
          Boolean(c) &&
            r.createElement(
              "div",
              { className: V().VideoReviewCtn },
              r.createElement(k, {
                videoid: c,
                posterURL: "",
                imageClassnames: V().YouTubePreviewImage,
              })
            ),
          p && r.createElement(re, { url: p })
        );
      }
      const te = (0, n.Pi)((e) => {
        var t, a;
        const { item: n, listDetails: l, bAutoFocus: o } = e,
          i = parseInt((0, h.kQ)("curator_account_id", "application_config")),
          s = (0, C.P4)(i),
          [m] = (0, L.vs)(
            null === (t = null == n ? void 0 : n.recommended_app) ||
              void 0 === t
              ? void 0
              : t.appid,
            { include_assets: !0, include_release: !0 }
          ),
          d = (0, r.useMemo)(
            () => ({
              id: null == m ? void 0 : m.GetID(),
              type: (0, D.Ds)(
                null == m ? void 0 : m.GetStoreItemType(),
                null == m ? void 0 : m.GetAppType()
              ),
            }),
            [m]
          );
        if (!s || !m) return null;
        const {
            appid: _,
            link_url: p,
            blurb: v,
            time_recommended: E,
            recommendation_state: g,
          } = n.recommended_app,
          f = s.is_creator_home && !s.is_ogg,
          b =
            null === (a = l.list_jsondata.app_data) || void 0 === a
              ? void 0
              : a[_],
          w = p && (0, u.S6)(p),
          S = p && B(p),
          y = v != C.mb && v,
          T = I.ZP.Get().BHasDemoAppID(_),
          G = null == b ? void 0 : b.img_url,
          N = `curator_clanid=${s.clanAccountID}&curator_listid=${l.listid}`;
        return r.createElement(
          c.s,
          { className: V().CuratorReview, autoFocus: o },
          r.createElement(
            "div",
            { className: V().CapsuleCtn },
            Boolean(w || S)
              ? r.createElement(ae, {
                  strVideoID: (null == w ? void 0 : w.strVideoID) || S,
                  nStartSeconds: null == w ? void 0 : w.nStartSeconds,
                  info: d,
                  strImgOverrideUrl: G,
                  bShowDemoButton: T,
                  strExtraParams: N,
                  bTwitchVideo: Boolean(S),
                })
              : r.createElement(H.B, {
                  imageType: "header",
                  bAutoFocus: o,
                  capsule: d,
                  bShowDemoButton: T,
                  strExtraParams: N,
                })
          ),
          r.createElement(
            "div",
            { className: V().ReviewTextSection },
            r.createElement("div", { className: V().GameTitle }, m.GetName()),
            r.createElement(
              "div",
              { className: V().RecommendationTypeAndDate },
              r.createElement(ne, { type: g }),
              r.createElement(
                "div",
                { className: V().ReviewDate },
                f || !Boolean(E)
                  ? (0, z.Xx)(
                      "#EventModTile_ReleaseDate",
                      m.GetFormattedSteamReleaseDate()
                    )
                  : (0, z.vX)(E)
              )
            ),
            Boolean(y) &&
              r.createElement(
                "div",
                { className: V().ReviewBlurb },
                (0, z.Xx)("#SteamCurator_ReviewTextQuoted", y)
              ),
            Boolean(p) && r.createElement(re, { url: p })
          )
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
          [c] = (0, L.jk)(n.id, (0, D.TM)(n.type), { include_assets: !0 });
        return r.createElement(
          "div",
          { className: V().YouTubeCapsule },
          r.createElement(
            "div",
            { className: V().YouTubeCtn },
            s
              ? r.createElement(k, {
                  videoid: t,
                  posterURL: null == c ? void 0 : c.GetAssets().GetHeaderURL(),
                  imageClassnames: V().YouTubePreviewImage,
                  autoplay: !0,
                })
              : r.createElement(Y.C, {
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
                })
          ),
          r.createElement(
            "div",
            { className: V().YouTubeCapsuleBottomBar },
            r.createElement(
              "div",
              { className: V().GameImageCtn },
              r.createElement(
                F.ll,
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
                  src:
                    null == c ? void 0 : c.GetAssets().GetLibraryCapsuleURL(),
                })
              )
            ),
            r.createElement(M.Hl, { info: n, strClassName: V().FullWidth })
          )
        );
      }
      function ne(e) {
        switch (e.type) {
          case 0:
            return r.createElement(
              "div",
              { className: V().Recommended },
              (0, z.Xx)("#SteamCurator_Recommended")
            );
          case 1:
            return r.createElement(
              "div",
              { className: V().NotRecommended },
              (0, z.Xx)("#SteamCurator_NotRecommended")
            );
          case 2:
            return r.createElement(
              "div",
              { className: V().Informational },
              (0, z.Xx)("#SteamCurator_Informational")
            );
          default:
            return null;
        }
      }
      function re(e) {
        let t = (0, _.B1)(e.url);
        (0, l.Ah)(t) &&
          (t =
            (h.De.IN_CLIENT ? "steam://openurl_external/" : "") +
            h.De.COMMUNITY_BASE_URL +
            "linkfilter/?url=" +
            t);
        const a = (0, U.FM)(e.url),
          n = (0, u.HO)(e.url);
        return r.createElement(
          "div",
          { className: V().FullReviewLink },
          r.createElement(
            i.IS,
            {
              className: V().FullReviewAnchor,
              href: t,
              rel: "noopener nofollow",
              preferredFocus: !1,
              autoFocus: !1,
            },
            (0, z.Xx)(
              n
                ? "#SteamCurator_WatchFullReview"
                : "#SteamCurator_ReadFullReview"
            )
          ),
          r.createElement(
            "div",
            { className: V().FullReviewDomain },
            (0, z.Xx)("#SteamCurator_ReviewLinkHostnameBracketed", a)
          )
        );
      }
    },
  },
]);
