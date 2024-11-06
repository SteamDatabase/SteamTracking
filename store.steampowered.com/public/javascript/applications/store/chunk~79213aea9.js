/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [6854],
  {
    19332: (e) => {
      e.exports = { Main: "_1Zn_5pvuMbqr57ws1eJKe" };
    },
    73964: (e, t, n) => {
      "use strict";
      n.d(t, { $: () => c });
      var a = n(41735),
        r = n.n(a),
        s = n(78327),
        o = n(91254),
        l = n(77516);
      class c extends o.ZQ {
        async DeleteOldAnnouncement(e, t) {
          let n = new URLSearchParams();
          n.append("sessionid", s.TS.SESSIONID);
          let a =
              s.TS.COMMUNITY_BASE_URL +
              "/gid/" +
              e.ConvertTo64BitString() +
              "/announcements/ajaxdeleteannouncement/" +
              t,
            o = await r().post(a, n);
          if (1 != o.data.success) throw o.data;
          return this.RemoveGIDFromList(e, l.cB + t), o.data;
        }
        static sm_Instance;
        static Get() {
          return (
            c.sm_Instance || ((c.sm_Instance = new c()), c.sm_Instance.Init()),
            c.sm_Instance
          );
        }
      }
    },
    81301: (e, t, n) => {
      "use strict";
      n.d(t, { H: () => h, Y: () => p });
      var a = n(34629),
        r = n(75844),
        s = n(90626),
        o = n(73964),
        l = n(91254),
        c = n(68033),
        i = n(41550),
        m = n(738),
        d = n(375),
        E = n(19332),
        v = n(51706);
      function u(e) {
        const { event: t, closeModal: n } = e;
        return s.createElement(
          v.Qs,
          { navID: "SinglePartnerEventRoot", closeModal: n },
          s.createElement(i.AD, {
            initialEvent: t,
            bShowOnlyInitialEvent: !0,
            partnerEventStore: l.O3,
            emoticonStore: c.A,
            showAppHeader: !0,
            closeModal: n,
          }),
        );
      }
      function p(e, t) {
        (0, m.pg)(s.createElement(u, { event: e }), t);
      }
      let h = class extends s.Component {
        m_refFocus = s.createRef();
        componentDidMount() {
          this.props.fnClose &&
            (document.addEventListener("keydown", this.escFunction, !1),
            this.m_refFocus.current && this.m_refFocus.current.focus());
        }
        componentWillUnmount() {
          this.props.fnClose &&
            document.removeEventListener("keydown", this.escFunction, !1);
        }
        escFunction(e) {
          const { fnClose: t } = this.props;
          27 === e.keyCode && t && t();
        }
        OnBackgroundClick(e) {
          e.currentTarget == e.target && this.props.fnClose();
        }
        render() {
          const { event: e, langOverride: t, isPreview: n } = this.props;
          return s.createElement(
            "div",
            {
              ref: this.m_refFocus,
              className: E.Main,
              onClick: this.OnBackgroundClick,
            },
            s.createElement(i.He, {
              key: e.GID,
              event: e,
              emoticonStore: c.A,
              partnerEventStore: o.$.Get(),
              langOverride: t,
              isPreview: n,
              bDisableBroadcastPlayer: !1,
            }),
          );
        }
      };
      (0, a.Cg)([d.oI], h.prototype, "escFunction", null),
        (0, a.Cg)([d.oI], h.prototype, "OnBackgroundClick", null),
        (h = (0, a.Cg)([r.PA], h));
    },
    8107: (e, t, n) => {
      "use strict";
      n.d(t, { N: () => A });
      var a = n(34629),
        r = n(41735),
        s = n.n(r),
        o = n(75844),
        l = n(90626),
        c = n(60746),
        i = n(68033),
        m = n(41550),
        d = n(51706),
        E = n(88843),
        v = n(64641),
        u = n.n(v),
        p = n(22797),
        h = n(68797),
        S = n(78327),
        I = n(66418),
        g = n(30894),
        C = n(51272),
        f = n(82715);
      const A = (e) => {
        let { bShowOnlyInitialEvent: t } = e;
        const n = (0, S.Qn)();
        return l.createElement(
          f.tH,
          null,
          l.createElement(_, { ...e, bShowOnlyInitialEvent: t || n }),
        );
      };
      let _ = class extends l.Component {
        state = { bLoading: !1, eventModel: this.props.eventModel };
        m_refParent = l.createRef();
        m_cancelSignal = s().CancelToken.source();
        componentDidMount() {
          this.state.eventModel ||
            this.setState({ bLoading: !0 }, this.LoadEvent);
          let e = this.GetBodyElement();
          e &&
            this.props.bPrimaryPageFeature &&
            e.classList.add(E.BodyNoScroll);
        }
        componentWillUnmount() {
          this.m_cancelSignal.cancel("EventInfiniteScrollModal unmounting");
          let e = this.GetBodyElement();
          e &&
            this.props.bPrimaryPageFeature &&
            e.classList.remove(E.BodyNoScroll);
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
            additionalParams: r,
          } = this.props;
          a.LoadAdjacentPartnerEventsByAnnouncement(
            n,
            t,
            e,
            0,
            3,
            r,
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
              let t = (0, h.H)(e);
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
            c.KN.Get()
              .GetTracker()
              .MarkEventRead(e.GID, e.clanSteamID.GetAccountID(), t) &&
            c.KN.Get().GetTracker().Flush();
        }
        render() {
          const { bShowOnlyInitialEvent: e } = this.props,
            { bLoading: t, eventModel: n } = this.state;
          if (t)
            return l.createElement(
              d.of,
              null,
              l.createElement(
                "div",
                { className: u().FlexCenter, style: { height: "400px" } },
                l.createElement(p.t, null),
              ),
            );
          const {
            closeModal: a,
            appid: r,
            clanSteamID: s,
            className: o,
            partnerEventStore: c,
            showAppHeader: E,
            bPrimaryPageFeature: v,
            additionalParams: h,
            eventClassName: S,
          } = this.props;
          let f;
          I.T.IN_CLIENT &&
            n?.appid &&
            (g.Fm.Get().HintLoad(),
            g.Fm.Get().BOwnsApp(n.appid) &&
              (f = (e) =>
                (0, C.EP)(e, "steam://nav/games/details/" + n.appid)));
          const A = l.createElement(
            "div",
            null,
            l.createElement(m.AD, {
              initialEvent: n,
              appid: r,
              clanSteamID: s,
              partnerEventStore: c,
              emoticonStore: i.A,
              closeModal: !v && a,
              showAppHeader: E,
              bShowOnlyInitialEvent: e,
              additionalParams: h,
              eventClassName: S,
              onAppIconClick: f,
            }),
          );
          return v
            ? A
            : l.createElement(
                d.of,
                { className: o },
                l.createElement(
                  d.Qs,
                  { navID: "WebRowEventInfiniteScroll", closeModal: a },
                  A,
                ),
              );
        }
      };
      _ = (0, a.Cg)([o.PA], _);
    },
    35685: (e, t, n) => {
      "use strict";
      n.d(t, { kH: () => z, rN: () => R, uY: () => x, zA: () => W });
      var a = n(22837),
        r = n(41735),
        s = n.n(r),
        o = n(75844),
        l = n(65946),
        c = n(90626),
        i = n(57876),
        m = n(76217),
        d = n(1977),
        E = n(77516),
        v = n(17720),
        u = n(71138),
        p = n(4796),
        h = n(95886),
        S = n(60746),
        I = n(55263),
        g = n(8107),
        C = n(75113),
        f = n(95695),
        A = n.n(f),
        _ = n(72860),
        N = n(76684),
        G = n(12155),
        D = n(60014),
        b = n(62490),
        k = n(52038),
        B = n(61859),
        y = n(78327),
        P = n(84811),
        w = n(22797),
        O = n(33924),
        M = n.n(O),
        L = n(26101),
        T = n(18654),
        F = n.n(T),
        H = n(84518);
      const R = (0, o.PA)((e) => {
          const {
              clanAccountID: t,
              gidAnnouncement: n,
              partnerEventStore: a,
              trackingLocation: r,
              bViewAllShowInfiniteScroll: o,
            } = e,
            l = v.b.InitFromClanID(t),
            i = (0, c.useRef)(null),
            [E, u] = (0, c.useState)(null),
            [h, I] = (0, c.useState)(!0),
            [f, _] = (0, c.useState)(!1);
          if (
            ((0, c.useEffect)(
              () => (
                (async () => {
                  i.current &&
                    i.current("PartnerEventRow Initializng new mount");
                  const e = s().CancelToken.source();
                  i.current = e.cancel;
                  const o = v.b.InitFromClanID(t);
                  await p.ac.LoadClanInfoForClanSteamID(o);
                  let l = await a.LoadAdjacentPartnerEventsByAnnouncement(
                    n,
                    o,
                    null,
                    4,
                    4,
                    void 0,
                    e,
                  );
                  if (!e.token.reason) {
                    l = l || [];
                    let e = l
                      .filter((e) => e.GetAnnouncementGID() != n)
                      .map((e) => e.AnnouncementGID);
                    b.fW(e);
                    const t = e
                      .slice(0, 3)
                      .map((e) => a.GetClanEventFromAnnouncementGID(e));
                    if ((u(t), I(!1), r)) {
                      let e = S.KN.Get().GetTracker(),
                        s = !1;
                      if (a.BHasClanAnnouncementGID(n)) {
                        let t = a.GetClanEventFromAnnouncementGID(n);
                        t &&
                          t.BIsPartnerEvent() &&
                          t.BIsVisibleEvent() &&
                          (e.MarkEventRead(
                            t.GID,
                            t.clanSteamID.GetAccountID(),
                            r,
                          ),
                          (s = !0));
                      }
                      t.length > 0 &&
                        (l
                          .filter((e) => e.BIsPartnerEvent())
                          .forEach((t) =>
                            e.MarkEventShown(
                              t.GID,
                              t.clanSteamID.GetAccountID(),
                              r,
                            ),
                          ),
                        (s = !0)),
                        s && e.Flush();
                    }
                  }
                })(),
                () => {
                  i.current && i.current("PartnerEventRow: unmounting");
                }
              ),
              [t, n, a, r],
            ),
            h)
          )
            return c.createElement(w.t, { position: "center", size: "medium" });
          if (0 == E.length) return c.createElement("div", null);
          const N = p.ac.GetClanInfoByClanAccountID(t);
          return c.createElement(
            P.tH,
            null,
            c.createElement(
              "div",
              { className: (0, k.A)(M().OtherEventsCtn, "OtherEventsCtn") },
              c.createElement(
                "div",
                { className: A().EventSectionTitleCtn },
                c.createElement(
                  "div",
                  {
                    className: (0, k.A)(
                      A().EventSectionTitle,
                      "EventSectionTitle",
                    ),
                  },
                  (0, B.PP)("#EventBrowse_MoreEventsTitle", N.group_name),
                  " ",
                ),
                c.createElement(
                  "div",
                  { className: A().EventSectionSpacer },
                  " ",
                ),
                o
                  ? c.createElement(
                      "div",
                      {
                        className: A().EventSectionMoreBtn,
                        onClick: () => _(!0),
                      },
                      (0, B.we)("#EventBrowse_MoreEventsBtn"),
                    )
                  : c.createElement(
                      C.tj,
                      {
                        eventModel: E[0],
                        route: C.PH.k_eViewWebSiteHub,
                        className: A().EventSectionMoreBtn,
                      },
                      (0, B.we)("#EventBrowse_MoreEventsBtn"),
                    ),
              ),
              c.createElement(
                m.Z,
                {
                  className: M().OtherEvents,
                  "flow-children": "column",
                  navEntryPreferPosition: d.iU.PREFERRED_CHILD,
                },
                E.map((e) =>
                  c.createElement(x, { key: e.AnnouncementGID, event: e }),
                ),
              ),
              Boolean(f) &&
                c.createElement(g.N, {
                  appid: E[0].appid,
                  clanSteamID: l,
                  announcementGID: E[0].AnnouncementGID,
                  closeModal: () => _(!1),
                  partnerEventStore: a,
                }),
            ),
          );
        }),
        U = 30;
      function x(e) {
        const {
            event: t,
            imageURLOverride: n,
            bShowAssociatedApp: r,
            langOverride: s,
            onClick: o,
            eEventRount: i,
            bHidePrices: m,
          } = e,
          [d, v, p, S, I, g] = (0, l.q3)(() => {
            const e = s || (0, a.sf)(y.TS.LANGUAGE),
              r = Boolean(void 0 !== n)
                ? n
                : t.GetImageURLWithFallback("capsule", e, u.wI.capsule_main),
              o = Boolean(void 0 !== n)
                ? n
                : t.GetImageURLWithFallback("capsule", e, u.wI.full);
            return [
              r,
              t.GetNameWithFallback(e) || "",
              t.GetCategoryAsString(),
              t.GetSummaryWithFallback(e),
              o,
              t.GetSubTitleWithLanguageFallback(e) || "",
            ];
          }),
          [f, A] = (0, c.useState)(void 0),
          _ = f
            ? { src: f }
            : { src: d, onLoad: () => A(d), onError: () => A(I) };
        if (!t)
          return c.createElement("div", {
            className: M().OtherEvents_EventCtn,
          });
        const G = (0, h.v0)().GetStoreInitializationTimestamp().getTime() / 1e3,
          D = t ? t.GetStartTimeAndDateUnixSeconds() : 0;
        let b = g;
        return (
          g && (g.length > U || v.length > U) && (b = void 0),
          c.createElement(
            c.Fragment,
            null,
            c.createElement(
              C.tj,
              {
                className: (0, k.A)(
                  M().OtherEvents_EventCtn,
                  "OtherEvents_EventCtn",
                  M().HoversEnabled,
                ),
                eventModel: t,
                route: i || C.PH.k_eView,
                onClick: o,
                preferredFocus: !0,
              },
              c.createElement(
                "div",
                { className: M().EventSummaryContainer },
                c.createElement("div", { className: M().EventSummaryType }, p),
                c.createElement("div", { className: M().EventSummaryText }, S),
              ),
              c.createElement("div", {
                className: M().OtherEvents_BGImage,
                style: {
                  backgroundColor: "#ffffff",
                  backgroundImage: f ? `url(${(0, E.j3)(f)})` : "none",
                },
              }),
              c.createElement(
                "div",
                { className: M().OtherEvents_ContentCtn },
                c.createElement(
                  "div",
                  { className: M().OtherEvents_MainImageCtn },
                  c.createElement("img", {
                    ..._,
                    className: M().OtherEvents_MainImage,
                  }),
                ),
                c.createElement(
                  "div",
                  { className: M().OtherEvents_TextCtn },
                  c.createElement(
                    "div",
                    { className: M().OtherEvents_TextTitle },
                    v,
                  ),
                  Boolean(b) &&
                    c.createElement(
                      "div",
                      { className: M().OtherEvents_SubTitle },
                      b,
                    ),
                  Boolean(D > G)
                    ? c.createElement(
                        "div",
                        { className: (0, k.A)(M().UpcomingCtn, "UpcomingCtn") },
                        c.createElement(N.K4, {
                          bSingleLine: !0,
                          dateAndTime: t.GetStartTimeAndDateUnixSeconds(),
                        }),
                      )
                    : c.createElement(N.K4, {
                        bSingleLine: !0,
                        bOnlyDate: !0,
                        dateAndTime: t.GetStartTimeAndDateUnixSeconds(),
                      }),
                ),
              ),
            ),
            Boolean(r && t.appid) &&
              c.createElement(W, { appid: t.appid, bHidePrice: m }),
          )
        );
      }
      function W(e) {
        const { appid: t, bHidePrice: n } = e,
          [a] = (0, I.t7)(t, i.Xh),
          r = (0, D.n9)(),
          s = (0, y.Qn)();
        if (!a) return null;
        const o = a.GetBestPurchaseOption(),
          l = o?.hide_discount_pct_for_compliance && !0;
        return c.createElement(
          H.A,
          { appID: t },
          c.createElement(
            m.Z,
            {
              className: (0, k.A)(M().AppCapsuleCtn, "AppCapsuleCtn"),
              ...(0, _.S)(a, r, s, !1),
            },
            c.createElement(
              L.Qf,
              {
                item: { type: "game", id: t },
                hoverProps: {
                  direction: "overlay",
                  style: { minWidth: "320px" },
                },
              },
              c.createElement("img", {
                className: M().AppCapsuleImage,
                src: a.GetAssets().GetSmallCapsuleURL(),
              }),
            ),
            Boolean(!n && !a.BIsFree()) &&
              c.createElement(
                "span",
                {
                  className: (0, k.A)(
                    M().AppCapsulePrice,
                    Boolean(o?.discount_pct) ? F().Discounted : "",
                  ),
                },
                Boolean(o?.discount_pct && l) &&
                  c.createElement(
                    "div",
                    { className: F().DiscountIconCtn },
                    c.createElement(G.XH_, null),
                  ),
                Boolean(o?.discount_pct && !l) &&
                  c.createElement(
                    "span",
                    { className: F().StoreSaleDiscountBox },
                    `-${o?.discount_pct}%`,
                  ),
                Boolean(o.final_price_in_cents) &&
                  c.createElement(
                    "span",
                    { className: F().StoreSalePriceBox },
                    o.formatted_final_price,
                  ),
              ),
          ),
        );
      }
      function z(e) {
        const { event: t, imageURLOverride: n, onClick: r } = e,
          s = (0, a.sf)(y.TS.LANGUAGE),
          [o, i, m] = (0, l.q3)(() =>
            t
              ? [
                  void 0 !== n
                    ? n
                    : t.GetImageURLWithFallback(
                        "capsule",
                        s,
                        u.wI.capsule_main,
                      ),
                  t.GetNameWithFallback(s),
                  t.GetCategoryAsString(),
                ]
              : [void 0, void 0, void 0],
          );
        return t
          ? c.createElement(
              C.tj,
              {
                className: M().OtherEvents_EventCtn + " " + M().HorizontalEvent,
                eventModel: t,
                route: C.PH.k_eView,
                onClick: r,
              },
              c.createElement(
                "div",
                { className: M().OtherEvents_ContentCtn },
                c.createElement(
                  "div",
                  { className: M().OtherEvents_MainImageCtn },
                  c.createElement("img", {
                    src: o,
                    className: M().OtherEvents_MainImage,
                  }),
                ),
              ),
              c.createElement(
                "div",
                { className: M().OtherEvents_TextCtn },
                c.createElement(
                  "div",
                  { className: M().HorizontalDescriptionCtn },
                  c.createElement(
                    "div",
                    { className: M().HorizontalDescription },
                    m,
                  ),
                  c.createElement(N.K4, {
                    bSingleLine: !0,
                    dateAndTime: t.GetStartTimeAndDateUnixSeconds(),
                  }),
                ),
                c.createElement("div", { className: M().HorizontalTitle }, i),
              ),
            )
          : c.createElement("div", { className: M().OtherEvents_EventCtn });
      }
    },
  },
]);
