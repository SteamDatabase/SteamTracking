/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [2965],
  {
    16546: (e, t, a) => {
      a.r(t), a.d(t, { ShoppingCartErrorModal: () => p, default: () => u });
      var r = a(41515),
        n = a(90626),
        l = a(44325),
        s = a(12658),
        o = a(61859),
        i = a(11543),
        c = a.n(i),
        d = a(7068),
        m = a(30470),
        C = a(61336),
        E = a(32381);
      function u(e) {
        const { closeCart: t, lineItemIDs: a, replacedPackageIDs: i } = e,
          u = (0, r.UI)(),
          p = (0, r.g7)(),
          _ = n.useMemo(
            () =>
              u.data && a && 0 !== a.length
                ? u.data.line_items.filter((e) => a.includes(e.line_item_id))
                : null,
            [a, u.data],
          );
        if (
          (n.useEffect(() => {
            u.isSuccess && _ && 0 === _.length && t();
          }, [u, _, t]),
          !_)
        )
          return null;
        const g = i?.length > 0;
        return n.createElement(
          l.mt,
          { active: !0, className: c().ShoppingCartModal, onDismiss: t },
          n.createElement(
            "div",
            { className: c().ShoppingCartHeader },
            (0, o.we)(g ? "#Cart_UpdatedYourCart" : "#Cart_AddedToYourCart"),
          ),
          n.createElement(s.p, {
            lineItems: _,
            cartValidation: p.validateCart.data,
          }),
          n.createElement(
            E.Z,
            { className: c().ShoppingCartModalBtns },
            n.createElement(
              d.$n,
              { onClick: t },
              (0, o.we)("#Cart_ContinueShopping"),
            ),
            n.createElement(
              d.jn,
              {
                className: c().OpenCartBtn,
                onClick: () =>
                  (window.location.href = (0, C.k2)(
                    m.TS.STORE_BASE_URL + "cart",
                  )),
              },
              (0, o.we)("#Cart_ViewMyCart", u.data?.line_items.length),
            ),
          ),
        );
      }
      function p(e) {
        const { active: t, result: a, onDismiss: r } = e;
        return n.createElement(
          l.mt,
          { active: t, onDismiss: r },
          n.createElement(d.Y9, null, (0, o.we)("#Error_Generic")),
          n.createElement(
            "div",
            { className: c().ErrorModalContent },
            n.createElement(
              "div",
              { className: c().ErrorModalMessage },
              (0, o.we)("#Cart_ErrorUpdating"),
            ),
            n.createElement(
              "div",
              { className: c().ErrorModalCode },
              a ? (0, o.we)("#Cart_ErrorCode", a) : "",
            ),
            n.createElement(
              "div",
              { className: c().ErrorModalBottom },
              n.createElement(d.$n, { onClick: r }, (0, o.we)("#Button_Close")),
            ),
          ),
        );
      }
    },
  },
]);
