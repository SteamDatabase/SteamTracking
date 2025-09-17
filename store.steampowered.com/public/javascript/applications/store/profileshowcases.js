/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [5004],
  {
    64399: (e) => {
      e.exports = {
        ProfileShowcaseHeaderImage: "_2tjUy9meAE2vNIP6iYBRVU",
        ShowcaseSubhead: "_2BmNvI5oqx2_EjWNkstqPt",
      };
    },
    6959: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { ProfileShowcasesPage: () => E, default: () => S });
      var s = a(34629),
        r = a(90626),
        l = a(75844),
        o = a(5108),
        c = a(64399),
        n = a(99428),
        i = a(54279),
        p = a(61859),
        m = a(22580),
        u = a(87873),
        h = a(12711),
        _ = a(59707);
      const d =
          a.p +
          "images/applications/store/showcases_header_image.svg?v=valveisgoodatcaching",
        g = (e) =>
          r.createElement(h.y7, {
            ...e,
            onClick: (t) =>
              (0, _.Xw)(
                t,
                e.customization_type,
                e.current_level,
                e.desired_level,
              ),
          }),
        w = (e) =>
          r.createElement(h.y2, {
            ...e,
            onClick: (t) =>
              (0, _.rE)(
                t,
                e.customization_type,
                e.purchased_count,
                e.current_level,
              ),
          }),
        P = (e) =>
          r.createElement(
            n.az,
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
        f = (e) => {
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
            n.BJ,
            {
              className: o.PageItemsContainer,
              itemClassName: o.PageItemsContainerChildren,
              spacing: "xlarge",
            },
            r.createElement(
              u.Gq,
              {
                title: (0, p.we)("#ProfileShowcases_Upgrades_Title"),
                subtitle: (0, p.we)("#ProfileShowcases_Upgrades_Subtitle"),
              },
              c,
            ),
          );
        },
        C = (e) => {
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
            r.createElement(w, {
              key: e,
              point_cost: t,
              current_level: i.get(e),
              customization_type: e,
              purchased_count: c.get(e),
            }),
          );
          return r.createElement(
            n.BJ,
            {
              className: o.PageItemsContainer,
              itemClassName: o.PageItemsContainerChildren,
              spacing: "xlarge",
            },
            r.createElement(
              u.Gq,
              {
                title: (0, p.we)("#ProfileShowcases_Slots_Title"),
                subtitle: (0, p.we)("#ProfileShowcases_Slots_Subtitle"),
              },
              m,
            ),
          );
        };
      let E = class extends r.Component {
        render() {
          let e = m.DZ.Get().GetUpgradableProfileShowcaseCost(),
            t = m.DZ.Get().GetUpgradableProfileShowcases(),
            a = m.DZ.Get().GetUpgradedProfileCustomizations(),
            s = m.DZ.Get().GetPurchasableProfileShowcaseSlotCost(),
            l = m.DZ.Get().GetPurchasableProfileShowcaseSlots(),
            c = m.DZ.Get().GetPurchasedProfileCustomizations();
          return r.createElement(
            i.jy,
            null,
            r.createElement(
              n.BJ,
              {
                className: o.PageItemsContainer,
                itemClassName: o.PageItemsContainerChildren,
                spacing: "xlarge",
              },
              r.createElement(
                "div",
                null,
                r.createElement(i.Ch, {
                  title: (0, p.we)("#ShopPageTitle_ProfileShowcases"),
                }),
              ),
              r.createElement(P, null),
              r.createElement(f, {
                point_cost: e,
                upgradable_showcases: t,
                purchased_upgrades: a,
              }),
              r.createElement(C, {
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
      E = (0, s.Cg)([l.PA], E);
      const S = E;
    },
  },
]);
