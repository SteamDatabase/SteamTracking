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
      n.r(t), n.d(t, { default: () => p });
      var a = n(90626),
        l = n(66618),
        s = n.n(l),
        r = n(61859),
        o = n(63369),
        m = n(55263),
        c = n(66418),
        i = n(8107),
        d = n(38390),
        u = n(91254);
      function p(e) {
        const { season_pass: t } = e;
        return t && t.milestones && 0 != t.milestones.length
          ? a.createElement(
              "table",
              { className: s().SeasonPass },
              a.createElement(
                "thead",
                null,
                a.createElement(
                  "tr",
                  null,
                  a.createElement(
                    "th",
                    { colSpan: 3 },
                    (0, r.we)("#SeasonPass_Header"),
                  ),
                ),
              ),
              a.createElement(
                "tbody",
                null,
                t.milestones
                  .sort((e, t) => e.dates[0].rtime - t.dates[0].rtime)
                  .map((e) =>
                    a.createElement(E, {
                      milestone: e,
                      key: "ms_" + e.milestone_id,
                    }),
                  ),
              ),
            )
          : null;
      }
      function E(e) {
        const { milestone: t } = e;
        return a.createElement(
          "tr",
          null,
          a.createElement("td", null, a.createElement(_, { milestone: t })),
          a.createElement("td", null, r.A0.GetTokenWithFallback(t.title)),
          a.createElement(
            "td",
            null,
            Boolean(t.shipped) && a.createElement(h, { milestone: t }),
          ),
        );
      }
      function _(e) {
        const { milestone: t } = e;
        return t.shipped
          ? a.createElement(
              a.Fragment,
              null,
              (0, r.we)("#SeasonPass_Available"),
            )
          : a.createElement(
              a.Fragment,
              null,
              t.dates.reverse().map((e, n) => {
                const l = (0, o.M)(e.coming_soon_display_type, e.rtime);
                return a.createElement(
                  "div",
                  {
                    key: "dd" + e.rtime + e.coming_soon_display_type,
                    className: n + 1 < t.dates.length ? s().Strike : void 0,
                  },
                  l,
                );
              }),
            );
      }
      const S = {};
      function h(e) {
        const { milestone: t } = e,
          [n] = (0, m.t7)(t.appid, S),
          [l, s] = (0, a.useState)(!1),
          o = (0, d.RR)(t.event_gid);
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(
            "a",
            {
              href:
                n?.GetStorePageURL() || `${c.T.STORE_BASE_URL}app/${t.appid}`,
            },
            (0, r.we)("#SeasonPass_ShowStore"),
          ),
          Boolean(t.event_gid && o) &&
            a.createElement(
              a.Fragment,
              null,
              a.createElement(
                "a",
                { href: "#", onClick: () => s(!0) },
                (0, r.we)("#SeasonPass_ReadEvent"),
              ),
              Boolean(l) &&
                a.createElement(i.N, {
                  appid: t.appid,
                  eventModel: o,
                  announcementGID: o.AnnouncementGID,
                  closeModal: () => s(!1),
                  partnerEventStore: u.O3,
                }),
            ),
        );
      }
    },
  },
]);
