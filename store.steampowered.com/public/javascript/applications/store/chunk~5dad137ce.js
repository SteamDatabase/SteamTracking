/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [119],
  {
    73964: (e, t, n) => {
      n.d(t, { $: () => o });
      var a = n(41735),
        l = n.n(a),
        r = n(78327),
        s = n(91254),
        c = n(77516);
      class o extends s.ZQ {
        async DeleteOldAnnouncement(e, t) {
          let n = new URLSearchParams();
          n.append("sessionid", r.TS.SESSIONID);
          let a =
              r.TS.COMMUNITY_BASE_URL +
              "/gid/" +
              e.ConvertTo64BitString() +
              "/announcements/ajaxdeleteannouncement/" +
              t,
            s = await l().post(a, n);
          if (1 != s.data.success) throw s.data;
          return this.RemoveGIDFromList(e, c.cB + t), s.data;
        }
        static sm_Instance;
        static Get() {
          return (
            o.sm_Instance || ((o.sm_Instance = new o()), o.sm_Instance.Init()),
            o.sm_Instance
          );
        }
      }
    },
    8107: (e, t, n) => {
      n.d(t, { N: () => A });
      var a = n(34629),
        l = n(41735),
        r = n.n(l),
        s = n(75844),
        c = n(90626),
        o = n(60746),
        i = n(68033),
        m = n(41550),
        d = n(51706),
        E = n(88843),
        v = n(64641),
        u = n.n(v),
        p = n(22797),
        h = n(68797),
        S = n(78327),
        I = n(8527),
        g = n(30894),
        C = n(51272),
        N = n(82715);
      const A = (e) => {
        let { bShowOnlyInitialEvent: t } = e;
        const n = (0, S.Qn)();
        return c.createElement(
          N.tH,
          null,
          c.createElement(G, { ...e, bShowOnlyInitialEvent: t || n }),
        );
      };
      let G = class extends c.Component {
        state = { bLoading: !1, eventModel: this.props.eventModel };
        m_refParent = c.createRef();
        m_cancelSignal = r().CancelToken.source();
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
            additionalParams: l,
          } = this.props;
          a.LoadAdjacentPartnerEventsByAnnouncement(
            n,
            t,
            e,
            0,
            3,
            l,
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
            o.KN.Get()
              .GetTracker()
              .MarkEventRead(e.GID, e.clanSteamID.GetAccountID(), t) &&
            o.KN.Get().GetTracker().Flush();
        }
        render() {
          const { bShowOnlyInitialEvent: e } = this.props,
            { bLoading: t, eventModel: n } = this.state;
          if (t)
            return c.createElement(
              d.of,
              null,
              c.createElement(
                "div",
                { className: u().FlexCenter, style: { height: "400px" } },
                c.createElement(p.t, null),
              ),
            );
          const {
            closeModal: a,
            appid: l,
            clanSteamID: r,
            className: s,
            partnerEventStore: o,
            showAppHeader: E,
            bPrimaryPageFeature: v,
            additionalParams: h,
            eventClassName: S,
          } = this.props;
          let N;
          I.TS.IN_CLIENT &&
            n?.appid &&
            (g.Fm.Get().HintLoad(),
            g.Fm.Get().BOwnsApp(n.appid) &&
              (N = (e) =>
                (0, C.EP)(e, "steam://nav/games/details/" + n.appid)));
          const A = c.createElement(
            "div",
            null,
            c.createElement(m.AD, {
              initialEvent: n,
              appid: l,
              clanSteamID: r,
              partnerEventStore: o,
              emoticonStore: i.A,
              closeModal: !v && a,
              showAppHeader: E,
              bShowOnlyInitialEvent: e,
              additionalParams: h,
              eventClassName: S,
              onAppIconClick: N,
            }),
          );
          return v
            ? A
            : c.createElement(
                d.of,
                { className: s },
                c.createElement(
                  d.Qs,
                  { navID: "WebRowEventInfiniteScroll", closeModal: a },
                  A,
                ),
              );
        }
      };
      G = (0, a.Cg)([s.PA], G);
    },
    35685: (e, t, n) => {
      n.d(t, { kH: () => z, rN: () => R, uY: () => x, zA: () => W });
      var a = n(22837),
        l = n(41735),
        r = n.n(l),
        s = n(75844),
        c = n(65946),
        o = n(90626),
        i = n(57876),
        m = n(76217),
        d = n(97907),
        E = n(77516),
        v = n(17720),
        u = n(71138),
        p = n(4796),
        h = n(95886),
        S = n(60746),
        I = n(55263),
        g = n(8107),
        C = n(75113),
        N = n(95695),
        A = n.n(N),
        G = n(72860),
        _ = n(76684),
        f = n(12155),
        D = n(60014),
        b = n(62490),
        B = n(52038),
        P = n(61859),
        k = n(78327),
        w = n(84811),
        y = n(22797),
        T = n(33924),
        L = n.n(T),
        O = n(26101),
        M = n(18654),
        F = n.n(M),
        H = n(84518);
      const R = (0, s.PA)((e) => {
          const {
              clanAccountID: t,
              gidAnnouncement: n,
              partnerEventStore: a,
              trackingLocation: l,
              bViewAllShowInfiniteScroll: s,
            } = e,
            c = v.b.InitFromClanID(t),
            i = (0, o.useRef)(null),
            [E, u] = (0, o.useState)(null),
            [h, I] = (0, o.useState)(!0),
            [N, G] = (0, o.useState)(!1);
          if (
            ((0, o.useEffect)(
              () => (
                (async () => {
                  i.current &&
                    i.current("PartnerEventRow Initializng new mount");
                  const e = r().CancelToken.source();
                  i.current = e.cancel;
                  const s = v.b.InitFromClanID(t);
                  await p.ac.LoadClanInfoForClanSteamID(s);
                  let c = await a.LoadAdjacentPartnerEventsByAnnouncement(
                    n,
                    s,
                    null,
                    4,
                    4,
                    void 0,
                    e,
                  );
                  if (!e.token.reason) {
                    c = c || [];
                    let e = c
                      .filter((e) => e.GetAnnouncementGID() != n)
                      .map((e) => e.AnnouncementGID);
                    b.fW(e);
                    const t = e
                      .slice(0, 3)
                      .map((e) => a.GetClanEventFromAnnouncementGID(e));
                    if ((u(t), I(!1), l)) {
                      let e = S.KN.Get().GetTracker(),
                        r = !1;
                      if (a.BHasClanAnnouncementGID(n)) {
                        let t = a.GetClanEventFromAnnouncementGID(n);
                        t &&
                          t.BIsPartnerEvent() &&
                          t.BIsVisibleEvent() &&
                          (e.MarkEventRead(
                            t.GID,
                            t.clanSteamID.GetAccountID(),
                            l,
                          ),
                          (r = !0));
                      }
                      t.length > 0 &&
                        (c
                          .filter((e) => e.BIsPartnerEvent())
                          .forEach((t) =>
                            e.MarkEventShown(
                              t.GID,
                              t.clanSteamID.GetAccountID(),
                              l,
                            ),
                          ),
                        (r = !0)),
                        r && e.Flush();
                    }
                  }
                })(),
                () => {
                  i.current && i.current("PartnerEventRow: unmounting");
                }
              ),
              [t, n, a, l],
            ),
            h)
          )
            return o.createElement(y.t, { position: "center", size: "medium" });
          if (0 == E.length) return o.createElement("div", null);
          const _ = p.ac.GetClanInfoByClanAccountID(t);
          return o.createElement(
            w.tH,
            null,
            o.createElement(
              "div",
              { className: (0, B.A)(L().OtherEventsCtn, "OtherEventsCtn") },
              o.createElement(
                "div",
                { className: A().EventSectionTitleCtn },
                o.createElement(
                  "div",
                  {
                    className: (0, B.A)(
                      A().EventSectionTitle,
                      "EventSectionTitle",
                    ),
                  },
                  (0, P.PP)("#EventBrowse_MoreEventsTitle", _.group_name),
                  " ",
                ),
                o.createElement(
                  "div",
                  { className: A().EventSectionSpacer },
                  " ",
                ),
                s
                  ? o.createElement(
                      "div",
                      {
                        className: A().EventSectionMoreBtn,
                        onClick: () => G(!0),
                      },
                      (0, P.we)("#EventBrowse_MoreEventsBtn"),
                    )
                  : o.createElement(
                      C.tj,
                      {
                        eventModel: E[0],
                        route: C.PH.k_eViewWebSiteHub,
                        className: A().EventSectionMoreBtn,
                      },
                      (0, P.we)("#EventBrowse_MoreEventsBtn"),
                    ),
              ),
              o.createElement(
                m.Z,
                {
                  className: L().OtherEvents,
                  "flow-children": "column",
                  navEntryPreferPosition: d.iU.PREFERRED_CHILD,
                },
                E.map((e) =>
                  o.createElement(x, { key: e.AnnouncementGID, event: e }),
                ),
              ),
              Boolean(N) &&
                o.createElement(g.N, {
                  appid: E[0].appid,
                  clanSteamID: c,
                  announcementGID: E[0].AnnouncementGID,
                  closeModal: () => G(!1),
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
            bShowAssociatedApp: l,
            langOverride: r,
            onClick: s,
            eEventRount: i,
            bHidePrices: m,
          } = e,
          [d, v, p, S, I, g] = (0, c.q3)(() => {
            const e = r || (0, a.sf)(k.TS.LANGUAGE),
              l = Boolean(void 0 !== n)
                ? n
                : t.GetImageURLWithFallback("capsule", e, u.wI.capsule_main),
              s = Boolean(void 0 !== n)
                ? n
                : t.GetImageURLWithFallback("capsule", e, u.wI.full);
            return [
              l,
              t.GetNameWithFallback(e) || "",
              t.GetCategoryAsString(),
              t.GetSummaryWithFallback(e),
              s,
              t.GetSubTitleWithLanguageFallback(e) || "",
            ];
          }),
          [N, A] = (0, o.useState)(void 0),
          G = N
            ? { src: N }
            : { src: d, onLoad: () => A(d), onError: () => A(I) };
        if (!t)
          return o.createElement("div", {
            className: L().OtherEvents_EventCtn,
          });
        const f = (0, h.v0)().GetStoreInitializationTimestamp().getTime() / 1e3,
          D = t ? t.GetStartTimeAndDateUnixSeconds() : 0;
        let b = g;
        return (
          g && (g.length > U || v.length > U) && (b = void 0),
          o.createElement(
            o.Fragment,
            null,
            o.createElement(
              C.tj,
              {
                className: (0, B.A)(
                  L().OtherEvents_EventCtn,
                  "OtherEvents_EventCtn",
                  L().HoversEnabled,
                ),
                eventModel: t,
                route: i || C.PH.k_eView,
                onClick: s,
                preferredFocus: !0,
              },
              o.createElement(
                "div",
                { className: L().EventSummaryContainer },
                o.createElement("div", { className: L().EventSummaryType }, p),
                o.createElement("div", { className: L().EventSummaryText }, S),
              ),
              o.createElement("div", {
                className: L().OtherEvents_BGImage,
                style: {
                  backgroundColor: "#ffffff",
                  backgroundImage: N ? `url(${(0, E.j3)(N)})` : "none",
                },
              }),
              o.createElement(
                "div",
                { className: L().OtherEvents_ContentCtn },
                o.createElement(
                  "div",
                  { className: L().OtherEvents_MainImageCtn },
                  o.createElement("img", {
                    ...G,
                    className: L().OtherEvents_MainImage,
                  }),
                ),
                o.createElement(
                  "div",
                  { className: L().OtherEvents_TextCtn },
                  o.createElement(
                    "div",
                    { className: L().OtherEvents_TextTitle },
                    v,
                  ),
                  Boolean(b) &&
                    o.createElement(
                      "div",
                      { className: L().OtherEvents_SubTitle },
                      b,
                    ),
                  Boolean(D > f)
                    ? o.createElement(
                        "div",
                        { className: (0, B.A)(L().UpcomingCtn, "UpcomingCtn") },
                        o.createElement(_.K4, {
                          bSingleLine: !0,
                          dateAndTime: t.GetStartTimeAndDateUnixSeconds(),
                        }),
                      )
                    : o.createElement(_.K4, {
                        bSingleLine: !0,
                        bOnlyDate: !0,
                        dateAndTime: t.GetStartTimeAndDateUnixSeconds(),
                      }),
                ),
              ),
            ),
            Boolean(l && t.appid) &&
              o.createElement(W, { appid: t.appid, bHidePrice: m }),
          )
        );
      }
      function W(e) {
        const { appid: t, bHidePrice: n } = e,
          [a] = (0, I.t7)(t, i.Xh),
          l = (0, D.n9)(),
          r = (0, k.Qn)();
        if (!a) return null;
        const s = a.GetBestPurchaseOption(),
          c = s?.hide_discount_pct_for_compliance && !0;
        return o.createElement(
          H.A,
          { appID: t },
          o.createElement(
            m.Z,
            {
              className: (0, B.A)(L().AppCapsuleCtn, "AppCapsuleCtn"),
              ...(0, G.S)(a, l, r, !1),
            },
            o.createElement(
              O.Qf,
              {
                item: { type: "game", id: t },
                hoverProps: {
                  direction: "overlay",
                  style: { minWidth: "320px" },
                },
              },
              o.createElement("img", {
                className: L().AppCapsuleImage,
                src: a.GetAssets().GetSmallCapsuleURL(),
              }),
            ),
            Boolean(!n && !a.BIsFree()) &&
              o.createElement(
                "span",
                {
                  className: (0, B.A)(
                    L().AppCapsulePrice,
                    Boolean(s?.discount_pct) ? F().Discounted : "",
                  ),
                },
                Boolean(s?.discount_pct && c) &&
                  o.createElement(
                    "div",
                    { className: F().DiscountIconCtn },
                    o.createElement(f.XH_, null),
                  ),
                Boolean(s?.discount_pct && !c) &&
                  o.createElement(
                    "span",
                    { className: F().StoreSaleDiscountBox },
                    `-${s?.discount_pct}%`,
                  ),
                Boolean(s.final_price_in_cents) &&
                  o.createElement(
                    "span",
                    { className: F().StoreSalePriceBox },
                    s.formatted_final_price,
                  ),
              ),
          ),
        );
      }
      function z(e) {
        const { event: t, imageURLOverride: n, onClick: l } = e,
          r = (0, a.sf)(k.TS.LANGUAGE),
          [s, i, m] = (0, c.q3)(() =>
            t
              ? [
                  void 0 !== n
                    ? n
                    : t.GetImageURLWithFallback(
                        "capsule",
                        r,
                        u.wI.capsule_main,
                      ),
                  t.GetNameWithFallback(r),
                  t.GetCategoryAsString(),
                ]
              : [void 0, void 0, void 0],
          );
        return t
          ? o.createElement(
              C.tj,
              {
                className: L().OtherEvents_EventCtn + " " + L().HorizontalEvent,
                eventModel: t,
                route: C.PH.k_eView,
                onClick: l,
              },
              o.createElement(
                "div",
                { className: L().OtherEvents_ContentCtn },
                o.createElement(
                  "div",
                  { className: L().OtherEvents_MainImageCtn },
                  o.createElement("img", {
                    src: s,
                    className: L().OtherEvents_MainImage,
                  }),
                ),
              ),
              o.createElement(
                "div",
                { className: L().OtherEvents_TextCtn },
                o.createElement(
                  "div",
                  { className: L().HorizontalDescriptionCtn },
                  o.createElement(
                    "div",
                    { className: L().HorizontalDescription },
                    m,
                  ),
                  o.createElement(_.K4, {
                    bSingleLine: !0,
                    dateAndTime: t.GetStartTimeAndDateUnixSeconds(),
                  }),
                ),
                o.createElement("div", { className: L().HorizontalTitle }, i),
              ),
            )
          : o.createElement("div", { className: L().OtherEvents_EventCtn });
      }
    },
  },
]);
