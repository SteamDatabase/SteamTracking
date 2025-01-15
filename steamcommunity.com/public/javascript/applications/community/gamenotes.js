/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [1220],
  {
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
        TableCell: "_3rLIt0O8F7iG6B2RmC3cYa",
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
        CalendarEventContainer: "S-ElBHomDkV0L3K4XChxt",
        CalendarEventLink: "_106tp5gLWBvoekGEC8HXQ",
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
    15351: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => je });
      var n = r(90626),
        i = r(92757);
      const a = {
        List: () => "/notes/list",
        AppNotes: (e, t) => `/notes/app/${e}/${null != t ? t : ""}`,
        ShortcutNotes: (e, t) => `/notes/shortcut/${e}/${null != t ? t : ""}`,
      };
      var s = r(17083),
        o = r(37674),
        c = r(29385),
        l = r(61739);
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
            closePopup: i,
            bPinnedView: a,
            onClickURL: s,
            bSpellcheckEnabled: o = !0,
            setSpellcheckEnabled: c,
            children: l,
          } = e,
          u = n.useMemo(
            () => ({
              mode: t,
              store: r,
              closePopup: i,
              bPinnedView: a,
              onClickURL: s,
              bSpellcheckEnabled: o,
              setSpellcheckEnabled: c,
            }),
            [t, r, i, a, s, o, c],
          );
        return n.createElement(d.Provider, { value: u }, l);
      }
      function h() {
        return n.useContext(d).closePopup;
      }
      function _() {
        return n.useContext(d).store;
      }
      var g = r(61859);
      function f(e) {
        return "appid" in e
          ? ["GameNotes", "NotesByAppID", e.appid]
          : ["GameNotes", "NotesForShortcut", u(e.shortcut)];
      }
      function B(e, t) {
        return {
          queryKey: f(t),
          queryFn: async () => (await e.GetGameNotesList(t, !0)) || [],
          enabled: !!t,
        };
      }
      function y(e, t) {
        const r = (0, c.jE)(),
          n = _(),
          i = e.id;
        return (0, l.n)({
          mutationFn: async () =>
            e.not_persisted ? i : await n.DeleteGameNote(m(e), i),
          onSuccess: () => {
            b(r, m(e), (e) => e.filter((e) => e.id != i)), t && t();
          },
        });
      }
      function b(e, t, r) {
        e.setQueryData(f(t), (e) => e && r(e));
      }
      function w(e, t) {
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
      var N = r(58632),
        S = r.n(N),
        M = r(56545),
        E = r(37403),
        C = r(23809),
        z = r(30470),
        v = r(22837);
      let T;
      const G = 864e5;
      function R(e) {
        return `appinfo_${e}_${z.TS.LANGUAGE}`;
      }
      function U(e) {
        return Boolean(e && Date.now() - e.timeCached < G);
      }
      function x(e) {
        const t = (0, C.KV)(),
          r = (0, C.rX)();
        return (0, o.I)({
          queryKey: ["appinfo", e],
          queryFn: async () =>
            (function (e, t) {
              return (
                T ||
                  (T = new (S())(
                    async (r) => {
                      const n = new Map();
                      (await Promise.all(r.map((e) => t.GetObject(R(e)))))
                        .filter(U)
                        .forEach(({ value: e }) => n.set(e.appid, e));
                      const i = r.slice().filter((e) => !n.has(e));
                      if (i.length) {
                        const r = M.w.Init(E._z);
                        r.Body().set_language((0, v.sf)(z.TS.LANGUAGE)),
                          r.Body().set_appids(i);
                        const a = await E.BE.GetApps(e, r);
                        if (1 != a.GetEResult()) throw a.GetErrorMessage();
                        a.Body()
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
          staleTime: G,
          enabled: !!e,
        }).data;
      }
      var W = r(22797);
      function I() {
        const { data: e, isLoading: t } = (function () {
          const e = _();
          return (0, o.I)({
            queryKey: ["GameNotes", "GamesWithNotes"],
            queryFn: () => e.GetGamesWithNotes(),
          });
        })();
        return t
          ? n.createElement(W.t, { msDelayAppear: 300 })
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
                e.map((e) => n.createElement(O, { key: e.appid, game: e })),
              ),
            );
      }
      function O(e) {
        const { game: t } = e,
          r = x(t.appid);
        return n.createElement(
          "li",
          null,
          n.createElement(
            s.N_,
            { to: a.AppNotes(t.appid) },
            null == r ? void 0 : r.name,
          ),
        );
      }
      var k = r(90286),
        F = r(26555),
        j = r(28106),
        q = r(55608),
        P = r(79497);
      const A = { nodes: { ...q.DQ.nodes }, marks: { ...q.DQ.marks } },
        D = new P.W(A);
      var L = r(61788),
        V = r(33737),
        K = r(4869),
        $ = r(9154),
        Q = r(22145),
        Y = r(52893),
        X = r(57053),
        Z = r(67660);
      const J =
        r.p +
        "images/applications/community/image_error.svg?v=valveisgoodatcaching";
      function H(e) {
        const { uploadImage: t, nodeType: r, nMaxImageSize: i = te } = e;
        return (
          (0, Q.c$)(
            n.useMemo(
              () =>
                new Y.k_({
                  key: new Y.hs(`PMUploadImage_${r.name}`),
                  props: {
                    transformPasted: (...e) =>
                      (function (e, t, r, n) {
                        let i = !1;
                        if (
                          (r.content.descendants((r, n) => {
                            r.type == e && r.attrs.src.length > t && (i = !0);
                          }),
                          i)
                        ) {
                          let t = [
                            e.create({
                              src: J,
                              title: (0, g.we)("#UserGameNotes_ImageTooLarge"),
                            }),
                          ];
                          return new X.Ji(X.FK.from(t), 0, 0);
                        }
                        return r;
                      })(r, i, ...e),
                    handlePaste: (e, n, i) => {
                      const a = [];
                      i.content.descendants((e) => {
                        e.type == r &&
                          e.attrs.src.startsWith("data:image") &&
                          a.push(e.attrs.src);
                      }),
                        a.length > 0 &&
                          setTimeout(() => {
                            !(async function (e, t, r) {
                              for (const n of e) {
                                const e = await fetch(n),
                                  i = await e.blob(),
                                  a = (0, Z.wI)(await i.arrayBuffer());
                                ee(
                                  n,
                                  await r(e.headers.get("Content-Type"), a),
                                  t,
                                );
                              }
                            })(a, e, t);
                          }, 100);
                    },
                  },
                }),
              [t, i, r],
            ),
          ),
          null
        );
      }
      function ee(e, t, r) {
        r.state.doc.descendants((n, i) => {
          if ("image" === n.type.name && n.attrs.src === e) {
            const e = r.state.tr.setNodeAttribute(i, "src", t);
            r.dispatch(e);
          }
        });
      }
      const te = 1048576;
      var re = r(1805),
        ne = r(32754),
        ie = r(73745),
        ae = r(78327),
        se = r(86807),
        oe = r(73309),
        ce = r(79570),
        le = r(30175),
        ue = r(52038),
        me = r(76011);
      function de(e) {
        const {
            schema: t,
            view: r,
            refUpdateToolbar: i,
            className: a,
            bSpellcheckEnabled: s,
            setSpellcheckEnabled: o,
          } = e,
          [c, l] = (0, me.SP)("FormattingToolbar_Expanded", !1);
        return n.createElement(
          le.bI,
          { refUpdateToolbar: i, view: r },
          n.createElement(
            "div",
            { className: (0, ue.A)(oe.Toolbar, a) },
            n.createElement(
              le.Ez,
              null,
              n.createElement(ce.MV, null),
              n.createElement(le.XQ, null),
              n.createElement(ce.Km, { schema: t }),
              n.createElement(le.hK, null),
              n.createElement(
                le.ff,
                {
                  onClick: () => l(!c),
                  tooltip: "#FormattingToolbar_ExpandOptions",
                },
                n.createElement(K.cLJ, { direction: c ? "up" : "down" }),
              ),
            ),
            n.createElement(
              se.R,
              { visible: c },
              n.createElement(
                le.Ez,
                null,
                n.createElement(ce.Hz, { schema: t }),
                n.createElement(ce.WJ, { schema: t, levels: 5 }),
                n.createElement(
                  le.u3,
                  {
                    nodeType: t.nodes.code_block,
                    tooltip: (0, g.we)("#FormattingToolbar_CodeBlock"),
                  },
                  n.createElement(K.kNE, null),
                ),
                n.createElement(le.XQ, null),
                n.createElement(ce.C$, { schema: t }),
                n.createElement(le.XQ, null),
                n.createElement(ce.z9, { schema: t }),
                n.createElement(le.hK, null),
                o &&
                  n.createElement(ce.Nt, {
                    bSpellcheckEnabled: s,
                    setSpellcheckEnabled: o,
                  }),
              ),
            ),
          ),
        );
      }
      var pe = r(27491);
      const he = 15;
      function _e(e) {
        const { note: t, hidden: r = !1 } = e,
          [i, a] = n.useState(),
          s = n.useRef(),
          o = n.useRef(!1),
          u = n.useContext(d).onClickURL,
          p =
            null === (f = n.useContext(d).bSpellcheckEnabled) ||
            void 0 === f ||
            f;
        var f;
        const B = n.useContext(d).setSpellcheckEnabled,
          w = (function (e) {
            const t = _();
            return n.useCallback(
              async (r, n) => {
                const i = new Uint8Array(n),
                  a = await t.UploadImage(`notes_${e}_images/`, r, i);
                return Promise.resolve("/gamenotes/" + a);
              },
              [t, e],
            );
          })(t.appid),
          N = (0, ae.Qn)(),
          { mutate: S } = (function (e) {
            const t = (0, c.jE)(),
              r = _(),
              n = m(e);
            return (0, l.n)({
              scope: {
                id: `${"appid" in e ? e.appid : e.shortcut_name}_${e.id}`,
              },
              mutationFn: (t) => r.SaveGameNote(e, t.title, t.bbcode),
              onMutate(r) {
                const i = { ...e, title: r.title, content: r.bbcode };
                return b(t, n, (e) => e.map((e) => (e.id == i.id ? i : e))), i;
              },
              onSuccess(e, r, i) {
                b(t, n, (t) =>
                  t.map((t) =>
                    t.id === i.id ? { ...t, id: e, not_persisted: !1 } : t,
                  ),
                );
              },
            });
          })(t),
          [M, E] = n.useState();
        n.useEffect(() => {
          o.current ||
            E(new k.n(D, t.content, (e, t) => S({ title: ye(t), bbcode: e })));
        }, [S, t.content]);
        const { bDirty: C } = (0, F.i)(M, { msAutosaveTimeout: 1e3 * he });
        n.useEffect(() => {
          C &&
            !o.current &&
            ((o.current = !0),
            L.y.ReportTrackedAction("/GameNotes/NoteModified"));
        }, [C]),
          n.useEffect(() => {
            i && !r && i.focus();
          }, [i, r]),
          n.useEffect(() => {
            r && M && M.CommitChanges();
          }, [r, M]);
        const z = h(),
          v = y(t, z),
          T = {
            onSecondaryButton: () => v.mutate(),
            onSecondaryActionDescription: (0, g.we)(
              "#UserGameNotes_DeleteNote",
            ),
          };
        return n.createElement(
          "div",
          { className: pe.NoteEditorArea },
          !N &&
            n.createElement(de, {
              schema: D.pm_schema,
              view: i,
              refUpdateToolbar: s,
              className: pe.Toolbar,
              bSpellcheckEnabled: p,
              setSpellcheckEnabled: B,
            }),
          n.createElement(
            re.l,
            {
              pmState: M,
              className: pe.EditorInput,
              refOnUpdate: s,
              refView: a,
              bSpellcheckEnabled: p,
              panelProps: T,
            },
            n.createElement(H, {
              uploadImage: w,
              nodeType: D.pm_schema.nodes.image,
            }),
            n.createElement(j.W, {
              linkMarkType: D.pm_schema.marks.link,
              schema: D.pm_schema,
              onClickURL: u,
            }),
          ),
          !N && n.createElement(ge, { note: t, bDirty: C }),
        );
      }
      function ge(e) {
        const { note: t, bDirty: r } = e,
          [i, a, s] = (0, ie.uD)(!1),
          o = "single" == n.useContext(d).mode,
          c = h(),
          { mutate: l, isPending: u } = y(t, c),
          m = n.useCallback(() => {
            !r && t.not_persisted ? l() : a();
          }, [r, t, l, a]);
        return n.createElement(
          "div",
          { className: pe.NoteActions },
          i &&
            n.createElement(Be, {
              note: t,
              closeModal: s,
              deleteNote: l,
              deletePending: u,
            }),
          n.createElement(
            ne.he,
            { toolTipContent: "#UserGameNotes_DeleteNote", direction: "top" },
            n.createElement(V.$n, { onClick: m }, n.createElement(K.lMJ, null)),
          ),
          o && n.createElement(fe, { bDirty: r }),
        );
      }
      function fe(e) {
        const { bDirty: t } = e,
          r = h();
        return t
          ? n.createElement(
              V.jn,
              { onClick: () => r(), className: pe.CloseWindowButton },
              (0, g.we)("#Button_SaveAndClose"),
            )
          : n.createElement(
              V.$n,
              { onClick: () => r(), className: pe.CloseWindowButton },
              (0, g.we)("#Button_Close"),
            );
      }
      function Be(e) {
        const { note: t, closeModal: r, deleteNote: i, deletePending: a } = e;
        return n.createElement(
          $.EN,
          { active: !0 },
          n.createElement($.o0, {
            strTitle: (0, g.we)("#UserGameNotes_DeleteNote"),
            strDescription: (0, g.we)("#UserGameNotes_PromptDelete"),
            onOK: () => i(),
            bOKDisabled: a,
            strOKButtonText: (0, g.we)("#Button_Delete"),
            closeModal: r,
          }),
        );
      }
      function ye(e) {
        let t = "";
        for (let r = 0; r < e.content.childCount; r++) {
          const n = e.content.child(r);
          if (n.isText) t += n.text;
          else {
            if (((t = t.trim()), t.length > 4)) return t;
            if (((t = ye(n)), t.length > 4)) return t;
          }
        }
        return t.trim();
      }
      function be() {
        const e = (0, i.W5)(),
          t = w(
            "appid" in e.params && Number(e.params.appid),
            "shortcut_name" in e.params && e.params.shortcut_name,
          );
        let r = e.params.noteid;
        const a = (0, i.W6)(),
          s = (function (e) {
            const t = (0, c.jE)(),
              r = _();
            return n.useCallback(() => {
              const n = (0, g.we)("#UserGameNotes_UntitledNote_Title"),
                i = r.NewNote(e, n);
              return b(t, e, (e) => [...e, i]), i.id;
            }, [t, r, e]);
          })(t),
          { data: l, isLoading: u } = (function (e) {
            const t = _();
            return (0, o.I)(B(t, e));
          })(t);
        let m;
        l && r && (m = l.find((e) => e.id === r)),
          n.useEffect(() => {
            !l ||
              (r && l.find((e) => e.id === r)) ||
              (l.length > 0 && l[0].id ? Se(a, t, l[0].id) : Se(a, t, s()));
          }, [a, t, r, l, s]);
        const d = n.createElement(
          ne.he,
          { toolTipContent: "#UserGameNotes_NewNote", direction: "top" },
          n.createElement(
            V.$n,
            {
              className: pe.NewNoteButton,
              onClick: () => {
                const e = s();
                Se(a, t, e);
              },
            },
            n.createElement(K.qY3, null),
          ),
        );
        return l
          ? n.createElement(we, {
              noteParent: t,
              notes: l,
              activeNoteID: null == m ? void 0 : m.id,
              actions: d,
            })
          : null;
      }
      function we(e) {
        const { noteParent: t, notes: r, activeNoteID: a, actions: s } = e,
          [o, c] = (0, me.SP)("NotesListCollapsed", !1),
          l = n.useContext(d).bPinnedView,
          u = (0, ae.Qn)(),
          m = r.map((e) => {
            var t;
            return {
              title:
                (null === (t = e.title) || void 0 === t ? void 0 : t.length) > 0
                  ? e.title
                  : (0, g.we)("#UserGameNotes_Untitled"),
              identifier: e.id,
              content: n.createElement(Ne, { note: e }),
              pageClassName: pe.NotePage,
              hideTitle: !0,
            };
          }),
          p = (0, i.W6)(),
          h = n.useCallback((e) => Se(p, t, e), [p, t]);
        return n.createElement(V.O7, {
          title: (0, g.we)("#UserGameNotes_NotesList"),
          pages: m,
          className: (0, ue.A)(pe.NotesPagedSettings, l && pe.PinnedView),
          page: a,
          onPageRequested: h,
          bottomControls: s,
          hideList: o,
          toggleHideList: l || u ? void 0 : () => c(!o),
        });
      }
      function Ne(e) {
        const { note: t } = e,
          r = V.v$();
        return n.createElement(_e, { note: t, hidden: !r });
      }
      function Se(e, t, r) {
        let n;
        (n =
          "appid" in t
            ? a.AppNotes(t.appid, r)
            : a.ShortcutNotes(t.shortcut, r)),
          e.replace(n, e.location.state);
      }
      var Me = r(80613),
        Ee = r(89068);
      const Ce = Me.Message;
      class ze extends Ce {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ze.prototype.id || Ee.Sg(ze.M()),
            Ce.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ze.sm_m ||
              (ze.sm_m = {
                proto: ze,
                fields: {
                  id: { n: 1, br: Ee.qM.readString, bw: Ee.gp.writeString },
                  appid: { n: 2, br: Ee.qM.readUint32, bw: Ee.gp.writeUint32 },
                  shortcut_name: {
                    n: 3,
                    br: Ee.qM.readString,
                    bw: Ee.gp.writeString,
                  },
                  shortcutid: {
                    n: 4,
                    br: Ee.qM.readUint32,
                    bw: Ee.gp.writeUint32,
                  },
                  ordinal: {
                    n: 5,
                    br: Ee.qM.readUint32,
                    bw: Ee.gp.writeUint32,
                  },
                  time_created: {
                    n: 6,
                    br: Ee.qM.readUint32,
                    bw: Ee.gp.writeUint32,
                  },
                  time_modified: {
                    n: 7,
                    br: Ee.qM.readUint32,
                    bw: Ee.gp.writeUint32,
                  },
                  title: { n: 8, br: Ee.qM.readString, bw: Ee.gp.writeString },
                  content: {
                    n: 9,
                    br: Ee.qM.readString,
                    bw: Ee.gp.writeString,
                  },
                },
              }),
            ze.sm_m
          );
        }
        static MBF() {
          return ze.sm_mbf || (ze.sm_mbf = Ee.w0(ze.M())), ze.sm_mbf;
        }
        toObject(e = !1) {
          return ze.toObject(e, this);
        }
        static toObject(e, t) {
          return Ee.BT(ze.M(), e, t);
        }
        static fromObject(e) {
          return Ee.Uq(ze.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Me.BinaryReader(e),
            r = new ze();
          return ze.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ee.zj(ze.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Me.BinaryWriter();
          return ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ee.i0(ze.M(), e, t);
        }
        serializeBase64String() {
          var e = new Me.BinaryWriter();
          return ze.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNote";
        }
      }
      class ve extends Ce {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ve.prototype.appid || Ee.Sg(ve.M()),
            Ce.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ve.sm_m ||
              (ve.sm_m = {
                proto: ve,
                fields: {
                  appid: { n: 1, br: Ee.qM.readUint32, bw: Ee.gp.writeUint32 },
                  shortcut_name: {
                    n: 2,
                    br: Ee.qM.readString,
                    bw: Ee.gp.writeString,
                  },
                  shortcutid: {
                    n: 3,
                    br: Ee.qM.readUint32,
                    bw: Ee.gp.writeUint32,
                  },
                  include_content: {
                    n: 4,
                    br: Ee.qM.readBool,
                    bw: Ee.gp.writeBool,
                  },
                },
              }),
            ve.sm_m
          );
        }
        static MBF() {
          return ve.sm_mbf || (ve.sm_mbf = Ee.w0(ve.M())), ve.sm_mbf;
        }
        toObject(e = !1) {
          return ve.toObject(e, this);
        }
        static toObject(e, t) {
          return Ee.BT(ve.M(), e, t);
        }
        static fromObject(e) {
          return Ee.Uq(ve.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Me.BinaryReader(e),
            r = new ve();
          return ve.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ee.zj(ve.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Me.BinaryWriter();
          return ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ee.i0(ve.M(), e, t);
        }
        serializeBase64String() {
          var e = new Me.BinaryWriter();
          return ve.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_GetNotesForGame_Request";
        }
      }
      class Te extends Ce {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Te.prototype.notes || Ee.Sg(Te.M()),
            Ce.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Te.sm_m ||
              (Te.sm_m = {
                proto: Te,
                fields: { notes: { n: 1, c: ze, r: !0, q: !0 } },
              }),
            Te.sm_m
          );
        }
        static MBF() {
          return Te.sm_mbf || (Te.sm_mbf = Ee.w0(Te.M())), Te.sm_mbf;
        }
        toObject(e = !1) {
          return Te.toObject(e, this);
        }
        static toObject(e, t) {
          return Ee.BT(Te.M(), e, t);
        }
        static fromObject(e) {
          return Ee.Uq(Te.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Me.BinaryReader(e),
            r = new Te();
          return Te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ee.zj(Te.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Me.BinaryWriter();
          return Te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ee.i0(Te.M(), e, t);
        }
        serializeBase64String() {
          var e = new Me.BinaryWriter();
          return Te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_GetNotesForGame_Response";
        }
      }
      class Ge extends Ce {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ge.prototype.appid || Ee.Sg(Ge.M()),
            Ce.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ge.sm_m ||
              (Ge.sm_m = {
                proto: Ge,
                fields: {
                  appid: { n: 1, br: Ee.qM.readUint32, bw: Ee.gp.writeUint32 },
                  shortcut_name: {
                    n: 2,
                    br: Ee.qM.readString,
                    bw: Ee.gp.writeString,
                  },
                  shortcutid: {
                    n: 3,
                    br: Ee.qM.readUint32,
                    bw: Ee.gp.writeUint32,
                  },
                  note_id: {
                    n: 4,
                    br: Ee.qM.readString,
                    bw: Ee.gp.writeString,
                  },
                  create_new: { n: 5, br: Ee.qM.readBool, bw: Ee.gp.writeBool },
                  title: { n: 6, br: Ee.qM.readString, bw: Ee.gp.writeString },
                  content: {
                    n: 7,
                    br: Ee.qM.readString,
                    bw: Ee.gp.writeString,
                  },
                },
              }),
            Ge.sm_m
          );
        }
        static MBF() {
          return Ge.sm_mbf || (Ge.sm_mbf = Ee.w0(Ge.M())), Ge.sm_mbf;
        }
        toObject(e = !1) {
          return Ge.toObject(e, this);
        }
        static toObject(e, t) {
          return Ee.BT(Ge.M(), e, t);
        }
        static fromObject(e) {
          return Ee.Uq(Ge.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Me.BinaryReader(e),
            r = new Ge();
          return Ge.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ee.zj(Ge.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Me.BinaryWriter();
          return Ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ee.i0(Ge.M(), e, t);
        }
        serializeBase64String() {
          var e = new Me.BinaryWriter();
          return Ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_SaveNote_Request";
        }
      }
      class Re extends Ce {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Re.prototype.note_id || Ee.Sg(Re.M()),
            Ce.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Re.sm_m ||
              (Re.sm_m = {
                proto: Re,
                fields: {
                  note_id: {
                    n: 1,
                    br: Ee.qM.readString,
                    bw: Ee.gp.writeString,
                  },
                },
              }),
            Re.sm_m
          );
        }
        static MBF() {
          return Re.sm_mbf || (Re.sm_mbf = Ee.w0(Re.M())), Re.sm_mbf;
        }
        toObject(e = !1) {
          return Re.toObject(e, this);
        }
        static toObject(e, t) {
          return Ee.BT(Re.M(), e, t);
        }
        static fromObject(e) {
          return Ee.Uq(Re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Me.BinaryReader(e),
            r = new Re();
          return Re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ee.zj(Re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Me.BinaryWriter();
          return Re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ee.i0(Re.M(), e, t);
        }
        serializeBase64String() {
          var e = new Me.BinaryWriter();
          return Re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_SaveNote_Response";
        }
      }
      class Ue extends Ce {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ue.prototype.appid || Ee.Sg(Ue.M()),
            Ce.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ue.sm_m ||
              (Ue.sm_m = {
                proto: Ue,
                fields: {
                  appid: { n: 1, br: Ee.qM.readUint32, bw: Ee.gp.writeUint32 },
                  shortcut_name: {
                    n: 2,
                    br: Ee.qM.readString,
                    bw: Ee.gp.writeString,
                  },
                  shortcutid: {
                    n: 3,
                    br: Ee.qM.readUint32,
                    bw: Ee.gp.writeUint32,
                  },
                  note_id: {
                    n: 4,
                    br: Ee.qM.readString,
                    bw: Ee.gp.writeString,
                  },
                },
              }),
            Ue.sm_m
          );
        }
        static MBF() {
          return Ue.sm_mbf || (Ue.sm_mbf = Ee.w0(Ue.M())), Ue.sm_mbf;
        }
        toObject(e = !1) {
          return Ue.toObject(e, this);
        }
        static toObject(e, t) {
          return Ee.BT(Ue.M(), e, t);
        }
        static fromObject(e) {
          return Ee.Uq(Ue.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Me.BinaryReader(e),
            r = new Ue();
          return Ue.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ee.zj(Ue.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Me.BinaryWriter();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ee.i0(Ue.M(), e, t);
        }
        serializeBase64String() {
          var e = new Me.BinaryWriter();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_DeleteNote_Request";
        }
      }
      class xe extends Ce {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), Ce.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return xe.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new xe();
        }
        static deserializeBinary(e) {
          let t = new Me.BinaryReader(e),
            r = new xe();
          return xe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new Me.BinaryWriter();
          return xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new Me.BinaryWriter();
          return xe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_DeleteNote_Response";
        }
      }
      class We extends Ce {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), Ce.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return We.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new We();
        }
        static deserializeBinary(e) {
          let t = new Me.BinaryReader(e),
            r = new We();
          return We.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new Me.BinaryWriter();
          return We.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new Me.BinaryWriter();
          return We.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_GetGamesWithNotes_Request";
        }
      }
      class Ie extends Ce {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ie.prototype.games_with_notes || Ee.Sg(Ie.M()),
            Ce.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Ie.sm_m ||
              (Ie.sm_m = {
                proto: Ie,
                fields: { games_with_notes: { n: 1, c: Oe, r: !0, q: !0 } },
              }),
            Ie.sm_m
          );
        }
        static MBF() {
          return Ie.sm_mbf || (Ie.sm_mbf = Ee.w0(Ie.M())), Ie.sm_mbf;
        }
        toObject(e = !1) {
          return Ie.toObject(e, this);
        }
        static toObject(e, t) {
          return Ee.BT(Ie.M(), e, t);
        }
        static fromObject(e) {
          return Ee.Uq(Ie.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Me.BinaryReader(e),
            r = new Ie();
          return Ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ee.zj(Ie.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Me.BinaryWriter();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ee.i0(Ie.M(), e, t);
        }
        serializeBase64String() {
          var e = new Me.BinaryWriter();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_GetGamesWithNotes_Response";
        }
      }
      class Oe extends Ce {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Oe.prototype.appid || Ee.Sg(Oe.M()),
            Ce.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Oe.sm_m ||
              (Oe.sm_m = {
                proto: Oe,
                fields: {
                  appid: { n: 1, br: Ee.qM.readUint32, bw: Ee.gp.writeUint32 },
                  shortcutid: {
                    n: 2,
                    br: Ee.qM.readUint32,
                    bw: Ee.gp.writeUint32,
                  },
                  shortcut_name: {
                    n: 3,
                    br: Ee.qM.readString,
                    bw: Ee.gp.writeString,
                  },
                  last_modified: {
                    n: 4,
                    br: Ee.qM.readUint32,
                    bw: Ee.gp.writeUint32,
                  },
                  note_count: {
                    n: 5,
                    br: Ee.qM.readUint32,
                    bw: Ee.gp.writeUint32,
                  },
                },
              }),
            Oe.sm_m
          );
        }
        static MBF() {
          return Oe.sm_mbf || (Oe.sm_mbf = Ee.w0(Oe.M())), Oe.sm_mbf;
        }
        toObject(e = !1) {
          return Oe.toObject(e, this);
        }
        static toObject(e, t) {
          return Ee.BT(Oe.M(), e, t);
        }
        static fromObject(e) {
          return Ee.Uq(Oe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Me.BinaryReader(e),
            r = new Oe();
          return Oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ee.zj(Oe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Me.BinaryWriter();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ee.i0(Oe.M(), e, t);
        }
        serializeBase64String() {
          var e = new Me.BinaryWriter();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_GetGamesWithNotes_Response_GameWithNotes";
        }
      }
      var ke;
      !(function (e) {
        (e.GetNotesForGame = function (e, t) {
          return e.SendMsg(
            "UserGameNotes.GetNotesForGame#1",
            (0, M.I8)(ve, t),
            Te,
            { ePrivilege: 1 },
          );
        }),
          (e.SaveNote = function (e, t) {
            return e.SendMsg("UserGameNotes.SaveNote#1", (0, M.I8)(Ge, t), Re, {
              ePrivilege: 1,
            });
          }),
          (e.DeleteNote = function (e, t) {
            return e.SendMsg(
              "UserGameNotes.DeleteNote#1",
              (0, M.I8)(Ue, t),
              xe,
              { ePrivilege: 1 },
            );
          }),
          (e.GetGamesWithNotes = function (e, t) {
            return e.SendMsg(
              "UserGameNotes.GetGamesWithNotes#1",
              (0, M.I8)(We, t),
              Ie,
              { ePrivilege: 1 },
            );
          });
      })(ke || (ke = {}));
      class Fe {
        constructor(e) {
          this.m_SteamInterface = e;
        }
        async GetGamesWithNotes() {
          const e = M.w.Init(We);
          return (
            await ke.GetGamesWithNotes(
              this.m_SteamInterface.GetServiceTransport(),
              e,
            )
          )
            .Body()
            .toObject().games_with_notes;
        }
        async GetGameNotesList(e, t) {
          const r = M.w.Init(ve);
          this.SetParentOnRequest(r, e), r.Body().set_include_content(t);
          const n = await ke.GetNotesForGame(
            this.m_SteamInterface.GetServiceTransport(),
            r,
          );
          return n.Body().notes().length
            ? n.Body().toObject().notes
            : [this.NewNote(e, "New Note")];
        }
        async SaveGameNote(e, t, r) {
          const n = M.w.Init(Ge);
          e.not_persisted
            ? n.Body().set_create_new(!0)
            : n.Body().set_note_id(e.id),
            e.appid
              ? n.Body().set_appid(e.appid)
              : n.Body().set_shortcut_name(e.shortcut_name),
            n.Body().set_title(t),
            n.Body().set_content(r);
          const i = await ke.SaveNote(
            this.m_SteamInterface.GetServiceTransport(),
            n,
          );
          if (!i.BSuccess()) throw i.GetErrorMessage();
          return i.Body().note_id();
        }
        async DeleteGameNote(e, t) {
          const r = M.w.Init(Ue);
          this.SetParentOnRequest(r, e), r.Body().set_note_id(t);
          const n = await ke.DeleteNote(
            this.m_SteamInterface.GetServiceTransport(),
            r,
          );
          if (!n.BSuccess()) throw n.GetErrorMessage();
          return t;
        }
        QueueNotesSync() {}
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
              id: "temp_" + Fe.sm_lastNoteID++,
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
      function je(e) {
        const t = (0, C.TR)(),
          [r] = n.useState(() => new Fe(t));
        return n.createElement(
          p,
          { mode: "page", store: r },
          n.createElement(
            i.dO,
            null,
            n.createElement(i.qh, { path: a.List() }, n.createElement(I, null)),
            n.createElement(
              i.qh,
              { path: a.AppNotes(":appid", ":noteid?") },
              n.createElement(be, null),
            ),
            n.createElement(
              i.qh,
              null,
              n.createElement(i.rd, { to: `${a.List()}` }),
            ),
          ),
        );
      }
      Fe.sm_lastNoteID = 0;
    },
    49693: (e, t, r) => {
      "use strict";
      r.d(t, { op: () => o, CS: () => a, vE: () => c, Al: () => i });
      class n {
        constructor() {
          (this.type = 0), (this.text = "");
        }
        ConvertMalformedNodeToText() {
          3 == this.type
            ? (this.text = "[/" + this.text)
            : 2 == this.type && (this.text = "[" + this.text),
            (this.type = 1);
        }
      }
      class i {
        constructor(e, t) {
          (this.m_dictComponents = e), (this.m_fnAccumulatorFactory = t);
        }
        Parse(e, t, r = !1) {
          const i = (function (e, t) {
            const r = [];
            let i = new n(),
              a = !1,
              s = !1,
              o = !1;
            for (let n = 0; n < e.length; n++) {
              const c = e[n];
              switch (i.type) {
                case 0:
                  "[" == c
                    ? ((i.type = 2), (s = !0))
                    : ((i.type = 1), "\\" == c && t ? (a = !a) : (i.text += c));
                  break;
                case 2:
                case 3:
                  if ("/" == c && s) (i.type = 3), (i.text = ""), (s = !1);
                  else if ("[" != c || a)
                    if ("]" != c || a)
                      "\\" == c && t
                        ? ((i.text += c), (a = !a), (s = !1))
                        : ((i.text += c), (a = !1), (s = !1));
                    else {
                      const e =
                          2 == i.type &&
                          "noparse" == i.text.toLocaleLowerCase(),
                        t =
                          3 == i.type &&
                          "noparse" == i.text.toLocaleLowerCase();
                      s || (o && !t)
                        ? (i.ConvertMalformedNodeToText(), (i.text += c))
                        : e
                          ? (o = !0)
                          : t && (o = !1),
                        (i = l(r, i)),
                        (s = !1);
                    }
                  else
                    i.ConvertMalformedNodeToText(), (i = l(r, i, 2)), (s = !0);
                  break;
                case 1:
                  "[" != c || a
                    ? "\\" == c && t
                      ? (a && (i.text += c), (a = !a))
                      : ((i.text += c), (a = !1))
                    : ((i = l(r, i, 2)), (s = !0));
              }
            }
            0 != i.type &&
              ((2 != i.type && 3 != i.type) || i.ConvertMalformedNodeToText(),
              r.push(i));
            return r;
          })(e || "", r);
          return this.Parse_BuildElements(i, t);
        }
        Parse_BuildElements(e, t) {
          let r = this.m_fnAccumulatorFactory(void 0);
          const n = [],
            i = () => (n.length < 1 ? void 0 : n[n.length - 1]),
            a = this.m_dictComponents,
            s = (e) => {
              var t;
              return !(
                !e.tag ||
                !(null === (t = a.get(e.tag)) || void 0 === t
                  ? void 0
                  : t.autocloses)
              );
            };
          let o = !1,
            c = !0;
          const l = (e, i) => {
            if (e && e.node.tag === i.text && a.get(e.node.tag)) {
              const i = a.get(e.node.tag),
                s = n.map((e) => e.node.tag),
                l = { parentTags: s, tagname: e.node.tag, args: e.node.args },
                u = t(i.Constructor, l, ...r.GetElements());
              (r = e.accumulator),
                Array.isArray(u)
                  ? u.forEach((e) => r.AppendNode(e))
                  : r.AppendNode(u),
                (o = !!i.skipFollowingNewline),
                (c = e.bWrapTextForCopying);
            } else if (e) {
              const t = e.accumulator;
              t.AppendText("[" + e.node.text + "]", !1),
                r.GetElements().forEach((e) => t.AppendNode(e)),
                t.AppendText("[/" + i.text + "]", !1),
                (r = t),
                (c = e.bWrapTextForCopying);
            }
          };
          for (
            e.forEach((e, t) => {
              var u, m;
              if (1 == e.type) {
                const t = o ? e.text.replace(/^[\t\r ]*\n/g, "") : e.text;
                r.AppendText(t, c), (o = !1);
              } else if (2 == e.type) {
                const t = a.get(e.tag);
                if (t) {
                  const s = i();
                  if (void 0 !== s) {
                    const t = a.get(s.node.tag);
                    t &&
                      t.autocloses &&
                      e.tag === s.node.tag &&
                      l(n.pop(), s.node);
                  }
                  n.push({ accumulator: r, node: e, bWrapTextForCopying: c }),
                    (r = this.m_fnAccumulatorFactory(e)),
                    (o = !!t.skipInternalNewline),
                    (c =
                      null !== (u = t.allowWrapTextForCopying) &&
                      void 0 !== u &&
                      u);
                } else r.AppendText("[" + e.text + "]", 0 == n.length);
              } else if (3 == e.type) {
                for (; i() && i().node.tag !== e.text && s(i().node); ) {
                  const e = n.pop();
                  l(e, e.node);
                }
                if (
                  (null === (m = i()) || void 0 === m ? void 0 : m.node.tag) ==
                  e.text
                ) {
                  const t = n.pop();
                  l(t, e);
                } else r.AppendText("[/" + e.text + "]", 0 == n.length);
              }
            });
            n.length > 0;
          ) {
            const e = n.pop();
            l(e, e.node);
          }
          return r.GetElements();
        }
      }
      function a(e, t) {
        let r = "[" + e;
        (null == t ? void 0 : t[""]) && (r += `=${s("" + t[""])}`);
        for (const e in t)
          "" !== e &&
            (r += ` ${((n = e), n.replace(/(\\| |\])/g, "\\$1"))}=${s("" + t[e])}`);
        var n;
        return (r += "]"), r;
      }
      function s(e) {
        return `"${e.replace(/(\\|"|\])/g, "\\$1")}"`;
      }
      function o(e) {
        return `[/${e}]`;
      }
      function c(e) {
        return e.replace(/(\\|\[)/g, "\\$1");
      }
      function l(e, t, r = 0) {
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
                i = 0,
                a = 0;
              "=" == e[0] && (i = 2);
              let s = !1;
              for (a++; a < e.length; a++) {
                const o = e[a];
                let c = !0,
                  l = !1;
                switch (i) {
                  case 0:
                    if ("=" == o) return {};
                    if (" " == o) continue;
                    i = 1;
                    break;
                  case 1:
                    ("=" != o && " " != o) ||
                      s ||
                      (" " == o ? ((i = 0), (l = !0)) : (i = 2), (c = !1));
                    break;
                  case 2:
                    " " == o
                      ? ((i = 0), (c = !1), (l = !0))
                      : '"' == o
                        ? ((i = 4), (c = !1))
                        : (i = 3);
                    break;
                  case 3:
                  case 4:
                    ((" " == o && 4 != i && !s) ||
                      ('"' == o && 4 == i && !s)) &&
                      ((i = 0), (c = !1), (l = !0));
                }
                if (c)
                  if ("\\" != o || s)
                    if (((s = !1), 1 == i)) r += o;
                    else {
                      if (3 != i && 4 != i)
                        throw new Error(
                          "Not expecting to accumulate buffer in state " + i,
                        );
                      n += o;
                    }
                  else s = !0;
                l && ((t[r] = n), (r = ""), (n = ""));
              }
              0 != i && (t[r] = n);
              return t;
            })(r);
          } else (t.args = {}), (t.tag = t.text.toLocaleLowerCase());
        }
        e.push(t);
        const i = new n();
        return (i.type = r), i;
      }
    },
    61788: (e, t, r) => {
      "use strict";
      r.d(t, { y: () => d });
      var n = r(34629),
        i = r(56545),
        a = r(59134),
        s = r(60778),
        o = r(14771),
        c = r(6419);
      const l = new s.wd("ReactUsageReporting").Debug,
        u = 1e3 * o.Kp.PerMinute;
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
          const e = i.w.Init(a.bc);
          e.Body().set_product(this.m_strProduct),
            e.Body().set_version(this.m_strVersion),
            this.m_mapRoutes.forEach((t, r) => {
              let n = new a.N4();
              n.set_route(r), n.set_count(t), e.Body().add_routes(n);
            }),
            this.m_mapComponents.forEach((t, r) => {
              let n = new a.Zd();
              n.set_component(r), n.set_count(t), e.Body().add_components(n);
            }),
            this.m_mapActions.forEach((t, r) => {
              let n = new a.Ys();
              n.set_action(r), n.set_count(t), e.Body().add_actions(n);
            }),
            this.m_mapRoutes.clear(),
            this.m_mapComponents.clear(),
            this.m_mapActions.clear(),
            (this.m_reportCount = 0),
            a._5.ReportReactUsage(this.m_transport, e);
        }
        get version() {
          return this.m_strVersion;
        }
        get product() {
          return this.m_strProduct;
        }
      }
      (0, n.Cg)([c.o], m.prototype, "CheckSend", null);
      const d = new m();
    },
  },
]);
