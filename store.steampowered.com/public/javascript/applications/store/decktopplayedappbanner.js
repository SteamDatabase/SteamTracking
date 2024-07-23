/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [3303],
  {
    61723: (e) => {
      e.exports = {
        TopPlayedBannerCtn: "_28-JzhtXHYEcY9I5iFk3YP",
        DeckLogo: "E-ox_4OryQdke1181LNoB",
        BannerTitle: "s1wKhoJ4gbSLtf27P3_EZ",
        BannerRightContent: "_34ZA0IltnucVU_mKBtcc8E",
        BannerHeader: "_2whUPn_CZ5_BidCN9GODA5",
        BannerGameText: "OXgVBMVdP9Ecu6IgqZ3_n",
        Campfire: "yBV0Z8rYkNE2hhalghMvt",
        Farmer: "_34SPdiHy-XcKAe7xr1tUCM",
      };
    },
    88340: (e, a, n) => {
      "use strict";
      n.d(a, { CJ: () => p, ux: () => i, wy: () => t });
      var r = n(30470),
        s = n(24484);
      const t = 2 == r.TS.EUNIVERSE ? 404860 : 1675200,
        c = ["HK", "JP", "KR", "TW"],
        l =
          2 == r.TS.EUNIVERSE
            ? [501556, 501557, 501558, 502103, 502106]
            : [595603, 595604, 595605, 946113, 946114];
      function p(e) {
        return e.some((e) => l.includes(e)) && c.includes(r.iA.country_code);
      }
      const m = 1700157600,
        o = 2 == r.TS.EUNIVERSE ? [502103, 502106] : [946113, 946114, 946115];
      function i(e) {
        if (o.includes(e)) {
          const e = (0, s.Tc)("server_rtime", "application_config");
          if (e && m > e) return m;
        }
      }
    },
    63392: (e, a, n) => {
      "use strict";
      n.r(a), n.d(a, { default: () => u });
      var r = n(61723),
        s = n.n(r),
        t = n(90626),
        c = n(52038),
        l = n(61859),
        p = n(32630),
        m = n(30470),
        o = n(88340);
      const i = new Map([
          [
            1245620,
            { strInternalAppName: "EldenRing", strBannerType: "campfire" },
          ],
          [
            413150,
            { strInternalAppName: "StardewValley", strBannerType: "farmer" },
          ],
        ]),
        d = new Map([
          ["adventurer", { className: s().Adventurer }],
          ["anime", { className: s().Anime }],
          ["apocalypse", { className: s().Apocalypse }],
          ["astronaut", { className: s().Astronaut }],
          ["beach", { className: s().Beach }],
          ["bed", { className: s().Bed }],
          ["bus", { className: s().Bus }],
          ["busstop", { className: s().BusStop }],
          ["campfire", { className: s().Campfire }],
          ["car", { className: s().Car }],
          ["city", { className: s().City }],
          ["family", { className: s().Family }],
          ["farmer", { className: s().Farmer }],
          ["knight", { className: s().Knight }],
          ["miner", { className: s().Miner }],
          ["porch", { className: s().Porch }],
          ["robot", { className: s().Robot }],
          ["superhero", { className: s().Superhero }],
          ["woodsman", { className: s().Woodsman }],
          ["zombies", { className: s().Zombies }],
        ]);
      function u(e) {
        const { appid: a } = e,
          n = (function (e) {
            return i.get(e);
          })(a);
        return n ? t.createElement(N, { appBannerDef: n, ...e }) : null;
      }
      function N(e) {
        const { appid: a, appBannerDef: n, app_name: r } = e,
          i = ((u = n.strBannerType), d.get(u));
        var u;
        const N = (0, p.aL)(
          m.TS.STORE_BASE_URL +
            `app/${o.wy}?deckapp=${a}&utm=topplayed_app_banner`,
          "topplayed_app_banner",
          a,
        );
        return i
          ? t.createElement(
              "div",
              { className: s().BannerWrapper },
              t.createElement(
                "div",
                { className: s().BannerTitle },
                t.createElement("div", { className: s().DeckLogo }),
                (0, l.we)("#DeckTopPlayedAppBanner_Title"),
              ),
              t.createElement(
                "a",
                {
                  href: N,
                  className: (0, c.A)(s().TopPlayedBannerCtn, i.className),
                },
                t.createElement(
                  "div",
                  { className: s().BannerRightContent },
                  t.createElement(
                    "div",
                    { className: s().BannerHeader },
                    (0, l.we)("#DeckTopPlayedAppBanner_Header"),
                  ),
                  t.createElement(
                    "div",
                    { className: s().BannerGameText },
                    (0, l.PP)(
                      "#DeckTopPlayedAppBanner_GameText",
                      t.createElement("span", null, r),
                    ),
                  ),
                ),
              ),
            )
          : (console.warn(`No banner type found for ${n.strBannerType}`), null);
      }
    },
  },
]);
