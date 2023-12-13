/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [9211],
  {
    16468: (t, e, a) => {
      a.d(e, {
        Bo: () => D,
        FG: () => S,
        N: () => y,
        P4: () => I,
        mb: () => b,
        yS: () => C,
      });
      var n = a(33940),
        i = a(52868),
        o = a.n(i),
        l = a(59621),
        s = a(89526),
        r = a(47165),
        c = a(82079),
        u = a(98210),
        d = a(54671),
        p = a(10412),
        _ = a(70750),
        m = a(11837),
        f = a(23801),
        g = a(23217),
        v = a(4306),
        L = a(32765);
      function E(t) {
        t.list_jsondata && "string" == typeof t.list_jsondata
          ? (t.list_jsondata = JSON.parse(t.list_jsondata))
          : ((0, f.X)(
              !t.list_jsondata,
              "Found unexpected ListDetails_t.list_jsondata type: " +
                typeof t.list_jsondata,
            ),
            (t.list_jsondata = {}));
      }
      const b = "0";
      function h(t, e) {
        (e.localized_flat_title = (0, m.LG)([], 31, null)),
          (e.localized_flat_blurb = (0, m.LG)([], 31, null)),
          (e.localized_flat_link = (0, m.LG)([], 31, null)),
          e.title !== b && (e.localized_flat_title[t] = e.title),
          e.blurb !== b && (e.localized_flat_blurb[t] = e.blurb),
          e.link !== b && (e.localized_flat_link[t] = e.link),
          e.title_localization.forEach((t) => {
            var a;
            (null === (a = t.localized_string) || void 0 === a
              ? void 0
              : a.length) > 0 &&
              (e.localized_flat_title[t.language] = t.localized_string);
          }),
          e.blurb_localization.forEach((t) => {
            var a;
            (null === (a = t.localized_string) || void 0 === a
              ? void 0
              : a.length) > 0 &&
              (e.localized_flat_blurb[t.language] = t.localized_string);
          }),
          e.link_localization.forEach((t) => {
            var a;
            (null === (a = t.localized_string) || void 0 === a
              ? void 0
              : a.length) > 0 &&
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
        LoadListDetails(t, e, a) {
          var i;
          return (0, n.mG)(this, void 0, void 0, function* () {
            if (this.m_mapList.has(e)) return this.m_mapList.get(e);
            const n =
                L.De.STORE_BASE_URL +
                "curator/" +
                t.GetAccountID() +
                "/admin/ajaxgetlistdetails",
              l = { listid: e };
            try {
              const s = yield o().get(n, {
                params: l,
                cancelToken: null == a ? void 0 : a.token,
              });
              if (
                1 ==
                (null === (i = null == s ? void 0 : s.data) || void 0 === i
                  ? void 0
                  : i.success)
              ) {
                const a = Object.assign({}, s.data.list_details);
                return (
                  (0, f.X)(
                    e == (null == a ? void 0 : a.listid),
                    "Wanted" + e + "but got" + (null == a ? void 0 : a.listid),
                  ),
                  E(a),
                  h(s.data.curation_language, a),
                  this.m_mapList.set(e, a),
                  this.m_mapListIDToClanAccount.set(e, t.GetAccountID()),
                  a
                );
              }
            } catch (t) {
              const e = (0, g.l)(t);
              console.error(
                "CCuratorListStore.LoadListDetails: error on load: " +
                  e.strErrorMsg,
                e,
              );
            }
            return null;
          });
        }
        LoadMyFollowedSaleCurationLists(t, e, a) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            if (
              !L.L7.logged_in ||
              (d.jg.Get().BIsLoaded() &&
                0 == d.jg.Get().GetFollowedCuratorCount())
            )
              return [];
            const n =
                L.De.STORE_BASE_URL + "curators/ajaxgetmycuratorsalelists",
              i = {
                clan_account_id: t.GetAccountID(),
                clan_event_gid: e,
                origin: self.origin,
                curator_clan_account_followed: d.jg.Get().BIsLoaded()
                  ? d.jg.Get().GetFollowedCuratorsAccountID().join(",")
                  : void 0,
              };
            return this.InternalLoadSaleCuratorLists(
              n,
              i,
              "CCuratorListStore.LoadMyFollowedSaleCurationLists",
              t,
              e,
              a,
            );
          });
        }
        LoadAllSaleCurationLists(t, e, a) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            if (this.m_mapEventGIDToLists.has(e))
              return this.m_mapEventGIDToLists.get(e);
            const n = L.De.STORE_BASE_URL + "curators/ajaxfindcuratorlists",
              i = {
                clan_account_id: t.GetAccountID(),
                clan_event_gid: e,
                origin: self.origin,
              };
            return this.InternalLoadSaleCuratorLists(
              n,
              i,
              "CCuratorListStore.LoadAllSaleCurationLists",
              t,
              e,
              a,
            );
          });
        }
        InternalLoadSaleCuratorLists(t, e, a, i, s, r) {
          var c;
          return (0, n.mG)(this, void 0, void 0, function* () {
            try {
              const a = yield o().get(t, {
                params: e,
                cancelToken: null == r ? void 0 : r.token,
              });
              if (
                1 ==
                (null === (c = null == a ? void 0 : a.data) || void 0 === c
                  ? void 0
                  : c.success)
              ) {
                const t = new Array();
                return (
                  (0, l.z)(() => {
                    a.data.matches &&
                      a.data.matches.forEach((e) => {
                        e.multi_detail_lists.forEach((a) => {
                          this.m_mapListIDToClanAccount.set(
                            a.listid,
                            e.clan_account_id,
                          ),
                            E(a),
                            h(e.curation_language, a),
                            this.m_mapList.set(a.listid, a),
                            t.push(a);
                        });
                      }),
                      this.m_mapEventGIDToLists.set(s, t);
                  }),
                  t
                );
              }
            } catch (t) {
              const e = (0, g.l)(t);
              console.error(a + ": error on load: " + e.strErrorMsg, e);
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
            (0, l.rC)(this),
            "dev" == L.De.WEB_UNIVERSE && (window.g_curatorListStore = this);
          let t = (0, L.kQ)("curatorlistdata", "application_config");
          ("dev" != L.De.WEB_UNIVERSE && "beta" != L.De.WEB_UNIVERSE) ||
            console.log(
              "DEV_DEBUG: CCuratorListStore loading list payload: " +
                (null == t ? void 0 : t.length),
              t,
            ),
            this.ValidateStoreDefault(t) &&
              (0, l.z)(() => {
                t.forEach((t) => {
                  t.multi_detail_lists.forEach((e) => {
                    E(e),
                      h(t.curation_language, e),
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
      function y(t, e) {
        const a = (0, v.NW)();
        return (
          (0, s.useEffect)(() => {
            if (D.Get().GetListDetails(e) || !t) return;
            const i = o().CancelToken.source();
            return (
              (() => {
                (0, n.mG)(this, void 0, void 0, function* () {
                  var n, o;
                  const l = yield D.Get().LoadListDetails(t, e);
                  if (!i.token.reason)
                    if (
                      null === (n = null == l ? void 0 : l.apps) || void 0 === n
                        ? void 0
                        : n.length
                    ) {
                      const t = [];
                      for (const e of l.apps) {
                        const a =
                          null ===
                            (o = null == e ? void 0 : e.recommended_app) ||
                          void 0 === o
                            ? void 0
                            : o.appid;
                        a && t.push({ id: a, type: "game" });
                      }
                      (0, _.qr)(
                        t,
                        Object.assign(Object.assign({}, _.NC), {
                          include_assets: !0,
                          include_release: !0,
                        }),
                      ),
                        u.ZP.Get().LoadAppIDsBatch(t.map((t) => t.id)),
                        a();
                    } else console.error("Found no list data");
                });
              })(),
              () => i.cancel("unmounting CuratorList")
            );
          }, [t, e, a]),
          D.Get().GetListDetails(e)
        );
      }
      function I(t) {
        const e = t && c.sV.GetClanInfoByClanAccountID(t),
          [a, n] = (0, s.useState)(!!e);
        return (
          (0, s.useEffect)(() => {
            if (a && t) {
              const e = r.K.InitFromClanID(t);
              c.sV.LoadClanInfoForClanSteamID(e).finally(() => {
                n(!0);
              });
            }
          }, [a, t]),
          e
        );
      }
      function S(t) {
        return (
          Boolean(null == t ? void 0 : t.sale_clan_event_gid) &&
          Boolean(null == t ? void 0 : t.sale_clan_steamid)
        );
      }
      function C(t) {
        const e = (0, v.NW)(),
          a = S(t) ? t.sale_clan_event_gid : null,
          i = a && p.j1.GetClanEventModel(a);
        return (
          (0, s.useEffect)(() => {
            if (i || !S(t)) return;
            const l = o().CancelToken.source();
            return (
              (() => {
                (0, n.mG)(this, void 0, void 0, function* () {
                  p.j1.Init(),
                    yield p.j1.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                      new r.K(t.sale_clan_steamid),
                      a,
                      0,
                    ),
                    l.token.reason || e();
                });
              })(),
              () => l.cancel("unmounting CuratorList")
            );
          }, [t, a, i, e]),
          i
        );
      }
      (0, n.gn)([l.LO], D.prototype, "m_mapList", void 0);
    },
    31245: (t, e, a) => {
      a.d(e, { B: () => T, O: () => P });
      var n = a(89526),
        i = a(62983),
        o = a(44026),
        l = a(51438),
        s = a(16221),
        r = a(98009),
        c = a(54671),
        u = a(85886),
        d = a(25871),
        p = a(5089),
        _ = a(43840),
        m = a(44421),
        f = a(23715),
        g = a.n(f),
        v = a(67935),
        L = a(21219),
        E = a(87539),
        b = a(3991),
        h = a(33406),
        D = a(98389),
        y = a(42317),
        I = a(71161),
        S = a(19304),
        C = a(14826),
        G = a(207),
        A = a(32765);
      const P = "capsule_index_";
      function T(t) {
        const {
            capsule: e,
            bShowParentApp: a,
            strExtraParams: r,
            elElementToAppendToHover: c,
            index: m,
            navKey: f,
            bHideStoreHover: v,
          } = t,
          [L, h] = n.useState(!1),
          [y] = (0, d.jk)(e.id, (0, u.TM)(e.type), i.bk),
          [G] = (0, d.vs)(a && (null == y ? void 0 : y.GetParentAppID()), i.bk),
          T = (0, I.bJ)(),
          j = (0, A.id)();
        if (!y) return null;
        const w = Boolean(G),
          z = n.createElement(
            k,
            Object.assign({}, t, {
              info: e,
              bIsHovered: L,
              bHasParentAppToDisplay: w,
            }),
          );
        return n.createElement(
          l.s,
          {
            className: (0, S.Z)({
              [g().OuterCapsuleContainer]: !0,
              [P + m]: 0 == m,
            }),
            navEntryPreferPosition: s.c4.PREFERRED_CHILD,
            navKey: f,
          },
          n.createElement(
            b.zw,
            { appid: y.GetAppID() },
            Boolean(v)
              ? n.createElement(n.Fragment, null, z)
              : n.createElement(
                  _.ll,
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
                    fnOnHoverStateChange: !j && h,
                    nCreatorAccountID: t.creatorAccountID,
                  },
                  z,
                ),
            Boolean(c) && n.createElement("div", null, c),
          ),
          w &&
            n.createElement(
              o.Ks,
              Object.assign(
                { className: g().CapsuleParentInfo },
                (0, E.h)(G, T, j, t.strExtraParams),
              ),
              n.createElement(
                b.zw,
                { appid: G.GetAppID() },
                n.createElement(
                  "div",
                  { className: g().ParentType },
                  (0, C.Xx)(
                    11 == y.GetAppType()
                      ? "#SalePage_ParentApp_SoundTrack"
                      : "#SalePage_ParentApp_DLC",
                  ),
                ),
                n.createElement(
                  D._,
                  {
                    type: "app",
                    id: G.GetAppID(),
                    strExtraParams: t.strExtraParams,
                  },
                  n.createElement(
                    "img",
                    Object.assign(
                      {
                        loading: "lazy",
                        className: p.AppCapsuleImage,
                        alt: G.GetName(),
                        src: G.GetAssets().GetSmallCapsuleURL(),
                      },
                      (0, i.fn)(),
                    ),
                  ),
                ),
              ),
            ),
        );
      }
      function k(t) {
        var e;
        const {
            info: a,
            bHidePriceIfOwned: i,
            bHideStatusBanners: l,
            strExtraParams: s,
            imageType: p,
            bHasParentAppToDisplay: f,
            bUseSubscriptionLayout: g,
            elElementToAppendToHover: E,
            bHidePrice: D,
            bHidePlatforms: S,
            creatorAccountID: C,
            bIsHovered: A,
          } = t,
          [P] = (0, d.jk)(a.id, (0, u.TM)(a.type), { include_platforms: !0 }),
          T = (0, I.bJ)(),
          k =
            ((0, b.Dt)(a.type),
            (0, n.useMemo)(
              () => (null == P ? void 0 : P.GetIncludedAppIDsOrSelf()),
              [P],
            )),
          j =
            P &&
            (null == P
              ? void 0
              : P.GetIncludedAppIDsOrSelf().every((t) =>
                  c.jg.Get().BOwnsApp(t),
                ));
        if (!P) return null;
        const w = j && !l,
          z = (0, G.bk)((0, r.Hf)(`${P.GetStorePageURL()}${s || ""}`, T));
        let B,
          H = null;
        if (g && 0 == (null == P ? void 0 : P.GetStoreItemType()))
          H = n.createElement(h.r, { appid: P.GetAppID(), bIsMuted: A });
        else if (E);
        else {
          const e = j && i,
            o = w;
          H = n.createElement(m.Hl, {
            info: a,
            bShowAsMuted: o,
            bHidePrice: D,
            bShowInLibraryInsteadOfPrice: e,
            bHidePlatforms: S,
            creatorAccountID: C,
            bShowName: t.bShowName,
          });
        }
        return (
          "overrideNavigation" in a &&
            (B = (t) => (
              a.overrideNavigation(t),
              t.preventDefault(),
              t.stopPropagation(),
              !1
            )),
          n.createElement(
            o.IS,
            {
              href: B ? null : z,
              style: { display: "block" },
              preferredFocus: f,
              onClick: B,
            },
            n.createElement(L.vs, { appids: k, hide_status_banners: l }),
            n.createElement(m.a4, { imageType: p, info: a }),
            n.createElement(y.y, {
              eDeckCompatibilityCategory:
                null === (e = null == P ? void 0 : P.GetPlatforms()) ||
                void 0 === e
                  ? void 0
                  : e.steam_deck_compat_category,
            }),
            Boolean(A && !(0, _.Hu)()) && n.createElement(v.v, { appInfo: a }),
            H,
          )
        );
      }
    },
  },
]);
