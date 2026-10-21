/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [39233],
    {
      63088: (Q, F, t) => {
        "use strict";
        t.d(F, { Z: () => v, t: () => x });
        var e = t(35038),
          y = t(29392),
          l = t(36053),
          D = t(68312),
          z = t(75233),
          W = t(51614),
          N = t(48366),
          T = t(9843),
          I = t(78280),
          P = t(83665),
          j = t(20125);
        async function a(O, o, d) {
          if ((0, N.c2)(o)) {
            const m = e.w.Init(y.tj);
            m.Body().set_line_item_id(d);
            const g = await y.t8.RemoveItemFromCart(O, m);
            return (0, j.WZ)(), g.Body().toObject();
          } else {
            const m = e.w.Init(l.VJ);
            m.Body().set_gidlineitems([d]), m.Body().set_gidshoppingcart(o.gid);
            const g = await l.Q2.RemoveLineItems(O, m);
            return (0, j.WZ)(), g.Body().toObject();
          }
        }
        function x(O) {
          const o = (0, D.KV)(),
            d = (0, z.jE)(),
            m = (0, I.j4)();
          return (0, W.n)({
            mutationFn: async () => await a(o, m, O),
            onSuccess: (g) => {
              "cart" in g ? (0, P.LN)(d, m, g.cart) : (0, P.Cd)(d, m);
            },
          });
        }
        async function L(O, o) {
          if ((0, N.c2)(o)) {
            const d = e.w.Init(y.HK);
            return (await y.t8.DeleteCart(O, d)).BSuccess();
          } else {
            const d = await (0, T.d0)(O, o);
            if (d && d.line_items && d.line_items.length) {
              const m = e.w.Init(l.VJ);
              return (
                m
                  .Body()
                  .set_gidlineitems(
                    d.line_items.map(({ line_item_id: E }) => E),
                  ),
                m.Body().set_gidshoppingcart(o.gid),
                (await l.Q2.RemoveLineItems(O, m)).BSuccess()
              );
            }
            return !1;
          }
        }
        function v() {
          const O = (0, D.KV)(),
            o = (0, z.jE)(),
            d = (0, I.j4)();
          return (0, W.n)({
            mutationFn: async () => await L(O, d),
            onSuccess: () => (0, P.Cd)(o, d),
          });
        }
      },
      79485: (Q, F, t) => {
        "use strict";
        t.d(F, { C: () => x });
        var e = t(35038),
          y = t(29392),
          l = t(8173),
          D = t(72609),
          z = t(68312),
          W = t(75233),
          N = t(51614),
          T = t(78280),
          I = t(83665),
          P = t(48366),
          j = t(36053);
        async function a(L, v, O, o, d, m) {
          if ((0, P.c2)(v)) {
            const g = e.w.Init(y.Bk);
            g.Body().set_line_item_id(O),
              g.Body().set_user_country(D.iA.country_code),
              d && g.Body().set_gift_info(l.$z.fromObject(d)),
              o && g.Body().set_flags(y.Eo.fromObject(o)),
              m && g.Body().set_apply_gidcoupon(m);
            const E = await y.t8.ModifyLineItem(L, g);
            return (
              E.BSuccess() ||
                console.warn(`Failed to update gift info: ${E.GetEResult()}`),
              [E.GetEResult(), E.Body().toObject()]
            );
          } else {
            const g = e.w.Init(j.ic);
            g.Body().set_gidlineitem(O),
              g.Body().set_gidshoppingcart(v.gid),
              d
                ? g.Body().set_gift_info(l.$z.fromObject(d))
                : o?.is_gift &&
                  g
                    .Body()
                    .set_gift_info(
                      l.$z.fromObject({
                        accountid_giftee: 0,
                        email_giftee: "",
                      }),
                    );
            const E = await j.Q2.ModifyLineItem(L, g);
            return (
              E.BSuccess() ||
                console.warn(
                  `Failed to update gift info in anonymous cart: ${E.GetEResult()}`,
                ),
              E.Body().toObject()
            );
          }
        }
        function x(L) {
          const v = (0, T.j4)(),
            O = (0, z.KV)(),
            o = (0, W.jE)(),
            d = (0, I.GO)(v);
          return (0, N.n)({
            mutationFn: (m) =>
              a(O, v, m.lineItemID, m.lineItemFlags, m.giftInfo, m.gidCoupon),
            onMutate: async (m) => {
              await o.cancelQueries({ queryKey: d });
              const g = o.getQueryData(d);
              return (
                o.setQueryData(d, (E) => ({
                  ...(E ?? {}),
                  line_items:
                    E?.line_items?.map((C) =>
                      C.line_item_id !== m.lineItemID
                        ? C
                        : {
                            ...C,
                            flags: m.lineItemFlags || C.flags,
                            gift_info: m.giftInfo || C.gift_info,
                          },
                    ) ?? [],
                })),
                { previousCart: g }
              );
            },
            onSuccess: (m) => {
              "cart" in m ? (0, I.LN)(o, v, m.cart) : (0, I.Cd)(o, v);
            },
            onError: (m, g, E) => {
              E?.previousCart && o.setQueryData(d, E.previousCart);
            },
          });
        }
      },
      60659: (Q, F, t) => {
        "use strict";
        t.d(F, { Ez: () => W, fg: () => N, iZ: () => T });
        var e = t(7850),
          y = t(78280),
          l = t(90626);
        const D = l.createContext({ step: "initial", setStep: () => {} });
        function z() {
          return (0, l.useContext)(D);
        }
        function W() {
          const I = z();
          return [I.step, I.setStep];
        }
        function N() {
          const I = z();
          return [I.cartWideGiftInfo, I.onCartWideGiftInfoChange];
        }
        function T(I) {
          const {
              step: P,
              setStep: j,
              cartID: a,
              cartWideGiftInfo: x,
              onCartWideGiftInfoChange: L,
              children: v,
            } = I,
            O = l.useMemo(
              () => ({
                step: P,
                setStep: j,
                cartWideGiftInfo: x,
                onCartWideGiftInfoChange: L,
              }),
              [P, j, x, L],
            );
          return (0, e.jsx)(D.Provider, {
            value: O,
            children: (0, e.jsx)(y.h3, { cartID: a, children: v }),
          });
        }
      },
      2165: (Q, F, t) => {
        "use strict";
        t.d(F, {
          LP: () => g,
          WA: () => O,
          Yz: () => w,
          ZZ: () => m,
          wW: () => d,
        });
        var e = t(7850),
          y = t(38580),
          l = t(8173),
          D = t(72609),
          z = t(20117),
          W = t(40358),
          N = t(68094),
          T = t(64238),
          I = t.n(T),
          P = t(90626),
          j = t(97889),
          a = t(36798),
          x = t(60097),
          L = t.n(x),
          v = t(58162),
          O = ((u) => (
            (u[(u.k_ECartDisplayType_Unknown = 0)] =
              "k_ECartDisplayType_Unknown"),
            (u[(u.k_ECartDisplayType_Modal = 1)] = "k_ECartDisplayType_Modal"),
            (u[(u.k_ECartDisplayType_FullPage = 2)] =
              "k_ECartDisplayType_FullPage"),
            u
          ))(O || {});
        const o = P.createContext({
          rgCartLevelNotices: [],
          mapValidateNoticesToFootnote: new Map(),
          eDisplayType: 0,
        });
        function d(u) {
          const { validateCart: s, eDisplayType: r, children: c } = u,
            U = oe(s, r);
          return (0, e.jsx)(o.Provider, { value: U, children: c });
        }
        function m() {
          const { rgCartLevelNotices: u } = P.useContext(o);
          return !u || !u.length
            ? null
            : u.length == 1
              ? (0, e.jsx)("div", {
                  className: x.HeaderNotices,
                  children: a.Q8.Localize("#Cart_CartLevelErrorFormat", u[0]),
                })
              : (0, e.jsxs)("div", {
                  className: x.HeaderNotices,
                  children: [
                    (0, e.jsx)("div", {
                      children: a.Q8.Localize("#Cart_CartLevelErrorMultiple"),
                    }),
                    (0, e.jsx)("ul", {
                      children: u.map((s, r) =>
                        (0, e.jsx)("li", { children: s }, r),
                      ),
                    }),
                  ],
                });
        }
        function g(u) {
          const { validateCart: s } = u,
            { mapValidateNoticesToFootnote: r } = P.useContext(o);
          if (!r || !r.size) return null;
          const U = (s?.cart_items || []).every((ee) => !ee.errors),
            S = U
              ? a.Q8.Localize("#Cart_FooterNoticeHeader_Warning")
              : a.Q8.Localize("#Cart_FooterNoticeHeader_MustFix"),
            k = I()(x.FooterNoticesHeader, !U && x.MustFix);
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsx)("div", { className: k, children: S }),
              Array.from(r).map(([ee, K]) =>
                (0, e.jsx)(E, { notice: K }, K.index),
              ),
            ],
          });
        }
        function E(u) {
          const { notice: s } = u;
          return (0, e.jsxs)("div", {
            className: x.FooterNotice,
            children: [
              (0, e.jsx)("div", {
                className: x.NoticeIndex,
                children: (0, e.jsx)("sup", { children: s.index }),
              }),
              (0, e.jsx)("div", { children: s.footnote_text }),
            ],
          });
        }
        function C(u) {
          return P.useContext(o)?.mapValidateNoticesToFootnote.get(u)?.index;
        }
        function V() {
          return P.useContext(o)?.eDisplayType ?? 0;
        }
        function w(u) {
          const { lineItem: s } = u,
            r = V();
          let c = [],
            U = !!s.gift_info?.accountid_giftee;
          return (
            s.errors?.duplicate_appids_in_cart?.length &&
              c.push(
                (0, e.jsx)(
                  M,
                  {
                    purchase_state: l.WN.ZK,
                    notice_text: a.Q8.Localize(
                      "#Cart_Error_DuplicateApps_LineItem",
                    ),
                    appids: s.errors.duplicate_appids_in_cart,
                  },
                  "duplicate_appids",
                ),
              ),
            c.push((0, e.jsx)(_e, { lineItem: s }, "owned_apps")),
            s.errors?.unavailable_in_country &&
              c.push(
                (0, e.jsx)(
                  M,
                  {
                    purchase_state: l.WN.Hp,
                    notice_text: a.Q8.Localize(
                      "#Cart_Error_UnavailableCountry_LineItem",
                    ),
                  },
                  "unavailable_in_country",
                ),
              ),
            s.errors?.adult_content_restricted &&
              c.push(
                (0, e.jsx)(
                  M,
                  {
                    purchase_state: l.WN.C4,
                    notice_text: a.Q8.Localize(
                      "#Cart_Error_AdultContentRestricted_LineItem",
                    ),
                  },
                  "adult_content_restricted",
                ),
              ),
            s.errors?.commercial_license_restricted &&
              c.push(
                (0, e.jsx)(
                  M,
                  {
                    purchase_state: l.WN.yQ,
                    notice_text: a.Q8.Localize(
                      "#Cart_Error_CommercialLicenseRestricted_LineItem",
                    ),
                  },
                  "commercial_license_restricted",
                ),
              ),
            s.errors?.gift_not_valid_for_recipient_region &&
              c.push(
                (0, e.jsx)(
                  M,
                  {
                    purchase_state: l.WN._o,
                    notice_text: a.Q8.Localize(
                      "#Cart_Error_GiftRecipientInvalid",
                    ),
                  },
                  "gift_recipient_invalid",
                ),
              ),
            c.push((0, e.jsx)(ce, { lineItem: s }, "coupon_notices")),
            s.errors?.too_many_in_cart &&
              c.push(
                (0, e.jsx)(
                  M,
                  {
                    purchase_state: l.WN.YF,
                    notice_text: a.Q8.Localize("#Cart_Error_TooManyInCart"),
                  },
                  "too_many_in_cart",
                ),
              ),
            s.errors?.missing_must_own_appids?.length &&
              c.push(
                (0, e.jsx)(
                  M,
                  {
                    purchase_state: l.WN.VL,
                    notice_text: U
                      ? a.Q8.Localize(
                          "#Cart_Error_MissingMustOwnApps_GiftLineItem",
                        )
                      : a.Q8.Localize(
                          "#Cart_Error_MissingMustOwnApps_LineItem",
                        ),
                    appids: s.errors.missing_must_own_appids,
                  },
                  "missing_must_own_appids",
                ),
              ),
            s.warnings?.appids_in_mastersub?.length &&
              c.push(
                (0, e.jsx)(
                  M,
                  {
                    purchase_state: l.WN.Q7,
                    notice_text: a.Q8.Localize(
                      "#Cart_Error_MasterSubscription_LineItem",
                    ),
                    appids: s.warnings.appids_in_mastersub.flatMap((S) =>
                      S.cart_appid ? [S.cart_appid] : [],
                    ),
                  },
                  "appids_in_mastersub",
                ),
              ),
            s.warnings?.owned_appids?.length &&
              c.push(
                (0, e.jsx)(
                  M,
                  {
                    purchase_state: l.WN.fZ,
                    notice_text: a.Q8.Localize(
                      "#Cart_Warning_AlreadyOwned_LineItem",
                    ),
                    appids: s.warnings.owned_appids,
                  },
                  "owned_appids",
                ),
              ),
            s.warnings?.owned_appids_extra_copy?.length &&
              c.push(
                (0, e.jsx)(
                  M,
                  {
                    purchase_state: l.WN.Vx,
                    notice_text: a.Q8.Localize(
                      "#Cart_Warning_ExtraCopies_LineItem",
                    ),
                    appids: s.warnings.owned_appids_extra_copy,
                  },
                  "owned_appids_extra_copy",
                ),
              ),
            s.warnings?.price_has_changed &&
              c.push(
                (0, e.jsx)(
                  M,
                  {
                    purchase_state: l.WN.vY,
                    notice_text: a.Q8.Localize(
                      "#Cart_Warning_PriceChange_LineItem",
                    ),
                  },
                  "price_has_changed",
                ),
              ),
            s.warnings?.non_refundable &&
              c.push(
                (0, e.jsx)(
                  M,
                  {
                    purchase_state: l.WN.YQ,
                    notice_text: a.Q8.Localize(
                      "#Cart_Warning_NoRefund_LineItem",
                    ),
                  },
                  "non_refundable",
                ),
              ),
            s.warnings?.gift_recipient_higher_price &&
              c.push(
                (0, e.jsx)(
                  M,
                  {
                    purchase_state: l.WN.j6,
                    notice_text: a.Q8.Localize(
                      "#Cart_Warning_RecipientHigherPrice",
                    ),
                  },
                  "gift_recipient_higher_price",
                ),
              ),
            c.push((0, e.jsx)(re, { lineItem: s }, "available_cheaper")),
            U &&
              r !== 2 &&
              c.push(
                (0, e.jsx)(
                  B,
                  { nGifteeAccountID: s.gift_info.accountid_giftee },
                  "non_friend_gift",
                ),
              ),
            c
          );
        }
        function M(u) {
          const { purchase_state: s, notice_text: r, appids: c } = u,
            U = C(s),
            k = V() === 2 && !!U;
          return (0, e.jsxs)(v.dp, {
            children: [
              r,
              k && (0, e.jsx)("sup", { children: U }),
              " ",
              (0, e.jsx)(X, { rgAppIDs: c ?? [] }),
            ],
          });
        }
        function q(u) {
          const { errors: s, warnings: r } = u;
          return [
            ...(s?.duplicate_appids_in_cart ?? []),
            ...(s?.missing_must_own_appids ?? []),
            ...(s?.owned_appids ?? []),
            ...(r?.appids_in_mastersub ?? []).flatMap((c) =>
              c.cart_appid ? [c.cart_appid] : [],
            ),
            ...(r?.owned_appids ?? []),
            ...(r?.owned_appids_extra_copy ?? []),
          ];
        }
        function X(u) {
          const { rgAppIDs: s } = u;
          return !s || s.length == 0
            ? null
            : s.map((r, c) =>
                (0, e.jsx)(
                  Z,
                  { appid: r, last: c >= s.length - 1 },
                  `${r}_${c}`,
                ),
              );
        }
        function Z(u) {
          const { appid: s, last: r } = u,
            { data: c } = (0, W.J$)({ appid: s });
          return c
            ? (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)(j.y, { appid: s, name_override: c.name }),
                  !r && (0, e.jsx)(e.Fragment, { children: ", " }),
                ],
              })
            : null;
        }
        function re(u) {
          const { lineItem: s } = u,
            { data: r } = (0, W.mr)(s.item_id),
            { data: c } = (0, W.EO)(s.item_id);
          if (
            !(
              !!!s.gift_info?.accountid_giftee &&
              !!r &&
              !!c &&
              !(0, N.vk)(r, c)
            )
          )
            return null;
          const k = c.packageid
            ? { packageid: c.packageid }
            : { bundleid: c.bundleid };
          return (0, e.jsx)(v.dp, {
            children: a.Q8.LocalizeReact(
              "#Cart_Warning_AvailableAtALowerPrice",
              (0, e.jsx)(j.y, { ...k, name_override: c.purchase_option_name }),
            ),
          });
        }
        function B(u) {
          const { nGifteeAccountID: s } = u,
            r = z.b2
              .InitFromAccountID(s, D.TS.EUNIVERSE)
              .ConvertTo64BitString(),
            { data: c } = (0, y.Dv)();
          return P.useMemo(() => !c || c.includes(r), [c, r]) || !D.iA.logged_in
            ? null
            : (0, e.jsx)(v.dp, {
                children: a.Q8.Localize("#Cart_Warning_GiftToNonFriend"),
              });
        }
        function _e(u) {
          const { lineItem: s } = u;
          if (!s.errors?.owned_appids?.length) return null;
          let r = !!s.gift_info?.accountid_giftee;
          if (s.errors?.has_existing_billing_agreement)
            return (0, e.jsx)(M, {
              purchase_state: l.WN.Gy,
              notice_text: a.Q8.Localize(
                "#Cart_Error_ExistingBillingAgreement",
              ),
            });
          {
            const c = (s.store_item?.included_appids?.length ?? 0) > 1;
            let U = a.Q8.Localize(
              r
                ? "#Cart_Error_AlreadyOwned_GiftLineItem_Game"
                : "#Cart_Error_AlreadyOwned_LineItem_Game",
            );
            return (
              c &&
                (U = a.Q8.Localize(
                  r
                    ? "#Cart_Error_AlreadyOwned_GiftLineItem"
                    : "#Cart_Error_AlreadyOwned_LineItem",
                )),
              (0, e.jsx)(M, {
                purchase_state: l.WN.kj,
                notice_text: U,
                appids: c ? s.errors.owned_appids : void 0,
              })
            );
          }
        }
        function ce(u) {
          const { lineItem: s } = u;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              s.errors?.coupon_exclusive_promo &&
                (0, e.jsx)(M, {
                  purchase_state: l.WN.rp,
                  notice_text: a.Q8.Localize(
                    "#Cart_Error_CouponIsExclusivePromo",
                  ),
                }),
              s.errors?.invalid_coupon &&
                (0, e.jsx)(M, {
                  purchase_state: l.WN.p_,
                  notice_text: a.Q8.Localize("#Cart_Error_CouponIsInvalid"),
                }),
              s.errors?.invalid_coupon_for_item &&
                (0, e.jsx)(M, {
                  purchase_state: l.WN.VJ,
                  notice_text: a.Q8.Localize(
                    "#Cart_Error_CouponIsInvalidForItem",
                  ),
                }),
            ],
          });
        }
        function oe(u, s) {
          return P.useMemo(() => {
            let r = new Map(),
              c = new Map(),
              U = 1;
            const S = (K, ne) => {
              c.has(K) || c.set(K, { index: U++, footnote_text: ne });
            };
            let k = !1;
            u?.cart_items?.forEach((K) => {
              let ne = !!K.gift_info?.accountid_giftee;
              K.errors && (k = !0),
                K.errors?.duplicate_appids_in_cart?.length &&
                  S(
                    l.WN.ZK,
                    a.Q8.Localize("#Cart_Error_DuplicateApps_FootNote"),
                  ),
                K.errors?.owned_appids?.length &&
                  (K.errors?.has_existing_billing_agreement
                    ? S(
                        l.WN.Gy,
                        a.Q8.Localize(
                          "#Cart_Error_ExistingBillingAgreement_FootNote",
                        ),
                      )
                    : S(
                        l.WN.kj,
                        a.Q8.Localize(
                          ne
                            ? "#Cart_Error_AlreadyOwned_GiftFootNote"
                            : "#Cart_Error_AlreadyOwned_FootNote",
                        ),
                      )),
                K.errors?.unavailable_in_country &&
                  S(
                    l.WN.Hp,
                    a.Q8.Localize("#Cart_Error_UnavailableCountry_FootNote"),
                  ),
                K.errors?.adult_content_restricted &&
                  S(
                    l.WN.C4,
                    a.Q8.Localize(
                      "#Cart_Error_AdultContentRestricted_FootNote",
                    ),
                  ),
                K.errors?.commercial_license_restricted &&
                  S(
                    l.WN.yQ,
                    a.Q8.Localize(
                      "#Cart_Error_CommercialLicenseRestricted_FootNote",
                    ),
                  ),
                K.errors?.missing_must_own_appids &&
                  S(
                    l.WN.VL,
                    ne
                      ? a.Q8.Localize(
                          "#Cart_Error_MissingMustOwnApps_FootNoteGift",
                        )
                      : a.Q8.Localize(
                          "#Cart_Error_MissingMustOwnApps_FootNote",
                        ),
                  ),
                K.warnings?.appids_in_mastersub?.length &&
                  S(
                    l.WN.Q7,
                    a.Q8.Localize("#Cart_Error_MasterSubscription_FootNote"),
                  ),
                K.warnings?.price_has_changed &&
                  r.set(
                    l.WN.vY,
                    a.Q8.Localize("#Cart_Warning_PriceChange_FootNote"),
                  );
            });
            let ee = Array.from(r.values());
            return (
              k && ee.unshift(a.Q8.Localize("#Cart_CartLevelErrorNotice")),
              {
                rgCartLevelNotices: ee,
                mapValidateNoticesToFootnote: c,
                eDisplayType: s,
              }
            );
          }, [u, s]);
        }
      },
      97889: (Q, F, t) => {
        "use strict";
        t.d(F, { y: () => N });
        var e = t(7850),
          y = t(80702),
          l = t(40358),
          D = t(64201),
          z = t.n(D);
        const W = {
          direction: "right",
          style: { width: "320px", height: `${320 * (125 / 184)}px` },
        };
        function N(T) {
          const { name_override: I, ...P } = T,
            { data: j } = (0, l.J$)(I ? void 0 : P),
            a = I ?? j?.name;
          return (0, e.jsx)(y.Q, {
            id: P,
            hoverProps: W,
            name: a,
            className: z().LineItemStoreHover,
            bShowWishlistButton: !1,
            children: a,
          });
        }
      },
      48201: (Q, F, t) => {
        "use strict";
        t.d(F, { p: () => U });
        var e = t(7850),
          y = t(53080),
          l = t(85978),
          D = t(19298),
          z = t(71742),
          W = t(29392),
          N = t(48156),
          T = t(72609),
          I = t(57646),
          P = t(47610),
          j = t(27894),
          a = t(24873),
          x = t(3348),
          L = t(40358),
          v = t(68094),
          O = t(29522),
          o = t(5827),
          d = t(56925),
          m = t(54806),
          g = t(64238),
          E = t.n(g),
          C = t(90626),
          V = t(25792),
          w = t(69736),
          M = t(91405),
          q = t(63088),
          X = t(79485),
          Z = t(48366),
          re = t(60659),
          B = t(36798),
          _e = t(78280),
          ce = t(2165),
          oe = t(97889),
          u = t(86711),
          s = t.n(u),
          r = t(58162),
          c = t(71421);
        function U(n) {
          const {
            lineItems: i,
            cartValidation: _,
            renderLineItem: f = Ee,
            scrollable: p = !1,
          } = n;
          if (!i.length) return (0, e.jsx)(ee, {});
          const A = _?.cart_items
            ? _.cart_items.reduce((h, R) => ((h[R.line_item_id] = R), h), {})
            : {};
          return (0, e.jsx)(r.uO, {
            scrollable: p,
            children: i.map((h, R) =>
              h
                ? (0, e.jsx)(
                    V.tH,
                    {
                      fallback: (G) => (0, e.jsx)(k, { item: h, error: G }),
                      children: (0, e.jsx)(S, {
                        item: h,
                        validatedItem: A[h.line_item_id],
                        renderLineItem: f,
                      }),
                    },
                    h.line_item_id || R,
                  )
                : (0, e.jsx)(r.vF, {}, R),
            ),
          });
        }
        function S(n) {
          const { item: i, validatedItem: _, renderLineItem: f } = n,
            p = K(i);
          if (!p) throw `Unknown line item type (${i.type})`;
          const { data: A } = (0, L.J$)(p),
            { data: h } = (0, L.U2)(p),
            { data: R } = (0, L.mr)(p),
            G = h ? (0, v.Jz)(h) : p;
          return (
            (0, L.lv)(G),
            (0, L.qI)(G),
            A && (!A.visible || R === null)
              ? (0, e.jsx)(pe, {
                  lineItemID: i.line_item_id,
                  validatedItem: _,
                  storeItem: A,
                })
              : !A || !h || !R || !_
                ? (0, e.jsx)(r.vF, {})
                : (0, e.jsx)(ne, {
                    lineItem: i,
                    validatedItem: _,
                    storeItem: A,
                    displayItem: h,
                    purchaseOption: R,
                    renderLineItem: f,
                  })
          );
        }
        function k(n) {
          const { item: i, error: _ } = n,
            f = (0, q.t)(i.line_item_id);
          return (0, e.jsxs)(r.Rz, {
            className: s().ErrorLineItem,
            children: [
              (0, e.jsxs)("div", {
                className: s().Left,
                children: [
                  (0, e.jsx)("div", {
                    className: s().Error,
                    children: B.Q8.Localize("#Cart_LineItem_ErrorBoundary"),
                  }),
                  (0, e.jsx)("div", {
                    className: s().Muted,
                    children: _.message,
                  }),
                ],
              }),
              (0, e.jsx)(D.Z, {
                onActivate: () => f.mutate(),
                className: s().RemoveButton,
                children: B.Q8.Localize("#Cart_Remove"),
              }),
            ],
          });
        }
        function ee() {
          return (0, e.jsx)(r.Rz, {
            className: s().ErrorLineItem,
            children: (0, e.jsx)("div", {
              className: s().Left,
              children: (0, e.jsx)("div", {
                className: s().LineItemTitle,
                children: B.Q8.Localize("#Cart_Empty"),
              }),
            }),
          });
        }
        function K(n) {
          const i = n.type;
          switch (i) {
            case W.KW.$B:
              return { packageid: n.packageid };
            case W.KW.XY:
              return { bundleid: n.bundleid };
            case W.KW.vC:
              return;
            default:
              (0, z.z_)(i, `Unhandled type: ${i}`);
          }
        }
        function ne(n) {
          const {
              storeItem: i,
              displayItem: _,
              lineItem: f,
              purchaseOption: p,
              validatedItem: A,
              renderLineItem: h,
            } = n,
            R = f.line_item_id,
            G = (0, v.Jz)(i),
            te = (0, q.t)(R),
            se = te.isPending || te.isSuccess,
            { data: J } = (0, L.by)(G),
            H = (0, O._Z)(G),
            { data: ie, isLoading: b } = (0, d.Pt)(),
            $ = C.useMemo(() => H.filter((We) => ie?.has(We)), [H, ie]),
            Y = C.useId();
          if (b) return (0, e.jsx)(r.vF, {});
          const ae = f.flags?.is_gift,
            ue = H.length > 0 && $.length === H.length,
            ye = !ae && $.length > 0 && !ue;
          return h({
            lineItem: f,
            storeItem: i,
            validatedItem: A,
            children: (0, e.jsxs)(e.Fragment, {
              children: [
                se && (0, e.jsx)(r.UD, {}),
                (0, e.jsxs)(D.Z, {
                  className: E()(
                    s().InnerLineItemCtn,
                    se && s().PendingLineItem,
                  ),
                  "flow-children": "row",
                  children: [
                    (0, e.jsx)("div", {
                      className: E()(s().LineItemColumn, s().LineItemCapsule),
                      children: (0, e.jsx)(j.p, {
                        storeItem: _,
                        feature: "cart-items",
                        noImpressionTracking: !0,
                        className: s().ImageLink,
                        children: (0, e.jsx)(le, {
                          storeItem: _,
                          alt: i.name,
                          blurred: !!A.errors?.adult_content_restricted,
                        }),
                      }),
                    }),
                    (0, e.jsxs)("div", {
                      className: s().LineItemDetailsCtn,
                      children: [
                        (0, e.jsx)(r.UW, {
                          className: s().LineItemDetailsRowTop,
                          children: (0, e.jsx)("div", {
                            className: s().LineItemTitle,
                            id: Y,
                            children: i.name,
                          }),
                        }),
                        J?.is_coming_soon && (0, e.jsx)(fe, { storeItem: i }),
                        (0, e.jsxs)(de, {
                          validatedItem: A,
                          children: [
                            (0, e.jsx)(Ce, { storeItem: i, purchaseOption: p }),
                            (0, e.jsx)(he, { purchaseOption: p }),
                            (0, e.jsx)(Oe, { storeItem: i, purchaseOption: p }),
                          ],
                        }),
                        (0, e.jsx)(Ae, { validatedItem: A }),
                        ye && (0, e.jsx)(Re, { appids: $ }),
                        (0, e.jsxs)(r.UW, {
                          className: s().LineItemSpaceBetween,
                          children: [
                            (0, e.jsx)("div", {
                              className: E()(
                                s().LineItemCol,
                                s().PlatformIcons,
                              ),
                              children: (0, e.jsx)(a.Dm, { id: (0, v.Jz)(_) }),
                            }),
                            (0, e.jsx)(Ie, {
                              purchaseOption: p,
                              validatedItem: A,
                            }),
                          ],
                        }),
                        (0, e.jsx)(ge, {
                          lineItem: f,
                          purchaseOption: p,
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
        function pe(n) {
          const { lineItemID: i, validatedItem: _, storeItem: f } = n,
            p = (0, q.t)(i),
            A = p.isPending;
          return (0, e.jsxs)(r.Rz, {
            placeholder: !0,
            children: [
              A && (0, e.jsx)(r.UD, {}),
              (0, e.jsxs)(D.Z, {
                className: E()(s().InnerLineItemCtn, A && s().PendingLineItem),
                "flow-children": "row",
                children: [
                  (0, e.jsx)("div", {
                    className: E()(s().LineItemColumn, s().LineItemCapsule),
                    children: (0, e.jsx)(j.p, {
                      storeItem: f,
                      noImpressionTracking: !0,
                      children: (0, e.jsx)(le, { storeItem: f }),
                    }),
                  }),
                  (0, e.jsxs)("div", {
                    className: s().LineItemDetailsCtn,
                    children: [
                      (0, e.jsx)(r.UW, {
                        className: s().LineItemDetailsRowTop,
                        children: (0, e.jsx)("div", {
                          className: s().LineItemTitle,
                          children: f?.name,
                        }),
                      }),
                      !!_ && (0, e.jsx)(de, { validatedItem: _ }),
                      (0, e.jsx)(r.UW, {
                        className: s().LineItemSpaceBetween,
                        children: (0, e.jsx)(D.Z, {
                          focusable: !0,
                          onActivate: () => p.mutate(),
                          className: s().RemoveLineItem,
                          children: B.Q8.Localize("#Cart_Remove"),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function le(n) {
          const { storeItem: i, alt: _, blurred: f } = n,
            { data: p } = (0, L.lv)((0, v.Jz)(i));
          let h = `${T.TS.STORE_BASE_URL}public/images/checkout/Cart_generic_header_logo.png`;
          return (
            p?.header
              ? (h =
                  T.TS.STORE_ITEM_BASE_URL +
                  p.asset_url_format.replace("${FILENAME}", p.header))
              : p?.small_capsule &&
                (h =
                  T.TS.STORE_ITEM_BASE_URL +
                  p.asset_url_format.replace("${FILENAME}", p.small_capsule)),
            (0, e.jsx)("img", {
              alt: _ ?? i.name,
              className: f ? s().HeaderImgBlurred : s().HeaderImg,
              src: h,
            })
          );
        }
        function Ee(n) {
          return (0, e.jsx)(D.Z, {
            children: (0, e.jsx)(r.Rz, { children: n.children }),
          });
        }
        function de(n) {
          const { validatedItem: i, children: _ } = n;
          return (0, e.jsxs)("div", {
            className: s().LineItemSpaceBetween,
            children: [(0, e.jsx)(ce.Yz, { lineItem: i }), _],
          });
        }
        function fe(n) {
          const { storeItem: i } = n,
            { data: _ } = (0, L.by)((0, v.Jz)(i)),
            f = (0, x.VM)(_);
          if (!_) return null;
          let p = B.Q8.Localize("#Cart_ComingSoon", f);
          return (
            ["text_tba", "text_comingsoon"].includes(_.coming_soon_display) &&
              (p = f),
            (0, e.jsx)(r.dp, { children: p })
          );
        }
        function Ie(n) {
          const { purchaseOption: i, validatedItem: _ } = n;
          let f = i?.formatted_original_price,
            p = i?.formatted_final_price,
            A = i?.discount_pct;
          const h = _.subtotal?.amount_in_cents !== i?.final_price_in_cents;
          return (
            _.original_price &&
              _.subtotal &&
              h &&
              ((f = _.original_price.formatted_amount),
              (p = _.subtotal.formatted_amount),
              (A = (0, r.dR)(_))),
            (0, e.jsx)("div", {
              className: s().LineItemRightCol,
              children: (0, e.jsx)(I.kb, {
                className: s().PriceWidget,
                formatted_orig_price: f,
                formatted_final_price: p,
                discount_percent: A,
                bHideDiscountPercentForCompliance:
                  i.hide_discount_pct_for_compliance,
                bDiscountFromCoupon: !!_.coupon_discount?.amount_in_cents,
              }),
            })
          );
        }
        function ge(n) {
          const {
              lineItem: i,
              purchaseOption: _,
              validatedItem: f,
              rgAppIDs: p,
              bAllAppsPrivate: A,
              fnRemoveLineItem: h,
              accessibilityId: R,
            } = n,
            G = (0, Z.EJ)(),
            [te] = (0, re.fg)(),
            se =
              te?.accountid_giftee ||
              (G ? i.gift_info?.accountid_giftee : void 0),
            J = (0, _e.j4)(),
            H =
              (0, Z.ZB)() &&
              !f?.restrict_add_additional_to_cart &&
              !(0, Z.kx)(J),
            ie = f.errors?.adult_content_restricted,
            b = (0, M.A)(
              i.packageid,
              i.bundleid,
              me(_),
              void 0,
              "cart-add-additional",
            ),
            $ = C.useId(),
            Y = C.useId();
          return (0, e.jsxs)(r.UW, {
            className: s().LineItemSpaceBetween,
            children: [
              (0, e.jsx)("div", {
                className: E()(s().LineItemCol, s().PurchaseOptionPickerCtn),
                children: se
                  ? (0, e.jsx)(Le, { recipient: se })
                  : (0, e.jsx)(xe, {
                      lineItem: i,
                      rgAppIDs: p,
                      bAllAppsPrivate: A,
                      purchaseOption: _,
                    }),
              }),
              (0, e.jsxs)("div", {
                className: E()(s().LineItemRightCol, s().AddRemoveLinks),
                children: [
                  H &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)(c.Gq, {
                          toolTipContent: B.Q8.Localize(
                            "#Cart_LineItem_Add_Tooltip",
                          ),
                          usePointerEvents: !0,
                          children: (0, e.jsx)(D.Z, {
                            onActivate: () => !b.isPending && b.mutate(),
                            className: s().AddLineItem,
                            id: $,
                            "aria-labelledby": `${$} ${R}`,
                            children: B.Q8.Localize("#Cart_Add"),
                          }),
                        }),
                        "|",
                      ],
                    }),
                  !G &&
                    (0, e.jsx)(D.Z, {
                      onActivate: () => h(),
                      className: s().RemoveLineItem,
                      id: Y,
                      "aria-labelledby": `${Y} ${R}`,
                      children: B.Q8.Localize("#Cart_Remove"),
                    }),
                  ie &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        "| ",
                        (0, e.jsx)("a", {
                          href: `${T.TS.STORE_CHECKOUT_BASE_URL}checkout/?purchasetype=updatebillinginfo&r=cart`,
                          className: s().VerifyLineItem,
                          children: B.Q8.Localize("#Cart_Verify"),
                        }),
                        " ",
                      ],
                    }),
                ],
              }),
            ],
          });
        }
        function Le(n) {
          const { data: i } = (0, l.jn)(n.recipient),
            _ = i?.public_data?.persona_name;
          return (0, e.jsx)("div", {
            className: s().GiftForNotice,
            children: B.Q8.LocalizeReact(
              "#Cart_GiftForNotice",
              _ ? (0, e.jsx)("span", { className: s().Name, children: _ }) : "",
            ),
          });
        }
        function Ce(n) {
          const { storeItem: i, purchaseOption: _ } = n,
            f = !!_.requires_shipping && i.item_type === N.c6.RD,
            { data: p } = (0, P.DR)(f ? i.id : void 0);
          return p
            ? (0, e.jsx)(r.dp, {
                children: B.Q8.Localize(
                  "#Cart_ShippingEstimate_DeliveryDate",
                  (0, w.x)(p),
                ),
              })
            : null;
        }
        function he(n) {
          const { purchaseOption: i } = n;
          if (!i.requires_shipping) return null;
          const _ = T.iA.country_code;
          return ["GB"].includes(_)
            ? (0, e.jsx)(r.dp, {
                children: (0, e.jsx)(D.Z, {
                  children: (0, e.jsx)("a", {
                    className: s().ComplianceLink,
                    target: "_blank",
                    href: "https://www.valvesoftware.com/legal/statement-of-compliance",
                    rel: "noreferrer",
                    children: B.Q8.Localize(
                      "#Cart_LineItem_Hardware_Compliance_Label",
                    ),
                  }),
                }),
              })
            : null;
        }
        var Pe = ((n) => (
            (n[(n.k_EBillingAgreementTypeInvalid = 0)] =
              "k_EBillingAgreementTypeInvalid"),
            (n[(n.k_EBillingAgreementTypeSteam = 1)] =
              "k_EBillingAgreementTypeSteam"),
            (n[(n.k_EBillingAgreementTypeGame = 2)] =
              "k_EBillingAgreementTypeGame"),
            n
          ))(Pe || {}),
          ve = ((n) => (
            (n[(n.k_ETimeUnitNone = 0)] = "k_ETimeUnitNone"),
            (n[(n.k_ETimeUnitSecond = 1)] = "k_ETimeUnitSecond"),
            (n[(n.k_ETimeUnitMinute = 2)] = "k_ETimeUnitMinute"),
            (n[(n.k_ETimeUnitHour = 3)] = "k_ETimeUnitHour"),
            (n[(n.k_ETimeUnitDay = 4)] = "k_ETimeUnitDay"),
            (n[(n.k_ETimeUnitWeek = 5)] = "k_ETimeUnitWeek"),
            (n[(n.k_ETimeUnitMonth = 6)] = "k_ETimeUnitMonth"),
            (n[(n.k_ETimeUnitYear = 7)] = "k_ETimeUnitYear"),
            n
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
        function Oe(n) {
          const { storeItem: i, purchaseOption: _ } = n;
          if (i.item_type !== N.c6.RD) return null;
          const f = _.recurrence_info;
          if (!f) return null;
          let p = "#Package";
          f.billing_agreement_type === 2 && (p = "#GameBillingPackage"),
            _.formatted_final_price && _.discount_pct && (p += "WithDiscount");
          const h = De[f.renewal_time_unit],
            R = p + "CostIncludesSubscriptionBy" + h;
          return (0, e.jsx)(r.dp, {
            children: B.Q8.Localize(
              R,
              _.formatted_final_price,
              f.formatted_renewal_price,
              f.renewal_time_period,
              _.discount_pct,
            ),
          });
        }
        function me(n) {
          return n.user_can_purchase_as_gift;
        }
        function Me(n) {
          return !n.is_commercial_license && !n.requires_shipping;
        }
        function xe(n) {
          const {
              lineItem: i,
              rgAppIDs: _,
              bAllAppsPrivate: f,
              purchaseOption: p,
            } = n,
            A = (0, X.C)(),
            h = (0, d.DT)(),
            R = (0, Z.EJ)(),
            { data: G } = (0, l.jn)(
              i.gift_info?.accountid_giftee
                ? i.gift_info.accountid_giftee
                : null,
            ),
            te = !me(p) || R,
            se = !Me(p);
          let J = [
            {
              data: "myself",
              label: B.Q8.Localize("#Cart_LineItemOptions_Myself"),
            },
          ];
          if (
            (se ||
              J.push({
                data: "private",
                label: B.Q8.Localize("#Cart_LineItemOptions_Privately"),
                tooltip: B.Q8.Localize("#Cart_LineItemOptions_PrivateTooltip"),
              }),
            !te)
          ) {
            const b = G?.public_data?.persona_name;
            i.gift_info?.accountid_giftee && b
              ? J.push({
                  data: "gift",
                  label: B.Q8.Localize(
                    "#Cart_LineItemOptions_GiftForPersona",
                    b,
                  ),
                })
              : J.push({
                  data: "gift",
                  label: B.Q8.Localize("#Cart_LineItemOptions_Gift"),
                });
          }
          let H = i.flags?.is_gift ? "gift" : "myself";
          if ((H === "myself" && f && (H = "private"), J.length === 1))
            return null;
          const ie = (b) => {
            if (H === b.data) return;
            const $ = (ae) => h.mutate({ rgAppIDs: _, bPrivate: ae }),
              Y = (ae) =>
                A.mutate({
                  lineItemID: i.line_item_id,
                  lineItemFlags: { ...i.flags, is_gift: ae },
                  giftInfo: ae ? i.gift_info : void 0,
                });
            H === "private" ? $(!1) : H === "gift" && Y(!1),
              b.data === "private" ? $(!0) : b.data === "gift" && Y(!0);
          };
          return (0, e.jsx)(y.l6, {
            onSelectionChange: ie,
            selectedValue: J.find((b) => b.data === H) ?? null,
            options: J,
            getOptionLabel: (b) =>
              b.tooltip
                ? (0, e.jsx)(c.Gq, {
                    toolTipContent: b.tooltip,
                    usePointerEvents: !0,
                    children: (0, e.jsx)("span", { children: b.label }),
                  })
                : b.label,
            size: "1",
            placement: "bottom-start",
          });
        }
        const Ae = C.memo(function (i) {
          const { validatedItem: _ } = i,
            f = _.included_packageids ?? [],
            p = (0, o.eG)(),
            A = (0, m.E)({
              queries: f.map((R) => (0, L.mt)(p, { packageid: R })),
            }),
            h = [
              ...new Set(
                A.map((R) => R.data)
                  .filter((R) => !!R)
                  .flat(),
              ),
            ];
          return !h.length || (h.length == 1 && !_.item_id?.bundleid)
            ? null
            : (0, e.jsxs)(r.UW, {
                text: !0,
                children: [
                  (0, e.jsxs)("span", {
                    children: [
                      B.Q8.LocalizePlural("#Cart_IncludesItems", h.length),
                      ":",
                      " ",
                    ],
                  }),
                  h.map((R, G) =>
                    (0, e.jsxs)(
                      C.Fragment,
                      {
                        children: [
                          G > 0 && ", ",
                          (0, e.jsx)(oe.y, { appid: R }),
                        ],
                      },
                      R,
                    ),
                  ),
                ],
              });
        });
        function Re(n) {
          const { appids: i } = n,
            _ = i.map((f, p) =>
              (0, e.jsxs)(
                C.Fragment,
                { children: [p > 0 && ", ", (0, e.jsx)(oe.y, { appid: f })] },
                f,
              ),
            );
          return (0, e.jsxs)(r.UW, {
            children: [
              (0, e.jsxs)("span", {
                children: [
                  B.Q8.Localize("#Cart_Notice_SomeAppsPrivate"),
                  "\xA0",
                ],
              }),
              _,
            ],
          });
        }
      },
      58162: (Q, F, t) => {
        "use strict";
        t.d(F, {
          Rz: () => a,
          UD: () => L,
          UW: () => j,
          dR: () => O,
          dp: () => v,
          uO: () => P,
          vF: () => x,
        });
        var e = t(7850),
          y = t(19298),
          l = t(78365),
          D = t(7967),
          z = t(64238),
          W = t.n(z),
          N = t(85599),
          T = t(86711),
          I = t.n(T);
        function P(o) {
          const { scrollable: d = !1, children: m } = o,
            g = d ? D.MS : y.Z;
          return (0, e.jsx)(g, {
            className: W()(I().LineItemsCtn, d && I().Scrollable),
            focusableIfEmpty: !0,
            children: m,
          });
        }
        function j(o) {
          const { text: d, children: m, className: g, noWrap: E } = o;
          return (0, e.jsx)(y.Z, {
            "flow-children": "row",
            className: W()(
              I().LineItemDetailsRow,
              d && I().Text,
              E && I().NoWrap,
              g,
            ),
            children: m,
          });
        }
        function a(o) {
          const { placeholder: d, className: m, children: g } = o;
          return (0, e.jsx)(l.YZ, {
            className: W()(
              I().LineItemWrapper,
              d && I().LineItemPlaceholder,
              m,
            ),
            children: g,
          });
        }
        function x() {
          return (0, e.jsx)(a, {
            placeholder: !0,
            children: (0, e.jsx)(L, {}),
          });
        }
        function L() {
          return (0, e.jsx)("div", {
            className: I().LoadingThrobber,
            children: (0, e.jsx)(N.t, {
              size: "medium",
              position: "center",
              msDelayAppear: 250,
            }),
          });
        }
        function v(o) {
          const { children: d } = o;
          return (0, e.jsx)(j, {
            text: !0,
            children: (0, e.jsx)("div", {
              className: I().Warning,
              children: d,
            }),
          });
        }
        function O(o) {
          if (o.coupon_applied) return o.coupon_applied.discount_pct;
          const d = parseInt(o.original_price.amount_in_cents),
            m = parseInt(o.subtotal.amount_in_cents);
          return Math.min(99, Math.floor(((d - m) / d) * 100 + 0.5));
        }
      },
      87913: (Q, F, t) => {
        "use strict";
        t.d(F, { MT: () => m, g7: () => O, p2: () => d, xz: () => v });
        var e = t(35038),
          y = t(19563),
          l = t(8173),
          D = t(48156),
          z = t(68312),
          W = t(5827),
          N = t(63667),
          T = t(72609),
          I = t(80902),
          P = t(48366),
          j = t(60659),
          a = t(78280),
          x = t(83665);
        const L = {
            include_basic_info: !0,
            include_assets: !0,
            include_platforms: !0,
            include_release: !0,
            include_included_items: !0,
          },
          v = {
            ...L,
            include_included_items: !0,
            include_all_purchase_options: !0,
            included_item_data_request: L,
          };
        function O() {
          const E = (0, z.KV)(),
            C = (0, a.j4)(),
            [V] = (0, j.fg)(),
            { storeBrowseContext: w, cacheStoreItemData: M } = (0, W.yn)();
          return (0, I.I)(o(E, C, w, V, M));
        }
        function o(E, C, V, w, M) {
          return {
            queryKey: (0, x.m4)(C, w),
            queryFn: async () => g(E, C, V, w, v, M),
            staleTime: 1 / 0,
            enabled: T.iA.logged_in || !(0, P.c2)(C),
          };
        }
        function d(E) {
          return !E?.cart_items?.length || E.cart_items.length === 0
            ? !1
            : E.cart_items.every(
                ({ store_item: C }) =>
                  C?.item_type == D.c6.RD &&
                  !!(C.self_purchase_option || C.best_purchase_option)
                    ?.requires_shipping,
              );
        }
        function m(E) {
          return !E?.cart_items?.length || E.cart_items.length === 0
            ? !1
            : E.cart_items.every(
                ({ store_item: C, gift_info: V }) =>
                  C?.item_type == D.c6.RD &&
                  (!!V?.accountid_giftee || !!V?.email_giftee),
              );
        }
        async function g(E, C, V, w, M, q) {
          const X = e.w.Init(y.vL);
          (0, P.kx)(C) || (0, P.uU)(C)
            ? (X.Body().set_gidshoppingcart(C.gid),
              w && X.Body().set_gift_info(l.$z.fromObject(w)))
            : (0, P.sb)(C) && X.Body().set_gidreplayoftransid(C.gid),
            (0, N.rV)(V, X),
            M && (0, N.Bn)(X, M);
          const Z = await y._o.ValidateCart(E, X);
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
      38580: (Q, F, t) => {
        "use strict";
        t.d(F, { Dv: () => I });
        var e = t(20117),
          y = t(99412),
          l = t(35038),
          D = t(10335),
          z = t(27386),
          W = t(42993),
          N = t(68312),
          T = t(80902);
        function I() {
          const x = (0, N.KV)(),
            L = (0, W.LH)();
          return (0, T.I)(P(x, L));
        }
        function P(x, L) {
          return {
            queryKey: ["GetFriendsList", L],
            queryFn: async () => {
              const v = l.w.Init(D.pH);
              return (await D.DF.GetFriendsList(x, v))
                .Body()
                .friendslist()
                ?.friends()
                ?.filter((o) => {
                  if (!o.ulfriendid()) return !1;
                  const d = new e.b2(o.ulfriendid());
                  return (
                    (o.efriendrelationship() == y._UC ||
                      o.efriendrelationship() == y.Ec7) &&
                    d.BIsIndividualAccount()
                  );
                })
                .map((o) => o.ulfriendid());
            },
            enabled: !!L,
          };
        }
        function j() {
          const x = useActiveServiceTransport(),
            L = useActiveAccount();
          return useQuery(a(x, L));
        }
        function a(x, L) {
          return {
            queryKey: ["GetFriendNicknameMap", L],
            queryFn: async () => {
              const v = CProtoBufMsg.Init(CPlayer_GetNicknameList_Request),
                O = await PlayerService.GetNicknameList(x, v);
              return new Map(
                O.Body()
                  .toObject()
                  ?.nicknames?.map((o) => [o.accountid, o.nickname]),
              );
            },
          };
        }
      },
      60097: (Q) => {
        Q.exports = {
          strMaxCartPartResponsiveWidth: "840px",
          CartCard: "_4SG2MjCMpIRt6W-Zj4Oxm",
          HeaderNotices: "_2BtczALVCY2zzCLnj8oga9",
          FooterNoticesHeader: "_2itvgQZbn40lY_jj5sG8it",
          MustFix: "_1SFErQFwOLmnLCBVlq9zxK",
          FooterNotice: "_1WMk6EdVNns2fKuDOCrBX3",
          NoticeIndex: "_3N9Ik0sMA90E7jGHJqycWH",
        };
      },
      64201: (Q) => {
        Q.exports = { LineItemStoreHover: "_3DfrtekI1PCxuXbfj85Zwp" };
      },
      86711: (Q) => {
        Q.exports = {
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
