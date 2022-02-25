/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    OVk1: function (e, t, a) {
      "use strict";
      a.r(t);
      var o = a("hwrv"),
        r = a("q1tI"),
        n = a.n(r),
        s = a("av+R"),
        i = a("ykc/"),
        c = a("qDk6"),
        g = a("Jz9t"),
        m = a("j+5p"),
        u = (a("kKgT"), a("MnIK")),
        l = a("0OaU"),
        d = a("exH9"),
        p = a("lkRc"),
        y = a("jIbu"),
        h = a("mrSG"),
        f = a("vDqi"),
        C = a.n(f),
        _ = (a("mgoM"), a("kyHq"), a("3+zv"), a("GiuM"));
      class v {
        constructor() {
          (this.m_mapImageForHub = new Map()),
            (this.m_mapPromiseForHub = new Map()),
            (this.m_rgSections = Object(p.h)(
              "categories",
              "application_config"
            ));
          for (const e of this.m_rgSections)
            for (const t of e.categories)
              t.image &&
                this.m_mapImageForHub.set(this.GetCategoryKey(t), {
                  image: t.image,
                  appids: t.appids,
                });
        }
        GetSections() {
          return this.m_rgSections;
        }
        BHasCategoryImage(e) {
          return this.m_mapImageForHub.has(this.GetCategoryKey(e));
        }
        GetCategoryImage(e) {
          var t;
          return null ===
            (t = this.m_mapImageForHub.get(this.GetCategoryKey(e))) ||
            void 0 === t
            ? void 0
            : t.image;
        }
        LoadCategoryImagesForSection(e, t) {
          return Object(h.a)(this, void 0, void 0, function* () {
            const a = this.BShouldDedupeCategoryImages(e.categories);
            let o = e.categories;
            (o = o.filter((e) => !this.BHasCategoryImage(e))),
              (o = o.filter(
                (e) => !this.m_mapPromiseForHub.has(this.GetCategoryKey(e))
              ));
            const r = Math.ceil(o.length / 2),
              n = [];
            for (let e = 0; e < r; e++) {
              const e = o.splice(0, 2);
              n.push(e);
            }
            if (a) {
              let a = Promise.resolve(null);
              for (const o of n) {
                const r = a.then(() =>
                  this.InternalLoadCategoryImage(e.categories, o, t)
                );
                for (const e of o)
                  this.m_mapPromiseForHub.set(this.GetCategoryKey(e), r);
                a = r;
              }
            } else
              for (const a of n) {
                const o = this.InternalLoadCategoryImage(e.categories, a, t);
                for (const e of a)
                  this.m_mapPromiseForHub.set(this.GetCategoryKey(e), o);
              }
          });
        }
        GetCategoryImagePromise(e) {
          return this.m_mapPromiseForHub.get(this.GetCategoryKey(e));
        }
        InternalLoadCategoryImage(e, t, a) {
          var o;
          return Object(h.a)(this, void 0, void 0, function* () {
            if (!e || 0 === e.length) return;
            if (!t || 0 === t.length) return;
            const r = this.BShouldDedupeCategoryImages(e),
              n = this.GetAppIDsShownOnCategories(e);
            n.sort();
            const s = t.map((e) => e.hub),
              i = p.d.STORE_BASE_URL + "contenthub/ajaxgetcategoryimages",
              c = {
                cc: p.d.COUNTRY || "US",
                l: p.d.LANGUAGE,
                origin: self.origin,
                hubs: JSON.stringify(s),
                dedupe: r,
                appids_shown: JSON.stringify(n),
                nocache: !a || void 0,
              };
            try {
              const e = yield C.a.get(i, { params: c, withCredentials: !0 });
              if (
                1 ===
                (null === (o = null == e ? void 0 : e.data) || void 0 === o
                  ? void 0
                  : o.success)
              )
                for (const t of Object.keys(e.data.images))
                  this.m_mapImageForHub.set(t, e.data.images[t]);
              else
                console.error("ajaxgetcategoryimages failed with error: ", e);
            } catch (e) {
              console.error("ajaxgetcategoryimages failed with exception: ", e);
            }
          });
        }
        BShouldDedupeCategoryImages(e) {
          return e.some((e) => e.is_toplevel_genre);
        }
        GetAppIDsShownOnCategories(e) {
          const t = new Set();
          for (const a of e) {
            const e = this.GetCategoryKey(a);
            if (this.m_mapImageForHub.has(e))
              for (const a of this.m_mapImageForHub.get(e).appids)
                t.add(Number(a));
          }
          return Array.from(t);
        }
        GetCategoryKey(e) {
          var t, a, o;
          return (
            (null === (t = e.hub) || void 0 === t ? void 0 : t.type) +
            "_" +
            ((null === (a = e.hub) || void 0 === a ? void 0 : a.category) ||
              "") +
            "_" +
            ((null === (o = e.hub) || void 0 === o ? void 0 : o.tagid) || "")
          );
        }
        static Get() {
          return v.s_singleton || (v.s_singleton = new v()), v.s_singleton;
        }
      }
      function b(e) {
        const { section: t, autoFocus: a } = e;
        return (
          (function (e) {
            const t = v.Get(),
              [a] = Object(_.d)("nocache", !1);
            t.LoadCategoryImagesForSection(e, !a);
          })(t),
          n.a.createElement(
            u.a,
            { placeholderHeight: "150px" },
            n.a.createElement(
              "div",
              { className: y.CategorySection },
              n.a.createElement(
                "span",
                { className: y.CategorySectionName },
                t.name
              ),
              n.a.createElement(
                g.a,
                {
                  className: y.CategoriesCtn,
                  scrollDirection: "x",
                  navEntryPreferPosition: m.d.MAINTAIN_X,
                },
                t.categories.map((t, a) =>
                  n.a.createElement(I, {
                    key: "category" + t.name,
                    category: t,
                    autoFocus: e.autoFocus && 0 === a,
                  })
                )
              )
            )
          )
        );
      }
      function I(e) {
        const { category: t } = e;
        return n.a.createElement(
          c.a,
          { focusableIfNoChildren: !0, autoFocus: e.autoFocus },
          n.a.createElement(
            s.c,
            {
              href: p.d.STORE_BASE_URL + t.url,
              className: Object(d.a)({
                [y.Category]: !0,
                [y.TopLevelCategory]: t.is_toplevel_genre,
              }),
            },
            n.a.createElement(
              "span",
              { className: y.CategoryName },
              n.a.createElement("span", null, t.name)
            ),
            n.a.createElement(G, Object.assign({}, e))
          )
        );
      }
      function G(e) {
        let { category: t } = e;
        const { bLoading: a, strImage: o } = (function (e) {
          const t = v.Get(),
            [a, o] = Object(r.useState)(!t.BHasCategoryImage(e)),
            n = t.GetCategoryImage(e);
          return (
            Object(r.useEffect)(() => {
              t.GetCategoryImagePromise(e).then(() => {
                o(!1);
              });
            }, [e, t]),
            { bLoading: a, strImage: n }
          );
        })(t);
        return a
          ? n.a.createElement(l.a, { size: "small", position: "center" })
          : o
          ? n.a.createElement(
              "div",
              { className: y.GridOuter },
              n.a.createElement(
                "div",
                { className: y.Grid },
                n.a.createElement("img", { src: `data:image/png;base64,${o}` })
              )
            )
          : null;
      }
      t.default = function () {
        const { sections: e } = (function () {
            const e = v.Get(),
              [t, a] = Object(r.useState)(e.GetSections());
            return { sections: t };
          })(),
          t = Object(o.a)(),
          a = n.a.useRef();
        return (
          n.a.useEffect(() => {
            var e;
            return null === (e = a.current) || void 0 === e
              ? void 0
              : e.Activate(!0);
          }, []),
          n.a.createElement(
            i.a,
            { navID: "CategoriesApp", NavigationManager: t, navTreeRef: a },
            n.a.createElement(
              "div",
              { className: y.CategorySectionsCtn },
              e.map((e, t) =>
                n.a.createElement(b, {
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
        return m;
      });
      var o = a("mrSG"),
        r = a("q1tI"),
        n = a.n(r),
        s = a("av+R"),
        i = a("yLGM"),
        c = a("opsS"),
        g = a("lkRc");
      function m(e) {
        const { children: t, navTreeRef: a } = e,
          r = Object(o.c)(e, ["children", "navTreeRef"]),
          m = n.a.useRef(),
          u = Object(c.f)(m, a);
        if (g.d.IN_GAMEPADUI) {
          const e = window.__nav_tree_root;
          return n.a.createElement(
            s.b,
            Object.assign({}, r, {
              navTreeRef: u,
              secondary: !0,
              parentEmbeddedNavTree: e,
            }),
            n.a.createElement(i.a, null, t)
          );
        }
        return n.a.createElement(n.a.Fragment, null, t);
      }
    },
  },
]);
