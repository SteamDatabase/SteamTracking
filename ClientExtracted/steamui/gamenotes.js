(() => {
  (self.webpackChunksteamui = self.webpackChunksteamui || []).push([
    [1220],
    {
      39889: (j) => {
        j.exports = { GameNotesPopup: "_3hIt9g_59KauEV2uSNK6Ct" };
      },
      3291: (j, l, t) => {
        "use strict";
        t.r(l), t.d(l, { default: () => a });
        var s = t(62540),
          d = t(9851),
          p = t(50209),
          P = t(44026),
          m = t(63696),
          O = t(49519),
          M = t(17205),
          v = t(12442),
          D = t(41843),
          f = t(91088),
          _ = t(50777),
          h = t(64243),
          x = t(7727),
          c = t(39889),
          A = t.n(c),
          g = "10986482";
        function a(r) {
          const { popup: o } = r,
            [i, n] = m.useState();
          return (
            m.useEffect(() => {
              if (i)
                return d.U.RegisterPopup(o, () =>
                  i.SteamClient.Window.BringToFront(),
                );
            }, [o, i]),
            o.noteid === void 0
              ? (0, s.jsx)(u, { popup: o, refPopup: n })
              : (0, s.jsx)(e, { popup: o, refPopup: n })
          );
        }
        function e(r) {
          const { popup: o, refPopup: i } = r,
            n = (0, x.we)("#GameNotes_NoteForGame", o.display_name);
          return (0, s.jsx)(M.p, {
            body_class: c.GameNotesPopup,
            children: (0, s.jsxs)(h.hM, {
              strName: o.id,
              strTitle: n,
              onDismiss: () => o.close(),
              popupWidth: 500,
              popupHeight: 500,
              resizable: !0,
              refPopup: i,
              className: "TODO",
              children: [
                (0, s.jsx)(_.Y9, { children: n }),
                (0, s.jsx)(p.A, {
                  mode: "single",
                  closePopup: () => o.close(),
                  children: (0, s.jsx)(E, {
                    noteParent: o.noteParent,
                    noteid: o.noteid,
                  }),
                }),
              ],
            }),
          });
        }
        function E(r) {
          const { noteParent: o, noteid: i } = r,
            { data: n } = (0, D.P6)(o, i);
          return n ? (0, s.jsx)(f.U, { note: n }) : null;
        }
        function u(r) {
          const { popup: o, refPopup: i } = r,
            n = o.noteParent,
            L = m.useMemo(() => [(0, v.o)(n)], [n]);
          return (0, s.jsx)(h.hM, {
            strName: o.id,
            strTitle: o.display_name,
            onDismiss: () => o.close(),
            popupWidth: 900,
            popupHeight: 830,
            resizable: !0,
            refPopup: i,
            className: "TODO",
            children: (0, s.jsx)(O.fS, {
              initialEntries: L,
              children: (0, s.jsx)(p.A, {
                mode: "page",
                closePopup: () => o.close(),
                children: (0, s.jsx)(P.default, { noteParent: n }),
              }),
            }),
          });
        }
      },
      44026: (j, l, t) => {
        "use strict";
        t.r(l), t.d(l, { default: () => g });
        var s = t(62540),
          d = t(49519),
          p = t(12442),
          P = t(14828),
          m = t(63696),
          O = t(39941),
          M = t(41843),
          v = t(12684),
          D = t(7354),
          f = t(7727),
          _ = "10986482";
        function h() {
          const { data: a, isLoading: e } = (0, M.Yh)(),
            E = m.useMemo(
              () =>
                a?.slice().sort((u, r) => r.last_modified - u.last_modified),
              [a],
            );
          return e
            ? (0, s.jsx)(D.t, { msDelayAppear: 300 })
            : (0, s.jsxs)("div", {
                children: [
                  (0, s.jsx)("h1", {
                    children: (0, f.we)("#UserGameNotes_NotesList"),
                  }),
                  (0, s.jsx)("ul", {
                    children: E.map((u) =>
                      (0, s.jsx)(x, { game: u }, u.appid || u.shortcut_name),
                    ),
                  }),
                ],
              });
        }
        function x(a) {
          const { game: e } = a;
          return (0, s.jsx)("li", {
            children: (0, s.jsx)(O.N_, {
              to: (0, p.o)(
                e.appid ? { appid: e.appid } : { shortcut: e.shortcut_name },
              ),
              children: e.appid
                ? (0, s.jsx)(c, { appid: e.appid })
                : e.shortcut_name,
            }),
          });
        }
        function c(a) {
          const { appid: e } = a;
          return (0, v.X)(e)?.name;
        }
        var A = "10986482";
        function g(a) {
          return (0, s.jsxs)(d.dO, {
            children: [
              (0, s.jsx)(d.qh, {
                path: p.O.List(),
                children: (0, s.jsx)(h, {}),
              }),
              (0, s.jsx)(d.qh, {
                path: p.O.AppNotes(":appid", ":noteid?"),
                children: (0, s.jsx)(P.u, {}),
              }),
              (0, s.jsx)(d.qh, {
                path: p.O.ShortcutNotes(":shortcut_name", ":noteid?"),
                children: (0, s.jsx)(P.u, {}),
              }),
              (0, s.jsx)(d.qh, {
                children: (0, s.jsx)(d.rd, { to: `${(0, p.o)(a.noteParent)}` }),
              }),
            ],
          });
        }
      },
    },
  ]);
})();
//# sourceMappingURL=file:///home/buildbot/buildslave/npm-coordinator-rel-steamui/build/client/steamui/sourcemaps/gamenotes.js.map
