/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [23],
  {
    80968: (e) => {
      e.exports = {
        EditorPanel: "_2SgPxDudv7oRkzlHsNm4_O",
        AboutTheGameArea: "_3EAE8BxFPnb_g0Ct5b4QzW",
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
    97009: (e) => {
      e.exports = {
        Hover: "_3MfkIyTHK_txowyd2A_E1Z",
        Link: "_54gkGuAZz-pkR2y82lrA",
        LinkHelp: "_3BTOSI6ZZswnhj45yGrbX8",
      };
    },
    12404: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => Ce });
      var r = n(90626),
        o = n(49693),
        a = n(81393);
      function s(e, t) {
        return c(t.pm_schema, t.pm_to_bbcode_config, e);
      }
      function c(e, t, n) {
        let r = n.marks,
          s = "";
        const d = t.mapNodes.get(n.type),
          { tag: m, args: u } = i(d, n.attrs);
        return (
          m && (s += (0, o.CS)(m, u)),
          n.content.forEach((n) => {
            ([s, r] = l(t, r, n.marks, s)),
              ([s, r] = (function (e, t, n, r) {
                let s;
                for (const c of n)
                  if (-1 === t.indexOf(c)) {
                    s || (s = t.slice());
                    const n = e.mapMarks.get(c.type);
                    if (((0, a.w)(n, "mark missing bbtag"), n)) {
                      s.push(c);
                      const { args: e, tag: t } = i(n, c.attrs);
                      r += (0, o.CS)(t, e || {});
                    }
                  }
                return [r, s ?? t];
              })(t, r, n.marks, s)),
              n.type.isText
                ? (s += (0, o.vE)(n.text || ""))
                : n.type == e.nodes.hard_break
                  ? (s += "\n")
                  : (s += c(e, t, n));
          }),
          ([s] = l(t, r, [], s)),
          m && (s += (0, o.op)(m)),
          s
        );
      }
      function l(e, t, n, r) {
        const s = [];
        for (const e of t) -1 === n.indexOf(e) && s.push(e);
        if (!s.length) return [r, t];
        const c = t.slice();
        for (
          ;
          s.length && ((0, a.w)(c.length, "no marks left to close"), c.length);

        ) {
          const t = c.pop(),
            n = e.mapMarks.get(t.type),
            { tag: a } = i(n, t.attrs);
          r += (0, o.op)(a);
          const l = s.indexOf(t);
          -1 != l && s.splice(l, 1);
        }
        return [r, c];
      }
      function i(e, t) {
        let n,
          r = {};
        return (
          e &&
            (e.AttrsToBBArgs && ({ tag: n, args: r } = e.AttrsToBBArgs(t)),
            n || (n = e.tag),
            r || (r = {})),
          { tag: n, args: r }
        );
      }
      var d = n(91986),
        m = n(52893),
        u = n(72739),
        p = n(22145);
      function g(e) {
        const { specs: t } = e,
          [n, o] = r.useState([]),
          a = r.useRef(0),
          s = r.useCallback(
            (e) => (
              o((t) => [...t, { id: a.current++, nodeView: e }]),
              () => o((t) => t.filter((t) => t.nodeView != e))
            ),
            [],
          ),
          c = r.useMemo(() => {
            const e = {};
            return (
              t.forEach(
                (t) => (e[t.type.name] = (e, n, r) => new f(t, e, n, r, s)),
              ),
              new m.k_({ props: { nodeViews: e } })
            );
          }, [t, s]);
        return (
          (0, p.c$)(c),
          n.map(({ id: e, nodeView: t }) =>
            r.createElement(h, { key: e, nodeView: t }),
          )
        );
      }
      function h(e) {
        const {
            element: t,
            spec: n,
            getProps: o,
            onPropsChanged: a,
            actions: s,
            isSelected: c,
          } = e.nodeView,
          [l, i] = r.useReducer((e) => e + 1, 0);
        return (
          r.useEffect(() => a.Register(i).Unregister, [a, i]),
          u.createPortal(
            r.createElement(n.component, { ...o(), selected: c(), ...s }),
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
        constructor(e, t, n, r, o) {
          this.node = t;
          const a = n.dom.ownerDocument.createElement(
            e.type.isInline ? "span" : "div",
          );
          this.dom = a;
          const { selection: s } = n.state;
          this.selected = r() >= s.from && r() + t.nodeSize <= s.to;
          const c = {
              setAttrs: (e) => {
                n.dispatch(n.state.tr.setNodeMarkup(r(), void 0, e));
              },
              removeNode: () => {
                n.dispatch(n.state.tr.delete(r(), r() + 1));
              },
              focusView: () => {
                n.focus();
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
        update(e, t, n) {
          return (this.node = e), this.onPropsChanged(), !0;
        }
        selectNode() {
          (this.selected = !0), this.onPropsChanged();
        }
        deselectNode() {
          (this.selected = !1), this.onPropsChanged();
        }
      }
      var b = n(36225),
        _ = n(29655),
        C = n(29287),
        T = n(98724);
      var k = n(57053);
      class E {
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
      function v(e) {
        return e
          .filter((e) => e.isText)
          .map((e) => e.text)
          .join();
      }
      function B(e) {
        let t = "";
        return (
          e.descendants((e) => {
            e.isText && (t += e.text);
          }),
          t
        );
      }
      class A extends o.Al {
        m_schemaConfig;
        m_mapPMBBNodes = new Map();
        constructor(e) {
          super(e.bbcode_dictionary, () => new E(e.pm_schema)),
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
            this.ConvertLineBreaksToParagraphs(t),
          );
        }
        TryCreateNode(e, t, n) {
          let r = k.FK.from(t);
          if (!e.node.validContent(r) && e.acceptNode) {
            let n = t.filter((t) => t.type == e.acceptNode);
            if (!n.length) {
              let r = t;
              e.acceptNode.isBlock &&
                r.length > 1 &&
                r[r.length - 1].type == this.schema.nodes.hard_break &&
                (r = r.slice(0, -1));
              const o = this.m_mapPMBBNodes.get(e.acceptNode.name);
              (0, a.w)(
                o,
                `Indicated acceptNode type ${e.acceptNode.name} for ${e.node.name} missing`,
              ),
                (n = o
                  ? [this.TryCreateNode(o, r, void 0)]
                  : [e.acceptNode.create(void 0, r)]);
            }
            r = k.FK.from(n);
          }
          return e.node.createAndFill(n, r) || e.node.create(n, r);
        }
        BBNodeToPMNode(e, t, ...n) {
          let r = e.BBArgsToAttrs ? e.BBArgsToAttrs(t.args || {}) : void 0;
          try {
            return (
              !("convertContentToAttr" in e) ||
                !e.convertContentToAttr ||
                (r && r[e.convertContentToAttr]) ||
                ((r = { ...(r || {}), [e.convertContentToAttr]: v(n) }),
                "node" in e && (n = [])),
              "node" in e
                ? this.TryCreateNode(e, n, r)
                : n.map((t) => t.mark([...t.marks, e.mark.create(r)]))
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
          const r = [],
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
                const t = this.nodeType || (e ? n.nodes.paragraph : void 0);
                t && (r.push(t.createChecked({}, this.nodes)), this.reset());
              },
            };
          for (const s of e) {
            const e = s.type == n.nodes.hard_break,
              c = k.FK.from(s);
            if (e || n.topNodeType.validContent(c)) {
              const t = e && o.nodes.length > 0;
              o.emit(),
                e ? t || r.push(n.nodes.paragraph.createChecked()) : r.push(s);
            } else {
              let e;
              (e = n.nodes.paragraph.validContent(c)
                ? n.nodes.paragraph
                : t.get(s.type.name)),
                e
                  ? o.accumulate(e, s)
                  : ((0, a.w)(
                      !1,
                      `Couldn't accept ${s.type.name} at root of document, converting to paragraph`,
                    ),
                    (e = n.nodes.paragraph),
                    o.accumulate(n.nodes.paragraph, n.text(B(s))));
            }
          }
          return (!o.nodes.length && r.length) || o.emit(!0), r;
        }
      }
      var y = n(37834),
        x = n(32381),
        w = n(44078),
        M = n(61712),
        O = n(56011),
        N = n(61859),
        D = n(97009);
      function P() {
        const [e, t] = r.useState(),
          [n, o] = r.useState(),
          [a, s] = r.useState(),
          c = r.useMemo(
            () =>
              new m.k_({
                props: {
                  handleDOMEvents: {
                    mouseover: (e, n) => {
                      const r = n.target;
                      if ((0, O.kD)(r) && "A" == r.nodeName) {
                        const e = r.getBoundingClientRect();
                        t(e.left + e.width / 2), o(e.bottom + 2), s(r);
                      } else s(void 0);
                      return !1;
                    },
                    mouseleave: (e, t) => (s(void 0), !1),
                  },
                },
              }),
            [],
          );
        if (((0, p.c$)(c), !a)) return null;
        const l = a.getAttribute("href");
        return r.createElement(
          S,
          { top: n, left: e },
          r.createElement("div", { className: D.Link }, l),
          r.createElement(
            "div",
            { className: D.LinkHelp },
            (0, N.we)("#UserGameNotes_ClickToOpenLink"),
          ),
        );
      }
      function S(e) {
        const { top: t, left: n, children: o } = e,
          [a, s] = r.useState(0),
          c = r.useRef();
        r.useLayoutEffect(() => {
          s(c.current.getBoundingClientRect().width);
        }, [t, n, o]);
        const l = { top: `${t}px`, left: `${Math.max(n - a / 2, 12)}px` };
        return r.createElement(
          "div",
          { className: D.Hover, style: l, ref: c },
          o,
        );
      }
      var F = n(51272),
        L = n(52038),
        G = n(84933),
        U = n(61336),
        R = n(78327),
        I = n(73309);
      function $(e) {
        const {
            schemaConfig: t,
            bbcode: n,
            className: o,
            onUpdate: a,
            refView: s,
            onClickURL: c,
            bSpellcheckEnabled: l = !0,
            panelProps: i,
            children: d,
            dataKey: u,
          } = e,
          [g, h] = r.useState(),
          f = r.useRef(),
          b = r.useRef();
        b.current = c || z;
        const _ = r.useCallback(
          (e) => {
            if (!e) return void f.current?.destroy();
            const n = f.current;
            n && n.destroy(),
              (f.current = new C.Lz(e, {
                state: n?.state ?? m.$t.create({ schema: t.pm_schema }),
                handleClickOn: (...e) =>
                  (function (e, t, n, r, o, a, s, c) {
                    if (c && (s.ctrlKey || 1 == s.button)) {
                      const n = o
                        .resolve(r - a)
                        .marks()
                        .find((t) => t.type == e.marks.link);
                      if (n)
                        return t(n.attrs.href, s.view), s.preventDefault(), !0;
                    }
                    return !1;
                  })(t.pm_schema, b.current, ...e),
                clipboardTextParser: (...e) =>
                  (function (e, t, n, r, o) {
                    let a,
                      s = [];
                    for (; (a = t.match(U.O9)); )
                      a.index > 0 && s.push(e.text(t.substring(0, a.index))),
                        s.push(
                          e.text(a[0], [
                            e.marks.link.create({ href: (0, U.jT)(a[0]) }),
                          ]),
                        ),
                        (t = t.substring(a.index + a[0].length));
                    t.length && s.push(e.text(t));
                    return new k.Ji(k.FK.from(s), n.start(), n.end());
                  })(t.pm_schema, ...e),
              })),
              h(f.current);
          },
          [t],
        );
        r.useEffect(() => {
          g &&
            g.updateState(
              (function (e, t, n) {
                const r = (0, T.b6)(),
                  o = r.spec.key?.get(n),
                  a = [...n.plugins.filter((e) => e != o), r];
                return m.$t.create({ schema: t, doc: e, plugins: a });
              })(
                (function (e, t) {
                  return new A(t).ParseBBCode(e);
                })(n, t),
                t.pm_schema,
                g.state,
              ),
            );
        }, [t, n, g, u]),
          (0, G.D5)(s, g);
        const {
            refDiv: E,
            onActivate: v,
            onGamepadDirection: B,
          } = (function (e) {
            const t = (0, R.rP)(),
              n = r.useRef(),
              o = r.useCallback(
                (e) => {
                  (0, M.iv)(e, t.IN_VR);
                },
                [t.IN_VR],
              ),
              a = (0, M.FN)(
                { onTextEntered: o },
                () => n.current?.ownerDocument.defaultView,
              ),
              s = r.useCallback(() => {
                a.ShowVirtualKeyboard();
                let t = e.current?.hasFocus();
                if (!t) {
                  e.current?.focus();
                  let t = e.current.dom.childNodes;
                  for (let r = 0; r < t.length; ++r) {
                    let o = t[r],
                      a = o.offsetTop;
                    if (void 0 !== a && a >= n.current.scrollTop) {
                      let t = o.getBoundingClientRect();
                      (0, y.bQ)(e.current, t.left, t.top);
                      break;
                    }
                  }
                }
              }, [a, e]),
              c = r.useCallback((e) => e.currentTarget == e.target, []),
              l = (0, w.ak)(n, null, null, c);
            return { refDiv: n, onActivate: s, onGamepadDirection: l };
          })(f),
          O = (0, G.Ue)(E, _);
        return r.createElement(
          p.Ot,
          { view: g },
          r.createElement(x.Z, {
            key: `editordiv_${l}`,
            className: (0, L.A)(o, I.Container),
            ref: O,
            spellCheck: l,
            focusable: !0,
            onActivate: v,
            onOKActionDescription: (0, N.we)("#UserGameNotes_Edit"),
            onGamepadDirection: B,
            ...i,
          }),
          r.createElement(p.KF, { onUpdate: a, schema: t.pm_schema }),
          r.createElement(P, null),
          d,
        );
      }
      function z(e, t) {
        (0, F.EP)(t, e);
      }
      var H = n(4188),
        K = n(4869),
        Y = n(39879),
        V = n(30708),
        W = n(30175);
      n(32754);
      r.memo(function (e) {
        const { schema: t, active: n, closeModal: o, view: a } = e,
          [s, c] = r.useState(""),
          [l, i] = r.useState(""),
          d = r.useRef(),
          m = r.useRef();
        return (
          r.useLayoutEffect(() => {
            if (n) {
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
          }, [n, a]),
          r.createElement(
            V.o0,
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
              strTitle: (0, N.we)("#FormattingToolbar_InsertLink"),
              strOKButtonText: (0, N.we)("#FormattingToolbar_InsertLink"),
              bOKDisabled: 0 == l.length,
            },
            r.createElement(Y.pd, {
              ref: d,
              value: s,
              onChange: (e) => c(e.currentTarget.value),
              label: (0, N.we)("#FormattingToolbar_LinkText"),
            }),
            r.createElement(Y.pd, {
              ref: m,
              value: l,
              onChange: (e) => i(e.currentTarget.value),
              label: (0, N.we)("#FormattingToolbar_LinkAddress"),
            }),
          )
        );
      });
      function Q() {
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            W.fx,
            {
              tooltip: "#FormattingToolbar_Undo",
              command: T.tN,
              fnEnabledCheck: Z,
            },
            r.createElement(K.VnB, null),
          ),
          r.createElement(
            W.fx,
            {
              tooltip: "#FormattingToolbar_Redo",
              command: T.ZS,
              fnEnabledCheck: X,
            },
            r.createElement(K.Bal, null),
          ),
        );
      }
      function Z(e) {
        return T.mk(e.state) > 0;
      }
      function X(e) {
        return T.mL(e.state) > 0;
      }
      function J(e) {
        const { schema: t } = e;
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            W.GY,
            { tooltip: "#FormattingToolbar_Bold", mark: t.marks.strong },
            r.createElement(K.l4n, null),
          ),
          r.createElement(
            W.GY,
            { tooltip: "#FormattingToolbar_Italic", mark: t.marks.italic },
            r.createElement(K.UKJ, null),
          ),
          r.createElement(
            W.GY,
            {
              tooltip: "#FormattingToolbar_Underline",
              mark: t.marks.underline,
            },
            r.createElement(K.Gj3, null),
          ),
          "strike" in t.marks &&
            r.createElement(
              W.GY,
              { tooltip: "#FormattingToolbar_Strike", mark: t.marks.strike },
              r.createElement(K.tI4, null),
            ),
          "code" in t.marks &&
            r.createElement(
              W.GY,
              { tooltip: "#FormattingToolbar_InlineCode", mark: t.marks.code },
              r.createElement(K.bmT, null),
            ),
        );
      }
      function j(e) {
        const { schema: t } = e;
        return r.createElement(
          W.u3,
          {
            tooltip: "#FormattingToolbar_Paragraph",
            nodeType: t.nodes.paragraph,
          },
          r.createElement(K.iYj, null),
        );
      }
      function q(e) {
        const { schema: t, maxLevel: n = 1, levels: o } = e,
          a = n + o - 1;
        return r.createElement(
          r.Fragment,
          null,
          n <= 1 &&
            r.createElement(
              W.u3,
              {
                tooltip: "#FormattingToolbar_HeadingLevel1",
                nodeType: t.nodes.heading,
                attrs: { level: 1 },
              },
              r.createElement(K.jRw, null),
            ),
          n <= 2 &&
            a >= 2 &&
            r.createElement(
              W.u3,
              {
                tooltip: "#FormattingToolbar_HeadingLevel2",
                nodeType: t.nodes.heading,
                attrs: { level: 2 },
              },
              r.createElement(K.qOW, null),
            ),
          n <= 3 &&
            a >= 3 &&
            r.createElement(
              W.u3,
              {
                tooltip: "#FormattingToolbar_HeadingLevel3",
                nodeType: t.nodes.heading,
                attrs: { level: 3 },
              },
              r.createElement(K.x7X, null),
            ),
          n <= 4 &&
            a >= 4 &&
            r.createElement(
              W.u3,
              {
                tooltip: "#FormattingToolbar_HeadingLevel4",
                nodeType: t.nodes.heading,
                attrs: { level: 4 },
              },
              r.createElement(K.qzO, null),
            ),
          n <= 5 &&
            a >= 5 &&
            r.createElement(
              W.u3,
              {
                tooltip: "#FormattingToolbar_HeadingLevel5",
                nodeType: t.nodes.heading,
                attrs: { level: 5 },
              },
              r.createElement(K.jXA, null),
            ),
        );
      }
      function ee(e) {
        const { schema: t } = e,
          { callbacks: n, view: o } = (0, W.wU)(),
          a = r.useCallback(
            (e) => !!(0, y.d7)(e.state, t.nodes.bullet_list),
            [t],
          ),
          [s, c] = r.useState(() => a(o));
        return (
          (0, G.hL)(
            n,
            r.useCallback((e) => c(a(e)), [a]),
          ),
          r.createElement(
            r.Fragment,
            null,
            r.createElement(
              W.cQ,
              {
                tooltip: "#FormattingToolbar_BulletedList",
                toggled: s,
                command: H.Sd(t.nodes.bullet_list),
              },
              r.createElement(K.JPq, null),
            ),
            r.createElement(
              W.cQ,
              {
                tooltip: "#FormattingToolbar_OutdentList",
                disabled: !s,
                command: H.T2(t.nodes.list_item),
              },
              r.createElement(K.LSz, null),
            ),
            r.createElement(
              W.cQ,
              {
                tooltip: "#FormattingToolbar_IndentList",
                disabled: !s,
                command: H.$B(t.nodes.list_item),
              },
              r.createElement(K.ycU, null),
            ),
          )
        );
      }
      var te = n(33645),
        ne = n.n(te);
      function re(e, t, n = 0) {
        return () => [e, { class: t }, n];
      }
      function oe(e, t) {
        return () => [
          t,
          { class: ne().PreservedUnsupportedTag },
          ["span", { class: ne().Tag }, `[${e}]`],
          ["span", 0],
          ["span", { class: ne().Tag }, `[/${e}]`],
        ];
      }
      const ae = {
        nodes: {
          paragraph: {
            content: "inline*",
            group: "block",
            parseDOM: [{ tag: "p" }],
            toDOM: re("p", (0, L.A)("pm_paragraph", ne().Paragraph)),
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
                  `BB_Header${e.attrs.level} ` + ne()[`Header${e.attrs.level}`],
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
            atom: !0,
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
              const { src: t, alt: n, title: r } = e.attrs;
              return ["img", { src: t, alt: n, title: r, class: ne().Image }];
            },
            bbCode: {
              tag: "img",
              BBArgsToAttrs: (e) => ({ src: e.src }),
              AttrsToBBArgs: (e) => ({ args: { src: e.src } }),
              convertContentToAttr: "src",
            },
          },
          bullet_list: {
            ...H.fF,
            content: "list_item+",
            group: "block",
            toDOM: re("ul", ne().List),
            bbCode: { tag: "list" },
          },
          ordered_list: {
            ...H.o8,
            content: "list_item+",
            group: "block",
            toDOM: re("ol", ne().OrderedList),
            bbCode: { tag: "olist" },
          },
          list_item: {
            ...H.Aw,
            content: "paragraph block*",
            toDOM: re("li", ne().ListItem),
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
              { class: ne().CodeBlock },
              ["code", { class: ne().Code }, 0],
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
            toDOM: re("b", (0, L.A)("BB_Bold", ne().Bold)),
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
            toDOM: re("i", (0, L.A)("BB_Italic", ne().Italic)),
            bbCode: { tag: "i" },
          },
          underline: {
            parseDOM: [{ tag: "u" }, { style: "text-decoration=underline" }],
            toDOM: re("u", (0, L.A)("BB_Underline", ne().Underline)),
            bbCode: { tag: "u" },
          },
          strike: {
            parseDOM: [{ style: "text-decoration=line-through" }],
            toDOM: re("span", (0, L.A)("BB_Strike", ne().Strike)),
            bbCode: { tag: "strike" },
          },
          code: {
            parseDOM: [{ tag: "code" }],
            toDOM: re("code", (0, L.A)("BB_Code", ne().Code)),
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
              return ["a", { href: t, title: n }, 0];
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
      class se {
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
            n = new Map(),
            r = new Map();
          for (const r in e.nodes) {
            const { bbCode: o, ...a } = e.nodes[r];
            (t[r] = a), n.set(r, o);
          }
          const o = {};
          for (const t in e.marks) {
            const { bbCode: n, ...a } = e.marks[t];
            (o[t] = a), r.set(t, n);
          }
          (this.m_ProseMirrorSchema = new k.Sj({ nodes: t, marks: o })),
            n.forEach((t, n) => {
              const r = this.m_ProseMirrorSchema.nodes[n],
                o = e.nodes[n],
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
                    AttrsToBBArgs: n,
                    convertContentToAttr: o,
                    ...a
                  }) => {
                    this.m_mapBBCodeDictionary.set(e, {
                      Constructor: {
                        node: r,
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
              this.m_PMToBBCodeConfig.mapNodes.set(r, {
                tag: c,
                AttrsToBBArgs: l,
              });
            }),
            r.forEach((e, t) => {
              const n = this.m_ProseMirrorSchema.marks[t],
                {
                  tag: r,
                  BBArgsToAttrs: o,
                  AttrsToBBArgs: a,
                  convertContentToAttr: s,
                  ...c
                } = e;
              this.m_mapBBCodeDictionary.set(r, {
                Constructor: {
                  mark: n,
                  BBArgsToAttrs: o,
                  convertContentToAttr: s,
                },
                ...c,
              }),
                this.m_PMToBBCodeConfig.mapMarks.set(n, {
                  tag: r,
                  AttrsToBBArgs: a,
                });
            });
        }
      }
      const {
          paragraph: ce,
          heading: le,
          bullet_list: ie,
          list_item: de,
          image: me,
        } = ae.nodes,
        { strong: ue, italic: pe, underline: ge, link: he } = ae.marks;
      var fe = n(80968),
        be = n(30600),
        _e = n(71696);
      function Ce(e) {
        const { language: t, rctToolbarControls: n, value: o, strLabel: a } = e,
          [c, l] = r.useState(),
          i = r.useRef(),
          d = r.useRef(),
          m = r.useRef();
        m.current != o && (d.current = o.Value);
        const u = (function () {
            const e = (0, _.FD)(),
              t = r.useRef(e);
            t.current = e;
            const n = r.useRef();
            if (!n.current) {
              const e = (e) => t.current.find((t) => t.name === e)?.url;
              n.current =
                ((o = e),
                new se({
                  nodes: {
                    paragraph: ce,
                    heading: {
                      ...le,
                      attrs: { level: { default: 2 } },
                      parseDOM: [2].map((e) => ({
                        tag: `h${e}`,
                        attrs: { level: e },
                      })),
                      bbCode: [2].map((e) => ({
                        tag: `h${e}`,
                        BBArgsToAttrs: () => ({ level: e }),
                        AttrsToBBArgs: (e) => ({ tag: `h${e.level}` }),
                      })),
                    },
                    bullet_list: ie,
                    list_item: de,
                    image: {
                      ...me,
                      toDOM: (e) => ["img", { src: o(e.attrs.src) }],
                    },
                    table: {
                      content: "tr+",
                      group: "block",
                      toDOM: oe("table", "div"),
                      bbCode: { tag: "table" },
                    },
                    tr: {
                      content: "(th | td)+",
                      toDOM: oe("tr", "div"),
                      bbCode: { tag: "tr" },
                    },
                    th: {
                      content: "paragraph block*",
                      toDOM: oe("th", "span"),
                      bbCode: { tag: "th" },
                    },
                    td: {
                      content: "paragraph block*",
                      toDOM: oe("td", "span"),
                      bbCode: { tag: "td" },
                    },
                  },
                  marks: { strong: ue, italic: pe, underline: ge, link: he },
                }));
            }
            var o;
            return n.current;
          })(),
          p = r.useCallback((e) => o.Set(e), [o]),
          { onUpdate: g, fnCommitPendingSave: h } = (function (e, t, n) {
            const { msAutosaveTimeout: o = 1e3, refOnChangeCallback: a } =
                n || {},
              [c, l] = r.useState(!1),
              i = r.useRef(),
              d = r.useCallback(
                (t, n) => {
                  a?.current && a.current(),
                    n.doc &&
                      n.doc != t.state.doc &&
                      ((i.current = () => s(t.state.doc, e)), l(!0));
                },
                [a, e],
              ),
              m = r.useCallback(() => {
                if (i.current) {
                  const e = i.current();
                  t(e), l(!1);
                }
                i.current = void 0;
              }, [t]);
            return (
              r.useEffect(() => {
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
          r.useEffect(() => {
            window.DisableTooltipMutationObserver &&
              window.DisableTooltipMutationObserver();
          }, []),
          r.useEffect(() => {
            m.current && m.current != o && c?.focus(),
              i.current && i.current(),
              (m.current = o);
          }, [c, o]),
          r.createElement(
            Te,
            {
              strLabel: a,
              view: c,
              refUpdateToolbar: i,
              rctToolbarControls: n,
              schema: u.pm_schema,
            },
            r.createElement(
              $,
              {
                panelProps: { lang: (0, N.d$)(t), onBlur: h },
                className: fe.EditorPanel,
                schemaConfig: u,
                bbcode: d.current,
                onUpdate: g,
                refView: l,
                dataKey: t,
              },
              r.createElement(ve, { schema: u }),
            ),
          )
        );
      }
      function Te(e) {
        const {
            strLabel: t,
            view: n,
            refUpdateToolbar: o,
            rctToolbarControls: a,
            schema: s,
            children: c,
          } = e,
          [l, i] = r.useState(!1),
          d = r.useCallback(
            (e) =>
              e.borderBoxSize.length > 0 &&
              i(e.borderBoxSize[0].blockSize > 300),
            [],
          ),
          m = (0, be.wY)(d),
          u = r.useCallback(async (e) => {
            throw (
              (await new Promise((e, t) => {
                setTimeout(e, 5e3);
              }),
              new _e.eI("Not Yet Implemented!"))
            );
          }, []);
        return r.createElement(
          _e.Xv,
          { ProcessFileUpload: u },
          r.createElement(
            "div",
            null,
            r.createElement(Ee, {
              view: n,
              refUpdateToolbar: o,
              sticky: l,
              rctToolbarControls: a,
              schema: s,
            }),
            r.createElement(
              "div",
              { className: fe.AboutTheGameArea, ref: m },
              t && r.createElement(ke, null, t),
              c,
            ),
          ),
        );
      }
      function ke(e) {
        return r.createElement(
          "h2",
          { className: fe.StoreAppPageHeader },
          e.children,
          r.createElement("div", { className: fe.GradientRule }),
        );
      }
      function Ee(e) {
        const {
          view: t,
          refUpdateToolbar: n,
          rctToolbarControls: o,
          schema: a,
          sticky: s,
        } = e;
        return r.createElement(
          W.bI,
          { refUpdateToolbar: n, view: t },
          r.createElement(
            W.Ez,
            {
              className: (0, L.A)(
                fe.GameDescriptionEditorToolbar,
                s && fe.Sticky,
              ),
            },
            r.createElement(Q, null),
            r.createElement(W.XQ, null),
            r.createElement(J, { schema: a }),
            r.createElement(W.XQ, null),
            r.createElement(j, { schema: a }),
            r.createElement(q, { schema: a, maxLevel: 2, levels: 1 }),
            r.createElement(W.XQ, null),
            r.createElement(ee, { schema: a }),
            r.createElement(W.XQ, null),
            r.createElement(b.KZ, { nodeType: a.nodes.image }),
            r.createElement(W.hK, null),
            o,
          ),
        );
      }
      function ve(e) {
        const { schema: t } = e,
          n = r.useMemo(
            () => [
              {
                type: t.pm_schema.nodes.image,
                component: b.AS,
                readProps: (e) => ({ src: e.attrs.src }),
              },
            ],
            [t],
          );
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(g, { specs: n }),
          r.createElement(_e.pw, { nodeType: t.pm_schema.nodes.image }),
        );
      }
    },
    49693: (e, t, n) => {
      "use strict";
      n.d(t, { op: () => c, CS: () => a, vE: () => l, Al: () => o });
      class r {
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
        Parse(e, t, n = !1) {
          const o = (function (e, t) {
            const n = [];
            let o = new r(),
              a = !1,
              s = !1,
              c = !1;
            for (let r = 0; r < e.length; r++) {
              const l = e[r];
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
                        (o = i(n, o)),
                        (s = !1);
                    }
                  else
                    o.ConvertMalformedNodeToText(), (o = i(n, o, 2)), (s = !0);
                  break;
                case 1:
                  "[" != l || a
                    ? "\\" == l && t
                      ? (a && (o.text += l), (a = !a))
                      : ((o.text += l), (a = !1))
                    : ((o = i(n, o, 2)), (s = !0));
              }
            }
            0 != o.type &&
              ((2 != o.type && 3 != o.type) || o.ConvertMalformedNodeToText(),
              n.push(o));
            return n;
          })(e, n);
          return this.Parse_BuildElements(o, t);
        }
        Parse_BuildElements(e, t) {
          let n = this.m_fnAccumulatorFactory(void 0);
          const r = [],
            o = () => (r.length < 1 ? void 0 : r[r.length - 1]),
            a = this.m_dictComponents,
            s = (e) => !(!e.tag || !a.get(e.tag)?.autocloses);
          let c = !1,
            l = !0;
          const i = (e, o) => {
            if (e && e.node.tag === o.text && a.get(e.node.tag)) {
              const o = a.get(e.node.tag),
                s = r.map((e) => e.node.tag),
                i = { parentTags: s, tagname: e.node.tag, args: e.node.args },
                d = t(o.Constructor, i, ...n.GetElements());
              (n = e.accumulator),
                Array.isArray(d)
                  ? d.forEach((e) => n.AppendNode(e))
                  : n.AppendNode(d),
                (c = !!o.skipFollowingNewline),
                (l = e.bWrapTextForCopying);
            } else if (e) {
              const t = e.accumulator;
              t.AppendText("[" + e.node.text + "]", !1),
                n.GetElements().forEach((e) => t.AppendNode(e)),
                t.AppendText("[/" + o.text + "]", !1),
                (n = t),
                (l = e.bWrapTextForCopying);
            }
          };
          for (
            e.forEach((e, t) => {
              if (1 == e.type) {
                const t = c ? e.text.replace(/^[\t\r ]*\n/g, "") : e.text;
                n.AppendText(t, l), (c = !1);
              } else if (2 == e.type) {
                const t = a.get(e.tag);
                if (t) {
                  const s = o();
                  if (void 0 !== s) {
                    const t = a.get(s.node.tag);
                    t &&
                      t.autocloses &&
                      e.tag === s.node.tag &&
                      i(r.pop(), s.node);
                  }
                  r.push({ accumulator: n, node: e, bWrapTextForCopying: l }),
                    (n = this.m_fnAccumulatorFactory(e)),
                    (c = !!t.skipInternalNewline),
                    (l = t.allowWrapTextForCopying ?? !1);
                } else n.AppendText("[" + e.text + "]", 0 == r.length);
              } else if (3 == e.type) {
                for (; o() && o().node.tag !== e.text && s(o().node); ) {
                  const e = r.pop();
                  i(e, e.node);
                }
                if (o()?.node.tag == e.text) {
                  const t = r.pop();
                  i(t, e);
                } else n.AppendText("[/" + e.text + "]", 0 == r.length);
              }
            });
            r.length > 0;

          ) {
            const e = r.pop();
            i(e, e.node);
          }
          return n.GetElements();
        }
      }
      function a(e, t) {
        let n = "[" + e;
        t?.[""] && (n += `=${s(t[""])}`);
        for (const e in t)
          "" !== e &&
            (n += ` ${((r = e), r.replace(/(\\| |\])/g, "\\$1"))}=${s(t[e])}`);
        var r;
        return (n += "]"), n;
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
      function i(e, t, n = 0) {
        if (2 == t.type) {
          let e = t.text.indexOf("=");
          const n = t.text.indexOf(" ");
          if ((-1 != n && (-1 == e || n < e) && (e = n), e > 0)) {
            t.tag = t.text.substr(0, e).toLocaleLowerCase();
            const n = t.text.substr(e);
            t.args = (function (e) {
              if (!e || e.length < 1) return {};
              const t = {};
              let n = "",
                r = "",
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
                    if (((s = !1), 1 == o)) n += c;
                    else {
                      if (3 != o && 4 != o)
                        throw new Error(
                          "Not expecting to accumulate buffer in state " + o,
                        );
                      r += c;
                    }
                  else s = !0;
                i && ((t[n] = r), (n = ""), (r = ""));
              }
              0 != o && (t[n] = r);
              return t;
            })(n);
          } else (t.args = {}), (t.tag = t.text.toLocaleLowerCase());
        }
        e.push(t);
        const o = new r();
        return (o.type = n), o;
      }
    },
  },
]);
