/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [41],
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
      var r = t("q1tI"),
        a = t.n(r),
        l = t("Ty5D"),
        i = t("1fPh"),
        d = t("TyAF"),
        c = t("prdU"),
        o = t("nXE5"),
        u = t("+j4l"),
        s = t("RV7a"),
        b = t("TLQK"),
        _ = t("2Ido"),
        m = t("+9fn"),
        f = t("t0PL"),
        p = t("ehaW"),
        O = t("3xXb"),
        w = t("exH9"),
        h = t("cOvF");
      n.default = Object(d.a)(function (e) {
        var n = e.match.params.bundleid,
          t = parseInt(n),
          r = a.a.createElement(l.a, { to: i.b.LoyaltyStore() });
        if (isNaN(t)) return r;
        var d = c.b.Get().GetRewardDefinitions(t)[0];
        return d
          ? 5 !== d.type && 6 !== d.type
            ? r
            : a.a.createElement(C, { bundle: d })
          : null;
      });
      var C = Object(d.a)(function (e) {
          var n = e.bundle,
            t = c.b.Get().GetBundleOfferForUser(n);
          return a.a.createElement(
            o.e,
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
                ? a.a.createElement(B, { className: O.PrimaryRedeemButton })
                : a.a.createElement(u.a, {
                    cost: t.point_cost,
                    discount: t.discount,
                    originalCost: t.original_point_cost,
                    className: O.PrimaryRedeemButton,
                    onClick: function (e) {
                      return Object(u.e)(e, n);
                    },
                  }),
              a.a.createElement(E, { offer: t })
            )
          );
        }),
        I = Object(d.a)(function (e) {
          var n = e.bundle,
            t = e.offer,
            r = Object(_.b)(n),
            l = Object(b.f)("#RewardBundle_OfferDescription", t.discount);
          return a.a.createElement(
            s.a,
            { paddingBottom: "xlarge" },
            a.a.createElement(o.f, { title: r, subtitle: l })
          );
        }),
        B = function (e) {
          var n = e.className;
          return a.a.createElement(
            "div",
            { className: Object(w.a)(n, O.AlreadyOwned) },
            a.a.createElement(h.i, { className: O.CheckmarkCircle }),
            a.a.createElement(
              "span",
              { className: O.AlreadyOwnedText },
              Object(b.f)("#Redeem_BundleItemOwned")
            )
          );
        },
        E = Object(d.a)(function (e) {
          var n = e.offer;
          return a.a.createElement(
            m.b,
            { title: Object(b.f)("#RewardBundle_BundleContentsSection_Title") },
            a.a.createElement(f.a, {
              getItems: function (e, t) {
                return {
                  rewards: n.items.slice(e, t),
                  bLoadingMore: !1,
                  cTotalMatching: n.items.length,
                  cMaxToReturn: n.items.length,
                };
              },
              renderItem: function (e) {
                return a.a.createElement(p.e, {
                  key: e.defid,
                  definition: e,
                  purchaseable: !1,
                  onClick: function (n) {
                    return Object(u.b)(n, e);
                  },
                });
              },
            })
          );
        });
    },
  },
]);
