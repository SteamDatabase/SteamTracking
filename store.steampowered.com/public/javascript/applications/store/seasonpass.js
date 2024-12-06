/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [5139],
  {
    1431: (e) => {
      e.exports = {
        StoreItemCtn: "_2SxhiHrQSCtBnKf3oKdon2",
        StoreItemRow: "_3cBgZqhPaJpdeZl8hARr1o",
        StoreItemDescription: "_2pkGLftA9XILpaWN0kejPk",
      };
    },
    4852: (e) => {
      e.exports = { StoreImage: "_1XiTdhCGWl9dUCWd6Eg89o" };
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
    51899: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => L });
      var a = n(8527),
        s = n(90626),
        o = n(38390),
        l = n(91254),
        r = n(55263),
        c = n(63369),
        i = n(8107),
        m = n(60014),
        p = n(55963),
        d = n(1431),
        _ = n.n(d);
      const u = { include_assets: !0, include_basic_info: !0 };
      function E(e) {
        const { appid: t } = e,
          [n] = (0, r.t7)(t, u),
          a = (0, m.n9)();
        return n && t
          ? s.createElement(
              "div",
              { className: _().StoreItemCtn },
              s.createElement(
                "div",
                { className: _().StoreItemRow },
                s.createElement(
                  "a",
                  { href: (0, p.wJ)(n.GetStorePageURL(), a) },
                  s.createElement("img", {
                    src: n.GetAssets().GetSmallCapsuleURL(),
                  }),
                ),
                s.createElement(
                  "div",
                  { className: _().StoreItemDescription },
                  n.GetShortDescription(),
                  " ",
                ),
              ),
            )
          : null;
      }
      var S = n(32630),
        g = n(99376),
        h = n(42780),
        v = n(59952),
        R = n(12611),
        f = n(30470);
      function P() {
        const e = new URL(window.location.href),
          t = e.pathname.split("/"),
          n = t?.[2];
        e.searchParams.get("beta");
        return `${f.TS.STORE_ICON_BASE_URL}${n}/`;
      }
      var A = n(61859),
        D = n(26296),
        I = n(4852),
        w = n.n(I),
        b = n(24484);
      function G(e) {
        return new h.OJ(new h.R8(), 0);
      }
      function N(e) {
        const { text: t, languageOverride: n } = e,
          [a] = (0, s.useState)(
            new g.B(
              new Map([
                ...Array.from(v.W4.entries()),
                ["img", { Constructor: B, autocloses: !1 }],
              ]),
              G,
              n,
            ),
          );
        return s.createElement(s.Fragment, null, a.ParseBBCode(t, {}));
      }
      function B(e) {
        const { showErrorInfo: t } = e.context;
        let n = e?.children?.toString();
        if (
          (null == n || null == n || 0 == n.length) &&
          ((n = e?.args?.[""] || e?.args?.src),
          null == n || null == n || 0 == n.length)
        )
          return "";
        const a = (0, b.Fd)("store_page_asset_url", "application_config");
        return (
          (n =
            a && n.startsWith(R.qR)
              ? a.replace("%s", n.replace(R.qR, ""))
              : n.replace(R.qR, P()).replace("http://", "https://")),
          t
            ? s.createElement(D.i, { className: w().StoreImage, src: n })
            : s.createElement("img", {
                className: w().StoreImage,
                src: n,
                alt: (0, A.we)("#EventEditor_InsertImage_URL"),
              })
        );
      }
      var T = n(52038),
        k = n(29298),
        C = n.n(k);
      function L(e) {
        const { season_pass: t } = e;
        return t && t.milestones && 0 != t.milestones.length
          ? s.createElement(
              S.A,
              { feature: "seasonpassproductpage" },
              s.createElement(
                "div",
                {
                  className:
                    "game_area_description overflow_allowed season_pass_area",
                },
                s.createElement("h2", null, (0, A.we)("#SeasonPass_Header")),
                s.createElement(
                  "p",
                  null,
                  (0, A.oW)("#SeasonPass_Incomplete_Desc"),
                ),
                s.createElement(
                  "p",
                  null,
                  (0, A.oW)(
                    "#SeasonPass_Incomplete_Desc2",
                    s.createElement("a", {
                      href: `${a.TS.STORE_BASE_URL}account/emailoptout`,
                    }),
                  ),
                ),
                t.milestones
                  .sort((e, t) => e.dates[0].rtime - t.dates[0].rtime)
                  .map((e) =>
                    s.createElement(U, {
                      key: "ms_" + e.milestone_id,
                      baseGameAppID: t.appid,
                      milestone: e,
                    }),
                  ),
              ),
            )
          : null;
      }
      function U(e) {
        const { milestone: t, baseGameAppID: n } = e,
          a = t.milestone_desc?.length > 0;
        return s.createElement(
          "div",
          { className: C().SeasonPass },
          s.createElement(
            "div",
            {
              className: (0, T.A)(C().Title, Boolean(t.shipped) && C().Shipped),
            },
            s.createElement(
              "span",
              null,
              Boolean(t.shipped) && "✓",
              " ",
              A.A0.GetTokenWithFallback(t.title),
            ),
            s.createElement(
              "div",
              { className: C().DateAndControl },
              s.createElement(y, { milestone: t }),
            ),
          ),
          a && s.createElement(x, { milestone: t, baseGameAppID: n }),
        );
      }
      function x(e) {
        const { milestone: t, baseGameAppID: n } = e,
          a = A.A0.GetTokenWithFallback(t.milestone_desc),
          o = t.appid || t.coming_soon_appid;
        return s.createElement(
          s.Fragment,
          null,
          Boolean(o) && s.createElement(E, { appid: o }),
          s.createElement(
            "div",
            { className: C().Description },
            s.createElement(N, { text: a }),
            Boolean(t.shipped) &&
              s.createElement(O, { milestone: t, baseGameAppID: n }),
          ),
        );
      }
      function y(e) {
        const { milestone: t } = e;
        return t.shipped
          ? s.createElement(
              "div",
              { className: C().Shipped },
              (0, A.PP)(
                "#SeasonPass_Released_Date",
                s.createElement("br", null),
                (0, A.TW)(t.rtime_complete),
              ),
            )
          : s.createElement(
              "div",
              { className: C().Upcoming },
              (0, A.PP)(
                "#SeasonPass_Release_Date",
                s.createElement("br", null),
                [...t.dates].reverse().map((e, n) => {
                  const a = (0, c.M)(
                    e.coming_soon_display_type,
                    e.rtime,
                    null,
                    !0,
                  );
                  return s.createElement(
                    "div",
                    {
                      key: "dd" + e.rtime + e.coming_soon_display_type,
                      className: n + 1 < t.dates.length ? C().Strike : void 0,
                    },
                    a,
                  );
                }),
              ),
            );
      }
      const W = {};
      function O(e) {
        const { milestone: t, baseGameAppID: n } = e;
        return s.createElement(
          s.Fragment,
          null,
          s.createElement(
            "div",
            { className: C().Status },
            (0, A.PP)(
              t.appid ? "#SeasonPass_DLC_Status" : "#SeasonPass_Event_Status",
            ),
          ),
          t.appid && s.createElement($, { milestone: t }),
          Boolean(t.appid && t.event_gid) &&
            s.createElement("span", { className: C().Padding }),
          Boolean(t.event_gid) &&
            s.createElement(Z, { milestone: t, baseGameAppID: n }),
        );
      }
      function $(e) {
        const { milestone: t } = e,
          [n] = (0, r.t7)(t.appid, W);
        return s.createElement(
          "a",
          {
            href:
              n?.GetStorePageURL() || `${a.TS.STORE_BASE_URL}app/${t.appid}`,
          },
          (0, A.we)("#SeasonPass_ShowStore"),
        );
      }
      function Z(e) {
        const { milestone: t, baseGameAppID: n } = e,
          [r, c] = (0, s.useState)(!1),
          m = (0, o.RR)(t.event_gid);
        return m
          ? s.createElement(
              s.Fragment,
              null,
              s.createElement(
                "a",
                {
                  href: `${a.TS.STORE_BASE_URL}news/app/${n}/view/${t.event_gid}`,
                  onClick: (e) => {
                    e.preventDefault(), e.stopPropagation(), c(!0);
                  },
                },
                (0, A.we)("#SeasonPass_ReadEvent"),
              ),
              Boolean(r) &&
                s.createElement(i.N, {
                  appid: n,
                  eventModel: m,
                  announcementGID: m.AnnouncementGID,
                  closeModal: () => c(!1),
                  partnerEventStore: l.O3,
                  bShowOnlyInitialEvent: !0,
                  showAppHeader: !0,
                  trackingLocation: 3,
                }),
            )
          : s.createElement(
              "a",
              {
                href: `${a.TS.STORE_BASE_URL}news/app/${n}/view/${t.event_gid}`,
              },
              (0, A.we)("#SeasonPass_ReadEvent"),
            );
      }
    },
  },
]);
