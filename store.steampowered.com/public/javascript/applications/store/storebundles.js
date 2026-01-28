/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [2469],
  {
    15631: (e) => {
      e.exports = {
        BackgroundImageCtn: "RdHTT3nwjIakv7OZTMNqN",
        BackgroundImageBlurCtn: "_3vGQugNJFaL7JS8KhZhU2H",
      };
    },
    67082: (e) => {
      e.exports = {
        AppHeader: "cCoovA8rihPiT1IZ33Cr_",
        TitleGroup: "_2y18Xvy_xifENXqdmY3D9y",
        SubTitle: "v_Vos0f8oAH9Im5Z1b9UU",
        Title: "_3BjnxsXuurq9OScWV1Esvf",
        SortOptions: "_2F9yRZTzjsLBM4QSoRoLsN",
      };
    },
    31960: (e) => {
      e.exports = {
        Ctn: "_2P-P0Ga6blE6d10oVWleHs",
        BackgroundImageCtn: "_3LnsTSsd5CMsXXdHZVeG9S",
        BackgroundImageBlurCtn: "_1j9oLZ84RZG44SAUdeGBbz",
        BundlesList: "qidGiQP0S4nK0GXkYOxbO",
        BundleRow: "_2-2kqczzmj6KtNObGLj6x3",
        BundlesInLibrary: "T_3MrEHN9bFK4I4FQqDC8",
        Title: "_3_R7HvUJcngi4n-gCRYFkN",
        Subtitle: "_3Bvm26qCLKO-h1yHVlFGsS",
      };
    },
    54847: (e, t, n) => {
      "use strict";
      n.d(t, { p: () => c });
      var r = n(39777),
        a = n(90626),
        l = n(35380),
        s = n(41399),
        u = n(18654),
        i = n.n(u);
      function c(e) {
        const { id: t, type: n } = e,
          u = (0, l.rt)({ id: t, type: n }),
          { data: c } = (0, r.J$)(u);
        return a.createElement(
          "div",
          { className: i().SaleItemBrowserRow },
          a.createElement(s.p, {
            ...e,
            bLoadShortDescription: !0,
            bShowReviewSummary: !0,
            bShowDemoButton: e.bShowDemoButton || 1 == c?.type,
            bPreferDemoStorePage: e.bPreferDemoStorePage,
          }),
        );
      }
    },
    93135: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => T });
      var r = n(39777),
        a = n(15631),
        l = n.n(a),
        s = n(42834),
        u = n(90626);
      function i(e) {
        const { id: t } = e,
          { data: n } = (0, r.J$)(t),
          { data: a } = (0, r.lv)(t);
        if (!a || !n) return null;
        const i =
          (0, s.b0)(a, "library_hero_2x") ??
          (0, s.b0)(a, "library_hero") ??
          (0, s.b0)(a, "raw_page_background");
        return i
          ? u.createElement(
              u.Fragment,
              null,
              u.createElement(
                "div",
                { className: l().BackgroundImageCtn },
                u.createElement("img", { src: i, alt: n.name }),
              ),
              u.createElement(
                "div",
                { className: l().BackgroundImageBlurCtn },
                u.createElement("img", { src: i, alt: n.name }),
              ),
            )
          : null;
      }
      var c = n(20433),
        d = n(3740),
        o = n(35380),
        m = n(67082),
        p = n.n(m);
      function B(e) {
        const { appid: t, elPageSort: n, strPageSubTitle: a } = e,
          l = (0, o.$5)(t),
          { data: i } = (0, r.J$)(l),
          { data: m } = (0, r.lv)(l);
        return i
          ? u.createElement(
              "div",
              { className: p().AppHeader },
              u.createElement(
                c.u,
                { id: l, hoverClassName: p().PreviewItem },
                m &&
                  u.createElement("img", {
                    src: (0, s.b0)(m, "header"),
                    alt: i.name || "",
                  }),
              ),
              u.createElement(
                "div",
                { className: p().TitleGroup },
                a && u.createElement("div", { className: p().SubTitle }, a),
                u.createElement("div", { className: p().Title }, i.name || ""),
                u.createElement(d.N, { id: l }),
              ),
              Boolean(n) &&
                u.createElement("div", { className: p().SortOptions }, n),
            )
          : null;
      }
      var S,
        _ = n(57876),
        b = n(30894),
        g = n(75279),
        I = n(16021),
        h = n(55263),
        E = n(63090),
        v = n(84811),
        L = n(54847),
        N = n(32630),
        w = n(22797),
        G = n(52038),
        f = n(61859),
        P = n(24484),
        y = n(31960),
        D = n.n(y);
      function T(e) {
        const {
            match: {
              params: { appid: t },
            },
          } = e,
          n = Number.parseInt(t),
          [r] = (0, h.t7)(n, _.Xh);
        return (
          (0, u.useEffect)(() => {
            if (r) {
              const e = r.GetStorePageURL().replace("/app/", "/bundlelist/");
              e != window.location.href &&
                window.history.replaceState({}, "", e);
            }
          }, [r]),
          u.createElement(
            N.Ay,
            { method: "bundlelist" },
            u.createElement(v.tH, null, u.createElement(k, { storeItem: r })),
          )
        );
      }
      function k(e) {
        const { storeItem: t } = e,
          n = (0, g.DJ)(t),
          [r, a] = (0, u.useState)(S.k_BundleSort_Price),
          l = (function (e) {
            const t = (0, u.useMemo)(
                () => (0, P.Tc)("bundle_list", "application_config"),
                [],
              ),
              [n] = (0, b.L2)(),
              r = (0, h.MS)(t, _.Xh),
              a = (0, u.useMemo)(() => {
                if (3 != r && 2 != r) return null;
                {
                  let n = t;
                  switch (
                    (2 == r &&
                      (n = t.filter((e) => {
                        const t = I.A.Get().GetBundle(e);
                        return t?.BIsVisible();
                      })),
                    e)
                  ) {
                    case S.k_BundleSort_Name:
                      return [...n].sort((e, t) => {
                        const n = I.A.Get().GetBundle(e),
                          r = I.A.Get().GetBundle(t);
                        return n.GetName().localeCompare(r.GetName());
                      });
                    case S.k_BundleSort_Price:
                      return [...n].sort((e, t) => {
                        const n = I.A.Get().GetBundle(e),
                          r = I.A.Get().GetBundle(t);
                        return (
                          n.GetBestPurchasePriceInCents() -
                          r.GetBestPurchasePriceInCents()
                        );
                      });
                    default:
                      return n;
                  }
                }
              }, [e, r, t]);
            if (a && !n) {
              const e = new Array(),
                t = new Array(),
                n = new Array();
              return (
                a.forEach((r) => {
                  const a = I.A.Get().GetBundle(r);
                  a.GetIncludedAppIDs().some((e) => !b.Fm.Get().BOwnsApp(e))
                    ? a.GetBestPurchaseOption().must_purchase_as_set
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
          })(r);
        return t && l
          ? u.createElement(
              "div",
              { className: D().Ctn },
              u.createElement(i, { id: n }),
              u.createElement(
                "div",
                { className: (0, G.A)("page_content") },
                u.createElement(B, {
                  appid: t.GetAppID(),
                  elPageSort: u.createElement(O, {
                    eBundleSort: r,
                    fnSetSort: a,
                  }),
                  strPageSubTitle: (0, f.we)("#BundleList_SubTitle"),
                }),
                l.rgCompleteTheSetBundleIDList?.length > 0 &&
                  u.createElement(
                    "div",
                    { className: D().BundlesInLibrary },
                    u.createElement(
                      "div",
                      { className: D().Title },
                      (0, f.we)("#BundleList_CompleteTheSet"),
                    ),
                    u.createElement(
                      "div",
                      { className: D().Subtitle },
                      (0, f.we)("#BundleList_CompleteTheSetSubtitle"),
                    ),
                    u.createElement(A, {
                      appId: t.GetAppID(),
                      rgBundleIDs: l.rgCompleteTheSetBundleIDList,
                    }),
                  ),
                l.rgMustPurchaseTogetherBundleIDList?.length > 0 &&
                  u.createElement(
                    "div",
                    { className: D().BundlesInLibrary },
                    u.createElement(
                      "div",
                      { className: D().Title },
                      (0, f.we)("#BundleList_MustPurchaseAsSet"),
                    ),
                    u.createElement(
                      "div",
                      { className: D().Subtitle },
                      (0, f.we)("#BundleList_MustPurchaseAsSetSubtitle"),
                    ),
                    u.createElement(A, {
                      appId: t.GetAppID(),
                      rgBundleIDs: l.rgMustPurchaseTogetherBundleIDList,
                    }),
                  ),
                l.rgOwnedBundleIDList?.length > 0 &&
                  u.createElement(
                    "div",
                    { className: D().BundlesInLibrary },
                    u.createElement(
                      "div",
                      { className: D().Title },
                      (0, f.we)("#BundleList_AllInLibrary"),
                    ),
                    u.createElement(
                      "div",
                      { className: D().Subtitle },
                      (0, f.we)("#BundleList_AllInLibrarySubtitle"),
                    ),
                    u.createElement(A, {
                      appId: t.GetAppID(),
                      rgBundleIDs: l.rgOwnedBundleIDList,
                    }),
                  ),
              ),
            )
          : u.createElement(w.t, {
              string: (0, f.we)("#Loading"),
              position: "center",
            });
      }
      function A(e) {
        const { rgBundleIDs: t, appId: n } = e;
        return u.createElement(
          "div",
          { className: D().BundlesList },
          t.map((e) =>
            u.createElement(C, {
              key: "bundleDisplay_" + e,
              bundleId: e,
              appId: n,
            }),
          ),
        );
      }
      function C(e) {
        const { bundleId: t, appId: n } = e;
        return u.createElement(
          "div",
          { className: D().BundleRow },
          u.createElement(L.p, {
            id: t,
            type: "bundle",
            bShowDeckCompatibilityDialog: !1,
            bPreferAssetWithoutOverride: !1,
          }),
        );
      }
      function O(e) {
        const { eBundleSort: t, fnSetSort: n } = e,
          r = (0, u.useMemo)(
            () => [
              {
                data: S.k_BundleSort_Name,
                label: (0, f.we)("#BundleList_SortBy_Name"),
              },
              {
                data: S.k_BundleSort_Price,
                label: (0, f.we)("#BundleList_SortBy_Price"),
              },
            ],
            [],
          );
        return u.createElement(E.ZU, {
          selectedOption: t,
          renderButtonValue: (e) =>
            u.createElement(
              "div",
              null,
              (0, f.we)("#BundleList_SortBy"),
              " ",
              e,
            ),
          rgOptions: r,
          strDefaultLabel: (0, f.we)("#BundleList_SortBy"),
          onChange: ({ data: e }) => n(e),
        });
      }
      !(function (e) {
        (e[(e.k_BundleSort_Name = 1)] = "k_BundleSort_Name"),
          (e[(e.k_BundleSort_Price = 2)] = "k_BundleSort_Price"),
          (e[(e.k_BundleSort_Popular = 3)] = "k_BundleSort_Popular");
      })(S || (S = {}));
    },
  },
]);
