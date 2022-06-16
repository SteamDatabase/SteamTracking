/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [127],
  {
    "7v2d": function (e, t, a) {
      e.exports =
        a.p +
        "images/applications/store/showcases_header_image.svg?v=valveisgoodatcaching";
    },
    cix0: function (e, t, a) {
      e.exports = {
        ProfileShowcaseHeaderImage:
          "profileshowcases_ProfileShowcaseHeaderImage_2tjUy",
        ShowcaseSubhead: "profileshowcases_ShowcaseSubhead_2BmNv",
      };
    },
    yDev: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "ProfileShowcasesPage", function () {
          return C;
        });
      var s = a("mrSG"),
        c = a("q1tI"),
        o = a.n(c),
        r = a("TyAF"),
        l = a("li8c"),
        n = a("cix0"),
        i = a("RV7a"),
        p = a("nXE5"),
        u = a("GXif"),
        m = a("prdU"),
        h = a("+9fn"),
        d = a("ehaW"),
        _ = a("+j4l"),
        g = (a("Nr4G"), a("ztGc"), a("7v2d")),
        b = a.n(g);
      const f = (e) =>
          o.a.createElement(
            d.d,
            Object.assign({}, e, {
              onClick: (t) =>
                Object(_.d)(
                  t,
                  e.customization_type,
                  e.current_level,
                  e.desired_level
                ),
            })
          ),
        w = (e) =>
          o.a.createElement(
            d.c,
            Object.assign({}, e, {
              onClick: (t) =>
                Object(_.c)(
                  t,
                  e.customization_type,
                  e.purchased_count,
                  e.current_level
                ),
            })
          ),
        P = (e) =>
          o.a.createElement(
            i.a,
            {
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "small",
              className: l.PageContainer,
            },
            o.a.createElement("img", {
              src: b.a,
              className: n.ProfileShowcaseHeaderImage,
            })
          ),
        S = (e) => {
          const {
            point_cost: t,
            upgradable_showcases: a,
            purchased_upgrades: s,
          } = e;
          let c = new Map();
          a.forEach((e) => {
            c.set(e, 1);
          }),
            s &&
              s.forEach((e) => {
                c.set(e.customization_type, e.level);
              });
          let r = a.map((e) => {
            const a = c.get(e),
              s = a + 1;
            return o.a.createElement(f, {
              key: e,
              point_cost: t,
              customization_type: e,
              current_level: a,
              desired_level: s,
            });
          });
          return o.a.createElement(
            i.f,
            {
              className: l.PageItemsContainer,
              itemClassName: l.PageItemsContainerChildren,
              spacing: "xlarge",
            },
            o.a.createElement(
              h.b,
              {
                title: Object(u.g)("#ProfileShowcases_Upgrades_Title"),
                subtitle: Object(u.g)("#ProfileShowcases_Upgrades_Subtitle"),
              },
              r
            )
          );
        },
        E = (e) => {
          const {
            point_cost: t,
            purchasable_showcases: a,
            purchased_showcases: s,
            purchased_upgrades: c,
          } = e;
          let r = new Map(),
            n = new Map();
          a.forEach((e) => {
            r.set(e, 0), n.set(e, 1);
          }),
            s &&
              s.forEach((e) => {
                r.set(e.customization_type, e.count);
              }),
            c &&
              c.forEach((e) => {
                n.set(e.customization_type, e.level);
              });
          let p = a.map((e) =>
            o.a.createElement(w, {
              key: e,
              point_cost: t,
              current_level: n.get(e),
              customization_type: e,
              purchased_count: r.get(e),
            })
          );
          return o.a.createElement(
            i.f,
            {
              className: l.PageItemsContainer,
              itemClassName: l.PageItemsContainerChildren,
              spacing: "xlarge",
            },
            o.a.createElement(
              h.b,
              {
                title: Object(u.g)("#ProfileShowcases_Slots_Title"),
                subtitle: Object(u.g)("#ProfileShowcases_Slots_Subtitle"),
              },
              p
            )
          );
        };
      let C = class extends o.a.Component {
        render() {
          let e = m.b.Get().GetUpgradableProfileShowcaseCost(),
            t = m.b.Get().GetUpgradableProfileShowcases(),
            a = m.b.Get().GetUpgradedProfileCustomizations(),
            s = m.b.Get().GetPurchasableProfileShowcaseSlotCost(),
            c = m.b.Get().GetPurchasableProfileShowcaseSlots(),
            r = m.b.Get().GetPurchasedProfileCustomizations();
          return o.a.createElement(
            p.e,
            null,
            o.a.createElement(
              i.f,
              {
                className: l.PageItemsContainer,
                itemClassName: l.PageItemsContainerChildren,
                spacing: "xlarge",
              },
              o.a.createElement(
                "div",
                null,
                o.a.createElement(p.f, {
                  title: Object(u.g)("#ShopPageTitle_ProfileShowcases"),
                })
              ),
              o.a.createElement(P, null),
              o.a.createElement(S, {
                point_cost: e,
                upgradable_showcases: t,
                purchased_upgrades: a,
              }),
              o.a.createElement(E, {
                point_cost: s,
                purchasable_showcases: c,
                purchased_showcases: r,
                purchased_upgrades: a,
              }),
              this.props.children
            )
          );
        }
      };
      (C = Object(s.b)([r.a], C)), (t.default = C);
    },
  },
]);
