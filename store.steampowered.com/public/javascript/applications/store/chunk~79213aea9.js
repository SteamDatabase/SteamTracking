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
      n.d(t, { $: () => o });
      var a = n(41735),
        r = n.n(a),
        c = n(78327),
        s = n(91254),
        l = n(77516);
      class o extends s.ZQ {
        async DeleteOldAnnouncement(e, t) {
          let n = new URLSearchParams();
          n.append("sessionid", c.TS.SESSIONID);
          let a =
              c.TS.COMMUNITY_BASE_URL +
              "/gid/" +
              e.ConvertTo64BitString() +
              "/announcements/ajaxdeleteannouncement/" +
              t,
            s = await r().post(a, n);
          if (1 != s.data.success) throw s.data;
          return this.RemoveGIDFromList(e, l.cB + t), s.data;
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
    81301: (e, t, n) => {
      "use strict";
      n.d(t, { H: () => C, Y: () => p });
      var a = n(34629),
        r = n(75844),
        c = n(90626),
        s = n(73964),
        l = n(91254),
        o = n(68033),
        i = n(41550),
        m = n(738),
        u = n(73745),
        E = n(19332),
        v = n(44325);
      function d(e) {
        const { event: t, closeModal: n } = e;
        return c.createElement(
          v.Qs,
          { navID: "SinglePartnerEventRoot", closeModal: n },
          c.createElement(i.AD, {
            initialEvent: t,
            bShowOnlyInitialEvent: !0,
            partnerEventStore: l.O3,
            emoticonStore: o.A,
            showAppHeader: !0,
            closeModal: n,
          }),
        );
      }
      function p(e, t) {
        (0, m.pg)(c.createElement(d, { event: e }), t);
      }
      let C = class extends c.Component {
        m_refFocus = c.createRef();
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
          return c.createElement(
            "div",
            {
              ref: this.m_refFocus,
              className: E.Main,
              onClick: this.OnBackgroundClick,
            },
            c.createElement(i.He, {
              key: e.GID,
              event: e,
              emoticonStore: o.A,
              partnerEventStore: s.$.Get(),
              langOverride: t,
              isPreview: n,
              bDisableBroadcastPlayer: !1,
            }),
          );
        }
      };
      (0, a.Cg)([u.oI], C.prototype, "escFunction", null),
        (0, a.Cg)([u.oI], C.prototype, "OnBackgroundClick", null),
        (C = (0, a.Cg)([r.PA], C));
    },
    35685: (e, t, n) => {
      "use strict";
      n.d(t, { kH: () => z, rN: () => R, uY: () => x, zA: () => W });
      var a = n(22837),
        r = n(41735),
        c = n.n(r),
        s = n(75844),
        l = n(65946),
        o = n(90626),
        i = n(57876),
        m = n(76217),
        u = n(1977),
        E = n(77516),
        v = n(17720),
        d = n(71138),
        p = n(4796),
        C = n(95886),
        S = n(60746),
        I = n(55263),
        h = n(8107),
        g = n(75113),
        f = n(95695),
        _ = n.n(f),
        A = n(72860),
        N = n(76684),
        G = n(12155),
        D = n(60014),
        k = n(62490),
        w = n(52038),
        B = n(61859),
        O = n(78327),
        b = n(84811),
        T = n(22797),
        P = n(33924),
        y = n.n(P),
        F = n(26101),
        M = n(18654),
        L = n.n(M),
        H = n(84518);
      const R = (0, s.PA)((e) => {
          const {
              clanAccountID: t,
              gidAnnouncement: n,
              partnerEventStore: a,
              trackingLocation: r,
              bViewAllShowInfiniteScroll: s,
            } = e,
            l = v.b.InitFromClanID(t),
            i = (0, o.useRef)(null),
            [E, d] = (0, o.useState)(null),
            [C, I] = (0, o.useState)(!0),
            [f, A] = (0, o.useState)(!1);
          if (
            ((0, o.useEffect)(
              () => (
                (async () => {
                  i.current &&
                    i.current("PartnerEventRow Initializng new mount");
                  const e = c().CancelToken.source();
                  i.current = e.cancel;
                  const s = v.b.InitFromClanID(t);
                  await p.ac.LoadClanInfoForClanSteamID(s);
                  let l = await a.LoadAdjacentPartnerEventsByAnnouncement(
                    n,
                    s,
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
                    k.fW(e);
                    const t = e
                      .slice(0, 3)
                      .map((e) => a.GetClanEventFromAnnouncementGID(e));
                    if ((d(t), I(!1), r)) {
                      let e = S.KN.Get().GetTracker(),
                        c = !1;
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
                          (c = !0));
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
                        (c = !0)),
                        c && e.Flush();
                    }
                  }
                })(),
                () => {
                  i.current && i.current("PartnerEventRow: unmounting");
                }
              ),
              [t, n, a, r],
            ),
            C)
          )
            return o.createElement(T.t, { position: "center", size: "medium" });
          if (0 == E.length) return o.createElement("div", null);
          const N = p.ac.GetClanInfoByClanAccountID(t);
          return o.createElement(
            b.tH,
            null,
            o.createElement(
              "div",
              { className: (0, w.A)(y().OtherEventsCtn, "OtherEventsCtn") },
              o.createElement(
                "div",
                { className: _().EventSectionTitleCtn },
                o.createElement(
                  "div",
                  {
                    className: (0, w.A)(
                      _().EventSectionTitle,
                      "EventSectionTitle",
                    ),
                  },
                  (0, B.PP)("#EventBrowse_MoreEventsTitle", N.group_name),
                  " ",
                ),
                o.createElement(
                  "div",
                  { className: _().EventSectionSpacer },
                  " ",
                ),
                s
                  ? o.createElement(
                      "div",
                      {
                        className: _().EventSectionMoreBtn,
                        onClick: () => A(!0),
                      },
                      (0, B.we)("#EventBrowse_MoreEventsBtn"),
                    )
                  : o.createElement(
                      g.tj,
                      {
                        eventModel: E[0],
                        route: g.PH.k_eViewWebSiteHub,
                        className: _().EventSectionMoreBtn,
                      },
                      (0, B.we)("#EventBrowse_MoreEventsBtn"),
                    ),
              ),
              o.createElement(
                m.Z,
                {
                  className: y().OtherEvents,
                  "flow-children": "column",
                  navEntryPreferPosition: u.iU.PREFERRED_CHILD,
                },
                E.map((e) =>
                  o.createElement(x, { key: e.AnnouncementGID, event: e }),
                ),
              ),
              Boolean(f) &&
                o.createElement(h.N, {
                  appid: E[0].appid,
                  clanSteamID: l,
                  announcementGID: E[0].AnnouncementGID,
                  closeModal: () => A(!1),
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
            langOverride: c,
            onClick: s,
            eEventRount: i,
            bHidePrices: m,
          } = e,
          [u, v, p, S, h, f, _, A] = (0, l.q3)(() => {
            const e = c || (0, a.sf)(O.TS.LANGUAGE),
              r = Boolean(void 0 !== n)
                ? n
                : t.GetImageURLWithFallback("capsule", e, d.wI.capsule_main),
              s = Boolean(void 0 !== n)
                ? n
                : t.GetImageURLWithFallback("capsule", e, d.wI.full);
            return [
              t.appid,
              r,
              t.GetNameWithFallback(e) || "",
              t.GetCategoryAsString(),
              t.GetSummaryWithFallback(e),
              (0, E.j3)(r),
              (0, E.j3)(s),
              t.GetSubTitleWithLanguageFallback(e) || "",
            ];
          }),
          [G] = (0, I.t7)(u, { include_assets: !0, include_screenshots: !0 }),
          [D, k] = (0, o.useState)(void 0);
        if (
          ((0, o.useEffect)(() => {
            const e = new Image();
            (e.src = v),
              (e.onload = () => {
                k(f);
              }),
              (e.onerror = () => {
                k(_);
              });
          }, [f, v, _]),
          !t)
        )
          return o.createElement("div", {
            className: y().OtherEvents_EventCtn,
          });
        if (!G && u)
          return o.createElement(T.t, {
            className: y().OtherEvents_EventCtn,
            size: "small",
            position: "center",
            string: (0, B.we)("#Loading"),
          });
        const b = (0, C.v0)().GetStoreInitializationTimestamp().getTime() / 1e3,
          P = t ? t.GetStartTimeAndDateUnixSeconds() : 0;
        let F = A;
        return (
          A && (A.length > U || p.length > U) && (F = void 0),
          o.createElement(
            o.Fragment,
            null,
            o.createElement(
              g.tj,
              {
                className: (0, w.A)(
                  y().OtherEvents_EventCtn,
                  "OtherEvents_EventCtn",
                  y().HoversEnabled,
                ),
                eventModel: t,
                route: i || g.PH.k_eView,
                onClick: s,
                preferredFocus: !0,
              },
              o.createElement(
                "div",
                { className: y().EventSummaryContainer },
                o.createElement("div", { className: y().EventSummaryType }, S),
                o.createElement("div", { className: y().EventSummaryText }, h),
              ),
              o.createElement("div", {
                className: y().OtherEvents_BGImage,
                style: {
                  backgroundColor: "#ffffff",
                  backgroundImage: D ? `url(${D})` : "none",
                },
              }),
              o.createElement(
                "div",
                { className: y().OtherEvents_ContentCtn },
                o.createElement(
                  "div",
                  { className: y().OtherEvents_MainImageCtn },
                  o.createElement("img", {
                    src: D || v,
                    className: y().OtherEvents_MainImage,
                  }),
                ),
                o.createElement(
                  "div",
                  { className: y().OtherEvents_TextCtn },
                  o.createElement(
                    "div",
                    { className: y().OtherEvents_TextTitle },
                    p,
                  ),
                  Boolean(F) &&
                    o.createElement(
                      "div",
                      { className: y().OtherEvents_SubTitle },
                      F,
                    ),
                  Boolean(P > b)
                    ? o.createElement(
                        "div",
                        { className: (0, w.A)(y().UpcomingCtn, "UpcomingCtn") },
                        o.createElement(N.K4, {
                          bSingleLine: !0,
                          dateAndTime: t.GetStartTimeAndDateUnixSeconds(),
                        }),
                      )
                    : o.createElement(N.K4, {
                        bSingleLine: !0,
                        bOnlyDate: !0,
                        dateAndTime: t.GetStartTimeAndDateUnixSeconds(),
                      }),
                ),
              ),
            ),
            Boolean(r && t.appid) &&
              o.createElement(W, { appid: t.appid, bHidePrice: m }),
          )
        );
      }
      function W(e) {
        const { appid: t, bHidePrice: n } = e,
          [a] = (0, I.t7)(t, i.Xh),
          r = (0, D.n9)(),
          c = (0, O.Qn)();
        if (!a) return null;
        const s = a.GetBestPurchaseOption(),
          l = s?.hide_discount_pct_for_compliance && !0;
        return o.createElement(
          H.A,
          { appID: t },
          o.createElement(
            m.Z,
            {
              className: (0, w.A)(y().AppCapsuleCtn, "AppCapsuleCtn"),
              ...(0, A.S)(a, r, c, !1),
            },
            o.createElement(
              F.Qf,
              {
                item: { type: "game", id: t },
                hoverProps: {
                  direction: "overlay",
                  style: { minWidth: "320px" },
                },
              },
              o.createElement("img", {
                className: y().AppCapsuleImage,
                src: a.GetAssets().GetSmallCapsuleURL(),
              }),
            ),
            Boolean(!n && !a.BIsFree()) &&
              o.createElement(
                "span",
                {
                  className: (0, w.A)(
                    y().AppCapsulePrice,
                    Boolean(s?.discount_pct) ? L().Discounted : "",
                  ),
                },
                Boolean(s?.discount_pct && l) &&
                  o.createElement(
                    "div",
                    { className: L().DiscountIconCtn },
                    o.createElement(G.XH_, null),
                  ),
                Boolean(s?.discount_pct && !l) &&
                  o.createElement(
                    "span",
                    { className: L().StoreSaleDiscountBox },
                    `-${s?.discount_pct}%`,
                  ),
                Boolean(s.final_price_in_cents) &&
                  o.createElement(
                    "span",
                    { className: L().StoreSalePriceBox },
                    s.formatted_final_price,
                  ),
              ),
          ),
        );
      }
      function z(e) {
        const { event: t, imageURLOverride: n, onClick: r } = e,
          c = (0, a.sf)(O.TS.LANGUAGE),
          [s, i, m] = (0, l.q3)(() =>
            t
              ? [
                  void 0 !== n
                    ? n
                    : t.GetImageURLWithFallback(
                        "capsule",
                        c,
                        d.wI.capsule_main,
                      ),
                  t.GetNameWithFallback(c),
                  t.GetCategoryAsString(),
                ]
              : [void 0, void 0, void 0],
          );
        return t
          ? o.createElement(
              g.tj,
              {
                className: y().OtherEvents_EventCtn + " " + y().HorizontalEvent,
                eventModel: t,
                route: g.PH.k_eView,
                onClick: r,
              },
              o.createElement(
                "div",
                { className: y().OtherEvents_ContentCtn },
                o.createElement(
                  "div",
                  { className: y().OtherEvents_MainImageCtn },
                  o.createElement("img", {
                    src: s,
                    className: y().OtherEvents_MainImage,
                  }),
                ),
              ),
              o.createElement(
                "div",
                { className: y().OtherEvents_TextCtn },
                o.createElement(
                  "div",
                  { className: y().HorizontalDescriptionCtn },
                  o.createElement(
                    "div",
                    { className: y().HorizontalDescription },
                    m,
                  ),
                  o.createElement(N.K4, {
                    bSingleLine: !0,
                    dateAndTime: t.GetStartTimeAndDateUnixSeconds(),
                  }),
                ),
                o.createElement("div", { className: y().HorizontalTitle }, i),
              ),
            )
          : o.createElement("div", { className: y().OtherEvents_EventCtn });
      }
    },
  },
]);
