/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [9482],
  {
    80968: (e) => {
      e.exports = {
        EditorPanel: "_2SgPxDudv7oRkzlHsNm4_O",
        AboutTheGameArea: "_3EAE8BxFPnb_g0Ct5b4QzW",
        Awards: "_26nsky_SK1122q1xYQ0VZu",
        StoreAppPageHeader: "_1aQY7Yz23XDN0N4IVctriG",
        GradientRule: "_1dK_q5EmTZgebmJeCzHq1s",
        GameDescriptionEditorToolbar: "_14dow-GSmyLacYWBXCNV1l",
        Sticky: "_2YccUEt5UoKig0cAk4W6DK",
      };
    },
    33645: (e) => {
      e.exports = {
        Bold: "_3cln317VYhwhE1fSeMCG48",
        Italic: "_3TPGDj4kc0QGKvO8FJmGz8",
        Paragraph: "_3lnqGBzYap-Z2T81XBiBUU",
        Header1: "_2LYsFAwy8wdRJQTNJOUcsT",
        Header2: "_6-VR2WCBCDupCcUN5INQM",
        Header3: "_1sGnlGwCeaGUp63h4Lx-pU",
        Header4: "_3VHY5vmO07MFpoOgTB9eOi",
        Header5: "_1Vk-9-C_y-lBA5ucPl6t8X",
        CenterSpan: "zCnp-VELUMybbfxOD-ze9",
        SmallText: "WBzrd438Bd8Z3J-j_iglW",
        Underline: "GrhFWtBdrSZP611s1UqqT",
        Strike: "_3pK7sh9FYdigMXxcUVI4DY",
        Spoiler: "_3kRr4bh8twnlt_7wcEFZr3",
        Revealed: "_3g1-8c9NBcNDwW4-6x1pM6",
        SpoilerText: "_3r66KOH_Vckmfps3XUOVrY",
        DisabledMouseEvents: "_1O62-3Y03GsnA0709QyJ_O",
        BlockQuote: "_3MQ0Cuf_h-nZ81xIubg8rh",
        QuoteAuthor: "_1MzmaZcQPMRfrTHs3k0fIZ",
        PullQuote: "_2kA0eAmv8ifh0zphoq4ntM",
        Code: "_2ODaX8lO7DKLKke76c2Wya",
        CodeBlock: "_1I3OP84ayrCIMuBrCrkosi",
        List: "_3Y-LRoi5aeZ9-3ujWjXuG3",
        OrderedList: "DojPxwyYpx3hwuPIaJPCq",
        ListItem: "_1iXxYKOlzzXiVr02E7n2Fe",
        HR: "-xPK0REpludHjRG8xQfih",
        Table: "_2CAsiFd9UHbUOqzd0e7ioe",
        NoBorder: "_1rO4D9vLxJRWz9sW4-ahSY",
        TableRow: "_3FJk0y6E6I8nSYfCIqGP8",
        TableData: "_1PCHOM5zSRFfeHzwDmEukB",
        TableHeader: "_1NpENNz7rvObsTC99AQFda",
        EqualCells: "_1CtoyG6UPAlYp7PCGLXx8L",
        ExpandSectionBlock: "_2cmZMzZlRrszDBF97Di0cD",
        ExpandSectionHeader: "uAvfe31kBh5TZrse069d1",
        EmbedArrow: "_3tVf4GSoWxEOZrxL_PQ4iA",
        ExpandSectionBody: "_33CTl_a7XYxFIng-fm4A5K",
        ExpandSection_WithTitle: "_1dfVJUq9KmDOuhyOZ7lcXv",
        LinkButton: "_3TN0uESBGJ-kUDPWWX2YWz",
        Image: "_3K0NuxYUYncdQ-cNK7udMn",
        PreservedUnsupportedTag: "_3YMzBRWJTOo7eai1uFGV7i",
        Tag: "_3SEDw4GZynd3ZmTQWlyOcS",
      };
    },
    9482: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => pe });
      var n = r(90626),
        o = r(49693),
        a = r(81393);
      function s(e, t) {
        return c(t.pm_schema, t.pm_to_bbcode_config, e, []);
      }
      function c(e, t, r, n) {
        let s = r.marks,
          d = "";
        const m = t.mapNodes.get(r.type),
          { tag: u, args: p } = i(m, r.attrs);
        return (
          u && (d += (0, o.CS)(u, p)),
          r.content.forEach((r) => {
            ([d, s] = l(t, s, r.marks, d)),
              ([d, s] = (function (e, t, r, n) {
                let s;
                for (const c of r)
                  if (-1 === t.indexOf(c)) {
                    s || (s = t.slice());
                    const r = e.mapMarks.get(c.type);
                    if (((0, a.w)(r, "mark missing bbtag"), r)) {
                      s.push(c);
                      const { args: e, tag: t } = i(r, c.attrs);
                      n += (0, o.CS)(t, e || {});
                    }
                  }
                return [n, s ?? t];
              })(t, s, r.marks, d)),
              r.type.isText
                ? (d += (0, o.vE)(r.text || ""))
                : r.type == e.nodes.hard_break
                  ? (d += "\n")
                  : (d += c(e, t, r, s));
          }),
          ([d] = l(t, s, n, d)),
          u && (d += (0, o.op)(u)),
          d
        );
      }
      function l(e, t, r, n) {
        const s = [];
        for (const e of t) -1 === r.indexOf(e) && s.push(e);
        if (!s.length) return [n, t];
        const c = t.slice();
        for (
          ;
          s.length && ((0, a.w)(c.length, "no marks left to close"), c.length);
        ) {
          const t = c.pop(),
            r = e.mapMarks.get(t.type),
            { tag: a } = i(r, t.attrs);
          n += (0, o.op)(a);
          const l = s.indexOf(t);
          -1 != l && s.splice(l, 1);
        }
        return [n, c];
      }
      function i(e, t) {
        let r,
          n = {};
        return (
          e &&
            (e.AttrsToBBArgs && ({ tag: r, args: n } = e.AttrsToBBArgs(t)),
            r || (r = e.tag),
            n || (n = {})),
          { tag: r, args: n }
        );
      }
      var d = r(91986),
        m = r(52893),
        u = r(72739),
        p = r(22145);
      function g(e) {
        const { specs: t } = e,
          [r, o] = n.useState([]),
          a = n.useRef(0),
          s = n.useCallback(
            (e) => (
              o((t) => [...t, { id: a.current++, nodeView: e }]),
              () => o((t) => t.filter((t) => t.nodeView != e))
            ),
            [],
          ),
          c = n.useMemo(() => {
            const e = {};
            return (
              t.forEach(
                (t) => (e[t.type.name] = (e, r, n) => new f(t, e, r, n, s)),
              ),
              new m.k_({ props: { nodeViews: e } })
            );
          }, [t, s]);
        return (
          (0, p.c$)(c),
          r.map(({ id: e, nodeView: t }) =>
            n.createElement(h, { key: e, nodeView: t }),
          )
        );
      }
      function h(e) {
        const {
            element: t,
            spec: r,
            getProps: o,
            onPropsChanged: a,
            actions: s,
            isSelected: c,
          } = e.nodeView,
          [l, i] = n.useReducer((e) => e + 1, 0);
        return (
          n.useEffect(() => a.Register(i).Unregister, [a, i]),
          u.createPortal(
            n.createElement(r.component, { ...o(), selected: c(), ...s }),
            t,
          )
        );
      }
      class f {
        dom;
        onPropsChanged;
        node;
        selected;
        destroy;
        constructor(e, t, r, n, o) {
          this.node = t;
          const a = r.dom.ownerDocument.createElement(
            e.type.isInline ? "span" : "div",
          );
          this.dom = a;
          const { selection: s } = r.state;
          this.selected = n() >= s.from && n() + t.nodeSize <= s.to;
          const c = {
              setAttrs: (e) => {
                r.dispatch(r.state.tr.setNodeMarkup(n(), void 0, e));
              },
              removeNode: () => {
                r.dispatch(r.state.tr.delete(n(), n() + 1));
              },
              focusView: () => {
                r.focus();
              },
            },
            l = new d.l();
          (this.destroy = o({
            element: a,
            spec: e,
            getProps: () => e.readProps(this.node),
            isSelected: () => this.selected,
            onPropsChanged: l,
            actions: c,
          })),
            (this.onPropsChanged = l.Dispatch.bind(l));
        }
        update(e, t, r) {
          return (
            e.type == this.node.type &&
            ((this.node = e), this.onPropsChanged(), !0)
          );
        }
        selectNode() {
          (this.selected = !0), this.onPropsChanged();
        }
        deselectNode() {
          (this.selected = !1), this.onPropsChanged();
        }
      }
      var b = r(36225),
        _ = r(92503),
        T = r(71696),
        C = r(57053);
      class k {
        m_nodes = [];
        m_schema;
        constructor(e) {
          this.m_schema = e;
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
      function E(e) {
        return e
          .filter((e) => e.isText)
          .map((e) => e.text)
          .join();
      }
      class B extends o.Al {
        m_schemaConfig;
        m_mapPMBBNodes = new Map();
        constructor(e) {
          super(e.bbcode_dictionary, () => new k(e.pm_schema)),
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
            this.ConvertLineBreaksToParagraphs(C.FK.fromArray(t)),
          );
        }
        TryCreateNode(e, t, r) {
          let n = C.FK.from(t);
          if (!e.node.validContent(n) && e.acceptNode) {
            let r = t.filter((t) => t.type == e.acceptNode);
            if (!r.length) {
              let n = t;
              e.acceptNode.isBlock &&
                n.length > 1 &&
                n[n.length - 1].type == this.schema.nodes.hard_break &&
                (n = n.slice(0, -1));
              const o = this.m_mapPMBBNodes.get(e.acceptNode.name);
              (0, a.w)(
                o,
                `Indicated acceptNode type ${e.acceptNode.name} for ${e.node.name} missing`,
              ),
                (r = o
                  ? [this.TryCreateNode(o, n, void 0)]
                  : [e.acceptNode.create(void 0, n)]);
            }
            n = C.FK.from(r);
          }
          return e.node.createAndFill(r, n) || e.node.create(r, n);
        }
        BBNodeToPMNode(e, t, ...r) {
          let n = e.BBArgsToAttrs ? e.BBArgsToAttrs(t.args || {}) : void 0;
          try {
            return (
              "convertContentToAttr" in e &&
                e.convertContentToAttr &&
                ((n && n[e.convertContentToAttr]) ||
                  (n = { ...(n || {}), [e.convertContentToAttr]: E(r) }),
                "node" in e && (r = [])),
              "node" in e
                ? this.TryCreateNode(e, r, n)
                : r.map((t) => t.mark([...t.marks, e.mark.create(n)]))
            );
          } catch (e) {
            return (
              console.error(`Error parsing [${t.tagname}] tag: ${e}`, e), []
            );
          }
        }
        ConvertLineBreaksToParagraphs(e) {
          const t = new Map(),
            r = this.m_schemaConfig.pm_schema;
          this.m_mapPMBBNodes.forEach((e) => {
            e.acceptNode && t.set(e.acceptNode.name, e.node);
          });
          const n = [],
            o = {
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
                t && (n.push(t.createChecked({}, this.nodes)), this.reset());
              },
            };
          return (
            e.forEach((e) => {
              const s = e.type == r.nodes.hard_break,
                c = C.FK.from(e);
              if (s || r.topNodeType.validContent(c)) {
                const t = s && o.nodes.length > 0;
                o.emit(),
                  s
                    ? t || n.push(r.nodes.paragraph.createChecked())
                    : n.push(e);
              } else {
                let n;
                (n = r.nodes.paragraph.validContent(c)
                  ? r.nodes.paragraph
                  : t.get(e.type.name)),
                  n
                    ? o.accumulate(n, e)
                    : ((0, a.w)(
                        !1,
                        `Couldn't accept ${e.type.name} at root of document, converting to paragraph`,
                      ),
                      (n = r.nodes.paragraph),
                      o.accumulate(
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
            (!o.nodes.length && n.length) || o.emit(!0),
            C.FK.from(n)
          );
        }
      }
      var A = r(29287),
        y = r(98724);
      var v = r(37834),
        x = r(32381),
        w = r(44078),
        M = r(61712),
        O = r(52038),
        D = r(61859),
        N = r(84933),
        P = r(78327),
        F = r(73309);
      function S(e) {
        const {
            schemaConfig: t,
            bbcode: r,
            className: o,
            onUpdate: a,
            refView: s,
            bSpellcheckEnabled: c = !0,
            panelProps: l,
            children: i,
            dataKey: d,
          } = e,
          [u, g] = n.useState(),
          h = n.useRef(),
          f = n.useMemo(() => new B(t), [t]),
          b = n.useRef(f);
        b.current = f;
        const _ = n.useCallback(
          (e) => {
            if (!e) return void h.current?.destroy();
            const r = h.current;
            r && r.destroy();
            const n = t.pm_schema;
            (h.current = new A.Lz(e, {
              state: r?.state ?? m.$t.create({ schema: n }),
              transformPasted: (e, t) =>
                (function (e, t, r) {
                  let n = !1;
                  if (
                    (r.content.forEach((e) => {
                      e.type == t && (n = !0);
                    }),
                    !n)
                  )
                    return r;
                  const o = e.current.ConvertLineBreaksToParagraphs(r.content);
                  return C.Ji.maxOpen(o);
                })(b, n.nodes.hard_break, e),
            })),
              g(h.current);
          },
          [t],
        );
        n.useEffect(() => {
          u &&
            u.updateState(
              (function (e, t, r) {
                const n = (0, y.b6)(),
                  o = n.spec.key?.get(r),
                  a = [...r.plugins.filter((e) => e != o), n];
                return m.$t.create({ schema: t, doc: e, plugins: a });
              })(b.current.ParseBBCode(r), t.pm_schema, u.state),
            );
        }, [t, r, u, d]),
          (0, N.D5)(s, u);
        const {
            refDiv: T,
            onActivate: k,
            onGamepadDirection: E,
          } = (function (e) {
            const t = (0, P.rP)(),
              r = n.useRef(),
              o = n.useCallback(
                (e) => {
                  (0, M.iv)(e, t.IN_VR);
                },
                [t.IN_VR],
              ),
              a = (0, M.FN)(
                { onTextEntered: o },
                () => r.current?.ownerDocument.defaultView,
              ),
              s = n.useCallback(() => {
                a.ShowVirtualKeyboard();
                let t = e.current?.hasFocus();
                if (!t) {
                  e.current?.focus();
                  let t = e.current.dom.childNodes;
                  for (let n = 0; n < t.length; ++n) {
                    let o = t[n],
                      a = o.offsetTop;
                    if (void 0 !== a && a >= r.current.scrollTop) {
                      let t = o.getBoundingClientRect();
                      (0, v.bQ)(e.current, t.left, t.top);
                      break;
                    }
                  }
                }
              }, [a, e]),
              c = n.useCallback((e) => e.currentTarget == e.target, []),
              l = (0, w.ak)(r, null, null, c);
            return { refDiv: r, onActivate: s, onGamepadDirection: l };
          })(h),
          S = (0, N.Ue)(T, _);
        return n.createElement(
          p.Ot,
          { view: u },
          n.createElement(x.Z, {
            key: `editordiv_${c}`,
            className: (0, O.A)(o, F.Container),
            ref: S,
            spellCheck: c,
            focusable: !0,
            onActivate: k,
            onOKActionDescription: (0, D.we)("#UserGameNotes_Edit"),
            onGamepadDirection: E,
            ...l,
          }),
          n.createElement(p.KF, { onUpdate: a, schema: t.pm_schema }),
          i,
        );
      }
      var L = r(4188),
        G = r(4869),
        U = r(39879),
        R = r(30708),
        I = r(30175);
      r(32754);
      n.memo(function (e) {
        const { schema: t, active: r, closeModal: o, view: a } = e,
          [s, c] = n.useState(""),
          [l, i] = n.useState(""),
          d = n.useRef(),
          m = n.useRef();
        return (
          n.useLayoutEffect(() => {
            if (r) {
              let e = "";
              a.state.selection.empty ||
                (e = a.state.doc.cut(
                  a.state.selection.from,
                  a.state.selection.to,
                ).textContent),
                c(e),
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
          }, [r, a]),
          n.createElement(
            R.o0,
            {
              onOK: () => {
                a.dispatch(
                  a.state.tr.replaceRangeWith(
                    a.state.selection.from,
                    a.state.selection.to,
                    t.text(s || l, [t.marks.link.create({ href: l })]),
                  ),
                ),
                  a.focus(),
                  o();
              },
              closeModal: o,
              strTitle: (0, D.we)("#FormattingToolbar_InsertLink"),
              strOKButtonText: (0, D.we)("#FormattingToolbar_InsertLink"),
              bOKDisabled: 0 == l.length,
            },
            n.createElement(U.pd, {
              ref: d,
              value: s,
              onChange: (e) => c(e.currentTarget.value),
              label: (0, D.we)("#FormattingToolbar_LinkText"),
            }),
            n.createElement(U.pd, {
              ref: m,
              value: l,
              onChange: (e) => i(e.currentTarget.value),
              label: (0, D.we)("#FormattingToolbar_LinkAddress"),
            }),
          )
        );
      });
      function $() {
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(
            I.fx,
            {
              tooltip: "#FormattingToolbar_Undo",
              command: y.tN,
              fnEnabledCheck: z,
            },
            n.createElement(G.VnB, null),
          ),
          n.createElement(
            I.fx,
            {
              tooltip: "#FormattingToolbar_Redo",
              command: y.ZS,
              fnEnabledCheck: K,
            },
            n.createElement(G.Bal, null),
          ),
        );
      }
      function z(e) {
        return y.mk(e.state) > 0;
      }
      function K(e) {
        return y.mL(e.state) > 0;
      }
      function Y(e) {
        const { schema: t } = e;
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(
            I.GY,
            { tooltip: "#FormattingToolbar_Bold", mark: t.marks.strong },
            n.createElement(G.l4n, null),
          ),
          n.createElement(
            I.GY,
            { tooltip: "#FormattingToolbar_Italic", mark: t.marks.italic },
            n.createElement(G.UKJ, null),
          ),
          n.createElement(
            I.GY,
            {
              tooltip: "#FormattingToolbar_Underline",
              mark: t.marks.underline,
            },
            n.createElement(G.Gj3, null),
          ),
          "strike" in t.marks &&
            n.createElement(
              I.GY,
              { tooltip: "#FormattingToolbar_Strike", mark: t.marks.strike },
              n.createElement(G.tI4, null),
            ),
          "code" in t.marks &&
            n.createElement(
              I.GY,
              { tooltip: "#FormattingToolbar_InlineCode", mark: t.marks.code },
              n.createElement(G.bmT, null),
            ),
        );
      }
      function V(e) {
        const { schema: t } = e;
        return n.createElement(
          I.u3,
          {
            tooltip: "#FormattingToolbar_Paragraph",
            nodeType: t.nodes.paragraph,
          },
          n.createElement(G.iYj, null),
        );
      }
      function W(e) {
        const { schema: t, maxLevel: r = 1, levels: o } = e,
          a = r + o - 1;
        return n.createElement(
          n.Fragment,
          null,
          r <= 1 &&
            n.createElement(
              I.u3,
              {
                tooltip: "#FormattingToolbar_HeadingLevel1",
                nodeType: t.nodes.heading,
                attrs: { level: 1 },
              },
              n.createElement(G.jRw, null),
            ),
          r <= 2 &&
            a >= 2 &&
            n.createElement(
              I.u3,
              {
                tooltip: "#FormattingToolbar_HeadingLevel2",
                nodeType: t.nodes.heading,
                attrs: { level: 2 },
              },
              n.createElement(G.qOW, null),
            ),
          r <= 3 &&
            a >= 3 &&
            n.createElement(
              I.u3,
              {
                tooltip: "#FormattingToolbar_HeadingLevel3",
                nodeType: t.nodes.heading,
                attrs: { level: 3 },
              },
              n.createElement(G.x7X, null),
            ),
          r <= 4 &&
            a >= 4 &&
            n.createElement(
              I.u3,
              {
                tooltip: "#FormattingToolbar_HeadingLevel4",
                nodeType: t.nodes.heading,
                attrs: { level: 4 },
              },
              n.createElement(G.qzO, null),
            ),
          r <= 5 &&
            a >= 5 &&
            n.createElement(
              I.u3,
              {
                tooltip: "#FormattingToolbar_HeadingLevel5",
                nodeType: t.nodes.heading,
                attrs: { level: 5 },
              },
              n.createElement(G.jXA, null),
            ),
        );
      }
      function H(e) {
        const { schema: t, showIndentButtonsAsNeeded: r = !1 } = e,
          { callbacks: o, view: a } = (0, I.wU)(),
          s = n.useCallback(
            (e) => !!(0, v.d7)(e.state, t.nodes.bullet_list),
            [t],
          ),
          [c, l] = n.useState(() => s(a));
        return (
          (0, N.hL)(
            o,
            n.useCallback((e) => l(s(e)), [s]),
          ),
          n.createElement(
            n.Fragment,
            null,
            n.createElement(
              I.cQ,
              {
                tooltip: "#FormattingToolbar_BulletedList",
                toggled: c,
                command: L.Sd(t.nodes.bullet_list),
              },
              n.createElement(G.JPq, null),
            ),
            (c || !r) &&
              n.createElement(
                n.Fragment,
                null,
                n.createElement(
                  I.cQ,
                  {
                    tooltip: "#FormattingToolbar_OutdentList",
                    disabled: !c,
                    command: L.T2(t.nodes.list_item),
                  },
                  n.createElement(G.LSz, null),
                ),
                n.createElement(
                  I.cQ,
                  {
                    tooltip: "#FormattingToolbar_IndentList",
                    disabled: !c,
                    command: L.$B(t.nodes.list_item),
                  },
                  n.createElement(G.ycU, null),
                ),
              ),
          )
        );
      }
      var Q = r(33645),
        X = r.n(Q);
      function Z(e, t, r = 0) {
        return () => [e, { class: t }, r];
      }
      function q(e, t) {
        return () => [
          t,
          { class: X().PreservedUnsupportedTag },
          ["span", { class: X().Tag }, `[${e}]`],
          ["span", 0],
          ["span", { class: X().Tag }, `[/${e}]`],
        ];
      }
      const J = {
        nodes: {
          paragraph: {
            content: "inline*",
            group: "block",
            parseDOM: [{ tag: "p" }],
            toDOM: Z("p", (0, O.A)("pm_paragraph", X().Paragraph)),
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
              const { src: t, alt: r, title: n } = e.attrs;
              return ["img", { src: t, alt: r, title: n, class: X().Image }];
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
            toDOM: Z("ul", X().List),
            bbCode: { tag: "list" },
          },
          ordered_list: {
            ...L.o8,
            content: "list_item+",
            group: "block",
            toDOM: Z("ol", X().OrderedList),
            bbCode: { tag: "olist" },
          },
          list_item: {
            ...L.Aw,
            content: "paragraph block*",
            toDOM: Z("li", X().ListItem),
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
            toDOM: Z("b", (0, O.A)("BB_Bold", X().Bold)),
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
            toDOM: Z("i", (0, O.A)("BB_Italic", X().Italic)),
            bbCode: { tag: "i" },
          },
          underline: {
            parseDOM: [{ tag: "u" }, { style: "text-decoration=underline" }],
            toDOM: Z("u", (0, O.A)("BB_Underline", X().Underline)),
            bbCode: { tag: "u" },
          },
          strike: {
            parseDOM: [{ style: "text-decoration=line-through" }],
            toDOM: Z("span", (0, O.A)("BB_Strike", X().Strike)),
            bbCode: { tag: "strike" },
          },
          code: {
            parseDOM: [{ tag: "code" }],
            toDOM: Z("code", (0, O.A)("BB_Code", X().Code)),
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
      class j {
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
        constructor(e) {
          const t = {
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
            n = new Map();
          for (const n in e.nodes) {
            const { bbCode: o, ...a } = e.nodes[n];
            (t[n] = a), r.set(n, o);
          }
          const o = {};
          for (const t in e.marks) {
            const { bbCode: r, ...a } = e.marks[t];
            (o[t] = a), n.set(t, r);
          }
          (this.m_ProseMirrorSchema = new C.Sj({ nodes: t, marks: o })),
            r.forEach((t, r) => {
              const n = this.m_ProseMirrorSchema.nodes[r],
                o = e.nodes[r],
                a = Array.isArray(t) ? t : [t];
              let s;
              "list_item+" == o.content
                ? (s = this.m_ProseMirrorSchema.nodes.list_item)
                : -1 != o.content?.indexOf("paragraph") &&
                  (s = this.m_ProseMirrorSchema.nodes.paragraph),
                a.forEach(
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
                        acceptNode: s,
                      },
                      skipFollowingNewline: !0,
                      ...a,
                    });
                  },
                );
              const { tag: c, AttrsToBBArgs: l } = a[0];
              this.m_PMToBBCodeConfig.mapNodes.set(n, {
                tag: c,
                AttrsToBBArgs: l,
              });
            }),
            n.forEach((e, t) => {
              const r = this.m_ProseMirrorSchema.marks[t],
                {
                  tag: n,
                  BBArgsToAttrs: o,
                  AttrsToBBArgs: a,
                  convertContentToAttr: s,
                  ...c
                } = e;
              this.m_mapBBCodeDictionary.set(n, {
                Constructor: {
                  mark: r,
                  BBArgsToAttrs: o,
                  convertContentToAttr: s,
                },
                ...c,
              }),
                this.m_PMToBBCodeConfig.mapMarks.set(r, {
                  tag: n,
                  AttrsToBBArgs: a,
                });
            });
        }
      }
      const {
          paragraph: ee,
          heading: te,
          bullet_list: re,
          list_item: ne,
          image: oe,
        } = J.nodes,
        {
          strong: ae,
          italic: se,
          underline: ce,
          link: le,
          strike: ie,
        } = J.marks;
      var de = r(30600),
        me = r(30470),
        ue = r(80968);
      function pe(e) {
        const {
            language: t,
            rctToolbarControls: r,
            value: o,
            editorType: a,
          } = e,
          [c, l] = n.useState(),
          i = n.useRef(),
          d = n.useRef(),
          m = n.useRef();
        m.current != o && (d.current = o.Value);
        const u = (function () {
            const e = (0, _.FD)(),
              t = n.useRef(e);
            t.current = e;
            const r = n.useRef();
            if (!r.current) {
              const e = (e) => t.current.find((t) => t.name === e)?.url;
              r.current =
                ((o = e),
                new j({
                  nodes: {
                    paragraph: ee,
                    heading: {
                      ...te,
                      attrs: { level: { default: 2 } },
                      parseDOM: [1, 2, 3, 4, 5, 6]
                        .map((e) => ({ tag: `h${e}`, attrs: { level: 2 } }))
                        .concat(
                          [1, 2, 3, 4, 5, 6].map((e) => ({
                            tag: `span[data-ccp-parastyle="heading ${e}"]`,
                            attrs: { level: 2 },
                          })),
                        ),
                      bbCode: [2].map((e) => ({
                        tag: `h${e}`,
                        BBArgsToAttrs: () => ({ level: e }),
                        AttrsToBBArgs: (e) => ({ tag: `h${e.level}` }),
                      })),
                    },
                    bullet_list: re,
                    list_item: ne,
                    image: {
                      ...oe,
                      toDOM: (e) => ["img", { src: o(e.attrs.src) }],
                    },
                    table: {
                      content: "tr+",
                      group: "block",
                      toDOM: q("table", "div"),
                      bbCode: { tag: "table" },
                    },
                    tr: {
                      content: "(th | td)+",
                      toDOM: q("tr", "div"),
                      bbCode: { tag: "tr" },
                    },
                    th: {
                      content: "paragraph block*",
                      toDOM: q("th", "span"),
                      bbCode: { tag: "th" },
                    },
                    td: {
                      content: "paragraph block*",
                      toDOM: q("td", "span"),
                      bbCode: { tag: "td" },
                    },
                  },
                  marks: {
                    strong: ae,
                    italic: se,
                    underline: ce,
                    strike: ie,
                    link: {
                      ...le,
                      toDOM: (e, t) => [
                        "a",
                        {
                          ...le.toDOM(e, t)[1],
                          title: (0, D.we)(
                            "#StoreAdmin_GameDescription_LinksDisabled",
                          ),
                        },
                        0,
                      ],
                      parseDOM: void 0,
                    },
                  },
                }));
            }
            var o;
            return r.current;
          })(),
          p = n.useCallback((e) => o.Set(e), [o]),
          { onUpdate: g, fnCommitPendingSave: h } = (function (e, t, r) {
            const { msAutosaveTimeout: o = 1e3, refOnChangeCallback: a } =
                r || {},
              [c, l] = n.useState(!1),
              i = n.useRef(),
              d = n.useCallback(
                (t, r) => {
                  a?.current && a.current(),
                    r.doc &&
                      r.doc != t.state.doc &&
                      ((i.current = () => s(t.state.doc, e)), l(!0));
                },
                [a, e],
              ),
              m = n.useCallback(() => {
                if (i.current) {
                  const e = i.current();
                  t(e), l(!1);
                }
                i.current = void 0;
              }, [t]);
            return (
              n.useEffect(() => {
                if (!c) return;
                const e = window.setTimeout(m, o);
                return () => {
                  window.clearTimeout(e), m();
                };
              }, [c, m, o]),
              { onUpdate: d, fnCommitPendingSave: m, bDirty: c }
            );
          })(u, p, { msAutosaveTimeout: 5e3, refOnChangeCallback: i });
        return (
          n.useEffect(() => {
            window.DisableTooltipMutationObserver &&
              window.DisableTooltipMutationObserver();
          }, []),
          n.useEffect(() => {
            m.current && m.current != o && c?.focus(),
              i.current && i.current(),
              (m.current = o);
          }, [c, o]),
          n.createElement(
            ge,
            { imageNodeType: u.pm_schema.nodes.image },
            n.createElement(
              he,
              {
                editorType: a,
                view: c,
                refUpdateToolbar: i,
                rctToolbarControls: r,
                schema: u.pm_schema,
              },
              n.createElement(
                S,
                {
                  panelProps: { lang: (0, D.d$)(t), onBlur: h },
                  className: ue.EditorPanel,
                  schemaConfig: u,
                  bbcode: d.current,
                  onUpdate: g,
                  refView: l,
                  dataKey: t,
                },
                n.createElement(_e, { schema: u }),
              ),
            ),
          )
        );
      }
      function ge(e) {
        const { imageNodeType: t, children: r } = e,
          o = (0, _.cz)(),
          a = n.useCallback(
            (e) => {
              let r,
                n = new Promise((n, o) => {
                  r = {
                    file: e,
                    onComplete: (e) => {
                      n(t.createChecked({ src: e }));
                    },
                    onCancel: () => n(void 0),
                  };
                });
              const a = o(r);
              return n.finally(() => a()), n;
            },
            [t, o],
          ),
          s = n.useCallback(async (e) => {
            const t = new URL(`${me.TS.PARTNER_BASE_URL}gfxproxy/externalgfx/`);
            t.searchParams.append("url", e);
            const r = await fetch(t, { method: "GET" });
            return await r.blob();
          }, []);
        return n.createElement(
          T.Xv,
          { ProcessFileUpload: a, FetchImageURL: s },
          r,
        );
      }
      function he(e) {
        const {
            editorType: t,
            view: r,
            refUpdateToolbar: o,
            rctToolbarControls: a,
            schema: s,
            children: c,
          } = e,
          [l, i] = n.useState(!1),
          d = n.useCallback(
            (e) =>
              e.borderBoxSize.length > 0 &&
              i(e.borderBoxSize[0].blockSize > 300),
            [],
          ),
          m = (0, de.wY)(d);
        return n.createElement(
          "div",
          null,
          n.createElement(be, {
            view: r,
            refUpdateToolbar: o,
            sticky: l,
            rctToolbarControls: a,
            schema: s,
          }),
          n.createElement(
            "div",
            {
              className: (0, O.A)(
                ue.AboutTheGameArea,
                "awards" == t && ue.Awards,
              ),
              ref: m,
            },
            "aboutthegame" == t &&
              n.createElement(
                fe,
                null,
                (0, D.we)("#StoreAdmin_GameDescription_AboutThisGame"),
              ),
            c,
          ),
        );
      }
      function fe(e) {
        return n.createElement(
          "h2",
          { className: ue.StoreAppPageHeader },
          e.children,
          n.createElement("div", { className: ue.GradientRule }),
        );
      }
      function be(e) {
        const {
          view: t,
          refUpdateToolbar: r,
          rctToolbarControls: o,
          schema: a,
          sticky: s,
        } = e;
        return n.createElement(
          I.bI,
          { refUpdateToolbar: r, view: t },
          n.createElement(
            I.Ez,
            {
              className: (0, O.A)(
                ue.GameDescriptionEditorToolbar,
                s && ue.Sticky,
              ),
            },
            n.createElement($, null),
            n.createElement(I.XQ, null),
            n.createElement(Y, { schema: a }),
            n.createElement(I.XQ, null),
            n.createElement(V, { schema: a }),
            n.createElement(W, { schema: a, maxLevel: 2, levels: 1 }),
            n.createElement(I.XQ, null),
            n.createElement(H, { schema: a, showIndentButtonsAsNeeded: !0 }),
            "image" in a.nodes &&
              n.createElement(
                n.Fragment,
                null,
                n.createElement(I.XQ, null),
                n.createElement(b.KZ, { nodeType: a.nodes.image }),
              ),
            n.createElement(I.hK, null),
            o,
          ),
        );
      }
      function _e(e) {
        const { schema: t } = e,
          r = n.useMemo(
            () => [
              {
                type: t.pm_schema.nodes.image,
                component: b.AS,
                readProps: (e) => ({
                  src: e.attrs.src,
                  inLink: e.marks.some((e) => e.type == t.pm_schema.marks.link),
                }),
              },
            ],
            [t],
          );
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(g, { specs: r }),
          n.createElement(T.pw, { nodeType: t.pm_schema.nodes.image }),
        );
      }
    },
    49693: (e, t, r) => {
      "use strict";
      r.d(t, { op: () => c, CS: () => a, vE: () => l, Al: () => o });
      class n {
        type = 0;
        text = "";
        tag;
        args;
        ConvertMalformedNodeToText() {
          3 == this.type
            ? (this.text = "[/" + this.text)
            : 2 == this.type && (this.text = "[" + this.text),
            (this.type = 1);
        }
      }
      class o {
        m_fnAccumulatorFactory;
        m_dictComponents;
        constructor(e, t) {
          (this.m_dictComponents = e), (this.m_fnAccumulatorFactory = t);
        }
        Parse(e, t, r = !1) {
          const o = (function (e, t) {
            const r = [];
            let o = new n(),
              a = !1,
              s = !1,
              c = !1;
            for (let n = 0; n < e.length; n++) {
              const l = e[n];
              switch (o.type) {
                case 0:
                  "[" == l
                    ? ((o.type = 2), (s = !0))
                    : ((o.type = 1), "\\" == l && t ? (a = !a) : (o.text += l));
                  break;
                case 2:
                case 3:
                  if ("/" == l && s) (o.type = 3), (o.text = ""), (s = !1);
                  else if ("[" != l || a)
                    if ("]" != l || a)
                      "\\" == l && t
                        ? ((o.text += l), (a = !a), (s = !1))
                        : ((o.text += l), (a = !1), (s = !1));
                    else {
                      const e =
                          2 == o.type &&
                          "noparse" == o.text.toLocaleLowerCase(),
                        t =
                          3 == o.type &&
                          "noparse" == o.text.toLocaleLowerCase();
                      s || (c && !t)
                        ? (o.ConvertMalformedNodeToText(), (o.text += l))
                        : e
                          ? (c = !0)
                          : t && (c = !1),
                        (o = i(r, o)),
                        (s = !1);
                    }
                  else
                    o.ConvertMalformedNodeToText(), (o = i(r, o, 2)), (s = !0);
                  break;
                case 1:
                  "[" != l || a
                    ? "\\" == l && t
                      ? (a && (o.text += l), (a = !a))
                      : ((o.text += l), (a = !1))
                    : ((o = i(r, o, 2)), (s = !0));
              }
            }
            0 != o.type &&
              ((2 != o.type && 3 != o.type) || o.ConvertMalformedNodeToText(),
              r.push(o));
            return r;
          })(e, r);
          return this.Parse_BuildElements(o, t);
        }
        Parse_BuildElements(e, t) {
          let r = this.m_fnAccumulatorFactory(void 0);
          const n = [],
            o = () => (n.length < 1 ? void 0 : n[n.length - 1]),
            a = this.m_dictComponents,
            s = (e) => !(!e.tag || !a.get(e.tag)?.autocloses);
          let c = !1,
            l = !0;
          const i = (e, o) => {
            if (e && e.node.tag === o.text && a.get(e.node.tag)) {
              const o = a.get(e.node.tag),
                s = n.map((e) => e.node.tag),
                i = { parentTags: s, tagname: e.node.tag, args: e.node.args },
                d = t(o.Constructor, i, ...r.GetElements());
              (r = e.accumulator),
                Array.isArray(d)
                  ? d.forEach((e) => r.AppendNode(e))
                  : r.AppendNode(d),
                (c = !!o.skipFollowingNewline),
                (l = e.bWrapTextForCopying);
            } else if (e) {
              const t = e.accumulator;
              t.AppendText("[" + e.node.text + "]", !1),
                r.GetElements().forEach((e) => t.AppendNode(e)),
                t.AppendText("[/" + o.text + "]", !1),
                (r = t),
                (l = e.bWrapTextForCopying);
            }
          };
          for (
            e.forEach((e, t) => {
              if (1 == e.type) {
                const t = c ? e.text.replace(/^[\t\r ]*\n/g, "") : e.text;
                r.AppendText(t, l), (c = !1);
              } else if (2 == e.type) {
                const t = a.get(e.tag);
                if (t) {
                  const s = o();
                  if (void 0 !== s) {
                    const t = a.get(s.node.tag);
                    t &&
                      t.autocloses &&
                      e.tag === s.node.tag &&
                      i(n.pop(), s.node);
                  }
                  n.push({ accumulator: r, node: e, bWrapTextForCopying: l }),
                    (r = this.m_fnAccumulatorFactory(e)),
                    (c = !!t.skipInternalNewline),
                    (l = t.allowWrapTextForCopying ?? !1);
                } else r.AppendText("[" + e.text + "]", 0 == n.length);
              } else if (3 == e.type) {
                for (; o() && o().node.tag !== e.text && s(o().node); ) {
                  const e = n.pop();
                  i(e, e.node);
                }
                if (o()?.node.tag == e.text) {
                  const t = n.pop();
                  i(t, e);
                } else r.AppendText("[/" + e.text + "]", 0 == n.length);
              }
            });
            n.length > 0;
          ) {
            const e = n.pop();
            i(e, e.node);
          }
          return r.GetElements();
        }
      }
      function a(e, t) {
        let r = "[" + e;
        t?.[""] && (r += `=${s(t[""])}`);
        for (const e in t)
          "" !== e &&
            (r += ` ${((n = e), n.replace(/(\\| |\])/g, "\\$1"))}=${s(t[e])}`);
        var n;
        return (r += "]"), r;
      }
      function s(e) {
        return `"${e.replace(/(\\|"|\])/g, "\\$1")}"`;
      }
      function c(e) {
        return `[/${e}]`;
      }
      function l(e) {
        return e.replace(/(\\|\[)/g, "\\$1");
      }
      function i(e, t, r = 0) {
        if (2 == t.type) {
          let e = t.text.indexOf("=");
          const r = t.text.indexOf(" ");
          if ((-1 != r && (-1 == e || r < e) && (e = r), e > 0)) {
            t.tag = t.text.substr(0, e).toLocaleLowerCase();
            const r = t.text.substr(e);
            t.args = (function (e) {
              if (!e || e.length < 1) return {};
              const t = {};
              let r = "",
                n = "",
                o = 0,
                a = 0;
              "=" == e[0] && (o = 2);
              let s = !1;
              for (a++; a < e.length; a++) {
                const c = e[a];
                let l = !0,
                  i = !1;
                switch (o) {
                  case 0:
                    if ("=" == c) return {};
                    if (" " == c) continue;
                    o = 1;
                    break;
                  case 1:
                    ("=" != c && " " != c) ||
                      s ||
                      (" " == c ? ((o = 0), (i = !0)) : (o = 2), (l = !1));
                    break;
                  case 2:
                    " " == c
                      ? ((o = 0), (l = !1), (i = !0))
                      : '"' == c
                        ? ((o = 4), (l = !1))
                        : (o = 3);
                    break;
                  case 3:
                  case 4:
                    ((" " == c && 4 != o && !s) ||
                      ('"' == c && 4 == o && !s)) &&
                      ((o = 0), (l = !1), (i = !0));
                }
                if (l)
                  if ("\\" != c || s)
                    if (((s = !1), 1 == o)) r += c;
                    else {
                      if (3 != o && 4 != o)
                        throw new Error(
                          "Not expecting to accumulate buffer in state " + o,
                        );
                      n += c;
                    }
                  else s = !0;
                i && ((t[r] = n), (r = ""), (n = ""));
              }
              0 != o && (t[r] = n);
              return t;
            })(r);
          } else (t.args = {}), (t.tag = t.text.toLocaleLowerCase());
        }
        e.push(t);
        const o = new n();
        return (o.type = r), o;
      }
    },
  },
]);
