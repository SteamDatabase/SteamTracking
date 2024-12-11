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
    91293: (e, t, n) => {
      "use strict";
      n.d(t, { U: () => He });
      var o = n(63696),
        r = n(43780),
        a = n(85688);
      function s(e, t) {
        return l(t.pm_schema, t.pm_to_bbcode_config, e, []);
      }
      function l(e, t, n, o) {
        let s = n.marks,
          d = "";
        const m = t.mapNodes.get(n.type),
          { tag: u, args: p } = (function (e, t) {
            if (e && e.AttrsToBBArgs) {
              const { tag: n = e.tag, args: o = {} } = e.AttrsToBBArgs(
                t.attrs,
                t,
              );
              return { tag: n, args: o };
            }
            return { tag: e?.tag, args: {} };
          })(m, n);
        return (
          u && (d += (0, r.CS)(u, p)),
          n.content.forEach((n) => {
            ([d, s] = c(t, s, n.marks, d)),
              ([d, s] = (function (e, t, n, o) {
                let s;
                for (const l of n)
                  if (-1 === t.indexOf(l)) {
                    s || (s = t.slice());
                    const n = e.mapMarks.get(l.type);
                    if (((0, a.w)(n, "mark missing bbtag"), n)) {
                      s.push(l);
                      const { args: e, tag: t } = i(n, l);
                      o += (0, r.CS)(t, e);
                    }
                  }
                return [o, s ?? t];
              })(t, s, n.marks, d)),
              n.type.isText
                ? (d += (0, r.vE)(n.text || ""))
                : n.type == e.nodes.hard_break
                  ? (d += "\n")
                  : (d += l(e, t, n, s));
          }),
          ([d] = c(t, s, o, d)),
          u && (d += (0, r.op)(u)),
          d
        );
      }
      function c(e, t, n, o) {
        const s = [];
        for (const e of t) -1 === n.indexOf(e) && s.push(e);
        if (!s.length) return [o, t];
        const l = t.slice();
        for (
          ;
          s.length && ((0, a.w)(l.length, "no marks left to close"), l.length);
        ) {
          const t = l.pop(),
            n = e.mapMarks.get(t.type),
            { tag: a } = i(n, t);
          o += (0, r.op)(a);
          const c = s.indexOf(t);
          -1 != c && s.splice(c, 1);
        }
        return [o, l];
      }
      function i(e, t) {
        if (e && e.AttrsToBBArgs) {
          const { tag: n = e.tag, args: o = {} } = e.AttrsToBBArgs(t.attrs, t);
          return { tag: n, args: o };
        }
        return { tag: e?.tag, args: {} };
      }
      var d = n(17372),
        m = n(81429),
        u = n(67599),
        p = n(46108),
        h = n(87300),
        g = n(62738),
        f = n(37195),
        b = n(16486),
        E = n(18305);
      function _(e, t) {
        const { from: n, $from: o, to: r, empty: a } = e.selection;
        return a
          ? !!t.isInSet(e.storedMarks || o.marks())
          : e.doc.rangeHasMark(n, r, t);
      }
      function k(e, t, n) {
        let { $from: o, to: r, node: a } = e.selection;
        return !a && r <= o.end() && (a = o.parent), !!a && a.hasMarkup(t, n);
      }
      function T(e, t, n) {
        const { $from: o, to: r } = e.selection;
        for (let e = o.sharedDepth(r); e > 0; e--) {
          const r = o.node(e);
          if (void 0 === n ? r.type === t : r.hasMarkup(t, n))
            return o.before(e);
        }
      }
      function C(e, t, n = {}) {
        return new b.fV(e, (e, o, r, a) => {
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
      function v(e, t, n) {
        const o = { left: t, top: n },
          r = e.posAtCoords(o);
        if (r?.pos) {
          const t = e.state.doc.resolve(r.pos);
          e.dispatch(e.state.tr.setSelection(u.U3.near(t)));
        }
      }
      var B = n(30814);
      n(74763), n(45772);
      const w = o.createContext(null);
      function N(e) {
        return o.createElement(w.Provider, { value: e.view }, e.children);
      }
      const A = o.memo(function (e) {
        const { schema: t, onUpdate: n } = e,
          r = o.useRef(n);
        return (
          (r.current = n),
          y(
            o.useMemo(
              () =>
                new u.k_({
                  view: (e) => ({ update: (...e) => r.current(...e) }),
                }),
              [],
            ),
          ),
          y(o.useMemo(() => (0, B.z)(), [])),
          y(
            o.useMemo(
              () =>
                (function (e) {
                  const t = (0, h.st)(
                      h.I$,
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
                    ),
                    n = {
                      "Mod-z": f.tN,
                      "Mod-y": f.ZS,
                      Backspace: b.dv,
                      Escape: h.hy,
                      "Mod-Enter": t,
                      "Shift-Enter": t,
                      "Mod-b": (0, h.wh)(e.marks.strong),
                      "Mod-i": (0, h.wh)(e.marks.italic),
                      "Mod-u": (0, h.wh)(e.marks.underline),
                      Enter: (0, E.wn)(e.nodes.list_item),
                      "Mod-[": (0, E.T2)(e.nodes.list_item),
                      "Mod-]": (0, E.$B)(e.nodes.list_item),
                      "Shift-Ctrl-1": (0, h.y_)(e.nodes.heading, { level: 1 }),
                      "Shift-Ctrl-2": (0, h.y_)(e.nodes.heading, { level: 2 }),
                      "Shift-Ctrl-3": (0, h.y_)(e.nodes.heading, { level: 3 }),
                      "Shift-Ctrl-4": (0, h.y_)(e.nodes.heading, { level: 4 }),
                      "Shift-Ctrl-5": (0, h.y_)(e.nodes.heading, { level: 5 }),
                      "Shift-Ctrl-0": (0, h.y_)(e.nodes.paragraph),
                    };
                  return (
                    e.nodes.horizontal_rule &&
                      (n["Mod-_"] = (t, n) => (
                        n &&
                          n(
                            t.tr
                              .replaceSelectionWith(
                                e.nodes.horizontal_rule.create(),
                              )
                              .scrollIntoView(),
                          ),
                        !0
                      )),
                    (0, g.w)(n)
                  );
                })(t),
              [t],
            ),
          ),
          y(o.useMemo(() => (0, g.w)(h.RV), [])),
          y(
            o.useMemo(
              () =>
                (function (e) {
                  return (0, b.sM)({
                    rules: [
                      (0, b.tG)(
                        /^(\d+)\.\s$/,
                        e.nodes.ordered_list,
                        (e) => ({ order: parseInt(e[1]) }),
                        (e, t) =>
                          t.childCount + t.attrs.order == parseInt(e[1]),
                      ),
                      (0, b.tG)(/^\s*([-+*])\s$/, e.nodes.bullet_list),
                      C(/\*([^*]+)\*/, e.marks.strong),
                      C(/_([^_]+)_/, e.marks.italic),
                      C(/~([^~]+)~/, e.marks.strike),
                      C(/`([^`]+)`/, e.marks.code),
                      (0, b.JJ)(/^```$/, e.nodes.code_block),
                      (0, b.JJ)(/^(#{1,5})\s$/, e.nodes.heading, (e) => ({
                        level: e[1].length,
                      })),
                      e.nodes.horizontal_rule &&
                        ((t = /^(\*\*\*|---|___)$/),
                        (n = e.nodes.horizontal_rule),
                        new b.fV(t, (e, t, o, r) =>
                          e.tr.replaceWith(o, r, n.create()),
                        )),
                    ].filter(Boolean),
                  });
                  var t, n;
                })(t),
              [t],
            ),
          ),
          null
        );
      });
      function y(e) {
        const t = o.useContext(w);
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
      var M = n(48139);
      const S = o.memo(function (e) {
        const {
            linkMarkType: t,
            onURLPasted: n,
            schema: r,
            onClickURL: a = P,
          } = e,
          s = o.useRef(a);
        s.current = a;
        const [l, c] = o.useState(),
          [i, h] = o.useState(),
          [g, f] = o.useState(),
          b = o.useMemo(
            () =>
              new u.k_({
                props: {
                  handleClickOn(e, n, o, r, a, l) {
                    if (l && (a.ctrlKey || 1 == a.button)) {
                      const e = o
                        .resolve(n - r)
                        .marks()
                        .find((e) => e.type == t);
                      if (e)
                        return (
                          s.current(e.attrs.href, a.view),
                          a.preventDefault(),
                          !0
                        );
                    }
                    return !1;
                  },
                  clipboardTextParser(e, o, a, s) {
                    let l,
                      c = [];
                    for (; (l = e.match(d.O)); ) {
                      l.index > 0 && c.push(r.text(e.substring(0, l.index)));
                      const o = (0, d.S)(l[0]),
                        a = n && n(o);
                      a && "default" !== a
                        ? "remove" !== a && c.push(a)
                        : c.push(r.text(l[0], [t.create({ href: o })])),
                        (e = e.substring(l.index + l[0].length));
                    }
                    return (
                      e.length && c.push(r.text(e)),
                      new m.Ji(m.FK.from(c), o.start(), o.end())
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
                        c(e.left + e.width / 2), h(e.bottom + 2), f(n);
                      } else f(void 0);
                      return !1;
                    },
                    mouseleave: (e, t) => (f(void 0), !1),
                  },
                },
              }),
            [t, n, r],
          );
        if ((y(b), !g || !i || !l)) return null;
        const E = g.getAttribute("href");
        return o.createElement(
          D,
          { top: i, left: l },
          o.createElement("div", { className: M.Link }, E),
          o.createElement(
            "div",
            { className: M.LinkHelp },
            (0, p.we)("#UserGameNotes_ClickToOpenLink"),
          ),
        );
      });
      function D(e) {
        const { top: t, left: n, children: r } = e,
          [a, s] = o.useState(0),
          l = o.useRef(null);
        o.useLayoutEffect(() => {
          s(l.current.getBoundingClientRect().width);
        }, [t, n, r]);
        const c = { top: `${t}px`, left: `${Math.max(n - a / 2, 12)}px` };
        return o.createElement(
          "div",
          { className: M.Hover, style: c, ref: l },
          r,
        );
      }
      function P(e, t) {
        t.open(e);
      }
      var x = n(49787),
        O = n.n(x),
        F = n(90765);
      function L(e, t, n = 0) {
        return () => [e, { class: t }, n];
      }
      const I = {
          paragraph: {
            content: "inline*",
            group: "block",
            parseDOM: [{ tag: "p" }],
            toDOM: L("p", (0, F.A)("pm_paragraph", O().Paragraph)),
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
                  `BB_Header${e.attrs.level} ` + O()[`Header${e.attrs.level}`],
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
              return ["img", { src: t, alt: n, title: o, class: O().Image }];
            },
            bbCode: {
              tag: "img",
              BBArgsToAttrs: (e) => ({ src: e.src }),
              AttrsToBBArgs: (e) => ({ args: { src: e.src } }),
              convertContentToAttr: "src",
            },
          },
          bullet_list: {
            ...E.fF,
            content: "list_item+",
            group: "block",
            toDOM: L("ul", O().List),
            bbCode: { tag: "list" },
          },
          ordered_list: {
            ...E.o8,
            content: "list_item+",
            group: "block",
            toDOM: L("ol", O().OrderedList),
            bbCode: { tag: "olist" },
          },
          list_item: {
            ...E.Aw,
            content: "paragraph block*",
            toDOM: L("li", O().ListItem),
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
              { class: O().CodeBlock },
              ["code", { class: O().Code }, 0],
            ],
            bbCode: { tag: "code" },
          },
        },
        U = {
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
            toDOM: L("b", (0, F.A)("BB_Bold", O().Bold)),
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
            toDOM: L("i", (0, F.A)("BB_Italic", O().Italic)),
            bbCode: { tag: "i" },
          },
          underline: {
            parseDOM: [{ tag: "u" }, { style: "text-decoration=underline" }],
            toDOM: L("u", (0, F.A)("BB_Underline", O().Underline)),
            bbCode: { tag: "u" },
          },
          strike: {
            parseDOM: [{ style: "text-decoration=line-through" }],
            toDOM: L("span", (0, F.A)("BB_Strike", O().Strike)),
            bbCode: { tag: "strike" },
          },
          code: {
            parseDOM: [{ tag: "code" }],
            toDOM: L("code", (0, F.A)("BB_Code", O().Code)),
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
      function G(e, t) {
        if (t) {
          if (Array.isArray(e)) {
            const n = e.filter((e) => t.has(e.tag));
            return n.length > 0 ? n : void 0;
          }
          return t.has(e.tag) ? e : void 0;
        }
        return e;
      }
      const R = { nodes: { ...I }, marks: { ...U } },
        $ = new (class {
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
          constructor(e, t) {
            const n = {
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
              o = new Map(),
              r = new Map(),
              a = t ? new Set(t) : void 0;
            for (const t in e.nodes) {
              const { bbCode: r, ...s } = e.nodes[t],
                l = G(r, a);
              l && ((n[t] = s), o.set(t, l));
            }
            const s = {};
            for (const t in e.marks) {
              const { bbCode: n, ...o } = e.marks[t];
              (a && !a.has(n.tag)) || ((s[t] = o), r.set(t, n));
            }
            (this.m_ProseMirrorSchema = new m.Sj({ nodes: n, marks: s })),
              o.forEach((t, n) => {
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
              r.forEach((e, t) => {
                const n = this.m_ProseMirrorSchema.marks[t],
                  { tag: o, BBArgsToAttrs: r, AttrsToBBArgs: a, ...s } = e;
                this.m_mapBBCodeDictionary.set(o, {
                  Constructor: { mark: n, BBArgsToAttrs: r },
                  ...s,
                }),
                  this.m_PMToBBCodeConfig.mapMarks.set(n, {
                    tag: o,
                    AttrsToBBArgs: a,
                  });
              });
          }
        })(R);
      var K = n(45264),
        W = n(38602),
        q = n(94361),
        V = n(64608),
        H = n(35488),
        z = n(10606),
        j = n(90601);
      const J = "/images/image_error.svg";
      function Q(e) {
        const { uploadImage: t, nodeType: n, nMaxImageSize: r = Z } = e;
        return (
          y(
            o.useMemo(
              () =>
                new u.k_({
                  key: new u.hs(`PMUploadImage_${n.name}`),
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
                              src: J,
                              title: (0, p.we)("#UserGameNotes_ImageTooLarge"),
                            }),
                          ];
                          return new m.Ji(m.FK.from(t), 0, 0);
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
                                  a = (0, j.wI)(await r.arrayBuffer());
                                X(
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
      function X(e, t, n) {
        n.state.doc.descendants((o, r) => {
          if ("image" === o.type.name && o.attrs.src === e) {
            const e = n.state.tr.setNodeAttribute(r, "src", t);
            n.dispatch(e);
          }
        });
      }
      const Z = 1048576;
      var Y = n(69164),
        ee = n(69),
        te = n(41537);
      class ne {
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
      function oe(e) {
        return e
          .filter((e) => e.isText)
          .map((e) => e.text)
          .join();
      }
      class re extends r.Al {
        m_schemaConfig;
        m_mapPMBBNodes = new Map();
        constructor(e) {
          super(e.bbcode_dictionary, () => new ne(e.pm_schema)),
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
            this.ConvertLineBreaksToParagraphs(m.FK.fromArray(t)),
          );
        }
        TryCreateNode(e, t, n) {
          let o = m.FK.from(t);
          if (!e.node.validContent(o) && e.acceptNode) {
            let n = t.filter((t) => t.type == e.acceptNode);
            if (!n.length) {
              let o = t;
              e.acceptNode.isBlock &&
                o.length > 1 &&
                o[o.length - 1].type == this.schema.nodes.hard_break &&
                (o = o.slice(0, -1));
              const r = this.m_mapPMBBNodes.get(e.acceptNode.name);
              (0, a.w)(
                r,
                `Indicated acceptNode type ${e.acceptNode.name} for ${e.node.name} missing`,
              ),
                (n = r
                  ? [this.TryCreateNode(r, o, void 0)]
                  : [e.acceptNode.create(void 0, o)]);
            }
            o = m.FK.from(n);
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
                  (o = { ...(o || {}), [e.convertContentToAttr]: oe(n) }),
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
              const s = e.type == n.nodes.hard_break,
                l = m.FK.from(e);
              if (s || n.topNodeType.validContent(l)) {
                const t = s && r.nodes.length > 0;
                r.emit(),
                  s
                    ? t || o.push(n.nodes.paragraph.createChecked())
                    : o.push(e);
              } else {
                let o;
                (o = n.nodes.paragraph.validContent(l)
                  ? n.nodes.paragraph
                  : t.get(e.type.name)),
                  o
                    ? r.accumulate(o, e)
                    : ((0, a.w)(
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
            m.FK.from(o)
          );
        }
      }
      var ae = n(91633),
        se = n(42318),
        le = n(52451),
        ce = n(76627),
        ie = n(87429);
      const de = "noborder",
        me = "equalcells",
        ue = ie.of({
          tableGroup: "block",
          cellContent: "paragraph block*",
          cellAttributes: {
            class: {
              default: O().TableCell,
              setDOMAttr: (e, t) => {
                t.class = e;
              },
            },
          },
        }),
        pe = {
          BBArgsToAttrs: (e) => {
            const t = {};
            return (
              e.colspan && (t.colspan = parseInt(e.colspan)),
              e.rowspan && (t.rowspan = parseInt(e.rowspan)),
              e.colwidth &&
                (t.colwidth = e.colwidth.split(",").map((e) => parseInt(e))),
              t
            );
          },
          AttrsToBBArgs: (e) => {
            const t = {};
            return (
              e.colspan && 1 != e.colspan && (t.colspan = e.colspan.toString()),
              e.rowspan && 1 != e.rowspan && (t.rowspan = e.rowspan.toString()),
              e.colwidth && (t.colwidth = e.colwidth.join(",")),
              { args: t }
            );
          },
        },
        he =
          (ue.table,
          ue.table_row,
          L("tr", O().TableRow),
          ue.table_cell,
          ue.table_header,
          o.memo(function () {
            return (
              y(o.useMemo(() => ie.AL({ View: ge }), [])),
              y(o.useMemo(() => ie.LF(), [])),
              null
            );
          }));
      class ge extends ie.Qg {
        constructor(e, t) {
          super(e, t), this.SetTableClass(e);
        }
        update(e) {
          return !!super.update(e) && (this.SetTableClass(e), !0);
        }
        SetTableClass(e) {
          this.table.className = (0, F.A)(
            O().Table,
            e.attrs[de] && O().NoBorder,
            e.attrs[me] && O().EqualCells,
          );
        }
      }
      const fe = (0, se.Nr)(function (e) {
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
          [m, h] = o.useState(),
          [g, b] = o.useState(),
          [E, _] = o.useState(),
          k = o.useRef(),
          T = o.useMemo(() => new re(t), [t]);
        o.useEffect(() => {
          _((e) =>
            (function (e, t, n) {
              const o = (0, f.b6)();
              let r = [o];
              if (n) {
                const e = o.spec.key?.get(n);
                r = [...n.plugins.filter((t) => t != e), o];
              }
              return u.$t.create({ schema: t, doc: e, plugins: r });
            })(T.ParseBBCode(n), t.pm_schema, e),
          );
        }, [t, n, T, d]),
          o.useEffect(() => {
            if (!E || !m) return;
            const e = k.current?.initialState == E ? k.current.view.state : E;
            k.current?.view.destroy(),
              (k.current = {
                view: new ae.Lz(m, { state: e }),
                initialState: E,
              }),
              b(k.current.view);
          }, [E, m]),
          o.useEffect(() => () => g?.destroy(), [g]),
          (0, le.D5)(s, g);
        const {
            refDiv: C,
            onActivate: B,
            onGamepadDirection: w,
          } = (function (e) {
            const t = o.useRef(),
              n = (0, te.FN)(),
              r = o.useCallback(() => {
                n.ShowVirtualKeyboard();
                let o = e?.hasFocus();
                if (!o) {
                  e.focus();
                  let n = e.dom.childNodes;
                  for (let o = 0; o < n.length; ++o) {
                    let r = n[o],
                      a = r.offsetTop;
                    if (void 0 !== a && a >= t.current.scrollTop) {
                      let t = r.getBoundingClientRect();
                      v(e, t.left, t.top);
                      break;
                    }
                  }
                }
              }, [n, e]),
              a = o.useCallback((e) => e.currentTarget == e.target, []),
              s = (0, ee.ak)(t, null, null, a);
            return { refDiv: t, onActivate: r, onGamepadDirection: s };
          })(g),
          y = (0, le.Ue)(C, h);
        return o.createElement(
          N,
          { view: g },
          o.createElement(Y.Z, {
            key: `editordiv_${l}`,
            className: (0, F.A)(r, ce.Container),
            ref: y,
            spellCheck: l,
            focusable: !0,
            onActivate: B,
            onOKActionDescription: (0, p.we)("#UserGameNotes_Edit"),
            onGamepadDirection: w,
            ...c,
          }),
          o.createElement(A, { onUpdate: a, schema: t.pm_schema }),
          o.createElement(be, { parser: T, schema: t.pm_schema }),
          "table" in t.pm_schema.nodes && o.createElement(he, null),
          i,
        );
      });
      const be = o.memo(function (e) {
        const { parser: t, schema: n } = e;
        return (
          y(
            o.useMemo(
              () =>
                new u.k_({
                  props: {
                    transformPasted: (e, o) =>
                      (function (e, t, n) {
                        let o = !1;
                        if (
                          (n.content.forEach((e) => {
                            e.type == t && (o = !0);
                          }),
                          !o)
                        )
                          return n;
                        const r = e.ConvertLineBreaksToParagraphs(n.content);
                        return m.Ji.maxOpen(r);
                      })(t, n.nodes.hard_break, e),
                  },
                }),
              [t, n],
            ),
          ),
          null
        );
      });
      var Ee = n(98995),
        _e = n(72476),
        ke = n(71594),
        Te = n(79769);
      const Ce = () => o.useContext(Be);
      function ve(e) {
        const { view: t, refUpdateToolbar: n, children: r } = e,
          a = o.useRef();
        a.current || (a.current = new Te.lu()),
          o.useEffect(
            () => (
              (0, le.cZ)(n, () => a.current.Dispatch(t)),
              () => (0, le.cZ)(n, void 0)
            ),
            [t, n],
          );
        const s = o.useMemo(() => ({ callbacks: a.current, view: t }), [t]);
        return t ? o.createElement(Be.Provider, { value: s }, r) : null;
      }
      const Be = o.createContext(void 0);
      function we() {
        return o.createElement("div", { className: ce.Gap });
      }
      function Ne() {
        return o.createElement("div", { className: ce.Spacer });
      }
      function Ae(e) {
        return o.createElement(
          Y.Z,
          {
            className: (0, F.A)(e.className, ce.ToolbarRow),
            "flow-children": "row",
          },
          e.children,
        );
      }
      function ye(e) {
        const { nodeType: t, tooltip: n, attrs: r, children: a } = e,
          { callbacks: s, view: l } = Ce(),
          [c, i] = o.useState(() => k(l.state, t, r)),
          d = o.useCallback((e) => i(k(e.state, t, r)), [t, r]);
        (0, le.hL)(s, d);
        const m = o.useMemo(() => h.y_(t, r), [r, t]);
        return o.createElement(Se, {
          command: m,
          tooltip: n,
          toggled: c,
          children: a,
        });
      }
      function Me(e) {
        const { mark: t, tooltip: n, children: r } = e,
          { callbacks: a, view: s } = Ce(),
          [l, c] = o.useState(() => _(s.state, t)),
          i = o.useCallback((e) => c(_(e.state, t)), [t]);
        (0, le.hL)(a, i);
        const d = o.useMemo(() => h.wh(t), [t]);
        return o.createElement(Se, {
          command: d,
          tooltip: n,
          toggled: l,
          children: r,
        });
      }
      function Se(e) {
        const { command: t, toggled: n, tooltip: r, children: a } = e,
          { view: s, callbacks: l } = Ce(),
          [c, i] = o.useState(() => t(s.state));
        (0, le.hL)(
          l,
          o.useCallback((e) => i(t(e.state)), [t]),
        ),
          o.useEffect(() => i(t(s.state)), [t, s]);
        const d = !c && !n;
        return o.createElement(
          Ee.Gq,
          { toolTipContent: r, bDisabled: !r, direction: "bottom" },
          o.createElement(
            V.$n,
            {
              className: (0, F.A)(ce.CommandButton, n && ce.Toggled),
              onMouseDown: (e) => {
                e.preventDefault(), t(s.state, s.dispatch, s);
              },
              disabled: d,
              focusable: !d,
            },
            a,
          ),
        );
      }
      function De(e) {
        const {
          onClick: t,
          toggled: n,
          tooltip: r,
          disabled: a,
          children: s,
        } = e;
        return o.createElement(
          Ee.Gq,
          { toolTipContent: r, bDisabled: !r, direction: "bottom" },
          o.createElement(
            V.$n,
            {
              className: (0, F.A)(ce.CommandButton, n && ce.Toggled),
              onMouseDown: (e) => {
                e.preventDefault(), t();
              },
              disabled: !0 === a,
            },
            s,
          ),
        );
      }
      function Pe(e) {
        const { schema: t, children: n } = e,
          { callbacks: r, view: a } = Ce(),
          [s, l] = o.useState(() => _(a.state, t.marks.link)),
          c = o.useCallback((e) => l(_(e.state, t.marks.link)), [t]);
        (0, le.hL)(r, c);
        const [i, d, m] = (0, le.uD)();
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            z.EN,
            { active: i },
            o.createElement(xe, {
              schema: t,
              active: i,
              closeModal: m,
              view: a,
            }),
          ),
          o.createElement(
            Ee.Gq,
            {
              toolTipContent: "#FormattingToolbar_InsertLink",
              direction: "bottom",
            },
            o.createElement(
              V.$n,
              {
                className: (0, F.A)(ce.CommandButton, s && ce.Toggled),
                onMouseDown: (e) => {
                  e.preventDefault(), d();
                },
              },
              n,
            ),
          ),
        );
      }
      const xe = o.memo(function (e) {
        const { schema: t, active: n, closeModal: r, view: a } = e,
          [s, l] = o.useState(""),
          [c, i] = o.useState(""),
          d = o.useRef(),
          m = o.useRef();
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
                  ? (i(e),
                    d.current.Focus(),
                    window.setTimeout(() => {
                      d.current.element.select();
                    }, 0))
                  : 0 == e.length
                    ? d.current.Focus()
                    : m.current.Focus();
            }
          }, [n, a]),
          o.createElement(
            z.o0,
            {
              onOK: () => {
                a.dispatch(
                  a.state.tr.replaceRangeWith(
                    a.state.selection.from,
                    a.state.selection.to,
                    t.text(s || c, [t.marks.link.create({ href: c })]),
                  ),
                ),
                  a.focus(),
                  r();
              },
              closeModal: r,
              strTitle: (0, p.we)("#FormattingToolbar_InsertLink"),
              strOKButtonText: (0, p.we)("#FormattingToolbar_InsertLink"),
              bOKDisabled: 0 == c.length,
            },
            o.createElement(V.pd, {
              ref: d,
              value: s,
              onChange: (e) => l(e.currentTarget.value),
              label: (0, p.we)("#FormattingToolbar_LinkText"),
            }),
            o.createElement(V.pd, {
              ref: m,
              value: c,
              onChange: (e) => i(e.currentTarget.value),
              label: (0, p.we)("#FormattingToolbar_LinkAddress"),
            }),
          )
        );
      });
      function Oe() {
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            Se,
            { tooltip: "#FormattingToolbar_Undo", command: f.tN },
            o.createElement(H.Undo, null),
          ),
          o.createElement(
            Se,
            { tooltip: "#FormattingToolbar_Redo", command: f.ZS },
            o.createElement(H.Redo, null),
          ),
        );
      }
      function Fe(e) {
        const { schema: t } = e;
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            Me,
            { tooltip: "#FormattingToolbar_Bold", mark: t.marks.strong },
            o.createElement(H.TextBold, null),
          ),
          o.createElement(
            Me,
            { tooltip: "#FormattingToolbar_Italic", mark: t.marks.italic },
            o.createElement(H.TextItalic, null),
          ),
          o.createElement(
            Me,
            {
              tooltip: "#FormattingToolbar_Underline",
              mark: t.marks.underline,
            },
            o.createElement(H.TextUnderline, null),
          ),
          "strike" in t.marks &&
            o.createElement(
              Me,
              { tooltip: "#FormattingToolbar_Strike", mark: t.marks.strike },
              o.createElement(H.TextStrikethrough, null),
            ),
          "code" in t.marks &&
            o.createElement(
              Me,
              { tooltip: "#FormattingToolbar_InlineCode", mark: t.marks.code },
              o.createElement(H.TextCode, null),
            ),
        );
      }
      function Le(e) {
        const { schema: t } = e;
        return o.createElement(
          ye,
          {
            tooltip: "#FormattingToolbar_Paragraph",
            nodeType: t.nodes.paragraph,
          },
          o.createElement(H.TextParagraph, null),
        );
      }
      function Ie(e) {
        const { schema: t, maxLevel: n = 1, levels: r } = e,
          a = n + r - 1;
        return o.createElement(
          o.Fragment,
          null,
          n <= 1 &&
            o.createElement(
              ye,
              {
                tooltip: "#FormattingToolbar_HeadingLevel1",
                nodeType: t.nodes.heading,
                attrs: { level: 1 },
              },
              o.createElement(H.TextH1, null),
            ),
          n <= 2 &&
            a >= 2 &&
            o.createElement(
              ye,
              {
                tooltip: "#FormattingToolbar_HeadingLevel2",
                nodeType: t.nodes.heading,
                attrs: { level: 2 },
              },
              o.createElement(H.TextH2, null),
            ),
          n <= 3 &&
            a >= 3 &&
            o.createElement(
              ye,
              {
                tooltip: "#FormattingToolbar_HeadingLevel3",
                nodeType: t.nodes.heading,
                attrs: { level: 3 },
              },
              o.createElement(H.TextH3, null),
            ),
          n <= 4 &&
            a >= 4 &&
            o.createElement(
              ye,
              {
                tooltip: "#FormattingToolbar_HeadingLevel4",
                nodeType: t.nodes.heading,
                attrs: { level: 4 },
              },
              o.createElement(H.TextH4, null),
            ),
          n <= 5 &&
            a >= 5 &&
            o.createElement(
              ye,
              {
                tooltip: "#FormattingToolbar_HeadingLevel5",
                nodeType: t.nodes.heading,
                attrs: { level: 5 },
              },
              o.createElement(H.TextH5, null),
            ),
        );
      }
      function Ue(e) {
        const { schema: t, showIndentButtonsAsNeeded: n = !1 } = e,
          { callbacks: r, view: a } = Ce(),
          { bullet_list: s, ordered_list: l, list_item: c } = t.nodes,
          i = o.useMemo(() => E.T2(c), [c]),
          d = o.useMemo(() => E.$B(c), [c]),
          [m, u] = o.useState(() => i(a.state) || d(a.state));
        return (
          (0, le.hL)(
            r,
            o.useCallback(
              (e) => {
                u(i(e.state) || d(e.state));
              },
              [i, d],
            ),
          ),
          o.createElement(
            o.Fragment,
            null,
            o.createElement(
              Ge,
              {
                tooltip: "#FormattingToolbar_BulletedList",
                list_type: s,
                list_item: c,
              },
              o.createElement(H.TextBullets, null),
            ),
            l && !1,
            (!n || m) &&
              o.createElement(
                o.Fragment,
                null,
                o.createElement(
                  Se,
                  { tooltip: "#FormattingToolbar_OutdentList", command: i },
                  o.createElement(H.TextOutdent, null),
                ),
                o.createElement(
                  Se,
                  { tooltip: "#FormattingToolbar_IndentList", command: d },
                  o.createElement(H.TextIndent, null),
                ),
              ),
          )
        );
      }
      function Ge(e) {
        const { list_type: t, list_item: n, tooltip: r, children: a } = e,
          { callbacks: s, view: l } = Ce(),
          c = o.useCallback((e) => void 0 !== T(e.state, t), [t]),
          [i, d] = o.useState(() => c(l)),
          m = o.useMemo(() => E.Sd(t), [t]),
          u = o.useMemo(() => E.T2(n), [n]);
        return (
          (0, le.hL)(
            s,
            o.useCallback(
              (e) => {
                d(c(e));
              },
              [c],
            ),
          ),
          o.createElement(Se, { tooltip: r, toggled: i, command: i ? u : m }, a)
        );
      }
      function Re(e) {
        const { schema: t } = e;
        return o.createElement(
          Pe,
          { schema: t },
          o.createElement(H.TextLink, null),
        );
      }
      function $e(e) {
        const { bSpellcheckEnabled: t, setSpellcheckEnabled: n } = e;
        return o.createElement(
          De,
          {
            tooltip: t
              ? "#FormattingToolbar_DisableSpellcheck"
              : "#FormattingToolbar_EnableSpellcheck",
            toggled: t,
            onClick: () => n(!t),
          },
          o.createElement(H.SpellCheck, null),
        );
      }
      var Ke = n(51076);
      function We(e) {
        const {
            schema: t,
            view: n,
            refUpdateToolbar: r,
            className: a,
            bSpellcheckEnabled: s,
            setSpellcheckEnabled: l,
          } = e,
          [c, i] = (0, Ke.SP)("FormattingToolbar_Expanded", !1);
        return o.createElement(
          ve,
          { refUpdateToolbar: r, view: n },
          o.createElement(
            "div",
            { className: (0, F.A)(ce.Toolbar, a) },
            o.createElement(
              Ae,
              null,
              o.createElement(Oe, null),
              o.createElement(we, null),
              o.createElement(Fe, { schema: t }),
              o.createElement(Ne, null),
              o.createElement(
                De,
                {
                  onClick: () => i(!c),
                  tooltip: "#FormattingToolbar_ExpandOptions",
                },
                o.createElement(H.Chevron, { direction: c ? "up" : "down" }),
              ),
            ),
            o.createElement(
              ke.R,
              { visible: c },
              o.createElement(
                Ae,
                null,
                o.createElement(Le, { schema: t }),
                o.createElement(Ie, { schema: t, levels: 5 }),
                o.createElement(
                  ye,
                  {
                    nodeType: t.nodes.code_block,
                    tooltip: (0, p.we)("#FormattingToolbar_CodeBlock"),
                  },
                  o.createElement(H.TextCodeBlock, null),
                ),
                o.createElement(we, null),
                o.createElement(Ue, { schema: t }),
                o.createElement(we, null),
                o.createElement(Re, { schema: t }),
                o.createElement(Ne, null),
                l &&
                  o.createElement($e, {
                    bSpellcheckEnabled: s,
                    setSpellcheckEnabled: l,
                  }),
              ),
            ),
          ),
        );
      }
      var qe = n(10325);
      const Ve = 15;
      function He(e) {
        const { note: t, hidden: n = !1 } = e,
          [r, a] = o.useState(),
          l = o.useRef(),
          c = o.useRef(t.content),
          i = o.useRef(!1),
          d = (0, W.$G)(),
          m = (0, W.EC)(),
          u = (0, W.WA)(),
          h = (0, K.H0)(t.appid),
          g = (0, _e.Qn)();
        c.current == t.content || i.current || (c.current = t.content);
        const f = c.current,
          { mutate: b } = (0, K.df)(t),
          E = o.useCallback((e, t) => b({ title: Qe(t), bbcode: e }), [b]),
          {
            onUpdate: _,
            fnCommitPendingSave: k,
            bDirty: T,
          } = (function (e, t, n) {
            const { msAutosaveTimeout: r = 1e3, refOnChangeCallback: a } =
                n || {},
              [l, c] = o.useState(!1),
              i = o.useRef(),
              d = o.useCallback(
                (e, t) => {
                  a?.current && a.current(),
                    t.doc &&
                      t.doc != e.state.doc &&
                      ((i.current = e.state.doc), c(!0));
                },
                [a],
              ),
              m = o.useCallback(() => {
                if (i.current) {
                  const n = s(i.current, e);
                  t(n, i.current), c(!1);
                }
                i.current = void 0;
              }, [t, e]);
            return (
              o.useEffect(() => {
                if (!l) return;
                const e = window.setTimeout(m, r);
                return () => {
                  window.clearTimeout(e), m();
                };
              }, [l, m, r]),
              { onUpdate: d, fnCommitPendingSave: m, bDirty: l }
            );
          })($, E, { msAutosaveTimeout: 1e3 * Ve, refOnChangeCallback: l });
        o.useEffect(() => {
          T &&
            !i.current &&
            ((i.current = !0),
            q.y.ReportTrackedAction("/GameNotes/NoteModified"));
        }, [T]),
          o.useEffect(() => {
            r && !n && r.focus();
          }, [r, n]),
          o.useEffect(() => {
            n && k();
          }, [n, k]);
        const C = (0, W.qq)(),
          v = (0, K.Bc)(t, C),
          B = {
            onSecondaryButton: () => v.mutate(),
            onSecondaryActionDescription: (0, p.we)(
              "#UserGameNotes_DeleteNote",
            ),
          };
        return o.createElement(
          "div",
          { className: qe.NoteEditorArea },
          !g &&
            o.createElement(We, {
              schema: $.pm_schema,
              view: r,
              refUpdateToolbar: l,
              className: qe.Toolbar,
              bSpellcheckEnabled: m,
              setSpellcheckEnabled: u,
            }),
          o.createElement(
            fe,
            {
              schemaConfig: $,
              className: qe.EditorInput,
              bbcode: f,
              onUpdate: _,
              refView: a,
              bSpellcheckEnabled: m,
              panelProps: B,
            },
            o.createElement(Q, {
              uploadImage: h,
              nodeType: $.pm_schema.nodes.image,
            }),
            o.createElement(S, {
              linkMarkType: $.pm_schema.marks.link,
              schema: $.pm_schema,
              onClickURL: d,
            }),
          ),
          !g && o.createElement(ze, { note: t, bDirty: T }),
        );
      }
      function ze(e) {
        const { note: t, bDirty: n } = e,
          [r, a, s] = (0, le.uD)(!1),
          l = (0, W.O8)(),
          c = (0, W.qq)(),
          { mutate: i, isPending: d } = (0, K.Bc)(t, c),
          m = o.useCallback(() => {
            !n && t.not_persisted ? i() : a();
          }, [n, t, i, a]);
        return o.createElement(
          "div",
          { className: qe.NoteActions },
          r &&
            o.createElement(Je, {
              note: t,
              closeModal: s,
              deleteNote: i,
              deletePending: d,
            }),
          o.createElement(
            Ee.he,
            { toolTipContent: "#UserGameNotes_DeleteNote", direction: "top" },
            o.createElement(
              V.$n,
              { onClick: m },
              o.createElement(H.Trash, null),
            ),
          ),
          l && o.createElement(je, { bDirty: n }),
        );
      }
      function je(e) {
        const { bDirty: t } = e,
          n = (0, W.qq)();
        return t
          ? o.createElement(
              V.jn,
              { onClick: () => n(), className: qe.CloseWindowButton },
              (0, p.we)("#Button_SaveAndClose"),
            )
          : o.createElement(
              V.$n,
              { onClick: () => n(), className: qe.CloseWindowButton },
              (0, p.we)("#Button_Close"),
            );
      }
      function Je(e) {
        const { note: t, closeModal: n, deleteNote: r, deletePending: a } = e;
        return o.createElement(
          z.EN,
          { active: !0 },
          o.createElement(z.o0, {
            strTitle: (0, p.we)("#UserGameNotes_DeleteNote"),
            strDescription: (0, p.we)("#UserGameNotes_PromptDelete"),
            onOK: () => r(),
            bOKDisabled: a,
            strOKButtonText: (0, p.we)("#Button_Delete"),
            closeModal: n,
          }),
        );
      }
      function Qe(e) {
        let t = "";
        for (let n = 0; n < e.content.childCount; n++) {
          const o = e.content.child(n);
          if (o.isText) t += o.text;
          else {
            if (((t = t.trim()), t.length > 4)) return t;
            if (((t = Qe(o)), t.length > 4)) return t;
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
        m = n(91293),
        u = n(64608),
        p = n(10606),
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
      n.r(t), n.d(t, { default: () => U });
      var o = n(63696),
        r = n(49519),
        a = n(73259),
        s = n(45264),
        l = n(91293),
        c = n(64608),
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
          o.useEffect(() => {
            !i ||
              (n && i.find((e) => e.id === n)) ||
              (i.length > 0 && i[0].id ? k(a, t, i[0].id) : k(a, t, l()));
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
                k(a, t, e);
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
          [l, h] = (0, m.SP)("NotesListCollapsed", !1),
          g = (0, p.wR)(),
          b = (0, f.Qn)(),
          E = n.map((e) => ({
            title:
              e.title?.length > 0
                ? e.title
                : (0, d.we)("#UserGameNotes_Untitled"),
            identifier: e.id,
            content: o.createElement(_, { note: e }),
            pageClassName: u.NotePage,
            hideTitle: !0,
          })),
          T = (0, r.W6)(),
          C = o.useCallback((e) => k(T, t, e), [T, t]);
        return o.createElement(c.O7, {
          title: (0, d.we)("#UserGameNotes_NotesList"),
          pages: E,
          className: (0, i.A)(u.NotesPagedSettings, g && u.PinnedView),
          page: a,
          onPageRequested: C,
          bottomControls: s,
          hideList: l,
          toggleHideList: g || b ? void 0 : () => h(!l),
        });
      }
      function _(e) {
        const { note: t } = e,
          n = c.v$();
        return o.createElement(l.U, { note: t, hidden: !n });
      }
      function k(e, t, n) {
        let o;
        (o =
          "appid" in t
            ? a.O.AppNotes(t.appid, n)
            : a.O.ShortcutNotes(t.shortcut, n)),
          e.replace(o, e.location.state);
      }
      var T = n(39941),
        C = n(11682),
        v = n.n(C),
        B = n(61416),
        w = n(12176),
        N = n(10812),
        A = n(46382),
        y = n(43691),
        M = n(44846);
      let S;
      const D = 864e5;
      function P(e) {
        return `appinfo_${e}_${y.TS.LANGUAGE}`;
      }
      function x(e) {
        return Boolean(e && Date.now() - e.timeCached < D);
      }
      function O(e) {
        const t = (0, A.KV)(),
          n = (0, A.rX)();
        return (0, B.I)({
          queryKey: ["appinfo", e],
          queryFn: async () =>
            (function (e, t) {
              return (
                S ||
                  (S = new (v())(
                    async (n) => {
                      const o = new Map();
                      (await Promise.all(n.map((e) => t.GetObject(P(e)))))
                        .filter(x)
                        .forEach(({ value: e }) => o.set(e.appid, e));
                      const r = n.slice().filter((e) => !o.has(e));
                      if (r.length) {
                        const n = w.w.Init(N._z);
                        n.Body().set_language((0, M.sf)(y.TS.LANGUAGE)),
                          n.Body().set_appids(r);
                        const a = await N.BE.GetApps(e, n);
                        if (1 != a.GetEResult()) throw a.GetErrorMessage();
                        a.Body()
                          .toObject()
                          .apps.forEach((e) => {
                            t.StoreObject(P(e.appid), {
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
                S
              );
            })(t, n).load(e),
          staleTime: D,
          enabled: !!e,
        }).data;
      }
      var F = n(26853);
      function L() {
        const { data: e, isLoading: t } = (0, s.Yh)();
        return t
          ? o.createElement(F.t, { msDelayAppear: 300 })
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
                e.map((e) => o.createElement(I, { key: e.appid, game: e })),
              ),
            );
      }
      function I(e) {
        const { game: t } = e,
          n = O(t.appid);
        return o.createElement(
          "li",
          null,
          o.createElement(T.N_, { to: a.O.AppNotes(t.appid) }, n?.name),
        );
      }
      function U(e) {
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
