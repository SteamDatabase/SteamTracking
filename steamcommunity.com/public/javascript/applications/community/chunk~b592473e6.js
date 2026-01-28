/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [9773],
  {
    57361: (e) => {
      e.exports = {
        EyeDropperCtn: "_2cT7wst-UhvDbRqPOUFLHl",
        EyeDropperBtn: "_1SFKrl2Gt5OR-Nop7cqHIP",
        ColorPickerCtn: "_3qTvksxeNcdLlXlVi5T__3",
      };
    },
    73309: (e) => {
      e.exports = {
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
    26555: (e, t, o) => {
      "use strict";
      o.d(t, { i: () => a });
      var r = o(90626),
        n = o(90286);
      function a(e, t) {
        const { msAutosaveTimeout: o = 1e3, msMaxInterval: a = 10 * o } =
            t || {},
          [s, l] = r.useState(!1),
          c = r.useRef(0);
        return (
          (0, n.u)(
            e,
            r.useCallback(() => {
              (c.current = performance.now()), l(!0);
            }, []),
          ),
          r.useEffect(() => {
            if (!s || !e) return;
            const t = performance.now(),
              r = (s = !1) => {
                n = void 0;
                const i = performance.now(),
                  d = i - c.current;
                s || d >= o || i - t >= a
                  ? (console.log("Committing changes"),
                    e.CommitChanges(),
                    l(!1))
                  : (n = window.setTimeout(r, o - d));
              };
            let n = window.setTimeout(r, o);
            return () => {
              n && (window.clearTimeout(n), r(!0));
            };
          }, [s, e, o, a]),
          { bDirty: s }
        );
      }
    },
    22145: (e, t, o) => {
      "use strict";
      o.d(t, { KF: () => p, Ot: () => g, c$: () => f, Hd: () => b });
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
      function g(e) {
        const { view: t, pmState: o, children: r } = e,
          n = l.useMemo(() => ({ view: t, pmState: o }), [t, o]);
        return l.createElement(h.Provider, { value: n }, r);
      }
      const p = l.memo(function (e) {
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
                      "Mod-Shift-x": (0, r.wh)(o.strike),
                      "Ctrl-Shift-s": (0, r.wh)(o.strike),
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
              attrs: { align: { default: "left" } },
              content: "inline*",
              group: "block",
              parseDOM: [
                {
                  tag: "p",
                  getAttrs: (e) => ({ align: e.style.textAlign || "left" }),
                },
              ],
              toDOM(e) {
                const t = { class: (0, s.A)("pm_paragraph", n().Paragraph) };
                return (
                  e.attrs.align &&
                    "left" != e.attrs.align &&
                    (t.style = `text-align: ${e.attrs.align}`),
                  ["p", t, 0]
                );
              },
              bbCode: {
                tag: "p",
                autocloses: !0,
                BBArgsToAttrs: (e) => ({ align: e.align }),
                AttrsToBBArgs: (e) => {
                  let t = { args: {} };
                  return (
                    e.align && "left" != e.align && (t.args.align = e.align), t
                  );
                },
              },
            },
            heading: {
              attrs: { level: { default: 1 }, align: { default: "left" } },
              content: "inline*",
              group: "block",
              defining: !0,
              parseDOM: [1, 2, 3, 4, 5].map(function (e) {
                return {
                  tag: `h${e}`,
                  getAttrs: (t) => ({
                    level: e,
                    align: t.style.textAlign || "left",
                  }),
                };
              }),
              toDOM(e) {
                const t = {
                  class:
                    `BB_Header${e.attrs.level} ` +
                    n()[`Header${e.attrs.level}`],
                };
                return (
                  e.attrs.align &&
                    "left" != e.attrs.align &&
                    (t.style = `text-align: ${e.attrs.align}`),
                  ["h" + e.attrs.level, t, 0]
                );
              },
              bbCode: [1, 2, 3, 4, 5].map(function (e) {
                return {
                  tag: `h${e}`,
                  BBArgsToAttrs: (t) => ({
                    level: e,
                    align: t.align || "left",
                  }),
                  AttrsToBBArgs: (e) => {
                    let t = { tag: `h${e.level}`, args: {} };
                    return (
                      e.align &&
                        "left" != e.align &&
                        t.args &&
                        (t.args.align = e.align),
                      t
                    );
                  },
                };
              }),
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
                    ...s,
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
              inclusive: !0,
              excludes: "",
            },
            bgcolor: {
              attrs: { color: {} },
              parseDOM: [{ style: "bgcolor", getAttrs: (e) => ({ color: e }) }],
              toDOM: (e) => [
                "span",
                {
                  style: `background-color: ${e.attrs.color}`,
                  class: (0, s.A)("BB_BGColor", n().BGColor),
                },
                0,
              ],
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
    90286: (e, t, o) => {
      "use strict";
      o.d(t, { n: () => b, u: () => v });
      var r = o(91986),
        n = o(64753),
        a = o(98724),
        s = o(52893),
        l = o(95742),
        c = o(57053),
        i = o(81393);
      class d {
        constructor(e, t, o) {
          var r;
          (this.m_nodes = []),
            (this.m_schema = e),
            (this.m_bConvertNewlinesToBR =
              null !== (r = null == t ? void 0 : t.bConvertNewlinesToBR) &&
              void 0 !== r &&
              r);
          const n = o && "mark" in o;
          this.m_fnProcessText = n || null == t ? void 0 : t.fnProcessText;
        }
        AppendText(e, t) {
          e.length &&
            (this.m_bConvertNewlinesToBR
              ? this.m_nodes.push(...this.GenerateBreaksForNewlines(e))
              : this.m_nodes.push(...this.TextNode(e)));
        }
        AppendNode(e) {
          this.m_nodes.push(e);
        }
        GetElements() {
          return this.m_nodes;
        }
        GenerateBreaksForNewlines(e) {
          const t = [];
          let o = 0;
          for (let r = e.indexOf("\n", o); -1 !== r; r = e.indexOf("\n", o))
            o != r && t.push(...this.TextNode(e.substring(o, r))),
              t.push(this.m_schema.nodes.hard_break.createChecked()),
              (o = r + 1);
          return o < e.length && t.push(...this.TextNode(e.substring(o))), t;
        }
        TextNode(e) {
          const t = this.m_fnProcessText && this.m_fnProcessText(e);
          return t || [this.m_schema.text(e)];
        }
      }
      class u extends l.Al {
        constructor(e, t) {
          super(e.bbcode_dictionary, (o) => {
            const r =
              (null == o ? void 0 : o.tag) && e.bbcode_dictionary.get(o.tag);
            return new d(
              e.pm_schema,
              t,
              r && "Constructor" in r ? r.Constructor : void 0,
            );
          }),
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
          let r,
            n = c.FK.from(t);
          if (
            !e.node.validContent(n) &&
            (e.node.isInline ||
              (n = c.FK.from(
                t.filter(
                  (t) =>
                    (!t.isText || !t.text.match(/^\s*$/)) &&
                    !(
                      t.type == this.schema.nodes.hard_break &&
                      !e.node.validContent(c.FK.from(t))
                    ),
                ),
              )),
            !e.node.validContent(n))
          ) {
            const t = e.acceptNode;
            r = [];
            let o = [],
              a = !1,
              s = !1;
            for (let l = 0; l < n.childCount; l++) {
              const i = n.child(l),
                d = c.FK.from(i),
                u = e.node.validContent(d);
              s || (!u && !(null == t ? void 0 : t.validContent(d)))
                ? ((s = !0), r.push(i))
                : (u || (a = !0), o.push(i));
            }
            if ((console.assert(!a || t), a && t)) {
              t.isBlock &&
                o.length > 1 &&
                o[o.length - 1].type == this.schema.nodes.hard_break &&
                (o = o.slice(0, -1));
              const a = this.m_mapPMBBNodes.get(t.name);
              let s;
              (0, i.wT)(
                a,
                `Indicated acceptNode type ${t.name} for ${e.node.name} missing`,
              );
              try {
                s = a
                  ? this.TryCreateNode(a, o, void 0)
                  : t.createChecked(void 0, o);
              } catch (e) {
                console.error(e), (s = []), (r = [...o, ...r]);
              }
              n = c.FK.from(s);
            } else n = c.FK.from(o);
          }
          try {
            const t = e.node.createAndFill(o, n) || e.node.createChecked(o, n);
            return r ? [t, ...r] : t;
          } catch (o) {
            return (
              (0, i.wT)(
                !1,
                `Invalid content for node type ${e.node.name}, removing and promoting children.`,
              ),
              t
            );
          }
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
                if (
                  ((r = o.nodes.paragraph.validContent(s)
                    ? o.nodes.paragraph
                    : t.get(e.type.name)),
                  r)
                )
                  n.accumulate(r, e);
                else {
                  (0, i.wT)(
                    !1,
                    `Couldn't accept ${e.type.name} at root of document, converting to paragraph`,
                  );
                  const t = (function (e) {
                    let t = "";
                    return (
                      e.descendants((e) => {
                        e.isText && (t += e.text);
                      }),
                      t
                    );
                  })(e);
                  t && n.accumulate(o.nodes.paragraph, o.text(t));
                }
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
            ([a, n] = g(t, n, o.marks, a)),
              ([a, n] = (function (e, t, o, r) {
                let n;
                for (const a of o)
                  if (-1 === t.indexOf(a)) {
                    n || (n = t.slice());
                    const o = e.mapMarks.get(a.type);
                    if (((0, i.wT)(o, "mark missing bbtag"), o)) {
                      n.push(a);
                      const { args: e, tag: t } = p(o, a);
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
          ([a] = g(t, n, r, a)),
          "emoticon" == c ? (a += ":") : c && (a += (0, l.op)(c)),
          a
        );
      }
      function g(e, t, o, r) {
        const n = [];
        for (const e of t) -1 === o.indexOf(e) && n.push(e);
        if (!n.length) return [r, t];
        const a = t.slice();
        for (
          ;
          n.length && ((0, i.wT)(a.length, "no marks left to close"), a.length);
        ) {
          const t = a.pop(),
            o = e.mapMarks.get(t.type),
            { tag: s } = p(o, t);
          r += (0, l.op)(s);
          const c = n.indexOf(t);
          -1 != c && n.splice(c, 1);
        }
        return [r, a];
      }
      function p(e, t) {
        if (e && e.AttrsToBBArgs) {
          const { tag: o = e.tag, args: r = {} } = e.AttrsToBBArgs(t.attrs, t);
          return { tag: o, args: r };
        }
        return { tag: null == e ? void 0 : e.tag, args: {} };
      }
      const f = new s.hs("CProseMirrorState - OnChange");
      class b {
        constructor(e, t, o, n) {
          (this.m_bHasUncomittedChanges = !1),
            (this.m_onStateChangedCallbacks = new r.l());
          const { parser: a } = null != n ? n : {};
          (this.m_schemaConfig = e),
            (this.m_bbcodeParser = new u(e, null != a ? a : {})),
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
        ReplaceDocument(e) {
          this.m_bbcode != e &&
            this.UpdateState((t) => {
              this.m_bbcode = e;
              const o = this.m_bbcodeParser.ParseBBCode(e);
              return this.m_state.tr
                .replaceWith(0, this.m_state.doc.content.size, o)
                .scrollIntoView();
            });
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
        OX: () => d,
        bQ: () => u,
        gj: () => c,
        vn: () => s,
        wt: () => i,
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
        if (e.type !== t) return !1;
        if (void 0 === o) return !0;
        for (const t in o) if (o[t] !== e.attrs[t]) return !1;
        return !0;
      }
      function c(e, t, o) {
        let { $from: r, to: n } = e.selection;
        for (let e = r.depth; e > 0; e--) {
          if (n > r.end(e)) return !1;
          if (l(r.node(e), t, o)) return !0;
        }
        return !1;
      }
      function i(e, t, o) {
        const { $from: r, to: n } = e.selection;
        for (let e = r.sharedDepth(n); e > 0; e--) {
          const n = r.node(e);
          if (void 0 === o ? n.type === t : n.hasMarkup(t, o))
            return r.before(e);
        }
      }
      function d(e, t, o = {}) {
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
      function u(e, t, o) {
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
    64046: (e, t, o) => {
      "use strict";
      o.d(t, { s: () => u });
      var r = o(90626),
        n = o(61257),
        a = o(68255),
        s = o(4869),
        l = o(32754),
        c = o(61859),
        i = o(57361),
        d = o.n(i);
      function u(e) {
        const { color: t, onChange: o, strTitle: i, disableAlpha: u } = e,
          [m, h] = (0, r.useState)(() => t || "rgba(255, 255, 255, 1)"),
          g = (0, r.useCallback)(async () => {
            if ("EyeDropper" in window)
              try {
                const e = new window.EyeDropper(),
                  t = await e.open(),
                  r = (function (e) {
                    const t = parseInt(e.slice(1), 16);
                    return `rgba(${(t >> 16) & 255}, ${(t >> 8) & 255}, ${255 & t}, 1)`;
                  })(t.sRGBHex);
                h(r), o(r);
              } catch (e) {
                console.warn((0, c.we)("#Sale_EyeDropperFailed"), e);
              }
            else alert((0, c.we)("#Sale_EyeDropperError"));
          }, [o]);
        return r.createElement(
          "div",
          null,
          Boolean(i) && r.createElement(a.JU, null, i),
          r.createElement(n.xk, {
            onChange: (e) => {
              const t = (function (e) {
                return `rgba(${e.rgb.r}, ${e.rgb.g}, ${e.rgb.b}, ${e.rgb.a})`;
              })(e);
              h(t), o(t);
            },
            color: m,
            disableAlpha: u,
            className: d().ColorPickerCtn,
          }),
          r.createElement(
            "div",
            { className: d().EyeDropperCtn },
            r.createElement(
              l.Gq,
              { toolTipContent: (0, c.we)("#Sale_BackgroundColorPicker") },
              r.createElement(
                a.$n,
                { className: d().EyeDropperBtn, onClick: g },
                r.createElement(s.O7b, null),
              ),
            ),
          ),
        );
      }
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
          g = r.useCallback(() => {
            c && c(), t();
          }, [c, t]),
          p = u ? void 0 : g;
        return r.createElement(
          a.x_,
          { onEscKeypress: p },
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
                onCancel: p,
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
      o.d(t, { J: () => u });
      var r = o(37834),
        n = o(52893),
        a = o(90626),
        s = o(64046),
        l = o(9154),
        c = o(72421),
        i = o(61859),
        d = o(30470);
      function u(e, t, o) {
        const [n, s] = a.useState(void 0),
          c = a.useCallback(
            (n) => {
              const { state: a, dispatch: l } = n,
                c = a.selection;
              let { from: i, to: d, empty: u } = c;
              const m = t ? e.marks.color : e.marks.bgcolor;
              let h = "",
                g = "";
              const p = u ? c.$from : a.doc.resolve(i),
                f = (0, r.vn)(a, m, p),
                b = !!f;
              b
                ? ((h = f.mark.attrs.color),
                  u
                    ? ((g = f.slice.content.textBetween(
                        0,
                        f.slice.content.size,
                      )),
                      (i = f.from),
                      (d = f.to))
                    : ((i = Math.max(f.from, i)),
                      (d = Math.min(f.to, d)),
                      (g = f.slice.content.textBetween(
                        i - f.from,
                        d - f.from,
                      ))))
                : u || (g = a.doc.cut(i, d).textContent);
              let v = {};
              if (o)
                for (const e in o) {
                  const t = o[e],
                    r = f ? t.fnReadValue(f.mark) : t.defaultValue;
                  v[e] = r;
                }
              s({
                view: n,
                strColor: h,
                strTargetText: g,
                bIsUpdate: b,
                addtlAttrs: o,
                addtlAttrsValues: v,
                from: i,
                to: d,
              });
            },
            [o, t, e.marks.bgcolor, e.marks.color],
          ),
          i = null == n ? void 0 : n.view,
          d = a.useCallback(() => {
            window.setTimeout(() => i.focus(), 1), s(void 0);
          }, [i]);
        return [
          c,
          n &&
            a.createElement(
              l.EN,
              { active: !0 },
              a.createElement(m, { schema: e, bColor: t, closeModal: d, ...n }),
            ),
        ];
      }
      const m = a.memo(function (e) {
        const {
            schema: t,
            strColor: o,
            bIsUpdate: r,
            strTargetText: l,
            bColor: u,
            addtlAttrs: m,
            addtlAttrsValues: h,
            closeModal: g,
            view: p,
            from: f,
            to: b,
          } = e,
          [v, C] = a.useState(o),
          _ = a.useRef(null),
          [k, T] = a.useState(h),
          w = a.useCallback(() => {
            const { state: e, dispatch: o } = p,
              r = u ? t.marks.color : t.marks.bgcolor;
            if (!r) return void console.log("debug: no markType");
            if (!v || !v.startsWith("#") || 7 !== v.length)
              return void console.log("debug: invalid color text: " + v);
            if (f < 0 || b > e.doc.content.size || f > b)
              return void console.error("Invalid selection range:", f, b);
            let a;
            try {
              if (((a = r.create({ color: v, ...k })), !a))
                return void console.error(
                  "Failed to create mark — mark is null",
                );
            } catch (e) {
              return void console.error("Failed to create color mark:", e);
            }
            let s = e.tr;
            f === b
              ? (s = s.addStoredMark(a))
              : ((s = s.removeMark(f, b, r)),
                (s = s.addMark(f, b, a)),
                (s = s.setSelection(n.U3.create(s.doc, b)))),
              "dev" == d.TS.WEB_UNIVERSE &&
                console.log(
                  "Dispatching transaction:",
                  s.steps.map((e) => e.toJSON()),
                  b,
                  f,
                );
            try {
              (s.docChanged || s.steps.length > 0) && o(s);
            } catch (e) {
              console.error(e);
            } finally {
              requestAnimationFrame(() => g());
            }
          }, [k, u, g, v, f, t.marks.bgcolor, t.marks.color, b, p]);
        a.useLayoutEffect(() => {
          var e, t, o;
          (
            null ===
              (t =
                null === (e = _.current) || void 0 === e ? void 0 : e.value) ||
            void 0 === t
              ? void 0
              : t.length
          )
            ? _.current.focus()
            : null === (o = _.current) || void 0 === o || o.focus();
        }, []);
        const B = (0, i.we)(
            u ? "#FormattingToolbar_Color" : "#FormattingToolbar_BgColor",
          ),
          E = r
            ? (0, i.we)("#Button_Save")
            : (0, i.we)(
                u ? "#FormattingToolbar_Color" : "#FormattingToolbar_BgColor",
              );
        return a.createElement(
          c._,
          {
            onOK: w,
            closeModal: g,
            strTitle: B,
            strOKText: E,
            bOKDisabled: !v || 0 == v.length,
          },
          a.createElement(s.s, {
            color: v,
            strTitle: B,
            disableAlpha: !0,
            onChange: (e) =>
              C(
                (function (e) {
                  const t = e.match(
                    /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)$/i,
                  );
                  if (t) {
                    let [, e, o, r, n] = t;
                    return `#${((1 << 24) + (parseInt(e, 10) << 16) + (parseInt(o, 10) << 8) + parseInt(r, 10)).toString(16).slice(1)}`;
                  }
                  return "#7e3232";
                })(e),
              ),
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
            closeModal: g,
            view: p,
            from: f,
            to: b,
          } = e,
          [v, C] = a.useState(o),
          [_, k] = a.useState(r),
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
              var e, o, r, a, s;
              let l = p.state.tr;
              if (
                !(
                  "dev" != d.TS.WEB_UNIVERSE ||
                  (p &&
                    null != f &&
                    null != b &&
                    (null === (e = null == t ? void 0 : t.marks) || void 0 === e
                      ? void 0
                      : e.link))
                )
              )
                return void console.warn(
                  "Missing required data in insertLink",
                  { view: p, from: f, to: b, schema: t },
                );
              const c = { href: _ };
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
              const u = t.text(v || _, [i]);
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
                      null === (a = p.state.doc.slice(f, b).content) ||
                      void 0 === a
                        ? void 0
                        : a.toJSON) || void 0 === s
                    ? void 0
                    : s.call(a)) || p.state.doc.slice(f, b),
                ));
              try {
                (l = l.replaceRangeWith(f, b, u)),
                  (l = l.setSelection(
                    n.U3.create(l.doc, f + u.nodeSize, f + u.nodeSize),
                  )),
                  p.dispatch(l);
              } catch (e) {
                console.error("Error during link insertion", e);
              }
              g();
            },
            closeModal: g,
            strTitle: y,
            strOKText: S,
            bOKDisabled: 0 == _.length,
          },
          a.createElement(s.pd, {
            ref: T,
            value: v,
            onChange: (e) => C(e.currentTarget.value),
            label: (0, i.we)("#FormattingToolbar_LinkText"),
          }),
          a.createElement(s.pd, {
            ref: w,
            value: _,
            placeholder: "https://",
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
            a.createElement(g, {
              key: e,
              attrName: e,
              fnRender: t[e].fnRenderEditor,
              value: o[e],
              setValues: r,
            }),
          ),
        );
      }
      const g = a.memo(function (e) {
        const { attrName: t, fnRender: o, value: r, setValues: n } = e;
        return o(
          r,
          a.useCallback((e) => n((o) => ({ ...o, [t]: e })), [t, n]),
        );
      });
    },
    1805: (e, t, o) => {
      "use strict";
      o.d(t, { l: () => w });
      var r = o(76217),
        n = o(63512),
        a = o(73170),
        s = o(29287),
        l = o(22145),
        c = o(37834),
        i = o(52893),
        d = o(57053),
        u = o(90626),
        m = o(84811),
        h = o(33645),
        g = o.n(h),
        p = o(38539),
        f = o(9024),
        b = o(52038);
      const v = u.memo(function (e) {
        const { schema: t } = e,
          o = !(!("table" in t.nodes) || !t.nodes.table.spec.tableRole);
        return (
          (0, l.c$)(u.useMemo(() => o && p.AL({ View: C }), [o])),
          (0, l.c$)(u.useMemo(() => o && p.LF(), [o])),
          null
        );
      });
      class C extends p.Qg {
        constructor(e, t) {
          super(e, t), this.SetTableClass(e);
        }
        update(e) {
          return !!super.update(e) && (this.SetTableClass(e), !0);
        }
        SetTableClass(e) {
          this.table.className = (0, b.A)(
            g().Table,
            e.attrs[f.w.NoBorder] && g().NoBorder,
            e.attrs[f.w.EqualCells] && g().EqualCells,
          );
        }
      }
      var _ = o(61859),
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
            panelProps: g,
            children: p,
          } = e,
          [f, C] = u.useState(),
          [w, E] = u.useState();
        u.useEffect(() => {
          t && f && E(new s.Lz(f, { state: t.state }));
        }, [t, f]),
          u.useEffect(() => () => (null == w ? void 0 : w.destroy()), [w]),
          (0, k.D5)(d, w);
        const {
            refDiv: y,
            onActivate: S,
            onGamepadDirection: A,
          } = (function (e) {
            const t = u.useRef(void 0),
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
          M = (0, k.Ue)(y, C);
        if (!t) return null;
        const { schemaConfig: O, bbcodeParser: F } = t;
        return u.createElement(
          l.Ot,
          { view: w, pmState: t },
          u.createElement(r.Z, {
            key: `editordiv_${m}`,
            className: (0, b.A)({
              ["" + o]: !!o,
              [T.Container]: !0,
              [T.SingleLine]: !!h,
            }),
            ref: M,
            spellCheck: m,
            focusable: !0,
            onActivate: S,
            onOKActionDescription: (0, _.we)("#UserGameNotes_Edit"),
            onGamepadDirection: A,
            ...g,
          }),
          u.createElement(l.KF, {
            refOnUpdate: i,
            schema: O.pm_schema,
            bSingleLine: h,
          }),
          u.createElement(B, { parser: F, schema: O.pm_schema }),
          u.createElement(v, { schema: O.pm_schema }),
          p,
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
        C$: () => C,
        Hz: () => b,
        Nt: () => T,
        MV: () => p,
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
        const [g, p] = (0, c.E)(t, o);
        return s.createElement(
          s.Fragment,
          null,
          p,
          s.createElement(
            i.ff,
            {
              onClick: () => g(l),
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
      function g(e) {
        const { schema: t, bColor: o, addtlAttrs: r, children: n } = e,
          { callbacks: l, view: c } = (0, i.wU)(),
          [u, m] = s.useState(() =>
            (0, a.Cd)(c.state, o ? t.marks.color : t.marks.bgcolor),
          ),
          g = s.useCallback(
            (e) => m((0, a.Cd)(e.state, o ? t.marks.color : t.marks.bgcolor)),
            [o, t],
          );
        (0, d.hL)(l, g);
        const [p, f] = (0, h.J)(t, o, r);
        return s.createElement(
          s.Fragment,
          null,
          f,
          s.createElement(
            i.ff,
            {
              onClick: () => p(c),
              toggled: u,
              tooltip: o
                ? "#FormattingToolbar_Color"
                : "#FormattingToolbar_BgColor",
            },
            n,
          ),
        );
      }
      function p() {
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
            s.createElement(
              g,
              { schema: t, bColor: !0 },
              s.createElement(l.r7n, null),
            ),
          "bgcolor" in t.marks &&
            s.createElement(
              g,
              { schema: t, bColor: !1 },
              s.createElement(l.FId, null),
            ),
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
      function C(e) {
        const { schema: t, showIndentButtonsAsNeeded: o = !1 } = e,
          { callbacks: r, view: a } = (0, i.wU)(),
          { bullet_list: c, ordered_list: u, list_item: m } = t.nodes,
          h = s.useMemo(() => n.T2(m), [m]),
          g = s.useMemo(() => n.$B(m), [m]),
          [p, f] = s.useState(() => h(a.state) || g(a.state));
        return (
          (0, d.hL)(
            r,
            s.useCallback(
              (e) => {
                f(h(e.state) || g(e.state));
              },
              [h, g],
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
            u &&
              s.createElement(
                _,
                {
                  tooltip: "#FormattingToolbar_OrderedList",
                  keyboardShortcut: "Ctrl-Shift-7",
                  list_type: u,
                  list_item: m,
                },
                s.createElement(l.jE0, null),
              ),
            (!o || p) &&
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
                    command: g,
                  },
                  s.createElement(l.ycU, null),
                ),
              ),
          )
        );
      }
      function _(e) {
        const { list_type: t, list_item: o, children: r, ...l } = e,
          { callbacks: c, view: u } = (0, i.wU)(),
          m = s.useCallback((e) => void 0 !== (0, a.wt)(e.state, t), [t]),
          [h, g] = s.useState(() => m(u)),
          p = s.useMemo(() => n.Sd(t), [t]),
          f = s.useMemo(() => n.T2(o), [o]);
        return (
          (0, d.hL)(
            c,
            s.useCallback(
              (e) => {
                g(m(e));
              },
              [m],
            ),
          ),
          s.createElement(i.cQ, { ...l, toggled: h, command: h ? f : p }, r)
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
        Ez: () => _,
        GY: () => T,
        XQ: () => v,
        bI: () => f,
        cQ: () => w,
        ff: () => B,
        hK: () => C,
        u3: () => k,
        wU: () => p,
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
        g = o(73309);
      const p = () => s.useContext(b);
      function f(e) {
        const { view: t, refUpdateToolbar: o, children: r } = e,
          n = s.useRef(void 0);
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
        return s.createElement("div", { className: g.Gap });
      }
      function C() {
        return s.createElement("div", { className: g.Spacer });
      }
      function _(e) {
        return s.createElement(
          "div",
          { className: (0, d.A)(e.className, g.ToolbarRowOverflowContainer) },
          s.createElement(
            r.Z,
            { className: g.ToolbarRow, "flow-children": "row" },
            e.children,
          ),
        );
      }
      function k(e) {
        const { nodeType: t, attrs: o, children: r, ...l } = e,
          { callbacks: c, view: i } = p(),
          [d, u] = s.useState(() => (0, n.gj)(i.state, t, o)),
          h = s.useCallback((e) => u((0, n.gj)(e.state, t, o)), [t, o]);
        (0, m.hL)(c, h);
        const g = s.useMemo(() => a.y_(t, o), [o, t]);
        return s.createElement(w, {
          ...l,
          command: g,
          toggled: d,
          children: r,
        });
      }
      function T(e) {
        const { mark: t, children: o, ...r } = e,
          { callbacks: l, view: c } = p(),
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
          { view: a, callbacks: c } = p(),
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
              className: (0, d.A)(g.CommandButton, o && g.Toggled),
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
              className: (0, d.A)(g.CommandButton, o && g.Toggled, a),
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
          ? s.createElement(y, { tooltip: t, keyboardShortcut: o })
          : t;
        return s.createElement(
          c.Gq,
          { toolTipContent: n, direction: "bottom" },
          r,
        );
      }
      function y(e) {
        const { tooltip: t, keyboardShortcut: o } = e;
        return s.createElement(
          "div",
          { className: g.TooltipWithShortcut },
          s.createElement("div", null, "string" == typeof t ? (0, u.we)(t) : t),
          s.createElement(
            "div",
            null,
            s.createElement(S, { keyboardShortcut: o }),
          ),
        );
      }
      function S(e) {
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
        return s.createElement("span", { className: g.KeyCap }, e.children);
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
