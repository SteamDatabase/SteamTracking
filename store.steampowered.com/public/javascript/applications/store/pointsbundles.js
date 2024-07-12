/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [8685],
  {
    26590: (e) => {
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
    91855: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => A });
      var n = r(90626),
        a = r(92757),
        l = r(43527),
        o = r(75844),
        c = r(60476),
        s = r(48474),
        i = r(59707),
        d = r(99428),
        m = r(61859),
        u = r(63927),
        _ = r(87873),
        p = r(32150),
        f = r(12711),
        h = r(26590),
        C = r(52038),
        I = r(6519);
      const A = (0, o.PA)((e) => {
          const { bundleid: t } = e.match.params,
            r = parseInt(t),
            o = n.createElement(a.rd, { to: l.B.LoyaltyStore() });
          if (isNaN(r)) return o;
          const [s] = c.DZ.Get().GetRewardDefinitions(r);
          return s
            ? 5 !== s.type && 6 !== s.type
              ? o
              : n.createElement(B, { bundle: s })
            : null;
        }),
        B = (0, o.PA)((e) => {
          const { bundle: t } = e,
            r = c.DZ.Get().GetBundleOfferForUser(t);
          return n.createElement(
            s.jy,
            null,
            n.createElement(
              d.az,
              {
                paddingY: "xlarge",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              },
              n.createElement(E, { bundle: t, offer: r }),
              0 === r.point_cost
                ? n.createElement(w, { className: h.PrimaryRedeemButton })
                : n.createElement(i.gs, {
                    cost: r.point_cost,
                    discount: r.discount,
                    originalCost: r.original_point_cost,
                    className: h.PrimaryRedeemButton,
                    onClick: (e) => (0, i.U$)(e, t),
                  }),
              n.createElement(k, { offer: r }),
            ),
          );
        }),
        E = (0, o.PA)(({ bundle: e, offer: t }) => {
          const r = (0, u.g)(e),
            a = (0, m.we)("#RewardBundle_OfferDescription", t.discount);
          return n.createElement(
            d.az,
            { paddingBottom: "xlarge" },
            n.createElement(s.Ch, { title: r, subtitle: a }),
          );
        }),
        w = ({ className: e }) =>
          n.createElement(
            "div",
            { className: (0, C.A)(e, h.AlreadyOwned) },
            n.createElement(I.wK, { className: h.CheckmarkCircle }),
            n.createElement(
              "span",
              { className: h.AlreadyOwnedText },
              (0, m.we)("#Redeem_BundleItemOwned"),
            ),
          ),
        k = (0, o.PA)((e) => {
          const { offer: t } = e;
          return n.createElement(
            _.Gq,
            { title: (0, m.we)("#RewardBundle_BundleContentsSection_Title") },
            n.createElement(p.n, {
              getItems: (e, r) => ({
                rewards: t.items.slice(e, r),
                bLoadingMore: !1,
                cTotalMatching: t.items.length,
                cMaxToReturn: t.items.length,
              }),
              renderItem: (e) =>
                n.createElement(f.Fo, {
                  key: e.defid,
                  definition: e,
                  purchaseable: !1,
                  onClick: (t) => (0, i.iZ)(t, e),
                }),
            }),
          );
        });
    },
  },
]);
