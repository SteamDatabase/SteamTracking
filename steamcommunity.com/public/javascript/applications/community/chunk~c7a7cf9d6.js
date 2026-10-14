/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [3584],
    {
      20615: (V, U, t) => {
        "use strict";
        t.d(U, { _: () => G, p: () => j });
        var m = t(68312),
          S = t(5827),
          M = t(35038),
          R = t(3367);
        function C() {
          const I = useStoreBrowseContext(),
            A = useActiveAnonymousServiceTransport();
          return useQuery(l(A, I));
        }
        function r(I) {
          return ["StoreBrowsePriceStops", I];
        }
        function l(I, A) {
          const { country: B } = A;
          return {
            queryKey: r(B),
            queryFn: async () => b(I, B),
            staleTime: 1440 * 60 * 1e3,
          };
        }
        async function b(I, A) {
          const B = M.w.Init(R.wY);
          B.Body().set_country_code(A);
          const g = await R.$4.GetPriceStops(I, B);
          if (!g.BSuccess())
            throw `Error loading price stops: ${g.GetErrorMessage()}`;
          return g.Body().toObject().price_stops || [];
        }
        var h = t(88942),
          a = t(18210);
        function f(I) {
          return I != null && I.length
            ? [
                { price: 0, label: (0, a.we)("#FacetedBrowse_Price_Free") },
                ...I.map((A) => {
                  var B, g;
                  return {
                    price:
                      Number((B = A.amount_in_cents) != null ? B : 0) / 100,
                    label: (0, a.we)(
                      "#FacetedBrowse_Price_Under",
                      (g = A.formatted_amount) != null ? g : "",
                    ),
                  };
                }),
                { price: void 0, label: (0, a.we)("#FacetedBrowse_Price_Any") },
              ]
            : [];
        }
        function j() {
          const I = (0, S.ce)(),
            A = (0, m.rW)(),
            { data: B } = (0, h.I)({ ...l(A, I), select: f });
          return B != null ? B : [];
        }
        function G(I, A) {
          return f(I.getQueryData(r(A)));
        }
      },
      3852: (V, U, t) => {
        "use strict";
        t.d(U, { hl: () => r, kP: () => C, pj: () => R, u: () => M });
        var m = t(90825),
          S = t(18210);
        function M(l, b, h) {
          var a;
          const f = l.name;
          if (
            (f == null ? void 0 : f.length) > 0 &&
            (a = f[0]) != null &&
            a.startsWith("#tagid_")
          ) {
            const j = parseInt(f[0].substring(7));
            if (j > 0) return h && h[j];
          }
          return (0, S.we)((S.NT.GetWithFallback(f, b) || "").trim());
        }
        function R(l) {
          return String(l.type) + l.id;
        }
        function C(l, b) {
          return (
            l.jsondata.item_source_type != null &&
            l.jsondata.item_source_type !== m.w.k_ETaggedItems
          );
        }
        function r(l) {
          for (const b of l.facetValues)
            if (b.filter != null) {
              for (const h of b.filter.clauses)
                for (const a of h.or_tags) if (a.startsWith("[Opt]")) return !0;
            }
          return !1;
        }
      },
      24805: (V, U, t) => {
        "use strict";
        t.d(U, { Xh: () => f, cU: () => j, tf: () => I, wl: () => G });
        var m = t(99412),
          S = t(18735),
          M = t(3367),
          R = t(19619),
          C = t(10142),
          r = t(29543),
          l = t(3166),
          b = Object.defineProperty,
          h = (_, n, y) =>
            n in _
              ? b(_, n, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: y,
                })
              : (_[n] = y),
          a = (_, n, y) => h(_, typeof n != "symbol" ? n + "" : n, y);
        const f = {
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
        class j {
          constructor() {
            a(this, "m_setAlreadyAdded", new Set());
          }
          Reset() {
            this.m_setAlreadyAdded = new Set();
          }
          BHasAppID(n) {
            return this.m_setAlreadyAdded.has("a" + n);
          }
          BHasPackageID(n) {
            return this.m_setAlreadyAdded.has("s" + n);
          }
          BHasBundleID(n) {
            return this.m_setAlreadyAdded.has("b" + n);
          }
          BHasStoreItemKey(n) {
            return this.m_setAlreadyAdded.has(
              this.ConvertStoreItemKeyToUniqueKey(n),
            );
          }
          AddStoreItemKey(n) {
            this.m_setAlreadyAdded.add(this.ConvertStoreItemKeyToUniqueKey(n));
          }
          ConvertStoreItemKeyToUniqueKey(n) {
            switch (n.item_type) {
              default:
              case "app":
                return "a" + n.id;
              case "sub":
                return "s" + n.id;
              case "bundle":
                return "b" + n.id;
            }
          }
        }
        const G = 4;
        function I(_, n, y, P, D, E) {
          var e;
          const s = new Array(),
            o = new Array(),
            d = new Array(),
            c = new Array();
          if (!_ || _.length == 0) return s;
          const O = [
            r.by.k_RejectSupportedLanguage,
            r.by.k_RejectAlreadyDisplayed,
            r.by.k_RejectNoTrailer,
          ];
          for (let u of _) {
            let L = u.id,
              i = r.by.k_NotRejected;
            switch (u.item_type) {
              case "sub":
                const p = C.A.Get().GetPackage(L);
                if (
                  ((e = p == null ? void 0 : p.GetIncludedAppIDs()) == null
                    ? void 0
                    : e.length) !== 1
                ) {
                  i = x(L, n, P, !0);
                  break;
                }
                L = p.GetIncludedAppIDs()[0];
              case "app":
                i = F(L, n, y, P, !0);
                break;
              case "bundle":
                i = w(L, n, P, !0);
                break;
            }
            if (
              (i == r.by.k_NotRejected
                ? ((u.rejected = r.by.k_NotRejected),
                  s.push({ ...u, priority: 1 }))
                : O.includes(i)
                  ? ((u.rejected = r.by.k_NotRejected), o.push(u))
                  : ((u.rejected = i),
                    i == r.by.k_RejectIgnoredGame ? d.push(u) : c.push(u)),
              s.length > D)
            )
              break;
          }
          return (
            s.length < D &&
              (A(s, o, E, 2),
              s.length < E &&
                n.enforce_minimum &&
                (A(s, d, E, 3), A(s, c, E, G))),
            s
          );
        }
        function A(_, n, y, P) {
          for (let D = 0; _.length < y && D < n.length; ++D)
            _.push({ ...n[D], priority: P });
        }
        function B(_, n) {
          var y, P, D, E;
          const e = R.Fm.Get();
          if (
            n.only_current_platform &&
            e.BHasPlatformPreferenceSet() &&
            !(
              (((y = _.GetPlatforms()) == null ? void 0 : y.windows) &&
                e.BIsPreferredPlatform("win")) ||
              (((P = _.GetPlatforms()) == null ? void 0 : P.mac) &&
                e.BIsPreferredPlatform("mac")) ||
              (((D = _.GetPlatforms()) == null ? void 0 : D.steamos_linux) &&
                e.BIsPreferredPlatform("linux"))
            )
          )
            return r.by.k_RejectWrongPlatform;
          if (!n.prepurchase && _.BIsComingSoon())
            return r.by.k_RejectNoComingSoon;
          const s = _.GetPlatforms();
          return !n.virtual_reality &&
            s &&
            s.vr_support &&
            s.vr_support.vrhmd_only
            ? r.by.k_RejectNoVR
            : (E = _.GetAllCreatorClanIDs()) != null &&
                E.some((o) => e.BIsIgnoringCurator(o))
              ? r.by.k_RejectCreatorClan
              : r.by.k_NotRejected;
        }
        function g(_, n) {
          var y;
          if (n.localized) {
            const P = (0, m.sfN)(l.TS.LANGUAGE);
            if (
              !(
                (y = _.GetAllLanguagesWithSomeSupport()) != null &&
                y.includes(P)
              )
            )
              return r.by.k_RejectSupportedLanguage;
          }
          return r.by.k_NotRejected;
        }
        function F(_, n, y, P, D) {
          const E = C.A.Get().GetApp(_);
          if (!E) return r.by.k_RejectNotLoaded;
          const e = B(E, n);
          if (e != r.by.k_NotRejected) return e;
          const s = R.Fm.Get();
          if (s.BIsGameIgnored(_)) return r.by.k_RejectIgnoredGame;
          if (s.BExcludeTagIDs(E.GetTagIDs()))
            return r.by.k_RejectIgnoreGameTags;
          if (s.BExcludesContentDescriptor(E.GetContentDescriptorIDs()))
            return r.by.k_RejectIgnoreContentDescriptors;
          if (!n.early_access && E.BIsEarlyAccess())
            return r.by.k_RejectEarlyAccess;
          const o = E.GetAppType();
          if (!n.software && o == M.uE.Sv) return r.by.k_RejectSoftware;
          if (n.games_already_in_library && s.BIsGameOwned(_))
            return r.by.k_RejectInLibrary;
          if (n.games_not_in_library && !s.BIsGameOwned(_))
            return r.by.k_RejectNotInLibrary;
          if (!n.video && [M.uE.Wz, M.uE.gQ, M.uE.ID].includes(o))
            return r.by.k_RejectVideo;
          if (n.has_discount) {
            const d = E.GetBestPurchaseOption();
            if (!d || !d.discount_pct) return r.by.k_RejectNoDiscount;
          }
          return y != "adultonly" &&
            n.no_ao_content &&
            (E.HasContentDescriptorID(S.u7) || E.HasContentDescriptorID(S.T4))
            ? r.by.k_RejectAO
            : o == M.uE.ue &&
                n.games_already_in_library &&
                s.BIsGameOwned(E.GetParentAppID() || 0)
              ? r.by.k_RejectInLibrary
              : D
                ? (o == M.uE.ue && P.BHasAppID(E.GetParentAppID() || 0)) ||
                  P.BHasAppID(_)
                  ? r.by.k_RejectAlreadyDisplayed
                  : n.has_trailer && !E.BHasTrailers(!1)
                    ? r.by.k_RejectNoTrailer
                    : g(E, n)
                : r.by.k_NotRejected;
        }
        function K(_, n) {
          const y = R.Fm.Get();
          let P = !1;
          for (let D of _) {
            if (y.BIsGameIgnored(D)) return r.by.k_RejectIgnoredGame;
            y.BIsGameOwned(D) && (P = !0);
          }
          return n.games_not_in_library && P
            ? r.by.k_RejectInLibrary
            : n.games_not_in_library && !P
              ? r.by.k_RejectNotInLibrary
              : r.by.k_NotRejected;
        }
        function x(_, n, y, P) {
          const D = C.A.Get().GetPackage(_);
          if (!D) return r.by.k_RejectNotLoaded;
          const E = B(D, n);
          if (E != r.by.k_NotRejected) return E;
          const e = K(D.GetIncludedAppIDs(), n);
          if (e != r.by.k_NotRejected) return e;
          const s = R.Fm.Get();
          return n.games_already_in_library && s.BOwnsPackage(_)
            ? r.by.k_RejectInLibrary
            : s.BIsPackageIgnored(_)
              ? r.by.k_RejectIgnoredGame
              : P
                ? y.BHasPackageID(_)
                  ? r.by.k_RejectAlreadyDisplayed
                  : g(D, n)
                : r.by.k_NotRejected;
        }
        function w(_, n, y, P) {
          const D = C.A.Get().GetBundle(_);
          if (!D) return r.by.k_RejectNotLoaded;
          const E = B(D, n);
          if (E != r.by.k_NotRejected) return E;
          const e = K(D.GetIncludedAppIDs(), n);
          return e != r.by.k_NotRejected
            ? e
            : P
              ? y.BHasBundleID(_)
                ? r.by.k_RejectAlreadyDisplayed
                : g(D, n)
              : r.by.k_NotRejected;
        }
      },
      24110: (V, U, t) => {
        "use strict";
        t.d(U, { f: () => b });
        var m = t(71742);
        function S(h) {
          (0, m.wT)(!0, "Unexpected code running in SSR Server: " + h);
        }
        var M = t(3166),
          R = Object.defineProperty,
          C = (h, a, f) =>
            a in h
              ? R(h, a, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: f,
                })
              : (h[a] = f),
          r = (h, a, f) => C(h, typeof a != "symbol" ? a + "" : a, f);
        const l = class Q {
          constructor() {
            r(this, "m_HomeView");
            const a = (0, M.Tc)("home_view_setting", "application_config");
            this.ValidateHomeViewData(a) && this.SetHomeViewSetting(a);
            const f = (0, M.Tc)(
              "home_view_setting_override",
              "application_config",
            );
            this.ValidateHomeViewDataOverride(f) &&
              this.SetHomeViewSettingOverride(f);
          }
          BHasHomeView() {
            return !!this.m_HomeView;
          }
          GetHomeView() {
            var a;
            return (a = this.m_HomeView) == null ? void 0 : a.home;
          }
          static Get() {
            return (
              Q.s_globalSingletonStore ||
                (S("CHomeViewStore.s_globalSingletonStore"),
                (Q.s_globalSingletonStore = new Q())),
              Q.s_globalSingletonStore
            );
          }
          ValidateHomeViewData(a) {
            const f = a;
            return (
              f &&
              typeof f.home == "object" &&
              typeof f.main_cluster == "object"
            );
          }
          SetHomeViewSetting(a) {
            this.m_HomeView = a;
          }
          ValidateHomeViewDataOverride(a) {
            const f = a;
            return (
              f &&
              (!f.all || typeof f.all == "object") &&
              (!f.maincap || typeof f.maincap == "object")
            );
          }
          SetHomeViewSettingOverride(a) {
            this.m_HomeView
              ? (this.m_HomeView.home = {
                  ...this.m_HomeView.home,
                  ...(a == null ? void 0 : a.all),
                  ...(a == null ? void 0 : a.maincap),
                })
              : (this.m_HomeView = {
                  home: {
                    ...(a == null ? void 0 : a.all),
                    ...(a == null ? void 0 : a.maincap),
                  },
                });
          }
        };
        r(l, "s_globalSingletonStore");
        let b = l;
      },
      53025: (V, U, t) => {
        "use strict";
        t.d(U, { $: () => f });
        var m = t(41735),
          S = t.n(m),
          M = t(3166),
          R = t(77495),
          C = t(90825),
          r = t(72604),
          l = Object.defineProperty,
          b = (j, G, I) =>
            G in j
              ? l(j, G, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: I,
                })
              : (j[G] = I),
          h = (j, G, I) => b(j, typeof G != "symbol" ? G + "" : G, I);
        const a = class H extends R.ZQ {
          async DeleteOldAnnouncement(G, I) {
            let A = new URLSearchParams();
            A.append("sessionid", (0, M.KC)());
            let B =
                M.TS.COMMUNITY_BASE_URL +
                "/gid/" +
                G.ConvertTo64BitString() +
                "/announcements/ajaxdeleteannouncement/" +
                I,
              g = await S().post(B, A);
            if (g.data.success != r.R) throw g.data;
            return this.RemoveGIDFromList(G, C.cB + I), g.data;
          }
          static Get() {
            return (
              H.sm_Instance ||
                ((H.sm_Instance = new H()), H.sm_Instance.Init()),
              H.sm_Instance
            );
          }
          static GetSummaryStore() {
            return (
              H.sm_SummaryInstance ||
                ((H.sm_SummaryInstance = new H(!0)),
                H.sm_SummaryInstance.Init()),
              H.sm_SummaryInstance
            );
          }
        };
        h(a, "sm_Instance"), h(a, "sm_SummaryInstance");
        let f = a;
      },
      19188: (V, U, t) => {
        "use strict";
        t.d(U, { N: () => D });
        var m = t(7850),
          S = t(41735),
          M = t.n(S),
          R = t(75844),
          C = t(90626),
          r = t(90537),
          l = t(58483),
          b = t(73085),
          h = t(2801),
          a = t(88843),
          f = t.n(a),
          j = t(64641),
          G = t.n(j),
          I = t(85599),
          A = t(34592),
          B = t(3166),
          g = t(72609),
          F = t(19619),
          K = t(53107),
          x = t(25792),
          w = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          n = (e, s, o) =>
            s in e
              ? w(e, s, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: o,
                })
              : (e[s] = o),
          y = (e, s, o, d) => {
            for (
              var c = d > 1 ? void 0 : d ? _(s, o) : s, O = e.length - 1, u;
              O >= 0;
              O--
            )
              (u = e[O]) && (c = (d ? u(s, o, c) : u(c)) || c);
            return d && c && w(s, o, c), c;
          },
          P = (e, s, o) => n(e, typeof s != "symbol" ? s + "" : s, o);
        const D = (e) => {
          let { bShowOnlyInitialEvent: s } = e;
          const o = (0, B.Qn)(),
            d = (0, r.Y)();
          return (0, m.jsx)(x.tH, {
            children: (0, m.jsx)(E, {
              ...e,
              bShowOnlyInitialEvent: s || o,
              tracker: d,
            }),
          });
        };
        let E = class extends C.Component {
          constructor() {
            super(...arguments),
              P(this, "state", {
                bLoading: !1,
                eventModel: this.props.eventModel,
              }),
              P(this, "m_refParent", C.createRef()),
              P(this, "m_cancelSignal", M().CancelToken.source());
          }
          componentDidMount() {
            this.state.eventModel ||
              this.setState({ bLoading: !0 }, this.LoadEvent);
            let e = this.GetBodyElement();
            e &&
              this.props.bPrimaryPageFeature &&
              e.classList.add(a.BodyNoScroll);
          }
          componentWillUnmount() {
            this.m_cancelSignal.cancel("EventInfiniteScrollModal unmounting");
            let e = this.GetBodyElement();
            e &&
              this.props.bPrimaryPageFeature &&
              e.classList.remove(a.BodyNoScroll);
          }
          GetBodyElement() {
            return this.m_refParent.current
              ? this.m_refParent.current.closest("body")
              : null;
          }
          async LoadEvent() {
            const {
              appid: e,
              clanSteamID: s,
              announcementGID: o,
              partnerEventStore: d,
              additionalParams: c,
            } = this.props;
            d.LoadAdjacentPartnerEventsByAnnouncement(
              o,
              s,
              e,
              0,
              3,
              c,
              this.m_cancelSignal,
            )
              .then((O) => {
                O.length > 0
                  ? this.setState(
                      { bLoading: !1, eventModel: O[0] },
                      this.HandleReadEvent,
                    )
                  : (this.props.onEventNotFound && this.props.onEventNotFound(),
                    this.setState({ bLoading: !1 }));
              })
              .catch((O) => {
                let u = (0, A.H)(O);
                console.error(
                  "EventInfiniteScrollModal failed " + u.strErrorMsg,
                  u,
                ),
                  this.setState({ bLoading: !1 });
              });
          }
          async HandleReadEvent() {
            const { eventModel: e } = this.state,
              { trackingLocation: s, tracker: o } = this.props;
            e && e.BIsPartnerEvent() && (o.RecordEventRead(e, s), o.Flush());
          }
          render() {
            const { bShowOnlyInitialEvent: e } = this.props,
              { bLoading: s, eventModel: o } = this.state;
            if (s)
              return (0, m.jsx)(h.EN, {
                active: !0,
                children: (0, m.jsx)("div", {
                  className: G().FlexCenter,
                  style: { height: "400px" },
                  children: (0, m.jsx)(I.t, {}),
                }),
              });
            const {
              closeModal: d,
              appid: c,
              clanSteamID: O,
              className: u,
              partnerEventStore: L,
              showAppHeader: i,
              bPrimaryPageFeature: p,
              additionalParams: v,
              eventClassName: T,
            } = this.props;
            let W;
            g.TS.IN_CLIENT &&
              o != null &&
              o.appid &&
              (F.Fm.Get().HintLoad(),
              F.Fm.Get().BOwnsApp(o.appid) &&
                (W = (z) =>
                  (0, K.EP)(z, "steam://nav/games/details/" + o.appid)));
            const N = (0, m.jsx)(l.sU, {
              children: (z) =>
                (0, m.jsx)(b.AD, {
                  initialEvent: o,
                  appid: c,
                  clanSteamID: O,
                  partnerEventStore: L,
                  emoticonStore: z,
                  closeModal: !p && d,
                  showAppHeader: i,
                  bShowOnlyInitialEvent: e,
                  additionalParams: v,
                  eventClassName: T,
                  onAppIconClick: W,
                }),
            });
            return p
              ? N
              : (0, m.jsx)(h.EN, {
                  active: !0,
                  children: (0, m.jsx)("div", { className: u, children: N }),
                });
          }
        };
        E = y([R.PA], E);
      },
      15901: (V, U, t) => {
        "use strict";
        t.d(U, {
          AX: () => n,
          H2: () => x,
          Li: () => _,
          S7: () => g,
          WD: () => D,
          f4: () => E,
          gL: () => P,
          jy: () => w,
          nt: () => K,
          sd: () => B,
          tJ: () => F,
        });
        var m = t(24805),
          S = t(29543),
          M = t(92025),
          R = t(99412),
          C = t(3367),
          r = t(19619),
          l = t(10142),
          b = t(3166),
          h = t(24110),
          a = t(71742),
          f = t(14947),
          j = t(20615),
          G = t(3852),
          I = t(40497),
          A = t(90825);
        function B(e) {
          return l.A.Get().BIsStoreItemMissing(e.id, (0, S.SW)(e.type));
        }
        function g(e, s, o) {
          const d = new Array();
          return (
            e == null || e.forEach((c) => d.push({ id: c, type: "game" })),
            s == null || s.forEach((c) => d.push({ id: c, type: "sub" })),
            o == null || o.forEach((c) => d.push({ id: c, type: "bundle" })),
            d
          );
        }
        function F(e) {
          var s, o;
          const d = l.A.Get().GetStoreItem(e.id, (0, S.SW)(e.type));
          return (
            ((o =
              (s = d == null ? void 0 : d.GetBestPurchaseOption()) == null
                ? void 0
                : s.discount_pct) != null
              ? o
              : 0) > 0
          );
        }
        function K(e) {
          var s;
          if (!((s = h.f.Get().GetHomeView()) != null && s.localized))
            return !0;
          const o = l.A.Get().GetStoreItem(e.id, (0, S.SW)(e.type));
          return o
            ? r.Fm.Get().BIsAnyLanguageEnabled(
                o.GetAllLanguagesWithSomeSupport(),
              )
            : !0;
        }
        async function x(e, s, o) {
          if (!e || e.length == 0) return [];
          const d = e.filter((i) => (0, M.fp)(i.type)).map((i) => i.id),
            c = e.filter((i) => i.type === "sub").map((i) => i.id),
            O = e.filter((i) => i.type === "bundle").map((i) => i.id);
          {
            const i = d.filter((T) => !l.A.Get().BHasApp(T, s)),
              p = c.filter((T) => !l.A.Get().BHasApp(T, s)),
              v = O.filter((T) => !l.A.Get().BHasApp(T, s));
            (i.length > 0 || p.length > 0 || v.length > 0) &&
              (await Promise.all([
                l.A.Get().QueueMultipleAppRequests(i, s),
                l.A.Get().QueueMultiplePackageRequests(p, s),
                l.A.Get().QueueMultipleBundleRequests(v, s),
              ]));
          }
          const u = new Set();
          O == null ||
            O.forEach((i) => {
              const p = l.A.Get().GetBundle(i);
              p == null || p.GetIncludedAppIDs().forEach((v) => u.add(v));
            }),
            c == null ||
              c.forEach((i) => {
                const p = l.A.Get().GetPackage(i);
                p == null || p.GetIncludedAppIDs().forEach((v) => u.add(v));
              });
          const L = Array.from(u).filter((i) => !l.A.Get().BHasApp(i, s));
          if (
            (L.length > 0 && (await l.A.Get().QueueMultipleAppRequests(L, s)),
            d.forEach((i) => u.add(i)),
            o)
          ) {
            const i = Array.from(u)
              .map((p) => {
                const v = l.A.Get().GetApp(p),
                  T = v == null ? void 0 : v.GetParentAppID();
                return T ? (u.add(T), T) : null;
              })
              .filter((p) => p !== null)
              .filter((p) => !l.A.Get().BHasApp(p, s));
            i.length > 0 && (await l.A.Get().QueueMultipleAppRequests(i, s));
          }
          return Array.from(u).filter((i) => {
            const p = l.A.Get().GetApp(i);
            return p && !p.GetParentAppID();
          });
        }
        const w = {
          include_tag_count: 20,
          include_basic_info: !0,
          include_supported_languages: !0,
        };
        function _(e) {
          var s;
          if (!e) return !0;
          const o = r.Fm.Get();
          if (
            ((0, a.wT)(o.BIsLoaded(), "Dynamic Store not loaded"),
            e.GetStoreItemType() == C.c6.qI)
          ) {
            const c = e.GetParentAppID();
            if (
              o.BIsGameIgnored(e.GetAppID()) ||
              (c !== void 0 && o.BIsGameIgnored(c))
            )
              return !0;
          }
          if (
            o.BExcludesContentDescriptor(e.GetContentDescriptorIDs()) ||
            o.BExcludeTagIDs(e.GetTagIDs()) ||
            e.GetAllCreatorClanIDs().some((c) => o.BIsIgnoringCurator(c))
          )
            return !0;
          if ((s = h.f.Get().GetHomeView()) == null ? void 0 : s.localized) {
            const c = e.GetAllLanguagesWithSomeSupport();
            if (
              c.length > 0 &&
              !e.BHasSomeLanguageSupport(R.Bhc) &&
              !o.BIsAnyLanguageEnabled(c)
            )
              return !0;
          }
          return !1;
        }
        async function n(e, s, o, d) {
          let c = 0,
            O = 0;
          const u = [];
          await x(e, m.Xh, s);
          for (const L of e) {
            const i = l.A.Get().GetStoreItem(L.id, (0, S.SW)(L.type));
            if (!i) {
              c++;
              continue;
            }
            const p = i
              .GetIncludedAppIDs()
              .map((v) => l.A.Get().GetApp(v))
              .filter((v) => !!v);
            if ((p.push(i), s)) {
              const v = new Set(
                  p.map((W) => W.GetParentAppID()).filter((W) => !!W),
                ),
                T = Array.from(v)
                  .map((W) => l.A.Get().GetApp(W))
                  .filter((W) => !!W);
              T && p.push(...T);
            }
            p.some(d || _)
              ? (O++, o && (r.Fm.Get().BIsStoreItemOwned(i) || o.push(L)))
              : u.push(L);
          }
          return u;
        }
        async function y(e, s, o, d, c, O, u) {
          let i = await n(
            e,
            s,
            u,
            c
              ? (v) =>
                  !v ||
                  r.Fm.Get().BExcludesContentDescriptor(
                    v.GetContentDescriptorIDs(),
                  ) ||
                  r.Fm.Get().BExcludeTagIDs(v.GetTagIDs())
              : _,
          );
          const p = [];
          for (const v of i) {
            const T = l.A.Get().GetStoreItem(v.id, (0, S.SW)(v.type));
            if (!T) continue;
            const W = T == null ? void 0 : T.GetIncludedAppIDsOrSelf();
            let N = !1;
            o && (N = N || W.every((z) => r.Fm.Get().BIsGameOwned(z))),
              d && (N = N || W.every((z) => r.Fm.Get().BIsGameWishlisted(z))),
              O && (N = N || W.every((z) => r.Fm.Get().BIsGameIgnored(z))),
              N ? u && u.push(v) : p.push(v);
          }
          return p;
        }
        function P() {
          const e = r.Fm.Get();
          if (e.BIsLoaded())
            return {
              bSignedIn: !!b.iA.logged_in,
              ePrimaryLanguage: e.GetPrimaryLanguage(),
              setSecondaryLanguages: e.GetSecondaryLanguages(),
              setExcludedContentDescriptors: new Set(
                e.ExcludedContentDescriptor,
              ),
            };
        }
        function D() {
          return (0, j._)(I.L, b.TS.COUNTRY);
        }
        async function E(e, s, o, d) {
          const c = e.BHasHideIgnoredItemsFacetValue(),
            O = e.BIsUserPreferenceEnabled(A.yX.k_EHideOwnedItems),
            u = e.BIsUserPreferenceEnabled(A.yX.k_EHideWishlistedItems),
            L = e.BIsUserPreferenceEnabled(A.yX.k_EHideIgnoredItems),
            i = [],
            p = await y(s, o, O, u, c, L, i);
          return (
            (0, f.h5)(() => {
              e.SetCapsulesRemovedByUserPreferenceFilters(new Set(i.map(G.pj)));
            }),
            d == null || d.push(...i),
            p
          );
        }
      },
      12932: (V, U, t) => {
        "use strict";
        t.d(U, { AQ: () => I, pn: () => B, qx: () => A });
        var m = t(7850),
          S = t(19316),
          M = t(18210),
          R = t(36118),
          C = t(90626),
          r = t(36707),
          l = t(95695),
          b = t.n(l),
          h = t(25792),
          a = t(64734),
          f = t.n(a),
          j = t(65946),
          G = t(11243);
        function I(g) {
          const {
              title: F,
              tooltip: K,
              getMinimized: x,
              toggleMinimized: w,
              className: _,
              children: n,
              elAdditionalButtons: y,
            } = g,
            P = (0, j.q3)(() => x());
          return (0, m.jsxs)(m.Fragment, {
            children: [
              (0, m.jsxs)("div", {
                className: (0, r.A)(
                  _,
                  a.SectionTitleHeader,
                  a.required_title,
                  "SectionTitleHeader",
                ),
                children: [
                  (0, m.jsxs)("div", {
                    className: (0, r.A)(
                      l.CollapsableSectionTitle,
                      "EventEditorTextTitle",
                    ),
                    children: [F, !!K && (0, m.jsx)(G.o, { tooltip: K })],
                  }),
                  (0, m.jsxs)("div", {
                    className: a.SectionTitleButtons,
                    children: [
                      y,
                      (0, m.jsx)(B, { bIsMinimized: P, fnToggleMinimize: w }),
                    ],
                  }),
                ],
              }),
              !P && (0, m.jsx)(h.tH, { children: n }),
            ],
          });
        }
        function A(g) {
          const [F, K] = C.useState(!!g.bStartMinimized);
          return (0, m.jsx)(I, {
            ...g,
            getMinimized: () => F,
            toggleMinimized: () => K(!F),
            children: g.children,
          });
        }
        function B(g) {
          const { bIsMinimized: F, fnToggleMinimize: K } = g,
            x = F ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
          return (0, m.jsx)(S.$n, {
            "data-tooltip-text": (0, M.we)(x),
            onClick: K,
            children: g.bIsMinimized
              ? (0, m.jsx)(R.hz4, {})
              : (0, m.jsx)(R.Xjb, {}),
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
