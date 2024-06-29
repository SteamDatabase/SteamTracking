/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [708],
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
    89373: (e, t, a) => {
      "use strict";
      a.d(t, { C: () => c });
      var n = a(79545),
        i = a(22791),
        r = a(13557),
        o = a(37563);
      class c {
        m_transport = void 0;
        m_dateSaleStart = new Date("2024-06-27T17:00:00Z");
        m_dateSaleEnd = new Date("2024-07-11T17:00:00Z");
        BIsSaleActive() {
          Date.now();
          return !1;
        }
        async GetNumTradingCardsEarned() {
          this.LazyInitTransport();
          const e = { earned_today: 0, earned_lifetime: 0, eresult: 2 },
            t = Date.now(),
            a =
              864e5 * Math.floor((t - this.m_dateSaleStart.getTime()) / 864e5) +
              this.m_dateSaleStart.getTime(),
            i = n.gA.Init(r.GZ);
          let o = await r.Ts.GetNumTradingCardsEarned(this.m_transport, i),
            c = o.GetEResult();
          return 1 !== c
            ? ((e.eresult = c), e)
            : ((e.earned_lifetime = o.Body().num_trading_cards()),
              i.Body().set_timestamp_start(a / 1e3),
              (o = await r.Ts.GetNumTradingCardsEarned(this.m_transport, i)),
              (c = o.GetEResult()),
              1 != c
                ? ((e.eresult = c), e)
                : ((e.earned_today = o.Body().num_trading_cards()),
                  (e.eresult = 1),
                  e));
        }
        static s_Singleton;
        static Get() {
          return (
            c.s_Singleton ||
              ((c.s_Singleton = new c()),
              "dev" == o.De.WEB_UNIVERSE &&
                (window.g_SeasonalSaleStore = c.s_Singleton)),
            c.s_Singleton
          );
        }
        LazyInitTransport() {
          if (!this.m_transport) {
            const e = (0, o.kQ)("loyalty_webapi_token", "application_config");
            "string" == typeof e
              ? (this.m_transport = new i.J(
                  o.De.WEBAPI_BASE_URL,
                  e,
                ).GetServiceTransport())
              : console.error("CSeasonalSaleStore failed to load webapi token");
          }
        }
        constructor() {}
      }
    },
    1774: (e, t, a) => {
      "use strict";
      a.d(t, { Pl: () => D, k8: () => h, Jm: () => f, $1: () => E });
      var n = a(47427),
        i = a(91618),
        r = a(86437),
        o = a(65255);
      var c = a(7769),
        s = a.n(c),
        l = a(58129),
        _ = a(95082),
        d = a(62613),
        m = a(25006),
        u = a(14609),
        p = a(13129),
        S = a(31846),
        g = a(39451);
      function E(e) {
        const { spotlight: t } = e,
          a = (0, m.YR)(t.url, "spotlight");
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
                  className: (0, p.Z)(c.CapsuleDecorators, g.CapsuleDecorators),
                },
                t.has_live_broadcast && n.createElement(l.x, null),
              ),
              t.open_in_new_window
                ? n.createElement(
                    u.ns,
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
                n.createElement(N, {
                  discountBlock: t.discount_block,
                  bIsSalePage: t.is_sale_page,
                }),
              ),
            ),
          ),
        );
      }
      function f(e) {
        const { spotlight: t } = e,
          a = t.associated_item,
          i = {
            is_weeklong_deals: "weeklong_deals" == t.spotlight_template,
            url: t.spotlight_link_url,
            image_url: o.De.MEDIA_CDN_URL + t.asset_url,
            title: t.spotlight_title,
            body: t.spotlight_body,
            ...b(a),
          };
        if (
          (!i.url && a && (i.url = o.De.STORE_BASE_URL + a.store_url_path),
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
        return n.createElement(E, { spotlight: i });
      }
      function D(e) {
        const { dailyDeal: t } = e,
          a = (0, m.YR)(t.target, "daily-deal");
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
              n.createElement(N, {
                discountBlock: t.discount_block,
                bIsSalePage: t.is_sale_page,
              }),
            ),
          ),
        );
      }
      function h(e) {
        const {
            dailyDeal: { item: t },
          } = e,
          a = {
            end_date:
              t.best_purchase_option?.active_discounts[0]?.discount_end_date,
            target: o.De.STORE_BASE_URL + t.store_url_path,
            image:
              ((i = t.assets),
              (r = "header"),
              o.De.MEDIA_CDN_URL +
                i.asset_url_format.replace("${FILENAME}", i[r])),
            ...b(t),
          };
        var i, r;
        return n.createElement(D, { dailyDeal: a });
      }
      const N = (e) => {
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
                      s().StoreSalePriceWidgetContainer,
                      s().Discounted,
                    ),
                  },
                  n.createElement(
                    "div",
                    { className: s().StoreSaleDiscountBox },
                    "Up to -",
                    t.discount_max,
                    "%",
                  ),
                )
              : i
                ? n.createElement(
                    "div",
                    { className: s().DiscountIconCtn },
                    n.createElement(d.dCe, null),
                  )
                : n.createElement(
                    "div",
                    {
                      className: (0, p.Z)(
                        s().StoreSalePriceWidgetContainer,
                        s().Discounted,
                      ),
                    },
                    t.discount_min === t.discount_max
                      ? n.createElement(
                          "div",
                          { className: s().StoreSaleDiscountBox },
                          t.discount_min,
                          "%",
                        )
                      : n.createElement(
                          "div",
                          { className: s().StoreSaleDiscountBox },
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
                          s().StoreSalePriceWidgetContainer,
                          s().Discounted,
                        ),
                      },
                      n.createElement(
                        "div",
                        { className: s().DiscountIconCtn },
                        n.createElement(d.dCe, null),
                      ),
                      n.createElement(
                        "div",
                        { className: s().StoreSaleDiscountedPriceCtn },
                        n.createElement(
                          "div",
                          { className: s().StoreSalePriceBox },
                          t.final_price,
                        ),
                      ),
                    )
                  : n.createElement(
                      "div",
                      {
                        className: (0, p.Z)(
                          s().StoreSalePriceWidgetContainer,
                          s().Discounted,
                        ),
                      },
                      n.createElement(
                        "div",
                        { className: s().StoreSaleDiscountBox },
                        t.discount_percent,
                        "%",
                      ),
                      n.createElement(
                        "div",
                        { className: s().StoreSaleDiscountedPriceCtn },
                        n.createElement(
                          "div",
                          { className: s().StoreOriginalPrice },
                          t.orig_price,
                        ),
                        n.createElement(
                          "div",
                          { className: s().StoreSalePriceBox },
                          t.final_price,
                        ),
                      ),
                    )
                : n.createElement(
                    "div",
                    { className: (0, p.Z)(s().StoreSalePriceWidgetContainer) },
                    n.createElement(
                      "div",
                      { className: s().StoreSaleDiscountedPriceCtn },
                      n.createElement(
                        "div",
                        { className: s().StoreSalePriceBox },
                        t.final_price,
                      ),
                    ),
                  );
      };
      function b(e) {
        return e
          ? {
              item: { type: (0, r.qE)(e.item_type), id: e.id },
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
      a.d(t, { Eu: () => D, J8: () => E, gq: () => N, nk: () => S });
      var n,
        i = a(27605),
        r = a(47427),
        o = a(31421),
        c = a(80886),
        s = a(35714),
        l = a.n(s),
        _ = a(62613),
        d = a(13129),
        m = a(25006),
        u = a(85305),
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
              r.createElement("span", null, e.formatted_final_price)
            );
          case n.k_eOriginal:
            const t = e.formatted_orig_price || e.formatted_final_price;
            return Boolean(t) && r.createElement("span", null, t);
        }
        const t = "reservation" == e.display_style,
          a = e.bHideDiscountPercentForCompliance && !0,
          i = "bbcode_price" == e.className;
        return r.createElement(
          "span",
          {
            className: (0, d.Z)({
              [p.StoreSalePriceWidget]: !0,
              [e.className]: Boolean(e.className),
              [p.StoreSaleReservationPrice]: t,
            }),
          },
          Boolean(e.discount_percent && !a) &&
            r.createElement(
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
            r.createElement(
              "div",
              {
                className: (0, d.Z)({
                  [p.DiscountIconCtn]: !0,
                  bbcode_price_discount: i,
                }),
              },
              r.createElement(_.dCe, null),
            ),
          Boolean(e.formatted_final_price) &&
            (Boolean(e.discount_percent && e.formatted_orig_price)
              ? r.createElement(
                  "div",
                  {
                    className: (0, d.Z)({
                      [p.StoreSaleDiscountedPriceCtn]: !0,
                      bbcode_price_ctn: i,
                    }),
                  },
                  r.createElement(
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
                  r.createElement(
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
              : r.createElement(
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
        const [t] = (0, c.ie)(e.packageID, {});
        if (t) {
          const a = t.GetBestPurchaseOption();
          return r.createElement(S, {
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
      function E(e) {
        const t = Number(e.args.packageid);
        if (!t) return null;
        const a = e.args.display;
        return r.createElement(g, { packageID: t, display_style: a });
      }
      const f = (0, i.Pi)((e) => {
        const [t] = (0, c.ie)(e.packageID, {}),
          [a] = (0, c.ie)(e.compareID, {});
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
          : r.createElement("span", { className: p.StorePriceSavings }, n);
      });
      function D(e) {
        const t = Number(e.args.packageid),
          a = Number(e.args.compareid);
        return t && a
          ? r.createElement(f, { packageID: t, compareID: a })
          : null;
      }
      const h = (e) => {
        const t = (0, m.bJ)(),
          a = (0, o.mY)(t);
        return r.createElement(u.RJ, {
          snr: a,
          appID: e.appid,
          classOverride: (0, d.Z)(l().WishlistButtonNotTop, "WishlistButton"),
        });
      };
      function N(e) {
        const t = Number(e.args.appid);
        return t ? r.createElement(h, { appid: t }) : null;
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
