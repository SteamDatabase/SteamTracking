/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [7311],
  {
    11001: (e, t, a) => {
      a.r(t), a.d(t, { ShoppingCartErrorModal: () => p, default: () => u });
      var r = a(45137),
        n = a(47427),
        l = a(27438),
        s = a(7860),
        i = a(31846),
        o = a(91585),
        c = a.n(o),
        d = a(1485),
        m = a(65255),
        C = a(13499),
        E = a(91618);
      function u(e) {
        const { closeCart: t, lineItemIDs: a, replacedPackageIDs: o } = e,
          u = (0, r.g1)(),
          p = (0, r.td)(),
          h = n.useMemo(
            () =>
              u.data && a && 0 !== a.length
                ? u.data.line_items.filter((e) => a.includes(e.line_item_id))
                : null,
            [a, u.data],
          );
        if (
          (n.useEffect(() => {
            u.isSuccess && h && 0 === h.length && t();
          }, [u, h, t]),
          !h)
        )
          return null;
        const _ = o?.length > 0;
        return n.createElement(
          l.On,
          { active: !0, className: c().ShoppingCartModal, onDismiss: t },
          n.createElement(
            "div",
            { className: c().ShoppingCartHeader },
            (0, i.Xx)(_ ? "#Cart_UpdatedYourCart" : "#Cart_AddedToYourCart"),
          ),
          n.createElement(s.J, {
            lineItems: h,
            validation: p.lineItemValidation,
            cartValidation: p.validateCart.data,
          }),
          n.createElement(
            E.s,
            { className: c().ShoppingCartModalBtns },
            n.createElement(
              d.zx,
              { onClick: t },
              (0, i.Xx)("#Cart_ContinueShopping"),
            ),
            n.createElement(
              d.KM,
              {
                className: c().OpenCartBtn,
                onClick: () =>
                  (window.location.href = (0, C.OL)(
                    m.De.STORE_BASE_URL + "cart",
                  )),
              },
              (0, i.Xx)("#Cart_ViewMyCart", u.data?.line_items.length),
            ),
          ),
        );
      }
      function p(e) {
        const { active: t, result: a, onDismiss: r } = e;
        return n.createElement(
          l.On,
          { active: t, onDismiss: r },
          n.createElement(d.h4, null, (0, i.Xx)("#Error_Generic")),
          n.createElement(
            "div",
            { className: c().ErrorModalContent },
            n.createElement(
              "div",
              { className: c().ErrorModalMessage },
              (0, i.Xx)("#Cart_ErrorUpdating"),
            ),
            n.createElement(
              "div",
              { className: c().ErrorModalCode },
              a ? (0, i.Xx)("#Cart_ErrorCode", a) : "",
            ),
            n.createElement(
              "div",
              { className: c().ErrorModalBottom },
              n.createElement(d.zx, { onClick: r }, (0, i.Xx)("#Button_Close")),
            ),
          ),
        );
      }
    },
  },
]);
