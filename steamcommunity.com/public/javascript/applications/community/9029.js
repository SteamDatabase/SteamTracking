/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [9029],
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
      const d = s.memo(function (e) {
        const {
            linkMarkType: t,
            onURLPasted: n,
            schema: d,
            onClickURL: p = m,
          } = e,
          g = s.useRef(p);
        g.current = p;
        const [h, f] = s.useState(),
          [b, _] = s.useState(),
          [k, v] = s.useState(),
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
                        f(e.left + e.width / 2), _(e.bottom + 2), v(n);
                      } else v(void 0);
                      return !1;
                    },
                    mouseleave: (e, t) => (v(void 0), !1),
                  },
                },
              }),
            [t, n, d],
          );
        if (((0, c.c$)(C), !k || !b || !h)) return null;
        const B = k.getAttribute("href");
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
      });
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
        constructor(e, t) {
          (this.m_mapBBCodeDictionary = new Map()),
            (this.m_PMToBBCodeConfig = {
              mapNodes: new Map(),
              mapMarks: new Map(),
            });
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
            r = new Map(),
            s = new Map(),
            l = t ? new Set(t) : void 0;
          for (const t in e.nodes) {
            const { bbCode: o, ...s } = e.nodes[t],
              c = a(o, l);
            c && ((n[t] = s), r.set(t, c));
          }
          const c = {};
          for (const t in e.marks) {
            const { bbCode: n, ...o } = e.marks[t];
            (l && !l.has(n.tag)) || ((c[t] = o), s.set(t, n));
          }
          (this.m_ProseMirrorSchema = new o.Sj({ nodes: n, marks: c })),
            r.forEach((t, n) => {
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
            s.forEach((e, t) => {
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
      }
      function a(e, t) {
        if (t) {
          if (Array.isArray(e)) {
            const n = e.filter((e) => t.has(e.tag));
            return n.length > 0 ? n : void 0;
          }
          return t.has(e.tag) ? e : void 0;
        }
        return e;
      }
    },
    32662: (e, t, n) => {
      "use strict";
      n.d(t, { i: () => d });
      var o = n(90626),
        r = n(49693),
        a = n(81393);
      function s(e, t) {
        return l(t.pm_schema, t.pm_to_bbcode_config, e, []);
      }
      function l(e, t, n, o) {
        let s = n.marks,
          d = "";
        const u = t.mapNodes.get(n.type),
          { tag: m, args: p } = (function (e, t) {
            if (e && e.AttrsToBBArgs) {
              const { tag: n = e.tag, args: o = {} } = e.AttrsToBBArgs(
                t.attrs,
                t,
              );
              return { tag: n, args: o };
            }
            return { tag: null == e ? void 0 : e.tag, args: {} };
          })(u, n);
        return (
          m && (d += (0, r.CS)(m, p)),
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
                return [o, null != s ? s : t];
              })(t, s, n.marks, d)),
              n.type.isText
                ? (d += (0, r.vE)(n.text || ""))
                : n.type == e.nodes.hard_break
                  ? (d += "\n")
                  : (d += l(e, t, n, s));
          }),
          ([d] = c(t, s, o, d)),
          m && (d += (0, r.op)(m)),
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
        return { tag: null == e ? void 0 : e.tag, args: {} };
      }
      function d(e, t, n) {
        const { msAutosaveTimeout: r = 1e3, refOnChangeCallback: a } = n || {},
          [l, c] = o.useState(!1),
          i = o.useRef(),
          d = o.useCallback(
            (e, t) => {
              (null == a ? void 0 : a.current) && a.current(),
                t.doc &&
                  t.doc != e.state.doc &&
                  ((i.current = e.state.doc), c(!0));
            },
            [a],
          ),
          u = o.useCallback(() => {
            if (i.current) {
              const n = s(i.current, e);
              t(n, i.current), c(!1);
            }
            i.current = void 0;
          }, [t, e]);
        return (
          o.useEffect(() => {
            if (!l) return;
            const e = window.setTimeout(u, r);
            return () => {
              window.clearTimeout(e), u();
            };
          }, [l, u, r]),
          { onUpdate: d, fnCommitPendingSave: u, bDirty: l }
        );
      }
    },
    22145: (e, t, n) => {
      "use strict";
      n.d(t, { KF: () => g, Ot: () => p, c$: () => h, Hd: () => f });
      var o = n(12362),
        r = n(7502),
        a = n(52893),
        s = n(90626),
        l = n(98724),
        c = n(79216),
        i = n(4188),
        d = n(37834);
      var u = n(15024);
      n(74763), n(45772);
      const m = s.createContext(null);
      function p(e) {
        return s.createElement(m.Provider, { value: e.view }, e.children);
      }
      const g = s.memo(function (e) {
        const { schema: t, onUpdate: n } = e,
          m = s.useRef(n);
        return (
          (m.current = n),
          h(
            s.useMemo(
              () =>
                new a.k_({
                  view: (e) => ({ update: (...e) => m.current(...e) }),
                }),
              [],
            ),
          ),
          h(s.useMemo(() => (0, u.z)(), [])),
          h(
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
                    ),
                    n = {
                      "Mod-z": l.tN,
                      "Mod-y": l.ZS,
                      Backspace: c.dv,
                      Escape: o.hy,
                      "Mod-Enter": t,
                      "Shift-Enter": t,
                      "Mod-b": (0, o.wh)(e.marks.strong),
                      "Mod-i": (0, o.wh)(e.marks.italic),
                      "Mod-u": (0, o.wh)(e.marks.underline),
                      Enter: (0, i.wn)(e.nodes.list_item),
                      "Mod-[": (0, i.T2)(e.nodes.list_item),
                      "Mod-]": (0, i.$B)(e.nodes.list_item),
                      "Shift-Ctrl-1": (0, o.y_)(e.nodes.heading, { level: 1 }),
                      "Shift-Ctrl-2": (0, o.y_)(e.nodes.heading, { level: 2 }),
                      "Shift-Ctrl-3": (0, o.y_)(e.nodes.heading, { level: 3 }),
                      "Shift-Ctrl-4": (0, o.y_)(e.nodes.heading, { level: 4 }),
                      "Shift-Ctrl-5": (0, o.y_)(e.nodes.heading, { level: 5 }),
                      "Shift-Ctrl-0": (0, o.y_)(e.nodes.paragraph),
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
                    (0, r.w)(n)
                  );
                })(t),
              [t],
            ),
          ),
          h(s.useMemo(() => (0, r.w)(o.RV), [])),
          h(
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
                      e.nodes.horizontal_rule &&
                        ((t = /^(\*\*\*|---|___)$/),
                        (n = e.nodes.horizontal_rule),
                        new c.fV(t, (e, t, o, r) =>
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
      function h(e) {
        const t = s.useContext(m);
        s.useEffect(() => {
          if (t && e && !t.isDestroyed)
            return (0, d.JD)(t, e), () => (0, d.xv)(t, e);
        }, [t, e]);
      }
      function f() {
        return s.useContext(m);
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
    37834: (e, t, n) => {
      "use strict";
      n.d(t, {
        Cd: () => l,
        JD: () => a,
        OX: () => d,
        bQ: () => u,
        gj: () => c,
        wt: () => i,
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
          if (void 0 === n ? r.type === t : r.hasMarkup(t, n))
            return o.before(e);
        }
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
    9024: (e, t, n) => {
      "use strict";
      n.d(t, { X: () => u, w: () => c });
      var o = n(33645),
        r = n.n(o),
        a = n(38539),
        s = n(55608),
        l = n(52038);
      const c = { NoBorder: "noborder", EqualCells: "equalcells" },
        i = a.of({
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
              (0, s.ce)(
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
                const n = {};
                e.noborder && (n.noborder = "1"),
                  e.equalcells && (n.equalcells = "1");
                const o = t.child(0);
                if (o) {
                  let e = [];
                  for (let t = 0; t < o.childCount; t++) {
                    const n = o.child(t).attrs;
                    n.colwidth ? e.push(...n.colwidth) : e.push(void 0);
                  }
                  n.colwidth = e.join(",");
                }
                return { args: n };
              },
            },
          },
          table_row: {
            ...i.table_row,
            toDOM: (0, s.BM)("tr", r().TableRow),
            bbCode: { tag: "tr" },
          },
          table_cell: { ...i.table_cell, bbCode: { ...d, tag: "td" } },
          table_header: { ...i.table_header, bbCode: { ...d, tag: "th" } },
        };
    },
    43775: (e, t, n) => {
      "use strict";
      n.d(t, { l: () => y });
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
      var u = n(98724),
        m = n(52893);
      var p = n(29287),
        g = n(22145),
        h = n(37834),
        f = n(90626),
        b = n(84811),
        _ = n(52038),
        k = n(61859),
        v = n(73745),
        C = n(73309),
        B = n(33645),
        T = n.n(B),
        E = n(38539),
        w = n(9024);
      const A = f.memo(function () {
        return (
          (0, g.c$)(f.useMemo(() => E.AL({ View: M }), [])),
          (0, g.c$)(f.useMemo(() => E.LF(), [])),
          null
        );
      });
      class M extends E.Qg {
        constructor(e, t) {
          super(e, t), this.SetTableClass(e);
        }
        update(e) {
          return !!super.update(e) && (this.SetTableClass(e), !0);
        }
        SetTableClass(e) {
          this.table.className = (0, _.A)(
            T().Table,
            e.attrs[w.w.NoBorder] && T().NoBorder,
            e.attrs[w.w.EqualCells] && T().EqualCells,
          );
        }
      }
      const y = (0, b.Nr)(function (e) {
        const {
            schemaConfig: t,
            bbcode: n,
            className: s,
            onUpdate: l,
            refView: c,
            bSpellcheckEnabled: i = !0,
            panelProps: b,
            children: B,
            dataKey: T,
          } = e,
          [E, w] = f.useState(),
          [M, y] = f.useState(),
          [D, N] = f.useState(),
          F = f.useRef(),
          O = f.useMemo(() => new d(t), [t]);
        f.useEffect(() => {
          N((e) =>
            (function (e, t, n) {
              var o;
              const r = (0, u.b6)();
              let a = [r];
              if (n) {
                const e =
                  null === (o = r.spec.key) || void 0 === o ? void 0 : o.get(n);
                a = [...n.plugins.filter((t) => t != e), r];
              }
              return m.$t.create({ schema: t, doc: e, plugins: a });
            })(O.ParseBBCode(n), t.pm_schema, e),
          );
        }, [t, n, O, T]),
          f.useEffect(() => {
            var e, t;
            if (!D || !E) return;
            const n =
              (null === (e = F.current) || void 0 === e
                ? void 0
                : e.initialState) == D
                ? F.current.view.state
                : D;
            null === (t = F.current) || void 0 === t || t.view.destroy(),
              (F.current = {
                view: new p.Lz(E, { state: n }),
                initialState: D,
              }),
              y(F.current.view);
          }, [D, E]),
          f.useEffect(() => () => (null == M ? void 0 : M.destroy()), [M]),
          (0, v.D5)(c, M);
        const {
            refDiv: x,
            onActivate: L,
            onGamepadDirection: P,
          } = (function (e) {
            const t = f.useRef(),
              n = (0, a.FN)(),
              o = f.useCallback(() => {
                if (
                  (n.ShowVirtualKeyboard(),
                  !(null == e ? void 0 : e.hasFocus()))
                ) {
                  e.focus();
                  let n = e.dom.childNodes;
                  for (let o = 0; o < n.length; ++o) {
                    let r = n[o],
                      a = r.offsetTop;
                    if (void 0 !== a && a >= t.current.scrollTop) {
                      let t = r.getBoundingClientRect();
                      (0, h.bQ)(e, t.left, t.top);
                      break;
                    }
                  }
                }
              }, [n, e]),
              s = f.useCallback((e) => e.currentTarget == e.target, []),
              l = (0, r.ak)(t, null, null, s);
            return { refDiv: t, onActivate: o, onGamepadDirection: l };
          })(M),
          $ = (0, v.Ue)(x, w);
        return f.createElement(
          g.Ot,
          { view: M },
          f.createElement(o.Z, {
            key: `editordiv_${i}`,
            className: (0, _.A)(s, C.Container),
            ref: $,
            spellCheck: i,
            focusable: !0,
            onActivate: L,
            onOKActionDescription: (0, k.we)("#UserGameNotes_Edit"),
            onGamepadDirection: P,
            ...b,
          }),
          f.createElement(g.KF, { onUpdate: l, schema: t.pm_schema }),
          f.createElement(S, { parser: O, schema: t.pm_schema }),
          "table" in t.pm_schema.nodes && f.createElement(A, null),
          B,
        );
      });
      const S = f.memo(function (e) {
        const { parser: t, schema: n } = e;
        return (
          (0, g.c$)(
            f.useMemo(
              () =>
                new m.k_({
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
                        return l.Ji.maxOpen(r);
                      })(t, n.nodes.hard_break, e),
                  },
                }),
              [t, n],
            ),
          ),
          null
        );
      });
    },
    79570: (e, t, n) => {
      "use strict";
      n.d(t, {
        Km: () => k,
        WJ: () => C,
        z9: () => E,
        C$: () => B,
        Hz: () => v,
        Nt: () => w,
        MV: () => _,
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
        const [_, k, v] = (0, p.uD)();
        return s.createElement(
          s.Fragment,
          null,
          s.createElement(
            i.EN,
            { active: _ },
            s.createElement(b, {
              schema: t,
              active: _,
              closeModal: v,
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
                  e.preventDefault(), k();
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
      function _() {
        return s.createElement(
          s.Fragment,
          null,
          s.createElement(
            d.cQ,
            { tooltip: "#FormattingToolbar_Undo", command: o.tN },
            s.createElement(l.VnB, null),
          ),
          s.createElement(
            d.cQ,
            { tooltip: "#FormattingToolbar_Redo", command: o.ZS },
            s.createElement(l.Bal, null),
          ),
        );
      }
      function k(e) {
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
      function v(e) {
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
      function C(e) {
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
      function B(e) {
        const { schema: t, showIndentButtonsAsNeeded: n = !1 } = e,
          { callbacks: o, view: a } = (0, d.wU)(),
          { bullet_list: c, ordered_list: i, list_item: u } = t.nodes,
          m = s.useMemo(() => r.T2(u), [u]),
          g = s.useMemo(() => r.$B(u), [u]),
          [h, f] = s.useState(() => m(a.state) || g(a.state));
        return (
          (0, p.hL)(
            o,
            s.useCallback(
              (e) => {
                f(m(e.state) || g(e.state));
              },
              [m, g],
            ),
          ),
          s.createElement(
            s.Fragment,
            null,
            s.createElement(
              T,
              {
                tooltip: "#FormattingToolbar_BulletedList",
                list_type: c,
                list_item: u,
              },
              s.createElement(l.JPq, null),
            ),
            i && !1,
            (!n || h) &&
              s.createElement(
                s.Fragment,
                null,
                s.createElement(
                  d.cQ,
                  { tooltip: "#FormattingToolbar_OutdentList", command: m },
                  s.createElement(l.LSz, null),
                ),
                s.createElement(
                  d.cQ,
                  { tooltip: "#FormattingToolbar_IndentList", command: g },
                  s.createElement(l.ycU, null),
                ),
              ),
          )
        );
      }
      function T(e) {
        const { list_type: t, list_item: n, tooltip: o, children: l } = e,
          { callbacks: c, view: i } = (0, d.wU)(),
          u = s.useCallback((e) => void 0 !== (0, a.wt)(e.state, t), [t]),
          [m, g] = s.useState(() => u(i)),
          h = s.useMemo(() => r.Sd(t), [t]),
          f = s.useMemo(() => r.T2(n), [n]);
        return (
          (0, p.hL)(
            c,
            s.useCallback(
              (e) => {
                g(u(e));
              },
              [u],
            ),
          ),
          s.createElement(
            d.cQ,
            { tooltip: o, toggled: m, command: m ? f : h },
            l,
          )
        );
      }
      function E(e) {
        const { schema: t } = e;
        return s.createElement(f, { schema: t }, s.createElement(l.YqK, null));
      }
      function w(e) {
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
        Ez: () => _,
        GY: () => v,
        XQ: () => f,
        bI: () => g,
        cQ: () => C,
        ff: () => B,
        hK: () => b,
        u3: () => k,
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
      function _(e) {
        return a.createElement(
          s.Z,
          {
            className: (0, i.A)(e.className, u.ToolbarRow),
            "flow-children": "row",
          },
          e.children,
        );
      }
      function k(e) {
        const { nodeType: t, tooltip: n, attrs: s, children: l } = e,
          { callbacks: c, view: i } = p(),
          [u, m] = a.useState(() => (0, o.gj)(i.state, t, s)),
          g = a.useCallback((e) => m((0, o.gj)(e.state, t, s)), [t, s]);
        (0, d.hL)(c, g);
        const h = a.useMemo(() => r.y_(t, s), [s, t]);
        return a.createElement(C, {
          command: h,
          tooltip: n,
          toggled: u,
          children: l,
        });
      }
      function v(e) {
        const { mark: t, tooltip: n, children: s } = e,
          { callbacks: l, view: c } = p(),
          [i, u] = a.useState(() => (0, o.Cd)(c.state, t)),
          m = a.useCallback((e) => u((0, o.Cd)(e.state, t)), [t]);
        (0, d.hL)(l, m);
        const g = a.useMemo(() => r.wh(t), [t]);
        return a.createElement(C, {
          command: g,
          tooltip: n,
          toggled: i,
          children: s,
        });
      }
      function C(e) {
        const { command: t, toggled: n, tooltip: o, children: r } = e,
          { view: s, callbacks: c } = p(),
          [g, h] = a.useState(() => t(s.state));
        (0, d.hL)(
          c,
          a.useCallback((e) => h(t(e.state)), [t]),
        ),
          a.useEffect(() => h(t(s.state)), [t, s]);
        const f = !g && !n;
        return a.createElement(
          m.Gq,
          { toolTipContent: o, bDisabled: !o, direction: "bottom" },
          a.createElement(
            l.$n,
            {
              className: (0, i.A)(u.CommandButton, n && u.Toggled),
              onMouseDown: (e) => {
                e.preventDefault(), t(s.state, s.dispatch, s);
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
