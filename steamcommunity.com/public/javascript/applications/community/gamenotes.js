/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [1220],
  {
    27491: (e) => {
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
    97009: (e) => {
      e.exports = {
        Hover: "_3MfkIyTHK_txowyd2A_E1Z",
        Link: "_54gkGuAZz-pkR2y82lrA",
        LinkHelp: "_3BTOSI6ZZswnhj45yGrbX8",
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
      };
    },
    26796: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => It });
      var n = r(90626),
        a = r(92757);
      const o = {
        List: () => "/notes/list",
        AppNotes: (e, t) => `/notes/app/${e}/${null != t ? t : ""}`,
        ShortcutNotes: (e, t) => `/notes/shortcut/${e}/${null != t ? t : ""}`,
      };
      var s = r(17083),
        i = r(37674),
        l = r(29385),
        c = r(61739);
      function u(e) {
        return e.trim();
      }
      function m(e) {
        return e.appid ? { appid: e.appid } : { shortcut: e.shortcut_name };
      }
      const d = n.createContext({ mode: "page", store: null });
      function p(e) {
        const {
            mode: t,
            store: r,
            closePopup: a,
            bPinnedView: o,
            onClickURL: s,
            bSpellcheckEnabled: i = !0,
            setSpellcheckEnabled: l,
            children: c,
          } = e,
          u = n.useMemo(
            () => ({
              mode: t,
              store: r,
              closePopup: a,
              bPinnedView: o,
              onClickURL: s,
              bSpellcheckEnabled: i,
              setSpellcheckEnabled: l,
            }),
            [t, r, a, o, s, i, l],
          );
        return n.createElement(d.Provider, { value: u }, c);
      }
      function g() {
        return n.useContext(d).closePopup;
      }
      function h() {
        return n.useContext(d).store;
      }
      var f = r(61859);
      function b(e) {
        return "appid" in e
          ? ["GameNotes", "NotesByAppID", e.appid]
          : ["GameNotes", "NotesForShortcut", u(e.shortcut)];
      }
      function _(e) {
        const t = h();
        return (0, i.I)({
          queryKey: b(e),
          queryFn: async () => (await t.GetGameNotesList(e, !0)) || [],
          enabled: !!e,
        });
      }
      function B(e, t) {
        const r = (0, l.jE)(),
          n = h(),
          a = e.id;
        return (0, c.n)({
          mutationFn: async () =>
            e.not_persisted ? a : await n.DeleteGameNote(m(e), a),
          onSuccess: () => {
            w(r, m(e), (e) => e.filter((e) => e.id != a)), t && t();
          },
        });
      }
      function w(e, t, r) {
        e.getQueryData(b(t)) && e.setQueryData(b(t), r);
      }
      function y(e, t) {
        return n.useMemo(
          () =>
            t
              ? (function (e) {
                  return { shortcut: u(e) };
                })(t)
              : (function (e) {
                  return { appid: e };
                })(e),
          [e, t],
        );
      }
      var v = r(58632),
        M = r.n(v),
        E = r(56545),
        k = r(37403),
        S = r(23809),
        C = r(30470),
        N = r(22837);
      let T;
      const A = 864e5;
      function R(e) {
        return `appinfo_${e}_${C.TS.LANGUAGE}`;
      }
      function z(e) {
        return Boolean(e && Date.now() - e.timeCached < A);
      }
      function O(e) {
        const t = (0, S.KV)(),
          r = (0, S.rX)();
        return (0, i.I)({
          queryKey: ["appinfo", e],
          queryFn: async () =>
            (function (e, t) {
              return (
                T ||
                  (T = new (M())(
                    async (r) => {
                      const n = new Map();
                      (await Promise.all(r.map((e) => t.GetObject(R(e)))))
                        .filter(z)
                        .forEach(({ value: e }) => n.set(e.appid, e));
                      const a = r.slice().filter((e) => !n.has(e));
                      if (a.length) {
                        const r = E.w.Init(k._z);
                        r.Body().set_language((0, N.sf)(C.TS.LANGUAGE)),
                          r.Body().set_appids(a);
                        const o = await k.BE.GetApps(e, r);
                        if (1 != o.GetEResult()) throw o.GetErrorMessage();
                        o.Body()
                          .toObject()
                          .apps.forEach((e) => {
                            t.StoreObject(R(e.appid), {
                              timeCached: Date.now(),
                              value: e,
                            }),
                              n.set(e.appid, e);
                          });
                      }
                      return r.map((e) => n.get(e));
                    },
                    { cache: !1 },
                  )),
                T
              );
            })(t, r).load(e),
          staleTime: A,
          enabled: !!e,
        }).data;
      }
      var U = r(22797);
      function G() {
        const { data: e, isLoading: t } = (function () {
          const e = h();
          return (0, i.I)({
            queryKey: ["GameNotes", "GamesWithNotes"],
            queryFn: () => e.GetGamesWithNotes(),
          });
        })();
        return t
          ? n.createElement(U.t, { msDelayAppear: 300 })
          : n.createElement(
              "div",
              null,
              n.createElement(
                "h1",
                null,
                (0, f.we)("#UserGameNotes_NotesList"),
              ),
              n.createElement(
                "ul",
                null,
                e.map((e) => n.createElement(F, { key: e.appid, game: e })),
              ),
            );
      }
      function F(e) {
        const { game: t } = e,
          r = O(t.appid);
        return n.createElement(
          "li",
          null,
          n.createElement(
            s.N_,
            { to: o.AppNotes(t.appid) },
            null == r ? void 0 : r.name,
          ),
        );
      }
      var D = r(61788),
        I = r(7068),
        W = r(4869),
        j = r(21273),
        x = r(49693),
        q = r(81393);
      function L(e, t) {
        return P(t.pm_schema, t.pm_to_bbcode_config, e);
      }
      function P(e, t, r) {
        let n = r.marks,
          a = "";
        const o = t.mapNodes.get(r.type),
          { tag: s, args: i } = V(o, r.attrs);
        return (
          s && (a += (0, x.CS)(s, i)),
          r.content.forEach((r) => {
            ([a, n] = $(t, n, r.marks, a)),
              ([a, n] = (function (e, t, r, n) {
                let a;
                for (const o of r)
                  if (-1 === t.indexOf(o)) {
                    a || (a = t.slice());
                    const r = e.mapMarks.get(o.type);
                    if (((0, q.w)(r, "mark missing bbtag"), r)) {
                      a.push(o);
                      const { args: e, tag: t } = V(r, o.attrs);
                      n += (0, x.CS)(t, e || {});
                    }
                  }
                return [n, null != a ? a : t];
              })(t, n, r.marks, a)),
              r.type.isText
                ? (a += (0, x.vE)(r.text || ""))
                : r.type == e.nodes.hard_break
                  ? (a += "\n")
                  : (a += P(e, t, r));
          }),
          ([a] = $(t, n, [], a)),
          s && (a += (0, x.op)(s)),
          a
        );
      }
      function $(e, t, r, n) {
        const a = [];
        for (const e of t) -1 === r.indexOf(e) && a.push(e);
        if (!a.length) return [n, t];
        const o = t.slice();
        for (
          ;
          a.length && ((0, q.w)(o.length, "no marks left to close"), o.length);

        ) {
          const t = o.pop(),
            r = e.mapMarks.get(t.type),
            { tag: s } = V(r, t.attrs);
          n += (0, x.op)(s);
          const i = a.indexOf(t);
          -1 != i && a.splice(i, 1);
        }
        return [n, o];
      }
      function V(e, t) {
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
      var K = r(29287),
        H = r(52893),
        Z = r(98724);
      var J = r(57053);
      class X {
        constructor(e) {
          (this.m_nodes = []), (this.m_schema = e);
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
      function Y(e) {
        return e
          .filter((e) => e.isText)
          .map((e) => e.text)
          .join();
      }
      class Q extends x.Al {
        constructor(e, t) {
          super(e, () => new X(t)), (this.m_schema = t);
        }
        ParseBBCode(e) {
          const t = this.Parse(e, this.BBNodeToPMNode.bind(this), !0);
          return this.m_schema.topNodeType.createChecked(
            {},
            (function (e, t) {
              const r = [];
              let n = [];
              for (const a of t) {
                const t = a.type == e.nodes.hard_break;
                t || e.topNodeType.validContent(J.FK.from(a))
                  ? n.length
                    ? (r.push(e.nodes.paragraph.createChecked({}, n)),
                      (n = []),
                      t || r.push(a))
                    : t
                      ? r.push(e.nodes.paragraph.createChecked())
                      : r.push(a)
                  : n.push(a);
              }
              (!n.length && r.length) ||
                r.push(e.nodes.paragraph.createChecked({}, n));
              return r;
            })(this.m_schema, t),
          );
        }
        BBNodeToPMNode(e, t, ...r) {
          let n = e.BBArgsToAttrs ? e.BBArgsToAttrs(t.args || {}) : void 0;
          try {
            if (
              (!("convertContentToAttr" in e) ||
                !e.convertContentToAttr ||
                (n && n[e.convertContentToAttr]) ||
                ((n = { ...(n || {}), [e.convertContentToAttr]: Y(r) }),
                "node" in e && (r = [])),
              "node" in e)
            ) {
              let t = J.FK.from(r);
              if (!e.node.validContent(t) && e.acceptNode) {
                let n = r.filter((t) => t.type == e.acceptNode);
                if (!n.length) {
                  let t = r;
                  e.acceptNode.isBlock &&
                    t.length > 1 &&
                    t[t.length - 1].type == this.m_schema.nodes.hard_break &&
                    (t = t.slice(0, -1)),
                    (n = [e.acceptNode.create(void 0, t)]);
                }
                t = J.FK.from(n);
              }
              return e.node.createAndFill(n, t) || e.node.create(n, t);
            }
            return r.map((t) => t.mark([...t.marks, e.mark.create(n)]));
          } catch (e) {
            return (
              console.error(`Error parsing [${t.tagname}] tag: ${e}`, e), []
            );
          }
        }
      }
      var ee = r(12362),
        te = r(7502),
        re = r(79216),
        ne = r(4188);
      function ae(e, t) {
        const { from: r, $from: n, to: a, empty: o } = e.selection;
        return o
          ? !!t.isInSet(e.storedMarks || n.marks())
          : e.doc.rangeHasMark(r, a, t);
      }
      function oe(e, t, r) {
        let { $from: n, to: a, node: o } = e.selection;
        return !o && a <= n.end() && (o = n.parent), !!o && o.hasMarkup(t, r);
      }
      function se(e, t, r = {}) {
        return new re.fV(e, (e, n, a, o) => {
          const s = r instanceof Function ? r(n) : r,
            i = e.tr;
          if (n[1]) {
            const e = a + n[0].indexOf(n[1]),
              t = e + n[1].length;
            t < o && i.delete(t, o),
              e > a && i.delete(a, e),
              (o = a + n[1].length);
          }
          return i.addMark(a, o, t.create(s)), i.removeStoredMark(t), i;
        });
      }
      function ie(e, t, r) {
        const n = { left: t, top: r },
          a = e.posAtCoords(n);
        if (null == a ? void 0 : a.pos) {
          const t = e.state.doc.resolve(a.pos);
          e.dispatch(e.state.tr.setSelection(H.U3.near(t)));
        }
      }
      const le = n.createContext(null);
      function ce(e) {
        return n.createElement(le.Provider, { value: e.view }, e.children);
      }
      function ue(e) {
        const { schema: t, onUpdate: r } = e,
          a = n.useRef(r);
        return (
          (a.current = r),
          me(
            n.useMemo(
              () =>
                new H.k_({
                  view: (e) => ({ update: (...e) => a.current(...e) }),
                }),
              [],
            ),
          ),
          me(
            n.useMemo(
              () =>
                (function (e) {
                  const t = (0, ee.st)(
                    ee.I$,
                    (t, r) => (
                      r &&
                        r(
                          t.tr
                            .replaceSelectionWith(
                              e.nodes.hard_break.createChecked(),
                            )
                            .scrollIntoView(),
                        ),
                      !0
                    ),
                  );
                  return (0, te.w)({
                    "Mod-z": Z.tN,
                    "Mod-y": Z.ZS,
                    Backspace: re.dv,
                    "Mod-Enter": t,
                    "Shift-Enter": t,
                    "Mod-b": (0, ee.wh)(e.marks.strong),
                    "Mod-i": (0, ee.wh)(e.marks.italic),
                    Enter: (0, ne.wn)(e.nodes.list_item),
                    "Mod-[": (0, ne.T2)(e.nodes.list_item),
                    "Mod-]": (0, ne.$B)(e.nodes.list_item),
                    "Shift-Ctrl-1": (0, ee.y_)(e.nodes.heading, { level: 1 }),
                    "Shift-Ctrl-2": (0, ee.y_)(e.nodes.heading, { level: 2 }),
                    "Shift-Ctrl-3": (0, ee.y_)(e.nodes.heading, { level: 3 }),
                    "Shift-Ctrl-0": (0, ee.y_)(e.nodes.paragraph),
                  });
                })(t),
              [t],
            ),
          ),
          me(n.useMemo(() => (0, te.w)(ee.RV), [])),
          me(
            n.useMemo(
              () =>
                (function (e) {
                  return (0, re.sM)({
                    rules: [
                      (0, re.tG)(
                        /^(\d+)\.\s$/,
                        e.nodes.ordered_list,
                        (e) => ({ order: parseInt(e[1]) }),
                        (e, t) =>
                          t.childCount + t.attrs.order == parseInt(e[1]),
                      ),
                      (0, re.tG)(/^\s*([-+*])\s$/, e.nodes.bullet_list),
                      se(/\*([^*]+)\*/, e.marks.strong),
                      se(/_([^_]+)_/, e.marks.italic),
                      se(/~([^~]+)~/, e.marks.strike),
                      se(/`([^`]+)`/, e.marks.code),
                      (0, re.JJ)(/^```$/, e.nodes.code_block),
                      (0, re.JJ)(/^(#{1,5})\s$/, e.nodes.heading, (e) => ({
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
      function me(e) {
        const t = n.useContext(le);
        n.useEffect(() => {
          if (t && e && !t.isDestroyed)
            return (
              (function (e, t) {
                const r = e.state;
                if (!e.state.plugins.includes(t)) {
                  const n = [...e.state.plugins, t];
                  e.updateState(r.reconfigure({ plugins: n }));
                }
              })(t, e),
              () =>
                (function (e, t) {
                  if (!e.isDestroyed) {
                    const r = e.state,
                      n = r.plugins.filter((e) => e !== t);
                    e.updateState(r.reconfigure({ plugins: n }));
                  }
                })(t, e)
            );
        }, [t, e]);
      }
      var de = r(32381),
        pe = r(44078),
        ge = r(61712),
        he = r(56011),
        fe = r(97009);
      function be() {
        const [e, t] = n.useState(),
          [r, a] = n.useState(),
          [o, s] = n.useState();
        if (
          (me(
            n.useMemo(
              () =>
                new H.k_({
                  props: {
                    handleDOMEvents: {
                      mouseover: (e, r) => {
                        const n = r.target;
                        if ((0, he.kD)(n) && "A" == n.nodeName) {
                          const e = n.getBoundingClientRect();
                          t(e.left + e.width / 2), a(e.bottom + 2), s(n);
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
          !o)
        )
          return null;
        const i = o.getAttribute("href");
        return n.createElement(
          _e,
          { top: r, left: e },
          n.createElement("div", { className: fe.Link }, i),
          n.createElement(
            "div",
            { className: fe.LinkHelp },
            (0, f.we)("#UserGameNotes_ClickToOpenLink"),
          ),
        );
      }
      function _e(e) {
        const { top: t, left: r, children: a } = e,
          [o, s] = n.useState(0),
          i = n.useRef();
        n.useLayoutEffect(() => {
          s(i.current.getBoundingClientRect().width);
        }, [t, r, a]);
        const l = { top: `${t}px`, left: `${Math.max(r - o / 2, 12)}px` };
        return n.createElement(
          "div",
          { className: fe.Hover, style: l, ref: i },
          a,
        );
      }
      var Be = r(51272),
        we = r(52038),
        ye = r(56093),
        ve = r(61336),
        Me = r(78327),
        Ee = r(73309);
      function ke(e) {
        const {
            schemaConfig: t,
            bbcode: r,
            className: a,
            onUpdate: o,
            refView: s,
            onClickURL: i,
            bSpellcheckEnabled: l = !0,
            panelProps: c,
            children: u,
            dataKey: m,
          } = e,
          [d, p] = n.useState(),
          g = n.useRef(),
          h = n.useRef();
        h.current = i || Se;
        const b = n.useCallback(
          (e) => {
            var r, n;
            if (!e)
              return void (
                null === (r = g.current) ||
                void 0 === r ||
                r.destroy()
              );
            const a = g.current;
            a && a.destroy(),
              (g.current = new K.Lz(e, {
                state:
                  null !== (n = null == a ? void 0 : a.state) && void 0 !== n
                    ? n
                    : H.$t.create({ schema: t.pm_schema }),
                handleClickOn: (...e) =>
                  (function (e, t, r, n, a, o, s, i) {
                    if (i && (s.ctrlKey || 1 == s.button)) {
                      const r = a
                        .resolve(n - o)
                        .marks()
                        .find((t) => t.type == e.marks.link);
                      if (r)
                        return t(r.attrs.href, s.view), s.preventDefault(), !0;
                    }
                    return !1;
                  })(t.pm_schema, h.current, ...e),
                clipboardTextParser: (...e) =>
                  (function (e, t, r, n, a) {
                    let o,
                      s = [];
                    for (; (o = t.match(ve.O9)); )
                      o.index > 0 && s.push(e.text(t.substring(0, o.index))),
                        s.push(
                          e.text(o[0], [
                            e.marks.link.create({ href: (0, ve.jT)(o[0]) }),
                          ]),
                        ),
                        (t = t.substring(o.index + o[0].length));
                    t.length && s.push(e.text(t));
                    return new J.Ji(J.FK.from(s), r.start(), r.end());
                  })(t.pm_schema, ...e),
              })),
              p(g.current);
          },
          [t],
        );
        n.useEffect(() => {
          d &&
            d.updateState(
              (function (e, t, r) {
                var n;
                const a = (0, Z.b6)(),
                  o =
                    null === (n = a.spec.key) || void 0 === n
                      ? void 0
                      : n.get(r),
                  s = [...r.plugins.filter((e) => e != o), a];
                return H.$t.create({ schema: t, doc: e, plugins: s });
              })(
                (function (e, t) {
                  return new Q(t.bbcode_dictionary, t.pm_schema).ParseBBCode(e);
                })(r, t),
                t.pm_schema,
                d.state,
              ),
            );
        }, [t, r, d, m]),
          (0, ye.D5)(s, d);
        const {
            refDiv: _,
            onActivate: B,
            onGamepadDirection: w,
          } = (function (e) {
            const t = (0, Me.rP)(),
              r = n.useRef(),
              a = n.useCallback(
                (e) => {
                  (0, ge.iv)(e, t.IN_VR);
                },
                [t.IN_VR],
              ),
              o = (0, ge.FN)({ onTextEntered: a }, () => {
                var e;
                return null === (e = r.current) || void 0 === e
                  ? void 0
                  : e.ownerDocument.defaultView;
              }),
              s = n.useCallback(() => {
                var t, n;
                if (
                  (o.ShowVirtualKeyboard(),
                  !(null === (t = e.current) || void 0 === t
                    ? void 0
                    : t.hasFocus()))
                ) {
                  null === (n = e.current) || void 0 === n || n.focus();
                  let t = e.current.dom.childNodes;
                  for (let n = 0; n < t.length; ++n) {
                    let a = t[n],
                      o = a.offsetTop;
                    if (void 0 !== o && o >= r.current.scrollTop) {
                      let t = a.getBoundingClientRect();
                      ie(e.current, t.left, t.top);
                      break;
                    }
                  }
                }
              }, [o, e]),
              i = n.useCallback((e) => e.currentTarget == e.target, []),
              l = (0, pe.ak)(r, null, null, i);
            return { refDiv: r, onActivate: s, onGamepadDirection: l };
          })(g),
          y = (0, ye.Ue)(_, b);
        return n.createElement(
          ce,
          { view: d },
          n.createElement(de.Z, {
            key: `editordiv_${l}`,
            className: (0, we.A)(a, Ee.Container),
            ref: y,
            spellCheck: l,
            focusable: !0,
            onActivate: B,
            onOKActionDescription: (0, f.we)("#UserGameNotes_Edit"),
            onGamepadDirection: w,
            ...c,
          }),
          n.createElement(ue, { onUpdate: o, schema: t.pm_schema }),
          n.createElement(be, null),
          u,
        );
      }
      function Se(e, t) {
        (0, Be.EP)(t, e);
      }
      var Ce = r(32754),
        Ne = r(27491),
        Te = r(33645),
        Ae = r.n(Te);
      function Re(e, t, r = 0) {
        return () => [e, { class: t }, r];
      }
      const ze = {
          paragraph: {
            content: "inline*",
            group: "block",
            parseDOM: [{ tag: "p" }],
            toDOM: Re("p", (0, we.A)("pm_paragraph", Ae().Paragraph)),
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
                  `BB_Header${e.attrs.level} ` + Ae()[`Header${e.attrs.level}`],
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
              const { src: t, alt: r, title: n } = e.attrs;
              return ["img", { src: t, alt: r, title: n, class: Ae().Image }];
            },
            bbCode: {
              tag: "img",
              BBArgsToAttrs: (e) => ({ src: e.src }),
              AttrsToBBArgs: (e) => ({ args: { src: e.src } }),
              convertContentToAttr: "src",
            },
          },
          bullet_list: {
            ...ne.fF,
            content: "list_item+",
            group: "block",
            toDOM: Re("ul", Ae().List),
            bbCode: { tag: "list" },
          },
          ordered_list: {
            ...ne.o8,
            content: "list_item+",
            group: "block",
            toDOM: Re("ol", Ae().OrderedList),
            bbCode: { tag: "olist" },
          },
          list_item: {
            ...ne.Aw,
            content: "paragraph block*",
            toDOM: Re("li", Ae().ListItem),
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
              { class: Ae().CodeBlock },
              ["code", { class: Ae().Code }, 0],
            ],
            bbCode: { tag: "code" },
          },
        },
        Oe = {
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
            toDOM: Re("b", (0, we.A)("BB_Bold", Ae().Bold)),
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
            toDOM: Re("i", (0, we.A)("BB_Italic", Ae().Italic)),
            bbCode: { tag: "i" },
          },
          underline: {
            parseDOM: [{ tag: "u" }, { style: "text-decoration=underline" }],
            toDOM: Re("u", (0, we.A)("BB_Underline", Ae().Underline)),
            bbCode: { tag: "u" },
          },
          strike: {
            parseDOM: [{ style: "text-decoration=line-through" }],
            toDOM: Re("span", (0, we.A)("BB_Strike", Ae().Strike)),
            bbCode: { tag: "strike" },
          },
          code: {
            parseDOM: [{ tag: "code" }],
            toDOM: Re("code", (0, we.A)("BB_Code", Ae().Code)),
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
              return ["a", { href: t, title: r }, 0];
            },
            bbCode: {
              tag: "url",
              BBArgsToAttrs: (e) => ({ href: e[""] }),
              AttrsToBBArgs: (e) => ({ args: { "": e.href } }),
              convertContentToAttr: "href",
            },
          },
        };
      const Ue = { nodes: { ...ze }, marks: { ...Oe } },
        Ge = new (class {
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
            (this.m_mapBBCodeDictionary = new Map()),
              (this.m_PMToBBCodeConfig = {
                mapNodes: new Map(),
                mapMarks: new Map(),
              });
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
              const { bbCode: a, ...o } = e.nodes[n];
              (t[n] = o), r.set(n, a);
            }
            const a = {};
            for (const t in e.marks) {
              const { bbCode: r, ...o } = e.marks[t];
              (a[t] = o), n.set(t, r);
            }
            (this.m_ProseMirrorSchema = new J.Sj({ nodes: t, marks: a })),
              r.forEach((t, r) => {
                var n;
                const a = this.m_ProseMirrorSchema.nodes[r],
                  o = e.nodes[r],
                  s = Array.isArray(t) ? t : [t];
                let i;
                "list_item+" == o.content
                  ? (i = this.m_ProseMirrorSchema.nodes.list_item)
                  : -1 !=
                      (null === (n = o.content) || void 0 === n
                        ? void 0
                        : n.indexOf("paragraph")) &&
                    (i = this.m_ProseMirrorSchema.nodes.paragraph),
                  s.forEach(
                    ({
                      tag: e,
                      BBArgsToAttrs: t,
                      AttrsToBBArgs: r,
                      convertContentToAttr: n,
                      ...o
                    }) => {
                      this.m_mapBBCodeDictionary.set(e, {
                        Constructor: {
                          node: a,
                          BBArgsToAttrs: t,
                          convertContentToAttr: n,
                          acceptNode: i,
                        },
                        skipFollowingNewline: !0,
                        ...o,
                      });
                    },
                  );
                const { tag: l, AttrsToBBArgs: c } = s[0];
                this.m_PMToBBCodeConfig.mapNodes.set(a, {
                  tag: l,
                  AttrsToBBArgs: c,
                });
              }),
              n.forEach((e, t) => {
                const r = this.m_ProseMirrorSchema.marks[t],
                  {
                    tag: n,
                    BBArgsToAttrs: a,
                    AttrsToBBArgs: o,
                    convertContentToAttr: s,
                    ...i
                  } = e;
                this.m_mapBBCodeDictionary.set(n, {
                  Constructor: {
                    mark: r,
                    BBArgsToAttrs: a,
                    convertContentToAttr: s,
                  },
                  ...i,
                }),
                  this.m_PMToBBCodeConfig.mapMarks.set(r, {
                    tag: n,
                    AttrsToBBArgs: o,
                  });
              });
          }
        })(Ue);
      var Fe = r(67660);
      const De =
        r.p +
        "images/applications/community/image_error.svg?v=valveisgoodatcaching";
      function Ie(e) {
        const { uploadImage: t, nodeType: r, nMaxImageSize: a = je } = e;
        return (
          me(
            n.useMemo(
              () =>
                new H.k_({
                  key: new H.hs(`PMUploadImage_${r.name}`),
                  props: {
                    transformPasted: (...e) =>
                      (function (e, t, r, n) {
                        let a = !1;
                        if (
                          (r.content.descendants((r, n) => {
                            r.type == e && r.attrs.src.length > t && (a = !0);
                          }),
                          a)
                        ) {
                          let t = [
                            e.create({
                              src: De,
                              title: (0, f.we)("#UserGameNotes_ImageTooLarge"),
                            }),
                          ];
                          return new J.Ji(J.FK.from(t), 0, 0);
                        }
                        return r;
                      })(r, a, ...e),
                    handlePaste: (e, n, a) => {
                      const o = [];
                      a.content.descendants((e) => {
                        e.type == r &&
                          e.attrs.src.startsWith("data:image") &&
                          o.push(e.attrs.src);
                      }),
                        o.length > 0 &&
                          setTimeout(() => {
                            !(async function (e, t, r) {
                              for (const n of e) {
                                const e = await fetch(n),
                                  a = await e.blob(),
                                  o = (0, Fe.wI)(await a.arrayBuffer());
                                We(
                                  n,
                                  await r(e.headers.get("Content-Type"), o),
                                  t,
                                );
                              }
                            })(o, e, t);
                          }, 100);
                    },
                  },
                }),
              [t, a, r],
            ),
          ),
          null
        );
      }
      function We(e, t, r) {
        r.state.doc.descendants((n, a) => {
          if ("image" === n.type.name && n.attrs.src === e) {
            const e = r.state.tr.setNodeAttribute(a, "src", t);
            r.dispatch(e);
          }
        });
      }
      const je = 1048576;
      var xe = r(72739);
      function qe(e) {
        const {
            visible: t = !0,
            className: r,
            keepMounted: a = !1,
            expandDirection: o = "height",
            msAnimationDuration: s = 250,
            children: i,
          } = e,
          {
            style: l,
            active: c,
            refDiv: u,
          } = (function (e, t = "height", r = 250) {
            const a = n.useRef(),
              o = n.useRef(!0),
              [s, i] = n.useState("idle"),
              [l, c] = n.useState({});
            n.useLayoutEffect(() => {
              o.current ? (o.current = !1) : i("start");
            }, [e]),
              n.useLayoutEffect(() => {
                const r = a.current,
                  n = "height" == t ? "scrollHeight" : "scrollWidth";
                if ("start" == s) {
                  const a = r[n];
                  c((r) => ({
                    [t]: e ? "0px" : `${a}px`,
                    ...r,
                    overflow: "hidden",
                  })),
                    i("active");
                } else if ("active" == s) {
                  r.scrollTop;
                  const a = r[n];
                  c({ overflow: "hidden", [t]: e ? `${a}px` : "0px" });
                  const o = () => {
                    xe.unstable_batchedUpdates(() => {
                      c({}), i("idle");
                    });
                  };
                  return (
                    r.addEventListener("transitionend", o),
                    () => {
                      r.removeEventListener("transitionend", o);
                    }
                  );
                }
              }, [s, e]);
            const u = { ...l, transition: `${t} ${r}ms` };
            return { style: u, active: "idle" != s, refDiv: a };
          })(t, o, s);
        return t || c || a
          ? n.createElement("div", { className: r, ref: u, style: l }, i)
          : null;
      }
      var Le = r(51240);
      const Pe = () => n.useContext(Ve);
      function $e(e) {
        const { view: t, refUpdateToolbar: r, children: a } = e,
          o = n.useRef();
        o.current || (o.current = new Le.lu()),
          n.useEffect(
            () => (
              (0, ye.cZ)(r, () => o.current.Dispatch(t)),
              () => (0, ye.cZ)(r, void 0)
            ),
            [t, r],
          );
        const s = n.useMemo(() => ({ callbacks: o.current, view: t }), [t]);
        return t ? n.createElement(Ve.Provider, { value: s }, a) : null;
      }
      const Ve = n.createContext(void 0);
      function Ke() {
        return n.createElement("div", { className: Ee.Gap });
      }
      function He() {
        return n.createElement("div", { className: Ee.Spacer });
      }
      function Ze(e) {
        return n.createElement(
          de.Z,
          { className: (0, we.A)(Ee.ToolbarRow), "flow-children": "row" },
          e.children,
        );
      }
      function Je(e) {
        const { nodeType: t, tooltip: r, attrs: a, children: o } = e,
          { callbacks: s, view: i } = Pe(),
          [l, c] = n.useState(() => oe(i.state, t, a)),
          u = n.useCallback((e) => c(oe(e.state, t, a)), [t, a]);
        (0, ye.hL)(s, u);
        const m = n.useMemo(() => ee.y_(t, a), [a, t]);
        return n.createElement(Qe, {
          command: m,
          tooltip: r,
          toggled: l,
          children: o,
        });
      }
      function Xe(e) {
        const { mark: t, tooltip: r, children: a } = e,
          { callbacks: o, view: s } = Pe(),
          [i, l] = n.useState(() => ae(s.state, t)),
          c = n.useCallback((e) => l(ae(e.state, t)), [t]);
        (0, ye.hL)(o, c);
        const u = n.useMemo(() => ee.wh(t), [t]);
        return n.createElement(Qe, {
          command: u,
          tooltip: r,
          toggled: i,
          children: a,
        });
      }
      function Ye(e) {
        const { fnEnabledCheck: t, ...r } = e,
          { callbacks: a, view: o } = Pe(),
          [s, i] = n.useState(() => t(o)),
          l = n.useCallback((e) => i(t(e)), [t]);
        return (0, ye.hL)(a, l), n.createElement(Qe, { ...r, disabled: !s });
      }
      function Qe(e) {
        const {
            command: t,
            toggled: r,
            tooltip: a,
            disabled: o,
            children: s,
          } = e,
          { view: i } = Pe();
        return n.createElement(
          Ce.Gq,
          { toolTipContent: a, bDisabled: !a, direction: "bottom" },
          n.createElement(
            I.$n,
            {
              className: (0, we.A)(Ee.CommandButton, r && Ee.Toggled),
              onMouseDown: (e) => {
                e.preventDefault(), t(i.state, i.dispatch, i);
              },
              disabled: !0 === o,
              focusable: !o,
            },
            s,
          ),
        );
      }
      function et(e) {
        const {
          onClick: t,
          toggled: r,
          tooltip: a,
          disabled: o,
          children: s,
        } = e;
        return n.createElement(
          Ce.Gq,
          { toolTipContent: a, bDisabled: !a, direction: "bottom" },
          n.createElement(
            I.$n,
            {
              className: (0, we.A)(Ee.CommandButton, r && Ee.Toggled),
              onMouseDown: (e) => {
                e.preventDefault(), t();
              },
              disabled: !0 === o,
            },
            s,
          ),
        );
      }
      function tt(e) {
        const { schema: t, children: r } = e,
          { callbacks: a, view: o } = Pe(),
          [s, i] = n.useState(() => ae(o.state, t.marks.link)),
          l = n.useCallback((e) => i(ae(e.state, t.marks.link)), [t]);
        (0, ye.hL)(a, l);
        const [c, u, m] = (0, ye.uD)();
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(
            j.EN,
            { active: c },
            n.createElement(rt, {
              schema: t,
              active: c,
              closeModal: m,
              view: o,
            }),
          ),
          n.createElement(
            Ce.Gq,
            {
              toolTipContent: "#FormattingToolbar_InsertLink",
              direction: "bottom",
            },
            n.createElement(
              I.$n,
              {
                className: (0, we.A)(Ee.CommandButton, s && Ee.Toggled),
                onMouseDown: (e) => {
                  e.preventDefault(), u();
                },
                title: (0, f.we)("#FormattingToolbar_InsertLink"),
              },
              r,
            ),
          ),
        );
      }
      const rt = n.memo(function (e) {
        const { schema: t, active: r, closeModal: a, view: o } = e,
          [s, i] = n.useState(""),
          [l, c] = n.useState(""),
          u = n.useRef(),
          m = n.useRef();
        return (
          n.useLayoutEffect(() => {
            if (r) {
              let e = "";
              o.state.selection.empty ||
                (e = o.state.doc.cut(
                  o.state.selection.from,
                  o.state.selection.to,
                ).textContent),
                i(e),
                e.startsWith("http")
                  ? (c(e),
                    u.current.Focus(),
                    window.setTimeout(() => {
                      u.current.element.select();
                    }, 0))
                  : 0 == e.length
                    ? u.current.Focus()
                    : m.current.Focus();
            }
          }, [r, o]),
          n.createElement(
            j.o0,
            {
              onOK: () => {
                o.dispatch(
                  o.state.tr.replaceRangeWith(
                    o.state.selection.from,
                    o.state.selection.to,
                    t.text(s || l, [t.marks.link.create({ href: l })]),
                  ),
                ),
                  o.focus(),
                  a();
              },
              closeModal: a,
              strTitle: (0, f.we)("#FormattingToolbar_InsertLink"),
              strOKButtonText: (0, f.we)("#FormattingToolbar_InsertLink"),
              bOKDisabled: 0 == l.length,
            },
            n.createElement(I.pd, {
              ref: u,
              value: s,
              onChange: (e) => i(e.currentTarget.value),
              label: (0, f.we)("#FormattingToolbar_LinkText"),
            }),
            n.createElement(I.pd, {
              ref: m,
              value: l,
              onChange: (e) => c(e.currentTarget.value),
              label: (0, f.we)("#FormattingToolbar_LinkAddress"),
            }),
          )
        );
      });
      function nt() {
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(
            Ye,
            {
              tooltip: "#FormattingToolbar_Undo",
              command: Z.tN,
              fnEnabledCheck: at,
            },
            n.createElement(W.VnB, null),
          ),
          n.createElement(
            Ye,
            {
              tooltip: "#FormattingToolbar_Redo",
              command: Z.ZS,
              fnEnabledCheck: ot,
            },
            n.createElement(W.Bal, null),
          ),
        );
      }
      function at(e) {
        return Z.mk(e.state) > 0;
      }
      function ot(e) {
        return Z.mL(e.state) > 0;
      }
      function st(e) {
        const { schema: t } = e;
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(
            Xe,
            { tooltip: "#FormattingToolbar_Bold", mark: t.marks.strong },
            n.createElement(W.l4n, null),
          ),
          n.createElement(
            Xe,
            { tooltip: "#FormattingToolbar_Italic", mark: t.marks.italic },
            n.createElement(W.UKJ, null),
          ),
          n.createElement(
            Xe,
            {
              tooltip: "#FormattingToolbar_Underline",
              mark: t.marks.underline,
            },
            n.createElement(W.Gj3, null),
          ),
          "strike" in t.marks &&
            n.createElement(
              Xe,
              { tooltip: "#FormattingToolbar_Strike", mark: t.marks.strike },
              n.createElement(W.tI4, null),
            ),
          "code" in t.marks &&
            n.createElement(
              Xe,
              { tooltip: "#FormattingToolbar_InlineCode", mark: t.marks.code },
              n.createElement(W.bmT, null),
            ),
        );
      }
      function it(e) {
        const { schema: t } = e;
        return n.createElement(
          Je,
          {
            tooltip: "#FormattingToolbar_Paragraph",
            nodeType: t.nodes.paragraph,
          },
          n.createElement(W.iYj, null),
        );
      }
      function lt(e) {
        const { schema: t, maxLevel: r = 1, levels: a } = e,
          o = r + a - 1;
        return n.createElement(
          n.Fragment,
          null,
          r <= 1 &&
            n.createElement(
              Je,
              {
                tooltip: "#FormattingToolbar_HeadingLevel1",
                nodeType: t.nodes.heading,
                attrs: { level: 1 },
              },
              n.createElement(W.jRw, null),
            ),
          r <= 2 &&
            o >= 2 &&
            n.createElement(
              Je,
              {
                tooltip: "#FormattingToolbar_HeadingLevel2",
                nodeType: t.nodes.heading,
                attrs: { level: 2 },
              },
              n.createElement(W.qOW, null),
            ),
          r <= 3 &&
            o >= 3 &&
            n.createElement(
              Je,
              {
                tooltip: "#FormattingToolbar_HeadingLevel3",
                nodeType: t.nodes.heading,
                attrs: { level: 3 },
              },
              n.createElement(W.x7X, null),
            ),
          r <= 4 &&
            o >= 4 &&
            n.createElement(
              Je,
              {
                tooltip: "#FormattingToolbar_HeadingLevel4",
                nodeType: t.nodes.heading,
                attrs: { level: 4 },
              },
              n.createElement(W.qzO, null),
            ),
          r <= 5 &&
            o >= 5 &&
            n.createElement(
              Je,
              {
                tooltip: "#FormattingToolbar_HeadingLevel5",
                nodeType: t.nodes.heading,
                attrs: { level: 5 },
              },
              n.createElement(W.jXA, null),
            ),
        );
      }
      function ct(e) {
        const { schema: t } = e,
          { callbacks: r, view: a } = Pe(),
          o = n.useCallback(
            (e) =>
              !!(function (e, t, r) {
                const { $from: n, to: a } = e.selection;
                for (let e = n.sharedDepth(a); e > 0; e--) {
                  const a = n.node(e);
                  if (a.hasMarkup(t, r)) return a;
                }
                return !1;
              })(e.state, t.nodes.bullet_list),
            [t],
          ),
          [s, i] = n.useState(() => o(a));
        return (
          (0, ye.hL)(
            r,
            n.useCallback((e) => i(o(e)), [o]),
          ),
          n.createElement(
            n.Fragment,
            null,
            n.createElement(
              Qe,
              {
                tooltip: "#FormattingToolbar_BulletedList",
                toggled: s,
                command: ne.Sd(t.nodes.bullet_list),
              },
              n.createElement(W.JPq, null),
            ),
            n.createElement(
              Qe,
              {
                tooltip: "#FormattingToolbar_OutdentList",
                disabled: !s,
                command: ne.T2(t.nodes.list_item),
              },
              n.createElement(W.LSz, null),
            ),
            n.createElement(
              Qe,
              {
                tooltip: "#FormattingToolbar_IndentList",
                disabled: !s,
                command: ne.$B(t.nodes.list_item),
              },
              n.createElement(W.ycU, null),
            ),
          )
        );
      }
      function ut(e) {
        const { schema: t } = e;
        return n.createElement(tt, { schema: t }, n.createElement(W.YqK, null));
      }
      function mt(e) {
        const { bSpellcheckEnabled: t, setSpellcheckEnabled: r } = e;
        return n.createElement(
          et,
          {
            tooltip: t
              ? "#FormattingToolbar_DisableSpellcheck"
              : "#FormattingToolbar_EnableSpellcheck",
            toggled: t,
            onClick: () => r(!t),
          },
          n.createElement(W.DEV, null),
        );
      }
      var dt = r(76011);
      function pt(e) {
        const {
            schema: t,
            view: r,
            refUpdateToolbar: a,
            className: o,
            bSpellcheckEnabled: s,
            setSpellcheckEnabled: i,
          } = e,
          [l, c] = (0, dt.SP)("FormattingToolbar_Expanded", !1);
        return n.createElement(
          $e,
          { refUpdateToolbar: a, view: r },
          n.createElement(
            "div",
            { className: (0, we.A)(Ee.Toolbar, o) },
            n.createElement(
              Ze,
              null,
              n.createElement(nt, null),
              n.createElement(Ke, null),
              n.createElement(st, { schema: t }),
              n.createElement(He, null),
              n.createElement(
                et,
                {
                  onClick: () => c(!l),
                  tooltip: "#FormattingToolbar_ExpandOptions",
                },
                n.createElement(W.cLJ, { direction: l ? "up" : "down" }),
              ),
            ),
            n.createElement(
              qe,
              { visible: l },
              n.createElement(
                Ze,
                null,
                n.createElement(it, { schema: t }),
                n.createElement(lt, { schema: t, levels: 5 }),
                n.createElement(
                  Je,
                  {
                    nodeType: t.nodes.code_block,
                    tooltip: (0, f.we)("#FormattingToolbar_CodeBlock"),
                  },
                  n.createElement(W.kNE, null),
                ),
                n.createElement(Ke, null),
                n.createElement(ct, { schema: t }),
                n.createElement(Ke, null),
                n.createElement(ut, { schema: t }),
                n.createElement(He, null),
                i &&
                  n.createElement(mt, {
                    bSpellcheckEnabled: s,
                    setSpellcheckEnabled: i,
                  }),
              ),
            ),
          ),
        );
      }
      const gt = 15;
      function ht(e) {
        const { note: t } = e,
          [r, a] = n.useState(!1),
          [o, s] = n.useState(),
          i = n.useRef(),
          u = n.useRef(),
          p = n.useRef(t.content),
          b = n.useRef(!1),
          _ = n.useContext(d).onClickURL,
          y =
            null === (v = n.useContext(d).bSpellcheckEnabled) ||
            void 0 === v ||
            v;
        var v;
        const M = n.useContext(d).setSpellcheckEnabled,
          E = (function (e) {
            const t = h();
            return n.useCallback(
              async (r, n) => {
                const a = new Uint8Array(n),
                  o = await t.UploadImage(`notes_${e}_images/`, r, a);
                return Promise.resolve("/gamenotes/" + o);
              },
              [t, e],
            );
          })(t.appid),
          k = (0, Me.Qn)();
        p.current == t.content || b.current || (p.current = t.content);
        const S = p.current,
          C = (function () {
            const e = (0, l.jE)(),
              t = h();
            return (0, c.n)({
              mutationFn: (e) => t.SaveGameNote(e.note, e.title, e.bbcode),
              onMutate(t) {
                const r = { ...t.note, title: t.title, content: t.bbcode };
                return (
                  w(e, m(t.note), (e) => e.map((e) => (e.id == r.id ? r : e))),
                  console.log(r),
                  r
                );
              },
              onSuccess(t, r, n) {
                console.log(n, t),
                  w(e, m(r.note), (e) =>
                    e.map((e) =>
                      e.id === n.id ? { ...e, id: t, not_persisted: !1 } : e,
                    ),
                  );
              },
            });
          })(),
          N = n.useCallback((e, t) => {
            i.current && i.current(),
              t.doc &&
                t.doc != e.state.doc &&
                (b.current ||
                  ((b.current = !0),
                  D.y.ReportTrackedAction("/GameNotes/NoteModified")),
                (u.current = () => ({
                  title: Bt(e.state.doc),
                  bbcode: L(e.state.doc, Ge),
                })),
                a(!0));
          }, []);
        n.useEffect(() => {
          if (!r) return;
          let e = u.current;
          const n = () => {
              if (e) {
                const { title: r, bbcode: n } = e();
                (t.not_persisted && !(null == n ? void 0 : n.length)) ||
                  C.mutate({ note: t, title: r, bbcode: n }),
                  a(!1);
              }
              (e = void 0), (u.current = void 0);
            },
            o = window.setTimeout(n, 1e3 * gt);
          return () => {
            window.clearTimeout(o), n();
          };
        }, [C, r, t]),
          n.useEffect(() => {
            o && o.focus();
          }, [o]);
        const T = g(),
          A = B(t, T),
          R = {
            onSecondaryButton: () => A.mutate(),
            onSecondaryActionDescription: (0, f.we)(
              "#UserGameNotes_DeleteNote",
            ),
          };
        return n.createElement(
          "div",
          { className: Ne.NoteEditorArea },
          !k &&
            n.createElement(pt, {
              schema: Ge.pm_schema,
              view: o,
              refUpdateToolbar: i,
              className: Ne.Toolbar,
              bSpellcheckEnabled: y,
              setSpellcheckEnabled: M,
            }),
          n.createElement(
            ke,
            {
              schemaConfig: Ge,
              className: Ne.EditorInput,
              bbcode: S,
              onUpdate: N,
              refView: s,
              onClickURL: _,
              bSpellcheckEnabled: y,
              panelProps: R,
            },
            n.createElement(Ie, {
              uploadImage: E,
              nodeType: Ge.pm_schema.nodes.image,
            }),
          ),
          !k && n.createElement(ft, { note: t, bDirty: r }),
        );
      }
      function ft(e) {
        const { note: t, bDirty: r } = e,
          [a, o, s] = (0, ye.uD)(!1),
          i = "single" == n.useContext(d).mode,
          l = g(),
          c = B(t, l),
          u = n.useCallback(() => {
            !r && t.not_persisted ? c.mutate() : o();
          }, [r, t, c, o]);
        return n.createElement(
          "div",
          { className: Ne.NoteActions },
          a && n.createElement(_t, { note: t, closeModal: s, deleteNote: c }),
          n.createElement(
            Ce.he,
            { toolTipContent: "#UserGameNotes_DeleteNote", direction: "top" },
            n.createElement(I.$n, { onClick: u }, n.createElement(W.lMJ, null)),
          ),
          i && n.createElement(bt, { bDirty: r }),
        );
      }
      function bt(e) {
        const { bDirty: t } = e,
          r = g();
        return t
          ? n.createElement(
              I.jn,
              { onClick: () => r(), className: Ne.CloseWindowButton },
              (0, f.we)("#Button_SaveAndClose"),
            )
          : n.createElement(
              I.$n,
              { onClick: () => r(), className: Ne.CloseWindowButton },
              (0, f.we)("#Button_Close"),
            );
      }
      function _t(e) {
        const { note: t, closeModal: r, deleteNote: a } = e;
        return n.createElement(
          j.EN,
          { active: !0 },
          n.createElement(j.o0, {
            strTitle: (0, f.we)("#UserGameNotes_DeleteNote"),
            strDescription: (0, f.we)("#UserGameNotes_PromptDelete"),
            onOK: () => a.mutate(),
            bOKDisabled: a.isPending,
            strOKButtonText: (0, f.we)("#Button_Delete"),
            closeModal: r,
          }),
        );
      }
      function Bt(e) {
        let t = "";
        for (let r = 0; r < e.content.childCount; r++) {
          const n = e.content.child(r);
          if (n.isText) t += n.text;
          else {
            if (((t = t.trim()), t.length > 4)) return t;
            if (((t = Bt(n)), t.length > 4)) return t;
          }
        }
        return t.trim();
      }
      function wt() {
        const e = (0, a.W5)(),
          t = y(
            "appid" in e.params && Number(e.params.appid),
            "shortcut_name" in e.params && e.params.shortcut_name,
          );
        let r = e.params.noteid;
        const o = (0, a.W6)(),
          s = (function (e) {
            const t = (0, l.jE)(),
              r = h();
            return n.useCallback(() => {
              const n = (0, f.we)("#UserGameNotes_UntitledNote_Title"),
                a = r.NewNote(e, n);
              return w(t, e, (e) => [...e, a]), a.id;
            }, [t, r, e]);
          })(t),
          { data: i, isLoading: c } = _(t);
        let u;
        i && r && (u = i.find((e) => e.id === r)),
          n.useLayoutEffect(() => {
            !i ||
              (r && i.find((e) => e.id === r)) ||
              (i.length > 0 && i[0].id ? vt(o, t, i[0].id) : vt(o, t, s()));
          }, [o, t, r, i, s]);
        const m = n.createElement(
          Ce.he,
          { toolTipContent: "#UserGameNotes_NewNote", direction: "top" },
          n.createElement(
            I.$n,
            {
              className: Ne.NewNoteButton,
              onClick: () => {
                const e = s();
                vt(o, t, e);
              },
            },
            n.createElement(W.qY3, null),
          ),
        );
        return i
          ? n.createElement(yt, {
              noteParent: t,
              notes: i,
              activeNoteID: null == u ? void 0 : u.id,
              actions: m,
            })
          : null;
      }
      function yt(e) {
        const { noteParent: t, notes: r, activeNoteID: o, actions: s } = e,
          [i, l] = (0, dt.SP)("NotesListCollapsed", !1),
          c = n.useContext(d).bPinnedView,
          u = (0, Me.Qn)(),
          m = r.map((e) => {
            var t;
            return {
              title:
                (null === (t = e.title) || void 0 === t ? void 0 : t.length) > 0
                  ? e.title
                  : (0, f.we)("#UserGameNotes_Untitled"),
              identifier: e.id,
              content: n.createElement(ht, { note: e }),
              pageClassName: Ne.NotePage,
              hideTitle: !0,
            };
          }),
          p = (0, a.W6)(),
          g = n.useCallback((e) => vt(p, t, e), [p, t]);
        return n.createElement(I.Bv, {
          title: (0, f.we)("#UserGameNotes_NotesList"),
          pages: m,
          className: (0, we.A)(Ne.NotesPagedSettings, c && Ne.PinnedView),
          page: o,
          onPageRequested: g,
          bottomControls: s,
          hideList: i,
          toggleHideList: c || u ? void 0 : () => l(!i),
        });
      }
      function vt(e, t, r) {
        let n;
        (n =
          "appid" in t
            ? o.AppNotes(t.appid, r)
            : o.ShortcutNotes(t.shortcut, r)),
          e.replace(n, e.location.state);
      }
      var Mt = r(80613),
        Et = r(89068);
      const kt = Mt.Message;
      class St extends kt {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            St.prototype.id || Et.Sg(St.M()),
            kt.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            St.sm_m ||
              (St.sm_m = {
                proto: St,
                fields: {
                  id: { n: 1, br: Et.qM.readString, bw: Et.gp.writeString },
                  appid: { n: 2, br: Et.qM.readUint32, bw: Et.gp.writeUint32 },
                  shortcut_name: {
                    n: 3,
                    br: Et.qM.readString,
                    bw: Et.gp.writeString,
                  },
                  shortcutid: {
                    n: 4,
                    br: Et.qM.readUint32,
                    bw: Et.gp.writeUint32,
                  },
                  ordinal: {
                    n: 5,
                    br: Et.qM.readUint32,
                    bw: Et.gp.writeUint32,
                  },
                  time_created: {
                    n: 6,
                    br: Et.qM.readUint32,
                    bw: Et.gp.writeUint32,
                  },
                  time_modified: {
                    n: 7,
                    br: Et.qM.readUint32,
                    bw: Et.gp.writeUint32,
                  },
                  title: { n: 8, br: Et.qM.readString, bw: Et.gp.writeString },
                  content: {
                    n: 9,
                    br: Et.qM.readString,
                    bw: Et.gp.writeString,
                  },
                },
              }),
            St.sm_m
          );
        }
        static MBF() {
          return St.sm_mbf || (St.sm_mbf = Et.w0(St.M())), St.sm_mbf;
        }
        toObject(e = !1) {
          return St.toObject(e, this);
        }
        static toObject(e, t) {
          return Et.BT(St.M(), e, t);
        }
        static fromObject(e) {
          return Et.Uq(St.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Mt.BinaryReader(e),
            r = new St();
          return St.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Et.zj(St.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Mt.BinaryWriter();
          return St.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Et.i0(St.M(), e, t);
        }
        serializeBase64String() {
          var e = new Mt.BinaryWriter();
          return St.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNote";
        }
      }
      class Ct extends kt {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ct.prototype.appid || Et.Sg(Ct.M()),
            kt.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ct.sm_m ||
              (Ct.sm_m = {
                proto: Ct,
                fields: {
                  appid: { n: 1, br: Et.qM.readUint32, bw: Et.gp.writeUint32 },
                  shortcut_name: {
                    n: 2,
                    br: Et.qM.readString,
                    bw: Et.gp.writeString,
                  },
                  shortcutid: {
                    n: 3,
                    br: Et.qM.readUint32,
                    bw: Et.gp.writeUint32,
                  },
                  include_content: {
                    n: 4,
                    br: Et.qM.readBool,
                    bw: Et.gp.writeBool,
                  },
                },
              }),
            Ct.sm_m
          );
        }
        static MBF() {
          return Ct.sm_mbf || (Ct.sm_mbf = Et.w0(Ct.M())), Ct.sm_mbf;
        }
        toObject(e = !1) {
          return Ct.toObject(e, this);
        }
        static toObject(e, t) {
          return Et.BT(Ct.M(), e, t);
        }
        static fromObject(e) {
          return Et.Uq(Ct.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Mt.BinaryReader(e),
            r = new Ct();
          return Ct.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Et.zj(Ct.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Mt.BinaryWriter();
          return Ct.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Et.i0(Ct.M(), e, t);
        }
        serializeBase64String() {
          var e = new Mt.BinaryWriter();
          return Ct.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_GetNotesForGame_Request";
        }
      }
      class Nt extends kt {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Nt.prototype.notes || Et.Sg(Nt.M()),
            kt.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Nt.sm_m ||
              (Nt.sm_m = {
                proto: Nt,
                fields: { notes: { n: 1, c: St, r: !0, q: !0 } },
              }),
            Nt.sm_m
          );
        }
        static MBF() {
          return Nt.sm_mbf || (Nt.sm_mbf = Et.w0(Nt.M())), Nt.sm_mbf;
        }
        toObject(e = !1) {
          return Nt.toObject(e, this);
        }
        static toObject(e, t) {
          return Et.BT(Nt.M(), e, t);
        }
        static fromObject(e) {
          return Et.Uq(Nt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Mt.BinaryReader(e),
            r = new Nt();
          return Nt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Et.zj(Nt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Mt.BinaryWriter();
          return Nt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Et.i0(Nt.M(), e, t);
        }
        serializeBase64String() {
          var e = new Mt.BinaryWriter();
          return Nt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_GetNotesForGame_Response";
        }
      }
      class Tt extends kt {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Tt.prototype.appid || Et.Sg(Tt.M()),
            kt.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Tt.sm_m ||
              (Tt.sm_m = {
                proto: Tt,
                fields: {
                  appid: { n: 1, br: Et.qM.readUint32, bw: Et.gp.writeUint32 },
                  shortcut_name: {
                    n: 2,
                    br: Et.qM.readString,
                    bw: Et.gp.writeString,
                  },
                  shortcutid: {
                    n: 3,
                    br: Et.qM.readUint32,
                    bw: Et.gp.writeUint32,
                  },
                  note_id: {
                    n: 4,
                    br: Et.qM.readString,
                    bw: Et.gp.writeString,
                  },
                  create_new: { n: 5, br: Et.qM.readBool, bw: Et.gp.writeBool },
                  title: { n: 6, br: Et.qM.readString, bw: Et.gp.writeString },
                  content: {
                    n: 7,
                    br: Et.qM.readString,
                    bw: Et.gp.writeString,
                  },
                },
              }),
            Tt.sm_m
          );
        }
        static MBF() {
          return Tt.sm_mbf || (Tt.sm_mbf = Et.w0(Tt.M())), Tt.sm_mbf;
        }
        toObject(e = !1) {
          return Tt.toObject(e, this);
        }
        static toObject(e, t) {
          return Et.BT(Tt.M(), e, t);
        }
        static fromObject(e) {
          return Et.Uq(Tt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Mt.BinaryReader(e),
            r = new Tt();
          return Tt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Et.zj(Tt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Mt.BinaryWriter();
          return Tt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Et.i0(Tt.M(), e, t);
        }
        serializeBase64String() {
          var e = new Mt.BinaryWriter();
          return Tt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_SaveNote_Request";
        }
      }
      class At extends kt {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            At.prototype.note_id || Et.Sg(At.M()),
            kt.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            At.sm_m ||
              (At.sm_m = {
                proto: At,
                fields: {
                  note_id: {
                    n: 1,
                    br: Et.qM.readString,
                    bw: Et.gp.writeString,
                  },
                },
              }),
            At.sm_m
          );
        }
        static MBF() {
          return At.sm_mbf || (At.sm_mbf = Et.w0(At.M())), At.sm_mbf;
        }
        toObject(e = !1) {
          return At.toObject(e, this);
        }
        static toObject(e, t) {
          return Et.BT(At.M(), e, t);
        }
        static fromObject(e) {
          return Et.Uq(At.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Mt.BinaryReader(e),
            r = new At();
          return At.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Et.zj(At.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Mt.BinaryWriter();
          return At.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Et.i0(At.M(), e, t);
        }
        serializeBase64String() {
          var e = new Mt.BinaryWriter();
          return At.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_SaveNote_Response";
        }
      }
      class Rt extends kt {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Rt.prototype.appid || Et.Sg(Rt.M()),
            kt.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Rt.sm_m ||
              (Rt.sm_m = {
                proto: Rt,
                fields: {
                  appid: { n: 1, br: Et.qM.readUint32, bw: Et.gp.writeUint32 },
                  shortcut_name: {
                    n: 2,
                    br: Et.qM.readString,
                    bw: Et.gp.writeString,
                  },
                  shortcutid: {
                    n: 3,
                    br: Et.qM.readUint32,
                    bw: Et.gp.writeUint32,
                  },
                  note_id: {
                    n: 4,
                    br: Et.qM.readString,
                    bw: Et.gp.writeString,
                  },
                },
              }),
            Rt.sm_m
          );
        }
        static MBF() {
          return Rt.sm_mbf || (Rt.sm_mbf = Et.w0(Rt.M())), Rt.sm_mbf;
        }
        toObject(e = !1) {
          return Rt.toObject(e, this);
        }
        static toObject(e, t) {
          return Et.BT(Rt.M(), e, t);
        }
        static fromObject(e) {
          return Et.Uq(Rt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Mt.BinaryReader(e),
            r = new Rt();
          return Rt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Et.zj(Rt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Mt.BinaryWriter();
          return Rt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Et.i0(Rt.M(), e, t);
        }
        serializeBase64String() {
          var e = new Mt.BinaryWriter();
          return Rt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_DeleteNote_Request";
        }
      }
      class zt extends kt {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), kt.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return zt.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new zt();
        }
        static deserializeBinary(e) {
          let t = new Mt.BinaryReader(e),
            r = new zt();
          return zt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new Mt.BinaryWriter();
          return zt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new Mt.BinaryWriter();
          return zt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_DeleteNote_Response";
        }
      }
      class Ot extends kt {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), kt.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Ot.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Ot();
        }
        static deserializeBinary(e) {
          let t = new Mt.BinaryReader(e),
            r = new Ot();
          return Ot.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new Mt.BinaryWriter();
          return Ot.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new Mt.BinaryWriter();
          return Ot.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_GetGamesWithNotes_Request";
        }
      }
      class Ut extends kt {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ut.prototype.games_with_notes || Et.Sg(Ut.M()),
            kt.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Ut.sm_m ||
              (Ut.sm_m = {
                proto: Ut,
                fields: { games_with_notes: { n: 1, c: Gt, r: !0, q: !0 } },
              }),
            Ut.sm_m
          );
        }
        static MBF() {
          return Ut.sm_mbf || (Ut.sm_mbf = Et.w0(Ut.M())), Ut.sm_mbf;
        }
        toObject(e = !1) {
          return Ut.toObject(e, this);
        }
        static toObject(e, t) {
          return Et.BT(Ut.M(), e, t);
        }
        static fromObject(e) {
          return Et.Uq(Ut.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Mt.BinaryReader(e),
            r = new Ut();
          return Ut.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Et.zj(Ut.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Mt.BinaryWriter();
          return Ut.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Et.i0(Ut.M(), e, t);
        }
        serializeBase64String() {
          var e = new Mt.BinaryWriter();
          return Ut.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_GetGamesWithNotes_Response";
        }
      }
      class Gt extends kt {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Gt.prototype.appid || Et.Sg(Gt.M()),
            kt.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Gt.sm_m ||
              (Gt.sm_m = {
                proto: Gt,
                fields: {
                  appid: { n: 1, br: Et.qM.readUint32, bw: Et.gp.writeUint32 },
                  shortcutid: {
                    n: 2,
                    br: Et.qM.readUint32,
                    bw: Et.gp.writeUint32,
                  },
                  shortcut_name: {
                    n: 3,
                    br: Et.qM.readString,
                    bw: Et.gp.writeString,
                  },
                  last_modified: {
                    n: 4,
                    br: Et.qM.readUint32,
                    bw: Et.gp.writeUint32,
                  },
                  note_count: {
                    n: 5,
                    br: Et.qM.readUint32,
                    bw: Et.gp.writeUint32,
                  },
                },
              }),
            Gt.sm_m
          );
        }
        static MBF() {
          return Gt.sm_mbf || (Gt.sm_mbf = Et.w0(Gt.M())), Gt.sm_mbf;
        }
        toObject(e = !1) {
          return Gt.toObject(e, this);
        }
        static toObject(e, t) {
          return Et.BT(Gt.M(), e, t);
        }
        static fromObject(e) {
          return Et.Uq(Gt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Mt.BinaryReader(e),
            r = new Gt();
          return Gt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Et.zj(Gt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Mt.BinaryWriter();
          return Gt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Et.i0(Gt.M(), e, t);
        }
        serializeBase64String() {
          var e = new Mt.BinaryWriter();
          return Gt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_GetGamesWithNotes_Response_GameWithNotes";
        }
      }
      var Ft;
      !(function (e) {
        (e.GetNotesForGame = function (e, t) {
          return e.SendMsg(
            "UserGameNotes.GetNotesForGame#1",
            (0, E.I8)(Ct, t),
            Nt,
            { ePrivilege: 1 },
          );
        }),
          (e.SaveNote = function (e, t) {
            return e.SendMsg("UserGameNotes.SaveNote#1", (0, E.I8)(Tt, t), At, {
              ePrivilege: 1,
            });
          }),
          (e.DeleteNote = function (e, t) {
            return e.SendMsg(
              "UserGameNotes.DeleteNote#1",
              (0, E.I8)(Rt, t),
              zt,
              { ePrivilege: 1 },
            );
          }),
          (e.GetGamesWithNotes = function (e, t) {
            return e.SendMsg(
              "UserGameNotes.GetGamesWithNotes#1",
              (0, E.I8)(Ot, t),
              Ut,
              { ePrivilege: 1 },
            );
          });
      })(Ft || (Ft = {}));
      class Dt {
        constructor(e) {
          this.m_SteamInterface = e;
        }
        async GetGamesWithNotes() {
          const e = E.w.Init(Ot);
          return (
            await Ft.GetGamesWithNotes(
              this.m_SteamInterface.GetServiceTransport(),
              e,
            )
          )
            .Body()
            .toObject().games_with_notes;
        }
        async GetGameNotesList(e, t) {
          const r = E.w.Init(Ct);
          this.SetParentOnRequest(r, e), r.Body().set_include_content(t);
          const n = await Ft.GetNotesForGame(
            this.m_SteamInterface.GetServiceTransport(),
            r,
          );
          return n.Body().notes().length
            ? n.Body().toObject().notes
            : [this.NewNote(e, "New Note")];
        }
        async SaveGameNote(e, t, r) {
          const n = E.w.Init(Tt);
          e.not_persisted
            ? n.Body().set_create_new(!0)
            : n.Body().set_note_id(e.id),
            e.appid
              ? n.Body().set_appid(e.appid)
              : n.Body().set_shortcut_name(e.shortcut_name),
            n.Body().set_title(t),
            n.Body().set_content(r);
          const a = await Ft.SaveNote(
            this.m_SteamInterface.GetServiceTransport(),
            n,
          );
          if (!a.BSuccess()) throw a.GetErrorMessage();
          return a.Body().note_id();
        }
        async DeleteGameNote(e, t) {
          const r = E.w.Init(Rt);
          this.SetParentOnRequest(r, e), r.Body().set_note_id(t);
          const n = await Ft.DeleteNote(
            this.m_SteamInterface.GetServiceTransport(),
            r,
          );
          if (!n.BSuccess()) throw n.GetErrorMessage();
          return t;
        }
        async SyncNotes() {}
        SetParentOnRequest(e, t) {
          "appid" in t
            ? e.Body().set_appid(t.appid)
            : e.Body().set_shortcut_name(t.shortcut);
        }
        NewNote(e, t) {
          let r = {};
          return (
            "appid" in e ? (r.appid = e.appid) : (r.shortcut_name = e.shortcut),
            {
              id: "temp_" + Dt.sm_lastNoteID++,
              ...r,
              ordinal: 0,
              time_created: Date.now() / 1e3,
              time_modified: Date.now() / 1e3,
              title: t,
              content: "",
              not_persisted: !0,
            }
          );
        }
        UploadImage(e, t, r) {
          return Promise.reject("NYI");
        }
      }
      function It(e) {
        const t = (0, S.TR)(),
          [r] = n.useState(() => new Dt(t));
        return n.createElement(
          p,
          { mode: "page", store: r },
          n.createElement(
            a.dO,
            null,
            n.createElement(a.qh, { path: o.List() }, n.createElement(G, null)),
            n.createElement(
              a.qh,
              { path: o.AppNotes(":appid", ":noteid?") },
              n.createElement(wt, null),
            ),
            n.createElement(
              a.qh,
              null,
              n.createElement(a.rd, { to: `${o.List()}` }),
            ),
          ),
        );
      }
      Dt.sm_lastNoteID = 0;
    },
    61788: (e, t, r) => {
      "use strict";
      r.d(t, { y: () => d });
      var n = r(34629),
        a = r(56545),
        o = r(59134),
        s = r(60778),
        i = r(14771),
        l = r(10333);
      const c = new s.wd("ReactUsageReporting").Debug,
        u = 1e3 * i.Kp.PerMinute;
      class m {
        constructor() {
          (this.m_transport = null),
            (this.m_mapRoutes = new Map()),
            (this.m_mapComponents = new Map()),
            (this.m_mapActions = new Map()),
            (this.m_reportCount = 0),
            (this.m_bInitialized = !1);
        }
        Init(e, t, r) {
          (this.m_bInitialized = !0),
            (this.m_strProduct = e),
            (this.m_strVersion = t),
            (this.m_transport = r),
            this.ScheduleSend();
        }
        ScheduleSend() {
          setTimeout(() => this.CheckSend(), u);
        }
        CheckSend() {
          this.m_reportCount > 0 && this.SendMetrics(), this.ScheduleSend();
        }
        ReportInternal(e, t) {
          t.has(e) || t.set(e, 0),
            t.set(e, t.get(e) + 1),
            this.m_reportCount++,
            this.ShouldSendMetricsImmediately() && this.SendMetrics();
        }
        ReportRouteMatch(e) {
          c("Route match: " + e), this.ReportInternal(e, this.m_mapRoutes);
        }
        ReportTrackedComponent(e) {
          c("Tracked component: " + e),
            this.ReportInternal(e, this.m_mapComponents);
        }
        ReportTrackedAction(e) {
          c("User action: " + e), this.ReportInternal(e, this.m_mapActions);
        }
        ShouldSendMetricsImmediately() {
          return this.m_reportCount >= 100;
        }
        SendMetrics() {
          if (!this.m_bInitialized) return;
          const e = a.w.Init(o.bc);
          e.Body().set_product(this.m_strProduct),
            e.Body().set_version(this.m_strVersion),
            this.m_mapRoutes.forEach((t, r) => {
              let n = new o.N4();
              n.set_route(r), n.set_count(t), e.Body().add_routes(n);
            }),
            this.m_mapComponents.forEach((t, r) => {
              let n = new o.Zd();
              n.set_component(r), n.set_count(t), e.Body().add_components(n);
            }),
            this.m_mapActions.forEach((t, r) => {
              let n = new o.Ys();
              n.set_action(r), n.set_count(t), e.Body().add_actions(n);
            }),
            this.m_mapRoutes.clear(),
            this.m_mapComponents.clear(),
            this.m_mapActions.clear(),
            (this.m_reportCount = 0),
            o._5.ReportReactUsage(this.m_transport, e);
        }
        get version() {
          return this.m_strVersion;
        }
        get product() {
          return this.m_strProduct;
        }
      }
      (0, n.Cg)([l.o], m.prototype, "CheckSend", null);
      const d = new m();
    },
  },
]);
