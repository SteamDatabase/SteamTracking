/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [1220],
  {
    59722: (e) => {
      e.exports = {
        Hover: "_1lo3nIamSX1TzzE4TlhFXA",
        Link: "_1ds3uh7ntoekPm635F2Ziv",
        LinkHelp: "_3Vn5X8bzPjWx5p545nkB6k",
      };
    },
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
    73309: (e) => {
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
    77018: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => Dt });
      var n = r(90626),
        a = r(92757);
      const o = {
        List: () => "/notes/list",
        AppNotes: (e, t) => `/notes/app/${e}/${null != t ? t : ""}`,
        ShortcutNotes: (e, t) => `/notes/shortcut/${e}/${null != t ? t : ""}`,
      };
      var s = r(17083),
        i = r(37674),
        c = r(29385),
        l = r(61739);
      function u(e) {
        return e.trim();
      }
      function d(e) {
        return e.appid ? { appid: e.appid } : { shortcut: e.shortcut_name };
      }
      const m = n.createContext({ mode: "page", store: null });
      function p(e) {
        const {
            mode: t,
            store: r,
            closePopup: a,
            bPinnedView: o,
            onClickURL: s,
            bSpellcheckEnabled: i = !0,
            setSpellcheckEnabled: c,
            children: l,
          } = e,
          u = n.useMemo(
            () => ({
              mode: t,
              store: r,
              closePopup: a,
              bPinnedView: o,
              onClickURL: s,
              bSpellcheckEnabled: i,
              setSpellcheckEnabled: c,
            }),
            [t, r, a, o, s, i, c],
          );
        return n.createElement(m.Provider, { value: u }, l);
      }
      function h() {
        return n.useContext(m).closePopup;
      }
      function g() {
        return n.useContext(m).store;
      }
      var f = r(61859);
      function b(e) {
        return "appid" in e
          ? ["GameNotes", "NotesByAppID", e.appid]
          : ["GameNotes", "NotesForShortcut", u(e.shortcut)];
      }
      function _(e) {
        const t = g();
        return (0, i.I)({
          queryKey: b(e),
          queryFn: async () => (await t.GetGameNotesList(e, !0)) || [],
          enabled: !!e,
        });
      }
      function B(e, t) {
        const r = (0, c.jE)(),
          n = g(),
          a = e.id;
        return (0, l.n)({
          mutationFn: async () =>
            e.not_persisted ? a : await n.DeleteGameNote(d(e), a),
          onSuccess: () => {
            w(r, d(e), (e) => e.filter((e) => e.id != a)), t && t();
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
        C = r(23809),
        N = r(30470),
        T = r(22837);
      let S;
      const A = 864e5;
      function R(e) {
        return `appinfo_${e}_${N.TS.LANGUAGE}`;
      }
      function z(e) {
        return Boolean(e && Date.now() - e.timeCached < A);
      }
      function F(e) {
        const t = (0, C.KV)(),
          r = (0, C.rX)();
        return (0, i.I)({
          queryKey: ["appinfo", e],
          queryFn: async () =>
            (function (e, t) {
              return (
                S ||
                  (S = new (M())(
                    async (r) => {
                      const n = new Map();
                      (await Promise.all(r.map((e) => t.GetObject(R(e)))))
                        .filter(z)
                        .forEach(({ value: e }) => n.set(e.appid, e));
                      const a = r.slice().filter((e) => !n.has(e));
                      if (a.length) {
                        const r = E.w.Init(k._z);
                        r.Body().set_language((0, T.sf)(N.TS.LANGUAGE)),
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
                S
              );
            })(t, r).load(e),
          staleTime: A,
          enabled: !!e,
        }).data;
      }
      var U = r(22797);
      function O() {
        const { data: e, isLoading: t } = (function () {
          const e = g();
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
                e.map((e) => n.createElement(D, { key: e.appid, game: e })),
              ),
            );
      }
      function D(e) {
        const { game: t } = e,
          r = F(t.appid);
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
      var G = r(61788),
        I = r(7068),
        W = r(4869),
        x = r(21273),
        P = r(49693),
        j = r(81393);
      function L(e, t) {
        return q(t.pm_schema, t.pm_to_bbcode_config, e, []);
      }
      function q(e, t, r, n) {
        let a = r.marks,
          o = "";
        const s = t.mapNodes.get(r.type),
          { tag: i, args: c } = K(s, r.attrs);
        return (
          i && (o += (0, P.CS)(i, c)),
          r.content.forEach((r) => {
            ([o, a] = $(t, a, r.marks, o)),
              ([o, a] = (function (e, t, r, n) {
                let a;
                for (const o of r)
                  if (-1 === t.indexOf(o)) {
                    a || (a = t.slice());
                    const r = e.mapMarks.get(o.type);
                    if (((0, j.w)(r, "mark missing bbtag"), r)) {
                      a.push(o);
                      const { args: e, tag: t } = K(r, o.attrs);
                      n += (0, P.CS)(t, e || {});
                    }
                  }
                return [n, null != a ? a : t];
              })(t, a, r.marks, o)),
              r.type.isText
                ? (o += (0, P.vE)(r.text || ""))
                : r.type == e.nodes.hard_break
                  ? (o += "\n")
                  : (o += q(e, t, r, a));
          }),
          ([o] = $(t, a, n, o)),
          i && (o += (0, P.op)(i)),
          o
        );
      }
      function $(e, t, r, n) {
        const a = [];
        for (const e of t) -1 === r.indexOf(e) && a.push(e);
        if (!a.length) return [n, t];
        const o = t.slice();
        for (
          ;
          a.length && ((0, j.w)(o.length, "no marks left to close"), o.length);
        ) {
          const t = o.pop(),
            r = e.mapMarks.get(t.type),
            { tag: s } = K(r, t.attrs);
          n += (0, P.op)(s);
          const i = a.indexOf(t);
          -1 != i && a.splice(i, 1);
        }
        return [n, o];
      }
      function K(e, t) {
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
      var V = r(26205),
        H = r(57053),
        J = r(52893),
        X = r(12362),
        Y = r(7502),
        Z = r(98724),
        Q = r(79216),
        ee = r(4188);
      function te(e, t) {
        const { from: r, $from: n, to: a, empty: o } = e.selection;
        return o
          ? !!t.isInSet(e.storedMarks || n.marks())
          : e.doc.rangeHasMark(r, a, t);
      }
      function re(e, t, r) {
        let { $from: n, to: a, node: o } = e.selection;
        return !o && a <= n.end() && (o = n.parent), !!o && o.hasMarkup(t, r);
      }
      function ne(e, t, r = {}) {
        return new Q.fV(e, (e, n, a, o) => {
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
      function ae(e, t, r) {
        const n = { left: t, top: r },
          a = e.posAtCoords(n);
        if (null == a ? void 0 : a.pos) {
          const t = e.state.doc.resolve(a.pos);
          e.dispatch(e.state.tr.setSelection(J.U3.near(t)));
        }
      }
      r(74763);
      const oe = n.createContext(null);
      function se(e) {
        return n.createElement(oe.Provider, { value: e.view }, e.children);
      }
      function ie(e) {
        const { schema: t, onUpdate: r } = e,
          a = n.useRef(r);
        return (
          (a.current = r),
          ce(
            n.useMemo(
              () =>
                new J.k_({
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
                    "Mod-z": Z.tN,
                    "Mod-y": Z.ZS,
                    Backspace: Q.dv,
                    "Mod-Enter": t,
                    "Shift-Enter": t,
                    "Mod-b": (0, X.wh)(e.marks.strong),
                    "Mod-i": (0, X.wh)(e.marks.italic),
                    Enter: (0, ee.wn)(e.nodes.list_item),
                    "Mod-[": (0, ee.T2)(e.nodes.list_item),
                    "Mod-]": (0, ee.$B)(e.nodes.list_item),
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
                  return (0, Q.sM)({
                    rules: [
                      (0, Q.tG)(
                        /^(\d+)\.\s$/,
                        e.nodes.ordered_list,
                        (e) => ({ order: parseInt(e[1]) }),
                        (e, t) =>
                          t.childCount + t.attrs.order == parseInt(e[1]),
                      ),
                      (0, Q.tG)(/^\s*([-+*])\s$/, e.nodes.bullet_list),
                      ne(/\*([^*]+)\*/, e.marks.strong),
                      ne(/_([^_]+)_/, e.marks.italic),
                      ne(/~([^~]+)~/, e.marks.strike),
                      ne(/`([^`]+)`/, e.marks.code),
                      (0, Q.JJ)(/^```$/, e.nodes.code_block),
                      (0, Q.JJ)(/^(#{1,5})\s$/, e.nodes.heading, (e) => ({
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
      var le = r(59722);
      function ue(e) {
        const { linkMarkType: t, schema: r, onClickURL: a = me } = e,
          o = n.useRef(a);
        o.current = a;
        const [s, i] = n.useState(),
          [c, l] = n.useState(),
          [u, d] = n.useState(),
          m = n.useMemo(
            () =>
              new J.k_({
                props: {
                  handleClickOn(e, r, n, a, s, i) {
                    if (i && (s.ctrlKey || 1 == s.button)) {
                      const e = n
                        .resolve(r - a)
                        .marks()
                        .find((e) => e.type == t);
                      if (e)
                        return (
                          o.current(e.attrs.href, s.view),
                          s.preventDefault(),
                          !0
                        );
                    }
                    return !1;
                  },
                  clipboardTextParser(e, n, a, o) {
                    let s,
                      i = [];
                    for (; (s = e.match(V.O)); )
                      s.index > 0 && i.push(r.text(e.substring(0, s.index))),
                        i.push(
                          r.text(s[0], [t.create({ href: (0, V.S)(s[0]) })]),
                        ),
                        (e = e.substring(s.index + s[0].length));
                    return (
                      e.length && i.push(r.text(e)),
                      new H.Ji(H.FK.from(i), n.start(), n.end())
                    );
                  },
                  handleDOMEvents: {
                    mouseover: (e, t) => {
                      const r = t.target;
                      if (
                        r &&
                        "getBoundingClientRect" in r &&
                        "A" == r.nodeName
                      ) {
                        const e = r.getBoundingClientRect();
                        i(e.left + e.width / 2), l(e.bottom + 2), d(r);
                      } else d(void 0);
                      return !1;
                    },
                    mouseleave: (e, t) => (d(void 0), !1),
                  },
                },
              }),
            [t, r],
          );
        if ((ce(m), !u || !c || !s)) return null;
        const p = u.getAttribute("href");
        return n.createElement(
          de,
          { top: c, left: s },
          n.createElement("div", { className: le.Link }, p),
          n.createElement(
            "div",
            { className: le.LinkHelp },
            (0, f.we)("#UserGameNotes_ClickToOpenLink"),
          ),
        );
      }
      function de(e) {
        const { top: t, left: r, children: a } = e,
          [o, s] = n.useState(0),
          i = n.useRef(null);
        n.useLayoutEffect(() => {
          s(i.current.getBoundingClientRect().width);
        }, [t, r, a]);
        const c = { top: `${t}px`, left: `${Math.max(r - o / 2, 12)}px` };
        return n.createElement(
          "div",
          { className: le.Hover, style: c, ref: i },
          a,
        );
      }
      function me(e, t) {
        t.open(e);
      }
      var pe = r(76217),
        he = r(63512),
        ge = r(73170);
      class fe {
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
      function be(e) {
        return e
          .filter((e) => e.isText)
          .map((e) => e.text)
          .join();
      }
      class _e extends P.Al {
        constructor(e) {
          super(e.bbcode_dictionary, () => new fe(e.pm_schema)),
            (this.m_mapPMBBNodes = new Map()),
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
            this.ConvertLineBreaksToParagraphs(H.FK.fromArray(t)),
          );
        }
        TryCreateNode(e, t, r) {
          let n = H.FK.from(t);
          if (!e.node.validContent(n) && e.acceptNode) {
            let r = t.filter((t) => t.type == e.acceptNode);
            if (!r.length) {
              let n = t;
              e.acceptNode.isBlock &&
                n.length > 1 &&
                n[n.length - 1].type == this.schema.nodes.hard_break &&
                (n = n.slice(0, -1));
              const a = this.m_mapPMBBNodes.get(e.acceptNode.name);
              (0, j.w)(
                a,
                `Indicated acceptNode type ${e.acceptNode.name} for ${e.node.name} missing`,
              ),
                (r = a
                  ? [this.TryCreateNode(a, n, void 0)]
                  : [e.acceptNode.create(void 0, n)]);
            }
            n = H.FK.from(r);
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
                  (n = { ...(n || {}), [e.convertContentToAttr]: be(r) }),
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
                const t = this.nodeType || (e ? r.nodes.paragraph : void 0);
                t && (n.push(t.createChecked({}, this.nodes)), this.reset());
              },
            };
          return (
            e.forEach((e) => {
              const o = e.type == r.nodes.hard_break,
                s = H.FK.from(e);
              if (o || r.topNodeType.validContent(s)) {
                const t = o && a.nodes.length > 0;
                a.emit(),
                  o
                    ? t || n.push(r.nodes.paragraph.createChecked())
                    : n.push(e);
              } else {
                let n;
                (n = r.nodes.paragraph.validContent(s)
                  ? r.nodes.paragraph
                  : t.get(e.type.name)),
                  n
                    ? a.accumulate(n, e)
                    : ((0, j.w)(
                        !1,
                        `Couldn't accept ${e.type.name} at root of document, converting to paragraph`,
                      ),
                      (n = r.nodes.paragraph),
                      a.accumulate(
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
            (!a.nodes.length && n.length) || a.emit(!0),
            H.FK.from(n)
          );
        }
      }
      var Be = r(29287);
      var we = r(52038),
        ye = r(73745),
        ve = r(78327),
        Me = r(73309);
      function Ee(e) {
        const {
            schemaConfig: t,
            bbcode: r,
            className: a,
            onUpdate: o,
            refView: s,
            bSpellcheckEnabled: i = !0,
            panelProps: c,
            children: l,
            dataKey: u,
          } = e,
          [d, m] = n.useState(),
          p = n.useRef(),
          h = n.useMemo(() => new _e(t), [t]),
          g = n.useRef(h);
        g.current = h;
        const b = n.useCallback(
          (e) => {
            var r, n;
            if (!e)
              return void (
                null === (r = p.current) ||
                void 0 === r ||
                r.destroy()
              );
            const a = p.current;
            a && a.destroy();
            const o = t.pm_schema;
            (p.current = new Be.Lz(e, {
              state:
                null !== (n = null == a ? void 0 : a.state) && void 0 !== n
                  ? n
                  : J.$t.create({ schema: o }),
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
                  const a = e.current.ConvertLineBreaksToParagraphs(r.content);
                  return H.Ji.maxOpen(a);
                })(g, o.nodes.hard_break, e),
            })),
              m(p.current);
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
                return J.$t.create({ schema: t, doc: e, plugins: s });
              })(g.current.ParseBBCode(r), t.pm_schema, d.state),
            );
        }, [t, r, d, u]),
          (0, ye.D5)(s, d);
        const {
            refDiv: _,
            onActivate: B,
            onGamepadDirection: w,
          } = (function (e) {
            (0, ve.rP)();
            const t = n.useRef(),
              r = (0, ge.FN)(),
              a = n.useCallback(() => {
                var n, a;
                if (
                  (r.ShowVirtualKeyboard(),
                  !(null === (n = e.current) || void 0 === n
                    ? void 0
                    : n.hasFocus()))
                ) {
                  null === (a = e.current) || void 0 === a || a.focus();
                  let r = e.current.dom.childNodes;
                  for (let n = 0; n < r.length; ++n) {
                    let a = r[n],
                      o = a.offsetTop;
                    if (void 0 !== o && o >= t.current.scrollTop) {
                      let t = a.getBoundingClientRect();
                      ae(e.current, t.left, t.top);
                      break;
                    }
                  }
                }
              }, [r, e]),
              o = n.useCallback((e) => e.currentTarget == e.target, []),
              s = (0, he.ak)(t, null, null, o);
            return { refDiv: t, onActivate: a, onGamepadDirection: s };
          })(p),
          y = (0, ye.Ue)(_, b);
        return n.createElement(
          se,
          { view: d },
          n.createElement(pe.Z, {
            key: `editordiv_${i}`,
            className: (0, we.A)(a, Me.Container),
            ref: y,
            spellCheck: i,
            focusable: !0,
            onActivate: B,
            onOKActionDescription: (0, f.we)("#UserGameNotes_Edit"),
            onGamepadDirection: w,
            ...c,
          }),
          n.createElement(ie, { onUpdate: o, schema: t.pm_schema }),
          l,
        );
      }
      var ke = r(32754),
        Ce = r(27491),
        Ne = r(33645),
        Te = r.n(Ne);
      function Se(e, t, r = 0) {
        return () => [e, { class: t }, r];
      }
      const Ae = {
          paragraph: {
            content: "inline*",
            group: "block",
            parseDOM: [{ tag: "p" }],
            toDOM: Se("p", (0, we.A)("pm_paragraph", Te().Paragraph)),
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
                  `BB_Header${e.attrs.level} ` + Te()[`Header${e.attrs.level}`],
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
              return ["img", { src: t, alt: r, title: n, class: Te().Image }];
            },
            bbCode: {
              tag: "img",
              BBArgsToAttrs: (e) => ({ src: e.src }),
              AttrsToBBArgs: (e) => ({ args: { src: e.src } }),
              convertContentToAttr: "src",
            },
          },
          bullet_list: {
            ...ee.fF,
            content: "list_item+",
            group: "block",
            toDOM: Se("ul", Te().List),
            bbCode: { tag: "list" },
          },
          ordered_list: {
            ...ee.o8,
            content: "list_item+",
            group: "block",
            toDOM: Se("ol", Te().OrderedList),
            bbCode: { tag: "olist" },
          },
          list_item: {
            ...ee.Aw,
            content: "paragraph block*",
            toDOM: Se("li", Te().ListItem),
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
              { class: Te().CodeBlock },
              ["code", { class: Te().Code }, 0],
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
            toDOM: Se("b", (0, we.A)("BB_Bold", Te().Bold)),
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
            toDOM: Se("i", (0, we.A)("BB_Italic", Te().Italic)),
            bbCode: { tag: "i" },
          },
          underline: {
            parseDOM: [{ tag: "u" }, { style: "text-decoration=underline" }],
            toDOM: Se("u", (0, we.A)("BB_Underline", Te().Underline)),
            bbCode: { tag: "u" },
          },
          strike: {
            parseDOM: [{ style: "text-decoration=line-through" }],
            toDOM: Se("span", (0, we.A)("BB_Strike", Te().Strike)),
            bbCode: { tag: "strike" },
          },
          code: {
            parseDOM: [{ tag: "code" }],
            toDOM: Se("code", (0, we.A)("BB_Code", Te().Code)),
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
        };
      const ze = { nodes: { ...Ae }, marks: { ...Re } },
        Fe = new (class {
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
                const { tag: c, AttrsToBBArgs: l } = s[0];
                this.m_PMToBBCodeConfig.mapNodes.set(a, {
                  tag: c,
                  AttrsToBBArgs: l,
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
        })(ze);
      var Ue = r(67660);
      const Oe =
        r.p +
        "images/applications/community/image_error.svg?v=valveisgoodatcaching";
      function De(e) {
        const { uploadImage: t, nodeType: r, nMaxImageSize: a = Ie } = e;
        return (
          ce(
            n.useMemo(
              () =>
                new J.k_({
                  key: new J.hs(`PMUploadImage_${r.name}`),
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
                              src: Oe,
                              title: (0, f.we)("#UserGameNotes_ImageTooLarge"),
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
                                  o = (0, Ue.wI)(await a.arrayBuffer());
                                Ge(
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
      function Ge(e, t, r) {
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
            expandDirection: o = "height",
            msAnimationDuration: s = 250,
            children: i,
          } = e,
          {
            style: c,
            active: l,
            refDiv: u,
          } = (function (e, t = "height", r = 250) {
            const a = n.useRef(),
              o = n.useRef(!0),
              [s, i] = n.useState("idle"),
              [c, l] = n.useState({});
            n.useLayoutEffect(() => {
              o.current ? (o.current = !1) : i("start");
            }, [e]),
              n.useLayoutEffect(() => {
                const r = a.current,
                  n = "height" == t ? "scrollHeight" : "scrollWidth";
                if ("start" == s) {
                  const a = r[n];
                  l((r) => ({
                    [t]: e ? "0px" : `${a}px`,
                    ...r,
                    overflow: "hidden",
                  })),
                    i("active");
                } else if ("active" == s) {
                  r.scrollTop;
                  const a = r[n];
                  l({ overflow: "hidden", [t]: e ? `${a}px` : "0px" });
                  const o = () => {
                    We.unstable_batchedUpdates(() => {
                      l({}), i("idle");
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
            const u = { ...c, transition: `${t} ${r}ms` };
            return { style: u, active: "idle" != s, refDiv: a };
          })(t, o, s);
        return t || l || a
          ? n.createElement("div", { className: r, ref: u, style: c }, i)
          : null;
      }
      var Pe = r(6144);
      const je = () => n.useContext(qe);
      function Le(e) {
        const { view: t, refUpdateToolbar: r, children: a } = e,
          o = n.useRef();
        o.current || (o.current = new Pe.lu()),
          n.useEffect(
            () => (
              (0, ye.cZ)(r, () => o.current.Dispatch(t)),
              () => (0, ye.cZ)(r, void 0)
            ),
            [t, r],
          );
        const s = n.useMemo(() => ({ callbacks: o.current, view: t }), [t]);
        return t ? n.createElement(qe.Provider, { value: s }, a) : null;
      }
      const qe = n.createContext(void 0);
      function $e() {
        return n.createElement("div", { className: Me.Gap });
      }
      function Ke() {
        return n.createElement("div", { className: Me.Spacer });
      }
      function Ve(e) {
        return n.createElement(
          pe.Z,
          {
            className: (0, we.A)(e.className, Me.ToolbarRow),
            "flow-children": "row",
          },
          e.children,
        );
      }
      function He(e) {
        const { nodeType: t, tooltip: r, attrs: a, children: o } = e,
          { callbacks: s, view: i } = je(),
          [c, l] = n.useState(() => re(i.state, t, a)),
          u = n.useCallback((e) => l(re(e.state, t, a)), [t, a]);
        (0, ye.hL)(s, u);
        const d = n.useMemo(() => X.y_(t, a), [a, t]);
        return n.createElement(Ye, {
          command: d,
          tooltip: r,
          toggled: c,
          children: o,
        });
      }
      function Je(e) {
        const { mark: t, tooltip: r, children: a } = e,
          { callbacks: o, view: s } = je(),
          [i, c] = n.useState(() => te(s.state, t)),
          l = n.useCallback((e) => c(te(e.state, t)), [t]);
        (0, ye.hL)(o, l);
        const u = n.useMemo(() => X.wh(t), [t]);
        return n.createElement(Ye, {
          command: u,
          tooltip: r,
          toggled: i,
          children: a,
        });
      }
      function Xe(e) {
        const { fnEnabledCheck: t, ...r } = e,
          { callbacks: a, view: o } = je(),
          [s, i] = n.useState(() => t(o)),
          c = n.useCallback((e) => i(t(e)), [t]);
        return (0, ye.hL)(a, c), n.createElement(Ye, { ...r, disabled: !s });
      }
      function Ye(e) {
        const {
            command: t,
            toggled: r,
            tooltip: a,
            disabled: o,
            children: s,
          } = e,
          { view: i } = je();
        return n.createElement(
          ke.Gq,
          { toolTipContent: a, bDisabled: !a, direction: "bottom" },
          n.createElement(
            I.$n,
            {
              className: (0, we.A)(Me.CommandButton, r && Me.Toggled),
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
      function Ze(e) {
        const {
          onClick: t,
          toggled: r,
          tooltip: a,
          disabled: o,
          children: s,
        } = e;
        return n.createElement(
          ke.Gq,
          { toolTipContent: a, bDisabled: !a, direction: "bottom" },
          n.createElement(
            I.$n,
            {
              className: (0, we.A)(Me.CommandButton, r && Me.Toggled),
              onMouseDown: (e) => {
                e.preventDefault(), t();
              },
              disabled: !0 === o,
            },
            s,
          ),
        );
      }
      function Qe(e) {
        const { schema: t, children: r } = e,
          { callbacks: a, view: o } = je(),
          [s, i] = n.useState(() => te(o.state, t.marks.link)),
          c = n.useCallback((e) => i(te(e.state, t.marks.link)), [t]);
        (0, ye.hL)(a, c);
        const [l, u, d] = (0, ye.uD)();
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(
            x.EN,
            { active: l },
            n.createElement(et, {
              schema: t,
              active: l,
              closeModal: d,
              view: o,
            }),
          ),
          n.createElement(
            ke.Gq,
            {
              toolTipContent: "#FormattingToolbar_InsertLink",
              direction: "bottom",
            },
            n.createElement(
              I.$n,
              {
                className: (0, we.A)(Me.CommandButton, s && Me.Toggled),
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
      const et = n.memo(function (e) {
        const { schema: t, active: r, closeModal: a, view: o } = e,
          [s, i] = n.useState(""),
          [c, l] = n.useState(""),
          u = n.useRef(),
          d = n.useRef();
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
                  ? (l(e),
                    u.current.Focus(),
                    window.setTimeout(() => {
                      u.current.element.select();
                    }, 0))
                  : 0 == e.length
                    ? u.current.Focus()
                    : d.current.Focus();
            }
          }, [r, o]),
          n.createElement(
            x.o0,
            {
              onOK: () => {
                o.dispatch(
                  o.state.tr.replaceRangeWith(
                    o.state.selection.from,
                    o.state.selection.to,
                    t.text(s || c, [t.marks.link.create({ href: c })]),
                  ),
                ),
                  o.focus(),
                  a();
              },
              closeModal: a,
              strTitle: (0, f.we)("#FormattingToolbar_InsertLink"),
              strOKButtonText: (0, f.we)("#FormattingToolbar_InsertLink"),
              bOKDisabled: 0 == c.length,
            },
            n.createElement(I.pd, {
              ref: u,
              value: s,
              onChange: (e) => i(e.currentTarget.value),
              label: (0, f.we)("#FormattingToolbar_LinkText"),
            }),
            n.createElement(I.pd, {
              ref: d,
              value: c,
              onChange: (e) => l(e.currentTarget.value),
              label: (0, f.we)("#FormattingToolbar_LinkAddress"),
            }),
          )
        );
      });
      function tt() {
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(
            Xe,
            {
              tooltip: "#FormattingToolbar_Undo",
              command: Z.tN,
              fnEnabledCheck: rt,
            },
            n.createElement(W.VnB, null),
          ),
          n.createElement(
            Xe,
            {
              tooltip: "#FormattingToolbar_Redo",
              command: Z.ZS,
              fnEnabledCheck: nt,
            },
            n.createElement(W.Bal, null),
          ),
        );
      }
      function rt(e) {
        return Z.mk(e.state) > 0;
      }
      function nt(e) {
        return Z.mL(e.state) > 0;
      }
      function at(e) {
        const { schema: t } = e;
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(
            Je,
            { tooltip: "#FormattingToolbar_Bold", mark: t.marks.strong },
            n.createElement(W.l4n, null),
          ),
          n.createElement(
            Je,
            { tooltip: "#FormattingToolbar_Italic", mark: t.marks.italic },
            n.createElement(W.UKJ, null),
          ),
          n.createElement(
            Je,
            {
              tooltip: "#FormattingToolbar_Underline",
              mark: t.marks.underline,
            },
            n.createElement(W.Gj3, null),
          ),
          "strike" in t.marks &&
            n.createElement(
              Je,
              { tooltip: "#FormattingToolbar_Strike", mark: t.marks.strike },
              n.createElement(W.tI4, null),
            ),
          "code" in t.marks &&
            n.createElement(
              Je,
              { tooltip: "#FormattingToolbar_InlineCode", mark: t.marks.code },
              n.createElement(W.bmT, null),
            ),
        );
      }
      function ot(e) {
        const { schema: t } = e;
        return n.createElement(
          He,
          {
            tooltip: "#FormattingToolbar_Paragraph",
            nodeType: t.nodes.paragraph,
          },
          n.createElement(W.iYj, null),
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
              He,
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
              He,
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
              He,
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
              He,
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
              He,
              {
                tooltip: "#FormattingToolbar_HeadingLevel5",
                nodeType: t.nodes.heading,
                attrs: { level: 5 },
              },
              n.createElement(W.jXA, null),
            ),
        );
      }
      function it(e) {
        const { schema: t, showIndentButtonsAsNeeded: r = !1 } = e,
          { callbacks: a, view: o } = je(),
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
          [i, c] = n.useState(() => s(o));
        return (
          (0, ye.hL)(
            a,
            n.useCallback((e) => c(s(e)), [s]),
          ),
          n.createElement(
            n.Fragment,
            null,
            n.createElement(
              Ye,
              {
                tooltip: "#FormattingToolbar_BulletedList",
                toggled: i,
                command: ee.Sd(t.nodes.bullet_list),
              },
              n.createElement(W.JPq, null),
            ),
            (i || !r) &&
              n.createElement(
                n.Fragment,
                null,
                n.createElement(
                  Ye,
                  {
                    tooltip: "#FormattingToolbar_OutdentList",
                    disabled: !i,
                    command: ee.T2(t.nodes.list_item),
                  },
                  n.createElement(W.LSz, null),
                ),
                n.createElement(
                  Ye,
                  {
                    tooltip: "#FormattingToolbar_IndentList",
                    disabled: !i,
                    command: ee.$B(t.nodes.list_item),
                  },
                  n.createElement(W.ycU, null),
                ),
              ),
          )
        );
      }
      function ct(e) {
        const { schema: t } = e;
        return n.createElement(Qe, { schema: t }, n.createElement(W.YqK, null));
      }
      function lt(e) {
        const { bSpellcheckEnabled: t, setSpellcheckEnabled: r } = e;
        return n.createElement(
          Ze,
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
      var ut = r(76011);
      function dt(e) {
        const {
            schema: t,
            view: r,
            refUpdateToolbar: a,
            className: o,
            bSpellcheckEnabled: s,
            setSpellcheckEnabled: i,
          } = e,
          [c, l] = (0, ut.SP)("FormattingToolbar_Expanded", !1);
        return n.createElement(
          Le,
          { refUpdateToolbar: a, view: r },
          n.createElement(
            "div",
            { className: (0, we.A)(Me.Toolbar, o) },
            n.createElement(
              Ve,
              null,
              n.createElement(tt, null),
              n.createElement($e, null),
              n.createElement(at, { schema: t }),
              n.createElement(Ke, null),
              n.createElement(
                Ze,
                {
                  onClick: () => l(!c),
                  tooltip: "#FormattingToolbar_ExpandOptions",
                },
                n.createElement(W.cLJ, { direction: c ? "up" : "down" }),
              ),
            ),
            n.createElement(
              xe,
              { visible: c },
              n.createElement(
                Ve,
                null,
                n.createElement(ot, { schema: t }),
                n.createElement(st, { schema: t, levels: 5 }),
                n.createElement(
                  He,
                  {
                    nodeType: t.nodes.code_block,
                    tooltip: (0, f.we)("#FormattingToolbar_CodeBlock"),
                  },
                  n.createElement(W.kNE, null),
                ),
                n.createElement($e, null),
                n.createElement(it, { schema: t }),
                n.createElement($e, null),
                n.createElement(ct, { schema: t }),
                n.createElement(Ke, null),
                i &&
                  n.createElement(lt, {
                    bSpellcheckEnabled: s,
                    setSpellcheckEnabled: i,
                  }),
              ),
            ),
          ),
        );
      }
      const mt = 15;
      function pt(e) {
        const { note: t } = e,
          [r, a] = n.useState(!1),
          [o, s] = n.useState(),
          i = n.useRef(),
          u = n.useRef(),
          p = n.useRef(t.content),
          b = n.useRef(!1),
          _ = n.useContext(m).onClickURL,
          y =
            null === (v = n.useContext(m).bSpellcheckEnabled) ||
            void 0 === v ||
            v;
        var v;
        const M = n.useContext(m).setSpellcheckEnabled,
          E = (function (e) {
            const t = g();
            return n.useCallback(
              async (r, n) => {
                const a = new Uint8Array(n),
                  o = await t.UploadImage(`notes_${e}_images/`, r, a);
                return Promise.resolve("/gamenotes/" + o);
              },
              [t, e],
            );
          })(t.appid),
          k = (0, ve.Qn)();
        p.current == t.content || b.current || (p.current = t.content);
        const C = p.current,
          N = (function () {
            const e = (0, c.jE)(),
              t = g();
            return (0, l.n)({
              mutationFn: (e) => t.SaveGameNote(e.note, e.title, e.bbcode),
              onMutate(t) {
                const r = { ...t.note, title: t.title, content: t.bbcode };
                return (
                  w(e, d(t.note), (e) => e.map((e) => (e.id == r.id ? r : e))),
                  console.log(r),
                  r
                );
              },
              onSuccess(t, r, n) {
                console.log(n, t),
                  w(e, d(r.note), (e) =>
                    e.map((e) =>
                      e.id === n.id ? { ...e, id: t, not_persisted: !1 } : e,
                    ),
                  );
              },
            });
          })(),
          T = n.useCallback((e, t) => {
            i.current && i.current(),
              t.doc &&
                t.doc != e.state.doc &&
                (b.current ||
                  ((b.current = !0),
                  G.y.ReportTrackedAction("/GameNotes/NoteModified")),
                (u.current = () => ({
                  title: bt(e.state.doc),
                  bbcode: L(e.state.doc, Fe),
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
                  N.mutate({ note: t, title: r, bbcode: n }),
                  a(!1);
              }
              (e = void 0), (u.current = void 0);
            },
            o = window.setTimeout(n, 1e3 * mt);
          return () => {
            window.clearTimeout(o), n();
          };
        }, [N, r, t]),
          n.useEffect(() => {
            o && o.focus();
          }, [o]);
        const S = h(),
          A = B(t, S),
          R = {
            onSecondaryButton: () => A.mutate(),
            onSecondaryActionDescription: (0, f.we)(
              "#UserGameNotes_DeleteNote",
            ),
          };
        return n.createElement(
          "div",
          { className: Ce.NoteEditorArea },
          !k &&
            n.createElement(dt, {
              schema: Fe.pm_schema,
              view: o,
              refUpdateToolbar: i,
              className: Ce.Toolbar,
              bSpellcheckEnabled: y,
              setSpellcheckEnabled: M,
            }),
          n.createElement(
            Ee,
            {
              schemaConfig: Fe,
              className: Ce.EditorInput,
              bbcode: C,
              onUpdate: T,
              refView: s,
              bSpellcheckEnabled: y,
              panelProps: R,
            },
            n.createElement(De, {
              uploadImage: E,
              nodeType: Fe.pm_schema.nodes.image,
            }),
            n.createElement(ue, {
              linkMarkType: Fe.pm_schema.marks.link,
              schema: Fe.pm_schema,
              onClickURL: _,
            }),
          ),
          !k && n.createElement(ht, { note: t, bDirty: r }),
        );
      }
      function ht(e) {
        const { note: t, bDirty: r } = e,
          [a, o, s] = (0, ye.uD)(!1),
          i = "single" == n.useContext(m).mode,
          c = h(),
          l = B(t, c),
          u = n.useCallback(() => {
            !r && t.not_persisted ? l.mutate() : o();
          }, [r, t, l, o]);
        return n.createElement(
          "div",
          { className: Ce.NoteActions },
          a && n.createElement(ft, { note: t, closeModal: s, deleteNote: l }),
          n.createElement(
            ke.he,
            { toolTipContent: "#UserGameNotes_DeleteNote", direction: "top" },
            n.createElement(I.$n, { onClick: u }, n.createElement(W.lMJ, null)),
          ),
          i && n.createElement(gt, { bDirty: r }),
        );
      }
      function gt(e) {
        const { bDirty: t } = e,
          r = h();
        return t
          ? n.createElement(
              I.jn,
              { onClick: () => r(), className: Ce.CloseWindowButton },
              (0, f.we)("#Button_SaveAndClose"),
            )
          : n.createElement(
              I.$n,
              { onClick: () => r(), className: Ce.CloseWindowButton },
              (0, f.we)("#Button_Close"),
            );
      }
      function ft(e) {
        const { note: t, closeModal: r, deleteNote: a } = e;
        return n.createElement(
          x.EN,
          { active: !0 },
          n.createElement(x.o0, {
            strTitle: (0, f.we)("#UserGameNotes_DeleteNote"),
            strDescription: (0, f.we)("#UserGameNotes_PromptDelete"),
            onOK: () => a.mutate(),
            bOKDisabled: a.isPending,
            strOKButtonText: (0, f.we)("#Button_Delete"),
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
          t = y(
            "appid" in e.params && Number(e.params.appid),
            "shortcut_name" in e.params && e.params.shortcut_name,
          );
        let r = e.params.noteid;
        const o = (0, a.W6)(),
          s = (function (e) {
            const t = (0, c.jE)(),
              r = g();
            return n.useCallback(() => {
              const n = (0, f.we)("#UserGameNotes_UntitledNote_Title"),
                a = r.NewNote(e, n);
              return w(t, e, (e) => [...e, a]), a.id;
            }, [t, r, e]);
          })(t),
          { data: i, isLoading: l } = _(t);
        let u;
        i && r && (u = i.find((e) => e.id === r)),
          n.useLayoutEffect(() => {
            !i ||
              (r && i.find((e) => e.id === r)) ||
              (i.length > 0 && i[0].id ? wt(o, t, i[0].id) : wt(o, t, s()));
          }, [o, t, r, i, s]);
        const d = n.createElement(
          ke.he,
          { toolTipContent: "#UserGameNotes_NewNote", direction: "top" },
          n.createElement(
            I.$n,
            {
              className: Ce.NewNoteButton,
              onClick: () => {
                const e = s();
                wt(o, t, e);
              },
            },
            n.createElement(W.qY3, null),
          ),
        );
        return i
          ? n.createElement(Bt, {
              noteParent: t,
              notes: i,
              activeNoteID: null == u ? void 0 : u.id,
              actions: d,
            })
          : null;
      }
      function Bt(e) {
        const { noteParent: t, notes: r, activeNoteID: o, actions: s } = e,
          [i, c] = (0, ut.SP)("NotesListCollapsed", !1),
          l = n.useContext(m).bPinnedView,
          u = (0, ve.Qn)(),
          d = r.map((e) => {
            var t;
            return {
              title:
                (null === (t = e.title) || void 0 === t ? void 0 : t.length) > 0
                  ? e.title
                  : (0, f.we)("#UserGameNotes_Untitled"),
              identifier: e.id,
              content: n.createElement(pt, { note: e }),
              pageClassName: Ce.NotePage,
              hideTitle: !0,
            };
          }),
          p = (0, a.W6)(),
          h = n.useCallback((e) => wt(p, t, e), [p, t]);
        return n.createElement(I.Bv, {
          title: (0, f.we)("#UserGameNotes_NotesList"),
          pages: d,
          className: (0, we.A)(Ce.NotesPagedSettings, l && Ce.PinnedView),
          page: o,
          onPageRequested: h,
          bottomControls: s,
          hideList: i,
          toggleHideList: l || u ? void 0 : () => c(!i),
        });
      }
      function wt(e, t, r) {
        let n;
        (n =
          "appid" in t
            ? o.AppNotes(t.appid, r)
            : o.ShortcutNotes(t.shortcut, r)),
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
      class Ct extends Mt {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ct.prototype.notes || vt.Sg(Ct.M()),
            Mt.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Ct.sm_m ||
              (Ct.sm_m = {
                proto: Ct,
                fields: { notes: { n: 1, c: Et, r: !0, q: !0 } },
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
          return "CUserGameNotes_GetNotesForGame_Response";
        }
      }
      class Nt extends Mt {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Nt.prototype.appid || vt.Sg(Nt.M()),
            Mt.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Nt.sm_m ||
              (Nt.sm_m = {
                proto: Nt,
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
          return "CUserGameNotes_SaveNote_Request";
        }
      }
      class Tt extends Mt {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Tt.prototype.note_id || vt.Sg(Tt.M()),
            Mt.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Tt.sm_m ||
              (Tt.sm_m = {
                proto: Tt,
                fields: {
                  note_id: {
                    n: 1,
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
          return "CUserGameNotes_SaveNote_Response";
        }
      }
      class St extends Mt {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            St.prototype.appid || vt.Sg(St.M()),
            Mt.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            St.sm_m ||
              (St.sm_m = {
                proto: St,
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
                fields: { games_with_notes: { n: 1, c: Ft, r: !0, q: !0 } },
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
      class Ft extends Mt {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ft.prototype.appid || vt.Sg(Ft.M()),
            Mt.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ft.sm_m ||
              (Ft.sm_m = {
                proto: Ft,
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
            Ft.sm_m
          );
        }
        static MBF() {
          return Ft.sm_mbf || (Ft.sm_mbf = vt.w0(Ft.M())), Ft.sm_mbf;
        }
        toObject(e = !1) {
          return Ft.toObject(e, this);
        }
        static toObject(e, t) {
          return vt.BT(Ft.M(), e, t);
        }
        static fromObject(e) {
          return vt.Uq(Ft.M(), e);
        }
        static deserializeBinary(e) {
          let t = new yt.BinaryReader(e),
            r = new Ft();
          return Ft.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return vt.zj(Ft.MBF(), e, t);
        }
        serializeBinary() {
          var e = new yt.BinaryWriter();
          return Ft.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          vt.i0(Ft.M(), e, t);
        }
        serializeBase64String() {
          var e = new yt.BinaryWriter();
          return Ft.serializeBinaryToWriter(this, e), e.getResultBase64String();
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
            (0, E.I8)(kt, t),
            Ct,
            { ePrivilege: 1 },
          );
        }),
          (e.SaveNote = function (e, t) {
            return e.SendMsg("UserGameNotes.SaveNote#1", (0, E.I8)(Nt, t), Tt, {
              ePrivilege: 1,
            });
          }),
          (e.DeleteNote = function (e, t) {
            return e.SendMsg(
              "UserGameNotes.DeleteNote#1",
              (0, E.I8)(St, t),
              At,
              { ePrivilege: 1 },
            );
          }),
          (e.GetGamesWithNotes = function (e, t) {
            return e.SendMsg(
              "UserGameNotes.GetGamesWithNotes#1",
              (0, E.I8)(Rt, t),
              zt,
              { ePrivilege: 1 },
            );
          });
      })(Ut || (Ut = {}));
      class Ot {
        constructor(e) {
          this.m_SteamInterface = e;
        }
        async GetGamesWithNotes() {
          const e = E.w.Init(Rt);
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
          const r = E.w.Init(kt);
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
          const n = E.w.Init(Nt);
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
          const r = E.w.Init(St);
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
              id: "temp_" + Ot.sm_lastNoteID++,
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
        const t = (0, C.TR)(),
          [r] = n.useState(() => new Ot(t));
        return n.createElement(
          p,
          { mode: "page", store: r },
          n.createElement(
            a.dO,
            null,
            n.createElement(a.qh, { path: o.List() }, n.createElement(O, null)),
            n.createElement(
              a.qh,
              { path: o.AppNotes(":appid", ":noteid?") },
              n.createElement(_t, null),
            ),
            n.createElement(
              a.qh,
              null,
              n.createElement(a.rd, { to: `${o.List()}` }),
            ),
          ),
        );
      }
      Ot.sm_lastNoteID = 0;
    },
    61788: (e, t, r) => {
      "use strict";
      r.d(t, { y: () => m });
      var n = r(34629),
        a = r(56545),
        o = r(59134),
        s = r(60778),
        i = r(14771),
        c = r(6419);
      const l = new s.wd("ReactUsageReporting").Debug,
        u = 1e3 * i.Kp.PerMinute;
      class d {
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
          l("Route match: " + e), this.ReportInternal(e, this.m_mapRoutes);
        }
        ReportTrackedComponent(e) {
          l("Tracked component: " + e),
            this.ReportInternal(e, this.m_mapComponents);
        }
        ReportTrackedAction(e) {
          l("User action: " + e), this.ReportInternal(e, this.m_mapActions);
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
      (0, n.Cg)([c.o], d.prototype, "CheckSend", null);
      const m = new d();
    },
  },
]);
