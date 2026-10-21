/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [69773],
    {
      65217: (H, N, o) => {
        "use strict";
        o.d(N, { F: () => O });
        var r = o(39414);
        function O(L, T, B, b) {
          let k = [],
            y;
          for (; (y = T.match(r.O)); ) {
            y.index > 0 && k.push(L.text(T.substring(0, y.index)));
            const U = (0, r.S)(y[0]),
              p = b && b(U);
            !p || p === "default"
              ? k.push(L.text(y[0], [B.create({ href: U })]))
              : p !== "remove" && k.push(p),
              (T = T.substring(y.index + y[0].length));
          }
          if (k.length != 0) return T.length && k.push(L.text(T)), k;
        }
      },
      8422: (H, N, o) => {
        "use strict";
        o.d(N, { Mw: () => b, TG: () => y, zL: () => B });
        var r = o(7850),
          O = o(52893),
          L = o(90626),
          T = o(19565);
        const B = new O.k_({
            props: {
              handlePaste(U, p, I) {
                const _ = p.clipboardData
                  ?.getData("text/plain")
                  .replace(/\n/g, " ");
                if (_) {
                  const S = U.state.tr.insertText(_);
                  U.dispatch(S);
                }
                return !0;
              },
            },
          }),
          b = {
            Enter: () => !0,
            "Shift-Enter": () => !0,
            "Mod-Enter": () => !0,
          };
        function k(U) {
          return new O.k_({
            filterTransaction(p, I) {
              return p.doc.textContent.length <= U;
            },
          });
        }
        function y(U) {
          const { nMaxChars: p } = U;
          return (
            (0, T.c$)((0, L.useMemo)(() => k(p), [p])),
            (0, r.jsx)(L.Fragment, {})
          );
        }
      },
      58802: (H, N, o) => {
        "use strict";
        o.d(N, { W: () => O });
        var r = o(57053);
        class O {
          m_ProseMirrorSchema;
          m_mapBBCodeDictionary = new Map();
          m_PMToBBCodeConfig = { mapNodes: new Map(), mapMarks: new Map() };
          get pm_schema() {
            return this.m_ProseMirrorSchema;
          }
          get bbcode_dictionary() {
            return this.m_mapBBCodeDictionary;
          }
          get pm_to_bbcode_config() {
            return this.m_PMToBBCodeConfig;
          }
          ConvertAttrToBBCodeArgs(B, b) {
            const k = this.m_PMToBBCodeConfig.mapNodes.get(B.type);
            return k && k.AttrsToBBArgs ? k.AttrsToBBArgs(b, B).args || {} : {};
          }
          constructor(B, b) {
            const k = {
                doc: { content: "block+" },
                text: { group: "inline" },
                hard_break: {
                  inline: !0,
                  group: "inline",
                  selectable: !1,
                  linebreakReplacement: !0,
                  parseDOM: [{ tag: "br" }],
                  toDOM() {
                    return ["br"];
                  },
                },
              },
              y = new Map(),
              U = new Map(),
              p = b ? new Set(b) : void 0;
            for (const _ in B.nodes) {
              const { bbCode: S, ...D } = B.nodes[_],
                j = L(S, p);
              j && ((k[_] = D), y.set(_, j));
            }
            const I = {};
            for (const _ in B.marks) {
              const { bbCode: S, ...D } = B.marks[_];
              (!p || p.has(S.tag)) && ((I[_] = D), U.set(_, S));
            }
            (this.m_ProseMirrorSchema = new r.Sj({ nodes: k, marks: I })),
              y.forEach((_, S) => {
                const D = this.m_ProseMirrorSchema.nodes[S],
                  j = B.nodes[S],
                  P = Array.isArray(_) ? _ : [_];
                let e;
                j.content == "list_item+"
                  ? (e = this.m_ProseMirrorSchema.nodes.list_item)
                  : j.content?.indexOf("paragraph") != -1 &&
                    (e = this.m_ProseMirrorSchema.nodes.paragraph),
                  P.forEach(
                    ({
                      tag: c,
                      BBArgsToAttrs: t,
                      AttrsToBBArgs: l,
                      convertContentToAttr: n,
                      bVerbatimArgs: s,
                      bVerbatimContent: a,
                      ...d
                    }) => {
                      this.m_mapBBCodeDictionary.set(c, {
                        Constructor: {
                          node: D,
                          BBArgsToAttrs: t,
                          convertContentToAttr: n,
                          acceptNode: e,
                        },
                        skipFollowingNewline: !0,
                        ...d,
                      });
                    },
                  );
                const {
                  tag: u,
                  AttrsToBBArgs: M,
                  bVerbatimArgs: E,
                  bVerbatimContent: C,
                } = P[0];
                this.m_PMToBBCodeConfig.mapNodes.set(D, {
                  tag: u,
                  AttrsToBBArgs: M,
                  bVerbatimArgs: E,
                  bVerbatimContent: C,
                });
              }),
              U.forEach((_, S) => {
                const D = this.m_ProseMirrorSchema.marks[S],
                  { tag: j, BBArgsToAttrs: P, AttrsToBBArgs: e, ...u } = _;
                this.m_mapBBCodeDictionary.set(j, {
                  Constructor: { mark: D, BBArgsToAttrs: P },
                  ...u,
                }),
                  this.m_PMToBBCodeConfig.mapMarks.set(D, {
                    tag: j,
                    AttrsToBBArgs: e,
                  });
              });
          }
        }
        function L(T, B) {
          if (B)
            if (Array.isArray(T)) {
              const b = T.filter((k) => B.has(k.tag));
              return b.length > 0 ? b : void 0;
            } else return B.has(T.tag) ? T : void 0;
          else return T;
        }
      },
      81240: (H, N, o) => {
        "use strict";
        o.d(N, { i: () => L });
        var r = o(90626),
          O = o(8561);
        function L(T, B) {
          const { msAutosaveTimeout: b = 1e3, msMaxInterval: k = b * 10 } =
              B || {},
            [y, U] = r.useState(!1),
            p = r.useRef(0);
          return (
            (0, O.u)(
              T,
              r.useCallback(() => {
                (p.current = performance.now()), U(!0);
              }, []),
            ),
            r.useEffect(() => {
              if (!y || !T) return;
              const I = performance.now(),
                _ = (D = !1) => {
                  S = void 0;
                  const j = performance.now(),
                    P = j - p.current;
                  D || P >= b || j - I >= k
                    ? (console.log("Committing changes"),
                      T.CommitChanges(),
                      U(!1))
                    : (S = window.setTimeout(_, b - P));
                };
              let S = window.setTimeout(_, b);
              return () => {
                S && (window.clearTimeout(S), _(!0));
              };
            }, [y, T, b, k]),
            { bDirty: y }
          );
        }
      },
      23569: (H, N, o) => {
        "use strict";
        o.d(N, { M: () => p, U: () => k });
        var r = o(7850),
          O = o(38585),
          L = o(52893),
          T = o(90626),
          B = o(72739),
          b = o(19565);
        const k = T.memo(function (_) {
          const { specs: S } = _,
            [D, j] = T.useState([]),
            P = T.useRef(0),
            e = T.useCallback(
              (M) => (
                j((E) => [...E, { id: P.current++, nodeView: M }]),
                () => j((E) => E.filter((C) => C.nodeView != M))
              ),
              [],
            ),
            u = T.useMemo(() => {
              const M = {};
              return (
                S.filter(Boolean).forEach(
                  (E) => (M[E.type.name] = (C, c, t) => new U(E, C, c, t, e)),
                ),
                new L.k_({ props: { nodeViews: M } })
              );
            }, [S, e]);
          return (
            (0, b.c$)(u),
            D.map(({ id: M, nodeView: E }) => (0, r.jsx)(y, { nodeView: E }, M))
          );
        });
        function y(I) {
          const {
              element: _,
              spec: S,
              getProps: D,
              onPropsChanged: j,
              actions: P,
              isSelected: e,
            } = I.nodeView,
            [u, M] = T.useReducer((E) => E + 1, 0);
          return (
            T.useEffect(() => j.Register(M).Unregister, [j, M]),
            B.createPortal(
              T.createElement(S.component, { ...D(), selected: e(), ...P }),
              _,
            )
          );
        }
        class U {
          dom;
          contentDOM;
          onPropsChanged;
          node;
          selected;
          reactHost;
          destroy;
          constructor(_, S, D, j, P) {
            this.node = S;
            const e = D.dom.ownerDocument,
              u = e.createElement(_.type.isInline ? "span" : "div");
            this.dom = u;
            let M = u;
            _.bEditableContent &&
              ((M = this.reactHost =
                e.createElement(_.type.isInline ? "span" : "div")),
              (M.contentEditable = "false"),
              u.appendChild(M),
              (this.contentDOM = e.createElement(
                _.type.inlineContent ? "span" : "div",
              )),
              u.appendChild(this.contentDOM));
            const { selection: E } = D.state;
            this.selected = j() >= E.from && j() + S.nodeSize <= E.to;
            const C = (l) => {
                const n = l(D.state.tr, S, j());
                n && D.dispatch(n);
              },
              c = {
                update: C,
                setAttrs: (l, n) => C((s, a, d) => s.setNodeMarkup(d, n, l)),
                removeNode: () => C((l, n, s) => l.delete(s, s + n.nodeSize)),
                focusView: () => {
                  window.setTimeout(() => D.focus(), 1);
                },
              },
              t = new O.l();
            (this.destroy = P({
              element: M,
              spec: _,
              getProps: () => _.readProps(this.node),
              isSelected: () => this.selected,
              onPropsChanged: t,
              actions: c,
            })),
              (this.onPropsChanged = t.Dispatch.bind(t));
          }
          update(_, S, D) {
            return _.type != this.node.type
              ? !1
              : ((this.node = _), this.onPropsChanged(), !0);
          }
          ignoreMutation(_) {
            return this.contentDOM && this.contentDOM.contains(_.target)
              ? !1
              : this.reactHost
                ? !0
                : _.type != "selection";
          }
          stopEvent(_) {
            return !!this.reactHost && this.reactHost.contains(_.target);
          }
          selectNode() {
            (this.selected = !0), this.onPropsChanged();
          }
          deselectNode() {
            (this.selected = !1), this.onPropsChanged();
          }
        }
        function p(I) {
          return (_, S, D) => _.replaceWith(D, D + S.nodeSize, I);
        }
      },
      19565: (H, N, o) => {
        "use strict";
        o.d(N, { KF: () => M, Ot: () => u, c$: () => E, Hd: () => C });
        var r = o(7850),
          O = o(12362),
          L = o(15024),
          T = o(7502),
          B = o(52893),
          b = o(90626),
          k = o(98724),
          y = o(79216),
          U = o(4188),
          p = o(74827);
        function I(c) {
          const { nodes: t, marks: l } = c,
            n = (0, O.st)(
              O.I$,
              (a, d) => (
                d &&
                  d(
                    a.tr
                      .replaceSelectionWith(t.hard_break.createChecked())
                      .scrollIntoView(),
                  ),
                !0
              ),
            ),
            s = {
              "Mod-z": k.tN,
              "Mod-y": k.ZS,
              "Shift-Mod-z": k.ZS,
              Backspace: y.dv,
              Escape: O.hy,
              "Mod-Enter": n,
              "Shift-Enter": n,
              "Mod-b": (0, O.wh)(l.strong),
              "Mod-i": (0, O.wh)(l.italic),
              "Mod-u": (0, O.wh)(l.underline),
              "Mod-Shift-x": (0, O.wh)(l.strike),
              "Ctrl-Shift-s": (0, O.wh)(l.strike),
              Enter: (0, U.wn)(t.list_item),
              "Mod-[": (0, U.T2)(t.list_item),
              "Mod-]": (0, U.$B)(t.list_item),
              "Ctrl-Shift-1": (0, O.y_)(t.heading, { level: 1 }),
              "Ctrl-Shift-2": (0, O.y_)(t.heading, { level: 2 }),
              "Ctrl-Shift-3": (0, O.y_)(t.heading, { level: 3 }),
              "Ctrl-Shift-4": (0, O.y_)(t.heading, { level: 4 }),
              "Ctrl-Shift-5": (0, O.y_)(t.heading, { level: 5 }),
              "Ctrl-Shift-7": (0, O.y_)(t.ordered_list),
              "Ctrl-Shift-8": (0, O.y_)(t.bullet_list),
              "Ctrl-Shift-0": (0, O.y_)(t.paragraph),
            };
          return (
            l.code && (s["Ctrl-Shift-c"] = (0, O.wh)(l.code)),
            t.code_block && (s["Alt-Ctrl-Shift-c"] = (0, O.y_)(t.code_block)),
            t.horizontal_rule &&
              (s["Mod-_"] = (a, d) => (
                d &&
                  d(
                    a.tr
                      .replaceSelectionWith(t.horizontal_rule.create())
                      .scrollIntoView(),
                  ),
                !0
              )),
            (0, T.w)(s)
          );
        }
        function _(c, t) {
          return new y.fV(c, (l, n, s, a) =>
            l.tr.replaceWith(s, a, t.create()),
          );
        }
        function S(c) {
          const { nodes: t, marks: l } = c;
          return (0, y.sM)({
            rules: [
              (0, y.tG)(
                /^(\d+)\.\s$/,
                t.ordered_list,
                (n) => ({ order: parseInt(n[1]) }),
                (n, s) => s.childCount + s.attrs.order == parseInt(n[1]),
              ),
              (0, y.tG)(/^\s*([-+*])\s$/, t.bullet_list),
              (0, p.OX)(/(?<!\w)\*([^*]+)\*/, l.strong),
              (0, p.OX)(/(?<!\w)_([^_]+)_/, l.italic),
              (0, p.OX)(/(?<!\w)~([^~]+)~/, l.strike),
              (0, p.OX)(/(?<!\w)`([^`]+)`/, l.code),
              (0, y.JJ)(/^```$/, t.code_block),
              (0, y.JJ)(/^(#{1,5})\s$/, t.heading, (n) => ({
                level: n[1].length,
              })),
              t.horizontal_rule && _(/^(\*\*\*|---|___)$/, t.horizontal_rule),
            ].filter(Boolean),
          });
        }
        var D = o(45772),
          j = o(74763),
          P = o(8422);
        const e = b.createContext(void 0);
        function u(c) {
          const { view: t, pmState: l, children: n } = c,
            s = b.useMemo(() => ({ view: t, pmState: l }), [t, l]);
          return (0, r.jsx)(e.Provider, { value: s, children: n });
        }
        const M = b.memo(function (t) {
          const { schema: l, refOnUpdate: n, bSingleLine: s } = t;
          return (
            E(
              b.useMemo(
                () =>
                  n &&
                  new B.k_({
                    view: (a) => ({
                      update: (...d) => n.current && n.current(...d),
                    }),
                  }),
                [n],
              ),
            ),
            E(b.useMemo(() => (0, T.w)(s ? P.Mw : {}), [s])),
            E(s ? P.zL : void 0),
            E(b.useMemo(() => (0, L.z)(), [])),
            E(b.useMemo(() => I(l), [l])),
            E(b.useMemo(() => (0, T.w)(O.RV), [])),
            E(b.useMemo(() => S(l), [l])),
            null
          );
        });
        function E(c) {
          const { pmState: t } = b.useContext(e);
          b.useEffect(() => {
            if (!(!t || !c)) return t.InstallPlugin(c);
          }, [c, t]);
        }
        function C() {
          return b.useContext(e)?.view;
        }
      },
      84419: (H, N, o) => {
        "use strict";
        o.d(N, { BM: () => b, DQ: () => S, cI: () => P, ce: () => k });
        var r = o(4188),
          O = o(36707),
          L = o(29950),
          T = o(33645),
          B = o.n(T);
        function b(e, u, M = 0) {
          return () => [e, { class: u }, M];
        }
        function k(e, u, M = 0) {
          return [e, { class: u }, M];
        }
        function y(e, u) {
          return () => [
            u,
            { class: bbstyles.PreservedUnsupportedTag },
            ["span", { class: bbstyles.Tag }, `[${e}]`],
            ["span", 0],
            ["span", { class: bbstyles.Tag }, `[/${e}]`],
          ];
        }
        function U(e) {
          return {
            tag: `h${e}`,
            BBArgsToAttrs: (u) => ({ level: e, align: u.align || "left" }),
            AttrsToBBArgs: (u) => {
              let M = { tag: `h${u.level}`, args: {} };
              return (
                u.align &&
                  u.align != "left" &&
                  M.args &&
                  (M.args.align = u.align),
                M
              );
            },
          };
        }
        function p(e) {
          return {
            tag: `h${e}`,
            getAttrs(u) {
              return { level: e, align: u.style.textAlign || "left" };
            },
          };
        }
        const I = {
            paragraph: {
              attrs: { align: { default: "left" } },
              content: "inline*",
              group: "block",
              parseDOM: [
                {
                  tag: "p",
                  getAttrs(e) {
                    return { align: e.style.textAlign || "left" };
                  },
                },
              ],
              toDOM(e) {
                const u = { class: (0, O.A)("pm_paragraph", B().Paragraph) };
                return (
                  e.attrs.align &&
                    e.attrs.align != "left" &&
                    (u.style = `text-align: ${e.attrs.align}`),
                  ["p", u, 0]
                );
              },
              bbCode: {
                tag: "p",
                autocloses: !0,
                BBArgsToAttrs: (e) => ({ align: e.align }),
                AttrsToBBArgs: (e) => {
                  let u = { args: {} };
                  return (
                    e.align && e.align != "left" && (u.args.align = e.align), u
                  );
                },
              },
            },
            heading: {
              attrs: { level: { default: 1 }, align: { default: "left" } },
              content: "inline*",
              group: "block",
              defining: !0,
              parseDOM: [1, 2, 3, 4, 5].map(p),
              toDOM(e) {
                const u = {
                  class:
                    `BB_Header${e.attrs.level} ` +
                    B()[`Header${e.attrs.level}`],
                };
                return (
                  e.attrs.align &&
                    e.attrs.align != "left" &&
                    (u.style = `text-align: ${e.attrs.align}`),
                  ["h" + e.attrs.level, u, 0]
                );
              },
              bbCode: [1, 2, 3, 4, 5].map(U),
            },
            image: {
              inline: !0,
              attrs: {
                src: {},
                alt: { default: null },
                title: { default: null },
                style: { default: void 0 },
              },
              group: "inline",
              draggable: !0,
              parseDOM: [
                {
                  tag: "img[src]",
                  getAttrs(e) {
                    return {
                      src: e.getAttribute("src"),
                      title: e.getAttribute("title"),
                      alt: e.getAttribute("alt"),
                      style: e.getAttribute("style"),
                    };
                  },
                },
              ],
              toDOM(e) {
                const { src: u, alt: M, title: E, style: C } = e.attrs;
                return [
                  "img",
                  {
                    src: (0, L.J)(u),
                    alt: M,
                    title: E,
                    class: (0, O.A)(B().Image, {
                      [B().Image_Inline]: C === "inline",
                    }),
                  },
                ];
              },
              bbCode: {
                tag: "img",
                BBArgsToAttrs: (e) => ({
                  src: e.src,
                  style: e.style ?? void 0,
                }),
                AttrsToBBArgs: (e) => ({
                  args: { src: e.src, ...(e.style ? { style: e.style } : {}) },
                }),
                convertContentToAttr: "src",
              },
            },
            video: {
              inline: !0,
              attrs: {
                webm: { default: "" },
                mp4: { default: "" },
                poster: { default: "" },
                autoplay: { default: !0 },
                controls: { default: !1 },
              },
              group: "inline",
              draggable: !0,
              parseDOM: [
                {
                  tag: "video",
                  getAttrs(e) {
                    if (e.tagName !== "video") return;
                    const u = e;
                    let M = "",
                      E = "";
                    for (const C of u.querySelectorAll("source"))
                      C.type == "video/mp4"
                        ? (M = C.src)
                        : C.type == "video/webm" && (E = C.src);
                    return {
                      mp4: M,
                      webm: E,
                      poster: u.poster || "",
                      autoplay: !!u.autoplay,
                      controls: !!u.controls,
                    };
                  },
                },
              ],
              toDOM(e) {
                const {
                    webm: u,
                    mp4: M,
                    poster: E,
                    autoplay: C,
                    controls: c,
                  } = e.attrs,
                  t = [];
                return (
                  u &&
                    t.push([
                      "source",
                      { src: (0, L.J)(u), type: "video/webm" },
                    ]),
                  M &&
                    t.push(["source", { src: (0, L.J)(M), type: "video/mp4" }]),
                  [
                    "video",
                    {
                      poster: (0, L.J)(E),
                      autoPlay: !!C,
                      controls: !!c,
                      loop: !c && !!C,
                    },
                    ...t,
                  ]
                );
              },
              bbCode: {
                tag: "video",
                BBArgsToAttrs: (e) => ({
                  webm: e.webm,
                  mp4: e.mp4,
                  poster: e.poster,
                  autoplay: e.autoplay == "true",
                  controls: e.controls == "true",
                }),
                AttrsToBBArgs: (e) => ({
                  args: {
                    webm: e.webm || "",
                    mp4: e.mp4 || "",
                    poster: e.poster || "",
                    autoplay: e.autoplay ? "true" : "false",
                    controls: e.controls ? "true" : "false",
                  },
                }),
              },
            },
            bullet_list: {
              ...r.fF,
              content: "list_item+",
              group: "block",
              toDOM: b("ul", B().List),
              bbCode: { tag: "list" },
            },
            ordered_list: {
              ...r.o8,
              content: "list_item+",
              group: "block",
              toDOM: b("ol", B().OrderedList),
              bbCode: { tag: "olist" },
            },
            list_item: {
              ...r.Aw,
              content: "paragraph block*",
              toDOM: b("li", B().ListItem),
              bbCode: { tag: "*", autocloses: !0 },
            },
            code_block: {
              content: "inline*",
              marks: "",
              group: "block",
              code: !0,
              defining: !0,
              parseDOM: [{ tag: "pre", preserveWhitespace: "full" }],
              toDOM() {
                return [
                  "pre",
                  { class: B().CodeBlock },
                  ["code", { class: B().Code }, 0],
                ];
              },
              bbCode: { tag: "code" },
            },
          },
          _ = {
            strong: {
              parseDOM: [
                { tag: "strong" },
                {
                  tag: "b",
                  getAttrs: (e) => e.style.fontWeight != "normal" && null,
                },
                {
                  style: "font-weight=400",
                  clearMark: (e) => e.type.name == "strong",
                },
                {
                  style: "font-weight",
                  getAttrs: (e) => /^(bold(er)?|[5-9]\d{2,})$/.test(e) && null,
                },
              ],
              toDOM: b("b", (0, O.A)("BB_Bold", B().Bold)),
              bbCode: { tag: "b" },
            },
            italic: {
              parseDOM: [
                { tag: "i" },
                { tag: "em" },
                { style: "font-style=italic" },
                {
                  style: "font-style=normal",
                  clearMark: (e) => e.type.name == "em",
                },
              ],
              toDOM: b("i", (0, O.A)("BB_Italic", B().Italic)),
              bbCode: { tag: "i" },
            },
            underline: {
              parseDOM: [{ tag: "u" }, { style: "text-decoration=underline" }],
              toDOM: b("u", (0, O.A)("BB_Underline", B().Underline)),
              bbCode: { tag: "u" },
            },
            strike: {
              parseDOM: [{ style: "text-decoration=line-through" }],
              toDOM: b("span", (0, O.A)("BB_Strike", B().Strike)),
              bbCode: { tag: "strike" },
            },
            code: {
              parseDOM: [{ tag: "code" }],
              toDOM: b("code", (0, O.A)("BB_Code", B().Code)),
              bbCode: { tag: "c" },
            },
            link: {
              attrs: { href: {}, title: { default: null } },
              inclusive: !1,
              parseDOM: [
                {
                  tag: "a[href]",
                  getAttrs(e) {
                    return {
                      href: (0, L.J)(e.getAttribute("href") ?? ""),
                      title: e.getAttribute("title"),
                    };
                  },
                },
              ],
              toDOM(e) {
                const { href: u, title: M } = e.attrs;
                return [
                  "a",
                  { href: (0, L.J)(u), title: M, class: "BB_Link" },
                  0,
                ];
              },
              bbCode: {
                tag: "url",
                BBArgsToAttrs: (e) => ({ href: e[""] }),
                AttrsToBBArgs: (e) => ({ args: { "": e.href } }),
                convertContentToAttr: "href",
              },
            },
          },
          S = { nodes: I, marks: _ },
          P = {
            node: {},
            marks: {
              color: {
                attrs: { color: {} },
                parseDOM: [{ style: "color", getAttrs: (e) => ({ color: e }) }],
                toDOM(e) {
                  return [
                    "span",
                    {
                      style: `color: ${e.attrs.color}`,
                      class: (0, O.A)("BB_Color", B().Color),
                    },
                    0,
                  ];
                },
                bbCode: {
                  tag: "color",
                  BBArgsToAttrs: (e) => ({ color: e[""] }),
                  AttrsToBBArgs: (e) => ({ args: { "": e.color } }),
                },
                inclusive: !0,
                excludes: "",
              },
              bgcolor: {
                attrs: { color: {} },
                parseDOM: [
                  { style: "bgcolor", getAttrs: (e) => ({ color: e }) },
                ],
                toDOM(e) {
                  return [
                    "span",
                    {
                      style: `background-color: ${e.attrs.color}`,
                      class: (0, O.A)("BB_BGColor", B().BGColor),
                    },
                    0,
                  ];
                },
                bbCode: {
                  tag: "bgcolor",
                  BBArgsToAttrs: (e) => ({ color: e[""] }),
                  AttrsToBBArgs: (e) => ({ args: { "": e.color } }),
                },
                inclusive: !0,
                excludes: "",
              },
            },
          };
      },
      8561: (H, N, o) => {
        "use strict";
        o.d(N, { n: () => E, u: () => C });
        var r = o(38585),
          O = o(64868),
          L = o(98724),
          T = o(52893),
          B = o(8145),
          b = o(57053),
          k = o(71742);
        class y {
          m_nodes = [];
          m_schema;
          m_bConvertNewlinesToBR;
          m_fnProcessText;
          constructor(t, l, n) {
            (this.m_schema = t),
              (this.m_bConvertNewlinesToBR = l?.bConvertNewlinesToBR ?? !1);
            const s = n && "mark" in n;
            this.m_fnProcessText = s ? void 0 : l?.fnProcessText;
          }
          AppendText(t, l) {
            t.length &&
              (this.m_bConvertNewlinesToBR
                ? this.m_nodes.push(...this.GenerateBreaksForNewlines(t))
                : this.m_nodes.push(...this.TextNode(t)));
          }
          AppendNode(t) {
            this.m_nodes.push(t);
          }
          GetElements() {
            return this.m_nodes;
          }
          GenerateBreaksForNewlines(t) {
            const l = [];
            let n = 0;
            for (
              let s = t.indexOf(
                `
`,
                n,
              );
              s !== -1;
              s = t.indexOf(
                `
`,
                n,
              )
            )
              n != s && l.push(...this.TextNode(t.substring(n, s))),
                l.push(this.m_schema.nodes.hard_break.createChecked()),
                (n = s + 1);
            return n < t.length && l.push(...this.TextNode(t.substring(n))), l;
          }
          TextNode(t) {
            const l = this.m_fnProcessText && this.m_fnProcessText(t);
            return l || [this.m_schema.text(t)];
          }
        }
        function U(c) {
          return c
            .filter((t) => t.isText)
            .map((t) => t.text)
            .join();
        }
        function p(c) {
          let t = "";
          return (
            c.descendants((l) => {
              l.isText && (t += l.text);
            }),
            t
          );
        }
        class I extends B.Al {
          m_schemaConfig;
          m_mapPMBBNodes = new Map();
          m_bUseBackslashEscapes;
          constructor(t, l) {
            super(t.bbcode_dictionary, (n) => {
              const s = n?.tag && t.bbcode_dictionary.get(n.tag);
              return new y(
                t.pm_schema,
                l,
                s && "Constructor" in s ? s.Constructor : void 0,
              );
            }),
              (this.m_schemaConfig = t),
              (this.m_bUseBackslashEscapes = l?.bUseBackslashEscapes ?? !0),
              this.m_schemaConfig.bbcode_dictionary.forEach((n) => {
                "node" in n.Constructor &&
                  this.m_mapPMBBNodes.set(
                    n.Constructor.node.name,
                    n.Constructor,
                  );
              });
          }
          get schema() {
            return this.m_schemaConfig.pm_schema;
          }
          ParseBBCode(t) {
            const l = this.Parse(
              t,
              this.BBNodeToPMNode.bind(this),
              this.m_bUseBackslashEscapes,
            );
            return this.m_schemaConfig.pm_schema.topNodeType.createChecked(
              {},
              this.ConvertLineBreaksToParagraphs(b.FK.fromArray(l)),
            );
          }
          TryCreateNode(t, l, n) {
            let s = b.FK.from(l),
              a;
            if (
              !t.node.validContent(s) &&
              (t.node.isInline ||
                (s = b.FK.from(
                  l.filter((d) =>
                    d.isText && d.text.match(/^\s*$/)
                      ? !1
                      : !(
                          d.type == this.schema.nodes.hard_break &&
                          !t.node.validContent(b.FK.from(d))
                        ),
                  ),
                )),
              !t.node.validContent(s))
            ) {
              const d = t.acceptNode;
              a = [];
              let m = [],
                g = !1,
                i = !1;
              for (let f = 0; f < s.childCount; f++) {
                const h = s.child(f),
                  v = b.FK.from(h),
                  A = t.node.validContent(v);
                !i && (A || d?.validContent(v))
                  ? (A || (g = !0), m.push(h))
                  : ((i = !0), a.push(h));
              }
              if ((console.assert(!g || !!d), g && d)) {
                d.isBlock &&
                  m.length > 1 &&
                  m[m.length - 1].type == this.schema.nodes.hard_break &&
                  (m = m.slice(0, -1));
                const f = this.m_mapPMBBNodes.get(d.name);
                (0, k.wT)(
                  f,
                  `Indicated acceptNode type ${d.name} for ${t.node.name} missing`,
                );
                let h;
                try {
                  f
                    ? (h = this.TryCreateNode(f, m, void 0))
                    : (h = d.createChecked(void 0, m));
                } catch (v) {
                  console.error(v), (h = []), (a = [...m, ...a]);
                }
                s = b.FK.from(h);
              } else s = b.FK.from(m);
            }
            try {
              const d =
                t.node.createAndFill(n, s) || t.node.createChecked(n, s);
              return a ? [d, ...a] : d;
            } catch {
              return (
                (0, k.wT)(
                  !1,
                  `Invalid content for node type ${t.node.name}, removing and promoting children.`,
                ),
                l
              );
            }
          }
          BBNodeToPMNode(t, l, ...n) {
            let s = t.BBArgsToAttrs ? t.BBArgsToAttrs(l.args || {}) : void 0;
            try {
              if (
                ("convertContentToAttr" in t &&
                  t.convertContentToAttr &&
                  ((!s || !s[t.convertContentToAttr]) &&
                    (s = { ...(s || {}), [t.convertContentToAttr]: U(n) }),
                  "node" in t && (n = [])),
                "node" in t)
              )
                return this.TryCreateNode(t, n, s);
              {
                const a = t.mark.create(s);
                return n.map((d) => this.RecursivelyApplyMark(d, a));
              }
            } catch (a) {
              return (
                console.error(`Error parsing [${l.tagname}] tag: ${a}`, a), []
              );
            }
          }
          RecursivelyApplyMark(t, l) {
            if (t.isText || t.type.allowsMarkType(l.type))
              return t.mark([...t.marks, l]);
            {
              const n = [];
              return (
                t.descendants(
                  (s) => (n.push(this.RecursivelyApplyMark(s, l)), !1),
                ),
                t.type.create(t.attrs, n, t.marks)
              );
            }
          }
          ConvertLineBreaksToParagraphs(t) {
            const l = new Map(),
              n = this.m_schemaConfig.pm_schema;
            this.m_mapPMBBNodes.forEach((d) => {
              d.acceptNode && l.set(d.acceptNode.name, d.node);
            });
            const s = [],
              a = {
                nodes: [],
                nodeType: void 0,
                reset() {
                  (this.nodes = []), (this.nodeType = void 0);
                },
                accumulate(d, m) {
                  return (
                    this.nodeType && d != this.nodeType && this.emit(),
                    (this.nodeType = d),
                    this.nodes.push(m),
                    !0
                  );
                },
                emit(d = !1) {
                  const m = this.nodeType || (d ? n.nodes.paragraph : void 0);
                  m && (s.push(m.createChecked({}, this.nodes)), this.reset());
                },
              };
            return (
              t.forEach((d) => {
                const m = d.type == n.nodes.hard_break,
                  g = b.FK.from(d);
                if (m || n.topNodeType.validContent(g)) {
                  const i = m && a.nodes.length > 0;
                  a.emit(),
                    m
                      ? i || s.push(n.nodes.paragraph.createChecked())
                      : s.push(d);
                } else {
                  let i;
                  if (
                    (n.nodes.paragraph.validContent(g)
                      ? (i = n.nodes.paragraph)
                      : (i = l.get(d.type.name)),
                    i)
                  )
                    a.accumulate(i, d);
                  else {
                    (0, k.wT)(
                      !1,
                      `Couldn't accept ${d.type.name} at root of document, converting to paragraph`,
                    );
                    const f = p(d);
                    f && a.accumulate(n.nodes.paragraph, n.text(f));
                  }
                }
              }),
              (a.nodes.length || !s.length) && a.emit(!0),
              b.FK.from(s)
            );
          }
        }
        function _(c, t, l) {
          const n = {
            schema: t.pm_schema,
            config: t.pm_to_bbcode_config,
            bUseBackslashEscapes: l?.bUseBackslashEscapes ?? !0,
          };
          return S(n, c, [], !1);
        }
        function S(c, t, l, n) {
          const { schema: s, config: a } = c;
          let d = t.marks,
            m = "";
          const g = a.mapNodes.get(t.type),
            { tag: i, args: f } = e(g, t);
          i == "emoticon"
            ? (m += ":")
            : i && (m += (0, B.CS)(i, f, g?.bVerbatimArgs));
          const h = n || !!g?.bVerbatimContent;
          let v = !1;
          return (
            t.content.forEach((A) => {
              if (
                (([m, d] = j(a, d, A.marks, m)),
                ([m, d] = P(a, d, A.marks, m)),
                A.type.isText)
              ) {
                const x = A.text || "";
                m += h || !c.bUseBackslashEscapes ? x : (0, B.vE)(x);
              } else if (A.type == s.nodes.hard_break)
                m += `
`;
              else {
                const x = D(a, A);
                x &&
                  v &&
                  (m += `
`),
                  (m += S(c, A, d, h)),
                  (v = x);
                return;
              }
              v = !1;
            }),
            ([m] = j(a, d, l, m)),
            i == "emoticon" ? (m += ":") : i && (m += (0, B.op)(i)),
            m
          );
        }
        function D(c, t) {
          return t.type.isBlock && !e(c.mapNodes.get(t.type), t).tag;
        }
        function j(c, t, l, n) {
          const s = [];
          for (const d of t) l.indexOf(d) === -1 && s.push(d);
          if (!s.length) return [n, t];
          const a = t.slice();
          for (
            ;
            s.length &&
            ((0, k.wT)(a.length, "no marks left to close"), !!a.length);
          ) {
            const d = a.pop(),
              m = c.mapMarks.get(d.type),
              { tag: g } = u(m, d);
            n += (0, B.op)(g);
            const i = s.indexOf(d);
            i != -1 && s.splice(i, 1);
          }
          return [n, a];
        }
        function P(c, t, l, n) {
          let s;
          for (const a of l)
            if (t.indexOf(a) === -1) {
              s || (s = t.slice());
              const d = c.mapMarks.get(a.type);
              if (((0, k.wT)(d, "mark missing bbtag"), d)) {
                s.push(a);
                const { args: m, tag: g } = u(d, a);
                n += (0, B.CS)(g, m);
              }
            }
          return [n, s ?? t];
        }
        function e(c, t) {
          if (c && c.AttrsToBBArgs) {
            const { tag: l = c.tag, args: n = {} } = c.AttrsToBBArgs(
              t.attrs,
              t,
            );
            return { tag: l, args: n };
          }
          return { tag: c?.tag, args: {} };
        }
        function u(c, t) {
          if (c && c.AttrsToBBArgs) {
            const { tag: l = c.tag, args: n = {} } = c.AttrsToBBArgs(
              t.attrs,
              t,
            );
            return { tag: l, args: n };
          }
          return { tag: c?.tag, args: {} };
        }
        const M = new T.hs("CProseMirrorState - OnChange");
        class E {
          m_bbcode;
          m_currentDoc;
          m_bHasUncomittedChanges = !1;
          m_schemaConfig;
          m_bbcodeParser;
          m_bUseBackslashEscapes;
          m_onStateChangedCallbacks = new r.l();
          m_fnCommitChanges;
          m_view;
          m_state;
          constructor(t, l, n, s) {
            const { parser: a, bUseBackslashEscapes: d = !0 } = s ?? {};
            (this.m_schemaConfig = t),
              (this.m_bUseBackslashEscapes = d),
              (this.m_bbcodeParser = new I(t, {
                ...a,
                bUseBackslashEscapes: d,
              })),
              (this.m_bbcode = l),
              (this.m_fnCommitChanges = n),
              (this.m_state = this.ConstructState());
          }
          CommitChanges() {
            this.m_currentDoc &&
              this.m_bHasUncomittedChanges &&
              ((this.m_bbcode = _(this.m_currentDoc, this.m_schemaConfig, {
                bUseBackslashEscapes: this.m_bUseBackslashEscapes,
              })),
              this.m_fnCommitChanges(this.m_bbcode, this.m_currentDoc),
              (this.m_bHasUncomittedChanges = !1));
          }
          BHasUncomittedChanges() {
            return this.m_bHasUncomittedChanges;
          }
          UpdateState(t) {
            const l = t(this.m_view?.state.tr || this.m_state.tr);
            !l ||
              !l.docChanged ||
              (this.m_view
                ? this.m_view.dispatch(l)
                : (this.m_state = this.m_state.apply(l)));
          }
          get state() {
            return this.m_state;
          }
          get schemaConfig() {
            return this.m_schemaConfig;
          }
          get bbcodeParser() {
            return this.m_bbcodeParser;
          }
          get OnStateChangedCallbacks() {
            return this.m_onStateChangedCallbacks;
          }
          ConstructState() {
            const t = new T.k_({
                key: M,
                view: (n) => (
                  console.assert(!this.m_view),
                  (this.m_view = n),
                  {
                    update: (s, a) => this.OnStateChange(a, s.state),
                    destroy: () => (this.m_view = void 0),
                  }
                ),
              }),
              l = [(0, L.b6)(), t];
            return T.$t.create({
              schema: this.m_schemaConfig.pm_schema,
              doc: this.m_bbcodeParser.ParseBBCode(this.m_bbcode),
              plugins: l,
            });
          }
          InstallPlugin(t) {
            const l = this.m_view ? this.m_view.state : this.m_state;
            return (
              l.plugins.includes(t) ||
                ((this.m_state = l.reconfigure({ plugins: [...l.plugins, t] })),
                this.m_view?.updateState(this.m_state)),
              () => {
                const n = this.m_view ? this.m_view.state : this.m_state;
                (this.m_state = n.reconfigure({
                  plugins: n.plugins.filter((s) => s != t),
                })),
                  this.m_view?.updateState(this.m_state);
              }
            );
          }
          OnStateChange(t, l) {
            (this.m_state = l),
              t.doc &&
                t.doc != l.doc &&
                ((this.m_currentDoc = l.doc),
                (this.m_bHasUncomittedChanges = !0),
                this.m_onStateChangedCallbacks.Dispatch(
                  this.m_currentDoc,
                  t.doc,
                ));
          }
          ReplaceDocument(t) {
            this.m_bbcode != t &&
              this.UpdateState((l) => {
                this.m_bbcode = t;
                const n = this.m_bbcodeParser.ParseBBCode(t);
                return (
                  (l = this.m_state.tr
                    .replaceWith(0, this.m_state.doc.content.size, n)
                    .scrollIntoView()),
                  l
                );
              });
          }
        }
        function C(c, t) {
          (0, O.hL)(c?.OnStateChangedCallbacks, t);
        }
      },
      74827: (H, N, o) => {
        "use strict";
        o.d(N, {
          Cd: () => B,
          OX: () => D,
          bQ: () => j,
          gj: () => y,
          vn: () => b,
          wt: () => I,
        });
        var r = o(79216),
          O = o(52893);
        function L(P, e) {
          const u = P.state;
          if (!P.state.plugins.includes(e)) {
            const M = [...P.state.plugins, e];
            P.updateState(u.reconfigure({ plugins: M }));
          }
        }
        function T(P, e) {
          if (!P.isDestroyed) {
            const u = P.state,
              M = u.plugins.filter((E) => E !== e);
            P.updateState(u.reconfigure({ plugins: M }));
          }
        }
        function B(P, e) {
          const { from: u, $from: M, to: E, empty: C } = P.selection;
          return C
            ? !!e.isInSet(P.storedMarks || M.marks())
            : P.doc.rangeHasMark(u, E, e);
        }
        function b(P, e, u) {
          const { parent: M } = u,
            E = M.childAfter(u.parentOffset),
            C = E.node?.marks.find((a) => a.type == e);
          if (!C) return;
          let c = u.index() - 1,
            t = u.start() + E.offset;
          for (; c >= 0 && C.isInSet(M.child(c).marks); )
            (t -= M.child(c).nodeSize), (c -= 1);
          let l = u.index() + 1,
            n = u.start() + E.offset + E.node.nodeSize;
          for (; l < M.childCount && C.isInSet(M.child(l).marks); )
            (n += M.child(l).nodeSize), (l += 1);
          const s = P.doc.slice(t, n);
          return { from: t, to: n, slice: s, mark: C };
        }
        function k(P, e, u) {
          if (P.type !== e) return !1;
          if (u === void 0) return !0;
          for (const M in u) if (u[M] !== P.attrs[M]) return !1;
          return !0;
        }
        function y(P, e, u) {
          let { $from: M, to: E } = P.selection;
          for (let C = M.depth; C > 0; C--) {
            if (E > M.end(C)) return !1;
            const c = M.node(C);
            if (k(c, e, u)) return !0;
          }
          return !1;
        }
        function U(P, e, u) {
          for (let M of e) if (y(P, M, u)) return M;
          return null;
        }
        function p(P, e, u) {
          const { $from: M, to: E } = P.selection;
          for (let C = M.sharedDepth(E); C > 0; C--) {
            const c = M.node(C);
            if (c.type === e) return !!c.attrs[u];
          }
          return !1;
        }
        function I(P, e, u) {
          const { $from: M, to: E } = P.selection;
          for (let C = M.sharedDepth(E); C > 0; C--) {
            const c = M.node(C);
            if (u === void 0 ? c.type === e : c.hasMarkup(e, u))
              return M.before(C);
          }
        }
        function _(P, e) {
          return (u, M) => {
            const E = I(u, P);
            if (E === void 0) return !1;
            if (M) {
              const C = u.doc.nodeAt(E);
              if ((console.assert(!!C), !C)) return !1;
              M(u.tr.setNodeMarkup(E, P, { ...C.attrs, [e]: !C.attrs[e] }));
            }
            return !0;
          };
        }
        function S(P, e) {
          return (u, M) => {
            const { $from: E } = u.selection;
            let C = null,
              c = 0;
            for (let t = E.depth; t > 0; t--) {
              const l = E.node(t);
              if (P.includes(l.type)) {
                (C = l), (c = E.before(t));
                break;
              }
            }
            return C
              ? (M && M(u.tr.setNodeMarkup(c, C.type, { ...C.attrs, ...e })),
                !0)
              : !1;
          };
        }
        function D(P, e, u = {}) {
          return new r.fV(P, (M, E, C, c) => {
            const t = u instanceof Function ? u(E) : u,
              l = M.tr;
            if (E[1]) {
              const n = C + E[0].indexOf(E[1]),
                s = n + E[1].length;
              s < c && l.delete(s, c),
                n > C && l.delete(C, n),
                (c = C + E[1].length);
            }
            return l.addMark(C, c, e.create(t)), l.removeStoredMark(e), l;
          });
        }
        function j(P, e, u) {
          const M = { left: e, top: u },
            E = P.posAtCoords(M);
          if (E?.pos) {
            const C = P.state.doc.resolve(E.pos);
            P.dispatch(P.state.tr.setSelection(O.U3.near(C)));
          }
        }
      },
      28922: (H, N, o) => {
        "use strict";
        o.d(N, { s: () => _ });
        var r = o(7850),
          O = o(39905),
          L = o(90626),
          T = o(61257),
          B = o(19316),
          b = o(56718),
          k = o(71421),
          y = o(27828),
          U = o.n(y);
        function p(S) {
          return `rgba(${S.rgb.r}, ${S.rgb.g}, ${S.rgb.b}, ${S.rgb.a})`;
        }
        function I(S) {
          const D = parseInt(S.slice(1), 16),
            j = (D >> 16) & 255,
            P = (D >> 8) & 255,
            e = D & 255;
          return `rgba(${j}, ${P}, ${e}, 1)`;
        }
        function _(S) {
          const { color: D, onChange: j, strTitle: P, disableAlpha: e } = S,
            [u, M] = (0, L.useState)(() => D || "rgba(255, 255, 255, 1)"),
            E = (0, L.useCallback)(async () => {
              if (!("EyeDropper" in window)) {
                alert(O.Z.Localize("#Sale_EyeDropperError"));
                return;
              }
              try {
                const t = (await new window.EyeDropper().open()).sRGBHex,
                  l = I(t);
                M(l), j(l);
              } catch (C) {
                console.warn(O.Z.Localize("#Sale_EyeDropperFailed"), C);
              }
            }, [j]);
          return (0, r.jsxs)("div", {
            className: U().ColorPickerDialog,
            children: [
              !!P && (0, r.jsx)(B.JU, { children: P }),
              (0, r.jsx)(T.xk, {
                onChange: (C) => {
                  const c = p(C);
                  M(c), j(c);
                },
                color: u,
                disableAlpha: e,
                className: U().ColorPickerCtn,
              }),
              (0, r.jsx)("div", {
                className: U().EyeDropperCtn,
                children: (0, r.jsx)(k.Gq, {
                  toolTipContent: O.Z.Localize("#Sale_BackgroundColorPicker"),
                  children: (0, r.jsx)(B.$n, {
                    className: U().EyeDropperBtn,
                    onClick: E,
                    children: (0, r.jsx)(b.O7b, {}),
                  }),
                }),
              }),
            ],
          });
        }
      },
      81973: (H, N, o) => {
        "use strict";
        o.d(N, { X: () => U, w: () => b });
        var r = o(33645),
          O = o.n(r),
          L = o(38539),
          T = o(84419),
          B = o(36707);
        const b = { NoBorder: "noborder", EqualCells: "equalcells" },
          k = L.of({
            tableGroup: "block",
            cellContent: "paragraph block*",
            cellAttributes: {
              class: {
                default: O().TableCell,
                setDOMAttr: (p, I) => {
                  I.class = p;
                },
              },
            },
          }),
          y = {
            BBArgsToAttrs: (p) => {
              const I = {};
              return (
                p.colspan && (I.colspan = parseInt(p.colspan)),
                p.rowspan && (I.rowspan = parseInt(p.rowspan)),
                p.colwidth &&
                  (I.colwidth = p.colwidth.split(",").map((_) => parseInt(_))),
                I
              );
            },
            AttrsToBBArgs: (p) => {
              const I = {};
              return (
                p.colspan &&
                  p.colspan != 1 &&
                  (I.colspan = p.colspan.toString()),
                p.rowspan &&
                  p.rowspan != 1 &&
                  (I.rowspan = p.rowspan.toString()),
                p.colwidth && (I.colwidth = p.colwidth.join(",")),
                { args: I }
              );
            },
          },
          U = {
            table: {
              ...k.table,
              toDOM: (p) =>
                (0, T.ce)(
                  "table",
                  (0, B.A)(
                    O().Table,
                    p.attrs.noborder && O().NoBorder,
                    p.attrs.equalcells && O().EqualCells,
                  ),
                  ["tbody", 0],
                ),
              attrs: {
                [b.NoBorder]: { default: !1 },
                [b.EqualCells]: { default: !0 },
              },
              bbCode: {
                tag: "table",
                BBArgsToAttrs: (p) => ({
                  noborder: !!p.noborder,
                  equalcells: !!p.equalcells,
                }),
                AttrsToBBArgs: (p, I) => {
                  const _ = {};
                  p.noborder && (_.noborder = "1"),
                    p.equalcells && (_.equalcells = "1");
                  const S = I.child(0);
                  if (S) {
                    let D = [];
                    for (let j = 0; j < S.childCount; j++) {
                      const P = S.child(j).attrs;
                      P.colwidth ? D.push(...P.colwidth) : D.push(void 0);
                    }
                    _.colwidth = D.join(",");
                  }
                  return { args: _ };
                },
              },
            },
            table_row: {
              ...k.table_row,
              toDOM: (0, T.BM)("tr", O().TableRow),
              bbCode: { tag: "tr" },
            },
            table_cell: { ...k.table_cell, bbCode: { ...y, tag: "td" } },
            table_header: { ...k.table_header, bbCode: { ...y, tag: "th" } },
          };
      },
      38348: (H, N, o) => {
        "use strict";
        o.d(N, { _: () => B });
        var r = o(7850),
          O = o(90626),
          L = o(19316),
          T = o(88003);
        function B(b) {
          const {
              closeModal: k,
              strTitle: y,
              onOK: U,
              strOKText: p,
              onCancel: I,
              strCancelText: _,
              bOKDisabled: S,
              bCancelDisabled: D,
              strClassNameContent: j = "GenericFormDialog",
              children: P,
            } = b,
            e = O.useCallback(() => {
              I && I(), k();
            }, [I, k]),
            u = D ? () => {} : e;
          return (0, r.jsx)(T.x_, {
            onEscKeypress: u,
            children: (0, r.jsxs)(L.U9, {
              onSubmit: U,
              classNameContent: j,
              children: [
                (0, r.jsx)(L.Y9, { children: y }),
                P,
                (0, r.jsx)(L.wi, {
                  children: (0, r.jsx)(L.CB, {
                    strOKText: p,
                    bOKDisabled: S,
                    onCancel: u,
                    strCancelText: _,
                    bCancelDisabled: D,
                  }),
                }),
              ],
            }),
          });
        }
      },
      15210: (H, N, o) => {
        "use strict";
        o.d(N, { J: () => e });
        var r = o(7850),
          O = o(74827),
          L = o(52893),
          T = o(90626),
          B = o(64388),
          b = o(28922),
          k = o(19298),
          y = o(64238),
          U = o(88376),
          p = o.n(U),
          I = o(66243),
          _ = o(36118);
        function S(C) {
          const {
            strTitle: c,
            strDescription: t,
            className: l,
            children: n,
            navID: s,
            ...a
          } = C;
          return jsxs(ModalDialog, {
            className: classNames(l, styles.ModalConfirmDialog),
            onClose: a.onClose,
            navID: s,
            children: [
              c &&
                jsxs(Panel, {
                  className: styles.Header,
                  children: [
                    jsx("h2", { children: c }),
                    jsx("button", {
                      onClick: a.onClose,
                      children: jsx(SVG.X_Line_Better, {}),
                    }),
                  ],
                }),
              t &&
                jsx(Panel, {
                  className: styles.Description,
                  children: jsx("div", { children: t }),
                }),
              n,
              jsx(D, { ...a }),
            ],
          });
        }
        function D(C) {
          const { strOKLabel: c, strCancelLabel: t, onOK: l, onClose: n } = C;
          return (0, r.jsxs)(k.Z, {
            className: p().Buttons,
            children: [
              !!c && (0, r.jsx)(I.n9, { onClick: l ?? n, children: c }),
              !!t && (0, r.jsx)(I.Oh, { onClick: n, children: t }),
            ],
          });
        }
        var j = o(2801),
          P = o(18210);
        function e(C, c, t) {
          const [l, n] = T.useState(void 0),
            s = T.useRef(null),
            a = T.useCallback(
              (g) => {
                s.current = g;
                const { state: i } = g,
                  f = i.selection;
                let { from: h, to: v, empty: A } = f;
                const x = c ? C.marks.color : C.marks.bgcolor;
                let R = "",
                  F = "";
                const W = A ? f.$from : i.doc.resolve(h),
                  w = (0, O.vn)(i, x, W),
                  V = !!w;
                V
                  ? ((R = w.mark.attrs.color),
                    A
                      ? ((F = w.slice.content.textBetween(
                          0,
                          w.slice.content.size,
                        )),
                        (h = w.from),
                        (v = w.to))
                      : ((h = Math.max(w.from, h)),
                        (v = Math.min(w.to, v)),
                        (F = w.slice.content.textBetween(
                          h - w.from,
                          v - w.from,
                        ))))
                  : A || (F = i.doc.cut(h, v).textContent);
                let K = {};
                if (t)
                  for (const $ in t) {
                    const G = t[$],
                      J = w ? G.fnReadValue(w.mark) : G.defaultValue;
                    K[$] = J;
                  }
                n({
                  viewRef: s,
                  strColor: R,
                  strTargetText: F,
                  bIsUpdate: V,
                  addtlAttrs: t,
                  addtlAttrsValues: K,
                  from: h,
                  to: v,
                });
              },
              [t, c, C.marks.bgcolor, C.marks.color],
            ),
            d = T.useCallback(() => {
              const g = s.current;
              window.setTimeout(() => {
                g && !g.isDestroyed && g.focus();
              }, 1),
                n(void 0);
            }, []),
            m =
              l &&
              (0, r.jsx)(j.EN, {
                active: !0,
                children: (0, r.jsx)(E, {
                  schema: C,
                  bColor: c,
                  closeModal: d,
                  ...l,
                }),
              });
          return [a, m];
        }
        function u(C) {
          if (C.startsWith("rgb")) {
            const c = C.match(/\d+/g);
            if (!c || c.length < 3) return "#000000";
            const [t, l, n] = c.map(Number);
            return (
              "#" +
              [t, l, n]
                .map((s) => {
                  const a = s.toString(16);
                  return a.length === 1 ? "0" + a : a;
                })
                .join("")
            );
          }
          return C;
        }
        function M(C) {
          const c = C.match(
            /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)$/i,
          );
          if (c) {
            let [, t, l, n, s] = c;
            const a = parseInt(t, 10),
              d = parseInt(l, 10),
              m = parseInt(n, 10);
            return `#${((1 << 24) + (a << 16) + (d << 8) + m).toString(16).slice(1)}`;
          }
          return "#7e3232";
        }
        const E = T.memo(function (c) {
          const {
              schema: t,
              strColor: l,
              bIsUpdate: n,
              strTargetText: s,
              bColor: a,
              addtlAttrs: d,
              addtlAttrsValues: m,
              closeModal: g,
              viewRef: i,
              from: f,
              to: h,
            } = c,
            [v, A] = T.useState(l),
            x = T.useRef(null),
            [R, F] = T.useState(m),
            W = T.useCallback(() => {
              try {
                const K = i.current;
                if (!K || K.isDestroyed) {
                  console.warn(
                    "Editor view is destroyed; skipping color insert",
                  );
                  return;
                }
                const { state: $, dispatch: G } = K,
                  J = a ? t.marks.color : t.marks.bgcolor;
                if (!J) {
                  console.log("debug: no markType");
                  return;
                }
                if (!v || !/^#[0-9a-fA-F]{6}$/.test(v)) {
                  console.log("debug: invalid color text: " + v);
                  return;
                }
                const Y = Math.max(0, Math.min(f, $.doc.content.size)),
                  Z = Math.max(0, Math.min(h, $.doc.content.size));
                if (Y > Z) {
                  console.error("Invalid selection range:", f, h);
                  return;
                }
                const Q = J.create({ color: v, ...R });
                let z = $.tr;
                f === h
                  ? (z = z.addStoredMark(Q))
                  : ((z = z.removeMark(f, h, J)),
                    (z = z.addMark(f, h, Q)),
                    (z = z.setSelection(L.U3.create(z.doc, h)))),
                  G(z.scrollIntoView());
              } catch (K) {
                console.error(K);
              } finally {
                requestAnimationFrame(() => g());
              }
            }, [R, a, g, v, f, t.marks.bgcolor, t.marks.color, h, i]);
          T.useLayoutEffect(() => {
            x.current?.value?.length ? x.current.focus() : x.current?.focus();
          }, []);
          const w = (0, P.we)(
              a ? "#FormattingToolbar_Color" : "#FormattingToolbar_BgColor",
            ),
            V = n
              ? (0, P.we)("#Button_Save")
              : (0, P.we)(
                  a ? "#FormattingToolbar_Color" : "#FormattingToolbar_BgColor",
                );
          return (0, r.jsxs)(B.s, {
            onClose: g,
            strTitle: w,
            children: [
              (0, r.jsx)(b.s, {
                color: v,
                disableAlpha: !0,
                onChange: (K) => A(M(K)),
              }),
              (0, r.jsx)(D, {
                strOKLabel: V,
                strCancelLabel: (0, P.we)("#Button_Cancel"),
                onOK: () => {
                  v && v.length > 0 && W();
                },
                onClose: g,
              }),
            ],
          });
        });
      },
      12293: (H, N, o) => {
        "use strict";
        o.d(N, { E: () => U });
        var r = o(7850),
          O = o(74827),
          L = o(52893),
          T = o(90626),
          B = o(19316),
          b = o(2801),
          k = o(38348),
          y = o(18210);
        function U(S, D) {
          const [j, P] = T.useState(void 0),
            e = T.useCallback(
              (C) => {
                const c = C.state.selection;
                let t = "",
                  l = "",
                  { from: n, to: s } = c;
                const a = (0, O.vn)(C.state, S.marks.link, c.$from),
                  d = !!a;
                a
                  ? ((l = a.mark.attrs.href),
                    c.empty
                      ? ((t = a.slice.content.textBetween(
                          0,
                          a.slice.content.size,
                        )),
                        (n = a.from),
                        (s = a.to))
                      : ((n = Math.max(a.from, c.from)),
                        (s = Math.min(a.to, c.to)),
                        (t = a.slice.content.textBetween(
                          n - a.from,
                          s - a.from,
                        ))))
                  : C.state.selection.empty ||
                    ((t = C.state.doc.cut(
                      C.state.selection.from,
                      C.state.selection.to,
                    ).textContent),
                    t.match(/^https?:\/\//) && (l = t));
                let m = {};
                if (D)
                  for (const g in D) {
                    const i = D[g],
                      f = a ? i.fnReadValue(a.mark) : i.defaultValue;
                    m[g] = f;
                  }
                P({
                  view: C,
                  strLinkText: t,
                  strLinkHref: l,
                  bIsUpdate: d,
                  addtlAttrs: D,
                  addtlAttrsValues: m,
                  from: n,
                  to: s,
                });
              },
              [S.marks.link, D],
            ),
            u = j?.view,
            M = T.useCallback(() => {
              window.setTimeout(() => u.focus(), 1), P(void 0);
            }, [u]),
            E =
              j &&
              (0, r.jsx)(b.EN, {
                active: !0,
                children: (0, r.jsx)(p, { schema: S, closeModal: M, ...j }),
              });
          return [e, E];
        }
        const p = T.memo(function (D) {
          const {
              schema: j,
              strLinkText: P,
              strLinkHref: e,
              bIsUpdate: u,
              addtlAttrs: M,
              addtlAttrsValues: E,
              closeModal: C,
              view: c,
              from: t,
              to: l,
            } = D,
            [n, s] = T.useState(P),
            [a, d] = T.useState(e),
            m = T.useRef(null),
            g = T.useRef(null),
            [i, f] = T.useState(E),
            h = () => {
              let x = c.state.tr;
              const R = { href: a };
              for (const w in i) R[w] = i[w];
              const F = j.marks.link?.create(R),
                W = j.text(n || a, [F]);
              try {
                (x = x.replaceRangeWith(t, l, W)),
                  (x = x.setSelection(
                    L.U3.create(x.doc, t + W.nodeSize, t + W.nodeSize),
                  )),
                  c.dispatch(x);
              } catch (w) {
                console.error("Error during link insertion", w);
              }
              C();
            };
          T.useLayoutEffect(() => {
            m.current?.value?.length
              ? g.current?.value?.length
                ? (m.current.Focus(), m.current.element.select())
                : g.current.Focus()
              : m.current?.Focus();
          }, []);
          const v = u
              ? (0, y.we)("#FormattingToolbar_EditLink")
              : (0, y.we)("#FormattingToolbar_InsertLink"),
            A = u
              ? (0, y.we)("#Button_Save")
              : (0, y.we)("#FormattingToolbar_InsertLink");
          return (0, r.jsxs)(k._, {
            onOK: h,
            closeModal: C,
            strTitle: v,
            strOKText: A,
            bOKDisabled: a.length == 0,
            children: [
              (0, r.jsx)(B.pd, {
                ref: m,
                value: n,
                onChange: (x) => s(x.currentTarget.value),
                label: (0, y.we)("#FormattingToolbar_LinkText"),
              }),
              (0, r.jsx)(B.pd, {
                ref: g,
                value: a,
                placeholder: "https://",
                onChange: (x) => d(x.currentTarget.value),
                label: (0, y.we)("#FormattingToolbar_LinkAddress"),
                mustBeURL: !0,
              }),
              M && (0, r.jsx)(I, { addtlAttrs: M, values: i, setValues: f }),
            ],
          });
        });
        function I(S) {
          const { addtlAttrs: D, values: j, setValues: P } = S;
          return (0, r.jsx)(r.Fragment, {
            children: Object.keys(D).map((e) =>
              (0, r.jsx)(
                _,
                {
                  attrName: e,
                  fnRender: D[e].fnRenderEditor,
                  value: j[e],
                  setValues: P,
                },
                e,
              ),
            ),
          });
        }
        const _ = T.memo(function (D) {
          const { attrName: j, fnRender: P, value: e, setValues: u } = D,
            M = T.useCallback((E) => u((C) => ({ ...C, [j]: E })), [j, u]);
          return P(e, M);
        });
      },
      83085: (H, N, o) => {
        "use strict";
        o.d(N, { Xv: () => u, pw: () => M });
        var r = o(7850),
          O = o(71742),
          L = o(74432),
          T = o(19565),
          B = o(52893),
          b = o(29287),
          k = o(90626);
        function y(g, i = "PlaceholderPlugin") {
          const [f, h] = k.useState([]),
            [v] = k.useState(
              () =>
                new B.k_({
                  key: new B.hs(i),
                  state: {
                    init() {
                      return b.zF.empty;
                    },
                    apply(w, V) {
                      V = V.map(w.mapping, w.doc);
                      const K = w.getMeta(this) || [];
                      for (const $ of K)
                        if ($?.add) {
                          const { id: G, data: J } = $.add,
                            Y = (z, q) => {
                              const X = document.createElement(g);
                              return (
                                h((tt) => [
                                  ...tt,
                                  { id: G, element: X, data: J },
                                ]),
                                X
                              );
                            },
                            Z = (z) => {
                              h((q) => q.filter((X) => X.element != z));
                            },
                            Q = b.NZ.widget($.add.pos, Y, {
                              id: G,
                              destroy: Z,
                            });
                          V = V.add(w.doc, [Q]);
                        } else
                          $?.remove &&
                            (V = V.remove(
                              V.find(
                                void 0,
                                void 0,
                                (G) => G.id == $.remove.id,
                              ),
                            ));
                      return V;
                    },
                  },
                  props: {
                    decorations(w) {
                      return this.getState(w);
                    },
                  },
                }),
            );
          (0, T.c$)(v);
          const A = (0, T.Hd)(),
            x = k.useRef(0),
            R = k.useCallback(
              (w, V, K) => {
                const $ = `${i}_${x.current++}`;
                let G = K || A.state.tr;
                V === void 0 &&
                  (G.selection.empty || G.deleteSelection(),
                  (V = G.selection.from));
                const J = K?.getMeta(v) || [];
                return (
                  G.setMeta(v, [...J, { add: { id: $, pos: V, data: w } }]),
                  K || A.dispatch(G),
                  $
                );
              },
              [v, i, A],
            ),
            F = k.useCallback(
              (w) => {
                const K = v
                  .getState(A.state)
                  ?.find(void 0, void 0, ($) => $.id == w);
                return K?.length ? K[0].from : void 0;
              },
              [A, v],
            ),
            W = k.useCallback(
              (w, V) => {
                const K = F(w);
                return K
                  ? (V
                      ? A.dispatch(
                          A.state.tr
                            .replaceWith(K, K, V)
                            .setMeta(v, [{ remove: { id: w } }]),
                        )
                      : A.dispatch(
                          A.state.tr.setMeta(v, [{ remove: { id: w } }]),
                        ),
                    !0)
                  : !1;
              },
              [v, F, A],
            );
          return {
            placeholderElements: f,
            createPlaceholder: R,
            findPlaceholder: F,
            replacePlaceholder: W,
          };
        }
        var U = o(72739),
          p = o(1880),
          I = o(69168),
          _ = o(85599),
          S = o(8323),
          D = o(18210),
          j = o(95603),
          P = o(64868),
          e = o(73309);
        function u(g) {
          const {
              children: i,
              ProcessFileUpload: f,
              FetchImageURL: h,
              bAllowImageHotLinking: v = !1,
            } = g,
            [A] = k.useState(() => ({ manager: new t(f, h, v) })),
            { manager: x } = A;
          return (
            x.SetProps(f, h, v),
            (0, r.jsxs)(n.Provider, {
              value: A,
              children: [
                (0, r.jsx)(a, { manager: x }),
                (0, r.jsx)(d, { manager: x, children: i }),
              ],
            })
          );
        }
        const M = k.memo(function (i) {
          const { nodeType: f } = i,
            h = s(),
            {
              placeholderElements: v,
              createPlaceholder: A,
              replacePlaceholder: x,
            } = y("span", "FileUploadPlaceholder");
          m(h, f);
          const R = (0, T.Hd)();
          return (
            k.useEffect(() => h.RegisterEditor(R, A, x), [h, R, A, x]),
            (0, r.jsx)(r.Fragment, {
              children: v.map(({ id: F, element: W, data: w }) =>
                (0, r.jsx)(c, { element: W, data: w }, F),
              ),
            })
          );
        });
        function E(g, i) {
          const f = s(),
            h = React.useCallback(
              (v) => {
                for (const A of v) f.UploadFile(A);
                g && g();
              },
              [f, g],
            );
          return useBrowseForFilesDialog(h, { multiple: !0, accept: i });
        }
        class C extends Error {
          constructor(i) {
            super(i);
          }
        }
        function c(g) {
          const { element: i, data: f } = g,
            h = "file" in f ? f.file : void 0,
            v = k.useMemo(() => h && URL.createObjectURL(h), [h]),
            A = "url" in f ? f.url : v,
            x = h?.type.startsWith("video/");
          return U.createPortal(
            (0, r.jsxs)("span", {
              className: e.FileUploadPlaceholder,
              children: [
                (0, r.jsx)("div", {
                  className: e.ThrobberCtn,
                  children: (0, r.jsxs)("div", {
                    className: e.ThrobberRow,
                    children: [
                      (0, r.jsx)("div", {
                        className: e.Throbber,
                        children: (0, r.jsx)(_.t, {
                          size: "medium",
                          position: "center",
                        }),
                      }),
                      (0, D.we)("#Prosemirror_FileUpload_Uploading"),
                    ],
                  }),
                }),
                !x && (0, r.jsx)("img", { src: A, className: e.PendingImage }),
                x &&
                  (0, r.jsx)("video", {
                    src: A,
                    className: e.PendingImage,
                    muted: !0,
                    loop: !0,
                    playsInline: !0,
                    autoPlay: !0,
                  }),
              ],
            }),
            i,
          );
        }
        class t {
          m_fnProcessFileUpload;
          m_fnFetchImageURL;
          m_bAllowImageHotLinking;
          m_errors = (0, S.Jc)([]);
          m_view;
          m_fnCreatePlaceholder;
          m_fnReplacePlaceholder;
          constructor(i, f, h) {
            (this.m_fnProcessFileUpload = i),
              (this.m_fnFetchImageURL = f),
              (this.m_bAllowImageHotLinking = h);
          }
          SetProps(i, f, h) {
            (this.m_fnProcessFileUpload = i),
              (this.m_fnFetchImageURL = f),
              (this.m_bAllowImageHotLinking = h),
              (0, O.wT)(
                !this.m_fnFetchImageURL || !this.m_bAllowImageHotLinking,
                "Not expected to have a URL fetch function and allow hotlinking.  URL fetch function will not be called.",
              );
          }
          RegisterEditor(i, f, h) {
            return (
              (0, O.wT)(!this.m_view, "Duplicate registration"),
              (this.m_view = i),
              (this.m_fnCreatePlaceholder = f),
              (this.m_fnReplacePlaceholder = h),
              () => {
                this.m_view == i &&
                  this.m_fnCreatePlaceholder == f &&
                  this.m_fnReplacePlaceholder == h &&
                  ((this.m_view = void 0),
                  (this.m_fnCreatePlaceholder = void 0),
                  (this.m_fnReplacePlaceholder = void 0));
              }
            );
          }
          AddError(i) {
            this.m_errors.Set([...this.m_errors.Value, i]);
          }
          GetErrors() {
            return this.m_errors;
          }
          ClearErrors() {
            this.m_errors.Set([]);
          }
          GetViewPosition(i, f) {
            return this.m_view?.posAtCoords({ left: i, top: f })?.pos;
          }
          async UploadFile(i, f) {
            (!this.m_fnCreatePlaceholder || !this.m_fnReplacePlaceholder) &&
              this.AddError(
                "Upload File: No editor registered to handle file upload",
              );
            const h = this.m_fnCreatePlaceholder({ file: i }, f);
            return this.ProcessFile(i, h);
          }
          BAllowImageHotLinking() {
            return this.m_bAllowImageHotLinking;
          }
          QueueUploadFileByURL(i, f, h) {
            if (
              ((!this.m_fnCreatePlaceholder || !this.m_fnReplacePlaceholder) &&
                this.AddError(
                  "QueueUploadFile: No editor registered to handle file upload",
                ),
              console.log(`QueueUploadFileByURL: ${i} at pos ${f}`),
              i.startsWith("data:"))
            ) {
              const v = this.m_fnCreatePlaceholder({ url: i }, f, h);
              return this.ProcessDataURL(i, v), !0;
            } else if (this.m_fnFetchImageURL) {
              const v = this.m_fnCreatePlaceholder({ url: i }, f, h);
              return this.FetchURLAndProcess(i, v), !0;
            } else
              return (
                (0, O.wT)(
                  this.m_bAllowImageHotLinking,
                  "A URL was posted but we don't have a fnFetchImageURL to process it",
                ),
                !1
              );
          }
          async ProcessDataURL(i, f) {
            const [h, v] = i.split(","),
              A = h.match(/^data:(?<mimetype>[^;]*);(?<encoding>.*)$/);
            if (!A || A.groups.encoding != "base64") {
              this.AddError(`Unable to data URL, unexpected format: ${h}`);
              return;
            }
            const x = A?.groups.mimetype,
              R = l(x);
            if (!R) {
              this.AddError(`Unsupported MIME type for image: ${x}`);
              return;
            }
            const F = atob(v),
              W = new Uint8Array(F.length);
            for (let K = 0; K < F.length; K++) W[K] = F.charCodeAt(K);
            const w = await L.C(W.buffer),
              V = new File([W], `upload_${w}.${R}`, { type: x });
            await this.ProcessFile(V, f);
          }
          async FetchURLAndProcess(i, f) {
            try {
              const h = new URL(i),
                v = await this.m_fnFetchImageURL(i),
                A = new File(
                  [v],
                  decodeURIComponent(
                    h.pathname?.replace(/^.*\//, "") || "image",
                  ),
                  { type: v.type },
                );
              await this.ProcessFile(A, f);
            } catch {
              this.AddError(`Unable to process URL: ${i}`),
                this.m_fnReplacePlaceholder(f);
            }
          }
          async ProcessFile(i, f) {
            let h;
            try {
              console.log(`Processing file upload: "${i.name}"`),
                (h = await this.m_fnProcessFileUpload(i));
            } catch (v) {
              v instanceof C
                ? this.AddError(v.message)
                : this.AddError(`Error proccessing file upload: ${v}`);
            }
            h
              ? this.m_fnReplacePlaceholder(f, h)
              : this.m_fnReplacePlaceholder(f);
          }
        }
        function l(g) {
          switch (g) {
            case "image/jpeg":
              return "jpg";
            case "image/png":
              return "png";
            case "image/gif":
              return "gif";
            case "image/webp":
              return "webp";
            case "video/mp4":
              return "mp4";
            case "video/webm":
              return "webm";
            default:
              return;
          }
        }
        const n = k.createContext(void 0);
        function s() {
          return k.useContext(n).manager;
        }
        const a = k.memo(function (i) {
          const { manager: f } = i,
            h = (0, P.gc)(f.GetErrors());
          return h.length
            ? (0, r.jsx)(I.E, {
                active: !0,
                children: (0, r.jsx)(p.o0, {
                  bAlertDialog: !0,
                  strTitle: (0, D.we)("#Error_Generic"),
                  strDescription: h.map((v, A) =>
                    (0, r.jsx)("div", { children: v }, A),
                  ),
                  strOKButtonText: (0, D.we)("#Button_OK"),
                  onOK: () => f.ClearErrors(),
                  onCancel: () => f.ClearErrors(),
                }),
              })
            : null;
        });
        function d(g) {
          const { manager: i, children: f } = g,
            h = k.useCallback(
              (x, R) => {
                for (const F of x)
                  i.UploadFile(F, i.GetViewPosition(R.clientX, R.clientY));
              },
              [i],
            ),
            [v, A] = (0, j.hk)(h);
          return k.cloneElement(f, { ...v, ...f.props });
        }
        function m(g, i) {
          (0, T.c$)(
            k.useMemo(
              () =>
                new B.k_({
                  props: {
                    handlePaste(f, h, v) {
                      const A = [];
                      if (
                        (v.content.descendants((x, R) => {
                          if (x.type == i) {
                            const F = x.attrs.src;
                            (F.startsWith("data:") ||
                              !g.BAllowImageHotLinking()) &&
                              A.push({ url: F, pos: R });
                          }
                        }),
                        A.length)
                      ) {
                        let x = f.state.tr;
                        x.selection.empty || x.deleteSelection();
                        let R = x.selection.from,
                          F = 0;
                        for (const W of A) {
                          const w = v.content.cut(F, W.pos - 1);
                          x.insert(R, w),
                            (R += w.size),
                            g.QueueUploadFileByURL(W.url, R, x),
                            (F = W.pos + 1);
                        }
                        return (
                          x.insert(R, v.content.cut(F)),
                          x.scrollIntoView(),
                          f.dispatch(x),
                          !0
                        );
                      }
                      return !1;
                    },
                    handleDOMEvents: {
                      paste(f, h) {
                        if (h.clipboardData?.files?.length > 0) {
                          h.preventDefault();
                          for (const v of h.clipboardData.files)
                            g.UploadFile(v);
                          return !0;
                        }
                      },
                    },
                  },
                }),
              [i, g],
            ),
          );
        }
      },
      93147: (H, N, o) => {
        "use strict";
        o.d(N, { l: () => c });
        var r = o(7850),
          O = o(19298),
          L = o(52951),
          T = o(74875),
          B = o(29287),
          b = o(19565),
          k = o(74827),
          y = o(52893),
          U = o(57053),
          p = o(90626),
          I = o(25792),
          _ = o(33645),
          S = o.n(_),
          D = o(38539),
          j = o(81973),
          P = o(36707);
        const e = p.memo(function (a) {
          const { schema: d } = a,
            m = !!("table" in d.nodes && d.nodes.table.spec.tableRole);
          return (
            (0, b.c$)(p.useMemo(() => (m ? D.AL({ View: u }) : void 0), [m])),
            (0, b.c$)(p.useMemo(() => (m ? D.LF() : void 0), [m])),
            null
          );
        });
        class u extends D.Qg {
          constructor(a, d) {
            super(a, d), this.SetTableClass(a);
          }
          update(a) {
            return super.update(a) ? (this.SetTableClass(a), !0) : !1;
          }
          SetTableClass(a) {
            this.table.className = (0, P.A)(
              S().Table,
              a.attrs[j.w.NoBorder] && S().NoBorder,
              a.attrs[j.w.EqualCells] && S().EqualCells,
            );
          }
        }
        var M = o(18210),
          E = o(54963),
          C = o(73309);
        const c = (0, I.Nr)(function (a) {
          const {
              pmState: d,
              className: m,
              refOnUpdate: g,
              refView: i,
              bSpellcheckEnabled: f = !0,
              bSingleLine: h,
              panelProps: v,
              children: A,
            } = a,
            [x, R] = p.useState(),
            [F, W] = p.useState();
          p.useEffect(() => {
            !d || !x || W(new B.Lz(x, { state: d.state }));
          }, [d, x]),
            p.useEffect(() => () => F?.destroy(), [F]),
            (0, E.D5)(i, F);
          const { refDiv: w, onActivate: V, onGamepadDirection: K } = t(F),
            $ = (0, E.Ue)(w, R);
          if (!d) return null;
          const { schemaConfig: G, bbcodeParser: J } = d;
          return (0, r.jsxs)(b.Ot, {
            view: F,
            pmState: d,
            children: [
              (0, r.jsx)(
                O.Z,
                {
                  className: (0, P.A)({
                    ["" + m]: !!m,
                    [C.Container]: !0,
                    [C.SingleLine]: !!h,
                  }),
                  ref: $,
                  spellCheck: f,
                  focusable: !0,
                  onActivate: V,
                  onOKActionDescription: (0, M.we)("#UserGameNotes_Edit"),
                  onGamepadDirection: K,
                  ...v,
                },
                `editordiv_${f}`,
              ),
              (0, r.jsx)(b.KF, {
                refOnUpdate: g,
                schema: G.pm_schema,
                bSingleLine: h,
              }),
              (0, r.jsx)(l, { parser: J, schema: G.pm_schema }),
              (0, r.jsx)(e, { schema: G.pm_schema }),
              A,
            ],
          });
        });
        function t(s) {
          const a = p.useRef(null),
            d = (0, T.FN)(),
            m = p.useCallback(() => {
              if ((d.ShowVirtualKeyboard(), !s)) return;
              if (!s.hasFocus()) {
                s.focus();
                let h = s.dom.childNodes,
                  v = a.current?.scrollTop ?? 0;
                for (let A = 0; A < h.length; ++A) {
                  let x = h[A],
                    R = x.offsetTop;
                  if (R !== void 0 && R >= v) {
                    let F = x.getBoundingClientRect();
                    (0, k.bQ)(s, F.left, F.top);
                    break;
                  }
                }
              }
            }, [d, s]),
            g = p.useCallback((f) => f.currentTarget == f.target, []),
            i = (0, L.ak)(a, void 0, void 0, g);
          return { refDiv: a, onActivate: m, onGamepadDirection: i };
        }
        const l = p.memo(function (a) {
          const { parser: d, schema: m } = a;
          return (
            (0, b.c$)(
              p.useMemo(
                () =>
                  new y.k_({
                    props: {
                      transformPasted: (g, i) => n(d, m.nodes.hard_break, g),
                    },
                  }),
                [d, m],
              ),
            ),
            null
          );
        });
        function n(s, a, d) {
          let m = !1;
          if (
            (d.content.forEach((i) => {
              i.type == a && (m = !0);
            }),
            !m)
          )
            return d;
          const g = s.ConvertLineBreaksToParagraphs(d.content);
          return U.Ji.maxOpen(g);
        }
      },
      73723: (H, N, o) => {
        "use strict";
        o.d(N, {
          Km: () => P,
          WJ: () => E,
          z9: () => t,
          C$: () => C,
          Hz: () => e,
          Nt: () => l,
          MV: () => j,
        });
        var r = o(7850),
          O = o(98724),
          L = o(4188),
          T = o(74827),
          B = o(90626),
          b = o(56718),
          k = o(12293),
          y = o(50660),
          U = o(54963),
          p = o(18210);
        function I(n) {
          const { schema: s, addtlAttrs: a, children: d } = n,
            { callbacks: m, view: g } = (0, y.wU)(),
            [i, f] = B.useState(() => (0, T.Cd)(g.state, s.marks.link)),
            h = B.useCallback((x) => f((0, T.Cd)(x.state, s.marks.link)), [s]);
          (0, U.hL)(m, h);
          const [v, A] = (0, k.E)(s, a);
          return (0, r.jsxs)(r.Fragment, {
            children: [
              A,
              (0, r.jsx)(y.ff, {
                onClick: () => v(g),
                toggled: i,
                tooltip: (0, p.we)("#FormattingToolbar_InsertLink"),
                keyboardShortcut: "Mod-k",
                children: d,
              }),
            ],
          });
        }
        var _ = o(98609),
          S = o(15210);
        function D(n) {
          const { schema: s, bColor: a, addtlAttrs: d, children: m } = n,
            { callbacks: g, view: i } = (0, y.wU)(),
            [f, h] = B.useState(() =>
              (0, T.Cd)(i.state, a ? s.marks.color : s.marks.bgcolor),
            ),
            v = B.useCallback(
              (R) => h((0, T.Cd)(R.state, a ? s.marks.color : s.marks.bgcolor)),
              [a, s],
            );
          (0, U.hL)(g, v);
          const [A, x] = (0, S.J)(s, a, d);
          return (0, r.jsxs)(r.Fragment, {
            children: [
              x,
              (0, r.jsx)(y.ff, {
                onClick: () => A(i),
                toggled: f,
                tooltip: a
                  ? (0, p.we)("#FormattingToolbar_Color")
                  : (0, p.we)("#FormattingToolbar_BgColor"),
                children: m,
              }),
            ],
          });
        }
        function j() {
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(y.cQ, {
                tooltip: (0, p.we)("#FormattingToolbar_Undo"),
                keyboardShortcut: "Mod-z",
                command: O.tN,
                children: (0, r.jsx)(b.VnB, {}),
              }),
              (0, r.jsx)(y.cQ, {
                tooltip: (0, p.we)("#FormattingToolbar_Redo"),
                keyboardShortcut:
                  _.TS.PLATFORM == "macos" ? "Mod-Shift-z" : "Mod-y",
                command: O.ZS,
                children: (0, r.jsx)(b.Bal, {}),
              }),
            ],
          });
        }
        function P(n) {
          const { schema: s } = n;
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(y.GY, {
                tooltip: (0, p.we)("#FormattingToolbar_Bold"),
                keyboardShortcut: "Mod-b",
                mark: s.marks.strong,
                children: (0, r.jsx)(b.l4n, {}),
              }),
              (0, r.jsx)(y.GY, {
                tooltip: (0, p.we)("#FormattingToolbar_Italic"),
                keyboardShortcut: "Mod-i",
                mark: s.marks.italic,
                children: (0, r.jsx)(b.UKJ, {}),
              }),
              (0, r.jsx)(y.GY, {
                tooltip: (0, p.we)("#FormattingToolbar_Underline"),
                keyboardShortcut: "Mod-u",
                mark: s.marks.underline,
                children: (0, r.jsx)(b.Gj3, {}),
              }),
              "strike" in s.marks &&
                (0, r.jsx)(y.GY, {
                  tooltip: (0, p.we)("#FormattingToolbar_Strike"),
                  keyboardShortcut: "Mod-Shift-x",
                  mark: s.marks.strike,
                  children: (0, r.jsx)(b.tI4, {}),
                }),
              "code" in s.marks &&
                (0, r.jsx)(y.GY, {
                  tooltip: (0, p.we)("#FormattingToolbar_InlineCode"),
                  keyboardShortcut: "Ctrl-Shift-c",
                  mark: s.marks.code,
                  children: (0, r.jsx)(b.bmT, {}),
                }),
              "color" in s.marks &&
                (0, r.jsx)(D, {
                  schema: s,
                  bColor: !0,
                  children: (0, r.jsx)(b.r7n, {}),
                }),
              "bgcolor" in s.marks &&
                (0, r.jsx)(D, {
                  schema: s,
                  bColor: !1,
                  children: (0, r.jsx)(b.FId, {}),
                }),
            ],
          });
        }
        function e(n) {
          const { schema: s } = n;
          return (0, r.jsx)(y.u3, {
            tooltip: (0, p.we)("#FormattingToolbar_Paragraph"),
            keyboardShortcut: "Ctrl-Shift-0",
            nodeType: s.nodes.paragraph,
            children: (0, r.jsx)(b.iYj, {}),
          });
        }
        function u(n) {
          const { nodeTypes: s, attrs: a, children: d, ...m } = n,
            { callbacks: g, view: i } = useToolbarContext(),
            [f, h] = React.useState(() => IsAnyBlockActive(i.state, s, a)),
            v = React.useCallback(
              (R) => h(IsAnyBlockActive(R.state, s, a)),
              [s, a],
            );
          useCallbackList(g, v);
          const A = React.useMemo(
              () => SetNodeAttributeCommand(s, a ?? {}),
              [s, a],
            ),
            x = !!f;
          return jsx(CommandButton, {
            ...m,
            command: A,
            toggled: x,
            children: d,
          });
        }
        function M(n) {
          const { schema: s } = n;
          let a = s.nodes.paragraph,
            d = s.nodes.heading;
          const m = React.useMemo(() => [a, d], [a, d]);
          return jsxs(Fragment, {
            children: [
              jsx(u, {
                tooltip: Localize("#FormattingToolbar_AlignLeft"),
                keyboardShortcut: "Ctrl-Shift-L",
                nodeTypes: m,
                attrs: { align: "left" },
                children: jsx(GamepadUISVG.TextLeftAlign, {}),
              }),
              jsx(u, {
                tooltip: Localize("#FormattingToolbar_AlignCenter"),
                keyboardShortcut: "Ctrl-Shift-E",
                nodeTypes: m,
                attrs: { align: "center" },
                children: jsx(GamepadUISVG.TextCenterAlign, {}),
              }),
              jsx(u, {
                tooltip: Localize("#FormattingToolbar_AlignRight"),
                keyboardShortcut: "Ctrl-Shift-R",
                nodeTypes: m,
                attrs: { align: "right" },
                children: jsx(GamepadUISVG.TextRightAlign, {}),
              }),
            ],
          });
        }
        function E(n) {
          const { schema: s, maxLevel: a = 1, levels: d } = n,
            m = a + d - 1;
          return (0, r.jsxs)(r.Fragment, {
            children: [
              a <= 1 &&
                (0, r.jsx)(y.u3, {
                  tooltip: (0, p.we)("#FormattingToolbar_HeadingLevel1"),
                  keyboardShortcut: "Ctrl-Shift-1",
                  nodeType: s.nodes.heading,
                  attrs: { level: 1 },
                  children: (0, r.jsx)(b.jRw, {}),
                }),
              a <= 2 &&
                m >= 2 &&
                (0, r.jsx)(y.u3, {
                  tooltip: (0, p.we)("#FormattingToolbar_HeadingLevel2"),
                  keyboardShortcut: "Ctrl-Shift-2",
                  nodeType: s.nodes.heading,
                  attrs: { level: 2 },
                  children: (0, r.jsx)(b.qOW, {}),
                }),
              a <= 3 &&
                m >= 3 &&
                (0, r.jsx)(y.u3, {
                  tooltip: (0, p.we)("#FormattingToolbar_HeadingLevel3"),
                  keyboardShortcut: "Ctrl-Shift-3",
                  nodeType: s.nodes.heading,
                  attrs: { level: 3 },
                  children: (0, r.jsx)(b.x7X, {}),
                }),
              a <= 4 &&
                m >= 4 &&
                (0, r.jsx)(y.u3, {
                  tooltip: (0, p.we)("#FormattingToolbar_HeadingLevel4"),
                  keyboardShortcut: "Ctrl-Shift-4",
                  nodeType: s.nodes.heading,
                  attrs: { level: 4 },
                  children: (0, r.jsx)(b.qzO, {}),
                }),
              a <= 5 &&
                m >= 5 &&
                (0, r.jsx)(y.u3, {
                  tooltip: (0, p.we)("#FormattingToolbar_HeadingLevel5"),
                  keyboardShortcut: "Ctrl-Shift-5",
                  nodeType: s.nodes.heading,
                  attrs: { level: 5 },
                  children: (0, r.jsx)(b.jXA, {}),
                }),
            ],
          });
        }
        function C(n) {
          const { schema: s, showIndentButtonsAsNeeded: a = !1 } = n,
            { callbacks: d, view: m } = (0, y.wU)(),
            { bullet_list: g, ordered_list: i, list_item: f } = s.nodes,
            h = B.useMemo(() => L.T2(f), [f]),
            v = B.useMemo(() => L.$B(f), [f]),
            [A, x] = B.useState(() => h(m.state) || v(m.state));
          return (
            (0, U.hL)(
              d,
              B.useCallback(
                (R) => {
                  x(h(R.state) || v(R.state));
                },
                [h, v],
              ),
            ),
            (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(c, {
                  tooltip: (0, p.we)("#FormattingToolbar_BulletedList"),
                  keyboardShortcut: "Ctrl-Shift-8",
                  list_type: g,
                  list_item: f,
                  children: (0, r.jsx)(b.JPq, {}),
                }),
                i &&
                  (0, r.jsx)(c, {
                    tooltip: (0, p.we)("#FormattingToolbar_OrderedList"),
                    keyboardShortcut: "Ctrl-Shift-7",
                    list_type: i,
                    list_item: f,
                    children: (0, r.jsx)(b.jE0, {}),
                  }),
                (!a || A) &&
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(y.cQ, {
                        tooltip: (0, p.we)("#FormattingToolbar_OutdentList"),
                        keyboardShortcut: "Mod-[",
                        command: h,
                        children: (0, r.jsx)(b.LSz, {}),
                      }),
                      (0, r.jsx)(y.cQ, {
                        tooltip: (0, p.we)("#FormattingToolbar_IndentList"),
                        keyboardShortcut: "Mod-[",
                        command: v,
                        children: (0, r.jsx)(b.ycU, {}),
                      }),
                    ],
                  }),
              ],
            })
          );
        }
        function c(n) {
          const { list_type: s, list_item: a, children: d, ...m } = n,
            { callbacks: g, view: i } = (0, y.wU)(),
            f = B.useCallback((R) => (0, T.wt)(R.state, s) !== void 0, [s]),
            [h, v] = B.useState(() => f(i)),
            A = B.useMemo(() => L.Sd(s), [s]),
            x = B.useMemo(() => L.T2(a), [a]);
          return (
            (0, U.hL)(
              g,
              B.useCallback(
                (R) => {
                  v(f(R));
                },
                [f],
              ),
            ),
            (0, r.jsx)(y.cQ, {
              ...m,
              toggled: h,
              command: h ? x : A,
              children: d,
            })
          );
        }
        function t(n) {
          const { schema: s, addtlAttrs: a } = n;
          return (0, r.jsx)(I, {
            schema: s,
            addtlAttrs: a,
            children: (0, r.jsx)(b.YqK, {}),
          });
        }
        function l(n) {
          const { bSpellcheckEnabled: s, setSpellcheckEnabled: a } = n;
          return (0, r.jsx)(y.ff, {
            tooltip: s
              ? (0, p.we)("#FormattingToolbar_DisableSpellcheck")
              : (0, p.we)("#FormattingToolbar_EnableSpellcheck"),
            toggled: s,
            onClick: () => a(!s),
            children: (0, r.jsx)(b.DEV, {}),
          });
        }
      },
      50660: (H, N, o) => {
        "use strict";
        o.d(N, {
          Ez: () => M,
          GY: () => C,
          XQ: () => e,
          bI: () => j,
          cQ: () => c,
          ff: () => t,
          hK: () => u,
          u3: () => E,
          wU: () => D,
        });
        var r = o(7850),
          O = o(19298),
          L = o(74827),
          T = o(12362),
          B = o(90626),
          b = o(19316),
          k = o(71421),
          y = o(8323),
          U = o(36707),
          p = o(54963),
          I = o(98609),
          _ = o(73309),
          S = o.n(_);
        const D = () => B.useContext(P);
        function j(m) {
          const { view: g, refUpdateToolbar: i, children: f } = m,
            h = B.useRef(void 0);
          h.current || (h.current = new y.lu());
          const v = h.current;
          B.useEffect(
            () => (
              (0, p.cZ)(i, () => v.Dispatch(g)), () => (0, p.cZ)(i, void 0)
            ),
            [v, g, i],
          );
          const A = B.useMemo(() => ({ callbacks: v, view: g }), [v, g]);
          return g ? (0, r.jsx)(P.Provider, { value: A, children: f }) : null;
        }
        const P = B.createContext(void 0);
        function e() {
          return (0, r.jsx)("div", { className: _.Gap });
        }
        function u() {
          return (0, r.jsx)("div", { className: _.Spacer });
        }
        function M(m) {
          return (0, r.jsx)("div", {
            className: (0, U.A)(m.className, _.ToolbarRowOverflowContainer),
            children: (0, r.jsx)(O.Z, {
              className: _.ToolbarRow,
              "flow-children": "row",
              children: m.children,
            }),
          });
        }
        function E(m) {
          const { nodeType: g, attrs: i, children: f, ...h } = m,
            { callbacks: v, view: A } = D(),
            [x, R] = B.useState(() => (0, L.gj)(A.state, g, i)),
            F = B.useCallback((w) => R((0, L.gj)(w.state, g, i)), [g, i]);
          (0, p.hL)(v, F);
          const W = B.useMemo(() => T.y_(g, i), [i, g]);
          return (0, r.jsx)(c, { ...h, command: W, toggled: x, children: f });
        }
        function C(m) {
          const { mark: g, children: i, ...f } = m,
            { callbacks: h, view: v } = D(),
            [A, x] = B.useState(() => (0, L.Cd)(v.state, g)),
            R = B.useCallback((W) => x((0, L.Cd)(W.state, g)), [g]);
          (0, p.hL)(h, R);
          const F = B.useMemo(() => T.wh(g), [g]);
          return (0, r.jsx)(c, { ...f, command: F, toggled: A, children: i });
        }
        function c(m) {
          const { command: g, toggled: i, children: f, ...h } = m,
            { view: v, callbacks: A } = D(),
            [x, R] = B.useState(() => g(v.state));
          (0, p.hL)(
            A,
            B.useCallback((W) => R(g(W.state)), [g]),
          ),
            B.useEffect(() => R(g(v.state)), [g, v]);
          const F = !x && !i;
          return (0, r.jsx)(l, {
            ...h,
            children: (0, r.jsx)(b.$n, {
              className: (0, U.A)(_.CommandButton, i && _.Toggled),
              onMouseDown: (W) => {
                W.preventDefault(), g(v.state, v.dispatch, v);
              },
              disabled: F,
              focusable: !F,
              children: f,
            }),
          });
        }
        function t(m) {
          const {
            onClick: g,
            toggled: i,
            disabled: f,
            children: h,
            className: v,
            ...A
          } = m;
          return (0, r.jsx)(l, {
            ...A,
            children: (0, r.jsx)(b.$n, {
              className: (0, U.A)(_.CommandButton, i && _.Toggled, v),
              onMouseDown: (x) => {
                x.button === 0 && (x.preventDefault(), g(x));
              },
              disabled: f === !0,
              children: h,
            }),
          });
        }
        function l(m) {
          const { tooltip: g, keyboardShortcut: i, children: f } = m;
          if (!g) return f;
          const h = i ? (0, r.jsx)(n, { tooltip: g, keyboardShortcut: i }) : g;
          return (0, r.jsx)(k.Gq, {
            toolTipContent: h,
            direction: "bottom",
            children: f,
          });
        }
        function n(m) {
          const { tooltip: g, keyboardShortcut: i } = m;
          return (0, r.jsxs)("div", {
            className: _.TooltipWithShortcut,
            children: [
              (0, r.jsx)("div", { children: g }),
              (0, r.jsx)("div", {
                children: (0, r.jsx)(s, { keyboardShortcut: i }),
              }),
            ],
          });
        }
        function s(m) {
          const { keyboardShortcut: g } = m,
            i = g.split("-"),
            f = i.pop() ?? "";
          return (0, r.jsxs)(r.Fragment, {
            children: [
              i.map((h, v) =>
                (0, r.jsxs)(
                  B.Fragment,
                  {
                    children: [
                      (0, r.jsx)(a, {
                        children: (0, r.jsx)(d, { modifier: h }),
                      }),
                      " + ",
                    ],
                  },
                  v,
                ),
              ),
              (0, r.jsx)(a, { children: f.toUpperCase() }),
            ],
          });
        }
        function a(m) {
          return (0, r.jsx)("span", {
            className: _.KeyCap,
            children: m.children,
          });
        }
        function d(m) {
          const { modifier: g } = m;
          switch (g) {
            case "Mod":
              return I.TS.PLATFORM == "macos" ? "\u2318" : "Ctrl";
            case "Shift":
              return I.TS.PLATFORM == "macos", "Shift";
            case "Ctrl":
              return I.TS.PLATFORM == "macos" ? "Control" : "Ctrl";
            case "Alt":
              return I.TS.PLATFORM == "macos" ? "Option" : "Alt";
          }
          return null;
        }
      },
      27828: (H) => {
        H.exports = {
          EyeDropperCtn: "_5jKe2NV9CM3JA3hcMALLw",
          EyeDropperBtn: "_3afPQT_fEWmhHhFHS-WIk7",
          ColorPickerCtn: "Nn2-w0eqLuugAR-Udm--3",
          ColorPickerDialog: "_32PwNSgquR6tGAPIBcWgVq",
        };
      },
      88376: (H) => {
        H.exports = {
          ModalConfirmDialog: "_1MwR7dU-J2CeRWYt9WfUJw",
          Header: "Y9lJcGdHP6m4TRcgHnzj2",
          Buttons: "_1Wq4E7gdTa-fjWrhWFQG7b",
        };
      },
      73309: (H) => {
        H.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          Container: "_30v-6zb_axOypIUr5VRHE1",
          SingleLine: "_2i9qH2AM6Wg5660Tkf_fTt",
          ToolbarRowOverflowContainer: "nXEH21nf47u2OH7BjQKei",
          ToolbarRow: "LCeIT0gmFTY8fdfaVgk4j",
          Gap: "_19z0fjj7o0n9vAjVjvYZNU",
          Spacer: "_2m1BBIp5Ewr1TI-BkqFGLM",
          CommandButton: "_1dEi5qzSDdPOzoOQXYbNLN",
          Toggled: "_1Iw5xoXQXfmRjgjWTKbm_G",
          FileUploadPlaceholder: "_2P-FBc3tZWGeeBFplDSb9g",
          ThrobberCtn: "_3QpIkO3kkVZmnulwmiZRHH",
          ThrobberRow: "VIY8ZV4g4NpEMnF-_pHOh",
          Throbber: "_12t6JmDCFT6MqtNVrSi5NJ",
          PendingImage: "_2HezQYTfmFfdRmuB8l9QPI",
          FileUploadDragDrop: "_1WRaNQqBKcUp67ntgoyEeQ",
          FileUploadDropFilesMessage: "I2CE9X_I0GBNYbJf7VYBg",
          TooltipWithShortcut: "zT2msZmm-jBeLe4Dt7smo",
          KeyCap: "_3mZEV9CXrIn4FITvJk3Xy-",
        };
      },
    },
  ]);
})();
