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
      n.r(t), n.d(t, { default: () => h });
      var r = n(82715),
        a = n(22837),
        s = n(2160),
        c = n(8527),
        l = n(90626),
        i = n(92757),
        u = n(60746),
        o = n(6379),
        d = n(30756),
        m = n(40224),
        E = n(22797),
        f = n(61859),
        v = n(43068);
      function h(e) {
        const { gid: t } = (0, i.g)(),
          [n, h] = (0, l.useState)(!0);
        if (
          (l.useEffect(() => {
            n &&
              (o.O3.Init(), Promise.all([u.KN.InitGlobal()]).then(() => h(!1)));
          }, [n]),
          n)
        )
          return l.createElement(E.t, {
            string: (0, f.we)("#Loading"),
            position: "center",
          });
        const p = o.O3.GetClanEventModel(t);
        return l.createElement(
          r.tH,
          null,
          !p.BIsUnlistedEvent() &&
            l.createElement(
              "div",
              null,
              "NOTE: Event needs to be published in unlisted mode for Steam partners to see it. Admin account bypass this check",
            ),
          l.createElement(m.jA, {
            lang: (0, a.sf)(c.TS.LANGUAGE),
            event: p,
            adminPanel:
              c.TS.EREALM === s.TU.k_ESteamRealmChina
                ? l.createElement(v.P, { eventModel: p })
                : l.createElement(d.g, { eventModel: p, bSupportsSticky: !0 }),
          }),
        );
      }
    },
  },
]);
