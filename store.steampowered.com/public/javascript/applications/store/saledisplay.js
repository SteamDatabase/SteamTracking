/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [93],
  {
    "21NE": function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "default", function () {
          return v;
        });
      var n = a("q1tI"),
        r = a.n(n),
        o = (a("msu0"), a("lo3/")),
        c = a("XrGS"),
        i = a("oleE"),
        s = a("Sn0s"),
        u = a("KVor"),
        l = a("C1a2"),
        m = a("uZKR"),
        g = a("KSg0"),
        E = a.n(g),
        d = a("kWcV"),
        f = a("GXif"),
        _ = a("/Q1a"),
        p = a("rkHy");
      function v(e) {
        return r.a.createElement(
          p.a,
          null,
          r.a.createElement(I, Object.assign({}, e))
        );
      }
      function I(e) {
        const { promotionName: t, language: a } = e,
          [n, g] = r.a.useState(
            u.b.GetClanEventFromAnnouncementGID(_.e.ANNOUNCEMENT_GID)
          ),
          p = Object(s.a)();
        if (
          (r.a.useEffect(() => {
            if (
              (null == n ? void 0 : n.AnnouncementGID) != _.e.ANNOUNCEMENT_GID
            ) {
              const e = new i.a(_.c.CLANSTEAMID);
              u.b
                .LoadPartnerEventFromAnnoucementGIDAndClanSteamID(
                  e,
                  _.e.ANNOUNCEMENT_GID,
                  null
                )
                .then(g);
            }
            Object(l.a)(null);
          }, [n]),
          !n)
        )
          return r.a.createElement(
            "div",
            { className: E.a.FlexCenter, style: { height: "500px" } },
            r.a.createElement(d.a, {
              size: "medium",
              string: Object(f.f)("#Loading"),
            })
          );
        const v = n.visibility_state !== c.j.k_EEventStateVisible;
        return r.a.createElement(
          o.a,
          { navID: "StoreSalePageRoot", NavigationManager: p },
          r.a.createElement(m.b, {
            promotionName: t,
            language: a,
            eventModel: n,
            bIsPreview: v,
          })
        );
      }
    },
    C1a2: function (e, t, a) {
      "use strict";
      a.d(t, "c", function () {
        return m;
      }),
        a.d(t, "a", function () {
          return g;
        }),
        a.d(t, "b", function () {
          return E;
        });
      var n = a("mrSG"),
        r = a("/cMS"),
        o = a("q1tI"),
        c = a("rmVU"),
        i = a("Ys0h"),
        s = a("2VXD"),
        u = a("f5iL"),
        l = a("/Q1a");
      function m() {
        const e = Object(s.a)("usePartnerStoreBrowseAPI"),
          [t, a] = Object(o.useState)(!1);
        return (
          Object(o.useEffect)(() => {
            (function (e = !1) {
              return Object(n.a)(this, void 0, void 0, function* () {
                if (e && i.a.BIsInitialized()) return;
                const t = Object(l.h)(
                  "partnerbrowse_webapi_token",
                  "application_config"
                );
                Object(u.a)(Boolean(t), "require partnerbrowse_webapi_token");
                const a = new c.a(l.d.WEBAPI_BASE_URL, t);
                return (
                  ("dev" != l.d.WEB_UNIVERSE && "beta" != l.d.WEB_UNIVERSE) ||
                    console.log(
                      "DEV_DEBUG: Initializing CStoreItemCache with access token",
                      t
                    ),
                  g(t),
                  i.a.Initialize(a, l.k.is_partner_member)
                );
              });
            })().then(() => {
              var t;
              (null === (t = null == e ? void 0 : e.token) || void 0 === t
                ? void 0
                : t.reason) || a(!0);
            });
          }, []),
          t
        );
      }
      function g(e) {
        r.a.BIsInitialized() || r.a.Initialize(new c.a(l.d.WEBAPI_BASE_URL, e));
      }
      function E(e) {
        return r.a.BIsInitialized() || g(e || null), !0;
      }
    },
    OVk1: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a("q1tI"),
        r = a.n(n),
        o = a("fsrB"),
        c = a("lo3/"),
        i = a("Lsvi"),
        s = a("jWvk"),
        u = a("O8Yk"),
        l = (a("ROh0"), a("Sn0s")),
        m = a("/HXi"),
        g = a("GbHM"),
        E = a("/Q1a"),
        d = a("jIbu");
      a("XrGS");
      class f {
        constructor() {
          this.m_rgSections = Object(E.h)("categories", "application_config");
        }
        GetSections() {
          return this.m_rgSections;
        }
        static Get() {
          return f.s_singleton || (f.s_singleton = new f()), f.s_singleton;
        }
      }
      function _(e) {
        const { section: t, autoFocus: a } = e;
        return r.a.createElement(
          m.a,
          { placeholderHeight: "150px" },
          r.a.createElement(
            "div",
            { className: d.CategorySection },
            r.a.createElement(
              "span",
              { className: d.CategorySectionName },
              t.name
            ),
            r.a.createElement(
              s.a,
              {
                className: d.CategoriesCtn,
                scrollDirection: "x",
                navEntryPreferPosition: u.d.MAINTAIN_X,
              },
              t.categories.map((t, a) =>
                r.a.createElement(p, {
                  key: "category" + t.name,
                  category: t,
                  autoFocus: e.autoFocus && 0 === a,
                })
              )
            )
          )
        );
      }
      function p(e) {
        const { category: t } = e;
        return r.a.createElement(
          i.a,
          { focusableIfNoChildren: !0, autoFocus: e.autoFocus },
          r.a.createElement(
            o.c,
            {
              href: E.d.STORE_BASE_URL + t.url,
              className: Object(g.a)({
                [d.Category]: !0,
                [d.TopLevelCategory]: t.is_toplevel_genre,
              }),
            },
            r.a.createElement(
              "span",
              { className: d.CategoryName },
              r.a.createElement("span", null, t.name)
            ),
            r.a.createElement(v, Object.assign({}, e))
          )
        );
      }
      function v(e) {
        let { category: t } = e;
        return r.a.createElement(
          "div",
          { className: d.GridOuter },
          r.a.createElement(
            "div",
            { className: d.Grid },
            r.a.createElement("img", { src: E.d.STORE_BASE_URL + t.image_url })
          )
        );
      }
      t.default = function () {
        const { sections: e } = (function () {
            const e = f.Get(),
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
            c.a,
            { navID: "CategoriesApp", NavigationManager: t, navTreeRef: a },
            r.a.createElement(
              "div",
              { className: d.CategorySectionsCtn },
              e.map((e, t) =>
                r.a.createElement(_, {
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
        return l;
      });
      var n = a("mrSG"),
        r = a("q1tI"),
        o = a.n(r),
        c = a("fsrB"),
        i = a("ez+p"),
        s = a("hCpY"),
        u = a("/Q1a");
      function l(e) {
        const { children: t, navTreeRef: a } = e,
          r = Object(n.c)(e, ["children", "navTreeRef"]),
          l = o.a.useRef(),
          m = Object(s.g)(l, a);
        if (u.d.IN_GAMEPADUI) {
          const e = window.__nav_tree_root;
          return o.a.createElement(
            c.b,
            Object.assign({}, r, {
              navTreeRef: m,
              secondary: !0,
              parentEmbeddedNavTree: e,
            }),
            o.a.createElement(i.a, null, t)
          );
        }
        return o.a.createElement(o.a.Fragment, null, t);
      }
    },
    rkHy: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return g;
      });
      var n = a("wd/R"),
        r = a("q1tI"),
        o = a("rmVU"),
        c = a("FKEV"),
        i = a("AM5O"),
        s = a("KVor"),
        u = a("C1a2"),
        l = a("GXif"),
        m = a("/Q1a");
      function g(e) {
        const [t, a] = r.useState(i.a.IsInitialized());
        return (
          r.useEffect(() => {
            c.a.Init(new o.a(m.d.WEBAPI_BASE_URL)),
              s.b.Init(),
              i.a.InitGlobal().then(() => a(!0)),
              Object(u.a)(null);
          }, []),
          r.useEffect(() => {
            const e = Object(l.c)();
            e && n.locale(e);
          }, []),
          t ? e.children : null
        );
      }
    },
  },
]);
