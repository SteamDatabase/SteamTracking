/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [5139],
  {
    4852: (e) => {
      e.exports = { StoreImage: "_1XiTdhCGWl9dUCWd6Eg89o" };
    },
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
    50295: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => C });
      var a = n(90626),
        s = n(66618),
        l = n.n(s),
        o = n(61859),
        r = n(63369),
        c = n(55263),
        i = n(66418),
        m = n(52038),
        p = n(8107),
        u = n(38390),
        _ = n(91254),
        d = n(99376),
        E = n(42780),
        S = n(59952),
        g = n(12611),
        h = n(30470);
      function v() {
        const e = new URL(window.location.href),
          t = e.pathname.split("/"),
          n = t?.[2];
        e.searchParams.get("beta");
        return `${h.TS.STORE_ICON_BASE_URL}${n}/`;
      }
      var P = n(26296),
        f = n(4852),
        w = n.n(f),
        R = n(24484);
      function D(e) {
        return new E.OJ(new E.R8(), 0);
      }
      function I(e) {
        const { text: t, languageOverride: n } = e,
          [s] = (0, a.useState)(
            new d.B(
              new Map([
                ...Array.from(S.W4.entries()),
                ["img", { Constructor: A, autocloses: !1 }],
              ]),
              D,
              n,
            ),
          );
        return a.createElement(a.Fragment, null, s.ParseBBCode(t, {}));
      }
      function A(e) {
        const { showErrorInfo: t } = e.context;
        let n = e?.children?.toString();
        if (
          (null == n || null == n || 0 == n.length) &&
          ((n = e?.args?.[""] || e?.args?.src),
          null == n || null == n || 0 == n.length)
        )
          return "";
        const s = (0, R.Fd)("store_page_asset_url", "application_config");
        return (
          (n =
            s && n.startsWith(g.qR)
              ? s.replace("%s", n.replace(g.qR, ""))
              : n.replace(g.qR, v()).replace("http://", "https://")),
          t
            ? a.createElement(P.i, { className: w().StoreImage, src: n })
            : a.createElement("img", {
                className: w().StoreImage,
                src: n,
                alt: (0, o.we)("#EventEditor_InsertImage_URL"),
              })
        );
      }
      function C(e) {
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
                    href: `${i.T.STORE_BASE_URL}account/emailoptout`,
                  }),
                ),
              ),
              t.milestones
                .sort((e, t) => e.dates[0].rtime - t.dates[0].rtime)
                .map((e) =>
                  a.createElement(b, {
                    key: "ms_" + e.milestone_id,
                    baseGameAppID: t.appid,
                    milestone: e,
                  }),
                ),
            )
          : null;
      }
      function b(e) {
        const { milestone: t, baseGameAppID: n } = e,
          s = t.milestone_desc?.length > 0;
        return a.createElement(
          "div",
          { className: l().SeasonPass },
          a.createElement(
            "div",
            {
              className: (0, m.A)(l().Title, Boolean(t.shipped) && l().Shipped),
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
              a.createElement(k, { milestone: t }),
            ),
          ),
          s && a.createElement(G, { milestone: t, baseGameAppID: n }),
        );
      }
      function G(e) {
        const { milestone: t, baseGameAppID: n } = e,
          s = o.A0.GetTokenWithFallback(t.milestone_desc);
        return a.createElement(
          "div",
          { className: l().Description },
          a.createElement(I, { text: s }),
          Boolean(t.shipped) &&
            a.createElement(T, { milestone: t, baseGameAppID: n }),
        );
      }
      function k(e) {
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
              ),
            );
      }
      const N = {};
      function T(e) {
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
          t.appid && a.createElement(B, { milestone: t }),
          Boolean(t.event_gid) &&
            a.createElement(U, { milestone: t, baseGameAppID: n }),
        );
      }
      function B(e) {
        const { milestone: t } = e,
          [n] = (0, c.t7)(t.appid, N);
        return a.createElement(
          "a",
          {
            href: n?.GetStorePageURL() || `${i.T.STORE_BASE_URL}app/${t.appid}`,
          },
          (0, o.we)("#SeasonPass_ShowStore"),
        );
      }
      function U(e) {
        const { milestone: t, baseGameAppID: n } = e,
          [s, l] = (0, a.useState)(!1),
          r = (0, u.RR)(t.event_gid);
        return r
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
                  eventModel: r,
                  announcementGID: r.AnnouncementGID,
                  closeModal: () => l(!1),
                  partnerEventStore: _.O3,
                }),
            )
          : a.createElement(
              "a",
              {
                href: `${i.T.STORE_BASE_URL}news/app/${n}/view/${t.event_gid}`,
              },
              (0, o.we)("#SeasonPass_ReadEvent"),
            );
      }
    },
  },
]);
