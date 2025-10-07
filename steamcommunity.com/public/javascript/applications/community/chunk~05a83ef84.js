/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [8104],
  {
    73309: (t) => {
      t.exports = {
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
    88089: (t, e, o) => {
      "use strict";
      o.d(e, { Mw: () => l, TG: () => c, zL: () => s });
      var r = o(52893),
        n = o(90626),
        a = o(22145);
      const s = new r.k_({
          props: {
            handlePaste(t, e, o) {
              var r;
              const n =
                null === (r = e.clipboardData) || void 0 === r
                  ? void 0
                  : r.getData("text/plain").replace(/\n/g, " ");
              if (n) {
                const e = t.state.tr.insertText(n);
                t.dispatch(e);
              }
              return !0;
            },
          },
        }),
        l = { Enter: () => !0, "Shift-Enter": () => !0, "Mod-Enter": () => !0 };
      function c(t) {
        const { nMaxChars: e } = t;
        return (
          (0, a.c$)(
            (0, n.useMemo)(() => {
              return (
                (t = e),
                new r.k_({
                  filterTransaction: (e, o) => e.doc.textContent.length <= t,
                })
              );
              var t;
            }, [e]),
          ),
          n.createElement(n.Fragment, null)
        );
      }
    },
    79497: (t, e, o) => {
      "use strict";
      o.d(e, { W: () => n });
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
        ConvertAttrToBBCodeArgs(t, e) {
          const o = this.m_PMToBBCodeConfig.mapNodes.get(t.type);
          return (o && o.AttrsToBBArgs && o.AttrsToBBArgs(e, t).args) || {};
        }
        constructor(t, e) {
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
            l = e ? new Set(e) : void 0;
          for (const e in t.nodes) {
            const { bbCode: r, ...s } = t.nodes[e],
              c = a(r, l);
            c && ((o[e] = s), n.set(e, c));
          }
          const c = {};
          for (const e in t.marks) {
            const { bbCode: o, ...r } = t.marks[e];
            (l && !l.has(o.tag)) || ((c[e] = r), s.set(e, o));
          }
          (this.m_ProseMirrorSchema = new r.Sj({ nodes: o, marks: c })),
            n.forEach((e, o) => {
              var r;
              const n = this.m_ProseMirrorSchema.nodes[o],
                a = t.nodes[o],
                s = Array.isArray(e) ? e : [e];
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
                    tag: t,
                    BBArgsToAttrs: e,
                    AttrsToBBArgs: o,
                    convertContentToAttr: r,
                    ...a
                  }) => {
                    this.m_mapBBCodeDictionary.set(t, {
                      Constructor: {
                        node: n,
                        BBArgsToAttrs: e,
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
            s.forEach((t, e) => {
              const o = this.m_ProseMirrorSchema.marks[e],
                { tag: r, BBArgsToAttrs: n, AttrsToBBArgs: a, ...s } = t;
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
      function a(t, e) {
        if (e) {
          if (Array.isArray(t)) {
            const o = t.filter((t) => e.has(t.tag));
            return o.length > 0 ? o : void 0;
          }
          return e.has(t.tag) ? t : void 0;
        }
        return t;
      }
    },
    26555: (t, e, o) => {
      "use strict";
      o.d(e, { i: () => a });
      var r = o(90626),
        n = o(90286);
      function a(t, e) {
        const { msAutosaveTimeout: o = 1e3, msMaxInterval: a = 10 * o } =
            e || {},
          [s, l] = r.useState(!1),
          c = r.useRef(0);
        return (
          (0, n.u)(
            t,
            r.useCallback(() => {
              (c.current = performance.now()), l(!0);
            }, []),
          ),
          r.useEffect(() => {
            if (!s || !t) return;
            const e = performance.now(),
              r = (s = !1) => {
                n = void 0;
                const i = performance.now(),
                  d = i - c.current;
                s || d >= o || i - e >= a
                  ? (console.log("Committing changes"),
                    t.CommitChanges(),
                    l(!1))
                  : (n = window.setTimeout(r, o - d));
              };
            let n = window.setTimeout(r, o);
            return () => {
              n && (window.clearTimeout(n), r(!0));
            };
          }, [s, t, o, a]),
          { bDirty: s }
        );
      }
    },
    22145: (t, e, o) => {
      "use strict";
      o.d(e, { KF: () => p, Ot: () => g, c$: () => f, Hd: () => b });
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
      function g(t) {
        const { view: e, pmState: o, children: r } = t,
          n = l.useMemo(() => ({ view: e, pmState: o }), [e, o]);
        return l.createElement(h.Provider, { value: n }, r);
      }
      const p = l.memo(function (t) {
        const { schema: e, refOnUpdate: o, bSingleLine: h } = t;
        return (
          f(
            l.useMemo(
              () =>
                o &&
                new s.k_({
                  view: (t) => ({
                    update: (...t) => o.current && o.current(...t),
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
                (function (t) {
                  const { nodes: e, marks: o } = t,
                    n = (0, r.st)(
                      r.I$,
                      (t, o) => (
                        o &&
                          o(
                            t.tr
                              .replaceSelectionWith(
                                e.hard_break.createChecked(),
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
                      Enter: (0, d.wn)(e.list_item),
                      "Mod-[": (0, d.T2)(e.list_item),
                      "Mod-]": (0, d.$B)(e.list_item),
                      "Ctrl-Shift-1": (0, r.y_)(e.heading, { level: 1 }),
                      "Ctrl-Shift-2": (0, r.y_)(e.heading, { level: 2 }),
                      "Ctrl-Shift-3": (0, r.y_)(e.heading, { level: 3 }),
                      "Ctrl-Shift-4": (0, r.y_)(e.heading, { level: 4 }),
                      "Ctrl-Shift-5": (0, r.y_)(e.heading, { level: 5 }),
                      "Ctrl-Shift-7": (0, r.y_)(e.ordered_list),
                      "Ctrl-Shift-8": (0, r.y_)(e.bullet_list),
                      "Ctrl-Shift-0": (0, r.y_)(e.paragraph),
                    };
                  return (
                    o.code && (s["Ctrl-Shift-c"] = (0, r.wh)(o.code)),
                    e.code_block &&
                      (s["Alt-Ctrl-Shift-c"] = (0, r.y_)(e.code_block)),
                    e.horizontal_rule &&
                      (s["Mod-_"] = (t, o) => (
                        o &&
                          o(
                            t.tr
                              .replaceSelectionWith(e.horizontal_rule.create())
                              .scrollIntoView(),
                          ),
                        !0
                      )),
                    (0, a.w)(s)
                  );
                })(e),
              [e],
            ),
          ),
          f(l.useMemo(() => (0, a.w)(r.RV), [])),
          f(
            l.useMemo(
              () =>
                (function (t) {
                  const { nodes: e, marks: o } = t;
                  return (0, i.sM)({
                    rules: [
                      (0, i.tG)(
                        /^(\d+)\.\s$/,
                        e.ordered_list,
                        (t) => ({ order: parseInt(t[1]) }),
                        (t, e) =>
                          e.childCount + e.attrs.order == parseInt(t[1]),
                      ),
                      (0, i.tG)(/^\s*([-+*])\s$/, e.bullet_list),
                      (0, u.OX)(/(?<!\w)\*([^*]+)\*/, o.strong),
                      (0, u.OX)(/(?<!\w)_([^_]+)_/, o.italic),
                      (0, u.OX)(/(?<!\w)~([^~]+)~/, o.strike),
                      (0, u.OX)(/(?<!\w)`([^`]+)`/, o.code),
                      (0, i.JJ)(/^```$/, e.code_block),
                      (0, i.JJ)(/^(#{1,5})\s$/, e.heading, (t) => ({
                        level: t[1].length,
                      })),
                      e.horizontal_rule &&
                        ((r = /^(\*\*\*|---|___)$/),
                        (n = e.horizontal_rule),
                        new i.fV(r, (t, e, o, r) =>
                          t.tr.replaceWith(o, r, n.create()),
                        )),
                    ].filter(Boolean),
                  });
                  var r, n;
                })(e),
              [e],
            ),
          ),
          null
        );
      });
      function f(t) {
        const { pmState: e } = l.useContext(h);
        l.useEffect(() => {
          if (e && t) return e.InstallPlugin(t);
        }, [t, e]);
      }
      function b() {
        var t;
        return null === (t = l.useContext(h)) || void 0 === t ? void 0 : t.view;
      }
    },
    55608: (t, e, o) => {
      "use strict";
      o.d(e, { BM: () => l, DQ: () => i, cI: () => d, ce: () => c });
      var r = o(33645),
        n = o.n(r),
        a = o(4188),
        s = o(52038);
      function l(t, e, o = 0) {
        return () => [t, { class: e }, o];
      }
      function c(t, e, o = 0) {
        return [t, { class: e }, o];
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
                  getAttrs: (t) => ({ align: t.style.textAlign || "left" }),
                },
              ],
              toDOM(t) {
                const e = { class: (0, s.A)("pm_paragraph", n().Paragraph) };
                return (
                  t.attrs.align &&
                    "left" != t.attrs.align &&
                    (e.style = `text-align: ${t.attrs.align}`),
                  ["p", e, 0]
                );
              },
              bbCode: {
                tag: "p",
                autocloses: !0,
                BBArgsToAttrs: (t) => ({ align: t.align }),
                AttrsToBBArgs: (t) => {
                  let e = { args: {} };
                  return (
                    t.align && "left" != t.align && (e.args.align = t.align), e
                  );
                },
              },
            },
            heading: {
              attrs: { level: { default: 1 }, align: { default: "left" } },
              content: "inline*",
              group: "block",
              defining: !0,
              parseDOM: [1, 2, 3, 4, 5].map(function (t) {
                return {
                  tag: `h${t}`,
                  getAttrs: (e) => ({
                    level: t,
                    align: e.style.textAlign || "left",
                  }),
                };
              }),
              toDOM(t) {
                const e = {
                  class:
                    `BB_Header${t.attrs.level} ` +
                    n()[`Header${t.attrs.level}`],
                };
                return (
                  t.attrs.align &&
                    "left" != t.attrs.align &&
                    (e.style = `text-align: ${t.attrs.align}`),
                  ["h" + t.attrs.level, e, 0]
                );
              },
              bbCode: [1, 2, 3, 4, 5].map(function (t) {
                return {
                  tag: `h${t}`,
                  BBArgsToAttrs: (e) => ({
                    level: t,
                    align: e.align || "left",
                  }),
                  AttrsToBBArgs: (t) => {
                    let e = { tag: `h${t.level}`, args: {} };
                    return (
                      t.align &&
                        "left" != t.align &&
                        e.args &&
                        (e.args.align = t.align),
                      e
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
                  getAttrs: (t) => ({
                    src: t.getAttribute("src"),
                    title: t.getAttribute("title"),
                    alt: t.getAttribute("alt"),
                  }),
                },
              ],
              toDOM(t) {
                const { src: e, alt: o, title: r } = t.attrs;
                return ["img", { src: e, alt: o, title: r, class: n().Image }];
              },
              bbCode: {
                tag: "img",
                BBArgsToAttrs: (t) => ({ src: t.src }),
                AttrsToBBArgs: (t) => ({ args: { src: t.src } }),
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
                  getAttrs(t) {
                    if ("video" !== t.tagName) return;
                    const e = t;
                    let o = "",
                      r = "";
                    for (const t of e.querySelectorAll("source"))
                      "video/mp4" == t.type
                        ? (o = t.src)
                        : "video/webm" == t.type && (r = t.src);
                    return {
                      mp4: o,
                      webm: r,
                      poster: e.poster || "",
                      autoplay: !!e.autoplay,
                      controls: !!e.controls,
                    };
                  },
                },
              ],
              toDOM(t) {
                const {
                    webm: e,
                    mp4: o,
                    poster: r,
                    autoplay: n,
                    controls: a,
                  } = t.attrs,
                  s = [];
                return (
                  e && s.push(["source", { src: e, type: "video/webm" }]),
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
                BBArgsToAttrs: (t) => ({
                  webm: t.webm,
                  mp4: t.mp4,
                  poster: t.poster,
                  autoplay: "true" == t.autoplay,
                  controls: "true" == t.controls,
                }),
                AttrsToBBArgs: (t) => ({
                  args: {
                    webm: t.webm || "",
                    mp4: t.mp4 || "",
                    poster: t.poster || "",
                    autoplay: t.autoplay ? "true" : "false",
                    controls: t.controls ? "true" : "false",
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
                  getAttrs: (t) => "normal" != t.style.fontWeight && null,
                },
                {
                  style: "font-weight=400",
                  clearMark: (t) => "strong" == t.type.name,
                },
                {
                  style: "font-weight",
                  getAttrs: (t) => /^(bold(er)?|[5-9]\d{2,})$/.test(t) && null,
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
                  clearMark: (t) => "em" == t.type.name,
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
                  getAttrs: (t) => ({
                    href: t.getAttribute("href"),
                    title: t.getAttribute("title"),
                  }),
                },
              ],
              toDOM(t) {
                const { href: e, title: o } = t.attrs;
                return ["a", { href: e, title: o, class: "BB_Link" }, 0];
              },
              bbCode: {
                tag: "url",
                BBArgsToAttrs: (t) => ({ href: t[""] }),
                AttrsToBBArgs: (t) => ({ args: { "": t.href } }),
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
              parseDOM: [{ style: "color", getAttrs: (t) => ({ color: t }) }],
              toDOM: (t) => [
                "span",
                {
                  style: `color: ${t.attrs.color}`,
                  class: (0, s.A)("BB_Color", n().Color),
                },
                0,
              ],
              bbCode: {
                tag: "color",
                BBArgsToAttrs: (t) => ({ color: t[""] }),
                AttrsToBBArgs: (t) => ({ args: { "": t.color } }),
              },
              inclusive: !0,
              excludes: "",
            },
            bgcolor: {
              attrs: { color: {} },
              parseDOM: [{ style: "bgcolor", getAttrs: (t) => ({ color: t }) }],
              toDOM: (t) => [
                "span",
                {
                  style: `background-color: ${t.attrs.color}`,
                  class: (0, s.A)("BB_BGColor", n().BGColor),
                },
                0,
              ],
              bbCode: {
                tag: "bgcolor",
                BBArgsToAttrs: (t) => ({ color: t[""] }),
                AttrsToBBArgs: (t) => ({ args: { "": t.color } }),
              },
              inclusive: !0,
              excludes: "",
            },
          },
        };
    },
    90286: (t, e, o) => {
      "use strict";
      o.d(e, { n: () => b, u: () => v });
      var r = o(91986),
        n = o(64753),
        a = o(98724),
        s = o(52893),
        l = o(95742),
        c = o(57053),
        i = o(81393);
      class d {
        constructor(t, e, o) {
          var r;
          (this.m_nodes = []),
            (this.m_schema = t),
            (this.m_bConvertNewlinesToBR =
              null !== (r = null == e ? void 0 : e.bConvertNewlinesToBR) &&
              void 0 !== r &&
              r);
          const n = o && "mark" in o;
          this.m_fnProcessText = n || null == e ? void 0 : e.fnProcessText;
        }
        AppendText(t, e) {
          t.length &&
            (this.m_bConvertNewlinesToBR
              ? this.m_nodes.push(...this.GenerateBreaksForNewlines(t))
              : this.m_nodes.push(...this.TextNode(t)));
        }
        AppendNode(t) {
          this.m_nodes.push(t);
        }
        GetElements() {
          return this.m_nodes;
        }
        GenerateBreaksForNewlines(t) {
          const e = [];
          let o = 0;
          for (let r = t.indexOf("\n", o); -1 !== r; r = t.indexOf("\n", o))
            o != r && e.push(...this.TextNode(t.substring(o, r))),
              e.push(this.m_schema.nodes.hard_break.createChecked()),
              (o = r + 1);
          return o < t.length && e.push(...this.TextNode(t.substring(o))), e;
        }
        TextNode(t) {
          const e = this.m_fnProcessText && this.m_fnProcessText(t);
          return e || [this.m_schema.text(t)];
        }
      }
      class u extends l.Al {
        constructor(t, e) {
          super(t.bbcode_dictionary, (o) => {
            const r =
              (null == o ? void 0 : o.tag) && t.bbcode_dictionary.get(o.tag);
            return new d(
              t.pm_schema,
              e,
              r && "Constructor" in r ? r.Constructor : void 0,
            );
          }),
            (this.m_mapPMBBNodes = new Map()),
            (this.m_schemaConfig = t),
            this.m_schemaConfig.bbcode_dictionary.forEach((t) => {
              "node" in t.Constructor &&
                this.m_mapPMBBNodes.set(t.Constructor.node.name, t.Constructor);
            });
        }
        get schema() {
          return this.m_schemaConfig.pm_schema;
        }
        ParseBBCode(t) {
          const e = this.Parse(t, this.BBNodeToPMNode.bind(this), !0);
          return this.m_schemaConfig.pm_schema.topNodeType.createChecked(
            {},
            this.ConvertLineBreaksToParagraphs(c.FK.fromArray(e)),
          );
        }
        TryCreateNode(t, e, o) {
          let r,
            n = c.FK.from(e);
          if (
            !t.node.validContent(n) &&
            (t.node.isInline ||
              (n = c.FK.from(
                e.filter(
                  (e) =>
                    (!e.isText || !e.text.match(/^\s*$/)) &&
                    !(
                      e.type == this.schema.nodes.hard_break &&
                      !t.node.validContent(c.FK.from(e))
                    ),
                ),
              )),
            !t.node.validContent(n))
          ) {
            const e = t.acceptNode;
            r = [];
            let o = [],
              a = !1,
              s = !1;
            for (let l = 0; l < n.childCount; l++) {
              const i = n.child(l),
                d = c.FK.from(i),
                u = t.node.validContent(d);
              s || (!u && !(null == e ? void 0 : e.validContent(d)))
                ? ((s = !0), r.push(i))
                : (u || (a = !0), o.push(i));
            }
            if ((console.assert(!a || e), a && e)) {
              e.isBlock &&
                o.length > 1 &&
                o[o.length - 1].type == this.schema.nodes.hard_break &&
                (o = o.slice(0, -1));
              const a = this.m_mapPMBBNodes.get(e.name);
              let s;
              (0, i.wT)(
                a,
                `Indicated acceptNode type ${e.name} for ${t.node.name} missing`,
              );
              try {
                s = a
                  ? this.TryCreateNode(a, o, void 0)
                  : e.createChecked(void 0, o);
              } catch (t) {
                console.error(t), (s = []), (r = [...o, ...r]);
              }
              n = c.FK.from(s);
            } else n = c.FK.from(o);
          }
          try {
            const e = t.node.createAndFill(o, n) || t.node.createChecked(o, n);
            return r ? [e, ...r] : e;
          } catch (o) {
            return (
              (0, i.wT)(
                !1,
                `Invalid content for node type ${t.node.name}, removing and promoting children.`,
              ),
              e
            );
          }
        }
        BBNodeToPMNode(t, e, ...o) {
          let r = t.BBArgsToAttrs ? t.BBArgsToAttrs(e.args || {}) : void 0;
          try {
            if (
              ("convertContentToAttr" in t &&
                t.convertContentToAttr &&
                ((r && r[t.convertContentToAttr]) ||
                  (r = {
                    ...(r || {}),
                    [t.convertContentToAttr]:
                      ((n = o),
                      n
                        .filter((t) => t.isText)
                        .map((t) => t.text)
                        .join()),
                  }),
                "node" in t && (o = [])),
              "node" in t)
            )
              return this.TryCreateNode(t, o, r);
            {
              const e = t.mark.create(r);
              return o.map((t) => this.RecursivelyApplyMark(t, e));
            }
          } catch (t) {
            return (
              console.error(`Error parsing [${e.tagname}] tag: ${t}`, t), []
            );
          }
          var n;
        }
        RecursivelyApplyMark(t, e) {
          if (t.isText || t.type.allowsMarkType(e.type))
            return t.mark([...t.marks, e]);
          {
            const o = [];
            return (
              t.descendants(
                (t) => (o.push(this.RecursivelyApplyMark(t, e)), !1),
              ),
              t.type.create(t.attrs, o, t.marks)
            );
          }
        }
        ConvertLineBreaksToParagraphs(t) {
          const e = new Map(),
            o = this.m_schemaConfig.pm_schema;
          this.m_mapPMBBNodes.forEach((t) => {
            t.acceptNode && e.set(t.acceptNode.name, t.node);
          });
          const r = [],
            n = {
              nodes: [],
              nodeType: void 0,
              reset() {
                (this.nodes = []), (this.nodeType = void 0);
              },
              accumulate(t, e) {
                return (
                  this.nodeType && t != this.nodeType && this.emit(),
                  (this.nodeType = t),
                  this.nodes.push(e),
                  !0
                );
              },
              emit(t = !1) {
                const e = this.nodeType || (t ? o.nodes.paragraph : void 0);
                e && (r.push(e.createChecked({}, this.nodes)), this.reset());
              },
            };
          return (
            t.forEach((t) => {
              const a = t.type == o.nodes.hard_break,
                s = c.FK.from(t);
              if (a || o.topNodeType.validContent(s)) {
                const e = a && n.nodes.length > 0;
                n.emit(),
                  a
                    ? e || r.push(o.nodes.paragraph.createChecked())
                    : r.push(t);
              } else {
                let r;
                if (
                  ((r = o.nodes.paragraph.validContent(s)
                    ? o.nodes.paragraph
                    : e.get(t.type.name)),
                  r)
                )
                  n.accumulate(r, t);
                else {
                  (0, i.wT)(
                    !1,
                    `Couldn't accept ${t.type.name} at root of document, converting to paragraph`,
                  );
                  const e = (function (t) {
                    let e = "";
                    return (
                      t.descendants((t) => {
                        t.isText && (e += t.text);
                      }),
                      e
                    );
                  })(t);
                  e && n.accumulate(o.nodes.paragraph, o.text(e));
                }
              }
            }),
            (!n.nodes.length && r.length) || n.emit(!0),
            c.FK.from(r)
          );
        }
      }
      function m(t, e) {
        return h(e.pm_schema, e.pm_to_bbcode_config, t, []);
      }
      function h(t, e, o, r) {
        let n = o.marks,
          a = "";
        const s = e.mapNodes.get(o.type),
          { tag: c, args: d } = (function (t, e) {
            if (t && t.AttrsToBBArgs) {
              const { tag: o = t.tag, args: r = {} } = t.AttrsToBBArgs(
                e.attrs,
                e,
              );
              return { tag: o, args: r };
            }
            return { tag: null == t ? void 0 : t.tag, args: {} };
          })(s, o);
        return (
          "emoticon" == c ? (a += ":") : c && (a += (0, l.CS)(c, d)),
          o.content.forEach((o) => {
            ([a, n] = g(e, n, o.marks, a)),
              ([a, n] = (function (t, e, o, r) {
                let n;
                for (const a of o)
                  if (-1 === e.indexOf(a)) {
                    n || (n = e.slice());
                    const o = t.mapMarks.get(a.type);
                    if (((0, i.wT)(o, "mark missing bbtag"), o)) {
                      n.push(a);
                      const { args: t, tag: e } = p(o, a);
                      r += (0, l.CS)(e, t);
                    }
                  }
                return [r, null != n ? n : e];
              })(e, n, o.marks, a)),
              o.type.isText
                ? (a += (0, l.vE)(o.text || ""))
                : o.type == t.nodes.hard_break
                  ? (a += "\n")
                  : (a += h(t, e, o, n));
          }),
          ([a] = g(e, n, r, a)),
          "emoticon" == c ? (a += ":") : c && (a += (0, l.op)(c)),
          a
        );
      }
      function g(t, e, o, r) {
        const n = [];
        for (const t of e) -1 === o.indexOf(t) && n.push(t);
        if (!n.length) return [r, e];
        const a = e.slice();
        for (
          ;
          n.length && ((0, i.wT)(a.length, "no marks left to close"), a.length);
        ) {
          const e = a.pop(),
            o = t.mapMarks.get(e.type),
            { tag: s } = p(o, e);
          r += (0, l.op)(s);
          const c = n.indexOf(e);
          -1 != c && n.splice(c, 1);
        }
        return [r, a];
      }
      function p(t, e) {
        if (t && t.AttrsToBBArgs) {
          const { tag: o = t.tag, args: r = {} } = t.AttrsToBBArgs(e.attrs, e);
          return { tag: o, args: r };
        }
        return { tag: null == t ? void 0 : t.tag, args: {} };
      }
      const f = new s.hs("CProseMirrorState - OnChange");
      class b {
        constructor(t, e, o, n) {
          (this.m_bHasUncomittedChanges = !1),
            (this.m_onStateChangedCallbacks = new r.l());
          const { parser: a } = null != n ? n : {};
          (this.m_schemaConfig = t),
            (this.m_bbcodeParser = new u(t, null != a ? a : {})),
            (this.m_bbcode = e),
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
        UpdateState(t) {
          var e;
          const o = t(
            (null === (e = this.m_view) || void 0 === e
              ? void 0
              : e.state.tr) || this.m_state.tr,
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
          const t = new s.k_({
              key: f,
              view: (t) => (
                console.assert(!this.m_view),
                (this.m_view = t),
                {
                  update: (t, e) => this.OnStateChange(e, t.state),
                  destroy: () => (this.m_view = void 0),
                }
              ),
            }),
            e = [(0, a.b6)(), t];
          return s.$t.create({
            schema: this.m_schemaConfig.pm_schema,
            doc: this.m_bbcodeParser.ParseBBCode(this.m_bbcode),
            plugins: e,
          });
        }
        InstallPlugin(t) {
          var e;
          const o = this.m_view ? this.m_view.state : this.m_state;
          return (
            o.plugins.includes(t) ||
              ((this.m_state = o.reconfigure({ plugins: [...o.plugins, t] })),
              null === (e = this.m_view) ||
                void 0 === e ||
                e.updateState(this.m_state)),
            () => {
              var e;
              const o = this.m_view ? this.m_view.state : this.m_state;
              (this.m_state = o.reconfigure({
                plugins: o.plugins.filter((e) => e != t),
              })),
                null === (e = this.m_view) ||
                  void 0 === e ||
                  e.updateState(this.m_state);
            }
          );
        }
        OnStateChange(t, e) {
          (this.m_state = e),
            t.doc &&
              t.doc != e.doc &&
              ((this.m_currentDoc = e.doc),
              (this.m_bHasUncomittedChanges = !0),
              this.m_onStateChangedCallbacks.Dispatch(
                this.m_currentDoc,
                t.doc,
              ));
        }
        ReplaceDocument(t) {
          this.m_bbcode != t &&
            this.UpdateState((e) => {
              this.m_bbcode = t;
              const o = this.m_bbcodeParser.ParseBBCode(t);
              return this.m_state.tr
                .replaceWith(0, this.m_state.doc.content.size, o)
                .scrollIntoView();
            });
        }
      }
      function v(t, e) {
        (0, n.hL)(null == t ? void 0 : t.OnStateChangedCallbacks, e);
      }
    },
    37834: (t, e, o) => {
      "use strict";
      o.d(e, {
        Cd: () => a,
        OX: () => d,
        bQ: () => u,
        gj: () => c,
        vn: () => s,
        wt: () => i,
      });
      var r = o(79216),
        n = o(52893);
      function a(t, e) {
        const { from: o, $from: r, to: n, empty: a } = t.selection;
        return a
          ? !!e.isInSet(t.storedMarks || r.marks())
          : t.doc.rangeHasMark(o, n, e);
      }
      function s(t, e, o) {
        var r;
        const { parent: n } = o,
          a = n.childAfter(o.parentOffset),
          s =
            null === (r = a.node) || void 0 === r
              ? void 0
              : r.marks.find((t) => t.type == e);
        if (!s) return;
        let l = o.index() - 1,
          c = o.start() + a.offset;
        for (; l >= 0 && s.isInSet(n.child(l).marks); )
          (c -= n.child(l).nodeSize), (l -= 1);
        let i = o.index() + 1,
          d = o.start() + a.offset + a.node.nodeSize;
        for (; i < n.childCount && s.isInSet(n.child(i).marks); )
          (d += n.child(i).nodeSize), (i += 1);
        return { from: c, to: d, slice: t.doc.slice(c, d), mark: s };
      }
      function l(t, e, o) {
        if (t.type !== e) return !1;
        if (void 0 === o) return !0;
        for (const e in o) if (o[e] !== t.attrs[e]) return !1;
        return !0;
      }
      function c(t, e, o) {
        let { $from: r, to: n } = t.selection;
        for (let t = r.depth; t > 0; t--) {
          if (n > r.end(t)) return !1;
          if (l(r.node(t), e, o)) return !0;
        }
        return !1;
      }
      function i(t, e, o) {
        const { $from: r, to: n } = t.selection;
        for (let t = r.sharedDepth(n); t > 0; t--) {
          const n = r.node(t);
          if (void 0 === o ? n.type === e : n.hasMarkup(e, o))
            return r.before(t);
        }
      }
      function d(t, e, o = {}) {
        return new r.fV(t, (t, r, n, a) => {
          const s = o instanceof Function ? o(r) : o,
            l = t.tr;
          if (r[1]) {
            const t = n + r[0].indexOf(r[1]),
              e = t + r[1].length;
            e < a && l.delete(e, a),
              t > n && l.delete(n, t),
              (a = n + r[1].length);
          }
          return l.addMark(n, a, e.create(s)), l.removeStoredMark(e), l;
        });
      }
      function u(t, e, o) {
        const r = { left: e, top: o },
          a = t.posAtCoords(r);
        if (null == a ? void 0 : a.pos) {
          const e = t.state.doc.resolve(a.pos);
          t.dispatch(t.state.tr.setSelection(n.U3.near(e)));
        }
      }
    },
    9024: (t, e, o) => {
      "use strict";
      o.d(e, { X: () => u, w: () => c });
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
              setDOMAttr: (t, e) => {
                e.class = t;
              },
            },
          },
        }),
        d = {
          BBArgsToAttrs: (t) => {
            const e = {};
            return (
              t.colspan && (e.colspan = parseInt(t.colspan)),
              t.rowspan && (e.rowspan = parseInt(t.rowspan)),
              t.colwidth &&
                (e.colwidth = t.colwidth.split(",").map((t) => parseInt(t))),
              e
            );
          },
          AttrsToBBArgs: (t) => {
            const e = {};
            return (
              t.colspan && 1 != t.colspan && (e.colspan = t.colspan.toString()),
              t.rowspan && 1 != t.rowspan && (e.rowspan = t.rowspan.toString()),
              t.colwidth && (e.colwidth = t.colwidth.join(",")),
              { args: e }
            );
          },
        },
        u = {
          table: {
            ...i.table,
            toDOM: (t) =>
              (0, s.ce)(
                "table",
                (0, l.A)(
                  n().Table,
                  t.attrs.noborder && n().NoBorder,
                  t.attrs.equalcells && n().EqualCells,
                ),
                ["tbody", 0],
              ),
            attrs: {
              [c.NoBorder]: { default: !1 },
              [c.EqualCells]: { default: !0 },
            },
            bbCode: {
              tag: "table",
              BBArgsToAttrs: (t) => ({
                noborder: !!t.noborder,
                equalcells: !!t.equalcells,
              }),
              AttrsToBBArgs: (t, e) => {
                const o = {};
                t.noborder && (o.noborder = "1"),
                  t.equalcells && (o.equalcells = "1");
                const r = e.child(0);
                if (r) {
                  let t = [];
                  for (let e = 0; e < r.childCount; e++) {
                    const o = r.child(e).attrs;
                    o.colwidth ? t.push(...o.colwidth) : t.push(void 0);
                  }
                  o.colwidth = t.join(",");
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
    72421: (t, e, o) => {
      "use strict";
      o.d(e, { _: () => s });
      var r = o(90626),
        n = o(68255),
        a = o(738);
      function s(t) {
        const {
            closeModal: e,
            strTitle: o,
            onOK: s,
            strOKText: l,
            onCancel: c,
            strCancelText: i,
            bOKDisabled: d,
            bCancelDisabled: u,
            strClassNameContent: m = "GenericFormDialog",
            children: h,
          } = t,
          g = r.useCallback(() => {
            c && c(), e();
          }, [c, e]),
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
    60637: (t, e, o) => {
      "use strict";
      o.d(e, { J: () => u });
      var r = o(37834),
        n = o(52893),
        a = o(90626),
        s = o(68255),
        l = o(9154),
        c = o(72421),
        i = o(61859),
        d = o(30470);
      function u(t, e, o) {
        const [n, s] = a.useState(void 0),
          c = a.useCallback(
            (n) => {
              const { state: a, dispatch: l } = n,
                c = a.selection;
              let { from: i, to: d, empty: u } = c;
              const m = e ? t.marks.color : t.marks.bgcolor;
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
                for (const t in o) {
                  const e = o[t],
                    r = f ? e.fnReadValue(f.mark) : e.defaultValue;
                  v[t] = r;
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
            [o, e, t.marks.bgcolor, t.marks.color],
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
              a.createElement(h, { schema: t, bColor: e, closeModal: d, ...n }),
            ),
        ];
      }
      function m(t) {
        if (t.startsWith("rgb")) {
          const e = t.match(/\d+/g);
          if (!e || e.length < 3) return "#000000";
          const [o, r, n] = e.map(Number);
          return (
            "#" +
            [o, r, n]
              .map((t) => {
                const e = t.toString(16);
                return 1 === e.length ? "0" + e : e;
              })
              .join("")
          );
        }
        return t;
      }
      const h = a.memo(function (t) {
        const {
            schema: e,
            strColor: o,
            bIsUpdate: r,
            strTargetText: l,
            bColor: u,
            addtlAttrs: h,
            addtlAttrsValues: g,
            closeModal: p,
            view: f,
            from: b,
            to: v,
          } = t,
          [C, _] = a.useState(o),
          k = a.useRef(null),
          [T, B] = a.useState(g),
          w = a.useCallback(() => {
            const { state: t, dispatch: o } = f,
              r = u ? e.marks.color : e.marks.bgcolor;
            if (!r) return;
            if (!C || !C.startsWith("#") || 7 !== C.length) return;
            if (b < 0 || v > t.doc.content.size || b > v)
              return void console.error("Invalid selection range:", b, v);
            let a;
            try {
              if (((a = r.create({ color: C, ...T })), !a))
                return void console.error(
                  "Failed to create mark — mark is null",
                );
            } catch (t) {
              return void console.error("Failed to create color mark:", t);
            }
            let s = t.tr;
            b === v
              ? (s = s.addStoredMark(a))
              : ((s = s.removeMark(b, v, r)),
                (s = s.addMark(b, v, a)),
                (s = s.setSelection(n.U3.create(s.doc, v)))),
              "dev" == d.TS.WEB_UNIVERSE &&
                console.log(
                  "Dispatching transaction:",
                  s.steps.map((t) => t.toJSON()),
                  v,
                  b,
                );
            try {
              (s.docChanged || s.steps.length > 0) && o(s);
            } catch (t) {
              console.error(t);
            } finally {
              requestAnimationFrame(() => p());
            }
          }, [T, u, p, C, b, e.marks.bgcolor, e.marks.color, v, f]);
        a.useLayoutEffect(() => {
          var t, e, o;
          (
            null ===
              (e =
                null === (t = k.current) || void 0 === t ? void 0 : t.value) ||
            void 0 === e
              ? void 0
              : e.length
          )
            ? k.current.focus()
            : null === (o = k.current) || void 0 === o || o.focus();
        }, []);
        const E = (0, i.we)(
            u ? "#FormattingToolbar_Color" : "#FormattingToolbar_BgColor",
          ),
          y = r
            ? (0, i.we)("#Button_Save")
            : (0, i.we)(
                u ? "#FormattingToolbar_Color" : "#FormattingToolbar_BgColor",
              );
        return a.createElement(
          c._,
          {
            onOK: w,
            closeModal: p,
            strTitle: E,
            strOKText: y,
            bOKDisabled: !C || 0 == C.length,
          },
          a.createElement(s.JU, null, (0, i.we)("#FormattingToolbar_Color")),
          a.createElement("input", {
            type: "color",
            ref: k,
            value: m(C),
            onChange: (t) => _(t.currentTarget.value),
          }),
        );
      });
    },
    17558: (t, e, o) => {
      "use strict";
      o.d(e, { E: () => u });
      var r = o(37834),
        n = o(52893),
        a = o(90626),
        s = o(68255),
        l = o(9154),
        c = o(72421),
        i = o(61859),
        d = o(30470);
      function u(t, e) {
        const [o, n] = a.useState(void 0),
          s = a.useCallback(
            (o) => {
              const a = o.state.selection;
              let s = "",
                l = "",
                { from: c, to: i } = a;
              const d = (0, r.vn)(o.state, t.marks.link, a.$from),
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
              if (e)
                for (const t in e) {
                  const o = e[t],
                    r = d ? o.fnReadValue(d.mark) : o.defaultValue;
                  m[t] = r;
                }
              n({
                view: o,
                strLinkText: s,
                strLinkHref: l,
                bIsUpdate: u,
                addtlAttrs: e,
                addtlAttrsValues: m,
                from: c,
                to: i,
              });
            },
            [t.marks.link, e],
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
              a.createElement(m, { schema: t, closeModal: i, ...o }),
            ),
        ];
      }
      const m = a.memo(function (t) {
        const {
            schema: e,
            strLinkText: o,
            strLinkHref: r,
            bIsUpdate: l,
            addtlAttrs: u,
            addtlAttrsValues: m,
            closeModal: g,
            view: p,
            from: f,
            to: b,
          } = t,
          [v, C] = a.useState(o),
          [_, k] = a.useState(r),
          T = a.useRef(null),
          B = a.useRef(null),
          [w, E] = a.useState(m);
        a.useLayoutEffect(() => {
          var t, e, o, r, n;
          (
            null ===
              (e =
                null === (t = T.current) || void 0 === t ? void 0 : t.value) ||
            void 0 === e
              ? void 0
              : e.length
          )
            ? (
                null ===
                  (r =
                    null === (o = B.current) || void 0 === o
                      ? void 0
                      : o.value) || void 0 === r
                  ? void 0
                  : r.length
              )
              ? (T.current.Focus(), T.current.element.select())
              : B.current.Focus()
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
              var t, o, r, a, s;
              let l = p.state.tr;
              if (
                !(
                  "dev" != d.TS.WEB_UNIVERSE ||
                  (p &&
                    null != f &&
                    null != b &&
                    (null === (t = null == e ? void 0 : e.marks) || void 0 === t
                      ? void 0
                      : t.link))
                )
              )
                return void console.warn(
                  "Missing required data in insertLink",
                  { view: p, from: f, to: b, schema: e },
                );
              const c = { href: _ };
              for (const t in w) c[t] = w[t];
              const i =
                null === (o = e.marks.link) || void 0 === o
                  ? void 0
                  : o.create(c);
              if ("dev" == d.TS.WEB_UNIVERSE && !i)
                return void console.error(
                  "Failed to create link mark with attrs",
                  c,
                );
              const u = e.text(v || _, [i]);
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
              } catch (t) {
                console.error("Error during link insertion", t);
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
            onChange: (t) => C(t.currentTarget.value),
            label: (0, i.we)("#FormattingToolbar_LinkText"),
          }),
          a.createElement(s.pd, {
            ref: B,
            value: _,
            placeholder: "https://",
            onChange: (t) => k(t.currentTarget.value),
            label: (0, i.we)("#FormattingToolbar_LinkAddress"),
            mustBeURL: !0,
          }),
          u && a.createElement(h, { addtlAttrs: u, values: w, setValues: E }),
        );
      });
      function h(t) {
        const { addtlAttrs: e, values: o, setValues: r } = t;
        return a.createElement(
          a.Fragment,
          null,
          Object.keys(e).map((t) =>
            a.createElement(g, {
              key: t,
              attrName: t,
              fnRender: e[t].fnRenderEditor,
              value: o[t],
              setValues: r,
            }),
          ),
        );
      }
      const g = a.memo(function (t) {
        const { attrName: e, fnRender: o, value: r, setValues: n } = t;
        return o(
          r,
          a.useCallback((t) => n((o) => ({ ...o, [e]: t })), [e]),
        );
      });
    },
    1805: (t, e, o) => {
      "use strict";
      o.d(e, { l: () => B });
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
      const v = u.memo(function (t) {
        const { schema: e } = t,
          o = !(!("table" in e.nodes) || !e.nodes.table.spec.tableRole);
        return (
          (0, l.c$)(u.useMemo(() => o && p.AL({ View: C }), [o])),
          (0, l.c$)(u.useMemo(() => o && p.LF(), [o])),
          null
        );
      });
      class C extends p.Qg {
        constructor(t, e) {
          super(t, e), this.SetTableClass(t);
        }
        update(t) {
          return !!super.update(t) && (this.SetTableClass(t), !0);
        }
        SetTableClass(t) {
          this.table.className = (0, b.A)(
            g().Table,
            t.attrs[f.w.NoBorder] && g().NoBorder,
            t.attrs[f.w.EqualCells] && g().EqualCells,
          );
        }
      }
      var _ = o(61859),
        k = o(73745),
        T = o(73309);
      const B = (0, m.Nr)(function (t) {
        const {
            pmState: e,
            className: o,
            refOnUpdate: i,
            refView: d,
            bSpellcheckEnabled: m = !0,
            bSingleLine: h,
            panelProps: g,
            children: p,
          } = t,
          [f, C] = u.useState(),
          [B, E] = u.useState();
        u.useEffect(() => {
          e && f && E(new s.Lz(f, { state: e.state }));
        }, [e, f]),
          u.useEffect(() => () => (null == B ? void 0 : B.destroy()), [B]),
          (0, k.D5)(d, B);
        const {
            refDiv: y,
            onActivate: S,
            onGamepadDirection: A,
          } = (function (t) {
            const e = u.useRef(void 0),
              o = (0, a.FN)(),
              r = u.useCallback(() => {
                if (
                  (o.ShowVirtualKeyboard(),
                  !(null == t ? void 0 : t.hasFocus()))
                ) {
                  t.focus();
                  let o = t.dom.childNodes;
                  for (let r = 0; r < o.length; ++r) {
                    let n = o[r],
                      a = n.offsetTop;
                    if (void 0 !== a && a >= e.current.scrollTop) {
                      let e = n.getBoundingClientRect();
                      (0, c.bQ)(t, e.left, e.top);
                      break;
                    }
                  }
                }
              }, [o, t]),
              s = u.useCallback((t) => t.currentTarget == t.target, []),
              l = (0, n.ak)(e, null, null, s);
            return { refDiv: e, onActivate: r, onGamepadDirection: l };
          })(B),
          M = (0, k.Ue)(y, C);
        if (!e) return null;
        const { schemaConfig: O, bbcodeParser: F } = e;
        return u.createElement(
          l.Ot,
          { view: B, pmState: e },
          u.createElement(r.Z, {
            key: `editordiv_${m}`,
            className: (0, b.A)(o, T.Container),
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
          u.createElement(w, { parser: F, schema: O.pm_schema }),
          u.createElement(v, { schema: O.pm_schema }),
          p,
        );
      });
      const w = u.memo(function (t) {
        const { parser: e, schema: o } = t;
        return (
          (0, l.c$)(
            u.useMemo(
              () =>
                new i.k_({
                  props: {
                    transformPasted: (t, r) =>
                      (function (t, e, o) {
                        let r = !1;
                        if (
                          (o.content.forEach((t) => {
                            t.type == e && (r = !0);
                          }),
                          !r)
                        )
                          return o;
                        const n = t.ConvertLineBreaksToParagraphs(o.content);
                        return d.Ji.maxOpen(n);
                      })(e, o.nodes.hard_break, t),
                  },
                }),
              [e, o],
            ),
          ),
          null
        );
      });
    },
    36969: (t, e, o) => {
      "use strict";
      o.d(e, {
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
      function u(t) {
        const { schema: e, addtlAttrs: o, children: r } = t,
          { callbacks: n, view: l } = (0, i.wU)(),
          [u, m] = s.useState(() => (0, a.Cd)(l.state, e.marks.link)),
          h = s.useCallback((t) => m((0, a.Cd)(t.state, e.marks.link)), [e]);
        (0, d.hL)(n, h);
        const [g, p] = (0, c.E)(e, o);
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
      function g(t) {
        const { schema: e, bColor: o, addtlAttrs: r, children: n } = t,
          { callbacks: l, view: c } = (0, i.wU)(),
          [u, m] = s.useState(() =>
            (0, a.Cd)(c.state, o ? e.marks.color : e.marks.bgcolor),
          ),
          g = s.useCallback(
            (t) => m((0, a.Cd)(t.state, o ? e.marks.color : e.marks.bgcolor)),
            [o, e],
          );
        (0, d.hL)(l, g);
        const [p, f] = (0, h.J)(e, o, r);
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
      function f(t) {
        const { schema: e } = t;
        return s.createElement(
          s.Fragment,
          null,
          s.createElement(
            i.GY,
            {
              tooltip: "#FormattingToolbar_Bold",
              keyboardShortcut: "Mod-b",
              mark: e.marks.strong,
            },
            s.createElement(l.l4n, null),
          ),
          s.createElement(
            i.GY,
            {
              tooltip: "#FormattingToolbar_Italic",
              keyboardShortcut: "Mod-i",
              mark: e.marks.italic,
            },
            s.createElement(l.UKJ, null),
          ),
          s.createElement(
            i.GY,
            {
              tooltip: "#FormattingToolbar_Underline",
              keyboardShortcut: "Mod-u",
              mark: e.marks.underline,
            },
            s.createElement(l.Gj3, null),
          ),
          "strike" in e.marks &&
            s.createElement(
              i.GY,
              {
                tooltip: "#FormattingToolbar_Strike",
                keyboardShortcut: "Mod-Shift-x",
                mark: e.marks.strike,
              },
              s.createElement(l.tI4, null),
            ),
          "code" in e.marks &&
            s.createElement(
              i.GY,
              {
                tooltip: "#FormattingToolbar_InlineCode",
                keyboardShortcut: "Ctrl-Shift-c",
                mark: e.marks.code,
              },
              s.createElement(l.bmT, null),
            ),
          "color" in e.marks &&
            s.createElement(
              g,
              { schema: e, bColor: !0 },
              s.createElement(l.r7n, null),
            ),
          "bgcolor" in e.marks &&
            s.createElement(
              g,
              { schema: e, bColor: !1 },
              s.createElement(l.FId, null),
            ),
        );
      }
      function b(t) {
        const { schema: e } = t;
        return s.createElement(
          i.u3,
          {
            tooltip: "#FormattingToolbar_Paragraph",
            keyboardShortcut: "Ctrl-Shift-0",
            nodeType: e.nodes.paragraph,
          },
          s.createElement(l.iYj, null),
        );
      }
      function v(t) {
        const { schema: e, maxLevel: o = 1, levels: r } = t,
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
                nodeType: e.nodes.heading,
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
                nodeType: e.nodes.heading,
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
                nodeType: e.nodes.heading,
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
                nodeType: e.nodes.heading,
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
                nodeType: e.nodes.heading,
                attrs: { level: 5 },
              },
              s.createElement(l.jXA, null),
            ),
        );
      }
      function C(t) {
        const { schema: e, showIndentButtonsAsNeeded: o = !1 } = t,
          { callbacks: r, view: a } = (0, i.wU)(),
          { bullet_list: c, ordered_list: u, list_item: m } = e.nodes,
          h = s.useMemo(() => n.T2(m), [m]),
          g = s.useMemo(() => n.$B(m), [m]),
          [p, f] = s.useState(() => h(a.state) || g(a.state));
        return (
          (0, d.hL)(
            r,
            s.useCallback(
              (t) => {
                f(h(t.state) || g(t.state));
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
      function _(t) {
        const { list_type: e, list_item: o, children: r, ...l } = t,
          { callbacks: c, view: u } = (0, i.wU)(),
          m = s.useCallback((t) => void 0 !== (0, a.wt)(t.state, e), [e]),
          [h, g] = s.useState(() => m(u)),
          p = s.useMemo(() => n.Sd(e), [e]),
          f = s.useMemo(() => n.T2(o), [o]);
        return (
          (0, d.hL)(
            c,
            s.useCallback(
              (t) => {
                g(m(t));
              },
              [m],
            ),
          ),
          s.createElement(i.cQ, { ...l, toggled: h, command: h ? f : p }, r)
        );
      }
      function k(t) {
        const { schema: e, addtlAttrs: o } = t;
        return s.createElement(
          u,
          { schema: e, addtlAttrs: o },
          s.createElement(l.YqK, null),
        );
      }
      function T(t) {
        const { bSpellcheckEnabled: e, setSpellcheckEnabled: o } = t;
        return s.createElement(
          i.ff,
          {
            tooltip: e
              ? "#FormattingToolbar_DisableSpellcheck"
              : "#FormattingToolbar_EnableSpellcheck",
            toggled: e,
            onClick: () => o(!e),
          },
          s.createElement(l.DEV, null),
        );
      }
    },
    30175: (t, e, o) => {
      "use strict";
      o.d(e, {
        Ez: () => _,
        GY: () => T,
        XQ: () => v,
        bI: () => f,
        cQ: () => B,
        ff: () => w,
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
      function f(t) {
        const { view: e, refUpdateToolbar: o, children: r } = t,
          n = s.useRef(void 0);
        n.current || (n.current = new i.lu()),
          s.useEffect(
            () => (
              (0, m.cZ)(o, () => n.current.Dispatch(e)),
              () => (0, m.cZ)(o, void 0)
            ),
            [e, o],
          );
        const a = s.useMemo(() => ({ callbacks: n.current, view: e }), [e]);
        return e ? s.createElement(b.Provider, { value: a }, r) : null;
      }
      const b = s.createContext(void 0);
      function v() {
        return s.createElement("div", { className: g.Gap });
      }
      function C() {
        return s.createElement("div", { className: g.Spacer });
      }
      function _(t) {
        return s.createElement(
          "div",
          { className: (0, d.A)(t.className, g.ToolbarRowOverflowContainer) },
          s.createElement(
            r.Z,
            { className: g.ToolbarRow, "flow-children": "row" },
            t.children,
          ),
        );
      }
      function k(t) {
        const { nodeType: e, attrs: o, children: r, ...l } = t,
          { callbacks: c, view: i } = p(),
          [d, u] = s.useState(() => (0, n.gj)(i.state, e, o)),
          h = s.useCallback((t) => u((0, n.gj)(t.state, e, o)), [e, o]);
        (0, m.hL)(c, h);
        const g = s.useMemo(() => a.y_(e, o), [o, e]);
        return s.createElement(B, {
          ...l,
          command: g,
          toggled: d,
          children: r,
        });
      }
      function T(t) {
        const { mark: e, children: o, ...r } = t,
          { callbacks: l, view: c } = p(),
          [i, d] = s.useState(() => (0, n.Cd)(c.state, e)),
          u = s.useCallback((t) => d((0, n.Cd)(t.state, e)), [e]);
        (0, m.hL)(l, u);
        const h = s.useMemo(() => a.wh(e), [e]);
        return s.createElement(B, {
          ...r,
          command: h,
          toggled: i,
          children: o,
        });
      }
      function B(t) {
        const { command: e, toggled: o, children: r, ...n } = t,
          { view: a, callbacks: c } = p(),
          [i, u] = s.useState(() => e(a.state));
        (0, m.hL)(
          c,
          s.useCallback((t) => u(e(t.state)), [e]),
        ),
          s.useEffect(() => u(e(a.state)), [e, a]);
        const h = !i && !o;
        return s.createElement(
          E,
          { ...n },
          s.createElement(
            l.$n,
            {
              className: (0, d.A)(g.CommandButton, o && g.Toggled),
              onMouseDown: (t) => {
                t.preventDefault(), e(a.state, a.dispatch, a);
              },
              disabled: h,
              focusable: !h,
            },
            r,
          ),
        );
      }
      function w(t) {
        const {
          onClick: e,
          toggled: o,
          disabled: r,
          children: n,
          className: a,
          ...c
        } = t;
        return s.createElement(
          E,
          { ...c },
          s.createElement(
            l.$n,
            {
              className: (0, d.A)(g.CommandButton, o && g.Toggled, a),
              onMouseDown: (t) => {
                0 === t.button && (t.preventDefault(), e(t));
              },
              disabled: !0 === r,
            },
            n,
          ),
        );
      }
      function E(t) {
        const { tooltip: e, keyboardShortcut: o, children: r } = t;
        if (!e) return r;
        const n = o
          ? s.createElement(y, { tooltip: e, keyboardShortcut: o })
          : e;
        return s.createElement(
          c.Gq,
          { toolTipContent: n, direction: "bottom" },
          r,
        );
      }
      function y(t) {
        const { tooltip: e, keyboardShortcut: o } = t;
        return s.createElement(
          "div",
          { className: g.TooltipWithShortcut },
          s.createElement("div", null, "string" == typeof e ? (0, u.we)(e) : e),
          s.createElement(
            "div",
            null,
            s.createElement(S, { keyboardShortcut: o }),
          ),
        );
      }
      function S(t) {
        const { keyboardShortcut: e } = t,
          o = e.split("-"),
          r = o.pop();
        return s.createElement(
          s.Fragment,
          null,
          o.map((t, e) =>
            s.createElement(
              s.Fragment,
              { key: e },
              s.createElement(A, null, s.createElement(M, { modifier: t })),
              " + ",
            ),
          ),
          s.createElement(A, null, r.toUpperCase()),
        );
      }
      function A(t) {
        return s.createElement("span", { className: g.KeyCap }, t.children);
      }
      function M(t) {
        const { modifier: e } = t;
        switch (e) {
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
