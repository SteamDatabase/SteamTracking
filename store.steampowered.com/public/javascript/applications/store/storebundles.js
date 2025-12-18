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
    54847: (e, t, r) => {
      "use strict";
      r.d(t, { p: () => c });
      var n = r(90626),
        l = r(62792),
        a = r(55263),
        s = r(45359),
        u = r(18654),
        i = r.n(u);
      function c(e) {
        const { id: t, type: r } = e,
          [u] = (0, a.G6)(t, (0, l.SW)(r), {});
        return n.createElement(
          "div",
          { className: i().SaleItemBrowserRow },
          n.createElement(s.pb, {
            ...e,
            bLoadShortDescription: !0,
            bShowReviewSummary: !0,
            bShowDemoButton: e.bShowDemoButton || 1 == u?.GetAppType(),
            bPreferDemoStorePage: e.bPreferDemoStorePage,
          }),
        );
      }
    },
    54393: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => E });
      var n,
        l = r(90626),
        a = r(57876),
        s = r(55263),
        u = r(84811),
        i = r(54847),
        c = r(37076),
        d = r(32630),
        o = r(52038),
        m = r(61859),
        p = r(31960),
        B = r.n(p),
        S = r(24484),
        _ = r(82097),
        G = r(63090),
        I = r(30894),
        b = r(94095),
        g = r(22797);
      function E(e) {
        const {
            match: {
              params: { appid: t },
            },
          } = e,
          r = Number.parseInt(t),
          [n] = (0, s.t7)(r, a.Xh);
        return (
          (0, l.useEffect)(() => {
            if (n) {
              const e = n.GetStorePageURL().replace("/app/", "/bundlelist/");
              e != window.location.href &&
                window.history.replaceState({}, "", e);
            }
          }, [n]),
          l.createElement(
            d.Ay,
            { method: "bundlelist" },
            l.createElement(u.tH, null, l.createElement(L, { storeItem: n })),
          )
        );
      }
      function L(e) {
        const { storeItem: t } = e,
          [r, u] = (0, l.useState)(n.k_BundleSort_Price),
          i = (function (e) {
            const t = (0, l.useMemo)(
                () => (0, S.Tc)("bundle_list", "application_config"),
                [],
              ),
              [r] = (0, I.L2)(),
              u = (0, s.MS)(t, a.Xh),
              i = (0, l.useMemo)(() => {
                if (3 != u && 2 != u) return null;
                {
                  let r = t;
                  switch (
                    (2 == u &&
                      (r = t.filter((e) => {
                        const t = _.A.Get().GetBundle(e);
                        return t?.BIsVisible();
                      })),
                    e)
                  ) {
                    case n.k_BundleSort_Name:
                      return [...r].sort((e, t) => {
                        const r = _.A.Get().GetBundle(e),
                          n = _.A.Get().GetBundle(t);
                        return r.GetName().localeCompare(n.GetName());
                      });
                    case n.k_BundleSort_Price:
                      return [...r].sort((e, t) => {
                        const r = _.A.Get().GetBundle(e),
                          n = _.A.Get().GetBundle(t);
                        return (
                          r.GetBestPurchasePriceInCents() -
                          n.GetBestPurchasePriceInCents()
                        );
                      });
                    default:
                      return r;
                  }
                }
              }, [e, u, t]);
            if (i && !r) {
              const e = new Array(),
                t = new Array(),
                r = new Array();
              return (
                i.forEach((n) => {
                  const l = _.A.Get().GetBundle(n);
                  l.GetIncludedAppIDs().some((e) => !I.Fm.Get().BOwnsApp(e))
                    ? l.GetBestPurchaseOption().must_purchase_as_set
                      ? r.push(n)
                      : t.push(n)
                    : e.push(n);
                }),
                {
                  rgOwnedBundleIDList: e,
                  rgCompleteTheSetBundleIDList: t,
                  rgMustPurchaseTogetherBundleIDList: r,
                }
              );
            }
            return null;
          })(r);
        if (!t || !i)
          return l.createElement(g.t, {
            string: (0, m.we)("#Loading"),
            position: "center",
          });
        const c =
          t.GetAssets().GetLibraryHeroURL_2x() ??
          t.GetAssets().GetLibraryHeroURL() ??
          t.GetAssets().GetRawPageBackgroundURL();
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
            { className: (0, o.A)("page_content") },
            l.createElement(N, { storeItem: t, eBundleSort: r, fnSetSort: u }),
            i.rgCompleteTheSetBundleIDList?.length > 0 &&
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
                l.createElement(h, {
                  appId: t.GetAppID(),
                  rgBundleIDs: i.rgCompleteTheSetBundleIDList,
                }),
              ),
            i.rgMustPurchaseTogetherBundleIDList?.length > 0 &&
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
                l.createElement(h, {
                  appId: t.GetAppID(),
                  rgBundleIDs: i.rgMustPurchaseTogetherBundleIDList,
                }),
              ),
            i.rgOwnedBundleIDList?.length > 0 &&
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
                l.createElement(h, {
                  appId: t.GetAppID(),
                  rgBundleIDs: i.rgOwnedBundleIDList,
                }),
              ),
          ),
        );
      }
      function h(e) {
        const { rgBundleIDs: t, appId: r } = e;
        return l.createElement(
          "div",
          { className: B().BundlesList },
          t.map((e) =>
            l.createElement(w, {
              key: "bundleDisplay_" + e,
              bundleId: e,
              appId: r,
            }),
          ),
        );
      }
      function w(e) {
        const { bundleId: t, appId: r } = e;
        return l.createElement(
          "div",
          { className: B().BundleRow },
          l.createElement(i.p, {
            id: t,
            type: "bundle",
            bShowDeckCompatibilityDialog: !1,
            bPreferAssetWithoutOverride: !1,
          }),
        );
      }
      function N(e) {
        const { storeItem: t, eBundleSort: r, fnSetSort: a } = e;
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
            l.createElement(b.kb, { storeItem: t }),
          ),
          l.createElement(
            "div",
            { className: B().SortOptions },
            l.createElement(G.ZU, {
              selectedOption: r,
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
                  data: n.k_BundleSort_Name,
                  label: (0, m.we)("#BundleList_SortBy_Name"),
                },
                {
                  data: n.k_BundleSort_Price,
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
      })(n || (n = {}));
    },
  },
]);
