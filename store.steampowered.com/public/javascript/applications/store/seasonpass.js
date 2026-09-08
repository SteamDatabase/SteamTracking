/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [85139],
  {
    1431: (e) => {
      e.exports = {
        StoreItemCtn: "_2SxhiHrQSCtBnKf3oKdon2",
        StoreItemRow: "_3cBgZqhPaJpdeZl8hARr1o",
        StoreItemDescription: "_2pkGLftA9XILpaWN0kejPk",
      };
    },
    29298: (e) => {
      e.exports = {
        SeasonPass: "oa0Mg649faNiGrRBlXZ7b",
        Description: "_3ZmgNZ5nbBbDojlnZLRkgc",
        Title: "_1PoePgbQRAy0Sbtz2Po_R7",
        Shipped: "Y4pxifDaDKS1sYR7j-35X",
        DateAndControl: "_3-5TufllBcRHGRpNEAuY5u",
        Upcoming: "lZmBeL-zQf8GORGTr4uX-",
        Status: "_2uj7WLmhl5-zIS1NE_Ig-9",
        Content: "_1Axq2b2LqJszxamtTvrnTV",
        Text: "_3zXxPvXsjZinhyyYuHArVW",
        Padding: "_26DsxbVP4TJh-d5NBcU6Qc",
        Strike: "CoE7R_RffGU0rYbU4eHwa",
        Chevron: "_1qoDole_3YKojGNDyp72EY",
      };
    },
    92649: (e, s, n) => {
      "use strict";
      n.r(s),
        n.d(s, { SeasonPassDisplayFromStoreBrowse: () => b, default: () => G });
      var t = n(7850),
        a = n(34214),
        o = n(66418),
        i = n(90626),
        r = n(38390),
        l = n(6379),
        p = n(55263),
        c = n(63369),
        d = n(8107),
        m = n(60014),
        _ = n(55963),
        h = n(1431),
        S = n.n(h);
      const u = { include_assets: !0, include_basic_info: !0 };
      function x(e) {
        const { appid: s } = e,
          [n] = (0, p.t7)(s, u),
          a = (0, m.n9)();
        return n && s
          ? (0, t.jsx)("div", {
              className: S().StoreItemCtn,
              children: (0, t.jsx)("div", {
                className: S().StoreItemRow,
                children: (0, t.jsxs)("a", {
                  href: (0, _.wJ)(n.GetStorePageURL(), a),
                  children: [
                    (0, t.jsx)("img", {
                      src: n.GetAssets().GetSmallCapsuleURL(),
                    }),
                    (0, t.jsxs)("div", {
                      className: S().StoreItemDescription,
                      children: [n.GetShortDescription(), " "],
                    }),
                  ],
                }),
              }),
            })
          : null;
      }
      var j = n(32630),
        g = n(5702),
        v = n(52038),
        f = n(61859),
        P = n(29298),
        D = n.n(P),
        R = n(14987),
        A = n(39777);
      function b(e) {
        const { appid: s } = e,
          n = (0, R.$5)(s),
          { data: a } = (0, A._F)(n);
        return a?.season_pass
          ? (0, t.jsx)(G, { season_pass: a.season_pass })
          : null;
      }
      function G(e) {
        const { season_pass: s } = e;
        return s && s.milestones && 0 != s.milestones.length
          ? (0, t.jsx)(j.Ay, {
              feature: "seasonpassproductpage",
              children: (0, t.jsxs)("div", {
                className:
                  "game_area_description overflow_allowed season_pass_area",
                children: [
                  (0, t.jsx)("h2", {
                    children: (0, f.we)("#SeasonPass_Header"),
                  }),
                  (0, t.jsx)("p", {
                    children: (0, f.oW)("#SeasonPass_Incomplete_Desc"),
                  }),
                  (0, t.jsx)("p", {
                    children: (0, f.oW)(
                      "#SeasonPass_Incomplete_Desc2",
                      (0, t.jsx)("a", {
                        href: `${o.TS.STORE_BASE_URL}account/notificationsettings`,
                      }),
                    ),
                  }),
                  s.milestones
                    .sort((e, s) =>
                      e.shipped && s.shipped
                        ? e.rtime_complete - s.rtime_complete
                        : e.shipped
                          ? -1
                          : s.shipped
                            ? 1
                            : e.dates[e.dates.length - 1].rtime -
                              s.dates[s.dates.length - 1].rtime,
                    )
                    .map((e) =>
                      (0, t.jsx)(
                        I,
                        { baseGameAppID: s.appid, milestone: e },
                        "ms_" + e.milestone_id,
                      ),
                    ),
                ],
              }),
            })
          : null;
      }
      function I(e) {
        const { milestone: s, baseGameAppID: n } = e,
          a = s.milestone_desc?.length > 0;
        return (0, t.jsxs)("div", {
          className: D().SeasonPass,
          children: [
            (0, t.jsxs)("div", {
              className: (0, v.A)(D().Title, Boolean(s.shipped) && D().Shipped),
              children: [
                (0, t.jsxs)("span", {
                  children: [
                    Boolean(s.shipped) && "✓",
                    " ",
                    f.A0.GetTokenWithFallback(s.title),
                  ],
                }),
                (0, t.jsx)("div", {
                  className: D().DateAndControl,
                  children: (0, t.jsx)(w, { milestone: s }),
                }),
              ],
            }),
            a && (0, t.jsx)(N, { milestone: s, baseGameAppID: n }),
          ],
        });
      }
      function N(e) {
        const { milestone: s, baseGameAppID: n } = e,
          a = f.A0.GetTokenWithFallback(s.milestone_desc),
          o = s.appid || s.coming_soon_appid;
        return (0, t.jsxs)(t.Fragment, {
          children: [
            Boolean(o) && (0, t.jsx)(x, { appid: o }),
            (0, t.jsxs)("div", {
              className: D().Description,
              children: [
                (0, t.jsx)(g.n, { text: a }),
                Boolean(s.shipped) &&
                  (0, t.jsx)(E, { milestone: s, baseGameAppID: n }),
              ],
            }),
          ],
        });
      }
      function w(e) {
        const { milestone: s } = e;
        if (s.shipped) return (0, t.jsx)(T, { milestone: s });
        const n = s.dates[0].rtime,
          a = s.dates.filter((e, s) => 0 == s || e.rtime < n);
        return (0, t.jsx)("div", {
          className: D().Upcoming,
          children: (0, f.PP)(
            "#SeasonPass_Release_Date",
            (0, t.jsx)("br", {}),
            [...a].reverse().map((e, s) => {
              const n = (0, c.M)(e.coming_soon_display_type, e.rtime, null, !0);
              return (0, t.jsx)(
                "div",
                {
                  className: s + 1 < a.length ? D().Strike : void 0,
                  children: n,
                },
                "dd" + e.rtime + e.coming_soon_display_type,
              );
            }),
          ),
        });
      }
      function T(e) {
        const { milestone: s } = e,
          n = (0, R.$5)(s.appid),
          { data: a } = (0, A.by)(n),
          o = a?.steam_release_date || s.rtime_complete;
        return (0, t.jsx)("div", {
          className: D().Shipped,
          children: (0, f.PP)(
            "#SeasonPass_Released_Date",
            (0, t.jsx)("br", {}),
            (0, f.TW)(o),
          ),
        });
      }
      const B = {};
      function E(e) {
        const { milestone: s, baseGameAppID: n } = e;
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)("div", {
              className: D().Status,
              children: (0, f.PP)(
                s.appid ? "#SeasonPass_DLC_Status" : "#SeasonPass_Event_Status",
              ),
            }),
            s.appid && (0, t.jsx)(k, { milestone: s }),
            Boolean(s.appid && s.event_gid) &&
              (0, t.jsx)("span", { className: D().Padding }),
            Boolean(s.event_gid) &&
              (0, t.jsx)(L, { milestone: s, baseGameAppID: n }),
          ],
        });
      }
      function k(e) {
        const { milestone: s } = e,
          [n] = (0, p.t7)(s.appid, B);
        return (0, t.jsx)("a", {
          href: n?.GetStorePageURL() || `${o.TS.STORE_BASE_URL}app/${s.appid}`,
          children: (0, f.we)("#SeasonPass_ShowStore"),
        });
      }
      function L(e) {
        const { milestone: s, baseGameAppID: n } = e,
          [p, c] = (0, i.useState)(!1),
          m = (0, r.RR)(s.event_gid);
        return m
          ? (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)("a", {
                  href: `${o.TS.STORE_BASE_URL}news/app/${n}/view/${s.event_gid}`,
                  onClick: (e) => {
                    e.preventDefault(), e.stopPropagation(), c(!0);
                  },
                  children: (0, f.we)("#SeasonPass_ReadEvent"),
                }),
                Boolean(p) &&
                  (0, t.jsx)(d.N, {
                    appid: n,
                    eventModel: m,
                    announcementGID: m.AnnouncementGID,
                    closeModal: () => c(!1),
                    partnerEventStore: l.O3,
                    bShowOnlyInitialEvent: !0,
                    showAppHeader: !0,
                    trackingLocation: a.Tc.j$,
                  }),
              ],
            })
          : (0, t.jsx)("a", {
              href: `${o.TS.STORE_BASE_URL}news/app/${n}/view/${s.event_gid}`,
              children: (0, f.we)("#SeasonPass_ReadEvent"),
            });
      }
    },
  },
]);
