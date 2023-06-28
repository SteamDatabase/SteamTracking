/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [3413],
  {
    76653: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        Discount: "bundle_Discount_3f4n8",
        Shell: "bundle_Shell_2Zfec",
        ShellScrollParent: "bundle_ShellScrollParent_1Qkju",
        ShellHeader: "bundle_ShellHeader_kOC36",
        ShellHeaderFlex: "bundle_ShellHeaderFlex_3Bs_x",
        ShellHeaderBrandLink: "bundle_ShellHeaderBrandLink_O1wfr",
        Sparkles: "bundle_Sparkles_1HQdP",
        PointsContainer: "bundle_PointsContainer_3fuIW",
        AppFilterContainer: "bundle_AppFilterContainer_2h5QB",
        SearchTermContainer: "bundle_SearchTermContainer_1vqtw",
        AppFilterLabel: "bundle_AppFilterLabel_14xpP",
        SearchTerm: "bundle_SearchTerm_u6k6E",
        SearchIconContainer: "bundle_SearchIconContainer_OsLH8",
        SearchIcon: "bundle_SearchIcon_H8YKM",
        SearchTermClearButton: "bundle_SearchTermClearButton_3BWU2",
        SearchTermClearIcon: "bundle_SearchTermClearIcon_LCByT",
        AppFilterIconContainerNoBorder:
          "bundle_AppFilterIconContainerNoBorder_333Rt",
        AppFilterIconContainer: "bundle_AppFilterIconContainer_3Krp-",
        AppFilterIcon: "bundle_AppFilterIcon_HCNAj",
        AppFilterIconNoBorder: "bundle_AppFilterIconNoBorder_24IGx",
        FilterInUseNoBorder: "bundle_FilterInUseNoBorder_2IhKK",
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
    98112: (e, n, r) => {
      "use strict";
      r.r(n), r.d(n, { default: () => S });
      var t = r(89526),
        l = r(59934),
        a = r(96927),
        o = r(88464),
        d = r(49587),
        c = r(8188),
        i = r(49231),
        u = r(42456),
        _ = r(14826),
        s = r(54560),
        m = r(89469),
        b = r(96758),
        p = r(42109),
        h = r(76653),
        C = r(19304),
        I = r(7323);
      const S = (0, o.Pi)((e) => {
          const { bundleid: n } = e.match.params,
            r = parseInt(n),
            o = t.createElement(l.l_, { to: a.Z.LoyaltyStore() });
          if (isNaN(r)) return o;
          const [c] = d.Vb.Get().GetRewardDefinitions(r);
          return c
            ? 5 !== c.type && 6 !== c.type
              ? o
              : t.createElement(B, { bundle: c })
            : null;
        }),
        B = (0, o.Pi)((e) => {
          const { bundle: n } = e,
            r = d.Vb.Get().GetBundleOfferForUser(n);
          return t.createElement(
            c.OC,
            null,
            t.createElement(
              u.xu,
              {
                paddingY: "xlarge",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              },
              t.createElement(f, { bundle: n, offer: r }),
              0 === r.point_cost
                ? t.createElement(x, { className: h.PrimaryRedeemButton })
                : t.createElement(i.D9, {
                    cost: r.point_cost,
                    discount: r.discount,
                    originalCost: r.original_point_cost,
                    className: h.PrimaryRedeemButton,
                    onClick: (e) => (0, i.s1)(e, n),
                  }),
              t.createElement(A, { offer: r })
            )
          );
        }),
        f = (0, o.Pi)(({ bundle: e, offer: n }) => {
          const r = (0, s.h)(e),
            l = (0, _.Xx)("#RewardBundle_OfferDescription", n.discount);
          return t.createElement(
            u.xu,
            { paddingBottom: "xlarge" },
            t.createElement(c._f, { title: r, subtitle: l })
          );
        }),
        x = ({ className: e }) =>
          t.createElement(
            "div",
            { className: (0, C.Z)(e, h.AlreadyOwned) },
            t.createElement(I.Zg, { className: h.CheckmarkCircle }),
            t.createElement(
              "span",
              { className: h.AlreadyOwnedText },
              (0, _.Xx)("#Redeem_BundleItemOwned")
            )
          ),
        A = (0, o.Pi)((e) => {
          const { offer: n } = e;
          return t.createElement(
            m.iS,
            { title: (0, _.Xx)("#RewardBundle_BundleContentsSection_Title") },
            t.createElement(b.c, {
              getItems: (e, r) => ({
                rewards: n.items.slice(e, r),
                bLoadingMore: !1,
                cTotalMatching: n.items.length,
                cMaxToReturn: n.items.length,
              }),
              renderItem: (e) =>
                t.createElement(p.h_, {
                  key: e.defid,
                  definition: e,
                  purchaseable: !1,
                  onClick: (n) => (0, i.u4)(n, e),
                }),
            })
          );
        });
    },
  },
]);
