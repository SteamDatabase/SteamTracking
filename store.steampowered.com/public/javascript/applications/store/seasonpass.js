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
        padding: "_3RFybJbGoG8y80WpEGuOMz",
        Strike: "beE-h2-Nw_6g1LqM9LyaK",
        Chevron: "_1KM0040wsc_C2KCgj2t9Ev",
      };
    },
    8107: (e, t, n) => {
      "use strict";
      n.d(t, { N: () => f });
      var a = n(34629),
        s = n(41735),
        l = n.n(s),
        o = n(75844),
        r = n(90626),
        i = n(60746),
        c = n(68033),
        m = n(41550),
        p = n(51706),
        d = n(88843),
        E = n(64641),
        u = n.n(E),
        S = n(22797),
        _ = n(68797),
        h = n(78327),
        v = n(8527),
        g = n(30894),
        P = n(51272),
        I = n(82715);
      const f = (e) => {
        let { bShowOnlyInitialEvent: t } = e;
        const n = (0, h.Qn)();
        return r.createElement(
          I.tH,
          null,
          r.createElement(w, { ...e, bShowOnlyInitialEvent: t || n }),
        );
      };
      let w = class extends r.Component {
        state = { bLoading: !1, eventModel: this.props.eventModel };
        m_refParent = r.createRef();
        m_cancelSignal = l().CancelToken.source();
        componentDidMount() {
          this.state.eventModel ||
            this.setState({ bLoading: !0 }, this.LoadEvent);
          let e = this.GetBodyElement();
          e &&
            this.props.bPrimaryPageFeature &&
            e.classList.add(d.BodyNoScroll);
        }
        componentWillUnmount() {
          this.m_cancelSignal.cancel("EventInfiniteScrollModal unmounting");
          let e = this.GetBodyElement();
          e &&
            this.props.bPrimaryPageFeature &&
            e.classList.remove(d.BodyNoScroll);
        }
        GetBodyElement() {
          return this.m_refParent.current
            ? this.m_refParent.current.closest("body")
            : null;
        }
        async LoadEvent() {
          const {
            appid: e,
            clanSteamID: t,
            announcementGID: n,
            partnerEventStore: a,
            additionalParams: s,
          } = this.props;
          a.LoadAdjacentPartnerEventsByAnnouncement(
            n,
            t,
            e,
            0,
            3,
            s,
            this.m_cancelSignal,
          )
            .then((e) => {
              e.length > 0
                ? this.setState(
                    { bLoading: !1, eventModel: e[0] },
                    this.HandleReadEvent,
                  )
                : (this.props.onEventNotFound && this.props.onEventNotFound(),
                  this.setState({ bLoading: !1 }));
            })
            .catch((e) => {
              let t = (0, _.H)(e);
              console.error(
                "EventInfiniteScrollModal failed " + t.strErrorMsg,
                t,
              ),
                this.setState({ bLoading: !1 });
            });
        }
        async HandleReadEvent() {
          const { eventModel: e } = this.state,
            { trackingLocation: t } = this.props;
          e &&
            e.BIsPartnerEvent() &&
            i.KN.Get()
              .GetTracker()
              .MarkEventRead(e.GID, e.clanSteamID.GetAccountID(), t) &&
            i.KN.Get().GetTracker().Flush();
        }
        render() {
          const { bShowOnlyInitialEvent: e } = this.props,
            { bLoading: t, eventModel: n } = this.state;
          if (t)
            return r.createElement(
              p.of,
              null,
              r.createElement(
                "div",
                { className: u().FlexCenter, style: { height: "400px" } },
                r.createElement(S.t, null),
              ),
            );
          const {
            closeModal: a,
            appid: s,
            clanSteamID: l,
            className: o,
            partnerEventStore: i,
            showAppHeader: d,
            bPrimaryPageFeature: E,
            additionalParams: _,
            eventClassName: h,
          } = this.props;
          let I;
          v.TS.IN_CLIENT &&
            n?.appid &&
            (g.Fm.Get().HintLoad(),
            g.Fm.Get().BOwnsApp(n.appid) &&
              (I = (e) =>
                (0, P.EP)(e, "steam://nav/games/details/" + n.appid)));
          const f = r.createElement(
            "div",
            null,
            r.createElement(m.AD, {
              initialEvent: n,
              appid: s,
              clanSteamID: l,
              partnerEventStore: i,
              emoticonStore: c.A,
              closeModal: !E && a,
              showAppHeader: d,
              bShowOnlyInitialEvent: e,
              additionalParams: _,
              eventClassName: h,
              onAppIconClick: I,
            }),
          );
          return E
            ? f
            : r.createElement(
                p.of,
                { className: o },
                r.createElement(
                  p.Qs,
                  { navID: "WebRowEventInfiniteScroll", closeModal: a },
                  f,
                ),
              );
        }
      };
      w = (0, a.Cg)([o.PA], w);
    },
    19011: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => k });
      var a = n(8527),
        s = n(90626),
        l = n(38390),
        o = n(91254),
        r = n(55263),
        i = n(63369),
        c = n(8107),
        m = n(60014),
        p = n(55963),
        d = n(1431),
        E = n.n(d);
      const u = { include_assets: !0, include_basic_info: !0 };
      function S(e) {
        const { appid: t } = e,
          [n] = (0, r.t7)(t, u),
          a = (0, m.n9)();
        return n && t
          ? s.createElement(
              "div",
              { className: E().StoreItemCtn },
              s.createElement(
                "div",
                { className: E().StoreItemRow },
                s.createElement(
                  "a",
                  { href: (0, p.wJ)(n.GetStorePageURL(), a) },
                  s.createElement("img", {
                    src: n.GetAssets().GetSmallCapsuleURL(),
                  }),
                ),
                s.createElement(
                  "div",
                  { className: E().StoreItemDescription },
                  n.GetShortDescription(),
                  " ",
                ),
              ),
            )
          : null;
      }
      var _ = n(32630),
        h = n(99376),
        v = n(42780),
        g = n(59952),
        P = n(12611),
        I = n(30470);
      function f() {
        const e = new URL(window.location.href),
          t = e.pathname.split("/"),
          n = t?.[2];
        e.searchParams.get("beta");
        return `${I.TS.STORE_ICON_BASE_URL}${n}/`;
      }
      var w = n(61859),
        G = n(26296),
        b = n(4852),
        A = n.n(b),
        D = n(24484);
      function N(e) {
        return new v.OJ(new v.R8(), 0);
      }
      function R(e) {
        const { text: t, languageOverride: n } = e,
          [a] = (0, s.useState)(
            new h.B(
              new Map([
                ...Array.from(g.W4.entries()),
                ["img", { Constructor: C, autocloses: !1 }],
              ]),
              N,
              n,
            ),
          );
        return s.createElement(s.Fragment, null, a.ParseBBCode(t, {}));
      }
      function C(e) {
        const { showErrorInfo: t } = e.context;
        let n = e?.children?.toString();
        if (
          (null == n || null == n || 0 == n.length) &&
          ((n = e?.args?.[""] || e?.args?.src),
          null == n || null == n || 0 == n.length)
        )
          return "";
        const a = (0, D.Fd)("store_page_asset_url", "application_config");
        return (
          (n =
            a && n.startsWith(P.qR)
              ? a.replace("%s", n.replace(P.qR, ""))
              : n.replace(P.qR, f()).replace("http://", "https://")),
          t
            ? s.createElement(G.i, { className: A().StoreImage, src: n })
            : s.createElement("img", {
                className: A().StoreImage,
                src: n,
                alt: (0, w.we)("#EventEditor_InsertImage_URL"),
              })
        );
      }
      var L = n(52038),
        y = n(66618),
        B = n.n(y);
      function k(e) {
        const { season_pass: t } = e;
        return t && t.milestones && 0 != t.milestones.length
          ? s.createElement(
              _.A,
              { feature: "seasonpassproductpage" },
              s.createElement(
                "div",
                { className: "game_area_description overflow_allowed" },
                s.createElement("h2", null, (0, w.we)("#SeasonPass_Header")),
                s.createElement(
                  "p",
                  null,
                  (0, w.oW)("#SeasonPass_Incomplete_Desc"),
                ),
                s.createElement(
                  "p",
                  null,
                  (0, w.oW)(
                    "#SeasonPass_Incomplete_Desc2",
                    s.createElement("a", {
                      href: `${a.TS.STORE_BASE_URL}account/emailoptout`,
                    }),
                  ),
                ),
                t.milestones
                  .sort((e, t) => e.dates[0].rtime - t.dates[0].rtime)
                  .map((e) =>
                    s.createElement(M, {
                      key: "ms_" + e.milestone_id,
                      baseGameAppID: t.appid,
                      milestone: e,
                    }),
                  ),
              ),
            )
          : null;
      }
      function M(e) {
        const { milestone: t, baseGameAppID: n } = e,
          a = t.milestone_desc?.length > 0;
        return s.createElement(
          "div",
          { className: B().SeasonPass },
          s.createElement(
            "div",
            {
              className: (0, L.A)(B().Title, Boolean(t.shipped) && B().Shipped),
            },
            s.createElement(
              "span",
              null,
              Boolean(t.shipped) && "✓",
              " ",
              w.A0.GetTokenWithFallback(t.title),
            ),
            s.createElement(
              "div",
              { className: B().DateAndControl },
              s.createElement(O, { milestone: t }),
            ),
          ),
          a && s.createElement(T, { milestone: t, baseGameAppID: n }),
        );
      }
      function T(e) {
        const { milestone: t, baseGameAppID: n } = e,
          a = w.A0.GetTokenWithFallback(t.milestone_desc);
        return s.createElement(
          s.Fragment,
          null,
          Boolean(t.appid) && s.createElement(S, { appid: t.appid }),
          s.createElement(
            "div",
            { className: B().Description },
            s.createElement(R, { text: a }),
            Boolean(t.shipped) &&
              s.createElement(F, { milestone: t, baseGameAppID: n }),
          ),
        );
      }
      function O(e) {
        const { milestone: t } = e;
        return t.shipped
          ? s.createElement(
              "div",
              { className: B().Shipped },
              (0, w.PP)(
                "#SeasonPass_Released_Date",
                s.createElement("br", null),
                (0, w.TW)(t.rtime_complete),
              ),
            )
          : s.createElement(
              "div",
              { className: B().Upcoming },
              (0, w.PP)(
                "#SeasonPass_Release_Date",
                s.createElement("br", null),
                [...t.dates].reverse().map((e, n) => {
                  const a = (0, i.M)(
                    e.coming_soon_display_type,
                    e.rtime,
                    null,
                    !0,
                  );
                  return s.createElement(
                    "div",
                    {
                      key: "dd" + e.rtime + e.coming_soon_display_type,
                      className: n + 1 < t.dates.length ? B().Strike : void 0,
                    },
                    a,
                  );
                }),
              ),
            );
      }
      const U = {};
      function F(e) {
        const { milestone: t, baseGameAppID: n } = e;
        return s.createElement(
          s.Fragment,
          null,
          s.createElement(
            "div",
            { className: B().Status },
            (0, w.PP)(
              t.appid ? "#SeasonPass_DLC_Status" : "#SeasonPass_Event_Status",
            ),
          ),
          t.appid && s.createElement(x, { milestone: t }),
          Boolean(t.appid && t.event_gid) &&
            s.createElement("span", { className: B().padding }),
          Boolean(t.event_gid) &&
            s.createElement(W, { milestone: t, baseGameAppID: n }),
        );
      }
      function x(e) {
        const { milestone: t } = e,
          [n] = (0, r.t7)(t.appid, U);
        return s.createElement(
          "a",
          {
            href:
              n?.GetStorePageURL() || `${a.TS.STORE_BASE_URL}app/${t.appid}`,
          },
          (0, w.we)("#SeasonPass_ShowStore"),
        );
      }
      function W(e) {
        const { milestone: t, baseGameAppID: n } = e,
          [r, i] = (0, s.useState)(!1),
          m = (0, l.RR)(t.event_gid);
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
                (0, w.we)("#SeasonPass_ReadEvent"),
              ),
              Boolean(r) &&
                s.createElement(c.N, {
                  appid: n,
                  eventModel: m,
                  announcementGID: m.AnnouncementGID,
                  closeModal: () => i(!1),
                  partnerEventStore: o.O3,
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
              (0, w.we)("#SeasonPass_ReadEvent"),
            );
      }
    },
  },
]);
