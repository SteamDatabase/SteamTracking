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
        c = a("av+R"),
        o = a("ykc/"),
        s = a("qDk6"),
        i = a("Jz9t"),
        u = a("j+5p"),
        l = (a("kKgT"), a("hwrv")),
        g = a("MnIK"),
        m = a("exH9"),
        p = a("lkRc"),
        _ = a("jIbu");
      a("3+zv");
      class d {
        constructor() {
          this.m_rgSections = Object(p.h)("categories", "application_config");
        }
        GetSections() {
          return this.m_rgSections;
        }
        static Get() {
          return d.s_singleton || (d.s_singleton = new d()), d.s_singleton;
        }
      }
      function y(e) {
        const { section: t, autoFocus: a } = e;
        return r.a.createElement(
          g.a,
          { placeholderHeight: "150px" },
          r.a.createElement(
            "div",
            { className: _.CategorySection },
            r.a.createElement(
              "span",
              { className: _.CategorySectionName },
              t.name
            ),
            r.a.createElement(
              i.a,
              {
                className: _.CategoriesCtn,
                scrollDirection: "x",
                navEntryPreferPosition: u.d.MAINTAIN_X,
              },
              t.categories.map((t, a) =>
                r.a.createElement(E, {
                  key: "category" + t.name,
                  category: t,
                  autoFocus: e.autoFocus && 0 === a,
                })
              )
            )
          )
        );
      }
      function E(e) {
        const { category: t } = e;
        return r.a.createElement(
          s.a,
          { focusableIfNoChildren: !0, autoFocus: e.autoFocus },
          r.a.createElement(
            c.c,
            {
              href: p.d.STORE_BASE_URL + t.url,
              className: Object(m.a)({
                [_.Category]: !0,
                [_.TopLevelCategory]: t.is_toplevel_genre,
              }),
            },
            r.a.createElement(
              "span",
              { className: _.CategoryName },
              r.a.createElement("span", null, t.name)
            ),
            r.a.createElement(C, Object.assign({}, e))
          )
        );
      }
      function C(e) {
        let { category: t } = e;
        return r.a.createElement(
          "div",
          { className: _.GridOuter },
          r.a.createElement(
            "div",
            { className: _.Grid },
            r.a.createElement("img", { src: p.d.STORE_BASE_URL + t.image_url })
          )
        );
      }
      t.default = function () {
        const { sections: e } = (function () {
            const e = d.Get(),
              [t, a] = Object(n.useState)(e.GetSections());
            return { sections: t };
          })(),
          t = Object(l.a)(),
          a = r.a.useRef();
        return (
          r.a.useEffect(() => {
            var e;
            return null === (e = a.current) || void 0 === e
              ? void 0
              : e.Activate(!0);
          }, []),
          r.a.createElement(
            o.a,
            { navID: "CategoriesApp", NavigationManager: t, navTreeRef: a },
            r.a.createElement(
              "div",
              { className: _.CategorySectionsCtn },
              e.map((e, t) =>
                r.a.createElement(y, {
                  key: "section" + e.name,
                  section: e,
                  autoFocus: 0 == t,
                })
              )
            )
          )
        );
      };
    },
    jIbu: function (e, t, a) {
      e.exports = {
        "duration-app-launch": "800ms",
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
        return l;
      });
      var n = a("mrSG"),
        r = a("q1tI"),
        c = a.n(r),
        o = a("av+R"),
        s = a("yLGM"),
        i = a("opsS"),
        u = a("lkRc");
      function l(e) {
        const { children: t, navTreeRef: a } = e,
          r = Object(n.c)(e, ["children", "navTreeRef"]),
          l = c.a.useRef(),
          g = Object(i.g)(l, a);
        if (u.d.IN_GAMEPADUI) {
          const e = window.__nav_tree_root;
          return c.a.createElement(
            o.b,
            Object.assign({}, r, {
              navTreeRef: g,
              secondary: !0,
              parentEmbeddedNavTree: e,
            }),
            c.a.createElement(s.a, null, t)
          );
        }
        return c.a.createElement(c.a.Fragment, null, t);
      }
    },
  },
]);
