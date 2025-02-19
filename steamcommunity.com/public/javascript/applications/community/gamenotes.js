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
    73129: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => Kt });
      var i = r(90626),
        n = r(92757);
      const a = {
        List: () => "/notes/list",
        AppNotes: (e, t) => `/notes/app/${e}/${null != t ? t : ""}`,
        ShortcutNotes: (e, t) => `/notes/shortcut/${e}/${null != t ? t : ""}`,
      };
      var s = r(17083),
        o = r(88942),
        l = r(29385),
        c = r(61739);
      function u(e) {
        return e.trim();
      }
      function d(e) {
        return e.appid ? { appid: e.appid } : { shortcut: e.shortcut_name };
      }
      const m = i.createContext({ mode: "page", store: null });
      function p(e) {
        const {
            mode: t,
            store: r,
            closePopup: n,
            bPinnedView: a,
            onClickURL: s,
            bSpellcheckEnabled: o = !0,
            setSpellcheckEnabled: l,
            children: c,
          } = e,
          u = i.useMemo(
            () => ({
              mode: t,
              store: r,
              closePopup: n,
              bPinnedView: a,
              onClickURL: s,
              bSpellcheckEnabled: o,
              setSpellcheckEnabled: l,
            }),
            [t, r, n, a, s, o, l],
          );
        return i.createElement(m.Provider, { value: u }, c);
      }
      function B() {
        return i.useContext(m).closePopup;
      }
      function g() {
        return i.useContext(m).store;
      }
      var b = r(61859);
      function y(e) {
        return "appid" in e
          ? ["GameNotes", "NotesByAppID", e.appid]
          : ["GameNotes", "NotesForShortcut", u(e.shortcut)];
      }
      function w(e, t) {
        return {
          queryKey: y(t),
          queryFn: async () => (await e.GetGameNotesList(t, !0)) || [],
          enabled: !!t,
        };
      }
      function _(e, t) {
        const r = (0, l.jE)(),
          i = g(),
          n = e.id;
        return (0, c.n)({
          mutationFn: async () =>
            e.not_persisted ? n : await i.DeleteGameNote(d(e), n),
          onSuccess: () => {
            f(r, d(e), (e) => e.filter((e) => e.id != n)), t && t();
          },
        });
      }
      function f(e, t, r) {
        e.setQueryData(y(t), (e) => e && r(e));
      }
      function M(e, t) {
        return i.useMemo(
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
      var h = r(58632),
        z = r.n(h),
        S = r(56545),
        C = r(37403),
        R = r(23809),
        U = r(30470),
        T = r(22837);
      let W;
      const F = 864e5;
      function v(e) {
        return `appinfo_${e}_${U.TS.LANGUAGE}`;
      }
      function q(e) {
        return Boolean(e && Date.now() - e.timeCached < F);
      }
      function j(e) {
        const t = (0, R.KV)(),
          r = (0, R.rX)();
        return (0, o.I)({
          queryKey: ["appinfo", e],
          queryFn: async () =>
            (function (e, t) {
              return (
                W ||
                  (W = new (z())(
                    async (r) => {
                      const i = new Map();
                      (await Promise.all(r.map((e) => t.GetObject(v(e)))))
                        .filter(q)
                        .forEach(({ value: e }) => i.set(e.appid, e));
                      const n = r.slice().filter((e) => !i.has(e));
                      if (n.length) {
                        const r = S.w.Init(C._z);
                        r.Body().set_language((0, T.sf)(U.TS.LANGUAGE)),
                          r.Body().set_appids(n);
                        const a = await C.BE.GetApps(e, r);
                        if (1 != a.GetEResult()) throw a.GetErrorMessage();
                        a.Body()
                          .toObject()
                          .apps.forEach((e) => {
                            t.StoreObject(v(e.appid), {
                              timeCached: Date.now(),
                              value: e,
                            }),
                              i.set(e.appid, e);
                          });
                      }
                      return r.map((e) => i.get(e));
                    },
                    { cache: !1 },
                  )),
                W
              );
            })(t, r).load(e),
          staleTime: F,
          enabled: !!e,
        }).data;
      }
      var O = r(22797);
      function I() {
        const { data: e, isLoading: t } = (function () {
            const e = g();
            return (0, o.I)({
              queryKey: ["GameNotes", "GamesWithNotes"],
              queryFn: () => e.GetGamesWithNotes(),
            });
          })(),
          r = i.useMemo(
            () =>
              null == e
                ? void 0
                : e.slice().sort((e, t) => t.last_modified - e.last_modified),
            [e],
          );
        return t
          ? i.createElement(O.t, { msDelayAppear: 300 })
          : i.createElement(
              "div",
              null,
              i.createElement(
                "h1",
                null,
                (0, b.we)("#UserGameNotes_NotesList"),
              ),
              i.createElement(
                "ul",
                null,
                r.map((e) =>
                  i.createElement(N, {
                    key: e.appid || e.shortcut_name,
                    game: e,
                  }),
                ),
              ),
            );
      }
      function N(e) {
        const { game: t } = e;
        return i.createElement(
          "li",
          null,
          i.createElement(
            s.N_,
            {
              to:
                ((r = t.appid
                  ? { appid: t.appid }
                  : { shortcut: t.shortcut_name }),
                "appid" in r
                  ? a.AppNotes(r.appid, n)
                  : a.ShortcutNotes(r.shortcut, n)),
            },
            t.appid ? i.createElement(x, { appid: t.appid }) : t.shortcut_name,
          ),
        );
        var r, n;
      }
      function x(e) {
        const { appid: t } = e,
          r = j(t);
        return null == r ? void 0 : r.name;
      }
      var E = r(90286),
        A = r(26555),
        k = r(28106),
        P = r(55608),
        G = r(79497);
      const L = { nodes: { ...P.DQ.nodes }, marks: { ...P.DQ.marks } },
        D = new G.W(L);
      var $ = r(61788),
        H = r(33737),
        K = r(4869),
        V = r(9154),
        Q = r(22145),
        X = r(52893),
        Y = r(57053),
        Z = r(67660);
      const J =
        r.p +
        "images/applications/community/image_error.svg?v=valveisgoodatcaching";
      function ee(e) {
        const { uploadImage: t, nodeType: r, nMaxImageSize: n = re } = e;
        return (
          (0, Q.c$)(
            i.useMemo(
              () =>
                new X.k_({
                  key: new X.hs(`PMUploadImage_${r.name}`),
                  props: {
                    transformPasted: (...e) =>
                      (function (e, t, r, i) {
                        let n = !1;
                        if (
                          (r.content.descendants((r, i) => {
                            r.type == e && r.attrs.src.length > t && (n = !0);
                          }),
                          n)
                        ) {
                          let t = [
                            e.create({
                              src: J,
                              title: (0, b.we)("#UserGameNotes_ImageTooLarge"),
                            }),
                          ];
                          return new Y.Ji(Y.FK.from(t), 0, 0);
                        }
                        return r;
                      })(r, n, ...e),
                    handlePaste: (e, i, n) => {
                      const a = [];
                      n.content.descendants((e) => {
                        e.type == r &&
                          e.attrs.src.startsWith("data:image") &&
                          a.push(e.attrs.src);
                      }),
                        a.length > 0 &&
                          setTimeout(() => {
                            !(async function (e, t, r) {
                              for (const i of e) {
                                const e = await fetch(i),
                                  n = await e.blob(),
                                  a = (0, Z.wI)(await n.arrayBuffer());
                                te(
                                  i,
                                  await r(e.headers.get("Content-Type"), a),
                                  t,
                                );
                              }
                            })(a, e, t);
                          }, 100);
                    },
                  },
                }),
              [t, n, r],
            ),
          ),
          null
        );
      }
      function te(e, t, r) {
        r.state.doc.descendants((i, n) => {
          if ("image" === i.type.name && i.attrs.src === e) {
            const e = r.state.tr.setNodeAttribute(n, "src", t);
            r.dispatch(e);
          }
        });
      }
      const re = 1048576;
      var ie = r(1805),
        ne = r(32754),
        ae = r(73745),
        se = r(78327),
        oe = r(86807),
        le = r(73309),
        ce = r(79570),
        ue = r(30175),
        de = r(52038),
        me = r(76011);
      function pe(e) {
        const {
            schema: t,
            view: r,
            refUpdateToolbar: n,
            className: a,
            bSpellcheckEnabled: s,
            setSpellcheckEnabled: o,
          } = e,
          [l, c] = (0, me.SP)("FormattingToolbar_Expanded", !1);
        return i.createElement(
          ue.bI,
          { refUpdateToolbar: n, view: r },
          i.createElement(
            "div",
            { className: (0, de.A)(le.Toolbar, a) },
            i.createElement(
              ue.Ez,
              null,
              i.createElement(ce.MV, null),
              i.createElement(ue.XQ, null),
              i.createElement(ce.Km, { schema: t }),
              i.createElement(ue.hK, null),
              i.createElement(
                ue.ff,
                {
                  onClick: () => c(!l),
                  tooltip: "#FormattingToolbar_ExpandOptions",
                },
                i.createElement(K.cLJ, { direction: l ? "up" : "down" }),
              ),
            ),
            i.createElement(
              oe.R,
              { visible: l },
              i.createElement(
                ue.Ez,
                null,
                i.createElement(ce.Hz, { schema: t }),
                i.createElement(ce.WJ, { schema: t, levels: 5 }),
                i.createElement(
                  ue.u3,
                  {
                    nodeType: t.nodes.code_block,
                    tooltip: (0, b.we)("#FormattingToolbar_CodeBlock"),
                  },
                  i.createElement(K.kNE, null),
                ),
                i.createElement(ue.XQ, null),
                i.createElement(ce.C$, { schema: t }),
                i.createElement(ue.XQ, null),
                i.createElement(ce.z9, { schema: t }),
                i.createElement(ue.hK, null),
                o &&
                  i.createElement(ce.Nt, {
                    bSpellcheckEnabled: s,
                    setSpellcheckEnabled: o,
                  }),
              ),
            ),
          ),
        );
      }
      var Be = r(27491);
      const ge = 15;
      function be(e) {
        const { note: t, hidden: r = !1 } = e,
          [n, a] = i.useState(),
          [s, o] = i.useState(void 0),
          u = i.useRef(),
          p = i.useRef(!1),
          y = i.useContext(m).onClickURL,
          w =
            null === (M = i.useContext(m).bSpellcheckEnabled) ||
            void 0 === M ||
            M;
        var M;
        const h = i.useContext(m).setSpellcheckEnabled,
          z = (function (e) {
            const t = g();
            return i.useCallback(
              async (r, i) => {
                const n = new Uint8Array(i),
                  a = await t.UploadImage(`notes_${e}_images/`, r, n);
                return Promise.resolve("/gamenotes/" + a);
              },
              [t, e],
            );
          })(t.appid),
          S = (0, se.Qn)(),
          { mutate: C } = (function (e, t) {
            const r = (0, l.jE)(),
              i = g(),
              n = d(e);
            return (0, c.n)({
              scope: {
                id: `${"appid" in e ? e.appid : e.shortcut_name}_${e.id}`,
              },
              mutationFn: (t) => i.SaveGameNote(e, t.title, t.bbcode),
              onMutate(t) {
                const i = { ...e, title: t.title, content: t.bbcode };
                return f(r, n, (e) => e.map((e) => (e.id == i.id ? i : e))), i;
              },
              onSuccess(e, t, i) {
                f(r, n, (t) =>
                  t.map((t) =>
                    t.id === i.id ? { ...t, id: e, not_persisted: !1 } : t,
                  ),
                );
              },
              onError(e) {
                t(e.message || e.name);
              },
            });
          })(t, o),
          [R, U] = i.useState();
        i.useEffect(() => {
          p.current ||
            U(new E.n(D, t.content, (e, t) => C({ title: Me(t), bbcode: e })));
        }, [C, t.content]);
        const { bDirty: T } = (0, A.i)(R, { msAutosaveTimeout: 1e3 * ge });
        i.useEffect(() => {
          T &&
            !p.current &&
            ((p.current = !0),
            $.y.ReportTrackedAction("/GameNotes/NoteModified"));
        }, [T]),
          i.useEffect(() => {
            n && !r && n.focus();
          }, [n, r]),
          i.useEffect(() => {
            r && R && R.CommitChanges();
          }, [r, R]);
        const W = B(),
          F = _(t, W),
          v = {
            onSecondaryButton: () => F.mutate(),
            onSecondaryActionDescription: (0, b.we)(
              "#UserGameNotes_DeleteNote",
            ),
          };
        return i.createElement(
          "div",
          { className: Be.NoteEditorArea },
          i.createElement(ye, { error: s, dismissError: () => o(void 0) }),
          !S &&
            i.createElement(pe, {
              schema: D.pm_schema,
              view: n,
              refUpdateToolbar: u,
              className: Be.Toolbar,
              bSpellcheckEnabled: w,
              setSpellcheckEnabled: h,
            }),
          i.createElement(
            ie.l,
            {
              pmState: R,
              className: Be.EditorInput,
              refOnUpdate: u,
              refView: a,
              bSpellcheckEnabled: w,
              panelProps: v,
            },
            i.createElement(ee, {
              uploadImage: z,
              nodeType: D.pm_schema.nodes.image,
            }),
            i.createElement(k.W, {
              linkMarkType: D.pm_schema.marks.link,
              schema: D.pm_schema,
              onClickURL: y,
            }),
          ),
          !S && i.createElement(we, { note: t, bDirty: T }),
        );
      }
      function ye(e) {
        const { error: t, dismissError: r } = e;
        return t
          ? i.createElement(
              V.EN,
              { active: !0 },
              i.createElement(V.o0, {
                bAlertDialog: !0,
                strTitle: (0, b.we)("#Error_Generic"),
                strDescription: (0, b.we)("#UserGameNotes_ErrorSavingNotes", t),
                closeModal: r,
              }),
            )
          : null;
      }
      function we(e) {
        const { note: t, bDirty: r } = e,
          [n, a, s] = (0, ae.uD)(!1),
          o = "single" == i.useContext(m).mode,
          l = B(),
          { mutate: c, isPending: u } = _(t, l),
          d = i.useCallback(() => {
            !r && t.not_persisted ? c() : a();
          }, [r, t, c, a]);
        return i.createElement(
          "div",
          { className: Be.NoteActions },
          n &&
            i.createElement(fe, {
              note: t,
              closeModal: s,
              deleteNote: c,
              deletePending: u,
            }),
          i.createElement(
            ne.he,
            { toolTipContent: "#UserGameNotes_DeleteNote", direction: "top" },
            i.createElement(H.$n, { onClick: d }, i.createElement(K.lMJ, null)),
          ),
          o && i.createElement(_e, { bDirty: r }),
        );
      }
      function _e(e) {
        const { bDirty: t } = e,
          r = B();
        return t
          ? i.createElement(
              H.jn,
              { onClick: () => r(), className: Be.CloseWindowButton },
              (0, b.we)("#Button_SaveAndClose"),
            )
          : i.createElement(
              H.$n,
              { onClick: () => r(), className: Be.CloseWindowButton },
              (0, b.we)("#Button_Close"),
            );
      }
      function fe(e) {
        const { note: t, closeModal: r, deleteNote: n, deletePending: a } = e;
        return i.createElement(
          V.EN,
          { active: !0 },
          i.createElement(V.o0, {
            strTitle: (0, b.we)("#UserGameNotes_DeleteNote"),
            strDescription: (0, b.we)("#UserGameNotes_PromptDelete"),
            onOK: () => n(),
            bOKDisabled: a,
            strOKButtonText: (0, b.we)("#Button_Delete"),
            closeModal: r,
          }),
        );
      }
      function Me(e) {
        let t = "";
        for (let r = 0; r < e.content.childCount; r++) {
          const i = e.content.child(r);
          if (i.isText) t += i.text;
          else {
            if (((t = t.trim()), t.length > 4)) return t;
            if (((t = Me(i)), t.length > 4)) return t;
          }
        }
        return t.trim();
      }
      function he(e) {
        const { bStandalonePage: t } = e,
          r = (0, n.W5)(),
          a = M(
            "appid" in r.params && Number(r.params.appid),
            "shortcut_name" in r.params && r.params.shortcut_name,
          );
        let s = r.params.noteid;
        const c = (0, n.W6)(),
          u = (function (e) {
            const t = (0, l.jE)(),
              r = g();
            return i.useCallback(() => {
              const i = (0, b.we)("#UserGameNotes_UntitledNote_Title"),
                n = r.NewNote(e, i);
              return f(t, e, (e) => [...e, n]), n.id;
            }, [t, r, e]);
          })(a),
          { data: d, isLoading: m } = (function (e) {
            const t = g();
            return (0, o.I)(w(t, e));
          })(a);
        let p;
        d && s && (p = d.find((e) => e.id === s)),
          i.useEffect(() => {
            !d ||
              (s && d.find((e) => e.id === s)) ||
              (d.length > 0 && d[0].id ? Ce(c, a, d[0].id) : Ce(c, a, u()));
          }, [c, a, s, d, u]);
        const B = i.createElement(
          ne.he,
          { toolTipContent: "#UserGameNotes_NewNote", direction: "top" },
          i.createElement(
            H.$n,
            {
              className: Be.NewNoteButton,
              onClick: () => {
                const e = u();
                Ce(c, a, e);
              },
            },
            i.createElement(K.qY3, null),
          ),
        );
        return d
          ? i.createElement(ze, {
              noteParent: a,
              notes: d,
              activeNoteID: null == p ? void 0 : p.id,
              actions: B,
              bStandalonePage: t,
            })
          : null;
      }
      function ze(e) {
        const {
            noteParent: t,
            notes: r,
            activeNoteID: a,
            actions: s,
            bStandalonePage: o,
          } = e,
          [l, c] = (0, me.SP)("NotesListCollapsed", !1),
          u = i.useContext(m).bPinnedView,
          d = (0, se.Qn)(),
          p = r.map((e) => {
            var t;
            return {
              title:
                (null === (t = e.title) || void 0 === t ? void 0 : t.length) > 0
                  ? e.title
                  : (0, b.we)("#UserGameNotes_Untitled"),
              identifier: e.id,
              content: i.createElement(Se, { note: e }),
              pageClassName: Be.NotePage,
              hideTitle: !0,
            };
          }),
          B = (0, n.W6)(),
          g = i.useCallback((e) => Ce(B, t, e), [B, t]);
        return d && o
          ? i.createElement(H.Bv, {
              title: (0, b.we)("#UserGameNotes_NotesList"),
              pages: p,
              className: (0, de.A)(Be.NotesPagedSettings, u && Be.PinnedView),
              page: a,
              onPageRequested: g,
              bottomControls: s,
              hideList: l,
              toggleHideList: u || d ? void 0 : () => c(!l),
            })
          : i.createElement(H.O7, {
              title: (0, b.we)("#UserGameNotes_NotesList"),
              pages: p,
              className: (0, de.A)(Be.NotesPagedSettings, u && Be.PinnedView),
              page: a,
              onPageRequested: g,
              bottomControls: s,
              hideList: l,
              toggleHideList: u || d ? void 0 : () => c(!l),
            });
      }
      function Se(e) {
        const { note: t } = e,
          r = H.v$();
        return i.createElement(be, { note: t, hidden: !r });
      }
      function Ce(e, t, r) {
        let i;
        (i =
          "appid" in t
            ? a.AppNotes(t.appid, r)
            : a.ShortcutNotes(t.shortcut, r)),
          e.replace(i, e.location.state);
      }
      var Re = r(80613),
        Ue = r(89068);
      const Te = Re.Message;
      class We extends Te {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            We.prototype.operation || Ue.Sg(We.M()),
            Te.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            We.sm_m ||
              (We.sm_m = {
                proto: We,
                fields: {
                  operation: { n: 1, br: Ue.qM.readEnum, bw: Ue.gp.writeEnum },
                  machine_name: {
                    n: 2,
                    br: Ue.qM.readString,
                    bw: Ue.gp.writeString,
                  },
                  client_id: {
                    n: 3,
                    br: Ue.qM.readUint64String,
                    bw: Ue.gp.writeUint64String,
                  },
                  time_last_updated: {
                    n: 4,
                    br: Ue.qM.readUint32,
                    bw: Ue.gp.writeUint32,
                  },
                  os_type: { n: 5, br: Ue.qM.readInt32, bw: Ue.gp.writeInt32 },
                  device_type: {
                    n: 6,
                    br: Ue.qM.readInt32,
                    bw: Ue.gp.writeInt32,
                  },
                },
              }),
            We.sm_m
          );
        }
        static MBF() {
          return We.sm_mbf || (We.sm_mbf = Ue.w0(We.M())), We.sm_mbf;
        }
        toObject(e = !1) {
          return We.toObject(e, this);
        }
        static toObject(e, t) {
          return Ue.BT(We.M(), e, t);
        }
        static fromObject(e) {
          return Ue.Uq(We.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Re.BinaryReader(e),
            r = new We();
          return We.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ue.zj(We.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Re.BinaryWriter();
          return We.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ue.i0(We.M(), e, t);
        }
        serializeBase64String() {
          var e = new Re.BinaryWriter();
          return We.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_PendingRemoteOperation";
        }
      }
      const Fe = Re.Message;
      class ve extends Fe {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ve.prototype.appid || Ue.Sg(ve.M()),
            Fe.initialize(this, e, 0, -1, [9], null);
        }
        static M() {
          return (
            ve.sm_m ||
              (ve.sm_m = {
                proto: ve,
                fields: {
                  appid: { n: 1, br: Ue.qM.readUint32, bw: Ue.gp.writeUint32 },
                  ugcid: {
                    n: 2,
                    br: Ue.qM.readUint64String,
                    bw: Ue.gp.writeUint64String,
                  },
                  filename: {
                    n: 3,
                    br: Ue.qM.readString,
                    bw: Ue.gp.writeString,
                  },
                  timestamp: {
                    n: 4,
                    br: Ue.qM.readUint64String,
                    bw: Ue.gp.writeUint64String,
                  },
                  file_size: {
                    n: 5,
                    br: Ue.qM.readUint32,
                    bw: Ue.gp.writeUint32,
                  },
                  url: { n: 6, br: Ue.qM.readString, bw: Ue.gp.writeString },
                  steamid_creator: {
                    n: 7,
                    br: Ue.qM.readFixed64String,
                    bw: Ue.gp.writeFixed64String,
                  },
                  flags: { n: 8, br: Ue.qM.readUint32, bw: Ue.gp.writeUint32 },
                  platforms_to_sync: {
                    n: 9,
                    r: !0,
                    q: !0,
                    br: Ue.qM.readString,
                    bw: Ue.gp.writeRepeatedString,
                  },
                  file_sha: {
                    n: 10,
                    br: Ue.qM.readString,
                    bw: Ue.gp.writeString,
                  },
                },
              }),
            ve.sm_m
          );
        }
        static MBF() {
          return ve.sm_mbf || (ve.sm_mbf = Ue.w0(ve.M())), ve.sm_mbf;
        }
        toObject(e = !1) {
          return ve.toObject(e, this);
        }
        static toObject(e, t) {
          return Ue.BT(ve.M(), e, t);
        }
        static fromObject(e) {
          return Ue.Uq(ve.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Re.BinaryReader(e),
            r = new ve();
          return ve.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ue.zj(ve.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Re.BinaryWriter();
          return ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ue.i0(ve.M(), e, t);
        }
        serializeBase64String() {
          var e = new Re.BinaryWriter();
          return ve.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_UserFile";
        }
      }
      class qe extends Fe {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            qe.prototype.appid || Ue.Sg(qe.M()),
            Fe.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            qe.sm_m ||
              (qe.sm_m = {
                proto: qe,
                fields: {
                  appid: { n: 1, br: Ue.qM.readUint32, bw: Ue.gp.writeUint32 },
                },
              }),
            qe.sm_m
          );
        }
        static MBF() {
          return qe.sm_mbf || (qe.sm_mbf = Ue.w0(qe.M())), qe.sm_mbf;
        }
        toObject(e = !1) {
          return qe.toObject(e, this);
        }
        static toObject(e, t) {
          return Ue.BT(qe.M(), e, t);
        }
        static fromObject(e) {
          return Ue.Uq(qe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Re.BinaryReader(e),
            r = new qe();
          return qe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ue.zj(qe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Re.BinaryWriter();
          return qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ue.i0(qe.M(), e, t);
        }
        serializeBase64String() {
          var e = new Re.BinaryWriter();
          return qe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_GetUploadServerInfo_Request";
        }
      }
      class je extends Fe {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            je.prototype.server_url || Ue.Sg(je.M()),
            Fe.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            je.sm_m ||
              (je.sm_m = {
                proto: je,
                fields: {
                  server_url: {
                    n: 1,
                    br: Ue.qM.readString,
                    bw: Ue.gp.writeString,
                  },
                },
              }),
            je.sm_m
          );
        }
        static MBF() {
          return je.sm_mbf || (je.sm_mbf = Ue.w0(je.M())), je.sm_mbf;
        }
        toObject(e = !1) {
          return je.toObject(e, this);
        }
        static toObject(e, t) {
          return Ue.BT(je.M(), e, t);
        }
        static fromObject(e) {
          return Ue.Uq(je.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Re.BinaryReader(e),
            r = new je();
          return je.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ue.zj(je.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Re.BinaryWriter();
          return je.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ue.i0(je.M(), e, t);
        }
        serializeBase64String() {
          var e = new Re.BinaryWriter();
          return je.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_GetUploadServerInfo_Response";
        }
      }
      class Oe extends Fe {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Oe.prototype.appid || Ue.Sg(Oe.M()),
            Fe.initialize(this, e, 0, -1, [6, 7, 8], null);
        }
        static M() {
          return (
            Oe.sm_m ||
              (Oe.sm_m = {
                proto: Oe,
                fields: {
                  appid: { n: 1, br: Ue.qM.readUint32, bw: Ue.gp.writeUint32 },
                  file_size: {
                    n: 2,
                    br: Ue.qM.readUint32,
                    bw: Ue.gp.writeUint32,
                  },
                  filename: {
                    n: 3,
                    br: Ue.qM.readString,
                    bw: Ue.gp.writeString,
                  },
                  file_sha: {
                    n: 4,
                    br: Ue.qM.readString,
                    bw: Ue.gp.writeString,
                  },
                  is_public: { n: 5, br: Ue.qM.readBool, bw: Ue.gp.writeBool },
                  platforms_to_sync: {
                    n: 6,
                    r: !0,
                    q: !0,
                    br: Ue.qM.readString,
                    bw: Ue.gp.writeRepeatedString,
                  },
                  request_headers_names: {
                    n: 7,
                    r: !0,
                    q: !0,
                    br: Ue.qM.readString,
                    bw: Ue.gp.writeRepeatedString,
                  },
                  request_headers_values: {
                    n: 8,
                    r: !0,
                    q: !0,
                    br: Ue.qM.readString,
                    bw: Ue.gp.writeRepeatedString,
                  },
                  upload_batch_id: {
                    n: 9,
                    br: Ue.qM.readUint64String,
                    bw: Ue.gp.writeUint64String,
                  },
                },
              }),
            Oe.sm_m
          );
        }
        static MBF() {
          return Oe.sm_mbf || (Oe.sm_mbf = Ue.w0(Oe.M())), Oe.sm_mbf;
        }
        toObject(e = !1) {
          return Oe.toObject(e, this);
        }
        static toObject(e, t) {
          return Ue.BT(Oe.M(), e, t);
        }
        static fromObject(e) {
          return Ue.Uq(Oe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Re.BinaryReader(e),
            r = new Oe();
          return Oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ue.zj(Oe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Re.BinaryWriter();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ue.i0(Oe.M(), e, t);
        }
        serializeBase64String() {
          var e = new Re.BinaryWriter();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_BeginHTTPUpload_Request";
        }
      }
      class Ie extends Fe {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ie.prototype.ugcid || Ue.Sg(Ie.M()),
            Fe.initialize(this, e, 0, -1, [6], null);
        }
        static M() {
          return (
            Ie.sm_m ||
              (Ie.sm_m = {
                proto: Ie,
                fields: {
                  ugcid: {
                    n: 1,
                    br: Ue.qM.readFixed64String,
                    bw: Ue.gp.writeFixed64String,
                  },
                  timestamp: {
                    n: 2,
                    br: Ue.qM.readFixed32,
                    bw: Ue.gp.writeFixed32,
                  },
                  url_host: {
                    n: 3,
                    br: Ue.qM.readString,
                    bw: Ue.gp.writeString,
                  },
                  url_path: {
                    n: 4,
                    br: Ue.qM.readString,
                    bw: Ue.gp.writeString,
                  },
                  use_https: { n: 5, br: Ue.qM.readBool, bw: Ue.gp.writeBool },
                  request_headers: { n: 6, c: Ne, r: !0, q: !0 },
                },
              }),
            Ie.sm_m
          );
        }
        static MBF() {
          return Ie.sm_mbf || (Ie.sm_mbf = Ue.w0(Ie.M())), Ie.sm_mbf;
        }
        toObject(e = !1) {
          return Ie.toObject(e, this);
        }
        static toObject(e, t) {
          return Ue.BT(Ie.M(), e, t);
        }
        static fromObject(e) {
          return Ue.Uq(Ie.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Re.BinaryReader(e),
            r = new Ie();
          return Ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ue.zj(Ie.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Re.BinaryWriter();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ue.i0(Ie.M(), e, t);
        }
        serializeBase64String() {
          var e = new Re.BinaryWriter();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_BeginHTTPUpload_Response";
        }
      }
      class Ne extends Fe {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ne.prototype.name || Ue.Sg(Ne.M()),
            Fe.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ne.sm_m ||
              (Ne.sm_m = {
                proto: Ne,
                fields: {
                  name: { n: 1, br: Ue.qM.readString, bw: Ue.gp.writeString },
                  value: { n: 2, br: Ue.qM.readString, bw: Ue.gp.writeString },
                },
              }),
            Ne.sm_m
          );
        }
        static MBF() {
          return Ne.sm_mbf || (Ne.sm_mbf = Ue.w0(Ne.M())), Ne.sm_mbf;
        }
        toObject(e = !1) {
          return Ne.toObject(e, this);
        }
        static toObject(e, t) {
          return Ue.BT(Ne.M(), e, t);
        }
        static fromObject(e) {
          return Ue.Uq(Ne.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Re.BinaryReader(e),
            r = new Ne();
          return Ne.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ue.zj(Ne.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Re.BinaryWriter();
          return Ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ue.i0(Ne.M(), e, t);
        }
        serializeBase64String() {
          var e = new Re.BinaryWriter();
          return Ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_BeginHTTPUpload_Response_HTTPHeaders";
        }
      }
      class xe extends Fe {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            xe.prototype.transfer_succeeded || Ue.Sg(xe.M()),
            Fe.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            xe.sm_m ||
              (xe.sm_m = {
                proto: xe,
                fields: {
                  transfer_succeeded: {
                    n: 1,
                    br: Ue.qM.readBool,
                    bw: Ue.gp.writeBool,
                  },
                  appid: { n: 2, br: Ue.qM.readUint32, bw: Ue.gp.writeUint32 },
                  file_sha: {
                    n: 3,
                    br: Ue.qM.readString,
                    bw: Ue.gp.writeString,
                  },
                  filename: {
                    n: 4,
                    br: Ue.qM.readString,
                    bw: Ue.gp.writeString,
                  },
                },
              }),
            xe.sm_m
          );
        }
        static MBF() {
          return xe.sm_mbf || (xe.sm_mbf = Ue.w0(xe.M())), xe.sm_mbf;
        }
        toObject(e = !1) {
          return xe.toObject(e, this);
        }
        static toObject(e, t) {
          return Ue.BT(xe.M(), e, t);
        }
        static fromObject(e) {
          return Ue.Uq(xe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Re.BinaryReader(e),
            r = new xe();
          return xe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ue.zj(xe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Re.BinaryWriter();
          return xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ue.i0(xe.M(), e, t);
        }
        serializeBase64String() {
          var e = new Re.BinaryWriter();
          return xe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_CommitHTTPUpload_Request";
        }
      }
      class Ee extends Fe {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ee.prototype.file_committed || Ue.Sg(Ee.M()),
            Fe.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ee.sm_m ||
              (Ee.sm_m = {
                proto: Ee,
                fields: {
                  file_committed: {
                    n: 1,
                    br: Ue.qM.readBool,
                    bw: Ue.gp.writeBool,
                  },
                },
              }),
            Ee.sm_m
          );
        }
        static MBF() {
          return Ee.sm_mbf || (Ee.sm_mbf = Ue.w0(Ee.M())), Ee.sm_mbf;
        }
        toObject(e = !1) {
          return Ee.toObject(e, this);
        }
        static toObject(e, t) {
          return Ue.BT(Ee.M(), e, t);
        }
        static fromObject(e) {
          return Ue.Uq(Ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Re.BinaryReader(e),
            r = new Ee();
          return Ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ue.zj(Ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Re.BinaryWriter();
          return Ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ue.i0(Ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new Re.BinaryWriter();
          return Ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_CommitHTTPUpload_Response";
        }
      }
      class Ae extends Fe {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ae.prototype.appid || Ue.Sg(Ae.M()),
            Fe.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ae.sm_m ||
              (Ae.sm_m = {
                proto: Ae,
                fields: {
                  appid: { n: 1, br: Ue.qM.readUint32, bw: Ue.gp.writeUint32 },
                  file_size: {
                    n: 2,
                    br: Ue.qM.readUint32,
                    bw: Ue.gp.writeUint32,
                  },
                  filename: {
                    n: 3,
                    br: Ue.qM.readString,
                    bw: Ue.gp.writeString,
                  },
                  file_sha: {
                    n: 4,
                    br: Ue.qM.readString,
                    bw: Ue.gp.writeString,
                  },
                  content_type: {
                    n: 5,
                    br: Ue.qM.readString,
                    bw: Ue.gp.writeString,
                  },
                },
              }),
            Ae.sm_m
          );
        }
        static MBF() {
          return Ae.sm_mbf || (Ae.sm_mbf = Ue.w0(Ae.M())), Ae.sm_mbf;
        }
        toObject(e = !1) {
          return Ae.toObject(e, this);
        }
        static toObject(e, t) {
          return Ue.BT(Ae.M(), e, t);
        }
        static fromObject(e) {
          return Ue.Uq(Ae.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Re.BinaryReader(e),
            r = new Ae();
          return Ae.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ue.zj(Ae.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Re.BinaryWriter();
          return Ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ue.i0(Ae.M(), e, t);
        }
        serializeBase64String() {
          var e = new Re.BinaryWriter();
          return Ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_BeginUGCUpload_Request";
        }
      }
      class ke extends Fe {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ke.prototype.storage_system || Ue.Sg(ke.M()),
            Fe.initialize(this, e, 0, -1, [7], null);
        }
        static M() {
          return (
            ke.sm_m ||
              (ke.sm_m = {
                proto: ke,
                fields: {
                  storage_system: {
                    n: 1,
                    br: Ue.qM.readEnum,
                    bw: Ue.gp.writeEnum,
                  },
                  ugcid: {
                    n: 2,
                    br: Ue.qM.readFixed64String,
                    bw: Ue.gp.writeFixed64String,
                  },
                  timestamp: {
                    n: 3,
                    br: Ue.qM.readFixed32,
                    bw: Ue.gp.writeFixed32,
                  },
                  url_host: {
                    n: 4,
                    br: Ue.qM.readString,
                    bw: Ue.gp.writeString,
                  },
                  url_path: {
                    n: 5,
                    br: Ue.qM.readString,
                    bw: Ue.gp.writeString,
                  },
                  use_https: { n: 6, br: Ue.qM.readBool, bw: Ue.gp.writeBool },
                  request_headers: { n: 7, c: Pe, r: !0, q: !0 },
                },
              }),
            ke.sm_m
          );
        }
        static MBF() {
          return ke.sm_mbf || (ke.sm_mbf = Ue.w0(ke.M())), ke.sm_mbf;
        }
        toObject(e = !1) {
          return ke.toObject(e, this);
        }
        static toObject(e, t) {
          return Ue.BT(ke.M(), e, t);
        }
        static fromObject(e) {
          return Ue.Uq(ke.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Re.BinaryReader(e),
            r = new ke();
          return ke.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ue.zj(ke.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Re.BinaryWriter();
          return ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ue.i0(ke.M(), e, t);
        }
        serializeBase64String() {
          var e = new Re.BinaryWriter();
          return ke.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_BeginUGCUpload_Response";
        }
      }
      class Pe extends Fe {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Pe.prototype.name || Ue.Sg(Pe.M()),
            Fe.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Pe.sm_m ||
              (Pe.sm_m = {
                proto: Pe,
                fields: {
                  name: { n: 1, br: Ue.qM.readString, bw: Ue.gp.writeString },
                  value: { n: 2, br: Ue.qM.readString, bw: Ue.gp.writeString },
                },
              }),
            Pe.sm_m
          );
        }
        static MBF() {
          return Pe.sm_mbf || (Pe.sm_mbf = Ue.w0(Pe.M())), Pe.sm_mbf;
        }
        toObject(e = !1) {
          return Pe.toObject(e, this);
        }
        static toObject(e, t) {
          return Ue.BT(Pe.M(), e, t);
        }
        static fromObject(e) {
          return Ue.Uq(Pe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Re.BinaryReader(e),
            r = new Pe();
          return Pe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ue.zj(Pe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Re.BinaryWriter();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ue.i0(Pe.M(), e, t);
        }
        serializeBase64String() {
          var e = new Re.BinaryWriter();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_BeginUGCUpload_Response_HTTPHeaders";
        }
      }
      class Ge extends Fe {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ge.prototype.transfer_succeeded || Ue.Sg(Ge.M()),
            Fe.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ge.sm_m ||
              (Ge.sm_m = {
                proto: Ge,
                fields: {
                  transfer_succeeded: {
                    n: 1,
                    br: Ue.qM.readBool,
                    bw: Ue.gp.writeBool,
                  },
                  appid: { n: 2, br: Ue.qM.readUint32, bw: Ue.gp.writeUint32 },
                  ugcid: {
                    n: 3,
                    br: Ue.qM.readFixed64String,
                    bw: Ue.gp.writeFixed64String,
                  },
                },
              }),
            Ge.sm_m
          );
        }
        static MBF() {
          return Ge.sm_mbf || (Ge.sm_mbf = Ue.w0(Ge.M())), Ge.sm_mbf;
        }
        toObject(e = !1) {
          return Ge.toObject(e, this);
        }
        static toObject(e, t) {
          return Ue.BT(Ge.M(), e, t);
        }
        static fromObject(e) {
          return Ue.Uq(Ge.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Re.BinaryReader(e),
            r = new Ge();
          return Ge.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ue.zj(Ge.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Re.BinaryWriter();
          return Ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ue.i0(Ge.M(), e, t);
        }
        serializeBase64String() {
          var e = new Re.BinaryWriter();
          return Ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_CommitUGCUpload_Request";
        }
      }
      class Le extends Fe {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Le.prototype.file_committed || Ue.Sg(Le.M()),
            Fe.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Le.sm_m ||
              (Le.sm_m = {
                proto: Le,
                fields: {
                  file_committed: {
                    n: 1,
                    br: Ue.qM.readBool,
                    bw: Ue.gp.writeBool,
                  },
                },
              }),
            Le.sm_m
          );
        }
        static MBF() {
          return Le.sm_mbf || (Le.sm_mbf = Ue.w0(Le.M())), Le.sm_mbf;
        }
        toObject(e = !1) {
          return Le.toObject(e, this);
        }
        static toObject(e, t) {
          return Ue.BT(Le.M(), e, t);
        }
        static fromObject(e) {
          return Ue.Uq(Le.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Re.BinaryReader(e),
            r = new Le();
          return Le.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ue.zj(Le.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Re.BinaryWriter();
          return Le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ue.i0(Le.M(), e, t);
        }
        serializeBase64String() {
          var e = new Re.BinaryWriter();
          return Le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_CommitUGCUpload_Response";
        }
      }
      class De extends Fe {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            De.prototype.ugcid || Ue.Sg(De.M()),
            Fe.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            De.sm_m ||
              (De.sm_m = {
                proto: De,
                fields: {
                  ugcid: {
                    n: 1,
                    br: Ue.qM.readUint64String,
                    bw: Ue.gp.writeUint64String,
                  },
                  appid: { n: 2, br: Ue.qM.readUint32, bw: Ue.gp.writeUint32 },
                },
              }),
            De.sm_m
          );
        }
        static MBF() {
          return De.sm_mbf || (De.sm_mbf = Ue.w0(De.M())), De.sm_mbf;
        }
        toObject(e = !1) {
          return De.toObject(e, this);
        }
        static toObject(e, t) {
          return Ue.BT(De.M(), e, t);
        }
        static fromObject(e) {
          return Ue.Uq(De.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Re.BinaryReader(e),
            r = new De();
          return De.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ue.zj(De.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Re.BinaryWriter();
          return De.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ue.i0(De.M(), e, t);
        }
        serializeBase64String() {
          var e = new Re.BinaryWriter();
          return De.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_GetFileDetails_Request";
        }
      }
      class $e extends Fe {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $e.prototype.details || Ue.Sg($e.M()),
            Fe.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            $e.sm_m ||
              ($e.sm_m = { proto: $e, fields: { details: { n: 1, c: ve } } }),
            $e.sm_m
          );
        }
        static MBF() {
          return $e.sm_mbf || ($e.sm_mbf = Ue.w0($e.M())), $e.sm_mbf;
        }
        toObject(e = !1) {
          return $e.toObject(e, this);
        }
        static toObject(e, t) {
          return Ue.BT($e.M(), e, t);
        }
        static fromObject(e) {
          return Ue.Uq($e.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Re.BinaryReader(e),
            r = new $e();
          return $e.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ue.zj($e.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Re.BinaryWriter();
          return $e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ue.i0($e.M(), e, t);
        }
        serializeBase64String() {
          var e = new Re.BinaryWriter();
          return $e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_GetFileDetails_Response";
        }
      }
      class He extends Fe {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            He.prototype.appid || Ue.Sg(He.M()),
            Fe.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            He.sm_m ||
              (He.sm_m = {
                proto: He,
                fields: {
                  appid: { n: 1, br: Ue.qM.readUint32, bw: Ue.gp.writeUint32 },
                  extended_details: {
                    n: 2,
                    br: Ue.qM.readBool,
                    bw: Ue.gp.writeBool,
                  },
                  count: { n: 3, br: Ue.qM.readUint32, bw: Ue.gp.writeUint32 },
                  start_index: {
                    n: 4,
                    br: Ue.qM.readUint32,
                    bw: Ue.gp.writeUint32,
                  },
                },
              }),
            He.sm_m
          );
        }
        static MBF() {
          return He.sm_mbf || (He.sm_mbf = Ue.w0(He.M())), He.sm_mbf;
        }
        toObject(e = !1) {
          return He.toObject(e, this);
        }
        static toObject(e, t) {
          return Ue.BT(He.M(), e, t);
        }
        static fromObject(e) {
          return Ue.Uq(He.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Re.BinaryReader(e),
            r = new He();
          return He.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ue.zj(He.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Re.BinaryWriter();
          return He.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ue.i0(He.M(), e, t);
        }
        serializeBase64String() {
          var e = new Re.BinaryWriter();
          return He.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_EnumerateUserFiles_Request";
        }
      }
      class Ke extends Fe {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ke.prototype.files || Ue.Sg(Ke.M()),
            Fe.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Ke.sm_m ||
              (Ke.sm_m = {
                proto: Ke,
                fields: {
                  files: { n: 1, c: ve, r: !0, q: !0 },
                  total_files: {
                    n: 2,
                    br: Ue.qM.readUint32,
                    bw: Ue.gp.writeUint32,
                  },
                },
              }),
            Ke.sm_m
          );
        }
        static MBF() {
          return Ke.sm_mbf || (Ke.sm_mbf = Ue.w0(Ke.M())), Ke.sm_mbf;
        }
        toObject(e = !1) {
          return Ke.toObject(e, this);
        }
        static toObject(e, t) {
          return Ue.BT(Ke.M(), e, t);
        }
        static fromObject(e) {
          return Ue.Uq(Ke.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Re.BinaryReader(e),
            r = new Ke();
          return Ke.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ue.zj(Ke.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Re.BinaryWriter();
          return Ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ue.i0(Ke.M(), e, t);
        }
        serializeBase64String() {
          var e = new Re.BinaryWriter();
          return Ke.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_EnumerateUserFiles_Response";
        }
      }
      class Ve extends Fe {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ve.prototype.filename || Ue.Sg(Ve.M()),
            Fe.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ve.sm_m ||
              (Ve.sm_m = {
                proto: Ve,
                fields: {
                  filename: {
                    n: 1,
                    br: Ue.qM.readString,
                    bw: Ue.gp.writeString,
                  },
                  appid: { n: 2, br: Ue.qM.readUint32, bw: Ue.gp.writeUint32 },
                  upload_batch_id: {
                    n: 3,
                    br: Ue.qM.readUint64String,
                    bw: Ue.gp.writeUint64String,
                  },
                },
              }),
            Ve.sm_m
          );
        }
        static MBF() {
          return Ve.sm_mbf || (Ve.sm_mbf = Ue.w0(Ve.M())), Ve.sm_mbf;
        }
        toObject(e = !1) {
          return Ve.toObject(e, this);
        }
        static toObject(e, t) {
          return Ue.BT(Ve.M(), e, t);
        }
        static fromObject(e) {
          return Ue.Uq(Ve.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Re.BinaryReader(e),
            r = new Ve();
          return Ve.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ue.zj(Ve.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Re.BinaryWriter();
          return Ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ue.i0(Ve.M(), e, t);
        }
        serializeBase64String() {
          var e = new Re.BinaryWriter();
          return Ve.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_Delete_Request";
        }
      }
      class Qe extends Fe {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), Fe.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Qe.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Qe();
        }
        static deserializeBinary(e) {
          let t = new Re.BinaryReader(e),
            r = new Qe();
          return Qe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new Re.BinaryWriter();
          return Qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new Re.BinaryWriter();
          return Qe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_Delete_Response";
        }
      }
      class Xe extends Fe {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), Fe.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Xe.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Xe();
        }
        static deserializeBinary(e) {
          let t = new Re.BinaryReader(e),
            r = new Xe();
          return Xe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new Re.BinaryWriter();
          return Xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new Re.BinaryWriter();
          return Xe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_GetClientEncryptionKey_Request";
        }
      }
      class Ye extends Fe {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ye.prototype.key || Ue.Sg(Ye.M()),
            Fe.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ye.sm_m ||
              (Ye.sm_m = {
                proto: Ye,
                fields: {
                  key: { n: 1, br: Ue.qM.readBytes, bw: Ue.gp.writeBytes },
                  crc: { n: 2, br: Ue.qM.readInt32, bw: Ue.gp.writeInt32 },
                },
              }),
            Ye.sm_m
          );
        }
        static MBF() {
          return Ye.sm_mbf || (Ye.sm_mbf = Ue.w0(Ye.M())), Ye.sm_mbf;
        }
        toObject(e = !1) {
          return Ye.toObject(e, this);
        }
        static toObject(e, t) {
          return Ue.BT(Ye.M(), e, t);
        }
        static fromObject(e) {
          return Ue.Uq(Ye.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Re.BinaryReader(e),
            r = new Ye();
          return Ye.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ue.zj(Ye.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Re.BinaryWriter();
          return Ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ue.i0(Ye.M(), e, t);
        }
        serializeBase64String() {
          var e = new Re.BinaryWriter();
          return Ye.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_GetClientEncryptionKey_Response";
        }
      }
      class Ze extends Fe {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ze.prototype.steamid || Ue.Sg(Ze.M()),
            Fe.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ze.sm_m ||
              (Ze.sm_m = {
                proto: Ze,
                fields: {
                  steamid: {
                    n: 1,
                    br: Ue.qM.readFixed64String,
                    bw: Ue.gp.writeFixed64String,
                  },
                  url: { n: 2, br: Ue.qM.readString, bw: Ue.gp.writeString },
                  success: { n: 3, br: Ue.qM.readBool, bw: Ue.gp.writeBool },
                  http_status_code: {
                    n: 4,
                    br: Ue.qM.readUint32,
                    bw: Ue.gp.writeUint32,
                  },
                  expected_bytes: {
                    n: 5,
                    br: Ue.qM.readUint64String,
                    bw: Ue.gp.writeUint64String,
                  },
                  received_bytes: {
                    n: 6,
                    br: Ue.qM.readUint64String,
                    bw: Ue.gp.writeUint64String,
                  },
                  duration: {
                    n: 7,
                    br: Ue.qM.readUint32,
                    bw: Ue.gp.writeUint32,
                  },
                },
              }),
            Ze.sm_m
          );
        }
        static MBF() {
          return Ze.sm_mbf || (Ze.sm_mbf = Ue.w0(Ze.M())), Ze.sm_mbf;
        }
        toObject(e = !1) {
          return Ze.toObject(e, this);
        }
        static toObject(e, t) {
          return Ue.BT(Ze.M(), e, t);
        }
        static fromObject(e) {
          return Ue.Uq(Ze.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Re.BinaryReader(e),
            r = new Ze();
          return Ze.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ue.zj(Ze.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Re.BinaryWriter();
          return Ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ue.i0(Ze.M(), e, t);
        }
        serializeBase64String() {
          var e = new Re.BinaryWriter();
          return Ze.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_CDNReport_Notification";
        }
      }
      class Je extends Fe {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Je.prototype.host || Ue.Sg(Je.M()),
            Fe.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Je.sm_m ||
              (Je.sm_m = {
                proto: Je,
                fields: {
                  host: { n: 1, br: Ue.qM.readString, bw: Ue.gp.writeString },
                  path: { n: 2, br: Ue.qM.readString, bw: Ue.gp.writeString },
                  is_upload: { n: 3, br: Ue.qM.readBool, bw: Ue.gp.writeBool },
                  success: { n: 4, br: Ue.qM.readBool, bw: Ue.gp.writeBool },
                  http_status_code: {
                    n: 5,
                    br: Ue.qM.readUint32,
                    bw: Ue.gp.writeUint32,
                  },
                  bytes_expected: {
                    n: 6,
                    br: Ue.qM.readUint64String,
                    bw: Ue.gp.writeUint64String,
                  },
                  bytes_actual: {
                    n: 7,
                    br: Ue.qM.readUint64String,
                    bw: Ue.gp.writeUint64String,
                  },
                  duration_ms: {
                    n: 8,
                    br: Ue.qM.readUint32,
                    bw: Ue.gp.writeUint32,
                  },
                  cellid: { n: 9, br: Ue.qM.readUint32, bw: Ue.gp.writeUint32 },
                  proxied: { n: 10, br: Ue.qM.readBool, bw: Ue.gp.writeBool },
                  ipv6_local: {
                    n: 11,
                    br: Ue.qM.readBool,
                    bw: Ue.gp.writeBool,
                  },
                  ipv6_remote: {
                    n: 12,
                    br: Ue.qM.readBool,
                    bw: Ue.gp.writeBool,
                  },
                  time_to_connect_ms: {
                    n: 13,
                    br: Ue.qM.readUint32,
                    bw: Ue.gp.writeUint32,
                  },
                  time_to_send_req_ms: {
                    n: 14,
                    br: Ue.qM.readUint32,
                    bw: Ue.gp.writeUint32,
                  },
                  time_to_first_byte_ms: {
                    n: 15,
                    br: Ue.qM.readUint32,
                    bw: Ue.gp.writeUint32,
                  },
                  time_to_last_byte_ms: {
                    n: 16,
                    br: Ue.qM.readUint32,
                    bw: Ue.gp.writeUint32,
                  },
                },
              }),
            Je.sm_m
          );
        }
        static MBF() {
          return Je.sm_mbf || (Je.sm_mbf = Ue.w0(Je.M())), Je.sm_mbf;
        }
        toObject(e = !1) {
          return Je.toObject(e, this);
        }
        static toObject(e, t) {
          return Ue.BT(Je.M(), e, t);
        }
        static fromObject(e) {
          return Ue.Uq(Je.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Re.BinaryReader(e),
            r = new Je();
          return Je.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ue.zj(Je.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Re.BinaryWriter();
          return Je.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ue.i0(Je.M(), e, t);
        }
        serializeBase64String() {
          var e = new Re.BinaryWriter();
          return Je.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ExternalStorageTransferReport_Notification";
        }
      }
      class et extends Fe {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            et.prototype.appid || Ue.Sg(et.M()),
            Fe.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            et.sm_m ||
              (et.sm_m = {
                proto: et,
                fields: {
                  appid: { n: 1, br: Ue.qM.readUint32, bw: Ue.gp.writeUint32 },
                  client_id: {
                    n: 2,
                    br: Ue.qM.readUint64String,
                    bw: Ue.gp.writeUint64String,
                  },
                  machine_name: {
                    n: 3,
                    br: Ue.qM.readString,
                    bw: Ue.gp.writeString,
                  },
                  ignore_pending_operations: {
                    n: 4,
                    br: Ue.qM.readBool,
                    bw: Ue.gp.writeBool,
                  },
                  os_type: { n: 5, br: Ue.qM.readInt32, bw: Ue.gp.writeInt32 },
                  device_type: {
                    n: 6,
                    br: Ue.qM.readInt32,
                    bw: Ue.gp.writeInt32,
                  },
                },
              }),
            et.sm_m
          );
        }
        static MBF() {
          return et.sm_mbf || (et.sm_mbf = Ue.w0(et.M())), et.sm_mbf;
        }
        toObject(e = !1) {
          return et.toObject(e, this);
        }
        static toObject(e, t) {
          return Ue.BT(et.M(), e, t);
        }
        static fromObject(e) {
          return Ue.Uq(et.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Re.BinaryReader(e),
            r = new et();
          return et.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ue.zj(et.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Re.BinaryWriter();
          return et.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ue.i0(et.M(), e, t);
        }
        serializeBase64String() {
          var e = new Re.BinaryWriter();
          return et.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_AppLaunchIntent_Request";
        }
      }
      class tt extends Fe {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            tt.prototype.pending_remote_operations || Ue.Sg(tt.M()),
            Fe.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            tt.sm_m ||
              (tt.sm_m = {
                proto: tt,
                fields: {
                  pending_remote_operations: { n: 1, c: We, r: !0, q: !0 },
                },
              }),
            tt.sm_m
          );
        }
        static MBF() {
          return tt.sm_mbf || (tt.sm_mbf = Ue.w0(tt.M())), tt.sm_mbf;
        }
        toObject(e = !1) {
          return tt.toObject(e, this);
        }
        static toObject(e, t) {
          return Ue.BT(tt.M(), e, t);
        }
        static fromObject(e) {
          return Ue.Uq(tt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Re.BinaryReader(e),
            r = new tt();
          return tt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ue.zj(tt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Re.BinaryWriter();
          return tt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ue.i0(tt.M(), e, t);
        }
        serializeBase64String() {
          var e = new Re.BinaryWriter();
          return tt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_AppLaunchIntent_Response";
        }
      }
      class rt extends Fe {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            rt.prototype.appid || Ue.Sg(rt.M()),
            Fe.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            rt.sm_m ||
              (rt.sm_m = {
                proto: rt,
                fields: {
                  appid: { n: 1, br: Ue.qM.readUint32, bw: Ue.gp.writeUint32 },
                  client_id: {
                    n: 2,
                    br: Ue.qM.readUint64String,
                    bw: Ue.gp.writeUint64String,
                  },
                  uploads_completed: {
                    n: 3,
                    br: Ue.qM.readBool,
                    bw: Ue.gp.writeBool,
                  },
                  uploads_required: {
                    n: 4,
                    br: Ue.qM.readBool,
                    bw: Ue.gp.writeBool,
                  },
                },
              }),
            rt.sm_m
          );
        }
        static MBF() {
          return rt.sm_mbf || (rt.sm_mbf = Ue.w0(rt.M())), rt.sm_mbf;
        }
        toObject(e = !1) {
          return rt.toObject(e, this);
        }
        static toObject(e, t) {
          return Ue.BT(rt.M(), e, t);
        }
        static fromObject(e) {
          return Ue.Uq(rt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Re.BinaryReader(e),
            r = new rt();
          return rt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ue.zj(rt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Re.BinaryWriter();
          return rt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ue.i0(rt.M(), e, t);
        }
        serializeBase64String() {
          var e = new Re.BinaryWriter();
          return rt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_AppExitSyncDone_Notification";
        }
      }
      class it extends Fe {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            it.prototype.appid || Ue.Sg(it.M()),
            Fe.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            it.sm_m ||
              (it.sm_m = {
                proto: it,
                fields: {
                  appid: { n: 1, br: Ue.qM.readUint32, bw: Ue.gp.writeUint32 },
                },
              }),
            it.sm_m
          );
        }
        static MBF() {
          return it.sm_mbf || (it.sm_mbf = Ue.w0(it.M())), it.sm_mbf;
        }
        toObject(e = !1) {
          return it.toObject(e, this);
        }
        static toObject(e, t) {
          return Ue.BT(it.M(), e, t);
        }
        static fromObject(e) {
          return Ue.Uq(it.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Re.BinaryReader(e),
            r = new it();
          return it.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ue.zj(it.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Re.BinaryWriter();
          return it.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ue.i0(it.M(), e, t);
        }
        serializeBase64String() {
          var e = new Re.BinaryWriter();
          return it.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientGetAppQuotaUsage_Request";
        }
      }
      class nt extends Fe {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            nt.prototype.existing_files || Ue.Sg(nt.M()),
            Fe.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            nt.sm_m ||
              (nt.sm_m = {
                proto: nt,
                fields: {
                  existing_files: {
                    n: 1,
                    br: Ue.qM.readUint32,
                    bw: Ue.gp.writeUint32,
                  },
                  existing_bytes: {
                    n: 2,
                    br: Ue.qM.readUint64String,
                    bw: Ue.gp.writeUint64String,
                  },
                  max_num_files: {
                    n: 3,
                    br: Ue.qM.readUint32,
                    bw: Ue.gp.writeUint32,
                  },
                  max_num_bytes: {
                    n: 4,
                    br: Ue.qM.readUint64String,
                    bw: Ue.gp.writeUint64String,
                  },
                },
              }),
            nt.sm_m
          );
        }
        static MBF() {
          return nt.sm_mbf || (nt.sm_mbf = Ue.w0(nt.M())), nt.sm_mbf;
        }
        toObject(e = !1) {
          return nt.toObject(e, this);
        }
        static toObject(e, t) {
          return Ue.BT(nt.M(), e, t);
        }
        static fromObject(e) {
          return Ue.Uq(nt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Re.BinaryReader(e),
            r = new nt();
          return nt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ue.zj(nt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Re.BinaryWriter();
          return nt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ue.i0(nt.M(), e, t);
        }
        serializeBase64String() {
          var e = new Re.BinaryWriter();
          return nt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientGetAppQuotaUsage_Response";
        }
      }
      class at extends Fe {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            at.prototype.file_name || Ue.Sg(at.M()),
            Fe.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            at.sm_m ||
              (at.sm_m = {
                proto: at,
                fields: {
                  file_name: {
                    n: 1,
                    br: Ue.qM.readString,
                    bw: Ue.gp.writeString,
                  },
                  sha_file: { n: 2, br: Ue.qM.readBytes, bw: Ue.gp.writeBytes },
                  time_stamp: {
                    n: 3,
                    br: Ue.qM.readUint64String,
                    bw: Ue.gp.writeUint64String,
                  },
                  raw_file_size: {
                    n: 4,
                    br: Ue.qM.readUint32,
                    bw: Ue.gp.writeUint32,
                  },
                  persist_state: {
                    n: 5,
                    br: Ue.qM.readEnum,
                    bw: Ue.gp.writeEnum,
                  },
                  platforms_to_sync: {
                    n: 6,
                    br: Ue.qM.readUint32,
                    bw: Ue.gp.writeUint32,
                  },
                  path_prefix_index: {
                    n: 7,
                    br: Ue.qM.readUint32,
                    bw: Ue.gp.writeUint32,
                  },
                  machine_name_index: {
                    n: 8,
                    br: Ue.qM.readUint32,
                    bw: Ue.gp.writeUint32,
                  },
                },
              }),
            at.sm_m
          );
        }
        static MBF() {
          return at.sm_mbf || (at.sm_mbf = Ue.w0(at.M())), at.sm_mbf;
        }
        toObject(e = !1) {
          return at.toObject(e, this);
        }
        static toObject(e, t) {
          return Ue.BT(at.M(), e, t);
        }
        static fromObject(e) {
          return Ue.Uq(at.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Re.BinaryReader(e),
            r = new at();
          return at.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ue.zj(at.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Re.BinaryWriter();
          return at.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ue.i0(at.M(), e, t);
        }
        serializeBase64String() {
          var e = new Re.BinaryWriter();
          return at.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_AppFileInfo";
        }
      }
      class st extends Fe {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            st.prototype.appid || Ue.Sg(st.M()),
            Fe.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            st.sm_m ||
              (st.sm_m = {
                proto: st,
                fields: {
                  appid: { n: 1, br: Ue.qM.readUint32, bw: Ue.gp.writeUint32 },
                  synced_change_number: {
                    n: 2,
                    br: Ue.qM.readUint64String,
                    bw: Ue.gp.writeUint64String,
                  },
                },
              }),
            st.sm_m
          );
        }
        static MBF() {
          return st.sm_mbf || (st.sm_mbf = Ue.w0(st.M())), st.sm_mbf;
        }
        toObject(e = !1) {
          return st.toObject(e, this);
        }
        static toObject(e, t) {
          return Ue.BT(st.M(), e, t);
        }
        static fromObject(e) {
          return Ue.Uq(st.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Re.BinaryReader(e),
            r = new st();
          return st.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ue.zj(st.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Re.BinaryWriter();
          return st.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ue.i0(st.M(), e, t);
        }
        serializeBase64String() {
          var e = new Re.BinaryWriter();
          return st.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_GetAppFileChangelist_Request";
        }
      }
      class ot extends Fe {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ot.prototype.current_change_number || Ue.Sg(ot.M()),
            Fe.initialize(this, e, 0, -1, [2, 4, 5], null);
        }
        static M() {
          return (
            ot.sm_m ||
              (ot.sm_m = {
                proto: ot,
                fields: {
                  current_change_number: {
                    n: 1,
                    br: Ue.qM.readUint64String,
                    bw: Ue.gp.writeUint64String,
                  },
                  files: { n: 2, c: at, r: !0, q: !0 },
                  is_only_delta: {
                    n: 3,
                    br: Ue.qM.readBool,
                    bw: Ue.gp.writeBool,
                  },
                  path_prefixes: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: Ue.qM.readString,
                    bw: Ue.gp.writeRepeatedString,
                  },
                  machine_names: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: Ue.qM.readString,
                    bw: Ue.gp.writeRepeatedString,
                  },
                  app_buildid_hwm: {
                    n: 6,
                    br: Ue.qM.readUint64String,
                    bw: Ue.gp.writeUint64String,
                  },
                },
              }),
            ot.sm_m
          );
        }
        static MBF() {
          return ot.sm_mbf || (ot.sm_mbf = Ue.w0(ot.M())), ot.sm_mbf;
        }
        toObject(e = !1) {
          return ot.toObject(e, this);
        }
        static toObject(e, t) {
          return Ue.BT(ot.M(), e, t);
        }
        static fromObject(e) {
          return Ue.Uq(ot.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Re.BinaryReader(e),
            r = new ot();
          return ot.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ue.zj(ot.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Re.BinaryWriter();
          return ot.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ue.i0(ot.M(), e, t);
        }
        serializeBase64String() {
          var e = new Re.BinaryWriter();
          return ot.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_GetAppFileChangelist_Response";
        }
      }
      class lt extends Fe {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            lt.prototype.url_host || Ue.Sg(lt.M()),
            Fe.initialize(this, e, 0, -1, [5], null);
        }
        static M() {
          return (
            lt.sm_m ||
              (lt.sm_m = {
                proto: lt,
                fields: {
                  url_host: {
                    n: 1,
                    br: Ue.qM.readString,
                    bw: Ue.gp.writeString,
                  },
                  url_path: {
                    n: 2,
                    br: Ue.qM.readString,
                    bw: Ue.gp.writeString,
                  },
                  use_https: { n: 3, br: Ue.qM.readBool, bw: Ue.gp.writeBool },
                  http_method: {
                    n: 4,
                    br: Ue.qM.readInt32,
                    bw: Ue.gp.writeInt32,
                  },
                  request_headers: { n: 5, c: ct, r: !0, q: !0 },
                  block_offset: {
                    n: 6,
                    br: Ue.qM.readUint64String,
                    bw: Ue.gp.writeUint64String,
                  },
                  block_length: {
                    n: 7,
                    br: Ue.qM.readUint32,
                    bw: Ue.gp.writeUint32,
                  },
                  explicit_body_data: {
                    n: 8,
                    br: Ue.qM.readBytes,
                    bw: Ue.gp.writeBytes,
                  },
                  may_parallelize: {
                    n: 9,
                    br: Ue.qM.readBool,
                    bw: Ue.gp.writeBool,
                  },
                },
              }),
            lt.sm_m
          );
        }
        static MBF() {
          return lt.sm_mbf || (lt.sm_mbf = Ue.w0(lt.M())), lt.sm_mbf;
        }
        toObject(e = !1) {
          return lt.toObject(e, this);
        }
        static toObject(e, t) {
          return Ue.BT(lt.M(), e, t);
        }
        static fromObject(e) {
          return Ue.Uq(lt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Re.BinaryReader(e),
            r = new lt();
          return lt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ue.zj(lt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Re.BinaryWriter();
          return lt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ue.i0(lt.M(), e, t);
        }
        serializeBase64String() {
          var e = new Re.BinaryWriter();
          return lt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ClientCloudFileUploadBlockDetails";
        }
      }
      class ct extends Fe {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ct.prototype.name || Ue.Sg(ct.M()),
            Fe.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ct.sm_m ||
              (ct.sm_m = {
                proto: ct,
                fields: {
                  name: { n: 1, br: Ue.qM.readString, bw: Ue.gp.writeString },
                  value: { n: 2, br: Ue.qM.readString, bw: Ue.gp.writeString },
                },
              }),
            ct.sm_m
          );
        }
        static MBF() {
          return ct.sm_mbf || (ct.sm_mbf = Ue.w0(ct.M())), ct.sm_mbf;
        }
        toObject(e = !1) {
          return ct.toObject(e, this);
        }
        static toObject(e, t) {
          return Ue.BT(ct.M(), e, t);
        }
        static fromObject(e) {
          return Ue.Uq(ct.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Re.BinaryReader(e),
            r = new ct();
          return ct.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ue.zj(ct.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Re.BinaryWriter();
          return ct.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ue.i0(ct.M(), e, t);
        }
        serializeBase64String() {
          var e = new Re.BinaryWriter();
          return ct.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ClientCloudFileUploadBlockDetails_HTTPHeaders";
        }
      }
      class ut extends Fe {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ut.prototype.appid || Ue.Sg(ut.M()),
            Fe.initialize(this, e, 0, -1, [3, 4], null);
        }
        static M() {
          return (
            ut.sm_m ||
              (ut.sm_m = {
                proto: ut,
                fields: {
                  appid: { n: 1, br: Ue.qM.readUint32, bw: Ue.gp.writeUint32 },
                  machine_name: {
                    n: 2,
                    br: Ue.qM.readString,
                    bw: Ue.gp.writeString,
                  },
                  files_to_upload: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: Ue.qM.readString,
                    bw: Ue.gp.writeRepeatedString,
                  },
                  files_to_delete: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: Ue.qM.readString,
                    bw: Ue.gp.writeRepeatedString,
                  },
                  client_id: {
                    n: 5,
                    br: Ue.qM.readUint64String,
                    bw: Ue.gp.writeUint64String,
                  },
                  app_build_id: {
                    n: 6,
                    br: Ue.qM.readUint64String,
                    bw: Ue.gp.writeUint64String,
                  },
                },
              }),
            ut.sm_m
          );
        }
        static MBF() {
          return ut.sm_mbf || (ut.sm_mbf = Ue.w0(ut.M())), ut.sm_mbf;
        }
        toObject(e = !1) {
          return ut.toObject(e, this);
        }
        static toObject(e, t) {
          return Ue.BT(ut.M(), e, t);
        }
        static fromObject(e) {
          return Ue.Uq(ut.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Re.BinaryReader(e),
            r = new ut();
          return ut.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ue.zj(ut.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Re.BinaryWriter();
          return ut.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ue.i0(ut.M(), e, t);
        }
        serializeBase64String() {
          var e = new Re.BinaryWriter();
          return ut.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_BeginAppUploadBatch_Request";
        }
      }
      class dt extends Fe {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            dt.prototype.batch_id || Ue.Sg(dt.M()),
            Fe.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            dt.sm_m ||
              (dt.sm_m = {
                proto: dt,
                fields: {
                  batch_id: {
                    n: 1,
                    br: Ue.qM.readUint64String,
                    bw: Ue.gp.writeUint64String,
                  },
                  app_change_number: {
                    n: 4,
                    br: Ue.qM.readUint64String,
                    bw: Ue.gp.writeUint64String,
                  },
                },
              }),
            dt.sm_m
          );
        }
        static MBF() {
          return dt.sm_mbf || (dt.sm_mbf = Ue.w0(dt.M())), dt.sm_mbf;
        }
        toObject(e = !1) {
          return dt.toObject(e, this);
        }
        static toObject(e, t) {
          return Ue.BT(dt.M(), e, t);
        }
        static fromObject(e) {
          return Ue.Uq(dt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Re.BinaryReader(e),
            r = new dt();
          return dt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ue.zj(dt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Re.BinaryWriter();
          return dt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ue.i0(dt.M(), e, t);
        }
        serializeBase64String() {
          var e = new Re.BinaryWriter();
          return dt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_BeginAppUploadBatch_Response";
        }
      }
      class mt extends Fe {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            mt.prototype.appid || Ue.Sg(mt.M()),
            Fe.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            mt.sm_m ||
              (mt.sm_m = {
                proto: mt,
                fields: {
                  appid: { n: 1, br: Ue.qM.readUint32, bw: Ue.gp.writeUint32 },
                  batch_id: {
                    n: 2,
                    br: Ue.qM.readUint64String,
                    bw: Ue.gp.writeUint64String,
                  },
                  batch_eresult: {
                    n: 3,
                    br: Ue.qM.readUint32,
                    bw: Ue.gp.writeUint32,
                  },
                },
              }),
            mt.sm_m
          );
        }
        static MBF() {
          return mt.sm_mbf || (mt.sm_mbf = Ue.w0(mt.M())), mt.sm_mbf;
        }
        toObject(e = !1) {
          return mt.toObject(e, this);
        }
        static toObject(e, t) {
          return Ue.BT(mt.M(), e, t);
        }
        static fromObject(e) {
          return Ue.Uq(mt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Re.BinaryReader(e),
            r = new mt();
          return mt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ue.zj(mt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Re.BinaryWriter();
          return mt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ue.i0(mt.M(), e, t);
        }
        serializeBase64String() {
          var e = new Re.BinaryWriter();
          return mt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_CompleteAppUploadBatch_Notification";
        }
      }
      class pt extends Fe {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            pt.prototype.appid || Ue.Sg(pt.M()),
            Fe.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            pt.sm_m ||
              (pt.sm_m = {
                proto: pt,
                fields: {
                  appid: { n: 1, br: Ue.qM.readUint32, bw: Ue.gp.writeUint32 },
                  batch_id: {
                    n: 2,
                    br: Ue.qM.readUint64String,
                    bw: Ue.gp.writeUint64String,
                  },
                  batch_eresult: {
                    n: 3,
                    br: Ue.qM.readUint32,
                    bw: Ue.gp.writeUint32,
                  },
                },
              }),
            pt.sm_m
          );
        }
        static MBF() {
          return pt.sm_mbf || (pt.sm_mbf = Ue.w0(pt.M())), pt.sm_mbf;
        }
        toObject(e = !1) {
          return pt.toObject(e, this);
        }
        static toObject(e, t) {
          return Ue.BT(pt.M(), e, t);
        }
        static fromObject(e) {
          return Ue.Uq(pt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Re.BinaryReader(e),
            r = new pt();
          return pt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ue.zj(pt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Re.BinaryWriter();
          return pt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ue.i0(pt.M(), e, t);
        }
        serializeBase64String() {
          var e = new Re.BinaryWriter();
          return pt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_CompleteAppUploadBatch_Request";
        }
      }
      class Bt extends Fe {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), Fe.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Bt.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Bt();
        }
        static deserializeBinary(e) {
          let t = new Re.BinaryReader(e),
            r = new Bt();
          return Bt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new Re.BinaryWriter();
          return Bt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new Re.BinaryWriter();
          return Bt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_CompleteAppUploadBatch_Response";
        }
      }
      class gt extends Fe {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            gt.prototype.appid || Ue.Sg(gt.M()),
            Fe.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            gt.sm_m ||
              (gt.sm_m = {
                proto: gt,
                fields: {
                  appid: { n: 1, br: Ue.qM.readUint32, bw: Ue.gp.writeUint32 },
                  app_change_number: {
                    n: 2,
                    br: Ue.qM.readUint64String,
                    bw: Ue.gp.writeUint64String,
                  },
                },
              }),
            gt.sm_m
          );
        }
        static MBF() {
          return gt.sm_mbf || (gt.sm_mbf = Ue.w0(gt.M())), gt.sm_mbf;
        }
        toObject(e = !1) {
          return gt.toObject(e, this);
        }
        static toObject(e, t) {
          return Ue.BT(gt.M(), e, t);
        }
        static fromObject(e) {
          return Ue.Uq(gt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Re.BinaryReader(e),
            r = new gt();
          return gt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ue.zj(gt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Re.BinaryWriter();
          return gt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ue.i0(gt.M(), e, t);
        }
        serializeBase64String() {
          var e = new Re.BinaryWriter();
          return gt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_AppCloudStateChange_Notification";
        }
      }
      class bt extends Fe {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            bt.prototype.appid || Ue.Sg(bt.M()),
            Fe.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            bt.sm_m ||
              (bt.sm_m = {
                proto: bt,
                fields: {
                  appid: { n: 1, br: Ue.qM.readUint32, bw: Ue.gp.writeUint32 },
                  file_size: {
                    n: 2,
                    br: Ue.qM.readUint32,
                    bw: Ue.gp.writeUint32,
                  },
                  raw_file_size: {
                    n: 3,
                    br: Ue.qM.readUint32,
                    bw: Ue.gp.writeUint32,
                  },
                  file_sha: { n: 4, br: Ue.qM.readBytes, bw: Ue.gp.writeBytes },
                  time_stamp: {
                    n: 5,
                    br: Ue.qM.readUint64String,
                    bw: Ue.gp.writeUint64String,
                  },
                  filename: {
                    n: 6,
                    br: Ue.qM.readString,
                    bw: Ue.gp.writeString,
                  },
                  platforms_to_sync: {
                    n: 7,
                    d: 4294967295,
                    br: Ue.qM.readUint32,
                    bw: Ue.gp.writeUint32,
                  },
                  cell_id: {
                    n: 9,
                    br: Ue.qM.readUint32,
                    bw: Ue.gp.writeUint32,
                  },
                  can_encrypt: {
                    n: 10,
                    br: Ue.qM.readBool,
                    bw: Ue.gp.writeBool,
                  },
                  is_shared_file: {
                    n: 11,
                    br: Ue.qM.readBool,
                    bw: Ue.gp.writeBool,
                  },
                  deprecated_realm: {
                    n: 12,
                    br: Ue.qM.readUint32,
                    bw: Ue.gp.writeUint32,
                  },
                  upload_batch_id: {
                    n: 13,
                    br: Ue.qM.readUint64String,
                    bw: Ue.gp.writeUint64String,
                  },
                },
              }),
            bt.sm_m
          );
        }
        static MBF() {
          return bt.sm_mbf || (bt.sm_mbf = Ue.w0(bt.M())), bt.sm_mbf;
        }
        toObject(e = !1) {
          return bt.toObject(e, this);
        }
        static toObject(e, t) {
          return Ue.BT(bt.M(), e, t);
        }
        static fromObject(e) {
          return Ue.Uq(bt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Re.BinaryReader(e),
            r = new bt();
          return bt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ue.zj(bt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Re.BinaryWriter();
          return bt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ue.i0(bt.M(), e, t);
        }
        serializeBase64String() {
          var e = new Re.BinaryWriter();
          return bt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientBeginFileUpload_Request";
        }
      }
      class yt extends Fe {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            yt.prototype.encrypt_file || Ue.Sg(yt.M()),
            Fe.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            yt.sm_m ||
              (yt.sm_m = {
                proto: yt,
                fields: {
                  encrypt_file: {
                    n: 1,
                    br: Ue.qM.readBool,
                    bw: Ue.gp.writeBool,
                  },
                  block_requests: { n: 2, c: lt, r: !0, q: !0 },
                },
              }),
            yt.sm_m
          );
        }
        static MBF() {
          return yt.sm_mbf || (yt.sm_mbf = Ue.w0(yt.M())), yt.sm_mbf;
        }
        toObject(e = !1) {
          return yt.toObject(e, this);
        }
        static toObject(e, t) {
          return Ue.BT(yt.M(), e, t);
        }
        static fromObject(e) {
          return Ue.Uq(yt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Re.BinaryReader(e),
            r = new yt();
          return yt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ue.zj(yt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Re.BinaryWriter();
          return yt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ue.i0(yt.M(), e, t);
        }
        serializeBase64String() {
          var e = new Re.BinaryWriter();
          return yt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientBeginFileUpload_Response";
        }
      }
      class wt extends Fe {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            wt.prototype.transfer_succeeded || Ue.Sg(wt.M()),
            Fe.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            wt.sm_m ||
              (wt.sm_m = {
                proto: wt,
                fields: {
                  transfer_succeeded: {
                    n: 1,
                    br: Ue.qM.readBool,
                    bw: Ue.gp.writeBool,
                  },
                  appid: { n: 2, br: Ue.qM.readUint32, bw: Ue.gp.writeUint32 },
                  file_sha: { n: 3, br: Ue.qM.readBytes, bw: Ue.gp.writeBytes },
                  filename: {
                    n: 4,
                    br: Ue.qM.readString,
                    bw: Ue.gp.writeString,
                  },
                },
              }),
            wt.sm_m
          );
        }
        static MBF() {
          return wt.sm_mbf || (wt.sm_mbf = Ue.w0(wt.M())), wt.sm_mbf;
        }
        toObject(e = !1) {
          return wt.toObject(e, this);
        }
        static toObject(e, t) {
          return Ue.BT(wt.M(), e, t);
        }
        static fromObject(e) {
          return Ue.Uq(wt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Re.BinaryReader(e),
            r = new wt();
          return wt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ue.zj(wt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Re.BinaryWriter();
          return wt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ue.i0(wt.M(), e, t);
        }
        serializeBase64String() {
          var e = new Re.BinaryWriter();
          return wt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientCommitFileUpload_Request";
        }
      }
      class _t extends Fe {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _t.prototype.file_committed || Ue.Sg(_t.M()),
            Fe.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _t.sm_m ||
              (_t.sm_m = {
                proto: _t,
                fields: {
                  file_committed: {
                    n: 1,
                    br: Ue.qM.readBool,
                    bw: Ue.gp.writeBool,
                  },
                },
              }),
            _t.sm_m
          );
        }
        static MBF() {
          return _t.sm_mbf || (_t.sm_mbf = Ue.w0(_t.M())), _t.sm_mbf;
        }
        toObject(e = !1) {
          return _t.toObject(e, this);
        }
        static toObject(e, t) {
          return Ue.BT(_t.M(), e, t);
        }
        static fromObject(e) {
          return Ue.Uq(_t.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Re.BinaryReader(e),
            r = new _t();
          return _t.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ue.zj(_t.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Re.BinaryWriter();
          return _t.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ue.i0(_t.M(), e, t);
        }
        serializeBase64String() {
          var e = new Re.BinaryWriter();
          return _t.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientCommitFileUpload_Response";
        }
      }
      class ft extends Fe {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ft.prototype.appid || Ue.Sg(ft.M()),
            Fe.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ft.sm_m ||
              (ft.sm_m = {
                proto: ft,
                fields: {
                  appid: { n: 1, br: Ue.qM.readUint32, bw: Ue.gp.writeUint32 },
                  filename: {
                    n: 2,
                    br: Ue.qM.readString,
                    bw: Ue.gp.writeString,
                  },
                  realm: { n: 3, br: Ue.qM.readUint32, bw: Ue.gp.writeUint32 },
                  force_proxy: {
                    n: 4,
                    br: Ue.qM.readBool,
                    bw: Ue.gp.writeBool,
                  },
                },
              }),
            ft.sm_m
          );
        }
        static MBF() {
          return ft.sm_mbf || (ft.sm_mbf = Ue.w0(ft.M())), ft.sm_mbf;
        }
        toObject(e = !1) {
          return ft.toObject(e, this);
        }
        static toObject(e, t) {
          return Ue.BT(ft.M(), e, t);
        }
        static fromObject(e) {
          return Ue.Uq(ft.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Re.BinaryReader(e),
            r = new ft();
          return ft.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ue.zj(ft.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Re.BinaryWriter();
          return ft.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ue.i0(ft.M(), e, t);
        }
        serializeBase64String() {
          var e = new Re.BinaryWriter();
          return ft.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientFileDownload_Request";
        }
      }
      class Mt extends Fe {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Mt.prototype.appid || Ue.Sg(Mt.M()),
            Fe.initialize(this, e, 0, -1, [10], null);
        }
        static M() {
          return (
            Mt.sm_m ||
              (Mt.sm_m = {
                proto: Mt,
                fields: {
                  appid: { n: 1, br: Ue.qM.readUint32, bw: Ue.gp.writeUint32 },
                  file_size: {
                    n: 2,
                    br: Ue.qM.readUint32,
                    bw: Ue.gp.writeUint32,
                  },
                  raw_file_size: {
                    n: 3,
                    br: Ue.qM.readUint32,
                    bw: Ue.gp.writeUint32,
                  },
                  sha_file: { n: 4, br: Ue.qM.readBytes, bw: Ue.gp.writeBytes },
                  time_stamp: {
                    n: 5,
                    br: Ue.qM.readUint64String,
                    bw: Ue.gp.writeUint64String,
                  },
                  is_explicit_delete: {
                    n: 6,
                    br: Ue.qM.readBool,
                    bw: Ue.gp.writeBool,
                  },
                  url_host: {
                    n: 7,
                    br: Ue.qM.readString,
                    bw: Ue.gp.writeString,
                  },
                  url_path: {
                    n: 8,
                    br: Ue.qM.readString,
                    bw: Ue.gp.writeString,
                  },
                  use_https: { n: 9, br: Ue.qM.readBool, bw: Ue.gp.writeBool },
                  request_headers: { n: 10, c: ht, r: !0, q: !0 },
                  encrypted: { n: 11, br: Ue.qM.readBool, bw: Ue.gp.writeBool },
                },
              }),
            Mt.sm_m
          );
        }
        static MBF() {
          return Mt.sm_mbf || (Mt.sm_mbf = Ue.w0(Mt.M())), Mt.sm_mbf;
        }
        toObject(e = !1) {
          return Mt.toObject(e, this);
        }
        static toObject(e, t) {
          return Ue.BT(Mt.M(), e, t);
        }
        static fromObject(e) {
          return Ue.Uq(Mt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Re.BinaryReader(e),
            r = new Mt();
          return Mt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ue.zj(Mt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Re.BinaryWriter();
          return Mt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ue.i0(Mt.M(), e, t);
        }
        serializeBase64String() {
          var e = new Re.BinaryWriter();
          return Mt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientFileDownload_Response";
        }
      }
      class ht extends Fe {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ht.prototype.name || Ue.Sg(ht.M()),
            Fe.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ht.sm_m ||
              (ht.sm_m = {
                proto: ht,
                fields: {
                  name: { n: 1, br: Ue.qM.readString, bw: Ue.gp.writeString },
                  value: { n: 2, br: Ue.qM.readString, bw: Ue.gp.writeString },
                },
              }),
            ht.sm_m
          );
        }
        static MBF() {
          return ht.sm_mbf || (ht.sm_mbf = Ue.w0(ht.M())), ht.sm_mbf;
        }
        toObject(e = !1) {
          return ht.toObject(e, this);
        }
        static toObject(e, t) {
          return Ue.BT(ht.M(), e, t);
        }
        static fromObject(e) {
          return Ue.Uq(ht.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Re.BinaryReader(e),
            r = new ht();
          return ht.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ue.zj(ht.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Re.BinaryWriter();
          return ht.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ue.i0(ht.M(), e, t);
        }
        serializeBase64String() {
          var e = new Re.BinaryWriter();
          return ht.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientFileDownload_Response_HTTPHeaders";
        }
      }
      class zt extends Fe {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            zt.prototype.appid || Ue.Sg(zt.M()),
            Fe.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            zt.sm_m ||
              (zt.sm_m = {
                proto: zt,
                fields: {
                  appid: { n: 1, br: Ue.qM.readUint32, bw: Ue.gp.writeUint32 },
                  filename: {
                    n: 2,
                    br: Ue.qM.readString,
                    bw: Ue.gp.writeString,
                  },
                  is_explicit_delete: {
                    n: 3,
                    br: Ue.qM.readBool,
                    bw: Ue.gp.writeBool,
                  },
                  upload_batch_id: {
                    n: 4,
                    br: Ue.qM.readUint64String,
                    bw: Ue.gp.writeUint64String,
                  },
                },
              }),
            zt.sm_m
          );
        }
        static MBF() {
          return zt.sm_mbf || (zt.sm_mbf = Ue.w0(zt.M())), zt.sm_mbf;
        }
        toObject(e = !1) {
          return zt.toObject(e, this);
        }
        static toObject(e, t) {
          return Ue.BT(zt.M(), e, t);
        }
        static fromObject(e) {
          return Ue.Uq(zt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Re.BinaryReader(e),
            r = new zt();
          return zt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ue.zj(zt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Re.BinaryWriter();
          return zt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ue.i0(zt.M(), e, t);
        }
        serializeBase64String() {
          var e = new Re.BinaryWriter();
          return zt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientDeleteFile_Request";
        }
      }
      class St extends Fe {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), Fe.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return St.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new St();
        }
        static deserializeBinary(e) {
          let t = new Re.BinaryReader(e),
            r = new St();
          return St.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new Re.BinaryWriter();
          return St.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new Re.BinaryWriter();
          return St.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientDeleteFile_Response";
        }
      }
      class Ct extends Fe {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ct.prototype.appid || Ue.Sg(Ct.M()),
            Fe.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ct.sm_m ||
              (Ct.sm_m = {
                proto: Ct,
                fields: {
                  appid: { n: 1, br: Ue.qM.readUint32, bw: Ue.gp.writeUint32 },
                  chose_local_files: {
                    n: 2,
                    br: Ue.qM.readBool,
                    bw: Ue.gp.writeBool,
                  },
                },
              }),
            Ct.sm_m
          );
        }
        static MBF() {
          return Ct.sm_mbf || (Ct.sm_mbf = Ue.w0(Ct.M())), Ct.sm_mbf;
        }
        toObject(e = !1) {
          return Ct.toObject(e, this);
        }
        static toObject(e, t) {
          return Ue.BT(Ct.M(), e, t);
        }
        static fromObject(e) {
          return Ue.Uq(Ct.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Re.BinaryReader(e),
            r = new Ct();
          return Ct.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ue.zj(Ct.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Re.BinaryWriter();
          return Ct.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ue.i0(Ct.M(), e, t);
        }
        serializeBase64String() {
          var e = new Re.BinaryWriter();
          return Ct.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientConflictResolution_Notification";
        }
      }
      class Rt extends Fe {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), Fe.initialize(this, e, 0, -1, void 0, null);
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
          let t = new Re.BinaryReader(e),
            r = new Rt();
          return Rt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new Re.BinaryWriter();
          return Rt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new Re.BinaryWriter();
          return Rt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_EnumerateUserApps_Request";
        }
      }
      class Ut extends Fe {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ut.prototype.apps || Ue.Sg(Ut.M()),
            Fe.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Ut.sm_m ||
              (Ut.sm_m = {
                proto: Ut,
                fields: { apps: { n: 1, c: Tt, r: !0, q: !0 } },
              }),
            Ut.sm_m
          );
        }
        static MBF() {
          return Ut.sm_mbf || (Ut.sm_mbf = Ue.w0(Ut.M())), Ut.sm_mbf;
        }
        toObject(e = !1) {
          return Ut.toObject(e, this);
        }
        static toObject(e, t) {
          return Ue.BT(Ut.M(), e, t);
        }
        static fromObject(e) {
          return Ue.Uq(Ut.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Re.BinaryReader(e),
            r = new Ut();
          return Ut.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ue.zj(Ut.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Re.BinaryWriter();
          return Ut.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ue.i0(Ut.M(), e, t);
        }
        serializeBase64String() {
          var e = new Re.BinaryWriter();
          return Ut.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_EnumerateUserApps_Response";
        }
      }
      class Tt extends Fe {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Tt.prototype.appid || Ue.Sg(Tt.M()),
            Fe.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Tt.sm_m ||
              (Tt.sm_m = {
                proto: Tt,
                fields: {
                  appid: { n: 1, br: Ue.qM.readUint32, bw: Ue.gp.writeUint32 },
                  totalcount: {
                    n: 2,
                    br: Ue.qM.readInt32,
                    bw: Ue.gp.writeInt32,
                  },
                  totalsize: {
                    n: 3,
                    br: Ue.qM.readInt64String,
                    bw: Ue.gp.writeInt64String,
                  },
                },
              }),
            Tt.sm_m
          );
        }
        static MBF() {
          return Tt.sm_mbf || (Tt.sm_mbf = Ue.w0(Tt.M())), Tt.sm_mbf;
        }
        toObject(e = !1) {
          return Tt.toObject(e, this);
        }
        static toObject(e, t) {
          return Ue.BT(Tt.M(), e, t);
        }
        static fromObject(e) {
          return Ue.Uq(Tt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Re.BinaryReader(e),
            r = new Tt();
          return Tt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ue.zj(Tt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Re.BinaryWriter();
          return Tt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ue.i0(Tt.M(), e, t);
        }
        serializeBase64String() {
          var e = new Re.BinaryWriter();
          return Tt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_EnumerateUserApps_Response_Apps";
        }
      }
      class Wt extends Fe {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Wt.prototype.appid || Ue.Sg(Wt.M()),
            Fe.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Wt.sm_m ||
              (Wt.sm_m = {
                proto: Wt,
                fields: {
                  appid: { n: 1, br: Ue.qM.readUint32, bw: Ue.gp.writeUint32 },
                  client_id: {
                    n: 2,
                    br: Ue.qM.readUint64String,
                    bw: Ue.gp.writeUint64String,
                  },
                  machine_name: {
                    n: 3,
                    br: Ue.qM.readString,
                    bw: Ue.gp.writeString,
                  },
                  cloud_sync_completed: {
                    n: 4,
                    br: Ue.qM.readBool,
                    bw: Ue.gp.writeBool,
                  },
                },
              }),
            Wt.sm_m
          );
        }
        static MBF() {
          return Wt.sm_mbf || (Wt.sm_mbf = Ue.w0(Wt.M())), Wt.sm_mbf;
        }
        toObject(e = !1) {
          return Wt.toObject(e, this);
        }
        static toObject(e, t) {
          return Ue.BT(Wt.M(), e, t);
        }
        static fromObject(e) {
          return Ue.Uq(Wt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Re.BinaryReader(e),
            r = new Wt();
          return Wt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ue.zj(Wt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Re.BinaryWriter();
          return Wt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ue.i0(Wt.M(), e, t);
        }
        serializeBase64String() {
          var e = new Re.BinaryWriter();
          return Wt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_AppSessionSuspend_Request";
        }
      }
      class Ft extends Fe {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), Fe.initialize(this, e, 0, -1, void 0, null);
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
          let t = new Re.BinaryReader(e),
            r = new Ft();
          return Ft.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new Re.BinaryWriter();
          return Ft.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new Re.BinaryWriter();
          return Ft.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_AppSessionSuspend_Response";
        }
      }
      class vt extends Fe {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            vt.prototype.appid || Ue.Sg(vt.M()),
            Fe.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            vt.sm_m ||
              (vt.sm_m = {
                proto: vt,
                fields: {
                  appid: { n: 1, br: Ue.qM.readUint32, bw: Ue.gp.writeUint32 },
                  client_id: {
                    n: 2,
                    br: Ue.qM.readUint64String,
                    bw: Ue.gp.writeUint64String,
                  },
                },
              }),
            vt.sm_m
          );
        }
        static MBF() {
          return vt.sm_mbf || (vt.sm_mbf = Ue.w0(vt.M())), vt.sm_mbf;
        }
        toObject(e = !1) {
          return vt.toObject(e, this);
        }
        static toObject(e, t) {
          return Ue.BT(vt.M(), e, t);
        }
        static fromObject(e) {
          return Ue.Uq(vt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Re.BinaryReader(e),
            r = new vt();
          return vt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ue.zj(vt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Re.BinaryWriter();
          return vt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ue.i0(vt.M(), e, t);
        }
        serializeBase64String() {
          var e = new Re.BinaryWriter();
          return vt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_AppSessionResume_Request";
        }
      }
      class qt extends Fe {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), Fe.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return qt.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new qt();
        }
        static deserializeBinary(e) {
          let t = new Re.BinaryReader(e),
            r = new qt();
          return qt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new Re.BinaryWriter();
          return qt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new Re.BinaryWriter();
          return qt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_AppSessionResume_Response";
        }
      }
      class jt extends Fe {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            jt.prototype.client_id || Ue.Sg(jt.M()),
            Fe.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            jt.sm_m ||
              (jt.sm_m = {
                proto: jt,
                fields: {
                  client_id: {
                    n: 1,
                    br: Ue.qM.readUint64String,
                    bw: Ue.gp.writeUint64String,
                  },
                },
              }),
            jt.sm_m
          );
        }
        static MBF() {
          return jt.sm_mbf || (jt.sm_mbf = Ue.w0(jt.M())), jt.sm_mbf;
        }
        toObject(e = !1) {
          return jt.toObject(e, this);
        }
        static toObject(e, t) {
          return Ue.BT(jt.M(), e, t);
        }
        static fromObject(e) {
          return Ue.Uq(jt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Re.BinaryReader(e),
            r = new jt();
          return jt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ue.zj(jt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Re.BinaryWriter();
          return jt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ue.i0(jt.M(), e, t);
        }
        serializeBase64String() {
          var e = new Re.BinaryWriter();
          return jt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientLogUploadCheck_Notification";
        }
      }
      class Ot extends Fe {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ot.prototype.request_id || Ue.Sg(Ot.M()),
            Fe.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ot.sm_m ||
              (Ot.sm_m = {
                proto: Ot,
                fields: {
                  request_id: {
                    n: 1,
                    br: Ue.qM.readUint64String,
                    bw: Ue.gp.writeUint64String,
                  },
                },
              }),
            Ot.sm_m
          );
        }
        static MBF() {
          return Ot.sm_mbf || (Ot.sm_mbf = Ue.w0(Ot.M())), Ot.sm_mbf;
        }
        toObject(e = !1) {
          return Ot.toObject(e, this);
        }
        static toObject(e, t) {
          return Ue.BT(Ot.M(), e, t);
        }
        static fromObject(e) {
          return Ue.Uq(Ot.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Re.BinaryReader(e),
            r = new Ot();
          return Ot.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ue.zj(Ot.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Re.BinaryWriter();
          return Ot.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ue.i0(Ot.M(), e, t);
        }
        serializeBase64String() {
          var e = new Re.BinaryWriter();
          return Ot.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientLogUploadRequest_Notification";
        }
      }
      class It extends Fe {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            It.prototype.client_id || Ue.Sg(It.M()),
            Fe.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            It.sm_m ||
              (It.sm_m = {
                proto: It,
                fields: {
                  client_id: {
                    n: 1,
                    br: Ue.qM.readUint64String,
                    bw: Ue.gp.writeUint64String,
                  },
                  request_id: {
                    n: 2,
                    br: Ue.qM.readUint64String,
                    bw: Ue.gp.writeUint64String,
                  },
                },
              }),
            It.sm_m
          );
        }
        static MBF() {
          return It.sm_mbf || (It.sm_mbf = Ue.w0(It.M())), It.sm_mbf;
        }
        toObject(e = !1) {
          return It.toObject(e, this);
        }
        static toObject(e, t) {
          return Ue.BT(It.M(), e, t);
        }
        static fromObject(e) {
          return Ue.Uq(It.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Re.BinaryReader(e),
            r = new It();
          return It.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ue.zj(It.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Re.BinaryWriter();
          return It.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ue.i0(It.M(), e, t);
        }
        serializeBase64String() {
          var e = new Re.BinaryWriter();
          return It.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientLogUploadComplete_Notification";
        }
      }
      var Nt, xt;
      !(function (e) {
        (e.ClientLogUploadCheck = function (e, t) {
          return e.SendNotification(
            "Cloud.ClientLogUploadCheck#1",
            (0, S.I8)(jt, t),
            { ePrivilege: 1 },
          );
        }),
          (e.ClientLogUploadComplete = function (e, t) {
            return e.SendNotification(
              "Cloud.ClientLogUploadComplete#1",
              (0, S.I8)(It, t),
              { ePrivilege: 1 },
            );
          }),
          (e.GetUploadServerInfo = function (e, t) {
            return e.SendMsg(
              "Cloud.GetUploadServerInfo#1",
              (0, S.I8)(qe, t),
              je,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.BeginHTTPUpload = function (e, t) {
            return e.SendMsg("Cloud.BeginHTTPUpload#1", (0, S.I8)(Oe, t), Ie, {
              ePrivilege: 1,
            });
          }),
          (e.CommitHTTPUpload = function (e, t) {
            return e.SendMsg("Cloud.CommitHTTPUpload#1", (0, S.I8)(xe, t), Ee, {
              ePrivilege: 1,
            });
          }),
          (e.BeginUGCUpload = function (e, t) {
            return e.SendMsg("Cloud.BeginUGCUpload#1", (0, S.I8)(Ae, t), ke, {
              ePrivilege: 1,
            });
          }),
          (e.CommitUGCUpload = function (e, t) {
            return e.SendMsg("Cloud.CommitUGCUpload#1", (0, S.I8)(Ge, t), Le, {
              ePrivilege: 1,
            });
          }),
          (e.GetFileDetails = function (e, t) {
            return e.SendMsg("Cloud.GetFileDetails#1", (0, S.I8)(De, t), $e, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.EnumerateUserFiles = function (e, t) {
            return e.SendMsg(
              "Cloud.EnumerateUserFiles#1",
              (0, S.I8)(He, t),
              Ke,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.Delete = function (e, t) {
            return e.SendMsg("Cloud.Delete#1", (0, S.I8)(Ve, t), Qe, {
              ePrivilege: 1,
            });
          }),
          (e.GetClientEncryptionKey = function (e, t) {
            return e.SendMsg(
              "Cloud.GetClientEncryptionKey#1",
              (0, S.I8)(Xe, t),
              Ye,
              { ePrivilege: 1 },
            );
          }),
          (e.CDNReport = function (e, t) {
            return e.SendNotification("Cloud.CDNReport#1", (0, S.I8)(Ze, t), {
              ePrivilege: 1,
            });
          }),
          (e.ExternalStorageTransferReport = function (e, t) {
            return e.SendNotification(
              "Cloud.ExternalStorageTransferReport#1",
              (0, S.I8)(Je, t),
              { ePrivilege: 1 },
            );
          }),
          (e.BeginAppUploadBatch = function (e, t) {
            return e.SendMsg(
              "Cloud.BeginAppUploadBatch#1",
              (0, S.I8)(ut, t),
              dt,
              { ePrivilege: 1 },
            );
          }),
          (e.CompleteAppUploadBatch = function (e, t) {
            return e.SendNotification(
              "Cloud.CompleteAppUploadBatch#1",
              (0, S.I8)(mt, t),
              { ePrivilege: 1 },
            );
          }),
          (e.CompleteAppUploadBatchBlocking = function (e, t) {
            return e.SendMsg(
              "Cloud.CompleteAppUploadBatchBlocking#1",
              (0, S.I8)(pt, t),
              Bt,
              { ePrivilege: 1 },
            );
          }),
          (e.ClientBeginFileUpload = function (e, t) {
            return e.SendMsg(
              "Cloud.ClientBeginFileUpload#1",
              (0, S.I8)(bt, t),
              yt,
              { ePrivilege: 1 },
            );
          }),
          (e.ClientCommitFileUpload = function (e, t) {
            return e.SendMsg(
              "Cloud.ClientCommitFileUpload#1",
              (0, S.I8)(wt, t),
              _t,
              { ePrivilege: 1 },
            );
          }),
          (e.ClientFileDownload = function (e, t) {
            return e.SendMsg(
              "Cloud.ClientFileDownload#1",
              (0, S.I8)(ft, t),
              Mt,
              { ePrivilege: 1 },
            );
          }),
          (e.ClientDeleteFile = function (e, t) {
            return e.SendMsg("Cloud.ClientDeleteFile#1", (0, S.I8)(zt, t), St, {
              ePrivilege: 1,
            });
          }),
          (e.ClientConflictResolution = function (e, t) {
            return e.SendNotification(
              "Cloud.ClientConflictResolution#1",
              (0, S.I8)(Ct, t),
              { ePrivilege: 1 },
            );
          }),
          (e.EnumerateUserApps = function (e, t) {
            return e.SendMsg(
              "Cloud.EnumerateUserApps#1",
              (0, S.I8)(Rt, t),
              Ut,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetAppFileChangelist = function (e, t) {
            return e.SendMsg(
              "Cloud.GetAppFileChangelist#1",
              (0, S.I8)(st, t),
              ot,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.SuspendAppSession = function (e, t) {
            return e.SendMsg(
              "Cloud.SuspendAppSession#1",
              (0, S.I8)(Wt, t),
              Ft,
              { ePrivilege: 1 },
            );
          }),
          (e.ResumeAppSession = function (e, t) {
            return e.SendMsg("Cloud.ResumeAppSession#1", (0, S.I8)(vt, t), qt, {
              ePrivilege: 1,
            });
          }),
          (e.SignalAppLaunchIntent = function (e, t) {
            return e.SendMsg(
              "Cloud.SignalAppLaunchIntent#1",
              (0, S.I8)(et, t),
              tt,
              { ePrivilege: 1 },
            );
          }),
          (e.SignalAppExitSyncDone = function (e, t) {
            return e.SendNotification(
              "Cloud.SignalAppExitSyncDone#1",
              (0, S.I8)(rt, t),
              { ePrivilege: 1 },
            );
          }),
          (e.ClientGetAppQuotaUsage = function (e, t) {
            return e.SendMsg(
              "Cloud.ClientGetAppQuotaUsage#1",
              (0, S.I8)(it, t),
              nt,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          });
      })(Nt || (Nt = {})),
        (function (e) {
          (e.NotifyAppStateChangeHandler = {
            name: "CloudClient.NotifyAppStateChange#1",
            request: gt,
          }),
            (e.ClientLogUploadRequestHandler = {
              name: "CloudClient.ClientLogUploadRequest#1",
              request: Ot,
            });
        })(xt || (xt = {}));
      var Et = r(62490),
        At = r(60778);
      const kt = new At.wd("GameNotesCloudStore").Debug;
      function Pt(e) {
        return e.replace(/[!-/:-@ [\\\]^`]/g, "_");
      }
      class Gt {
        constructor() {
          (this.m_mapNotesByGame = new Map()),
            (this.m_mapNotesByShortcut = new Map());
        }
        FilenameForNotes(e) {
          return "appid" in e
            ? `notes_${Number(e.appid)}`
            : `notes_shortcut_${Pt(e.shortcut)}`;
        }
        DirectoryForNoteImages(e) {
          return "appid" in e
            ? `notes_${Number(e.appid)}_images/`
            : `notes_shortcut_${Pt(e.shortcut)}_images/`;
        }
        ParseNotesFileName(e) {
          const t = e.match(/^notes_shortcut_([^/]+)$/);
          if (t) return { shortcut: t[1] };
          const r = e.match(/^notes_(\d+)$/);
          return r && parseInt(r[1]) < 2147483647
            ? { appid: parseInt(r[1]) }
            : void 0;
        }
        MapAndKeyNoteType(e) {
          return "appid" in e
            ? [this.m_mapNotesByGame, e.appid]
            : [this.m_mapNotesByShortcut, e.shortcut];
        }
        async GetGameNotesList(e, t) {
          return (await this.InternalLoadNotes(e)).notes.slice();
        }
        NewNote(e, t) {
          let r = {};
          return (
            "appid" in e ? (r.appid = e.appid) : (r.shortcut_name = e.shortcut),
            {
              id: Date.now().toString(36),
              ...r,
              ordinal: 0,
              time_created: Math.floor(Date.now() / 1e3),
              time_modified: Math.floor(Date.now() / 1e3),
              title: t,
              content: "",
              not_persisted: !0,
            }
          );
        }
        async SaveGameNote(e, t, r) {
          const i = d(e),
            n = await this.InternalLoadNotes(i),
            a = n.notes.findIndex((t) => t.id === e.id);
          return (
            -1 != a
              ? (n.notes[a] = {
                  ...n.notes[a],
                  ...e,
                  title: t,
                  content: r,
                  time_modified: Math.floor(Date.now() / 1e3),
                })
              : n.notes.push({
                  ...e,
                  title: t,
                  content: r,
                  time_modified: Math.floor(Date.now() / 1e3),
                }),
            (n.dirty = !0),
            await this.InternalSaveNotes(i),
            e.id
          );
        }
        async InternalSaveNotes(e) {
          const [t, r] = this.MapAndKeyNoteType(e),
            i = t.get(r);
          if (i.dirty) {
            const t = { notes: i.notes },
              r = JSON.stringify(t, (e, t) =>
                "not_persisted" === e ? void 0 : t,
              );
            kt(t, ` => ${r}`);
            const n = await this.WriteNotesFile(this.FilenameForNotes(e), r);
            if (1 != n) throw `Error saving notes: ${n}`;
          }
          return 1;
        }
        async DeleteGameNote(e, t) {
          const r = await this.InternalLoadNotes(e);
          return (
            Et.Wp(r.notes, (e) => e.id === t) && (r.dirty = !0),
            await this.InternalSaveNotes(e),
            t
          );
        }
      }
      const Lt = new At.wd("GameNotesCloudStore").Debug;
      class Dt extends Gt {
        constructor(e) {
          super(), (this.m_props = e);
        }
        async GetGamesWithNotes() {
          let e = [];
          for (const [t, r] of await this.GetFiles()) {
            const i = this.ParseNotesFileName(t);
            if (!i) continue;
            let n;
            (n =
              "appid" in i
                ? { appid: i.appid }
                : { shortcut_name: i.shortcut }),
              e.push({ ...n, last_modified: r.rtLastModified });
          }
          return e;
        }
        async UploadImage(e, t, r) {}
        async GetFiles() {
          return (
            this.m_mapFileInfo || (await this.InternalLoadNotesList()),
            this.m_mapFileInfo
          );
        }
        async InternalLoadNotes(e) {
          const [t, r] = this.MapAndKeyNoteType(e);
          if (!t.has(r)) {
            const i = this.FilenameForNotes(e),
              n = await this.GetCloudFileInfo(i);
            let a;
            (a = n ? await this.InternalLoadFileFromCloud(n) : { notes: [] }),
              t.set(r, { dirty: !1, notes: a.notes });
          }
          return t.get(r);
        }
        async WriteNotesFile(e, t) {
          return this.m_props.onFileModified(e, t), 1;
        }
        async GetCloudFileInfo(e) {
          return (await this.GetFiles()).get(e);
        }
        async InternalLoadNotesList() {
          Lt(`Loading cloud file list for ${T.oe}`);
          const e = S.w.Init(He);
          e.Body().set_appid(T.oe), e.Body().set_extended_details(!0);
          const t = await Nt.EnumerateUserFiles(
            this.m_props.steamInterface.GetServiceTransport(),
            e,
          );
          if (!t.BSuccess())
            throw `Error loading cloud files: ${t.GetErrorMessage()}`;
          const r = t
            .Body()
            .files()
            .map((e) => ({
              strFilename: e.filename(),
              strURL: e.url(),
              rtLastModified: parseInt(e.timestamp()),
              nBytes: e.file_size(),
              strSHA: e.file_sha(),
            }));
          Lt(
            `Cloud load complete, found ${r.length} files, ${t.Body().total_files()} total files`,
          ),
            (this.m_mapFileInfo = new Map(r.map((e) => [e.strFilename, e])));
        }
        async InternalLoadFileFromCloud(e) {
          const t = await fetch(e.strURL),
            r = await t.json();
          if (r) return r;
          throw `Cloud file not found for ${e.strFilename}`;
        }
      }
      var $t = r(20737);
      function Ht(e, t) {
        const r = (0, R.KV)();
        return (0, c.n)({
          mutationFn: async ({ files: i }) => {
            const n = await (async function (e, t, r, i, n) {
              const a = await (async function (e, t, r, i) {
                const n = S.w.Init(ut);
                n.Body().set_appid(t),
                  n.Body().set_machine_name(r),
                  n.Body().set_files_to_upload(i.slice());
                const a = await Nt.BeginAppUploadBatch(e, n);
                if (!a.BSuccess())
                  throw `Error in BeginAppUploadBatch: ${a.GetErrorMessage()}`;
                return a.Body().batch_id();
              })(e, t, r, i);
              if (!a) return !1;
              let s = !1;
              try {
                s = await n(a);
              } finally {
                !(function (e, t, r, i) {
                  const n = S.w.Init(pt);
                  n.Body().set_appid(t),
                    n.Body().set_batch_id(r),
                    n.Body().set_batch_eresult(i ? 1 : 2),
                    Nt.CompleteAppUploadBatch(e, n);
                })(e, t, a, s);
              }
              return !0;
            })(
              r,
              e,
              t,
              i.map((e) => e.filename),
              async (t) => {
                const n = await Promise.all(
                  i.map((i) =>
                    (async function (e, t, r, i) {
                      let n, a;
                      n =
                        i.content instanceof File
                          ? await i.content.arrayBuffer()
                          : new TextEncoder().encode(i.content).buffer;
                      a = await $t.C(n, "SHA-1");
                      const s = await (async function (e, t, r, i, n, a) {
                          const s = S.w.Init(Oe);
                          s.Body().set_appid(t),
                            s.Body().add_platforms_to_sync("All"),
                            s.Body().set_upload_batch_id(r),
                            s.Body().set_filename(i),
                            s.Body().set_file_size(n),
                            s.Body().set_file_sha(a);
                          const o = await Nt.BeginHTTPUpload(e, s);
                          if (!o.BSuccess())
                            throw `Error in BeginHTTPUpload: ${o.GetErrorMessage()}`;
                          return o.Body().toObject();
                        })(e, t, r, i.filename, n.byteLength, a),
                        o = `https://${s.url_host}${s.url_path}`;
                      let l = !1;
                      try {
                        const e = s.request_headers.map(
                          ({ name: e, value: t }) => [e, t],
                        );
                        l = (
                          await fetch(o, {
                            method: "PUT",
                            headers: e,
                            mode: "cors",
                            body: i.content,
                          })
                        ).ok;
                      } catch {}
                      return await (async function (e, t, r, i, n) {
                        const a = S.w.Init(xe);
                        a.Body().set_appid(t),
                          a.Body().set_transfer_succeeded(n),
                          a.Body().set_filename(r),
                          a.Body().set_file_sha(i);
                        const s = await Nt.CommitHTTPUpload(e, a);
                        if (!s.BSuccess())
                          throw `Error in CommitHTTPUpload: ${s.GetErrorMessage()}`;
                        return s.Body().file_committed();
                      })(e, t, i.filename, a, l);
                    })(r, e, t, i),
                  ),
                );
                return !n.some((e) => !e);
              },
            );
            return n;
          },
        });
      }
      function Kt(e) {
        const t = (function () {
          const e = (0, R.TR)(),
            { mutate: t } = Ht(T.oe, "Steam Community Web Interface"),
            r = i.useCallback(
              (e, r) => {
                t({ files: [{ filename: e, content: r }] });
              },
              [t],
            ),
            n = i.useRef({ steamInterface: e, onFileModified: r });
          n.current.onFileModified = r;
          const [a] = i.useState(() => new Dt(n.current));
          return a;
        })();
        return i.createElement(
          p,
          { mode: "page", store: t },
          i.createElement(
            n.dO,
            null,
            i.createElement(n.qh, { path: a.List() }, i.createElement(I, null)),
            i.createElement(
              n.qh,
              { path: a.AppNotes(":appid", ":noteid?") },
              i.createElement(he, null),
            ),
            i.createElement(
              n.qh,
              null,
              i.createElement(n.rd, { to: `${a.List()}` }),
            ),
          ),
        );
      }
    },
    49693: (e, t, r) => {
      "use strict";
      r.d(t, { op: () => o, CS: () => a, vE: () => l, Al: () => n });
      class i {
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
      class n {
        constructor(e, t) {
          (this.m_dictComponents = e), (this.m_fnAccumulatorFactory = t);
        }
        Parse(e, t, r = !1) {
          const n = (function (e, t) {
            const r = [];
            let n = new i(),
              a = !1,
              s = !1,
              o = !1;
            for (let i = 0; i < e.length; i++) {
              const l = e[i];
              switch (n.type) {
                case 0:
                  "[" == l
                    ? ((n.type = 2), (s = !0))
                    : ((n.type = 1), "\\" == l && t ? (a = !a) : (n.text += l));
                  break;
                case 2:
                case 3:
                  if ("/" == l && s) (n.type = 3), (n.text = ""), (s = !1);
                  else if ("[" != l || a)
                    if ("]" != l || a)
                      "\\" == l && t
                        ? ((n.text += l), (a = !a), (s = !1))
                        : ((n.text += l), (a = !1), (s = !1));
                    else {
                      const e =
                          2 == n.type &&
                          "noparse" == n.text.toLocaleLowerCase(),
                        t =
                          3 == n.type &&
                          "noparse" == n.text.toLocaleLowerCase();
                      s || (o && !t)
                        ? (n.ConvertMalformedNodeToText(), (n.text += l))
                        : e
                          ? (o = !0)
                          : t && (o = !1),
                        (n = c(r, n)),
                        (s = !1);
                    }
                  else
                    n.ConvertMalformedNodeToText(), (n = c(r, n, 2)), (s = !0);
                  break;
                case 1:
                  "[" != l || a
                    ? "\\" == l && t
                      ? (a && (n.text += l), (a = !a))
                      : ((n.text += l), (a = !1))
                    : ((n = c(r, n, 2)), (s = !0));
              }
            }
            0 != n.type &&
              ((2 != n.type && 3 != n.type) || n.ConvertMalformedNodeToText(),
              r.push(n));
            return r;
          })(e || "", r);
          return this.Parse_BuildElements(n, t);
        }
        Parse_BuildElements(e, t) {
          let r = this.m_fnAccumulatorFactory(void 0);
          const i = [],
            n = () => (i.length < 1 ? void 0 : i[i.length - 1]),
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
            l = !0;
          const c = (e, n) => {
            if (e && e.node.tag === n.text && a.get(e.node.tag)) {
              const n = a.get(e.node.tag),
                s = i.map((e) => e.node.tag),
                c = { parentTags: s, tagname: e.node.tag, args: e.node.args },
                u = t(n.Constructor, c, ...r.GetElements());
              (r = e.accumulator),
                Array.isArray(u)
                  ? u.forEach((e) => r.AppendNode(e))
                  : r.AppendNode(u),
                (o = !!n.skipFollowingNewline),
                (l = e.bWrapTextForCopying);
            } else if (e) {
              const t = e.accumulator;
              t.AppendText("[" + e.node.text + "]", !1),
                r.GetElements().forEach((e) => t.AppendNode(e)),
                t.AppendText("[/" + n.text + "]", !1),
                (r = t),
                (l = e.bWrapTextForCopying);
            }
          };
          for (
            e.forEach((e, t) => {
              var u, d;
              if (1 == e.type) {
                const t = o ? e.text.replace(/^[\t\r ]*\n/g, "") : e.text;
                r.AppendText(t, l), (o = !1);
              } else if (2 == e.type) {
                const t = a.get(e.tag);
                if (t) {
                  const s = n();
                  if (void 0 !== s) {
                    const t = a.get(s.node.tag);
                    t &&
                      t.autocloses &&
                      e.tag === s.node.tag &&
                      c(i.pop(), s.node);
                  }
                  i.push({ accumulator: r, node: e, bWrapTextForCopying: l }),
                    (r = this.m_fnAccumulatorFactory(e)),
                    (o = !!t.skipInternalNewline),
                    (l =
                      null !== (u = t.allowWrapTextForCopying) &&
                      void 0 !== u &&
                      u);
                } else r.AppendText("[" + e.text + "]", 0 == i.length);
              } else if (3 == e.type) {
                for (; n() && n().node.tag !== e.text && s(n().node); ) {
                  const e = i.pop();
                  c(e, e.node);
                }
                if (
                  (null === (d = n()) || void 0 === d ? void 0 : d.node.tag) ==
                  e.text
                ) {
                  const t = i.pop();
                  c(t, e);
                } else r.AppendText("[/" + e.text + "]", 0 == i.length);
              }
            });
            i.length > 0;
          ) {
            const e = i.pop();
            c(e, e.node);
          }
          return r.GetElements();
        }
      }
      function a(e, t) {
        let r = "[" + e;
        (null == t ? void 0 : t[""]) && (r += `=${s("" + t[""])}`);
        for (const e in t)
          "" !== e &&
            (r += ` ${((i = e), i.replace(/(\\| |\])/g, "\\$1"))}=${s("" + t[e])}`);
        var i;
        return (r += "]"), r;
      }
      function s(e) {
        return `"${e.replace(/(\\|"|\])/g, "\\$1")}"`;
      }
      function o(e) {
        return `[/${e}]`;
      }
      function l(e) {
        return e.replace(/(\\|\[)/g, "\\$1");
      }
      function c(e, t, r = 0) {
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
                i = "",
                n = 0,
                a = 0;
              "=" == e[0] && (n = 2);
              let s = !1;
              for (a++; a < e.length; a++) {
                const o = e[a];
                let l = !0,
                  c = !1;
                switch (n) {
                  case 0:
                    if ("=" == o) return {};
                    if (" " == o) continue;
                    n = 1;
                    break;
                  case 1:
                    ("=" != o && " " != o) ||
                      s ||
                      (" " == o ? ((n = 0), (c = !0)) : (n = 2), (l = !1));
                    break;
                  case 2:
                    " " == o
                      ? ((n = 0), (l = !1), (c = !0))
                      : '"' == o
                        ? ((n = 4), (l = !1))
                        : (n = 3);
                    break;
                  case 3:
                  case 4:
                    ((" " == o && 4 != n && !s) ||
                      ('"' == o && 4 == n && !s)) &&
                      ((n = 0), (l = !1), (c = !0));
                }
                if (l)
                  if ("\\" != o || s)
                    if (((s = !1), 1 == n)) r += o;
                    else {
                      if (3 != n && 4 != n)
                        throw new Error(
                          "Not expecting to accumulate buffer in state " + n,
                        );
                      i += o;
                    }
                  else s = !0;
                c && ((t[r] = i), (r = ""), (i = ""));
              }
              0 != n && (t[r] = i);
              return t;
            })(r);
          } else (t.args = {}), (t.tag = t.text.toLocaleLowerCase());
        }
        e.push(t);
        const n = new i();
        return (n.type = r), n;
      }
    },
    28106: (e, t, r) => {
      "use strict";
      r.d(t, { W: () => d });
      var i = r(26205),
        n = r(57053),
        a = r(52893),
        s = r(90626),
        o = r(61859),
        l = r(17558),
        c = r(22145),
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
        const [B, g] = s.useState(),
          [b, y] = s.useState(),
          [w, _] = s.useState(),
          [f, M] = (0, l.E)(o),
          h = s.useMemo(
            () =>
              new a.k_({
                props: {
                  handleClickOn(e, r, i, n, a, s) {
                    if (s && (a.ctrlKey || 1 == a.button)) {
                      const e = i
                        .resolve(r - n)
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
                    ) && (f(e), !0),
                  clipboardTextParser(e, a, s, l) {
                    let c,
                      u = [];
                    for (; (c = e.match(i.O)); ) {
                      c.index > 0 && u.push(o.text(e.substring(0, c.index)));
                      const n = (0, i.S)(c[0]),
                        a = r && r(n);
                      a && "default" !== a
                        ? "remove" !== a && u.push(a)
                        : u.push(o.text(c[0], [t.create({ href: n })])),
                        (e = e.substring(c.index + c[0].length));
                    }
                    return (
                      e.length && u.push(o.text(e)),
                      new n.Ji(n.FK.from(u), a.start(), a.end())
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
                        g(e.left + e.width / 2), y(e.bottom + 2), _(r);
                      } else _(void 0);
                      return !1;
                    },
                    mouseleave: (e, t) => (_(void 0), !1),
                  },
                },
              }),
            [t, f, r, o],
          );
        (0, c.c$)(h);
        let z = null;
        return (
          w &&
            B &&
            b &&
            (z = s.createElement(m, {
              top: b,
              left: B,
              href: w.getAttribute("href"),
            })),
          s.createElement(s.Fragment, null, z, M)
        );
      });
      function m(e) {
        const { top: t, left: r, href: i } = e,
          [n, a] = s.useState(0),
          l = s.useRef(null);
        s.useLayoutEffect(() => {
          a(l.current.getBoundingClientRect().width);
        }, [t, r, i]);
        const c = { top: `${t}px`, left: `${Math.max(r - n / 2, 12)}px` };
        return s.createElement(
          "div",
          { className: u.Hover, style: c, ref: l },
          s.createElement("div", { className: u.Link }, i),
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
      var i = r(90626),
        n = r(90286);
      function a(e, t) {
        const { msAutosaveTimeout: r = 1e3 } = t || {},
          [a, s] = i.useState(!1);
        return (
          (0, n.u)(
            e,
            i.useCallback(() => {
              s(!0);
            }, []),
          ),
          i.useEffect(() => {
            if (!a || !e) return;
            const t = () => {
                e.CommitChanges(), s(!1);
              },
              i = window.setTimeout(t, r);
            return () => {
              window.clearTimeout(i), t();
            };
          }, [a, e, r]),
          { bDirty: a }
        );
      }
    },
    61788: (e, t, r) => {
      "use strict";
      r.d(t, { y: () => m });
      var i = r(34629),
        n = r(56545),
        a = r(59134),
        s = r(60778),
        o = r(14771),
        l = r(6419);
      const c = new s.wd("ReactUsageReporting").Debug,
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
          const e = n.w.Init(a.bc);
          e.Body().set_product(this.m_strProduct),
            e.Body().set_version(this.m_strVersion),
            this.m_mapRoutes.forEach((t, r) => {
              let i = new a.N4();
              i.set_route(r), i.set_count(t), e.Body().add_routes(i);
            }),
            this.m_mapComponents.forEach((t, r) => {
              let i = new a.Zd();
              i.set_component(r), i.set_count(t), e.Body().add_components(i);
            }),
            this.m_mapActions.forEach((t, r) => {
              let i = new a.Ys();
              i.set_action(r), i.set_count(t), e.Body().add_actions(i);
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
      (0, i.Cg)([l.o], d.prototype, "CheckSend", null);
      const m = new d();
    },
    86807: (e, t, r) => {
      "use strict";
      r.d(t, { R: () => a });
      var i = r(90626),
        n = r(72739);
      function a(e) {
        const {
            visible: t = !0,
            className: r,
            keepMounted: a = !1,
            expandDirection: s = "height",
            msAnimationDuration: o = 250,
            children: l,
          } = e,
          {
            style: c,
            active: u,
            refDiv: d,
          } = (function (e, t = "height", r = 250) {
            const a = i.useRef(),
              s = i.useRef(!0),
              [o, l] = i.useState("idle"),
              [c, u] = i.useState({});
            i.useLayoutEffect(() => {
              s.current ? (s.current = !1) : l("start");
            }, [e]),
              i.useLayoutEffect(() => {
                const r = a.current,
                  i = "height" == t ? "scrollHeight" : "scrollWidth";
                if ("start" == o) {
                  const n = r[i];
                  u((r) => ({
                    [t]: e ? "0px" : `${n}px`,
                    ...r,
                    overflow: "hidden",
                  })),
                    l("active");
                } else if ("active" == o) {
                  r.scrollTop;
                  const a = r[i];
                  u({ overflow: "hidden", [t]: e ? `${a}px` : "0px" });
                  const s = () => {
                    n.unstable_batchedUpdates(() => {
                      u({}), l("idle");
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
            const d = { ...c, transition: `${t} ${r}ms` };
            return { style: d, active: "idle" != o, refDiv: a };
          })(t, s, o);
        return t || u || a
          ? i.createElement("div", { className: r, ref: d, style: c }, l)
          : null;
      }
    },
  },
]);
