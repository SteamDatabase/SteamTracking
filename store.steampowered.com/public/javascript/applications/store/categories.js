/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    OVk1: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a("q1tI"),
        r = a.n(n),
        o = (a("kyHq"), a("qDk6")),
        c = (a("3+zv"), a("5eAM")),
        i = (a("WKKl"), a("gyoR")),
        s = a("MnIK"),
        u = a("0OaU"),
        l = a("exH9"),
        p = a("lkRc"),
        m = a("jIbu"),
        g = (function () {
          function e() {
            this.m_rgSections = Object(p.h)("categories", "application_config");
          }
          return (
            (e.prototype.GetSections = function () {
              return this.m_rgSections;
            }),
            (e.Get = function () {
              return e.s_singleton || (e.s_singleton = new e()), e.s_singleton;
            }),
            e
          );
        })();
      function f(e) {
        var t = e.section;
        return r.a.createElement(
          "div",
          { className: m.CategorySection },
          r.a.createElement(
            "span",
            { className: m.CategorySectionName },
            t.name
          ),
          r.a.createElement(
            "div",
            { className: m.CategoriesCtn },
            t.categories.map(function (e) {
              return r.a.createElement(y, {
                key: "category" + e.name,
                category: e,
              });
            })
          )
        );
      }
      function y(e) {
        var t,
          a = e.category,
          g = Object(n.useState)(Boolean(a.items)),
          f = g[0],
          y = g[1],
          _ = Object(n.useState)(!1),
          C = _[0],
          E = _[1],
          S = Object(n.useState)(),
          v = S[0],
          N = S[1];
        return (
          Object(n.useEffect)(
            function () {
              if (a.items && C) {
                for (var e = new Set(), t = 0, n = a.items; t < n.length; t++) {
                  var r = n[t];
                  e.add(r.id);
                }
                c.a.LoadAppLinkInfo(Array.from(e)).then(function () {
                  Object(i.a)(a.items, !1).then(function (e) {
                    N(e), y(!1);
                  });
                });
              }
            },
            [C, a.items]
          ),
          r.a.createElement(
            o.a,
            null,
            r.a.createElement(
              s.a,
              {
                placeholderWidth: "110px",
                placeholderHeight: "150px",
                bHorizontal: !0,
                onRender: function () {
                  return E(!0);
                },
              },
              r.a.createElement(
                "a",
                {
                  href: p.d.STORE_BASE_URL + a.url,
                  className: Object(l.a)(
                    ((t = {}),
                    (t[m.Category] = !0),
                    (t[m.TopLevelCategory] = a.is_toplevel_genre),
                    t)
                  ),
                },
                r.a.createElement(
                  "span",
                  { className: m.CategoryName },
                  r.a.createElement("span", null, a.name)
                ),
                f
                  ? r.a.createElement(u.a, {
                      size: "small",
                      position: "center",
                    })
                  : r.a.createElement(d, { apps: v })
              )
            )
          )
        );
      }
      function d(e) {
        var t = e.apps;
        if (!t) return null;
        var a = (t = t.slice(0, 6)).map(function (e) {
          return c.a.GetAppLinkInfo(e.id);
        });
        return r.a.createElement(
          "div",
          { className: m.GridOuter },
          r.a.createElement(
            "div",
            { className: m.Grid },
            a.map(function (e) {
              return r.a.createElement("img", { key: e.id, src: e.capsule });
            })
          )
        );
      }
      t.default = function () {
        var e = (function () {
          var e = g.Get(),
            t = Object(n.useState)(e.GetSections()),
            a = t[0];
          return t[1], { sections: a };
        })().sections;
        return r.a.createElement(
          "div",
          { className: m.CategorySectionsCtn },
          e.map(function (e) {
            return r.a.createElement(f, {
              key: "section" + e.name,
              section: e,
            });
          })
        );
      };
    },
    jIbu: function (e, t, a) {
      e.exports = {
        CategorySectionsCtn: "categoriesapp_CategorySectionsCtn_YuXds",
        CategorySection: "categoriesapp_CategorySection_2MUQ8",
        CategorySectionName: "categoriesapp_CategorySectionName_2Vnsy",
        CategoriesCtn: "categoriesapp_CategoriesCtn_3yuPy",
        Category: "categoriesapp_Category_1uwcZ",
        GridOuter: "categoriesapp_GridOuter_3Q4XM",
        Grid: "categoriesapp_Grid_3anY0",
        CategoryName: "categoriesapp_CategoryName_3VNsE",
      };
    },
  },
]);
