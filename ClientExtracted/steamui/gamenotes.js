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
        Gap: "_19z0fjj7o0n9vAjVjvYZNU",
        Spacer: "_2m1BBIp5Ewr1TI-BkqFGLM",
        CommandButton: "_1dEi5qzSDdPOzoOQXYbNLN",
        Toggled: "_1Iw5xoXQXfmRjgjWTKbm_G",
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
        s = n(94361),
        l = n(28816),
        c = n(35488),
        i = n(45972),
        u = n(21399),
        d = n(85688);
      function m(e, t) {
        return p(t.pm_schema, t.pm_to_bbcode_config, e);
      }
      function p(e, t, n) {
        let o = n.marks,
          r = "";
        const a = t.mapNodes.get(n.type),
          { tag: s, args: l } = h(a, n.attrs);
        return (
          s && (r += (0, u.CS)(s, l)),
          n.content.forEach((n) => {
            ([r, o] = g(t, o, n.marks, r)),
              ([r, o] = (function (e, t, n, o) {
                let r;
                for (const a of n)
                  if (-1 === t.indexOf(a)) {
                    r || (r = t.slice());
                    const n = e.mapMarks.get(a.type);
                    if (((0, d.w)(n, "mark missing bbtag"), n)) {
                      r.push(a);
                      const { args: e, tag: t } = h(n, a.attrs);
                      o += (0, u.CS)(t, e || {});
                    }
                  }
                return [o, r ?? t];
              })(t, o, n.marks, r)),
              n.type.isText
                ? (r += (0, u.vE)(n.text || ""))
                : n.type == e.nodes.hard_break
                  ? (r += "\n")
                  : (r += p(e, t, n));
          }),
          ([r] = g(t, o, [], r)),
          s && (r += (0, u.op)(s)),
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
          r.length && ((0, d.w)(a.length, "no marks left to close"), a.length);
        ) {
          const t = a.pop(),
            n = e.mapMarks.get(t.type),
            { tag: s } = h(n, t.attrs);
          o += (0, u.op)(s);
          const l = r.indexOf(t);
          -1 != l && r.splice(l, 1);
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
      var k = n(81429);
      class _ {
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
      function T(e) {
        return e
          .filter((e) => e.isText)
          .map((e) => e.text)
          .join();
      }
      class C extends u.Al {
        m_schema;
        constructor(e, t) {
          super(e, () => new _(t)), (this.m_schema = t);
        }
        ParseBBCode(e) {
          const t = this.Parse(e, this.BBNodeToPMNode.bind(this), !0);
          return this.m_schema.topNodeType.createChecked(
            {},
            (function (e, t) {
              const n = [];
              let o = [];
              for (const r of t) {
                const t = r.type == e.nodes.hard_break;
                t || e.topNodeType.validContent(k.FK.from(r))
                  ? o.length
                    ? (n.push(e.nodes.paragraph.createChecked({}, o)),
                      (o = []),
                      t || n.push(r))
                    : t
                      ? n.push(e.nodes.paragraph.createChecked())
                      : n.push(r)
                  : o.push(r);
              }
              (!o.length && n.length) ||
                n.push(e.nodes.paragraph.createChecked({}, o));
              return n;
            })(this.m_schema, t),
          );
        }
        BBNodeToPMNode(e, t, ...n) {
          let o = e.BBArgsToAttrs ? e.BBArgsToAttrs(t.args || {}) : void 0;
          try {
            if (
              (!("convertContentToAttr" in e) ||
                !e.convertContentToAttr ||
                (o && o[e.convertContentToAttr]) ||
                ((o = { ...(o || {}), [e.convertContentToAttr]: T(n) }),
                "node" in e && (n = [])),
              "node" in e)
            ) {
              let t = k.FK.from(n);
              if (!e.node.validContent(t) && e.acceptNode) {
                let o = n.filter((t) => t.type == e.acceptNode);
                if (!o.length) {
                  let t = n;
                  e.acceptNode.isBlock &&
                    t.length > 1 &&
                    t[t.length - 1].type == this.m_schema.nodes.hard_break &&
                    (t = t.slice(0, -1)),
                    (o = [e.acceptNode.create(void 0, t)]);
                }
                t = k.FK.from(o);
              }
              return e.node.createAndFill(o, t) || e.node.create(o, t);
            }
            return n.map((t) => t.mark([...t.marks, e.mark.create(o)]));
          } catch (e) {
            return (
              console.error(`Error parsing [${t.tagname}] tag: ${e}`, e), []
            );
          }
        }
      }
      var v = n(87300),
        w = n(62738),
        B = n(16486),
        N = n(18305);
      function A(e, t) {
        const { from: n, $from: o, to: r, empty: a } = e.selection;
        return a
          ? !!t.isInSet(e.storedMarks || o.marks())
          : e.doc.rangeHasMark(n, r, t);
      }
      function y(e, t, n) {
        let { $from: o, to: r, node: a } = e.selection;
        return !a && r <= o.end() && (a = o.parent), !!a && a.hasMarkup(t, n);
      }
      function M(e, t, n = {}) {
        return new B.fV(e, (e, o, r, a) => {
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
      function S(e, t, n) {
        const o = { left: t, top: n },
          r = e.posAtCoords(o);
        if (r?.pos) {
          const t = e.state.doc.resolve(r.pos);
          e.dispatch(e.state.tr.setSelection(b.U3.near(t)));
        }
      }
      const D = o.createContext(null);
      function x(e) {
        return o.createElement(D.Provider, { value: e.view }, e.children);
      }
      function O(e) {
        const { schema: t, onUpdate: n } = e,
          r = o.useRef(n);
        return (
          (r.current = n),
          P(
            o.useMemo(
              () =>
                new b.k_({
                  view: (e) => ({ update: (...e) => r.current(...e) }),
                }),
              [],
            ),
          ),
          P(
            o.useMemo(
              () =>
                (function (e) {
                  const t = (0, v.st)(
                    v.I$,
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
                  return (0, w.w)({
                    "Mod-z": E.tN,
                    "Mod-y": E.ZS,
                    Backspace: B.dv,
                    "Mod-Enter": t,
                    "Shift-Enter": t,
                    "Mod-b": (0, v.wh)(e.marks.strong),
                    "Mod-i": (0, v.wh)(e.marks.italic),
                    Enter: (0, N.wn)(e.nodes.list_item),
                    "Mod-[": (0, N.T2)(e.nodes.list_item),
                    "Mod-]": (0, N.$B)(e.nodes.list_item),
                    "Shift-Ctrl-1": (0, v.y_)(e.nodes.heading, { level: 1 }),
                    "Shift-Ctrl-2": (0, v.y_)(e.nodes.heading, { level: 2 }),
                    "Shift-Ctrl-3": (0, v.y_)(e.nodes.heading, { level: 3 }),
                    "Shift-Ctrl-0": (0, v.y_)(e.nodes.paragraph),
                  });
                })(t),
              [t],
            ),
          ),
          P(o.useMemo(() => (0, w.w)(v.RV), [])),
          P(
            o.useMemo(
              () =>
                (function (e) {
                  return (0, B.sM)({
                    rules: [
                      (0, B.tG)(
                        /^(\d+)\.\s$/,
                        e.nodes.ordered_list,
                        (e) => ({ order: parseInt(e[1]) }),
                        (e, t) =>
                          t.childCount + t.attrs.order == parseInt(e[1]),
                      ),
                      (0, B.tG)(/^\s*([-+*])\s$/, e.nodes.bullet_list),
                      M(/\*([^*]+)\*/, e.marks.strong),
                      M(/_([^_]+)_/, e.marks.italic),
                      M(/~([^~]+)~/, e.marks.strike),
                      M(/`([^`]+)`/, e.marks.code),
                      (0, B.JJ)(/^```$/, e.nodes.code_block),
                      (0, B.JJ)(/^(#{1,5})\s$/, e.nodes.heading, (e) => ({
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
        const t = o.useContext(D);
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
      var L = n(36142),
        F = n(28091),
        I = n(59727),
        G = n(54644),
        U = n(46108),
        R = n(14391);
      function $() {
        const [e, t] = o.useState(),
          [n, r] = o.useState(),
          [a, s] = o.useState();
        if (
          (P(
            o.useMemo(
              () =>
                new b.k_({
                  props: {
                    handleDOMEvents: {
                      mouseover: (e, n) => {
                        const o = n.target;
                        if ((0, G.kD)(o) && "A" == o.nodeName) {
                          const e = o.getBoundingClientRect();
                          t(e.left + e.width / 2), r(e.bottom + 2), s(o);
                        } else s(void 0);
                        return !1;
                      },
                      mouseleave: (e, t) => (s(void 0), !1),
                    },
                  },
                }),
              [],
            ),
          ),
          !a)
        )
          return null;
        const l = a.getAttribute("href");
        return o.createElement(
          K,
          { top: n, left: e },
          o.createElement("div", { className: R.Link }, l),
          o.createElement(
            "div",
            { className: R.LinkHelp },
            (0, U.we)("#UserGameNotes_ClickToOpenLink"),
          ),
        );
      }
      function K(e) {
        const { top: t, left: n, children: r } = e,
          [a, s] = o.useState(0),
          l = o.useRef();
        o.useLayoutEffect(() => {
          s(l.current.getBoundingClientRect().width);
        }, [t, n, r]);
        const c = { top: `${t}px`, left: `${Math.max(n - a / 2, 12)}px` };
        return o.createElement(
          "div",
          { className: R.Hover, style: c, ref: l },
          r,
        );
      }
      var H = n(43397),
        V = n(90765),
        q = n(52451),
        W = n(53807),
        j = n(72476),
        z = n(76627);
      function Z(e) {
        const {
            schemaConfig: t,
            bbcode: n,
            className: r,
            onUpdate: a,
            refView: s,
            onClickURL: l,
            bSpellcheckEnabled: c = !0,
            panelProps: i,
            children: u,
            dataKey: d,
          } = e,
          [m, p] = o.useState(),
          g = o.useRef(),
          h = o.useRef();
        h.current = l || X;
        const _ = o.useCallback(
          (e) => {
            if (!e) return void g.current?.destroy();
            const n = g.current;
            n && n.destroy(),
              (g.current = new f.Lz(e, {
                state: n?.state ?? b.$t.create({ schema: t.pm_schema }),
                handleClickOn: (...e) =>
                  (function (e, t, n, o, r, a, s, l) {
                    if (l && (s.ctrlKey || 1 == s.button)) {
                      const n = r
                        .resolve(o - a)
                        .marks()
                        .find((t) => t.type == e.marks.link);
                      if (n)
                        return t(n.attrs.href, s.view), s.preventDefault(), !0;
                    }
                    return !1;
                  })(t.pm_schema, h.current, ...e),
                clipboardTextParser: (...e) =>
                  (function (e, t, n, o, r) {
                    let a,
                      s = [];
                    for (; (a = t.match(W.O9)); )
                      a.index > 0 && s.push(e.text(t.substring(0, a.index))),
                        s.push(
                          e.text(a[0], [
                            e.marks.link.create({ href: (0, W.jT)(a[0]) }),
                          ]),
                        ),
                        (t = t.substring(a.index + a[0].length));
                    t.length && s.push(e.text(t));
                    return new k.Ji(k.FK.from(s), n.start(), n.end());
                  })(t.pm_schema, ...e),
              })),
              p(g.current);
          },
          [t],
        );
        o.useEffect(() => {
          m &&
            m.updateState(
              (function (e, t, n) {
                const o = (0, E.b6)(),
                  r = o.spec.key?.get(n),
                  a = [...n.plugins.filter((e) => e != r), o];
                return b.$t.create({ schema: t, doc: e, plugins: a });
              })(
                (function (e, t) {
                  return new C(t.bbcode_dictionary, t.pm_schema).ParseBBCode(e);
                })(n, t),
                t.pm_schema,
                m.state,
              ),
            );
        }, [t, n, m, d]),
          (0, q.D5)(s, m);
        const {
            refDiv: T,
            onActivate: v,
            onGamepadDirection: w,
          } = (function (e) {
            const t = (0, j.rP)(),
              n = o.useRef(),
              r = o.useCallback(
                (e) => {
                  (0, I.iv)(e, t.IN_VR);
                },
                [t.IN_VR],
              ),
              a = (0, I.FN)(
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
                      S(e.current, t.left, t.top);
                      break;
                    }
                  }
                }
              }, [a, e]),
              l = o.useCallback((e) => e.currentTarget == e.target, []),
              c = (0, F.ak)(n, null, null, l);
            return { refDiv: n, onActivate: s, onGamepadDirection: c };
          })(g),
          B = (0, q.Ue)(T, _);
        return o.createElement(
          x,
          { view: m },
          o.createElement(L.Z, {
            key: `editordiv_${c}`,
            className: (0, V.A)(r, z.Container),
            ref: B,
            spellCheck: c,
            focusable: !0,
            onActivate: v,
            onOKActionDescription: (0, U.we)("#UserGameNotes_Edit"),
            onGamepadDirection: w,
            ...i,
          }),
          o.createElement(O, { onUpdate: a, schema: t.pm_schema }),
          o.createElement($, null),
          u,
        );
      }
      function X(e, t) {
        (0, H.EP)(t, e);
      }
      var J = n(98995),
        Q = n(10325),
        Y = n(49787),
        ee = n.n(Y);
      function te(e, t, n = 0) {
        return () => [e, { class: t }, n];
      }
      const ne = {
          paragraph: {
            content: "inline*",
            group: "block",
            parseDOM: [{ tag: "p" }],
            toDOM: te("p", (0, V.A)("pm_paragraph", ee().Paragraph)),
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
                  `BB_Header${e.attrs.level} ` + ee()[`Header${e.attrs.level}`],
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
            atom: !0,
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
              return ["img", { src: t, alt: n, title: o, class: ee().Image }];
            },
            bbCode: {
              tag: "img",
              BBArgsToAttrs: (e) => ({ src: e.src }),
              AttrsToBBArgs: (e) => ({ args: { src: e.src } }),
              convertContentToAttr: "src",
            },
          },
          bullet_list: {
            ...N.fF,
            content: "list_item+",
            group: "block",
            toDOM: te("ul", ee().List),
            bbCode: { tag: "list" },
          },
          ordered_list: {
            ...N.o8,
            content: "list_item+",
            group: "block",
            toDOM: te("ol", ee().OrderedList),
            bbCode: { tag: "olist" },
          },
          list_item: {
            ...N.Aw,
            content: "paragraph block*",
            toDOM: te("li", ee().ListItem),
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
              { class: ee().CodeBlock },
              ["code", { class: ee().Code }, 0],
            ],
            bbCode: { tag: "code" },
          },
        },
        oe = {
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
            toDOM: te("b", (0, V.A)("BB_Bold", ee().Bold)),
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
            toDOM: te("i", (0, V.A)("BB_Italic", ee().Italic)),
            bbCode: { tag: "i" },
          },
          underline: {
            parseDOM: [{ tag: "u" }, { style: "text-decoration=underline" }],
            toDOM: te("u", (0, V.A)("BB_Underline", ee().Underline)),
            bbCode: { tag: "u" },
          },
          strike: {
            parseDOM: [{ style: "text-decoration=line-through" }],
            toDOM: te("span", (0, V.A)("BB_Strike", ee().Strike)),
            bbCode: { tag: "strike" },
          },
          code: {
            parseDOM: [{ tag: "code" }],
            toDOM: te("code", (0, V.A)("BB_Code", ee().Code)),
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
              convertContentToAttr: "href",
            },
          },
        };
      const re = { nodes: { ...ne }, marks: { ...oe } },
        ae = new (class {
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
            (this.m_ProseMirrorSchema = new k.Sj({ nodes: t, marks: r })),
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
        })(re);
      var se = n(90601);
      const le = "/images/image_error.svg";
      function ce(e) {
        const { uploadImage: t, nodeType: n, nMaxImageSize: r = ue } = e;
        return (
          P(
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
                              src: le,
                              title: (0, U.we)("#UserGameNotes_ImageTooLarge"),
                            }),
                          ];
                          return new k.Ji(k.FK.from(t), 0, 0);
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
                                ie(
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
      function ie(e, t, n) {
        n.state.doc.descendants((o, r) => {
          if ("image" === o.type.name && o.attrs.src === e) {
            const e = n.state.tr.setNodeAttribute(r, "src", t);
            n.dispatch(e);
          }
        });
      }
      const ue = 1048576;
      var de = n(71594),
        me = n(79926);
      const pe = () => o.useContext(he);
      function ge(e) {
        const { view: t, refUpdateToolbar: n, children: r } = e,
          a = o.useRef();
        a.current || (a.current = new me.lu()),
          o.useEffect(
            () => (
              (0, q.cZ)(n, () => a.current.Dispatch(t)),
              () => (0, q.cZ)(n, void 0)
            ),
            [t, n],
          );
        const s = o.useMemo(() => ({ callbacks: a.current, view: t }), [t]);
        return t ? o.createElement(he.Provider, { value: s }, r) : null;
      }
      const he = o.createContext(void 0);
      function fe() {
        return o.createElement("div", { className: z.Gap });
      }
      function be() {
        return o.createElement("div", { className: z.Spacer });
      }
      function Ee(e) {
        return o.createElement(
          L.Z,
          { className: (0, V.A)(z.ToolbarRow), "flow-children": "row" },
          e.children,
        );
      }
      function ke(e) {
        const { nodeType: t, tooltip: n, attrs: r, children: a } = e,
          { callbacks: s, view: l } = pe(),
          [c, i] = o.useState(() => y(l.state, t, r)),
          u = o.useCallback((e) => i(y(e.state, t, r)), [t, r]);
        (0, q.hL)(s, u);
        const d = o.useMemo(() => v.y_(t, r), [r, t]);
        return o.createElement(Ce, {
          command: d,
          tooltip: n,
          toggled: c,
          children: a,
        });
      }
      function _e(e) {
        const { mark: t, tooltip: n, children: r } = e,
          { callbacks: a, view: s } = pe(),
          [l, c] = o.useState(() => A(s.state, t)),
          i = o.useCallback((e) => c(A(e.state, t)), [t]);
        (0, q.hL)(a, i);
        const u = o.useMemo(() => v.wh(t), [t]);
        return o.createElement(Ce, {
          command: u,
          tooltip: n,
          toggled: l,
          children: r,
        });
      }
      function Te(e) {
        const { fnEnabledCheck: t, ...n } = e,
          { callbacks: r, view: a } = pe(),
          [s, l] = o.useState(() => t(a)),
          c = o.useCallback((e) => l(t(e)), [t]);
        return (0, q.hL)(r, c), o.createElement(Ce, { ...n, disabled: !s });
      }
      function Ce(e) {
        const {
            command: t,
            toggled: n,
            tooltip: r,
            disabled: a,
            children: s,
          } = e,
          { view: c } = pe();
        return o.createElement(
          J.Gq,
          { toolTipContent: r, bDisabled: !r, direction: "bottom" },
          o.createElement(
            l.$n,
            {
              className: (0, V.A)(z.CommandButton, n && z.Toggled),
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
      function ve(e) {
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
              className: (0, V.A)(z.CommandButton, n && z.Toggled),
              onMouseDown: (e) => {
                e.preventDefault(), t();
              },
              disabled: !0 === a,
            },
            s,
          ),
        );
      }
      function we(e) {
        const { schema: t, children: n } = e,
          { callbacks: r, view: a } = pe(),
          [s, c] = o.useState(() => A(a.state, t.marks.link)),
          u = o.useCallback((e) => c(A(e.state, t.marks.link)), [t]);
        (0, q.hL)(r, u);
        const [d, m, p] = (0, q.uD)();
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            i.EN,
            { active: d },
            o.createElement(Be, {
              schema: t,
              active: d,
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
                className: (0, V.A)(z.CommandButton, s && z.Toggled),
                onMouseDown: (e) => {
                  e.preventDefault(), m();
                },
                title: (0, U.we)("#FormattingToolbar_InsertLink"),
              },
              n,
            ),
          ),
        );
      }
      const Be = o.memo(function (e) {
        const { schema: t, active: n, closeModal: r, view: a } = e,
          [s, c] = o.useState(""),
          [u, d] = o.useState(""),
          m = o.useRef(),
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
                  ? (d(e),
                    m.current.Focus(),
                    window.setTimeout(() => {
                      m.current.element.select();
                    }, 0))
                  : 0 == e.length
                    ? m.current.Focus()
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
                    t.text(s || u, [t.marks.link.create({ href: u })]),
                  ),
                ),
                  a.focus(),
                  r();
              },
              closeModal: r,
              strTitle: (0, U.we)("#FormattingToolbar_InsertLink"),
              strOKButtonText: (0, U.we)("#FormattingToolbar_InsertLink"),
              bOKDisabled: 0 == u.length,
            },
            o.createElement(l.pd, {
              ref: m,
              value: s,
              onChange: (e) => c(e.currentTarget.value),
              label: (0, U.we)("#FormattingToolbar_LinkText"),
            }),
            o.createElement(l.pd, {
              ref: p,
              value: u,
              onChange: (e) => d(e.currentTarget.value),
              label: (0, U.we)("#FormattingToolbar_LinkAddress"),
            }),
          )
        );
      });
      function Ne() {
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            Te,
            {
              tooltip: "#FormattingToolbar_Undo",
              command: E.tN,
              fnEnabledCheck: Ae,
            },
            o.createElement(c.Undo, null),
          ),
          o.createElement(
            Te,
            {
              tooltip: "#FormattingToolbar_Redo",
              command: E.ZS,
              fnEnabledCheck: ye,
            },
            o.createElement(c.Redo, null),
          ),
        );
      }
      function Ae(e) {
        return E.mk(e.state) > 0;
      }
      function ye(e) {
        return E.mL(e.state) > 0;
      }
      function Me(e) {
        const { schema: t } = e;
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            _e,
            { tooltip: "#FormattingToolbar_Bold", mark: t.marks.strong },
            o.createElement(c.TextBold, null),
          ),
          o.createElement(
            _e,
            { tooltip: "#FormattingToolbar_Italic", mark: t.marks.italic },
            o.createElement(c.TextItalic, null),
          ),
          o.createElement(
            _e,
            {
              tooltip: "#FormattingToolbar_Underline",
              mark: t.marks.underline,
            },
            o.createElement(c.TextUnderline, null),
          ),
          "strike" in t.marks &&
            o.createElement(
              _e,
              { tooltip: "#FormattingToolbar_Strike", mark: t.marks.strike },
              o.createElement(c.TextStrikethrough, null),
            ),
          "code" in t.marks &&
            o.createElement(
              _e,
              { tooltip: "#FormattingToolbar_InlineCode", mark: t.marks.code },
              o.createElement(c.TextCode, null),
            ),
        );
      }
      function Se(e) {
        const { schema: t } = e;
        return o.createElement(
          ke,
          {
            tooltip: "#FormattingToolbar_Paragraph",
            nodeType: t.nodes.paragraph,
          },
          o.createElement(c.TextParagraph, null),
        );
      }
      function De(e) {
        const { schema: t, maxLevel: n = 1, levels: r } = e,
          a = n + r - 1;
        return o.createElement(
          o.Fragment,
          null,
          n <= 1 &&
            o.createElement(
              ke,
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
              ke,
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
              ke,
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
              ke,
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
              ke,
              {
                tooltip: "#FormattingToolbar_HeadingLevel5",
                nodeType: t.nodes.heading,
                attrs: { level: 5 },
              },
              o.createElement(c.TextH5, null),
            ),
        );
      }
      function xe(e) {
        const { schema: t } = e,
          { callbacks: n, view: r } = pe(),
          a = o.useCallback(
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
          [s, l] = o.useState(() => a(r));
        return (
          (0, q.hL)(
            n,
            o.useCallback((e) => l(a(e)), [a]),
          ),
          o.createElement(
            o.Fragment,
            null,
            o.createElement(
              Ce,
              {
                tooltip: "#FormattingToolbar_BulletedList",
                toggled: s,
                command: N.Sd(t.nodes.bullet_list),
              },
              o.createElement(c.TextBullets, null),
            ),
            o.createElement(
              Ce,
              {
                tooltip: "#FormattingToolbar_OutdentList",
                disabled: !s,
                command: N.T2(t.nodes.list_item),
              },
              o.createElement(c.TextOutdent, null),
            ),
            o.createElement(
              Ce,
              {
                tooltip: "#FormattingToolbar_IndentList",
                disabled: !s,
                command: N.$B(t.nodes.list_item),
              },
              o.createElement(c.TextIndent, null),
            ),
          )
        );
      }
      function Oe(e) {
        const { schema: t } = e;
        return o.createElement(
          we,
          { schema: t },
          o.createElement(c.TextLink, null),
        );
      }
      function Pe(e) {
        const { bSpellcheckEnabled: t, setSpellcheckEnabled: n } = e;
        return o.createElement(
          ve,
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
      var Le = n(51076);
      function Fe(e) {
        const {
            schema: t,
            view: n,
            refUpdateToolbar: r,
            className: a,
            bSpellcheckEnabled: s,
            setSpellcheckEnabled: l,
          } = e,
          [i, u] = (0, Le.SP)("FormattingToolbar_Expanded", !1);
        return o.createElement(
          ge,
          { refUpdateToolbar: r, view: n },
          o.createElement(
            "div",
            { className: (0, V.A)(z.Toolbar, a) },
            o.createElement(
              Ee,
              null,
              o.createElement(Ne, null),
              o.createElement(fe, null),
              o.createElement(Me, { schema: t }),
              o.createElement(be, null),
              o.createElement(
                ve,
                {
                  onClick: () => u(!i),
                  tooltip: "#FormattingToolbar_ExpandOptions",
                },
                o.createElement(c.Chevron, { direction: i ? "up" : "down" }),
              ),
            ),
            o.createElement(
              de.R,
              { visible: i },
              o.createElement(
                Ee,
                null,
                o.createElement(Se, { schema: t }),
                o.createElement(De, { schema: t, levels: 5 }),
                o.createElement(
                  ke,
                  {
                    nodeType: t.nodes.code_block,
                    tooltip: (0, U.we)("#FormattingToolbar_CodeBlock"),
                  },
                  o.createElement(c.TextCodeBlock, null),
                ),
                o.createElement(fe, null),
                o.createElement(xe, { schema: t }),
                o.createElement(fe, null),
                o.createElement(Oe, { schema: t }),
                o.createElement(be, null),
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
      const Ie = 15;
      function Ge(e) {
        const { note: t } = e,
          [n, l] = o.useState(!1),
          [c, i] = o.useState(),
          u = o.useRef(),
          d = o.useRef(),
          p = o.useRef(t.content),
          g = o.useRef(!1),
          h = (0, a.$G)(),
          f = (0, a.EC)(),
          b = (0, a.WA)(),
          E = (0, r.H0)(t.appid),
          k = (0, j.Qn)();
        p.current == t.content || g.current || (p.current = t.content);
        const _ = p.current,
          T = (0, r.df)(),
          C = o.useCallback((e, t) => {
            u.current && u.current(),
              t.doc &&
                t.doc != e.state.doc &&
                (g.current ||
                  ((g.current = !0),
                  s.y.ReportTrackedAction("/GameNotes/NoteModified")),
                (d.current = () => ({
                  title: Ke(e.state.doc),
                  bbcode: m(e.state.doc, ae),
                })),
                l(!0));
          }, []);
        o.useEffect(() => {
          if (!n) return;
          let e = d.current;
          const o = () => {
              if (e) {
                const { title: n, bbcode: o } = e();
                (t.not_persisted && !o?.length) ||
                  T.mutate({ note: t, title: n, bbcode: o }),
                  l(!1);
              }
              (e = void 0), (d.current = void 0);
            },
            r = window.setTimeout(o, 1e3 * Ie);
          return () => {
            window.clearTimeout(r), o();
          };
        }, [T, n, t]),
          o.useEffect(() => {
            c && c.focus();
          }, [c]);
        const v = (0, a.qq)(),
          w = (0, r.Bc)(t, v),
          B = {
            onSecondaryButton: () => w.mutate(),
            onSecondaryActionDescription: (0, U.we)(
              "#UserGameNotes_DeleteNote",
            ),
          };
        return o.createElement(
          "div",
          { className: Q.NoteEditorArea },
          !k &&
            o.createElement(Fe, {
              schema: ae.pm_schema,
              view: c,
              refUpdateToolbar: u,
              className: Q.Toolbar,
              bSpellcheckEnabled: f,
              setSpellcheckEnabled: b,
            }),
          o.createElement(
            Z,
            {
              schemaConfig: ae,
              className: Q.EditorInput,
              bbcode: _,
              onUpdate: C,
              refView: i,
              onClickURL: h,
              bSpellcheckEnabled: f,
              panelProps: B,
            },
            o.createElement(ce, {
              uploadImage: E,
              nodeType: ae.pm_schema.nodes.image,
            }),
          ),
          !k && o.createElement(Ue, { note: t, bDirty: n }),
        );
      }
      function Ue(e) {
        const { note: t, bDirty: n } = e,
          [s, i, u] = (0, q.uD)(!1),
          d = (0, a.O8)(),
          m = (0, a.qq)(),
          p = (0, r.Bc)(t, m),
          g = o.useCallback(() => {
            !n && t.not_persisted ? p.mutate() : i();
          }, [n, t, p, i]);
        return o.createElement(
          "div",
          { className: Q.NoteActions },
          s && o.createElement($e, { note: t, closeModal: u, deleteNote: p }),
          o.createElement(
            J.he,
            { toolTipContent: "#UserGameNotes_DeleteNote", direction: "top" },
            o.createElement(
              l.$n,
              { onClick: g },
              o.createElement(c.Trash, null),
            ),
          ),
          d && o.createElement(Re, { bDirty: n }),
        );
      }
      function Re(e) {
        const { bDirty: t } = e,
          n = (0, a.qq)();
        return t
          ? o.createElement(
              l.jn,
              { onClick: () => n(), className: Q.CloseWindowButton },
              (0, U.we)("#Button_SaveAndClose"),
            )
          : o.createElement(
              l.$n,
              { onClick: () => n(), className: Q.CloseWindowButton },
              (0, U.we)("#Button_Close"),
            );
      }
      function $e(e) {
        const { note: t, closeModal: n, deleteNote: r } = e;
        return o.createElement(
          i.EN,
          { active: !0 },
          o.createElement(i.o0, {
            strTitle: (0, U.we)("#UserGameNotes_DeleteNote"),
            strDescription: (0, U.we)("#UserGameNotes_PromptDelete"),
            onOK: () => r.mutate(),
            bOKDisabled: r.isPending,
            strOKButtonText: (0, U.we)("#Button_Delete"),
            closeModal: n,
          }),
        );
      }
      function Ke(e) {
        let t = "";
        for (let n = 0; n < e.content.childCount; n++) {
          const o = e.content.child(n);
          if (o.isText) t += o.text;
          else {
            if (((t = t.trim()), t.length > 4)) return t;
            if (((t = Ke(o)), t.length > 4)) return t;
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
        u = n(45264),
        d = n(25789),
        m = n(28816),
        p = n(45972),
        g = n(46108),
        h = n(39889);
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
            ? s.createElement(k, { popup: t, refPopup: r })
            : s.createElement(b, { popup: t, refPopup: r })
        );
      }
      function b(e) {
        const { popup: t, refPopup: n } = e,
          o = (0, g.we)("#GameNotes_NoteForGame", t.display_name);
        return s.createElement(
          c.p,
          { body_class: h.GameNotesPopup },
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
            s.createElement(m.Y9, null, o),
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
          { data: o } = (0, u.P6)(t, n);
        return o ? s.createElement(d.U, { note: o }) : null;
      }
      function k(e) {
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
        l = n(25789),
        c = n(28816),
        i = n(90765),
        u = n(46108),
        d = n(51076),
        m = n(10325),
        p = n(38602),
        g = n(35488),
        h = n(98995),
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
          { data: i, isLoading: u } = (0, s.vg)(t);
        let d;
        i && n && (d = i.find((e) => e.id === n)),
          o.useLayoutEffect(() => {
            !i ||
              (n && i.find((e) => e.id === n)) ||
              (i.length > 0 && i[0].id ? k(a, t, i[0].id) : k(a, t, l()));
          }, [a, t, n, i, l]);
        const p = o.createElement(
          h.he,
          { toolTipContent: "#UserGameNotes_NewNote", direction: "top" },
          o.createElement(
            c.$n,
            {
              className: m.NewNoteButton,
              onClick: () => {
                const e = l();
                k(a, t, e);
              },
            },
            o.createElement(g.TextNewNote, null),
          ),
        );
        return i
          ? o.createElement(E, {
              noteParent: t,
              notes: i,
              activeNoteID: d?.id,
              actions: p,
            })
          : null;
      }
      function E(e) {
        const { noteParent: t, notes: n, activeNoteID: a, actions: s } = e,
          [g, h] = (0, d.SP)("NotesListCollapsed", !1),
          b = (0, p.wR)(),
          E = (0, f.Qn)(),
          _ = n.map((e) => ({
            title:
              e.title?.length > 0
                ? e.title
                : (0, u.we)("#UserGameNotes_Untitled"),
            identifier: e.id,
            content: o.createElement(l.U, { note: e }),
            pageClassName: m.NotePage,
            hideTitle: !0,
          })),
          T = (0, r.W6)(),
          C = o.useCallback((e) => k(T, t, e), [T, t]);
        return o.createElement(c.Bv, {
          title: (0, u.we)("#UserGameNotes_NotesList"),
          pages: _,
          className: (0, i.A)(m.NotesPagedSettings, b && m.PinnedView),
          page: a,
          onPageRequested: C,
          bottomControls: s,
          hideList: g,
          toggleHideList: b || E ? void 0 : () => h(!g),
        });
      }
      function k(e, t, n) {
        let o;
        (o =
          "appid" in t
            ? a.O.AppNotes(t.appid, n)
            : a.O.ShortcutNotes(t.shortcut, n)),
          e.replace(o, e.location.state);
      }
      var _ = n(39941),
        T = n(11682),
        C = n.n(T),
        v = n(61416),
        w = n(12176),
        B = n(10812),
        N = n(46382),
        A = n(43691),
        y = n(44846);
      let M;
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
        return (0, v.I)({
          queryKey: ["appinfo", e],
          queryFn: async () =>
            (function (e, t) {
              return (
                M ||
                  (M = new (C())(
                    async (n) => {
                      const o = new Map();
                      (await Promise.all(n.map((e) => t.GetObject(D(e)))))
                        .filter(x)
                        .forEach(({ value: e }) => o.set(e.appid, e));
                      const r = n.slice().filter((e) => !o.has(e));
                      if (r.length) {
                        const n = w.w.Init(B._z);
                        n.Body().set_language((0, y.sf)(A.TS.LANGUAGE)),
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
                M
              );
            })(t, n).load(e),
          staleTime: S,
          enabled: !!e,
        }).data;
      }
      var P = n(26853);
      function L() {
        const { data: e, isLoading: t } = (0, s.Yh)();
        return t
          ? o.createElement(P.t, { msDelayAppear: 300 })
          : o.createElement(
              "div",
              null,
              o.createElement(
                "h1",
                null,
                (0, u.we)("#UserGameNotes_NotesList"),
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
          n = O(t.appid);
        return o.createElement(
          "li",
          null,
          o.createElement(_.N_, { to: a.O.AppNotes(t.appid) }, n?.name),
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
