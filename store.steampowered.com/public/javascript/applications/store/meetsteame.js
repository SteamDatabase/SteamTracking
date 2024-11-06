/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [5667],
  {
    20019: (e, t, n) => {
      function r(e) {
        switch (e) {
          case 0:
            return "game";
          case 6:
            return "software";
          case 1:
            return "demo";
          case 4:
            return "dlc";
          case 7:
          case 3:
            return "video";
          case 11:
            return "music";
          case 12:
            return "beta";
          case 2:
            return "mod";
        }
        return "invalid";
      }
      n.d(t, { U: () => r });
    },
    51219: (e, t, n) => {
      n.r(t), n.d(t, { default: () => v });
      var r = n(82715),
        a = n(22837),
        s = n(2160),
        c = n(66418),
        l = n(90626),
        u = n(92757),
        i = n(60746),
        o = n(91254),
        d = n(30756),
        m = n(77156),
        E = n(22797),
        f = n(61859),
        g = n(43068);
      function v(e) {
        const { gid: t } = (0, u.g)(),
          [n, v] = (0, l.useState)(!0);
        if (
          (l.useEffect(() => {
            n &&
              (o.O3.Init(), Promise.all([i.KN.InitGlobal()]).then(() => v(!1)));
          }, [n]),
          n)
        )
          return l.createElement(E.t, {
            string: (0, f.we)("#Loading"),
            position: "center",
          });
        const h = o.O3.GetClanEventModel(t);
        return l.createElement(
          r.tH,
          null,
          l.createElement(m.jA, {
            lang: (0, a.sf)(c.T.LANGUAGE),
            event: h,
            adminPanel:
              c.T.EREALM === s.TU.k_ESteamRealmChina
                ? l.createElement(g.P, { eventModel: h })
                : l.createElement(d.g, { eventModel: h }),
          }),
        );
      }
    },
  },
]);
