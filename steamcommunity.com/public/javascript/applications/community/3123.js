/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [3123],
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
    28106: (e, t, o) => {
      "use strict";
      o.d(t, { W: () => d });
      var n = o(26205),
        r = o(57053),
        s = o(52893),
        a = o(90626),
        l = o(61859),
        c = o(22145),
        i = o(59722);
      const d = a.memo(function (e) {
        const {
            linkMarkType: t,
            onURLPasted: o,
            schema: d,
            onClickURL: h = m,
          } = e,
          p = a.useRef(h);
        p.current = h;
        const [g, f] = a.useState(),
          [b, _] = a.useState(),
          [v, C] = a.useState(),
          k = a.useMemo(
            () =>
              new s.k_({
                props: {
                  handleClickOn(e, o, n, r, s, a) {
                    if (a && (s.ctrlKey || 1 == s.button)) {
                      const e = n
                        .resolve(o - r)
                        .marks()
                        .find((e) => e.type == t);
                      if (e)
                        return (
                          p.current(e.attrs.href, s.view),
                          s.preventDefault(),
                          !0
                        );
                    }
                    return !1;
                  },
                  clipboardTextParser(e, s, a, l) {
                    let c,
                      i = [];
                    for (; (c = e.match(n.O)); ) {
                      c.index > 0 && i.push(d.text(e.substring(0, c.index)));
                      const r = (0, n.S)(c[0]),
                        s = o && o(r);
                      s && "default" !== s
                        ? "remove" !== s && i.push(s)
                        : i.push(d.text(c[0], [t.create({ href: r })])),
                        (e = e.substring(c.index + c[0].length));
                    }
                    return (
                      e.length && i.push(d.text(e)),
                      new r.Ji(r.FK.from(i), s.start(), s.end())
                    );
                  },
                  handleDOMEvents: {
                    mouseover: (e, t) => {
                      const o = t.target;
                      if (
                        o &&
                        "getBoundingClientRect" in o &&
                        "A" == o.nodeName
                      ) {
                        const e = o.getBoundingClientRect();
                        f(e.left + e.width / 2), _(e.bottom + 2), C(o);
                      } else C(void 0);
                      return !1;
                    },
                    mouseleave: (e, t) => (C(void 0), !1),
                  },
                },
              }),
            [t, o, d],
          );
        if (((0, c.c$)(k), !v || !b || !g)) return null;
        const B = v.getAttribute("href");
        return a.createElement(
          u,
          { top: b, left: g },
          a.createElement("div", { className: i.Link }, B),
          a.createElement(
            "div",
            { className: i.LinkHelp },
            (0, l.we)("#UserGameNotes_ClickToOpenLink"),
          ),
        );
      });
      function u(e) {
        const { top: t, left: o, children: n } = e,
          [r, s] = a.useState(0),
          l = a.useRef(null);
        a.useLayoutEffect(() => {
          s(l.current.getBoundingClientRect().width);
        }, [t, o, n]);
        const c = { top: `${t}px`, left: `${Math.max(o - r / 2, 12)}px` };
        return a.createElement(
          "div",
          { className: i.Hover, style: c, ref: l },
          n,
        );
      }
      function m(e, t) {
        t.open(e);
      }
    },
    79497: (e, t, o) => {
      "use strict";
      o.d(t, { W: () => r });
      var n = o(57053);
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
        ConvertAttrToBBCodeArgs(e, t) {
          const o = this.m_PMToBBCodeConfig.mapNodes.get(e.type);
          return (o && o.AttrsToBBArgs && o.AttrsToBBArgs(t, e).args) || {};
        }
        constructor(e, t) {
          (this.m_mapBBCodeDictionary = new Map()),
            (this.m_PMToBBCodeConfig = {
              mapNodes: new Map(),
              mapMarks: new Map(),
            });
          const o = {
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
            r = new Map(),
            a = new Map(),
            l = t ? new Set(t) : void 0;
          for (const t in e.nodes) {
            const { bbCode: n, ...a } = e.nodes[t],
              c = s(n, l);
            c && ((o[t] = a), r.set(t, c));
          }
          const c = {};
          for (const t in e.marks) {
            const { bbCode: o, ...n } = e.marks[t];
            (l && !l.has(o.tag)) || ((c[t] = n), a.set(t, o));
          }
          (this.m_ProseMirrorSchema = new n.Sj({ nodes: o, marks: c })),
            r.forEach((t, o) => {
              var n;
              const r = this.m_ProseMirrorSchema.nodes[o],
                s = e.nodes[o],
                a = Array.isArray(t) ? t : [t];
              let l;
              "list_item+" == s.content
                ? (l = this.m_ProseMirrorSchema.nodes.list_item)
                : -1 !=
                    (null === (n = s.content) || void 0 === n
                      ? void 0
                      : n.indexOf("paragraph")) &&
                  (l = this.m_ProseMirrorSchema.nodes.paragraph),
                a.forEach(
                  ({
                    tag: e,
                    BBArgsToAttrs: t,
                    AttrsToBBArgs: o,
                    convertContentToAttr: n,
                    ...s
                  }) => {
                    this.m_mapBBCodeDictionary.set(e, {
                      Constructor: {
                        node: r,
                        BBArgsToAttrs: t,
                        convertContentToAttr: n,
                        acceptNode: l,
                      },
                      skipFollowingNewline: !0,
                      ...s,
                    });
                  },
                );
              const { tag: c, AttrsToBBArgs: i } = a[0];
              this.m_PMToBBCodeConfig.mapNodes.set(r, {
                tag: c,
                AttrsToBBArgs: i,
              });
            }),
            a.forEach((e, t) => {
              const o = this.m_ProseMirrorSchema.marks[t],
                { tag: n, BBArgsToAttrs: r, AttrsToBBArgs: s, ...a } = e;
              this.m_mapBBCodeDictionary.set(n, {
                Constructor: { mark: o, BBArgsToAttrs: r },
                ...a,
              }),
                this.m_PMToBBCodeConfig.mapMarks.set(o, {
                  tag: n,
                  AttrsToBBArgs: s,
                });
            });
        }
      }
      function s(e, t) {
        if (t) {
          if (Array.isArray(e)) {
            const o = e.filter((e) => t.has(e.tag));
            return o.length > 0 ? o : void 0;
          }
          return t.has(e.tag) ? e : void 0;
        }
        return e;
      }
    },
    26555: (e, t, o) => {
      "use strict";
      o.d(t, { i: () => s });
      var n = o(90626),
        r = o(90286);
      function s(e, t) {
        const { msAutosaveTimeout: o = 1e3 } = t || {},
          [s, a] = n.useState(!1);
        return (
          (0, r.u)(
            e,
            n.useCallback(() => {
              a(!0);
            }, []),
          ),
          n.useEffect(() => {
            if (!s || !e) return;
            const t = () => {
                e.CommitChanges(), a(!1);
              },
              n = window.setTimeout(t, o);
            return () => {
              window.clearTimeout(n), t();
            };
          }, [s, e, o]),
          { bDirty: s }
        );
      }
    },
    22145: (e, t, o) => {
      "use strict";
      o.d(t, { KF: () => p, Ot: () => h, c$: () => g, Hd: () => f });
      var n = o(12362),
        r = o(15024),
        s = o(7502),
        a = o(52893),
        l = o(90626),
        c = o(98724),
        i = o(79216),
        d = o(4188),
        u = o(37834);
      o(45772), o(74763);
      const m = l.createContext(void 0);
      function h(e) {
        const { view: t, pmState: o, children: n } = e,
          r = l.useMemo(() => ({ view: t, pmState: o }), [t, o]);
        return l.createElement(m.Provider, { value: r }, n);
      }
      const p = l.memo(function (e) {
        const { schema: t, refOnUpdate: o } = e;
        return (
          g(
            l.useMemo(
              () =>
                o &&
                new a.k_({
                  view: (e) => ({
                    update: (...e) => o.current && o.current(...e),
                  }),
                }),
              [o],
            ),
          ),
          g(l.useMemo(() => (0, r.z)(), [])),
          g(
            l.useMemo(
              () =>
                (function (e) {
                  const t = (0, n.st)(
                      n.I$,
                      (t, o) => (
                        o &&
                          o(
                            t.tr
                              .replaceSelectionWith(
                                e.nodes.hard_break.createChecked(),
                              )
                              .scrollIntoView(),
                          ),
                        !0
                      ),
                    ),
                    o = {
                      "Mod-z": c.tN,
                      "Mod-y": c.ZS,
                      Backspace: i.dv,
                      Escape: n.hy,
                      "Mod-Enter": t,
                      "Shift-Enter": t,
                      "Mod-b": (0, n.wh)(e.marks.strong),
                      "Mod-i": (0, n.wh)(e.marks.italic),
                      "Mod-u": (0, n.wh)(e.marks.underline),
                      Enter: (0, d.wn)(e.nodes.list_item),
                      "Mod-[": (0, d.T2)(e.nodes.list_item),
                      "Mod-]": (0, d.$B)(e.nodes.list_item),
                      "Shift-Ctrl-1": (0, n.y_)(e.nodes.heading, { level: 1 }),
                      "Shift-Ctrl-2": (0, n.y_)(e.nodes.heading, { level: 2 }),
                      "Shift-Ctrl-3": (0, n.y_)(e.nodes.heading, { level: 3 }),
                      "Shift-Ctrl-4": (0, n.y_)(e.nodes.heading, { level: 4 }),
                      "Shift-Ctrl-5": (0, n.y_)(e.nodes.heading, { level: 5 }),
                      "Shift-Ctrl-0": (0, n.y_)(e.nodes.paragraph),
                    };
                  return (
                    e.nodes.horizontal_rule &&
                      (o["Mod-_"] = (t, o) => (
                        o &&
                          o(
                            t.tr
                              .replaceSelectionWith(
                                e.nodes.horizontal_rule.create(),
                              )
                              .scrollIntoView(),
                          ),
                        !0
                      )),
                    (0, s.w)(o)
                  );
                })(t),
              [t],
            ),
          ),
          g(l.useMemo(() => (0, s.w)(n.RV), [])),
          g(
            l.useMemo(
              () =>
                (function (e) {
                  return (0, i.sM)({
                    rules: [
                      (0, i.tG)(
                        /^(\d+)\.\s$/,
                        e.nodes.ordered_list,
                        (e) => ({ order: parseInt(e[1]) }),
                        (e, t) =>
                          t.childCount + t.attrs.order == parseInt(e[1]),
                      ),
                      (0, i.tG)(/^\s*([-+*])\s$/, e.nodes.bullet_list),
                      (0, u.OX)(/\*([^*]+)\*/, e.marks.strong),
                      (0, u.OX)(/_([^_]+)_/, e.marks.italic),
                      (0, u.OX)(/~([^~]+)~/, e.marks.strike),
                      (0, u.OX)(/`([^`]+)`/, e.marks.code),
                      (0, i.JJ)(/^```$/, e.nodes.code_block),
                      (0, i.JJ)(/^(#{1,5})\s$/, e.nodes.heading, (e) => ({
                        level: e[1].length,
                      })),
                      e.nodes.horizontal_rule &&
                        ((t = /^(\*\*\*|---|___)$/),
                        (o = e.nodes.horizontal_rule),
                        new i.fV(t, (e, t, n, r) =>
                          e.tr.replaceWith(n, r, o.create()),
                        )),
                    ].filter(Boolean),
                  });
                  var t, o;
                })(t),
              [t],
            ),
          ),
          null
        );
      });
      function g(e) {
        const { pmState: t } = l.useContext(m);
        l.useEffect(() => {
          if (t && e) return t.InstallPlugin(e);
        }, [e, t]);
      }
      function f() {
        var e;
        return null === (e = l.useContext(m)) || void 0 === e ? void 0 : e.view;
      }
    },
    55608: (e, t, o) => {
      "use strict";
      o.d(t, { BM: () => l, DQ: () => i, ce: () => c });
      var n = o(33645),
        r = o.n(n),
        s = o(4188),
        a = o(52038);
      function l(e, t, o = 0) {
        return () => [e, { class: t }, o];
      }
      function c(e, t, o = 0) {
        return [e, { class: t }, o];
      }
      const i = {
        nodes: {
          paragraph: {
            content: "inline*",
            group: "block",
            parseDOM: [{ tag: "p" }],
            toDOM: l("p", (0, a.A)("pm_paragraph", r().Paragraph)),
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
              const { src: t, alt: o, title: n } = e.attrs;
              return ["img", { src: t, alt: o, title: n, class: r().Image }];
            },
            bbCode: {
              tag: "img",
              BBArgsToAttrs: (e) => ({ src: e.src }),
              AttrsToBBArgs: (e) => ({ args: { src: e.src } }),
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
                  if ("video" !== e.tagName) return;
                  const t = e;
                  let o = "",
                    n = "";
                  for (const e of t.querySelectorAll("source"))
                    "video/mp4" == e.type
                      ? (o = e.src)
                      : "video/webm" == e.type && (n = e.src);
                  return {
                    mp4: o,
                    webm: n,
                    poster: t.poster || "",
                    autoplay: !!t.autoplay,
                    controls: !!t.controls,
                  };
                },
              },
            ],
            toDOM(e) {
              const {
                  webm: t,
                  mp4: o,
                  poster: n,
                  autoplay: r,
                  controls: s,
                } = e.attrs,
                a = [];
              return (
                t && a.push(["source", { src: t, type: "video/webm" }]),
                o && a.push(["source", { src: o, type: "video/mp4" }]),
                [
                  "video",
                  { poster: n, autoPlay: !!r, controls: !!s, loop: !s && !!r },
                  a,
                ]
              );
            },
            bbCode: {
              tag: "video",
              BBArgsToAttrs: (e) => ({
                webm: e.webm,
                mp4: e.mp4,
                poster: e.poster,
                autoplay: "true" == e.autoplay,
                controls: "true" == e.controls,
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
            ...s.fF,
            content: "list_item+",
            group: "block",
            toDOM: l("ul", r().List),
            bbCode: { tag: "list" },
          },
          ordered_list: {
            ...s.o8,
            content: "list_item+",
            group: "block",
            toDOM: l("ol", r().OrderedList),
            bbCode: { tag: "olist" },
          },
          list_item: {
            ...s.Aw,
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
            toDOM: l("b", (0, a.A)("BB_Bold", r().Bold)),
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
            toDOM: l("i", (0, a.A)("BB_Italic", r().Italic)),
            bbCode: { tag: "i" },
          },
          underline: {
            parseDOM: [{ tag: "u" }, { style: "text-decoration=underline" }],
            toDOM: l("u", (0, a.A)("BB_Underline", r().Underline)),
            bbCode: { tag: "u" },
          },
          strike: {
            parseDOM: [{ style: "text-decoration=line-through" }],
            toDOM: l("span", (0, a.A)("BB_Strike", r().Strike)),
            bbCode: { tag: "strike" },
          },
          code: {
            parseDOM: [{ tag: "code" }],
            toDOM: l("code", (0, a.A)("BB_Code", r().Code)),
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
              const { href: t, title: o } = e.attrs;
              return ["a", { href: t, title: o, class: "BB_Link" }, 0];
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
    90286: (e, t, o) => {
      "use strict";
      o.d(t, { n: () => b, u: () => _ });
      var n = o(91986),
        r = o(64753),
        s = o(98724),
        a = o(52893),
        l = o(49693),
        c = o(57053),
        i = o(81393);
      class d {
        constructor(e) {
          (this.m_nodes = []), (this.m_schema = e);
        }
        AppendText(e, t) {
          let o = 0;
          for (let t = e.indexOf("\n", o); -1 !== t; t = e.indexOf("\n", o))
            o != t && this.m_nodes.push(this.m_schema.text(e.substring(o, t))),
              this.m_nodes.push(this.m_schema.nodes.hard_break.createChecked()),
              (o = t + 1);
          o < e.length && this.m_nodes.push(this.m_schema.text(e.substring(o)));
        }
        AppendNode(e) {
          this.m_nodes.push(e);
        }
        GetElements() {
          return this.m_nodes;
        }
      }
      class u extends l.Al {
        constructor(e) {
          super(e.bbcode_dictionary, () => new d(e.pm_schema)),
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
            this.ConvertLineBreaksToParagraphs(c.FK.fromArray(t)),
          );
        }
        TryCreateNode(e, t, o) {
          let n = c.FK.from(t);
          if (!e.node.validContent(n) && e.acceptNode) {
            let o = t.filter((t) => t.type == e.acceptNode);
            if (!o.length) {
              let n = t;
              e.acceptNode.isBlock &&
                n.length > 1 &&
                n[n.length - 1].type == this.schema.nodes.hard_break &&
                (n = n.slice(0, -1));
              const r = this.m_mapPMBBNodes.get(e.acceptNode.name);
              (0, i.w)(
                r,
                `Indicated acceptNode type ${e.acceptNode.name} for ${e.node.name} missing`,
              ),
                (o = r
                  ? [this.TryCreateNode(r, n, void 0)]
                  : [e.acceptNode.create(void 0, n)]);
            }
            n = c.FK.from(o);
          }
          return e.node.createAndFill(o, n) || e.node.create(o, n);
        }
        BBNodeToPMNode(e, t, ...o) {
          let n = e.BBArgsToAttrs ? e.BBArgsToAttrs(t.args || {}) : void 0;
          try {
            return (
              "convertContentToAttr" in e &&
                e.convertContentToAttr &&
                ((n && n[e.convertContentToAttr]) ||
                  (n = {
                    ...(n || {}),
                    [e.convertContentToAttr]:
                      ((r = o),
                      r
                        .filter((e) => e.isText)
                        .map((e) => e.text)
                        .join()),
                  }),
                "node" in e && (o = [])),
              "node" in e
                ? this.TryCreateNode(e, o, n)
                : o.map((t) => t.mark([...t.marks, e.mark.create(n)]))
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
            o = this.m_schemaConfig.pm_schema;
          this.m_mapPMBBNodes.forEach((e) => {
            e.acceptNode && t.set(e.acceptNode.name, e.node);
          });
          const n = [],
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
                const t = this.nodeType || (e ? o.nodes.paragraph : void 0);
                t && (n.push(t.createChecked({}, this.nodes)), this.reset());
              },
            };
          return (
            e.forEach((e) => {
              const s = e.type == o.nodes.hard_break,
                a = c.FK.from(e);
              if (s || o.topNodeType.validContent(a)) {
                const t = s && r.nodes.length > 0;
                r.emit(),
                  s
                    ? t || n.push(o.nodes.paragraph.createChecked())
                    : n.push(e);
              } else {
                let n;
                (n = o.nodes.paragraph.validContent(a)
                  ? o.nodes.paragraph
                  : t.get(e.type.name)),
                  n
                    ? r.accumulate(n, e)
                    : ((0, i.w)(
                        !1,
                        `Couldn't accept ${e.type.name} at root of document, converting to paragraph`,
                      ),
                      (n = o.nodes.paragraph),
                      r.accumulate(
                        o.nodes.paragraph,
                        o.text(
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
            (!r.nodes.length && n.length) || r.emit(!0),
            c.FK.from(n)
          );
        }
      }
      function m(e, t) {
        return h(t.pm_schema, t.pm_to_bbcode_config, e, []);
      }
      function h(e, t, o, n) {
        let r = o.marks,
          s = "";
        const a = t.mapNodes.get(o.type),
          { tag: c, args: d } = (function (e, t) {
            if (e && e.AttrsToBBArgs) {
              const { tag: o = e.tag, args: n = {} } = e.AttrsToBBArgs(
                t.attrs,
                t,
              );
              return { tag: o, args: n };
            }
            return { tag: null == e ? void 0 : e.tag, args: {} };
          })(a, o);
        return (
          c && (s += (0, l.CS)(c, d)),
          o.content.forEach((o) => {
            ([s, r] = p(t, r, o.marks, s)),
              ([s, r] = (function (e, t, o, n) {
                let r;
                for (const s of o)
                  if (-1 === t.indexOf(s)) {
                    r || (r = t.slice());
                    const o = e.mapMarks.get(s.type);
                    if (((0, i.w)(o, "mark missing bbtag"), o)) {
                      r.push(s);
                      const { args: e, tag: t } = g(o, s);
                      n += (0, l.CS)(t, e);
                    }
                  }
                return [n, null != r ? r : t];
              })(t, r, o.marks, s)),
              o.type.isText
                ? (s += (0, l.vE)(o.text || ""))
                : o.type == e.nodes.hard_break
                  ? (s += "\n")
                  : (s += h(e, t, o, r));
          }),
          ([s] = p(t, r, n, s)),
          c && (s += (0, l.op)(c)),
          s
        );
      }
      function p(e, t, o, n) {
        const r = [];
        for (const e of t) -1 === o.indexOf(e) && r.push(e);
        if (!r.length) return [n, t];
        const s = t.slice();
        for (
          ;
          r.length && ((0, i.w)(s.length, "no marks left to close"), s.length);
        ) {
          const t = s.pop(),
            o = e.mapMarks.get(t.type),
            { tag: a } = g(o, t);
          n += (0, l.op)(a);
          const c = r.indexOf(t);
          -1 != c && r.splice(c, 1);
        }
        return [n, s];
      }
      function g(e, t) {
        if (e && e.AttrsToBBArgs) {
          const { tag: o = e.tag, args: n = {} } = e.AttrsToBBArgs(t.attrs, t);
          return { tag: o, args: n };
        }
        return { tag: null == e ? void 0 : e.tag, args: {} };
      }
      const f = new a.hs("CProseMirrorState - OnChange");
      class b {
        constructor(e, t, o) {
          (this.m_bHasUncomittedChanges = !1),
            (this.m_onStateChangedCallbacks = new n.l()),
            (this.m_schemaConfig = e),
            (this.m_bbcodeParser = new u(e)),
            (this.m_bbcode = t),
            (this.m_fnCommitChanges = o),
            (this.m_state = this.ConstructState());
        }
        CommitChanges() {
          this.m_currentDoc &&
            this.m_bHasUncomittedChanges &&
            ((this.m_bbcode = m(this.m_currentDoc, this.m_schemaConfig)),
            this.m_fnCommitChanges(this.m_bbcode, this.m_currentDoc),
            (this.m_bHasUncomittedChanges = !1));
        }
        BHasUncomittedChanges() {
          return this.m_bHasUncomittedChanges;
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
          const e = new a.k_({
            key: f,
            view: (e) => (
              console.assert(!this.m_view),
              (this.m_view = e),
              {
                update: (e, t) => this.OnStateChange(t, e.state),
                destroy: () => (this.m_view = void 0),
              }
            ),
          });
          return a.$t.create({
            schema: this.m_schemaConfig.pm_schema,
            doc: this.m_bbcodeParser.ParseBBCode(this.m_bbcode),
            plugins: [(0, s.b6)(), e],
          });
        }
        InstallPlugin(e) {
          var t;
          const o = this.m_view ? this.m_view.state : this.m_state;
          return (
            o.plugins.includes(e) ||
              ((this.m_state = o.reconfigure({ plugins: [...o.plugins, e] })),
              null === (t = this.m_view) || void 0 === t || t.updateState(o)),
            () => {
              var t;
              const o = this.m_view ? this.m_view.state : this.m_state;
              (this.m_state = o.reconfigure({
                plugins: o.plugins.filter((t) => t != e),
              })),
                null === (t = this.m_view) ||
                  void 0 === t ||
                  t.updateState(this.m_state);
            }
          );
        }
        OnStateChange(e, t) {
          (this.m_state = t),
            e.doc &&
              e.doc != t.doc &&
              ((this.m_currentDoc = t.doc),
              (this.m_bHasUncomittedChanges = !0),
              this.m_onStateChangedCallbacks.Dispatch(
                this.m_currentDoc,
                e.doc,
              ));
        }
      }
      function _(e, t) {
        (0, r.hL)(null == e ? void 0 : e.OnStateChangedCallbacks, t);
      }
    },
    37834: (e, t, o) => {
      "use strict";
      o.d(t, {
        Cd: () => s,
        OX: () => c,
        bQ: () => i,
        gj: () => a,
        wt: () => l,
      });
      var n = o(79216),
        r = o(52893);
      function s(e, t) {
        const { from: o, $from: n, to: r, empty: s } = e.selection;
        return s
          ? !!t.isInSet(e.storedMarks || n.marks())
          : e.doc.rangeHasMark(o, r, t);
      }
      function a(e, t, o) {
        let { $from: n, to: r, node: s } = e.selection;
        return !s && r <= n.end() && (s = n.parent), !!s && s.hasMarkup(t, o);
      }
      function l(e, t, o) {
        const { $from: n, to: r } = e.selection;
        for (let e = n.sharedDepth(r); e > 0; e--) {
          const r = n.node(e);
          if (void 0 === o ? r.type === t : r.hasMarkup(t, o))
            return n.before(e);
        }
      }
      function c(e, t, o = {}) {
        return new n.fV(e, (e, n, r, s) => {
          const a = o instanceof Function ? o(n) : o,
            l = e.tr;
          if (n[1]) {
            const e = r + n[0].indexOf(n[1]),
              t = e + n[1].length;
            t < s && l.delete(t, s),
              e > r && l.delete(r, e),
              (s = r + n[1].length);
          }
          return l.addMark(r, s, t.create(a)), l.removeStoredMark(t), l;
        });
      }
      function i(e, t, o) {
        const n = { left: t, top: o },
          s = e.posAtCoords(n);
        if (null == s ? void 0 : s.pos) {
          const t = e.state.doc.resolve(s.pos);
          e.dispatch(e.state.tr.setSelection(r.U3.near(t)));
        }
      }
    },
    9024: (e, t, o) => {
      "use strict";
      o.d(t, { X: () => u, w: () => c });
      var n = o(33645),
        r = o.n(n),
        s = o(38539),
        a = o(55608),
        l = o(52038);
      const c = { NoBorder: "noborder", EqualCells: "equalcells" },
        i = s.of({
          tableGroup: "block",
          cellContent: "paragraph block*",
          cellAttributes: {
            class: {
              default: r().TableCell,
              setDOMAttr: (e, t) => {
                t.class = e;
              },
            },
          },
        }),
        d = {
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
        u = {
          table: {
            ...i.table,
            toDOM: (e) =>
              (0, a.ce)(
                "table",
                (0, l.A)(
                  r().Table,
                  e.attrs.noborder && r().NoBorder,
                  e.attrs.equalcells && r().EqualCells,
                ),
                ["tbody", 0],
              ),
            attrs: {
              [c.NoBorder]: { default: !1 },
              [c.EqualCells]: { default: !0 },
            },
            bbCode: {
              tag: "table",
              BBArgsToAttrs: (e) => ({
                noborder: !!e.noborder,
                equalcells: !!e.equalcells,
              }),
              AttrsToBBArgs: (e, t) => {
                const o = {};
                e.noborder && (o.noborder = "1"),
                  e.equalcells && (o.equalcells = "1");
                const n = t.child(0);
                if (n) {
                  let e = [];
                  for (let t = 0; t < n.childCount; t++) {
                    const o = n.child(t).attrs;
                    o.colwidth ? e.push(...o.colwidth) : e.push(void 0);
                  }
                  o.colwidth = e.join(",");
                }
                return { args: o };
              },
            },
          },
          table_row: {
            ...i.table_row,
            toDOM: (0, a.BM)("tr", r().TableRow),
            bbCode: { tag: "tr" },
          },
          table_cell: { ...i.table_cell, bbCode: { ...d, tag: "td" } },
          table_header: { ...i.table_header, bbCode: { ...d, tag: "th" } },
        };
    },
    86807: (e, t, o) => {
      "use strict";
      o.d(t, { R: () => s });
      var n = o(90626),
        r = o(72739);
      function s(e) {
        const {
            visible: t = !0,
            className: o,
            keepMounted: s = !1,
            expandDirection: a = "height",
            msAnimationDuration: l = 250,
            children: c,
          } = e,
          {
            style: i,
            active: d,
            refDiv: u,
          } = (function (e, t = "height", o = 250) {
            const s = n.useRef(),
              a = n.useRef(!0),
              [l, c] = n.useState("idle"),
              [i, d] = n.useState({});
            n.useLayoutEffect(() => {
              a.current ? (a.current = !1) : c("start");
            }, [e]),
              n.useLayoutEffect(() => {
                const o = s.current,
                  n = "height" == t ? "scrollHeight" : "scrollWidth";
                if ("start" == l) {
                  const r = o[n];
                  d((o) => ({
                    [t]: e ? "0px" : `${r}px`,
                    ...o,
                    overflow: "hidden",
                  })),
                    c("active");
                } else if ("active" == l) {
                  o.scrollTop;
                  const s = o[n];
                  d({ overflow: "hidden", [t]: e ? `${s}px` : "0px" });
                  const a = () => {
                    r.unstable_batchedUpdates(() => {
                      d({}), c("idle");
                    });
                  };
                  return (
                    o.addEventListener("transitionend", a),
                    () => {
                      o.removeEventListener("transitionend", a);
                    }
                  );
                }
              }, [l, e]);
            const u = { ...i, transition: `${t} ${o}ms` };
            return { style: u, active: "idle" != l, refDiv: s };
          })(t, a, l);
        return t || d || s
          ? n.createElement("div", { className: o, ref: u, style: i }, c)
          : null;
      }
    },
    1805: (e, t, o) => {
      "use strict";
      o.d(t, { l: () => T });
      var n = o(76217),
        r = o(63512),
        s = o(73170),
        a = o(29287),
        l = o(22145),
        c = o(37834),
        i = o(52893),
        d = o(57053),
        u = o(90626),
        m = o(84811),
        h = o(33645),
        p = o.n(h),
        g = o(38539),
        f = o(9024),
        b = o(52038);
      const _ = u.memo(function (e) {
        const { schema: t } = e,
          o = !(!("table" in t.nodes) || !t.nodes.table.spec.tableRole);
        return (
          (0, l.c$)(u.useMemo(() => o && g.AL({ View: v }), [o])),
          (0, l.c$)(u.useMemo(() => o && g.LF(), [o])),
          null
        );
      });
      class v extends g.Qg {
        constructor(e, t) {
          super(e, t), this.SetTableClass(e);
        }
        update(e) {
          return !!super.update(e) && (this.SetTableClass(e), !0);
        }
        SetTableClass(e) {
          this.table.className = (0, b.A)(
            p().Table,
            e.attrs[f.w.NoBorder] && p().NoBorder,
            e.attrs[f.w.EqualCells] && p().EqualCells,
          );
        }
      }
      var C = o(61859),
        k = o(73745),
        B = o(73309);
      const T = (0, m.Nr)(function (e) {
        const {
            pmState: t,
            className: o,
            refOnUpdate: i,
            refView: d,
            bSpellcheckEnabled: m = !0,
            panelProps: h,
            children: p,
          } = e,
          [g, f] = u.useState(),
          [v, T] = u.useState();
        u.useEffect(() => {
          t && g && T(new a.Lz(g, { state: t.state }));
        }, [t, g]),
          u.useEffect(() => () => (null == v ? void 0 : v.destroy()), [v]),
          (0, k.D5)(d, v);
        const {
            refDiv: A,
            onActivate: E,
            onGamepadDirection: M,
          } = (function (e) {
            const t = u.useRef(),
              o = (0, s.FN)(),
              n = u.useCallback(() => {
                if (
                  (o.ShowVirtualKeyboard(),
                  !(null == e ? void 0 : e.hasFocus()))
                ) {
                  e.focus();
                  let o = e.dom.childNodes;
                  for (let n = 0; n < o.length; ++n) {
                    let r = o[n],
                      s = r.offsetTop;
                    if (void 0 !== s && s >= t.current.scrollTop) {
                      let t = r.getBoundingClientRect();
                      (0, c.bQ)(e, t.left, t.top);
                      break;
                    }
                  }
                }
              }, [o, e]),
              a = u.useCallback((e) => e.currentTarget == e.target, []),
              l = (0, r.ak)(t, null, null, a);
            return { refDiv: t, onActivate: n, onGamepadDirection: l };
          })(v),
          y = (0, k.Ue)(A, f);
        if (!t) return null;
        const { schemaConfig: S, bbcodeParser: D } = t;
        return u.createElement(
          l.Ot,
          { view: v, pmState: t },
          u.createElement(n.Z, {
            key: `editordiv_${m}`,
            className: (0, b.A)(o, B.Container),
            ref: y,
            spellCheck: m,
            focusable: !0,
            onActivate: E,
            onOKActionDescription: (0, C.we)("#UserGameNotes_Edit"),
            onGamepadDirection: M,
            ...h,
          }),
          u.createElement(l.KF, { refOnUpdate: i, schema: S.pm_schema }),
          u.createElement(w, { parser: D, schema: S.pm_schema }),
          u.createElement(_, { schema: S.pm_schema }),
          p,
        );
      });
      const w = u.memo(function (e) {
        const { parser: t, schema: o } = e;
        return (
          (0, l.c$)(
            u.useMemo(
              () =>
                new i.k_({
                  props: {
                    transformPasted: (e, n) =>
                      (function (e, t, o) {
                        let n = !1;
                        if (
                          (o.content.forEach((e) => {
                            e.type == t && (n = !0);
                          }),
                          !n)
                        )
                          return o;
                        const r = e.ConvertLineBreaksToParagraphs(o.content);
                        return d.Ji.maxOpen(r);
                      })(t, o.nodes.hard_break, e),
                  },
                }),
              [t, o],
            ),
          ),
          null
        );
      });
    },
    79570: (e, t, o) => {
      "use strict";
      o.d(t, {
        Km: () => v,
        WJ: () => k,
        z9: () => w,
        C$: () => B,
        Hz: () => C,
        Nt: () => A,
        MV: () => _,
      });
      var n = o(98724),
        r = o(4188),
        s = o(37834),
        a = o(90626),
        l = o(4869),
        c = o(33737),
        i = o(9154),
        d = o(30175),
        u = o(52038),
        m = o(61859),
        h = o(73745),
        p = o(73309),
        g = o(32754);
      function f(e) {
        const { schema: t, children: o } = e,
          { callbacks: n, view: r } = (0, d.wU)(),
          [l, m] = a.useState(() => (0, s.Cd)(r.state, t.marks.link)),
          f = a.useCallback((e) => m((0, s.Cd)(e.state, t.marks.link)), [t]);
        (0, h.hL)(n, f);
        const [_, v, C] = (0, h.uD)();
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(
            i.EN,
            { active: _ },
            a.createElement(b, {
              schema: t,
              active: _,
              closeModal: C,
              view: r,
            }),
          ),
          a.createElement(
            g.Gq,
            {
              toolTipContent: "#FormattingToolbar_InsertLink",
              direction: "bottom",
            },
            a.createElement(
              c.$n,
              {
                className: (0, u.A)(p.CommandButton, l && p.Toggled),
                onMouseDown: (e) => {
                  e.preventDefault(), v();
                },
              },
              o,
            ),
          ),
        );
      }
      const b = a.memo(function (e) {
        const { schema: t, active: o, closeModal: n, view: r } = e,
          [s, l] = a.useState(""),
          [d, u] = a.useState(""),
          h = a.useRef(),
          p = a.useRef();
        return (
          a.useLayoutEffect(() => {
            if (o) {
              let e = "";
              r.state.selection.empty ||
                (e = r.state.doc.cut(
                  r.state.selection.from,
                  r.state.selection.to,
                ).textContent),
                l(e),
                e.startsWith("http")
                  ? (u(e),
                    h.current.Focus(),
                    window.setTimeout(() => {
                      h.current.element.select();
                    }, 0))
                  : 0 == e.length
                    ? h.current.Focus()
                    : p.current.Focus();
            }
          }, [o, r]),
          a.createElement(
            i.o0,
            {
              onOK: () => {
                r.dispatch(
                  r.state.tr.replaceRangeWith(
                    r.state.selection.from,
                    r.state.selection.to,
                    t.text(s || d, [t.marks.link.create({ href: d })]),
                  ),
                ),
                  r.focus(),
                  n();
              },
              closeModal: n,
              strTitle: (0, m.we)("#FormattingToolbar_InsertLink"),
              strOKButtonText: (0, m.we)("#FormattingToolbar_InsertLink"),
              bOKDisabled: 0 == d.length,
            },
            a.createElement(c.pd, {
              ref: h,
              value: s,
              onChange: (e) => l(e.currentTarget.value),
              label: (0, m.we)("#FormattingToolbar_LinkText"),
            }),
            a.createElement(c.pd, {
              ref: p,
              value: d,
              onChange: (e) => u(e.currentTarget.value),
              label: (0, m.we)("#FormattingToolbar_LinkAddress"),
            }),
          )
        );
      });
      function _() {
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(
            d.cQ,
            { tooltip: "#FormattingToolbar_Undo", command: n.tN },
            a.createElement(l.VnB, null),
          ),
          a.createElement(
            d.cQ,
            { tooltip: "#FormattingToolbar_Redo", command: n.ZS },
            a.createElement(l.Bal, null),
          ),
        );
      }
      function v(e) {
        const { schema: t } = e;
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(
            d.GY,
            { tooltip: "#FormattingToolbar_Bold", mark: t.marks.strong },
            a.createElement(l.l4n, null),
          ),
          a.createElement(
            d.GY,
            { tooltip: "#FormattingToolbar_Italic", mark: t.marks.italic },
            a.createElement(l.UKJ, null),
          ),
          a.createElement(
            d.GY,
            {
              tooltip: "#FormattingToolbar_Underline",
              mark: t.marks.underline,
            },
            a.createElement(l.Gj3, null),
          ),
          "strike" in t.marks &&
            a.createElement(
              d.GY,
              { tooltip: "#FormattingToolbar_Strike", mark: t.marks.strike },
              a.createElement(l.tI4, null),
            ),
          "code" in t.marks &&
            a.createElement(
              d.GY,
              { tooltip: "#FormattingToolbar_InlineCode", mark: t.marks.code },
              a.createElement(l.bmT, null),
            ),
        );
      }
      function C(e) {
        const { schema: t } = e;
        return a.createElement(
          d.u3,
          {
            tooltip: "#FormattingToolbar_Paragraph",
            nodeType: t.nodes.paragraph,
          },
          a.createElement(l.iYj, null),
        );
      }
      function k(e) {
        const { schema: t, maxLevel: o = 1, levels: n } = e,
          r = o + n - 1;
        return a.createElement(
          a.Fragment,
          null,
          o <= 1 &&
            a.createElement(
              d.u3,
              {
                tooltip: "#FormattingToolbar_HeadingLevel1",
                nodeType: t.nodes.heading,
                attrs: { level: 1 },
              },
              a.createElement(l.jRw, null),
            ),
          o <= 2 &&
            r >= 2 &&
            a.createElement(
              d.u3,
              {
                tooltip: "#FormattingToolbar_HeadingLevel2",
                nodeType: t.nodes.heading,
                attrs: { level: 2 },
              },
              a.createElement(l.qOW, null),
            ),
          o <= 3 &&
            r >= 3 &&
            a.createElement(
              d.u3,
              {
                tooltip: "#FormattingToolbar_HeadingLevel3",
                nodeType: t.nodes.heading,
                attrs: { level: 3 },
              },
              a.createElement(l.x7X, null),
            ),
          o <= 4 &&
            r >= 4 &&
            a.createElement(
              d.u3,
              {
                tooltip: "#FormattingToolbar_HeadingLevel4",
                nodeType: t.nodes.heading,
                attrs: { level: 4 },
              },
              a.createElement(l.qzO, null),
            ),
          o <= 5 &&
            r >= 5 &&
            a.createElement(
              d.u3,
              {
                tooltip: "#FormattingToolbar_HeadingLevel5",
                nodeType: t.nodes.heading,
                attrs: { level: 5 },
              },
              a.createElement(l.jXA, null),
            ),
        );
      }
      function B(e) {
        const { schema: t, showIndentButtonsAsNeeded: o = !1 } = e,
          { callbacks: n, view: s } = (0, d.wU)(),
          { bullet_list: c, ordered_list: i, list_item: u } = t.nodes,
          m = a.useMemo(() => r.T2(u), [u]),
          p = a.useMemo(() => r.$B(u), [u]),
          [g, f] = a.useState(() => m(s.state) || p(s.state));
        return (
          (0, h.hL)(
            n,
            a.useCallback(
              (e) => {
                f(m(e.state) || p(e.state));
              },
              [m, p],
            ),
          ),
          a.createElement(
            a.Fragment,
            null,
            a.createElement(
              T,
              {
                tooltip: "#FormattingToolbar_BulletedList",
                list_type: c,
                list_item: u,
              },
              a.createElement(l.JPq, null),
            ),
            i && !1,
            (!o || g) &&
              a.createElement(
                a.Fragment,
                null,
                a.createElement(
                  d.cQ,
                  { tooltip: "#FormattingToolbar_OutdentList", command: m },
                  a.createElement(l.LSz, null),
                ),
                a.createElement(
                  d.cQ,
                  { tooltip: "#FormattingToolbar_IndentList", command: p },
                  a.createElement(l.ycU, null),
                ),
              ),
          )
        );
      }
      function T(e) {
        const { list_type: t, list_item: o, tooltip: n, children: l } = e,
          { callbacks: c, view: i } = (0, d.wU)(),
          u = a.useCallback((e) => void 0 !== (0, s.wt)(e.state, t), [t]),
          [m, p] = a.useState(() => u(i)),
          g = a.useMemo(() => r.Sd(t), [t]),
          f = a.useMemo(() => r.T2(o), [o]);
        return (
          (0, h.hL)(
            c,
            a.useCallback(
              (e) => {
                p(u(e));
              },
              [u],
            ),
          ),
          a.createElement(
            d.cQ,
            { tooltip: n, toggled: m, command: m ? f : g },
            l,
          )
        );
      }
      function w(e) {
        const { schema: t } = e;
        return a.createElement(f, { schema: t }, a.createElement(l.YqK, null));
      }
      function A(e) {
        const { bSpellcheckEnabled: t, setSpellcheckEnabled: o } = e;
        return a.createElement(
          d.ff,
          {
            tooltip: t
              ? "#FormattingToolbar_DisableSpellcheck"
              : "#FormattingToolbar_EnableSpellcheck",
            toggled: t,
            onClick: () => o(!t),
          },
          a.createElement(l.DEV, null),
        );
      }
    },
    30175: (e, t, o) => {
      "use strict";
      o.d(t, {
        Ez: () => _,
        GY: () => C,
        XQ: () => f,
        bI: () => p,
        cQ: () => k,
        ff: () => B,
        hK: () => b,
        u3: () => v,
        wU: () => h,
      });
      var n = o(37834),
        r = o(12362),
        s = o(90626),
        a = o(76217),
        l = o(33737),
        c = o(6144),
        i = o(52038),
        d = o(73745),
        u = o(73309),
        m = o(32754);
      const h = () => s.useContext(g);
      function p(e) {
        const { view: t, refUpdateToolbar: o, children: n } = e,
          r = s.useRef();
        r.current || (r.current = new c.lu()),
          s.useEffect(
            () => (
              (0, d.cZ)(o, () => r.current.Dispatch(t)),
              () => (0, d.cZ)(o, void 0)
            ),
            [t, o],
          );
        const a = s.useMemo(() => ({ callbacks: r.current, view: t }), [t]);
        return t ? s.createElement(g.Provider, { value: a }, n) : null;
      }
      const g = s.createContext(void 0);
      function f() {
        return s.createElement("div", { className: u.Gap });
      }
      function b() {
        return s.createElement("div", { className: u.Spacer });
      }
      function _(e) {
        return s.createElement(
          a.Z,
          {
            className: (0, i.A)(e.className, u.ToolbarRow),
            "flow-children": "row",
          },
          e.children,
        );
      }
      function v(e) {
        const { nodeType: t, tooltip: o, attrs: a, children: l } = e,
          { callbacks: c, view: i } = h(),
          [u, m] = s.useState(() => (0, n.gj)(i.state, t, a)),
          p = s.useCallback((e) => m((0, n.gj)(e.state, t, a)), [t, a]);
        (0, d.hL)(c, p);
        const g = s.useMemo(() => r.y_(t, a), [a, t]);
        return s.createElement(k, {
          command: g,
          tooltip: o,
          toggled: u,
          children: l,
        });
      }
      function C(e) {
        const { mark: t, tooltip: o, children: a } = e,
          { callbacks: l, view: c } = h(),
          [i, u] = s.useState(() => (0, n.Cd)(c.state, t)),
          m = s.useCallback((e) => u((0, n.Cd)(e.state, t)), [t]);
        (0, d.hL)(l, m);
        const p = s.useMemo(() => r.wh(t), [t]);
        return s.createElement(k, {
          command: p,
          tooltip: o,
          toggled: i,
          children: a,
        });
      }
      function k(e) {
        const { command: t, toggled: o, tooltip: n, children: r } = e,
          { view: a, callbacks: c } = h(),
          [p, g] = s.useState(() => t(a.state));
        (0, d.hL)(
          c,
          s.useCallback((e) => g(t(e.state)), [t]),
        ),
          s.useEffect(() => g(t(a.state)), [t, a]);
        const f = !p && !o;
        return s.createElement(
          m.Gq,
          { toolTipContent: n, bDisabled: !n, direction: "bottom" },
          s.createElement(
            l.$n,
            {
              className: (0, i.A)(u.CommandButton, o && u.Toggled),
              onMouseDown: (e) => {
                e.preventDefault(), t(a.state, a.dispatch, a);
              },
              disabled: f,
              focusable: !f,
            },
            r,
          ),
        );
      }
      function B(e) {
        const {
          onClick: t,
          toggled: o,
          tooltip: n,
          disabled: r,
          children: a,
          className: c,
        } = e;
        return s.createElement(
          m.Gq,
          { toolTipContent: n, bDisabled: !n, direction: "bottom" },
          s.createElement(
            l.$n,
            {
              className: (0, i.A)(u.CommandButton, o && u.Toggled, c),
              onMouseDown: (e) => {
                e.preventDefault(), t();
              },
              disabled: !0 === r,
            },
            a,
          ),
        );
      }
    },
  },
]);
