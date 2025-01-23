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
        TooltipWithShortcut: "zT2msZmm-jBeLe4Dt7smo",
        KeyCap: "_3mZEV9CXrIn4FITvJk3Xy-",
      };
    },
    39889: (e) => {
      e.exports = { GameNotesPopup: "_3hIt9g_59KauEV2uSNK6Ct" };
    },
    23649: (e, t, n) => {
      "use strict";
      n.d(t, { U: () => rt });
      var o = n(90039),
        r = n(42898),
        a = n(37195),
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
              const r = this.m_mapPMBBNodes.get(e.acceptNode.name);
              (0, i.w)(
                r,
                `Indicated acceptNode type ${e.acceptNode.name} for ${e.node.name} missing`,
              ),
                (n = r
                  ? [this.TryCreateNode(r, o, void 0)]
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
                s = c.FK.from(e);
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
                    : ((0, i.w)(
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
            c.FK.from(o)
          );
        }
      }
      function h(e, t) {
        return p(t.pm_schema, t.pm_to_bbcode_config, e, []);
      }
      function p(e, t, n, o) {
        let r = n.marks,
          a = "";
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
          c && (a += (0, l.CS)(c, m)),
          n.content.forEach((n) => {
            ([a, r] = g(t, r, n.marks, a)),
              ([a, r] = (function (e, t, n, o) {
                let r;
                for (const a of n)
                  if (-1 === t.indexOf(a)) {
                    r || (r = t.slice());
                    const n = e.mapMarks.get(a.type);
                    if (((0, i.w)(n, "mark missing bbtag"), n)) {
                      r.push(a);
                      const { args: e, tag: t } = f(n, a);
                      o += (0, l.CS)(t, e);
                    }
                  }
                return [o, r ?? t];
              })(t, r, n.marks, a)),
              n.type.isText
                ? (a += (0, l.vE)(n.text || ""))
                : n.type == e.nodes.hard_break
                  ? (a += "\n")
                  : (a += p(e, t, n, r));
          }),
          ([a] = g(t, r, o, a)),
          c && (a += (0, l.op)(c)),
          a
        );
      }
      function g(e, t, n, o) {
        const r = [];
        for (const e of t) -1 === n.indexOf(e) && r.push(e);
        if (!r.length) return [o, t];
        const a = t.slice();
        for (
          ;
          r.length && ((0, i.w)(a.length, "no marks left to close"), a.length);
        ) {
          const t = a.pop(),
            n = e.mapMarks.get(t.type),
            { tag: s } = f(n, t);
          o += (0, l.op)(s);
          const c = r.indexOf(t);
          -1 != c && r.splice(c, 1);
        }
        return [o, a];
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
            ((this.m_bbcode = h(this.m_currentDoc, this.m_schemaConfig)),
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
            plugins: [(0, a.b6)(), e],
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
      var k = n(63696);
      function C(e, t) {
        const { msAutosaveTimeout: n = 1e3 } = t || {},
          [o, a] = k.useState(!1);
        return (
          (function (e, t) {
            (0, r.hL)(e?.OnStateChangedCallbacks, t);
          })(
            e,
            k.useCallback(() => {
              a(!0);
            }, []),
          ),
          k.useEffect(() => {
            if (!o || !e) return;
            const t = () => {
                e.CommitChanges(), a(!1);
              },
              r = window.setTimeout(t, n);
            return () => {
              window.clearTimeout(r), t();
            };
          }, [o, e, n]),
          { bDirty: o }
        );
      }
      var E = n(17372),
        T = n(46108),
        v = n(16486);
      function S(e, t) {
        const { from: n, $from: o, to: r, empty: a } = e.selection;
        return a
          ? !!t.isInSet(e.storedMarks || o.marks())
          : e.doc.rangeHasMark(n, r, t);
      }
      function w(e, t, n) {
        let { $from: o, to: r, node: a } = e.selection;
        return !a && r <= o.end() && (a = o.parent), !!a && a.hasMarkup(t, n);
      }
      function y(e, t, n) {
        const { $from: o, to: r } = e.selection;
        for (let e = o.sharedDepth(r); e > 0; e--) {
          const r = o.node(e);
          if (void 0 === n ? r.type === t : r.hasMarkup(t, n))
            return o.before(e);
        }
      }
      function B(e, t, n = {}) {
        return new v.fV(e, (e, o, r, a) => {
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
      function M(e, t, n) {
        const o = { left: t, top: n },
          r = e.posAtCoords(o);
        if (r?.pos) {
          const t = e.state.doc.resolve(r.pos);
          e.dispatch(e.state.tr.setSelection(s.U3.near(t)));
        }
      }
      var N = n(64608),
        A = n(10606);
      function P(e) {
        const [t, n] = k.useState(void 0),
          o = k.useCallback(
            (t) => {
              const o = t.state.selection;
              let r = "",
                a = "",
                { from: s, to: l } = o;
              const c = (function (e, t, n) {
                const { parent: o } = n,
                  r = o.childAfter(n.parentOffset),
                  a = r.node?.marks.find((e) => e.type == t);
                if (!a) return;
                let s = n.index() - 1,
                  l = n.start() + r.offset;
                for (; s >= 0 && a.isInSet(o.child(s).marks); )
                  (l -= o.child(s).nodeSize), (s -= 1);
                let c = n.index() + 1,
                  i = n.start() + r.offset + r.node.nodeSize;
                for (; c < o.childCount && a.isInSet(o.child(c).marks); )
                  (i += o.child(c).nodeSize), (c += 1);
                return { from: l, to: i, slice: e.doc.slice(l, i), mark: a };
              })(t.state, e.marks.link, o.$from);
              c
                ? (console.log(c),
                  (a = c.mark.attrs.href),
                  o.empty
                    ? ((r = c.slice.content.textBetween(
                        0,
                        c.slice.content.size,
                      )),
                      (s = c.from),
                      (l = c.to))
                    : ((s = Math.max(c.from, o.from)),
                      (l = Math.min(c.to, o.to)),
                      (r = c.slice.content.textBetween(
                        s - c.from,
                        l - c.from,
                      ))))
                : t.state.selection.empty ||
                  ((r = t.state.doc.cut(
                    t.state.selection.from,
                    t.state.selection.to,
                  ).textContent),
                  r.match(/^https?:\/\//) && (a = r)),
                n({ view: t, strLinkText: r, strLinkHref: a, from: s, to: l });
            },
            [e.marks.link],
          ),
          r = t?.view,
          a = k.useCallback(() => {
            window.setTimeout(() => r.focus(), 1), n(void 0);
          }, [r]);
        return [
          o,
          t &&
            k.createElement(
              A.EN,
              { active: !0 },
              k.createElement(D, { schema: e, closeModal: a, ...t }),
            ),
        ];
      }
      const D = k.memo(function (e) {
        const {
            schema: t,
            strLinkText: n,
            strLinkHref: o,
            closeModal: r,
            view: a,
            from: l,
            to: c,
          } = e,
          [i, m] = k.useState(n),
          [d, u] = k.useState(o),
          h = k.useRef(null),
          p = k.useRef(null);
        return (
          k.useLayoutEffect(() => {
            h.current?.value?.length
              ? p.current?.value?.length
                ? (h.current.Focus(), h.current.element.select())
                : p.current.Focus()
              : h.current?.Focus();
          }, []),
          k.createElement(
            A.o0,
            {
              onOK: () => {
                let e = a.state.tr;
                const n = t.text(i || d, [t.marks.link.create({ href: d })]);
                (e = e.replaceRangeWith(l, c, n)),
                  (e = e.setSelection(
                    s.U3.create(e.doc, l + n.nodeSize, l + n.nodeSize),
                  )),
                  a.dispatch(e);
              },
              closeModal: r,
              strTitle: (0, T.we)("#FormattingToolbar_InsertLink"),
              strOKButtonText: (0, T.we)("#FormattingToolbar_InsertLink"),
              bOKDisabled: 0 == d.length,
            },
            k.createElement(N.pd, {
              ref: h,
              value: i,
              onChange: (e) => m(e.currentTarget.value),
              label: (0, T.we)("#FormattingToolbar_LinkText"),
            }),
            k.createElement(N.pd, {
              ref: p,
              value: d,
              onChange: (e) => u(e.currentTarget.value),
              label: (0, T.we)("#FormattingToolbar_LinkAddress"),
            }),
          )
        );
      });
      var O = n(87300),
        x = n(30814),
        F = n(62738),
        L = n(18305);
      n(45772), n(74763);
      const I = k.createContext(void 0);
      function U(e) {
        const { view: t, pmState: n, children: o } = e,
          r = k.useMemo(() => ({ view: t, pmState: n }), [t, n]);
        return k.createElement(I.Provider, { value: r }, o);
      }
      const G = k.memo(function (e) {
        const { schema: t, refOnUpdate: n } = e;
        return (
          R(
            k.useMemo(
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
          R(k.useMemo(() => (0, x.z)(), [])),
          R(
            k.useMemo(
              () =>
                (function (e) {
                  const { nodes: t, marks: n } = e,
                    o = (0, O.st)(
                      O.I$,
                      (e, n) => (
                        n &&
                          n(
                            e.tr
                              .replaceSelectionWith(
                                t.hard_break.createChecked(),
                              )
                              .scrollIntoView(),
                          ),
                        !0
                      ),
                    ),
                    r = {
                      "Mod-z": a.tN,
                      "Mod-y": a.ZS,
                      "Shift-Mod-z": a.ZS,
                      Backspace: v.dv,
                      Escape: O.hy,
                      "Mod-Enter": o,
                      "Shift-Enter": o,
                      "Mod-b": (0, O.wh)(n.strong),
                      "Mod-i": (0, O.wh)(n.italic),
                      "Mod-u": (0, O.wh)(n.underline),
                      "Mod-Shift-x": (0, O.wh)(n.strikethrough),
                      "Ctrl-Shift-s": (0, O.wh)(n.strikethrough),
                      Enter: (0, L.wn)(t.list_item),
                      "Mod-[": (0, L.T2)(t.list_item),
                      "Mod-]": (0, L.$B)(t.list_item),
                      "Ctrl-Shift-1": (0, O.y_)(t.heading, { level: 1 }),
                      "Ctrl-Shift-2": (0, O.y_)(t.heading, { level: 2 }),
                      "Ctrl-Shift-3": (0, O.y_)(t.heading, { level: 3 }),
                      "Ctrl-Shift-4": (0, O.y_)(t.heading, { level: 4 }),
                      "Ctrl-Shift-5": (0, O.y_)(t.heading, { level: 5 }),
                      "Ctrl-Shift-7": (0, O.y_)(t.ordered_list),
                      "Ctrl-Shift-8": (0, O.y_)(t.bullet_list),
                      "Ctrl-Shift-0": (0, O.y_)(t.paragraph),
                    };
                  return (
                    n.code && (r["Ctrl-Shift-c"] = (0, O.wh)(n.code)),
                    t.code_block &&
                      (r["Alt-Ctrl-Shift-c"] = (0, O.y_)(t.code_block)),
                    t.horizontal_rule &&
                      (r["Mod-_"] = (e, n) => (
                        n &&
                          n(
                            e.tr
                              .replaceSelectionWith(t.horizontal_rule.create())
                              .scrollIntoView(),
                          ),
                        !0
                      )),
                    (0, F.w)(r)
                  );
                })(t),
              [t],
            ),
          ),
          R(k.useMemo(() => (0, F.w)(O.RV), [])),
          R(
            k.useMemo(
              () =>
                (function (e) {
                  const { nodes: t, marks: n } = e;
                  return (0, v.sM)({
                    rules: [
                      (0, v.tG)(
                        /^(\d+)\.\s$/,
                        t.ordered_list,
                        (e) => ({ order: parseInt(e[1]) }),
                        (e, t) =>
                          t.childCount + t.attrs.order == parseInt(e[1]),
                      ),
                      (0, v.tG)(/^\s*([-+*])\s$/, t.bullet_list),
                      B(/\*([^*]+)\*/, n.strong),
                      B(/_([^_]+)_/, n.italic),
                      B(/~([^~]+)~/, n.strike),
                      B(/`([^`]+)`/, n.code),
                      (0, v.JJ)(/^```$/, t.code_block),
                      (0, v.JJ)(/^(#{1,5})\s$/, t.heading, (e) => ({
                        level: e[1].length,
                      })),
                      t.horizontal_rule &&
                        ((o = /^(\*\*\*|---|___)$/),
                        (r = t.horizontal_rule),
                        new v.fV(o, (e, t, n, o) =>
                          e.tr.replaceWith(n, o, r.create()),
                        )),
                    ].filter(Boolean),
                  });
                  var o, r;
                })(t),
              [t],
            ),
          ),
          null
        );
      });
      function R(e) {
        const { pmState: t } = k.useContext(I);
        k.useEffect(() => {
          if (t && e) return t.InstallPlugin(e);
        }, [e, t]);
      }
      var $ = n(48139);
      const K = k.memo(function (e) {
        const {
            linkMarkType: t,
            onURLPasted: n,
            schema: o,
            onClickURL: r = H,
          } = e,
          a = k.useRef(r);
        a.current = r;
        const [l, i] = k.useState(),
          [m, d] = k.useState(),
          [u, h] = k.useState(),
          [p, g] = P(o),
          f = k.useMemo(
            () =>
              new s.k_({
                props: {
                  handleClickOn(e, n, o, r, s, l) {
                    if (l && (s.ctrlKey || 1 == s.button)) {
                      const e = o
                        .resolve(n - r)
                        .marks()
                        .find((e) => e.type == t);
                      if (e)
                        return (
                          a.current(e.attrs.href, s.view),
                          s.preventDefault(),
                          !0
                        );
                    }
                    return !1;
                  },
                  handleKeyDown: (e, t) =>
                    !(
                      "k" != t.key ||
                      (!t.metaKey && !t.ctrlKey) ||
                      t.shiftKey ||
                      t.altKey
                    ) && (p(e), !0),
                  clipboardTextParser(e, r, a, s) {
                    let l,
                      i = [];
                    for (; (l = e.match(E.O)); ) {
                      l.index > 0 && i.push(o.text(e.substring(0, l.index)));
                      const r = (0, E.S)(l[0]),
                        a = n && n(r);
                      a && "default" !== a
                        ? "remove" !== a && i.push(a)
                        : i.push(o.text(l[0], [t.create({ href: r })])),
                        (e = e.substring(l.index + l[0].length));
                    }
                    return (
                      e.length && i.push(o.text(e)),
                      new c.Ji(c.FK.from(i), r.start(), r.end())
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
                        i(e.left + e.width / 2), d(e.bottom + 2), h(n);
                      } else h(void 0);
                      return !1;
                    },
                    mouseleave: (e, t) => (h(void 0), !1),
                  },
                },
              }),
            [t, p, n, o],
          );
        R(f);
        let b = null;
        return (
          u &&
            l &&
            m &&
            (b = k.createElement(z, {
              top: m,
              left: l,
              href: u.getAttribute("href"),
            })),
          k.createElement(k.Fragment, null, b, g)
        );
      });
      function z(e) {
        const { top: t, left: n, href: o } = e,
          [r, a] = k.useState(0),
          s = k.useRef(null);
        k.useLayoutEffect(() => {
          a(s.current.getBoundingClientRect().width);
        }, [t, n, o]);
        const l = { top: `${t}px`, left: `${Math.max(n - r / 2, 12)}px` };
        return k.createElement(
          "div",
          { className: $.Hover, style: l, ref: s },
          k.createElement("div", { className: $.Link }, o),
          k.createElement(
            "div",
            { className: $.LinkHelp },
            (0, T.we)("#UserGameNotes_ClickToOpenLink"),
          ),
        );
      }
      function H(e, t) {
        t.open(e);
      }
      var W = n(49787),
        V = n.n(W),
        q = n(90765);
      function j(e, t, n = 0) {
        return () => [e, { class: t }, n];
      }
      const Z = {
          paragraph: {
            content: "inline*",
            group: "block",
            parseDOM: [{ tag: "p" }],
            toDOM: j("p", (0, q.A)("pm_paragraph", V().Paragraph)),
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
                  `BB_Header${e.attrs.level} ` + V()[`Header${e.attrs.level}`],
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
              return ["img", { src: t, alt: n, title: o, class: V().Image }];
            },
            bbCode: {
              tag: "img",
              BBArgsToAttrs: (e) => ({ src: e.src }),
              AttrsToBBArgs: (e) => ({ args: { src: e.src } }),
              convertContentToAttr: "src",
            },
          },
          bullet_list: {
            ...L.fF,
            content: "list_item+",
            group: "block",
            toDOM: j("ul", V().List),
            bbCode: { tag: "list" },
          },
          ordered_list: {
            ...L.o8,
            content: "list_item+",
            group: "block",
            toDOM: j("ol", V().OrderedList),
            bbCode: { tag: "olist" },
          },
          list_item: {
            ...L.Aw,
            content: "paragraph block*",
            toDOM: j("li", V().ListItem),
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
              { class: V().CodeBlock },
              ["code", { class: V().Code }, 0],
            ],
            bbCode: { tag: "code" },
          },
        },
        X = {
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
            toDOM: j("b", (0, q.A)("BB_Bold", V().Bold)),
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
            toDOM: j("i", (0, q.A)("BB_Italic", V().Italic)),
            bbCode: { tag: "i" },
          },
          underline: {
            parseDOM: [{ tag: "u" }, { style: "text-decoration=underline" }],
            toDOM: j("u", (0, q.A)("BB_Underline", V().Underline)),
            bbCode: { tag: "u" },
          },
          strike: {
            parseDOM: [{ style: "text-decoration=line-through" }],
            toDOM: j("span", (0, q.A)("BB_Strike", V().Strike)),
            bbCode: { tag: "strike" },
          },
          code: {
            parseDOM: [{ tag: "code" }],
            toDOM: j("code", (0, q.A)("BB_Code", V().Code)),
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
      function J(e, t) {
        if (t) {
          if (Array.isArray(e)) {
            const n = e.filter((e) => t.has(e.tag));
            return n.length > 0 ? n : void 0;
          }
          return t.has(e.tag) ? e : void 0;
        }
        return e;
      }
      const Q = { nodes: { ...Z }, marks: { ...X } },
        Y = new (class {
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
                l = J(r, a);
              l && ((n[t] = s), o.set(t, l));
            }
            const s = {};
            for (const t in e.marks) {
              const { bbCode: n, ...o } = e.marks[t];
              (a && !a.has(n.tag)) || ((s[t] = o), r.set(t, n));
            }
            (this.m_ProseMirrorSchema = new c.Sj({ nodes: n, marks: s })),
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
        })(Q);
      var ee = n(45264),
        te = n(38602),
        ne = n(94361),
        oe = n(35488),
        re = n(90601);
      const ae = "/images/image_error.svg";
      function se(e) {
        const { uploadImage: t, nodeType: n, nMaxImageSize: o = ce } = e;
        return (
          R(
            k.useMemo(
              () =>
                new s.k_({
                  key: new s.hs(`PMUploadImage_${n.name}`),
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
                              src: ae,
                              title: (0, T.we)("#UserGameNotes_ImageTooLarge"),
                            }),
                          ];
                          return new c.Ji(c.FK.from(t), 0, 0);
                        }
                        return n;
                      })(n, o, ...e),
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
                                  a = (0, re.wI)(await r.arrayBuffer());
                                le(
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
              [t, o, n],
            ),
          ),
          null
        );
      }
      function le(e, t, n) {
        n.state.doc.descendants((o, r) => {
          if ("image" === o.type.name && o.attrs.src === e) {
            const e = n.state.tr.setNodeAttribute(r, "src", t);
            n.dispatch(e);
          }
        });
      }
      const ce = 1048576;
      var ie = n(69164),
        me = n(69),
        de = n(41537),
        ue = n(91633),
        he = n(42318),
        pe = n(87429);
      const ge = "noborder",
        fe = "equalcells",
        be = pe.of({
          tableGroup: "block",
          cellContent: "paragraph block*",
          cellAttributes: {
            class: {
              default: V().TableCell,
              setDOMAttr: (e, t) => {
                t.class = e;
              },
            },
          },
        }),
        _e = {
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
        ke =
          (be.table,
          be.table_row,
          j("tr", V().TableRow),
          be.table_cell,
          be.table_header,
          k.memo(function () {
            return (
              R(k.useMemo(() => pe.AL({ View: Ce }), [])),
              R(k.useMemo(() => pe.LF(), [])),
              null
            );
          }));
      class Ce extends pe.Qg {
        constructor(e, t) {
          super(e, t), this.SetTableClass(e);
        }
        update(e) {
          return !!super.update(e) && (this.SetTableClass(e), !0);
        }
        SetTableClass(e) {
          this.table.className = (0, q.A)(
            V().Table,
            e.attrs[ge] && V().NoBorder,
            e.attrs[fe] && V().EqualCells,
          );
        }
      }
      var Ee = n(52451),
        Te = n(76627);
      const ve = (0, he.Nr)(function (e) {
        const {
            pmState: t,
            className: n,
            refOnUpdate: o,
            refView: r,
            bSpellcheckEnabled: a = !0,
            panelProps: s,
            children: l,
          } = e,
          [c, i] = k.useState(),
          [m, d] = k.useState();
        k.useEffect(() => {
          t && c && d(new ue.Lz(c, { state: t.state }));
        }, [t, c]),
          k.useEffect(() => () => m?.destroy(), [m]),
          (0, Ee.D5)(r, m);
        const {
            refDiv: u,
            onActivate: h,
            onGamepadDirection: p,
          } = (function (e) {
            const t = k.useRef(),
              n = (0, de.FN)(),
              o = k.useCallback(() => {
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
                      M(e, t.left, t.top);
                      break;
                    }
                  }
                }
              }, [n, e]),
              r = k.useCallback((e) => e.currentTarget == e.target, []),
              a = (0, me.ak)(t, null, null, r);
            return { refDiv: t, onActivate: o, onGamepadDirection: a };
          })(m),
          g = (0, Ee.Ue)(u, i);
        if (!t) return null;
        const { schemaConfig: f, bbcodeParser: b } = t;
        return k.createElement(
          U,
          { view: m, pmState: t },
          k.createElement(ie.Z, {
            key: `editordiv_${a}`,
            className: (0, q.A)(n, Te.Container),
            ref: g,
            spellCheck: a,
            focusable: !0,
            onActivate: h,
            onOKActionDescription: (0, T.we)("#UserGameNotes_Edit"),
            onGamepadDirection: p,
            ...s,
          }),
          k.createElement(G, { refOnUpdate: o, schema: f.pm_schema }),
          k.createElement(Se, { parser: b, schema: f.pm_schema }),
          "table" in f.pm_schema.nodes && k.createElement(ke, null),
          l,
        );
      });
      const Se = k.memo(function (e) {
        const { parser: t, schema: n } = e;
        return (
          R(
            k.useMemo(
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
                        const r = e.ConvertLineBreaksToParagraphs(n.content);
                        return c.Ji.maxOpen(r);
                      })(t, n.nodes.hard_break, e),
                  },
                }),
              [t, n],
            ),
          ),
          null
        );
      });
      var we = n(98995),
        ye = n(72476),
        Be = n(71594),
        Me = n(79769),
        Ne = n(43691);
      const Ae = () => k.useContext(De);
      function Pe(e) {
        const { view: t, refUpdateToolbar: n, children: o } = e,
          r = k.useRef();
        r.current || (r.current = new Me.lu()),
          k.useEffect(
            () => (
              (0, Ee.cZ)(n, () => r.current.Dispatch(t)),
              () => (0, Ee.cZ)(n, void 0)
            ),
            [t, n],
          );
        const a = k.useMemo(() => ({ callbacks: r.current, view: t }), [t]);
        return t ? k.createElement(De.Provider, { value: a }, o) : null;
      }
      const De = k.createContext(void 0);
      function Oe() {
        return k.createElement("div", { className: Te.Gap });
      }
      function xe() {
        return k.createElement("div", { className: Te.Spacer });
      }
      function Fe(e) {
        return k.createElement(
          ie.Z,
          {
            className: (0, q.A)(e.className, Te.ToolbarRow),
            "flow-children": "row",
          },
          e.children,
        );
      }
      function Le(e) {
        const { nodeType: t, attrs: n, children: o, ...r } = e,
          { callbacks: a, view: s } = Ae(),
          [l, c] = k.useState(() => w(s.state, t, n)),
          i = k.useCallback((e) => c(w(e.state, t, n)), [t, n]);
        (0, Ee.hL)(a, i);
        const m = k.useMemo(() => O.y_(t, n), [n, t]);
        return k.createElement(Ue, {
          ...r,
          command: m,
          toggled: l,
          children: o,
        });
      }
      function Ie(e) {
        const { mark: t, children: n, ...o } = e,
          { callbacks: r, view: a } = Ae(),
          [s, l] = k.useState(() => S(a.state, t)),
          c = k.useCallback((e) => l(S(e.state, t)), [t]);
        (0, Ee.hL)(r, c);
        const i = k.useMemo(() => O.wh(t), [t]);
        return k.createElement(Ue, {
          ...o,
          command: i,
          toggled: s,
          children: n,
        });
      }
      function Ue(e) {
        const { command: t, toggled: n, children: o, ...r } = e,
          { view: a, callbacks: s } = Ae(),
          [l, c] = k.useState(() => t(a.state));
        (0, Ee.hL)(
          s,
          k.useCallback((e) => c(t(e.state)), [t]),
        ),
          k.useEffect(() => c(t(a.state)), [t, a]);
        const i = !l && !n;
        return k.createElement(
          Re,
          { ...r },
          k.createElement(
            N.$n,
            {
              className: (0, q.A)(Te.CommandButton, n && Te.Toggled),
              onMouseDown: (e) => {
                e.preventDefault(), t(a.state, a.dispatch, a);
              },
              disabled: i,
              focusable: !i,
            },
            o,
          ),
        );
      }
      function Ge(e) {
        const {
          onClick: t,
          toggled: n,
          disabled: o,
          children: r,
          className: a,
          ...s
        } = e;
        return k.createElement(
          Re,
          { ...s },
          k.createElement(
            N.$n,
            {
              className: (0, q.A)(Te.CommandButton, n && Te.Toggled, a),
              onMouseDown: (e) => {
                e.preventDefault(), t();
              },
              disabled: !0 === o,
            },
            r,
          ),
        );
      }
      function Re(e) {
        const { tooltip: t, keyboardShortcut: n, children: o } = e;
        if (!t) return o;
        const r = n
          ? k.createElement($e, { tooltip: t, keyboardShortcut: n })
          : t;
        return k.createElement(
          we.Gq,
          { toolTipContent: r, direction: "bottom" },
          o,
        );
      }
      function $e(e) {
        const { tooltip: t, keyboardShortcut: n } = e;
        return k.createElement(
          "div",
          { className: Te.TooltipWithShortcut },
          k.createElement("div", null, (0, T.we)(t)),
          k.createElement(
            "div",
            null,
            k.createElement(Ke, { keyboardShortcut: n }),
          ),
        );
      }
      function Ke(e) {
        const { keyboardShortcut: t } = e,
          n = t.split("-"),
          o = n.pop();
        return k.createElement(
          k.Fragment,
          null,
          n.map((e, t) =>
            k.createElement(
              k.Fragment,
              { key: t },
              k.createElement(ze, null, k.createElement(He, { modifier: e })),
              " + ",
            ),
          ),
          k.createElement(ze, null, o.toUpperCase()),
        );
      }
      function ze(e) {
        return k.createElement("span", { className: Te.KeyCap }, e.children);
      }
      function He(e) {
        const { modifier: t } = e;
        switch (t) {
          case "Mod":
            return "macos" == Ne.TS.PLATFORM ? "⌘" : "Ctrl";
          case "Shift":
            return Ne.TS.PLATFORM, "Shift";
          case "Ctrl":
            return "macos" == Ne.TS.PLATFORM ? "Control" : "Ctrl";
          case "Alt":
            return "macos" == Ne.TS.PLATFORM ? "Option" : "Alt";
        }
        return null;
      }
      function We(e) {
        const { schema: t, children: n } = e,
          { callbacks: o, view: r } = Ae(),
          [a, s] = k.useState(() => S(r.state, t.marks.link)),
          l = k.useCallback((e) => s(S(e.state, t.marks.link)), [t]);
        (0, Ee.hL)(o, l);
        const [c, i] = P(t);
        return k.createElement(
          k.Fragment,
          null,
          i,
          k.createElement(
            Ge,
            {
              onClick: () => c(r),
              toggled: a,
              tooltip: "#FormattingToolbar_InsertLink",
              keyboardShortcut: "Mod-k",
            },
            n,
          ),
        );
      }
      function Ve() {
        return k.createElement(
          k.Fragment,
          null,
          k.createElement(
            Ue,
            {
              tooltip: "#FormattingToolbar_Undo",
              keyboardShortcut: "Mod-z",
              command: a.tN,
            },
            k.createElement(oe.Undo, null),
          ),
          k.createElement(
            Ue,
            {
              tooltip: "#FormattingToolbar_Redo",
              keyboardShortcut:
                "macos" == Ne.TS.PLATFORM ? "Mod-Shift-z" : "Mod-y",
              command: a.ZS,
            },
            k.createElement(oe.Redo, null),
          ),
        );
      }
      function qe(e) {
        const { schema: t } = e;
        return k.createElement(
          k.Fragment,
          null,
          k.createElement(
            Ie,
            {
              tooltip: "#FormattingToolbar_Bold",
              keyboardShortcut: "Mod-b",
              mark: t.marks.strong,
            },
            k.createElement(oe.TextBold, null),
          ),
          k.createElement(
            Ie,
            {
              tooltip: "#FormattingToolbar_Italic",
              keyboardShortcut: "Mod-i",
              mark: t.marks.italic,
            },
            k.createElement(oe.TextItalic, null),
          ),
          k.createElement(
            Ie,
            {
              tooltip: "#FormattingToolbar_Underline",
              keyboardShortcut: "Mod-u",
              mark: t.marks.underline,
            },
            k.createElement(oe.TextUnderline, null),
          ),
          "strike" in t.marks &&
            k.createElement(
              Ie,
              {
                tooltip: "#FormattingToolbar_Strike",
                keyboardShortcut: "Mod-Shift-x",
                mark: t.marks.strike,
              },
              k.createElement(oe.TextStrikethrough, null),
            ),
          "code" in t.marks &&
            k.createElement(
              Ie,
              {
                tooltip: "#FormattingToolbar_InlineCode",
                keyboardShortcut: "Ctrl-Shift-c",
                mark: t.marks.code,
              },
              k.createElement(oe.TextCode, null),
            ),
        );
      }
      function je(e) {
        const { schema: t } = e;
        return k.createElement(
          Le,
          {
            tooltip: "#FormattingToolbar_Paragraph",
            keyboardShortcut: "Ctrl-Shift-0",
            nodeType: t.nodes.paragraph,
          },
          k.createElement(oe.TextParagraph, null),
        );
      }
      function Ze(e) {
        const { schema: t, maxLevel: n = 1, levels: o } = e,
          r = n + o - 1;
        return k.createElement(
          k.Fragment,
          null,
          n <= 1 &&
            k.createElement(
              Le,
              {
                tooltip: "#FormattingToolbar_HeadingLevel1",
                keyboardShortcut: "Ctrl-Shift-1",
                nodeType: t.nodes.heading,
                attrs: { level: 1 },
              },
              k.createElement(oe.TextH1, null),
            ),
          n <= 2 &&
            r >= 2 &&
            k.createElement(
              Le,
              {
                tooltip: "#FormattingToolbar_HeadingLevel2",
                keyboardShortcut: "Ctrl-Shift-2",
                nodeType: t.nodes.heading,
                attrs: { level: 2 },
              },
              k.createElement(oe.TextH2, null),
            ),
          n <= 3 &&
            r >= 3 &&
            k.createElement(
              Le,
              {
                tooltip: "#FormattingToolbar_HeadingLevel3",
                keyboardShortcut: "Ctrl-Shift-3",
                nodeType: t.nodes.heading,
                attrs: { level: 3 },
              },
              k.createElement(oe.TextH3, null),
            ),
          n <= 4 &&
            r >= 4 &&
            k.createElement(
              Le,
              {
                tooltip: "#FormattingToolbar_HeadingLevel4",
                keyboardShortcut: "Ctrl-Shift-4",
                nodeType: t.nodes.heading,
                attrs: { level: 4 },
              },
              k.createElement(oe.TextH4, null),
            ),
          n <= 5 &&
            r >= 5 &&
            k.createElement(
              Le,
              {
                tooltip: "#FormattingToolbar_HeadingLevel5",
                keyboardShortcut: "Ctrl-Shift-5",
                nodeType: t.nodes.heading,
                attrs: { level: 5 },
              },
              k.createElement(oe.TextH5, null),
            ),
        );
      }
      function Xe(e) {
        const { schema: t, showIndentButtonsAsNeeded: n = !1 } = e,
          { callbacks: o, view: r } = Ae(),
          { bullet_list: a, ordered_list: s, list_item: l } = t.nodes,
          c = k.useMemo(() => L.T2(l), [l]),
          i = k.useMemo(() => L.$B(l), [l]),
          [m, d] = k.useState(() => c(r.state) || i(r.state));
        return (
          (0, Ee.hL)(
            o,
            k.useCallback(
              (e) => {
                d(c(e.state) || i(e.state));
              },
              [c, i],
            ),
          ),
          k.createElement(
            k.Fragment,
            null,
            k.createElement(
              Je,
              {
                tooltip: "#FormattingToolbar_BulletedList",
                keyboardShortcut: "Ctrl-Shift-8",
                list_type: a,
                list_item: l,
              },
              k.createElement(oe.TextBullets, null),
            ),
            s && !1,
            (!n || m) &&
              k.createElement(
                k.Fragment,
                null,
                k.createElement(
                  Ue,
                  {
                    tooltip: "#FormattingToolbar_OutdentList",
                    keyboardShortcut: "Mod-[",
                    command: c,
                  },
                  k.createElement(oe.TextOutdent, null),
                ),
                k.createElement(
                  Ue,
                  {
                    tooltip: "#FormattingToolbar_IndentList",
                    keyboardShortcut: "Mod-[",
                    command: i,
                  },
                  k.createElement(oe.TextIndent, null),
                ),
              ),
          )
        );
      }
      function Je(e) {
        const { list_type: t, list_item: n, children: o, ...r } = e,
          { callbacks: a, view: s } = Ae(),
          l = k.useCallback((e) => void 0 !== y(e.state, t), [t]),
          [c, i] = k.useState(() => l(s)),
          m = k.useMemo(() => L.Sd(t), [t]),
          d = k.useMemo(() => L.T2(n), [n]);
        return (
          (0, Ee.hL)(
            a,
            k.useCallback(
              (e) => {
                i(l(e));
              },
              [l],
            ),
          ),
          k.createElement(Ue, { ...r, toggled: c, command: c ? d : m }, o)
        );
      }
      function Qe(e) {
        const { schema: t } = e;
        return k.createElement(
          We,
          { schema: t },
          k.createElement(oe.TextLink, null),
        );
      }
      function Ye(e) {
        const { bSpellcheckEnabled: t, setSpellcheckEnabled: n } = e;
        return k.createElement(
          Ge,
          {
            tooltip: t
              ? "#FormattingToolbar_DisableSpellcheck"
              : "#FormattingToolbar_EnableSpellcheck",
            toggled: t,
            onClick: () => n(!t),
          },
          k.createElement(oe.SpellCheck, null),
        );
      }
      var et = n(51076);
      function tt(e) {
        const {
            schema: t,
            view: n,
            refUpdateToolbar: o,
            className: r,
            bSpellcheckEnabled: a,
            setSpellcheckEnabled: s,
          } = e,
          [l, c] = (0, et.SP)("FormattingToolbar_Expanded", !1);
        return k.createElement(
          Pe,
          { refUpdateToolbar: o, view: n },
          k.createElement(
            "div",
            { className: (0, q.A)(Te.Toolbar, r) },
            k.createElement(
              Fe,
              null,
              k.createElement(Ve, null),
              k.createElement(Oe, null),
              k.createElement(qe, { schema: t }),
              k.createElement(xe, null),
              k.createElement(
                Ge,
                {
                  onClick: () => c(!l),
                  tooltip: "#FormattingToolbar_ExpandOptions",
                },
                k.createElement(oe.Chevron, { direction: l ? "up" : "down" }),
              ),
            ),
            k.createElement(
              Be.R,
              { visible: l },
              k.createElement(
                Fe,
                null,
                k.createElement(je, { schema: t }),
                k.createElement(Ze, { schema: t, levels: 5 }),
                k.createElement(
                  Le,
                  {
                    nodeType: t.nodes.code_block,
                    tooltip: (0, T.we)("#FormattingToolbar_CodeBlock"),
                  },
                  k.createElement(oe.TextCodeBlock, null),
                ),
                k.createElement(Oe, null),
                k.createElement(Xe, { schema: t }),
                k.createElement(Oe, null),
                k.createElement(Qe, { schema: t }),
                k.createElement(xe, null),
                s &&
                  k.createElement(Ye, {
                    bSpellcheckEnabled: a,
                    setSpellcheckEnabled: s,
                  }),
              ),
            ),
          ),
        );
      }
      var nt = n(10325);
      const ot = 15;
      function rt(e) {
        const { note: t, hidden: n = !1 } = e,
          [o, r] = k.useState(),
          a = k.useRef(),
          s = k.useRef(!1),
          l = (0, te.$G)(),
          c = (0, te.EC)(),
          i = (0, te.WA)(),
          m = (0, ee.H0)(t.appid),
          d = (0, ye.Qn)(),
          { mutate: u } = (0, ee.df)(t),
          [h, p] = k.useState();
        k.useEffect(() => {
          s.current ||
            p(new _(Y, t.content, (e, t) => u({ title: ct(t), bbcode: e })));
        }, [u, t.content]);
        const { bDirty: g } = C(h, { msAutosaveTimeout: 1e3 * ot });
        k.useEffect(() => {
          g &&
            !s.current &&
            ((s.current = !0),
            ne.y.ReportTrackedAction("/GameNotes/NoteModified"));
        }, [g]),
          k.useEffect(() => {
            o && !n && o.focus();
          }, [o, n]),
          k.useEffect(() => {
            n && h && h.CommitChanges();
          }, [n, h]);
        const f = (0, te.qq)(),
          b = (0, ee.Bc)(t, f),
          E = {
            onSecondaryButton: () => b.mutate(),
            onSecondaryActionDescription: (0, T.we)(
              "#UserGameNotes_DeleteNote",
            ),
          };
        return k.createElement(
          "div",
          { className: nt.NoteEditorArea },
          !d &&
            k.createElement(tt, {
              schema: Y.pm_schema,
              view: o,
              refUpdateToolbar: a,
              className: nt.Toolbar,
              bSpellcheckEnabled: c,
              setSpellcheckEnabled: i,
            }),
          k.createElement(
            ve,
            {
              pmState: h,
              className: nt.EditorInput,
              refOnUpdate: a,
              refView: r,
              bSpellcheckEnabled: c,
              panelProps: E,
            },
            k.createElement(se, {
              uploadImage: m,
              nodeType: Y.pm_schema.nodes.image,
            }),
            k.createElement(K, {
              linkMarkType: Y.pm_schema.marks.link,
              schema: Y.pm_schema,
              onClickURL: l,
            }),
          ),
          !d && k.createElement(at, { note: t, bDirty: g }),
        );
      }
      function at(e) {
        const { note: t, bDirty: n } = e,
          [o, r, a] = (0, Ee.uD)(!1),
          s = (0, te.O8)(),
          l = (0, te.qq)(),
          { mutate: c, isPending: i } = (0, ee.Bc)(t, l),
          m = k.useCallback(() => {
            !n && t.not_persisted ? c() : r();
          }, [n, t, c, r]);
        return k.createElement(
          "div",
          { className: nt.NoteActions },
          o &&
            k.createElement(lt, {
              note: t,
              closeModal: a,
              deleteNote: c,
              deletePending: i,
            }),
          k.createElement(
            we.he,
            { toolTipContent: "#UserGameNotes_DeleteNote", direction: "top" },
            k.createElement(
              N.$n,
              { onClick: m },
              k.createElement(oe.Trash, null),
            ),
          ),
          s && k.createElement(st, { bDirty: n }),
        );
      }
      function st(e) {
        const { bDirty: t } = e,
          n = (0, te.qq)();
        return t
          ? k.createElement(
              N.jn,
              { onClick: () => n(), className: nt.CloseWindowButton },
              (0, T.we)("#Button_SaveAndClose"),
            )
          : k.createElement(
              N.$n,
              { onClick: () => n(), className: nt.CloseWindowButton },
              (0, T.we)("#Button_Close"),
            );
      }
      function lt(e) {
        const { note: t, closeModal: n, deleteNote: o, deletePending: r } = e;
        return k.createElement(
          A.EN,
          { active: !0 },
          k.createElement(A.o0, {
            strTitle: (0, T.we)("#UserGameNotes_DeleteNote"),
            strDescription: (0, T.we)("#UserGameNotes_PromptDelete"),
            onOK: () => o(),
            bOKDisabled: r,
            strOKButtonText: (0, T.we)("#Button_Delete"),
            closeModal: n,
          }),
        );
      }
      function ct(e) {
        let t = "";
        for (let n = 0; n < e.content.childCount; n++) {
          const o = e.content.child(n);
          if (o.isText) t += o.text;
          else {
            if (((t = t.trim()), t.length > 4)) return t;
            if (((t = ct(o)), t.length > 4)) return t;
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
        m = n(45264),
        d = n(23649),
        u = n(64608),
        h = n(10606),
        p = n(46108),
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
            ? s.createElement(k, { popup: t, refPopup: r })
            : s.createElement(b, { popup: t, refPopup: r })
        );
      }
      function b(e) {
        const { popup: t, refPopup: n } = e,
          o = (0, p.we)("#GameNotes_NoteForGame", t.display_name);
        return s.createElement(
          c.p,
          { body_class: g.GameNotesPopup },
          s.createElement(
            h.hM,
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
      function k(e) {
        const { popup: t, refPopup: n } = e,
          o = t.noteParent,
          c = s.useMemo(() => [(0, i.o)(o)], [o]);
        return s.createElement(
          h.hM,
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
        l = n(23649),
        c = n(64608),
        i = n(90765),
        m = n(46108),
        d = n(51076),
        u = n(10325),
        h = n(38602),
        p = n(35488),
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
          { data: i, isLoading: m } = (0, s.vg)(t);
        let d;
        i && n && (d = i.find((e) => e.id === n)),
          o.useEffect(() => {
            !i ||
              (n && i.find((e) => e.id === n)) ||
              (i.length > 0 && i[0].id ? C(a, t, i[0].id) : C(a, t, l()));
          }, [a, t, n, i, l]);
        const h = o.createElement(
          g.he,
          { toolTipContent: "#UserGameNotes_NewNote", direction: "top" },
          o.createElement(
            c.$n,
            {
              className: u.NewNoteButton,
              onClick: () => {
                const e = l();
                C(a, t, e);
              },
            },
            o.createElement(p.TextNewNote, null),
          ),
        );
        return i
          ? o.createElement(_, {
              noteParent: t,
              notes: i,
              activeNoteID: d?.id,
              actions: h,
            })
          : null;
      }
      function _(e) {
        const { noteParent: t, notes: n, activeNoteID: a, actions: s } = e,
          [l, p] = (0, d.SP)("NotesListCollapsed", !1),
          g = (0, h.wR)(),
          b = (0, f.Qn)(),
          _ = n.map((e) => ({
            title:
              e.title?.length > 0
                ? e.title
                : (0, m.we)("#UserGameNotes_Untitled"),
            identifier: e.id,
            content: o.createElement(k, { note: e }),
            pageClassName: u.NotePage,
            hideTitle: !0,
          })),
          E = (0, r.W6)(),
          T = o.useCallback((e) => C(E, t, e), [E, t]);
        return o.createElement(c.O7, {
          title: (0, m.we)("#UserGameNotes_NotesList"),
          pages: _,
          className: (0, i.A)(u.NotesPagedSettings, g && u.PinnedView),
          page: a,
          onPageRequested: T,
          bottomControls: s,
          hideList: l,
          toggleHideList: g || b ? void 0 : () => p(!l),
        });
      }
      function k(e) {
        const { note: t } = e,
          n = c.v$();
        return o.createElement(l.U, { note: t, hidden: !n });
      }
      function C(e, t, n) {
        let o;
        (o =
          "appid" in t
            ? a.O.AppNotes(t.appid, n)
            : a.O.ShortcutNotes(t.shortcut, n)),
          e.replace(o, e.location.state);
      }
      var E = n(39941),
        T = n(11682),
        v = n.n(T),
        S = n(61416),
        w = n(12176),
        y = n(10812),
        B = n(46382),
        M = n(43691),
        N = n(44846);
      let A;
      const P = 864e5;
      function D(e) {
        return `appinfo_${e}_${M.TS.LANGUAGE}`;
      }
      function O(e) {
        return Boolean(e && Date.now() - e.timeCached < P);
      }
      function x(e) {
        const t = (0, B.KV)(),
          n = (0, B.rX)();
        return (0, S.I)({
          queryKey: ["appinfo", e],
          queryFn: async () =>
            (function (e, t) {
              return (
                A ||
                  (A = new (v())(
                    async (n) => {
                      const o = new Map();
                      (await Promise.all(n.map((e) => t.GetObject(D(e)))))
                        .filter(O)
                        .forEach(({ value: e }) => o.set(e.appid, e));
                      const r = n.slice().filter((e) => !o.has(e));
                      if (r.length) {
                        const n = w.w.Init(y._z);
                        n.Body().set_language((0, N.sf)(M.TS.LANGUAGE)),
                          n.Body().set_appids(r);
                        const a = await y.BE.GetApps(e, n);
                        if (1 != a.GetEResult()) throw a.GetErrorMessage();
                        a.Body()
                          .toObject()
                          .apps.forEach((e) => {
                            t.StoreObject(D(e.appid), {
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
                A
              );
            })(t, n).load(e),
          staleTime: P,
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
                e.map((e) => o.createElement(I, { key: e.appid, game: e })),
              ),
            );
      }
      function I(e) {
        const { game: t } = e,
          n = x(t.appid);
        return o.createElement(
          "li",
          null,
          o.createElement(E.N_, { to: a.O.AppNotes(t.appid) }, n?.name),
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
