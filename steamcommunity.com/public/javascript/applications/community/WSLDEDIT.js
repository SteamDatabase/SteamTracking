/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [3295],
  {
    98782: (e, t, l) => {
      l.r(t), l.d(t, { default: () => g });
      var a = l(25125),
        n = l(89526),
        i = l(7948),
        r = l(10412),
        s = l(25871),
        o = l(57742),
        u = l(12763),
        c = l(57605),
        p = l(16851),
        _ = l(92307),
        d = l(99307),
        E = l(49985),
        m = l(11837),
        h = l(14826);
      function g(e) {
        const { fnOnDirty: t, saleSection: l, event: r } = e,
          [s, o] = (0, a.SZ)(() => {
            var e, t;
            return [
              i.U.Get().GetCurEditLanguage(),
              null !==
                (t =
                  null === (e = l.internal_section_data) || void 0 === e
                    ? void 0
                    : e.while_supplies_last_option) && void 0 !== t
                ? t
                : [],
            ];
          }),
          u = (0, n.useCallback)(() => {
            l.internal_section_data.while_supplies_last_option ||
              (l.internal_section_data.while_supplies_last_option = []);
            let e = "last_" + Math.floor(1e6 * Math.random());
            for (
              ;
              l.internal_section_data.while_supplies_last_option.find(
                (t) => t.unique_id == e,
              );

            )
              e = "last_" + Math.floor(1e6 * Math.random());
            l.internal_section_data.while_supplies_last_option.push({
              unique_id: e,
              localized_supply_desc: [],
            }),
              t();
          }, [t, l.internal_section_data]),
          _ = (0, n.useCallback)(
            (e) => {
              o.splice(e, 1), t();
            },
            [t, o],
          );
        return n.createElement(
          "div",
          null,
          n.createElement(
            "h1",
            null,
            (0, h.Xx)("#Sale_WhileSuppliesLastEditor"),
          ),
          n.createElement(
            "p",
            null,
            "Note: If we are building out the page, and if the packages are not yet visible, make sure to be in ?beta=1 mode.",
          ),
          n.createElement(
            p.f,
            { saleSection: l, fnOnDirty: t, language: s },
            n.createElement(E.R, {
              items: o,
              onDelete: _,
              onReorder: t,
              render: (e) =>
                n.createElement(S, { event: r, supply: e, fnOnDirty: t }),
            }),
            n.createElement(
              c.zx,
              { onClick: u },
              (0, h.Xx)("#Sale_WhileSuppliesLastEditor_Add"),
            ),
            n.createElement("br", null),
          ),
        );
      }
      const f = { include_basic_info: !0, include_all_purchase_options: !0 };
      function S(e) {
        const { supply: t, fnOnDirty: l, event: p } = e,
          [E, g, S] = (0, a.SZ)(() => [
            i.U.Get().GetCurEditLanguage(),
            t.supply_package,
            t.localized_supply_desc || [],
          ]),
          [b, v] = (0, s.ie)(g, f),
          k = (0, n.useCallback)(
            (e) => {
              (t.localized_supply_desc = (0, m.LG)(S || [], 31, null)),
                (t.localized_supply_desc[E] = e),
                l();
            },
            [l, E, S, t],
          ),
          y = (0, n.useCallback)(() => {
            (0, o.AM)(
              n.createElement(
                d.uH,
                {
                  bAlertDialog: !0,
                  strTitle: (0, h.Xx)(
                    "#Sale_WhileSuppliesLastEditor_EditTitle",
                  ),
                  strDescription: (0, h.Xx)(
                    "#Sale_WhileSuppliesLastEditor_EditDesc",
                  ),
                },
                n.createElement(u.R, {
                  strPlaceholder: "Enter Item Description",
                  fnGetCurText: () =>
                    (null == S ? void 0 : S.length) > E ? S[E] : "",
                  fnOnTextChange: (e) => k(e.currentTarget.value),
                  fnSetText: k,
                  bSupportHTMLImport: !0,
                  bEmbeddedInDialog: !0,
                }),
              ),
              window,
            );
          }, [k, E, S]),
          x = h.LJ.GetELanguageFallback(E),
          C = S[E] || S[x] || "";
        return n.createElement(
          "div",
          null,
          n.createElement(c.II, {
            type: "number",
            label: (0, h.Xx)("#Sale_WhileSuppliesLastEditor_Pack"),
            tooltip: (0, h.Xx)("#Sale_WhileSuppliesLastEditor_Pack_ttip"),
            value: null != g ? g : 0,
            onChange: (e) => {
              (t.supply_package = Number.parseInt(e.currentTarget.value)), l();
            },
          }),
          Boolean(3 == v) &&
            n.createElement(
              "div",
              null,
              'Package Found: "',
              b.GetName(),
              '" Price: ',
              b.GetBestPurchasePriceFormatted(),
            ),
          n.createElement(_.d, {
            text: C,
            partnerEventStore: r.j1,
            showErrorInfo: !0,
            event: p,
            languageOverride: E,
          }),
          n.createElement(
            c.zx,
            { onClick: y },
            (0, h.Xx)("#Sale_WhileSuppliesLastEditor_EditTitle"),
          ),
        );
      }
    },
  },
]);
