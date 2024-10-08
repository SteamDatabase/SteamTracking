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
        Chevron: "_1KM0040wsc_C2KCgj2t9Ev",
        DateAndControl: "_3aIQuGztbn-NrA-SWYiEUV",
        Upcoming: "_2P7zxKWCoHKOfqDB310z0V",
        Shipped: "_3CU0KkcloclUaXflEXQu_p",
        Status: "hsVfYc1PxvDcBuC6uvKVs",
        Content: "_2xEP9Nk68W8GGzPlKeD2Pm",
        Text: "_1s9wb2xTKTarIgMnEy3ggl",
        Strike: "beE-h2-Nw_6g1LqM9LyaK",
      };
    },
    85227: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => u });
      var a = n(90626),
        s = n(66618),
        l = n.n(s),
        o = n(61859),
        c = n(63369),
        m = n(55263),
        r = n(66418),
        i = n(8107),
        p = n(38390),
        _ = n(91254),
        E = n(4869),
        d = n(23649);
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
                    href: `${r.T.STORE_BASE_URL}account/emailoptout`,
                  }),
                ),
              ),
              a.createElement("br", null),
              a.createElement(
                "h2",
                null,
                (0, o.we)("#SeasonPass_ContentRelease_Header"),
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
          [s, c] = (0, a.useState)(!1),
          m = t.milestone_desc?.length > 0;
        return a.createElement(
          "div",
          { className: l().SeasonPass },
          a.createElement(
            "div",
            { className: l().Title, onClick: () => c((e) => !e) },
            a.createElement("span", null, o.A0.GetTokenWithFallback(t.title)),
            a.createElement(
              "div",
              { className: l().DateAndControl },
              a.createElement(h, { milestone: t }),
              Boolean(m) &&
                a.createElement(
                  "div",
                  { className: l().Chevron },
                  a.createElement(E.pZn, { direction: s ? "up" : "down" }),
                ),
            ),
          ),
          m && s && a.createElement(v, { milestone: t, baseGameAppID: n }),
        );
      }
      function v(e) {
        const { milestone: t, baseGameAppID: n } = e,
          s = o.A0.GetTokenWithFallback(t.milestone_desc);
        return a.createElement(
          "div",
          { className: l().Description },
          a.createElement(d.h, { text: s }),
          Boolean(t.shipped) &&
            a.createElement(w, { milestone: t, baseGameAppID: n }),
        );
      }
      function h(e) {
        const { milestone: t } = e;
        return t.shipped
          ? a.createElement(
              "div",
              { className: l().Shipped },
              (0, o.we)("#SeasonPass_Available"),
            )
          : a.createElement(
              "div",
              { className: l().Upcoming },
              [...t.dates].reverse().map((e, n) => {
                const s = (0, c.M)(e.coming_soon_display_type, e.rtime);
                return a.createElement(
                  "div",
                  {
                    key: "dd" + e.rtime + e.coming_soon_display_type,
                    className: n + 1 < t.dates.length ? l().Strike : void 0,
                  },
                  s,
                );
              }),
            );
      }
      const P = {};
      function w(e) {
        const { milestone: t, baseGameAppID: n } = e;
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(
            "div",
            { className: l().Status },
            a.createElement("b", null, (0, o.we)("#SeasonPass_Status"), " "),
            (0, o.PP)(
              t.appid ? "#SeasonPass_DLC_Status" : "#SeasonPass_Event_Status",
              (0, o.TW)(t.rtime_complete),
            ),
          ),
          t.appid && a.createElement(D, { milestone: t }),
          Boolean(t.event_gid) &&
            a.createElement(f, { milestone: t, baseGameAppID: n }),
        );
      }
      function D(e) {
        const { milestone: t } = e,
          [n] = (0, m.t7)(t.appid, P);
        return a.createElement(
          "a",
          {
            href: n?.GetStorePageURL() || `${r.T.STORE_BASE_URL}app/${t.appid}`,
          },
          (0, o.we)("#SeasonPass_ShowStore"),
        );
      }
      function f(e) {
        const { milestone: t, baseGameAppID: n } = e,
          [s, l] = (0, a.useState)(!1),
          c = (0, p.RR)(t.event_gid);
        return c
          ? a.createElement(
              a.Fragment,
              null,
              a.createElement(
                "a",
                { href: "#", onClick: () => l(!0) },
                (0, o.we)("#SeasonPass_ReadEvent"),
              ),
              Boolean(s) &&
                a.createElement(i.N, {
                  appid: n,
                  eventModel: c,
                  announcementGID: c.AnnouncementGID,
                  closeModal: () => l(!1),
                  partnerEventStore: _.O3,
                }),
            )
          : a.createElement(
              "a",
              {
                href: `${r.T.STORE_BASE_URL}news/app/${n}/view/${t.event_gid}`,
              },
              (0, o.we)("#SeasonPass_ReadEvent"),
            );
      }
    },
  },
]);
