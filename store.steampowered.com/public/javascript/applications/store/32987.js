/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [32987],
  {
    48890: (e) => {
      e.exports = { Message: "_3HjyI3Ki1r4_VdBwvJgaQb" };
    },
    32987: (e, a, s) => {
      "use strict";
      s.r(a), s.d(a, { default: () => u });
      var i = s(7850),
        t = s(66418),
        o = s(14987),
        r = s(39777),
        n = s(65946),
        c = s(67936),
        l = s(53807),
        d = s(48890),
        _ = s.n(d),
        v = s(79050);
      function u(e) {
        const {
            rgPackageTuples: a,
            rgHardwareDetails: s,
            selectedProduct: d,
          } = e,
          [u, g, f, m, k] = (0, n.q3)(() => [
            s?.some((e) => e.collection_time_active),
            s?.some(
              (e) =>
                e.collection_time_active && e.collection_time_active < t.TS.NOW,
            ),
            a.length,
            s?.find((e) => (0, l.k)(e.reservation_state)),
            s?.find(
              (e) => !!e.packageid && e.packageid === d?.reservation_package,
            ),
          ]),
          h = (0, o.oc)(m?.packageid),
          { data: N } = (0, r.J$)(h);
        if (!s) return null;
        const p = m && (0, l.k)(m.reservation_state);
        if (u) {
          if (g && p)
            return (0, i.jsx)("div", {
              className: _().Message,
              children: c.F5.Localize("#Reservation_InPool"),
            });
          if (!g)
            return (0, i.jsx)("div", {
              className: _().Message,
              children: p
                ? c.F5.Localize("#Reservation_InPool_NoDate", f)
                : c.F5.Localize("#Reserationn_NoListJoined", f),
            });
        }
        const R = (0, v.i)(m, k),
          F = N?.name;
        if (R) {
          if (F && p)
            return (0, i.jsx)("div", {
              className: _().Message,
              children: c.F5.Localize(
                "#Reservation_In_Waitlist_WithName_NoDate",
                F,
              ),
            });
          if (!p)
            return (0, i.jsx)("div", {
              className: _().Message,
              children: c.F5.Localize("#Reservation_Pool_Closed"),
            });
        }
        return F && p
          ? (0, i.jsx)("div", {
              className: _().Message,
              children: c.F5.Localize(
                "#Reservation_OnRegularReserveForModel",
                F,
              ),
            })
          : null;
      }
    },
  },
]);
