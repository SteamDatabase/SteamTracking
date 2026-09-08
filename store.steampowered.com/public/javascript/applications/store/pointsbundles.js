/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [68685],
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
        BackgroundAnimation: "_2oXEvfMhDhEcaBr5PRy7d7",
        "ItemFocusAnim-darkerGrey-nocolor": "_16nKUyCgdygsMvgtHYnA_I",
        "ItemFocusAnim-darkerGrey": "_3S9V6HG-yV7cLmXIn7O8AO",
        "ItemFocusAnim-darkGreySettings": "_33WcxDSoXyTOyaJarLRYDB",
        "ItemFocusAnim-darkGrey": "VeFWruyg6ctHtRkiUXTkH",
        "ItemFocusAnim-grey": "_24duhYi8RTD4Eew8C3KB_c",
        "ItemFocusAnim-translucent-white-10": "_3lteHrpkDJZkvRG_ffVoBy",
        "ItemFocusAnim-translucent-white-20": "v8CraP-E2KxdVAq6wGT0o",
        "ItemFocusAnimBorder-darkGrey": "iqxTSvpBHG-X4nrFpTG_e",
        "ItemFocusAnim-green": "k6RsOokSW4Y-O6xRYzO5L",
        focusAnimation: "_1HtLqGQcw7MLMLzHPkaLbY",
        hoverAnimation: "_3RXdvlkokeeB5ZMO_q5ehk",
      };
    },
    91855: (e, n, t) => {
      "use strict";
      t.r(n), t.d(n, { default: () => w });
      var r = t(7850),
        s = t(92757),
        o = t(43527),
        i = t(71698),
        a = t(75844),
        c = t(22580),
        l = t(54279),
        d = t(59707),
        u = t(99428),
        m = t(61859),
        x = t(63927),
        _ = t(87873),
        k = t(32150),
        f = t(35092),
        y = t(26590),
        h = t(52038),
        p = t(6519);
      const w = (0, a.PA)((e) => {
          const { bundleid: n } = e.match.params,
            t = parseInt(n),
            a = (0, r.jsx)(s.rd, { to: o.B.LoyaltyStore() });
          if (isNaN(t)) return a;
          const [l] = c.DZ.Get().GetRewardDefinitions(t);
          return l
            ? l.type !== i.kT.Mj && l.type !== i.kT.Wy
              ? a
              : (0, r.jsx)(A, { bundle: l })
            : null;
        }),
        A = (0, a.PA)((e) => {
          const { bundle: n } = e,
            t = c.DZ.Get().GetBundleOfferForUser(n);
          return (0, r.jsx)(l.jy, {
            children: (0, r.jsxs)(u.az, {
              paddingY: "xlarge",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              children: [
                (0, r.jsx)(g, { bundle: n, offer: t }),
                0 === t.point_cost
                  ? (0, r.jsx)(B, { className: y.PrimaryRedeemButton })
                  : (0, r.jsx)(d.gs, {
                      cost: t.point_cost,
                      discount: t.discount,
                      originalCost: t.original_point_cost,
                      className: y.PrimaryRedeemButton,
                      onClick: (e) => (0, d.U$)(e, n),
                    }),
                (0, r.jsx)(j, { offer: t }),
              ],
            }),
          });
        }),
        g = (0, a.PA)(({ bundle: e, offer: n }) => {
          const t = (0, x.g)(e),
            s = (0, m.we)("#RewardBundle_OfferDescription", n.discount);
          return (0, r.jsx)(u.az, {
            paddingBottom: "xlarge",
            children: (0, r.jsx)(l.Ch, { title: t, subtitle: s }),
          });
        }),
        B = ({ className: e }) =>
          (0, r.jsxs)("div", {
            className: (0, h.A)(e, y.AlreadyOwned),
            children: [
              (0, r.jsx)(p.wK, { className: y.CheckmarkCircle }),
              (0, r.jsx)("span", {
                className: y.AlreadyOwnedText,
                children: (0, m.we)("#Redeem_BundleItemOwned"),
              }),
            ],
          }),
        j = (0, a.PA)((e) => {
          const { offer: n } = e;
          return (0, r.jsx)(_.Gq, {
            title: (0, m.we)("#RewardBundle_BundleContentsSection_Title"),
            children: (0, r.jsx)(k.n, {
              getItems: (e, t) => ({
                rewards: n.items.slice(e, t),
                bLoadingMore: !1,
                cTotalMatching: n.items.length,
                cMaxToReturn: n.items.length,
              }),
              renderItem: (e) =>
                (0, r.jsx)(
                  f.Fo,
                  {
                    definition: e,
                    purchaseable: !1,
                    onClick: (n) => (0, d.iZ)(n, e),
                  },
                  e.defid,
                ),
            }),
          });
        });
    },
  },
]);
