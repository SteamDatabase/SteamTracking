/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [5006],
  {
    59722: (e) => {
      e.exports = {
        Hover: "_1lo3nIamSX1TzzE4TlhFXA",
        Link: "_1ds3uh7ntoekPm635F2Ziv",
        LinkHelp: "_3Vn5X8bzPjWx5p545nkB6k",
      };
    },
    73309: (e) => {
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
    28106: (e, t, n) => {
      "use strict";
      n.d(t, { W: () => d });
      var o = n(26205),
        r = n(57053),
        a = n(52893),
        s = n(90626),
        l = n(61859),
        c = n(22145),
        i = n(59722);
      function d(e) {
        const {
            linkMarkType: t,
            onURLPasted: n,
            schema: d,
            onClickURL: p = m,
          } = e,
          g = s.useRef(p);
        g.current = p;
        const [h, f] = s.useState(),
          [b, k] = s.useState(),
          [v, _] = s.useState(),
          C = s.useMemo(
            () =>
              new a.k_({
                props: {
                  handleClickOn(e, n, o, r, a, s) {
                    if (s && (a.ctrlKey || 1 == a.button)) {
                      const e = o
                        .resolve(n - r)
                        .marks()
                        .find((e) => e.type == t);
                      if (e)
                        return (
                          g.current(e.attrs.href, a.view),
                          a.preventDefault(),
                          !0
                        );
                    }
                    return !1;
                  },
                  clipboardTextParser(e, a, s, l) {
                    let c,
                      i = [];
                    for (; (c = e.match(o.O)); ) {
                      c.index > 0 && i.push(d.text(e.substring(0, c.index)));
                      const r = (0, o.S)(c[0]),
                        a = n && n(r);
                      a && "default" !== a
                        ? "remove" !== a && i.push(a)
                        : i.push(d.text(c[0], [t.create({ href: r })])),
                        (e = e.substring(c.index + c[0].length));
                    }
                    return (
                      e.length && i.push(d.text(e)),
                      new r.Ji(r.FK.from(i), a.start(), a.end())
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
                        f(e.left + e.width / 2), k(e.bottom + 2), _(n);
                      } else _(void 0);
                      return !1;
                    },
                    mouseleave: (e, t) => (_(void 0), !1),
                  },
                },
              }),
            [t, n, d],
          );
        if (((0, c.c$)(C), !v || !b || !h)) return null;
        const B = v.getAttribute("href");
        return s.createElement(
          u,
          { top: b, left: h },
          s.createElement("div", { className: i.Link }, B),
          s.createElement(
            "div",
            { className: i.LinkHelp },
            (0, l.we)("#UserGameNotes_ClickToOpenLink"),
          ),
        );
      }
      function u(e) {
        const { top: t, left: n, children: o } = e,
          [r, a] = s.useState(0),
          l = s.useRef(null);
        s.useLayoutEffect(() => {
          a(l.current.getBoundingClientRect().width);
        }, [t, n, o]);
        const c = { top: `${t}px`, left: `${Math.max(n - r / 2, 12)}px` };
        return s.createElement(
          "div",
          { className: i.Hover, style: c, ref: l },
          o,
        );
      }
      function m(e, t) {
        t.open(e);
      }
    },
    79497: (e, t, n) => {
      "use strict";
      n.d(t, { W: () => r });
      var o = n(57053);
      class r {
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
          (this.m_mapBBCodeDictionary = new Map()),
            (this.m_PMToBBCodeConfig = {
              mapNodes: new Map(),
              mapMarks: new Map(),
            });
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
            r = new Map();
          for (const o in e.nodes) {
            const { bbCode: r, ...a } = e.nodes[o];
            (t[o] = a), n.set(o, r);
          }
          const a = {};
          for (const t in e.marks) {
            const { bbCode: n, ...o } = e.marks[t];
            (a[t] = o), r.set(t, n);
          }
          (this.m_ProseMirrorSchema = new o.Sj({ nodes: t, marks: a })),
            n.forEach((t, n) => {
              var o;
              const r = this.m_ProseMirrorSchema.nodes[n],
                a = e.nodes[n],
                s = Array.isArray(t) ? t : [t];
              let l;
              "list_item+" == a.content
                ? (l = this.m_ProseMirrorSchema.nodes.list_item)
                : -1 !=
                    (null === (o = a.content) || void 0 === o
                      ? void 0
                      : o.indexOf("paragraph")) &&
                  (l = this.m_ProseMirrorSchema.nodes.paragraph),
                s.forEach(
                  ({
                    tag: e,
                    BBArgsToAttrs: t,
                    AttrsToBBArgs: n,
                    convertContentToAttr: o,
                    ...a
                  }) => {
                    this.m_mapBBCodeDictionary.set(e, {
                      Constructor: {
                        node: r,
                        BBArgsToAttrs: t,
                        convertContentToAttr: o,
                        acceptNode: l,
                      },
                      skipFollowingNewline: !0,
                      ...a,
                    });
                  },
                );
              const { tag: c, AttrsToBBArgs: i } = s[0];
              this.m_PMToBBCodeConfig.mapNodes.set(r, {
                tag: c,
                AttrsToBBArgs: i,
              });
            }),
            r.forEach((e, t) => {
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
      }
    },
    22145: (e, t, n) => {
      "use strict";
      n.d(t, { KF: () => p, Ot: () => m, c$: () => g, Hd: () => h });
      var o = n(12362),
        r = n(7502),
        a = n(52893),
        s = n(90626),
        l = n(98724),
        c = n(79216),
        i = n(4188),
        d = n(37834);
      n(74763);
      const u = s.createContext(null);
      function m(e) {
        return s.createElement(u.Provider, { value: e.view }, e.children);
      }
      function p(e) {
        const { schema: t, onUpdate: n } = e,
          u = s.useRef(n);
        return (
          (u.current = n),
          g(
            s.useMemo(
              () =>
                new a.k_({
                  view: (e) => ({ update: (...e) => u.current(...e) }),
                }),
              [],
            ),
          ),
          g(
            s.useMemo(
              () =>
                (function (e) {
                  const t = (0, o.st)(
                    o.I$,
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
                  return (0, r.w)({
                    "Mod-z": l.tN,
                    "Mod-y": l.ZS,
                    Backspace: c.dv,
                    "Mod-Enter": t,
                    "Shift-Enter": t,
                    "Mod-b": (0, o.wh)(e.marks.strong),
                    "Mod-i": (0, o.wh)(e.marks.italic),
                    Enter: (0, i.wn)(e.nodes.list_item),
                    "Mod-[": (0, i.T2)(e.nodes.list_item),
                    "Mod-]": (0, i.$B)(e.nodes.list_item),
                    "Shift-Ctrl-1": (0, o.y_)(e.nodes.heading, { level: 1 }),
                    "Shift-Ctrl-2": (0, o.y_)(e.nodes.heading, { level: 2 }),
                    "Shift-Ctrl-3": (0, o.y_)(e.nodes.heading, { level: 3 }),
                    "Shift-Ctrl-0": (0, o.y_)(e.nodes.paragraph),
                  });
                })(t),
              [t],
            ),
          ),
          g(s.useMemo(() => (0, r.w)(o.RV), [])),
          g(
            s.useMemo(
              () =>
                (function (e) {
                  return (0, c.sM)({
                    rules: [
                      (0, c.tG)(
                        /^(\d+)\.\s$/,
                        e.nodes.ordered_list,
                        (e) => ({ order: parseInt(e[1]) }),
                        (e, t) =>
                          t.childCount + t.attrs.order == parseInt(e[1]),
                      ),
                      (0, c.tG)(/^\s*([-+*])\s$/, e.nodes.bullet_list),
                      (0, d.OX)(/\*([^*]+)\*/, e.marks.strong),
                      (0, d.OX)(/_([^_]+)_/, e.marks.italic),
                      (0, d.OX)(/~([^~]+)~/, e.marks.strike),
                      (0, d.OX)(/`([^`]+)`/, e.marks.code),
                      (0, c.JJ)(/^```$/, e.nodes.code_block),
                      (0, c.JJ)(/^(#{1,5})\s$/, e.nodes.heading, (e) => ({
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
      function g(e) {
        const t = s.useContext(u);
        s.useEffect(() => {
          if (t && e && !t.isDestroyed)
            return (0, d.JD)(t, e), () => (0, d.xv)(t, e);
        }, [t, e]);
      }
      function h() {
        return s.useContext(u);
      }
    },
    55608: (e, t, n) => {
      "use strict";
      n.d(t, { BM: () => l, DQ: () => i, ce: () => c });
      var o = n(33645),
        r = n.n(o),
        a = n(4188),
        s = n(52038);
      function l(e, t, n = 0) {
        return () => [e, { class: t }, n];
      }
      function c(e, t, n = 0) {
        return [e, { class: t }, n];
      }
      const i = {
        nodes: {
          paragraph: {
            content: "inline*",
            group: "block",
            parseDOM: [{ tag: "p" }],
            toDOM: l("p", (0, s.A)("pm_paragraph", r().Paragraph)),
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
                  `BB_Header${e.attrs.level} ` + r()[`Header${e.attrs.level}`],
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
              return ["img", { src: t, alt: n, title: o, class: r().Image }];
            },
            bbCode: {
              tag: "img",
              BBArgsToAttrs: (e) => ({ src: e.src }),
              AttrsToBBArgs: (e) => ({ args: { src: e.src } }),
              convertContentToAttr: "src",
            },
          },
          bullet_list: {
            ...a.fF,
            content: "list_item+",
            group: "block",
            toDOM: l("ul", r().List),
            bbCode: { tag: "list" },
          },
          ordered_list: {
            ...a.o8,
            content: "list_item+",
            group: "block",
            toDOM: l("ol", r().OrderedList),
            bbCode: { tag: "olist" },
          },
          list_item: {
            ...a.Aw,
            content: "paragraph block*",
            toDOM: l("li", r().ListItem),
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
              { class: r().CodeBlock },
              ["code", { class: r().Code }, 0],
            ],
            bbCode: { tag: "code" },
          },
        },
        marks: {
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
            toDOM: l("b", (0, s.A)("BB_Bold", r().Bold)),
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
            toDOM: l("i", (0, s.A)("BB_Italic", r().Italic)),
            bbCode: { tag: "i" },
          },
          underline: {
            parseDOM: [{ tag: "u" }, { style: "text-decoration=underline" }],
            toDOM: l("u", (0, s.A)("BB_Underline", r().Underline)),
            bbCode: { tag: "u" },
          },
          strike: {
            parseDOM: [{ style: "text-decoration=line-through" }],
            toDOM: l("span", (0, s.A)("BB_Strike", r().Strike)),
            bbCode: { tag: "strike" },
          },
          code: {
            parseDOM: [{ tag: "code" }],
            toDOM: l("code", (0, s.A)("BB_Code", r().Code)),
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
        },
      };
    },
    10331: (e, t, n) => {
      "use strict";
      n.d(t, { m: () => a });
      var o = n(49693),
        r = n(81393);
      function a(e, t) {
        return s(t.pm_schema, t.pm_to_bbcode_config, e, []);
      }
      function s(e, t, n, a) {
        let i = n.marks,
          d = "";
        const u = t.mapNodes.get(n.type),
          { tag: m, args: p } = c(u, n.attrs);
        return (
          m && (d += (0, o.CS)(m, p)),
          n.content.forEach((n) => {
            ([d, i] = l(t, i, n.marks, d)),
              ([d, i] = (function (e, t, n, a) {
                let s;
                for (const l of n)
                  if (-1 === t.indexOf(l)) {
                    s || (s = t.slice());
                    const n = e.mapMarks.get(l.type);
                    if (((0, r.w)(n, "mark missing bbtag"), n)) {
                      s.push(l);
                      const { args: e, tag: t } = c(n, l.attrs);
                      a += (0, o.CS)(t, e || {});
                    }
                  }
                return [a, null != s ? s : t];
              })(t, i, n.marks, d)),
              n.type.isText
                ? (d += (0, o.vE)(n.text || ""))
                : n.type == e.nodes.hard_break
                  ? (d += "\n")
                  : (d += s(e, t, n, i));
          }),
          ([d] = l(t, i, a, d)),
          m && (d += (0, o.op)(m)),
          d
        );
      }
      function l(e, t, n, a) {
        const s = [];
        for (const e of t) -1 === n.indexOf(e) && s.push(e);
        if (!s.length) return [a, t];
        const l = t.slice();
        for (
          ;
          s.length && ((0, r.w)(l.length, "no marks left to close"), l.length);
        ) {
          const t = l.pop(),
            n = e.mapMarks.get(t.type),
            { tag: r } = c(n, t.attrs);
          a += (0, o.op)(r);
          const i = s.indexOf(t);
          -1 != i && s.splice(i, 1);
        }
        return [a, l];
      }
      function c(e, t) {
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
    },
    37834: (e, t, n) => {
      "use strict";
      n.d(t, {
        Cd: () => l,
        JD: () => a,
        OX: () => d,
        bQ: () => u,
        d7: () => i,
        gj: () => c,
        xv: () => s,
      });
      var o = n(79216),
        r = n(52893);
      function a(e, t) {
        const n = e.state;
        if (!e.state.plugins.includes(t)) {
          const o = [...e.state.plugins, t];
          e.updateState(n.reconfigure({ plugins: o }));
        }
      }
      function s(e, t) {
        if (!e.isDestroyed) {
          const n = e.state,
            o = n.plugins.filter((e) => e !== t);
          e.updateState(n.reconfigure({ plugins: o }));
        }
      }
      function l(e, t) {
        const { from: n, $from: o, to: r, empty: a } = e.selection;
        return a
          ? !!t.isInSet(e.storedMarks || o.marks())
          : e.doc.rangeHasMark(n, r, t);
      }
      function c(e, t, n) {
        let { $from: o, to: r, node: a } = e.selection;
        return !a && r <= o.end() && (a = o.parent), !!a && a.hasMarkup(t, n);
      }
      function i(e, t, n) {
        const { $from: o, to: r } = e.selection;
        for (let e = o.sharedDepth(r); e > 0; e--) {
          const r = o.node(e);
          if (r.hasMarkup(t, n)) return r;
        }
        return !1;
      }
      function d(e, t, n = {}) {
        return new o.fV(e, (e, o, r, a) => {
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
      function u(e, t, n) {
        const o = { left: t, top: n },
          a = e.posAtCoords(o);
        if (null == a ? void 0 : a.pos) {
          const t = e.state.doc.resolve(a.pos);
          e.dispatch(e.state.tr.setSelection(r.U3.near(t)));
        }
      }
    },
    55393: (e, t, n) => {
      "use strict";
      n.d(t, { l: () => B });
      var o = n(76217),
        r = n(63512),
        a = n(73170),
        s = n(49693),
        l = n(57053),
        c = n(81393);
      class i {
        constructor(e) {
          (this.m_nodes = []), (this.m_schema = e);
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
      class d extends s.Al {
        constructor(e) {
          super(e.bbcode_dictionary, () => new i(e.pm_schema)),
            (this.m_mapPMBBNodes = new Map()),
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
            this.ConvertLineBreaksToParagraphs(l.FK.fromArray(t)),
          );
        }
        TryCreateNode(e, t, n) {
          let o = l.FK.from(t);
          if (!e.node.validContent(o) && e.acceptNode) {
            let n = t.filter((t) => t.type == e.acceptNode);
            if (!n.length) {
              let o = t;
              e.acceptNode.isBlock &&
                o.length > 1 &&
                o[o.length - 1].type == this.schema.nodes.hard_break &&
                (o = o.slice(0, -1));
              const r = this.m_mapPMBBNodes.get(e.acceptNode.name);
              (0, c.w)(
                r,
                `Indicated acceptNode type ${e.acceptNode.name} for ${e.node.name} missing`,
              ),
                (n = r
                  ? [this.TryCreateNode(r, o, void 0)]
                  : [e.acceptNode.create(void 0, o)]);
            }
            o = l.FK.from(n);
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
                  (o = {
                    ...(o || {}),
                    [e.convertContentToAttr]:
                      ((r = n),
                      r
                        .filter((e) => e.isText)
                        .map((e) => e.text)
                        .join()),
                  }),
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
          var r;
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
                s = l.FK.from(e);
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
                    : ((0, c.w)(
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
            l.FK.from(o)
          );
        }
      }
      var u = n(29287),
        m = n(52893),
        p = n(98724);
      var g = n(22145),
        h = n(37834),
        f = n(90626),
        b = n(52038),
        k = n(61859),
        v = n(73745),
        _ = n(78327),
        C = n(73309);
      const B = (0, n(84811).Nr)(function (e) {
        const {
            schemaConfig: t,
            bbcode: n,
            className: s,
            onUpdate: c,
            refView: i,
            bSpellcheckEnabled: B = !0,
            panelProps: T,
            children: E,
            dataKey: M,
          } = e,
          [A, y] = f.useState(),
          w = f.useRef(),
          D = f.useMemo(() => new d(t), [t]),
          F = f.useRef(D);
        F.current = D;
        const N = f.useCallback(
          (e) => {
            var n, o;
            if (!e)
              return void (
                null === (n = w.current) ||
                void 0 === n ||
                n.destroy()
              );
            const r = w.current;
            r && r.destroy();
            const a = t.pm_schema;
            (w.current = new u.Lz(e, {
              state:
                null !== (o = null == r ? void 0 : r.state) && void 0 !== o
                  ? o
                  : m.$t.create({ schema: a }),
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
                  return l.Ji.maxOpen(r);
                })(F, a.nodes.hard_break, e),
            })),
              y(w.current);
          },
          [t],
        );
        f.useEffect(() => {
          A &&
            A.updateState(
              (function (e, t, n) {
                var o;
                const r = (0, p.b6)(),
                  a =
                    null === (o = r.spec.key) || void 0 === o
                      ? void 0
                      : o.get(n),
                  s = [...n.plugins.filter((e) => e != a), r];
                return m.$t.create({ schema: t, doc: e, plugins: s });
              })(F.current.ParseBBCode(n), t.pm_schema, A.state),
            );
        }, [t, n, A, M]),
          (0, v.D5)(i, A);
        const {
            refDiv: S,
            onActivate: O,
            onGamepadDirection: x,
          } = (function (e) {
            (0, _.rP)();
            const t = f.useRef(),
              n = (0, a.FN)(),
              o = f.useCallback(() => {
                var o, r;
                if (
                  (n.ShowVirtualKeyboard(),
                  !(null === (o = e.current) || void 0 === o
                    ? void 0
                    : o.hasFocus()))
                ) {
                  null === (r = e.current) || void 0 === r || r.focus();
                  let n = e.current.dom.childNodes;
                  for (let o = 0; o < n.length; ++o) {
                    let r = n[o],
                      a = r.offsetTop;
                    if (void 0 !== a && a >= t.current.scrollTop) {
                      let t = r.getBoundingClientRect();
                      (0, h.bQ)(e.current, t.left, t.top);
                      break;
                    }
                  }
                }
              }, [n, e]),
              s = f.useCallback((e) => e.currentTarget == e.target, []),
              l = (0, r.ak)(t, null, null, s);
            return { refDiv: t, onActivate: o, onGamepadDirection: l };
          })(w),
          L = (0, v.Ue)(S, N);
        return f.createElement(
          g.Ot,
          { view: A },
          f.createElement(o.Z, {
            key: `editordiv_${B}`,
            className: (0, b.A)(s, C.Container),
            ref: L,
            spellCheck: B,
            focusable: !0,
            onActivate: O,
            onOKActionDescription: (0, k.we)("#UserGameNotes_Edit"),
            onGamepadDirection: x,
            ...T,
          }),
          f.createElement(g.KF, { onUpdate: c, schema: t.pm_schema }),
          E,
        );
      });
    },
    79570: (e, t, n) => {
      "use strict";
      n.d(t, {
        Km: () => C,
        WJ: () => T,
        z9: () => A,
        C$: () => E,
        Hz: () => B,
        Nt: () => y,
        MV: () => k,
      });
      var o = n(98724),
        r = n(4188),
        a = n(37834),
        s = n(90626),
        l = n(4869),
        c = n(33737),
        i = n(9154),
        d = n(30175),
        u = n(52038),
        m = n(61859),
        p = n(73745),
        g = n(73309),
        h = n(32754);
      function f(e) {
        const { schema: t, children: n } = e,
          { callbacks: o, view: r } = (0, d.wU)(),
          [l, m] = s.useState(() => (0, a.Cd)(r.state, t.marks.link)),
          f = s.useCallback((e) => m((0, a.Cd)(e.state, t.marks.link)), [t]);
        (0, p.hL)(o, f);
        const [k, v, _] = (0, p.uD)();
        return s.createElement(
          s.Fragment,
          null,
          s.createElement(
            i.EN,
            { active: k },
            s.createElement(b, {
              schema: t,
              active: k,
              closeModal: _,
              view: r,
            }),
          ),
          s.createElement(
            h.Gq,
            {
              toolTipContent: "#FormattingToolbar_InsertLink",
              direction: "bottom",
            },
            s.createElement(
              c.$n,
              {
                className: (0, u.A)(g.CommandButton, l && g.Toggled),
                onMouseDown: (e) => {
                  e.preventDefault(), v();
                },
              },
              n,
            ),
          ),
        );
      }
      const b = s.memo(function (e) {
        const { schema: t, active: n, closeModal: o, view: r } = e,
          [a, l] = s.useState(""),
          [d, u] = s.useState(""),
          p = s.useRef(),
          g = s.useRef();
        return (
          s.useLayoutEffect(() => {
            if (n) {
              let e = "";
              r.state.selection.empty ||
                (e = r.state.doc.cut(
                  r.state.selection.from,
                  r.state.selection.to,
                ).textContent),
                l(e),
                e.startsWith("http")
                  ? (u(e),
                    p.current.Focus(),
                    window.setTimeout(() => {
                      p.current.element.select();
                    }, 0))
                  : 0 == e.length
                    ? p.current.Focus()
                    : g.current.Focus();
            }
          }, [n, r]),
          s.createElement(
            i.o0,
            {
              onOK: () => {
                r.dispatch(
                  r.state.tr.replaceRangeWith(
                    r.state.selection.from,
                    r.state.selection.to,
                    t.text(a || d, [t.marks.link.create({ href: d })]),
                  ),
                ),
                  r.focus(),
                  o();
              },
              closeModal: o,
              strTitle: (0, m.we)("#FormattingToolbar_InsertLink"),
              strOKButtonText: (0, m.we)("#FormattingToolbar_InsertLink"),
              bOKDisabled: 0 == d.length,
            },
            s.createElement(c.pd, {
              ref: p,
              value: a,
              onChange: (e) => l(e.currentTarget.value),
              label: (0, m.we)("#FormattingToolbar_LinkText"),
            }),
            s.createElement(c.pd, {
              ref: g,
              value: d,
              onChange: (e) => u(e.currentTarget.value),
              label: (0, m.we)("#FormattingToolbar_LinkAddress"),
            }),
          )
        );
      });
      function k() {
        return s.createElement(
          s.Fragment,
          null,
          s.createElement(
            d.fx,
            {
              tooltip: "#FormattingToolbar_Undo",
              command: o.tN,
              fnEnabledCheck: v,
            },
            s.createElement(l.VnB, null),
          ),
          s.createElement(
            d.fx,
            {
              tooltip: "#FormattingToolbar_Redo",
              command: o.ZS,
              fnEnabledCheck: _,
            },
            s.createElement(l.Bal, null),
          ),
        );
      }
      function v(e) {
        return o.mk(e.state) > 0;
      }
      function _(e) {
        return o.mL(e.state) > 0;
      }
      function C(e) {
        const { schema: t } = e;
        return s.createElement(
          s.Fragment,
          null,
          s.createElement(
            d.GY,
            { tooltip: "#FormattingToolbar_Bold", mark: t.marks.strong },
            s.createElement(l.l4n, null),
          ),
          s.createElement(
            d.GY,
            { tooltip: "#FormattingToolbar_Italic", mark: t.marks.italic },
            s.createElement(l.UKJ, null),
          ),
          s.createElement(
            d.GY,
            {
              tooltip: "#FormattingToolbar_Underline",
              mark: t.marks.underline,
            },
            s.createElement(l.Gj3, null),
          ),
          "strike" in t.marks &&
            s.createElement(
              d.GY,
              { tooltip: "#FormattingToolbar_Strike", mark: t.marks.strike },
              s.createElement(l.tI4, null),
            ),
          "code" in t.marks &&
            s.createElement(
              d.GY,
              { tooltip: "#FormattingToolbar_InlineCode", mark: t.marks.code },
              s.createElement(l.bmT, null),
            ),
        );
      }
      function B(e) {
        const { schema: t } = e;
        return s.createElement(
          d.u3,
          {
            tooltip: "#FormattingToolbar_Paragraph",
            nodeType: t.nodes.paragraph,
          },
          s.createElement(l.iYj, null),
        );
      }
      function T(e) {
        const { schema: t, maxLevel: n = 1, levels: o } = e,
          r = n + o - 1;
        return s.createElement(
          s.Fragment,
          null,
          n <= 1 &&
            s.createElement(
              d.u3,
              {
                tooltip: "#FormattingToolbar_HeadingLevel1",
                nodeType: t.nodes.heading,
                attrs: { level: 1 },
              },
              s.createElement(l.jRw, null),
            ),
          n <= 2 &&
            r >= 2 &&
            s.createElement(
              d.u3,
              {
                tooltip: "#FormattingToolbar_HeadingLevel2",
                nodeType: t.nodes.heading,
                attrs: { level: 2 },
              },
              s.createElement(l.qOW, null),
            ),
          n <= 3 &&
            r >= 3 &&
            s.createElement(
              d.u3,
              {
                tooltip: "#FormattingToolbar_HeadingLevel3",
                nodeType: t.nodes.heading,
                attrs: { level: 3 },
              },
              s.createElement(l.x7X, null),
            ),
          n <= 4 &&
            r >= 4 &&
            s.createElement(
              d.u3,
              {
                tooltip: "#FormattingToolbar_HeadingLevel4",
                nodeType: t.nodes.heading,
                attrs: { level: 4 },
              },
              s.createElement(l.qzO, null),
            ),
          n <= 5 &&
            r >= 5 &&
            s.createElement(
              d.u3,
              {
                tooltip: "#FormattingToolbar_HeadingLevel5",
                nodeType: t.nodes.heading,
                attrs: { level: 5 },
              },
              s.createElement(l.jXA, null),
            ),
        );
      }
      function E(e) {
        const { schema: t, showIndentButtonsAsNeeded: n = !1 } = e,
          { callbacks: o, view: a } = (0, d.wU)(),
          { bullet_list: c, ordered_list: i, list_item: u } = t.nodes,
          m = s.useMemo(() => r.T2(u), [u]),
          g = s.useMemo(() => r.$B(u), [u]),
          [h, f] = s.useState(() => m(a.state)),
          [b, k] = s.useState(() => g(a.state));
        return (
          (0, p.hL)(
            o,
            s.useCallback(
              (e) => {
                f(m(e.state)), k(g(e.state));
              },
              [m, g],
            ),
          ),
          s.createElement(
            s.Fragment,
            null,
            s.createElement(
              M,
              {
                tooltip: "#FormattingToolbar_BulletedList",
                list_type: c,
                list_item: u,
              },
              s.createElement(l.JPq, null),
            ),
            i && !1,
            (!n || h || b) &&
              s.createElement(
                s.Fragment,
                null,
                s.createElement(
                  d.cQ,
                  {
                    tooltip: "#FormattingToolbar_OutdentList",
                    disabled: !h,
                    command: m,
                  },
                  s.createElement(l.LSz, null),
                ),
                s.createElement(
                  d.cQ,
                  {
                    tooltip: "#FormattingToolbar_IndentList",
                    disabled: !b,
                    command: g,
                  },
                  s.createElement(l.ycU, null),
                ),
              ),
          )
        );
      }
      function M(e) {
        const { list_type: t, list_item: n, tooltip: o, children: l } = e,
          { callbacks: c, view: i } = (0, d.wU)(),
          u = s.useCallback((e) => !!(0, a.d7)(e.state, t), [t]),
          [m, g] = s.useState(() => u(i)),
          h = s.useMemo(() => r.Sd(t), [t]),
          f = s.useMemo(() => r.T2(n), [n]),
          b = s.useCallback((e) => (e ? f : h), [f, h]),
          [k, v] = s.useState(() => b(m)(i.state));
        return (
          (0, p.hL)(
            c,
            s.useCallback(
              (e) => {
                const t = u(e);
                g(t), v(b(t)(e.state));
              },
              [u, b],
            ),
          ),
          s.createElement(
            d.cQ,
            { tooltip: o, disabled: !k, toggled: m, command: b(m) },
            l,
          )
        );
      }
      function A(e) {
        const { schema: t } = e;
        return s.createElement(f, { schema: t }, s.createElement(l.YqK, null));
      }
      function y(e) {
        const { bSpellcheckEnabled: t, setSpellcheckEnabled: n } = e;
        return s.createElement(
          d.ff,
          {
            tooltip: t
              ? "#FormattingToolbar_DisableSpellcheck"
              : "#FormattingToolbar_EnableSpellcheck",
            toggled: t,
            onClick: () => n(!t),
          },
          s.createElement(l.DEV, null),
        );
      }
    },
    30175: (e, t, n) => {
      "use strict";
      n.d(t, {
        Ez: () => k,
        GY: () => _,
        XQ: () => f,
        bI: () => g,
        cQ: () => B,
        ff: () => T,
        fx: () => C,
        hK: () => b,
        u3: () => v,
        wU: () => p,
      });
      var o = n(37834),
        r = n(12362),
        a = n(90626),
        s = n(76217),
        l = n(33737),
        c = n(6144),
        i = n(52038),
        d = n(73745),
        u = n(73309),
        m = n(32754);
      const p = () => a.useContext(h);
      function g(e) {
        const { view: t, refUpdateToolbar: n, children: o } = e,
          r = a.useRef();
        r.current || (r.current = new c.lu()),
          a.useEffect(
            () => (
              (0, d.cZ)(n, () => r.current.Dispatch(t)),
              () => (0, d.cZ)(n, void 0)
            ),
            [t, n],
          );
        const s = a.useMemo(() => ({ callbacks: r.current, view: t }), [t]);
        return t ? a.createElement(h.Provider, { value: s }, o) : null;
      }
      const h = a.createContext(void 0);
      function f() {
        return a.createElement("div", { className: u.Gap });
      }
      function b() {
        return a.createElement("div", { className: u.Spacer });
      }
      function k(e) {
        return a.createElement(
          s.Z,
          {
            className: (0, i.A)(e.className, u.ToolbarRow),
            "flow-children": "row",
          },
          e.children,
        );
      }
      function v(e) {
        const { nodeType: t, tooltip: n, attrs: s, children: l } = e,
          { callbacks: c, view: i } = p(),
          [u, m] = a.useState(() => (0, o.gj)(i.state, t, s)),
          g = a.useCallback((e) => m((0, o.gj)(e.state, t, s)), [t, s]);
        (0, d.hL)(c, g);
        const h = a.useMemo(() => r.y_(t, s), [s, t]);
        return a.createElement(B, {
          command: h,
          tooltip: n,
          toggled: u,
          children: l,
        });
      }
      function _(e) {
        const { mark: t, tooltip: n, children: s } = e,
          { callbacks: l, view: c } = p(),
          [i, u] = a.useState(() => (0, o.Cd)(c.state, t)),
          m = a.useCallback((e) => u((0, o.Cd)(e.state, t)), [t]);
        (0, d.hL)(l, m);
        const g = a.useMemo(() => r.wh(t), [t]);
        return a.createElement(B, {
          command: g,
          tooltip: n,
          toggled: i,
          children: s,
        });
      }
      function C(e) {
        const { fnEnabledCheck: t, ...n } = e,
          { callbacks: o, view: r } = p(),
          [s, l] = a.useState(() => t(r)),
          c = a.useCallback((e) => l(t(e)), [t]);
        return (0, d.hL)(o, c), a.createElement(B, { ...n, disabled: !s });
      }
      function B(e) {
        const {
            command: t,
            toggled: n,
            tooltip: o,
            disabled: r,
            children: s,
          } = e,
          { view: c } = p();
        return a.createElement(
          m.Gq,
          { toolTipContent: o, bDisabled: !o, direction: "bottom" },
          a.createElement(
            l.$n,
            {
              className: (0, i.A)(u.CommandButton, n && u.Toggled),
              onMouseDown: (e) => {
                e.preventDefault(), t(c.state, c.dispatch, c);
              },
              disabled: !0 === r,
              focusable: !r,
            },
            s,
          ),
        );
      }
      function T(e) {
        const {
          onClick: t,
          toggled: n,
          tooltip: o,
          disabled: r,
          children: s,
        } = e;
        return a.createElement(
          m.Gq,
          { toolTipContent: o, bDisabled: !o, direction: "bottom" },
          a.createElement(
            l.$n,
            {
              className: (0, i.A)(u.CommandButton, n && u.Toggled),
              onMouseDown: (e) => {
                e.preventDefault(), t();
              },
              disabled: !0 === r,
            },
            s,
          ),
        );
      }
    },
  },
]);
