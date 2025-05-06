/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [8104],
  {
    73309: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        narrowWidth: "500px",
        Container: "_30v-6zb_axOypIUr5VRHE1",
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
    79497: (e, t, r) => {
      "use strict";
      r.d(t, { W: () => n });
      var o = r(57053);
      class n {
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
          const r = this.m_PMToBBCodeConfig.mapNodes.get(e.type);
          return (r && r.AttrsToBBArgs && r.AttrsToBBArgs(t, e).args) || {};
        }
        constructor(e, t) {
          (this.m_mapBBCodeDictionary = new Map()),
            (this.m_PMToBBCodeConfig = {
              mapNodes: new Map(),
              mapMarks: new Map(),
            });
          const r = {
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
            s = new Map(),
            l = t ? new Set(t) : void 0;
          for (const t in e.nodes) {
            const { bbCode: o, ...s } = e.nodes[t],
              c = a(o, l);
            c && ((r[t] = s), n.set(t, c));
          }
          const c = {};
          for (const t in e.marks) {
            const { bbCode: r, ...o } = e.marks[t];
            (l && !l.has(r.tag)) || ((c[t] = o), s.set(t, r));
          }
          (this.m_ProseMirrorSchema = new o.Sj({ nodes: r, marks: c })),
            n.forEach((t, r) => {
              var o;
              const n = this.m_ProseMirrorSchema.nodes[r],
                a = e.nodes[r],
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
                    AttrsToBBArgs: r,
                    convertContentToAttr: o,
                    ...a
                  }) => {
                    this.m_mapBBCodeDictionary.set(e, {
                      Constructor: {
                        node: n,
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
              this.m_PMToBBCodeConfig.mapNodes.set(n, {
                tag: c,
                AttrsToBBArgs: i,
              });
            }),
            s.forEach((e, t) => {
              const r = this.m_ProseMirrorSchema.marks[t],
                { tag: o, BBArgsToAttrs: n, AttrsToBBArgs: a, ...s } = e;
              this.m_mapBBCodeDictionary.set(o, {
                Constructor: { mark: r, BBArgsToAttrs: n },
                ...s,
              }),
                this.m_PMToBBCodeConfig.mapMarks.set(r, {
                  tag: o,
                  AttrsToBBArgs: a,
                });
            });
        }
      }
      function a(e, t) {
        if (t) {
          if (Array.isArray(e)) {
            const r = e.filter((e) => t.has(e.tag));
            return r.length > 0 ? r : void 0;
          }
          return t.has(e.tag) ? e : void 0;
        }
        return e;
      }
    },
    22145: (e, t, r) => {
      "use strict";
      r.d(t, { KF: () => p, Ot: () => h, c$: () => g, Hd: () => f });
      var o = r(12362),
        n = r(15024),
        a = r(7502),
        s = r(52893),
        l = r(90626),
        c = r(98724),
        i = r(79216),
        d = r(4188),
        u = r(37834);
      r(45772), r(74763);
      const m = l.createContext(void 0);
      function h(e) {
        const { view: t, pmState: r, children: o } = e,
          n = l.useMemo(() => ({ view: t, pmState: r }), [t, r]);
        return l.createElement(m.Provider, { value: n }, o);
      }
      const p = l.memo(function (e) {
        const { schema: t, refOnUpdate: r } = e;
        return (
          g(
            l.useMemo(
              () =>
                r &&
                new s.k_({
                  view: (e) => ({
                    update: (...e) => r.current && r.current(...e),
                  }),
                }),
              [r],
            ),
          ),
          g(l.useMemo(() => (0, n.z)(), [])),
          g(
            l.useMemo(
              () =>
                (function (e) {
                  const { nodes: t, marks: r } = e,
                    n = (0, o.st)(
                      o.I$,
                      (e, r) => (
                        r &&
                          r(
                            e.tr
                              .replaceSelectionWith(
                                t.hard_break.createChecked(),
                              )
                              .scrollIntoView(),
                          ),
                        !0
                      ),
                    ),
                    s = {
                      "Mod-z": c.tN,
                      "Mod-y": c.ZS,
                      "Shift-Mod-z": c.ZS,
                      Backspace: i.dv,
                      Escape: o.hy,
                      "Mod-Enter": n,
                      "Shift-Enter": n,
                      "Mod-b": (0, o.wh)(r.strong),
                      "Mod-i": (0, o.wh)(r.italic),
                      "Mod-u": (0, o.wh)(r.underline),
                      "Mod-Shift-x": (0, o.wh)(r.strikethrough),
                      "Ctrl-Shift-s": (0, o.wh)(r.strikethrough),
                      Enter: (0, d.wn)(t.list_item),
                      "Mod-[": (0, d.T2)(t.list_item),
                      "Mod-]": (0, d.$B)(t.list_item),
                      "Ctrl-Shift-1": (0, o.y_)(t.heading, { level: 1 }),
                      "Ctrl-Shift-2": (0, o.y_)(t.heading, { level: 2 }),
                      "Ctrl-Shift-3": (0, o.y_)(t.heading, { level: 3 }),
                      "Ctrl-Shift-4": (0, o.y_)(t.heading, { level: 4 }),
                      "Ctrl-Shift-5": (0, o.y_)(t.heading, { level: 5 }),
                      "Ctrl-Shift-7": (0, o.y_)(t.ordered_list),
                      "Ctrl-Shift-8": (0, o.y_)(t.bullet_list),
                      "Ctrl-Shift-0": (0, o.y_)(t.paragraph),
                    };
                  return (
                    r.code && (s["Ctrl-Shift-c"] = (0, o.wh)(r.code)),
                    t.code_block &&
                      (s["Alt-Ctrl-Shift-c"] = (0, o.y_)(t.code_block)),
                    t.horizontal_rule &&
                      (s["Mod-_"] = (e, r) => (
                        r &&
                          r(
                            e.tr
                              .replaceSelectionWith(t.horizontal_rule.create())
                              .scrollIntoView(),
                          ),
                        !0
                      )),
                    (0, a.w)(s)
                  );
                })(t),
              [t],
            ),
          ),
          g(l.useMemo(() => (0, a.w)(o.RV), [])),
          g(
            l.useMemo(
              () =>
                (function (e) {
                  const { nodes: t, marks: r } = e;
                  return (0, i.sM)({
                    rules: [
                      (0, i.tG)(
                        /^(\d+)\.\s$/,
                        t.ordered_list,
                        (e) => ({ order: parseInt(e[1]) }),
                        (e, t) =>
                          t.childCount + t.attrs.order == parseInt(e[1]),
                      ),
                      (0, i.tG)(/^\s*([-+*])\s$/, t.bullet_list),
                      (0, u.OX)(/\*([^*]+)\*/, r.strong),
                      (0, u.OX)(/_([^_]+)_/, r.italic),
                      (0, u.OX)(/~([^~]+)~/, r.strike),
                      (0, u.OX)(/`([^`]+)`/, r.code),
                      (0, i.JJ)(/^```$/, t.code_block),
                      (0, i.JJ)(/^(#{1,5})\s$/, t.heading, (e) => ({
                        level: e[1].length,
                      })),
                      t.horizontal_rule &&
                        ((o = /^(\*\*\*|---|___)$/),
                        (n = t.horizontal_rule),
                        new i.fV(o, (e, t, r, o) =>
                          e.tr.replaceWith(r, o, n.create()),
                        )),
                    ].filter(Boolean),
                  });
                  var o, n;
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
    55608: (e, t, r) => {
      "use strict";
      r.d(t, { BM: () => l, DQ: () => i, ce: () => c });
      var o = r(33645),
        n = r.n(o),
        a = r(4188),
        s = r(52038);
      function l(e, t, r = 0) {
        return () => [e, { class: t }, r];
      }
      function c(e, t, r = 0) {
        return [e, { class: t }, r];
      }
      const i = {
        nodes: {
          paragraph: {
            content: "inline*",
            group: "block",
            parseDOM: [{ tag: "p" }],
            toDOM: l("p", (0, s.A)("pm_paragraph", n().Paragraph)),
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
                  `BB_Header${e.attrs.level} ` + n()[`Header${e.attrs.level}`],
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
              const { src: t, alt: r, title: o } = e.attrs;
              return ["img", { src: t, alt: r, title: o, class: n().Image }];
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
                  let r = "",
                    o = "";
                  for (const e of t.querySelectorAll("source"))
                    "video/mp4" == e.type
                      ? (r = e.src)
                      : "video/webm" == e.type && (o = e.src);
                  return {
                    mp4: r,
                    webm: o,
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
                  mp4: r,
                  poster: o,
                  autoplay: n,
                  controls: a,
                } = e.attrs,
                s = [];
              return (
                t && s.push(["source", { src: t, type: "video/webm" }]),
                r && s.push(["source", { src: r, type: "video/mp4" }]),
                [
                  "video",
                  { poster: o, autoPlay: !!n, controls: !!a, loop: !a && !!n },
                  s,
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
            ...a.fF,
            content: "list_item+",
            group: "block",
            toDOM: l("ul", n().List),
            bbCode: { tag: "list" },
          },
          ordered_list: {
            ...a.o8,
            content: "list_item+",
            group: "block",
            toDOM: l("ol", n().OrderedList),
            bbCode: { tag: "olist" },
          },
          list_item: {
            ...a.Aw,
            content: "paragraph block*",
            toDOM: l("li", n().ListItem),
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
              { class: n().CodeBlock },
              ["code", { class: n().Code }, 0],
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
            toDOM: l("b", (0, s.A)("BB_Bold", n().Bold)),
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
            toDOM: l("i", (0, s.A)("BB_Italic", n().Italic)),
            bbCode: { tag: "i" },
          },
          underline: {
            parseDOM: [{ tag: "u" }, { style: "text-decoration=underline" }],
            toDOM: l("u", (0, s.A)("BB_Underline", n().Underline)),
            bbCode: { tag: "u" },
          },
          strike: {
            parseDOM: [{ style: "text-decoration=line-through" }],
            toDOM: l("span", (0, s.A)("BB_Strike", n().Strike)),
            bbCode: { tag: "strike" },
          },
          code: {
            parseDOM: [{ tag: "code" }],
            toDOM: l("code", (0, s.A)("BB_Code", n().Code)),
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
              const { href: t, title: r } = e.attrs;
              return ["a", { href: t, title: r, class: "BB_Link" }, 0];
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
    90286: (e, t, r) => {
      "use strict";
      r.d(t, { n: () => b, u: () => _ });
      var o = r(91986),
        n = r(64753),
        a = r(98724),
        s = r(52893),
        l = r(49693),
        c = r(57053),
        i = r(81393);
      class d {
        constructor(e) {
          (this.m_nodes = []), (this.m_schema = e);
        }
        AppendText(e, t) {
          let r = 0;
          for (let t = e.indexOf("\n", r); -1 !== t; t = e.indexOf("\n", r))
            r != t && this.m_nodes.push(this.m_schema.text(e.substring(r, t))),
              this.m_nodes.push(this.m_schema.nodes.hard_break.createChecked()),
              (r = t + 1);
          r < e.length && this.m_nodes.push(this.m_schema.text(e.substring(r)));
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
        TryCreateNode(e, t, r) {
          let o = c.FK.from(t);
          if (!e.node.validContent(o) && e.acceptNode) {
            let r = t.filter((t) => t.type == e.acceptNode);
            if (!r.length) {
              let o = t;
              e.acceptNode.isBlock &&
                o.length > 1 &&
                o[o.length - 1].type == this.schema.nodes.hard_break &&
                (o = o.slice(0, -1));
              const n = this.m_mapPMBBNodes.get(e.acceptNode.name);
              (0, i.w)(
                n,
                `Indicated acceptNode type ${e.acceptNode.name} for ${e.node.name} missing`,
              ),
                (r = n
                  ? [this.TryCreateNode(n, o, void 0)]
                  : [e.acceptNode.create(void 0, o)]);
            }
            o = c.FK.from(r);
          }
          return e.node.createAndFill(r, o) || e.node.create(r, o);
        }
        BBNodeToPMNode(e, t, ...r) {
          let o = e.BBArgsToAttrs ? e.BBArgsToAttrs(t.args || {}) : void 0;
          try {
            if (
              ("convertContentToAttr" in e &&
                e.convertContentToAttr &&
                ((o && o[e.convertContentToAttr]) ||
                  (o = {
                    ...(o || {}),
                    [e.convertContentToAttr]:
                      ((n = r),
                      n
                        .filter((e) => e.isText)
                        .map((e) => e.text)
                        .join()),
                  }),
                "node" in e && (r = [])),
              "node" in e)
            )
              return this.TryCreateNode(e, r, o);
            {
              const t = e.mark.create(o);
              return r.map((e) => this.RecursivelyApplyMark(e, t));
            }
          } catch (e) {
            return (
              console.error(`Error parsing [${t.tagname}] tag: ${e}`, e), []
            );
          }
          var n;
        }
        RecursivelyApplyMark(e, t) {
          if (e.isText || e.type.allowsMarkType(t.type))
            return e.mark([...e.marks, t]);
          {
            const r = [];
            return (
              e.descendants(
                (e) => (r.push(this.RecursivelyApplyMark(e, t)), !1),
              ),
              e.type.create(e.attrs, r, e.marks)
            );
          }
        }
        ConvertLineBreaksToParagraphs(e) {
          const t = new Map(),
            r = this.m_schemaConfig.pm_schema;
          this.m_mapPMBBNodes.forEach((e) => {
            e.acceptNode && t.set(e.acceptNode.name, e.node);
          });
          const o = [],
            n = {
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
                const t = this.nodeType || (e ? r.nodes.paragraph : void 0);
                t && (o.push(t.createChecked({}, this.nodes)), this.reset());
              },
            };
          return (
            e.forEach((e) => {
              const a = e.type == r.nodes.hard_break,
                s = c.FK.from(e);
              if (a || r.topNodeType.validContent(s)) {
                const t = a && n.nodes.length > 0;
                n.emit(),
                  a
                    ? t || o.push(r.nodes.paragraph.createChecked())
                    : o.push(e);
              } else {
                let o;
                (o = r.nodes.paragraph.validContent(s)
                  ? r.nodes.paragraph
                  : t.get(e.type.name)),
                  o
                    ? n.accumulate(o, e)
                    : ((0, i.w)(
                        !1,
                        `Couldn't accept ${e.type.name} at root of document, converting to paragraph`,
                      ),
                      (o = r.nodes.paragraph),
                      n.accumulate(
                        r.nodes.paragraph,
                        r.text(
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
            (!n.nodes.length && o.length) || n.emit(!0),
            c.FK.from(o)
          );
        }
      }
      function m(e, t) {
        return h(t.pm_schema, t.pm_to_bbcode_config, e, []);
      }
      function h(e, t, r, o) {
        let n = r.marks,
          a = "";
        const s = t.mapNodes.get(r.type),
          { tag: c, args: d } = (function (e, t) {
            if (e && e.AttrsToBBArgs) {
              const { tag: r = e.tag, args: o = {} } = e.AttrsToBBArgs(
                t.attrs,
                t,
              );
              return { tag: r, args: o };
            }
            return { tag: null == e ? void 0 : e.tag, args: {} };
          })(s, r);
        return (
          c && (a += (0, l.CS)(c, d)),
          r.content.forEach((r) => {
            ([a, n] = p(t, n, r.marks, a)),
              ([a, n] = (function (e, t, r, o) {
                let n;
                for (const a of r)
                  if (-1 === t.indexOf(a)) {
                    n || (n = t.slice());
                    const r = e.mapMarks.get(a.type);
                    if (((0, i.w)(r, "mark missing bbtag"), r)) {
                      n.push(a);
                      const { args: e, tag: t } = g(r, a);
                      o += (0, l.CS)(t, e);
                    }
                  }
                return [o, null != n ? n : t];
              })(t, n, r.marks, a)),
              r.type.isText
                ? (a += (0, l.vE)(r.text || ""))
                : r.type == e.nodes.hard_break
                  ? (a += "\n")
                  : (a += h(e, t, r, n));
          }),
          ([a] = p(t, n, o, a)),
          c && (a += (0, l.op)(c)),
          a
        );
      }
      function p(e, t, r, o) {
        const n = [];
        for (const e of t) -1 === r.indexOf(e) && n.push(e);
        if (!n.length) return [o, t];
        const a = t.slice();
        for (
          ;
          n.length && ((0, i.w)(a.length, "no marks left to close"), a.length);
        ) {
          const t = a.pop(),
            r = e.mapMarks.get(t.type),
            { tag: s } = g(r, t);
          o += (0, l.op)(s);
          const c = n.indexOf(t);
          -1 != c && n.splice(c, 1);
        }
        return [o, a];
      }
      function g(e, t) {
        if (e && e.AttrsToBBArgs) {
          const { tag: r = e.tag, args: o = {} } = e.AttrsToBBArgs(t.attrs, t);
          return { tag: r, args: o };
        }
        return { tag: null == e ? void 0 : e.tag, args: {} };
      }
      const f = new s.hs("CProseMirrorState - OnChange");
      class b {
        constructor(e, t, r) {
          (this.m_bHasUncomittedChanges = !1),
            (this.m_onStateChangedCallbacks = new o.l()),
            (this.m_schemaConfig = e),
            (this.m_bbcodeParser = new u(e)),
            (this.m_bbcode = t),
            (this.m_fnCommitChanges = r),
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
        UpdateState(e) {
          var t;
          const r = e(
            (null === (t = this.m_view) || void 0 === t
              ? void 0
              : t.state.tr) || this.m_state.tr,
          );
          r &&
            r.docChanged &&
            (this.m_view
              ? this.m_view.dispatch(r)
              : (this.m_state = this.m_state.apply(r)));
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
          const e = new s.k_({
              key: f,
              view: (e) => (
                console.assert(!this.m_view),
                (this.m_view = e),
                {
                  update: (e, t) => this.OnStateChange(t, e.state),
                  destroy: () => (this.m_view = void 0),
                }
              ),
            }),
            t = [(0, a.b6)(), e];
          return s.$t.create({
            schema: this.m_schemaConfig.pm_schema,
            doc: this.m_bbcodeParser.ParseBBCode(this.m_bbcode),
            plugins: t,
          });
        }
        InstallPlugin(e) {
          var t;
          const r = this.m_view ? this.m_view.state : this.m_state;
          return (
            r.plugins.includes(e) ||
              ((this.m_state = r.reconfigure({ plugins: [...r.plugins, e] })),
              null === (t = this.m_view) || void 0 === t || t.updateState(r)),
            () => {
              var t;
              const r = this.m_view ? this.m_view.state : this.m_state;
              (this.m_state = r.reconfigure({
                plugins: r.plugins.filter((t) => t != e),
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
        (0, n.hL)(null == e ? void 0 : e.OnStateChangedCallbacks, t);
      }
    },
    37834: (e, t, r) => {
      "use strict";
      r.d(t, {
        Cd: () => a,
        OX: () => i,
        bQ: () => d,
        gj: () => l,
        vn: () => s,
        wt: () => c,
      });
      var o = r(79216),
        n = r(52893);
      function a(e, t) {
        const { from: r, $from: o, to: n, empty: a } = e.selection;
        return a
          ? !!t.isInSet(e.storedMarks || o.marks())
          : e.doc.rangeHasMark(r, n, t);
      }
      function s(e, t, r) {
        var o;
        const { parent: n } = r,
          a = n.childAfter(r.parentOffset),
          s =
            null === (o = a.node) || void 0 === o
              ? void 0
              : o.marks.find((e) => e.type == t);
        if (!s) return;
        let l = r.index() - 1,
          c = r.start() + a.offset;
        for (; l >= 0 && s.isInSet(n.child(l).marks); )
          (c -= n.child(l).nodeSize), (l -= 1);
        let i = r.index() + 1,
          d = r.start() + a.offset + a.node.nodeSize;
        for (; i < n.childCount && s.isInSet(n.child(i).marks); )
          (d += n.child(i).nodeSize), (i += 1);
        return { from: c, to: d, slice: e.doc.slice(c, d), mark: s };
      }
      function l(e, t, r) {
        let { $from: o, to: n, node: a } = e.selection;
        return !a && n <= o.end() && (a = o.parent), !!a && a.hasMarkup(t, r);
      }
      function c(e, t, r) {
        const { $from: o, to: n } = e.selection;
        for (let e = o.sharedDepth(n); e > 0; e--) {
          const n = o.node(e);
          if (void 0 === r ? n.type === t : n.hasMarkup(t, r))
            return o.before(e);
        }
      }
      function i(e, t, r = {}) {
        return new o.fV(e, (e, o, n, a) => {
          const s = r instanceof Function ? r(o) : r,
            l = e.tr;
          if (o[1]) {
            const e = n + o[0].indexOf(o[1]),
              t = e + o[1].length;
            t < a && l.delete(t, a),
              e > n && l.delete(n, e),
              (a = n + o[1].length);
          }
          return l.addMark(n, a, t.create(s)), l.removeStoredMark(t), l;
        });
      }
      function d(e, t, r) {
        const o = { left: t, top: r },
          a = e.posAtCoords(o);
        if (null == a ? void 0 : a.pos) {
          const t = e.state.doc.resolve(a.pos);
          e.dispatch(e.state.tr.setSelection(n.U3.near(t)));
        }
      }
    },
    9024: (e, t, r) => {
      "use strict";
      r.d(t, { X: () => u, w: () => c });
      var o = r(33645),
        n = r.n(o),
        a = r(38539),
        s = r(55608),
        l = r(52038);
      const c = { NoBorder: "noborder", EqualCells: "equalcells" },
        i = a.of({
          tableGroup: "block",
          cellContent: "paragraph block*",
          cellAttributes: {
            class: {
              default: n().TableCell,
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
              (0, s.ce)(
                "table",
                (0, l.A)(
                  n().Table,
                  e.attrs.noborder && n().NoBorder,
                  e.attrs.equalcells && n().EqualCells,
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
                const r = {};
                e.noborder && (r.noborder = "1"),
                  e.equalcells && (r.equalcells = "1");
                const o = t.child(0);
                if (o) {
                  let e = [];
                  for (let t = 0; t < o.childCount; t++) {
                    const r = o.child(t).attrs;
                    r.colwidth ? e.push(...r.colwidth) : e.push(void 0);
                  }
                  r.colwidth = e.join(",");
                }
                return { args: r };
              },
            },
          },
          table_row: {
            ...i.table_row,
            toDOM: (0, s.BM)("tr", n().TableRow),
            bbCode: { tag: "tr" },
          },
          table_cell: { ...i.table_cell, bbCode: { ...d, tag: "td" } },
          table_header: { ...i.table_header, bbCode: { ...d, tag: "th" } },
        };
    },
    72421: (e, t, r) => {
      "use strict";
      r.d(t, { _: () => s });
      var o = r(90626),
        n = r(33737),
        a = r(738);
      function s(e) {
        const {
            closeModal: t,
            strTitle: r,
            onOK: s,
            strOKText: l,
            onCancel: c,
            strCancelText: i,
            bOKDisabled: d,
            bCancelDisabled: u,
            strClassNameContent: m = "GenericFormDialog",
            children: h,
          } = e,
          p = o.useCallback(() => {
            c && c(), t();
          }, [c, t]),
          g = u ? void 0 : p;
        return o.createElement(
          a.x_,
          { onEscKeypress: g },
          o.createElement(
            n.U9,
            { onSubmit: s, classNameContent: m },
            o.createElement(n.Y9, null, r),
            h,
            o.createElement(
              n.wi,
              null,
              o.createElement(n.CB, {
                strOKText: l,
                bOKDisabled: d,
                onCancel: g,
                strCancelText: i,
                bCancelDisabled: u,
              }),
            ),
          ),
        );
      }
    },
    17558: (e, t, r) => {
      "use strict";
      r.d(t, { E: () => d });
      var o = r(37834),
        n = r(52893),
        a = r(90626),
        s = r(33737),
        l = r(9154),
        c = r(72421),
        i = r(61859);
      function d(e, t) {
        const [r, n] = a.useState(void 0),
          s = a.useCallback(
            (r) => {
              const a = r.state.selection;
              let s = "",
                l = "",
                { from: c, to: i } = a;
              const d = (0, o.vn)(r.state, e.marks.link, a.$from),
                u = !!d;
              d
                ? ((l = d.mark.attrs.href),
                  a.empty
                    ? ((s = d.slice.content.textBetween(
                        0,
                        d.slice.content.size,
                      )),
                      (c = d.from),
                      (i = d.to))
                    : ((c = Math.max(d.from, a.from)),
                      (i = Math.min(d.to, a.to)),
                      (s = d.slice.content.textBetween(
                        c - d.from,
                        i - d.from,
                      ))))
                : r.state.selection.empty ||
                  ((s = r.state.doc.cut(
                    r.state.selection.from,
                    r.state.selection.to,
                  ).textContent),
                  s.match(/^https?:\/\//) && (l = s));
              let m = {};
              if (t)
                for (const e in t) {
                  const r = t[e],
                    o = d ? r.fnReadValue(d.mark) : r.defaultValue;
                  m[e] = o;
                }
              n({
                view: r,
                strLinkText: s,
                strLinkHref: l,
                bIsUpdate: u,
                addtlAttrs: t,
                addtlAttrsValues: m,
                from: c,
                to: i,
              });
            },
            [e.marks.link, t],
          ),
          c = null == r ? void 0 : r.view,
          i = a.useCallback(() => {
            window.setTimeout(() => c.focus(), 1), n(void 0);
          }, [c]);
        return [
          s,
          r &&
            a.createElement(
              l.EN,
              { active: !0 },
              a.createElement(u, { schema: e, closeModal: i, ...r }),
            ),
        ];
      }
      const u = a.memo(function (e) {
        const {
            schema: t,
            strLinkText: r,
            strLinkHref: o,
            bIsUpdate: l,
            addtlAttrs: d,
            addtlAttrsValues: u,
            closeModal: h,
            view: p,
            from: g,
            to: f,
          } = e,
          [b, _] = a.useState(r),
          [C, k] = a.useState(o),
          v = a.useRef(null),
          T = a.useRef(null),
          [B, w] = a.useState(u);
        a.useLayoutEffect(() => {
          var e, t, r, o, n;
          (
            null ===
              (t =
                null === (e = v.current) || void 0 === e ? void 0 : e.value) ||
            void 0 === t
              ? void 0
              : t.length
          )
            ? (
                null ===
                  (o =
                    null === (r = T.current) || void 0 === r
                      ? void 0
                      : r.value) || void 0 === o
                  ? void 0
                  : o.length
              )
              ? (v.current.Focus(), v.current.element.select())
              : T.current.Focus()
            : null === (n = v.current) || void 0 === n || n.Focus();
        }, []);
        const y = l
            ? (0, i.we)("#FormattingToolbar_EditLink")
            : (0, i.we)("#FormattingToolbar_InsertLink"),
          S = l
            ? (0, i.we)("#Button_Save")
            : (0, i.we)("#FormattingToolbar_InsertLink");
        return a.createElement(
          c._,
          {
            onOK: () => {
              let e = p.state.tr;
              const r = { href: C };
              for (const e in B) r[e] = B[e];
              const o = t.text(b || C, [t.marks.link.create(r)]);
              (e = e.replaceRangeWith(g, f, o)),
                (e = e.setSelection(
                  n.U3.create(e.doc, g + o.nodeSize, g + o.nodeSize),
                )),
                p.dispatch(e),
                h();
            },
            closeModal: h,
            strTitle: y,
            strOKText: S,
            bOKDisabled: 0 == C.length,
          },
          a.createElement(s.pd, {
            ref: v,
            value: b,
            onChange: (e) => _(e.currentTarget.value),
            label: (0, i.we)("#FormattingToolbar_LinkText"),
          }),
          a.createElement(s.pd, {
            ref: T,
            value: C,
            onChange: (e) => k(e.currentTarget.value),
            label: (0, i.we)("#FormattingToolbar_LinkAddress"),
          }),
          d && a.createElement(m, { addtlAttrs: d, values: B, setValues: w }),
        );
      });
      function m(e) {
        const { addtlAttrs: t, values: r, setValues: o } = e;
        return a.createElement(
          a.Fragment,
          null,
          Object.keys(t).map((e) =>
            a.createElement(h, {
              key: e,
              attrName: e,
              fnRender: t[e].fnRenderEditor,
              value: r[e],
              setValues: o,
            }),
          ),
        );
      }
      const h = a.memo(function (e) {
        const { attrName: t, fnRender: r, value: o, setValues: n } = e;
        return r(
          o,
          a.useCallback((e) => n((r) => ({ ...r, [t]: e })), [t]),
        );
      });
    },
    1805: (e, t, r) => {
      "use strict";
      r.d(t, { l: () => B });
      var o = r(76217),
        n = r(63512),
        a = r(73170),
        s = r(51668),
        l = r(22145),
        c = r(37834),
        i = r(52893),
        d = r(57053),
        u = r(90626),
        m = r(84811),
        h = r(33645),
        p = r.n(h),
        g = r(38539),
        f = r(9024),
        b = r(52038);
      const _ = u.memo(function (e) {
        const { schema: t } = e,
          r = !(!("table" in t.nodes) || !t.nodes.table.spec.tableRole);
        return (
          (0, l.c$)(u.useMemo(() => r && g.AL({ View: C }), [r])),
          (0, l.c$)(u.useMemo(() => r && g.LF(), [r])),
          null
        );
      });
      class C extends g.Qg {
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
      var k = r(61859),
        v = r(73745),
        T = r(73309);
      const B = (0, m.Nr)(function (e) {
        const {
            pmState: t,
            className: r,
            refOnUpdate: i,
            refView: d,
            bSpellcheckEnabled: m = !0,
            panelProps: h,
            children: p,
          } = e,
          [g, f] = u.useState(),
          [C, B] = u.useState();
        u.useEffect(() => {
          t && g && B(new s.Lz(g, { state: t.state }));
        }, [t, g]),
          u.useEffect(() => () => (null == C ? void 0 : C.destroy()), [C]),
          (0, v.D5)(d, C);
        const {
            refDiv: y,
            onActivate: S,
            onGamepadDirection: A,
          } = (function (e) {
            const t = u.useRef(),
              r = (0, a.FN)(),
              o = u.useCallback(() => {
                if (
                  (r.ShowVirtualKeyboard(),
                  !(null == e ? void 0 : e.hasFocus()))
                ) {
                  e.focus();
                  let r = e.dom.childNodes;
                  for (let o = 0; o < r.length; ++o) {
                    let n = r[o],
                      a = n.offsetTop;
                    if (void 0 !== a && a >= t.current.scrollTop) {
                      let t = n.getBoundingClientRect();
                      (0, c.bQ)(e, t.left, t.top);
                      break;
                    }
                  }
                }
              }, [r, e]),
              s = u.useCallback((e) => e.currentTarget == e.target, []),
              l = (0, n.ak)(t, null, null, s);
            return { refDiv: t, onActivate: o, onGamepadDirection: l };
          })(C),
          E = (0, v.Ue)(y, f);
        if (!t) return null;
        const { schemaConfig: M, bbcodeParser: O } = t;
        return u.createElement(
          l.Ot,
          { view: C, pmState: t },
          u.createElement(o.Z, {
            key: `editordiv_${m}`,
            className: (0, b.A)(r, T.Container),
            ref: E,
            spellCheck: m,
            focusable: !0,
            onActivate: S,
            onOKActionDescription: (0, k.we)("#UserGameNotes_Edit"),
            onGamepadDirection: A,
            ...h,
          }),
          u.createElement(l.KF, { refOnUpdate: i, schema: M.pm_schema }),
          u.createElement(w, { parser: O, schema: M.pm_schema }),
          u.createElement(_, { schema: M.pm_schema }),
          p,
        );
      });
      const w = u.memo(function (e) {
        const { parser: t, schema: r } = e;
        return (
          (0, l.c$)(
            u.useMemo(
              () =>
                new i.k_({
                  props: {
                    transformPasted: (e, o) =>
                      (function (e, t, r) {
                        let o = !1;
                        if (
                          (r.content.forEach((e) => {
                            e.type == t && (o = !0);
                          }),
                          !o)
                        )
                          return r;
                        const n = e.ConvertLineBreaksToParagraphs(r.content);
                        return d.Ji.maxOpen(n);
                      })(t, r.nodes.hard_break, e),
                  },
                }),
              [t, r],
            ),
          ),
          null
        );
      });
    },
    79570: (e, t, r) => {
      "use strict";
      r.d(t, {
        Km: () => p,
        WJ: () => f,
        z9: () => C,
        C$: () => b,
        Hz: () => g,
        Nt: () => k,
        MV: () => h,
      });
      var o = r(98724),
        n = r(4188),
        a = r(37834),
        s = r(90626),
        l = r(4869),
        c = r(17558),
        i = r(30175),
        d = r(73745);
      function u(e) {
        const { schema: t, addtlAttrs: r, children: o } = e,
          { callbacks: n, view: l } = (0, i.wU)(),
          [u, m] = s.useState(() => (0, a.Cd)(l.state, t.marks.link)),
          h = s.useCallback((e) => m((0, a.Cd)(e.state, t.marks.link)), [t]);
        (0, d.hL)(n, h);
        const [p, g] = (0, c.E)(t, r);
        return s.createElement(
          s.Fragment,
          null,
          g,
          s.createElement(
            i.ff,
            {
              onClick: () => p(l),
              toggled: u,
              tooltip: "#FormattingToolbar_InsertLink",
              keyboardShortcut: "Mod-k",
            },
            o,
          ),
        );
      }
      var m = r(30470);
      function h() {
        return s.createElement(
          s.Fragment,
          null,
          s.createElement(
            i.cQ,
            {
              tooltip: "#FormattingToolbar_Undo",
              keyboardShortcut: "Mod-z",
              command: o.tN,
            },
            s.createElement(l.VnB, null),
          ),
          s.createElement(
            i.cQ,
            {
              tooltip: "#FormattingToolbar_Redo",
              keyboardShortcut:
                "macos" == m.TS.PLATFORM ? "Mod-Shift-z" : "Mod-y",
              command: o.ZS,
            },
            s.createElement(l.Bal, null),
          ),
        );
      }
      function p(e) {
        const { schema: t } = e;
        return s.createElement(
          s.Fragment,
          null,
          s.createElement(
            i.GY,
            {
              tooltip: "#FormattingToolbar_Bold",
              keyboardShortcut: "Mod-b",
              mark: t.marks.strong,
            },
            s.createElement(l.l4n, null),
          ),
          s.createElement(
            i.GY,
            {
              tooltip: "#FormattingToolbar_Italic",
              keyboardShortcut: "Mod-i",
              mark: t.marks.italic,
            },
            s.createElement(l.UKJ, null),
          ),
          s.createElement(
            i.GY,
            {
              tooltip: "#FormattingToolbar_Underline",
              keyboardShortcut: "Mod-u",
              mark: t.marks.underline,
            },
            s.createElement(l.Gj3, null),
          ),
          "strike" in t.marks &&
            s.createElement(
              i.GY,
              {
                tooltip: "#FormattingToolbar_Strike",
                keyboardShortcut: "Mod-Shift-x",
                mark: t.marks.strike,
              },
              s.createElement(l.tI4, null),
            ),
          "code" in t.marks &&
            s.createElement(
              i.GY,
              {
                tooltip: "#FormattingToolbar_InlineCode",
                keyboardShortcut: "Ctrl-Shift-c",
                mark: t.marks.code,
              },
              s.createElement(l.bmT, null),
            ),
        );
      }
      function g(e) {
        const { schema: t } = e;
        return s.createElement(
          i.u3,
          {
            tooltip: "#FormattingToolbar_Paragraph",
            keyboardShortcut: "Ctrl-Shift-0",
            nodeType: t.nodes.paragraph,
          },
          s.createElement(l.iYj, null),
        );
      }
      function f(e) {
        const { schema: t, maxLevel: r = 1, levels: o } = e,
          n = r + o - 1;
        return s.createElement(
          s.Fragment,
          null,
          r <= 1 &&
            s.createElement(
              i.u3,
              {
                tooltip: "#FormattingToolbar_HeadingLevel1",
                keyboardShortcut: "Ctrl-Shift-1",
                nodeType: t.nodes.heading,
                attrs: { level: 1 },
              },
              s.createElement(l.jRw, null),
            ),
          r <= 2 &&
            n >= 2 &&
            s.createElement(
              i.u3,
              {
                tooltip: "#FormattingToolbar_HeadingLevel2",
                keyboardShortcut: "Ctrl-Shift-2",
                nodeType: t.nodes.heading,
                attrs: { level: 2 },
              },
              s.createElement(l.qOW, null),
            ),
          r <= 3 &&
            n >= 3 &&
            s.createElement(
              i.u3,
              {
                tooltip: "#FormattingToolbar_HeadingLevel3",
                keyboardShortcut: "Ctrl-Shift-3",
                nodeType: t.nodes.heading,
                attrs: { level: 3 },
              },
              s.createElement(l.x7X, null),
            ),
          r <= 4 &&
            n >= 4 &&
            s.createElement(
              i.u3,
              {
                tooltip: "#FormattingToolbar_HeadingLevel4",
                keyboardShortcut: "Ctrl-Shift-4",
                nodeType: t.nodes.heading,
                attrs: { level: 4 },
              },
              s.createElement(l.qzO, null),
            ),
          r <= 5 &&
            n >= 5 &&
            s.createElement(
              i.u3,
              {
                tooltip: "#FormattingToolbar_HeadingLevel5",
                keyboardShortcut: "Ctrl-Shift-5",
                nodeType: t.nodes.heading,
                attrs: { level: 5 },
              },
              s.createElement(l.jXA, null),
            ),
        );
      }
      function b(e) {
        const { schema: t, showIndentButtonsAsNeeded: r = !1 } = e,
          { callbacks: o, view: a } = (0, i.wU)(),
          { bullet_list: c, ordered_list: u, list_item: m } = t.nodes,
          h = s.useMemo(() => n.T2(m), [m]),
          p = s.useMemo(() => n.$B(m), [m]),
          [g, f] = s.useState(() => h(a.state) || p(a.state));
        return (
          (0, d.hL)(
            o,
            s.useCallback(
              (e) => {
                f(h(e.state) || p(e.state));
              },
              [h, p],
            ),
          ),
          s.createElement(
            s.Fragment,
            null,
            s.createElement(
              _,
              {
                tooltip: "#FormattingToolbar_BulletedList",
                keyboardShortcut: "Ctrl-Shift-8",
                list_type: c,
                list_item: m,
              },
              s.createElement(l.JPq, null),
            ),
            u && !1,
            (!r || g) &&
              s.createElement(
                s.Fragment,
                null,
                s.createElement(
                  i.cQ,
                  {
                    tooltip: "#FormattingToolbar_OutdentList",
                    keyboardShortcut: "Mod-[",
                    command: h,
                  },
                  s.createElement(l.LSz, null),
                ),
                s.createElement(
                  i.cQ,
                  {
                    tooltip: "#FormattingToolbar_IndentList",
                    keyboardShortcut: "Mod-[",
                    command: p,
                  },
                  s.createElement(l.ycU, null),
                ),
              ),
          )
        );
      }
      function _(e) {
        const { list_type: t, list_item: r, children: o, ...l } = e,
          { callbacks: c, view: u } = (0, i.wU)(),
          m = s.useCallback((e) => void 0 !== (0, a.wt)(e.state, t), [t]),
          [h, p] = s.useState(() => m(u)),
          g = s.useMemo(() => n.Sd(t), [t]),
          f = s.useMemo(() => n.T2(r), [r]);
        return (
          (0, d.hL)(
            c,
            s.useCallback(
              (e) => {
                p(m(e));
              },
              [m],
            ),
          ),
          s.createElement(i.cQ, { ...l, toggled: h, command: h ? f : g }, o)
        );
      }
      function C(e) {
        const { schema: t, addtlAttrs: r } = e;
        return s.createElement(
          u,
          { schema: t, addtlAttrs: r },
          s.createElement(l.YqK, null),
        );
      }
      function k(e) {
        const { bSpellcheckEnabled: t, setSpellcheckEnabled: r } = e;
        return s.createElement(
          i.ff,
          {
            tooltip: t
              ? "#FormattingToolbar_DisableSpellcheck"
              : "#FormattingToolbar_EnableSpellcheck",
            toggled: t,
            onClick: () => r(!t),
          },
          s.createElement(l.DEV, null),
        );
      }
    },
    30175: (e, t, r) => {
      "use strict";
      r.d(t, {
        Ez: () => k,
        GY: () => T,
        XQ: () => _,
        bI: () => f,
        cQ: () => B,
        ff: () => w,
        hK: () => C,
        u3: () => v,
        wU: () => g,
      });
      var o = r(76217),
        n = r(37834),
        a = r(12362),
        s = r(90626),
        l = r(33737),
        c = r(32754),
        i = r(6144),
        d = r(52038),
        u = r(61859),
        m = r(73745),
        h = r(30470),
        p = r(73309);
      const g = () => s.useContext(b);
      function f(e) {
        const { view: t, refUpdateToolbar: r, children: o } = e,
          n = s.useRef();
        n.current || (n.current = new i.lu()),
          s.useEffect(
            () => (
              (0, m.cZ)(r, () => n.current.Dispatch(t)),
              () => (0, m.cZ)(r, void 0)
            ),
            [t, r],
          );
        const a = s.useMemo(() => ({ callbacks: n.current, view: t }), [t]);
        return t ? s.createElement(b.Provider, { value: a }, o) : null;
      }
      const b = s.createContext(void 0);
      function _() {
        return s.createElement("div", { className: p.Gap });
      }
      function C() {
        return s.createElement("div", { className: p.Spacer });
      }
      function k(e) {
        return s.createElement(
          "div",
          { className: (0, d.A)(e.className, p.ToolbarRowOverflowContainer) },
          s.createElement(
            o.Z,
            { className: p.ToolbarRow, "flow-children": "row" },
            e.children,
          ),
        );
      }
      function v(e) {
        const { nodeType: t, attrs: r, children: o, ...l } = e,
          { callbacks: c, view: i } = g(),
          [d, u] = s.useState(() => (0, n.gj)(i.state, t, r)),
          h = s.useCallback((e) => u((0, n.gj)(e.state, t, r)), [t, r]);
        (0, m.hL)(c, h);
        const p = s.useMemo(() => a.y_(t, r), [r, t]);
        return s.createElement(B, {
          ...l,
          command: p,
          toggled: d,
          children: o,
        });
      }
      function T(e) {
        const { mark: t, children: r, ...o } = e,
          { callbacks: l, view: c } = g(),
          [i, d] = s.useState(() => (0, n.Cd)(c.state, t)),
          u = s.useCallback((e) => d((0, n.Cd)(e.state, t)), [t]);
        (0, m.hL)(l, u);
        const h = s.useMemo(() => a.wh(t), [t]);
        return s.createElement(B, {
          ...o,
          command: h,
          toggled: i,
          children: r,
        });
      }
      function B(e) {
        const { command: t, toggled: r, children: o, ...n } = e,
          { view: a, callbacks: c } = g(),
          [i, u] = s.useState(() => t(a.state));
        (0, m.hL)(
          c,
          s.useCallback((e) => u(t(e.state)), [t]),
        ),
          s.useEffect(() => u(t(a.state)), [t, a]);
        const h = !i && !r;
        return s.createElement(
          y,
          { ...n },
          s.createElement(
            l.$n,
            {
              className: (0, d.A)(p.CommandButton, r && p.Toggled),
              onMouseDown: (e) => {
                e.preventDefault(), t(a.state, a.dispatch, a);
              },
              disabled: h,
              focusable: !h,
            },
            o,
          ),
        );
      }
      function w(e) {
        const {
          onClick: t,
          toggled: r,
          disabled: o,
          children: n,
          className: a,
          ...c
        } = e;
        return s.createElement(
          y,
          { ...c },
          s.createElement(
            l.$n,
            {
              className: (0, d.A)(p.CommandButton, r && p.Toggled, a),
              onMouseDown: (e) => {
                e.preventDefault(), t();
              },
              disabled: !0 === o,
            },
            n,
          ),
        );
      }
      function y(e) {
        const { tooltip: t, keyboardShortcut: r, children: o } = e;
        if (!t) return o;
        const n = r
          ? s.createElement(S, { tooltip: t, keyboardShortcut: r })
          : t;
        return s.createElement(
          c.Gq,
          { toolTipContent: n, direction: "bottom" },
          o,
        );
      }
      function S(e) {
        const { tooltip: t, keyboardShortcut: r } = e;
        return s.createElement(
          "div",
          { className: p.TooltipWithShortcut },
          s.createElement("div", null, (0, u.we)(t)),
          s.createElement(
            "div",
            null,
            s.createElement(A, { keyboardShortcut: r }),
          ),
        );
      }
      function A(e) {
        const { keyboardShortcut: t } = e,
          r = t.split("-"),
          o = r.pop();
        return s.createElement(
          s.Fragment,
          null,
          r.map((e, t) =>
            s.createElement(
              s.Fragment,
              { key: t },
              s.createElement(E, null, s.createElement(M, { modifier: e })),
              " + ",
            ),
          ),
          s.createElement(E, null, o.toUpperCase()),
        );
      }
      function E(e) {
        return s.createElement("span", { className: p.KeyCap }, e.children);
      }
      function M(e) {
        const { modifier: t } = e;
        switch (t) {
          case "Mod":
            return "macos" == h.TS.PLATFORM ? "⌘" : "Ctrl";
          case "Shift":
            return h.TS.PLATFORM, "Shift";
          case "Ctrl":
            return "macos" == h.TS.PLATFORM ? "Control" : "Ctrl";
          case "Alt":
            return "macos" == h.TS.PLATFORM ? "Option" : "Alt";
        }
        return null;
      }
    },
  },
]);
