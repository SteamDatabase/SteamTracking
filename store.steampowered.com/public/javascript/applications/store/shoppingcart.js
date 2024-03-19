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
        i = a(7860),
        o = a(31846),
        s = a(91585),
        c = a.n(s),
        d = a(1485),
        m = a(65255),
        C = a(13499),
        E = a(91618);
      function u(e) {
        var t;
        const { closeCart: a, lineItemIDs: s } = e,
          u = (0, r.g1)(),
          p = (0, r.td)(),
          v = n.useMemo(
            () =>
              u.data && s && 0 !== s.length
                ? u.data.line_items.filter((e) => s.includes(e.line_item_id))
                : null,
            [s, u.data],
          );
        return (
          n.useEffect(() => {
            u.isSuccess && v && 0 === v.length && a();
          }, [u, v, a]),
          v
            ? n.createElement(
                l.On,
                { active: !0, className: c().ShoppingCartModal, onDismiss: a },
                n.createElement(
                  "div",
                  { className: c().ShoppingCartHeader },
                  (0, o.Xx)("#Cart_AddedToYourCart"),
                ),
                n.createElement(i.J, {
                  lineItems: v,
                  validation: p.lineItemValidation,
                  cartValidation: p.validateCart.data,
                }),
                n.createElement(
                  E.s,
                  { className: c().ShoppingCartModalBtns },
                  n.createElement(
                    d.zx,
                    { onClick: a },
                    (0, o.Xx)("#Cart_ContinueShopping"),
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
                    (0, o.Xx)(
                      "#Cart_ViewMyCart",
                      null === (t = u.data) || void 0 === t
                        ? void 0
                        : t.line_items.length,
                    ),
                  ),
                ),
              )
            : null
        );
      }
      function p(e) {
        const { active: t, result: a, onDismiss: r } = e;
        return n.createElement(
          l.On,
          { active: t, onDismiss: r },
          n.createElement(d.h4, null, (0, o.Xx)("#Error_Generic")),
          n.createElement(
            "div",
            { className: c().ErrorModalContent },
            n.createElement(
              "div",
              { className: c().ErrorModalMessage },
              (0, o.Xx)("#Cart_ErrorUpdating"),
            ),
            n.createElement(
              "div",
              { className: c().ErrorModalCode },
              a ? (0, o.Xx)("#Cart_ErrorCode", a) : "",
            ),
            n.createElement(
              "div",
              { className: c().ErrorModalBottom },
              n.createElement(d.zx, { onClick: r }, (0, o.Xx)("#Button_Close")),
            ),
          ),
        );
      }
    },
  },
]);
