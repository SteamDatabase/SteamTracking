(self.webpackChunksteamui = self.webpackChunksteamui || []).push([
  [6838],
  {
    12041: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        Page: "ZUB8zp36DGzB2Ge1HGlBi",
        Content: "_1aZdz4QMkvBwHD48GvZNIn",
        NotesPagedSettings: "_1dBCPkyWYRX7FwOcOEDrOo",
        NotePage: "_2r0iBG84H79jitflfzloHL",
        PinnedView: "_3mIftPW9bArr_wJxHwxTnq",
        Toolbar: "A6mhRr1dqvr5OHl9MX6_3",
        NoteActions: "_3uGOyXFBdLEV_F6dICiSwx",
        NoteEditorArea: "_3WOF4kDR1RbjelZgS8Qd-H",
        EditorInput: "_3zWunJFZU6u89fIABN9Gkf",
        NewNoteButton: "_2J6kvK4A5CTbr_o4ZYqycZ",
        CloseWindowButton: "G0FghhaByLIrcEuYSV6qh",
      };
    },
    64452: (e) => {
      e.exports = {
        Hover: "_3tNcTScSfJlcy37nRZQjPq",
        Link: "ovQsFIS2bmQSO6q9lpMcl",
        LinkHelp: "_2Az4l-ByEoCD6T4yVffGuV",
      };
    },
    94950: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        Container: "_3lEt5gxDF4ACrtnP4U7Z-D",
        ToolbarRow: "_2H40REphoCtny5VfHm5Ad9",
        CommandButton: "_1-R1Ud0bImFcswoqa8FbU",
        Toggled: "_41y1pGJEo9TqrhjUqDK2h",
        Gap: "_2BPaPn42NspKTF-dGx6Il1",
        Spacer: "_2Zt31S-3IT7JYy5IswjnFf",
        ExpandButton: "_3454x5BD8OL9OyBzYOvsv8",
      };
    },
    97896: (e) => {
      e.exports = { GameNotesPopup: "_3hIt9g_59KauEV2uSNK6Ct" };
    },
    9603: (e, t, n) => {
      "use strict";
      n.d(t, { X: () => ke });
      var o = n(27378),
        a = n(47228),
        r = n(39459),
        l = n(98571),
        c = n(62923),
        i = n(62914),
        s = n(79509),
        m = n(54979),
        u = n(15463),
        d = n(82789),
        p = n(29860),
        E = n(40650),
        f = n(92926),
        b = n(78138),
        g = n(70732),
        h = n(2286),
        T = n(52824),
        _ = n(81257),
        k = n(29853),
        v = n(86064),
        C = n(64452);
      function N() {
        const [e, t] = o.useState(),
          [n, a] = o.useState(),
          [r, l] = o.useState(),
          c = o.useMemo(
            () =>
              new d.Sy({
                props: {
                  handleDOMEvents: {
                    mouseover: (e, n) => {
                      const o = n.target;
                      if ((0, k.GB)(o) && "A" == o.nodeName) {
                        const e = o.getBoundingClientRect();
                        t(e.left + e.width / 2), a(e.bottom + 2), l(o);
                      } else l(void 0);
                      return !1;
                    },
                    mouseleave: (e, t) => (l(void 0), !1),
                  },
                },
              }),
            [],
          );
        if (((0, f.U$)(c), !r)) return null;
        const i = r.getAttribute("href");
        return o.createElement(
          x,
          { top: n, left: e },
          o.createElement("div", { className: C.Link }, i),
          o.createElement(
            "div",
            { className: C.LinkHelp },
            (0, v.Xx)("#UserGameNotes_ClickToOpenLink"),
          ),
        );
      }
      function x(e) {
        const { top: t, left: n, children: a } = e,
          [r, l] = o.useState(0),
          c = o.useRef();
        o.useLayoutEffect(() => {
          l(c.current.getBoundingClientRect().width);
        }, [t, n, a]);
        const i = { top: `${t}px`, left: `${Math.max(n - r / 2, 12)}px` };
        return o.createElement(
          "div",
          { className: C.Hover, style: i, ref: c },
          a,
        );
      }
      var w = n(16195),
        P = n(35484),
        F = n(50947),
        y = n(82997),
        H = n(85164),
        B = n(94950);
      function S(e) {
        const {
            schemaConfig: t,
            bbcode: n,
            className: a,
            onUpdate: r,
            refView: l,
            onClickURL: c,
            bSpellcheckEnabled: i = !0,
            panelProps: s,
            children: m,
          } = e,
          [k, C] = o.useState(),
          x = o.useRef(),
          w = o.useRef();
        w.current = c || L;
        const S = o.useCallback(
          (e) => {
            if (!e) return void x.current?.destroy();
            const n = x.current;
            n && n.destroy(),
              (x.current = new u.tk(e, {
                state: n?.state ?? d.yy.create({ schema: t.pm_schema }),
                handleClickOn: (...e) =>
                  (function (e, t, n, o, a, r, l, c) {
                    if (c && (l.ctrlKey || 1 == l.button)) {
                      const n = a
                        .resolve(o - r)
                        .marks()
                        .find((t) => t.type == e.marks.link);
                      if (n)
                        return t(n.attrs.href, l.view), l.preventDefault(), !0;
                    }
                    return !1;
                  })(t.pm_schema, w.current, ...e),
                clipboardTextParser: (...e) =>
                  (function (e, t, n, o, a) {
                    let r,
                      l = [];
                    for (; (r = t.match(y.H7)); )
                      r.index > 0 && l.push(e.text(t.substring(0, r.index))),
                        l.push(
                          e.text(r[0], [
                            e.marks.link.create({ href: (0, y.Pm)(r[0]) }),
                          ]),
                        ),
                        (t = t.substring(r.index + r[0].length));
                    t.length && l.push(e.text(t));
                    return new g.p2(g.HY.from(l), n.start(), n.end());
                  })(t.pm_schema, ...e),
              })),
              C(x.current),
              n || x.current.focus();
          },
          [t],
        );
        o.useEffect(() => {
          k && k.updateState((0, p.B)((0, E.B)(n, t), t.pm_schema, k.state));
        }, [t, n, k]),
          (0, F.LY)(l, k);
        const {
            refDiv: D,
            onActivate: X,
            onGamepadDirection: G,
          } = (function (e) {
            const t = (0, H.qt)(),
              n = o.useRef(),
              a = o.useCallback(
                (e) => {
                  (0, _.LP)(e, t.IN_VR);
                },
                [t.IN_VR],
              ),
              r = (0, _.CJ)(
                { onTextEntered: a },
                () => n.current?.ownerDocument.defaultView,
              ),
              l = o.useCallback(() => {
                r.ShowVirtualKeyboard();
                let t = e.current?.hasFocus();
                if (!t) {
                  e.current?.focus();
                  let t = e.current.dom.childNodes;
                  for (let o = 0; o < t.length; ++o) {
                    let a = t[o],
                      r = a.offsetTop;
                    if (void 0 !== r && r >= n.current.scrollTop) {
                      let t = a.getBoundingClientRect();
                      (0, b.VM)(e.current, t.left, t.top);
                      break;
                    }
                  }
                }
              }, [r, e]),
              c = o.useCallback((e) => e.currentTarget == e.target, []),
              i = (0, T.pj)(n, null, null, c);
            return { refDiv: n, onActivate: l, onGamepadDirection: i };
          })(x),
          I = (0, F.BE)(D, S);
        return o.createElement(
          f.xh,
          { view: k },
          o.createElement(h.s, {
            key: `editordiv_${i}`,
            className: (0, P.Z)(a, B.Container),
            ref: I,
            spellCheck: i,
            focusable: !0,
            onActivate: X,
            onOKActionDescription: (0, v.Xx)("#UserGameNotes_Edit"),
            onGamepadDirection: G,
            ...s,
          }),
          o.createElement(f.l8, { onUpdate: r, schema: t.pm_schema }),
          o.createElement(N, null),
          m,
        );
      }
      function L(e, t) {
        (0, w.b8)(t, e);
      }
      var D = n(94256),
        X = n(12041),
        G = n(93868),
        I = n(95579);
      const A = { nodes: { ...G.Pp.nodes }, marks: { ...G.Pp.marks } },
        U = new I.F(A);
      var O = n(47739);
      const R = "/images/image_error.svg";
      function M(e) {
        const { uploadImage: t, nodeType: n, nMaxImageSize: a = Z } = e;
        return (
          (0, f.U$)(
            o.useMemo(
              () =>
                new d.Sy({
                  key: new d.H$(`PMUploadImage_${n.name}`),
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
                              src: R,
                              title: (0, v.Xx)("#UserGameNotes_ImageTooLarge"),
                            }),
                          ];
                          return new g.p2(g.HY.from(t), 0, 0);
                        }
                        return n;
                      })(n, a, ...e),
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
                                  r = (0, O.L4)(await a.arrayBuffer());
                                W(
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
              [t, a, n],
            ),
          ),
          null
        );
      }
      function W(e, t, n) {
        n.state.doc.descendants((o, a) => {
          if ("image" === o.type.name && o.attrs.src === e) {
            const e = n.state.tr.setNodeAttribute(a, "src", t);
            n.dispatch(e);
          }
        });
      }
      const Z = 1048576;
      var V = n(99659),
        z = n(71218),
        K = n(55751),
        q = n(38321),
        $ = n(40885);
      const Y = () => o.useContext(Q);
      function j(e) {
        const { view: t, refUpdateToolbar: n, children: a } = e,
          r = o.useRef();
        r.current || (r.current = new $.pB()),
          o.useEffect(
            () => (
              (0, F.k$)(n, () => r.current.Dispatch(t)),
              () => (0, F.k$)(n, void 0)
            ),
            [t, n],
          );
        const l = o.useMemo(() => ({ callbacks: r.current, view: t }), [t]);
        return t ? o.createElement(Q.Provider, { value: l }, a) : null;
      }
      const Q = o.createContext(void 0);
      function J() {
        return o.createElement("div", { className: B.Gap });
      }
      function ee() {
        return o.createElement("div", { className: B.Spacer });
      }
      function te(e) {
        return o.createElement(
          h.s,
          { className: (0, P.Z)(B.ToolbarRow), "flow-children": "row" },
          e.children,
        );
      }
      function ne(e) {
        const { nodeType: t, title: n, attrs: a, children: r } = e,
          { callbacks: l, view: c } = Y(),
          [i, s] = o.useState(() => (0, b.pp)(c.state, t, a)),
          m = o.useCallback((e) => s((0, b.pp)(e.state, t, a)), [t, a]);
        (0, F.Qg)(l, m);
        const u = o.useMemo(() => q.uJ(t, a), [a, t]);
        return o.createElement(re, {
          command: u,
          title: n,
          toggled: i,
          children: r,
        });
      }
      function oe(e) {
        const { mark: t, title: n, children: a } = e,
          { callbacks: r, view: l } = Y(),
          [c, i] = o.useState(() => (0, b.MW)(l.state, t)),
          s = o.useCallback((e) => i((0, b.MW)(e.state, t)), [t]);
        (0, F.Qg)(r, s);
        const m = o.useMemo(() => q.w9(t), [t]);
        return o.createElement(re, {
          command: m,
          title: n,
          toggled: c,
          children: a,
        });
      }
      function ae(e) {
        const { fnEnabledCheck: t, ...n } = e,
          { callbacks: a, view: r } = Y(),
          [l, c] = o.useState(() => t(r)),
          i = o.useCallback((e) => c(t(e)), [t]);
        return (0, F.Qg)(a, i), o.createElement(re, { ...n, disabled: !l });
      }
      function re(e) {
        const {
            command: t,
            toggled: n,
            title: a,
            disabled: r,
            children: l,
          } = e,
          { view: i } = Y();
        return o.createElement(
          c.zx,
          {
            className: (0, P.Z)(B.CommandButton, n && B.Toggled),
            title: a,
            onMouseDown: (e) => {
              e.preventDefault(), t(i.state, i.dispatch, i);
            },
            disabled: !0 === r,
            focusable: !r,
          },
          l,
        );
      }
      function le(e) {
        const {
          onClick: t,
          toggled: n,
          title: a,
          disabled: r,
          children: l,
        } = e;
        return o.createElement(
          c.zx,
          {
            className: (0, P.Z)(B.CommandButton, n && B.Toggled),
            title: a,
            onMouseDown: (e) => {
              e.preventDefault(), t();
            },
            disabled: !0 === r,
          },
          l,
        );
      }
      function ce(e) {
        const { schema: t, children: n } = e,
          { callbacks: a, view: r } = Y(),
          [l, i] = o.useState(() => (0, b.MW)(r.state, t.marks.link)),
          m = o.useCallback((e) => i((0, b.MW)(e.state, t.marks.link)), [t]);
        (0, F.Qg)(a, m);
        const [u, d, p] = (0, F.X9)();
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            s.Yy,
            { active: u },
            o.createElement(ie, {
              schema: t,
              active: u,
              closeModal: p,
              view: r,
            }),
          ),
          o.createElement(
            c.zx,
            {
              className: (0, P.Z)(B.CommandButton, l && B.Toggled),
              onMouseDown: (e) => {
                e.preventDefault(), d();
              },
              title: (0, v.Xx)("#FormattingToolbar_InsertLink"),
            },
            n,
          ),
        );
      }
      const ie = o.memo(function (e) {
        const { schema: t, active: n, closeModal: a, view: r } = e,
          [l, i] = o.useState(""),
          [m, u] = o.useState(""),
          d = o.useRef(),
          p = o.useRef();
        return (
          o.useLayoutEffect(() => {
            if (n) {
              let e = "";
              r.state.selection.empty ||
                (e = r.state.doc.cut(
                  r.state.selection.from,
                  r.state.selection.to,
                ).textContent),
                i(e),
                e.startsWith("http")
                  ? (u(e),
                    d.current.Focus(),
                    window.setTimeout(() => {
                      d.current.element.select();
                    }, 0))
                  : 0 == e.length
                    ? d.current.Focus()
                    : p.current.Focus();
            }
          }, [n, r]),
          o.createElement(
            s.uH,
            {
              onOK: () => {
                r.dispatch(
                  r.state.tr.replaceRangeWith(
                    r.state.selection.from,
                    r.state.selection.to,
                    t.text(l || m, [t.marks.link.create({ href: m })]),
                  ),
                ),
                  r.focus(),
                  a();
              },
              closeModal: a,
              strTitle: (0, v.Xx)("#FormattingToolbar_InsertLink"),
              strOKButtonText: (0, v.Xx)("#FormattingToolbar_InsertLink"),
              bOKDisabled: 0 == m.length,
            },
            o.createElement(c.II, {
              ref: d,
              value: l,
              onChange: (e) => i(e.currentTarget.value),
              label: (0, v.Xx)("#FormattingToolbar_LinkText"),
            }),
            o.createElement(c.II, {
              ref: p,
              value: m,
              onChange: (e) => u(e.currentTarget.value),
              label: (0, v.Xx)("#FormattingToolbar_LinkAddress"),
            }),
          )
        );
      });
      function se() {
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            D.HP,
            { toolTipContent: "#FormattingToolbar_Undo", direction: "bottom" },
            o.createElement(
              ae,
              {
                title: (0, v.Xx)("#FormattingToolbar_Undo"),
                command: z.Yw,
                fnEnabledCheck: me,
              },
              o.createElement(i.Undo, null),
            ),
          ),
          o.createElement(
            D.HP,
            { toolTipContent: "#FormattingToolbar_Redo", direction: "bottom" },
            o.createElement(
              ae,
              {
                title: (0, v.Xx)("#FormattingToolbar_Redo"),
                command: z.KX,
                fnEnabledCheck: ue,
              },
              o.createElement(i.Redo, null),
            ),
          ),
        );
      }
      function me(e) {
        return z.of(e.state) > 0;
      }
      function ue(e) {
        return z.AH(e.state) > 0;
      }
      function de(e) {
        const { schema: t } = e;
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            D.HP,
            { toolTipContent: "#FormattingToolbar_Bold", direction: "bottom" },
            o.createElement(
              oe,
              {
                title: (0, v.Xx)("#FormattingToolbar_Bold"),
                mark: t.marks.strong,
              },
              o.createElement(i.TextBold, null),
            ),
          ),
          o.createElement(
            D.HP,
            {
              toolTipContent: "#FormattingToolbar_Italic",
              direction: "bottom",
            },
            o.createElement(
              oe,
              {
                title: (0, v.Xx)("#FormattingToolbar_Italic"),
                mark: t.marks.italic,
              },
              o.createElement(i.TextItalic, null),
            ),
          ),
          o.createElement(
            D.HP,
            {
              toolTipContent: "#FormattingToolbar_Underline",
              direction: "bottom",
            },
            o.createElement(
              oe,
              {
                title: (0, v.Xx)("#FormattingToolbar_Underline"),
                mark: t.marks.underline,
              },
              o.createElement(i.TextUnderline, null),
            ),
          ),
          o.createElement(
            D.HP,
            {
              toolTipContent: "#FormattingToolbar_Strike",
              direction: "bottom",
            },
            o.createElement(
              oe,
              {
                title: (0, v.Xx)("#FormattingToolbar_Strike"),
                mark: t.marks.strike,
              },
              o.createElement(i.TextStrikethrough, null),
            ),
          ),
          o.createElement(
            D.HP,
            {
              toolTipContent: "#FormattingToolbar_InlineCode",
              direction: "bottom",
            },
            o.createElement(
              oe,
              {
                title: (0, v.Xx)("#FormattingToolbar_InlineCode"),
                mark: t.marks.code,
              },
              o.createElement(i.TextCode, null),
            ),
          ),
        );
      }
      function pe(e) {
        const { schema: t } = e;
        return o.createElement(
          D.HP,
          {
            toolTipContent: "#FormattingToolbar_Paragraph",
            direction: "bottom",
          },
          o.createElement(
            ne,
            {
              nodeType: t.nodes.paragraph,
              title: (0, v.Xx)("#FormattingToolbar_Paragraph"),
            },
            o.createElement(i.TextParagraph, null),
          ),
        );
      }
      function Ee(e) {
        const { schema: t, levels: n } = e;
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            D.HP,
            {
              toolTipContent: "#FormattingToolbar_HeadingLevel1",
              direction: "bottom",
            },
            o.createElement(
              ne,
              {
                nodeType: t.nodes.heading,
                attrs: { level: 1 },
                title: (0, v.Xx)("#FormattingToolbar_HeadingLevelN", 1),
              },
              o.createElement(i.TextH1, null),
            ),
          ),
          n >= 2 &&
            o.createElement(
              D.HP,
              {
                toolTipContent: "#FormattingToolbar_HeadingLevel2",
                direction: "bottom",
              },
              o.createElement(
                ne,
                {
                  nodeType: t.nodes.heading,
                  attrs: { level: 2 },
                  title: (0, v.Xx)("#FormattingToolbar_HeadingLevelN", 2),
                },
                o.createElement(i.TextH2, null),
              ),
            ),
          n >= 3 &&
            o.createElement(
              D.HP,
              {
                toolTipContent: "#FormattingToolbar_HeadingLevel3",
                direction: "bottom",
              },
              o.createElement(
                ne,
                {
                  nodeType: t.nodes.heading,
                  attrs: { level: 3 },
                  title: (0, v.Xx)("#FormattingToolbar_HeadingLevelN", 3),
                },
                o.createElement(i.TextH3, null),
              ),
            ),
          n >= 4 &&
            o.createElement(
              D.HP,
              {
                toolTipContent: "#FormattingToolbar_HeadingLevel4",
                direction: "bottom",
              },
              o.createElement(
                ne,
                {
                  nodeType: t.nodes.heading,
                  attrs: { level: 4 },
                  title: (0, v.Xx)("#FormattingToolbar_HeadingLevelN", 4),
                },
                o.createElement(i.TextH4, null),
              ),
            ),
          n >= 5 &&
            o.createElement(
              D.HP,
              {
                toolTipContent: "#FormattingToolbar_HeadingLevel5",
                direction: "bottom",
              },
              o.createElement(
                ne,
                {
                  nodeType: t.nodes.heading,
                  attrs: { level: 5 },
                  title: (0, v.Xx)("#FormattingToolbar_HeadingLevelN", 5),
                },
                o.createElement(i.TextH5, null),
              ),
            ),
        );
      }
      function fe(e) {
        const { schema: t } = e;
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            D.HP,
            {
              toolTipContent: "#FormattingToolbar_BulletedList",
              direction: "bottom",
            },
            o.createElement(
              re,
              {
                title: (0, v.Xx)("#FormattingToolbar_BulletedList"),
                command: K.KI(t.nodes.bullet_list),
              },
              o.createElement(i.TextBullets, null),
            ),
          ),
          o.createElement(
            D.HP,
            {
              toolTipContent: "#FormattingToolbar_IndentList",
              direction: "bottom",
            },
            o.createElement(
              re,
              {
                title: (0, v.Xx)("#FormattingToolbar_IndentList"),
                command: K.IB(t.nodes.list_item),
              },
              o.createElement(i.TextIndent, null),
            ),
          ),
          o.createElement(
            D.HP,
            {
              toolTipContent: "#FormattingToolbar_OutdentList",
              direction: "bottom",
            },
            o.createElement(
              re,
              {
                title: (0, v.Xx)("#FormattingToolbar_OutdentList"),
                command: K.bw(t.nodes.list_item),
              },
              o.createElement(i.TextOutdent, null),
            ),
          ),
        );
      }
      function be(e) {
        const { schema: t } = e;
        return o.createElement(
          D.HP,
          {
            toolTipContent: "#FormattingToolbar_InsertLink",
            direction: "bottom",
          },
          o.createElement(ce, { schema: t }, o.createElement(i.TextLink, null)),
        );
      }
      function ge(e) {
        const { bSpellcheckEnabled: t, setSpellcheckEnabled: n } = e;
        return o.createElement(
          D.HP,
          {
            toolTipContent: t
              ? "#FormattingToolbar_DisableSpellcheck"
              : "#FormattingToolbar_EnableSpellcheck",
            direction: "bottom",
          },
          o.createElement(
            le,
            { toggled: t, onClick: () => n(!t) },
            o.createElement(i.SpellCheck, null),
          ),
        );
      }
      var he = n(46048);
      function Te(e) {
        const {
            schema: t,
            view: n,
            refUpdateToolbar: a,
            className: r,
            bSpellcheckEnabled: l,
            setSpellcheckEnabled: s,
          } = e,
          [m, u] = (0, he.i4)("FormattingToolbar_Expanded", !1);
        return o.createElement(
          j,
          { refUpdateToolbar: a, view: n },
          o.createElement(
            "div",
            { className: (0, P.Z)(B.Toolbar, r) },
            o.createElement(
              te,
              null,
              o.createElement(se, null),
              o.createElement(J, null),
              o.createElement(de, { schema: t }),
              o.createElement(ee, null),
              o.createElement(
                D.HP,
                {
                  toolTipContent: "#FormattingToolbar_ExpandOptions",
                  direction: "bottom",
                },
                o.createElement(
                  c.zx,
                  {
                    className: (0, P.Z)(
                      B.CommandButton,
                      B.ExpandButton,
                      m && B.Toggled,
                    ),
                    onClick: () => u(!m),
                  },
                  o.createElement(i.Chevron, null),
                ),
              ),
            ),
            o.createElement(
              V.G,
              { visible: m },
              o.createElement(
                te,
                null,
                o.createElement(pe, { schema: t }),
                o.createElement(Ee, { schema: t, levels: 5 }),
                o.createElement(
                  D.HP,
                  {
                    toolTipContent: "#FormattingToolbar_CodeBlock",
                    direction: "bottom",
                  },
                  o.createElement(
                    ne,
                    {
                      nodeType: t.nodes.code_block,
                      title: (0, v.Xx)("#FormattingToolbar_CodeBlock"),
                    },
                    o.createElement(i.TextCodeBlock, null),
                  ),
                ),
                o.createElement(J, null),
                o.createElement(fe, { schema: t }),
                o.createElement(J, null),
                o.createElement(be, { schema: t }),
                o.createElement(ee, null),
                s &&
                  o.createElement(ge, {
                    bSpellcheckEnabled: l,
                    setSpellcheckEnabled: s,
                  }),
              ),
            ),
          ),
        );
      }
      const _e = 15;
      function ke(e) {
        const { note: t } = e,
          [n, c] = o.useState(!1),
          [i, s] = o.useState(),
          u = o.useRef(),
          d = o.useRef(),
          p = o.useRef(t.content),
          E = o.useRef(!1),
          f = (0, r.NJ)(),
          b = (0, r.ZW)(),
          g = (0, r.Am)(),
          h = (0, a.RE)(t.appid),
          T = (0, H.id)();
        p.current == t.content || E.current || (p.current = t.content);
        const _ = p.current,
          k = (0, a.eD)(),
          C = o.useCallback((e, t) => {
            u.current && u.current(),
              t.doc &&
                t.doc != e.state.doc &&
                (E.current ||
                  ((E.current = !0),
                  l.q.ReportTrackedAction("/GameNotes/NoteModified")),
                (d.current = () => ({
                  title: xe(e.state.doc),
                  bbcode: (0, m.d)(e.state.doc, U),
                })),
                c(!0));
          }, []);
        o.useEffect(() => {
          if (!n) return;
          let e = d.current;
          const o = () => {
              if (e) {
                const { title: n, bbcode: o } = e();
                (t.not_persisted && !o?.length) ||
                  k.mutate({ note: t, title: n, bbcode: o }),
                  c(!1);
              }
              (e = void 0), (d.current = void 0);
            },
            a = window.setTimeout(o, 1e3 * _e);
          return () => {
            window.clearTimeout(a), o();
          };
        }, [k, n, t]);
        const N = (0, r.eE)(),
          x = (0, a.CN)(t, N),
          w = {
            onSecondaryButton: () => x.mutate(),
            onSecondaryActionDescription: (0, v.Xx)(
              "#UserGameNotes_DeleteNote",
            ),
          };
        return o.createElement(
          "div",
          { className: X.NoteEditorArea },
          !T &&
            o.createElement(Te, {
              schema: U.pm_schema,
              view: i,
              refUpdateToolbar: u,
              className: X.Toolbar,
              bSpellcheckEnabled: b,
              setSpellcheckEnabled: g,
            }),
          o.createElement(
            S,
            {
              schemaConfig: U,
              className: X.EditorInput,
              bbcode: _,
              onUpdate: C,
              refView: s,
              onClickURL: f,
              bSpellcheckEnabled: b,
              panelProps: w,
            },
            o.createElement(M, {
              uploadImage: h,
              nodeType: U.pm_schema.nodes.image,
            }),
          ),
          !T && o.createElement(ve, { note: t, bDirty: n }),
        );
      }
      function ve(e) {
        const { note: t, bDirty: n } = e,
          [l, s, m] = (0, F.X9)(!1),
          u = (0, r.j_)(),
          d = (0, r.eE)(),
          p = (0, a.CN)(t, d),
          E = o.useCallback(() => {
            !n && t.not_persisted ? p.mutate() : s();
          }, [n, t, p, s]);
        return o.createElement(
          "div",
          { className: X.NoteActions },
          l && o.createElement(Ne, { note: t, closeModal: m, deleteNote: p }),
          o.createElement(
            D.HP,
            { toolTipContent: "#UserGameNotes_DeleteNote", direction: "top" },
            o.createElement(
              c.zx,
              { onClick: E },
              o.createElement(i.Trash, null),
            ),
          ),
          u && o.createElement(Ce, { bDirty: n }),
        );
      }
      function Ce(e) {
        const { bDirty: t } = e,
          n = (0, r.eE)();
        return t
          ? o.createElement(
              c.KM,
              { onClick: () => n(), className: X.CloseWindowButton },
              (0, v.Xx)("#Button_SaveAndClose"),
            )
          : o.createElement(
              c.zx,
              { onClick: () => n(), className: X.CloseWindowButton },
              (0, v.Xx)("#Button_Close"),
            );
      }
      function Ne(e) {
        const { note: t, closeModal: n, deleteNote: a } = e;
        return o.createElement(
          s.Yy,
          { active: !0 },
          o.createElement(s.uH, {
            strTitle: (0, v.Xx)("#UserGameNotes_DeleteNote"),
            strDescription: (0, v.Xx)("#UserGameNotes_PromptDelete"),
            onOK: () => a.mutate(),
            bOKDisabled: a.isLoading,
            strOKButtonText: (0, v.Xx)("#Button_Delete"),
            closeModal: n,
          }),
        );
      }
      function xe(e) {
        let t = "";
        for (let n = 0; n < e.content.childCount; n++) {
          const o = e.content.child(n);
          if (o.isText) t += o.text;
          else {
            if (((t = t.trim()), t.length > 4)) return t;
            if (((t = xe(o)), t.length > 4)) return t;
          }
        }
        return t.trim();
      }
    },
    9205: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => b });
      var o = n(44611),
        a = n(58428),
        r = n(7996),
        l = n(27378),
        c = n(3620),
        i = n(66101),
        s = n(91971),
        m = n(47228),
        u = n(9603),
        d = n(62923),
        p = n(79509),
        E = n(86064),
        f = n(97896);
      function b(e) {
        const { popup: t } = e,
          [n, a] = l.useState();
        return (
          l.useEffect(() => {
            if (n)
              return o.c.RegisterPopup(t, () =>
                n.SteamClient.Window.BringToFront(),
              );
          }, [t, n]),
          void 0 === t.noteid
            ? l.createElement(T, { popup: t, refPopup: a })
            : l.createElement(g, { popup: t, refPopup: a })
        );
      }
      function g(e) {
        const { popup: t, refPopup: n } = e,
          o = (0, E.Xx)("#GameNotes_NoteForGame", t.display_name);
        return l.createElement(
          i.F,
          { body_class: f.GameNotesPopup },
          l.createElement(
            p.tb,
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
            l.createElement(d.h4, null, o),
            l.createElement(
              a.T,
              { mode: "single", closePopup: () => t.close() },
              l.createElement(h, {
                noteParent: t.noteParent,
                noteid: t.noteid,
              }),
            ),
          ),
        );
      }
      function h(e) {
        const { noteParent: t, noteid: n } = e,
          { data: o } = (0, m._N)(t, n);
        return o ? l.createElement(u.X, { note: o }) : null;
      }
      function T(e) {
        const { popup: t, refPopup: n } = e,
          o = t.noteParent,
          i = l.useMemo(() => [(0, s.q)(o)], [o]);
        return l.createElement(
          p.tb,
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
          l.createElement(
            c.VA,
            { initialEntries: i },
            l.createElement(
              a.T,
              { mode: "page", closePopup: () => t.close() },
              l.createElement(r.default, { noteParent: o }),
            ),
          ),
        );
      }
    },
    7996: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => I });
      var o = n(27378),
        a = n(3620),
        r = n(91971),
        l = n(47228),
        c = n(9603),
        i = n(62923),
        s = n(35484),
        m = n(86064),
        u = n(46048),
        d = n(12041),
        p = n(39459),
        E = n(62914),
        f = n(94256),
        b = n(85164);
      function g() {
        const e = (0, a.$B)(),
          t = (0, l.PC)(
            "appid" in e.params && Number(e.params.appid),
            "shortcut_name" in e.params && e.params.shortcut_name,
          );
        let n = e.params.noteid;
        const r = (0, a.k6)(),
          c = (0, l.ES)(t),
          { data: s, isLoading: m } = (0, l.HB)(t);
        let u;
        s && n && (u = s.find((e) => e.id === n)),
          o.useLayoutEffect(() => {
            !s ||
              (n && s.find((e) => e.id === n)) ||
              (s.length > 0 && s[0].id ? T(r, t, s[0].id) : T(r, t, c()));
          }, [r, t, n, s, c]);
        const p = o.createElement(
          f.HP,
          { toolTipContent: "#UserGameNotes_NewNote", direction: "top" },
          o.createElement(
            i.zx,
            {
              className: d.NewNoteButton,
              onClick: () => {
                const e = c();
                T(r, t, e);
              },
            },
            o.createElement(E.TextNewNote, null),
          ),
        );
        return s
          ? o.createElement(h, {
              noteParent: t,
              notes: s,
              activeNoteID: u?.id,
              actions: p,
            })
          : null;
      }
      function h(e) {
        const { noteParent: t, notes: n, activeNoteID: r, actions: l } = e,
          [E, f] = (0, u.i4)("NotesListCollapsed", !1),
          g = (0, p.V5)(),
          h = (0, b.id)(),
          _ = n.map((e) => ({
            title:
              e.title?.length > 0
                ? e.title
                : (0, m.Xx)("#UserGameNotes_Untitled"),
            identifier: e.id,
            content: o.createElement(c.X, { note: e }),
            pageClassName: d.NotePage,
            hideTitle: !0,
          })),
          k = (0, a.k6)(),
          v = o.useCallback((e) => T(k, t, e), [k, t]);
        return o.createElement(i.TI, {
          title: (0, m.Xx)("#UserGameNotes_NotesList"),
          pages: _,
          className: (0, s.Z)(d.NotesPagedSettings, g && d.PinnedView),
          page: r,
          onPageRequested: v,
          bottomControls: l,
          hideList: E,
          toggleHideList: g || h ? void 0 : () => f(!E),
        });
      }
      function T(e, t, n) {
        let o;
        (o =
          "appid" in t
            ? r.O.AppNotes(t.appid, n)
            : r.O.ShortcutNotes(t.shortcut, n)),
          e.replace(o, e.location.state);
      }
      var _ = n(4289),
        k = n(20879),
        v = n.n(k),
        C = n(56552),
        N = n(20352),
        x = n(42324),
        w = n(34656),
        P = n(72467),
        F = n(63083);
      let y;
      const H = 864e5;
      function B(e) {
        return `appinfo_${e}_${P.De.LANGUAGE}`;
      }
      function S(e) {
        return Boolean(e && Date.now() - e.timeCached < H);
      }
      function L(e) {
        const t = (0, w.bY)(),
          n = (0, w.y$)();
        return (0, C.useQuery)(
          ["appinfo", e],
          async () =>
            (function (e, t) {
              return (
                y ||
                  (y = new (v())(
                    async (n) => {
                      const o = new Map();
                      (await Promise.all(n.map((e) => t.GetObject(B(e)))))
                        .filter(S)
                        .forEach(({ value: e }) => o.set(e.appid, e));
                      const a = n.slice().filter((e) => !o.has(e));
                      if (a.length) {
                        const n = N.gA.Init(x.Fi);
                        n.Body().set_language((0, F.jM)(P.De.LANGUAGE)),
                          n.Body().set_appids(a);
                        const r = await x.AE.GetApps(e, n);
                        if (1 != r.GetEResult()) throw r.GetErrorMessage();
                        r.Body()
                          .toObject()
                          .apps.forEach((e) => {
                            t.StoreObject(B(e.appid), {
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
                y
              );
            })(t, n).load(e),
          { staleTime: H, enabled: !!e },
        ).data;
      }
      var D = n(27258);
      function X() {
        const { data: e, isLoading: t } = (0, l.i5)();
        return t
          ? o.createElement(D.V, { msDelayAppear: 300 })
          : o.createElement(
              "div",
              null,
              o.createElement(
                "h1",
                null,
                (0, m.Xx)("#UserGameNotes_NotesList"),
              ),
              o.createElement(
                "ul",
                null,
                e.map((e) => o.createElement(G, { key: e.appid, game: e })),
              ),
            );
      }
      function G(e) {
        const { game: t } = e,
          n = L(t.appid);
        return o.createElement(
          "li",
          null,
          o.createElement(_.rU, { to: r.O.AppNotes(t.appid) }, n?.name),
        );
      }
      function I(e) {
        return o.createElement(
          a.rs,
          null,
          o.createElement(a.AW, { path: r.O.List() }, o.createElement(X, null)),
          o.createElement(
            a.AW,
            { path: r.O.AppNotes(":appid", ":noteid?") },
            o.createElement(g, null),
          ),
          o.createElement(
            a.AW,
            { path: r.O.ShortcutNotes(":shortcut_name", ":noteid?") },
            o.createElement(g, null),
          ),
          o.createElement(
            a.AW,
            null,
            o.createElement(a.l_, { to: `${(0, r.q)(e.noteParent)}` }),
          ),
        );
      }
    },
  },
]);
//# sourceMappingURL=sourcemaps/gamenotes.js.map
