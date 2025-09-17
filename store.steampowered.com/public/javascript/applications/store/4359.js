/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [4359],
  {
    18714: (e) => {
      e.exports = {
        narrowWidth: "500px",
        "duration-app-launch": "800ms",
        MainCarousel: "_3SWsMT4_EVVsmPbanjlEy4",
        FeatureCtn: "_10K5p_DOyGW-WttCA1UwuC",
        StoreSection: "OyJ48UmHDKl9fN7ue4oPF",
        SectionTitle: "_2RnIwgy025bixjWk2UTw40",
        SectionDescription: "nVpbhpPkgrAwu1ZjFf7-B",
        SectionTitleCtn: "_3LagaO9m29xPGnO2YwpQnq",
        SpotlightsColumn: "_2Y2C1oQ7JEMkq2AoDp_S0A",
        SpecialsItem: "_1txjwTLoJcqr0tBIHfKXTG",
        SpotlightCtn: "_10ZMM-6TwuIxLIDYNo11cI",
        SpotlightImageCtn: "_1bl_5_eovS3fDHK3GbmixH",
        CapsuleDecorators: "_2kI35iD_oF1-ul1amEDSsK",
        SpotlightTextCtn: "_1clRj5v7vU3Cuj7x9c3ZNZ",
        SpotlightTitle: "_2egM2GG5RaDSQYVNWlMHat",
        SpotlightBody: "_1ls2pcPp4wzuE2mXhMudcd",
        SpotlightWeeklongTextCtn: "_3oM7Hgank9qu0ZtiIqT4Ti",
        SpotlightItemCount: "MsDhVPTMNn95Jd3XWTPQR",
        BottomBarPriceInfo: "w6OMUI_I9oVaxDOwRzRrh",
        BroadcastPage: "_2wLdHFCsbh4BfZ6kvvpRyL",
        BroadcastCtn: "_1D6ilQYGn-cYI2fhTAjSzD",
        BroadcastImageCtn: "cIETZLGVM0l5WCskcyNy2",
        BroadcastVideoThumbnail: "_39GHoC1PY5ctRSLAksxgN2",
        BroadcastPlayIcon: "_39krE1gLBTakOzuK41yZBD",
        BroadcastTextCtn: "_14UDZIeZXOLeUPaEDmYrfn",
        BroadcastName: "_3mq3Uyxqjh000D4-OJ9PiI",
        BroadcastDesc: "_3jIzvnoNk4DzmB7w3vl3dz",
        DailyDealCtn: "_3pSANczPET1GBWiNfM8ZEZ",
        DailyDealImageCtn: "pNmm6ej3gbZJbTFnF34Bb",
        DailyDealTextCtn: "_1tG1_bqddtY0lm02Wf4X9T",
        DailyDealDesc: "_21_xVixMh0-rRqUGdGxbEg",
        ContentHubTakeoverCtn: "_2NgkNEEvdNAueuTkHH4V0S",
        TweaksMenu: "_3N0H151KuH7D3iNrbRNL3D",
        MenuTitle: "_1qcGKxEKb2AANDw4iXQ0kF",
        MenuOptions: "_2BNKaMvGCPl8BE2y48Zyu2",
      };
    },
    30261: (e) => {
      e.exports = {
        StoreSalePriceWidget: "NIRD8Bn9II9OQY1KDrAZv",
        StoreSaleDiscountedPriceCtn: "_2M2uuGKI-mqASr4K5BRefp",
        StoreSalePriceBox: "pk-LoKoNmmPK4GBiC9DR8",
        StoreSaleReservationPriceBox: "_2KER4-iUzYJ7IYSjvQaG8T",
        StoreSaleDiscountBox: "XMxkarW3W_NNebjelsgAY",
        FromCoupon: "_3rH5bNCtORkBasSH4z6zfz",
        StoreOriginalPrice: "_3-o3G9jt3lqcvbRXt8epsn",
      };
    },
    64466: (e, t, a) => {
      "use strict";
      a.d(t, { l: () => i });
      var n = a(30470);
      function i(e, t) {
        if (e?.asset_url_format && e[t])
          return (
            n.TS.BASE_URL_SHARED_CDN +
            "/store_item_assets/" +
            e.asset_url_format.replace("${FILENAME}", e[t])
          );
      }
    },
    31335: (e, t, a) => {
      "use strict";
      a.d(t, { Li: () => D, ue: () => E });
      var n = a(90626),
        i = a(76217),
        c = a(62792),
        r = (a(64466), a(18654)),
        o = a.n(r),
        l = a(94011),
        s = a(84518),
        m = a(12155),
        d = a(60014),
        u = a(51272),
        _ = a(52038),
        p = (a(61859), a(30470), a(18714)),
        S = a(39777),
        g = a(52541);
      function D(e) {
        const { spotlight: t } = e,
          a = (0, d.aL)(t.url, "spotlight");
        return n.createElement(
          s.A,
          {
            appID: "app" == t.item?.type ? t.item.id : void 0,
            feature: "spotlight",
          },
          n.createElement(
            i.Z,
            {
              className: p.SpotlightCtn,
              onOKButton: () => {
                window.location.href = a;
              },
            },
            n.createElement(
              "div",
              { className: p.SpotlightImageCtn },
              n.createElement(
                "div",
                {
                  className: (0, _.A)(r.CapsuleDecorators, p.CapsuleDecorators),
                },
                t.has_live_broadcast && n.createElement(l.K, null),
              ),
              t.open_in_new_window
                ? n.createElement(
                    u.uU,
                    { href: a },
                    n.createElement("img", { src: t.image_url, alt: t.title }),
                  )
                : n.createElement(
                    "a",
                    { href: a },
                    n.createElement("img", { src: t.image_url, alt: t.title }),
                  ),
            ),
            n.createElement(
              "div",
              { className: p.SpotlightTextCtn },
              n.createElement("div", { className: p.SpotlightTitle }, t.title),
              n.createElement("div", { className: p.SpotlightBody }, t.body),
              n.createElement(
                "div",
                { className: p.BottomBarPriceInfo },
                n.createElement(f, {
                  discountBlock: t.discount_block,
                  bIsSalePage: t.is_sale_page,
                }),
              ),
            ),
          ),
        );
      }
      function E(e) {
        const { dailyDeal: t } = e,
          a = (0, d.aL)(t.target, "daily-deal"),
          r = (0, c.SW)(t.item?.type ?? "application"),
          o = (0, S.J$)((0, g.Jz)({ item_type: r, id: t.item?.id }));
        return n.createElement(
          s.A,
          {
            appID: "app" == t.item?.type ? t.item.id : void 0,
            feature: "daily-deal",
          },
          n.createElement(
            i.Z,
            {
              className: p.DailyDealCtn,
              onOKButton: () => {
                window.location.href = a;
              },
            },
            n.createElement(
              "div",
              { className: p.DailyDealImageCtn },
              n.createElement(
                "a",
                { href: a },
                n.createElement("img", { src: t.image, alt: o.data?.name }),
              ),
            ),
            n.createElement(
              "div",
              { className: p.DailyDealTextCtn },
              n.createElement("div", { className: p.DailyDealDesc }, t.desc),
              n.createElement(f, {
                discountBlock: t.discount_block,
                bIsSalePage: t.is_sale_page,
              }),
            ),
          ),
        );
      }
      const f = (e) => {
        const { discountBlock: t, bIsSalePage: a } = e;
        if (!t) return null;
        const i = t.hide_discount_percent_for_compliance;
        return a
          ? null == t.discount_max || t.discount_max <= 0
            ? null
            : null == t.discount_min || t.discount_min <= 0
              ? n.createElement(
                  "div",
                  {
                    className: (0, _.A)(
                      o().StoreSalePriceWidgetContainer,
                      o().Discounted,
                    ),
                  },
                  n.createElement(
                    "div",
                    { className: o().StoreSaleDiscountBox },
                    "Up to -",
                    t.discount_max,
                    "%",
                  ),
                )
              : i
                ? n.createElement(
                    "div",
                    { className: o().DiscountIconCtn },
                    n.createElement(m.XH_, null),
                  )
                : n.createElement(
                    "div",
                    {
                      className: (0, _.A)(
                        o().StoreSalePriceWidgetContainer,
                        o().Discounted,
                      ),
                    },
                    t.discount_min === t.discount_max
                      ? n.createElement(
                          "div",
                          { className: o().StoreSaleDiscountBox },
                          t.discount_min,
                          "%",
                        )
                      : n.createElement(
                          "div",
                          { className: o().StoreSaleDiscountBox },
                          t.discount_min,
                          " - ",
                          t.discount_max,
                          "%",
                        ),
                  )
          : null == t.final_price || "" === t.final_price
            ? null
            : null != t.bundle_discount && t.bundle_discount > 0 && !i
              ? n.createElement(
                  "div",
                  { className: p.DiscountBlock },
                  n.createElement(
                    "div",
                    { className: p.DiscountPercent },
                    "-",
                    t.bundle_discount,
                    "%",
                  ),
                )
              : null != t.discount_percent && t.discount_percent > 0
                ? i
                  ? n.createElement(
                      "div",
                      {
                        className: (0, _.A)(
                          o().StoreSalePriceWidgetContainer,
                          o().Discounted,
                        ),
                      },
                      n.createElement(
                        "div",
                        { className: o().DiscountIconCtn },
                        n.createElement(m.XH_, null),
                      ),
                      n.createElement(
                        "div",
                        { className: o().StoreSaleDiscountedPriceCtn },
                        n.createElement(
                          "div",
                          { className: o().StoreSalePriceBox },
                          t.final_price,
                        ),
                      ),
                    )
                  : n.createElement(
                      "div",
                      {
                        className: (0, _.A)(
                          o().StoreSalePriceWidgetContainer,
                          o().Discounted,
                        ),
                      },
                      n.createElement(
                        "div",
                        { className: o().StoreSaleDiscountBox },
                        t.discount_percent,
                        "%",
                      ),
                      n.createElement(
                        "div",
                        { className: o().StoreSaleDiscountedPriceCtn },
                        n.createElement(
                          "div",
                          { className: o().StoreOriginalPrice },
                          t.orig_price,
                        ),
                        n.createElement(
                          "div",
                          { className: o().StoreSalePriceBox },
                          t.final_price,
                        ),
                      ),
                    )
                : n.createElement(
                    "div",
                    { className: (0, _.A)(o().StoreSalePriceWidgetContainer) },
                    n.createElement(
                      "div",
                      { className: o().StoreSaleDiscountedPriceCtn },
                      n.createElement(
                        "div",
                        { className: o().StoreSalePriceBox },
                        t.final_price,
                      ),
                    ),
                  );
      };
    },
    10962: (e, t, a) => {
      "use strict";
      a.d(t, { kb: () => s, y7: () => _, zD: () => d });
      var n,
        i = a(90626),
        c = a(55263),
        r = a(12155),
        o = a(52038),
        l = a(30261);
      !(function (e) {
        (e.k_eBlock = "block"),
          (e.k_eFinal = "final"),
          (e.k_eOriginal = "original"),
          (e.k_eReservation = "reservation");
      })(n || (n = {}));
      const s = (e) => {
        switch (e.display_style) {
          case n.k_eFinal:
            return (
              Boolean(e.formatted_final_price) &&
              i.createElement("span", null, e.formatted_final_price)
            );
          case n.k_eOriginal:
            const t = e.formatted_orig_price || e.formatted_final_price;
            return Boolean(t) && i.createElement("span", null, t);
        }
        const t = "reservation" == e.display_style,
          a = e.bHideDiscountPercentForCompliance,
          c = "bbcode_price" == e.className;
        return i.createElement(
          "span",
          {
            className: (0, o.A)({
              [l.StoreSalePriceWidget]: !0,
              [e.className]: Boolean(e.className),
              [l.StoreSaleReservationPrice]: t,
            }),
          },
          Boolean(e.discount_percent && !a) &&
            i.createElement(
              "span",
              {
                className: (0, o.A)(
                  l.StoreSaleDiscountBox,
                  "StoreSaleDiscountBox",
                  e.bDiscountFromCoupon && l.FromCoupon,
                ),
              },
              `-${e.discount_percent}%`,
            ),
          Boolean(e.discount_percent && a) &&
            i.createElement(
              "div",
              {
                className: (0, o.A)({
                  [l.DiscountIconCtn]: !0,
                  bbcode_price_discount: c,
                }),
              },
              i.createElement(r.XH_, null),
            ),
          Boolean(e.formatted_final_price) &&
            (Boolean(e.discount_percent && e.formatted_orig_price)
              ? i.createElement(
                  "div",
                  {
                    className: (0, o.A)({
                      [l.StoreSaleDiscountedPriceCtn]: !0,
                      bbcode_price_ctn: c,
                    }),
                  },
                  i.createElement(
                    "div",
                    {
                      className: (0, o.A)({
                        [l.StoreOriginalPrice]: !0,
                        StoreOriginalPrice: !0,
                        bbcode_price_orig: c,
                      }),
                    },
                    e.formatted_orig_price,
                  ),
                  i.createElement(
                    "div",
                    {
                      className: (0, o.A)({
                        [l.StoreSalePriceBox]: !0,
                        bbcode_price_box: c,
                        [l.StoreSaleReservationPriceBox]: t,
                        bbcode_price_final: c,
                      }),
                    },
                    e.formatted_final_price,
                  ),
                )
              : i.createElement(
                  "div",
                  {
                    className: (0, o.A)({
                      [l.StoreSalePriceBox]: !0,
                      bbcode_price_box: c,
                      [l.StoreSaleReservationPriceBox]: t,
                      bbcode_price_final: c,
                    }),
                  },
                  e.formatted_final_price,
                )),
        );
      };
      function m(e) {
        const [t] = (0, c.Gg)(e.packageID, {});
        if (t) {
          const a = t.GetBestPurchaseOption();
          return i.createElement(s, {
            formatted_final_price: a.formatted_final_price,
            formatted_orig_price: a.formatted_original_price,
            discount_percent: a.discount_pct,
            bHideDiscountPercentForCompliance:
              a.hide_discount_pct_for_compliance,
            display_style: e.display_style,
            className: "bbcode_price",
          });
        }
        return null;
      }
      function d(e) {
        const t = Number(e.args.packageid);
        if (!t) return null;
        const a = e.args.display;
        return i.createElement(m, { packageID: t, display_style: a });
      }
      function u(e) {
        const [t] = (0, c.Gg)(e.packageID, {}),
          [a] = (0, c.Gg)(e.compareID, {});
        if (!t || !a) return null;
        const n = (function (e, t) {
          if (
            !e?.GetBestPurchaseOption().final_price_in_cents ||
            !t?.GetBestPurchaseOption()?.final_price_in_cents
          )
            return;
          return (
            (
              100 *
              (1 -
                Number.parseInt(
                  e.GetBestPurchaseOption().final_price_in_cents,
                ) /
                  Number.parseInt(
                    t.GetBestPurchaseOption().final_price_in_cents,
                  ))
            ).toFixed(0) + "%"
          );
        })(t, a);
        return void 0 === n
          ? null
          : i.createElement("span", { className: l.StorePriceSavings }, n);
      }
      function _(e) {
        const t = Number(e.args.packageid),
          a = Number(e.args.compareid);
        return t && a
          ? i.createElement(u, { packageID: t, compareID: a })
          : null;
      }
    },
    70809: (e, t, a) => {
      "use strict";
      a.d(t, { r: () => d, x: () => u });
      var n = a(56545),
        i = a(15161),
        c = a(58632),
        r = a.n(c),
        o = a(20194),
        l = a(23809),
        s = a(72839),
        m = a(61859);
      function d(e) {
        const { item: t } = e,
          { data: a } = (function (e) {
            const t = (0, l.KV)();
            return (0, o.I)({
              queryKey: ["GetHardwareItems", e],
              queryFn: async () =>
                (function (e) {
                  _ ||
                    (_ = (function (e) {
                      return new (r())(
                        async (t) => {
                          const a = n.w.Init(i.eW);
                          (0, s.rV)(a), a.Body().set_packageid(t);
                          const c = await i.$4.GetHardwareItems(e, a);
                          return c.BSuccess()
                            ? c.Body().toObject().details
                            : (console.warn(
                                `Failed to load hardware: ${c.GetEResult()}`,
                              ),
                              t.map(() => new Error(c.GetErrorMessage())));
                        },
                        { cache: !1 },
                      );
                    })(e));
                  return _;
                })(t).load(e),
              enabled: !!e,
            });
          })(1 == t.GetStoreItemType() ? t.GetID() : void 0);
        return a
          ? (0, m.we)("#Cart_ShippingEstimate_DeliveryDate", u(a))
          : null;
      }
      function u(e) {
        return (0, m.we)(
          "#Hardware_ShippingEstimate_Range",
          e.estimated_delivery_soonest_business_days,
          e.estimated_delivery_latest_business_days,
        );
      }
      let _;
    },
  },
]);
