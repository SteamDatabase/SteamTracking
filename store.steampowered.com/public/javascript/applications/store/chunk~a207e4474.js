/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [46366],
  {
    57876: (e, t, n) => {
      n.d(t, { Xh: () => u, cU: () => d, tf: () => p, wl: () => _ });
      var a = n(22837),
        r = n(71150),
        o = n(95578),
        s = n(30894),
        i = n(16021),
        l = n(62792),
        c = n(78327);
      const u = {
        include_assets: !0,
        include_release: !0,
        include_platforms: !0,
        include_tag_count: 20,
        include_basic_info: !0,
        include_trailers: !0,
        include_reviews: !0,
        include_screenshots: !0,
        include_supported_languages: !0,
      };
      class d {
        m_setAlreadyAdded = new Set();
        Reset() {
          this.m_setAlreadyAdded = new Set();
        }
        BHasAppID(e) {
          return this.m_setAlreadyAdded.has("a" + e);
        }
        BHasPackageID(e) {
          return this.m_setAlreadyAdded.has("s" + e);
        }
        BHasBundleID(e) {
          return this.m_setAlreadyAdded.has("b" + e);
        }
        BHasStoreItemKey(e) {
          return this.m_setAlreadyAdded.has(
            this.ConvertStoreItemKeyToUniqueKey(e),
          );
        }
        AddStoreItemKey(e) {
          this.m_setAlreadyAdded.add(this.ConvertStoreItemKeyToUniqueKey(e));
        }
        ConvertStoreItemKeyToUniqueKey(e) {
          switch (e.item_type) {
            default:
            case "app":
              return "a" + e.id;
            case "sub":
              return "s" + e.id;
            case "bundle":
              return "b" + e.id;
          }
        }
      }
      const _ = 4;
      function p(e, t, n, a, r, o) {
        const s = new Array(),
          c = new Array(),
          u = new Array(),
          d = new Array();
        if (!e || 0 == e.length) return s;
        const p = [
          l.by.k_RejectSupportedLanguage,
          l.by.k_RejectAlreadyDisplayed,
          l.by.k_RejectNoTrailer,
        ];
        for (let o of e) {
          let e = o.id,
            _ = l.by.k_NotRejected;
          switch (o.item_type) {
            case "sub":
              const r = i.A.Get().GetPackage(e);
              if (1 !== r?.GetIncludedAppIDs()?.length) {
                _ = I(e, t, a, !0);
                break;
              }
              e = r.GetIncludedAppIDs()[0];
            case "app":
              _ = g(e, t, n, a, !0);
              break;
            case "bundle":
              _ = h(e, t, a, !0);
          }
          if (
            (_ == l.by.k_NotRejected
              ? ((o.rejected = l.by.k_NotRejected),
                s.push({ ...o, priority: 1 }))
              : p.includes(_)
                ? ((o.rejected = l.by.k_NotRejected), c.push(o))
                : ((o.rejected = _),
                  _ == l.by.k_RejectIgnoredGame ? u.push(o) : d.push(o)),
            s.length > r)
          )
            break;
        }
        return (
          s.length < r &&
            (m(s, c, o, 2),
            s.length < o &&
              t.enforce_minimum &&
              (m(s, u, o, 3), m(s, d, o, _))),
          s
        );
      }
      function m(e, t, n, a) {
        for (let r = 0; e.length < n && r < t.length; ++r)
          e.push({ ...t[r], priority: a });
      }
      function f(e, t) {
        const n = s.Fm.Get();
        if (t.only_current_platform && n.BHasPlatformPreferenceSet()) {
          if (
            !(
              (e.GetPlatforms()?.windows && n.BIsPreferredPlatform("win")) ||
              (e.GetPlatforms()?.mac && n.BIsPreferredPlatform("mac")) ||
              (e.GetPlatforms()?.steamos_linux &&
                n.BIsPreferredPlatform("linux"))
            )
          )
            return l.by.k_RejectWrongPlatform;
        }
        if (!t.prepurchase && e.BIsComingSoon())
          return l.by.k_RejectNoComingSoon;
        const a = e.GetPlatforms();
        return !t.virtual_reality &&
          a &&
          a.vr_support &&
          a.vr_support.vrhmd_only
          ? l.by.k_RejectNoVR
          : e.GetAllCreatorClanIDs()?.some((e) => n.BIsIgnoringCurator(e))
            ? l.by.k_RejectCreatorClan
            : l.by.k_NotRejected;
      }
      function y(e, t) {
        if (t.localized) {
          const t = (0, a.sfN)(c.TS.LANGUAGE);
          if (!e.GetAllLanguagesWithSomeSupport()?.includes(t))
            return l.by.k_RejectSupportedLanguage;
        }
        return l.by.k_NotRejected;
      }
      function g(e, t, n, a, c) {
        const u = i.A.Get().GetApp(e);
        if (!u) return l.by.k_RejectNotLoaded;
        const d = f(u, t);
        if (d != l.by.k_NotRejected) return d;
        const _ = s.Fm.Get();
        if (_.BIsGameIgnored(e)) return l.by.k_RejectIgnoredGame;
        if (_.BExcludeTagIDs(u.GetTagIDs())) return l.by.k_RejectIgnoreGameTags;
        if (_.BExcludesContentDescriptor(u.GetContentDescriptorIDs()))
          return l.by.k_RejectIgnoreContentDescriptors;
        if (!t.early_access && u.BIsEarlyAccess())
          return l.by.k_RejectEarlyAccess;
        const p = u.GetAppType();
        if (!t.software && p == o.uE.Sv) return l.by.k_RejectSoftware;
        if (t.games_already_in_library && _.BIsGameOwned(e))
          return l.by.k_RejectInLibrary;
        if (t.games_not_in_library && !_.BIsGameOwned(e))
          return l.by.k_RejectNotInLibrary;
        if (!t.video && [o.uE.Wz, o.uE.gQ, o.uE.ID].includes(p))
          return l.by.k_RejectVideo;
        if (t.has_discount) {
          const e = u.GetBestPurchaseOption();
          if (!e || !e.discount_pct) return l.by.k_RejectNoDiscount;
        }
        return "adultonly" != n &&
          t.no_ao_content &&
          (u.HasContentDescriptorID(r.u7) || u.HasContentDescriptorID(r.T4))
          ? l.by.k_RejectAO
          : p == o.uE.ue &&
              t.games_already_in_library &&
              _.BIsGameOwned(u.GetParentAppID() || 0)
            ? l.by.k_RejectInLibrary
            : c
              ? (p == o.uE.ue && a.BHasAppID(u.GetParentAppID() || 0)) ||
                a.BHasAppID(e)
                ? l.by.k_RejectAlreadyDisplayed
                : t.has_trailer && !u.BHasTrailers(!1)
                  ? l.by.k_RejectNoTrailer
                  : y(u, t)
              : l.by.k_NotRejected;
      }
      function G(e, t) {
        const n = s.Fm.Get();
        let a = !1;
        for (let t of e) {
          if (n.BIsGameIgnored(t)) return l.by.k_RejectIgnoredGame;
          n.BIsGameOwned(t) && (a = !0);
        }
        return t.games_not_in_library && a
          ? l.by.k_RejectInLibrary
          : t.games_not_in_library && !a
            ? l.by.k_RejectNotInLibrary
            : l.by.k_NotRejected;
      }
      function I(e, t, n, a) {
        const r = i.A.Get().GetPackage(e);
        if (!r) return l.by.k_RejectNotLoaded;
        const o = f(r, t);
        if (o != l.by.k_NotRejected) return o;
        const c = G(r.GetIncludedAppIDs(), t);
        if (c != l.by.k_NotRejected) return c;
        const u = s.Fm.Get();
        return t.games_already_in_library && u.BOwnsPackage(e)
          ? l.by.k_RejectInLibrary
          : u.BIsPackageIgnored(e)
            ? l.by.k_RejectIgnoredGame
            : a
              ? n.BHasPackageID(e)
                ? l.by.k_RejectAlreadyDisplayed
                : y(r, t)
              : l.by.k_NotRejected;
      }
      function h(e, t, n, a) {
        const r = i.A.Get().GetBundle(e);
        if (!r) return l.by.k_RejectNotLoaded;
        const o = f(r, t);
        if (o != l.by.k_NotRejected) return o;
        const s = G(r.GetIncludedAppIDs(), t);
        return s != l.by.k_NotRejected
          ? s
          : a
            ? n.BHasBundleID(e)
              ? l.by.k_RejectAlreadyDisplayed
              : y(r, t)
            : l.by.k_NotRejected;
      }
    },
    62734: (e, t, n) => {
      n.d(t, { f: () => o });
      var a = n(81393);
      var r = n(78327);
      class o {
        m_HomeView = void 0;
        BHasHomeView() {
          return Boolean(this.m_HomeView);
        }
        GetHomeView() {
          return this.m_HomeView?.home;
        }
        static s_globalSingletonStore;
        static Get() {
          var e;
          return (
            o.s_globalSingletonStore ||
              ((e = "CHomeViewStore.s_globalSingletonStore"),
              (0, a.wT)(!0, "Unexpected code running in SSR Server: " + e),
              (o.s_globalSingletonStore = new o())),
            o.s_globalSingletonStore
          );
        }
        constructor() {
          const e = (0, r.Tc)("home_view_setting", "application_config");
          this.ValidateHomeViewData(e) && this.SetHomeViewSetting(e);
          const t = (0, r.Tc)(
            "home_view_setting_override",
            "application_config",
          );
          this.ValidateHomeViewDataOverride(t) &&
            this.SetHomeViewSettingOverride(t);
        }
        ValidateHomeViewData(e) {
          const t = e;
          return (
            t && "object" == typeof t.home && "object" == typeof t.main_cluster
          );
        }
        SetHomeViewSetting(e) {
          this.m_HomeView = e;
        }
        ValidateHomeViewDataOverride(e) {
          const t = e;
          return (
            t &&
            (!t.all || "object" == typeof t.all) &&
            (!t.maincap || "object" == typeof t.maincap)
          );
        }
        SetHomeViewSettingOverride(e) {
          this.m_HomeView
            ? (this.m_HomeView.home = {
                ...this.m_HomeView.home,
                ...e?.all,
                ...e?.maincap,
              })
            : (this.m_HomeView = { home: { ...e?.all, ...e?.maincap } });
        }
      }
    },
    6626: (e, t, n) => {
      n.d(t, {
        F6: () => b,
        ME: () => k,
        QV: () => h,
        RA: () => D,
        cc: () => L,
        fq: () => j,
        m1: () => w,
      });
      var a = n(34629),
        r = n(41735),
        o = n.n(r),
        s = n(14947),
        i = n(90626),
        l = n(22837),
        c = n(37085),
        u = n(17720),
        d = n(4796),
        _ = n(30894),
        p = n(6379),
        m = n(99032),
        f = n(62490),
        y = n(81393),
        g = n(68797),
        G = n(84933),
        I = n(78327);
      const h = 1;
      function A(e) {
        e.list_jsondata && "string" == typeof e.list_jsondata
          ? (e.list_jsondata = JSON.parse(e.list_jsondata))
          : ((0, y.wT)(
              !e.list_jsondata,
              "Found unexpected ListDetails_t.list_jsondata type: " +
                typeof e.list_jsondata,
            ),
            (e.list_jsondata = {}));
      }
      const b = "0";
      function S(e, t) {
        (t.localized_flat_title = (0, f.$Y)([], l.bP9, null)),
          (t.localized_flat_blurb = (0, f.$Y)([], l.bP9, null)),
          (t.localized_flat_link = (0, f.$Y)([], l.bP9, null)),
          t.title !== b && (t.localized_flat_title[e] = t.title),
          t.blurb !== b && (t.localized_flat_blurb[e] = t.blurb),
          t.link !== b && (t.localized_flat_link[e] = t.link),
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
      class D {
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
        async LoadListDetails(e, t, n) {
          if (this.m_mapList.has(t)) return this.m_mapList.get(t);
          const a =
              I.TS.STORE_BASE_URL +
              "curator/" +
              e.GetAccountID() +
              "/admin/ajaxgetlistdetails",
            r = { listid: t };
          try {
            const s = await o().get(a, { params: r, cancelToken: n?.token });
            if (s?.data?.success == c.R) {
              const n = { ...s.data.list_details };
              return (
                (0, y.wT)(t == n?.listid, "Wanted" + t + "but got" + n?.listid),
                A(n),
                S(s.data.curation_language, n),
                this.m_mapList.set(t, n),
                this.m_mapListIDToClanAccount.set(t, e.GetAccountID()),
                n
              );
            }
          } catch (e) {
            const t = (0, g.H)(e);
            console.error(
              "CCuratorListStore.LoadListDetails: error on load: " +
                t.strErrorMsg,
              t,
            );
          }
          return null;
        }
        async LoadMyFollowedSaleCurationLists(e, t, n) {
          if (
            !I.iA.logged_in ||
            (_.Fm.Get().BIsLoaded() &&
              0 == _.Fm.Get().GetFollowedCuratorCount())
          )
            return [];
          const a = I.TS.STORE_BASE_URL + "curators/ajaxgetmycuratorsalelists",
            r = {
              clan_account_id: e.GetAccountID(),
              clan_event_gid: t,
              origin: self.origin,
              curator_clan_account_followed: _.Fm.Get().BIsLoaded()
                ? _.Fm.Get().GetFollowedCuratorsAccountID().join(",")
                : void 0,
            };
          return this.InternalLoadSaleCuratorLists(
            a,
            r,
            "CCuratorListStore.LoadMyFollowedSaleCurationLists",
            e,
            t,
            n,
          );
        }
        async LoadAllSaleCurationLists(e, t, n) {
          if (this.m_mapEventGIDToLists.has(t))
            return this.m_mapEventGIDToLists.get(t);
          const a = I.TS.STORE_BASE_URL + "curators/ajaxfindcuratorlists",
            r = {
              clan_account_id: e.GetAccountID(),
              clan_event_gid: t,
              origin: self.origin,
            };
          return this.InternalLoadSaleCuratorLists(
            a,
            r,
            "CCuratorListStore.LoadAllSaleCurationLists",
            e,
            t,
            n,
          );
        }
        async InternalLoadSaleCuratorLists(e, t, n, a, r, i) {
          try {
            const n = await o().get(e, { params: t, cancelToken: i?.token });
            if (n?.data?.success == c.R) {
              const e = new Array();
              return (
                (0, s.h5)(() => {
                  n.data.matches &&
                    n.data.matches.forEach((t) => {
                      t.multi_detail_lists.forEach((n) => {
                        this.m_mapListIDToClanAccount.set(
                          n.listid,
                          t.clan_account_id,
                        ),
                          A(n),
                          S(t.curation_language, n),
                          this.m_mapList.set(n.listid, n),
                          e.push(n);
                      });
                    }),
                    this.m_mapEventGIDToLists.set(r, e);
                }),
                e
              );
            }
          } catch (e) {
            const t = (0, g.H)(e);
            console.error(n + ": error on load: " + t.strErrorMsg, t);
          }
          return [];
        }
        static s_Singleton;
        static Get() {
          return D.s_Singleton || (D.s_Singleton = new D()), D.s_Singleton;
        }
        constructor() {
          (0, s.Gn)(this);
          let e = (0, I.Tc)("curatorlistdata", "application_config");
          this.ValidateStoreDefault(e) &&
            (0, s.h5)(() => {
              e.forEach((e) => {
                e.multi_detail_lists.forEach((t) => {
                  A(t),
                    S(e.curation_language, t),
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
      function k(e, t) {
        const n = (0, G.CH)();
        return (
          (0, i.useEffect)(() => {
            if (D.Get().GetListDetails(t) || !e) return;
            const a = o().CancelToken.source();
            return (
              (async () => {
                const r = await D.Get().LoadListDetails(e, t);
                if (!a.token.reason)
                  if (r?.apps?.length) {
                    const e = [];
                    for (const t of r.apps) {
                      const n = t?.recommended_app?.appid;
                      n && e.push({ id: n, type: "game" });
                    }
                    (0, m.H2)(e, {
                      ...m.jy,
                      include_assets: !0,
                      include_release: !0,
                    }),
                      n();
                  } else console.error("Found no list data");
              })(),
              () => a.cancel("unmounting CuratorList")
            );
          }, [e, t, n]),
          D.Get().GetListDetails(t)
        );
      }
      function w(e) {
        const t = e && d.ac.GetClanInfoByClanAccountID(e),
          [n, a] = (0, i.useState)(!!t);
        return (
          (0, i.useEffect)(() => {
            if (n && e) {
              const t = u.b.InitFromClanID(e);
              d.ac.LoadClanInfoForClanSteamID(t).finally(() => {
                a(!0);
              });
            }
          }, [n, e]),
          t
        );
      }
      function L(e) {
        return Boolean(e?.sale_clan_event_gid) && Boolean(e?.sale_clan_steamid);
      }
      function j(e) {
        const t = (0, G.CH)(),
          n = L(e) ? e.sale_clan_event_gid : null,
          a = n && p.O3.GetClanEventModel(n);
        return (
          (0, i.useEffect)(() => {
            if (a || !L(e)) return;
            const r = o().CancelToken.source();
            return (
              (async () => {
                p.O3.Init(),
                  await p.O3.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                    new u.b(e.sale_clan_steamid),
                    n,
                    0,
                  ),
                  r.token.reason || t();
              })(),
              () => r.cancel("unmounting CuratorList")
            );
          }, [e, n, a, t]),
          a
        );
      }
      (0, a.Cg)([s.sH], D.prototype, "m_mapList", void 0);
    },
    99032: (e, t, n) => {
      n.d(t, {
        AX: () => I,
        H2: () => y,
        Li: () => G,
        S7: () => p,
        a9: () => h,
        jy: () => g,
        nt: () => f,
        sd: () => _,
        tJ: () => m,
      });
      var a = n(57876),
        r = n(62792),
        o = n(81886),
        s = n(22837),
        i = n(95578),
        l = n(30894),
        c = n(16021),
        u = n(62734),
        d = n(81393);
      function _(e) {
        return c.A.Get().BIsStoreItemMissing(e.id, (0, r.SW)(e.type));
      }
      function p(e, t, n) {
        const a = new Array();
        return (
          e?.forEach((e) => a.push({ id: e, type: "game" })),
          t?.forEach((e) => a.push({ id: e, type: "sub" })),
          n?.forEach((e) => a.push({ id: e, type: "bundle" })),
          a
        );
      }
      function m(e) {
        const t = c.A.Get().GetStoreItem(e.id, (0, r.SW)(e.type));
        return (t?.GetBestPurchaseOption()?.discount_pct ?? 0) > 0;
      }
      function f(e) {
        if (!u.f.Get().GetHomeView()?.localized) return !0;
        const t = c.A.Get().GetStoreItem(e.id, (0, r.SW)(e.type));
        return (
          !t ||
          l.Fm.Get().BIsAnyLanguageEnabled(t.GetAllLanguagesWithSomeSupport())
        );
      }
      async function y(e, t, n) {
        if (!e || 0 == e.length) return [];
        const a = e.filter((e) => (0, o.fp)(e.type)).map((e) => e.id),
          r = e.filter((e) => "sub" === e.type).map((e) => e.id),
          s = e.filter((e) => "bundle" === e.type).map((e) => e.id);
        {
          const e = a.filter((e) => !c.A.Get().BHasApp(e, t)),
            n = r.filter((e) => !c.A.Get().BHasApp(e, t)),
            o = s.filter((e) => !c.A.Get().BHasApp(e, t));
          (e.length > 0 || n.length > 0 || o.length > 0) &&
            (await Promise.all([
              c.A.Get().QueueMultipleAppRequests(e, t),
              c.A.Get().QueueMultiplePackageRequests(n, t),
              c.A.Get().QueueMultipleBundleRequests(o, t),
            ]));
        }
        const i = new Set();
        s?.forEach((e) => {
          const t = c.A.Get().GetBundle(e);
          t?.GetIncludedAppIDs().forEach((e) => i.add(e));
        }),
          r?.forEach((e) => {
            const t = c.A.Get().GetPackage(e);
            t?.GetIncludedAppIDs().forEach((e) => i.add(e));
          });
        const l = Array.from(i).filter((e) => !c.A.Get().BHasApp(e, t));
        if (
          (l.length > 0 && (await c.A.Get().QueueMultipleAppRequests(l, t)),
          a.forEach((e) => i.add(e)),
          n)
        ) {
          const e = Array.from(i)
            .map((e) => {
              const t = c.A.Get().GetApp(e),
                n = t?.GetParentAppID();
              return n ? (i.add(n), n) : null;
            })
            .filter((e) => null !== e)
            .filter((e) => !c.A.Get().BHasApp(e, t));
          e.length > 0 && (await c.A.Get().QueueMultipleAppRequests(e, t));
        }
        return Array.from(i).filter((e) => {
          const t = c.A.Get().GetApp(e);
          return t && !t.GetParentAppID();
        });
      }
      const g = {
        include_tag_count: 20,
        include_basic_info: !0,
        include_supported_languages: !0,
      };
      function G(e) {
        if (!e) return !0;
        const t = l.Fm.Get();
        if (
          ((0, d.wT)(t.BIsLoaded(), "Dynamic Store not loaded"),
          e.GetStoreItemType() == i.c6.qI)
        ) {
          const n = e.GetParentAppID();
          if (
            t.BIsGameIgnored(e.GetAppID()) ||
            (void 0 !== n && t.BIsGameIgnored(n))
          )
            return !0;
        }
        if (t.BExcludesContentDescriptor(e.GetContentDescriptorIDs()))
          return !0;
        if (t.BExcludeTagIDs(e.GetTagIDs())) return !0;
        if (e.GetAllCreatorClanIDs().some((e) => t.BIsIgnoringCurator(e)))
          return !0;
        const n = u.f.Get().GetHomeView()?.localized;
        if (n) {
          const n = e.GetAllLanguagesWithSomeSupport();
          if (
            n.length > 0 &&
            !e.BHasSomeLanguageSupport(s.Bhc) &&
            !t.BIsAnyLanguageEnabled(n)
          )
            return !0;
        }
        return !1;
      }
      async function I(e, t, n, o) {
        const s = [];
        await y(e, a.Xh, t);
        for (const a of e) {
          const e = c.A.Get().GetStoreItem(a.id, (0, r.SW)(a.type));
          if (!e) {
            0;
            continue;
          }
          const i = e
            .GetIncludedAppIDs()
            .map((e) => c.A.Get().GetApp(e))
            .filter((e) => Boolean(e));
          if ((i.push(e), t)) {
            const e = new Set(
                i.map((e) => e.GetParentAppID()).filter((e) => Boolean(e)),
              ),
              t = Array.from(e)
                .map((e) => c.A.Get().GetApp(e))
                .filter((e) => Boolean(e));
            t && i.push(...t);
          }
          i.some(o || G)
            ? n && (l.Fm.Get().BIsStoreItemOwned(e) || n.push(a))
            : s.push(a);
        }
        return s;
      }
      async function h(e, t, n, a, o, s, i) {
        let u = await I(
          e,
          t,
          i,
          o
            ? (e) =>
                !e ||
                l.Fm.Get().BExcludesContentDescriptor(
                  e.GetContentDescriptorIDs(),
                ) ||
                l.Fm.Get().BExcludeTagIDs(e.GetTagIDs())
            : G,
        );
        const d = [];
        for (const e of u) {
          const t = c.A.Get().GetStoreItem(e.id, (0, r.SW)(e.type));
          if (!t) continue;
          const o = t?.GetIncludedAppIDsOrSelf();
          let u = !1;
          n && (u = u || o.every((e) => l.Fm.Get().BIsGameOwned(e))),
            a && (u = u || o.every((e) => l.Fm.Get().BIsGameWishlisted(e))),
            s && (u = u || o.every((e) => l.Fm.Get().BIsGameIgnored(e))),
            u ? i && i.push(e) : d.push(e);
        }
        return d;
      }
    },
  },
]);
