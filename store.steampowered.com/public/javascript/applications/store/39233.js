/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [39233],
    {
      63088: (G, F, t) => {
        "use strict";
        t.d(F, { Z: () => x, t: () => r });
        var e = t(35038),
          R = t(29392),
          _ = t(36053),
          O = t(68312),
          z = t(75233),
          W = t(51614),
          N = t(48366),
          B = t(9843),
          f = t(78280),
          v = t(83665),
          T = t(20125);
        async function U(D, c, l) {
          if ((0, N.c2)(c)) {
            const d = e.w.Init(R.tj);
            d.Body().set_line_item_id(l);
            const g = await R.t8.RemoveItemFromCart(D, d);
            return (0, T.WZ)(), g.Body().toObject();
          } else {
            const d = e.w.Init(_.VJ);
            d.Body().set_gidlineitems([l]), d.Body().set_gidshoppingcart(c.gid);
            const g = await _.Q2.RemoveLineItems(D, d);
            return (0, T.WZ)(), g.Body().toObject();
          }
        }
        function r(D) {
          const c = (0, O.KV)(),
            l = (0, z.jE)(),
            d = (0, f.j4)();
          return (0, W.n)({
            mutationFn: async () => await U(c, d, D),
            onSuccess: (g) => {
              "cart" in g ? (0, v.LN)(l, d, g.cart) : (0, v.Cd)(l, d);
            },
          });
        }
        async function p(D, c) {
          if ((0, N.c2)(c)) {
            const l = e.w.Init(R.HK);
            return (await R.t8.DeleteCart(D, l)).BSuccess();
          } else {
            const l = await (0, B.d0)(D, c);
            if (l && l.line_items && l.line_items.length) {
              const d = e.w.Init(_.VJ);
              return (
                d
                  .Body()
                  .set_gidlineitems(
                    l.line_items.map(({ line_item_id: u }) => u),
                  ),
                d.Body().set_gidshoppingcart(c.gid),
                (await _.Q2.RemoveLineItems(D, d)).BSuccess()
              );
            }
            return !1;
          }
        }
        function x() {
          const D = (0, O.KV)(),
            c = (0, z.jE)(),
            l = (0, f.j4)();
          return (0, W.n)({
            mutationFn: async () => await p(D, l),
            onSuccess: () => (0, v.Cd)(c, l),
          });
        }
      },
      79485: (G, F, t) => {
        "use strict";
        t.d(F, { C: () => r });
        var e = t(35038),
          R = t(29392),
          _ = t(8173),
          O = t(72609),
          z = t(68312),
          W = t(75233),
          N = t(51614),
          B = t(78280),
          f = t(83665),
          v = t(48366),
          T = t(36053);
        async function U(p, x, D, c, l, d) {
          if ((0, v.c2)(x)) {
            const g = e.w.Init(R.Bk);
            g.Body().set_line_item_id(D),
              g.Body().set_user_country(O.iA.country_code),
              l && g.Body().set_gift_info(_.$z.fromObject(l)),
              c && g.Body().set_flags(R.Eo.fromObject(c)),
              d && g.Body().set_apply_gidcoupon(d);
            const u = await R.t8.ModifyLineItem(p, g);
            return (
              u.BSuccess() ||
                console.warn(`Failed to update gift info: ${u.GetEResult()}`),
              [u.GetEResult(), u.Body().toObject()]
            );
          } else {
            const g = e.w.Init(T.ic);
            g.Body().set_gidlineitem(D),
              g.Body().set_gidshoppingcart(x.gid),
              l
                ? g.Body().set_gift_info(_.$z.fromObject(l))
                : c?.is_gift &&
                  g
                    .Body()
                    .set_gift_info(
                      _.$z.fromObject({
                        accountid_giftee: 0,
                        email_giftee: "",
                      }),
                    );
            const u = await T.Q2.ModifyLineItem(p, g);
            return (
              u.BSuccess() ||
                console.warn(
                  `Failed to update gift info in anonymous cart: ${u.GetEResult()}`,
                ),
              u.Body().toObject()
            );
          }
        }
        function r(p) {
          const x = (0, B.j4)(),
            D = (0, z.KV)(),
            c = (0, W.jE)(),
            l = (0, f.GO)(x);
          return (0, N.n)({
            mutationFn: (d) =>
              U(D, x, d.lineItemID, d.lineItemFlags, d.giftInfo, d.gidCoupon),
            onMutate: async (d) => {
              await c.cancelQueries({ queryKey: l });
              const g = c.getQueryData(l);
              return (
                c.setQueryData(l, (u) => ({
                  ...(u ?? {}),
                  line_items:
                    u?.line_items?.map((P) =>
                      P.line_item_id !== d.lineItemID
                        ? P
                        : {
                            ...P,
                            flags: d.lineItemFlags || P.flags,
                            gift_info: d.giftInfo || P.gift_info,
                          },
                    ) ?? [],
                })),
                { previousCart: g }
              );
            },
            onSuccess: (d) => {
              "cart" in d ? (0, f.LN)(c, x, d.cart) : (0, f.Cd)(c, x);
            },
            onError: (d, g, u) => {
              u?.previousCart && c.setQueryData(l, u.previousCart);
            },
          });
        }
      },
      60659: (G, F, t) => {
        "use strict";
        t.d(F, { Ez: () => W, fg: () => N, iZ: () => B });
        var e = t(7850),
          R = t(78280),
          _ = t(90626);
        const O = _.createContext({ step: "initial", setStep: () => {} });
        function z() {
          return (0, _.useContext)(O);
        }
        function W() {
          const f = z();
          return [f.step, f.setStep];
        }
        function N() {
          const f = z();
          return [f.cartWideGiftInfo, f.onCartWideGiftInfoChange];
        }
        function B(f) {
          const {
              step: v,
              setStep: T,
              cartID: U,
              cartWideGiftInfo: r,
              onCartWideGiftInfoChange: p,
              children: x,
            } = f,
            D = _.useMemo(
              () => ({
                step: v,
                setStep: T,
                cartWideGiftInfo: r,
                onCartWideGiftInfoChange: p,
              }),
              [v, T, r, p],
            );
          return (0, e.jsx)(O.Provider, {
            value: D,
            children: (0, e.jsx)(R.h3, { cartID: U, children: x }),
          });
        }
      },
      2165: (G, F, t) => {
        "use strict";
        t.d(F, {
          LP: () => u,
          WA: () => c,
          Yz: () => J,
          ZZ: () => g,
          wW: () => d,
        });
        var e = t(7850),
          R = t(38580),
          _ = t(8173),
          O = t(72609),
          z = t(20117),
          W = t(40358),
          N = t(68094),
          B = t(64238),
          f = t.n(B),
          v = t(90626),
          T = t(48366),
          U = t(97889),
          r = t(36798),
          p = t(60097),
          x = t.n(p),
          D = t(58162),
          c = ((s) => (
            (s[(s.k_ECartDisplayType_Unknown = 0)] =
              "k_ECartDisplayType_Unknown"),
            (s[(s.k_ECartDisplayType_Modal = 1)] = "k_ECartDisplayType_Modal"),
            (s[(s.k_ECartDisplayType_FullPage = 2)] =
              "k_ECartDisplayType_FullPage"),
            s
          ))(c || {});
        const l = v.createContext({
          rgCartLevelNotices: [],
          mapValidateNoticesToFootnote: new Map(),
          eDisplayType: 0,
        });
        function d(s) {
          const { validateCart: n, eDisplayType: L, children: C } = s,
            h = de(n, L);
          return (0, e.jsx)(l.Provider, { value: h, children: C });
        }
        function g() {
          const { rgCartLevelNotices: s } = v.useContext(l);
          return !s || !s.length
            ? null
            : s.length == 1
              ? (0, e.jsx)("div", {
                  className: p.HeaderNotices,
                  children: r.Q8.Localize("#Cart_CartLevelErrorFormat", s[0]),
                })
              : (0, e.jsxs)("div", {
                  className: p.HeaderNotices,
                  children: [
                    (0, e.jsx)("div", {
                      children: r.Q8.Localize("#Cart_CartLevelErrorMultiple"),
                    }),
                    (0, e.jsx)("ul", {
                      children: s.map((n, L) =>
                        (0, e.jsx)("li", { children: n }, L),
                      ),
                    }),
                  ],
                });
        }
        function u(s) {
          const { validateCart: n } = s,
            { mapValidateNoticesToFootnote: L } = v.useContext(l);
          if (!L || !L.size) return null;
          const h = (n?.cart_items || []).every((ee) => !ee.errors),
            S = h
              ? r.Q8.Localize("#Cart_FooterNoticeHeader_Warning")
              : r.Q8.Localize("#Cart_FooterNoticeHeader_MustFix"),
            w = f()(p.FooterNoticesHeader, !h && p.MustFix);
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsx)("div", { className: w, children: S }),
              Array.from(L).map(([ee, b]) =>
                (0, e.jsx)(P, { notice: b }, b.index),
              ),
            ],
          });
        }
        function P(s) {
          const { notice: n } = s;
          return (0, e.jsxs)("div", {
            className: p.FooterNotice,
            children: [
              (0, e.jsx)("div", {
                className: p.NoticeIndex,
                children: (0, e.jsx)("sup", { children: n.index }),
              }),
              (0, e.jsx)("div", { children: n.footnote_text }),
            ],
          });
        }
        function Z(s) {
          return v.useContext(l)?.mapValidateNoticesToFootnote.get(s)?.index;
        }
        function X() {
          return v.useContext(l)?.eDisplayType ?? 0;
        }
        function J(s) {
          const { lineItem: n } = s,
            L = X(),
            { bShowValidationNotices: C } = (0, T.cN)();
          if (!C) return null;
          let h = [],
            S = !!n.gift_info?.accountid_giftee;
          return (
            n.errors?.duplicate_appids_in_cart?.length &&
              h.push(
                (0, e.jsx)(
                  y,
                  {
                    purchase_state: _.WN.ZK,
                    notice_text: r.Q8.Localize(
                      "#Cart_Error_DuplicateApps_LineItem",
                    ),
                    appids: n.errors.duplicate_appids_in_cart,
                  },
                  "duplicate_appids",
                ),
              ),
            h.push((0, e.jsx)(le, { lineItem: n }, "owned_apps")),
            n.errors?.unavailable_in_country &&
              h.push(
                (0, e.jsx)(
                  y,
                  {
                    purchase_state: _.WN.Hp,
                    notice_text: r.Q8.Localize(
                      "#Cart_Error_UnavailableCountry_LineItem",
                    ),
                  },
                  "unavailable_in_country",
                ),
              ),
            n.errors?.adult_content_restricted &&
              h.push(
                (0, e.jsx)(
                  y,
                  {
                    purchase_state: _.WN.C4,
                    notice_text: r.Q8.Localize(
                      "#Cart_Error_AdultContentRestricted_LineItem",
                    ),
                  },
                  "adult_content_restricted",
                ),
              ),
            n.errors?.commercial_license_restricted &&
              h.push(
                (0, e.jsx)(
                  y,
                  {
                    purchase_state: _.WN.yQ,
                    notice_text: r.Q8.Localize(
                      "#Cart_Error_CommercialLicenseRestricted_LineItem",
                    ),
                  },
                  "commercial_license_restricted",
                ),
              ),
            n.errors?.gift_not_valid_for_recipient_region &&
              h.push(
                (0, e.jsx)(
                  y,
                  {
                    purchase_state: _.WN._o,
                    notice_text: r.Q8.Localize(
                      "#Cart_Error_GiftRecipientInvalid",
                    ),
                  },
                  "gift_recipient_invalid",
                ),
              ),
            h.push((0, e.jsx)(oe, { lineItem: n }, "coupon_notices")),
            n.errors?.too_many_in_cart &&
              h.push(
                (0, e.jsx)(
                  y,
                  {
                    purchase_state: _.WN.YF,
                    notice_text: r.Q8.Localize("#Cart_Error_TooManyInCart"),
                  },
                  "too_many_in_cart",
                ),
              ),
            n.errors?.missing_must_own_appids?.length &&
              h.push(
                (0, e.jsx)(
                  y,
                  {
                    purchase_state: _.WN.VL,
                    notice_text: S
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
              h.push(
                (0, e.jsx)(
                  y,
                  {
                    purchase_state: _.WN.Q7,
                    notice_text: r.Q8.Localize(
                      "#Cart_Error_MasterSubscription_LineItem",
                    ),
                    appids: n.warnings.appids_in_mastersub.flatMap((w) =>
                      w.cart_appid ? [w.cart_appid] : [],
                    ),
                  },
                  "appids_in_mastersub",
                ),
              ),
            n.warnings?.owned_appids?.length &&
              h.push(
                (0, e.jsx)(
                  y,
                  {
                    purchase_state: _.WN.fZ,
                    notice_text: r.Q8.Localize(
                      "#Cart_Warning_AlreadyOwned_LineItem",
                    ),
                    appids: n.warnings.owned_appids,
                  },
                  "owned_appids",
                ),
              ),
            n.warnings?.owned_appids_extra_copy?.length &&
              h.push(
                (0, e.jsx)(
                  y,
                  {
                    purchase_state: _.WN.Vx,
                    notice_text: r.Q8.Localize(
                      "#Cart_Warning_ExtraCopies_LineItem",
                    ),
                    appids: n.warnings.owned_appids_extra_copy,
                  },
                  "owned_appids_extra_copy",
                ),
              ),
            n.warnings?.price_has_changed &&
              h.push(
                (0, e.jsx)(
                  y,
                  {
                    purchase_state: _.WN.vY,
                    notice_text: r.Q8.Localize(
                      "#Cart_Warning_PriceChange_LineItem",
                    ),
                  },
                  "price_has_changed",
                ),
              ),
            n.warnings?.non_refundable &&
              h.push(
                (0, e.jsx)(
                  y,
                  {
                    purchase_state: _.WN.YQ,
                    notice_text: r.Q8.Localize(
                      "#Cart_Warning_NoRefund_LineItem",
                    ),
                  },
                  "non_refundable",
                ),
              ),
            n.warnings?.gift_recipient_higher_price &&
              h.push(
                (0, e.jsx)(
                  y,
                  {
                    purchase_state: _.WN.j6,
                    notice_text: r.Q8.Localize(
                      "#Cart_Warning_RecipientHigherPrice",
                    ),
                  },
                  "gift_recipient_higher_price",
                ),
              ),
            h.push((0, e.jsx)(j, { lineItem: n }, "available_cheaper")),
            S &&
              L !== 2 &&
              h.push(
                (0, e.jsx)(
                  ce,
                  { nGifteeAccountID: n.gift_info.accountid_giftee },
                  "non_friend_gift",
                ),
              ),
            h
          );
        }
        function y(s) {
          const { purchase_state: n, notice_text: L, appids: C } = s,
            h = Z(n),
            w = X() === 2 && !!h;
          return (0, e.jsxs)(D.dp, {
            children: [
              L,
              w && (0, e.jsx)("sup", { children: h }),
              " ",
              (0, e.jsx)(V, { rgAppIDs: C ?? [] }),
            ],
          });
        }
        function Y(s) {
          const { errors: n, warnings: L } = s;
          return [
            ...(n?.duplicate_appids_in_cart ?? []),
            ...(n?.missing_must_own_appids ?? []),
            ...(n?.owned_appids ?? []),
            ...(L?.appids_in_mastersub ?? []).flatMap((C) =>
              C.cart_appid ? [C.cart_appid] : [],
            ),
            ...(L?.owned_appids ?? []),
            ...(L?.owned_appids_extra_copy ?? []),
          ];
        }
        function V(s) {
          const { rgAppIDs: n } = s;
          return !n || n.length == 0
            ? null
            : n.map((L, C) =>
                (0, e.jsx)(
                  ae,
                  { appid: L, last: C >= n.length - 1 },
                  `${L}_${C}`,
                ),
              );
        }
        function ae(s) {
          const { appid: n, last: L } = s,
            { data: C } = (0, W.J$)({ appid: n });
          return C
            ? (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)(U.y, { appid: n, name_override: C.name }),
                  !L && (0, e.jsx)(e.Fragment, { children: ", " }),
                ],
              })
            : null;
        }
        function j(s) {
          const { lineItem: n } = s,
            { data: L } = (0, W.mr)(n.item_id),
            { data: C } = (0, W.EO)(n.item_id);
          if (
            !(
              !!!n.gift_info?.accountid_giftee &&
              !!L &&
              !!C &&
              !(0, N.vk)(L, C)
            )
          )
            return null;
          const w = C.packageid
            ? { packageid: C.packageid }
            : { bundleid: C.bundleid };
          return (0, e.jsx)(D.dp, {
            children: r.Q8.LocalizeReact(
              "#Cart_Warning_AvailableAtALowerPrice",
              (0, e.jsx)(U.y, { ...w, name_override: C.purchase_option_name }),
            ),
          });
        }
        function ce(s) {
          const { nGifteeAccountID: n } = s,
            L = z.b2
              .InitFromAccountID(n, O.TS.EUNIVERSE)
              .ConvertTo64BitString(),
            { data: C } = (0, R.Dv)();
          return v.useMemo(() => !C || C.includes(L), [C, L]) || !O.iA.logged_in
            ? null
            : (0, e.jsx)(D.dp, {
                children: r.Q8.Localize("#Cart_Warning_GiftToNonFriend"),
              });
        }
        function le(s) {
          const { lineItem: n } = s;
          if (!n.errors?.owned_appids?.length) return null;
          let L = !!n.gift_info?.accountid_giftee;
          if (n.errors?.has_existing_billing_agreement)
            return (0, e.jsx)(y, {
              purchase_state: _.WN.Gy,
              notice_text: r.Q8.Localize(
                "#Cart_Error_ExistingBillingAgreement",
              ),
            });
          {
            const C = (n.store_item?.included_appids?.length ?? 0) > 1;
            let h = r.Q8.Localize(
              L
                ? "#Cart_Error_AlreadyOwned_GiftLineItem_Game"
                : "#Cart_Error_AlreadyOwned_LineItem_Game",
            );
            return (
              C &&
                (h = r.Q8.Localize(
                  L
                    ? "#Cart_Error_AlreadyOwned_GiftLineItem"
                    : "#Cart_Error_AlreadyOwned_LineItem",
                )),
              (0, e.jsx)(y, {
                purchase_state: _.WN.kj,
                notice_text: h,
                appids: C ? n.errors.owned_appids : void 0,
              })
            );
          }
        }
        function oe(s) {
          const { lineItem: n } = s;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              n.errors?.coupon_exclusive_promo &&
                (0, e.jsx)(y, {
                  purchase_state: _.WN.rp,
                  notice_text: r.Q8.Localize(
                    "#Cart_Error_CouponIsExclusivePromo",
                  ),
                }),
              n.errors?.invalid_coupon &&
                (0, e.jsx)(y, {
                  purchase_state: _.WN.p_,
                  notice_text: r.Q8.Localize("#Cart_Error_CouponIsInvalid"),
                }),
              n.errors?.invalid_coupon_for_item &&
                (0, e.jsx)(y, {
                  purchase_state: _.WN.VJ,
                  notice_text: r.Q8.Localize(
                    "#Cart_Error_CouponIsInvalidForItem",
                  ),
                }),
            ],
          });
        }
        function de(s, n) {
          return v.useMemo(() => {
            let L = new Map(),
              C = new Map(),
              h = 1;
            const S = (b, se) => {
              C.has(b) || C.set(b, { index: h++, footnote_text: se });
            };
            let w = !1;
            s?.cart_items?.forEach((b) => {
              let se = !!b.gift_info?.accountid_giftee;
              b.errors && (w = !0),
                b.errors?.duplicate_appids_in_cart?.length &&
                  S(
                    _.WN.ZK,
                    r.Q8.Localize("#Cart_Error_DuplicateApps_FootNote"),
                  ),
                b.errors?.owned_appids?.length &&
                  (b.errors?.has_existing_billing_agreement
                    ? S(
                        _.WN.Gy,
                        r.Q8.Localize(
                          "#Cart_Error_ExistingBillingAgreement_FootNote",
                        ),
                      )
                    : S(
                        _.WN.kj,
                        r.Q8.Localize(
                          se
                            ? "#Cart_Error_AlreadyOwned_GiftFootNote"
                            : "#Cart_Error_AlreadyOwned_FootNote",
                        ),
                      )),
                b.errors?.unavailable_in_country &&
                  S(
                    _.WN.Hp,
                    r.Q8.Localize("#Cart_Error_UnavailableCountry_FootNote"),
                  ),
                b.errors?.adult_content_restricted &&
                  S(
                    _.WN.C4,
                    r.Q8.Localize(
                      "#Cart_Error_AdultContentRestricted_FootNote",
                    ),
                  ),
                b.errors?.commercial_license_restricted &&
                  S(
                    _.WN.yQ,
                    r.Q8.Localize(
                      "#Cart_Error_CommercialLicenseRestricted_FootNote",
                    ),
                  ),
                b.errors?.missing_must_own_appids &&
                  S(
                    _.WN.VL,
                    se
                      ? r.Q8.Localize(
                          "#Cart_Error_MissingMustOwnApps_FootNoteGift",
                        )
                      : r.Q8.Localize(
                          "#Cart_Error_MissingMustOwnApps_FootNote",
                        ),
                  ),
                b.warnings?.appids_in_mastersub?.length &&
                  S(
                    _.WN.Q7,
                    r.Q8.Localize("#Cart_Error_MasterSubscription_FootNote"),
                  ),
                b.warnings?.price_has_changed &&
                  L.set(
                    _.WN.vY,
                    r.Q8.Localize("#Cart_Warning_PriceChange_FootNote"),
                  );
            });
            let ee = Array.from(L.values());
            return (
              w && ee.unshift(r.Q8.Localize("#Cart_CartLevelErrorNotice")),
              {
                rgCartLevelNotices: ee,
                mapValidateNoticesToFootnote: C,
                eDisplayType: n,
              }
            );
          }, [s, n]);
        }
      },
      97889: (G, F, t) => {
        "use strict";
        t.d(F, { y: () => N });
        var e = t(7850),
          R = t(80702),
          _ = t(40358),
          O = t(64201),
          z = t.n(O);
        const W = {
          direction: "right",
          style: { width: "320px", height: `${320 * (125 / 184)}px` },
        };
        function N(B) {
          const { name_override: f, ...v } = B,
            { data: T } = (0, _.J$)(f ? void 0 : v),
            U = f ?? T?.name;
          return (0, e.jsx)(R.Q, {
            id: v,
            hoverProps: W,
            name: U,
            className: z().LineItemStoreHover,
            bShowWishlistButton: !1,
            children: U,
          });
        }
      },
      48201: (G, F, t) => {
        "use strict";
        t.d(F, { p: () => C });
        var e = t(7850),
          R = t(53080),
          _ = t(85978),
          O = t(19298),
          z = t(71742),
          W = t(29392),
          N = t(48156),
          B = t(72609),
          f = t(57646),
          v = t(47610),
          T = t(27894),
          U = t(24873),
          r = t(3348),
          p = t(40358),
          x = t(68094),
          D = t(29522),
          c = t(5827),
          l = t(56925),
          d = t(54806),
          g = t(64238),
          u = t.n(g),
          P = t(90626),
          Z = t(25792),
          X = t(69736),
          J = t(91405),
          y = t(63088),
          Y = t(79485),
          V = t(48366),
          ae = t(60659),
          j = t(36798),
          ce = t(78280),
          le = t(2165),
          oe = t(97889),
          de = t(86711),
          s = t.n(de),
          n = t(58162),
          L = t(71421);
        function C(i) {
          const {
            lineItems: a,
            cartValidation: o,
            renderLineItem: E = Ee,
            scrollable: m = !1,
          } = i;
          if (!a.length) return (0, e.jsx)(w, {});
          const A = o?.cart_items
            ? o.cart_items.reduce((I, M) => ((I[M.line_item_id] = M), I), {})
            : {};
          return (0, e.jsx)(n.uO, {
            scrollable: m,
            children: a.map((I, M) =>
              I
                ? (0, e.jsx)(
                    Z.tH,
                    {
                      fallback: (Q) => (0, e.jsx)(S, { item: I, error: Q }),
                      children: (0, e.jsx)(h, {
                        item: I,
                        validatedItem: A[I.line_item_id],
                        bCartValidated: !!o,
                        renderLineItem: E,
                      }),
                    },
                    I.line_item_id || M,
                  )
                : (0, e.jsx)(n.vF, {}, M),
            ),
          });
        }
        function h(i) {
          const {
              item: a,
              validatedItem: o,
              bCartValidated: E,
              renderLineItem: m,
            } = i,
            A = ee(a);
          if (!A) throw `Unknown line item type (${a.type})`;
          const { data: I } = (0, p.J$)(A),
            { data: M } = (0, p.U2)(A),
            { data: Q } = (0, p.mr)(A),
            $ = M ? (0, x.Jz)(M) : A;
          return (
            (0, p.lv)($),
            (0, p.qI)($),
            I && (!I.visible || Q === null || (E && !o))
              ? (0, e.jsx)(se, {
                  lineItemID: a.line_item_id,
                  validatedItem: o,
                  storeItem: I,
                })
              : !I || !M || !Q || !o
                ? (0, e.jsx)(n.vF, {})
                : (0, e.jsx)(b, {
                    lineItem: a,
                    validatedItem: o,
                    storeItem: I,
                    displayItem: M,
                    purchaseOption: Q,
                    renderLineItem: m,
                  })
          );
        }
        function S(i) {
          const { item: a, error: o } = i,
            E = (0, y.t)(a.line_item_id),
            m = (0, V.EJ)();
          return (0, e.jsxs)(n.Rz, {
            className: s().ErrorLineItem,
            children: [
              (0, e.jsxs)("div", {
                className: s().Left,
                children: [
                  (0, e.jsx)("div", {
                    className: s().Error,
                    children: j.Q8.Localize("#Cart_LineItem_ErrorBoundary"),
                  }),
                  (0, e.jsx)("div", {
                    className: s().Muted,
                    children: o.message,
                  }),
                ],
              }),
              !m &&
                (0, e.jsx)(O.Z, {
                  onActivate: () => E.mutate(),
                  className: s().RemoveButton,
                  children: j.Q8.Localize("#Cart_Remove"),
                }),
            ],
          });
        }
        function w() {
          return (0, e.jsx)(n.Rz, {
            className: s().ErrorLineItem,
            children: (0, e.jsx)("div", {
              className: s().Left,
              children: (0, e.jsx)("div", {
                className: s().LineItemTitle,
                children: j.Q8.Localize("#Cart_Empty"),
              }),
            }),
          });
        }
        function ee(i) {
          const a = i.type;
          switch (a) {
            case W.KW.$B:
              return { packageid: i.packageid };
            case W.KW.XY:
              return { bundleid: i.bundleid };
            case W.KW.vC:
              return;
            default:
              (0, z.z_)(a, `Unhandled type: ${a}`);
          }
        }
        function b(i) {
          const {
              storeItem: a,
              displayItem: o,
              lineItem: E,
              purchaseOption: m,
              validatedItem: A,
              renderLineItem: I,
            } = i,
            M = E.line_item_id,
            Q = (0, x.Jz)(a),
            $ = (0, y.t)(M),
            te = $.isPending || $.isSuccess,
            { data: re } = (0, p.by)(Q),
            H = (0, D._Z)(Q),
            { data: k, isLoading: ie } = (0, l.Pt)(),
            K = P.useMemo(() => H.filter((We) => k?.has(We)), [H, k]),
            q = P.useId();
          if (ie) return (0, e.jsx)(n.vF, {});
          const _e = E.flags?.is_gift,
            ne = H.length > 0 && K.length === H.length,
            ye = !_e && K.length > 0 && !ne;
          return I({
            lineItem: E,
            storeItem: a,
            validatedItem: A,
            children: (0, e.jsxs)(e.Fragment, {
              children: [
                te && (0, e.jsx)(n.UD, {}),
                (0, e.jsxs)(O.Z, {
                  className: u()(
                    s().InnerLineItemCtn,
                    te && s().PendingLineItem,
                  ),
                  "flow-children": "row",
                  children: [
                    (0, e.jsx)("div", {
                      className: u()(s().LineItemColumn, s().LineItemCapsule),
                      children: (0, e.jsx)(T.p, {
                        storeItem: o,
                        feature: "cart-items",
                        noImpressionTracking: !0,
                        className: s().ImageLink,
                        children: (0, e.jsx)(me, {
                          storeItem: o,
                          alt: a.name,
                          blurred: !!A.errors?.adult_content_restricted,
                        }),
                      }),
                    }),
                    (0, e.jsxs)("div", {
                      className: s().LineItemDetailsCtn,
                      children: [
                        (0, e.jsx)(n.UW, {
                          className: s().LineItemDetailsRowTop,
                          children: (0, e.jsx)("div", {
                            className: s().LineItemTitle,
                            id: q,
                            children: a.name,
                          }),
                        }),
                        re?.is_coming_soon && (0, e.jsx)(fe, { storeItem: a }),
                        (0, e.jsxs)(ue, {
                          validatedItem: A,
                          children: [
                            (0, e.jsx)(Ce, { storeItem: a, purchaseOption: m }),
                            (0, e.jsx)(he, { purchaseOption: m }),
                            (0, e.jsx)(Oe, { storeItem: a, purchaseOption: m }),
                          ],
                        }),
                        (0, e.jsx)(Ae, { validatedItem: A }),
                        ye && (0, e.jsx)(Re, { appids: K }),
                        (0, e.jsxs)(n.UW, {
                          className: s().LineItemSpaceBetween,
                          children: [
                            (0, e.jsx)("div", {
                              className: u()(
                                s().LineItemCol,
                                s().PlatformIcons,
                              ),
                              children: (0, e.jsx)(U.Dm, { id: (0, x.Jz)(o) }),
                            }),
                            (0, e.jsx)(Ie, {
                              purchaseOption: m,
                              validatedItem: A,
                            }),
                          ],
                        }),
                        (0, e.jsx)(ge, {
                          lineItem: E,
                          purchaseOption: m,
                          validatedItem: A,
                          rgAppIDs: H,
                          bAllAppsPrivate: ne,
                          fnRemoveLineItem: $.mutate,
                          accessibilityId: q,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        function se(i) {
          const { lineItemID: a, validatedItem: o, storeItem: E } = i,
            m = (0, y.t)(a),
            A = (0, V.EJ)(),
            I = m.isPending;
          return (0, e.jsxs)(n.Rz, {
            placeholder: !0,
            children: [
              I && (0, e.jsx)(n.UD, {}),
              (0, e.jsxs)(O.Z, {
                className: u()(s().InnerLineItemCtn, I && s().PendingLineItem),
                "flow-children": "row",
                children: [
                  (0, e.jsx)("div", {
                    className: u()(s().LineItemColumn, s().LineItemCapsule),
                    children: (0, e.jsx)(T.p, {
                      storeItem: E,
                      noImpressionTracking: !0,
                      children: (0, e.jsx)(me, { storeItem: E }),
                    }),
                  }),
                  (0, e.jsxs)("div", {
                    className: s().LineItemDetailsCtn,
                    children: [
                      (0, e.jsx)(n.UW, {
                        className: s().LineItemDetailsRowTop,
                        children: (0, e.jsx)("div", {
                          className: s().LineItemTitle,
                          children: E?.name,
                        }),
                      }),
                      !!o && (0, e.jsx)(ue, { validatedItem: o }),
                      !A &&
                        (0, e.jsx)(n.UW, {
                          className: s().LineItemSpaceBetween,
                          children: (0, e.jsx)(O.Z, {
                            focusable: !0,
                            onActivate: () => m.mutate(),
                            className: s().RemoveLineItem,
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
        function me(i) {
          const { storeItem: a, alt: o, blurred: E } = i,
            { data: m } = (0, p.lv)((0, x.Jz)(a));
          let I = `${B.TS.STORE_BASE_URL}public/images/checkout/Cart_generic_header_logo.png`;
          return (
            m?.header
              ? (I =
                  B.TS.STORE_ITEM_BASE_URL +
                  m.asset_url_format.replace("${FILENAME}", m.header))
              : m?.small_capsule &&
                (I =
                  B.TS.STORE_ITEM_BASE_URL +
                  m.asset_url_format.replace("${FILENAME}", m.small_capsule)),
            (0, e.jsx)("img", {
              alt: o ?? a.name,
              className: E ? s().HeaderImgBlurred : s().HeaderImg,
              src: I,
            })
          );
        }
        function Ee(i) {
          return (0, e.jsx)(O.Z, {
            children: (0, e.jsx)(n.Rz, { children: i.children }),
          });
        }
        function ue(i) {
          const { validatedItem: a, children: o } = i;
          return (0, e.jsxs)("div", {
            className: s().LineItemSpaceBetween,
            children: [(0, e.jsx)(le.Yz, { lineItem: a }), o],
          });
        }
        function fe(i) {
          const { storeItem: a } = i,
            { data: o } = (0, p.by)((0, x.Jz)(a)),
            E = (0, r.VM)(o);
          if (!o) return null;
          let m = j.Q8.Localize("#Cart_ComingSoon", E);
          return (
            ["text_tba", "text_comingsoon"].includes(o.coming_soon_display) &&
              (m = E),
            (0, e.jsx)(n.dp, { children: m })
          );
        }
        function Ie(i) {
          const { purchaseOption: a, validatedItem: o } = i;
          let E = a?.formatted_original_price,
            m = a?.formatted_final_price,
            A = a?.discount_pct;
          const I = o.subtotal?.amount_in_cents !== a?.final_price_in_cents;
          return (
            o.original_price &&
              o.subtotal &&
              I &&
              ((E = o.original_price.formatted_amount),
              (m = o.subtotal.formatted_amount),
              (A = (0, n.dR)(o))),
            (0, e.jsx)("div", {
              className: s().LineItemRightCol,
              children: (0, e.jsx)(f.kb, {
                className: s().PriceWidget,
                formatted_orig_price: E,
                formatted_final_price: m,
                discount_percent: A,
                bHideDiscountPercentForCompliance:
                  a.hide_discount_pct_for_compliance,
                bDiscountFromCoupon: !!o.coupon_discount?.amount_in_cents,
              }),
            })
          );
        }
        function ge(i) {
          const {
              lineItem: a,
              purchaseOption: o,
              validatedItem: E,
              rgAppIDs: m,
              bAllAppsPrivate: A,
              fnRemoveLineItem: I,
              accessibilityId: M,
            } = i,
            Q = (0, V.EJ)(),
            [$] = (0, ae.fg)(),
            te =
              $?.accountid_giftee ||
              (Q ? a.gift_info?.accountid_giftee : void 0),
            re = (0, ce.j4)(),
            H =
              (0, V.ZB)() &&
              !E?.restrict_add_additional_to_cart &&
              !(0, V.kx)(re),
            k = E.errors?.adult_content_restricted,
            ie = (0, J.A)(
              a.packageid,
              a.bundleid,
              pe(o),
              void 0,
              "cart-add-additional",
            ),
            K = P.useId(),
            q = P.useId();
          return (0, e.jsxs)(n.UW, {
            className: s().LineItemSpaceBetween,
            children: [
              (0, e.jsx)("div", {
                className: u()(s().LineItemCol, s().PurchaseOptionPickerCtn),
                children: te
                  ? (0, e.jsx)(Le, { recipient: te })
                  : (0, e.jsx)(xe, {
                      lineItem: a,
                      rgAppIDs: m,
                      bAllAppsPrivate: A,
                      purchaseOption: o,
                    }),
              }),
              (0, e.jsxs)("div", {
                className: u()(s().LineItemRightCol, s().AddRemoveLinks),
                children: [
                  H &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)(L.Gq, {
                          toolTipContent: j.Q8.Localize(
                            "#Cart_LineItem_Add_Tooltip",
                          ),
                          usePointerEvents: !0,
                          children: (0, e.jsx)(O.Z, {
                            onActivate: () => !ie.isPending && ie.mutate(),
                            className: s().AddLineItem,
                            id: K,
                            "aria-labelledby": `${K} ${M}`,
                            children: j.Q8.Localize("#Cart_Add"),
                          }),
                        }),
                        "|",
                      ],
                    }),
                  !Q &&
                    (0, e.jsx)(O.Z, {
                      onActivate: () => I(),
                      className: s().RemoveLineItem,
                      id: q,
                      "aria-labelledby": `${q} ${M}`,
                      children: j.Q8.Localize("#Cart_Remove"),
                    }),
                  k &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        "| ",
                        (0, e.jsx)("a", {
                          href: `${B.TS.STORE_CHECKOUT_BASE_URL}checkout/?purchasetype=updatebillinginfo&r=cart`,
                          className: s().VerifyLineItem,
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
        function Le(i) {
          const { data: a } = (0, _.jn)(i.recipient),
            o = a?.public_data?.persona_name;
          return (0, e.jsx)("div", {
            className: s().GiftForNotice,
            children: j.Q8.LocalizeReact(
              "#Cart_GiftForNotice",
              o ? (0, e.jsx)("span", { className: s().Name, children: o }) : "",
            ),
          });
        }
        function Ce(i) {
          const { storeItem: a, purchaseOption: o } = i,
            E = !!o.requires_shipping && a.item_type === N.c6.RD,
            { data: m } = (0, v.DR)(E ? a.id : void 0);
          return m
            ? (0, e.jsx)(n.dp, {
                children: j.Q8.Localize(
                  "#Cart_ShippingEstimate_DeliveryDate",
                  (0, X.x)(m),
                ),
              })
            : null;
        }
        function he(i) {
          const { purchaseOption: a } = i;
          if (!a.requires_shipping) return null;
          const o = B.iA.country_code;
          return ["GB"].includes(o)
            ? (0, e.jsx)(n.dp, {
                children: (0, e.jsx)(O.Z, {
                  children: (0, e.jsx)("a", {
                    className: s().ComplianceLink,
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
        var Pe = ((i) => (
            (i[(i.k_EBillingAgreementTypeInvalid = 0)] =
              "k_EBillingAgreementTypeInvalid"),
            (i[(i.k_EBillingAgreementTypeSteam = 1)] =
              "k_EBillingAgreementTypeSteam"),
            (i[(i.k_EBillingAgreementTypeGame = 2)] =
              "k_EBillingAgreementTypeGame"),
            i
          ))(Pe || {}),
          ve = ((i) => (
            (i[(i.k_ETimeUnitNone = 0)] = "k_ETimeUnitNone"),
            (i[(i.k_ETimeUnitSecond = 1)] = "k_ETimeUnitSecond"),
            (i[(i.k_ETimeUnitMinute = 2)] = "k_ETimeUnitMinute"),
            (i[(i.k_ETimeUnitHour = 3)] = "k_ETimeUnitHour"),
            (i[(i.k_ETimeUnitDay = 4)] = "k_ETimeUnitDay"),
            (i[(i.k_ETimeUnitWeek = 5)] = "k_ETimeUnitWeek"),
            (i[(i.k_ETimeUnitMonth = 6)] = "k_ETimeUnitMonth"),
            (i[(i.k_ETimeUnitYear = 7)] = "k_ETimeUnitYear"),
            i
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
        function Oe(i) {
          const { storeItem: a, purchaseOption: o } = i;
          if (a.item_type !== N.c6.RD) return null;
          const E = o.recurrence_info;
          if (!E) return null;
          let m = "#Package";
          E.billing_agreement_type === 2 && (m = "#GameBillingPackage"),
            o.formatted_final_price && o.discount_pct && (m += "WithDiscount");
          const I = De[E.renewal_time_unit],
            M = m + "CostIncludesSubscriptionBy" + I;
          return (0, e.jsx)(n.dp, {
            children: j.Q8.Localize(
              M,
              o.formatted_final_price,
              E.formatted_renewal_price,
              E.renewal_time_period,
              o.discount_pct,
            ),
          });
        }
        function pe(i) {
          return i.user_can_purchase_as_gift;
        }
        function Me(i) {
          return !i.is_commercial_license && !i.requires_shipping;
        }
        function xe(i) {
          const {
              lineItem: a,
              rgAppIDs: o,
              bAllAppsPrivate: E,
              purchaseOption: m,
            } = i,
            A = (0, Y.C)(),
            I = (0, l.DT)(),
            M = (0, V.EJ)(),
            { bShowPurchaseOptionPicker: Q } = (0, V.cN)(),
            { data: $ } = (0, _.jn)(
              a.gift_info?.accountid_giftee
                ? a.gift_info.accountid_giftee
                : null,
            );
          if (!Q) return null;
          const te = !pe(m) || M,
            re = !Me(m);
          let H = [
            {
              data: "myself",
              label: j.Q8.Localize("#Cart_LineItemOptions_Myself"),
            },
          ];
          if (
            (re ||
              H.push({
                data: "private",
                label: j.Q8.Localize("#Cart_LineItemOptions_Privately"),
                tooltip: j.Q8.Localize("#Cart_LineItemOptions_PrivateTooltip"),
              }),
            !te)
          ) {
            const K = $?.public_data?.persona_name;
            a.gift_info?.accountid_giftee && K
              ? H.push({
                  data: "gift",
                  label: j.Q8.Localize(
                    "#Cart_LineItemOptions_GiftForPersona",
                    K,
                  ),
                })
              : H.push({
                  data: "gift",
                  label: j.Q8.Localize("#Cart_LineItemOptions_Gift"),
                });
          }
          let k = a.flags?.is_gift ? "gift" : "myself";
          if ((k === "myself" && E && (k = "private"), H.length === 1))
            return null;
          const ie = (K) => {
            if (k === K.data) return;
            const q = (ne) => I.mutate({ rgAppIDs: o, bPrivate: ne }),
              _e = (ne) =>
                A.mutate({
                  lineItemID: a.line_item_id,
                  lineItemFlags: { ...a.flags, is_gift: ne },
                  giftInfo: ne ? a.gift_info : void 0,
                });
            k === "private" ? q(!1) : k === "gift" && _e(!1),
              K.data === "private" ? q(!0) : K.data === "gift" && _e(!0);
          };
          return (0, e.jsx)(R.l6, {
            onSelectionChange: ie,
            selectedValue: H.find((K) => K.data === k) ?? null,
            options: H,
            getOptionLabel: (K) =>
              K.tooltip
                ? (0, e.jsx)(L.Gq, {
                    toolTipContent: K.tooltip,
                    usePointerEvents: !0,
                    children: (0, e.jsx)("span", { children: K.label }),
                  })
                : K.label,
            size: "1",
            placement: "bottom-start",
          });
        }
        const Ae = P.memo(function (a) {
          const { validatedItem: o } = a,
            E = o.included_packageids ?? [],
            m = (0, c.eG)(),
            A = (0, d.E)({
              queries: E.map((M) => (0, p.mt)(m, { packageid: M })),
            }),
            I = [
              ...new Set(
                A.map((M) => M.data)
                  .filter((M) => !!M)
                  .flat(),
              ),
            ];
          return !I.length || (I.length == 1 && !o.item_id?.bundleid)
            ? null
            : (0, e.jsxs)(n.UW, {
                text: !0,
                children: [
                  (0, e.jsxs)("span", {
                    children: [
                      j.Q8.LocalizePlural("#Cart_IncludesItems", I.length),
                      ":",
                      " ",
                    ],
                  }),
                  I.map((M, Q) =>
                    (0, e.jsxs)(
                      P.Fragment,
                      {
                        children: [
                          Q > 0 && ", ",
                          (0, e.jsx)(oe.y, { appid: M }),
                        ],
                      },
                      M,
                    ),
                  ),
                ],
              });
        });
        function Re(i) {
          const { appids: a } = i,
            o = a.map((E, m) =>
              (0, e.jsxs)(
                P.Fragment,
                { children: [m > 0 && ", ", (0, e.jsx)(oe.y, { appid: E })] },
                E,
              ),
            );
          return (0, e.jsxs)(n.UW, {
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
          Rz: () => U,
          UD: () => p,
          UW: () => T,
          dR: () => D,
          dp: () => x,
          uO: () => v,
          vF: () => r,
        });
        var e = t(7850),
          R = t(19298),
          _ = t(78365),
          O = t(7967),
          z = t(64238),
          W = t.n(z),
          N = t(85599),
          B = t(86711),
          f = t.n(B);
        function v(c) {
          const { scrollable: l = !1, children: d } = c,
            g = l ? O.MS : R.Z;
          return (0, e.jsx)(g, {
            className: W()(f().LineItemsCtn, l && f().Scrollable),
            focusableIfEmpty: !0,
            children: d,
          });
        }
        function T(c) {
          const { text: l, children: d, className: g, noWrap: u } = c;
          return (0, e.jsx)(R.Z, {
            "flow-children": "row",
            className: W()(
              f().LineItemDetailsRow,
              l && f().Text,
              u && f().NoWrap,
              g,
            ),
            children: d,
          });
        }
        function U(c) {
          const { placeholder: l, className: d, children: g } = c;
          return (0, e.jsx)(_.YZ, {
            className: W()(
              f().LineItemWrapper,
              l && f().LineItemPlaceholder,
              d,
            ),
            children: g,
          });
        }
        function r() {
          return (0, e.jsx)(U, {
            placeholder: !0,
            children: (0, e.jsx)(p, {}),
          });
        }
        function p() {
          return (0, e.jsx)("div", {
            className: f().LoadingThrobber,
            children: (0, e.jsx)(N.t, {
              size: "medium",
              position: "center",
              msDelayAppear: 250,
            }),
          });
        }
        function x(c) {
          const { children: l } = c;
          return (0, e.jsx)(T, {
            text: !0,
            children: (0, e.jsx)("div", {
              className: f().Warning,
              children: l,
            }),
          });
        }
        function D(c) {
          if (c.coupon_applied) return c.coupon_applied.discount_pct;
          const l = parseInt(c.original_price.amount_in_cents),
            d = parseInt(c.subtotal.amount_in_cents);
          return Math.min(99, Math.floor(((l - d) / l) * 100 + 0.5));
        }
      },
      87913: (G, F, t) => {
        "use strict";
        t.d(F, { MT: () => d, g7: () => D, p2: () => l, xz: () => x });
        var e = t(35038),
          R = t(19563),
          _ = t(8173),
          O = t(48156),
          z = t(68312),
          W = t(5827),
          N = t(63667),
          B = t(72609),
          f = t(80902),
          v = t(48366),
          T = t(60659),
          U = t(78280),
          r = t(83665);
        const p = {
            include_basic_info: !0,
            include_assets: !0,
            include_platforms: !0,
            include_release: !0,
            include_included_items: !0,
          },
          x = {
            ...p,
            include_included_items: !0,
            include_all_purchase_options: !0,
            included_item_data_request: p,
          };
        function D() {
          const u = (0, z.KV)(),
            P = (0, U.j4)(),
            [Z] = (0, T.fg)(),
            { storeBrowseContext: X, cacheStoreItemData: J } = (0, W.yn)();
          return (0, f.I)(c(u, P, X, Z, J));
        }
        function c(u, P, Z, X, J) {
          return {
            queryKey: (0, r.m4)(P, X),
            queryFn: async () => g(u, P, Z, X, x, J),
            staleTime: 1 / 0,
            enabled: B.iA.logged_in || !(0, v.c2)(P),
          };
        }
        function l(u) {
          return !u?.cart_items?.length || u.cart_items.length === 0
            ? !1
            : u.cart_items.every(
                ({ store_item: P }) =>
                  P?.item_type == O.c6.RD &&
                  !!(P.self_purchase_option || P.best_purchase_option)
                    ?.requires_shipping,
              );
        }
        function d(u) {
          return !u?.cart_items?.length || u.cart_items.length === 0
            ? !1
            : u.cart_items.every(
                ({ store_item: P, gift_info: Z }) =>
                  P?.item_type == O.c6.RD &&
                  (!!Z?.accountid_giftee || !!Z?.email_giftee),
              );
        }
        async function g(u, P, Z, X, J, y) {
          const Y = e.w.Init(R.vL);
          (0, v.kx)(P) || (0, v.uU)(P) || (0, v.nn)(P)
            ? (Y.Body().set_gidshoppingcart(P.gid),
              X && Y.Body().set_gift_info(_.$z.fromObject(X)))
            : (0, v.sb)(P) && Y.Body().set_gidreplayoftransid(P.gid),
            (0, N.rV)(Z, Y),
            J && (0, N.Bn)(Y, J);
          const V = await R._o.ValidateCart(u, Y);
          if (
            (V.BSuccess() ||
              console.warn(
                `Failed to validate shopping cart: ${V.GetEResult()}`,
              ),
            J && y)
          )
            for (const ae of V.Body().cart_items()) y(ae.store_item(), J);
          return V.Body().toObject();
        }
      },
      38580: (G, F, t) => {
        "use strict";
        t.d(F, { Dv: () => f });
        var e = t(20117),
          R = t(99412),
          _ = t(35038),
          O = t(10335),
          z = t(27386),
          W = t(42993),
          N = t(68312),
          B = t(80902);
        function f() {
          const r = (0, N.KV)(),
            p = (0, W.LH)();
          return (0, B.I)(v(r, p));
        }
        function v(r, p) {
          return {
            queryKey: ["GetFriendsList", p],
            queryFn: async () => {
              const x = _.w.Init(O.pH);
              return (await O.DF.GetFriendsList(r, x))
                .Body()
                .friendslist()
                ?.friends()
                ?.filter((c) => {
                  if (!c.ulfriendid()) return !1;
                  const l = new e.b2(c.ulfriendid());
                  return (
                    (c.efriendrelationship() == R._UC ||
                      c.efriendrelationship() == R.Ec7) &&
                    l.BIsIndividualAccount()
                  );
                })
                .map((c) => c.ulfriendid());
            },
            enabled: !!p,
          };
        }
        function T() {
          const r = useActiveServiceTransport(),
            p = useActiveAccount();
          return useQuery(U(r, p));
        }
        function U(r, p) {
          return {
            queryKey: ["GetFriendNicknameMap", p],
            queryFn: async () => {
              const x = CProtoBufMsg.Init(CPlayer_GetNicknameList_Request),
                D = await PlayerService.GetNicknameList(r, x);
              return new Map(
                D.Body()
                  .toObject()
                  ?.nicknames?.map((c) => [c.accountid, c.nickname]),
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
