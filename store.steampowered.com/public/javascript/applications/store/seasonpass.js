/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [5139],
  {
    66618: (e) => {
      e.exports = {
        SeasonPass: "_2Bwk-8eR05R2CUhVO2vLSO",
        Description: "_23Gpk3EX3VPMV0ISPZP7Ne",
        Title: "_3fPxFqoMwus-E-uUeyqE07",
        Shipped: "_3CU0KkcloclUaXflEXQu_p",
        DateAndControl: "_3aIQuGztbn-NrA-SWYiEUV",
        Upcoming: "_2P7zxKWCoHKOfqDB310z0V",
        Status: "hsVfYc1PxvDcBuC6uvKVs",
        Content: "_2xEP9Nk68W8GGzPlKeD2Pm",
        Text: "_1s9wb2xTKTarIgMnEy3ggl",
        Strike: "beE-h2-Nw_6g1LqM9LyaK",
        Chevron: "_1KM0040wsc_C2KCgj2t9Ev",
      };
    },
    85227: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => u });
      var a = n(90626),
        s = n(66618),
        l = n.n(s),
        o = n(61859),
        m = n(63369),
        r = n(55263),
        c = n(66418),
        i = n(52038),
        p = n(8107),
        _ = n(38390),
        d = n(91254),
        E = n(23649);
      function u(e) {
        const { season_pass: t } = e;
        return t && t.milestones && 0 != t.milestones.length
          ? a.createElement(
              "div",
              { className: "game_area_description overflow_allowed" },
              a.createElement("h2", null, (0, o.we)("#SeasonPass_Header")),
              a.createElement(
                "p",
                null,
                (0, o.oW)("#SeasonPass_Incomplete_Desc"),
              ),
              a.createElement(
                "p",
                null,
                (0, o.oW)(
                  "#SeasonPass_Incomplete_Desc2",
                  a.createElement("a", {
                    href: `${c.T.STORE_BASE_URL}account/emailoptout`,
                  }),
                ),
              ),
              t.milestones
                .sort((e, t) => e.dates[0].rtime - t.dates[0].rtime)
                .map((e) =>
                  a.createElement(S, {
                    key: "ms_" + e.milestone_id,
                    baseGameAppID: t.appid,
                    milestone: e,
                  }),
                ),
            )
          : null;
      }
      function S(e) {
        const { milestone: t, baseGameAppID: n } = e,
          s = t.milestone_desc?.length > 0;
        return a.createElement(
          "div",
          { className: l().SeasonPass },
          a.createElement(
            "div",
            {
              className: (0, i.A)(l().Title, Boolean(t.shipped) && l().Shipped),
            },
            a.createElement(
              "span",
              null,
              Boolean(t.shipped) && "✓",
              " ",
              o.A0.GetTokenWithFallback(t.title),
            ),
            a.createElement(
              "div",
              { className: l().DateAndControl },
              a.createElement(v, { milestone: t }),
            ),
          ),
          s && a.createElement(P, { milestone: t, baseGameAppID: n }),
        );
      }
      function P(e) {
        const { milestone: t, baseGameAppID: n } = e,
          s = o.A0.GetTokenWithFallback(t.milestone_desc);
        return a.createElement(
          "div",
          { className: l().Description },
          a.createElement(E.h, { text: s }),
          Boolean(t.shipped) &&
            a.createElement(D, { milestone: t, baseGameAppID: n }),
        );
      }
      function v(e) {
        const { milestone: t } = e;
        return t.shipped
          ? a.createElement(
              "div",
              { className: l().Shipped },
              (0, o.PP)(
                "#SeasonPass_Released_Date",
                a.createElement("br", null),
                (0, o.TW)(t.rtime_complete),
              ),
            )
          : a.createElement(
              "div",
              { className: l().Upcoming },
              (0, o.PP)(
                "#SeasonPass_Release_Date",
                a.createElement("br", null),
                [...t.dates].reverse().map((e, n) => {
                  const s = (0, m.M)(e.coming_soon_display_type, e.rtime);
                  return a.createElement(
                    "div",
                    {
                      key: "dd" + e.rtime + e.coming_soon_display_type,
                      className: n + 1 < t.dates.length ? l().Strike : void 0,
                    },
                    s,
                  );
                }),
              ),
            );
      }
      const h = {};
      function D(e) {
        const { milestone: t, baseGameAppID: n } = e;
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(
            "div",
            { className: l().Status },
            (0, o.PP)(
              t.appid ? "#SeasonPass_DLC_Status" : "#SeasonPass_Event_Status",
            ),
          ),
          t.appid && a.createElement(f, { milestone: t }),
          Boolean(t.event_gid) &&
            a.createElement(g, { milestone: t, baseGameAppID: n }),
        );
      }
      function f(e) {
        const { milestone: t } = e,
          [n] = (0, r.t7)(t.appid, h);
        return a.createElement(
          "a",
          {
            href: n?.GetStorePageURL() || `${c.T.STORE_BASE_URL}app/${t.appid}`,
          },
          (0, o.we)("#SeasonPass_ShowStore"),
        );
      }
      function g(e) {
        const { milestone: t, baseGameAppID: n } = e,
          [s, l] = (0, a.useState)(!1),
          m = (0, _.RR)(t.event_gid);
        return m
          ? a.createElement(
              a.Fragment,
              null,
              a.createElement(
                "a",
                { href: "#", onClick: () => l(!0) },
                (0, o.we)("#SeasonPass_ReadEvent"),
              ),
              Boolean(s) &&
                a.createElement(p.N, {
                  appid: n,
                  eventModel: m,
                  announcementGID: m.AnnouncementGID,
                  closeModal: () => l(!1),
                  partnerEventStore: d.O3,
                }),
            )
          : a.createElement(
              "a",
              {
                href: `${c.T.STORE_BASE_URL}news/app/${n}/view/${t.event_gid}`,
              },
              (0, o.we)("#SeasonPass_ReadEvent"),
            );
      }
    },
  },
]);
