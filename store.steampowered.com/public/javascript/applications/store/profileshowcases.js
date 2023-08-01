/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [2301],
  {
    38646: (e) => {
      e.exports = {
        ProfileShowcaseHeaderImage:
          "profileshowcases_ProfileShowcaseHeaderImage_2tjUy",
        ShowcaseSubhead: "profileshowcases_ShowcaseSubhead_2BmNv",
      };
    },
    55071: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { ProfileShowcasesPage: () => S, default: () => C });
      var a = s(33940),
        r = s(89526),
        o = s(88464),
        l = s(44267),
        c = s(38646),
        n = s(42456),
        i = s(16918),
        p = s(14826),
        h = s(85446),
        m = s(89469),
        u = s(42109),
        _ = s(44066);
      const d =
          s.p +
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
            upgradable_showcases: s,
            purchased_upgrades: a,
          } = e;
          let o = new Map();
          s.forEach((e) => {
            o.set(e, 1);
          }),
            a &&
              a.forEach((e) => {
                o.set(e.customization_type, e.level);
              });
          let c = s.map((e) => {
            const s = o.get(e),
              a = s + 1;
            return r.createElement(g, {
              key: e,
              point_cost: t,
              customization_type: e,
              current_level: s,
              desired_level: a,
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
            purchasable_showcases: s,
            purchased_showcases: a,
            purchased_upgrades: o,
          } = e;
          let c = new Map(),
            i = new Map();
          s.forEach((e) => {
            c.set(e, 0), i.set(e, 1);
          }),
            a &&
              a.forEach((e) => {
                c.set(e.customization_type, e.count);
              }),
            o &&
              o.forEach((e) => {
                i.set(e.customization_type, e.level);
              });
          let h = s.map((e) =>
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
            s = h.Vb.Get().GetUpgradedProfileCustomizations(),
            a = h.Vb.Get().GetPurchasableProfileShowcaseSlotCost(),
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
                purchased_upgrades: s,
              }),
              r.createElement(b, {
                point_cost: a,
                purchasable_showcases: o,
                purchased_showcases: c,
                purchased_upgrades: s,
              }),
              this.props.children,
            ),
          );
        }
      };
      S = (0, a.gn)([o.Pi], S);
      const C = S;
    },
  },
]);
