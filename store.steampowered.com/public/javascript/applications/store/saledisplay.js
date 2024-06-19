/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [680],
  {
    40843: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        CategorySectionsCtn: "YuXdszLjIFoat_EbTkm8U",
        CategorySection: "_2MUQ8QBrMaSxsdhqhiN6tG",
        CategorySectionName: "_2VnsyILlZj23L2UgP3ZsMm",
        CategoriesCtn: "_3yuPyNw3DpZ_ICakOPcu4u",
        Category: "_1uwcZwdwT2vRgumGDlZbtk",
        GridOuter: "_3Q4XMqaQk6OcDiI6shf28J",
        Grid: "_3anY0OeVUh2enLVFNx50N1",
        CategoryName: "_3VNsED3Ez-vqDraw_8QWsp",
        TopLevelCategory: "_2ZYjRLgkQLHW5_cstUffIp",
      };
    },
    13043: (e, t, n) => {
      "use strict";
      n.d(t, { p: () => l });
      var a = n(85556),
        r = n(47427),
        s = n(82493),
        c = n(4030),
        o = n(20417),
        i = n(37563),
        u = n(35643);
      function l(e) {
        const { children: t, navTreeRef: n } = e,
          l = (0, a._T)(e, ["children", "navTreeRef"]),
          m = r.useRef(),
          g = (0, o.BE)(m, n),
          d = (0, i.id)(),
          E = window.__virtual_keyboard_client;
        if (d) {
          const e = window.__nav_tree_root;
          return r.createElement(
            s.Fe,
            Object.assign({}, l, {
              navTreeRef: g,
              secondary: !0,
              parentEmbeddedNavTree: e,
            }),
            r.createElement(
              u.o5,
              { factory: E },
              r.createElement(c.O, null, t),
            ),
          );
        }
        return r.createElement(r.Fragment, null, t);
      }
    },
    74606: (e, t, n) => {
      "use strict";
      n.d(t, { g: () => l });
      var a = n(85556),
        r = n(47427),
        s = n(8285),
        c = (n(20417), n(22671)),
        o = n(91618),
        i = n(41003);
      const u = "FocusNavHistoryID";
      function l(e) {
        const { children: t, timeoutMS: n } = e,
          l = (0, a._T)(e, ["children", "timeoutMS"]),
          m = (function (e = 2) {
            const t = (0, s.k6)(),
              n = r.useRef(),
              a = (0, s.TH)(),
              o = (0, i.k0)(),
              l = a.state && a.state[u],
              m = r.useRef();
            return (
              r.useLayoutEffect(() => {
                if (!n.current) return;
                const e = n.current;
                return e
                  .Node()
                  .Tree.WindowContext.FocusChangedCallbacks.Register(
                    (n, a, r) => {
                      const s = t.location;
                      let i = s.state && s.state[u];
                      i ||
                        ((i = o
                          ? `State_${s.key}`
                          : `State_${e.Node().Tree.id}`),
                        (m.current = i),
                        t.replace(
                          Object.assign(Object.assign({}, t.location), {
                            state: Object.assign(Object.assign({}, s.state), {
                              [u]: i,
                            }),
                          }),
                        )),
                        m.current == i &&
                          (o
                            ? e.SaveState(i)
                            : window.history.replaceState(
                                Object.assign(
                                  Object.assign({}, window.history.state),
                                  { [i]: (0, c.Sp)(e.Node()) },
                                ),
                                null,
                              ));
                    },
                  ).Unregister;
              }, [t, o]),
              r.useLayoutEffect(() => {
                var t;
                if (n.current && m.current != l) {
                  const a = n.current.NavTree().DeferredFocus;
                  a.SuppressFocus();
                  const r = o
                      ? null
                      : null === (t = window.history.state) || void 0 === t
                        ? void 0
                        : t[l],
                    s = window.setTimeout(() => {
                      let e = !1;
                      o
                        ? (e = n.current.RestoreState(l, 1))
                        : r && ((0, c.$y)(n.current.Node(), r, 0), (e = !0)),
                        e ? a.Reset() : a.ExecuteQueuedFocus(),
                        (m.current = l);
                    }, e);
                  return () => {
                    window.clearTimeout(s), a.ExecuteQueuedFocus();
                  };
                }
              }, [l, t, o, e]),
              n
            );
          })(n);
        return r.createElement(
          o.s,
          Object.assign(Object.assign({}, l), { navRef: m }),
          t,
        );
      }
    },
    98079: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => y });
      var a = n(47427),
        r = n(82493),
        s = n(13043),
        c = n(91618),
        o = n(47144),
        i = n(3783),
        u = n(74606),
        l = n(41130),
        m = n(47242),
        g = n(13129),
        d = n(37563),
        E = n(40843);
      class f {
        GetSections() {
          return this.m_rgSections;
        }
        static Get() {
          return f.s_singleton || (f.s_singleton = new f()), f.s_singleton;
        }
        constructor() {
          this.m_rgSections = (0, d.kQ)("categories", "application_config");
        }
      }
      function v(e) {
        const { section: t, autoFocus: n } = e,
          r = (0, d.id)(),
          s = a.createElement(
            "div",
            { className: E.CategorySection },
            a.createElement(
              "span",
              { className: E.CategorySectionName },
              t.name,
            ),
            a.createElement(
              o.P8,
              {
                className: E.CategoriesCtn,
                scrollDirection: "x",
                navEntryPreferPosition: i.c4.MAINTAIN_X,
                navKey: "cat_section" + t.name,
              },
              t.categories.map((t, n) =>
                a.createElement(N, {
                  key: "category" + t.name,
                  category: t,
                  autoFocus: e.autoFocus && 0 === n,
                }),
              ),
            ),
          );
        return r ? s : a.createElement(m.Y, { placeholderHeight: "150px" }, s);
      }
      function N(e) {
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
                [E.Category]: !0,
                [E.TopLevelCategory]: t.is_toplevel_genre,
              }),
            },
            a.createElement(
              "span",
              { className: E.CategoryName },
              a.createElement("span", null, t.name),
            ),
            a.createElement(_, Object.assign({}, e)),
          ),
        );
      }
      function _(e) {
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
            s.p,
            { navID: "CategoriesApp", NavigationManager: t, navTreeRef: n },
            a.createElement(
              u.g,
              { timeoutMS: 1e3 },
              a.createElement(
                "div",
                { className: E.CategorySectionsCtn },
                e.map((e, t) =>
                  a.createElement(v, {
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
    13854: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => N });
      var a = n(47427),
        r = n(13043),
        s = n(74606),
        c = n(51688),
        o = n(35427),
        i = n(41130),
        u = n(82071),
        l = n(83768),
        m = n(7765),
        g = n.n(m),
        d = n(46882),
        E = n(31846),
        f = n(37563),
        v = n(55163);
      function N(e) {
        return a.createElement(
          v.n,
          { bSalePage: !0 },
          a.createElement(_, Object.assign({}, e)),
        );
      }
      function _(e) {
        const { promotionName: t, language: n } = e,
          [m, v] = a.useState(
            u.j1.GetClanEventFromAnnouncementGID(f.Wj.ANNOUNCEMENT_GID),
          ),
          N = (0, i.L)();
        if (
          (a.useEffect(() => {
            if (
              (null == m ? void 0 : m.AnnouncementGID) != f.Wj.ANNOUNCEMENT_GID
            ) {
              const e = new o.K(f.JA.CLANSTEAMID);
              u.j1
                .LoadPartnerEventFromAnnoucementGIDAndClanSteamID(
                  e,
                  f.Wj.ANNOUNCEMENT_GID,
                  null,
                )
                .then(v);
            }
          }, [m]),
          !m)
        )
          return a.createElement(
            "div",
            { className: g().FlexCenter, style: { height: "500px" } },
            a.createElement(d.V, {
              size: "medium",
              string: (0, E.Xx)("#Loading"),
            }),
          );
        const _ = m.visibility_state !== c.ac.k_EEventStateVisible;
        return a.createElement(
          r.p,
          { navID: "StoreSalePageRoot", NavigationManager: N },
          a.createElement(
            s.g,
            { timeoutMS: 1e3 },
            a.createElement(l.oS, {
              promotionName: t,
              language: n,
              eventModel: m,
              bIsPreview: _,
            }),
          ),
        );
      }
    },
  },
]);
