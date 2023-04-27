/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [9211],
  {
    50902: (t) => {
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
    32744: (t) => {
      t.exports = { strMaxMobileWidth: "700px" };
    },
    12263: (t, e, n) => {
      "use strict";
      n.d(e, {
        Bo: () => L,
        FG: () => D,
        N: () => I,
        P4: () => y,
        mb: () => C,
        yS: () => S,
      });
      var a = n(33940),
        o = n(52868),
        i = n.n(o),
        r = n(50265),
        l = n(89526),
        s = (n(6960), n(49969), n(67575), n(82569)),
        c = n(29760),
        u = n(15877),
        d = n(2351),
        _ = n(68208),
        p = n(44029),
        m = (n(96158), n(99096)),
        v = n(32338),
        g = n(47330),
        E = n(31621),
        f = n(70983);
      function h(t) {
        t.list_jsondata && "string" == typeof t.list_jsondata
          ? (t.list_jsondata = JSON.parse(t.list_jsondata))
          : ((0, v.X)(
              !t.list_jsondata,
              "Found unexpected ListDetails_t.list_jsondata type: " +
                typeof t.list_jsondata
            ),
            (t.list_jsondata = {}));
      }
      const C = "0";
      function b(t, e) {
        (e.localized_flat_title = (0, m.LG)([], 30, null)),
          (e.localized_flat_blurb = (0, m.LG)([], 30, null)),
          (e.localized_flat_link = (0, m.LG)([], 30, null)),
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
      class L {
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
              t
            ),
            this.ValidateStoreDefault(t) &&
              (0, r.z)(() => {
                t.forEach((t) => {
                  t.multi_detail_lists.forEach((e) => {
                    h(e),
                      b(t.curation_language, e),
                      this.m_mapList.set(e.listid, e);
                  });
                });
              });
        }
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
              r = { listid: e };
            try {
              const l = yield i().get(a, {
                params: r,
                cancelToken: null == n ? void 0 : n.token,
              });
              if (
                1 ==
                (null === (o = null == l ? void 0 : l.data) || void 0 === o
                  ? void 0
                  : o.success)
              ) {
                const n = Object.assign({}, l.data.list_details);
                return (
                  (0, v.X)(
                    e == (null == n ? void 0 : n.listid),
                    "Wanted" + e + "but got" + (null == n ? void 0 : n.listid)
                  ),
                  h(n),
                  b(l.data.curation_language, n),
                  this.m_mapList.set(e, n),
                  this.m_mapListIDToClanAccount.set(e, t.GetAccountID()),
                  n
                );
              }
            } catch (t) {
              const e = (0, g.l)(t);
              console.error(
                "CCuratorListStore.LoadListDetails: error on load: " +
                  e.strErrorMsg,
                e
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
              n
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
              n
            );
          });
        }
        InternalLoadSaleCuratorLists(t, e, n, o, l, s) {
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
                  (0, r.z)(() => {
                    n.data.matches &&
                      n.data.matches.forEach((e) => {
                        e.multi_detail_lists.forEach((n) => {
                          this.m_mapListIDToClanAccount.set(
                            n.listid,
                            e.clan_account_id
                          ),
                            h(n),
                            b(e.curation_language, n),
                            this.m_mapList.set(n.listid, n),
                            t.push(n);
                        });
                      }),
                      this.m_mapEventGIDToLists.set(l, t);
                  }),
                  t
                );
              }
            } catch (t) {
              const e = (0, g.l)(t);
              console.error(n + ": error on load: " + e.strErrorMsg, e);
            }
            return [];
          });
        }
        static Get() {
          return L.s_Singleton || (L.s_Singleton = new L()), L.s_Singleton;
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
        const n = (0, E.NW)();
        return (
          (0, l.useEffect)(() => {
            if (L.Get().GetListDetails(e) || !t) return;
            const o = i().CancelToken.source();
            return (
              (() => {
                (0, a.mG)(this, void 0, void 0, function* () {
                  var a, i;
                  const r = yield L.Get().LoadListDetails(t, e);
                  if (!o.token.reason)
                    if (
                      null === (a = null == r ? void 0 : r.apps) || void 0 === a
                        ? void 0
                        : a.length
                    ) {
                      const t = [];
                      for (const e of r.apps) {
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
                        })
                      ),
                        u.ZP.Get().LoadAppIDsBatch(t.map((t) => t.id)),
                        n();
                    } else console.error("Found no list data");
                });
              })(),
              () => o.cancel("unmounting CuratorList")
            );
          }, [t, e, n]),
          L.Get().GetListDetails(e)
        );
      }
      function y(t) {
        const e = t && c.sV.GetClanInfoByClanAccountID(t),
          [n, a] = (0, l.useState)(!!e);
        return (
          (0, l.useEffect)(() => {
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
        const e = (0, E.NW)(),
          n = D(t) ? t.sale_clan_event_gid : null,
          o = n && _.j1.GetClanEventModel(n);
        return (
          (0, l.useEffect)(() => {
            if (o || !D(t)) return;
            const r = i().CancelToken.source();
            return (
              (() => {
                (0, a.mG)(this, void 0, void 0, function* () {
                  _.j1.Init(),
                    yield _.j1.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                      new s.K(t.sale_clan_steamid),
                      n,
                      0
                    ),
                    r.token.reason || e();
                });
              })(),
              () => r.cancel("unmounting CuratorList")
            );
          }, [t, n, o, e]),
          o
        );
      }
      (0, a.gn)([r.LO], L.prototype, "m_mapList", void 0);
    },
    7920: (t, e, n) => {
      "use strict";
      n.d(e, { B: () => G, O: () => w });
      var a = n(89526),
        o = n(51684),
        i = n(49194),
        r = n(23907),
        l = n(43407),
        s = (n(67575), n(12568)),
        c = (n(82702), n(2351)),
        u = n(55910),
        d = n(23708),
        _ = n(50902),
        p = n(69362),
        m = n(20186),
        v = n(30156),
        g = n.n(v),
        E = n(99004),
        f = n(61720),
        h = (n(87973), n(7746)),
        C = n(78205),
        b = n(741),
        L = n(35266),
        I = n(96138),
        y = n(68910),
        D = n(13806),
        S = n(31587),
        A = n(70983);
      const w = "capsule_index_";
      function G(t) {
        const {
            capsule: e,
            bShowParentApp: n,
            strExtraParams: s,
            elElementToAppendToHover: c,
            index: m,
            navKey: v,
          } = t,
          [E, f] = a.useState(!1),
          [b] = (0, d.jk)(e.id, (0, u.TM)(e.type), o.bk),
          [I] = (0, d.vs)(n && (null == b ? void 0 : b.GetParentAppID()), o.bk),
          G = (0, y.bJ)(),
          O = (0, A.id)();
        if (!b) return null;
        const P = Boolean(I);
        return a.createElement(
          r.s,
          {
            className: (0, D.Z)({
              [g().OuterCapsuleContainer]: !0,
              [w + m]: 0 == m,
            }),
            navEntryPreferPosition: l.c4.PREFERRED_CHILD,
            navKey: v,
          },
          a.createElement(
            C.zw,
            { appid: b.GetAppID() },
            a.createElement(
              p.ll,
              {
                className: g().CapsuleContainer,
                item: e,
                elElementToAppend: t.elElementToAppendToHover,
                bShowDemoButton: t.bShowDemoButton,
                bShowDeckCompatibilityDialog: t.bShowDeckCompatibilityDialog,
                bHidePrice: t.bHidePrice,
                bUseSubscriptionLayout: t.bUseSubscriptionLayout,
                strExtraParams: t.strExtraParams,
                fnOnHoverStateChange: !O && f,
                nCreatorAccountID: t.creatorAccountID,
              },
              a.createElement(
                T,
                Object.assign({}, t, {
                  info: e,
                  bIsHovered: E,
                  bHasParentAppToDisplay: P,
                })
              )
            ),
            Boolean(c) && a.createElement("div", null, c)
          ),
          P &&
            a.createElement(
              i.Ks,
              Object.assign(
                { className: g().CapsuleParentInfo },
                (0, h.h)(I, G, O, t.strExtraParams)
              ),
              a.createElement(
                C.zw,
                { appid: I.GetAppID() },
                a.createElement(
                  "div",
                  { className: g().ParentType },
                  (0, S.Xx)(
                    11 == b.GetAppType()
                      ? "#SalePage_ParentApp_SoundTrack"
                      : "#SalePage_ParentApp_DLC"
                  )
                ),
                a.createElement(
                  L._,
                  {
                    type: "app",
                    id: I.GetAppID(),
                    strExtraParams: t.strExtraParams,
                  },
                  a.createElement(
                    "img",
                    Object.assign(
                      {
                        loading: "lazy",
                        className: _.AppCapsuleImage,
                        alt: I.GetName(),
                        src: I.GetAssets().GetSmallCapsuleURL(),
                      },
                      (0, o.fn)()
                    )
                  )
                )
              )
            )
        );
      }
      function T(t) {
        var e;
        const {
            info: n,
            bHidePriceIfOwned: o,
            bHideStatusBanners: r,
            strExtraParams: l,
            imageType: _,
            bHasParentAppToDisplay: v,
            bUseSubscriptionLayout: g,
            elElementToAppendToHover: h,
            bHidePrice: L,
            bHidePlatforms: D,
            creatorAccountID: S,
            bIsHovered: A,
          } = t,
          [w] = (0, d.jk)(n.id, (0, u.TM)(n.type), { include_platforms: !0 }),
          G = (0, y.bJ)(),
          T =
            ((0, C.Dt)(n.type),
            (0, a.useMemo)(
              () => (null == w ? void 0 : w.GetIncludedAppIDsOrSelf()),
              [w]
            )),
          O =
            w &&
            (null == w
              ? void 0
              : w
                  .GetIncludedAppIDsOrSelf()
                  .every((t) => c.jg.Get().BOwnsApp(t)));
        if (!w) return null;
        const P = O && !r,
          z = (0, s.Hf)(`${w.GetStorePageURL()}${l || ""}`, G);
        let H,
          j = null;
        if (g && 0 == (null == w ? void 0 : w.GetStoreItemType()))
          j = a.createElement(b.r, { appid: w.GetAppID(), bIsMuted: A });
        else if (h);
        else {
          const e = O && o,
            i = P;
          j = a.createElement(m.Hl, {
            info: n,
            bShowAsMuted: i,
            bHidePrice: L,
            bShowInLibraryInsteadOfPrice: e,
            bHidePlatforms: D,
            creatorAccountID: S,
            bShowName: t.bShowName,
          });
        }
        return (
          "overrideNavigation" in n &&
            (H = (t) => (
              n.overrideNavigation(),
              t.preventDefault(),
              t.stopPropagation(),
              !1
            )),
          a.createElement(
            i.IS,
            {
              href: H ? null : z,
              style: { display: "block" },
              preferredFocus: v,
              onClick: H,
            },
            a.createElement(f.vs, { appids: T, hide_status_banners: r }),
            a.createElement(m.a4, { imageType: _, info: n }),
            a.createElement(I.y, {
              eDeckCompatibilityCategory:
                null === (e = null == w ? void 0 : w.GetPlatforms()) ||
                void 0 === e
                  ? void 0
                  : e.steam_deck_compat_category,
            }),
            Boolean(A && !(0, p.Hu)()) && a.createElement(E.v, { appInfo: n }),
            j
          )
        );
      }
    },
    76473: (t, e, n) => {
      "use strict";
      n.d(e, { p: () => i });
      var a = n(32744),
        o = n.n(a);
      function i() {
        return window.innerWidth < parseInt(o().strMaxMobileWidth);
      }
    },
  },
]);
