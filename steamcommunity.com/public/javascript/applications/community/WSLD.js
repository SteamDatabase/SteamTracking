/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [5988],
  {
    24577: (e, t, a) => {
      a.r(t), a.d(t, { default: () => y });
      var n = a(89526),
        r = a(5080),
        s = a(10412),
        l = a(57605),
        o = a(29054),
        i = a.n(o),
        c = a(45429),
        d = a(23280),
        v = a(19304),
        p = a(14826),
        u = a(32765),
        m = a(46294),
        _ = a(71161),
        E = a(92307),
        g = a(48294),
        x = a(79946),
        h = a(5698);
      function y(e) {
        var t, a;
        const { section: l, language: o, event: x, bIsPreview: y } = e,
          S = p.LJ.GetELanguageFallback(o),
          w = l.localized_description
            ? l.localized_description[o] || l.localized_description[S] || ""
            : void 0,
          b = l.text_section_contents
            ? l.text_section_contents[o] || l.text_section_contents[S] || ""
            : void 0,
          f = (0, u.id)();
        return n.createElement(
          _.ZP,
          { feature: "salereservations" },
          n.createElement(
            m.Y,
            {
              placeholderHeight: "100vh",
              rootMargin: r.HG,
              className: (0, v.Z)(
                g.SaleSection,
                i().SaleSectionCtn,
                "ReservationCustomCSS",
              ),
              style: (0, d.V)(l, x, f),
            },
            n.createElement(c.AO, { section: l, event: x, language: o }),
            Boolean(w) &&
              n.createElement(
                "div",
                { className: h.description },
                n.createElement(E.d, {
                  text: w,
                  partnerEventStore: s.j1,
                  showErrorInfo: y,
                  event: x,
                  languageOverride: o,
                }),
              ),
            n.createElement(
              "div",
              { className: (0, v.Z)(h.options, "options") },
              null ===
                (a =
                  null === (t = l.internal_section_data) || void 0 === t
                    ? void 0
                    : t.while_supplies_last_option) || void 0 === a
                ? void 0
                : a.map((t) =>
                    n.createElement(
                      N,
                      Object.assign({ key: "supply" + t.unique_id }, e, {
                        supplyInfo: t,
                      }),
                    ),
                  ),
            ),
            Boolean(b) &&
              n.createElement(
                "div",
                { className: h.description2 },
                n.createElement(E.d, {
                  text: b,
                  partnerEventStore: s.j1,
                  showErrorInfo: y,
                  event: x,
                  languageOverride: o,
                }),
              ),
          ),
        );
      }
      function N(e) {
        const { supplyInfo: t, language: a, event: r, bIsPreview: o } = e,
          i = p.LJ.GetELanguageFallback(a),
          c = t.localized_supply_desc[a] || t.localized_supply_desc[i] || "",
          d = (0, _.bJ)();
        return n.createElement(
          "div",
          { className: (0, v.Z)(h.reservation_ctn, "reservation_ctn") },
          n.createElement(
            "div",
            { className: h.reservecopy },
            n.createElement(E.d, {
              text: c,
              partnerEventStore: s.j1,
              showErrorInfo: o,
              event: r,
              languageOverride: a,
            }),
          ),
          Boolean(!0)
            ? n.createElement(
                "div",
                {
                  className: (0, v.Z)(
                    h.reserverowReserved,
                    "WhileSupplyLastAddToCart",
                  ),
                },
                n.createElement(
                  l.zx,
                  { onClick: (e) => (0, x.tZ)(e, t.supply_package, d) },
                  (0, p.Xx)("#EventEmail_Button_BuyNow"),
                ),
              )
            : n.createElement(
                "div",
                { className: (0, v.Z)(h.reserverow, "ReservationUnavailable") },
                n.createElement(
                  l.zx,
                  { className: h.reservebutton, disabled: !0 },
                  (0, p.Xx)("#Sale_ReserveExhausted"),
                ),
              ),
          Boolean(!0) &&
            n.createElement(
              "div",
              { className: (0, v.Z)(h.expecteddate, "ReservationBuyNow") },
              n.createElement(
                "div",
                {
                  className: (0, v.Z)(
                    h.expecteddate_str,
                    "ReservationShipDate",
                  ),
                },
                (0, p.Xx)("#Sale_Reservation_ExpectedDeliveryDate"),
              ),
              (0, p.Xx)("#standard_shipping_estimate2_short"),
            ),
        );
      }
    },
  },
]);
