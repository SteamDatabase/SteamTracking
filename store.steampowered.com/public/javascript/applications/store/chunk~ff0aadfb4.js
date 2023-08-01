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
        Bo: () => b,
        FG: () => D,
        N: () => I,
        P4: () => y,
        mb: () => C,
        yS: () => S,
      });
      var a = n(33940),
        o = n(52868),
        i = n.n(o),
        l = n(50265),
        r = n(89526),
        s = n(47165),
        c = n(82079),
        u = n(98210),
        d = n(54671),
        _ = n(10412),
        p = n(70750),
        m = n(11837),
        v = n(23801),
        E = n(23217),
        g = n(4306),
        f = n(32765);
      function h(t) {
        t.list_jsondata && "string" == typeof t.list_jsondata
          ? (t.list_jsondata = JSON.parse(t.list_jsondata))
          : ((0, v.X)(
              !t.list_jsondata,
              "Found unexpected ListDetails_t.list_jsondata type: " +
                typeof t.list_jsondata,
            ),
            (t.list_jsondata = {}));
      }
      const C = "0";
      function L(t, e) {
        (e.localized_flat_title = (0, m.LG)([], 31, null)),
          (e.localized_flat_blurb = (0, m.LG)([], 31, null)),
          (e.localized_flat_link = (0, m.LG)([], 31, null)),
          e.title !== C && (e.localized_flat_title[t] = e.title),
          e.blurb !== C && (e.localized_flat_blurb[t] = e.blurb),
          e.link !== C && (e.localized_flat_link[t] = e.link),
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
      class b {
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
          var o;
          return (0, a.mG)(this, void 0, void 0, function* () {
            if (this.m_mapList.has(e)) return this.m_mapList.get(e);
            const a =
                f.De.STORE_BASE_URL +
                "curator/" +
                t.GetAccountID() +
                "/admin/ajaxgetlistdetails",
              l = { listid: e };
            try {
              const r = yield i().get(a, {
                params: l,
                cancelToken: null == n ? void 0 : n.token,
              });
              if (
                1 ==
                (null === (o = null == r ? void 0 : r.data) || void 0 === o
                  ? void 0
                  : o.success)
              ) {
                const n = Object.assign({}, r.data.list_details);
                return (
                  (0, v.X)(
                    e == (null == n ? void 0 : n.listid),
                    "Wanted" + e + "but got" + (null == n ? void 0 : n.listid),
                  ),
                  h(n),
                  L(r.data.curation_language, n),
                  this.m_mapList.set(e, n),
                  this.m_mapListIDToClanAccount.set(e, t.GetAccountID()),
                  n
                );
              }
            } catch (t) {
              const e = (0, E.l)(t);
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
          return (0, a.mG)(this, void 0, void 0, function* () {
            if (
              !f.L7.logged_in ||
              (d.jg.Get().BIsLoaded() &&
                0 == d.jg.Get().GetFollowedCuratorCount())
            )
              return [];
            const a =
                f.De.STORE_BASE_URL + "curators/ajaxgetmycuratorsalelists",
              o = {
                clan_account_id: t.GetAccountID(),
                clan_event_gid: e,
                origin: self.origin,
                curator_clan_account_followed: d.jg.Get().BIsLoaded()
                  ? d.jg.Get().GetFollowedCuratorsAccountID().join(",")
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
          return (0, a.mG)(this, void 0, void 0, function* () {
            if (this.m_mapEventGIDToLists.has(e))
              return this.m_mapEventGIDToLists.get(e);
            const a = f.De.STORE_BASE_URL + "curators/ajaxfindcuratorlists",
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
        InternalLoadSaleCuratorLists(t, e, n, o, r, s) {
          var c;
          return (0, a.mG)(this, void 0, void 0, function* () {
            try {
              const n = yield i().get(t, {
                params: e,
                cancelToken: null == s ? void 0 : s.token,
              });
              if (
                1 ==
                (null === (c = null == n ? void 0 : n.data) || void 0 === c
                  ? void 0
                  : c.success)
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
                            h(n),
                            L(e.curation_language, n),
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
              const e = (0, E.l)(t);
              console.error(n + ": error on load: " + e.strErrorMsg, e);
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
            "dev" == f.De.WEB_UNIVERSE && (window.g_curatorListStore = this);
          let t = (0, f.kQ)("curatorlistdata", "application_config");
          ("dev" != f.De.WEB_UNIVERSE && "beta" != f.De.WEB_UNIVERSE) ||
            console.log(
              "DEV_DEBUG: CCuratorListStore loading list payload: " +
                (null == t ? void 0 : t.length),
              t,
            ),
            this.ValidateStoreDefault(t) &&
              (0, l.z)(() => {
                t.forEach((t) => {
                  t.multi_detail_lists.forEach((e) => {
                    h(e),
                      L(t.curation_language, e),
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
        const n = (0, g.NW)();
        return (
          (0, r.useEffect)(() => {
            if (b.Get().GetListDetails(e) || !t) return;
            const o = i().CancelToken.source();
            return (
              (() => {
                (0, a.mG)(this, void 0, void 0, function* () {
                  var a, i;
                  const l = yield b.Get().LoadListDetails(t, e);
                  if (!o.token.reason)
                    if (
                      null === (a = null == l ? void 0 : l.apps) || void 0 === a
                        ? void 0
                        : a.length
                    ) {
                      const t = [];
                      for (const e of l.apps) {
                        const n =
                          null ===
                            (i = null == e ? void 0 : e.recommended_app) ||
                          void 0 === i
                            ? void 0
                            : i.appid;
                        n && t.push({ id: n, type: "game" });
                      }
                      (0, p.qr)(
                        t,
                        Object.assign(Object.assign({}, p.NC), {
                          include_assets: !0,
                          include_release: !0,
                        }),
                      ),
                        u.ZP.Get().LoadAppIDsBatch(t.map((t) => t.id)),
                        n();
                    } else console.error("Found no list data");
                });
              })(),
              () => o.cancel("unmounting CuratorList")
            );
          }, [t, e, n]),
          b.Get().GetListDetails(e)
        );
      }
      function y(t) {
        const e = t && c.sV.GetClanInfoByClanAccountID(t),
          [n, a] = (0, r.useState)(!!e);
        return (
          (0, r.useEffect)(() => {
            if (n && t) {
              const e = s.K.InitFromClanID(t);
              c.sV.LoadClanInfoForClanSteamID(e).finally(() => {
                a(!0);
              });
            }
          }, [n, t]),
          e
        );
      }
      function D(t) {
        return (
          Boolean(null == t ? void 0 : t.sale_clan_event_gid) &&
          Boolean(null == t ? void 0 : t.sale_clan_steamid)
        );
      }
      function S(t) {
        const e = (0, g.NW)(),
          n = D(t) ? t.sale_clan_event_gid : null,
          o = n && _.j1.GetClanEventModel(n);
        return (
          (0, r.useEffect)(() => {
            if (o || !D(t)) return;
            const l = i().CancelToken.source();
            return (
              (() => {
                (0, a.mG)(this, void 0, void 0, function* () {
                  _.j1.Init(),
                    yield _.j1.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                      new s.K(t.sale_clan_steamid),
                      n,
                      0,
                    ),
                    l.token.reason || e();
                });
              })(),
              () => l.cancel("unmounting CuratorList")
            );
          }, [t, n, o, e]),
          o
        );
      }
      (0, a.gn)([l.LO], b.prototype, "m_mapList", void 0);
    },
    31245: (t, e, n) => {
      "use strict";
      n.d(e, { B: () => w, O: () => G });
      var a = n(89526),
        o = n(62983),
        i = n(44026),
        l = n(51438),
        r = n(16221),
        s = n(98009),
        c = n(54671),
        u = n(85886),
        d = n(25871),
        _ = n(71),
        p = n(51441),
        m = n(44421),
        v = n(1631),
        E = n.n(v),
        g = n(67935),
        f = n(21219),
        h = n(87539),
        C = n(3991),
        L = n(33406),
        b = n(98389),
        I = n(42317),
        y = n(71161),
        D = n(19304),
        S = n(14826),
        A = n(32765);
      const G = "capsule_index_";
      function w(t) {
        const {
            capsule: e,
            bShowParentApp: n,
            strExtraParams: s,
            elElementToAppendToHover: c,
            index: m,
            navKey: v,
            bHideStoreHover: g,
          } = t,
          [f, L] = a.useState(!1),
          [I] = (0, d.jk)(e.id, (0, u.TM)(e.type), o.bk),
          [w] = (0, d.vs)(n && (null == I ? void 0 : I.GetParentAppID()), o.bk),
          O = (0, y.bJ)(),
          P = (0, A.id)();
        if (!I) return null;
        const H = Boolean(w),
          z = a.createElement(
            T,
            Object.assign({}, t, {
              info: e,
              bIsHovered: f,
              bHasParentAppToDisplay: H,
            }),
          );
        return a.createElement(
          l.s,
          {
            className: (0, D.Z)({
              [E().OuterCapsuleContainer]: !0,
              [G + m]: 0 == m,
            }),
            navEntryPreferPosition: r.c4.PREFERRED_CHILD,
            navKey: v,
          },
          a.createElement(
            C.zw,
            { appid: I.GetAppID() },
            Boolean(g)
              ? a.createElement(a.Fragment, null, z)
              : a.createElement(
                  p.ll,
                  {
                    className: E().CapsuleContainer,
                    item: e,
                    elElementToAppend: t.elElementToAppendToHover,
                    bShowDemoButton: t.bShowDemoButton,
                    bShowDeckCompatibilityDialog:
                      t.bShowDeckCompatibilityDialog,
                    bHidePrice: t.bHidePrice,
                    bUseSubscriptionLayout: t.bUseSubscriptionLayout,
                    strExtraParams: t.strExtraParams,
                    fnOnHoverStateChange: !P && L,
                    nCreatorAccountID: t.creatorAccountID,
                  },
                  z,
                ),
            Boolean(c) && a.createElement("div", null, c),
          ),
          H &&
            a.createElement(
              i.Ks,
              Object.assign(
                { className: E().CapsuleParentInfo },
                (0, h.h)(w, O, P, t.strExtraParams),
              ),
              a.createElement(
                C.zw,
                { appid: w.GetAppID() },
                a.createElement(
                  "div",
                  { className: E().ParentType },
                  (0, S.Xx)(
                    11 == I.GetAppType()
                      ? "#SalePage_ParentApp_SoundTrack"
                      : "#SalePage_ParentApp_DLC",
                  ),
                ),
                a.createElement(
                  b._,
                  {
                    type: "app",
                    id: w.GetAppID(),
                    strExtraParams: t.strExtraParams,
                  },
                  a.createElement(
                    "img",
                    Object.assign(
                      {
                        loading: "lazy",
                        className: _.AppCapsuleImage,
                        alt: w.GetName(),
                        src: w.GetAssets().GetSmallCapsuleURL(),
                      },
                      (0, o.fn)(),
                    ),
                  ),
                ),
              ),
            ),
        );
      }
      function T(t) {
        var e;
        const {
            info: n,
            bHidePriceIfOwned: o,
            bHideStatusBanners: l,
            strExtraParams: r,
            imageType: _,
            bHasParentAppToDisplay: v,
            bUseSubscriptionLayout: E,
            elElementToAppendToHover: h,
            bHidePrice: b,
            bHidePlatforms: D,
            creatorAccountID: S,
            bIsHovered: G,
          } = t,
          [w] = (0, d.jk)(n.id, (0, u.TM)(n.type), { include_platforms: !0 }),
          T = (0, y.bJ)(),
          O =
            ((0, C.Dt)(n.type),
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
        const H = P && !l;
        let z = (0, s.Hf)(`${w.GetStorePageURL()}${r || ""}`, T);
        A.De.IN_CLIENT &&
          !z.startsWith("steam://") &&
          (z = `steam://openurl/${z}`);
        let j,
          k = null;
        if (E && 0 == (null == w ? void 0 : w.GetStoreItemType()))
          k = a.createElement(L.r, { appid: w.GetAppID(), bIsMuted: G });
        else if (h);
        else {
          const e = P && o,
            i = H;
          k = a.createElement(m.Hl, {
            info: n,
            bShowAsMuted: i,
            bHidePrice: b,
            bShowInLibraryInsteadOfPrice: e,
            bHidePlatforms: D,
            creatorAccountID: S,
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
            i.IS,
            {
              href: j ? null : z,
              style: { display: "block" },
              preferredFocus: v,
              onClick: j,
            },
            a.createElement(f.vs, { appids: O, hide_status_banners: l }),
            a.createElement(m.a4, { imageType: _, info: n }),
            a.createElement(I.y, {
              eDeckCompatibilityCategory:
                null === (e = null == w ? void 0 : w.GetPlatforms()) ||
                void 0 === e
                  ? void 0
                  : e.steam_deck_compat_category,
            }),
            Boolean(G && !(0, p.Hu)()) && a.createElement(g.v, { appInfo: n }),
            k,
          )
        );
      }
    },
  },
]);
