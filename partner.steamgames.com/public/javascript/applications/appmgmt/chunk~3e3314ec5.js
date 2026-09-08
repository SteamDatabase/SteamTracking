/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [9246],
  {
    69041: (e) => {
      e.exports = {
        Button: "_0BH1ydyFmSnUvoVK2hIc",
        "Size-1": "_3QKUrmKA1DptBhihc8GSAF",
        Icon: "_2_fy3SzcKa1xbrgpG7JsW1",
        "Size-2": "_2rbqjlRz2ShvIiYodebfc2",
        "Size-3": "_2WV0DrM2sIAtg0N1lOU26f",
        "Variant-basic": "AjHMNGqS56A5oRpfyYhEz",
        "Variant-dark": "_29OIX_G3reF-rRPFaaV2mW",
        "Variant-inverted": "RmQIHBmo3QqjBtWih540t",
        "Variant-outline": "_3Ivla_Ow2vkS32o8Ih_PeA",
        "Variant-ghost": "_2oeLjYS5GL7cq3t8V_fC-8",
        "Variant-vibrant": "HpR1uGt2MH6wMkWZz8XTQ",
        Width: "_3sJrbUPuxxtvf7RM9OYpwU",
        MinWidth: "_1SOkb8NGXTctRFJs2fKHh-",
      };
    },
    73406: (e) => {
      e.exports = {
        Spinner: "_2DCKU_4nS3RTO87T3YPOx_",
        LoadingSpinnerAmin: "_1SGyFmFKc3sUwmfqrrtxxJ",
        "Size-1": "_1Vxi9jNBkNCJzht7q4pUcZ",
        "Size-2": "_4YMNfb67K5DdLQo1iUILX",
        "Size-3": "_389OPmdZoebw42_AlsUFxi",
        "Size-4": "_2_bEJtUl18pDhzOGeCFemg",
        "Size-5": "_1XSG-5xKQMEoGjfZTMCTke",
        "Variant-solid": "lQP4sfWThY4O0ZGRwTFFo",
        "Variant-bright": "_3Jl5ljGbdHy_fzyOpYdWpB",
        ChildContainer: "_3drTSOAFK4l1BW7WUUbGvs",
      };
    },
    16180: (e) => {
      e.exports = {
        Option: "_3a3fNdwhCItYEc1SsUNP",
        Disabled: "_21NiFCkZFlTZ8WrrrxX0BX",
        RadioCircle: "_13ZbEe1M2PJ-21o9RTar64",
      };
    },
    44041: (e) => {
      e.exports = { Box: "_2YzOLNBx6TonKU0Zmp20l4" };
    },
    68875: (e) => {
      e.exports = {
        Flex: "_3nHL7awgK1Qei1XivGvHMK",
        Direction: "_3JCkAyd9cnB90tRcDLPp4W",
        Justify: "_12ampOcrpRamy1y301kEaK",
        Align: "_1SxQuUnaM-MXeF5UfssWve",
        Gap: "ja5o2GZTopxfGJArsZgFh",
        GapX: "_3KiTPfFvdkPH6ixij56nVM",
        GapY: "_38cfDT7owcq-7PHlx-Bx2j",
        Wrap: "dB7ipW28YN-_GytLR4EuE",
        Inline: "LOeaKjPDMbdcAB54IFgyX",
      };
    },
    91239: (e) => {
      e.exports = { Reset: "_3A_c3YHYd4YIjA8Y-olnPl" };
    },
    96745: (e, r, t) => {
      "use strict";
      t.d(r, {
        E1: () => p,
        OM: () => l,
        Sm: () => _,
        Yr: () => f,
        pV: () => g,
        uw: () => d,
        vs: () => b,
        ww: () => m,
        xi: () => c,
        zt: () => u,
      });
      var i = t(90626),
        a = t(6144),
        s = t(73745),
        n = t(78327);
      const c = "pn";
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
          0;
        }
        Init() {
          let e = (0, n.Tc)("package_data", "application_config");
          e
            ? ((this.m_rgPackageIDs = e.map((e) => e.packageid)),
              (this.m_rgPackageData = e),
              (this.m_mapPackageData = new Map(e.map((e) => [e.packageid, e]))))
            : ((this.m_rgPackageIDs = (0, n.Tc)(
                "package_ids",
                "application_config",
              )),
              (this.m_mapPackageData = new Map()));
        }
        UpdatePackageNameSearchState(e) {
          const r = e
              .getState()
              .columnFilters.find((e) => "packageName" === e.id)?.value,
            t = new URL(window.location.href);
          r != decodeURIComponent(t.searchParams.get(c)) &&
            (r
              ? t.searchParams.set(c, encodeURIComponent(r))
              : t.searchParams.delete(c),
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
        SetVisiblePackageList(e) {
          (this.m_rgVisiblePackageIDs = [...e]),
            this.m_visiblePackageIDsCallbackList.Dispatch(
              this.m_rgVisiblePackageIDs,
            );
        }
      }
      function l() {
        return o.Get().m_rgPackageIDs;
      }
      function u() {
        return o.Get().m_rgPackageIDs;
      }
      function d() {
        return o.Get().m_rgPackageData;
      }
      function m(e) {
        let r = o.Get().m_mapPackageData.get(e);
        return r ? r.package_name : e.toString();
      }
      function p(e) {
        let r = o.Get().m_mapPackageData.get(e);
        return !r || !!r.released;
      }
      function g() {
        return i.useCallback((e) => o.Get().UpdateVisiblePackageList(e), []);
      }
      function _(e) {
        o.Get().SetVisiblePackageList(e);
      }
      function f() {
        const [e, r] = i.useState(o.Get().m_rgVisiblePackageIDs);
        return (0, s.hL)(o.Get().m_visiblePackageIDsCallbackList, r), e;
      }
      function b() {
        return i.useMemo(
          () => (0, n.Tc)("publisherid", "application_config"),
          [],
        );
      }
    },
    69423: (e, r, t) => {
      "use strict";
      t.d(r, {
        $i: () => le,
        Ao: () => W,
        Bt: () => ue,
        Ci: () => se,
        Dl: () => L,
        FR: () => z,
        FX: () => Z,
        Gs: () => S,
        NC: () => oe,
        Oc: () => I,
        RO: () => $,
        T7: () => te,
        T_: () => ee,
        U3: () => J,
        Wx: () => C,
        XB: () => ie,
        XK: () => Q,
        Y2: () => O,
        Y5: () => F,
        YB: () => ne,
        Zz: () => ce,
        _A: () => q,
        d$: () => V,
        fZ: () => T,
        fr: () => re,
        h4: () => de,
        hm: () => E,
        iy: () => ae,
        mP: () => X,
        mv: () => R,
        nT: () => x,
        oL: () => D,
        oj: () => j,
        tn: () => N,
        v4: () => Y,
        ww: () => me,
        xQ: () => K,
      });
      var i = t(34629),
        a = t(41735),
        s = t.n(a),
        n = t(90626),
        c = t(14947),
        o = t(37085),
        l = t(68797),
        u = t(6144),
        d = t(73745),
        m = t(41338),
        p = t(78327),
        g = t(96745),
        _ = t(65946),
        f = t(81393),
        b = t(4160),
        P = t(31031),
        h = t(48174),
        y = t(87700),
        v = t(72255),
        w = t(87718);
      class B {
        m_mapPackagePrice = new Map();
        m_mapPackageCountryOverridePrice = new Map();
        m_setRecurringSubscriptions = new Set();
        m_mapPriceProposals = new Map();
        m_mapLocalPackagePriceOverrides = new Map();
        m_mapPriceGridCellCallbackList = new Map();
        m_mapPackageOverridesCallbackList = new Map();
        m_allPriceOverridesCallbackList = new u.lu();
        m_mapOverridesPerPriceKey = new Map();
        m_mapCurrencyData = new Map();
        m_mapPriceKeyDescriptions = new Map();
        m_rgKnownPriceKeys;
        m_strDisplayPriceKey = "USD";
        m_displayPriceKeyCallbackList = new u.lu();
        static s_Singleton;
        static Get() {
          return (
            B.s_Singleton || ((B.s_Singleton = new B()), B.s_Singleton.Init()),
            B.s_Singleton
          );
        }
        constructor() {
          (0, c.Gn)(this);
        }
        Init() {
          const e = (0, p.Tc)("base_prices", "application_config");
          if (e)
            if (this.BIsPricePayloadValid(e))
              for (let r in e) {
                const t = e[r],
                  i = parseInt(r),
                  a = new Map();
                this.m_mapPackagePrice.set(i, a);
                for (let e in t)
                  (0, v.IG)(e)
                    ? (this.m_mapPackageCountryOverridePrice.has(i) ||
                        this.m_mapPackageCountryOverridePrice.set(i, new Map()),
                      this.m_mapPackageCountryOverridePrice
                        .get(i)
                        .set(e.toUpperCase(), t[e]))
                    : a.set(e, t[e]);
              }
            else 0;
          const r = (0, p.Tc)("recurring_subs", "application_config");
          if (r)
            if (Array.isArray(r))
              for (const e of r) this.m_setRecurringSubscriptions.add(e);
            else 0;
          const t = (0, p.Tc)("pending_proposals", "application_config");
          if (t)
            if (this.BIsPendingPricePayloadValid(t))
              for (let e in t) {
                const r = t[e],
                  i = parseInt(e);
                this.m_mapPriceProposals.set(i, r);
              }
            else 0;
          const i = (0, p.Tc)("valid_price_keys", "application_config");
          i &&
            this.BIsPriceKeyValid(i) &&
            (this.m_rgKnownPriceKeys = i.sort((e, r) => (0, m.kd)(k(e), k(r))));
          const a = (0, p.Tc)("currency_data", "application_config");
          if (a)
            if (this.BIsCurrencyPayloadValid(a))
              for (let e in a) {
                const r = a[e];
                this.m_mapCurrencyData.set(e, r);
              }
            else 0;
          const s = (0, p.Tc)("currency_descriptions", "application_config");
          if (s)
            if (this.BIsCurrencyDescriptionPayloadValid(s))
              for (let e in s) {
                const r = s[e];
                this.m_mapPriceKeyDescriptions.set(e, r);
              }
            else 0;
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
        BIsCurrencyPayloadValid(e) {
          const r = e;
          if (!r || "object" != typeof r) return !1;
          for (let e in r) {
            const t = r[e];
            if (!t || "object" != typeof t || t.strCode != e) return !1;
          }
          return !0;
        }
        BIsPriceKeyValid(e) {
          const r = e;
          if (!r || !Array.isArray(r)) return !1;
          for (let e in r) if ("string" != typeof e) return !1;
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
        GetPublishedCountryOverrides(e) {
          return this.m_mapPackageCountryOverridePrice.has(e)
            ? Array.from(this.m_mapPackageCountryOverridePrice.get(e).keys())
            : [];
        }
        GetPublishedPriceCountryOverride(e, r) {
          return this.m_mapPackageCountryOverridePrice.get(e).get(r);
        }
        GetPublishedPrice(e, r) {
          return (0, v.IG)(r)
            ? this.m_mapPackageCountryOverridePrice.get(e)?.get(r)
            : this.m_mapPackagePrice.get(e)?.get(r);
        }
        GetProposedPrice(e, r) {
          return this.m_mapPriceProposals.get(e)?.prices[r];
        }
        GetSavedPrice(e, r) {
          return this.GetProposedPrice(e, r) ?? this.GetPublishedPrice(e, r);
        }
        GetPrice(e, r) {
          return this.GetLocalOverridePrice(e, r) ?? this.GetSavedPrice(e, r);
        }
        GetLocalOverridePrice(e, r) {
          return this.m_mapLocalPackagePriceOverrides.get(e)?.get(r);
        }
        GetPriceGridCellCallbackList(e, r) {
          if (!e || !r) return null;
          this.m_mapPriceGridCellCallbackList.has(e) ||
            this.m_mapPriceGridCellCallbackList.set(e, new Map());
          const t = this.m_mapPriceGridCellCallbackList.get(e);
          return t.has(r) || t.set(r, new u.lu()), t.get(r);
        }
        GetPackageOverridesCallbackList(e) {
          if (!e) return null;
          let r = this.m_mapPackageOverridesCallbackList.get(e);
          return (
            r ||
              ((r = new u.lu()),
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
          (0, f.wT)(
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
            e.sort(M),
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
            submitterID: p.iA.accountid,
            prices: {},
            eState: b.Al,
            bPartnerWillPublish: r,
          };
          for (const r of this.m_rgKnownPriceKeys)
            t.prices[r] = this.GetPrice(e, r);
          const i = this.m_mapPackageCountryOverridePrice.get(e);
          if (i) for (const r of i.keys()) t.prices[r] = this.GetPrice(e, r);
          return t;
        }
        async SubmitProposalToServer(e, r, t) {
          const i = this.BuildNewPricingProposal(e, r),
            a = JSON.stringify(i.prices),
            n = (0, p.Tc)("publisherid", "application_config"),
            c =
              p.TS.PARTNER_BASE_URL +
              "pricing/ajaxsubmitproposal/" +
              n +
              "/" +
              e,
            u = new FormData();
          u.append("sessionid", (0, p.KC)()),
            u.append("partner_will_publish", r ? "1" : "0"),
            u.append("prices", a);
          let d = null;
          try {
            const r = await s().post(c, u, {
              withCredentials: !0,
              cancelToken: t?.token,
            });
            if (
              200 == r?.status &&
              r.data?.success == o.R &&
              r.data.eState != b.nD
            ) {
              if (r.data.eState == b.pJ) {
                this.m_mapPriceProposals.delete(e);
                for (const r of this.m_rgKnownPriceKeys)
                  this.m_mapPackagePrice.has(e) ||
                    this.m_mapPackagePrice.set(e, new Map()),
                    this.m_mapPackagePrice.get(e).set(r, i.prices[r]);
              } else
                (i.eState = r.data.eState),
                  (i.proposalKey = r.data.proposalKey),
                  this.m_mapPriceProposals.set(e, i);
              return this.DiscardLocalPriceOverridesForPackage(e), r.data;
            }
          } catch (e) {
            d = e;
          }
          const m = (0, l.H)(d);
          return (
            console.error(
              "CPackagePricingStore.SubmitProposalToServer: failed",
              m.strErrorMsg,
              m,
            ),
            d?.response?.data ?? { success: o.zi }
          );
        }
        async PublishApprovedProposal(e, r, t = 0) {
          const i = this.m_mapPriceProposals.get(e);
          if (i?.eState != b.Zo || !i?.proposalKey) return { success: o.nO };
          const a = (0, p.Tc)("publisherid", "application_config"),
            n =
              p.TS.PARTNER_BASE_URL +
              "pricing/ajaxpublishproposal/" +
              a +
              "/" +
              e,
            c = new FormData();
          c.append("sessionid", (0, p.KC)()),
            c.append("proposal_key", i.proposalKey);
          let u = null;
          try {
            const a = await s().post(n, c, {
              withCredentials: !0,
              cancelToken: r?.token,
              timeout: t,
            });
            if (200 == a?.status && a.data?.success == o.R) {
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
            u = e;
          }
          const d = (0, l.H)(u);
          return (
            console.error(
              "CPackagePricingStore.PublishApprovedProposal: failed",
              d.strErrorMsg,
              d,
            ),
            u?.response?.data ?? { success: o.zi }
          );
        }
        async CancelProposal(e, r) {
          const t = this.m_mapPriceProposals.get(e);
          if (!t?.proposalKey) return { success: o.nO };
          const i = (0, p.Tc)("publisherid", "application_config"),
            a =
              p.TS.PARTNER_BASE_URL +
              "pricing/ajaxcancelproposal/" +
              i +
              "/" +
              e,
            n = new FormData();
          n.append("sessionid", (0, p.KC)()),
            n.append("proposal_key", t.proposalKey);
          let c = null;
          try {
            const t = await s().post(a, n, {
              withCredentials: !0,
              cancelToken: r?.token,
            });
            if (200 == t?.status && t.data?.success == o.R) {
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
            c = e;
          }
          const u = (0, l.H)(c);
          return (
            console.error(
              "CPackagePricingStore.CancelProposal: failed",
              u.strErrorMsg,
              u,
            ),
            c?.response?.data ?? { success: o.zi }
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
            let { nMinPriceInCents: i, nMaxPriceInCents: a } = N(e, r);
            if (t < i) return !0;
          }
          return !1;
        }
      }
      function M(e, r) {
        if (e.strPriceKey == r.strPriceKey) {
          const t = (0, g.ww)(e.packageID),
            i = (0, g.ww)(r.packageID);
          return (0, m.kd)(t, i);
        }
        return (0, m.kd)(k(e.strPriceKey), k(r.strPriceKey));
      }
      function S(e) {
        const r = e.split("_")[0];
        return B.Get().m_mapCurrencyData.get(r);
      }
      function C(e, r) {
        if (void 0 === r) return ["", "", ""];
        const t = S(r) ?? S("USD");
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
      (0, i.Cg)([c.sH], B.prototype, "m_mapOverridesPerPriceKey", void 0),
        (0, i.Cg)([d.oI], B.prototype, "OverridePrice", null),
        (0, i.Cg)([c.XI], B.prototype, "UpdateOverridesPerPriceKey", null);
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
      function k(e) {
        return G.has(e) ? G.get(e) : e.indexOf("_") > 0 ? "ZZZ" + e : e;
      }
      function z(e, r) {
        return B.Get().GetPrice(e, r);
      }
      function O(e) {
        return B.Get().GetPublishedCountryOverrides(e);
      }
      function D(e, r) {
        return B.Get().GetPublishedPriceCountryOverride(e, r);
      }
      function R(e, r) {
        return B.Get().GetPublishedPrice(e, r);
      }
      function I(e, r) {
        return B.Get().GetProposedPrice(e, r);
      }
      function L(e, r) {
        return B.Get().GetLocalOverridePrice(e, r);
      }
      function j(e) {
        const r = B.Get().m_strDisplayPriceKey;
        return C(B.Get().GetPrice(e, r), r).join("");
      }
      function T(e) {
        const [r, t] = n.useState(B.Get().m_strDisplayPriceKey);
        return (
          (0, d.hL)(B.Get().m_displayPriceKeyCallbackList, t),
          (function (e, r) {
            const [t, i] = n.useState(B.Get().GetPrice(e, r));
            return (
              (0, d.hL)(B.Get().GetPriceGridCellCallbackList(e, r), i),
              n.useEffect(() => i(B.Get().GetPrice(e, r)), [e, r]),
              C(t, r).join("")
            );
          })(e, r)
        );
      }
      function q() {
        const e = (0, g.Yr)(),
          r = (0, h.cT)(),
          t = (0, y.Bb)();
        return n.useCallback(
          () =>
            (function (e, r, t) {
              let i = 0;
              for (const a of e) {
                const e = new Array(),
                  s = new Array(),
                  n = B.Get().GetPrice(a, "USD");
                if (n && !(n <= 0)) {
                  for (const i of B.Get().m_rgKnownPriceKeys) {
                    if ("USD" == i) continue;
                    const n = B.Get().GetPrice(a, "USD"),
                      { nSuggestedPriceInCents: c, nGuidelinesLevel: o } = (0,
                      P.$)(r, t, n, (0, v.ei)(i), (0, w.vS)(i));
                    null !== o &&
                      B.Get().GetPrice(a, i) != c &&
                      (e.push(i), s.push(c));
                  }
                  e.length > 0 &&
                    (B.Get().OverridePricesForPackage(a, e, s), (i += 1));
                }
              }
              i > 0 && B.Get().DispatchPriceOverridesCallbacks();
            })(e, r, t),
          [e, r, t],
        );
      }
      function K(e, r) {
        const t = (0, d.CH)();
        (0, d.hL)(B.Get().GetPriceGridCellCallbackList(e, r), t);
        const i = B.Get().GetPrice(e, r),
          a = (0, h.cT)(),
          s = (0, y.Bb)();
        (0, d.hL)(B.Get().GetPriceGridCellCallbackList(e, "USD"), t);
        const c = B.Get().GetPrice(e, "USD"),
          { nSuggestedPriceInCents: o, nGuidelinesLevel: l } = (0, P.$)(
            a,
            s,
            c,
            (0, v.ei)(r),
            (0, w.vS)(r),
          ),
          u = n.useCallback((t) => B.Get().OverridePrice(e, r, t), [e, r]),
          m = B.Get().GetPublishedPrice(e, r),
          p = B.Get().GetProposedPrice(e, r),
          { nMinPriceInCents: g, nMaxPriceInCents: _ } = N(e, r),
          f = W(r, i, l);
        return n.useMemo(
          () => ({
            nPriceInCents: i,
            nProposedPriceInCents: p,
            nPublishedPriceInCents: m,
            nMinPriceInCents: g,
            nMaxPriceInCents: _,
            nMaxDiscountPercentage: f,
            nSuggestedPriceInCents: o,
            fnSetPrice: u,
          }),
          [i, p, m, g, _, f, o, u],
        );
      }
      const A = 90,
        U = 10;
      function W(e, r, t, i) {
        const a = B.Get().GetMinimumDiscountPrice(e),
          s = r ? Math.floor((100 * (r - a)) / r) : A,
          n = Math.min(A, Math.floor((100 * (t - 50)) / t));
        if (i) return r < a || s < U ? null : Math.max(Math.min(s, A), 0);
        return s < n ? s : null;
      }
      function x(e) {
        let [r, t] = n.useState(() => B.Get().BAnyPackagePriceBelowMin(e)),
          i = n.useCallback(() => {
            let r = B.Get().BAnyPackagePriceBelowMin(e);
            t(r);
          }, [e, t]);
        return (0, d.hL)(B.Get().GetPackageOverridesCallbackList(e), i), r;
      }
      function F(e) {
        return B.Get().BAnyPackagePriceBelowMin(e);
      }
      function N(e, r) {
        let t = B.Get();
        return {
          nMinPriceInCents: t.GetMinimumBasePrice(r),
          nMaxPriceInCents: t.m_setRecurringSubscriptions.has(e)
            ? t.GetPublishedPrice(e, r)
            : null,
        };
      }
      function E() {
        return n.useCallback((e, r, t) => {
          const i = B.Get().GetPrice(e, r);
          return (
            B.Get().OverridePrice(e, r, t),
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
      function V(e) {
        const r = (0, d.CH)();
        return (
          (0, d.hL)(B.Get().GetPriceGridCellCallbackList(e, "USD"), r),
          B.Get().m_mapPriceProposals.get(e)
        );
      }
      function Y() {
        return Array.from(B.Get().m_mapPriceProposals.values());
      }
      function $(e) {
        return B.Get().m_mapPriceProposals.get(e);
      }
      function H(e) {
        let r = !1;
        for (const t of B.Get().m_rgKnownPriceKeys) {
          let i = B.Get().GetPublishedPrice(e, t);
          r = r || (0 != i && void 0 !== i);
        }
        return r;
      }
      function Z(e) {
        const r = V(e),
          t = [];
        for (const i of B.Get().m_rgKnownPriceKeys) {
          const a = r.prices[i],
            s = B.Get().GetPublishedPrice(e, i);
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
      function J() {
        return B.Get().m_rgKnownPriceKeys;
      }
      function Q(e) {
        let r = B.Get().m_mapPriceKeyDescriptions.get(e);
        return r ? r.strDescription : "";
      }
      function X(e) {
        return n.useCallback(() => {
          B.Get().DiscardAllLocalPriceOverridesForKey(e);
        }, [e]);
      }
      function ee(e) {
        return n.useCallback(() => {
          B.Get().DiscardLocalPriceOverridesForPackage(e);
        }, [e]);
      }
      function re(e) {
        return n.useCallback(() => {
          B.Get().CancelProposal(e);
        }, [e]);
      }
      function te() {
        const [e, r] = n.useState(B.Get().m_strDisplayPriceKey),
          t = B.Get().m_rgKnownPriceKeys,
          i = n.useCallback((e) => {
            r(e),
              (B.Get().m_strDisplayPriceKey = e),
              B.Get().m_displayPriceKeyCallbackList.Dispatch(e);
          }, []);
        return { strPriceKey: e, rgSupportedPriceKeys: t, fnSetPriceKey: i };
      }
      function ie(e) {
        const r = (0, d.CH)();
        return (
          (0, d.hL)(B.Get().m_allPriceOverridesCallbackList, r),
          B.Get().BHasLocalPriceOverrides(e)
        );
      }
      function ae(e) {
        return B.Get().BHasLocalPriceOverrides(e);
      }
      function se() {
        const [e, r] = n.useState(() => B.Get().GetAllLocalPriceOverrides());
        return (0, d.hL)(B.Get().m_allPriceOverridesCallbackList, r), e;
      }
      function ne(e) {
        return (0, _.q3)(() => B.Get().GetLocalOverrideCountForPriceKey(e));
      }
      function ce() {
        return n.useCallback(
          () => B.Get().GetAllLocalPriceOverrides()?.length > 0,
          [],
        );
      }
      function oe() {
        return n.useCallback(() => B.Get().DiscardAllLocalPriceOverrides(), []);
      }
      function le() {
        return B.Get().OverridePrice;
      }
      function ue() {
        return n.useCallback(
          (e, r, t) => B.Get().SubmitProposalToServer(e, r, t),
          [],
        );
      }
      function de() {
        return n.useCallback(
          (e, r) => B.Get().PublishApprovedProposal(e, r, 6e4),
          [],
        );
      }
      function me(e) {
        let r = [];
        const t = B.Get().m_rgKnownPriceKeys;
        for (let i of e) {
          if (H(i)) continue;
          let e = !1;
          for (const r of t) {
            if (!B.Get().BPriceKeyRequired(r)) continue;
            if (!B.Get().GetPrice(i, r)) {
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
      t.d(r, { es: () => n, nm: () => m });
      var i = t(86328),
        a = t(56011),
        s = t(61859);
      function n(e, r) {
        const t = (0, s.we)("#PackageGrid_MultipleBaseGamesFoundForPackage"),
          i = (0, s.we)("#PackageGrid_NoBaseGameFoundForPackage"),
          a = e.original.appName,
          n = r.original.appName,
          c = a == t,
          o = a == i,
          l = !c && !o,
          u = n == t,
          d = n == i,
          m = !u && !d;
        if (l && m) return a.localeCompare(n);
        if (l || m) return l ? -1 : 1;
        if (c == u && o == d) {
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
        return c ? -1 : 1;
      }
      const c = (e) => e.nextElementSibling,
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
        u = new Map([
          [i.Oy, (e) => l(e, o)],
          [i.JI, c],
          [i.BH, (e) => l(e, c)],
          [i.ek, o],
          [i.$R, (e) => l(e, c)],
          [i.wd, (e) => l(e, c)],
        ]);
      function d(e) {
        const r = Array.prototype.slice.call(e.children).reverse();
        for (; r.length > 0; ) {
          const e = r.pop();
          if ("input" === e.tagName.toLowerCase()) return e;
          r.push(...Array.prototype.slice.call(e.children).reverse());
        }
        return null;
      }
      function m(e) {
        let r = u.get(e.keyCode);
        if ((e.keyCode === i.$R && e.shiftKey && (r = (e) => l(e, o)), !r))
          return;
        var t;
        let s = r(
          ((t = e.currentTarget),
          (0, a.Kf)(t, (e) => null != e.getAttribute("data-table-column-id"))),
        );
        for (; s; ) {
          const t = d(s);
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
    53965: (e, r, t) => {
      "use strict";
      t.d(r, { $: () => v, v: () => w });
      var i = t(7850),
        a = t(64238),
        s = t.n(a),
        n = t(69041),
        c = t(75659),
        o = t(11526),
        l = t(11820),
        u = t(73406),
        d = t(90534),
        m = t(83392),
        p = t(66922);
      function g(e) {
        const {
            size: r = "3",
            loading: t = !0,
            children: a,
            color: s,
            variant: n,
            ...c
          } = e,
          o = (0, p.f)("LoadingSpinner", n);
        return a || !t
          ? (0, i.jsxs)(d.az, {
              position: "relative",
              ...c,
              width: "fit-content",
              children: [
                (0, i.jsx)("div", {
                  "data-visibility": !t,
                  className: u.ChildContainer,
                  children: a,
                }),
                t &&
                  (0, i.jsx)(m.s, {
                    position: "absolute",
                    inset: "0",
                    justify: "center",
                    align: "center",
                    children: (0, i.jsx)(_, { size: r, color: s, variant: o }),
                  }),
              ],
            })
          : (0, i.jsx)(_, { size: r, color: s, variant: o, ...c });
      }
      function _(e) {
        const { className: r, color: t, ...a } = (0, o.mz)(e, f);
        return (0, i.jsx)("div", {
          "data-accent-color": t,
          className: s()(r, u.Spinner),
          ...a,
        });
      }
      const f = [
        ...c.L,
        { prop: "size", responsive: !0, className: (e) => u[`Size-${e}`] },
        { prop: "variant", className: (e) => u[`Variant-${e}`] },
      ];
      var b = t(45699),
        P = t(78327);
      function h(e) {
        e.preventDefault();
      }
      const y = [
          ...c.L,
          { prop: "size", responsive: !0, className: (e) => n[`Size-${e}`] },
          { prop: "variant", className: (e) => n[`Variant-${e}`] },
          { prop: "color", dataProperty: (e) => ["accent-color", `${e}`] },
          {
            prop: "width",
            className: n.Width,
            cssProperty: "--width",
            responsive: !0,
          },
          {
            prop: "minWidth",
            className: n.MinWidth,
            cssProperty: "--min-width",
            responsive: !0,
          },
        ],
        v = function (e) {
          const {
              variant: r,
              size: t = "2",
              minWidth: a = "fit-content",
              color: c,
              loading: l,
              children: u,
              onClick: d,
              icon: m,
              focusable: _,
              navProps: f,
              ...h
            } = e,
            v = (0, P.Qn)(),
            w = l
              ? (0, i.jsx)(g, {
                  size: t,
                  color: c,
                  variant: "bright",
                  children: u,
                })
              : u,
            B = l ? void 0 : d,
            M = _ ?? f?.focusable ?? !!B,
            S = (0, p.f)("Button", r),
            C = {
              type: "button",
              ...(0, o.mz)(
                {
                  ...h,
                  variant: S,
                  size: t,
                  minWidth: a,
                  color: c,
                  className: s()(n.Button, m && n.Icon),
                  onClick: B,
                },
                y,
              ),
              children: w,
            };
          return v && (M || f)
            ? (0, i.jsx)(b.fu, { ...C, ...(f || {}), focusable: M })
            : (0, i.jsx)("button", { ...C });
        },
        w = function (e) {
          const {
              variant: r,
              size: t = "2",
              minWidth: a = "fit-content",
              disabled: c,
              icon: u,
              focusable: d,
              navProps: m,
              ...g
            } = e,
            _ = (0, P.Qn)(),
            f = (0, p.f)("Button", r),
            v = c ? h : void 0,
            w = (0, o.mz)(
              {
                onClick: v,
                "aria-disabled": c,
                ...g,
                variant: f,
                size: t,
                minWidth: a,
                className: s()(n.Button, u && n.Icon, (0, l.T)()),
              },
              y,
            );
          return _ && (d || m)
            ? (0, i.jsx)(b.Ii, { ...w, ...(m || {}), focusable: d })
            : (0, i.jsx)("a", { ...w });
        };
    },
    51877: (e, r, t) => {
      "use strict";
      t.d(r, { z: () => m });
      var i = t(7850),
        a = t(90626),
        s = t(64238),
        n = t.n(s),
        c = t(16180),
        o = t(83392),
        l = t(20187),
        u = t(80797);
      function d(e) {
        const { children: r, className: t, bDisabled: a, ...s } = e;
        return (0, i.jsxs)(o.s, {
          cursor: "default",
          gap: "2",
          className: n()(c.Option, a && c.Disabled),
          ...s,
          children: [
            (0, i.jsx)("div", { className: c.RadioCircle }),
            (0, i.jsx)(l.EY, { children: r }),
          ],
        });
      }
      const m = Object.assign(
          function (e) {
            const {
              value: r,
              onValueChange: t,
              options: a,
              getOptionLabel: s,
              disabled: n,
              ...c
            } = e;
            return (0, i.jsx)(m.Root, {
              value: r,
              onValueChange: t,
              disabled: n,
              ...c,
              children: a.map((e) => {
                const r = s ? s(e) : e;
                return (0, i.jsx)(m.Option, { value: e, children: r }, r);
              }),
            });
          },
          {
            Root: function (e) {
              const {
                  value: r,
                  onValueChange: t,
                  disabled: s,
                  render: n,
                  ...c
                } = e,
                l = (0, a.useRef)(null),
                d = (0, a.useCallback)((e, r) => {
                  if (!l.current) return;
                  const t = [...l.current.querySelectorAll("[data-radio-id]")];
                  if (0 !== t.length)
                    for (let i = 0; i < t.length; i++) {
                      const a = t[i];
                      if (!a.dataset.radioId) continue;
                      if (a.dataset.radioId === e) {
                        const e = t[(i + r + t.length) % t.length];
                        e.click(), e.focus();
                      }
                    }
                }, []),
                m = (0, a.useCallback)((e) => d(e, 1), [d]),
                g = (0, a.useCallback)((e) => d(e, -1), [d]),
                _ = (0, a.useMemo)(
                  () => ({
                    value: r,
                    onValueChange: t,
                    bDisabled: s,
                    onSelectNext: m,
                    onSelectPrev: g,
                  }),
                  [r, t, s, m, g],
                ),
                f = { role: "radiogroup", "aria-disabled": s, ref: l, ...c },
                b = (0, i.jsx)(o.s, {
                  direction: "column",
                  gap: "2",
                  role: "radiogroup",
                  "aria-disabled": s,
                  ...c,
                }),
                P = (0, u.Q)(n, b, f);
              return (0, i.jsx)(p, { value: _, children: P });
            },
            Option: function (e) {
              const { value: r, ref: t, children: s, render: n } = e,
                c = (0, a.useContext)(p),
                o = (0, a.useId)();
              if (!c)
                return (
                  console.error(
                    "<RadioGroup.Option> must be rendered within a <RadioGroup.Root>",
                  ),
                  null
                );
              const {
                  value: l,
                  onValueChange: m,
                  bDisabled: g,
                  onSelectNext: _,
                  onSelectPrev: f,
                } = c,
                b = l === r,
                P = () => {
                  g || b || m(r);
                },
                h = {
                  role: "radio",
                  "aria-checked": b,
                  "aria-disabled": g,
                  "data-radio-id": o,
                  onClick: P,
                  onKeyDown: (e) => {
                    if (!g)
                      switch (e.key) {
                        case " ":
                          P(), e.preventDefault(), e.stopPropagation();
                          break;
                        case "ArrowRight":
                        case "ArrowDown":
                          _(o), e.preventDefault(), e.stopPropagation();
                          break;
                        case "ArrowLeft":
                        case "ArrowUp":
                          f(o), e.preventDefault(), e.stopPropagation();
                      }
                  },
                  tabIndex: b ? 0 : -1,
                  ref: t,
                  children: s,
                },
                y = (0, i.jsx)(d, { bDisabled: g });
              return (0, u.Q)(n, y, h, { bSelected: b, bDisabled: g });
            },
          },
        ),
        p = (0, a.createContext)(null);
    },
    90534: (e, r, t) => {
      "use strict";
      t.d(r, { A4: () => g, az: () => m });
      var i = t(7850),
        a = t(44041),
        s = t(39479),
        n = t(64238),
        c = t.n(n),
        o = t(11526),
        l = t(75659),
        u = t(11820),
        d = t(78327);
      function m(e) {
        const { as: r = "div", focusable: t, navProps: n, ref: l, ...m } = e,
          g = (0, d.Qn)(),
          _ = (0, o.mz)(
            { ...m, className: c()(a.Box, (0, u.T)(), e.className) },
            p,
          ),
          f = t ?? n?.focusable ?? !!m.onClick,
          b = (0, i.jsx)(r, { ref: l, ..._ });
        return g && (f || n)
          ? (0, i.jsx)(s.J, { ...(n || {}), focusable: f, children: b })
          : b;
      }
      const p = l.h;
      function g(e) {
        return (0, o.Ef)(e, l.L);
      }
    },
    83392: (e, r, t) => {
      "use strict";
      t.d(r, { s: () => m });
      var i = t(7850),
        a = t(39479),
        s = t(64238),
        n = t.n(s),
        c = t(11526),
        o = t(55348),
        l = t(75659),
        u = t(68875),
        d = t(78327);
      function m(e) {
        const { as: r = "div", focusable: t, navProps: s, ref: l, ...m } = e,
          g = (0, d.Qn)(),
          _ = (0, c.mz)({ ...m, className: n()(e.className, u.Flex) }, p),
          f = t ?? s?.focusable ?? !!m.onClick,
          b = (0, i.jsx)(r, { ref: l, ..._ }),
          P = (0, o.n)(m.direction ?? "row");
        return g
          ? (0, i.jsx)(a.J, {
              ...(s || {}),
              focusable: f,
              "flow-children": P,
              children: b,
            })
          : b;
      }
      const p = [
        ...l.h,
        {
          prop: "direction",
          responsive: !0,
          className: u.Direction,
          cssProperty: "--direction",
        },
        {
          prop: "justify",
          responsive: !0,
          className: u.Justify,
          cssProperty: (e) => ["--justify", g(e)],
        },
        {
          prop: "align",
          responsive: !0,
          className: u.Align,
          cssProperty: "--align",
        },
        {
          prop: "gap",
          responsive: !0,
          className: u.Gap,
          cssProperty: (e) => ["--gap", `var(--spacing-${e})`],
        },
        {
          prop: "gapX",
          responsive: !0,
          className: u.GapX,
          cssProperty: (e) => ["--gap-x", `var(--spacing-${e})`],
        },
        {
          prop: "gapY",
          responsive: !0,
          className: u.GapY,
          cssProperty: (e) => ["--gap-y", `var(--spacing-${e})`],
        },
        {
          prop: "wrap",
          responsive: !0,
          className: u.Wrap,
          cssProperty: "--wrap",
        },
        { prop: "inline", responsive: !0, className: u.Inline },
      ];
      function g(e) {
        return /^(between|around|evenly)$/.test(e) ? `space-${e}` : e;
      }
    },
    80797: (e, r, t) => {
      "use strict";
      t.d(r, { Q: () => s });
      var i = t(90626);
      function a(e, r, t) {
        return "function" == typeof e ? e(r, t) : i.cloneElement(e, r);
      }
      function s(e, r, t, i) {
        return a(e || r, t, i);
      }
    },
    11820: (e, r, t) => {
      "use strict";
      t.d(r, { T: () => a });
      var i = t(91239);
      function a() {
        return i.Reset;
      }
    },
    87718: (e, r, t) => {
      "use strict";
      t.d(r, {
        bS: () => s,
        de: () => c,
        j4: () => l,
        k8: () => n,
        uF: () => o,
        vS: () => u,
      });
      var i = t(88267),
        a = t(29848);
      function s(e) {
        return i.CS;
      }
      function n(e) {
        switch (e) {
          case a._S:
            return "usd_cis";
          case a.aL:
            return "usd_sasia";
          case a.M_:
            return "usd_latam";
          case a.aY:
            return "usd_mena";
          default:
            return "usd_invalid";
        }
      }
      function c(e) {
        switch (e) {
          case a._S:
            return "CIS";
          case a.aL:
            return "SASIA";
          case a.M_:
            return "LATAM";
          case a.aY:
            return "MENA";
          default:
            return "Invalid Region";
        }
      }
      function o(e) {
        switch (e) {
          case "CIS":
            return a._S;
          case "SASIA":
            return a.aL;
          case "LATAM":
            return a.M_;
          case "MENA":
            return a.aY;
          default:
            return a.YS;
        }
      }
      function l(e) {
        switch (e) {
          case a._S:
            return "The Commonwealth of Independent Stats";
          case a.aL:
            return "South Asia";
          case a.M_:
            return "Latin America";
          case a.aY:
            return "Middle East and North Africa";
          default:
            return "Invalid Region";
        }
      }
      function u(e) {
        switch (e?.toLowerCase()) {
          case "usd_cis":
            return a._S;
          case "usd_sasia":
            return a.aL;
          case "usd_latam":
            return a.M_;
          case "usd_mena":
            return a.aY;
          default:
            return a.YS;
        }
      }
    },
    87700: (e, r, t) => {
      "use strict";
      t.d(r, { Bb: () => u, MA: () => l, jY: () => o });
      var i = t(7850),
        a = t(69413),
        s = t(90626),
        n = t(48174);
      const c = s.createContext({
        eConversionMethod: a.Y5.lZ,
        setConversionMethod: (e) => {},
        rgAvailableConversionMethods: [],
      });
      function o(e) {
        const { eInitialConversionMethod: r } = e,
          t = (0, n.cT)(),
          [o, l] = s.useState(r || a.Y5.lZ),
          u = s.useMemo(() => {
            const e = t ? t.GetAvailableConversionMethods() : [];
            return {
              eConversionMethod: o,
              setConversionMethod: l,
              rgAvailableConversionMethods: e,
            };
          }, [o, l, t]);
        return (0, i.jsx)(c.Provider, { value: u, children: e.children });
      }
      function l() {
        return s.useContext(c);
      }
      function u() {
        return s.useContext(c).eConversionMethod;
      }
    },
    31031: (e, r, t) => {
      "use strict";
      t.d(r, { $: () => n });
      var i = t(29848),
        a = t(88267),
        s = t(81393);
      function n(e, r, t, n, c) {
        if (!e) return { nSuggestedPriceInCents: null, nGuidelinesLevel: null };
        let o = null;
        for (let r of e.GetUSDPricePointsInCents())
          if (r >= t) {
            o = r;
            break;
          }
        const l = c && c < i.Hc;
        if ((n == a.CS && !l) || !o)
          return { nSuggestedPriceInCents: null, nGuidelinesLevel: null };
        const u = e.GetRecommendPrice(o, n, c, r),
          d = e.GetRecommendPrice(o, a.CS, void 0, r);
        if (
          ((0, s.wT)(
            u,
            `Missing requested currency guide for  ${o}/${n}/${c}/${r}`,
          ),
          (0, s.wT)(d, `Missing usd guide for  ${o}/${c}/${r}`),
          !u || !d)
        )
          return { nSuggestedPriceInCents: null, nGuidelinesLevel: null };
        let m = u.price;
        const p = d.price;
        if (p != t) {
          const e = t / p;
          (o *= e), (m = Math.ceil(m * e));
        }
        return { nSuggestedPriceInCents: m, nGuidelinesLevel: o };
      }
    },
    48174: (e, r, t) => {
      "use strict";
      t.d(r, { mj: () => f, gC: () => b, cT: () => _ });
      var i = t(90626),
        a = t(29848),
        s = t(88267),
        n = t(69413);
      const c = n.Y5.lZ;
      class o {
        m_mapUSDPrice = new Map();
        m_mapKeyToGuidePrice = new Map();
        m_rgUSDPricePointInCents = [];
        m_setConversionMethod = new Set();
        m_setSupportedCurrencies = new Set();
        m_setSupportedRegions = new Set();
        GetKey(e, r, t, i = c) {
          return `${e}_${r}_${t || a.YS}_${i}`;
        }
        GetAvailableConversionMethods() {
          return Array.from(this.m_setConversionMethod).sort();
        }
        GetAnyPricePoint() {
          return Array.from(this.m_mapUSDPrice.get(n.Y5.lZ)?.values() || [])[0];
        }
        BIsSupportCurrencyAndOrRegion(e, r) {
          return r
            ? e == s.CS && this.m_setSupportedRegions.has(r)
            : this.m_setSupportedCurrencies.has(e);
        }
        GetRecommendPrice(e, r, t, i = c) {
          const a = this.GetKey(e, r, t, i);
          return this.m_mapKeyToGuidePrice.get(a);
        }
        GetScaledRecommendedPrice(e, r, t, i = c) {
          let a = -1,
            s = -1;
          for (const r of this.m_mapUSDPrice.get(i).keys()) {
            const t = Math.abs(r - e);
            (-1 == a || t < s) && ((a = r), (s = t));
          }
          const n = this.m_mapUSDPrice.get(i).get(a),
            o = t
              ? n.region_prices.find((e) => e.region_code == t)
              : n.currency_prices.find((e) => e.currency_code == r),
            l = e / a;
          return {
            currency_code: o?.currency_code,
            region_code: o?.region_code,
            price: Math.ceil((o?.price || 0) * l),
          };
        }
        GetUSDPricePointsInCents() {
          return this.m_rgUSDPricePointInCents;
        }
        constructor(e) {
          let r = new Set();
          e.forEach((e) => {
            const t = e.convert_method ?? c;
            this.m_setConversionMethod.add(t),
              this.m_mapUSDPrice.has(t) || this.m_mapUSDPrice.set(t, new Map());
            this.m_mapUSDPrice.get(t).set(e.usd_price, e),
              r.add(e.usd_price),
              e.currency_prices.forEach((r) => {
                const t = this.GetKey(
                  e.usd_price,
                  r.currency_code,
                  a.YS,
                  e.convert_method || c,
                );
                this.m_mapKeyToGuidePrice.set(t, r),
                  this.m_setSupportedCurrencies.add(r.currency_code);
              }),
              e.region_prices.forEach((r) => {
                const t = this.GetKey(
                  e.usd_price,
                  r.currency_code,
                  r.region_code,
                  e.convert_method || c,
                );
                if (
                  (this.m_mapKeyToGuidePrice.set(t, r),
                  this.m_setSupportedRegions.add(r.region_code),
                  this.m_setConversionMethod.has(n.Y5.bA))
                ) {
                  const t = {
                      currency_code: s.CS,
                      price: e.usd_price,
                      region_code: r.region_code,
                    },
                    i = this.GetKey(e.usd_price, s.CS, r.region_code, n.Y5.bA);
                  this.m_mapKeyToGuidePrice.set(i, t);
                }
              });
          }),
            (this.m_rgUSDPricePointInCents = Array.from(r.keys()));
        }
      }
      var l = t(7860),
        u = t(24484);
      var d = t(87700),
        m = t(20194),
        p = t(81393),
        g = t(72255);
      function _() {
        const e = (0, m.I)({
          queryKey: ["PricingGuideline"],
          queryFn: async () =>
            await (function () {
              let e = (0, u.Fd)("pricing_guideline", "application_config");
              if (e) return Promise.resolve(e);
              {
                const e = l.L.getQueryData(["PricingGuideline"]);
                return Promise.resolve(e ?? null);
              }
            })(),
        });
        return (0, i.useMemo)(() => (e.data ? new o(e.data) : null), [e.data]);
      }
      function f() {
        return ["PricingGuideline"];
      }
      function b(e) {
        const r = _(),
          t = (0, d.Bb)();
        return {
          fnApplyGuidelines: (0, i.useCallback)(
            (i, n, c) => {
              if (
                ((0, p.wT)(
                  r,
                  "Pricing Guideline Not Initialized by time conversion being triggered",
                ),
                r)
              ) {
                for (let a = s.CS; a < s.mh; ++a) {
                  const s = r.GetRecommendPrice(n, a, void 0, c ?? t)?.price;
                  if (s && s > 0) {
                    const r = (0, g.M1)(a);
                    e(i, r, s);
                  }
                }
                for (let o = a._S; o < a.Hc; ++o) {
                  const a = s.CS,
                    l = r.GetRecommendPrice(n, a, o, c ?? t)?.price;
                  if (l && l > 0) {
                    const r = (0, g.pd)(a, o).toUpperCase();
                    e(i, r, l);
                  }
                }
              }
            },
            [t, e, r],
          ),
        };
      }
    },
    4160: (e, r, t) => {
      "use strict";
      t.d(r, { Al: () => a, Zo: () => n, nD: () => i, pJ: () => s });
      const i = 0,
        a = 1,
        s = 3,
        n = 4;
    },
    69413: (e, r, t) => {
      "use strict";
      t.d(r, { Y5: () => i });
      var i = {};
      t.r(i), t.d(i, { bA: () => g, lZ: () => m, KC: () => p });
      var a = t(80613),
        s = t.n(a),
        n = t(89068),
        c = t(56545);
      class o extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            o.prototype.descriptors || n.Sg(o.M()),
            a.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  descriptors: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: n.qM.readString,
                    bw: n.gp.writeRepeatedString,
                  },
                  interactive_elements: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: n.qM.readString,
                    bw: n.gp.writeRepeatedString,
                  },
                  official_id: {
                    n: 3,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  esrb_online_music_not_rated: {
                    n: 4,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  esrb_online_interactions_not_rated: {
                    n: 5,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = n.w0(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(o.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(o.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new o();
          return o.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(o.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(o.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "AppRatingAuxData";
        }
      }
      class l extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.rating_agency || n.Sg(l.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  rating_agency: {
                    n: 1,
                    br: n.qM.readEnum,
                    bw: n.gp.writeEnum,
                  },
                  rating: { n: 2, br: n.qM.readString, bw: n.gp.writeString },
                  source: { n: 3, br: n.qM.readEnum, bw: n.gp.writeEnum },
                  banned: { n: 4, br: n.qM.readBool, bw: n.gp.writeBool },
                  required_age: {
                    n: 5,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  use_age_gate: { n: 6, br: n.qM.readBool, bw: n.gp.writeBool },
                  aux_data: { n: 7, c: o },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = n.w0(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(l.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(l.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new l();
          return l.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(l.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(l.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "AppRating";
        }
      }
      class u extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.elanguage || n.Sg(u.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  elanguage: { n: 1, br: n.qM.readInt32, bw: n.gp.writeInt32 },
                  text: { n: 2, br: n.qM.readString, bw: n.gp.writeString },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = n.w0(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(u.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(u.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new u();
          return u.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(u.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(u.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ContentSurveyLocalizedText";
        }
      }
      class d extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.customer_notes || n.Sg(d.M()),
            a.Message.initialize(this, e, 0, -1, [1, 2, 3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  customer_notes: { n: 1, c: u, r: !0, q: !0 },
                  customer_notes_ai: { n: 2, c: u, r: !0, q: !0 },
                  mature_tags: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: n.qM.readEnum,
                    pbr: n.qM.readPackedEnum,
                    bw: n.gp.writeRepeatedEnum,
                  },
                  has_mature_content: {
                    n: 4,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  ai_external_service_name: {
                    n: 5,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  ai_external_service_url: {
                    n: 6,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = n.w0(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(d.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(d.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new d();
          return d.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(d.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(d.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ContentSurveyDisclosure";
        }
      }
      const m = 1,
        p = 2,
        g = 3;
      a.Message;
      class _ extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.survey_section || n.Sg(_.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  survey_section: {
                    n: 1,
                    br: n.qM.readEnum,
                    bw: n.gp.writeEnum,
                  },
                  time_reviewed: {
                    n: 2,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  accountid_reviewer: {
                    n: 3,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = n.w0(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(_.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(_.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new _();
          return _.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(_.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(_.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "SurveySectionReviewed";
        }
      }
      class f extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.content_category || n.Sg(f.M()),
            a.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  content_category: {
                    n: 1,
                    br: n.qM.readEnum,
                    bw: n.gp.writeEnum,
                  },
                  questionaire_categories: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: n.qM.readEnum,
                    pbr: n.qM.readPackedEnum,
                    bw: n.gp.writeRepeatedEnum,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = n.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(f.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new f();
          return f.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(f.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(f.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "GeneratedGameContent";
        }
      }
      class b extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.rating_agency || n.Sg(b.M()),
            a.Message.initialize(this, e, 0, -1, [4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  rating_agency: {
                    n: 1,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  rating: { n: 2, br: n.qM.readString, bw: n.gp.writeString },
                  required_age: {
                    n: 3,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  descriptors: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: n.qM.readString,
                    bw: n.gp.writeRepeatedString,
                  },
                  banned: { n: 5, br: n.qM.readBool, bw: n.gp.writeBool },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = n.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(b.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new b();
          return b.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(b.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(b.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "GeneratedGameRating";
        }
      }
      class P extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.timestamp_generated || n.Sg(P.M()),
            a.Message.initialize(this, e, 0, -1, [3, 4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  timestamp_generated: {
                    n: 1,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  generated_version: {
                    n: 2,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  ratings: { n: 3, c: b, r: !0, q: !0 },
                  content_categories: { n: 4, c: f, r: !0, q: !0 },
                },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = n.w0(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(P.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(P.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new P();
          return P.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(P.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(P.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "GeneratedGameRatings";
        }
      }
      class h extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.desc_code_generated || n.Sg(h.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  desc_code_generated: {
                    n: 1,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  desc_copyright_infringement_guarantee: {
                    n: 2,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  desc_content_moderation_strategy: {
                    n: 3,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  external_service_name: {
                    n: 4,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  external_service_url: {
                    n: 5,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  desc_external_service_how_content_available_to_players: {
                    n: 6,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  desc_external_service_monetization: {
                    n: 7,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = n.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(h.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new h();
          return h.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(h.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(h.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "AIContentSurvey";
        }
      }
      class y extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.disclosure || n.Sg(y.M()),
            a.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  disclosure: { n: 1, c: d },
                  interactive_elements: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: n.qM.readEnum,
                    pbr: n.qM.readPackedEnum,
                    bw: n.gp.writeRepeatedEnum,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = n.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(y.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new y();
          return y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(y.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(y.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ContentSurveyAuxData";
        }
      }
      class v extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.id || n.Sg(v.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  id: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = n.w0(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(v.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(v.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new v();
          return v.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(v.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(v.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ContentDescriptor";
        }
      }
      class w extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.surveyid || n.Sg(w.M()),
            a.Message.initialize(this, e, 0, -1, [3, 11, 14, 15], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  surveyid: {
                    n: 1,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  state: { n: 2, br: n.qM.readEnum, bw: n.gp.writeEnum },
                  descriptors: { n: 3, c: v, r: !0, q: !0 },
                  timestamp_started: {
                    n: 4,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  timestamp_updated: {
                    n: 5,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  timestamp_finished: {
                    n: 6,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  accountid: {
                    n: 7,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  developer_notes: {
                    n: 8,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  keyvalues: {
                    n: 9,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  ratings: { n: 10, c: P },
                  categories: {
                    n: 11,
                    r: !0,
                    q: !0,
                    br: n.qM.readEnum,
                    pbr: n.qM.readPackedEnum,
                    bw: n.gp.writeRepeatedEnum,
                  },
                  ai_survey: { n: 12, c: h },
                  internal_notes: {
                    n: 13,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  all_ratings: { n: 14, c: l, r: !0, q: !0 },
                  sections_reviewed: { n: 15, c: _, r: !0, q: !0 },
                  disclosure: { n: 16, c: d },
                  inherited_surveyid: {
                    n: 17,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  started_from_scratch: {
                    n: 18,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  survey_aux_data: { n: 19, c: y },
                  source: { n: 20, br: n.qM.readEnum, bw: n.gp.writeEnum },
                  flags: {
                    n: 21,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = n.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(w.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new w();
          return w.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(w.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(w.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ContentDescriptorSurvey";
        }
      }
      class B extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.appid || n.Sg(B.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  appid: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  include_descriptors: {
                    n: 2,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  include_keyvalues: {
                    n: 3,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  include_categories: {
                    n: 4,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  include_ai_survey: {
                    n: 5,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  include_all_ratings: {
                    n: 6,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = n.w0(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(B.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(B.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new B();
          return B.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(B.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(B.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAppContentDescriptors_GetActiveSurvey_Request";
        }
      }
      class M extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.appid || n.Sg(M.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  appid: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  include_descriptors: {
                    n: 2,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  include_keyvalues: {
                    n: 3,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  include_categories: {
                    n: 4,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  include_ai_survey: {
                    n: 5,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  include_all_ratings: {
                    n: 6,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = n.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(M.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new M();
          return M.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(M.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(M.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAppContentDescriptors_GetWorkingSurvey_Request";
        }
      }
      class S extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.surveyid || n.Sg(S.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  surveyid: {
                    n: 1,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  survey: { n: 2, c: w },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = n.w0(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(S.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new S();
          return S.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(S.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(S.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAppContentDescriptors_GetSurvey_Response";
        }
      }
      var C;
      !(function (e) {
        (e.GetActiveSurvey = function (e, r, t) {
          return e.SendMsg(
            "AppContentDescriptor.GetActiveSurvey#1",
            (0, c.I8)(B, r, t),
            S,
            { bConstMethod: !0, ePrivilege: 7 },
          );
        }),
          (e.GetWorkingSurvey = function (e, r, t) {
            return e.SendMsg(
              "AppContentDescriptor.GetWorkingSurvey#1",
              (0, c.I8)(M, r, t),
              S,
              { bConstMethod: !0, ePrivilege: 7 },
            );
          });
      })(C || (C = {}));
    },
  },
]);
