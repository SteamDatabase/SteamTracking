/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [79246],
    {
      31886: (ie, x, n) => {
        "use strict";
        n.d(x, {
          E1: () => J,
          OM: () => G,
          Sm: () => g,
          Yr: () => w,
          pV: () => m,
          uw: () => y,
          vs: () => z,
          ww: () => f,
          xi: () => b,
          zt: () => I,
        });
        var p = n(90626),
          u = n(8323),
          l = n(54963),
          r = n(3166);
        const b = "pn";
        class v {
          m_rgPackageIDs;
          m_rgPackageData;
          m_mapPackageData;
          m_rgVisiblePackageIDs = [];
          m_visiblePackageIDsCallbackList = new u.lu();
          static s_Singleton;
          static Get() {
            return (
              v.s_Singleton ||
                ((v.s_Singleton = new v()), v.s_Singleton.Init()),
              v.s_Singleton
            );
          }
          constructor() {}
          Init() {
            let B = (0, r.Tc)("package_data", "application_config");
            B
              ? ((this.m_rgPackageIDs = B.map((O) => O.packageid)),
                (this.m_rgPackageData = B),
                (this.m_mapPackageData = new Map(
                  B.map((O) => [O.packageid, O]),
                )))
              : ((this.m_rgPackageIDs = (0, r.Tc)(
                  "package_ids",
                  "application_config",
                )),
                (this.m_mapPackageData = new Map()));
          }
          UpdatePackageNameSearchState(B) {
            const O = B.getState().columnFilters.find(
                (S) => S.id === "packageName",
              )?.value,
              h = new URL(window.location.href);
            O != decodeURIComponent(h.searchParams.get(b)) &&
              (O
                ? h.searchParams.set(b, encodeURIComponent(O))
                : h.searchParams.delete(b),
              window.history.replaceState({}, "", h.toString()));
          }
          UpdateVisiblePackageList(B) {
            const O = B.getVisibleRows().filter((h) => !h.getCanExpand());
            (this.m_rgVisiblePackageIDs = []),
              O.forEach((h) =>
                this.m_rgVisiblePackageIDs.push(h.original.packageID),
              ),
              this.m_visiblePackageIDsCallbackList.Dispatch(
                this.m_rgVisiblePackageIDs,
              ),
              this.UpdatePackageNameSearchState(B);
          }
          SetVisiblePackageList(B) {
            (this.m_rgVisiblePackageIDs = [...B]),
              this.m_visiblePackageIDsCallbackList.Dispatch(
                this.m_rgVisiblePackageIDs,
              );
          }
        }
        function G() {
          return v.Get().m_rgPackageIDs;
        }
        function I() {
          return v.Get().m_rgPackageIDs;
        }
        function y() {
          return v.Get().m_rgPackageData;
        }
        function f(M) {
          let B = v.Get().m_mapPackageData.get(M);
          return B ? B.package_name : M.toString();
        }
        function J(M) {
          let B = v.Get().m_mapPackageData.get(M);
          return B ? !!B.released : !0;
        }
        function m() {
          return p.useCallback((M) => v.Get().UpdateVisiblePackageList(M), []);
        }
        function g(M) {
          v.Get().SetVisiblePackageList(M);
        }
        function w() {
          const [M, B] = p.useState(v.Get().m_rgVisiblePackageIDs);
          return (0, l.hL)(v.Get().m_visiblePackageIDsCallbackList, B), M;
        }
        function z() {
          return p.useMemo(
            () => (0, r.Tc)("publisherid", "application_config"),
            [],
          );
        }
      },
      37424: (ie, x, n) => {
        "use strict";
        n.d(x, {
          $i: () => We,
          Ao: () => ue,
          Bt: () => Ie,
          Ci: () => ze,
          Dl: () => V,
          FR: () => ce,
          FX: () => Oe,
          Gs: () => F,
          NC: () => ke,
          Oc: () => D,
          RO: () => Be,
          T7: () => Te,
          T_: () => Se,
          U3: () => we,
          Wx: () => A,
          XB: () => Le,
          XK: () => Ee,
          Y2: () => oe,
          Y5: () => be,
          YB: () => Ke,
          Zz: () => je,
          _A: () => j,
          d$: () => he,
          fZ: () => X,
          fr: () => _e,
          h4: () => Ce,
          hm: () => Me,
          iy: () => Ue,
          mP: () => ve,
          mv: () => T,
          nT: () => me,
          oL: () => C,
          oj: () => Y,
          tD: () => Q,
          tn: () => ge,
          v4: () => pe,
          ww: () => Ge,
          xQ: () => e,
        });
        var p = n(41735),
          u = n.n(p),
          l = n(90626),
          r = n(14947),
          b = n(72604),
          v = n(34592),
          G = n(8323),
          I = n(54963),
          y = n(48473),
          f = n(3166),
          J = n(31886),
          m = n(65946),
          g = n(71742),
          w = n(61075),
          z = n(7608),
          M = n(93357),
          B = n(13401),
          O = n(33220),
          h = n(3301),
          S = Object.defineProperty,
          E = Object.getOwnPropertyDescriptor,
          K = (a, t, i, c) => {
            for (
              var d = c > 1 ? void 0 : c ? E(t, i) : t, P = a.length - 1, W;
              P >= 0;
              P--
            )
              (W = a[P]) && (d = (c ? W(t, i, d) : W(d)) || d);
            return c && d && S(t, i, d), d;
          };
        const L = class de {
          m_mapPackagePrice = new Map();
          m_mapPackageCountryOverridePrice = new Map();
          m_setRecurringSubscriptions = new Set();
          m_mapPriceProposals = new Map();
          m_mapLocalPackagePriceOverrides = new Map();
          m_mapPriceGridCellCallbackList = new Map();
          m_mapPackageOverridesCallbackList = new Map();
          m_allPriceOverridesCallbackList = new G.lu();
          m_mapOverridesPerPriceKey = new Map();
          m_mapCurrencyData = new Map();
          m_mapPriceKeyDescriptions = new Map();
          m_rgKnownPriceKeys;
          m_strDisplayPriceKey = "USD";
          m_displayPriceKeyCallbackList = new G.lu();
          static s_Singleton;
          static Get() {
            return (
              de.s_Singleton ||
                ((de.s_Singleton = new de()), de.s_Singleton.Init()),
              de.s_Singleton
            );
          }
          constructor() {
            (0, r.Gn)(this);
          }
          Init() {
            const t = (0, f.Tc)("base_prices", "application_config");
            if (t && this.BIsPricePayloadValid(t))
              for (let U in t) {
                const N = t[U],
                  H = parseInt(U),
                  te = new Map();
                this.m_mapPackagePrice.set(H, te);
                for (let se in N)
                  (0, O.IG)(se)
                    ? (this.m_mapPackageCountryOverridePrice.has(H) ||
                        this.m_mapPackageCountryOverridePrice.set(H, new Map()),
                      this.m_mapPackageCountryOverridePrice
                        .get(H)
                        .set(se.toUpperCase(), N[se]))
                    : te.set(se, N[se]);
              }
            const i = (0, f.Tc)("recurring_subs", "application_config");
            if (i && Array.isArray(i))
              for (const U of i) this.m_setRecurringSubscriptions.add(U);
            const c = (0, f.Tc)("pending_proposals", "application_config");
            if (c && this.BIsPendingPricePayloadValid(c))
              for (let U in c) {
                const N = c[U],
                  H = parseInt(U);
                this.m_mapPriceProposals.set(H, N);
              }
            const d = (0, f.Tc)("valid_price_keys", "application_config");
            d &&
              this.BIsPriceKeyValid(d) &&
              (this.m_rgKnownPriceKeys = d.sort((U, N) =>
                (0, y.kd)(ae(U), ae(N)),
              ));
            const P = (0, f.Tc)("currency_data", "application_config");
            if (P && this.BIsCurrencyPayloadValid(P))
              for (let U in P) {
                const N = P[U];
                this.m_mapCurrencyData.set(U, N);
              }
            const W = (0, f.Tc)("currency_descriptions", "application_config");
            if (W && this.BIsCurrencyDescriptionPayloadValid(W))
              for (let U in W) {
                const N = W[U];
                this.m_mapPriceKeyDescriptions.set(U, N);
              }
          }
          BIsPricePayloadValid(t) {
            const i = t;
            if (!i || typeof i != "object") return !1;
            for (let c in i) {
              if (isNaN(parseInt(c))) return !1;
              const d = i[c];
              if (!d || typeof d != "object") return !1;
              for (let P in d)
                if (typeof P != "string" || typeof d[P] != "number") return !1;
            }
            return !0;
          }
          BIsPendingPricePayloadValid(t) {
            const i = t;
            if (!i || typeof i != "object") return !1;
            for (let c in i) {
              if (isNaN(parseInt(c))) return !1;
              const d = i[c];
              if (
                !d ||
                typeof d != "object" ||
                d.packageID !== parseInt(c) ||
                typeof d.prices != "object"
              )
                return !1;
            }
            return !0;
          }
          BIsCurrencyPayloadValid(t) {
            const i = t;
            if (!i || typeof i != "object") return !1;
            for (let c in i) {
              const d = i[c];
              if (!d || typeof d != "object" || d.strCode != c) return !1;
            }
            return !0;
          }
          BIsPriceKeyValid(t) {
            const i = t;
            if (!i || !Array.isArray(i)) return !1;
            for (let c in i) if (typeof c != "string") return !1;
            return !0;
          }
          BIsCurrencyDescriptionPayloadValid(t) {
            const i = t;
            if (!i || typeof i != "object") return !1;
            for (let c in i) {
              const d = i[c];
              if (
                !d ||
                typeof d != "object" ||
                d.bRequired === void 0 ||
                d.strDescription === void 0
              )
                return !1;
            }
            return !0;
          }
          BPriceKeyRequired(t) {
            return this.m_mapPriceKeyDescriptions.get(t)?.bRequired ?? !1;
          }
          GetMinimumBasePrice(t) {
            return this.m_mapPriceKeyDescriptions.get(t)?.nLowestBase || 0;
          }
          GetMinimumDiscountPrice(t) {
            return this.m_mapPriceKeyDescriptions.get(t)?.nLowestDiscount || 0;
          }
          GetPublishedCountryOverrides(t) {
            return this.m_mapPackageCountryOverridePrice.has(t)
              ? Array.from(this.m_mapPackageCountryOverridePrice.get(t).keys())
              : [];
          }
          GetPublishedPriceCountryOverride(t, i) {
            return this.m_mapPackageCountryOverridePrice.get(t).get(i);
          }
          GetPublishedPrice(t, i) {
            return (0, O.IG)(i)
              ? this.m_mapPackageCountryOverridePrice.get(t)?.get(i)
              : this.m_mapPackagePrice.get(t)?.get(i);
          }
          GetProposedPrice(t, i) {
            return this.m_mapPriceProposals.get(t)?.prices[i];
          }
          GetSavedPrice(t, i) {
            return this.GetProposedPrice(t, i) ?? this.GetPublishedPrice(t, i);
          }
          GetPrice(t, i) {
            return this.GetLocalOverridePrice(t, i) ?? this.GetSavedPrice(t, i);
          }
          GetLocalOverridePrice(t, i) {
            return this.m_mapLocalPackagePriceOverrides.get(t)?.get(i);
          }
          GetPriceGridCellCallbackList(t, i) {
            if (!t || !i) return null;
            this.m_mapPriceGridCellCallbackList.has(t) ||
              this.m_mapPriceGridCellCallbackList.set(t, new Map());
            const c = this.m_mapPriceGridCellCallbackList.get(t);
            return c.has(i) || c.set(i, new G.lu()), c.get(i);
          }
          GetPackageOverridesCallbackList(t) {
            if (!t) return null;
            let i = this.m_mapPackageOverridesCallbackList.get(t);
            return (
              i ||
                ((i = new G.lu()),
                this.m_mapPackageOverridesCallbackList.set(t, i)),
              i
            );
          }
          OverridePrice(t, i, c) {
            const d = this.GetPrice(t, i);
            c != d &&
              (this.m_mapLocalPackagePriceOverrides.has(t) ||
                this.m_mapLocalPackagePriceOverrides.set(t, new Map()),
              c == this.GetSavedPrice(t, i)
                ? this.m_mapLocalPackagePriceOverrides.get(t).delete(i)
                : this.m_mapLocalPackagePriceOverrides.get(t).set(i, c),
              this.GetPriceGridCellCallbackList(t, i).Dispatch(c),
              this.GetPackageOverridesCallbackList(t).Dispatch(),
              this.DispatchPriceOverridesCallbacks());
          }
          OverridePricesForPackage(t, i, c, d) {
            (0, g.wT)(
              i.length == c.length,
              `price list size doesn't match ${i.length} != ${c.length}`,
            );
            for (let P = 0; P < i.length; ++P) {
              const W = i[P],
                U = c[P];
              this.m_mapLocalPackagePriceOverrides.has(t) ||
                this.m_mapLocalPackagePriceOverrides.set(t, new Map()),
                U == this.GetSavedPrice(t, W)
                  ? this.m_mapLocalPackagePriceOverrides.get(t).delete(W)
                  : this.m_mapLocalPackagePriceOverrides.get(t).set(W, U),
                this.GetPriceGridCellCallbackList(t, W).Dispatch(U);
            }
            this.GetPackageOverridesCallbackList(t).Dispatch(),
              d && this.DispatchPriceOverridesCallbacks();
          }
          DispatchPriceOverridesCallbacks() {
            this.m_allPriceOverridesCallbackList.Dispatch(
              this.GetAllLocalPriceOverrides(),
            ),
              this.UpdateOverridesPerPriceKey();
          }
          BHasLocalPriceOverrides(t) {
            return this.m_mapLocalPackagePriceOverrides.get(t)?.size > 0;
          }
          GetAllLocalPriceOverrides() {
            const t = [];
            return (
              this.m_mapLocalPackagePriceOverrides.forEach((i, c) =>
                i.forEach((d, P) => {
                  const W = this.GetSavedPrice(c, P);
                  t.push({
                    packageID: c,
                    strPriceKey: P,
                    nPriceInCents: d,
                    nOldPriceInCents: W,
                  });
                }),
              ),
              t.sort(_),
              t
            );
          }
          BHasLocalPriceOverride(t, i) {
            let c = this.m_mapLocalPackagePriceOverrides.get(t);
            return c ? c.has(i) : !1;
          }
          UpdateOverridesPerPriceKey() {
            this.m_mapOverridesPerPriceKey.clear(),
              this.m_mapLocalPackagePriceOverrides.forEach((t, i) => {
                t.forEach((c, d) => {
                  let P = this.m_mapOverridesPerPriceKey.get(d);
                  P || (P = 0), P++, this.m_mapOverridesPerPriceKey.set(d, P);
                });
              });
          }
          DiscardAllLocalPriceOverrides() {
            const t = this.GetAllLocalPriceOverrides();
            this.m_mapLocalPackagePriceOverrides.clear();
            let i = new Set();
            for (const c of t) {
              const { packageID: d, strPriceKey: P } = c;
              this.GetPriceGridCellCallbackList(d, P).Dispatch(
                this.GetPrice(d, P),
              ),
                i.add(d);
            }
            for (const c of i)
              this.GetPackageOverridesCallbackList(c).Dispatch();
            this.DispatchPriceOverridesCallbacks();
          }
          DiscardAllLocalPriceOverridesForKey(t) {
            let i = !1,
              c = new Set();
            this.m_mapLocalPackagePriceOverrides.forEach((d, P) => {
              this.m_mapPriceKeyDescriptions.has(t) &&
                ((i = !0),
                this.m_mapLocalPackagePriceOverrides.get(P).delete(t),
                this.GetPriceGridCellCallbackList(P, t).Dispatch(
                  this.GetPrice(P, t),
                ),
                c.add(P));
            });
            for (const d of c)
              this.GetPackageOverridesCallbackList(d).Dispatch();
            i && this.DispatchPriceOverridesCallbacks();
          }
          DiscardLocalPriceOverridesForPackage(t) {
            this.m_mapLocalPackagePriceOverrides.get(t)?.forEach((i, c) => {
              this.GetPriceGridCellCallbackList(t, c).Dispatch(
                this.GetSavedPrice(t, c),
              );
            }),
              this.m_mapLocalPackagePriceOverrides.delete(t),
              this.GetPackageOverridesCallbackList(t).Dispatch(),
              this.DispatchPriceOverridesCallbacks();
          }
          BuildNewPricingProposal(t, i) {
            const c = {
              packageID: t,
              rtSubmitted: Math.floor(Date.now() / 1e3),
              submitterID: f.iA.accountid,
              prices: {},
              eState: w.Al,
              bPartnerWillPublish: i,
            };
            for (const P of this.m_rgKnownPriceKeys)
              c.prices[P] = this.GetPrice(t, P);
            const d = this.m_mapPackageCountryOverridePrice.get(t);
            if (d) for (const P of d.keys()) c.prices[P] = this.GetPrice(t, P);
            return c;
          }
          async SubmitProposalToServer(t, i, c, d) {
            const P = this.BuildNewPricingProposal(t, i),
              W = JSON.stringify(P.prices),
              U = (0, f.Tc)("publisherid", "application_config"),
              N =
                f.TS.PARTNER_BASE_URL +
                "pricing/ajaxsubmitproposal/" +
                U +
                "/" +
                t,
              H = new FormData();
            H.append("sessionid", (0, f.KC)()),
              H.append("partner_will_publish", i ? "1" : "0"),
              H.append("cancel_unapplied", c ? "1" : "0"),
              H.append("prices", W);
            let te = null;
            try {
              const ne = await u().post(N, H, {
                withCredentials: !0,
                cancelToken: d?.token,
              });
              if (
                ne?.status == 200 &&
                ne.data?.success == b.R &&
                ne.data.eState != w.nD
              ) {
                if (ne.data.eState == w.pJ) {
                  this.m_mapPriceProposals.delete(t);
                  for (const fe of this.m_rgKnownPriceKeys)
                    this.m_mapPackagePrice.has(t) ||
                      this.m_mapPackagePrice.set(t, new Map()),
                      this.m_mapPackagePrice.get(t).set(fe, P.prices[fe]);
                } else
                  (P.eState = ne.data.eState),
                    (P.proposalKey = ne.data.proposalKey),
                    this.m_mapPriceProposals.set(t, P);
                return this.DiscardLocalPriceOverridesForPackage(t), ne.data;
              }
            } catch (ne) {
              te = ne;
            }
            const se = (0, v.H)(te),
              le = te?.response?.data ?? { success: b.zi };
            return le.unappliedProposal
              ? ((le.newProposal = P), le)
              : (console.error(
                  "CPackagePricingStore.SubmitProposalToServer: failed",
                  se.strErrorMsg,
                  se,
                ),
                le);
          }
          async PublishApprovedProposal(t, i, c = 0) {
            const d = this.m_mapPriceProposals.get(t);
            if (d?.eState != w.Zo || !d?.proposalKey) return { success: b.nO };
            const P = (0, f.Tc)("publisherid", "application_config"),
              W =
                f.TS.PARTNER_BASE_URL +
                "pricing/ajaxpublishproposal/" +
                P +
                "/" +
                t,
              U = new FormData();
            U.append("sessionid", (0, f.KC)()),
              U.append("proposal_key", d.proposalKey);
            let N = null;
            try {
              const te = await u().post(W, U, {
                withCredentials: !0,
                cancelToken: i?.token,
                timeout: c,
              });
              if (te?.status == 200 && te.data?.success == b.R) {
                this.m_mapPriceProposals.delete(t);
                for (const se of this.m_rgKnownPriceKeys)
                  this.m_mapPackagePrice.get(t).set(se, d.prices[se]),
                    this.GetPriceGridCellCallbackList(t, se).Dispatch(
                      this.GetSavedPrice(t, se),
                    );
                return (
                  this.GetPackageOverridesCallbackList(t).Dispatch(),
                  this.DispatchPriceOverridesCallbacks(),
                  te.data
                );
              }
            } catch (te) {
              N = te;
            }
            const H = (0, v.H)(N);
            return (
              console.error(
                "CPackagePricingStore.PublishApprovedProposal: failed",
                H.strErrorMsg,
                H,
              ),
              N?.response?.data ?? { success: b.zi }
            );
          }
          async CancelProposal(t, i) {
            const c = this.m_mapPriceProposals.get(t);
            if (!c?.proposalKey) return { success: b.nO };
            const d = (0, f.Tc)("publisherid", "application_config"),
              P =
                f.TS.PARTNER_BASE_URL +
                "pricing/ajaxcancelproposal/" +
                d +
                "/" +
                t,
              W = new FormData();
            W.append("sessionid", (0, f.KC)()),
              W.append("proposal_key", c.proposalKey);
            let U = null;
            try {
              const H = await u().post(P, W, {
                withCredentials: !0,
                cancelToken: i?.token,
              });
              if (H?.status == 200 && H.data?.success == b.R) {
                this.m_mapPriceProposals.delete(t);
                for (const te of this.m_rgKnownPriceKeys)
                  this.GetPriceGridCellCallbackList(t, te).Dispatch(
                    this.GetSavedPrice(t, te),
                  );
                return (
                  this.GetPackageOverridesCallbackList(t).Dispatch(),
                  this.DispatchPriceOverridesCallbacks(),
                  H.data
                );
              }
            } catch (H) {
              U = H;
            }
            const N = (0, v.H)(U);
            return (
              console.error(
                "CPackagePricingStore.CancelProposal: failed",
                N.strErrorMsg,
                N,
              ),
              U?.response?.data ?? { success: b.zi }
            );
          }
          GetLocalOverrideCountForPriceKey(t) {
            return this.m_mapOverridesPerPriceKey.get(t) ?? 0;
          }
          BAnyPackagePriceBelowMin(t) {
            if (!t) return !1;
            for (let i of this.m_rgKnownPriceKeys) {
              let c = this.GetPrice(t, i);
              if (c === void 0) continue;
              let { nMinPriceInCents: d, nMaxPriceInCents: P } = ge(t, i);
              if (c < d) return !0;
            }
            return !1;
          }
        };
        K([r.sH], L.prototype, "m_mapOverridesPerPriceKey", 2),
          K([I.oI], L.prototype, "OverridePrice", 1),
          K([r.XI], L.prototype, "UpdateOverridesPerPriceKey", 1);
        let o = L;
        function _(a, t) {
          if (a.strPriceKey == t.strPriceKey) {
            const i = (0, J.ww)(a.packageID),
              c = (0, J.ww)(t.packageID);
            return (0, y.kd)(i, c);
          } else return (0, y.kd)(ae(a.strPriceKey), ae(t.strPriceKey));
        }
        function F(a) {
          const t = a.split("_")[0];
          return o.Get().m_mapCurrencyData.get(t);
        }
        function A(a, t) {
          if (t === void 0) return ["", "", ""];
          const i = F(t) ?? F("USD");
          let c = "";
          if (typeof a == "number") {
            let d = a.toString();
            d.length < 3 && (d = (d.length == 1 ? "0" : "") + "0" + d);
            const P = d.length - 2;
            for (let W = 0; W < P; W++) {
              const U = d.charAt(W);
              (c += U),
                W < P - 1 &&
                  (P - W - 1) % 3 == 0 &&
                  U != "-" &&
                  (c += i.strThousandsSeparator);
            }
            i.bWholeUnitsOnly ||
              ((c += i.strDecimalSymbol), (c += d.substr(d.length - 2)));
          }
          return i.bSymbolIsPrefix
            ? [i.strSymbol + i.strSymbolAndNumberSeparator, c, ""]
            : ["", c, i.strSymbolAndNumberSeparator + i.strSymbol];
        }
        const re = new Map([
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
        function ae(a) {
          return re.has(a) ? re.get(a) : a.indexOf("_") > 0 ? "ZZZ" + a : a;
        }
        function ce(a, t) {
          return o.Get().GetPrice(a, t);
        }
        function oe(a) {
          return o.Get().GetPublishedCountryOverrides(a);
        }
        function C(a, t) {
          return o.Get().GetPublishedPriceCountryOverride(a, t);
        }
        function T(a, t) {
          return o.Get().GetPublishedPrice(a, t);
        }
        function D(a, t) {
          return o.Get().GetProposedPrice(a, t);
        }
        function V(a, t) {
          return o.Get().GetLocalOverridePrice(a, t);
        }
        function R(a) {
          return o.Get().GetMinimumDiscountPrice(a);
        }
        function Y(a) {
          const t = o.Get().m_strDisplayPriceKey,
            i = o.Get().GetPrice(a, t);
          return A(i, t).join("");
        }
        function $() {
          const [a, t] = l.useState(o.Get().m_strDisplayPriceKey);
          return (0, I.hL)(o.Get().m_displayPriceKeyCallbackList, t), a;
        }
        function Z(a, t) {
          const [i, c] = l.useState(o.Get().GetPrice(a, t));
          return (
            (0, I.hL)(o.Get().GetPriceGridCellCallbackList(a, t), c),
            l.useEffect(() => c(o.Get().GetPrice(a, t)), [a, t]),
            i
          );
        }
        function X(a) {
          const t = $();
          return q(a, t);
        }
        function q(a, t) {
          const i = Z(a, t);
          return A(i, t).join("");
        }
        function ee(a, t, i) {
          const d = (F(i) ?? F("USD"))?.bWholeUnitsOnly
            ? Math.ceil((a * t) / 1e4) * 100
            : Math.ceil((a * t) / 100);
          return a - d;
        }
        function Q(a, t) {
          const i = $(),
            c = Z(a, i);
          if (typeof c == "number") return A(ee(c, t, i), i).join("");
        }
        function Pe(a, t, i) {
          let c = 0;
          for (const d of a) {
            const P = new Array(),
              W = new Array(),
              U = o.Get().GetPrice(d, "USD");
            if (!(!U || U <= 0)) {
              for (const N of o.Get().m_rgKnownPriceKeys) {
                if (N == "USD") continue;
                const H = o.Get().GetPrice(d, "USD"),
                  { nSuggestedPriceInCents: te, nGuidelinesLevel: se } = (0,
                  z.$)(t, i, H, (0, O.ei)(N), (0, h.vS)(N));
                if (se === null) continue;
                o.Get().GetPrice(d, N) != te && (P.push(N), W.push(te));
              }
              P.length > 0 &&
                (o.Get().OverridePricesForPackage(d, P, W), (c += 1));
            }
          }
          c > 0 && o.Get().DispatchPriceOverridesCallbacks();
        }
        function j() {
          const a = (0, J.Yr)(),
            t = (0, M.cT)(),
            i = (0, B.Bb)();
          return l.useCallback(() => Pe(a, t, i), [a, t, i]);
        }
        function e(a, t) {
          const i = (0, I.CH)();
          (0, I.hL)(o.Get().GetPriceGridCellCallbackList(a, t), i);
          const c = o.Get().GetPrice(a, t),
            d = (0, M.cT)(),
            P = (0, B.Bb)();
          (0, I.hL)(o.Get().GetPriceGridCellCallbackList(a, "USD"), i);
          const W = o.Get().GetPrice(a, "USD"),
            { nSuggestedPriceInCents: U, nGuidelinesLevel: N } = (0, z.$)(
              d,
              P,
              W,
              (0, O.ei)(t),
              (0, h.vS)(t),
            ),
            H = l.useCallback((Fe) => o.Get().OverridePrice(a, t, Fe), [a, t]),
            te = o.Get().GetPublishedPrice(a, t),
            se = o.Get().GetProposedPrice(a, t),
            { nMinPriceInCents: le, nMaxPriceInCents: ne } = ge(a, t),
            fe = ue(t, c, N);
          return l.useMemo(
            () => ({
              nPriceInCents: c,
              nProposedPriceInCents: se,
              nPublishedPriceInCents: te,
              nMinPriceInCents: le,
              nMaxPriceInCents: ne,
              nMaxDiscountPercentage: fe,
              nSuggestedPriceInCents: U,
              fnSetPrice: H,
            }),
            [c, se, te, le, ne, fe, U, H],
          );
        }
        const s = 90,
          k = 10;
        function ue(a, t, i, c) {
          const d = o.Get().GetMinimumDiscountPrice(a),
            P = t ? Math.floor((100 * (t - d)) / t) : s,
            W = Math.min(s, Math.floor((100 * (i - 50)) / i));
          return c
            ? t < d || P < k
              ? null
              : Math.max(Math.min(P, s), 0)
            : P < W
              ? P
              : null;
        }
        function me(a) {
          let t = () => o.Get().BAnyPackagePriceBelowMin(a),
            [i, c] = l.useState(t),
            d = l.useCallback(() => {
              let P = o.Get().BAnyPackagePriceBelowMin(a);
              c(P);
            }, [a, c]);
          return (0, I.hL)(o.Get().GetPackageOverridesCallbackList(a), d), i;
        }
        function be(a) {
          return o.Get().BAnyPackagePriceBelowMin(a);
        }
        function ge(a, t) {
          let i = o.Get();
          const c = i.GetMinimumBasePrice(t),
            d = i.m_setRecurringSubscriptions.has(a)
              ? i.GetPublishedPrice(a, t)
              : null;
          return { nMinPriceInCents: c, nMaxPriceInCents: d };
        }
        function Me() {
          return l.useCallback((a, t, i) => {
            const c = o.Get().GetPrice(a, t);
            return (
              o.Get().OverridePrice(a, t, i),
              c == i
                ? null
                : {
                    packageID: a,
                    strPriceKey: t,
                    nPriceInCents: i,
                    nOldPriceInCents: c,
                  }
            );
          }, []);
        }
        function he(a) {
          const t = (0, I.CH)();
          return (
            (0, I.hL)(o.Get().GetPriceGridCellCallbackList(a, "USD"), t),
            o.Get().m_mapPriceProposals.get(a)
          );
        }
        function pe() {
          return Array.from(o.Get().m_mapPriceProposals.values());
        }
        function Be(a) {
          return o.Get().m_mapPriceProposals.get(a);
        }
        function ye(a) {
          let t = !1;
          for (const i of o.Get().m_rgKnownPriceKeys) {
            let c = o.Get().GetPublishedPrice(a, i);
            t = t || (c != 0 && c !== void 0);
          }
          return t;
        }
        function Oe(a) {
          const t = he(a),
            i = [];
          for (const c of o.Get().m_rgKnownPriceKeys) {
            const d = t.prices[c],
              P = o.Get().GetPublishedPrice(a, c);
            d != P &&
              i.push({
                packageID: a,
                strPriceKey: c,
                nPriceInCents: d,
                nOldPriceInCents: P,
              });
          }
          return i;
        }
        function we() {
          return o.Get().m_rgKnownPriceKeys;
        }
        function Ee(a) {
          let t = o.Get().m_mapPriceKeyDescriptions.get(a);
          return t ? t.strDescription : "";
        }
        function De(a) {
          let t = o.Get().m_mapPriceKeyDescriptions.get(a);
          return t ? t.bRequired : !1;
        }
        function ve(a) {
          return l.useCallback(() => {
            o.Get().DiscardAllLocalPriceOverridesForKey(a);
          }, [a]);
        }
        function Se(a) {
          return l.useCallback(() => {
            o.Get().DiscardLocalPriceOverridesForPackage(a);
          }, [a]);
        }
        function _e(a) {
          return l.useCallback(() => {
            o.Get().CancelProposal(a);
          }, [a]);
        }
        function Te() {
          const [a, t] = l.useState(o.Get().m_strDisplayPriceKey),
            i = o.Get().m_rgKnownPriceKeys,
            c = l.useCallback((d) => {
              t(d),
                (o.Get().m_strDisplayPriceKey = d),
                o.Get().m_displayPriceKeyCallbackList.Dispatch(d);
            }, []);
          return { strPriceKey: a, rgSupportedPriceKeys: i, fnSetPriceKey: c };
        }
        function Le(a) {
          const t = (0, I.CH)();
          return (
            (0, I.hL)(o.Get().m_allPriceOverridesCallbackList, t),
            o.Get().BHasLocalPriceOverrides(a)
          );
        }
        function Ue(a) {
          return o.Get().BHasLocalPriceOverrides(a);
        }
        function ze() {
          const [a, t] = l.useState(() => o.Get().GetAllLocalPriceOverrides());
          return (0, I.hL)(o.Get().m_allPriceOverridesCallbackList, t), a;
        }
        function Ke(a) {
          return (0, m.q3)(() => o.Get().GetLocalOverrideCountForPriceKey(a));
        }
        function je() {
          return l.useCallback(
            () => o.Get().GetAllLocalPriceOverrides()?.length > 0,
            [],
          );
        }
        function ke() {
          return l.useCallback(
            () => o.Get().DiscardAllLocalPriceOverrides(),
            [],
          );
        }
        function We() {
          return o.Get().OverridePrice;
        }
        function Ie() {
          return l.useCallback(
            (a, t, i, c) => o.Get().SubmitProposalToServer(a, t, i, c),
            [],
          );
        }
        function Ce() {
          return l.useCallback(
            (a, t) => o.Get().PublishApprovedProposal(a, t, 60 * 1e3),
            [],
          );
        }
        function Ge(a) {
          let t = [];
          const i = o.Get().m_rgKnownPriceKeys;
          for (let c of a) {
            if (ye(c)) continue;
            let d = !1;
            for (const P of i) {
              if (!o.Get().BPriceKeyRequired(P)) continue;
              if (!o.Get().GetPrice(c, P)) {
                d = !0;
                break;
              }
            }
            d && t.push(c);
          }
          return t;
        }
      },
      601: (ie, x, n) => {
        "use strict";
        n.d(x, { es: () => r, nm: () => J });
        var p = n(41301),
          u = n(82734),
          l = n(18210);
        function r(m, g) {
          const w = (0, l.we)("#PackageGrid_MultipleBaseGamesFoundForPackage"),
            z = (0, l.we)("#PackageGrid_NoBaseGameFoundForPackage"),
            M = m.original.appName,
            B = g.original.appName,
            O = M == w,
            h = M == z,
            S = !O && !h,
            E = B == w,
            K = B == z,
            L = !E && !K;
          if (S && L) return M.localeCompare(B);
          if (!S && !L)
            if (O == E && h == K) {
              const o = m.original.packageName,
                _ = g.original.packageName;
              return o && _
                ? o.localeCompare(_)
                : !o && !_
                  ? m.original.packageID - g.original.packageID
                  : o
                    ? -1
                    : 1;
            } else return O ? -1 : 1;
          else return S ? -1 : 1;
        }
        const b = (m) => m.nextElementSibling,
          v = (m) => m.previousElementSibling,
          G = (m, g) => {
            const w = m.getAttribute("data-table-column-id"),
              z = m.parentElement;
            let M = z && g(z);
            for (; w && M; ) {
              for (const B of Array.from(M.children))
                if (w == B.getAttribute("data-table-column-id")) return B;
              M = g(M);
            }
            return null;
          },
          I = new Map([
            [p.Oy, (m) => G(m, v)],
            [p.JI, b],
            [p.BH, (m) => G(m, b)],
            [p.ek, v],
            [p.$R, (m) => G(m, b)],
            [p.wd, (m) => G(m, b)],
          ]);
        function y(m) {
          return (0, u.Kf)(
            m,
            (g) => g.getAttribute("data-table-column-id") != null,
          );
        }
        function f(m) {
          const g = Array.prototype.slice.call(m.children).reverse();
          for (; g.length > 0; ) {
            const w = g.pop();
            if (w.tagName.toLowerCase() === "input") return w;
            g.push(...Array.prototype.slice.call(w.children).reverse());
          }
          return null;
        }
        function J(m) {
          let g = I.get(m.keyCode);
          if ((m.keyCode === p.$R && m.shiftKey && (g = (M) => G(M, v)), !g))
            return;
          const w = y(m.currentTarget);
          let z = g(w);
          for (; z; ) {
            const M = f(z);
            if (M) {
              M.focus(), m.preventDefault();
              return;
            }
            z = g(z);
          }
        }
      },
      28763: (ie, x, n) => {
        "use strict";
        n.d(x, { M: () => u, o: () => p });
        const p = "America/Los_Angeles";
        function u(l) {
          const b = n(87937).unix(l).tz(p);
          return (
            b.seconds(0),
            b.minutes(0),
            b.hours(10),
            b.unix() < l && b.hours(34),
            b.unix()
          );
        }
      },
      75083: (ie, x, n) => {
        "use strict";
        n.d(x, { $: () => B, v: () => O });
        var p = n(7850),
          u = n(64238),
          l = n.n(u),
          r = n(69041),
          b = n(8928),
          v = n(69289),
          G = n(3877),
          I = n(86668),
          y = n(24660),
          f = n(80549),
          J = n(3166),
          m = n(2333);
        function g(h) {
          const {
              variant: S,
              size: E = "2",
              minWidth: K = "fit-content",
              color: L,
              loading: o,
              children: _,
              onClick: F,
              icon: A,
              focusable: re,
              navProps: ae,
              ...ce
            } = h,
            oe = (0, J.Qn)(),
            C = o
              ? (0, p.jsx)(I.k, {
                  size: E,
                  color: L,
                  variant: "bright",
                  children: _,
                })
              : _,
            T = o ? void 0 : F,
            D = re ?? ae?.focusable ?? !!T,
            V = (0, f.f)("Button", S),
            R = {
              type: "button",
              ...(0, v.mz)(
                {
                  ...ce,
                  variant: V,
                  size: E,
                  minWidth: K,
                  color: L,
                  className: l()(r.Button, A && r.Icon),
                  onClick: T,
                },
                M,
              ),
              children: C,
            };
          return oe && (D || ae)
            ? (0, p.jsx)(y.fu, { ...R, ...(ae || {}), focusable: D })
            : (0, p.jsx)("button", { ...R });
        }
        function w(h) {
          const {
              variant: S,
              size: E = "2",
              minWidth: K = "fit-content",
              disabled: L,
              icon: o,
              ..._
            } = h,
            F = (0, f.f)("Button", S),
            A = L ? z : void 0,
            re = (0, v.mz)(
              {
                onClick: A,
                "aria-disabled": L,
                ..._,
                variant: F,
                size: E,
                minWidth: K,
                className: l()(r.Button, o && r.Icon, (0, G.T)()),
              },
              M,
            );
          return (0, p.jsx)(m.o, { ...re });
        }
        function z(h) {
          h.preventDefault();
        }
        const M = [
            ...b.L,
            { prop: "size", responsive: !0, className: (h) => r[`Size-${h}`] },
            { prop: "variant", className: (h) => r[`Variant-${h}`] },
            { prop: "color", dataProperty: (h) => ["accent-color", `${h}`] },
            {
              prop: "width",
              className: r.Width,
              cssProperty: "--width",
              responsive: !0,
            },
            {
              prop: "minWidth",
              className: r.MinWidth,
              cssProperty: "--min-width",
              responsive: !0,
            },
          ],
          B = g,
          O = w;
      },
      2333: (ie, x, n) => {
        "use strict";
        n.d(x, { o: () => f });
        var p = n(7850),
          u = n(3166),
          l = n(24660),
          r = n(72865),
          b = n(71742),
          v = n(90626);
        const G = v.createContext(!1);
        function I(m) {
          return jsx(G.Provider, { value: !0, children: m.children });
        }
        function y() {
          return v.useContext(G);
        }
        function f(m) {
          const {
            snr: g,
            focusable: w,
            navProps: z,
            href: M,
            openInNewWindow: B,
            target: O,
            rel: h,
            ...S
          } = m;
          (0, b.wT)(
            !(B && O),
            "Link: pass either openInNewWindow or target, not both",
          );
          const E = (0, u.Qn)(),
            K = y(),
            L = J(M, g),
            o = w ?? z?.focusable ?? !!L;
          let _ = B ? "_blank" : O;
          !_ && K && (_ = "_top");
          let F = h;
          !F && B && (F = "noreferrer noopener");
          const A = { href: L, target: _, rel: F, ...S };
          return E && (o || z)
            ? (0, p.jsx)(l.Ii, { ...z, focusable: o, ...A })
            : (0, p.jsx)("a", { ...A });
        }
        function J(m, g) {
          const w = (0, r.n9)();
          return !m || !g
            ? m
            : g === !0
              ? (0, r.bV)(w, m)
              : (0, r.bV)({ ...w, ...g }, m);
        }
      },
      86668: (ie, x, n) => {
        "use strict";
        n.d(x, { k: () => J });
        var p = n(7850),
          u = n(73406),
          l = n.n(u),
          r = n(69289),
          b = n(60351),
          v = n(64238),
          G = n.n(v),
          I = n(68031),
          y = n(8928),
          f = n(80549);
        function J(w) {
          const {
              size: z = "3",
              loading: M = !0,
              children: B,
              color: O,
              variant: h,
              ...S
            } = w,
            E = (0, f.f)("LoadingSpinner", h);
          return B || !M
            ? (0, p.jsxs)(b.az, {
                position: "relative",
                ...S,
                width: "fit-content",
                children: [
                  (0, p.jsx)("div", {
                    "data-visibility": !M,
                    className: u.ChildContainer,
                    children: B,
                  }),
                  M &&
                    (0, p.jsx)(I.s, {
                      position: "absolute",
                      inset: "0",
                      justify: "center",
                      align: "center",
                      children: (0, p.jsx)(m, {
                        size: z,
                        color: O,
                        variant: E,
                      }),
                    }),
                ],
              })
            : (0, p.jsx)(m, { size: z, color: O, variant: E, ...S });
        }
        function m(w) {
          const { className: z, color: M, ...B } = (0, r.mz)(w, g);
          return (0, p.jsx)("div", {
            "data-accent-color": M,
            className: G()(z, u.Spinner),
            ...B,
          });
        }
        const g = [
          ...y.L,
          { prop: "size", responsive: !0, className: (w) => u[`Size-${w}`] },
          { prop: "variant", className: (w) => u[`Variant-${w}`] },
        ];
      },
      98254: (ie, x, n) => {
        "use strict";
        n.d(x, { z: () => w });
        var p = n(7850),
          u = n(90626),
          l = n(64238),
          r = n.n(l),
          b = n(16180),
          v = n.n(b),
          G = n(68031),
          I = n(15252),
          y = n(76854);
        function f(M) {
          const {
            value: B,
            onValueChange: O,
            options: h,
            getOptionLabel: S,
            disabled: E,
            ...K
          } = M;
          return (0, p.jsx)(w.Root, {
            value: B,
            onValueChange: O,
            disabled: E,
            ...K,
            children: h.map((L) => {
              const o = S ? S(L) : L;
              return (0, p.jsx)(w.Option, { value: L, children: o }, o);
            }),
          });
        }
        function J(M) {
          const {
              value: B,
              onValueChange: O,
              disabled: h,
              render: S,
              ...E
            } = M,
            K = (0, u.useRef)(null),
            L = (0, u.useCallback)((ce, oe) => {
              if (!K.current) return;
              const C = [...K.current.querySelectorAll("[data-radio-id]")];
              if (C.length !== 0)
                for (let T = 0; T < C.length; T++) {
                  const D = C[T];
                  if (!D.dataset.radioId) continue;
                  if (D.dataset.radioId === ce) {
                    const R = (T + oe + C.length) % C.length,
                      Y = C[R];
                    Y.click(), Y.focus();
                  }
                }
            }, []),
            o = (0, u.useCallback)((ce) => L(ce, 1), [L]),
            _ = (0, u.useCallback)((ce) => L(ce, -1), [L]),
            F = (0, u.useMemo)(
              () => ({
                value: B,
                onValueChange: O,
                bDisabled: h,
                onSelectNext: o,
                onSelectPrev: _,
              }),
              [B, O, h, o, _],
            ),
            A = { role: "radiogroup", "aria-disabled": h, ref: K, ...E },
            re = (0, p.jsx)(G.s, {
              direction: "column",
              gap: "2",
              role: "radiogroup",
              "aria-disabled": h,
              ...E,
            }),
            ae = (0, y.Q)(S, re, A);
          return (0, p.jsx)(z, { value: F, children: ae });
        }
        function m(M) {
          const { value: B, ref: O, children: h, render: S } = M,
            E = (0, u.useContext)(z),
            K = (0, u.useId)();
          if (!E)
            return (
              console.error(
                "<RadioGroup.Option> must be rendered within a <RadioGroup.Root>",
              ),
              null
            );
          const {
              value: L,
              onValueChange: o,
              bDisabled: _,
              onSelectNext: F,
              onSelectPrev: A,
            } = E,
            re = L === B,
            ae = () => {
              _ || re || o(B);
            },
            oe = {
              role: "radio",
              "aria-checked": re,
              "aria-disabled": _,
              "data-radio-id": K,
              onClick: ae,
              onKeyDown: (T) => {
                if (!_)
                  switch (T.key) {
                    case " ": {
                      ae(), T.preventDefault(), T.stopPropagation();
                      break;
                    }
                    case "ArrowRight":
                    case "ArrowDown": {
                      F(K), T.preventDefault(), T.stopPropagation();
                      break;
                    }
                    case "ArrowLeft":
                    case "ArrowUp": {
                      A(K), T.preventDefault(), T.stopPropagation();
                      break;
                    }
                  }
              },
              tabIndex: re ? 0 : -1,
              ref: O,
              children: h,
            },
            C = (0, p.jsx)(g, { bDisabled: _ });
          return (0, y.Q)(S, C, oe, { bSelected: re, bDisabled: _ });
        }
        function g(M) {
          const { children: B, className: O, bDisabled: h, ...S } = M;
          return (0, p.jsxs)(G.s, {
            cursor: "default",
            gap: "2",
            className: r()(b.Option, h && b.Disabled),
            ...S,
            children: [
              (0, p.jsx)("div", { className: b.RadioCircle }),
              (0, p.jsx)(I.EY, { children: B }),
            ],
          });
        }
        const w = Object.assign(f, { Root: J, Option: m }),
          z = (0, u.createContext)(null);
      },
      3301: (ie, x, n) => {
        "use strict";
        n.d(x, {
          bS: () => l,
          de: () => v,
          j4: () => I,
          k8: () => r,
          uF: () => G,
          vS: () => y,
        });
        var p = n(34104),
          u = n(90247);
        function l(f) {
          return p.CS;
        }
        function r(f) {
          switch (f) {
            case u._S:
              return "usd_cis";
            case u.aL:
              return "usd_sasia";
            case u.M_:
              return "usd_latam";
            case u.aY:
              return "usd_mena";
            default:
              return "usd_invalid";
          }
        }
        function b(f) {
          switch (f) {
            case k_ERegionCodeCIS:
              return "CIS";
            case k_ERegionCodeSAsia:
              return "South Asia";
            case k_ERegionCodeLATAM:
              return "LATAM";
            case k_ERegionCodeMENA:
              return "MENA";
            default:
              return "Invalid Region";
          }
        }
        function v(f) {
          switch (f) {
            case u._S:
              return "CIS";
            case u.aL:
              return "SASIA";
            case u.M_:
              return "LATAM";
            case u.aY:
              return "MENA";
            default:
              return "Invalid Region";
          }
        }
        function G(f) {
          switch (f) {
            case "CIS":
              return u._S;
            case "SASIA":
              return u.aL;
            case "LATAM":
              return u.M_;
            case "MENA":
              return u.aY;
            default:
              return u.YS;
          }
        }
        function I(f) {
          switch (f) {
            case u._S:
              return "The Commonwealth of Independent States";
            case u.aL:
              return "South Asia";
            case u.M_:
              return "Latin America";
            case u.aY:
              return "Middle East and North Africa";
            default:
              return "Invalid Region";
          }
        }
        function y(f) {
          switch (f?.toLowerCase()) {
            case "usd_cis":
              return u._S;
            case "usd_sasia":
              return u.aL;
            case "usd_latam":
              return u.M_;
            case "usd_mena":
              return u.aY;
            default:
              return u.YS;
          }
        }
      },
      13401: (ie, x, n) => {
        "use strict";
        n.d(x, { Bb: () => I, MA: () => G, jY: () => v });
        var p = n(7850),
          u = n(55409),
          l = n(90626),
          r = n(93357);
        const b = l.createContext({
          eConversionMethod: u.Y5.lZ,
          setConversionMethod: (y) => {},
          rgAvailableConversionMethods: [],
        });
        function v(y) {
          const { eInitialConversionMethod: f } = y,
            J = (0, r.cT)(),
            [m, g] = l.useState(f || u.Y5.lZ),
            w = l.useMemo(() => {
              const z = J ? J.GetAvailableConversionMethods() : [];
              return {
                eConversionMethod: m,
                setConversionMethod: g,
                rgAvailableConversionMethods: z,
              };
            }, [m, g, J]);
          return (0, p.jsx)(b.Provider, { value: w, children: y.children });
        }
        function G() {
          return l.useContext(b);
        }
        function I() {
          return l.useContext(b).eConversionMethod;
        }
      },
      7608: (ie, x, n) => {
        "use strict";
        n.d(x, { $: () => r });
        var p = n(90247),
          u = n(34104),
          l = n(71742);
        function r(b, v, G, I, y) {
          if (!b)
            return { nSuggestedPriceInCents: null, nGuidelinesLevel: null };
          let f = null;
          for (let M of b.GetUSDPricePointsInCents())
            if (M >= G) {
              f = M;
              break;
            }
          const J = y && y < p.Hc;
          if ((I == u.CS && !J) || !f)
            return { nSuggestedPriceInCents: null, nGuidelinesLevel: null };
          const m = b.GetRecommendPrice(f, I, y, v),
            g = b.GetRecommendPrice(f, u.CS, void 0, v);
          if (
            ((0, l.wT)(
              m,
              `Missing requested currency guide for  ${f}/${I}/${y}/${v}`,
            ),
            (0, l.wT)(g, `Missing usd guide for  ${f}/${y}/${v}`),
            !m || !g)
          )
            return { nSuggestedPriceInCents: null, nGuidelinesLevel: null };
          let w = m.price;
          const z = g.price;
          if (z != G) {
            const M = G / z;
            (f *= M), (w = Math.ceil(w * M));
          }
          return { nSuggestedPriceInCents: w, nGuidelinesLevel: f };
        }
      },
      93357: (ie, x, n) => {
        "use strict";
        n.d(x, { mj: () => M, gC: () => B, cT: () => w });
        var p = n(90626),
          u = n(90247),
          l = n(34104),
          r = n(55409);
        const b = r.Y5.lZ;
        class v {
          m_mapUSDPrice = new Map();
          m_mapKeyToGuidePrice = new Map();
          m_rgUSDPricePointInCents = [];
          m_setConversionMethod = new Set();
          m_setSupportedCurrencies = new Set();
          m_setSupportedRegions = new Set();
          m_rtNewestConvertStart = 0;
          GetKey(h, S, E, K = b) {
            return `${h}_${S}_${E || u.YS}_${K}`;
          }
          GetAvailableConversionMethods() {
            return Array.from(this.m_setConversionMethod).sort();
          }
          GetNewestConvertStartTime() {
            return this.m_rtNewestConvertStart || void 0;
          }
          GetAnyPricePoint() {
            return Array.from(
              this.m_mapUSDPrice.get(r.Y5.lZ)?.values() || [],
            )[0];
          }
          BIsSupportCurrencyAndOrRegion(h, S) {
            return S
              ? h == l.CS && this.m_setSupportedRegions.has(S)
              : this.m_setSupportedCurrencies.has(h);
          }
          GetRecommendPrice(h, S, E, K = b) {
            const L = this.GetKey(h, S, E, K);
            return this.m_mapKeyToGuidePrice.get(L);
          }
          GetScaledRecommendedPrice(h, S, E, K = b) {
            let L = -1,
              o = -1;
            for (const re of this.m_mapUSDPrice.get(K).keys()) {
              const ae = Math.abs(re - h);
              (L == -1 || ae < o) && ((L = re), (o = ae));
            }
            const _ = this.m_mapUSDPrice.get(K).get(L),
              F = E
                ? _.region_prices.find((re) => re.region_code == E)
                : _.currency_prices.find((re) => re.currency_code == S),
              A = h / L;
            return {
              currency_code: F?.currency_code,
              region_code: F?.region_code,
              price: Math.ceil((F?.price || 0) * A),
            };
          }
          GetUSDPricePointsInCents() {
            return this.m_rgUSDPricePointInCents;
          }
          constructor(h) {
            let S = new Set();
            h.forEach((E) => {
              const K = E.convert_method ?? b;
              this.m_setConversionMethod.add(K),
                this.m_mapUSDPrice.has(K) ||
                  this.m_mapUSDPrice.set(K, new Map()),
                this.m_mapUSDPrice.get(K).set(E.usd_price, E),
                S.add(E.usd_price),
                (this.m_rtNewestConvertStart = Math.max(
                  this.m_rtNewestConvertStart,
                  E.rtime_convert_start ?? 0,
                )),
                E.currency_prices.forEach((o) => {
                  const _ = this.GetKey(
                    E.usd_price,
                    o.currency_code,
                    u.YS,
                    E.convert_method || b,
                  );
                  this.m_mapKeyToGuidePrice.set(_, o),
                    this.m_setSupportedCurrencies.add(o.currency_code);
                }),
                E.region_prices.forEach((o) => {
                  const _ = this.GetKey(
                    E.usd_price,
                    o.currency_code,
                    o.region_code,
                    E.convert_method || b,
                  );
                  if (
                    (this.m_mapKeyToGuidePrice.set(_, o),
                    this.m_setSupportedRegions.add(o.region_code),
                    this.m_setConversionMethod.has(r.Y5.bA))
                  ) {
                    const F = {
                        currency_code: l.CS,
                        price: E.usd_price,
                        region_code: o.region_code,
                      },
                      A = this.GetKey(
                        E.usd_price,
                        l.CS,
                        o.region_code,
                        r.Y5.bA,
                      );
                    this.m_mapKeyToGuidePrice.set(A, F);
                  }
                });
            }),
              (this.m_rgUSDPricePointInCents = Array.from(S.keys()));
          }
        }
        var G = n(40497),
          I = n(67705);
        function y() {
          let O = (0, I.Fd)("pricing_guideline", "application_config");
          if (O) return Promise.resolve(O);
          {
            const h = G.L.getQueryData(M());
            return Promise.resolve(h ?? null);
          }
        }
        var f = n(13401),
          J = n(20194),
          m = n(71742),
          g = n(33220);
        function w() {
          const O = (0, J.I)(z());
          return (0, p.useMemo)(
            () => (O.data ? new v(O.data) : null),
            [O.data],
          );
        }
        function z() {
          return { queryKey: M(), queryFn: async () => await y() };
        }
        function M() {
          return ["PricingGuideline"];
        }
        function B(O) {
          const h = w(),
            S = (0, f.Bb)();
          return {
            fnApplyGuidelines: (0, p.useCallback)(
              (K, L, o) => {
                if (
                  ((0, m.wT)(
                    h,
                    "Pricing Guideline Not Initialized by time conversion being triggered",
                  ),
                  h)
                ) {
                  for (let _ = l.CS; _ < l.mh; ++_) {
                    const F = h.GetRecommendPrice(L, _, void 0, o ?? S)?.price;
                    if (F && F > 0) {
                      const A = (0, g.M1)(_);
                      O(K, A, F);
                    }
                  }
                  for (let _ = u._S; _ < u.Hc; ++_) {
                    const F = l.CS,
                      A = h.GetRecommendPrice(L, F, _, o ?? S)?.price;
                    if (A && A > 0) {
                      const re = (0, g.pd)(F, _).toUpperCase();
                      O(K, re, A);
                    }
                  }
                }
              },
              [S, O, h],
            ),
          };
        }
      },
      61075: (ie, x, n) => {
        "use strict";
        n.d(x, { Al: () => u, Zo: () => b, nD: () => p, pJ: () => r });
        const p = 0,
          u = 1,
          l = 2,
          r = 3,
          b = 4;
      },
      55409: (ie, x, n) => {
        "use strict";
        n.d(x, { Y5: () => p });
        var p = {};
        n.r(p), n.d(p, { bA: () => B, lZ: () => z, KC: () => M });
        var u = n(80613),
          l = n.n(u),
          r = n(75245),
          b = n(35038);
        function v(j) {
          return "unknown ERatingAgency ( " + j + " )";
        }
        function G(j) {
          return "unknown EAppRatingSource ( " + j + " )";
        }
        function I(j) {
          return "unknown ERatingDescriptorImage ( " + j + " )";
        }
        class y extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              y.prototype.descriptors || r.Sg(y.M()),
              u.Message.initialize(this, e, 0, -1, [1, 2, 6], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              y.sm_m ||
                (y.sm_m = {
                  proto: y,
                  fields: {
                    descriptors: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: r.qM.readString,
                      bw: r.gp.writeRepeatedString,
                    },
                    interactive_elements: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: r.qM.readString,
                      bw: r.gp.writeRepeatedString,
                    },
                    official_id: {
                      n: 3,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    esrb_online_music_not_rated: {
                      n: 4,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    esrb_online_interactions_not_rated: {
                      n: 5,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    descriptor_images: {
                      n: 6,
                      r: !0,
                      q: !0,
                      br: r.qM.readEnum,
                      pbr: r.qM.readPackedEnum,
                      bw: r.gp.writeRepeatedEnum,
                    },
                  },
                }),
              y.sm_m
            );
          }
          static MBF() {
            return y.sm_mbf || (y.sm_mbf = r.w0(y.M())), y.sm_mbf;
          }
          toObject(e = !1) {
            return y.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(y.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(y.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              k = new y();
            return y.deserializeBinaryFromReader(k, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(y.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(y.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              y.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "AppRatingAuxData";
          }
        }
        class f extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              f.prototype.rating_agency || r.Sg(f.M()),
              u.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              f.sm_m ||
                (f.sm_m = {
                  proto: f,
                  fields: {
                    rating_agency: {
                      n: 1,
                      br: r.qM.readEnum,
                      bw: r.gp.writeEnum,
                    },
                    rating: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
                    source: { n: 3, br: r.qM.readEnum, bw: r.gp.writeEnum },
                    banned: { n: 4, br: r.qM.readBool, bw: r.gp.writeBool },
                    required_age: {
                      n: 5,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    use_age_gate: {
                      n: 6,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    aux_data: { n: 7, c: y },
                  },
                }),
              f.sm_m
            );
          }
          static MBF() {
            return f.sm_mbf || (f.sm_mbf = r.w0(f.M())), f.sm_mbf;
          }
          toObject(e = !1) {
            return f.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(f.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(f.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              k = new f();
            return f.deserializeBinaryFromReader(k, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(f.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(f.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              f.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "AppRating";
          }
        }
        function J(j) {
          return "unknown EContentSurveyMatureTag ( " + j + " )";
        }
        class m extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              m.prototype.elanguage || r.Sg(m.M()),
              u.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              m.sm_m ||
                (m.sm_m = {
                  proto: m,
                  fields: {
                    elanguage: {
                      n: 1,
                      br: r.qM.readInt32,
                      bw: r.gp.writeInt32,
                    },
                    text: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
                  },
                }),
              m.sm_m
            );
          }
          static MBF() {
            return m.sm_mbf || (m.sm_mbf = r.w0(m.M())), m.sm_mbf;
          }
          toObject(e = !1) {
            return m.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(m.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(m.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              k = new m();
            return m.deserializeBinaryFromReader(k, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(m.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(m.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              m.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "ContentSurveyLocalizedText";
          }
        }
        class g extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              g.prototype.customer_notes || r.Sg(g.M()),
              u.Message.initialize(this, e, 0, -1, [1, 2, 3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              g.sm_m ||
                (g.sm_m = {
                  proto: g,
                  fields: {
                    customer_notes: { n: 1, c: m, r: !0, q: !0 },
                    customer_notes_ai: { n: 2, c: m, r: !0, q: !0 },
                    mature_tags: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: r.qM.readEnum,
                      pbr: r.qM.readPackedEnum,
                      bw: r.gp.writeRepeatedEnum,
                    },
                    has_mature_content: {
                      n: 4,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    ai_external_service_name: {
                      n: 5,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    ai_external_service_url: {
                      n: 6,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              g.sm_m
            );
          }
          static MBF() {
            return g.sm_mbf || (g.sm_mbf = r.w0(g.M())), g.sm_mbf;
          }
          toObject(e = !1) {
            return g.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(g.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(g.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              k = new g();
            return g.deserializeBinaryFromReader(k, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(g.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(g.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              g.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "ContentSurveyDisclosure";
          }
        }
        const w = 0,
          z = 1,
          M = 2,
          B = 3,
          O = 4;
        function h(j) {
          return "unknown EPriceConversionMethod ( " + j + " )";
        }
        function S(j) {
          return "unknown EProtoBillingType ( " + j + " )";
        }
        function E(j) {
          return "unknown EProtoActivationCode ( " + j + " )";
        }
        function K(j) {
          return "unknown EProtoProposalState ( " + j + " )";
        }
        function L(j) {
          return "unknown EContentDescriptorSurveyState ( " + j + " )";
        }
        function o(j) {
          return "unknown ERatingQuestionaireCategory ( " + j + " )";
        }
        function _(j) {
          return "unknown EGeneratedGameRatingVersion ( " + j + " )";
        }
        function F(j) {
          return "unknown EGameContentCategory ( " + j + " )";
        }
        function A(j) {
          return "unknown EContentSurveySection ( " + j + " )";
        }
        function re(j) {
          return "unknown EContentSurveySource ( " + j + " )";
        }
        function ae(j) {
          return "unknown EContentSurveyChildAppType ( " + j + " )";
        }
        function ce(j) {
          return "unknown EContentSurveyInheritAction ( " + j + " )";
        }
        function oe(j) {
          return "unknown EGeneratedAIContentType ( " + j + " )";
        }
        class C extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              C.prototype.method || r.Sg(C.M()),
              u.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              C.sm_m ||
                (C.sm_m = {
                  proto: C,
                  fields: {
                    method: { n: 1, br: r.qM.readEnum, bw: r.gp.writeEnum },
                  },
                }),
              C.sm_m
            );
          }
          static MBF() {
            return C.sm_mbf || (C.sm_mbf = r.w0(C.M())), C.sm_mbf;
          }
          toObject(e = !1) {
            return C.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(C.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(C.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              k = new C();
            return C.deserializeBinaryFromReader(k, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(C.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(C.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              C.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CProductInfo_ForceEmitPriceConversion";
          }
        }
        class T extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              T.prototype.survey_section || r.Sg(T.M()),
              u.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              T.sm_m ||
                (T.sm_m = {
                  proto: T,
                  fields: {
                    survey_section: {
                      n: 1,
                      br: r.qM.readEnum,
                      bw: r.gp.writeEnum,
                    },
                    time_reviewed: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    accountid_reviewer: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              T.sm_m
            );
          }
          static MBF() {
            return T.sm_mbf || (T.sm_mbf = r.w0(T.M())), T.sm_mbf;
          }
          toObject(e = !1) {
            return T.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(T.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(T.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              k = new T();
            return T.deserializeBinaryFromReader(k, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(T.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(T.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              T.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "SurveySectionReviewed";
          }
        }
        class D extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              D.prototype.content_category || r.Sg(D.M()),
              u.Message.initialize(this, e, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              D.sm_m ||
                (D.sm_m = {
                  proto: D,
                  fields: {
                    content_category: {
                      n: 1,
                      br: r.qM.readEnum,
                      bw: r.gp.writeEnum,
                    },
                    questionaire_categories: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: r.qM.readEnum,
                      pbr: r.qM.readPackedEnum,
                      bw: r.gp.writeRepeatedEnum,
                    },
                  },
                }),
              D.sm_m
            );
          }
          static MBF() {
            return D.sm_mbf || (D.sm_mbf = r.w0(D.M())), D.sm_mbf;
          }
          toObject(e = !1) {
            return D.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(D.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(D.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              k = new D();
            return D.deserializeBinaryFromReader(k, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(D.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(D.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              D.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "GeneratedGameContent";
          }
        }
        class V extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              V.prototype.rating_agency || r.Sg(V.M()),
              u.Message.initialize(this, e, 0, -1, [4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              V.sm_m ||
                (V.sm_m = {
                  proto: V,
                  fields: {
                    rating_agency: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    rating: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
                    required_age: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    descriptors: {
                      n: 4,
                      r: !0,
                      q: !0,
                      br: r.qM.readString,
                      bw: r.gp.writeRepeatedString,
                    },
                    banned: { n: 5, br: r.qM.readBool, bw: r.gp.writeBool },
                  },
                }),
              V.sm_m
            );
          }
          static MBF() {
            return V.sm_mbf || (V.sm_mbf = r.w0(V.M())), V.sm_mbf;
          }
          toObject(e = !1) {
            return V.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(V.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(V.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              k = new V();
            return V.deserializeBinaryFromReader(k, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(V.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(V.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              V.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "GeneratedGameRating";
          }
        }
        class R extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              R.prototype.timestamp_generated || r.Sg(R.M()),
              u.Message.initialize(this, e, 0, -1, [3, 4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              R.sm_m ||
                (R.sm_m = {
                  proto: R,
                  fields: {
                    timestamp_generated: {
                      n: 1,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    generated_version: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    ratings: { n: 3, c: V, r: !0, q: !0 },
                    content_categories: { n: 4, c: D, r: !0, q: !0 },
                  },
                }),
              R.sm_m
            );
          }
          static MBF() {
            return R.sm_mbf || (R.sm_mbf = r.w0(R.M())), R.sm_mbf;
          }
          toObject(e = !1) {
            return R.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(R.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(R.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              k = new R();
            return R.deserializeBinaryFromReader(k, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(R.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(R.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              R.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "GeneratedGameRatings";
          }
        }
        class Y extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Y.prototype.desc_code_generated || r.Sg(Y.M()),
              u.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Y.sm_m ||
                (Y.sm_m = {
                  proto: Y,
                  fields: {
                    desc_code_generated: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    desc_copyright_infringement_guarantee: {
                      n: 2,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    desc_content_moderation_strategy: {
                      n: 3,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    external_service_name: {
                      n: 4,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    external_service_url: {
                      n: 5,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    desc_external_service_how_content_available_to_players: {
                      n: 6,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    desc_external_service_monetization: {
                      n: 7,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              Y.sm_m
            );
          }
          static MBF() {
            return Y.sm_mbf || (Y.sm_mbf = r.w0(Y.M())), Y.sm_mbf;
          }
          toObject(e = !1) {
            return Y.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(Y.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(Y.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              k = new Y();
            return Y.deserializeBinaryFromReader(k, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(Y.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(Y.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Y.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "AIContentSurvey";
          }
        }
        class $ extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              $.prototype.disclosure || r.Sg($.M()),
              u.Message.initialize(this, e, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $.sm_m ||
                ($.sm_m = {
                  proto: $,
                  fields: {
                    disclosure: { n: 1, c: g },
                    interactive_elements: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: r.qM.readEnum,
                      pbr: r.qM.readPackedEnum,
                      bw: r.gp.writeRepeatedEnum,
                    },
                  },
                }),
              $.sm_m
            );
          }
          static MBF() {
            return $.sm_mbf || ($.sm_mbf = r.w0($.M())), $.sm_mbf;
          }
          toObject(e = !1) {
            return $.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT($.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq($.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              k = new $();
            return $.deserializeBinaryFromReader(k, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj($.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0($.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              $.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "ContentSurveyAuxData";
          }
        }
        class Z extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Z.prototype.id || r.Sg(Z.M()),
              u.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Z.sm_m ||
                (Z.sm_m = {
                  proto: Z,
                  fields: {
                    id: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                  },
                }),
              Z.sm_m
            );
          }
          static MBF() {
            return Z.sm_mbf || (Z.sm_mbf = r.w0(Z.M())), Z.sm_mbf;
          }
          toObject(e = !1) {
            return Z.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(Z.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(Z.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              k = new Z();
            return Z.deserializeBinaryFromReader(k, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(Z.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(Z.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Z.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "ContentDescriptor";
          }
        }
        class X extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              X.prototype.surveyid || r.Sg(X.M()),
              u.Message.initialize(this, e, 0, -1, [3, 11, 14, 15], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              X.sm_m ||
                (X.sm_m = {
                  proto: X,
                  fields: {
                    surveyid: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    state: { n: 2, br: r.qM.readEnum, bw: r.gp.writeEnum },
                    descriptors: { n: 3, c: Z, r: !0, q: !0 },
                    timestamp_started: {
                      n: 4,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    timestamp_updated: {
                      n: 5,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    timestamp_finished: {
                      n: 6,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    accountid: {
                      n: 7,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    developer_notes: {
                      n: 8,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    keyvalues: {
                      n: 9,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    ratings: { n: 10, c: R },
                    categories: {
                      n: 11,
                      r: !0,
                      q: !0,
                      br: r.qM.readEnum,
                      pbr: r.qM.readPackedEnum,
                      bw: r.gp.writeRepeatedEnum,
                    },
                    ai_survey: { n: 12, c: Y },
                    internal_notes: {
                      n: 13,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    all_ratings: { n: 14, c: f, r: !0, q: !0 },
                    sections_reviewed: { n: 15, c: T, r: !0, q: !0 },
                    disclosure: { n: 16, c: g },
                    inherited_surveyid: {
                      n: 17,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    started_from_scratch: {
                      n: 18,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    survey_aux_data: { n: 19, c: $ },
                    source: { n: 20, br: r.qM.readEnum, bw: r.gp.writeEnum },
                    flags: {
                      n: 21,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              X.sm_m
            );
          }
          static MBF() {
            return X.sm_mbf || (X.sm_mbf = r.w0(X.M())), X.sm_mbf;
          }
          toObject(e = !1) {
            return X.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(X.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(X.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              k = new X();
            return X.deserializeBinaryFromReader(k, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(X.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(X.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              X.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "ContentDescriptorSurvey";
          }
        }
        class q extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              q.prototype.appid || r.Sg(q.M()),
              u.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              q.sm_m ||
                (q.sm_m = {
                  proto: q,
                  fields: {
                    appid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    include_descriptors: {
                      n: 2,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    include_keyvalues: {
                      n: 3,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    include_categories: {
                      n: 4,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    include_ai_survey: {
                      n: 5,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    include_all_ratings: {
                      n: 6,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                  },
                }),
              q.sm_m
            );
          }
          static MBF() {
            return q.sm_mbf || (q.sm_mbf = r.w0(q.M())), q.sm_mbf;
          }
          toObject(e = !1) {
            return q.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(q.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(q.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              k = new q();
            return q.deserializeBinaryFromReader(k, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(q.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(q.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              q.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAppContentDescriptors_GetActiveSurvey_Request";
          }
        }
        class ee extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ee.prototype.appid || r.Sg(ee.M()),
              u.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ee.sm_m ||
                (ee.sm_m = {
                  proto: ee,
                  fields: {
                    appid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    include_descriptors: {
                      n: 2,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    include_keyvalues: {
                      n: 3,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    include_categories: {
                      n: 4,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    include_ai_survey: {
                      n: 5,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    include_all_ratings: {
                      n: 6,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                  },
                }),
              ee.sm_m
            );
          }
          static MBF() {
            return ee.sm_mbf || (ee.sm_mbf = r.w0(ee.M())), ee.sm_mbf;
          }
          toObject(e = !1) {
            return ee.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(ee.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(ee.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              k = new ee();
            return ee.deserializeBinaryFromReader(k, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(ee.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(ee.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              ee.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAppContentDescriptors_GetWorkingSurvey_Request";
          }
        }
        class Q extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Q.prototype.surveyid || r.Sg(Q.M()),
              u.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Q.sm_m ||
                (Q.sm_m = {
                  proto: Q,
                  fields: {
                    surveyid: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    survey: { n: 2, c: X },
                  },
                }),
              Q.sm_m
            );
          }
          static MBF() {
            return Q.sm_mbf || (Q.sm_mbf = r.w0(Q.M())), Q.sm_mbf;
          }
          toObject(e = !1) {
            return Q.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(Q.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(Q.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              k = new Q();
            return Q.deserializeBinaryFromReader(k, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(Q.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(Q.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Q.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAppContentDescriptors_GetSurvey_Response";
          }
        }
        var Pe;
        ((j) => {
          function e(k, ue, me) {
            return k.SendMsg(
              "AppContentDescriptor.GetActiveSurvey#1",
              (0, b.I8)(q, ue, me),
              Q,
              { bConstMethod: !0, ePrivilege: 7 },
            );
          }
          j.GetActiveSurvey = e;
          function s(k, ue, me) {
            return k.SendMsg(
              "AppContentDescriptor.GetWorkingSurvey#1",
              (0, b.I8)(ee, ue, me),
              Q,
              { bConstMethod: !0, ePrivilege: 7 },
            );
          }
          j.GetWorkingSurvey = s;
        })(Pe || (Pe = {}));
      },
      69041: (ie) => {
        ie.exports = {
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
      73406: (ie) => {
        ie.exports = {
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
      16180: (ie) => {
        ie.exports = {
          Option: "_3a3fNdwhCItYEc1SsUNP",
          Disabled: "_21NiFCkZFlTZ8WrrrxX0BX",
          RadioCircle: "_13ZbEe1M2PJ-21o9RTar64",
        };
      },
    },
  ]);
})();
