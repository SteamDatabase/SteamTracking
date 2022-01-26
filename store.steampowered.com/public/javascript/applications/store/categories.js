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
        c = (a("kyHq"), a("qDk6")),
        o = (a("3+zv"), a("5eAM")),
        i = (a("WKKl"), a("gyoR")),
        s = a("MnIK"),
        u = a("0OaU"),
        l = a("lkRc"),
        m = a("jIbu"),
        p = (function () {
          function e() {
            this.m_rgSections = Object(l.h)("categories", "application_config");
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
      function g(e) {
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
              return r.a.createElement(f, {
                key: "category" + e.name,
                category: e,
              });
            })
          )
        );
      }
      function f(e) {
        var t = e.category,
          a = Object(n.useState)(Boolean(t.items)),
          p = a[0],
          g = a[1],
          f = Object(n.useState)(!1),
          d = f[0],
          C = f[1],
          _ = Object(n.useState)(),
          E = _[0],
          S = _[1];
        return (
          Object(n.useEffect)(
            function () {
              if (t.items && d) {
                for (var e = new Set(), a = 0, n = t.items; a < n.length; a++) {
                  var r = n[a];
                  e.add(r.id);
                }
                o.a.LoadAppLinkInfo(Array.from(e)).then(function () {
                  Object(i.a)(t.items, !1).then(function (e) {
                    S(e), g(!1);
                  });
                });
              }
            },
            [d, t.items]
          ),
          r.a.createElement(
            c.a,
            null,
            r.a.createElement(
              s.a,
              {
                placeholderWidth: "110px",
                placeholderHeight: "150px",
                bHorizontal: !0,
                onRender: function () {
                  return C(!0);
                },
              },
              r.a.createElement(
                "a",
                { className: m.Category, href: l.d.STORE_BASE_URL + t.url },
                r.a.createElement(
                  "span",
                  { className: m.CategoryName },
                  r.a.createElement("span", null, t.name)
                ),
                p
                  ? r.a.createElement(u.a, {
                      size: "small",
                      position: "center",
                    })
                  : r.a.createElement(y, { apps: E })
              )
            )
          )
        );
      }
      function y(e) {
        var t = e.apps;
        if (!t) return null;
        var a = (t = t.slice(0, 6)).map(function (e) {
          return o.a.GetAppLinkInfo(e.id);
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
          var e = p.Get(),
            t = Object(n.useState)(e.GetSections()),
            a = t[0];
          return t[1], { sections: a };
        })().sections;
        return r.a.createElement(
          "div",
          { className: m.CategorySectionsCtn },
          e.map(function (e) {
            return r.a.createElement(g, {
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
