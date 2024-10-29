/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [4160],
  {
    96745: (e, t, r) => {
      r.d(t, {
        OM: () => l,
        Yr: () => g,
        pV: () => d,
        uw: () => P,
        vs: () => m,
        ww: () => u,
        xi: () => n,
        zt: () => p,
      });
      var i = r(90626),
        a = r(6144),
        s = r(375),
        c = r(78327);
      const n = "pn";
      class o {
        m_rgPackageIDs;
        m_rgPackageData;
        m_mapPackageData;
        m_rgVisiblePackageIDs = [];
        m_visiblePackageIDsCallbackList = new a.lu();
        static s_Singleton;
        static Get() {
          return (
            o.s_Singleton || ((o.s_Singleton = new o()), o.s_Singleton.Init()),
            o.s_Singleton
          );
        }
        constructor() {
          "dev" == c.TS.WEB_UNIVERSE && (window.g_PackageGridStore = this);
        }
        Init() {
          let e = (0, c.Tc)("package_data", "application_config");
          e
            ? ((this.m_rgPackageIDs = e.map((e) => e.packageid)),
              (this.m_rgPackageData = e),
              (this.m_mapPackageData = new Map(e.map((e) => [e.packageid, e]))))
            : ((this.m_rgPackageIDs = (0, c.Tc)(
                "package_ids",
                "application_config",
              )),
              (this.m_mapPackageData = new Map())),
            ("dev" != c.TS.WEB_UNIVERSE && "beta" != c.TS.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackageGridStore loading payload: ",
                this.m_rgPackageIDs,
              ),
            "dev" != c.TS.WEB_UNIVERSE ||
              Array.isArray(this.m_rgPackageIDs) ||
              console.error("CPackageGridStore Invalid payload");
        }
        UpdatePackageNameSearchState(e) {
          const t = e.getHeaderFilterValue("packageName"),
            r = new URL(window.location.href);
          t != decodeURIComponent(r.searchParams.get(n)) &&
            (t
              ? r.searchParams.set(n, encodeURIComponent(t))
              : r.searchParams.delete(n),
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
      function p() {
        return o.Get().m_rgPackageIDs;
      }
      function P() {
        return o.Get().m_rgPackageData;
      }
      function u(e) {
        let t = o.Get().m_mapPackageData.get(e);
        return t ? t.package_name : e.toString();
      }
      function d() {
        return i.useCallback((e) => o.Get().UpdateVisiblePackageList(e), []);
      }
      function g() {
        const [e, t] = i.useState(o.Get().m_rgVisiblePackageIDs);
        return (0, s.hL)(o.Get().m_visiblePackageIDsCallbackList, t), e;
      }
      function m() {
        return i.useMemo(
          () => (0, c.Tc)("publisherid", "application_config"),
          [],
        );
      }
    },
    69423: (e, t, r) => {
      r.d(t, {
        Bt: () => Z,
        Ci: () => H,
        FR: () => S,
        FX: () => M,
        Gs: () => _,
        NC: () => q,
        RO: () => U,
        T7: () => F,
        T_: () => A,
        U3: () => V,
        Wx: () => k,
        XB: () => j,
        XE: () => X,
        XK: () => N,
        Y5: () => L,
        YB: () => z,
        Zz: () => Y,
        _A: () => D,
        d$: () => K,
        fZ: () => C,
        fr: () => W,
        h4: () => $,
        hm: () => O,
        iy: () => x,
        mP: () => R,
        nT: () => I,
        oj: () => b,
        tn: () => w,
        v4: () => B,
        ww: () => J,
        xQ: () => E,
      });
      var i = r(34629),
        a = r(41735),
        s = r.n(a),
        c = r(90626),
        n = r(14947),
        o = r(68797),
        l = r(6144),
        p = r(375),
        P = r(41338),
        u = r(78327),
        d = r(96745),
        g = r(65946),
        m = r(44332);
      class h {
        m_mapPackagePrice = new Map();
        m_setRecurringSubscriptions = new Set();
        m_mapPriceProposals = new Map();
        m_mapLocalPackagePriceOverrides = new Map();
        m_mapPriceGridCellCallbackList = new Map();
        m_mapPackageOverridesCallbackList = new Map();
        m_allPriceOverridesCallbackList = new l.lu();
        m_mapOverridesPerPriceKey = new Map();
        m_mapCurrencyData = new Map();
        m_mapPriceKeyDescriptions = new Map();
        m_rgKnownPriceKeys;
        m_mapPriceGuidelines = new Map();
        m_rgPriceLevels = [];
        m_strDisplayPriceKey = "USD";
        m_displayPriceKeyCallbackList = new l.lu();
        static s_Singleton;
        static Get() {
          return (
            h.s_Singleton || ((h.s_Singleton = new h()), h.s_Singleton.Init()),
            h.s_Singleton
          );
        }
        constructor() {
          (0, n.Gn)(this),
            "dev" == u.TS.WEB_UNIVERSE && (window.g_PackagePricingStore = this);
        }
        Init() {
          const e = new Set(),
            t = (0, u.Tc)("base_prices", "application_config");
          if (
            (("dev" != u.TS.WEB_UNIVERSE && "beta" != u.TS.WEB_UNIVERSE) ||
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
              "dev" == u.TS.WEB_UNIVERSE &&
                console.error("Invalid base price payload");
          const r = (0, u.Tc)("recurring_subs", "application_config");
          if (
            (("dev" != u.TS.WEB_UNIVERSE && "beta" != u.TS.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading recurring subscriptions payload: ",
                r,
              ),
            r)
          )
            if (Array.isArray(r))
              for (const e of r) this.m_setRecurringSubscriptions.add(e);
            else
              "dev" == u.TS.WEB_UNIVERSE &&
                console.error("Invalid recurring subscriptions payload");
          const i = (0, u.Tc)("pending_proposals", "application_config");
          if (
            (("dev" != u.TS.WEB_UNIVERSE && "beta" != u.TS.WEB_UNIVERSE) ||
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
              "dev" == u.TS.WEB_UNIVERSE &&
                console.error("Invalid pending price proposal payload");
          const a = (0, u.Tc)("pricing_guidelines", "application_config");
          if (
            (("dev" != u.TS.WEB_UNIVERSE && "beta" != u.TS.WEB_UNIVERSE) ||
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
              "dev" == u.TS.WEB_UNIVERSE &&
                console.error("Invalid pricing guidelines payload");
          this.m_rgKnownPriceKeys = Array.from(e).sort((e, t) =>
            (0, P.kd)(y(e), y(t)),
          );
          const s = (0, u.Tc)("currency_data", "application_config");
          if (
            (("dev" != u.TS.WEB_UNIVERSE && "beta" != u.TS.WEB_UNIVERSE) ||
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
              "dev" == u.TS.WEB_UNIVERSE &&
                console.error("Invalid currency payload");
          const c = (0, u.Tc)("currency_descriptions", "application_config");
          if (
            (("dev" != u.TS.WEB_UNIVERSE && "beta" != u.TS.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading currency descriptions: ",
                c,
              ),
            c)
          )
            if (this.BIsCurrencyDescriptionPayloadValid(c))
              for (let e in c) {
                const t = c[e];
                this.m_mapPriceKeyDescriptions.set(e, t);
              }
            else
              "dev" == u.TS.WEB_UNIVERSE &&
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
          return this.m_mapPriceKeyDescriptions.get(e)?.bRequired ?? !1;
        }
        GetMinimumBasePrice(e) {
          return this.m_mapPriceKeyDescriptions.get(e)?.nLowestBase || 0;
        }
        GetMinimumDiscountPrice(e) {
          return this.m_mapPriceKeyDescriptions.get(e)?.nLowestDiscount || 0;
        }
        GetPublishedPrice(e, t) {
          return this.m_mapPackagePrice.get(e)?.get(t);
        }
        GetProposedPrice(e, t) {
          return this.m_mapPriceProposals.get(e)?.prices[t];
        }
        GetSavedPrice(e, t) {
          return this.GetProposedPrice(e, t) ?? this.GetPublishedPrice(e, t);
        }
        GetPrice(e, t) {
          return (
            this.m_mapLocalPackagePriceOverrides.get(e)?.get(t) ??
            this.GetSavedPrice(e, t)
          );
        }
        GetPriceGridCellCallbackList(e, t) {
          if (!e || !t) return null;
          this.m_mapPriceGridCellCallbackList.has(e) ||
            this.m_mapPriceGridCellCallbackList.set(e, new Map());
          const r = this.m_mapPriceGridCellCallbackList.get(e);
          return r.has(t) || r.set(t, new l.lu()), r.get(t);
        }
        GetPackageOverridesCallbackList(e) {
          if (!e) return null;
          let t = this.m_mapPackageOverridesCallbackList.get(e);
          return (
            t ||
              ((t = new l.lu()),
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
          (0, m.w)(
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
          return this.m_mapLocalPackagePriceOverrides.get(e)?.size > 0;
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
          this.m_mapLocalPackagePriceOverrides.get(e)?.forEach((t, r) => {
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
            submitterID: u.iA.accountid,
            prices: {},
            eState: 1,
            bPartnerWillPublish: t,
          };
          for (const t of this.m_rgKnownPriceKeys)
            r.prices[t] = this.GetPrice(e, t);
          return r;
        }
        async SubmitProposalToServer(e, t, r) {
          const i = this.BuildNewPricingProposal(e, t),
            a = JSON.stringify(i.prices),
            c = (0, u.Tc)("publisherid", "application_config"),
            n =
              u.TS.PARTNER_BASE_URL +
              "pricing/ajaxsubmitproposal/" +
              c +
              "/" +
              e,
            l = new FormData();
          l.append("sessionid", u.TS.SESSIONID),
            l.append("partner_will_publish", t ? "1" : "0"),
            l.append("prices", a);
          let p = null;
          try {
            const t = await s().post(n, l, {
              withCredentials: !0,
              cancelToken: r?.token,
            });
            if (
              200 == t?.status &&
              1 == t.data?.success &&
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
            p = e;
          }
          const P = (0, o.H)(p);
          return (
            console.error(
              "CPackagePricingStore.SubmitProposalToServer: failed",
              P.strErrorMsg,
              P,
            ),
            p?.response?.data ?? { success: 2 }
          );
        }
        async PublishApprovedProposal(e, t, r = 0) {
          const i = this.m_mapPriceProposals.get(e);
          if (4 != i?.eState || !i?.proposalKey) return { success: 8 };
          const a = (0, u.Tc)("publisherid", "application_config"),
            c =
              u.TS.PARTNER_BASE_URL +
              "pricing/ajaxpublishproposal/" +
              a +
              "/" +
              e,
            n = new FormData();
          n.append("sessionid", u.TS.SESSIONID),
            n.append("proposal_key", i.proposalKey);
          let l = null;
          try {
            const a = await s().post(c, n, {
              withCredentials: !0,
              cancelToken: t?.token,
              timeout: r,
            });
            if (200 == a?.status && 1 == a.data?.success) {
              this.m_mapPriceProposals.delete(e);
              for (const t of this.m_rgKnownPriceKeys)
                this.m_mapPackagePrice.get(e).set(t, i.prices[t]),
                  this.GetPriceGridCellCallbackList(e, t).Dispatch(
                    this.GetSavedPrice(e, t),
                  );
              return (
                this.GetPackageOverridesCallbackList(e).Dispatch(),
                this.DispatchPriceOverridesCallbacks(),
                a.data
              );
            }
          } catch (e) {
            l = e;
          }
          const p = (0, o.H)(l);
          return (
            console.error(
              "CPackagePricingStore.PublishApprovedProposal: failed",
              p.strErrorMsg,
              p,
            ),
            l?.response?.data ?? { success: 2 }
          );
        }
        async CancelProposal(e, t) {
          const r = this.m_mapPriceProposals.get(e);
          if (!r?.proposalKey) return { success: 8 };
          const i = (0, u.Tc)("publisherid", "application_config"),
            a =
              u.TS.PARTNER_BASE_URL +
              "pricing/ajaxcancelproposal/" +
              i +
              "/" +
              e,
            c = new FormData();
          c.append("sessionid", u.TS.SESSIONID),
            c.append("proposal_key", r.proposalKey);
          let n = null;
          try {
            const r = await s().post(a, c, {
              withCredentials: !0,
              cancelToken: t?.token,
            });
            if (200 == r?.status && 1 == r.data?.success) {
              this.m_mapPriceProposals.delete(e);
              for (const t of this.m_rgKnownPriceKeys)
                this.GetPriceGridCellCallbackList(e, t).Dispatch(
                  this.GetSavedPrice(e, t),
                );
              return (
                this.GetPackageOverridesCallbackList(e).Dispatch(),
                this.DispatchPriceOverridesCallbacks(),
                r.data
              );
            }
          } catch (e) {
            n = e;
          }
          const l = (0, o.H)(n);
          return (
            console.error(
              "CPackagePricingStore.CancelProposal: failed",
              l.strErrorMsg,
              l,
            ),
            n?.response?.data ?? { success: 2 }
          );
        }
        GetLocalOverrideCountForPriceKey(e) {
          return this.m_mapOverridesPerPriceKey.get(e) ?? 0;
        }
        BAnyPackagePriceBelowMin(e) {
          if (!e) return !1;
          for (let t of this.m_rgKnownPriceKeys) {
            let r = this.GetPrice(e, t);
            if (void 0 === r) continue;
            let { nMinPriceInCents: i, nMaxPriceInCents: a } = w(e, t);
            if (r < i) return !0;
          }
          return !1;
        }
      }
      function f(e, t) {
        if (e.strPriceKey == t.strPriceKey) {
          const r = (0, d.ww)(e.packageID),
            i = (0, d.ww)(t.packageID);
          return (0, P.kd)(r, i);
        }
        return (0, P.kd)(y(e.strPriceKey), y(t.strPriceKey));
      }
      function _(e) {
        const t = e.split("_")[0];
        return h.Get().m_mapCurrencyData.get(t);
      }
      function k(e, t) {
        if (void 0 === t) return ["", "", ""];
        const r = _(t) ?? _("USD");
        let i = "";
        if ("number" == typeof e) {
          let t = e.toString();
          t.length < 3 && (t = (1 == t.length ? "0" : "") + "0" + t);
          const a = t.length - 2;
          for (let e = 0; e < a; e++) {
            const s = t.charAt(e);
            (i += s),
              e < a - 1 &&
                (a - e - 1) % 3 == 0 &&
                "-" != s &&
                (i += r.strThousandsSeparator);
          }
          r.bWholeUnitsOnly ||
            ((i += r.strDecimalSymbol), (i += t.substr(t.length - 2)));
        }
        return r.bSymbolIsPrefix
          ? [r.strSymbol + r.strSymbolAndNumberSeparator, i, ""]
          : ["", i, r.strSymbolAndNumberSeparator + r.strSymbol];
      }
      (0, i.Cg)([n.sH], h.prototype, "m_mapOverridesPerPriceKey", void 0),
        (0, i.Cg)([n.XI], h.prototype, "UpdateOverridesPerPriceKey", null);
      const G = new Map([
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
      function y(e) {
        return G.has(e) ? G.get(e) : e.indexOf("_") > 0 ? "ZZZ" + e : e;
      }
      function S(e, t) {
        return h.Get().GetPrice(e, t);
      }
      function b(e) {
        const t = h.Get().m_strDisplayPriceKey;
        return k(h.Get().GetPrice(e, t), t).join("");
      }
      function C(e) {
        const [t, r] = c.useState(h.Get().m_strDisplayPriceKey);
        return (
          (0, p.hL)(h.Get().m_displayPriceKeyCallbackList, r),
          (function (e, t) {
            const [r, i] = c.useState(h.Get().GetPrice(e, t));
            return (
              (0, p.hL)(h.Get().GetPriceGridCellCallbackList(e, t), i),
              c.useEffect(() => i(h.Get().GetPrice(e, t)), [e, t]),
              k(r, t).join("")
            );
          })(e, t)
        );
      }
      function v(e, t) {
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
      function D() {
        const e = (0, d.Yr)();
        return c.useCallback(
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
                      v(r, t);
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
      function E(e, t) {
        const r = (0, p.CH)();
        (0, p.hL)(h.Get().GetPriceGridCellCallbackList(e, t), r);
        const i = h.Get().GetPrice(e, t);
        (0, p.hL)(h.Get().GetPriceGridCellCallbackList(e, "USD"), r);
        const { nSuggestedPriceInCents: a, nGuidelinesLevel: s } = v(e, t),
          n = c.useCallback((r) => h.Get().OverridePrice(e, t, r), [e, t]),
          o = h.Get().GetPublishedPrice(e, t),
          l = h.Get().GetProposedPrice(e, t),
          { nMinPriceInCents: P, nMaxPriceInCents: u } = w(e, t),
          d = h.Get().GetMinimumDiscountPrice(t),
          g = i ? Math.floor((100 * (i - d)) / i) : 90,
          m = g < Math.min(90, Math.floor((100 * (s - 50)) / s)) ? g : null;
        return c.useMemo(
          () => ({
            nPriceInCents: i,
            nProposedPriceInCents: l,
            nPublishedPriceInCents: o,
            nMinPriceInCents: P,
            nMaxPriceInCents: u,
            nMaxDiscountPercentage: m,
            nSuggestedPriceInCents: a,
            fnSetPrice: n,
          }),
          [i, l, o, P, u, m, a, n],
        );
      }
      function I(e) {
        let [t, r] = c.useState(() => h.Get().BAnyPackagePriceBelowMin(e)),
          i = c.useCallback(() => {
            let t = h.Get().BAnyPackagePriceBelowMin(e);
            r(t);
          }, [e, r]);
        return (0, p.hL)(h.Get().GetPackageOverridesCallbackList(e), i), t;
      }
      function L(e) {
        return h.Get().BAnyPackagePriceBelowMin(e);
      }
      function w(e, t) {
        let r = h.Get();
        return {
          nMinPriceInCents: r.GetMinimumBasePrice(t),
          nMaxPriceInCents: r.m_setRecurringSubscriptions.has(e)
            ? r.GetPublishedPrice(e, t)
            : null,
        };
      }
      function O() {
        return c.useCallback((e, t, r) => {
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
      function K(e) {
        return h.Get().m_mapPriceProposals.get(e);
      }
      function B() {
        return Array.from(h.Get().m_mapPriceProposals.values());
      }
      function U(e) {
        return h.Get().m_mapPriceProposals.get(e);
      }
      function T(e) {
        let t = !1;
        for (const r of h.Get().m_rgKnownPriceKeys) {
          let i = h.Get().GetPublishedPrice(e, r);
          t = t || (0 != i && void 0 !== i);
        }
        return t;
      }
      function M(e) {
        const t = K(e),
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
      function V() {
        return h.Get().m_rgKnownPriceKeys;
      }
      function N(e) {
        let t = h.Get().m_mapPriceKeyDescriptions.get(e);
        return t ? t.strDescription : "";
      }
      function R(e) {
        return c.useCallback(() => {
          h.Get().DiscardAllLocalPriceOverridesForKey(e);
        }, [e]);
      }
      function A(e) {
        return c.useCallback(() => {
          h.Get().DiscardLocalPriceOverridesForPackage(e);
        }, [e]);
      }
      function W(e) {
        return c.useCallback(() => {
          h.Get().CancelProposal(e);
        }, [e]);
      }
      function F() {
        const [e, t] = c.useState(h.Get().m_strDisplayPriceKey),
          r = h.Get().m_rgKnownPriceKeys,
          i = c.useCallback((e) => {
            t(e),
              (h.Get().m_strDisplayPriceKey = e),
              h.Get().m_displayPriceKeyCallbackList.Dispatch(e);
          }, []);
        return { strPriceKey: e, rgSupportedPriceKeys: r, fnSetPriceKey: i };
      }
      function j(e) {
        const t = (0, p.CH)();
        return (
          (0, p.hL)(h.Get().m_allPriceOverridesCallbackList, t),
          h.Get().BHasLocalPriceOverrides(e)
        );
      }
      function x(e) {
        return h.Get().BHasLocalPriceOverrides(e);
      }
      function H() {
        const [e, t] = c.useState(() => h.Get().GetAllLocalPriceOverrides());
        return (0, p.hL)(h.Get().m_allPriceOverridesCallbackList, t), e;
      }
      function z(e) {
        return (0, g.q3)(() => h.Get().GetLocalOverrideCountForPriceKey(e));
      }
      function Y() {
        return c.useCallback(
          () => h.Get().GetAllLocalPriceOverrides()?.length > 0,
          [],
        );
      }
      function q() {
        return c.useCallback(() => h.Get().DiscardAllLocalPriceOverrides(), []);
      }
      function X() {
        const e = [],
          t = c.useRef(new Map());
        h.Get().m_mapPriceGuidelines.forEach((r, i) => {
          const a = r.get("USD");
          e.push(a), t.current.set(a, i);
        }),
          e.sort((e, t) => e - t);
        const r = c.useCallback((e, r) => {
          const i = t.current.get(r);
          h.Get()
            .m_mapPriceGuidelines.get(i)
            .forEach((t, r) => h.Get().OverridePrice(e, r, t));
        }, []);
        return { rgUSDPricesInCents: e, fnApplyGuidelines: r };
      }
      function Z() {
        return c.useCallback(
          (e, t, r) => h.Get().SubmitProposalToServer(e, t, r),
          [],
        );
      }
      function $() {
        return c.useCallback(
          (e, t) => h.Get().PublishApprovedProposal(e, t, 6e4),
          [],
        );
      }
      function J(e) {
        let t = [];
        const r = h.Get().m_rgKnownPriceKeys;
        for (let i of e) {
          if (T(i)) continue;
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
    9554: (e, t, r) => {
      r.d(t, { es: () => s, nm: () => u });
      var i = r(56011),
        a = r(61859);
      function s(e, t, r, i) {
        const s = (0, a.we)("#PackageGrid_MultipleBaseGamesFoundForPackage"),
          c = (0, a.we)("#PackageGrid_NoBaseGameFoundForPackage"),
          n = e == s,
          o = e == c,
          l = !n && !o,
          p = t == s,
          P = t == c,
          u = !p && !P;
        if (l && u) return e.localeCompare(t);
        if (l || u) return l ? -1 : 1;
        if (n == p && o == P) {
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
        return n ? -1 : 1;
      }
      const c = (e) => e.nextElementSibling,
        n = (e) => e.previousElementSibling,
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
          [38, (e) => o(e, n)],
          [39, c],
          [40, (e) => o(e, c)],
          [37, n],
          [9, (e) => o(e, c)],
          [13, (e) => o(e, c)],
        ]);
      function p(e) {
        return (0, i.Kf)(e, (e) => e.classList.contains("tabulator-cell"));
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
      function u(e, t) {
        const r = l.get(e.keyCode);
        if (!r) return;
        let i = r(p(e.currentTarget));
        for (; i; ) {
          if (
            "none" != i.style?.display &&
            !i.classList.contains("tabulator-frozen")
          ) {
            const r = P(i);
            if (r) {
              return d(t, p(r)), r.focus(), void e.preventDefault();
            }
          }
          i = r(i);
        }
      }
      function d(e, t) {
        const r = e.columnManager.scrollLeft,
          i = t.offsetWidth,
          a = t.offsetLeft,
          s = a + i,
          c = e.columnManager.element.clientWidth,
          n = e.columnManager.headersElement.clientWidth,
          o = r + c;
        if (a >= o - n && s <= o) return;
        const l = (a + s) / 2 - (c - n / 2),
          p = (n - i) / 4,
          P = l + (l > r ? p : -1 * p);
        e.columnManager.scrollHorizontal(P), e.rowManager.scrollHorizontal(P);
      }
    },
    70986: (e, t, r) => {
      r.d(t, { M: () => a, o: () => i });
      const i = "America/Los_Angeles";
      function a(e) {
        const t = r(87937).unix(e).tz(i);
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
