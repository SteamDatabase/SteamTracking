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
        CommandButton: "_1dEi5qzSDdPOzoOQXYbNLN",
        Toggled: "_1Iw5xoXQXfmRjgjWTKbm_G",
        Gap: "_19z0fjj7o0n9vAjVjvYZNU",
        Spacer: "_2m1BBIp5Ewr1TI-BkqFGLM",
        ExpandButton: "_1hoxTW8l-39xqcw7WGIlvL",
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
      var i = r(17083),
        s = r(31380);
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
            bPinnedView: o,
            onClickURL: i,
            bSpellcheckEnabled: s = !0,
            setSpellcheckEnabled: l,
            children: c,
          } = e,
          m = n.useMemo(
            () => ({
              mode: t,
              store: r,
              closePopup: a,
              bPinnedView: o,
              onClickURL: i,
              bSpellcheckEnabled: s,
              setSpellcheckEnabled: l,
            }),
            [t, r, a, o, i, s, l],
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
        return (0, s.useQuery)(
          h(e),
          async () => (await t.GetGameNotesList(e, !0)) || [],
          { enabled: !!e },
        );
      }
      function b(e, t) {
        const r = (0, s.useQueryClient)(),
          n = p(),
          a = e.id;
        return (0, s.useMutation)(
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
        E = r(37403),
        M = r(23809),
        T = r(30470),
        C = r(22837);
      let S;
      const k = 864e5;
      function N(e) {
        return `appinfo_${e}_${T.TS.LANGUAGE}`;
      }
      function R(e) {
        return Boolean(e && Date.now() - e.timeCached < k);
      }
      function A(e) {
        const t = (0, M.KV)(),
          r = (0, M.rX)();
        return (0, s.useQuery)(
          ["appinfo", e],
          async () =>
            (function (e, t) {
              return (
                S ||
                  (S = new (y())(
                    async (r) => {
                      const n = new Map();
                      (await Promise.all(r.map((e) => t.GetObject(N(e)))))
                        .filter(R)
                        .forEach(({ value: e }) => n.set(e.appid, e));
                      const a = r.slice().filter((e) => !n.has(e));
                      if (a.length) {
                        const r = v.w.Init(E._z);
                        r.Body().set_language((0, C.sf)(T.TS.LANGUAGE)),
                          r.Body().set_appids(a);
                        const o = await E.BE.GetApps(e, r);
                        if (1 != o.GetEResult()) throw o.GetErrorMessage();
                        o.Body()
                          .toObject()
                          .apps.forEach((e) => {
                            t.StoreObject(N(e.appid), {
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
                S
              );
            })(t, r).load(e),
          { staleTime: k, enabled: !!e },
        ).data;
      }
      var z = r(22797);
      function O() {
        const { data: e, isLoading: t } = (function () {
          const e = p();
          return (0, s.useQuery)(["GameNotes", "GamesWithNotes"], () =>
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
          r = A(t.appid);
        return n.createElement(
          "li",
          null,
          n.createElement(
            i.N_,
            { to: o.AppNotes(t.appid) },
            null == r ? void 0 : r.name,
          ),
        );
      }
      var G = r(61788),
        D = r(7068),
        I = r(4869),
        F = r(21273),
        x = r(49693),
        W = r(81393);
      function j(e, t) {
        return L(t.pm_schema, t.pm_to_bbcode_config, e);
      }
      function L(e, t, r) {
        let n = r.marks,
          a = "";
        const o = t.mapNodes.get(r.type),
          { tag: i, args: s } = q(o, r.attrs);
        return (
          i && (a += (0, x.CS)(i, s)),
          r.content.forEach((r) => {
            ([a, n] = P(t, n, r.marks, a)),
              ([a, n] = (function (e, t, r, n) {
                let a;
                for (const o of r)
                  if (-1 === t.indexOf(o)) {
                    a || (a = t.slice());
                    const r = e.mapMarks.get(o.type);
                    if (((0, W.w)(r, "mark missing bbtag"), r)) {
                      a.push(o);
                      const { args: e, tag: t } = q(r, o.attrs);
                      n += (0, x.CS)(t, e || {});
                    }
                  }
                return [n, null != a ? a : t];
              })(t, n, r.marks, a)),
              r.type.isText
                ? (a += (0, x.vE)(r.text || ""))
                : r.type == e.nodes.hard_break
                  ? (a += "\n")
                  : (a += L(e, t, r));
          }),
          ([a] = P(t, n, [], a)),
          i && (a += (0, x.op)(i)),
          a
        );
      }
      function P(e, t, r, n) {
        const a = [];
        for (const e of t) -1 === r.indexOf(e) && a.push(e);
        if (!a.length) return [n, t];
        const o = t.slice();
        for (
          ;
          a.length && ((0, W.w)(o.length, "no marks left to close"), o.length);

        ) {
          const t = o.pop(),
            r = e.mapMarks.get(t.type),
            { tag: i } = q(r, t.attrs);
          n += (0, x.op)(i);
          const s = a.indexOf(t);
          -1 != s && a.splice(s, 1);
        }
        return [n, o];
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
              this.m_nodes.push(this.m_schema.nodes.hard_break.create()),
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
      function J(e, t, ...r) {
        let n = e.BBArgsToAttrs ? e.BBArgsToAttrs(t.args || {}) : void 0;
        if (
          (!("convertContentToAttr" in e) ||
            !e.convertContentToAttr ||
            (n && n[e.convertContentToAttr]) ||
            ((n = { ...(n || {}), [e.convertContentToAttr]: Q(r) }), (r = [])),
          "node" in e)
        ) {
          if (!e.node.validContent(H.FK.from(r)) && e.acceptNode) {
            let t = r.filter((t) => t.type == e.acceptNode);
            t.length || (t = [e.acceptNode.create(void 0, r)]), (r = t);
          }
          return e.node.create(n, r);
        }
        return r.map((t) => t.mark([...t.marks, e.mark.create(n)]));
      }
      class X extends x.Al {
        constructor(e, t) {
          super(e, () => new Z(t)), (this.m_schema = t);
        }
        ParseBBCode(e) {
          const t = this.Parse(e, J, !0);
          return this.m_schema.topNodeType.create(
            {},
            (function (e, t) {
              const r = [];
              let n = [];
              for (const a of t)
                if (a.isText) n.push(a);
                else {
                  const t = a.type == e.nodes.hard_break;
                  n.length
                    ? (r.push(e.nodes.paragraph.create({}, n)),
                      (n = []),
                      t || r.push(a))
                    : t
                      ? r.push(e.nodes.paragraph.create())
                      : r.push(a);
                }
              return r;
            })(this.m_schema, t),
          );
        }
      }
      var Y = r(12362),
        ee = r(7502),
        te = r(79216),
        re = r(4188);
      function ne(e, t) {
        const { from: r, $from: n, to: a, empty: o } = e.selection;
        return o
          ? !!t.isInSet(e.storedMarks || n.marks())
          : e.doc.rangeHasMark(r, a, t);
      }
      function ae(e, t, r) {
        let { $from: n, to: a, node: o } = e.selection;
        return !o && a <= n.end() && (o = n.parent), !!o && o.hasMarkup(t, r);
      }
      function oe(e, t, r = {}) {
        return new te.fV(e, (e, n, a, o) => {
          const i = r instanceof Function ? r(n) : r,
            s = e.tr;
          if (n[1]) {
            const e = a + n[0].indexOf(n[1]),
              t = e + n[1].length;
            t < o && s.delete(t, o),
              e > a && s.delete(a, e),
              (o = a + n[1].length);
          }
          return s.addMark(a, o, t.create(i)), s.removeStoredMark(t), s;
        });
      }
      function ie(e, t, r) {
        const n = { left: t, top: r },
          a = e.posAtCoords(n);
        if (null == a ? void 0 : a.pos) {
          const t = e.state.doc.resolve(a.pos);
          e.dispatch(e.state.tr.setSelection(V.U3.near(t)));
        }
      }
      const se = n.createContext(null);
      function le(e) {
        return n.createElement(se.Provider, { value: e.view }, e.children);
      }
      function ce(e) {
        const { schema: t, onUpdate: r } = e,
          a = n.useRef(r);
        return (
          (a.current = r),
          ue(
            n.useMemo(
              () =>
                new V.k_({
                  view: (e) => ({ update: (...e) => a.current(...e) }),
                }),
              [],
            ),
          ),
          ue(
            n.useMemo(
              () =>
                (function (e) {
                  const t = (0, Y.st)(
                    Y.I$,
                    (t, r) => (
                      r &&
                        r(
                          t.tr
                            .replaceSelectionWith(e.nodes.hard_break.create())
                            .scrollIntoView(),
                        ),
                      !0
                    ),
                  );
                  return (0, ee.w)({
                    "Mod-z": K.tN,
                    "Mod-y": K.ZS,
                    Backspace: te.dv,
                    "Mod-Enter": t,
                    "Shift-Enter": t,
                    "Mod-b": (0, Y.wh)(e.marks.strong),
                    "Mod-i": (0, Y.wh)(e.marks.italic),
                    Enter: (0, re.wn)(e.nodes.list_item),
                    "Mod-[": (0, re.T2)(e.nodes.list_item),
                    "Mod-]": (0, re.$B)(e.nodes.list_item),
                    "Shift-Ctrl-1": (0, Y.y_)(e.nodes.heading, { level: 1 }),
                    "Shift-Ctrl-2": (0, Y.y_)(e.nodes.heading, { level: 2 }),
                    "Shift-Ctrl-3": (0, Y.y_)(e.nodes.heading, { level: 3 }),
                    "Shift-Ctrl-0": (0, Y.y_)(e.nodes.paragraph),
                  });
                })(t),
              [t],
            ),
          ),
          ue(n.useMemo(() => (0, ee.w)(Y.RV), [])),
          ue(
            n.useMemo(
              () =>
                (function (e) {
                  return (0, te.sM)({
                    rules: [
                      (0, te.tG)(
                        /^(\d+)\.\s$/,
                        e.nodes.ordered_list,
                        (e) => ({ order: parseInt(e[1]) }),
                        (e, t) =>
                          t.childCount + t.attrs.order == parseInt(e[1]),
                      ),
                      (0, te.tG)(/^\s*([-+*])\s$/, e.nodes.bullet_list),
                      oe(/\*([^*]+)\*/, e.marks.strong),
                      oe(/_([^_]+)_/, e.marks.italic),
                      oe(/~([^~]+)~/, e.marks.strike),
                      oe(/`([^`]+)`/, e.marks.code),
                      (0, te.JJ)(/^```$/, e.nodes.code_block),
                      (0, te.JJ)(/^(#{1,5})\s$/, e.nodes.heading, (e) => ({
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
      function ue(e) {
        const t = n.useContext(se);
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
      var me = r(32381),
        de = r(44078),
        pe = r(61712),
        ge = r(56011),
        he = r(97009);
      function fe() {
        const [e, t] = n.useState(),
          [r, a] = n.useState(),
          [o, i] = n.useState();
        if (
          (ue(
            n.useMemo(
              () =>
                new V.k_({
                  props: {
                    handleDOMEvents: {
                      mouseover: (e, r) => {
                        const n = r.target;
                        if ((0, ge.kD)(n) && "A" == n.nodeName) {
                          const e = n.getBoundingClientRect();
                          t(e.left + e.width / 2), a(e.bottom + 2), i(n);
                        } else i(void 0);
                        return !1;
                      },
                      mouseleave: (e, t) => (i(void 0), !1),
                    },
                  },
                }),
              [],
            ),
          ),
          !o)
        )
          return null;
        const s = o.getAttribute("href");
        return n.createElement(
          be,
          { top: r, left: e },
          n.createElement("div", { className: he.Link }, s),
          n.createElement(
            "div",
            { className: he.LinkHelp },
            (0, g.we)("#UserGameNotes_ClickToOpenLink"),
          ),
        );
      }
      function be(e) {
        const { top: t, left: r, children: a } = e,
          [o, i] = n.useState(0),
          s = n.useRef();
        n.useLayoutEffect(() => {
          i(s.current.getBoundingClientRect().width);
        }, [t, r, a]);
        const l = { top: `${t}px`, left: `${Math.max(r - o / 2, 12)}px` };
        return n.createElement(
          "div",
          { className: he.Hover, style: l, ref: s },
          a,
        );
      }
      var _e = r(51272),
        Be = r(52038),
        we = r(56093),
        ye = r(61336),
        ve = r(78327),
        Ee = r(73309);
      function Me(e) {
        const {
            schemaConfig: t,
            bbcode: r,
            className: a,
            onUpdate: o,
            refView: i,
            onClickURL: s,
            bSpellcheckEnabled: l = !0,
            panelProps: c,
            children: u,
          } = e,
          [m, d] = n.useState(),
          p = n.useRef(),
          h = n.useRef();
        h.current = s || Te;
        const f = n.useCallback(
          (e) => {
            var r, n;
            if (!e)
              return void (
                null === (r = p.current) ||
                void 0 === r ||
                r.destroy()
              );
            const a = p.current;
            a && a.destroy(),
              (p.current = new $.Lz(e, {
                state:
                  null !== (n = null == a ? void 0 : a.state) && void 0 !== n
                    ? n
                    : V.$t.create({ schema: t.pm_schema }),
                handleClickOn: (...e) =>
                  (function (e, t, r, n, a, o, i, s) {
                    if (s && (i.ctrlKey || 1 == i.button)) {
                      const r = a
                        .resolve(n - o)
                        .marks()
                        .find((t) => t.type == e.marks.link);
                      if (r)
                        return t(r.attrs.href, i.view), i.preventDefault(), !0;
                    }
                    return !1;
                  })(t.pm_schema, h.current, ...e),
                clipboardTextParser: (...e) =>
                  (function (e, t, r, n, a) {
                    let o,
                      i = [];
                    for (; (o = t.match(ye.O9)); )
                      o.index > 0 && i.push(e.text(t.substring(0, o.index))),
                        i.push(
                          e.text(o[0], [
                            e.marks.link.create({ href: (0, ye.jT)(o[0]) }),
                          ]),
                        ),
                        (t = t.substring(o.index + o[0].length));
                    t.length && i.push(e.text(t));
                    return new H.Ji(H.FK.from(i), r.start(), r.end());
                  })(t.pm_schema, ...e),
              })),
              d(p.current);
          },
          [t],
        );
        n.useEffect(() => {
          m &&
            m.updateState(
              (function (e, t, r) {
                var n;
                const a = (0, K.b6)(),
                  o =
                    null === (n = a.spec.key) || void 0 === n
                      ? void 0
                      : n.get(r),
                  i = [...r.plugins.filter((e) => e != o), a];
                return V.$t.create({ schema: t, doc: e, plugins: i });
              })(
                (function (e, t) {
                  return new X(t.bbcode_dictionary, t.pm_schema).ParseBBCode(e);
                })(r, t),
                t.pm_schema,
                m.state,
              ),
            );
        }, [t, r, m]),
          (0, we.D5)(i, m);
        const {
            refDiv: b,
            onActivate: _,
            onGamepadDirection: B,
          } = (function (e) {
            const t = (0, ve.rP)(),
              r = n.useRef(),
              a = n.useCallback(
                (e) => {
                  (0, pe.iv)(e, t.IN_VR);
                },
                [t.IN_VR],
              ),
              o = (0, pe.FN)({ onTextEntered: a }, () => {
                var e;
                return null === (e = r.current) || void 0 === e
                  ? void 0
                  : e.ownerDocument.defaultView;
              }),
              i = n.useCallback(() => {
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
              s = n.useCallback((e) => e.currentTarget == e.target, []),
              l = (0, de.ak)(r, null, null, s);
            return { refDiv: r, onActivate: i, onGamepadDirection: l };
          })(p),
          w = (0, we.Ue)(b, f);
        return n.createElement(
          le,
          { view: m },
          n.createElement(me.Z, {
            key: `editordiv_${l}`,
            className: (0, Be.A)(a, Ee.Container),
            ref: w,
            spellCheck: l,
            focusable: !0,
            onActivate: _,
            onOKActionDescription: (0, g.we)("#UserGameNotes_Edit"),
            onGamepadDirection: B,
            ...c,
          }),
          n.createElement(ce, { onUpdate: o, schema: t.pm_schema }),
          n.createElement(fe, null),
          u,
        );
      }
      function Te(e, t) {
        (0, _e.EP)(t, e);
      }
      var Ce = r(32754),
        Se = r(27491),
        ke = r(33645),
        Ne = r.n(ke);
      function Re(e, t, r = 0) {
        return () => [e, { class: t }, r];
      }
      const Ae = {
          paragraph: {
            content: "inline*",
            group: "block",
            parseDOM: [{ tag: "p" }],
            toDOM: Re("p", (0, Be.A)("pm_paragraph", Ne().Paragraph)),
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
            ...re.fF,
            content: "list_item+",
            group: "block",
            toDOM: Re("ul", Ne().List),
            bbCode: { tag: "list" },
          },
          ordered_list: {
            ...re.o8,
            content: "list_item+",
            group: "block",
            toDOM: Re("ol", Ne().OrderedList),
            bbCode: { tag: "olist" },
          },
          list_item: {
            ...re.Aw,
            content: "paragraph block*",
            toDOM: Re("li", Ne().ListItem),
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
        ze = {
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
            toDOM: Re("b", (0, Be.A)("BB_Bold", Ne().Bold)),
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
            toDOM: Re("i", (0, Be.A)("BB_Italic", Ne().Italic)),
            bbCode: { tag: "i" },
          },
          underline: {
            parseDOM: [{ tag: "u" }, { style: "text-decoration=underline" }],
            toDOM: Re("u", (0, Be.A)("BB_Underline", Ne().Underline)),
            bbCode: { tag: "u" },
          },
          strike: {
            parseDOM: [{ style: "text-decoration=line-through" }],
            toDOM: Re("span", (0, Be.A)("BB_Strike", Ne().Strike)),
            bbCode: { tag: "strike" },
          },
          code: {
            parseDOM: [{ tag: "code" }],
            toDOM: Re("code", (0, Be.A)("BB_Code", Ne().Code)),
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
            },
          },
        };
      const Oe = { nodes: { ...Ae }, marks: { ...ze } },
        Ue = new (class {
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
            (this.m_ProseMirrorSchema = new H.Sj({ nodes: t, marks: a })),
              r.forEach((t, r) => {
                var n;
                const a = this.m_ProseMirrorSchema.nodes[r],
                  o = e.nodes[r],
                  i = Array.isArray(t) ? t : [t];
                let s;
                "list_item+" == o.content
                  ? (s = this.m_ProseMirrorSchema.nodes.list_item)
                  : -1 !=
                      (null === (n = o.content) || void 0 === n
                        ? void 0
                        : n.indexOf("paragraph")) &&
                    (s = this.m_ProseMirrorSchema.nodes.paragraph),
                  i.forEach(
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
                          acceptNode: s,
                        },
                        skipFollowingNewline: !0,
                        ...o,
                      });
                    },
                  );
                const { tag: l, AttrsToBBArgs: c } = i[0];
                this.m_PMToBBCodeConfig.mapNodes.set(a, {
                  tag: l,
                  AttrsToBBArgs: c,
                });
              }),
              n.forEach((e, t) => {
                const r = this.m_ProseMirrorSchema.marks[t],
                  { tag: n, BBArgsToAttrs: a, AttrsToBBArgs: o, ...i } = e;
                this.m_mapBBCodeDictionary.set(n, {
                  Constructor: { mark: r, BBArgsToAttrs: a },
                  ...i,
                }),
                  this.m_PMToBBCodeConfig.mapMarks.set(r, {
                    tag: n,
                    AttrsToBBArgs: o,
                  });
              });
          }
        })(Oe);
      var Ge = r(67660);
      const De =
        r.p +
        "images/applications/community/image_error.svg?v=valveisgoodatcaching";
      function Ie(e) {
        const { uploadImage: t, nodeType: r, nMaxImageSize: a = xe } = e;
        return (
          ue(
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
                              src: De,
                              title: (0, g.we)("#UserGameNotes_ImageTooLarge"),
                            }),
                          ];
                          return new H.Ji(H.FK.from(t), 0, 0);
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
                                  o = (0, Ge.wI)(await a.arrayBuffer());
                                Fe(
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
      function Fe(e, t, r) {
        r.state.doc.descendants((n, a) => {
          if ("image" === n.type.name && n.attrs.src === e) {
            const e = r.state.tr.setNodeAttribute(a, "src", t);
            r.dispatch(e);
          }
        });
      }
      const xe = 1048576;
      var We = r(72739);
      function je(e) {
        const {
            visible: t = !0,
            className: r,
            keepMounted: a = !1,
            expandDirection: o = "height",
            msAnimationDuration: i = 250,
            children: s,
          } = e,
          {
            style: l,
            active: c,
            refDiv: u,
          } = (function (e, t = "height", r = 250) {
            const a = n.useRef(),
              o = n.useRef(!0),
              [i, s] = n.useState("idle"),
              [l, c] = n.useState({});
            n.useLayoutEffect(() => {
              o.current ? (o.current = !1) : s("start");
            }, [e]),
              n.useLayoutEffect(() => {
                const r = a.current,
                  n = "height" == t ? "scrollHeight" : "scrollWidth";
                if ("start" == i) {
                  const a = r[n];
                  c((r) => ({
                    [t]: e ? "0px" : `${a}px`,
                    ...r,
                    overflow: "hidden",
                  })),
                    s("active");
                } else if ("active" == i) {
                  r.scrollTop;
                  const a = r[n];
                  c({ overflow: "hidden", [t]: e ? `${a}px` : "0px" });
                  const o = () => {
                    We.unstable_batchedUpdates(() => {
                      c({}), s("idle");
                    });
                  };
                  return (
                    r.addEventListener("transitionend", o),
                    () => {
                      r.removeEventListener("transitionend", o);
                    }
                  );
                }
              }, [i, e]);
            const u = { ...l, transition: `${t} ${r}ms` };
            return { style: u, active: "idle" != i, refDiv: a };
          })(t, o, i);
        return t || c || a
          ? n.createElement("div", { className: r, ref: u, style: l }, s)
          : null;
      }
      var Le = r(51240);
      const Pe = () => n.useContext($e);
      function qe(e) {
        const { view: t, refUpdateToolbar: r, children: a } = e,
          o = n.useRef();
        o.current || (o.current = new Le.lu()),
          n.useEffect(
            () => (
              (0, we.cZ)(r, () => o.current.Dispatch(t)),
              () => (0, we.cZ)(r, void 0)
            ),
            [t, r],
          );
        const i = n.useMemo(() => ({ callbacks: o.current, view: t }), [t]);
        return t ? n.createElement($e.Provider, { value: i }, a) : null;
      }
      const $e = n.createContext(void 0);
      function Ve() {
        return n.createElement("div", { className: Ee.Gap });
      }
      function Ke() {
        return n.createElement("div", { className: Ee.Spacer });
      }
      function He(e) {
        return n.createElement(
          me.Z,
          { className: (0, Be.A)(Ee.ToolbarRow), "flow-children": "row" },
          e.children,
        );
      }
      function Ze(e) {
        const { nodeType: t, title: r, attrs: a, children: o } = e,
          { callbacks: i, view: s } = Pe(),
          [l, c] = n.useState(() => ae(s.state, t, a)),
          u = n.useCallback((e) => c(ae(e.state, t, a)), [t, a]);
        (0, we.hL)(i, u);
        const m = n.useMemo(() => Y.y_(t, a), [a, t]);
        return n.createElement(Xe, {
          command: m,
          title: r,
          toggled: l,
          children: o,
        });
      }
      function Qe(e) {
        const { mark: t, title: r, children: a } = e,
          { callbacks: o, view: i } = Pe(),
          [s, l] = n.useState(() => ne(i.state, t)),
          c = n.useCallback((e) => l(ne(e.state, t)), [t]);
        (0, we.hL)(o, c);
        const u = n.useMemo(() => Y.wh(t), [t]);
        return n.createElement(Xe, {
          command: u,
          title: r,
          toggled: s,
          children: a,
        });
      }
      function Je(e) {
        const { fnEnabledCheck: t, ...r } = e,
          { callbacks: a, view: o } = Pe(),
          [i, s] = n.useState(() => t(o)),
          l = n.useCallback((e) => s(t(e)), [t]);
        return (0, we.hL)(a, l), n.createElement(Xe, { ...r, disabled: !i });
      }
      function Xe(e) {
        const {
            command: t,
            toggled: r,
            title: a,
            disabled: o,
            children: i,
          } = e,
          { view: s } = Pe();
        return n.createElement(
          D.$n,
          {
            className: (0, Be.A)(Ee.CommandButton, r && Ee.Toggled),
            title: a,
            onMouseDown: (e) => {
              e.preventDefault(), t(s.state, s.dispatch, s);
            },
            disabled: !0 === o,
            focusable: !o,
          },
          i,
        );
      }
      function Ye(e) {
        const {
          onClick: t,
          toggled: r,
          title: a,
          disabled: o,
          children: i,
        } = e;
        return n.createElement(
          D.$n,
          {
            className: (0, Be.A)(Ee.CommandButton, r && Ee.Toggled),
            title: a,
            onMouseDown: (e) => {
              e.preventDefault(), t();
            },
            disabled: !0 === o,
          },
          i,
        );
      }
      function et(e) {
        const { schema: t, children: r } = e,
          { callbacks: a, view: o } = Pe(),
          [i, s] = n.useState(() => ne(o.state, t.marks.link)),
          l = n.useCallback((e) => s(ne(e.state, t.marks.link)), [t]);
        (0, we.hL)(a, l);
        const [c, u, m] = (0, we.uD)();
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(
            F.EN,
            { active: c },
            n.createElement(tt, {
              schema: t,
              active: c,
              closeModal: m,
              view: o,
            }),
          ),
          n.createElement(
            D.$n,
            {
              className: (0, Be.A)(Ee.CommandButton, i && Ee.Toggled),
              onMouseDown: (e) => {
                e.preventDefault(), u();
              },
              title: (0, g.we)("#FormattingToolbar_InsertLink"),
            },
            r,
          ),
        );
      }
      const tt = n.memo(function (e) {
        const { schema: t, active: r, closeModal: a, view: o } = e,
          [i, s] = n.useState(""),
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
                s(e),
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
            F.o0,
            {
              onOK: () => {
                o.dispatch(
                  o.state.tr.replaceRangeWith(
                    o.state.selection.from,
                    o.state.selection.to,
                    t.text(i || l, [t.marks.link.create({ href: l })]),
                  ),
                ),
                  o.focus(),
                  a();
              },
              closeModal: a,
              strTitle: (0, g.we)("#FormattingToolbar_InsertLink"),
              strOKButtonText: (0, g.we)("#FormattingToolbar_InsertLink"),
              bOKDisabled: 0 == l.length,
            },
            n.createElement(D.pd, {
              ref: u,
              value: i,
              onChange: (e) => s(e.currentTarget.value),
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
      function rt() {
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(
            Ce.he,
            { toolTipContent: "#FormattingToolbar_Undo", direction: "bottom" },
            n.createElement(
              Je,
              { command: K.tN, fnEnabledCheck: nt },
              n.createElement(I.VnB, null),
            ),
          ),
          n.createElement(
            Ce.he,
            { toolTipContent: "#FormattingToolbar_Redo", direction: "bottom" },
            n.createElement(
              Je,
              { command: K.ZS, fnEnabledCheck: at },
              n.createElement(I.Bal, null),
            ),
          ),
        );
      }
      function nt(e) {
        return K.mk(e.state) > 0;
      }
      function at(e) {
        return K.mL(e.state) > 0;
      }
      function ot(e) {
        const { schema: t } = e;
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(
            Ce.he,
            { toolTipContent: "#FormattingToolbar_Bold", direction: "bottom" },
            n.createElement(
              Qe,
              { mark: t.marks.strong },
              n.createElement(I.l4n, null),
            ),
          ),
          n.createElement(
            Ce.he,
            {
              toolTipContent: "#FormattingToolbar_Italic",
              direction: "bottom",
            },
            n.createElement(
              Qe,
              { mark: t.marks.italic },
              n.createElement(I.UKJ, null),
            ),
          ),
          n.createElement(
            Ce.he,
            {
              toolTipContent: "#FormattingToolbar_Underline",
              direction: "bottom",
            },
            n.createElement(
              Qe,
              { mark: t.marks.underline },
              n.createElement(I.Gj3, null),
            ),
          ),
          "strike" in t.marks &&
            n.createElement(
              Ce.he,
              {
                toolTipContent: "#FormattingToolbar_Strike",
                direction: "bottom",
              },
              n.createElement(
                Qe,
                { mark: t.marks.strike },
                n.createElement(I.tI4, null),
              ),
            ),
          "code" in t.marks &&
            n.createElement(
              Ce.he,
              {
                toolTipContent: "#FormattingToolbar_InlineCode",
                direction: "bottom",
              },
              n.createElement(
                Qe,
                { mark: t.marks.code },
                n.createElement(I.bmT, null),
              ),
            ),
        );
      }
      function it(e) {
        const { schema: t } = e;
        return n.createElement(
          Ce.he,
          {
            toolTipContent: "#FormattingToolbar_Paragraph",
            direction: "bottom",
          },
          n.createElement(
            Ze,
            { nodeType: t.nodes.paragraph },
            n.createElement(I.iYj, null),
          ),
        );
      }
      function st(e) {
        const { schema: t, maxLevel: r = 1, levels: a } = e,
          o = r + a - 1;
        return n.createElement(
          n.Fragment,
          null,
          r <= 1 &&
            n.createElement(
              Ce.he,
              {
                toolTipContent: "#FormattingToolbar_HeadingLevel1",
                direction: "bottom",
              },
              n.createElement(
                Ze,
                { nodeType: t.nodes.heading, attrs: { level: 1 } },
                n.createElement(I.jRw, null),
              ),
            ),
          r <= 2 &&
            o >= 2 &&
            n.createElement(
              Ce.he,
              {
                toolTipContent: "#FormattingToolbar_HeadingLevel2",
                direction: "bottom",
              },
              n.createElement(
                Ze,
                { nodeType: t.nodes.heading, attrs: { level: 2 } },
                n.createElement(I.qOW, null),
              ),
            ),
          r <= 3 &&
            o >= 3 &&
            n.createElement(
              Ce.he,
              {
                toolTipContent: "#FormattingToolbar_HeadingLevel3",
                direction: "bottom",
              },
              n.createElement(
                Ze,
                { nodeType: t.nodes.heading, attrs: { level: 3 } },
                n.createElement(I.x7X, null),
              ),
            ),
          r <= 4 &&
            o >= 4 &&
            n.createElement(
              Ce.he,
              {
                toolTipContent: "#FormattingToolbar_HeadingLevel4",
                direction: "bottom",
              },
              n.createElement(
                Ze,
                { nodeType: t.nodes.heading, attrs: { level: 4 } },
                n.createElement(I.qzO, null),
              ),
            ),
          r <= 5 &&
            o >= 5 &&
            n.createElement(
              Ce.he,
              {
                toolTipContent: "#FormattingToolbar_HeadingLevel5",
                direction: "bottom",
              },
              n.createElement(
                Ze,
                { nodeType: t.nodes.heading, attrs: { level: 5 } },
                n.createElement(I.jXA, null),
              ),
            ),
        );
      }
      function lt(e) {
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
          [i, s] = n.useState(() => o(a));
        return (
          (0, we.hL)(
            r,
            n.useCallback((e) => s(o(e)), [o]),
          ),
          n.createElement(
            n.Fragment,
            null,
            n.createElement(
              Ce.he,
              {
                toolTipContent: "#FormattingToolbar_BulletedList",
                direction: "bottom",
              },
              n.createElement(
                Xe,
                { toggled: i, command: re.Sd(t.nodes.bullet_list) },
                n.createElement(I.JPq, null),
              ),
            ),
            n.createElement(
              Ce.he,
              {
                toolTipContent: "#FormattingToolbar_OutdentList",
                direction: "bottom",
              },
              n.createElement(
                Xe,
                { disabled: !i, command: re.T2(t.nodes.list_item) },
                n.createElement(I.LSz, null),
              ),
            ),
            n.createElement(
              Ce.he,
              {
                toolTipContent: "#FormattingToolbar_IndentList",
                direction: "bottom",
              },
              n.createElement(
                Xe,
                { disabled: !i, command: re.$B(t.nodes.list_item) },
                n.createElement(I.ycU, null),
              ),
            ),
          )
        );
      }
      function ct(e) {
        const { schema: t } = e;
        return n.createElement(
          Ce.he,
          {
            toolTipContent: "#FormattingToolbar_InsertLink",
            direction: "bottom",
          },
          n.createElement(et, { schema: t }, n.createElement(I.YqK, null)),
        );
      }
      function ut(e) {
        const { bSpellcheckEnabled: t, setSpellcheckEnabled: r } = e;
        return n.createElement(
          Ce.he,
          {
            toolTipContent: t
              ? "#FormattingToolbar_DisableSpellcheck"
              : "#FormattingToolbar_EnableSpellcheck",
            direction: "bottom",
          },
          n.createElement(
            Ye,
            { toggled: t, onClick: () => r(!t) },
            n.createElement(I.DEV, null),
          ),
        );
      }
      var mt = r(76011);
      function dt(e) {
        const {
            schema: t,
            view: r,
            refUpdateToolbar: a,
            className: o,
            bSpellcheckEnabled: i,
            setSpellcheckEnabled: s,
          } = e,
          [l, c] = (0, mt.SP)("FormattingToolbar_Expanded", !1);
        return n.createElement(
          qe,
          { refUpdateToolbar: a, view: r },
          n.createElement(
            "div",
            { className: (0, Be.A)(Ee.Toolbar, o) },
            n.createElement(
              He,
              null,
              n.createElement(rt, null),
              n.createElement(Ve, null),
              n.createElement(ot, { schema: t }),
              n.createElement(Ke, null),
              n.createElement(
                Ce.he,
                {
                  toolTipContent: "#FormattingToolbar_ExpandOptions",
                  direction: "bottom",
                },
                n.createElement(
                  D.$n,
                  {
                    className: (0, Be.A)(
                      Ee.CommandButton,
                      Ee.ExpandButton,
                      l && Ee.Toggled,
                    ),
                    onClick: () => c(!l),
                  },
                  n.createElement(I.cLJ, null),
                ),
              ),
            ),
            n.createElement(
              je,
              { visible: l },
              n.createElement(
                He,
                null,
                n.createElement(it, { schema: t }),
                n.createElement(st, { schema: t, levels: 5 }),
                n.createElement(
                  Ce.he,
                  {
                    toolTipContent: "#FormattingToolbar_CodeBlock",
                    direction: "bottom",
                  },
                  n.createElement(
                    Ze,
                    {
                      nodeType: t.nodes.code_block,
                      title: (0, g.we)("#FormattingToolbar_CodeBlock"),
                    },
                    n.createElement(I.kNE, null),
                  ),
                ),
                n.createElement(Ve, null),
                n.createElement(lt, { schema: t }),
                n.createElement(Ve, null),
                n.createElement(ct, { schema: t }),
                n.createElement(Ke, null),
                s &&
                  n.createElement(ut, {
                    bSpellcheckEnabled: i,
                    setSpellcheckEnabled: s,
                  }),
              ),
            ),
          ),
        );
      }
      const pt = 15;
      function gt(e) {
        const { note: t } = e,
          [r, a] = n.useState(!1),
          [o, i] = n.useState(),
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
          E = (function (e) {
            const t = p();
            return n.useCallback(
              async (r, n) => {
                const a = new Uint8Array(n),
                  o = await t.UploadImage(`notes_${e}_images/`, r, a);
                return Promise.resolve("/gamenotes/" + o);
              },
              [t, e],
            );
          })(t.appid),
          M = (0, ve.Qn)();
        h.current == t.content || f.current || (h.current = t.content);
        const T = h.current,
          C = (function () {
            const e = (0, s.useQueryClient)(),
              t = p();
            return (0, s.useMutation)(
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
          S = n.useCallback((e, t) => {
            l.current && l.current(),
              t.doc &&
                t.doc != e.state.doc &&
                (f.current ||
                  ((f.current = !0),
                  G.y.ReportTrackedAction("/GameNotes/NoteModified")),
                (m.current = () => ({
                  title: _t(e.state.doc),
                  bbcode: j(e.state.doc, Ue),
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
                  C.mutate({ note: t, title: r, bbcode: n }),
                  a(!1);
              }
              (e = void 0), (m.current = void 0);
            },
            o = window.setTimeout(n, 1e3 * pt);
          return () => {
            window.clearTimeout(o), n();
          };
        }, [C, r, t]),
          n.useEffect(() => {
            o && o.focus();
          }, [o]);
        const k = d(),
          N = b(t, k),
          R = {
            onSecondaryButton: () => N.mutate(),
            onSecondaryActionDescription: (0, g.we)(
              "#UserGameNotes_DeleteNote",
            ),
          };
        return n.createElement(
          "div",
          { className: Se.NoteEditorArea },
          !M &&
            n.createElement(dt, {
              schema: Ue.pm_schema,
              view: o,
              refUpdateToolbar: l,
              className: Se.Toolbar,
              bSpellcheckEnabled: w,
              setSpellcheckEnabled: v,
            }),
          n.createElement(
            Me,
            {
              schemaConfig: Ue,
              className: Se.EditorInput,
              bbcode: T,
              onUpdate: S,
              refView: i,
              onClickURL: B,
              bSpellcheckEnabled: w,
              panelProps: R,
            },
            n.createElement(Ie, {
              uploadImage: E,
              nodeType: Ue.pm_schema.nodes.image,
            }),
          ),
          !M && n.createElement(ht, { note: t, bDirty: r }),
        );
      }
      function ht(e) {
        const { note: t, bDirty: r } = e,
          [a, o, i] = (0, we.uD)(!1),
          s = "single" == n.useContext(u).mode,
          l = d(),
          c = b(t, l),
          m = n.useCallback(() => {
            !r && t.not_persisted ? c.mutate() : o();
          }, [r, t, c, o]);
        return n.createElement(
          "div",
          { className: Se.NoteActions },
          a && n.createElement(bt, { note: t, closeModal: i, deleteNote: c }),
          n.createElement(
            Ce.he,
            { toolTipContent: "#UserGameNotes_DeleteNote", direction: "top" },
            n.createElement(D.$n, { onClick: m }, n.createElement(I.lMJ, null)),
          ),
          s && n.createElement(ft, { bDirty: r }),
        );
      }
      function ft(e) {
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
      function bt(e) {
        const { note: t, closeModal: r, deleteNote: a } = e;
        return n.createElement(
          F.EN,
          { active: !0 },
          n.createElement(F.o0, {
            strTitle: (0, g.we)("#UserGameNotes_DeleteNote"),
            strDescription: (0, g.we)("#UserGameNotes_PromptDelete"),
            onOK: () => a.mutate(),
            bOKDisabled: a.isLoading,
            strOKButtonText: (0, g.we)("#Button_Delete"),
            closeModal: r,
          }),
        );
      }
      function _t(e) {
        let t = "";
        for (let r = 0; r < e.content.childCount; r++) {
          const n = e.content.child(r);
          if (n.isText) t += n.text;
          else {
            if (((t = t.trim()), t.length > 4)) return t;
            if (((t = _t(n)), t.length > 4)) return t;
          }
        }
        return t.trim();
      }
      function Bt() {
        const e = (0, a.W5)(),
          t = B(
            "appid" in e.params && Number(e.params.appid),
            "shortcut_name" in e.params && e.params.shortcut_name,
          );
        let r = e.params.noteid;
        const o = (0, a.W6)(),
          i = (function (e) {
            const t = (0, s.useQueryClient)(),
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
              (l.length > 0 && l[0].id ? yt(o, t, l[0].id) : yt(o, t, i()));
          }, [o, t, r, l, i]);
        const m = n.createElement(
          Ce.he,
          { toolTipContent: "#UserGameNotes_NewNote", direction: "top" },
          n.createElement(
            D.$n,
            {
              className: Se.NewNoteButton,
              onClick: () => {
                const e = i();
                yt(o, t, e);
              },
            },
            n.createElement(I.qY3, null),
          ),
        );
        return l
          ? n.createElement(wt, {
              noteParent: t,
              notes: l,
              activeNoteID: null == u ? void 0 : u.id,
              actions: m,
            })
          : null;
      }
      function wt(e) {
        const { noteParent: t, notes: r, activeNoteID: o, actions: i } = e,
          [s, l] = (0, mt.SP)("NotesListCollapsed", !1),
          c = n.useContext(u).bPinnedView,
          m = (0, ve.Qn)(),
          d = r.map((e) => {
            var t;
            return {
              title:
                (null === (t = e.title) || void 0 === t ? void 0 : t.length) > 0
                  ? e.title
                  : (0, g.we)("#UserGameNotes_Untitled"),
              identifier: e.id,
              content: n.createElement(gt, { note: e }),
              pageClassName: Se.NotePage,
              hideTitle: !0,
            };
          }),
          p = (0, a.W6)(),
          h = n.useCallback((e) => yt(p, t, e), [p, t]);
        return n.createElement(D.Bv, {
          title: (0, g.we)("#UserGameNotes_NotesList"),
          pages: d,
          className: (0, Be.A)(Se.NotesPagedSettings, c && Se.PinnedView),
          page: o,
          onPageRequested: h,
          bottomControls: i,
          hideList: s,
          toggleHideList: c || m ? void 0 : () => l(!s),
        });
      }
      function yt(e, t, r) {
        let n;
        (n =
          "appid" in t
            ? o.AppNotes(t.appid, r)
            : o.ShortcutNotes(t.shortcut, r)),
          e.replace(n, e.location.state);
      }
      var vt = r(80613),
        Et = r(89068);
      const Mt = vt.Message;
      class Tt extends Mt {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Tt.prototype.id || Et.Sg(Tt.M()),
            Mt.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Tt.sm_m ||
              (Tt.sm_m = {
                proto: Tt,
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
          let t = new vt.BinaryReader(e),
            r = new Tt();
          return Tt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Et.zj(Tt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new vt.BinaryWriter();
          return Tt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Et.i0(Tt.M(), e, t);
        }
        serializeBase64String() {
          var e = new vt.BinaryWriter();
          return Tt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNote";
        }
      }
      class Ct extends Mt {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ct.prototype.appid || Et.Sg(Ct.M()),
            Mt.initialize(this, e, 0, -1, void 0, null);
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
          let t = new vt.BinaryReader(e),
            r = new Ct();
          return Ct.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Et.zj(Ct.MBF(), e, t);
        }
        serializeBinary() {
          var e = new vt.BinaryWriter();
          return Ct.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Et.i0(Ct.M(), e, t);
        }
        serializeBase64String() {
          var e = new vt.BinaryWriter();
          return Ct.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_GetNotesForGame_Request";
        }
      }
      class St extends Mt {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            St.prototype.notes || Et.Sg(St.M()),
            Mt.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            St.sm_m ||
              (St.sm_m = {
                proto: St,
                fields: { notes: { n: 1, c: Tt, r: !0, q: !0 } },
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
          let t = new vt.BinaryReader(e),
            r = new St();
          return St.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Et.zj(St.MBF(), e, t);
        }
        serializeBinary() {
          var e = new vt.BinaryWriter();
          return St.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Et.i0(St.M(), e, t);
        }
        serializeBase64String() {
          var e = new vt.BinaryWriter();
          return St.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_GetNotesForGame_Response";
        }
      }
      class kt extends Mt {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            kt.prototype.appid || Et.Sg(kt.M()),
            Mt.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            kt.sm_m ||
              (kt.sm_m = {
                proto: kt,
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
            kt.sm_m
          );
        }
        static MBF() {
          return kt.sm_mbf || (kt.sm_mbf = Et.w0(kt.M())), kt.sm_mbf;
        }
        toObject(e = !1) {
          return kt.toObject(e, this);
        }
        static toObject(e, t) {
          return Et.BT(kt.M(), e, t);
        }
        static fromObject(e) {
          return Et.Uq(kt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new vt.BinaryReader(e),
            r = new kt();
          return kt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Et.zj(kt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new vt.BinaryWriter();
          return kt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Et.i0(kt.M(), e, t);
        }
        serializeBase64String() {
          var e = new vt.BinaryWriter();
          return kt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_SaveNote_Request";
        }
      }
      class Nt extends Mt {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Nt.prototype.note_id || Et.Sg(Nt.M()),
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
                    br: Et.qM.readString,
                    bw: Et.gp.writeString,
                  },
                },
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
          let t = new vt.BinaryReader(e),
            r = new Nt();
          return Nt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Et.zj(Nt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new vt.BinaryWriter();
          return Nt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Et.i0(Nt.M(), e, t);
        }
        serializeBase64String() {
          var e = new vt.BinaryWriter();
          return Nt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_SaveNote_Response";
        }
      }
      class Rt extends Mt {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Rt.prototype.appid || Et.Sg(Rt.M()),
            Mt.initialize(this, e, 0, -1, void 0, null);
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
          let t = new vt.BinaryReader(e),
            r = new Rt();
          return Rt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Et.zj(Rt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new vt.BinaryWriter();
          return Rt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Et.i0(Rt.M(), e, t);
        }
        serializeBase64String() {
          var e = new vt.BinaryWriter();
          return Rt.serializeBinaryToWriter(this, e), e.getResultBase64String();
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
          let t = new vt.BinaryReader(e),
            r = new At();
          return At.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new vt.BinaryWriter();
          return At.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new vt.BinaryWriter();
          return At.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_DeleteNote_Response";
        }
      }
      class zt extends Mt {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), Mt.initialize(this, e, 0, -1, void 0, null);
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
          let t = new vt.BinaryReader(e),
            r = new zt();
          return zt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new vt.BinaryWriter();
          return zt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new vt.BinaryWriter();
          return zt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_GetGamesWithNotes_Request";
        }
      }
      class Ot extends Mt {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ot.prototype.games_with_notes || Et.Sg(Ot.M()),
            Mt.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Ot.sm_m ||
              (Ot.sm_m = {
                proto: Ot,
                fields: { games_with_notes: { n: 1, c: Ut, r: !0, q: !0 } },
              }),
            Ot.sm_m
          );
        }
        static MBF() {
          return Ot.sm_mbf || (Ot.sm_mbf = Et.w0(Ot.M())), Ot.sm_mbf;
        }
        toObject(e = !1) {
          return Ot.toObject(e, this);
        }
        static toObject(e, t) {
          return Et.BT(Ot.M(), e, t);
        }
        static fromObject(e) {
          return Et.Uq(Ot.M(), e);
        }
        static deserializeBinary(e) {
          let t = new vt.BinaryReader(e),
            r = new Ot();
          return Ot.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Et.zj(Ot.MBF(), e, t);
        }
        serializeBinary() {
          var e = new vt.BinaryWriter();
          return Ot.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Et.i0(Ot.M(), e, t);
        }
        serializeBase64String() {
          var e = new vt.BinaryWriter();
          return Ot.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_GetGamesWithNotes_Response";
        }
      }
      class Ut extends Mt {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ut.prototype.appid || Et.Sg(Ut.M()),
            Mt.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ut.sm_m ||
              (Ut.sm_m = {
                proto: Ut,
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
          let t = new vt.BinaryReader(e),
            r = new Ut();
          return Ut.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Et.zj(Ut.MBF(), e, t);
        }
        serializeBinary() {
          var e = new vt.BinaryWriter();
          return Ut.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Et.i0(Ut.M(), e, t);
        }
        serializeBase64String() {
          var e = new vt.BinaryWriter();
          return Ut.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_GetGamesWithNotes_Response_GameWithNotes";
        }
      }
      var Gt;
      !(function (e) {
        (e.GetNotesForGame = function (e, t) {
          return e.SendMsg(
            "UserGameNotes.GetNotesForGame#1",
            (0, v.I8)(Ct, t),
            St,
            { ePrivilege: 1 },
          );
        }),
          (e.SaveNote = function (e, t) {
            return e.SendMsg("UserGameNotes.SaveNote#1", (0, v.I8)(kt, t), Nt, {
              ePrivilege: 1,
            });
          }),
          (e.DeleteNote = function (e, t) {
            return e.SendMsg(
              "UserGameNotes.DeleteNote#1",
              (0, v.I8)(Rt, t),
              At,
              { ePrivilege: 1 },
            );
          }),
          (e.GetGamesWithNotes = function (e, t) {
            return e.SendMsg(
              "UserGameNotes.GetGamesWithNotes#1",
              (0, v.I8)(zt, t),
              Ot,
              { ePrivilege: 1 },
            );
          });
      })(Gt || (Gt = {}));
      class Dt {
        constructor(e) {
          this.m_SteamInterface = e;
        }
        async GetGamesWithNotes() {
          const e = v.w.Init(zt);
          return (
            await Gt.GetGamesWithNotes(
              this.m_SteamInterface.GetServiceTransport(),
              e,
            )
          )
            .Body()
            .toObject().games_with_notes;
        }
        async GetGameNotesList(e, t) {
          const r = v.w.Init(Ct);
          this.SetParentOnRequest(r, e), r.Body().set_include_content(t);
          const n = await Gt.GetNotesForGame(
            this.m_SteamInterface.GetServiceTransport(),
            r,
          );
          return n.Body().notes().length
            ? n.Body().toObject().notes
            : [this.NewNote(e, "New Note")];
        }
        async SaveGameNote(e, t, r) {
          const n = v.w.Init(kt);
          e.not_persisted
            ? n.Body().set_create_new(!0)
            : n.Body().set_note_id(e.id),
            e.appid
              ? n.Body().set_appid(e.appid)
              : n.Body().set_shortcut_name(e.shortcut_name),
            n.Body().set_title(t),
            n.Body().set_content(r);
          const a = await Gt.SaveNote(
            this.m_SteamInterface.GetServiceTransport(),
            n,
          );
          if (!a.BSuccess()) throw a.GetErrorMessage();
          return a.Body().note_id();
        }
        async DeleteGameNote(e, t) {
          const r = v.w.Init(Rt);
          this.SetParentOnRequest(r, e), r.Body().set_note_id(t);
          const n = await Gt.DeleteNote(
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
        const t = (0, M.TR)(),
          [r] = n.useState(() => new Dt(t));
        return n.createElement(
          m,
          { mode: "page", store: r },
          n.createElement(
            a.dO,
            null,
            n.createElement(a.qh, { path: o.List() }, n.createElement(O, null)),
            n.createElement(
              a.qh,
              { path: o.AppNotes(":appid", ":noteid?") },
              n.createElement(Bt, null),
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
        i = r(60778),
        s = r(14771),
        l = r(10333);
      const c = new i.wd("ReactUsageReporting").Debug,
        u = 1e3 * s.Kp.PerMinute;
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
