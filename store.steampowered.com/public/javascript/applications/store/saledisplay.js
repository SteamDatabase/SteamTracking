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
        i = n(90666),
        u = n(9198);
      function l(e) {
        const { children: t, navTreeRef: n } = e,
          l = (0, a._T)(e, ["children", "navTreeRef"]),
          m = r.useRef(),
          g = (0, s.BE)(m, n),
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
              navTreeRef: g,
              secondary: !0,
              parentEmbeddedNavTree: e,
            }),
            r.createElement(c.O, null, t)
          );
        }
        return r.createElement(r.Fragment, null, t);
      }
    },
    41147: (e, t, n) => {
      "use strict";
      n.d(t, { g: () => v });
      var a = n(70655),
        r = n(67294),
        o = n(16550),
        c = (n(64839), n(60664)),
        s = (n(37464), n(35921));
      let i = !1,
        u = !1,
        l = !1,
        m = !1;
      function g() {
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
        (m = d("Valve Steam Tenfoot", "force_tenfoot_client_view")),
          (l = d("Valve Steam GameOverlay", "force_overlay_view")),
          (u = m || d("Valve Steam Client", "force_client_view")),
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
              s = g(),
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
                          o.pathname,
                          Object.assign(Object.assign({}, o.state), { [f]: i })
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
              r.useEffect(() => {
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
    31970: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => y });
      var a = n(67294),
        r = n(7707),
        o = n(34425),
        c = n(35921),
        s = n(88272),
        i = n(39746),
        u = (n(12505), n(41147)),
        l = n(71174),
        m = n(15396),
        g = n(7573),
        d = n(90666),
        _ = n(66472);
      n(37662);
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
                a.createElement(p, {
                  key: "category" + t.name,
                  category: t,
                  autoFocus: e.autoFocus && 0 === n,
                })
              )
            )
          );
        return r ? o : a.createElement(m.Y, { placeholderHeight: "150px" }, o);
      }
      function p(e) {
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
              className: (0, g.Z)({
                [_.Category]: !0,
                [_.TopLevelCategory]: t.is_toplevel_genre,
              }),
            },
            a.createElement(
              "span",
              { className: _.CategoryName },
              a.createElement("span", null, t.name)
            ),
            a.createElement(E, Object.assign({}, e))
          )
        );
      }
      function E(e) {
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
    41135: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => E });
      var a = n(67294),
        r = (n(26149), n(34425)),
        o = n(41147),
        c = n(37662),
        s = n(3389),
        i = n(71174),
        u = n(7200),
        l = n(27991),
        m = n(34845),
        g = n(69491),
        d = n.n(g),
        _ = n(13596),
        f = n(41311),
        v = n(90666),
        p = n(51449);
      function E(e) {
        return a.createElement(
          p.n,
          { bSalePage: !0 },
          a.createElement(y, Object.assign({}, e))
        );
      }
      function y(e) {
        const { promotionName: t, language: n } = e,
          [g, p] = a.useState(
            u.j1.GetClanEventFromAnnouncementGID(v.Wj.ANNOUNCEMENT_GID)
          ),
          E = (0, i.L)();
        if (
          (a.useEffect(() => {
            if (
              (null == g ? void 0 : g.AnnouncementGID) != v.Wj.ANNOUNCEMENT_GID
            ) {
              const e = new s.K(v.JA.CLANSTEAMID);
              u.j1
                .LoadPartnerEventFromAnnoucementGIDAndClanSteamID(
                  e,
                  v.Wj.ANNOUNCEMENT_GID,
                  null
                )
                .then(p);
            }
            (0, l.nf)(null);
          }, [g]),
          !g)
        )
          return a.createElement(
            "div",
            { className: d().FlexCenter, style: { height: "500px" } },
            a.createElement(_.V, {
              size: "medium",
              string: (0, f.Xx)("#Loading"),
            })
          );
        const y = g.visibility_state !== c.ac.k_EEventStateVisible;
        return a.createElement(
          r.p,
          { navID: "StoreSalePageRoot", NavigationManager: E },
          a.createElement(
            o.g,
            { timeoutMS: 1e3 },
            a.createElement(m.o, {
              promotionName: t,
              language: n,
              eventModel: g,
              bIsPreview: y,
            })
          )
        );
      }
    },
  },
]);
