/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [39233],
    {
      63088: (G, F, t) => {
        "use strict";
        t.d(F, { Z: () => P, t: () => O });
        var e = t(35038),
          W = t(29392),
          c = t(36053),
          D = t(68312),
          z = t(75233),
          y = t(51614),
          B = t(48366),
          T = t(9843),
          x = t(78280),
          g = t(83665),
          N = t(20125);
        async function r(v, p, L) {
          if ((0, B.c2)(p)) {
            const l = e.w.Init(W.tj);
            l.Body().set_line_item_id(L);
            const E = await W.t8.RemoveItemFromCart(v, l);
            return (0, N.WZ)(), E.Body().toObject();
          } else {
            const l = e.w.Init(c.VJ);
            l.Body().set_gidlineitems([L]), l.Body().set_gidshoppingcart(p.gid);
            const E = await c.Q2.RemoveLineItems(v, l);
            return (0, N.WZ)(), E.Body().toObject();
          }
        }
        function O(v) {
          const p = (0, D.KV)(),
            L = (0, z.jE)(),
            l = (0, x.j4)();
          return (0, y.n)({
            mutationFn: async () => await r(p, l, v),
            onSuccess: (E) => {
              "cart" in E ? (0, g.LN)(L, l, E.cart) : (0, g.Cd)(L, l);
            },
          });
        }
        async function C(v, p) {
          if ((0, B.c2)(p)) {
            const L = e.w.Init(W.HK);
            return (await W.t8.DeleteCart(v, L)).BSuccess();
          } else {
            const L = await (0, T.d0)(v, p);
            if (L && L.line_items && L.line_items.length) {
              const l = e.w.Init(c.VJ);
              return (
                l
                  .Body()
                  .set_gidlineitems(
                    L.line_items.map(({ line_item_id: d }) => d),
                  ),
                l.Body().set_gidshoppingcart(p.gid),
                (await c.Q2.RemoveLineItems(v, l)).BSuccess()
              );
            }
            return !1;
          }
        }
        function P() {
          const v = (0, D.KV)(),
            p = (0, z.jE)(),
            L = (0, x.j4)();
          return (0, y.n)({
            mutationFn: async () => await C(v, L),
            onSuccess: () => (0, g.Cd)(p, L),
          });
        }
      },
      79485: (G, F, t) => {
        "use strict";
        t.d(F, { C: () => O });
        var e = t(35038),
          W = t(29392),
          c = t(8173),
          D = t(72609),
          z = t(68312),
          y = t(75233),
          B = t(51614),
          T = t(78280),
          x = t(83665),
          g = t(48366),
          N = t(36053);
        async function r(C, P, v, p, L, l) {
          if ((0, g.c2)(P)) {
            const E = e.w.Init(W.Bk);
            E.Body().set_line_item_id(v),
              E.Body().set_user_country(D.iA.country_code),
              L && E.Body().set_gift_info(c.$z.fromObject(L)),
              p && E.Body().set_flags(W.Eo.fromObject(p)),
              l && E.Body().set_apply_gidcoupon(l);
            const d = await W.t8.ModifyLineItem(C, E);
            return (
              d.BSuccess() ||
                console.warn(`Failed to update gift info: ${d.GetEResult()}`),
              [d.GetEResult(), d.Body().toObject()]
            );
          } else {
            const E = e.w.Init(N.ic);
            E.Body().set_gidlineitem(v),
              E.Body().set_gidshoppingcart(P.gid),
              L
                ? E.Body().set_gift_info(c.$z.fromObject(L))
                : p?.is_gift &&
                  E.Body().set_gift_info(
                    c.$z.fromObject({ accountid_giftee: 0, email_giftee: "" }),
                  );
            const d = await N.Q2.ModifyLineItem(C, E);
            return (
              d.BSuccess() ||
                console.warn(
                  `Failed to update gift info in anonymous cart: ${d.GetEResult()}`,
                ),
              d.Body().toObject()
            );
          }
        }
        function O(C) {
          const P = (0, T.j4)(),
            v = (0, z.KV)(),
            p = (0, y.jE)(),
            L = (0, x.GO)(P);
          return (0, B.n)({
            mutationFn: (l) =>
              r(v, P, l.lineItemID, l.lineItemFlags, l.giftInfo, l.gidCoupon),
            onMutate: async (l) => {
              await p.cancelQueries({ queryKey: L });
              const E = p.getQueryData(L);
              return (
                p.setQueryData(L, (d) => ({
                  ...(d ?? {}),
                  line_items:
                    d?.line_items?.map((I) =>
                      I.line_item_id !== l.lineItemID
                        ? I
                        : {
                            ...I,
                            flags: l.lineItemFlags || I.flags,
                            gift_info: l.giftInfo || I.gift_info,
                          },
                    ) ?? [],
                })),
                { previousCart: E }
              );
            },
            onSuccess: (l) => {
              "cart" in l ? (0, x.LN)(p, P, l.cart) : (0, x.Cd)(p, P);
            },
            onError: (l, E, d) => {
              d?.previousCart && p.setQueryData(L, d.previousCart);
            },
          });
        }
      },
      60659: (G, F, t) => {
        "use strict";
        t.d(F, { Ez: () => y, fg: () => B, iZ: () => T });
        var e = t(7850),
          W = t(78280),
          c = t(90626);
        const D = c.createContext({ step: "initial", setStep: () => {} });
        function z() {
          return (0, c.useContext)(D);
        }
        function y() {
          const x = z();
          return [x.step, x.setStep];
        }
        function B() {
          const x = z();
          return [x.cartWideGiftInfo, x.onCartWideGiftInfoChange];
        }
        function T(x) {
          const {
              step: g,
              setStep: N,
              cartID: r,
              cartWideGiftInfo: O,
              onCartWideGiftInfoChange: C,
              children: P,
            } = x,
            v = c.useMemo(
              () => ({
                step: g,
                setStep: N,
                cartWideGiftInfo: O,
                onCartWideGiftInfoChange: C,
              }),
              [g, N, O, C],
            );
          return (0, e.jsx)(D.Provider, {
            value: v,
            children: (0, e.jsx)(W.h3, { cartID: r, children: P }),
          });
        }
      },
      2165: (G, F, t) => {
        "use strict";
        t.d(F, {
          LP: () => E,
          WA: () => v,
          Yz: () => w,
          ZZ: () => l,
          wW: () => L,
        });
        var e = t(7850),
          W = t(38580),
          c = t(8173),
          D = t(72609),
          z = t(20117),
          y = t(40358),
          B = t(68094),
          T = t(64238),
          x = t.n(T),
          g = t(90626),
          N = t(97889),
          r = t(36798),
          O = t(60097),
          C = t.n(O),
          P = t(58162),
          v = ((u) => (
            (u[(u.k_ECartDisplayType_Unknown = 0)] =
              "k_ECartDisplayType_Unknown"),
            (u[(u.k_ECartDisplayType_Modal = 1)] = "k_ECartDisplayType_Modal"),
            (u[(u.k_ECartDisplayType_FullPage = 2)] =
              "k_ECartDisplayType_FullPage"),
            u
          ))(v || {});
        const p = g.createContext({
          rgCartLevelNotices: [],
          mapValidateNoticesToFootnote: new Map(),
          eDisplayType: 0,
        });
        function L(u) {
          const { validateCart: n, eDisplayType: a, children: _ } = u,
            U = oe(n, a);
          return (0, e.jsx)(p.Provider, { value: U, children: _ });
        }
        function l() {
          const { rgCartLevelNotices: u } = g.useContext(p);
          return !u || !u.length
            ? null
            : u.length == 1
              ? (0, e.jsx)("div", {
                  className: O.HeaderNotices,
                  children: r.Q8.Localize("#Cart_CartLevelErrorFormat", u[0]),
                })
              : (0, e.jsxs)("div", {
                  className: O.HeaderNotices,
                  children: [
                    (0, e.jsx)("div", {
                      children: r.Q8.Localize("#Cart_CartLevelErrorMultiple"),
                    }),
                    (0, e.jsx)("ul", {
                      children: u.map((n, a) =>
                        (0, e.jsx)("li", { children: n }, a),
                      ),
                    }),
                  ],
                });
        }
        function E(u) {
          const { validateCart: n } = u,
            { mapValidateNoticesToFootnote: a } = g.useContext(p);
          if (!a || !a.size) return null;
          const U = (n?.cart_items || []).every((ee) => !ee.errors),
            Q = U
              ? r.Q8.Localize("#Cart_FooterNoticeHeader_Warning")
              : r.Q8.Localize("#Cart_FooterNoticeHeader_MustFix"),
            k = x()(O.FooterNoticesHeader, !U && O.MustFix);
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsx)("div", { className: k, children: Q }),
              Array.from(a).map(([ee, K]) =>
                (0, e.jsx)(d, { notice: K }, K.index),
              ),
            ],
          });
        }
        function d(u) {
          const { notice: n } = u;
          return (0, e.jsxs)("div", {
            className: O.FooterNotice,
            children: [
              (0, e.jsx)("div", {
                className: O.NoticeIndex,
                children: (0, e.jsx)("sup", { children: n.index }),
              }),
              (0, e.jsx)("div", { children: n.footnote_text }),
            ],
          });
        }
        function I(u) {
          return g.useContext(p)?.mapValidateNoticesToFootnote.get(u)?.index;
        }
        function S() {
          return g.useContext(p)?.eDisplayType ?? 0;
        }
        function w(u) {
          const { lineItem: n } = u,
            a = S();
          let _ = [],
            U = !!n.gift_info?.accountid_giftee;
          return (
            n.errors?.duplicate_appids_in_cart?.length &&
              _.push(
                (0, e.jsx)(
                  M,
                  {
                    purchase_state: c.WN.ZK,
                    notice_text: r.Q8.Localize(
                      "#Cart_Error_DuplicateApps_LineItem",
                    ),
                    appids: n.errors.duplicate_appids_in_cart,
                  },
                  "duplicate_appids",
                ),
              ),
            _.push((0, e.jsx)(_e, { lineItem: n }, "owned_apps")),
            n.errors?.unavailable_in_country &&
              _.push(
                (0, e.jsx)(
                  M,
                  {
                    purchase_state: c.WN.Hp,
                    notice_text: r.Q8.Localize(
                      "#Cart_Error_UnavailableCountry_LineItem",
                    ),
                  },
                  "unavailable_in_country",
                ),
              ),
            n.errors?.adult_content_restricted &&
              _.push(
                (0, e.jsx)(
                  M,
                  {
                    purchase_state: c.WN.C4,
                    notice_text: r.Q8.Localize(
                      "#Cart_Error_AdultContentRestricted_LineItem",
                    ),
                  },
                  "adult_content_restricted",
                ),
              ),
            n.errors?.commercial_license_restricted &&
              _.push(
                (0, e.jsx)(
                  M,
                  {
                    purchase_state: c.WN.yQ,
                    notice_text: r.Q8.Localize(
                      "#Cart_Error_CommercialLicenseRestricted_LineItem",
                    ),
                  },
                  "commercial_license_restricted",
                ),
              ),
            n.errors?.gift_not_valid_for_recipient_region &&
              _.push(
                (0, e.jsx)(
                  M,
                  {
                    purchase_state: c.WN._o,
                    notice_text: r.Q8.Localize(
                      "#Cart_Error_GiftRecipientInvalid",
                    ),
                  },
                  "gift_recipient_invalid",
                ),
              ),
            _.push((0, e.jsx)(ce, { lineItem: n }, "coupon_notices")),
            n.errors?.too_many_in_cart &&
              _.push(
                (0, e.jsx)(
                  M,
                  {
                    purchase_state: c.WN.YF,
                    notice_text: r.Q8.Localize("#Cart_Error_TooManyInCart"),
                  },
                  "too_many_in_cart",
                ),
              ),
            n.errors?.missing_must_own_appids?.length &&
              _.push(
                (0, e.jsx)(
                  M,
                  {
                    purchase_state: c.WN.VL,
                    notice_text: U
                      ? r.Q8.Localize(
                          "#Cart_Error_MissingMustOwnApps_GiftLineItem",
                        )
                      : r.Q8.Localize(
                          "#Cart_Error_MissingMustOwnApps_LineItem",
                        ),
                    appids: n.errors.missing_must_own_appids,
                  },
                  "missing_must_own_appids",
                ),
              ),
            n.warnings?.appids_in_mastersub?.length &&
              _.push(
                (0, e.jsx)(
                  M,
                  {
                    purchase_state: c.WN.Q7,
                    notice_text: r.Q8.Localize(
                      "#Cart_Error_MasterSubscription_LineItem",
                    ),
                    appids: n.warnings.appids_in_mastersub.flatMap((Q) =>
                      Q.cart_appid ? [Q.cart_appid] : [],
                    ),
                  },
                  "appids_in_mastersub",
                ),
              ),
            n.warnings?.owned_appids?.length &&
              _.push(
                (0, e.jsx)(
                  M,
                  {
                    purchase_state: c.WN.fZ,
                    notice_text: r.Q8.Localize(
                      "#Cart_Warning_AlreadyOwned_LineItem",
                    ),
                    appids: n.warnings.owned_appids,
                  },
                  "owned_appids",
                ),
              ),
            n.warnings?.owned_appids_extra_copy?.length &&
              _.push(
                (0, e.jsx)(
                  M,
                  {
                    purchase_state: c.WN.Vx,
                    notice_text: r.Q8.Localize(
                      "#Cart_Warning_ExtraCopies_LineItem",
                    ),
                    appids: n.warnings.owned_appids_extra_copy,
                  },
                  "owned_appids_extra_copy",
                ),
              ),
            n.warnings?.price_has_changed &&
              _.push(
                (0, e.jsx)(
                  M,
                  {
                    purchase_state: c.WN.vY,
                    notice_text: r.Q8.Localize(
                      "#Cart_Warning_PriceChange_LineItem",
                    ),
                  },
                  "price_has_changed",
                ),
              ),
            n.warnings?.non_refundable &&
              _.push(
                (0, e.jsx)(
                  M,
                  {
                    purchase_state: c.WN.YQ,
                    notice_text: r.Q8.Localize(
                      "#Cart_Warning_NoRefund_LineItem",
                    ),
                  },
                  "non_refundable",
                ),
              ),
            n.warnings?.gift_recipient_higher_price &&
              _.push(
                (0, e.jsx)(
                  M,
                  {
                    purchase_state: c.WN.j6,
                    notice_text: r.Q8.Localize(
                      "#Cart_Warning_RecipientHigherPrice",
                    ),
                  },
                  "gift_recipient_higher_price",
                ),
              ),
            _.push((0, e.jsx)(re, { lineItem: n }, "available_cheaper")),
            U &&
              a !== 2 &&
              _.push(
                (0, e.jsx)(
                  j,
                  { nGifteeAccountID: n.gift_info.accountid_giftee },
                  "non_friend_gift",
                ),
              ),
            _
          );
        }
        function M(u) {
          const { purchase_state: n, notice_text: a, appids: _ } = u,
            U = I(n),
            k = S() === 2 && !!U;
          return (0, e.jsxs)(P.dp, {
            children: [
              a,
              k && (0, e.jsx)("sup", { children: U }),
              " ",
              (0, e.jsx)(X, { rgAppIDs: _ ?? [] }),
            ],
          });
        }
        function q(u) {
          const { errors: n, warnings: a } = u;
          return [
            ...(n?.duplicate_appids_in_cart ?? []),
            ...(n?.missing_must_own_appids ?? []),
            ...(n?.owned_appids ?? []),
            ...(a?.appids_in_mastersub ?? []).flatMap((_) =>
              _.cart_appid ? [_.cart_appid] : [],
            ),
            ...(a?.owned_appids ?? []),
            ...(a?.owned_appids_extra_copy ?? []),
          ];
        }
        function X(u) {
          const { rgAppIDs: n } = u;
          return !n || n.length == 0
            ? null
            : n.map((a, _) =>
                (0, e.jsx)(
                  Z,
                  { appid: a, last: _ >= n.length - 1 },
                  `${a}_${_}`,
                ),
              );
        }
        function Z(u) {
          const { appid: n, last: a } = u,
            { data: _ } = (0, y.J$)({ appid: n });
          return _
            ? (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)(N.y, { appid: n, name_override: _.name }),
                  !a && (0, e.jsx)(e.Fragment, { children: ", " }),
                ],
              })
            : null;
        }
        function re(u) {
          const { lineItem: n } = u,
            { data: a } = (0, y.mr)(n.item_id),
            { data: _ } = (0, y.EO)(n.item_id);
          if (
            !(
              !!!n.gift_info?.accountid_giftee &&
              !!a &&
              !!_ &&
              !(0, B.vk)(a, _)
            )
          )
            return null;
          const k = _.packageid
            ? { packageid: _.packageid }
            : { bundleid: _.bundleid };
          return (0, e.jsx)(P.dp, {
            children: r.Q8.LocalizeReact(
              "#Cart_Warning_AvailableAtALowerPrice",
              (0, e.jsx)(N.y, { ...k, name_override: _.purchase_option_name }),
            ),
          });
        }
        function j(u) {
          const { nGifteeAccountID: n } = u,
            a = z.b2
              .InitFromAccountID(n, D.TS.EUNIVERSE)
              .ConvertTo64BitString(),
            { data: _ } = (0, W.Dv)();
          return g.useMemo(() => !_ || _.includes(a), [_, a]) || !D.iA.logged_in
            ? null
            : (0, e.jsx)(P.dp, {
                children: r.Q8.Localize("#Cart_Warning_GiftToNonFriend"),
              });
        }
        function _e(u) {
          const { lineItem: n } = u;
          if (!n.errors?.owned_appids?.length) return null;
          let a = !!n.gift_info?.accountid_giftee;
          if (n.errors?.has_existing_billing_agreement)
            return (0, e.jsx)(M, {
              purchase_state: c.WN.Gy,
              notice_text: r.Q8.Localize(
                "#Cart_Error_ExistingBillingAgreement",
              ),
            });
          {
            const _ = (n.store_item?.included_appids?.length ?? 0) > 1;
            let U = r.Q8.Localize(
              a
                ? "#Cart_Error_AlreadyOwned_GiftLineItem_Game"
                : "#Cart_Error_AlreadyOwned_LineItem_Game",
            );
            return (
              _ &&
                (U = r.Q8.Localize(
                  a
                    ? "#Cart_Error_AlreadyOwned_GiftLineItem"
                    : "#Cart_Error_AlreadyOwned_LineItem",
                )),
              (0, e.jsx)(M, {
                purchase_state: c.WN.kj,
                notice_text: U,
                appids: _ ? n.errors.owned_appids : void 0,
              })
            );
          }
        }
        function ce(u) {
          const { lineItem: n } = u;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              n.errors?.coupon_exclusive_promo &&
                (0, e.jsx)(M, {
                  purchase_state: c.WN.rp,
                  notice_text: r.Q8.Localize(
                    "#Cart_Error_CouponIsExclusivePromo",
                  ),
                }),
              n.errors?.invalid_coupon &&
                (0, e.jsx)(M, {
                  purchase_state: c.WN.p_,
                  notice_text: r.Q8.Localize("#Cart_Error_CouponIsInvalid"),
                }),
              n.errors?.invalid_coupon_for_item &&
                (0, e.jsx)(M, {
                  purchase_state: c.WN.VJ,
                  notice_text: r.Q8.Localize(
                    "#Cart_Error_CouponIsInvalidForItem",
                  ),
                }),
            ],
          });
        }
        function oe(u, n) {
          return g.useMemo(() => {
            let a = new Map(),
              _ = new Map(),
              U = 1;
            const Q = (K, se) => {
              _.has(K) || _.set(K, { index: U++, footnote_text: se });
            };
            let k = !1;
            u?.cart_items?.forEach((K) => {
              let se = !!K.gift_info?.accountid_giftee;
              K.errors && (k = !0),
                K.errors?.duplicate_appids_in_cart?.length &&
                  Q(
                    c.WN.ZK,
                    r.Q8.Localize("#Cart_Error_DuplicateApps_FootNote"),
                  ),
                K.errors?.owned_appids?.length &&
                  (K.errors?.has_existing_billing_agreement
                    ? Q(
                        c.WN.Gy,
                        r.Q8.Localize(
                          "#Cart_Error_ExistingBillingAgreement_FootNote",
                        ),
                      )
                    : Q(
                        c.WN.kj,
                        r.Q8.Localize(
                          se
                            ? "#Cart_Error_AlreadyOwned_GiftFootNote"
                            : "#Cart_Error_AlreadyOwned_FootNote",
                        ),
                      )),
                K.errors?.unavailable_in_country &&
                  Q(
                    c.WN.Hp,
                    r.Q8.Localize("#Cart_Error_UnavailableCountry_FootNote"),
                  ),
                K.errors?.adult_content_restricted &&
                  Q(
                    c.WN.C4,
                    r.Q8.Localize(
                      "#Cart_Error_AdultContentRestricted_FootNote",
                    ),
                  ),
                K.errors?.commercial_license_restricted &&
                  Q(
                    c.WN.yQ,
                    r.Q8.Localize(
                      "#Cart_Error_CommercialLicenseRestricted_FootNote",
                    ),
                  ),
                K.errors?.missing_must_own_appids &&
                  Q(
                    c.WN.VL,
                    se
                      ? r.Q8.Localize(
                          "#Cart_Error_MissingMustOwnApps_FootNoteGift",
                        )
                      : r.Q8.Localize(
                          "#Cart_Error_MissingMustOwnApps_FootNote",
                        ),
                  ),
                K.warnings?.appids_in_mastersub?.length &&
                  Q(
                    c.WN.Q7,
                    r.Q8.Localize("#Cart_Error_MasterSubscription_FootNote"),
                  ),
                K.warnings?.price_has_changed &&
                  a.set(
                    c.WN.vY,
                    r.Q8.Localize("#Cart_Warning_PriceChange_FootNote"),
                  );
            });
            let ee = Array.from(a.values());
            return (
              k && ee.unshift(r.Q8.Localize("#Cart_CartLevelErrorNotice")),
              {
                rgCartLevelNotices: ee,
                mapValidateNoticesToFootnote: _,
                eDisplayType: n,
              }
            );
          }, [u, n]);
        }
      },
      97889: (G, F, t) => {
        "use strict";
        t.d(F, { y: () => B });
        var e = t(7850),
          W = t(80702),
          c = t(40358),
          D = t(64201),
          z = t.n(D);
        const y = {
          direction: "right",
          style: { width: "320px", height: `${320 * (125 / 184)}px` },
        };
        function B(T) {
          const { name_override: x, ...g } = T,
            { data: N } = (0, c.J$)(x ? void 0 : g),
            r = x ?? N?.name;
          return (0, e.jsx)(W.Q, {
            id: g,
            hoverProps: y,
            name: r,
            className: z().LineItemStoreHover,
            bShowWishlistButton: !1,
            children: r,
          });
        }
      },
      48201: (G, F, t) => {
        "use strict";
        t.d(F, { p: () => U });
        var e = t(7850),
          W = t(53080),
          c = t(85978),
          D = t(19298),
          z = t(71742),
          y = t(29392),
          B = t(48156),
          T = t(72609),
          x = t(57646),
          g = t(47610),
          N = t(27894),
          r = t(24873),
          O = t(3348),
          C = t(40358),
          P = t(68094),
          v = t(29522),
          p = t(5827),
          L = t(56925),
          l = t(54806),
          E = t(64238),
          d = t.n(E),
          I = t(90626),
          S = t(25792),
          w = t(69736),
          M = t(91405),
          q = t(63088),
          X = t(79485),
          Z = t(48366),
          re = t(60659),
          j = t(36798),
          _e = t(78280),
          ce = t(2165),
          oe = t(97889),
          u = t(86711),
          n = t.n(u),
          a = t(58162),
          _ = t(71421);
        function U(s) {
          const {
            lineItems: i,
            cartValidation: o,
            renderLineItem: f = Ee,
            scrollable: m = !1,
          } = s;
          if (!i.length) return (0, e.jsx)(ee, {});
          const A = o?.cart_items
            ? o.cart_items.reduce((h, R) => ((h[R.line_item_id] = R), h), {})
            : {};
          return (0, e.jsx)(a.uO, {
            scrollable: m,
            children: i.map((h, R) =>
              (0, e.jsx)(
                a.Vv.Provider,
                {
                  value: !m && R == 0,
                  children: h
                    ? (0, e.jsx)(S.tH, {
                        fallback: (V) => (0, e.jsx)(k, { item: h, error: V }),
                        children: (0, e.jsx)(Q, {
                          item: h,
                          validatedItem: A[h.line_item_id],
                          renderLineItem: f,
                        }),
                      })
                    : (0, e.jsx)(a.vF, {}),
                },
                h?.line_item_id || R,
              ),
            ),
          });
        }
        function Q(s) {
          const { item: i, validatedItem: o, renderLineItem: f } = s,
            m = K(i);
          if (!m) throw `Unknown line item type (${i.type})`;
          const { data: A } = (0, C.J$)(m),
            { data: h } = (0, C.U2)(m),
            { data: R } = (0, C.mr)(m),
            V = h ? (0, P.Jz)(h) : m;
          return (
            (0, C.lv)(V),
            (0, C.qI)(V),
            A && (!A.visible || R === null)
              ? (0, e.jsx)(pe, {
                  lineItemID: i.line_item_id,
                  validatedItem: o,
                  storeItem: A,
                })
              : !A || !h || !R || !o
                ? (0, e.jsx)(a.vF, {})
                : (0, e.jsx)(se, {
                    lineItem: i,
                    validatedItem: o,
                    storeItem: A,
                    displayItem: h,
                    purchaseOption: R,
                    renderLineItem: f,
                  })
          );
        }
        function k(s) {
          const { item: i, error: o } = s,
            f = (0, q.t)(i.line_item_id);
          return (0, e.jsxs)(a.Rz, {
            className: n().ErrorLineItem,
            children: [
              (0, e.jsxs)("div", {
                className: n().Left,
                children: [
                  (0, e.jsx)("div", {
                    className: n().Error,
                    children: j.Q8.Localize("#Cart_LineItem_ErrorBoundary"),
                  }),
                  (0, e.jsx)("div", {
                    className: n().Muted,
                    children: o.message,
                  }),
                ],
              }),
              (0, e.jsx)(D.Z, {
                onActivate: () => f.mutate(),
                className: n().RemoveButton,
                children: j.Q8.Localize("#Cart_Remove"),
              }),
            ],
          });
        }
        function ee() {
          return (0, e.jsx)(a.Rz, {
            className: n().ErrorLineItem,
            children: (0, e.jsx)("div", {
              className: n().Left,
              children: (0, e.jsx)("div", {
                className: n().LineItemTitle,
                children: j.Q8.Localize("#Cart_Empty"),
              }),
            }),
          });
        }
        function K(s) {
          const i = s.type;
          switch (i) {
            case y.KW.$B:
              return { packageid: s.packageid };
            case y.KW.XY:
              return { bundleid: s.bundleid };
            case y.KW.vC:
              return;
            default:
              (0, z.z_)(i, `Unhandled type: ${i}`);
          }
        }
        function se(s) {
          const {
              storeItem: i,
              displayItem: o,
              lineItem: f,
              purchaseOption: m,
              validatedItem: A,
              renderLineItem: h,
            } = s,
            R = f.line_item_id,
            V = (0, P.Jz)(i),
            te = (0, q.t)(R),
            ne = te.isPending || te.isSuccess,
            { data: J } = (0, C.by)(V),
            H = (0, v._Z)(V),
            { data: ie, isLoading: b } = (0, L.Pt)(),
            $ = I.useMemo(() => H.filter((ye) => ie?.has(ye)), [H, ie]),
            Y = I.useId();
          if (b) return (0, e.jsx)(a.vF, {});
          const ae = f.flags?.is_gift,
            ue = H.length > 0 && $.length === H.length,
            We = !ae && $.length > 0 && !ue;
          return h({
            lineItem: f,
            storeItem: i,
            validatedItem: A,
            children: (0, e.jsxs)(e.Fragment, {
              children: [
                ne && (0, e.jsx)(a.UD, {}),
                (0, e.jsxs)(D.Z, {
                  className: d()(
                    n().InnerLineItemCtn,
                    ne && n().PendingLineItem,
                  ),
                  "flow-children": "row",
                  children: [
                    (0, e.jsx)("div", {
                      className: d()(n().LineItemColumn, n().LineItemCapsule),
                      children: (0, e.jsx)(N.p, {
                        storeItem: o,
                        feature: "cart-items",
                        noImpressionTracking: !0,
                        className: n().ImageLink,
                        children: (0, e.jsx)(le, {
                          storeItem: o,
                          alt: i.name,
                          blurred: !!A.errors?.adult_content_restricted,
                        }),
                      }),
                    }),
                    (0, e.jsxs)("div", {
                      className: n().LineItemDetailsCtn,
                      children: [
                        (0, e.jsx)(a.UW, {
                          className: n().LineItemDetailsRowTop,
                          children: (0, e.jsx)("div", {
                            className: n().LineItemTitle,
                            id: Y,
                            children: i.name,
                          }),
                        }),
                        J?.is_coming_soon && (0, e.jsx)(fe, { storeItem: i }),
                        (0, e.jsxs)(de, {
                          validatedItem: A,
                          children: [
                            (0, e.jsx)(Ce, { storeItem: i, purchaseOption: m }),
                            (0, e.jsx)(he, { purchaseOption: m }),
                            (0, e.jsx)(Oe, { storeItem: i, purchaseOption: m }),
                          ],
                        }),
                        (0, e.jsx)(Ae, { validatedItem: A }),
                        We && (0, e.jsx)(Re, { appids: $ }),
                        (0, e.jsxs)(a.UW, {
                          className: n().LineItemSpaceBetween,
                          children: [
                            (0, e.jsx)("div", {
                              className: d()(
                                n().LineItemCol,
                                n().PlatformIcons,
                              ),
                              children: (0, e.jsx)(r.Dm, { id: (0, P.Jz)(o) }),
                            }),
                            (0, e.jsx)(Ie, {
                              purchaseOption: m,
                              validatedItem: A,
                            }),
                          ],
                        }),
                        (0, e.jsx)(ge, {
                          lineItem: f,
                          purchaseOption: m,
                          validatedItem: A,
                          rgAppIDs: H,
                          bAllAppsPrivate: ue,
                          fnRemoveLineItem: te.mutate,
                          accessibilityId: Y,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        function pe(s) {
          const { lineItemID: i, validatedItem: o, storeItem: f } = s,
            m = (0, q.t)(i),
            A = m.isPending;
          return (0, e.jsxs)(a.Rz, {
            placeholder: !0,
            children: [
              A && (0, e.jsx)(a.UD, {}),
              (0, e.jsxs)(D.Z, {
                className: d()(n().InnerLineItemCtn, A && n().PendingLineItem),
                "flow-children": "row",
                children: [
                  (0, e.jsx)("div", {
                    className: d()(n().LineItemColumn, n().LineItemCapsule),
                    children: (0, e.jsx)(N.p, {
                      storeItem: f,
                      noImpressionTracking: !0,
                      children: (0, e.jsx)(le, { storeItem: f }),
                    }),
                  }),
                  (0, e.jsxs)("div", {
                    className: n().LineItemDetailsCtn,
                    children: [
                      (0, e.jsx)(a.UW, {
                        className: n().LineItemDetailsRowTop,
                        children: (0, e.jsx)("div", {
                          className: n().LineItemTitle,
                          children: f?.name,
                        }),
                      }),
                      !!o && (0, e.jsx)(de, { validatedItem: o }),
                      (0, e.jsx)(a.UW, {
                        className: n().LineItemSpaceBetween,
                        children: (0, e.jsx)(D.Z, {
                          focusable: !0,
                          onActivate: () => m.mutate(),
                          className: n().RemoveLineItem,
                          children: j.Q8.Localize("#Cart_Remove"),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function le(s) {
          const { storeItem: i, alt: o, blurred: f } = s,
            { data: m } = (0, C.lv)((0, P.Jz)(i));
          let h = `${T.TS.STORE_BASE_URL}public/images/checkout/Cart_generic_header_logo.png`;
          return (
            m?.header
              ? (h =
                  T.TS.STORE_ITEM_BASE_URL +
                  m.asset_url_format.replace("${FILENAME}", m.header))
              : m?.small_capsule &&
                (h =
                  T.TS.STORE_ITEM_BASE_URL +
                  m.asset_url_format.replace("${FILENAME}", m.small_capsule)),
            (0, e.jsx)("img", {
              alt: o ?? i.name,
              className: f ? n().HeaderImgBlurred : n().HeaderImg,
              src: h,
            })
          );
        }
        function Ee(s) {
          return (0, e.jsx)(D.Z, {
            children: (0, e.jsx)(a.Rz, { children: s.children }),
          });
        }
        function de(s) {
          const { validatedItem: i, children: o } = s;
          return (0, e.jsxs)("div", {
            className: n().LineItemSpaceBetween,
            children: [(0, e.jsx)(ce.Yz, { lineItem: i }), o],
          });
        }
        function fe(s) {
          const { storeItem: i } = s,
            { data: o } = (0, C.by)((0, P.Jz)(i)),
            f = (0, O.VM)(o);
          if (!o) return null;
          let m = j.Q8.Localize("#Cart_ComingSoon", f);
          return (
            ["text_tba", "text_comingsoon"].includes(o.coming_soon_display) &&
              (m = f),
            (0, e.jsx)(a.dp, { children: m })
          );
        }
        function Ie(s) {
          const { purchaseOption: i, validatedItem: o } = s;
          let f = i?.formatted_original_price,
            m = i?.formatted_final_price,
            A = i?.discount_pct;
          const h = o.subtotal?.amount_in_cents !== i?.final_price_in_cents;
          return (
            o.original_price &&
              o.subtotal &&
              h &&
              ((f = o.original_price.formatted_amount),
              (m = o.subtotal.formatted_amount),
              (A = (0, a.dR)(o))),
            (0, e.jsx)("div", {
              className: n().LineItemRightCol,
              children: (0, e.jsx)(x.kb, {
                className: n().PriceWidget,
                formatted_orig_price: f,
                formatted_final_price: m,
                discount_percent: A,
                bHideDiscountPercentForCompliance:
                  i.hide_discount_pct_for_compliance,
                bDiscountFromCoupon: !!o.coupon_discount?.amount_in_cents,
              }),
            })
          );
        }
        function ge(s) {
          const {
              lineItem: i,
              purchaseOption: o,
              validatedItem: f,
              rgAppIDs: m,
              bAllAppsPrivate: A,
              fnRemoveLineItem: h,
              accessibilityId: R,
            } = s,
            V = (0, Z.EJ)(),
            [te] = (0, re.fg)(),
            ne =
              te?.accountid_giftee ||
              (V ? i.gift_info?.accountid_giftee : void 0),
            J = (0, _e.j4)(),
            H =
              (0, Z.ZB)() &&
              !f?.restrict_add_additional_to_cart &&
              !(0, Z.kx)(J),
            ie = f.errors?.adult_content_restricted,
            b = (0, M.A)(
              i.packageid,
              i.bundleid,
              me(o),
              void 0,
              "cart-add-additional",
            ),
            $ = I.useId(),
            Y = I.useId();
          return (0, e.jsxs)(a.UW, {
            className: n().LineItemSpaceBetween,
            children: [
              (0, e.jsx)("div", {
                className: d()(n().LineItemCol, n().PurchaseOptionPickerCtn),
                children: ne
                  ? (0, e.jsx)(Le, { recipient: ne })
                  : (0, e.jsx)(xe, {
                      lineItem: i,
                      rgAppIDs: m,
                      bAllAppsPrivate: A,
                      purchaseOption: o,
                    }),
              }),
              (0, e.jsxs)("div", {
                className: d()(n().LineItemRightCol, n().AddRemoveLinks),
                children: [
                  H &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)(_.Gq, {
                          toolTipContent: j.Q8.Localize(
                            "#Cart_LineItem_Add_Tooltip",
                          ),
                          usePointerEvents: !0,
                          children: (0, e.jsx)(D.Z, {
                            onActivate: () => !b.isPending && b.mutate(),
                            className: n().AddLineItem,
                            id: $,
                            "aria-labelledby": `${$} ${R}`,
                            children: j.Q8.Localize("#Cart_Add"),
                          }),
                        }),
                        "|",
                      ],
                    }),
                  !V &&
                    (0, e.jsx)(D.Z, {
                      onActivate: () => h(),
                      className: n().RemoveLineItem,
                      id: Y,
                      "aria-labelledby": `${Y} ${R}`,
                      children: j.Q8.Localize("#Cart_Remove"),
                    }),
                  ie &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        "| ",
                        (0, e.jsx)("a", {
                          href: `${T.TS.STORE_CHECKOUT_BASE_URL}checkout/?purchasetype=updatebillinginfo&r=cart`,
                          className: n().VerifyLineItem,
                          children: j.Q8.Localize("#Cart_Verify"),
                        }),
                        " ",
                      ],
                    }),
                ],
              }),
            ],
          });
        }
        function Le(s) {
          const { data: i } = (0, c.jn)(s.recipient),
            o = i?.public_data?.persona_name;
          return (0, e.jsx)("div", {
            className: n().GiftForNotice,
            children: j.Q8.LocalizeReact(
              "#Cart_GiftForNotice",
              o ? (0, e.jsx)("span", { className: n().Name, children: o }) : "",
            ),
          });
        }
        function Ce(s) {
          const { storeItem: i, purchaseOption: o } = s,
            f = !!o.requires_shipping && i.item_type === B.c6.RD,
            { data: m } = (0, g.DR)(f ? i.id : void 0);
          return m
            ? (0, e.jsx)(a.dp, {
                children: j.Q8.Localize(
                  "#Cart_ShippingEstimate_DeliveryDate",
                  (0, w.x)(m),
                ),
              })
            : null;
        }
        function he(s) {
          const { purchaseOption: i } = s;
          if (!i.requires_shipping) return null;
          const o = T.iA.country_code;
          return ["GB"].includes(o)
            ? (0, e.jsx)(a.dp, {
                children: (0, e.jsx)(D.Z, {
                  children: (0, e.jsx)("a", {
                    className: n().ComplianceLink,
                    target: "_blank",
                    href: "https://www.valvesoftware.com/legal/statement-of-compliance",
                    rel: "noreferrer",
                    children: j.Q8.Localize(
                      "#Cart_LineItem_Hardware_Compliance_Label",
                    ),
                  }),
                }),
              })
            : null;
        }
        var Pe = ((s) => (
            (s[(s.k_EBillingAgreementTypeInvalid = 0)] =
              "k_EBillingAgreementTypeInvalid"),
            (s[(s.k_EBillingAgreementTypeSteam = 1)] =
              "k_EBillingAgreementTypeSteam"),
            (s[(s.k_EBillingAgreementTypeGame = 2)] =
              "k_EBillingAgreementTypeGame"),
            s
          ))(Pe || {}),
          ve = ((s) => (
            (s[(s.k_ETimeUnitNone = 0)] = "k_ETimeUnitNone"),
            (s[(s.k_ETimeUnitSecond = 1)] = "k_ETimeUnitSecond"),
            (s[(s.k_ETimeUnitMinute = 2)] = "k_ETimeUnitMinute"),
            (s[(s.k_ETimeUnitHour = 3)] = "k_ETimeUnitHour"),
            (s[(s.k_ETimeUnitDay = 4)] = "k_ETimeUnitDay"),
            (s[(s.k_ETimeUnitWeek = 5)] = "k_ETimeUnitWeek"),
            (s[(s.k_ETimeUnitMonth = 6)] = "k_ETimeUnitMonth"),
            (s[(s.k_ETimeUnitYear = 7)] = "k_ETimeUnitYear"),
            s
          ))(ve || {});
        const De = {
          1: "Second",
          2: "Minute",
          3: "Hour",
          4: "Day",
          5: "Week",
          6: "Month",
          7: "Year",
        };
        function Oe(s) {
          const { storeItem: i, purchaseOption: o } = s;
          if (i.item_type !== B.c6.RD) return null;
          const f = o.recurrence_info;
          if (!f) return null;
          let m = "#Package";
          f.billing_agreement_type === 2 && (m = "#GameBillingPackage"),
            o.formatted_final_price && o.discount_pct && (m += "WithDiscount");
          const h = De[f.renewal_time_unit],
            R = m + "CostIncludesSubscriptionBy" + h;
          return (0, e.jsx)(a.dp, {
            children: j.Q8.Localize(
              R,
              o.formatted_final_price,
              f.formatted_renewal_price,
              f.renewal_time_period,
              o.discount_pct,
            ),
          });
        }
        function me(s) {
          return s.user_can_purchase_as_gift;
        }
        function Me(s) {
          return !s.is_commercial_license && !s.requires_shipping;
        }
        function xe(s) {
          const {
              lineItem: i,
              rgAppIDs: o,
              bAllAppsPrivate: f,
              purchaseOption: m,
            } = s,
            A = (0, X.C)(),
            h = (0, L.DT)(),
            R = (0, Z.EJ)(),
            { data: V } = (0, c.jn)(
              i.gift_info?.accountid_giftee
                ? i.gift_info.accountid_giftee
                : null,
            ),
            te = !me(m) || R,
            ne = !Me(m);
          let J = [
            {
              data: "myself",
              label: j.Q8.Localize("#Cart_LineItemOptions_Myself"),
            },
          ];
          if (
            (ne ||
              J.push({
                data: "private",
                label: j.Q8.Localize("#Cart_LineItemOptions_Privately"),
                tooltip: j.Q8.Localize("#Cart_LineItemOptions_PrivateTooltip"),
              }),
            !te)
          ) {
            const b = V?.public_data?.persona_name;
            i.gift_info?.accountid_giftee && b
              ? J.push({
                  data: "gift",
                  label: j.Q8.Localize(
                    "#Cart_LineItemOptions_GiftForPersona",
                    b,
                  ),
                })
              : J.push({
                  data: "gift",
                  label: j.Q8.Localize("#Cart_LineItemOptions_Gift"),
                });
          }
          let H = i.flags?.is_gift ? "gift" : "myself";
          if ((H === "myself" && f && (H = "private"), J.length === 1))
            return null;
          const ie = (b) => {
            if (H === b.data) return;
            const $ = (ae) => h.mutate({ rgAppIDs: o, bPrivate: ae }),
              Y = (ae) =>
                A.mutate({
                  lineItemID: i.line_item_id,
                  lineItemFlags: { ...i.flags, is_gift: ae },
                  giftInfo: ae ? i.gift_info : void 0,
                });
            H === "private" ? $(!1) : H === "gift" && Y(!1),
              b.data === "private" ? $(!0) : b.data === "gift" && Y(!0);
          };
          return (0, e.jsx)(W.l6, {
            onSelectionChange: ie,
            selectedValue: J.find((b) => b.data === H) ?? null,
            options: J,
            getOptionLabel: (b) =>
              b.tooltip
                ? (0, e.jsx)(_.Gq, {
                    toolTipContent: b.tooltip,
                    usePointerEvents: !0,
                    children: (0, e.jsx)("span", { children: b.label }),
                  })
                : b.label,
            size: "1",
            placement: "bottom-start",
          });
        }
        const Ae = I.memo(function (i) {
          const { validatedItem: o } = i,
            f = o.included_packageids ?? [],
            m = (0, p.eG)(),
            A = (0, l.E)({
              queries: f.map((R) => (0, C.mt)(m, { packageid: R })),
            }),
            h = [
              ...new Set(
                A.map((R) => R.data)
                  .filter((R) => !!R)
                  .flat(),
              ),
            ];
          return !h.length || (h.length == 1 && !o.item_id?.bundleid)
            ? null
            : (0, e.jsxs)(a.UW, {
                text: !0,
                children: [
                  (0, e.jsxs)("span", {
                    children: [
                      j.Q8.LocalizePlural("#Cart_IncludesItems", h.length),
                      ":",
                      " ",
                    ],
                  }),
                  h.map((R, V) =>
                    (0, e.jsxs)(
                      I.Fragment,
                      {
                        children: [
                          V > 0 && ", ",
                          (0, e.jsx)(oe.y, { appid: R }),
                        ],
                      },
                      R,
                    ),
                  ),
                ],
              });
        });
        function Re(s) {
          const { appids: i } = s,
            o = i.map((f, m) =>
              (0, e.jsxs)(
                I.Fragment,
                { children: [m > 0 && ", ", (0, e.jsx)(oe.y, { appid: f })] },
                f,
              ),
            );
          return (0, e.jsxs)(a.UW, {
            children: [
              (0, e.jsxs)("span", {
                children: [
                  j.Q8.Localize("#Cart_Notice_SomeAppsPrivate"),
                  "\xA0",
                ],
              }),
              o,
            ],
          });
        }
      },
      58162: (G, F, t) => {
        "use strict";
        t.d(F, {
          Rz: () => C,
          UD: () => v,
          UW: () => r,
          Vv: () => O,
          dR: () => L,
          dp: () => p,
          uO: () => N,
          vF: () => P,
        });
        var e = t(7850),
          W = t(19298),
          c = t(78365),
          D = t(7967),
          z = t(64238),
          y = t.n(z),
          B = t(90626),
          T = t(85599),
          x = t(86711),
          g = t.n(x);
        function N(l) {
          const { scrollable: E = !1, children: d } = l,
            I = E ? D.MS : W.Z;
          return (0, e.jsx)(I, {
            className: y()(g().LineItemsCtn, E && g().Scrollable),
            focusableIfEmpty: !0,
            children: d,
          });
        }
        function r(l) {
          const { text: E, children: d, className: I, noWrap: S } = l;
          return (0, e.jsx)(W.Z, {
            "flow-children": "row",
            className: y()(
              g().LineItemDetailsRow,
              E && g().Text,
              S && g().NoWrap,
              I,
            ),
            children: d,
          });
        }
        const O = B.createContext(!1);
        function C(l) {
          const { placeholder: E, className: d, children: I } = l,
            S = B.useContext(O);
          return (0, e.jsx)(c.YZ, {
            className: y()(
              g().LineItemWrapper,
              E && g().LineItemPlaceholder,
              d,
            ),
            fnScrollIntoViewHandler: S
              ? () => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              : void 0,
            children: I,
          });
        }
        function P() {
          return (0, e.jsx)(C, {
            placeholder: !0,
            children: (0, e.jsx)(v, {}),
          });
        }
        function v() {
          return (0, e.jsx)("div", {
            className: g().LoadingThrobber,
            children: (0, e.jsx)(T.t, {
              size: "medium",
              position: "center",
              msDelayAppear: 250,
            }),
          });
        }
        function p(l) {
          const { children: E } = l;
          return (0, e.jsx)(r, {
            text: !0,
            children: (0, e.jsx)("div", {
              className: g().Warning,
              children: E,
            }),
          });
        }
        function L(l) {
          if (l.coupon_applied) return l.coupon_applied.discount_pct;
          const E = parseInt(l.original_price.amount_in_cents),
            d = parseInt(l.subtotal.amount_in_cents);
          return Math.min(99, Math.floor(((E - d) / E) * 100 + 0.5));
        }
      },
      87913: (G, F, t) => {
        "use strict";
        t.d(F, { MT: () => l, g7: () => v, p2: () => L, xz: () => P });
        var e = t(35038),
          W = t(19563),
          c = t(8173),
          D = t(48156),
          z = t(68312),
          y = t(5827),
          B = t(63667),
          T = t(72609),
          x = t(80902),
          g = t(48366),
          N = t(60659),
          r = t(78280),
          O = t(83665);
        const C = {
            include_basic_info: !0,
            include_assets: !0,
            include_platforms: !0,
            include_release: !0,
            include_included_items: !0,
          },
          P = {
            ...C,
            include_included_items: !0,
            include_all_purchase_options: !0,
            included_item_data_request: C,
          };
        function v() {
          const d = (0, z.KV)(),
            I = (0, r.j4)(),
            [S] = (0, N.fg)(),
            { storeBrowseContext: w, cacheStoreItemData: M } = (0, y.yn)();
          return (0, x.I)(p(d, I, w, S, M));
        }
        function p(d, I, S, w, M) {
          return {
            queryKey: (0, O.m4)(I, w),
            queryFn: async () => E(d, I, S, w, P, M),
            staleTime: 1 / 0,
            enabled: T.iA.logged_in || !(0, g.c2)(I),
          };
        }
        function L(d) {
          return !d?.cart_items?.length || d.cart_items.length === 0
            ? !1
            : d.cart_items.every(
                ({ store_item: I }) =>
                  I?.item_type == D.c6.RD &&
                  !!(I.self_purchase_option || I.best_purchase_option)
                    ?.requires_shipping,
              );
        }
        function l(d) {
          return !d?.cart_items?.length || d.cart_items.length === 0
            ? !1
            : d.cart_items.every(
                ({ store_item: I, gift_info: S }) =>
                  I?.item_type == D.c6.RD &&
                  (!!S?.accountid_giftee || !!S?.email_giftee),
              );
        }
        async function E(d, I, S, w, M, q) {
          const X = e.w.Init(W.vL);
          (0, g.kx)(I) || (0, g.uU)(I)
            ? (X.Body().set_gidshoppingcart(I.gid),
              w && X.Body().set_gift_info(c.$z.fromObject(w)))
            : (0, g.sb)(I) && X.Body().set_gidreplayoftransid(I.gid),
            (0, B.rV)(S, X),
            M && (0, B.Bn)(X, M);
          const Z = await W._o.ValidateCart(d, X);
          if (
            (Z.BSuccess() ||
              console.warn(
                `Failed to validate shopping cart: ${Z.GetEResult()}`,
              ),
            M && q)
          )
            for (const re of Z.Body().cart_items()) q(re.store_item(), M);
          return Z.Body().toObject();
        }
      },
      38580: (G, F, t) => {
        "use strict";
        t.d(F, { Dv: () => x });
        var e = t(20117),
          W = t(99412),
          c = t(35038),
          D = t(10335),
          z = t(27386),
          y = t(42993),
          B = t(68312),
          T = t(80902);
        function x() {
          const O = (0, B.KV)(),
            C = (0, y.LH)();
          return (0, T.I)(g(O, C));
        }
        function g(O, C) {
          return {
            queryKey: ["GetFriendsList", C],
            queryFn: async () => {
              const P = c.w.Init(D.pH);
              return (await D.DF.GetFriendsList(O, P))
                .Body()
                .friendslist()
                ?.friends()
                ?.filter((p) => {
                  if (!p.ulfriendid()) return !1;
                  const L = new e.b2(p.ulfriendid());
                  return (
                    (p.efriendrelationship() == W._UC ||
                      p.efriendrelationship() == W.Ec7) &&
                    L.BIsIndividualAccount()
                  );
                })
                .map((p) => p.ulfriendid());
            },
            enabled: !!C,
          };
        }
        function N() {
          const O = useActiveServiceTransport(),
            C = useActiveAccount();
          return useQuery(r(O, C));
        }
        function r(O, C) {
          return {
            queryKey: ["GetFriendNicknameMap", C],
            queryFn: async () => {
              const P = CProtoBufMsg.Init(CPlayer_GetNicknameList_Request),
                v = await PlayerService.GetNicknameList(O, P);
              return new Map(
                v
                  .Body()
                  .toObject()
                  ?.nicknames?.map((p) => [p.accountid, p.nickname]),
              );
            },
          };
        }
      },
      60097: (G) => {
        G.exports = {
          strMaxCartPartResponsiveWidth: "840px",
          CartCard: "_4SG2MjCMpIRt6W-Zj4Oxm",
          HeaderNotices: "_2BtczALVCY2zzCLnj8oga9",
          FooterNoticesHeader: "_2itvgQZbn40lY_jj5sG8it",
          MustFix: "_1SFErQFwOLmnLCBVlq9zxK",
          FooterNotice: "_1WMk6EdVNns2fKuDOCrBX3",
          NoticeIndex: "_3N9Ik0sMA90E7jGHJqycWH",
        };
      },
      64201: (G) => {
        G.exports = { LineItemStoreHover: "_3DfrtekI1PCxuXbfj85Zwp" };
      },
      86711: (G) => {
        G.exports = {
          strMaxCartPartResponsiveWidth: "840px",
          CartCard: "_1MfAwU630QwDv6FuV9c_Dr",
          LineItemsCtn: "_3ypRUtQoOfOrCsyHlzfGm4",
          StoreSalePriceBox: "_5m_q0MLlnLkt_KBd7iMbO",
          StoreSaleDiscountedPriceCtn: "_1ZzX6NkuELfMhPL0SJCQSK",
          Scrollable: "_2A58_XmT-KCSwE_kh-xntF",
          LineItemWrapper: "XjPmFc2t_i1DAuEXEbIX",
          fadeIn: "xtUORpc8Xy9Hs_tdAIitT",
          ImageLink: "fGORfr7ZEqjO3WrgO6A4t",
          LineItemCapsule: "_2Xz_WXO8PfREP4c9ZWAuNg",
          HeaderImg: "_37_1K2XQrVBwncWFXTcpMP",
          HeaderImgBlurred: "_3hT2r7Sb_Yx9PdYSB0rjpl",
          LineItemPlaceholder: "_1_mV-2sC0r25eLrKyufPRK",
          AddRemoveLinks: "_2Agry3evdkG3gKPyhNf7Hz",
          RemoveLineItem: "_3YCgcpoCojlbS6DvkNsG2J",
          AddLineItem: "_2qvlyUCwtTBUslo1Z7-RlG",
          VerifyLineItem: "_2HO_qGTXtEZz_EF60S6hfS",
          LineItemRightCol: "ysGS-IPPWEkwN-O5rr-0V",
          InnerLineItemCtn: "_3F0SnUeC_obtI4WyQtijAa",
          LineItemDetailsCtn: "_3GKl4T2MbvnGPvRzyXC5nQ",
          LineItemCol: "HhD4RK0A4phOlAwZQDckk",
          LineItemDetailsRow: "_1wLomHB2PWPNx7TsNYpdtm",
          Text: "_2aGDkEAUaGvF4KHHZRRkEj",
          NoWrap: "c0VFjXtN_fgP-PR6wQe66",
          ComplianceLink: "_1Gqg5Ajp0R5LqzbJ4Wtecz",
          LineItemDetailsRowTop: "_1aXXp4afkXP3Ez03MjTY3D",
          LineItemSpaceBetween: "_3L6hUlrzXOezye2BqWz-T7",
          LineItemTitle: "EflKs0JjldhDSxbUBaiOp",
          LineItemPricingOptions: "_2BTcfC4-tZENmEAXbVzKA7",
          PlatformIcons: "_2FgjpNRRiZkDXAB53vFFOh",
          PurchaseOptionPickerCtn: "_2iq-WR8SMiZcAwSnm-8-eE",
          AddLineItemCtn: "_3-GZz-m5p_fxd2pqPGK6u9",
          AddLineItemIcon: "_4Uz7u01J6OO_P0hhfb0Kc",
          PendingLineItem: "_3w61e3curroiu7lCOKvLN8",
          FlexRow: "_2Y0WvaYzp-79xegxjV_kQI",
          PriceWidget: "_3_q-F_MXXBH_JQPJvWznnc",
          Warning: "_1_vNtL4JTtFLtSgY25zz_5",
          LineItemNoticeAppsCtn: "_2bBPt2vaBRl7xTiWEkA-PR",
          LoadingThrobber: "_9ECtylscKVGNrQpLPlds0",
          WhiteText: "_1CYn6Bwc5kuZ25-Gyb9btE",
          ErrorLineItem: "_2Qnb-DOaU8BbFWOUBG3hs1",
          Left: "Twv2unKjIVTB3vmgieygi",
          Error: "_2LPurUnl-MyMX6q6B0uNX",
          Muted: "_3efIWtJm5nAuQLmq9N3nJd",
          GiftForNotice: "tKoWmz4HQdpU6S-Fq6IEh",
          Name: "_2BZrRaucjIMeqixZMVlakn",
          RemoveButton: "_1j8t9ZjX3tyKrSBnkY6IeG",
        };
      },
    },
  ]);
})();
