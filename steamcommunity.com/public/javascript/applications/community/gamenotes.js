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
    65453: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => qe });
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
      function _() {
        return n.useContext(d).closePopup;
      }
      function h() {
        return n.useContext(d).store;
      }
      var B = r(61859);
      function b(e) {
        return "appid" in e
          ? ["GameNotes", "NotesByAppID", e.appid]
          : ["GameNotes", "NotesForShortcut", u(e.shortcut)];
      }
      function g(e, t) {
        return {
          queryKey: b(t),
          queryFn: async () => (await e.GetGameNotesList(t, !0)) || [],
          enabled: !!t,
        };
      }
      function f(e, t) {
        const r = (0, c.jE)(),
          n = h(),
          i = e.id;
        return (0, l.n)({
          mutationFn: async () =>
            e.not_persisted ? i : await n.DeleteGameNote(m(e), i),
          onSuccess: () => {
            w(r, m(e), (e) => e.filter((e) => e.id != i)), t && t();
          },
        });
      }
      function w(e, t, r) {
        e.setQueryData(b(t), (e) => e && r(e));
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
      var S = r(58632),
        N = r.n(S),
        M = r(56545),
        E = r(37403),
        z = r(23809),
        v = r(30470),
        C = r(22837);
      let R;
      const U = 864e5;
      function G(e) {
        return `appinfo_${e}_${v.TS.LANGUAGE}`;
      }
      function T(e) {
        return Boolean(e && Date.now() - e.timeCached < U);
      }
      function W(e) {
        const t = (0, z.KV)(),
          r = (0, z.rX)();
        return (0, o.I)({
          queryKey: ["appinfo", e],
          queryFn: async () =>
            (function (e, t) {
              return (
                R ||
                  (R = new (N())(
                    async (r) => {
                      const n = new Map();
                      (await Promise.all(r.map((e) => t.GetObject(G(e)))))
                        .filter(T)
                        .forEach(({ value: e }) => n.set(e.appid, e));
                      const i = r.slice().filter((e) => !n.has(e));
                      if (i.length) {
                        const r = M.w.Init(E._z);
                        r.Body().set_language((0, C.sf)(v.TS.LANGUAGE)),
                          r.Body().set_appids(i);
                        const a = await E.BE.GetApps(e, r);
                        if (1 != a.GetEResult()) throw a.GetErrorMessage();
                        a.Body()
                          .toObject()
                          .apps.forEach((e) => {
                            t.StoreObject(G(e.appid), {
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
                R
              );
            })(t, r).load(e),
          staleTime: U,
          enabled: !!e,
        }).data;
      }
      var I = r(22797);
      function O() {
        const { data: e, isLoading: t } = (function () {
          const e = h();
          return (0, o.I)({
            queryKey: ["GameNotes", "GamesWithNotes"],
            queryFn: () => e.GetGamesWithNotes(),
          });
        })();
        return t
          ? n.createElement(I.t, { msDelayAppear: 300 })
          : n.createElement(
              "div",
              null,
              n.createElement(
                "h1",
                null,
                (0, B.we)("#UserGameNotes_NotesList"),
              ),
              n.createElement(
                "ul",
                null,
                e.map((e) => n.createElement(k, { key: e.appid, game: e })),
              ),
            );
      }
      function k(e) {
        const { game: t } = e,
          r = W(t.appid);
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
      var j = r(32662),
        q = r(28106),
        F = r(55608),
        P = r(79497);
      const D = { nodes: { ...F.DQ.nodes }, marks: { ...F.DQ.marks } },
        x = new P.W(D);
      var L = r(61788),
        A = r(33737),
        V = r(4869),
        K = r(9154),
        Q = r(22145),
        Y = r(52893),
        X = r(57053),
        $ = r(67660);
      const Z =
        r.p +
        "images/applications/community/image_error.svg?v=valveisgoodatcaching";
      function H(e) {
        const { uploadImage: t, nodeType: r, nMaxImageSize: i = ee } = e;
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
                              src: Z,
                              title: (0, B.we)("#UserGameNotes_ImageTooLarge"),
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
                                  a = (0, $.wI)(await i.arrayBuffer());
                                J(
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
      function J(e, t, r) {
        r.state.doc.descendants((n, i) => {
          if ("image" === n.type.name && n.attrs.src === e) {
            const e = r.state.tr.setNodeAttribute(i, "src", t);
            r.dispatch(e);
          }
        });
      }
      const ee = 1048576;
      var te = r(43775),
        re = r(32754),
        ne = r(73745),
        ie = r(78327),
        ae = r(72739);
      function se(e) {
        const {
            visible: t = !0,
            className: r,
            keepMounted: i = !1,
            expandDirection: a = "height",
            msAnimationDuration: s = 250,
            children: o,
          } = e,
          {
            style: c,
            active: l,
            refDiv: u,
          } = (function (e, t = "height", r = 250) {
            const i = n.useRef(),
              a = n.useRef(!0),
              [s, o] = n.useState("idle"),
              [c, l] = n.useState({});
            n.useLayoutEffect(() => {
              a.current ? (a.current = !1) : o("start");
            }, [e]),
              n.useLayoutEffect(() => {
                const r = i.current,
                  n = "height" == t ? "scrollHeight" : "scrollWidth";
                if ("start" == s) {
                  const i = r[n];
                  l((r) => ({
                    [t]: e ? "0px" : `${i}px`,
                    ...r,
                    overflow: "hidden",
                  })),
                    o("active");
                } else if ("active" == s) {
                  r.scrollTop;
                  const i = r[n];
                  l({ overflow: "hidden", [t]: e ? `${i}px` : "0px" });
                  const a = () => {
                    ae.unstable_batchedUpdates(() => {
                      l({}), o("idle");
                    });
                  };
                  return (
                    r.addEventListener("transitionend", a),
                    () => {
                      r.removeEventListener("transitionend", a);
                    }
                  );
                }
              }, [s, e]);
            const u = { ...c, transition: `${t} ${r}ms` };
            return { style: u, active: "idle" != s, refDiv: i };
          })(t, a, s);
        return t || l || i
          ? n.createElement("div", { className: r, ref: u, style: c }, o)
          : null;
      }
      var oe = r(73309),
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
                n.createElement(V.cLJ, { direction: c ? "up" : "down" }),
              ),
            ),
            n.createElement(
              se,
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
                    tooltip: (0, B.we)("#FormattingToolbar_CodeBlock"),
                  },
                  n.createElement(V.kNE, null),
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
      const _e = 15;
      function he(e) {
        const { note: t } = e,
          [r, i] = n.useState(),
          a = n.useRef(),
          s = n.useRef(t.content),
          o = n.useRef(!1),
          u = n.useContext(d).onClickURL,
          p =
            null === (b = n.useContext(d).bSpellcheckEnabled) ||
            void 0 === b ||
            b;
        var b;
        const g = n.useContext(d).setSpellcheckEnabled,
          y = (function (e) {
            const t = h();
            return n.useCallback(
              async (r, n) => {
                const i = new Uint8Array(n),
                  a = await t.UploadImage(`notes_${e}_images/`, r, i);
                return Promise.resolve("/gamenotes/" + a);
              },
              [t, e],
            );
          })(t.appid),
          S = (0, ie.Qn)();
        s.current == t.content || o.current || (s.current = t.content);
        const N = s.current,
          { mutate: M } = (function () {
            const e = (0, c.jE)(),
              t = h();
            return (0, l.n)({
              mutationFn: (e) => t.SaveGameNote(e.note, e.title, e.bbcode),
              onMutate(t) {
                const r = { ...t.note, title: t.title, content: t.bbcode };
                return (
                  w(e, m(t.note), (e) => e.map((e) => (e.id == r.id ? r : e))),
                  r
                );
              },
              onSuccess(t, r, n) {
                w(e, m(r.note), (e) =>
                  e.map((e) =>
                    e.id === n.id ? { ...e, id: t, not_persisted: !1 } : e,
                  ),
                );
              },
            });
          })(),
          E = n.useCallback(
            (e, r) => M({ note: t, title: fe(r), bbcode: e }),
            [t, M],
          ),
          {
            onUpdate: z,
            fnCommitPendingSave: v,
            bDirty: C,
          } = (0, j.i)(x, E, {
            msAutosaveTimeout: 1e3 * _e,
            refOnChangeCallback: a,
          });
        n.useEffect(() => {
          C &&
            !o.current &&
            ((o.current = !0),
            L.y.ReportTrackedAction("/GameNotes/NoteModified"));
        }, [C]),
          n.useEffect(() => {
            r && r.focus();
          }, [r]);
        const R = _(),
          U = f(t, R),
          G = {
            onSecondaryButton: () => U.mutate(),
            onSecondaryActionDescription: (0, B.we)(
              "#UserGameNotes_DeleteNote",
            ),
          };
        return n.createElement(
          "div",
          { className: pe.NoteEditorArea },
          !S &&
            n.createElement(de, {
              schema: x.pm_schema,
              view: r,
              refUpdateToolbar: a,
              className: pe.Toolbar,
              bSpellcheckEnabled: p,
              setSpellcheckEnabled: g,
            }),
          n.createElement(
            te.l,
            {
              schemaConfig: x,
              className: pe.EditorInput,
              bbcode: N,
              onUpdate: z,
              refView: i,
              bSpellcheckEnabled: p,
              panelProps: G,
            },
            n.createElement(H, {
              uploadImage: y,
              nodeType: x.pm_schema.nodes.image,
            }),
            n.createElement(q.W, {
              linkMarkType: x.pm_schema.marks.link,
              schema: x.pm_schema,
              onClickURL: u,
            }),
          ),
          !S && n.createElement(Be, { note: t, bDirty: C }),
        );
      }
      function Be(e) {
        const { note: t, bDirty: r } = e,
          [i, a, s] = (0, ne.uD)(!1),
          o = "single" == n.useContext(d).mode,
          c = _(),
          { mutate: l, isPending: u } = f(t, c),
          m = n.useCallback(() => {
            !r && t.not_persisted ? l() : a();
          }, [r, t, l, a]);
        return n.createElement(
          "div",
          { className: pe.NoteActions },
          i &&
            n.createElement(ge, {
              note: t,
              closeModal: s,
              deleteNote: l,
              deletePending: u,
            }),
          n.createElement(
            re.he,
            { toolTipContent: "#UserGameNotes_DeleteNote", direction: "top" },
            n.createElement(A.$n, { onClick: m }, n.createElement(V.lMJ, null)),
          ),
          o && n.createElement(be, { bDirty: r }),
        );
      }
      function be(e) {
        const { bDirty: t } = e,
          r = _();
        return t
          ? n.createElement(
              A.jn,
              { onClick: () => r(), className: pe.CloseWindowButton },
              (0, B.we)("#Button_SaveAndClose"),
            )
          : n.createElement(
              A.$n,
              { onClick: () => r(), className: pe.CloseWindowButton },
              (0, B.we)("#Button_Close"),
            );
      }
      function ge(e) {
        const { note: t, closeModal: r, deleteNote: i, deletePending: a } = e;
        return n.createElement(
          K.EN,
          { active: !0 },
          n.createElement(K.o0, {
            strTitle: (0, B.we)("#UserGameNotes_DeleteNote"),
            strDescription: (0, B.we)("#UserGameNotes_PromptDelete"),
            onOK: () => i(),
            bOKDisabled: a,
            strOKButtonText: (0, B.we)("#Button_Delete"),
            closeModal: r,
          }),
        );
      }
      function fe(e) {
        let t = "";
        for (let r = 0; r < e.content.childCount; r++) {
          const n = e.content.child(r);
          if (n.isText) t += n.text;
          else {
            if (((t = t.trim()), t.length > 4)) return t;
            if (((t = fe(n)), t.length > 4)) return t;
          }
        }
        return t.trim();
      }
      function we() {
        const e = (0, i.W5)(),
          t = y(
            "appid" in e.params && Number(e.params.appid),
            "shortcut_name" in e.params && e.params.shortcut_name,
          );
        let r = e.params.noteid;
        const a = (0, i.W6)(),
          s = (function (e) {
            const t = (0, c.jE)(),
              r = h();
            return n.useCallback(() => {
              const n = (0, B.we)("#UserGameNotes_UntitledNote_Title"),
                i = r.NewNote(e, n);
              return w(t, e, (e) => [...e, i]), i.id;
            }, [t, r, e]);
          })(t),
          { data: l, isLoading: u } = (function (e) {
            const t = h();
            return (0, o.I)(g(t, e));
          })(t);
        let m;
        l && r && (m = l.find((e) => e.id === r)),
          n.useEffect(() => {
            !l ||
              (r && l.find((e) => e.id === r)) ||
              (l.length > 0 && l[0].id ? Se(a, t, l[0].id) : Se(a, t, s()));
          }, [a, t, r, l, s]);
        const d = n.createElement(
          re.he,
          { toolTipContent: "#UserGameNotes_NewNote", direction: "top" },
          n.createElement(
            A.$n,
            {
              className: pe.NewNoteButton,
              onClick: () => {
                const e = s();
                Se(a, t, e);
              },
            },
            n.createElement(V.qY3, null),
          ),
        );
        return l
          ? n.createElement(ye, {
              noteParent: t,
              notes: l,
              activeNoteID: null == m ? void 0 : m.id,
              actions: d,
            })
          : null;
      }
      function ye(e) {
        const { noteParent: t, notes: r, activeNoteID: a, actions: s } = e,
          [o, c] = (0, me.SP)("NotesListCollapsed", !1),
          l = n.useContext(d).bPinnedView,
          u = (0, ie.Qn)(),
          m = r.map((e) => {
            var t;
            return {
              title:
                (null === (t = e.title) || void 0 === t ? void 0 : t.length) > 0
                  ? e.title
                  : (0, B.we)("#UserGameNotes_Untitled"),
              identifier: e.id,
              content: n.createElement(he, { note: e }),
              pageClassName: pe.NotePage,
              hideTitle: !0,
            };
          }),
          p = (0, i.W6)(),
          _ = n.useCallback((e) => Se(p, t, e), [p, t]);
        return n.createElement(A.Bv, {
          title: (0, B.we)("#UserGameNotes_NotesList"),
          pages: m,
          className: (0, ue.A)(pe.NotesPagedSettings, l && pe.PinnedView),
          page: a,
          onPageRequested: _,
          bottomControls: s,
          hideList: o,
          toggleHideList: l || u ? void 0 : () => c(!o),
        });
      }
      function Se(e, t, r) {
        let n;
        (n =
          "appid" in t
            ? a.AppNotes(t.appid, r)
            : a.ShortcutNotes(t.shortcut, r)),
          e.replace(n, e.location.state);
      }
      var Ne = r(80613),
        Me = r(89068);
      const Ee = Ne.Message;
      class ze extends Ee {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ze.prototype.id || Me.Sg(ze.M()),
            Ee.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ze.sm_m ||
              (ze.sm_m = {
                proto: ze,
                fields: {
                  id: { n: 1, br: Me.qM.readString, bw: Me.gp.writeString },
                  appid: { n: 2, br: Me.qM.readUint32, bw: Me.gp.writeUint32 },
                  shortcut_name: {
                    n: 3,
                    br: Me.qM.readString,
                    bw: Me.gp.writeString,
                  },
                  shortcutid: {
                    n: 4,
                    br: Me.qM.readUint32,
                    bw: Me.gp.writeUint32,
                  },
                  ordinal: {
                    n: 5,
                    br: Me.qM.readUint32,
                    bw: Me.gp.writeUint32,
                  },
                  time_created: {
                    n: 6,
                    br: Me.qM.readUint32,
                    bw: Me.gp.writeUint32,
                  },
                  time_modified: {
                    n: 7,
                    br: Me.qM.readUint32,
                    bw: Me.gp.writeUint32,
                  },
                  title: { n: 8, br: Me.qM.readString, bw: Me.gp.writeString },
                  content: {
                    n: 9,
                    br: Me.qM.readString,
                    bw: Me.gp.writeString,
                  },
                },
              }),
            ze.sm_m
          );
        }
        static MBF() {
          return ze.sm_mbf || (ze.sm_mbf = Me.w0(ze.M())), ze.sm_mbf;
        }
        toObject(e = !1) {
          return ze.toObject(e, this);
        }
        static toObject(e, t) {
          return Me.BT(ze.M(), e, t);
        }
        static fromObject(e) {
          return Me.Uq(ze.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Ne.BinaryReader(e),
            r = new ze();
          return ze.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Me.zj(ze.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Ne.BinaryWriter();
          return ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Me.i0(ze.M(), e, t);
        }
        serializeBase64String() {
          var e = new Ne.BinaryWriter();
          return ze.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNote";
        }
      }
      class ve extends Ee {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ve.prototype.appid || Me.Sg(ve.M()),
            Ee.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ve.sm_m ||
              (ve.sm_m = {
                proto: ve,
                fields: {
                  appid: { n: 1, br: Me.qM.readUint32, bw: Me.gp.writeUint32 },
                  shortcut_name: {
                    n: 2,
                    br: Me.qM.readString,
                    bw: Me.gp.writeString,
                  },
                  shortcutid: {
                    n: 3,
                    br: Me.qM.readUint32,
                    bw: Me.gp.writeUint32,
                  },
                  include_content: {
                    n: 4,
                    br: Me.qM.readBool,
                    bw: Me.gp.writeBool,
                  },
                },
              }),
            ve.sm_m
          );
        }
        static MBF() {
          return ve.sm_mbf || (ve.sm_mbf = Me.w0(ve.M())), ve.sm_mbf;
        }
        toObject(e = !1) {
          return ve.toObject(e, this);
        }
        static toObject(e, t) {
          return Me.BT(ve.M(), e, t);
        }
        static fromObject(e) {
          return Me.Uq(ve.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Ne.BinaryReader(e),
            r = new ve();
          return ve.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Me.zj(ve.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Ne.BinaryWriter();
          return ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Me.i0(ve.M(), e, t);
        }
        serializeBase64String() {
          var e = new Ne.BinaryWriter();
          return ve.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_GetNotesForGame_Request";
        }
      }
      class Ce extends Ee {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ce.prototype.notes || Me.Sg(Ce.M()),
            Ee.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Ce.sm_m ||
              (Ce.sm_m = {
                proto: Ce,
                fields: { notes: { n: 1, c: ze, r: !0, q: !0 } },
              }),
            Ce.sm_m
          );
        }
        static MBF() {
          return Ce.sm_mbf || (Ce.sm_mbf = Me.w0(Ce.M())), Ce.sm_mbf;
        }
        toObject(e = !1) {
          return Ce.toObject(e, this);
        }
        static toObject(e, t) {
          return Me.BT(Ce.M(), e, t);
        }
        static fromObject(e) {
          return Me.Uq(Ce.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Ne.BinaryReader(e),
            r = new Ce();
          return Ce.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Me.zj(Ce.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Ne.BinaryWriter();
          return Ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Me.i0(Ce.M(), e, t);
        }
        serializeBase64String() {
          var e = new Ne.BinaryWriter();
          return Ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_GetNotesForGame_Response";
        }
      }
      class Re extends Ee {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Re.prototype.appid || Me.Sg(Re.M()),
            Ee.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Re.sm_m ||
              (Re.sm_m = {
                proto: Re,
                fields: {
                  appid: { n: 1, br: Me.qM.readUint32, bw: Me.gp.writeUint32 },
                  shortcut_name: {
                    n: 2,
                    br: Me.qM.readString,
                    bw: Me.gp.writeString,
                  },
                  shortcutid: {
                    n: 3,
                    br: Me.qM.readUint32,
                    bw: Me.gp.writeUint32,
                  },
                  note_id: {
                    n: 4,
                    br: Me.qM.readString,
                    bw: Me.gp.writeString,
                  },
                  create_new: { n: 5, br: Me.qM.readBool, bw: Me.gp.writeBool },
                  title: { n: 6, br: Me.qM.readString, bw: Me.gp.writeString },
                  content: {
                    n: 7,
                    br: Me.qM.readString,
                    bw: Me.gp.writeString,
                  },
                },
              }),
            Re.sm_m
          );
        }
        static MBF() {
          return Re.sm_mbf || (Re.sm_mbf = Me.w0(Re.M())), Re.sm_mbf;
        }
        toObject(e = !1) {
          return Re.toObject(e, this);
        }
        static toObject(e, t) {
          return Me.BT(Re.M(), e, t);
        }
        static fromObject(e) {
          return Me.Uq(Re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Ne.BinaryReader(e),
            r = new Re();
          return Re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Me.zj(Re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Ne.BinaryWriter();
          return Re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Me.i0(Re.M(), e, t);
        }
        serializeBase64String() {
          var e = new Ne.BinaryWriter();
          return Re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_SaveNote_Request";
        }
      }
      class Ue extends Ee {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ue.prototype.note_id || Me.Sg(Ue.M()),
            Ee.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ue.sm_m ||
              (Ue.sm_m = {
                proto: Ue,
                fields: {
                  note_id: {
                    n: 1,
                    br: Me.qM.readString,
                    bw: Me.gp.writeString,
                  },
                },
              }),
            Ue.sm_m
          );
        }
        static MBF() {
          return Ue.sm_mbf || (Ue.sm_mbf = Me.w0(Ue.M())), Ue.sm_mbf;
        }
        toObject(e = !1) {
          return Ue.toObject(e, this);
        }
        static toObject(e, t) {
          return Me.BT(Ue.M(), e, t);
        }
        static fromObject(e) {
          return Me.Uq(Ue.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Ne.BinaryReader(e),
            r = new Ue();
          return Ue.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Me.zj(Ue.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Ne.BinaryWriter();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Me.i0(Ue.M(), e, t);
        }
        serializeBase64String() {
          var e = new Ne.BinaryWriter();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_SaveNote_Response";
        }
      }
      class Ge extends Ee {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ge.prototype.appid || Me.Sg(Ge.M()),
            Ee.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ge.sm_m ||
              (Ge.sm_m = {
                proto: Ge,
                fields: {
                  appid: { n: 1, br: Me.qM.readUint32, bw: Me.gp.writeUint32 },
                  shortcut_name: {
                    n: 2,
                    br: Me.qM.readString,
                    bw: Me.gp.writeString,
                  },
                  shortcutid: {
                    n: 3,
                    br: Me.qM.readUint32,
                    bw: Me.gp.writeUint32,
                  },
                  note_id: {
                    n: 4,
                    br: Me.qM.readString,
                    bw: Me.gp.writeString,
                  },
                },
              }),
            Ge.sm_m
          );
        }
        static MBF() {
          return Ge.sm_mbf || (Ge.sm_mbf = Me.w0(Ge.M())), Ge.sm_mbf;
        }
        toObject(e = !1) {
          return Ge.toObject(e, this);
        }
        static toObject(e, t) {
          return Me.BT(Ge.M(), e, t);
        }
        static fromObject(e) {
          return Me.Uq(Ge.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Ne.BinaryReader(e),
            r = new Ge();
          return Ge.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Me.zj(Ge.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Ne.BinaryWriter();
          return Ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Me.i0(Ge.M(), e, t);
        }
        serializeBase64String() {
          var e = new Ne.BinaryWriter();
          return Ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_DeleteNote_Request";
        }
      }
      class Te extends Ee {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), Ee.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Te.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Te();
        }
        static deserializeBinary(e) {
          let t = new Ne.BinaryReader(e),
            r = new Te();
          return Te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new Ne.BinaryWriter();
          return Te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new Ne.BinaryWriter();
          return Te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_DeleteNote_Response";
        }
      }
      class We extends Ee {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), Ee.initialize(this, e, 0, -1, void 0, null);
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
          let t = new Ne.BinaryReader(e),
            r = new We();
          return We.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new Ne.BinaryWriter();
          return We.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new Ne.BinaryWriter();
          return We.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_GetGamesWithNotes_Request";
        }
      }
      class Ie extends Ee {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ie.prototype.games_with_notes || Me.Sg(Ie.M()),
            Ee.initialize(this, e, 0, -1, [1], null);
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
          return Ie.sm_mbf || (Ie.sm_mbf = Me.w0(Ie.M())), Ie.sm_mbf;
        }
        toObject(e = !1) {
          return Ie.toObject(e, this);
        }
        static toObject(e, t) {
          return Me.BT(Ie.M(), e, t);
        }
        static fromObject(e) {
          return Me.Uq(Ie.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Ne.BinaryReader(e),
            r = new Ie();
          return Ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Me.zj(Ie.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Ne.BinaryWriter();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Me.i0(Ie.M(), e, t);
        }
        serializeBase64String() {
          var e = new Ne.BinaryWriter();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_GetGamesWithNotes_Response";
        }
      }
      class Oe extends Ee {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Oe.prototype.appid || Me.Sg(Oe.M()),
            Ee.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Oe.sm_m ||
              (Oe.sm_m = {
                proto: Oe,
                fields: {
                  appid: { n: 1, br: Me.qM.readUint32, bw: Me.gp.writeUint32 },
                  shortcutid: {
                    n: 2,
                    br: Me.qM.readUint32,
                    bw: Me.gp.writeUint32,
                  },
                  shortcut_name: {
                    n: 3,
                    br: Me.qM.readString,
                    bw: Me.gp.writeString,
                  },
                  last_modified: {
                    n: 4,
                    br: Me.qM.readUint32,
                    bw: Me.gp.writeUint32,
                  },
                  note_count: {
                    n: 5,
                    br: Me.qM.readUint32,
                    bw: Me.gp.writeUint32,
                  },
                },
              }),
            Oe.sm_m
          );
        }
        static MBF() {
          return Oe.sm_mbf || (Oe.sm_mbf = Me.w0(Oe.M())), Oe.sm_mbf;
        }
        toObject(e = !1) {
          return Oe.toObject(e, this);
        }
        static toObject(e, t) {
          return Me.BT(Oe.M(), e, t);
        }
        static fromObject(e) {
          return Me.Uq(Oe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Ne.BinaryReader(e),
            r = new Oe();
          return Oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Me.zj(Oe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Ne.BinaryWriter();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Me.i0(Oe.M(), e, t);
        }
        serializeBase64String() {
          var e = new Ne.BinaryWriter();
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
            Ce,
            { ePrivilege: 1 },
          );
        }),
          (e.SaveNote = function (e, t) {
            return e.SendMsg("UserGameNotes.SaveNote#1", (0, M.I8)(Re, t), Ue, {
              ePrivilege: 1,
            });
          }),
          (e.DeleteNote = function (e, t) {
            return e.SendMsg(
              "UserGameNotes.DeleteNote#1",
              (0, M.I8)(Ge, t),
              Te,
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
      class je {
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
          const n = M.w.Init(Re);
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
          const r = M.w.Init(Ge);
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
              id: "temp_" + je.sm_lastNoteID++,
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
      function qe(e) {
        const t = (0, z.TR)(),
          [r] = n.useState(() => new je(t));
        return n.createElement(
          p,
          { mode: "page", store: r },
          n.createElement(
            i.dO,
            null,
            n.createElement(i.qh, { path: a.List() }, n.createElement(O, null)),
            n.createElement(
              i.qh,
              { path: a.AppNotes(":appid", ":noteid?") },
              n.createElement(we, null),
            ),
            n.createElement(
              i.qh,
              null,
              n.createElement(i.rd, { to: `${a.List()}` }),
            ),
          ),
        );
      }
      je.sm_lastNoteID = 0;
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
