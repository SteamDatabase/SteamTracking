(self.webpackChunksteamui = self.webpackChunksteamui || []).push([
  [1220],
  {
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
    14391: (e) => {
      e.exports = {
        Hover: "_3MfkIyTHK_txowyd2A_E1Z",
        Link: "_54gkGuAZz-pkR2y82lrA",
        LinkHelp: "_3BTOSI6ZZswnhj45yGrbX8",
      };
    },
    76627: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        Container: "_30v-6zb_axOypIUr5VRHE1",
        ToolbarRow: "LCeIT0gmFTY8fdfaVgk4j",
        CommandButton: "_1dEi5qzSDdPOzoOQXYbNLN",
        Toggled: "_1Iw5xoXQXfmRjgjWTKbm_G",
        Gap: "_19z0fjj7o0n9vAjVjvYZNU",
        Spacer: "_2m1BBIp5Ewr1TI-BkqFGLM",
        ExpandButton: "_1hoxTW8l-39xqcw7WGIlvL",
      };
    },
    39889: (e) => {
      e.exports = { GameNotesPopup: "_3hIt9g_59KauEV2uSNK6Ct" };
    },
    25789: (e, t, n) => {
      "use strict";
      n.d(t, { U: () => Ge });
      var o = n(63696),
        r = n(45264),
        a = n(38602),
        l = n(94361),
        s = n(28816),
        c = n(35488),
        i = n(42255),
        m = n(21399),
        u = n(85688);
      function d(e, t) {
        return p(t.pm_schema, t.pm_to_bbcode_config, e);
      }
      function p(e, t, n) {
        let o = n.marks,
          r = "";
        const a = t.mapNodes.get(n.type),
          { tag: l, args: s } = h(a, n.attrs);
        return (
          l && (r += (0, m.CS)(l, s)),
          n.content.forEach((n) => {
            ([r, o] = g(t, o, n.marks, r)),
              ([r, o] = (function (e, t, n, o) {
                let r;
                for (const a of n)
                  if (-1 === t.indexOf(a)) {
                    r || (r = t.slice());
                    const n = e.mapMarks.get(a.type);
                    if (((0, u.w)(n, "mark missing bbtag"), n)) {
                      r.push(a);
                      const { args: e, tag: t } = h(n, a.attrs);
                      o += (0, m.CS)(t, e || {});
                    }
                  }
                return [o, r ?? t];
              })(t, o, n.marks, r)),
              n.type.isText
                ? (r += (0, m.vE)(n.text || ""))
                : n.type == e.nodes.hard_break
                  ? (r += "\n")
                  : (r += p(e, t, n));
          }),
          ([r] = g(t, o, [], r)),
          l && (r += (0, m.op)(l)),
          r
        );
      }
      function g(e, t, n, o) {
        const r = [];
        for (const e of t) -1 === n.indexOf(e) && r.push(e);
        if (!r.length) return [o, t];
        const a = t.slice();
        for (
          ;
          r.length && ((0, u.w)(a.length, "no marks left to close"), a.length);

        ) {
          const t = a.pop(),
            n = e.mapMarks.get(t.type),
            { tag: l } = h(n, t.attrs);
          o += (0, m.op)(l);
          const s = r.indexOf(t);
          -1 != s && r.splice(s, 1);
        }
        return [o, a];
      }
      function h(e, t) {
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
      var f = n(91633),
        b = n(67599),
        E = n(37195);
      var _ = n(81429);
      class T {
        m_nodes = [];
        m_schema;
        constructor(e) {
          this.m_schema = e;
        }
        AppendText(e, t) {
          let n = 0;
          for (let t = e.indexOf("\n", n); -1 !== t; t = e.indexOf("\n", n))
            n != t && this.m_nodes.push(this.m_schema.text(e.substring(n, t))),
              this.m_nodes.push(this.m_schema.nodes.hard_break.create()),
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
      function k(e) {
        return e
          .filter((e) => e.isText)
          .map((e) => e.text)
          .join();
      }
      function C(e, t, ...n) {
        let o = e.BBArgsToAttrs ? e.BBArgsToAttrs(t.args || {}) : void 0;
        if (
          (!("convertContentToAttr" in e) ||
            !e.convertContentToAttr ||
            (o && o[e.convertContentToAttr]) ||
            ((o = { ...(o || {}), [e.convertContentToAttr]: k(n) }), (n = [])),
          "node" in e)
        ) {
          if (!e.node.validContent(_.FK.from(n)) && e.acceptNode) {
            let t = n.filter((t) => t.type == e.acceptNode);
            t.length || (t = [e.acceptNode.create(void 0, n)]), (n = t);
          }
          return e.node.create(o, n);
        }
        return n.map((t) => t.mark([...t.marks, e.mark.create(o)]));
      }
      class v extends m.Al {
        m_schema;
        constructor(e, t) {
          super(e, () => new T(t)), (this.m_schema = t);
        }
        ParseBBCode(e) {
          const t = this.Parse(e, C, !0);
          return this.m_schema.topNodeType.create(
            {},
            (function (e, t) {
              const n = [];
              let o = [];
              for (const r of t)
                if (r.isText) o.push(r);
                else {
                  const t = r.type == e.nodes.hard_break;
                  o.length
                    ? (n.push(e.nodes.paragraph.create({}, o)),
                      (o = []),
                      t || n.push(r))
                    : t
                      ? n.push(e.nodes.paragraph.create())
                      : n.push(r);
                }
              return n;
            })(this.m_schema, t),
          );
        }
      }
      var w = n(87300),
        B = n(62738),
        N = n(16486),
        A = n(18305);
      function M(e, t) {
        const { from: n, $from: o, to: r, empty: a } = e.selection;
        return a
          ? !!t.isInSet(e.storedMarks || o.marks())
          : e.doc.rangeHasMark(n, r, t);
      }
      function y(e, t, n) {
        let { $from: o, to: r, node: a } = e.selection;
        return !a && r <= o.end() && (a = o.parent), !!a && a.hasMarkup(t, n);
      }
      function S(e, t, n = {}) {
        return new N.fV(e, (e, o, r, a) => {
          const l = n instanceof Function ? n(o) : n,
            s = e.tr;
          if (o[1]) {
            const e = r + o[0].indexOf(o[1]),
              t = e + o[1].length;
            t < a && s.delete(t, a),
              e > r && s.delete(r, e),
              (a = r + o[1].length);
          }
          return s.addMark(r, a, t.create(l)), s.removeStoredMark(t), s;
        });
      }
      function D(e, t, n) {
        const o = { left: t, top: n },
          r = e.posAtCoords(o);
        if (r?.pos) {
          const t = e.state.doc.resolve(r.pos);
          e.dispatch(e.state.tr.setSelection(b.U3.near(t)));
        }
      }
      const x = o.createContext(null);
      function O(e) {
        return o.createElement(x.Provider, { value: e.view }, e.children);
      }
      function F(e) {
        const { schema: t, onUpdate: n } = e,
          r = o.useRef(n);
        return (
          (r.current = n),
          L(
            o.useMemo(
              () =>
                new b.k_({
                  view: (e) => ({ update: (...e) => r.current(...e) }),
                }),
              [],
            ),
          ),
          L(
            o.useMemo(
              () =>
                (function (e) {
                  const t = (0, w.st)(
                    w.I$,
                    (t, n) => (
                      n &&
                        n(
                          t.tr
                            .replaceSelectionWith(e.nodes.hard_break.create())
                            .scrollIntoView(),
                        ),
                      !0
                    ),
                  );
                  return (0, B.w)({
                    "Mod-z": E.tN,
                    "Mod-y": E.ZS,
                    Backspace: N.dv,
                    "Mod-Enter": t,
                    "Shift-Enter": t,
                    "Mod-b": (0, w.wh)(e.marks.strong),
                    "Mod-i": (0, w.wh)(e.marks.italic),
                    Enter: (0, A.wn)(e.nodes.list_item),
                    "Mod-[": (0, A.T2)(e.nodes.list_item),
                    "Mod-]": (0, A.$B)(e.nodes.list_item),
                    "Shift-Ctrl-1": (0, w.y_)(e.nodes.heading, { level: 1 }),
                    "Shift-Ctrl-2": (0, w.y_)(e.nodes.heading, { level: 2 }),
                    "Shift-Ctrl-3": (0, w.y_)(e.nodes.heading, { level: 3 }),
                    "Shift-Ctrl-0": (0, w.y_)(e.nodes.paragraph),
                  });
                })(t),
              [t],
            ),
          ),
          L(o.useMemo(() => (0, B.w)(w.RV), [])),
          L(
            o.useMemo(
              () =>
                (function (e) {
                  return (0, N.sM)({
                    rules: [
                      (0, N.tG)(
                        /^(\d+)\.\s$/,
                        e.nodes.ordered_list,
                        (e) => ({ order: parseInt(e[1]) }),
                        (e, t) =>
                          t.childCount + t.attrs.order == parseInt(e[1]),
                      ),
                      (0, N.tG)(/^\s*([-+*])\s$/, e.nodes.bullet_list),
                      S(/\*([^*]+)\*/, e.marks.strong),
                      S(/_([^_]+)_/, e.marks.italic),
                      S(/~([^~]+)~/, e.marks.strike),
                      S(/`([^`]+)`/, e.marks.code),
                      (0, N.JJ)(/^```$/, e.nodes.code_block),
                      (0, N.JJ)(/^(#{1,5})\s$/, e.nodes.heading, (e) => ({
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
      function L(e) {
        const t = o.useContext(x);
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
      var P = n(36142),
        I = n(28091),
        U = n(59727),
        G = n(54644),
        R = n(46108),
        $ = n(14391);
      function H() {
        const [e, t] = o.useState(),
          [n, r] = o.useState(),
          [a, l] = o.useState();
        if (
          (L(
            o.useMemo(
              () =>
                new b.k_({
                  props: {
                    handleDOMEvents: {
                      mouseover: (e, n) => {
                        const o = n.target;
                        if ((0, G.kD)(o) && "A" == o.nodeName) {
                          const e = o.getBoundingClientRect();
                          t(e.left + e.width / 2), r(e.bottom + 2), l(o);
                        } else l(void 0);
                        return !1;
                      },
                      mouseleave: (e, t) => (l(void 0), !1),
                    },
                  },
                }),
              [],
            ),
          ),
          !a)
        )
          return null;
        const s = a.getAttribute("href");
        return o.createElement(
          W,
          { top: n, left: e },
          o.createElement("div", { className: $.Link }, s),
          o.createElement(
            "div",
            { className: $.LinkHelp },
            (0, R.we)("#UserGameNotes_ClickToOpenLink"),
          ),
        );
      }
      function W(e) {
        const { top: t, left: n, children: r } = e,
          [a, l] = o.useState(0),
          s = o.useRef();
        o.useLayoutEffect(() => {
          l(s.current.getBoundingClientRect().width);
        }, [t, n, r]);
        const c = { top: `${t}px`, left: `${Math.max(n - a / 2, 12)}px` };
        return o.createElement(
          "div",
          { className: $.Hover, style: c, ref: s },
          r,
        );
      }
      var V = n(43397),
        K = n(90765),
        j = n(52451),
        q = n(53807),
        z = n(72476),
        Z = n(76627);
      function X(e) {
        const {
            schemaConfig: t,
            bbcode: n,
            className: r,
            onUpdate: a,
            refView: l,
            onClickURL: s,
            bSpellcheckEnabled: c = !0,
            panelProps: i,
            children: m,
          } = e,
          [u, d] = o.useState(),
          p = o.useRef(),
          g = o.useRef();
        g.current = s || J;
        const h = o.useCallback(
          (e) => {
            if (!e) return void p.current?.destroy();
            const n = p.current;
            n && n.destroy(),
              (p.current = new f.Lz(e, {
                state: n?.state ?? b.$t.create({ schema: t.pm_schema }),
                handleClickOn: (...e) =>
                  (function (e, t, n, o, r, a, l, s) {
                    if (s && (l.ctrlKey || 1 == l.button)) {
                      const n = r
                        .resolve(o - a)
                        .marks()
                        .find((t) => t.type == e.marks.link);
                      if (n)
                        return t(n.attrs.href, l.view), l.preventDefault(), !0;
                    }
                    return !1;
                  })(t.pm_schema, g.current, ...e),
                clipboardTextParser: (...e) =>
                  (function (e, t, n, o, r) {
                    let a,
                      l = [];
                    for (; (a = t.match(q.O9)); )
                      a.index > 0 && l.push(e.text(t.substring(0, a.index))),
                        l.push(
                          e.text(a[0], [
                            e.marks.link.create({ href: (0, q.jT)(a[0]) }),
                          ]),
                        ),
                        (t = t.substring(a.index + a[0].length));
                    t.length && l.push(e.text(t));
                    return new _.Ji(_.FK.from(l), n.start(), n.end());
                  })(t.pm_schema, ...e),
              })),
              d(p.current),
              n || p.current.focus();
          },
          [t],
        );
        o.useEffect(() => {
          u &&
            u.updateState(
              (function (e, t, n) {
                const o = (0, E.b6)(),
                  r = o.spec.key?.get(n),
                  a = [...n.plugins.filter((e) => e != r), o];
                return b.$t.create({ schema: t, doc: e, plugins: a });
              })(
                (function (e, t) {
                  return new v(t.bbcode_dictionary, t.pm_schema).ParseBBCode(e);
                })(n, t),
                t.pm_schema,
                u.state,
              ),
            );
        }, [t, n, u]),
          (0, j.D5)(l, u);
        const {
            refDiv: T,
            onActivate: k,
            onGamepadDirection: C,
          } = (function (e) {
            const t = (0, z.rP)(),
              n = o.useRef(),
              r = o.useCallback(
                (e) => {
                  (0, U.iv)(e, t.IN_VR);
                },
                [t.IN_VR],
              ),
              a = (0, U.FN)(
                { onTextEntered: r },
                () => n.current?.ownerDocument.defaultView,
              ),
              l = o.useCallback(() => {
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
                      D(e.current, t.left, t.top);
                      break;
                    }
                  }
                }
              }, [a, e]),
              s = o.useCallback((e) => e.currentTarget == e.target, []),
              c = (0, I.ak)(n, null, null, s);
            return { refDiv: n, onActivate: l, onGamepadDirection: c };
          })(p),
          w = (0, j.Ue)(T, h);
        return o.createElement(
          O,
          { view: u },
          o.createElement(P.Z, {
            key: `editordiv_${c}`,
            className: (0, K.A)(r, Z.Container),
            ref: w,
            spellCheck: c,
            focusable: !0,
            onActivate: k,
            onOKActionDescription: (0, R.we)("#UserGameNotes_Edit"),
            onGamepadDirection: C,
            ...i,
          }),
          o.createElement(F, { onUpdate: a, schema: t.pm_schema }),
          o.createElement(H, null),
          m,
        );
      }
      function J(e, t) {
        (0, V.EP)(t, e);
      }
      var Q = n(98995),
        Y = n(10325),
        ee = n(49787),
        te = n.n(ee);
      function ne(e, t, n = 0) {
        return () => [e, { class: t }, n];
      }
      const oe = {
          paragraph: {
            content: "inline*",
            group: "block",
            parseDOM: [{ tag: "p" }],
            toDOM: ne("p", (0, K.A)("pm_paragraph", te().Paragraph)),
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
                  `BB_Header${e.attrs.level} ` + te()[`Header${e.attrs.level}`],
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
              return ["img", { src: t, alt: n, title: o, class: te().Image }];
            },
            bbCode: {
              tag: "img",
              BBArgsToAttrs: (e) => ({ src: e.src }),
              AttrsToBBArgs: (e) => ({ args: { src: e.src } }),
              convertContentToAttr: "src",
            },
          },
          bullet_list: {
            ...A.fF,
            content: "list_item+",
            group: "block",
            toDOM: ne("ul", te().List),
            bbCode: { tag: "list" },
          },
          ordered_list: {
            ...A.o8,
            content: "list_item+",
            group: "block",
            toDOM: ne("ol", te().OrderedList),
            bbCode: { tag: "olist" },
          },
          list_item: {
            ...A.Aw,
            content: "paragraph block*",
            toDOM: ne("li", te().ListItem),
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
              { class: te().CodeBlock },
              ["code", { class: te().Code }, 0],
            ],
            bbCode: { tag: "code" },
          },
        },
        re = {
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
            toDOM: ne("b", (0, K.A)("BB_Bold", te().Bold)),
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
            toDOM: ne("i", (0, K.A)("BB_Italic", te().Italic)),
            bbCode: { tag: "i" },
          },
          underline: {
            parseDOM: [{ tag: "u" }, { style: "text-decoration=underline" }],
            toDOM: ne("u", (0, K.A)("BB_Underline", te().Underline)),
            bbCode: { tag: "u" },
          },
          strike: {
            parseDOM: [{ style: "text-decoration=line-through" }],
            toDOM: ne("span", (0, K.A)("BB_Strike", te().Strike)),
            bbCode: { tag: "strike" },
          },
          code: {
            parseDOM: [{ tag: "code" }],
            toDOM: ne("code", (0, K.A)("BB_Code", te().Code)),
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
              return ["a", { href: t, title: n }, 0];
            },
            bbCode: {
              tag: "url",
              BBArgsToAttrs: (e) => ({ href: e[""] }),
              AttrsToBBArgs: (e) => ({ args: { "": e.href } }),
            },
          },
        };
      const ae = { nodes: { ...oe }, marks: { ...re } },
        le = new (class {
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
            (this.m_ProseMirrorSchema = new _.Sj({ nodes: t, marks: r })),
              n.forEach((t, n) => {
                const o = this.m_ProseMirrorSchema.nodes[n],
                  r = e.nodes[n],
                  a = Array.isArray(t) ? t : [t];
                let l;
                "list_item+" == r.content
                  ? (l = this.m_ProseMirrorSchema.nodes.list_item)
                  : -1 != r.content?.indexOf("paragraph") &&
                    (l = this.m_ProseMirrorSchema.nodes.paragraph),
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
                          acceptNode: l,
                        },
                        skipFollowingNewline: !0,
                        ...a,
                      });
                    },
                  );
                const { tag: s, AttrsToBBArgs: c } = a[0];
                this.m_PMToBBCodeConfig.mapNodes.set(o, {
                  tag: s,
                  AttrsToBBArgs: c,
                });
              }),
              o.forEach((e, t) => {
                const n = this.m_ProseMirrorSchema.marks[t],
                  { tag: o, BBArgsToAttrs: r, AttrsToBBArgs: a, ...l } = e;
                this.m_mapBBCodeDictionary.set(o, {
                  Constructor: { mark: n, BBArgsToAttrs: r },
                  ...l,
                }),
                  this.m_PMToBBCodeConfig.mapMarks.set(n, {
                    tag: o,
                    AttrsToBBArgs: a,
                  });
              });
          }
        })(ae);
      var se = n(90601);
      const ce = "/images/image_error.svg";
      function ie(e) {
        const { uploadImage: t, nodeType: n, nMaxImageSize: r = ue } = e;
        return (
          L(
            o.useMemo(
              () =>
                new b.k_({
                  key: new b.hs(`PMUploadImage_${n.name}`),
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
                              src: ce,
                              title: (0, R.we)("#UserGameNotes_ImageTooLarge"),
                            }),
                          ];
                          return new _.Ji(_.FK.from(t), 0, 0);
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
                                  a = (0, se.wI)(await r.arrayBuffer());
                                me(
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
      function me(e, t, n) {
        n.state.doc.descendants((o, r) => {
          if ("image" === o.type.name && o.attrs.src === e) {
            const e = n.state.tr.setNodeAttribute(r, "src", t);
            n.dispatch(e);
          }
        });
      }
      const ue = 1048576;
      var de = n(71594),
        pe = n(79926);
      const ge = () => o.useContext(fe);
      function he(e) {
        const { view: t, refUpdateToolbar: n, children: r } = e,
          a = o.useRef();
        a.current || (a.current = new pe.lu()),
          o.useEffect(
            () => (
              (0, j.cZ)(n, () => a.current.Dispatch(t)),
              () => (0, j.cZ)(n, void 0)
            ),
            [t, n],
          );
        const l = o.useMemo(() => ({ callbacks: a.current, view: t }), [t]);
        return t ? o.createElement(fe.Provider, { value: l }, r) : null;
      }
      const fe = o.createContext(void 0);
      function be() {
        return o.createElement("div", { className: Z.Gap });
      }
      function Ee() {
        return o.createElement("div", { className: Z.Spacer });
      }
      function _e(e) {
        return o.createElement(
          P.Z,
          { className: (0, K.A)(Z.ToolbarRow), "flow-children": "row" },
          e.children,
        );
      }
      function Te(e) {
        const { nodeType: t, title: n, attrs: r, children: a } = e,
          { callbacks: l, view: s } = ge(),
          [c, i] = o.useState(() => y(s.state, t, r)),
          m = o.useCallback((e) => i(y(e.state, t, r)), [t, r]);
        (0, j.hL)(l, m);
        const u = o.useMemo(() => w.y_(t, r), [r, t]);
        return o.createElement(ve, {
          command: u,
          title: n,
          toggled: c,
          children: a,
        });
      }
      function ke(e) {
        const { mark: t, title: n, children: r } = e,
          { callbacks: a, view: l } = ge(),
          [s, c] = o.useState(() => M(l.state, t)),
          i = o.useCallback((e) => c(M(e.state, t)), [t]);
        (0, j.hL)(a, i);
        const m = o.useMemo(() => w.wh(t), [t]);
        return o.createElement(ve, {
          command: m,
          title: n,
          toggled: s,
          children: r,
        });
      }
      function Ce(e) {
        const { fnEnabledCheck: t, ...n } = e,
          { callbacks: r, view: a } = ge(),
          [l, s] = o.useState(() => t(a)),
          c = o.useCallback((e) => s(t(e)), [t]);
        return (0, j.hL)(r, c), o.createElement(ve, { ...n, disabled: !l });
      }
      function ve(e) {
        const {
            command: t,
            toggled: n,
            title: r,
            disabled: a,
            children: l,
          } = e,
          { view: c } = ge();
        return o.createElement(
          s.$n,
          {
            className: (0, K.A)(Z.CommandButton, n && Z.Toggled),
            title: r,
            onMouseDown: (e) => {
              e.preventDefault(), t(c.state, c.dispatch, c);
            },
            disabled: !0 === a,
            focusable: !a,
          },
          l,
        );
      }
      function we(e) {
        const {
          onClick: t,
          toggled: n,
          title: r,
          disabled: a,
          children: l,
        } = e;
        return o.createElement(
          s.$n,
          {
            className: (0, K.A)(Z.CommandButton, n && Z.Toggled),
            title: r,
            onMouseDown: (e) => {
              e.preventDefault(), t();
            },
            disabled: !0 === a,
          },
          l,
        );
      }
      function Be(e) {
        const { schema: t, children: n } = e,
          { callbacks: r, view: a } = ge(),
          [l, c] = o.useState(() => M(a.state, t.marks.link)),
          m = o.useCallback((e) => c(M(e.state, t.marks.link)), [t]);
        (0, j.hL)(r, m);
        const [u, d, p] = (0, j.uD)();
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            i.EN,
            { active: u },
            o.createElement(Ne, {
              schema: t,
              active: u,
              closeModal: p,
              view: a,
            }),
          ),
          o.createElement(
            s.$n,
            {
              className: (0, K.A)(Z.CommandButton, l && Z.Toggled),
              onMouseDown: (e) => {
                e.preventDefault(), d();
              },
              title: (0, R.we)("#FormattingToolbar_InsertLink"),
            },
            n,
          ),
        );
      }
      const Ne = o.memo(function (e) {
        const { schema: t, active: n, closeModal: r, view: a } = e,
          [l, c] = o.useState(""),
          [m, u] = o.useState(""),
          d = o.useRef(),
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
                  ? (u(e),
                    d.current.Focus(),
                    window.setTimeout(() => {
                      d.current.element.select();
                    }, 0))
                  : 0 == e.length
                    ? d.current.Focus()
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
                    t.text(l || m, [t.marks.link.create({ href: m })]),
                  ),
                ),
                  a.focus(),
                  r();
              },
              closeModal: r,
              strTitle: (0, R.we)("#FormattingToolbar_InsertLink"),
              strOKButtonText: (0, R.we)("#FormattingToolbar_InsertLink"),
              bOKDisabled: 0 == m.length,
            },
            o.createElement(s.pd, {
              ref: d,
              value: l,
              onChange: (e) => c(e.currentTarget.value),
              label: (0, R.we)("#FormattingToolbar_LinkText"),
            }),
            o.createElement(s.pd, {
              ref: p,
              value: m,
              onChange: (e) => u(e.currentTarget.value),
              label: (0, R.we)("#FormattingToolbar_LinkAddress"),
            }),
          )
        );
      });
      function Ae() {
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            Q.he,
            { toolTipContent: "#FormattingToolbar_Undo", direction: "bottom" },
            o.createElement(
              Ce,
              {
                title: (0, R.we)("#FormattingToolbar_Undo"),
                command: E.tN,
                fnEnabledCheck: Me,
              },
              o.createElement(c.Undo, null),
            ),
          ),
          o.createElement(
            Q.he,
            { toolTipContent: "#FormattingToolbar_Redo", direction: "bottom" },
            o.createElement(
              Ce,
              {
                title: (0, R.we)("#FormattingToolbar_Redo"),
                command: E.ZS,
                fnEnabledCheck: ye,
              },
              o.createElement(c.Redo, null),
            ),
          ),
        );
      }
      function Me(e) {
        return E.mk(e.state) > 0;
      }
      function ye(e) {
        return E.mL(e.state) > 0;
      }
      function Se(e) {
        const { schema: t } = e;
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            Q.he,
            { toolTipContent: "#FormattingToolbar_Bold", direction: "bottom" },
            o.createElement(
              ke,
              {
                title: (0, R.we)("#FormattingToolbar_Bold"),
                mark: t.marks.strong,
              },
              o.createElement(c.TextBold, null),
            ),
          ),
          o.createElement(
            Q.he,
            {
              toolTipContent: "#FormattingToolbar_Italic",
              direction: "bottom",
            },
            o.createElement(
              ke,
              {
                title: (0, R.we)("#FormattingToolbar_Italic"),
                mark: t.marks.italic,
              },
              o.createElement(c.TextItalic, null),
            ),
          ),
          o.createElement(
            Q.he,
            {
              toolTipContent: "#FormattingToolbar_Underline",
              direction: "bottom",
            },
            o.createElement(
              ke,
              {
                title: (0, R.we)("#FormattingToolbar_Underline"),
                mark: t.marks.underline,
              },
              o.createElement(c.TextUnderline, null),
            ),
          ),
          "strike" in t.marks &&
            o.createElement(
              Q.he,
              {
                toolTipContent: "#FormattingToolbar_Strike",
                direction: "bottom",
              },
              o.createElement(
                ke,
                {
                  title: (0, R.we)("#FormattingToolbar_Strike"),
                  mark: t.marks.strike,
                },
                o.createElement(c.TextStrikethrough, null),
              ),
            ),
          "code" in t.marks &&
            o.createElement(
              Q.he,
              {
                toolTipContent: "#FormattingToolbar_InlineCode",
                direction: "bottom",
              },
              o.createElement(
                ke,
                {
                  title: (0, R.we)("#FormattingToolbar_InlineCode"),
                  mark: t.marks.code,
                },
                o.createElement(c.TextCode, null),
              ),
            ),
        );
      }
      function De(e) {
        const { schema: t } = e;
        return o.createElement(
          Q.he,
          {
            toolTipContent: "#FormattingToolbar_Paragraph",
            direction: "bottom",
          },
          o.createElement(
            Te,
            {
              nodeType: t.nodes.paragraph,
              title: (0, R.we)("#FormattingToolbar_Paragraph"),
            },
            o.createElement(c.TextParagraph, null),
          ),
        );
      }
      function xe(e) {
        const { schema: t, levels: n } = e;
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            Q.he,
            {
              toolTipContent: "#FormattingToolbar_HeadingLevel1",
              direction: "bottom",
            },
            o.createElement(
              Te,
              {
                nodeType: t.nodes.heading,
                attrs: { level: 1 },
                title: (0, R.we)("#FormattingToolbar_HeadingLevelN", 1),
              },
              o.createElement(c.TextH1, null),
            ),
          ),
          n >= 2 &&
            o.createElement(
              Q.he,
              {
                toolTipContent: "#FormattingToolbar_HeadingLevel2",
                direction: "bottom",
              },
              o.createElement(
                Te,
                {
                  nodeType: t.nodes.heading,
                  attrs: { level: 2 },
                  title: (0, R.we)("#FormattingToolbar_HeadingLevelN", 2),
                },
                o.createElement(c.TextH2, null),
              ),
            ),
          n >= 3 &&
            o.createElement(
              Q.he,
              {
                toolTipContent: "#FormattingToolbar_HeadingLevel3",
                direction: "bottom",
              },
              o.createElement(
                Te,
                {
                  nodeType: t.nodes.heading,
                  attrs: { level: 3 },
                  title: (0, R.we)("#FormattingToolbar_HeadingLevelN", 3),
                },
                o.createElement(c.TextH3, null),
              ),
            ),
          n >= 4 &&
            o.createElement(
              Q.he,
              {
                toolTipContent: "#FormattingToolbar_HeadingLevel4",
                direction: "bottom",
              },
              o.createElement(
                Te,
                {
                  nodeType: t.nodes.heading,
                  attrs: { level: 4 },
                  title: (0, R.we)("#FormattingToolbar_HeadingLevelN", 4),
                },
                o.createElement(c.TextH4, null),
              ),
            ),
          n >= 5 &&
            o.createElement(
              Q.he,
              {
                toolTipContent: "#FormattingToolbar_HeadingLevel5",
                direction: "bottom",
              },
              o.createElement(
                Te,
                {
                  nodeType: t.nodes.heading,
                  attrs: { level: 5 },
                  title: (0, R.we)("#FormattingToolbar_HeadingLevelN", 5),
                },
                o.createElement(c.TextH5, null),
              ),
            ),
        );
      }
      function Oe(e) {
        const { schema: t } = e;
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            Q.he,
            {
              toolTipContent: "#FormattingToolbar_BulletedList",
              direction: "bottom",
            },
            o.createElement(
              ve,
              {
                title: (0, R.we)("#FormattingToolbar_BulletedList"),
                command: A.Sd(t.nodes.bullet_list),
              },
              o.createElement(c.TextBullets, null),
            ),
          ),
          o.createElement(
            Q.he,
            {
              toolTipContent: "#FormattingToolbar_IndentList",
              direction: "bottom",
            },
            o.createElement(
              ve,
              {
                title: (0, R.we)("#FormattingToolbar_IndentList"),
                command: A.T2(t.nodes.list_item),
              },
              o.createElement(c.TextIndent, null),
            ),
          ),
          o.createElement(
            Q.he,
            {
              toolTipContent: "#FormattingToolbar_OutdentList",
              direction: "bottom",
            },
            o.createElement(
              ve,
              {
                title: (0, R.we)("#FormattingToolbar_OutdentList"),
                command: A.$B(t.nodes.list_item),
              },
              o.createElement(c.TextOutdent, null),
            ),
          ),
        );
      }
      function Fe(e) {
        const { schema: t } = e;
        return o.createElement(
          Q.he,
          {
            toolTipContent: "#FormattingToolbar_InsertLink",
            direction: "bottom",
          },
          o.createElement(Be, { schema: t }, o.createElement(c.TextLink, null)),
        );
      }
      function Le(e) {
        const { bSpellcheckEnabled: t, setSpellcheckEnabled: n } = e;
        return o.createElement(
          Q.he,
          {
            toolTipContent: t
              ? "#FormattingToolbar_DisableSpellcheck"
              : "#FormattingToolbar_EnableSpellcheck",
            direction: "bottom",
          },
          o.createElement(
            we,
            { toggled: t, onClick: () => n(!t) },
            o.createElement(c.SpellCheck, null),
          ),
        );
      }
      var Pe = n(51076);
      function Ie(e) {
        const {
            schema: t,
            view: n,
            refUpdateToolbar: r,
            className: a,
            bSpellcheckEnabled: l,
            setSpellcheckEnabled: i,
          } = e,
          [m, u] = (0, Pe.SP)("FormattingToolbar_Expanded", !1);
        return o.createElement(
          he,
          { refUpdateToolbar: r, view: n },
          o.createElement(
            "div",
            { className: (0, K.A)(Z.Toolbar, a) },
            o.createElement(
              _e,
              null,
              o.createElement(Ae, null),
              o.createElement(be, null),
              o.createElement(Se, { schema: t }),
              o.createElement(Ee, null),
              o.createElement(
                Q.he,
                {
                  toolTipContent: "#FormattingToolbar_ExpandOptions",
                  direction: "bottom",
                },
                o.createElement(
                  s.$n,
                  {
                    className: (0, K.A)(
                      Z.CommandButton,
                      Z.ExpandButton,
                      m && Z.Toggled,
                    ),
                    onClick: () => u(!m),
                  },
                  o.createElement(c.Chevron, null),
                ),
              ),
            ),
            o.createElement(
              de.R,
              { visible: m },
              o.createElement(
                _e,
                null,
                o.createElement(De, { schema: t }),
                o.createElement(xe, { schema: t, levels: 5 }),
                o.createElement(
                  Q.he,
                  {
                    toolTipContent: "#FormattingToolbar_CodeBlock",
                    direction: "bottom",
                  },
                  o.createElement(
                    Te,
                    {
                      nodeType: t.nodes.code_block,
                      title: (0, R.we)("#FormattingToolbar_CodeBlock"),
                    },
                    o.createElement(c.TextCodeBlock, null),
                  ),
                ),
                o.createElement(be, null),
                o.createElement(Oe, { schema: t }),
                o.createElement(be, null),
                o.createElement(Fe, { schema: t }),
                o.createElement(Ee, null),
                i &&
                  o.createElement(Le, {
                    bSpellcheckEnabled: l,
                    setSpellcheckEnabled: i,
                  }),
              ),
            ),
          ),
        );
      }
      const Ue = 15;
      function Ge(e) {
        const { note: t } = e,
          [n, s] = o.useState(!1),
          [c, i] = o.useState(),
          m = o.useRef(),
          u = o.useRef(),
          p = o.useRef(t.content),
          g = o.useRef(!1),
          h = (0, a.$G)(),
          f = (0, a.EC)(),
          b = (0, a.WA)(),
          E = (0, r.H0)(t.appid),
          _ = (0, z.Qn)();
        p.current == t.content || g.current || (p.current = t.content);
        const T = p.current,
          k = (0, r.df)(),
          C = o.useCallback((e, t) => {
            m.current && m.current(),
              t.doc &&
                t.doc != e.state.doc &&
                (g.current ||
                  ((g.current = !0),
                  l.y.ReportTrackedAction("/GameNotes/NoteModified")),
                (u.current = () => ({
                  title: We(e.state.doc),
                  bbcode: d(e.state.doc, le),
                })),
                s(!0));
          }, []);
        o.useEffect(() => {
          if (!n) return;
          let e = u.current;
          const o = () => {
              if (e) {
                const { title: n, bbcode: o } = e();
                (t.not_persisted && !o?.length) ||
                  k.mutate({ note: t, title: n, bbcode: o }),
                  s(!1);
              }
              (e = void 0), (u.current = void 0);
            },
            r = window.setTimeout(o, 1e3 * Ue);
          return () => {
            window.clearTimeout(r), o();
          };
        }, [k, n, t]);
        const v = (0, a.qq)(),
          w = (0, r.Bc)(t, v),
          B = {
            onSecondaryButton: () => w.mutate(),
            onSecondaryActionDescription: (0, R.we)(
              "#UserGameNotes_DeleteNote",
            ),
          };
        return o.createElement(
          "div",
          { className: Y.NoteEditorArea },
          !_ &&
            o.createElement(Ie, {
              schema: le.pm_schema,
              view: c,
              refUpdateToolbar: m,
              className: Y.Toolbar,
              bSpellcheckEnabled: f,
              setSpellcheckEnabled: b,
            }),
          o.createElement(
            X,
            {
              schemaConfig: le,
              className: Y.EditorInput,
              bbcode: T,
              onUpdate: C,
              refView: i,
              onClickURL: h,
              bSpellcheckEnabled: f,
              panelProps: B,
            },
            o.createElement(ie, {
              uploadImage: E,
              nodeType: le.pm_schema.nodes.image,
            }),
          ),
          !_ && o.createElement(Re, { note: t, bDirty: n }),
        );
      }
      function Re(e) {
        const { note: t, bDirty: n } = e,
          [l, i, m] = (0, j.uD)(!1),
          u = (0, a.O8)(),
          d = (0, a.qq)(),
          p = (0, r.Bc)(t, d),
          g = o.useCallback(() => {
            !n && t.not_persisted ? p.mutate() : i();
          }, [n, t, p, i]);
        return o.createElement(
          "div",
          { className: Y.NoteActions },
          l && o.createElement(He, { note: t, closeModal: m, deleteNote: p }),
          o.createElement(
            Q.he,
            { toolTipContent: "#UserGameNotes_DeleteNote", direction: "top" },
            o.createElement(
              s.$n,
              { onClick: g },
              o.createElement(c.Trash, null),
            ),
          ),
          u && o.createElement($e, { bDirty: n }),
        );
      }
      function $e(e) {
        const { bDirty: t } = e,
          n = (0, a.qq)();
        return t
          ? o.createElement(
              s.jn,
              { onClick: () => n(), className: Y.CloseWindowButton },
              (0, R.we)("#Button_SaveAndClose"),
            )
          : o.createElement(
              s.$n,
              { onClick: () => n(), className: Y.CloseWindowButton },
              (0, R.we)("#Button_Close"),
            );
      }
      function He(e) {
        const { note: t, closeModal: n, deleteNote: r } = e;
        return o.createElement(
          i.EN,
          { active: !0 },
          o.createElement(i.o0, {
            strTitle: (0, R.we)("#UserGameNotes_DeleteNote"),
            strDescription: (0, R.we)("#UserGameNotes_PromptDelete"),
            onOK: () => r.mutate(),
            bOKDisabled: r.isLoading,
            strOKButtonText: (0, R.we)("#Button_Delete"),
            closeModal: n,
          }),
        );
      }
      function We(e) {
        let t = "";
        for (let n = 0; n < e.content.childCount; n++) {
          const o = e.content.child(n);
          if (o.isText) t += o.text;
          else {
            if (((t = t.trim()), t.length > 4)) return t;
            if (((t = We(o)), t.length > 4)) return t;
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
        l = n(63696),
        s = n(49519),
        c = n(67808),
        i = n(73259),
        m = n(45264),
        u = n(25789),
        d = n(28816),
        p = n(42255),
        g = n(46108),
        h = n(39889);
      function f(e) {
        const { popup: t } = e,
          [n, r] = l.useState();
        return (
          l.useEffect(() => {
            if (n)
              return o.U.RegisterPopup(t, () =>
                n.SteamClient.Window.BringToFront(),
              );
          }, [t, n]),
          void 0 === t.noteid
            ? l.createElement(_, { popup: t, refPopup: r })
            : l.createElement(b, { popup: t, refPopup: r })
        );
      }
      function b(e) {
        const { popup: t, refPopup: n } = e,
          o = (0, g.we)("#GameNotes_NoteForGame", t.display_name);
        return l.createElement(
          c.p,
          { body_class: h.GameNotesPopup },
          l.createElement(
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
            l.createElement(d.Y9, null, o),
            l.createElement(
              r.A,
              { mode: "single", closePopup: () => t.close() },
              l.createElement(E, {
                noteParent: t.noteParent,
                noteid: t.noteid,
              }),
            ),
          ),
        );
      }
      function E(e) {
        const { noteParent: t, noteid: n } = e,
          { data: o } = (0, m.P6)(t, n);
        return o ? l.createElement(u.U, { note: o }) : null;
      }
      function _(e) {
        const { popup: t, refPopup: n } = e,
          o = t.noteParent,
          c = l.useMemo(() => [(0, i.o)(o)], [o]);
        return l.createElement(
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
          l.createElement(
            s.fS,
            { initialEntries: c },
            l.createElement(
              r.A,
              { mode: "page", closePopup: () => t.close() },
              l.createElement(a.default, { noteParent: o }),
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
        l = n(45264),
        s = n(25789),
        c = n(28816),
        i = n(90765),
        m = n(46108),
        u = n(51076),
        d = n(10325),
        p = n(38602),
        g = n(35488),
        h = n(98995),
        f = n(72476);
      function b() {
        const e = (0, r.W5)(),
          t = (0, l.QP)(
            "appid" in e.params && Number(e.params.appid),
            "shortcut_name" in e.params && e.params.shortcut_name,
          );
        let n = e.params.noteid;
        const a = (0, r.W6)(),
          s = (0, l.qF)(t),
          { data: i, isLoading: m } = (0, l.vg)(t);
        let u;
        i && n && (u = i.find((e) => e.id === n)),
          o.useLayoutEffect(() => {
            !i ||
              (n && i.find((e) => e.id === n)) ||
              (i.length > 0 && i[0].id ? _(a, t, i[0].id) : _(a, t, s()));
          }, [a, t, n, i, s]);
        const p = o.createElement(
          h.he,
          { toolTipContent: "#UserGameNotes_NewNote", direction: "top" },
          o.createElement(
            c.$n,
            {
              className: d.NewNoteButton,
              onClick: () => {
                const e = s();
                _(a, t, e);
              },
            },
            o.createElement(g.TextNewNote, null),
          ),
        );
        return i
          ? o.createElement(E, {
              noteParent: t,
              notes: i,
              activeNoteID: u?.id,
              actions: p,
            })
          : null;
      }
      function E(e) {
        const { noteParent: t, notes: n, activeNoteID: a, actions: l } = e,
          [g, h] = (0, u.SP)("NotesListCollapsed", !1),
          b = (0, p.wR)(),
          E = (0, f.Qn)(),
          T = n.map((e) => ({
            title:
              e.title?.length > 0
                ? e.title
                : (0, m.we)("#UserGameNotes_Untitled"),
            identifier: e.id,
            content: o.createElement(s.U, { note: e }),
            pageClassName: d.NotePage,
            hideTitle: !0,
          })),
          k = (0, r.W6)(),
          C = o.useCallback((e) => _(k, t, e), [k, t]);
        return o.createElement(c.Bv, {
          title: (0, m.we)("#UserGameNotes_NotesList"),
          pages: T,
          className: (0, i.A)(d.NotesPagedSettings, b && d.PinnedView),
          page: a,
          onPageRequested: C,
          bottomControls: l,
          hideList: g,
          toggleHideList: b || E ? void 0 : () => h(!g),
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
      var T = n(39941),
        k = n(11682),
        C = n.n(k),
        v = n(89994),
        w = n(12176),
        B = n(10812),
        N = n(61556),
        A = n(43691),
        M = n(44846);
      let y;
      const S = 864e5;
      function D(e) {
        return `appinfo_${e}_${A.TS.LANGUAGE}`;
      }
      function x(e) {
        return Boolean(e && Date.now() - e.timeCached < S);
      }
      function O(e) {
        const t = (0, N.KV)(),
          n = (0, N.rX)();
        return (0, v.useQuery)(
          ["appinfo", e],
          async () =>
            (function (e, t) {
              return (
                y ||
                  (y = new (C())(
                    async (n) => {
                      const o = new Map();
                      (await Promise.all(n.map((e) => t.GetObject(D(e)))))
                        .filter(x)
                        .forEach(({ value: e }) => o.set(e.appid, e));
                      const r = n.slice().filter((e) => !o.has(e));
                      if (r.length) {
                        const n = w.w.Init(B._z);
                        n.Body().set_language((0, M.sf)(A.TS.LANGUAGE)),
                          n.Body().set_appids(r);
                        const a = await B.BE.GetApps(e, n);
                        if (1 != a.GetEResult()) throw a.GetErrorMessage();
                        a.Body()
                          .toObject()
                          .apps.forEach((e) => {
                            t.StoreObject(D(e.appid), {
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
                y
              );
            })(t, n).load(e),
          { staleTime: S, enabled: !!e },
        ).data;
      }
      var F = n(26853);
      function L() {
        const { data: e, isLoading: t } = (0, l.Yh)();
        return t
          ? o.createElement(F.t, { msDelayAppear: 300 })
          : o.createElement(
              "div",
              null,
              o.createElement(
                "h1",
                null,
                (0, m.we)("#UserGameNotes_NotesList"),
              ),
              o.createElement(
                "ul",
                null,
                e.map((e) => o.createElement(P, { key: e.appid, game: e })),
              ),
            );
      }
      function P(e) {
        const { game: t } = e,
          n = O(t.appid);
        return o.createElement(
          "li",
          null,
          o.createElement(T.N_, { to: a.O.AppNotes(t.appid) }, n?.name),
        );
      }
      function I(e) {
        return o.createElement(
          r.dO,
          null,
          o.createElement(r.qh, { path: a.O.List() }, o.createElement(L, null)),
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
