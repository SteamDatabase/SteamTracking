/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [2301],
  {
    67075: (e) => {
      e.exports = {
        ProfileShowcaseHeaderImage: "_2tjUy9meAE2vNIP6iYBRVU",
        ShowcaseSubhead: "_2BmNvI5oqx2_EjWNkstqPt",
      };
    },
    17444: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { ProfileShowcasesPage: () => C, default: () => E });
      var s = a(85556),
        r = a(47427),
        l = a(27605),
        o = a(69247),
        c = a(67075),
        n = a(38244),
        i = a(42364),
        p = a(31846),
        m = a(48976),
        u = a(83955),
        h = a(75321),
        _ = a(46824);
      const d =
          a.p +
          "images/applications/store/showcases_header_image.svg?v=valveisgoodatcaching",
        g = (e) =>
          r.createElement(
            h.oY,
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
        P = (e) =>
          r.createElement(
            h.MB,
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
        f = (e) =>
          r.createElement(
            n.xu,
            {
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "small",
              className: o.PageContainer,
            },
            r.createElement("img", {
              src: d,
              className: c.ProfileShowcaseHeaderImage,
            }),
          ),
        w = (e) => {
          const {
            point_cost: t,
            upgradable_showcases: a,
            purchased_upgrades: s,
          } = e;
          let l = new Map();
          a.forEach((e) => {
            l.set(e, 1);
          }),
            s &&
              s.forEach((e) => {
                l.set(e.customization_type, e.level);
              });
          let c = a.map((e) => {
            const a = l.get(e),
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
              className: o.PageItemsContainer,
              itemClassName: o.PageItemsContainerChildren,
              spacing: "xlarge",
            },
            r.createElement(
              u.iS,
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
            purchased_upgrades: l,
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
            l &&
              l.forEach((e) => {
                i.set(e.customization_type, e.level);
              });
          let m = a.map((e) =>
            r.createElement(P, {
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
              className: o.PageItemsContainer,
              itemClassName: o.PageItemsContainerChildren,
              spacing: "xlarge",
            },
            r.createElement(
              u.iS,
              {
                title: (0, p.Xx)("#ProfileShowcases_Slots_Title"),
                subtitle: (0, p.Xx)("#ProfileShowcases_Slots_Subtitle"),
              },
              m,
            ),
          );
        };
      let C = class extends r.Component {
        render() {
          let e = m.Vb.Get().GetUpgradableProfileShowcaseCost(),
            t = m.Vb.Get().GetUpgradableProfileShowcases(),
            a = m.Vb.Get().GetUpgradedProfileCustomizations(),
            s = m.Vb.Get().GetPurchasableProfileShowcaseSlotCost(),
            l = m.Vb.Get().GetPurchasableProfileShowcaseSlots(),
            c = m.Vb.Get().GetPurchasedProfileCustomizations();
          return r.createElement(
            i.OC,
            null,
            r.createElement(
              n.Kq,
              {
                className: o.PageItemsContainer,
                itemClassName: o.PageItemsContainerChildren,
                spacing: "xlarge",
              },
              r.createElement(
                "div",
                null,
                r.createElement(i._f, {
                  title: (0, p.Xx)("#ShopPageTitle_ProfileShowcases"),
                }),
              ),
              r.createElement(f, null),
              r.createElement(w, {
                point_cost: e,
                upgradable_showcases: t,
                purchased_upgrades: a,
              }),
              r.createElement(b, {
                point_cost: s,
                purchasable_showcases: l,
                purchased_showcases: c,
                purchased_upgrades: a,
              }),
              this.props.children,
            ),
          );
        }
      };
      C = (0, s.gn)([l.Pi], C);
      const E = C;
    },
  },
]);
