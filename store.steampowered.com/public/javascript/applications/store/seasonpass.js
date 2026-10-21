/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [85139],
    {
      64193: (p, f, t) => {
        "use strict";
        t.r(f),
          t.d(f, {
            SeasonPassDisplayFromStoreBrowse: () => H,
            default: () => D,
          });
        var e = t(7850),
          v = t(60351),
          P = t(57152),
          d = t(15252),
          m = t(86336),
          j = t(68031),
          I = t(17171),
          R = t(72849),
          S = t(72609),
          A = t(90626),
          B = t(48421),
          E = t(77495),
          T = t(11512),
          L = t(19188),
          G = t(72865),
          z = t(83482),
          C = t(84676),
          F = t(1431),
          u = t.n(F);
        const Y = { include_assets: !0, include_basic_info: !0 };
        function $(o) {
          const { appid: s } = o,
            [a] = (0, C.t7)(s, Y),
            n = (0, G.n9)(),
            i = a?.GetAssets();
          return !a || !s || !i
            ? null
            : (0, e.jsx)("div", {
                className: u().StoreItemCtn,
                children: (0, e.jsx)("div", {
                  className: u().StoreItemRow,
                  children: (0, e.jsxs)("a", {
                    href: (0, z.wJ)(a.GetStorePageURL(), n),
                    children: [
                      (0, e.jsx)("img", { src: i.GetSmallCapsuleURL() }),
                      (0, e.jsxs)("div", {
                        className: u().StoreItemDescription,
                        children: [a.GetShortDescription(), " "],
                      }),
                    ],
                  }),
                }),
              });
        }
        var M = t(51079),
          W = t(45497),
          N = t(36707),
          l = t(18210),
          O = t(53411),
          h = t.n(O),
          x = t(29522),
          g = t(40358),
          U = t(47875);
        function H(o) {
          const { appid: s } = o,
            a = (0, x.$5)(s),
            { data: n } = (0, g._F)(a);
          return n?.season_pass
            ? (0, e.jsx)(D, { season_pass: n.season_pass })
            : null;
        }
        function D(o) {
          const { season_pass: s } = o;
          if (!s || !s.milestones || s.milestones.length == 0) return null;
          const a = s.milestones.every((n) => !!n.shipped);
          return (0, e.jsx)(M.Ay, {
            feature: "seasonpassproductpage",
            children: (0, e.jsxs)(v.az, {
              marginTop: "5",
              children: [
                (0, e.jsx)(P.D, {
                  level: "2",
                  size: "2",
                  weight: "heavy",
                  contrast: "title",
                  marginBottom: "2",
                  children: (0, l.we)("#SeasonPass_Header"),
                }),
                !a &&
                  (0, e.jsxs)(e.Fragment, {
                    children: [
                      (0, e.jsx)(d.EY, {
                        as: "p",
                        size: "4",
                        contrast: "body",
                        marginBottom: "2",
                        children: (0, l.oW)("#SeasonPass_Incomplete_Desc"),
                      }),
                      (0, e.jsx)(d.EY, {
                        as: "p",
                        size: "4",
                        contrast: "body",
                        marginBottom: "2",
                        children: (0, l.oW)(
                          "#SeasonPass_Incomplete_Desc2",
                          (0, e.jsx)(m.Y, {
                            href: `${S.TS.STORE_BASE_URL}account/notificationsettings`,
                            contrast: "title",
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
                          : y(n) - y(i),
                  )
                  .map((n) =>
                    (0, e.jsx)(
                      J,
                      { baseGameAppID: s.appid, milestone: n },
                      "ms_" + n.milestone_id,
                    ),
                  ),
              ],
            }),
          });
        }
        function y(o) {
          const s = o.dates ?? [];
          return s[s.length - 1]?.rtime ?? 0;
        }
        function J(o) {
          const { milestone: s, baseGameAppID: a } = o,
            n = (s.milestone_desc?.length ?? 0) > 0;
          return (0, e.jsxs)(v.az, {
            className: h().SeasonPass,
            marginBottom: "2",
            children: [
              (0, e.jsxs)(j.s, {
                className: (0, N.A)(h().Title, !!s.shipped && h().Shipped),
                justify: "between",
                align: "center",
                padding: "3",
                children: [
                  (0, e.jsxs)(d.EY, {
                    size: "4",
                    weight: "medium",
                    color: s.shipped ? "lime-11" : void 0,
                    contrast: "title",
                    children: [
                      !!s.shipped && "\u2713",
                      "\xA0",
                      l.A0.GetTokenWithFallback(s.title ?? []),
                    ],
                  }),
                  (0, e.jsx)(X, { milestone: s }),
                ],
              }),
              n && (0, e.jsx)(K, { milestone: s, baseGameAppID: a }),
            ],
          });
        }
        function K(o) {
          const { milestone: s, baseGameAppID: a } = o,
            n = l.A0.GetTokenWithFallback(s.milestone_desc ?? []),
            i = s.appid || s.coming_soon_appid;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              i ? (0, e.jsx)($, { appid: i }) : null,
              (0, e.jsx)(v.az, {
                padding: "4",
                children: (0, e.jsxs)(d.EY, {
                  as: "div",
                  size: "4",
                  color: "greyneutral-12",
                  children: [
                    (0, e.jsx)(W.n, { text: n }),
                    !!s.shipped &&
                      (0, e.jsx)(Q, { milestone: s, baseGameAppID: a }),
                  ],
                }),
              }),
            ],
          });
        }
        function X(o) {
          const { milestone: s } = o;
          if (s.shipped) return (0, e.jsx)(Z, { milestone: s });
          const a = s.dates ?? [],
            n = a[0]?.rtime ?? 0,
            i = a.filter((r, c) => c == 0 || (r.rtime ?? 0) < n);
          return (0, e.jsx)(d.EY, {
            as: "div",
            size: "3",
            weight: "light",
            color: "greyneutral-12",
            align: "end",
            children: (0, l.PP)(
              "#SeasonPass_Release_Date",
              (0, e.jsx)("br", {}),
              [...i].reverse().map((r, c) => {
                const b = (0, T.M)(
                  r.coming_soon_display_type,
                  r.rtime ?? 0,
                  void 0,
                  !0,
                );
                return (0, e.jsx)(
                  "div",
                  {
                    className: c + 1 < i.length ? h().Strike : void 0,
                    children: b,
                  },
                  "dd" + r.rtime + r.coming_soon_display_type,
                );
              }),
            ),
          });
        }
        function Z(o) {
          const { milestone: s } = o,
            a = (0, x.$5)(s.appid),
            { data: n } = (0, g.by)(a),
            i = n?.steam_release_date || s.rtime_complete || 0;
          return (0, e.jsx)(d.EY, {
            as: "div",
            size: "2",
            weight: "light",
            color: "lime-11",
            align: "end",
            children: (0, l.PP)(
              "#SeasonPass_Released_Date",
              (0, e.jsx)("br", {}),
              (0, l.TW)(i),
            ),
          });
        }
        function Q(o) {
          const { milestone: s, baseGameAppID: a } = o;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(I.w, {
                size: "4",
                color: "greyneutral-4",
                marginY: "3",
              }),
              (0, e.jsx)("div", {
                children: (0, l.PP)(
                  s.appid
                    ? "#SeasonPass_DLC_Status"
                    : "#SeasonPass_Event_Status",
                ),
              }),
              (0, e.jsxs)(j.s, {
                gap: "2",
                children: [
                  !!s.appid && (0, e.jsx)(V, { milestone: s }),
                  !!s.event_gid &&
                    (0, e.jsx)(w, { milestone: s, baseGameAppID: a }),
                ],
              }),
            ],
          });
        }
        function V(o) {
          const { milestone: s } = o,
            a = (0, x.$5)(s.appid),
            { data: n } = (0, g.J$)(a);
          return (0, e.jsx)(m.Y, {
            href: (0, U._)(n) || `${S.TS.STORE_BASE_URL}app/${s.appid}`,
            underline: "always",
            contrast: "title",
            children: (0, l.we)("#SeasonPass_ShowStore"),
          });
        }
        function w(o) {
          const { milestone: s, baseGameAppID: a } = o,
            [n, i] = (0, A.useState)(!1),
            r = (0, B.RR)(s.event_gid ?? "");
          return r
            ? (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)(m.W, {
                    underline: "always",
                    contrast: "title",
                    onClick: (c) => {
                      c.preventDefault(), c.stopPropagation(), i(!0);
                    },
                    children: (0, l.we)("#SeasonPass_ReadEvent"),
                  }),
                  !!n &&
                    (0, e.jsx)(L.N, {
                      appid: a,
                      eventModel: r,
                      announcementGID: r.AnnouncementGID,
                      closeModal: () => i(!1),
                      partnerEventStore: E.O3,
                      bShowOnlyInitialEvent: !0,
                      showAppHeader: !0,
                      trackingLocation: R.Tc.j$,
                    }),
                ],
              })
            : (0, e.jsx)(m.Y, {
                href: `${S.TS.STORE_BASE_URL}news/app/${a}/view/${s.event_gid}`,
                underline: "always",
                contrast: "title",
                children: (0, l.we)("#SeasonPass_ReadEvent"),
              });
        }
      },
      53411: (p) => {
        p.exports = {
          SeasonPass: "_3gfJe6nIkr6ZriDDPYp-z7",
          Title: "_3u0Ar8iq66LfqUbdXK2Scn",
          Shipped: "_14Z4vFKjBcbizLEXIFSvWg",
          Strike: "_33nXsC2--p10FL6D9ICf9W",
        };
      },
      1431: (p) => {
        p.exports = {
          StoreItemCtn: "_2SxhiHrQSCtBnKf3oKdon2",
          StoreItemRow: "_3cBgZqhPaJpdeZl8hARr1o",
          StoreItemDescription: "_2pkGLftA9XILpaWN0kejPk",
        };
      },
    },
  ]);
})();
