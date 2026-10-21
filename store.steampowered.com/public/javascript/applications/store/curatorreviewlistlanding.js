/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [20716],
    {
      92025: (ee, X, e) => {
        "use strict";
        e.d(X, { fp: () => U, vm: () => s });
        var t = e(48156);
        const j = null;
        function g(I) {
          return j.includes(I);
        }
        function O(I) {
          return g(I) ? I : void 0;
        }
        function U(I) {
          return I
            ? I === "game" ||
                I === "dlc" ||
                I === "software" ||
                I === "music" ||
                I === "application" ||
                I === "demo" ||
                I === "hardware" ||
                I === "mod" ||
                I == "video" ||
                I === "beta" ||
                I === "advertising"
            : !1;
        }
        function s(I) {
          return I == null
            ? !1
            : I == t.uE.HT ||
                I == t.uE._i ||
                I == t.uE.Sv ||
                I == t.uE.Ov ||
                I == t.uE.ue ||
                I == t.uE.Hk ||
                I == t.uE.RA ||
                I == t.uE.Wz ||
                I == t.uE.Vi ||
                I == t.uE.pl;
        }
        function c(I) {
          return I === "music" || I === "dlc";
        }
      },
      20615: (ee, X, e) => {
        "use strict";
        e.d(X, { _: () => E, p: () => N });
        var t = e(68312),
          j = e(5827),
          g = e(35038),
          O = e(48156);
        function U() {
          const M = useStoreBrowseContext(),
            B = useActiveAnonymousServiceTransport();
          return useQuery(c(B, M));
        }
        function s(M) {
          return ["StoreBrowsePriceStops", M];
        }
        function c(M, B) {
          const { country: x } = B;
          return {
            queryKey: s(x),
            queryFn: async () => I(M, x),
            staleTime: 1440 * 60 * 1e3,
          };
        }
        async function I(M, B) {
          const x = g.w.Init(O.wY);
          x.Body().set_country_code(B);
          const J = await O.$4.GetPriceStops(M, x);
          if (!J.BSuccess())
            throw `Error loading price stops: ${J.GetErrorMessage()}`;
          return J.Body().toObject().price_stops || [];
        }
        var Y = e(80902),
          y = e(18210);
        function K(M) {
          return M?.length
            ? [
                { price: 0, label: (0, y.we)("#FacetedBrowse_Price_Free") },
                ...M.map((B) => ({
                  price: Number(B.amount_in_cents ?? 0) / 100,
                  label: (0, y.we)(
                    "#FacetedBrowse_Price_Under",
                    B.formatted_amount ?? "",
                  ),
                })),
                { price: void 0, label: (0, y.we)("#FacetedBrowse_Price_Any") },
              ]
            : [];
        }
        function N() {
          const M = (0, j.ce)(),
            B = (0, t.rW)(),
            { data: x } = (0, Y.I)({ ...c(B, M), select: K });
          return x ?? [];
        }
        function E(M, B) {
          return K(M.getQueryData(s(B)));
        }
      },
      3852: (ee, X, e) => {
        "use strict";
        e.d(X, { hl: () => s, kP: () => U, pj: () => O, u: () => g });
        var t = e(73259),
          j = e(18210);
        function g(c, I, Y) {
          const y = c.name;
          if (y?.length > 0 && y[0]?.startsWith("#tagid_")) {
            const K = parseInt(y[0].substring(7));
            if (K > 0) return Y && Y[K];
          }
          return (0, j.we)((j.NT.GetWithFallback(y, I) || "").trim());
        }
        function O(c) {
          return String(c.type) + c.id;
        }
        function U(c, I) {
          return (
            c.jsondata.item_source_type != null &&
            c.jsondata.item_source_type !== t.w.k_ETaggedItems
          );
        }
        function s(c) {
          for (const I of c.facetValues)
            if (I.filter != null) {
              for (const Y of I.filter.clauses)
                for (const y of Y.or_tags) if (y.startsWith("[Opt]")) return !0;
            }
          return !1;
        }
      },
      97442: (ee, X, e) => {
        "use strict";
        e.d(X, { r: () => I });
        var t = e(7850),
          j = e(24660),
          g = e(19298),
          O = e(17083),
          U = e(36707),
          s = e(2108),
          c = e.n(s);
        function I(Y) {
          const { crumbs: y, className: K, bHideLastArrow: N } = Y;
          return !y || y.length == 0
            ? null
            : (0, t.jsxs)("div", {
                className: (0, U.A)(s.BreadContainer, K),
                children: [
                  (0, t.jsx)(g.Z, {
                    className: "blockbg",
                    "flow-children": "row",
                    children: y.map((E, M) => {
                      const B = new Array();
                      return (
                        E.url.startsWith("http")
                          ? B.push(
                              (0, t.jsx)(
                                j.Ii,
                                { href: E.url, children: E.name },
                                "anchor_" + E.name,
                              ),
                            )
                          : B.push(
                              (0, t.jsx)(
                                O.N_,
                                { to: E.url, children: E.name },
                                "link_" + E.name,
                              ),
                            ),
                        (!N || M < y.length - 1) &&
                          B.push(
                            (0, t.jsx)(
                              "span",
                              { children: "\xA0> " },
                              E.name + "span",
                            ),
                          ),
                        B
                      );
                    }),
                  }),
                  (0, t.jsx)("div", { style: { clear: "left" } }),
                ],
              });
        }
      },
      24805: (ee, X, e) => {
        "use strict";
        e.d(X, { Xh: () => I, cU: () => Y, tf: () => K, wl: () => y });
        var t = e(99412),
          j = e(18735),
          g = e(48156),
          O = e(6469),
          U = e(10142),
          s = e(10349),
          c = e(3166);
        const I = {
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
          BHasAppID(f) {
            return this.m_setAlreadyAdded.has("a" + f);
          }
          BHasPackageID(f) {
            return this.m_setAlreadyAdded.has("s" + f);
          }
          BHasBundleID(f) {
            return this.m_setAlreadyAdded.has("b" + f);
          }
          BHasStoreItemKey(f) {
            return this.m_setAlreadyAdded.has(
              this.ConvertStoreItemKeyToUniqueKey(f),
            );
          }
          AddStoreItemKey(f) {
            this.m_setAlreadyAdded.add(this.ConvertStoreItemKeyToUniqueKey(f));
          }
          ConvertStoreItemKeyToUniqueKey(f) {
            switch (f.item_type) {
              default:
              case "app":
                return "a" + f.id;
              case "sub":
                return "s" + f.id;
              case "bundle":
                return "b" + f.id;
            }
          }
        }
        const y = 4;
        function K(S, f, H, _, m, o) {
          const u = new Array(),
            A = new Array(),
            a = new Array(),
            n = new Array();
          if (!S || S.length == 0) return u;
          const i = [
            s.by.k_RejectSupportedLanguage,
            s.by.k_RejectAlreadyDisplayed,
            s.by.k_RejectNoTrailer,
          ];
          for (let d of S) {
            let P = d.id,
              L = s.by.k_NotRejected;
            switch (d.item_type) {
              case "sub":
                const v = U.A.Get().GetPackage(P);
                if (v?.GetIncludedAppIDs()?.length !== 1) {
                  L = J(P, f, _, !0);
                  break;
                }
                P = v.GetIncludedAppIDs()[0];
              case "app":
                L = B(P, f, H, _, !0);
                break;
              case "bundle":
                L = w(P, f, _, !0);
                break;
            }
            if (
              (L == s.by.k_NotRejected
                ? ((d.rejected = s.by.k_NotRejected),
                  u.push({ ...d, priority: 1 }))
                : i.includes(L)
                  ? ((d.rejected = s.by.k_NotRejected), A.push(d))
                  : ((d.rejected = L),
                    L == s.by.k_RejectIgnoredGame ? a.push(d) : n.push(d)),
              u.length > m)
            )
              break;
          }
          return (
            u.length < m &&
              (N(u, A, o, 2),
              u.length < o &&
                f.enforce_minimum &&
                (N(u, a, o, 3), N(u, n, o, y))),
            u
          );
        }
        function N(S, f, H, _) {
          for (let m = 0; S.length < H && m < f.length; ++m)
            S.push({ ...f[m], priority: _ });
        }
        function E(S, f) {
          const H = O.Fm.Get();
          if (
            f.only_current_platform &&
            H.BHasPlatformPreferenceSet() &&
            !(
              (S.GetPlatforms()?.windows && H.BIsPreferredPlatform("win")) ||
              (S.GetPlatforms()?.mac && H.BIsPreferredPlatform("mac")) ||
              (S.GetPlatforms()?.steamos_linux &&
                H.BIsPreferredPlatform("linux"))
            )
          )
            return s.by.k_RejectWrongPlatform;
          if (!f.prepurchase && S.BIsComingSoon())
            return s.by.k_RejectNoComingSoon;
          const _ = S.GetPlatforms();
          return !f.virtual_reality &&
            _ &&
            _.vr_support &&
            _.vr_support.vrhmd_only
            ? s.by.k_RejectNoVR
            : S.GetAllCreatorClanIDs()?.some((m) => H.BIsIgnoringCurator(m))
              ? s.by.k_RejectCreatorClan
              : s.by.k_NotRejected;
        }
        function M(S, f) {
          if (f.localized) {
            const H = (0, t.sfN)(c.TS.LANGUAGE);
            if (!S.GetAllLanguagesWithSomeSupport()?.includes(H))
              return s.by.k_RejectSupportedLanguage;
          }
          return s.by.k_NotRejected;
        }
        function B(S, f, H, _, m) {
          const o = U.A.Get().GetApp(S);
          if (!o) return s.by.k_RejectNotLoaded;
          const u = E(o, f);
          if (u != s.by.k_NotRejected) return u;
          const A = O.Fm.Get();
          if (A.BIsGameIgnored(S)) return s.by.k_RejectIgnoredGame;
          if (A.BExcludeTagIDs(o.GetTagIDs()))
            return s.by.k_RejectIgnoreGameTags;
          if (A.BExcludesContentDescriptor(o.GetContentDescriptorIDs()))
            return s.by.k_RejectIgnoreContentDescriptors;
          if (!f.early_access && o.BIsEarlyAccess())
            return s.by.k_RejectEarlyAccess;
          const a = o.GetAppType();
          if (!f.software && a == g.uE.Sv) return s.by.k_RejectSoftware;
          if (f.games_already_in_library && A.BIsGameOwned(S))
            return s.by.k_RejectInLibrary;
          if (f.games_not_in_library && !A.BIsGameOwned(S))
            return s.by.k_RejectNotInLibrary;
          if (!f.video && [g.uE.Wz, g.uE.gQ, g.uE.ID].includes(a))
            return s.by.k_RejectVideo;
          if (f.has_discount) {
            const n = o.GetBestPurchaseOption();
            if (!n || !n.discount_pct) return s.by.k_RejectNoDiscount;
          }
          return H != "adultonly" &&
            f.no_ao_content &&
            (o.HasContentDescriptorID(j.u7) || o.HasContentDescriptorID(j.T4))
            ? s.by.k_RejectAO
            : a == g.uE.ue &&
                f.games_already_in_library &&
                A.BIsGameOwned(o.GetParentAppID() || 0)
              ? s.by.k_RejectInLibrary
              : m
                ? (a == g.uE.ue && _.BHasAppID(o.GetParentAppID() || 0)) ||
                  _.BHasAppID(S)
                  ? s.by.k_RejectAlreadyDisplayed
                  : f.has_trailer && !o.BHasTrailers(!1)
                    ? s.by.k_RejectNoTrailer
                    : M(o, f)
                : s.by.k_NotRejected;
        }
        function x(S, f) {
          const H = O.Fm.Get();
          let _ = !1;
          for (let m of S) {
            if (H.BIsGameIgnored(m)) return s.by.k_RejectIgnoredGame;
            H.BIsGameOwned(m) && (_ = !0);
          }
          return f.games_not_in_library && _
            ? s.by.k_RejectInLibrary
            : f.games_not_in_library && !_
              ? s.by.k_RejectNotInLibrary
              : s.by.k_NotRejected;
        }
        function J(S, f, H, _) {
          const m = U.A.Get().GetPackage(S);
          if (!m) return s.by.k_RejectNotLoaded;
          const o = E(m, f);
          if (o != s.by.k_NotRejected) return o;
          const u = x(m.GetIncludedAppIDs(), f);
          if (u != s.by.k_NotRejected) return u;
          const A = O.Fm.Get();
          return f.games_already_in_library && A.BOwnsPackage(S)
            ? s.by.k_RejectInLibrary
            : A.BIsPackageIgnored(S)
              ? s.by.k_RejectIgnoredGame
              : _
                ? H.BHasPackageID(S)
                  ? s.by.k_RejectAlreadyDisplayed
                  : M(m, f)
                : s.by.k_NotRejected;
        }
        function w(S, f, H, _) {
          const m = U.A.Get().GetBundle(S);
          if (!m) return s.by.k_RejectNotLoaded;
          const o = E(m, f);
          if (o != s.by.k_NotRejected) return o;
          const u = x(m.GetIncludedAppIDs(), f);
          return u != s.by.k_NotRejected
            ? u
            : _
              ? H.BHasBundleID(S)
                ? s.by.k_RejectAlreadyDisplayed
                : M(m, f)
              : s.by.k_NotRejected;
        }
      },
      813: (ee, X, e) => {
        "use strict";
        e.d(X, { $5: () => H, TB: () => f, ac: () => w });
        var t = e(40497),
          j = e(75233),
          g = e(14947),
          O = e(90626),
          U = e(76559),
          s = e(71742),
          c = e(3166),
          I = e(60480),
          Y = e(33512),
          y = e(55483),
          K = e(77291);
        const N = new WeakSet();
        function E(a = t.L) {
          if (typeof window > "u" || typeof document > "u" || N.has(a)) return;
          const n = (0, c.Fd)("groupvanityinfo", "application_config");
          (n === void 0 && document.readyState != "complete") ||
            (N.add(a), M(n) && (0, y.aA)(a, n));
        }
        function M(a) {
          const n = a;
          return n &&
            Array.isArray(n) &&
            n.length > 0 &&
            typeof n[0] == "object"
            ? typeof n[0].clanAccountID == "number" &&
                (typeof n[0].appid == "number" ||
                  typeof n[0].vanity_url == "string")
            : !1;
        }
        function B(a) {
          return typeof a == "string" ? parseInt(a) : a;
        }
        function x(a) {
          return typeof a == "string" ? Number.parseInt(a) : a;
        }
        class J {
          m_queryClient = t.L;
          m_boxCacheVersion = g.sH.box(0);
          m_bWatchingCache = !1;
          m_bBumpScheduled = !1;
          Init() {
            this.LazyInit();
          }
          LazyInit() {
            E(this.m_queryClient),
              this.m_bWatchingCache ||
                ((this.m_bWatchingCache = !0),
                this.m_queryClient.getQueryCache().subscribe((n) => {
                  (n?.type != "added" &&
                    n?.type != "updated" &&
                    n?.type != "removed") ||
                    ((0, y.yT)(n.query?.queryKey) &&
                      this.ScheduleCacheVersionBump());
                }));
          }
          ScheduleCacheVersionBump() {
            this.m_bBumpScheduled ||
              ((this.m_bBumpScheduled = !0),
              queueMicrotask(() => {
                (this.m_bBumpScheduled = !1),
                  (0, g.h5)(() =>
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
          AddGroupVanities(n) {
            this.LazyInit(), M(n) && (0, y.aA)(this.m_queryClient, n);
          }
          BHasClanInfoLoaded(n) {
            return (
              (0, s.wT)(
                n.BIsValid(),
                "Clan SteamID is not valid when ClanInfo",
              ),
              (0, s.wT)(
                n.BIsClanAccount(),
                "Clan SteamID is not a clan account id when requesting clan info ",
              ),
              this.BHasClanInfoLoadedByAccountID(n.GetAccountID())
            );
          }
          BHasClanInfoLoadedByAccountID(n) {
            return !!(0, y.Gt)(x(n), this.ReadCache());
          }
          RegisterClanData(n) {
            this.LazyInit(), (0, y.aA)(this.m_queryClient, n);
          }
          async LoadOGGClanInfoForAppID(n) {
            return (
              this.LazyInit(),
              (n = B(n)),
              (0, s.wT)(
                n != 0,
                "LoadOGGClanInfoForAppID called with appid of zero",
              ),
              n == 0 ? null : (0, y.AB)(n, this.m_queryClient).catch(() => null)
            );
          }
          async LoadOGGClanInfoForIdentifier(n) {
            return this.LazyInit(), (0, y.Rc)(n, this.m_queryClient, "store");
          }
          async LoadOGGClanInfoForGroupVanity(n) {
            return this.LazyInit(), (0, y.Rc)(n, this.m_queryClient, "group");
          }
          async LoadClanInfoForClanSteamID(n) {
            return this.LoadClanInfoForClanAccountID(n.GetAccountID());
          }
          async LoadClanInfoForClanAccountID(n) {
            return this.LazyInit(), (0, y.MR)(x(n), this.m_queryClient);
          }
          GetOGGClanInfo(n) {
            const i = this.ReadCache();
            return typeof n == "string" ? (0, y.fy)(n, i) : (0, y.ko)(n, i);
          }
          GetClanSteamIDForAppID(n) {
            const i = (0, y.ko)(B(n), this.ReadCache());
            return i ? U.b.InitFromClanID(i.clanAccountID) : void 0;
          }
          GetClanVanityForAppID(n) {
            return (0, y.ko)(B(n), this.ReadCache())?.vanity_url;
          }
          GetClanVanityForClanSteamID(n) {
            return (0, y.Gt)(n.GetAccountID(), this.ReadCache())?.vanity_url;
          }
          HasLoadedClanAccountID(n) {
            return this.BHasClanInfoLoadedByAccountID(n);
          }
          GetClanMemberCount(n) {
            return (0, y.ko)(B(n), this.ReadCache())?.member_count ?? 0;
          }
          GetClanInfoByClanAccountID(n) {
            return (
              (0, s.wT)(
                !!n,
                "Unepxected clanid when requesting information. GetClanInfoByClanAccountID ",
              ),
              (0, y.Gt)(x(n), this.ReadCache())
            );
          }
          GetCreatorStoreURL(n) {
            let i = I.pF.GetCreatorHome(n);
            if (i) return i.GetCreatorHomeURL("developer");
            let d = this.GetClanInfoByClanAccountID(n.GetAccountID());
            return (
              c.TS.COMMUNITY_BASE_URL +
              (d.vanity_url
                ? "groups/" + d.vanity_url
                : "gid/" + n.ConvertTo64BitString())
            );
          }
        }
        const w = new J();
        (0, K.V)("g_ClanStore", w);
        function S() {
          const a = (0, j.jE)();
          return E(a), a;
        }
        function f(a) {
          S();
          const { data: n, isPending: i } = (0, y.TB)(a ? x(a) : void 0);
          return [!!a && i, n ?? void 0];
        }
        function H(a) {
          const n = S();
          (0, O.useEffect)(() => {
            a &&
              (0, y.MR)(x(a), n).catch((i) =>
                console.error(`Failed to hint load clan info ${a}`, i),
              );
          }, [a, n]);
        }
        function _(a) {
          return S(), useClanInfoByVanityQuery(a).data ?? null;
        }
        function m(a) {
          S();
          const n = a ? B(a) : void 0,
            { data: i, isPending: d } = useClanInfoByAppIDQuery(n);
          return { bLoadingClanInfo: !!n && d, clanInfo: i ?? null };
        }
        function o(a, n) {
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
          const d = g_CreatorHomeStore.GetCreatorHome(a.clanSteamID);
          return d &&
            d.BHasClanAccountFlagSet(
              EClanAccountFlags.k_EClanAccountFlag_AllowSalePageEditing,
            )
            ? { bVisible: !0 }
            : n
              ? { bVisible: !0, bValveOnly: !0 }
              : { bVisible: !1 };
        }
        function u(a, n) {
          return a.BIsOGGEvent()
            ? a.BHasSaleEnabled()
              ? { bVisible: !0 }
              : Config.EUNIVERSE == k_EUniversePublic
                ? { bVisible: !1 }
                : n
                  ? a.GetEventType() == k_EClanEventType_MajorUpdateEvent
                    ? { bVisible: !0, bValveOnly: !0 }
                    : { bVisible: !1 }
                  : { bVisible: !1 }
            : { bVisible: !1 };
        }
        function A(a) {
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
      24110: (ee, X, e) => {
        "use strict";
        e.d(X, { f: () => O });
        var t = e(71742);
        function j(U) {
          (0, t.wT)(!0, "Unexpected code running in SSR Server: " + U);
        }
        var g = e(3166);
        class O {
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
              O.s_globalSingletonStore ||
                (j("CHomeViewStore.s_globalSingletonStore"),
                (O.s_globalSingletonStore = new O())),
              O.s_globalSingletonStore
            );
          }
          constructor() {
            const s = (0, g.Tc)("home_view_setting", "application_config");
            this.ValidateHomeViewData(s) && this.SetHomeViewSetting(s);
            const c = (0, g.Tc)(
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
      8303: (ee, X, e) => {
        "use strict";
        e.d(X, {
          F6: () => A,
          ME: () => d,
          QV: () => H,
          RA: () => i,
          cc: () => L,
          fq: () => v,
          m1: () => P,
        });
        var t = e(41735),
          j = e.n(t),
          g = e(14947),
          O = e(90626),
          U = e(99412),
          s = e(72604),
          c = e(76559),
          I = e(813),
          Y = e(6469),
          y = e(77495),
          K = e(15901),
          N = e(41635),
          E = e(71742),
          M = e(34592),
          B = e(30096),
          x = e(3166),
          J = Object.defineProperty,
          w = Object.getOwnPropertyDescriptor,
          S = (h, l, r, p) => {
            for (
              var C = p > 1 ? void 0 : p ? w(l, r) : l, G = h.length - 1, W;
              G >= 0;
              G--
            )
              (W = h[G]) && (C = (p ? W(l, r, C) : W(C)) || C);
            return p && C && J(l, r, C), C;
          };
        const f = 0,
          H = 1,
          _ = 2,
          m = 3,
          o = 4;
        function u(h) {
          h.list_jsondata && typeof h.list_jsondata == "string"
            ? (h.list_jsondata = JSON.parse(h.list_jsondata))
            : ((0, E.wT)(
                !h.list_jsondata,
                "Found unexpected ListDetails_t.list_jsondata type: " +
                  typeof h.list_jsondata,
              ),
              (h.list_jsondata = {}));
        }
        const A = "0";
        function a(h, l) {
          (l.localized_flat_title = (0, N.$Y)([], U.bP9, null)),
            (l.localized_flat_blurb = (0, N.$Y)([], U.bP9, null)),
            (l.localized_flat_link = (0, N.$Y)([], U.bP9, null)),
            l.title !== A && (l.localized_flat_title[h] = l.title),
            l.blurb !== A && (l.localized_flat_blurb[h] = l.blurb),
            l.link !== A && (l.localized_flat_link[h] = l.link),
            l.title_localization.forEach((r) => {
              r.localized_string?.length > 0 &&
                (l.localized_flat_title[r.language] = r.localized_string);
            }),
            l.blurb_localization.forEach((r) => {
              r.localized_string?.length > 0 &&
                (l.localized_flat_blurb[r.language] = r.localized_string);
            }),
            l.link_localization.forEach((r) => {
              r.localized_string?.length > 0 &&
                (l.localized_flat_link[r.language] = r.localized_string);
            });
        }
        const n = class _e {
          m_mapList = new Map();
          m_mapEventGIDToLists = new Map();
          m_mapListIDToClanAccount = new Map();
          GetListDetails(l) {
            return this.m_mapList.get(l);
          }
          GetAllSaleCurationLists(l) {
            return this.m_mapEventGIDToLists.get(l) || [];
          }
          GetClanAccountFromListID(l) {
            return this.m_mapListIDToClanAccount.get(l);
          }
          async LoadListDetails(l, r, p) {
            if (this.m_mapList.has(r)) return this.m_mapList.get(r);
            const C =
                x.TS.STORE_BASE_URL +
                "curator/" +
                l.GetAccountID() +
                "/admin/ajaxgetlistdetails",
              G = { listid: r };
            try {
              const W = await j().get(C, { params: G, cancelToken: p?.token });
              if (W?.data?.success == s.R) {
                const F = { ...W.data.list_details };
                return (
                  (0, E.wT)(
                    r == F?.listid,
                    "Wanted" + r + "but got" + F?.listid,
                  ),
                  u(F),
                  a(W.data.curation_language, F),
                  this.m_mapList.set(r, F),
                  this.m_mapListIDToClanAccount.set(r, l.GetAccountID()),
                  F
                );
              }
            } catch (W) {
              const F = (0, M.H)(W);
              console.error(
                "CCuratorListStore.LoadListDetails: error on load: " +
                  F.strErrorMsg,
                F,
              );
            }
            return null;
          }
          async LoadMyFollowedSaleCurationLists(l, r, p) {
            if (
              !x.iA.logged_in ||
              (Y.Fm.Get().BIsLoaded() &&
                Y.Fm.Get().GetFollowedCuratorCount() == 0)
            )
              return [];
            const C =
                x.TS.STORE_BASE_URL + "curators/ajaxgetmycuratorsalelists",
              G = {
                clan_account_id: l.GetAccountID(),
                clan_event_gid: r,
                origin: self.origin,
                curator_clan_account_followed: Y.Fm.Get().BIsLoaded()
                  ? Y.Fm.Get().GetFollowedCuratorsAccountID().join(",")
                  : void 0,
              };
            return this.InternalLoadSaleCuratorLists(
              C,
              G,
              "CCuratorListStore.LoadMyFollowedSaleCurationLists",
              l,
              r,
              p,
            );
          }
          async LoadAllSaleCurationLists(l, r, p) {
            if (this.m_mapEventGIDToLists.has(r))
              return this.m_mapEventGIDToLists.get(r);
            const C = x.TS.STORE_BASE_URL + "curators/ajaxfindcuratorlists",
              G = {
                clan_account_id: l.GetAccountID(),
                clan_event_gid: r,
                origin: self.origin,
              };
            return this.InternalLoadSaleCuratorLists(
              C,
              G,
              "CCuratorListStore.LoadAllSaleCurationLists",
              l,
              r,
              p,
            );
          }
          async InternalLoadSaleCuratorLists(l, r, p, C, G, W) {
            try {
              const F = await j().get(l, { params: r, cancelToken: W?.token });
              if (F?.data?.success == s.R) {
                const $ = new Array();
                return (
                  (0, g.h5)(() => {
                    F.data.matches &&
                      F.data.matches.forEach((ae) => {
                        ae.multi_detail_lists.forEach((z) => {
                          this.m_mapListIDToClanAccount.set(
                            z.listid,
                            ae.clan_account_id,
                          ),
                            u(z),
                            a(ae.curation_language, z),
                            this.m_mapList.set(z.listid, z),
                            $.push(z);
                        });
                      }),
                      this.m_mapEventGIDToLists.set(G, $);
                  }),
                  $
                );
              }
            } catch (F) {
              const $ = (0, M.H)(F);
              console.error(p + ": error on load: " + $.strErrorMsg, $);
            }
            return [];
          }
          static s_Singleton;
          static Get() {
            return (
              _e.s_Singleton || (_e.s_Singleton = new _e()), _e.s_Singleton
            );
          }
          constructor() {
            (0, g.Gn)(this);
            let l = (0, x.Tc)("curatorlistdata", "application_config");
            this.ValidateStoreDefault(l) &&
              (0, g.h5)(() => {
                l.forEach((r) => {
                  r.multi_detail_lists.forEach((p) => {
                    u(p),
                      a(r.curation_language, p),
                      this.m_mapList.set(p.listid, p);
                  });
                });
              });
          }
          ValidateStoreDefault(l) {
            const r = l;
            return r &&
              Array.isArray(r) &&
              r.length > 0 &&
              typeof r[0] == "object"
              ? typeof r[0].curation_language == "number" &&
                  r[0].multi_detail_lists &&
                  Array.isArray(r[0].multi_detail_lists) &&
                  typeof r[0].multi_detail_lists[0].listid == "string" &&
                  typeof r[0].multi_detail_lists[0].list_type == "number" &&
                  typeof r[0].multi_detail_lists[0].list_state == "number"
              : r && Array.isArray(r) && r.length == 0;
          }
        };
        S([g.sH], n.prototype, "m_mapList", 2);
        let i = n;
        function d(h, l) {
          const r = (0, B.CH)();
          return (
            (0, O.useEffect)(() => {
              if (i.Get().GetListDetails(l) || !h) return;
              const p = j().CancelToken.source();
              return (
                (async () => {
                  const G = await i.Get().LoadListDetails(h, l);
                  if (!p.token.reason)
                    if (G?.apps?.length) {
                      const W = [];
                      for (const F of G.apps) {
                        const $ = F?.recommended_app?.appid;
                        $ && W.push({ id: $, type: "game" });
                      }
                      (0, K.H2)(W, {
                        ...K.jy,
                        include_assets: !0,
                        include_release: !0,
                      }),
                        r();
                    } else console.error("Found no list data");
                })(),
                () => p.cancel("unmounting CuratorList")
              );
            }, [h, l, r]),
            i.Get().GetListDetails(l)
          );
        }
        function P(h) {
          const l = h && I.ac.GetClanInfoByClanAccountID(h),
            [r, p] = (0, O.useState)(!!l);
          return (
            (0, O.useEffect)(() => {
              if (r && h) {
                const C = c.b.InitFromClanID(h);
                I.ac.LoadClanInfoForClanSteamID(C).finally(() => {
                  p(!0);
                });
              }
            }, [r, h]),
            l
          );
        }
        function L(h) {
          return !!h?.sale_clan_event_gid && !!h?.sale_clan_steamid;
        }
        function v(h) {
          const l = (0, B.CH)(),
            r = L(h) ? h.sale_clan_event_gid : null,
            p = r && y.O3.GetClanEventModel(r);
          return (
            (0, O.useEffect)(() => {
              if (p || !L(h)) return;
              const C = j().CancelToken.source();
              return (
                (async () => (
                  y.O3.Init(),
                  await y.O3.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                    new c.b(h.sale_clan_steamid),
                    r,
                    0,
                  ),
                  !C.token.reason && l()
                ))(),
                () => C.cancel("unmounting CuratorList")
              );
            }, [h, r, p, l]),
            p
          );
        }
        function Z(h) {
          const [l, r] = useState(null),
            p = v(h);
          return useEffect(() => r(p?.GetSaleFeaturedApps()), [p]), l;
        }
      },
      84676: (ee, X, e) => {
        "use strict";
        e.d(X, {
          G6: () => N,
          Gg: () => B,
          Ow: () => M,
          Sq: () => Y,
          YM: () => H,
          eR: () => y,
          ik: () => K,
          mZ: () => x,
          t7: () => E,
          zX: () => w,
        });
        var t = e(41735),
          j = e.n(t),
          g = e(90626),
          O = e(72604),
          U = e(48156),
          s = e(30096),
          c = e(10142);
        function I(_, m, o = !0) {
          const u = o
              ? CStoreItemCache.k_DataRequest_BasicInfo
              : CStoreItemCache.k_DataRequest_CommonOnly,
            A = o || CStoreItemCache.Get().BHasStoreItem(_, m, u) ? _ : null,
            [a, n] = N(A, m, u),
            [i, d] = useState(null),
            [P, L] = N(i, m, u);
          useEffect(() => {
            a?.GetAppType() === EStoreAppType.k_EStoreAppType_Demo &&
              d(a.GetParentAppID());
          }, [a]);
          let v = a?.GetShortDescription()
            ? StripBBCodeTags(a.GetShortDescription())
            : "";
          (!v || v.length === 0) &&
            P &&
            (v = P?.GetShortDescription()
              ? StripBBCodeTags(P.GetShortDescription())
              : "");
          const Z = n == K && (!i || L == K);
          return [v, Z];
        }
        const Y = 1,
          y = 2,
          K = 3;
        function N(_, m, o, u) {
          const A = (0, g.useRef)(void 0),
            a = (0, g.useRef)(void 0),
            n = (0, s.CH)();
          A.current = _;
          const [i, d] = (0, g.useState)(void 0),
            {
              include_assets: P,
              include_release: L,
              include_platforms: v,
              include_all_purchase_options: Z,
              include_screenshots: h,
              include_trailers: l,
              include_ratings: r,
              include_tag_count: p,
              include_reviews: C,
              include_basic_info: G,
              include_supported_languages: W,
              include_full_description: F,
              include_included_items: $,
              include_assets_without_overrides: ae,
              apply_user_filters: z,
              include_links: oe,
              include_extra_details: le,
              include_optin_registration_tags: R,
            } = o;
          if (
            ((0, g.useEffect)(() => {
              const ie = {
                include_assets: P,
                include_release: L,
                include_platforms: v,
                include_all_purchase_options: Z,
                include_screenshots: h,
                include_trailers: l,
                include_ratings: r,
                include_tag_count: p,
                include_reviews: C,
                include_basic_info: G,
                include_supported_languages: W,
                include_full_description: F,
                include_included_items: $,
                include_assets_without_overrides: ae,
                apply_user_filters: z,
                include_links: oe,
                include_extra_details: le,
                include_optin_registration_tags: R,
              };
              let me = null;
              return (
                !_ ||
                  _ < 0 ||
                  c.A.Get().BHasStoreItem(_, m, ie) ||
                  (i !== void 0 && u && u == a.current) ||
                  (u !== a.current && (d(void 0), (a.current = u)),
                  (me = j().CancelToken.source()),
                  c.A.Get()
                    .QueueStoreItemRequest(_, m, ie)
                    .then((he) => {
                      !me?.token.reason && A.current === _ && d(he == O.R), n();
                    })),
                () => me?.cancel("useStoreItemCache: unmounting")
              );
            }, [
              _,
              m,
              u,
              i,
              P,
              L,
              v,
              Z,
              h,
              l,
              r,
              p,
              C,
              G,
              W,
              F,
              $,
              ae,
              z,
              oe,
              le,
              R,
              n,
            ]),
            !_)
          )
            return [null, y];
          if (i === !1) return [void 0, y];
          if (c.A.Get().BIsStoreItemMissing(_, m)) return [void 0, y];
          if (!c.A.Get().BHasStoreItem(_, m, o)) return [void 0, Y];
          const ce = c.A.Get().GetStoreItemWithLegacyVisibilityCheck(_, m);
          return ce ? [ce, K] : [null, y];
        }
        function E(_, m, o) {
          return N(_, U.c6.qI, m, o);
        }
        function M(_, m, o) {
          return N(_, U.c6.xO, m, o);
        }
        function B(_, m, o) {
          return N(_, U.c6.RD, m, o);
        }
        function x(_, m, o) {
          const [u, A] = N(_, m, o);
          let a;
          u?.GetStoreItemType() == U.c6.RD &&
            !u.GetAssets()?.GetHeaderURL() &&
            u?.GetIncludedAppIDs().length == 1 &&
            (a = u.GetIncludedAppIDs()[0]);
          const [n, i] = E(a, o);
          return a && n?.BIsVisible() ? [n, i] : [u, A];
        }
        function J(_, m, o, u) {
          const A = (0, s.CH)(),
            {
              include_assets: a,
              include_release: n,
              include_platforms: i,
              include_all_purchase_options: d,
              include_screenshots: P,
              include_trailers: L,
              include_ratings: v,
              include_tag_count: Z,
              include_reviews: h,
              include_basic_info: l,
              include_supported_languages: r,
              include_full_description: p,
              include_included_items: C,
              include_assets_without_overrides: G,
              apply_user_filters: W,
              include_links: F,
              include_extra_details: $,
              include_optin_registration_tags: ae,
            } = o;
          return (
            (0, g.useEffect)(() => {
              if (!_ || _.length == 0) return;
              const oe = {
                  include_assets: a,
                  include_release: n,
                  include_platforms: i,
                  include_all_purchase_options: d,
                  include_screenshots: P,
                  include_trailers: L,
                  include_ratings: v,
                  include_tag_count: Z,
                  include_reviews: h,
                  include_basic_info: l,
                  include_supported_languages: r,
                  include_full_description: p,
                  include_included_items: C,
                  include_assets_without_overrides: G,
                  apply_user_filters: W,
                  include_links: F,
                  include_extra_details: $,
                  include_optin_registration_tags: ae,
                },
                le = _.filter(
                  (ie) =>
                    !(
                      c.A.Get().BHasStoreItem(ie, m, oe) ||
                      c.A.Get().BIsStoreItemMissing(ie, m)
                    ),
                );
              if (le.length == 0) return;
              const R = j().CancelToken.source(),
                ce = le.map((ie) => c.A.Get().QueueStoreItemRequest(ie, m, oe));
              return (
                Promise.all(ce).then(() => {
                  R.token.reason || A();
                }),
                () => R.cancel("useStoreItemCacheMultiplePackages: unmounting")
              );
            }, [
              _,
              m,
              u,
              A,
              a,
              n,
              i,
              d,
              P,
              L,
              v,
              Z,
              h,
              l,
              r,
              p,
              C,
              G,
              W,
              F,
              $,
              ae,
            ]),
            _
              ? _.every(
                  (oe) =>
                    c.A.Get().BHasStoreItem(oe, m, o) ||
                    c.A.Get().BIsStoreItemMissing(oe, m),
                )
                ? _.every((oe) =>
                    c.A.Get().GetStoreItemWithLegacyVisibilityCheck(oe, m),
                  )
                  ? K
                  : y
                : Y
              : y
          );
        }
        function w(_, m, o) {
          return J(_, U.c6.qI, m, o);
        }
        function S(_, m, o) {
          return J(_, EStoreItemType.k_EStoreItemType_Bundle, m, o);
        }
        function f(_, m, o) {
          return J(_, EStoreItemType.k_EStoreItemType_Package, m, o);
        }
        function H() {
          g.useEffect(
            () => (
              c.A.Get().SetReturnUnavailableItems(!0),
              () => c.A.Get().SetReturnUnavailableItems(!1)
            ),
            [],
          );
        }
      },
      15901: (ee, X, e) => {
        "use strict";
        e.d(X, {
          AX: () => m,
          H2: () => f,
          Li: () => _,
          QU: () => a,
          S7: () => J,
          WD: () => A,
          f4: () => n,
          gL: () => u,
          jy: () => H,
          nt: () => S,
          sd: () => x,
          tJ: () => w,
        });
        var t = e(24805),
          j = e(10349),
          g = e(92025),
          O = e(99412),
          U = e(48156),
          s = e(6469),
          c = e(10142),
          I = e(3166),
          Y = e(24110),
          y = e(71742),
          K = e(14947),
          N = e(20615),
          E = e(3852),
          M = e(40497),
          B = e(73259);
        function x(i) {
          return c.A.Get().BIsStoreItemMissing(i.id, (0, j.SW)(i.type));
        }
        function J(i, d, P) {
          const L = new Array();
          return (
            i?.forEach((v) => L.push({ id: v, type: "game" })),
            d?.forEach((v) => L.push({ id: v, type: "sub" })),
            P?.forEach((v) => L.push({ id: v, type: "bundle" })),
            L
          );
        }
        function w(i) {
          return (
            (c.A.Get()
              .GetStoreItem(i.id, (0, j.SW)(i.type))
              ?.GetBestPurchaseOption()?.discount_pct ?? 0) > 0
          );
        }
        function S(i) {
          if (!Y.f.Get().GetHomeView()?.localized) return !0;
          const d = c.A.Get().GetStoreItem(i.id, (0, j.SW)(i.type));
          return d
            ? s.Fm.Get().BIsAnyLanguageEnabled(
                d.GetAllLanguagesWithSomeSupport(),
              )
            : !0;
        }
        async function f(i, d, P) {
          if (!i || i.length == 0) return [];
          const L = i.filter((r) => (0, g.fp)(r.type)).map((r) => r.id),
            v = i.filter((r) => r.type === "sub").map((r) => r.id),
            Z = i.filter((r) => r.type === "bundle").map((r) => r.id);
          {
            const r = L.filter((G) => !c.A.Get().BHasApp(G, d)),
              p = v.filter((G) => !c.A.Get().BHasApp(G, d)),
              C = Z.filter((G) => !c.A.Get().BHasApp(G, d));
            (r.length > 0 || p.length > 0 || C.length > 0) &&
              (await Promise.all([
                c.A.Get().QueueMultipleAppRequests(r, d),
                c.A.Get().QueueMultiplePackageRequests(p, d),
                c.A.Get().QueueMultipleBundleRequests(C, d),
              ]));
          }
          const h = new Set();
          Z?.forEach((r) => {
            c.A.Get()
              .GetBundle(r)
              ?.GetIncludedAppIDs()
              .forEach((C) => h.add(C));
          }),
            v?.forEach((r) => {
              c.A.Get()
                .GetPackage(r)
                ?.GetIncludedAppIDs()
                .forEach((C) => h.add(C));
            });
          const l = Array.from(h).filter((r) => !c.A.Get().BHasApp(r, d));
          if (
            (l.length > 0 && (await c.A.Get().QueueMultipleAppRequests(l, d)),
            L.forEach((r) => h.add(r)),
            P)
          ) {
            const r = Array.from(h)
              .map((p) => {
                const G = c.A.Get().GetApp(p)?.GetParentAppID();
                return G ? (h.add(G), G) : null;
              })
              .filter((p) => p !== null)
              .filter((p) => !c.A.Get().BHasApp(p, d));
            r.length > 0 && (await c.A.Get().QueueMultipleAppRequests(r, d));
          }
          return Array.from(h).filter((r) => {
            const p = c.A.Get().GetApp(r);
            return p && !p.GetParentAppID();
          });
        }
        const H = {
          include_tag_count: 20,
          include_basic_info: !0,
          include_supported_languages: !0,
        };
        function _(i, d = !1) {
          if (!i) return !0;
          const P = s.Fm.Get();
          if (
            ((0, y.wT)(P.BIsLoaded(), "Dynamic Store not loaded"),
            !d && i.GetStoreItemType() == U.c6.qI)
          ) {
            const v = i.GetParentAppID();
            if (
              P.BIsGameIgnored(i.GetAppID()) ||
              (v !== void 0 && P.BIsGameIgnored(v))
            )
              return !0;
          }
          if (
            P.BExcludesContentDescriptor(i.GetContentDescriptorIDs()) ||
            P.BExcludeTagIDs(i.GetTagIDs()) ||
            i.GetAllCreatorClanIDs().some((v) => P.BIsIgnoringCurator(v))
          )
            return !0;
          if (Y.f.Get().GetHomeView()?.localized) {
            const v = i.GetAllLanguagesWithSomeSupport();
            if (
              v.length > 0 &&
              !i.BHasSomeLanguageSupport(O.Bhc) &&
              !P.BIsAnyLanguageEnabled(v)
            )
              return !0;
          }
          return !1;
        }
        async function m(i, d, P, L) {
          let v = 0,
            Z = 0;
          const h = [];
          await f(i, t.Xh, d);
          for (const l of i) {
            const r = c.A.Get().GetStoreItem(l.id, (0, j.SW)(l.type));
            if (!r) {
              v++;
              continue;
            }
            const p = r
              .GetIncludedAppIDs()
              .map((C) => c.A.Get().GetApp(C))
              .filter((C) => !!C);
            if ((p.push(r), d)) {
              const C = new Set(
                  p.map((W) => W.GetParentAppID()).filter((W) => !!W),
                ),
                G = Array.from(C)
                  .map((W) => c.A.Get().GetApp(W))
                  .filter((W) => !!W);
              G && p.push(...G);
            }
            p.some((C) => (L || _)(C))
              ? (Z++, P && (s.Fm.Get().BIsStoreItemOwned(r) || P.push(l)))
              : h.push(l);
          }
          return h;
        }
        async function o(i, d, P, L, v, Z, h) {
          let r = await m(
            i,
            d,
            h,
            v
              ? (C) =>
                  !C ||
                  s.Fm.Get().BExcludesContentDescriptor(
                    C.GetContentDescriptorIDs(),
                  ) ||
                  s.Fm.Get().BExcludeTagIDs(C.GetTagIDs())
              : _,
          );
          const p = [];
          for (const C of r) {
            const G = c.A.Get().GetStoreItem(C.id, (0, j.SW)(C.type));
            if (!G) continue;
            const W = G?.GetIncludedAppIDsOrSelf();
            let F = !1;
            P && (F = F || W.every(($) => s.Fm.Get().BIsGameOwned($))),
              L && (F = F || W.every(($) => s.Fm.Get().BIsGameWishlisted($))),
              Z && (F = F || W.every(($) => s.Fm.Get().BIsGameIgnored($))),
              F ? h && h.push(C) : p.push(C);
          }
          return p;
        }
        function u() {
          const i = s.Fm.Get();
          if (i.BIsLoaded())
            return {
              bSignedIn: !!I.iA.logged_in,
              ePrimaryLanguage: i.GetPrimaryLanguage(),
              setSecondaryLanguages: i.GetSecondaryLanguages(),
              setExcludedContentDescriptors: new Set(
                i.ExcludedContentDescriptor,
              ),
            };
        }
        function A() {
          return (0, N._)(M.L, I.TS.COUNTRY);
        }
        function a(i) {
          return !!(
            i?.BHasHideIgnoredItemsFacetValue() &&
            !i.BIsUserPreferenceEnabled(B.yX.k_EHideIgnoredItems)
          );
        }
        async function n(i, d, P, L) {
          const v = i.BHasHideIgnoredItemsFacetValue(),
            Z = i.BIsUserPreferenceEnabled(B.yX.k_EHideOwnedItems),
            h = i.BIsUserPreferenceEnabled(B.yX.k_EHideWishlistedItems),
            l = i.BIsUserPreferenceEnabled(B.yX.k_EHideIgnoredItems),
            r = [],
            p = await o(d, P, Z, h, v, l, r);
          return (
            (0, K.h5)(() => {
              i.SetCapsulesRemovedByUserPreferenceFilters(new Set(r.map(E.pj)));
            }),
            L?.push(...r),
            p
          );
        }
      },
      13532: (ee, X, e) => {
        "use strict";
        e.d(X, { l: () => N, r: () => K });
        var t = e(7850),
          j = e(90626),
          g = e(39239),
          O = e(36118),
          U = e(32608),
          s = e(36707),
          c = e(18210),
          I = e(70758),
          Y = e.n(I),
          y = e(1123);
        const K = (E) => {
            const M = ["maxresdefault", "mqdefault", "default"],
              [B, x] = j.useState(0);
            j.useEffect(() => x(0), [E.video]);
            const J = j.useRef(void 0);
            if (E.altImgWithFallback && E.altImgWithFallback.length > 0)
              return (0, t.jsx)(g.o, {
                className: E.className,
                srcs: E.altImgWithFallback,
              });
            if (E.altImg)
              return (0, t.jsx)("img", {
                src: E.altImg,
                className: E.className,
              });
            {
              const w =
                  "https://img.youtube.com/vi/" + E.video + "/" + M[B] + ".jpg",
                S = () => {
                  B + 1 < M.length && x(B + 1);
                },
                f = () => {
                  J.current && J.current.naturalHeight < 91 && S();
                };
              return (0, t.jsx)("img", {
                ref: J,
                onLoad: f,
                onError: S,
                src: w,
                className: (0, s.A)(Y().YoutubePreviewImage, E.className),
              });
            }
          },
          N = (E) => {
            const [M, B] = j.useState(!1);
            (0, U.VC)(!!E.preloadYoutubeScripts);
            const x = (0, y.Rp)("youtube");
            if (!M || !x) {
              const J = (w) => {
                E.onPlayerActivated && E.onPlayerActivated(),
                  B(!0),
                  w.stopPropagation(),
                  w.preventDefault();
              };
              return (0, t.jsxs)("div", {
                className: (0, s.A)(
                  "YoutubePreviewContainer",
                  Y().YoutubePreviewImage,
                  E.imageClassnames,
                ),
                onClick: x ? J : void 0,
                children: [
                  (0, t.jsx)(K, {
                    className: "YoutubePreviewImage",
                    altImgWithFallback: E.altImgWithFallback,
                    altImg: E.altImg,
                    video: E.video,
                  }),
                  x &&
                    (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsx)("div", {
                          className: "YoutubePreviewPlay",
                          children: (0, t.jsx)(O.IOc, {}),
                        }),
                        (0, t.jsx)("div", {
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
              return (0, t.jsx)(U.N1, {
                ...E,
                classnames: (0, s.A)(Y().YoutubePlayer, E.classnames),
              });
          };
      },
      77243: (ee, X, e) => {
        "use strict";
        e.r(X),
          e.d(X, { CuratorReviewListContainer: () => Ce, default: () => Le });
        var t = e(7850),
          j = e(75844),
          g = e(90626),
          O = e(43434),
          U = e(99412),
          s = e(24660),
          c = e(19298),
          I = e(43458),
          Y = e(88743),
          y = e(80702),
          K = e(63063),
          N = e(48421),
          E = e(76559),
          M = e(83482),
          B = e(47689),
          x = e(41735),
          J = e.n(x),
          w = e(3166),
          S = e(34592),
          f = e(72604);
        async function H(b, D) {
          const T =
              w.TS.STORE_BASE_URL + "contenthub/ajaxfilterappsbycontenthub",
            k = {
              hubtype: b.GetContentHubType(),
              category: b.GetContentHubCategory(),
              tagid: b.GetContentHubTag(),
              prune_list_optin_name: b.jsondata.prune_list_optin_name,
              optin_tagid: b.jsondata.optin_tagid,
              optin_prune_tagid: b.jsondata.optin_prune_tagid,
              optin_only: b.jsondata.optin_only,
              applist: D.sort().join(","),
            };
          let q = null;
          const V = new Set();
          try {
            const Q = await J().get(T, { params: k });
            if (Q?.data?.success == f.R)
              return Q.data.appids.forEach((te) => V.add(te)), V;
            q = (0, S.H)(Q);
          } catch (Q) {
            q = (0, S.H)(Q);
          }
          return (
            console.error(
              "LoadContentHubFilteredApps failed: " + q?.strErrorMsg,
              q,
            ),
            V
          );
        }
        function _(b, D) {
          const [T, k] = (0, g.useState)(
              b?.BUsesContentHubForItemSource() ? new Set() : null,
            ),
            q = (0, B.m)("useFilteredAppViaContentHub");
          return (
            (0, g.useEffect)(() => {
              b?.BUsesContentHubForItemSource() &&
                !T &&
                H(b, D).then((V) => {
                  q.token.reason || k(V);
                });
            }, [T, q.token.reason, b, D]),
            T
          );
        }
        var m = e(8303),
          o = e(6469),
          u = e(10142),
          A = e(10349),
          a = e(84676),
          n = e(39567),
          i = e(40358),
          d = e(10999),
          P = e.n(d),
          L = e(36118),
          v = e(36707),
          Z = e(70758);
        const h = "(?:https?://)?(?:www.)?twitch.tv/videos/([0-9]+)S*",
          l = new RegExp(h);
        function r(b) {
          const D = l.exec(b);
          return D && D.length > 1 ? D[1] : null;
        }
        function p(b) {
          const {
              posterURL: D,
              videoid: T,
              muted: k,
              autoplay: q,
              bIsClipID: V,
              time: Q,
              width: te,
              height: se,
            } = b,
            [re, ne] = g.useState(!!D),
            ue = q == null || q == null ? !1 : q;
          if (re)
            return (0, t.jsxs)("div", {
              className: (0, v.A)(
                "YoutubePreviewContainer",
                Z.YoutubePreviewImage,
                b.imageClassnames,
              ),
              onClick: () => ne(!1),
              children: [
                (0, t.jsx)("img", {
                  className: (0, v.A)(
                    "YoutubePreviewImage",
                    Z.YoutubePreviewImage,
                  ),
                  src:
                    D ||
                    w.TS.COMMUNITY_CDN_URL +
                      "public/shared/images/responsive/youtube_16x9_placeholder.gif",
                }),
                (0, t.jsx)("div", {
                  className: "YoutubePreviewPlay",
                  children: (0, t.jsx)(L.IOc, {}),
                }),
              ],
            });
          let de = (0, w.xv)().replace("https://", "");
          const pe = de.indexOf("/");
          pe >= 0 && (de = de.substring(0, pe));
          let fe = V
            ? `https://clips.twitch.tv/embed?clip=${T}`
            : `https://player.twitch.tv/?video=${T}`;
          return (
            (fe += `&parent=${de}&autoplay=${ue}&muted=${!!k}`),
            Q && (fe += `&time=${C(Q)}`),
            (0, t.jsxs)("div", {
              className: (0, v.A)("YoutubePlayer", P().TwitchPlayer),
              children: [
                (0, t.jsx)("img", {
                  className: (0, v.A)(
                    "YoutubePreviewContainer",
                    Z.YoutubePreviewImage,
                    b.imageClassnames,
                  ),
                  src:
                    w.TS.COMMUNITY_CDN_URL +
                    "public/shared/images/responsive/youtube_16x9_placeholder.gif",
                }),
                (0, t.jsx)("iframe", {
                  src: fe,
                  allowFullScreen: !0,
                  frameBorder: 0,
                  width: te || 460,
                  height: se || 300,
                }),
              ],
            })
          );
        }
        function C(b) {
          const D = Math.floor(b / 3600);
          b -= D * 60 * 60;
          const T = Math.floor(b / 60);
          return (b -= T * b), `${D}h${T}m${b}s`;
        }
        var G = e(15901),
          W = e(96117),
          F = e(85599),
          $ = e(21659),
          ae = e(13532),
          z = e(18210),
          oe = e(53113),
          le = e(62014),
          R = e.n(le),
          ce = e(97442),
          ie = e(22584);
        function me(b) {
          const { clanInfo: D } = b,
            { curator_link: T, curator_medium_avatar: k } = (0, w.Tc)(
              "curator_header",
              "application_config",
            );
          return (0, t.jsx)(c.Z, {
            className: "page_content_ctn",
            "flow-children": "column",
            autoFocus: !0,
            children: (0, t.jsxs)("div", {
              className: "page_content " + ie.HeaderContent,
              children: [
                (0, t.jsx)(ce.r, {
                  className: ie.BreadContainer,
                  crumbs: (0, w.Tc)("breadcrumbs", "application_config"),
                }),
                (0, t.jsxs)(c.Z, {
                  className: "list_header_area",
                  "flow-children": "row",
                  children: [
                    (0, t.jsx)("div", {
                      className: "curator_avatar_image",
                      children: (0, t.jsx)(s.Ii, {
                        href: T,
                        children: (0, t.jsx)("img", {
                          className: "curator_avatar",
                          src: k,
                        }),
                      }),
                    }),
                    (0, t.jsx)("div", {
                      className: "curator_details",
                      children: (0, t.jsx)(s.Ii, {
                        className: "pageheader curator_name",
                        href: T,
                        children: (0, z.we)(
                          "#SteamCurator_List_Header_List",
                          D.group_name,
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
        function Be(b) {
          return (0, t.jsx)(Ce, { listid: b.listid });
        }
        const Le = Be;
        function Ce(b) {
          const D = parseInt(
              (0, w.Tc)("curator_account_id", "application_config"),
            ),
            T = (0, m.m1)(D),
            k = (0, m.ME)(T?.clanSteamID, b.listid);
          if (((0, n.vb)(w.TS.LANGUAGE), !k)) return null;
          const q = T.is_ogg,
            V = T.is_creator_home && !T.is_ogg,
            Q = q
              ? "#SteamCurator_MoreDLC"
              : V
                ? "#SteamCurator_MoreProducts"
                : "#SteamCurator_MoreReviews";
          return (0, t.jsxs)(he.Ay, {
            feature: "curatorlistcapsule",
            children: [
              (0, t.jsx)(me, { clanInfo: T }),
              (0, t.jsx)("div", {
                className: "page_content_ctn grayscale",
                children: (0, t.jsx)("div", {
                  className: "page_content",
                  children: (0, t.jsxs)("div", {
                    className: R().CuratorListCtn,
                    children: [
                      (0, t.jsx)(Re, { listDetails: k }),
                      (0, m.cc)(k)
                        ? (0, t.jsx)(Ge, { listDetails: k })
                        : (0, t.jsx)(Ee, {
                            listDetails: k,
                            rgListItems: k.apps,
                          }),
                      (0, t.jsxs)("div", {
                        className: R().CuratorMoreCtn,
                        children: [
                          (0, t.jsx)("h2", {
                            children: (0, z.we)(
                              "#SteamCurator_ExploreMoreTitle",
                            ),
                          }),
                          (0, t.jsx)(s.Ii, {
                            href: T.vanity_url,
                            children: (0, z.PP)(Q, T.group_name),
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
        function Ge(b) {
          const { listDetails: D } = b,
            [T, k] = (0, g.useState)(null),
            q = new E.b(D.sale_clan_steamid),
            { eventModel: V } = (0, N.B9)(
              q.GetAccountID(),
              D.sale_clan_event_gid,
            ),
            Q = (0, g.useMemo)(
              () => (D.apps || []).map((se) => se.recommended_app.appid),
              [D],
            ),
            te = _(V, Q);
          return (
            (0, g.useEffect)(() => {
              if (V)
                if (V.BUsesContentHubForItemSource())
                  te &&
                    k(
                      D.apps?.filter((se) => te.has(se.recommended_app?.appid)),
                    );
                else {
                  const se = V.GetSaleFeaturedApps();
                  k(D.apps?.filter((re) => se.has(re.recommended_app?.appid)));
                }
            }, [D, V, te]),
            (0, t.jsx)(Ee, { listDetails: D, rgListItems: T })
          );
        }
        function Ee(b) {
          const { listDetails: D, rgListItems: T } = b,
            [k, q] = (0, g.useState)(0),
            [V, Q] = (0, g.useState)(null),
            te = (0, B.m)("CuratorAppListDisplay");
          if (
            (g.useEffect(() => {
              T &&
                (q(T?.length || 0),
                o.Fm.Get()
                  .HintLoad()
                  .then(() => {
                    const re = T.map((ne) => ne.recommended_app.appid);
                    u.A.Get()
                      .QueueMultipleAppRequests(re, G.jy)
                      .then(() => {
                        te.token.reason ||
                          Q(
                            T.filter(
                              (ne) =>
                                !(0, G.Li)(
                                  u.A.Get().GetApp(ne.recommended_app.appid),
                                ),
                            ),
                          );
                      })
                      .catch(() => {
                        te.token.reason || Q([]);
                      });
                  }));
            }, [T, te]),
            V == null)
          )
            return (0, t.jsx)(F.t, {
              string: (0, z.we)("#Loading"),
              position: "center",
              size: "medium",
            });
          const se = D.list_type == m.QV;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(c.Z, {
                className: (0, v.A)(R().CuratorList, se && R().CuratorListGrid),
                "flow-children": "grid",
                children: V.map((re, ne) =>
                  (0, t.jsx)(
                    Te,
                    { item: re, listDetails: D, bAutoFocus: ne == 0 },
                    "rec_" + re.recommended_app.appid,
                  ),
                ),
              }),
              100 > V.length &&
                (0, t.jsxs)("div", {
                  children: [
                    (0, t.jsxs)("span", {
                      children: [
                        (0, z.Yp)("#SteamCurator_Hidden", k - V.length),
                        " ",
                      ],
                    }),
                    (0, t.jsx)(s.Ii, {
                      href: w.TS.STORE_BASE_URL + "account/preferences/",
                      children: (0, z.we)("#SteamCurator_Setting"),
                    }),
                  ],
                }),
            ],
          });
        }
        function Re(b) {
          const { listDetails: D } = b,
            T = (0, m.fq)(D),
            k = (0, w.Tc)("showlisttitle", "application_config"),
            q = (0, w.Tc)("titleareaheight", "application_config"),
            V =
              D.list_jsondata.youtube_link &&
              (0, I.XU)(D.list_jsondata.youtube_link),
            Q = D.list_jsondata.youtube_link && r(D.list_jsondata.youtube_link),
            te = (0, U.sfN)(w.TS.LANGUAGE),
            se = z.NT.GetWithFallback(D.localized_flat_title, te),
            re = z.NT.GetWithFallback(D.localized_flat_blurb, te),
            ne = z.NT.GetWithFallback(D.localized_flat_link, te),
            ue =
              T &&
              T.GetImageURL(
                (0, $.c5)() ? "product_mobile_banner" : "product_banner",
                te,
              );
          return (0, t.jsxs)("div", {
            className: R().TopReviewInfo,
            children: [
              !!ue &&
                (0, t.jsx)(s.Ii, {
                  href: (0, be.n4)(T),
                  children: (0, t.jsx)("img", {
                    className: R().SaleBanner,
                    src: ue,
                  }),
                }),
              k &&
                se &&
                (0, t.jsx)("div", { className: R().Title, children: se }),
              k &&
                re &&
                (0, t.jsx)("div", { className: R().Blurb, children: re }),
              q > 0 && (0, t.jsx)("div", { style: { height: q } }),
              V &&
                (0, t.jsx)("div", {
                  className: R().VideoReviewCtn,
                  children: (0, t.jsx)(ae.l, {
                    video: V.strVideoID,
                    startSeconds: V.nStartSeconds,
                    autoplay: !0,
                    autopause: !0,
                    showFullscreenBtn: !0,
                    controls: !0,
                    preloadYoutubeScripts: !0,
                    playsInline: !0,
                    imageClassnames: R().YouTubePreviewImage,
                  }),
                }),
              !!Q &&
                (0, t.jsx)("div", {
                  className: R().VideoReviewCtn,
                  children: (0, t.jsx)(p, {
                    videoid: Q,
                    posterURL: "",
                    imageClassnames: R().YouTubePreviewImage,
                  }),
                }),
              ne && (0, t.jsx)(Ae, { url: ne }),
            ],
          });
        }
        const Te = (0, j.PA)((b) => {
          const { item: D, listDetails: T, bAutoFocus: k } = b,
            q = parseInt((0, w.Tc)("curator_account_id", "application_config")),
            V = (0, m.m1)(q),
            [Q] = (0, a.t7)(D?.recommended_app?.appid, {
              include_assets: !0,
              include_release: !0,
            }),
            te = (0, g.useMemo)(
              () => ({
                id: Q?.GetID(),
                type: (0, A._4)(Q?.GetStoreItemType(), Q?.GetAppType()),
              }),
              [Q],
            ),
            se = (0, Y.rt)(te);
          if (!V || !Q) return null;
          const {
              appid: re,
              link_url: ne,
              blurb: ue,
              time_recommended: de,
              recommendation_state: pe,
            } = D.recommended_app,
            fe = V.is_creator_home && !V.is_ogg,
            Me = T.list_jsondata.app_data?.[re],
            ge = ne && (0, I.XU)(ne),
            ye = ne && r(ne),
            Se = ue != m.F6 && ue,
            De = Q.BHasDemo(),
            xe = Me?.img_url,
            Pe = `curator_clanid=${V.clanAccountID}&curator_listid=${T.listid}`,
            Fe = Q.GetStorePageURL() + "/?curator_clanid=" + V.clanAccountID;
          return (0, t.jsxs)(c.Z, {
            className: R().CuratorReview,
            autoFocus: k,
            children: [
              (0, t.jsx)("div", {
                className: R().CapsuleCtn,
                children:
                  ge || ye
                    ? (0, t.jsx)(Oe, {
                        strVideoID: ge?.strVideoID || ye,
                        nStartSeconds: ge?.nStartSeconds,
                        id: se,
                        strImgOverrideUrl: xe,
                        bShowDemoButton: De,
                        strExtraParams: Pe,
                        bTwitchVideo: !!ye,
                      })
                    : (0, t.jsx)(W.W, {
                        imageType: "header",
                        capsule: te,
                        bShowDemoButton: De,
                        strExtraParams: Pe,
                        bPreferAssetWithoutOverride: !1,
                      }),
              }),
              (0, t.jsxs)("div", {
                className: R().ReviewTextSection,
                children: [
                  (0, t.jsx)("a", {
                    className: R().GameTitle,
                    href: Fe,
                    children: Q.GetName(),
                  }),
                  (0, t.jsxs)("div", {
                    className: R().RecommendationTypeAndDate,
                    children: [
                      (0, t.jsx)(je, { type: pe }),
                      (0, t.jsx)("div", {
                        className: R().ReviewDate,
                        children:
                          fe || !de
                            ? (0, z.we)(
                                "#EventModTile_ReleaseDate",
                                Q.GetFormattedSteamReleaseDate(),
                              )
                            : (0, z.$z)(de),
                      }),
                    ],
                  }),
                  !!Se &&
                    (0, t.jsx)("div", {
                      className: R().ReviewBlurb,
                      children: (0, z.we)("#SteamCurator_ReviewTextQuoted", Se),
                    }),
                  !!ne && (0, t.jsx)(Ae, { url: ne }),
                ],
              }),
            ],
          });
        });
        function Oe(b) {
          const {
              strVideoID: D,
              nStartSeconds: T,
              id: k,
              strImgOverrideUrl: q,
              bShowDemoButton: V,
              strExtraParams: Q,
              bTwitchVideo: te,
            } = b,
            se = 300,
            { data: re } = (0, i.lv)(k);
          return (0, t.jsxs)("div", {
            className: R().YouTubeCapsule,
            children: [
              (0, t.jsx)("div", {
                className: R().YouTubeCtn,
                children: te
                  ? (0, t.jsx)(p, {
                      videoid: D,
                      posterURL: re ? (0, ve.b0)(re, "header") : void 0,
                      imageClassnames: R().YouTubePreviewImage,
                      autoplay: !0,
                    })
                  : (0, t.jsx)(ae.l, {
                      video: D,
                      startSeconds: T,
                      autoplay: !0,
                      autopause: !0,
                      showFullscreenBtn: !0,
                      controls: !0,
                      preloadYoutubeScripts: !0,
                      playsInline: !0,
                      imageClassnames: R().YouTubePreviewImage,
                      altImg: q,
                    }),
              }),
              (0, t.jsxs)("div", {
                className: R().YouTubeCapsuleBottomBar,
                children: [
                  (0, t.jsx)("div", {
                    className: R().GameImageCtn,
                    children: (0, t.jsx)(y.Q, {
                      id: k,
                      bShowDemoButton: V,
                      nDelayShowMs: se,
                      strExtraParams: Q,
                      hoverProps: {
                        direction: "overlay-center",
                        style: { minWidth: "300px" },
                      },
                      children: (0, t.jsx)("img", {
                        className: R().GameImage,
                        src: re ? (0, ve.b0)(re, "library_capsule") : void 0,
                      }),
                    }),
                  }),
                  (0, t.jsx)(K.q, { id: k, strClassName: R().FullWidth }),
                ],
              }),
            ],
          });
        }
        function je(b) {
          switch (b.type) {
            case Ie.tV.$D:
              return (0, t.jsx)("div", {
                className: R().Recommended,
                children: (0, z.we)("#SteamCurator_Recommended"),
              });
            case Ie.tV.qP:
              return (0, t.jsx)("div", {
                className: R().NotRecommended,
                children: (0, z.we)("#SteamCurator_NotRecommended"),
              });
            case Ie.tV.y8:
              return (0, t.jsx)("div", {
                className: R().Informational,
                children: (0, z.we)("#SteamCurator_Informational"),
              });
            default:
              return null;
          }
        }
        function Ae(b) {
          let D = (0, M.OZ)(b.url);
          (0, O.p)(D) &&
            (D =
              (w.TS.IN_CLIENT ? "steam://openurl_external/" : "") +
              w.TS.COMMUNITY_BASE_URL +
              "linkfilter/?url=" +
              D);
          const T = (0, oe.wm)(b.url),
            k = (0, I.Lg)(b.url);
          return (0, t.jsxs)("div", {
            className: R().FullReviewLink,
            children: [
              (0, t.jsx)(s.Ii, {
                className: R().FullReviewAnchor,
                href: D,
                rel: "noopener nofollow",
                preferredFocus: !1,
                autoFocus: !1,
                children: (0, z.we)(
                  k
                    ? "#SteamCurator_WatchFullReview"
                    : "#SteamCurator_ReadFullReview",
                ),
              }),
              (0, t.jsx)("div", {
                className: R().FullReviewDomain,
                children: (0, z.we)(
                  "#SteamCurator_ReviewLinkHostnameBracketed",
                  T,
                ),
              }),
            ],
          });
        }
      },
      2108: (ee) => {
        ee.exports = { BreadContainer: "YaL4BAoqywnKnb5jbU_il" };
      },
      10999: (ee) => {
        ee.exports = {
          VideoReviewCtn: "V6zz2NPPxfnGjAchCe56r",
          YouTubePreviewImage: "_3joL1ZVcmC-6lCOLfjuIq7",
          TwitchPlayer: "_1Q0Ym9jG7UCFeD3c9LbOSy",
        };
      },
      70758: (ee) => {
        ee.exports = {
          YoutubePreviewImage: "_3bVwKmAuh70AH8XVDnyf5z",
          YoutubePlayer: "_3oXEPQSJY3yN1IVhfxeSy0",
        };
      },
      62014: (ee) => {
        ee.exports = {
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
        };
      },
      22584: (ee) => {
        ee.exports = {
          BreadContainer: "GkVFIKIAijTGzfSc4BEQl",
          HeaderContent: "_2nPcyDvQVywsCXSLbgnUQp",
        };
      },
      17083: (ee, X, e) => {
        "use strict";
        e.d(X, { N_: () => x, k2: () => _ });
        var t = e(92757),
          j = e(42891),
          g = e(90626),
          O = e(29248),
          U = e(58584),
          s = e(81115),
          c = e(68841),
          I = (function (o) {
            (0, j.A)(u, o);
            function u() {
              for (
                var a, n = arguments.length, i = new Array(n), d = 0;
                d < n;
                d++
              )
                i[d] = arguments[d];
              return (
                (a = o.call.apply(o, [this].concat(i)) || this),
                (a.history = (0, O.zR)(a.props)),
                a
              );
            }
            var A = u.prototype;
            return (
              (A.render = function () {
                return g.createElement(t.Ix, {
                  history: this.history,
                  children: this.props.children,
                });
              }),
              u
            );
          })(g.Component),
          Y = (function (o) {
            (0, j.A)(u, o);
            function u() {
              for (
                var a, n = arguments.length, i = new Array(n), d = 0;
                d < n;
                d++
              )
                i[d] = arguments[d];
              return (
                (a = o.call.apply(o, [this].concat(i)) || this),
                (a.history = (0, O.TM)(a.props)),
                a
              );
            }
            var A = u.prototype;
            return (
              (A.render = function () {
                return g.createElement(t.Ix, {
                  history: this.history,
                  children: this.props.children,
                });
              }),
              u
            );
          })(g.Component),
          y = function (u, A) {
            return typeof u == "function" ? u(A) : u;
          },
          K = function (u, A) {
            return typeof u == "string" ? (0, O.yJ)(u, null, null, A) : u;
          },
          N = function (u) {
            return u;
          },
          E = g.forwardRef;
        typeof E > "u" && (E = N);
        function M(o) {
          return !!(o.metaKey || o.altKey || o.ctrlKey || o.shiftKey);
        }
        var B = E(function (o, u) {
            var A = o.innerRef,
              a = o.navigate,
              n = o.onClick,
              i = (0, s.A)(o, ["innerRef", "navigate", "onClick"]),
              d = i.target,
              P = (0, U.A)({}, i, {
                onClick: function (v) {
                  try {
                    n && n(v);
                  } catch (Z) {
                    throw (v.preventDefault(), Z);
                  }
                  !v.defaultPrevented &&
                    v.button === 0 &&
                    (!d || d === "_self") &&
                    !M(v) &&
                    (v.preventDefault(), a());
                },
              });
            return (
              N !== E ? (P.ref = u || A) : (P.ref = A), g.createElement("a", P)
            );
          }),
          x = E(function (o, u) {
            var A = o.component,
              a = A === void 0 ? B : A,
              n = o.replace,
              i = o.to,
              d = o.innerRef,
              P = (0, s.A)(o, ["component", "replace", "to", "innerRef"]);
            return g.createElement(t.XZ.Consumer, null, function (L) {
              L || (0, c.A)(!1);
              var v = L.history,
                Z = K(y(i, L.location), L.location),
                h = Z ? v.createHref(Z) : "",
                l = (0, U.A)({}, P, {
                  href: h,
                  navigate: function () {
                    var p = y(i, L.location),
                      C = (0, O.AO)(L.location) === (0, O.AO)(K(p)),
                      G = n || C ? v.replace : v.push;
                    G(p);
                  },
                });
              return (
                N !== E ? (l.ref = u || d) : (l.innerRef = d),
                g.createElement(a, l)
              );
            });
          });
        if (0) var J, w;
        var S = function (u) {
            return u;
          },
          f = g.forwardRef;
        typeof f > "u" && (f = S);
        function H() {
          for (var o = arguments.length, u = new Array(o), A = 0; A < o; A++)
            u[A] = arguments[A];
          return u
            .filter(function (a) {
              return a;
            })
            .join(" ");
        }
        var _ = f(function (o, u) {
          var A = o["aria-current"],
            a = A === void 0 ? "page" : A,
            n = o.activeClassName,
            i = n === void 0 ? "active" : n,
            d = o.activeStyle,
            P = o.className,
            L = o.exact,
            v = o.isActive,
            Z = o.location,
            h = o.sensitive,
            l = o.strict,
            r = o.style,
            p = o.to,
            C = o.innerRef,
            G = (0, s.A)(o, [
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
          return g.createElement(t.XZ.Consumer, null, function (W) {
            W || (0, c.A)(!1);
            var F = Z || W.location,
              $ = K(y(p, F), F),
              ae = $.pathname,
              z = ae && ae.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
              oe = z
                ? (0, t.B6)(F.pathname, {
                    path: z,
                    exact: L,
                    sensitive: h,
                    strict: l,
                  })
                : null,
              le = !!(v ? v(oe, F) : oe),
              R = typeof P == "function" ? P(le) : P,
              ce = typeof r == "function" ? r(le) : r;
            le && ((R = H(R, i)), (ce = (0, U.A)({}, ce, d)));
            var ie = (0, U.A)(
              {
                "aria-current": (le && a) || null,
                className: R,
                style: ce,
                to: $,
              },
              G,
            );
            return (
              S !== f ? (ie.ref = u || C) : (ie.innerRef = C),
              g.createElement(x, ie)
            );
          });
        });
        if (0) var m;
      },
    },
  ]);
})();
