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
        s = a(57503),
        o = a(61859),
        c = a(11543),
        i = a.n(c),
        d = a(7068),
        m = a(30470),
        C = a(61336),
        E = a(32381);
      function u(e) {
        const { closeCart: t, lineItemIDs: a, replacedPackageIDs: c } = e,
          u = (0, r.UI)(),
          { data: p } = (0, r.g7)(),
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
        const g = c?.length > 0;
        return n.createElement(
          l.mt,
          { active: !0, className: i().ShoppingCartModal, onDismiss: t },
          n.createElement(
            "div",
            { className: i().ShoppingCartHeader },
            (0, o.we)(g ? "#Cart_UpdatedYourCart" : "#Cart_AddedToYourCart"),
          ),
          n.createElement(s.p, { lineItems: _, cartValidation: p }),
          n.createElement(
            E.Z,
            { className: i().ShoppingCartModalBtns },
            n.createElement(
              d.$n,
              { onClick: t },
              (0, o.we)("#Cart_ContinueShopping"),
            ),
            n.createElement(
              d.jn,
              {
                className: i().OpenCartBtn,
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
            { className: i().ErrorModalContent },
            n.createElement(
              "div",
              { className: i().ErrorModalMessage },
              (0, o.we)("#Cart_ErrorUpdating"),
            ),
            n.createElement(
              "div",
              { className: i().ErrorModalCode },
              a ? (0, o.we)("#Cart_ErrorCode", a) : "",
            ),
            n.createElement(
              "div",
              { className: i().ErrorModalBottom },
              n.createElement(d.$n, { onClick: r }, (0, o.we)("#Button_Close")),
            ),
          ),
        );
      }
    },
  },
]);
