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
      a.d(t, { Pl: () => b, k8: () => D, Jm: () => S, $1: () => g });
      var n = a(89526),
        o = a(98009),
        r = a(85886),
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
                  { href: (0, o.Hf)(t.url, a) },
                  n.createElement("img", { src: t.image_url, alt: t.title }),
                )
              : n.createElement(
                  "a",
                  { href: (0, o.Hf)(t.url, a) },
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
              n.createElement(E, {
                discountBlock: t.discount_block,
                bIsSalePage: t.is_sale_page,
              }),
            ),
          ),
        );
      }
      function S(e) {
        var t, a;
        const { spotlight: o } = e,
          r = o.associated_item,
          c = Object.assign(
            {
              is_weeklong_deals: "weeklong_deals" == o.spotlight_template,
              url: o.spotlight_link_url,
              image_url: i.De.MEDIA_CDN_URL + o.asset_url,
              title: o.spotlight_title,
              body: o.spotlight_body,
            },
            f(r),
          );
        if (
          (!c.url && r && (c.url = i.De.STORE_BASE_URL + r.store_url_path),
          (null ===
            (a =
              null === (t = null == r ? void 0 : r.best_purchase_option) ||
              void 0 === t
                ? void 0
                : t.active_discounts) || void 0 === a
            ? void 0
            : a.length) > 0 && -1 !== o.spotlight_body.indexOf("%1$s"))
        ) {
          const e = new Date(
            1e3 * r.best_purchase_option.active_discounts[0].discount_end_date,
          );
          c.body = o.spotlight_body.replace(
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
                { href: (0, o.Hf)(t.target, a) },
                n.createElement("img", { src: t.image }),
              ),
            ),
            n.createElement(
              "div",
              { className: h.DailyDealTextCtn },
              n.createElement("div", { className: h.DailyDealDesc }, t.desc),
              n.createElement(E, {
                discountBlock: t.discount_block,
                bIsSalePage: t.is_sale_page,
              }),
            ),
          ),
        );
      }
      function D(e) {
        var t;
        const {
            dailyDeal: { item: a },
          } = e,
          o = Object.assign(
            {
              end_date:
                null === (t = a.best_purchase_option.active_discounts[0]) ||
                void 0 === t
                  ? void 0
                  : t.discount_end_date,
              target: i.De.STORE_BASE_URL + a.store_url_path,
              image:
                ((r = a.assets),
                (c = "header"),
                i.De.MEDIA_CDN_URL +
                  r.asset_url_format.replace("${FILENAME}", r[c])),
            },
            f(a),
          );
        var r, c;
        return n.createElement(b, { dailyDeal: o });
      }
      const E = (e) => {
        const { discountBlock: t, bIsSalePage: a } = e;
        if (!t) return null;
        const o = e.discountBlock.hide_discount_percent_for_compliance && !0;
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
            : o
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
          : null != t.bundle_discount && t.bundle_discount > 0 && !o
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
          ? o
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
    61963: (e, t, a) => {
      "use strict";
      a.d(t, { Eu: () => D, J8: () => S, gq: () => f, nk: () => h });
      var n,
        o = a(88464),
        r = a(89526),
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
              r.createElement("span", null, e.formatted_final_price)
            );
          case n.k_eOriginal:
            const t = e.formatted_orig_price || e.formatted_final_price;
            return Boolean(t) && r.createElement("span", null, t);
        }
        const t = "reservation" == e.display_style,
          a = e.bHideDiscountPercentForCompliance && !0,
          o = "bbcode_price" == e.className;
        return r.createElement(
          "span",
          {
            className: (0, u.Z)({
              [m.StoreSalePriceWidget]: !0,
              [e.className]: Boolean(e.className),
              [m.StoreSaleReservationPrice]: t,
            }),
          },
          Boolean(e.discount_percent && !a) &&
            r.createElement(
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
            r.createElement(
              "div",
              {
                className: (0, u.Z)({
                  [m.DiscountIconCtn]: !0,
                  bbcode_price_discount: o,
                }),
              },
              r.createElement(d.dCe, null),
            ),
          Boolean(e.formatted_final_price) &&
            (Boolean(e.discount_percent && e.formatted_orig_price)
              ? r.createElement(
                  "div",
                  {
                    className: (0, u.Z)({
                      [m.StoreSaleDiscountedPriceCtn]: !0,
                      bbcode_price_ctn: o,
                    }),
                  },
                  r.createElement(
                    "div",
                    {
                      className: (0, u.Z)({
                        [m.StoreOriginalPrice]: !0,
                        StoreOriginalPrice: !0,
                        bbcode_price_orig: o,
                      }),
                    },
                    e.formatted_orig_price,
                  ),
                  r.createElement(
                    "div",
                    {
                      className: (0, u.Z)({
                        [m.StoreSalePriceBox]: !0,
                        bbcode_price_box: o,
                        [m.StoreSaleReservationPriceBox]: t,
                        bbcode_price_final: o,
                      }),
                    },
                    e.formatted_final_price,
                  ),
                )
              : r.createElement(
                  "div",
                  {
                    className: (0, u.Z)({
                      [m.StoreSalePriceBox]: !0,
                      bbcode_price_box: o,
                      [m.StoreSaleReservationPriceBox]: t,
                      bbcode_price_final: o,
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
          return r.createElement(h, {
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
        return r.createElement(g, { packageID: t, display_style: a });
      }
      const b = (0, o.Pi)((e) => {
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
          : r.createElement("span", { className: m.StorePriceSavings }, n);
      });
      function D(e) {
        const t = Number(e.args.packageid),
          a = Number(e.args.compareid);
        return t && a
          ? r.createElement(b, { packageID: t, compareID: a })
          : null;
      }
      const E = (e) => {
        const t = (0, _.bJ)(),
          a = (0, i.mY)(t);
        return r.createElement(p.RJ, {
          snr: a,
          appID: e.appid,
          classOverride: (0, u.Z)(s().WishlistButtonNotTop, "WishlistButton"),
        });
      };
      function f(e) {
        const t = Number(e.args.appid);
        return t ? r.createElement(E, { appid: t }) : null;
      }
    },
    31245: (e, t, a) => {
      "use strict";
      a.d(t, { B: () => x, O: () => k });
      var n = a(89526),
        o = a(62983),
        r = a(44026),
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
        D = a(87539),
        E = a(3991),
        f = a(33406),
        v = a(98389),
        C = a(42317),
        P = a(71161),
        y = a(19304),
        B = a(14826),
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
            onlyOneDiscountPct: b,
          } = e,
          [f, C] = n.useState(!1),
          [N] = (0, u.jk)(t.id, (0, d.TM)(t.type), o.bk),
          [x] = (0, u.vs)(a && (null == N ? void 0 : N.GetParentAppID()), o.bk),
          O = (0, P.bJ)(),
          w = (0, I.id)();
        if (!N) return null;
        const H = Boolean(x),
          A = n.createElement(
            T,
            Object.assign({}, e, {
              info: t,
              bIsHovered: f,
              bHasParentAppToDisplay: H,
              onlyOneDiscountPct: b,
            }),
          );
        return n.createElement(
          i.s,
          {
            className: (0, y.Z)({
              [g().OuterCapsuleContainer]: !0,
              [k + m]: 0 == m,
            }),
            navEntryPreferPosition: c.c4.PREFERRED_CHILD,
            navKey: h,
          },
          n.createElement(
            E.zw,
            { appid: N.GetAppID() },
            Boolean(S)
              ? n.createElement(n.Fragment, null, A)
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
                    fnOnHoverStateChange: !w && C,
                    nCreatorAccountID: e.creatorAccountID,
                  },
                  A,
                ),
            Boolean(s) && n.createElement("div", null, s),
          ),
          H &&
            n.createElement(
              r.Ks,
              Object.assign(
                { className: g().CapsuleParentInfo },
                (0, D.h)(x, O, w, e.strExtraParams),
              ),
              n.createElement(
                E.zw,
                { appid: x.GetAppID() },
                n.createElement(
                  "div",
                  { className: g().ParentType },
                  (0, B.Xx)(
                    11 == N.GetAppType()
                      ? "#SalePage_ParentApp_SoundTrack"
                      : "#SalePage_ParentApp_DLC",
                  ),
                ),
                n.createElement(
                  v._,
                  {
                    type: "app",
                    id: x.GetAppID(),
                    strExtraParams: e.strExtraParams,
                  },
                  n.createElement(
                    "img",
                    Object.assign(
                      {
                        loading: "lazy",
                        className: _.AppCapsuleImage,
                        alt: x.GetName(),
                        src: x.GetAssets().GetSmallCapsuleURL(),
                      },
                      (0, o.fn)(),
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
            bHidePriceIfOwned: o,
            bHideStatusBanners: i,
            strExtraParams: c,
            imageType: _,
            bHasParentAppToDisplay: h,
            bUseSubscriptionLayout: g,
            elElementToAppendToHover: D,
            bHidePrice: v,
            bHidePlatforms: y,
            creatorAccountID: B,
            bIsHovered: I,
            onlyOneDiscountPct: k,
          } = e,
          [x] = (0, u.jk)(a.id, (0, d.TM)(a.type), { include_platforms: !0 }),
          T = (0, P.bJ)(),
          O =
            ((0, E.Dt)(a.type),
            (0, n.useMemo)(
              () => (null == x ? void 0 : x.GetIncludedAppIDsOrSelf()),
              [x],
            )),
          w =
            x &&
            (null == x
              ? void 0
              : x
                  .GetIncludedAppIDsOrSelf()
                  .every((e) => s.jg.Get().BOwnsApp(e)));
        if (!x) return null;
        const H = w && !i,
          A = (0, N.bk)((0, l.Hf)(`${x.GetStorePageURL()}${c || ""}`, T));
        let G,
          R = null;
        if (g && 0 == (null == x ? void 0 : x.GetStoreItemType()))
          R = n.createElement(f.r, { appid: x.GetAppID(), bIsMuted: I });
        else if (D);
        else {
          const t = w && o,
            r = H;
          R = n.createElement(m.Hl, {
            info: a,
            bShowAsMuted: r,
            bHidePrice: v,
            bShowInLibraryInsteadOfPrice: t,
            bHidePlatforms: y,
            creatorAccountID: B,
            bShowName: e.bShowName,
            onlyOneDiscountPct: k,
          });
        }
        return (
          "overrideNavigation" in a &&
            (G = (e) => (
              a.overrideNavigation(e),
              e.preventDefault(),
              e.stopPropagation(),
              !1
            )),
          n.createElement(
            r.IS,
            {
              href: G ? null : A,
              style: { display: "block", cursor: "pointer" },
              preferredFocus: h,
              onClick: G,
            },
            n.createElement(b.v, { appids: O, hide_status_banners: i }),
            n.createElement(m.a4, { imageType: _, info: a }),
            n.createElement(C.y, {
              eDeckCompatibilityCategory:
                null === (t = null == x ? void 0 : x.GetPlatforms()) ||
                void 0 === t
                  ? void 0
                  : t.steam_deck_compat_category,
            }),
            Boolean(I && !(0, p.Hu)()) && n.createElement(S.v, { appInfo: a }),
            R,
          )
        );
      }
    },
  },
]);
