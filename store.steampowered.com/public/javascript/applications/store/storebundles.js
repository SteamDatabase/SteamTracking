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
      n.d(t, { p: () => i });
      var r = n(90626),
        l = n(62792),
        a = n(55263),
        s = n(45359),
        u = n(18654),
        c = n.n(u);
      function i(e) {
        const { id: t, type: n } = e,
          [u] = (0, a.G6)(t, (0, l.SW)(n), {});
        return r.createElement(
          "div",
          { className: c().SaleItemBrowserRow },
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
      n.r(t), n.d(t, { default: () => g });
      var r,
        l = n(90626),
        a = n(57876),
        s = n(55263),
        u = n(84811),
        c = n(54847),
        i = n(37076),
        d = n(32630),
        o = n(52038),
        m = n(61859),
        p = n(31960),
        B = n.n(p),
        S = n(24484),
        _ = n(82097),
        G = n(63090),
        I = n(30894),
        b = n(94095);
      function g(e) {
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
            l.createElement(u.tH, null, l.createElement(E, { storeItem: r })),
          )
        );
      }
      function E(e) {
        const { storeItem: t } = e,
          [n, u] = (0, l.useState)(r.k_BundleSort_Price),
          c = (function (e) {
            const t = (0, l.useMemo)(
                () => (0, S.Tc)("bundle_list", "application_config"),
                [],
              ),
              [n] = (0, I.L2)(),
              u = (0, s.MS)(t, a.Xh),
              c = (0, l.useMemo)(() => {
                if (3 != u && 2 != u) return null;
                {
                  let n = t;
                  switch (
                    (2 == u &&
                      (n = t.filter((e) => {
                        const t = _.A.Get().GetBundle(e);
                        return t?.BIsVisible();
                      })),
                    e)
                  ) {
                    case r.k_BundleSort_Name:
                      return [...n].sort((e, t) => {
                        const n = _.A.Get().GetBundle(e),
                          r = _.A.Get().GetBundle(t);
                        return n.GetName().localeCompare(r.GetName());
                      });
                    case r.k_BundleSort_Price:
                      return [...n].sort((e, t) => {
                        const n = _.A.Get().GetBundle(e),
                          r = _.A.Get().GetBundle(t);
                        return (
                          n.GetBestPurchasePriceInCents() -
                          r.GetBestPurchasePriceInCents()
                        );
                      });
                    default:
                      return n;
                  }
                }
              }, [e, u, t]);
            if (c && !n) {
              const e = new Array(),
                t = new Array(),
                n = new Array();
              return (
                c.forEach((r) => {
                  const l = _.A.Get().GetBundle(r);
                  l.GetIncludedAppIDs().some((e) => !I.Fm.Get().BOwnsApp(e))
                    ? l.GetBestPurchaseOption().must_purchase_as_set
                      ? n.push(r)
                      : t.push(r)
                    : e.push(r);
                }),
                {
                  rgOwnedBundleIDList: e,
                  rgCompleteTheSetBundleIDList: t,
                  rgMustPurchaseTogetherBundleIDList: n,
                }
              );
            }
            return null;
          })(n);
        if (!t || !c) return null;
        const i =
          t.GetAssets().GetLibraryHeroURL_2x() ??
          t.GetAssets().GetLibraryHeroURL() ??
          t.GetAssets().GetRawPageBackgroundURL();
        return l.createElement(
          "div",
          { className: B().Ctn },
          l.createElement(
            "div",
            { className: B().BackgroundImageCtn },
            l.createElement("img", { src: i }),
          ),
          l.createElement(
            "div",
            { className: B().BackgroundImageBlurCtn },
            l.createElement("img", { src: i }),
          ),
          l.createElement(
            "div",
            { className: (0, o.A)("page_content") },
            l.createElement(w, { storeItem: t, eBundleSort: n, fnSetSort: u }),
            c.rgCompleteTheSetBundleIDList?.length > 0 &&
              l.createElement(
                "div",
                { className: B().BundlesInLibrary },
                l.createElement(
                  "div",
                  { className: B().Title },
                  (0, m.we)("#BundleList_CompleteTheSet"),
                ),
                l.createElement(
                  "div",
                  { className: B().Subtitle },
                  (0, m.we)("#BundleList_CompleteTheSetSubtitle"),
                ),
                l.createElement(L, {
                  appId: t.GetAppID(),
                  rgBundleIDs: c.rgCompleteTheSetBundleIDList,
                }),
              ),
            c.rgMustPurchaseTogetherBundleIDList?.length > 0 &&
              l.createElement(
                "div",
                { className: B().BundlesInLibrary },
                l.createElement(
                  "div",
                  { className: B().Title },
                  (0, m.we)("#BundleList_MustPurchaseAsSet"),
                ),
                l.createElement(
                  "div",
                  { className: B().Subtitle },
                  (0, m.we)("#BundleList_MustPurchaseAsSetSubtitle"),
                ),
                l.createElement(L, {
                  appId: t.GetAppID(),
                  rgBundleIDs: c.rgMustPurchaseTogetherBundleIDList,
                }),
              ),
            c.rgOwnedBundleIDList?.length > 0 &&
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
                l.createElement(L, {
                  appId: t.GetAppID(),
                  rgBundleIDs: c.rgOwnedBundleIDList,
                }),
              ),
          ),
        );
      }
      function L(e) {
        const { rgBundleIDs: t, appId: n } = e;
        return l.createElement(
          "div",
          { className: B().BundlesList },
          t.map((e) =>
            l.createElement(h, {
              key: "bundleDisplay_" + e,
              bundleId: e,
              appId: n,
            }),
          ),
        );
      }
      function h(e) {
        const { bundleId: t, appId: n } = e;
        return l.createElement(
          "div",
          { className: B().BundleRow },
          l.createElement(c.p, {
            id: t,
            type: "bundle",
            bShowDeckCompatibilityDialog: !1,
          }),
        );
      }
      function w(e) {
        const { storeItem: t, eBundleSort: n, fnSetSort: a } = e;
        return l.createElement(
          "div",
          { className: B().AppHeader },
          l.createElement(
            i.u,
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
            l.createElement(b.kb, { storeItem: t }),
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
                  data: r.k_BundleSort_Name,
                  label: (0, m.we)("#BundleList_SortBy_Name"),
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
          (e[(e.k_BundleSort_Popular = 3)] = "k_BundleSort_Popular");
      })(r || (r = {}));
    },
  },
]);
