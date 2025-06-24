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
        pV: () => d,
        uw: () => P,
        vs: () => m,
        ww: () => u,
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
      function u(e) {
        let r = o.Get().m_mapPackageData.get(e);
        return r ? r.package_name : e.toString();
      }
      function d() {
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
        Bt: () => z,
        Ci: () => H,
        FR: () => y,
        FX: () => M,
        Gs: () => _,
        NC: () => J,
        RO: () => T,
        T7: () => F,
        T_: () => R,
        U3: () => N,
        Wx: () => k,
        XB: () => x,
        XE: () => q,
        XK: () => A,
        Y5: () => L,
        YB: () => Z,
        Zz: () => Y,
        _A: () => D,
        d$: () => K,
        fZ: () => v,
        fr: () => W,
        h4: () => X,
        hm: () => O,
        iy: () => j,
        mP: () => V,
        nT: () => E,
        oj: () => b,
        tn: () => w,
        v4: () => B,
        ww: () => Q,
        xQ: () => I,
      });
      var i = t(34629),
        a = t(41735),
        s = t.n(a),
        c = t(90626),
        n = t(14947),
        o = t(68797),
        l = t(6144),
        p = t(73745),
        P = t(41338),
        u = t(78327),
        d = t(96745),
        g = t(65946),
        m = t(81393);
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
            r = (0, u.Tc)("base_prices", "application_config");
          if (
            (("dev" != u.TS.WEB_UNIVERSE && "beta" != u.TS.WEB_UNIVERSE) ||
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
              "dev" == u.TS.WEB_UNIVERSE &&
                console.error("Invalid base price payload");
          const t = (0, u.Tc)("recurring_subs", "application_config");
          if (
            (("dev" != u.TS.WEB_UNIVERSE && "beta" != u.TS.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading recurring subscriptions payload: ",
                t,
              ),
            t)
          )
            if (Array.isArray(t))
              for (const e of t) this.m_setRecurringSubscriptions.add(e);
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
                const r = i[e],
                  t = parseInt(e);
                this.m_mapPriceProposals.set(t, r);
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
              "dev" == u.TS.WEB_UNIVERSE &&
                console.error("Invalid pricing guidelines payload");
          this.m_rgKnownPriceKeys = Array.from(e).sort((e, r) =>
            (0, P.kd)(S(e), S(r)),
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
                const r = s[e];
                this.m_mapCurrencyData.set(e, r);
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
                const r = c[e];
                this.m_mapPriceKeyDescriptions.set(e, r);
              }
            else
              "dev" == u.TS.WEB_UNIVERSE &&
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
          return t.has(r) || t.set(r, new l.lu()), t.get(r);
        }
        GetPackageOverridesCallbackList(e) {
          if (!e) return null;
          let r = this.m_mapPackageOverridesCallbackList.get(e);
          return (
            r ||
              ((r = new l.lu()),
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
          (0, m.wT)(
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
            e.sort(f),
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
            submitterID: u.iA.accountid,
            prices: {},
            eState: 1,
            bPartnerWillPublish: r,
          };
          for (const r of this.m_rgKnownPriceKeys)
            t.prices[r] = this.GetPrice(e, r);
          return t;
        }
        async SubmitProposalToServer(e, r, t) {
          const i = this.BuildNewPricingProposal(e, r),
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
            l.append("partner_will_publish", r ? "1" : "0"),
            l.append("prices", a);
          let p = null;
          try {
            const r = await s().post(n, l, {
              withCredentials: !0,
              cancelToken: t?.token,
            });
            if (
              200 == r?.status &&
              1 == r.data?.success &&
              0 != r.data.eState
            ) {
              if (3 == r.data.eState) {
                this.m_mapPriceProposals.delete(e);
                for (const r of this.m_rgKnownPriceKeys)
                  this.m_mapPackagePrice.get(e).set(r, i.prices[r]);
              } else
                (i.eState = r.data.eState),
                  (i.proposalKey = r.data.proposalKey),
                  this.m_mapPriceProposals.set(e, i);
              return this.DiscardLocalPriceOverridesForPackage(e), r.data;
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
        async PublishApprovedProposal(e, r, t = 0) {
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
              cancelToken: r?.token,
              timeout: t,
            });
            if (200 == a?.status && 1 == a.data?.success) {
              this.m_mapPriceProposals.delete(e);
              for (const r of this.m_rgKnownPriceKeys)
                this.m_mapPackagePrice.get(e).set(r, i.prices[r]),
                  this.GetPriceGridCellCallbackList(e, r).Dispatch(
                    this.GetSavedPrice(e, r),
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
        async CancelProposal(e, r) {
          const t = this.m_mapPriceProposals.get(e);
          if (!t?.proposalKey) return { success: 8 };
          const i = (0, u.Tc)("publisherid", "application_config"),
            a =
              u.TS.PARTNER_BASE_URL +
              "pricing/ajaxcancelproposal/" +
              i +
              "/" +
              e,
            c = new FormData();
          c.append("sessionid", u.TS.SESSIONID),
            c.append("proposal_key", t.proposalKey);
          let n = null;
          try {
            const t = await s().post(a, c, {
              withCredentials: !0,
              cancelToken: r?.token,
            });
            if (200 == t?.status && 1 == t.data?.success) {
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
          for (let r of this.m_rgKnownPriceKeys) {
            let t = this.GetPrice(e, r);
            if (void 0 === t) continue;
            let { nMinPriceInCents: i, nMaxPriceInCents: a } = w(e, r);
            if (t < i) return !0;
          }
          return !1;
        }
      }
      function f(e, r) {
        if (e.strPriceKey == r.strPriceKey) {
          const t = (0, d.ww)(e.packageID),
            i = (0, d.ww)(r.packageID);
          return (0, P.kd)(t, i);
        }
        return (0, P.kd)(S(e.strPriceKey), S(r.strPriceKey));
      }
      function _(e) {
        const r = e.split("_")[0];
        return h.Get().m_mapCurrencyData.get(r);
      }
      function k(e, r) {
        if (void 0 === r) return ["", "", ""];
        const t = _(r) ?? _("USD");
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
      function S(e) {
        return G.has(e) ? G.get(e) : e.indexOf("_") > 0 ? "ZZZ" + e : e;
      }
      function y(e, r) {
        return h.Get().GetPrice(e, r);
      }
      function b(e) {
        const r = h.Get().m_strDisplayPriceKey;
        return k(h.Get().GetPrice(e, r), r).join("");
      }
      function v(e) {
        const [r, t] = c.useState(h.Get().m_strDisplayPriceKey);
        return (
          (0, p.hL)(h.Get().m_displayPriceKeyCallbackList, t),
          (function (e, r) {
            const [t, i] = c.useState(h.Get().GetPrice(e, r));
            return (
              (0, p.hL)(h.Get().GetPriceGridCellCallbackList(e, r), i),
              c.useEffect(() => i(h.Get().GetPrice(e, r)), [e, r]),
              k(t, r).join("")
            );
          })(e, r)
        );
      }
      function C(e, r) {
        const t = h.Get().GetPrice(e, "USD");
        let i = null;
        for (let e of h.Get().m_rgPriceLevels)
          if (e > t) {
            i = e;
            break;
          }
        if ("USD" == r || !i)
          return { nSuggestedPriceInCents: null, nGuidelinesLevel: null };
        let a = h.Get().m_mapPriceGuidelines.get(i).get(r);
        const s = h.Get().m_mapPriceGuidelines.get(i).get("USD");
        if (s != t) {
          const e = t / s;
          (i *= e), (a = Math.ceil(a * e));
        }
        return { nSuggestedPriceInCents: a, nGuidelinesLevel: i };
      }
      function D() {
        const e = (0, d.Yr)();
        return c.useCallback(
          () =>
            (function (e) {
              let r = 0;
              for (const t of e) {
                const e = new Array(),
                  i = new Array(),
                  a = h.Get().GetPrice(t, "USD");
                if (a && !(a <= 0)) {
                  for (const r of h.Get().m_rgKnownPriceKeys) {
                    if ("USD" == r) continue;
                    const { nSuggestedPriceInCents: a, nGuidelinesLevel: s } =
                      C(t, r);
                    null !== s &&
                      h.Get().GetPrice(t, r) != a &&
                      (e.push(r), i.push(a));
                  }
                  e.length > 0 &&
                    (h.Get().OverridePricesForPackage(t, e, i), (r += 1));
                }
              }
              r > 0 && h.Get().DispatchPriceOverridesCallbacks();
            })(e),
          [e],
        );
      }
      function I(e, r) {
        const t = (0, p.CH)();
        (0, p.hL)(h.Get().GetPriceGridCellCallbackList(e, r), t);
        const i = h.Get().GetPrice(e, r);
        (0, p.hL)(h.Get().GetPriceGridCellCallbackList(e, "USD"), t);
        const { nSuggestedPriceInCents: a, nGuidelinesLevel: s } = C(e, r),
          n = c.useCallback((t) => h.Get().OverridePrice(e, r, t), [e, r]),
          o = h.Get().GetPublishedPrice(e, r),
          l = h.Get().GetProposedPrice(e, r),
          { nMinPriceInCents: P, nMaxPriceInCents: u } = w(e, r),
          d = h.Get().GetMinimumDiscountPrice(r),
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
      function E(e) {
        let [r, t] = c.useState(() => h.Get().BAnyPackagePriceBelowMin(e)),
          i = c.useCallback(() => {
            let r = h.Get().BAnyPackagePriceBelowMin(e);
            t(r);
          }, [e, t]);
        return (0, p.hL)(h.Get().GetPackageOverridesCallbackList(e), i), r;
      }
      function L(e) {
        return h.Get().BAnyPackagePriceBelowMin(e);
      }
      function w(e, r) {
        let t = h.Get();
        return {
          nMinPriceInCents: t.GetMinimumBasePrice(r),
          nMaxPriceInCents: t.m_setRecurringSubscriptions.has(e)
            ? t.GetPublishedPrice(e, r)
            : null,
        };
      }
      function O() {
        return c.useCallback((e, r, t) => {
          const i = h.Get().GetPrice(e, r);
          return (
            h.Get().OverridePrice(e, r, t),
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
      function K(e) {
        return h.Get().m_mapPriceProposals.get(e);
      }
      function B() {
        return Array.from(h.Get().m_mapPriceProposals.values());
      }
      function T(e) {
        return h.Get().m_mapPriceProposals.get(e);
      }
      function U(e) {
        let r = !1;
        for (const t of h.Get().m_rgKnownPriceKeys) {
          let i = h.Get().GetPublishedPrice(e, t);
          r = r || (0 != i && void 0 !== i);
        }
        return r;
      }
      function M(e) {
        const r = K(e),
          t = [];
        for (const i of h.Get().m_rgKnownPriceKeys) {
          const a = r.prices[i],
            s = h.Get().GetPublishedPrice(e, i);
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
        return h.Get().m_rgKnownPriceKeys;
      }
      function A(e) {
        let r = h.Get().m_mapPriceKeyDescriptions.get(e);
        return r ? r.strDescription : "";
      }
      function V(e) {
        return c.useCallback(() => {
          h.Get().DiscardAllLocalPriceOverridesForKey(e);
        }, [e]);
      }
      function R(e) {
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
        const [e, r] = c.useState(h.Get().m_strDisplayPriceKey),
          t = h.Get().m_rgKnownPriceKeys,
          i = c.useCallback((e) => {
            r(e),
              (h.Get().m_strDisplayPriceKey = e),
              h.Get().m_displayPriceKeyCallbackList.Dispatch(e);
          }, []);
        return { strPriceKey: e, rgSupportedPriceKeys: t, fnSetPriceKey: i };
      }
      function x(e) {
        const r = (0, p.CH)();
        return (
          (0, p.hL)(h.Get().m_allPriceOverridesCallbackList, r),
          h.Get().BHasLocalPriceOverrides(e)
        );
      }
      function j(e) {
        return h.Get().BHasLocalPriceOverrides(e);
      }
      function H() {
        const [e, r] = c.useState(() => h.Get().GetAllLocalPriceOverrides());
        return (0, p.hL)(h.Get().m_allPriceOverridesCallbackList, r), e;
      }
      function Z(e) {
        return (0, g.q3)(() => h.Get().GetLocalOverrideCountForPriceKey(e));
      }
      function Y() {
        return c.useCallback(
          () => h.Get().GetAllLocalPriceOverrides()?.length > 0,
          [],
        );
      }
      function J() {
        return c.useCallback(() => h.Get().DiscardAllLocalPriceOverrides(), []);
      }
      function q() {
        const e = [],
          r = c.useRef(new Map());
        h.Get().m_mapPriceGuidelines.forEach((t, i) => {
          const a = t.get("USD");
          e.push(a), r.current.set(a, i);
        }),
          e.sort((e, r) => e - r);
        const t = c.useCallback((e, t) => {
          const i = r.current.get(t);
          h.Get()
            .m_mapPriceGuidelines.get(i)
            .forEach((r, t) => h.Get().OverridePrice(e, t, r));
        }, []);
        return { rgUSDPricesInCents: e, fnApplyGuidelines: t };
      }
      function z() {
        return c.useCallback(
          (e, r, t) => h.Get().SubmitProposalToServer(e, r, t),
          [],
        );
      }
      function X() {
        return c.useCallback(
          (e, r) => h.Get().PublishApprovedProposal(e, r, 6e4),
          [],
        );
      }
      function Q(e) {
        let r = [];
        const t = h.Get().m_rgKnownPriceKeys;
        for (let i of e) {
          if (U(i)) continue;
          let e = !1;
          for (const r of t) {
            if (!h.Get().BPriceKeyRequired(r)) continue;
            if (!h.Get().GetPrice(i, r)) {
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
      t.d(r, { es: () => s, nm: () => P });
      var i = t(56011),
        a = t(61859);
      function s(e, r) {
        const t = (0, a.we)("#PackageGrid_MultipleBaseGamesFoundForPackage"),
          i = (0, a.we)("#PackageGrid_NoBaseGameFoundForPackage"),
          s = e.original.appName,
          c = r.original.appName,
          n = s == t,
          o = s == i,
          l = !n && !o,
          p = c == t,
          P = c == i,
          u = !p && !P;
        if (l && u) return s.localeCompare(c);
        if (l || u) return l ? -1 : 1;
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
      const c = (e) => e.nextElementSibling,
        n = (e) => e.previousElementSibling,
        o = (e, r) => {
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
        l = new Map([
          [38, (e) => o(e, n)],
          [39, c],
          [40, (e) => o(e, c)],
          [37, n],
          [9, (e) => o(e, c)],
          [13, (e) => o(e, c)],
        ]);
      function p(e) {
        const r = Array.prototype.slice.call(e.children).reverse();
        for (; r.length > 0; ) {
          const e = r.pop();
          if ("input" === e.tagName.toLowerCase()) return e;
          r.push(...Array.prototype.slice.call(e.children).reverse());
        }
        return null;
      }
      function P(e) {
        let r = l.get(e.keyCode);
        if ((9 === e.keyCode && e.shiftKey && (r = (e) => o(e, n)), !r)) return;
        var t;
        let a = r(
          ((t = e.currentTarget),
          (0, i.Kf)(t, (e) => null != e.getAttribute("data-table-column-id"))),
        );
        for (; a; ) {
          const t = p(a);
          if (t) return t.focus(), void e.preventDefault();
          a = r(a);
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
