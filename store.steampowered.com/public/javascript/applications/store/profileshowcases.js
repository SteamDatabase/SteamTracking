/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [99],
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
          return E;
        });
      var s = a("mrSG"),
        n = a("q1tI"),
        r = a.n(n),
        c = a("TyAF"),
        o = a("li8c"),
        i = a("cix0"),
        l = a("RV7a"),
        u = a("nXE5"),
        p = a("TLQK"),
        m = a("prdU"),
        f = a("+9fn"),
        h = a("ehaW"),
        d = a("+j4l"),
        _ = a("7v2d"),
        b = function (e) {
          return r.a.createElement(
            h.d,
            Object(s.a)({}, e, {
              onClick: function (t) {
                return Object(d.d)(
                  t,
                  e.customization_type,
                  e.current_level,
                  e.desired_level
                );
              },
            })
          );
        },
        g = function (e) {
          return r.a.createElement(
            h.c,
            Object(s.a)({}, e, {
              onClick: function (t) {
                return Object(d.c)(
                  t,
                  e.customization_type,
                  e.purchased_count,
                  e.current_level
                );
              },
            })
          );
        },
        w = function (e) {
          return r.a.createElement(
            l.a,
            {
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "small",
              className: o.PageContainer,
            },
            r.a.createElement("img", {
              src: _,
              className: i.ProfileShowcaseHeaderImage,
            })
          );
        },
        P = function (e) {
          var t = e.point_cost,
            a = e.upgradable_showcases,
            s = e.purchased_upgrades,
            n = new Map();
          a.forEach(function (e) {
            n.set(e, 1);
          }),
            s &&
              s.forEach(function (e) {
                n.set(e.customization_type, e.level);
              });
          var c = a.map(function (e) {
            var a = n.get(e),
              s = a + 1;
            return r.a.createElement(b, {
              key: e,
              point_cost: t,
              customization_type: e,
              current_level: a,
              desired_level: s,
            });
          });
          return r.a.createElement(
            l.e,
            {
              className: o.PageItemsContainer,
              itemClassName: o.PageItemsContainerChildren,
              spacing: "xlarge",
            },
            r.a.createElement(
              f.b,
              {
                title: Object(p.f)("#ProfileShowcases_Upgrades_Title"),
                subtitle: Object(p.f)("#ProfileShowcases_Upgrades_Subtitle"),
              },
              c
            )
          );
        },
        S = function (e) {
          var t = e.point_cost,
            a = e.purchasable_showcases,
            s = e.purchased_showcases,
            n = e.purchased_upgrades,
            c = new Map(),
            i = new Map();
          a.forEach(function (e) {
            c.set(e, 0), i.set(e, 1);
          }),
            s &&
              s.forEach(function (e) {
                c.set(e.customization_type, e.count);
              }),
            n &&
              n.forEach(function (e) {
                i.set(e.customization_type, e.level);
              });
          var u = a.map(function (e) {
            return r.a.createElement(g, {
              key: e,
              point_cost: t,
              current_level: i.get(e),
              customization_type: e,
              purchased_count: c.get(e),
            });
          });
          return r.a.createElement(
            l.e,
            {
              className: o.PageItemsContainer,
              itemClassName: o.PageItemsContainerChildren,
              spacing: "xlarge",
            },
            r.a.createElement(
              f.b,
              {
                title: Object(p.f)("#ProfileShowcases_Slots_Title"),
                subtitle: Object(p.f)("#ProfileShowcases_Slots_Subtitle"),
              },
              u
            )
          );
        },
        E = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(s.d)(t, e),
            (t.prototype.render = function () {
              var e = m.b.Get().GetUpgradableProfileShowcaseCost(),
                t = m.b.Get().GetUpgradableProfileShowcases(),
                a = m.b.Get().GetUpgradedProfileCustomizations(),
                s = m.b.Get().GetPurchasableProfileShowcaseSlotCost(),
                n = m.b.Get().GetPurchasableProfileShowcaseSlots(),
                c = m.b.Get().GetPurchasedProfileCustomizations();
              return r.a.createElement(
                u.e,
                null,
                r.a.createElement(
                  l.e,
                  {
                    className: o.PageItemsContainer,
                    itemClassName: o.PageItemsContainerChildren,
                    spacing: "xlarge",
                  },
                  r.a.createElement(
                    "div",
                    null,
                    r.a.createElement(u.f, {
                      title: Object(p.f)("#ShopPageTitle_ProfileShowcases"),
                    })
                  ),
                  r.a.createElement(w, null),
                  r.a.createElement(P, {
                    point_cost: e,
                    upgradable_showcases: t,
                    purchased_upgrades: a,
                  }),
                  r.a.createElement(S, {
                    point_cost: s,
                    purchasable_showcases: n,
                    purchased_showcases: c,
                    purchased_upgrades: a,
                  }),
                  this.props.children
                )
              );
            }),
            (t = Object(s.c)([c.a], t))
          );
        })(r.a.Component);
      t.default = E;
    },
  },
]);
