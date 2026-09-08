/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [38213],
  {
    52169: (e) => {
      e.exports = {
        strMaxCartPartResponsiveWidth: "840px",
        CartCard: "_1HYjtPJd8D-AHSlOebB4f-",
        ShoppingCartModalContent: "_1859zsZbgy1ECsQDqMGedi",
        ShoppingCartModalBtns: "md6XqKKeYLOQhwbHaayWp",
      };
    },
    50097: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => q });
      var a = i(7850),
        n = i(76217),
        s = i(66418),
        l = i(55388),
        r = i(34847),
        c = i(90626),
        o = i(38858),
        d = i(85906),
        m = i(65244),
        u = i(8364),
        _ = i(71232),
        p = i(18519),
        I = i(81393),
        h = i(3108),
        f = i(95578),
        x = i(69345),
        j = i(51622),
        g = i(13771),
        v = i(5309),
        L = i(39777),
        C = i(52541),
        N = i(13327),
        b = i(64238),
        z = i.n(b),
        S = i(84811),
        R = i(26514),
        O = i(90485),
        E = i(13904),
        T = i(79443),
        y = i(42798),
        A = i(86711),
        Q = i.n(A),
        k = i(70343);
      function D(e) {
        const { lineItems: t, cartValidation: i, scrollable: n = !1 } = e;
        if (!t.length)
          return (0, a.jsx)("div", { children: d.Q8.Localize("#Cart_Empty") });
        const s = i?.cart_items
          ? i.cart_items.reduce((e, t) => ((e[t.line_item_id] = t), e), {})
          : {};
        return (0, a.jsx)(k.uO, {
          scrollable: n,
          children:
            t &&
            t.map((e, t) =>
              e
                ? (0, a.jsx)(
                    S.tH,
                    {
                      fallback: (t) => (0, a.jsx)(M, { item: e, error: t }),
                      children: (0, a.jsx)(
                        B,
                        { item: e, validatedItem: s[e.line_item_id] },
                        e.line_item_id,
                      ),
                    },
                    e?.line_item_id || t,
                  )
                : (0, a.jsx)(k.vF, {}, t),
            ),
        });
      }
      function B(e) {
        const { item: t, validatedItem: i } = e,
          n = (function (e) {
            const t = e.type;
            switch (t) {
              case h.KW.$B:
                return { packageid: e.packageid };
              case h.KW.XY:
                return { bundleid: e.bundleid };
              case h.KW.vC:
                return;
              default:
                (0, I.z_)(t, `Unhandled type: ${t}`);
            }
            return;
          })(t);
        if (!n) throw `Unknown line item type (${t.type})`;
        const { data: s } = (0, L.J$)(n),
          { data: l } = (0, L.U2)(n),
          { data: r } = (0, L.mr)(n),
          c = l ? (0, C.Jz)(l) : n;
        return (
          (0, L.lv)(c),
          (0, L.qI)(c),
          !s || (s.visible && null !== r)
            ? s && l && r && i
              ? (0, a.jsx)(P, {
                  lineItem: t,
                  validatedItem: i,
                  storeItem: s,
                  displayItem: l,
                  purchaseOption: r,
                })
              : (0, a.jsx)(k.vF, {})
            : (0, a.jsx)(U, {
                lineItemID: t.line_item_id,
                validatedItem: i,
                storeItem: s,
              })
        );
      }
      function M(e) {
        const { item: t, error: i } = e,
          s = (0, O.t)(t.line_item_id);
        return (0, a.jsxs)(k.Rz, {
          className: Q().ErrorLineItem,
          children: [
            (0, a.jsxs)("div", {
              className: Q().Left,
              children: [
                (0, a.jsx)("div", {
                  className: Q().Error,
                  children: d.Q8.Localize("#Cart_LineItem_ErrorBoundary"),
                }),
                (0, a.jsx)("div", {
                  className: Q().Muted,
                  children: i.message,
                }),
              ],
            }),
            (0, a.jsx)(n.Z, {
              onActivate: () => s.mutate(),
              className: Q().RemoveButton,
              children: d.Q8.Localize("#Cart_Remove"),
            }),
          ],
        });
      }
      function P(e) {
        const {
            storeItem: t,
            displayItem: i,
            lineItem: s,
            purchaseOption: l,
            validatedItem: r,
          } = e,
          c = s.line_item_id,
          o = (0, O.t)(c),
          d = o.isPending || o.isSuccess,
          m = s.flags?.is_gift;
        let u = m ? "gift" : "myself";
        return (0, a.jsx)(n.Z, {
          children: (0, a.jsxs)(k.Rz, {
            children: [
              d && (0, a.jsx)(k.UD, {}),
              (0, a.jsxs)("div", {
                className: z()(Q().InnerLineItemCtn, d && Q().PendingLineItem),
                children: [
                  (0, a.jsx)("div", {
                    className: z()(Q().LineItemColumn, Q().LineItemCapsule),
                    children: (0, a.jsx)(x.p, {
                      storeItem: i,
                      feature: "cart-items",
                      noImpressionTracking: !0,
                      children: (0, a.jsx)(w, { storeItem: i }),
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className: Q().LineItemDetailsCtn,
                    children: [
                      (0, a.jsx)(k.UW, {
                        className: Q().LineItemDetailsRowTop,
                        children: (0, a.jsx)("div", {
                          className: Q().LineItemTitle,
                          children: t.name,
                        }),
                      }),
                      t?.is_coming_soon && (0, a.jsx)(F, { storeItem: t }),
                      (0, a.jsx)(W, { validatedItem: r }),
                      (0, a.jsx)($, { storeItem: t }),
                      (0, a.jsxs)(k.UW, {
                        className: Q().LineItemSpaceBetween,
                        children: [
                          (0, a.jsx)("div", {
                            className: z()(Q().LineItemCol, Q().PlatformIcons),
                            children: (0, a.jsx)(j.Dm, { id: (0, C.Jz)(i) }),
                          }),
                          (0, a.jsx)(J, {
                            purchaseOption: l,
                            validatedItem: r,
                          }),
                        ],
                      }),
                      (0, a.jsx)(V, {
                        lineItem: s,
                        storeItem: t,
                        purchaseOption: l,
                        validatedItem: r,
                        initialPurchaseOption: u,
                        fnRemoveLineItem: o.mutate,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function U(e) {
        const { lineItemID: t, validatedItem: i, storeItem: s } = e,
          l = (0, O.t)(t),
          r = l.isPending;
        return (0, a.jsxs)(k.Rz, {
          placeholder: !0,
          children: [
            r && (0, a.jsx)(k.UD, {}),
            (0, a.jsxs)("div", {
              className: z()(Q().InnerLineItemCtn, r && Q().PendingLineItem),
              children: [
                (0, a.jsx)("div", {
                  className: z()(Q().LineItemColumn, Q().LineItemCapsule),
                  children: (0, a.jsx)(x.p, {
                    storeItem: s,
                    noImpressionTracking: !0,
                    children: (0, a.jsx)(w, { storeItem: s }),
                  }),
                }),
                (0, a.jsxs)("div", {
                  className: Q().LineItemDetailsCtn,
                  children: [
                    (0, a.jsx)(k.UW, {
                      className: Q().LineItemDetailsRowTop,
                      children: (0, a.jsx)("div", {
                        className: Q().LineItemTitle,
                        children: s?.name,
                      }),
                    }),
                    !!i && (0, a.jsx)(W, { validatedItem: i }),
                    (0, a.jsx)(k.UW, {
                      className: Q().LineItemSpaceBetween,
                      children: (0, a.jsx)(n.Z, {
                        onActivate: () => l.mutate(),
                        className: Q().RemoveLineItem,
                        children: d.Q8.Localize("#Cart_Remove"),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function w(e) {
        const { storeItem: t } = e,
          { data: i } = (0, L.lv)((0, C.Jz)(t));
        let n = `${s.TS.STORE_BASE_URL}public/images/checkout/Cart_generic_header_logo.png`;
        return (
          i?.header
            ? (n =
                s.TS.STORE_ITEM_BASE_URL +
                i.asset_url_format.replace("${FILENAME}", i.header))
            : i?.small_capsule &&
              (n =
                s.TS.STORE_ITEM_BASE_URL +
                i.asset_url_format.replace("${FILENAME}", i.small_capsule)),
          (0, a.jsx)("img", { alt: t.name, className: Q().HeaderImg, src: n })
        );
      }
      function W(e) {
        const { validatedItem: t, children: i } = e;
        return (0, a.jsxs)("div", {
          className: Q().LineItemSpaceBetween,
          children: [(0, a.jsx)(y.Yz, { lineItem: t }), i],
        });
      }
      function F(e) {
        const { storeItem: t } = e,
          { data: i } = (0, L.by)((0, C.Jz)(t)),
          n = (0, v.VM)(i);
        if (!i) return null;
        let s = d.Q8.Localize("#Cart_ComingSoon", n);
        return (
          ["text_tba", "text_comingsoon"].includes(i.coming_soon_display) &&
            (s = n),
          (0, a.jsx)(k.dp, { children: s })
        );
      }
      function $(e) {
        return null;
      }
      function J(e) {
        const { purchaseOption: t, validatedItem: i } = e;
        let n = t?.formatted_original_price,
          s = t?.formatted_final_price,
          l = t?.discount_pct;
        return (
          i &&
            i.original_price &&
            i.subtotal &&
            ((n = i.original_price.formatted_amount),
            (s = i.subtotal.formatted_amount),
            (l = (0, k.dR)(i))),
          (0, a.jsx)("div", {
            className: Q().LineItemRightCol,
            children: (0, a.jsx)(g.z, {
              transparentBackground: !0,
              purchaseOption: {
                ...t,
                formatted_original_price: n,
                formatted_final_price: s,
                discount_pct: l,
              },
            }),
          })
        );
      }
      function V(e) {
        const {
            lineItem: t,
            storeItem: i,
            purchaseOption: s,
            validatedItem: l,
            initialPurchaseOption: r,
            fnRemoveLineItem: c,
          } = e,
          o = !l?.restrict_add_additional_to_cart,
          m = (0, R.A)(t.packageid, t.bundleid, s.user_can_purchase_as_gift);
        return (0, a.jsxs)(k.UW, {
          className: Q().LineItemSpaceBetween,
          noWrap: !0,
          children: [
            (0, a.jsx)("div", {
              className: z()(Q().LineItemCol, Q().PurchaseOptionPickerCtn),
              children: (0, a.jsx)(Z, {
                lineItem: t,
                storeItem: i,
                initialValue: r,
                purchaseOption: s,
              }),
            }),
            (0, a.jsxs)("div", {
              className: z()(Q().LineItemRightCol, Q().AddRemoveLinks),
              children: [
                o &&
                  (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(n.Z, {
                        onActivate: () => !m.isPending && m.mutate(),
                        className: Q().AddLineItem,
                        title: d.Q8.Localize("#Cart_LineItem_Add_Tooltip"),
                        children: d.Q8.Localize("#Cart_Add"),
                      }),
                      "|",
                    ],
                  }),
                (0, a.jsx)(n.Z, {
                  onActivate: () => c(),
                  className: Q().RemoveLineItem,
                  children: d.Q8.Localize("#Cart_Remove"),
                }),
              ],
            }),
          ],
        });
      }
      function Z(e) {
        const {
            lineItem: t,
            storeItem: i,
            initialValue: n,
            purchaseOption: s,
          } = e,
          [l, r] = c.useState(n),
          o = (0, E.C)(),
          m = (0, N.DT)(),
          u = (0, T.EJ)(),
          I = !s.user_can_purchase_as_gift || u;
        const h = !(function (e) {
            return !e.is_commercial_license && !e.requires_shipping;
          })(s),
          { data: x } = (0, p.jn)(t.gift_info?.accountid_giftee);
        let j = [
          {
            data: "myself",
            label: d.Q8.Localize("#Cart_LineItemOptions_Myself"),
          },
          !h && {
            data: "private",
            label: d.Q8.Localize("#Cart_LineItemOptions_Privately"),
          },
        ].filter((e) => !!e);
        if (
          (I ||
            (t.gift_info?.accountid_giftee && x?.public_data?.persona_name
              ? j.push({
                  data: "gift",
                  label: d.Q8.Localize(
                    "#Cart_LineItemOptions_GiftForPersona",
                    x?.public_data?.persona_name,
                  ),
                })
              : j.push({
                  data: "gift",
                  label: d.Q8.Localize("#Cart_LineItemOptions_Gift"),
                })),
          1 === j.length)
        )
          return null;
        return (0, a.jsx)(_.l6, {
          onSelectionChange: (e) => {
            if (l === e.data) return;
            const a = (e) =>
                m.mutate({
                  rgAppIDs:
                    (i.item_type === f.c6.qI ? [i.appid] : i.included_appids) ??
                    [],
                  bPrivate: e,
                }),
              n = (e) =>
                o.mutate({
                  lineItemID: t.line_item_id,
                  lineItemFlags: { ...t.flags, is_gift: e },
                  giftInfo: e ? t.gift_info : void 0,
                });
            "private" === l ? a(!1) : "gift" === l && n(!1),
              "private" === e.data ? a(!0) : "gift" === e.data && n(!0),
              r(e.data);
          },
          selectedValue: j.find((e) => e.data === l),
          options: j,
          getOptionLabel: (e) => e.label,
          size: "1",
        });
      }
      var Y = i(52169);
      function q(e) {
        const { closeCart: t, lineItemIDs: i } = e,
          _ = (0, d.S5)(),
          { data: p } = (0, m.UI)(),
          { data: I } = (0, u.g)(),
          h = (0, o.Yj)(i);
        return (
          c.useEffect(() => {
            h && 0 == h?.length && t();
          }, [h, t]),
          h && _
            ? (0, a.jsx)(r.s, {
                onClose: t,
                navID: "CartModal",
                strTitle: d.Q8.Localize("#Cart_AddedToYourCart"),
                children: (0, a.jsxs)("div", {
                  className: Y.ShoppingCartModalContent,
                  children: [
                    (0, a.jsx)(D, {
                      lineItems: h,
                      cartValidation: I,
                      scrollable: !0,
                    }),
                    (0, a.jsxs)(n.Z, {
                      className: Y.ShoppingCartModalBtns,
                      children: [
                        (0, a.jsx)(l.Oh, {
                          onClick: t,
                          children: d.Q8.Localize("#Cart_ContinueShopping"),
                        }),
                        (0, a.jsx)(l.x0, {
                          autoFocus: !0,
                          href: `${s.TS.STORE_BASE_URL}cart/`,
                          children: d.Q8.Localize(
                            "#Cart_ViewMyCart",
                            p.line_items.length,
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
              })
            : null
        );
      }
    },
  },
]);
