/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [3486],
  {
    39451: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        MainCarousel: "rKC9i1QFlmHVnfQGYNdK9",
        FeatureCtn: "_1ZPgL3xqRjoZ8HtqEo-kYT",
        StoreSection: "_1g3iQ97kwa-WXWin7gGPa1",
        SectionTitle: "_26E34RQ1h7NQYO_MZA4sc8",
        SectionDescription: "_18HRZ_D3sGMzN2VY4tuS9V",
        SectionTitleCtn: "_1VuW8IsQok7lzajOHCUM4n",
        SpotlightsColumn: "_1g97edPcPpAx5VAfphsiJq",
        SpecialsItem: "_3GfHVhntV-yFw1UXfa196H",
        SpotlightCtn: "_3pJ3tT4Yk6jKbHYJmCj2CU",
        SpotlightImageCtn: "_1o33E1n3dVLuLi3lK1CAk9",
        CapsuleDecorators: "_1-sqrPSfLLU3dqp-Gr9-rd",
        SpotlightTextCtn: "_2aZCT4LN_paIzywU67vsT",
        SpotlightTitle: "_39WrxcYRyeNw3mmRWTlCT6",
        SpotlightBody: "_1es6rwbuP_vKrDuKsTqWHk",
        SpotlightWeeklongTextCtn: "_4Hq088g4Boxf5NHdesdtV",
        SpotlightItemCount: "_2-5EwEId1mia-Abz8oty31",
        BottomBarPriceInfo: "_10UCX8icXM6PBqyeT1KBnV",
        BroadcastPage: "_2u01czfbwKyjsw7wtem7sY",
        BroadcastCtn: "_3WaNDtN3dXIVZFI2tMrxGk",
        BroadcastImageCtn: "_1MlNiSof5ueja04ndRLc8h",
        BroadcastVideoThumbnail: "_1DCxKSOoKL2V1fqKKzk3UT",
        BroadcastPlayIcon: "yNbScrdt3nwQlzGJJJw1a",
        BroadcastTextCtn: "_1FsEElK-NV8C9MaCnY6dZB",
        BroadcastName: "R0KgLN7nQEZZ7c_6D7yd2",
        BroadcastDesc: "_2kc5gQsBdWbby6HpGKaDDS",
        DailyDealCtn: "_3FVdcg17D6Z4sWNoJXep5Y",
        DailyDealImageCtn: "-UnIsQDpu9fvHDcHYAMRv",
        DailyDealTextCtn: "_1ngzlXe4f8VoHrNyap_AJ7",
        DailyDealDesc: "_1xES0oloxmlRJc8Q7AvAOJ",
        ContentHubTakeoverCtn: "_2w_95IBUhkDRCYPiiRdRLU",
        TweaksMenu: "DxyO5iJz_gAVNlkOkxCug",
        MenuTitle: "_10cAT9Mk8e7p1yzSQwi616",
        MenuOptions: "_1UNUdf7hR-86lcMPwkLbAF",
      };
    },
    61931: (e) => {
      e.exports = {
        StoreSalePriceWidget: "_2ykYV0XLHGzQm5j_ASVvKN",
        StoreSaleDiscountedPriceCtn: "_1f3PID2BXOm-jAr3LGxkW3",
        StoreSalePriceBox: "_2WBvzE2CywKDLD0QTnbmUE",
        StoreSaleReservationPriceBox: "_3u-EJaC6RssphSdzqX12cc",
        StoreSaleDiscountBox: "_2rkkqQt6ZAdPQu5GSOTNr5",
        FromCoupon: "_1Q2doDk5NrqN8k658v-ba_",
        StoreOriginalPrice: "_3h9iQSuChRQXyzpsu2ip8m",
      };
    },
    1774: (e, t, a) => {
      "use strict";
      a.d(t, { Pl: () => D, k8: () => N, Jm: () => E, $1: () => f });
      var n = a(47427),
        i = a(91618),
        c = a(86437),
        r = a(65255);
      var o = a(7769),
        l = a.n(o),
        s = a(58129),
        _ = a(95082),
        d = a(62613),
        u = a(25006),
        m = a(14609),
        p = a(13129),
        S = a(31846),
        g = a(39451);
      function f(e) {
        const { spotlight: t } = e,
          a = (0, u.YR)(t.url, "spotlight");
        return n.createElement(
          _.ZP,
          {
            appID: "app" == t.item?.type ? t.item.id : null,
            feature: "spotlight",
          },
          n.createElement(
            i.s,
            {
              className: g.SpotlightCtn,
              onOKButton: () => {
                window.location.href = a;
              },
            },
            n.createElement(
              "div",
              { className: g.SpotlightImageCtn },
              n.createElement(
                "div",
                {
                  className: (0, p.Z)(o.CapsuleDecorators, g.CapsuleDecorators),
                },
                t.has_live_broadcast && n.createElement(s.x, null),
              ),
              t.open_in_new_window
                ? n.createElement(
                    m.ns,
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
              { className: g.SpotlightTextCtn },
              n.createElement("div", { className: g.SpotlightTitle }, t.title),
              n.createElement("div", { className: g.SpotlightBody }, t.body),
              n.createElement(
                "div",
                { className: g.BottomBarPriceInfo },
                n.createElement(h, {
                  discountBlock: t.discount_block,
                  bIsSalePage: t.is_sale_page,
                }),
              ),
            ),
          ),
        );
      }
      function E(e) {
        const { spotlight: t } = e,
          a = t.associated_item,
          i = {
            is_weeklong_deals: "weeklong_deals" == t.spotlight_template,
            url: t.spotlight_link_url,
            image_url: r.De.MEDIA_CDN_URL + t.asset_url,
            title: t.spotlight_title,
            body: t.spotlight_body,
            ...b(a),
          };
        if (
          (!i.url && a && (i.url = r.De.STORE_BASE_URL + a.store_url_path),
          a?.best_purchase_option?.active_discounts?.length > 0 &&
            -1 !== t.spotlight_body.indexOf("%1$s"))
        ) {
          const e = new Date(
            1e3 * a.best_purchase_option.active_discounts[0].discount_end_date,
          );
          i.body = t.spotlight_body.replace(
            "%1$s",
            e.toLocaleTimeString(S.Yt.GetPreferredLocales(), {
              hour: "numeric",
              minute: "2-digit",
              month: "short",
              day: "numeric",
            }),
          );
        }
        return n.createElement(f, { spotlight: i });
      }
      function D(e) {
        const { dailyDeal: t } = e,
          a = (0, u.YR)(t.target, "daily-deal");
        return n.createElement(
          _.ZP,
          {
            appID: "app" == t.item?.type ? t.item.id : null,
            feature: "daily-deal",
          },
          n.createElement(
            i.s,
            {
              className: g.DailyDealCtn,
              onOKButton: () => {
                window.location.href = a;
              },
            },
            n.createElement(
              "div",
              { className: g.DailyDealImageCtn },
              n.createElement(
                "a",
                { href: a },
                n.createElement("img", { src: t.image }),
              ),
            ),
            n.createElement(
              "div",
              { className: g.DailyDealTextCtn },
              n.createElement("div", { className: g.DailyDealDesc }, t.desc),
              n.createElement(h, {
                discountBlock: t.discount_block,
                bIsSalePage: t.is_sale_page,
              }),
            ),
          ),
        );
      }
      function N(e) {
        const {
            dailyDeal: { item: t },
          } = e,
          a = {
            end_date:
              t.best_purchase_option?.active_discounts[0]?.discount_end_date,
            target: r.De.STORE_BASE_URL + t.store_url_path,
            image:
              ((i = t.assets),
              (c = "header"),
              r.De.MEDIA_CDN_URL +
                i.asset_url_format.replace("${FILENAME}", i[c])),
            ...b(t),
          };
        var i, c;
        return n.createElement(D, { dailyDeal: a });
      }
      const h = (e) => {
        const { discountBlock: t, bIsSalePage: a } = e;
        if (!t) return null;
        const i = e.discountBlock.hide_discount_percent_for_compliance && !0;
        return a
          ? null == t.discount_max || t.discount_max <= 0
            ? null
            : null == t.discount_min || t.discount_min <= 0
              ? n.createElement(
                  "div",
                  {
                    className: (0, p.Z)(
                      l().StoreSalePriceWidgetContainer,
                      l().Discounted,
                    ),
                  },
                  n.createElement(
                    "div",
                    { className: l().StoreSaleDiscountBox },
                    "Up to -",
                    t.discount_max,
                    "%",
                  ),
                )
              : i
                ? n.createElement(
                    "div",
                    { className: l().DiscountIconCtn },
                    n.createElement(d.dCe, null),
                  )
                : n.createElement(
                    "div",
                    {
                      className: (0, p.Z)(
                        l().StoreSalePriceWidgetContainer,
                        l().Discounted,
                      ),
                    },
                    t.discount_min === t.discount_max
                      ? n.createElement(
                          "div",
                          { className: l().StoreSaleDiscountBox },
                          t.discount_min,
                          "%",
                        )
                      : n.createElement(
                          "div",
                          { className: l().StoreSaleDiscountBox },
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
                  { className: g.DiscountBlock },
                  n.createElement(
                    "div",
                    { className: g.DiscountPercent },
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
                        className: (0, p.Z)(
                          l().StoreSalePriceWidgetContainer,
                          l().Discounted,
                        ),
                      },
                      n.createElement(
                        "div",
                        { className: l().DiscountIconCtn },
                        n.createElement(d.dCe, null),
                      ),
                      n.createElement(
                        "div",
                        { className: l().StoreSaleDiscountedPriceCtn },
                        n.createElement(
                          "div",
                          { className: l().StoreSalePriceBox },
                          t.final_price,
                        ),
                      ),
                    )
                  : n.createElement(
                      "div",
                      {
                        className: (0, p.Z)(
                          l().StoreSalePriceWidgetContainer,
                          l().Discounted,
                        ),
                      },
                      n.createElement(
                        "div",
                        { className: l().StoreSaleDiscountBox },
                        t.discount_percent,
                        "%",
                      ),
                      n.createElement(
                        "div",
                        { className: l().StoreSaleDiscountedPriceCtn },
                        n.createElement(
                          "div",
                          { className: l().StoreOriginalPrice },
                          t.orig_price,
                        ),
                        n.createElement(
                          "div",
                          { className: l().StoreSalePriceBox },
                          t.final_price,
                        ),
                      ),
                    )
                : n.createElement(
                    "div",
                    { className: (0, p.Z)(l().StoreSalePriceWidgetContainer) },
                    n.createElement(
                      "div",
                      { className: l().StoreSaleDiscountedPriceCtn },
                      n.createElement(
                        "div",
                        { className: l().StoreSalePriceBox },
                        t.final_price,
                      ),
                    ),
                  );
      };
      function b(e) {
        return e
          ? {
              item: { type: (0, c.qE)(e.item_type), id: e.id },
              discount_block: {
                orig_price: e.best_purchase_option.formatted_original_price,
                final_price: e.best_purchase_option.formatted_final_price,
                discount_percent: e.best_purchase_option.discount_pct,
                hide_discount_percent_for_compliance:
                  e.best_purchase_option.hide_discount_pct_for_compliance,
              },
            }
          : {};
      }
    },
    84823: (e, t, a) => {
      "use strict";
      a.d(t, { Eu: () => D, J8: () => f, gq: () => h, nk: () => S });
      var n,
        i = a(27605),
        c = a(47427),
        r = a(31421),
        o = a(80886),
        l = a(35714),
        s = a.n(l),
        _ = a(62613),
        d = a(13129),
        u = a(25006),
        m = a(85305),
        p = a(61931);
      !(function (e) {
        (e.k_eBlock = "block"),
          (e.k_eFinal = "final"),
          (e.k_eOriginal = "original"),
          (e.k_eReservation = "reservation");
      })(n || (n = {}));
      const S = (e) => {
        switch (e.display_style) {
          case n.k_eFinal:
            return (
              Boolean(e.formatted_final_price) &&
              c.createElement("span", null, e.formatted_final_price)
            );
          case n.k_eOriginal:
            const t = e.formatted_orig_price || e.formatted_final_price;
            return Boolean(t) && c.createElement("span", null, t);
        }
        const t = "reservation" == e.display_style,
          a = e.bHideDiscountPercentForCompliance && !0,
          i = "bbcode_price" == e.className;
        return c.createElement(
          "span",
          {
            className: (0, d.Z)({
              [p.StoreSalePriceWidget]: !0,
              [e.className]: Boolean(e.className),
              [p.StoreSaleReservationPrice]: t,
            }),
          },
          Boolean(e.discount_percent && !a) &&
            c.createElement(
              "span",
              {
                className: (0, d.Z)(
                  p.StoreSaleDiscountBox,
                  "StoreSaleDiscountBox",
                  e.bDiscountFromCoupon && p.FromCoupon,
                ),
              },
              `-${e.discount_percent}%`,
            ),
          Boolean(e.discount_percent && a) &&
            c.createElement(
              "div",
              {
                className: (0, d.Z)({
                  [p.DiscountIconCtn]: !0,
                  bbcode_price_discount: i,
                }),
              },
              c.createElement(_.dCe, null),
            ),
          Boolean(e.formatted_final_price) &&
            (Boolean(e.discount_percent && e.formatted_orig_price)
              ? c.createElement(
                  "div",
                  {
                    className: (0, d.Z)({
                      [p.StoreSaleDiscountedPriceCtn]: !0,
                      bbcode_price_ctn: i,
                    }),
                  },
                  c.createElement(
                    "div",
                    {
                      className: (0, d.Z)({
                        [p.StoreOriginalPrice]: !0,
                        StoreOriginalPrice: !0,
                        bbcode_price_orig: i,
                      }),
                    },
                    e.formatted_orig_price,
                  ),
                  c.createElement(
                    "div",
                    {
                      className: (0, d.Z)({
                        [p.StoreSalePriceBox]: !0,
                        bbcode_price_box: i,
                        [p.StoreSaleReservationPriceBox]: t,
                        bbcode_price_final: i,
                      }),
                    },
                    e.formatted_final_price,
                  ),
                )
              : c.createElement(
                  "div",
                  {
                    className: (0, d.Z)({
                      [p.StoreSalePriceBox]: !0,
                      bbcode_price_box: i,
                      [p.StoreSaleReservationPriceBox]: t,
                      bbcode_price_final: i,
                    }),
                  },
                  e.formatted_final_price,
                )),
        );
      };
      function g(e) {
        const [t] = (0, o.ie)(e.packageID, {});
        if (t) {
          const a = t.GetBestPurchaseOption();
          return c.createElement(S, {
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
      function f(e) {
        const t = Number(e.args.packageid);
        if (!t) return null;
        const a = e.args.display;
        return c.createElement(g, { packageID: t, display_style: a });
      }
      const E = (0, i.Pi)((e) => {
        const [t] = (0, o.ie)(e.packageID, {}),
          [a] = (0, o.ie)(e.compareID, {});
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
          : c.createElement("span", { className: p.StorePriceSavings }, n);
      });
      function D(e) {
        const t = Number(e.args.packageid),
          a = Number(e.args.compareid);
        return t && a
          ? c.createElement(E, { packageID: t, compareID: a })
          : null;
      }
      const N = (e) => {
        const t = (0, u.bJ)(),
          a = (0, r.mY)(t);
        return c.createElement(m.RJ, {
          snr: a,
          appID: e.appid,
          classOverride: (0, d.Z)(s().WishlistButtonNotTop, "WishlistButton"),
        });
      };
      function h(e) {
        const t = Number(e.args.appid);
        return t ? c.createElement(N, { appid: t }) : null;
      }
    },
    2324: (e, t, a) => {
      "use strict";
      a.d(t, { B: () => i });
      var n = a(31846);
      function i(e) {
        return (0, n.Xx)(
          "#Hardware_ShippingEstimate_Range",
          e.estimated_delivery_soonest_business_days,
          e.estimated_delivery_latest_business_days,
        );
      }
    },
  },
]);
