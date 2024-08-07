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
      r.r(t), r.d(t, { default: () => Dt });
      var n = r(90626),
        a = r(92757);
      const s = {
        List: () => "/notes/list",
        AppNotes: (e, t) => `/notes/app/${e}/${null != t ? t : ""}`,
        ShortcutNotes: (e, t) => `/notes/shortcut/${e}/${null != t ? t : ""}`,
      };
      var o = r(17083),
        i = r(31380);
      function l(e) {
        return e.trim();
      }
      function c(e) {
        return e.appid ? { appid: e.appid } : { shortcut: e.shortcut_name };
      }
      const u = n.createContext({ mode: "page", store: null });
      function m(e) {
        const {
            mode: t,
            store: r,
            closePopup: a,
            bPinnedView: s,
            onClickURL: o,
            bSpellcheckEnabled: i = !0,
            setSpellcheckEnabled: l,
            children: c,
          } = e,
          m = n.useMemo(
            () => ({
              mode: t,
              store: r,
              closePopup: a,
              bPinnedView: s,
              onClickURL: o,
              bSpellcheckEnabled: i,
              setSpellcheckEnabled: l,
            }),
            [t, r, a, s, o, i, l],
          );
        return n.createElement(u.Provider, { value: m }, c);
      }
      function d() {
        return n.useContext(u).closePopup;
      }
      function p() {
        return n.useContext(u).store;
      }
      var g = r(61859);
      function h(e) {
        return "appid" in e
          ? ["GameNotes", "NotesByAppID", e.appid]
          : ["GameNotes", "NotesForShortcut", l(e.shortcut)];
      }
      function f(e) {
        const t = p();
        return (0, i.useQuery)(
          h(e),
          async () => (await t.GetGameNotesList(e, !0)) || [],
          { enabled: !!e },
        );
      }
      function b(e, t) {
        const r = (0, i.useQueryClient)(),
          n = p(),
          a = e.id;
        return (0, i.useMutation)(
          async () => (e.not_persisted ? a : await n.DeleteGameNote(c(e), a)),
          {
            onSuccess() {
              _(r, c(e), (e) => e.filter((e) => e.id != a)), t && t();
            },
          },
        );
      }
      function _(e, t, r) {
        e.getQueryData(h(t)) && e.setQueryData(h(t), r);
      }
      function B(e, t) {
        return n.useMemo(
          () =>
            t
              ? (function (e) {
                  return { shortcut: l(e) };
                })(t)
              : (function (e) {
                  return { appid: e };
                })(e),
          [e, t],
        );
      }
      var w = r(58632),
        y = r.n(w),
        v = r(56545),
        M = r(37403),
        E = r(23809),
        k = r(30470),
        S = r(22837);
      let C;
      const N = 864e5;
      function T(e) {
        return `appinfo_${e}_${k.TS.LANGUAGE}`;
      }
      function A(e) {
        return Boolean(e && Date.now() - e.timeCached < N);
      }
      function R(e) {
        const t = (0, E.KV)(),
          r = (0, E.rX)();
        return (0, i.useQuery)(
          ["appinfo", e],
          async () =>
            (function (e, t) {
              return (
                C ||
                  (C = new (y())(
                    async (r) => {
                      const n = new Map();
                      (await Promise.all(r.map((e) => t.GetObject(T(e)))))
                        .filter(A)
                        .forEach(({ value: e }) => n.set(e.appid, e));
                      const a = r.slice().filter((e) => !n.has(e));
                      if (a.length) {
                        const r = v.w.Init(M._z);
                        r.Body().set_language((0, S.sf)(k.TS.LANGUAGE)),
                          r.Body().set_appids(a);
                        const s = await M.BE.GetApps(e, r);
                        if (1 != s.GetEResult()) throw s.GetErrorMessage();
                        s.Body()
                          .toObject()
                          .apps.forEach((e) => {
                            t.StoreObject(T(e.appid), {
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
                C
              );
            })(t, r).load(e),
          { staleTime: N, enabled: !!e },
        ).data;
      }
      var z = r(22797);
      function O() {
        const { data: e, isLoading: t } = (function () {
          const e = p();
          return (0, i.useQuery)(["GameNotes", "GamesWithNotes"], () =>
            e.GetGamesWithNotes(),
          );
        })();
        return t
          ? n.createElement(z.t, { msDelayAppear: 300 })
          : n.createElement(
              "div",
              null,
              n.createElement(
                "h1",
                null,
                (0, g.we)("#UserGameNotes_NotesList"),
              ),
              n.createElement(
                "ul",
                null,
                e.map((e) => n.createElement(U, { key: e.appid, game: e })),
              ),
            );
      }
      function U(e) {
        const { game: t } = e,
          r = R(t.appid);
        return n.createElement(
          "li",
          null,
          n.createElement(
            o.N_,
            { to: s.AppNotes(t.appid) },
            null == r ? void 0 : r.name,
          ),
        );
      }
      var G = r(61788),
        D = r(7068),
        F = r(4869),
        I = r(21273),
        W = r(49693),
        x = r(81393);
      function j(e, t) {
        return L(t.pm_schema, t.pm_to_bbcode_config, e);
      }
      function L(e, t, r) {
        let n = r.marks,
          a = "";
        const s = t.mapNodes.get(r.type),
          { tag: o, args: i } = q(s, r.attrs);
        return (
          o && (a += (0, W.CS)(o, i)),
          r.content.forEach((r) => {
            ([a, n] = P(t, n, r.marks, a)),
              ([a, n] = (function (e, t, r, n) {
                let a;
                for (const s of r)
                  if (-1 === t.indexOf(s)) {
                    a || (a = t.slice());
                    const r = e.mapMarks.get(s.type);
                    if (((0, x.w)(r, "mark missing bbtag"), r)) {
                      a.push(s);
                      const { args: e, tag: t } = q(r, s.attrs);
                      n += (0, W.CS)(t, e || {});
                    }
                  }
                return [n, null != a ? a : t];
              })(t, n, r.marks, a)),
              r.type.isText
                ? (a += (0, W.vE)(r.text || ""))
                : r.type == e.nodes.hard_break
                  ? (a += "\n")
                  : (a += L(e, t, r));
          }),
          ([a] = P(t, n, [], a)),
          o && (a += (0, W.op)(o)),
          a
        );
      }
      function P(e, t, r, n) {
        const a = [];
        for (const e of t) -1 === r.indexOf(e) && a.push(e);
        if (!a.length) return [n, t];
        const s = t.slice();
        for (
          ;
          a.length && ((0, x.w)(s.length, "no marks left to close"), s.length);

        ) {
          const t = s.pop(),
            r = e.mapMarks.get(t.type),
            { tag: o } = q(r, t.attrs);
          n += (0, W.op)(o);
          const i = a.indexOf(t);
          -1 != i && a.splice(i, 1);
        }
        return [n, s];
      }
      function q(e, t) {
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
      var $ = r(29287),
        V = r(52893),
        K = r(98724);
      var H = r(57053);
      class Z {
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
      function Q(e) {
        return e
          .filter((e) => e.isText)
          .map((e) => e.text)
          .join();
      }
      class J extends W.Al {
        constructor(e, t) {
          super(e, () => new Z(t)), (this.m_schema = t);
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
                t || e.topNodeType.validContent(H.FK.from(a))
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
                ((n = { ...(n || {}), [e.convertContentToAttr]: Q(r) }),
                "node" in e && (r = [])),
              "node" in e)
            ) {
              let t = H.FK.from(r);
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
                t = H.FK.from(n);
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
      var X = r(12362),
        Y = r(7502),
        ee = r(79216),
        te = r(4188);
      function re(e, t) {
        const { from: r, $from: n, to: a, empty: s } = e.selection;
        return s
          ? !!t.isInSet(e.storedMarks || n.marks())
          : e.doc.rangeHasMark(r, a, t);
      }
      function ne(e, t, r) {
        let { $from: n, to: a, node: s } = e.selection;
        return !s && a <= n.end() && (s = n.parent), !!s && s.hasMarkup(t, r);
      }
      function ae(e, t, r = {}) {
        return new ee.fV(e, (e, n, a, s) => {
          const o = r instanceof Function ? r(n) : r,
            i = e.tr;
          if (n[1]) {
            const e = a + n[0].indexOf(n[1]),
              t = e + n[1].length;
            t < s && i.delete(t, s),
              e > a && i.delete(a, e),
              (s = a + n[1].length);
          }
          return i.addMark(a, s, t.create(o)), i.removeStoredMark(t), i;
        });
      }
      function se(e, t, r) {
        const n = { left: t, top: r },
          a = e.posAtCoords(n);
        if (null == a ? void 0 : a.pos) {
          const t = e.state.doc.resolve(a.pos);
          e.dispatch(e.state.tr.setSelection(V.U3.near(t)));
        }
      }
      const oe = n.createContext(null);
      function ie(e) {
        return n.createElement(oe.Provider, { value: e.view }, e.children);
      }
      function le(e) {
        const { schema: t, onUpdate: r } = e,
          a = n.useRef(r);
        return (
          (a.current = r),
          ce(
            n.useMemo(
              () =>
                new V.k_({
                  view: (e) => ({ update: (...e) => a.current(...e) }),
                }),
              [],
            ),
          ),
          ce(
            n.useMemo(
              () =>
                (function (e) {
                  const t = (0, X.st)(
                    X.I$,
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
                  return (0, Y.w)({
                    "Mod-z": K.tN,
                    "Mod-y": K.ZS,
                    Backspace: ee.dv,
                    "Mod-Enter": t,
                    "Shift-Enter": t,
                    "Mod-b": (0, X.wh)(e.marks.strong),
                    "Mod-i": (0, X.wh)(e.marks.italic),
                    Enter: (0, te.wn)(e.nodes.list_item),
                    "Mod-[": (0, te.T2)(e.nodes.list_item),
                    "Mod-]": (0, te.$B)(e.nodes.list_item),
                    "Shift-Ctrl-1": (0, X.y_)(e.nodes.heading, { level: 1 }),
                    "Shift-Ctrl-2": (0, X.y_)(e.nodes.heading, { level: 2 }),
                    "Shift-Ctrl-3": (0, X.y_)(e.nodes.heading, { level: 3 }),
                    "Shift-Ctrl-0": (0, X.y_)(e.nodes.paragraph),
                  });
                })(t),
              [t],
            ),
          ),
          ce(n.useMemo(() => (0, Y.w)(X.RV), [])),
          ce(
            n.useMemo(
              () =>
                (function (e) {
                  return (0, ee.sM)({
                    rules: [
                      (0, ee.tG)(
                        /^(\d+)\.\s$/,
                        e.nodes.ordered_list,
                        (e) => ({ order: parseInt(e[1]) }),
                        (e, t) =>
                          t.childCount + t.attrs.order == parseInt(e[1]),
                      ),
                      (0, ee.tG)(/^\s*([-+*])\s$/, e.nodes.bullet_list),
                      ae(/\*([^*]+)\*/, e.marks.strong),
                      ae(/_([^_]+)_/, e.marks.italic),
                      ae(/~([^~]+)~/, e.marks.strike),
                      ae(/`([^`]+)`/, e.marks.code),
                      (0, ee.JJ)(/^```$/, e.nodes.code_block),
                      (0, ee.JJ)(/^(#{1,5})\s$/, e.nodes.heading, (e) => ({
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
      function ce(e) {
        const t = n.useContext(oe);
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
      var ue = r(32381),
        me = r(44078),
        de = r(61712),
        pe = r(56011),
        ge = r(97009);
      function he() {
        const [e, t] = n.useState(),
          [r, a] = n.useState(),
          [s, o] = n.useState();
        if (
          (ce(
            n.useMemo(
              () =>
                new V.k_({
                  props: {
                    handleDOMEvents: {
                      mouseover: (e, r) => {
                        const n = r.target;
                        if ((0, pe.kD)(n) && "A" == n.nodeName) {
                          const e = n.getBoundingClientRect();
                          t(e.left + e.width / 2), a(e.bottom + 2), o(n);
                        } else o(void 0);
                        return !1;
                      },
                      mouseleave: (e, t) => (o(void 0), !1),
                    },
                  },
                }),
              [],
            ),
          ),
          !s)
        )
          return null;
        const i = s.getAttribute("href");
        return n.createElement(
          fe,
          { top: r, left: e },
          n.createElement("div", { className: ge.Link }, i),
          n.createElement(
            "div",
            { className: ge.LinkHelp },
            (0, g.we)("#UserGameNotes_ClickToOpenLink"),
          ),
        );
      }
      function fe(e) {
        const { top: t, left: r, children: a } = e,
          [s, o] = n.useState(0),
          i = n.useRef();
        n.useLayoutEffect(() => {
          o(i.current.getBoundingClientRect().width);
        }, [t, r, a]);
        const l = { top: `${t}px`, left: `${Math.max(r - s / 2, 12)}px` };
        return n.createElement(
          "div",
          { className: ge.Hover, style: l, ref: i },
          a,
        );
      }
      var be = r(51272),
        _e = r(52038),
        Be = r(56093),
        we = r(61336),
        ye = r(78327),
        ve = r(73309);
      function Me(e) {
        const {
            schemaConfig: t,
            bbcode: r,
            className: a,
            onUpdate: s,
            refView: o,
            onClickURL: i,
            bSpellcheckEnabled: l = !0,
            panelProps: c,
            children: u,
            dataKey: m,
          } = e,
          [d, p] = n.useState(),
          h = n.useRef(),
          f = n.useRef();
        f.current = i || Ee;
        const b = n.useCallback(
          (e) => {
            var r, n;
            if (!e)
              return void (
                null === (r = h.current) ||
                void 0 === r ||
                r.destroy()
              );
            const a = h.current;
            a && a.destroy(),
              (h.current = new $.Lz(e, {
                state:
                  null !== (n = null == a ? void 0 : a.state) && void 0 !== n
                    ? n
                    : V.$t.create({ schema: t.pm_schema }),
                handleClickOn: (...e) =>
                  (function (e, t, r, n, a, s, o, i) {
                    if (i && (o.ctrlKey || 1 == o.button)) {
                      const r = a
                        .resolve(n - s)
                        .marks()
                        .find((t) => t.type == e.marks.link);
                      if (r)
                        return t(r.attrs.href, o.view), o.preventDefault(), !0;
                    }
                    return !1;
                  })(t.pm_schema, f.current, ...e),
                clipboardTextParser: (...e) =>
                  (function (e, t, r, n, a) {
                    let s,
                      o = [];
                    for (; (s = t.match(we.O9)); )
                      s.index > 0 && o.push(e.text(t.substring(0, s.index))),
                        o.push(
                          e.text(s[0], [
                            e.marks.link.create({ href: (0, we.jT)(s[0]) }),
                          ]),
                        ),
                        (t = t.substring(s.index + s[0].length));
                    t.length && o.push(e.text(t));
                    return new H.Ji(H.FK.from(o), r.start(), r.end());
                  })(t.pm_schema, ...e),
              })),
              p(h.current);
          },
          [t],
        );
        n.useEffect(() => {
          d &&
            d.updateState(
              (function (e, t, r) {
                var n;
                const a = (0, K.b6)(),
                  s =
                    null === (n = a.spec.key) || void 0 === n
                      ? void 0
                      : n.get(r),
                  o = [...r.plugins.filter((e) => e != s), a];
                return V.$t.create({ schema: t, doc: e, plugins: o });
              })(
                (function (e, t) {
                  return new J(t.bbcode_dictionary, t.pm_schema).ParseBBCode(e);
                })(r, t),
                t.pm_schema,
                d.state,
              ),
            );
        }, [t, r, d, m]),
          (0, Be.D5)(o, d);
        const {
            refDiv: _,
            onActivate: B,
            onGamepadDirection: w,
          } = (function (e) {
            const t = (0, ye.rP)(),
              r = n.useRef(),
              a = n.useCallback(
                (e) => {
                  (0, de.iv)(e, t.IN_VR);
                },
                [t.IN_VR],
              ),
              s = (0, de.FN)({ onTextEntered: a }, () => {
                var e;
                return null === (e = r.current) || void 0 === e
                  ? void 0
                  : e.ownerDocument.defaultView;
              }),
              o = n.useCallback(() => {
                var t, n;
                if (
                  (s.ShowVirtualKeyboard(),
                  !(null === (t = e.current) || void 0 === t
                    ? void 0
                    : t.hasFocus()))
                ) {
                  null === (n = e.current) || void 0 === n || n.focus();
                  let t = e.current.dom.childNodes;
                  for (let n = 0; n < t.length; ++n) {
                    let a = t[n],
                      s = a.offsetTop;
                    if (void 0 !== s && s >= r.current.scrollTop) {
                      let t = a.getBoundingClientRect();
                      se(e.current, t.left, t.top);
                      break;
                    }
                  }
                }
              }, [s, e]),
              i = n.useCallback((e) => e.currentTarget == e.target, []),
              l = (0, me.ak)(r, null, null, i);
            return { refDiv: r, onActivate: o, onGamepadDirection: l };
          })(h),
          y = (0, Be.Ue)(_, b);
        return n.createElement(
          ie,
          { view: d },
          n.createElement(ue.Z, {
            key: `editordiv_${l}`,
            className: (0, _e.A)(a, ve.Container),
            ref: y,
            spellCheck: l,
            focusable: !0,
            onActivate: B,
            onOKActionDescription: (0, g.we)("#UserGameNotes_Edit"),
            onGamepadDirection: w,
            ...c,
          }),
          n.createElement(le, { onUpdate: s, schema: t.pm_schema }),
          n.createElement(he, null),
          u,
        );
      }
      function Ee(e, t) {
        (0, be.EP)(t, e);
      }
      var ke = r(32754),
        Se = r(27491),
        Ce = r(33645),
        Ne = r.n(Ce);
      function Te(e, t, r = 0) {
        return () => [e, { class: t }, r];
      }
      const Ae = {
          paragraph: {
            content: "inline*",
            group: "block",
            parseDOM: [{ tag: "p" }],
            toDOM: Te("p", (0, _e.A)("pm_paragraph", Ne().Paragraph)),
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
                  `BB_Header${e.attrs.level} ` + Ne()[`Header${e.attrs.level}`],
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
              return ["img", { src: t, alt: r, title: n, class: Ne().Image }];
            },
            bbCode: {
              tag: "img",
              BBArgsToAttrs: (e) => ({ src: e.src }),
              AttrsToBBArgs: (e) => ({ args: { src: e.src } }),
              convertContentToAttr: "src",
            },
          },
          bullet_list: {
            ...te.fF,
            content: "list_item+",
            group: "block",
            toDOM: Te("ul", Ne().List),
            bbCode: { tag: "list" },
          },
          ordered_list: {
            ...te.o8,
            content: "list_item+",
            group: "block",
            toDOM: Te("ol", Ne().OrderedList),
            bbCode: { tag: "olist" },
          },
          list_item: {
            ...te.Aw,
            content: "paragraph block*",
            toDOM: Te("li", Ne().ListItem),
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
              { class: Ne().CodeBlock },
              ["code", { class: Ne().Code }, 0],
            ],
            bbCode: { tag: "code" },
          },
        },
        Re = {
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
            toDOM: Te("b", (0, _e.A)("BB_Bold", Ne().Bold)),
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
            toDOM: Te("i", (0, _e.A)("BB_Italic", Ne().Italic)),
            bbCode: { tag: "i" },
          },
          underline: {
            parseDOM: [{ tag: "u" }, { style: "text-decoration=underline" }],
            toDOM: Te("u", (0, _e.A)("BB_Underline", Ne().Underline)),
            bbCode: { tag: "u" },
          },
          strike: {
            parseDOM: [{ style: "text-decoration=line-through" }],
            toDOM: Te("span", (0, _e.A)("BB_Strike", Ne().Strike)),
            bbCode: { tag: "strike" },
          },
          code: {
            parseDOM: [{ tag: "code" }],
            toDOM: Te("code", (0, _e.A)("BB_Code", Ne().Code)),
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
      const ze = { nodes: { ...Ae }, marks: { ...Re } },
        Oe = new (class {
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
              const { bbCode: a, ...s } = e.nodes[n];
              (t[n] = s), r.set(n, a);
            }
            const a = {};
            for (const t in e.marks) {
              const { bbCode: r, ...s } = e.marks[t];
              (a[t] = s), n.set(t, r);
            }
            (this.m_ProseMirrorSchema = new H.Sj({ nodes: t, marks: a })),
              r.forEach((t, r) => {
                var n;
                const a = this.m_ProseMirrorSchema.nodes[r],
                  s = e.nodes[r],
                  o = Array.isArray(t) ? t : [t];
                let i;
                "list_item+" == s.content
                  ? (i = this.m_ProseMirrorSchema.nodes.list_item)
                  : -1 !=
                      (null === (n = s.content) || void 0 === n
                        ? void 0
                        : n.indexOf("paragraph")) &&
                    (i = this.m_ProseMirrorSchema.nodes.paragraph),
                  o.forEach(
                    ({
                      tag: e,
                      BBArgsToAttrs: t,
                      AttrsToBBArgs: r,
                      convertContentToAttr: n,
                      ...s
                    }) => {
                      this.m_mapBBCodeDictionary.set(e, {
                        Constructor: {
                          node: a,
                          BBArgsToAttrs: t,
                          convertContentToAttr: n,
                          acceptNode: i,
                        },
                        skipFollowingNewline: !0,
                        ...s,
                      });
                    },
                  );
                const { tag: l, AttrsToBBArgs: c } = o[0];
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
                    AttrsToBBArgs: s,
                    convertContentToAttr: o,
                    ...i
                  } = e;
                this.m_mapBBCodeDictionary.set(n, {
                  Constructor: {
                    mark: r,
                    BBArgsToAttrs: a,
                    convertContentToAttr: o,
                  },
                  ...i,
                }),
                  this.m_PMToBBCodeConfig.mapMarks.set(r, {
                    tag: n,
                    AttrsToBBArgs: s,
                  });
              });
          }
        })(ze);
      var Ue = r(67660);
      const Ge =
        r.p +
        "images/applications/community/image_error.svg?v=valveisgoodatcaching";
      function De(e) {
        const { uploadImage: t, nodeType: r, nMaxImageSize: a = Ie } = e;
        return (
          ce(
            n.useMemo(
              () =>
                new V.k_({
                  key: new V.hs(`PMUploadImage_${r.name}`),
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
                              src: Ge,
                              title: (0, g.we)("#UserGameNotes_ImageTooLarge"),
                            }),
                          ];
                          return new H.Ji(H.FK.from(t), 0, 0);
                        }
                        return r;
                      })(r, a, ...e),
                    handlePaste: (e, n, a) => {
                      const s = [];
                      a.content.descendants((e) => {
                        e.type == r &&
                          e.attrs.src.startsWith("data:image") &&
                          s.push(e.attrs.src);
                      }),
                        s.length > 0 &&
                          setTimeout(() => {
                            !(async function (e, t, r) {
                              for (const n of e) {
                                const e = await fetch(n),
                                  a = await e.blob(),
                                  s = (0, Ue.wI)(await a.arrayBuffer());
                                Fe(
                                  n,
                                  await r(e.headers.get("Content-Type"), s),
                                  t,
                                );
                              }
                            })(s, e, t);
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
      function Fe(e, t, r) {
        r.state.doc.descendants((n, a) => {
          if ("image" === n.type.name && n.attrs.src === e) {
            const e = r.state.tr.setNodeAttribute(a, "src", t);
            r.dispatch(e);
          }
        });
      }
      const Ie = 1048576;
      var We = r(72739);
      function xe(e) {
        const {
            visible: t = !0,
            className: r,
            keepMounted: a = !1,
            expandDirection: s = "height",
            msAnimationDuration: o = 250,
            children: i,
          } = e,
          {
            style: l,
            active: c,
            refDiv: u,
          } = (function (e, t = "height", r = 250) {
            const a = n.useRef(),
              s = n.useRef(!0),
              [o, i] = n.useState("idle"),
              [l, c] = n.useState({});
            n.useLayoutEffect(() => {
              s.current ? (s.current = !1) : i("start");
            }, [e]),
              n.useLayoutEffect(() => {
                const r = a.current,
                  n = "height" == t ? "scrollHeight" : "scrollWidth";
                if ("start" == o) {
                  const a = r[n];
                  c((r) => ({
                    [t]: e ? "0px" : `${a}px`,
                    ...r,
                    overflow: "hidden",
                  })),
                    i("active");
                } else if ("active" == o) {
                  r.scrollTop;
                  const a = r[n];
                  c({ overflow: "hidden", [t]: e ? `${a}px` : "0px" });
                  const s = () => {
                    We.unstable_batchedUpdates(() => {
                      c({}), i("idle");
                    });
                  };
                  return (
                    r.addEventListener("transitionend", s),
                    () => {
                      r.removeEventListener("transitionend", s);
                    }
                  );
                }
              }, [o, e]);
            const u = { ...l, transition: `${t} ${r}ms` };
            return { style: u, active: "idle" != o, refDiv: a };
          })(t, s, o);
        return t || c || a
          ? n.createElement("div", { className: r, ref: u, style: l }, i)
          : null;
      }
      var je = r(51240);
      const Le = () => n.useContext(qe);
      function Pe(e) {
        const { view: t, refUpdateToolbar: r, children: a } = e,
          s = n.useRef();
        s.current || (s.current = new je.lu()),
          n.useEffect(
            () => (
              (0, Be.cZ)(r, () => s.current.Dispatch(t)),
              () => (0, Be.cZ)(r, void 0)
            ),
            [t, r],
          );
        const o = n.useMemo(() => ({ callbacks: s.current, view: t }), [t]);
        return t ? n.createElement(qe.Provider, { value: o }, a) : null;
      }
      const qe = n.createContext(void 0);
      function $e() {
        return n.createElement("div", { className: ve.Gap });
      }
      function Ve() {
        return n.createElement("div", { className: ve.Spacer });
      }
      function Ke(e) {
        return n.createElement(
          ue.Z,
          { className: (0, _e.A)(ve.ToolbarRow), "flow-children": "row" },
          e.children,
        );
      }
      function He(e) {
        const { nodeType: t, tooltip: r, attrs: a, children: s } = e,
          { callbacks: o, view: i } = Le(),
          [l, c] = n.useState(() => ne(i.state, t, a)),
          u = n.useCallback((e) => c(ne(e.state, t, a)), [t, a]);
        (0, Be.hL)(o, u);
        const m = n.useMemo(() => X.y_(t, a), [a, t]);
        return n.createElement(Je, {
          command: m,
          tooltip: r,
          toggled: l,
          children: s,
        });
      }
      function Ze(e) {
        const { mark: t, tooltip: r, children: a } = e,
          { callbacks: s, view: o } = Le(),
          [i, l] = n.useState(() => re(o.state, t)),
          c = n.useCallback((e) => l(re(e.state, t)), [t]);
        (0, Be.hL)(s, c);
        const u = n.useMemo(() => X.wh(t), [t]);
        return n.createElement(Je, {
          command: u,
          tooltip: r,
          toggled: i,
          children: a,
        });
      }
      function Qe(e) {
        const { fnEnabledCheck: t, ...r } = e,
          { callbacks: a, view: s } = Le(),
          [o, i] = n.useState(() => t(s)),
          l = n.useCallback((e) => i(t(e)), [t]);
        return (0, Be.hL)(a, l), n.createElement(Je, { ...r, disabled: !o });
      }
      function Je(e) {
        const {
            command: t,
            toggled: r,
            tooltip: a,
            disabled: s,
            children: o,
          } = e,
          { view: i } = Le();
        return n.createElement(
          ke.Gq,
          { toolTipContent: a, bDisabled: !a, direction: "bottom" },
          n.createElement(
            D.$n,
            {
              className: (0, _e.A)(ve.CommandButton, r && ve.Toggled),
              onMouseDown: (e) => {
                e.preventDefault(), t(i.state, i.dispatch, i);
              },
              disabled: !0 === s,
              focusable: !s,
            },
            o,
          ),
        );
      }
      function Xe(e) {
        const {
          onClick: t,
          toggled: r,
          tooltip: a,
          disabled: s,
          children: o,
        } = e;
        return n.createElement(
          ke.Gq,
          { toolTipContent: a, bDisabled: !a, direction: "bottom" },
          n.createElement(
            D.$n,
            {
              className: (0, _e.A)(ve.CommandButton, r && ve.Toggled),
              onMouseDown: (e) => {
                e.preventDefault(), t();
              },
              disabled: !0 === s,
            },
            o,
          ),
        );
      }
      function Ye(e) {
        const { schema: t, children: r } = e,
          { callbacks: a, view: s } = Le(),
          [o, i] = n.useState(() => re(s.state, t.marks.link)),
          l = n.useCallback((e) => i(re(e.state, t.marks.link)), [t]);
        (0, Be.hL)(a, l);
        const [c, u, m] = (0, Be.uD)();
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(
            I.EN,
            { active: c },
            n.createElement(et, {
              schema: t,
              active: c,
              closeModal: m,
              view: s,
            }),
          ),
          n.createElement(
            ke.Gq,
            {
              toolTipContent: "#FormattingToolbar_InsertLink",
              direction: "bottom",
            },
            n.createElement(
              D.$n,
              {
                className: (0, _e.A)(ve.CommandButton, o && ve.Toggled),
                onMouseDown: (e) => {
                  e.preventDefault(), u();
                },
                title: (0, g.we)("#FormattingToolbar_InsertLink"),
              },
              r,
            ),
          ),
        );
      }
      const et = n.memo(function (e) {
        const { schema: t, active: r, closeModal: a, view: s } = e,
          [o, i] = n.useState(""),
          [l, c] = n.useState(""),
          u = n.useRef(),
          m = n.useRef();
        return (
          n.useLayoutEffect(() => {
            if (r) {
              let e = "";
              s.state.selection.empty ||
                (e = s.state.doc.cut(
                  s.state.selection.from,
                  s.state.selection.to,
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
          }, [r, s]),
          n.createElement(
            I.o0,
            {
              onOK: () => {
                s.dispatch(
                  s.state.tr.replaceRangeWith(
                    s.state.selection.from,
                    s.state.selection.to,
                    t.text(o || l, [t.marks.link.create({ href: l })]),
                  ),
                ),
                  s.focus(),
                  a();
              },
              closeModal: a,
              strTitle: (0, g.we)("#FormattingToolbar_InsertLink"),
              strOKButtonText: (0, g.we)("#FormattingToolbar_InsertLink"),
              bOKDisabled: 0 == l.length,
            },
            n.createElement(D.pd, {
              ref: u,
              value: o,
              onChange: (e) => i(e.currentTarget.value),
              label: (0, g.we)("#FormattingToolbar_LinkText"),
            }),
            n.createElement(D.pd, {
              ref: m,
              value: l,
              onChange: (e) => c(e.currentTarget.value),
              label: (0, g.we)("#FormattingToolbar_LinkAddress"),
            }),
          )
        );
      });
      function tt() {
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(
            Qe,
            {
              tooltip: "#FormattingToolbar_Undo",
              command: K.tN,
              fnEnabledCheck: rt,
            },
            n.createElement(F.VnB, null),
          ),
          n.createElement(
            Qe,
            {
              tooltip: "#FormattingToolbar_Redo",
              command: K.ZS,
              fnEnabledCheck: nt,
            },
            n.createElement(F.Bal, null),
          ),
        );
      }
      function rt(e) {
        return K.mk(e.state) > 0;
      }
      function nt(e) {
        return K.mL(e.state) > 0;
      }
      function at(e) {
        const { schema: t } = e;
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(
            Ze,
            { tooltip: "#FormattingToolbar_Bold", mark: t.marks.strong },
            n.createElement(F.l4n, null),
          ),
          n.createElement(
            Ze,
            { tooltip: "#FormattingToolbar_Italic", mark: t.marks.italic },
            n.createElement(F.UKJ, null),
          ),
          n.createElement(
            Ze,
            {
              tooltip: "#FormattingToolbar_Underline",
              mark: t.marks.underline,
            },
            n.createElement(F.Gj3, null),
          ),
          "strike" in t.marks &&
            n.createElement(
              Ze,
              { tooltip: "#FormattingToolbar_Strike", mark: t.marks.strike },
              n.createElement(F.tI4, null),
            ),
          "code" in t.marks &&
            n.createElement(
              Ze,
              { tooltip: "#FormattingToolbar_InlineCode", mark: t.marks.code },
              n.createElement(F.bmT, null),
            ),
        );
      }
      function st(e) {
        const { schema: t } = e;
        return n.createElement(
          He,
          {
            tooltip: "#FormattingToolbar_Paragraph",
            nodeType: t.nodes.paragraph,
          },
          n.createElement(F.iYj, null),
        );
      }
      function ot(e) {
        const { schema: t, maxLevel: r = 1, levels: a } = e,
          s = r + a - 1;
        return n.createElement(
          n.Fragment,
          null,
          r <= 1 &&
            n.createElement(
              He,
              {
                tooltip: "#FormattingToolbar_HeadingLevel1",
                nodeType: t.nodes.heading,
                attrs: { level: 1 },
              },
              n.createElement(F.jRw, null),
            ),
          r <= 2 &&
            s >= 2 &&
            n.createElement(
              He,
              {
                tooltip: "#FormattingToolbar_HeadingLevel2",
                nodeType: t.nodes.heading,
                attrs: { level: 2 },
              },
              n.createElement(F.qOW, null),
            ),
          r <= 3 &&
            s >= 3 &&
            n.createElement(
              He,
              {
                tooltip: "#FormattingToolbar_HeadingLevel3",
                nodeType: t.nodes.heading,
                attrs: { level: 3 },
              },
              n.createElement(F.x7X, null),
            ),
          r <= 4 &&
            s >= 4 &&
            n.createElement(
              He,
              {
                tooltip: "#FormattingToolbar_HeadingLevel4",
                nodeType: t.nodes.heading,
                attrs: { level: 4 },
              },
              n.createElement(F.qzO, null),
            ),
          r <= 5 &&
            s >= 5 &&
            n.createElement(
              He,
              {
                tooltip: "#FormattingToolbar_HeadingLevel5",
                nodeType: t.nodes.heading,
                attrs: { level: 5 },
              },
              n.createElement(F.jXA, null),
            ),
        );
      }
      function it(e) {
        const { schema: t } = e,
          { callbacks: r, view: a } = Le(),
          s = n.useCallback(
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
          [o, i] = n.useState(() => s(a));
        return (
          (0, Be.hL)(
            r,
            n.useCallback((e) => i(s(e)), [s]),
          ),
          n.createElement(
            n.Fragment,
            null,
            n.createElement(
              Je,
              {
                tooltip: "#FormattingToolbar_BulletedList",
                toggled: o,
                command: te.Sd(t.nodes.bullet_list),
              },
              n.createElement(F.JPq, null),
            ),
            n.createElement(
              Je,
              {
                tooltip: "#FormattingToolbar_OutdentList",
                disabled: !o,
                command: te.T2(t.nodes.list_item),
              },
              n.createElement(F.LSz, null),
            ),
            n.createElement(
              Je,
              {
                tooltip: "#FormattingToolbar_IndentList",
                disabled: !o,
                command: te.$B(t.nodes.list_item),
              },
              n.createElement(F.ycU, null),
            ),
          )
        );
      }
      function lt(e) {
        const { schema: t } = e;
        return n.createElement(Ye, { schema: t }, n.createElement(F.YqK, null));
      }
      function ct(e) {
        const { bSpellcheckEnabled: t, setSpellcheckEnabled: r } = e;
        return n.createElement(
          Xe,
          {
            tooltip: t
              ? "#FormattingToolbar_DisableSpellcheck"
              : "#FormattingToolbar_EnableSpellcheck",
            toggled: t,
            onClick: () => r(!t),
          },
          n.createElement(F.DEV, null),
        );
      }
      var ut = r(76011);
      function mt(e) {
        const {
            schema: t,
            view: r,
            refUpdateToolbar: a,
            className: s,
            bSpellcheckEnabled: o,
            setSpellcheckEnabled: i,
          } = e,
          [l, c] = (0, ut.SP)("FormattingToolbar_Expanded", !1);
        return n.createElement(
          Pe,
          { refUpdateToolbar: a, view: r },
          n.createElement(
            "div",
            { className: (0, _e.A)(ve.Toolbar, s) },
            n.createElement(
              Ke,
              null,
              n.createElement(tt, null),
              n.createElement($e, null),
              n.createElement(at, { schema: t }),
              n.createElement(Ve, null),
              n.createElement(
                Xe,
                {
                  onClick: () => c(!l),
                  tooltip: "#FormattingToolbar_ExpandOptions",
                },
                n.createElement(F.cLJ, { direction: l ? "up" : "down" }),
              ),
            ),
            n.createElement(
              xe,
              { visible: l },
              n.createElement(
                Ke,
                null,
                n.createElement(st, { schema: t }),
                n.createElement(ot, { schema: t, levels: 5 }),
                n.createElement(
                  He,
                  {
                    nodeType: t.nodes.code_block,
                    tooltip: (0, g.we)("#FormattingToolbar_CodeBlock"),
                  },
                  n.createElement(F.kNE, null),
                ),
                n.createElement($e, null),
                n.createElement(it, { schema: t }),
                n.createElement($e, null),
                n.createElement(lt, { schema: t }),
                n.createElement(Ve, null),
                i &&
                  n.createElement(ct, {
                    bSpellcheckEnabled: o,
                    setSpellcheckEnabled: i,
                  }),
              ),
            ),
          ),
        );
      }
      const dt = 15;
      function pt(e) {
        const { note: t } = e,
          [r, a] = n.useState(!1),
          [s, o] = n.useState(),
          l = n.useRef(),
          m = n.useRef(),
          h = n.useRef(t.content),
          f = n.useRef(!1),
          B = n.useContext(u).onClickURL,
          w =
            null === (y = n.useContext(u).bSpellcheckEnabled) ||
            void 0 === y ||
            y;
        var y;
        const v = n.useContext(u).setSpellcheckEnabled,
          M = (function (e) {
            const t = p();
            return n.useCallback(
              async (r, n) => {
                const a = new Uint8Array(n),
                  s = await t.UploadImage(`notes_${e}_images/`, r, a);
                return Promise.resolve("/gamenotes/" + s);
              },
              [t, e],
            );
          })(t.appid),
          E = (0, ye.Qn)();
        h.current == t.content || f.current || (h.current = t.content);
        const k = h.current,
          S = (function () {
            const e = (0, i.useQueryClient)(),
              t = p();
            return (0, i.useMutation)(
              (e) => t.SaveGameNote(e.note, e.title, e.bbcode),
              {
                onMutate(t) {
                  const r = { ...t.note, title: t.title, content: t.bbcode };
                  return (
                    _(e, c(t.note), (e) =>
                      e.map((e) => (e.id == r.id ? r : e)),
                    ),
                    console.log(r),
                    r
                  );
                },
                onSuccess(t, r, n) {
                  console.log(n, t),
                    _(e, c(r.note), (e) =>
                      e.map((e) =>
                        e.id === n.id ? { ...e, id: t, not_persisted: !1 } : e,
                      ),
                    );
                },
              },
            );
          })(),
          C = n.useCallback((e, t) => {
            l.current && l.current(),
              t.doc &&
                t.doc != e.state.doc &&
                (f.current ||
                  ((f.current = !0),
                  G.y.ReportTrackedAction("/GameNotes/NoteModified")),
                (m.current = () => ({
                  title: bt(e.state.doc),
                  bbcode: j(e.state.doc, Oe),
                })),
                a(!0));
          }, []);
        n.useEffect(() => {
          if (!r) return;
          let e = m.current;
          const n = () => {
              if (e) {
                const { title: r, bbcode: n } = e();
                (t.not_persisted && !(null == n ? void 0 : n.length)) ||
                  S.mutate({ note: t, title: r, bbcode: n }),
                  a(!1);
              }
              (e = void 0), (m.current = void 0);
            },
            s = window.setTimeout(n, 1e3 * dt);
          return () => {
            window.clearTimeout(s), n();
          };
        }, [S, r, t]),
          n.useEffect(() => {
            s && s.focus();
          }, [s]);
        const N = d(),
          T = b(t, N),
          A = {
            onSecondaryButton: () => T.mutate(),
            onSecondaryActionDescription: (0, g.we)(
              "#UserGameNotes_DeleteNote",
            ),
          };
        return n.createElement(
          "div",
          { className: Se.NoteEditorArea },
          !E &&
            n.createElement(mt, {
              schema: Oe.pm_schema,
              view: s,
              refUpdateToolbar: l,
              className: Se.Toolbar,
              bSpellcheckEnabled: w,
              setSpellcheckEnabled: v,
            }),
          n.createElement(
            Me,
            {
              schemaConfig: Oe,
              className: Se.EditorInput,
              bbcode: k,
              onUpdate: C,
              refView: o,
              onClickURL: B,
              bSpellcheckEnabled: w,
              panelProps: A,
            },
            n.createElement(De, {
              uploadImage: M,
              nodeType: Oe.pm_schema.nodes.image,
            }),
          ),
          !E && n.createElement(gt, { note: t, bDirty: r }),
        );
      }
      function gt(e) {
        const { note: t, bDirty: r } = e,
          [a, s, o] = (0, Be.uD)(!1),
          i = "single" == n.useContext(u).mode,
          l = d(),
          c = b(t, l),
          m = n.useCallback(() => {
            !r && t.not_persisted ? c.mutate() : s();
          }, [r, t, c, s]);
        return n.createElement(
          "div",
          { className: Se.NoteActions },
          a && n.createElement(ft, { note: t, closeModal: o, deleteNote: c }),
          n.createElement(
            ke.he,
            { toolTipContent: "#UserGameNotes_DeleteNote", direction: "top" },
            n.createElement(D.$n, { onClick: m }, n.createElement(F.lMJ, null)),
          ),
          i && n.createElement(ht, { bDirty: r }),
        );
      }
      function ht(e) {
        const { bDirty: t } = e,
          r = d();
        return t
          ? n.createElement(
              D.jn,
              { onClick: () => r(), className: Se.CloseWindowButton },
              (0, g.we)("#Button_SaveAndClose"),
            )
          : n.createElement(
              D.$n,
              { onClick: () => r(), className: Se.CloseWindowButton },
              (0, g.we)("#Button_Close"),
            );
      }
      function ft(e) {
        const { note: t, closeModal: r, deleteNote: a } = e;
        return n.createElement(
          I.EN,
          { active: !0 },
          n.createElement(I.o0, {
            strTitle: (0, g.we)("#UserGameNotes_DeleteNote"),
            strDescription: (0, g.we)("#UserGameNotes_PromptDelete"),
            onOK: () => a.mutate(),
            bOKDisabled: a.isLoading,
            strOKButtonText: (0, g.we)("#Button_Delete"),
            closeModal: r,
          }),
        );
      }
      function bt(e) {
        let t = "";
        for (let r = 0; r < e.content.childCount; r++) {
          const n = e.content.child(r);
          if (n.isText) t += n.text;
          else {
            if (((t = t.trim()), t.length > 4)) return t;
            if (((t = bt(n)), t.length > 4)) return t;
          }
        }
        return t.trim();
      }
      function _t() {
        const e = (0, a.W5)(),
          t = B(
            "appid" in e.params && Number(e.params.appid),
            "shortcut_name" in e.params && e.params.shortcut_name,
          );
        let r = e.params.noteid;
        const s = (0, a.W6)(),
          o = (function (e) {
            const t = (0, i.useQueryClient)(),
              r = p();
            return n.useCallback(() => {
              const n = (0, g.we)("#UserGameNotes_UntitledNote_Title"),
                a = r.NewNote(e, n);
              return _(t, e, (e) => [...e, a]), a.id;
            }, [t, r, e]);
          })(t),
          { data: l, isLoading: c } = f(t);
        let u;
        l && r && (u = l.find((e) => e.id === r)),
          n.useLayoutEffect(() => {
            !l ||
              (r && l.find((e) => e.id === r)) ||
              (l.length > 0 && l[0].id ? wt(s, t, l[0].id) : wt(s, t, o()));
          }, [s, t, r, l, o]);
        const m = n.createElement(
          ke.he,
          { toolTipContent: "#UserGameNotes_NewNote", direction: "top" },
          n.createElement(
            D.$n,
            {
              className: Se.NewNoteButton,
              onClick: () => {
                const e = o();
                wt(s, t, e);
              },
            },
            n.createElement(F.qY3, null),
          ),
        );
        return l
          ? n.createElement(Bt, {
              noteParent: t,
              notes: l,
              activeNoteID: null == u ? void 0 : u.id,
              actions: m,
            })
          : null;
      }
      function Bt(e) {
        const { noteParent: t, notes: r, activeNoteID: s, actions: o } = e,
          [i, l] = (0, ut.SP)("NotesListCollapsed", !1),
          c = n.useContext(u).bPinnedView,
          m = (0, ye.Qn)(),
          d = r.map((e) => {
            var t;
            return {
              title:
                (null === (t = e.title) || void 0 === t ? void 0 : t.length) > 0
                  ? e.title
                  : (0, g.we)("#UserGameNotes_Untitled"),
              identifier: e.id,
              content: n.createElement(pt, { note: e }),
              pageClassName: Se.NotePage,
              hideTitle: !0,
            };
          }),
          p = (0, a.W6)(),
          h = n.useCallback((e) => wt(p, t, e), [p, t]);
        return n.createElement(D.Bv, {
          title: (0, g.we)("#UserGameNotes_NotesList"),
          pages: d,
          className: (0, _e.A)(Se.NotesPagedSettings, c && Se.PinnedView),
          page: s,
          onPageRequested: h,
          bottomControls: o,
          hideList: i,
          toggleHideList: c || m ? void 0 : () => l(!i),
        });
      }
      function wt(e, t, r) {
        let n;
        (n =
          "appid" in t
            ? s.AppNotes(t.appid, r)
            : s.ShortcutNotes(t.shortcut, r)),
          e.replace(n, e.location.state);
      }
      var yt = r(80613),
        vt = r(89068);
      const Mt = yt.Message;
      class Et extends Mt {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Et.prototype.id || vt.Sg(Et.M()),
            Mt.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Et.sm_m ||
              (Et.sm_m = {
                proto: Et,
                fields: {
                  id: { n: 1, br: vt.qM.readString, bw: vt.gp.writeString },
                  appid: { n: 2, br: vt.qM.readUint32, bw: vt.gp.writeUint32 },
                  shortcut_name: {
                    n: 3,
                    br: vt.qM.readString,
                    bw: vt.gp.writeString,
                  },
                  shortcutid: {
                    n: 4,
                    br: vt.qM.readUint32,
                    bw: vt.gp.writeUint32,
                  },
                  ordinal: {
                    n: 5,
                    br: vt.qM.readUint32,
                    bw: vt.gp.writeUint32,
                  },
                  time_created: {
                    n: 6,
                    br: vt.qM.readUint32,
                    bw: vt.gp.writeUint32,
                  },
                  time_modified: {
                    n: 7,
                    br: vt.qM.readUint32,
                    bw: vt.gp.writeUint32,
                  },
                  title: { n: 8, br: vt.qM.readString, bw: vt.gp.writeString },
                  content: {
                    n: 9,
                    br: vt.qM.readString,
                    bw: vt.gp.writeString,
                  },
                },
              }),
            Et.sm_m
          );
        }
        static MBF() {
          return Et.sm_mbf || (Et.sm_mbf = vt.w0(Et.M())), Et.sm_mbf;
        }
        toObject(e = !1) {
          return Et.toObject(e, this);
        }
        static toObject(e, t) {
          return vt.BT(Et.M(), e, t);
        }
        static fromObject(e) {
          return vt.Uq(Et.M(), e);
        }
        static deserializeBinary(e) {
          let t = new yt.BinaryReader(e),
            r = new Et();
          return Et.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return vt.zj(Et.MBF(), e, t);
        }
        serializeBinary() {
          var e = new yt.BinaryWriter();
          return Et.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          vt.i0(Et.M(), e, t);
        }
        serializeBase64String() {
          var e = new yt.BinaryWriter();
          return Et.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNote";
        }
      }
      class kt extends Mt {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            kt.prototype.appid || vt.Sg(kt.M()),
            Mt.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            kt.sm_m ||
              (kt.sm_m = {
                proto: kt,
                fields: {
                  appid: { n: 1, br: vt.qM.readUint32, bw: vt.gp.writeUint32 },
                  shortcut_name: {
                    n: 2,
                    br: vt.qM.readString,
                    bw: vt.gp.writeString,
                  },
                  shortcutid: {
                    n: 3,
                    br: vt.qM.readUint32,
                    bw: vt.gp.writeUint32,
                  },
                  include_content: {
                    n: 4,
                    br: vt.qM.readBool,
                    bw: vt.gp.writeBool,
                  },
                },
              }),
            kt.sm_m
          );
        }
        static MBF() {
          return kt.sm_mbf || (kt.sm_mbf = vt.w0(kt.M())), kt.sm_mbf;
        }
        toObject(e = !1) {
          return kt.toObject(e, this);
        }
        static toObject(e, t) {
          return vt.BT(kt.M(), e, t);
        }
        static fromObject(e) {
          return vt.Uq(kt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new yt.BinaryReader(e),
            r = new kt();
          return kt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return vt.zj(kt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new yt.BinaryWriter();
          return kt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          vt.i0(kt.M(), e, t);
        }
        serializeBase64String() {
          var e = new yt.BinaryWriter();
          return kt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_GetNotesForGame_Request";
        }
      }
      class St extends Mt {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            St.prototype.notes || vt.Sg(St.M()),
            Mt.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            St.sm_m ||
              (St.sm_m = {
                proto: St,
                fields: { notes: { n: 1, c: Et, r: !0, q: !0 } },
              }),
            St.sm_m
          );
        }
        static MBF() {
          return St.sm_mbf || (St.sm_mbf = vt.w0(St.M())), St.sm_mbf;
        }
        toObject(e = !1) {
          return St.toObject(e, this);
        }
        static toObject(e, t) {
          return vt.BT(St.M(), e, t);
        }
        static fromObject(e) {
          return vt.Uq(St.M(), e);
        }
        static deserializeBinary(e) {
          let t = new yt.BinaryReader(e),
            r = new St();
          return St.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return vt.zj(St.MBF(), e, t);
        }
        serializeBinary() {
          var e = new yt.BinaryWriter();
          return St.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          vt.i0(St.M(), e, t);
        }
        serializeBase64String() {
          var e = new yt.BinaryWriter();
          return St.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_GetNotesForGame_Response";
        }
      }
      class Ct extends Mt {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ct.prototype.appid || vt.Sg(Ct.M()),
            Mt.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ct.sm_m ||
              (Ct.sm_m = {
                proto: Ct,
                fields: {
                  appid: { n: 1, br: vt.qM.readUint32, bw: vt.gp.writeUint32 },
                  shortcut_name: {
                    n: 2,
                    br: vt.qM.readString,
                    bw: vt.gp.writeString,
                  },
                  shortcutid: {
                    n: 3,
                    br: vt.qM.readUint32,
                    bw: vt.gp.writeUint32,
                  },
                  note_id: {
                    n: 4,
                    br: vt.qM.readString,
                    bw: vt.gp.writeString,
                  },
                  create_new: { n: 5, br: vt.qM.readBool, bw: vt.gp.writeBool },
                  title: { n: 6, br: vt.qM.readString, bw: vt.gp.writeString },
                  content: {
                    n: 7,
                    br: vt.qM.readString,
                    bw: vt.gp.writeString,
                  },
                },
              }),
            Ct.sm_m
          );
        }
        static MBF() {
          return Ct.sm_mbf || (Ct.sm_mbf = vt.w0(Ct.M())), Ct.sm_mbf;
        }
        toObject(e = !1) {
          return Ct.toObject(e, this);
        }
        static toObject(e, t) {
          return vt.BT(Ct.M(), e, t);
        }
        static fromObject(e) {
          return vt.Uq(Ct.M(), e);
        }
        static deserializeBinary(e) {
          let t = new yt.BinaryReader(e),
            r = new Ct();
          return Ct.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return vt.zj(Ct.MBF(), e, t);
        }
        serializeBinary() {
          var e = new yt.BinaryWriter();
          return Ct.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          vt.i0(Ct.M(), e, t);
        }
        serializeBase64String() {
          var e = new yt.BinaryWriter();
          return Ct.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_SaveNote_Request";
        }
      }
      class Nt extends Mt {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Nt.prototype.note_id || vt.Sg(Nt.M()),
            Mt.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Nt.sm_m ||
              (Nt.sm_m = {
                proto: Nt,
                fields: {
                  note_id: {
                    n: 1,
                    br: vt.qM.readString,
                    bw: vt.gp.writeString,
                  },
                },
              }),
            Nt.sm_m
          );
        }
        static MBF() {
          return Nt.sm_mbf || (Nt.sm_mbf = vt.w0(Nt.M())), Nt.sm_mbf;
        }
        toObject(e = !1) {
          return Nt.toObject(e, this);
        }
        static toObject(e, t) {
          return vt.BT(Nt.M(), e, t);
        }
        static fromObject(e) {
          return vt.Uq(Nt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new yt.BinaryReader(e),
            r = new Nt();
          return Nt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return vt.zj(Nt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new yt.BinaryWriter();
          return Nt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          vt.i0(Nt.M(), e, t);
        }
        serializeBase64String() {
          var e = new yt.BinaryWriter();
          return Nt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_SaveNote_Response";
        }
      }
      class Tt extends Mt {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Tt.prototype.appid || vt.Sg(Tt.M()),
            Mt.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Tt.sm_m ||
              (Tt.sm_m = {
                proto: Tt,
                fields: {
                  appid: { n: 1, br: vt.qM.readUint32, bw: vt.gp.writeUint32 },
                  shortcut_name: {
                    n: 2,
                    br: vt.qM.readString,
                    bw: vt.gp.writeString,
                  },
                  shortcutid: {
                    n: 3,
                    br: vt.qM.readUint32,
                    bw: vt.gp.writeUint32,
                  },
                  note_id: {
                    n: 4,
                    br: vt.qM.readString,
                    bw: vt.gp.writeString,
                  },
                },
              }),
            Tt.sm_m
          );
        }
        static MBF() {
          return Tt.sm_mbf || (Tt.sm_mbf = vt.w0(Tt.M())), Tt.sm_mbf;
        }
        toObject(e = !1) {
          return Tt.toObject(e, this);
        }
        static toObject(e, t) {
          return vt.BT(Tt.M(), e, t);
        }
        static fromObject(e) {
          return vt.Uq(Tt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new yt.BinaryReader(e),
            r = new Tt();
          return Tt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return vt.zj(Tt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new yt.BinaryWriter();
          return Tt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          vt.i0(Tt.M(), e, t);
        }
        serializeBase64String() {
          var e = new yt.BinaryWriter();
          return Tt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_DeleteNote_Request";
        }
      }
      class At extends Mt {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), Mt.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return At.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new At();
        }
        static deserializeBinary(e) {
          let t = new yt.BinaryReader(e),
            r = new At();
          return At.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new yt.BinaryWriter();
          return At.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new yt.BinaryWriter();
          return At.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_DeleteNote_Response";
        }
      }
      class Rt extends Mt {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), Mt.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Rt.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Rt();
        }
        static deserializeBinary(e) {
          let t = new yt.BinaryReader(e),
            r = new Rt();
          return Rt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new yt.BinaryWriter();
          return Rt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new yt.BinaryWriter();
          return Rt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_GetGamesWithNotes_Request";
        }
      }
      class zt extends Mt {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            zt.prototype.games_with_notes || vt.Sg(zt.M()),
            Mt.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            zt.sm_m ||
              (zt.sm_m = {
                proto: zt,
                fields: { games_with_notes: { n: 1, c: Ot, r: !0, q: !0 } },
              }),
            zt.sm_m
          );
        }
        static MBF() {
          return zt.sm_mbf || (zt.sm_mbf = vt.w0(zt.M())), zt.sm_mbf;
        }
        toObject(e = !1) {
          return zt.toObject(e, this);
        }
        static toObject(e, t) {
          return vt.BT(zt.M(), e, t);
        }
        static fromObject(e) {
          return vt.Uq(zt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new yt.BinaryReader(e),
            r = new zt();
          return zt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return vt.zj(zt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new yt.BinaryWriter();
          return zt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          vt.i0(zt.M(), e, t);
        }
        serializeBase64String() {
          var e = new yt.BinaryWriter();
          return zt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_GetGamesWithNotes_Response";
        }
      }
      class Ot extends Mt {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ot.prototype.appid || vt.Sg(Ot.M()),
            Mt.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ot.sm_m ||
              (Ot.sm_m = {
                proto: Ot,
                fields: {
                  appid: { n: 1, br: vt.qM.readUint32, bw: vt.gp.writeUint32 },
                  shortcutid: {
                    n: 2,
                    br: vt.qM.readUint32,
                    bw: vt.gp.writeUint32,
                  },
                  shortcut_name: {
                    n: 3,
                    br: vt.qM.readString,
                    bw: vt.gp.writeString,
                  },
                  last_modified: {
                    n: 4,
                    br: vt.qM.readUint32,
                    bw: vt.gp.writeUint32,
                  },
                  note_count: {
                    n: 5,
                    br: vt.qM.readUint32,
                    bw: vt.gp.writeUint32,
                  },
                },
              }),
            Ot.sm_m
          );
        }
        static MBF() {
          return Ot.sm_mbf || (Ot.sm_mbf = vt.w0(Ot.M())), Ot.sm_mbf;
        }
        toObject(e = !1) {
          return Ot.toObject(e, this);
        }
        static toObject(e, t) {
          return vt.BT(Ot.M(), e, t);
        }
        static fromObject(e) {
          return vt.Uq(Ot.M(), e);
        }
        static deserializeBinary(e) {
          let t = new yt.BinaryReader(e),
            r = new Ot();
          return Ot.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return vt.zj(Ot.MBF(), e, t);
        }
        serializeBinary() {
          var e = new yt.BinaryWriter();
          return Ot.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          vt.i0(Ot.M(), e, t);
        }
        serializeBase64String() {
          var e = new yt.BinaryWriter();
          return Ot.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_GetGamesWithNotes_Response_GameWithNotes";
        }
      }
      var Ut;
      !(function (e) {
        (e.GetNotesForGame = function (e, t) {
          return e.SendMsg(
            "UserGameNotes.GetNotesForGame#1",
            (0, v.I8)(kt, t),
            St,
            { ePrivilege: 1 },
          );
        }),
          (e.SaveNote = function (e, t) {
            return e.SendMsg("UserGameNotes.SaveNote#1", (0, v.I8)(Ct, t), Nt, {
              ePrivilege: 1,
            });
          }),
          (e.DeleteNote = function (e, t) {
            return e.SendMsg(
              "UserGameNotes.DeleteNote#1",
              (0, v.I8)(Tt, t),
              At,
              { ePrivilege: 1 },
            );
          }),
          (e.GetGamesWithNotes = function (e, t) {
            return e.SendMsg(
              "UserGameNotes.GetGamesWithNotes#1",
              (0, v.I8)(Rt, t),
              zt,
              { ePrivilege: 1 },
            );
          });
      })(Ut || (Ut = {}));
      class Gt {
        constructor(e) {
          this.m_SteamInterface = e;
        }
        async GetGamesWithNotes() {
          const e = v.w.Init(Rt);
          return (
            await Ut.GetGamesWithNotes(
              this.m_SteamInterface.GetServiceTransport(),
              e,
            )
          )
            .Body()
            .toObject().games_with_notes;
        }
        async GetGameNotesList(e, t) {
          const r = v.w.Init(kt);
          this.SetParentOnRequest(r, e), r.Body().set_include_content(t);
          const n = await Ut.GetNotesForGame(
            this.m_SteamInterface.GetServiceTransport(),
            r,
          );
          return n.Body().notes().length
            ? n.Body().toObject().notes
            : [this.NewNote(e, "New Note")];
        }
        async SaveGameNote(e, t, r) {
          const n = v.w.Init(Ct);
          e.not_persisted
            ? n.Body().set_create_new(!0)
            : n.Body().set_note_id(e.id),
            e.appid
              ? n.Body().set_appid(e.appid)
              : n.Body().set_shortcut_name(e.shortcut_name),
            n.Body().set_title(t),
            n.Body().set_content(r);
          const a = await Ut.SaveNote(
            this.m_SteamInterface.GetServiceTransport(),
            n,
          );
          if (!a.BSuccess()) throw a.GetErrorMessage();
          return a.Body().note_id();
        }
        async DeleteGameNote(e, t) {
          const r = v.w.Init(Tt);
          this.SetParentOnRequest(r, e), r.Body().set_note_id(t);
          const n = await Ut.DeleteNote(
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
              id: "temp_" + Gt.sm_lastNoteID++,
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
      function Dt(e) {
        const t = (0, E.TR)(),
          [r] = n.useState(() => new Gt(t));
        return n.createElement(
          m,
          { mode: "page", store: r },
          n.createElement(
            a.dO,
            null,
            n.createElement(a.qh, { path: s.List() }, n.createElement(O, null)),
            n.createElement(
              a.qh,
              { path: s.AppNotes(":appid", ":noteid?") },
              n.createElement(_t, null),
            ),
            n.createElement(
              a.qh,
              null,
              n.createElement(a.rd, { to: `${s.List()}` }),
            ),
          ),
        );
      }
      Gt.sm_lastNoteID = 0;
    },
    61788: (e, t, r) => {
      "use strict";
      r.d(t, { y: () => d });
      var n = r(34629),
        a = r(56545),
        s = r(59134),
        o = r(60778),
        i = r(14771),
        l = r(10333);
      const c = new o.wd("ReactUsageReporting").Debug,
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
          const e = a.w.Init(s.bc);
          e.Body().set_product(this.m_strProduct),
            e.Body().set_version(this.m_strVersion),
            this.m_mapRoutes.forEach((t, r) => {
              let n = new s.N4();
              n.set_route(r), n.set_count(t), e.Body().add_routes(n);
            }),
            this.m_mapComponents.forEach((t, r) => {
              let n = new s.Zd();
              n.set_component(r), n.set_count(t), e.Body().add_components(n);
            }),
            this.m_mapActions.forEach((t, r) => {
              let n = new s.Ys();
              n.set_action(r), n.set_count(t), e.Body().add_actions(n);
            }),
            this.m_mapRoutes.clear(),
            this.m_mapComponents.clear(),
            this.m_mapActions.clear(),
            (this.m_reportCount = 0),
            s._5.ReportReactUsage(this.m_transport, e);
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
