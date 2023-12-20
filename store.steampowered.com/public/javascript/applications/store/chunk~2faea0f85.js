/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [1949],
  {
    31465: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        MainCarousel: "contenthubshared_MainCarousel_rKC9i",
        FeatureCtn: "contenthubshared_FeatureCtn_1ZPgL",
        StoreSection: "contenthubshared_StoreSection_1g3iQ",
        SectionTitle: "contenthubshared_SectionTitle_26E34",
        SectionDescription: "contenthubshared_SectionDescription_18HRZ",
        SectionTitleCtn: "contenthubshared_SectionTitleCtn_1VuW8",
        SpotlightsColumn: "contenthubshared_SpotlightsColumn_1g97e",
        SpecialsItem: "contenthubshared_SpecialsItem_3GfHV",
        SpotlightCtn: "contenthubshared_SpotlightCtn_3pJ3t",
        SpotlightImageCtn: "contenthubshared_SpotlightImageCtn_1o33E",
        CapsuleDecorators: "contenthubshared_CapsuleDecorators_1-sqr",
        SpotlightTextCtn: "contenthubshared_SpotlightTextCtn_2aZCT",
        SpotlightTitle: "contenthubshared_SpotlightTitle_39Wrx",
        SpotlightBody: "contenthubshared_SpotlightBody_1es6r",
        SpotlightWeeklongTextCtn:
          "contenthubshared_SpotlightWeeklongTextCtn_4Hq08",
        SpotlightItemCount: "contenthubshared_SpotlightItemCount_2-5Ew",
        BottomBarPriceInfo: "contenthubshared_BottomBarPriceInfo_10UCX",
        BroadcastPage: "contenthubshared_BroadcastPage_2u01c",
        BroadcastCtn: "contenthubshared_BroadcastCtn_3WaND",
        BroadcastImageCtn: "contenthubshared_BroadcastImageCtn_1MlNi",
        BroadcastVideoThumbnail:
          "contenthubshared_BroadcastVideoThumbnail_1DCxK",
        BroadcastPlayIcon: "contenthubshared_BroadcastPlayIcon_yNbSc",
        BroadcastTextCtn: "contenthubshared_BroadcastTextCtn_1FsEE",
        BroadcastName: "contenthubshared_BroadcastName_R0KgL",
        BroadcastDesc: "contenthubshared_BroadcastDesc_2kc5g",
        DailyDealCtn: "contenthubshared_DailyDealCtn_3FVdc",
        DailyDealImageCtn: "contenthubshared_DailyDealImageCtn_-UnIs",
        DailyDealTextCtn: "contenthubshared_DailyDealTextCtn_1ngzl",
        DailyDealDesc: "contenthubshared_DailyDealDesc_1xES0",
        ContentHubTakeoverCtn: "contenthubshared_ContentHubTakeoverCtn_2w_95",
        TweaksMenu: "contenthubshared_TweaksMenu_DxyO5",
        MenuTitle: "contenthubshared_MenuTitle_10cAT",
        MenuOptions: "contenthubshared_MenuOptions_1UNUd",
      };
    },
    10809: (e) => {
      e.exports = {
        StoreSalePriceWidget: "packagepricewidget_StoreSalePriceWidget_2ykYV",
        StoreSaleDiscountedPriceCtn:
          "packagepricewidget_StoreSaleDiscountedPriceCtn_1f3PI",
        StoreSalePriceBox: "packagepricewidget_StoreSalePriceBox_2WBvz",
        StoreSaleReservationPriceBox:
          "packagepricewidget_StoreSaleReservationPriceBox_3u-EJ",
        StoreSaleDiscountBox: "packagepricewidget_StoreSaleDiscountBox_2rkkq",
        FromCoupon: "packagepricewidget_FromCoupon_1Q2do",
        StoreOriginalPrice: "packagepricewidget_StoreOriginalPrice_3h9iQ",
      };
    },
    23276: (e, t, a) => {
      "use strict";
      a.d(t, { Pl: () => b, k8: () => E, Jm: () => S, $1: () => g });
      var n = a(89526),
        r = a(98009),
        o = a(85886),
        i = a(44973);
      var c = a(23715),
        l = a.n(c),
        s = a(25589),
        d = a(701),
        u = a(71161),
        _ = a(75962),
        p = a(19304),
        m = a(14826),
        h = a(31465);
      function g(e) {
        const { spotlight: t } = e,
          a = (0, u.bJ)();
        return n.createElement(
          "div",
          { className: h.SpotlightCtn },
          n.createElement(
            "div",
            { className: h.SpotlightImageCtn },
            n.createElement(
              "div",
              { className: (0, p.Z)(c.CapsuleDecorators, h.CapsuleDecorators) },
              t.has_live_broadcast && n.createElement(s.x, null),
            ),
            t.open_in_new_window
              ? n.createElement(
                  _.ns,
                  { href: (0, r.Hf)(t.url, a) },
                  n.createElement("img", { src: t.image_url, alt: t.title }),
                )
              : n.createElement(
                  "a",
                  { href: (0, r.Hf)(t.url, a) },
                  n.createElement("img", { src: t.image_url, alt: t.title }),
                ),
          ),
          n.createElement(
            "div",
            { className: h.SpotlightTextCtn },
            n.createElement("div", { className: h.SpotlightTitle }, t.title),
            n.createElement("div", { className: h.SpotlightBody }, t.body),
            n.createElement(
              "div",
              { className: h.BottomBarPriceInfo },
              n.createElement(D, {
                discountBlock: t.discount_block,
                bIsSalePage: t.is_sale_page,
              }),
            ),
          ),
        );
      }
      function S(e) {
        var t, a;
        const { spotlight: r } = e,
          o = r.associated_item,
          c = Object.assign(
            {
              is_weeklong_deals: "weeklong_deals" == r.spotlight_template,
              url: r.spotlight_link_url,
              image_url: i.De.MEDIA_CDN_URL + r.asset_url,
              title: r.spotlight_title,
              body: r.spotlight_body,
            },
            f(o),
          );
        if (
          (!c.url && o && (c.url = i.De.STORE_BASE_URL + o.store_url_path),
          (null ===
            (a =
              null === (t = null == o ? void 0 : o.best_purchase_option) ||
              void 0 === t
                ? void 0
                : t.active_discounts) || void 0 === a
            ? void 0
            : a.length) > 0 && -1 !== r.spotlight_body.indexOf("%1$s"))
        ) {
          const e = new Date(
            1e3 * o.best_purchase_option.active_discounts[0].discount_end_date,
          );
          c.body = r.spotlight_body.replace(
            "%1$s",
            e.toLocaleTimeString(m.Yt.GetPreferredLocales(), {
              hour: "numeric",
              minute: "2-digit",
              month: "short",
              day: "numeric",
            }),
          );
        }
        return n.createElement(g, { spotlight: c });
      }
      function b(e) {
        const { dailyDeal: t } = e,
          a = (0, u.bJ)();
        return n.createElement(
          u.ZP,
          { feature: "daily-deal" },
          n.createElement(
            "div",
            { className: h.DailyDealCtn },
            n.createElement(
              "div",
              { className: h.DailyDealImageCtn },
              n.createElement(
                "a",
                { href: (0, r.Hf)(t.target, a) },
                n.createElement("img", { src: t.image }),
              ),
            ),
            n.createElement(
              "div",
              { className: h.DailyDealTextCtn },
              n.createElement("div", { className: h.DailyDealDesc }, t.desc),
              n.createElement(D, {
                discountBlock: t.discount_block,
                bIsSalePage: t.is_sale_page,
              }),
            ),
          ),
        );
      }
      function E(e) {
        var t;
        const {
            dailyDeal: { item: a },
          } = e,
          r = Object.assign(
            {
              end_date:
                null === (t = a.best_purchase_option.active_discounts[0]) ||
                void 0 === t
                  ? void 0
                  : t.discount_end_date,
              target: i.De.STORE_BASE_URL + a.store_url_path,
              image:
                ((o = a.assets),
                (c = "header"),
                i.De.MEDIA_CDN_URL +
                  o.asset_url_format.replace("${FILENAME}", o[c])),
            },
            f(a),
          );
        var o, c;
        return n.createElement(b, { dailyDeal: r });
      }
      const D = (e) => {
        const { discountBlock: t, bIsSalePage: a } = e;
        if (!t) return null;
        const r = e.discountBlock.hide_discount_percent_for_compliance && !0;
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
            : r
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
          : null != t.bundle_discount && t.bundle_discount > 0 && !r
          ? n.createElement(
              "div",
              { className: h.DiscountBlock },
              n.createElement(
                "div",
                { className: h.DiscountPercent },
                "-",
                t.bundle_discount,
                "%",
              ),
            )
          : null != t.discount_percent && t.discount_percent > 0
          ? r
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
      function f(e) {
        return e
          ? {
              item: { type: (0, o.qE)(e.item_type), id: e.id },
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
    61963: (e, t, a) => {
      "use strict";
      a.d(t, { Eu: () => E, J8: () => S, gq: () => f, nk: () => h });
      var n,
        r = a(88464),
        o = a(89526),
        i = a(98009),
        c = a(25871),
        l = a(55290),
        s = a.n(l),
        d = a(701),
        u = a(19304),
        _ = a(71161),
        p = a(43840),
        m = a(10809);
      !(function (e) {
        (e.k_eBlock = "block"),
          (e.k_eFinal = "final"),
          (e.k_eOriginal = "original"),
          (e.k_eReservation = "reservation");
      })(n || (n = {}));
      const h = (e) => {
        switch (e.display_style) {
          case n.k_eFinal:
            return (
              Boolean(e.formatted_final_price) &&
              o.createElement("span", null, e.formatted_final_price)
            );
          case n.k_eOriginal:
            const t = e.formatted_orig_price || e.formatted_final_price;
            return Boolean(t) && o.createElement("span", null, t);
        }
        const t = "reservation" == e.display_style,
          a = e.bHideDiscountPercentForCompliance && !0,
          r = "bbcode_price" == e.className;
        return o.createElement(
          "span",
          {
            className: (0, u.Z)({
              [m.StoreSalePriceWidget]: !0,
              [e.className]: Boolean(e.className),
              [m.StoreSaleReservationPrice]: t,
            }),
          },
          Boolean(e.discount_percent && !a) &&
            o.createElement(
              "span",
              {
                className: (0, u.Z)(
                  m.StoreSaleDiscountBox,
                  "StoreSaleDiscountBox",
                  e.bDiscountFromCoupon && m.FromCoupon,
                ),
              },
              `-${e.discount_percent}%`,
            ),
          Boolean(e.discount_percent && a) &&
            o.createElement(
              "div",
              {
                className: (0, u.Z)({
                  [m.DiscountIconCtn]: !0,
                  bbcode_price_discount: r,
                }),
              },
              o.createElement(d.dCe, null),
            ),
          Boolean(e.formatted_final_price) &&
            (Boolean(e.discount_percent && e.formatted_orig_price)
              ? o.createElement(
                  "div",
                  {
                    className: (0, u.Z)({
                      [m.StoreSaleDiscountedPriceCtn]: !0,
                      bbcode_price_ctn: r,
                    }),
                  },
                  o.createElement(
                    "div",
                    {
                      className: (0, u.Z)({
                        [m.StoreOriginalPrice]: !0,
                        StoreOriginalPrice: !0,
                        bbcode_price_orig: r,
                      }),
                    },
                    e.formatted_orig_price,
                  ),
                  o.createElement(
                    "div",
                    {
                      className: (0, u.Z)({
                        [m.StoreSalePriceBox]: !0,
                        bbcode_price_box: r,
                        [m.StoreSaleReservationPriceBox]: t,
                        bbcode_price_final: r,
                      }),
                    },
                    e.formatted_final_price,
                  ),
                )
              : o.createElement(
                  "div",
                  {
                    className: (0, u.Z)({
                      [m.StoreSalePriceBox]: !0,
                      bbcode_price_box: r,
                      [m.StoreSaleReservationPriceBox]: t,
                      bbcode_price_final: r,
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
          return o.createElement(h, {
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
      function S(e) {
        const t = Number(e.args.packageid);
        if (!t) return null;
        const a = e.args.display;
        return o.createElement(g, { packageID: t, display_style: a });
      }
      const b = (0, r.Pi)((e) => {
        const [t] = (0, c.ie)(e.packageID, {}),
          [a] = (0, c.ie)(e.compareID, {});
        if (!t || !a) return null;
        const n = (function (e, t) {
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
        return void 0 === n
          ? null
          : o.createElement("span", { className: m.StorePriceSavings }, n);
      });
      function E(e) {
        const t = Number(e.args.packageid),
          a = Number(e.args.compareid);
        return t && a
          ? o.createElement(b, { packageID: t, compareID: a })
          : null;
      }
      const D = (e) => {
        const t = (0, _.bJ)(),
          a = (0, i.mY)(t);
        return o.createElement(p.RJ, {
          snr: a,
          appID: e.appid,
          classOverride: (0, u.Z)(s().WishlistButtonNotTop, "WishlistButton"),
        });
      };
      function f(e) {
        const t = Number(e.args.appid);
        return t ? o.createElement(D, { appid: t }) : null;
      }
    },
    31245: (e, t, a) => {
      "use strict";
      a.d(t, { B: () => x, O: () => k });
      var n = a(89526),
        r = a(62983),
        o = a(44026),
        i = a(51438),
        c = a(16221),
        l = a(98009),
        s = a(54671),
        d = a(85886),
        u = a(25871),
        _ = a(5089),
        p = a(43840),
        m = a(44421),
        h = a(23715),
        g = a.n(h),
        S = a(67935),
        b = a(21219),
        E = a(87539),
        D = a(3991),
        f = a(33406),
        v = a(98389),
        C = a(42317),
        P = a(71161),
        B = a(19304),
        y = a(14826),
        N = a(207),
        I = a(32765);
      const k = "capsule_index_";
      function x(e) {
        const {
            capsule: t,
            bShowParentApp: a,
            strExtraParams: l,
            elElementToAppendToHover: s,
            index: m,
            navKey: h,
            bHideStoreHover: S,
          } = e,
          [b, f] = n.useState(!1),
          [C] = (0, u.jk)(t.id, (0, d.TM)(t.type), r.bk),
          [N] = (0, u.vs)(a && (null == C ? void 0 : C.GetParentAppID()), r.bk),
          x = (0, P.bJ)(),
          w = (0, I.id)();
        if (!C) return null;
        const H = Boolean(N),
          O = n.createElement(
            T,
            Object.assign({}, e, {
              info: t,
              bIsHovered: b,
              bHasParentAppToDisplay: H,
            }),
          );
        return n.createElement(
          i.s,
          {
            className: (0, B.Z)({
              [g().OuterCapsuleContainer]: !0,
              [k + m]: 0 == m,
            }),
            navEntryPreferPosition: c.c4.PREFERRED_CHILD,
            navKey: h,
          },
          n.createElement(
            D.zw,
            { appid: C.GetAppID() },
            Boolean(S)
              ? n.createElement(n.Fragment, null, O)
              : n.createElement(
                  p.ll,
                  {
                    className: g().CapsuleContainer,
                    item: t,
                    elElementToAppend: e.elElementToAppendToHover,
                    bShowDemoButton: e.bShowDemoButton,
                    bShowDeckCompatibilityDialog:
                      e.bShowDeckCompatibilityDialog,
                    bHidePrice: e.bHidePrice,
                    bUseSubscriptionLayout: e.bUseSubscriptionLayout,
                    strExtraParams: e.strExtraParams,
                    fnOnHoverStateChange: !w && f,
                    nCreatorAccountID: e.creatorAccountID,
                  },
                  O,
                ),
            Boolean(s) && n.createElement("div", null, s),
          ),
          H &&
            n.createElement(
              o.Ks,
              Object.assign(
                { className: g().CapsuleParentInfo },
                (0, E.h)(N, x, w, e.strExtraParams),
              ),
              n.createElement(
                D.zw,
                { appid: N.GetAppID() },
                n.createElement(
                  "div",
                  { className: g().ParentType },
                  (0, y.Xx)(
                    11 == C.GetAppType()
                      ? "#SalePage_ParentApp_SoundTrack"
                      : "#SalePage_ParentApp_DLC",
                  ),
                ),
                n.createElement(
                  v._,
                  {
                    type: "app",
                    id: N.GetAppID(),
                    strExtraParams: e.strExtraParams,
                  },
                  n.createElement(
                    "img",
                    Object.assign(
                      {
                        loading: "lazy",
                        className: _.AppCapsuleImage,
                        alt: N.GetName(),
                        src: N.GetAssets().GetSmallCapsuleURL(),
                      },
                      (0, r.fn)(),
                    ),
                  ),
                ),
              ),
            ),
        );
      }
      function T(e) {
        var t;
        const {
            info: a,
            bHidePriceIfOwned: r,
            bHideStatusBanners: i,
            strExtraParams: c,
            imageType: _,
            bHasParentAppToDisplay: h,
            bUseSubscriptionLayout: g,
            elElementToAppendToHover: E,
            bHidePrice: v,
            bHidePlatforms: B,
            creatorAccountID: y,
            bIsHovered: I,
          } = e,
          [k] = (0, u.jk)(a.id, (0, d.TM)(a.type), { include_platforms: !0 }),
          x = (0, P.bJ)(),
          T =
            ((0, D.Dt)(a.type),
            (0, n.useMemo)(
              () => (null == k ? void 0 : k.GetIncludedAppIDsOrSelf()),
              [k],
            )),
          w =
            k &&
            (null == k
              ? void 0
              : k
                  .GetIncludedAppIDsOrSelf()
                  .every((e) => s.jg.Get().BOwnsApp(e)));
        if (!k) return null;
        const H = w && !i,
          O = (0, N.bk)((0, l.Hf)(`${k.GetStorePageURL()}${c || ""}`, x));
        let A,
          G = null;
        if (g && 0 == (null == k ? void 0 : k.GetStoreItemType()))
          G = n.createElement(f.r, { appid: k.GetAppID(), bIsMuted: I });
        else if (E);
        else {
          const t = w && r,
            o = H;
          G = n.createElement(m.Hl, {
            info: a,
            bShowAsMuted: o,
            bHidePrice: v,
            bShowInLibraryInsteadOfPrice: t,
            bHidePlatforms: B,
            creatorAccountID: y,
            bShowName: e.bShowName,
          });
        }
        return (
          "overrideNavigation" in a &&
            (A = (e) => (
              a.overrideNavigation(e),
              e.preventDefault(),
              e.stopPropagation(),
              !1
            )),
          n.createElement(
            o.IS,
            {
              href: A ? null : O,
              style: { display: "block", cursor: "pointer" },
              preferredFocus: h,
              onClick: A,
            },
            n.createElement(b.v, { appids: T, hide_status_banners: i }),
            n.createElement(m.a4, { imageType: _, info: a }),
            n.createElement(C.y, {
              eDeckCompatibilityCategory:
                null === (t = null == k ? void 0 : k.GetPlatforms()) ||
                void 0 === t
                  ? void 0
                  : t.steam_deck_compat_category,
            }),
            Boolean(I && !(0, p.Hu)()) && n.createElement(S.v, { appInfo: a }),
            G,
          )
        );
      }
    },
  },
]);
