/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [1749],
  {
    80968: (e) => {
      e.exports = {
        EditorPanel: "_2SgPxDudv7oRkzlHsNm4_O",
        AboutTheGameArea: "_3EAE8BxFPnb_g0Ct5b4QzW",
        StoreAppPageHeader: "_1aQY7Yz23XDN0N4IVctriG",
        GradientRule: "_1dK_q5EmTZgebmJeCzHq1s",
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
    51749: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => Ee });
      var r = n(90626),
        o = n(49693),
        a = n(81393);
      function s(e, t) {
        return l(t.pm_schema, t.pm_to_bbcode_config, e);
      }
      function l(e, t, n) {
        let r = n.marks,
          s = "";
        const d = t.mapNodes.get(n.type),
          { tag: u, args: m } = i(d, n.attrs);
        return (
          u && (s += (0, o.CS)(u, m)),
          n.content.forEach((n) => {
            ([s, r] = c(t, r, n.marks, s)),
              ([s, r] = (function (e, t, n, r) {
                let s;
                for (const l of n)
                  if (-1 === t.indexOf(l)) {
                    s || (s = t.slice());
                    const n = e.mapMarks.get(l.type);
                    if (((0, a.w)(n, "mark missing bbtag"), n)) {
                      s.push(l);
                      const { args: e, tag: t } = i(n, l.attrs);
                      r += (0, o.CS)(t, e || {});
                    }
                  }
                return [r, s ?? t];
              })(t, r, n.marks, s)),
              n.type.isText
                ? (s += (0, o.vE)(n.text || ""))
                : n.type == e.nodes.hard_break
                  ? (s += "\n")
                  : (s += l(e, t, n));
          }),
          ([s] = c(t, r, [], s)),
          u && (s += (0, o.op)(u)),
          s
        );
      }
      function c(e, t, n, r) {
        const s = [];
        for (const e of t) -1 === n.indexOf(e) && s.push(e);
        if (!s.length) return [r, t];
        const l = t.slice();
        for (
          ;
          s.length && ((0, a.w)(l.length, "no marks left to close"), l.length);

        ) {
          const t = l.pop(),
            n = e.mapMarks.get(t.type),
            { tag: a } = i(n, t.attrs);
          r += (0, o.op)(a);
          const c = s.indexOf(t);
          -1 != c && s.splice(c, 1);
        }
        return [r, l];
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
        u = n(52893),
        m = n(72739),
        p = n(12362),
        g = n(7502),
        h = n(98724),
        f = n(79216),
        b = n(4188),
        _ = n(37834);
      const k = r.createContext(null);
      function C(e) {
        return r.createElement(k.Provider, { value: e.view }, e.children);
      }
      function T(e) {
        const { schema: t, onUpdate: n } = e,
          o = r.useRef(n);
        return (
          (o.current = n),
          E(
            r.useMemo(
              () =>
                new u.k_({
                  view: (e) => ({ update: (...e) => o.current(...e) }),
                }),
              [],
            ),
          ),
          E(
            r.useMemo(
              () =>
                (function (e) {
                  const t = (0, p.st)(
                    p.I$,
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
                  );
                  return (0, g.w)({
                    "Mod-z": h.tN,
                    "Mod-y": h.ZS,
                    Backspace: f.dv,
                    "Mod-Enter": t,
                    "Shift-Enter": t,
                    "Mod-b": (0, p.wh)(e.marks.strong),
                    "Mod-i": (0, p.wh)(e.marks.italic),
                    Enter: (0, b.wn)(e.nodes.list_item),
                    "Mod-[": (0, b.T2)(e.nodes.list_item),
                    "Mod-]": (0, b.$B)(e.nodes.list_item),
                    "Shift-Ctrl-1": (0, p.y_)(e.nodes.heading, { level: 1 }),
                    "Shift-Ctrl-2": (0, p.y_)(e.nodes.heading, { level: 2 }),
                    "Shift-Ctrl-3": (0, p.y_)(e.nodes.heading, { level: 3 }),
                    "Shift-Ctrl-0": (0, p.y_)(e.nodes.paragraph),
                  });
                })(t),
              [t],
            ),
          ),
          E(r.useMemo(() => (0, g.w)(p.RV), [])),
          E(
            r.useMemo(
              () =>
                (function (e) {
                  return (0, f.sM)({
                    rules: [
                      (0, f.tG)(
                        /^(\d+)\.\s$/,
                        e.nodes.ordered_list,
                        (e) => ({ order: parseInt(e[1]) }),
                        (e, t) =>
                          t.childCount + t.attrs.order == parseInt(e[1]),
                      ),
                      (0, f.tG)(/^\s*([-+*])\s$/, e.nodes.bullet_list),
                      (0, _.OX)(/\*([^*]+)\*/, e.marks.strong),
                      (0, _.OX)(/_([^_]+)_/, e.marks.italic),
                      (0, _.OX)(/~([^~]+)~/, e.marks.strike),
                      (0, _.OX)(/`([^`]+)`/, e.marks.code),
                      (0, f.JJ)(/^```$/, e.nodes.code_block),
                      (0, f.JJ)(/^(#{1,5})\s$/, e.nodes.heading, (e) => ({
                        level: e[1].length,
                      })),
                    ],
                  });
                })(t),
              [t],
            ),
          ),
          null
        );
      }
      function E(e) {
        const t = r.useContext(k);
        r.useEffect(() => {
          if (t && e && !t.isDestroyed)
            return (0, _.JD)(t, e), () => (0, _.xv)(t, e);
        }, [t, e]);
      }
      function v(e) {
        const { specs: t } = e,
          [n, o] = r.useState([]),
          a = r.useRef(0),
          s = r.useCallback(
            (e) => (
              o((t) => [...t, { id: a.current++, nodeView: e }]),
              () => o((t) => t.filter((t) => t.nodeView != e))
            ),
            [],
          );
        return (
          E(
            r.useMemo(() => {
              const e = {};
              return (
                t.forEach(
                  (t) => (e[t.type.name] = (e, n, r) => new B(t, e, n, r, s)),
                ),
                new u.k_({ props: { nodeViews: e } })
              );
            }, [t, s]),
          ),
          n.map(({ id: e, nodeView: t }) =>
            r.createElement(A, { key: e, nodeView: t }),
          )
        );
      }
      function A(e) {
        const {
            element: t,
            spec: n,
            getProps: o,
            onPropsChanged: a,
            actions: s,
            isSelected: l,
          } = e.nodeView,
          [c, i] = r.useReducer((e) => e + 1, 0);
        return (
          r.useEffect(() => a.Register(i).Unregister, [a, i]),
          m.createPortal(
            r.createElement(n.component, { ...o(), selected: l(), ...s }),
            t,
          )
        );
      }
      class B {
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
          const l = {
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
            c = new d.l();
          (this.destroy = o({
            element: a,
            spec: e,
            getProps: () => e.readProps(this.node),
            isSelected: () => this.selected,
            onPropsChanged: c,
            actions: l,
          })),
            (this.onPropsChanged = c.Dispatch.bind(c));
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
      var x = n(36225),
        y = n(29655),
        w = n(29287);
      var M = n(57053);
      class O {
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
      function D(e) {
        return e
          .filter((e) => e.isText)
          .map((e) => e.text)
          .join();
      }
      class P extends o.Al {
        m_schema;
        constructor(e, t) {
          super(e, () => new O(t)), (this.m_schema = t);
        }
        ParseBBCode(e) {
          const t = this.Parse(e, this.BBNodeToPMNode.bind(this), !0);
          return this.m_schema.topNodeType.createChecked(
            {},
            (function (e, t) {
              const n = [];
              let r = [];
              for (const o of t) {
                const t = o.type == e.nodes.hard_break;
                t || e.topNodeType.validContent(M.FK.from(o))
                  ? r.length
                    ? (n.push(e.nodes.paragraph.createChecked({}, r)),
                      (r = []),
                      t || n.push(o))
                    : t
                      ? n.push(e.nodes.paragraph.createChecked())
                      : n.push(o)
                  : r.push(o);
              }
              (!r.length && n.length) ||
                n.push(e.nodes.paragraph.createChecked({}, r));
              return n;
            })(this.m_schema, t),
          );
        }
        BBNodeToPMNode(e, t, ...n) {
          let r = e.BBArgsToAttrs ? e.BBArgsToAttrs(t.args || {}) : void 0;
          try {
            if (
              (!("convertContentToAttr" in e) ||
                !e.convertContentToAttr ||
                (r && r[e.convertContentToAttr]) ||
                ((r = { ...(r || {}), [e.convertContentToAttr]: D(n) }),
                "node" in e && (n = [])),
              "node" in e)
            ) {
              let t = M.FK.from(n);
              if (!e.node.validContent(t) && e.acceptNode) {
                let r = n.filter((t) => t.type == e.acceptNode);
                if (!r.length) {
                  let t = n;
                  e.acceptNode.isBlock &&
                    t.length > 1 &&
                    t[t.length - 1].type == this.m_schema.nodes.hard_break &&
                    (t = t.slice(0, -1)),
                    (r = [e.acceptNode.create(void 0, t)]);
                }
                t = M.FK.from(r);
              }
              return e.node.createAndFill(r, t) || e.node.create(r, t);
            }
            return n.map((t) => t.mark([...t.marks, e.mark.create(r)]));
          } catch (e) {
            return (
              console.error(`Error parsing [${t.tagname}] tag: ${e}`, e), []
            );
          }
        }
      }
      var S = n(32381),
        N = n(44078),
        F = n(61712),
        L = n(56011),
        R = n(61859),
        G = n(97009);
      function U() {
        const [e, t] = r.useState(),
          [n, o] = r.useState(),
          [a, s] = r.useState();
        if (
          (E(
            r.useMemo(
              () =>
                new u.k_({
                  props: {
                    handleDOMEvents: {
                      mouseover: (e, n) => {
                        const r = n.target;
                        if ((0, L.kD)(r) && "A" == r.nodeName) {
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
            ),
          ),
          !a)
        )
          return null;
        const l = a.getAttribute("href");
        return r.createElement(
          I,
          { top: n, left: e },
          r.createElement("div", { className: G.Link }, l),
          r.createElement(
            "div",
            { className: G.LinkHelp },
            (0, R.we)("#UserGameNotes_ClickToOpenLink"),
          ),
        );
      }
      function I(e) {
        const { top: t, left: n, children: o } = e,
          [a, s] = r.useState(0),
          l = r.useRef();
        r.useLayoutEffect(() => {
          s(l.current.getBoundingClientRect().width);
        }, [t, n, o]);
        const c = { top: `${t}px`, left: `${Math.max(n - a / 2, 12)}px` };
        return r.createElement(
          "div",
          { className: G.Hover, style: c, ref: l },
          o,
        );
      }
      var $ = n(51272),
        H = n(52038),
        V = n(56093),
        z = n(61336),
        K = n(78327),
        W = n(73309);
      function Y(e) {
        const {
            schemaConfig: t,
            bbcode: n,
            className: o,
            onUpdate: a,
            refView: s,
            onClickURL: l,
            bSpellcheckEnabled: c = !0,
            panelProps: i,
            children: d,
            dataKey: m,
          } = e,
          [p, g] = r.useState(),
          f = r.useRef(),
          b = r.useRef();
        b.current = l || Q;
        const k = r.useCallback(
          (e) => {
            if (!e) return void f.current?.destroy();
            const n = f.current;
            n && n.destroy(),
              (f.current = new w.Lz(e, {
                state: n?.state ?? u.$t.create({ schema: t.pm_schema }),
                handleClickOn: (...e) =>
                  (function (e, t, n, r, o, a, s, l) {
                    if (l && (s.ctrlKey || 1 == s.button)) {
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
                    for (; (a = t.match(z.O9)); )
                      a.index > 0 && s.push(e.text(t.substring(0, a.index))),
                        s.push(
                          e.text(a[0], [
                            e.marks.link.create({ href: (0, z.jT)(a[0]) }),
                          ]),
                        ),
                        (t = t.substring(a.index + a[0].length));
                    t.length && s.push(e.text(t));
                    return new M.Ji(M.FK.from(s), n.start(), n.end());
                  })(t.pm_schema, ...e),
              })),
              g(f.current);
          },
          [t],
        );
        r.useEffect(() => {
          p &&
            p.updateState(
              (function (e, t, n) {
                const r = (0, h.b6)(),
                  o = r.spec.key?.get(n),
                  a = [...n.plugins.filter((e) => e != o), r];
                return u.$t.create({ schema: t, doc: e, plugins: a });
              })(
                (function (e, t) {
                  return new P(t.bbcode_dictionary, t.pm_schema).ParseBBCode(e);
                })(n, t),
                t.pm_schema,
                p.state,
              ),
            );
        }, [t, n, p, m]),
          (0, V.D5)(s, p);
        const {
            refDiv: E,
            onActivate: v,
            onGamepadDirection: A,
          } = (function (e) {
            const t = (0, K.rP)(),
              n = r.useRef(),
              o = r.useCallback(
                (e) => {
                  (0, F.iv)(e, t.IN_VR);
                },
                [t.IN_VR],
              ),
              a = (0, F.FN)(
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
                      (0, _.bQ)(e.current, t.left, t.top);
                      break;
                    }
                  }
                }
              }, [a, e]),
              l = r.useCallback((e) => e.currentTarget == e.target, []),
              c = (0, N.ak)(n, null, null, l);
            return { refDiv: n, onActivate: s, onGamepadDirection: c };
          })(f),
          B = (0, V.Ue)(E, k);
        return r.createElement(
          C,
          { view: p },
          r.createElement(S.Z, {
            key: `editordiv_${c}`,
            className: (0, H.A)(o, W.Container),
            ref: B,
            spellCheck: c,
            focusable: !0,
            onActivate: v,
            onOKActionDescription: (0, R.we)("#UserGameNotes_Edit"),
            onGamepadDirection: A,
            ...i,
          }),
          r.createElement(T, { onUpdate: a, schema: t.pm_schema }),
          r.createElement(U, null),
          d,
        );
      }
      function Q(e, t) {
        (0, $.EP)(t, e);
      }
      var X = n(4869),
        Z = n(7068),
        J = n(30708),
        j = n(30175);
      n(32754);
      r.memo(function (e) {
        const { schema: t, active: n, closeModal: o, view: a } = e,
          [s, l] = r.useState(""),
          [c, i] = r.useState(""),
          d = r.useRef(),
          u = r.useRef();
        return (
          r.useLayoutEffect(() => {
            if (n) {
              let e = "";
              a.state.selection.empty ||
                (e = a.state.doc.cut(
                  a.state.selection.from,
                  a.state.selection.to,
                ).textContent),
                l(e),
                e.startsWith("http")
                  ? (i(e),
                    d.current.Focus(),
                    window.setTimeout(() => {
                      d.current.element.select();
                    }, 0))
                  : 0 == e.length
                    ? d.current.Focus()
                    : u.current.Focus();
            }
          }, [n, a]),
          r.createElement(
            J.o0,
            {
              onOK: () => {
                a.dispatch(
                  a.state.tr.replaceRangeWith(
                    a.state.selection.from,
                    a.state.selection.to,
                    t.text(s || c, [t.marks.link.create({ href: c })]),
                  ),
                ),
                  a.focus(),
                  o();
              },
              closeModal: o,
              strTitle: (0, R.we)("#FormattingToolbar_InsertLink"),
              strOKButtonText: (0, R.we)("#FormattingToolbar_InsertLink"),
              bOKDisabled: 0 == c.length,
            },
            r.createElement(Z.pd, {
              ref: d,
              value: s,
              onChange: (e) => l(e.currentTarget.value),
              label: (0, R.we)("#FormattingToolbar_LinkText"),
            }),
            r.createElement(Z.pd, {
              ref: u,
              value: c,
              onChange: (e) => i(e.currentTarget.value),
              label: (0, R.we)("#FormattingToolbar_LinkAddress"),
            }),
          )
        );
      });
      function q() {
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            j.fx,
            {
              tooltip: "#FormattingToolbar_Undo",
              command: h.tN,
              fnEnabledCheck: ee,
            },
            r.createElement(X.VnB, null),
          ),
          r.createElement(
            j.fx,
            {
              tooltip: "#FormattingToolbar_Redo",
              command: h.ZS,
              fnEnabledCheck: te,
            },
            r.createElement(X.Bal, null),
          ),
        );
      }
      function ee(e) {
        return h.mk(e.state) > 0;
      }
      function te(e) {
        return h.mL(e.state) > 0;
      }
      function ne(e) {
        const { schema: t } = e;
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            j.GY,
            { tooltip: "#FormattingToolbar_Bold", mark: t.marks.strong },
            r.createElement(X.l4n, null),
          ),
          r.createElement(
            j.GY,
            { tooltip: "#FormattingToolbar_Italic", mark: t.marks.italic },
            r.createElement(X.UKJ, null),
          ),
          r.createElement(
            j.GY,
            {
              tooltip: "#FormattingToolbar_Underline",
              mark: t.marks.underline,
            },
            r.createElement(X.Gj3, null),
          ),
          "strike" in t.marks &&
            r.createElement(
              j.GY,
              { tooltip: "#FormattingToolbar_Strike", mark: t.marks.strike },
              r.createElement(X.tI4, null),
            ),
          "code" in t.marks &&
            r.createElement(
              j.GY,
              { tooltip: "#FormattingToolbar_InlineCode", mark: t.marks.code },
              r.createElement(X.bmT, null),
            ),
        );
      }
      function re(e) {
        const { schema: t } = e;
        return r.createElement(
          j.u3,
          {
            tooltip: "#FormattingToolbar_Paragraph",
            nodeType: t.nodes.paragraph,
          },
          r.createElement(X.iYj, null),
        );
      }
      function oe(e) {
        const { schema: t, maxLevel: n = 1, levels: o } = e,
          a = n + o - 1;
        return r.createElement(
          r.Fragment,
          null,
          n <= 1 &&
            r.createElement(
              j.u3,
              {
                tooltip: "#FormattingToolbar_HeadingLevel1",
                nodeType: t.nodes.heading,
                attrs: { level: 1 },
              },
              r.createElement(X.jRw, null),
            ),
          n <= 2 &&
            a >= 2 &&
            r.createElement(
              j.u3,
              {
                tooltip: "#FormattingToolbar_HeadingLevel2",
                nodeType: t.nodes.heading,
                attrs: { level: 2 },
              },
              r.createElement(X.qOW, null),
            ),
          n <= 3 &&
            a >= 3 &&
            r.createElement(
              j.u3,
              {
                tooltip: "#FormattingToolbar_HeadingLevel3",
                nodeType: t.nodes.heading,
                attrs: { level: 3 },
              },
              r.createElement(X.x7X, null),
            ),
          n <= 4 &&
            a >= 4 &&
            r.createElement(
              j.u3,
              {
                tooltip: "#FormattingToolbar_HeadingLevel4",
                nodeType: t.nodes.heading,
                attrs: { level: 4 },
              },
              r.createElement(X.qzO, null),
            ),
          n <= 5 &&
            a >= 5 &&
            r.createElement(
              j.u3,
              {
                tooltip: "#FormattingToolbar_HeadingLevel5",
                nodeType: t.nodes.heading,
                attrs: { level: 5 },
              },
              r.createElement(X.jXA, null),
            ),
        );
      }
      function ae(e) {
        const { schema: t } = e,
          { callbacks: n, view: o } = (0, j.wU)(),
          a = r.useCallback(
            (e) => !!(0, _.d7)(e.state, t.nodes.bullet_list),
            [t],
          ),
          [s, l] = r.useState(() => a(o));
        return (
          (0, V.hL)(
            n,
            r.useCallback((e) => l(a(e)), [a]),
          ),
          r.createElement(
            r.Fragment,
            null,
            r.createElement(
              j.cQ,
              {
                tooltip: "#FormattingToolbar_BulletedList",
                toggled: s,
                command: b.Sd(t.nodes.bullet_list),
              },
              r.createElement(X.JPq, null),
            ),
            r.createElement(
              j.cQ,
              {
                tooltip: "#FormattingToolbar_OutdentList",
                disabled: !s,
                command: b.T2(t.nodes.list_item),
              },
              r.createElement(X.LSz, null),
            ),
            r.createElement(
              j.cQ,
              {
                tooltip: "#FormattingToolbar_IndentList",
                disabled: !s,
                command: b.$B(t.nodes.list_item),
              },
              r.createElement(X.ycU, null),
            ),
          )
        );
      }
      var se = n(33645),
        le = n.n(se);
      function ce(e, t, n = 0) {
        return () => [e, { class: t }, n];
      }
      function ie(e, t) {
        return () => [
          t,
          { class: le().PreservedUnsupportedTag },
          ["span", { class: le().Tag }, `[${e}]`],
          ["span", 0],
          ["span", { class: le().Tag }, `[/${e}]`],
        ];
      }
      const de = {
        nodes: {
          paragraph: {
            content: "inline*",
            group: "block",
            parseDOM: [{ tag: "p" }],
            toDOM: ce("p", (0, H.A)("pm_paragraph", le().Paragraph)),
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
                  `BB_Header${e.attrs.level} ` + le()[`Header${e.attrs.level}`],
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
              return ["img", { src: t, alt: n, title: r, class: le().Image }];
            },
            bbCode: {
              tag: "img",
              BBArgsToAttrs: (e) => ({ src: e.src }),
              AttrsToBBArgs: (e) => ({ args: { src: e.src } }),
              convertContentToAttr: "src",
            },
          },
          bullet_list: {
            ...b.fF,
            content: "list_item+",
            group: "block",
            toDOM: ce("ul", le().List),
            bbCode: { tag: "list" },
          },
          ordered_list: {
            ...b.o8,
            content: "list_item+",
            group: "block",
            toDOM: ce("ol", le().OrderedList),
            bbCode: { tag: "olist" },
          },
          list_item: {
            ...b.Aw,
            content: "paragraph block*",
            toDOM: ce("li", le().ListItem),
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
              { class: le().CodeBlock },
              ["code", { class: le().Code }, 0],
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
            toDOM: ce("b", (0, H.A)("BB_Bold", le().Bold)),
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
            toDOM: ce("i", (0, H.A)("BB_Italic", le().Italic)),
            bbCode: { tag: "i" },
          },
          underline: {
            parseDOM: [{ tag: "u" }, { style: "text-decoration=underline" }],
            toDOM: ce("u", (0, H.A)("BB_Underline", le().Underline)),
            bbCode: { tag: "u" },
          },
          strike: {
            parseDOM: [{ style: "text-decoration=line-through" }],
            toDOM: ce("span", (0, H.A)("BB_Strike", le().Strike)),
            bbCode: { tag: "strike" },
          },
          code: {
            parseDOM: [{ tag: "code" }],
            toDOM: ce("code", (0, H.A)("BB_Code", le().Code)),
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
      class ue {
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
          (this.m_ProseMirrorSchema = new M.Sj({ nodes: t, marks: o })),
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
              const { tag: l, AttrsToBBArgs: c } = a[0];
              this.m_PMToBBCodeConfig.mapNodes.set(r, {
                tag: l,
                AttrsToBBArgs: c,
              });
            }),
            r.forEach((e, t) => {
              const n = this.m_ProseMirrorSchema.marks[t],
                {
                  tag: r,
                  BBArgsToAttrs: o,
                  AttrsToBBArgs: a,
                  convertContentToAttr: s,
                  ...l
                } = e;
              this.m_mapBBCodeDictionary.set(r, {
                Constructor: {
                  mark: n,
                  BBArgsToAttrs: o,
                  convertContentToAttr: s,
                },
                ...l,
              }),
                this.m_PMToBBCodeConfig.mapMarks.set(n, {
                  tag: r,
                  AttrsToBBArgs: a,
                });
            });
        }
      }
      const {
          paragraph: me,
          heading: pe,
          bullet_list: ge,
          list_item: he,
          image: fe,
        } = de.nodes,
        { strong: be, italic: _e, underline: ke, link: Ce } = de.marks;
      var Te = n(80968);
      function Ee(e) {
        const { language: t, rctToolbarControls: n, value: o, strLabel: a } = e,
          [l, c] = r.useState(),
          i = r.useRef(),
          d = r.useRef(),
          u = r.useRef();
        u.current != o && (d.current = o.Value);
        const m = (function () {
            const e = (0, y.FD)(),
              t = r.useRef(e);
            t.current = e;
            const n = r.useRef();
            if (!n.current) {
              const e = (e) => t.current.find((t) => t.name === e)?.url;
              n.current =
                ((o = e),
                new ue({
                  nodes: {
                    paragraph: me,
                    heading: {
                      ...pe,
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
                    bullet_list: ge,
                    list_item: he,
                    image: {
                      ...fe,
                      parseDOM: void 0,
                      toDOM: (e) => ["img", { src: o(e.attrs.src) }],
                    },
                    table: {
                      content: "tr+",
                      group: "block",
                      toDOM: ie("table", "div"),
                      bbCode: { tag: "table" },
                    },
                    tr: {
                      content: "(th | td)+",
                      toDOM: ie("tr", "div"),
                      bbCode: { tag: "tr" },
                    },
                    th: {
                      content: "paragraph block*",
                      toDOM: ie("th", "span"),
                      bbCode: { tag: "th" },
                    },
                    td: {
                      content: "paragraph block*",
                      toDOM: ie("td", "span"),
                      bbCode: { tag: "td" },
                    },
                  },
                  marks: { strong: be, italic: _e, underline: ke, link: Ce },
                }));
            }
            var o;
            return n.current;
          })(),
          p = r.useCallback((e) => o.Set(e), [o]),
          { onUpdate: g, fnCommitPendingSave: h } = (function (e, t, n) {
            const { msAutosaveTimeout: o = 1e3, refOnChangeCallback: a } =
                n || {},
              [l, c] = r.useState(!1),
              i = r.useRef(),
              d = r.useCallback(
                (t, n) => {
                  a?.current && a.current(),
                    n.doc &&
                      n.doc != t.state.doc &&
                      ((i.current = () => s(t.state.doc, e)), c(!0));
                },
                [a, e],
              ),
              u = r.useCallback(() => {
                if (i.current) {
                  const e = i.current();
                  t(e), c(!1);
                }
                i.current = void 0;
              }, [t]);
            return (
              r.useEffect(() => {
                if (!l) return;
                const e = window.setTimeout(u, o);
                return () => {
                  window.clearTimeout(e), u();
                };
              }, [l, u, o]),
              { onUpdate: d, fnCommitPendingSave: u, bDirty: l }
            );
          })(m, p, { msAutosaveTimeout: 5e3, refOnChangeCallback: i });
        return (
          r.useEffect(() => {
            window.DisableTooltipMutationObserver &&
              window.DisableTooltipMutationObserver();
          }, []),
          r.useEffect(() => {
            u.current && u.current != o && l?.focus(),
              i.current && i.current(),
              (u.current = o);
          }, [l, o]),
          r.createElement(
            "div",
            null,
            r.createElement(Ae, {
              view: l,
              refUpdateToolbar: i,
              rctToolbarControls: n,
              schema: m.pm_schema,
            }),
            r.createElement(
              "div",
              { className: Te.AboutTheGameArea },
              a && r.createElement(ve, null, a),
              r.createElement(
                Y,
                {
                  panelProps: {
                    lang: (0, R.d$)(t),
                    onBlur: h,
                    className: Te.EditorPanel,
                  },
                  schemaConfig: m,
                  className: "",
                  bbcode: d.current,
                  onUpdate: g,
                  refView: c,
                  dataKey: t,
                },
                r.createElement(Be, { schema: m }),
              ),
            ),
          )
        );
      }
      function ve(e) {
        return r.createElement(
          "h2",
          { className: Te.StoreAppPageHeader },
          e.children,
          r.createElement("div", { className: Te.GradientRule }),
        );
      }
      function Ae(e) {
        const {
          view: t,
          refUpdateToolbar: n,
          rctToolbarControls: o,
          schema: a,
        } = e;
        return r.createElement(
          j.bI,
          { refUpdateToolbar: n, view: t },
          r.createElement(
            j.Ez,
            null,
            r.createElement(q, null),
            r.createElement(j.XQ, null),
            r.createElement(ne, { schema: a }),
            r.createElement(j.XQ, null),
            r.createElement(re, { schema: a }),
            r.createElement(oe, { schema: a, maxLevel: 2, levels: 1 }),
            r.createElement(j.XQ, null),
            r.createElement(ae, { schema: a }),
            r.createElement(j.XQ, null),
            r.createElement(x.KZ, { nodeType: a.nodes.image }),
            r.createElement(j.hK, null),
            o,
          ),
        );
      }
      function Be(e) {
        const { schema: t } = e,
          n = r.useMemo(
            () => [
              {
                type: t.pm_schema.nodes.image,
                component: x.AS,
                readProps: (e) => ({ src: e.attrs.src }),
              },
            ],
            [t],
          );
        return r.createElement(v, { specs: n });
      }
    },
    49693: (e, t, n) => {
      "use strict";
      n.d(t, { op: () => l, CS: () => a, vE: () => c, Al: () => o });
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
        m_dictComponents = void 0;
        constructor(e, t) {
          (this.m_dictComponents = e), (this.m_fnAccumulatorFactory = t);
        }
        Parse(e, t, n = !1) {
          const o = (function (e, t) {
            const n = [];
            let o = new r(),
              a = !1,
              s = !1,
              l = !1;
            for (let r = 0; r < e.length; r++) {
              const c = e[r];
              switch (o.type) {
                case 0:
                  "[" == c
                    ? ((o.type = 2), (s = !0))
                    : ((o.type = 1), "\\" == c && t ? (a = !a) : (o.text += c));
                  break;
                case 2:
                case 3:
                  if ("/" == c && s) (o.type = 3), (o.text = ""), (s = !1);
                  else if ("[" != c || a)
                    if ("]" != c || a)
                      "\\" == c && t
                        ? ((o.text += c), (a = !a), (s = !1))
                        : ((o.text += c), (a = !1), (s = !1));
                    else {
                      const e =
                          2 == o.type &&
                          "noparse" == o.text.toLocaleLowerCase(),
                        t =
                          3 == o.type &&
                          "noparse" == o.text.toLocaleLowerCase();
                      s || (l && !t)
                        ? (o.ConvertMalformedNodeToText(), (o.text += c))
                        : e
                          ? (l = !0)
                          : t && (l = !1),
                        (o = i(n, o)),
                        (s = !1);
                    }
                  else
                    o.ConvertMalformedNodeToText(), (o = i(n, o, 2)), (s = !0);
                  break;
                case 1:
                  "[" != c || a
                    ? "\\" == c && t
                      ? (a && (o.text += c), (a = !a))
                      : ((o.text += c), (a = !1))
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
            a = this.m_dictComponents;
          let s = !1,
            l = !0;
          const c = (e, o, c) => {
            if (e && e.node.tag === o.text && a?.get(e.node.tag)) {
              const o = a.get(e.node.tag),
                c = r.map((e) => e.node.tag),
                i = { parentTags: c, tagname: e.node.tag, args: e.node.args },
                d = t(o.Constructor, i, ...n.GetElements());
              (n = e.accumulator),
                Array.isArray(d)
                  ? d.forEach((e) => n.AppendNode(e))
                  : n.AppendNode(d),
                (s = !!o.skipFollowingNewline),
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
                const t = s ? e.text.replace(/^[\t\r ]*\n/g, "") : e.text;
                n.AppendText(t, l), (s = !1);
              } else if (2 == e.type) {
                const t = a?.get(e.tag);
                if (t) {
                  const i = o();
                  if (void 0 !== i) {
                    const t = a?.get(i.node.tag);
                    t &&
                      t.autocloses &&
                      e.tag === i.node.tag &&
                      c(r.pop(), i.node);
                  }
                  r.push({ accumulator: n, node: e, bWrapTextForCopying: l }),
                    (n = this.m_fnAccumulatorFactory(e)),
                    (s = !!t.skipInternalNewline),
                    (l = t.allowWrapTextForCopying ?? !1);
                } else n.AppendText("[" + e.text + "]", 0 == r.length);
              } else if (3 == e.type) {
                for (
                  ;
                  o() &&
                  o().node.tag !== e.text &&
                  a?.get(o().node.tag) &&
                  a?.get(o().node.tag)?.autocloses;

                ) {
                  const e = r.pop();
                  c(e, e.node);
                }
                if (o()?.node.tag == e.text) {
                  const t = r.pop();
                  c(t, e);
                } else n.AppendText("[/" + e.text + "]", 0 == r.length);
              }
            });
            r.length > 0;

          ) {
            const e = r.pop(),
              t = e.accumulator;
            t.AppendText("[" + e.node.text + "]", !1),
              n.GetElements().forEach((e) => t.AppendNode(e)),
              (n = t);
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
      function l(e) {
        return `[/${e}]`;
      }
      function c(e) {
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
                const l = e[a];
                let c = !0,
                  i = !1;
                switch (o) {
                  case 0:
                    if ("=" == l) return {};
                    if (" " == l) continue;
                    o = 1;
                    break;
                  case 1:
                    ("=" != l && " " != l) ||
                      s ||
                      (" " == l ? ((o = 0), (i = !0)) : (o = 2), (c = !1));
                    break;
                  case 2:
                    " " == l
                      ? ((o = 0), (c = !1), (i = !0))
                      : '"' == l
                        ? ((o = 4), (c = !1))
                        : (o = 3);
                    break;
                  case 3:
                  case 4:
                    ((" " == l && 4 != o && !s) ||
                      ('"' == l && 4 == o && !s)) &&
                      ((o = 0), (c = !1), (i = !0));
                }
                if (c)
                  if ("\\" != l || s)
                    if (((s = !1), 1 == o)) n += l;
                    else {
                      if (3 != o && 4 != o)
                        throw new Error(
                          "Not expecting to accumulate buffer in state " + o,
                        );
                      r += l;
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
