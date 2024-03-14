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
    39214: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => Bt });
      var o = n(47427),
        r = n(8285);
      const s = {
        List: () => "/notes/list",
        AppNotes: (e, t) => `/notes/app/${e}/${null != t ? t : ""}`,
        ShortcutNotes: (e, t) => `/notes/shortcut/${e}/${null != t ? t : ""}`,
      };
      var a = n(28017),
        l = n(85556),
        i = n(42718);
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
            bPinnedView: s,
            onClickURL: a,
            bSpellcheckEnabled: l = !0,
            setSpellcheckEnabled: i,
            children: c,
          } = e,
          d = o.useMemo(
            () => ({
              mode: t,
              store: n,
              closePopup: r,
              bPinnedView: s,
              onClickURL: a,
              bSpellcheckEnabled: l,
              setSpellcheckEnabled: i,
            }),
            [t, n, r, s, a, l, i],
          );
        return o.createElement(u.Provider, { value: d }, c);
      }
      function p() {
        return o.useContext(u).closePopup;
      }
      function g() {
        return o.useContext(u).store;
      }
      var h = n(31846);
      function f(e) {
        return "appid" in e
          ? ["GameNotes", "NotesByAppID", e.appid]
          : ["GameNotes", "NotesForShortcut", c(e.shortcut)];
      }
      function b(e) {
        const t = g();
        return (0, i.useQuery)(
          f(e),
          () =>
            (0, l.mG)(this, void 0, void 0, function* () {
              return (yield t.GetGameNotesList(e, !0)) || [];
            }),
          { enabled: !!e },
        );
      }
      function _(e, t) {
        const n = (0, i.useQueryClient)(),
          o = g(),
          r = e.id;
        return (0, i.useMutation)(
          () =>
            (0, l.mG)(this, void 0, void 0, function* () {
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
      function E(e, t) {
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
      var k = n(73799),
        C = n.n(k),
        T = n(79545),
        B = n(18015),
        y = n(40057),
        N = n(65255),
        w = n(77936);
      let S;
      const A = 864e5;
      function x(e) {
        return `appinfo_${e}_${N.De.LANGUAGE}`;
      }
      function D(e) {
        return Boolean(e && Date.now() - e.timeCached < A);
      }
      function M(e) {
        const t = (0, y.bY)(),
          n = (0, y.y$)();
        return (0, i.useQuery)(
          ["appinfo", e],
          () =>
            (0, l.mG)(this, void 0, void 0, function* () {
              return (function (e, t) {
                return (
                  S ||
                    (S = new (C())(
                      (n) =>
                        (0, l.mG)(this, void 0, void 0, function* () {
                          const o = new Map();
                          (yield Promise.all(n.map((e) => t.GetObject(x(e)))))
                            .filter(D)
                            .forEach(({ value: e }) => o.set(e.appid, e));
                          const r = n.slice().filter((e) => !o.has(e));
                          if (r.length) {
                            const n = T.gA.Init(B.Fi);
                            n.Body().set_language((0, w.jM)(N.De.LANGUAGE)),
                              n.Body().set_appids(r);
                            const s = yield B.AE.GetApps(e, n);
                            if (1 != s.GetEResult()) throw s.GetErrorMessage();
                            s.Body()
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
                  S
                );
              })(t, n).load(e);
            }),
          { staleTime: A, enabled: !!e },
        ).data;
      }
      var O = n(46882);
      function F() {
        const { data: e, isLoading: t } = (function () {
          const e = g();
          return (0, i.useQuery)(["GameNotes", "GamesWithNotes"], () =>
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
                e.map((e) => o.createElement(G, { key: e.appid, game: e })),
              ),
            );
      }
      function G(e) {
        const { game: t } = e,
          n = M(t.appid);
        return o.createElement(
          "li",
          null,
          o.createElement(
            a.rU,
            { to: s.AppNotes(t.appid) },
            null == n ? void 0 : n.name,
          ),
        );
      }
      var I = n(14351),
        P = n(68785),
        L = n(46984),
        R = n(16997);
      const H = new P.sO("ReactUsageReporting").Debug,
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
          const e = T.gA.Init(I.YH);
          e.Body().set_product(this.m_strProduct),
            e.Body().set_version(this.m_strVersion),
            this.m_mapRoutes.forEach((t, n) => {
              let o = new I.Be();
              o.set_route(n), o.set_count(t), e.Body().add_routes(o);
            }),
            this.m_mapComponents.forEach((t, n) => {
              let o = new I.Hy();
              o.set_component(n), o.set_count(t), e.Body().add_components(o);
            }),
            this.m_mapActions.forEach((t, n) => {
              let o = new I.Js();
              o.set_action(n), o.set_count(t), e.Body().add_actions(o);
            }),
            this.m_mapRoutes.clear(),
            this.m_mapComponents.clear(),
            this.m_mapActions.clear(),
            (this.m_reportCount = 0),
            I.TF.ReportReactUsage(this.m_transport, e);
        }
        get version() {
          return this.m_strVersion;
        }
        get product() {
          return this.m_strProduct;
        }
      }
      (0, l.gn)([R.a], X.prototype, "CheckSend", null);
      const $ = new X();
      var j = n(1485),
        Z = n(58538),
        V = n(50898),
        W = n(7294),
        z = n(23126),
        K = n(2761),
        Q = n(72869),
        Y = n.n(Q),
        q = n(13129);
      function J(e, t) {
        return () => [e, { class: t }, 0];
      }
      const ee = {
          doc: { content: "block+" },
          text: { group: "inline" },
          paragraph: {
            content: "inline*",
            group: "block",
            parseDOM: [{ tag: "p" }],
            toDOM: J("p", (0, q.Z)("pm_paragraph", Y().Paragraph)),
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
            toDOM: J("ul", Y().List),
          }),
          ordered_list: Object.assign(Object.assign({}, K.dq), {
            content: "list_item+",
            group: "block",
            toDOM: J("ol", Y().OrderedList),
          }),
          list_item: Object.assign(Object.assign({}, K.qb), {
            content: "paragraph block*",
            toDOM: J("li", Y().ListItem),
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
            toDOM: J("b", (0, q.Z)("BB_Bold", Y().Bold)),
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
            toDOM: J("i", (0, q.Z)("BB_Italic", Y().Italic)),
          },
          underline: {
            parseDOM: [{ tag: "u" }, { style: "text-decoration=underline" }],
            toDOM: J("u", (0, q.Z)("BB_Underline", Y().Underline)),
          },
          strike: {
            parseDOM: [{ style: "text-decoration=line-through" }],
            toDOM: J("span", (0, q.Z)("BB_Strike", Y().Strike)),
          },
          code: {
            parseDOM: [{ tag: "code" }],
            toDOM: J("code", (0, q.Z)("BB_Code", Y().Code)),
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
        ne = new z.V_({ nodes: ee, marks: te });
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
      class se {
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
      function ae(e, t, ...n) {
        const o = e.BBArgsToAttrs ? e.BBArgsToAttrs(t.args) : void 0;
        return "node" in e
          ? e.node.create(o, n)
          : n.map((t) => t.mark([...t.marks, e.mark.create(o)]));
      }
      class le extends W.AX {
        constructor(e) {
          super(e, () => new se());
        }
        ParseBBCode(e) {
          const t = this.Parse(e, ae, !0);
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
      var ie = n(83999),
        ce = n(62210);
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
          { tag: s, args: a } = pe(r, t.attrs);
        return (
          s && (o += (0, W.lW)(s, a)),
          t.content.forEach((t) => {
            ([o, n] = me(e, n, t.marks, o)),
              ([o, n] = (function (e, t, n, o) {
                let r;
                for (const s of n)
                  if (-1 === t.indexOf(s)) {
                    r || (r = t.slice());
                    const n = e.mapMarks.get(s.type);
                    r.push(s);
                    const { args: a, tag: l } = pe(n, s.attrs);
                    o += (0, W.lW)(l, a || {});
                  }
                return [o, null != r ? r : t];
              })(e, n, t.marks, o)),
              t.type.isText
                ? (o += (0, W.bU)(t.text))
                : t.type == ne.nodes.hard_break
                  ? (o += "\n")
                  : (o += ue(e, t));
          }),
          ([o] = me(e, n, [], o)),
          s && (o += (0, W.Ec)(s)),
          o
        );
      }
      function me(e, t, n, o) {
        const r = [];
        for (const e of t) -1 === n.indexOf(e) && r.push(e);
        if (!r.length) return [o, t];
        const s = t.slice();
        for (
          ;
          r.length && ((0, ce.X)(s.length, "no marks left to close"), s.length);

        ) {
          const t = s.pop(),
            n = e.mapMarks.get(t.type),
            { tag: a } = pe(n, t.attrs);
          (o += (0, W.Ec)(a)), ie.Zf(r, t);
        }
        return [o, s];
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
      var ge = n(23612),
        he = n(31458),
        fe = n(42287);
      function be(e) {
        const {
            visible: t = !0,
            className: n,
            keepMounted: r = !1,
            expandDirection: s = "height",
            msAnimationDuration: a = 250,
            children: l,
          } = e,
          {
            style: i,
            active: c,
            refDiv: d,
          } = (function (e, t = "height", n = 250) {
            const r = o.useRef(),
              s = o.useRef(!0),
              [a, l] = o.useState("idle"),
              [i, c] = o.useState({});
            o.useLayoutEffect(() => {
              s.current ? (s.current = !1) : l("start");
            }, [e]),
              o.useLayoutEffect(() => {
                const n = r.current,
                  o = "height" == t ? "scrollHeight" : "scrollWidth";
                if ("start" == a) {
                  const r = n[o];
                  c((n) =>
                    Object.assign(
                      Object.assign({ [t]: e ? "0px" : `${r}px` }, n),
                      { overflow: "hidden" },
                    ),
                  ),
                    l("active");
                } else if ("active" == a) {
                  n.scrollTop;
                  const r = n[o];
                  c({ overflow: "hidden", [t]: e ? `${r}px` : "0px" });
                  const s = () => {
                    fe.unstable_batchedUpdates(() => {
                      c({}), l("idle");
                    });
                  };
                  return (
                    n.addEventListener("transitionend", s),
                    () => {
                      n.removeEventListener("transitionend", s);
                    }
                  );
                }
              }, [a, e]);
            const d = Object.assign(Object.assign({}, i), {
              transition: `${t} ${n}ms`,
            });
            return { style: d, active: "idle" != a, refDiv: r };
          })(t, s, a);
        return t || c || r
          ? o.createElement("div", { className: n, ref: d, style: i }, l)
          : null;
      }
      var _e = n(26682);
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
      function Ee(e, t) {
        let { from: n, $from: o, to: r, empty: s } = e.selection;
        return s
          ? !!t.isInSet(e.storedMarks || o.marks())
          : e.doc.rangeHasMark(n, r, t);
      }
      function ke(e, t, n) {
        let { $from: o, to: r, node: s } = e.selection;
        return !s && r <= o.end() && (s = o.parent), !!s && s.hasMarkup(t, n);
      }
      function Ce(e, t, n = {}) {
        return new _e.VK(e, (e, o, r, s) => {
          const a = n instanceof Function ? n(o) : n,
            l = e.tr;
          if (o[1]) {
            const e = r + o[0].indexOf(o[1]),
              t = e + o[1].length;
            t < s && l.delete(t, s),
              e > r && l.delete(r, e),
              (s = r + o[1].length);
          }
          return l.addMark(r, s, t.create(a)), l.removeStoredMark(t), l;
        });
      }
      var Te = n(20417),
        Be = n(56836);
      function ye(e) {
        const { children: t } = e,
          { callbacks: n, view: r } = Oe(),
          [s, a] = o.useState(() => Ee(r.state, ne.marks.link)),
          l = o.useCallback((e) => a(Ee(e.state, ne.marks.link)), []);
        (0, Te.Qg)(n, l);
        const [i, c, d] = (0, Te.X9)();
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            V.Yy,
            { active: i },
            o.createElement(Ne, { active: i, closeModal: d, view: r }),
          ),
          o.createElement(
            j.zx,
            {
              className: (0, q.Z)(Be.CommandButton, s && Be.Toggled),
              onMouseDown: (e) => {
                e.preventDefault(), c();
              },
              title: (0, h.Xx)("#FormattingToolbar_InsertLink"),
            },
            t,
          ),
        );
      }
      const Ne = o.memo(function (e) {
        const { active: t, closeModal: n, view: r } = e,
          [s, a] = o.useState(""),
          [l, i] = o.useState(""),
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
                a(e),
                e.startsWith("http")
                  ? (i(e),
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
            V.uH,
            {
              onOK: () => {
                r.dispatch(
                  r.state.tr.replaceRangeWith(
                    r.state.selection.from,
                    r.state.selection.to,
                    ne.text(s || l, [ne.marks.link.create({ href: l })]),
                  ),
                ),
                  r.focus(),
                  n();
              },
              closeModal: n,
              strTitle: (0, h.Xx)("#FormattingToolbar_InsertLink"),
              strOKButtonText: (0, h.Xx)("#FormattingToolbar_InsertLink"),
              bOKDisabled: 0 == l.length,
            },
            o.createElement(j.II, {
              ref: c,
              value: s,
              onChange: (e) => a(e.currentTarget.value),
              label: (0, h.Xx)("#FormattingToolbar_LinkText"),
            }),
            o.createElement(j.II, {
              ref: d,
              value: l,
              onChange: (e) => i(e.currentTarget.value),
              label: (0, h.Xx)("#FormattingToolbar_LinkAddress"),
            }),
          )
        );
      });
      var we = n(45492),
        Se = n(59728),
        Ae = n(56617),
        xe = n(91618);
      function De(e) {
        const {
            view: t,
            refUpdateToolbar: n,
            className: r,
            bSpellcheckEnabled: s,
            setSpellcheckEnabled: a,
          } = e,
          [l, i] = (0, Ae.i4)("FormattingToolbar_Expanded", !1),
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
              Me.Provider,
              { value: d },
              o.createElement(
                "div",
                { className: (0, q.Z)(Be.Toolbar, r) },
                o.createElement(
                  Fe,
                  null,
                  o.createElement(
                    Se.HP,
                    {
                      toolTipContent: "#FormattingToolbar_Undo",
                      direction: "bottom",
                    },
                    o.createElement(
                      Pe,
                      {
                        title: (0, h.Xx)("#FormattingToolbar_Undo"),
                        command: he.Yw,
                        fnEnabledCheck: He,
                      },
                      o.createElement(Z.DeA, null),
                    ),
                  ),
                  o.createElement(
                    Se.HP,
                    {
                      toolTipContent: "#FormattingToolbar_Redo",
                      direction: "bottom",
                    },
                    o.createElement(
                      Pe,
                      {
                        title: (0, h.Xx)("#FormattingToolbar_Redo"),
                        command: he.KX,
                        fnEnabledCheck: Ue,
                      },
                      o.createElement(Z.Jwt, null),
                    ),
                  ),
                  o.createElement("div", { className: Be.Gap }),
                  o.createElement(
                    Se.HP,
                    {
                      toolTipContent: "#FormattingToolbar_Bold",
                      direction: "bottom",
                    },
                    o.createElement(
                      Ie,
                      {
                        title: (0, h.Xx)("#FormattingToolbar_Bold"),
                        mark: ne.marks.strong,
                      },
                      o.createElement(Z.DUs, null),
                    ),
                  ),
                  o.createElement(
                    Se.HP,
                    {
                      toolTipContent: "#FormattingToolbar_Italic",
                      direction: "bottom",
                    },
                    o.createElement(
                      Ie,
                      {
                        title: (0, h.Xx)("#FormattingToolbar_Italic"),
                        mark: ne.marks.italic,
                      },
                      o.createElement(Z.tzG, null),
                    ),
                  ),
                  o.createElement(
                    Se.HP,
                    {
                      toolTipContent: "#FormattingToolbar_Underline",
                      direction: "bottom",
                    },
                    o.createElement(
                      Ie,
                      {
                        title: (0, h.Xx)("#FormattingToolbar_Underline"),
                        mark: ne.marks.underline,
                      },
                      o.createElement(Z.nC9, null),
                    ),
                  ),
                  o.createElement(
                    Se.HP,
                    {
                      toolTipContent: "#FormattingToolbar_Strike",
                      direction: "bottom",
                    },
                    o.createElement(
                      Ie,
                      {
                        title: (0, h.Xx)("#FormattingToolbar_Strike"),
                        mark: ne.marks.strike,
                      },
                      o.createElement(Z.z$U, null),
                    ),
                  ),
                  o.createElement(
                    Se.HP,
                    {
                      toolTipContent: "#FormattingToolbar_InlineCode",
                      direction: "bottom",
                    },
                    o.createElement(
                      Ie,
                      {
                        title: (0, h.Xx)("#FormattingToolbar_InlineCode"),
                        mark: ne.marks.code,
                      },
                      o.createElement(Z.l2k, null),
                    ),
                  ),
                  o.createElement("div", { className: Be.Spacer }),
                  o.createElement(
                    Se.HP,
                    {
                      toolTipContent: "#FormattingToolbar_ExpandOptions",
                      direction: "bottom",
                    },
                    o.createElement(
                      j.zx,
                      {
                        className: (0, q.Z)(
                          Be.CommandButton,
                          Be.ExpandButton,
                          l && Be.Toggled,
                        ),
                        onClick: () => i(!l),
                      },
                      o.createElement(Z.Tt3, null),
                    ),
                  ),
                ),
                o.createElement(
                  Fe,
                  { visible: l },
                  o.createElement(
                    Se.HP,
                    {
                      toolTipContent: "#FormattingToolbar_Paragraph",
                      direction: "bottom",
                    },
                    o.createElement(
                      Ge,
                      {
                        nodeType: ne.nodes.paragraph,
                        title: (0, h.Xx)("#FormattingToolbar_Paragraph"),
                      },
                      o.createElement(Z.Dos, null),
                    ),
                  ),
                  o.createElement(
                    Se.HP,
                    {
                      toolTipContent: "#FormattingToolbar_HeadingLevel1",
                      direction: "bottom",
                    },
                    o.createElement(
                      Ge,
                      {
                        nodeType: ne.nodes.heading,
                        attrs: { level: 1 },
                        title: (0, h.Xx)("#FormattingToolbar_HeadingLevelN", 1),
                      },
                      o.createElement(Z.geY, null),
                    ),
                  ),
                  o.createElement(
                    Se.HP,
                    {
                      toolTipContent: "#FormattingToolbar_HeadingLevel2",
                      direction: "bottom",
                    },
                    o.createElement(
                      Ge,
                      {
                        nodeType: ne.nodes.heading,
                        attrs: { level: 2 },
                        title: (0, h.Xx)("#FormattingToolbar_HeadingLevelN", 2),
                      },
                      o.createElement(Z.y3S, null),
                    ),
                  ),
                  o.createElement(
                    Se.HP,
                    {
                      toolTipContent: "#FormattingToolbar_HeadingLevel3",
                      direction: "bottom",
                    },
                    o.createElement(
                      Ge,
                      {
                        nodeType: ne.nodes.heading,
                        attrs: { level: 3 },
                        title: (0, h.Xx)("#FormattingToolbar_HeadingLevelN", 3),
                      },
                      o.createElement(Z.Zhu, null),
                    ),
                  ),
                  o.createElement(
                    Se.HP,
                    {
                      toolTipContent: "#FormattingToolbar_HeadingLevel4",
                      direction: "bottom",
                    },
                    o.createElement(
                      Ge,
                      {
                        nodeType: ne.nodes.heading,
                        attrs: { level: 4 },
                        title: (0, h.Xx)("#FormattingToolbar_HeadingLevelN", 4),
                      },
                      o.createElement(Z.P2P, null),
                    ),
                  ),
                  o.createElement(
                    Se.HP,
                    {
                      toolTipContent: "#FormattingToolbar_HeadingLevel5",
                      direction: "bottom",
                    },
                    o.createElement(
                      Ge,
                      {
                        nodeType: ne.nodes.heading,
                        attrs: { level: 5 },
                        title: (0, h.Xx)("#FormattingToolbar_HeadingLevelN", 5),
                      },
                      o.createElement(Z.Lb, null),
                    ),
                  ),
                  o.createElement(
                    Se.HP,
                    {
                      toolTipContent: "#FormattingToolbar_CodeBlock",
                      direction: "bottom",
                    },
                    o.createElement(
                      Ge,
                      {
                        nodeType: ne.nodes.code_block,
                        title: (0, h.Xx)("#FormattingToolbar_CodeBlock"),
                      },
                      o.createElement(Z.N4L, null),
                    ),
                  ),
                  o.createElement("div", { className: Be.Gap }),
                  o.createElement(
                    Se.HP,
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
                      o.createElement(Z.RAD, null),
                    ),
                  ),
                  o.createElement(
                    Se.HP,
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
                      o.createElement(Z.FYd, null),
                    ),
                  ),
                  o.createElement(
                    Se.HP,
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
                      o.createElement(Z.LcB, null),
                    ),
                  ),
                  o.createElement("div", { className: Be.Gap }),
                  o.createElement(
                    Se.HP,
                    {
                      toolTipContent: "#FormattingToolbar_InsertLink",
                      direction: "bottom",
                    },
                    o.createElement(ye, null, o.createElement(Z.hhG, null)),
                  ),
                  o.createElement("div", { className: Be.Spacer }),
                  a &&
                    o.createElement(
                      Se.HP,
                      {
                        toolTipContent: s
                          ? "#FormattingToolbar_DisableSpellcheck"
                          : "#FormattingToolbar_EnableSpellcheck",
                        direction: "bottom",
                      },
                      o.createElement(
                        Re,
                        { toggled: s, onClick: () => a(!s) },
                        o.createElement(Z.cSC, null),
                      ),
                    ),
                ),
              ),
            )
          : null;
      }
      const Me = o.createContext(void 0),
        Oe = () => o.useContext(Me);
      function Fe(e) {
        return o.createElement(
          be,
          { visible: e.visible },
          o.createElement(
            xe.s,
            { className: (0, q.Z)(Be.ToolbarRow), "flow-children": "row" },
            e.children,
          ),
        );
      }
      function Ge(e) {
        const { nodeType: t, title: n, attrs: r, children: s } = e,
          { callbacks: a, view: l } = Oe(),
          [i, c] = o.useState(() => ke(l.state, t, r)),
          d = o.useCallback((e) => c(ke(e.state, t, r)), [t, r]);
        (0, Te.Qg)(a, d);
        const u = o.useMemo(() => (0, ge.uJ)(t, r), [r, t]);
        return o.createElement(Le, {
          command: u,
          title: n,
          toggled: i,
          children: s,
        });
      }
      function Ie(e) {
        const { mark: t, title: n, children: r } = e,
          { callbacks: s, view: a } = Oe(),
          [l, i] = o.useState(() => Ee(a.state, t)),
          c = o.useCallback((e) => i(Ee(e.state, t)), [t]);
        (0, Te.Qg)(s, c);
        const d = o.useMemo(() => (0, ge.w9)(t), [t]);
        return o.createElement(Le, {
          command: d,
          title: n,
          toggled: l,
          children: r,
        });
      }
      function Pe(e) {
        const { fnEnabledCheck: t } = e,
          n = (0, l._T)(e, ["fnEnabledCheck"]),
          { callbacks: r, view: s } = Oe(),
          [a, i] = o.useState(() => t(s)),
          c = o.useCallback((e) => i(t(e)), [t]);
        return (
          (0, Te.Qg)(r, c),
          o.createElement(Le, Object.assign({}, n, { disabled: !a }))
        );
      }
      function Le(e) {
        const {
            command: t,
            toggled: n,
            title: r,
            disabled: s,
            children: a,
          } = e,
          { view: l } = Oe();
        return o.createElement(
          j.zx,
          {
            className: (0, q.Z)(Be.CommandButton, n && Be.Toggled),
            title: r,
            onMouseDown: (e) => {
              e.preventDefault(), t(l.state, l.dispatch, l);
            },
            disabled: !0 === s,
            focusable: !s,
          },
          a,
        );
      }
      function Re(e) {
        const {
          onClick: t,
          toggled: n,
          title: r,
          disabled: s,
          children: a,
        } = e;
        return o.createElement(
          j.zx,
          {
            className: (0, q.Z)(Be.CommandButton, n && Be.Toggled),
            title: r,
            onMouseDown: (e) => {
              e.preventDefault(), t();
            },
            disabled: !0 === s,
          },
          a,
        );
      }
      function He(e) {
        return (0, he.of)(e.state) > 0;
      }
      function Ue(e) {
        return (0, he.AH)(e.state) > 0;
      }
      var Xe = n(62209),
        $e = n(4005),
        je = n(31934),
        Ze = n(35643),
        Ve = n(50423),
        We = n(31643);
      function ze(e) {
        const { view: t } = e,
          [n, r] = o.useState(),
          [s, a] = o.useState(),
          [l, i] = o.useState(),
          c = o.useCallback((e, t) => {
            const n = t.target;
            if ((0, Ve.GB)(n) && "A" == n.nodeName) {
              const e = n.getBoundingClientRect();
              r(e.left + e.width / 2), a(e.bottom + 2), i(n);
            } else i(void 0);
            return !1;
          }, []),
          d = o.useCallback((e, t) => (i(void 0), !1), []);
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
          !l)
        )
          return null;
        const u = l.getAttribute("href");
        return o.createElement(
          Ke,
          { top: s, left: n },
          o.createElement("div", { className: We.Link }, u),
          o.createElement(
            "div",
            { className: We.LinkHelp },
            (0, h.Xx)("#UserGameNotes_ClickToOpenLink"),
          ),
        );
      }
      function Ke(e) {
        const { top: t, left: n, children: r } = e,
          [s, a] = o.useState(0),
          l = o.useRef();
        o.useLayoutEffect(() => {
          a(l.current.getBoundingClientRect().width);
        }, [t, n, r]);
        const i = { top: `${t}px`, left: `${Math.max(n - s / 2, 12)}px` };
        return o.createElement(
          "div",
          { className: We.Hover, style: i, ref: l },
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
      var qe = n(14609),
        Je = n(13499),
        et = n(80878);
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
                          (0, l.mG)(this, void 0, void 0, function* () {
                            for (const o of e) {
                              const e = yield fetch(o),
                                r = yield e.blob(),
                                s = (0, et.L4)(yield r.arrayBuffer());
                              nt(
                                o,
                                yield n(e.headers.get("Content-Type"), s),
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
      var rt = n(13974),
        st = n(37563);
      function at(e) {
        const {
            bbcode: t,
            className: n,
            onUpdate: r,
            refView: s,
            onClickURL: a,
            bSpellcheckEnabled: l = !0,
            panelProps: i,
          } = e,
          c = o.useRef();
        c.current = r;
        const d = (0, st.qt)(),
          [u, m] = o.useState(),
          p = o.useRef(),
          g = o.useRef();
        g.current = a || lt;
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
                (function (e, t, n, o, r, s, a) {
                  if (a && (s.ctrlKey || 1 == s.button)) {
                    const t = o
                      .resolve(n - r)
                      .marks()
                      .find((e) => e.type == ne.marks.link);
                    if (t)
                      return e(t.attrs.href, s.view), s.preventDefault(), !0;
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
            return new le(t).ParseBBCode(e);
          })(t);
          p.current.updateState(
            (function (e, t) {
              const n = new $e.Sy({ view: (e) => ({ update: t }) });
              return $e.yy.create({
                schema: ne,
                doc: e,
                plugins: [(0, he.m8)(), Ye, (0, Xe.h)(ge.YR), n, it()],
              });
            })(e, (...e) => c.current && c.current(...e)),
          );
        }, [t]),
          (0, Te.LY)(s, u);
        const b = o.useRef(),
          _ = o.useCallback(
            (e) => {
              (0, Ze.LP)(e, d.IN_VR);
            },
            [d.IN_VR],
          ),
          v = o.useCallback(() => {}, []),
          E = (0, Ze.CJ)({ onTextEntered: _, onKeyboardNavOut: v }, () => {
            var e;
            return null === (e = b.current) || void 0 === e
              ? void 0
              : e.ownerDocument.defaultView;
          }),
          k = o.useCallback(() => {
            var e, t;
            if (
              (E.ShowVirtualKeyboard(),
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
          }, [E]),
          C = (0, Te.BE)(b, f),
          T = o.useCallback((e) => e.currentTarget == e.target, []),
          B = (0, rt.pj)(b, null, null, T);
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            xe.s,
            Object.assign(
              {
                key: `editordiv_${l}`,
                className: (0, q.Z)(n, Be.Container),
                ref: C,
                spellCheck: l,
                focusable: !0,
                onActivate: k,
                onOKActionDescription: (0, h.Xx)("#UserGameNotes_Edit"),
                onGamepadDirection: B,
              },
              i,
            ),
          ),
          o.createElement(ze, { view: p.current }),
          e.uploadImage &&
            o.createElement(tt, { view: u, uploadImage: e.uploadImage }),
        );
      }
      function lt(e, t) {
        (0, qe.b8)(t, e);
      }
      function it() {
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
          s = [];
        for (; (r = e.match(Je.H7)); )
          r.index > 0 && s.push(ne.text(e.substring(0, r.index))),
            s.push(
              ne.text(r[0], [ne.marks.link.create({ href: (0, Je.Pm)(r[0]) })]),
            ),
            (e = e.substring(r.index + r[0].length));
        return (
          e.length && s.push(ne.text(e)),
          new z.p2(z.HY.from(s), t.start(), t.end())
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
          return new z.p2(z.HY.from(e), 0, 0);
        }
        return e;
      }
      var mt = n(25251);
      const pt = 15;
      function gt(e) {
        const { note: t } = e,
          [n, r] = o.useState(!1),
          [s, a] = o.useState(),
          c = o.useRef(),
          m = o.useRef(),
          f = o.useRef(t.content),
          b = o.useRef(!1),
          E = o.useContext(u).onClickURL,
          k =
            null === (C = o.useContext(u).bSpellcheckEnabled) ||
            void 0 === C ||
            C;
        var C;
        const T = o.useContext(u).setSpellcheckEnabled,
          B = (function (e) {
            const t = g();
            return (n, o) =>
              (0, l.mG)(this, void 0, void 0, function* () {
                const r = new Uint8Array(o),
                  s = yield t.UploadImage(`notes_${e}_images/`, n, r);
                return Promise.resolve("/gamenotes/" + s);
              });
          })(t.appid),
          y = (0, st.id)();
        f.current == t.content || b.current || (f.current = t.content);
        const N = f.current,
          w = (function () {
            const e = (0, i.useQueryClient)(),
              t = g();
            return (0, i.useMutation)(
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
          S = o.useCallback((e, t) => {
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
            s = window.setTimeout(o, 1e3 * pt);
          return () => {
            window.clearTimeout(s), o();
          };
        }, [w, n, t]);
        const A = p(),
          x = _(t, A),
          D = {
            onSecondaryButton: () => x.mutate(),
            onSecondaryActionDescription: (0, h.Xx)(
              "#UserGameNotes_DeleteNote",
            ),
          };
        return o.createElement(
          "div",
          { className: mt.NoteEditorArea },
          !y &&
            o.createElement(De, {
              view: s,
              refUpdateToolbar: c,
              className: mt.Toolbar,
              bSpellcheckEnabled: k,
              setSpellcheckEnabled: T,
            }),
          o.createElement(at, {
            className: mt.EditorInput,
            bbcode: N,
            onUpdate: S,
            refView: a,
            onClickURL: E,
            bSpellcheckEnabled: k,
            uploadImage: B,
            panelProps: D,
          }),
          !y && o.createElement(ht, { note: t, bDirty: n }),
        );
      }
      function ht(e) {
        const { note: t, bDirty: n } = e,
          [r, s, a] = (0, Te.X9)(!1),
          l = "single" == o.useContext(u).mode,
          i = p(),
          c = _(t, i),
          d = o.useCallback(() => {
            !n && t.not_persisted ? c.mutate() : s();
          }, [n, t, c, s]);
        return o.createElement(
          "div",
          { className: mt.NoteActions },
          r && o.createElement(bt, { note: t, closeModal: a, deleteNote: c }),
          o.createElement(
            Se.HP,
            { toolTipContent: "#UserGameNotes_DeleteNote", direction: "top" },
            o.createElement(j.zx, { onClick: d }, o.createElement(Z.rFk, null)),
          ),
          l && o.createElement(ft, { bDirty: n }),
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
          V.Yy,
          { active: !0 },
          o.createElement(V.uH, {
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
          t = E(
            "appid" in e.params && Number(e.params.appid),
            "shortcut_name" in e.params && e.params.shortcut_name,
          );
        let n = e.params.noteid;
        const s = (0, r.k6)(),
          a = (function (e) {
            const t = (0, i.useQueryClient)(),
              n = g();
            return o.useCallback(() => {
              const o = (0, h.Xx)("#UserGameNotes_UntitledNote_Title"),
                r = n.NewNote(e, o);
              return v(t, e, (e) => [...e, r]), r.id;
            }, [t, n, e]);
          })(t),
          { data: l, isLoading: c } = b(t);
        let d;
        l && n && (d = l.find((e) => e.id === n)),
          o.useLayoutEffect(() => {
            !l ||
              (n && l.find((e) => e.id === n)) ||
              (l.length > 0 && l[0].id ? kt(s, t, l[0].id) : kt(s, t, a()));
          }, [s, t, n, l, a]);
        const u = o.createElement(
          Se.HP,
          { toolTipContent: "#UserGameNotes_NewNote", direction: "top" },
          o.createElement(
            j.zx,
            {
              className: mt.NewNoteButton,
              onClick: () => {
                const e = a();
                kt(s, t, e);
              },
            },
            o.createElement(Z.ex9, null),
          ),
        );
        return l
          ? o.createElement(Et, {
              noteParent: t,
              notes: l,
              activeNoteID: null == d ? void 0 : d.id,
              actions: u,
            })
          : null;
      }
      function Et(e) {
        const { noteParent: t, notes: n, activeNoteID: s, actions: a } = e,
          [l, i] = (0, Ae.i4)("NotesListCollapsed", !1),
          c = o.useContext(u).bPinnedView,
          d = (0, st.id)(),
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
          g = o.useCallback((e) => kt(p, t, e), [p, t]);
        return o.createElement(j.TI, {
          title: (0, h.Xx)("#UserGameNotes_NotesList"),
          pages: m,
          className: (0, q.Z)(mt.NotesPagedSettings, c && mt.PinnedView),
          page: s,
          onPageRequested: g,
          bottomControls: a,
          hideList: l,
          toggleHideList: c || d ? void 0 : () => i(!l),
        });
      }
      function kt(e, t, n) {
        let o;
        (o =
          "appid" in t
            ? s.AppNotes(t.appid, n)
            : s.ShortcutNotes(t.shortcut, n)),
          e.replace(o, e.location.state);
      }
      var Ct = n(61578);
      class Tt {
        constructor(e) {
          this.m_SteamInterface = e;
        }
        GetGamesWithNotes() {
          return (0, l.mG)(this, void 0, void 0, function* () {
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
          return (0, l.mG)(this, void 0, void 0, function* () {
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
          return (0, l.mG)(this, void 0, void 0, function* () {
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
          return (0, l.mG)(this, void 0, void 0, function* () {
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
      function Bt(e) {
        const t = (0, y.lS)(),
          [n] = o.useState(() => new Tt(t));
        return o.createElement(
          m,
          { mode: "page", store: n },
          o.createElement(
            r.rs,
            null,
            o.createElement(r.AW, { path: s.List() }, o.createElement(F, null)),
            o.createElement(
              r.AW,
              { path: s.AppNotes(":appid", ":noteid?") },
              o.createElement(vt, null),
            ),
            o.createElement(
              r.AW,
              null,
              o.createElement(r.l_, { to: `${s.List()}` }),
            ),
          ),
        );
      }
      Tt.sm_lastNoteID = 0;
    },
  },
]);
