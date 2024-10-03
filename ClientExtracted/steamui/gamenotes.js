(self.webpackChunksteamui = self.webpackChunksteamui || []).push([
  [1220],
  {
    48139: (e) => {
      e.exports = {
        Hover: "_1lo3nIamSX1TzzE4TlhFXA",
        Link: "_1ds3uh7ntoekPm635F2Ziv",
        LinkHelp: "_3Vn5X8bzPjWx5p545nkB6k",
      };
    },
    10325: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        Page: "_28ykIGBc90adpzjihQeOoC",
        Content: "_3gyO-3quMbybtCQl67Dmf7",
        NotesPagedSettings: "_3Sf_ShCtdfWp5P04k2cIgp",
        NotePage: "t6CDOdcwTIZM8UA8NN41V",
        PinnedView: "_1JfX5TwbiYNVMRiU6Gthga",
        Toolbar: "gdKTXjvFuMeVN2qa6o8EL",
        NoteActions: "_1fu6xumTI1nCY5wc6FG_N2",
        NoteEditorArea: "_1AL7l2CN6z-vuLfp1iCLa",
        EditorInput: "_1Ve4VFO2EEkeNZdel_Asky",
        NewNoteButton: "_3Sjbkvk647UKKVLX6J7gsW",
        CloseWindowButton: "vKXl-xWkUZL5iNvaT5mzW",
      };
    },
    76627: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        Container: "_30v-6zb_axOypIUr5VRHE1",
        ToolbarRow: "LCeIT0gmFTY8fdfaVgk4j",
        Gap: "_19z0fjj7o0n9vAjVjvYZNU",
        Spacer: "_2m1BBIp5Ewr1TI-BkqFGLM",
        CommandButton: "_1dEi5qzSDdPOzoOQXYbNLN",
        Toggled: "_1Iw5xoXQXfmRjgjWTKbm_G",
        FileUploadPlaceholder: "_2P-FBc3tZWGeeBFplDSb9g",
        Throbber: "_12t6JmDCFT6MqtNVrSi5NJ",
        PendingImage: "_2HezQYTfmFfdRmuB8l9QPI",
        FileUploadDragDrop: "_1WRaNQqBKcUp67ntgoyEeQ",
        FileUploadDropFilesMessage: "I2CE9X_I0GBNYbJf7VYBg",
      };
    },
    39889: (e) => {
      e.exports = { GameNotesPopup: "_3hIt9g_59KauEV2uSNK6Ct" };
    },
    11357: (e, t, n) => {
      "use strict";
      n.d(t, { U: () => Le });
      var o = n(63696),
        r = n(45264),
        a = n(38602),
        s = n(94361),
        l = n(28816),
        c = n(35488),
        i = n(45972),
        d = n(21399),
        m = n(85688);
      function u(e, t) {
        return p(t.pm_schema, t.pm_to_bbcode_config, e, []);
      }
      function p(e, t, n, o) {
        let r = n.marks,
          a = "";
        const s = t.mapNodes.get(n.type),
          { tag: l, args: c } = g(s, n.attrs);
        return (
          l && (a += (0, d.CS)(l, c)),
          n.content.forEach((n) => {
            ([a, r] = h(t, r, n.marks, a)),
              ([a, r] = (function (e, t, n, o) {
                let r;
                for (const a of n)
                  if (-1 === t.indexOf(a)) {
                    r || (r = t.slice());
                    const n = e.mapMarks.get(a.type);
                    if (((0, m.w)(n, "mark missing bbtag"), n)) {
                      r.push(a);
                      const { args: e, tag: t } = g(n, a.attrs);
                      o += (0, d.CS)(t, e || {});
                    }
                  }
                return [o, r ?? t];
              })(t, r, n.marks, a)),
              n.type.isText
                ? (a += (0, d.vE)(n.text || ""))
                : n.type == e.nodes.hard_break
                  ? (a += "\n")
                  : (a += p(e, t, n, r));
          }),
          ([a] = h(t, r, o, a)),
          l && (a += (0, d.op)(l)),
          a
        );
      }
      function h(e, t, n, o) {
        const r = [];
        for (const e of t) -1 === n.indexOf(e) && r.push(e);
        if (!r.length) return [o, t];
        const a = t.slice();
        for (
          ;
          r.length && ((0, m.w)(a.length, "no marks left to close"), a.length);
        ) {
          const t = a.pop(),
            n = e.mapMarks.get(t.type),
            { tag: s } = g(n, t.attrs);
          o += (0, d.op)(s);
          const l = r.indexOf(t);
          -1 != l && r.splice(l, 1);
        }
        return [o, a];
      }
      function g(e, t) {
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
      var f = n(17372),
        b = n(81429),
        E = n(67599),
        _ = n(46108),
        k = n(87300),
        T = n(62738),
        C = n(37195),
        v = n(16486),
        B = n(18305);
      function N(e, t) {
        const { from: n, $from: o, to: r, empty: a } = e.selection;
        return a
          ? !!t.isInSet(e.storedMarks || o.marks())
          : e.doc.rangeHasMark(n, r, t);
      }
      function w(e, t, n) {
        let { $from: o, to: r, node: a } = e.selection;
        return !a && r <= o.end() && (a = o.parent), !!a && a.hasMarkup(t, n);
      }
      function y(e, t, n = {}) {
        return new v.fV(e, (e, o, r, a) => {
          const s = n instanceof Function ? n(o) : n,
            l = e.tr;
          if (o[1]) {
            const e = r + o[0].indexOf(o[1]),
              t = e + o[1].length;
            t < a && l.delete(t, a),
              e > r && l.delete(r, e),
              (a = r + o[1].length);
          }
          return l.addMark(r, a, t.create(s)), l.removeStoredMark(t), l;
        });
      }
      function A(e, t, n) {
        const o = { left: t, top: n },
          r = e.posAtCoords(o);
        if (r?.pos) {
          const t = e.state.doc.resolve(r.pos);
          e.dispatch(e.state.tr.setSelection(E.U3.near(t)));
        }
      }
      n(74763);
      const M = o.createContext(null);
      function D(e) {
        return o.createElement(M.Provider, { value: e.view }, e.children);
      }
      function S(e) {
        const { schema: t, onUpdate: n } = e,
          r = o.useRef(n);
        return (
          (r.current = n),
          P(
            o.useMemo(
              () =>
                new E.k_({
                  view: (e) => ({ update: (...e) => r.current(...e) }),
                }),
              [],
            ),
          ),
          P(
            o.useMemo(
              () =>
                (function (e) {
                  const t = (0, k.st)(
                    k.I$,
                    (t, n) => (
                      n &&
                        n(
                          t.tr
                            .replaceSelectionWith(
                              e.nodes.hard_break.createChecked(),
                            )
                            .scrollIntoView(),
                        ),
                      !0
                    ),
                  );
                  return (0, T.w)({
                    "Mod-z": C.tN,
                    "Mod-y": C.ZS,
                    Backspace: v.dv,
                    "Mod-Enter": t,
                    "Shift-Enter": t,
                    "Mod-b": (0, k.wh)(e.marks.strong),
                    "Mod-i": (0, k.wh)(e.marks.italic),
                    Enter: (0, B.wn)(e.nodes.list_item),
                    "Mod-[": (0, B.T2)(e.nodes.list_item),
                    "Mod-]": (0, B.$B)(e.nodes.list_item),
                    "Shift-Ctrl-1": (0, k.y_)(e.nodes.heading, { level: 1 }),
                    "Shift-Ctrl-2": (0, k.y_)(e.nodes.heading, { level: 2 }),
                    "Shift-Ctrl-3": (0, k.y_)(e.nodes.heading, { level: 3 }),
                    "Shift-Ctrl-0": (0, k.y_)(e.nodes.paragraph),
                  });
                })(t),
              [t],
            ),
          ),
          P(o.useMemo(() => (0, T.w)(k.RV), [])),
          P(
            o.useMemo(
              () =>
                (function (e) {
                  return (0, v.sM)({
                    rules: [
                      (0, v.tG)(
                        /^(\d+)\.\s$/,
                        e.nodes.ordered_list,
                        (e) => ({ order: parseInt(e[1]) }),
                        (e, t) =>
                          t.childCount + t.attrs.order == parseInt(e[1]),
                      ),
                      (0, v.tG)(/^\s*([-+*])\s$/, e.nodes.bullet_list),
                      y(/\*([^*]+)\*/, e.marks.strong),
                      y(/_([^_]+)_/, e.marks.italic),
                      y(/~([^~]+)~/, e.marks.strike),
                      y(/`([^`]+)`/, e.marks.code),
                      (0, v.JJ)(/^```$/, e.nodes.code_block),
                      (0, v.JJ)(/^(#{1,5})\s$/, e.nodes.heading, (e) => ({
                        level: e[1].length,
                      })),
                    ],
                  });
                })(t),
              [t],
            ),
          ),
          null
        );
      }
      function P(e) {
        const t = o.useContext(M);
        o.useEffect(() => {
          if (t && e && !t.isDestroyed)
            return (
              (function (e, t) {
                const n = e.state;
                if (!e.state.plugins.includes(t)) {
                  const o = [...e.state.plugins, t];
                  e.updateState(n.reconfigure({ plugins: o }));
                }
              })(t, e),
              () =>
                (function (e, t) {
                  if (!e.isDestroyed) {
                    const n = e.state,
                      o = n.plugins.filter((e) => e !== t);
                    e.updateState(n.reconfigure({ plugins: o }));
                  }
                })(t, e)
            );
        }, [t, e]);
      }
      var x = n(48139);
      function O(e) {
        const { linkMarkType: t, schema: n, onClickURL: r = L } = e,
          a = o.useRef(r);
        a.current = r;
        const [s, l] = o.useState(),
          [c, i] = o.useState(),
          [d, m] = o.useState(),
          u = o.useMemo(
            () =>
              new E.k_({
                props: {
                  handleClickOn(e, n, o, r, s, l) {
                    if (l && (s.ctrlKey || 1 == s.button)) {
                      const e = o
                        .resolve(n - r)
                        .marks()
                        .find((e) => e.type == t);
                      if (e)
                        return (
                          a.current(e.attrs.href, s.view),
                          s.preventDefault(),
                          !0
                        );
                    }
                    return !1;
                  },
                  clipboardTextParser(e, o, r, a) {
                    let s,
                      l = [];
                    for (; (s = e.match(f.O)); )
                      s.index > 0 && l.push(n.text(e.substring(0, s.index))),
                        l.push(
                          n.text(s[0], [t.create({ href: (0, f.S)(s[0]) })]),
                        ),
                        (e = e.substring(s.index + s[0].length));
                    return (
                      e.length && l.push(n.text(e)),
                      new b.Ji(b.FK.from(l), o.start(), o.end())
                    );
                  },
                  handleDOMEvents: {
                    mouseover: (e, t) => {
                      const n = t.target;
                      if (
                        n &&
                        "getBoundingClientRect" in n &&
                        "A" == n.nodeName
                      ) {
                        const e = n.getBoundingClientRect();
                        l(e.left + e.width / 2), i(e.bottom + 2), m(n);
                      } else m(void 0);
                      return !1;
                    },
                    mouseleave: (e, t) => (m(void 0), !1),
                  },
                },
              }),
            [t, n],
          );
        if ((P(u), !d || !c || !s)) return null;
        const p = d.getAttribute("href");
        return o.createElement(
          F,
          { top: c, left: s },
          o.createElement("div", { className: x.Link }, p),
          o.createElement(
            "div",
            { className: x.LinkHelp },
            (0, _.we)("#UserGameNotes_ClickToOpenLink"),
          ),
        );
      }
      function F(e) {
        const { top: t, left: n, children: r } = e,
          [a, s] = o.useState(0),
          l = o.useRef(null);
        o.useLayoutEffect(() => {
          s(l.current.getBoundingClientRect().width);
        }, [t, n, r]);
        const c = { top: `${t}px`, left: `${Math.max(n - a / 2, 12)}px` };
        return o.createElement(
          "div",
          { className: x.Hover, style: c, ref: l },
          r,
        );
      }
      function L(e, t) {
        t.open(e);
      }
      class I {
        m_nodes = [];
        m_schema;
        constructor(e) {
          this.m_schema = e;
        }
        AppendText(e, t) {
          let n = 0;
          for (let t = e.indexOf("\n", n); -1 !== t; t = e.indexOf("\n", n))
            n != t && this.m_nodes.push(this.m_schema.text(e.substring(n, t))),
              this.m_nodes.push(this.m_schema.nodes.hard_break.createChecked()),
              (n = t + 1);
          n < e.length && this.m_nodes.push(this.m_schema.text(e.substring(n)));
        }
        AppendNode(e) {
          this.m_nodes.push(e);
        }
        GetElements() {
          return this.m_nodes;
        }
      }
      function U(e) {
        return e
          .filter((e) => e.isText)
          .map((e) => e.text)
          .join();
      }
      class G extends d.Al {
        m_schemaConfig;
        m_mapPMBBNodes = new Map();
        constructor(e) {
          super(e.bbcode_dictionary, () => new I(e.pm_schema)),
            (this.m_schemaConfig = e),
            this.m_schemaConfig.bbcode_dictionary.forEach((e) => {
              "node" in e.Constructor &&
                this.m_mapPMBBNodes.set(e.Constructor.node.name, e.Constructor);
            });
        }
        get schema() {
          return this.m_schemaConfig.pm_schema;
        }
        ParseBBCode(e) {
          const t = this.Parse(e, this.BBNodeToPMNode.bind(this), !0);
          return this.m_schemaConfig.pm_schema.topNodeType.createChecked(
            {},
            this.ConvertLineBreaksToParagraphs(b.FK.fromArray(t)),
          );
        }
        TryCreateNode(e, t, n) {
          let o = b.FK.from(t);
          if (!e.node.validContent(o) && e.acceptNode) {
            let n = t.filter((t) => t.type == e.acceptNode);
            if (!n.length) {
              let o = t;
              e.acceptNode.isBlock &&
                o.length > 1 &&
                o[o.length - 1].type == this.schema.nodes.hard_break &&
                (o = o.slice(0, -1));
              const r = this.m_mapPMBBNodes.get(e.acceptNode.name);
              (0, m.w)(
                r,
                `Indicated acceptNode type ${e.acceptNode.name} for ${e.node.name} missing`,
              ),
                (n = r
                  ? [this.TryCreateNode(r, o, void 0)]
                  : [e.acceptNode.create(void 0, o)]);
            }
            o = b.FK.from(n);
          }
          return e.node.createAndFill(n, o) || e.node.create(n, o);
        }
        BBNodeToPMNode(e, t, ...n) {
          let o = e.BBArgsToAttrs ? e.BBArgsToAttrs(t.args || {}) : void 0;
          try {
            return (
              "convertContentToAttr" in e &&
                e.convertContentToAttr &&
                ((o && o[e.convertContentToAttr]) ||
                  (o = { ...(o || {}), [e.convertContentToAttr]: U(n) }),
                "node" in e && (n = [])),
              "node" in e
                ? this.TryCreateNode(e, n, o)
                : n.map((t) => t.mark([...t.marks, e.mark.create(o)]))
            );
          } catch (e) {
            return (
              console.error(`Error parsing [${t.tagname}] tag: ${e}`, e), []
            );
          }
        }
        ConvertLineBreaksToParagraphs(e) {
          const t = new Map(),
            n = this.m_schemaConfig.pm_schema;
          this.m_mapPMBBNodes.forEach((e) => {
            e.acceptNode && t.set(e.acceptNode.name, e.node);
          });
          const o = [],
            r = {
              nodes: [],
              nodeType: void 0,
              reset() {
                (this.nodes = []), (this.nodeType = void 0);
              },
              accumulate(e, t) {
                return (
                  this.nodeType && e != this.nodeType && this.emit(),
                  (this.nodeType = e),
                  this.nodes.push(t),
                  !0
                );
              },
              emit(e = !1) {
                const t = this.nodeType || (e ? n.nodes.paragraph : void 0);
                t && (o.push(t.createChecked({}, this.nodes)), this.reset());
              },
            };
          return (
            e.forEach((e) => {
              const a = e.type == n.nodes.hard_break,
                s = b.FK.from(e);
              if (a || n.topNodeType.validContent(s)) {
                const t = a && r.nodes.length > 0;
                r.emit(),
                  a
                    ? t || o.push(n.nodes.paragraph.createChecked())
                    : o.push(e);
              } else {
                let o;
                (o = n.nodes.paragraph.validContent(s)
                  ? n.nodes.paragraph
                  : t.get(e.type.name)),
                  o
                    ? r.accumulate(o, e)
                    : ((0, m.w)(
                        !1,
                        `Couldn't accept ${e.type.name} at root of document, converting to paragraph`,
                      ),
                      (o = n.nodes.paragraph),
                      r.accumulate(
                        n.nodes.paragraph,
                        n.text(
                          (function (e) {
                            let t = "";
                            return (
                              e.descendants((e) => {
                                e.isText && (t += e.text);
                              }),
                              t
                            );
                          })(e),
                        ),
                      ));
              }
            }),
            (!r.nodes.length && o.length) || r.emit(!0),
            b.FK.from(o)
          );
        }
      }
      var R = n(91633);
      var $ = n(36142),
        K = n(28091),
        V = n(59727),
        W = n(90765),
        q = n(52451),
        H = n(72476),
        j = n(76627);
      function z(e) {
        const {
            schemaConfig: t,
            bbcode: n,
            className: r,
            onUpdate: a,
            refView: s,
            bSpellcheckEnabled: l = !0,
            panelProps: c,
            children: i,
            dataKey: d,
          } = e,
          [m, u] = o.useState(),
          p = o.useRef(),
          h = o.useMemo(() => new G(t), [t]),
          g = o.useRef(h);
        g.current = h;
        const f = o.useCallback(
          (e) => {
            if (!e) return void p.current?.destroy();
            const n = p.current;
            n && n.destroy();
            const o = t.pm_schema;
            (p.current = new R.Lz(e, {
              state: n?.state ?? E.$t.create({ schema: o }),
              transformPasted: (e, t) =>
                (function (e, t, n) {
                  let o = !1;
                  if (
                    (n.content.forEach((e) => {
                      e.type == t && (o = !0);
                    }),
                    !o)
                  )
                    return n;
                  const r = e.current.ConvertLineBreaksToParagraphs(n.content);
                  return b.Ji.maxOpen(r);
                })(g, o.nodes.hard_break, e),
            })),
              u(p.current);
          },
          [t],
        );
        o.useEffect(() => {
          m &&
            m.updateState(
              (function (e, t, n) {
                const o = (0, C.b6)(),
                  r = o.spec.key?.get(n),
                  a = [...n.plugins.filter((e) => e != r), o];
                return E.$t.create({ schema: t, doc: e, plugins: a });
              })(g.current.ParseBBCode(n), t.pm_schema, m.state),
            );
        }, [t, n, m, d]),
          (0, q.D5)(s, m);
        const {
            refDiv: k,
            onActivate: T,
            onGamepadDirection: v,
          } = (function (e) {
            const t = (0, H.rP)(),
              n = o.useRef(),
              r = o.useCallback(
                (e) => {
                  (0, V.iv)(e, t.IN_VR);
                },
                [t.IN_VR],
              ),
              a = (0, V.FN)(
                { onTextEntered: r },
                () => n.current?.ownerDocument.defaultView,
              ),
              s = o.useCallback(() => {
                a.ShowVirtualKeyboard();
                let t = e.current?.hasFocus();
                if (!t) {
                  e.current?.focus();
                  let t = e.current.dom.childNodes;
                  for (let o = 0; o < t.length; ++o) {
                    let r = t[o],
                      a = r.offsetTop;
                    if (void 0 !== a && a >= n.current.scrollTop) {
                      let t = r.getBoundingClientRect();
                      A(e.current, t.left, t.top);
                      break;
                    }
                  }
                }
              }, [a, e]),
              l = o.useCallback((e) => e.currentTarget == e.target, []),
              c = (0, K.ak)(n, null, null, l);
            return { refDiv: n, onActivate: s, onGamepadDirection: c };
          })(p),
          B = (0, q.Ue)(k, f);
        return o.createElement(
          D,
          { view: m },
          o.createElement($.Z, {
            key: `editordiv_${l}`,
            className: (0, W.A)(r, j.Container),
            ref: B,
            spellCheck: l,
            focusable: !0,
            onActivate: T,
            onOKActionDescription: (0, _.we)("#UserGameNotes_Edit"),
            onGamepadDirection: v,
            ...c,
          }),
          o.createElement(S, { onUpdate: a, schema: t.pm_schema }),
          i,
        );
      }
      var J = n(98995),
        X = n(10325),
        Z = n(49787),
        Q = n.n(Z);
      function Y(e, t, n = 0) {
        return () => [e, { class: t }, n];
      }
      const ee = {
          paragraph: {
            content: "inline*",
            group: "block",
            parseDOM: [{ tag: "p" }],
            toDOM: Y("p", (0, W.A)("pm_paragraph", Q().Paragraph)),
            bbCode: { tag: "p", autocloses: !0 },
          },
          heading: {
            attrs: { level: { default: 1 } },
            content: "inline*",
            group: "block",
            defining: !0,
            parseDOM: [1, 2, 3, 4, 5].map((e) => ({
              tag: `h${e}`,
              attrs: { level: e },
            })),
            toDOM: (e) => [
              "h" + e.attrs.level,
              {
                class:
                  `BB_Header${e.attrs.level} ` + Q()[`Header${e.attrs.level}`],
              },
              0,
            ],
            bbCode: [1, 2, 3, 4, 5].map((e) => ({
              tag: `h${e}`,
              BBArgsToAttrs: () => ({ level: e }),
              AttrsToBBArgs: (e) => ({ tag: `h${e.level}` }),
            })),
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
              return ["img", { src: t, alt: n, title: o, class: Q().Image }];
            },
            bbCode: {
              tag: "img",
              BBArgsToAttrs: (e) => ({ src: e.src }),
              AttrsToBBArgs: (e) => ({ args: { src: e.src } }),
              convertContentToAttr: "src",
            },
          },
          bullet_list: {
            ...B.fF,
            content: "list_item+",
            group: "block",
            toDOM: Y("ul", Q().List),
            bbCode: { tag: "list" },
          },
          ordered_list: {
            ...B.o8,
            content: "list_item+",
            group: "block",
            toDOM: Y("ol", Q().OrderedList),
            bbCode: { tag: "olist" },
          },
          list_item: {
            ...B.Aw,
            content: "paragraph block*",
            toDOM: Y("li", Q().ListItem),
            bbCode: { tag: "*", autocloses: !0 },
          },
          code_block: {
            content: "inline*",
            marks: "",
            group: "block",
            code: !0,
            defining: !0,
            parseDOM: [{ tag: "pre", preserveWhitespace: "full" }],
            toDOM: () => [
              "pre",
              { class: Q().CodeBlock },
              ["code", { class: Q().Code }, 0],
            ],
            bbCode: { tag: "code" },
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
            toDOM: Y("b", (0, W.A)("BB_Bold", Q().Bold)),
            bbCode: { tag: "b" },
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
            toDOM: Y("i", (0, W.A)("BB_Italic", Q().Italic)),
            bbCode: { tag: "i" },
          },
          underline: {
            parseDOM: [{ tag: "u" }, { style: "text-decoration=underline" }],
            toDOM: Y("u", (0, W.A)("BB_Underline", Q().Underline)),
            bbCode: { tag: "u" },
          },
          strike: {
            parseDOM: [{ style: "text-decoration=line-through" }],
            toDOM: Y("span", (0, W.A)("BB_Strike", Q().Strike)),
            bbCode: { tag: "strike" },
          },
          code: {
            parseDOM: [{ tag: "code" }],
            toDOM: Y("code", (0, W.A)("BB_Code", Q().Code)),
            bbCode: { tag: "c" },
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
              const { href: t, title: n } = e.attrs;
              return ["a", { href: t, title: n, class: "BB_Link" }, 0];
            },
            bbCode: {
              tag: "url",
              BBArgsToAttrs: (e) => ({ href: e[""] }),
              AttrsToBBArgs: (e) => ({ args: { "": e.href } }),
              convertContentToAttr: "href",
            },
          },
        };
      const ne = { nodes: { ...ee }, marks: { ...te } },
        oe = new (class {
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
          constructor(e) {
            const t = {
                doc: { content: "block+" },
                text: { group: "inline" },
                hard_break: {
                  inline: !0,
                  group: "inline",
                  selectable: !1,
                  linebreakReplacement: !0,
                  parseDOM: [{ tag: "br" }],
                  toDOM: () => ["br"],
                },
              },
              n = new Map(),
              o = new Map();
            for (const o in e.nodes) {
              const { bbCode: r, ...a } = e.nodes[o];
              (t[o] = a), n.set(o, r);
            }
            const r = {};
            for (const t in e.marks) {
              const { bbCode: n, ...a } = e.marks[t];
              (r[t] = a), o.set(t, n);
            }
            (this.m_ProseMirrorSchema = new b.Sj({ nodes: t, marks: r })),
              n.forEach((t, n) => {
                const o = this.m_ProseMirrorSchema.nodes[n],
                  r = e.nodes[n],
                  a = Array.isArray(t) ? t : [t];
                let s;
                "list_item+" == r.content
                  ? (s = this.m_ProseMirrorSchema.nodes.list_item)
                  : -1 != r.content?.indexOf("paragraph") &&
                    (s = this.m_ProseMirrorSchema.nodes.paragraph),
                  a.forEach(
                    ({
                      tag: e,
                      BBArgsToAttrs: t,
                      AttrsToBBArgs: n,
                      convertContentToAttr: r,
                      ...a
                    }) => {
                      this.m_mapBBCodeDictionary.set(e, {
                        Constructor: {
                          node: o,
                          BBArgsToAttrs: t,
                          convertContentToAttr: r,
                          acceptNode: s,
                        },
                        skipFollowingNewline: !0,
                        ...a,
                      });
                    },
                  );
                const { tag: l, AttrsToBBArgs: c } = a[0];
                this.m_PMToBBCodeConfig.mapNodes.set(o, {
                  tag: l,
                  AttrsToBBArgs: c,
                });
              }),
              o.forEach((e, t) => {
                const n = this.m_ProseMirrorSchema.marks[t],
                  {
                    tag: o,
                    BBArgsToAttrs: r,
                    AttrsToBBArgs: a,
                    convertContentToAttr: s,
                    ...l
                  } = e;
                this.m_mapBBCodeDictionary.set(o, {
                  Constructor: {
                    mark: n,
                    BBArgsToAttrs: r,
                    convertContentToAttr: s,
                  },
                  ...l,
                }),
                  this.m_PMToBBCodeConfig.mapMarks.set(n, {
                    tag: o,
                    AttrsToBBArgs: a,
                  });
              });
          }
        })(ne);
      var re = n(90601);
      const ae = "/images/image_error.svg";
      function se(e) {
        const { uploadImage: t, nodeType: n, nMaxImageSize: r = ce } = e;
        return (
          P(
            o.useMemo(
              () =>
                new E.k_({
                  key: new E.hs(`PMUploadImage_${n.name}`),
                  props: {
                    transformPasted: (...e) =>
                      (function (e, t, n, o) {
                        let r = !1;
                        if (
                          (n.content.descendants((n, o) => {
                            n.type == e && n.attrs.src.length > t && (r = !0);
                          }),
                          r)
                        ) {
                          let t = [
                            e.create({
                              src: ae,
                              title: (0, _.we)("#UserGameNotes_ImageTooLarge"),
                            }),
                          ];
                          return new b.Ji(b.FK.from(t), 0, 0);
                        }
                        return n;
                      })(n, r, ...e),
                    handlePaste: (e, o, r) => {
                      const a = [];
                      r.content.descendants((e) => {
                        e.type == n &&
                          e.attrs.src.startsWith("data:image") &&
                          a.push(e.attrs.src);
                      }),
                        a.length > 0 &&
                          setTimeout(() => {
                            !(async function (e, t, n) {
                              for (const o of e) {
                                const e = await fetch(o),
                                  r = await e.blob(),
                                  a = (0, re.wI)(await r.arrayBuffer());
                                le(
                                  o,
                                  await n(e.headers.get("Content-Type"), a),
                                  t,
                                );
                              }
                            })(a, e, t);
                          }, 100);
                    },
                  },
                }),
              [t, r, n],
            ),
          ),
          null
        );
      }
      function le(e, t, n) {
        n.state.doc.descendants((o, r) => {
          if ("image" === o.type.name && o.attrs.src === e) {
            const e = n.state.tr.setNodeAttribute(r, "src", t);
            n.dispatch(e);
          }
        });
      }
      const ce = 1048576;
      var ie = n(71594),
        de = n(79926);
      const me = () => o.useContext(pe);
      function ue(e) {
        const { view: t, refUpdateToolbar: n, children: r } = e,
          a = o.useRef();
        a.current || (a.current = new de.lu()),
          o.useEffect(
            () => (
              (0, q.cZ)(n, () => a.current.Dispatch(t)),
              () => (0, q.cZ)(n, void 0)
            ),
            [t, n],
          );
        const s = o.useMemo(() => ({ callbacks: a.current, view: t }), [t]);
        return t ? o.createElement(pe.Provider, { value: s }, r) : null;
      }
      const pe = o.createContext(void 0);
      function he() {
        return o.createElement("div", { className: j.Gap });
      }
      function ge() {
        return o.createElement("div", { className: j.Spacer });
      }
      function fe(e) {
        return o.createElement(
          $.Z,
          {
            className: (0, W.A)(e.className, j.ToolbarRow),
            "flow-children": "row",
          },
          e.children,
        );
      }
      function be(e) {
        const { nodeType: t, tooltip: n, attrs: r, children: a } = e,
          { callbacks: s, view: l } = me(),
          [c, i] = o.useState(() => w(l.state, t, r)),
          d = o.useCallback((e) => i(w(e.state, t, r)), [t, r]);
        (0, q.hL)(s, d);
        const m = o.useMemo(() => k.y_(t, r), [r, t]);
        return o.createElement(ke, {
          command: m,
          tooltip: n,
          toggled: c,
          children: a,
        });
      }
      function Ee(e) {
        const { mark: t, tooltip: n, children: r } = e,
          { callbacks: a, view: s } = me(),
          [l, c] = o.useState(() => N(s.state, t)),
          i = o.useCallback((e) => c(N(e.state, t)), [t]);
        (0, q.hL)(a, i);
        const d = o.useMemo(() => k.wh(t), [t]);
        return o.createElement(ke, {
          command: d,
          tooltip: n,
          toggled: l,
          children: r,
        });
      }
      function _e(e) {
        const { fnEnabledCheck: t, ...n } = e,
          { callbacks: r, view: a } = me(),
          [s, l] = o.useState(() => t(a)),
          c = o.useCallback((e) => l(t(e)), [t]);
        return (0, q.hL)(r, c), o.createElement(ke, { ...n, disabled: !s });
      }
      function ke(e) {
        const {
            command: t,
            toggled: n,
            tooltip: r,
            disabled: a,
            children: s,
          } = e,
          { view: c } = me();
        return o.createElement(
          J.Gq,
          { toolTipContent: r, bDisabled: !r, direction: "bottom" },
          o.createElement(
            l.$n,
            {
              className: (0, W.A)(j.CommandButton, n && j.Toggled),
              onMouseDown: (e) => {
                e.preventDefault(), t(c.state, c.dispatch, c);
              },
              disabled: !0 === a,
              focusable: !a,
            },
            s,
          ),
        );
      }
      function Te(e) {
        const {
          onClick: t,
          toggled: n,
          tooltip: r,
          disabled: a,
          children: s,
        } = e;
        return o.createElement(
          J.Gq,
          { toolTipContent: r, bDisabled: !r, direction: "bottom" },
          o.createElement(
            l.$n,
            {
              className: (0, W.A)(j.CommandButton, n && j.Toggled),
              onMouseDown: (e) => {
                e.preventDefault(), t();
              },
              disabled: !0 === a,
            },
            s,
          ),
        );
      }
      function Ce(e) {
        const { schema: t, children: n } = e,
          { callbacks: r, view: a } = me(),
          [s, c] = o.useState(() => N(a.state, t.marks.link)),
          d = o.useCallback((e) => c(N(e.state, t.marks.link)), [t]);
        (0, q.hL)(r, d);
        const [m, u, p] = (0, q.uD)();
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            i.EN,
            { active: m },
            o.createElement(ve, {
              schema: t,
              active: m,
              closeModal: p,
              view: a,
            }),
          ),
          o.createElement(
            J.Gq,
            {
              toolTipContent: "#FormattingToolbar_InsertLink",
              direction: "bottom",
            },
            o.createElement(
              l.$n,
              {
                className: (0, W.A)(j.CommandButton, s && j.Toggled),
                onMouseDown: (e) => {
                  e.preventDefault(), u();
                },
                title: (0, _.we)("#FormattingToolbar_InsertLink"),
              },
              n,
            ),
          ),
        );
      }
      const ve = o.memo(function (e) {
        const { schema: t, active: n, closeModal: r, view: a } = e,
          [s, c] = o.useState(""),
          [d, m] = o.useState(""),
          u = o.useRef(),
          p = o.useRef();
        return (
          o.useLayoutEffect(() => {
            if (n) {
              let e = "";
              a.state.selection.empty ||
                (e = a.state.doc.cut(
                  a.state.selection.from,
                  a.state.selection.to,
                ).textContent),
                c(e),
                e.startsWith("http")
                  ? (m(e),
                    u.current.Focus(),
                    window.setTimeout(() => {
                      u.current.element.select();
                    }, 0))
                  : 0 == e.length
                    ? u.current.Focus()
                    : p.current.Focus();
            }
          }, [n, a]),
          o.createElement(
            i.o0,
            {
              onOK: () => {
                a.dispatch(
                  a.state.tr.replaceRangeWith(
                    a.state.selection.from,
                    a.state.selection.to,
                    t.text(s || d, [t.marks.link.create({ href: d })]),
                  ),
                ),
                  a.focus(),
                  r();
              },
              closeModal: r,
              strTitle: (0, _.we)("#FormattingToolbar_InsertLink"),
              strOKButtonText: (0, _.we)("#FormattingToolbar_InsertLink"),
              bOKDisabled: 0 == d.length,
            },
            o.createElement(l.pd, {
              ref: u,
              value: s,
              onChange: (e) => c(e.currentTarget.value),
              label: (0, _.we)("#FormattingToolbar_LinkText"),
            }),
            o.createElement(l.pd, {
              ref: p,
              value: d,
              onChange: (e) => m(e.currentTarget.value),
              label: (0, _.we)("#FormattingToolbar_LinkAddress"),
            }),
          )
        );
      });
      function Be() {
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            _e,
            {
              tooltip: "#FormattingToolbar_Undo",
              command: C.tN,
              fnEnabledCheck: Ne,
            },
            o.createElement(c.Undo, null),
          ),
          o.createElement(
            _e,
            {
              tooltip: "#FormattingToolbar_Redo",
              command: C.ZS,
              fnEnabledCheck: we,
            },
            o.createElement(c.Redo, null),
          ),
        );
      }
      function Ne(e) {
        return C.mk(e.state) > 0;
      }
      function we(e) {
        return C.mL(e.state) > 0;
      }
      function ye(e) {
        const { schema: t } = e;
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            Ee,
            { tooltip: "#FormattingToolbar_Bold", mark: t.marks.strong },
            o.createElement(c.TextBold, null),
          ),
          o.createElement(
            Ee,
            { tooltip: "#FormattingToolbar_Italic", mark: t.marks.italic },
            o.createElement(c.TextItalic, null),
          ),
          o.createElement(
            Ee,
            {
              tooltip: "#FormattingToolbar_Underline",
              mark: t.marks.underline,
            },
            o.createElement(c.TextUnderline, null),
          ),
          "strike" in t.marks &&
            o.createElement(
              Ee,
              { tooltip: "#FormattingToolbar_Strike", mark: t.marks.strike },
              o.createElement(c.TextStrikethrough, null),
            ),
          "code" in t.marks &&
            o.createElement(
              Ee,
              { tooltip: "#FormattingToolbar_InlineCode", mark: t.marks.code },
              o.createElement(c.TextCode, null),
            ),
        );
      }
      function Ae(e) {
        const { schema: t } = e;
        return o.createElement(
          be,
          {
            tooltip: "#FormattingToolbar_Paragraph",
            nodeType: t.nodes.paragraph,
          },
          o.createElement(c.TextParagraph, null),
        );
      }
      function Me(e) {
        const { schema: t, maxLevel: n = 1, levels: r } = e,
          a = n + r - 1;
        return o.createElement(
          o.Fragment,
          null,
          n <= 1 &&
            o.createElement(
              be,
              {
                tooltip: "#FormattingToolbar_HeadingLevel1",
                nodeType: t.nodes.heading,
                attrs: { level: 1 },
              },
              o.createElement(c.TextH1, null),
            ),
          n <= 2 &&
            a >= 2 &&
            o.createElement(
              be,
              {
                tooltip: "#FormattingToolbar_HeadingLevel2",
                nodeType: t.nodes.heading,
                attrs: { level: 2 },
              },
              o.createElement(c.TextH2, null),
            ),
          n <= 3 &&
            a >= 3 &&
            o.createElement(
              be,
              {
                tooltip: "#FormattingToolbar_HeadingLevel3",
                nodeType: t.nodes.heading,
                attrs: { level: 3 },
              },
              o.createElement(c.TextH3, null),
            ),
          n <= 4 &&
            a >= 4 &&
            o.createElement(
              be,
              {
                tooltip: "#FormattingToolbar_HeadingLevel4",
                nodeType: t.nodes.heading,
                attrs: { level: 4 },
              },
              o.createElement(c.TextH4, null),
            ),
          n <= 5 &&
            a >= 5 &&
            o.createElement(
              be,
              {
                tooltip: "#FormattingToolbar_HeadingLevel5",
                nodeType: t.nodes.heading,
                attrs: { level: 5 },
              },
              o.createElement(c.TextH5, null),
            ),
        );
      }
      function De(e) {
        const { schema: t, showIndentButtonsAsNeeded: n = !1 } = e,
          { callbacks: r, view: a } = me(),
          s = o.useCallback(
            (e) =>
              !!(function (e, t, n) {
                const { $from: o, to: r } = e.selection;
                for (let e = o.sharedDepth(r); e > 0; e--) {
                  const r = o.node(e);
                  if (r.hasMarkup(t, n)) return r;
                }
                return !1;
              })(e.state, t.nodes.bullet_list),
            [t],
          ),
          [l, i] = o.useState(() => s(a));
        return (
          (0, q.hL)(
            r,
            o.useCallback((e) => i(s(e)), [s]),
          ),
          o.createElement(
            o.Fragment,
            null,
            o.createElement(
              ke,
              {
                tooltip: "#FormattingToolbar_BulletedList",
                toggled: l,
                command: B.Sd(t.nodes.bullet_list),
              },
              o.createElement(c.TextBullets, null),
            ),
            (l || !n) &&
              o.createElement(
                o.Fragment,
                null,
                o.createElement(
                  ke,
                  {
                    tooltip: "#FormattingToolbar_OutdentList",
                    disabled: !l,
                    command: B.T2(t.nodes.list_item),
                  },
                  o.createElement(c.TextOutdent, null),
                ),
                o.createElement(
                  ke,
                  {
                    tooltip: "#FormattingToolbar_IndentList",
                    disabled: !l,
                    command: B.$B(t.nodes.list_item),
                  },
                  o.createElement(c.TextIndent, null),
                ),
              ),
          )
        );
      }
      function Se(e) {
        const { schema: t } = e;
        return o.createElement(
          Ce,
          { schema: t },
          o.createElement(c.TextLink, null),
        );
      }
      function Pe(e) {
        const { bSpellcheckEnabled: t, setSpellcheckEnabled: n } = e;
        return o.createElement(
          Te,
          {
            tooltip: t
              ? "#FormattingToolbar_DisableSpellcheck"
              : "#FormattingToolbar_EnableSpellcheck",
            toggled: t,
            onClick: () => n(!t),
          },
          o.createElement(c.SpellCheck, null),
        );
      }
      var xe = n(51076);
      function Oe(e) {
        const {
            schema: t,
            view: n,
            refUpdateToolbar: r,
            className: a,
            bSpellcheckEnabled: s,
            setSpellcheckEnabled: l,
          } = e,
          [i, d] = (0, xe.SP)("FormattingToolbar_Expanded", !1);
        return o.createElement(
          ue,
          { refUpdateToolbar: r, view: n },
          o.createElement(
            "div",
            { className: (0, W.A)(j.Toolbar, a) },
            o.createElement(
              fe,
              null,
              o.createElement(Be, null),
              o.createElement(he, null),
              o.createElement(ye, { schema: t }),
              o.createElement(ge, null),
              o.createElement(
                Te,
                {
                  onClick: () => d(!i),
                  tooltip: "#FormattingToolbar_ExpandOptions",
                },
                o.createElement(c.Chevron, { direction: i ? "up" : "down" }),
              ),
            ),
            o.createElement(
              ie.R,
              { visible: i },
              o.createElement(
                fe,
                null,
                o.createElement(Ae, { schema: t }),
                o.createElement(Me, { schema: t, levels: 5 }),
                o.createElement(
                  be,
                  {
                    nodeType: t.nodes.code_block,
                    tooltip: (0, _.we)("#FormattingToolbar_CodeBlock"),
                  },
                  o.createElement(c.TextCodeBlock, null),
                ),
                o.createElement(he, null),
                o.createElement(De, { schema: t }),
                o.createElement(he, null),
                o.createElement(Se, { schema: t }),
                o.createElement(ge, null),
                l &&
                  o.createElement(Pe, {
                    bSpellcheckEnabled: s,
                    setSpellcheckEnabled: l,
                  }),
              ),
            ),
          ),
        );
      }
      const Fe = 15;
      function Le(e) {
        const { note: t } = e,
          [n, l] = o.useState(!1),
          [c, i] = o.useState(),
          d = o.useRef(),
          m = o.useRef(),
          p = o.useRef(t.content),
          h = o.useRef(!1),
          g = (0, a.$G)(),
          f = (0, a.EC)(),
          b = (0, a.WA)(),
          E = (0, r.H0)(t.appid),
          k = (0, H.Qn)();
        p.current == t.content || h.current || (p.current = t.content);
        const T = p.current,
          C = (0, r.df)(),
          v = o.useCallback((e, t) => {
            d.current && d.current(),
              t.doc &&
                t.doc != e.state.doc &&
                (h.current ||
                  ((h.current = !0),
                  s.y.ReportTrackedAction("/GameNotes/NoteModified")),
                (m.current = () => ({
                  title: Re(e.state.doc),
                  bbcode: u(e.state.doc, oe),
                })),
                l(!0));
          }, []);
        o.useEffect(() => {
          if (!n) return;
          let e = m.current;
          const o = () => {
              if (e) {
                const { title: n, bbcode: o } = e();
                (t.not_persisted && !o?.length) ||
                  C.mutate({ note: t, title: n, bbcode: o }),
                  l(!1);
              }
              (e = void 0), (m.current = void 0);
            },
            r = window.setTimeout(o, 1e3 * Fe);
          return () => {
            window.clearTimeout(r), o();
          };
        }, [C, n, t]),
          o.useEffect(() => {
            c && c.focus();
          }, [c]);
        const B = (0, a.qq)(),
          N = (0, r.Bc)(t, B),
          w = {
            onSecondaryButton: () => N.mutate(),
            onSecondaryActionDescription: (0, _.we)(
              "#UserGameNotes_DeleteNote",
            ),
          };
        return o.createElement(
          "div",
          { className: X.NoteEditorArea },
          !k &&
            o.createElement(Oe, {
              schema: oe.pm_schema,
              view: c,
              refUpdateToolbar: d,
              className: X.Toolbar,
              bSpellcheckEnabled: f,
              setSpellcheckEnabled: b,
            }),
          o.createElement(
            z,
            {
              schemaConfig: oe,
              className: X.EditorInput,
              bbcode: T,
              onUpdate: v,
              refView: i,
              bSpellcheckEnabled: f,
              panelProps: w,
            },
            o.createElement(se, {
              uploadImage: E,
              nodeType: oe.pm_schema.nodes.image,
            }),
            o.createElement(O, {
              linkMarkType: oe.pm_schema.marks.link,
              schema: oe.pm_schema,
              onClickURL: g,
            }),
          ),
          !k && o.createElement(Ie, { note: t, bDirty: n }),
        );
      }
      function Ie(e) {
        const { note: t, bDirty: n } = e,
          [s, i, d] = (0, q.uD)(!1),
          m = (0, a.O8)(),
          u = (0, a.qq)(),
          p = (0, r.Bc)(t, u),
          h = o.useCallback(() => {
            !n && t.not_persisted ? p.mutate() : i();
          }, [n, t, p, i]);
        return o.createElement(
          "div",
          { className: X.NoteActions },
          s && o.createElement(Ge, { note: t, closeModal: d, deleteNote: p }),
          o.createElement(
            J.he,
            { toolTipContent: "#UserGameNotes_DeleteNote", direction: "top" },
            o.createElement(
              l.$n,
              { onClick: h },
              o.createElement(c.Trash, null),
            ),
          ),
          m && o.createElement(Ue, { bDirty: n }),
        );
      }
      function Ue(e) {
        const { bDirty: t } = e,
          n = (0, a.qq)();
        return t
          ? o.createElement(
              l.jn,
              { onClick: () => n(), className: X.CloseWindowButton },
              (0, _.we)("#Button_SaveAndClose"),
            )
          : o.createElement(
              l.$n,
              { onClick: () => n(), className: X.CloseWindowButton },
              (0, _.we)("#Button_Close"),
            );
      }
      function Ge(e) {
        const { note: t, closeModal: n, deleteNote: r } = e;
        return o.createElement(
          i.EN,
          { active: !0 },
          o.createElement(i.o0, {
            strTitle: (0, _.we)("#UserGameNotes_DeleteNote"),
            strDescription: (0, _.we)("#UserGameNotes_PromptDelete"),
            onOK: () => r.mutate(),
            bOKDisabled: r.isPending,
            strOKButtonText: (0, _.we)("#Button_Delete"),
            closeModal: n,
          }),
        );
      }
      function Re(e) {
        let t = "";
        for (let n = 0; n < e.content.childCount; n++) {
          const o = e.content.child(n);
          if (o.isText) t += o.text;
          else {
            if (((t = t.trim()), t.length > 4)) return t;
            if (((t = Re(o)), t.length > 4)) return t;
          }
        }
        return t.trim();
      }
    },
    44840: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => f });
      var o = n(63098),
        r = n(34394),
        a = n(93057),
        s = n(63696),
        l = n(49519),
        c = n(67808),
        i = n(73259),
        d = n(45264),
        m = n(11357),
        u = n(28816),
        p = n(45972),
        h = n(46108),
        g = n(39889);
      function f(e) {
        const { popup: t } = e,
          [n, r] = s.useState();
        return (
          s.useEffect(() => {
            if (n)
              return o.U.RegisterPopup(t, () =>
                n.SteamClient.Window.BringToFront(),
              );
          }, [t, n]),
          void 0 === t.noteid
            ? s.createElement(_, { popup: t, refPopup: r })
            : s.createElement(b, { popup: t, refPopup: r })
        );
      }
      function b(e) {
        const { popup: t, refPopup: n } = e,
          o = (0, h.we)("#GameNotes_NoteForGame", t.display_name);
        return s.createElement(
          c.p,
          { body_class: g.GameNotesPopup },
          s.createElement(
            p.hM,
            {
              strName: t.id,
              strTitle: o,
              onDismiss: () => t.close(),
              popupWidth: 500,
              popupHeight: 500,
              resizable: !0,
              refPopup: n,
              className: "TODO",
            },
            s.createElement(u.Y9, null, o),
            s.createElement(
              r.A,
              { mode: "single", closePopup: () => t.close() },
              s.createElement(E, {
                noteParent: t.noteParent,
                noteid: t.noteid,
              }),
            ),
          ),
        );
      }
      function E(e) {
        const { noteParent: t, noteid: n } = e,
          { data: o } = (0, d.P6)(t, n);
        return o ? s.createElement(m.U, { note: o }) : null;
      }
      function _(e) {
        const { popup: t, refPopup: n } = e,
          o = t.noteParent,
          c = s.useMemo(() => [(0, i.o)(o)], [o]);
        return s.createElement(
          p.hM,
          {
            strName: t.id,
            strTitle: t.display_name,
            onDismiss: () => t.close(),
            popupWidth: 900,
            popupHeight: 830,
            resizable: !0,
            refPopup: n,
            className: "TODO",
          },
          s.createElement(
            l.fS,
            { initialEntries: c },
            s.createElement(
              r.A,
              { mode: "page", closePopup: () => t.close() },
              s.createElement(a.default, { noteParent: o }),
            ),
          ),
        );
      }
    },
    93057: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => I });
      var o = n(63696),
        r = n(49519),
        a = n(73259),
        s = n(45264),
        l = n(11357),
        c = n(28816),
        i = n(90765),
        d = n(46108),
        m = n(51076),
        u = n(10325),
        p = n(38602),
        h = n(35488),
        g = n(98995),
        f = n(72476);
      function b() {
        const e = (0, r.W5)(),
          t = (0, s.QP)(
            "appid" in e.params && Number(e.params.appid),
            "shortcut_name" in e.params && e.params.shortcut_name,
          );
        let n = e.params.noteid;
        const a = (0, r.W6)(),
          l = (0, s.qF)(t),
          { data: i, isLoading: d } = (0, s.vg)(t);
        let m;
        i && n && (m = i.find((e) => e.id === n)),
          o.useLayoutEffect(() => {
            !i ||
              (n && i.find((e) => e.id === n)) ||
              (i.length > 0 && i[0].id ? _(a, t, i[0].id) : _(a, t, l()));
          }, [a, t, n, i, l]);
        const p = o.createElement(
          g.he,
          { toolTipContent: "#UserGameNotes_NewNote", direction: "top" },
          o.createElement(
            c.$n,
            {
              className: u.NewNoteButton,
              onClick: () => {
                const e = l();
                _(a, t, e);
              },
            },
            o.createElement(h.TextNewNote, null),
          ),
        );
        return i
          ? o.createElement(E, {
              noteParent: t,
              notes: i,
              activeNoteID: m?.id,
              actions: p,
            })
          : null;
      }
      function E(e) {
        const { noteParent: t, notes: n, activeNoteID: a, actions: s } = e,
          [h, g] = (0, m.SP)("NotesListCollapsed", !1),
          b = (0, p.wR)(),
          E = (0, f.Qn)(),
          k = n.map((e) => ({
            title:
              e.title?.length > 0
                ? e.title
                : (0, d.we)("#UserGameNotes_Untitled"),
            identifier: e.id,
            content: o.createElement(l.U, { note: e }),
            pageClassName: u.NotePage,
            hideTitle: !0,
          })),
          T = (0, r.W6)(),
          C = o.useCallback((e) => _(T, t, e), [T, t]);
        return o.createElement(c.Bv, {
          title: (0, d.we)("#UserGameNotes_NotesList"),
          pages: k,
          className: (0, i.A)(u.NotesPagedSettings, b && u.PinnedView),
          page: a,
          onPageRequested: C,
          bottomControls: s,
          hideList: h,
          toggleHideList: b || E ? void 0 : () => g(!h),
        });
      }
      function _(e, t, n) {
        let o;
        (o =
          "appid" in t
            ? a.O.AppNotes(t.appid, n)
            : a.O.ShortcutNotes(t.shortcut, n)),
          e.replace(o, e.location.state);
      }
      var k = n(39941),
        T = n(11682),
        C = n.n(T),
        v = n(61416),
        B = n(12176),
        N = n(10812),
        w = n(46382),
        y = n(43691),
        A = n(44846);
      let M;
      const D = 864e5;
      function S(e) {
        return `appinfo_${e}_${y.TS.LANGUAGE}`;
      }
      function P(e) {
        return Boolean(e && Date.now() - e.timeCached < D);
      }
      function x(e) {
        const t = (0, w.KV)(),
          n = (0, w.rX)();
        return (0, v.I)({
          queryKey: ["appinfo", e],
          queryFn: async () =>
            (function (e, t) {
              return (
                M ||
                  (M = new (C())(
                    async (n) => {
                      const o = new Map();
                      (await Promise.all(n.map((e) => t.GetObject(S(e)))))
                        .filter(P)
                        .forEach(({ value: e }) => o.set(e.appid, e));
                      const r = n.slice().filter((e) => !o.has(e));
                      if (r.length) {
                        const n = B.w.Init(N._z);
                        n.Body().set_language((0, A.sf)(y.TS.LANGUAGE)),
                          n.Body().set_appids(r);
                        const a = await N.BE.GetApps(e, n);
                        if (1 != a.GetEResult()) throw a.GetErrorMessage();
                        a.Body()
                          .toObject()
                          .apps.forEach((e) => {
                            t.StoreObject(S(e.appid), {
                              timeCached: Date.now(),
                              value: e,
                            }),
                              o.set(e.appid, e);
                          });
                      }
                      return n.map((e) => o.get(e));
                    },
                    { cache: !1 },
                  )),
                M
              );
            })(t, n).load(e),
          staleTime: D,
          enabled: !!e,
        }).data;
      }
      var O = n(26853);
      function F() {
        const { data: e, isLoading: t } = (0, s.Yh)();
        return t
          ? o.createElement(O.t, { msDelayAppear: 300 })
          : o.createElement(
              "div",
              null,
              o.createElement(
                "h1",
                null,
                (0, d.we)("#UserGameNotes_NotesList"),
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
          n = x(t.appid);
        return o.createElement(
          "li",
          null,
          o.createElement(k.N_, { to: a.O.AppNotes(t.appid) }, n?.name),
        );
      }
      function I(e) {
        return o.createElement(
          r.dO,
          null,
          o.createElement(r.qh, { path: a.O.List() }, o.createElement(F, null)),
          o.createElement(
            r.qh,
            { path: a.O.AppNotes(":appid", ":noteid?") },
            o.createElement(b, null),
          ),
          o.createElement(
            r.qh,
            { path: a.O.ShortcutNotes(":shortcut_name", ":noteid?") },
            o.createElement(b, null),
          ),
          o.createElement(
            r.qh,
            null,
            o.createElement(r.rd, { to: `${(0, a.o)(e.noteParent)}` }),
          ),
        );
      }
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/npm-coordinator-rel-steamui/build/client/steamui/sourcemaps/gamenotes.js.map
