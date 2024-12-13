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
    43651: (e, t, n) => {
      "use strict";
      n.d(t, { U: () => Xe });
      var o = n(90039),
        a = n(42898),
        r = n(37195),
        s = n(67599),
        l = n(43780),
        c = n(81429),
        i = n(85688);
      class m {
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
      function d(e) {
        return e
          .filter((e) => e.isText)
          .map((e) => e.text)
          .join();
      }
      class u extends l.Al {
        m_schemaConfig;
        m_mapPMBBNodes = new Map();
        constructor(e) {
          super(e.bbcode_dictionary, () => new m(e.pm_schema)),
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
        TryCreateNode(e, t, n) {
          let o = c.FK.from(t);
          if (!e.node.validContent(o) && e.acceptNode) {
            let n = t.filter((t) => t.type == e.acceptNode);
            if (!n.length) {
              let o = t;
              e.acceptNode.isBlock &&
                o.length > 1 &&
                o[o.length - 1].type == this.schema.nodes.hard_break &&
                (o = o.slice(0, -1));
              const a = this.m_mapPMBBNodes.get(e.acceptNode.name);
              (0, i.w)(
                a,
                `Indicated acceptNode type ${e.acceptNode.name} for ${e.node.name} missing`,
              ),
                (n = a
                  ? [this.TryCreateNode(a, o, void 0)]
                  : [e.acceptNode.create(void 0, o)]);
            }
            o = c.FK.from(n);
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
                  (o = { ...(o || {}), [e.convertContentToAttr]: d(n) }),
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
            a = {
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
              const r = e.type == n.nodes.hard_break,
                s = c.FK.from(e);
              if (r || n.topNodeType.validContent(s)) {
                const t = r && a.nodes.length > 0;
                a.emit(),
                  r
                    ? t || o.push(n.nodes.paragraph.createChecked())
                    : o.push(e);
              } else {
                let o;
                (o = n.nodes.paragraph.validContent(s)
                  ? n.nodes.paragraph
                  : t.get(e.type.name)),
                  o
                    ? a.accumulate(o, e)
                    : ((0, i.w)(
                        !1,
                        `Couldn't accept ${e.type.name} at root of document, converting to paragraph`,
                      ),
                      (o = n.nodes.paragraph),
                      a.accumulate(
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
            (!a.nodes.length && o.length) || a.emit(!0),
            c.FK.from(o)
          );
        }
      }
      function p(e, t) {
        return h(t.pm_schema, t.pm_to_bbcode_config, e, []);
      }
      function h(e, t, n, o) {
        let a = n.marks,
          r = "";
        const s = t.mapNodes.get(n.type),
          { tag: c, args: m } = (function (e, t) {
            if (e && e.AttrsToBBArgs) {
              const { tag: n = e.tag, args: o = {} } = e.AttrsToBBArgs(
                t.attrs,
                t,
              );
              return { tag: n, args: o };
            }
            return { tag: e?.tag, args: {} };
          })(s, n);
        return (
          c && (r += (0, l.CS)(c, m)),
          n.content.forEach((n) => {
            ([r, a] = g(t, a, n.marks, r)),
              ([r, a] = (function (e, t, n, o) {
                let a;
                for (const r of n)
                  if (-1 === t.indexOf(r)) {
                    a || (a = t.slice());
                    const n = e.mapMarks.get(r.type);
                    if (((0, i.w)(n, "mark missing bbtag"), n)) {
                      a.push(r);
                      const { args: e, tag: t } = f(n, r);
                      o += (0, l.CS)(t, e);
                    }
                  }
                return [o, a ?? t];
              })(t, a, n.marks, r)),
              n.type.isText
                ? (r += (0, l.vE)(n.text || ""))
                : n.type == e.nodes.hard_break
                  ? (r += "\n")
                  : (r += h(e, t, n, a));
          }),
          ([r] = g(t, a, o, r)),
          c && (r += (0, l.op)(c)),
          r
        );
      }
      function g(e, t, n, o) {
        const a = [];
        for (const e of t) -1 === n.indexOf(e) && a.push(e);
        if (!a.length) return [o, t];
        const r = t.slice();
        for (
          ;
          a.length && ((0, i.w)(r.length, "no marks left to close"), r.length);
        ) {
          const t = r.pop(),
            n = e.mapMarks.get(t.type),
            { tag: s } = f(n, t);
          o += (0, l.op)(s);
          const c = a.indexOf(t);
          -1 != c && a.splice(c, 1);
        }
        return [o, r];
      }
      function f(e, t) {
        if (e && e.AttrsToBBArgs) {
          const { tag: n = e.tag, args: o = {} } = e.AttrsToBBArgs(t.attrs, t);
          return { tag: n, args: o };
        }
        return { tag: e?.tag, args: {} };
      }
      const b = new s.hs("CProseMirrorState - OnChange");
      class _ {
        m_bbcode;
        m_currentDoc;
        m_bHasUncomittedChanges = !1;
        m_schemaConfig;
        m_bbcodeParser;
        m_onStateChangedCallbacks = new o.l();
        m_fnCommitChanges;
        m_view;
        m_state;
        constructor(e, t, n) {
          (this.m_schemaConfig = e),
            (this.m_bbcodeParser = new u(e)),
            (this.m_bbcode = t),
            (this.m_fnCommitChanges = n),
            (this.m_state = this.ConstructState());
        }
        CommitChanges() {
          this.m_currentDoc &&
            this.m_bHasUncomittedChanges &&
            ((this.m_bbcode = p(this.m_currentDoc, this.m_schemaConfig)),
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
          const e = new s.k_({
            key: b,
            view: (e) => (
              console.assert(!this.m_view),
              (this.m_view = e),
              {
                update: (e, t) => this.OnStateChange(t, e.state),
                destroy: () => (this.m_view = void 0),
              }
            ),
          });
          return s.$t.create({
            schema: this.m_schemaConfig.pm_schema,
            doc: this.m_bbcodeParser.ParseBBCode(this.m_bbcode),
            plugins: [(0, r.b6)(), e],
          });
        }
        InstallPlugin(e) {
          const t = this.m_view ? this.m_view.state : this.m_state;
          return (
            t.plugins.includes(e) ||
              ((this.m_state = t.reconfigure({ plugins: [...t.plugins, e] })),
              this.m_view?.updateState(t)),
            () => {
              const t = this.m_view ? this.m_view.state : this.m_state;
              (this.m_state = t.reconfigure({
                plugins: t.plugins.filter((t) => t != e),
              })),
                this.m_view?.updateState(this.m_state);
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
      var E = n(63696);
      function C(e, t) {
        const { msAutosaveTimeout: n = 1e3 } = t || {},
          [o, r] = E.useState(!1);
        return (
          (function (e, t) {
            (0, a.hL)(e?.OnStateChangedCallbacks, t);
          })(
            e,
            E.useCallback(() => {
              r(!0);
            }, []),
          ),
          E.useEffect(() => {
            if (!o || !e) return;
            const t = () => {
                e.CommitChanges(), r(!1);
              },
              a = window.setTimeout(t, n);
            return () => {
              window.clearTimeout(a), t();
            };
          }, [o, e, n]),
          { bDirty: o }
        );
      }
      var k = n(17372),
        T = n(46108),
        v = n(87300),
        w = n(30814),
        B = n(62738),
        N = n(16486),
        A = n(18305);
      function M(e, t) {
        const { from: n, $from: o, to: a, empty: r } = e.selection;
        return r
          ? !!t.isInSet(e.storedMarks || o.marks())
          : e.doc.rangeHasMark(n, a, t);
      }
      function y(e, t, n) {
        let { $from: o, to: a, node: r } = e.selection;
        return !r && a <= o.end() && (r = o.parent), !!r && r.hasMarkup(t, n);
      }
      function S(e, t, n) {
        const { $from: o, to: a } = e.selection;
        for (let e = o.sharedDepth(a); e > 0; e--) {
          const a = o.node(e);
          if (void 0 === n ? a.type === t : a.hasMarkup(t, n))
            return o.before(e);
        }
      }
      function D(e, t, n = {}) {
        return new N.fV(e, (e, o, a, r) => {
          const s = n instanceof Function ? n(o) : n,
            l = e.tr;
          if (o[1]) {
            const e = a + o[0].indexOf(o[1]),
              t = e + o[1].length;
            t < r && l.delete(t, r),
              e > a && l.delete(a, e),
              (r = a + o[1].length);
          }
          return l.addMark(a, r, t.create(s)), l.removeStoredMark(t), l;
        });
      }
      function P(e, t, n) {
        const o = { left: t, top: n },
          a = e.posAtCoords(o);
        if (a?.pos) {
          const t = e.state.doc.resolve(a.pos);
          e.dispatch(e.state.tr.setSelection(s.U3.near(t)));
        }
      }
      n(45772), n(74763);
      const O = E.createContext(void 0);
      function x(e) {
        const { view: t, pmState: n, children: o } = e,
          a = E.useMemo(() => ({ view: t, pmState: n }), [t, n]);
        return E.createElement(O.Provider, { value: a }, o);
      }
      const F = E.memo(function (e) {
        const { schema: t, refOnUpdate: n } = e;
        return (
          L(
            E.useMemo(
              () =>
                n &&
                new s.k_({
                  view: (e) => ({
                    update: (...e) => n.current && n.current(...e),
                  }),
                }),
              [n],
            ),
          ),
          L(E.useMemo(() => (0, w.z)(), [])),
          L(
            E.useMemo(
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
                    ),
                    n = {
                      "Mod-z": r.tN,
                      "Mod-y": r.ZS,
                      Backspace: N.dv,
                      Escape: v.hy,
                      "Mod-Enter": t,
                      "Shift-Enter": t,
                      "Mod-b": (0, v.wh)(e.marks.strong),
                      "Mod-i": (0, v.wh)(e.marks.italic),
                      "Mod-u": (0, v.wh)(e.marks.underline),
                      Enter: (0, A.wn)(e.nodes.list_item),
                      "Mod-[": (0, A.T2)(e.nodes.list_item),
                      "Mod-]": (0, A.$B)(e.nodes.list_item),
                      "Shift-Ctrl-1": (0, v.y_)(e.nodes.heading, { level: 1 }),
                      "Shift-Ctrl-2": (0, v.y_)(e.nodes.heading, { level: 2 }),
                      "Shift-Ctrl-3": (0, v.y_)(e.nodes.heading, { level: 3 }),
                      "Shift-Ctrl-4": (0, v.y_)(e.nodes.heading, { level: 4 }),
                      "Shift-Ctrl-5": (0, v.y_)(e.nodes.heading, { level: 5 }),
                      "Shift-Ctrl-0": (0, v.y_)(e.nodes.paragraph),
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
                    (0, B.w)(n)
                  );
                })(t),
              [t],
            ),
          ),
          L(E.useMemo(() => (0, B.w)(v.RV), [])),
          L(
            E.useMemo(
              () =>
                (function (e) {
                  return (0, N.sM)({
                    rules: [
                      (0, N.tG)(
                        /^(\d+)\.\s$/,
                        e.nodes.ordered_list,
                        (e) => ({ order: parseInt(e[1]) }),
                        (e, t) =>
                          t.childCount + t.attrs.order == parseInt(e[1]),
                      ),
                      (0, N.tG)(/^\s*([-+*])\s$/, e.nodes.bullet_list),
                      D(/\*([^*]+)\*/, e.marks.strong),
                      D(/_([^_]+)_/, e.marks.italic),
                      D(/~([^~]+)~/, e.marks.strike),
                      D(/`([^`]+)`/, e.marks.code),
                      (0, N.JJ)(/^```$/, e.nodes.code_block),
                      (0, N.JJ)(/^(#{1,5})\s$/, e.nodes.heading, (e) => ({
                        level: e[1].length,
                      })),
                      e.nodes.horizontal_rule &&
                        ((t = /^(\*\*\*|---|___)$/),
                        (n = e.nodes.horizontal_rule),
                        new N.fV(t, (e, t, o, a) =>
                          e.tr.replaceWith(o, a, n.create()),
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
      function L(e) {
        const { pmState: t } = E.useContext(O);
        E.useEffect(() => {
          if (t && e) return t.InstallPlugin(e);
        }, [e, t]);
      }
      var U = n(48139);
      const I = E.memo(function (e) {
        const {
            linkMarkType: t,
            onURLPasted: n,
            schema: o,
            onClickURL: a = $,
          } = e,
          r = E.useRef(a);
        r.current = a;
        const [l, i] = E.useState(),
          [m, d] = E.useState(),
          [u, p] = E.useState(),
          h = E.useMemo(
            () =>
              new s.k_({
                props: {
                  handleClickOn(e, n, o, a, s, l) {
                    if (l && (s.ctrlKey || 1 == s.button)) {
                      const e = o
                        .resolve(n - a)
                        .marks()
                        .find((e) => e.type == t);
                      if (e)
                        return (
                          r.current(e.attrs.href, s.view),
                          s.preventDefault(),
                          !0
                        );
                    }
                    return !1;
                  },
                  clipboardTextParser(e, a, r, s) {
                    let l,
                      i = [];
                    for (; (l = e.match(k.O)); ) {
                      l.index > 0 && i.push(o.text(e.substring(0, l.index)));
                      const a = (0, k.S)(l[0]),
                        r = n && n(a);
                      r && "default" !== r
                        ? "remove" !== r && i.push(r)
                        : i.push(o.text(l[0], [t.create({ href: a })])),
                        (e = e.substring(l.index + l[0].length));
                    }
                    return (
                      e.length && i.push(o.text(e)),
                      new c.Ji(c.FK.from(i), a.start(), a.end())
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
                        i(e.left + e.width / 2), d(e.bottom + 2), p(n);
                      } else p(void 0);
                      return !1;
                    },
                    mouseleave: (e, t) => (p(void 0), !1),
                  },
                },
              }),
            [t, n, o],
          );
        if ((L(h), !u || !m || !l)) return null;
        const g = u.getAttribute("href");
        return E.createElement(
          G,
          { top: m, left: l },
          E.createElement("div", { className: U.Link }, g),
          E.createElement(
            "div",
            { className: U.LinkHelp },
            (0, T.we)("#UserGameNotes_ClickToOpenLink"),
          ),
        );
      });
      function G(e) {
        const { top: t, left: n, children: o } = e,
          [a, r] = E.useState(0),
          s = E.useRef(null);
        E.useLayoutEffect(() => {
          r(s.current.getBoundingClientRect().width);
        }, [t, n, o]);
        const l = { top: `${t}px`, left: `${Math.max(n - a / 2, 12)}px` };
        return E.createElement(
          "div",
          { className: U.Hover, style: l, ref: s },
          o,
        );
      }
      function $(e, t) {
        t.open(e);
      }
      var R = n(49787),
        H = n.n(R),
        K = n(90765);
      function W(e, t, n = 0) {
        return () => [e, { class: t }, n];
      }
      const q = {
          paragraph: {
            content: "inline*",
            group: "block",
            parseDOM: [{ tag: "p" }],
            toDOM: W("p", (0, K.A)("pm_paragraph", H().Paragraph)),
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
                  `BB_Header${e.attrs.level} ` + H()[`Header${e.attrs.level}`],
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
              return ["img", { src: t, alt: n, title: o, class: H().Image }];
            },
            bbCode: {
              tag: "img",
              BBArgsToAttrs: (e) => ({ src: e.src }),
              AttrsToBBArgs: (e) => ({ args: { src: e.src } }),
              convertContentToAttr: "src",
            },
          },
          bullet_list: {
            ...A.fF,
            content: "list_item+",
            group: "block",
            toDOM: W("ul", H().List),
            bbCode: { tag: "list" },
          },
          ordered_list: {
            ...A.o8,
            content: "list_item+",
            group: "block",
            toDOM: W("ol", H().OrderedList),
            bbCode: { tag: "olist" },
          },
          list_item: {
            ...A.Aw,
            content: "paragraph block*",
            toDOM: W("li", H().ListItem),
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
              { class: H().CodeBlock },
              ["code", { class: H().Code }, 0],
            ],
            bbCode: { tag: "code" },
          },
        },
        V = {
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
            toDOM: W("b", (0, K.A)("BB_Bold", H().Bold)),
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
            toDOM: W("i", (0, K.A)("BB_Italic", H().Italic)),
            bbCode: { tag: "i" },
          },
          underline: {
            parseDOM: [{ tag: "u" }, { style: "text-decoration=underline" }],
            toDOM: W("u", (0, K.A)("BB_Underline", H().Underline)),
            bbCode: { tag: "u" },
          },
          strike: {
            parseDOM: [{ style: "text-decoration=line-through" }],
            toDOM: W("span", (0, K.A)("BB_Strike", H().Strike)),
            bbCode: { tag: "strike" },
          },
          code: {
            parseDOM: [{ tag: "code" }],
            toDOM: W("code", (0, K.A)("BB_Code", H().Code)),
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
      function z(e, t) {
        if (t) {
          if (Array.isArray(e)) {
            const n = e.filter((e) => t.has(e.tag));
            return n.length > 0 ? n : void 0;
          }
          return t.has(e.tag) ? e : void 0;
        }
        return e;
      }
      const j = { nodes: { ...q }, marks: { ...V } },
        J = new (class {
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
              a = new Map(),
              r = t ? new Set(t) : void 0;
            for (const t in e.nodes) {
              const { bbCode: a, ...s } = e.nodes[t],
                l = z(a, r);
              l && ((n[t] = s), o.set(t, l));
            }
            const s = {};
            for (const t in e.marks) {
              const { bbCode: n, ...o } = e.marks[t];
              (r && !r.has(n.tag)) || ((s[t] = o), a.set(t, n));
            }
            (this.m_ProseMirrorSchema = new c.Sj({ nodes: n, marks: s })),
              o.forEach((t, n) => {
                const o = this.m_ProseMirrorSchema.nodes[n],
                  a = e.nodes[n],
                  r = Array.isArray(t) ? t : [t];
                let s;
                "list_item+" == a.content
                  ? (s = this.m_ProseMirrorSchema.nodes.list_item)
                  : -1 != a.content?.indexOf("paragraph") &&
                    (s = this.m_ProseMirrorSchema.nodes.paragraph),
                  r.forEach(
                    ({
                      tag: e,
                      BBArgsToAttrs: t,
                      AttrsToBBArgs: n,
                      convertContentToAttr: a,
                      ...r
                    }) => {
                      this.m_mapBBCodeDictionary.set(e, {
                        Constructor: {
                          node: o,
                          BBArgsToAttrs: t,
                          convertContentToAttr: a,
                          acceptNode: s,
                        },
                        skipFollowingNewline: !0,
                        ...r,
                      });
                    },
                  );
                const { tag: l, AttrsToBBArgs: c } = r[0];
                this.m_PMToBBCodeConfig.mapNodes.set(o, {
                  tag: l,
                  AttrsToBBArgs: c,
                });
              }),
              a.forEach((e, t) => {
                const n = this.m_ProseMirrorSchema.marks[t],
                  { tag: o, BBArgsToAttrs: a, AttrsToBBArgs: r, ...s } = e;
                this.m_mapBBCodeDictionary.set(o, {
                  Constructor: { mark: n, BBArgsToAttrs: a },
                  ...s,
                }),
                  this.m_PMToBBCodeConfig.mapMarks.set(n, {
                    tag: o,
                    AttrsToBBArgs: r,
                  });
              });
          }
        })(j);
      var Q = n(45264),
        X = n(38602),
        Z = n(94361),
        Y = n(64608),
        ee = n(35488),
        te = n(10606),
        ne = n(90601);
      const oe = "/images/image_error.svg";
      function ae(e) {
        const { uploadImage: t, nodeType: n, nMaxImageSize: o = se } = e;
        return (
          L(
            E.useMemo(
              () =>
                new s.k_({
                  key: new s.hs(`PMUploadImage_${n.name}`),
                  props: {
                    transformPasted: (...e) =>
                      (function (e, t, n, o) {
                        let a = !1;
                        if (
                          (n.content.descendants((n, o) => {
                            n.type == e && n.attrs.src.length > t && (a = !0);
                          }),
                          a)
                        ) {
                          let t = [
                            e.create({
                              src: oe,
                              title: (0, T.we)("#UserGameNotes_ImageTooLarge"),
                            }),
                          ];
                          return new c.Ji(c.FK.from(t), 0, 0);
                        }
                        return n;
                      })(n, o, ...e),
                    handlePaste: (e, o, a) => {
                      const r = [];
                      a.content.descendants((e) => {
                        e.type == n &&
                          e.attrs.src.startsWith("data:image") &&
                          r.push(e.attrs.src);
                      }),
                        r.length > 0 &&
                          setTimeout(() => {
                            !(async function (e, t, n) {
                              for (const o of e) {
                                const e = await fetch(o),
                                  a = await e.blob(),
                                  r = (0, ne.wI)(await a.arrayBuffer());
                                re(
                                  o,
                                  await n(e.headers.get("Content-Type"), r),
                                  t,
                                );
                              }
                            })(r, e, t);
                          }, 100);
                    },
                  },
                }),
              [t, o, n],
            ),
          ),
          null
        );
      }
      function re(e, t, n) {
        n.state.doc.descendants((o, a) => {
          if ("image" === o.type.name && o.attrs.src === e) {
            const e = n.state.tr.setNodeAttribute(a, "src", t);
            n.dispatch(e);
          }
        });
      }
      const se = 1048576;
      var le = n(69164),
        ce = n(69),
        ie = n(41537),
        me = n(91633),
        de = n(42318),
        ue = n(87429);
      const pe = "noborder",
        he = "equalcells",
        ge = ue.of({
          tableGroup: "block",
          cellContent: "paragraph block*",
          cellAttributes: {
            class: {
              default: H().TableCell,
              setDOMAttr: (e, t) => {
                t.class = e;
              },
            },
          },
        }),
        fe = {
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
        be =
          (ge.table,
          ge.table_row,
          W("tr", H().TableRow),
          ge.table_cell,
          ge.table_header,
          E.memo(function () {
            return (
              L(E.useMemo(() => ue.AL({ View: _e }), [])),
              L(E.useMemo(() => ue.LF(), [])),
              null
            );
          }));
      class _e extends ue.Qg {
        constructor(e, t) {
          super(e, t), this.SetTableClass(e);
        }
        update(e) {
          return !!super.update(e) && (this.SetTableClass(e), !0);
        }
        SetTableClass(e) {
          this.table.className = (0, K.A)(
            H().Table,
            e.attrs[pe] && H().NoBorder,
            e.attrs[he] && H().EqualCells,
          );
        }
      }
      var Ee = n(52451),
        Ce = n(76627);
      const ke = (0, de.Nr)(function (e) {
        const {
            pmState: t,
            className: n,
            refOnUpdate: o,
            refView: a,
            bSpellcheckEnabled: r = !0,
            panelProps: s,
            children: l,
          } = e,
          [c, i] = E.useState(),
          [m, d] = E.useState();
        E.useEffect(() => {
          t && c && d(new me.Lz(c, { state: t.state }));
        }, [t, c]),
          E.useEffect(() => () => m?.destroy(), [m]),
          (0, Ee.D5)(a, m);
        const {
            refDiv: u,
            onActivate: p,
            onGamepadDirection: h,
          } = (function (e) {
            const t = E.useRef(),
              n = (0, ie.FN)(),
              o = E.useCallback(() => {
                n.ShowVirtualKeyboard();
                let o = e?.hasFocus();
                if (!o) {
                  e.focus();
                  let n = e.dom.childNodes;
                  for (let o = 0; o < n.length; ++o) {
                    let a = n[o],
                      r = a.offsetTop;
                    if (void 0 !== r && r >= t.current.scrollTop) {
                      let t = a.getBoundingClientRect();
                      P(e, t.left, t.top);
                      break;
                    }
                  }
                }
              }, [n, e]),
              a = E.useCallback((e) => e.currentTarget == e.target, []),
              r = (0, ce.ak)(t, null, null, a);
            return { refDiv: t, onActivate: o, onGamepadDirection: r };
          })(m),
          g = (0, Ee.Ue)(u, i);
        if (!t) return null;
        const { schemaConfig: f, bbcodeParser: b } = t;
        return E.createElement(
          x,
          { view: m, pmState: t },
          E.createElement(le.Z, {
            key: `editordiv_${r}`,
            className: (0, K.A)(n, Ce.Container),
            ref: g,
            spellCheck: r,
            focusable: !0,
            onActivate: p,
            onOKActionDescription: (0, T.we)("#UserGameNotes_Edit"),
            onGamepadDirection: h,
            ...s,
          }),
          E.createElement(F, { refOnUpdate: o, schema: f.pm_schema }),
          E.createElement(Te, { parser: b, schema: f.pm_schema }),
          "table" in f.pm_schema.nodes && E.createElement(be, null),
          l,
        );
      });
      const Te = E.memo(function (e) {
        const { parser: t, schema: n } = e;
        return (
          L(
            E.useMemo(
              () =>
                new s.k_({
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
                        const a = e.ConvertLineBreaksToParagraphs(n.content);
                        return c.Ji.maxOpen(a);
                      })(t, n.nodes.hard_break, e),
                  },
                }),
              [t, n],
            ),
          ),
          null
        );
      });
      var ve = n(98995),
        we = n(72476),
        Be = n(71594),
        Ne = n(79769);
      const Ae = () => E.useContext(ye);
      function Me(e) {
        const { view: t, refUpdateToolbar: n, children: o } = e,
          a = E.useRef();
        a.current || (a.current = new Ne.lu()),
          E.useEffect(
            () => (
              (0, Ee.cZ)(n, () => a.current.Dispatch(t)),
              () => (0, Ee.cZ)(n, void 0)
            ),
            [t, n],
          );
        const r = E.useMemo(() => ({ callbacks: a.current, view: t }), [t]);
        return t ? E.createElement(ye.Provider, { value: r }, o) : null;
      }
      const ye = E.createContext(void 0);
      function Se() {
        return E.createElement("div", { className: Ce.Gap });
      }
      function De() {
        return E.createElement("div", { className: Ce.Spacer });
      }
      function Pe(e) {
        return E.createElement(
          le.Z,
          {
            className: (0, K.A)(e.className, Ce.ToolbarRow),
            "flow-children": "row",
          },
          e.children,
        );
      }
      function Oe(e) {
        const { nodeType: t, tooltip: n, attrs: o, children: a } = e,
          { callbacks: r, view: s } = Ae(),
          [l, c] = E.useState(() => y(s.state, t, o)),
          i = E.useCallback((e) => c(y(e.state, t, o)), [t, o]);
        (0, Ee.hL)(r, i);
        const m = E.useMemo(() => v.y_(t, o), [o, t]);
        return E.createElement(Fe, {
          command: m,
          tooltip: n,
          toggled: l,
          children: a,
        });
      }
      function xe(e) {
        const { mark: t, tooltip: n, children: o } = e,
          { callbacks: a, view: r } = Ae(),
          [s, l] = E.useState(() => M(r.state, t)),
          c = E.useCallback((e) => l(M(e.state, t)), [t]);
        (0, Ee.hL)(a, c);
        const i = E.useMemo(() => v.wh(t), [t]);
        return E.createElement(Fe, {
          command: i,
          tooltip: n,
          toggled: s,
          children: o,
        });
      }
      function Fe(e) {
        const { command: t, toggled: n, tooltip: o, children: a } = e,
          { view: r, callbacks: s } = Ae(),
          [l, c] = E.useState(() => t(r.state));
        (0, Ee.hL)(
          s,
          E.useCallback((e) => c(t(e.state)), [t]),
        ),
          E.useEffect(() => c(t(r.state)), [t, r]);
        const i = !l && !n;
        return E.createElement(
          ve.Gq,
          { toolTipContent: o, bDisabled: !o, direction: "bottom" },
          E.createElement(
            Y.$n,
            {
              className: (0, K.A)(Ce.CommandButton, n && Ce.Toggled),
              onMouseDown: (e) => {
                e.preventDefault(), t(r.state, r.dispatch, r);
              },
              disabled: i,
              focusable: !i,
            },
            a,
          ),
        );
      }
      function Le(e) {
        const {
          onClick: t,
          toggled: n,
          tooltip: o,
          disabled: a,
          children: r,
        } = e;
        return E.createElement(
          ve.Gq,
          { toolTipContent: o, bDisabled: !o, direction: "bottom" },
          E.createElement(
            Y.$n,
            {
              className: (0, K.A)(Ce.CommandButton, n && Ce.Toggled),
              onMouseDown: (e) => {
                e.preventDefault(), t();
              },
              disabled: !0 === a,
            },
            r,
          ),
        );
      }
      function Ue(e) {
        const { schema: t, children: n } = e,
          { callbacks: o, view: a } = Ae(),
          [r, s] = E.useState(() => M(a.state, t.marks.link)),
          l = E.useCallback((e) => s(M(e.state, t.marks.link)), [t]);
        (0, Ee.hL)(o, l);
        const [c, i, m] = (0, Ee.uD)();
        return E.createElement(
          E.Fragment,
          null,
          E.createElement(
            te.EN,
            { active: c },
            E.createElement(Ie, {
              schema: t,
              active: c,
              closeModal: m,
              view: a,
            }),
          ),
          E.createElement(
            ve.Gq,
            {
              toolTipContent: "#FormattingToolbar_InsertLink",
              direction: "bottom",
            },
            E.createElement(
              Y.$n,
              {
                className: (0, K.A)(Ce.CommandButton, r && Ce.Toggled),
                onMouseDown: (e) => {
                  e.preventDefault(), i();
                },
              },
              n,
            ),
          ),
        );
      }
      const Ie = E.memo(function (e) {
        const { schema: t, active: n, closeModal: o, view: a } = e,
          [r, s] = E.useState(""),
          [l, c] = E.useState(""),
          i = E.useRef(),
          m = E.useRef();
        return (
          E.useLayoutEffect(() => {
            if (n) {
              let e = "";
              a.state.selection.empty ||
                (e = a.state.doc.cut(
                  a.state.selection.from,
                  a.state.selection.to,
                ).textContent),
                s(e),
                e.startsWith("http")
                  ? (c(e),
                    i.current.Focus(),
                    window.setTimeout(() => {
                      i.current.element.select();
                    }, 0))
                  : 0 == e.length
                    ? i.current.Focus()
                    : m.current.Focus();
            }
          }, [n, a]),
          E.createElement(
            te.o0,
            {
              onOK: () => {
                a.dispatch(
                  a.state.tr.replaceRangeWith(
                    a.state.selection.from,
                    a.state.selection.to,
                    t.text(r || l, [t.marks.link.create({ href: l })]),
                  ),
                ),
                  a.focus(),
                  o();
              },
              closeModal: o,
              strTitle: (0, T.we)("#FormattingToolbar_InsertLink"),
              strOKButtonText: (0, T.we)("#FormattingToolbar_InsertLink"),
              bOKDisabled: 0 == l.length,
            },
            E.createElement(Y.pd, {
              ref: i,
              value: r,
              onChange: (e) => s(e.currentTarget.value),
              label: (0, T.we)("#FormattingToolbar_LinkText"),
            }),
            E.createElement(Y.pd, {
              ref: m,
              value: l,
              onChange: (e) => c(e.currentTarget.value),
              label: (0, T.we)("#FormattingToolbar_LinkAddress"),
            }),
          )
        );
      });
      function Ge() {
        return E.createElement(
          E.Fragment,
          null,
          E.createElement(
            Fe,
            { tooltip: "#FormattingToolbar_Undo", command: r.tN },
            E.createElement(ee.Undo, null),
          ),
          E.createElement(
            Fe,
            { tooltip: "#FormattingToolbar_Redo", command: r.ZS },
            E.createElement(ee.Redo, null),
          ),
        );
      }
      function $e(e) {
        const { schema: t } = e;
        return E.createElement(
          E.Fragment,
          null,
          E.createElement(
            xe,
            { tooltip: "#FormattingToolbar_Bold", mark: t.marks.strong },
            E.createElement(ee.TextBold, null),
          ),
          E.createElement(
            xe,
            { tooltip: "#FormattingToolbar_Italic", mark: t.marks.italic },
            E.createElement(ee.TextItalic, null),
          ),
          E.createElement(
            xe,
            {
              tooltip: "#FormattingToolbar_Underline",
              mark: t.marks.underline,
            },
            E.createElement(ee.TextUnderline, null),
          ),
          "strike" in t.marks &&
            E.createElement(
              xe,
              { tooltip: "#FormattingToolbar_Strike", mark: t.marks.strike },
              E.createElement(ee.TextStrikethrough, null),
            ),
          "code" in t.marks &&
            E.createElement(
              xe,
              { tooltip: "#FormattingToolbar_InlineCode", mark: t.marks.code },
              E.createElement(ee.TextCode, null),
            ),
        );
      }
      function Re(e) {
        const { schema: t } = e;
        return E.createElement(
          Oe,
          {
            tooltip: "#FormattingToolbar_Paragraph",
            nodeType: t.nodes.paragraph,
          },
          E.createElement(ee.TextParagraph, null),
        );
      }
      function He(e) {
        const { schema: t, maxLevel: n = 1, levels: o } = e,
          a = n + o - 1;
        return E.createElement(
          E.Fragment,
          null,
          n <= 1 &&
            E.createElement(
              Oe,
              {
                tooltip: "#FormattingToolbar_HeadingLevel1",
                nodeType: t.nodes.heading,
                attrs: { level: 1 },
              },
              E.createElement(ee.TextH1, null),
            ),
          n <= 2 &&
            a >= 2 &&
            E.createElement(
              Oe,
              {
                tooltip: "#FormattingToolbar_HeadingLevel2",
                nodeType: t.nodes.heading,
                attrs: { level: 2 },
              },
              E.createElement(ee.TextH2, null),
            ),
          n <= 3 &&
            a >= 3 &&
            E.createElement(
              Oe,
              {
                tooltip: "#FormattingToolbar_HeadingLevel3",
                nodeType: t.nodes.heading,
                attrs: { level: 3 },
              },
              E.createElement(ee.TextH3, null),
            ),
          n <= 4 &&
            a >= 4 &&
            E.createElement(
              Oe,
              {
                tooltip: "#FormattingToolbar_HeadingLevel4",
                nodeType: t.nodes.heading,
                attrs: { level: 4 },
              },
              E.createElement(ee.TextH4, null),
            ),
          n <= 5 &&
            a >= 5 &&
            E.createElement(
              Oe,
              {
                tooltip: "#FormattingToolbar_HeadingLevel5",
                nodeType: t.nodes.heading,
                attrs: { level: 5 },
              },
              E.createElement(ee.TextH5, null),
            ),
        );
      }
      function Ke(e) {
        const { schema: t, showIndentButtonsAsNeeded: n = !1 } = e,
          { callbacks: o, view: a } = Ae(),
          { bullet_list: r, ordered_list: s, list_item: l } = t.nodes,
          c = E.useMemo(() => A.T2(l), [l]),
          i = E.useMemo(() => A.$B(l), [l]),
          [m, d] = E.useState(() => c(a.state) || i(a.state));
        return (
          (0, Ee.hL)(
            o,
            E.useCallback(
              (e) => {
                d(c(e.state) || i(e.state));
              },
              [c, i],
            ),
          ),
          E.createElement(
            E.Fragment,
            null,
            E.createElement(
              We,
              {
                tooltip: "#FormattingToolbar_BulletedList",
                list_type: r,
                list_item: l,
              },
              E.createElement(ee.TextBullets, null),
            ),
            s && !1,
            (!n || m) &&
              E.createElement(
                E.Fragment,
                null,
                E.createElement(
                  Fe,
                  { tooltip: "#FormattingToolbar_OutdentList", command: c },
                  E.createElement(ee.TextOutdent, null),
                ),
                E.createElement(
                  Fe,
                  { tooltip: "#FormattingToolbar_IndentList", command: i },
                  E.createElement(ee.TextIndent, null),
                ),
              ),
          )
        );
      }
      function We(e) {
        const { list_type: t, list_item: n, tooltip: o, children: a } = e,
          { callbacks: r, view: s } = Ae(),
          l = E.useCallback((e) => void 0 !== S(e.state, t), [t]),
          [c, i] = E.useState(() => l(s)),
          m = E.useMemo(() => A.Sd(t), [t]),
          d = E.useMemo(() => A.T2(n), [n]);
        return (
          (0, Ee.hL)(
            r,
            E.useCallback(
              (e) => {
                i(l(e));
              },
              [l],
            ),
          ),
          E.createElement(Fe, { tooltip: o, toggled: c, command: c ? d : m }, a)
        );
      }
      function qe(e) {
        const { schema: t } = e;
        return E.createElement(
          Ue,
          { schema: t },
          E.createElement(ee.TextLink, null),
        );
      }
      function Ve(e) {
        const { bSpellcheckEnabled: t, setSpellcheckEnabled: n } = e;
        return E.createElement(
          Le,
          {
            tooltip: t
              ? "#FormattingToolbar_DisableSpellcheck"
              : "#FormattingToolbar_EnableSpellcheck",
            toggled: t,
            onClick: () => n(!t),
          },
          E.createElement(ee.SpellCheck, null),
        );
      }
      var ze = n(51076);
      function je(e) {
        const {
            schema: t,
            view: n,
            refUpdateToolbar: o,
            className: a,
            bSpellcheckEnabled: r,
            setSpellcheckEnabled: s,
          } = e,
          [l, c] = (0, ze.SP)("FormattingToolbar_Expanded", !1);
        return E.createElement(
          Me,
          { refUpdateToolbar: o, view: n },
          E.createElement(
            "div",
            { className: (0, K.A)(Ce.Toolbar, a) },
            E.createElement(
              Pe,
              null,
              E.createElement(Ge, null),
              E.createElement(Se, null),
              E.createElement($e, { schema: t }),
              E.createElement(De, null),
              E.createElement(
                Le,
                {
                  onClick: () => c(!l),
                  tooltip: "#FormattingToolbar_ExpandOptions",
                },
                E.createElement(ee.Chevron, { direction: l ? "up" : "down" }),
              ),
            ),
            E.createElement(
              Be.R,
              { visible: l },
              E.createElement(
                Pe,
                null,
                E.createElement(Re, { schema: t }),
                E.createElement(He, { schema: t, levels: 5 }),
                E.createElement(
                  Oe,
                  {
                    nodeType: t.nodes.code_block,
                    tooltip: (0, T.we)("#FormattingToolbar_CodeBlock"),
                  },
                  E.createElement(ee.TextCodeBlock, null),
                ),
                E.createElement(Se, null),
                E.createElement(Ke, { schema: t }),
                E.createElement(Se, null),
                E.createElement(qe, { schema: t }),
                E.createElement(De, null),
                s &&
                  E.createElement(Ve, {
                    bSpellcheckEnabled: r,
                    setSpellcheckEnabled: s,
                  }),
              ),
            ),
          ),
        );
      }
      var Je = n(10325);
      const Qe = 15;
      function Xe(e) {
        const { note: t, hidden: n = !1 } = e,
          [o, a] = E.useState(),
          r = E.useRef(),
          s = E.useRef(!1),
          l = (0, X.$G)(),
          c = (0, X.EC)(),
          i = (0, X.WA)(),
          m = (0, Q.H0)(t.appid),
          d = (0, we.Qn)(),
          { mutate: u } = (0, Q.df)(t),
          [p, h] = E.useState();
        E.useEffect(() => {
          s.current ||
            h(new _(J, t.content, (e, t) => u({ title: tt(t), bbcode: e })));
        }, [u, t.content]);
        const { bDirty: g } = C(p, { msAutosaveTimeout: 1e3 * Qe });
        E.useEffect(() => {
          g &&
            !s.current &&
            ((s.current = !0),
            Z.y.ReportTrackedAction("/GameNotes/NoteModified"));
        }, [g]),
          E.useEffect(() => {
            o && !n && o.focus();
          }, [o, n]),
          E.useEffect(() => {
            n && p.CommitChanges();
          }, [n, p]);
        const f = (0, X.qq)(),
          b = (0, Q.Bc)(t, f),
          k = {
            onSecondaryButton: () => b.mutate(),
            onSecondaryActionDescription: (0, T.we)(
              "#UserGameNotes_DeleteNote",
            ),
          };
        return E.createElement(
          "div",
          { className: Je.NoteEditorArea },
          !d &&
            E.createElement(je, {
              schema: J.pm_schema,
              view: o,
              refUpdateToolbar: r,
              className: Je.Toolbar,
              bSpellcheckEnabled: c,
              setSpellcheckEnabled: i,
            }),
          E.createElement(
            ke,
            {
              pmState: p,
              className: Je.EditorInput,
              refOnUpdate: r,
              refView: a,
              bSpellcheckEnabled: c,
              panelProps: k,
            },
            E.createElement(ae, {
              uploadImage: m,
              nodeType: J.pm_schema.nodes.image,
            }),
            E.createElement(I, {
              linkMarkType: J.pm_schema.marks.link,
              schema: J.pm_schema,
              onClickURL: l,
            }),
          ),
          !d && E.createElement(Ze, { note: t, bDirty: g }),
        );
      }
      function Ze(e) {
        const { note: t, bDirty: n } = e,
          [o, a, r] = (0, Ee.uD)(!1),
          s = (0, X.O8)(),
          l = (0, X.qq)(),
          { mutate: c, isPending: i } = (0, Q.Bc)(t, l),
          m = E.useCallback(() => {
            !n && t.not_persisted ? c() : a();
          }, [n, t, c, a]);
        return E.createElement(
          "div",
          { className: Je.NoteActions },
          o &&
            E.createElement(et, {
              note: t,
              closeModal: r,
              deleteNote: c,
              deletePending: i,
            }),
          E.createElement(
            ve.he,
            { toolTipContent: "#UserGameNotes_DeleteNote", direction: "top" },
            E.createElement(
              Y.$n,
              { onClick: m },
              E.createElement(ee.Trash, null),
            ),
          ),
          s && E.createElement(Ye, { bDirty: n }),
        );
      }
      function Ye(e) {
        const { bDirty: t } = e,
          n = (0, X.qq)();
        return t
          ? E.createElement(
              Y.jn,
              { onClick: () => n(), className: Je.CloseWindowButton },
              (0, T.we)("#Button_SaveAndClose"),
            )
          : E.createElement(
              Y.$n,
              { onClick: () => n(), className: Je.CloseWindowButton },
              (0, T.we)("#Button_Close"),
            );
      }
      function et(e) {
        const { note: t, closeModal: n, deleteNote: o, deletePending: a } = e;
        return E.createElement(
          te.EN,
          { active: !0 },
          E.createElement(te.o0, {
            strTitle: (0, T.we)("#UserGameNotes_DeleteNote"),
            strDescription: (0, T.we)("#UserGameNotes_PromptDelete"),
            onOK: () => o(),
            bOKDisabled: a,
            strOKButtonText: (0, T.we)("#Button_Delete"),
            closeModal: n,
          }),
        );
      }
      function tt(e) {
        let t = "";
        for (let n = 0; n < e.content.childCount; n++) {
          const o = e.content.child(n);
          if (o.isText) t += o.text;
          else {
            if (((t = t.trim()), t.length > 4)) return t;
            if (((t = tt(o)), t.length > 4)) return t;
          }
        }
        return t.trim();
      }
    },
    44840: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => f });
      var o = n(63098),
        a = n(34394),
        r = n(93057),
        s = n(63696),
        l = n(49519),
        c = n(67808),
        i = n(73259),
        m = n(45264),
        d = n(43651),
        u = n(64608),
        p = n(10606),
        h = n(46108),
        g = n(39889);
      function f(e) {
        const { popup: t } = e,
          [n, a] = s.useState();
        return (
          s.useEffect(() => {
            if (n)
              return o.U.RegisterPopup(t, () =>
                n.SteamClient.Window.BringToFront(),
              );
          }, [t, n]),
          void 0 === t.noteid
            ? s.createElement(E, { popup: t, refPopup: a })
            : s.createElement(b, { popup: t, refPopup: a })
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
              a.A,
              { mode: "single", closePopup: () => t.close() },
              s.createElement(_, {
                noteParent: t.noteParent,
                noteid: t.noteid,
              }),
            ),
          ),
        );
      }
      function _(e) {
        const { noteParent: t, noteid: n } = e,
          { data: o } = (0, m.P6)(t, n);
        return o ? s.createElement(d.U, { note: o }) : null;
      }
      function E(e) {
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
              a.A,
              { mode: "page", closePopup: () => t.close() },
              s.createElement(r.default, { noteParent: o }),
            ),
          ),
        );
      }
    },
    93057: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => I });
      var o = n(63696),
        a = n(49519),
        r = n(73259),
        s = n(45264),
        l = n(43651),
        c = n(64608),
        i = n(90765),
        m = n(46108),
        d = n(51076),
        u = n(10325),
        p = n(38602),
        h = n(35488),
        g = n(98995),
        f = n(72476);
      function b() {
        const e = (0, a.W5)(),
          t = (0, s.QP)(
            "appid" in e.params && Number(e.params.appid),
            "shortcut_name" in e.params && e.params.shortcut_name,
          );
        let n = e.params.noteid;
        const r = (0, a.W6)(),
          l = (0, s.qF)(t),
          { data: i, isLoading: m } = (0, s.vg)(t);
        let d;
        i && n && (d = i.find((e) => e.id === n)),
          o.useEffect(() => {
            !i ||
              (n && i.find((e) => e.id === n)) ||
              (i.length > 0 && i[0].id ? C(r, t, i[0].id) : C(r, t, l()));
          }, [r, t, n, i, l]);
        const p = o.createElement(
          g.he,
          { toolTipContent: "#UserGameNotes_NewNote", direction: "top" },
          o.createElement(
            c.$n,
            {
              className: u.NewNoteButton,
              onClick: () => {
                const e = l();
                C(r, t, e);
              },
            },
            o.createElement(h.TextNewNote, null),
          ),
        );
        return i
          ? o.createElement(_, {
              noteParent: t,
              notes: i,
              activeNoteID: d?.id,
              actions: p,
            })
          : null;
      }
      function _(e) {
        const { noteParent: t, notes: n, activeNoteID: r, actions: s } = e,
          [l, h] = (0, d.SP)("NotesListCollapsed", !1),
          g = (0, p.wR)(),
          b = (0, f.Qn)(),
          _ = n.map((e) => ({
            title:
              e.title?.length > 0
                ? e.title
                : (0, m.we)("#UserGameNotes_Untitled"),
            identifier: e.id,
            content: o.createElement(E, { note: e }),
            pageClassName: u.NotePage,
            hideTitle: !0,
          })),
          k = (0, a.W6)(),
          T = o.useCallback((e) => C(k, t, e), [k, t]);
        return o.createElement(c.O7, {
          title: (0, m.we)("#UserGameNotes_NotesList"),
          pages: _,
          className: (0, i.A)(u.NotesPagedSettings, g && u.PinnedView),
          page: r,
          onPageRequested: T,
          bottomControls: s,
          hideList: l,
          toggleHideList: g || b ? void 0 : () => h(!l),
        });
      }
      function E(e) {
        const { note: t } = e,
          n = c.v$();
        return o.createElement(l.U, { note: t, hidden: !n });
      }
      function C(e, t, n) {
        let o;
        (o =
          "appid" in t
            ? r.O.AppNotes(t.appid, n)
            : r.O.ShortcutNotes(t.shortcut, n)),
          e.replace(o, e.location.state);
      }
      var k = n(39941),
        T = n(11682),
        v = n.n(T),
        w = n(61416),
        B = n(12176),
        N = n(10812),
        A = n(46382),
        M = n(43691),
        y = n(44846);
      let S;
      const D = 864e5;
      function P(e) {
        return `appinfo_${e}_${M.TS.LANGUAGE}`;
      }
      function O(e) {
        return Boolean(e && Date.now() - e.timeCached < D);
      }
      function x(e) {
        const t = (0, A.KV)(),
          n = (0, A.rX)();
        return (0, w.I)({
          queryKey: ["appinfo", e],
          queryFn: async () =>
            (function (e, t) {
              return (
                S ||
                  (S = new (v())(
                    async (n) => {
                      const o = new Map();
                      (await Promise.all(n.map((e) => t.GetObject(P(e)))))
                        .filter(O)
                        .forEach(({ value: e }) => o.set(e.appid, e));
                      const a = n.slice().filter((e) => !o.has(e));
                      if (a.length) {
                        const n = B.w.Init(N._z);
                        n.Body().set_language((0, y.sf)(M.TS.LANGUAGE)),
                          n.Body().set_appids(a);
                        const r = await N.BE.GetApps(e, n);
                        if (1 != r.GetEResult()) throw r.GetErrorMessage();
                        r.Body()
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
                (0, m.we)("#UserGameNotes_NotesList"),
              ),
              o.createElement(
                "ul",
                null,
                e.map((e) => o.createElement(U, { key: e.appid, game: e })),
              ),
            );
      }
      function U(e) {
        const { game: t } = e,
          n = x(t.appid);
        return o.createElement(
          "li",
          null,
          o.createElement(k.N_, { to: r.O.AppNotes(t.appid) }, n?.name),
        );
      }
      function I(e) {
        return o.createElement(
          a.dO,
          null,
          o.createElement(a.qh, { path: r.O.List() }, o.createElement(L, null)),
          o.createElement(
            a.qh,
            { path: r.O.AppNotes(":appid", ":noteid?") },
            o.createElement(b, null),
          ),
          o.createElement(
            a.qh,
            { path: r.O.ShortcutNotes(":shortcut_name", ":noteid?") },
            o.createElement(b, null),
          ),
          o.createElement(
            a.qh,
            null,
            o.createElement(a.rd, { to: `${(0, r.o)(e.noteParent)}` }),
          ),
        );
      }
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/npm-coordinator-rel-steamui/build/client/steamui/sourcemaps/gamenotes.js.map
