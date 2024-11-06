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
        h = n(22797),
        _ = n(68797),
        S = n(78327),
        v = n(66418),
        g = n(30894),
        P = n(51272),
        I = n(82715);
      const f = (e) => {
        let { bShowOnlyInitialEvent: t } = e;
        const n = (0, S.Qn)();
        return r.createElement(
          I.tH,
          null,
          r.createElement(b, { ...e, bShowOnlyInitialEvent: t || n }),
        );
      };
      let b = class extends r.Component {
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
                r.createElement(h.t, null),
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
            eventClassName: S,
          } = this.props;
          let I;
          v.T.IN_CLIENT &&
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
              eventClassName: S,
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
      b = (0, a.Cg)([o.PA], b);
    },
    50295: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => A });
      var a = n(90626),
        s = n(66618),
        l = n.n(s),
        o = n(61859),
        r = n(63369),
        i = n(55263),
        c = n(66418),
        m = n(52038),
        p = n(8107),
        d = n(38390),
        E = n(91254),
        u = n(99376),
        h = n(42780),
        _ = n(59952),
        S = n(12611),
        v = n(30470);
      function g() {
        const e = new URL(window.location.href),
          t = e.pathname.split("/"),
          n = t?.[2];
        e.searchParams.get("beta");
        return `${v.TS.STORE_ICON_BASE_URL}${n}/`;
      }
      var P = n(26296),
        I = n(4852),
        f = n.n(I),
        b = n(24484);
      function w(e) {
        return new h.OJ(new h.R8(), 0);
      }
      function D(e) {
        const { text: t, languageOverride: n } = e,
          [s] = (0, a.useState)(
            new u.B(
              new Map([
                ...Array.from(_.W4.entries()),
                ["img", { Constructor: N, autocloses: !1 }],
              ]),
              w,
              n,
            ),
          );
        return a.createElement(a.Fragment, null, s.ParseBBCode(t, {}));
      }
      function N(e) {
        const { showErrorInfo: t } = e.context;
        let n = e?.children?.toString();
        if (
          (null == n || null == n || 0 == n.length) &&
          ((n = e?.args?.[""] || e?.args?.src),
          null == n || null == n || 0 == n.length)
        )
          return "";
        const s = (0, b.Fd)("store_page_asset_url", "application_config");
        return (
          (n =
            s && n.startsWith(S.qR)
              ? s.replace("%s", n.replace(S.qR, ""))
              : n.replace(S.qR, g()).replace("http://", "https://")),
          t
            ? a.createElement(P.i, { className: f().StoreImage, src: n })
            : a.createElement("img", {
                className: f().StoreImage,
                src: n,
                alt: (0, o.we)("#EventEditor_InsertImage_URL"),
              })
        );
      }
      function A(e) {
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
                  a.createElement(G, {
                    key: "ms_" + e.milestone_id,
                    baseGameAppID: t.appid,
                    milestone: e,
                  }),
                ),
            )
          : null;
      }
      function G(e) {
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
              a.createElement(y, { milestone: t }),
            ),
          ),
          s && a.createElement(R, { milestone: t, baseGameAppID: n }),
        );
      }
      function R(e) {
        const { milestone: t, baseGameAppID: n } = e,
          s = o.A0.GetTokenWithFallback(t.milestone_desc);
        return a.createElement(
          "div",
          { className: l().Description },
          a.createElement(D, { text: s }),
          Boolean(t.shipped) &&
            a.createElement(L, { milestone: t, baseGameAppID: n }),
        );
      }
      function y(e) {
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
      const C = {};
      function L(e) {
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
          t.appid && a.createElement(k, { milestone: t }),
          Boolean(t.event_gid) &&
            a.createElement(B, { milestone: t, baseGameAppID: n }),
        );
      }
      function k(e) {
        const { milestone: t } = e,
          [n] = (0, i.t7)(t.appid, C);
        return a.createElement(
          "a",
          {
            href: n?.GetStorePageURL() || `${c.T.STORE_BASE_URL}app/${t.appid}`,
          },
          (0, o.we)("#SeasonPass_ShowStore"),
        );
      }
      function B(e) {
        const { milestone: t, baseGameAppID: n } = e,
          [s, l] = (0, a.useState)(!1),
          r = (0, d.RR)(t.event_gid);
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
                  partnerEventStore: E.O3,
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
