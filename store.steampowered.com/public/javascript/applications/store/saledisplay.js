/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [680],
  {
    66472: (e) => {
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
    34425: (e, t, n) => {
      "use strict";
      n.d(t, { p: () => l });
      var a = n(70655),
        r = n(67294),
        o = n(7707),
        c = n(27745),
        s = n(64839),
        i = n(90666);
      function l(e) {
        const { children: t, navTreeRef: n } = e,
          l = (0, a._T)(e, ["children", "navTreeRef"]),
          u = r.useRef(),
          m = (0, s.BE)(u, n);
        if (i.De.IN_GAMEPADUI) {
          const e = window.__nav_tree_root;
          return r.createElement(
            o.Fe,
            Object.assign({}, l, {
              navTreeRef: m,
              secondary: !0,
              parentEmbeddedNavTree: e,
            }),
            r.createElement(c.O, null, t)
          );
        }
        return r.createElement(r.Fragment, null, t);
      }
    },
    31970: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => d });
      var a = n(67294),
        r = n(7707),
        o = n(34425),
        c = n(35921),
        s = n(88272),
        i = n(39746),
        l = (n(12505), n(71174)),
        u = n(15396),
        m = n(7573),
        g = n(90666),
        E = n(66472);
      n(37662);
      class p {
        constructor() {
          this.m_rgSections = (0, g.kQ)("categories", "application_config");
        }
        GetSections() {
          return this.m_rgSections;
        }
        static Get() {
          return p.s_singleton || (p.s_singleton = new p()), p.s_singleton;
        }
      }
      function _(e) {
        const { section: t, autoFocus: n } = e;
        return a.createElement(
          u.Y,
          { placeholderHeight: "150px" },
          a.createElement(
            "div",
            { className: E.CategorySection },
            a.createElement(
              "span",
              { className: E.CategorySectionName },
              t.name
            ),
            a.createElement(
              s.P8,
              {
                className: E.CategoriesCtn,
                scrollDirection: "x",
                navEntryPreferPosition: i.c4.MAINTAIN_X,
              },
              t.categories.map((t, n) =>
                a.createElement(C, {
                  key: "category" + t.name,
                  category: t,
                  autoFocus: e.autoFocus && 0 === n,
                })
              )
            )
          )
        );
      }
      function C(e) {
        const { category: t } = e;
        return a.createElement(
          c.s,
          { focusableIfNoChildren: !0, autoFocus: e.autoFocus },
          a.createElement(
            r.IS,
            {
              href: g.De.STORE_BASE_URL + t.url,
              className: (0, m.Z)({
                [E.Category]: !0,
                [E.TopLevelCategory]: t.is_toplevel_genre,
              }),
            },
            a.createElement(
              "span",
              { className: E.CategoryName },
              a.createElement("span", null, t.name)
            ),
            a.createElement(N, Object.assign({}, e))
          )
        );
      }
      function N(e) {
        let { category: t } = e;
        return a.createElement(
          "div",
          { className: E.GridOuter },
          a.createElement(
            "div",
            { className: E.Grid },
            a.createElement("img", { src: g.De.STORE_BASE_URL + t.image_url })
          )
        );
      }
      const d = function () {
        const { sections: e } = (function () {
            const e = p.Get(),
              [t, n] = (0, a.useState)(e.GetSections());
            return { sections: t };
          })(),
          t = (0, l.L)(),
          n = a.useRef();
        return (
          a.useEffect(() => {
            var e;
            return null === (e = n.current) || void 0 === e
              ? void 0
              : e.Activate(!0);
          }, []),
          a.createElement(
            o.p,
            { navID: "CategoriesApp", NavigationManager: t, navTreeRef: n },
            a.createElement(
              "div",
              { className: E.CategorySectionsCtn },
              e.map((e, t) =>
                a.createElement(_, {
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
    41135: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => N });
      var a = n(67294),
        r = (n(26149), n(34425)),
        o = n(37662),
        c = n(3389),
        s = n(71174),
        i = n(7200),
        l = n(27991),
        u = n(21929),
        m = n(69491),
        g = n.n(m),
        E = n(13596),
        p = n(41311),
        _ = n(90666),
        C = n(54086);
      function N(e) {
        return a.createElement(
          C.n,
          { bSalePage: !0 },
          a.createElement(d, Object.assign({}, e))
        );
      }
      function d(e) {
        const { promotionName: t, language: n } = e,
          [m, C] = a.useState(
            i.j1.GetClanEventFromAnnouncementGID(_.Wj.ANNOUNCEMENT_GID)
          ),
          N = (0, s.L)();
        if (
          (a.useEffect(() => {
            if (
              (null == m ? void 0 : m.AnnouncementGID) != _.Wj.ANNOUNCEMENT_GID
            ) {
              const e = new c.K(_.JA.CLANSTEAMID);
              i.j1
                .LoadPartnerEventFromAnnoucementGIDAndClanSteamID(
                  e,
                  _.Wj.ANNOUNCEMENT_GID,
                  null
                )
                .then(C);
            }
            (0, l.nf)(null);
          }, [m]),
          !m)
        )
          return a.createElement(
            "div",
            { className: g().FlexCenter, style: { height: "500px" } },
            a.createElement(E.V, {
              size: "medium",
              string: (0, p.Xx)("#Loading"),
            })
          );
        const d = m.visibility_state !== o.ac.k_EEventStateVisible;
        return a.createElement(
          r.p,
          { navID: "StoreSalePageRoot", NavigationManager: N },
          a.createElement(u.o, {
            promotionName: t,
            language: n,
            eventModel: m,
            bIsPreview: d,
          })
        );
      }
    },
  },
]);
