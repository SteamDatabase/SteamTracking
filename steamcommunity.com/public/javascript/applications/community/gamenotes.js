/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [6838],
  {
    25251: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        Page: "ZUB8zp36DGzB2Ge1HGlBi",
        Content: "_1aZdz4QMkvBwHD48GvZNIn",
        NotesPagedSettings: "_1dBCPkyWYRX7FwOcOEDrOo",
        NotePage: "_2r0iBG84H79jitflfzloHL",
        PinnedView: "_3mIftPW9bArr_wJxHwxTnq",
        Toolbar: "A6mhRr1dqvr5OHl9MX6_3",
        NoteActions: "_3uGOyXFBdLEV_F6dICiSwx",
        NoteEditorArea: "_3WOF4kDR1RbjelZgS8Qd-H",
        EditorInput: "_3zWunJFZU6u89fIABN9Gkf",
        NewNoteButton: "_2J6kvK4A5CTbr_o4ZYqycZ",
        CloseWindowButton: "G0FghhaByLIrcEuYSV6qh",
      };
    },
    31643: (e) => {
      e.exports = {
        Hover: "_3tNcTScSfJlcy37nRZQjPq",
        Link: "ovQsFIS2bmQSO6q9lpMcl",
        LinkHelp: "_2Az4l-ByEoCD6T4yVffGuV",
      };
    },
    56836: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        Container: "_3lEt5gxDF4ACrtnP4U7Z-D",
        ToolbarRow: "_2H40REphoCtny5VfHm5Ad9",
        CommandButton: "_1-R1Ud0bImFcswoqa8FbU",
        Toggled: "_41y1pGJEo9TqrhjUqDK2h",
        Gap: "_2BPaPn42NspKTF-dGx6Il1",
        Spacer: "_2Zt31S-3IT7JYy5IswjnFf",
        ExpandButton: "_3454x5BD8OL9OyBzYOvsv8",
      };
    },
    42695: (e, t, n) => {
      "use strict";
      n.d(t, { q: () => d });
      var o = n(85556),
        r = n(79545),
        a = n(14351),
        i = n(68785),
        l = n(46984),
        s = n(16997);
      const c = new i.sO("ReactUsageReporting").Debug,
        m = 1e3 * l._H.PerMinute;
      class u {
        constructor() {
          (this.m_transport = null),
            (this.m_mapRoutes = new Map()),
            (this.m_mapComponents = new Map()),
            (this.m_mapActions = new Map()),
            (this.m_reportCount = 0),
            (this.m_bInitialized = !1);
        }
        Init(e, t, n) {
          (this.m_bInitialized = !0),
            (this.m_strProduct = e),
            (this.m_strVersion = t),
            (this.m_transport = n),
            this.ScheduleSend();
        }
        ScheduleSend() {
          setTimeout(() => this.CheckSend(), m);
        }
        CheckSend() {
          this.m_reportCount > 0 && this.SendMetrics(), this.ScheduleSend();
        }
        ReportInternal(e, t) {
          t.has(e) || t.set(e, 0),
            t.set(e, t.get(e) + 1),
            this.m_reportCount++,
            this.ShouldSendMetricsImmediately() && this.SendMetrics();
        }
        ReportRouteMatch(e) {
          c("Route match: " + e), this.ReportInternal(e, this.m_mapRoutes);
        }
        ReportTrackedComponent(e) {
          c("Tracked component: " + e),
            this.ReportInternal(e, this.m_mapComponents);
        }
        ReportTrackedAction(e) {
          c("User action: " + e), this.ReportInternal(e, this.m_mapActions);
        }
        ShouldSendMetricsImmediately() {
          return this.m_reportCount >= 100;
        }
        SendMetrics() {
          if (!this.m_bInitialized) return;
          const e = r.gA.Init(a.YH);
          e.Body().set_product(this.m_strProduct),
            e.Body().set_version(this.m_strVersion),
            this.m_mapRoutes.forEach((t, n) => {
              let o = new a.Be();
              o.set_route(n), o.set_count(t), e.Body().add_routes(o);
            }),
            this.m_mapComponents.forEach((t, n) => {
              let o = new a.Hy();
              o.set_component(n), o.set_count(t), e.Body().add_components(o);
            }),
            this.m_mapActions.forEach((t, n) => {
              let o = new a.Js();
              o.set_action(n), o.set_count(t), e.Body().add_actions(o);
            }),
            this.m_mapRoutes.clear(),
            this.m_mapComponents.clear(),
            this.m_mapActions.clear(),
            (this.m_reportCount = 0),
            a.TF.ReportReactUsage(this.m_transport, e);
        }
        get version() {
          return this.m_strVersion;
        }
        get product() {
          return this.m_strProduct;
        }
      }
      (0, o.gn)([s.a], u.prototype, "CheckSend", null);
      const d = new u();
    },
    71270: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => qe });
      var o = n(47427),
        r = n(8285);
      const a = {
        List: () => "/notes/list",
        AppNotes: (e, t) => `/notes/app/${e}/${null != t ? t : ""}`,
        ShortcutNotes: (e, t) => `/notes/shortcut/${e}/${null != t ? t : ""}`,
      };
      var i = n(28017),
        l = n(85556),
        s = n(42718);
      function c(e) {
        return e.trim();
      }
      function m(e) {
        return e.appid ? { appid: e.appid } : { shortcut: e.shortcut_name };
      }
      const u = o.createContext({ mode: "page", store: null });
      function d(e) {
        const {
            mode: t,
            store: n,
            closePopup: r,
            bPinnedView: a,
            onClickURL: i,
            bSpellcheckEnabled: l = !0,
            setSpellcheckEnabled: s,
            children: c,
          } = e,
          m = o.useMemo(
            () => ({
              mode: t,
              store: n,
              closePopup: r,
              bPinnedView: a,
              onClickURL: i,
              bSpellcheckEnabled: l,
              setSpellcheckEnabled: s,
            }),
            [t, n, r, a, i, l, s],
          );
        return o.createElement(u.Provider, { value: m }, c);
      }
      function p() {
        return o.useContext(u).closePopup;
      }
      function h() {
        return o.useContext(u).store;
      }
      var f = n(31846);
      function g(e) {
        return "appid" in e
          ? ["GameNotes", "NotesByAppID", e.appid]
          : ["GameNotes", "NotesForShortcut", c(e.shortcut)];
      }
      function b(e) {
        const t = h();
        return (0, s.useQuery)(
          g(e),
          () =>
            (0, l.mG)(this, void 0, void 0, function* () {
              return (yield t.GetGameNotesList(e, !0)) || [];
            }),
          { enabled: !!e },
        );
      }
      function E(e, t) {
        const n = (0, s.useQueryClient)(),
          o = h(),
          r = e.id;
        return (0, s.useMutation)(
          () =>
            (0, l.mG)(this, void 0, void 0, function* () {
              return e.not_persisted ? r : yield o.DeleteGameNote(m(e), r);
            }),
          {
            onSuccess() {
              _(n, m(e), (e) => e.filter((e) => e.id != r)), t && t();
            },
          },
        );
      }
      function _(e, t, n) {
        e.getQueryData(g(t)) && e.setQueryData(g(t), n);
      }
      function v(e, t) {
        return o.useMemo(
          () =>
            t
              ? (function (e) {
                  return { shortcut: c(e) };
                })(t)
              : (function (e) {
                  return { appid: e };
                })(e),
          [e, t],
        );
      }
      var T = n(73799),
        C = n.n(T),
        N = n(79545),
        k = n(18015),
        y = n(40057),
        S = n(65255),
        w = n(77936);
      let x;
      const G = 864e5;
      function B(e) {
        return `appinfo_${e}_${S.De.LANGUAGE}`;
      }
      function P(e) {
        return Boolean(e && Date.now() - e.timeCached < G);
      }
      function F(e) {
        const t = (0, y.bY)(),
          n = (0, y.y$)();
        return (0, s.useQuery)(
          ["appinfo", e],
          () =>
            (0, l.mG)(this, void 0, void 0, function* () {
              return (function (e, t) {
                return (
                  x ||
                    (x = new (C())(
                      (n) =>
                        (0, l.mG)(this, void 0, void 0, function* () {
                          const o = new Map();
                          (yield Promise.all(n.map((e) => t.GetObject(B(e)))))
                            .filter(P)
                            .forEach(({ value: e }) => o.set(e.appid, e));
                          const r = n.slice().filter((e) => !o.has(e));
                          if (r.length) {
                            const n = N.gA.Init(k.Fi);
                            n.Body().set_language((0, w.jM)(S.De.LANGUAGE)),
                              n.Body().set_appids(r);
                            const a = yield k.AE.GetApps(e, n);
                            if (1 != a.GetEResult()) throw a.GetErrorMessage();
                            a.Body()
                              .toObject()
                              .apps.forEach((e) => {
                                t.StoreObject(B(e.appid), {
                                  timeCached: Date.now(),
                                  value: e,
                                }),
                                  o.set(e.appid, e);
                              });
                          }
                          return n.map((e) => o.get(e));
                        }),
                      { cache: !1 },
                    )),
                  x
                );
              })(t, n).load(e);
            }),
          { staleTime: G, enabled: !!e },
        ).data;
      }
      var I = n(46882);
      function D() {
        const { data: e, isLoading: t } = (function () {
          const e = h();
          return (0, s.useQuery)(["GameNotes", "GamesWithNotes"], () =>
            e.GetGamesWithNotes(),
          );
        })();
        return t
          ? o.createElement(I.V, { msDelayAppear: 300 })
          : o.createElement(
              "div",
              null,
              o.createElement(
                "h1",
                null,
                (0, f.Xx)("#UserGameNotes_NotesList"),
              ),
              o.createElement(
                "ul",
                null,
                e.map((e) => o.createElement(L, { key: e.appid, game: e })),
              ),
            );
      }
      function L(e) {
        const { game: t } = e,
          n = F(t.appid);
        return o.createElement(
          "li",
          null,
          o.createElement(
            i.rU,
            { to: a.AppNotes(t.appid) },
            null == n ? void 0 : n.name,
          ),
        );
      }
      var R = n(42695),
        H = n(1485),
        A = n(58538),
        U = n(50898),
        M = n(20564),
        O = n(96394),
        X = n(2761),
        j = n(93109),
        $ = n(23612),
        W = n(91618),
        V = n(42287);
      function z(e) {
        const {
            visible: t = !0,
            className: n,
            keepMounted: r = !1,
            expandDirection: a = "height",
            msAnimationDuration: i = 250,
            children: l,
          } = e,
          {
            style: s,
            active: c,
            refDiv: m,
          } = (function (e, t = "height", n = 250) {
            const r = o.useRef(),
              a = o.useRef(!0),
              [i, l] = o.useState("idle"),
              [s, c] = o.useState({});
            o.useLayoutEffect(() => {
              a.current ? (a.current = !1) : l("start");
            }, [e]),
              o.useLayoutEffect(() => {
                const n = r.current,
                  o = "height" == t ? "scrollHeight" : "scrollWidth";
                if ("start" == i) {
                  const r = n[o];
                  c((n) =>
                    Object.assign(
                      Object.assign({ [t]: e ? "0px" : `${r}px` }, n),
                      { overflow: "hidden" },
                    ),
                  ),
                    l("active");
                } else if ("active" == i) {
                  n.scrollTop;
                  const r = n[o];
                  c({ overflow: "hidden", [t]: e ? `${r}px` : "0px" });
                  const a = () => {
                    V.unstable_batchedUpdates(() => {
                      c({}), l("idle");
                    });
                  };
                  return (
                    n.addEventListener("transitionend", a),
                    () => {
                      n.removeEventListener("transitionend", a);
                    }
                  );
                }
              }, [i, e]);
            const m = Object.assign(Object.assign({}, s), {
              transition: `${t} ${n}ms`,
            });
            return { style: m, active: "idle" != i, refDiv: r };
          })(t, a, i);
        return t || c || r
          ? o.createElement("div", { className: n, ref: m, style: s }, l)
          : null;
      }
      var Z = n(13129),
        Q = n(20417),
        q = n(56836);
      function Y(e) {
        const { schema: t, children: n } = e,
          { callbacks: r, view: a } = re(),
          [i, l] = o.useState(() => (0, j.MW)(a.state, t.marks.link)),
          s = o.useCallback((e) => l((0, j.MW)(e.state, t.marks.link)), [t]);
        (0, Q.Qg)(r, s);
        const [c, m, u] = (0, Q.X9)();
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            U.Yy,
            { active: c },
            o.createElement(K, {
              schema: t,
              active: c,
              closeModal: u,
              view: a,
            }),
          ),
          o.createElement(
            H.zx,
            {
              className: (0, Z.Z)(q.CommandButton, i && q.Toggled),
              onMouseDown: (e) => {
                e.preventDefault(), m();
              },
              title: (0, f.Xx)("#FormattingToolbar_InsertLink"),
            },
            n,
          ),
        );
      }
      const K = o.memo(function (e) {
        const { schema: t, active: n, closeModal: r, view: a } = e,
          [i, l] = o.useState(""),
          [s, c] = o.useState(""),
          m = o.useRef(),
          u = o.useRef();
        return (
          o.useLayoutEffect(() => {
            if (n) {
              let e = "";
              a.state.selection.empty ||
                (e = a.state.doc.cut(
                  a.state.selection.from,
                  a.state.selection.to,
                ).textContent),
                l(e),
                e.startsWith("http")
                  ? (c(e),
                    m.current.Focus(),
                    window.setTimeout(() => {
                      m.current.element.select();
                    }, 0))
                  : 0 == e.length
                    ? m.current.Focus()
                    : u.current.Focus();
            }
          }, [n, a]),
          o.createElement(
            U.uH,
            {
              onOK: () => {
                a.dispatch(
                  a.state.tr.replaceRangeWith(
                    a.state.selection.from,
                    a.state.selection.to,
                    t.text(i || s, [t.marks.link.create({ href: s })]),
                  ),
                ),
                  a.focus(),
                  r();
              },
              closeModal: r,
              strTitle: (0, f.Xx)("#FormattingToolbar_InsertLink"),
              strOKButtonText: (0, f.Xx)("#FormattingToolbar_InsertLink"),
              bOKDisabled: 0 == s.length,
            },
            o.createElement(H.II, {
              ref: m,
              value: i,
              onChange: (e) => l(e.currentTarget.value),
              label: (0, f.Xx)("#FormattingToolbar_LinkText"),
            }),
            o.createElement(H.II, {
              ref: u,
              value: s,
              onChange: (e) => c(e.currentTarget.value),
              label: (0, f.Xx)("#FormattingToolbar_LinkAddress"),
            }),
          )
        );
      });
      var J = n(59728),
        ee = n(45492),
        te = n(56617);
      function ne(e) {
        const {
            schema: t,
            view: n,
            refUpdateToolbar: r,
            className: a,
            bSpellcheckEnabled: i,
            setSpellcheckEnabled: l,
          } = e,
          [s, c] = (0, te.i4)("FormattingToolbar_Expanded", !1),
          [m] = o.useState(() => new ee.pB());
        o.useEffect(
          () => ((0, Q.k$)(r, () => m.Dispatch(n)), () => (0, Q.k$)(r, void 0)),
          [m, n, r],
        );
        const u = o.useMemo(() => ({ callbacks: m, view: n }), [m, n]);
        return n
          ? o.createElement(
              oe.Provider,
              { value: u },
              o.createElement(
                "div",
                { className: (0, Z.Z)(q.Toolbar, a) },
                o.createElement(
                  ae,
                  null,
                  o.createElement(
                    J.HP,
                    {
                      toolTipContent: "#FormattingToolbar_Undo",
                      direction: "bottom",
                    },
                    o.createElement(
                      se,
                      {
                        title: (0, f.Xx)("#FormattingToolbar_Undo"),
                        command: O.Yw,
                        fnEnabledCheck: ue,
                      },
                      o.createElement(A.DeA, null),
                    ),
                  ),
                  o.createElement(
                    J.HP,
                    {
                      toolTipContent: "#FormattingToolbar_Redo",
                      direction: "bottom",
                    },
                    o.createElement(
                      se,
                      {
                        title: (0, f.Xx)("#FormattingToolbar_Redo"),
                        command: O.KX,
                        fnEnabledCheck: de,
                      },
                      o.createElement(A.Jwt, null),
                    ),
                  ),
                  o.createElement("div", { className: q.Gap }),
                  o.createElement(
                    J.HP,
                    {
                      toolTipContent: "#FormattingToolbar_Bold",
                      direction: "bottom",
                    },
                    o.createElement(
                      le,
                      {
                        title: (0, f.Xx)("#FormattingToolbar_Bold"),
                        mark: t.marks.strong,
                      },
                      o.createElement(A.DUs, null),
                    ),
                  ),
                  o.createElement(
                    J.HP,
                    {
                      toolTipContent: "#FormattingToolbar_Italic",
                      direction: "bottom",
                    },
                    o.createElement(
                      le,
                      {
                        title: (0, f.Xx)("#FormattingToolbar_Italic"),
                        mark: t.marks.italic,
                      },
                      o.createElement(A.tzG, null),
                    ),
                  ),
                  o.createElement(
                    J.HP,
                    {
                      toolTipContent: "#FormattingToolbar_Underline",
                      direction: "bottom",
                    },
                    o.createElement(
                      le,
                      {
                        title: (0, f.Xx)("#FormattingToolbar_Underline"),
                        mark: t.marks.underline,
                      },
                      o.createElement(A.nC9, null),
                    ),
                  ),
                  o.createElement(
                    J.HP,
                    {
                      toolTipContent: "#FormattingToolbar_Strike",
                      direction: "bottom",
                    },
                    o.createElement(
                      le,
                      {
                        title: (0, f.Xx)("#FormattingToolbar_Strike"),
                        mark: t.marks.strike,
                      },
                      o.createElement(A.z$U, null),
                    ),
                  ),
                  o.createElement(
                    J.HP,
                    {
                      toolTipContent: "#FormattingToolbar_InlineCode",
                      direction: "bottom",
                    },
                    o.createElement(
                      le,
                      {
                        title: (0, f.Xx)("#FormattingToolbar_InlineCode"),
                        mark: t.marks.code,
                      },
                      o.createElement(A.l2k, null),
                    ),
                  ),
                  o.createElement("div", { className: q.Spacer }),
                  o.createElement(
                    J.HP,
                    {
                      toolTipContent: "#FormattingToolbar_ExpandOptions",
                      direction: "bottom",
                    },
                    o.createElement(
                      H.zx,
                      {
                        className: (0, Z.Z)(
                          q.CommandButton,
                          q.ExpandButton,
                          s && q.Toggled,
                        ),
                        onClick: () => c(!s),
                      },
                      o.createElement(A.Tt3, null),
                    ),
                  ),
                ),
                o.createElement(
                  ae,
                  { visible: s },
                  o.createElement(
                    J.HP,
                    {
                      toolTipContent: "#FormattingToolbar_Paragraph",
                      direction: "bottom",
                    },
                    o.createElement(
                      ie,
                      {
                        nodeType: t.nodes.paragraph,
                        title: (0, f.Xx)("#FormattingToolbar_Paragraph"),
                      },
                      o.createElement(A.Dos, null),
                    ),
                  ),
                  o.createElement(
                    J.HP,
                    {
                      toolTipContent: "#FormattingToolbar_HeadingLevel1",
                      direction: "bottom",
                    },
                    o.createElement(
                      ie,
                      {
                        nodeType: t.nodes.heading,
                        attrs: { level: 1 },
                        title: (0, f.Xx)("#FormattingToolbar_HeadingLevelN", 1),
                      },
                      o.createElement(A.geY, null),
                    ),
                  ),
                  o.createElement(
                    J.HP,
                    {
                      toolTipContent: "#FormattingToolbar_HeadingLevel2",
                      direction: "bottom",
                    },
                    o.createElement(
                      ie,
                      {
                        nodeType: t.nodes.heading,
                        attrs: { level: 2 },
                        title: (0, f.Xx)("#FormattingToolbar_HeadingLevelN", 2),
                      },
                      o.createElement(A.y3S, null),
                    ),
                  ),
                  o.createElement(
                    J.HP,
                    {
                      toolTipContent: "#FormattingToolbar_HeadingLevel3",
                      direction: "bottom",
                    },
                    o.createElement(
                      ie,
                      {
                        nodeType: t.nodes.heading,
                        attrs: { level: 3 },
                        title: (0, f.Xx)("#FormattingToolbar_HeadingLevelN", 3),
                      },
                      o.createElement(A.Zhu, null),
                    ),
                  ),
                  o.createElement(
                    J.HP,
                    {
                      toolTipContent: "#FormattingToolbar_HeadingLevel4",
                      direction: "bottom",
                    },
                    o.createElement(
                      ie,
                      {
                        nodeType: t.nodes.heading,
                        attrs: { level: 4 },
                        title: (0, f.Xx)("#FormattingToolbar_HeadingLevelN", 4),
                      },
                      o.createElement(A.P2P, null),
                    ),
                  ),
                  o.createElement(
                    J.HP,
                    {
                      toolTipContent: "#FormattingToolbar_HeadingLevel5",
                      direction: "bottom",
                    },
                    o.createElement(
                      ie,
                      {
                        nodeType: t.nodes.heading,
                        attrs: { level: 5 },
                        title: (0, f.Xx)("#FormattingToolbar_HeadingLevelN", 5),
                      },
                      o.createElement(A.Lb, null),
                    ),
                  ),
                  o.createElement(
                    J.HP,
                    {
                      toolTipContent: "#FormattingToolbar_CodeBlock",
                      direction: "bottom",
                    },
                    o.createElement(
                      ie,
                      {
                        nodeType: t.nodes.code_block,
                        title: (0, f.Xx)("#FormattingToolbar_CodeBlock"),
                      },
                      o.createElement(A.N4L, null),
                    ),
                  ),
                  o.createElement("div", { className: q.Gap }),
                  o.createElement(
                    J.HP,
                    {
                      toolTipContent: "#FormattingToolbar_BulletedList",
                      direction: "bottom",
                    },
                    o.createElement(
                      ce,
                      {
                        title: (0, f.Xx)("#FormattingToolbar_BulletedList"),
                        command: X.KI(t.nodes.bullet_list),
                      },
                      o.createElement(A.RAD, null),
                    ),
                  ),
                  o.createElement(
                    J.HP,
                    {
                      toolTipContent: "#FormattingToolbar_IndentList",
                      direction: "bottom",
                    },
                    o.createElement(
                      ce,
                      {
                        title: (0, f.Xx)("#FormattingToolbar_IndentList"),
                        command: X.IB(t.nodes.list_item),
                      },
                      o.createElement(A.FYd, null),
                    ),
                  ),
                  o.createElement(
                    J.HP,
                    {
                      toolTipContent: "#FormattingToolbar_OutdentList",
                      direction: "bottom",
                    },
                    o.createElement(
                      ce,
                      {
                        title: (0, f.Xx)("#FormattingToolbar_OutdentList"),
                        command: X.bw(t.nodes.list_item),
                      },
                      o.createElement(A.LcB, null),
                    ),
                  ),
                  o.createElement("div", { className: q.Gap }),
                  o.createElement(
                    J.HP,
                    {
                      toolTipContent: "#FormattingToolbar_InsertLink",
                      direction: "bottom",
                    },
                    o.createElement(
                      Y,
                      { schema: t },
                      o.createElement(A.hhG, null),
                    ),
                  ),
                  o.createElement("div", { className: q.Spacer }),
                  l &&
                    o.createElement(
                      J.HP,
                      {
                        toolTipContent: i
                          ? "#FormattingToolbar_DisableSpellcheck"
                          : "#FormattingToolbar_EnableSpellcheck",
                        direction: "bottom",
                      },
                      o.createElement(
                        me,
                        { toggled: i, onClick: () => l(!i) },
                        o.createElement(A.cSC, null),
                      ),
                    ),
                ),
              ),
            )
          : null;
      }
      const oe = o.createContext(void 0),
        re = () => o.useContext(oe);
      function ae(e) {
        return o.createElement(
          z,
          { visible: e.visible },
          o.createElement(
            W.s,
            { className: (0, Z.Z)(q.ToolbarRow), "flow-children": "row" },
            e.children,
          ),
        );
      }
      function ie(e) {
        const { nodeType: t, title: n, attrs: r, children: a } = e,
          { callbacks: i, view: l } = re(),
          [s, c] = o.useState(() => (0, j.pp)(l.state, t, r)),
          m = o.useCallback((e) => c((0, j.pp)(e.state, t, r)), [t, r]);
        (0, Q.Qg)(i, m);
        const u = o.useMemo(() => $.uJ(t, r), [r, t]);
        return o.createElement(ce, {
          command: u,
          title: n,
          toggled: s,
          children: a,
        });
      }
      function le(e) {
        const { mark: t, title: n, children: r } = e,
          { callbacks: a, view: i } = re(),
          [l, s] = o.useState(() => (0, j.MW)(i.state, t)),
          c = o.useCallback((e) => s((0, j.MW)(e.state, t)), [t]);
        (0, Q.Qg)(a, c);
        const m = o.useMemo(() => $.w9(t), [t]);
        return o.createElement(ce, {
          command: m,
          title: n,
          toggled: l,
          children: r,
        });
      }
      function se(e) {
        const { fnEnabledCheck: t } = e,
          n = (0, l._T)(e, ["fnEnabledCheck"]),
          { callbacks: r, view: a } = re(),
          [i, s] = o.useState(() => t(a)),
          c = o.useCallback((e) => s(t(e)), [t]);
        return (
          (0, Q.Qg)(r, c),
          o.createElement(ce, Object.assign({}, n, { disabled: !i }))
        );
      }
      function ce(e) {
        const {
            command: t,
            toggled: n,
            title: r,
            disabled: a,
            children: i,
          } = e,
          { view: l } = re();
        return o.createElement(
          H.zx,
          {
            className: (0, Z.Z)(q.CommandButton, n && q.Toggled),
            title: r,
            onMouseDown: (e) => {
              e.preventDefault(), t(l.state, l.dispatch, l);
            },
            disabled: !0 === a,
            focusable: !a,
          },
          i,
        );
      }
      function me(e) {
        const {
          onClick: t,
          toggled: n,
          title: r,
          disabled: a,
          children: i,
        } = e;
        return o.createElement(
          H.zx,
          {
            className: (0, Z.Z)(q.CommandButton, n && q.Toggled),
            title: r,
            onMouseDown: (e) => {
              e.preventDefault(), t();
            },
            disabled: !0 === a,
          },
          i,
        );
      }
      function ue(e) {
        return O.of(e.state) > 0;
      }
      function de(e) {
        return O.AH(e.state) > 0;
      }
      var pe = n(31934),
        he = n(4005),
        fe = n(6673),
        ge = n(17625),
        be = n(23126),
        Ee = n(13974),
        _e = n(35643),
        ve = n(50423),
        Te = n(31643);
      function Ce(e) {
        const { view: t } = e,
          [n, r] = o.useState(),
          [a, i] = o.useState(),
          [l, s] = o.useState(),
          c = o.useCallback((e, t) => {
            const n = t.target;
            if ((0, ve.GB)(n) && "A" == n.nodeName) {
              const e = n.getBoundingClientRect();
              r(e.left + e.width / 2), i(e.bottom + 2), s(n);
            } else s(void 0);
            return !1;
          }, []),
          m = o.useCallback((e, t) => (s(void 0), !1), []),
          u = o.useMemo(
            () =>
              new he.Sy({
                props: { handleDOMEvents: { mouseover: c, mouseleave: m } },
              }),
            [c, m],
          );
        if (((0, j.U$)(t, u), !l)) return null;
        const d = l.getAttribute("href");
        return o.createElement(
          Ne,
          { top: a, left: n },
          o.createElement("div", { className: Te.Link }, d),
          o.createElement(
            "div",
            { className: Te.LinkHelp },
            (0, f.Xx)("#UserGameNotes_ClickToOpenLink"),
          ),
        );
      }
      function Ne(e) {
        const { top: t, left: n, children: r } = e,
          [a, i] = o.useState(0),
          l = o.useRef();
        o.useLayoutEffect(() => {
          i(l.current.getBoundingClientRect().width);
        }, [t, n, r]);
        const s = { top: `${t}px`, left: `${Math.max(n - a / 2, 12)}px` };
        return o.createElement(
          "div",
          { className: Te.Hover, style: s, ref: l },
          r,
        );
      }
      var ke = n(14609),
        ye = n(13499),
        Se = n(37563);
      const we =
        n.p +
        "images/applications/community/image_error.svg?v=valveisgoodatcaching";
      var xe = n(80878);
      function Ge(e) {
        const { view: t, uploadImage: n } = e;
        return (
          (0, j.U$)(
            t,
            new he.Sy({
              props: {
                handlePaste: (e, t, o) => {
                  const r = [];
                  o.content.descendants((e) => {
                    "image" === e.type.name &&
                      e.attrs.src.startsWith("data:image") &&
                      r.push(e.attrs.src);
                  }),
                    r.length > 0 &&
                      setTimeout(() => {
                        !(function (e, t, n) {
                          (0, l.mG)(this, void 0, void 0, function* () {
                            for (const o of e) {
                              const e = yield fetch(o),
                                r = yield e.blob(),
                                a = (0, xe.L4)(yield r.arrayBuffer());
                              Be(
                                o,
                                yield n(e.headers.get("Content-Type"), a),
                                t,
                              );
                            }
                          });
                        })(r, e, n);
                      }, 100);
                },
              },
            }),
          ),
          null
        );
      }
      function Be(e, t, n) {
        n.state.doc.descendants((o, r) => {
          if ("image" === o.type.name && o.attrs.src === e) {
            const e = n.state.tr.setNodeAttribute(r, "src", t);
            n.dispatch(e);
          }
        });
      }
      function Pe(e) {
        const {
            schemaConfig: t,
            bbcode: n,
            className: r,
            onUpdate: a,
            refView: i,
            onClickURL: l,
            bSpellcheckEnabled: s = !0,
            panelProps: c,
          } = e,
          m = o.useRef();
        m.current = a;
        const [u, d] = o.useState(),
          p = o.useRef(),
          h = o.useRef();
        h.current = l || Fe;
        const g = o.useCallback(
          (e) => {
            var n, o;
            if (!e)
              return void (
                null === (n = p.current) ||
                void 0 === n ||
                n.destroy()
              );
            const r = p.current;
            r && r.destroy(),
              (p.current = new pe.tk(e, {
                state:
                  null !== (o = null == r ? void 0 : r.state) && void 0 !== o
                    ? o
                    : he.yy.create({ schema: t.pm_schema }),
                handleClickOn: (...e) =>
                  (function (e, t, n, o, r, a, i, l) {
                    if (l && (i.ctrlKey || 1 == i.button)) {
                      const n = r
                        .resolve(o - a)
                        .marks()
                        .find((t) => t.type == e.marks.link);
                      if (n)
                        return t(n.attrs.href, i.view), i.preventDefault(), !0;
                    }
                    return !1;
                  })(t.pm_schema, h.current, ...e),
                clipboardTextParser: (...e) =>
                  (function (e, t, n, o, r) {
                    let a,
                      i = [];
                    for (; (a = t.match(ye.H7)); )
                      a.index > 0 && i.push(e.text(t.substring(0, a.index))),
                        i.push(
                          e.text(a[0], [
                            e.marks.link.create({ href: (0, ye.Pm)(a[0]) }),
                          ]),
                        ),
                        (t = t.substring(a.index + a[0].length));
                    t.length && i.push(e.text(t));
                    return new be.p2(be.HY.from(i), n.start(), n.end());
                  })(t.pm_schema, ...e),
                transformPasted: (...e) =>
                  (function (e, t, n) {
                    let o = !1;
                    if (
                      (t.content.descendants((e, t) => {
                        "image" === e.type.name &&
                          e.attrs.src.length > Ie &&
                          (o = !0);
                      }),
                      o)
                    ) {
                      let t = [
                        e.nodes.image.create({
                          src: we,
                          title: (0, f.Xx)("#UserGameNotes_ImageTooLarge"),
                        }),
                      ];
                      return new be.p2(be.HY.from(t), 0, 0);
                    }
                    return t;
                  })(t.pm_schema, ...e),
              })),
              d(p.current),
              r || p.current.focus();
          },
          [t],
        );
        o.useLayoutEffect(() => {
          const e = (0, fe.B)(n, t);
          p.current.updateState(
            (0, ge.B)(e, t.pm_schema, (...e) => m.current && m.current(...e)),
          );
        }, [t, n]),
          (0, Q.LY)(i, u);
        const {
            refDiv: b,
            onActivate: E,
            onGamepadDirection: _,
          } = (function (e) {
            const t = (0, Se.qt)(),
              n = o.useRef(),
              r = o.useCallback(
                (e) => {
                  (0, _e.LP)(e, t.IN_VR);
                },
                [t.IN_VR],
              ),
              a = (0, _e.CJ)({ onTextEntered: r }, () => {
                var e;
                return null === (e = n.current) || void 0 === e
                  ? void 0
                  : e.ownerDocument.defaultView;
              }),
              i = o.useCallback(() => {
                var t, o;
                if (
                  (a.ShowVirtualKeyboard(),
                  !(null === (t = e.current) || void 0 === t
                    ? void 0
                    : t.hasFocus()))
                ) {
                  null === (o = e.current) || void 0 === o || o.focus();
                  let t = e.current.dom.childNodes;
                  for (let o = 0; o < t.length; ++o) {
                    let r = t[o],
                      a = r.offsetTop;
                    if (void 0 !== a && a >= n.current.scrollTop) {
                      let t = r.getBoundingClientRect();
                      (0, j.VM)(e.current, t.left, t.top);
                      break;
                    }
                  }
                }
              }, [a, e]),
              l = o.useCallback((e) => e.currentTarget == e.target, []),
              s = (0, Ee.pj)(n, null, null, l);
            return { refDiv: n, onActivate: i, onGamepadDirection: s };
          })(p),
          v = (0, Q.BE)(b, g);
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            W.s,
            Object.assign(
              {
                key: `editordiv_${s}`,
                className: (0, Z.Z)(r, q.Container),
                ref: v,
                spellCheck: s,
                focusable: !0,
                onActivate: E,
                onOKActionDescription: (0, f.Xx)("#UserGameNotes_Edit"),
                onGamepadDirection: _,
              },
              c,
            ),
          ),
          o.createElement(Ce, { view: p.current }),
          e.uploadImage &&
            o.createElement(Ge, { view: u, uploadImage: e.uploadImage }),
        );
      }
      function Fe(e, t) {
        (0, ke.b8)(t, e);
      }
      const Ie = 52428800;
      var De = n(25251),
        Le = n(79500),
        Re = n(85314);
      const He = {
          nodes: Object.assign({}, Le.P.nodes),
          marks: Object.assign({}, Le.P.marks),
        },
        Ae = new Re.F(He),
        Ue = 15;
      function Me(e) {
        const { note: t } = e,
          [n, r] = o.useState(!1),
          [a, i] = o.useState(),
          c = o.useRef(),
          d = o.useRef(),
          g = o.useRef(t.content),
          b = o.useRef(!1),
          v = o.useContext(u).onClickURL,
          T =
            null === (C = o.useContext(u).bSpellcheckEnabled) ||
            void 0 === C ||
            C;
        var C;
        const N = o.useContext(u).setSpellcheckEnabled,
          k = (function (e) {
            const t = h();
            return (n, o) =>
              (0, l.mG)(this, void 0, void 0, function* () {
                const r = new Uint8Array(o),
                  a = yield t.UploadImage(`notes_${e}_images/`, n, r);
                return Promise.resolve("/gamenotes/" + a);
              });
          })(t.appid),
          y = (0, Se.id)();
        g.current == t.content || b.current || (g.current = t.content);
        const S = g.current,
          w = (function () {
            const e = (0, s.useQueryClient)(),
              t = h();
            return (0, s.useMutation)(
              (e) => t.SaveGameNote(e.note, e.title, e.bbcode),
              {
                onMutate(t) {
                  const n = Object.assign(Object.assign({}, t.note), {
                    title: t.title,
                    content: t.bbcode,
                  });
                  return (
                    _(e, m(t.note), (e) =>
                      e.map((e) => (e.id == n.id ? n : e)),
                    ),
                    console.log(n),
                    n
                  );
                },
                onSuccess(t, n, o) {
                  console.log(o, t),
                    _(e, m(n.note), (e) =>
                      e.map((e) =>
                        e.id === o.id
                          ? Object.assign(Object.assign({}, e), {
                              id: t,
                              not_persisted: !1,
                            })
                          : e,
                      ),
                    );
                },
              },
            );
          })(),
          x = o.useCallback((e, t) => {
            c.current && c.current(),
              t.doc &&
                t.doc != e.state.doc &&
                (b.current ||
                  ((b.current = !0),
                  R.q.ReportTrackedAction("/GameNotes/NoteModified")),
                (d.current = () => ({
                  title: $e(e.state.doc),
                  bbcode: (0, M.d)(e.state.doc, Ae),
                })),
                r(!0));
          }, []);
        o.useEffect(() => {
          if (!n) return;
          let e = d.current;
          const o = () => {
              if (e) {
                const { title: n, bbcode: o } = e();
                (t.not_persisted && !(null == o ? void 0 : o.length)) ||
                  w.mutate({ note: t, title: n, bbcode: o }),
                  r(!1);
              }
              (e = void 0), (d.current = void 0);
            },
            a = window.setTimeout(o, 1e3 * Ue);
          return () => {
            window.clearTimeout(a), o();
          };
        }, [w, n, t]);
        const G = p(),
          B = E(t, G),
          P = {
            onSecondaryButton: () => B.mutate(),
            onSecondaryActionDescription: (0, f.Xx)(
              "#UserGameNotes_DeleteNote",
            ),
          };
        return o.createElement(
          "div",
          { className: De.NoteEditorArea },
          !y &&
            o.createElement(ne, {
              schema: Ae.pm_schema,
              view: a,
              refUpdateToolbar: c,
              className: De.Toolbar,
              bSpellcheckEnabled: T,
              setSpellcheckEnabled: N,
            }),
          o.createElement(Pe, {
            schemaConfig: Ae,
            className: De.EditorInput,
            bbcode: S,
            onUpdate: x,
            refView: i,
            onClickURL: v,
            bSpellcheckEnabled: T,
            uploadImage: k,
            panelProps: P,
          }),
          !y && o.createElement(Oe, { note: t, bDirty: n }),
        );
      }
      function Oe(e) {
        const { note: t, bDirty: n } = e,
          [r, a, i] = (0, Q.X9)(!1),
          l = "single" == o.useContext(u).mode,
          s = p(),
          c = E(t, s),
          m = o.useCallback(() => {
            !n && t.not_persisted ? c.mutate() : a();
          }, [n, t, c, a]);
        return o.createElement(
          "div",
          { className: De.NoteActions },
          r && o.createElement(je, { note: t, closeModal: i, deleteNote: c }),
          o.createElement(
            J.HP,
            { toolTipContent: "#UserGameNotes_DeleteNote", direction: "top" },
            o.createElement(H.zx, { onClick: m }, o.createElement(A.rFk, null)),
          ),
          l && o.createElement(Xe, { bDirty: n }),
        );
      }
      function Xe(e) {
        const { bDirty: t } = e,
          n = p();
        return t
          ? o.createElement(
              H.KM,
              { onClick: () => n(), className: De.CloseWindowButton },
              (0, f.Xx)("#Button_SaveAndClose"),
            )
          : o.createElement(
              H.zx,
              { onClick: () => n(), className: De.CloseWindowButton },
              (0, f.Xx)("#Button_Close"),
            );
      }
      function je(e) {
        const { note: t, closeModal: n, deleteNote: r } = e;
        return o.createElement(
          U.Yy,
          { active: !0 },
          o.createElement(U.uH, {
            strTitle: (0, f.Xx)("#UserGameNotes_DeleteNote"),
            strDescription: (0, f.Xx)("#UserGameNotes_PromptDelete"),
            onOK: () => r.mutate(),
            bOKDisabled: r.isLoading,
            strOKButtonText: (0, f.Xx)("#Button_Delete"),
            closeModal: n,
          }),
        );
      }
      function $e(e) {
        let t = "";
        for (let n = 0; n < e.content.childCount; n++) {
          const o = e.content.child(n);
          if (o.isText) t += o.text;
          else {
            if (((t = t.trim()), t.length > 4)) return t;
            if (((t = $e(o)), t.length > 4)) return t;
          }
        }
        return t.trim();
      }
      function We() {
        const e = (0, r.$B)(),
          t = v(
            "appid" in e.params && Number(e.params.appid),
            "shortcut_name" in e.params && e.params.shortcut_name,
          );
        let n = e.params.noteid;
        const a = (0, r.k6)(),
          i = (function (e) {
            const t = (0, s.useQueryClient)(),
              n = h();
            return o.useCallback(() => {
              const o = (0, f.Xx)("#UserGameNotes_UntitledNote_Title"),
                r = n.NewNote(e, o);
              return _(t, e, (e) => [...e, r]), r.id;
            }, [t, n, e]);
          })(t),
          { data: l, isLoading: c } = b(t);
        let m;
        l && n && (m = l.find((e) => e.id === n)),
          o.useLayoutEffect(() => {
            !l ||
              (n && l.find((e) => e.id === n)) ||
              (l.length > 0 && l[0].id ? ze(a, t, l[0].id) : ze(a, t, i()));
          }, [a, t, n, l, i]);
        const u = o.createElement(
          J.HP,
          { toolTipContent: "#UserGameNotes_NewNote", direction: "top" },
          o.createElement(
            H.zx,
            {
              className: De.NewNoteButton,
              onClick: () => {
                const e = i();
                ze(a, t, e);
              },
            },
            o.createElement(A.ex9, null),
          ),
        );
        return l
          ? o.createElement(Ve, {
              noteParent: t,
              notes: l,
              activeNoteID: null == m ? void 0 : m.id,
              actions: u,
            })
          : null;
      }
      function Ve(e) {
        const { noteParent: t, notes: n, activeNoteID: a, actions: i } = e,
          [l, s] = (0, te.i4)("NotesListCollapsed", !1),
          c = o.useContext(u).bPinnedView,
          m = (0, Se.id)(),
          d = n.map((e) => {
            var t;
            return {
              title:
                (null === (t = e.title) || void 0 === t ? void 0 : t.length) > 0
                  ? e.title
                  : (0, f.Xx)("#UserGameNotes_Untitled"),
              identifier: e.id,
              content: o.createElement(Me, { note: e }),
              pageClassName: De.NotePage,
              hideTitle: !0,
            };
          }),
          p = (0, r.k6)(),
          h = o.useCallback((e) => ze(p, t, e), [p, t]);
        return o.createElement(H.TI, {
          title: (0, f.Xx)("#UserGameNotes_NotesList"),
          pages: d,
          className: (0, Z.Z)(De.NotesPagedSettings, c && De.PinnedView),
          page: a,
          onPageRequested: h,
          bottomControls: i,
          hideList: l,
          toggleHideList: c || m ? void 0 : () => s(!l),
        });
      }
      function ze(e, t, n) {
        let o;
        (o =
          "appid" in t
            ? a.AppNotes(t.appid, n)
            : a.ShortcutNotes(t.shortcut, n)),
          e.replace(o, e.location.state);
      }
      var Ze = n(61578);
      class Qe {
        constructor(e) {
          this.m_SteamInterface = e;
        }
        GetGamesWithNotes() {
          return (0, l.mG)(this, void 0, void 0, function* () {
            const e = N.gA.Init(Ze.SX);
            return (yield Ze.Rr.GetGamesWithNotes(
              this.m_SteamInterface.GetServiceTransport(),
              e,
            ))
              .Body()
              .toObject().games_with_notes;
          });
        }
        GetGameNotesList(e, t) {
          return (0, l.mG)(this, void 0, void 0, function* () {
            const n = N.gA.Init(Ze.DI);
            this.SetParentOnRequest(n, e), n.Body().set_include_content(t);
            const o = yield Ze.Rr.GetNotesForGame(
              this.m_SteamInterface.GetServiceTransport(),
              n,
            );
            return o.Body().notes().length
              ? o.Body().toObject().notes
              : [this.NewNote(e, "New Note")];
          });
        }
        SaveGameNote(e, t, n) {
          return (0, l.mG)(this, void 0, void 0, function* () {
            const o = N.gA.Init(Ze.ge);
            e.not_persisted
              ? o.Body().set_create_new(!0)
              : o.Body().set_note_id(e.id),
              e.appid
                ? o.Body().set_appid(e.appid)
                : o.Body().set_shortcut_name(e.shortcut_name),
              o.Body().set_title(t),
              o.Body().set_content(n);
            const r = yield Ze.Rr.SaveNote(
              this.m_SteamInterface.GetServiceTransport(),
              o,
            );
            if (!r.BSuccess()) throw r.GetErrorMessage();
            return r.Body().note_id();
          });
        }
        DeleteGameNote(e, t) {
          return (0, l.mG)(this, void 0, void 0, function* () {
            const n = N.gA.Init(Ze.$$);
            this.SetParentOnRequest(n, e), n.Body().set_note_id(t);
            const o = yield Ze.Rr.DeleteNote(
              this.m_SteamInterface.GetServiceTransport(),
              n,
            );
            if (!o.BSuccess()) throw o.GetErrorMessage();
            return t;
          });
        }
        SyncNotes() {
          return (0, l.mG)(this, void 0, void 0, function* () {});
        }
        SetParentOnRequest(e, t) {
          "appid" in t
            ? e.Body().set_appid(t.appid)
            : e.Body().set_shortcut_name(t.shortcut);
        }
        NewNote(e, t) {
          let n = {};
          return (
            "appid" in e ? (n.appid = e.appid) : (n.shortcut_name = e.shortcut),
            Object.assign(
              Object.assign({ id: "temp_" + Qe.sm_lastNoteID++ }, n),
              {
                ordinal: 0,
                time_created: Date.now() / 1e3,
                time_modified: Date.now() / 1e3,
                title: t,
                content: "",
                not_persisted: !0,
              },
            )
          );
        }
        UploadImage(e, t, n) {
          return Promise.reject("NYI");
        }
      }
      function qe(e) {
        const t = (0, y.lS)(),
          [n] = o.useState(() => new Qe(t));
        return o.createElement(
          d,
          { mode: "page", store: n },
          o.createElement(
            r.rs,
            null,
            o.createElement(r.AW, { path: a.List() }, o.createElement(D, null)),
            o.createElement(
              r.AW,
              { path: a.AppNotes(":appid", ":noteid?") },
              o.createElement(We, null),
            ),
            o.createElement(
              r.AW,
              null,
              o.createElement(r.l_, { to: `${a.List()}` }),
            ),
          ),
        );
      }
      Qe.sm_lastNoteID = 0;
    },
  },
]);
