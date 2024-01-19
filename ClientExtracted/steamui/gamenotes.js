(self.webpackChunksteamui = self.webpackChunksteamui || []).push([
  [6838],
  {
    12041: (e) => {
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
    64452: (e) => {
      e.exports = {
        Hover: "pmhover_Hover_3tNcT",
        Link: "pmhover_Link_ovQsF",
        LinkHelp: "pmhover_LinkHelp_2Az4l",
      };
    },
    94950: (e) => {
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
    97896: (e) => {
      e.exports = { GameNotesPopup: "gamenotespopups_GameNotesPopup_3hIt9" };
    },
    94494: (e, t, n) => {
      "use strict";
      n.d(t, { X: () => Oe });
      var o = n(27378),
        r = n(47228),
        a = n(39459),
        l = n(98571),
        s = n(62923),
        i = n(62914),
        c = n(79509),
        u = n(52833),
        d = n(70732),
        m = n(55751),
        p = n(35864),
        g = n.n(p),
        f = n(35484);
      function h(e, t) {
        return () => [e, { class: t }, 0];
      }
      const b = {
          doc: { content: "block+" },
          text: { group: "inline" },
          paragraph: {
            content: "inline*",
            group: "block",
            parseDOM: [{ tag: "p" }],
            toDOM: h("p", (0, f.default)("pm_paragraph", g().Paragraph)),
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
                  `BB_Header${e.attrs.level} ` + g()[`Header${e.attrs.level}`],
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
              return ["img", { src: t, alt: n, title: o, class: g().Image }];
            },
          },
          hard_break: {
            inline: !0,
            group: "inline",
            selectable: !1,
            parseDOM: [{ tag: "br" }],
            toDOM: () => ["br"],
          },
          bullet_list: Object.assign(Object.assign({}, m.iI), {
            content: "list_item+",
            group: "block",
            toDOM: h("ul", g().List),
          }),
          ordered_list: Object.assign(Object.assign({}, m.dq), {
            content: "list_item+",
            group: "block",
            toDOM: h("ol", g().OrderedList),
          }),
          list_item: Object.assign(Object.assign({}, m.qb), {
            content: "paragraph block*",
            toDOM: h("li", g().ListItem),
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
              { class: g().CodeBlock },
              ["code", { class: g().Code }, 0],
            ],
          },
        },
        E = {
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
            toDOM: h("b", (0, f.default)("BB_Bold", g().Bold)),
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
            toDOM: h("i", (0, f.default)("BB_Italic", g().Italic)),
          },
          underline: {
            parseDOM: [{ tag: "u" }, { style: "text-decoration=underline" }],
            toDOM: h("u", (0, f.default)("BB_Underline", g().Underline)),
          },
          strike: {
            parseDOM: [{ style: "text-decoration=line-through" }],
            toDOM: h("span", (0, f.default)("BB_Strike", g().Strike)),
          },
          code: {
            parseDOM: [{ tag: "code" }],
            toDOM: h("code", (0, f.default)("BB_Code", g().Code)),
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
        k = new d.V_({ nodes: b, marks: E });
      function v(e) {
        return { tag: `h${e.level}` };
      }
      const T = new Map([
        [
          "p",
          {
            Constructor: { node: k.nodes.paragraph },
            autocloses: !0,
            skipFollowingNewline: !0,
          },
        ],
        [
          "h1",
          {
            Constructor: {
              node: k.nodes.heading,
              BBArgsToAttrs: () => ({ level: 1 }),
              AttrsToBBArgs: v,
            },
            skipFollowingNewline: !0,
          },
        ],
        [
          "h2",
          {
            Constructor: {
              node: k.nodes.heading,
              BBArgsToAttrs: () => ({ level: 2 }),
              AttrsToBBArgs: v,
            },
            skipFollowingNewline: !0,
          },
        ],
        [
          "h3",
          {
            Constructor: {
              node: k.nodes.heading,
              BBArgsToAttrs: () => ({ level: 3 }),
              AttrsToBBArgs: v,
            },
            skipFollowingNewline: !0,
          },
        ],
        [
          "h4",
          {
            Constructor: {
              node: k.nodes.heading,
              BBArgsToAttrs: () => ({ level: 4 }),
              AttrsToBBArgs: v,
            },
            skipFollowingNewline: !0,
          },
        ],
        [
          "h5",
          {
            Constructor: {
              node: k.nodes.heading,
              BBArgsToAttrs: () => ({ level: 5 }),
              AttrsToBBArgs: v,
            },
            skipFollowingNewline: !0,
          },
        ],
        ["b", { Constructor: { mark: k.marks.strong } }],
        ["i", { Constructor: { mark: k.marks.italic } }],
        ["u", { Constructor: { mark: k.marks.underline } }],
        ["strike", { Constructor: { mark: k.marks.strike } }],
        [
          "url",
          {
            Constructor: {
              mark: k.marks.link,
              BBArgsToAttrs: (e) => ({ href: e[""] }),
              AttrsToBBArgs: (e) => ({ args: { "": e.href } }),
            },
          },
        ],
        [
          "list",
          {
            Constructor: { node: k.nodes.bullet_list },
            skipFollowingNewline: !0,
          },
        ],
        [
          "olist",
          {
            Constructor: { node: k.nodes.ordered_list },
            skipFollowingNewline: !0,
          },
        ],
        [
          "*",
          {
            Constructor: { node: k.nodes.list_item },
            skipFollowingNewline: !0,
            autocloses: !0,
          },
        ],
        [
          "code",
          {
            Constructor: { node: k.nodes.code_block },
            skipFollowingNewline: !0,
          },
        ],
        ["c", { Constructor: { mark: k.marks.code } }],
        [
          "img",
          {
            Constructor: {
              node: k.nodes.image,
              BBArgsToAttrs: (e) => ({ src: e.src }),
              AttrsToBBArgs: (e) => ({ args: { src: e.src } }),
            },
          },
        ],
      ]);
      class _ {
        constructor() {
          this.m_nodes = [];
        }
        AppendText(e, t) {
          let n = 0;
          for (let t = e.indexOf("\n", n); -1 !== t; t = e.indexOf("\n", n))
            n != t && this.m_nodes.push(k.text(e.substring(n, t))),
              this.m_nodes.push(k.nodes.hard_break.create()),
              (n = t + 1);
          n < e.length && this.m_nodes.push(k.text(e.substring(n)));
        }
        AppendNode(e) {
          Array.isArray(e) ? this.m_nodes.push(...e) : this.m_nodes.push(e);
        }
        GetElements() {
          return this.m_nodes;
        }
      }
      function C(e, t, ...n) {
        const o = e.BBArgsToAttrs ? e.BBArgsToAttrs(t.args) : void 0;
        return "node" in e
          ? e.node.create(o, n)
          : n.map((t) => t.mark([...t.marks, e.mark.create(o)]));
      }
      class N extends u.AX {
        constructor(e) {
          super(e, () => new _());
        }
        ParseBBCode(e) {
          const t = this.Parse(e, C, !0);
          return k.topNodeType.create(
            {},
            (function (e) {
              let t = [],
                n = [];
              for (const o of e)
                if (o.isText) n.push(o);
                else {
                  const e = o.type == k.nodes.hard_break;
                  n.length
                    ? (t.push(k.nodes.paragraph.create({}, n)),
                      (n = []),
                      e || t.push(o))
                    : e
                    ? t.push(k.nodes.paragraph.create())
                    : t.push(o);
                }
              return t;
            })(t),
          );
        }
      }
      var B = n(56815),
        w = n(9891);
      function L(e, t = T) {
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
          A(n, e)
        );
      }
      function A(e, t) {
        let n = t.marks,
          o = "";
        const r = e.mapNodes.get(t.type),
          { tag: a, args: l } = P(r, t.attrs);
        return (
          a && (o += (0, u.lW)(a, l)),
          t.content.forEach((t) => {
            ([o, n] = y(e, n, t.marks, o)),
              ([o, n] = (function (e, t, n, o) {
                let r;
                for (const a of n)
                  if (-1 === t.indexOf(a)) {
                    r || (r = t.slice());
                    const n = e.mapMarks.get(a.type);
                    r.push(a);
                    const { args: l, tag: s } = P(n, a.attrs);
                    o += (0, u.lW)(s, l || {});
                  }
                return [o, null != r ? r : t];
              })(e, n, t.marks, o)),
              t.type.isText
                ? (o += (0, u.bU)(t.text))
                : t.type == k.nodes.hard_break
                ? (o += "\n")
                : (o += A(e, t));
          }),
          ([o] = y(e, n, [], o)),
          a && (o += (0, u.Ec)(a)),
          o
        );
      }
      function y(e, t, n, o) {
        const r = [];
        for (const e of t) -1 === n.indexOf(e) && r.push(e);
        if (!r.length) return [o, t];
        const a = t.slice();
        for (
          ;
          r.length &&
          ((0, w.AssertMsg)(a.length, "no marks left to close"), a.length);

        ) {
          const t = a.pop(),
            n = e.mapMarks.get(t.type),
            { tag: l } = P(n, t.attrs);
          (o += (0, u.Ec)(l)), B.FindAndRemove(r, t);
        }
        return [o, a];
      }
      function P(e, t) {
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
      var S = n(85556),
        M = n(38321),
        O = n(24589),
        D = n(31542);
      function x(e) {
        const {
            visible: t = !0,
            className: n,
            keepMounted: r = !1,
            expandDirection: a = "height",
            msAnimationDuration: l = 250,
            children: s,
          } = e,
          {
            style: i,
            active: c,
            refDiv: u,
          } = (function (e, t = "height", n = 250) {
            const r = o.useRef(),
              a = o.useRef(!0),
              [l, s] = o.useState("idle"),
              [i, c] = o.useState({});
            o.useLayoutEffect(() => {
              a.current ? (a.current = !0) : s("start");
            }, [e]),
              o.useLayoutEffect(() => {
                const n = r.current,
                  o = "height" == t ? "scrollHeight" : "scrollWidth";
                if ("start" == l) {
                  const r = n[o];
                  c((n) =>
                    Object.assign(
                      Object.assign({ [t]: e ? "0px" : `${r}px` }, n),
                      { overflow: "hidden" },
                    ),
                  ),
                    s("active");
                } else if ("active" == l) {
                  n.scrollTop;
                  const r = n[o];
                  c({ overflow: "hidden", [t]: e ? `${r}px` : "0px" });
                  const a = () => {
                    D.unstable_batchedUpdates(() => {
                      c({}), s("idle");
                    });
                  };
                  return (
                    n.addEventListener("transitionend", a),
                    () => {
                      n.removeEventListener("transitionend", a);
                    }
                  );
                }
              }, [l, e]);
            const u = Object.assign(Object.assign({}, i), {
              transition: `${t} ${n}ms`,
            });
            return { style: u, active: "idle" != l, refDiv: r };
          })(t, a, l);
        return t || c || r
          ? o.createElement("div", { className: n, ref: u, style: i }, s)
          : null;
      }
      var F = n(65109);
      function H(e, t) {
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
      function I(e, t) {
        let { from: n, $from: o, to: r, empty: a } = e.selection;
        return a
          ? !!t.isInSet(e.storedMarks || o.marks())
          : e.doc.rangeHasMark(n, r, t);
      }
      function R(e, t, n) {
        let { $from: o, to: r, node: a } = e.selection;
        return !a && r <= o.end() && (a = o.parent), !!a && a.hasMarkup(t, n);
      }
      function z(e, t, n = {}) {
        return new F.VK(e, (e, o, r, a) => {
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
      var G = n(86064),
        U = n(50947),
        W = n(94950);
      function $(e) {
        const { children: t } = e,
          { callbacks: n, view: r } = Z(),
          [a, l] = o.useState(() => I(r.state, k.marks.link)),
          i = o.useCallback((e) => l(I(e.state, k.marks.link)), []);
        (0, U.useCallbackList)(n, i);
        const [u, d, m] = (0, U.useModalState)();
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            c.SimpleModal,
            { active: u },
            o.createElement(j, { active: u, closeModal: m, view: r }),
          ),
          o.createElement(
            s.Button,
            {
              className: (0, f.default)(W.CommandButton, a && W.Toggled),
              onMouseDown: (e) => {
                e.preventDefault(), d();
              },
              title: (0, G.Localize)("#FormattingToolbar_InsertLink"),
            },
            t,
          ),
        );
      }
      const j = o.memo(function (e) {
        const { active: t, closeModal: n, view: r } = e,
          [a, l] = o.useState(""),
          [i, u] = o.useState(""),
          d = o.useRef(),
          m = o.useRef();
        return (
          o.useLayoutEffect(() => {
            if (t) {
              let e = "";
              r.state.selection.empty ||
                (e = r.state.doc.cut(
                  r.state.selection.from,
                  r.state.selection.to,
                ).textContent),
                l(e),
                e.startsWith("http")
                  ? (u(e),
                    d.current.Focus(),
                    window.setTimeout(() => {
                      d.current.element.select();
                    }, 0))
                  : 0 == e.length
                  ? d.current.Focus()
                  : m.current.Focus();
            }
          }, [t, r]),
          o.createElement(
            c.GenericConfirmDialog,
            {
              onOK: () => {
                r.dispatch(
                  r.state.tr.replaceRangeWith(
                    r.state.selection.from,
                    r.state.selection.to,
                    k.text(a || i, [k.marks.link.create({ href: i })]),
                  ),
                ),
                  r.focus(),
                  n();
              },
              closeModal: n,
              strTitle: (0, G.Localize)("#FormattingToolbar_InsertLink"),
              strOKButtonText: (0, G.Localize)("#FormattingToolbar_InsertLink"),
              bOKDisabled: 0 == i.length,
            },
            o.createElement(s.Input, {
              ref: d,
              value: a,
              onChange: (e) => l(e.currentTarget.value),
              label: (0, G.Localize)("#FormattingToolbar_LinkText"),
            }),
            o.createElement(s.Input, {
              ref: m,
              value: i,
              onChange: (e) => u(e.currentTarget.value),
              label: (0, G.Localize)("#FormattingToolbar_LinkAddress"),
            }),
          )
        );
      });
      var K = n(40885),
        V = n(94256),
        J = n(46048),
        X = n(2286);
      function q(e) {
        const {
            view: t,
            refUpdateToolbar: n,
            className: r,
            bSpellcheckEnabled: a,
            setSpellcheckEnabled: l,
          } = e,
          [c, u] = (0, J.i4)("FormattingToolbar_Expanded", !1),
          [d] = o.useState(() => new K.CCallbackList());
        o.useEffect(
          () => (
            (0, U.setRef)(n, () => d.Dispatch(t)),
            () => (0, U.setRef)(n, void 0)
          ),
          [d, t, n],
        );
        const p = o.useMemo(() => ({ callbacks: d, view: t }), [d, t]);
        return t
          ? o.createElement(
              Y.Provider,
              { value: p },
              o.createElement(
                "div",
                { className: (0, f.default)(W.Toolbar, r) },
                o.createElement(
                  Q,
                  null,
                  o.createElement(
                    V.HP,
                    {
                      toolTipContent: "#FormattingToolbar_Undo",
                      direction: "bottom",
                    },
                    o.createElement(
                      ne,
                      {
                        title: (0, G.Localize)("#FormattingToolbar_Undo"),
                        command: O.Yw,
                        fnEnabledCheck: ae,
                      },
                      o.createElement(i.Undo, null),
                    ),
                  ),
                  o.createElement(
                    V.HP,
                    {
                      toolTipContent: "#FormattingToolbar_Redo",
                      direction: "bottom",
                    },
                    o.createElement(
                      ne,
                      {
                        title: (0, G.Localize)("#FormattingToolbar_Redo"),
                        command: O.KX,
                        fnEnabledCheck: le,
                      },
                      o.createElement(i.Redo, null),
                    ),
                  ),
                  o.createElement("div", { className: W.Gap }),
                  o.createElement(
                    V.HP,
                    {
                      toolTipContent: "#FormattingToolbar_Bold",
                      direction: "bottom",
                    },
                    o.createElement(
                      te,
                      {
                        title: (0, G.Localize)("#FormattingToolbar_Bold"),
                        mark: k.marks.strong,
                      },
                      o.createElement(i.TextBold, null),
                    ),
                  ),
                  o.createElement(
                    V.HP,
                    {
                      toolTipContent: "#FormattingToolbar_Italic",
                      direction: "bottom",
                    },
                    o.createElement(
                      te,
                      {
                        title: (0, G.Localize)("#FormattingToolbar_Italic"),
                        mark: k.marks.italic,
                      },
                      o.createElement(i.TextItalic, null),
                    ),
                  ),
                  o.createElement(
                    V.HP,
                    {
                      toolTipContent: "#FormattingToolbar_Underline",
                      direction: "bottom",
                    },
                    o.createElement(
                      te,
                      {
                        title: (0, G.Localize)("#FormattingToolbar_Underline"),
                        mark: k.marks.underline,
                      },
                      o.createElement(i.TextUnderline, null),
                    ),
                  ),
                  o.createElement(
                    V.HP,
                    {
                      toolTipContent: "#FormattingToolbar_Strike",
                      direction: "bottom",
                    },
                    o.createElement(
                      te,
                      {
                        title: (0, G.Localize)("#FormattingToolbar_Strike"),
                        mark: k.marks.strike,
                      },
                      o.createElement(i.TextStrikethrough, null),
                    ),
                  ),
                  o.createElement(
                    V.HP,
                    {
                      toolTipContent: "#FormattingToolbar_InlineCode",
                      direction: "bottom",
                    },
                    o.createElement(
                      te,
                      {
                        title: (0, G.Localize)("#FormattingToolbar_InlineCode"),
                        mark: k.marks.code,
                      },
                      o.createElement(i.TextCode, null),
                    ),
                  ),
                  o.createElement("div", { className: W.Spacer }),
                  o.createElement(
                    V.HP,
                    {
                      toolTipContent: "#FormattingToolbar_ExpandOptions",
                      direction: "bottom",
                    },
                    o.createElement(
                      s.Button,
                      {
                        className: (0, f.default)(
                          W.CommandButton,
                          W.ExpandButton,
                          c && W.Toggled,
                        ),
                        onClick: () => u(!c),
                      },
                      o.createElement(i.Chevron, null),
                    ),
                  ),
                ),
                o.createElement(
                  Q,
                  { visible: c },
                  o.createElement(
                    V.HP,
                    {
                      toolTipContent: "#FormattingToolbar_Paragraph",
                      direction: "bottom",
                    },
                    o.createElement(
                      ee,
                      {
                        nodeType: k.nodes.paragraph,
                        title: (0, G.Localize)("#FormattingToolbar_Paragraph"),
                      },
                      o.createElement(i.TextParagraph, null),
                    ),
                  ),
                  o.createElement(
                    V.HP,
                    {
                      toolTipContent: "#FormattingToolbar_HeadingLevel1",
                      direction: "bottom",
                    },
                    o.createElement(
                      ee,
                      {
                        nodeType: k.nodes.heading,
                        attrs: { level: 1 },
                        title: (0, G.Localize)(
                          "#FormattingToolbar_HeadingLevelN",
                          1,
                        ),
                      },
                      o.createElement(i.TextH1, null),
                    ),
                  ),
                  o.createElement(
                    V.HP,
                    {
                      toolTipContent: "#FormattingToolbar_HeadingLevel2",
                      direction: "bottom",
                    },
                    o.createElement(
                      ee,
                      {
                        nodeType: k.nodes.heading,
                        attrs: { level: 2 },
                        title: (0, G.Localize)(
                          "#FormattingToolbar_HeadingLevelN",
                          2,
                        ),
                      },
                      o.createElement(i.TextH2, null),
                    ),
                  ),
                  o.createElement(
                    V.HP,
                    {
                      toolTipContent: "#FormattingToolbar_HeadingLevel3",
                      direction: "bottom",
                    },
                    o.createElement(
                      ee,
                      {
                        nodeType: k.nodes.heading,
                        attrs: { level: 3 },
                        title: (0, G.Localize)(
                          "#FormattingToolbar_HeadingLevelN",
                          3,
                        ),
                      },
                      o.createElement(i.TextH3, null),
                    ),
                  ),
                  o.createElement(
                    V.HP,
                    {
                      toolTipContent: "#FormattingToolbar_HeadingLevel4",
                      direction: "bottom",
                    },
                    o.createElement(
                      ee,
                      {
                        nodeType: k.nodes.heading,
                        attrs: { level: 4 },
                        title: (0, G.Localize)(
                          "#FormattingToolbar_HeadingLevelN",
                          4,
                        ),
                      },
                      o.createElement(i.TextH4, null),
                    ),
                  ),
                  o.createElement(
                    V.HP,
                    {
                      toolTipContent: "#FormattingToolbar_HeadingLevel5",
                      direction: "bottom",
                    },
                    o.createElement(
                      ee,
                      {
                        nodeType: k.nodes.heading,
                        attrs: { level: 5 },
                        title: (0, G.Localize)(
                          "#FormattingToolbar_HeadingLevelN",
                          5,
                        ),
                      },
                      o.createElement(i.TextH5, null),
                    ),
                  ),
                  o.createElement(
                    V.HP,
                    {
                      toolTipContent: "#FormattingToolbar_CodeBlock",
                      direction: "bottom",
                    },
                    o.createElement(
                      ee,
                      {
                        nodeType: k.nodes.code_block,
                        title: (0, G.Localize)("#FormattingToolbar_CodeBlock"),
                      },
                      o.createElement(i.TextCodeBlock, null),
                    ),
                  ),
                  o.createElement("div", { className: W.Gap }),
                  o.createElement(
                    V.HP,
                    {
                      toolTipContent: "#FormattingToolbar_BulletedList",
                      direction: "bottom",
                    },
                    o.createElement(
                      oe,
                      {
                        title: (0, G.Localize)(
                          "#FormattingToolbar_BulletedList",
                        ),
                        command: (0, m.KI)(k.nodes.bullet_list),
                      },
                      o.createElement(i.TextBullets, null),
                    ),
                  ),
                  o.createElement(
                    V.HP,
                    {
                      toolTipContent: "#FormattingToolbar_IndentList",
                      direction: "bottom",
                    },
                    o.createElement(
                      oe,
                      {
                        title: (0, G.Localize)("#FormattingToolbar_IndentList"),
                        command: (0, m.IB)(k.nodes.list_item),
                      },
                      o.createElement(i.TextIndent, null),
                    ),
                  ),
                  o.createElement(
                    V.HP,
                    {
                      toolTipContent: "#FormattingToolbar_OutdentList",
                      direction: "bottom",
                    },
                    o.createElement(
                      oe,
                      {
                        title: (0, G.Localize)(
                          "#FormattingToolbar_OutdentList",
                        ),
                        command: (0, m.bw)(k.nodes.list_item),
                      },
                      o.createElement(i.TextOutdent, null),
                    ),
                  ),
                  o.createElement("div", { className: W.Gap }),
                  o.createElement(
                    V.HP,
                    {
                      toolTipContent: "#FormattingToolbar_InsertLink",
                      direction: "bottom",
                    },
                    o.createElement($, null, o.createElement(i.TextLink, null)),
                  ),
                  o.createElement("div", { className: W.Spacer }),
                  l &&
                    o.createElement(
                      V.HP,
                      {
                        toolTipContent: a
                          ? "#FormattingToolbar_DisableSpellcheck"
                          : "#FormattingToolbar_EnableSpellcheck",
                        direction: "bottom",
                      },
                      o.createElement(
                        re,
                        { toggled: a, onClick: () => l(!a) },
                        o.createElement(i.SpellCheck, null),
                      ),
                    ),
                ),
              ),
            )
          : null;
      }
      const Y = o.createContext(void 0),
        Z = () => o.useContext(Y);
      function Q(e) {
        return o.createElement(
          x,
          { visible: e.visible },
          o.createElement(
            X.Panel,
            { className: (0, f.default)(W.ToolbarRow), "flow-children": "row" },
            e.children,
          ),
        );
      }
      function ee(e) {
        const { nodeType: t, title: n, attrs: r, children: a } = e,
          { callbacks: l, view: s } = Z(),
          [i, c] = o.useState(() => R(s.state, t, r)),
          u = o.useCallback((e) => c(R(e.state, t, r)), [t, r]);
        (0, U.useCallbackList)(l, u);
        const d = o.useMemo(() => (0, M.uJ)(t, r), [r, t]);
        return o.createElement(oe, {
          command: d,
          title: n,
          toggled: i,
          children: a,
        });
      }
      function te(e) {
        const { mark: t, title: n, children: r } = e,
          { callbacks: a, view: l } = Z(),
          [s, i] = o.useState(() => I(l.state, t)),
          c = o.useCallback((e) => i(I(e.state, t)), [t]);
        (0, U.useCallbackList)(a, c);
        const u = o.useMemo(() => (0, M.w9)(t), [t]);
        return o.createElement(oe, {
          command: u,
          title: n,
          toggled: s,
          children: r,
        });
      }
      function ne(e) {
        const { fnEnabledCheck: t } = e,
          n = (0, S._T)(e, ["fnEnabledCheck"]),
          { callbacks: r, view: a } = Z(),
          [l, s] = o.useState(() => t(a)),
          i = o.useCallback((e) => s(t(e)), [t]);
        return (
          (0, U.useCallbackList)(r, i),
          o.createElement(oe, Object.assign({}, n, { disabled: !l }))
        );
      }
      function oe(e) {
        const {
            command: t,
            toggled: n,
            title: r,
            disabled: a,
            children: l,
          } = e,
          { view: i } = Z();
        return o.createElement(
          s.Button,
          {
            className: (0, f.default)(W.CommandButton, n && W.Toggled),
            title: r,
            onMouseDown: (e) => {
              e.preventDefault(), t(i.state, i.dispatch, i);
            },
            disabled: !0 === a,
            focusable: !a,
          },
          l,
        );
      }
      function re(e) {
        const {
          onClick: t,
          toggled: n,
          title: r,
          disabled: a,
          children: l,
        } = e;
        return o.createElement(
          s.Button,
          {
            className: (0, f.default)(W.CommandButton, n && W.Toggled),
            title: r,
            onMouseDown: (e) => {
              e.preventDefault(), t();
            },
            disabled: !0 === a,
          },
          l,
        );
      }
      function ae(e) {
        return (0, O.of)(e.state) > 0;
      }
      function le(e) {
        return (0, O.AH)(e.state) > 0;
      }
      var se = n(23507),
        ie = n(82789),
        ce = n(15463),
        ue = n(81257),
        de = n(29853),
        me = n(64452);
      function pe(e) {
        const { view: t } = e,
          [n, r] = o.useState(),
          [a, l] = o.useState(),
          [s, i] = o.useState(),
          c = o.useCallback((e, t) => {
            const n = t.target;
            if ((0, de.IsHTMLElement)(n) && "A" == n.nodeName) {
              const e = n.getBoundingClientRect();
              r(e.left + e.width / 2), l(e.bottom + 2), i(n);
            } else i(void 0);
            return !1;
          }, []),
          u = o.useCallback((e, t) => (i(void 0), !1), []);
        if (
          (H(
            t,
            o.useMemo(
              () =>
                new ie.Sy({
                  props: { handleDOMEvents: { mouseover: c, mouseleave: u } },
                }),
              [c, u],
            ),
          ),
          !s)
        )
          return null;
        const d = s.getAttribute("href");
        return o.createElement(
          ge,
          { top: a, left: n },
          o.createElement("div", { className: me.Link }, d),
          o.createElement(
            "div",
            { className: me.LinkHelp },
            (0, G.Localize)("#UserGameNotes_ClickToOpenLink"),
          ),
        );
      }
      function ge(e) {
        const { top: t, left: n, children: r } = e,
          [a, l] = o.useState(0),
          s = o.useRef();
        o.useLayoutEffect(() => {
          l(s.current.getBoundingClientRect().width);
        }, [t, n, r]);
        const i = { top: `${t}px`, left: `${Math.max(n - a / 2, 12)}px` };
        return o.createElement(
          "div",
          { className: me.Hover, style: i, ref: s },
          r,
        );
      }
      const fe = (0, M.QF)(
          M.uo,
          (e, t) => (
            t &&
              t(
                e.tr
                  .replaceSelectionWith(k.nodes.hard_break.create())
                  .scrollIntoView(),
              ),
            !0
          ),
        ),
        he = (0, se.h)({
          "Mod-z": O.Yw,
          "Mod-y": O.KX,
          Backspace: F.dU,
          "Mod-Enter": fe,
          "Shift-Enter": fe,
          "Mod-b": (0, M.w9)(k.marks.strong),
          "Mod-i": (0, M.w9)(k.marks.italic),
          Enter: (0, m.s6)(k.nodes.list_item),
          "Mod-[": (0, m.IB)(k.nodes.list_item),
          "Mod-]": (0, m.bw)(k.nodes.list_item),
          "Shift-Ctrl-1": (0, M.uJ)(k.nodes.heading, { level: 1 }),
          "Shift-Ctrl-2": (0, M.uJ)(k.nodes.heading, { level: 2 }),
          "Shift-Ctrl-3": (0, M.uJ)(k.nodes.heading, { level: 3 }),
          "Shift-Ctrl-0": (0, M.uJ)(k.nodes.paragraph),
        });
      var be = n(16195),
        Ee = n(82997),
        ke = n(47739);
      function ve(e) {
        const { view: t, uploadImage: n } = e;
        return (
          H(
            t,
            new ie.Sy({
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
                          (0, S.mG)(this, void 0, void 0, function* () {
                            for (const o of e) {
                              const e = yield fetch(o),
                                r = yield e.blob(),
                                a = (0, ke.StripExifMetadata)(
                                  yield r.arrayBuffer(),
                                );
                              Te(
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
      function Te(e, t, n) {
        n.state.doc.descendants((o, r) => {
          if ("image" === o.type.name && o.attrs.src === e) {
            const e = n.state.tr.setNodeAttribute(r, "src", t);
            n.dispatch(e);
          }
        });
      }
      const _e = "/images/image_error.svg";
      var Ce = n(52824),
        Ne = n(85164);
      function Be(e) {
        const {
            bbcode: t,
            className: n,
            onUpdate: r,
            refView: a,
            onClickURL: l,
            bSpellcheckEnabled: s = !0,
            panelProps: i,
          } = e,
          c = o.useRef();
        c.current = r;
        const u = (0, Ne.useConfigContext)(),
          [d, m] = o.useState(),
          p = o.useRef(),
          g = o.useRef();
        g.current = l || we;
        const h = o.useCallback((e) => {
          var t, n;
          if (!e)
            return void (
              null === (t = p.current) ||
              void 0 === t ||
              t.destroy()
            );
          const o = p.current;
          o && o.destroy(),
            (p.current = new ce.tk(e, {
              state:
                null !== (n = null == o ? void 0 : o.state) && void 0 !== n
                  ? n
                  : ie.yy.create({ schema: k }),
              handleClickOn: (...e) =>
                (function (e, t, n, o, r, a, l) {
                  if (l && (a.ctrlKey || 1 == a.button)) {
                    const t = o
                      .resolve(n - r)
                      .marks()
                      .find((e) => e.type == k.marks.link);
                    if (t)
                      return e(t.attrs.href, a.view), a.preventDefault(), !0;
                  }
                  return !1;
                })(g.current, ...e),
              clipboardTextParser: Ae,
              transformPasted: Pe,
            })),
            m(p.current),
            o || p.current.focus();
        }, []);
        o.useLayoutEffect(() => {
          const e = (function (e, t = T) {
            return new N(t).ParseBBCode(e);
          })(t);
          p.current.updateState(
            (function (e, t) {
              const n = new ie.Sy({ view: (e) => ({ update: t }) });
              return ie.yy.create({
                schema: k,
                doc: e,
                plugins: [(0, O.m8)(), he, (0, se.h)(M.YR), n, Le()],
              });
            })(e, (...e) => c.current && c.current(...e)),
          );
        }, [t]),
          (0, U.useSetRef)(a, d);
        const b = o.useRef(),
          E = o.useCallback(
            (e) => {
              (0, ue.LP)(e, u.IN_VR);
            },
            [u.IN_VR],
          ),
          v = o.useCallback(() => {}, []),
          _ = (0, ue.CJ)({ onTextEntered: E, onKeyboardNavOut: v }, () => {
            var e;
            return null === (e = b.current) || void 0 === e
              ? void 0
              : e.ownerDocument.defaultView;
          }),
          C = o.useCallback(() => {
            var e, t;
            if (
              (_.ShowVirtualKeyboard(),
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
                      p.current.state.tr.setSelection(ie.Bs.near(e)),
                    );
                  }
                  break;
                }
              }
            }
          }, [_]),
          B = (0, U.useMultipleRefs)(b, h),
          w = o.useCallback((e) => e.currentTarget == e.target, []),
          L = (0, Ce.pj)(b, null, null, w);
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            X.Panel,
            Object.assign(
              {
                key: `editordiv_${s}`,
                className: (0, f.default)(n, W.Container),
                ref: B,
                spellCheck: s,
                focusable: !0,
                onActivate: C,
                onOKActionDescription: (0, G.Localize)("#UserGameNotes_Edit"),
                onGamepadDirection: L,
              },
              i,
            ),
          ),
          o.createElement(pe, { view: p.current }),
          e.uploadImage &&
            o.createElement(ve, { view: d, uploadImage: e.uploadImage }),
        );
      }
      function we(e, t) {
        (0, be.OpenLinkInNewWindow)(t, e);
      }
      function Le() {
        return (0, F.Hw)({
          rules: [
            (0, F.S0)(
              /^(\d+)\.\s$/,
              k.nodes.ordered_list,
              (e) => ({ order: parseInt(e[1]) }),
              (e, t) => t.childCount + t.attrs.order == parseInt(e[1]),
            ),
            (0, F.S0)(/^\s*([-+*])\s$/, k.nodes.bullet_list),
            z(/\*([^*]+)\*/, k.marks.strong),
            z(/_([^_]+)_/, k.marks.italic),
            z(/~([^~]+)~/, k.marks.strike),
            z(/`([^`]+)`/, k.marks.code),
            (0, F.zK)(/^```$/, k.nodes.code_block),
            (0, F.zK)(/^(#{1,5})\s$/, k.nodes.heading, (e) => ({
              level: e[1].length,
            })),
          ],
        });
      }
      function Ae(e, t, n, o) {
        let r,
          a = [];
        for (; (r = e.match(Ee.k_LinkRegex)); )
          r.index > 0 && a.push(k.text(e.substring(0, r.index))),
            a.push(
              k.text(r[0], [
                k.marks.link.create({ href: (0, Ee.EnsureKnownScheme)(r[0]) }),
              ]),
            ),
            (e = e.substring(r.index + r[0].length));
        return (
          e.length && a.push(k.text(e)),
          new d.p2(d.HY.from(a), t.start(), t.end())
        );
      }
      const ye = 52428800;
      function Pe(e, t) {
        let n = !1;
        if (
          (e.content.descendants((e, t) => {
            "image" === e.type.name && e.attrs.src.length > ye && (n = !0);
          }),
          n)
        ) {
          let e = [
            k.nodes.image.create({
              src: _e,
              title: (0, G.Localize)("#UserGameNotes_ImageTooLarge"),
            }),
          ];
          return new d.p2(d.HY.from(e), 0, 0);
        }
        return e;
      }
      var Se = n(12041);
      const Me = 15;
      function Oe(e) {
        const { note: t } = e,
          [n, s] = o.useState(!1),
          [i, c] = o.useState(),
          u = o.useRef(),
          d = o.useRef(),
          m = o.useRef(t.content),
          p = o.useRef(!1),
          g = (0, a.NJ)(),
          f = (0, a.ZW)(),
          h = (0, a.Am)(),
          b = (0, r.RE)(t.appid),
          E = (0, Ne.useInGamepadUI)();
        m.current == t.content || p.current || (m.current = t.content);
        const k = m.current,
          v = (0, r.eD)(),
          T = o.useCallback((e, t) => {
            u.current && u.current(),
              t.doc &&
                t.doc != e.state.doc &&
                (p.current ||
                  ((p.current = !0),
                  l.ReactUsageReportingStore.ReportTrackedAction(
                    "/GameNotes/NoteModified",
                  )),
                (d.current = () => ({
                  title: He(e.state.doc),
                  bbcode: L(e.state.doc),
                })),
                s(!0));
          }, []);
        o.useEffect(() => {
          if (!n) return;
          let e = d.current;
          const o = () => {
              if (e) {
                const { title: n, bbcode: o } = e();
                (t.not_persisted && !(null == o ? void 0 : o.length)) ||
                  v.mutate({ note: t, title: n, bbcode: o }),
                  s(!1);
              }
              (e = void 0), (d.current = void 0);
            },
            r = window.setTimeout(o, 1e3 * Me);
          return () => {
            window.clearTimeout(r), o();
          };
        }, [v, n, t]);
        const _ = (0, a.eE)(),
          C = (0, r.CN)(t, _),
          N = {
            onSecondaryButton: () => C.mutate(),
            onSecondaryActionDescription: (0, G.Localize)(
              "#UserGameNotes_DeleteNote",
            ),
          };
        return o.createElement(
          "div",
          { className: Se.NoteEditorArea },
          !E &&
            o.createElement(q, {
              view: i,
              refUpdateToolbar: u,
              className: Se.Toolbar,
              bSpellcheckEnabled: f,
              setSpellcheckEnabled: h,
            }),
          o.createElement(Be, {
            className: Se.EditorInput,
            bbcode: k,
            onUpdate: T,
            refView: c,
            onClickURL: g,
            bSpellcheckEnabled: f,
            uploadImage: b,
            panelProps: N,
          }),
          !E && o.createElement(De, { note: t, bDirty: n }),
        );
      }
      function De(e) {
        const { note: t, bDirty: n } = e,
          [l, c, u] = (0, U.useModalState)(!1),
          d = (0, a.j_)(),
          m = (0, a.eE)(),
          p = (0, r.CN)(t, m),
          g = o.useCallback(() => {
            !n && t.not_persisted ? p.mutate() : c();
          }, [n, t, p, c]);
        return o.createElement(
          "div",
          { className: Se.NoteActions },
          l && o.createElement(Fe, { note: t, closeModal: u, deleteNote: p }),
          o.createElement(
            V.HP,
            { toolTipContent: "#UserGameNotes_DeleteNote", direction: "top" },
            o.createElement(
              s.Button,
              { onClick: g },
              o.createElement(i.Trash, null),
            ),
          ),
          d && o.createElement(xe, { bDirty: n }),
        );
      }
      function xe(e) {
        const { bDirty: t } = e,
          n = (0, a.eE)();
        return t
          ? o.createElement(
              s.PrimaryButton,
              { onClick: () => n(), className: Se.CloseWindowButton },
              (0, G.Localize)("#Button_SaveAndClose"),
            )
          : o.createElement(
              s.Button,
              { onClick: () => n(), className: Se.CloseWindowButton },
              (0, G.Localize)("#Button_Close"),
            );
      }
      function Fe(e) {
        const { note: t, closeModal: n, deleteNote: r } = e;
        return o.createElement(
          c.SimpleModal,
          { active: !0 },
          o.createElement(c.GenericConfirmDialog, {
            strTitle: (0, G.Localize)("#UserGameNotes_DeleteNote"),
            strDescription: (0, G.Localize)("#UserGameNotes_PromptDelete"),
            onOK: () => r.mutate(),
            bOKDisabled: r.isLoading,
            strOKButtonText: (0, G.Localize)("#Button_Delete"),
            closeModal: n,
          }),
        );
      }
      function He(e) {
        let t = "";
        for (let n = 0; n < e.content.childCount; n++) {
          const o = e.content.child(n);
          if (o.isText) t += o.text;
          else {
            if (((t = t.trim()), t.length > 4)) return t;
            if (((t = He(o)), t.length > 4)) return t;
          }
        }
        return t.trim();
      }
    },
    9205: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => h });
      var o = n(44611),
        r = n(58428),
        a = n(7996),
        l = n(27378),
        s = n(3620),
        i = n(66101),
        c = n(91971),
        u = n(47228),
        d = n(94494),
        m = n(62923),
        p = n(79509),
        g = n(86064),
        f = n(97896);
      function h(e) {
        const { popup: t } = e,
          [n, r] = l.useState();
        return (
          l.useEffect(() => {
            if (n)
              return o.c.RegisterPopup(t, () =>
                n.SteamClient.Window.BringToFront(),
              );
          }, [t, n]),
          void 0 === t.noteid
            ? l.createElement(k, { popup: t, refPopup: r })
            : l.createElement(b, { popup: t, refPopup: r })
        );
      }
      function b(e) {
        const { popup: t, refPopup: n } = e,
          o = (0, g.Localize)("#GameNotes_NoteForGame", t.display_name);
        return l.createElement(
          i.PopupStyleContextRoot,
          { body_class: f.GameNotesPopup },
          l.createElement(
            p.DialogPopup,
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
            l.createElement(m.Header, null, o),
            l.createElement(
              r.T,
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
          { data: o } = (0, u._N)(t, n);
        return o ? l.createElement(d.X, { note: o }) : null;
      }
      function k(e) {
        const { popup: t, refPopup: n } = e,
          o = t.noteParent,
          i = l.useMemo(() => [(0, c.q)(o)], [o]);
        return l.createElement(
          p.DialogPopup,
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
            s.VA,
            { initialEntries: i },
            l.createElement(
              r.T,
              { mode: "page", closePopup: () => t.close() },
              l.createElement(a.default, { noteParent: o }),
            ),
          ),
        );
      }
    },
    7996: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => I });
      var o = n(27378),
        r = n(3620),
        a = n(91971),
        l = n(47228),
        s = n(94494),
        i = n(62923),
        c = n(35484),
        u = n(86064),
        d = n(46048),
        m = n(12041),
        p = n(39459),
        g = n(62914),
        f = n(94256),
        h = n(85164);
      function b() {
        const e = (0, r.$B)(),
          t = (0, l.PC)(
            "appid" in e.params && Number(e.params.appid),
            "shortcut_name" in e.params && e.params.shortcut_name,
          );
        let n = e.params.noteid;
        const a = (0, r.k6)(),
          s = (0, l.ES)(t),
          { data: c, isLoading: u } = (0, l.HB)(t);
        let d;
        c && n && (d = c.find((e) => e.id === n)),
          o.useLayoutEffect(() => {
            !c ||
              (n && c.find((e) => e.id === n)) ||
              (c.length > 0 && c[0].id ? k(a, t, c[0].id) : k(a, t, s()));
          }, [a, t, n, c, s]);
        const p = o.createElement(
          f.HP,
          { toolTipContent: "#UserGameNotes_NewNote", direction: "top" },
          o.createElement(
            i.Button,
            {
              className: m.NewNoteButton,
              onClick: () => {
                const e = s();
                k(a, t, e);
              },
            },
            o.createElement(g.TextNewNote, null),
          ),
        );
        return c
          ? o.createElement(E, {
              noteParent: t,
              notes: c,
              activeNoteID: null == d ? void 0 : d.id,
              actions: p,
            })
          : null;
      }
      function E(e) {
        const { noteParent: t, notes: n, activeNoteID: a, actions: l } = e,
          [g, f] = (0, d.i4)("NotesListCollapsed", !1),
          b = (0, p.V5)(),
          E = (0, h.useInGamepadUI)(),
          v = n.map((e) => {
            var t;
            return {
              title:
                (null === (t = e.title) || void 0 === t ? void 0 : t.length) > 0
                  ? e.title
                  : (0, u.Localize)("#UserGameNotes_Untitled"),
              identifier: e.id,
              content: o.createElement(s.X, { note: e }),
              pageClassName: m.NotePage,
              hideTitle: !0,
            };
          }),
          T = (0, r.k6)(),
          _ = o.useCallback((e) => k(T, t, e), [T, t]);
        return o.createElement(i.PagedSettings, {
          title: (0, u.Localize)("#UserGameNotes_NotesList"),
          pages: v,
          className: (0, c.default)(m.NotesPagedSettings, b && m.PinnedView),
          page: a,
          onPageRequested: _,
          bottomControls: l,
          hideList: g,
          toggleHideList: b || E ? void 0 : () => f(!g),
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
      var v = n(4289),
        T = n(85556),
        _ = n(20879),
        C = n.n(_),
        N = n(56552),
        B = n(85067),
        w = n(42324),
        L = n(34656),
        A = n(72467),
        y = n(63083);
      let P;
      const S = 864e5;
      function M(e) {
        return `appinfo_${e}_${A.De.LANGUAGE}`;
      }
      function O(e) {
        return Boolean(e && Date.now() - e.timeCached < S);
      }
      function D(e) {
        const t = (0, L.useActiveServiceTransport)(),
          n = (0, L.useStorage)();
        return (0, N.useQuery)(
          ["appinfo", e],
          () =>
            (0, T.mG)(this, void 0, void 0, function* () {
              return (function (e, t) {
                return (
                  P ||
                    (P = new (C())(
                      (n) =>
                        (0, T.mG)(this, void 0, void 0, function* () {
                          const o = new Map();
                          (yield Promise.all(n.map((e) => t.GetObject(M(e)))))
                            .filter(O)
                            .forEach(({ value: e }) => o.set(e.appid, e));
                          const r = n.slice().filter((e) => !o.has(e));
                          if (r.length) {
                            const n = B.gA.Init(w.Fi);
                            n.Body().set_language((0, y.jM)(A.De.LANGUAGE)),
                              n.Body().set_appids(r);
                            const a = yield w.AE.GetApps(e, n);
                            if (1 != a.GetEResult()) throw a.GetErrorMessage();
                            a.Body()
                              .toObject()
                              .apps.forEach((e) => {
                                t.StoreObject(M(e.appid), {
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
                  P
                );
              })(t, n).load(e);
            }),
          { staleTime: S, enabled: !!e },
        ).data;
      }
      var x = n(27258);
      function F() {
        const { data: e, isLoading: t } = (0, l.i5)();
        return t
          ? o.createElement(x.Throbber, { msDelayAppear: 300 })
          : o.createElement(
              "div",
              null,
              o.createElement(
                "h1",
                null,
                (0, u.Localize)("#UserGameNotes_NotesList"),
              ),
              o.createElement(
                "ul",
                null,
                e.map((e) => o.createElement(H, { key: e.appid, game: e })),
              ),
            );
      }
      function H(e) {
        const { game: t } = e,
          n = D(t.appid);
        return o.createElement(
          "li",
          null,
          o.createElement(
            v.rU,
            { to: a.O.AppNotes(t.appid) },
            null == n ? void 0 : n.name,
          ),
        );
      }
      function I(e) {
        return o.createElement(
          r.rs,
          null,
          o.createElement(r.AW, { path: a.O.List() }, o.createElement(F, null)),
          o.createElement(
            r.AW,
            { path: a.O.AppNotes(":appid", ":noteid?") },
            o.createElement(b, null),
          ),
          o.createElement(
            r.AW,
            { path: a.O.ShortcutNotes(":shortcut_name", ":noteid?") },
            o.createElement(b, null),
          ),
          o.createElement(
            r.AW,
            null,
            o.createElement(r.l_, { to: `${(0, a.q)(e.noteParent)}` }),
          ),
        );
      }
    },
  },
]);
//# sourceMappingURL=sourcemaps/gamenotes.js.map
