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
      e.exports = {
        StoreImage: "_1XiTdhCGWl9dUCWd6Eg89o",
        StoreVideo: "_1Nwn2Vf2AjZ4McbxZX9P8V",
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
    51899: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => L });
      var a = n(8527),
        s = n(90626),
        o = n(38390),
        r = n(6379),
        l = n(55263),
        i = n(63369),
        c = n(8107),
        m = n(60014),
        p = n(55963),
        d = n(1431),
        _ = n.n(d);
      const u = { include_assets: !0, include_basic_info: !0 };
      function E(e) {
        const { appid: t } = e,
          [n] = (0, l.t7)(t, u),
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
                  s.createElement(
                    "div",
                    { className: _().StoreItemDescription },
                    n.GetShortDescription(),
                    " ",
                  ),
                ),
              ),
            )
          : null;
      }
      var S = n(32630),
        g = n(93980),
        f = n(42780),
        h = n(59952),
        v = n(12611),
        R = n(30470);
      function w() {
        const e = new URL(window.location.href),
          t = e.pathname.split("/"),
          n = t?.[2];
        e.searchParams.get("beta");
        return `${R.TS.STORE_ICON_BASE_URL}${n}/`;
      }
      var P = n(61859),
        b = n(26296),
        I = n(4852),
        x = n.n(I),
        A = n(24484),
        D = n(78327);
      function N(e) {
        return new f.OJ(new f.R8(), 0);
      }
      function G(e) {
        const { text: t, languageOverride: n } = e,
          [a] = (0, s.useState)(
            new g.B(
              new Map([
                ...Array.from(h.W4.entries()),
                ["img", { Constructor: T, autocloses: !1 }],
              ]),
              N,
              n,
            ),
          );
        return s.createElement(s.Fragment, null, a.ParseBBCode(t, {}, !0));
      }
      function T(e) {
        const { showErrorInfo: t } = e.context;
        let n = e?.children?.toString();
        if (
          (null == n || null == n || 0 == n.length) &&
          ((n = e?.args?.[""] || e?.args?.src),
          null == n || null == n || 0 == n.length)
        )
          return "";
        const a = (0, A.Fd)("store_page_asset_url", "application_config"),
          o = (0, A.Fd)("store_page_extra_assets_url", "application_config"),
          r = (0, A.Fd)("store_page_extra_assets_map", "application_config");
        if (a && n.startsWith(v.qR + "/")) {
          const e = n.replace(v.qR + "/", ""),
            t = r[e];
          if (t) {
            const e = [];
            let n = !1;
            for (const a of t) {
              const t = a.urlPart;
              e.push({
                url: o.replace("%s", t),
                extension: a.extension,
                alt_text: a.alt_text ?? null,
              }),
                (n = n || ["mp4", "webm"].includes(a.extension));
            }
            if (n) {
              const t = e.find((e) => "webm" === e.extension)?.url,
                n = e.find((e) => "mp4" === e.extension)?.url,
                a = e.find(
                  (e) =>
                    ".poster.webp" === e.extension ||
                    ".poster.avif" === e.extension,
                )?.url,
                o = e.find(
                  (e) =>
                    e.alt_text?.length > 0 &&
                    ("webm" === e.extension || "webm" === e.extension),
                )?.alt_text,
                r = (e) => {
                  const t = e.currentTarget;
                  t.paused ? t.play() : t.pause();
                };
              return s.createElement(
                "video",
                {
                  className: x().StoreVideo,
                  poster: a,
                  "aria-label": o,
                  autoPlay: !0,
                  muted: !0,
                  loop: !0,
                  playsInline: !0,
                  onClick: r,
                },
                t && s.createElement("source", { src: t, type: "video/webm" }),
                n &&
                  !D.TS.IN_CLIENT &&
                  s.createElement("source", { src: n, type: "video/mp4" }),
              );
            }
            {
              const t = e[0]?.alt_text,
                n = e[0]?.url;
              return s.createElement("img", {
                className: x().StoreImage,
                src: n,
                alt: t,
              });
            }
          }
          n = a.replace("%s", e);
        } else n = n.replace(v.qR, w()).replace("http://", "https://");
        return t
          ? s.createElement(b.i, { className: x().StoreImage, src: n })
          : s.createElement("img", {
              className: x().StoreImage,
              src: n,
              alt: (0, P.we)("#EventEditor_InsertImage_URL"),
            });
      }
      var B = n(52038),
        C = n(29298),
        k = n.n(C);
      function L(e) {
        const { season_pass: t } = e;
        return t && t.milestones && 0 != t.milestones.length
          ? s.createElement(
              S.Ay,
              { feature: "seasonpassproductpage" },
              s.createElement(
                "div",
                {
                  className:
                    "game_area_description overflow_allowed season_pass_area",
                },
                s.createElement("h2", null, (0, P.we)("#SeasonPass_Header")),
                s.createElement(
                  "p",
                  null,
                  (0, P.oW)("#SeasonPass_Incomplete_Desc"),
                ),
                s.createElement(
                  "p",
                  null,
                  (0, P.oW)(
                    "#SeasonPass_Incomplete_Desc2",
                    s.createElement("a", {
                      href: `${a.TS.STORE_BASE_URL}account/emailoptout`,
                    }),
                  ),
                ),
                t.milestones
                  .sort((e, t) =>
                    e.shipped && t.shipped
                      ? e.rtime_complete - t.rtime_complete
                      : e.shipped
                        ? -1
                        : t.shipped
                          ? 1
                          : e.dates[e.dates.length - 1].rtime -
                            t.dates[t.dates.length - 1].rtime,
                  )
                  .map((e) =>
                    s.createElement(y, {
                      key: "ms_" + e.milestone_id,
                      baseGameAppID: t.appid,
                      milestone: e,
                    }),
                  ),
              ),
            )
          : null;
      }
      function y(e) {
        const { milestone: t, baseGameAppID: n } = e,
          a = t.milestone_desc?.length > 0;
        return s.createElement(
          "div",
          { className: k().SeasonPass },
          s.createElement(
            "div",
            {
              className: (0, B.A)(k().Title, Boolean(t.shipped) && k().Shipped),
            },
            s.createElement(
              "span",
              null,
              Boolean(t.shipped) && "✓",
              " ",
              P.A0.GetTokenWithFallback(t.title),
            ),
            s.createElement(
              "div",
              { className: k().DateAndControl },
              s.createElement(W, { milestone: t }),
            ),
          ),
          a && s.createElement(U, { milestone: t, baseGameAppID: n }),
        );
      }
      function U(e) {
        const { milestone: t, baseGameAppID: n } = e,
          a = P.A0.GetTokenWithFallback(t.milestone_desc),
          o = t.appid || t.coming_soon_appid;
        return s.createElement(
          s.Fragment,
          null,
          Boolean(o) && s.createElement(E, { appid: o }),
          s.createElement(
            "div",
            { className: k().Description },
            s.createElement(G, { text: a }),
            Boolean(t.shipped) &&
              s.createElement($, { milestone: t, baseGameAppID: n }),
          ),
        );
      }
      function W(e) {
        const { milestone: t } = e;
        if (t.shipped)
          return s.createElement(
            "div",
            { className: k().Shipped },
            (0, P.PP)(
              "#SeasonPass_Released_Date",
              s.createElement("br", null),
              (0, P.TW)(t.rtime_complete),
            ),
          );
        const n = t.dates[0].rtime,
          a = t.dates.filter((e, t) => 0 == t || e.rtime < n);
        return s.createElement(
          "div",
          { className: k().Upcoming },
          (0, P.PP)(
            "#SeasonPass_Release_Date",
            s.createElement("br", null),
            [...a].reverse().map((e, t) => {
              const n = (0, i.M)(e.coming_soon_display_type, e.rtime, null, !0);
              return s.createElement(
                "div",
                {
                  key: "dd" + e.rtime + e.coming_soon_display_type,
                  className: t + 1 < a.length ? k().Strike : void 0,
                },
                n,
              );
            }),
          ),
        );
      }
      const O = {};
      function $(e) {
        const { milestone: t, baseGameAppID: n } = e;
        return s.createElement(
          s.Fragment,
          null,
          s.createElement(
            "div",
            { className: k().Status },
            (0, P.PP)(
              t.appid ? "#SeasonPass_DLC_Status" : "#SeasonPass_Event_Status",
            ),
          ),
          t.appid && s.createElement(Z, { milestone: t }),
          Boolean(t.appid && t.event_gid) &&
            s.createElement("span", { className: k().Padding }),
          Boolean(t.event_gid) &&
            s.createElement(F, { milestone: t, baseGameAppID: n }),
        );
      }
      function Z(e) {
        const { milestone: t } = e,
          [n] = (0, l.t7)(t.appid, O);
        return s.createElement(
          "a",
          {
            href:
              n?.GetStorePageURL() || `${a.TS.STORE_BASE_URL}app/${t.appid}`,
          },
          (0, P.we)("#SeasonPass_ShowStore"),
        );
      }
      function F(e) {
        const { milestone: t, baseGameAppID: n } = e,
          [l, i] = (0, s.useState)(!1),
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
                    e.preventDefault(), e.stopPropagation(), i(!0);
                  },
                },
                (0, P.we)("#SeasonPass_ReadEvent"),
              ),
              Boolean(l) &&
                s.createElement(c.N, {
                  appid: n,
                  eventModel: m,
                  announcementGID: m.AnnouncementGID,
                  closeModal: () => i(!1),
                  partnerEventStore: r.O3,
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
              (0, P.we)("#SeasonPass_ReadEvent"),
            );
      }
    },
  },
]);
