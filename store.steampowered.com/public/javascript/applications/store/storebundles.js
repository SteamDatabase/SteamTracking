/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [2469],
  {
    31960: (e) => {
      e.exports = {
        Ctn: "_2P-P0Ga6blE6d10oVWleHs",
        BackgroundImageCtn: "_3LnsTSsd5CMsXXdHZVeG9S",
        BackgroundImageBlurCtn: "_1j9oLZ84RZG44SAUdeGBbz",
        AppHeader: "EBiK_PYat7W-Wk_zJcuFq",
        TitleGroup: "_39vGMX3e1UOPPRyvi30wk7",
        SubTitle: "_3o2oMRRFqgwPf42yjGG0qp",
        Title: "_3_R7HvUJcngi4n-gCRYFkN",
        SortOptions: "_1g7L59QP-3lRDGA0owdeWA",
        BundlesList: "qidGiQP0S4nK0GXkYOxbO",
        BundleRow: "_2-2kqczzmj6KtNObGLj6x3",
        BundlesInLibrary: "T_3MrEHN9bFK4I4FQqDC8",
        Subtitle: "_3Bvm26qCLKO-h1yHVlFGsS",
      };
    },
    54847: (e, t, n) => {
      "use strict";
      n.d(t, { p: () => c });
      var r = n(90626),
        l = n(62792),
        a = n(55263),
        s = n(45359),
        u = n(18654),
        o = n.n(u);
      function c(e) {
        const { id: t, type: n } = e,
          [u] = (0, a.G6)(t, (0, l.SW)(n), {});
        return r.createElement(
          "div",
          { className: o().SaleItemBrowserRow },
          r.createElement(s.pb, {
            ...e,
            bLoadShortDescription: !0,
            bShowReviewSummary: !0,
            bShowDemoButton: e.bShowDemoButton || 1 == u?.GetAppType(),
            bPreferDemoStorePage: e.bPreferDemoStorePage,
          }),
        );
      }
    },
    54393: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => I });
      var r,
        l = n(90626),
        a = n(57876),
        s = n(55263),
        u = n(84811),
        o = n(54847),
        c = n(37076),
        d = n(32630),
        i = n(52038),
        m = n(61859),
        p = n(31960),
        B = n.n(p),
        _ = n(24484),
        S = n(82097),
        G = n(63090),
        b = n(30894);
      function I(e) {
        const {
            match: {
              params: { appid: t },
            },
          } = e,
          n = Number.parseInt(t),
          [r] = (0, s.t7)(n, a.Xh);
        return (
          (0, l.useEffect)(() => {
            if (r) {
              const e = r.GetStorePageURL().replace("/app/", "/bundlelist/");
              e != window.location.href &&
                window.history.replaceState({}, "", e);
            }
          }, [r]),
          l.createElement(
            d.Ay,
            { method: "bundlelist" },
            l.createElement(u.tH, null, l.createElement(P, { storeItem: r })),
          )
        );
      }
      function P(e) {
        const { storeItem: t } = e,
          [n, u] = (0, l.useState)(r.k_BundleSort_Popular),
          o = (function (e) {
            const t = (0, l.useMemo)(
                () => (0, _.Tc)("bundle_list", "application_config"),
                [],
              ),
              [n] = (0, b.L2)(),
              u = (0, s.MS)(t, a.Xh),
              o = (0, l.useMemo)(() => {
                if (3 != u) return null;
                switch (e) {
                  case r.k_BundleSort_Name:
                    return [...t].sort((e, t) => {
                      const n = S.A.Get().GetBundle(e),
                        r = S.A.Get().GetBundle(t);
                      return n.GetName().localeCompare(r.GetName());
                    });
                  case r.k_BundleSort_Price:
                    return [...t].sort((e, t) => {
                      const n = S.A.Get().GetBundle(e),
                        r = S.A.Get().GetBundle(t);
                      return (
                        n.GetBestPurchasePriceInCents() -
                        r.GetBestPurchasePriceInCents()
                      );
                    });
                  case r.k_BundleSort_Discount:
                    return [...t].sort((e, t) => {
                      const n = S.A.Get().GetBundle(e),
                        r = S.A.Get().GetBundle(t);
                      return n.GetBestPurchaseOption().bundle_discount_pct ==
                        r.GetBestPurchaseOption().bundle_discount_pct
                        ? n.GetBestPurchasePriceInCents() -
                            r.GetBestPurchasePriceInCents()
                        : n.GetBestPurchaseOption().bundle_discount_pct -
                            r.GetBestPurchaseOption().bundle_discount_pct;
                    });
                  default:
                    return t;
                }
              }, [e, u, t]);
            if (o && !n) {
              const e = new Array(),
                t = new Array();
              return (
                o.forEach((n) => {
                  S.A.Get()
                    .GetBundle(n)
                    .GetIncludedAppIDs()
                    .some((e) => !b.Fm.Get().BOwnsApp(e))
                    ? t.push(n)
                    : e.push(n);
                }),
                { rgOwnedBundleIDList: e, rgBundleIDList: t }
              );
            }
            return null;
          })(n);
        if (!t || !o) return null;
        const c =
          t.GetAssets().GetLibraryHeroURL_2x() ??
          t.GetAssets().GetLibraryHeroURL();
        return l.createElement(
          "div",
          { className: B().Ctn },
          l.createElement(
            "div",
            { className: B().BackgroundImageCtn },
            l.createElement("img", { src: c }),
          ),
          l.createElement(
            "div",
            { className: B().BackgroundImageBlurCtn },
            l.createElement("img", { src: c }),
          ),
          l.createElement(
            "div",
            { className: (0, i.A)("page_content") },
            l.createElement(L, { storeItem: t, eBundleSort: n, fnSetSort: u }),
            l.createElement(w, {
              appId: t.GetAppID(),
              rgBundleIDs: o.rgBundleIDList,
            }),
            o.rgOwnedBundleIDList?.length > 0 &&
              l.createElement(
                "div",
                { className: B().BundlesInLibrary },
                l.createElement(
                  "div",
                  { className: B().Title },
                  (0, m.we)("#BundleList_AllInLibrary"),
                ),
                l.createElement(
                  "div",
                  { className: B().Subtitle },
                  (0, m.we)("#BundleList_AllInLibrarySubtitle"),
                ),
                l.createElement(w, {
                  appId: t.GetAppID(),
                  rgBundleIDs: o.rgOwnedBundleIDList,
                }),
              ),
          ),
        );
      }
      function w(e) {
        const { rgBundleIDs: t, appId: n } = e;
        return l.createElement(
          "div",
          { className: B().BundlesList },
          t.map((e) =>
            l.createElement(E, {
              key: "bundleDisplay_" + e,
              bundleId: e,
              appId: n,
            }),
          ),
        );
      }
      function E(e) {
        const { bundleId: t, appId: n } = e;
        return l.createElement(
          "div",
          { className: B().BundleRow },
          l.createElement(o.p, {
            id: t,
            type: "bundle",
            bShowDeckCompatibilityDialog: !1,
          }),
        );
      }
      function L(e) {
        const { storeItem: t, eBundleSort: n, fnSetSort: a } = e;
        return l.createElement(
          "div",
          { className: B().AppHeader },
          l.createElement(
            c.u,
            { type: "app", id: t.GetAppID(), hoverClassName: B().PreviewItem },
            l.createElement("img", { src: t.GetAssets().GetHeaderURL() }),
          ),
          l.createElement(
            "div",
            { className: B().TitleGroup },
            l.createElement(
              "div",
              { className: B().SubTitle },
              (0, m.we)("#BundleList_SubTitle"),
            ),
            l.createElement("div", { className: B().Title }, t.GetName()),
          ),
          l.createElement(
            "div",
            { className: B().SortOptions },
            l.createElement(G.ZU, {
              selectedOption: n,
              renderButtonValue: (e) =>
                l.createElement(
                  "div",
                  null,
                  (0, m.we)("#BundleList_SortBy"),
                  " ",
                  e,
                ),
              rgOptions: [
                {
                  data: r.k_BundleSort_Discount,
                  label: (0, m.we)("#BundleList_SortBy_Discount"),
                },
                {
                  data: r.k_BundleSort_Name,
                  label: (0, m.we)("#BundleList_SortBy_Name"),
                },
                {
                  data: r.k_BundleSort_Popular,
                  label: (0, m.we)("#BundleList_SortBy_Popular"),
                },
                {
                  data: r.k_BundleSort_Price,
                  label: (0, m.we)("#BundleList_SortBy_Price"),
                },
              ],
              strDefaultLabel: (0, m.we)("#BundleList_SortBy"),
              onChange: ({ data: e }) => a(e),
            }),
          ),
        );
      }
      !(function (e) {
        (e[(e.k_BundleSort_Name = 1)] = "k_BundleSort_Name"),
          (e[(e.k_BundleSort_Price = 2)] = "k_BundleSort_Price"),
          (e[(e.k_BundleSort_Discount = 3)] = "k_BundleSort_Discount"),
          (e[(e.k_BundleSort_Popular = 4)] = "k_BundleSort_Popular");
      })(r || (r = {}));
    },
  },
]);
