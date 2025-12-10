/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [2965],
  {
    16546: (e, t, a) => {
      a.r(t), a.d(t, { ShoppingCartErrorModal: () => p, default: () => u });
      var r = a(60014),
        n = a(43830),
        l = a(90626),
        s = a(76217),
        o = a(53835),
        c = a(51706),
        i = a(61859),
        d = a(30470),
        m = a(7151),
        C = a(11543),
        E = a.n(C);
      function u(e) {
        const { closeCart: t, lineItemIDs: a, replacedPackageIDs: C } = e,
          u = (0, n.UI)(),
          { data: p } = (0, n.g7)(),
          _ = l.useMemo(
            () =>
              u.data && a && 0 !== a.length
                ? u.data.line_items.filter((e) => a.includes(e.line_item_id))
                : null,
            [a, u.data],
          ),
          g = (0, r.aL)(d.TS.STORE_BASE_URL + "cart");
        if (
          (l.useEffect(() => {
            u.isSuccess && _ && 0 === _.length && t();
          }, [u, _, t]),
          !_)
        )
          return null;
        const h = C?.length > 0;
        return l.createElement(
          c.mt,
          { active: !0, className: E().ShoppingCartModal, onDismiss: t },
          l.createElement(
            "div",
            { className: E().ShoppingCartHeader },
            (0, i.we)(h ? "#Cart_UpdatedYourCart" : "#Cart_AddedToYourCart"),
          ),
          l.createElement(m.pf, { lineItems: _, cartValidation: p }),
          l.createElement(
            s.Z,
            { className: E().ShoppingCartModalBtns },
            l.createElement(
              o.$n,
              { onClick: t },
              (0, i.we)("#Cart_ContinueShopping"),
            ),
            l.createElement(
              o.jn,
              {
                className: E().OpenCartBtn,
                onClick: () => (window.location.href = g),
              },
              (0, i.we)("#Cart_ViewMyCart", u.data?.line_items.length),
            ),
          ),
        );
      }
      function p(e) {
        const { active: t, result: a, onDismiss: r } = e;
        return l.createElement(
          c.mt,
          { active: t, onDismiss: r },
          l.createElement(o.Y9, null, (0, i.we)("#Error_Generic")),
          l.createElement(
            "div",
            { className: E().ErrorModalContent },
            l.createElement(
              "div",
              { className: E().ErrorModalMessage },
              (0, i.we)("#Cart_ErrorUpdating"),
            ),
            l.createElement(
              "div",
              { className: E().ErrorModalCode },
              a ? (0, i.we)("#Cart_ErrorCode", a) : "",
            ),
            l.createElement(
              "div",
              { className: E().ErrorModalBottom },
              l.createElement(o.$n, { onClick: r }, (0, i.we)("#Button_Close")),
            ),
          ),
        );
      }
    },
  },
]);
