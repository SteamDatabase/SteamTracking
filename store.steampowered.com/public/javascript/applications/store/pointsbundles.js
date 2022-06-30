/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [101],
  {
    "3xXb": function (e, n, t) {
      e.exports = {
        Discount: "bundle_Discount_3f4n8",
        Shell: "bundle_Shell_2Zfec",
        ShellScrollParent: "bundle_ShellScrollParent_1Qkju",
        ShellHeader: "bundle_ShellHeader_kOC36",
        ShellHeaderBrandLink: "bundle_ShellHeaderBrandLink_O1wfr",
        PointsContainer: "bundle_PointsContainer_3fuIW",
        AppFilterContainer: "bundle_AppFilterContainer_2h5QB",
        HeaderVerticalDivider: "bundle_HeaderVerticalDivider_1FaU7",
        AppFilterLabel: "bundle_AppFilterLabel_14xpP",
        AppFilterIconContainer: "bundle_AppFilterIconContainer_3Krp-",
        AppFilterIcon: "bundle_AppFilterIcon_HCNAj",
        FilterInUse: "bundle_FilterInUse_20mcP",
        RewardsPointsIcon: "bundle_RewardsPointsIcon_2fLKs",
        YourBalanceLabel: "bundle_YourBalanceLabel_3Lsyi",
        RewardsPointsCount: "bundle_RewardsPointsCount_1XPtb",
        ShellHeaderBrandName: "bundle_ShellHeaderBrandName_2fDre",
        SvgOverrideColor: "bundle_SvgOverrideColor_29EuR",
        ItemHoverZIndex: "bundle_ItemHoverZIndex_3gUO3",
        ActionButton: "bundle_ActionButton_1YLE2",
        Icon: "bundle_Icon_1QoZD",
        PrimaryRedeemButton: "bundle_PrimaryRedeemButton_2nL0c",
        CheckmarkCircle: "bundle_CheckmarkCircle_2UpnB",
        AlreadyOwned: "bundle_AlreadyOwned_3KGvD",
        AlreadyOwnedText: "bundle_AlreadyOwnedText_1E4uc",
      };
    },
    f4w8: function (e, n, t) {
      "use strict";
      t.r(n);
      var l = t("q1tI"),
        a = t.n(l),
        r = t("EC67"),
        d = t("1fPh"),
        c = (t("1udA"), t("TyAF")),
        o = t("prdU"),
        i = t("nXE5"),
        u = t("+j4l"),
        s = t("RV7a"),
        b = t("GXif"),
        _ = t("2Ido"),
        m = t("+9fn"),
        p = t("t0PL"),
        f = t("ehaW"),
        O = t("3xXb"),
        w = t("GbHM"),
        C = t("cOvF");
      n.default = Object(c.a)((e) => {
        const { bundleid: n } = e.match.params,
          t = parseInt(n),
          l = a.a.createElement(r.a, { to: d.b.LoyaltyStore() });
        if (isNaN(t)) return l;
        const [c] = o.b.Get().GetRewardDefinitions(t);
        return c
          ? 5 !== c.type && 6 !== c.type
            ? l
            : a.a.createElement(h, { bundle: c })
          : null;
      });
      const h = Object(c.a)((e) => {
          const { bundle: n } = e,
            t = o.b.Get().GetBundleOfferForUser(n);
          return a.a.createElement(
            i.e,
            null,
            a.a.createElement(
              s.a,
              {
                paddingY: "xlarge",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              },
              a.a.createElement(I, { bundle: n, offer: t }),
              0 === t.point_cost
                ? a.a.createElement(E, { className: O.PrimaryRedeemButton })
                : a.a.createElement(u.a, {
                    cost: t.point_cost,
                    discount: t.discount,
                    originalCost: t.original_point_cost,
                    className: O.PrimaryRedeemButton,
                    onClick: (e) => Object(u.e)(e, n),
                  }),
              a.a.createElement(B, { offer: t })
            )
          );
        }),
        I = Object(c.a)(({ bundle: e, offer: n }) => {
          const t = Object(_.b)(e),
            l = Object(b.g)("#RewardBundle_OfferDescription", n.discount);
          return a.a.createElement(
            s.a,
            { paddingBottom: "xlarge" },
            a.a.createElement(i.f, { title: t, subtitle: l })
          );
        }),
        E = ({ className: e }) =>
          a.a.createElement(
            "div",
            { className: Object(w.a)(e, O.AlreadyOwned) },
            a.a.createElement(C.j, { className: O.CheckmarkCircle }),
            a.a.createElement(
              "span",
              { className: O.AlreadyOwnedText },
              Object(b.g)("#Redeem_BundleItemOwned")
            )
          ),
        B = Object(c.a)((e) => {
          const { offer: n } = e;
          return a.a.createElement(
            m.b,
            { title: Object(b.g)("#RewardBundle_BundleContentsSection_Title") },
            a.a.createElement(p.a, {
              getItems: (e, t) => ({
                rewards: n.items.slice(e, t),
                bLoadingMore: !1,
                cTotalMatching: n.items.length,
                cMaxToReturn: n.items.length,
              }),
              renderItem: (e) =>
                a.a.createElement(f.e, {
                  key: e.defid,
                  definition: e,
                  purchaseable: !1,
                  onClick: (n) => Object(u.b)(n, e),
                }),
            })
          );
        });
    },
  },
]);
