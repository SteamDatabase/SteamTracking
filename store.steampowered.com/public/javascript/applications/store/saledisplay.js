/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [91],
  {
    "21NE": function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "default", function () {
          return v;
        });
      var a = n("q1tI"),
        r = n.n(a),
        c = (n("mgoM"), n("ykc/")),
        o = n("3+zv"),
        i = n("kLLr"),
        s = n("hwrv"),
        u = n("6oCP"),
        l = n("hKFG"),
        m = n("6AJf"),
        g = n("xnZ7"),
        E = n.n(g),
        d = n("0OaU"),
        f = n("TLQK"),
        _ = n("lkRc"),
        p = n("rkHy");
      function v(e) {
        return r.a.createElement(
          p.a,
          null,
          r.a.createElement(b, Object.assign({}, e))
        );
      }
      function b(e) {
        const { promotionName: t, language: n } = e,
          [a, g] = r.a.useState(
            u.b.GetClanEventFromAnnouncementGID(_.e.ANNOUNCEMENT_GID)
          ),
          p = Object(s.a)();
        if (
          (r.a.useEffect(() => {
            if (
              (null == a ? void 0 : a.AnnouncementGID) != _.e.ANNOUNCEMENT_GID
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
          }, [a]),
          !a)
        )
          return r.a.createElement(
            "div",
            { className: E.a.FlexCenter, style: { height: "500px" } },
            r.a.createElement(d.a, {
              size: "medium",
              string: Object(f.f)("#Loading"),
            })
          );
        const v = a.visibility_state !== o.j.k_EEventStateVisible;
        return r.a.createElement(
          c.a,
          { navID: "StoreSalePageRoot", NavigationManager: p },
          r.a.createElement(m.b, {
            promotionName: t,
            language: n,
            eventModel: a,
            bIsPreview: v,
          })
        );
      }
    },
    OVk1: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n("q1tI"),
        r = n.n(a),
        c = n("av+R"),
        o = n("ykc/"),
        i = n("qDk6"),
        s = n("Jz9t"),
        u = n("j+5p"),
        l = (n("kKgT"), n("hwrv")),
        m = n("MnIK"),
        g = n("exH9"),
        E = n("lkRc"),
        d = n("jIbu");
      n("3+zv");
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
        const { section: t, autoFocus: n } = e;
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
              t.categories.map((t, n) =>
                r.a.createElement(p, {
                  key: "category" + t.name,
                  category: t,
                  autoFocus: e.autoFocus && 0 === n,
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
            c.c,
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
              [t, n] = Object(a.useState)(e.GetSections());
            return { sections: t };
          })(),
          t = Object(l.a)(),
          n = r.a.useRef();
        return (
          r.a.useEffect(() => {
            var e;
            return null === (e = n.current) || void 0 === e
              ? void 0
              : e.Activate(!0);
          }, []),
          r.a.createElement(
            o.a,
            { navID: "CategoriesApp", NavigationManager: t, navTreeRef: n },
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
    hKFG: function (e, t, n) {
      "use strict";
      n.d(t, "c", function () {
        return m;
      }),
        n.d(t, "a", function () {
          return g;
        }),
        n.d(t, "b", function () {
          return E;
        });
      var a = n("mrSG"),
        r = n("iO5U"),
        c = n("q1tI"),
        o = n("WBba"),
        i = n("C4Nl"),
        s = n("X2UP"),
        u = n("r64O"),
        l = n("lkRc");
      function m() {
        const e = Object(s.a)("usePartnerStoreBrowseAPI"),
          [t, n] = Object(c.useState)(!1);
        return (
          Object(c.useEffect)(() => {
            (function (e = !1) {
              return Object(a.a)(this, void 0, void 0, function* () {
                if (e && i.a.BIsInitialized()) return;
                const t = Object(l.h)(
                  "partnerbrowse_webapi_token",
                  "application_config"
                );
                Object(u.a)(Boolean(t), "require partnerbrowse_webapi_token");
                const n = new o.a(l.d.WEBAPI_BASE_URL, t);
                return (
                  ("dev" != l.d.WEB_UNIVERSE && "beta" != l.d.WEB_UNIVERSE) ||
                    console.log(
                      "DEV_DEBUG: Initializing CStoreItemCache with access token",
                      t
                    ),
                  g(t),
                  i.a.Initialize(n, l.k.is_partner_member)
                );
              });
            })().then(() => {
              var t;
              (null === (t = null == e ? void 0 : e.token) || void 0 === t
                ? void 0
                : t.reason) || n(!0);
            });
          }, []),
          t
        );
      }
      function g(e) {
        r.a.BIsInitialized() || r.a.Initialize(new o.a(l.d.WEBAPI_BASE_URL, e));
      }
      function E(e) {
        return r.a.BIsInitialized() || g(e || null), !0;
      }
    },
    jIbu: function (e, t, n) {
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
    rkHy: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return g;
      });
      var a = n("wd/R"),
        r = n("q1tI"),
        c = n("WBba"),
        o = n("qD+2"),
        i = n("9w6b"),
        s = n("6oCP"),
        u = n("hKFG"),
        l = n("TLQK"),
        m = n("lkRc");
      function g(e) {
        const [t, n] = r.useState(i.a.IsInitialized());
        return (
          r.useEffect(() => {
            o.a.Init(new c.a(m.d.WEBAPI_BASE_URL)),
              s.b.Init(),
              i.a.InitGlobal().then(() => n(!0)),
              Object(u.a)(null);
          }, []),
          r.useEffect(() => {
            const e = Object(l.c)();
            e && a.locale(e);
          }, []),
          t ? e.children : null
        );
      }
    },
    "ykc/": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return l;
      });
      var a = n("mrSG"),
        r = n("q1tI"),
        c = n.n(r),
        o = n("av+R"),
        i = n("yLGM"),
        s = n("opsS"),
        u = n("lkRc");
      function l(e) {
        const { children: t, navTreeRef: n } = e,
          r = Object(a.c)(e, ["children", "navTreeRef"]),
          l = c.a.useRef(),
          m = Object(s.g)(l, n);
        if (u.d.IN_GAMEPADUI) {
          const e = window.__nav_tree_root;
          return c.a.createElement(
            o.b,
            Object.assign({}, r, {
              navTreeRef: m,
              secondary: !0,
              parentEmbeddedNavTree: e,
            }),
            c.a.createElement(i.a, null, t)
          );
        }
        return c.a.createElement(c.a.Fragment, null, t);
      }
    },
  },
]);
