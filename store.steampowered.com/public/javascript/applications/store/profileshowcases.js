/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [41],
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
      function c(t) {
        return p.a.createElement(
          w.d,
          Object(s.a)({}, t, {
            onClick: function (e) {
              return Object(P.d)(
                e,
                t.customization_type,
                t.current_level,
                t.desired_level
              );
            },
          })
        );
      }
      function i(t) {
        return p.a.createElement(
          w.c,
          Object(s.a)({}, t, {
            onClick: function (e) {
              return Object(P.c)(
                e,
                t.customization_type,
                t.purchased_count,
                t.current_level
              );
            },
          })
        );
      }
      function o(e) {
        return p.a.createElement(
          h.a,
          {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "small",
            className: m.PageContainer,
          },
          p.a.createElement("img", {
            src: S,
            className: f.ProfileShowcaseHeaderImage,
          })
        );
      }
      function l(e) {
        var s = e.point_cost,
          t = e.upgradable_showcases,
          a = e.purchased_upgrades,
          n = new Map();
        t.forEach(function (e) {
          n.set(e, 1);
        }),
          a &&
            a.forEach(function (e) {
              n.set(e.customization_type, e.level);
            });
        var r = t.map(function (e) {
          var t = n.get(e),
            a = t + 1;
          return p.a.createElement(c, {
            key: e,
            point_cost: s,
            customization_type: e,
            current_level: t,
            desired_level: a,
          });
        });
        return p.a.createElement(
          h.e,
          {
            className: m.PageItemsContainer,
            itemClassName: m.PageItemsContainerChildren,
            spacing: "xlarge",
          },
          p.a.createElement(
            g.b,
            {
              title: Object(_.f)("#ProfileShowcases_Upgrades_Title"),
              subtitle: Object(_.f)("#ProfileShowcases_Upgrades_Subtitle"),
            },
            r
          )
        );
      }
      function u(e) {
        var t = e.point_cost,
          a = e.purchasable_showcases,
          s = e.purchased_showcases,
          n = e.purchased_upgrades,
          r = new Map(),
          c = new Map();
        a.forEach(function (e) {
          r.set(e, 0), c.set(e, 1);
        }),
          s &&
            s.forEach(function (e) {
              r.set(e.customization_type, e.count);
            }),
          n &&
            n.forEach(function (e) {
              c.set(e.customization_type, e.level);
            });
        var o = a.map(function (e) {
          return p.a.createElement(i, {
            key: e,
            point_cost: t,
            current_level: c.get(e),
            customization_type: e,
            purchased_count: r.get(e),
          });
        });
        return p.a.createElement(
          h.e,
          {
            className: m.PageItemsContainer,
            itemClassName: m.PageItemsContainerChildren,
            spacing: "xlarge",
          },
          p.a.createElement(
            g.b,
            {
              title: Object(_.f)("#ProfileShowcases_Slots_Title"),
              subtitle: Object(_.f)("#ProfileShowcases_Slots_Subtitle"),
            },
            o
          )
        );
      }
      var s = a("mrSG"),
        n = a("q1tI"),
        p = a.n(n),
        r = a("TyAF"),
        m = a("li8c"),
        f = a("cix0"),
        h = a("RV7a"),
        d = a("nXE5"),
        _ = a("TLQK"),
        b = a("prdU"),
        g = a("+9fn"),
        w = a("ehaW"),
        P = a("+j4l"),
        S = a("7v2d"),
        E = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(s.d)(t, e),
            (t.prototype.render = function () {
              var e = b.b.Get().GetUpgradableProfileShowcaseCost(),
                t = b.b.Get().GetUpgradableProfileShowcases(),
                a = b.b.Get().GetUpgradedProfileCustomizations(),
                s = b.b.Get().GetPurchasableProfileShowcaseSlotCost(),
                n = b.b.Get().GetPurchasableProfileShowcaseSlots(),
                r = b.b.Get().GetPurchasedProfileCustomizations();
              return p.a.createElement(
                d.e,
                null,
                p.a.createElement(
                  h.e,
                  {
                    className: m.PageItemsContainer,
                    itemClassName: m.PageItemsContainerChildren,
                    spacing: "xlarge",
                  },
                  p.a.createElement(
                    "div",
                    null,
                    p.a.createElement(d.f, {
                      title: Object(_.f)("#ShopPageTitle_ProfileShowcases"),
                    })
                  ),
                  p.a.createElement(o, null),
                  p.a.createElement(l, {
                    point_cost: e,
                    upgradable_showcases: t,
                    purchased_upgrades: a,
                  }),
                  p.a.createElement(u, {
                    point_cost: s,
                    purchasable_showcases: n,
                    purchased_showcases: r,
                    purchased_upgrades: a,
                  }),
                  this.props.children
                )
              );
            }),
            (t = Object(s.c)([r.a], t))
          );
        })(p.a.Component);
      t.default = E;
    },
  },
]);
