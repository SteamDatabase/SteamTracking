/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [5139],
  {
    66618: (e) => {
      e.exports = {
        SeasonPass: "_2Bwk-8eR05R2CUhVO2vLSO",
        UpdateButton: "_1zVTTPQ0jiUiJrDrM5WDJs",
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
        r = n(63369),
        i = n(55263),
        m = n(66418),
        c = n(8107),
        d = n(38390),
        p = n(91254);
      function u(e) {
        const { season_pass: t } = e;
        return t && t.milestones && 0 != t.milestones.length
          ? a.createElement(
              "div",
              null,
              a.createElement("h2", null, (0, o.we)("#SeasonPass_Header")),
              t.milestones
                .sort((e, t) => e.dates[0].rtime - t.dates[0].rtime)
                .map((e) =>
                  a.createElement(_, {
                    milestone: e,
                    key: "ms_" + e.milestone_id,
                  }),
                ),
            )
          : null;
      }
      function _(e) {
        const { milestone: t } = e;
        return a.createElement(
          "div",
          null,
          a.createElement(E, { milestone: t }),
          o.A0.GetTokenWithFallback(t.title),
          Boolean(t.shipped) && a.createElement(h, { milestone: t }),
        );
      }
      function E(e) {
        const { milestone: t } = e;
        return t.shipped
          ? a.createElement(
              a.Fragment,
              null,
              (0, o.we)("#SeasonPass_Available"),
            )
          : a.createElement(
              a.Fragment,
              null,
              t.dates.reverse().map((e, n) => {
                const s = (0, r.M)(e.coming_soon_display_type, e.rtime);
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
      const S = {};
      function h(e) {
        const { milestone: t } = e,
          [n] = (0, i.t7)(t.appid, S),
          [s, l] = (0, a.useState)(!1),
          r = (0, d.RR)(t.event_gid);
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(
            "a",
            {
              href:
                n?.GetStorePageURL() || `${m.T.STORE_BASE_URL}app/${t.appid}`,
            },
            (0, o.we)("#SeasonPass_ShowStore"),
          ),
          Boolean(t.event_gid && r) &&
            a.createElement(
              a.Fragment,
              null,
              a.createElement(
                "a",
                { href: "#", onClick: () => l(!0) },
                (0, o.we)("#SeasonPass_ReadEvent"),
              ),
              Boolean(s) &&
                a.createElement(c.N, {
                  appid: t.appid,
                  eventModel: r,
                  announcementGID: r.AnnouncementGID,
                  closeModal: () => l(!1),
                  partnerEventStore: p.O3,
                }),
            ),
        );
      }
    },
  },
]);
