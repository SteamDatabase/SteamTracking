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
    88089: (e, t, o) => {
      "use strict";
      o.d(t, { Mw: () => l, TG: () => c, zL: () => s });
      var r = o(52893),
        n = o(90626),
        a = o(22145);
      const s = new r.k_({
          props: {
            handlePaste(e, t, o) {
              var r;
              const n =
                null === (r = t.clipboardData) || void 0 === r
                  ? void 0
                  : r.getData("text/plain").replace(/\n/g, " ");
              if (n) {
                const t = e.state.tr.insertText(n);
                e.dispatch(t);
              }
              return !0;
            },
          },
        }),
        l = { Enter: () => !0, "Shift-Enter": () => !0, "Mod-Enter": () => !0 };
      function c(e) {
        const { nMaxChars: t } = e;
        return (
          (0, a.c$)(
            (0, n.useMemo)(() => {
              return (
                (e = t),
                new r.k_({
                  filterTransaction: (t, o) => t.doc.textContent.length <= e,
                })
              );
              var e;
            }, [t]),
          ),
          n.createElement(n.Fragment, null)
        );
      }
    },
    79497: (e, t, o) => {
      "use strict";
      o.d(t, { W: () => n });
      var r = o(57053);
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
            n = new Map(),
            s = new Map(),
            l = t ? new Set(t) : void 0;
          for (const t in e.nodes) {
            const { bbCode: r, ...s } = e.nodes[t],
              c = a(r, l);
            c && ((o[t] = s), n.set(t, c));
          }
          const c = {};
          for (const t in e.marks) {
            const { bbCode: o, ...r } = e.marks[t];
            (l && !l.has(o.tag)) || ((c[t] = r), s.set(t, o));
          }
          (this.m_ProseMirrorSchema = new r.Sj({ nodes: o, marks: c })),
            n.forEach((t, o) => {
              var r;
              const n = this.m_ProseMirrorSchema.nodes[o],
                a = e.nodes[o],
                s = Array.isArray(t) ? t : [t];
              let l;
              "list_item+" == a.content
                ? (l = this.m_ProseMirrorSchema.nodes.list_item)
                : -1 !=
                    (null === (r = a.content) || void 0 === r
                      ? void 0
                      : r.indexOf("paragraph")) &&
                  (l = this.m_ProseMirrorSchema.nodes.paragraph),
                s.forEach(
                  ({
                    tag: e,
                    BBArgsToAttrs: t,
                    AttrsToBBArgs: o,
                    convertContentToAttr: r,
                    ...a
                  }) => {
                    this.m_mapBBCodeDictionary.set(e, {
                      Constructor: {
                        node: n,
                        BBArgsToAttrs: t,
                        convertContentToAttr: r,
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
              const o = this.m_ProseMirrorSchema.marks[t],
                { tag: r, BBArgsToAttrs: n, AttrsToBBArgs: a, ...s } = e;
              this.m_mapBBCodeDictionary.set(r, {
                Constructor: { mark: o, BBArgsToAttrs: n },
                ...s,
              }),
                this.m_PMToBBCodeConfig.mapMarks.set(o, {
                  tag: r,
                  AttrsToBBArgs: a,
                });
            });
        }
      }
      function a(e, t) {
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
    22145: (e, t, o) => {
      "use strict";
      o.d(t, { KF: () => g, Ot: () => p, c$: () => f, Hd: () => b });
      var r = o(12362),
        n = o(15024),
        a = o(7502),
        s = o(52893),
        l = o(90626),
        c = o(98724),
        i = o(79216),
        d = o(4188),
        u = o(37834);
      o(45772), o(74763);
      var m = o(88089);
      const h = l.createContext(void 0);
      function p(e) {
        const { view: t, pmState: o, children: r } = e,
          n = l.useMemo(() => ({ view: t, pmState: o }), [t, o]);
        return l.createElement(h.Provider, { value: n }, r);
      }
      const g = l.memo(function (e) {
        const { schema: t, refOnUpdate: o, bSingleLine: h } = e;
        return (
          f(
            l.useMemo(
              () =>
                o &&
                new s.k_({
                  view: (e) => ({
                    update: (...e) => o.current && o.current(...e),
                  }),
                }),
              [o],
            ),
          ),
          f(l.useMemo(() => (0, a.w)(h ? m.Mw : {}), [h])),
          f(h ? m.zL : void 0),
          f(l.useMemo(() => (0, n.z)(), [])),
          f(
            l.useMemo(
              () =>
                (function (e) {
                  const { nodes: t, marks: o } = e,
                    n = (0, r.st)(
                      r.I$,
                      (e, o) => (
                        o &&
                          o(
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
                      Escape: r.hy,
                      "Mod-Enter": n,
                      "Shift-Enter": n,
                      "Mod-b": (0, r.wh)(o.strong),
                      "Mod-i": (0, r.wh)(o.italic),
                      "Mod-u": (0, r.wh)(o.underline),
                      "Mod-Shift-x": (0, r.wh)(o.strikethrough),
                      "Ctrl-Shift-s": (0, r.wh)(o.strikethrough),
                      Enter: (0, d.wn)(t.list_item),
                      "Mod-[": (0, d.T2)(t.list_item),
                      "Mod-]": (0, d.$B)(t.list_item),
                      "Ctrl-Shift-1": (0, r.y_)(t.heading, { level: 1 }),
                      "Ctrl-Shift-2": (0, r.y_)(t.heading, { level: 2 }),
                      "Ctrl-Shift-3": (0, r.y_)(t.heading, { level: 3 }),
                      "Ctrl-Shift-4": (0, r.y_)(t.heading, { level: 4 }),
                      "Ctrl-Shift-5": (0, r.y_)(t.heading, { level: 5 }),
                      "Ctrl-Shift-7": (0, r.y_)(t.ordered_list),
                      "Ctrl-Shift-8": (0, r.y_)(t.bullet_list),
                      "Ctrl-Shift-0": (0, r.y_)(t.paragraph),
                    };
                  return (
                    o.code && (s["Ctrl-Shift-c"] = (0, r.wh)(o.code)),
                    t.code_block &&
                      (s["Alt-Ctrl-Shift-c"] = (0, r.y_)(t.code_block)),
                    t.horizontal_rule &&
                      (s["Mod-_"] = (e, o) => (
                        o &&
                          o(
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
          f(l.useMemo(() => (0, a.w)(r.RV), [])),
          f(
            l.useMemo(
              () =>
                (function (e) {
                  const { nodes: t, marks: o } = e;
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
                      (0, u.OX)(/(?<!\w)\*([^*]+)\*/, o.strong),
                      (0, u.OX)(/(?<!\w)_([^_]+)_/, o.italic),
                      (0, u.OX)(/(?<!\w)~([^~]+)~/, o.strike),
                      (0, u.OX)(/(?<!\w)`([^`]+)`/, o.code),
                      (0, i.JJ)(/^```$/, t.code_block),
                      (0, i.JJ)(/^(#{1,5})\s$/, t.heading, (e) => ({
                        level: e[1].length,
                      })),
                      t.horizontal_rule &&
                        ((r = /^(\*\*\*|---|___)$/),
                        (n = t.horizontal_rule),
                        new i.fV(r, (e, t, o, r) =>
                          e.tr.replaceWith(o, r, n.create()),
                        )),
                    ].filter(Boolean),
                  });
                  var r, n;
                })(t),
              [t],
            ),
          ),
          null
        );
      });
      function f(e) {
        const { pmState: t } = l.useContext(h);
        l.useEffect(() => {
          if (t && e) return t.InstallPlugin(e);
        }, [e, t]);
      }
      function b() {
        var e;
        return null === (e = l.useContext(h)) || void 0 === e ? void 0 : e.view;
      }
    },
    55608: (e, t, o) => {
      "use strict";
      o.d(t, { BM: () => l, DQ: () => i, cI: () => d, ce: () => c });
      var r = o(33645),
        n = o.n(r),
        a = o(4188),
        s = o(52038);
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
                    `BB_Header${e.attrs.level} ` +
                    n()[`Header${e.attrs.level}`],
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
                const { src: t, alt: o, title: r } = e.attrs;
                return ["img", { src: t, alt: o, title: r, class: n().Image }];
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
                      r = "";
                    for (const e of t.querySelectorAll("source"))
                      "video/mp4" == e.type
                        ? (o = e.src)
                        : "video/webm" == e.type && (r = e.src);
                    return {
                      mp4: o,
                      webm: r,
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
                    poster: r,
                    autoplay: n,
                    controls: a,
                  } = e.attrs,
                  s = [];
                return (
                  t && s.push(["source", { src: t, type: "video/webm" }]),
                  o && s.push(["source", { src: o, type: "video/mp4" }]),
                  [
                    "video",
                    {
                      poster: r,
                      autoPlay: !!n,
                      controls: !!a,
                      loop: !a && !!n,
                    },
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
        },
        d = {
          node: {},
          marks: {
            color: {
              attrs: { color: {} },
              parseDOM: [{ style: "color", getAttrs: (e) => ({ color: e }) }],
              toDOM: (e) => [
                "span",
                {
                  style: `color: ${e.attrs.color}`,
                  class: (0, s.A)("BB_Color", n().Color),
                },
                0,
              ],
              bbCode: {
                tag: "color",
                BBArgsToAttrs: (e) => ({ color: e[""] }),
                AttrsToBBArgs: (e) => ({ args: { "": e.color } }),
              },
            },
          },
        };
    },
    90286: (e, t, o) => {
      "use strict";
      o.d(t, { n: () => b, u: () => v });
      var r = o(91986),
        n = o(64753),
        a = o(98724),
        s = o(52893),
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
          let r = c.FK.from(t);
          if (!e.node.validContent(r) && e.acceptNode) {
            let o = t.filter((t) => t.type == e.acceptNode);
            if (!o.length) {
              let r = t;
              e.acceptNode.isBlock &&
                r.length > 1 &&
                r[r.length - 1].type == this.schema.nodes.hard_break &&
                (r = r.slice(0, -1));
              const n = this.m_mapPMBBNodes.get(e.acceptNode.name);
              (0, i.w)(
                n,
                `Indicated acceptNode type ${e.acceptNode.name} for ${e.node.name} missing`,
              ),
                (o = n
                  ? [this.TryCreateNode(n, r, void 0)]
                  : [e.acceptNode.create(void 0, r)]);
            }
            r = c.FK.from(o);
          }
          return e.node.createAndFill(o, r) || e.node.create(o, r);
        }
        BBNodeToPMNode(e, t, ...o) {
          let r = e.BBArgsToAttrs ? e.BBArgsToAttrs(t.args || {}) : void 0;
          try {
            if (
              ("convertContentToAttr" in e &&
                e.convertContentToAttr &&
                ((r && r[e.convertContentToAttr]) ||
                  (r = {
                    ...(r || {}),
                    [e.convertContentToAttr]:
                      ((n = o),
                      n
                        .filter((e) => e.isText)
                        .map((e) => e.text)
                        .join()),
                  }),
                "node" in e && (o = [])),
              "node" in e)
            )
              return this.TryCreateNode(e, o, r);
            {
              const t = e.mark.create(r);
              return o.map((e) => this.RecursivelyApplyMark(e, t));
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
            const o = [];
            return (
              e.descendants(
                (e) => (o.push(this.RecursivelyApplyMark(e, t)), !1),
              ),
              e.type.create(e.attrs, o, e.marks)
            );
          }
        }
        ConvertLineBreaksToParagraphs(e) {
          const t = new Map(),
            o = this.m_schemaConfig.pm_schema;
          this.m_mapPMBBNodes.forEach((e) => {
            e.acceptNode && t.set(e.acceptNode.name, e.node);
          });
          const r = [],
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
                const t = this.nodeType || (e ? o.nodes.paragraph : void 0);
                t && (r.push(t.createChecked({}, this.nodes)), this.reset());
              },
            };
          return (
            e.forEach((e) => {
              const a = e.type == o.nodes.hard_break,
                s = c.FK.from(e);
              if (a || o.topNodeType.validContent(s)) {
                const t = a && n.nodes.length > 0;
                n.emit(),
                  a
                    ? t || r.push(o.nodes.paragraph.createChecked())
                    : r.push(e);
              } else {
                let r;
                (r = o.nodes.paragraph.validContent(s)
                  ? o.nodes.paragraph
                  : t.get(e.type.name)),
                  r
                    ? n.accumulate(r, e)
                    : ((0, i.w)(
                        !1,
                        `Couldn't accept ${e.type.name} at root of document, converting to paragraph`,
                      ),
                      (r = o.nodes.paragraph),
                      n.accumulate(
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
            (!n.nodes.length && r.length) || n.emit(!0),
            c.FK.from(r)
          );
        }
      }
      function m(e, t) {
        return h(t.pm_schema, t.pm_to_bbcode_config, e, []);
      }
      function h(e, t, o, r) {
        let n = o.marks,
          a = "";
        const s = t.mapNodes.get(o.type),
          { tag: c, args: d } = (function (e, t) {
            if (e && e.AttrsToBBArgs) {
              const { tag: o = e.tag, args: r = {} } = e.AttrsToBBArgs(
                t.attrs,
                t,
              );
              return { tag: o, args: r };
            }
            return { tag: null == e ? void 0 : e.tag, args: {} };
          })(s, o);
        return (
          "emoticon" == c ? (a += ":") : c && (a += (0, l.CS)(c, d)),
          o.content.forEach((o) => {
            ([a, n] = p(t, n, o.marks, a)),
              ([a, n] = (function (e, t, o, r) {
                let n;
                for (const a of o)
                  if (-1 === t.indexOf(a)) {
                    n || (n = t.slice());
                    const o = e.mapMarks.get(a.type);
                    if (((0, i.w)(o, "mark missing bbtag"), o)) {
                      n.push(a);
                      const { args: e, tag: t } = g(o, a);
                      r += (0, l.CS)(t, e);
                    }
                  }
                return [r, null != n ? n : t];
              })(t, n, o.marks, a)),
              o.type.isText
                ? (a += (0, l.vE)(o.text || ""))
                : o.type == e.nodes.hard_break
                  ? (a += "\n")
                  : (a += h(e, t, o, n));
          }),
          ([a] = p(t, n, r, a)),
          "emoticon" == c ? (a += ":") : c && (a += (0, l.op)(c)),
          a
        );
      }
      function p(e, t, o, r) {
        const n = [];
        for (const e of t) -1 === o.indexOf(e) && n.push(e);
        if (!n.length) return [r, t];
        const a = t.slice();
        for (
          ;
          n.length && ((0, i.w)(a.length, "no marks left to close"), a.length);
        ) {
          const t = a.pop(),
            o = e.mapMarks.get(t.type),
            { tag: s } = g(o, t);
          r += (0, l.op)(s);
          const c = n.indexOf(t);
          -1 != c && n.splice(c, 1);
        }
        return [r, a];
      }
      function g(e, t) {
        if (e && e.AttrsToBBArgs) {
          const { tag: o = e.tag, args: r = {} } = e.AttrsToBBArgs(t.attrs, t);
          return { tag: o, args: r };
        }
        return { tag: null == e ? void 0 : e.tag, args: {} };
      }
      const f = new s.hs("CProseMirrorState - OnChange");
      class b {
        constructor(e, t, o) {
          (this.m_bHasUncomittedChanges = !1),
            (this.m_onStateChangedCallbacks = new r.l()),
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
        UpdateState(e) {
          var t;
          const o = e(
            (null === (t = this.m_view) || void 0 === t
              ? void 0
              : t.state.tr) || this.m_state.tr,
          );
          o &&
            o.docChanged &&
            (this.m_view
              ? this.m_view.dispatch(o)
              : (this.m_state = this.m_state.apply(o)));
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
          const o = this.m_view ? this.m_view.state : this.m_state;
          return (
            o.plugins.includes(e) ||
              ((this.m_state = o.reconfigure({ plugins: [...o.plugins, e] })),
              null === (t = this.m_view) ||
                void 0 === t ||
                t.updateState(this.m_state)),
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
      function v(e, t) {
        (0, n.hL)(null == e ? void 0 : e.OnStateChangedCallbacks, t);
      }
    },
    37834: (e, t, o) => {
      "use strict";
      o.d(t, {
        Cd: () => a,
        OX: () => i,
        bQ: () => d,
        gj: () => l,
        vn: () => s,
        wt: () => c,
      });
      var r = o(79216),
        n = o(52893);
      function a(e, t) {
        const { from: o, $from: r, to: n, empty: a } = e.selection;
        return a
          ? !!t.isInSet(e.storedMarks || r.marks())
          : e.doc.rangeHasMark(o, n, t);
      }
      function s(e, t, o) {
        var r;
        const { parent: n } = o,
          a = n.childAfter(o.parentOffset),
          s =
            null === (r = a.node) || void 0 === r
              ? void 0
              : r.marks.find((e) => e.type == t);
        if (!s) return;
        let l = o.index() - 1,
          c = o.start() + a.offset;
        for (; l >= 0 && s.isInSet(n.child(l).marks); )
          (c -= n.child(l).nodeSize), (l -= 1);
        let i = o.index() + 1,
          d = o.start() + a.offset + a.node.nodeSize;
        for (; i < n.childCount && s.isInSet(n.child(i).marks); )
          (d += n.child(i).nodeSize), (i += 1);
        return { from: c, to: d, slice: e.doc.slice(c, d), mark: s };
      }
      function l(e, t, o) {
        let { $from: r, to: n, node: a } = e.selection;
        return !a && n <= r.end() && (a = r.parent), !!a && a.hasMarkup(t, o);
      }
      function c(e, t, o) {
        const { $from: r, to: n } = e.selection;
        for (let e = r.sharedDepth(n); e > 0; e--) {
          const n = r.node(e);
          if (void 0 === o ? n.type === t : n.hasMarkup(t, o))
            return r.before(e);
        }
      }
      function i(e, t, o = {}) {
        return new r.fV(e, (e, r, n, a) => {
          const s = o instanceof Function ? o(r) : o,
            l = e.tr;
          if (r[1]) {
            const e = n + r[0].indexOf(r[1]),
              t = e + r[1].length;
            t < a && l.delete(t, a),
              e > n && l.delete(n, e),
              (a = n + r[1].length);
          }
          return l.addMark(n, a, t.create(s)), l.removeStoredMark(t), l;
        });
      }
      function d(e, t, o) {
        const r = { left: t, top: o },
          a = e.posAtCoords(r);
        if (null == a ? void 0 : a.pos) {
          const t = e.state.doc.resolve(a.pos);
          e.dispatch(e.state.tr.setSelection(n.U3.near(t)));
        }
      }
    },
    9024: (e, t, o) => {
      "use strict";
      o.d(t, { X: () => u, w: () => c });
      var r = o(33645),
        n = o.n(r),
        a = o(38539),
        s = o(55608),
        l = o(52038);
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
                const o = {};
                e.noborder && (o.noborder = "1"),
                  e.equalcells && (o.equalcells = "1");
                const r = t.child(0);
                if (r) {
                  let e = [];
                  for (let t = 0; t < r.childCount; t++) {
                    const o = r.child(t).attrs;
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
            toDOM: (0, s.BM)("tr", n().TableRow),
            bbCode: { tag: "tr" },
          },
          table_cell: { ...i.table_cell, bbCode: { ...d, tag: "td" } },
          table_header: { ...i.table_header, bbCode: { ...d, tag: "th" } },
        };
    },
    72421: (e, t, o) => {
      "use strict";
      o.d(t, { _: () => s });
      var r = o(90626),
        n = o(68255),
        a = o(738);
      function s(e) {
        const {
            closeModal: t,
            strTitle: o,
            onOK: s,
            strOKText: l,
            onCancel: c,
            strCancelText: i,
            bOKDisabled: d,
            bCancelDisabled: u,
            strClassNameContent: m = "GenericFormDialog",
            children: h,
          } = e,
          p = r.useCallback(() => {
            c && c(), t();
          }, [c, t]),
          g = u ? void 0 : p;
        return r.createElement(
          a.x_,
          { onEscKeypress: g },
          r.createElement(
            n.U9,
            { onSubmit: s, classNameContent: m },
            r.createElement(n.Y9, null, o),
            h,
            r.createElement(
              n.wi,
              null,
              r.createElement(n.CB, {
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
    60637: (e, t, o) => {
      "use strict";
      o.d(t, { J: () => d });
      var r = o(37834),
        n = o(52893),
        a = o(90626),
        s = o(68255),
        l = o(9154),
        c = o(72421),
        i = o(61859);
      function d(e, t) {
        const [o, n] = a.useState(void 0),
          s = a.useCallback(
            (o) => {
              const a = o.state.selection;
              let s = "",
                l = "",
                { from: c, to: i } = a;
              const d = (0, r.vn)(o.state, e.marks.color, a.$from),
                u = !!d;
              d
                ? ((s = d.mark.attrs.color),
                  a.empty
                    ? ((l = d.slice.content.textBetween(
                        0,
                        d.slice.content.size,
                      )),
                      (c = d.from),
                      (i = d.to))
                    : ((c = Math.max(d.from, a.from)),
                      (i = Math.min(d.to, a.to)),
                      (l = d.slice.content.textBetween(
                        c - d.from,
                        i - d.from,
                      ))))
                : o.state.selection.empty ||
                  (l = o.state.doc.cut(
                    o.state.selection.from,
                    o.state.selection.to,
                  ).textContent);
              let m = {};
              if (t)
                for (const e in t) {
                  const o = t[e],
                    r = d ? o.fnReadValue(d.mark) : o.defaultValue;
                  m[e] = r;
                }
              n({
                view: o,
                strColor: s,
                strTargetText: l,
                bIsUpdate: u,
                addtlAttrs: t,
                addtlAttrsValues: m,
                from: c,
                to: i,
              });
            },
            [t, e.marks.color],
          ),
          c = null == o ? void 0 : o.view,
          i = a.useCallback(() => {
            window.setTimeout(() => c.focus(), 1), n(void 0);
          }, [c]);
        return [
          s,
          o &&
            a.createElement(
              l.EN,
              { active: !0 },
              a.createElement(u, { schema: e, closeModal: i, ...o }),
            ),
        ];
      }
      const u = a.memo(function (e) {
        const {
            schema: t,
            strColor: o,
            bIsUpdate: r,
            strTargetText: l,
            addtlAttrs: d,
            addtlAttrsValues: u,
            closeModal: m,
            view: h,
            from: p,
            to: g,
          } = e,
          [f, b] = a.useState(o),
          v = a.useRef(null),
          [_, C] = a.useState(u);
        a.useLayoutEffect(() => {
          var e, t, o;
          (
            null ===
              (t =
                null === (e = v.current) || void 0 === e ? void 0 : e.value) ||
            void 0 === t
              ? void 0
              : t.length
          )
            ? v.current.focus()
            : null === (o = v.current) || void 0 === o || o.focus();
        }, []);
        const k = (0, i.we)("#FormattingToolbar_Color"),
          T = r
            ? (0, i.we)("#Button_Save")
            : (0, i.we)("#FormattingToolbar_Color");
        return a.createElement(
          c._,
          {
            onOK: () => {
              let e = h.state.tr;
              const o = { color: f };
              for (const e in _) o[e] = _[e];
              const r = t.text(l, [t.marks.color.create(o)]);
              (e = e.replaceRangeWith(p, g, r)),
                (e = e.setSelection(
                  n.U3.create(e.doc, p + r.nodeSize, p + r.nodeSize),
                )),
                h.dispatch(e),
                m();
            },
            closeModal: m,
            strTitle: k,
            strOKText: T,
            bOKDisabled: 0 == f.length,
          },
          a.createElement(s.JU, null, (0, i.we)("#FormattingToolbar_Color")),
          a.createElement("input", {
            type: "color",
            ref: v,
            value: f,
            onChange: (e) => b(e.currentTarget.value),
          }),
        );
      });
    },
    17558: (e, t, o) => {
      "use strict";
      o.d(t, { E: () => u });
      var r = o(37834),
        n = o(52893),
        a = o(90626),
        s = o(68255),
        l = o(9154),
        c = o(72421),
        i = o(61859),
        d = o(30470);
      function u(e, t) {
        const [o, n] = a.useState(void 0),
          s = a.useCallback(
            (o) => {
              const a = o.state.selection;
              let s = "",
                l = "",
                { from: c, to: i } = a;
              const d = (0, r.vn)(o.state, e.marks.link, a.$from),
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
                : o.state.selection.empty ||
                  ((s = o.state.doc.cut(
                    o.state.selection.from,
                    o.state.selection.to,
                  ).textContent),
                  s.match(/^https?:\/\//) && (l = s));
              let m = {};
              if (t)
                for (const e in t) {
                  const o = t[e],
                    r = d ? o.fnReadValue(d.mark) : o.defaultValue;
                  m[e] = r;
                }
              n({
                view: o,
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
          c = null == o ? void 0 : o.view,
          i = a.useCallback(() => {
            window.setTimeout(() => c.focus(), 1), n(void 0);
          }, [c]);
        return [
          s,
          o &&
            a.createElement(
              l.EN,
              { active: !0 },
              a.createElement(m, { schema: e, closeModal: i, ...o }),
            ),
        ];
      }
      const m = a.memo(function (e) {
        const {
            schema: t,
            strLinkText: o,
            strLinkHref: r,
            bIsUpdate: l,
            addtlAttrs: u,
            addtlAttrsValues: m,
            closeModal: p,
            view: g,
            from: f,
            to: b,
          } = e,
          [v, _] = a.useState(o),
          [C, k] = a.useState(r || "https://"),
          T = a.useRef(null),
          w = a.useRef(null),
          [B, E] = a.useState(m);
        a.useLayoutEffect(() => {
          var e, t, o, r, n;
          (
            null ===
              (t =
                null === (e = T.current) || void 0 === e ? void 0 : e.value) ||
            void 0 === t
              ? void 0
              : t.length
          )
            ? (
                null ===
                  (r =
                    null === (o = w.current) || void 0 === o
                      ? void 0
                      : o.value) || void 0 === r
                  ? void 0
                  : r.length
              )
              ? (T.current.Focus(), T.current.element.select())
              : w.current.Focus()
            : null === (n = T.current) || void 0 === n || n.Focus();
        }, []);
        const S = l
            ? (0, i.we)("#FormattingToolbar_EditLink")
            : (0, i.we)("#FormattingToolbar_InsertLink"),
          y = l
            ? (0, i.we)("#Button_Save")
            : (0, i.we)("#FormattingToolbar_InsertLink");
        return a.createElement(
          c._,
          {
            onOK: () => {
              var e, o, r, a, s;
              let l = g.state.tr;
              if (
                !(
                  "dev" != d.TS.WEB_UNIVERSE ||
                  (g &&
                    null != f &&
                    null != b &&
                    (null === (e = null == t ? void 0 : t.marks) || void 0 === e
                      ? void 0
                      : e.link))
                )
              )
                return void console.warn(
                  "Missing required data in insertLink",
                  { view: g, from: f, to: b, schema: t },
                );
              const c = { href: C };
              for (const e in B) c[e] = B[e];
              const i =
                null === (o = t.marks.link) || void 0 === o
                  ? void 0
                  : o.create(c);
              if ("dev" == d.TS.WEB_UNIVERSE && !i)
                return void console.error(
                  "Failed to create link mark with attrs",
                  c,
                );
              const u = t.text(v || C, [i]);
              "dev" == d.TS.WEB_UNIVERSE &&
                (console.log(
                  "Replacement node:",
                  (null === (r = u.toJSON) || void 0 === r
                    ? void 0
                    : r.call(u)) || u,
                ),
                console.log("Transaction range from-to:", { from: f, to: b }),
                console.log(
                  "Document slice at range:",
                  (null ===
                    (s =
                      null === (a = g.state.doc.slice(f, b).content) ||
                      void 0 === a
                        ? void 0
                        : a.toJSON) || void 0 === s
                    ? void 0
                    : s.call(a)) || g.state.doc.slice(f, b),
                ));
              try {
                (l = l.replaceRangeWith(f, b, u)),
                  (l = l.setSelection(
                    n.U3.create(l.doc, f + u.nodeSize, f + u.nodeSize),
                  )),
                  g.dispatch(l);
              } catch (e) {
                console.error("Error during link insertion", e);
              }
              p();
            },
            closeModal: p,
            strTitle: S,
            strOKText: y,
            bOKDisabled: 0 == C.length,
          },
          a.createElement(s.pd, {
            ref: T,
            value: v,
            onChange: (e) => _(e.currentTarget.value),
            label: (0, i.we)("#FormattingToolbar_LinkText"),
          }),
          a.createElement(s.pd, {
            ref: w,
            value: C,
            onChange: (e) => k(e.currentTarget.value),
            label: (0, i.we)("#FormattingToolbar_LinkAddress"),
            mustBeURL: !0,
          }),
          u && a.createElement(h, { addtlAttrs: u, values: B, setValues: E }),
        );
      });
      function h(e) {
        const { addtlAttrs: t, values: o, setValues: r } = e;
        return a.createElement(
          a.Fragment,
          null,
          Object.keys(t).map((e) =>
            a.createElement(p, {
              key: e,
              attrName: e,
              fnRender: t[e].fnRenderEditor,
              value: o[e],
              setValues: r,
            }),
          ),
        );
      }
      const p = a.memo(function (e) {
        const { attrName: t, fnRender: o, value: r, setValues: n } = e;
        return o(
          r,
          a.useCallback((e) => n((o) => ({ ...o, [t]: e })), [t]),
        );
      });
    },
    1805: (e, t, o) => {
      "use strict";
      o.d(t, { l: () => w });
      var r = o(76217),
        n = o(63512),
        a = o(73170),
        s = o(51668),
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
      const v = u.memo(function (e) {
        const { schema: t } = e,
          o = !(!("table" in t.nodes) || !t.nodes.table.spec.tableRole);
        return (
          (0, l.c$)(u.useMemo(() => o && g.AL({ View: _ }), [o])),
          (0, l.c$)(u.useMemo(() => o && g.LF(), [o])),
          null
        );
      });
      class _ extends g.Qg {
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
        T = o(73309);
      const w = (0, m.Nr)(function (e) {
        const {
            pmState: t,
            className: o,
            refOnUpdate: i,
            refView: d,
            bSpellcheckEnabled: m = !0,
            bSingleLine: h,
            panelProps: p,
            children: g,
          } = e,
          [f, _] = u.useState(),
          [w, E] = u.useState();
        u.useEffect(() => {
          t && f && E(new s.Lz(f, { state: t.state }));
        }, [t, f]),
          u.useEffect(() => () => (null == w ? void 0 : w.destroy()), [w]),
          (0, k.D5)(d, w);
        const {
            refDiv: S,
            onActivate: y,
            onGamepadDirection: A,
          } = (function (e) {
            const t = u.useRef(),
              o = (0, a.FN)(),
              r = u.useCallback(() => {
                if (
                  (o.ShowVirtualKeyboard(),
                  !(null == e ? void 0 : e.hasFocus()))
                ) {
                  e.focus();
                  let o = e.dom.childNodes;
                  for (let r = 0; r < o.length; ++r) {
                    let n = o[r],
                      a = n.offsetTop;
                    if (void 0 !== a && a >= t.current.scrollTop) {
                      let t = n.getBoundingClientRect();
                      (0, c.bQ)(e, t.left, t.top);
                      break;
                    }
                  }
                }
              }, [o, e]),
              s = u.useCallback((e) => e.currentTarget == e.target, []),
              l = (0, n.ak)(t, null, null, s);
            return { refDiv: t, onActivate: r, onGamepadDirection: l };
          })(w),
          M = (0, k.Ue)(S, _);
        if (!t) return null;
        const { schemaConfig: O, bbcodeParser: D } = t;
        return u.createElement(
          l.Ot,
          { view: w, pmState: t },
          u.createElement(r.Z, {
            key: `editordiv_${m}`,
            className: (0, b.A)(o, T.Container),
            ref: M,
            spellCheck: m,
            focusable: !0,
            onActivate: y,
            onOKActionDescription: (0, C.we)("#UserGameNotes_Edit"),
            onGamepadDirection: A,
            ...p,
          }),
          u.createElement(l.KF, {
            refOnUpdate: i,
            schema: O.pm_schema,
            bSingleLine: h,
          }),
          u.createElement(B, { parser: D, schema: O.pm_schema }),
          u.createElement(v, { schema: O.pm_schema }),
          g,
        );
      });
      const B = u.memo(function (e) {
        const { parser: t, schema: o } = e;
        return (
          (0, l.c$)(
            u.useMemo(
              () =>
                new i.k_({
                  props: {
                    transformPasted: (e, r) =>
                      (function (e, t, o) {
                        let r = !1;
                        if (
                          (o.content.forEach((e) => {
                            e.type == t && (r = !0);
                          }),
                          !r)
                        )
                          return o;
                        const n = e.ConvertLineBreaksToParagraphs(o.content);
                        return d.Ji.maxOpen(n);
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
    36969: (e, t, o) => {
      "use strict";
      o.d(t, {
        Km: () => f,
        WJ: () => v,
        z9: () => k,
        C$: () => _,
        Hz: () => b,
        Nt: () => T,
        MV: () => g,
      });
      var r = o(98724),
        n = o(4188),
        a = o(37834),
        s = o(90626),
        l = o(4869),
        c = o(17558),
        i = o(30175),
        d = o(73745);
      function u(e) {
        const { schema: t, addtlAttrs: o, children: r } = e,
          { callbacks: n, view: l } = (0, i.wU)(),
          [u, m] = s.useState(() => (0, a.Cd)(l.state, t.marks.link)),
          h = s.useCallback((e) => m((0, a.Cd)(e.state, t.marks.link)), [t]);
        (0, d.hL)(n, h);
        const [p, g] = (0, c.E)(t, o);
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
            r,
          ),
        );
      }
      var m = o(30470),
        h = o(60637);
      function p(e) {
        const { schema: t, addtlAttrs: o, children: r } = e,
          { callbacks: n, view: l } = (0, i.wU)(),
          [c, u] = s.useState(() => (0, a.Cd)(l.state, t.marks.link)),
          m = s.useCallback((e) => u((0, a.Cd)(e.state, t.marks.link)), [t]);
        (0, d.hL)(n, m);
        const [p, g] = (0, h.J)(t, o);
        return s.createElement(
          s.Fragment,
          null,
          g,
          s.createElement(
            i.ff,
            {
              onClick: () => p(l),
              toggled: c,
              tooltip: "#FormattingToolbar_Color",
            },
            r,
          ),
        );
      }
      function g() {
        return s.createElement(
          s.Fragment,
          null,
          s.createElement(
            i.cQ,
            {
              tooltip: "#FormattingToolbar_Undo",
              keyboardShortcut: "Mod-z",
              command: r.tN,
            },
            s.createElement(l.VnB, null),
          ),
          s.createElement(
            i.cQ,
            {
              tooltip: "#FormattingToolbar_Redo",
              keyboardShortcut:
                "macos" == m.TS.PLATFORM ? "Mod-Shift-z" : "Mod-y",
              command: r.ZS,
            },
            s.createElement(l.Bal, null),
          ),
        );
      }
      function f(e) {
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
          "color" in t.marks &&
            s.createElement(p, { schema: t }, s.createElement(l.r7n, null)),
        );
      }
      function b(e) {
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
      function v(e) {
        const { schema: t, maxLevel: o = 1, levels: r } = e,
          n = o + r - 1;
        return s.createElement(
          s.Fragment,
          null,
          o <= 1 &&
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
          o <= 2 &&
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
          o <= 3 &&
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
          o <= 4 &&
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
          o <= 5 &&
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
      function _(e) {
        const { schema: t, showIndentButtonsAsNeeded: o = !1 } = e,
          { callbacks: r, view: a } = (0, i.wU)(),
          { bullet_list: c, ordered_list: u, list_item: m } = t.nodes,
          h = s.useMemo(() => n.T2(m), [m]),
          p = s.useMemo(() => n.$B(m), [m]),
          [g, f] = s.useState(() => h(a.state) || p(a.state));
        return (
          (0, d.hL)(
            r,
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
              C,
              {
                tooltip: "#FormattingToolbar_BulletedList",
                keyboardShortcut: "Ctrl-Shift-8",
                list_type: c,
                list_item: m,
              },
              s.createElement(l.JPq, null),
            ),
            u && !1,
            (!o || g) &&
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
      function C(e) {
        const { list_type: t, list_item: o, children: r, ...l } = e,
          { callbacks: c, view: u } = (0, i.wU)(),
          m = s.useCallback((e) => void 0 !== (0, a.wt)(e.state, t), [t]),
          [h, p] = s.useState(() => m(u)),
          g = s.useMemo(() => n.Sd(t), [t]),
          f = s.useMemo(() => n.T2(o), [o]);
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
          s.createElement(i.cQ, { ...l, toggled: h, command: h ? f : g }, r)
        );
      }
      function k(e) {
        const { schema: t, addtlAttrs: o } = e;
        return s.createElement(
          u,
          { schema: t, addtlAttrs: o },
          s.createElement(l.YqK, null),
        );
      }
      function T(e) {
        const { bSpellcheckEnabled: t, setSpellcheckEnabled: o } = e;
        return s.createElement(
          i.ff,
          {
            tooltip: t
              ? "#FormattingToolbar_DisableSpellcheck"
              : "#FormattingToolbar_EnableSpellcheck",
            toggled: t,
            onClick: () => o(!t),
          },
          s.createElement(l.DEV, null),
        );
      }
    },
    30175: (e, t, o) => {
      "use strict";
      o.d(t, {
        Ez: () => C,
        GY: () => T,
        XQ: () => v,
        bI: () => f,
        cQ: () => w,
        ff: () => B,
        hK: () => _,
        u3: () => k,
        wU: () => g,
      });
      var r = o(76217),
        n = o(37834),
        a = o(12362),
        s = o(90626),
        l = o(68255),
        c = o(32754),
        i = o(6144),
        d = o(52038),
        u = o(61859),
        m = o(73745),
        h = o(30470),
        p = o(73309);
      const g = () => s.useContext(b);
      function f(e) {
        const { view: t, refUpdateToolbar: o, children: r } = e,
          n = s.useRef();
        n.current || (n.current = new i.lu()),
          s.useEffect(
            () => (
              (0, m.cZ)(o, () => n.current.Dispatch(t)),
              () => (0, m.cZ)(o, void 0)
            ),
            [t, o],
          );
        const a = s.useMemo(() => ({ callbacks: n.current, view: t }), [t]);
        return t ? s.createElement(b.Provider, { value: a }, r) : null;
      }
      const b = s.createContext(void 0);
      function v() {
        return s.createElement("div", { className: p.Gap });
      }
      function _() {
        return s.createElement("div", { className: p.Spacer });
      }
      function C(e) {
        return s.createElement(
          "div",
          { className: (0, d.A)(e.className, p.ToolbarRowOverflowContainer) },
          s.createElement(
            r.Z,
            { className: p.ToolbarRow, "flow-children": "row" },
            e.children,
          ),
        );
      }
      function k(e) {
        const { nodeType: t, attrs: o, children: r, ...l } = e,
          { callbacks: c, view: i } = g(),
          [d, u] = s.useState(() => (0, n.gj)(i.state, t, o)),
          h = s.useCallback((e) => u((0, n.gj)(e.state, t, o)), [t, o]);
        (0, m.hL)(c, h);
        const p = s.useMemo(() => a.y_(t, o), [o, t]);
        return s.createElement(w, {
          ...l,
          command: p,
          toggled: d,
          children: r,
        });
      }
      function T(e) {
        const { mark: t, children: o, ...r } = e,
          { callbacks: l, view: c } = g(),
          [i, d] = s.useState(() => (0, n.Cd)(c.state, t)),
          u = s.useCallback((e) => d((0, n.Cd)(e.state, t)), [t]);
        (0, m.hL)(l, u);
        const h = s.useMemo(() => a.wh(t), [t]);
        return s.createElement(w, {
          ...r,
          command: h,
          toggled: i,
          children: o,
        });
      }
      function w(e) {
        const { command: t, toggled: o, children: r, ...n } = e,
          { view: a, callbacks: c } = g(),
          [i, u] = s.useState(() => t(a.state));
        (0, m.hL)(
          c,
          s.useCallback((e) => u(t(e.state)), [t]),
        ),
          s.useEffect(() => u(t(a.state)), [t, a]);
        const h = !i && !o;
        return s.createElement(
          E,
          { ...n },
          s.createElement(
            l.$n,
            {
              className: (0, d.A)(p.CommandButton, o && p.Toggled),
              onMouseDown: (e) => {
                e.preventDefault(), t(a.state, a.dispatch, a);
              },
              disabled: h,
              focusable: !h,
            },
            r,
          ),
        );
      }
      function B(e) {
        const {
          onClick: t,
          toggled: o,
          disabled: r,
          children: n,
          className: a,
          ...c
        } = e;
        return s.createElement(
          E,
          { ...c },
          s.createElement(
            l.$n,
            {
              className: (0, d.A)(p.CommandButton, o && p.Toggled, a),
              onMouseDown: (e) => {
                0 === e.button && (e.preventDefault(), t(e));
              },
              disabled: !0 === r,
            },
            n,
          ),
        );
      }
      function E(e) {
        const { tooltip: t, keyboardShortcut: o, children: r } = e;
        if (!t) return r;
        const n = o
          ? s.createElement(S, { tooltip: t, keyboardShortcut: o })
          : t;
        return s.createElement(
          c.Gq,
          { toolTipContent: n, direction: "bottom" },
          r,
        );
      }
      function S(e) {
        const { tooltip: t, keyboardShortcut: o } = e;
        return s.createElement(
          "div",
          { className: p.TooltipWithShortcut },
          s.createElement("div", null, (0, u.we)(t)),
          s.createElement(
            "div",
            null,
            s.createElement(y, { keyboardShortcut: o }),
          ),
        );
      }
      function y(e) {
        const { keyboardShortcut: t } = e,
          o = t.split("-"),
          r = o.pop();
        return s.createElement(
          s.Fragment,
          null,
          o.map((e, t) =>
            s.createElement(
              s.Fragment,
              { key: t },
              s.createElement(A, null, s.createElement(M, { modifier: e })),
              " + ",
            ),
          ),
          s.createElement(A, null, r.toUpperCase()),
        );
      }
      function A(e) {
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
