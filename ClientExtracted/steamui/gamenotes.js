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
    40756: (e, t, n) => {
      "use strict";
      n.d(t, { U: () => ct });
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
      function p(e, t) {
        return h(t.pm_schema, t.pm_to_bbcode_config, e, []);
      }
      function h(e, t, n, o) {
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
                  : (a += h(e, t, n, r));
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
      var C = n(63696);
      function k(e, t) {
        const { msAutosaveTimeout: n = 1e3 } = t || {},
          [o, a] = C.useState(!1);
        return (
          (function (e, t) {
            (0, r.hL)(e?.OnStateChangedCallbacks, t);
          })(
            e,
            C.useCallback(() => {
              a(!0);
            }, []),
          ),
          C.useEffect(() => {
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
      function w(e, t) {
        const { from: n, $from: o, to: r, empty: a } = e.selection;
        return a
          ? !!t.isInSet(e.storedMarks || o.marks())
          : e.doc.rangeHasMark(n, r, t);
      }
      function y(e, t, n) {
        let { $from: o, to: r, node: a } = e.selection;
        return !a && r <= o.end() && (a = o.parent), !!a && a.hasMarkup(t, n);
      }
      function S(e, t, n) {
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
      function A(e, t, n) {
        const o = { left: t, top: n },
          r = e.posAtCoords(o);
        if (r?.pos) {
          const t = e.state.doc.resolve(r.pos);
          e.dispatch(e.state.tr.setSelection(s.U3.near(t)));
        }
      }
      var N = n(64608),
        M = n(10606),
        O = n(13869);
      function P(e) {
        const {
            closeModal: t,
            strTitle: n,
            onOK: o,
            strOKText: r,
            onCancel: a,
            strCancelText: s,
            bOKDisabled: l,
            bCancelDisabled: c,
            strClassNameContent: i = "GenericFormDialog",
            children: m,
          } = e,
          d = C.useCallback(() => {
            a && a(), t();
          }, [a, t]),
          u = c ? void 0 : d;
        return C.createElement(
          O.x_,
          { onEscKeypress: u },
          C.createElement(
            N.U9,
            { onSubmit: o, classNameContent: i },
            C.createElement(N.Y9, null, n),
            m,
            C.createElement(
              N.wi,
              null,
              C.createElement(N.CB, {
                strOKText: r,
                bOKDisabled: l,
                onCancel: u,
                strCancelText: s,
                bCancelDisabled: c,
              }),
            ),
          ),
        );
      }
      function D(e, t) {
        const [n, o] = C.useState(void 0),
          r = C.useCallback(
            (n) => {
              const r = n.state.selection;
              let a = "",
                s = "",
                { from: l, to: c } = r;
              const i = (function (e, t, n) {
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
                })(n.state, e.marks.link, r.$from),
                m = !!i;
              i
                ? ((s = i.mark.attrs.href),
                  r.empty
                    ? ((a = i.slice.content.textBetween(
                        0,
                        i.slice.content.size,
                      )),
                      (l = i.from),
                      (c = i.to))
                    : ((l = Math.max(i.from, r.from)),
                      (c = Math.min(i.to, r.to)),
                      (a = i.slice.content.textBetween(
                        l - i.from,
                        c - i.from,
                      ))))
                : n.state.selection.empty ||
                  ((a = n.state.doc.cut(
                    n.state.selection.from,
                    n.state.selection.to,
                  ).textContent),
                  a.match(/^https?:\/\//) && (s = a));
              let d = {};
              if (t)
                for (const e in t) {
                  const n = t[e],
                    o = i ? n.fnReadValue(i.mark) : n.defaultValue;
                  d[e] = o;
                }
              o({
                view: n,
                strLinkText: a,
                strLinkHref: s,
                bIsUpdate: m,
                addtlAttrs: t,
                addtlAttrsValues: d,
                from: l,
                to: c,
              });
            },
            [e.marks.link, t],
          ),
          a = n?.view,
          s = C.useCallback(() => {
            window.setTimeout(() => a.focus(), 1), o(void 0);
          }, [a]);
        return [
          r,
          n &&
            C.createElement(
              M.EN,
              { active: !0 },
              C.createElement(x, { schema: e, closeModal: s, ...n }),
            ),
        ];
      }
      const x = C.memo(function (e) {
        const {
            schema: t,
            strLinkText: n,
            strLinkHref: o,
            bIsUpdate: r,
            addtlAttrs: a,
            addtlAttrsValues: l,
            closeModal: c,
            view: i,
            from: m,
            to: d,
          } = e,
          [u, p] = C.useState(n),
          [h, g] = C.useState(o),
          f = C.useRef(null),
          b = C.useRef(null),
          [_, k] = C.useState(l);
        C.useLayoutEffect(() => {
          f.current?.value?.length
            ? b.current?.value?.length
              ? (f.current.Focus(), f.current.element.select())
              : b.current.Focus()
            : f.current?.Focus();
        }, []);
        const E = r
            ? (0, T.we)("#FormattingToolbar_EditLink")
            : (0, T.we)("#FormattingToolbar_InsertLink"),
          v = r
            ? (0, T.we)("#Button_Save")
            : (0, T.we)("#FormattingToolbar_InsertLink");
        return C.createElement(
          P,
          {
            onOK: () => {
              let e = i.state.tr;
              const n = { href: h };
              for (const e in _) n[e] = _[e];
              const o = t.text(u || h, [t.marks.link.create(n)]);
              (e = e.replaceRangeWith(m, d, o)),
                (e = e.setSelection(
                  s.U3.create(e.doc, m + o.nodeSize, m + o.nodeSize),
                )),
                i.dispatch(e),
                c();
            },
            closeModal: c,
            strTitle: E,
            strOKText: v,
            bOKDisabled: 0 == h.length,
          },
          C.createElement(N.pd, {
            ref: f,
            value: u,
            onChange: (e) => p(e.currentTarget.value),
            label: (0, T.we)("#FormattingToolbar_LinkText"),
          }),
          C.createElement(N.pd, {
            ref: b,
            value: h,
            onChange: (e) => g(e.currentTarget.value),
            label: (0, T.we)("#FormattingToolbar_LinkAddress"),
          }),
          a && C.createElement(F, { addtlAttrs: a, values: _, setValues: k }),
        );
      });
      function F(e) {
        const { addtlAttrs: t, values: n, setValues: o } = e;
        return C.createElement(
          C.Fragment,
          null,
          Object.keys(t).map((e) =>
            C.createElement(L, {
              key: e,
              attrName: e,
              fnRender: t[e].fnRenderEditor,
              value: n[e],
              setValues: o,
            }),
          ),
        );
      }
      const L = C.memo(function (e) {
        const { attrName: t, fnRender: n, value: o, setValues: r } = e;
        return n(
          o,
          C.useCallback((e) => r((n) => ({ ...n, [t]: e })), [t]),
        );
      });
      var U = n(87300),
        I = n(30814),
        R = n(62738),
        G = n(18305);
      n(45772), n(74763);
      const K = C.createContext(void 0);
      function $(e) {
        const { view: t, pmState: n, children: o } = e,
          r = C.useMemo(() => ({ view: t, pmState: n }), [t, n]);
        return C.createElement(K.Provider, { value: r }, o);
      }
      const V = C.memo(function (e) {
        const { schema: t, refOnUpdate: n } = e;
        return (
          z(
            C.useMemo(
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
          z(C.useMemo(() => (0, I.z)(), [])),
          z(
            C.useMemo(
              () =>
                (function (e) {
                  const { nodes: t, marks: n } = e,
                    o = (0, U.st)(
                      U.I$,
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
                      Escape: U.hy,
                      "Mod-Enter": o,
                      "Shift-Enter": o,
                      "Mod-b": (0, U.wh)(n.strong),
                      "Mod-i": (0, U.wh)(n.italic),
                      "Mod-u": (0, U.wh)(n.underline),
                      "Mod-Shift-x": (0, U.wh)(n.strikethrough),
                      "Ctrl-Shift-s": (0, U.wh)(n.strikethrough),
                      Enter: (0, G.wn)(t.list_item),
                      "Mod-[": (0, G.T2)(t.list_item),
                      "Mod-]": (0, G.$B)(t.list_item),
                      "Ctrl-Shift-1": (0, U.y_)(t.heading, { level: 1 }),
                      "Ctrl-Shift-2": (0, U.y_)(t.heading, { level: 2 }),
                      "Ctrl-Shift-3": (0, U.y_)(t.heading, { level: 3 }),
                      "Ctrl-Shift-4": (0, U.y_)(t.heading, { level: 4 }),
                      "Ctrl-Shift-5": (0, U.y_)(t.heading, { level: 5 }),
                      "Ctrl-Shift-7": (0, U.y_)(t.ordered_list),
                      "Ctrl-Shift-8": (0, U.y_)(t.bullet_list),
                      "Ctrl-Shift-0": (0, U.y_)(t.paragraph),
                    };
                  return (
                    n.code && (r["Ctrl-Shift-c"] = (0, U.wh)(n.code)),
                    t.code_block &&
                      (r["Alt-Ctrl-Shift-c"] = (0, U.y_)(t.code_block)),
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
                    (0, R.w)(r)
                  );
                })(t),
              [t],
            ),
          ),
          z(C.useMemo(() => (0, R.w)(U.RV), [])),
          z(
            C.useMemo(
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
      function z(e) {
        const { pmState: t } = C.useContext(K);
        C.useEffect(() => {
          if (t && e) return t.InstallPlugin(e);
        }, [e, t]);
      }
      var H = n(48139);
      const W = C.memo(function (e) {
        const {
            linkMarkType: t,
            onURLPasted: n,
            schema: o,
            onClickURL: r = j,
          } = e,
          a = C.useRef(r);
        a.current = r;
        const [l, i] = C.useState(),
          [m, d] = C.useState(),
          [u, p] = C.useState(),
          [h, g] = D(o),
          f = C.useMemo(
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
                    ) && (h(e), !0),
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
                        i(e.left + e.width / 2), d(e.bottom + 2), p(n);
                      } else p(void 0);
                      return !1;
                    },
                    mouseleave: (e, t) => (p(void 0), !1),
                  },
                },
              }),
            [t, h, n, o],
          );
        z(f);
        let b = null;
        return (
          u &&
            l &&
            m &&
            (b = C.createElement(q, {
              top: m,
              left: l,
              href: u.getAttribute("href"),
            })),
          C.createElement(C.Fragment, null, b, g)
        );
      });
      function q(e) {
        const { top: t, left: n, href: o } = e,
          [r, a] = C.useState(0),
          s = C.useRef(null);
        C.useLayoutEffect(() => {
          a(s.current.getBoundingClientRect().width);
        }, [t, n, o]);
        const l = { top: `${t}px`, left: `${Math.max(n - r / 2, 12)}px` };
        return C.createElement(
          "div",
          { className: H.Hover, style: l, ref: s },
          C.createElement("div", { className: H.Link }, o),
          C.createElement(
            "div",
            { className: H.LinkHelp },
            (0, T.we)("#UserGameNotes_ClickToOpenLink"),
          ),
        );
      }
      function j(e, t) {
        t.open(e);
      }
      var Z = n(49787),
        X = n.n(Z),
        J = n(90765);
      function Q(e, t, n = 0) {
        return () => [e, { class: t }, n];
      }
      const Y = {
          paragraph: {
            content: "inline*",
            group: "block",
            parseDOM: [{ tag: "p" }],
            toDOM: Q("p", (0, J.A)("pm_paragraph", X().Paragraph)),
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
                  `BB_Header${e.attrs.level} ` + X()[`Header${e.attrs.level}`],
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
              return ["img", { src: t, alt: n, title: o, class: X().Image }];
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
                  let n = "",
                    o = "";
                  for (const e of t.querySelectorAll("source"))
                    "video/mp4" == e.type
                      ? (n = e.src)
                      : "video/webm" == e.type && (o = e.src);
                  return {
                    mp4: n,
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
                  mp4: n,
                  poster: o,
                  autoplay: r,
                  controls: a,
                } = e.attrs,
                s = [];
              return (
                t && s.push(["source", { src: t, type: "video/webm" }]),
                n && s.push(["source", { src: n, type: "video/mp4" }]),
                [
                  "video",
                  { poster: o, autoPlay: !!r, controls: !!a, loop: !a && !!r },
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
            ...G.fF,
            content: "list_item+",
            group: "block",
            toDOM: Q("ul", X().List),
            bbCode: { tag: "list" },
          },
          ordered_list: {
            ...G.o8,
            content: "list_item+",
            group: "block",
            toDOM: Q("ol", X().OrderedList),
            bbCode: { tag: "olist" },
          },
          list_item: {
            ...G.Aw,
            content: "paragraph block*",
            toDOM: Q("li", X().ListItem),
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
              { class: X().CodeBlock },
              ["code", { class: X().Code }, 0],
            ],
            bbCode: { tag: "code" },
          },
        },
        ee = {
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
            toDOM: Q("b", (0, J.A)("BB_Bold", X().Bold)),
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
            toDOM: Q("i", (0, J.A)("BB_Italic", X().Italic)),
            bbCode: { tag: "i" },
          },
          underline: {
            parseDOM: [{ tag: "u" }, { style: "text-decoration=underline" }],
            toDOM: Q("u", (0, J.A)("BB_Underline", X().Underline)),
            bbCode: { tag: "u" },
          },
          strike: {
            parseDOM: [{ style: "text-decoration=line-through" }],
            toDOM: Q("span", (0, J.A)("BB_Strike", X().Strike)),
            bbCode: { tag: "strike" },
          },
          code: {
            parseDOM: [{ tag: "code" }],
            toDOM: Q("code", (0, J.A)("BB_Code", X().Code)),
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
      function te(e, t) {
        if (t) {
          if (Array.isArray(e)) {
            const n = e.filter((e) => t.has(e.tag));
            return n.length > 0 ? n : void 0;
          }
          return t.has(e.tag) ? e : void 0;
        }
        return e;
      }
      const ne = { nodes: { ...Y }, marks: { ...ee } },
        oe = new (class {
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
          ConvertAttrToBBCodeArgs(e, t) {
            const n = this.m_PMToBBCodeConfig.mapNodes.get(e.type);
            return (n && n.AttrsToBBArgs && n.AttrsToBBArgs(t, e).args) || {};
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
                l = te(r, a);
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
        })(ne);
      var re = n(45264),
        ae = n(38602),
        se = n(94361),
        le = n(35488),
        ce = n(90601);
      const ie = "/images/image_error.svg";
      function me(e) {
        const { uploadImage: t, nodeType: n, nMaxImageSize: o = ue } = e;
        return (
          z(
            C.useMemo(
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
                              src: ie,
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
                                  a = (0, ce.wI)(await r.arrayBuffer());
                                de(
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
      function de(e, t, n) {
        n.state.doc.descendants((o, r) => {
          if ("image" === o.type.name && o.attrs.src === e) {
            const e = n.state.tr.setNodeAttribute(r, "src", t);
            n.dispatch(e);
          }
        });
      }
      const ue = 1048576;
      var pe = n(69164),
        he = n(69),
        ge = n(41537),
        fe = n(91633),
        be = n(42318),
        _e = n(87429);
      const Ce = "noborder",
        ke = "equalcells",
        Ee = _e.of({
          tableGroup: "block",
          cellContent: "paragraph block*",
          cellAttributes: {
            class: {
              default: X().TableCell,
              setDOMAttr: (e, t) => {
                t.class = e;
              },
            },
          },
        }),
        Te = {
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
        ve =
          (Ee.table,
          Ee.table_row,
          Q("tr", X().TableRow),
          Ee.table_cell,
          Ee.table_header,
          C.memo(function (e) {
            const { schema: t } = e,
              n = !(!("table" in t.nodes) || !t.nodes.table.spec.tableRole);
            return (
              z(C.useMemo(() => n && _e.AL({ View: we }), [n])),
              z(C.useMemo(() => n && _e.LF(), [n])),
              null
            );
          }));
      class we extends _e.Qg {
        constructor(e, t) {
          super(e, t), this.SetTableClass(e);
        }
        update(e) {
          return !!super.update(e) && (this.SetTableClass(e), !0);
        }
        SetTableClass(e) {
          this.table.className = (0, J.A)(
            X().Table,
            e.attrs[Ce] && X().NoBorder,
            e.attrs[ke] && X().EqualCells,
          );
        }
      }
      var ye = n(52451),
        Se = n(76627);
      const Be = (0, be.Nr)(function (e) {
        const {
            pmState: t,
            className: n,
            refOnUpdate: o,
            refView: r,
            bSpellcheckEnabled: a = !0,
            panelProps: s,
            children: l,
          } = e,
          [c, i] = C.useState(),
          [m, d] = C.useState();
        C.useEffect(() => {
          t && c && d(new fe.Lz(c, { state: t.state }));
        }, [t, c]),
          C.useEffect(() => () => m?.destroy(), [m]),
          (0, ye.D5)(r, m);
        const {
            refDiv: u,
            onActivate: p,
            onGamepadDirection: h,
          } = (function (e) {
            const t = C.useRef(),
              n = (0, ge.FN)(),
              o = C.useCallback(() => {
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
                      A(e, t.left, t.top);
                      break;
                    }
                  }
                }
              }, [n, e]),
              r = C.useCallback((e) => e.currentTarget == e.target, []),
              a = (0, he.ak)(t, null, null, r);
            return { refDiv: t, onActivate: o, onGamepadDirection: a };
          })(m),
          g = (0, ye.Ue)(u, i);
        if (!t) return null;
        const { schemaConfig: f, bbcodeParser: b } = t;
        return C.createElement(
          $,
          { view: m, pmState: t },
          C.createElement(pe.Z, {
            key: `editordiv_${a}`,
            className: (0, J.A)(n, Se.Container),
            ref: g,
            spellCheck: a,
            focusable: !0,
            onActivate: p,
            onOKActionDescription: (0, T.we)("#UserGameNotes_Edit"),
            onGamepadDirection: h,
            ...s,
          }),
          C.createElement(V, { refOnUpdate: o, schema: f.pm_schema }),
          C.createElement(Ae, { parser: b, schema: f.pm_schema }),
          C.createElement(ve, { schema: f.pm_schema }),
          l,
        );
      });
      const Ae = C.memo(function (e) {
        const { parser: t, schema: n } = e;
        return (
          z(
            C.useMemo(
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
      var Ne = n(98995),
        Me = n(72476),
        Oe = n(71594),
        Pe = n(79769),
        De = n(43691);
      const xe = () => C.useContext(Le);
      function Fe(e) {
        const { view: t, refUpdateToolbar: n, children: o } = e,
          r = C.useRef();
        r.current || (r.current = new Pe.lu()),
          C.useEffect(
            () => (
              (0, ye.cZ)(n, () => r.current.Dispatch(t)),
              () => (0, ye.cZ)(n, void 0)
            ),
            [t, n],
          );
        const a = C.useMemo(() => ({ callbacks: r.current, view: t }), [t]);
        return t ? C.createElement(Le.Provider, { value: a }, o) : null;
      }
      const Le = C.createContext(void 0);
      function Ue() {
        return C.createElement("div", { className: Se.Gap });
      }
      function Ie() {
        return C.createElement("div", { className: Se.Spacer });
      }
      function Re(e) {
        return C.createElement(
          pe.Z,
          {
            className: (0, J.A)(e.className, Se.ToolbarRow),
            "flow-children": "row",
          },
          e.children,
        );
      }
      function Ge(e) {
        const { nodeType: t, attrs: n, children: o, ...r } = e,
          { callbacks: a, view: s } = xe(),
          [l, c] = C.useState(() => y(s.state, t, n)),
          i = C.useCallback((e) => c(y(e.state, t, n)), [t, n]);
        (0, ye.hL)(a, i);
        const m = C.useMemo(() => U.y_(t, n), [n, t]);
        return C.createElement($e, {
          ...r,
          command: m,
          toggled: l,
          children: o,
        });
      }
      function Ke(e) {
        const { mark: t, children: n, ...o } = e,
          { callbacks: r, view: a } = xe(),
          [s, l] = C.useState(() => w(a.state, t)),
          c = C.useCallback((e) => l(w(e.state, t)), [t]);
        (0, ye.hL)(r, c);
        const i = C.useMemo(() => U.wh(t), [t]);
        return C.createElement($e, {
          ...o,
          command: i,
          toggled: s,
          children: n,
        });
      }
      function $e(e) {
        const { command: t, toggled: n, children: o, ...r } = e,
          { view: a, callbacks: s } = xe(),
          [l, c] = C.useState(() => t(a.state));
        (0, ye.hL)(
          s,
          C.useCallback((e) => c(t(e.state)), [t]),
        ),
          C.useEffect(() => c(t(a.state)), [t, a]);
        const i = !l && !n;
        return C.createElement(
          ze,
          { ...r },
          C.createElement(
            N.$n,
            {
              className: (0, J.A)(Se.CommandButton, n && Se.Toggled),
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
      function Ve(e) {
        const {
          onClick: t,
          toggled: n,
          disabled: o,
          children: r,
          className: a,
          ...s
        } = e;
        return C.createElement(
          ze,
          { ...s },
          C.createElement(
            N.$n,
            {
              className: (0, J.A)(Se.CommandButton, n && Se.Toggled, a),
              onMouseDown: (e) => {
                e.preventDefault(), t();
              },
              disabled: !0 === o,
            },
            r,
          ),
        );
      }
      function ze(e) {
        const { tooltip: t, keyboardShortcut: n, children: o } = e;
        if (!t) return o;
        const r = n
          ? C.createElement(He, { tooltip: t, keyboardShortcut: n })
          : t;
        return C.createElement(
          Ne.Gq,
          { toolTipContent: r, direction: "bottom" },
          o,
        );
      }
      function He(e) {
        const { tooltip: t, keyboardShortcut: n } = e;
        return C.createElement(
          "div",
          { className: Se.TooltipWithShortcut },
          C.createElement("div", null, (0, T.we)(t)),
          C.createElement(
            "div",
            null,
            C.createElement(We, { keyboardShortcut: n }),
          ),
        );
      }
      function We(e) {
        const { keyboardShortcut: t } = e,
          n = t.split("-"),
          o = n.pop();
        return C.createElement(
          C.Fragment,
          null,
          n.map((e, t) =>
            C.createElement(
              C.Fragment,
              { key: t },
              C.createElement(qe, null, C.createElement(je, { modifier: e })),
              " + ",
            ),
          ),
          C.createElement(qe, null, o.toUpperCase()),
        );
      }
      function qe(e) {
        return C.createElement("span", { className: Se.KeyCap }, e.children);
      }
      function je(e) {
        const { modifier: t } = e;
        switch (t) {
          case "Mod":
            return "macos" == De.TS.PLATFORM ? "⌘" : "Ctrl";
          case "Shift":
            return De.TS.PLATFORM, "Shift";
          case "Ctrl":
            return "macos" == De.TS.PLATFORM ? "Control" : "Ctrl";
          case "Alt":
            return "macos" == De.TS.PLATFORM ? "Option" : "Alt";
        }
        return null;
      }
      function Ze(e) {
        const { schema: t, addtlAttrs: n, children: o } = e,
          { callbacks: r, view: a } = xe(),
          [s, l] = C.useState(() => w(a.state, t.marks.link)),
          c = C.useCallback((e) => l(w(e.state, t.marks.link)), [t]);
        (0, ye.hL)(r, c);
        const [i, m] = D(t, n);
        return C.createElement(
          C.Fragment,
          null,
          m,
          C.createElement(
            Ve,
            {
              onClick: () => i(a),
              toggled: s,
              tooltip: "#FormattingToolbar_InsertLink",
              keyboardShortcut: "Mod-k",
            },
            o,
          ),
        );
      }
      function Xe() {
        return C.createElement(
          C.Fragment,
          null,
          C.createElement(
            $e,
            {
              tooltip: "#FormattingToolbar_Undo",
              keyboardShortcut: "Mod-z",
              command: a.tN,
            },
            C.createElement(le.Undo, null),
          ),
          C.createElement(
            $e,
            {
              tooltip: "#FormattingToolbar_Redo",
              keyboardShortcut:
                "macos" == De.TS.PLATFORM ? "Mod-Shift-z" : "Mod-y",
              command: a.ZS,
            },
            C.createElement(le.Redo, null),
          ),
        );
      }
      function Je(e) {
        const { schema: t } = e;
        return C.createElement(
          C.Fragment,
          null,
          C.createElement(
            Ke,
            {
              tooltip: "#FormattingToolbar_Bold",
              keyboardShortcut: "Mod-b",
              mark: t.marks.strong,
            },
            C.createElement(le.TextBold, null),
          ),
          C.createElement(
            Ke,
            {
              tooltip: "#FormattingToolbar_Italic",
              keyboardShortcut: "Mod-i",
              mark: t.marks.italic,
            },
            C.createElement(le.TextItalic, null),
          ),
          C.createElement(
            Ke,
            {
              tooltip: "#FormattingToolbar_Underline",
              keyboardShortcut: "Mod-u",
              mark: t.marks.underline,
            },
            C.createElement(le.TextUnderline, null),
          ),
          "strike" in t.marks &&
            C.createElement(
              Ke,
              {
                tooltip: "#FormattingToolbar_Strike",
                keyboardShortcut: "Mod-Shift-x",
                mark: t.marks.strike,
              },
              C.createElement(le.TextStrikethrough, null),
            ),
          "code" in t.marks &&
            C.createElement(
              Ke,
              {
                tooltip: "#FormattingToolbar_InlineCode",
                keyboardShortcut: "Ctrl-Shift-c",
                mark: t.marks.code,
              },
              C.createElement(le.TextCode, null),
            ),
        );
      }
      function Qe(e) {
        const { schema: t } = e;
        return C.createElement(
          Ge,
          {
            tooltip: "#FormattingToolbar_Paragraph",
            keyboardShortcut: "Ctrl-Shift-0",
            nodeType: t.nodes.paragraph,
          },
          C.createElement(le.TextParagraph, null),
        );
      }
      function Ye(e) {
        const { schema: t, maxLevel: n = 1, levels: o } = e,
          r = n + o - 1;
        return C.createElement(
          C.Fragment,
          null,
          n <= 1 &&
            C.createElement(
              Ge,
              {
                tooltip: "#FormattingToolbar_HeadingLevel1",
                keyboardShortcut: "Ctrl-Shift-1",
                nodeType: t.nodes.heading,
                attrs: { level: 1 },
              },
              C.createElement(le.TextH1, null),
            ),
          n <= 2 &&
            r >= 2 &&
            C.createElement(
              Ge,
              {
                tooltip: "#FormattingToolbar_HeadingLevel2",
                keyboardShortcut: "Ctrl-Shift-2",
                nodeType: t.nodes.heading,
                attrs: { level: 2 },
              },
              C.createElement(le.TextH2, null),
            ),
          n <= 3 &&
            r >= 3 &&
            C.createElement(
              Ge,
              {
                tooltip: "#FormattingToolbar_HeadingLevel3",
                keyboardShortcut: "Ctrl-Shift-3",
                nodeType: t.nodes.heading,
                attrs: { level: 3 },
              },
              C.createElement(le.TextH3, null),
            ),
          n <= 4 &&
            r >= 4 &&
            C.createElement(
              Ge,
              {
                tooltip: "#FormattingToolbar_HeadingLevel4",
                keyboardShortcut: "Ctrl-Shift-4",
                nodeType: t.nodes.heading,
                attrs: { level: 4 },
              },
              C.createElement(le.TextH4, null),
            ),
          n <= 5 &&
            r >= 5 &&
            C.createElement(
              Ge,
              {
                tooltip: "#FormattingToolbar_HeadingLevel5",
                keyboardShortcut: "Ctrl-Shift-5",
                nodeType: t.nodes.heading,
                attrs: { level: 5 },
              },
              C.createElement(le.TextH5, null),
            ),
        );
      }
      function et(e) {
        const { schema: t, showIndentButtonsAsNeeded: n = !1 } = e,
          { callbacks: o, view: r } = xe(),
          { bullet_list: a, ordered_list: s, list_item: l } = t.nodes,
          c = C.useMemo(() => G.T2(l), [l]),
          i = C.useMemo(() => G.$B(l), [l]),
          [m, d] = C.useState(() => c(r.state) || i(r.state));
        return (
          (0, ye.hL)(
            o,
            C.useCallback(
              (e) => {
                d(c(e.state) || i(e.state));
              },
              [c, i],
            ),
          ),
          C.createElement(
            C.Fragment,
            null,
            C.createElement(
              tt,
              {
                tooltip: "#FormattingToolbar_BulletedList",
                keyboardShortcut: "Ctrl-Shift-8",
                list_type: a,
                list_item: l,
              },
              C.createElement(le.TextBullets, null),
            ),
            s && !1,
            (!n || m) &&
              C.createElement(
                C.Fragment,
                null,
                C.createElement(
                  $e,
                  {
                    tooltip: "#FormattingToolbar_OutdentList",
                    keyboardShortcut: "Mod-[",
                    command: c,
                  },
                  C.createElement(le.TextOutdent, null),
                ),
                C.createElement(
                  $e,
                  {
                    tooltip: "#FormattingToolbar_IndentList",
                    keyboardShortcut: "Mod-[",
                    command: i,
                  },
                  C.createElement(le.TextIndent, null),
                ),
              ),
          )
        );
      }
      function tt(e) {
        const { list_type: t, list_item: n, children: o, ...r } = e,
          { callbacks: a, view: s } = xe(),
          l = C.useCallback((e) => void 0 !== S(e.state, t), [t]),
          [c, i] = C.useState(() => l(s)),
          m = C.useMemo(() => G.Sd(t), [t]),
          d = C.useMemo(() => G.T2(n), [n]);
        return (
          (0, ye.hL)(
            a,
            C.useCallback(
              (e) => {
                i(l(e));
              },
              [l],
            ),
          ),
          C.createElement($e, { ...r, toggled: c, command: c ? d : m }, o)
        );
      }
      function nt(e) {
        const { schema: t, addtlAttrs: n } = e;
        return C.createElement(
          Ze,
          { schema: t, addtlAttrs: n },
          C.createElement(le.TextLink, null),
        );
      }
      function ot(e) {
        const { bSpellcheckEnabled: t, setSpellcheckEnabled: n } = e;
        return C.createElement(
          Ve,
          {
            tooltip: t
              ? "#FormattingToolbar_DisableSpellcheck"
              : "#FormattingToolbar_EnableSpellcheck",
            toggled: t,
            onClick: () => n(!t),
          },
          C.createElement(le.SpellCheck, null),
        );
      }
      var rt = n(51076);
      function at(e) {
        const {
            schema: t,
            view: n,
            refUpdateToolbar: o,
            className: r,
            bSpellcheckEnabled: a,
            setSpellcheckEnabled: s,
          } = e,
          [l, c] = (0, rt.SP)("FormattingToolbar_Expanded", !1);
        return C.createElement(
          Fe,
          { refUpdateToolbar: o, view: n },
          C.createElement(
            "div",
            { className: (0, J.A)(Se.Toolbar, r) },
            C.createElement(
              Re,
              null,
              C.createElement(Xe, null),
              C.createElement(Ue, null),
              C.createElement(Je, { schema: t }),
              C.createElement(Ie, null),
              C.createElement(
                Ve,
                {
                  onClick: () => c(!l),
                  tooltip: "#FormattingToolbar_ExpandOptions",
                },
                C.createElement(le.Chevron, { direction: l ? "up" : "down" }),
              ),
            ),
            C.createElement(
              Oe.R,
              { visible: l },
              C.createElement(
                Re,
                null,
                C.createElement(Qe, { schema: t }),
                C.createElement(Ye, { schema: t, levels: 5 }),
                C.createElement(
                  Ge,
                  {
                    nodeType: t.nodes.code_block,
                    tooltip: (0, T.we)("#FormattingToolbar_CodeBlock"),
                  },
                  C.createElement(le.TextCodeBlock, null),
                ),
                C.createElement(Ue, null),
                C.createElement(et, { schema: t }),
                C.createElement(Ue, null),
                C.createElement(nt, { schema: t }),
                C.createElement(Ie, null),
                s &&
                  C.createElement(ot, {
                    bSpellcheckEnabled: a,
                    setSpellcheckEnabled: s,
                  }),
              ),
            ),
          ),
        );
      }
      var st = n(10325);
      const lt = 15;
      function ct(e) {
        const { note: t, hidden: n = !1 } = e,
          [o, r] = C.useState(),
          a = C.useRef(),
          s = C.useRef(!1),
          l = (0, ae.$G)(),
          c = (0, ae.EC)(),
          i = (0, ae.WA)(),
          m = (0, re.H0)(t.appid),
          d = (0, Me.Qn)(),
          { mutate: u } = (0, re.df)(t),
          [p, h] = C.useState();
        C.useEffect(() => {
          s.current ||
            h(new _(oe, t.content, (e, t) => u({ title: ut(t), bbcode: e })));
        }, [u, t.content]);
        const { bDirty: g } = k(p, { msAutosaveTimeout: 1e3 * lt });
        C.useEffect(() => {
          g &&
            !s.current &&
            ((s.current = !0),
            se.y.ReportTrackedAction("/GameNotes/NoteModified"));
        }, [g]),
          C.useEffect(() => {
            o && !n && o.focus();
          }, [o, n]),
          C.useEffect(() => {
            n && p && p.CommitChanges();
          }, [n, p]);
        const f = (0, ae.qq)(),
          b = (0, re.Bc)(t, f),
          E = {
            onSecondaryButton: () => b.mutate(),
            onSecondaryActionDescription: (0, T.we)(
              "#UserGameNotes_DeleteNote",
            ),
          };
        return C.createElement(
          "div",
          { className: st.NoteEditorArea },
          !d &&
            C.createElement(at, {
              schema: oe.pm_schema,
              view: o,
              refUpdateToolbar: a,
              className: st.Toolbar,
              bSpellcheckEnabled: c,
              setSpellcheckEnabled: i,
            }),
          C.createElement(
            Be,
            {
              pmState: p,
              className: st.EditorInput,
              refOnUpdate: a,
              refView: r,
              bSpellcheckEnabled: c,
              panelProps: E,
            },
            C.createElement(me, {
              uploadImage: m,
              nodeType: oe.pm_schema.nodes.image,
            }),
            C.createElement(W, {
              linkMarkType: oe.pm_schema.marks.link,
              schema: oe.pm_schema,
              onClickURL: l,
            }),
          ),
          !d && C.createElement(it, { note: t, bDirty: g }),
        );
      }
      function it(e) {
        const { note: t, bDirty: n } = e,
          [o, r, a] = (0, ye.uD)(!1),
          s = (0, ae.O8)(),
          l = (0, ae.qq)(),
          { mutate: c, isPending: i } = (0, re.Bc)(t, l),
          m = C.useCallback(() => {
            !n && t.not_persisted ? c() : r();
          }, [n, t, c, r]);
        return C.createElement(
          "div",
          { className: st.NoteActions },
          o &&
            C.createElement(dt, {
              note: t,
              closeModal: a,
              deleteNote: c,
              deletePending: i,
            }),
          C.createElement(
            Ne.he,
            { toolTipContent: "#UserGameNotes_DeleteNote", direction: "top" },
            C.createElement(
              N.$n,
              { onClick: m },
              C.createElement(le.Trash, null),
            ),
          ),
          s && C.createElement(mt, { bDirty: n }),
        );
      }
      function mt(e) {
        const { bDirty: t } = e,
          n = (0, ae.qq)();
        return t
          ? C.createElement(
              N.jn,
              { onClick: () => n(), className: st.CloseWindowButton },
              (0, T.we)("#Button_SaveAndClose"),
            )
          : C.createElement(
              N.$n,
              { onClick: () => n(), className: st.CloseWindowButton },
              (0, T.we)("#Button_Close"),
            );
      }
      function dt(e) {
        const { note: t, closeModal: n, deleteNote: o, deletePending: r } = e;
        return C.createElement(
          M.EN,
          { active: !0 },
          C.createElement(M.o0, {
            strTitle: (0, T.we)("#UserGameNotes_DeleteNote"),
            strDescription: (0, T.we)("#UserGameNotes_PromptDelete"),
            onOK: () => o(),
            bOKDisabled: r,
            strOKButtonText: (0, T.we)("#Button_Delete"),
            closeModal: n,
          }),
        );
      }
      function ut(e) {
        let t = "";
        for (let n = 0; n < e.content.childCount; n++) {
          const o = e.content.child(n);
          if (o.isText) t += o.text;
          else {
            if (((t = t.trim()), t.length > 4)) return t;
            if (((t = ut(o)), t.length > 4)) return t;
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
        d = n(40756),
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
            ? s.createElement(C, { popup: t, refPopup: r })
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
      function C(e) {
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
      n.r(t), n.d(t, { default: () => I });
      var o = n(63696),
        r = n(49519),
        a = n(73259),
        s = n(45264),
        l = n(40756),
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
          ? o.createElement(_, {
              noteParent: t,
              notes: i,
              activeNoteID: d?.id,
              actions: p,
            })
          : null;
      }
      function _(e) {
        const { noteParent: t, notes: n, activeNoteID: a, actions: s } = e,
          [l, h] = (0, d.SP)("NotesListCollapsed", !1),
          g = (0, p.wR)(),
          b = (0, f.Qn)(),
          _ = n.map((e) => ({
            title:
              e.title?.length > 0
                ? e.title
                : (0, m.we)("#UserGameNotes_Untitled"),
            identifier: e.id,
            content: o.createElement(C, { note: e }),
            pageClassName: u.NotePage,
            hideTitle: !0,
          })),
          E = (0, r.W6)(),
          T = o.useCallback((e) => k(E, t, e), [E, t]);
        return o.createElement(c.O7, {
          title: (0, m.we)("#UserGameNotes_NotesList"),
          pages: _,
          className: (0, i.A)(u.NotesPagedSettings, g && u.PinnedView),
          page: a,
          onPageRequested: T,
          bottomControls: s,
          hideList: l,
          toggleHideList: g || b ? void 0 : () => h(!l),
        });
      }
      function C(e) {
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
      var E = n(39941),
        T = n(11682),
        v = n.n(T),
        w = n(61416),
        y = n(12176),
        S = n(10812),
        B = n(46382),
        A = n(43691),
        N = n(44846);
      let M;
      const O = 864e5;
      function P(e) {
        return `appinfo_${e}_${A.TS.LANGUAGE}`;
      }
      function D(e) {
        return Boolean(e && Date.now() - e.timeCached < O);
      }
      function x(e) {
        const t = (0, B.KV)(),
          n = (0, B.rX)();
        return (0, w.I)({
          queryKey: ["appinfo", e],
          queryFn: async () =>
            (function (e, t) {
              return (
                M ||
                  (M = new (v())(
                    async (n) => {
                      const o = new Map();
                      (await Promise.all(n.map((e) => t.GetObject(P(e)))))
                        .filter(D)
                        .forEach(({ value: e }) => o.set(e.appid, e));
                      const r = n.slice().filter((e) => !o.has(e));
                      if (r.length) {
                        const n = y.w.Init(S._z);
                        n.Body().set_language((0, N.sf)(A.TS.LANGUAGE)),
                          n.Body().set_appids(r);
                        const a = await S.BE.GetApps(e, n);
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
                M
              );
            })(t, n).load(e),
          staleTime: O,
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
          o.createElement(E.N_, { to: a.O.AppNotes(t.appid) }, n?.name),
        );
      }
      function I(e) {
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
