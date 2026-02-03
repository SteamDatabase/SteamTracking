/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [8685],
  {
    26590: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        Discount: "_3f4n8BFj3ADB61_06XxXfH",
        ShellHeader: "kOC36pdxn9Y3RbFW9Pe4k",
        ShellHeaderFlex: "_3Bs_x4ZJUDXcmcyBIijrY7",
        RewardsPointsCount: "_1XPtbpsI-RZd1JlAozJWI0",
        ShellHeaderBrandName: "_2fDrebx2asA6sXZwEpyywx",
        Shell: "_2ZfecHo99JCqJlsQwW-w_T",
        ShellScrollParent: "_1Qkju8DkEDxfJrSRSvE60X",
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
    91855: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => b });
      var r = n(90626),
        l = n(92757),
        a = n(43527),
        c = n(75844),
        s = n(22580),
        o = n(54279),
        i = n(59707),
        d = n(99428),
        m = n(61859),
        u = n(63927),
        f = n(87873),
        p = n(32150),
        _ = n(12711),
        w = n(26590),
        E = n(52038),
        k = n(6519);
      const b = (0, c.PA)((e) => {
          const { bundleid: t } = e.match.params,
            n = parseInt(t),
            c = r.createElement(l.rd, { to: a.B.LoyaltyStore() });
          if (isNaN(n)) return c;
          const [o] = s.DZ.Get().GetRewardDefinitions(n);
          return o
            ? 5 !== o.type && 6 !== o.type
              ? c
              : r.createElement(g, { bundle: o })
            : null;
        }),
        g = (0, c.PA)((e) => {
          const { bundle: t } = e,
            n = s.DZ.Get().GetBundleOfferForUser(t);
          return r.createElement(
            o.jy,
            null,
            r.createElement(
              d.az,
              {
                paddingY: "xlarge",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              },
              r.createElement(h, { bundle: t, offer: n }),
              0 === n.point_cost
                ? r.createElement(x, { className: w.PrimaryRedeemButton })
                : r.createElement(i.gs, {
                    cost: n.point_cost,
                    discount: n.discount,
                    originalCost: n.original_point_cost,
                    className: w.PrimaryRedeemButton,
                    onClick: (e) => (0, i.U$)(e, t),
                  }),
              r.createElement(y, { offer: n }),
            ),
          );
        }),
        h = (0, c.PA)(({ bundle: e, offer: t }) => {
          const n = (0, u.g)(e),
            l = (0, m.we)("#RewardBundle_OfferDescription", t.discount);
          return r.createElement(
            d.az,
            { paddingBottom: "xlarge" },
            r.createElement(o.Ch, { title: n, subtitle: l }),
          );
        }),
        x = ({ className: e }) =>
          r.createElement(
            "div",
            { className: (0, E.A)(e, w.AlreadyOwned) },
            r.createElement(k.wK, { className: w.CheckmarkCircle }),
            r.createElement(
              "span",
              { className: w.AlreadyOwnedText },
              (0, m.we)("#Redeem_BundleItemOwned"),
            ),
          ),
        y = (0, c.PA)((e) => {
          const { offer: t } = e;
          return r.createElement(
            f.Gq,
            { title: (0, m.we)("#RewardBundle_BundleContentsSection_Title") },
            r.createElement(p.n, {
              getItems: (e, n) => ({
                rewards: t.items.slice(e, n),
                bLoadingMore: !1,
                cTotalMatching: t.items.length,
                cMaxToReturn: t.items.length,
              }),
              renderItem: (e) =>
                r.createElement(_.Fo, {
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
