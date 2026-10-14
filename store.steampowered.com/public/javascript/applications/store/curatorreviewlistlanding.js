/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [20716],
    {
      92025: (q, X, e) => {
        "use strict";
        e.d(X, { fp: () => x, vm: () => s });
        var r = e(48156);
        const j = null;
        function h(p) {
          return j.includes(p);
        }
        function T(p) {
          return h(p) ? p : void 0;
        }
        function x(p) {
          return p
            ? p === "game" ||
                p === "dlc" ||
                p === "software" ||
                p === "music" ||
                p === "application" ||
                p === "demo" ||
                p === "hardware" ||
                p === "mod" ||
                p == "video" ||
                p === "beta" ||
                p === "advertising"
            : !1;
        }
        function s(p) {
          return p == null
            ? !1
            : p == r.uE.HT ||
                p == r.uE._i ||
                p == r.uE.Sv ||
                p == r.uE.Ov ||
                p == r.uE.ue ||
                p == r.uE.Hk ||
                p == r.uE.RA ||
                p == r.uE.Wz ||
                p == r.uE.Vi ||
                p == r.uE.pl;
        }
        function c(p) {
          return p === "music" || p === "dlc";
        }
      },
      20615: (q, X, e) => {
        "use strict";
        e.d(X, { _: () => v, p: () => w });
        var r = e(68312),
          j = e(5827),
          h = e(35038),
          T = e(48156);
        function x() {
          const M = useStoreBrowseContext(),
            B = useActiveAnonymousServiceTransport();
          return useQuery(c(B, M));
        }
        function s(M) {
          return ["StoreBrowsePriceStops", M];
        }
        function c(M, B) {
          const { country: F } = B;
          return {
            queryKey: s(F),
            queryFn: async () => p(M, F),
            staleTime: 1440 * 60 * 1e3,
          };
        }
        async function p(M, B) {
          const F = h.w.Init(T.wY);
          F.Body().set_country_code(B);
          const $ = await T.$4.GetPriceStops(M, F);
          if (!$.BSuccess())
            throw `Error loading price stops: ${$.GetErrorMessage()}`;
          return $.Body().toObject().price_stops || [];
        }
        var Y = e(80902),
          I = e(18210);
        function k(M) {
          return M?.length
            ? [
                { price: 0, label: (0, I.we)("#FacetedBrowse_Price_Free") },
                ...M.map((B) => ({
                  price: Number(B.amount_in_cents ?? 0) / 100,
                  label: (0, I.we)(
                    "#FacetedBrowse_Price_Under",
                    B.formatted_amount ?? "",
                  ),
                })),
                { price: void 0, label: (0, I.we)("#FacetedBrowse_Price_Any") },
              ]
            : [];
        }
        function w() {
          const M = (0, j.ce)(),
            B = (0, r.rW)(),
            { data: F } = (0, Y.I)({ ...c(B, M), select: k });
          return F ?? [];
        }
        function v(M, B) {
          return k(M.getQueryData(s(B)));
        }
      },
      3852: (q, X, e) => {
        "use strict";
        e.d(X, { hl: () => s, kP: () => x, pj: () => T, u: () => h });
        var r = e(73259),
          j = e(18210);
        function h(c, p, Y) {
          const I = c.name;
          if (I?.length > 0 && I[0]?.startsWith("#tagid_")) {
            const k = parseInt(I[0].substring(7));
            if (k > 0) return Y && Y[k];
          }
          return (0, j.we)((j.NT.GetWithFallback(I, p) || "").trim());
        }
        function T(c) {
          return String(c.type) + c.id;
        }
        function x(c, p) {
          return (
            c.jsondata.item_source_type != null &&
            c.jsondata.item_source_type !== r.w.k_ETaggedItems
          );
        }
        function s(c) {
          for (const p of c.facetValues)
            if (p.filter != null) {
              for (const Y of p.filter.clauses)
                for (const I of Y.or_tags) if (I.startsWith("[Opt]")) return !0;
            }
          return !1;
        }
      },
      97442: (q, X, e) => {
        "use strict";
        e.d(X, { r: () => p });
        var r = e(7850),
          j = e(24660),
          h = e(19298),
          T = e(17083),
          x = e(36707),
          s = e(2108),
          c = e.n(s);
        function p(Y) {
          const { crumbs: I, className: k, bHideLastArrow: w } = Y;
          return !I || I.length == 0
            ? null
            : (0, r.jsxs)("div", {
                className: (0, x.A)(s.BreadContainer, k),
                children: [
                  (0, r.jsx)(h.Z, {
                    className: "blockbg",
                    "flow-children": "row",
                    children: I.map((v, M) => {
                      const B = new Array();
                      return (
                        v.url.startsWith("http")
                          ? B.push(
                              (0, r.jsx)(
                                j.Ii,
                                { href: v.url, children: v.name },
                                "anchor_" + v.name,
                              ),
                            )
                          : B.push(
                              (0, r.jsx)(
                                T.N_,
                                { to: v.url, children: v.name },
                                "link_" + v.name,
                              ),
                            ),
                        (!w || M < I.length - 1) &&
                          B.push(
                            (0, r.jsx)(
                              "span",
                              { children: "\xA0> " },
                              v.name + "span",
                            ),
                          ),
                        B
                      );
                    }),
                  }),
                  (0, r.jsx)("div", { style: { clear: "left" } }),
                ],
              });
        }
      },
      24805: (q, X, e) => {
        "use strict";
        e.d(X, { Xh: () => p, cU: () => Y, tf: () => k, wl: () => I });
        var r = e(99412),
          j = e(18735),
          h = e(48156),
          T = e(6469),
          x = e(10142),
          s = e(10349),
          c = e(3166);
        const p = {
          include_assets: !0,
          include_release: !0,
          include_platforms: !0,
          include_tag_count: 20,
          include_basic_info: !0,
          include_optin_registration_tags: !0,
          include_trailers: !0,
          include_reviews: !0,
          include_screenshots: !0,
          include_supported_languages: !0,
        };
        class Y {
          m_setAlreadyAdded = new Set();
          Reset() {
            this.m_setAlreadyAdded = new Set();
          }
          BHasAppID(m) {
            return this.m_setAlreadyAdded.has("a" + m);
          }
          BHasPackageID(m) {
            return this.m_setAlreadyAdded.has("s" + m);
          }
          BHasBundleID(m) {
            return this.m_setAlreadyAdded.has("b" + m);
          }
          BHasStoreItemKey(m) {
            return this.m_setAlreadyAdded.has(
              this.ConvertStoreItemKeyToUniqueKey(m),
            );
          }
          AddStoreItemKey(m) {
            this.m_setAlreadyAdded.add(this.ConvertStoreItemKeyToUniqueKey(m));
          }
          ConvertStoreItemKeyToUniqueKey(m) {
            switch (m.item_type) {
              default:
              case "app":
                return "a" + m.id;
              case "sub":
                return "s" + m.id;
              case "bundle":
                return "b" + m.id;
            }
          }
        }
        const I = 4;
        function k(A, m, H, _, d, i) {
          const u = new Array(),
            C = new Array(),
            a = new Array(),
            t = new Array();
          if (!A || A.length == 0) return u;
          const l = [
            s.by.k_RejectSupportedLanguage,
            s.by.k_RejectAlreadyDisplayed,
            s.by.k_RejectNoTrailer,
          ];
          for (let g of A) {
            let E = g.id,
              b = s.by.k_NotRejected;
            switch (g.item_type) {
              case "sub":
                const L = x.A.Get().GetPackage(E);
                if (L?.GetIncludedAppIDs()?.length !== 1) {
                  b = $(E, m, _, !0);
                  break;
                }
                E = L.GetIncludedAppIDs()[0];
              case "app":
                b = B(E, m, H, _, !0);
                break;
              case "bundle":
                b = V(E, m, _, !0);
                break;
            }
            if (
              (b == s.by.k_NotRejected
                ? ((g.rejected = s.by.k_NotRejected),
                  u.push({ ...g, priority: 1 }))
                : l.includes(b)
                  ? ((g.rejected = s.by.k_NotRejected), C.push(g))
                  : ((g.rejected = b),
                    b == s.by.k_RejectIgnoredGame ? a.push(g) : t.push(g)),
              u.length > d)
            )
              break;
          }
          return (
            u.length < d &&
              (w(u, C, i, 2),
              u.length < i &&
                m.enforce_minimum &&
                (w(u, a, i, 3), w(u, t, i, I))),
            u
          );
        }
        function w(A, m, H, _) {
          for (let d = 0; A.length < H && d < m.length; ++d)
            A.push({ ...m[d], priority: _ });
        }
        function v(A, m) {
          const H = T.Fm.Get();
          if (
            m.only_current_platform &&
            H.BHasPlatformPreferenceSet() &&
            !(
              (A.GetPlatforms()?.windows && H.BIsPreferredPlatform("win")) ||
              (A.GetPlatforms()?.mac && H.BIsPreferredPlatform("mac")) ||
              (A.GetPlatforms()?.steamos_linux &&
                H.BIsPreferredPlatform("linux"))
            )
          )
            return s.by.k_RejectWrongPlatform;
          if (!m.prepurchase && A.BIsComingSoon())
            return s.by.k_RejectNoComingSoon;
          const _ = A.GetPlatforms();
          return !m.virtual_reality &&
            _ &&
            _.vr_support &&
            _.vr_support.vrhmd_only
            ? s.by.k_RejectNoVR
            : A.GetAllCreatorClanIDs()?.some((d) => H.BIsIgnoringCurator(d))
              ? s.by.k_RejectCreatorClan
              : s.by.k_NotRejected;
        }
        function M(A, m) {
          if (m.localized) {
            const H = (0, r.sfN)(c.TS.LANGUAGE);
            if (!A.GetAllLanguagesWithSomeSupport()?.includes(H))
              return s.by.k_RejectSupportedLanguage;
          }
          return s.by.k_NotRejected;
        }
        function B(A, m, H, _, d) {
          const i = x.A.Get().GetApp(A);
          if (!i) return s.by.k_RejectNotLoaded;
          const u = v(i, m);
          if (u != s.by.k_NotRejected) return u;
          const C = T.Fm.Get();
          if (C.BIsGameIgnored(A)) return s.by.k_RejectIgnoredGame;
          if (C.BExcludeTagIDs(i.GetTagIDs()))
            return s.by.k_RejectIgnoreGameTags;
          if (C.BExcludesContentDescriptor(i.GetContentDescriptorIDs()))
            return s.by.k_RejectIgnoreContentDescriptors;
          if (!m.early_access && i.BIsEarlyAccess())
            return s.by.k_RejectEarlyAccess;
          const a = i.GetAppType();
          if (!m.software && a == h.uE.Sv) return s.by.k_RejectSoftware;
          if (m.games_already_in_library && C.BIsGameOwned(A))
            return s.by.k_RejectInLibrary;
          if (m.games_not_in_library && !C.BIsGameOwned(A))
            return s.by.k_RejectNotInLibrary;
          if (!m.video && [h.uE.Wz, h.uE.gQ, h.uE.ID].includes(a))
            return s.by.k_RejectVideo;
          if (m.has_discount) {
            const t = i.GetBestPurchaseOption();
            if (!t || !t.discount_pct) return s.by.k_RejectNoDiscount;
          }
          return H != "adultonly" &&
            m.no_ao_content &&
            (i.HasContentDescriptorID(j.u7) || i.HasContentDescriptorID(j.T4))
            ? s.by.k_RejectAO
            : a == h.uE.ue &&
                m.games_already_in_library &&
                C.BIsGameOwned(i.GetParentAppID() || 0)
              ? s.by.k_RejectInLibrary
              : d
                ? (a == h.uE.ue && _.BHasAppID(i.GetParentAppID() || 0)) ||
                  _.BHasAppID(A)
                  ? s.by.k_RejectAlreadyDisplayed
                  : m.has_trailer && !i.BHasTrailers(!1)
                    ? s.by.k_RejectNoTrailer
                    : M(i, m)
                : s.by.k_NotRejected;
        }
        function F(A, m) {
          const H = T.Fm.Get();
          let _ = !1;
          for (let d of A) {
            if (H.BIsGameIgnored(d)) return s.by.k_RejectIgnoredGame;
            H.BIsGameOwned(d) && (_ = !0);
          }
          return m.games_not_in_library && _
            ? s.by.k_RejectInLibrary
            : m.games_not_in_library && !_
              ? s.by.k_RejectNotInLibrary
              : s.by.k_NotRejected;
        }
        function $(A, m, H, _) {
          const d = x.A.Get().GetPackage(A);
          if (!d) return s.by.k_RejectNotLoaded;
          const i = v(d, m);
          if (i != s.by.k_NotRejected) return i;
          const u = F(d.GetIncludedAppIDs(), m);
          if (u != s.by.k_NotRejected) return u;
          const C = T.Fm.Get();
          return m.games_already_in_library && C.BOwnsPackage(A)
            ? s.by.k_RejectInLibrary
            : C.BIsPackageIgnored(A)
              ? s.by.k_RejectIgnoredGame
              : _
                ? H.BHasPackageID(A)
                  ? s.by.k_RejectAlreadyDisplayed
                  : M(d, m)
                : s.by.k_NotRejected;
        }
        function V(A, m, H, _) {
          const d = x.A.Get().GetBundle(A);
          if (!d) return s.by.k_RejectNotLoaded;
          const i = v(d, m);
          if (i != s.by.k_NotRejected) return i;
          const u = F(d.GetIncludedAppIDs(), m);
          return u != s.by.k_NotRejected
            ? u
            : _
              ? H.BHasBundleID(A)
                ? s.by.k_RejectAlreadyDisplayed
                : M(d, m)
              : s.by.k_NotRejected;
        }
      },
      813: (q, X, e) => {
        "use strict";
        e.d(X, { $5: () => H, TB: () => m, ac: () => V });
        var r = e(40497),
          j = e(75233),
          h = e(14947),
          T = e(90626),
          x = e(76559),
          s = e(71742),
          c = e(3166),
          p = e(60480),
          Y = e(33512),
          I = e(55483),
          k = e(77291);
        const w = new WeakSet();
        function v(a = r.L) {
          if (typeof window > "u" || typeof document > "u" || w.has(a)) return;
          const t = (0, c.Fd)("groupvanityinfo", "application_config");
          (t === void 0 && document.readyState != "complete") ||
            (w.add(a), M(t) && (0, I.aA)(a, t));
        }
        function M(a) {
          const t = a;
          return t &&
            Array.isArray(t) &&
            t.length > 0 &&
            typeof t[0] == "object"
            ? typeof t[0].clanAccountID == "number" &&
                (typeof t[0].appid == "number" ||
                  typeof t[0].vanity_url == "string")
            : !1;
        }
        function B(a) {
          return typeof a == "string" ? parseInt(a) : a;
        }
        function F(a) {
          return typeof a == "string" ? Number.parseInt(a) : a;
        }
        class $ {
          m_queryClient = r.L;
          m_boxCacheVersion = h.sH.box(0);
          m_bWatchingCache = !1;
          m_bBumpScheduled = !1;
          Init() {
            this.LazyInit();
          }
          LazyInit() {
            v(this.m_queryClient),
              this.m_bWatchingCache ||
                ((this.m_bWatchingCache = !0),
                this.m_queryClient.getQueryCache().subscribe((t) => {
                  (t?.type != "added" &&
                    t?.type != "updated" &&
                    t?.type != "removed") ||
                    ((0, I.yT)(t.query?.queryKey) &&
                      this.ScheduleCacheVersionBump());
                }));
          }
          ScheduleCacheVersionBump() {
            this.m_bBumpScheduled ||
              ((this.m_bBumpScheduled = !0),
              queueMicrotask(() => {
                (this.m_bBumpScheduled = !1),
                  (0, h.h5)(() =>
                    this.m_boxCacheVersion.set(
                      this.m_boxCacheVersion.get() + 1,
                    ),
                  );
              }));
          }
          ReadCache() {
            return (
              this.LazyInit(), this.m_boxCacheVersion.get(), this.m_queryClient
            );
          }
          AddGroupVanities(t) {
            this.LazyInit(), M(t) && (0, I.aA)(this.m_queryClient, t);
          }
          BHasClanInfoLoaded(t) {
            return (
              (0, s.wT)(
                t.BIsValid(),
                "Clan SteamID is not valid when ClanInfo",
              ),
              (0, s.wT)(
                t.BIsClanAccount(),
                "Clan SteamID is not a clan account id when requesting clan info ",
              ),
              this.BHasClanInfoLoadedByAccountID(t.GetAccountID())
            );
          }
          BHasClanInfoLoadedByAccountID(t) {
            return !!(0, I.Gt)(F(t), this.ReadCache());
          }
          RegisterClanData(t) {
            this.LazyInit(), (0, I.aA)(this.m_queryClient, t);
          }
          async LoadOGGClanInfoForAppID(t) {
            return (
              this.LazyInit(),
              (t = B(t)),
              (0, s.wT)(
                t != 0,
                "LoadOGGClanInfoForAppID called with appid of zero",
              ),
              t == 0 ? null : (0, I.AB)(t, this.m_queryClient).catch(() => null)
            );
          }
          async LoadOGGClanInfoForIdentifier(t) {
            return this.LazyInit(), (0, I.Rc)(t, this.m_queryClient, "store");
          }
          async LoadOGGClanInfoForGroupVanity(t) {
            return this.LazyInit(), (0, I.Rc)(t, this.m_queryClient, "group");
          }
          async LoadClanInfoForClanSteamID(t) {
            return this.LoadClanInfoForClanAccountID(t.GetAccountID());
          }
          async LoadClanInfoForClanAccountID(t) {
            return this.LazyInit(), (0, I.MR)(F(t), this.m_queryClient);
          }
          GetOGGClanInfo(t) {
            const l = this.ReadCache();
            return typeof t == "string" ? (0, I.fy)(t, l) : (0, I.ko)(t, l);
          }
          GetClanSteamIDForAppID(t) {
            const l = (0, I.ko)(B(t), this.ReadCache());
            return l ? x.b.InitFromClanID(l.clanAccountID) : void 0;
          }
          GetClanVanityForAppID(t) {
            return (0, I.ko)(B(t), this.ReadCache())?.vanity_url;
          }
          GetClanVanityForClanSteamID(t) {
            return (0, I.Gt)(t.GetAccountID(), this.ReadCache())?.vanity_url;
          }
          HasLoadedClanAccountID(t) {
            return this.BHasClanInfoLoadedByAccountID(t);
          }
          GetClanMemberCount(t) {
            return (0, I.ko)(B(t), this.ReadCache())?.member_count ?? 0;
          }
          GetClanInfoByClanAccountID(t) {
            return (
              (0, s.wT)(
                !!t,
                "Unepxected clanid when requesting information. GetClanInfoByClanAccountID ",
              ),
              (0, I.Gt)(F(t), this.ReadCache())
            );
          }
          GetCreatorStoreURL(t) {
            let l = p.pF.GetCreatorHome(t);
            if (l) return l.GetCreatorHomeURL("developer");
            let g = this.GetClanInfoByClanAccountID(t.GetAccountID());
            return (
              c.TS.COMMUNITY_BASE_URL +
              (g.vanity_url
                ? "groups/" + g.vanity_url
                : "gid/" + t.ConvertTo64BitString())
            );
          }
        }
        const V = new $();
        (0, k.V)("g_ClanStore", V);
        function A() {
          const a = (0, j.jE)();
          return v(a), a;
        }
        function m(a) {
          A();
          const { data: t, isPending: l } = (0, I.TB)(a ? F(a) : void 0);
          return [!!a && l, t ?? void 0];
        }
        function H(a) {
          const t = A();
          (0, T.useEffect)(() => {
            a &&
              (0, I.MR)(F(a), t).catch((l) =>
                console.error(`Failed to hint load clan info ${a}`, l),
              );
          }, [a, t]);
        }
        function _(a) {
          return A(), useClanInfoByVanityQuery(a).data ?? null;
        }
        function d(a) {
          A();
          const t = a ? B(a) : void 0,
            { data: l, isPending: g } = useClanInfoByAppIDQuery(t);
          return { bLoadingClanInfo: !!t && g, clanInfo: l ?? null };
        }
        function i(a, t) {
          if (a.BIsOGGEvent()) return { bVisible: !1 };
          if (a.GetEventType() == k_EClanEventType_CreatorHome)
            return { bVisible: !1 };
          if (a.BHasSaleEnabled()) return { bVisible: !0 };
          if (
            a.jsondata.clone_from_event_gid &&
            a.jsondata.clone_from_sale_enabled
          )
            return { bVisible: !0 };
          if (a.clanSteamID.GetAccountID() == getMeetSteamClanID())
            return { bVisible: !1 };
          const g = g_CreatorHomeStore.GetCreatorHome(a.clanSteamID);
          return g &&
            g.BHasClanAccountFlagSet(
              EClanAccountFlags.k_EClanAccountFlag_AllowSalePageEditing,
            )
            ? { bVisible: !0 }
            : t
              ? { bVisible: !0, bValveOnly: !0 }
              : { bVisible: !1 };
        }
        function u(a, t) {
          return a.BIsOGGEvent()
            ? a.BHasSaleEnabled()
              ? { bVisible: !0 }
              : Config.EUNIVERSE == k_EUniversePublic
                ? { bVisible: !1 }
                : t
                  ? a.GetEventType() == k_EClanEventType_MajorUpdateEvent
                    ? { bVisible: !0, bValveOnly: !0 }
                    : { bVisible: !1 }
                  : { bVisible: !1 }
            : { bVisible: !1 };
        }
        function C(a) {
          return a.BIsOGGEvent()
            ? { bVisible: !1 }
            : a.GetEventType() != k_EClanEventType_CreatorHome
              ? { bVisible: !1 }
              : a.BHasSaleEnabled()
                ? { bVisible: !0 }
                : a.clanSteamID.GetAccountID() == getMeetSteamClanID()
                  ? { bVisible: !1 }
                  : { bVisible: !1 };
        }
      },
      24110: (q, X, e) => {
        "use strict";
        e.d(X, { f: () => T });
        var r = e(71742);
        function j(x) {
          (0, r.wT)(!0, "Unexpected code running in SSR Server: " + x);
        }
        var h = e(3166);
        class T {
          m_HomeView = void 0;
          BHasHomeView() {
            return !!this.m_HomeView;
          }
          GetHomeView() {
            return this.m_HomeView?.home;
          }
          static s_globalSingletonStore;
          static Get() {
            return (
              T.s_globalSingletonStore ||
                (j("CHomeViewStore.s_globalSingletonStore"),
                (T.s_globalSingletonStore = new T())),
              T.s_globalSingletonStore
            );
          }
          constructor() {
            const s = (0, h.Tc)("home_view_setting", "application_config");
            this.ValidateHomeViewData(s) && this.SetHomeViewSetting(s);
            const c = (0, h.Tc)(
              "home_view_setting_override",
              "application_config",
            );
            this.ValidateHomeViewDataOverride(c) &&
              this.SetHomeViewSettingOverride(c);
          }
          ValidateHomeViewData(s) {
            const c = s;
            return (
              c &&
              typeof c.home == "object" &&
              typeof c.main_cluster == "object"
            );
          }
          SetHomeViewSetting(s) {
            this.m_HomeView = s;
          }
          ValidateHomeViewDataOverride(s) {
            const c = s;
            return (
              c &&
              (!c.all || typeof c.all == "object") &&
              (!c.maincap || typeof c.maincap == "object")
            );
          }
          SetHomeViewSettingOverride(s) {
            this.m_HomeView
              ? (this.m_HomeView.home = {
                  ...this.m_HomeView.home,
                  ...s?.all,
                  ...s?.maincap,
                })
              : (this.m_HomeView = { home: { ...s?.all, ...s?.maincap } });
          }
        }
      },
      8303: (q, X, e) => {
        "use strict";
        e.d(X, {
          F6: () => C,
          ME: () => g,
          QV: () => H,
          RA: () => l,
          cc: () => b,
          fq: () => L,
          m1: () => E,
        });
        var r = e(41735),
          j = e.n(r),
          h = e(14947),
          T = e(90626),
          x = e(99412),
          s = e(72604),
          c = e(76559),
          p = e(813),
          Y = e(6469),
          I = e(77495),
          k = e(15901),
          w = e(41635),
          v = e(71742),
          M = e(34592),
          B = e(30096),
          F = e(3166),
          $ = Object.defineProperty,
          V = Object.getOwnPropertyDescriptor,
          A = (y, n, o, f) => {
            for (
              var D = f > 1 ? void 0 : f ? V(n, o) : n, O = y.length - 1, N;
              O >= 0;
              O--
            )
              (N = y[O]) && (D = (f ? N(n, o, D) : N(D)) || D);
            return f && D && $(n, o, D), D;
          };
        const m = 0,
          H = 1,
          _ = 2,
          d = 3,
          i = 4;
        function u(y) {
          y.list_jsondata && typeof y.list_jsondata == "string"
            ? (y.list_jsondata = JSON.parse(y.list_jsondata))
            : ((0, v.wT)(
                !y.list_jsondata,
                "Found unexpected ListDetails_t.list_jsondata type: " +
                  typeof y.list_jsondata,
              ),
              (y.list_jsondata = {}));
        }
        const C = "0";
        function a(y, n) {
          (n.localized_flat_title = (0, w.$Y)([], x.bP9, null)),
            (n.localized_flat_blurb = (0, w.$Y)([], x.bP9, null)),
            (n.localized_flat_link = (0, w.$Y)([], x.bP9, null)),
            n.title !== C && (n.localized_flat_title[y] = n.title),
            n.blurb !== C && (n.localized_flat_blurb[y] = n.blurb),
            n.link !== C && (n.localized_flat_link[y] = n.link),
            n.title_localization.forEach((o) => {
              o.localized_string?.length > 0 &&
                (n.localized_flat_title[o.language] = o.localized_string);
            }),
            n.blurb_localization.forEach((o) => {
              o.localized_string?.length > 0 &&
                (n.localized_flat_blurb[o.language] = o.localized_string);
            }),
            n.link_localization.forEach((o) => {
              o.localized_string?.length > 0 &&
                (n.localized_flat_link[o.language] = o.localized_string);
            });
        }
        const t = class fe {
          m_mapList = new Map();
          m_mapEventGIDToLists = new Map();
          m_mapListIDToClanAccount = new Map();
          GetListDetails(n) {
            return this.m_mapList.get(n);
          }
          GetAllSaleCurationLists(n) {
            return this.m_mapEventGIDToLists.get(n) || [];
          }
          GetClanAccountFromListID(n) {
            return this.m_mapListIDToClanAccount.get(n);
          }
          async LoadListDetails(n, o, f) {
            if (this.m_mapList.has(o)) return this.m_mapList.get(o);
            const D =
                F.TS.STORE_BASE_URL +
                "curator/" +
                n.GetAccountID() +
                "/admin/ajaxgetlistdetails",
              O = { listid: o };
            try {
              const N = await j().get(D, { params: O, cancelToken: f?.token });
              if (N?.data?.success == s.R) {
                const W = { ...N.data.list_details };
                return (
                  (0, v.wT)(
                    o == W?.listid,
                    "Wanted" + o + "but got" + W?.listid,
                  ),
                  u(W),
                  a(N.data.curation_language, W),
                  this.m_mapList.set(o, W),
                  this.m_mapListIDToClanAccount.set(o, n.GetAccountID()),
                  W
                );
              }
            } catch (N) {
              const W = (0, M.H)(N);
              console.error(
                "CCuratorListStore.LoadListDetails: error on load: " +
                  W.strErrorMsg,
                W,
              );
            }
            return null;
          }
          async LoadMyFollowedSaleCurationLists(n, o, f) {
            if (
              !F.iA.logged_in ||
              (Y.Fm.Get().BIsLoaded() &&
                Y.Fm.Get().GetFollowedCuratorCount() == 0)
            )
              return [];
            const D =
                F.TS.STORE_BASE_URL + "curators/ajaxgetmycuratorsalelists",
              O = {
                clan_account_id: n.GetAccountID(),
                clan_event_gid: o,
                origin: self.origin,
                curator_clan_account_followed: Y.Fm.Get().BIsLoaded()
                  ? Y.Fm.Get().GetFollowedCuratorsAccountID().join(",")
                  : void 0,
              };
            return this.InternalLoadSaleCuratorLists(
              D,
              O,
              "CCuratorListStore.LoadMyFollowedSaleCurationLists",
              n,
              o,
              f,
            );
          }
          async LoadAllSaleCurationLists(n, o, f) {
            if (this.m_mapEventGIDToLists.has(o))
              return this.m_mapEventGIDToLists.get(o);
            const D = F.TS.STORE_BASE_URL + "curators/ajaxfindcuratorlists",
              O = {
                clan_account_id: n.GetAccountID(),
                clan_event_gid: o,
                origin: self.origin,
              };
            return this.InternalLoadSaleCuratorLists(
              D,
              O,
              "CCuratorListStore.LoadAllSaleCurationLists",
              n,
              o,
              f,
            );
          }
          async InternalLoadSaleCuratorLists(n, o, f, D, O, N) {
            try {
              const W = await j().get(n, { params: o, cancelToken: N?.token });
              if (W?.data?.success == s.R) {
                const te = new Array();
                return (
                  (0, h.h5)(() => {
                    W.data.matches &&
                      W.data.matches.forEach((ae) => {
                        ae.multi_detail_lists.forEach((z) => {
                          this.m_mapListIDToClanAccount.set(
                            z.listid,
                            ae.clan_account_id,
                          ),
                            u(z),
                            a(ae.curation_language, z),
                            this.m_mapList.set(z.listid, z),
                            te.push(z);
                        });
                      }),
                      this.m_mapEventGIDToLists.set(O, te);
                  }),
                  te
                );
              }
            } catch (W) {
              const te = (0, M.H)(W);
              console.error(f + ": error on load: " + te.strErrorMsg, te);
            }
            return [];
          }
          static s_Singleton;
          static Get() {
            return (
              fe.s_Singleton || (fe.s_Singleton = new fe()), fe.s_Singleton
            );
          }
          constructor() {
            (0, h.Gn)(this);
            let n = (0, F.Tc)("curatorlistdata", "application_config");
            this.ValidateStoreDefault(n) &&
              (0, h.h5)(() => {
                n.forEach((o) => {
                  o.multi_detail_lists.forEach((f) => {
                    u(f),
                      a(o.curation_language, f),
                      this.m_mapList.set(f.listid, f);
                  });
                });
              });
          }
          ValidateStoreDefault(n) {
            const o = n;
            return o &&
              Array.isArray(o) &&
              o.length > 0 &&
              typeof o[0] == "object"
              ? typeof o[0].curation_language == "number" &&
                  o[0].multi_detail_lists &&
                  Array.isArray(o[0].multi_detail_lists) &&
                  typeof o[0].multi_detail_lists[0].listid == "string" &&
                  typeof o[0].multi_detail_lists[0].list_type == "number" &&
                  typeof o[0].multi_detail_lists[0].list_state == "number"
              : o && Array.isArray(o) && o.length == 0;
          }
        };
        A([h.sH], t.prototype, "m_mapList", 2);
        let l = t;
        function g(y, n) {
          const o = (0, B.CH)();
          return (
            (0, T.useEffect)(() => {
              if (l.Get().GetListDetails(n) || !y) return;
              const f = j().CancelToken.source();
              return (
                (async () => {
                  const O = await l.Get().LoadListDetails(y, n);
                  if (!f.token.reason)
                    if (O?.apps?.length) {
                      const N = [];
                      for (const W of O.apps) {
                        const te = W?.recommended_app?.appid;
                        te && N.push({ id: te, type: "game" });
                      }
                      (0, k.H2)(N, {
                        ...k.jy,
                        include_assets: !0,
                        include_release: !0,
                      }),
                        o();
                    } else console.error("Found no list data");
                })(),
                () => f.cancel("unmounting CuratorList")
              );
            }, [y, n, o]),
            l.Get().GetListDetails(n)
          );
        }
        function E(y) {
          const n = y && p.ac.GetClanInfoByClanAccountID(y),
            [o, f] = (0, T.useState)(!!n);
          return (
            (0, T.useEffect)(() => {
              if (o && y) {
                const D = c.b.InitFromClanID(y);
                p.ac.LoadClanInfoForClanSteamID(D).finally(() => {
                  f(!0);
                });
              }
            }, [o, y]),
            n
          );
        }
        function b(y) {
          return !!y?.sale_clan_event_gid && !!y?.sale_clan_steamid;
        }
        function L(y) {
          const n = (0, B.CH)(),
            o = b(y) ? y.sale_clan_event_gid : null,
            f = o && I.O3.GetClanEventModel(o);
          return (
            (0, T.useEffect)(() => {
              if (f || !b(y)) return;
              const D = j().CancelToken.source();
              return (
                (async () => (
                  I.O3.Init(),
                  await I.O3.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                    new c.b(y.sale_clan_steamid),
                    o,
                    0,
                  ),
                  !D.token.reason && n()
                ))(),
                () => D.cancel("unmounting CuratorList")
              );
            }, [y, o, f, n]),
            f
          );
        }
        function U(y) {
          const [n, o] = useState(null),
            f = L(y);
          return useEffect(() => o(f?.GetSaleFeaturedApps()), [f]), n;
        }
      },
      84676: (q, X, e) => {
        "use strict";
        e.d(X, {
          G6: () => w,
          Gg: () => B,
          Ow: () => M,
          Sq: () => Y,
          YM: () => H,
          eR: () => I,
          ik: () => k,
          mZ: () => F,
          t7: () => v,
          zX: () => V,
        });
        var r = e(41735),
          j = e.n(r),
          h = e(90626),
          T = e(72604),
          x = e(48156),
          s = e(30096),
          c = e(10142);
        function p(_, d, i = !0) {
          const u = i
              ? CStoreItemCache.k_DataRequest_BasicInfo
              : CStoreItemCache.k_DataRequest_CommonOnly,
            C = i || CStoreItemCache.Get().BHasStoreItem(_, d, u) ? _ : null,
            [a, t] = w(C, d, u),
            [l, g] = useState(null),
            [E, b] = w(l, d, u);
          useEffect(() => {
            a?.GetAppType() === EStoreAppType.k_EStoreAppType_Demo &&
              g(a.GetParentAppID());
          }, [a]);
          let L = a?.GetShortDescription()
            ? StripBBCodeTags(a.GetShortDescription())
            : "";
          (!L || L.length === 0) &&
            E &&
            (L = E?.GetShortDescription()
              ? StripBBCodeTags(E.GetShortDescription())
              : "");
          const U = t == k && (!l || b == k);
          return [L, U];
        }
        const Y = 1,
          I = 2,
          k = 3;
        function w(_, d, i, u) {
          const C = (0, h.useRef)(void 0),
            a = (0, h.useRef)(void 0),
            t = (0, s.CH)();
          C.current = _;
          const [l, g] = (0, h.useState)(void 0),
            {
              include_assets: E,
              include_release: b,
              include_platforms: L,
              include_all_purchase_options: U,
              include_screenshots: y,
              include_trailers: n,
              include_ratings: o,
              include_tag_count: f,
              include_reviews: D,
              include_basic_info: O,
              include_supported_languages: N,
              include_full_description: W,
              include_included_items: te,
              include_assets_without_overrides: ae,
              apply_user_filters: z,
              include_links: oe,
              include_extra_details: le,
              include_optin_registration_tags: G,
            } = i;
          if (
            ((0, h.useEffect)(() => {
              const ie = {
                include_assets: E,
                include_release: b,
                include_platforms: L,
                include_all_purchase_options: U,
                include_screenshots: y,
                include_trailers: n,
                include_ratings: o,
                include_tag_count: f,
                include_reviews: D,
                include_basic_info: O,
                include_supported_languages: N,
                include_full_description: W,
                include_included_items: te,
                include_assets_without_overrides: ae,
                apply_user_filters: z,
                include_links: oe,
                include_extra_details: le,
                include_optin_registration_tags: G,
              };
              let me = null;
              return (
                !_ ||
                  _ < 0 ||
                  c.A.Get().BHasStoreItem(_, d, ie) ||
                  (l !== void 0 && u && u == a.current) ||
                  (u !== a.current && (g(void 0), (a.current = u)),
                  (me = j().CancelToken.source()),
                  c.A.Get()
                    .QueueStoreItemRequest(_, d, ie)
                    .then((he) => {
                      !me?.token.reason && C.current === _ && g(he == T.R), t();
                    })),
                () => me?.cancel("useStoreItemCache: unmounting")
              );
            }, [
              _,
              d,
              u,
              l,
              E,
              b,
              L,
              U,
              y,
              n,
              o,
              f,
              D,
              O,
              N,
              W,
              te,
              ae,
              z,
              oe,
              le,
              G,
              t,
            ]),
            !_)
          )
            return [null, I];
          if (l === !1) return [void 0, I];
          if (c.A.Get().BIsStoreItemMissing(_, d)) return [void 0, I];
          if (!c.A.Get().BHasStoreItem(_, d, i)) return [void 0, Y];
          const ce = c.A.Get().GetStoreItemWithLegacyVisibilityCheck(_, d);
          return ce ? [ce, k] : [null, I];
        }
        function v(_, d, i) {
          return w(_, x.c6.qI, d, i);
        }
        function M(_, d, i) {
          return w(_, x.c6.xO, d, i);
        }
        function B(_, d, i) {
          return w(_, x.c6.RD, d, i);
        }
        function F(_, d, i) {
          const [u, C] = w(_, d, i);
          let a;
          u?.GetStoreItemType() == x.c6.RD &&
            !u.GetAssets()?.GetHeaderURL() &&
            u?.GetIncludedAppIDs().length == 1 &&
            (a = u.GetIncludedAppIDs()[0]);
          const [t, l] = v(a, i);
          return a && t?.BIsVisible() ? [t, l] : [u, C];
        }
        function $(_, d, i, u) {
          const C = (0, s.CH)(),
            {
              include_assets: a,
              include_release: t,
              include_platforms: l,
              include_all_purchase_options: g,
              include_screenshots: E,
              include_trailers: b,
              include_ratings: L,
              include_tag_count: U,
              include_reviews: y,
              include_basic_info: n,
              include_supported_languages: o,
              include_full_description: f,
              include_included_items: D,
              include_assets_without_overrides: O,
              apply_user_filters: N,
              include_links: W,
              include_extra_details: te,
              include_optin_registration_tags: ae,
            } = i;
          return (
            (0, h.useEffect)(() => {
              if (!_ || _.length == 0) return;
              const oe = {
                  include_assets: a,
                  include_release: t,
                  include_platforms: l,
                  include_all_purchase_options: g,
                  include_screenshots: E,
                  include_trailers: b,
                  include_ratings: L,
                  include_tag_count: U,
                  include_reviews: y,
                  include_basic_info: n,
                  include_supported_languages: o,
                  include_full_description: f,
                  include_included_items: D,
                  include_assets_without_overrides: O,
                  apply_user_filters: N,
                  include_links: W,
                  include_extra_details: te,
                  include_optin_registration_tags: ae,
                },
                le = _.filter(
                  (ie) =>
                    !(
                      c.A.Get().BHasStoreItem(ie, d, oe) ||
                      c.A.Get().BIsStoreItemMissing(ie, d)
                    ),
                );
              if (le.length == 0) return;
              const G = j().CancelToken.source(),
                ce = le.map((ie) => c.A.Get().QueueStoreItemRequest(ie, d, oe));
              return (
                Promise.all(ce).then(() => {
                  G.token.reason || C();
                }),
                () => G.cancel("useStoreItemCacheMultiplePackages: unmounting")
              );
            }, [
              _,
              d,
              u,
              C,
              a,
              t,
              l,
              g,
              E,
              b,
              L,
              U,
              y,
              n,
              o,
              f,
              D,
              O,
              N,
              W,
              te,
              ae,
            ]),
            _
              ? _.every(
                  (oe) =>
                    c.A.Get().BHasStoreItem(oe, d, i) ||
                    c.A.Get().BIsStoreItemMissing(oe, d),
                )
                ? _.every((oe) =>
                    c.A.Get().GetStoreItemWithLegacyVisibilityCheck(oe, d),
                  )
                  ? k
                  : I
                : Y
              : I
          );
        }
        function V(_, d, i) {
          return $(_, x.c6.qI, d, i);
        }
        function A(_, d, i) {
          return $(_, EStoreItemType.k_EStoreItemType_Bundle, d, i);
        }
        function m(_, d, i) {
          return $(_, EStoreItemType.k_EStoreItemType_Package, d, i);
        }
        function H() {
          h.useEffect(
            () => (
              c.A.Get().SetReturnUnavailableItems(!0),
              () => c.A.Get().SetReturnUnavailableItems(!1)
            ),
            [],
          );
        }
      },
      15901: (q, X, e) => {
        "use strict";
        e.d(X, {
          AX: () => d,
          H2: () => m,
          Li: () => _,
          S7: () => $,
          WD: () => C,
          f4: () => a,
          gL: () => u,
          jy: () => H,
          nt: () => A,
          sd: () => F,
          tJ: () => V,
        });
        var r = e(24805),
          j = e(10349),
          h = e(92025),
          T = e(99412),
          x = e(48156),
          s = e(6469),
          c = e(10142),
          p = e(3166),
          Y = e(24110),
          I = e(71742),
          k = e(14947),
          w = e(20615),
          v = e(3852),
          M = e(40497),
          B = e(73259);
        function F(t) {
          return c.A.Get().BIsStoreItemMissing(t.id, (0, j.SW)(t.type));
        }
        function $(t, l, g) {
          const E = new Array();
          return (
            t?.forEach((b) => E.push({ id: b, type: "game" })),
            l?.forEach((b) => E.push({ id: b, type: "sub" })),
            g?.forEach((b) => E.push({ id: b, type: "bundle" })),
            E
          );
        }
        function V(t) {
          return (
            (c.A.Get()
              .GetStoreItem(t.id, (0, j.SW)(t.type))
              ?.GetBestPurchaseOption()?.discount_pct ?? 0) > 0
          );
        }
        function A(t) {
          if (!Y.f.Get().GetHomeView()?.localized) return !0;
          const l = c.A.Get().GetStoreItem(t.id, (0, j.SW)(t.type));
          return l
            ? s.Fm.Get().BIsAnyLanguageEnabled(
                l.GetAllLanguagesWithSomeSupport(),
              )
            : !0;
        }
        async function m(t, l, g) {
          if (!t || t.length == 0) return [];
          const E = t.filter((n) => (0, h.fp)(n.type)).map((n) => n.id),
            b = t.filter((n) => n.type === "sub").map((n) => n.id),
            L = t.filter((n) => n.type === "bundle").map((n) => n.id);
          {
            const n = E.filter((D) => !c.A.Get().BHasApp(D, l)),
              o = b.filter((D) => !c.A.Get().BHasApp(D, l)),
              f = L.filter((D) => !c.A.Get().BHasApp(D, l));
            (n.length > 0 || o.length > 0 || f.length > 0) &&
              (await Promise.all([
                c.A.Get().QueueMultipleAppRequests(n, l),
                c.A.Get().QueueMultiplePackageRequests(o, l),
                c.A.Get().QueueMultipleBundleRequests(f, l),
              ]));
          }
          const U = new Set();
          L?.forEach((n) => {
            c.A.Get()
              .GetBundle(n)
              ?.GetIncludedAppIDs()
              .forEach((f) => U.add(f));
          }),
            b?.forEach((n) => {
              c.A.Get()
                .GetPackage(n)
                ?.GetIncludedAppIDs()
                .forEach((f) => U.add(f));
            });
          const y = Array.from(U).filter((n) => !c.A.Get().BHasApp(n, l));
          if (
            (y.length > 0 && (await c.A.Get().QueueMultipleAppRequests(y, l)),
            E.forEach((n) => U.add(n)),
            g)
          ) {
            const n = Array.from(U)
              .map((o) => {
                const D = c.A.Get().GetApp(o)?.GetParentAppID();
                return D ? (U.add(D), D) : null;
              })
              .filter((o) => o !== null)
              .filter((o) => !c.A.Get().BHasApp(o, l));
            n.length > 0 && (await c.A.Get().QueueMultipleAppRequests(n, l));
          }
          return Array.from(U).filter((n) => {
            const o = c.A.Get().GetApp(n);
            return o && !o.GetParentAppID();
          });
        }
        const H = {
          include_tag_count: 20,
          include_basic_info: !0,
          include_supported_languages: !0,
        };
        function _(t) {
          if (!t) return !0;
          const l = s.Fm.Get();
          if (
            ((0, I.wT)(l.BIsLoaded(), "Dynamic Store not loaded"),
            t.GetStoreItemType() == x.c6.qI)
          ) {
            const E = t.GetParentAppID();
            if (
              l.BIsGameIgnored(t.GetAppID()) ||
              (E !== void 0 && l.BIsGameIgnored(E))
            )
              return !0;
          }
          if (
            l.BExcludesContentDescriptor(t.GetContentDescriptorIDs()) ||
            l.BExcludeTagIDs(t.GetTagIDs()) ||
            t.GetAllCreatorClanIDs().some((E) => l.BIsIgnoringCurator(E))
          )
            return !0;
          if (Y.f.Get().GetHomeView()?.localized) {
            const E = t.GetAllLanguagesWithSomeSupport();
            if (
              E.length > 0 &&
              !t.BHasSomeLanguageSupport(T.Bhc) &&
              !l.BIsAnyLanguageEnabled(E)
            )
              return !0;
          }
          return !1;
        }
        async function d(t, l, g, E) {
          let b = 0,
            L = 0;
          const U = [];
          await m(t, r.Xh, l);
          for (const y of t) {
            const n = c.A.Get().GetStoreItem(y.id, (0, j.SW)(y.type));
            if (!n) {
              b++;
              continue;
            }
            const o = n
              .GetIncludedAppIDs()
              .map((f) => c.A.Get().GetApp(f))
              .filter((f) => !!f);
            if ((o.push(n), l)) {
              const f = new Set(
                  o.map((O) => O.GetParentAppID()).filter((O) => !!O),
                ),
                D = Array.from(f)
                  .map((O) => c.A.Get().GetApp(O))
                  .filter((O) => !!O);
              D && o.push(...D);
            }
            o.some(E || _)
              ? (L++, g && (s.Fm.Get().BIsStoreItemOwned(n) || g.push(y)))
              : U.push(y);
          }
          return U;
        }
        async function i(t, l, g, E, b, L, U) {
          let n = await d(
            t,
            l,
            U,
            b
              ? (f) =>
                  !f ||
                  s.Fm.Get().BExcludesContentDescriptor(
                    f.GetContentDescriptorIDs(),
                  ) ||
                  s.Fm.Get().BExcludeTagIDs(f.GetTagIDs())
              : _,
          );
          const o = [];
          for (const f of n) {
            const D = c.A.Get().GetStoreItem(f.id, (0, j.SW)(f.type));
            if (!D) continue;
            const O = D?.GetIncludedAppIDsOrSelf();
            let N = !1;
            g && (N = N || O.every((W) => s.Fm.Get().BIsGameOwned(W))),
              E && (N = N || O.every((W) => s.Fm.Get().BIsGameWishlisted(W))),
              L && (N = N || O.every((W) => s.Fm.Get().BIsGameIgnored(W))),
              N ? U && U.push(f) : o.push(f);
          }
          return o;
        }
        function u() {
          const t = s.Fm.Get();
          if (t.BIsLoaded())
            return {
              bSignedIn: !!p.iA.logged_in,
              ePrimaryLanguage: t.GetPrimaryLanguage(),
              setSecondaryLanguages: t.GetSecondaryLanguages(),
              setExcludedContentDescriptors: new Set(
                t.ExcludedContentDescriptor,
              ),
            };
        }
        function C() {
          return (0, w._)(M.L, p.TS.COUNTRY);
        }
        async function a(t, l, g, E) {
          const b = t.BHasHideIgnoredItemsFacetValue(),
            L = t.BIsUserPreferenceEnabled(B.yX.k_EHideOwnedItems),
            U = t.BIsUserPreferenceEnabled(B.yX.k_EHideWishlistedItems),
            y = t.BIsUserPreferenceEnabled(B.yX.k_EHideIgnoredItems),
            n = [],
            o = await i(l, g, L, U, b, y, n);
          return (
            (0, k.h5)(() => {
              t.SetCapsulesRemovedByUserPreferenceFilters(new Set(n.map(v.pj)));
            }),
            E?.push(...n),
            o
          );
        }
      },
      13532: (q, X, e) => {
        "use strict";
        e.d(X, { l: () => w, r: () => k });
        var r = e(7850),
          j = e(90626),
          h = e(39239),
          T = e(36118),
          x = e(32608),
          s = e(36707),
          c = e(18210),
          p = e(70758),
          Y = e.n(p),
          I = e(1123);
        const k = (v) => {
            const M = ["maxresdefault", "mqdefault", "default"],
              [B, F] = j.useState(0);
            j.useEffect(() => F(0), [v.video]);
            const $ = j.useRef(void 0);
            if (v.altImgWithFallback && v.altImgWithFallback.length > 0)
              return (0, r.jsx)(h.o, {
                className: v.className,
                srcs: v.altImgWithFallback,
              });
            if (v.altImg)
              return (0, r.jsx)("img", {
                src: v.altImg,
                className: v.className,
              });
            {
              const V =
                  "https://img.youtube.com/vi/" + v.video + "/" + M[B] + ".jpg",
                A = () => {
                  B + 1 < M.length && F(B + 1);
                },
                m = () => {
                  $.current && $.current.naturalHeight < 91 && A();
                };
              return (0, r.jsx)("img", {
                ref: $,
                onLoad: m,
                onError: A,
                src: V,
                className: (0, s.A)(Y().YoutubePreviewImage, v.className),
              });
            }
          },
          w = (v) => {
            const [M, B] = j.useState(!1);
            (0, x.VC)(!!v.preloadYoutubeScripts);
            const F = (0, I.Rp)("youtube");
            if (!M || !F) {
              const $ = (V) => {
                v.onPlayerActivated && v.onPlayerActivated(),
                  B(!0),
                  V.stopPropagation(),
                  V.preventDefault();
              };
              return (0, r.jsxs)("div", {
                className: (0, s.A)(
                  "YoutubePreviewContainer",
                  Y().YoutubePreviewImage,
                  v.imageClassnames,
                ),
                onClick: F ? $ : void 0,
                children: [
                  (0, r.jsx)(k, {
                    className: "YoutubePreviewImage",
                    altImgWithFallback: v.altImgWithFallback,
                    altImg: v.altImg,
                    video: v.video,
                  }),
                  F &&
                    (0, r.jsxs)(r.Fragment, {
                      children: [
                        (0, r.jsx)("div", {
                          className: "YoutubePreviewPlay",
                          children: (0, r.jsx)(T.IOc, {}),
                        }),
                        (0, r.jsx)("div", {
                          className: "VideoHintText",
                          children: (0, c.we)(
                            "#EventCalendar_WatchYouTubeVideo",
                          ),
                        }),
                      ],
                    }),
                ],
              });
            } else
              return (0, r.jsx)(x.N1, {
                ...v,
                classnames: (0, s.A)(Y().YoutubePlayer, v.classnames),
              });
          };
      },
      77243: (q, X, e) => {
        "use strict";
        e.r(X),
          e.d(X, { CuratorReviewListContainer: () => Ce, default: () => Le });
        var r = e(7850),
          j = e(75844),
          h = e(90626),
          T = e(43434),
          x = e(99412),
          s = e(24660),
          c = e(19298),
          p = e(43458),
          Y = e(88743),
          I = e(80702),
          k = e(63063),
          w = e(48421),
          v = e(76559),
          M = e(83482),
          B = e(47689),
          F = e(41735),
          $ = e.n(F),
          V = e(3166),
          A = e(34592),
          m = e(72604);
        async function H(P, S) {
          const R =
              V.TS.STORE_BASE_URL + "contenthub/ajaxfilterappsbycontenthub",
            Q = {
              hubtype: P.GetContentHubType(),
              category: P.GetContentHubCategory(),
              tagid: P.GetContentHubTag(),
              prune_list_optin_name: P.jsondata.prune_list_optin_name,
              optin_tagid: P.jsondata.optin_tagid,
              optin_prune_tagid: P.jsondata.optin_prune_tagid,
              optin_only: P.jsondata.optin_only,
              applist: S.sort().join(","),
            };
          let J = null;
          const K = new Set();
          try {
            const Z = await $().get(R, { params: Q });
            if (Z?.data?.success == m.R)
              return Z.data.appids.forEach((ee) => K.add(ee)), K;
            J = (0, A.H)(Z);
          } catch (Z) {
            J = (0, A.H)(Z);
          }
          return (
            console.error(
              "LoadContentHubFilteredApps failed: " + J?.strErrorMsg,
              J,
            ),
            K
          );
        }
        function _(P, S) {
          const [R, Q] = (0, h.useState)(
              P?.BUsesContentHubForItemSource() ? new Set() : null,
            ),
            J = (0, B.m)("useFilteredAppViaContentHub");
          return (
            (0, h.useEffect)(() => {
              P?.BUsesContentHubForItemSource() &&
                !R &&
                H(P, S).then((K) => {
                  J.token.reason || Q(K);
                });
            }, [R, J.token.reason, P, S]),
            R
          );
        }
        var d = e(8303),
          i = e(6469),
          u = e(10142),
          C = e(10349),
          a = e(84676),
          t = e(39567),
          l = e(40358),
          g = e(10999),
          E = e.n(g),
          b = e(36118),
          L = e(36707),
          U = e(70758);
        const y = "(?:https?://)?(?:www.)?twitch.tv/videos/([0-9]+)S*",
          n = new RegExp(y);
        function o(P) {
          const S = n.exec(P);
          return S && S.length > 1 ? S[1] : null;
        }
        function f(P) {
          const {
              posterURL: S,
              videoid: R,
              muted: Q,
              autoplay: J,
              bIsClipID: K,
              time: Z,
              width: ee,
              height: se,
            } = P,
            [re, ne] = h.useState(!!S),
            ue = J == null || J == null ? !1 : J;
          if (re)
            return (0, r.jsxs)("div", {
              className: (0, L.A)(
                "YoutubePreviewContainer",
                U.YoutubePreviewImage,
                P.imageClassnames,
              ),
              onClick: () => ne(!1),
              children: [
                (0, r.jsx)("img", {
                  className: (0, L.A)(
                    "YoutubePreviewImage",
                    U.YoutubePreviewImage,
                  ),
                  src:
                    S ||
                    V.TS.COMMUNITY_CDN_URL +
                      "public/shared/images/responsive/youtube_16x9_placeholder.gif",
                }),
                (0, r.jsx)("div", {
                  className: "YoutubePreviewPlay",
                  children: (0, r.jsx)(b.IOc, {}),
                }),
              ],
            });
          let de = (0, V.xv)().replace("https://", "");
          const pe = de.indexOf("/");
          pe >= 0 && (de = de.substring(0, pe));
          let _e = K
            ? `https://clips.twitch.tv/embed?clip=${R}`
            : `https://player.twitch.tv/?video=${R}`;
          return (
            (_e += `&parent=${de}&autoplay=${ue}&muted=${!!Q}`),
            Z && (_e += `&time=${D(Z)}`),
            (0, r.jsxs)("div", {
              className: (0, L.A)("YoutubePlayer", E().TwitchPlayer),
              children: [
                (0, r.jsx)("img", {
                  className: (0, L.A)(
                    "YoutubePreviewContainer",
                    U.YoutubePreviewImage,
                    P.imageClassnames,
                  ),
                  src:
                    V.TS.COMMUNITY_CDN_URL +
                    "public/shared/images/responsive/youtube_16x9_placeholder.gif",
                }),
                (0, r.jsx)("iframe", {
                  src: _e,
                  allowFullScreen: !0,
                  frameBorder: 0,
                  width: ee || 460,
                  height: se || 300,
                }),
              ],
            })
          );
        }
        function D(P) {
          const S = Math.floor(P / 3600);
          P -= S * 60 * 60;
          const R = Math.floor(P / 60);
          return (P -= R * P), `${S}h${R}m${P}s`;
        }
        var O = e(15901),
          N = e(96117),
          W = e(85599),
          te = e(21659),
          ae = e(13532),
          z = e(18210),
          oe = e(53113),
          le = e(62014),
          G = e.n(le),
          ce = e(97442),
          ie = e(22584);
        function me(P) {
          const { clanInfo: S } = P,
            { curator_link: R, curator_medium_avatar: Q } = (0, V.Tc)(
              "curator_header",
              "application_config",
            );
          return (0, r.jsx)(c.Z, {
            className: "page_content_ctn",
            "flow-children": "column",
            autoFocus: !0,
            children: (0, r.jsxs)("div", {
              className: "page_content " + ie.HeaderContent,
              children: [
                (0, r.jsx)(ce.r, {
                  className: ie.BreadContainer,
                  crumbs: (0, V.Tc)("breadcrumbs", "application_config"),
                }),
                (0, r.jsxs)(c.Z, {
                  className: "list_header_area",
                  "flow-children": "row",
                  children: [
                    (0, r.jsx)("div", {
                      className: "curator_avatar_image",
                      children: (0, r.jsx)(s.Ii, {
                        href: R,
                        children: (0, r.jsx)("img", {
                          className: "curator_avatar",
                          src: Q,
                        }),
                      }),
                    }),
                    (0, r.jsx)("div", {
                      className: "curator_details",
                      children: (0, r.jsx)(s.Ii, {
                        className: "pageheader curator_name",
                        href: R,
                        children: (0, z.we)(
                          "#SteamCurator_List_Header_List",
                          S.group_name,
                        ),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        var he = e(51079),
          ve = e(21721),
          Ie = e(60001),
          be = e(60480);
        function Be(P) {
          return (0, r.jsx)(Ce, { listid: P.listid });
        }
        const Le = Be;
        function Ce(P) {
          const S = parseInt(
              (0, V.Tc)("curator_account_id", "application_config"),
            ),
            R = (0, d.m1)(S),
            Q = (0, d.ME)(R?.clanSteamID, P.listid);
          if (((0, t.vb)(V.TS.LANGUAGE), !Q)) return null;
          const J = R.is_ogg,
            K = R.is_creator_home && !R.is_ogg,
            Z = J
              ? "#SteamCurator_MoreDLC"
              : K
                ? "#SteamCurator_MoreProducts"
                : "#SteamCurator_MoreReviews";
          return (0, r.jsxs)(he.Ay, {
            feature: "curatorlistcapsule",
            children: [
              (0, r.jsx)(me, { clanInfo: R }),
              (0, r.jsx)("div", {
                className: "page_content_ctn grayscale",
                children: (0, r.jsx)("div", {
                  className: "page_content",
                  children: (0, r.jsxs)("div", {
                    className: G().CuratorListCtn,
                    children: [
                      (0, r.jsx)(Re, { listDetails: Q }),
                      (0, d.cc)(Q)
                        ? (0, r.jsx)(Ge, { listDetails: Q })
                        : (0, r.jsx)(Ae, {
                            listDetails: Q,
                            rgListItems: Q.apps,
                          }),
                      (0, r.jsxs)("div", {
                        className: G().CuratorMoreCtn,
                        children: [
                          (0, r.jsx)("h2", {
                            children: (0, z.we)(
                              "#SteamCurator_ExploreMoreTitle",
                            ),
                          }),
                          (0, r.jsx)(s.Ii, {
                            href: R.vanity_url,
                            children: (0, z.PP)(Z, R.group_name),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            ],
          });
        }
        function Ge(P) {
          const { listDetails: S } = P,
            [R, Q] = (0, h.useState)(null),
            J = new v.b(S.sale_clan_steamid),
            { eventModel: K } = (0, w.B9)(
              J.GetAccountID(),
              S.sale_clan_event_gid,
            ),
            Z = (0, h.useMemo)(
              () => (S.apps || []).map((se) => se.recommended_app.appid),
              [S],
            ),
            ee = _(K, Z);
          return (
            (0, h.useEffect)(() => {
              if (K)
                if (K.BUsesContentHubForItemSource())
                  ee &&
                    Q(
                      S.apps?.filter((se) => ee.has(se.recommended_app?.appid)),
                    );
                else {
                  const se = K.GetSaleFeaturedApps();
                  Q(S.apps?.filter((re) => se.has(re.recommended_app?.appid)));
                }
            }, [S, K, ee]),
            (0, r.jsx)(Ae, { listDetails: S, rgListItems: R })
          );
        }
        function Ae(P) {
          const { listDetails: S, rgListItems: R } = P,
            [Q, J] = (0, h.useState)(0),
            [K, Z] = (0, h.useState)(null),
            ee = (0, B.m)("CuratorAppListDisplay");
          if (
            (h.useEffect(() => {
              R &&
                (J(R?.length || 0),
                i.Fm.Get()
                  .HintLoad()
                  .then(() => {
                    const re = R.map((ne) => ne.recommended_app.appid);
                    u.A.Get()
                      .QueueMultipleAppRequests(re, O.jy)
                      .then(() => {
                        ee.token.reason ||
                          Z(
                            R.filter(
                              (ne) =>
                                !(0, O.Li)(
                                  u.A.Get().GetApp(ne.recommended_app.appid),
                                ),
                            ),
                          );
                      })
                      .catch(() => {
                        ee.token.reason || Z([]);
                      });
                  }));
            }, [R, ee]),
            K == null)
          )
            return (0, r.jsx)(W.t, {
              string: (0, z.we)("#Loading"),
              position: "center",
              size: "medium",
            });
          const se = S.list_type == d.QV;
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(c.Z, {
                className: (0, L.A)(G().CuratorList, se && G().CuratorListGrid),
                "flow-children": "grid",
                children: K.map((re, ne) =>
                  (0, r.jsx)(
                    Te,
                    { item: re, listDetails: S, bAutoFocus: ne == 0 },
                    "rec_" + re.recommended_app.appid,
                  ),
                ),
              }),
              100 > K.length &&
                (0, r.jsxs)("div", {
                  children: [
                    (0, r.jsxs)("span", {
                      children: [
                        (0, z.Yp)("#SteamCurator_Hidden", Q - K.length),
                        " ",
                      ],
                    }),
                    (0, r.jsx)(s.Ii, {
                      href: V.TS.STORE_BASE_URL + "account/preferences/",
                      children: (0, z.we)("#SteamCurator_Setting"),
                    }),
                  ],
                }),
            ],
          });
        }
        function Re(P) {
          const { listDetails: S } = P,
            R = (0, d.fq)(S),
            Q = (0, V.Tc)("showlisttitle", "application_config"),
            J = (0, V.Tc)("titleareaheight", "application_config"),
            K =
              S.list_jsondata.youtube_link &&
              (0, p.XU)(S.list_jsondata.youtube_link),
            Z = S.list_jsondata.youtube_link && o(S.list_jsondata.youtube_link),
            ee = (0, x.sfN)(V.TS.LANGUAGE),
            se = z.NT.GetWithFallback(S.localized_flat_title, ee),
            re = z.NT.GetWithFallback(S.localized_flat_blurb, ee),
            ne = z.NT.GetWithFallback(S.localized_flat_link, ee),
            ue =
              R &&
              R.GetImageURL(
                (0, te.c5)() ? "product_mobile_banner" : "product_banner",
                ee,
              );
          return (0, r.jsxs)("div", {
            className: G().TopReviewInfo,
            children: [
              !!ue &&
                (0, r.jsx)(s.Ii, {
                  href: (0, be.n4)(R),
                  children: (0, r.jsx)("img", {
                    className: G().SaleBanner,
                    src: ue,
                  }),
                }),
              Q &&
                se &&
                (0, r.jsx)("div", { className: G().Title, children: se }),
              Q &&
                re &&
                (0, r.jsx)("div", { className: G().Blurb, children: re }),
              J > 0 && (0, r.jsx)("div", { style: { height: J } }),
              K &&
                (0, r.jsx)("div", {
                  className: G().VideoReviewCtn,
                  children: (0, r.jsx)(ae.l, {
                    video: K.strVideoID,
                    startSeconds: K.nStartSeconds,
                    autoplay: !0,
                    autopause: !0,
                    showFullscreenBtn: !0,
                    controls: !0,
                    preloadYoutubeScripts: !0,
                    playsInline: !0,
                    imageClassnames: G().YouTubePreviewImage,
                  }),
                }),
              !!Z &&
                (0, r.jsx)("div", {
                  className: G().VideoReviewCtn,
                  children: (0, r.jsx)(f, {
                    videoid: Z,
                    posterURL: "",
                    imageClassnames: G().YouTubePreviewImage,
                  }),
                }),
              ne && (0, r.jsx)(Ee, { url: ne }),
            ],
          });
        }
        const Te = (0, j.PA)((P) => {
          const { item: S, listDetails: R, bAutoFocus: Q } = P,
            J = parseInt((0, V.Tc)("curator_account_id", "application_config")),
            K = (0, d.m1)(J),
            [Z] = (0, a.t7)(S?.recommended_app?.appid, {
              include_assets: !0,
              include_release: !0,
            }),
            ee = (0, h.useMemo)(
              () => ({
                id: Z?.GetID(),
                type: (0, C._4)(Z?.GetStoreItemType(), Z?.GetAppType()),
              }),
              [Z],
            ),
            se = (0, Y.rt)(ee);
          if (!K || !Z) return null;
          const {
              appid: re,
              link_url: ne,
              blurb: ue,
              time_recommended: de,
              recommendation_state: pe,
            } = S.recommended_app,
            _e = K.is_creator_home && !K.is_ogg,
            Me = R.list_jsondata.app_data?.[re],
            ge = ne && (0, p.XU)(ne),
            ye = ne && o(ne),
            Se = ue != d.F6 && ue,
            De = Z.BHasDemo(),
            Fe = Me?.img_url,
            Pe = `curator_clanid=${K.clanAccountID}&curator_listid=${R.listid}`,
            xe = Z.GetStorePageURL() + "/?curator_clanid=" + K.clanAccountID;
          return (0, r.jsxs)(c.Z, {
            className: G().CuratorReview,
            autoFocus: Q,
            children: [
              (0, r.jsx)("div", {
                className: G().CapsuleCtn,
                children:
                  ge || ye
                    ? (0, r.jsx)(Oe, {
                        strVideoID: ge?.strVideoID || ye,
                        nStartSeconds: ge?.nStartSeconds,
                        id: se,
                        strImgOverrideUrl: Fe,
                        bShowDemoButton: De,
                        strExtraParams: Pe,
                        bTwitchVideo: !!ye,
                      })
                    : (0, r.jsx)(N.W, {
                        imageType: "header",
                        capsule: ee,
                        bShowDemoButton: De,
                        strExtraParams: Pe,
                        bPreferAssetWithoutOverride: !1,
                      }),
              }),
              (0, r.jsxs)("div", {
                className: G().ReviewTextSection,
                children: [
                  (0, r.jsx)("a", {
                    className: G().GameTitle,
                    href: xe,
                    children: Z.GetName(),
                  }),
                  (0, r.jsxs)("div", {
                    className: G().RecommendationTypeAndDate,
                    children: [
                      (0, r.jsx)(je, { type: pe }),
                      (0, r.jsx)("div", {
                        className: G().ReviewDate,
                        children:
                          _e || !de
                            ? (0, z.we)(
                                "#EventModTile_ReleaseDate",
                                Z.GetFormattedSteamReleaseDate(),
                              )
                            : (0, z.$z)(de),
                      }),
                    ],
                  }),
                  !!Se &&
                    (0, r.jsx)("div", {
                      className: G().ReviewBlurb,
                      children: (0, z.we)("#SteamCurator_ReviewTextQuoted", Se),
                    }),
                  !!ne && (0, r.jsx)(Ee, { url: ne }),
                ],
              }),
            ],
          });
        });
        function Oe(P) {
          const {
              strVideoID: S,
              nStartSeconds: R,
              id: Q,
              strImgOverrideUrl: J,
              bShowDemoButton: K,
              strExtraParams: Z,
              bTwitchVideo: ee,
            } = P,
            se = 300,
            { data: re } = (0, l.lv)(Q);
          return (0, r.jsxs)("div", {
            className: G().YouTubeCapsule,
            children: [
              (0, r.jsx)("div", {
                className: G().YouTubeCtn,
                children: ee
                  ? (0, r.jsx)(f, {
                      videoid: S,
                      posterURL: re ? (0, ve.b0)(re, "header") : void 0,
                      imageClassnames: G().YouTubePreviewImage,
                      autoplay: !0,
                    })
                  : (0, r.jsx)(ae.l, {
                      video: S,
                      startSeconds: R,
                      autoplay: !0,
                      autopause: !0,
                      showFullscreenBtn: !0,
                      controls: !0,
                      preloadYoutubeScripts: !0,
                      playsInline: !0,
                      imageClassnames: G().YouTubePreviewImage,
                      altImg: J,
                    }),
              }),
              (0, r.jsxs)("div", {
                className: G().YouTubeCapsuleBottomBar,
                children: [
                  (0, r.jsx)("div", {
                    className: G().GameImageCtn,
                    children: (0, r.jsx)(I.Q, {
                      id: Q,
                      bShowDemoButton: K,
                      nDelayShowMs: se,
                      strExtraParams: Z,
                      hoverProps: {
                        direction: "overlay-center",
                        style: { minWidth: "300px" },
                      },
                      children: (0, r.jsx)("img", {
                        className: G().GameImage,
                        src: re ? (0, ve.b0)(re, "library_capsule") : void 0,
                      }),
                    }),
                  }),
                  (0, r.jsx)(k.q, { id: Q, strClassName: G().FullWidth }),
                ],
              }),
            ],
          });
        }
        function je(P) {
          switch (P.type) {
            case Ie.tV.$D:
              return (0, r.jsx)("div", {
                className: G().Recommended,
                children: (0, z.we)("#SteamCurator_Recommended"),
              });
            case Ie.tV.qP:
              return (0, r.jsx)("div", {
                className: G().NotRecommended,
                children: (0, z.we)("#SteamCurator_NotRecommended"),
              });
            case Ie.tV.y8:
              return (0, r.jsx)("div", {
                className: G().Informational,
                children: (0, z.we)("#SteamCurator_Informational"),
              });
            default:
              return null;
          }
        }
        function Ee(P) {
          let S = (0, M.OZ)(P.url);
          (0, T.p)(S) &&
            (S =
              (V.TS.IN_CLIENT ? "steam://openurl_external/" : "") +
              V.TS.COMMUNITY_BASE_URL +
              "linkfilter/?url=" +
              S);
          const R = (0, oe.wm)(P.url),
            Q = (0, p.Lg)(P.url);
          return (0, r.jsxs)("div", {
            className: G().FullReviewLink,
            children: [
              (0, r.jsx)(s.Ii, {
                className: G().FullReviewAnchor,
                href: S,
                rel: "noopener nofollow",
                preferredFocus: !1,
                autoFocus: !1,
                children: (0, z.we)(
                  Q
                    ? "#SteamCurator_WatchFullReview"
                    : "#SteamCurator_ReadFullReview",
                ),
              }),
              (0, r.jsx)("div", {
                className: G().FullReviewDomain,
                children: (0, z.we)(
                  "#SteamCurator_ReviewLinkHostnameBracketed",
                  R,
                ),
              }),
            ],
          });
        }
      },
      2108: (q) => {
        q.exports = { BreadContainer: "YaL4BAoqywnKnb5jbU_il" };
      },
      10999: (q) => {
        q.exports = {
          VideoReviewCtn: "V6zz2NPPxfnGjAchCe56r",
          YouTubePreviewImage: "_3joL1ZVcmC-6lCOLfjuIq7",
          TwitchPlayer: "_1Q0Ym9jG7UCFeD3c9LbOSy",
        };
      },
      70758: (q) => {
        q.exports = {
          YoutubePreviewImage: "_3bVwKmAuh70AH8XVDnyf5z",
          YoutubePlayer: "_3oXEPQSJY3yN1IVhfxeSy0",
        };
      },
      62014: (q) => {
        q.exports = {
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
          BackgroundAnimation: "_3mJ9erLLVEMyDp_3pY3KTp",
          "ItemFocusAnim-darkerGrey-nocolor": "_1ulNFI0sHkRk8TBa3fDFoS",
          "ItemFocusAnim-darkerGrey": "OAwSuqlAeZPXQNLFz_zLx",
          "ItemFocusAnim-darkGreySettings": "_1vwA5-HGmaz4WDUPfeIMXw",
          "ItemFocusAnim-darkGrey": "_16cDR36DBbspxGZ8MxxB4Z",
          "ItemFocusAnim-grey": "oS4oWYqe5S8U6CukOBsBi",
          "ItemFocusAnim-translucent-white-10": "_1jj4yrDY55YFShmQZ8VANk",
          "ItemFocusAnim-translucent-white-20": "TqUMJDChgbfs4XXKTa2UZ",
          "ItemFocusAnimBorder-darkGrey": "_35LQt0hozt0Fu6IHh1i9gW",
          "ItemFocusAnim-green": "_2cU5wBvJhWpmq45gjPgBx_",
          focusAnimation: "XfHabgjmzuwMo5SRyzbkv",
          hoverAnimation: "_2qskIW3iRVBxrrqQ3Sel07",
        };
      },
      22584: (q) => {
        q.exports = {
          BreadContainer: "GkVFIKIAijTGzfSc4BEQl",
          HeaderContent: "_2nPcyDvQVywsCXSLbgnUQp",
        };
      },
      17083: (q, X, e) => {
        "use strict";
        e.d(X, { N_: () => F, k2: () => _ });
        var r = e(92757),
          j = e(42891),
          h = e(90626),
          T = e(29248),
          x = e(58584),
          s = e(81115),
          c = e(68841),
          p = (function (i) {
            (0, j.A)(u, i);
            function u() {
              for (
                var a, t = arguments.length, l = new Array(t), g = 0;
                g < t;
                g++
              )
                l[g] = arguments[g];
              return (
                (a = i.call.apply(i, [this].concat(l)) || this),
                (a.history = (0, T.zR)(a.props)),
                a
              );
            }
            var C = u.prototype;
            return (
              (C.render = function () {
                return h.createElement(r.Ix, {
                  history: this.history,
                  children: this.props.children,
                });
              }),
              u
            );
          })(h.Component),
          Y = (function (i) {
            (0, j.A)(u, i);
            function u() {
              for (
                var a, t = arguments.length, l = new Array(t), g = 0;
                g < t;
                g++
              )
                l[g] = arguments[g];
              return (
                (a = i.call.apply(i, [this].concat(l)) || this),
                (a.history = (0, T.TM)(a.props)),
                a
              );
            }
            var C = u.prototype;
            return (
              (C.render = function () {
                return h.createElement(r.Ix, {
                  history: this.history,
                  children: this.props.children,
                });
              }),
              u
            );
          })(h.Component),
          I = function (u, C) {
            return typeof u == "function" ? u(C) : u;
          },
          k = function (u, C) {
            return typeof u == "string" ? (0, T.yJ)(u, null, null, C) : u;
          },
          w = function (u) {
            return u;
          },
          v = h.forwardRef;
        typeof v > "u" && (v = w);
        function M(i) {
          return !!(i.metaKey || i.altKey || i.ctrlKey || i.shiftKey);
        }
        var B = v(function (i, u) {
            var C = i.innerRef,
              a = i.navigate,
              t = i.onClick,
              l = (0, s.A)(i, ["innerRef", "navigate", "onClick"]),
              g = l.target,
              E = (0, x.A)({}, l, {
                onClick: function (L) {
                  try {
                    t && t(L);
                  } catch (U) {
                    throw (L.preventDefault(), U);
                  }
                  !L.defaultPrevented &&
                    L.button === 0 &&
                    (!g || g === "_self") &&
                    !M(L) &&
                    (L.preventDefault(), a());
                },
              });
            return (
              w !== v ? (E.ref = u || C) : (E.ref = C), h.createElement("a", E)
            );
          }),
          F = v(function (i, u) {
            var C = i.component,
              a = C === void 0 ? B : C,
              t = i.replace,
              l = i.to,
              g = i.innerRef,
              E = (0, s.A)(i, ["component", "replace", "to", "innerRef"]);
            return h.createElement(r.XZ.Consumer, null, function (b) {
              b || (0, c.A)(!1);
              var L = b.history,
                U = k(I(l, b.location), b.location),
                y = U ? L.createHref(U) : "",
                n = (0, x.A)({}, E, {
                  href: y,
                  navigate: function () {
                    var f = I(l, b.location),
                      D = (0, T.AO)(b.location) === (0, T.AO)(k(f)),
                      O = t || D ? L.replace : L.push;
                    O(f);
                  },
                });
              return (
                w !== v ? (n.ref = u || g) : (n.innerRef = g),
                h.createElement(a, n)
              );
            });
          });
        if (0) var $, V;
        var A = function (u) {
            return u;
          },
          m = h.forwardRef;
        typeof m > "u" && (m = A);
        function H() {
          for (var i = arguments.length, u = new Array(i), C = 0; C < i; C++)
            u[C] = arguments[C];
          return u
            .filter(function (a) {
              return a;
            })
            .join(" ");
        }
        var _ = m(function (i, u) {
          var C = i["aria-current"],
            a = C === void 0 ? "page" : C,
            t = i.activeClassName,
            l = t === void 0 ? "active" : t,
            g = i.activeStyle,
            E = i.className,
            b = i.exact,
            L = i.isActive,
            U = i.location,
            y = i.sensitive,
            n = i.strict,
            o = i.style,
            f = i.to,
            D = i.innerRef,
            O = (0, s.A)(i, [
              "aria-current",
              "activeClassName",
              "activeStyle",
              "className",
              "exact",
              "isActive",
              "location",
              "sensitive",
              "strict",
              "style",
              "to",
              "innerRef",
            ]);
          return h.createElement(r.XZ.Consumer, null, function (N) {
            N || (0, c.A)(!1);
            var W = U || N.location,
              te = k(I(f, W), W),
              ae = te.pathname,
              z = ae && ae.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
              oe = z
                ? (0, r.B6)(W.pathname, {
                    path: z,
                    exact: b,
                    sensitive: y,
                    strict: n,
                  })
                : null,
              le = !!(L ? L(oe, W) : oe),
              G = typeof E == "function" ? E(le) : E,
              ce = typeof o == "function" ? o(le) : o;
            le && ((G = H(G, l)), (ce = (0, x.A)({}, ce, g)));
            var ie = (0, x.A)(
              {
                "aria-current": (le && a) || null,
                className: G,
                style: ce,
                to: te,
              },
              O,
            );
            return (
              A !== m ? (ie.ref = u || D) : (ie.innerRef = D),
              h.createElement(F, ie)
            );
          });
        });
        if (0) var d;
      },
    },
  ]);
})();
