/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [93584],
    {
      20615: (V, C, e) => {
        "use strict";
        e.d(C, { _: () => W, p: () => H });
        var c = e(68312),
          M = e(5827),
          B = e(35038),
          D = e(3367);
        function v() {
          const P = useStoreBrowseContext(),
            g = useActiveAnonymousServiceTransport();
          return useQuery(s(g, P));
        }
        function t(P) {
          return ["StoreBrowsePriceStops", P];
        }
        function s(P, g) {
          const { country: b } = g;
          return {
            queryKey: t(b),
            queryFn: async () => U(P, b),
            staleTime: 1440 * 60 * 1e3,
          };
        }
        async function U(P, g) {
          const b = B.w.Init(D.wY);
          b.Body().set_country_code(g);
          const R = await D.$4.GetPriceStops(P, b);
          if (!R.BSuccess())
            throw `Error loading price stops: ${R.GetErrorMessage()}`;
          return R.Body().toObject().price_stops || [];
        }
        var G = e(88942),
          I = e(18210);
        function T(P) {
          return P?.length
            ? [
                { price: 0, label: (0, I.we)("#FacetedBrowse_Price_Free") },
                ...P.map((g) => ({
                  price: Number(g.amount_in_cents ?? 0) / 100,
                  label: (0, I.we)(
                    "#FacetedBrowse_Price_Under",
                    g.formatted_amount ?? "",
                  ),
                })),
                { price: void 0, label: (0, I.we)("#FacetedBrowse_Price_Any") },
              ]
            : [];
        }
        function H() {
          const P = (0, M.ce)(),
            g = (0, c.rW)(),
            { data: b } = (0, G.I)({ ...s(g, P), select: T });
          return b ?? [];
        }
        function W(P, g) {
          return T(P.getQueryData(t(g)));
        }
      },
      3852: (V, C, e) => {
        "use strict";
        e.d(C, { hl: () => t, kP: () => v, pj: () => D, u: () => B });
        var c = e(90825),
          M = e(18210);
        function B(s, U, G) {
          const I = s.name;
          if (I?.length > 0 && I[0]?.startsWith("#tagid_")) {
            const T = parseInt(I[0].substring(7));
            if (T > 0) return G && G[T];
          }
          return (0, M.we)((M.NT.GetWithFallback(I, U) || "").trim());
        }
        function D(s) {
          return String(s.type) + s.id;
        }
        function v(s, U) {
          return (
            s.jsondata.item_source_type != null &&
            s.jsondata.item_source_type !== c.w.k_ETaggedItems
          );
        }
        function t(s) {
          for (const U of s.facetValues)
            if (U.filter != null) {
              for (const G of U.filter.clauses)
                for (const I of G.or_tags) if (I.startsWith("[Opt]")) return !0;
            }
          return !1;
        }
      },
      24805: (V, C, e) => {
        "use strict";
        e.d(C, { Xh: () => U, cU: () => G, tf: () => T, wl: () => I });
        var c = e(99412),
          M = e(18735),
          B = e(3367),
          D = e(19619),
          v = e(10142),
          t = e(29543),
          s = e(3166);
        const U = {
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
        class G {
          m_setAlreadyAdded = new Set();
          Reset() {
            this.m_setAlreadyAdded = new Set();
          }
          BHasAppID(r) {
            return this.m_setAlreadyAdded.has("a" + r);
          }
          BHasPackageID(r) {
            return this.m_setAlreadyAdded.has("s" + r);
          }
          BHasBundleID(r) {
            return this.m_setAlreadyAdded.has("b" + r);
          }
          BHasStoreItemKey(r) {
            return this.m_setAlreadyAdded.has(
              this.ConvertStoreItemKeyToUniqueKey(r),
            );
          }
          AddStoreItemKey(r) {
            this.m_setAlreadyAdded.add(this.ConvertStoreItemKeyToUniqueKey(r));
          }
          ConvertStoreItemKeyToUniqueKey(r) {
            switch (r.item_type) {
              default:
              case "app":
                return "a" + r.id;
              case "sub":
                return "s" + r.id;
              case "bundle":
                return "b" + r.id;
            }
          }
        }
        const I = 4;
        function T(a, r, y, p, u, m) {
          const h = new Array(),
            S = new Array(),
            f = new Array(),
            O = new Array();
          if (!a || a.length == 0) return h;
          const n = [
            t.by.k_RejectSupportedLanguage,
            t.by.k_RejectAlreadyDisplayed,
            t.by.k_RejectNoTrailer,
          ];
          for (let o of a) {
            let l = o.id,
              d = t.by.k_NotRejected;
            switch (o.item_type) {
              case "sub":
                const _ = v.A.Get().GetPackage(l);
                if (_?.GetIncludedAppIDs()?.length !== 1) {
                  d = R(l, r, p, !0);
                  break;
                }
                l = _.GetIncludedAppIDs()[0];
              case "app":
                d = g(l, r, y, p, !0);
                break;
              case "bundle":
                d = x(l, r, p, !0);
                break;
            }
            if (
              (d == t.by.k_NotRejected
                ? ((o.rejected = t.by.k_NotRejected),
                  h.push({ ...o, priority: 1 }))
                : n.includes(d)
                  ? ((o.rejected = t.by.k_NotRejected), S.push(o))
                  : ((o.rejected = d),
                    d == t.by.k_RejectIgnoredGame ? f.push(o) : O.push(o)),
              h.length > u)
            )
              break;
          }
          return (
            h.length < u &&
              (H(h, S, m, 2),
              h.length < m &&
                r.enforce_minimum &&
                (H(h, f, m, 3), H(h, O, m, I))),
            h
          );
        }
        function H(a, r, y, p) {
          for (let u = 0; a.length < y && u < r.length; ++u)
            a.push({ ...r[u], priority: p });
        }
        function W(a, r) {
          const y = D.Fm.Get();
          if (
            r.only_current_platform &&
            y.BHasPlatformPreferenceSet() &&
            !(
              (a.GetPlatforms()?.windows && y.BIsPreferredPlatform("win")) ||
              (a.GetPlatforms()?.mac && y.BIsPreferredPlatform("mac")) ||
              (a.GetPlatforms()?.steamos_linux &&
                y.BIsPreferredPlatform("linux"))
            )
          )
            return t.by.k_RejectWrongPlatform;
          if (!r.prepurchase && a.BIsComingSoon())
            return t.by.k_RejectNoComingSoon;
          const p = a.GetPlatforms();
          return !r.virtual_reality &&
            p &&
            p.vr_support &&
            p.vr_support.vrhmd_only
            ? t.by.k_RejectNoVR
            : a.GetAllCreatorClanIDs()?.some((u) => y.BIsIgnoringCurator(u))
              ? t.by.k_RejectCreatorClan
              : t.by.k_NotRejected;
        }
        function P(a, r) {
          if (r.localized) {
            const y = (0, c.sfN)(s.TS.LANGUAGE);
            if (!a.GetAllLanguagesWithSomeSupport()?.includes(y))
              return t.by.k_RejectSupportedLanguage;
          }
          return t.by.k_NotRejected;
        }
        function g(a, r, y, p, u) {
          const m = v.A.Get().GetApp(a);
          if (!m) return t.by.k_RejectNotLoaded;
          const h = W(m, r);
          if (h != t.by.k_NotRejected) return h;
          const S = D.Fm.Get();
          if (S.BIsGameIgnored(a)) return t.by.k_RejectIgnoredGame;
          if (S.BExcludeTagIDs(m.GetTagIDs()))
            return t.by.k_RejectIgnoreGameTags;
          if (S.BExcludesContentDescriptor(m.GetContentDescriptorIDs()))
            return t.by.k_RejectIgnoreContentDescriptors;
          if (!r.early_access && m.BIsEarlyAccess())
            return t.by.k_RejectEarlyAccess;
          const f = m.GetAppType();
          if (!r.software && f == B.uE.Sv) return t.by.k_RejectSoftware;
          if (r.games_already_in_library && S.BIsGameOwned(a))
            return t.by.k_RejectInLibrary;
          if (r.games_not_in_library && !S.BIsGameOwned(a))
            return t.by.k_RejectNotInLibrary;
          if (!r.video && [B.uE.Wz, B.uE.gQ, B.uE.ID].includes(f))
            return t.by.k_RejectVideo;
          if (r.has_discount) {
            const O = m.GetBestPurchaseOption();
            if (!O || !O.discount_pct) return t.by.k_RejectNoDiscount;
          }
          return y != "adultonly" &&
            r.no_ao_content &&
            (m.HasContentDescriptorID(M.u7) || m.HasContentDescriptorID(M.T4))
            ? t.by.k_RejectAO
            : f == B.uE.ue &&
                r.games_already_in_library &&
                S.BIsGameOwned(m.GetParentAppID() || 0)
              ? t.by.k_RejectInLibrary
              : u
                ? (f == B.uE.ue && p.BHasAppID(m.GetParentAppID() || 0)) ||
                  p.BHasAppID(a)
                  ? t.by.k_RejectAlreadyDisplayed
                  : r.has_trailer && !m.BHasTrailers(!1)
                    ? t.by.k_RejectNoTrailer
                    : P(m, r)
                : t.by.k_NotRejected;
        }
        function b(a, r) {
          const y = D.Fm.Get();
          let p = !1;
          for (let u of a) {
            if (y.BIsGameIgnored(u)) return t.by.k_RejectIgnoredGame;
            y.BIsGameOwned(u) && (p = !0);
          }
          return r.games_not_in_library && p
            ? t.by.k_RejectInLibrary
            : r.games_not_in_library && !p
              ? t.by.k_RejectNotInLibrary
              : t.by.k_NotRejected;
        }
        function R(a, r, y, p) {
          const u = v.A.Get().GetPackage(a);
          if (!u) return t.by.k_RejectNotLoaded;
          const m = W(u, r);
          if (m != t.by.k_NotRejected) return m;
          const h = b(u.GetIncludedAppIDs(), r);
          if (h != t.by.k_NotRejected) return h;
          const S = D.Fm.Get();
          return r.games_already_in_library && S.BOwnsPackage(a)
            ? t.by.k_RejectInLibrary
            : S.BIsPackageIgnored(a)
              ? t.by.k_RejectIgnoredGame
              : p
                ? y.BHasPackageID(a)
                  ? t.by.k_RejectAlreadyDisplayed
                  : P(u, r)
                : t.by.k_NotRejected;
        }
        function x(a, r, y, p) {
          const u = v.A.Get().GetBundle(a);
          if (!u) return t.by.k_RejectNotLoaded;
          const m = W(u, r);
          if (m != t.by.k_NotRejected) return m;
          const h = b(u.GetIncludedAppIDs(), r);
          return h != t.by.k_NotRejected
            ? h
            : p
              ? y.BHasBundleID(a)
                ? t.by.k_RejectAlreadyDisplayed
                : P(u, r)
              : t.by.k_NotRejected;
        }
      },
      24110: (V, C, e) => {
        "use strict";
        e.d(C, { f: () => D });
        var c = e(71742);
        function M(v) {
          (0, c.wT)(!0, "Unexpected code running in SSR Server: " + v);
        }
        var B = e(3166);
        class D {
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
              D.s_globalSingletonStore ||
                (M("CHomeViewStore.s_globalSingletonStore"),
                (D.s_globalSingletonStore = new D())),
              D.s_globalSingletonStore
            );
          }
          constructor() {
            const t = (0, B.Tc)("home_view_setting", "application_config");
            this.ValidateHomeViewData(t) && this.SetHomeViewSetting(t);
            const s = (0, B.Tc)(
              "home_view_setting_override",
              "application_config",
            );
            this.ValidateHomeViewDataOverride(s) &&
              this.SetHomeViewSettingOverride(s);
          }
          ValidateHomeViewData(t) {
            const s = t;
            return (
              s &&
              typeof s.home == "object" &&
              typeof s.main_cluster == "object"
            );
          }
          SetHomeViewSetting(t) {
            this.m_HomeView = t;
          }
          ValidateHomeViewDataOverride(t) {
            const s = t;
            return (
              s &&
              (!s.all || typeof s.all == "object") &&
              (!s.maincap || typeof s.maincap == "object")
            );
          }
          SetHomeViewSettingOverride(t) {
            this.m_HomeView
              ? (this.m_HomeView.home = {
                  ...this.m_HomeView.home,
                  ...t?.all,
                  ...t?.maincap,
                })
              : (this.m_HomeView = { home: { ...t?.all, ...t?.maincap } });
          }
        }
      },
      53025: (V, C, e) => {
        "use strict";
        e.d(C, { $: () => s });
        var c = e(41735),
          M = e.n(c),
          B = e(3166),
          D = e(77495),
          v = e(90825),
          t = e(72604);
        class s extends D.ZQ {
          async DeleteOldAnnouncement(G, I) {
            let T = new URLSearchParams();
            T.append("sessionid", (0, B.KC)());
            let H =
                B.TS.COMMUNITY_BASE_URL +
                "/gid/" +
                G.ConvertTo64BitString() +
                "/announcements/ajaxdeleteannouncement/" +
                I,
              W = await M().post(H, T);
            if (W.data.success != t.R) throw W.data;
            return this.RemoveGIDFromList(G, v.cB + I), W.data;
          }
          static sm_Instance;
          static sm_SummaryInstance;
          static Get() {
            return (
              s.sm_Instance ||
                ((s.sm_Instance = new s()), s.sm_Instance.Init()),
              s.sm_Instance
            );
          }
          static GetSummaryStore() {
            return (
              s.sm_SummaryInstance ||
                ((s.sm_SummaryInstance = new s(!0)),
                s.sm_SummaryInstance.Init()),
              s.sm_SummaryInstance
            );
          }
        }
      },
      19188: (V, C, e) => {
        "use strict";
        e.d(C, { N: () => h });
        var c = e(7850),
          M = e(41735),
          B = e.n(M),
          D = e(75844),
          v = e(90626),
          t = e(98112),
          s = e(90537),
          U = e(58483),
          G = e(73085),
          I = e(2801),
          T = e(88843),
          H = e.n(T),
          W = e(64641),
          P = e.n(W),
          g = e(85599),
          b = e(34592),
          R = e(3166),
          x = e(72609),
          a = e(19619),
          r = e(53107),
          y = e(25792),
          p = Object.defineProperty,
          u = Object.getOwnPropertyDescriptor,
          m = (f, O, n, o) => {
            for (
              var l = o > 1 ? void 0 : o ? u(O, n) : O, d = f.length - 1, _;
              d >= 0;
              d--
            )
              (_ = f[d]) && (l = (o ? _(O, n, l) : _(l)) || l);
            return o && l && p(O, n, l), l;
          };
        const h = (f) => {
          let { bShowOnlyInitialEvent: O } = f;
          const n = (0, R.Qn)(),
            o = (0, s.Y)();
          return (0, c.jsx)(y.tH, {
            children: (0, c.jsx)(S, {
              ...f,
              bShowOnlyInitialEvent: O || n,
              tracker: o,
            }),
          });
        };
        let S = class extends v.Component {
          state = { bLoading: !1, eventModel: this.props.eventModel };
          m_refParent = v.createRef();
          m_cancelSignal = B().CancelToken.source();
          componentDidMount() {
            this.state.eventModel ||
              this.setState({ bLoading: !0 }, this.LoadEvent);
            let f = this.GetBodyElement();
            f &&
              this.props.bPrimaryPageFeature &&
              f.classList.add(T.BodyNoScroll);
          }
          componentWillUnmount() {
            this.m_cancelSignal.cancel("EventInfiniteScrollModal unmounting");
            let f = this.GetBodyElement();
            f &&
              this.props.bPrimaryPageFeature &&
              f.classList.remove(T.BodyNoScroll);
          }
          GetBodyElement() {
            return this.m_refParent.current
              ? this.m_refParent.current.closest("body")
              : null;
          }
          async LoadEvent() {
            const {
              appid: f,
              clanSteamID: O,
              announcementGID: n,
              partnerEventStore: o,
              additionalParams: l,
            } = this.props;
            o.LoadAdjacentPartnerEventsByAnnouncement(
              n,
              O,
              f,
              0,
              3,
              l,
              this.m_cancelSignal,
            )
              .then((d) => {
                d.length > 0
                  ? this.setState(
                      { bLoading: !1, eventModel: d[0] },
                      this.HandleReadEvent,
                    )
                  : (this.props.onEventNotFound && this.props.onEventNotFound(),
                    this.setState({ bLoading: !1 }));
              })
              .catch((d) => {
                let _ = (0, b.H)(d);
                console.error(
                  "EventInfiniteScrollModal failed " + _.strErrorMsg,
                  _,
                ),
                  this.setState({ bLoading: !1 });
              });
          }
          async HandleReadEvent() {
            const { eventModel: f } = this.state,
              { trackingLocation: O, tracker: n } = this.props;
            f &&
              f.BIsPartnerEvent() &&
              (n.RecordEventRead(f, O ?? t.Tc.br), n.Flush());
          }
          render() {
            const { bShowOnlyInitialEvent: f } = this.props,
              { bLoading: O, eventModel: n } = this.state;
            if (O)
              return (0, c.jsx)(I.EN, {
                active: !0,
                children: (0, c.jsx)("div", {
                  className: P().FlexCenter,
                  style: { height: "400px" },
                  children: (0, c.jsx)(g.t, {}),
                }),
              });
            const {
              closeModal: o,
              appid: l,
              clanSteamID: d,
              className: _,
              partnerEventStore: N,
              showAppHeader: j,
              bPrimaryPageFeature: F,
              additionalParams: i,
              eventClassName: A,
            } = this.props;
            let E;
            x.TS.IN_CLIENT &&
              n?.appid &&
              (a.Fm.Get().HintLoad(),
              a.Fm.Get().BOwnsApp(n.appid) &&
                (E = (K) =>
                  (0, r.EP)(K, "steam://nav/games/details/" + n.appid)));
            const L = (0, c.jsx)(U.sU, {
              children: (K) =>
                (0, c.jsx)(G.AD, {
                  initialEvent: n,
                  appid: l,
                  clanSteamID: d,
                  partnerEventStore: N,
                  emoticonStore: K,
                  closeModal: F ? void 0 : o,
                  showAppHeader: j,
                  bShowOnlyInitialEvent: f,
                  additionalParams: i,
                  eventClassName: A,
                  onAppIconClick: E,
                }),
            });
            return F
              ? L
              : (0, c.jsx)(I.EN, {
                  active: !0,
                  children: (0, c.jsx)("div", { className: _, children: L }),
                });
          }
        };
        S = m([D.PA], S);
      },
      15901: (V, C, e) => {
        "use strict";
        e.d(C, {
          AX: () => u,
          H2: () => r,
          Li: () => p,
          QU: () => f,
          S7: () => R,
          WD: () => S,
          f4: () => O,
          gL: () => h,
          jy: () => y,
          nt: () => a,
          sd: () => b,
          tJ: () => x,
        });
        var c = e(24805),
          M = e(29543),
          B = e(92025),
          D = e(99412),
          v = e(3367),
          t = e(19619),
          s = e(10142),
          U = e(3166),
          G = e(24110),
          I = e(71742),
          T = e(14947),
          H = e(20615),
          W = e(3852),
          P = e(40497),
          g = e(90825);
        function b(n) {
          return s.A.Get().BIsStoreItemMissing(n.id, (0, M.SW)(n.type));
        }
        function R(n, o, l) {
          const d = new Array();
          return (
            n?.forEach((_) => d.push({ id: _, type: "game" })),
            o?.forEach((_) => d.push({ id: _, type: "sub" })),
            l?.forEach((_) => d.push({ id: _, type: "bundle" })),
            d
          );
        }
        function x(n) {
          return (
            (s.A.Get()
              .GetStoreItem(n.id, (0, M.SW)(n.type))
              ?.GetBestPurchaseOption()?.discount_pct ?? 0) > 0
          );
        }
        function a(n) {
          if (!G.f.Get().GetHomeView()?.localized) return !0;
          const o = s.A.Get().GetStoreItem(n.id, (0, M.SW)(n.type));
          return o
            ? t.Fm.Get().BIsAnyLanguageEnabled(
                o.GetAllLanguagesWithSomeSupport(),
              )
            : !0;
        }
        async function r(n, o, l) {
          if (!n || n.length == 0) return [];
          const d = n.filter((i) => (0, B.fp)(i.type)).map((i) => i.id),
            _ = n.filter((i) => i.type === "sub").map((i) => i.id),
            N = n.filter((i) => i.type === "bundle").map((i) => i.id);
          {
            const i = d.filter((L) => !s.A.Get().BHasApp(L, o)),
              A = _.filter((L) => !s.A.Get().BHasApp(L, o)),
              E = N.filter((L) => !s.A.Get().BHasApp(L, o));
            (i.length > 0 || A.length > 0 || E.length > 0) &&
              (await Promise.all([
                s.A.Get().QueueMultipleAppRequests(i, o),
                s.A.Get().QueueMultiplePackageRequests(A, o),
                s.A.Get().QueueMultipleBundleRequests(E, o),
              ]));
          }
          const j = new Set();
          N?.forEach((i) => {
            s.A.Get()
              .GetBundle(i)
              ?.GetIncludedAppIDs()
              .forEach((E) => j.add(E));
          }),
            _?.forEach((i) => {
              s.A.Get()
                .GetPackage(i)
                ?.GetIncludedAppIDs()
                .forEach((E) => j.add(E));
            });
          const F = Array.from(j).filter((i) => !s.A.Get().BHasApp(i, o));
          if (
            (F.length > 0 && (await s.A.Get().QueueMultipleAppRequests(F, o)),
            d.forEach((i) => j.add(i)),
            l)
          ) {
            const i = Array.from(j)
              .map((A) => {
                const L = s.A.Get().GetApp(A)?.GetParentAppID();
                return L ? (j.add(L), L) : null;
              })
              .filter((A) => A !== null)
              .filter((A) => !s.A.Get().BHasApp(A, o));
            i.length > 0 && (await s.A.Get().QueueMultipleAppRequests(i, o));
          }
          return Array.from(j).filter((i) => {
            const A = s.A.Get().GetApp(i);
            return A && !A.GetParentAppID();
          });
        }
        const y = {
          include_tag_count: 20,
          include_basic_info: !0,
          include_supported_languages: !0,
        };
        function p(n, o = !1) {
          if (!n) return !0;
          const l = t.Fm.Get();
          if (
            ((0, I.wT)(l.BIsLoaded(), "Dynamic Store not loaded"),
            !o && n.GetStoreItemType() == v.c6.qI)
          ) {
            const _ = n.GetParentAppID();
            if (
              l.BIsGameIgnored(n.GetAppID()) ||
              (_ !== void 0 && l.BIsGameIgnored(_))
            )
              return !0;
          }
          if (
            l.BExcludesContentDescriptor(n.GetContentDescriptorIDs()) ||
            l.BExcludeTagIDs(n.GetTagIDs()) ||
            n.GetAllCreatorClanIDs().some((_) => l.BIsIgnoringCurator(_))
          )
            return !0;
          if (G.f.Get().GetHomeView()?.localized) {
            const _ = n.GetAllLanguagesWithSomeSupport();
            if (
              _.length > 0 &&
              !n.BHasSomeLanguageSupport(D.Bhc) &&
              !l.BIsAnyLanguageEnabled(_)
            )
              return !0;
          }
          return !1;
        }
        async function u(n, o, l, d) {
          let _ = 0,
            N = 0;
          const j = [];
          await r(n, c.Xh, o);
          for (const F of n) {
            const i = s.A.Get().GetStoreItem(F.id, (0, M.SW)(F.type));
            if (!i) {
              _++;
              continue;
            }
            const A = i
              .GetIncludedAppIDs()
              .map((E) => s.A.Get().GetApp(E))
              .filter((E) => !!E);
            if ((A.push(i), o)) {
              const E = new Set(
                  A.map((K) => K.GetParentAppID()).filter((K) => !!K),
                ),
                L = Array.from(E)
                  .map((K) => s.A.Get().GetApp(K))
                  .filter((K) => !!K);
              L && A.push(...L);
            }
            A.some((E) => (d || p)(E))
              ? (N++, l && (t.Fm.Get().BIsStoreItemOwned(i) || l.push(F)))
              : j.push(F);
          }
          return j;
        }
        async function m(n, o, l, d, _, N, j) {
          let i = await u(
            n,
            o,
            j,
            _
              ? (E) =>
                  !E ||
                  t.Fm.Get().BExcludesContentDescriptor(
                    E.GetContentDescriptorIDs(),
                  ) ||
                  t.Fm.Get().BExcludeTagIDs(E.GetTagIDs())
              : p,
          );
          const A = [];
          for (const E of i) {
            const L = s.A.Get().GetStoreItem(E.id, (0, M.SW)(E.type));
            if (!L) continue;
            const K = L?.GetIncludedAppIDsOrSelf();
            let z = !1;
            l && (z = z || K.every((k) => t.Fm.Get().BIsGameOwned(k))),
              d && (z = z || K.every((k) => t.Fm.Get().BIsGameWishlisted(k))),
              N && (z = z || K.every((k) => t.Fm.Get().BIsGameIgnored(k))),
              z ? j && j.push(E) : A.push(E);
          }
          return A;
        }
        function h() {
          const n = t.Fm.Get();
          if (n.BIsLoaded())
            return {
              bSignedIn: !!U.iA.logged_in,
              ePrimaryLanguage: n.GetPrimaryLanguage(),
              setSecondaryLanguages: n.GetSecondaryLanguages(),
              setExcludedContentDescriptors: new Set(
                n.ExcludedContentDescriptor,
              ),
            };
        }
        function S() {
          return (0, H._)(P.L, U.TS.COUNTRY);
        }
        function f(n) {
          return !!(
            n?.BHasHideIgnoredItemsFacetValue() &&
            !n.BIsUserPreferenceEnabled(g.yX.k_EHideIgnoredItems)
          );
        }
        async function O(n, o, l, d) {
          const _ = n.BHasHideIgnoredItemsFacetValue(),
            N = n.BIsUserPreferenceEnabled(g.yX.k_EHideOwnedItems),
            j = n.BIsUserPreferenceEnabled(g.yX.k_EHideWishlistedItems),
            F = n.BIsUserPreferenceEnabled(g.yX.k_EHideIgnoredItems),
            i = [],
            A = await m(o, l, N, j, _, F, i);
          return (
            (0, T.h5)(() => {
              n.SetCapsulesRemovedByUserPreferenceFilters(new Set(i.map(W.pj)));
            }),
            d?.push(...i),
            A
          );
        }
      },
      12932: (V, C, e) => {
        "use strict";
        e.d(C, { AQ: () => P, pn: () => b, qx: () => g });
        var c = e(7850),
          M = e(19316),
          B = e(18210),
          D = e(36118),
          v = e(90626),
          t = e(36707),
          s = e(95695),
          U = e.n(s),
          G = e(25792),
          I = e(64734),
          T = e.n(I),
          H = e(65946),
          W = e(11243);
        function P(R) {
          const {
              title: x,
              tooltip: a,
              getMinimized: r,
              toggleMinimized: y,
              className: p,
              children: u,
              elAdditionalButtons: m,
            } = R,
            h = (0, H.q3)(() => r());
          return (0, c.jsxs)(c.Fragment, {
            children: [
              (0, c.jsxs)("div", {
                className: (0, t.A)(
                  p,
                  I.SectionTitleHeader,
                  I.required_title,
                  "SectionTitleHeader",
                ),
                children: [
                  (0, c.jsxs)("div", {
                    className: (0, t.A)(
                      s.CollapsableSectionTitle,
                      "EventEditorTextTitle",
                    ),
                    children: [x, !!a && (0, c.jsx)(W.o, { tooltip: a })],
                  }),
                  (0, c.jsxs)("div", {
                    className: I.SectionTitleButtons,
                    children: [
                      m,
                      (0, c.jsx)(b, { bIsMinimized: h, fnToggleMinimize: y }),
                    ],
                  }),
                ],
              }),
              !h && (0, c.jsx)(G.tH, { children: u }),
            ],
          });
        }
        function g(R) {
          const [x, a] = v.useState(!!R.bStartMinimized);
          return (0, c.jsx)(P, {
            ...R,
            getMinimized: () => x,
            toggleMinimized: () => a(!x),
            children: R.children,
          });
        }
        function b(R) {
          const { bIsMinimized: x, fnToggleMinimize: a } = R,
            r = x ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
          return (0, c.jsx)(M.$n, {
            "data-tooltip-text": (0, B.we)(r),
            onClick: a,
            children: R.bIsMinimized
              ? (0, c.jsx)(D.hz4, {})
              : (0, c.jsx)(D.Xjb, {}),
          });
        }
      },
      64734: (V) => {
        V.exports = {
          SectionTitleHeader: "_2g5oNomwd2lv8wL2qlsLVA",
          SectionTitleButtons: "RGHKm1_KeaBjdzuvisfYN",
          required_title: "_3yDPZjnsoLc2FkrAH2UOEd",
        };
      },
    },
  ]);
})();
