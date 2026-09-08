/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [45004],
  {
    64399: (e) => {
      e.exports = {
        ProfileShowcaseHeaderImage: "_2tjUy9meAE2vNIP6iYBRVU",
        ShowcaseSubhead: "_2BmNvI5oqx2_EjWNkstqPt",
      };
    },
    6959: (e, s, t) => {
      "use strict";
      t.r(s), t.d(s, { ProfileShowcasesPage: () => j, default: () => S });
      var a = t(34629),
        o = t(7850),
        r = t(90626),
        l = t(75844),
        c = t(5108),
        i = t(64399),
        n = t(99428),
        h = t(54279),
        p = t(61859),
        d = t(22580),
        u = t(87873),
        _ = t(35092),
        g = t(59707);
      const m =
          t.p +
          "images/applications/store/showcases_header_image.svg?v=valveisgoodatcaching",
        w = (e) =>
          (0, o.jsx)(_.y7, {
            ...e,
            onClick: (s) =>
              (0, g.Xw)(
                s,
                e.customization_type,
                e.current_level,
                e.desired_level,
              ),
          }),
        P = (e) =>
          (0, o.jsx)(_.y2, {
            ...e,
            onClick: (s) =>
              (0, g.rE)(
                s,
                e.customization_type,
                e.purchased_count,
                e.current_level,
              ),
          }),
        f = (e) =>
          (0, o.jsx)(n.az, {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "small",
            className: c.PageContainer,
            children: (0, o.jsx)("img", {
              src: m,
              className: i.ProfileShowcaseHeaderImage,
            }),
          }),
        x = (e) => {
          const {
            point_cost: s,
            upgradable_showcases: t,
            purchased_upgrades: a,
          } = e;
          let r = new Map();
          t.forEach((e) => {
            r.set(e, 1);
          }),
            a &&
              a.forEach((e) => {
                r.set(e.customization_type, e.level);
              });
          let l = t.map((e) => {
            const t = r.get(e),
              a = t + 1;
            return (0, o.jsx)(
              w,
              {
                point_cost: s,
                customization_type: e,
                current_level: t,
                desired_level: a,
              },
              e,
            );
          });
          return (0, o.jsx)(n.BJ, {
            className: c.PageItemsContainer,
            itemClassName: c.PageItemsContainerChildren,
            spacing: "xlarge",
            children: (0, o.jsx)(u.Gq, {
              title: (0, p.we)("#ProfileShowcases_Upgrades_Title"),
              subtitle: (0, p.we)("#ProfileShowcases_Upgrades_Subtitle"),
              children: l,
            }),
          });
        },
        C = (e) => {
          const {
            point_cost: s,
            purchasable_showcases: t,
            purchased_showcases: a,
            purchased_upgrades: r,
          } = e;
          let l = new Map(),
            i = new Map();
          t.forEach((e) => {
            l.set(e, 0), i.set(e, 1);
          }),
            a &&
              a.forEach((e) => {
                l.set(e.customization_type, e.count);
              }),
            r &&
              r.forEach((e) => {
                i.set(e.customization_type, e.level);
              });
          let h = t.map((e) =>
            (0, o.jsx)(
              P,
              {
                point_cost: s,
                current_level: i.get(e),
                customization_type: e,
                purchased_count: l.get(e),
              },
              e,
            ),
          );
          return (0, o.jsx)(n.BJ, {
            className: c.PageItemsContainer,
            itemClassName: c.PageItemsContainerChildren,
            spacing: "xlarge",
            children: (0, o.jsx)(u.Gq, {
              title: (0, p.we)("#ProfileShowcases_Slots_Title"),
              subtitle: (0, p.we)("#ProfileShowcases_Slots_Subtitle"),
              children: h,
            }),
          });
        };
      let j = class extends r.Component {
        render() {
          let e = d.DZ.Get().GetUpgradableProfileShowcaseCost(),
            s = d.DZ.Get().GetUpgradableProfileShowcases(),
            t = d.DZ.Get().GetUpgradedProfileCustomizations(),
            a = d.DZ.Get().GetPurchasableProfileShowcaseSlotCost(),
            r = d.DZ.Get().GetPurchasableProfileShowcaseSlots(),
            l = d.DZ.Get().GetPurchasedProfileCustomizations();
          return (0, o.jsx)(h.jy, {
            children: (0, o.jsxs)(n.BJ, {
              className: c.PageItemsContainer,
              itemClassName: c.PageItemsContainerChildren,
              spacing: "xlarge",
              children: [
                (0, o.jsx)("div", {
                  children: (0, o.jsx)(h.Ch, {
                    title: (0, p.we)("#ShopPageTitle_ProfileShowcases"),
                  }),
                }),
                (0, o.jsx)(f, {}),
                (0, o.jsx)(x, {
                  point_cost: e,
                  upgradable_showcases: s,
                  purchased_upgrades: t,
                }),
                (0, o.jsx)(C, {
                  point_cost: a,
                  purchasable_showcases: r,
                  purchased_showcases: l,
                  purchased_upgrades: t,
                }),
                this.props.children,
              ],
            }),
          });
        }
      };
      j = (0, a.Cg)([l.PA], j);
      const S = j;
    },
  },
]);
