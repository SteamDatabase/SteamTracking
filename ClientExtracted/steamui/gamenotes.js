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
        r = n(1528),
        p = n(63696),
        l = n(49519),
        s = n(67808),
        u = n(73259),
        c = n(45264),
        i = n(21618),
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
            ? p.createElement(N, { popup: t, refPopup: o })
            : p.createElement(P, { popup: t, refPopup: o })
        );
      }
      function P(e) {
        const { popup: t, refPopup: n } = e,
          a = (0, E.we)("#GameNotes_NoteForGame", t.display_name);
        return p.createElement(
          s.p,
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
              p.createElement(_, {
                noteParent: t.noteParent,
                noteid: t.noteid,
              }),
            ),
          ),
        );
      }
      function _(e) {
        const { noteParent: t, noteid: n } = e,
          { data: a } = (0, c.P6)(t, n);
        return a ? p.createElement(i.U, { note: a }) : null;
      }
      function N(e) {
        const { popup: t, refPopup: n } = e,
          a = t.noteParent,
          s = p.useMemo(() => [(0, u.o)(a)], [a]);
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
            { initialEntries: s },
            p.createElement(
              o.A,
              { mode: "page", closePopup: () => t.close() },
              p.createElement(r.default, { noteParent: a }),
            ),
          ),
        );
      }
    },
    1528: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => S });
      var a = n(63696),
        o = n(49519),
        r = n(73259),
        p = n(74751),
        l = n(39941),
        s = n(45264),
        u = n(11682),
        c = n.n(u),
        i = n(61416),
        m = n(12176),
        d = n(10812),
        E = n(46382),
        f = n(43691),
        h = n(44846);
      let P;
      const _ = 864e5;
      function N(e) {
        return `appinfo_${e}_${f.TS.LANGUAGE}`;
      }
      function g(e) {
        return Boolean(e && Date.now() - e.timeCached < _);
      }
      function w(e) {
        const t = (0, E.KV)(),
          n = (0, E.rX)();
        return (0, i.I)({
          queryKey: ["appinfo", e],
          queryFn: async () =>
            (function (e, t) {
              return (
                P ||
                  (P = new (c())(
                    async (n) => {
                      const a = new Map();
                      (await Promise.all(n.map((e) => t.GetObject(N(e)))))
                        .filter(g)
                        .forEach(({ value: e }) => a.set(e.appid, e));
                      const o = n.slice().filter((e) => !a.has(e));
                      if (o.length) {
                        const n = m.w.Init(d._z);
                        n.Body().set_language((0, h.sf)(f.TS.LANGUAGE)),
                          n.Body().set_appids(o);
                        const r = await d.BE.GetApps(e, n);
                        if (1 != r.GetEResult()) throw r.GetErrorMessage();
                        r.Body()
                          .toObject()
                          .apps.forEach((e) => {
                            t.StoreObject(N(e.appid), {
                              timeCached: Date.now(),
                              value: e,
                            }),
                              a.set(e.appid, e);
                          });
                      }
                      return n.map((e) => a.get(e));
                    },
                    { cache: !1 },
                  )),
                P
              );
            })(t, n).load(e),
          staleTime: _,
          enabled: !!e,
        }).data;
      }
      var y = n(26853),
        G = n(46108);
      function O() {
        const { data: e, isLoading: t } = (0, s.Yh)(),
          n = a.useMemo(
            () => e?.slice().sort((e, t) => t.last_modified - e.last_modified),
            [e],
          );
        return t
          ? a.createElement(y.t, { msDelayAppear: 300 })
          : a.createElement(
              "div",
              null,
              a.createElement(
                "h1",
                null,
                (0, G.we)("#UserGameNotes_NotesList"),
              ),
              a.createElement(
                "ul",
                null,
                n.map((e) =>
                  a.createElement(b, {
                    key: e.appid || e.shortcut_name,
                    game: e,
                  }),
                ),
              ),
            );
      }
      function b(e) {
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
            t.appid ? a.createElement(A, { appid: t.appid }) : t.shortcut_name,
          ),
        );
      }
      function A(e) {
        const { appid: t } = e,
          n = w(t);
        return n?.name;
      }
      function S(e) {
        return a.createElement(
          o.dO,
          null,
          a.createElement(o.qh, { path: r.O.List() }, a.createElement(O, null)),
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
]); //# sourceMappingURL=file:///home/buildbot/buildslave/npm-coordinator-rel-steamui/build/client/steamui/sourcemaps/gamenotes.js.map
