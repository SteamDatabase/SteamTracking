/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [42],
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
        l = t.n(r),
        i = t("Ty5D"),
        d = t("1fPh"),
        a = t("TyAF"),
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
        h = t("exH9"),
        w = t("cOvF");
      n.default = Object(a.a)(function (e) {
        var n = e.match.params.bundleid,
          t = parseInt(n),
          r = l.a.createElement(i.a, { to: d.b.LoyaltyStore() });
        if (isNaN(t)) return r;
        var a = c.b.Get().GetRewardDefinitions(t)[0];
        return a
          ? 5 !== a.type && 6 !== a.type
            ? r
            : l.a.createElement(C, { bundle: a })
          : null;
      });
      var C = Object(a.a)(function (e) {
          var n = e.bundle,
            t = c.b.Get().GetBundleOfferForUser(n);
          return l.a.createElement(
            o.e,
            null,
            l.a.createElement(
              s.a,
              {
                paddingY: "xlarge",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              },
              l.a.createElement(I, { bundle: n, offer: t }),
              0 === t.point_cost
                ? l.a.createElement(B, { className: O.PrimaryRedeemButton })
                : l.a.createElement(u.a, {
                    cost: t.point_cost,
                    discount: t.discount,
                    originalCost: t.original_point_cost,
                    className: O.PrimaryRedeemButton,
                    onClick: function (e) {
                      return Object(u.e)(e, n);
                    },
                  }),
              l.a.createElement(E, { offer: t })
            )
          );
        }),
        I = Object(a.a)(function (e) {
          var n = e.bundle,
            t = e.offer,
            r = Object(_.b)(n),
            a = Object(b.f)("#RewardBundle_OfferDescription", t.discount);
          return l.a.createElement(
            s.a,
            { paddingBottom: "xlarge" },
            l.a.createElement(o.f, { title: r, subtitle: a })
          );
        }),
        B = function (e) {
          var n = e.className;
          return l.a.createElement(
            "div",
            { className: Object(h.a)(n, O.AlreadyOwned) },
            l.a.createElement(w.h, { className: O.CheckmarkCircle }),
            l.a.createElement(
              "span",
              { className: O.AlreadyOwnedText },
              Object(b.f)("#Redeem_BundleItemOwned")
            )
          );
        },
        E = Object(a.a)(function (e) {
          var t = e.offer;
          return l.a.createElement(
            m.b,
            { title: Object(b.f)("#RewardBundle_BundleContentsSection_Title") },
            l.a.createElement(f.a, {
              getItems: function (e, n) {
                return {
                  rewards: t.items.slice(e, n),
                  bLoadingMore: !1,
                  cTotalMatching: t.items.length,
                  cMaxToReturn: t.items.length,
                };
              },
              renderItem: function (n) {
                return l.a.createElement(p.e, {
                  key: n.defid,
                  definition: n,
                  purchaseable: !1,
                  onClick: function (e) {
                    return Object(u.b)(e, n);
                  },
                });
              },
            })
          );
        });
    },
  },
]);
