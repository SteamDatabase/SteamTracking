/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [69773],
    {
      65217: (z, W, o) => {
        "use strict";
        o.d(W, { F: () => S });
        var r = o(39414);
        function S(F, y, x, M) {
          let k = [],
            B;
          for (; (B = y.match(r.O)); ) {
            B.index > 0 && k.push(F.text(y.substring(0, B.index)));
            const j = (0, r.S)(B[0]),
              u = M && M(j);
            !u || u === "default"
              ? k.push(F.text(B[0], [x.create({ href: j })]))
              : u !== "remove" && k.push(u),
              (y = y.substring(B.index + B[0].length));
          }
          if (k.length != 0) return y.length && k.push(F.text(y)), k;
        }
      },
      8422: (z, W, o) => {
        "use strict";
        o.d(W, { Mw: () => M, TG: () => B, zL: () => x });
        var r = o(7850),
          S = o(52893),
          F = o(90626),
          y = o(19565);
        const x = new S.k_({
            props: {
              handlePaste(j, u, w) {
                var N;
                const U =
                  (N = u.clipboardData) == null
                    ? void 0
                    : N.getData("text/plain").replace(/\n/g, " ");
                if (U) {
                  const I = j.state.tr.insertText(U);
                  j.dispatch(I);
                }
                return !0;
              },
            },
          }),
          M = {
            Enter: () => !0,
            "Shift-Enter": () => !0,
            "Mod-Enter": () => !0,
          };
        function k(j) {
          return new S.k_({
            filterTransaction(u, w) {
              return u.doc.textContent.length <= j;
            },
          });
        }
        function B(j) {
          const { nMaxChars: u } = j;
          return (
            (0, y.c$)((0, F.useMemo)(() => k(u), [u])),
            (0, r.jsx)(F.Fragment, {})
          );
        }
      },
      58802: (z, W, o) => {
        "use strict";
        o.d(W, { W: () => x });
        var r = o(57053),
          S = Object.defineProperty,
          F = (k, B, j) =>
            B in k
              ? S(k, B, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: j,
                })
              : (k[B] = j),
          y = (k, B, j) => F(k, typeof B != "symbol" ? B + "" : B, j);
        class x {
          constructor(B, j) {
            y(this, "m_ProseMirrorSchema"),
              y(this, "m_mapBBCodeDictionary", new Map()),
              y(this, "m_PMToBBCodeConfig", {
                mapNodes: new Map(),
                mapMarks: new Map(),
              });
            const u = {
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
              w = new Map(),
              N = new Map(),
              U = j ? new Set(j) : void 0;
            for (const A in B.nodes) {
              const { bbCode: v, ...e } = B.nodes[A],
                a = M(v, U);
              a && ((u[A] = e), w.set(A, a));
            }
            const I = {};
            for (const A in B.marks) {
              const { bbCode: v, ...e } = B.marks[A];
              (!U || U.has(v.tag)) && ((I[A] = e), N.set(A, v));
            }
            (this.m_ProseMirrorSchema = new r.Sj({ nodes: u, marks: I })),
              w.forEach((A, v) => {
                var e;
                const a = this.m_ProseMirrorSchema.nodes[v],
                  T = B.nodes[v],
                  P = Array.isArray(A) ? A : [A];
                let g;
                T.content == "list_item+"
                  ? (g = this.m_ProseMirrorSchema.nodes.list_item)
                  : ((e = T.content) == null
                      ? void 0
                      : e.indexOf("paragraph")) != -1 &&
                    (g = this.m_ProseMirrorSchema.nodes.paragraph),
                  P.forEach(
                    ({
                      tag: m,
                      BBArgsToAttrs: h,
                      AttrsToBBArgs: f,
                      convertContentToAttr: t,
                      bVerbatimArgs: n,
                      bVerbatimContent: c,
                      ...d
                    }) => {
                      this.m_mapBBCodeDictionary.set(m, {
                        Constructor: {
                          node: a,
                          BBArgsToAttrs: h,
                          convertContentToAttr: t,
                          acceptNode: g,
                        },
                        skipFollowingNewline: !0,
                        ...d,
                      });
                    },
                  );
                const {
                  tag: _,
                  AttrsToBBArgs: C,
                  bVerbatimArgs: E,
                  bVerbatimContent: D,
                } = P[0];
                this.m_PMToBBCodeConfig.mapNodes.set(a, {
                  tag: _,
                  AttrsToBBArgs: C,
                  bVerbatimArgs: E,
                  bVerbatimContent: D,
                });
              }),
              N.forEach((A, v) => {
                const e = this.m_ProseMirrorSchema.marks[v],
                  { tag: a, BBArgsToAttrs: T, AttrsToBBArgs: P, ...g } = A;
                this.m_mapBBCodeDictionary.set(a, {
                  Constructor: { mark: e, BBArgsToAttrs: T },
                  ...g,
                }),
                  this.m_PMToBBCodeConfig.mapMarks.set(e, {
                    tag: a,
                    AttrsToBBArgs: P,
                  });
              });
          }
          get pm_schema() {
            return this.m_ProseMirrorSchema;
          }
          get bbcode_dictionary() {
            return this.m_mapBBCodeDictionary;
          }
          get pm_to_bbcode_config() {
            return this.m_PMToBBCodeConfig;
          }
          ConvertAttrToBBCodeArgs(B, j) {
            const u = this.m_PMToBBCodeConfig.mapNodes.get(B.type);
            return u && u.AttrsToBBArgs ? u.AttrsToBBArgs(j, B).args || {} : {};
          }
        }
        function M(k, B) {
          if (B)
            if (Array.isArray(k)) {
              const j = k.filter((u) => B.has(u.tag));
              return j.length > 0 ? j : void 0;
            } else return B.has(k.tag) ? k : void 0;
          else return k;
        }
      },
      81240: (z, W, o) => {
        "use strict";
        o.d(W, { i: () => F });
        var r = o(90626),
          S = o(8561);
        function F(y, x) {
          const { msAutosaveTimeout: M = 1e3, msMaxInterval: k = M * 10 } =
              x || {},
            [B, j] = r.useState(!1),
            u = r.useRef(0);
          return (
            (0, S.u)(
              y,
              r.useCallback(() => {
                (u.current = performance.now()), j(!0);
              }, []),
            ),
            r.useEffect(() => {
              if (!B || !y) return;
              const w = performance.now(),
                N = (I = !1) => {
                  U = void 0;
                  const A = performance.now(),
                    v = A - u.current;
                  I || v >= M || A - w >= k
                    ? (console.log("Committing changes"),
                      y.CommitChanges(),
                      j(!1))
                    : (U = window.setTimeout(N, M - v));
                };
              let U = window.setTimeout(N, M);
              return () => {
                U && (window.clearTimeout(U), N(!0));
              };
            }, [B, y, M, k]),
            { bDirty: B }
          );
        }
      },
      23569: (z, W, o) => {
        "use strict";
        o.d(W, { M: () => U, U: () => u });
        var r = o(7850),
          S = o(38585),
          F = o(52893),
          y = o(90626),
          x = o(72739),
          M = o(19565),
          k = Object.defineProperty,
          B = (I, A, v) =>
            A in I
              ? k(I, A, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: v,
                })
              : (I[A] = v),
          j = (I, A, v) => B(I, typeof A != "symbol" ? A + "" : A, v);
        const u = y.memo(function (A) {
          const { specs: v } = A,
            [e, a] = y.useState([]),
            T = y.useRef(0),
            P = y.useCallback(
              (_) => (
                a((C) => [...C, { id: T.current++, nodeView: _ }]),
                () => a((C) => C.filter((E) => E.nodeView != _))
              ),
              [],
            ),
            g = y.useMemo(() => {
              const _ = {};
              return (
                v
                  .filter(Boolean)
                  .forEach(
                    (C) => (_[C.type.name] = (E, D, m) => new N(C, E, D, m, P)),
                  ),
                new F.k_({ props: { nodeViews: _ } })
              );
            }, [v, P]);
          return (
            (0, M.c$)(g),
            e.map(({ id: _, nodeView: C }) => (0, r.jsx)(w, { nodeView: C }, _))
          );
        });
        function w(I) {
          const {
              element: A,
              spec: v,
              getProps: e,
              onPropsChanged: a,
              actions: T,
              isSelected: P,
            } = I.nodeView,
            [g, _] = y.useReducer((C) => C + 1, 0);
          return (
            y.useEffect(() => a.Register(_).Unregister, [a, _]),
            x.createPortal(
              y.createElement(v.component, { ...e(), selected: P(), ...T }),
              A,
            )
          );
        }
        class N {
          constructor(A, v, e, a, T) {
            j(this, "dom"),
              j(this, "contentDOM"),
              j(this, "onPropsChanged"),
              j(this, "node"),
              j(this, "selected"),
              j(this, "reactHost"),
              j(this, "destroy"),
              (this.node = v);
            const P = e.dom.ownerDocument,
              g = P.createElement(A.type.isInline ? "span" : "div");
            this.dom = g;
            let _ = g;
            A.bEditableContent &&
              ((_ = this.reactHost =
                P.createElement(A.type.isInline ? "span" : "div")),
              (_.contentEditable = "false"),
              g.appendChild(_),
              (this.contentDOM = P.createElement(
                A.type.inlineContent ? "span" : "div",
              )),
              g.appendChild(this.contentDOM));
            const { selection: C } = e.state;
            this.selected = a() >= C.from && a() + v.nodeSize <= C.to;
            const E = (h) => {
                const f = h(e.state.tr, v, a());
                f && e.dispatch(f);
              },
              D = {
                update: E,
                setAttrs: (h, f) => E((t, n, c) => t.setNodeMarkup(c, f, h)),
                removeNode: () => E((h, f, t) => h.delete(t, t + f.nodeSize)),
                focusView: () => {
                  window.setTimeout(() => e.focus(), 1);
                },
              },
              m = new S.l();
            (this.destroy = T({
              element: _,
              spec: A,
              getProps: () => A.readProps(this.node),
              isSelected: () => this.selected,
              onPropsChanged: m,
              actions: D,
            })),
              (this.onPropsChanged = m.Dispatch.bind(m));
          }
          update(A, v, e) {
            return A.type != this.node.type
              ? !1
              : ((this.node = A), this.onPropsChanged(), !0);
          }
          ignoreMutation(A) {
            return this.contentDOM && this.contentDOM.contains(A.target)
              ? !1
              : this.reactHost
                ? !0
                : A.type != "selection";
          }
          stopEvent(A) {
            return !!this.reactHost && this.reactHost.contains(A.target);
          }
          selectNode() {
            (this.selected = !0), this.onPropsChanged();
          }
          deselectNode() {
            (this.selected = !1), this.onPropsChanged();
          }
        }
        function U(I) {
          return (A, v, e) => A.replaceWith(e, e + v.nodeSize, I);
        }
      },
      19565: (z, W, o) => {
        "use strict";
        o.d(W, { KF: () => T, Ot: () => a, c$: () => P, Hd: () => g });
        var r = o(7850),
          S = o(12362),
          F = o(15024),
          y = o(7502),
          x = o(52893),
          M = o(90626),
          k = o(98724),
          B = o(79216),
          j = o(4188),
          u = o(74827);
        function w(_) {
          const { nodes: C, marks: E } = _,
            D = (0, S.st)(
              S.I$,
              (h, f) => (
                f &&
                  f(
                    h.tr
                      .replaceSelectionWith(C.hard_break.createChecked())
                      .scrollIntoView(),
                  ),
                !0
              ),
            ),
            m = {
              "Mod-z": k.tN,
              "Mod-y": k.ZS,
              "Shift-Mod-z": k.ZS,
              Backspace: B.dv,
              Escape: S.hy,
              "Mod-Enter": D,
              "Shift-Enter": D,
              "Mod-b": (0, S.wh)(E.strong),
              "Mod-i": (0, S.wh)(E.italic),
              "Mod-u": (0, S.wh)(E.underline),
              "Mod-Shift-x": (0, S.wh)(E.strike),
              "Ctrl-Shift-s": (0, S.wh)(E.strike),
              Enter: (0, j.wn)(C.list_item),
              "Mod-[": (0, j.T2)(C.list_item),
              "Mod-]": (0, j.$B)(C.list_item),
              "Ctrl-Shift-1": (0, S.y_)(C.heading, { level: 1 }),
              "Ctrl-Shift-2": (0, S.y_)(C.heading, { level: 2 }),
              "Ctrl-Shift-3": (0, S.y_)(C.heading, { level: 3 }),
              "Ctrl-Shift-4": (0, S.y_)(C.heading, { level: 4 }),
              "Ctrl-Shift-5": (0, S.y_)(C.heading, { level: 5 }),
              "Ctrl-Shift-7": (0, S.y_)(C.ordered_list),
              "Ctrl-Shift-8": (0, S.y_)(C.bullet_list),
              "Ctrl-Shift-0": (0, S.y_)(C.paragraph),
            };
          return (
            E.code && (m["Ctrl-Shift-c"] = (0, S.wh)(E.code)),
            C.code_block && (m["Alt-Ctrl-Shift-c"] = (0, S.y_)(C.code_block)),
            C.horizontal_rule &&
              (m["Mod-_"] = (h, f) => (
                f &&
                  f(
                    h.tr
                      .replaceSelectionWith(C.horizontal_rule.create())
                      .scrollIntoView(),
                  ),
                !0
              )),
            (0, y.w)(m)
          );
        }
        function N(_, C) {
          return new B.fV(_, (E, D, m, h) =>
            E.tr.replaceWith(m, h, C.create()),
          );
        }
        function U(_) {
          const { nodes: C, marks: E } = _;
          return (0, B.sM)({
            rules: [
              (0, B.tG)(
                /^(\d+)\.\s$/,
                C.ordered_list,
                (D) => ({ order: parseInt(D[1]) }),
                (D, m) => m.childCount + m.attrs.order == parseInt(D[1]),
              ),
              (0, B.tG)(/^\s*([-+*])\s$/, C.bullet_list),
              (0, u.OX)(/(?<!\w)\*([^*]+)\*/, E.strong),
              (0, u.OX)(/(?<!\w)_([^_]+)_/, E.italic),
              (0, u.OX)(/(?<!\w)~([^~]+)~/, E.strike),
              (0, u.OX)(/(?<!\w)`([^`]+)`/, E.code),
              (0, B.JJ)(/^```$/, C.code_block),
              (0, B.JJ)(/^(#{1,5})\s$/, C.heading, (D) => ({
                level: D[1].length,
              })),
              C.horizontal_rule && N(/^(\*\*\*|---|___)$/, C.horizontal_rule),
            ].filter(Boolean),
          });
        }
        var I = o(45772),
          A = o(74763),
          v = o(8422);
        const e = M.createContext(void 0);
        function a(_) {
          const { view: C, pmState: E, children: D } = _,
            m = M.useMemo(() => ({ view: C, pmState: E }), [C, E]);
          return (0, r.jsx)(e.Provider, { value: m, children: D });
        }
        const T = M.memo(function (C) {
          const { schema: E, refOnUpdate: D, bSingleLine: m } = C;
          return (
            P(
              M.useMemo(
                () =>
                  D &&
                  new x.k_({
                    view: (h) => ({
                      update: (...f) => D.current && D.current(...f),
                    }),
                  }),
                [D],
              ),
            ),
            P(M.useMemo(() => (0, y.w)(m ? v.Mw : {}), [m])),
            P(m ? v.zL : void 0),
            P(M.useMemo(() => (0, F.z)(), [])),
            P(M.useMemo(() => w(E), [E])),
            P(M.useMemo(() => (0, y.w)(S.RV), [])),
            P(M.useMemo(() => U(E), [E])),
            null
          );
        });
        function P(_) {
          const { pmState: C } = M.useContext(e);
          M.useEffect(() => {
            if (!(!C || !_)) return C.InstallPlugin(_);
          }, [_, C]);
        }
        function g() {
          var _;
          return (_ = M.useContext(e)) == null ? void 0 : _.view;
        }
      },
      84419: (z, W, o) => {
        "use strict";
        o.d(W, { BM: () => M, DQ: () => U, cI: () => v, ce: () => k });
        var r = o(4188),
          S = o(36707),
          F = o(29950),
          y = o(33645),
          x = o.n(y);
        function M(e, a, T = 0) {
          return () => [e, { class: a }, T];
        }
        function k(e, a, T = 0) {
          return [e, { class: a }, T];
        }
        function B(e, a) {
          return () => [
            a,
            { class: bbstyles.PreservedUnsupportedTag },
            ["span", { class: bbstyles.Tag }, `[${e}]`],
            ["span", 0],
            ["span", { class: bbstyles.Tag }, `[/${e}]`],
          ];
        }
        function j(e) {
          return {
            tag: `h${e}`,
            BBArgsToAttrs: (a) => ({ level: e, align: a.align || "left" }),
            AttrsToBBArgs: (a) => {
              let T = { tag: `h${a.level}`, args: {} };
              return (
                a.align &&
                  a.align != "left" &&
                  T.args &&
                  (T.args.align = a.align),
                T
              );
            },
          };
        }
        function u(e) {
          return {
            tag: `h${e}`,
            getAttrs(a) {
              return { level: e, align: a.style.textAlign || "left" };
            },
          };
        }
        const w = {
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
                const a = { class: (0, S.A)("pm_paragraph", x().Paragraph) };
                return (
                  e.attrs.align &&
                    e.attrs.align != "left" &&
                    (a.style = `text-align: ${e.attrs.align}`),
                  ["p", a, 0]
                );
              },
              bbCode: {
                tag: "p",
                autocloses: !0,
                BBArgsToAttrs: (e) => ({ align: e.align }),
                AttrsToBBArgs: (e) => {
                  let a = { args: {} };
                  return (
                    e.align && e.align != "left" && (a.args.align = e.align), a
                  );
                },
              },
            },
            heading: {
              attrs: { level: { default: 1 }, align: { default: "left" } },
              content: "inline*",
              group: "block",
              defining: !0,
              parseDOM: [1, 2, 3, 4, 5].map(u),
              toDOM(e) {
                const a = {
                  class:
                    `BB_Header${e.attrs.level} ` +
                    x()[`Header${e.attrs.level}`],
                };
                return (
                  e.attrs.align &&
                    e.attrs.align != "left" &&
                    (a.style = `text-align: ${e.attrs.align}`),
                  ["h" + e.attrs.level, a, 0]
                );
              },
              bbCode: [1, 2, 3, 4, 5].map(j),
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
                const { src: a, alt: T, title: P, style: g } = e.attrs;
                return [
                  "img",
                  {
                    src: (0, F.J)(a),
                    alt: T,
                    title: P,
                    class: (0, S.A)(x().Image, {
                      [x().Image_Inline]: g === "inline",
                    }),
                  },
                ];
              },
              bbCode: {
                tag: "img",
                BBArgsToAttrs: (e) => {
                  var a;
                  return {
                    src: e.src,
                    style: (a = e.style) != null ? a : void 0,
                  };
                },
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
                    const a = e;
                    let T = "",
                      P = "";
                    for (const g of a.querySelectorAll("source"))
                      g.type == "video/mp4"
                        ? (T = g.src)
                        : g.type == "video/webm" && (P = g.src);
                    return {
                      mp4: T,
                      webm: P,
                      poster: a.poster || "",
                      autoplay: !!a.autoplay,
                      controls: !!a.controls,
                    };
                  },
                },
              ],
              toDOM(e) {
                const {
                    webm: a,
                    mp4: T,
                    poster: P,
                    autoplay: g,
                    controls: _,
                  } = e.attrs,
                  C = [];
                return (
                  a &&
                    C.push([
                      "source",
                      { src: (0, F.J)(a), type: "video/webm" },
                    ]),
                  T &&
                    C.push(["source", { src: (0, F.J)(T), type: "video/mp4" }]),
                  [
                    "video",
                    {
                      poster: (0, F.J)(P),
                      autoPlay: !!g,
                      controls: !!_,
                      loop: !_ && !!g,
                    },
                    ...C,
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
              toDOM: M("ul", x().List),
              bbCode: { tag: "list" },
            },
            ordered_list: {
              ...r.o8,
              content: "list_item+",
              group: "block",
              toDOM: M("ol", x().OrderedList),
              bbCode: { tag: "olist" },
            },
            list_item: {
              ...r.Aw,
              content: "paragraph block*",
              toDOM: M("li", x().ListItem),
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
                  { class: x().CodeBlock },
                  ["code", { class: x().Code }, 0],
                ];
              },
              bbCode: { tag: "code" },
            },
          },
          N = {
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
              toDOM: M("b", (0, S.A)("BB_Bold", x().Bold)),
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
              toDOM: M("i", (0, S.A)("BB_Italic", x().Italic)),
              bbCode: { tag: "i" },
            },
            underline: {
              parseDOM: [{ tag: "u" }, { style: "text-decoration=underline" }],
              toDOM: M("u", (0, S.A)("BB_Underline", x().Underline)),
              bbCode: { tag: "u" },
            },
            strike: {
              parseDOM: [{ style: "text-decoration=line-through" }],
              toDOM: M("span", (0, S.A)("BB_Strike", x().Strike)),
              bbCode: { tag: "strike" },
            },
            code: {
              parseDOM: [{ tag: "code" }],
              toDOM: M("code", (0, S.A)("BB_Code", x().Code)),
              bbCode: { tag: "c" },
            },
            link: {
              attrs: { href: {}, title: { default: null } },
              inclusive: !1,
              parseDOM: [
                {
                  tag: "a[href]",
                  getAttrs(e) {
                    var a;
                    return {
                      href: (0, F.J)(
                        (a = e.getAttribute("href")) != null ? a : "",
                      ),
                      title: e.getAttribute("title"),
                    };
                  },
                },
              ],
              toDOM(e) {
                const { href: a, title: T } = e.attrs;
                return [
                  "a",
                  { href: (0, F.J)(a), title: T, class: "BB_Link" },
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
          U = { nodes: w, marks: N },
          v = {
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
                      class: (0, S.A)("BB_Color", x().Color),
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
                      class: (0, S.A)("BB_BGColor", x().BGColor),
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
      8561: (z, W, o) => {
        "use strict";
        o.d(W, { n: () => m, u: () => h });
        var r = o(38585),
          S = o(64868),
          F = o(98724),
          y = o(52893),
          x = o(8145),
          M = o(57053),
          k = o(71742),
          B = Object.defineProperty,
          j = (f, t, n) =>
            t in f
              ? B(f, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
                })
              : (f[t] = n),
          u = (f, t, n) => j(f, typeof t != "symbol" ? t + "" : t, n);
        class w {
          constructor(t, n, c) {
            u(this, "m_nodes", []),
              u(this, "m_schema"),
              u(this, "m_bConvertNewlinesToBR"),
              u(this, "m_fnProcessText");
            var d;
            (this.m_schema = t),
              (this.m_bConvertNewlinesToBR =
                (d = n == null ? void 0 : n.bConvertNewlinesToBR) != null
                  ? d
                  : !1);
            const l = c && "mark" in c;
            this.m_fnProcessText = l || n == null ? void 0 : n.fnProcessText;
          }
          AppendText(t, n) {
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
            const n = [];
            let c = 0;
            for (
              let d = t.indexOf(
                `
`,
                c,
              );
              d !== -1;
              d = t.indexOf(
                `
`,
                c,
              )
            )
              c != d && n.push(...this.TextNode(t.substring(c, d))),
                n.push(this.m_schema.nodes.hard_break.createChecked()),
                (c = d + 1);
            return c < t.length && n.push(...this.TextNode(t.substring(c))), n;
          }
          TextNode(t) {
            const n = this.m_fnProcessText && this.m_fnProcessText(t);
            return n || [this.m_schema.text(t)];
          }
        }
        function N(f) {
          return f
            .filter((t) => t.isText)
            .map((t) => t.text)
            .join();
        }
        function U(f) {
          let t = "";
          return (
            f.descendants((n) => {
              n.isText && (t += n.text);
            }),
            t
          );
        }
        class I extends x.Al {
          constructor(t, n) {
            var c;
            super(t.bbcode_dictionary, (d) => {
              const l =
                (d == null ? void 0 : d.tag) && t.bbcode_dictionary.get(d.tag);
              return new w(
                t.pm_schema,
                n,
                l && "Constructor" in l ? l.Constructor : void 0,
              );
            }),
              u(this, "m_schemaConfig"),
              u(this, "m_mapPMBBNodes", new Map()),
              u(this, "m_bUseBackslashEscapes"),
              (this.m_schemaConfig = t),
              (this.m_bUseBackslashEscapes =
                (c = n == null ? void 0 : n.bUseBackslashEscapes) != null
                  ? c
                  : !0),
              this.m_schemaConfig.bbcode_dictionary.forEach((d) => {
                "node" in d.Constructor &&
                  this.m_mapPMBBNodes.set(
                    d.Constructor.node.name,
                    d.Constructor,
                  );
              });
          }
          get schema() {
            return this.m_schemaConfig.pm_schema;
          }
          ParseBBCode(t) {
            const n = this.Parse(
              t,
              this.BBNodeToPMNode.bind(this),
              this.m_bUseBackslashEscapes,
            );
            return this.m_schemaConfig.pm_schema.topNodeType.createChecked(
              {},
              this.ConvertLineBreaksToParagraphs(M.FK.fromArray(n)),
            );
          }
          TryCreateNode(t, n, c) {
            let d = M.FK.from(n),
              l;
            if (
              !t.node.validContent(d) &&
              (t.node.isInline ||
                (d = M.FK.from(
                  n.filter((s) =>
                    s.isText && s.text.match(/^\s*$/)
                      ? !1
                      : !(
                          s.type == this.schema.nodes.hard_break &&
                          !t.node.validContent(M.FK.from(s))
                        ),
                  ),
                )),
              !t.node.validContent(d))
            ) {
              const s = t.acceptNode;
              l = [];
              let i = [],
                p = !1,
                b = !1;
              for (let O = 0; O < d.childCount; O++) {
                const L = d.child(O),
                  R = M.FK.from(L),
                  K = t.node.validContent(R);
                !b && (K || (s != null && s.validContent(R)))
                  ? (K || (p = !0), i.push(L))
                  : ((b = !0), l.push(L));
              }
              if ((console.assert(!p || !!s), p && s)) {
                s.isBlock &&
                  i.length > 1 &&
                  i[i.length - 1].type == this.schema.nodes.hard_break &&
                  (i = i.slice(0, -1));
                const O = this.m_mapPMBBNodes.get(s.name);
                (0, k.wT)(
                  O,
                  `Indicated acceptNode type ${s.name} for ${t.node.name} missing`,
                );
                let L;
                try {
                  O
                    ? (L = this.TryCreateNode(O, i, void 0))
                    : (L = s.createChecked(void 0, i));
                } catch (R) {
                  console.error(R), (L = []), (l = [...i, ...l]);
                }
                d = M.FK.from(L);
              } else d = M.FK.from(i);
            }
            try {
              const s =
                t.node.createAndFill(c, d) || t.node.createChecked(c, d);
              return l ? [s, ...l] : s;
            } catch {
              return (
                (0, k.wT)(
                  !1,
                  `Invalid content for node type ${t.node.name}, removing and promoting children.`,
                ),
                n
              );
            }
          }
          BBNodeToPMNode(t, n, ...c) {
            let d = t.BBArgsToAttrs ? t.BBArgsToAttrs(n.args || {}) : void 0;
            try {
              if (
                ("convertContentToAttr" in t &&
                  t.convertContentToAttr &&
                  ((!d || !d[t.convertContentToAttr]) &&
                    (d = { ...(d || {}), [t.convertContentToAttr]: N(c) }),
                  "node" in t && (c = [])),
                "node" in t)
              )
                return this.TryCreateNode(t, c, d);
              {
                const l = t.mark.create(d);
                return c.map((s) => this.RecursivelyApplyMark(s, l));
              }
            } catch (l) {
              return (
                console.error(`Error parsing [${n.tagname}] tag: ${l}`, l), []
              );
            }
          }
          RecursivelyApplyMark(t, n) {
            if (t.isText || t.type.allowsMarkType(n.type))
              return t.mark([...t.marks, n]);
            {
              const c = [];
              return (
                t.descendants(
                  (d) => (c.push(this.RecursivelyApplyMark(d, n)), !1),
                ),
                t.type.create(t.attrs, c, t.marks)
              );
            }
          }
          ConvertLineBreaksToParagraphs(t) {
            const n = new Map(),
              c = this.m_schemaConfig.pm_schema;
            this.m_mapPMBBNodes.forEach((s) => {
              s.acceptNode && n.set(s.acceptNode.name, s.node);
            });
            const d = [],
              l = {
                nodes: [],
                nodeType: void 0,
                reset() {
                  (this.nodes = []), (this.nodeType = void 0);
                },
                accumulate(s, i) {
                  return (
                    this.nodeType && s != this.nodeType && this.emit(),
                    (this.nodeType = s),
                    this.nodes.push(i),
                    !0
                  );
                },
                emit(s = !1) {
                  const i = this.nodeType || (s ? c.nodes.paragraph : void 0);
                  i && (d.push(i.createChecked({}, this.nodes)), this.reset());
                },
              };
            return (
              t.forEach((s) => {
                const i = s.type == c.nodes.hard_break,
                  p = M.FK.from(s);
                if (i || c.topNodeType.validContent(p)) {
                  const b = i && l.nodes.length > 0;
                  l.emit(),
                    i
                      ? b || d.push(c.nodes.paragraph.createChecked())
                      : d.push(s);
                } else {
                  let b;
                  if (
                    (c.nodes.paragraph.validContent(p)
                      ? (b = c.nodes.paragraph)
                      : (b = n.get(s.type.name)),
                    b)
                  )
                    l.accumulate(b, s);
                  else {
                    (0, k.wT)(
                      !1,
                      `Couldn't accept ${s.type.name} at root of document, converting to paragraph`,
                    );
                    const O = U(s);
                    O && l.accumulate(c.nodes.paragraph, c.text(O));
                  }
                }
              }),
              (l.nodes.length || !d.length) && l.emit(!0),
              M.FK.from(d)
            );
          }
        }
        function A(f, t, n) {
          var c;
          const d = {
            schema: t.pm_schema,
            config: t.pm_to_bbcode_config,
            bUseBackslashEscapes:
              (c = n == null ? void 0 : n.bUseBackslashEscapes) != null
                ? c
                : !0,
          };
          return v(d, f, [], !1);
        }
        function v(f, t, n, c) {
          const { schema: d, config: l } = f;
          let s = t.marks,
            i = "";
          const p = l.mapNodes.get(t.type),
            { tag: b, args: O } = P(p, t);
          b == "emoticon"
            ? (i += ":")
            : b && (i += (0, x.CS)(b, O, p == null ? void 0 : p.bVerbatimArgs));
          const L = c || !!(p != null && p.bVerbatimContent);
          let R = !1;
          return (
            t.content.forEach((K) => {
              if (
                (([i, s] = a(l, s, K.marks, i)),
                ([i, s] = T(l, s, K.marks, i)),
                K.type.isText)
              ) {
                const V = K.text || "";
                i += L || !f.bUseBackslashEscapes ? V : (0, x.vE)(V);
              } else if (K.type == d.nodes.hard_break)
                i += `
`;
              else {
                const V = e(l, K);
                V &&
                  R &&
                  (i += `
`),
                  (i += v(f, K, s, L)),
                  (R = V);
                return;
              }
              R = !1;
            }),
            ([i] = a(l, s, n, i)),
            b == "emoticon" ? (i += ":") : b && (i += (0, x.op)(b)),
            i
          );
        }
        function e(f, t) {
          return t.type.isBlock && !P(f.mapNodes.get(t.type), t).tag;
        }
        function a(f, t, n, c) {
          const d = [];
          for (const s of t) n.indexOf(s) === -1 && d.push(s);
          if (!d.length) return [c, t];
          const l = t.slice();
          for (
            ;
            d.length &&
            ((0, k.wT)(l.length, "no marks left to close"), !!l.length);
          ) {
            const s = l.pop(),
              i = f.mapMarks.get(s.type),
              { tag: p } = g(i, s);
            c += (0, x.op)(p);
            const b = d.indexOf(s);
            b != -1 && d.splice(b, 1);
          }
          return [c, l];
        }
        function T(f, t, n, c) {
          let d;
          for (const l of n)
            if (t.indexOf(l) === -1) {
              d || (d = t.slice());
              const s = f.mapMarks.get(l.type);
              if (((0, k.wT)(s, "mark missing bbtag"), s)) {
                d.push(l);
                const { args: i, tag: p } = g(s, l);
                c += (0, x.CS)(p, i);
              }
            }
          return [c, d != null ? d : t];
        }
        function P(f, t) {
          if (f && f.AttrsToBBArgs) {
            const { tag: n = f.tag, args: c = {} } = f.AttrsToBBArgs(
              t.attrs,
              t,
            );
            return { tag: n, args: c };
          }
          return { tag: f == null ? void 0 : f.tag, args: {} };
        }
        function g(f, t) {
          if (f && f.AttrsToBBArgs) {
            const { tag: n = f.tag, args: c = {} } = f.AttrsToBBArgs(
              t.attrs,
              t,
            );
            return { tag: n, args: c };
          }
          return { tag: f == null ? void 0 : f.tag, args: {} };
        }
        var _ = Object.defineProperty,
          C = (f, t, n) =>
            t in f
              ? _(f, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
                })
              : (f[t] = n),
          E = (f, t, n) => C(f, typeof t != "symbol" ? t + "" : t, n);
        const D = new y.hs("CProseMirrorState - OnChange");
        class m {
          constructor(t, n, c, d) {
            E(this, "m_bbcode"),
              E(this, "m_currentDoc"),
              E(this, "m_bHasUncomittedChanges", !1),
              E(this, "m_schemaConfig"),
              E(this, "m_bbcodeParser"),
              E(this, "m_bUseBackslashEscapes"),
              E(this, "m_onStateChangedCallbacks", new r.l()),
              E(this, "m_fnCommitChanges"),
              E(this, "m_view"),
              E(this, "m_state");
            const { parser: l, bUseBackslashEscapes: s = !0 } =
              d != null ? d : {};
            (this.m_schemaConfig = t),
              (this.m_bUseBackslashEscapes = s),
              (this.m_bbcodeParser = new I(t, {
                ...l,
                bUseBackslashEscapes: s,
              })),
              (this.m_bbcode = n),
              (this.m_fnCommitChanges = c),
              (this.m_state = this.ConstructState());
          }
          CommitChanges() {
            this.m_currentDoc &&
              this.m_bHasUncomittedChanges &&
              ((this.m_bbcode = A(this.m_currentDoc, this.m_schemaConfig, {
                bUseBackslashEscapes: this.m_bUseBackslashEscapes,
              })),
              this.m_fnCommitChanges(this.m_bbcode, this.m_currentDoc),
              (this.m_bHasUncomittedChanges = !1));
          }
          BHasUncomittedChanges() {
            return this.m_bHasUncomittedChanges;
          }
          UpdateState(t) {
            var n;
            const c = t(
              ((n = this.m_view) == null ? void 0 : n.state.tr) ||
                this.m_state.tr,
            );
            !c ||
              !c.docChanged ||
              (this.m_view
                ? this.m_view.dispatch(c)
                : (this.m_state = this.m_state.apply(c)));
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
            const t = new y.k_({
                key: D,
                view: (c) => (
                  console.assert(!this.m_view),
                  (this.m_view = c),
                  {
                    update: (d, l) => this.OnStateChange(l, d.state),
                    destroy: () => (this.m_view = void 0),
                  }
                ),
              }),
              n = [(0, F.b6)(), t];
            return y.$t.create({
              schema: this.m_schemaConfig.pm_schema,
              doc: this.m_bbcodeParser.ParseBBCode(this.m_bbcode),
              plugins: n,
            });
          }
          InstallPlugin(t) {
            var n;
            const c = this.m_view ? this.m_view.state : this.m_state;
            return (
              c.plugins.includes(t) ||
                ((this.m_state = c.reconfigure({ plugins: [...c.plugins, t] })),
                (n = this.m_view) == null || n.updateState(this.m_state)),
              () => {
                var d;
                const l = this.m_view ? this.m_view.state : this.m_state;
                (this.m_state = l.reconfigure({
                  plugins: l.plugins.filter((s) => s != t),
                })),
                  (d = this.m_view) == null || d.updateState(this.m_state);
              }
            );
          }
          OnStateChange(t, n) {
            (this.m_state = n),
              t.doc &&
                t.doc != n.doc &&
                ((this.m_currentDoc = n.doc),
                (this.m_bHasUncomittedChanges = !0),
                this.m_onStateChangedCallbacks.Dispatch(
                  this.m_currentDoc,
                  t.doc,
                ));
          }
          ReplaceDocument(t) {
            this.m_bbcode != t &&
              this.UpdateState((n) => {
                this.m_bbcode = t;
                const c = this.m_bbcodeParser.ParseBBCode(t);
                return (
                  (n = this.m_state.tr
                    .replaceWith(0, this.m_state.doc.content.size, c)
                    .scrollIntoView()),
                  n
                );
              });
          }
        }
        function h(f, t) {
          (0, S.hL)(f == null ? void 0 : f.OnStateChangedCallbacks, t);
        }
      },
      74827: (z, W, o) => {
        "use strict";
        o.d(W, {
          Cd: () => x,
          OX: () => I,
          bQ: () => A,
          gj: () => B,
          vn: () => M,
          wt: () => w,
        });
        var r = o(79216),
          S = o(52893);
        function F(v, e) {
          const a = v.state;
          if (!v.state.plugins.includes(e)) {
            const T = [...v.state.plugins, e];
            v.updateState(a.reconfigure({ plugins: T }));
          }
        }
        function y(v, e) {
          if (!v.isDestroyed) {
            const a = v.state,
              T = a.plugins.filter((P) => P !== e);
            v.updateState(a.reconfigure({ plugins: T }));
          }
        }
        function x(v, e) {
          const { from: a, $from: T, to: P, empty: g } = v.selection;
          return g
            ? !!e.isInSet(v.storedMarks || T.marks())
            : v.doc.rangeHasMark(a, P, e);
        }
        function M(v, e, a) {
          var T;
          const { parent: P } = a,
            g = P.childAfter(a.parentOffset),
            _ =
              (T = g.node) == null ? void 0 : T.marks.find((f) => f.type == e);
          if (!_) return;
          let C = a.index() - 1,
            E = a.start() + g.offset;
          for (; C >= 0 && _.isInSet(P.child(C).marks); )
            (E -= P.child(C).nodeSize), (C -= 1);
          let D = a.index() + 1,
            m = a.start() + g.offset + g.node.nodeSize;
          for (; D < P.childCount && _.isInSet(P.child(D).marks); )
            (m += P.child(D).nodeSize), (D += 1);
          const h = v.doc.slice(E, m);
          return { from: E, to: m, slice: h, mark: _ };
        }
        function k(v, e, a) {
          if (v.type !== e) return !1;
          if (a === void 0) return !0;
          for (const T in a) if (a[T] !== v.attrs[T]) return !1;
          return !0;
        }
        function B(v, e, a) {
          let { $from: T, to: P } = v.selection;
          for (let g = T.depth; g > 0; g--) {
            if (P > T.end(g)) return !1;
            const _ = T.node(g);
            if (k(_, e, a)) return !0;
          }
          return !1;
        }
        function j(v, e, a) {
          for (let T of e) if (B(v, T, a)) return T;
          return null;
        }
        function u(v, e, a) {
          const { $from: T, to: P } = v.selection;
          for (let g = T.sharedDepth(P); g > 0; g--) {
            const _ = T.node(g);
            if (_.type === e) return !!_.attrs[a];
          }
          return !1;
        }
        function w(v, e, a) {
          const { $from: T, to: P } = v.selection;
          for (let g = T.sharedDepth(P); g > 0; g--) {
            const _ = T.node(g);
            if (a === void 0 ? _.type === e : _.hasMarkup(e, a))
              return T.before(g);
          }
        }
        function N(v, e) {
          return (a, T) => {
            const P = w(a, v);
            if (P === void 0) return !1;
            if (T) {
              const g = a.doc.nodeAt(P);
              if ((console.assert(!!g), !g)) return !1;
              T(a.tr.setNodeMarkup(P, v, { ...g.attrs, [e]: !g.attrs[e] }));
            }
            return !0;
          };
        }
        function U(v, e) {
          return (a, T) => {
            const { $from: P } = a.selection;
            let g = null,
              _ = 0;
            for (let C = P.depth; C > 0; C--) {
              const E = P.node(C);
              if (v.includes(E.type)) {
                (g = E), (_ = P.before(C));
                break;
              }
            }
            return g
              ? (T && T(a.tr.setNodeMarkup(_, g.type, { ...g.attrs, ...e })),
                !0)
              : !1;
          };
        }
        function I(v, e, a = {}) {
          return new r.fV(v, (T, P, g, _) => {
            const C = a instanceof Function ? a(P) : a,
              E = T.tr;
            if (P[1]) {
              const D = g + P[0].indexOf(P[1]),
                m = D + P[1].length;
              m < _ && E.delete(m, _),
                D > g && E.delete(g, D),
                (_ = g + P[1].length);
            }
            return E.addMark(g, _, e.create(C)), E.removeStoredMark(e), E;
          });
        }
        function A(v, e, a) {
          const T = { left: e, top: a },
            P = v.posAtCoords(T);
          if (P != null && P.pos) {
            const g = v.state.doc.resolve(P.pos);
            v.dispatch(v.state.tr.setSelection(S.U3.near(g)));
          }
        }
      },
      28922: (z, W, o) => {
        "use strict";
        o.d(W, { s: () => N });
        var r = o(7850),
          S = o(39905),
          F = o(90626),
          y = o(61257),
          x = o(19316),
          M = o(56718),
          k = o(71421),
          B = o(27828),
          j = o.n(B);
        function u(U) {
          return `rgba(${U.rgb.r}, ${U.rgb.g}, ${U.rgb.b}, ${U.rgb.a})`;
        }
        function w(U) {
          const I = parseInt(U.slice(1), 16),
            A = (I >> 16) & 255,
            v = (I >> 8) & 255,
            e = I & 255;
          return `rgba(${A}, ${v}, ${e}, 1)`;
        }
        function N(U) {
          const { color: I, onChange: A, strTitle: v, disableAlpha: e } = U,
            [a, T] = (0, F.useState)(() => I || "rgba(255, 255, 255, 1)"),
            P = (0, F.useCallback)(async () => {
              if (!("EyeDropper" in window)) {
                alert(S.Z.Localize("#Sale_EyeDropperError"));
                return;
              }
              try {
                const C = (await new window.EyeDropper().open()).sRGBHex,
                  E = w(C);
                T(E), A(E);
              } catch (g) {
                console.warn(S.Z.Localize("#Sale_EyeDropperFailed"), g);
              }
            }, [A]);
          return (0, r.jsxs)("div", {
            className: j().ColorPickerDialog,
            children: [
              !!v && (0, r.jsx)(x.JU, { children: v }),
              (0, r.jsx)(y.xk, {
                onChange: (g) => {
                  const _ = u(g);
                  T(_), A(_);
                },
                color: a,
                disableAlpha: e,
                className: j().ColorPickerCtn,
              }),
              (0, r.jsx)("div", {
                className: j().EyeDropperCtn,
                children: (0, r.jsx)(k.Gq, {
                  toolTipContent: S.Z.Localize("#Sale_BackgroundColorPicker"),
                  children: (0, r.jsx)(x.$n, {
                    className: j().EyeDropperBtn,
                    onClick: P,
                    children: (0, r.jsx)(M.O7b, {}),
                  }),
                }),
              }),
            ],
          });
        }
      },
      81973: (z, W, o) => {
        "use strict";
        o.d(W, { X: () => j, w: () => M });
        var r = o(33645),
          S = o.n(r),
          F = o(38539),
          y = o(84419),
          x = o(36707);
        const M = { NoBorder: "noborder", EqualCells: "equalcells" },
          k = F.of({
            tableGroup: "block",
            cellContent: "paragraph block*",
            cellAttributes: {
              class: {
                default: S().TableCell,
                setDOMAttr: (u, w) => {
                  w.class = u;
                },
              },
            },
          }),
          B = {
            BBArgsToAttrs: (u) => {
              const w = {};
              return (
                u.colspan && (w.colspan = parseInt(u.colspan)),
                u.rowspan && (w.rowspan = parseInt(u.rowspan)),
                u.colwidth &&
                  (w.colwidth = u.colwidth.split(",").map((N) => parseInt(N))),
                w
              );
            },
            AttrsToBBArgs: (u) => {
              const w = {};
              return (
                u.colspan &&
                  u.colspan != 1 &&
                  (w.colspan = u.colspan.toString()),
                u.rowspan &&
                  u.rowspan != 1 &&
                  (w.rowspan = u.rowspan.toString()),
                u.colwidth && (w.colwidth = u.colwidth.join(",")),
                { args: w }
              );
            },
          },
          j = {
            table: {
              ...k.table,
              toDOM: (u) =>
                (0, y.ce)(
                  "table",
                  (0, x.A)(
                    S().Table,
                    u.attrs.noborder && S().NoBorder,
                    u.attrs.equalcells && S().EqualCells,
                  ),
                  ["tbody", 0],
                ),
              attrs: {
                [M.NoBorder]: { default: !1 },
                [M.EqualCells]: { default: !0 },
              },
              bbCode: {
                tag: "table",
                BBArgsToAttrs: (u) => ({
                  noborder: !!u.noborder,
                  equalcells: !!u.equalcells,
                }),
                AttrsToBBArgs: (u, w) => {
                  const N = {};
                  u.noborder && (N.noborder = "1"),
                    u.equalcells && (N.equalcells = "1");
                  const U = w.child(0);
                  if (U) {
                    let I = [];
                    for (let A = 0; A < U.childCount; A++) {
                      const v = U.child(A).attrs;
                      v.colwidth ? I.push(...v.colwidth) : I.push(void 0);
                    }
                    N.colwidth = I.join(",");
                  }
                  return { args: N };
                },
              },
            },
            table_row: {
              ...k.table_row,
              toDOM: (0, y.BM)("tr", S().TableRow),
              bbCode: { tag: "tr" },
            },
            table_cell: { ...k.table_cell, bbCode: { ...B, tag: "td" } },
            table_header: { ...k.table_header, bbCode: { ...B, tag: "th" } },
          };
      },
      38348: (z, W, o) => {
        "use strict";
        o.d(W, { _: () => x });
        var r = o(7850),
          S = o(90626),
          F = o(19316),
          y = o(88003);
        function x(M) {
          const {
              closeModal: k,
              strTitle: B,
              onOK: j,
              strOKText: u,
              onCancel: w,
              strCancelText: N,
              bOKDisabled: U,
              bCancelDisabled: I,
              strClassNameContent: A = "GenericFormDialog",
              children: v,
            } = M,
            e = S.useCallback(() => {
              w && w(), k();
            }, [w, k]),
            a = I ? () => {} : e;
          return (0, r.jsx)(y.x_, {
            onEscKeypress: a,
            children: (0, r.jsxs)(F.U9, {
              onSubmit: j,
              classNameContent: A,
              children: [
                (0, r.jsx)(F.Y9, { children: B }),
                v,
                (0, r.jsx)(F.wi, {
                  children: (0, r.jsx)(F.CB, {
                    strOKText: u,
                    bOKDisabled: U,
                    onCancel: a,
                    strCancelText: N,
                    bCancelDisabled: I,
                  }),
                }),
              ],
            }),
          });
        }
      },
      15210: (z, W, o) => {
        "use strict";
        o.d(W, { J: () => e });
        var r = o(7850),
          S = o(74827),
          F = o(52893),
          y = o(90626),
          x = o(64388),
          M = o(28922),
          k = o(19298),
          B = o(64238),
          j = o(88376),
          u = o.n(j),
          w = o(66243),
          N = o(36118);
        function U(g) {
          const {
            strTitle: _,
            strDescription: C,
            className: E,
            children: D,
            navID: m,
            ...h
          } = g;
          return jsxs(ModalDialog, {
            className: classNames(E, styles.ModalConfirmDialog),
            onClose: h.onClose,
            navID: m,
            children: [
              _ &&
                jsxs(Panel, {
                  className: styles.Header,
                  children: [
                    jsx("h2", { children: _ }),
                    jsx("button", {
                      onClick: h.onClose,
                      children: jsx(SVG.X_Line_Better, {}),
                    }),
                  ],
                }),
              C &&
                jsx(Panel, {
                  className: styles.Description,
                  children: jsx("div", { children: C }),
                }),
              D,
              jsx(I, { ...h }),
            ],
          });
        }
        function I(g) {
          const { strOKLabel: _, strCancelLabel: C, onOK: E, onClose: D } = g;
          return (0, r.jsxs)(k.Z, {
            className: u().Buttons,
            children: [
              !!_ &&
                (0, r.jsx)(w.n9, { onClick: E != null ? E : D, children: _ }),
              !!C && (0, r.jsx)(w.Oh, { onClick: D, children: C }),
            ],
          });
        }
        var A = o(2801),
          v = o(18210);
        function e(g, _, C) {
          const [E, D] = y.useState(void 0),
            m = y.useRef(null),
            h = y.useCallback(
              (n) => {
                m.current = n;
                const { state: c } = n,
                  d = c.selection;
                let { from: l, to: s, empty: i } = d;
                const p = _ ? g.marks.color : g.marks.bgcolor;
                let b = "",
                  O = "";
                const L = i ? d.$from : c.doc.resolve(l),
                  R = (0, S.vn)(c, p, L),
                  K = !!R;
                K
                  ? ((b = R.mark.attrs.color),
                    i
                      ? ((O = R.slice.content.textBetween(
                          0,
                          R.slice.content.size,
                        )),
                        (l = R.from),
                        (s = R.to))
                      : ((l = Math.max(R.from, l)),
                        (s = Math.min(R.to, s)),
                        (O = R.slice.content.textBetween(
                          l - R.from,
                          s - R.from,
                        ))))
                  : i || (O = c.doc.cut(l, s).textContent);
                let V = {};
                if (C)
                  for (const H in C) {
                    const $ = C[H],
                      G = R ? $.fnReadValue(R.mark) : $.defaultValue;
                    V[H] = G;
                  }
                D({
                  viewRef: m,
                  strColor: b,
                  strTargetText: O,
                  bIsUpdate: K,
                  addtlAttrs: C,
                  addtlAttrsValues: V,
                  from: l,
                  to: s,
                });
              },
              [C, _, g.marks.bgcolor, g.marks.color],
            ),
            f = y.useCallback(() => {
              const n = m.current;
              window.setTimeout(() => {
                n && !n.isDestroyed && n.focus();
              }, 1),
                D(void 0);
            }, []),
            t =
              E &&
              (0, r.jsx)(A.EN, {
                active: !0,
                children: (0, r.jsx)(P, {
                  schema: g,
                  bColor: _,
                  closeModal: f,
                  ...E,
                }),
              });
          return [h, t];
        }
        function a(g) {
          if (g.startsWith("rgb")) {
            const _ = g.match(/\d+/g);
            if (!_ || _.length < 3) return "#000000";
            const [C, E, D] = _.map(Number);
            return (
              "#" +
              [C, E, D]
                .map((m) => {
                  const h = m.toString(16);
                  return h.length === 1 ? "0" + h : h;
                })
                .join("")
            );
          }
          return g;
        }
        function T(g) {
          const _ = g.match(
            /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)$/i,
          );
          if (_) {
            let [, C, E, D, m] = _;
            const h = parseInt(C, 10),
              f = parseInt(E, 10),
              t = parseInt(D, 10);
            return `#${((1 << 24) + (h << 16) + (f << 8) + t).toString(16).slice(1)}`;
          }
          return "#7e3232";
        }
        const P = y.memo(function (_) {
          const {
              schema: C,
              strColor: E,
              bIsUpdate: D,
              strTargetText: m,
              bColor: h,
              addtlAttrs: f,
              addtlAttrsValues: t,
              closeModal: n,
              viewRef: c,
              from: d,
              to: l,
            } = _,
            [s, i] = y.useState(E),
            p = y.useRef(null),
            [b, O] = y.useState(t),
            L = y.useCallback(() => {
              try {
                const V = c.current;
                if (!V || V.isDestroyed) {
                  console.warn(
                    "Editor view is destroyed; skipping color insert",
                  );
                  return;
                }
                const { state: H, dispatch: $ } = V,
                  G = h ? C.marks.color : C.marks.bgcolor;
                if (!G) {
                  console.log("debug: no markType");
                  return;
                }
                if (!s || !/^#[0-9a-fA-F]{6}$/.test(s)) {
                  console.log("debug: invalid color text: " + s);
                  return;
                }
                const J = Math.max(0, Math.min(d, H.doc.content.size)),
                  Q = Math.max(0, Math.min(l, H.doc.content.size));
                if (J > Q) {
                  console.error("Invalid selection range:", d, l);
                  return;
                }
                const Y = G.create({ color: s, ...b });
                let Z = H.tr;
                d === l
                  ? (Z = Z.addStoredMark(Y))
                  : ((Z = Z.removeMark(d, l, G)),
                    (Z = Z.addMark(d, l, Y)),
                    (Z = Z.setSelection(F.U3.create(Z.doc, l)))),
                  $(Z.scrollIntoView());
              } catch (V) {
                console.error(V);
              } finally {
                requestAnimationFrame(() => n());
              }
            }, [b, h, n, s, d, C.marks.bgcolor, C.marks.color, l, c]);
          y.useLayoutEffect(() => {
            var V, H, $;
            (H = (V = p.current) == null ? void 0 : V.value) != null && H.length
              ? p.current.focus()
              : ($ = p.current) == null || $.focus();
          }, []);
          const R = (0, v.we)(
              h ? "#FormattingToolbar_Color" : "#FormattingToolbar_BgColor",
            ),
            K = D
              ? (0, v.we)("#Button_Save")
              : (0, v.we)(
                  h ? "#FormattingToolbar_Color" : "#FormattingToolbar_BgColor",
                );
          return (0, r.jsxs)(x.s, {
            onClose: n,
            strTitle: R,
            children: [
              (0, r.jsx)(M.s, {
                color: s,
                disableAlpha: !0,
                onChange: (V) => i(T(V)),
              }),
              (0, r.jsx)(I, {
                strOKLabel: K,
                strCancelLabel: (0, v.we)("#Button_Cancel"),
                onOK: () => {
                  s && s.length > 0 && L();
                },
                onClose: n,
              }),
            ],
          });
        });
      },
      12293: (z, W, o) => {
        "use strict";
        o.d(W, { E: () => j });
        var r = o(7850),
          S = o(74827),
          F = o(52893),
          y = o(90626),
          x = o(19316),
          M = o(2801),
          k = o(38348),
          B = o(18210);
        function j(U, I) {
          const [A, v] = y.useState(void 0),
            e = y.useCallback(
              (g) => {
                const _ = g.state.selection;
                let C = "",
                  E = "",
                  { from: D, to: m } = _;
                const h = (0, S.vn)(g.state, U.marks.link, _.$from),
                  f = !!h;
                h
                  ? ((E = h.mark.attrs.href),
                    _.empty
                      ? ((C = h.slice.content.textBetween(
                          0,
                          h.slice.content.size,
                        )),
                        (D = h.from),
                        (m = h.to))
                      : ((D = Math.max(h.from, _.from)),
                        (m = Math.min(h.to, _.to)),
                        (C = h.slice.content.textBetween(
                          D - h.from,
                          m - h.from,
                        ))))
                  : g.state.selection.empty ||
                    ((C = g.state.doc.cut(
                      g.state.selection.from,
                      g.state.selection.to,
                    ).textContent),
                    C.match(/^https?:\/\//) && (E = C));
                let t = {};
                if (I)
                  for (const n in I) {
                    const c = I[n],
                      d = h ? c.fnReadValue(h.mark) : c.defaultValue;
                    t[n] = d;
                  }
                v({
                  view: g,
                  strLinkText: C,
                  strLinkHref: E,
                  bIsUpdate: f,
                  addtlAttrs: I,
                  addtlAttrsValues: t,
                  from: D,
                  to: m,
                });
              },
              [U.marks.link, I],
            ),
            a = A == null ? void 0 : A.view,
            T = y.useCallback(() => {
              window.setTimeout(() => a.focus(), 1), v(void 0);
            }, [a]),
            P =
              A &&
              (0, r.jsx)(M.EN, {
                active: !0,
                children: (0, r.jsx)(u, { schema: U, closeModal: T, ...A }),
              });
          return [e, P];
        }
        const u = y.memo(function (I) {
          const {
              schema: A,
              strLinkText: v,
              strLinkHref: e,
              bIsUpdate: a,
              addtlAttrs: T,
              addtlAttrsValues: P,
              closeModal: g,
              view: _,
              from: C,
              to: E,
            } = I,
            [D, m] = y.useState(v),
            [h, f] = y.useState(e),
            t = y.useRef(null),
            n = y.useRef(null),
            [c, d] = y.useState(P),
            l = () => {
              var p;
              let b = _.state.tr;
              const O = { href: h };
              for (const K in c) O[K] = c[K];
              const L = (p = A.marks.link) == null ? void 0 : p.create(O),
                R = A.text(D || h, [L]);
              try {
                (b = b.replaceRangeWith(C, E, R)),
                  (b = b.setSelection(
                    F.U3.create(b.doc, C + R.nodeSize, C + R.nodeSize),
                  )),
                  _.dispatch(b);
              } catch (K) {
                console.error("Error during link insertion", K);
              }
              g();
            };
          y.useLayoutEffect(() => {
            var p, b, O, L, R;
            (b = (p = t.current) == null ? void 0 : p.value) != null && b.length
              ? (L = (O = n.current) == null ? void 0 : O.value) != null &&
                L.length
                ? (t.current.Focus(), t.current.element.select())
                : n.current.Focus()
              : (R = t.current) == null || R.Focus();
          }, []);
          const s = a
              ? (0, B.we)("#FormattingToolbar_EditLink")
              : (0, B.we)("#FormattingToolbar_InsertLink"),
            i = a
              ? (0, B.we)("#Button_Save")
              : (0, B.we)("#FormattingToolbar_InsertLink");
          return (0, r.jsxs)(k._, {
            onOK: l,
            closeModal: g,
            strTitle: s,
            strOKText: i,
            bOKDisabled: h.length == 0,
            children: [
              (0, r.jsx)(x.pd, {
                ref: t,
                value: D,
                onChange: (p) => m(p.currentTarget.value),
                label: (0, B.we)("#FormattingToolbar_LinkText"),
              }),
              (0, r.jsx)(x.pd, {
                ref: n,
                value: h,
                placeholder: "https://",
                onChange: (p) => f(p.currentTarget.value),
                label: (0, B.we)("#FormattingToolbar_LinkAddress"),
                mustBeURL: !0,
              }),
              T && (0, r.jsx)(w, { addtlAttrs: T, values: c, setValues: d }),
            ],
          });
        });
        function w(U) {
          const { addtlAttrs: I, values: A, setValues: v } = U;
          return (0, r.jsx)(r.Fragment, {
            children: Object.keys(I).map((e) =>
              (0, r.jsx)(
                N,
                {
                  attrName: e,
                  fnRender: I[e].fnRenderEditor,
                  value: A[e],
                  setValues: v,
                },
                e,
              ),
            ),
          });
        }
        const N = y.memo(function (I) {
          const { attrName: A, fnRender: v, value: e, setValues: a } = I,
            T = y.useCallback((P) => a((g) => ({ ...g, [A]: P })), [A, a]);
          return v(e, T);
        });
      },
      83085: (z, W, o) => {
        "use strict";
        o.d(W, { Xv: () => g, pw: () => _ });
        var r = o(7850),
          S = o(71742),
          F = o(74432),
          y = o(19565),
          x = o(52893),
          M = o(29287),
          k = o(90626);
        function B(l, s = "PlaceholderPlugin") {
          const [i, p] = k.useState([]),
            [b] = k.useState(
              () =>
                new x.k_({
                  key: new x.hs(s),
                  state: {
                    init() {
                      return M.zF.empty;
                    },
                    apply(H, $) {
                      $ = $.map(H.mapping, H.doc);
                      const G = H.getMeta(this) || [];
                      for (const J of G)
                        if (J != null && J.add) {
                          const { id: Q, data: Y } = J.add,
                            Z = (q, tt) => {
                              const X = document.createElement(l);
                              return (
                                p((st) => [
                                  ...st,
                                  { id: Q, element: X, data: Y },
                                ]),
                                X
                              );
                            },
                            et = (q) => {
                              p((tt) => tt.filter((X) => X.element != q));
                            },
                            ot = M.NZ.widget(J.add.pos, Z, {
                              id: Q,
                              destroy: et,
                            });
                          $ = $.add(H.doc, [ot]);
                        } else
                          J != null &&
                            J.remove &&
                            ($ = $.remove(
                              $.find(
                                void 0,
                                void 0,
                                (Q) => Q.id == J.remove.id,
                              ),
                            ));
                      return $;
                    },
                  },
                  props: {
                    decorations(H) {
                      return this.getState(H);
                    },
                  },
                }),
            );
          (0, y.c$)(b);
          const O = (0, y.Hd)(),
            L = k.useRef(0),
            R = k.useCallback(
              (H, $, G) => {
                const J = `${s}_${L.current++}`;
                let Q = G || O.state.tr;
                $ === void 0 &&
                  (Q.selection.empty || Q.deleteSelection(),
                  ($ = Q.selection.from));
                const Y = (G == null ? void 0 : G.getMeta(b)) || [];
                return (
                  Q.setMeta(b, [...Y, { add: { id: J, pos: $, data: H } }]),
                  G || O.dispatch(Q),
                  J
                );
              },
              [b, s, O],
            ),
            K = k.useCallback(
              (H) => {
                const $ = b.getState(O.state),
                  G =
                    $ == null
                      ? void 0
                      : $.find(void 0, void 0, (J) => J.id == H);
                return G != null && G.length ? G[0].from : void 0;
              },
              [O, b],
            ),
            V = k.useCallback(
              (H, $) => {
                const G = K(H);
                return G
                  ? ($
                      ? O.dispatch(
                          O.state.tr
                            .replaceWith(G, G, $)
                            .setMeta(b, [{ remove: { id: H } }]),
                        )
                      : O.dispatch(
                          O.state.tr.setMeta(b, [{ remove: { id: H } }]),
                        ),
                    !0)
                  : !1;
              },
              [b, K, O],
            );
          return {
            placeholderElements: i,
            createPlaceholder: R,
            findPlaceholder: K,
            replacePlaceholder: V,
          };
        }
        var j = o(72739),
          u = o(1880),
          w = o(69168),
          N = o(85599),
          U = o(8323),
          I = o(18210),
          A = o(95603),
          v = o(64868),
          e = o(73309),
          a = Object.defineProperty,
          T = (l, s, i) =>
            s in l
              ? a(l, s, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: i,
                })
              : (l[s] = i),
          P = (l, s, i) => T(l, typeof s != "symbol" ? s + "" : s, i);
        function g(l) {
          const {
              children: s,
              ProcessFileUpload: i,
              FetchImageURL: p,
              bAllowImageHotLinking: b = !1,
            } = l,
            [O] = k.useState(() => ({ manager: new m(i, p, b) })),
            { manager: L } = O;
          return (
            L.SetProps(i, p, b),
            (0, r.jsxs)(f.Provider, {
              value: O,
              children: [
                (0, r.jsx)(n, { manager: L }),
                (0, r.jsx)(c, { manager: L, children: s }),
              ],
            })
          );
        }
        const _ = k.memo(function (s) {
          const { nodeType: i } = s,
            p = t(),
            {
              placeholderElements: b,
              createPlaceholder: O,
              replacePlaceholder: L,
            } = B("span", "FileUploadPlaceholder");
          d(p, i);
          const R = (0, y.Hd)();
          return (
            k.useEffect(() => p.RegisterEditor(R, O, L), [p, R, O, L]),
            (0, r.jsx)(r.Fragment, {
              children: b.map(({ id: K, element: V, data: H }) =>
                (0, r.jsx)(D, { element: V, data: H }, K),
              ),
            })
          );
        });
        function C(l, s) {
          const i = t(),
            p = React.useCallback(
              (b) => {
                for (const O of b) i.UploadFile(O);
                l && l();
              },
              [i, l],
            );
          return useBrowseForFilesDialog(p, { multiple: !0, accept: s });
        }
        class E extends Error {
          constructor(s) {
            super(s);
          }
        }
        function D(l) {
          const { element: s, data: i } = l,
            p = "file" in i ? i.file : void 0,
            b = k.useMemo(() => p && URL.createObjectURL(p), [p]),
            O = "url" in i ? i.url : b,
            L = p == null ? void 0 : p.type.startsWith("video/");
          return j.createPortal(
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
                        children: (0, r.jsx)(N.t, {
                          size: "medium",
                          position: "center",
                        }),
                      }),
                      (0, I.we)("#Prosemirror_FileUpload_Uploading"),
                    ],
                  }),
                }),
                !L && (0, r.jsx)("img", { src: O, className: e.PendingImage }),
                L &&
                  (0, r.jsx)("video", {
                    src: O,
                    className: e.PendingImage,
                    muted: !0,
                    loop: !0,
                    playsInline: !0,
                    autoPlay: !0,
                  }),
              ],
            }),
            s,
          );
        }
        class m {
          constructor(s, i, p) {
            P(this, "m_fnProcessFileUpload"),
              P(this, "m_fnFetchImageURL"),
              P(this, "m_bAllowImageHotLinking"),
              P(this, "m_errors", (0, U.Jc)([])),
              P(this, "m_view"),
              P(this, "m_fnCreatePlaceholder"),
              P(this, "m_fnReplacePlaceholder"),
              (this.m_fnProcessFileUpload = s),
              (this.m_fnFetchImageURL = i),
              (this.m_bAllowImageHotLinking = p);
          }
          SetProps(s, i, p) {
            (this.m_fnProcessFileUpload = s),
              (this.m_fnFetchImageURL = i),
              (this.m_bAllowImageHotLinking = p),
              (0, S.wT)(
                !this.m_fnFetchImageURL || !this.m_bAllowImageHotLinking,
                "Not expected to have a URL fetch function and allow hotlinking.  URL fetch function will not be called.",
              );
          }
          RegisterEditor(s, i, p) {
            return (
              (0, S.wT)(!this.m_view, "Duplicate registration"),
              (this.m_view = s),
              (this.m_fnCreatePlaceholder = i),
              (this.m_fnReplacePlaceholder = p),
              () => {
                this.m_view == s &&
                  this.m_fnCreatePlaceholder == i &&
                  this.m_fnReplacePlaceholder == p &&
                  ((this.m_view = void 0),
                  (this.m_fnCreatePlaceholder = void 0),
                  (this.m_fnReplacePlaceholder = void 0));
              }
            );
          }
          AddError(s) {
            this.m_errors.Set([...this.m_errors.Value, s]);
          }
          GetErrors() {
            return this.m_errors;
          }
          ClearErrors() {
            this.m_errors.Set([]);
          }
          GetViewPosition(s, i) {
            var p;
            const b =
              (p = this.m_view) == null
                ? void 0
                : p.posAtCoords({ left: s, top: i });
            return b == null ? void 0 : b.pos;
          }
          async UploadFile(s, i) {
            (!this.m_fnCreatePlaceholder || !this.m_fnReplacePlaceholder) &&
              this.AddError(
                "Upload File: No editor registered to handle file upload",
              );
            const p = this.m_fnCreatePlaceholder({ file: s }, i);
            return this.ProcessFile(s, p);
          }
          BAllowImageHotLinking() {
            return this.m_bAllowImageHotLinking;
          }
          QueueUploadFileByURL(s, i, p) {
            if (
              ((!this.m_fnCreatePlaceholder || !this.m_fnReplacePlaceholder) &&
                this.AddError(
                  "QueueUploadFile: No editor registered to handle file upload",
                ),
              console.log(`QueueUploadFileByURL: ${s} at pos ${i}`),
              s.startsWith("data:"))
            ) {
              const b = this.m_fnCreatePlaceholder({ url: s }, i, p);
              return this.ProcessDataURL(s, b), !0;
            } else if (this.m_fnFetchImageURL) {
              const b = this.m_fnCreatePlaceholder({ url: s }, i, p);
              return this.FetchURLAndProcess(s, b), !0;
            } else
              return (
                (0, S.wT)(
                  this.m_bAllowImageHotLinking,
                  "A URL was posted but we don't have a fnFetchImageURL to process it",
                ),
                !1
              );
          }
          async ProcessDataURL(s, i) {
            const [p, b] = s.split(","),
              O = p.match(/^data:(?<mimetype>[^;]*);(?<encoding>.*)$/);
            if (!O || O.groups.encoding != "base64") {
              this.AddError(`Unable to data URL, unexpected format: ${p}`);
              return;
            }
            const L = O == null ? void 0 : O.groups.mimetype,
              R = h(L);
            if (!R) {
              this.AddError(`Unsupported MIME type for image: ${L}`);
              return;
            }
            const K = atob(b),
              V = new Uint8Array(K.length);
            for (let G = 0; G < K.length; G++) V[G] = K.charCodeAt(G);
            const H = await F.C(V.buffer),
              $ = new File([V], `upload_${H}.${R}`, { type: L });
            await this.ProcessFile($, i);
          }
          async FetchURLAndProcess(s, i) {
            var p;
            try {
              const b = new URL(s),
                O = await this.m_fnFetchImageURL(s),
                L = new File(
                  [O],
                  decodeURIComponent(
                    ((p = b.pathname) == null
                      ? void 0
                      : p.replace(/^.*\//, "")) || "image",
                  ),
                  { type: O.type },
                );
              await this.ProcessFile(L, i);
            } catch {
              this.AddError(`Unable to process URL: ${s}`),
                this.m_fnReplacePlaceholder(i);
            }
          }
          async ProcessFile(s, i) {
            let p;
            try {
              console.log(`Processing file upload: "${s.name}"`),
                (p = await this.m_fnProcessFileUpload(s));
            } catch (b) {
              b instanceof E
                ? this.AddError(b.message)
                : this.AddError(`Error proccessing file upload: ${b}`);
            }
            p
              ? this.m_fnReplacePlaceholder(i, p)
              : this.m_fnReplacePlaceholder(i);
          }
        }
        function h(l) {
          switch (l) {
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
        const f = k.createContext(void 0);
        function t() {
          return k.useContext(f).manager;
        }
        const n = k.memo(function (s) {
          const { manager: i } = s,
            p = (0, v.gc)(i.GetErrors());
          return p.length
            ? (0, r.jsx)(w.E, {
                active: !0,
                children: (0, r.jsx)(u.o0, {
                  bAlertDialog: !0,
                  strTitle: (0, I.we)("#Error_Generic"),
                  strDescription: p.map((b, O) =>
                    (0, r.jsx)("div", { children: b }, O),
                  ),
                  strOKButtonText: (0, I.we)("#Button_OK"),
                  onOK: () => i.ClearErrors(),
                  onCancel: () => i.ClearErrors(),
                }),
              })
            : null;
        });
        function c(l) {
          const { manager: s, children: i } = l,
            p = k.useCallback(
              (L, R) => {
                for (const K of L)
                  s.UploadFile(K, s.GetViewPosition(R.clientX, R.clientY));
              },
              [s],
            ),
            [b, O] = (0, A.hk)(p);
          return k.cloneElement(i, { ...b, ...i.props });
        }
        function d(l, s) {
          (0, y.c$)(
            k.useMemo(
              () =>
                new x.k_({
                  props: {
                    handlePaste(i, p, b) {
                      const O = [];
                      if (
                        (b.content.descendants((L, R) => {
                          if (L.type == s) {
                            const K = L.attrs.src;
                            (K.startsWith("data:") ||
                              !l.BAllowImageHotLinking()) &&
                              O.push({ url: K, pos: R });
                          }
                        }),
                        O.length)
                      ) {
                        let L = i.state.tr;
                        L.selection.empty || L.deleteSelection();
                        let R = L.selection.from,
                          K = 0;
                        for (const V of O) {
                          const H = b.content.cut(K, V.pos - 1);
                          L.insert(R, H),
                            (R += H.size),
                            l.QueueUploadFileByURL(V.url, R, L),
                            (K = V.pos + 1);
                        }
                        return (
                          L.insert(R, b.content.cut(K)),
                          L.scrollIntoView(),
                          i.dispatch(L),
                          !0
                        );
                      }
                      return !1;
                    },
                    handleDOMEvents: {
                      paste(i, p) {
                        var b, O;
                        if (
                          ((O =
                            (b = p.clipboardData) == null ? void 0 : b.files) ==
                          null
                            ? void 0
                            : O.length) > 0
                        ) {
                          p.preventDefault();
                          for (const L of p.clipboardData.files)
                            l.UploadFile(L);
                          return !0;
                        }
                      },
                    },
                  },
                }),
              [s, l],
            ),
          );
        }
      },
      93147: (z, W, o) => {
        "use strict";
        o.d(W, { l: () => _ });
        var r = o(7850),
          S = o(19298),
          F = o(52951),
          y = o(74875),
          x = o(29287),
          M = o(19565),
          k = o(74827),
          B = o(52893),
          j = o(57053),
          u = o(90626),
          w = o(25792),
          N = o(33645),
          U = o.n(N),
          I = o(38539),
          A = o(81973),
          v = o(36707);
        const e = u.memo(function (h) {
          const { schema: f } = h,
            t = !!("table" in f.nodes && f.nodes.table.spec.tableRole);
          return (
            (0, M.c$)(u.useMemo(() => (t ? I.AL({ View: a }) : void 0), [t])),
            (0, M.c$)(u.useMemo(() => (t ? I.LF() : void 0), [t])),
            null
          );
        });
        class a extends I.Qg {
          constructor(h, f) {
            super(h, f), this.SetTableClass(h);
          }
          update(h) {
            return super.update(h) ? (this.SetTableClass(h), !0) : !1;
          }
          SetTableClass(h) {
            this.table.className = (0, v.A)(
              U().Table,
              h.attrs[A.w.NoBorder] && U().NoBorder,
              h.attrs[A.w.EqualCells] && U().EqualCells,
            );
          }
        }
        var T = o(18210),
          P = o(54963),
          g = o(73309);
        const _ = (0, w.Nr)(function (h) {
          const {
              pmState: f,
              className: t,
              refOnUpdate: n,
              refView: c,
              bSpellcheckEnabled: d = !0,
              bSingleLine: l,
              panelProps: s,
              children: i,
            } = h,
            [p, b] = u.useState(),
            [O, L] = u.useState();
          u.useEffect(() => {
            !f || !p || L(new x.Lz(p, { state: f.state }));
          }, [f, p]),
            u.useEffect(() => () => (O == null ? void 0 : O.destroy()), [O]),
            (0, P.D5)(c, O);
          const { refDiv: R, onActivate: K, onGamepadDirection: V } = C(O),
            H = (0, P.Ue)(R, b);
          if (!f) return null;
          const { schemaConfig: $, bbcodeParser: G } = f;
          return (0, r.jsxs)(M.Ot, {
            view: O,
            pmState: f,
            children: [
              (0, r.jsx)(
                S.Z,
                {
                  className: (0, v.A)({
                    ["" + t]: !!t,
                    [g.Container]: !0,
                    [g.SingleLine]: !!l,
                  }),
                  ref: H,
                  spellCheck: d,
                  focusable: !0,
                  onActivate: K,
                  onOKActionDescription: (0, T.we)("#UserGameNotes_Edit"),
                  onGamepadDirection: V,
                  ...s,
                },
                `editordiv_${d}`,
              ),
              (0, r.jsx)(M.KF, {
                refOnUpdate: n,
                schema: $.pm_schema,
                bSingleLine: l,
              }),
              (0, r.jsx)(E, { parser: G, schema: $.pm_schema }),
              (0, r.jsx)(e, { schema: $.pm_schema }),
              i,
            ],
          });
        });
        function C(m) {
          const h = u.useRef(null),
            f = (0, y.FN)(),
            t = u.useCallback(() => {
              var d, l;
              if ((f.ShowVirtualKeyboard(), !m)) return;
              if (!m.hasFocus()) {
                m.focus();
                let i = m.dom.childNodes,
                  p =
                    (l = (d = h.current) == null ? void 0 : d.scrollTop) != null
                      ? l
                      : 0;
                for (let b = 0; b < i.length; ++b) {
                  let O = i[b],
                    L = O.offsetTop;
                  if (L !== void 0 && L >= p) {
                    let R = O.getBoundingClientRect();
                    (0, k.bQ)(m, R.left, R.top);
                    break;
                  }
                }
              }
            }, [f, m]),
            n = u.useCallback((d) => d.currentTarget == d.target, []),
            c = (0, F.ak)(h, void 0, void 0, n);
          return { refDiv: h, onActivate: t, onGamepadDirection: c };
        }
        const E = u.memo(function (h) {
          const { parser: f, schema: t } = h;
          return (
            (0, M.c$)(
              u.useMemo(
                () =>
                  new B.k_({
                    props: {
                      transformPasted: (n, c) => D(f, t.nodes.hard_break, n),
                    },
                  }),
                [f, t],
              ),
            ),
            null
          );
        });
        function D(m, h, f) {
          let t = !1;
          if (
            (f.content.forEach((c) => {
              c.type == h && (t = !0);
            }),
            !t)
          )
            return f;
          const n = m.ConvertLineBreaksToParagraphs(f.content);
          return j.Ji.maxOpen(n);
        }
      },
      73723: (z, W, o) => {
        "use strict";
        o.d(W, {
          Km: () => v,
          WJ: () => P,
          z9: () => C,
          C$: () => g,
          Hz: () => e,
          Nt: () => E,
          MV: () => A,
        });
        var r = o(7850),
          S = o(98724),
          F = o(4188),
          y = o(74827),
          x = o(90626),
          M = o(56718),
          k = o(12293),
          B = o(50660),
          j = o(54963),
          u = o(18210);
        function w(D) {
          const { schema: m, addtlAttrs: h, children: f } = D,
            { callbacks: t, view: n } = (0, B.wU)(),
            [c, d] = x.useState(() => (0, y.Cd)(n.state, m.marks.link)),
            l = x.useCallback((p) => d((0, y.Cd)(p.state, m.marks.link)), [m]);
          (0, j.hL)(t, l);
          const [s, i] = (0, k.E)(m, h);
          return (0, r.jsxs)(r.Fragment, {
            children: [
              i,
              (0, r.jsx)(B.ff, {
                onClick: () => s(n),
                toggled: c,
                tooltip: (0, u.we)("#FormattingToolbar_InsertLink"),
                keyboardShortcut: "Mod-k",
                children: f,
              }),
            ],
          });
        }
        var N = o(98609),
          U = o(15210);
        function I(D) {
          const { schema: m, bColor: h, addtlAttrs: f, children: t } = D,
            { callbacks: n, view: c } = (0, B.wU)(),
            [d, l] = x.useState(() =>
              (0, y.Cd)(c.state, h ? m.marks.color : m.marks.bgcolor),
            ),
            s = x.useCallback(
              (b) => l((0, y.Cd)(b.state, h ? m.marks.color : m.marks.bgcolor)),
              [h, m],
            );
          (0, j.hL)(n, s);
          const [i, p] = (0, U.J)(m, h, f);
          return (0, r.jsxs)(r.Fragment, {
            children: [
              p,
              (0, r.jsx)(B.ff, {
                onClick: () => i(c),
                toggled: d,
                tooltip: h
                  ? (0, u.we)("#FormattingToolbar_Color")
                  : (0, u.we)("#FormattingToolbar_BgColor"),
                children: t,
              }),
            ],
          });
        }
        function A() {
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(B.cQ, {
                tooltip: (0, u.we)("#FormattingToolbar_Undo"),
                keyboardShortcut: "Mod-z",
                command: S.tN,
                children: (0, r.jsx)(M.VnB, {}),
              }),
              (0, r.jsx)(B.cQ, {
                tooltip: (0, u.we)("#FormattingToolbar_Redo"),
                keyboardShortcut:
                  N.TS.PLATFORM == "macos" ? "Mod-Shift-z" : "Mod-y",
                command: S.ZS,
                children: (0, r.jsx)(M.Bal, {}),
              }),
            ],
          });
        }
        function v(D) {
          const { schema: m } = D;
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(B.GY, {
                tooltip: (0, u.we)("#FormattingToolbar_Bold"),
                keyboardShortcut: "Mod-b",
                mark: m.marks.strong,
                children: (0, r.jsx)(M.l4n, {}),
              }),
              (0, r.jsx)(B.GY, {
                tooltip: (0, u.we)("#FormattingToolbar_Italic"),
                keyboardShortcut: "Mod-i",
                mark: m.marks.italic,
                children: (0, r.jsx)(M.UKJ, {}),
              }),
              (0, r.jsx)(B.GY, {
                tooltip: (0, u.we)("#FormattingToolbar_Underline"),
                keyboardShortcut: "Mod-u",
                mark: m.marks.underline,
                children: (0, r.jsx)(M.Gj3, {}),
              }),
              "strike" in m.marks &&
                (0, r.jsx)(B.GY, {
                  tooltip: (0, u.we)("#FormattingToolbar_Strike"),
                  keyboardShortcut: "Mod-Shift-x",
                  mark: m.marks.strike,
                  children: (0, r.jsx)(M.tI4, {}),
                }),
              "code" in m.marks &&
                (0, r.jsx)(B.GY, {
                  tooltip: (0, u.we)("#FormattingToolbar_InlineCode"),
                  keyboardShortcut: "Ctrl-Shift-c",
                  mark: m.marks.code,
                  children: (0, r.jsx)(M.bmT, {}),
                }),
              "color" in m.marks &&
                (0, r.jsx)(I, {
                  schema: m,
                  bColor: !0,
                  children: (0, r.jsx)(M.r7n, {}),
                }),
              "bgcolor" in m.marks &&
                (0, r.jsx)(I, {
                  schema: m,
                  bColor: !1,
                  children: (0, r.jsx)(M.FId, {}),
                }),
            ],
          });
        }
        function e(D) {
          const { schema: m } = D;
          return (0, r.jsx)(B.u3, {
            tooltip: (0, u.we)("#FormattingToolbar_Paragraph"),
            keyboardShortcut: "Ctrl-Shift-0",
            nodeType: m.nodes.paragraph,
            children: (0, r.jsx)(M.iYj, {}),
          });
        }
        function a(D) {
          const { nodeTypes: m, attrs: h, children: f, ...t } = D,
            { callbacks: n, view: c } = useToolbarContext(),
            [d, l] = React.useState(() => IsAnyBlockActive(c.state, m, h)),
            s = React.useCallback(
              (b) => l(IsAnyBlockActive(b.state, m, h)),
              [m, h],
            );
          useCallbackList(n, s);
          const i = React.useMemo(
              () => SetNodeAttributeCommand(m, h != null ? h : {}),
              [m, h],
            ),
            p = !!d;
          return jsx(CommandButton, {
            ...t,
            command: i,
            toggled: p,
            children: f,
          });
        }
        function T(D) {
          const { schema: m } = D;
          let h = m.nodes.paragraph,
            f = m.nodes.heading;
          const t = React.useMemo(() => [h, f], [h, f]);
          return jsxs(Fragment, {
            children: [
              jsx(a, {
                tooltip: Localize("#FormattingToolbar_AlignLeft"),
                keyboardShortcut: "Ctrl-Shift-L",
                nodeTypes: t,
                attrs: { align: "left" },
                children: jsx(GamepadUISVG.TextLeftAlign, {}),
              }),
              jsx(a, {
                tooltip: Localize("#FormattingToolbar_AlignCenter"),
                keyboardShortcut: "Ctrl-Shift-E",
                nodeTypes: t,
                attrs: { align: "center" },
                children: jsx(GamepadUISVG.TextCenterAlign, {}),
              }),
              jsx(a, {
                tooltip: Localize("#FormattingToolbar_AlignRight"),
                keyboardShortcut: "Ctrl-Shift-R",
                nodeTypes: t,
                attrs: { align: "right" },
                children: jsx(GamepadUISVG.TextRightAlign, {}),
              }),
            ],
          });
        }
        function P(D) {
          const { schema: m, maxLevel: h = 1, levels: f } = D,
            t = h + f - 1;
          return (0, r.jsxs)(r.Fragment, {
            children: [
              h <= 1 &&
                (0, r.jsx)(B.u3, {
                  tooltip: (0, u.we)("#FormattingToolbar_HeadingLevel1"),
                  keyboardShortcut: "Ctrl-Shift-1",
                  nodeType: m.nodes.heading,
                  attrs: { level: 1 },
                  children: (0, r.jsx)(M.jRw, {}),
                }),
              h <= 2 &&
                t >= 2 &&
                (0, r.jsx)(B.u3, {
                  tooltip: (0, u.we)("#FormattingToolbar_HeadingLevel2"),
                  keyboardShortcut: "Ctrl-Shift-2",
                  nodeType: m.nodes.heading,
                  attrs: { level: 2 },
                  children: (0, r.jsx)(M.qOW, {}),
                }),
              h <= 3 &&
                t >= 3 &&
                (0, r.jsx)(B.u3, {
                  tooltip: (0, u.we)("#FormattingToolbar_HeadingLevel3"),
                  keyboardShortcut: "Ctrl-Shift-3",
                  nodeType: m.nodes.heading,
                  attrs: { level: 3 },
                  children: (0, r.jsx)(M.x7X, {}),
                }),
              h <= 4 &&
                t >= 4 &&
                (0, r.jsx)(B.u3, {
                  tooltip: (0, u.we)("#FormattingToolbar_HeadingLevel4"),
                  keyboardShortcut: "Ctrl-Shift-4",
                  nodeType: m.nodes.heading,
                  attrs: { level: 4 },
                  children: (0, r.jsx)(M.qzO, {}),
                }),
              h <= 5 &&
                t >= 5 &&
                (0, r.jsx)(B.u3, {
                  tooltip: (0, u.we)("#FormattingToolbar_HeadingLevel5"),
                  keyboardShortcut: "Ctrl-Shift-5",
                  nodeType: m.nodes.heading,
                  attrs: { level: 5 },
                  children: (0, r.jsx)(M.jXA, {}),
                }),
            ],
          });
        }
        function g(D) {
          const { schema: m, showIndentButtonsAsNeeded: h = !1 } = D,
            { callbacks: f, view: t } = (0, B.wU)(),
            { bullet_list: n, ordered_list: c, list_item: d } = m.nodes,
            l = x.useMemo(() => F.T2(d), [d]),
            s = x.useMemo(() => F.$B(d), [d]),
            [i, p] = x.useState(() => l(t.state) || s(t.state));
          return (
            (0, j.hL)(
              f,
              x.useCallback(
                (b) => {
                  p(l(b.state) || s(b.state));
                },
                [l, s],
              ),
            ),
            (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(_, {
                  tooltip: (0, u.we)("#FormattingToolbar_BulletedList"),
                  keyboardShortcut: "Ctrl-Shift-8",
                  list_type: n,
                  list_item: d,
                  children: (0, r.jsx)(M.JPq, {}),
                }),
                c &&
                  (0, r.jsx)(_, {
                    tooltip: (0, u.we)("#FormattingToolbar_OrderedList"),
                    keyboardShortcut: "Ctrl-Shift-7",
                    list_type: c,
                    list_item: d,
                    children: (0, r.jsx)(M.jE0, {}),
                  }),
                (!h || i) &&
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(B.cQ, {
                        tooltip: (0, u.we)("#FormattingToolbar_OutdentList"),
                        keyboardShortcut: "Mod-[",
                        command: l,
                        children: (0, r.jsx)(M.LSz, {}),
                      }),
                      (0, r.jsx)(B.cQ, {
                        tooltip: (0, u.we)("#FormattingToolbar_IndentList"),
                        keyboardShortcut: "Mod-[",
                        command: s,
                        children: (0, r.jsx)(M.ycU, {}),
                      }),
                    ],
                  }),
              ],
            })
          );
        }
        function _(D) {
          const { list_type: m, list_item: h, children: f, ...t } = D,
            { callbacks: n, view: c } = (0, B.wU)(),
            d = x.useCallback((b) => (0, y.wt)(b.state, m) !== void 0, [m]),
            [l, s] = x.useState(() => d(c)),
            i = x.useMemo(() => F.Sd(m), [m]),
            p = x.useMemo(() => F.T2(h), [h]);
          return (
            (0, j.hL)(
              n,
              x.useCallback(
                (b) => {
                  s(d(b));
                },
                [d],
              ),
            ),
            (0, r.jsx)(B.cQ, {
              ...t,
              toggled: l,
              command: l ? p : i,
              children: f,
            })
          );
        }
        function C(D) {
          const { schema: m, addtlAttrs: h } = D;
          return (0, r.jsx)(w, {
            schema: m,
            addtlAttrs: h,
            children: (0, r.jsx)(M.YqK, {}),
          });
        }
        function E(D) {
          const { bSpellcheckEnabled: m, setSpellcheckEnabled: h } = D;
          return (0, r.jsx)(B.ff, {
            tooltip: m
              ? (0, u.we)("#FormattingToolbar_DisableSpellcheck")
              : (0, u.we)("#FormattingToolbar_EnableSpellcheck"),
            toggled: m,
            onClick: () => h(!m),
            children: (0, r.jsx)(M.DEV, {}),
          });
        }
      },
      50660: (z, W, o) => {
        "use strict";
        o.d(W, {
          Ez: () => T,
          GY: () => g,
          XQ: () => e,
          bI: () => A,
          cQ: () => _,
          ff: () => C,
          hK: () => a,
          u3: () => P,
          wU: () => I,
        });
        var r = o(7850),
          S = o(19298),
          F = o(74827),
          y = o(12362),
          x = o(90626),
          M = o(19316),
          k = o(71421),
          B = o(8323),
          j = o(36707),
          u = o(54963),
          w = o(98609),
          N = o(73309),
          U = o.n(N);
        const I = () => x.useContext(v);
        function A(t) {
          const { view: n, refUpdateToolbar: c, children: d } = t,
            l = x.useRef(void 0);
          l.current || (l.current = new B.lu());
          const s = l.current;
          x.useEffect(
            () => (
              (0, u.cZ)(c, () => s.Dispatch(n)), () => (0, u.cZ)(c, void 0)
            ),
            [s, n, c],
          );
          const i = x.useMemo(() => ({ callbacks: s, view: n }), [s, n]);
          return n ? (0, r.jsx)(v.Provider, { value: i, children: d }) : null;
        }
        const v = x.createContext(void 0);
        function e() {
          return (0, r.jsx)("div", { className: N.Gap });
        }
        function a() {
          return (0, r.jsx)("div", { className: N.Spacer });
        }
        function T(t) {
          return (0, r.jsx)("div", {
            className: (0, j.A)(t.className, N.ToolbarRowOverflowContainer),
            children: (0, r.jsx)(S.Z, {
              className: N.ToolbarRow,
              "flow-children": "row",
              children: t.children,
            }),
          });
        }
        function P(t) {
          const { nodeType: n, attrs: c, children: d, ...l } = t,
            { callbacks: s, view: i } = I(),
            [p, b] = x.useState(() => (0, F.gj)(i.state, n, c)),
            O = x.useCallback((R) => b((0, F.gj)(R.state, n, c)), [n, c]);
          (0, u.hL)(s, O);
          const L = x.useMemo(() => y.y_(n, c), [c, n]);
          return (0, r.jsx)(_, { ...l, command: L, toggled: p, children: d });
        }
        function g(t) {
          const { mark: n, children: c, ...d } = t,
            { callbacks: l, view: s } = I(),
            [i, p] = x.useState(() => (0, F.Cd)(s.state, n)),
            b = x.useCallback((L) => p((0, F.Cd)(L.state, n)), [n]);
          (0, u.hL)(l, b);
          const O = x.useMemo(() => y.wh(n), [n]);
          return (0, r.jsx)(_, { ...d, command: O, toggled: i, children: c });
        }
        function _(t) {
          const { command: n, toggled: c, children: d, ...l } = t,
            { view: s, callbacks: i } = I(),
            [p, b] = x.useState(() => n(s.state));
          (0, u.hL)(
            i,
            x.useCallback((L) => b(n(L.state)), [n]),
          ),
            x.useEffect(() => b(n(s.state)), [n, s]);
          const O = !p && !c;
          return (0, r.jsx)(E, {
            ...l,
            children: (0, r.jsx)(M.$n, {
              className: (0, j.A)(N.CommandButton, c && N.Toggled),
              onMouseDown: (L) => {
                L.preventDefault(), n(s.state, s.dispatch, s);
              },
              disabled: O,
              focusable: !O,
              children: d,
            }),
          });
        }
        function C(t) {
          const {
            onClick: n,
            toggled: c,
            disabled: d,
            children: l,
            className: s,
            ...i
          } = t;
          return (0, r.jsx)(E, {
            ...i,
            children: (0, r.jsx)(M.$n, {
              className: (0, j.A)(N.CommandButton, c && N.Toggled, s),
              onMouseDown: (p) => {
                p.button === 0 && (p.preventDefault(), n(p));
              },
              disabled: d === !0,
              children: l,
            }),
          });
        }
        function E(t) {
          const { tooltip: n, keyboardShortcut: c, children: d } = t;
          if (!n) return d;
          const l = c ? (0, r.jsx)(D, { tooltip: n, keyboardShortcut: c }) : n;
          return (0, r.jsx)(k.Gq, {
            toolTipContent: l,
            direction: "bottom",
            children: d,
          });
        }
        function D(t) {
          const { tooltip: n, keyboardShortcut: c } = t;
          return (0, r.jsxs)("div", {
            className: N.TooltipWithShortcut,
            children: [
              (0, r.jsx)("div", { children: n }),
              (0, r.jsx)("div", {
                children: (0, r.jsx)(m, { keyboardShortcut: c }),
              }),
            ],
          });
        }
        function m(t) {
          var n;
          const { keyboardShortcut: c } = t,
            d = c.split("-"),
            l = (n = d.pop()) != null ? n : "";
          return (0, r.jsxs)(r.Fragment, {
            children: [
              d.map((s, i) =>
                (0, r.jsxs)(
                  x.Fragment,
                  {
                    children: [
                      (0, r.jsx)(h, {
                        children: (0, r.jsx)(f, { modifier: s }),
                      }),
                      " + ",
                    ],
                  },
                  i,
                ),
              ),
              (0, r.jsx)(h, { children: l.toUpperCase() }),
            ],
          });
        }
        function h(t) {
          return (0, r.jsx)("span", {
            className: N.KeyCap,
            children: t.children,
          });
        }
        function f(t) {
          const { modifier: n } = t;
          switch (n) {
            case "Mod":
              return w.TS.PLATFORM == "macos" ? "\u2318" : "Ctrl";
            case "Shift":
              return w.TS.PLATFORM == "macos", "Shift";
            case "Ctrl":
              return w.TS.PLATFORM == "macos" ? "Control" : "Ctrl";
            case "Alt":
              return w.TS.PLATFORM == "macos" ? "Option" : "Alt";
          }
          return null;
        }
      },
      27828: (z) => {
        z.exports = {
          EyeDropperCtn: "_5jKe2NV9CM3JA3hcMALLw",
          EyeDropperBtn: "_3afPQT_fEWmhHhFHS-WIk7",
          ColorPickerCtn: "Nn2-w0eqLuugAR-Udm--3",
          ColorPickerDialog: "_32PwNSgquR6tGAPIBcWgVq",
        };
      },
      88376: (z) => {
        z.exports = {
          ModalConfirmDialog: "_1MwR7dU-J2CeRWYt9WfUJw",
          Header: "Y9lJcGdHP6m4TRcgHnzj2",
          Buttons: "_1Wq4E7gdTa-fjWrhWFQG7b",
        };
      },
      73309: (z) => {
        z.exports = {
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
          BackgroundAnimation: "_32I7Uh1ZWySd7VGW50f5IC",
          "ItemFocusAnim-darkerGrey-nocolor": "_3dzJEyM6opBkmIeARAGlYr",
          "ItemFocusAnim-darkerGrey": "_2dbsn-sR5AlFKEgCU0FBbT",
          "ItemFocusAnim-darkGreySettings": "_2gCU5HJBuDk1vxRMJhwFGE",
          "ItemFocusAnim-darkGrey": "_39KmlfhlZwkINJt9fdyKbw",
          "ItemFocusAnim-grey": "_1X5Siupo5N_ZVuGesoYV0t",
          "ItemFocusAnim-translucent-white-10": "_3aZcpOjRI-YzMZmhCRiFjd",
          "ItemFocusAnim-translucent-white-20": "_310j_Q-iB-at4-cmQSi1Mt",
          "ItemFocusAnimBorder-darkGrey": "_38WlDUfHs-IiaRcWKFpWyA",
          "ItemFocusAnim-green": "_3Hq7gKwAuHvmYuBWXBx8mC",
          focusAnimation: "_1k4kLxHBHs5edlnWmN-Cos",
          hoverAnimation: "_3OZh2Bm4JsNC3bNfskysCA",
        };
      },
    },
  ]);
})();
