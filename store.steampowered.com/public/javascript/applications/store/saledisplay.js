/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [100],
  {
    "21NE": function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "default", function () {
          return C;
        });
      var n = a("q1tI"),
        r = a.n(n),
        o = (a("msu0"), a("lo3/")),
        c = a("XrGS"),
        s = a("oleE"),
        i = a("Sn0s"),
        l = a("KVor"),
        u = a("C1a2"),
        m = a("uZKR"),
        g = a("KSg0"),
        E = a.n(g),
        p = a("kWcV"),
        _ = a("GXif"),
        d = a("/Q1a"),
        N = a("rkHy");
      function C(e) {
        return r.a.createElement(
          N.a,
          null,
          r.a.createElement(f, Object.assign({}, e))
        );
      }
      function f(e) {
        const { promotionName: t, language: a } = e,
          [n, g] = r.a.useState(
            l.b.GetClanEventFromAnnouncementGID(d.e.ANNOUNCEMENT_GID)
          ),
          N = Object(i.a)();
        if (
          (r.a.useEffect(() => {
            if (
              (null == n ? void 0 : n.AnnouncementGID) != d.e.ANNOUNCEMENT_GID
            ) {
              const e = new s.a(d.c.CLANSTEAMID);
              l.b
                .LoadPartnerEventFromAnnoucementGIDAndClanSteamID(
                  e,
                  d.e.ANNOUNCEMENT_GID,
                  null
                )
                .then(g);
            }
            Object(u.a)(null);
          }, [n]),
          !n)
        )
          return r.a.createElement(
            "div",
            { className: E.a.FlexCenter, style: { height: "500px" } },
            r.a.createElement(p.a, {
              size: "medium",
              string: Object(_.g)("#Loading"),
            })
          );
        const C = n.visibility_state !== c.j.k_EEventStateVisible;
        return r.a.createElement(
          o.a,
          { navID: "StoreSalePageRoot", NavigationManager: N },
          r.a.createElement(m.b, {
            promotionName: t,
            language: a,
            eventModel: n,
            bIsPreview: C,
          })
        );
      }
    },
    OVk1: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a("q1tI"),
        r = a.n(n),
        o = a("fsrB"),
        c = a("lo3/"),
        s = a("Lsvi"),
        i = a("jWvk"),
        l = a("O8Yk"),
        u = (a("ROh0"), a("Sn0s")),
        m = a("/HXi"),
        g = a("GbHM"),
        E = a("/Q1a"),
        p = a("jIbu");
      a("XrGS");
      class _ {
        constructor() {
          this.m_rgSections = Object(E.h)("categories", "application_config");
        }
        GetSections() {
          return this.m_rgSections;
        }
        static Get() {
          return _.s_singleton || (_.s_singleton = new _()), _.s_singleton;
        }
      }
      function d(e) {
        const { section: t, autoFocus: a } = e;
        return r.a.createElement(
          m.a,
          { placeholderHeight: "150px" },
          r.a.createElement(
            "div",
            { className: p.CategorySection },
            r.a.createElement(
              "span",
              { className: p.CategorySectionName },
              t.name
            ),
            r.a.createElement(
              i.a,
              {
                className: p.CategoriesCtn,
                scrollDirection: "x",
                navEntryPreferPosition: l.d.MAINTAIN_X,
              },
              t.categories.map((t, a) =>
                r.a.createElement(N, {
                  key: "category" + t.name,
                  category: t,
                  autoFocus: e.autoFocus && 0 === a,
                })
              )
            )
          )
        );
      }
      function N(e) {
        const { category: t } = e;
        return r.a.createElement(
          s.a,
          { focusableIfNoChildren: !0, autoFocus: e.autoFocus },
          r.a.createElement(
            o.c,
            {
              href: E.d.STORE_BASE_URL + t.url,
              className: Object(g.a)({
                [p.Category]: !0,
                [p.TopLevelCategory]: t.is_toplevel_genre,
              }),
            },
            r.a.createElement(
              "span",
              { className: p.CategoryName },
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
          { className: p.GridOuter },
          r.a.createElement(
            "div",
            { className: p.Grid },
            r.a.createElement("img", { src: E.d.STORE_BASE_URL + t.image_url })
          )
        );
      }
      t.default = function () {
        const { sections: e } = (function () {
            const e = _.Get(),
              [t, a] = Object(n.useState)(e.GetSections());
            return { sections: t };
          })(),
          t = Object(u.a)(),
          a = r.a.useRef();
        return (
          r.a.useEffect(() => {
            var e;
            return null === (e = a.current) || void 0 === e
              ? void 0
              : e.Activate(!0);
          }, []),
          r.a.createElement(
            c.a,
            { navID: "CategoriesApp", NavigationManager: t, navTreeRef: a },
            r.a.createElement(
              "div",
              { className: p.CategorySectionsCtn },
              e.map((e, t) =>
                r.a.createElement(d, {
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
        TopLevelCategory: "categoriesapp_TopLevelCategory_2ZYjR",
      };
    },
    "lo3/": function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return u;
      });
      var n = a("mrSG"),
        r = a("q1tI"),
        o = a.n(r),
        c = a("fsrB"),
        s = a("ez+p"),
        i = a("hCpY"),
        l = a("/Q1a");
      function u(e) {
        const { children: t, navTreeRef: a } = e,
          r = Object(n.c)(e, ["children", "navTreeRef"]),
          u = o.a.useRef(),
          m = Object(i.g)(u, a);
        if (l.d.IN_GAMEPADUI) {
          const e = window.__nav_tree_root;
          return o.a.createElement(
            c.b,
            Object.assign({}, r, {
              navTreeRef: m,
              secondary: !0,
              parentEmbeddedNavTree: e,
            }),
            o.a.createElement(s.a, null, t)
          );
        }
        return o.a.createElement(o.a.Fragment, null, t);
      }
    },
  },
]);
