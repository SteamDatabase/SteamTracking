/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [5304],
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
      var i = a(85556),
        n = a(79545),
        r = a(22791),
        o = a(13557),
        l = a(37563);
      class c {
        BIsSaleActive() {
          const e = Date.now();
          return Boolean(
            e >= this.m_dateSaleStart.getTime() &&
              e < this.m_dateSaleEnd.getTime(),
          );
        }
        GetNumTradingCardsEarned() {
          return (0, i.mG)(this, void 0, void 0, function* () {
            this.LazyInitTransport();
            const e = { earned_today: 0, earned_lifetime: 0, eresult: 2 },
              t = Date.now(),
              a =
                864e5 *
                  Math.floor((t - this.m_dateSaleStart.getTime()) / 864e5) +
                this.m_dateSaleStart.getTime(),
              i = n.gA.Init(o.GZ);
            let r = yield o.Ts.GetNumTradingCardsEarned(this.m_transport, i),
              l = r.GetEResult();
            return 1 !== l
              ? ((e.eresult = l), e)
              : ((e.earned_lifetime = r.Body().num_trading_cards()),
                i.Body().set_timestamp_start(a / 1e3),
                (r = yield o.Ts.GetNumTradingCardsEarned(this.m_transport, i)),
                (l = r.GetEResult()),
                1 != l
                  ? ((e.eresult = l), e)
                  : ((e.earned_today = r.Body().num_trading_cards()),
                    (e.eresult = 1),
                    e));
          });
        }
        static Get() {
          return (
            c.s_Singleton ||
              ((c.s_Singleton = new c()),
              "dev" == l.De.WEB_UNIVERSE &&
                (window.g_SeasonalSaleStore = c.s_Singleton)),
            c.s_Singleton
          );
        }
        LazyInitTransport() {
          if (!this.m_transport) {
            const e = (0, l.kQ)("loyalty_webapi_token", "application_config");
            "string" == typeof e
              ? (this.m_transport = new r.J(
                  l.De.WEBAPI_BASE_URL,
                  e,
                ).GetServiceTransport())
              : console.error("CSeasonalSaleStore failed to load webapi token");
          }
        }
        constructor() {
          (this.m_transport = void 0),
            (this.m_dateSaleStart = new Date("2023-12-21T18:00:00Z")),
            (this.m_dateSaleEnd = new Date("2024-01-04T18:00:00Z"));
        }
      }
    },
    1774: (e, t, a) => {
      "use strict";
      a.d(t, { Pl: () => v, k8: () => D, Jm: () => f, $1: () => E });
      var i = a(47427),
        n = a(91618),
        r = a(86437),
        o = a(65255);
      var l = a(7769),
        c = a.n(l),
        s = a(58129),
        d = a(95082),
        _ = a(62613),
        u = a(25006),
        m = a(14609),
        p = a(13129),
        S = a(31846),
        g = a(39451);
      function E(e) {
        var t;
        const { spotlight: a } = e,
          r = (0, u.YR)(a.url, "spotlight");
        return i.createElement(
          d.ZP,
          {
            appID:
              "app" == (null === (t = a.item) || void 0 === t ? void 0 : t.type)
                ? a.item.id
                : null,
            feature: "spotlight",
          },
          i.createElement(
            n.s,
            {
              className: g.SpotlightCtn,
              onOKButton: () => {
                window.location.href = r;
              },
            },
            i.createElement(
              "div",
              { className: g.SpotlightImageCtn },
              i.createElement(
                "div",
                {
                  className: (0, p.Z)(l.CapsuleDecorators, g.CapsuleDecorators),
                },
                a.has_live_broadcast && i.createElement(s.x, null),
              ),
              a.open_in_new_window
                ? i.createElement(
                    m.ns,
                    { href: r },
                    i.createElement("img", { src: a.image_url, alt: a.title }),
                  )
                : i.createElement(
                    "a",
                    { href: r },
                    i.createElement("img", { src: a.image_url, alt: a.title }),
                  ),
            ),
            i.createElement(
              "div",
              { className: g.SpotlightTextCtn },
              i.createElement("div", { className: g.SpotlightTitle }, a.title),
              i.createElement("div", { className: g.SpotlightBody }, a.body),
              i.createElement(
                "div",
                { className: g.BottomBarPriceInfo },
                i.createElement(h, {
                  discountBlock: a.discount_block,
                  bIsSalePage: a.is_sale_page,
                }),
              ),
            ),
          ),
        );
      }
      function f(e) {
        var t, a;
        const { spotlight: n } = e,
          r = n.associated_item,
          l = Object.assign(
            {
              is_weeklong_deals: "weeklong_deals" == n.spotlight_template,
              url: n.spotlight_link_url,
              image_url: o.De.MEDIA_CDN_URL + n.asset_url,
              title: n.spotlight_title,
              body: n.spotlight_body,
            },
            N(r),
          );
        if (
          (!l.url && r && (l.url = o.De.STORE_BASE_URL + r.store_url_path),
          (null ===
            (a =
              null === (t = null == r ? void 0 : r.best_purchase_option) ||
              void 0 === t
                ? void 0
                : t.active_discounts) || void 0 === a
            ? void 0
            : a.length) > 0 && -1 !== n.spotlight_body.indexOf("%1$s"))
        ) {
          const e = new Date(
            1e3 * r.best_purchase_option.active_discounts[0].discount_end_date,
          );
          l.body = n.spotlight_body.replace(
            "%1$s",
            e.toLocaleTimeString(S.Yt.GetPreferredLocales(), {
              hour: "numeric",
              minute: "2-digit",
              month: "short",
              day: "numeric",
            }),
          );
        }
        return i.createElement(E, { spotlight: l });
      }
      function v(e) {
        var t;
        const { dailyDeal: a } = e,
          r = (0, u.YR)(a.target, "daily-deal");
        return i.createElement(
          d.ZP,
          {
            appID:
              "app" == (null === (t = a.item) || void 0 === t ? void 0 : t.type)
                ? a.item.id
                : null,
            feature: "daily-deal",
          },
          i.createElement(
            n.s,
            {
              className: g.DailyDealCtn,
              onOKButton: () => {
                window.location.href = r;
              },
            },
            i.createElement(
              "div",
              { className: g.DailyDealImageCtn },
              i.createElement(
                "a",
                { href: r },
                i.createElement("img", { src: a.image }),
              ),
            ),
            i.createElement(
              "div",
              { className: g.DailyDealTextCtn },
              i.createElement("div", { className: g.DailyDealDesc }, a.desc),
              i.createElement(h, {
                discountBlock: a.discount_block,
                bIsSalePage: a.is_sale_page,
              }),
            ),
          ),
        );
      }
      function D(e) {
        var t, a;
        const {
            dailyDeal: { item: n },
          } = e,
          r = Object.assign(
            {
              end_date:
                null ===
                  (a =
                    null === (t = n.best_purchase_option) || void 0 === t
                      ? void 0
                      : t.active_discounts[0]) || void 0 === a
                  ? void 0
                  : a.discount_end_date,
              target: o.De.STORE_BASE_URL + n.store_url_path,
              image:
                ((l = n.assets),
                (c = "header"),
                o.De.MEDIA_CDN_URL +
                  l.asset_url_format.replace("${FILENAME}", l[c])),
            },
            N(n),
          );
        var l, c;
        return i.createElement(v, { dailyDeal: r });
      }
      const h = (e) => {
        const { discountBlock: t, bIsSalePage: a } = e;
        if (!t) return null;
        const n = e.discountBlock.hide_discount_percent_for_compliance && !0;
        return a
          ? null == t.discount_max || t.discount_max <= 0
            ? null
            : null == t.discount_min || t.discount_min <= 0
              ? i.createElement(
                  "div",
                  {
                    className: (0, p.Z)(
                      c().StoreSalePriceWidgetContainer,
                      c().Discounted,
                    ),
                  },
                  i.createElement(
                    "div",
                    { className: c().StoreSaleDiscountBox },
                    "Up to -",
                    t.discount_max,
                    "%",
                  ),
                )
              : n
                ? i.createElement(
                    "div",
                    { className: c().DiscountIconCtn },
                    i.createElement(_.dCe, null),
                  )
                : i.createElement(
                    "div",
                    {
                      className: (0, p.Z)(
                        c().StoreSalePriceWidgetContainer,
                        c().Discounted,
                      ),
                    },
                    t.discount_min === t.discount_max
                      ? i.createElement(
                          "div",
                          { className: c().StoreSaleDiscountBox },
                          t.discount_min,
                          "%",
                        )
                      : i.createElement(
                          "div",
                          { className: c().StoreSaleDiscountBox },
                          t.discount_min,
                          " - ",
                          t.discount_max,
                          "%",
                        ),
                  )
          : null == t.final_price || "" === t.final_price
            ? null
            : null != t.bundle_discount && t.bundle_discount > 0 && !n
              ? i.createElement(
                  "div",
                  { className: g.DiscountBlock },
                  i.createElement(
                    "div",
                    { className: g.DiscountPercent },
                    "-",
                    t.bundle_discount,
                    "%",
                  ),
                )
              : null != t.discount_percent && t.discount_percent > 0
                ? n
                  ? i.createElement(
                      "div",
                      {
                        className: (0, p.Z)(
                          c().StoreSalePriceWidgetContainer,
                          c().Discounted,
                        ),
                      },
                      i.createElement(
                        "div",
                        { className: c().DiscountIconCtn },
                        i.createElement(_.dCe, null),
                      ),
                      i.createElement(
                        "div",
                        { className: c().StoreSaleDiscountedPriceCtn },
                        i.createElement(
                          "div",
                          { className: c().StoreSalePriceBox },
                          t.final_price,
                        ),
                      ),
                    )
                  : i.createElement(
                      "div",
                      {
                        className: (0, p.Z)(
                          c().StoreSalePriceWidgetContainer,
                          c().Discounted,
                        ),
                      },
                      i.createElement(
                        "div",
                        { className: c().StoreSaleDiscountBox },
                        t.discount_percent,
                        "%",
                      ),
                      i.createElement(
                        "div",
                        { className: c().StoreSaleDiscountedPriceCtn },
                        i.createElement(
                          "div",
                          { className: c().StoreOriginalPrice },
                          t.orig_price,
                        ),
                        i.createElement(
                          "div",
                          { className: c().StoreSalePriceBox },
                          t.final_price,
                        ),
                      ),
                    )
                : i.createElement(
                    "div",
                    { className: (0, p.Z)(c().StoreSalePriceWidgetContainer) },
                    i.createElement(
                      "div",
                      { className: c().StoreSaleDiscountedPriceCtn },
                      i.createElement(
                        "div",
                        { className: c().StoreSalePriceBox },
                        t.final_price,
                      ),
                    ),
                  );
      };
      function N(e) {
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
      a.d(t, { Eu: () => v, J8: () => E, gq: () => h, nk: () => S });
      var i,
        n = a(27605),
        r = a(47427),
        o = a(31421),
        l = a(80886),
        c = a(35714),
        s = a.n(c),
        d = a(62613),
        _ = a(13129),
        u = a(25006),
        m = a(85305),
        p = a(61931);
      !(function (e) {
        (e.k_eBlock = "block"),
          (e.k_eFinal = "final"),
          (e.k_eOriginal = "original"),
          (e.k_eReservation = "reservation");
      })(i || (i = {}));
      const S = (e) => {
        switch (e.display_style) {
          case i.k_eFinal:
            return (
              Boolean(e.formatted_final_price) &&
              r.createElement("span", null, e.formatted_final_price)
            );
          case i.k_eOriginal:
            const t = e.formatted_orig_price || e.formatted_final_price;
            return Boolean(t) && r.createElement("span", null, t);
        }
        const t = "reservation" == e.display_style,
          a = e.bHideDiscountPercentForCompliance && !0,
          n = "bbcode_price" == e.className;
        return r.createElement(
          "span",
          {
            className: (0, _.Z)({
              [p.StoreSalePriceWidget]: !0,
              [e.className]: Boolean(e.className),
              [p.StoreSaleReservationPrice]: t,
            }),
          },
          Boolean(e.discount_percent && !a) &&
            r.createElement(
              "span",
              {
                className: (0, _.Z)(
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
                className: (0, _.Z)({
                  [p.DiscountIconCtn]: !0,
                  bbcode_price_discount: n,
                }),
              },
              r.createElement(d.dCe, null),
            ),
          Boolean(e.formatted_final_price) &&
            (Boolean(e.discount_percent && e.formatted_orig_price)
              ? r.createElement(
                  "div",
                  {
                    className: (0, _.Z)({
                      [p.StoreSaleDiscountedPriceCtn]: !0,
                      bbcode_price_ctn: n,
                    }),
                  },
                  r.createElement(
                    "div",
                    {
                      className: (0, _.Z)({
                        [p.StoreOriginalPrice]: !0,
                        StoreOriginalPrice: !0,
                        bbcode_price_orig: n,
                      }),
                    },
                    e.formatted_orig_price,
                  ),
                  r.createElement(
                    "div",
                    {
                      className: (0, _.Z)({
                        [p.StoreSalePriceBox]: !0,
                        bbcode_price_box: n,
                        [p.StoreSaleReservationPriceBox]: t,
                        bbcode_price_final: n,
                      }),
                    },
                    e.formatted_final_price,
                  ),
                )
              : r.createElement(
                  "div",
                  {
                    className: (0, _.Z)({
                      [p.StoreSalePriceBox]: !0,
                      bbcode_price_box: n,
                      [p.StoreSaleReservationPriceBox]: t,
                      bbcode_price_final: n,
                    }),
                  },
                  e.formatted_final_price,
                )),
        );
      };
      function g(e) {
        const [t] = (0, l.ie)(e.packageID, {});
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
      const f = (0, n.Pi)((e) => {
        const [t] = (0, l.ie)(e.packageID, {}),
          [a] = (0, l.ie)(e.compareID, {});
        if (!t || !a) return null;
        const i = (function (e, t) {
          var a;
          if (
            !(null == e
              ? void 0
              : e.GetBestPurchaseOption().final_price_in_cents) ||
            !(null === (a = null == t ? void 0 : t.GetBestPurchaseOption()) ||
            void 0 === a
              ? void 0
              : a.final_price_in_cents)
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
        return void 0 === i
          ? null
          : r.createElement("span", { className: p.StorePriceSavings }, i);
      });
      function v(e) {
        const t = Number(e.args.packageid),
          a = Number(e.args.compareid);
        return t && a
          ? r.createElement(f, { packageID: t, compareID: a })
          : null;
      }
      const D = (e) => {
        const t = (0, u.bJ)(),
          a = (0, o.mY)(t);
        return r.createElement(m.RJ, {
          snr: a,
          appID: e.appid,
          classOverride: (0, _.Z)(s().WishlistButtonNotTop, "WishlistButton"),
        });
      };
      function h(e) {
        const t = Number(e.args.appid);
        return t ? r.createElement(D, { appid: t }) : null;
      }
    },
    2324: (e, t, a) => {
      "use strict";
      a.d(t, { B: () => n });
      var i = a(31846);
      function n(e) {
        return (0, i.Xx)(
          "#Hardware_ShippingEstimate_Range",
          e.estimated_delivery_soonest_business_days,
          e.estimated_delivery_latest_business_days,
        );
      }
    },
    36595: (e, t, a) => {
      "use strict";
      a.d(t, { Z: () => i });
      const i =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==";
    },
  },
]);
