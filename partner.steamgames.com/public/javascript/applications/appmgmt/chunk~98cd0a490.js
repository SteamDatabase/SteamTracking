/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [7241],
  {
    24448: (e, t, r) => {
      r.d(t, { Gr: () => m, Jq: () => f, si: () => h, y$: () => g });
      var i = r(33940),
        a = r(52868),
        s = r.n(a),
        n = r(50265),
        o = r(89526),
        c = r(4556),
        l = r(47165),
        u = r(23801),
        p = r(23217),
        P = r(32765);
      class d {
        constructor() {
          (this.m_mapProfiles = new Map()),
            (this.m_mapProfilesLoading = new Map());
        }
        LoadProfiles(e, t) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            (0, u.X)(
              e.length <= 500,
              "Check LoadProfiles, requesting too many steam IDs",
            );
            let r = e.filter(
              (e) =>
                !this.m_mapProfiles.has(e) && !this.m_mapProfilesLoading.has(e),
            );
            if (0 == r.length) return this.m_mapProfilesLoading.get(e[0]);
            let i = P.De.COMMUNITY_BASE_URL + "actions/ajaxresolveusers",
              a = s().get(i, {
                params: { steamids: r.join(",") },
                withCredentials: !0,
                cancelToken: null == t ? void 0 : t.token,
              });
            r.forEach((e) => this.m_mapProfilesLoading.set(e, a));
            let n = yield a;
            n.data &&
              200 == n.status &&
              n.data.forEach((e) => {
                (e.avatar_hash = e.avatar_url),
                  (e.avatar_url_medium = (0, c.U)(e.avatar_url, "medium")),
                  (e.avatar_url_full = (0, c.U)(e.avatar_url, "full")),
                  (e.avatar_url = (0, c.U)(e.avatar_url)),
                  this.m_mapProfiles.set(e.steamid, e),
                  this.m_mapProfilesLoading.delete(e.steamid);
              });
          });
        }
        GetProfile(e) {
          return this.m_mapProfiles.get(e);
        }
        GetProfileByAccountID(e) {
          return this.m_mapProfiles.get(
            l.K.InitFromAccountID(e).ConvertTo64BitString(),
          );
        }
        GetProfileBySteamID(e) {
          return this.m_mapProfiles.get(e.ConvertTo64BitString());
        }
        BHasProfile(e) {
          return this.m_mapProfiles.has(e);
        }
        BHasProfileByAccountID(e) {
          return this.m_mapProfiles.has(
            l.K.InitFromAccountID(e).ConvertTo64BitString(),
          );
        }
        BHasProfileBySteamID(e) {
          return this.m_mapProfiles.has(e.ConvertTo64BitString());
        }
        BHasAllProfilesBySteamID(e) {
          return !e.some((e) => !this.BHasProfileBySteamID(e));
        }
        GetProfileURLBySteamID(e) {
          const t = this.GetProfileBySteamID(e);
          return t && t.profile_url
            ? P.De.COMMUNITY_BASE_URL + "id/" + t.profile_url
            : P.De.COMMUNITY_BASE_URL + "profiles/" + e.ConvertTo64BitString();
        }
        GetPersonaNameBySteamID(e) {
          const t = this.GetProfileBySteamID(e);
          return t && t.persona_name ? t.persona_name : "";
        }
      }
      (0, i.gn)([n.LO], d.prototype, "m_mapProfiles", void 0);
      const g = new d();
      function m(e) {
        const t = o.useMemo(
            () => (e ? ("string" == typeof e ? new l.K(e) : e) : null),
            [e],
          ),
          [r, i] = (0, o.useState)(!!t && !g.BHasProfileBySteamID(t));
        (0, o.useEffect)(() => {
          const e = s().CancelToken.source();
          return (
            t &&
              !g.BHasProfileBySteamID(t) &&
              g
                .LoadProfiles([t.ConvertTo64BitString()])
                .catch((e) => {
                  const r = (0, p.l)(e);
                  console.error(
                    "useUserProfile failed to load profile for " +
                      t.ConvertTo64BitString() +
                      ": " +
                      r.strErrorMsg,
                    r,
                  );
                })
                .finally(() => {
                  e.token.reason || i(!1);
                }),
            () => e.cancel("unmounting useUserProfile")
          );
        }, [e]);
        return [r, !!t && g.GetProfileBySteamID(t)];
      }
      function f(e) {
        return m(o.useMemo(() => (e ? l.K.InitFromAccountID(e) : null), [e]));
      }
      function h(e) {
        return (function (e) {
          const t = o.useMemo(
              () =>
                e
                  ? e.map((e) => ("string" == typeof e ? new l.K(e) : e))
                  : null,
              [e],
            ),
            [r, i] = (0, o.useState)(!!t && !g.BHasAllProfilesBySteamID(t));
          return (
            (0, o.useEffect)(() => {
              const e = s().CancelToken.source();
              return (
                t &&
                  !g.BHasAllProfilesBySteamID(t) &&
                  g
                    .LoadProfiles(t.map((e) => e.ConvertTo64BitString()))
                    .catch((e) => {
                      const r = (0, p.l)(e);
                      console.error(
                        "useUserProfile failed to load profile for list: " +
                          r.strErrorMsg,
                        (0, n.ZN)(t),
                        r,
                      );
                    })
                    .finally(() => {
                      e.token.reason || i(!1);
                    }),
                () => e.cancel("unmounting useAllUserProfile")
              );
            }, [t]),
            [r, !!t && t.map((e) => g.GetProfileBySteamID(e))]
          );
        })(o.useMemo(() => e.map((e) => l.K.InitFromAccountID(e)), [e]));
      }
      window.g_ProfileStore = g;
    },
    70903: (e, t, r) => {
      r.d(t, { N: () => p, a: () => u });
      var i = r(33940),
        a = r(89526),
        s = r(19094),
        n = r(92616),
        o = r(58218),
        c = r(23801),
        l = r(32765);
      function u(e = !1) {
        return (0, i.mG)(this, void 0, void 0, function* () {
          if (e && n.Z.BIsInitialized()) return;
          const t = (0, l.kQ)(
            "partnerbrowse_webapi_token",
            "application_config",
          );
          (0, c.X)(Boolean(t), "require partnerbrowse_webapi_token");
          const r = new s.J(l.De.WEBAPI_BASE_URL, t);
          return (
            ("dev" != l.De.WEB_UNIVERSE && "beta" != l.De.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: Initializing CStoreItemCache with access token",
                t,
              ),
            n.Z.Initialize(r, l.L7.is_partner_member)
          );
        });
      }
      function p() {
        const e = (0, o.T)("usePartnerStoreBrowseAPI"),
          [t, r] = (0, a.useState)(!1);
        return (
          (0, a.useEffect)(() => {
            u().then(() => {
              var t;
              (null === (t = null == e ? void 0 : e.token) || void 0 === t
                ? void 0
                : t.reason) || r(!0);
            });
          }, []),
          t
        );
      }
    },
    5029: (e, t, r) => {
      r.d(t, { Ar: () => c, Wo: () => l, i9: () => o, ks: () => s });
      var i = r(89526),
        a = r(59934);
      function s(e, t) {
        let r;
        "string" == typeof e
          ? (r = e)
          : "location" in e
          ? (r = e.location.search)
          : "search" in e && (r = e.search);
        const i = new URLSearchParams(r.substring(1));
        if (i.has(t)) {
          const e = i.getAll(t);
          return e[e.length - 1];
        }
      }
      const n = (e) => null != e;
      function o(e, t, r, i = !1) {
        const a = new URLSearchParams(e.location.search.substring(1));
        a.delete(t),
          n(r) && a.append(t, r),
          i
            ? e.replace(`?${a.toString()}`, Object.assign({}, e.location.state))
            : e.push(`?${a.toString()}`);
      }
      function c(e, t) {
        const r = (0, a.k6)(),
          c = (0, a.TH)(),
          l = (0, i.useMemo)(() => {
            const r = s(c.search, e);
            return n(r)
              ? n(t)
                ? "boolean" == typeof t
                  ? t.constructor("false" !== r)
                  : t.constructor(r)
                : r
              : t;
          }, [c.search, e, t]),
          u = (0, i.useCallback)(
            (t) => {
              o(r, e, n(t) ? String(t) : null);
            },
            [r, e],
          );
        return [l, u];
      }
      function l(e, t, r = !1) {
        const i = new URLSearchParams(e.location.search.substring(1));
        for (const e in t)
          if (t.hasOwnProperty(e)) {
            const r = t[e];
            i.delete(e), n(r) && i.append(e, r);
          }
        r
          ? e.replace(`?${i.toString()}`, Object.assign({}, e.location.state))
          : e.push(`?${i.toString()}`);
      }
    },
    19533: (e, t, r) => {
      r.d(t, {
        $D: () => m,
        AM: () => g,
        Gd: () => d,
        MQ: () => l,
        NR: () => p,
        ew: () => o,
        vB: () => P,
        z: () => u,
      });
      var i = r(89526),
        a = r(85246),
        s = r(4306),
        n = r(32765);
      const o = "pn";
      class c {
        static Get() {
          return (
            c.s_Singleton || ((c.s_Singleton = new c()), c.s_Singleton.Init()),
            c.s_Singleton
          );
        }
        constructor() {
          (this.m_rgVisiblePackageIDs = []),
            (this.m_visiblePackageIDsCallbackList = new a.pB()),
            "dev" == n.De.WEB_UNIVERSE && (window.g_PackageGridStore = this);
        }
        Init() {
          let e = (0, n.kQ)("package_data", "application_config");
          e
            ? ((this.m_rgPackageIDs = e.map((e) => e.packageid)),
              (this.m_rgPackageData = e),
              (this.m_mapPackageData = new Map(e.map((e) => [e.packageid, e]))))
            : ((this.m_rgPackageIDs = (0, n.kQ)(
                "package_ids",
                "application_config",
              )),
              (this.m_mapPackageData = new Map())),
            ("dev" != n.De.WEB_UNIVERSE && "beta" != n.De.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackageGridStore loading payload: ",
                this.m_rgPackageIDs,
              ),
            "dev" != n.De.WEB_UNIVERSE ||
              Array.isArray(this.m_rgPackageIDs) ||
              console.error("CPackageGridStore Invalid payload");
        }
        UpdatePackageNameSearchState(e) {
          const t = e.getHeaderFilterValue("packageName"),
            r = new URL(window.location.href);
          t != decodeURIComponent(r.searchParams.get(o)) &&
            (t
              ? r.searchParams.set(o, encodeURIComponent(t))
              : r.searchParams.delete(o),
            window.history.replaceState({}, "", r.toString()));
        }
        UpdateVisiblePackageList(e) {
          const t = e.getGroups("visible").filter((e) => e.isVisible());
          (this.m_rgVisiblePackageIDs = []),
            t.forEach((e) =>
              e
                .getRows()
                .forEach((e) =>
                  this.m_rgVisiblePackageIDs.push(e.getData().packageID),
                ),
            ),
            this.m_visiblePackageIDsCallbackList.Dispatch(
              this.m_rgVisiblePackageIDs,
            ),
            this.UpdatePackageNameSearchState(e);
        }
      }
      function l() {
        return c.Get().m_rgPackageIDs;
      }
      function u() {
        return c.Get().m_rgPackageIDs;
      }
      function p() {
        return c.Get().m_rgPackageData;
      }
      function P(e) {
        let t = c.Get().m_mapPackageData.get(e);
        return t ? t.package_name : e.toString();
      }
      function d() {
        return i.useCallback((e) => c.Get().UpdateVisiblePackageList(e), []);
      }
      function g() {
        const [e, t] = i.useState(c.Get().m_rgVisiblePackageIDs);
        return (0, s.Qg)(c.Get().m_visiblePackageIDsCallbackList, t), e;
      }
      function m() {
        return i.useMemo(
          () => (0, n.kQ)("publisherid", "application_config"),
          [],
        );
      }
    },
    66104: (e, t, r) => {
      r.d(t, {
        $w: () => R,
        AN: () => X,
        FR: () => y,
        HV: () => G,
        HX: () => H,
        OB: () => j,
        OG: () => x,
        Ol: () => I,
        PP: () => C,
        R2: () => V,
        Rs: () => F,
        Tj: () => b,
        We: () => $,
        X1: () => U,
        Xx: () => i,
        _w: () => k,
        bS: () => T,
        dU: () => B,
        df: () => Q,
        j_: () => z,
        ju: () => A,
        np: () => Z,
        on: () => N,
        ps: () => K,
        qH: () => L,
        rX: () => O,
        sN: () => q,
        tu: () => w,
        uT: () => J,
        xm: () => Y,
        yh: () => W,
      });
      var i,
        a = r(33940),
        s = r(52868),
        n = r.n(s),
        o = r(89526),
        c = r(50265),
        l = r(42735),
        u = r(23217),
        p = r(85246),
        P = r(4306),
        d = r(81349),
        g = r(32765),
        m = r(19533),
        f = r(25125),
        h = r(23801);
      !(function (e) {
        (e[(e.k_EPriceProposalStateInvalid = 0)] =
          "k_EPriceProposalStateInvalid"),
          (e[(e.k_EPriceProposalStateActive = 1)] =
            "k_EPriceProposalStateActive"),
          (e[(e.k_EPriceProposalStateCanceled = 2)] =
            "k_EPriceProposalStateCanceled"),
          (e[(e.k_EPriceProposalStateApplied = 3)] =
            "k_EPriceProposalStateApplied"),
          (e[(e.k_EPriceProposalStateApproved = 4)] =
            "k_EPriceProposalStateApproved");
      })(i || (i = {}));
      class _ {
        static Get() {
          return (
            _.s_Singleton || ((_.s_Singleton = new _()), _.s_Singleton.Init()),
            _.s_Singleton
          );
        }
        constructor() {
          (this.m_mapPackagePrice = new Map()),
            (this.m_setRecurringSubscriptions = new Set()),
            (this.m_mapPriceProposals = new Map()),
            (this.m_mapLocalPackagePriceOverrides = new Map()),
            (this.m_mapPriceGridCellCallbackList = new Map()),
            (this.m_mapPackageOverridesCallbackList = new Map()),
            (this.m_allPriceOverridesCallbackList = new p.pB()),
            (this.m_mapOverridesPerPriceKey = new Map()),
            (this.m_mapCurrencyData = new Map()),
            (this.m_mapPriceKeyDescriptions = new Map()),
            (this.m_mapPriceGuidelines = new Map()),
            (this.m_rgPriceLevels = []),
            (this.m_strDisplayPriceKey = "USD"),
            (this.m_displayPriceKeyCallbackList = new p.pB()),
            "dev" == g.De.WEB_UNIVERSE && (window.g_PackagePricingStore = this);
        }
        Init() {
          const e = new Set(),
            t = (0, g.kQ)("base_prices", "application_config");
          if (
            (("dev" != g.De.WEB_UNIVERSE && "beta" != g.De.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading base price payload: ",
                t,
              ),
            t)
          )
            if (this.BIsPricePayloadValid(t))
              for (let r in t) {
                const i = t[r],
                  a = parseInt(r),
                  s = new Map();
                this.m_mapPackagePrice.set(a, s);
                for (let t in i) e.add(t.toUpperCase()), s.set(t, i[t]);
              }
            else
              "dev" == g.De.WEB_UNIVERSE &&
                console.error("Invalid base price payload");
          const r = (0, g.kQ)("recurring_subs", "application_config");
          if (
            (("dev" != g.De.WEB_UNIVERSE && "beta" != g.De.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading recurring subscriptions payload: ",
                r,
              ),
            r)
          )
            if (Array.isArray(r))
              for (const e of r) this.m_setRecurringSubscriptions.add(e);
            else
              "dev" == g.De.WEB_UNIVERSE &&
                console.error("Invalid recurring subscriptions payload");
          const i = (0, g.kQ)("pending_proposals", "application_config");
          if (
            (("dev" != g.De.WEB_UNIVERSE && "beta" != g.De.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading pending price proposal payload: ",
                i,
              ),
            i)
          )
            if (this.BIsPendingPricePayloadValid(i))
              for (let e in i) {
                const t = i[e],
                  r = parseInt(e);
                this.m_mapPriceProposals.set(r, t);
              }
            else
              "dev" == g.De.WEB_UNIVERSE &&
                console.error("Invalid pending price proposal payload");
          const a = (0, g.kQ)("pricing_guidelines", "application_config");
          if (
            (("dev" != g.De.WEB_UNIVERSE && "beta" != g.De.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading pricing guidelines payload: ",
                a,
              ),
            a)
          )
            if (this.BIsGuidelinesPayloadValid(a)) {
              for (let t in a) {
                const r = a[t],
                  i = new Map(),
                  s = 100 * parseInt(t.substring(3));
                this.m_rgPriceLevels.push(s),
                  this.m_mapPriceGuidelines.set(s, i);
                for (let t in r)
                  e.add(t.toUpperCase()),
                    i.set(t.toUpperCase(), parseInt(r[t]));
              }
              this.m_rgPriceLevels.sort((e, t) => e - t);
            } else
              "dev" == g.De.WEB_UNIVERSE &&
                console.error("Invalid pricing guidelines payload");
          this.m_rgKnownPriceKeys = Array.from(e).sort((e, t) =>
            (0, d.eT)(S(e), S(t)),
          );
          const s = (0, g.kQ)("currency_data", "application_config");
          if (
            (("dev" != g.De.WEB_UNIVERSE && "beta" != g.De.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading currency payload: ",
                s,
              ),
            s)
          )
            if (this.BIsCurrencyPayloadValid(s))
              for (let e in s) {
                const t = s[e];
                this.m_mapCurrencyData.set(e, t);
              }
            else
              "dev" == g.De.WEB_UNIVERSE &&
                console.error("Invalid currency payload");
          const n = (0, g.kQ)("currency_descriptions", "application_config");
          if (
            (("dev" != g.De.WEB_UNIVERSE && "beta" != g.De.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading currency descriptions: ",
                n,
              ),
            n)
          )
            if (this.BIsCurrencyDescriptionPayloadValid(n))
              for (let e in n) {
                const t = n[e];
                this.m_mapPriceKeyDescriptions.set(e, t);
              }
            else
              "dev" == g.De.WEB_UNIVERSE &&
                console.error("Invalid currency description payload");
        }
        BIsPricePayloadValid(e) {
          const t = e;
          if (!t || "object" != typeof t) return !1;
          for (let e in t) {
            if (isNaN(parseInt(e))) return !1;
            const r = t[e];
            if (!r || "object" != typeof r) return !1;
            for (let e in r)
              if ("string" != typeof e || "number" != typeof r[e]) return !1;
          }
          return !0;
        }
        BIsPendingPricePayloadValid(e) {
          const t = e;
          if (!t || "object" != typeof t) return !1;
          for (let e in t) {
            if (isNaN(parseInt(e))) return !1;
            const r = t[e];
            if (
              !r ||
              "object" != typeof r ||
              r.packageID !== parseInt(e) ||
              "object" != typeof r.prices
            )
              return !1;
          }
          return !0;
        }
        BIsGuidelinesPayloadValid(e) {
          const t = e;
          if (!t || "object" != typeof t) return !1;
          for (let e in t) {
            const r = t[e];
            if (!r || "object" != typeof r) return !1;
            for (let e in r)
              if ("string" != typeof e || isNaN(parseInt(r[e]))) return !1;
          }
          return !0;
        }
        BIsCurrencyPayloadValid(e) {
          const t = e;
          if (!t || "object" != typeof t) return !1;
          for (let e in t) {
            const r = t[e];
            if (!r || "object" != typeof r || r.strCode != e) return !1;
          }
          return !0;
        }
        BIsCurrencyDescriptionPayloadValid(e) {
          const t = e;
          if (!t || "object" != typeof t) return !1;
          for (let e in t) {
            const r = t[e];
            if (
              !r ||
              "object" != typeof r ||
              void 0 === r.bRequired ||
              void 0 === r.strDescription
            )
              return !1;
          }
          return !0;
        }
        BPriceKeyRequired(e) {
          var t, r;
          return (
            null !==
              (r =
                null === (t = this.m_mapPriceKeyDescriptions.get(e)) ||
                void 0 === t
                  ? void 0
                  : t.bRequired) &&
            void 0 !== r &&
            r
          );
        }
        GetMinimumBasePrice(e) {
          var t;
          return (
            (null === (t = this.m_mapPriceKeyDescriptions.get(e)) ||
            void 0 === t
              ? void 0
              : t.nLowestBase) || 0
          );
        }
        GetMinimumDiscountPrice(e) {
          var t;
          return (
            (null === (t = this.m_mapPriceKeyDescriptions.get(e)) ||
            void 0 === t
              ? void 0
              : t.nLowestDiscount) || 0
          );
        }
        GetPublishedPrice(e, t) {
          var r;
          return null === (r = this.m_mapPackagePrice.get(e)) || void 0 === r
            ? void 0
            : r.get(t);
        }
        GetProposedPrice(e, t) {
          var r;
          return null === (r = this.m_mapPriceProposals.get(e)) || void 0 === r
            ? void 0
            : r.prices[t];
        }
        GetSavedPrice(e, t) {
          var r;
          return null !== (r = this.GetProposedPrice(e, t)) && void 0 !== r
            ? r
            : this.GetPublishedPrice(e, t);
        }
        GetPrice(e, t) {
          var r, i;
          return null !==
            (i =
              null === (r = this.m_mapLocalPackagePriceOverrides.get(e)) ||
              void 0 === r
                ? void 0
                : r.get(t)) && void 0 !== i
            ? i
            : this.GetSavedPrice(e, t);
        }
        GetPriceGridCellCallbackList(e, t) {
          if (!e || !t) return null;
          this.m_mapPriceGridCellCallbackList.has(e) ||
            this.m_mapPriceGridCellCallbackList.set(e, new Map());
          const r = this.m_mapPriceGridCellCallbackList.get(e);
          return r.has(t) || r.set(t, new p.pB()), r.get(t);
        }
        GetPackageOverridesCallbackList(e) {
          if (!e) return null;
          let t = this.m_mapPackageOverridesCallbackList.get(e);
          return (
            t ||
              ((t = new p.pB()),
              this.m_mapPackageOverridesCallbackList.set(e, t)),
            t
          );
        }
        OverridePrice(e, t, r) {
          r != this.GetPrice(e, t) &&
            (this.m_mapLocalPackagePriceOverrides.has(e) ||
              this.m_mapLocalPackagePriceOverrides.set(e, new Map()),
            r == this.GetSavedPrice(e, t)
              ? this.m_mapLocalPackagePriceOverrides.get(e).delete(t)
              : this.m_mapLocalPackagePriceOverrides.get(e).set(t, r),
            this.GetPriceGridCellCallbackList(e, t).Dispatch(r),
            this.GetPackageOverridesCallbackList(e).Dispatch(),
            this.DispatchPriceOverridesCallbacks());
        }
        OverridePricesForPackage(e, t, r, i) {
          (0, h.X)(
            t.length == r.length,
            `price list size doesn't match ${t.length} != ${r.length}`,
          );
          for (let i = 0; i < t.length; ++i) {
            const a = t[i],
              s = r[i];
            this.m_mapLocalPackagePriceOverrides.has(e) ||
              this.m_mapLocalPackagePriceOverrides.set(e, new Map()),
              s == this.GetSavedPrice(e, a)
                ? this.m_mapLocalPackagePriceOverrides.get(e).delete(a)
                : this.m_mapLocalPackagePriceOverrides.get(e).set(a, s),
              this.GetPriceGridCellCallbackList(e, a).Dispatch(s);
          }
          this.GetPackageOverridesCallbackList(e).Dispatch(),
            i && this.DispatchPriceOverridesCallbacks();
        }
        DispatchPriceOverridesCallbacks() {
          this.m_allPriceOverridesCallbackList.Dispatch(
            this.GetAllLocalPriceOverrides(),
          ),
            this.UpdateOverridesPerPriceKey();
        }
        BHasLocalPriceOverrides(e) {
          var t;
          return (
            (null === (t = this.m_mapLocalPackagePriceOverrides.get(e)) ||
            void 0 === t
              ? void 0
              : t.size) > 0
          );
        }
        GetAllLocalPriceOverrides() {
          const e = [];
          return (
            this.m_mapLocalPackagePriceOverrides.forEach((t, r) =>
              t.forEach((t, i) => {
                const a = this.GetSavedPrice(r, i);
                e.push({
                  packageID: r,
                  strPriceKey: i,
                  nPriceInCents: t,
                  nOldPriceInCents: a,
                });
              }),
            ),
            e.sort(v),
            e
          );
        }
        BHasLocalPriceOverride(e, t) {
          let r = this.m_mapLocalPackagePriceOverrides.get(e);
          return !!r && r.has(t);
        }
        UpdateOverridesPerPriceKey() {
          this.m_mapOverridesPerPriceKey.clear(),
            this.m_mapLocalPackagePriceOverrides.forEach((e, t) => {
              e.forEach((e, t) => {
                let r = this.m_mapOverridesPerPriceKey.get(t);
                r || (r = 0), r++, this.m_mapOverridesPerPriceKey.set(t, r);
              });
            });
        }
        DiscardAllLocalPriceOverrides() {
          const e = this.GetAllLocalPriceOverrides();
          this.m_mapLocalPackagePriceOverrides.clear();
          let t = new Set();
          for (const r of e) {
            const { packageID: e, strPriceKey: i } = r;
            this.GetPriceGridCellCallbackList(e, i).Dispatch(
              this.GetPrice(e, i),
            ),
              t.add(e);
          }
          for (const e of t) this.GetPackageOverridesCallbackList(e).Dispatch();
          this.DispatchPriceOverridesCallbacks();
        }
        DiscardAllLocalPriceOverridesForKey(e) {
          let t = !1,
            r = new Set();
          this.m_mapLocalPackagePriceOverrides.forEach((i, a) => {
            this.m_mapPriceKeyDescriptions.has(e) &&
              ((t = !0),
              this.m_mapLocalPackagePriceOverrides.get(a).delete(e),
              this.GetPriceGridCellCallbackList(a, e).Dispatch(
                this.GetPrice(a, e),
              ),
              r.add(a));
          });
          for (const e of r) this.GetPackageOverridesCallbackList(e).Dispatch();
          t && this.DispatchPriceOverridesCallbacks();
        }
        DiscardLocalPriceOverridesForPackage(e) {
          var t;
          null === (t = this.m_mapLocalPackagePriceOverrides.get(e)) ||
            void 0 === t ||
            t.forEach((t, r) => {
              this.GetPriceGridCellCallbackList(e, r).Dispatch(
                this.GetSavedPrice(e, r),
              );
            }),
            this.m_mapLocalPackagePriceOverrides.delete(e),
            this.GetPackageOverridesCallbackList(e).Dispatch(),
            this.DispatchPriceOverridesCallbacks();
        }
        BuildNewPricingProposal(e, t) {
          const r = {
            packageID: e,
            rtSubmitted: Math.floor(Date.now() / 1e3),
            submitterID: g.L7.accountid,
            prices: {},
            eState: i.k_EPriceProposalStateActive,
            bPartnerWillPublish: t,
          };
          for (const t of this.m_rgKnownPriceKeys)
            r.prices[t] = this.GetPrice(e, t);
          return r;
        }
        SubmitProposalToServer(e, t, r) {
          var s, o, c;
          return (0, a.mG)(this, void 0, void 0, function* () {
            const a = this.BuildNewPricingProposal(e, t),
              p = JSON.stringify(a.prices),
              P = (0, g.kQ)("publisherid", "application_config"),
              d =
                g.De.PARTNER_BASE_URL +
                "pricing/ajaxsubmitproposal/" +
                P +
                "/" +
                e,
              m = new FormData();
            m.append("sessionid", g.De.SESSIONID),
              m.append("partner_will_publish", t ? "1" : "0"),
              m.append("prices", p);
            let f = null;
            try {
              const t = yield n().post(d, m, {
                withCredentials: !0,
                cancelToken: null == r ? void 0 : r.token,
              });
              if (
                200 == (null == t ? void 0 : t.status) &&
                (null === (s = t.data) || void 0 === s ? void 0 : s.success) ==
                  l.s.k_EResultOK &&
                t.data.eState != i.k_EPriceProposalStateInvalid
              ) {
                if (t.data.eState == i.k_EPriceProposalStateApplied) {
                  this.m_mapPriceProposals.delete(e);
                  for (const t of this.m_rgKnownPriceKeys)
                    this.m_mapPackagePrice.get(e).set(t, a.prices[t]);
                } else
                  (a.eState = t.data.eState),
                    (a.proposalKey = t.data.proposalKey),
                    this.m_mapPriceProposals.set(e, a);
                return this.DiscardLocalPriceOverridesForPackage(e), t.data;
              }
            } catch (e) {
              f = e;
            }
            const h = (0, u.l)(f);
            return (
              console.error(
                "CPackagePricingStore.SubmitProposalToServer: failed",
                h.strErrorMsg,
                h,
              ),
              null !==
                (c =
                  null === (o = null == f ? void 0 : f.response) || void 0 === o
                    ? void 0
                    : o.data) && void 0 !== c
                ? c
                : { success: l.s.k_EResultFail }
            );
          });
        }
        PublishApprovedProposal(e, t, r = 0) {
          var s, o, c;
          return (0, a.mG)(this, void 0, void 0, function* () {
            const a = this.m_mapPriceProposals.get(e);
            if (
              (null == a ? void 0 : a.eState) !=
                i.k_EPriceProposalStateApproved ||
              !(null == a ? void 0 : a.proposalKey)
            )
              return { success: l.s.k_EResultInvalidParam };
            const p = (0, g.kQ)("publisherid", "application_config"),
              P =
                g.De.PARTNER_BASE_URL +
                "pricing/ajaxpublishproposal/" +
                p +
                "/" +
                e,
              d = new FormData();
            d.append("sessionid", g.De.SESSIONID),
              d.append("proposal_key", a.proposalKey);
            let m = null;
            try {
              const i = yield n().post(P, d, {
                withCredentials: !0,
                cancelToken: null == t ? void 0 : t.token,
                timeout: r,
              });
              if (
                200 == (null == i ? void 0 : i.status) &&
                (null === (s = i.data) || void 0 === s ? void 0 : s.success) ==
                  l.s.k_EResultOK
              ) {
                this.m_mapPriceProposals.delete(e);
                for (const t of this.m_rgKnownPriceKeys)
                  this.m_mapPackagePrice.get(e).set(t, a.prices[t]),
                    this.GetPriceGridCellCallbackList(e, t).Dispatch(
                      this.GetSavedPrice(e, t),
                    );
                return (
                  this.GetPackageOverridesCallbackList(e).Dispatch(),
                  this.DispatchPriceOverridesCallbacks(),
                  i.data
                );
              }
            } catch (e) {
              m = e;
            }
            const f = (0, u.l)(m);
            return (
              console.error(
                "CPackagePricingStore.PublishApprovedProposal: failed",
                f.strErrorMsg,
                f,
              ),
              null !==
                (c =
                  null === (o = null == m ? void 0 : m.response) || void 0 === o
                    ? void 0
                    : o.data) && void 0 !== c
                ? c
                : { success: l.s.k_EResultFail }
            );
          });
        }
        CancelProposal(e, t) {
          var r, i, s;
          return (0, a.mG)(this, void 0, void 0, function* () {
            const a = this.m_mapPriceProposals.get(e);
            if (!(null == a ? void 0 : a.proposalKey))
              return { success: l.s.k_EResultInvalidParam };
            const o = (0, g.kQ)("publisherid", "application_config"),
              c =
                g.De.PARTNER_BASE_URL +
                "pricing/ajaxcancelproposal/" +
                o +
                "/" +
                e,
              p = new FormData();
            p.append("sessionid", g.De.SESSIONID),
              p.append("proposal_key", a.proposalKey);
            let P = null;
            try {
              const i = yield n().post(c, p, {
                withCredentials: !0,
                cancelToken: null == t ? void 0 : t.token,
              });
              if (
                200 == (null == i ? void 0 : i.status) &&
                (null === (r = i.data) || void 0 === r ? void 0 : r.success) ==
                  l.s.k_EResultOK
              ) {
                this.m_mapPriceProposals.delete(e);
                for (const t of this.m_rgKnownPriceKeys)
                  this.GetPriceGridCellCallbackList(e, t).Dispatch(
                    this.GetSavedPrice(e, t),
                  );
                return (
                  this.GetPackageOverridesCallbackList(e).Dispatch(),
                  this.DispatchPriceOverridesCallbacks(),
                  i.data
                );
              }
            } catch (e) {
              P = e;
            }
            const d = (0, u.l)(P);
            return (
              console.error(
                "CPackagePricingStore.CancelProposal: failed",
                d.strErrorMsg,
                d,
              ),
              null !==
                (s =
                  null === (i = null == P ? void 0 : P.response) || void 0 === i
                    ? void 0
                    : i.data) && void 0 !== s
                ? s
                : { success: l.s.k_EResultFail }
            );
          });
        }
        GetLocalOverrideCountForPriceKey(e) {
          var t;
          return null !== (t = this.m_mapOverridesPerPriceKey.get(e)) &&
            void 0 !== t
            ? t
            : 0;
        }
        BAnyPackagePriceBelowMin(e) {
          if (!e) return !1;
          for (let t of this.m_rgKnownPriceKeys) {
            let r = this.GetPrice(e, t);
            if (void 0 === r) continue;
            let { nMinPriceInCents: i, nMaxPriceInCents: a } = O(e, t);
            if (r < i) return !0;
          }
          return !1;
        }
      }
      function v(e, t) {
        if (e.strPriceKey == t.strPriceKey) {
          const r = (0, m.vB)(e.packageID),
            i = (0, m.vB)(t.packageID);
          return (0, d.eT)(r, i);
        }
        return (0, d.eT)(S(e.strPriceKey), S(t.strPriceKey));
      }
      function k(e) {
        const t = e.split("_")[0];
        return _.Get().m_mapCurrencyData.get(t);
      }
      function G(e, t) {
        var r;
        if (void 0 === t) return ["", "", ""];
        const i = null !== (r = k(t)) && void 0 !== r ? r : k("USD");
        let a = "";
        if ("number" == typeof e) {
          let t = e.toString();
          t.length < 3 && (t = (1 == t.length ? "0" : "") + "0" + t);
          const r = t.length - 2;
          for (let e = 0; e < r; e++) {
            const s = t.charAt(e);
            (a += s),
              e < r - 1 &&
                (r - e - 1) % 3 == 0 &&
                "-" != s &&
                (a += i.strThousandsSeparator);
          }
          i.bWholeUnitsOnly ||
            ((a += i.strDecimalSymbol), (a += t.substr(t.length - 2)));
        }
        return i.bSymbolIsPrefix
          ? [i.strSymbol + i.strSymbolAndNumberSeparator, a, ""]
          : ["", a, i.strSymbolAndNumberSeparator + i.strSymbol];
      }
      (0, a.gn)([c.LO], _.prototype, "m_mapOverridesPerPriceKey", void 0),
        (0, a.gn)([c.aD], _.prototype, "UpdateOverridesPerPriceKey", null);
      const D = new Map([
        ["USD", "@1"],
        ["CNY", "@2"],
        ["EUR", "@3"],
        ["GBP", "@4"],
        ["CAD", "@5"],
        ["AUD", "@6"],
        ["JPY", "@7"],
        ["KRW", "@8"],
        ["RUB", "@9"],
      ]);
      function S(e) {
        return D.has(e) ? D.get(e) : e.indexOf("_") > 0 ? "ZZZ" + e : e;
      }
      function y(e, t) {
        return _.Get().GetPrice(e, t);
      }
      function b(e) {
        const t = _.Get().m_strDisplayPriceKey;
        return G(_.Get().GetPrice(e, t), t).join("");
      }
      function C(e) {
        const [t, r] = o.useState(_.Get().m_strDisplayPriceKey);
        return (
          (0, P.Qg)(_.Get().m_displayPriceKeyCallbackList, r),
          (function (e, t) {
            const [r, i] = o.useState(_.Get().GetPrice(e, t));
            return (
              (0, P.Qg)(_.Get().GetPriceGridCellCallbackList(e, t), i),
              o.useEffect(() => i(_.Get().GetPrice(e, t)), [e, t]),
              G(r, t).join("")
            );
          })(e, t)
        );
      }
      function E(e, t) {
        const r = _.Get().GetPrice(e, "USD");
        let i = null;
        for (let e of _.Get().m_rgPriceLevels)
          if (e > r) {
            i = e;
            break;
          }
        if ("USD" == t || !i)
          return { nSuggestedPriceInCents: null, nGuidelinesLevel: null };
        let a = _.Get().m_mapPriceGuidelines.get(i).get(t);
        const s = _.Get().m_mapPriceGuidelines.get(i).get("USD");
        if (s != r) {
          const e = r / s;
          (i *= e), (a = Math.ceil(a * e));
        }
        return { nSuggestedPriceInCents: a, nGuidelinesLevel: i };
      }
      function I() {
        const e = (0, m.AM)();
        return o.useCallback(
          () =>
            (function (e) {
              let t = 0;
              for (const r of e) {
                const e = new Array(),
                  i = new Array(),
                  a = _.Get().GetPrice(r, "USD");
                if (a && !(a <= 0)) {
                  for (const t of _.Get().m_rgKnownPriceKeys) {
                    if ("USD" == t) continue;
                    const { nSuggestedPriceInCents: a, nGuidelinesLevel: s } =
                      E(r, t);
                    null !== s &&
                      _.Get().GetPrice(r, t) != a &&
                      (e.push(t), i.push(a));
                  }
                  e.length > 0 &&
                    (_.Get().OverridePricesForPackage(r, e, i), (t += 1));
                }
              }
              t > 0 && _.Get().DispatchPriceOverridesCallbacks();
            })(e),
          [e],
        );
      }
      function B(e, t) {
        const r = (0, P.NW)();
        (0, P.Qg)(_.Get().GetPriceGridCellCallbackList(e, t), r);
        const i = _.Get().GetPrice(e, t);
        (0, P.Qg)(_.Get().GetPriceGridCellCallbackList(e, "USD"), r);
        const { nSuggestedPriceInCents: a, nGuidelinesLevel: s } = E(e, t),
          n = o.useCallback((r) => _.Get().OverridePrice(e, t, r), [e, t]),
          c = _.Get().GetPublishedPrice(e, t),
          l = _.Get().GetProposedPrice(e, t),
          { nMinPriceInCents: u, nMaxPriceInCents: p } = O(e, t),
          d = _.Get().GetMinimumDiscountPrice(t),
          g = i ? Math.floor((100 * (i - d)) / i) : 90,
          m = g < Math.min(90, Math.floor((100 * (s - 50)) / s)) ? g : null;
        return o.useMemo(
          () => ({
            nPriceInCents: i,
            nProposedPriceInCents: l,
            nPublishedPriceInCents: c,
            nMinPriceInCents: u,
            nMaxPriceInCents: p,
            nMaxDiscountPercentage: m,
            nSuggestedPriceInCents: a,
            fnSetPrice: n,
          }),
          [i, l, c, u, p, m, a, n],
        );
      }
      function L(e) {
        let [t, r] = o.useState(() => _.Get().BAnyPackagePriceBelowMin(e)),
          i = o.useCallback(() => {
            let t = _.Get().BAnyPackagePriceBelowMin(e);
            r(t);
          }, [e, r]);
        return (0, P.Qg)(_.Get().GetPackageOverridesCallbackList(e), i), t;
      }
      function w(e) {
        return _.Get().BAnyPackagePriceBelowMin(e);
      }
      function O(e, t) {
        let r = _.Get();
        return {
          nMinPriceInCents: r.GetMinimumBasePrice(t),
          nMaxPriceInCents: r.m_setRecurringSubscriptions.has(e)
            ? r.GetPublishedPrice(e, t)
            : null,
        };
      }
      function U() {
        return o.useCallback((e, t, r) => {
          const i = _.Get().GetPrice(e, t);
          return (
            _.Get().OverridePrice(e, t, r),
            i == r
              ? null
              : {
                  packageID: e,
                  strPriceKey: t,
                  nPriceInCents: r,
                  nOldPriceInCents: i,
                }
          );
        }, []);
      }
      function K(e) {
        return _.Get().m_mapPriceProposals.get(e);
      }
      function A(e) {
        return _.Get().m_mapPriceProposals.get(e);
      }
      function M(e) {
        let t = !1;
        for (const r of _.Get().m_rgKnownPriceKeys) {
          let i = _.Get().GetPublishedPrice(e, r);
          t = t || (0 != i && void 0 !== i);
        }
        return t;
      }
      function R(e) {
        const t = K(e),
          r = [];
        for (const i of _.Get().m_rgKnownPriceKeys) {
          const a = t.prices[i],
            s = _.Get().GetPublishedPrice(e, i);
          a != s &&
            r.push({
              packageID: e,
              strPriceKey: i,
              nPriceInCents: a,
              nOldPriceInCents: s,
            });
        }
        return r;
      }
      function N() {
        return _.Get().m_rgKnownPriceKeys;
      }
      function V(e) {
        let t = _.Get().m_mapPriceKeyDescriptions.get(e);
        return t ? t.strDescription : "";
      }
      function W(e) {
        return o.useCallback(() => {
          _.Get().DiscardAllLocalPriceOverridesForKey(e);
        }, [e]);
      }
      function T(e) {
        return o.useCallback(() => {
          _.Get().DiscardLocalPriceOverridesForPackage(e);
        }, [e]);
      }
      function F(e) {
        return o.useCallback(() => {
          _.Get().CancelProposal(e);
        }, [e]);
      }
      function j() {
        const [e, t] = o.useState(_.Get().m_strDisplayPriceKey),
          r = _.Get().m_rgKnownPriceKeys,
          i = o.useCallback((e) => {
            t(e),
              (_.Get().m_strDisplayPriceKey = e),
              _.Get().m_displayPriceKeyCallbackList.Dispatch(e);
          }, []);
        return { strPriceKey: e, rgSupportedPriceKeys: r, fnSetPriceKey: i };
      }
      function Q(e) {
        const t = (0, P.NW)();
        return (
          (0, P.Qg)(_.Get().m_allPriceOverridesCallbackList, t),
          _.Get().BHasLocalPriceOverrides(e)
        );
      }
      function H(e) {
        return _.Get().BHasLocalPriceOverrides(e);
      }
      function x() {
        const [e, t] = o.useState(() => _.Get().GetAllLocalPriceOverrides());
        return (0, P.Qg)(_.Get().m_allPriceOverridesCallbackList, t), e;
      }
      function J(e) {
        return (0, f.SZ)(() => _.Get().GetLocalOverrideCountForPriceKey(e));
      }
      function $() {
        return o.useCallback(() => {
          var e;
          return (
            (null === (e = _.Get().GetAllLocalPriceOverrides()) || void 0 === e
              ? void 0
              : e.length) > 0
          );
        }, []);
      }
      function z() {
        return o.useCallback(() => _.Get().DiscardAllLocalPriceOverrides(), []);
      }
      function X() {
        const e = [],
          t = o.useRef(new Map());
        _.Get().m_mapPriceGuidelines.forEach((r, i) => {
          const a = r.get("USD");
          e.push(a), t.current.set(a, i);
        }),
          e.sort((e, t) => e - t);
        const r = o.useCallback((e, r) => {
          const i = t.current.get(r);
          _.Get()
            .m_mapPriceGuidelines.get(i)
            .forEach((t, r) => _.Get().OverridePrice(e, r, t));
        }, []);
        return { rgUSDPricesInCents: e, fnApplyGuidelines: r };
      }
      function q() {
        return o.useCallback(
          (e, t, r) => _.Get().SubmitProposalToServer(e, t, r),
          [],
        );
      }
      function Z() {
        return o.useCallback(
          (e, t) => _.Get().PublishApprovedProposal(e, t, 6e4),
          [],
        );
      }
      function Y(e) {
        let t = [];
        const r = _.Get().m_rgKnownPriceKeys;
        for (let i of e) {
          if (M(i)) continue;
          let e = !1;
          for (const t of r) {
            if (!_.Get().BPriceKeyRequired(t)) continue;
            if (!_.Get().GetPrice(i, t)) {
              e = !0;
              break;
            }
          }
          e && t.push(i);
        }
        return t;
      }
    },
    61785: (e, t, r) => {
      r.d(t, { $k: () => d, yh: () => n });
      var i = r(77435),
        a = r(60161),
        s = r(14826);
      function n(e, t, r, i) {
        const a = (0, s.Xx)("#PackageGrid_MultipleBaseGamesFoundForPackage"),
          n = (0, s.Xx)("#PackageGrid_NoBaseGameFoundForPackage"),
          o = e == a,
          c = e == n,
          l = !o && !c,
          u = t == a,
          p = t == n,
          P = !u && !p;
        if (l && P) return e.localeCompare(t);
        if (l || P) return l ? -1 : 1;
        if (o == u && c == p) {
          const e = r.getData().packageName,
            t = i.getData().packageName;
          return e && t
            ? e.localeCompare(t)
            : e || t
            ? e
              ? -1
              : 1
            : r.getData().packageID - i.getData().packageID;
        }
        return o ? -1 : 1;
      }
      const o = (e) => e.nextElementSibling,
        c = (e) => e.previousElementSibling,
        l = (e, t) => {
          const r = e.getAttribute("tabulator-field"),
            i = e.parentElement;
          let a = i && t(i);
          for (; r && a; ) {
            for (const e of Array.from(a.children))
              if (r == e.getAttribute("tabulator-field")) return e;
            a = t(a);
          }
          return null;
        },
        u = new Map([
          [i.J.UpArrow, (e) => l(e, c)],
          [i.J.RightArrow, o],
          [i.J.DownArrow, (e) => l(e, o)],
          [i.J.LeftArrow, c],
          [i.J.Tab, (e) => l(e, o)],
          [i.J.Enter, (e) => l(e, o)],
        ]);
      function p(e) {
        return (0, a.Jk)(e, (e) => e.classList.contains("tabulator-cell"));
      }
      function P(e) {
        const t = Array.prototype.slice.call(e.children).reverse();
        for (; t.length > 0; ) {
          const e = t.pop();
          if ("input" === e.tagName.toLowerCase()) return e;
          t.push(...Array.prototype.slice.call(e.children).reverse());
        }
        return null;
      }
      function d(e, t) {
        var r;
        const i = u.get(e.keyCode);
        if (!i) return;
        let a = i(p(e.currentTarget));
        for (; a; ) {
          if (
            "none" !=
              (null === (r = a.style) || void 0 === r ? void 0 : r.display) &&
            !a.classList.contains("tabulator-frozen")
          ) {
            const r = P(a);
            if (r) {
              return g(t, p(r)), r.focus(), void e.preventDefault();
            }
          }
          a = i(a);
        }
      }
      function g(e, t) {
        const r = e.columnManager.scrollLeft,
          i = t.offsetWidth,
          a = t.offsetLeft,
          s = a + i,
          n = e.columnManager.element.clientWidth,
          o = e.columnManager.headersElement.clientWidth,
          c = r + n;
        if (a >= c - o && s <= c) return;
        const l = (a + s) / 2 - (n - o / 2),
          u = (o - i) / 4,
          p = l + (l > r ? u : -1 * u);
        e.columnManager.scrollHorizontal(p), e.rowManager.scrollHorizontal(p);
      }
    },
    7164: (e, t, r) => {
      r.d(t, { $: () => i, _: () => a });
      const i = "America/Los_Angeles";
      function a(e) {
        const t = r(47812).unix(e).tz(i);
        return (
          t.seconds(0),
          t.minutes(0),
          t.hours(10),
          t.unix() < e && t.hours(34),
          t.unix()
        );
      }
    },
  },
]);
