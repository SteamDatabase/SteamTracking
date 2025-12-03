/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [4160],
  {
    64641: (e) => {
      e.exports = {
        v6: "_2LxgdMcpWJRjkxZKbmeEEb",
        SubText: "vg0EOhKTLB3tLvshHMr7l",
        AvatarImageContainer: "_33hdFBTwBs64Fcp-bPdf4E",
        GameImageContainer: "_2OYADGuBPiyF7h50OJ0P1B",
        AvatarImage: "_2CQYcCggCXwVzZj2GWng5-",
        STV_HomeGridPreviewDetails: "Yncr-T63YFSJ46cq4Z2BJ",
        ChatAvatarImage: "_1cUR_vD8IvfJgOK1r89j4o",
        EditButton: "VsZ-bdWSNpnM9Vg6gkSyD",
        Small: "_3M4j828iWSVEZZAkypcBi1",
        FlexCenter: "_1R3ycnbAGUAy01o0TW7NNo",
        ThrobberCtn: "_3m7p67FD1Ynjm3BnyyjSSS",
        MarkdownLink: "_1WqumifyJucGDxm2oI6yRQ",
        SummaryTextArea: "cNMZ-dcMVhaQJFes_Ivwo",
        RemoveIcon: "_3NeLW5LAka4S9__PaMFE_J",
      };
    },
    96745: (e, r, t) => {
      "use strict";
      t.d(r, {
        OM: () => l,
        Yr: () => g,
        pV: () => u,
        uw: () => P,
        vs: () => m,
        ww: () => d,
        xi: () => n,
        zt: () => p,
      });
      var i = t(90626),
        a = t(6144),
        s = t(73745),
        c = t(78327);
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
          const r = e
              .getState()
              .columnFilters.find((e) => "packageName" === e.id)?.value,
            t = new URL(window.location.href);
          r != decodeURIComponent(t.searchParams.get(n)) &&
            (r
              ? t.searchParams.set(n, encodeURIComponent(r))
              : t.searchParams.delete(n),
            window.history.replaceState({}, "", t.toString()));
        }
        UpdateVisiblePackageList(e) {
          const r = e.getVisibleRows().filter((e) => !e.getCanExpand());
          (this.m_rgVisiblePackageIDs = []),
            r.forEach((e) =>
              this.m_rgVisiblePackageIDs.push(e.original.packageID),
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
      function d(e) {
        let r = o.Get().m_mapPackageData.get(e);
        return r ? r.package_name : e.toString();
      }
      function u() {
        return i.useCallback((e) => o.Get().UpdateVisiblePackageList(e), []);
      }
      function g() {
        const [e, r] = i.useState(o.Get().m_rgVisiblePackageIDs);
        return (0, s.hL)(o.Get().m_visiblePackageIDsCallbackList, r), e;
      }
      function m() {
        return i.useMemo(
          () => (0, c.Tc)("publisherid", "application_config"),
          [],
        );
      }
    },
    69423: (e, r, t) => {
      "use strict";
      t.d(r, {
        Bt: () => Q,
        Ci: () => Y,
        FR: () => b,
        FX: () => M,
        Gs: () => G,
        NC: () => z,
        RO: () => U,
        T7: () => j,
        T_: () => F,
        U3: () => N,
        Wx: () => S,
        XB: () => H,
        XE: () => X,
        XK: () => V,
        Y5: () => O,
        YB: () => J,
        Zz: () => q,
        _A: () => I,
        _w: () => i,
        d$: () => T,
        fZ: () => E,
        fr: () => x,
        h4: () => $,
        hm: () => B,
        iy: () => Z,
        mP: () => W,
        nT: () => w,
        oj: () => C,
        tn: () => K,
        v4: () => A,
        ww: () => ee,
        xQ: () => L,
      });
      var i,
        a = t(34629),
        s = t(41735),
        c = t.n(s),
        n = t(90626),
        o = t(14947),
        l = t(37085),
        p = t(68797),
        P = t(6144),
        d = t(73745),
        u = t(41338),
        g = t(78327),
        m = t(96745),
        h = t(65946),
        _ = t(81393);
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
      class f {
        m_mapPackagePrice = new Map();
        m_setRecurringSubscriptions = new Set();
        m_mapPriceProposals = new Map();
        m_mapLocalPackagePriceOverrides = new Map();
        m_mapPriceGridCellCallbackList = new Map();
        m_mapPackageOverridesCallbackList = new Map();
        m_allPriceOverridesCallbackList = new P.lu();
        m_mapOverridesPerPriceKey = new Map();
        m_mapCurrencyData = new Map();
        m_mapPriceKeyDescriptions = new Map();
        m_rgKnownPriceKeys;
        m_mapPriceGuidelines = new Map();
        m_rgPriceLevels = [];
        m_strDisplayPriceKey = "USD";
        m_displayPriceKeyCallbackList = new P.lu();
        static s_Singleton;
        static Get() {
          return (
            f.s_Singleton || ((f.s_Singleton = new f()), f.s_Singleton.Init()),
            f.s_Singleton
          );
        }
        constructor() {
          (0, o.Gn)(this),
            "dev" == g.TS.WEB_UNIVERSE && (window.g_PackagePricingStore = this);
        }
        Init() {
          const e = new Set(),
            r = (0, g.Tc)("base_prices", "application_config");
          if (
            (("dev" != g.TS.WEB_UNIVERSE && "beta" != g.TS.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading base price payload: ",
                r,
              ),
            r)
          )
            if (this.BIsPricePayloadValid(r))
              for (let t in r) {
                const i = r[t],
                  a = parseInt(t),
                  s = new Map();
                this.m_mapPackagePrice.set(a, s);
                for (let r in i) e.add(r.toUpperCase()), s.set(r, i[r]);
              }
            else
              "dev" == g.TS.WEB_UNIVERSE &&
                console.error("Invalid base price payload");
          const t = (0, g.Tc)("recurring_subs", "application_config");
          if (
            (("dev" != g.TS.WEB_UNIVERSE && "beta" != g.TS.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading recurring subscriptions payload: ",
                t,
              ),
            t)
          )
            if (Array.isArray(t))
              for (const e of t) this.m_setRecurringSubscriptions.add(e);
            else
              "dev" == g.TS.WEB_UNIVERSE &&
                console.error("Invalid recurring subscriptions payload");
          const i = (0, g.Tc)("pending_proposals", "application_config");
          if (
            (("dev" != g.TS.WEB_UNIVERSE && "beta" != g.TS.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading pending price proposal payload: ",
                i,
              ),
            i)
          )
            if (this.BIsPendingPricePayloadValid(i))
              for (let e in i) {
                const r = i[e],
                  t = parseInt(e);
                this.m_mapPriceProposals.set(t, r);
              }
            else
              "dev" == g.TS.WEB_UNIVERSE &&
                console.error("Invalid pending price proposal payload");
          const a = (0, g.Tc)("pricing_guidelines", "application_config");
          if (
            (("dev" != g.TS.WEB_UNIVERSE && "beta" != g.TS.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading pricing guidelines payload: ",
                a,
              ),
            a)
          )
            if (this.BIsGuidelinesPayloadValid(a)) {
              for (let r in a) {
                const t = a[r],
                  i = new Map(),
                  s = 100 * parseInt(r.substring(3));
                this.m_rgPriceLevels.push(s),
                  this.m_mapPriceGuidelines.set(s, i);
                for (let r in t)
                  e.add(r.toUpperCase()),
                    i.set(r.toUpperCase(), parseInt(t[r]));
              }
              this.m_rgPriceLevels.sort((e, r) => e - r);
            } else
              "dev" == g.TS.WEB_UNIVERSE &&
                console.error("Invalid pricing guidelines payload");
          this.m_rgKnownPriceKeys = Array.from(e).sort((e, r) =>
            (0, u.kd)(v(e), v(r)),
          );
          const s = (0, g.Tc)("currency_data", "application_config");
          if (
            (("dev" != g.TS.WEB_UNIVERSE && "beta" != g.TS.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading currency payload: ",
                s,
              ),
            s)
          )
            if (this.BIsCurrencyPayloadValid(s))
              for (let e in s) {
                const r = s[e];
                this.m_mapCurrencyData.set(e, r);
              }
            else
              "dev" == g.TS.WEB_UNIVERSE &&
                console.error("Invalid currency payload");
          const c = (0, g.Tc)("currency_descriptions", "application_config");
          if (
            (("dev" != g.TS.WEB_UNIVERSE && "beta" != g.TS.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading currency descriptions: ",
                c,
              ),
            c)
          )
            if (this.BIsCurrencyDescriptionPayloadValid(c))
              for (let e in c) {
                const r = c[e];
                this.m_mapPriceKeyDescriptions.set(e, r);
              }
            else
              "dev" == g.TS.WEB_UNIVERSE &&
                console.error("Invalid currency description payload");
        }
        BIsPricePayloadValid(e) {
          const r = e;
          if (!r || "object" != typeof r) return !1;
          for (let e in r) {
            if (isNaN(parseInt(e))) return !1;
            const t = r[e];
            if (!t || "object" != typeof t) return !1;
            for (let e in t)
              if ("string" != typeof e || "number" != typeof t[e]) return !1;
          }
          return !0;
        }
        BIsPendingPricePayloadValid(e) {
          const r = e;
          if (!r || "object" != typeof r) return !1;
          for (let e in r) {
            if (isNaN(parseInt(e))) return !1;
            const t = r[e];
            if (
              !t ||
              "object" != typeof t ||
              t.packageID !== parseInt(e) ||
              "object" != typeof t.prices
            )
              return !1;
          }
          return !0;
        }
        BIsGuidelinesPayloadValid(e) {
          const r = e;
          if (!r || "object" != typeof r) return !1;
          for (let e in r) {
            const t = r[e];
            if (!t || "object" != typeof t) return !1;
            for (let e in t)
              if ("string" != typeof e || isNaN(parseInt(t[e]))) return !1;
          }
          return !0;
        }
        BIsCurrencyPayloadValid(e) {
          const r = e;
          if (!r || "object" != typeof r) return !1;
          for (let e in r) {
            const t = r[e];
            if (!t || "object" != typeof t || t.strCode != e) return !1;
          }
          return !0;
        }
        BIsCurrencyDescriptionPayloadValid(e) {
          const r = e;
          if (!r || "object" != typeof r) return !1;
          for (let e in r) {
            const t = r[e];
            if (
              !t ||
              "object" != typeof t ||
              void 0 === t.bRequired ||
              void 0 === t.strDescription
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
        GetPublishedPrice(e, r) {
          return this.m_mapPackagePrice.get(e)?.get(r);
        }
        GetProposedPrice(e, r) {
          return this.m_mapPriceProposals.get(e)?.prices[r];
        }
        GetSavedPrice(e, r) {
          return this.GetProposedPrice(e, r) ?? this.GetPublishedPrice(e, r);
        }
        GetPrice(e, r) {
          return (
            this.m_mapLocalPackagePriceOverrides.get(e)?.get(r) ??
            this.GetSavedPrice(e, r)
          );
        }
        GetPriceGridCellCallbackList(e, r) {
          if (!e || !r) return null;
          this.m_mapPriceGridCellCallbackList.has(e) ||
            this.m_mapPriceGridCellCallbackList.set(e, new Map());
          const t = this.m_mapPriceGridCellCallbackList.get(e);
          return t.has(r) || t.set(r, new P.lu()), t.get(r);
        }
        GetPackageOverridesCallbackList(e) {
          if (!e) return null;
          let r = this.m_mapPackageOverridesCallbackList.get(e);
          return (
            r ||
              ((r = new P.lu()),
              this.m_mapPackageOverridesCallbackList.set(e, r)),
            r
          );
        }
        OverridePrice(e, r, t) {
          t != this.GetPrice(e, r) &&
            (this.m_mapLocalPackagePriceOverrides.has(e) ||
              this.m_mapLocalPackagePriceOverrides.set(e, new Map()),
            t == this.GetSavedPrice(e, r)
              ? this.m_mapLocalPackagePriceOverrides.get(e).delete(r)
              : this.m_mapLocalPackagePriceOverrides.get(e).set(r, t),
            this.GetPriceGridCellCallbackList(e, r).Dispatch(t),
            this.GetPackageOverridesCallbackList(e).Dispatch(),
            this.DispatchPriceOverridesCallbacks());
        }
        OverridePricesForPackage(e, r, t, i) {
          (0, _.wT)(
            r.length == t.length,
            `price list size doesn't match ${r.length} != ${t.length}`,
          );
          for (let i = 0; i < r.length; ++i) {
            const a = r[i],
              s = t[i];
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
            this.m_mapLocalPackagePriceOverrides.forEach((r, t) =>
              r.forEach((r, i) => {
                const a = this.GetSavedPrice(t, i);
                e.push({
                  packageID: t,
                  strPriceKey: i,
                  nPriceInCents: r,
                  nOldPriceInCents: a,
                });
              }),
            ),
            e.sort(k),
            e
          );
        }
        BHasLocalPriceOverride(e, r) {
          let t = this.m_mapLocalPackagePriceOverrides.get(e);
          return !!t && t.has(r);
        }
        UpdateOverridesPerPriceKey() {
          this.m_mapOverridesPerPriceKey.clear(),
            this.m_mapLocalPackagePriceOverrides.forEach((e, r) => {
              e.forEach((e, r) => {
                let t = this.m_mapOverridesPerPriceKey.get(r);
                t || (t = 0), t++, this.m_mapOverridesPerPriceKey.set(r, t);
              });
            });
        }
        DiscardAllLocalPriceOverrides() {
          const e = this.GetAllLocalPriceOverrides();
          this.m_mapLocalPackagePriceOverrides.clear();
          let r = new Set();
          for (const t of e) {
            const { packageID: e, strPriceKey: i } = t;
            this.GetPriceGridCellCallbackList(e, i).Dispatch(
              this.GetPrice(e, i),
            ),
              r.add(e);
          }
          for (const e of r) this.GetPackageOverridesCallbackList(e).Dispatch();
          this.DispatchPriceOverridesCallbacks();
        }
        DiscardAllLocalPriceOverridesForKey(e) {
          let r = !1,
            t = new Set();
          this.m_mapLocalPackagePriceOverrides.forEach((i, a) => {
            this.m_mapPriceKeyDescriptions.has(e) &&
              ((r = !0),
              this.m_mapLocalPackagePriceOverrides.get(a).delete(e),
              this.GetPriceGridCellCallbackList(a, e).Dispatch(
                this.GetPrice(a, e),
              ),
              t.add(a));
          });
          for (const e of t) this.GetPackageOverridesCallbackList(e).Dispatch();
          r && this.DispatchPriceOverridesCallbacks();
        }
        DiscardLocalPriceOverridesForPackage(e) {
          this.m_mapLocalPackagePriceOverrides.get(e)?.forEach((r, t) => {
            this.GetPriceGridCellCallbackList(e, t).Dispatch(
              this.GetSavedPrice(e, t),
            );
          }),
            this.m_mapLocalPackagePriceOverrides.delete(e),
            this.GetPackageOverridesCallbackList(e).Dispatch(),
            this.DispatchPriceOverridesCallbacks();
        }
        BuildNewPricingProposal(e, r) {
          const t = {
            packageID: e,
            rtSubmitted: Math.floor(Date.now() / 1e3),
            submitterID: g.iA.accountid,
            prices: {},
            eState: i.k_EPriceProposalStateActive,
            bPartnerWillPublish: r,
          };
          for (const r of this.m_rgKnownPriceKeys)
            t.prices[r] = this.GetPrice(e, r);
          return t;
        }
        async SubmitProposalToServer(e, r, t) {
          const a = this.BuildNewPricingProposal(e, r),
            s = JSON.stringify(a.prices),
            n = (0, g.Tc)("publisherid", "application_config"),
            o =
              g.TS.PARTNER_BASE_URL +
              "pricing/ajaxsubmitproposal/" +
              n +
              "/" +
              e,
            P = new FormData();
          P.append("sessionid", g.TS.SESSIONID),
            P.append("partner_will_publish", r ? "1" : "0"),
            P.append("prices", s);
          let d = null;
          try {
            const r = await c().post(o, P, {
              withCredentials: !0,
              cancelToken: t?.token,
            });
            if (
              200 == r?.status &&
              r.data?.success == l.d.k_EResultOK &&
              r.data.eState != i.k_EPriceProposalStateInvalid
            ) {
              if (r.data.eState == i.k_EPriceProposalStateApplied) {
                this.m_mapPriceProposals.delete(e);
                for (const r of this.m_rgKnownPriceKeys)
                  this.m_mapPackagePrice.get(e).set(r, a.prices[r]);
              } else
                (a.eState = r.data.eState),
                  (a.proposalKey = r.data.proposalKey),
                  this.m_mapPriceProposals.set(e, a);
              return this.DiscardLocalPriceOverridesForPackage(e), r.data;
            }
          } catch (e) {
            d = e;
          }
          const u = (0, p.H)(d);
          return (
            console.error(
              "CPackagePricingStore.SubmitProposalToServer: failed",
              u.strErrorMsg,
              u,
            ),
            d?.response?.data ?? { success: l.d.k_EResultFail }
          );
        }
        async PublishApprovedProposal(e, r, t = 0) {
          const a = this.m_mapPriceProposals.get(e);
          if (a?.eState != i.k_EPriceProposalStateApproved || !a?.proposalKey)
            return { success: l.d.k_EResultInvalidParam };
          const s = (0, g.Tc)("publisherid", "application_config"),
            n =
              g.TS.PARTNER_BASE_URL +
              "pricing/ajaxpublishproposal/" +
              s +
              "/" +
              e,
            o = new FormData();
          o.append("sessionid", g.TS.SESSIONID),
            o.append("proposal_key", a.proposalKey);
          let P = null;
          try {
            const i = await c().post(n, o, {
              withCredentials: !0,
              cancelToken: r?.token,
              timeout: t,
            });
            if (200 == i?.status && i.data?.success == l.d.k_EResultOK) {
              this.m_mapPriceProposals.delete(e);
              for (const r of this.m_rgKnownPriceKeys)
                this.m_mapPackagePrice.get(e).set(r, a.prices[r]),
                  this.GetPriceGridCellCallbackList(e, r).Dispatch(
                    this.GetSavedPrice(e, r),
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
          const d = (0, p.H)(P);
          return (
            console.error(
              "CPackagePricingStore.PublishApprovedProposal: failed",
              d.strErrorMsg,
              d,
            ),
            P?.response?.data ?? { success: l.d.k_EResultFail }
          );
        }
        async CancelProposal(e, r) {
          const t = this.m_mapPriceProposals.get(e);
          if (!t?.proposalKey) return { success: l.d.k_EResultInvalidParam };
          const i = (0, g.Tc)("publisherid", "application_config"),
            a =
              g.TS.PARTNER_BASE_URL +
              "pricing/ajaxcancelproposal/" +
              i +
              "/" +
              e,
            s = new FormData();
          s.append("sessionid", g.TS.SESSIONID),
            s.append("proposal_key", t.proposalKey);
          let n = null;
          try {
            const t = await c().post(a, s, {
              withCredentials: !0,
              cancelToken: r?.token,
            });
            if (200 == t?.status && t.data?.success == l.d.k_EResultOK) {
              this.m_mapPriceProposals.delete(e);
              for (const r of this.m_rgKnownPriceKeys)
                this.GetPriceGridCellCallbackList(e, r).Dispatch(
                  this.GetSavedPrice(e, r),
                );
              return (
                this.GetPackageOverridesCallbackList(e).Dispatch(),
                this.DispatchPriceOverridesCallbacks(),
                t.data
              );
            }
          } catch (e) {
            n = e;
          }
          const o = (0, p.H)(n);
          return (
            console.error(
              "CPackagePricingStore.CancelProposal: failed",
              o.strErrorMsg,
              o,
            ),
            n?.response?.data ?? { success: l.d.k_EResultFail }
          );
        }
        GetLocalOverrideCountForPriceKey(e) {
          return this.m_mapOverridesPerPriceKey.get(e) ?? 0;
        }
        BAnyPackagePriceBelowMin(e) {
          if (!e) return !1;
          for (let r of this.m_rgKnownPriceKeys) {
            let t = this.GetPrice(e, r);
            if (void 0 === t) continue;
            let { nMinPriceInCents: i, nMaxPriceInCents: a } = K(e, r);
            if (t < i) return !0;
          }
          return !1;
        }
      }
      function k(e, r) {
        if (e.strPriceKey == r.strPriceKey) {
          const t = (0, m.ww)(e.packageID),
            i = (0, m.ww)(r.packageID);
          return (0, u.kd)(t, i);
        }
        return (0, u.kd)(v(e.strPriceKey), v(r.strPriceKey));
      }
      function G(e) {
        const r = e.split("_")[0];
        return f.Get().m_mapCurrencyData.get(r);
      }
      function S(e, r) {
        if (void 0 === r) return ["", "", ""];
        const t = G(r) ?? G("USD");
        let i = "";
        if ("number" == typeof e) {
          let r = e.toString();
          r.length < 3 && (r = (1 == r.length ? "0" : "") + "0" + r);
          const a = r.length - 2;
          for (let e = 0; e < a; e++) {
            const s = r.charAt(e);
            (i += s),
              e < a - 1 &&
                (a - e - 1) % 3 == 0 &&
                "-" != s &&
                (i += t.strThousandsSeparator);
          }
          t.bWholeUnitsOnly ||
            ((i += t.strDecimalSymbol), (i += r.substr(r.length - 2)));
        }
        return t.bSymbolIsPrefix
          ? [t.strSymbol + t.strSymbolAndNumberSeparator, i, ""]
          : ["", i, t.strSymbolAndNumberSeparator + t.strSymbol];
      }
      (0, a.Cg)([o.sH], f.prototype, "m_mapOverridesPerPriceKey", void 0),
        (0, a.Cg)([o.XI], f.prototype, "UpdateOverridesPerPriceKey", null);
      const y = new Map([
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
      function v(e) {
        return y.has(e) ? y.get(e) : e.indexOf("_") > 0 ? "ZZZ" + e : e;
      }
      function b(e, r) {
        return f.Get().GetPrice(e, r);
      }
      function C(e) {
        const r = f.Get().m_strDisplayPriceKey;
        return S(f.Get().GetPrice(e, r), r).join("");
      }
      function E(e) {
        const [r, t] = n.useState(f.Get().m_strDisplayPriceKey);
        return (
          (0, d.hL)(f.Get().m_displayPriceKeyCallbackList, t),
          (function (e, r) {
            const [t, i] = n.useState(f.Get().GetPrice(e, r));
            return (
              (0, d.hL)(f.Get().GetPriceGridCellCallbackList(e, r), i),
              n.useEffect(() => i(f.Get().GetPrice(e, r)), [e, r]),
              S(t, r).join("")
            );
          })(e, r)
        );
      }
      function D(e, r) {
        const t = f.Get().GetPrice(e, "USD");
        let i = null;
        for (let e of f.Get().m_rgPriceLevels)
          if (e > t) {
            i = e;
            break;
          }
        if ("USD" == r || !i)
          return { nSuggestedPriceInCents: null, nGuidelinesLevel: null };
        let a = f.Get().m_mapPriceGuidelines.get(i).get(r);
        const s = f.Get().m_mapPriceGuidelines.get(i).get("USD");
        if (s != t) {
          const e = t / s;
          (i *= e), (a = Math.ceil(a * e));
        }
        return { nSuggestedPriceInCents: a, nGuidelinesLevel: i };
      }
      function I() {
        const e = (0, m.Yr)();
        return n.useCallback(
          () =>
            (function (e) {
              let r = 0;
              for (const t of e) {
                const e = new Array(),
                  i = new Array(),
                  a = f.Get().GetPrice(t, "USD");
                if (a && !(a <= 0)) {
                  for (const r of f.Get().m_rgKnownPriceKeys) {
                    if ("USD" == r) continue;
                    const { nSuggestedPriceInCents: a, nGuidelinesLevel: s } =
                      D(t, r);
                    null !== s &&
                      f.Get().GetPrice(t, r) != a &&
                      (e.push(r), i.push(a));
                  }
                  e.length > 0 &&
                    (f.Get().OverridePricesForPackage(t, e, i), (r += 1));
                }
              }
              r > 0 && f.Get().DispatchPriceOverridesCallbacks();
            })(e),
          [e],
        );
      }
      function L(e, r) {
        const t = (0, d.CH)();
        (0, d.hL)(f.Get().GetPriceGridCellCallbackList(e, r), t);
        const i = f.Get().GetPrice(e, r);
        (0, d.hL)(f.Get().GetPriceGridCellCallbackList(e, "USD"), t);
        const { nSuggestedPriceInCents: a, nGuidelinesLevel: s } = D(e, r),
          c = n.useCallback((t) => f.Get().OverridePrice(e, r, t), [e, r]),
          o = f.Get().GetPublishedPrice(e, r),
          l = f.Get().GetProposedPrice(e, r),
          { nMinPriceInCents: p, nMaxPriceInCents: P } = K(e, r),
          u = f.Get().GetMinimumDiscountPrice(r),
          g = i ? Math.floor((100 * (i - u)) / i) : 90,
          m = g < Math.min(90, Math.floor((100 * (s - 50)) / s)) ? g : null;
        return n.useMemo(
          () => ({
            nPriceInCents: i,
            nProposedPriceInCents: l,
            nPublishedPriceInCents: o,
            nMinPriceInCents: p,
            nMaxPriceInCents: P,
            nMaxDiscountPercentage: m,
            nSuggestedPriceInCents: a,
            fnSetPrice: c,
          }),
          [i, l, o, p, P, m, a, c],
        );
      }
      function w(e) {
        let [r, t] = n.useState(() => f.Get().BAnyPackagePriceBelowMin(e)),
          i = n.useCallback(() => {
            let r = f.Get().BAnyPackagePriceBelowMin(e);
            t(r);
          }, [e, t]);
        return (0, d.hL)(f.Get().GetPackageOverridesCallbackList(e), i), r;
      }
      function O(e) {
        return f.Get().BAnyPackagePriceBelowMin(e);
      }
      function K(e, r) {
        let t = f.Get();
        return {
          nMinPriceInCents: t.GetMinimumBasePrice(r),
          nMaxPriceInCents: t.m_setRecurringSubscriptions.has(e)
            ? t.GetPublishedPrice(e, r)
            : null,
        };
      }
      function B() {
        return n.useCallback((e, r, t) => {
          const i = f.Get().GetPrice(e, r);
          return (
            f.Get().OverridePrice(e, r, t),
            i == t
              ? null
              : {
                  packageID: e,
                  strPriceKey: r,
                  nPriceInCents: t,
                  nOldPriceInCents: i,
                }
          );
        }, []);
      }
      function T(e) {
        return f.Get().m_mapPriceProposals.get(e);
      }
      function A() {
        return Array.from(f.Get().m_mapPriceProposals.values());
      }
      function U(e) {
        return f.Get().m_mapPriceProposals.get(e);
      }
      function R(e) {
        let r = !1;
        for (const t of f.Get().m_rgKnownPriceKeys) {
          let i = f.Get().GetPublishedPrice(e, t);
          r = r || (0 != i && void 0 !== i);
        }
        return r;
      }
      function M(e) {
        const r = T(e),
          t = [];
        for (const i of f.Get().m_rgKnownPriceKeys) {
          const a = r.prices[i],
            s = f.Get().GetPublishedPrice(e, i);
          a != s &&
            t.push({
              packageID: e,
              strPriceKey: i,
              nPriceInCents: a,
              nOldPriceInCents: s,
            });
        }
        return t;
      }
      function N() {
        return f.Get().m_rgKnownPriceKeys;
      }
      function V(e) {
        let r = f.Get().m_mapPriceKeyDescriptions.get(e);
        return r ? r.strDescription : "";
      }
      function W(e) {
        return n.useCallback(() => {
          f.Get().DiscardAllLocalPriceOverridesForKey(e);
        }, [e]);
      }
      function F(e) {
        return n.useCallback(() => {
          f.Get().DiscardLocalPriceOverridesForPackage(e);
        }, [e]);
      }
      function x(e) {
        return n.useCallback(() => {
          f.Get().CancelProposal(e);
        }, [e]);
      }
      function j() {
        const [e, r] = n.useState(f.Get().m_strDisplayPriceKey),
          t = f.Get().m_rgKnownPriceKeys,
          i = n.useCallback((e) => {
            r(e),
              (f.Get().m_strDisplayPriceKey = e),
              f.Get().m_displayPriceKeyCallbackList.Dispatch(e);
          }, []);
        return { strPriceKey: e, rgSupportedPriceKeys: t, fnSetPriceKey: i };
      }
      function H(e) {
        const r = (0, d.CH)();
        return (
          (0, d.hL)(f.Get().m_allPriceOverridesCallbackList, r),
          f.Get().BHasLocalPriceOverrides(e)
        );
      }
      function Z(e) {
        return f.Get().BHasLocalPriceOverrides(e);
      }
      function Y() {
        const [e, r] = n.useState(() => f.Get().GetAllLocalPriceOverrides());
        return (0, d.hL)(f.Get().m_allPriceOverridesCallbackList, r), e;
      }
      function J(e) {
        return (0, h.q3)(() => f.Get().GetLocalOverrideCountForPriceKey(e));
      }
      function q() {
        return n.useCallback(
          () => f.Get().GetAllLocalPriceOverrides()?.length > 0,
          [],
        );
      }
      function z() {
        return n.useCallback(() => f.Get().DiscardAllLocalPriceOverrides(), []);
      }
      function X() {
        const e = [],
          r = n.useRef(new Map());
        f.Get().m_mapPriceGuidelines.forEach((t, i) => {
          const a = t.get("USD");
          e.push(a), r.current.set(a, i);
        }),
          e.sort((e, r) => e - r);
        const t = n.useCallback((e, t) => {
          const i = r.current.get(t);
          f.Get()
            .m_mapPriceGuidelines.get(i)
            .forEach((r, t) => f.Get().OverridePrice(e, t, r));
        }, []);
        return { rgUSDPricesInCents: e, fnApplyGuidelines: t };
      }
      function Q() {
        return n.useCallback(
          (e, r, t) => f.Get().SubmitProposalToServer(e, r, t),
          [],
        );
      }
      function $() {
        return n.useCallback(
          (e, r) => f.Get().PublishApprovedProposal(e, r, 6e4),
          [],
        );
      }
      function ee(e) {
        let r = [];
        const t = f.Get().m_rgKnownPriceKeys;
        for (let i of e) {
          if (R(i)) continue;
          let e = !1;
          for (const r of t) {
            if (!f.Get().BPriceKeyRequired(r)) continue;
            if (!f.Get().GetPrice(i, r)) {
              e = !0;
              break;
            }
          }
          e && r.push(i);
        }
        return r;
      }
    },
    9554: (e, r, t) => {
      "use strict";
      t.d(r, { es: () => c, nm: () => d });
      var i = t(86328),
        a = t(56011),
        s = t(61859);
      function c(e, r) {
        const t = (0, s.we)("#PackageGrid_MultipleBaseGamesFoundForPackage"),
          i = (0, s.we)("#PackageGrid_NoBaseGameFoundForPackage"),
          a = e.original.appName,
          c = r.original.appName,
          n = a == t,
          o = a == i,
          l = !n && !o,
          p = c == t,
          P = c == i,
          d = !p && !P;
        if (l && d) return a.localeCompare(c);
        if (l || d) return l ? -1 : 1;
        if (n == p && o == P) {
          const t = e.original.packageName,
            i = r.original.packageName;
          return t && i
            ? t.localeCompare(i)
            : t || i
              ? t
                ? -1
                : 1
              : e.original.packageID - r.original.packageID;
        }
        return n ? -1 : 1;
      }
      const n = (e) => e.nextElementSibling,
        o = (e) => e.previousElementSibling,
        l = (e, r) => {
          const t = e.getAttribute("data-table-column-id"),
            i = e.parentElement;
          let a = i && r(i);
          for (; t && a; ) {
            for (const e of Array.from(a.children))
              if (t == e.getAttribute("data-table-column-id")) return e;
            a = r(a);
          }
          return null;
        },
        p = new Map([
          [i.T.UpArrow, (e) => l(e, o)],
          [i.T.RightArrow, n],
          [i.T.DownArrow, (e) => l(e, n)],
          [i.T.LeftArrow, o],
          [i.T.Tab, (e) => l(e, n)],
          [i.T.Enter, (e) => l(e, n)],
        ]);
      function P(e) {
        const r = Array.prototype.slice.call(e.children).reverse();
        for (; r.length > 0; ) {
          const e = r.pop();
          if ("input" === e.tagName.toLowerCase()) return e;
          r.push(...Array.prototype.slice.call(e.children).reverse());
        }
        return null;
      }
      function d(e) {
        let r = p.get(e.keyCode);
        if ((e.keyCode === i.T.Tab && e.shiftKey && (r = (e) => l(e, o)), !r))
          return;
        var t;
        let s = r(
          ((t = e.currentTarget),
          (0, a.Kf)(t, (e) => null != e.getAttribute("data-table-column-id"))),
        );
        for (; s; ) {
          const t = P(s);
          if (t) return t.focus(), void e.preventDefault();
          s = r(s);
        }
      }
    },
    70986: (e, r, t) => {
      "use strict";
      t.d(r, { M: () => a, o: () => i });
      const i = "America/Los_Angeles";
      function a(e) {
        const r = t(87937).unix(e).tz(i);
        return (
          r.seconds(0),
          r.minutes(0),
          r.hours(10),
          r.unix() < e && r.hours(34),
          r.unix()
        );
      }
    },
  },
]);
