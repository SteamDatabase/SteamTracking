/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [6838],
  {
    67802: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        Page: "gamenotes_Page_ZUB8z",
        Content: "gamenotes_Content_1aZdz",
        NotesPagedSettings: "gamenotes_NotesPagedSettings_1dBCP",
        NotePage: "gamenotes_NotePage_2r0iB",
        PinnedView: "gamenotes_PinnedView_3mIft",
        Toolbar: "gamenotes_Toolbar_A6mhR",
        NoteActions: "gamenotes_NoteActions_3uGOy",
        NoteEditorArea: "gamenotes_NoteEditorArea_3WOF4",
        EditorInput: "gamenotes_EditorInput_3zWun",
        NewNoteButton: "gamenotes_NewNoteButton_2J6kv",
        CloseWindowButton: "gamenotes_CloseWindowButton_G0Fgh",
      };
    },
    3564: (e) => {
      e.exports = {
        Hover: "pmhover_Hover_3tNcT",
        Link: "pmhover_Link_ovQsF",
        LinkHelp: "pmhover_LinkHelp_2Az4l",
      };
    },
    54146: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        Container: "prosemirror_Container_3lEt5",
        ToolbarRow: "prosemirror_ToolbarRow_2H40R",
        CommandButton: "prosemirror_CommandButton_1-R1U",
        Toggled: "prosemirror_Toggled_41y1p",
        Gap: "prosemirror_Gap_2BPaP",
        Spacer: "prosemirror_Spacer_2Zt31",
        ExpandButton: "prosemirror_ExpandButton_3454x",
      };
    },
    74251: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => Nt });
      var o = n(89526),
        r = n(59934);
      const a = {
        List: () => "/notes/list",
        AppNotes: (e, t) => `/notes/app/${e}/${null != t ? t : ""}`,
        ShortcutNotes: (e, t) => `/notes/shortcut/${e}/${null != t ? t : ""}`,
      };
      var s = n(565),
        i = n(33940),
        l = n(5615);
      function c(e) {
        return e.trim();
      }
      function d(e) {
        return e.appid ? { appid: e.appid } : { shortcut: e.shortcut_name };
      }
      const u = o.createContext({ mode: "page", store: null });
      function m(e) {
        const {
            mode: t,
            store: n,
            closePopup: r,
            bPinnedView: a,
            onClickURL: s,
            bSpellcheckEnabled: i = !0,
            setSpellcheckEnabled: l,
            children: c,
          } = e,
          d = o.useMemo(
            () => ({
              mode: t,
              store: n,
              closePopup: r,
              bPinnedView: a,
              onClickURL: s,
              bSpellcheckEnabled: i,
              setSpellcheckEnabled: l,
            }),
            [t, n, r, a, s, i, l],
          );
        return o.createElement(u.Provider, { value: d }, c);
      }
      function p() {
        return o.useContext(u).closePopup;
      }
      function g() {
        return o.useContext(u).store;
      }
      var h = n(14826);
      function f(e) {
        return "appid" in e
          ? ["GameNotes", "NotesByAppID", e.appid]
          : ["GameNotes", "NotesForShortcut", c(e.shortcut)];
      }
      function b(e) {
        const t = g();
        return (0, l.useQuery)(
          f(e),
          () =>
            (0, i.mG)(this, void 0, void 0, function* () {
              return (yield t.GetGameNotesList(e, !0)) || [];
            }),
          { enabled: !!e },
        );
      }
      function _(e, t) {
        const n = (0, l.useQueryClient)(),
          o = g(),
          r = e.id;
        return (0, l.useMutation)(
          () =>
            (0, i.mG)(this, void 0, void 0, function* () {
              return e.not_persisted ? r : yield o.DeleteGameNote(d(e), r);
            }),
          {
            onSuccess() {
              v(n, d(e), (e) => e.filter((e) => e.id != r)), t && t();
            },
          },
        );
      }
      function v(e, t, n) {
        e.getQueryData(f(t)) && e.setQueryData(f(t), n);
      }
      function k(e, t) {
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
      var E = n(92994),
        C = n.n(E),
        T = n(68333),
        N = n(16744),
        B = n(27070),
        y = n(44973),
        w = n(40442);
      let A;
      const S = 864e5;
      function x(e) {
        return `appinfo_${e}_${y.De.LANGUAGE}`;
      }
      function M(e) {
        return Boolean(e && Date.now() - e.timeCached < S);
      }
      function D(e) {
        const t = (0, B.bY)(),
          n = (0, B.y$)();
        return (0, l.useQuery)(
          ["appinfo", e],
          () =>
            (0, i.mG)(this, void 0, void 0, function* () {
              return (function (e, t) {
                return (
                  A ||
                    (A = new (C())(
                      (n) =>
                        (0, i.mG)(this, void 0, void 0, function* () {
                          const o = new Map();
                          (yield Promise.all(n.map((e) => t.GetObject(x(e)))))
                            .filter(M)
                            .forEach(({ value: e }) => o.set(e.appid, e));
                          const r = n.slice().filter((e) => !o.has(e));
                          if (r.length) {
                            const n = T.gA.Init(N.Fi);
                            n.Body().set_language((0, w.jM)(y.De.LANGUAGE)),
                              n.Body().set_appids(r);
                            const a = yield N.AE.GetApps(e, n);
                            if (1 != a.GetEResult()) throw a.GetErrorMessage();
                            a.Body()
                              .toObject()
                              .apps.forEach((e) => {
                                t.StoreObject(x(e.appid), {
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
                  A
                );
              })(t, n).load(e);
            }),
          { staleTime: S, enabled: !!e },
        ).data;
      }
      var O = n(69338);
      function P() {
        const { data: e, isLoading: t } = (function () {
          const e = g();
          return (0, l.useQuery)(["GameNotes", "GamesWithNotes"], () =>
            e.GetGamesWithNotes(),
          );
        })();
        return t
          ? o.createElement(O.V, { msDelayAppear: 300 })
          : o.createElement(
              "div",
              null,
              o.createElement(
                "h1",
                null,
                (0, h.Xx)("#UserGameNotes_NotesList"),
              ),
              o.createElement(
                "ul",
                null,
                e.map((e) => o.createElement(F, { key: e.appid, game: e })),
              ),
            );
      }
      function F(e) {
        const { game: t } = e,
          n = D(t.appid);
        return o.createElement(
          "li",
          null,
          o.createElement(
            s.rU,
            { to: a.AppNotes(t.appid) },
            null == n ? void 0 : n.name,
          ),
        );
      }
      var G = n(79769),
        I = n(50454),
        L = n(25508),
        R = n(26464);
      const H = new I.s("ReactUsageReporting").Debug,
        U = 1e3 * L._H.PerMinute;
      class X {
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
          setTimeout(() => this.CheckSend(), U);
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
          H("Route match: " + e), this.ReportInternal(e, this.m_mapRoutes);
        }
        ReportTrackedComponent(e) {
          H("Tracked component: " + e),
            this.ReportInternal(e, this.m_mapComponents);
        }
        ReportTrackedAction(e) {
          H("User action: " + e), this.ReportInternal(e, this.m_mapActions);
        }
        ShouldSendMetricsImmediately() {
          return this.m_reportCount >= 100;
        }
        SendMetrics() {
          if (!this.m_bInitialized) return;
          const e = T.gA.Init(G.YH);
          e.Body().set_product(this.m_strProduct),
            e.Body().set_version(this.m_strVersion),
            this.m_mapRoutes.forEach((t, n) => {
              let o = new G.Be();
              o.set_route(n), o.set_count(t), e.Body().add_routes(o);
            }),
            this.m_mapComponents.forEach((t, n) => {
              let o = new G.Hy();
              o.set_component(n), o.set_count(t), e.Body().add_components(o);
            }),
            this.m_mapActions.forEach((t, n) => {
              let o = new G.Js();
              o.set_action(n), o.set_count(t), e.Body().add_actions(o);
            }),
            this.m_mapRoutes.clear(),
            this.m_mapComponents.clear(),
            this.m_mapActions.clear(),
            (this.m_reportCount = 0),
            G.TF.ReportReactUsage(this.m_transport, e);
        }
        get version() {
          return this.m_strVersion;
        }
        get product() {
          return this.m_strProduct;
        }
      }
      (0, i.gn)([R.a], X.prototype, "CheckSend", null);
      const $ = new X();
      var j = n(57605),
        W = n(16826),
        z = n(99307),
        V = n(89205),
        Z = n(95985),
        K = n(72225),
        Q = n(48348),
        Y = n.n(Q),
        J = n(19304);
      function q(e, t) {
        return () => [e, { class: t }, 0];
      }
      const ee = {
          doc: { content: "block+" },
          text: { group: "inline" },
          paragraph: {
            content: "inline*",
            group: "block",
            parseDOM: [{ tag: "p" }],
            toDOM: q("p", (0, J.Z)("pm_paragraph", Y().Paragraph)),
          },
          heading: {
            attrs: { level: { default: 1 } },
            content: "inline*",
            group: "block",
            defining: !0,
            parseDOM: [
              { tag: "h1", attrs: { level: 1 } },
              { tag: "h2", attrs: { level: 2 } },
              { tag: "h3", attrs: { level: 3 } },
              { tag: "h4", attrs: { level: 4 } },
              { tag: "h5", attrs: { level: 5 } },
            ],
            toDOM: (e) => [
              "h" + e.attrs.level,
              {
                class:
                  `BB_Header${e.attrs.level} ` + Y()[`Header${e.attrs.level}`],
              },
              0,
            ],
          },
          image: {
            inline: !0,
            attrs: {
              src: {},
              alt: { default: null },
              title: { default: null },
            },
            group: "inline",
            draggable: !0,
            parseDOM: [
              {
                tag: "img[src]",
                getAttrs: (e) => ({
                  src: e.getAttribute("src"),
                  title: e.getAttribute("title"),
                  alt: e.getAttribute("alt"),
                }),
              },
            ],
            toDOM(e) {
              const { src: t, alt: n, title: o } = e.attrs;
              return ["img", { src: t, alt: n, title: o, class: Y().Image }];
            },
          },
          hard_break: {
            inline: !0,
            group: "inline",
            selectable: !1,
            parseDOM: [{ tag: "br" }],
            toDOM: () => ["br"],
          },
          bullet_list: Object.assign(Object.assign({}, K.iI), {
            content: "list_item+",
            group: "block",
            toDOM: q("ul", Y().List),
          }),
          ordered_list: Object.assign(Object.assign({}, K.dq), {
            content: "list_item+",
            group: "block",
            toDOM: q("ol", Y().OrderedList),
          }),
          list_item: Object.assign(Object.assign({}, K.qb), {
            content: "paragraph block*",
            toDOM: q("li", Y().ListItem),
          }),
          code_block: {
            content: "inline*",
            marks: "",
            group: "block",
            code: !0,
            defining: !0,
            parseDOM: [{ tag: "pre", preserveWhitespace: "full" }],
            toDOM: () => [
              "pre",
              { class: Y().CodeBlock },
              ["code", { class: Y().Code }, 0],
            ],
          },
        },
        te = {
          strong: {
            parseDOM: [
              { tag: "strong" },
              {
                tag: "b",
                getAttrs: (e) => "normal" != e.style.fontWeight && null,
              },
              {
                style: "font-weight=400",
                clearMark: (e) => "strong" == e.type.name,
              },
              {
                style: "font-weight",
                getAttrs: (e) => /^(bold(er)?|[5-9]\d{2,})$/.test(e) && null,
              },
            ],
            toDOM: q("b", (0, J.Z)("BB_Bold", Y().Bold)),
          },
          italic: {
            parseDOM: [
              { tag: "i" },
              { tag: "em" },
              { style: "font-style=italic" },
              {
                style: "font-style=normal",
                clearMark: (e) => "em" == e.type.name,
              },
            ],
            toDOM: q("i", (0, J.Z)("BB_Italic", Y().Italic)),
          },
          underline: {
            parseDOM: [{ tag: "u" }, { style: "text-decoration=underline" }],
            toDOM: q("u", (0, J.Z)("BB_Underline", Y().Underline)),
          },
          strike: {
            parseDOM: [{ style: "text-decoration=line-through" }],
            toDOM: q("span", (0, J.Z)("BB_Strike", Y().Strike)),
          },
          code: {
            parseDOM: [{ tag: "code" }],
            toDOM: q("code", (0, J.Z)("BB_Code", Y().Code)),
          },
          link: {
            attrs: { href: {}, title: { default: null } },
            inclusive: !1,
            parseDOM: [
              {
                tag: "a[href]",
                getAttrs: (e) => ({
                  href: e.getAttribute("href"),
                  title: e.getAttribute("title"),
                }),
              },
            ],
            toDOM(e) {
              let { href: t, title: n } = e.attrs;
              return ["a", { href: t, title: n }, 0];
            },
          },
        },
        ne = new Z.V_({ nodes: ee, marks: te });
      function oe(e) {
        return { tag: `h${e.level}` };
      }
      const re = new Map([
        [
          "p",
          {
            Constructor: { node: ne.nodes.paragraph },
            autocloses: !0,
            skipFollowingNewline: !0,
          },
        ],
        [
          "h1",
          {
            Constructor: {
              node: ne.nodes.heading,
              BBArgsToAttrs: () => ({ level: 1 }),
              AttrsToBBArgs: oe,
            },
            skipFollowingNewline: !0,
          },
        ],
        [
          "h2",
          {
            Constructor: {
              node: ne.nodes.heading,
              BBArgsToAttrs: () => ({ level: 2 }),
              AttrsToBBArgs: oe,
            },
            skipFollowingNewline: !0,
          },
        ],
        [
          "h3",
          {
            Constructor: {
              node: ne.nodes.heading,
              BBArgsToAttrs: () => ({ level: 3 }),
              AttrsToBBArgs: oe,
            },
            skipFollowingNewline: !0,
          },
        ],
        [
          "h4",
          {
            Constructor: {
              node: ne.nodes.heading,
              BBArgsToAttrs: () => ({ level: 4 }),
              AttrsToBBArgs: oe,
            },
            skipFollowingNewline: !0,
          },
        ],
        [
          "h5",
          {
            Constructor: {
              node: ne.nodes.heading,
              BBArgsToAttrs: () => ({ level: 5 }),
              AttrsToBBArgs: oe,
            },
            skipFollowingNewline: !0,
          },
        ],
        ["b", { Constructor: { mark: ne.marks.strong } }],
        ["i", { Constructor: { mark: ne.marks.italic } }],
        ["u", { Constructor: { mark: ne.marks.underline } }],
        ["strike", { Constructor: { mark: ne.marks.strike } }],
        [
          "url",
          {
            Constructor: {
              mark: ne.marks.link,
              BBArgsToAttrs: (e) => ({ href: e[""] }),
              AttrsToBBArgs: (e) => ({ args: { "": e.href } }),
            },
          },
        ],
        [
          "list",
          {
            Constructor: { node: ne.nodes.bullet_list },
            skipFollowingNewline: !0,
          },
        ],
        [
          "olist",
          {
            Constructor: { node: ne.nodes.ordered_list },
            skipFollowingNewline: !0,
          },
        ],
        [
          "*",
          {
            Constructor: { node: ne.nodes.list_item },
            skipFollowingNewline: !0,
            autocloses: !0,
          },
        ],
        [
          "code",
          {
            Constructor: { node: ne.nodes.code_block },
            skipFollowingNewline: !0,
          },
        ],
        ["c", { Constructor: { mark: ne.marks.code } }],
        [
          "img",
          {
            Constructor: {
              node: ne.nodes.image,
              BBArgsToAttrs: (e) => ({ src: e.src }),
              AttrsToBBArgs: (e) => ({ args: { src: e.src } }),
            },
          },
        ],
      ]);
      class ae {
        constructor() {
          this.m_nodes = [];
        }
        AppendText(e, t) {
          let n = 0;
          for (let t = e.indexOf("\n", n); -1 !== t; t = e.indexOf("\n", n))
            n != t && this.m_nodes.push(ne.text(e.substring(n, t))),
              this.m_nodes.push(ne.nodes.hard_break.create()),
              (n = t + 1);
          n < e.length && this.m_nodes.push(ne.text(e.substring(n)));
        }
        AppendNode(e) {
          Array.isArray(e) ? this.m_nodes.push(...e) : this.m_nodes.push(e);
        }
        GetElements() {
          return this.m_nodes;
        }
      }
      function se(e, t, ...n) {
        const o = e.BBArgsToAttrs ? e.BBArgsToAttrs(t.args) : void 0;
        return "node" in e
          ? e.node.create(o, n)
          : n.map((t) => t.mark([...t.marks, e.mark.create(o)]));
      }
      class ie extends V.AX {
        constructor(e) {
          super(e, () => new ae());
        }
        ParseBBCode(e) {
          const t = this.Parse(e, se, !0);
          return ne.topNodeType.create(
            {},
            (function (e) {
              let t = [],
                n = [];
              for (const o of e)
                if (o.isText) n.push(o);
                else {
                  const e = o.type == ne.nodes.hard_break;
                  n.length
                    ? (t.push(ne.nodes.paragraph.create({}, n)),
                      (n = []),
                      e || t.push(o))
                    : e
                    ? t.push(ne.nodes.paragraph.create())
                    : t.push(o);
                }
              return t;
            })(t),
          );
        }
      }
      var le = n(11837),
        ce = n(23801);
      function de(e, t = re) {
        const n = { mapMarks: new Map(), mapNodes: new Map() };
        return (
          t.forEach((e, t) => {
            "node" in e.Constructor
              ? n.mapNodes.set(e.Constructor.node, {
                  tag: t,
                  AttrsToBBArgs: e.Constructor.AttrsToBBArgs,
                })
              : n.mapMarks.set(e.Constructor.mark, {
                  tag: t,
                  AttrsToBBArgs: e.Constructor.AttrsToBBArgs,
                });
          }),
          ue(n, e)
        );
      }
      function ue(e, t) {
        let n = t.marks,
          o = "";
        const r = e.mapNodes.get(t.type),
          { tag: a, args: s } = pe(r, t.attrs);
        return (
          a && (o += (0, V.lW)(a, s)),
          t.content.forEach((t) => {
            ([o, n] = me(e, n, t.marks, o)),
              ([o, n] = (function (e, t, n, o) {
                let r;
                for (const a of n)
                  if (-1 === t.indexOf(a)) {
                    r || (r = t.slice());
                    const n = e.mapMarks.get(a.type);
                    r.push(a);
                    const { args: s, tag: i } = pe(n, a.attrs);
                    o += (0, V.lW)(i, s || {});
                  }
                return [o, null != r ? r : t];
              })(e, n, t.marks, o)),
              t.type.isText
                ? (o += (0, V.bU)(t.text))
                : t.type == ne.nodes.hard_break
                ? (o += "\n")
                : (o += ue(e, t));
          }),
          ([o] = me(e, n, [], o)),
          a && (o += (0, V.Ec)(a)),
          o
        );
      }
      function me(e, t, n, o) {
        const r = [];
        for (const e of t) -1 === n.indexOf(e) && r.push(e);
        if (!r.length) return [o, t];
        const a = t.slice();
        for (
          ;
          r.length && ((0, ce.X)(a.length, "no marks left to close"), a.length);

        ) {
          const t = a.pop(),
            n = e.mapMarks.get(t.type),
            { tag: s } = pe(n, t.attrs);
          (o += (0, V.Ec)(s)), le.Zf(r, t);
        }
        return [o, a];
      }
      function pe(e, t) {
        let n,
          o = {};
        return (
          e &&
            (e.AttrsToBBArgs && ({ tag: n, args: o } = e.AttrsToBBArgs(t)),
            n || (n = e.tag),
            o || (o = {})),
          { tag: n, args: o }
        );
      }
      var ge = n(40267),
        he = n(83116),
        fe = n(73961);
      function be(e) {
        const {
            visible: t = !0,
            className: n,
            keepMounted: r = !1,
            expandDirection: a = "height",
            msAnimationDuration: s = 250,
            children: i,
          } = e,
          {
            style: l,
            active: c,
            refDiv: d,
          } = (function (e, t = "height", n = 250) {
            const r = o.useRef(),
              a = o.useRef(!0),
              [s, i] = o.useState("idle"),
              [l, c] = o.useState({});
            o.useLayoutEffect(() => {
              a.current ? (a.current = !0) : i("start");
            }, [e]),
              o.useLayoutEffect(() => {
                const n = r.current,
                  o = "height" == t ? "scrollHeight" : "scrollWidth";
                if ("start" == s) {
                  const r = n[o];
                  c((n) =>
                    Object.assign(
                      Object.assign({ [t]: e ? "0px" : `${r}px` }, n),
                      { overflow: "hidden" },
                    ),
                  ),
                    i("active");
                } else if ("active" == s) {
                  n.scrollTop;
                  const r = n[o];
                  c({ overflow: "hidden", [t]: e ? `${r}px` : "0px" });
                  const a = () => {
                    fe.unstable_batchedUpdates(() => {
                      c({}), i("idle");
                    });
                  };
                  return (
                    n.addEventListener("transitionend", a),
                    () => {
                      n.removeEventListener("transitionend", a);
                    }
                  );
                }
              }, [s, e]);
            const d = Object.assign(Object.assign({}, l), {
              transition: `${t} ${n}ms`,
            });
            return { style: d, active: "idle" != s, refDiv: r };
          })(t, a, s);
        return t || c || r
          ? o.createElement("div", { className: n, ref: d, style: l }, i)
          : null;
      }
      var _e = n(47624);
      function ve(e, t) {
        o.useEffect(() => {
          if (e && t && !e.isDestroyed)
            return (
              (function (e, t) {
                const n = e.state;
                if (!e.state.plugins.includes(t)) {
                  const o = [...e.state.plugins, t];
                  e.updateState(n.reconfigure({ plugins: o }));
                }
              })(e, t),
              () =>
                (function (e, t) {
                  if (!e.isDestroyed) {
                    const n = e.state,
                      o = n.plugins.filter((e) => e !== t);
                    e.updateState(n.reconfigure({ plugins: o }));
                  }
                })(e, t)
            );
        }, [e, t]);
      }
      function ke(e, t) {
        let { from: n, $from: o, to: r, empty: a } = e.selection;
        return a
          ? !!t.isInSet(e.storedMarks || o.marks())
          : e.doc.rangeHasMark(n, r, t);
      }
      function Ee(e, t, n) {
        let { $from: o, to: r, node: a } = e.selection;
        return !a && r <= o.end() && (a = o.parent), !!a && a.hasMarkup(t, n);
      }
      function Ce(e, t, n = {}) {
        return new _e.VK(e, (e, o, r, a) => {
          const s = n instanceof Function ? n(o) : n,
            i = e.tr;
          if (o[1]) {
            const e = r + o[0].indexOf(o[1]),
              t = e + o[1].length;
            t < a && i.delete(t, a),
              e > r && i.delete(r, e),
              (a = r + o[1].length);
          }
          return i.addMark(r, a, t.create(s)), i.removeStoredMark(t), i;
        });
      }
      var Te = n(4306),
        Ne = n(54146);
      function Be(e) {
        const { children: t } = e,
          { callbacks: n, view: r } = Oe(),
          [a, s] = o.useState(() => ke(r.state, ne.marks.link)),
          i = o.useCallback((e) => s(ke(e.state, ne.marks.link)), []);
        (0, Te.Qg)(n, i);
        const [l, c, d] = (0, Te.X9)();
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            z.Yy,
            { active: l },
            o.createElement(ye, { active: l, closeModal: d, view: r }),
          ),
          o.createElement(
            j.zx,
            {
              className: (0, J.Z)(Ne.CommandButton, a && Ne.Toggled),
              onMouseDown: (e) => {
                e.preventDefault(), c();
              },
              title: (0, h.Xx)("#FormattingToolbar_InsertLink"),
            },
            t,
          ),
        );
      }
      const ye = o.memo(function (e) {
        const { active: t, closeModal: n, view: r } = e,
          [a, s] = o.useState(""),
          [i, l] = o.useState(""),
          c = o.useRef(),
          d = o.useRef();
        return (
          o.useLayoutEffect(() => {
            if (t) {
              let e = "";
              r.state.selection.empty ||
                (e = r.state.doc.cut(
                  r.state.selection.from,
                  r.state.selection.to,
                ).textContent),
                s(e),
                e.startsWith("http")
                  ? (l(e),
                    c.current.Focus(),
                    window.setTimeout(() => {
                      c.current.element.select();
                    }, 0))
                  : 0 == e.length
                  ? c.current.Focus()
                  : d.current.Focus();
            }
          }, [t, r]),
          o.createElement(
            z.uH,
            {
              onOK: () => {
                r.dispatch(
                  r.state.tr.replaceRangeWith(
                    r.state.selection.from,
                    r.state.selection.to,
                    ne.text(a || i, [ne.marks.link.create({ href: i })]),
                  ),
                ),
                  r.focus(),
                  n();
              },
              closeModal: n,
              strTitle: (0, h.Xx)("#FormattingToolbar_InsertLink"),
              strOKButtonText: (0, h.Xx)("#FormattingToolbar_InsertLink"),
              bOKDisabled: 0 == i.length,
            },
            o.createElement(j.II, {
              ref: c,
              value: a,
              onChange: (e) => s(e.currentTarget.value),
              label: (0, h.Xx)("#FormattingToolbar_LinkText"),
            }),
            o.createElement(j.II, {
              ref: d,
              value: i,
              onChange: (e) => l(e.currentTarget.value),
              label: (0, h.Xx)("#FormattingToolbar_LinkAddress"),
            }),
          )
        );
      });
      var we = n(85246),
        Ae = n(84343),
        Se = n(45820),
        xe = n(51438);
      function Me(e) {
        const {
            view: t,
            refUpdateToolbar: n,
            className: r,
            bSpellcheckEnabled: a,
            setSpellcheckEnabled: s,
          } = e,
          [i, l] = (0, Se.i4)("FormattingToolbar_Expanded", !1),
          [c] = o.useState(() => new we.pB());
        o.useEffect(
          () => (
            (0, Te.k$)(n, () => c.Dispatch(t)), () => (0, Te.k$)(n, void 0)
          ),
          [c, t, n],
        );
        const d = o.useMemo(() => ({ callbacks: c, view: t }), [c, t]);
        return t
          ? o.createElement(
              De.Provider,
              { value: d },
              o.createElement(
                "div",
                { className: (0, J.Z)(Ne.Toolbar, r) },
                o.createElement(
                  Pe,
                  null,
                  o.createElement(
                    Ae.HP,
                    {
                      toolTipContent: "#FormattingToolbar_Undo",
                      direction: "bottom",
                    },
                    o.createElement(
                      Ie,
                      {
                        title: (0, h.Xx)("#FormattingToolbar_Undo"),
                        command: he.Yw,
                        fnEnabledCheck: He,
                      },
                      o.createElement(W.DeA, null),
                    ),
                  ),
                  o.createElement(
                    Ae.HP,
                    {
                      toolTipContent: "#FormattingToolbar_Redo",
                      direction: "bottom",
                    },
                    o.createElement(
                      Ie,
                      {
                        title: (0, h.Xx)("#FormattingToolbar_Redo"),
                        command: he.KX,
                        fnEnabledCheck: Ue,
                      },
                      o.createElement(W.Jwt, null),
                    ),
                  ),
                  o.createElement("div", { className: Ne.Gap }),
                  o.createElement(
                    Ae.HP,
                    {
                      toolTipContent: "#FormattingToolbar_Bold",
                      direction: "bottom",
                    },
                    o.createElement(
                      Ge,
                      {
                        title: (0, h.Xx)("#FormattingToolbar_Bold"),
                        mark: ne.marks.strong,
                      },
                      o.createElement(W.DUs, null),
                    ),
                  ),
                  o.createElement(
                    Ae.HP,
                    {
                      toolTipContent: "#FormattingToolbar_Italic",
                      direction: "bottom",
                    },
                    o.createElement(
                      Ge,
                      {
                        title: (0, h.Xx)("#FormattingToolbar_Italic"),
                        mark: ne.marks.italic,
                      },
                      o.createElement(W.tzG, null),
                    ),
                  ),
                  o.createElement(
                    Ae.HP,
                    {
                      toolTipContent: "#FormattingToolbar_Underline",
                      direction: "bottom",
                    },
                    o.createElement(
                      Ge,
                      {
                        title: (0, h.Xx)("#FormattingToolbar_Underline"),
                        mark: ne.marks.underline,
                      },
                      o.createElement(W.nC9, null),
                    ),
                  ),
                  o.createElement(
                    Ae.HP,
                    {
                      toolTipContent: "#FormattingToolbar_Strike",
                      direction: "bottom",
                    },
                    o.createElement(
                      Ge,
                      {
                        title: (0, h.Xx)("#FormattingToolbar_Strike"),
                        mark: ne.marks.strike,
                      },
                      o.createElement(W.z$U, null),
                    ),
                  ),
                  o.createElement(
                    Ae.HP,
                    {
                      toolTipContent: "#FormattingToolbar_InlineCode",
                      direction: "bottom",
                    },
                    o.createElement(
                      Ge,
                      {
                        title: (0, h.Xx)("#FormattingToolbar_InlineCode"),
                        mark: ne.marks.code,
                      },
                      o.createElement(W.l2k, null),
                    ),
                  ),
                  o.createElement("div", { className: Ne.Spacer }),
                  o.createElement(
                    Ae.HP,
                    {
                      toolTipContent: "#FormattingToolbar_ExpandOptions",
                      direction: "bottom",
                    },
                    o.createElement(
                      j.zx,
                      {
                        className: (0, J.Z)(
                          Ne.CommandButton,
                          Ne.ExpandButton,
                          i && Ne.Toggled,
                        ),
                        onClick: () => l(!i),
                      },
                      o.createElement(W.Tt3, null),
                    ),
                  ),
                ),
                o.createElement(
                  Pe,
                  { visible: i },
                  o.createElement(
                    Ae.HP,
                    {
                      toolTipContent: "#FormattingToolbar_Paragraph",
                      direction: "bottom",
                    },
                    o.createElement(
                      Fe,
                      {
                        nodeType: ne.nodes.paragraph,
                        title: (0, h.Xx)("#FormattingToolbar_Paragraph"),
                      },
                      o.createElement(W.Dos, null),
                    ),
                  ),
                  o.createElement(
                    Ae.HP,
                    {
                      toolTipContent: "#FormattingToolbar_HeadingLevel1",
                      direction: "bottom",
                    },
                    o.createElement(
                      Fe,
                      {
                        nodeType: ne.nodes.heading,
                        attrs: { level: 1 },
                        title: (0, h.Xx)("#FormattingToolbar_HeadingLevelN", 1),
                      },
                      o.createElement(W.geY, null),
                    ),
                  ),
                  o.createElement(
                    Ae.HP,
                    {
                      toolTipContent: "#FormattingToolbar_HeadingLevel2",
                      direction: "bottom",
                    },
                    o.createElement(
                      Fe,
                      {
                        nodeType: ne.nodes.heading,
                        attrs: { level: 2 },
                        title: (0, h.Xx)("#FormattingToolbar_HeadingLevelN", 2),
                      },
                      o.createElement(W.y3S, null),
                    ),
                  ),
                  o.createElement(
                    Ae.HP,
                    {
                      toolTipContent: "#FormattingToolbar_HeadingLevel3",
                      direction: "bottom",
                    },
                    o.createElement(
                      Fe,
                      {
                        nodeType: ne.nodes.heading,
                        attrs: { level: 3 },
                        title: (0, h.Xx)("#FormattingToolbar_HeadingLevelN", 3),
                      },
                      o.createElement(W.Zhu, null),
                    ),
                  ),
                  o.createElement(
                    Ae.HP,
                    {
                      toolTipContent: "#FormattingToolbar_HeadingLevel4",
                      direction: "bottom",
                    },
                    o.createElement(
                      Fe,
                      {
                        nodeType: ne.nodes.heading,
                        attrs: { level: 4 },
                        title: (0, h.Xx)("#FormattingToolbar_HeadingLevelN", 4),
                      },
                      o.createElement(W.P2P, null),
                    ),
                  ),
                  o.createElement(
                    Ae.HP,
                    {
                      toolTipContent: "#FormattingToolbar_HeadingLevel5",
                      direction: "bottom",
                    },
                    o.createElement(
                      Fe,
                      {
                        nodeType: ne.nodes.heading,
                        attrs: { level: 5 },
                        title: (0, h.Xx)("#FormattingToolbar_HeadingLevelN", 5),
                      },
                      o.createElement(W.Lb, null),
                    ),
                  ),
                  o.createElement(
                    Ae.HP,
                    {
                      toolTipContent: "#FormattingToolbar_CodeBlock",
                      direction: "bottom",
                    },
                    o.createElement(
                      Fe,
                      {
                        nodeType: ne.nodes.code_block,
                        title: (0, h.Xx)("#FormattingToolbar_CodeBlock"),
                      },
                      o.createElement(W.N4L, null),
                    ),
                  ),
                  o.createElement("div", { className: Ne.Gap }),
                  o.createElement(
                    Ae.HP,
                    {
                      toolTipContent: "#FormattingToolbar_BulletedList",
                      direction: "bottom",
                    },
                    o.createElement(
                      Le,
                      {
                        title: (0, h.Xx)("#FormattingToolbar_BulletedList"),
                        command: (0, K.KI)(ne.nodes.bullet_list),
                      },
                      o.createElement(W.RAD, null),
                    ),
                  ),
                  o.createElement(
                    Ae.HP,
                    {
                      toolTipContent: "#FormattingToolbar_IndentList",
                      direction: "bottom",
                    },
                    o.createElement(
                      Le,
                      {
                        title: (0, h.Xx)("#FormattingToolbar_IndentList"),
                        command: (0, K.IB)(ne.nodes.list_item),
                      },
                      o.createElement(W.FYd, null),
                    ),
                  ),
                  o.createElement(
                    Ae.HP,
                    {
                      toolTipContent: "#FormattingToolbar_OutdentList",
                      direction: "bottom",
                    },
                    o.createElement(
                      Le,
                      {
                        title: (0, h.Xx)("#FormattingToolbar_OutdentList"),
                        command: (0, K.bw)(ne.nodes.list_item),
                      },
                      o.createElement(W.LcB, null),
                    ),
                  ),
                  o.createElement("div", { className: Ne.Gap }),
                  o.createElement(
                    Ae.HP,
                    {
                      toolTipContent: "#FormattingToolbar_InsertLink",
                      direction: "bottom",
                    },
                    o.createElement(Be, null, o.createElement(W.hhG, null)),
                  ),
                  o.createElement("div", { className: Ne.Spacer }),
                  s &&
                    o.createElement(
                      Ae.HP,
                      {
                        toolTipContent: a
                          ? "#FormattingToolbar_DisableSpellcheck"
                          : "#FormattingToolbar_EnableSpellcheck",
                        direction: "bottom",
                      },
                      o.createElement(
                        Re,
                        { toggled: a, onClick: () => s(!a) },
                        o.createElement(W.cSC, null),
                      ),
                    ),
                ),
              ),
            )
          : null;
      }
      const De = o.createContext(void 0),
        Oe = () => o.useContext(De);
      function Pe(e) {
        return o.createElement(
          be,
          { visible: e.visible },
          o.createElement(
            xe.s,
            { className: (0, J.Z)(Ne.ToolbarRow), "flow-children": "row" },
            e.children,
          ),
        );
      }
      function Fe(e) {
        const { nodeType: t, title: n, attrs: r, children: a } = e,
          { callbacks: s, view: i } = Oe(),
          [l, c] = o.useState(() => Ee(i.state, t, r)),
          d = o.useCallback((e) => c(Ee(e.state, t, r)), [t, r]);
        (0, Te.Qg)(s, d);
        const u = o.useMemo(() => (0, ge.uJ)(t, r), [r, t]);
        return o.createElement(Le, {
          command: u,
          title: n,
          toggled: l,
          children: a,
        });
      }
      function Ge(e) {
        const { mark: t, title: n, children: r } = e,
          { callbacks: a, view: s } = Oe(),
          [i, l] = o.useState(() => ke(s.state, t)),
          c = o.useCallback((e) => l(ke(e.state, t)), [t]);
        (0, Te.Qg)(a, c);
        const d = o.useMemo(() => (0, ge.w9)(t), [t]);
        return o.createElement(Le, {
          command: d,
          title: n,
          toggled: i,
          children: r,
        });
      }
      function Ie(e) {
        const { fnEnabledCheck: t } = e,
          n = (0, i._T)(e, ["fnEnabledCheck"]),
          { callbacks: r, view: a } = Oe(),
          [s, l] = o.useState(() => t(a)),
          c = o.useCallback((e) => l(t(e)), [t]);
        return (
          (0, Te.Qg)(r, c),
          o.createElement(Le, Object.assign({}, n, { disabled: !s }))
        );
      }
      function Le(e) {
        const {
            command: t,
            toggled: n,
            title: r,
            disabled: a,
            children: s,
          } = e,
          { view: i } = Oe();
        return o.createElement(
          j.zx,
          {
            className: (0, J.Z)(Ne.CommandButton, n && Ne.Toggled),
            title: r,
            onMouseDown: (e) => {
              e.preventDefault(), t(i.state, i.dispatch, i);
            },
            disabled: !0 === a,
            focusable: !a,
          },
          s,
        );
      }
      function Re(e) {
        const {
          onClick: t,
          toggled: n,
          title: r,
          disabled: a,
          children: s,
        } = e;
        return o.createElement(
          j.zx,
          {
            className: (0, J.Z)(Ne.CommandButton, n && Ne.Toggled),
            title: r,
            onMouseDown: (e) => {
              e.preventDefault(), t();
            },
            disabled: !0 === a,
          },
          s,
        );
      }
      function He(e) {
        return (0, he.of)(e.state) > 0;
      }
      function Ue(e) {
        return (0, he.AH)(e.state) > 0;
      }
      var Xe = n(22039),
        $e = n(19272),
        je = n(32194),
        We = n(94952),
        ze = n(60161),
        Ve = n(3564);
      function Ze(e) {
        const { view: t } = e,
          [n, r] = o.useState(),
          [a, s] = o.useState(),
          [i, l] = o.useState(),
          c = o.useCallback((e, t) => {
            const n = t.target;
            if ((0, ze.GB)(n) && "A" == n.nodeName) {
              const e = n.getBoundingClientRect();
              r(e.left + e.width / 2), s(e.bottom + 2), l(n);
            } else l(void 0);
            return !1;
          }, []),
          d = o.useCallback((e, t) => (l(void 0), !1), []);
        if (
          (ve(
            t,
            o.useMemo(
              () =>
                new $e.Sy({
                  props: { handleDOMEvents: { mouseover: c, mouseleave: d } },
                }),
              [c, d],
            ),
          ),
          !i)
        )
          return null;
        const u = i.getAttribute("href");
        return o.createElement(
          Ke,
          { top: a, left: n },
          o.createElement("div", { className: Ve.Link }, u),
          o.createElement(
            "div",
            { className: Ve.LinkHelp },
            (0, h.Xx)("#UserGameNotes_ClickToOpenLink"),
          ),
        );
      }
      function Ke(e) {
        const { top: t, left: n, children: r } = e,
          [a, s] = o.useState(0),
          i = o.useRef();
        o.useLayoutEffect(() => {
          s(i.current.getBoundingClientRect().width);
        }, [t, n, r]);
        const l = { top: `${t}px`, left: `${Math.max(n - a / 2, 12)}px` };
        return o.createElement(
          "div",
          { className: Ve.Hover, style: l, ref: i },
          r,
        );
      }
      const Qe = (0, ge.QF)(
          ge.uo,
          (e, t) => (
            t &&
              t(
                e.tr
                  .replaceSelectionWith(ne.nodes.hard_break.create())
                  .scrollIntoView(),
              ),
            !0
          ),
        ),
        Ye = (0, Xe.h)({
          "Mod-z": he.Yw,
          "Mod-y": he.KX,
          Backspace: _e.dU,
          "Mod-Enter": Qe,
          "Shift-Enter": Qe,
          "Mod-b": (0, ge.w9)(ne.marks.strong),
          "Mod-i": (0, ge.w9)(ne.marks.italic),
          Enter: (0, K.s6)(ne.nodes.list_item),
          "Mod-[": (0, K.IB)(ne.nodes.list_item),
          "Mod-]": (0, K.bw)(ne.nodes.list_item),
          "Shift-Ctrl-1": (0, ge.uJ)(ne.nodes.heading, { level: 1 }),
          "Shift-Ctrl-2": (0, ge.uJ)(ne.nodes.heading, { level: 2 }),
          "Shift-Ctrl-3": (0, ge.uJ)(ne.nodes.heading, { level: 3 }),
          "Shift-Ctrl-0": (0, ge.uJ)(ne.nodes.paragraph),
        });
      var Je = n(75962),
        qe = n(207),
        et = n(55811);
      function tt(e) {
        const { view: t, uploadImage: n } = e;
        return (
          ve(
            t,
            new $e.Sy({
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
                          (0, i.mG)(this, void 0, void 0, function* () {
                            for (const o of e) {
                              const e = yield fetch(o),
                                r = yield e.blob(),
                                a = (0, et.L4)(yield r.arrayBuffer());
                              nt(
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
      function nt(e, t, n) {
        n.state.doc.descendants((o, r) => {
          if ("image" === o.type.name && o.attrs.src === e) {
            const e = n.state.tr.setNodeAttribute(r, "src", t);
            n.dispatch(e);
          }
        });
      }
      const ot =
        n.p +
        "images/applications/community/image_error.svg?v=valveisgoodatcaching";
      var rt = n(22612),
        at = n(32765);
      function st(e) {
        const {
            bbcode: t,
            className: n,
            onUpdate: r,
            refView: a,
            onClickURL: s,
            bSpellcheckEnabled: i = !0,
            panelProps: l,
          } = e,
          c = o.useRef();
        c.current = r;
        const d = (0, at.qt)(),
          [u, m] = o.useState(),
          p = o.useRef(),
          g = o.useRef();
        g.current = s || it;
        const f = o.useCallback((e) => {
          var t, n;
          if (!e)
            return void (
              null === (t = p.current) ||
              void 0 === t ||
              t.destroy()
            );
          const o = p.current;
          o && o.destroy(),
            (p.current = new je.tk(e, {
              state:
                null !== (n = null == o ? void 0 : o.state) && void 0 !== n
                  ? n
                  : $e.yy.create({ schema: ne }),
              handleClickOn: (...e) =>
                (function (e, t, n, o, r, a, s) {
                  if (s && (a.ctrlKey || 1 == a.button)) {
                    const t = o
                      .resolve(n - r)
                      .marks()
                      .find((e) => e.type == ne.marks.link);
                    if (t)
                      return e(t.attrs.href, a.view), a.preventDefault(), !0;
                  }
                  return !1;
                })(g.current, ...e),
              clipboardTextParser: ct,
              transformPasted: ut,
            })),
            m(p.current),
            o || p.current.focus();
        }, []);
        o.useLayoutEffect(() => {
          const e = (function (e, t = re) {
            return new ie(t).ParseBBCode(e);
          })(t);
          p.current.updateState(
            (function (e, t) {
              const n = new $e.Sy({ view: (e) => ({ update: t }) });
              return $e.yy.create({
                schema: ne,
                doc: e,
                plugins: [(0, he.m8)(), Ye, (0, Xe.h)(ge.YR), n, lt()],
              });
            })(e, (...e) => c.current && c.current(...e)),
          );
        }, [t]),
          (0, Te.LY)(a, u);
        const b = o.useRef(),
          _ = o.useCallback(
            (e) => {
              (0, We.LP)(e, d.IN_VR);
            },
            [d.IN_VR],
          ),
          v = o.useCallback(() => {}, []),
          k = (0, We.CJ)({ onTextEntered: _, onKeyboardNavOut: v }, () => {
            var e;
            return null === (e = b.current) || void 0 === e
              ? void 0
              : e.ownerDocument.defaultView;
          }),
          E = o.useCallback(() => {
            var e, t;
            if (
              (k.ShowVirtualKeyboard(),
              !(null === (e = p.current) || void 0 === e
                ? void 0
                : e.hasFocus()))
            ) {
              null === (t = p.current) || void 0 === t || t.focus();
              let e = p.current.dom.childNodes;
              for (let t = 0; t < e.length; ++t) {
                let n = e[t],
                  o = n.offsetTop;
                if (void 0 !== o && o >= b.current.scrollTop) {
                  let e = n.getBoundingClientRect(),
                    t = { left: e.left, top: e.top },
                    o = p.current.posAtCoords(t);
                  if (null == o ? void 0 : o.pos) {
                    let e = p.current.state.doc.resolve(o.pos);
                    p.current.dispatch(
                      p.current.state.tr.setSelection($e.Bs.near(e)),
                    );
                  }
                  break;
                }
              }
            }
          }, [k]),
          C = (0, Te.BE)(b, f),
          T = o.useCallback((e) => e.currentTarget == e.target, []),
          N = (0, rt.pj)(b, null, null, T);
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            xe.s,
            Object.assign(
              {
                key: `editordiv_${i}`,
                className: (0, J.Z)(n, Ne.Container),
                ref: C,
                spellCheck: i,
                focusable: !0,
                onActivate: E,
                onOKActionDescription: (0, h.Xx)("#UserGameNotes_Edit"),
                onGamepadDirection: N,
              },
              l,
            ),
          ),
          o.createElement(Ze, { view: p.current }),
          e.uploadImage &&
            o.createElement(tt, { view: u, uploadImage: e.uploadImage }),
        );
      }
      function it(e, t) {
        (0, Je.b8)(t, e);
      }
      function lt() {
        return (0, _e.Hw)({
          rules: [
            (0, _e.S0)(
              /^(\d+)\.\s$/,
              ne.nodes.ordered_list,
              (e) => ({ order: parseInt(e[1]) }),
              (e, t) => t.childCount + t.attrs.order == parseInt(e[1]),
            ),
            (0, _e.S0)(/^\s*([-+*])\s$/, ne.nodes.bullet_list),
            Ce(/\*([^*]+)\*/, ne.marks.strong),
            Ce(/_([^_]+)_/, ne.marks.italic),
            Ce(/~([^~]+)~/, ne.marks.strike),
            Ce(/`([^`]+)`/, ne.marks.code),
            (0, _e.zK)(/^```$/, ne.nodes.code_block),
            (0, _e.zK)(/^(#{1,5})\s$/, ne.nodes.heading, (e) => ({
              level: e[1].length,
            })),
          ],
        });
      }
      function ct(e, t, n, o) {
        let r,
          a = [];
        for (; (r = e.match(qe.H7)); )
          r.index > 0 && a.push(ne.text(e.substring(0, r.index))),
            a.push(
              ne.text(r[0], [ne.marks.link.create({ href: (0, qe.Pm)(r[0]) })]),
            ),
            (e = e.substring(r.index + r[0].length));
        return (
          e.length && a.push(ne.text(e)),
          new Z.p2(Z.HY.from(a), t.start(), t.end())
        );
      }
      const dt = 52428800;
      function ut(e, t) {
        let n = !1;
        if (
          (e.content.descendants((e, t) => {
            "image" === e.type.name && e.attrs.src.length > dt && (n = !0);
          }),
          n)
        ) {
          let e = [
            ne.nodes.image.create({
              src: ot,
              title: (0, h.Xx)("#UserGameNotes_ImageTooLarge"),
            }),
          ];
          return new Z.p2(Z.HY.from(e), 0, 0);
        }
        return e;
      }
      var mt = n(67802);
      const pt = 15;
      function gt(e) {
        const { note: t } = e,
          [n, r] = o.useState(!1),
          [a, s] = o.useState(),
          c = o.useRef(),
          m = o.useRef(),
          f = o.useRef(t.content),
          b = o.useRef(!1),
          k = o.useContext(u).onClickURL,
          E =
            null === (C = o.useContext(u).bSpellcheckEnabled) ||
            void 0 === C ||
            C;
        var C;
        const T = o.useContext(u).setSpellcheckEnabled,
          N = (function (e) {
            const t = g();
            return (n, o) =>
              (0, i.mG)(this, void 0, void 0, function* () {
                const r = new Uint8Array(o),
                  a = yield t.UploadImage(`notes_${e}_images/`, n, r);
                return Promise.resolve("/gamenotes/" + a);
              });
          })(t.appid),
          B = (0, at.id)();
        f.current == t.content || b.current || (f.current = t.content);
        const y = f.current,
          w = (function () {
            const e = (0, l.useQueryClient)(),
              t = g();
            return (0, l.useMutation)(
              (e) => t.SaveGameNote(e.note, e.title, e.bbcode),
              {
                onMutate(t) {
                  const n = Object.assign(Object.assign({}, t.note), {
                    title: t.title,
                    content: t.bbcode,
                  });
                  return (
                    v(e, d(t.note), (e) =>
                      e.map((e) => (e.id == n.id ? n : e)),
                    ),
                    console.log(n),
                    n
                  );
                },
                onSuccess(t, n, o) {
                  console.log(o, t),
                    v(e, d(n.note), (e) =>
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
          A = o.useCallback((e, t) => {
            c.current && c.current(),
              t.doc &&
                t.doc != e.state.doc &&
                (b.current ||
                  ((b.current = !0),
                  $.ReportTrackedAction("/GameNotes/NoteModified")),
                (m.current = () => ({
                  title: _t(e.state.doc),
                  bbcode: de(e.state.doc),
                })),
                r(!0));
          }, []);
        o.useEffect(() => {
          if (!n) return;
          let e = m.current;
          const o = () => {
              if (e) {
                const { title: n, bbcode: o } = e();
                (t.not_persisted && !(null == o ? void 0 : o.length)) ||
                  w.mutate({ note: t, title: n, bbcode: o }),
                  r(!1);
              }
              (e = void 0), (m.current = void 0);
            },
            a = window.setTimeout(o, 1e3 * pt);
          return () => {
            window.clearTimeout(a), o();
          };
        }, [w, n, t]);
        const S = p(),
          x = _(t, S),
          M = {
            onSecondaryButton: () => x.mutate(),
            onSecondaryActionDescription: (0, h.Xx)(
              "#UserGameNotes_DeleteNote",
            ),
          };
        return o.createElement(
          "div",
          { className: mt.NoteEditorArea },
          !B &&
            o.createElement(Me, {
              view: a,
              refUpdateToolbar: c,
              className: mt.Toolbar,
              bSpellcheckEnabled: E,
              setSpellcheckEnabled: T,
            }),
          o.createElement(st, {
            className: mt.EditorInput,
            bbcode: y,
            onUpdate: A,
            refView: s,
            onClickURL: k,
            bSpellcheckEnabled: E,
            uploadImage: N,
            panelProps: M,
          }),
          !B && o.createElement(ht, { note: t, bDirty: n }),
        );
      }
      function ht(e) {
        const { note: t, bDirty: n } = e,
          [r, a, s] = (0, Te.X9)(!1),
          i = "single" == o.useContext(u).mode,
          l = p(),
          c = _(t, l),
          d = o.useCallback(() => {
            !n && t.not_persisted ? c.mutate() : a();
          }, [n, t, c, a]);
        return o.createElement(
          "div",
          { className: mt.NoteActions },
          r && o.createElement(bt, { note: t, closeModal: s, deleteNote: c }),
          o.createElement(
            Ae.HP,
            { toolTipContent: "#UserGameNotes_DeleteNote", direction: "top" },
            o.createElement(j.zx, { onClick: d }, o.createElement(W.rFk, null)),
          ),
          i && o.createElement(ft, { bDirty: n }),
        );
      }
      function ft(e) {
        const { bDirty: t } = e,
          n = p();
        return t
          ? o.createElement(
              j.KM,
              { onClick: () => n(), className: mt.CloseWindowButton },
              (0, h.Xx)("#Button_SaveAndClose"),
            )
          : o.createElement(
              j.zx,
              { onClick: () => n(), className: mt.CloseWindowButton },
              (0, h.Xx)("#Button_Close"),
            );
      }
      function bt(e) {
        const { note: t, closeModal: n, deleteNote: r } = e;
        return o.createElement(
          z.Yy,
          { active: !0 },
          o.createElement(z.uH, {
            strTitle: (0, h.Xx)("#UserGameNotes_DeleteNote"),
            strDescription: (0, h.Xx)("#UserGameNotes_PromptDelete"),
            onOK: () => r.mutate(),
            bOKDisabled: r.isLoading,
            strOKButtonText: (0, h.Xx)("#Button_Delete"),
            closeModal: n,
          }),
        );
      }
      function _t(e) {
        let t = "";
        for (let n = 0; n < e.content.childCount; n++) {
          const o = e.content.child(n);
          if (o.isText) t += o.text;
          else {
            if (((t = t.trim()), t.length > 4)) return t;
            if (((t = _t(o)), t.length > 4)) return t;
          }
        }
        return t.trim();
      }
      function vt() {
        const e = (0, r.$B)(),
          t = k(
            "appid" in e.params && Number(e.params.appid),
            "shortcut_name" in e.params && e.params.shortcut_name,
          );
        let n = e.params.noteid;
        const a = (0, r.k6)(),
          s = (function (e) {
            const t = (0, l.useQueryClient)(),
              n = g();
            return o.useCallback(() => {
              const o = (0, h.Xx)("#UserGameNotes_UntitledNote_Title"),
                r = n.NewNote(e, o);
              return v(t, e, (e) => [...e, r]), r.id;
            }, [t, n, e]);
          })(t),
          { data: i, isLoading: c } = b(t);
        let d;
        i && n && (d = i.find((e) => e.id === n)),
          o.useLayoutEffect(() => {
            !i ||
              (n && i.find((e) => e.id === n)) ||
              (i.length > 0 && i[0].id ? Et(a, t, i[0].id) : Et(a, t, s()));
          }, [a, t, n, i, s]);
        const u = o.createElement(
          Ae.HP,
          { toolTipContent: "#UserGameNotes_NewNote", direction: "top" },
          o.createElement(
            j.zx,
            {
              className: mt.NewNoteButton,
              onClick: () => {
                const e = s();
                Et(a, t, e);
              },
            },
            o.createElement(W.ex9, null),
          ),
        );
        return i
          ? o.createElement(kt, {
              noteParent: t,
              notes: i,
              activeNoteID: null == d ? void 0 : d.id,
              actions: u,
            })
          : null;
      }
      function kt(e) {
        const { noteParent: t, notes: n, activeNoteID: a, actions: s } = e,
          [i, l] = (0, Se.i4)("NotesListCollapsed", !1),
          c = o.useContext(u).bPinnedView,
          d = (0, at.id)(),
          m = n.map((e) => {
            var t;
            return {
              title:
                (null === (t = e.title) || void 0 === t ? void 0 : t.length) > 0
                  ? e.title
                  : (0, h.Xx)("#UserGameNotes_Untitled"),
              identifier: e.id,
              content: o.createElement(gt, { note: e }),
              pageClassName: mt.NotePage,
              hideTitle: !0,
            };
          }),
          p = (0, r.k6)(),
          g = o.useCallback((e) => Et(p, t, e), [p, t]);
        return o.createElement(j.TI, {
          title: (0, h.Xx)("#UserGameNotes_NotesList"),
          pages: m,
          className: (0, J.Z)(mt.NotesPagedSettings, c && mt.PinnedView),
          page: a,
          onPageRequested: g,
          bottomControls: s,
          hideList: i,
          toggleHideList: c || d ? void 0 : () => l(!i),
        });
      }
      function Et(e, t, n) {
        let o;
        (o =
          "appid" in t
            ? a.AppNotes(t.appid, n)
            : a.ShortcutNotes(t.shortcut, n)),
          e.replace(o, e.location.state);
      }
      var Ct = n(55158);
      class Tt {
        constructor(e) {
          this.m_SteamInterface = e;
        }
        GetGamesWithNotes() {
          return (0, i.mG)(this, void 0, void 0, function* () {
            const e = T.gA.Init(Ct.SX);
            return (yield Ct.Rr.GetGamesWithNotes(
              this.m_SteamInterface.GetServiceTransport(),
              e,
            ))
              .Body()
              .toObject().games_with_notes;
          });
        }
        GetGameNotesList(e, t) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            const n = T.gA.Init(Ct.DI);
            this.SetParentOnRequest(n, e), n.Body().set_include_content(t);
            const o = yield Ct.Rr.GetNotesForGame(
              this.m_SteamInterface.GetServiceTransport(),
              n,
            );
            return o.Body().notes().length
              ? o.Body().toObject().notes
              : [this.NewNote(e, "New Note")];
          });
        }
        SaveGameNote(e, t, n) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            const o = T.gA.Init(Ct.ge);
            e.not_persisted
              ? o.Body().set_create_new(!0)
              : o.Body().set_note_id(e.id),
              e.appid
                ? o.Body().set_appid(e.appid)
                : o.Body().set_shortcut_name(e.shortcut_name),
              o.Body().set_title(t),
              o.Body().set_content(n);
            const r = yield Ct.Rr.SaveNote(
              this.m_SteamInterface.GetServiceTransport(),
              o,
            );
            if (!r.BSuccess()) throw r.GetErrorMessage();
            return r.Body().note_id();
          });
        }
        DeleteGameNote(e, t) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            const n = T.gA.Init(Ct.$$);
            this.SetParentOnRequest(n, e), n.Body().set_note_id(t);
            const o = yield Ct.Rr.DeleteNote(
              this.m_SteamInterface.GetServiceTransport(),
              n,
            );
            if (!o.BSuccess()) throw o.GetErrorMessage();
            return t;
          });
        }
        SyncNotes() {
          return (0, i.mG)(this, void 0, void 0, function* () {});
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
              Object.assign({ id: "temp_" + Tt.sm_lastNoteID++ }, n),
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
      function Nt(e) {
        const t = (0, B.lS)(),
          [n] = o.useState(() => new Tt(t));
        return o.createElement(
          m,
          { mode: "page", store: n },
          o.createElement(
            r.rs,
            null,
            o.createElement(r.AW, { path: a.List() }, o.createElement(P, null)),
            o.createElement(
              r.AW,
              { path: a.AppNotes(":appid", ":noteid?") },
              o.createElement(vt, null),
            ),
            o.createElement(
              r.AW,
              null,
              o.createElement(r.l_, { to: `${a.List()}` }),
            ),
          ),
        );
      }
      Tt.sm_lastNoteID = 0;
    },
  },
]);
