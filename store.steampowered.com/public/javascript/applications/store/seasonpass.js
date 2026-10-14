/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [85139],
    {
      64193: (c, u, a) => {
        "use strict";
        a.r(u),
          a.d(u, {
            SeasonPassDisplayFromStoreBrowse: () => U,
            default: () => x,
          });
        var e = a(7850),
          j = a(72849),
          m = a(72609),
          D = a(90626),
          g = a(48421),
          P = a(77495),
          y = a(11512),
          I = a(19188),
          A = a(72865),
          R = a(83482),
          E = a(84676),
          L = a(1431),
          v = a.n(L);
        const B = { include_assets: !0, include_basic_info: !0 };
        function N(o) {
          const { appid: s } = o,
            [t] = (0, E.t7)(s, B),
            n = (0, A.n9)();
          return !t || !s
            ? null
            : (0, e.jsx)("div", {
                className: v().StoreItemCtn,
                children: (0, e.jsx)("div", {
                  className: v().StoreItemRow,
                  children: (0, e.jsxs)("a", {
                    href: (0, R.wJ)(t.GetStorePageURL(), n),
                    children: [
                      (0, e.jsx)("img", {
                        src: t.GetAssets().GetSmallCapsuleURL(),
                      }),
                      (0, e.jsxs)("div", {
                        className: v().StoreItemDescription,
                        children: [t.GetShortDescription(), " "],
                      }),
                    ],
                  }),
                }),
              });
        }
        var T = a(51079),
          C = a(45497),
          G = a(36707),
          l = a(18210),
          $ = a(53411),
          r = a.n($),
          h = a(29522),
          S = a(40358),
          F = a(47875);
        function U(o) {
          const { appid: s } = o,
            t = (0, h.$5)(s),
            { data: n } = (0, S._F)(t);
          return n?.season_pass
            ? (0, e.jsx)(x, { season_pass: n.season_pass })
            : null;
        }
        function x(o) {
          const { season_pass: s } = o;
          if (!s || !s.milestones || s.milestones.length == 0) return null;
          const t = s.milestones.every((n) => !!n.shipped);
          return (0, e.jsx)(T.Ay, {
            feature: "seasonpassproductpage",
            children: (0, e.jsxs)("div", {
              className:
                "game_area_description overflow_allowed season_pass_area",
              children: [
                (0, e.jsx)("h2", { children: (0, l.we)("#SeasonPass_Header") }),
                !t &&
                  (0, e.jsxs)(e.Fragment, {
                    children: [
                      (0, e.jsx)("p", {
                        children: (0, l.oW)("#SeasonPass_Incomplete_Desc"),
                      }),
                      (0, e.jsx)("p", {
                        children: (0, l.oW)(
                          "#SeasonPass_Incomplete_Desc2",
                          (0, e.jsx)("a", {
                            href: `${m.TS.STORE_BASE_URL}account/notificationsettings`,
                          }),
                        ),
                      }),
                    ],
                  }),
                s.milestones
                  .sort((n, i) =>
                    n.shipped && i.shipped
                      ? (n.rtime_complete ?? 0) - (i.rtime_complete ?? 0)
                      : n.shipped
                        ? -1
                        : i.shipped
                          ? 1
                          : f(n) - f(i),
                  )
                  .map((n) =>
                    (0, e.jsx)(
                      O,
                      { baseGameAppID: s.appid, milestone: n },
                      "ms_" + n.milestone_id,
                    ),
                  ),
              ],
            }),
          });
        }
        function f(o) {
          const s = o.dates ?? [];
          return s[s.length - 1]?.rtime ?? 0;
        }
        function O(o) {
          const { milestone: s, baseGameAppID: t } = o,
            n = (s.milestone_desc?.length ?? 0) > 0;
          return (0, e.jsxs)("div", {
            className: r().SeasonPass,
            children: [
              (0, e.jsxs)("div", {
                className: (0, G.A)(r().Title, !!s.shipped && r().Shipped),
                children: [
                  (0, e.jsxs)("span", {
                    children: [
                      !!s.shipped && "\u2713",
                      "\xA0",
                      l.A0.GetTokenWithFallback(s.title ?? []),
                    ],
                  }),
                  (0, e.jsx)("div", {
                    className: r().DateAndControl,
                    children: (0, e.jsx)(W, { milestone: s }),
                  }),
                ],
              }),
              n && (0, e.jsx)(M, { milestone: s, baseGameAppID: t }),
            ],
          });
        }
        function M(o) {
          const { milestone: s, baseGameAppID: t } = o,
            n = l.A0.GetTokenWithFallback(s.milestone_desc ?? []),
            i = s.appid || s.coming_soon_appid;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              i ? (0, e.jsx)(N, { appid: i }) : null,
              (0, e.jsxs)("div", {
                className: r().Description,
                children: [
                  (0, e.jsx)(C.n, { text: n }),
                  !!s.shipped &&
                    (0, e.jsx)(z, { milestone: s, baseGameAppID: t }),
                ],
              }),
            ],
          });
        }
        function W(o) {
          const { milestone: s } = o;
          if (s.shipped) return (0, e.jsx)(H, { milestone: s });
          const t = s.dates ?? [],
            n = t[0]?.rtime ?? 0,
            i = t.filter((p, d) => d == 0 || (p.rtime ?? 0) < n);
          return (0, e.jsx)("div", {
            className: r().Upcoming,
            children: (0, l.PP)(
              "#SeasonPass_Release_Date",
              (0, e.jsx)("br", {}),
              [...i].reverse().map((p, d) => {
                const X = (0, y.M)(
                  p.coming_soon_display_type,
                  p.rtime ?? 0,
                  void 0,
                  !0,
                );
                return (0, e.jsx)(
                  "div",
                  {
                    className: d + 1 < i.length ? r().Strike : void 0,
                    children: X,
                  },
                  "dd" + p.rtime + p.coming_soon_display_type,
                );
              }),
            ),
          });
        }
        function H(o) {
          const { milestone: s } = o,
            t = (0, h.$5)(s.appid),
            { data: n } = (0, S.by)(t),
            i = n?.steam_release_date || s.rtime_complete || 0;
          return (0, e.jsx)("div", {
            className: r().Shipped,
            children: (0, l.PP)(
              "#SeasonPass_Released_Date",
              (0, e.jsx)("br", {}),
              (0, l.TW)(i),
            ),
          });
        }
        function z(o) {
          const { milestone: s, baseGameAppID: t } = o;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("div", {
                className: r().Status,
                children: (0, l.PP)(
                  s.appid
                    ? "#SeasonPass_DLC_Status"
                    : "#SeasonPass_Event_Status",
                ),
              }),
              !!s.appid && (0, e.jsx)(Z, { milestone: s }),
              !!(s.appid && s.event_gid) &&
                (0, e.jsx)("span", { className: r().Padding }),
              !!s.event_gid &&
                (0, e.jsx)(J, { milestone: s, baseGameAppID: t }),
            ],
          });
        }
        function Z(o) {
          const { milestone: s } = o,
            t = (0, h.$5)(s.appid),
            { data: n } = (0, S.J$)(t);
          return (0, e.jsx)("a", {
            href: (0, F._)(n) || `${m.TS.STORE_BASE_URL}app/${s.appid}`,
            children: (0, l.we)("#SeasonPass_ShowStore"),
          });
        }
        function J(o) {
          const { milestone: s, baseGameAppID: t } = o,
            [n, i] = (0, D.useState)(!1),
            p = (0, g.RR)(s.event_gid ?? "");
          return p
            ? (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)("a", {
                    href: `${m.TS.STORE_BASE_URL}news/app/${t}/view/${s.event_gid}`,
                    onClick: (d) => {
                      d.preventDefault(), d.stopPropagation(), i(!0);
                    },
                    children: (0, l.we)("#SeasonPass_ReadEvent"),
                  }),
                  !!n &&
                    (0, e.jsx)(I.N, {
                      appid: t,
                      eventModel: p,
                      announcementGID: p.AnnouncementGID,
                      closeModal: () => i(!1),
                      partnerEventStore: P.O3,
                      bShowOnlyInitialEvent: !0,
                      showAppHeader: !0,
                      trackingLocation: j.Tc.j$,
                    }),
                ],
              })
            : (0, e.jsx)("a", {
                href: `${m.TS.STORE_BASE_URL}news/app/${t}/view/${s.event_gid}`,
                children: (0, l.we)("#SeasonPass_ReadEvent"),
              });
        }
      },
      53411: (c) => {
        c.exports = {
          SeasonPass: "_3gfJe6nIkr6ZriDDPYp-z7",
          Description: "_3sdNbLRZYrhEi9HWS1XAdu",
          Title: "_3u0Ar8iq66LfqUbdXK2Scn",
          Shipped: "_14Z4vFKjBcbizLEXIFSvWg",
          DateAndControl: "_1bjdoxghswkEhrMsa43lpE",
          Upcoming: "_2P0yy2pWYDXAg02ywBc6xc",
          Status: "_2_JVEcPrnkP9U8YnlcUaV7",
          Content: "FL3zV7J5DHOjOZzklSfsu",
          Text: "_2bVkdku0nL6ga2QxSvR0Np",
          Padding: "_3ENBi7dhQgbnK6NpZ-ut67",
          Strike: "_33nXsC2--p10FL6D9ICf9W",
          Chevron: "z1O0vP7Inz1H3vHuEjrUl",
        };
      },
      1431: (c) => {
        c.exports = {
          StoreItemCtn: "_2SxhiHrQSCtBnKf3oKdon2",
          StoreItemRow: "_3cBgZqhPaJpdeZl8hARr1o",
          StoreItemDescription: "_2pkGLftA9XILpaWN0kejPk",
        };
      },
    },
  ]);
})();
