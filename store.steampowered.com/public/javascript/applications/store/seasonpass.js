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
      n.r(t), n.d(t, { default: () => y });
      var a = n(37403),
        s = n(8527),
        o = n(90626),
        l = n(38390),
        r = n(6379),
        i = n(55263),
        c = n(63369),
        p = n(8107),
        m = n(60014),
        d = n(55963),
        _ = n(1431),
        u = n.n(_);
      const E = { include_assets: !0, include_basic_info: !0 };
      function S(e) {
        const { appid: t } = e,
          [n] = (0, i.t7)(t, E),
          a = (0, m.n9)();
        return n && t
          ? o.createElement(
              "div",
              { className: u().StoreItemCtn },
              o.createElement(
                "div",
                { className: u().StoreItemRow },
                o.createElement(
                  "a",
                  { href: (0, d.wJ)(n.GetStorePageURL(), a) },
                  o.createElement("img", {
                    src: n.GetAssets().GetSmallCapsuleURL(),
                  }),
                  o.createElement(
                    "div",
                    { className: u().StoreItemDescription },
                    n.GetShortDescription(),
                    " ",
                  ),
                ),
              ),
            )
          : null;
      }
      var g = n(32630),
        h = n(99376),
        f = n(42780),
        v = n(59952),
        R = n(12611),
        P = n(30470);
      function w() {
        const e = new URL(window.location.href),
          t = e.pathname.split("/"),
          n = t?.[2];
        e.searchParams.get("beta");
        return `${P.TS.STORE_ICON_BASE_URL}${n}/`;
      }
      var b = n(61859),
        I = n(26296),
        A = n(4852),
        x = n.n(A),
        D = n(24484),
        N = n(78327);
      function T(e) {
        return new f.OJ(new f.R8(), 0);
      }
      function G(e) {
        const { text: t, languageOverride: n } = e,
          [a] = (0, o.useState)(
            new h.B(
              new Map([
                ...Array.from(v.W4.entries()),
                ["img", { Constructor: B, autocloses: !1 }],
              ]),
              T,
              n,
            ),
          );
        return o.createElement(o.Fragment, null, a.ParseBBCode(t, {}, !0));
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
        const a = (0, D.Fd)("store_page_asset_url", "application_config"),
          s = (0, D.Fd)("store_page_extra_assets_url", "application_config"),
          l = (0, D.Fd)("store_page_extra_assets_map", "application_config");
        if (a && n.startsWith(R.qR + "/")) {
          const e = n.replace(R.qR + "/", ""),
            t = l[e];
          if (t) {
            const e = [];
            let n = !1;
            for (const a of t) {
              const t = a.urlPart;
              e.push({
                url: s.replace("%s", t),
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
                s = e.find(
                  (e) =>
                    e.alt_text?.length > 0 &&
                    ("webm" === e.extension || "webm" === e.extension),
                )?.alt_text,
                l = (e) => {
                  const t = e.currentTarget;
                  t.paused ? t.play() : t.pause();
                };
              return o.createElement(
                "video",
                {
                  className: x().StoreVideo,
                  poster: a,
                  "aria-label": s,
                  autoPlay: !0,
                  muted: !0,
                  loop: !0,
                  playsInline: !0,
                  onClick: l,
                },
                t && o.createElement("source", { src: t, type: "video/webm" }),
                n &&
                  !N.TS.IN_CLIENT &&
                  o.createElement("source", { src: n, type: "video/mp4" }),
              );
            }
            {
              const t = e[0]?.alt_text,
                n = e[0]?.url;
              return o.createElement("img", {
                className: x().StoreImage,
                src: n,
                alt: t,
              });
            }
          }
          n = a.replace("%s", e);
        } else n = n.replace(R.qR, w()).replace("http://", "https://");
        return t
          ? o.createElement(I.i, { className: x().StoreImage, src: n })
          : o.createElement("img", {
              className: x().StoreImage,
              src: n,
              alt: (0, b.we)("#EventEditor_InsertImage_URL"),
            });
      }
      var k = n(52038),
        C = n(29298),
        L = n.n(C);
      function y(e) {
        const { season_pass: t } = e;
        return t && t.milestones && 0 != t.milestones.length
          ? o.createElement(
              g.Ay,
              { feature: "seasonpassproductpage" },
              o.createElement(
                "div",
                {
                  className:
                    "game_area_description overflow_allowed season_pass_area",
                },
                o.createElement("h2", null, (0, b.we)("#SeasonPass_Header")),
                o.createElement(
                  "p",
                  null,
                  (0, b.oW)("#SeasonPass_Incomplete_Desc"),
                ),
                o.createElement(
                  "p",
                  null,
                  (0, b.oW)(
                    "#SeasonPass_Incomplete_Desc2",
                    o.createElement("a", {
                      href: `${s.TS.STORE_BASE_URL}account/emailoptout`,
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
                    o.createElement(U, {
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
        return o.createElement(
          "div",
          { className: L().SeasonPass },
          o.createElement(
            "div",
            {
              className: (0, k.A)(L().Title, Boolean(t.shipped) && L().Shipped),
            },
            o.createElement(
              "span",
              null,
              Boolean(t.shipped) && "✓",
              " ",
              b.A0.GetTokenWithFallback(t.title),
            ),
            o.createElement(
              "div",
              { className: L().DateAndControl },
              o.createElement(O, { milestone: t }),
            ),
          ),
          a && o.createElement(W, { milestone: t, baseGameAppID: n }),
        );
      }
      function W(e) {
        const { milestone: t, baseGameAppID: n } = e,
          a = b.A0.GetTokenWithFallback(t.milestone_desc),
          s = t.appid || t.coming_soon_appid;
        return o.createElement(
          o.Fragment,
          null,
          Boolean(s) && o.createElement(S, { appid: s }),
          o.createElement(
            "div",
            { className: L().Description },
            o.createElement(G, { text: a }),
            Boolean(t.shipped) &&
              o.createElement(Z, { milestone: t, baseGameAppID: n }),
          ),
        );
      }
      function O(e) {
        const { milestone: t } = e;
        return t.shipped
          ? o.createElement(
              "div",
              { className: L().Shipped },
              (0, b.PP)(
                "#SeasonPass_Released_Date",
                o.createElement("br", null),
                (0, b.TW)(t.rtime_complete),
              ),
            )
          : o.createElement(
              "div",
              { className: L().Upcoming },
              (0, b.PP)(
                "#SeasonPass_Release_Date",
                o.createElement("br", null),
                [...t.dates].reverse().map((e, n) => {
                  const a = (0, c.M)(
                    e.coming_soon_display_type,
                    e.rtime,
                    null,
                    !0,
                  );
                  return o.createElement(
                    "div",
                    {
                      key: "dd" + e.rtime + e.coming_soon_display_type,
                      className: n + 1 < t.dates.length ? L().Strike : void 0,
                    },
                    a,
                  );
                }),
              ),
            );
      }
      const $ = {};
      function Z(e) {
        const { milestone: t, baseGameAppID: n } = e;
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            "div",
            { className: L().Status },
            (0, b.PP)(
              t.appid ? "#SeasonPass_DLC_Status" : "#SeasonPass_Event_Status",
            ),
          ),
          t.appid && o.createElement(F, { milestone: t }),
          Boolean(t.appid && t.event_gid) &&
            o.createElement("span", { className: L().Padding }),
          Boolean(t.event_gid) &&
            o.createElement(X, { milestone: t, baseGameAppID: n }),
        );
      }
      function F(e) {
        const { milestone: t } = e,
          [n] = (0, i.t7)(t.appid, $);
        return o.createElement(
          "a",
          {
            href:
              n?.GetStorePageURL() || `${s.TS.STORE_BASE_URL}app/${t.appid}`,
          },
          (0, b.we)("#SeasonPass_ShowStore"),
        );
      }
      function X(e) {
        const { milestone: t, baseGameAppID: n } = e,
          [i, c] = (0, o.useState)(!1),
          m = (0, l.RR)(t.event_gid);
        return m
          ? o.createElement(
              o.Fragment,
              null,
              o.createElement(
                "a",
                {
                  href: `${s.TS.STORE_BASE_URL}news/app/${n}/view/${t.event_gid}`,
                  onClick: (e) => {
                    e.preventDefault(), e.stopPropagation(), c(!0);
                  },
                },
                (0, b.we)("#SeasonPass_ReadEvent"),
              ),
              Boolean(i) &&
                o.createElement(p.N, {
                  appid: n,
                  eventModel: m,
                  announcementGID: m.AnnouncementGID,
                  closeModal: () => c(!1),
                  partnerEventStore: r.O3,
                  bShowOnlyInitialEvent: !0,
                  showAppHeader: !0,
                  trackingLocation:
                    a.Tc.k_EPartnerEventDisplayLocation_StoreAppPage,
                }),
            )
          : o.createElement(
              "a",
              {
                href: `${s.TS.STORE_BASE_URL}news/app/${n}/view/${t.event_gid}`,
              },
              (0, b.we)("#SeasonPass_ReadEvent"),
            );
      }
    },
  },
]);
