/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [9211],
  {
    71: (t) => {
      t.exports = {
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
    16468: (t, e, n) => {
      "use strict";
      n.d(e, {
        Bo: () => D,
        FG: () => G,
        Gj: () => a,
        N: () => I,
        P4: () => A,
        mb: () => S,
        yS: () => T,
      });
      var a,
        o = n(33940),
        r = n(52868),
        i = n.n(r),
        l = n(50265),
        s = n(89526),
        u = n(75457),
        c = n(42735),
        _ = n(47165),
        d = n(82079),
        p = n(98210),
        m = n(54671),
        v = n(10412),
        E = n(70750),
        g = n(11837),
        f = n(23801),
        C = n(23217),
        L = n(4306),
        h = n(32765);
      function y(t) {
        t.list_jsondata && "string" == typeof t.list_jsondata
          ? (t.list_jsondata = JSON.parse(t.list_jsondata))
          : ((0, f.X)(
              !t.list_jsondata,
              "Found unexpected ListDetails_t.list_jsondata type: " +
                typeof t.list_jsondata,
            ),
            (t.list_jsondata = {}));
      }
      !(function (t) {
        (t[(t.k_EStoreCuratorListType_Unknown = 0)] =
          "k_EStoreCuratorListType_Unknown"),
          (t[(t.k_EStoreCuratorListType_Grid = 1)] =
            "k_EStoreCuratorListType_Grid"),
          (t[(t.k_EStoreCuratorListType_Ordered = 2)] =
            "k_EStoreCuratorListType_Ordered"),
          (t[(t.k_EStoreCuratorListType_AutoDLC = 3)] =
            "k_EStoreCuratorListType_AutoDLC"),
          (t[(t.k_EStoreCuratorListType_SaleList = 4)] =
            "k_EStoreCuratorListType_SaleList");
      })(a || (a = {}));
      const S = "0";
      function b(t, e) {
        (e.localized_flat_title = (0, g.LG)([], u.Df.k_Lang_MAX, null)),
          (e.localized_flat_blurb = (0, g.LG)([], u.Df.k_Lang_MAX, null)),
          (e.localized_flat_link = (0, g.LG)([], u.Df.k_Lang_MAX, null)),
          e.title !== S && (e.localized_flat_title[t] = e.title),
          e.blurb !== S && (e.localized_flat_blurb[t] = e.blurb),
          e.link !== S && (e.localized_flat_link[t] = e.link),
          e.title_localization.forEach((t) => {
            var n;
            (null === (n = t.localized_string) || void 0 === n
              ? void 0
              : n.length) > 0 &&
              (e.localized_flat_title[t.language] = t.localized_string);
          }),
          e.blurb_localization.forEach((t) => {
            var n;
            (null === (n = t.localized_string) || void 0 === n
              ? void 0
              : n.length) > 0 &&
              (e.localized_flat_blurb[t.language] = t.localized_string);
          }),
          e.link_localization.forEach((t) => {
            var n;
            (null === (n = t.localized_string) || void 0 === n
              ? void 0
              : n.length) > 0 &&
              (e.localized_flat_link[t.language] = t.localized_string);
          });
      }
      class D {
        GetListDetails(t) {
          return this.m_mapList.get(t);
        }
        GetAllSaleCurationLists(t) {
          return this.m_mapEventGIDToLists.get(t) || [];
        }
        GetClanAccountFromListID(t) {
          return this.m_mapListIDToClanAccount.get(t);
        }
        LoadListDetails(t, e, n) {
          var a;
          return (0, o.mG)(this, void 0, void 0, function* () {
            if (this.m_mapList.has(e)) return this.m_mapList.get(e);
            const o =
                h.De.STORE_BASE_URL +
                "curator/" +
                t.GetAccountID() +
                "/admin/ajaxgetlistdetails",
              r = { listid: e };
            try {
              const l = yield i().get(o, {
                params: r,
                cancelToken: null == n ? void 0 : n.token,
              });
              if (
                (null === (a = null == l ? void 0 : l.data) || void 0 === a
                  ? void 0
                  : a.success) == c.s.k_EResultOK
              ) {
                const n = Object.assign({}, l.data.list_details);
                return (
                  (0, f.X)(
                    e == (null == n ? void 0 : n.listid),
                    "Wanted" + e + "but got" + (null == n ? void 0 : n.listid),
                  ),
                  y(n),
                  b(l.data.curation_language, n),
                  this.m_mapList.set(e, n),
                  this.m_mapListIDToClanAccount.set(e, t.GetAccountID()),
                  n
                );
              }
            } catch (t) {
              const e = (0, C.l)(t);
              console.error(
                "CCuratorListStore.LoadListDetails: error on load: " +
                  e.strErrorMsg,
                e,
              );
            }
            return null;
          });
        }
        LoadMyFollowedSaleCurationLists(t, e, n) {
          return (0, o.mG)(this, void 0, void 0, function* () {
            if (
              !h.L7.logged_in ||
              (m.jg.Get().BIsLoaded() &&
                0 == m.jg.Get().GetFollowedCuratorCount())
            )
              return [];
            const a =
                h.De.STORE_BASE_URL + "curators/ajaxgetmycuratorsalelists",
              o = {
                clan_account_id: t.GetAccountID(),
                clan_event_gid: e,
                origin: self.origin,
                curator_clan_account_followed: m.jg.Get().BIsLoaded()
                  ? m.jg.Get().GetFollowedCuratorsAccountID().join(",")
                  : void 0,
              };
            return this.InternalLoadSaleCuratorLists(
              a,
              o,
              "CCuratorListStore.LoadMyFollowedSaleCurationLists",
              t,
              e,
              n,
            );
          });
        }
        LoadAllSaleCurationLists(t, e, n) {
          return (0, o.mG)(this, void 0, void 0, function* () {
            if (this.m_mapEventGIDToLists.has(e))
              return this.m_mapEventGIDToLists.get(e);
            const a = h.De.STORE_BASE_URL + "curators/ajaxfindcuratorlists",
              o = {
                clan_account_id: t.GetAccountID(),
                clan_event_gid: e,
                origin: self.origin,
              };
            return this.InternalLoadSaleCuratorLists(
              a,
              o,
              "CCuratorListStore.LoadAllSaleCurationLists",
              t,
              e,
              n,
            );
          });
        }
        InternalLoadSaleCuratorLists(t, e, n, a, r, s) {
          var u;
          return (0, o.mG)(this, void 0, void 0, function* () {
            try {
              const n = yield i().get(t, {
                params: e,
                cancelToken: null == s ? void 0 : s.token,
              });
              if (
                (null === (u = null == n ? void 0 : n.data) || void 0 === u
                  ? void 0
                  : u.success) == c.s.k_EResultOK
              ) {
                const t = new Array();
                return (
                  (0, l.z)(() => {
                    n.data.matches &&
                      n.data.matches.forEach((e) => {
                        e.multi_detail_lists.forEach((n) => {
                          this.m_mapListIDToClanAccount.set(
                            n.listid,
                            e.clan_account_id,
                          ),
                            y(n),
                            b(e.curation_language, n),
                            this.m_mapList.set(n.listid, n),
                            t.push(n);
                        });
                      }),
                      this.m_mapEventGIDToLists.set(r, t);
                  }),
                  t
                );
              }
            } catch (t) {
              const e = (0, C.l)(t);
              console.error(n + ": error on load: " + e.strErrorMsg, e);
            }
            return [];
          });
        }
        static Get() {
          return D.s_Singleton || (D.s_Singleton = new D()), D.s_Singleton;
        }
        constructor() {
          (this.m_mapList = new Map()),
            (this.m_mapEventGIDToLists = new Map()),
            (this.m_mapListIDToClanAccount = new Map()),
            "dev" == h.De.WEB_UNIVERSE && (window.g_curatorListStore = this);
          let t = (0, h.kQ)("curatorlistdata", "application_config");
          ("dev" != h.De.WEB_UNIVERSE && "beta" != h.De.WEB_UNIVERSE) ||
            console.log(
              "DEV_DEBUG: CCuratorListStore loading list payload: " +
                (null == t ? void 0 : t.length),
              t,
            ),
            this.ValidateStoreDefault(t) &&
              (0, l.z)(() => {
                t.forEach((t) => {
                  t.multi_detail_lists.forEach((e) => {
                    y(e),
                      b(t.curation_language, e),
                      this.m_mapList.set(e.listid, e);
                  });
                });
              });
        }
        ValidateStoreDefault(t) {
          const e = t;
          return e &&
            Array.isArray(e) &&
            e.length > 0 &&
            "object" == typeof e[0]
            ? "number" == typeof e[0].curation_language &&
                e[0].multi_detail_lists &&
                Array.isArray(e[0].multi_detail_lists) &&
                "string" == typeof e[0].multi_detail_lists[0].listid &&
                "number" == typeof e[0].multi_detail_lists[0].list_type &&
                "number" == typeof e[0].multi_detail_lists[0].list_state
            : e && Array.isArray(e) && 0 == e.length;
        }
      }
      function I(t, e) {
        const n = (0, L.NW)();
        return (
          (0, s.useEffect)(() => {
            if (D.Get().GetListDetails(e) || !t) return;
            const a = i().CancelToken.source();
            return (
              (() => {
                (0, o.mG)(this, void 0, void 0, function* () {
                  var o, r;
                  const i = yield D.Get().LoadListDetails(t, e);
                  if (!a.token.reason)
                    if (
                      null === (o = null == i ? void 0 : i.apps) || void 0 === o
                        ? void 0
                        : o.length
                    ) {
                      const t = [];
                      for (const e of i.apps) {
                        const n =
                          null ===
                            (r = null == e ? void 0 : e.recommended_app) ||
                          void 0 === r
                            ? void 0
                            : r.appid;
                        n && t.push({ id: n, type: "game" });
                      }
                      (0, E.qr)(
                        t,
                        Object.assign(Object.assign({}, E.NC), {
                          include_assets: !0,
                          include_release: !0,
                        }),
                      ),
                        p.ZP.Get().LoadAppIDsBatch(t.map((t) => t.id)),
                        n();
                    } else console.error("Found no list data");
                });
              })(),
              () => a.cancel("unmounting CuratorList")
            );
          }, [t, e, n]),
          D.Get().GetListDetails(e)
        );
      }
      function A(t) {
        const e = t && d.sV.GetClanInfoByClanAccountID(t),
          [n, a] = (0, s.useState)(!!e);
        return (
          (0, s.useEffect)(() => {
            if (n && t) {
              const e = _.K.InitFromClanID(t);
              d.sV.LoadClanInfoForClanSteamID(e).finally(() => {
                a(!0);
              });
            }
          }, [n, t]),
          e
        );
      }
      function G(t) {
        return (
          Boolean(null == t ? void 0 : t.sale_clan_event_gid) &&
          Boolean(null == t ? void 0 : t.sale_clan_steamid)
        );
      }
      function T(t) {
        const e = (0, L.NW)(),
          n = G(t) ? t.sale_clan_event_gid : null,
          a = n && v.j1.GetClanEventModel(n);
        return (
          (0, s.useEffect)(() => {
            if (a || !G(t)) return;
            const r = i().CancelToken.source();
            return (
              (() => {
                (0, o.mG)(this, void 0, void 0, function* () {
                  v.j1.Init(),
                    yield v.j1.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                      new _.K(t.sale_clan_steamid),
                      n,
                      0,
                    ),
                    r.token.reason || e();
                });
              })(),
              () => r.cancel("unmounting CuratorList")
            );
          }, [t, n, a, e]),
          a
        );
      }
      (0, o.gn)([l.LO], D.prototype, "m_mapList", void 0);
    },
    31245: (t, e, n) => {
      "use strict";
      n.d(e, { B: () => k, O: () => w });
      var a = n(89526),
        o = n(62983),
        r = n(44026),
        i = n(51438),
        l = n(16221),
        s = n(98009),
        u = n(68562),
        c = n(54671),
        _ = n(85886),
        d = n(25871),
        p = n(71),
        m = n(51441),
        v = n(44421),
        E = n(1631),
        g = n.n(E),
        f = n(67935),
        C = n(21219),
        L = n(87539),
        h = n(3991),
        y = n(33406),
        S = n(98389),
        b = n(42317),
        D = n(71161),
        I = n(19304),
        A = n(14826),
        G = n(207),
        T = n(32765);
      const w = "capsule_index_";
      function k(t) {
        const {
            capsule: e,
            bShowParentApp: n,
            strExtraParams: s,
            elElementToAppendToHover: c,
            index: v,
            navKey: E,
            bHideStoreHover: f,
          } = t,
          [C, y] = a.useState(!1),
          [b] = (0, d.jk)(e.id, (0, _.TM)(e.type), o.bk),
          [G] = (0, d.vs)(n && (null == b ? void 0 : b.GetParentAppID()), o.bk),
          k = (0, D.bJ)(),
          P = (0, T.id)();
        if (!b) return null;
        const H = Boolean(G),
          z = a.createElement(
            O,
            Object.assign({}, t, {
              info: e,
              bIsHovered: C,
              bHasParentAppToDisplay: H,
            }),
          );
        return a.createElement(
          i.s,
          {
            className: (0, I.Z)({
              [g().OuterCapsuleContainer]: !0,
              [w + v]: 0 == v,
            }),
            navEntryPreferPosition: l.c4.PREFERRED_CHILD,
            navKey: E,
          },
          a.createElement(
            h.zw,
            { appid: b.GetAppID() },
            Boolean(f)
              ? a.createElement(a.Fragment, null, z)
              : a.createElement(
                  m.ll,
                  {
                    className: g().CapsuleContainer,
                    item: e,
                    elElementToAppend: t.elElementToAppendToHover,
                    bShowDemoButton: t.bShowDemoButton,
                    bShowDeckCompatibilityDialog:
                      t.bShowDeckCompatibilityDialog,
                    bHidePrice: t.bHidePrice,
                    bUseSubscriptionLayout: t.bUseSubscriptionLayout,
                    strExtraParams: t.strExtraParams,
                    fnOnHoverStateChange: !P && y,
                    nCreatorAccountID: t.creatorAccountID,
                  },
                  z,
                ),
            Boolean(c) && a.createElement("div", null, c),
          ),
          H &&
            a.createElement(
              r.Ks,
              Object.assign(
                { className: g().CapsuleParentInfo },
                (0, L.h)(G, k, P, t.strExtraParams),
              ),
              a.createElement(
                h.zw,
                { appid: G.GetAppID() },
                a.createElement(
                  "div",
                  { className: g().ParentType },
                  (0, A.Xx)(
                    b.GetAppType() == u.Ac.k_EStoreAppType_Music
                      ? "#SalePage_ParentApp_SoundTrack"
                      : "#SalePage_ParentApp_DLC",
                  ),
                ),
                a.createElement(
                  S._,
                  {
                    type: "app",
                    id: G.GetAppID(),
                    strExtraParams: t.strExtraParams,
                  },
                  a.createElement(
                    "img",
                    Object.assign(
                      {
                        loading: "lazy",
                        className: p.AppCapsuleImage,
                        alt: G.GetName(),
                        src: G.GetAssets().GetSmallCapsuleURL(),
                      },
                      (0, o.fn)(),
                    ),
                  ),
                ),
              ),
            ),
        );
      }
      function O(t) {
        var e;
        const {
            info: n,
            bHidePriceIfOwned: o,
            bHideStatusBanners: i,
            strExtraParams: l,
            imageType: p,
            bHasParentAppToDisplay: E,
            bUseSubscriptionLayout: g,
            elElementToAppendToHover: L,
            bHidePrice: S,
            bHidePlatforms: I,
            creatorAccountID: A,
            bIsHovered: T,
          } = t,
          [w] = (0, d.jk)(n.id, (0, _.TM)(n.type), { include_platforms: !0 }),
          k = (0, D.bJ)(),
          O =
            ((0, h.Dt)(n.type),
            (0, a.useMemo)(
              () => (null == w ? void 0 : w.GetIncludedAppIDsOrSelf()),
              [w],
            )),
          P =
            w &&
            (null == w
              ? void 0
              : w
                  .GetIncludedAppIDsOrSelf()
                  .every((t) => c.jg.Get().BOwnsApp(t)));
        if (!w) return null;
        const H = P && !i,
          z = (0, G.bk)((0, s.Hf)(`${w.GetStorePageURL()}${l || ""}`, k));
        let j,
          B = null;
        if (
          g &&
          (null == w ? void 0 : w.GetStoreItemType()) ==
            u.vn.k_EStoreItemType_App
        )
          B = a.createElement(y.r, { appid: w.GetAppID(), bIsMuted: T });
        else if (L);
        else {
          const e = P && o,
            r = H;
          B = a.createElement(v.Hl, {
            info: n,
            bShowAsMuted: r,
            bHidePrice: S,
            bShowInLibraryInsteadOfPrice: e,
            bHidePlatforms: I,
            creatorAccountID: A,
            bShowName: t.bShowName,
          });
        }
        return (
          "overrideNavigation" in n &&
            (j = (t) => (
              n.overrideNavigation(),
              t.preventDefault(),
              t.stopPropagation(),
              !1
            )),
          a.createElement(
            r.IS,
            {
              href: j ? null : z,
              style: { display: "block" },
              preferredFocus: E,
              onClick: j,
            },
            a.createElement(C.vs, { appids: O, hide_status_banners: i }),
            a.createElement(v.a4, { imageType: p, info: n }),
            a.createElement(b.y, {
              eDeckCompatibilityCategory:
                null === (e = null == w ? void 0 : w.GetPlatforms()) ||
                void 0 === e
                  ? void 0
                  : e.steam_deck_compat_category,
            }),
            Boolean(T && !(0, m.Hu)()) && a.createElement(f.v, { appInfo: n }),
            B,
          )
        );
      }
    },
  },
]);
