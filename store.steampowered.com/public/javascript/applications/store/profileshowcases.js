/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [2301],
  {
    67075: (e) => {
      e.exports = {
        ProfileShowcaseHeaderImage:
          "profileshowcases_ProfileShowcaseHeaderImage_2tjUy",
        ShowcaseSubhead: "profileshowcases_ShowcaseSubhead_2BmNv",
      };
    },
    17444: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { ProfileShowcasesPage: () => S, default: () => C });
      var s = a(85556),
        r = a(47427),
        o = a(27605),
        l = a(69247),
        c = a(67075),
        n = a(38244),
        i = a(42364),
        p = a(31846),
        h = a(48976),
        m = a(83955),
        u = a(75321),
        _ = a(46824);
      const d =
          a.p +
          "images/applications/store/showcases_header_image.svg?v=valveisgoodatcaching",
        g = (e) =>
          r.createElement(
            u.oY,
            Object.assign({}, e, {
              onClick: (t) =>
                (0, _.hY)(
                  t,
                  e.customization_type,
                  e.current_level,
                  e.desired_level,
                ),
            }),
          ),
        f = (e) =>
          r.createElement(
            u.MB,
            Object.assign({}, e, {
              onClick: (t) =>
                (0, _._J)(
                  t,
                  e.customization_type,
                  e.purchased_count,
                  e.current_level,
                ),
            }),
          ),
        w = (e) =>
          r.createElement(
            n.xu,
            {
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "small",
              className: l.PageContainer,
            },
            r.createElement("img", {
              src: d,
              className: c.ProfileShowcaseHeaderImage,
            }),
          ),
        P = (e) => {
          const {
            point_cost: t,
            upgradable_showcases: a,
            purchased_upgrades: s,
          } = e;
          let o = new Map();
          a.forEach((e) => {
            o.set(e, 1);
          }),
            s &&
              s.forEach((e) => {
                o.set(e.customization_type, e.level);
              });
          let c = a.map((e) => {
            const a = o.get(e),
              s = a + 1;
            return r.createElement(g, {
              key: e,
              point_cost: t,
              customization_type: e,
              current_level: a,
              desired_level: s,
            });
          });
          return r.createElement(
            n.Kq,
            {
              className: l.PageItemsContainer,
              itemClassName: l.PageItemsContainerChildren,
              spacing: "xlarge",
            },
            r.createElement(
              m.iS,
              {
                title: (0, p.Xx)("#ProfileShowcases_Upgrades_Title"),
                subtitle: (0, p.Xx)("#ProfileShowcases_Upgrades_Subtitle"),
              },
              c,
            ),
          );
        },
        b = (e) => {
          const {
            point_cost: t,
            purchasable_showcases: a,
            purchased_showcases: s,
            purchased_upgrades: o,
          } = e;
          let c = new Map(),
            i = new Map();
          a.forEach((e) => {
            c.set(e, 0), i.set(e, 1);
          }),
            s &&
              s.forEach((e) => {
                c.set(e.customization_type, e.count);
              }),
            o &&
              o.forEach((e) => {
                i.set(e.customization_type, e.level);
              });
          let h = a.map((e) =>
            r.createElement(f, {
              key: e,
              point_cost: t,
              current_level: i.get(e),
              customization_type: e,
              purchased_count: c.get(e),
            }),
          );
          return r.createElement(
            n.Kq,
            {
              className: l.PageItemsContainer,
              itemClassName: l.PageItemsContainerChildren,
              spacing: "xlarge",
            },
            r.createElement(
              m.iS,
              {
                title: (0, p.Xx)("#ProfileShowcases_Slots_Title"),
                subtitle: (0, p.Xx)("#ProfileShowcases_Slots_Subtitle"),
              },
              h,
            ),
          );
        };
      let S = class extends r.Component {
        render() {
          let e = h.Vb.Get().GetUpgradableProfileShowcaseCost(),
            t = h.Vb.Get().GetUpgradableProfileShowcases(),
            a = h.Vb.Get().GetUpgradedProfileCustomizations(),
            s = h.Vb.Get().GetPurchasableProfileShowcaseSlotCost(),
            o = h.Vb.Get().GetPurchasableProfileShowcaseSlots(),
            c = h.Vb.Get().GetPurchasedProfileCustomizations();
          return r.createElement(
            i.OC,
            null,
            r.createElement(
              n.Kq,
              {
                className: l.PageItemsContainer,
                itemClassName: l.PageItemsContainerChildren,
                spacing: "xlarge",
              },
              r.createElement(
                "div",
                null,
                r.createElement(i._f, {
                  title: (0, p.Xx)("#ShopPageTitle_ProfileShowcases"),
                }),
              ),
              r.createElement(w, null),
              r.createElement(P, {
                point_cost: e,
                upgradable_showcases: t,
                purchased_upgrades: a,
              }),
              r.createElement(b, {
                point_cost: s,
                purchasable_showcases: o,
                purchased_showcases: c,
                purchased_upgrades: a,
              }),
              this.props.children,
            ),
          );
        }
      };
      S = (0, s.gn)([o.Pi], S);
      const C = S;
    },
  },
]);
