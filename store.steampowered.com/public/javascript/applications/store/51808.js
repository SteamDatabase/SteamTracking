/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [51808],
  {
    60097: (e) => {
      e.exports = {
        strMaxCartPartResponsiveWidth: "840px",
        CartCard: "_4SG2MjCMpIRt6W-Zj4Oxm",
        HeaderNotices: "_2BtczALVCY2zzCLnj8oga9",
        FooterNoticesHeader: "_2itvgQZbn40lY_jj5sG8it",
        MustFix: "_1SFErQFwOLmnLCBVlq9zxK",
        FooterNotice: "_1WMk6EdVNns2fKuDOCrBX3",
        NoticeIndex: "_3N9Ik0sMA90E7jGHJqycWH",
      };
    },
    86711: (e) => {
      e.exports = {
        strMaxCartPartResponsiveWidth: "840px",
        CartCard: "_1MfAwU630QwDv6FuV9c_Dr",
        LineItemsCtn: "_3ypRUtQoOfOrCsyHlzfGm4",
        StoreSalePriceBox: "_5m_q0MLlnLkt_KBd7iMbO",
        StoreSaleDiscountedPriceCtn: "_1ZzX6NkuELfMhPL0SJCQSK",
        Scrollable: "_2A58_XmT-KCSwE_kh-xntF",
        LineItemWrapper: "XjPmFc2t_i1DAuEXEbIX",
        fadeIn: "xtUORpc8Xy9Hs_tdAIitT",
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
        LineItemDropDown: "QL-7d2s_ZGbceWxP5eoY4",
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
        DropDownThin: "_2GLDG_XIMaVS7hU2xEFzBo",
        DropDownOptionsCtnThin: "_1Vsr8vtFZd-ID4w4nvUjbe",
        DropDownOptionItem: "_3RfIktrc1KzaKTWmWS3JLC",
        WhiteText: "_1CYn6Bwc5kuZ25-Gyb9btE",
        ErrorLineItem: "_2Qnb-DOaU8BbFWOUBG3hs1",
        Left: "Twv2unKjIVTB3vmgieygi",
        Error: "_2LPurUnl-MyMX6q6B0uNX",
        Muted: "_3efIWtJm5nAuQLmq9N3nJd",
        GiftForNotice: "tKoWmz4HQdpU6S-Fq6IEh",
        Name: "_2BZrRaucjIMeqixZMVlakn",
        RemoveButton: "_1j8t9ZjX3tyKrSBnkY6IeG",
        LineItemStoreHover: "MaJOGQvA8cOPjY5-v5S-c",
      };
    },
    90485: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => g, t: () => m });
      var i = n(56545),
        r = n(3108),
        o = n(71430),
        a = n(23809),
        s = n(75233),
        c = n(51614),
        _ = n(79443),
        l = n(65244),
        d = n(30709),
        p = n(93676),
        u = n(99838);
      function m(e) {
        const t = (0, a.KV)(),
          n = (0, s.jE)(),
          l = (0, d.j4)();
        return (0, c.n)({
          mutationFn: async () =>
            await (async function (e, t, n) {
              if ((0, _.c2)(t)) {
                const t = i.w.Init(r.tj);
                t.Body().set_line_item_id(n);
                const o = await r.t8.RemoveItemFromCart(e, t);
                return (0, u.WZ)(), o.Body().toObject();
              }
              {
                const r = i.w.Init(o.VJ);
                r.Body().set_gidlineitems([n]),
                  r.Body().set_gidshoppingcart(t.gid);
                const a = await o.Q2.RemoveLineItems(e, r);
                return (0, u.WZ)(), a.Body().toObject();
              }
            })(t, l, e),
          onSuccess: (e) => {
            "cart" in e ? (0, p.LN)(n, l, e.cart) : (0, p.Cd)(n, l);
          },
        });
      }
      function g() {
        const e = (0, a.KV)(),
          t = (0, s.jE)(),
          n = (0, d.j4)();
        return (0, c.n)({
          mutationFn: async () =>
            await (async function (e, t) {
              if ((0, _.c2)(t)) {
                const t = i.w.Init(r.HK);
                return (await r.t8.DeleteCart(e, t)).BSuccess();
              }
              {
                const n = await (0, l.d0)(e, t);
                if (n && n.line_items && n.line_items.length) {
                  const r = i.w.Init(o.VJ);
                  return (
                    r
                      .Body()
                      .set_gidlineitems(
                        n.line_items.map(({ line_item_id: e }) => e),
                      ),
                    r.Body().set_gidshoppingcart(t.gid),
                    (await o.Q2.RemoveLineItems(e, r)).BSuccess()
                  );
                }
                return !1;
              }
            })(e, n),
          onSuccess: () => (0, p.Cd)(t, n),
        });
      }
    },
    13904: (e, t, n) => {
      "use strict";
      n.d(t, { C: () => m });
      var i = n(56545),
        r = n(3108),
        o = n(16909),
        a = n(66418),
        s = n(23809),
        c = n(75233),
        _ = n(51614),
        l = n(30709),
        d = n(93676),
        p = n(79443),
        u = n(71430);
      function m(e) {
        const t = (0, l.j4)(),
          n = (0, s.KV)(),
          m = (0, c.jE)(),
          g = (0, d.GO)(t);
        return (0, _.n)({
          mutationFn: (e) =>
            (async function (e, t, n, s, c, _) {
              if ((0, p.c2)(t)) {
                const t = i.w.Init(r.Bk);
                t.Body().set_line_item_id(n),
                  t.Body().set_user_country(a.iA.country_code),
                  c && t.Body().set_gift_info(o.$z.fromObject(c)),
                  s && t.Body().set_flags(r.Eo.fromObject(s)),
                  _ && t.Body().set_apply_gidcoupon(_);
                const l = await r.t8.ModifyLineItem(e, t);
                return (
                  l.BSuccess() ||
                    console.warn(
                      `Failed to update gift info: ${l.GetEResult()}`,
                    ),
                  [l.GetEResult(), l.Body().toObject()]
                );
              }
              {
                const r = i.w.Init(u.ic);
                r.Body().set_gidlineitem(n),
                  r.Body().set_gidshoppingcart(t.gid),
                  c
                    ? r.Body().set_gift_info(o.$z.fromObject(c))
                    : s?.is_gift &&
                      r
                        .Body()
                        .set_gift_info(
                          o.$z.fromObject({
                            accountid_giftee: 0,
                            email_giftee: "",
                          }),
                        );
                const a = await u.Q2.ModifyLineItem(e, r);
                return (
                  a.BSuccess() ||
                    console.warn(
                      `Failed to update gift info in anonymous cart: ${a.GetEResult()}`,
                    ),
                  a.Body().toObject()
                );
              }
            })(n, t, e.lineItemID, e.lineItemFlags, e.giftInfo, e.gidCoupon),
          onMutate: async (e) => {
            await m.cancelQueries({ queryKey: g });
            const t = m.getQueryData(g);
            return (
              m.setQueryData(g, (t) => ({
                ...(t ?? {}),
                line_items:
                  t?.line_items?.map((t) =>
                    t.line_item_id !== e.lineItemID
                      ? t
                      : {
                          ...t,
                          flags: e.lineItemFlags || t.flags,
                          gift_info: e.giftInfo || t.gift_info,
                        },
                  ) ?? [],
              })),
              { previousCart: t }
            );
          },
          onSuccess: (e) => {
            "cart" in e ? (0, d.LN)(m, t, e.cart) : (0, d.Cd)(m, t);
          },
          onError: (e, t, n) => {
            n?.previousCart && m.setQueryData(g, n.previousCart);
          },
        });
      }
    },
    42798: (e, t, n) => {
      "use strict";
      n.d(t, {
        LP: () => I,
        WA: () => i,
        Yz: () => v,
        ZZ: () => y,
        wW: () => L,
      });
      var i,
        r = n(7850),
        o = n(93332),
        a = n(16909),
        s = n(66418),
        c = n(29233),
        _ = n(69345),
        l = n(39777),
        d = n(52541),
        p = n(64238),
        u = n.n(p),
        m = n(90626),
        g = n(85906),
        f = n(60097),
        h = n(70343);
      function x(e) {
        const { name_override: t, ...n } = e,
          { data: i } = (0, l.J$)(n);
        return i
          ? (0, r.jsx)(_.p, {
              storeItem: i,
              noImpressionTracking: !0,
              children: t ?? i.name,
            })
          : t
            ? (0, r.jsx)(r.Fragment, { children: t })
            : null;
      }
      !(function (e) {
        (e[(e.k_ECartDisplayType_Unknown = 0)] = "k_ECartDisplayType_Unknown"),
          (e[(e.k_ECartDisplayType_Modal = 1)] = "k_ECartDisplayType_Modal"),
          (e[(e.k_ECartDisplayType_FullPage = 2)] =
            "k_ECartDisplayType_FullPage");
      })(i || (i = {}));
      const C = m.createContext({
        rgCartLevelNotices: [],
        mapValidateNoticesToFootnote: new Map(),
        eDisplayType: i.k_ECartDisplayType_Unknown,
        ItemLink: x,
      });
      function L(e) {
        const {
            validateCart: t,
            eDisplayType: n,
            ItemLink: i,
            children: o,
          } = e,
          s = (function (e, t, n) {
            return m.useMemo(() => {
              let i = new Map(),
                r = new Map(),
                o = 1;
              const s = (e, t) => {
                r.has(e) || r.set(e, { index: o++, footnote_text: t });
              };
              let c = !1;
              e?.cart_items?.forEach((e) => {
                let t = !!e.gift_info?.accountid_giftee;
                e.errors && (c = !0),
                  e.errors?.duplicate_appids_in_cart?.length &&
                    s(
                      a.WN.ZK,
                      g.Q8.Localize("#Cart_Error_DuplicateApps_FootNote"),
                    ),
                  e.errors?.owned_appids?.length &&
                    (e.errors?.has_existing_billing_agreement
                      ? s(
                          a.WN.Gy,
                          g.Q8.Localize(
                            "#Cart_Error_ExistingBillingAgreement_FootNote",
                          ),
                        )
                      : s(
                          a.WN.kj,
                          g.Q8.Localize(
                            t
                              ? "#Cart_Error_AlreadyOwned_GiftFootNote"
                              : "#Cart_Error_AlreadyOwned_FootNote",
                          ),
                        )),
                  e.errors?.unavailable_in_country &&
                    s(
                      a.WN.Hp,
                      g.Q8.Localize("#Cart_Error_UnavailableCountry_FootNote"),
                    ),
                  e.errors?.adult_content_restricted &&
                    s(
                      a.WN.C4,
                      g.Q8.Localize(
                        "#Cart_Error_AdultContentRestricted_FootNote",
                      ),
                    ),
                  e.errors?.commercial_license_restricted &&
                    s(
                      a.WN.yQ,
                      g.Q8.Localize(
                        "#Cart_Error_CommercialLicenseRestricted_FootNote",
                      ),
                    ),
                  e.errors?.missing_must_own_appids &&
                    s(
                      a.WN.VL,
                      t
                        ? g.Q8.Localize(
                            "#Cart_Error_MissingMustOwnApps_FootNoteGift",
                          )
                        : g.Q8.Localize(
                            "#Cart_Error_MissingMustOwnApps_FootNote",
                          ),
                    ),
                  e.warnings?.appids_in_mastersub?.length &&
                    s(
                      a.WN.Q7,
                      g.Q8.Localize("#Cart_Error_MasterSubscription_FootNote"),
                    ),
                  e.warnings?.price_has_changed &&
                    i.set(
                      a.WN.vY,
                      g.Q8.Localize("#Cart_Warning_PriceChange_FootNote"),
                    );
              });
              let _ = Array.from(i.values());
              return (
                c && _.unshift(g.Q8.Localize("#Cart_CartLevelErrorNotice")),
                {
                  rgCartLevelNotices: _,
                  mapValidateNoticesToFootnote: r,
                  eDisplayType: t,
                  ItemLink: n,
                }
              );
            }, [e, t, n]);
          })(t, n, i ?? x);
        return (0, r.jsx)(C.Provider, { value: s, children: o });
      }
      function y() {
        const { rgCartLevelNotices: e } = m.useContext(C);
        return e && e.length
          ? 1 == e.length
            ? (0, r.jsx)("div", {
                className: f.HeaderNotices,
                children: g.Q8.Localize("#Cart_CartLevelErrorFormat", e[0]),
              })
            : (0, r.jsxs)("div", {
                className: f.HeaderNotices,
                children: [
                  (0, r.jsx)("div", {
                    children: g.Q8.Localize("#Cart_CartLevelErrorMultiple"),
                  }),
                  (0, r.jsx)("ul", {
                    children: e.map((e, t) =>
                      (0, r.jsx)("li", { children: e }, t),
                    ),
                  }),
                ],
              })
          : null;
      }
      function I(e) {
        const { validateCart: t } = e,
          { mapValidateNoticesToFootnote: n } = m.useContext(C);
        if (!n || !n.size) return null;
        const i = (t?.cart_items || []).every((e) => !e.errors),
          o = i
            ? g.Q8.Localize("#Cart_FooterNoticeHeader_Warning")
            : g.Q8.Localize("#Cart_FooterNoticeHeader_MustFix"),
          a = u()(f.FooterNoticesHeader, !i && f.MustFix);
        return (0, r.jsxs)("div", {
          children: [
            (0, r.jsx)("div", { className: a, children: o }),
            Array.from(n).map(([e, t]) =>
              (0, r.jsx)(j, { notice: t }, t.index),
            ),
          ],
        });
      }
      function j(e) {
        const { notice: t } = e;
        return (0, r.jsxs)("div", {
          className: f.FooterNotice,
          children: [
            (0, r.jsx)("div", {
              className: f.NoticeIndex,
              children: (0, r.jsx)("sup", { children: t.index }),
            }),
            (0, r.jsx)("div", { children: t.footnote_text }),
          ],
        });
      }
      function w() {
        const e = m.useContext(C);
        return e?.eDisplayType ?? i.k_ECartDisplayType_Unknown;
      }
      function N() {
        const e = m.useContext(C);
        return e?.ItemLink ?? x;
      }
      function v(e) {
        const { lineItem: t } = e,
          n = w();
        let o = [],
          s = !!t.gift_info?.accountid_giftee;
        return (
          t.errors?.duplicate_appids_in_cart?.length &&
            o.push(
              (0, r.jsx)(
                E,
                {
                  purchase_state: a.WN.ZK,
                  notice_text: g.Q8.Localize(
                    "#Cart_Error_DuplicateApps_LineItem",
                  ),
                  appids: t.errors.duplicate_appids_in_cart,
                },
                "duplicate_appids",
              ),
            ),
          o.push((0, r.jsx)(B, { lineItem: t }, "owned_apps")),
          t.errors?.unavailable_in_country &&
            o.push(
              (0, r.jsx)(
                E,
                {
                  purchase_state: a.WN.Hp,
                  notice_text: g.Q8.Localize(
                    "#Cart_Error_UnavailableCountry_LineItem",
                  ),
                },
                "unavailable_in_country",
              ),
            ),
          t.errors?.adult_content_restricted &&
            o.push(
              (0, r.jsx)(
                E,
                {
                  purchase_state: a.WN.C4,
                  notice_text: g.Q8.Localize(
                    "#Cart_Error_AdultContentRestricted_LineItem",
                  ),
                },
                "adult_content_restricted",
              ),
            ),
          t.errors?.commercial_license_restricted &&
            o.push(
              (0, r.jsx)(
                E,
                {
                  purchase_state: a.WN.yQ,
                  notice_text: g.Q8.Localize(
                    "#Cart_Error_CommercialLicenseRestricted_LineItem",
                  ),
                },
                "commercial_license_restricted",
              ),
            ),
          t.errors?.gift_not_valid_for_recipient_region &&
            o.push(
              (0, r.jsx)(
                E,
                {
                  purchase_state: a.WN._o,
                  notice_text: g.Q8.Localize(
                    "#Cart_Error_GiftRecipientInvalid",
                  ),
                },
                "gift_recipient_invalid",
              ),
            ),
          o.push((0, r.jsx)(b, { lineItem: t }, "coupon_notices")),
          t.errors?.too_many_in_cart &&
            o.push(
              (0, r.jsx)(
                E,
                {
                  purchase_state: a.WN.YF,
                  notice_text: g.Q8.Localize("#Cart_Error_TooManyInCart"),
                },
                "too_many_in_cart",
              ),
            ),
          t.errors?.missing_must_own_appids?.length &&
            o.push(
              (0, r.jsx)(
                E,
                {
                  purchase_state: a.WN.VL,
                  notice_text: s
                    ? g.Q8.Localize(
                        "#Cart_Error_MissingMustOwnApps_GiftLineItem",
                      )
                    : g.Q8.Localize("#Cart_Error_MissingMustOwnApps_LineItem"),
                  appids: t.errors.missing_must_own_appids,
                },
                "missing_must_own_appids",
              ),
            ),
          t.warnings?.appids_in_mastersub?.length &&
            o.push(
              (0, r.jsx)(
                E,
                {
                  purchase_state: a.WN.Q7,
                  notice_text: g.Q8.Localize(
                    "#Cart_Error_MasterSubscription_LineItem",
                  ),
                  appids: t.warnings.appids_in_mastersub.flatMap((e) =>
                    e.cart_appid ? [e.cart_appid] : [],
                  ),
                },
                "appids_in_mastersub",
              ),
            ),
          t.warnings?.owned_appids?.length &&
            o.push(
              (0, r.jsx)(
                E,
                {
                  purchase_state: a.WN.fZ,
                  notice_text: g.Q8.Localize(
                    "#Cart_Warning_AlreadyOwned_LineItem",
                  ),
                  appids: t.warnings.owned_appids,
                },
                "owned_appids",
              ),
            ),
          t.warnings?.owned_appids_extra_copy?.length &&
            o.push(
              (0, r.jsx)(
                E,
                {
                  purchase_state: a.WN.Vx,
                  notice_text: g.Q8.Localize(
                    "#Cart_Warning_ExtraCopies_LineItem",
                  ),
                  appids: t.warnings.owned_appids_extra_copy,
                },
                "owned_appids_extra_copy",
              ),
            ),
          t.warnings?.price_has_changed &&
            o.push(
              (0, r.jsx)(
                E,
                {
                  purchase_state: a.WN.vY,
                  notice_text: g.Q8.Localize(
                    "#Cart_Warning_PriceChange_LineItem",
                  ),
                },
                "price_has_changed",
              ),
            ),
          t.warnings?.non_refundable &&
            o.push(
              (0, r.jsx)(
                E,
                {
                  purchase_state: a.WN.YQ,
                  notice_text: g.Q8.Localize("#Cart_Warning_NoRefund_LineItem"),
                },
                "non_refundable",
              ),
            ),
          t.warnings?.gift_recipient_higher_price &&
            o.push(
              (0, r.jsx)(
                E,
                {
                  purchase_state: a.WN.j6,
                  notice_text: g.Q8.Localize(
                    "#Cart_Warning_RecipientHigherPrice",
                  ),
                },
                "gift_recipient_higher_price",
              ),
            ),
          o.push((0, r.jsx)(z, { lineItem: t }, "available_cheaper")),
          s &&
            n !== i.k_ECartDisplayType_FullPage &&
            o.push(
              (0, r.jsx)(
                Q,
                { nGifteeAccountID: t.gift_info.accountid_giftee },
                "non_friend_gift",
              ),
            ),
          o
        );
      }
      function E(e) {
        const { purchase_state: t, notice_text: n, appids: o } = e,
          a = (function (e) {
            const t = m.useContext(C);
            return t?.mapValidateNoticesToFootnote.get(e)?.index;
          })(t),
          s = w() === i.k_ECartDisplayType_FullPage && !!a;
        return (0, r.jsxs)(h.dp, {
          children: [
            n,
            s && (0, r.jsx)("sup", { children: a }),
            " ",
            (0, r.jsx)(F, { rgAppIDs: o ?? [] }),
          ],
        });
      }
      function F(e) {
        const { rgAppIDs: t } = e;
        return t && 0 != t.length
          ? t.map((e, n) =>
              (0, r.jsx)(W, { appid: e, last: n >= t.length - 1 }, `${e}_${n}`),
            )
          : null;
      }
      function W(e) {
        const { appid: t, last: n } = e,
          i = N(),
          { data: o } = (0, l.J$)({ appid: t });
        return o
          ? (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(i, { appid: t, name_override: o.name }),
                !n && (0, r.jsx)(r.Fragment, { children: ", " }),
              ],
            })
          : null;
      }
      function z(e) {
        const { lineItem: t } = e,
          { data: n } = (0, l.mr)(t.item_id),
          { data: i } = (0, l.EO)(t.item_id),
          o = N();
        if (!!(!!t.gift_info?.accountid_giftee || !n || !i || (0, d.vk)(n, i)))
          return null;
        const a = i.packageid
          ? { packageid: i.packageid }
          : { bundleid: i.bundleid };
        return (0, r.jsx)(h.dp, {
          children: g.Q8.LocalizeReact(
            "#Cart_Warning_AvailableAtALowerPrice",
            (0, r.jsx)(o, { ...a, name_override: i.purchase_option_name }),
          ),
        });
      }
      function Q(e) {
        const { nGifteeAccountID: t } = e,
          n = c.b2.InitFromAccountID(t, s.TS.EUNIVERSE).ConvertTo64BitString(),
          { data: i } = (0, o.Dv)();
        return m.useMemo(() => !i || i.includes(n), [i, n]) || !s.iA.logged_in
          ? null
          : (0, r.jsx)(h.dp, {
              children: g.Q8.Localize("#Cart_Warning_GiftToNonFriend"),
            });
      }
      function B(e) {
        const { lineItem: t } = e;
        if (!t.errors?.owned_appids?.length) return null;
        let n = !!t.gift_info?.accountid_giftee;
        if (t.errors?.has_existing_billing_agreement)
          return (0, r.jsx)(E, {
            purchase_state: a.WN.Gy,
            notice_text: g.Q8.Localize("#Cart_Error_ExistingBillingAgreement"),
          });
        {
          const e = (t.store_item?.included_appids?.length ?? 0) > 1;
          let i = g.Q8.Localize(
            n
              ? "#Cart_Error_AlreadyOwned_GiftLineItem_Game"
              : "#Cart_Error_AlreadyOwned_LineItem_Game",
          );
          return (
            e &&
              (i = g.Q8.Localize(
                n
                  ? "#Cart_Error_AlreadyOwned_GiftLineItem"
                  : "#Cart_Error_AlreadyOwned_LineItem",
              )),
            (0, r.jsx)(E, {
              purchase_state: a.WN.kj,
              notice_text: i,
              appids: e ? t.errors.owned_appids : void 0,
            })
          );
        }
      }
      function b(e) {
        const { lineItem: t } = e;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            t.errors?.coupon_exclusive_promo &&
              (0, r.jsx)(E, {
                purchase_state: a.WN.rp,
                notice_text: g.Q8.Localize(
                  "#Cart_Error_CouponIsExclusivePromo",
                ),
              }),
            t.errors?.invalid_coupon &&
              (0, r.jsx)(E, {
                purchase_state: a.WN.p_,
                notice_text: g.Q8.Localize("#Cart_Error_CouponIsInvalid"),
              }),
            t.errors?.invalid_coupon_for_item &&
              (0, r.jsx)(E, {
                purchase_state: a.WN.VJ,
                notice_text: g.Q8.Localize(
                  "#Cart_Error_CouponIsInvalidForItem",
                ),
              }),
          ],
        });
      }
    },
    70343: (e, t, n) => {
      "use strict";
      n.d(t, {
        Rz: () => m,
        UD: () => f,
        UW: () => u,
        dR: () => x,
        dp: () => h,
        uO: () => p,
        vF: () => g,
      });
      var i = n(7850),
        r = n(76217),
        o = n(37788),
        a = n(75204),
        s = n(64238),
        c = n.n(s),
        _ = n(22797),
        l = n(86711),
        d = n.n(l);
      function p(e) {
        const { scrollable: t = !1, children: n } = e,
          o = t ? a.MS : r.Z;
        return (0, i.jsx)(o, {
          className: c()(d().LineItemsCtn, t && d().Scrollable),
          focusableIfEmpty: !0,
          children: n,
        });
      }
      function u(e) {
        const { text: t, children: n, className: o, noWrap: a } = e;
        return (0, i.jsx)(r.Z, {
          "flow-children": "row",
          className: c()(
            d().LineItemDetailsRow,
            t && d().Text,
            a && d().NoWrap,
            o,
          ),
          children: n,
        });
      }
      function m(e) {
        const { placeholder: t, className: n, children: r } = e;
        return (0, i.jsx)(o.YZ, {
          className: c()(d().LineItemWrapper, t && d().LineItemPlaceholder, n),
          children: r,
        });
      }
      function g() {
        return (0, i.jsx)(m, { placeholder: !0, children: (0, i.jsx)(f, {}) });
      }
      function f() {
        return (0, i.jsx)("div", {
          className: d().LoadingThrobber,
          children: (0, i.jsx)(_.t, {
            size: "medium",
            position: "center",
            msDelayAppear: 250,
          }),
        });
      }
      function h(e) {
        const { children: t } = e;
        return (0, i.jsx)(u, {
          text: !0,
          children: (0, i.jsx)("div", { className: d().Warning, children: t }),
        });
      }
      function x(e) {
        if (e.coupon_applied) return e.coupon_applied.discount_pct;
        const t = parseInt(e.original_price.amount_in_cents),
          n = parseInt(e.subtotal.amount_in_cents);
        return Math.min(99, Math.floor(((t - n) / t) * 100 + 0.5));
      }
    },
    8364: (e, t, n) => {
      "use strict";
      n.d(t, { g: () => m });
      var i = n(56545),
        r = n(94076),
        o = n(16909),
        a = n(23809),
        s = n(9006),
        c = n(58214),
        _ = n(66418),
        l = n(80902),
        d = n(79443),
        p = n(30709),
        u = n(93676);
      function m(e, t) {
        const n = (0, a.KV)(),
          m = (0, p.j4)(),
          { storeBrowseContext: g, cacheStoreItemData: f } = (0, s.yn)();
        return (0, l.I)({
          queryKey: (0, u.m4)(m, e),
          queryFn: async () =>
            (async function (e, t, n, a, s, _) {
              const l = i.w.Init(r.vL);
              (0, d.kx)(t) || (0, d.uU)(t)
                ? (l.Body().set_gidshoppingcart(t.gid),
                  a && l.Body().set_gift_info(o.$z.fromObject(a)))
                : (0, d.sb)(t) && l.Body().set_gidreplayoftransid(t.gid);
              (0, c.rV)(n, l), s && (0, c.Bn)(l, s);
              const p = await r._o.ValidateCart(e, l);
              p.BSuccess() ||
                console.warn(
                  `Failed to validate shopping cart: ${p.GetEResult()}`,
                );
              if (s && _)
                for (const e of p.Body().cart_items()) _(e.store_item(), s);
              return p.Body().toObject();
            })(n, m, g, e, t, f),
          staleTime: 1 / 0,
          enabled: _.iA.logged_in || !(0, d.c2)(m),
        });
      }
    },
    93332: (e, t, n) => {
      "use strict";
      n.d(t, { Dv: () => l });
      var i = n(29233),
        r = n(22837),
        o = n(56545),
        a = n(88544),
        s = (n(42457), n(68950)),
        c = n(23809),
        _ = n(80902);
      function l() {
        const e = (0, c.KV)(),
          t = (0, s.LH)();
        return (0, _.I)(
          (function (e, t) {
            return {
              queryKey: ["GetFriendsList", t],
              queryFn: async () => {
                const t = o.w.Init(a.pH),
                  n = await a.DF.GetFriendsList(e, t);
                return n
                  .Body()
                  .friendslist()
                  ?.friends()
                  ?.filter((e) => {
                    if (!e.ulfriendid()) return !1;
                    const t = new i.b2(e.ulfriendid());
                    return (
                      (e.efriendrelationship() == r._UC ||
                        e.efriendrelationship() == r.Ec7) &&
                      t.BIsIndividualAccount()
                    );
                  })
                  .map((e) => e.ulfriendid());
              },
            };
          })(e, t),
        );
      }
    },
  },
]);
