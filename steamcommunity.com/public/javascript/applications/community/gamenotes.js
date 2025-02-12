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
    15351: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => Pe });
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
      function d(e) {
        return e.appid ? { appid: e.appid } : { shortcut: e.shortcut_name };
      }
      const m = n.createContext({ mode: "page", store: null });
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
        return n.createElement(m.Provider, { value: u }, l);
      }
      function h() {
        return n.useContext(m).closePopup;
      }
      function f() {
        return n.useContext(m).store;
      }
      var g = r(61859);
      function _(e) {
        return "appid" in e
          ? ["GameNotes", "NotesByAppID", e.appid]
          : ["GameNotes", "NotesForShortcut", u(e.shortcut)];
      }
      function y(e, t) {
        return {
          queryKey: _(t),
          queryFn: async () => (await e.GetGameNotesList(t, !0)) || [],
          enabled: !!t,
        };
      }
      function b(e, t) {
        const r = (0, c.jE)(),
          n = f(),
          i = e.id;
        return (0, l.n)({
          mutationFn: async () =>
            e.not_persisted ? i : await n.DeleteGameNote(d(e), i),
          onSuccess: () => {
            w(r, d(e), (e) => e.filter((e) => e.id != i)), t && t();
          },
        });
      }
      function w(e, t, r) {
        e.setQueryData(_(t), (e) => e && r(e));
      }
      function B(e, t) {
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
        v = r(37403),
        E = r(23809),
        C = r(30470),
        z = r(22837);
      let T;
      const R = 864e5;
      function x(e) {
        return `appinfo_${e}_${C.TS.LANGUAGE}`;
      }
      function U(e) {
        return Boolean(e && Date.now() - e.timeCached < R);
      }
      function G(e) {
        const t = (0, E.KV)(),
          r = (0, E.rX)();
        return (0, o.I)({
          queryKey: ["appinfo", e],
          queryFn: async () =>
            (function (e, t) {
              return (
                T ||
                  (T = new (N())(
                    async (r) => {
                      const n = new Map();
                      (await Promise.all(r.map((e) => t.GetObject(x(e)))))
                        .filter(U)
                        .forEach(({ value: e }) => n.set(e.appid, e));
                      const i = r.slice().filter((e) => !n.has(e));
                      if (i.length) {
                        const r = M.w.Init(v._z);
                        r.Body().set_language((0, z.sf)(C.TS.LANGUAGE)),
                          r.Body().set_appids(i);
                        const a = await v.BE.GetApps(e, r);
                        if (1 != a.GetEResult()) throw a.GetErrorMessage();
                        a.Body()
                          .toObject()
                          .apps.forEach((e) => {
                            t.StoreObject(x(e.appid), {
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
          staleTime: R,
          enabled: !!e,
        }).data;
      }
      var k = r(22797);
      function W() {
        const { data: e, isLoading: t } = (function () {
          const e = f();
          return (0, o.I)({
            queryKey: ["GameNotes", "GamesWithNotes"],
            queryFn: () => e.GetGamesWithNotes(),
          });
        })();
        return t
          ? n.createElement(k.t, { msDelayAppear: 300 })
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
          r = G(t.appid);
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
      var I = r(7071),
        F = r(26555),
        P = r(28106),
        j = r(55608),
        q = r(79497);
      const L = { nodes: { ...j.DQ.nodes }, marks: { ...j.DQ.marks } },
        A = new q.W(L);
      var D = r(61788),
        K = r(33737),
        $ = r(4869),
        V = r(9154),
        Q = r(22145),
        X = r(52893),
        Y = r(57053),
        H = r(67660);
      const Z =
        r.p +
        "images/applications/community/image_error.svg?v=valveisgoodatcaching";
      function J(e) {
        const { uploadImage: t, nodeType: r, nMaxImageSize: i = te } = e;
        return (
          (0, Q.c$)(
            n.useMemo(
              () =>
                new X.k_({
                  key: new X.hs(`PMUploadImage_${r.name}`),
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
                              title: (0, g.we)("#UserGameNotes_ImageTooLarge"),
                            }),
                          ];
                          return new Y.Ji(Y.FK.from(t), 0, 0);
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
                                  a = (0, H.wI)(await i.arrayBuffer());
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
        de = r(76011);
      function me(e) {
        const {
            schema: t,
            view: r,
            refUpdateToolbar: i,
            className: a,
            bSpellcheckEnabled: s,
            setSpellcheckEnabled: o,
          } = e,
          [c, l] = (0, de.SP)("FormattingToolbar_Expanded", !1);
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
                n.createElement($.cLJ, { direction: c ? "up" : "down" }),
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
                  n.createElement($.kNE, null),
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
      function fe(e) {
        const { note: t, hidden: r = !1 } = e,
          [i, a] = n.useState(),
          s = n.useRef(),
          o = n.useRef(!1),
          u = n.useContext(m).onClickURL,
          p =
            null === (_ = n.useContext(m).bSpellcheckEnabled) ||
            void 0 === _ ||
            _;
        var _;
        const y = n.useContext(m).setSpellcheckEnabled,
          B = (function (e) {
            const t = f();
            return n.useCallback(
              async (r, n) => {
                const i = new Uint8Array(n),
                  a = await t.UploadImage(`notes_${e}_images/`, r, i);
                return Promise.resolve("/gamenotes/" + a);
              },
              [t, e],
            );
          })(t.appid),
          S = (0, ae.Qn)(),
          { mutate: N } = (function (e) {
            const t = (0, c.jE)(),
              r = f(),
              n = d(e);
            return (0, l.n)({
              scope: {
                id: `${"appid" in e ? e.appid : e.shortcut_name}_${e.id}`,
              },
              mutationFn: (t) => r.SaveGameNote(e, t.title, t.bbcode),
              onMutate(r) {
                const i = { ...e, title: r.title, content: r.bbcode };
                return w(t, n, (e) => e.map((e) => (e.id == i.id ? i : e))), i;
              },
              onSuccess(e, r, i) {
                w(t, n, (t) =>
                  t.map((t) =>
                    t.id === i.id ? { ...t, id: e, not_persisted: !1 } : t,
                  ),
                );
              },
            });
          })(t),
          [M, v] = n.useState();
        n.useEffect(() => {
          o.current ||
            v(new I.n(A, t.content, (e, t) => N({ title: be(t), bbcode: e })));
        }, [N, t.content]);
        const { bDirty: E } = (0, F.i)(M, { msAutosaveTimeout: 1e3 * he });
        n.useEffect(() => {
          E &&
            !o.current &&
            ((o.current = !0),
            D.y.ReportTrackedAction("/GameNotes/NoteModified"));
        }, [E]),
          n.useEffect(() => {
            i && !r && i.focus();
          }, [i, r]),
          n.useEffect(() => {
            r && M && M.CommitChanges();
          }, [r, M]);
        const C = h(),
          z = b(t, C),
          T = {
            onSecondaryButton: () => z.mutate(),
            onSecondaryActionDescription: (0, g.we)(
              "#UserGameNotes_DeleteNote",
            ),
          };
        return n.createElement(
          "div",
          { className: pe.NoteEditorArea },
          !S &&
            n.createElement(me, {
              schema: A.pm_schema,
              view: i,
              refUpdateToolbar: s,
              className: pe.Toolbar,
              bSpellcheckEnabled: p,
              setSpellcheckEnabled: y,
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
            n.createElement(J, {
              uploadImage: B,
              nodeType: A.pm_schema.nodes.image,
            }),
            n.createElement(P.W, {
              linkMarkType: A.pm_schema.marks.link,
              schema: A.pm_schema,
              onClickURL: u,
            }),
          ),
          !S && n.createElement(ge, { note: t, bDirty: E }),
        );
      }
      function ge(e) {
        const { note: t, bDirty: r } = e,
          [i, a, s] = (0, ie.uD)(!1),
          o = "single" == n.useContext(m).mode,
          c = h(),
          { mutate: l, isPending: u } = b(t, c),
          d = n.useCallback(() => {
            !r && t.not_persisted ? l() : a();
          }, [r, t, l, a]);
        return n.createElement(
          "div",
          { className: pe.NoteActions },
          i &&
            n.createElement(ye, {
              note: t,
              closeModal: s,
              deleteNote: l,
              deletePending: u,
            }),
          n.createElement(
            ne.he,
            { toolTipContent: "#UserGameNotes_DeleteNote", direction: "top" },
            n.createElement(K.$n, { onClick: d }, n.createElement($.lMJ, null)),
          ),
          o && n.createElement(_e, { bDirty: r }),
        );
      }
      function _e(e) {
        const { bDirty: t } = e,
          r = h();
        return t
          ? n.createElement(
              K.jn,
              { onClick: () => r(), className: pe.CloseWindowButton },
              (0, g.we)("#Button_SaveAndClose"),
            )
          : n.createElement(
              K.$n,
              { onClick: () => r(), className: pe.CloseWindowButton },
              (0, g.we)("#Button_Close"),
            );
      }
      function ye(e) {
        const { note: t, closeModal: r, deleteNote: i, deletePending: a } = e;
        return n.createElement(
          V.EN,
          { active: !0 },
          n.createElement(V.o0, {
            strTitle: (0, g.we)("#UserGameNotes_DeleteNote"),
            strDescription: (0, g.we)("#UserGameNotes_PromptDelete"),
            onOK: () => i(),
            bOKDisabled: a,
            strOKButtonText: (0, g.we)("#Button_Delete"),
            closeModal: r,
          }),
        );
      }
      function be(e) {
        let t = "";
        for (let r = 0; r < e.content.childCount; r++) {
          const n = e.content.child(r);
          if (n.isText) t += n.text;
          else {
            if (((t = t.trim()), t.length > 4)) return t;
            if (((t = be(n)), t.length > 4)) return t;
          }
        }
        return t.trim();
      }
      function we(e) {
        const { bStandalonePage: t } = e,
          r = (0, i.W5)(),
          a = B(
            "appid" in r.params && Number(r.params.appid),
            "shortcut_name" in r.params && r.params.shortcut_name,
          );
        let s = r.params.noteid;
        const l = (0, i.W6)(),
          u = (function (e) {
            const t = (0, c.jE)(),
              r = f();
            return n.useCallback(() => {
              const n = (0, g.we)("#UserGameNotes_UntitledNote_Title"),
                i = r.NewNote(e, n);
              return w(t, e, (e) => [...e, i]), i.id;
            }, [t, r, e]);
          })(a),
          { data: d, isLoading: m } = (function (e) {
            const t = f();
            return (0, o.I)(y(t, e));
          })(a);
        let p;
        d && s && (p = d.find((e) => e.id === s)),
          n.useEffect(() => {
            !d ||
              (s && d.find((e) => e.id === s)) ||
              (d.length > 0 && d[0].id ? Ne(l, a, d[0].id) : Ne(l, a, u()));
          }, [l, a, s, d, u]);
        const h = n.createElement(
          ne.he,
          { toolTipContent: "#UserGameNotes_NewNote", direction: "top" },
          n.createElement(
            K.$n,
            {
              className: pe.NewNoteButton,
              onClick: () => {
                const e = u();
                Ne(l, a, e);
              },
            },
            n.createElement($.qY3, null),
          ),
        );
        return d
          ? n.createElement(Be, {
              noteParent: a,
              notes: d,
              activeNoteID: null == p ? void 0 : p.id,
              actions: h,
              bStandalonePage: t,
            })
          : null;
      }
      function Be(e) {
        const {
            noteParent: t,
            notes: r,
            activeNoteID: a,
            actions: s,
            bStandalonePage: o,
          } = e,
          [c, l] = (0, de.SP)("NotesListCollapsed", !1),
          u = n.useContext(m).bPinnedView,
          d = (0, ae.Qn)(),
          p = r.map((e) => {
            var t;
            return {
              title:
                (null === (t = e.title) || void 0 === t ? void 0 : t.length) > 0
                  ? e.title
                  : (0, g.we)("#UserGameNotes_Untitled"),
              identifier: e.id,
              content: n.createElement(Se, { note: e }),
              pageClassName: pe.NotePage,
              hideTitle: !0,
            };
          }),
          h = (0, i.W6)(),
          f = n.useCallback((e) => Ne(h, t, e), [h, t]);
        return d && o
          ? n.createElement(K.Bv, {
              title: (0, g.we)("#UserGameNotes_NotesList"),
              pages: p,
              className: (0, ue.A)(pe.NotesPagedSettings, u && pe.PinnedView),
              page: a,
              onPageRequested: f,
              bottomControls: s,
              hideList: c,
              toggleHideList: u || d ? void 0 : () => l(!c),
            })
          : n.createElement(K.O7, {
              title: (0, g.we)("#UserGameNotes_NotesList"),
              pages: p,
              className: (0, ue.A)(pe.NotesPagedSettings, u && pe.PinnedView),
              page: a,
              onPageRequested: f,
              bottomControls: s,
              hideList: c,
              toggleHideList: u || d ? void 0 : () => l(!c),
            });
      }
      function Se(e) {
        const { note: t } = e,
          r = K.v$();
        return n.createElement(fe, { note: t, hidden: !r });
      }
      function Ne(e, t, r) {
        let n;
        (n =
          "appid" in t
            ? a.AppNotes(t.appid, r)
            : a.ShortcutNotes(t.shortcut, r)),
          e.replace(n, e.location.state);
      }
      var Me = r(80613),
        ve = r(89068);
      const Ee = Me.Message;
      class Ce extends Ee {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ce.prototype.id || ve.Sg(Ce.M()),
            Ee.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ce.sm_m ||
              (Ce.sm_m = {
                proto: Ce,
                fields: {
                  id: { n: 1, br: ve.qM.readString, bw: ve.gp.writeString },
                  appid: { n: 2, br: ve.qM.readUint32, bw: ve.gp.writeUint32 },
                  shortcut_name: {
                    n: 3,
                    br: ve.qM.readString,
                    bw: ve.gp.writeString,
                  },
                  shortcutid: {
                    n: 4,
                    br: ve.qM.readUint32,
                    bw: ve.gp.writeUint32,
                  },
                  ordinal: {
                    n: 5,
                    br: ve.qM.readUint32,
                    bw: ve.gp.writeUint32,
                  },
                  time_created: {
                    n: 6,
                    br: ve.qM.readUint32,
                    bw: ve.gp.writeUint32,
                  },
                  time_modified: {
                    n: 7,
                    br: ve.qM.readUint32,
                    bw: ve.gp.writeUint32,
                  },
                  title: { n: 8, br: ve.qM.readString, bw: ve.gp.writeString },
                  content: {
                    n: 9,
                    br: ve.qM.readString,
                    bw: ve.gp.writeString,
                  },
                },
              }),
            Ce.sm_m
          );
        }
        static MBF() {
          return Ce.sm_mbf || (Ce.sm_mbf = ve.w0(Ce.M())), Ce.sm_mbf;
        }
        toObject(e = !1) {
          return Ce.toObject(e, this);
        }
        static toObject(e, t) {
          return ve.BT(Ce.M(), e, t);
        }
        static fromObject(e) {
          return ve.Uq(Ce.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Me.BinaryReader(e),
            r = new Ce();
          return Ce.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ve.zj(Ce.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Me.BinaryWriter();
          return Ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ve.i0(Ce.M(), e, t);
        }
        serializeBase64String() {
          var e = new Me.BinaryWriter();
          return Ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNote";
        }
      }
      class ze extends Ee {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ze.prototype.appid || ve.Sg(ze.M()),
            Ee.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ze.sm_m ||
              (ze.sm_m = {
                proto: ze,
                fields: {
                  appid: { n: 1, br: ve.qM.readUint32, bw: ve.gp.writeUint32 },
                  shortcut_name: {
                    n: 2,
                    br: ve.qM.readString,
                    bw: ve.gp.writeString,
                  },
                  shortcutid: {
                    n: 3,
                    br: ve.qM.readUint32,
                    bw: ve.gp.writeUint32,
                  },
                  include_content: {
                    n: 4,
                    br: ve.qM.readBool,
                    bw: ve.gp.writeBool,
                  },
                },
              }),
            ze.sm_m
          );
        }
        static MBF() {
          return ze.sm_mbf || (ze.sm_mbf = ve.w0(ze.M())), ze.sm_mbf;
        }
        toObject(e = !1) {
          return ze.toObject(e, this);
        }
        static toObject(e, t) {
          return ve.BT(ze.M(), e, t);
        }
        static fromObject(e) {
          return ve.Uq(ze.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Me.BinaryReader(e),
            r = new ze();
          return ze.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ve.zj(ze.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Me.BinaryWriter();
          return ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ve.i0(ze.M(), e, t);
        }
        serializeBase64String() {
          var e = new Me.BinaryWriter();
          return ze.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_GetNotesForGame_Request";
        }
      }
      class Te extends Ee {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Te.prototype.notes || ve.Sg(Te.M()),
            Ee.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Te.sm_m ||
              (Te.sm_m = {
                proto: Te,
                fields: { notes: { n: 1, c: Ce, r: !0, q: !0 } },
              }),
            Te.sm_m
          );
        }
        static MBF() {
          return Te.sm_mbf || (Te.sm_mbf = ve.w0(Te.M())), Te.sm_mbf;
        }
        toObject(e = !1) {
          return Te.toObject(e, this);
        }
        static toObject(e, t) {
          return ve.BT(Te.M(), e, t);
        }
        static fromObject(e) {
          return ve.Uq(Te.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Me.BinaryReader(e),
            r = new Te();
          return Te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ve.zj(Te.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Me.BinaryWriter();
          return Te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ve.i0(Te.M(), e, t);
        }
        serializeBase64String() {
          var e = new Me.BinaryWriter();
          return Te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_GetNotesForGame_Response";
        }
      }
      class Re extends Ee {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Re.prototype.appid || ve.Sg(Re.M()),
            Ee.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Re.sm_m ||
              (Re.sm_m = {
                proto: Re,
                fields: {
                  appid: { n: 1, br: ve.qM.readUint32, bw: ve.gp.writeUint32 },
                  shortcut_name: {
                    n: 2,
                    br: ve.qM.readString,
                    bw: ve.gp.writeString,
                  },
                  shortcutid: {
                    n: 3,
                    br: ve.qM.readUint32,
                    bw: ve.gp.writeUint32,
                  },
                  note_id: {
                    n: 4,
                    br: ve.qM.readString,
                    bw: ve.gp.writeString,
                  },
                  create_new: { n: 5, br: ve.qM.readBool, bw: ve.gp.writeBool },
                  title: { n: 6, br: ve.qM.readString, bw: ve.gp.writeString },
                  content: {
                    n: 7,
                    br: ve.qM.readString,
                    bw: ve.gp.writeString,
                  },
                },
              }),
            Re.sm_m
          );
        }
        static MBF() {
          return Re.sm_mbf || (Re.sm_mbf = ve.w0(Re.M())), Re.sm_mbf;
        }
        toObject(e = !1) {
          return Re.toObject(e, this);
        }
        static toObject(e, t) {
          return ve.BT(Re.M(), e, t);
        }
        static fromObject(e) {
          return ve.Uq(Re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Me.BinaryReader(e),
            r = new Re();
          return Re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ve.zj(Re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Me.BinaryWriter();
          return Re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ve.i0(Re.M(), e, t);
        }
        serializeBase64String() {
          var e = new Me.BinaryWriter();
          return Re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_SaveNote_Request";
        }
      }
      class xe extends Ee {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            xe.prototype.note_id || ve.Sg(xe.M()),
            Ee.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            xe.sm_m ||
              (xe.sm_m = {
                proto: xe,
                fields: {
                  note_id: {
                    n: 1,
                    br: ve.qM.readString,
                    bw: ve.gp.writeString,
                  },
                },
              }),
            xe.sm_m
          );
        }
        static MBF() {
          return xe.sm_mbf || (xe.sm_mbf = ve.w0(xe.M())), xe.sm_mbf;
        }
        toObject(e = !1) {
          return xe.toObject(e, this);
        }
        static toObject(e, t) {
          return ve.BT(xe.M(), e, t);
        }
        static fromObject(e) {
          return ve.Uq(xe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Me.BinaryReader(e),
            r = new xe();
          return xe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ve.zj(xe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Me.BinaryWriter();
          return xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ve.i0(xe.M(), e, t);
        }
        serializeBase64String() {
          var e = new Me.BinaryWriter();
          return xe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_SaveNote_Response";
        }
      }
      class Ue extends Ee {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ue.prototype.appid || ve.Sg(Ue.M()),
            Ee.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ue.sm_m ||
              (Ue.sm_m = {
                proto: Ue,
                fields: {
                  appid: { n: 1, br: ve.qM.readUint32, bw: ve.gp.writeUint32 },
                  shortcut_name: {
                    n: 2,
                    br: ve.qM.readString,
                    bw: ve.gp.writeString,
                  },
                  shortcutid: {
                    n: 3,
                    br: ve.qM.readUint32,
                    bw: ve.gp.writeUint32,
                  },
                  note_id: {
                    n: 4,
                    br: ve.qM.readString,
                    bw: ve.gp.writeString,
                  },
                },
              }),
            Ue.sm_m
          );
        }
        static MBF() {
          return Ue.sm_mbf || (Ue.sm_mbf = ve.w0(Ue.M())), Ue.sm_mbf;
        }
        toObject(e = !1) {
          return Ue.toObject(e, this);
        }
        static toObject(e, t) {
          return ve.BT(Ue.M(), e, t);
        }
        static fromObject(e) {
          return ve.Uq(Ue.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Me.BinaryReader(e),
            r = new Ue();
          return Ue.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ve.zj(Ue.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Me.BinaryWriter();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ve.i0(Ue.M(), e, t);
        }
        serializeBase64String() {
          var e = new Me.BinaryWriter();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_DeleteNote_Request";
        }
      }
      class Ge extends Ee {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), Ee.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Ge.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Ge();
        }
        static deserializeBinary(e) {
          let t = new Me.BinaryReader(e),
            r = new Ge();
          return Ge.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new Me.BinaryWriter();
          return Ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new Me.BinaryWriter();
          return Ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_DeleteNote_Response";
        }
      }
      class ke extends Ee {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), Ee.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ke.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new ke();
        }
        static deserializeBinary(e) {
          let t = new Me.BinaryReader(e),
            r = new ke();
          return ke.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new Me.BinaryWriter();
          return ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new Me.BinaryWriter();
          return ke.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_GetGamesWithNotes_Request";
        }
      }
      class We extends Ee {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            We.prototype.games_with_notes || ve.Sg(We.M()),
            Ee.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            We.sm_m ||
              (We.sm_m = {
                proto: We,
                fields: { games_with_notes: { n: 1, c: Oe, r: !0, q: !0 } },
              }),
            We.sm_m
          );
        }
        static MBF() {
          return We.sm_mbf || (We.sm_mbf = ve.w0(We.M())), We.sm_mbf;
        }
        toObject(e = !1) {
          return We.toObject(e, this);
        }
        static toObject(e, t) {
          return ve.BT(We.M(), e, t);
        }
        static fromObject(e) {
          return ve.Uq(We.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Me.BinaryReader(e),
            r = new We();
          return We.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ve.zj(We.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Me.BinaryWriter();
          return We.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ve.i0(We.M(), e, t);
        }
        serializeBase64String() {
          var e = new Me.BinaryWriter();
          return We.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_GetGamesWithNotes_Response";
        }
      }
      class Oe extends Ee {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Oe.prototype.appid || ve.Sg(Oe.M()),
            Ee.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Oe.sm_m ||
              (Oe.sm_m = {
                proto: Oe,
                fields: {
                  appid: { n: 1, br: ve.qM.readUint32, bw: ve.gp.writeUint32 },
                  shortcutid: {
                    n: 2,
                    br: ve.qM.readUint32,
                    bw: ve.gp.writeUint32,
                  },
                  shortcut_name: {
                    n: 3,
                    br: ve.qM.readString,
                    bw: ve.gp.writeString,
                  },
                  last_modified: {
                    n: 4,
                    br: ve.qM.readUint32,
                    bw: ve.gp.writeUint32,
                  },
                  note_count: {
                    n: 5,
                    br: ve.qM.readUint32,
                    bw: ve.gp.writeUint32,
                  },
                },
              }),
            Oe.sm_m
          );
        }
        static MBF() {
          return Oe.sm_mbf || (Oe.sm_mbf = ve.w0(Oe.M())), Oe.sm_mbf;
        }
        toObject(e = !1) {
          return Oe.toObject(e, this);
        }
        static toObject(e, t) {
          return ve.BT(Oe.M(), e, t);
        }
        static fromObject(e) {
          return ve.Uq(Oe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Me.BinaryReader(e),
            r = new Oe();
          return Oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ve.zj(Oe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Me.BinaryWriter();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ve.i0(Oe.M(), e, t);
        }
        serializeBase64String() {
          var e = new Me.BinaryWriter();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_GetGamesWithNotes_Response_GameWithNotes";
        }
      }
      var Ie;
      !(function (e) {
        (e.GetNotesForGame = function (e, t) {
          return e.SendMsg(
            "UserGameNotes.GetNotesForGame#1",
            (0, M.I8)(ze, t),
            Te,
            { ePrivilege: 1 },
          );
        }),
          (e.SaveNote = function (e, t) {
            return e.SendMsg("UserGameNotes.SaveNote#1", (0, M.I8)(Re, t), xe, {
              ePrivilege: 1,
            });
          }),
          (e.DeleteNote = function (e, t) {
            return e.SendMsg(
              "UserGameNotes.DeleteNote#1",
              (0, M.I8)(Ue, t),
              Ge,
              { ePrivilege: 1 },
            );
          }),
          (e.GetGamesWithNotes = function (e, t) {
            return e.SendMsg(
              "UserGameNotes.GetGamesWithNotes#1",
              (0, M.I8)(ke, t),
              We,
              { ePrivilege: 1 },
            );
          });
      })(Ie || (Ie = {}));
      class Fe {
        constructor(e) {
          this.m_SteamInterface = e;
        }
        async GetGamesWithNotes() {
          const e = M.w.Init(ke);
          return (
            await Ie.GetGamesWithNotes(
              this.m_SteamInterface.GetServiceTransport(),
              e,
            )
          )
            .Body()
            .toObject().games_with_notes;
        }
        async GetGameNotesList(e, t) {
          const r = M.w.Init(ze);
          this.SetParentOnRequest(r, e), r.Body().set_include_content(t);
          const n = await Ie.GetNotesForGame(
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
          const i = await Ie.SaveNote(
            this.m_SteamInterface.GetServiceTransport(),
            n,
          );
          if (!i.BSuccess()) throw i.GetErrorMessage();
          return i.Body().note_id();
        }
        async DeleteGameNote(e, t) {
          const r = M.w.Init(Ue);
          this.SetParentOnRequest(r, e), r.Body().set_note_id(t);
          const n = await Ie.DeleteNote(
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
      function Pe(e) {
        const t = (0, E.TR)(),
          [r] = n.useState(() => new Fe(t));
        return n.createElement(
          p,
          { mode: "page", store: r },
          n.createElement(
            i.dO,
            null,
            n.createElement(i.qh, { path: a.List() }, n.createElement(W, null)),
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
              var u, d;
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
                  (null === (d = i()) || void 0 === d ? void 0 : d.node.tag) ==
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
    28106: (e, t, r) => {
      "use strict";
      r.d(t, { W: () => d });
      var n = r(26205),
        i = r(57053),
        a = r(52893),
        s = r(90626),
        o = r(61859),
        c = r(17558),
        l = r(22145),
        u = r(59722);
      const d = s.memo(function (e) {
        const {
            linkMarkType: t,
            onURLPasted: r,
            schema: o,
            onClickURL: u = p,
          } = e,
          d = s.useRef(u);
        d.current = u;
        const [h, f] = s.useState(),
          [g, _] = s.useState(),
          [y, b] = s.useState(),
          [w, B] = (0, c.E)(o),
          S = s.useMemo(
            () =>
              new a.k_({
                props: {
                  handleClickOn(e, r, n, i, a, s) {
                    if (s && (a.ctrlKey || 1 == a.button)) {
                      const e = n
                        .resolve(r - i)
                        .marks()
                        .find((e) => e.type == t);
                      if (e)
                        return (
                          d.current(e.attrs.href, a.view),
                          a.preventDefault(),
                          !0
                        );
                    }
                    return !1;
                  },
                  handleKeyDown: (e, t) =>
                    !(
                      "k" != t.key ||
                      (!t.metaKey && !t.ctrlKey) ||
                      t.shiftKey ||
                      t.altKey
                    ) && (w(e), !0),
                  clipboardTextParser(e, a, s, c) {
                    let l,
                      u = [];
                    for (; (l = e.match(n.O)); ) {
                      l.index > 0 && u.push(o.text(e.substring(0, l.index)));
                      const i = (0, n.S)(l[0]),
                        a = r && r(i);
                      a && "default" !== a
                        ? "remove" !== a && u.push(a)
                        : u.push(o.text(l[0], [t.create({ href: i })])),
                        (e = e.substring(l.index + l[0].length));
                    }
                    return (
                      e.length && u.push(o.text(e)),
                      new i.Ji(i.FK.from(u), a.start(), a.end())
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
                        f(e.left + e.width / 2), _(e.bottom + 2), b(r);
                      } else b(void 0);
                      return !1;
                    },
                    mouseleave: (e, t) => (b(void 0), !1),
                  },
                },
              }),
            [t, w, r, o],
          );
        (0, l.c$)(S);
        let N = null;
        return (
          y &&
            h &&
            g &&
            (N = s.createElement(m, {
              top: g,
              left: h,
              href: y.getAttribute("href"),
            })),
          s.createElement(s.Fragment, null, N, B)
        );
      });
      function m(e) {
        const { top: t, left: r, href: n } = e,
          [i, a] = s.useState(0),
          c = s.useRef(null);
        s.useLayoutEffect(() => {
          a(c.current.getBoundingClientRect().width);
        }, [t, r, n]);
        const l = { top: `${t}px`, left: `${Math.max(r - i / 2, 12)}px` };
        return s.createElement(
          "div",
          { className: u.Hover, style: l, ref: c },
          s.createElement("div", { className: u.Link }, n),
          s.createElement(
            "div",
            { className: u.LinkHelp },
            (0, o.we)("#UserGameNotes_ClickToOpenLink"),
          ),
        );
      }
      function p(e, t) {
        t.open(e);
      }
    },
    26555: (e, t, r) => {
      "use strict";
      r.d(t, { i: () => a });
      var n = r(90626),
        i = r(7071);
      function a(e, t) {
        const { msAutosaveTimeout: r = 1e3 } = t || {},
          [a, s] = n.useState(!1);
        return (
          (0, i.u)(
            e,
            n.useCallback(() => {
              s(!0);
            }, []),
          ),
          n.useEffect(() => {
            if (!a || !e) return;
            const t = () => {
                e.CommitChanges(), s(!1);
              },
              n = window.setTimeout(t, r);
            return () => {
              window.clearTimeout(n), t();
            };
          }, [a, e, r]),
          { bDirty: a }
        );
      }
    },
    61788: (e, t, r) => {
      "use strict";
      r.d(t, { y: () => m });
      var n = r(34629),
        i = r(56545),
        a = r(59134),
        s = r(60778),
        o = r(14771),
        c = r(6419);
      const l = new s.wd("ReactUsageReporting").Debug,
        u = 1e3 * o.Kp.PerMinute;
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
      (0, n.Cg)([c.o], d.prototype, "CheckSend", null);
      const m = new d();
    },
    86807: (e, t, r) => {
      "use strict";
      r.d(t, { R: () => a });
      var n = r(90626),
        i = r(72739);
      function a(e) {
        const {
            visible: t = !0,
            className: r,
            keepMounted: a = !1,
            expandDirection: s = "height",
            msAnimationDuration: o = 250,
            children: c,
          } = e,
          {
            style: l,
            active: u,
            refDiv: d,
          } = (function (e, t = "height", r = 250) {
            const a = n.useRef(),
              s = n.useRef(!0),
              [o, c] = n.useState("idle"),
              [l, u] = n.useState({});
            n.useLayoutEffect(() => {
              s.current ? (s.current = !1) : c("start");
            }, [e]),
              n.useLayoutEffect(() => {
                const r = a.current,
                  n = "height" == t ? "scrollHeight" : "scrollWidth";
                if ("start" == o) {
                  const i = r[n];
                  u((r) => ({
                    [t]: e ? "0px" : `${i}px`,
                    ...r,
                    overflow: "hidden",
                  })),
                    c("active");
                } else if ("active" == o) {
                  r.scrollTop;
                  const a = r[n];
                  u({ overflow: "hidden", [t]: e ? `${a}px` : "0px" });
                  const s = () => {
                    i.unstable_batchedUpdates(() => {
                      u({}), c("idle");
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
            const d = { ...l, transition: `${t} ${r}ms` };
            return { style: d, active: "idle" != o, refDiv: a };
          })(t, s, o);
        return t || u || a
          ? n.createElement("div", { className: r, ref: d, style: l }, c)
          : null;
      }
    },
  },
]);
