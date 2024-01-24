/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [7241],
  {
    28738: (e, t, r) => {
      r.d(t, { Jq: () => m, y$: () => g });
      var i = r(85556),
        a = r(80751),
        s = r.n(a),
        n = r(54842),
        c = r(47427),
        o = r(48760),
        l = r(35427),
        u = r(62210),
        p = r(16649),
        d = r(37563);
      class P {
        constructor() {
          (this.m_mapProfiles = new Map()),
            (this.m_mapProfilesLoading = new Map()),
            (0, n.rC)(this);
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
            let i = d.De.COMMUNITY_BASE_URL + "actions/ajaxresolveusers",
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
                  (e.avatar_url_medium = (0, o.U)(e.avatar_url, "medium")),
                  (e.avatar_url_full = (0, o.U)(e.avatar_url, "full")),
                  (e.avatar_url = (0, o.U)(e.avatar_url)),
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
            ? d.De.COMMUNITY_BASE_URL + "id/" + t.profile_url
            : d.De.COMMUNITY_BASE_URL + "profiles/" + e.ConvertTo64BitString();
        }
        GetPersonaNameBySteamID(e) {
          const t = this.GetProfileBySteamID(e);
          return t && t.persona_name ? t.persona_name : "";
        }
      }
      (0, i.gn)([n.LO], P.prototype, "m_mapProfiles", void 0);
      const g = new P();
      function m(e) {
        return (function (e) {
          const t = c.useMemo(
              () => (e ? ("string" == typeof e ? new l.K(e) : e) : null),
              [e],
            ),
            [r, i] = (0, c.useState)(!!t && !g.BHasProfileBySteamID(t));
          return (
            (0, c.useEffect)(() => {
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
            }, [e]),
            [r, !!t && g.GetProfileBySteamID(t)]
          );
        })(c.useMemo(() => (e ? l.K.InitFromAccountID(e) : null), [e]));
      }
      window.g_ProfileStore = g;
    },
    9781: (e, t, r) => {
      r.d(t, { N: () => p, a: () => u });
      var i = r(85556),
        a = r(47427),
        s = r(77581),
        n = r(15690),
        c = r(29480),
        o = r(62210),
        l = r(37563);
      function u(e = !1) {
        return (0, i.mG)(this, void 0, void 0, function* () {
          if (e && n.Z.BIsInitialized()) return;
          const t = (0, l.kQ)(
            "partnerbrowse_webapi_token",
            "application_config",
          );
          (0, o.X)(Boolean(t), "require partnerbrowse_webapi_token");
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
        const e = (0, c.T)("usePartnerStoreBrowseAPI"),
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
    71472: (e, t, r) => {
      r.d(t, { Ar: () => o, Wo: () => l, i9: () => c, ks: () => s });
      var i = r(47427),
        a = r(8285);
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
      function c(e, t, r, i = !1) {
        const a = new URLSearchParams(e.location.search.substring(1));
        a.delete(t),
          n(r) && a.append(t, r),
          i
            ? e.replace(`?${a.toString()}`, Object.assign({}, e.location.state))
            : e.push(`?${a.toString()}`);
      }
      function o(e, t) {
        const r = (0, a.k6)(),
          o = (0, a.TH)(),
          l = (0, i.useMemo)(() => {
            const r = s(o.search, e);
            return n(r)
              ? n(t)
                ? "boolean" == typeof t
                  ? t.constructor("false" !== r)
                  : t.constructor(r)
                : r
              : t;
          }, [o.search, e, t]),
          u = (0, i.useCallback)(
            (t) => {
              c(r, e, n(t) ? String(t) : null);
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
    98061: (e, t, r) => {
      r.d(t, {
        $D: () => m,
        AM: () => g,
        Gd: () => P,
        MQ: () => l,
        NR: () => p,
        ew: () => c,
        vB: () => d,
        z: () => u,
      });
      var i = r(47427),
        a = r(45492),
        s = r(20417),
        n = r(37563);
      const c = "pn";
      class o {
        static Get() {
          return (
            o.s_Singleton || ((o.s_Singleton = new o()), o.s_Singleton.Init()),
            o.s_Singleton
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
          t != decodeURIComponent(r.searchParams.get(c)) &&
            (t
              ? r.searchParams.set(c, encodeURIComponent(t))
              : r.searchParams.delete(c),
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
        return o.Get().m_rgPackageIDs;
      }
      function u() {
        return o.Get().m_rgPackageIDs;
      }
      function p() {
        return o.Get().m_rgPackageData;
      }
      function d(e) {
        let t = o.Get().m_mapPackageData.get(e);
        return t ? t.package_name : e.toString();
      }
      function P() {
        return i.useCallback((e) => o.Get().UpdateVisiblePackageList(e), []);
      }
      function g() {
        const [e, t] = i.useState(o.Get().m_rgVisiblePackageIDs);
        return (0, s.Qg)(o.Get().m_visiblePackageIDsCallbackList, t), e;
      }
      function m() {
        return i.useMemo(
          () => (0, n.kQ)("publisherid", "application_config"),
          [],
        );
      }
    },
    66263: (e, t, r) => {
      r.d(t, {
        $w: () => M,
        AN: () => z,
        FR: () => D,
        HV: () => _,
        HX: () => Q,
        OB: () => T,
        OG: () => F,
        Ol: () => C,
        PP: () => S,
        R2: () => N,
        Rs: () => W,
        Tj: () => y,
        We: () => H,
        X1: () => O,
        _w: () => v,
        bS: () => V,
        dU: () => I,
        df: () => j,
        j_: () => $,
        ju: () => U,
        np: () => X,
        on: () => R,
        ps: () => w,
        qH: () => E,
        rX: () => B,
        sN: () => q,
        tu: () => L,
        uT: () => x,
        xm: () => Z,
        yh: () => A,
      });
      var i = r(85556),
        a = r(80751),
        s = r.n(a),
        n = r(47427),
        c = r(54842),
        o = r(16649),
        l = r(45492),
        u = r(20417),
        p = r(45284),
        d = r(37563),
        P = r(98061),
        g = r(30750),
        m = r(62210);
      class h {
        static Get() {
          return (
            h.s_Singleton || ((h.s_Singleton = new h()), h.s_Singleton.Init()),
            h.s_Singleton
          );
        }
        constructor() {
          (this.m_mapPackagePrice = new Map()),
            (this.m_setRecurringSubscriptions = new Set()),
            (this.m_mapPriceProposals = new Map()),
            (this.m_mapLocalPackagePriceOverrides = new Map()),
            (this.m_mapPriceGridCellCallbackList = new Map()),
            (this.m_mapPackageOverridesCallbackList = new Map()),
            (this.m_allPriceOverridesCallbackList = new l.pB()),
            (this.m_mapOverridesPerPriceKey = new Map()),
            (this.m_mapCurrencyData = new Map()),
            (this.m_mapPriceKeyDescriptions = new Map()),
            (this.m_mapPriceGuidelines = new Map()),
            (this.m_rgPriceLevels = []),
            (this.m_strDisplayPriceKey = "USD"),
            (this.m_displayPriceKeyCallbackList = new l.pB()),
            (0, c.rC)(this),
            "dev" == d.De.WEB_UNIVERSE && (window.g_PackagePricingStore = this);
        }
        Init() {
          const e = new Set(),
            t = (0, d.kQ)("base_prices", "application_config");
          if (
            (("dev" != d.De.WEB_UNIVERSE && "beta" != d.De.WEB_UNIVERSE) ||
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
              "dev" == d.De.WEB_UNIVERSE &&
                console.error("Invalid base price payload");
          const r = (0, d.kQ)("recurring_subs", "application_config");
          if (
            (("dev" != d.De.WEB_UNIVERSE && "beta" != d.De.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading recurring subscriptions payload: ",
                r,
              ),
            r)
          )
            if (Array.isArray(r))
              for (const e of r) this.m_setRecurringSubscriptions.add(e);
            else
              "dev" == d.De.WEB_UNIVERSE &&
                console.error("Invalid recurring subscriptions payload");
          const i = (0, d.kQ)("pending_proposals", "application_config");
          if (
            (("dev" != d.De.WEB_UNIVERSE && "beta" != d.De.WEB_UNIVERSE) ||
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
              "dev" == d.De.WEB_UNIVERSE &&
                console.error("Invalid pending price proposal payload");
          const a = (0, d.kQ)("pricing_guidelines", "application_config");
          if (
            (("dev" != d.De.WEB_UNIVERSE && "beta" != d.De.WEB_UNIVERSE) ||
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
              "dev" == d.De.WEB_UNIVERSE &&
                console.error("Invalid pricing guidelines payload");
          this.m_rgKnownPriceKeys = Array.from(e).sort((e, t) =>
            (0, p.eT)(G(e), G(t)),
          );
          const s = (0, d.kQ)("currency_data", "application_config");
          if (
            (("dev" != d.De.WEB_UNIVERSE && "beta" != d.De.WEB_UNIVERSE) ||
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
              "dev" == d.De.WEB_UNIVERSE &&
                console.error("Invalid currency payload");
          const n = (0, d.kQ)("currency_descriptions", "application_config");
          if (
            (("dev" != d.De.WEB_UNIVERSE && "beta" != d.De.WEB_UNIVERSE) ||
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
              "dev" == d.De.WEB_UNIVERSE &&
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
          return r.has(t) || r.set(t, new l.pB()), r.get(t);
        }
        GetPackageOverridesCallbackList(e) {
          if (!e) return null;
          let t = this.m_mapPackageOverridesCallbackList.get(e);
          return (
            t ||
              ((t = new l.pB()),
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
          (0, m.X)(
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
            e.sort(f),
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
            submitterID: d.L7.accountid,
            prices: {},
            eState: 1,
            bPartnerWillPublish: t,
          };
          for (const t of this.m_rgKnownPriceKeys)
            r.prices[t] = this.GetPrice(e, t);
          return r;
        }
        SubmitProposalToServer(e, t, r) {
          var a, n, c;
          return (0, i.mG)(this, void 0, void 0, function* () {
            const i = this.BuildNewPricingProposal(e, t),
              l = JSON.stringify(i.prices),
              u = (0, d.kQ)("publisherid", "application_config"),
              p =
                d.De.PARTNER_BASE_URL +
                "pricing/ajaxsubmitproposal/" +
                u +
                "/" +
                e,
              P = new FormData();
            P.append("sessionid", d.De.SESSIONID),
              P.append("partner_will_publish", t ? "1" : "0"),
              P.append("prices", l);
            let g = null;
            try {
              const t = yield s().post(p, P, {
                withCredentials: !0,
                cancelToken: null == r ? void 0 : r.token,
              });
              if (
                200 == (null == t ? void 0 : t.status) &&
                1 ==
                  (null === (a = t.data) || void 0 === a
                    ? void 0
                    : a.success) &&
                0 != t.data.eState
              ) {
                if (3 == t.data.eState) {
                  this.m_mapPriceProposals.delete(e);
                  for (const t of this.m_rgKnownPriceKeys)
                    this.m_mapPackagePrice.get(e).set(t, i.prices[t]);
                } else
                  (i.eState = t.data.eState),
                    (i.proposalKey = t.data.proposalKey),
                    this.m_mapPriceProposals.set(e, i);
                return this.DiscardLocalPriceOverridesForPackage(e), t.data;
              }
            } catch (e) {
              g = e;
            }
            const m = (0, o.l)(g);
            return (
              console.error(
                "CPackagePricingStore.SubmitProposalToServer: failed",
                m.strErrorMsg,
                m,
              ),
              null !==
                (c =
                  null === (n = null == g ? void 0 : g.response) || void 0 === n
                    ? void 0
                    : n.data) && void 0 !== c
                ? c
                : { success: 2 }
            );
          });
        }
        PublishApprovedProposal(e, t, r = 0) {
          var a, n, c;
          return (0, i.mG)(this, void 0, void 0, function* () {
            const i = this.m_mapPriceProposals.get(e);
            if (
              4 != (null == i ? void 0 : i.eState) ||
              !(null == i ? void 0 : i.proposalKey)
            )
              return { success: 8 };
            const l = (0, d.kQ)("publisherid", "application_config"),
              u =
                d.De.PARTNER_BASE_URL +
                "pricing/ajaxpublishproposal/" +
                l +
                "/" +
                e,
              p = new FormData();
            p.append("sessionid", d.De.SESSIONID),
              p.append("proposal_key", i.proposalKey);
            let P = null;
            try {
              const n = yield s().post(u, p, {
                withCredentials: !0,
                cancelToken: null == t ? void 0 : t.token,
                timeout: r,
              });
              if (
                200 == (null == n ? void 0 : n.status) &&
                1 ==
                  (null === (a = n.data) || void 0 === a ? void 0 : a.success)
              ) {
                this.m_mapPriceProposals.delete(e);
                for (const t of this.m_rgKnownPriceKeys)
                  this.m_mapPackagePrice.get(e).set(t, i.prices[t]),
                    this.GetPriceGridCellCallbackList(e, t).Dispatch(
                      this.GetSavedPrice(e, t),
                    );
                return (
                  this.GetPackageOverridesCallbackList(e).Dispatch(),
                  this.DispatchPriceOverridesCallbacks(),
                  n.data
                );
              }
            } catch (e) {
              P = e;
            }
            const g = (0, o.l)(P);
            return (
              console.error(
                "CPackagePricingStore.PublishApprovedProposal: failed",
                g.strErrorMsg,
                g,
              ),
              null !==
                (c =
                  null === (n = null == P ? void 0 : P.response) || void 0 === n
                    ? void 0
                    : n.data) && void 0 !== c
                ? c
                : { success: 2 }
            );
          });
        }
        CancelProposal(e, t) {
          var r, a, n;
          return (0, i.mG)(this, void 0, void 0, function* () {
            const i = this.m_mapPriceProposals.get(e);
            if (!(null == i ? void 0 : i.proposalKey)) return { success: 8 };
            const c = (0, d.kQ)("publisherid", "application_config"),
              l =
                d.De.PARTNER_BASE_URL +
                "pricing/ajaxcancelproposal/" +
                c +
                "/" +
                e,
              u = new FormData();
            u.append("sessionid", d.De.SESSIONID),
              u.append("proposal_key", i.proposalKey);
            let p = null;
            try {
              const i = yield s().post(l, u, {
                withCredentials: !0,
                cancelToken: null == t ? void 0 : t.token,
              });
              if (
                200 == (null == i ? void 0 : i.status) &&
                1 ==
                  (null === (r = i.data) || void 0 === r ? void 0 : r.success)
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
              p = e;
            }
            const P = (0, o.l)(p);
            return (
              console.error(
                "CPackagePricingStore.CancelProposal: failed",
                P.strErrorMsg,
                P,
              ),
              null !==
                (n =
                  null === (a = null == p ? void 0 : p.response) || void 0 === a
                    ? void 0
                    : a.data) && void 0 !== n
                ? n
                : { success: 2 }
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
            let { nMinPriceInCents: i, nMaxPriceInCents: a } = B(e, t);
            if (r < i) return !0;
          }
          return !1;
        }
      }
      function f(e, t) {
        if (e.strPriceKey == t.strPriceKey) {
          const r = (0, P.vB)(e.packageID),
            i = (0, P.vB)(t.packageID);
          return (0, p.eT)(r, i);
        }
        return (0, p.eT)(G(e.strPriceKey), G(t.strPriceKey));
      }
      function v(e) {
        const t = e.split("_")[0];
        return h.Get().m_mapCurrencyData.get(t);
      }
      function _(e, t) {
        var r;
        if (void 0 === t) return ["", "", ""];
        const i = null !== (r = v(t)) && void 0 !== r ? r : v("USD");
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
      (0, i.gn)([c.LO], h.prototype, "m_mapOverridesPerPriceKey", void 0),
        (0, i.gn)([c.aD], h.prototype, "UpdateOverridesPerPriceKey", null);
      const k = new Map([
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
      function G(e) {
        return k.has(e) ? k.get(e) : e.indexOf("_") > 0 ? "ZZZ" + e : e;
      }
      function D(e, t) {
        return h.Get().GetPrice(e, t);
      }
      function y(e) {
        const t = h.Get().m_strDisplayPriceKey;
        return _(h.Get().GetPrice(e, t), t).join("");
      }
      function S(e) {
        const [t, r] = n.useState(h.Get().m_strDisplayPriceKey);
        return (
          (0, u.Qg)(h.Get().m_displayPriceKeyCallbackList, r),
          (function (e, t) {
            const [r, i] = n.useState(h.Get().GetPrice(e, t));
            return (
              (0, u.Qg)(h.Get().GetPriceGridCellCallbackList(e, t), i),
              n.useEffect(() => i(h.Get().GetPrice(e, t)), [e, t]),
              _(r, t).join("")
            );
          })(e, t)
        );
      }
      function b(e, t) {
        const r = h.Get().GetPrice(e, "USD");
        let i = null;
        for (let e of h.Get().m_rgPriceLevels)
          if (e > r) {
            i = e;
            break;
          }
        if ("USD" == t || !i)
          return { nSuggestedPriceInCents: null, nGuidelinesLevel: null };
        let a = h.Get().m_mapPriceGuidelines.get(i).get(t);
        const s = h.Get().m_mapPriceGuidelines.get(i).get("USD");
        if (s != r) {
          const e = r / s;
          (i *= e), (a = Math.ceil(a * e));
        }
        return { nSuggestedPriceInCents: a, nGuidelinesLevel: i };
      }
      function C() {
        const e = (0, P.AM)();
        return n.useCallback(
          () =>
            (function (e) {
              let t = 0;
              for (const r of e) {
                const e = new Array(),
                  i = new Array(),
                  a = h.Get().GetPrice(r, "USD");
                if (a && !(a <= 0)) {
                  for (const t of h.Get().m_rgKnownPriceKeys) {
                    if ("USD" == t) continue;
                    const { nSuggestedPriceInCents: a, nGuidelinesLevel: s } =
                      b(r, t);
                    null !== s &&
                      h.Get().GetPrice(r, t) != a &&
                      (e.push(t), i.push(a));
                  }
                  e.length > 0 &&
                    (h.Get().OverridePricesForPackage(r, e, i), (t += 1));
                }
              }
              t > 0 && h.Get().DispatchPriceOverridesCallbacks();
            })(e),
          [e],
        );
      }
      function I(e, t) {
        const r = (0, u.NW)();
        (0, u.Qg)(h.Get().GetPriceGridCellCallbackList(e, t), r);
        const i = h.Get().GetPrice(e, t);
        (0, u.Qg)(h.Get().GetPriceGridCellCallbackList(e, "USD"), r);
        const { nSuggestedPriceInCents: a, nGuidelinesLevel: s } = b(e, t),
          c = n.useCallback((r) => h.Get().OverridePrice(e, t, r), [e, t]),
          o = h.Get().GetPublishedPrice(e, t),
          l = h.Get().GetProposedPrice(e, t),
          { nMinPriceInCents: p, nMaxPriceInCents: d } = B(e, t),
          P = h.Get().GetMinimumDiscountPrice(t),
          g = i ? Math.floor((100 * (i - P)) / i) : 90,
          m = g < Math.min(90, Math.floor((100 * (s - 50)) / s)) ? g : null;
        return n.useMemo(
          () => ({
            nPriceInCents: i,
            nProposedPriceInCents: l,
            nPublishedPriceInCents: o,
            nMinPriceInCents: p,
            nMaxPriceInCents: d,
            nMaxDiscountPercentage: m,
            nSuggestedPriceInCents: a,
            fnSetPrice: c,
          }),
          [i, l, o, p, d, m, a, c],
        );
      }
      function E(e) {
        let [t, r] = n.useState(() => h.Get().BAnyPackagePriceBelowMin(e)),
          i = n.useCallback(() => {
            let t = h.Get().BAnyPackagePriceBelowMin(e);
            r(t);
          }, [e, r]);
        return (0, u.Qg)(h.Get().GetPackageOverridesCallbackList(e), i), t;
      }
      function L(e) {
        return h.Get().BAnyPackagePriceBelowMin(e);
      }
      function B(e, t) {
        let r = h.Get();
        return {
          nMinPriceInCents: r.GetMinimumBasePrice(t),
          nMaxPriceInCents: r.m_setRecurringSubscriptions.has(e)
            ? r.GetPublishedPrice(e, t)
            : null,
        };
      }
      function O() {
        return n.useCallback((e, t, r) => {
          const i = h.Get().GetPrice(e, t);
          return (
            h.Get().OverridePrice(e, t, r),
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
      function w(e) {
        return h.Get().m_mapPriceProposals.get(e);
      }
      function U(e) {
        return h.Get().m_mapPriceProposals.get(e);
      }
      function K(e) {
        let t = !1;
        for (const r of h.Get().m_rgKnownPriceKeys) {
          let i = h.Get().GetPublishedPrice(e, r);
          t = t || (0 != i && void 0 !== i);
        }
        return t;
      }
      function M(e) {
        const t = w(e),
          r = [];
        for (const i of h.Get().m_rgKnownPriceKeys) {
          const a = t.prices[i],
            s = h.Get().GetPublishedPrice(e, i);
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
      function R() {
        return h.Get().m_rgKnownPriceKeys;
      }
      function N(e) {
        let t = h.Get().m_mapPriceKeyDescriptions.get(e);
        return t ? t.strDescription : "";
      }
      function A(e) {
        return n.useCallback(() => {
          h.Get().DiscardAllLocalPriceOverridesForKey(e);
        }, [e]);
      }
      function V(e) {
        return n.useCallback(() => {
          h.Get().DiscardLocalPriceOverridesForPackage(e);
        }, [e]);
      }
      function W(e) {
        return n.useCallback(() => {
          h.Get().CancelProposal(e);
        }, [e]);
      }
      function T() {
        const [e, t] = n.useState(h.Get().m_strDisplayPriceKey),
          r = h.Get().m_rgKnownPriceKeys,
          i = n.useCallback((e) => {
            t(e),
              (h.Get().m_strDisplayPriceKey = e),
              h.Get().m_displayPriceKeyCallbackList.Dispatch(e);
          }, []);
        return { strPriceKey: e, rgSupportedPriceKeys: r, fnSetPriceKey: i };
      }
      function j(e) {
        const t = (0, u.NW)();
        return (
          (0, u.Qg)(h.Get().m_allPriceOverridesCallbackList, t),
          h.Get().BHasLocalPriceOverrides(e)
        );
      }
      function Q(e) {
        return h.Get().BHasLocalPriceOverrides(e);
      }
      function F() {
        const [e, t] = n.useState(() => h.Get().GetAllLocalPriceOverrides());
        return (0, u.Qg)(h.Get().m_allPriceOverridesCallbackList, t), e;
      }
      function x(e) {
        return (0, g.SZ)(() => h.Get().GetLocalOverrideCountForPriceKey(e));
      }
      function H() {
        return n.useCallback(() => {
          var e;
          return (
            (null === (e = h.Get().GetAllLocalPriceOverrides()) || void 0 === e
              ? void 0
              : e.length) > 0
          );
        }, []);
      }
      function $() {
        return n.useCallback(() => h.Get().DiscardAllLocalPriceOverrides(), []);
      }
      function z() {
        const e = [],
          t = n.useRef(new Map());
        h.Get().m_mapPriceGuidelines.forEach((r, i) => {
          const a = r.get("USD");
          e.push(a), t.current.set(a, i);
        }),
          e.sort((e, t) => e - t);
        const r = n.useCallback((e, r) => {
          const i = t.current.get(r);
          h.Get()
            .m_mapPriceGuidelines.get(i)
            .forEach((t, r) => h.Get().OverridePrice(e, r, t));
        }, []);
        return { rgUSDPricesInCents: e, fnApplyGuidelines: r };
      }
      function q() {
        return n.useCallback(
          (e, t, r) => h.Get().SubmitProposalToServer(e, t, r),
          [],
        );
      }
      function X() {
        return n.useCallback(
          (e, t) => h.Get().PublishApprovedProposal(e, t, 6e4),
          [],
        );
      }
      function Z(e) {
        let t = [];
        const r = h.Get().m_rgKnownPriceKeys;
        for (let i of e) {
          if (K(i)) continue;
          let e = !1;
          for (const t of r) {
            if (!h.Get().BPriceKeyRequired(t)) continue;
            if (!h.Get().GetPrice(i, t)) {
              e = !0;
              break;
            }
          }
          e && t.push(i);
        }
        return t;
      }
    },
    42006: (e, t, r) => {
      r.d(t, { $k: () => d, yh: () => s });
      var i = r(50423),
        a = r(31846);
      function s(e, t, r, i) {
        const s = (0, a.Xx)("#PackageGrid_MultipleBaseGamesFoundForPackage"),
          n = (0, a.Xx)("#PackageGrid_NoBaseGameFoundForPackage"),
          c = e == s,
          o = e == n,
          l = !c && !o,
          u = t == s,
          p = t == n,
          d = !u && !p;
        if (l && d) return e.localeCompare(t);
        if (l || d) return l ? -1 : 1;
        if (c == u && o == p) {
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
        return c ? -1 : 1;
      }
      const n = (e) => e.nextElementSibling,
        c = (e) => e.previousElementSibling,
        o = (e, t) => {
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
        l = new Map([
          [38, (e) => o(e, c)],
          [39, n],
          [40, (e) => o(e, n)],
          [37, c],
          [9, (e) => o(e, n)],
          [13, (e) => o(e, n)],
        ]);
      function u(e) {
        return (0, i.Jk)(e, (e) => e.classList.contains("tabulator-cell"));
      }
      function p(e) {
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
        const i = l.get(e.keyCode);
        if (!i) return;
        let a = i(u(e.currentTarget));
        for (; a; ) {
          if (
            "none" !=
              (null === (r = a.style) || void 0 === r ? void 0 : r.display) &&
            !a.classList.contains("tabulator-frozen")
          ) {
            const r = p(a);
            if (r) {
              return P(t, u(r)), r.focus(), void e.preventDefault();
            }
          }
          a = i(a);
        }
      }
      function P(e, t) {
        const r = e.columnManager.scrollLeft,
          i = t.offsetWidth,
          a = t.offsetLeft,
          s = a + i,
          n = e.columnManager.element.clientWidth,
          c = e.columnManager.headersElement.clientWidth,
          o = r + n;
        if (a >= o - c && s <= o) return;
        const l = (a + s) / 2 - (n - c / 2),
          u = (c - i) / 4,
          p = l + (l > r ? u : -1 * u);
        e.columnManager.scrollHorizontal(p), e.rowManager.scrollHorizontal(p);
      }
    },
    37047: (e, t, r) => {
      r.d(t, { $: () => i, _: () => a });
      const i = "America/Los_Angeles";
      function a(e) {
        const t = r(98973).unix(e).tz(i);
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
