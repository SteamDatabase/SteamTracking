/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [68685],
    {
      92908: (E, i, e) => {
        "use strict";
        e.r(i), e.d(i, { default: () => f });
        var t = e(7850),
          u = e(92757),
          M = e(58732),
          m = e(49288),
          a = e(75844),
          D = e(37939),
          P = e(36636),
          d = e(78175),
          O = e(23903),
          c = e(18210),
          B = e(19386),
          C = e(30992),
          x = e(62389),
          A = e(32819),
          l = e(26590),
          y = e.n(l),
          R = e(36707),
          I = e(96986);
        const f = (0, a.PA)((_) => {
            const { bundleid: n } = _.match.params,
              s = parseInt(n),
              o = (0, t.jsx)(u.rd, { to: M.B.LoyaltyStore() });
            if (isNaN(s)) return o;
            const [r] = D.DZ.Get().GetRewardDefinitions(s);
            return r
              ? r.type !== m.kT.Mj && r.type !== m.kT.Wy
                ? o
                : (0, t.jsx)(T, { bundle: r })
              : null;
          }),
          T = (0, a.PA)((_) => {
            const { bundle: n } = _,
              s = D.DZ.Get().GetBundleOfferForUser(n),
              o = (r) => (0, d.U$)(r, n);
            return (0, t.jsx)(P.jy, {
              children: (0, t.jsxs)(O.az, {
                paddingY: "xlarge",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                children: [
                  (0, t.jsx)(j, { bundle: n, offer: s }),
                  s.point_cost === 0
                    ? (0, t.jsx)(h, { className: l.PrimaryRedeemButton })
                    : (0, t.jsx)(d.gs, {
                        cost: s.point_cost,
                        discount: s.discount,
                        originalCost: s.original_point_cost,
                        className: l.PrimaryRedeemButton,
                        onClick: o,
                      }),
                  (0, t.jsx)(v, { offer: s }),
                ],
              }),
            });
          }),
          j = (0, a.PA)(({ bundle: _, offer: n }) => {
            const s = (0, B.g)(_),
              o = (0, c.we)("#RewardBundle_OfferDescription", n.discount);
            return (0, t.jsx)(O.az, {
              paddingBottom: "xlarge",
              children: (0, t.jsx)(P.Ch, { title: s, subtitle: o }),
            });
          }),
          h = ({ className: _ }) =>
            (0, t.jsxs)("div", {
              className: (0, R.A)(_, l.AlreadyOwned),
              children: [
                (0, t.jsx)(I.wK, { className: l.CheckmarkCircle }),
                (0, t.jsx)("span", {
                  className: l.AlreadyOwnedText,
                  children: (0, c.we)("#Redeem_BundleItemOwned"),
                }),
              ],
            }),
          v = (0, a.PA)((_) => {
            const { offer: n } = _;
            return (0, t.jsx)(C.Gq, {
              title: (0, c.we)("#RewardBundle_BundleContentsSection_Title"),
              children: (0, t.jsx)(x.n, {
                getItems: (s, o) => ({
                  rewards: n.items.slice(s, o),
                  bLoadingMore: !1,
                  cTotalMatching: n.items.length,
                  cMaxToReturn: n.items.length,
                }),
                renderItem: (s) =>
                  (0, t.jsx)(
                    A.Fo,
                    {
                      definition: s,
                      purchaseable: !1,
                      onClick: (o) => (0, d.iZ)(o, s),
                    },
                    s.defid,
                  ),
              }),
            });
          });
      },
      26590: (E) => {
        E.exports = {
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
    },
  ]);
})();
