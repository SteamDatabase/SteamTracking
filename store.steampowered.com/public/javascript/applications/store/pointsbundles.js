/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [3413],
  {
    88586: (e) => {
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
    99332: (e, n, t) => {
      "use strict";
      t.r(n), t.d(n, { default: () => B });
      var l = t(67294),
        r = t(78587),
        a = t(9355),
        d = (t(14974), t(29323)),
        i = t(25251),
        o = t(25381),
        c = t(52286),
        u = t(41368),
        s = t(41311),
        _ = t(23327),
        m = t(49533),
        b = t(75057),
        p = t(48828),
        f = t(88586),
        C = t(7573),
        h = t(46347);
      const B = (0, d.Pi)((e) => {
          const { bundleid: n } = e.match.params,
            t = parseInt(n),
            d = l.createElement(r.l_, { to: a.Z.LoyaltyStore() });
          if (isNaN(t)) return d;
          const [o] = i.Vb.Get().GetRewardDefinitions(t);
          return o
            ? 5 !== o.type && 6 !== o.type
              ? d
              : l.createElement(I, { bundle: o })
            : null;
        }),
        I = (0, d.Pi)((e) => {
          const { bundle: n } = e,
            t = i.Vb.Get().GetBundleOfferForUser(n);
          return l.createElement(
            o.OC,
            null,
            l.createElement(
              u.xu,
              {
                paddingY: "xlarge",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              },
              l.createElement(E, { bundle: n, offer: t }),
              0 === t.point_cost
                ? l.createElement(P, { className: f.PrimaryRedeemButton })
                : l.createElement(c.D9, {
                    cost: t.point_cost,
                    discount: t.discount,
                    originalCost: t.original_point_cost,
                    className: f.PrimaryRedeemButton,
                    onClick: (e) => (0, c.s1)(e, n),
                  }),
              l.createElement(w, { offer: t })
            )
          );
        }),
        E = (0, d.Pi)(({ bundle: e, offer: n }) => {
          const t = (0, _.h)(e),
            r = (0, s.Xx)("#RewardBundle_OfferDescription", n.discount);
          return l.createElement(
            u.xu,
            { paddingBottom: "xlarge" },
            l.createElement(o._f, { title: t, subtitle: r })
          );
        }),
        P = ({ className: e }) =>
          l.createElement(
            "div",
            { className: (0, C.Z)(e, f.AlreadyOwned) },
            l.createElement(h.Zg, { className: f.CheckmarkCircle }),
            l.createElement(
              "span",
              { className: f.AlreadyOwnedText },
              (0, s.Xx)("#Redeem_BundleItemOwned")
            )
          ),
        w = (0, d.Pi)((e) => {
          const { offer: n } = e;
          return l.createElement(
            m.iS,
            { title: (0, s.Xx)("#RewardBundle_BundleContentsSection_Title") },
            l.createElement(b.c, {
              getItems: (e, t) => ({
                rewards: n.items.slice(e, t),
                bLoadingMore: !1,
                cTotalMatching: n.items.length,
                cMaxToReturn: n.items.length,
              }),
              renderItem: (e) =>
                l.createElement(p.h_, {
                  key: e.defid,
                  definition: e,
                  purchaseable: !1,
                  onClick: (n) => (0, c.u4)(n, e),
                }),
            })
          );
        });
    },
  },
]);
