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
        s = a(63274),
        o = a(31846),
        i = a(91585),
        c = a.n(i),
        m = a(1485),
        d = a(65255),
        E = a(13499),
        C = a(91618);
      function u(e) {
        var t;
        const { closeCart: a, lineItemIDs: i } = e,
          u = (0, r.g1)(),
          p = n.useMemo(
            () =>
              u.data && i && 0 !== i.length
                ? u.data.line_items.filter((e) => i.includes(e.line_item_id))
                : null,
            [i, u.data],
          );
        return (
          n.useEffect(() => {
            u.isSuccess && p && 0 === p.length && a();
          }, [u, p, a]),
          p
            ? n.createElement(
                l.On,
                { active: !0, className: c().ShoppingCartModal, onDismiss: a },
                n.createElement(
                  "div",
                  { className: c().ShoppingCartHeader },
                  (0, o.Xx)("#Cart_AddedToYourCart"),
                ),
                n.createElement(s.J, { lineItems: p }),
                n.createElement(
                  C.s,
                  { className: c().ShoppingCartModalBtns },
                  n.createElement(
                    m.zx,
                    { onClick: a },
                    (0, o.Xx)("#Cart_ContinueShopping"),
                  ),
                  n.createElement(
                    m.KM,
                    {
                      className: c().OpenCartBtn,
                      onClick: () =>
                        (window.location.href = (0, E.OL)(
                          d.De.STORE_BASE_URL + "cart",
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
          n.createElement(m.h4, null, (0, o.Xx)("#Error_Generic")),
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
              n.createElement(m.zx, { onClick: r }, (0, o.Xx)("#Button_Close")),
            ),
          ),
        );
      }
    },
  },
]);
