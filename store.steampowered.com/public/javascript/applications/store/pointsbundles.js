/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [3413],
  {
    99591: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        Discount: "_3f4n8BFj3ADB61_06XxXfH",
        Shell: "_2ZfecHo99JCqJlsQwW-w_T",
        ShellScrollParent: "_1Qkju8DkEDxfJrSRSvE60X",
        ShellHeader: "kOC36pdxn9Y3RbFW9Pe4k",
        ShellHeaderFlex: "_3Bs_x4ZJUDXcmcyBIijrY7",
        ShellHeaderBrandLink: "O1wfr_dIdjA0EArihdbyn",
        Sparkles: "_1HQdP65qORYG5rx4hx2j1m",
        PointsContainer: "_3fuIWWim03452DHyaDdP0a",
        AppFilterContainer: "_2h5QBrJVeUh4KtMZ-xE1yi",
        SearchTermContainer: "_1vqtwC4BfRP50KXnACBa7t",
        AppFilterLabel: "_14xpPmN_1R8YRheIU_LM0R",
        SearchTerm: "u6k6EnkqP237vIZRzHfIZ",
        SearchIconContainer: "OsLH8FDeg0Gu5lgcZAho",
        SearchIcon: "H8YKMauMXqfao1zWQMPMR",
        SearchTermClearButton: "_3BWU2EyFDdwd3j8sTorUAk",
        SearchTermClearIcon: "LCByT8rBA3AXSOG1Hl60p",
        AppFilterIconContainerNoBorder: "_333Rtc63-hZUxrX_3oQzsL",
        AppFilterIconContainer: "_3Krp-JkHE_Ec1Gsu4_CCY_",
        AppFilterIcon: "HCNAjHNKcIbUS26JKsm_v",
        AppFilterIconNoBorder: "_24IGxxPD8hJL3naggHz9qf",
        FilterInUseNoBorder: "_2IhKKvzDp31VGH6lLGna03",
        FilterInUse: "_20mcPa1PnvA0iIwBsRCGoe",
        RewardsPointsIcon: "_2fLKsupss_Tr-yX6vqskXQ",
        YourBalanceLabel: "_3LsyiFl4MYAHc9pM67d-d6",
        RewardsPointsCount: "_1XPtbpsI-RZd1JlAozJWI0",
        ShellHeaderBrandName: "_2fDrebx2asA6sXZwEpyywx",
        SvgOverrideColor: "_29EuRXgJWKVF34WrLKbeKZ",
        ItemHoverZIndex: "_3gUO3mSjDbNfpuoquiKUX1",
        ActionButton: "_1YLE2s8b1gx2r4hkbxPUis",
        Icon: "_1QoZDC36mteVbqJk1wDSZn",
        PrimaryRedeemButton: "_2nL0cu9XFkFybVcp4CGFCO",
        CheckmarkCircle: "_2UpnBAYN6126aTJs1u2ojE",
        AlreadyOwned: "_3KGvDFZrr40lqc2M9wEJfI",
        AlreadyOwnedText: "_1E4uc1RzsRkpvfk6DwwdMp",
      };
    },
    86638: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => x });
      var n = r(47427),
        a = r(8285),
        l = r(760),
        o = r(27605),
        c = r(48976),
        i = r(42364),
        s = r(46824),
        d = r(38244),
        m = r(31846),
        u = r(42605),
        _ = r(83955),
        p = r(76471),
        f = r(75321),
        h = r(99591),
        C = r(13129),
        I = r(20376);
      const x = (0, o.Pi)((e) => {
          const { bundleid: t } = e.match.params,
            r = parseInt(t),
            o = n.createElement(a.l_, { to: l.Z.LoyaltyStore() });
          if (isNaN(r)) return o;
          const [i] = c.Vb.Get().GetRewardDefinitions(r);
          return i
            ? 5 !== i.type && 6 !== i.type
              ? o
              : n.createElement(E, { bundle: i })
            : null;
        }),
        E = (0, o.Pi)((e) => {
          const { bundle: t } = e,
            r = c.Vb.Get().GetBundleOfferForUser(t);
          return n.createElement(
            i.OC,
            null,
            n.createElement(
              d.xu,
              {
                paddingY: "xlarge",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              },
              n.createElement(B, { bundle: t, offer: r }),
              0 === r.point_cost
                ? n.createElement(k, { className: h.PrimaryRedeemButton })
                : n.createElement(s.D9, {
                    cost: r.point_cost,
                    discount: r.discount,
                    originalCost: r.original_point_cost,
                    className: h.PrimaryRedeemButton,
                    onClick: (e) => (0, s.s1)(e, t),
                  }),
              n.createElement(b, { offer: r }),
            ),
          );
        }),
        B = (0, o.Pi)(({ bundle: e, offer: t }) => {
          const r = (0, u.h)(e),
            a = (0, m.Xx)("#RewardBundle_OfferDescription", t.discount);
          return n.createElement(
            d.xu,
            { paddingBottom: "xlarge" },
            n.createElement(i._f, { title: r, subtitle: a }),
          );
        }),
        k = ({ className: e }) =>
          n.createElement(
            "div",
            { className: (0, C.Z)(e, h.AlreadyOwned) },
            n.createElement(I.Zg, { className: h.CheckmarkCircle }),
            n.createElement(
              "span",
              { className: h.AlreadyOwnedText },
              (0, m.Xx)("#Redeem_BundleItemOwned"),
            ),
          ),
        b = (0, o.Pi)((e) => {
          const { offer: t } = e;
          return n.createElement(
            _.iS,
            { title: (0, m.Xx)("#RewardBundle_BundleContentsSection_Title") },
            n.createElement(p.c, {
              getItems: (e, r) => ({
                rewards: t.items.slice(e, r),
                bLoadingMore: !1,
                cTotalMatching: t.items.length,
                cMaxToReturn: t.items.length,
              }),
              renderItem: (e) =>
                n.createElement(f.h_, {
                  key: e.defid,
                  definition: e,
                  purchaseable: !1,
                  onClick: (t) => (0, s.u4)(t, e),
                }),
            }),
          );
        });
    },
  },
]);
