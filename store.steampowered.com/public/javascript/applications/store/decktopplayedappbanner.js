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
        Adventurer: "raNwGKfW_4_WgrvVN7dq_",
        Anime: "EwXMZcXfMhx8IXHsX2jwt",
        Apocalypse: "IXTWgAQld_EMABNkCGbWH",
        Astronaut: "LNbx62cQQ_D4Ln0UFRSZR",
        Beach: "_3PDsNvk9wHPIT_meJVEv39",
        Bed: "_3diT7BTktlk0puAWr6yL9w",
        Bus: "lZhhgVZvpy277i5CIZsxv",
        BusStop: "_3uXZSulc-St3wA_mxmp0A_",
        Campfire: "yBV0Z8rYkNE2hhalghMvt",
        Car: "_2Z4fMLt-xMQ9mMYQ6F8Apk",
        City: "ZNsKNiDvYdo0fdE1DD7M0",
        Family: "f5iMmXzfk0F0i8JDhk-0G",
        Farmer: "_34SPdiHy-XcKAe7xr1tUCM",
        Knight: "_3LVfeJCSquA6caK-yXajmH",
        Miner: "_1YxR3MFhDWSooqc0R5jKLw",
        Porch: "_2z91XhCKqvwmYqkRndpTq3",
        Robot: "_1jvo4urjLahEQx0CgrItEb",
        Superhero: "_2v6byLboEtxj9hPQ_kgSJz",
        Woodsman: "urO4erFoFvnP14FJ41NMD",
        Zombies: "_3OCIBFe-fNBm1tXmL490m4",
      };
    },
    88340: (e, a, r) => {
      "use strict";
      r.d(a, { CJ: () => m, ux: () => i, wy: () => s });
      var n = r(30470),
        t = r(24484);
      const s = 2 == n.TS.EUNIVERSE ? 404860 : 1675200,
        p = ["HK", "JP", "KR", "TW"],
        l =
          2 == n.TS.EUNIVERSE
            ? [501556, 501557, 501558, 502103, 502106]
            : [595603, 595604, 595605, 946113, 946114];
      function m(e) {
        return e.some((e) => l.includes(e)) && p.includes(n.iA.country_code);
      }
      const c = 1700157600,
        o = 2 == n.TS.EUNIVERSE ? [502103, 502106] : [946113, 946114, 946115];
      function i(e) {
        if (o.includes(e)) {
          const e = (0, t.Tc)("server_rtime", "application_config");
          if (e && c > e) return c;
        }
      }
    },
    63392: (e, a, r) => {
      "use strict";
      r.r(a), r.d(a, { default: () => y });
      var n = r(61723),
        t = r.n(n),
        s = r(90626),
        p = r(52038),
        l = r(61859),
        m = r(30470),
        c = r(88340),
        o = r(91674);
      const i = new Map([
          [
            1245620,
            { strInternalAppName: "EldenRing", strBannerType: "campfire" },
          ],
          [
            413150,
            { strInternalAppName: "StardewValley", strBannerType: "farmer" },
          ],
          [2379780, { strInternalAppName: "Balatro", strBannerType: "bus" }],
          [
            1086940,
            { strInternalAppName: "BaldursGate3", strBannerType: "knight" },
          ],
          [
            1868140,
            { strInternalAppName: "DaveTheDiver", strBannerType: "beach" },
          ],
          [1145360, { strInternalAppName: "Hades", strBannerType: "campfire" }],
          [
            377160,
            { strInternalAppName: "Fallout4", strBannerType: "apocalypse" },
          ],
          [
            1794680,
            {
              strInternalAppName: "VampireSurvivors",
              strBannerType: "zombies",
            },
          ],
          [
            271590,
            { strInternalAppName: "GrandTheftAutoV", strBannerType: "car" },
          ],
          [
            1145350,
            { strInternalAppName: "Hades2", strBannerType: "campfire" },
          ],
          [
            1293830,
            { strInternalAppName: "ForzaHorizon4", strBannerType: "car" },
          ],
          [
            2321470,
            {
              strInternalAppName: "DeepRockGalacticSurvivor",
              strBannerType: "miner",
            },
          ],
          [
            1091500,
            { strInternalAppName: "Cyberpunk2077", strBannerType: "robot" },
          ],
          [
            2552430,
            { strInternalAppName: "KingdomHearts", strBannerType: "family" },
          ],
          [
            292030,
            { strInternalAppName: "TheWitcher3", strBannerType: "campfire" },
          ],
          [
            1174180,
            {
              strInternalAppName: "RedDeadRedemption2",
              strBannerType: "campfire",
            },
          ],
          [
            646570,
            { strInternalAppName: "SlayTheSpire", strBannerType: "city" },
          ],
          [
            275850,
            { strInternalAppName: "NoMansSky", strBannerType: "astronaut" },
          ],
          [
            990080,
            { strInternalAppName: "HogwartsLegacy", strBannerType: "family" },
          ],
          [
            250900,
            {
              strInternalAppName: "TheBindingOfIsaacRebirth",
              strBannerType: "busstop",
            },
          ],
          [489830, { strInternalAppName: "Skyrim", strBannerType: "knight" }],
          [2344520, { strInternalAppName: "Diablo4", strBannerType: "knight" }],
          [1942280, { strInternalAppName: "Brotato", strBannerType: "bus" }],
          [
            582010,
            {
              strInternalAppName: "MonsterHunterWorld",
              strBannerType: "campfire",
            },
          ],
          [
            1623730,
            { strInternalAppName: "Palworld", strBannerType: "woodsman" },
          ],
          [
            553850,
            { strInternalAppName: "HELLDIVERS2", strBannerType: "porch" },
          ],
          [
            504230,
            { strInternalAppName: "Celeste", strBannerType: "adventurer" },
          ],
          [
            632470,
            { strInternalAppName: "DiscoElysium", strBannerType: "city" },
          ],
          [588650, { strInternalAppName: "DeadCells", strBannerType: "bus" }],
          [
            227300,
            { strInternalAppName: "EuroTruckSimulator2", strBannerType: "car" },
          ],
        ]),
        N = new Map([
          ["adventurer", { className: t().Adventurer }],
          ["anime", { className: t().Anime }],
          ["apocalypse", { className: t().Apocalypse }],
          ["astronaut", { className: t().Astronaut }],
          ["beach", { className: t().Beach }],
          ["bed", { className: t().Bed }],
          ["bus", { className: t().Bus }],
          ["busstop", { className: t().BusStop }],
          ["campfire", { className: t().Campfire }],
          ["car", { className: t().Car }],
          ["city", { className: t().City }],
          ["family", { className: t().Family }],
          ["farmer", { className: t().Farmer }],
          ["knight", { className: t().Knight }],
          ["miner", { className: t().Miner }],
          ["porch", { className: t().Porch }],
          ["robot", { className: t().Robot }],
          ["superhero", { className: t().Superhero }],
          ["woodsman", { className: t().Woodsman }],
          ["zombies", { className: t().Zombies }],
        ]);
      function y(e) {
        const { appid: a } = e,
          r = (function (e) {
            return i.get(e);
          })(a);
        return r ? s.createElement(B, { appBannerDef: r, ...e }) : null;
      }
      function B(e) {
        const { appid: a, appBannerDef: r, app_name: n } = e,
          i = ((y = r.strBannerType), N.get(y));
        var y;
        const B = (0, o.aL)(
          m.TS.STORE_BASE_URL +
            `app/${c.wy}?deckapp=${a}&utm_source=topplayed_app_banner&utm_campaign=${a}`,
          "topplayed_app_banner",
          a,
        );
        return i
          ? s.createElement(
              "div",
              { className: t().BannerWrapper },
              s.createElement(
                "div",
                { className: t().BannerTitle },
                s.createElement("div", { className: t().DeckLogo }),
                (0, l.we)("#DeckTopPlayedAppBanner_Title"),
              ),
              s.createElement(
                "a",
                {
                  href: B,
                  className: (0, p.A)(t().TopPlayedBannerCtn, i.className),
                },
                s.createElement(
                  "div",
                  { className: t().BannerRightContent },
                  s.createElement(
                    "div",
                    { className: t().BannerHeader },
                    (0, l.we)("#DeckTopPlayedAppBanner_Header"),
                  ),
                  s.createElement(
                    "div",
                    { className: t().BannerGameText },
                    (0, l.PP)(
                      "#DeckTopPlayedAppBanner_GameText",
                      s.createElement("span", null, n),
                    ),
                  ),
                ),
              ),
            )
          : (console.warn(`No banner type found for ${r.strBannerType}`), null);
      }
    },
  },
]);
