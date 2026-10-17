(() => {
  (self.webpackChunksteamui = self.webpackChunksteamui || []).push([
    [1220],
    {
      39889: (j) => {
        j.exports = { GameNotesPopup: "_3hIt9g_59KauEV2uSNK6Ct" };
      },
      3291: (j, l, t) => {
        "use strict";
        t.r(l), t.d(l, { default: () => e });
        var s = t(62540),
          i = t(9851),
          d = t(50209),
          h = t(44026),
          m = t(63696),
          O = t(49519),
          D = t(17205),
          M = t(12442),
          f = t(41843),
          x = t(91088),
          v = t(50777),
          P = t(64243),
          _ = t(7727),
          E = t(39889),
          a = t.n(E);
        function e(u) {
          const { popup: o } = u,
            [r, n] = m.useState();
          return (
            m.useEffect(() => {
              if (r)
                return i.U.RegisterPopup(o, () =>
                  r.SteamClient.Window.BringToFront(),
                );
            }, [o, r]),
            o.noteid === void 0
              ? (0, s.jsx)(g, { popup: o, refPopup: n })
              : (0, s.jsx)(c, { popup: o, refPopup: n })
          );
        }
        function c(u) {
          const { popup: o, refPopup: r } = u,
            n = (0, _.we)("#GameNotes_NoteForGame", o.display_name);
          return (0, s.jsx)(D.p, {
            body_class: E.GameNotesPopup,
            children: (0, s.jsxs)(P.hM, {
              strName: o.id,
              strTitle: n,
              onDismiss: () => o.close(),
              popupWidth: 500,
              popupHeight: 500,
              resizable: !0,
              refPopup: r,
              className: "TODO",
              children: [
                (0, s.jsx)(v.Y9, { children: n }),
                (0, s.jsx)(d.A, {
                  mode: "single",
                  closePopup: () => o.close(),
                  children: (0, s.jsx)(p, {
                    noteParent: o.noteParent,
                    noteid: o.noteid,
                  }),
                }),
              ],
            }),
          });
        }
        function p(u) {
          const { noteParent: o, noteid: r } = u,
            { data: n } = (0, f.P6)(o, r);
          return n ? (0, s.jsx)(x.U, { note: n }) : null;
        }
        function g(u) {
          const { popup: o, refPopup: r } = u,
            n = o.noteParent,
            N = m.useMemo(() => [(0, M.o)(n)], [n]);
          return (0, s.jsx)(P.hM, {
            strName: o.id,
            strTitle: o.display_name,
            onDismiss: () => o.close(),
            popupWidth: 900,
            popupHeight: 830,
            resizable: !0,
            refPopup: r,
            className: "TODO",
            children: (0, s.jsx)(O.fS, {
              initialEntries: N,
              children: (0, s.jsx)(d.A, {
                mode: "page",
                closePopup: () => o.close(),
                children: (0, s.jsx)(h.default, { noteParent: n }),
              }),
            }),
          });
        }
      },
      44026: (j, l, t) => {
        "use strict";
        t.r(l), t.d(l, { default: () => E });
        var s = t(62540),
          i = t(49519),
          d = t(12442),
          h = t(14828),
          m = t(63696),
          O = t(39941),
          D = t(41843),
          M = t(12684),
          f = t(7354),
          x = t(7727);
        function v() {
          const { data: a, isLoading: e } = (0, D.Yh)(),
            c = m.useMemo(
              () =>
                a?.slice().sort((p, g) => g.last_modified - p.last_modified),
              [a],
            );
          return e
            ? (0, s.jsx)(f.t, { msDelayAppear: 300 })
            : (0, s.jsxs)("div", {
                children: [
                  (0, s.jsx)("h1", {
                    children: (0, x.we)("#UserGameNotes_NotesList"),
                  }),
                  (0, s.jsx)("ul", {
                    children: c.map((p) =>
                      (0, s.jsx)(P, { game: p }, p.appid || p.shortcut_name),
                    ),
                  }),
                ],
              });
        }
        function P(a) {
          const { game: e } = a;
          return (0, s.jsx)("li", {
            children: (0, s.jsx)(O.N_, {
              to: (0, d.o)(
                e.appid ? { appid: e.appid } : { shortcut: e.shortcut_name },
              ),
              children: e.appid
                ? (0, s.jsx)(_, { appid: e.appid })
                : e.shortcut_name,
            }),
          });
        }
        function _(a) {
          const { appid: e } = a;
          return (0, M.X)(e)?.name;
        }
        function E(a) {
          return (0, s.jsxs)(i.dO, {
            children: [
              (0, s.jsx)(i.qh, {
                path: d.O.List(),
                children: (0, s.jsx)(v, {}),
              }),
              (0, s.jsx)(i.qh, {
                path: d.O.AppNotes(":appid", ":noteid?"),
                children: (0, s.jsx)(h.u, {}),
              }),
              (0, s.jsx)(i.qh, {
                path: d.O.ShortcutNotes(":shortcut_name", ":noteid?"),
                children: (0, s.jsx)(h.u, {}),
              }),
              (0, s.jsx)(i.qh, {
                children: (0, s.jsx)(i.rd, { to: `${(0, d.o)(a.noteParent)}` }),
              }),
            ],
          });
        }
      },
    },
  ]);
})();
//# sourceMappingURL=file:///home/buildbot/buildslave/npm-coordinator-rel-steamui/build/client/steamui/sourcemaps/gamenotes.js.map
