/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [680],
  {
    87562: (e) => {
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
    66294: (e, t, n) => {
      "use strict";
      n.d(t, { p: () => l });
      var a = n(33940),
        r = n(89526),
        o = n(44026),
        s = n(17589),
        c = n(4306),
        i = n(32765),
        u = n(94952);
      function l(e) {
        const { children: t, navTreeRef: n } = e,
          l = (0, a._T)(e, ["children", "navTreeRef"]),
          g = r.useRef(),
          m = (0, c.BE)(g, n),
          d = (0, i.id)(),
          E = window.__virtual_keyboard_client;
        if (
          ((0, r.useEffect)(() => {
            u.Wz.SetHookFactory(() => E);
          }, [E]),
          d)
        ) {
          const e = window.__nav_tree_root;
          return r.createElement(
            o.Fe,
            Object.assign({}, l, {
              navTreeRef: m,
              secondary: !0,
              parentEmbeddedNavTree: e,
            }),
            r.createElement(s.O, null, t),
          );
        }
        return r.createElement(r.Fragment, null, t);
      }
    },
    64197: (e, t, n) => {
      "use strict";
      n.d(t, { g: () => l });
      var a = n(33940),
        r = n(89526),
        o = n(59934),
        s = (n(4306), n(60142)),
        c = n(51438),
        i = n(87458);
      const u = "FocusNavHistoryID";
      function l(e) {
        const { children: t, timeoutMS: n } = e,
          l = (0, a._T)(e, ["children", "timeoutMS"]),
          g = (function (e = 2) {
            const t = (0, o.k6)(),
              n = r.useRef(),
              a = (0, o.TH)(),
              c = (0, i.k0)(),
              l = a.state && a.state[u],
              g = r.useRef();
            return (
              r.useLayoutEffect(() => {
                if (!n.current) return;
                const e = n.current;
                return e
                  .Node()
                  .Tree.WindowContext.FocusChangedCallbacks.Register(
                    (n, a, r) => {
                      const o = t.location;
                      let i = o.state && o.state[u];
                      i ||
                        ((i = c
                          ? `State_${o.key}`
                          : `State_${e.Node().Tree.id}`),
                        (g.current = i),
                        t.replace(
                          Object.assign(Object.assign({}, t.location), {
                            state: Object.assign(Object.assign({}, o.state), {
                              [u]: i,
                            }),
                          }),
                        )),
                        g.current == i &&
                          (c
                            ? e.SaveState(i)
                            : window.history.replaceState(
                                Object.assign(
                                  Object.assign({}, window.history.state),
                                  { [i]: (0, s.Sp)(e.Node()) },
                                ),
                                null,
                              ));
                    },
                  ).Unregister;
              }, [t, c]),
              r.useLayoutEffect(() => {
                var t;
                if (n.current && g.current != l) {
                  const a = n.current.NavTree().DeferredFocus;
                  a.SuppressFocus();
                  const r = c
                      ? null
                      : null === (t = window.history.state) || void 0 === t
                      ? void 0
                      : t[l],
                    o = window.setTimeout(() => {
                      let e = !1;
                      c
                        ? (e = n.current.RestoreState(
                            l,
                            s.Vr.eRestoreFocusAlways,
                          ))
                        : r &&
                          ((0, s.$y)(
                            n.current.Node(),
                            r,
                            s.Vr.eRestoreFocusIfHadFocus,
                          ),
                          (e = !0)),
                        e ? a.Reset() : a.ExecuteQueuedFocus(),
                        (g.current = l);
                    }, e);
                  return () => {
                    window.clearTimeout(o), a.ExecuteQueuedFocus();
                  };
                }
              }, [l, t, c, e]),
              n
            );
          })(n);
        return r.createElement(
          c.s,
          Object.assign(Object.assign({}, l), { navRef: g }),
          t,
        );
      }
    },
    53805: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => y });
      var a = n(89526),
        r = n(44026),
        o = n(66294),
        s = n(51438),
        c = n(34329),
        i = n(16221),
        u = n(64197),
        l = n(83145),
        g = n(46294),
        m = n(19304),
        d = n(32765),
        E = n(87562);
      class p {
        GetSections() {
          return this.m_rgSections;
        }
        static Get() {
          return p.s_singleton || (p.s_singleton = new p()), p.s_singleton;
        }
        constructor() {
          this.m_rgSections = (0, d.kQ)("categories", "application_config");
        }
      }
      function _(e) {
        const { section: t, autoFocus: n } = e,
          r = (0, d.id)(),
          o = a.createElement(
            "div",
            { className: E.CategorySection },
            a.createElement(
              "span",
              { className: E.CategorySectionName },
              t.name,
            ),
            a.createElement(
              c.P8,
              {
                className: E.CategoriesCtn,
                scrollDirection: "x",
                navEntryPreferPosition: i.c4.MAINTAIN_X,
                navKey: "cat_section" + t.name,
              },
              t.categories.map((t, n) =>
                a.createElement(f, {
                  key: "category" + t.name,
                  category: t,
                  autoFocus: e.autoFocus && 0 === n,
                }),
              ),
            ),
          );
        return r ? o : a.createElement(g.Y, { placeholderHeight: "150px" }, o);
      }
      function f(e) {
        const { category: t } = e;
        return a.createElement(
          s.s,
          {
            focusableIfNoChildren: !0,
            autoFocus: e.autoFocus,
            navKey: "cat_panel" + t.name,
          },
          a.createElement(
            r.IS,
            {
              href: d.De.STORE_BASE_URL + t.url,
              className: (0, m.Z)({
                [E.Category]: !0,
                [E.TopLevelCategory]: t.is_toplevel_genre,
              }),
            },
            a.createElement(
              "span",
              { className: E.CategoryName },
              a.createElement("span", null, t.name),
            ),
            a.createElement(v, Object.assign({}, e)),
          ),
        );
      }
      function v(e) {
        let { category: t } = e;
        return a.createElement(
          "div",
          { className: E.GridOuter },
          a.createElement(
            "div",
            { className: E.Grid },
            a.createElement("img", { src: d.De.STORE_BASE_URL + t.image_url }),
          ),
        );
      }
      const y = function () {
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
              u.g,
              { timeoutMS: 1e3 },
              a.createElement(
                "div",
                { className: E.CategorySectionsCtn },
                e.map((e, t) =>
                  a.createElement(_, {
                    key: "section" + e.name,
                    section: e,
                    autoFocus: 0 == t,
                  }),
                ),
              ),
            ),
          )
        );
      };
    },
    11513: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => f });
      var a = n(89526),
        r = n(66294),
        o = n(64197),
        s = n(84770),
        c = n(47165),
        i = n(83145),
        u = n(10412),
        l = n(71983),
        g = n(35266),
        m = n.n(g),
        d = n(3301),
        E = n(14826),
        p = n(32765),
        _ = n(71752);
      function f(e) {
        return a.createElement(
          _.n,
          { bSalePage: !0 },
          a.createElement(v, Object.assign({}, e)),
        );
      }
      function v(e) {
        const { promotionName: t, language: n } = e,
          [g, _] = a.useState(
            u.j1.GetClanEventFromAnnouncementGID(p.Wj.ANNOUNCEMENT_GID),
          ),
          f = (0, i.L)();
        if (
          (a.useEffect(() => {
            if (
              (null == g ? void 0 : g.AnnouncementGID) != p.Wj.ANNOUNCEMENT_GID
            ) {
              const e = new c.K(p.JA.CLANSTEAMID);
              u.j1
                .LoadPartnerEventFromAnnoucementGIDAndClanSteamID(
                  e,
                  p.Wj.ANNOUNCEMENT_GID,
                  null,
                )
                .then(_);
            }
          }, [g]),
          !g)
        )
          return a.createElement(
            "div",
            { className: m().FlexCenter, style: { height: "500px" } },
            a.createElement(d.V, {
              size: "medium",
              string: (0, E.Xx)("#Loading"),
            }),
          );
        const v = g.visibility_state !== s.ac.k_EEventStateVisible;
        return a.createElement(
          r.p,
          { navID: "StoreSalePageRoot", NavigationManager: f },
          a.createElement(
            o.g,
            { timeoutMS: 1e3 },
            a.createElement(l.oS, {
              promotionName: t,
              language: n,
              eventModel: g,
              bIsPreview: v,
            }),
          ),
        );
      }
    },
  },
]);
