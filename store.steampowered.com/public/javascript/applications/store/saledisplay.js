/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [680],
  {
    66806: (e) => {
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
    29979: (e, t, n) => {
      "use strict";
      n.d(t, { p: () => l });
      var a = n(33940),
        r = n(89526),
        o = n(49194),
        c = n(49920),
        s = n(31621),
        i = n(70983),
        u = n(38811);
      function l(e) {
        const { children: t, navTreeRef: n } = e,
          l = (0, a._T)(e, ["children", "navTreeRef"]),
          g = r.useRef(),
          m = (0, s.BE)(g, n),
          d = (0, i.id)(),
          _ = window.__virtual_keyboard_client;
        if (
          ((0, r.useEffect)(() => {
            u.Wz.SetHookFactory(() => _);
          }, [_]),
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
            r.createElement(c.O, null, t)
          );
        }
        return r.createElement(r.Fragment, null, t);
      }
    },
    40070: (e, t, n) => {
      "use strict";
      n.d(t, { g: () => v });
      var a = n(33940),
        r = n(89526),
        o = n(59934),
        c = (n(31621), n(12715)),
        s = (n(36178), n(23907));
      let i = !1,
        u = !1,
        l = !1,
        g = !1;
      function m() {
        return i || _(), u || l;
      }
      function d(e, t) {
        return (
          !!window.location.href.match("[?&]" + t + "=") ||
          !(
            "undefined" == typeof navigator ||
            !navigator.userAgent ||
            -1 == navigator.userAgent.indexOf(e)
          )
        );
      }
      function _() {
        (g = d("Valve Steam Tenfoot", "force_tenfoot_client_view")),
          (l = d("Valve Steam GameOverlay", "force_overlay_view")),
          (u = g || d("Valve Steam Client", "force_client_view")),
          (i = !0);
      }
      const f = "FocusNavHistoryID";
      function v(e) {
        const { children: t, timeoutMS: n } = e,
          i = (0, a._T)(e, ["children", "timeoutMS"]),
          u = (function (e = 2) {
            const t = (0, o.k6)(),
              n = r.useRef(),
              a = (0, o.TH)(),
              s = m(),
              i = a.state && a.state[f],
              u = r.useRef();
            return (
              r.useLayoutEffect(() => {
                if (!n.current) return;
                const e = n.current;
                return e
                  .Node()
                  .Tree.WindowContext.FocusChangedCallbacks.Register(
                    (n, a, r) => {
                      const o = t.location;
                      let i = o.state && o.state[f];
                      i ||
                        ((i = s
                          ? `State_${o.key}`
                          : `State_${e.Node().Tree.id}`),
                        (u.current = i),
                        t.replace(
                          Object.assign(Object.assign({}, t.location), {
                            state: Object.assign(Object.assign({}, o.state), {
                              [f]: i,
                            }),
                          })
                        )),
                        u.current == i &&
                          (s
                            ? e.SaveState(i)
                            : window.history.replaceState(
                                Object.assign(
                                  Object.assign({}, window.history.state),
                                  { [i]: (0, c.Sp)(e.Node()) }
                                ),
                                null
                              ));
                    }
                  ).Unregister;
              }, [t, s]),
              r.useLayoutEffect(() => {
                var t;
                if (n.current && u.current != i) {
                  const a = n.current.NavTree().DeferredFocus;
                  a.SuppressFocus();
                  const r = s
                      ? null
                      : null === (t = window.history.state) || void 0 === t
                      ? void 0
                      : t[i],
                    o = window.setTimeout(() => {
                      let e = !1;
                      s
                        ? (e = n.current.RestoreState(i, 1))
                        : r && ((0, c.$y)(n.current.Node(), r, 0), (e = !0)),
                        e ? a.Reset() : a.ExecuteQueuedFocus(),
                        (u.current = i);
                    }, e);
                  return () => {
                    window.clearTimeout(o), a.ExecuteQueuedFocus();
                  };
                }
              }, [i, t, s, e]),
              n
            );
          })(n);
        return r.createElement(
          s.s,
          Object.assign(Object.assign({}, i), { navRef: u }),
          t
        );
      }
    },
    88671: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => y });
      var a = n(89526),
        r = n(49194),
        o = n(29979),
        c = n(23907),
        s = n(76019),
        i = n(43407),
        u = (n(84042), n(40070)),
        l = n(31641),
        g = n(3660),
        m = n(13806),
        d = n(70983),
        _ = n(66806);
      n(67575);
      class f {
        constructor() {
          this.m_rgSections = (0, d.kQ)("categories", "application_config");
        }
        GetSections() {
          return this.m_rgSections;
        }
        static Get() {
          return f.s_singleton || (f.s_singleton = new f()), f.s_singleton;
        }
      }
      function v(e) {
        const { section: t, autoFocus: n } = e,
          r = (0, d.id)(),
          o = a.createElement(
            "div",
            { className: _.CategorySection },
            a.createElement(
              "span",
              { className: _.CategorySectionName },
              t.name
            ),
            a.createElement(
              s.P8,
              {
                className: _.CategoriesCtn,
                scrollDirection: "x",
                navEntryPreferPosition: i.c4.MAINTAIN_X,
                navKey: "cat_section" + t.name,
              },
              t.categories.map((t, n) =>
                a.createElement(E, {
                  key: "category" + t.name,
                  category: t,
                  autoFocus: e.autoFocus && 0 === n,
                })
              )
            )
          );
        return r ? o : a.createElement(g.Y, { placeholderHeight: "150px" }, o);
      }
      function E(e) {
        const { category: t } = e;
        return a.createElement(
          c.s,
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
                [_.Category]: !0,
                [_.TopLevelCategory]: t.is_toplevel_genre,
              }),
            },
            a.createElement(
              "span",
              { className: _.CategoryName },
              a.createElement("span", null, t.name)
            ),
            a.createElement(p, Object.assign({}, e))
          )
        );
      }
      function p(e) {
        let { category: t } = e;
        return a.createElement(
          "div",
          { className: _.GridOuter },
          a.createElement(
            "div",
            { className: _.Grid },
            a.createElement("img", { src: d.De.STORE_BASE_URL + t.image_url })
          )
        );
      }
      const y = function () {
        const { sections: e } = (function () {
            const e = f.Get(),
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
                { className: _.CategorySectionsCtn },
                e.map((e, t) =>
                  a.createElement(v, {
                    key: "section" + e.name,
                    section: e,
                    autoFocus: 0 == t,
                  })
                )
              )
            )
          )
        );
      };
    },
    25893: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => p });
      var a = n(89526),
        r = (n(6960), n(29979)),
        o = n(40070),
        c = n(67575),
        s = n(82569),
        i = n(31641),
        u = n(68208),
        l = n(94082),
        g = n(45688),
        m = n(90174),
        d = n.n(m),
        _ = n(15642),
        f = n(31587),
        v = n(70983),
        E = n(59544);
      function p(e) {
        return a.createElement(
          E.n,
          { bSalePage: !0 },
          a.createElement(y, Object.assign({}, e))
        );
      }
      function y(e) {
        const { promotionName: t, language: n } = e,
          [m, E] = a.useState(
            u.j1.GetClanEventFromAnnouncementGID(v.Wj.ANNOUNCEMENT_GID)
          ),
          p = (0, i.L)();
        if (
          (a.useEffect(() => {
            if (
              (null == m ? void 0 : m.AnnouncementGID) != v.Wj.ANNOUNCEMENT_GID
            ) {
              const e = new s.K(v.JA.CLANSTEAMID);
              u.j1
                .LoadPartnerEventFromAnnoucementGIDAndClanSteamID(
                  e,
                  v.Wj.ANNOUNCEMENT_GID,
                  null
                )
                .then(E);
            }
            (0, l.nf)(null);
          }, [m]),
          !m)
        )
          return a.createElement(
            "div",
            { className: d().FlexCenter, style: { height: "500px" } },
            a.createElement(_.V, {
              size: "medium",
              string: (0, f.Xx)("#Loading"),
            })
          );
        const y = m.visibility_state !== c.ac.k_EEventStateVisible;
        return a.createElement(
          r.p,
          { navID: "StoreSalePageRoot", NavigationManager: p },
          a.createElement(
            o.g,
            { timeoutMS: 1e3 },
            a.createElement(g.oS, {
              promotionName: t,
              language: n,
              eventModel: m,
              bIsPreview: y,
            })
          )
        );
      }
    },
  },
]);
