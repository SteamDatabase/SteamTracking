/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    OVk1: function (e, t, a) {
      "use strict";
      a.r(t);
      var r = a("mrSG"),
        n = a("hwrv"),
        o = a("q1tI"),
        i = a.n(o),
        s = a("av+R"),
        c = a("ykc/"),
        u = a("qDk6"),
        g = a("Jz9t"),
        m = a("j+5p"),
        l = (a("kKgT"), a("MnIK")),
        p = a("0OaU"),
        f = a("exH9"),
        y = a("lkRc"),
        d = a("jIbu"),
        h = a("vDqi"),
        v = a.n(h),
        C = (a("mgoM"), a("kyHq"), a("3+zv"), a("GiuM")),
        _ = (function () {
          function e() {
            (this.m_mapImageForHub = new Map()),
              (this.m_mapPromiseForHub = new Map()),
              (this.m_rgSections = Object(y.h)(
                "categories",
                "application_config"
              ));
            for (var e = 0, t = this.m_rgSections; e < t.length; e++)
              for (var a = 0, r = t[e].categories; a < r.length; a++) {
                var n = r[a];
                n.image &&
                  this.m_mapImageForHub.set(this.GetCategoryKey(n), {
                    image: n.image,
                    appids: n.appids,
                  });
              }
          }
          return (
            (e.prototype.GetSections = function () {
              return this.m_rgSections;
            }),
            (e.prototype.BHasCategoryImage = function (e) {
              return this.m_mapImageForHub.has(this.GetCategoryKey(e));
            }),
            (e.prototype.GetCategoryImage = function (e) {
              var t;
              return null ===
                (t = this.m_mapImageForHub.get(this.GetCategoryKey(e))) ||
                void 0 === t
                ? void 0
                : t.image;
            }),
            (e.prototype.LoadCategoryImages = function (e, t) {
              return Object(r.b)(this, void 0, void 0, function () {
                var a,
                  n,
                  o,
                  i,
                  s,
                  c = this;
                return Object(r.e)(this, function (r) {
                  if (
                    e.some(function (e) {
                      return !c.BHasCategoryImage(e);
                    }) &&
                    e.some(function (e) {
                      return !c.m_mapPromiseForHub.has(c.GetCategoryKey(e));
                    })
                  )
                    for (
                      a = e.filter(function (e) {
                        return !c.BHasCategoryImage(e);
                      }),
                        n = this.InternalLoadCategoryImage(a, t),
                        o = 0,
                        i = a;
                      o < i.length;
                      o++
                    )
                      (s = i[o]),
                        this.m_mapPromiseForHub.set(this.GetCategoryKey(s), n);
                  return [
                    2,
                    Promise.all(
                      e.map(function (e) {
                        return c.m_mapPromiseForHub.get(c.GetCategoryKey(e));
                      })
                    ),
                  ];
                });
              });
            }),
            (e.prototype.InternalLoadCategoryImage = function (e, t) {
              var a;
              return Object(r.b)(this, void 0, void 0, function () {
                var n,
                  o,
                  i,
                  s,
                  c,
                  u,
                  g,
                  m,
                  l,
                  p,
                  f,
                  d = this;
                return Object(r.e)(this, function (r) {
                  switch (r.label) {
                    case 0:
                      if (!e || 0 === e.length) return [2];
                      if (
                        ((n = e.filter(function (e) {
                          return !d.BHasCategoryImage(e);
                        })),
                        (o = this.BShouldDedupeCategoryImages(e)),
                        (i = this.GetAppIDsShownOnCategories(e)),
                        !n || 0 === n.length)
                      )
                        return [2];
                      (s = n.map(function (e) {
                        return e.hub;
                      })),
                        (c =
                          y.d.STORE_BASE_URL +
                          "contenthub/ajaxgetcategoryimages"),
                        (u = {
                          hubs: JSON.stringify(s),
                          dedupe: o,
                          appids_shown: JSON.stringify(i),
                          nocache: !t,
                        }),
                        (r.label = 1);
                    case 1:
                      return (
                        r.trys.push([1, 3, , 4]),
                        [4, v.a.get(c, { params: u, withCredentials: !0 })]
                      );
                    case 2:
                      if (
                        ((g = r.sent()),
                        1 ===
                          (null === (a = null == g ? void 0 : g.data) ||
                          void 0 === a
                            ? void 0
                            : a.success))
                      )
                        for (
                          m = 0, l = Object.keys(g.data.images);
                          m < l.length;
                          m++
                        )
                          (p = l[m]),
                            this.m_mapImageForHub.set(p, g.data.images[p]);
                      else
                        console.error(
                          "ajaxgetcategoryimages failed with error: ",
                          g
                        );
                      return [3, 4];
                    case 3:
                      return (
                        (f = r.sent()),
                        console.error(
                          "ajaxgetcategoryimages failed with exception: ",
                          f
                        ),
                        [3, 4]
                      );
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.BShouldDedupeCategoryImages = function (e) {
              return e.some(function (e) {
                return e.is_toplevel_genre;
              });
            }),
            (e.prototype.GetAppIDsShownOnCategories = function (e) {
              for (var t = new Set(), a = 0, r = e; a < r.length; a++) {
                var n = r[a];
                if (n.appids)
                  for (var o = 0, i = n.appids; o < i.length; o++) {
                    var s = i[o];
                    t.add(s);
                  }
              }
              return Array.from(t);
            }),
            (e.prototype.GetCategoryKey = function (e) {
              var t, a, r;
              return (
                (null === (t = e.hub) || void 0 === t ? void 0 : t.type) +
                "_" +
                ((null === (a = e.hub) || void 0 === a ? void 0 : a.category) ||
                  "") +
                "_" +
                ((null === (r = e.hub) || void 0 === r ? void 0 : r.tagid) ||
                  "")
              );
            }),
            (e.Get = function () {
              return e.s_singleton || (e.s_singleton = new e()), e.s_singleton;
            }),
            e
          );
        })();
      function b(e) {
        var t = e.section;
        e.autoFocus,
          (function (e) {
            var t = _.Get(),
              a = Object(C.d)("nocache", !1)[0],
              r = Object(o.useState)(
                e.some(function (e) {
                  return !t.BHasCategoryImage(e);
                })
              ),
              n = r[0],
              i = r[1];
            return (
              Object(o.useEffect)(
                function () {
                  n &&
                    t.LoadCategoryImages(e, !a).then(function () {
                      i(!1);
                    });
                },
                [n, a, e, t]
              ),
              { bLoading: n }
            );
          })(t.categories).bLoading;
        return i.a.createElement(
          "div",
          { className: d.CategorySection },
          i.a.createElement(
            "span",
            { className: d.CategorySectionName },
            t.name
          ),
          i.a.createElement(
            g.a,
            {
              className: d.CategoriesCtn,
              scrollDirection: "x",
              navEntryPreferPosition: m.c.MAINTAIN_X,
            },
            t.categories.map(function (t, a) {
              return i.a.createElement(I, {
                key: "category" + t.name,
                category: t,
                autoFocus: e.autoFocus && 0 === a,
              });
            })
          )
        );
      }
      function I(e) {
        var t,
          a = e.category;
        return i.a.createElement(
          u.a,
          { focusableIfNoChildren: !0, autoFocus: e.autoFocus },
          i.a.createElement(
            l.a,
            {
              placeholderWidth: "110px",
              placeholderHeight: "150px",
              bHorizontal: !0,
            },
            i.a.createElement(
              s.c,
              {
                href: y.d.STORE_BASE_URL + a.url,
                className: Object(f.a)(
                  ((t = {}),
                  (t[d.Category] = !0),
                  (t[d.TopLevelCategory] = a.is_toplevel_genre),
                  t)
                ),
              },
              i.a.createElement(
                "span",
                { className: d.CategoryName },
                i.a.createElement("span", null, a.name)
              ),
              i.a.createElement(E, Object(r.a)({}, e))
            )
          )
        );
      }
      function E(e) {
        var t = e.category;
        if (!_.Get().BHasCategoryImage(t))
          return i.a.createElement(p.a, { size: "small", position: "center" });
        var a = _.Get().GetCategoryImage(t);
        return a
          ? i.a.createElement(
              "div",
              { className: d.GridOuter },
              i.a.createElement(
                "div",
                { className: d.Grid },
                i.a.createElement("img", { src: "data:image/png;base64," + a })
              )
            )
          : null;
      }
      t.default = function () {
        var e = (function () {
            var e = _.Get(),
              t = Object(o.useState)(e.GetSections()),
              a = t[0];
            return t[1], { sections: a };
          })().sections,
          t = Object(n.a)(),
          a = i.a.useRef();
        return (
          i.a.useEffect(function () {
            var e;
            return null === (e = a.current) || void 0 === e
              ? void 0
              : e.Activate(!0);
          }, []),
          i.a.createElement(
            c.a,
            { navID: "CategoriesApp", NavigationManager: t, navTreeRef: a },
            i.a.createElement(
              "div",
              { className: d.CategorySectionsCtn },
              e.map(function (e, t) {
                return i.a.createElement(b, {
                  key: "section" + e.name,
                  section: e,
                  autoFocus: 0 == t,
                });
              })
            )
          )
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
    "ykc/": function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return g;
      });
      var r = a("mrSG"),
        n = a("q1tI"),
        o = a.n(n),
        i = a("av+R"),
        s = a("yLGM"),
        c = a("opsS"),
        u = a("lkRc");
      function g(e) {
        var t = e.children,
          a = e.navTreeRef,
          n = Object(r.f)(e, ["children", "navTreeRef"]),
          g = o.a.useRef(),
          m = Object(c.f)(g, a);
        if (u.d.IN_GAMEPADUI) {
          var l = window.__nav_tree_root;
          return o.a.createElement(
            i.b,
            Object(r.a)({}, n, {
              navTreeRef: m,
              secondary: !0,
              parentEmbeddedNavTree: l,
            }),
            o.a.createElement(s.a, null, t)
          );
        }
        return o.a.createElement(o.a.Fragment, null, t);
      }
    },
  },
]);
