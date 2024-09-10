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
        FileUploadPlaceholder: "_2P-FBc3tZWGeeBFplDSb9g",
        Throbber: "_12t6JmDCFT6MqtNVrSi5NJ",
        PendingImage: "_2HezQYTfmFfdRmuB8l9QPI",
        FileUploadDragDrop: "_1WRaNQqBKcUp67ntgoyEeQ",
        FileUploadDropFilesMessage: "I2CE9X_I0GBNYbJf7VYBg",
      };
    },
    26796: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => Wt });
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
        N = r(37403),
        k = r(23809),
        C = r(30470),
        T = r(22837);
      let S;
      const R = 864e5;
      function A(e) {
        return `appinfo_${e}_${C.TS.LANGUAGE}`;
      }
      function z(e) {
        return Boolean(e && Date.now() - e.timeCached < R);
      }
      function U(e) {
        const t = (0, k.KV)(),
          r = (0, k.rX)();
        return (0, i.I)({
          queryKey: ["appinfo", e],
          queryFn: async () =>
            (function (e, t) {
              return (
                S ||
                  (S = new (M())(
                    async (r) => {
                      const n = new Map();
                      (await Promise.all(r.map((e) => t.GetObject(A(e)))))
                        .filter(z)
                        .forEach(({ value: e }) => n.set(e.appid, e));
                      const a = r.slice().filter((e) => !n.has(e));
                      if (a.length) {
                        const r = E.w.Init(N._z);
                        r.Body().set_language((0, T.sf)(C.TS.LANGUAGE)),
                          r.Body().set_appids(a);
                        const o = await N.BE.GetApps(e, r);
                        if (1 != o.GetEResult()) throw o.GetErrorMessage();
                        o.Body()
                          .toObject()
                          .apps.forEach((e) => {
                            t.StoreObject(A(e.appid), {
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
          staleTime: R,
          enabled: !!e,
        }).data;
      }
      var F = r(22797);
      function O() {
        const { data: e, isLoading: t } = (function () {
          const e = g();
          return (0, i.I)({
            queryKey: ["GameNotes", "GamesWithNotes"],
            queryFn: () => e.GetGamesWithNotes(),
          });
        })();
        return t
          ? n.createElement(F.t, { msDelayAppear: 300 })
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
          r = U(t.appid);
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
        j = r(49693),
        P = r(81393);
      function q(e, t) {
        return L(t.pm_schema, t.pm_to_bbcode_config, e);
      }
      function L(e, t, r) {
        let n = r.marks,
          a = "";
        const o = t.mapNodes.get(r.type),
          { tag: s, args: i } = V(o, r.attrs);
        return (
          s && (a += (0, j.CS)(s, i)),
          r.content.forEach((r) => {
            ([a, n] = $(t, n, r.marks, a)),
              ([a, n] = (function (e, t, r, n) {
                let a;
                for (const o of r)
                  if (-1 === t.indexOf(o)) {
                    a || (a = t.slice());
                    const r = e.mapMarks.get(o.type);
                    if (((0, P.w)(r, "mark missing bbtag"), r)) {
                      a.push(o);
                      const { args: e, tag: t } = V(r, o.attrs);
                      n += (0, j.CS)(t, e || {});
                    }
                  }
                return [n, null != a ? a : t];
              })(t, n, r.marks, a)),
              r.type.isText
                ? (a += (0, j.vE)(r.text || ""))
                : r.type == e.nodes.hard_break
                  ? (a += "\n")
                  : (a += L(e, t, r));
          }),
          ([a] = $(t, n, [], a)),
          s && (a += (0, j.op)(s)),
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
          a.length && ((0, P.w)(o.length, "no marks left to close"), o.length);

        ) {
          const t = o.pop(),
            r = e.mapMarks.get(t.type),
            { tag: s } = V(r, t.attrs);
          n += (0, j.op)(s);
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
      class Y {
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
      function X(e) {
        let t = "";
        return (
          e.descendants((e) => {
            e.isText && (t += e.text);
          }),
          t
        );
      }
      class ee extends j.Al {
        constructor(e) {
          super(e.bbcode_dictionary, () => new Y(e.pm_schema)),
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
            this.ConvertLineBreaksToParagraphs(t),
          );
        }
        TryCreateNode(e, t, r) {
          let n = J.FK.from(t);
          if (!e.node.validContent(n) && e.acceptNode) {
            let r = t.filter((t) => t.type == e.acceptNode);
            if (!r.length) {
              let n = t;
              e.acceptNode.isBlock &&
                n.length > 1 &&
                n[n.length - 1].type == this.schema.nodes.hard_break &&
                (n = n.slice(0, -1));
              const a = this.m_mapPMBBNodes.get(e.acceptNode.name);
              (0, P.w)(
                a,
                `Indicated acceptNode type ${e.acceptNode.name} for ${e.node.name} missing`,
              ),
                (r = a
                  ? [this.TryCreateNode(a, n, void 0)]
                  : [e.acceptNode.create(void 0, n)]);
            }
            n = J.FK.from(r);
          }
          return e.node.createAndFill(r, n) || e.node.create(r, n);
        }
        BBNodeToPMNode(e, t, ...r) {
          let n = e.BBArgsToAttrs ? e.BBArgsToAttrs(t.args || {}) : void 0;
          try {
            return (
              !("convertContentToAttr" in e) ||
                !e.convertContentToAttr ||
                (n && n[e.convertContentToAttr]) ||
                ((n = { ...(n || {}), [e.convertContentToAttr]: Q(r) }),
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
          for (const o of e) {
            const e = o.type == r.nodes.hard_break,
              s = J.FK.from(o);
            if (e || r.topNodeType.validContent(s)) {
              const t = e && a.nodes.length > 0;
              a.emit(),
                e ? t || n.push(r.nodes.paragraph.createChecked()) : n.push(o);
            } else {
              let e;
              (e = r.nodes.paragraph.validContent(s)
                ? r.nodes.paragraph
                : t.get(o.type.name)),
                e
                  ? a.accumulate(e, o)
                  : ((0, P.w)(
                      !1,
                      `Couldn't accept ${o.type.name} at root of document, converting to paragraph`,
                    ),
                    (e = r.nodes.paragraph),
                    a.accumulate(r.nodes.paragraph, r.text(X(o))));
            }
          }
          return (!a.nodes.length && n.length) || a.emit(!0), n;
        }
      }
      var te = r(12362),
        re = r(7502),
        ne = r(79216),
        ae = r(4188);
      function oe(e, t) {
        const { from: r, $from: n, to: a, empty: o } = e.selection;
        return o
          ? !!t.isInSet(e.storedMarks || n.marks())
          : e.doc.rangeHasMark(r, a, t);
      }
      function se(e, t, r) {
        let { $from: n, to: a, node: o } = e.selection;
        return !o && a <= n.end() && (o = n.parent), !!o && o.hasMarkup(t, r);
      }
      function ie(e, t, r = {}) {
        return new ne.fV(e, (e, n, a, o) => {
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
      function ce(e, t, r) {
        const n = { left: t, top: r },
          a = e.posAtCoords(n);
        if (null == a ? void 0 : a.pos) {
          const t = e.state.doc.resolve(a.pos);
          e.dispatch(e.state.tr.setSelection(H.U3.near(t)));
        }
      }
      r(74763);
      const le = n.createContext(null);
      function ue(e) {
        return n.createElement(le.Provider, { value: e.view }, e.children);
      }
      function de(e) {
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
                  const t = (0, te.st)(
                    te.I$,
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
                  return (0, re.w)({
                    "Mod-z": Z.tN,
                    "Mod-y": Z.ZS,
                    Backspace: ne.dv,
                    "Mod-Enter": t,
                    "Shift-Enter": t,
                    "Mod-b": (0, te.wh)(e.marks.strong),
                    "Mod-i": (0, te.wh)(e.marks.italic),
                    Enter: (0, ae.wn)(e.nodes.list_item),
                    "Mod-[": (0, ae.T2)(e.nodes.list_item),
                    "Mod-]": (0, ae.$B)(e.nodes.list_item),
                    "Shift-Ctrl-1": (0, te.y_)(e.nodes.heading, { level: 1 }),
                    "Shift-Ctrl-2": (0, te.y_)(e.nodes.heading, { level: 2 }),
                    "Shift-Ctrl-3": (0, te.y_)(e.nodes.heading, { level: 3 }),
                    "Shift-Ctrl-0": (0, te.y_)(e.nodes.paragraph),
                  });
                })(t),
              [t],
            ),
          ),
          me(n.useMemo(() => (0, re.w)(te.RV), [])),
          me(
            n.useMemo(
              () =>
                (function (e) {
                  return (0, ne.sM)({
                    rules: [
                      (0, ne.tG)(
                        /^(\d+)\.\s$/,
                        e.nodes.ordered_list,
                        (e) => ({ order: parseInt(e[1]) }),
                        (e, t) =>
                          t.childCount + t.attrs.order == parseInt(e[1]),
                      ),
                      (0, ne.tG)(/^\s*([-+*])\s$/, e.nodes.bullet_list),
                      ie(/\*([^*]+)\*/, e.marks.strong),
                      ie(/_([^_]+)_/, e.marks.italic),
                      ie(/~([^~]+)~/, e.marks.strike),
                      ie(/`([^`]+)`/, e.marks.code),
                      (0, ne.JJ)(/^```$/, e.nodes.code_block),
                      (0, ne.JJ)(/^(#{1,5})\s$/, e.nodes.heading, (e) => ({
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
      var pe = r(32381),
        he = r(44078),
        ge = r(61712),
        fe = r(56011),
        be = r(97009);
      function _e() {
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
                        if ((0, fe.kD)(n) && "A" == n.nodeName) {
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
          Be,
          { top: r, left: e },
          n.createElement("div", { className: be.Link }, i),
          n.createElement(
            "div",
            { className: be.LinkHelp },
            (0, f.we)("#UserGameNotes_ClickToOpenLink"),
          ),
        );
      }
      function Be(e) {
        const { top: t, left: r, children: a } = e,
          [o, s] = n.useState(0),
          i = n.useRef();
        n.useLayoutEffect(() => {
          s(i.current.getBoundingClientRect().width);
        }, [t, r, a]);
        const c = { top: `${t}px`, left: `${Math.max(r - o / 2, 12)}px` };
        return n.createElement(
          "div",
          { className: be.Hover, style: c, ref: i },
          a,
        );
      }
      var we = r(51272),
        ye = r(52038),
        ve = r(56093),
        Me = r(61336),
        Ee = r(78327),
        Ne = r(73309);
      function ke(e) {
        const {
            schemaConfig: t,
            bbcode: r,
            className: a,
            onUpdate: o,
            refView: s,
            onClickURL: i,
            bSpellcheckEnabled: c = !0,
            panelProps: l,
            children: u,
            dataKey: d,
          } = e,
          [m, p] = n.useState(),
          h = n.useRef(),
          g = n.useRef();
        g.current = i || Ce;
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
              (h.current = new K.Lz(e, {
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
                  })(t.pm_schema, g.current, ...e),
                clipboardTextParser: (...e) =>
                  (function (e, t, r, n, a) {
                    let o,
                      s = [];
                    for (; (o = t.match(Me.O9)); )
                      o.index > 0 && s.push(e.text(t.substring(0, o.index))),
                        s.push(
                          e.text(o[0], [
                            e.marks.link.create({ href: (0, Me.jT)(o[0]) }),
                          ]),
                        ),
                        (t = t.substring(o.index + o[0].length));
                    t.length && s.push(e.text(t));
                    return new J.Ji(J.FK.from(s), r.start(), r.end());
                  })(t.pm_schema, ...e),
              })),
              p(h.current);
          },
          [t],
        );
        n.useEffect(() => {
          m &&
            m.updateState(
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
                  return new ee(t).ParseBBCode(e);
                })(r, t),
                t.pm_schema,
                m.state,
              ),
            );
        }, [t, r, m, d]),
          (0, ve.D5)(s, m);
        const {
            refDiv: _,
            onActivate: B,
            onGamepadDirection: w,
          } = (function (e) {
            const t = (0, Ee.rP)(),
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
                      ce(e.current, t.left, t.top);
                      break;
                    }
                  }
                }
              }, [o, e]),
              i = n.useCallback((e) => e.currentTarget == e.target, []),
              c = (0, he.ak)(r, null, null, i);
            return { refDiv: r, onActivate: s, onGamepadDirection: c };
          })(h),
          y = (0, ve.Ue)(_, b);
        return n.createElement(
          ue,
          { view: m },
          n.createElement(pe.Z, {
            key: `editordiv_${c}`,
            className: (0, ye.A)(a, Ne.Container),
            ref: y,
            spellCheck: c,
            focusable: !0,
            onActivate: B,
            onOKActionDescription: (0, f.we)("#UserGameNotes_Edit"),
            onGamepadDirection: w,
            ...l,
          }),
          n.createElement(de, { onUpdate: o, schema: t.pm_schema }),
          n.createElement(_e, null),
          u,
        );
      }
      function Ce(e, t) {
        (0, we.EP)(t, e);
      }
      var Te = r(32754),
        Se = r(27491),
        Re = r(33645),
        Ae = r.n(Re);
      function ze(e, t, r = 0) {
        return () => [e, { class: t }, r];
      }
      const Ue = {
          paragraph: {
            content: "inline*",
            group: "block",
            parseDOM: [{ tag: "p" }],
            toDOM: ze("p", (0, ye.A)("pm_paragraph", Ae().Paragraph)),
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
            ...ae.fF,
            content: "list_item+",
            group: "block",
            toDOM: ze("ul", Ae().List),
            bbCode: { tag: "list" },
          },
          ordered_list: {
            ...ae.o8,
            content: "list_item+",
            group: "block",
            toDOM: ze("ol", Ae().OrderedList),
            bbCode: { tag: "olist" },
          },
          list_item: {
            ...ae.Aw,
            content: "paragraph block*",
            toDOM: ze("li", Ae().ListItem),
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
        Fe = {
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
            toDOM: ze("b", (0, ye.A)("BB_Bold", Ae().Bold)),
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
            toDOM: ze("i", (0, ye.A)("BB_Italic", Ae().Italic)),
            bbCode: { tag: "i" },
          },
          underline: {
            parseDOM: [{ tag: "u" }, { style: "text-decoration=underline" }],
            toDOM: ze("u", (0, ye.A)("BB_Underline", Ae().Underline)),
            bbCode: { tag: "u" },
          },
          strike: {
            parseDOM: [{ style: "text-decoration=line-through" }],
            toDOM: ze("span", (0, ye.A)("BB_Strike", Ae().Strike)),
            bbCode: { tag: "strike" },
          },
          code: {
            parseDOM: [{ tag: "code" }],
            toDOM: ze("code", (0, ye.A)("BB_Code", Ae().Code)),
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
      const Oe = { nodes: { ...Ue }, marks: { ...Fe } },
        De = new (class {
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
        })(Oe);
      var Ge = r(67660);
      const Ie =
        r.p +
        "images/applications/community/image_error.svg?v=valveisgoodatcaching";
      function We(e) {
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
                              src: Ie,
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
                                  o = (0, Ge.wI)(await a.arrayBuffer());
                                xe(
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
      function xe(e, t, r) {
        r.state.doc.descendants((n, a) => {
          if ("image" === n.type.name && n.attrs.src === e) {
            const e = r.state.tr.setNodeAttribute(a, "src", t);
            r.dispatch(e);
          }
        });
      }
      const je = 1048576;
      var Pe = r(72739);
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
                    Pe.unstable_batchedUpdates(() => {
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
      var Le = r(51240);
      const $e = () => n.useContext(Ke);
      function Ve(e) {
        const { view: t, refUpdateToolbar: r, children: a } = e,
          o = n.useRef();
        o.current || (o.current = new Le.lu()),
          n.useEffect(
            () => (
              (0, ve.cZ)(r, () => o.current.Dispatch(t)),
              () => (0, ve.cZ)(r, void 0)
            ),
            [t, r],
          );
        const s = n.useMemo(() => ({ callbacks: o.current, view: t }), [t]);
        return t ? n.createElement(Ke.Provider, { value: s }, a) : null;
      }
      const Ke = n.createContext(void 0);
      function He() {
        return n.createElement("div", { className: Ne.Gap });
      }
      function Ze() {
        return n.createElement("div", { className: Ne.Spacer });
      }
      function Je(e) {
        return n.createElement(
          pe.Z,
          {
            className: (0, ye.A)(e.className, Ne.ToolbarRow),
            "flow-children": "row",
          },
          e.children,
        );
      }
      function Ye(e) {
        const { nodeType: t, tooltip: r, attrs: a, children: o } = e,
          { callbacks: s, view: i } = $e(),
          [c, l] = n.useState(() => se(i.state, t, a)),
          u = n.useCallback((e) => l(se(e.state, t, a)), [t, a]);
        (0, ve.hL)(s, u);
        const d = n.useMemo(() => te.y_(t, a), [a, t]);
        return n.createElement(et, {
          command: d,
          tooltip: r,
          toggled: c,
          children: o,
        });
      }
      function Qe(e) {
        const { mark: t, tooltip: r, children: a } = e,
          { callbacks: o, view: s } = $e(),
          [i, c] = n.useState(() => oe(s.state, t)),
          l = n.useCallback((e) => c(oe(e.state, t)), [t]);
        (0, ve.hL)(o, l);
        const u = n.useMemo(() => te.wh(t), [t]);
        return n.createElement(et, {
          command: u,
          tooltip: r,
          toggled: i,
          children: a,
        });
      }
      function Xe(e) {
        const { fnEnabledCheck: t, ...r } = e,
          { callbacks: a, view: o } = $e(),
          [s, i] = n.useState(() => t(o)),
          c = n.useCallback((e) => i(t(e)), [t]);
        return (0, ve.hL)(a, c), n.createElement(et, { ...r, disabled: !s });
      }
      function et(e) {
        const {
            command: t,
            toggled: r,
            tooltip: a,
            disabled: o,
            children: s,
          } = e,
          { view: i } = $e();
        return n.createElement(
          Te.Gq,
          { toolTipContent: a, bDisabled: !a, direction: "bottom" },
          n.createElement(
            I.$n,
            {
              className: (0, ye.A)(Ne.CommandButton, r && Ne.Toggled),
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
      function tt(e) {
        const {
          onClick: t,
          toggled: r,
          tooltip: a,
          disabled: o,
          children: s,
        } = e;
        return n.createElement(
          Te.Gq,
          { toolTipContent: a, bDisabled: !a, direction: "bottom" },
          n.createElement(
            I.$n,
            {
              className: (0, ye.A)(Ne.CommandButton, r && Ne.Toggled),
              onMouseDown: (e) => {
                e.preventDefault(), t();
              },
              disabled: !0 === o,
            },
            s,
          ),
        );
      }
      function rt(e) {
        const { schema: t, children: r } = e,
          { callbacks: a, view: o } = $e(),
          [s, i] = n.useState(() => oe(o.state, t.marks.link)),
          c = n.useCallback((e) => i(oe(e.state, t.marks.link)), [t]);
        (0, ve.hL)(a, c);
        const [l, u, d] = (0, ve.uD)();
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(
            x.EN,
            { active: l },
            n.createElement(nt, {
              schema: t,
              active: l,
              closeModal: d,
              view: o,
            }),
          ),
          n.createElement(
            Te.Gq,
            {
              toolTipContent: "#FormattingToolbar_InsertLink",
              direction: "bottom",
            },
            n.createElement(
              I.$n,
              {
                className: (0, ye.A)(Ne.CommandButton, s && Ne.Toggled),
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
      const nt = n.memo(function (e) {
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
      function at() {
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(
            Xe,
            {
              tooltip: "#FormattingToolbar_Undo",
              command: Z.tN,
              fnEnabledCheck: ot,
            },
            n.createElement(W.VnB, null),
          ),
          n.createElement(
            Xe,
            {
              tooltip: "#FormattingToolbar_Redo",
              command: Z.ZS,
              fnEnabledCheck: st,
            },
            n.createElement(W.Bal, null),
          ),
        );
      }
      function ot(e) {
        return Z.mk(e.state) > 0;
      }
      function st(e) {
        return Z.mL(e.state) > 0;
      }
      function it(e) {
        const { schema: t } = e;
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(
            Qe,
            { tooltip: "#FormattingToolbar_Bold", mark: t.marks.strong },
            n.createElement(W.l4n, null),
          ),
          n.createElement(
            Qe,
            { tooltip: "#FormattingToolbar_Italic", mark: t.marks.italic },
            n.createElement(W.UKJ, null),
          ),
          n.createElement(
            Qe,
            {
              tooltip: "#FormattingToolbar_Underline",
              mark: t.marks.underline,
            },
            n.createElement(W.Gj3, null),
          ),
          "strike" in t.marks &&
            n.createElement(
              Qe,
              { tooltip: "#FormattingToolbar_Strike", mark: t.marks.strike },
              n.createElement(W.tI4, null),
            ),
          "code" in t.marks &&
            n.createElement(
              Qe,
              { tooltip: "#FormattingToolbar_InlineCode", mark: t.marks.code },
              n.createElement(W.bmT, null),
            ),
        );
      }
      function ct(e) {
        const { schema: t } = e;
        return n.createElement(
          Ye,
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
              Ye,
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
              Ye,
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
              Ye,
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
              Ye,
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
              Ye,
              {
                tooltip: "#FormattingToolbar_HeadingLevel5",
                nodeType: t.nodes.heading,
                attrs: { level: 5 },
              },
              n.createElement(W.jXA, null),
            ),
        );
      }
      function ut(e) {
        const { schema: t } = e,
          { callbacks: r, view: a } = $e(),
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
          (0, ve.hL)(
            r,
            n.useCallback((e) => i(o(e)), [o]),
          ),
          n.createElement(
            n.Fragment,
            null,
            n.createElement(
              et,
              {
                tooltip: "#FormattingToolbar_BulletedList",
                toggled: s,
                command: ae.Sd(t.nodes.bullet_list),
              },
              n.createElement(W.JPq, null),
            ),
            n.createElement(
              et,
              {
                tooltip: "#FormattingToolbar_OutdentList",
                disabled: !s,
                command: ae.T2(t.nodes.list_item),
              },
              n.createElement(W.LSz, null),
            ),
            n.createElement(
              et,
              {
                tooltip: "#FormattingToolbar_IndentList",
                disabled: !s,
                command: ae.$B(t.nodes.list_item),
              },
              n.createElement(W.ycU, null),
            ),
          )
        );
      }
      function dt(e) {
        const { schema: t } = e;
        return n.createElement(rt, { schema: t }, n.createElement(W.YqK, null));
      }
      function mt(e) {
        const { bSpellcheckEnabled: t, setSpellcheckEnabled: r } = e;
        return n.createElement(
          tt,
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
      var pt = r(76011);
      function ht(e) {
        const {
            schema: t,
            view: r,
            refUpdateToolbar: a,
            className: o,
            bSpellcheckEnabled: s,
            setSpellcheckEnabled: i,
          } = e,
          [c, l] = (0, pt.SP)("FormattingToolbar_Expanded", !1);
        return n.createElement(
          Ve,
          { refUpdateToolbar: a, view: r },
          n.createElement(
            "div",
            { className: (0, ye.A)(Ne.Toolbar, o) },
            n.createElement(
              Je,
              null,
              n.createElement(at, null),
              n.createElement(He, null),
              n.createElement(it, { schema: t }),
              n.createElement(Ze, null),
              n.createElement(
                tt,
                {
                  onClick: () => l(!c),
                  tooltip: "#FormattingToolbar_ExpandOptions",
                },
                n.createElement(W.cLJ, { direction: c ? "up" : "down" }),
              ),
            ),
            n.createElement(
              qe,
              { visible: c },
              n.createElement(
                Je,
                null,
                n.createElement(ct, { schema: t }),
                n.createElement(lt, { schema: t, levels: 5 }),
                n.createElement(
                  Ye,
                  {
                    nodeType: t.nodes.code_block,
                    tooltip: (0, f.we)("#FormattingToolbar_CodeBlock"),
                  },
                  n.createElement(W.kNE, null),
                ),
                n.createElement(He, null),
                n.createElement(ut, { schema: t }),
                n.createElement(He, null),
                n.createElement(dt, { schema: t }),
                n.createElement(Ze, null),
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
      function ft(e) {
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
          N = (0, Ee.Qn)();
        p.current == t.content || b.current || (p.current = t.content);
        const k = p.current,
          C = (function () {
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
                  title: wt(e.state.doc),
                  bbcode: q(e.state.doc, De),
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
        const S = h(),
          R = B(t, S),
          A = {
            onSecondaryButton: () => R.mutate(),
            onSecondaryActionDescription: (0, f.we)(
              "#UserGameNotes_DeleteNote",
            ),
          };
        return n.createElement(
          "div",
          { className: Se.NoteEditorArea },
          !N &&
            n.createElement(ht, {
              schema: De.pm_schema,
              view: o,
              refUpdateToolbar: i,
              className: Se.Toolbar,
              bSpellcheckEnabled: y,
              setSpellcheckEnabled: M,
            }),
          n.createElement(
            ke,
            {
              schemaConfig: De,
              className: Se.EditorInput,
              bbcode: k,
              onUpdate: T,
              refView: s,
              onClickURL: _,
              bSpellcheckEnabled: y,
              panelProps: A,
            },
            n.createElement(We, {
              uploadImage: E,
              nodeType: De.pm_schema.nodes.image,
            }),
          ),
          !N && n.createElement(bt, { note: t, bDirty: r }),
        );
      }
      function bt(e) {
        const { note: t, bDirty: r } = e,
          [a, o, s] = (0, ve.uD)(!1),
          i = "single" == n.useContext(m).mode,
          c = h(),
          l = B(t, c),
          u = n.useCallback(() => {
            !r && t.not_persisted ? l.mutate() : o();
          }, [r, t, l, o]);
        return n.createElement(
          "div",
          { className: Se.NoteActions },
          a && n.createElement(Bt, { note: t, closeModal: s, deleteNote: l }),
          n.createElement(
            Te.he,
            { toolTipContent: "#UserGameNotes_DeleteNote", direction: "top" },
            n.createElement(I.$n, { onClick: u }, n.createElement(W.lMJ, null)),
          ),
          i && n.createElement(_t, { bDirty: r }),
        );
      }
      function _t(e) {
        const { bDirty: t } = e,
          r = h();
        return t
          ? n.createElement(
              I.jn,
              { onClick: () => r(), className: Se.CloseWindowButton },
              (0, f.we)("#Button_SaveAndClose"),
            )
          : n.createElement(
              I.$n,
              { onClick: () => r(), className: Se.CloseWindowButton },
              (0, f.we)("#Button_Close"),
            );
      }
      function Bt(e) {
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
      function wt(e) {
        let t = "";
        for (let r = 0; r < e.content.childCount; r++) {
          const n = e.content.child(r);
          if (n.isText) t += n.text;
          else {
            if (((t = t.trim()), t.length > 4)) return t;
            if (((t = wt(n)), t.length > 4)) return t;
          }
        }
        return t.trim();
      }
      function yt() {
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
              (i.length > 0 && i[0].id ? Mt(o, t, i[0].id) : Mt(o, t, s()));
          }, [o, t, r, i, s]);
        const d = n.createElement(
          Te.he,
          { toolTipContent: "#UserGameNotes_NewNote", direction: "top" },
          n.createElement(
            I.$n,
            {
              className: Se.NewNoteButton,
              onClick: () => {
                const e = s();
                Mt(o, t, e);
              },
            },
            n.createElement(W.qY3, null),
          ),
        );
        return i
          ? n.createElement(vt, {
              noteParent: t,
              notes: i,
              activeNoteID: null == u ? void 0 : u.id,
              actions: d,
            })
          : null;
      }
      function vt(e) {
        const { noteParent: t, notes: r, activeNoteID: o, actions: s } = e,
          [i, c] = (0, pt.SP)("NotesListCollapsed", !1),
          l = n.useContext(m).bPinnedView,
          u = (0, Ee.Qn)(),
          d = r.map((e) => {
            var t;
            return {
              title:
                (null === (t = e.title) || void 0 === t ? void 0 : t.length) > 0
                  ? e.title
                  : (0, f.we)("#UserGameNotes_Untitled"),
              identifier: e.id,
              content: n.createElement(ft, { note: e }),
              pageClassName: Se.NotePage,
              hideTitle: !0,
            };
          }),
          p = (0, a.W6)(),
          h = n.useCallback((e) => Mt(p, t, e), [p, t]);
        return n.createElement(I.Bv, {
          title: (0, f.we)("#UserGameNotes_NotesList"),
          pages: d,
          className: (0, ye.A)(Se.NotesPagedSettings, l && Se.PinnedView),
          page: o,
          onPageRequested: h,
          bottomControls: s,
          hideList: i,
          toggleHideList: l || u ? void 0 : () => c(!i),
        });
      }
      function Mt(e, t, r) {
        let n;
        (n =
          "appid" in t
            ? o.AppNotes(t.appid, r)
            : o.ShortcutNotes(t.shortcut, r)),
          e.replace(n, e.location.state);
      }
      var Et = r(80613),
        Nt = r(89068);
      const kt = Et.Message;
      class Ct extends kt {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ct.prototype.id || Nt.Sg(Ct.M()),
            kt.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ct.sm_m ||
              (Ct.sm_m = {
                proto: Ct,
                fields: {
                  id: { n: 1, br: Nt.qM.readString, bw: Nt.gp.writeString },
                  appid: { n: 2, br: Nt.qM.readUint32, bw: Nt.gp.writeUint32 },
                  shortcut_name: {
                    n: 3,
                    br: Nt.qM.readString,
                    bw: Nt.gp.writeString,
                  },
                  shortcutid: {
                    n: 4,
                    br: Nt.qM.readUint32,
                    bw: Nt.gp.writeUint32,
                  },
                  ordinal: {
                    n: 5,
                    br: Nt.qM.readUint32,
                    bw: Nt.gp.writeUint32,
                  },
                  time_created: {
                    n: 6,
                    br: Nt.qM.readUint32,
                    bw: Nt.gp.writeUint32,
                  },
                  time_modified: {
                    n: 7,
                    br: Nt.qM.readUint32,
                    bw: Nt.gp.writeUint32,
                  },
                  title: { n: 8, br: Nt.qM.readString, bw: Nt.gp.writeString },
                  content: {
                    n: 9,
                    br: Nt.qM.readString,
                    bw: Nt.gp.writeString,
                  },
                },
              }),
            Ct.sm_m
          );
        }
        static MBF() {
          return Ct.sm_mbf || (Ct.sm_mbf = Nt.w0(Ct.M())), Ct.sm_mbf;
        }
        toObject(e = !1) {
          return Ct.toObject(e, this);
        }
        static toObject(e, t) {
          return Nt.BT(Ct.M(), e, t);
        }
        static fromObject(e) {
          return Nt.Uq(Ct.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Et.BinaryReader(e),
            r = new Ct();
          return Ct.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Nt.zj(Ct.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Et.BinaryWriter();
          return Ct.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Nt.i0(Ct.M(), e, t);
        }
        serializeBase64String() {
          var e = new Et.BinaryWriter();
          return Ct.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNote";
        }
      }
      class Tt extends kt {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Tt.prototype.appid || Nt.Sg(Tt.M()),
            kt.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Tt.sm_m ||
              (Tt.sm_m = {
                proto: Tt,
                fields: {
                  appid: { n: 1, br: Nt.qM.readUint32, bw: Nt.gp.writeUint32 },
                  shortcut_name: {
                    n: 2,
                    br: Nt.qM.readString,
                    bw: Nt.gp.writeString,
                  },
                  shortcutid: {
                    n: 3,
                    br: Nt.qM.readUint32,
                    bw: Nt.gp.writeUint32,
                  },
                  include_content: {
                    n: 4,
                    br: Nt.qM.readBool,
                    bw: Nt.gp.writeBool,
                  },
                },
              }),
            Tt.sm_m
          );
        }
        static MBF() {
          return Tt.sm_mbf || (Tt.sm_mbf = Nt.w0(Tt.M())), Tt.sm_mbf;
        }
        toObject(e = !1) {
          return Tt.toObject(e, this);
        }
        static toObject(e, t) {
          return Nt.BT(Tt.M(), e, t);
        }
        static fromObject(e) {
          return Nt.Uq(Tt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Et.BinaryReader(e),
            r = new Tt();
          return Tt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Nt.zj(Tt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Et.BinaryWriter();
          return Tt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Nt.i0(Tt.M(), e, t);
        }
        serializeBase64String() {
          var e = new Et.BinaryWriter();
          return Tt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_GetNotesForGame_Request";
        }
      }
      class St extends kt {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            St.prototype.notes || Nt.Sg(St.M()),
            kt.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            St.sm_m ||
              (St.sm_m = {
                proto: St,
                fields: { notes: { n: 1, c: Ct, r: !0, q: !0 } },
              }),
            St.sm_m
          );
        }
        static MBF() {
          return St.sm_mbf || (St.sm_mbf = Nt.w0(St.M())), St.sm_mbf;
        }
        toObject(e = !1) {
          return St.toObject(e, this);
        }
        static toObject(e, t) {
          return Nt.BT(St.M(), e, t);
        }
        static fromObject(e) {
          return Nt.Uq(St.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Et.BinaryReader(e),
            r = new St();
          return St.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Nt.zj(St.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Et.BinaryWriter();
          return St.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Nt.i0(St.M(), e, t);
        }
        serializeBase64String() {
          var e = new Et.BinaryWriter();
          return St.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_GetNotesForGame_Response";
        }
      }
      class Rt extends kt {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Rt.prototype.appid || Nt.Sg(Rt.M()),
            kt.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Rt.sm_m ||
              (Rt.sm_m = {
                proto: Rt,
                fields: {
                  appid: { n: 1, br: Nt.qM.readUint32, bw: Nt.gp.writeUint32 },
                  shortcut_name: {
                    n: 2,
                    br: Nt.qM.readString,
                    bw: Nt.gp.writeString,
                  },
                  shortcutid: {
                    n: 3,
                    br: Nt.qM.readUint32,
                    bw: Nt.gp.writeUint32,
                  },
                  note_id: {
                    n: 4,
                    br: Nt.qM.readString,
                    bw: Nt.gp.writeString,
                  },
                  create_new: { n: 5, br: Nt.qM.readBool, bw: Nt.gp.writeBool },
                  title: { n: 6, br: Nt.qM.readString, bw: Nt.gp.writeString },
                  content: {
                    n: 7,
                    br: Nt.qM.readString,
                    bw: Nt.gp.writeString,
                  },
                },
              }),
            Rt.sm_m
          );
        }
        static MBF() {
          return Rt.sm_mbf || (Rt.sm_mbf = Nt.w0(Rt.M())), Rt.sm_mbf;
        }
        toObject(e = !1) {
          return Rt.toObject(e, this);
        }
        static toObject(e, t) {
          return Nt.BT(Rt.M(), e, t);
        }
        static fromObject(e) {
          return Nt.Uq(Rt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Et.BinaryReader(e),
            r = new Rt();
          return Rt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Nt.zj(Rt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Et.BinaryWriter();
          return Rt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Nt.i0(Rt.M(), e, t);
        }
        serializeBase64String() {
          var e = new Et.BinaryWriter();
          return Rt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_SaveNote_Request";
        }
      }
      class At extends kt {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            At.prototype.note_id || Nt.Sg(At.M()),
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
                    br: Nt.qM.readString,
                    bw: Nt.gp.writeString,
                  },
                },
              }),
            At.sm_m
          );
        }
        static MBF() {
          return At.sm_mbf || (At.sm_mbf = Nt.w0(At.M())), At.sm_mbf;
        }
        toObject(e = !1) {
          return At.toObject(e, this);
        }
        static toObject(e, t) {
          return Nt.BT(At.M(), e, t);
        }
        static fromObject(e) {
          return Nt.Uq(At.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Et.BinaryReader(e),
            r = new At();
          return At.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Nt.zj(At.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Et.BinaryWriter();
          return At.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Nt.i0(At.M(), e, t);
        }
        serializeBase64String() {
          var e = new Et.BinaryWriter();
          return At.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_SaveNote_Response";
        }
      }
      class zt extends kt {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            zt.prototype.appid || Nt.Sg(zt.M()),
            kt.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            zt.sm_m ||
              (zt.sm_m = {
                proto: zt,
                fields: {
                  appid: { n: 1, br: Nt.qM.readUint32, bw: Nt.gp.writeUint32 },
                  shortcut_name: {
                    n: 2,
                    br: Nt.qM.readString,
                    bw: Nt.gp.writeString,
                  },
                  shortcutid: {
                    n: 3,
                    br: Nt.qM.readUint32,
                    bw: Nt.gp.writeUint32,
                  },
                  note_id: {
                    n: 4,
                    br: Nt.qM.readString,
                    bw: Nt.gp.writeString,
                  },
                },
              }),
            zt.sm_m
          );
        }
        static MBF() {
          return zt.sm_mbf || (zt.sm_mbf = Nt.w0(zt.M())), zt.sm_mbf;
        }
        toObject(e = !1) {
          return zt.toObject(e, this);
        }
        static toObject(e, t) {
          return Nt.BT(zt.M(), e, t);
        }
        static fromObject(e) {
          return Nt.Uq(zt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Et.BinaryReader(e),
            r = new zt();
          return zt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Nt.zj(zt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Et.BinaryWriter();
          return zt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Nt.i0(zt.M(), e, t);
        }
        serializeBase64String() {
          var e = new Et.BinaryWriter();
          return zt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_DeleteNote_Request";
        }
      }
      class Ut extends kt {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), kt.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Ut.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Ut();
        }
        static deserializeBinary(e) {
          let t = new Et.BinaryReader(e),
            r = new Ut();
          return Ut.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new Et.BinaryWriter();
          return Ut.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new Et.BinaryWriter();
          return Ut.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_DeleteNote_Response";
        }
      }
      class Ft extends kt {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), kt.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Ft.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Ft();
        }
        static deserializeBinary(e) {
          let t = new Et.BinaryReader(e),
            r = new Ft();
          return Ft.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new Et.BinaryWriter();
          return Ft.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new Et.BinaryWriter();
          return Ft.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_GetGamesWithNotes_Request";
        }
      }
      class Ot extends kt {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ot.prototype.games_with_notes || Nt.Sg(Ot.M()),
            kt.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Ot.sm_m ||
              (Ot.sm_m = {
                proto: Ot,
                fields: { games_with_notes: { n: 1, c: Dt, r: !0, q: !0 } },
              }),
            Ot.sm_m
          );
        }
        static MBF() {
          return Ot.sm_mbf || (Ot.sm_mbf = Nt.w0(Ot.M())), Ot.sm_mbf;
        }
        toObject(e = !1) {
          return Ot.toObject(e, this);
        }
        static toObject(e, t) {
          return Nt.BT(Ot.M(), e, t);
        }
        static fromObject(e) {
          return Nt.Uq(Ot.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Et.BinaryReader(e),
            r = new Ot();
          return Ot.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Nt.zj(Ot.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Et.BinaryWriter();
          return Ot.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Nt.i0(Ot.M(), e, t);
        }
        serializeBase64String() {
          var e = new Et.BinaryWriter();
          return Ot.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_GetGamesWithNotes_Response";
        }
      }
      class Dt extends kt {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Dt.prototype.appid || Nt.Sg(Dt.M()),
            kt.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Dt.sm_m ||
              (Dt.sm_m = {
                proto: Dt,
                fields: {
                  appid: { n: 1, br: Nt.qM.readUint32, bw: Nt.gp.writeUint32 },
                  shortcutid: {
                    n: 2,
                    br: Nt.qM.readUint32,
                    bw: Nt.gp.writeUint32,
                  },
                  shortcut_name: {
                    n: 3,
                    br: Nt.qM.readString,
                    bw: Nt.gp.writeString,
                  },
                  last_modified: {
                    n: 4,
                    br: Nt.qM.readUint32,
                    bw: Nt.gp.writeUint32,
                  },
                  note_count: {
                    n: 5,
                    br: Nt.qM.readUint32,
                    bw: Nt.gp.writeUint32,
                  },
                },
              }),
            Dt.sm_m
          );
        }
        static MBF() {
          return Dt.sm_mbf || (Dt.sm_mbf = Nt.w0(Dt.M())), Dt.sm_mbf;
        }
        toObject(e = !1) {
          return Dt.toObject(e, this);
        }
        static toObject(e, t) {
          return Nt.BT(Dt.M(), e, t);
        }
        static fromObject(e) {
          return Nt.Uq(Dt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Et.BinaryReader(e),
            r = new Dt();
          return Dt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Nt.zj(Dt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Et.BinaryWriter();
          return Dt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Nt.i0(Dt.M(), e, t);
        }
        serializeBase64String() {
          var e = new Et.BinaryWriter();
          return Dt.serializeBinaryToWriter(this, e), e.getResultBase64String();
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
            (0, E.I8)(Tt, t),
            St,
            { ePrivilege: 1 },
          );
        }),
          (e.SaveNote = function (e, t) {
            return e.SendMsg("UserGameNotes.SaveNote#1", (0, E.I8)(Rt, t), At, {
              ePrivilege: 1,
            });
          }),
          (e.DeleteNote = function (e, t) {
            return e.SendMsg(
              "UserGameNotes.DeleteNote#1",
              (0, E.I8)(zt, t),
              Ut,
              { ePrivilege: 1 },
            );
          }),
          (e.GetGamesWithNotes = function (e, t) {
            return e.SendMsg(
              "UserGameNotes.GetGamesWithNotes#1",
              (0, E.I8)(Ft, t),
              Ot,
              { ePrivilege: 1 },
            );
          });
      })(Gt || (Gt = {}));
      class It {
        constructor(e) {
          this.m_SteamInterface = e;
        }
        async GetGamesWithNotes() {
          const e = E.w.Init(Ft);
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
          const r = E.w.Init(Tt);
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
          const n = E.w.Init(Rt);
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
          const r = E.w.Init(zt);
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
              id: "temp_" + It.sm_lastNoteID++,
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
      function Wt(e) {
        const t = (0, k.TR)(),
          [r] = n.useState(() => new It(t));
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
              n.createElement(yt, null),
            ),
            n.createElement(
              a.qh,
              null,
              n.createElement(a.rd, { to: `${o.List()}` }),
            ),
          ),
        );
      }
      It.sm_lastNoteID = 0;
    },
    61788: (e, t, r) => {
      "use strict";
      r.d(t, { y: () => m });
      var n = r(34629),
        a = r(56545),
        o = r(59134),
        s = r(60778),
        i = r(14771),
        c = r(10333);
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
