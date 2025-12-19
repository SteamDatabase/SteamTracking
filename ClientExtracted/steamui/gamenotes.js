(self.webpackChunksteamui = self.webpackChunksteamui || []).push([
  [1220],
  {
    39889: (e) => {
      e.exports = { GameNotesPopup: "_3hIt9g_59KauEV2uSNK6Ct" };
    },
    44840: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => h });
      var a = n(63098),
        o = n(34394),
        r = n(55518),
        p = n(63696),
        l = n(49519),
        u = n(67808),
        s = n(73259),
        c = n(45264),
        i = n(38134),
        m = n(64608),
        d = n(10606),
        E = n(46108),
        f = n(39889);
      function h(e) {
        const { popup: t } = e,
          [n, o] = p.useState();
        return (
          p.useEffect(() => {
            if (n)
              return a.U.RegisterPopup(t, () =>
                n.SteamClient.Window.BringToFront(),
              );
          }, [t, n]),
          void 0 === t.noteid
            ? p.createElement(_, { popup: t, refPopup: o })
            : p.createElement(P, { popup: t, refPopup: o })
        );
      }
      function P(e) {
        const { popup: t, refPopup: n } = e,
          a = (0, E.we)("#GameNotes_NoteForGame", t.display_name);
        return p.createElement(
          u.p,
          { body_class: f.GameNotesPopup },
          p.createElement(
            d.hM,
            {
              strName: t.id,
              strTitle: a,
              onDismiss: () => t.close(),
              popupWidth: 500,
              popupHeight: 500,
              resizable: !0,
              refPopup: n,
              className: "TODO",
            },
            p.createElement(m.Y9, null, a),
            p.createElement(
              o.A,
              { mode: "single", closePopup: () => t.close() },
              p.createElement(N, {
                noteParent: t.noteParent,
                noteid: t.noteid,
              }),
            ),
          ),
        );
      }
      function N(e) {
        const { noteParent: t, noteid: n } = e,
          { data: a } = (0, c.P6)(t, n);
        return a ? p.createElement(i.U, { note: a }) : null;
      }
      function _(e) {
        const { popup: t, refPopup: n } = e,
          a = t.noteParent,
          u = p.useMemo(() => [(0, s.o)(a)], [a]);
        return p.createElement(
          d.hM,
          {
            strName: t.id,
            strTitle: t.display_name,
            onDismiss: () => t.close(),
            popupWidth: 900,
            popupHeight: 830,
            resizable: !0,
            refPopup: n,
            className: "TODO",
          },
          p.createElement(
            l.fS,
            { initialEntries: u },
            p.createElement(
              o.A,
              { mode: "page", closePopup: () => t.close() },
              p.createElement(r.default, { noteParent: a }),
            ),
          ),
        );
      }
    },
    55518: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => f });
      var a = n(63696),
        o = n(49519),
        r = n(73259),
        p = n(74751),
        l = n(39941),
        u = n(45264),
        s = n(35395),
        c = n(26853),
        i = n(46108);
      function m() {
        const { data: e, isLoading: t } = (0, u.Yh)(),
          n = a.useMemo(
            () => e?.slice().sort((e, t) => t.last_modified - e.last_modified),
            [e],
          );
        return t
          ? a.createElement(c.t, { msDelayAppear: 300 })
          : a.createElement(
              "div",
              null,
              a.createElement(
                "h1",
                null,
                (0, i.we)("#UserGameNotes_NotesList"),
              ),
              a.createElement(
                "ul",
                null,
                n.map((e) =>
                  a.createElement(d, {
                    key: e.appid || e.shortcut_name,
                    game: e,
                  }),
                ),
              ),
            );
      }
      function d(e) {
        const { game: t } = e;
        return a.createElement(
          "li",
          null,
          a.createElement(
            l.N_,
            {
              to: (0, r.o)(
                t.appid ? { appid: t.appid } : { shortcut: t.shortcut_name },
              ),
            },
            t.appid ? a.createElement(E, { appid: t.appid }) : t.shortcut_name,
          ),
        );
      }
      function E(e) {
        const { appid: t } = e,
          n = (0, s.X)(t);
        return n?.name;
      }
      function f(e) {
        return a.createElement(
          o.dO,
          null,
          a.createElement(o.qh, { path: r.O.List() }, a.createElement(m, null)),
          a.createElement(
            o.qh,
            { path: r.O.AppNotes(":appid", ":noteid?") },
            a.createElement(p.u, null),
          ),
          a.createElement(
            o.qh,
            { path: r.O.ShortcutNotes(":shortcut_name", ":noteid?") },
            a.createElement(p.u, null),
          ),
          a.createElement(
            o.qh,
            null,
            a.createElement(o.rd, { to: `${(0, r.o)(e.noteParent)}` }),
          ),
        );
      }
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/npm-coordinator-hotfix-steamui/build/client/steamui/sourcemaps/gamenotes.js.map
