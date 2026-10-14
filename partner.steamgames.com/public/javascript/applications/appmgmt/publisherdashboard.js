/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [18523],
    {
      82816: (V, he, _) => {
        "use strict";
        _.r(he), _.d(he, { default: () => zn });
        var t = _(7850),
          p = _(90626),
          h = _(3166),
          E = _(1936),
          je = _(95821),
          j = _(36707),
          ue = _(6777),
          o = _(18210),
          q = _(54963),
          S = _(41502),
          z = _(61318),
          oe = _(71421),
          fe = _(64868);
        function xe(s) {
          const { viewDate: e } = s,
            n = { year: "numeric", month: "short" },
            a = new Intl.DateTimeFormat(navigator.language, n).format(e);
          return (0, t.jsx)("div", {
            className: z.MonthPickerContainer,
            children: (0, t.jsx)("div", {
              className: z.MonthPickerDate,
              children: a,
            }),
          });
        }
        function ke(s) {
          const {
              now: e,
              viewDate: n,
              events: a,
              filterVisibleEventIds: i,
              bShowPreceedingWeeks: l,
              bShowFollowingWeeks: r,
              fnScrollToDay: d,
              hoverEvent: m,
              compareEvents: c,
              colorPriority: u,
            } = s,
            f = (0, S.xi)(e),
            v = (0, S.bv)(a, (A) => (0, S.xi)(A.startDate)),
            D = (0, S.kO)(n, -n.getDay()),
            R = new Date(n.getFullYear(), n.getMonth() + 1, 0).getDate(),
            C =
              (R +
                n.getDay() +
                ((n.getDay() + R) % 7 != 0 ? 7 - ((n.getDay() + R) % 7) : 0)) /
              7,
            N = new Intl.DateTimeFormat(navigator.language, {
              year: "numeric",
              month: "long",
              day: "numeric",
            }),
            y = p.useMemo(
              () =>
                Array.from({ length: C * 7 }, (A, B) => B).map(() =>
                  p.createRef(),
                ),
              [C],
            );
          p.useEffect(() => {
            for (let A = 0; A < C; A++) {
              const B = (0, S.kO)(D, A * 7);
              for (let P = 0; P < 7; P++) {
                const I = (0, S.kO)(B, P),
                  T = (0, S.xi)(I),
                  F = v.get(Math.floor(T.getTime() / 1e3))?.sort(u);
                let W, L, Q;
                if (F) {
                  const G = F.find((ie) => ie.note);
                  W = G ? G.color : void 0;
                  const $ = F.filter((ie) => !ie.note);
                  L = $.length > 0 ? $[0].color : void 0;
                  const pe = $.filter((ie) => ie.color != L);
                  Q = pe.length > 0 ? pe[0].color : void 0;
                }
                W
                  ? y[A * 7 + P].current?.style.setProperty("--note-color", W)
                  : y[A * 7 + P].current?.style.removeProperty("--note-color"),
                  L
                    ? y[A * 7 + P].current?.style.setProperty("--day-color1", L)
                    : y[A * 7 + P].current?.style.removeProperty(
                        "--day-color1",
                      ),
                  (Q ?? L)
                    ? y[A * 7 + P].current?.style.setProperty(
                        "--day-color2",
                        Q ?? L,
                      )
                    : y[A * 7 + P].current?.style.removeProperty(
                        "--day-color2",
                      );
              }
            }
          }, [u, v, D, C, y]);
          const w = [];
          for (let A = 0; A < C; A++) {
            const B = [],
              P = (0, S.kO)(D, A * 7);
            for (let I = 0; I < 7; I++) {
              const T = (0, S.kO)(P, I),
                F = (0, S.xi)(T),
                W = n.getMonth() === T.getMonth(),
                L =
                  n.getMonth() === T.getMonth() ||
                  (l && T <= n) ||
                  (r && T >= n),
                Q = F.getTime() === f.getTime(),
                G = v.get(Math.floor(F.getTime() / 1e3))?.sort(c),
                $ = G?.every((Ee) => i.has(Ee.id)),
                pe = G?.some((Ee) => Ee.note),
                ie =
                  m &&
                  F.getTime() >= (0, S.xi)(m.startDate).getTime() &&
                  F.getTime() <= (0, S.xi)(m.endDate).getTime(),
                rt = (0, j.A)(
                  z.Day,
                  !W && !ie && z.OtherMonth,
                  !L && z.Inactive,
                  Q && z.Today,
                  pe && $ && z.Note,
                  !pe && $ && z.Event,
                  ie && L && z.Hovered,
                );
              B.push(
                (0, t.jsx)(
                  Oe,
                  {
                    date: T,
                    daysEvents: G,
                    tooltipDateFormat: N,
                    children: (0, t.jsx)("div", {
                      className: rt,
                      onClick: () => d(T),
                      ref: y[A * 7 + I],
                      children: T.getDate(),
                    }),
                  },
                  I,
                ),
              );
            }
            w.push((0, t.jsx)("div", { className: z.Week, children: B }, A));
          }
          return (0, t.jsx)(t.Fragment, { children: w });
        }
        function Oe(s) {
          const {
            date: e,
            daysEvents: n,
            tooltipDateFormat: a,
            children: i,
          } = s;
          if (!n) return (0, t.jsx)(t.Fragment, { children: i });
          const l = (0, t.jsxs)("div", {
            className: z.DayTooltipContainer,
            children: [
              (0, t.jsx)("div", {
                className: z.DayTooltipDate,
                children: a.format(e),
              }),
              n.map((r) => (0, t.jsx)(Ne, { event: r }, r.id)),
            ],
          });
          return (0, t.jsx)(oe.m9, { toolTipContent: l, children: i });
        }
        function Ne(s) {
          const { event: e } = s;
          We(e);
          const n = p.useRef(void 0);
          return (
            p.useEffect(() => {
              n.current?.style.setProperty("--event-color", e.color);
            }, [e.color]),
            (0, t.jsxs)("div", {
              className: z.DayTooltipEvent,
              ref: n,
              children: [
                e.title,
                e.valveOnly &&
                  (0, t.jsx)("span", {
                    className: z.ValveOnly,
                    children: " (VO)",
                  }),
              ],
            })
          );
        }
        function Ve(s) {
          const e = new Intl.DateTimeFormat(navigator.language, {
              weekday: "short",
            }),
            n = [...Array(7).keys()].map((a) =>
              e.format(new Date(2024, 0, a + 7)),
            );
          return (0, t.jsx)("div", {
            className: z.Week,
            children: n.map((a) =>
              (0, t.jsx)("div", { className: z.DayName, children: a }, a),
            ),
          });
        }
        function We(s) {
          const e = (0, fe.CH)();
          p.useEffect(() => {
            const n = s.registerForChange?.(() => e());
            return () => n?.Unregister();
          }, [s, e]);
        }
        var Te = _(67705),
          H = _(8323);
        class U {
          m_eventsChanged = new H.lu();
          m_rgHiddenIds = new Set();
          m_rgAdditionalEvents = new Map();
          EventsChanged() {
            return this.m_eventsChanged;
          }
          GetHiddenIds() {
            return this.m_rgHiddenIds;
          }
          SetHidden(e, n) {
            n ? this.m_rgHiddenIds.add(e) : this.m_rgHiddenIds.delete(e),
              this.m_eventsChanged.Dispatch();
          }
          GetAdditionalEvents() {
            return Array.from(this.m_rgAdditionalEvents.values());
          }
          AddAdditionalEvent(e) {
            return (
              this.m_rgAdditionalEvents.set(e.id, e),
              this.m_eventsChanged.Dispatch(),
              () => this.RemoveAdditionalEvent(e.id)
            );
          }
          RemoveAdditionalEvent(e) {
            this.m_rgAdditionalEvents.delete(e),
              this.m_eventsChanged.Dispatch();
          }
        }
        function O(s) {
          const [e, n] = p.useState([]),
            [a, i] = p.useState(0);
          return (
            (0, q.hL)(s.EventsChanged(), () => {
              n(s.GetAdditionalEvents()), i((l) => l + 1);
            }),
            e
          );
        }
        function J(s) {
          const [e, n] = p.useState(new Set()),
            [a, i] = p.useState(0);
          return (
            (0, q.hL)(s.EventsChanged(), () => {
              n(s.GetHiddenIds()), i((l) => l + 1);
            }),
            e
          );
        }
        var de = _(25792),
          M = _(78653),
          ye = _(35038),
          Re = _(71742),
          ne = _(36174),
          Ht = _(63854);
        class te {
          m_accountId;
          m_partnerId;
          m_serviceTransport;
          m_eventsChanged = new H.lu();
          m_rgDismisses = new Map();
          m_setDismisses = new Set();
          static s_Singleton;
          static Get() {
            return (
              te.s_Singleton || (te.s_Singleton = new te()), te.s_Singleton
            );
          }
          async Init(e, n) {
            (this.m_accountId = e),
              (this.m_partnerId = n),
              (this.m_serviceTransport = Ht.z
                .Get()
                .GetPromotionTransport()
                .GetServiceTransport());
            const a = ye.w.Init(M.rA);
            a.Body().set_accountid(this.m_accountId),
              a.Body().set_partnerid(this.m_partnerId),
              a
                .Body()
                .set_rtime_after(
                  Math.floor(new Date().getTime() / 1e3 - 14 * ne.Kp.PerDay),
                );
            const i = await M.eJ.GetDismissTimeRange(
              this.m_serviceTransport,
              a,
            );
            if (i.BSuccess()) {
              for (const l of i.Body().dismiss_list())
                if (l.state() == M.tb.ol) {
                  const r = this.m_rgDismisses.get(l.key_json()) ?? [];
                  r.push(l.dismiss_id()),
                    this.m_rgDismisses.set(l.key_json(), r);
                }
              this.DismissesUpdated();
            }
          }
          DismissesUpdated() {
            (this.m_setDismisses = new Set(
              Array.from(this.m_rgDismisses).map(([e, n]) => e),
            )),
              this.m_eventsChanged.Dispatch();
          }
          EventsChanged() {
            return this.m_eventsChanged;
          }
          GetDismissedEvents() {
            return (
              (0, Re.wT)(this.m_serviceTransport, "Must call Init first"),
              this.m_setDismisses
            );
          }
          GetDismissState(e) {
            return this.m_rgDismisses.get(e)?.length > 0;
          }
          async SetDismiss(e, n) {
            (0, Re.wT)(this.m_serviceTransport, "Must call Init first");
            const a = this.m_rgDismisses.get(e) ?? [];
            a.push(null), this.m_rgDismisses.set(e, a), this.DismissesUpdated();
            const i = ye.w.Init(M.RE),
              l = new M.HX();
            l.set_accountid(this.m_accountId),
              l.set_partnerid(this.m_partnerId),
              l.set_key_json(e),
              l.set_state(M.tb.ol),
              l.set_rtime_create(Math.floor(new Date().getTime() / 1e3)),
              l.set_rtime_validity(Math.floor(n.getTime() / 1e3)),
              i.Body().add_dismiss_list(l);
            const r = await M.eJ.CreateDismiss(this.m_serviceTransport, i);
            if (r.BSuccess() && r.Body().dismiss_list().length > 0) {
              const d = (this.m_rgDismisses.get(e) ?? []).filter(
                (m) => m !== null,
              );
              d.push(r.Body().dismiss_list()[0].dismiss_id()),
                this.m_rgDismisses.set(e, d);
            }
          }
          async ClearDismiss(e) {
            (0, Re.wT)(this.m_serviceTransport, "Must call Init first");
            const n = this.m_rgDismisses.get(e);
            if ((this.m_rgDismisses.delete(e), this.DismissesUpdated(), n))
              for (const a of n) {
                const i = ye.w.Init(M.ei);
                i.Body().set_dismiss_id(a),
                  await M.eJ.DeleteDismiss(this.m_serviceTransport, i);
              }
          }
        }
        function kt() {
          const [s, e] = p.useState(te.Get().GetDismissedEvents()),
            [n, a] = p.useState(0);
          return (
            (0, q.hL)(te.Get().EventsChanged(), () => {
              e(te.Get().GetDismissedEvents()), a((i) => i + 1);
            }),
            s
          );
        }
        var re = _(11243),
          ze = _(179),
          Z = _(27989),
          K = _(84676),
          X = _(3367),
          Ot = _(92264),
          ae = _(33654),
          g = _(42987),
          Vt = ((s) => (
            (s[(s.BuildReview = 0)] = "BuildReview"),
            (s[(s.StorePageReview = 1)] = "StorePageReview"),
            (s[(s.SteamChina_BuildReview = 2)] = "SteamChina_BuildReview"),
            (s[(s.SteamChina_StorePageReview = 3)] =
              "SteamChina_StorePageReview"),
            (s[(s.SteamChinaPlatformOperator_StorePageReview = 4)] =
              "SteamChinaPlatformOperator_StorePageReview"),
            (s[(s.SteamChinaPlatformOperator_BuildReview = 5)] =
              "SteamChinaPlatformOperator_BuildReview"),
            (s[(s.SteamDeckCompatibilityReview = 6)] =
              "SteamDeckCompatibilityReview"),
            s
          ))(Vt || {});
        function Wt() {
          return p.useMemo(
            () =>
              (0, h.Tc)("rgUpcomingReleaseApps", "application_config")?.map(
                (n) => {
                  const a = new Date(n.releaserequest.release_date * 1e3),
                    i = n.type == "DLC",
                    l = i ? "release-dlc" : "release-game";
                  return {
                    title: n.name,
                    startDate: a,
                    endDate: a,
                    eventType: l,
                    id: n.appid.toString(),
                    eventTypeName: i
                      ? (0, o.we)(
                          "#Dashboard_UpcomingEvents_EventType_Release_DLC",
                        )
                      : (0, o.we)(
                          "#Dashboard_UpcomingEvents_EventType_Release",
                        ),
                    eventTypeSortWeight: i ? 10 : 0,
                    getElement: () => (0, t.jsx)(zt, { app: n }),
                    passesFilter: (r) => r == bt,
                  };
                },
              ) ?? [],
            [],
          );
        }
        function zt(s) {
          const { app: e } = s,
            [n] = (0, K.G6)(e.appid, X.c6.qI, {
              include_assets: !0,
              include_release: !0,
            }),
            a = !!n?.GetName();
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)($t, { app: e, storeItem: n, hasStoreItem: a }),
              (0, t.jsx)(Qt, { app: e, hasStoreItem: a }),
            ],
          });
        }
        function $t(s) {
          const { app: e, storeItem: n, hasStoreItem: a } = s,
            i = h.TS.PARTNER_BASE_URL + "apps/landing/" + e.appid,
            l = a ? n.GetName() : e.name,
            r = n?.GetAssets().GetHeaderURL();
          return (0, t.jsxs)(g.b1, {
            hasImage: !!r,
            children: [
              (0, t.jsx)(g.zS, { imageUrl: r, url: i }),
              (0, t.jsxs)(g.Q1, {
                hasImage: !!r,
                children: [
                  (0, t.jsx)(g.Pz, { text: l, url: i }),
                  (0, t.jsxs)("div", {
                    className: Z.ReleaseInfoCtn,
                    children: [
                      e.releaserequest &&
                        (0, t.jsxs)("div", {
                          className: Z.ReleaseInfoRow,
                          children: [
                            (0, t.jsx)("span", {
                              className: Z.ReleaseDateLabel,
                              children: (0, o.we)(
                                "#App_Landing_SpecifiedReleaseDate",
                              ),
                            }),
                            (0, t.jsx)("span", {
                              className: Z.ReleaseDateText,
                              children: lt(e.releaserequest.release_date),
                            }),
                          ],
                        }),
                      a &&
                        (0, t.jsxs)("div", {
                          className: Z.ReleaseInfoRow,
                          children: [
                            (0, t.jsx)("span", {
                              className: Z.ReleaseDateLabel,
                              children: (0, o.we)(
                                "#App_Landing_CustomersSeeReleaseDate",
                              ),
                            }),
                            (0, t.jsx)("span", {
                              className: Z.ReleaseDateText,
                              children: n.GetFormattedSteamReleaseDate(),
                            }),
                          ],
                        }),
                      e.earliestadvancedaccessdate > 0 &&
                        (0, t.jsxs)("div", {
                          className: (0, j.A)(
                            Z.ReleaseInfoRow,
                            Z.AdvancedAccess,
                          ),
                          children: [
                            (0, t.jsxs)("span", {
                              className: Z.ReleaseDateLabel,
                              children: [
                                (0, o.we)("#App_Landing_AdvancedAccessDate"),
                                (0, t.jsx)(re.o, {
                                  tooltip: (0, o.we)(
                                    "#App_Landing_AdvancedAccessDate_ttip",
                                  ),
                                }),
                              ],
                            }),
                            (0, t.jsx)("span", {
                              className: Z.ReleaseDateText,
                              children: lt(e.earliestadvancedaccessdate),
                            }),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function lt(s) {
          return s
            ? `${(0, o.$z)(s)} ${(0, Ot.KC)(s, {}, { timeZoneName: "short" })}`
            : (0, o.we)("#App_Landing_UnsetReleaseDate");
        }
        function Qt(s) {
          const { app: e, hasStoreItem: n } = s,
            a = (0, ae.pc)(e.releasestate, n),
            i = (0, j.A)(
              Z.ItemReleaseStatusText,
              e.releasestate == "prerelease" && Z.Prerelease,
              e.releasestate == "released" && Z.Released,
            );
          return (0, t.jsx)("div", {
            className: Z.ItemReleaseInfoContainer,
            children: (0, t.jsxs)("div", {
              className: Z.ItemReleaseStatusCtn,
              children: [
                (0, t.jsx)("div", {
                  className: Z.ItemReleaseStatusLabel,
                  children: (0, o.we)(
                    "#Dashboard_UpcomingEvents_ReleaseStatusLabel",
                  ),
                }),
                (0, t.jsxs)("div", {
                  children: [
                    (0, t.jsx)("span", { className: i, children: a.sText }),
                    a.sTooltip && (0, t.jsx)(re.o, { tooltip: a.sTooltip }),
                  ],
                }),
              ],
            }),
          });
        }
        var x = _(84865),
          ct = _(66824),
          se = _(99412),
          Zt = _(67758),
          $e = _(48332),
          Ce = _(48421),
          _e = _(9046),
          Kt = _(15659),
          Yt = _(20194);
        class Ue {
          m_rgOptIns;
          m_rgOptInComputed = new Map();
          static async Construct() {
            const e = new Ue();
            return await e.Init(), e;
          }
          async Init() {
            const e = await fetch(
              `${h.TS.PARTNER_BASE_URL}/optin/ajaxoptinsfordashboard`,
            );
            try {
              (this.m_rgOptIns = await e.json()),
                this.m_rgOptIns && Ue.ExtractOptInDefinitions(this.m_rgOptIns);
            } catch {
              this.m_rgOptIns = {};
            }
          }
          static ExtractOptInDefinitions(e) {
            for (const n of Object.keys(e)) {
              const a = e[n].description,
                i = (0, ae.ap)(a?.jsondata);
              delete a?.jsondata, i && (e[n].description.definition = i);
            }
          }
          GetInfo(e) {
            if (!e) return;
            if (this.m_rgOptInComputed.has(e))
              return this.m_rgOptInComputed.get(e);
            const n = this.m_rgOptIns?.[e];
            if (!n) {
              this.m_rgOptInComputed.set(e, void 0);
              return;
            }
            const a = new Set(n.invited_appids),
              i = n.description.definition.invitation_only
                ? n.summary?.apps_eligible.filter((r) => a.has(r.appid))
                : n.summary?.apps_eligible,
              l = {
                description: n.description,
                rgEligibleApps: i,
                rgRegisteredApps: n.summary?.apps_in,
                rgFeaturedApps: n.featured_appids,
              };
            return this.m_rgOptInComputed.set(e, l), l;
          }
        }
        function Qe() {
          return (0, Yt.I)({
            queryKey: ["DashboardOptInStore"],
            queryFn: () => Ue.Construct(),
            staleTime: 1 / 0,
          }).data;
        }
        function Ze(s) {
          return Qe()?.GetInfo(s);
        }
        var Jt = _(85482),
          Ke = _(85599),
          Xt = _(70171),
          dt = _(46254),
          qt = _(41635),
          mt = _(84904);
        function es() {
          return p.useMemo(() => {
            const s = (0, h.Tc)(
              "rgPartnerDashboardAssets",
              "application_config",
            );
            return s
              ? Object.keys(s).reduce((n, a) => n.set(a, s[a]), new Map())
              : new Map();
          }, []);
        }
        var pt = _(16512),
          ts = Object.defineProperty,
          ss = Object.getOwnPropertyDescriptor,
          ns = (s, e, n, a) => {
            for (
              var i = a > 1 ? void 0 : a ? ss(e, n) : e, l = s.length - 1, r;
              l >= 0;
              l--
            )
              (r = s[l]) && (i = (a ? r(e, n, i) : r(i)) || i);
            return a && i && ts(e, n, i), i;
          };
        function as(s) {
          const e = ee(),
            n = Qe(),
            a = p.useMemo(() => {
              const l = (0, h.Tc)("rgPartnerPromotions", "application_config"),
                r = l?.rgPlans
                  ?.map((c) => (0, ae.ap)(c.partner_readonly_jsondata))
                  .filter((c) => c && c.id),
                d = l?.rgPlans
                  ?.map((c) => ({
                    plan: c,
                    input: (0, ae.ap)(c.input_jsondata),
                  }))
                  .filter((c) => !!c.input)
                  .reduce(
                    (c, u) => c.set(u.plan.promotion_id, u.input),
                    new Map(),
                  ),
                m = new Set(l?.rgHiddenPlanIDs ?? []);
              return (
                r
                  ?.map((c) => {
                    if (
                      !c.start_date ||
                      (new Date(c.end_date * 1e3) < e && !Ae(e, c))
                    )
                      return null;
                    const u = d.get(c.id);
                    if (
                      (c.type == "assetrequest" &&
                        new Date(c.start_date * 1e3) < e &&
                        u?.enable_input &&
                        u.submitting_accountid) ||
                      (c.type == "launchtracking" && !u?.enable_input)
                    )
                      return null;
                    const f = n?.GetInfo(c.opt_in_id),
                      v = c.type == "assetrequest" && u && !u.enable_input,
                      D =
                        m.has(c.id) ||
                        ((c.type == "nextfest" || c.type == "themesale") &&
                          n &&
                          !f) ||
                        v,
                      R = (c.type == "nextfest" || c.type == "themesale") && !n,
                      b =
                        c.type != "seasonalsale" &&
                        f &&
                        f.rgEligibleApps &&
                        f.rgEligibleApps.length == 0 &&
                        f.rgRegisteredApps &&
                        f.rgRegisteredApps.length == 0;
                    return new Ye(
                      c.id,
                      s,
                      D,
                      c,
                      u,
                      f,
                      new Date(c.start_date * 1e3),
                      new Date(c.end_date * 1e3),
                      "event",
                      ut(e, c),
                      R,
                      b,
                      _t,
                      is,
                    );
                  })
                  .filter((c) => !!c) ?? []
              );
            }, [e, n, s]),
            i = hs(s);
          return p.useMemo(() => [...a, ...i], [a, i]);
        }
        class Ye {
          m_changedCallbacks = new H.lu();
          m_partnerId;
          m_plan;
          m_assetInput;
          m_optIn;
          id;
          title;
          startDate;
          endDate;
          eventType;
          eventTypeName;
          valveOnly;
          editURL;
          loading = !1;
          dimmed = !1;
          getElement;
          getCapsuleElement;
          constructor(e, n, a, i, l, r, d, m, c, u, f, v, D, R) {
            (this.m_partnerId = n),
              (this.valveOnly = a),
              (this.m_plan = i),
              (this.m_assetInput = l),
              (this.m_optIn = r),
              (this.id = e),
              (this.title = vs(i.name, i.type, r, i.start_date)),
              (this.startDate = d),
              (this.endDate = m),
              (this.eventType = c),
              (this.eventTypeName = u),
              (this.editURL = `${h.TS.PARTNER_BASE_URL}promotion/planning/edit/${this.m_plan.id}`),
              (this.loading = f),
              (this.dimmed = v),
              (this.getElement = () => D({ eventData: this })),
              (this.getCapsuleElement = () => R?.({ eventData: this }));
          }
          passesFilter = (e) => e == me;
          dataChanged() {
            this.m_changedCallbacks.Dispatch();
          }
          registerForChange(e) {
            return this.m_changedCallbacks.Register(e);
          }
          clone(e, n, a, i, l) {
            const r = Object.assign(
              Object.create(Object.getPrototypeOf(this)),
              this,
            );
            return (
              (r.m_changedCallbacks = new H.lu()),
              (r.id = e),
              (r.startDate = n),
              (r.endDate = a),
              (r.eventType = i),
              (r.eventTypeName = l),
              r
            );
          }
        }
        ns([q.oI], Ye.prototype, "dataChanged", 1);
        function ut(s, e) {
          if (Ae(s, e))
            return (0, o.we)(
              "#Dashboard_UpcomingEvents_EventType_PromotionPlan_recap",
            );
          switch (e.type) {
            case "midweek":
              return (0, o.we)(
                "#Dashboard_UpcomingEvents_EventType_PromotionPlan_midweek",
              );
            case "weekenddeal":
              return (0, o.we)(
                "#Dashboard_UpcomingEvents_EventType_PromotionPlan_weekenddeal",
              );
            case "saleevent":
              return (0, o.we)(
                "#Dashboard_UpcomingEvents_EventType_PromotionPlan_saleevent",
              );
            case "themesale":
              return (0, o.we)(
                "#Dashboard_UpcomingEvents_EventType_PromotionPlan_themesale",
              );
            case "nextfest":
              return (0, o.we)(
                "#Dashboard_UpcomingEvents_EventType_PromotionPlan_nextfest",
              );
            case "seasonalsale":
              return (0, o.we)(
                "#Dashboard_UpcomingEvents_EventType_PromotionPlan_seasonalsale",
              );
            case "informational":
              return (0, o.we)(
                "#Dashboard_UpcomingEvents_EventType_PromotionPlan_informational",
              );
            case "launchtracking":
              return (0, o.we)(
                "#Dashboard_UpcomingEvents_EventType_PromotionPlan_launchtracking",
              );
            case "dailydeal":
              return (0, o.we)(
                "#Dashboard_UpcomingEvents_EventType_PromotionPlan_dailydeal",
              );
            case "vacation":
              return (0, o.we)(
                "#Dashboard_UpcomingEvents_EventType_PromotionPlan_vacation",
              );
            case "important":
              return (0, o.we)(
                "#Dashboard_UpcomingEvents_EventType_PromotionPlan_important",
              );
            case "preload":
              return (0, o.we)(
                "#Dashboard_UpcomingEvents_EventType_PromotionPlan_preload",
              );
            case "assetrequest":
              return (0, o.we)(
                "#Dashboard_UpcomingEvents_EventType_PromotionPlan_assetrequest",
              );
          }
        }
        function Ae(s, e) {
          return (
            e.type == "nextfest" &&
            new Date(e.end_date * 1e3).getTime() < s.getTime()
          );
        }
        function _t(s) {
          const { eventData: e } = s,
            n = ee();
          return Ae(n, e.m_plan) && e.m_plan.type == "nextfest"
            ? (0, t.jsx)(ds, { eventData: e })
            : e.m_plan.type == "nextfest" || e.m_plan.type === "themesale"
              ? (0, t.jsx)(gt, { eventData: e })
              : (0, t.jsx)(os, { eventData: e });
        }
        function is(s) {
          const { eventData: e } = s,
            n = ee();
          return Ae(n, e.m_plan) && e.m_plan.type == "nextfest"
            ? (0, t.jsx)(ms, { eventData: e })
            : e.m_plan.type == "nextfest" || e.m_plan.type === "themesale"
              ? (0, t.jsx)(ls, { eventData: e })
              : (0, t.jsx)(rs, { eventData: e });
        }
        function os(s) {
          const { eventData: e } = s,
            n = e.m_plan,
            [a] = (0, K.G6)(n.store_item_id, n.store_item_type, {
              include_basic_info: !0,
              include_assets: !0,
            }),
            [i] = (0, K.G6)(n.advertising_appid, X.c6.qI, {
              include_basic_info: !0,
              include_assets: !0,
            }),
            l = a ?? i,
            r = e.m_plan.type == "seasonalsale";
          vt(e);
          let d =
              n.type == "seasonalsale"
                ? `${h.TS.PARTNER_BASE_URL}doc/marketing/discounts/seasonalsales`
                : void 0,
            m = l?.GetAssets().GetHeaderURL();
          d ??= l
            ? h.TS.PARTNER_BASE_URL + "apps/landing/" + l.GetAppID()
            : null;
          const c = (0, se.sfN)(h.TS.LANGUAGE),
            { eventModel: u, bLoading: f } = (0, Ce.B9)(
              n.sale_clan_account,
              n.sale_clan_event_gid,
            );
          (m ??= !f && u?.GetImageURL("capsule", c, _e.wI.capsule_main)),
            (d ??= !f && (0, pt.n4)(u));
          const v = [];
          e.valveOnly &&
            (n.type != "seasonalsale" &&
              e.m_partnerId &&
              !e.m_plan.store_item_id &&
              !e.m_plan.discount_event_id &&
              v.push(
                "In order to be visible to partners, plans must have access through a linked store item or a discount event.",
              ),
            n.type == "assetrequest" &&
              e.m_assetInput &&
              !e.m_assetInput.enable_input &&
              v.push(
                'Asset request with "Enable requesting featuring assets from partner" disabled.',
              ));
          const D =
              n.discount_event_id && !e.m_assetInput?.enable_input
                ? `${h.TS.PARTNER_BASE_URL}promotion/discounts/dashboard/?de=${n.discount_event_id}`
                : void 0,
            R = (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)(g.z9, {
                  url: D,
                  children: (0, o.we)(
                    "#Dashboard_UpcomingEvents_Events_OptIn_Button_EnterDiscounts",
                  ),
                }),
                r &&
                  (0, t.jsx)(g.z9, {
                    url: d,
                    children: (0, o.we)(
                      "#Dashboard_UpcomingEvents_Events_OptIn_Button_LearnMore",
                    ),
                  }),
                (0, t.jsx)(g.z9, {
                  url: n.asset_kit_url,
                  children: (0, o.we)(
                    "#Dashboard_UpcomingEvents_Events_OptIn_Button_AssetKit",
                  ),
                }),
              ],
            }),
            b = (0, ae.cG)(n);
          return (0, t.jsxs)(g.b1, {
            dimmed: e.dimmed,
            backgroundColor: b,
            hasImage: !!m,
            children: [
              (0, t.jsx)(ht, {
                warnings: v,
                eventName: e.title,
                startTime: n.start_date,
                endTime: n.end_date,
                eventUrl: d,
                imageUrl: m,
                additionalButtons: R,
                bigName: r,
              }),
              (0, t.jsx)(ps, { eventData: e }),
            ],
          });
        }
        function rs(s) {
          const { eventData: e } = s,
            n = e.m_plan,
            [a] = (0, K.G6)(n.store_item_id, n.store_item_type, {
              include_basic_info: !0,
              include_assets: !0,
            }),
            [i] = (0, K.G6)(n.advertising_appid, X.c6.qI, {
              include_basic_info: !0,
              include_assets: !0,
            });
          let r = (a ?? i)?.GetAssets().GetHeaderURL();
          const d = (0, se.sfN)(h.TS.LANGUAGE),
            { eventModel: m, bLoading: c } = (0, Ce.B9)(
              n.sale_clan_account,
              n.sale_clan_event_gid,
            );
          return (
            (r ??= !c && m?.GetImageURL("capsule", d, _e.wI.capsule_main)),
            (0, t.jsx)(g.aV, { imageUrl: r })
          );
        }
        function gt(s) {
          const { eventData: e } = s,
            n = (0, se.sfN)(h.TS.LANGUAGE),
            a = e.m_plan,
            i = e.m_optIn,
            l = a.opt_in_id
              ? `${h.TS.PARTNER_BASE_URL}optin/sale/${a.opt_in_id?.replace("sale_", "")}`
              : void 0,
            r = [];
          e.valveOnly &&
            ((!a.sale_clan_account || !a.sale_clan_event_gid) &&
              r.push("no sale event"),
            a.opt_in_id || r.push("no opt-in"));
          let d;
          if (a.type == "nextfest" && e.eventType == "deadline") {
            const A = new Intl.DateTimeFormat(navigator.language, {
              month: "short",
              day: "numeric",
            }).format(
              new Date(
                e.m_optIn.description.definition.optin_deadline_date * 1e3,
              ),
            );
            d = (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)("div", {
                  className: x.ItemDeadlineHeaderText,
                  children: (0, o.we)(
                    "#Dashboard_UpcomingEvents_Events_Deadline_RegistrationCloses",
                    A,
                  ),
                }),
                (0, t.jsx)("div", {
                  children: (0, o.we)(
                    "#Dashboard_UpcomingEvents_Events_Deadline_RegistrationCloses_Description",
                  ),
                }),
              ],
            });
          }
          cs(e), vt(e);
          const m = i?.description.start_date ?? a.start_date,
            c = i?.description.end_date ?? a.end_date,
            u =
              i?.description?.definition?.localized_optin_banner?.[
                h.TS.LANGUAGE
              ],
            f =
              i?.description.opt_in_name &&
              u &&
              (0, $e.Yi)(i?.description.opt_in_name, n, u),
            D = es().get("optin_placeholder_banner"),
            R = f ?? D,
            b = f ? void 0 : (0, ae._w)(a.id),
            C = (w, A) => w?.map((B) => ({ details: B, bRegistered: A })) ?? [],
            N = p.useMemo(
              () =>
                (0, ae.Gx)(
                  C(i?.rgEligibleApps, !1),
                  C(i?.rgRegisteredApps, !0),
                ),
              [i?.rgEligibleApps, i?.rgRegisteredApps],
            ),
            y = N?.length > 0;
          return (0, t.jsxs)(g.b1, {
            buttonPosition: y ? "bottom" : void 0,
            backgroundImageUrl: R,
            backgroundColor: b,
            dimmed: e.dimmed,
            children: [
              (0, t.jsx)(ht, {
                warnings: r,
                eventName: e.title,
                eventDescription: d,
                startTime: m,
                endTime: c,
                eventUrl: l,
                inlineDate: !0,
              }),
              i &&
                (0, t.jsx)(us, {
                  eventData: e,
                  eventUrl: l,
                  optIn: i,
                  invitedAndRegisteredApps: N,
                }),
            ],
          });
        }
        function ls(s) {
          const { eventData: e } = s,
            n = (0, se.sfN)(h.TS.LANGUAGE),
            a = e.m_optIn,
            i =
              a?.description?.definition?.localized_optin_banner?.[
                h.TS.LANGUAGE
              ],
            l =
              a?.description.opt_in_name &&
              i &&
              (0, $e.Yi)(a?.description.opt_in_name, n, i);
          return (0, t.jsx)(g.aV, { imageUrl: l });
        }
        function cs(s) {
          const e = ee(),
            n = ot();
          p.useEffect(() => {
            let a;
            if (
              !s.id.endsWith("_nextfestDeadline") &&
              s.m_plan.type == "nextfest" &&
              s.m_optIn?.description.definition.optin_deadline_date &&
              s.m_optIn.rgEligibleApps?.length > 0 &&
              s.m_optIn.rgRegisteredApps
            ) {
              const i = new Date(
                s.m_optIn.description.definition.optin_deadline_date * 1e3,
              );
              if (i && i > e) {
                const l = s.clone(
                  s.id + "_nextfestDeadline",
                  i,
                  i,
                  "deadline",
                  (0, o.we)(
                    "#Dashboard_UpcomingEvents_EventType_PromotionPlan_registration_reminder",
                  ),
                );
                (l.getElement = () => (0, t.jsx)(gt, { eventData: l })),
                  (a = n.AddAdditionalEvent(l));
              }
            }
            return a;
          }, [e, n, s]);
        }
        function vt(s) {
          const e = ot(),
            n =
              (s.m_plan.type == "seasonalsale" ||
                s.m_plan.type == "themesale") &&
              s.eventType != "deadline" &&
              s.eventType != "deadline-urgent" &&
              s.m_optIn?.description?.opt_in_name &&
              s.m_optIn.rgEligibleApps &&
              s.m_optIn.rgRegisteredApps &&
              s.m_optIn.rgFeaturedApps &&
              s.m_optIn.description.definition
                .additional_featuring_section_enabled,
            a = p.useMemo(
              () =>
                s.m_optIn?.rgRegisteredApps?.map((m) => ({
                  appid: m.appid,
                  appName: m.app_name,
                })) ?? [],
              [s.m_optIn?.rgRegisteredApps],
            ),
            i = Pe(s.m_partnerId, a, s.m_plan.start_date, s.m_plan.end_date),
            l = Ie(),
            r = ee(),
            d = l.setManageDiscountsAppIDs;
          p.useEffect(() => {
            if (!n || !(s.m_optIn?.rgFeaturedApps?.length > 0)) return;
            const m = [];
            for (const c of (0, ae.Gx)(
              s.m_optIn.rgEligibleApps,
              s.m_optIn.rgRegisteredApps,
            )) {
              if (
                !s.m_optIn?.rgFeaturedApps.includes(c.appid) ||
                !d?.has(c.appid)
              )
                continue;
              const u = s.m_optIn.rgRegisteredApps?.some(
                  (v) => v.appid == c.appid,
                ),
                f = i?.some((v) => v.appid == c.appid);
              if (u) {
                if (!f && s.m_plan.type == "seasonalsale") {
                  const v = new Date(
                      s.m_optIn.description.definition.optin_deadline_date *
                        1e3,
                    ),
                    D = new Date(s.m_plan.start_date * 1e3);
                  if (v > r && D > r) {
                    const R = s.clone(
                      s.m_plan.id + "_featuredDiscountDeadline_" + c.appid,
                      D,
                      D,
                      "deadline-urgent",
                      (0, o.we)(
                        "#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedDiscount_Header",
                      ),
                    );
                    (R.getElement = () =>
                      (0, t.jsx)(qe, {
                        eventData: R,
                        appId: c.appid,
                        registerByDate: v,
                        registrationType: "discount",
                      })),
                      m.push(e.AddAdditionalEvent(R));
                  }
                }
              } else {
                if (
                  s.m_optIn.description.definition.collect_trailer_permissions
                ) {
                  const v = new Date(
                    s.m_optIn.description.definition.collect_demo_deadline *
                      1e3,
                  );
                  if (v > r) {
                    const D = s.clone(
                      s.m_plan.id + "_featuredTrailerDeadline_" + c.appid,
                      v,
                      v,
                      "deadline",
                      (0, o.we)(
                        "#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedTrailer_Header",
                      ),
                    );
                    (D.getElement = () =>
                      (0, t.jsx)(qe, {
                        eventData: D,
                        appId: c.appid,
                        registerByDate: v,
                        registrationType:
                          s.m_plan.type == "seasonalsale"
                            ? "trailer-seasonalsale"
                            : "trailer-themesale",
                      })),
                      m.push(e.AddAdditionalEvent(D));
                  }
                }
                if (s.m_plan.type == "seasonalsale") {
                  const v = new Date(
                    s.m_optIn.description.definition.optin_deadline_date * 1e3,
                  );
                  if (v > r) {
                    const D = s.clone(
                      s.m_plan.id + "_featuredRegistrationDeadline_" + c.appid,
                      v,
                      v,
                      "deadline-urgent",
                      (0, o.we)(
                        "#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedRegister_Header",
                      ),
                    );
                    (D.getElement = () =>
                      (0, t.jsx)(qe, {
                        eventData: D,
                        appId: c.appid,
                        registerByDate: v,
                        registrationType: "registration",
                      })),
                      m.push(e.AddAdditionalEvent(D));
                  }
                }
              }
            }
            return m.length > 0 ? () => m.forEach((c) => c()) : void 0;
          }, [r, e, n, s, s.m_optIn?.rgFeaturedApps, i, d]);
        }
        function ds(s) {
          const { eventData: e } = s,
            n = (0, se.sfN)(h.TS.LANGUAGE),
            a = e.m_plan,
            { eventModel: i, bLoading: l } = (0, Ce.B9)(
              a.sale_clan_account,
              a.sale_clan_event_gid,
            ),
            r = (0, Jt.S)(a.opt_in_id, e.m_partnerId),
            d = !l && i?.GetImageURL("capsule", n, _e.wI.capsule_main),
            m = !l && (0, pt.n4)(i),
            c = a.opt_in_id?.startsWith("sale_nextfest_")
              ? `${h.TS.PARTNER_BASE_URL}recap/nextfest/${a.opt_in_id.substring(14)}/${e.m_partnerId}`
              : void 0,
            u = ot(),
            f = Ze(a.opt_in_id),
            v = p.useMemo(
              () => qt.Ew(r.data?.appIdsWithoutPermissions ?? []),
              [r.data?.appIdsWithoutPermissions],
            ),
            D = p.useMemo(() => {
              if (r.isLoading || !r.isSuccess) return null;
              const P = r.data.stats?.reduce(
                (G, $) =>
                  $.rt_last_update_time > G ? $.rt_last_update_time : G,
                0,
              );
              if (!(P && P > a.end_date)) return null;
              const T =
                  r.data.stats?.filter(
                    (G) => P != 0 && G.rt_last_update_time == P,
                  ) ?? [],
                F = T.reduce((G, $) => G + $.demo_player_count, 0),
                W = T.reduce((G, $) => G + $.wishlist_count, 0),
                L = T.reduce((G, $) => G + $.player_wishlist_count, 0),
                Q = T.reduce(
                  (G, $) =>
                    $.demo_player_count >= G.count
                      ? { count: $.demo_player_count, appId: $.appid }
                      : G,
                  { count: 0, appId: 0 },
                ).appId;
              return {
                nGamesWithStatsCount: T.length,
                nDemoPlayers: F,
                nWishlists: W,
                nConversions: L,
                nMostPopularAppId: Q,
              };
            }, [a.end_date, r.data, r.isLoading, r.isSuccess]),
            R =
              D?.nMostPopularAppId > 0
                ? D.nMostPopularAppId
                : v.length > 0
                  ? Math.max(...v)
                  : 0,
            b = f?.rgRegisteredApps?.find((P) => P.appid == R)?.jsondata,
            C = b && JSON.parse(b),
            N =
              C &&
              !C.survey_response?.some((P) => P.accountid == h.iA.accountid),
            y = (D?.nGamesWithStatsCount ?? 0) + v.length;
          if (
            (p.useEffect(() => {
              r.isLoading ||
                a.id.startsWith("fakerecap_") ||
                (r.isSuccess
                  ? y == 0 && !N && u.SetHidden(a.id, !0)
                  : u.SetHidden(a.id, !0));
            }, [u, N, y, a.id, r.isLoading, r.isSuccess]),
            r.isLoading)
          )
            return (0, t.jsx)(Ke.t, {});
          if (y == 0 && !N && !a.id.startsWith("fakerecap_")) return;
          const w = `${h.TS.PARTNER_BASE_URL}optin/survey/${a.opt_in_id}/${R}`,
            A = new Intl.NumberFormat((0, o.l4)()),
            B = (0, t.jsx)("a", {
              href: `${h.TS.PARTNER_BASE_URL}doc/gettingstarted/managing_users`,
              target: "_blank",
              children: (0, o.we)(
                "#Dashboard_UpcomingEvents_RecapNextFest_NoStats_ViewFinancials",
              ),
            });
          return (0, t.jsxs)("div", {
            className: x.RecapItemContainer,
            children: [
              D &&
                (0, t.jsxs)(t.Fragment, {
                  children: [
                    d &&
                      (0, t.jsx)("div", {
                        className: x.RecapItemImage,
                        children: (0, t.jsx)(ae.iN, {
                          href: m,
                          target: "_blank",
                          children: (0, t.jsx)("img", { src: d }),
                        }),
                      }),
                    (0, t.jsxs)("div", {
                      className: x.RecapTextSection,
                      children: [
                        (0, t.jsx)("div", {
                          className: x.RecapTextHeader,
                          children: (0, o.we)(
                            "#Dashboard_UpcomingEvents_RecapNextFest_TextHeader",
                          ),
                        }),
                        (0, t.jsxs)("div", {
                          className: x.RecapTextSummary,
                          children: [
                            (0, t.jsxs)("div", {
                              className: x.RecapTextGameDescription,
                              children: [
                                (0, t.jsx)("div", {
                                  className: x.RecapTextGameCount,
                                  children: (0, o.um)(
                                    "#Dashboard_UpcomingEvents_RecapNextFest_TextGameCount",
                                    y,
                                    (0, t.jsx)("b", {}),
                                  ),
                                }),
                                v.length > 0 &&
                                  (0, t.jsx)("div", {
                                    className: x.RecapTextGameAdditionalCount,
                                    children: (0, o.TG)(
                                      "#Dashboard_UpcomingEvents_RecapNextFest_PartialStats_TextGameCount",
                                      v.length,
                                      B,
                                    ),
                                  }),
                              ],
                            }),
                            c && (0, t.jsx)(Je, { summaryURL: c }),
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: (0, j.A)(x.RecapBox, x.Plays),
                      children: [
                        (0, t.jsx)("div", {
                          className: x.RecapBoxCount,
                          children: A.format(D.nDemoPlayers),
                        }),
                        (0, t.jsxs)("div", {
                          className: x.RecapBoxDesc,
                          children: [
                            (0, o.we)("#Recap_NextFest_TotalPlayers"),
                            (0, t.jsx)(re.o, {
                              tooltip: (0, o.we)(
                                "#Recap_NextFest_TotalPlayers_ttip",
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: (0, j.A)(x.RecapBox, x.Conversions),
                      children: [
                        (0, t.jsx)("div", {
                          className: x.RecapBoxCount,
                          children: A.format(D.nConversions),
                        }),
                        (0, t.jsxs)("div", {
                          className: x.RecapBoxDesc,
                          children: [
                            (0, o.we)("#Recap_NextFest_PlayerWishlist"),
                            (0, t.jsx)(re.o, {
                              tooltip: (0, o.we)(
                                "#Recap_NextFest_PlayerWishlist_ttip",
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: (0, j.A)(x.RecapBox, x.Wishlists),
                      children: [
                        (0, t.jsx)("div", {
                          className: x.RecapBoxCount,
                          children: A.format(D.nWishlists),
                        }),
                        (0, t.jsxs)("div", {
                          className: x.RecapBoxDesc,
                          children: [
                            (0, o.we)("#Recap_NextFest_TotalWishlist"),
                            (0, t.jsx)(re.o, {
                              tooltip: (0, o.we)(
                                "#Recap_NextFest_TotalWishlist_ttip",
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              !D &&
                (0, t.jsxs)(t.Fragment, {
                  children: [
                    d &&
                      (0, t.jsx)("div", {
                        className: x.RecapItemImage,
                        children: (0, t.jsx)(ae.iN, {
                          href: m,
                          target: "_blank",
                          children: (0, t.jsx)("img", { src: d }),
                        }),
                      }),
                    (0, t.jsxs)("div", {
                      className: x.RecapTextSection,
                      children: [
                        (0, t.jsx)("div", {
                          className: x.RecapTextHeader,
                          children: (0, o.we)(
                            "#Dashboard_UpcomingEvents_RecapNextFest_NoStats_TextHeader",
                          ),
                        }),
                        (0, t.jsxs)("div", {
                          className: x.RecapTextSummary,
                          children: [
                            (0, t.jsxs)("div", {
                              className: x.RecapTextGameDescription,
                              children: [
                                (0, t.jsx)("div", {
                                  className: x.RecapTextGameCount,
                                  children: (0, o.um)(
                                    "#Dashboard_UpcomingEvents_RecapNextFest_NoStats_TextGameCount",
                                    y,
                                    (0, t.jsx)("b", {}),
                                  ),
                                }),
                                (0, t.jsx)("div", {
                                  className: x.RecapTextGameAdditionalCount,
                                  children: (0, o.PP)(
                                    "#Dashboard_UpcomingEvents_RecapNextFest_NoStats_NeedPermission",
                                    B,
                                  ),
                                }),
                              ],
                            }),
                            c && (0, t.jsx)(Je, { summaryURL: c }),
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: (0, j.A)(x.RecapBox, x.Plays),
                      children: [
                        (0, t.jsx)("div", {
                          className: x.RecapBoxCount,
                          children: A.format(y),
                        }),
                        (0, t.jsx)("div", {
                          className: x.RecapBoxDesc,
                          children: (0, o.we)("#Recap_NextFest_Apps"),
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: (0, j.A)(
                        x.RecapBox,
                        x.Conversions,
                        x.Disabled,
                      ),
                      children: [
                        (0, t.jsx)("div", {
                          className: x.RecapBoxCount,
                          children: "--",
                        }),
                        (0, t.jsxs)("div", {
                          className: x.RecapBoxDesc,
                          children: [
                            (0, o.we)("#Recap_NextFest_PlayerWishlist"),
                            (0, t.jsx)(re.o, {
                              tooltip: (0, o.we)(
                                "#Dashboard_UpcomingEvents_RecapNextFest_NoStats_Tooltip",
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: (0, j.A)(x.RecapBox, x.Wishlists, x.Disabled),
                      children: [
                        (0, t.jsx)("div", {
                          className: x.RecapBoxCount,
                          children: "--",
                        }),
                        (0, t.jsxs)("div", {
                          className: x.RecapBoxDesc,
                          children: [
                            (0, o.we)("#Recap_NextFest_TotalWishlist"),
                            (0, t.jsx)(re.o, {
                              tooltip: (0, o.we)(
                                "#Dashboard_UpcomingEvents_RecapNextFest_NoStats_Tooltip",
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              N &&
                (0, t.jsxs)("div", {
                  className: x.RecapSurveyArea,
                  children: [
                    (0, t.jsx)("div", {
                      className: x.RecapSurveyText,
                      children: (0, o.we)(
                        "#Dashboard_UpcomingEvents_RecapNextFest_SurveyText",
                      ),
                    }),
                    (0, t.jsx)("button", {
                      className: x.RecapSurveyButton,
                      onClick: () => window.open(w, "_blank"),
                      children: (0, o.we)(
                        "#Dashboard_UpcomingEvents_RecapNextFest_SurveyButton",
                      ),
                    }),
                  ],
                }),
            ],
          });
        }
        function Je(s) {
          return (0, t.jsx)("button", {
            className: x.RecapTextFullSummaryButton,
            onClick: () => window.open(s.summaryURL, "_blank"),
            children: (0, o.we)(
              "#Dashboard_UpcomingEvents_RecapNextFest_TextFullSummary",
            ),
          });
        }
        function ms(s) {
          const { eventData: e } = s,
            n = (0, se.sfN)(h.TS.LANGUAGE),
            a = e.m_plan,
            { eventModel: i, bLoading: l } = (0, Ce.B9)(
              a.sale_clan_account,
              a.sale_clan_event_gid,
            ),
            r = !l && i?.GetImageURL("capsule", n, _e.wI.capsule_main);
          return (0, t.jsx)(g.aV, { imageUrl: r });
        }
        function ht(s) {
          const {
            eventName: e,
            eventDescription: n,
            eventUrl: a,
            startTime: i,
            endTime: l,
            warnings: r,
            imageUrl: d,
            additionalButtons: m,
            inlineDate: c,
            bigName: u,
          } = s;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(g.zS, { imageUrl: d, url: a }),
              (0, t.jsxs)(g.Q1, {
                hasImage: !!d,
                children: [
                  (0, t.jsxs)(g.Hg, {
                    inlineDate: c,
                    children: [
                      (0, t.jsx)(g.Pz, { text: e, url: a, large: u }),
                      (0, t.jsx)(g.ek, {
                        startTimestamp: i,
                        endTimestamp: l,
                        largeDate: c,
                      }),
                    ],
                  }),
                  n,
                  r?.length > 0 &&
                    (0, t.jsx)("div", {
                      className: x.ItemWarning,
                      children: r.join(", "),
                    }),
                ],
              }),
              m && (0, t.jsx)(g.m2, { children: m }),
            ],
          });
        }
        function ps(s) {
          const { eventData: e } = s,
            n = e.m_plan.id
              ? `${h.TS.PARTNER_BASE_URL}promotion/assetportal/request/${e.m_plan.id}`
              : void 0,
            a = new Intl.DateTimeFormat(navigator.language, {
              month: "short",
              day: "numeric",
            }),
            i =
              e.m_plan.start_date &&
              a.format(
                (0, ct.OS)(void 0, e.m_plan.start_date, "partner") * 1e3,
              ),
            l = e.m_plan,
            [r] = (0, K.G6)(l.store_item_id, l.store_item_type, {
              include_basic_info: !0,
              include_assets: !0,
            }),
            d = p.useMemo(
              () =>
                r ? [{ appid: r.GetAppID(), appName: r.GetName() }] : void 0,
              [r],
            ),
            m = Pe(e.m_partnerId, d, l.start_date, l.end_date),
            c = r && l.discount_event_id,
            u = l.discount_event_id
              ? `${h.TS.PARTNER_BASE_URL}promotion/discounts/dashboard/?de=${l.discount_event_id}`
              : void 0,
            f = (0, Kt.sk)(l.discount_event_id),
            D = (0, mt.uK)(e.m_plan, e.m_assetInput) > mt.mM.k_AwaitingPartner,
            R = !c || m?.length > 0 || f?.length > 0;
          if (e.m_assetInput?.enable_input)
            return (0, t.jsxs)(g.FV, {
              children: [
                (0, t.jsx)(g.hq, { complete: D && R, urgent: !0 }),
                (0, t.jsx)(g.Pj, {
                  complete: D,
                  urgent: !0,
                  label: (0, o.we)(
                    "#Dashboard_UpcomingEvents_EventType_PromotionPlan_assetrequest_duedate",
                  ),
                  status: i,
                  actionStatus: D
                    ? (0, o.we)(
                        "#Dashboard_UpcomingEvents_EventType_PromotionPlan_assetrequest_button_submitted",
                      )
                    : (0, o.we)(
                        "#Dashboard_UpcomingEvents_EventType_PromotionPlan_assetrequest_button",
                      ),
                  actionUrl: n,
                }),
                c &&
                  (0, t.jsx)(g.Pj, {
                    complete: R,
                    urgent: !0,
                    label: (0, o.we)(
                      "#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedDiscount_Action",
                    ),
                    status: i,
                    actionStatus: (0, o.we)(
                      "#Dashboard_UpcomingEvents_Events_OptIn_Button_EnterDiscounts",
                    ),
                    actionUrl: u,
                  }),
              ],
            });
        }
        function us(s) {
          const {
              eventData: e,
              eventUrl: n,
              optIn: a,
              invitedAndRegisteredApps: i,
            } = s,
            l = e.m_plan,
            r = (y, w) => y?.map((A) => ({ details: A, bRegistered: w })) ?? [],
            d = p.useMemo(
              () =>
                a?.rgRegisteredApps?.map((y) => ({
                  appid: y.appid,
                  appName: y.app_name,
                })) ?? [],
              [a?.rgRegisteredApps],
            ),
            m = Pe(e.m_partnerId, d, l.start_date, l.end_date),
            c = p.useMemo(
              () =>
                m?.length &&
                (0, t.jsx)("div", {
                  className: x.OptInGamesToolTipContainer,
                  children: m
                    .sort((y, w) => y.appName.localeCompare(w.appName))
                    .map((y) =>
                      (0, t.jsx)(
                        "div",
                        { children: `${y.appName} (${gs(y.discountsDuring)})` },
                        y.appid,
                      ),
                    ),
                }),
              [m],
            ),
            u = i?.length > 0,
            v = Ie().setManageDiscountsAppIDs,
            D = i?.some((y) => v.has(y.details.appid)),
            R =
              l.discount_event_id && D
                ? `${h.TS.PARTNER_BASE_URL}promotion/discounts/dashboard/?de=${l.discount_event_id}`
                : void 0,
            b = R && m,
            C = new Intl.DateTimeFormat(navigator.language, {
              month: "short",
              day: "numeric",
            }),
            N =
              e.eventType != "deadline" &&
              a.description.definition.optin_deadline_date &&
              a.description.definition.event_start_date -
                a.description.definition.optin_deadline_date >
                ne.Kp.PerDay &&
              C.format(a.description.definition.optin_deadline_date * 1e3);
          return (0, t.jsxs)(t.Fragment, {
            children: [
              u &&
                (0, t.jsxs)(g.FV, {
                  children: [
                    (0, t.jsx)(Xe, {
                      text: (0, o.we)(
                        "#Dashboard_UpcomingEvents_Events_OptIn_EligibleGames",
                      ),
                      count: i.length,
                      tooltip: (0, t.jsx)(Dt, { apps: i }),
                    }),
                    (0, t.jsx)(Xe, {
                      text: (0, o.we)(
                        "#Dashboard_UpcomingEvents_Events_OptIn_RegisteredGames",
                      ),
                      count: a.rgRegisteredApps?.length ?? 0,
                      tooltip: (0, t.jsx)(Dt, {
                        apps: r(a.rgRegisteredApps, !1),
                      }),
                    }),
                    (0, t.jsx)(Xe, {
                      text: (0, o.we)(
                        "#Dashboard_UpcomingEvents_Events_OptIn_Discounted",
                      ),
                      count: m?.length ?? 0,
                      tooltip: c,
                      hidden: !b,
                    }),
                    (0, t.jsx)(_s, { optIn: a }),
                  ],
                }),
              (0, t.jsxs)(g.m2, {
                children: [
                  N &&
                    (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsx)("div", {
                          className: x.AssetRequestDateLabel,
                          children: (0, o.we)(
                            "#Dashboard_UpcomingEvents_Events_OptIn_Deadline",
                          ),
                        }),
                        (0, t.jsx)("div", {
                          className: x.AssetRequestDate,
                          children: N,
                        }),
                      ],
                    }),
                  (0, t.jsx)(g.z9, {
                    url: n,
                    children: u
                      ? (0, o.we)(
                          "#Dashboard_UpcomingEvents_Events_OptIn_Button_EligibleGames",
                        )
                      : (0, o.we)(
                          "#Dashboard_UpcomingEvents_Events_OptIn_Button_LearnMore",
                        ),
                  }),
                  (0, t.jsx)(g.z9, {
                    url: R,
                    children: (0, o.we)(
                      "#Dashboard_UpcomingEvents_Events_OptIn_Button_EnterDiscounts",
                    ),
                  }),
                ],
              }),
            ],
          });
        }
        function _s(s) {
          const { optIn: e } = s,
            n = ee(),
            a =
              e.rgRegisteredApps?.filter(
                (f) => f.demo_build_review_requested === !1,
              ) ?? [];
          if (!a.length) return null;
          const i = e.description.definition,
            r =
              (i.event_start_date ?? e.description.start_date) * 1e3 -
                n.getTime() <
              14 * ne.Kp.PerDay * 1e3,
            d = new Intl.DateTimeFormat(navigator.language, {
              month: "short",
              day: "numeric",
            }),
            m =
              i.rtime_nextfest_press_preview_submit &&
              d.format(i.rtime_nextfest_press_preview_submit * 1e3),
            c =
              i.rtime_nextfest_all_items_submit &&
              d.format(i.rtime_nextfest_all_items_submit * 1e3);
          let u;
          return (
            m && c
              ? (u = (0, o.we)(
                  "#Dashboard_UpcomingEvents_Events_OptIn_DemoBuildReview_Deadlines_Both",
                  m,
                  c,
                ))
              : m
                ? (u = (0, o.we)(
                    "#Dashboard_UpcomingEvents_Events_OptIn_DemoBuildReview_Deadline_PressPreview",
                    m,
                  ))
                : c &&
                  (u = (0, o.we)(
                    "#Dashboard_UpcomingEvents_Events_OptIn_DemoBuildReview_Deadline_AllItems",
                    c,
                  )),
            (0, t.jsx)("div", {
              className: x.OptInTodoColumn,
              children: a.map((f) =>
                (0, t.jsx)(
                  g.Pj,
                  {
                    complete: !1,
                    urgent: r,
                    label: (0, o.we)(
                      f.demo_appid
                        ? "#Dashboard_UpcomingEvents_Events_OptIn_DemoBuildReview_NotSubmitted"
                        : "#Dashboard_UpcomingEvents_Events_OptIn_DemoBuildReview_NoDemo",
                      f.app_name,
                    ),
                    status: u,
                    tooltip: (0, o.we)(
                      "#Dashboard_UpcomingEvents_Events_OptIn_DemoBuildReview_Tooltip",
                    ),
                    actionStatus: (0, o.we)(
                      f.demo_appid
                        ? "#Dashboard_UpcomingEvents_Events_OptIn_Button_SubmitBuild"
                        : "#Dashboard_UpcomingEvents_Events_OptIn_Button_CreateDemo",
                    ),
                    actionUrl: `${h.TS.PARTNER_BASE_URL}apps/demo/${f.appid}`,
                  },
                  f.appid,
                ),
              ),
            })
          );
        }
        function Xe(s) {
          const { text: e, count: n, tooltip: a, hidden: i } = s;
          return (0, t.jsx)(oe.m9, {
            toolTipContent: a,
            children: (0, t.jsxs)("div", {
              className: (0, j.A)(x.StatusItemBox, i && x.Hidden),
              children: [
                (0, t.jsx)("div", {
                  className: x.StatusItemBoxLabel,
                  children: e,
                }),
                (0, t.jsx)("div", {
                  className: x.StatusItemBoxText,
                  children: n,
                }),
              ],
            }),
          });
        }
        function Dt(s) {
          const { apps: e } = s;
          if (!e?.length) return;
          const n = e.sort((a, i) =>
            a.details.app_name.localeCompare(i.details.app_name),
          );
          return (0, t.jsx)("div", {
            className: x.OptInGamesToolTipContainer,
            children: n.map((a) =>
              (0, t.jsx)(
                "div",
                {
                  children: a.bRegistered
                    ? (0, o.PP)(
                        "#Dashboard_UpcomingEvents_Events_OptIn_GameRegistered",
                        a.details.app_name,
                        (0, t.jsx)("span", {
                          className: x.OptInGamesToolTipRegistered,
                          children: (0, o.we)(
                            "#Dashboard_UpcomingEvents_Events_OptIn_GameRegisteredText",
                          ),
                        }),
                      )
                    : a.details.app_name,
                },
                a.details.appid,
              ),
            ),
          });
        }
        function qe(s) {
          const {
              eventData: e,
              appId: n,
              registerByDate: a,
              registrationType: i,
            } = s,
            l = (0, se.sfN)(h.TS.LANGUAGE),
            r = e.m_plan,
            d = e.m_optIn,
            [m] = (0, K.G6)(n, X.c6.qI, {
              include_basic_info: !0,
              include_assets: !0,
            }),
            c = m?.GetAssets().GetHeaderURL(),
            u = m
              ? h.TS.PARTNER_BASE_URL + "apps/landing/" + m.GetAppID()
              : null,
            f = `${h.TS.PARTNER_BASE_URL}optin/sale/${r.opt_in_id?.replace("sale_", "")}`,
            v = new Intl.DateTimeFormat(navigator.language, {
              month: "long",
              day: "numeric",
            }),
            D = v.format(a),
            R =
              i == "trailer-seasonalsale" || i == "trailer-themesale"
                ? D
                : v.format(new Date(d?.description.start_date * 1e3)),
            b = p.useMemo(() => {
              const Q = e.m_optIn.rgRegisteredApps.find((G) => G.appid == n);
              return Q ? [Q] : [];
            }, [e.m_optIn.rgRegisteredApps, n]),
            C = b?.length > 0,
            N = r.discount_event_id
              ? `${h.TS.PARTNER_BASE_URL}promotion/discounts/dashboard/?de=${r.discount_event_id}`
              : void 0,
            y = p.useMemo(
              () =>
                b?.map((Q) => ({ appid: Q.appid, appName: Q.app_name })) ?? [],
              [b],
            ),
            A = Pe(e.m_partnerId, y, r.start_date, r.end_date)?.length > 0,
            B =
              d?.description?.definition?.localized_optin_banner?.[
                h.TS.LANGUAGE
              ],
            P =
              d?.description.opt_in_name &&
              B &&
              (0, $e.Yi)(d?.description.opt_in_name, l, B),
            I = C && A,
            T = e.eventType == "deadline-urgent";
          let F = null,
            W = null,
            L = null;
          switch (i) {
            case "trailer-seasonalsale":
              (F =
                "#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedTrailerSeasonalSale_Title"),
                (W =
                  "#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedTrailerSeasonalSale_Body"),
                (L =
                  "#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedTrailerSeasonalSale_Action");
              break;
            case "trailer-themesale":
              (F =
                "#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedTrailerThemeSale_Title"),
                (W =
                  "#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedTrailerThemeSale_Body"),
                (L =
                  "#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedTrailerThemeSale_Action");
              break;
            case "registration":
              (F =
                "#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedRegister_Title"),
                (W =
                  "#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedRegister_Body"),
                (L =
                  "#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedRegister_Action");
              break;
            case "discount":
              (F =
                "#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedDiscount_Title"),
                (W =
                  "#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedDiscount_Body"),
                (L =
                  "#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedRegister_Action");
              break;
          }
          return (0, t.jsxs)(g.b1, {
            hasImage: !!c,
            backgroundImageUrl: P,
            dimmed: !0,
            children: [
              (0, t.jsx)(g.zS, { imageUrl: c, url: u }),
              (0, t.jsxs)(g.Q1, {
                hasImage: !!c,
                children: [
                  (0, t.jsx)(g.Pz, { text: (0, o.we)(F, e.title), light: !0 }),
                  (0, t.jsx)("div", {
                    className: (0, j.A)(
                      x.ItemDeadlineHeaderText,
                      T && x.Urgent,
                    ),
                    children: (0, o.we)(W, D),
                  }),
                ],
              }),
              (0, t.jsxs)(g.FV, {
                children: [
                  (0, t.jsx)(g.hq, { complete: I, urgent: T }),
                  (0, t.jsx)(g.Pj, {
                    complete: C,
                    urgent: T,
                    label: (0, o.we)(L),
                    status: D,
                    actionStatus: (0, o.we)(
                      "#Dashboard_UpcomingEvents_Events_Deadline_EventFeatured_Register_Button",
                    ),
                    actionUrl: f,
                  }),
                  (0, t.jsx)(g.Pj, {
                    complete: A,
                    urgent: T,
                    label: (0, o.we)(
                      "#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedDiscount_Action",
                    ),
                    status: R,
                    actionStatus: (0, o.we)(
                      "#Dashboard_UpcomingEvents_Events_OptIn_Button_EnterDiscounts",
                    ),
                    actionUrl: N,
                  }),
                ],
              }),
            ],
          });
        }
        function gs(s) {
          const e = new Intl.DateTimeFormat(navigator.language, {
            month: "numeric",
            day: "numeric",
            year: "2-digit",
          });
          return (0, ae.sq)(s, (a) => `${a.rtStartDate}_${a.rtEndDate}`)
            .map(
              (a) =>
                `${e.format(new Date(a.rtStartDate * 1e3))} - ${e.format(new Date(a.rtEndDate * 1e3))}`,
            )
            .join(", ");
        }
        function Pe(s, e, n, a) {
          const i = p.useMemo(
              () =>
                e?.map((d) => ({
                  appid: d.appid,
                  appName: d.appName,
                  startDate: n,
                  endDate: a,
                })) ?? [],
              [e, n, a],
            ),
            l = p.useMemo(() => e?.map((d) => d.appid) ?? [], [e]),
            r = (0, Zt.F_)(l, { nPartnerID: s });
          return p.useMemo(() => {
            const d = i?.reduce((u, f) => u.set(f.appid, f), new Map());
            return (
              r && d
                ? Array.from(r)
                    .map(([u, f]) => ({
                      appid: u,
                      discountsDuring: f?.discounts?.filter(
                        (v) =>
                          d.get(u).startDate &&
                          d.get(u).startDate <= v.rtEndDate &&
                          d.get(u).endDate &&
                          v.rtStartDate <= d.get(u).endDate,
                      ),
                    }))
                    .filter((u) => u.discountsDuring?.length)
                : void 0
            )?.map(({ appid: u, discountsDuring: f }) => ({
              appid: u,
              appName: d?.get(u).appName,
              discountsDuring: f,
            }));
          }, [i, r]);
        }
        function vs(s, e, n, a) {
          let i = s;
          if (e == "seasonalsale") i = (0, dt.yT)((0, dt.z_)(a));
          else {
            const l = n?.description?.definition?.event_title?.[h.TS.LANGUAGE];
            if (l) i = l;
            else {
              const r = [
                "takeover",
                "takeunder",
                "midweek",
                "midweek deal",
                "weekend deal",
              ];
              for (const d of r)
                i = i.replace(new RegExp("^" + d + "\\s*[:-]\\s*", "i"), "");
            }
          }
          return i;
        }
        function hs(s) {
          const e = ee(),
            [n] = (0, ze.QD)("recap"),
            a = p.useCallback(
              (l, r) => {
                const d = new Date(e.getTime() - 5 * ne.Kp.PerDay * 1e3),
                  m = {
                    id: `fakerecap_${r}`,
                    name: r,
                    opt_in_id: l,
                    type: "nextfest",
                    sale_clan_account: 39049601,
                    sale_clan_event_gid: "4148451028995460854",
                    start_date: d.getTime() / 1e3,
                    end_date: d.getTime() / 1e3 + 3 * ne.Kp.PerDay,
                  },
                  c = {
                    description: {
                      opt_in_name: l,
                      type: Xt.Tj._,
                      active: !0,
                      start_date: m.start_date,
                      end_date: m.end_date,
                      definition: {},
                    },
                    rgEligibleApps: [],
                    rgRegisteredApps: [],
                    rgFeaturedApps: [],
                  },
                  u = new Ye(
                    m.id,
                    s,
                    !1,
                    m,
                    null,
                    c,
                    new Date(c.description.start_date * 1e3),
                    new Date(c.description.end_date * 1e3),
                    "event",
                    ut(e, m),
                    !1,
                    !1,
                    _t,
                    void 0,
                  );
                return (0, Re.wT)(Ae(e, m), ""), u;
              },
              [e, s],
            );
          return p.useMemo(
            () =>
              n ? Array.from({ length: 1 }, (r, d) => a(n, `${n}_${d}`)) : [],
            [a, n],
          );
        }
        function Ds() {
          return p.useMemo(() => {
            const s = new Date();
            s.setHours(0, 0, 0, 0);
            const e = (l) => {
                const r = new Date();
                return r.setDate(s.getDate() + l), r;
              },
              a = [
                {
                  title: "Event Recap Foo",
                  startDate: e(-10),
                  eventType: "event",
                },
                {
                  title: "Event Recap Bar",
                  startDate: e(-6),
                  eventType: "event",
                },
                {
                  title: "Live Event Foo",
                  startDate: e(-8),
                  endDate: e(2),
                  eventType: "event",
                },
                {
                  title: "Live Event Bar",
                  startDate: e(-6),
                  endDate: e(4),
                  eventType: "event",
                },
                {
                  title: "Team Fortress 2",
                  startDate: e(-1),
                  eventType: "release-game",
                },
                { title: "Dota 2", startDate: e(0), eventType: "event" },
                {
                  title: "Weekend Deal - Portal 2",
                  startDate: e(0),
                  eventType: "deadline",
                },
                {
                  title: "Half Life 2 - Episode One",
                  startDate: e(0),
                  eventType: "release-dlc",
                },
                {
                  title: "Capitalism and Economy Fest",
                  startDate: e(1),
                  eventType: "deadline",
                },
                {
                  title: "Dota Underlords",
                  startDate: e(9),
                  eventType: "release-game",
                },
                {
                  title: "Counter Strike 2",
                  startDate: e(36),
                  eventType: "event",
                },
                {
                  title: "Steam Next Fest June Edition",
                  startDate: e(36),
                  eventType: "event",
                },
                { title: "The Lab", startDate: e(36), eventType: "event" },
              ].map((l) => ({
                ...l,
                id: "fake_" + l.title,
                endDate: l.endDate ?? l.startDate,
                eventTypeName: Et(l.eventType),
                getElement: () =>
                  (0, t.jsx)("div", {
                    style: {
                      color: "white",
                      backgroundColor: ft(l.title, 0.4),
                    },
                    children: l.title,
                  }),
                getCapsuleElement: () =>
                  (0, t.jsx)("div", {
                    style: {
                      color: "white",
                      backgroundColor: ft(l.title, 0.4),
                      flex: 1,
                    },
                    children: l.title,
                  }),
              }));
            let i = 40;
            for (let l = 0; l < 50; l++) {
              let r;
              switch (Math.floor(Math.random() * 4)) {
                case 0:
                  r = "deadline";
                  break;
                case 1:
                  r = "deadline-urgent";
                  break;
                case 2:
                  r = "release-game";
                  break;
                case 3:
                  r = "release-dlc";
                  break;
                case 4:
                  r = "event";
                  break;
              }
              i += Math.random() * 3;
              const d = {
                title: "Generated event" + l,
                startDate: e(i),
                endDate: e(i),
                eventType: r,
                id: "fake_" + l.toString(),
                eventTypeName: Et(r),
                getElement: () =>
                  (0, t.jsx)("div", { children: "Generated event" + l }),
                dimmed: Math.random() > 0.9,
              };
              a.push(d);
            }
            return a;
          }, []);
        }
        function Et(s) {
          switch (s) {
            case "deadline":
              return (
                (0, o.we)("#Dashboard_UpcomingEvents_EventType_Deadline") +
                " (Generated)"
              );
            case "deadline-urgent":
              return (
                (0, o.we)("#Dashboard_UpcomingEvents_EventType_Deadline") +
                " (Generated)"
              );
            case "release-game":
              return (
                (0, o.we)("#Dashboard_UpcomingEvents_EventType_Release") +
                " (Generated)"
              );
            case "release-dlc":
              return (
                (0, o.we)("#Dashboard_UpcomingEvents_EventType_Release_DLC") +
                " (Generated)"
              );
            case "event":
              return (
                (0, o.we)("#Dashboard_UpcomingEvents_EventType_Event_Unknown") +
                " (Generated)"
              );
          }
        }
        function ft(s, e) {
          let n = 0;
          for (let i = 0; i < s.length; i++)
            n = s.charCodeAt(i) + ((n << 5) - n);
          let a = "#";
          for (let i = 0; i < 3; i++) {
            const l = Math.floor(((n >> (i * 8)) & 255) * e);
            a += ("00" + l.toString(16)).slice(-2);
          }
          return a;
        }
        var et = _(79198),
          tt = _(74965),
          st = _(7582),
          Es = _(33255);
        function fs() {
          const s = ee(),
            e = Qe();
          return p.useMemo(() => {
            if (!e) return [];
            const n = xs((0, h.Tc)("rgDeadlines", "application_config")),
              i = (n ? Array.from(n.entries()) : [])
                .filter(([r, d]) => new Date(d.due_date * 1e3) >= s || Ts(d))
                .reduce((r, [d, m]) => {
                  const c = (0, S.xi)(new Date(m.due_date * 1e3)),
                    u = ys(m.type),
                    f = u ? "group" : d,
                    v = `${c.getTime()}_${m.type}_${f}`,
                    D = r.has(v) ? r.get(v).deadlines : [];
                  return (
                    r.set(v, {
                      dueDate: c,
                      bSupportsGrouping: u,
                      deadlines: [...D, m],
                    }),
                    r
                  );
                }, new Map());
            return (
              Array.from(i.entries()).flatMap(([r, d]) => {
                const { dueDate: m, bSupportsGrouping: c, deadlines: u } = d,
                  f = [];
                return (
                  c ? f.push(Rs(e, u)) : f.push(...u.map((v) => xt(e, v))),
                  f
                    .filter((v) => !!v)
                    .map((v) => ({
                      title: v.sTitle,
                      startDate: m,
                      endDate: m,
                      eventType: v.bUrgent ? "deadline-urgent" : "deadline",
                      id: r,
                      eventTypeName: v.sHeader,
                      getElement: () => v.element,
                      getCapsuleElement: () => v.capsuleElement,
                      passesFilter: (D) => D == me,
                    }))
                );
              }) ?? []
            );
          }, [s, e]);
        }
        function xs(s) {
          if (s)
            return Object.keys(s).reduce((e, n) => e.set(n, s[n]), new Map());
        }
        function Ts(s) {
          switch (s.type) {
            case M.Qo.Jg:
              return !0;
            case M.Qo.RO: {
              const n = s.description_jsondata
                ? JSON.parse(s.description_jsondata)
                : void 0;
              return !(
                n?.TemplateName == "F1099MISC-ConsentYes" ||
                n?.TemplateName == "F1042-Consent"
              );
            }
          }
          return !1;
        }
        function ys(s) {
          return s === M.Qo.o6;
        }
        function xt(s, e) {
          const n = e.description_jsondata
            ? JSON.parse(e.description_jsondata)
            : void 0;
          switch (e.type) {
            case M.Qo.tb:
              return {
                sHeader: "Action Required",
                sTitle: "Test 1",
                bUrgent: !0,
                element: (0, t.jsx)(Cs, { deadline: e, json: n }),
              };
            case M.Qo.Z5:
              return {
                sHeader: (0, o.we)(
                  "#Dashboard_UpcomingEvents_EventType_Deadline",
                ),
                sTitle: (0, o.we)(
                  "#PartnerDeadline_DailyDeal_InviteExpiring_Title",
                ),
                bUrgent: !0,
                element: (0, t.jsx)(As, { deadline: e, json: n }),
              };
            case M.Qo.o6: {
              const i = s.GetInfo(n?.opt_in_name)?.description.definition
                .event_title[h.TS.LANGUAGE];
              return i
                ? {
                    sHeader: (0, o.we)(
                      "#PartnerDeadline_NextFest_PressPreview_Title",
                    ),
                    sTitle: (0, o.we)(
                      "#Deadlines_CombinedTitle",
                      (0, o.we)("#PartnerDeadline_NextFest_PressPreview_Title"),
                      i,
                    ),
                    element: (0, t.jsx)(bs, { deadline: e, json: n }),
                  }
                : void 0;
            }
            case M.Qo.Wk: {
              const i = s.GetInfo(n?.opt_in_name)?.description.definition
                .event_title[h.TS.LANGUAGE];
              return i
                ? {
                    sHeader: (0, o.we)(
                      "#PartnerDeadline_NextFest_DemoBuildReview_Title",
                    ),
                    sTitle: (0, o.we)(
                      "#Deadlines_CombinedTitle",
                      (0, o.we)(
                        "#PartnerDeadline_NextFest_DemoBuildReview_Title",
                      ),
                      i,
                    ),
                    bUrgent: !1,
                    element: (0, t.jsx)(Is, { deadline: e, json: n }),
                  }
                : void 0;
            }
            case M.Qo.MF: {
              const a = Tt(e);
              return {
                sHeader: (0, o.we)(
                  "#Dashboard_UpcomingEvents_EventType_Deadline",
                ),
                sTitle: (0, o.we)(
                  a
                    ? "#PartnerDeadline_AssetRequest_InviteExpiring_Title_Soft"
                    : "#PartnerDeadline_AssetRequest_InviteExpiring_Title",
                ),
                bUrgent: !a,
                element: (0, t.jsx)(Ss, { deadline: e, json: n }),
              };
            }
            case M.Qo.Jg:
              return {
                sHeader: (0, o.we)(
                  "#Dashboard_UpcomingEvents_EventType_SeasonPass",
                ),
                sTitle: (0, o.we)(
                  "#Dashboard_UpcomingEvents_EventType_SeasonPass",
                ),
                bUrgent:
                  e.due_date < st.HD.GetTimeNowWithOverride() - 10080 * 60,
                element: (0, t.jsx)(Ns, { deadline: e, json: n }),
              };
            case M.Qo.RO:
              return {
                sHeader: Ps(n?.TemplateName),
                sTitle: nt(n),
                bUrgent:
                  e.due_date < st.HD.GetTimeNowWithOverride() + 744 * 60 * 60,
                element: (0, t.jsx)(Us, { deadline: e, json: n }),
                capsuleElement: (0, t.jsx)("div", {
                  className: et.CapsuleTax,
                  children: nt(n),
                }),
              };
            default:
          }
        }
        function Rs(s, e) {
          if (e[0].type === M.Qo.o6) return xt(s, e[0]);
        }
        function Cs(s) {
          const { deadline: e, json: n } = s,
            i = new Intl.DateTimeFormat(navigator.language, {
              month: "short",
              day: "numeric",
            }).format(new Date(e.due_date * 1e3));
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)("div", { children: ["Name: ", n.name] }),
              (0, t.jsxs)("div", { children: ["Due date: ", i] }),
            ],
          });
        }
        function As(s) {
          const { deadline: e } = s,
            [n] = (0, K.G6)(e?.store_item_id, e?.store_item_type, {
              include_assets: !0,
            }),
            a = `${h.TS.PARTNER_BASE_URL}promotion/dailydeals/invite/${e.gid}`,
            i = (0, tt.FN)(e?.due_date);
          return (0, t.jsx)(De, {
            urgent: !0,
            imageUrl: n?.GetAssets().GetHeaderURL(),
            title: (0, o.we)("#PartnerDeadline_DailyDeal_InviteExpiring_Title"),
            body: (0, o.we)("#PartnerDeadline_InviteExpiring_Body", i),
            url: a,
            imageTooltip: n?.GetName(),
            rightCol: (0, t.jsx)(g.z9, {
              url: a,
              children: (0, o.we)("#DailyDeals_PickDate"),
            }),
          });
        }
        const ws = 10080 * 60;
        function Tt(s) {
          return s.due_date > st.HD.GetTimeNowWithOverride() + ws;
        }
        function Ss(s) {
          const { deadline: e } = s,
            [n] = (0, K.G6)(e?.store_item_id, e?.store_item_type, {
              include_assets: !0,
            }),
            a = `${h.TS.PARTNER_BASE_URL}promotion/assetportal/request/${e.gid}`,
            i = (0, tt.FN)(e?.due_date, !0, !0),
            l = Tt(e);
          return (0, t.jsx)(De, {
            urgent: !l,
            imageUrl: n?.GetAssets().GetHeaderURL(),
            title: (0, o.we)(
              l
                ? "#PartnerDeadline_AssetRequest_InviteExpiring_Title_Soft"
                : "#PartnerDeadline_AssetRequest_InviteExpiring_Title",
            ),
            body: (0, o.we)(
              l
                ? "#PartnerDeadline_InviteExpiring_Body_Soft"
                : "#PartnerDeadline_InviteExpiring_Body",
              i,
            ),
            url: a,
            imageTooltip: n?.GetName(),
            rightCol: (0, t.jsx)(g.z9, {
              url: a,
              children: (0, o.we)(
                "#Dashboard_UpcomingEvents_EventType_PromotionPlan_assetrequest_button",
              ),
            }),
          });
        }
        function bs(s) {
          const { deadline: e, json: n } = s,
            a = Ze(n.opt_in_name),
            i = `${h.TS.PARTNER_BASE_URL}optin/sale/${n.opt_in_name.replace("sale_", "")}`;
          return a
            ? (0, t.jsx)(De, {
                title: a.description.definition.event_title[h.TS.LANGUAGE],
                body: (0, o.we)("#PartnerDeadline_NextFest_PressPreview_Body"),
                rightCol: (0, t.jsx)(g.z9, {
                  url: i,
                  children: (0, o.we)(
                    "#PartnerDeadline_NextFest_View_Registration",
                  ),
                }),
              })
            : null;
        }
        function Is(s) {
          const { deadline: e, json: n } = s,
            a = Ze(n.opt_in_name),
            [i] = (0, K.G6)(e?.store_item_id, e?.store_item_type, {
              include_assets: !0,
            });
          if (!a || !e?.store_item_id) return null;
          const l = `${h.TS.PARTNER_BASE_URL}apps/demo/${e.store_item_id}`,
            r = `${h.TS.PARTNER_BASE_URL}doc/store/review_process`;
          return (0, t.jsx)(De, {
            imageUrl: i?.GetAssets().GetHeaderURL(),
            title: a.description.definition.event_title[h.TS.LANGUAGE],
            body: (0, o.oW)(
              (0, o.we)(
                "#PartnerDeadline_NextFest_DemoBuildReview_Body",
                i?.GetName() || "(" + e.store_item_id + ")",
              ),
              (0, t.jsx)("a", { href: r }),
            ),
            rightCol: (0, t.jsx)(g.z9, {
              url: l,
              children: (0, o.we)(
                "#PartnerDeadline_NextFest_View_Registration",
              ),
            }),
          });
        }
        const js = { include_assets: !0 };
        function Ns(s) {
          const { deadline: e, json: n } = s,
            [a] = (0, K.t7)(e.store_item_id, js),
            l = (0, Es.u)(e.store_item_id)?.find(
              (c) => c.milestone_id == Number.parseInt(e.gid),
            ),
            r = o.A0.GetTokenWithFallback(l?.title),
            d = `${h.TS.PARTNER_BASE_URL}admin/game/editbyappid/${e.store_item_id}?activetab=tab_specialsettings#seasonpass`,
            m = `${h.TS.PARTNER_BASE_URL}apps/landing/${e.store_item_id}`;
          return (0, t.jsx)(De, {
            imageUrl: a?.GetAssets().GetSmallCapsuleURL(),
            title: (0, o.we)(
              "#PartnerDeadline_SeasonPass_DLC",
              a?.GetName() || "(" + e.store_item_id + ")",
            ),
            body: (0, o.we)("#PartnerDeadline_SeasonPass_Desc", r || e.gid),
            rightCol: (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)(g.z9, {
                  url: d,
                  children: (0, o.we)("#PartnerDeadline_SeasonPass_OpenEditor"),
                }),
                (0, t.jsx)(g.z9, {
                  url: m,
                  children: (0, o.we)(
                    "#DiscountDashboard_VisitAppLanding_Tooltip",
                  ),
                }),
              ],
            }),
          });
        }
        function Us(s) {
          const { deadline: e, json: n } = s,
            a = (0, tt.FN)(e?.due_date, !0, !0),
            i = `${h.TS.PARTNER_BASE_URL}taxrequirement/view/${e.partnerid}/${e.gid}`,
            l = Ls();
          let r = Ms(n, a);
          return (
            l ||
              (r +=
                " " +
                (0, o.we)(
                  "#PartnerDeadline_TaxRequirement_ActualAuthorityRequired",
                )),
            (0, t.jsx)(De, {
              title: nt(n),
              body: r,
              rightCol: (0, t.jsx)(g.z9, {
                url: i,
                children: (0, o.we)(
                  "#PartnerDeadline_TaxRequirement_ButtonViewDetails",
                ),
              }),
            })
          );
        }
        function De(s) {
          const {
            imageUrl: e,
            title: n,
            body: a,
            imageTooltip: i,
            url: l,
            rightCol: r,
            urgent: d,
          } = s;
          return (0, t.jsxs)(g.b1, {
            hasImage: !!e,
            children: [
              (0, t.jsx)(g.zS, { imageUrl: e, url: l, tooltip: i }),
              (0, t.jsxs)(g.Q1, {
                hasImage: !!e,
                children: [
                  (0, t.jsx)(g.Pz, { text: n }),
                  (0, t.jsx)("div", {
                    className: d
                      ? et.DeadlineWarningUrgent
                      : et.DeadlineWarning,
                    children: a,
                  }),
                ],
              }),
              r && (0, t.jsx)(g.m2, { children: r }),
            ],
          });
        }
        function Ps(s) {
          switch (s) {
            case "Freeform":
            case "Freeform-FR":
            case "F1099MISC-ConsentYes":
            case "F1042-Consent":
              return (0, o.we)(
                "#PartnerDeadline_TaxRequirement_Header_NoAction",
              );
            default:
              return (0, o.we)("#Dashboard_UpcomingEvents_EventType_Deadline");
          }
        }
        function nt(s) {
          switch (s?.TemplateName) {
            case "Freeform":
            case "Freeform-FR":
              return yt(s)
                ? (0, o.we)(
                    "#PartnerDeadline_TaxRequirement_Title_FileReceived",
                  )
                : (0, o.we)("#PartnerDeadline_TaxRequirement_Title_Freeform");
            case "F1099MISC-ConsentYes":
            case "F1042-Consent":
              return (0, o.we)(
                "#PartnerDeadline_TaxRequirement_Title_NoAction",
              );
            default:
              return (0, o.we)("#PartnerDeadline_TaxRequirement_Title");
          }
        }
        function Ms(s, e) {
          switch (s?.TemplateName) {
            case "Renewal-W8-Initial":
              return (0, o.we)(
                "#PartnerDeadline_TaxRequirement_Renewal-W8-Initial",
                e,
              );
            case "Renewal-W8-Partner-Urgent":
              return (0, o.we)(
                "#PartnerDeadline_TaxRequirement_Renewal-W8-Partner-Urgent",
              );
            case "DocReq-KYC-FR":
            case "DocReq-KYC-Entity-FR-CERT":
            case "DocReq-KYC-Entity-FR":
              return (0, o.we)(
                "#PartnerDeadline_TaxRequirement_AdditionalKYCDocuments",
              );
            case "DocReq-Selfie-FR":
            case "DocReq-TreatyClaimOthCty-FR":
            case "DocReq-TreatyClaimUSAddress-FR":
            case "DocReq-W8USAddress-FR":
            case "DocReq-W8USParent-FR":
            case "DocReq-PhotoId-10Years":
            case "DocReq-PhotoId-FrontBack":
            case "DocRec-NameTranslation":
            case "DocReq-Entity-CN-NECIPS":
            case "DocReq-ProofOfAddress":
            case "DocReq-TaxResidency":
            case "DocReq-Entity-TR-Gazetesi":
              return (0, o.we)(
                "#PartnerDeadline_TaxRequirement_AdditionalDocuments",
              );
            case "F1099MISC-ConsentYes":
            case "F1042-Consent":
              return (0, o.we)("#PartnerDeadline_TaxRequirement_NewDocuments");
            case "FailureToComply":
            case "FailureToComply-KYC":
              return (0, o.we)("#PartnerDeadline_TaxRequirement_Expired");
            case "AddressCorrection":
            case "InvalidAddress":
            case "InvalidTaxInfo-Partner":
            case "InvalidTIN":
            case "InvalidTINAudit-Partner":
            case "NameMismatch-Partner":
            case "Notify-FailedTIN":
            case "Notify-FailedTIN-SingLLC":
            case "Notify-Mismatch":
              return (0, o.we)("#PartnerDeadline_TaxRequirement_Invalid");
            case "Notify-NoTINTreaty-Partner":
              return (0, o.we)("#PartnerDeadline_TaxRequirement_NoTINTreaty");
            case "Freeform":
            case "Freeform-FR":
              let a = "";
              return (
                yt(s)
                  ? (a = (0, o.we)(
                      "#PartnerDeadline_TaxRequirement_FileReceived",
                    ))
                  : ((a = s?.Parameters?.CustomMessageBody?.trim() || ""),
                    a.length > 64 && (a = a.substring(0, 64) + "...")),
                a
              );
            default:
              return "";
          }
        }
        function Ls() {
          const [s] = p.useState(
            (0, h.Tc)("bActualAuthority", "application_config"),
          );
          return s;
        }
        function yt(s) {
          return s?.Parameters?.UploadOriginalFileName !== void 0;
        }
        var k = _(95013),
          Me = _(84109),
          Fs = _(99640),
          ge = _(9189),
          Gs = _(41928),
          Bs = _(49982),
          Hs = _(38243),
          ks = _(19730);
        function Os(s) {
          const e = p.useMemo(
              () => (0, h.Tc)("rgDailyDeals", "application_config") ?? [],
              [],
            ),
            n = ee();
          return p.useMemo(
            () =>
              e
                .filter(
                  (i) =>
                    !i.cancelled &&
                    new Date((i.rtime32_start_time + 7 * ne.Kp.PerDay) * 1e3) >
                      n,
                )
                .flatMap((i) => {
                  const l = new Date(
                    (i.rtime32_start_time + ne.Kp.PerDay) * 1e3,
                  );
                  return {
                    title: i.store_item_name,
                    startDate: new Date(i.rtime32_start_time * 1e3),
                    endDate: l,
                    eventType: "event",
                    id: i.gid,
                    eventTypeName: Vs(i),
                    getElement: () => (0, t.jsx)(Ws, { deal: i, partnerId: s }),
                    getCapsuleElement: () => (0, t.jsx)($s, { deal: i }),
                    passesFilter: (r) => r == me,
                    editURL: `${h.TS.PARTNER_BASE_URL}promotion/dailydeals/edit/${i.gid}`,
                  };
                }) ?? [],
            [n, s, e],
          );
        }
        function Vs(s) {
          return Rt(new Date(), s)
            ? (0, o.we)("#Dashboard_UpcomingEvents_EventType_DailyDealRecap")
            : (0, o.we)("#Dashboard_UpcomingEvents_EventType_DailyDeal");
        }
        function Rt(s, e) {
          return (
            new Date((e.rtime32_start_time + ne.Kp.PerDay) * 1e3).getTime() <
            s.getTime()
          );
        }
        function Ws(s) {
          const { deal: e, partnerId: n } = s;
          return Rt(new Date(), e)
            ? (0, t.jsx)(Qs, { deal: e, partnerId: n })
            : (0, t.jsx)(zs, { partnerId: n, deal: e });
        }
        function zs(s) {
          const { partnerId: e, deal: n } = s,
            a = (0, Me.Dw)(n.store_item_type),
            [i] = (0, K.G6)(n.store_item_id, a, { include_assets: !0 }),
            l = i?.GetAssets().GetHeaderURL();
          let r = null;
          a == X.c6.qI && i
            ? (r = h.TS.PARTNER_BASE_URL + "apps/landing/" + i.GetAppID())
            : a == X.c6.xO && i
              ? (r = h.TS.PARTNER_BASE_URL + "bundles/view/" + i.GetID())
              : a == X.c6.RD &&
                i &&
                (r =
                  h.TS.PARTNER_BASE_URL + "store/packagelanding/" + i.GetID());
          const d = n.rtime32_start_time + 1380 * 60,
            {
              nDiscountPercentHigh: m,
              dtDiscountStart: c,
              dtDiscountEnd: u,
            } = (0, ge.Y4)(n),
            f = p.useMemo(() => (0, ge.Dt)(n, m), [n, m]),
            v = (0, ge.o9)(n),
            D = m > 0,
            R = f >= ge.of.DealReady,
            b = R
              ? (0, o.we)("#Dashboard_UpcomingEvents_DailyDeal_ReadyToGo")
              : "",
            C = (0, Me.ls)(e?.toString(), n.discount_event_id?.toString()),
            N = new Intl.DateTimeFormat(navigator.language, {
              month: "short",
              day: "numeric",
            }).format(new Date(n.rtime32_start_time * 1e3)),
            y = (0, ge.UJ)(n);
          return (0, t.jsxs)(g.b1, {
            hasImage: !!l,
            children: [
              (0, t.jsx)(g.zS, {
                imageUrl: l,
                url: r,
                tooltip: n.store_item_name,
              }),
              (0, t.jsxs)(g.Q1, {
                hasImage: !!l,
                children: [
                  (0, t.jsx)(g.Pz, { text: n.store_item_name }),
                  (0, t.jsxs)("div", {
                    children: [
                      (0, t.jsx)("span", {
                        className: k.DateDesc,
                        children: (0, o.we)(
                          "#Dashboard_UpcomingEvents_DailyDeal_Dates",
                        ),
                      }),
                      (0, t.jsx)(g.ek, {
                        startTimestamp: n.rtime32_start_time,
                        endTimestamp: d,
                      }),
                    ],
                  }),
                  D &&
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsx)("span", {
                          className: k.DateDesc,
                          children: (0, o.we)(
                            "#Dashboard_UpcomingEvents_DailyDeal_Discounted",
                          ),
                        }),
                        (0, t.jsx)(g.ek, {
                          startTimestamp: c,
                          endTimestamp: u,
                        }),
                      ],
                    }),
                ],
              }),
              (0, t.jsxs)(g.FV, {
                children: [
                  (0, t.jsx)(g.hq, {
                    complete: R,
                    urgent: !0,
                    overrideText: b,
                  }),
                  D &&
                    (0, t.jsx)(g.Pj, {
                      complete: D,
                      urgent: !0,
                      label: (0, o.we)(
                        "#Dashboard_UpcomingEvents_DailyDeal_StatusDiscountLabel",
                      ),
                      status: (0, t.jsx)(Fs.b4, { oDailyDeal: n }),
                      actionStatus: (0, o.we)(
                        "#Dashboard_UpcomingEvents_DailyDeal_EditDiscount",
                      ),
                      actionUrl: C,
                    }),
                  !D &&
                    (0, t.jsx)(g.Pj, {
                      complete: !1,
                      urgent: !0,
                      label: (0, o.we)(
                        "#Dashboard_UpcomingEvents_DailyDeal_StatusDiscountLabel",
                      ),
                      status: (0, o.we)(
                        "#Dashboard_UpcomingEvents_DailyDeal_DueBy",
                        N,
                      ),
                      actionStatus: (0, o.we)(
                        "#Dashboard_UpcomingEvents_DailyDeal_EnterDiscount",
                      ),
                      actionUrl: C,
                    }),
                  v == ge.Sq.SetUp &&
                    (0, t.jsx)(g.Pj, {
                      complete: !0,
                      urgent: !0,
                      label: (0, o.we)(
                        "#Dashboard_UpcomingEvents_DailyDeal_StatusSalePageSetUp",
                      ),
                      actionStatus: (0, o.we)(
                        "#Dashboard_UpcomingEvents_DailyDeal_StatusSalePageView",
                      ),
                      actionUrl: y,
                    }),
                  v == ge.Sq.NotSetUp &&
                    (0, t.jsx)(g.Pj, {
                      complete: !1,
                      urgent: !0,
                      label: (0, o.we)(
                        "#Dashboard_UpcomingEvents_DailyDeal_StatusSalePageNeeded",
                      ),
                    }),
                ],
              }),
            ],
          });
        }
        function $s(s) {
          const { deal: e } = s,
            n = (0, Me.Dw)(e.store_item_type),
            [a] = (0, K.G6)(e.store_item_id, n, { include_assets: !0 }),
            i = a?.GetAssets().GetHeaderURL();
          let l = null;
          return (
            n == X.c6.qI && a
              ? (l = h.TS.PARTNER_BASE_URL + "apps/landing/" + a.GetAppID())
              : n == X.c6.xO && a
                ? (l = h.TS.PARTNER_BASE_URL + "bundles/view/" + a.GetID())
                : n == X.c6.RD &&
                  a &&
                  (l =
                    h.TS.PARTNER_BASE_URL +
                    "store/packagelanding/" +
                    a.GetID()),
            (0, t.jsx)(g.aV, {
              imageUrl: i,
              title: (0, o.we)("#Dashboard_UpcomingEvents_EventType_DailyDeal"),
            })
          );
        }
        function Qs(s) {
          const { deal: e, partnerId: n } = s,
            [a, i] = (0, K.G6)(
              e?.store_item_id,
              (0, Me.Dw)(e?.store_item_type),
              { include_assets: !0 },
            ),
            r = (0, Bs.c)(n, e?.gid ? [e.gid] : [])?.get(e.gid),
            d = !e || !r || i == K.Sq;
          if (e.cancelled || e.deleted) return null;
          const m = `${h.TS.PARTNER_BASE_URL}promotion/dailydeals/dashboard/${n}`;
          let c;
          return (
            a?.GetAssets().GetHeaderURL()
              ? (c = (0, t.jsx)("img", { src: a.GetAssets().GetHeaderURL() }))
              : (c = a
                  ? (0, o.we)("#DailyDeals_HeaderArtMissing")
                  : (0, o.we)("#DailyDeals_StoreItem_Hidden")),
            (0, t.jsx)("div", {
              className: (0, j.A)(k.DailyDeal_RecapContainer),
              children: d
                ? (0, t.jsx)(Zs, {})
                : (0, t.jsx)(t.Fragment, {
                    children: (0, t.jsxs)("div", {
                      className: (0, j.A)(k.DailyDeal_RecapTable),
                      children: [
                        (0, t.jsx)("div", {
                          className: k.Cell,
                          children: (0, t.jsx)("div", {
                            className: k.CapsuleContainer,
                            children: c,
                          }),
                        }),
                        (0, t.jsxs)("div", {
                          className: (0, j.A)(k.Cell),
                          children: [
                            (0, t.jsxs)("div", {
                              className: k.PromoTitle,
                              children: [
                                (0, t.jsx)("span", {
                                  className: k.FeaturedDate,
                                  children: (0, o.TW)(e.rtime32_start_time),
                                }),
                                a?.GetName() || e?.store_item_name,
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className: k.SalesRow,
                              children: [
                                (0, t.jsx)("div", {
                                  className: k.VerticalCell,
                                  children:
                                    r?.gross_sales &&
                                    (0, t.jsxs)(t.Fragment, {
                                      children: [
                                        (0, t.jsx)("div", {
                                          className: k.HighlightHeader,
                                          children: (0, o.we)(
                                            "#DailyDeals_Report_Revenue",
                                          ),
                                        }),
                                        (0, t.jsx)("div", {
                                          className: (0, j.A)(
                                            k.HighlightValue,
                                            k.Revenue,
                                          ),
                                          children: r.gross_sales
                                            ? (0, Hs.xE)(r.gross_sales)
                                            : "?",
                                        }),
                                      ],
                                    }),
                                }),
                                (0, t.jsx)("div", {
                                  className: k.VerticalCell,
                                  children:
                                    r?.impressions &&
                                    (0, t.jsxs)(t.Fragment, {
                                      children: [
                                        (0, t.jsx)("div", {
                                          className: k.HighlightHeader,
                                          children: (0, o.we)(
                                            "#DailyDeals_Report_Impressions",
                                          ),
                                        }),
                                        (0, t.jsx)("div", {
                                          className: (0, j.A)(
                                            k.HighlightValue,
                                            k.Revenue,
                                          ),
                                          children: (0, ks.Dq)(r.impressions),
                                        }),
                                      ],
                                    }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, t.jsx)("div", {
                          className: (0, j.A)(k.Cell, k.GameCount),
                          children:
                            r?.marketing?.length > 1 &&
                            (0, t.jsx)(Gs.K, { nGames: r.marketing.length }),
                        }),
                        (0, t.jsx)("div", {
                          className: k.Cell,
                          children: (0, t.jsx)("div", {
                            className: k.DailyDealLinkButtonContainer,
                            children: (0, t.jsx)(Je, { summaryURL: m }),
                          }),
                        }),
                      ],
                    }),
                  }),
            })
          );
        }
        function Zs() {
          return (0, t.jsx)("div", {
            className: k.RecapThrobberContainer,
            children: (0, t.jsx)(Ke.t, {
              size: "medium",
              position: "center",
              className: k.ReportThrobber,
            }),
          });
        }
        var Le = _(73393),
          Ct = _(99229),
          at = _(65804),
          Ks = _(88812);
        function Ys() {
          return p.useMemo(() => {
            const s = Le.c.Get().GetActiveEvents(),
              e = Le.c.Get().GetUpcomingEvents(),
              n = Le.c.Get().GetDraftEvents(),
              a = (r, d) => ({
                title: r.strEventName,
                startDate: new Date(r.rtStartTime * 1e3),
                endDate: new Date(r.rtEndTime * 1e3),
                eventType: "event",
                id: r.clanEventGID,
                eventTypeName: d,
                getElement: () => (0, t.jsx)(Js, { saleDesc: r }),
                getCapsuleElement: () => (0, t.jsx)(Xs, { saleDesc: r }),
                passesFilter: (m) => m == me,
              }),
              i = (r) => r.eEventType != se.ajI;
            return [
              ...s
                .filter(i)
                .map((r) =>
                  a(
                    r,
                    (0, o.we)("#Dashboard_UpcomingEvents_PartnerEvents_Active"),
                  ),
                ),
              ...e
                .filter(i)
                .map((r) =>
                  a(
                    r,
                    (0, o.we)(
                      "#Dashboard_UpcomingEvents_PartnerEvents_Upcoming",
                    ),
                  ),
                ),
              ...n
                .filter(i)
                .map((r) =>
                  a(
                    r,
                    (0, o.we)("#Dashboard_UpcomingEvents_PartnerEvents_Draft"),
                  ),
                ),
            ].filter((r) => !!r);
          }, []);
        }
        function Js(s) {
          const { saleDesc: e } = s;
          return at.O3.GetClanEventModel(e.clanEventGID)
            ? (0, t.jsx)(Ct.Wr, {
                saleDesc: e,
                bShowAppBrowse: !0,
                bHidePartnerStats: !0,
                bShowWhyAmISeeingThis: !0,
              })
            : (0, t.jsx)(Ct.GS, {
                saleDesc: e,
                message: (0, o.we)(
                  "#Dashboard_UpcomingEvents_PartnerEvents_NoAccess",
                ),
              });
        }
        function Xs(s) {
          const { saleDesc: e } = s,
            n = (0, se.sfN)(h.TS.LANGUAGE),
            a = at.O3.GetClanEventModel(e.clanEventGID),
            i = (0, Ks.WC)(a, "capsule", n, _e.wI.capsule_main);
          return a ? (0, t.jsx)(g.aV, { imageUrls: i }) : void 0;
        }
        var we = _(47634),
          qs = _(73259),
          Fe = _(18099),
          en = _(62222),
          tn = _(8681);
        function sn() {
          return p.useMemo(
            () =>
              (0, h.Tc)(
                "rgMarketingMessagePreviews",
                "application_config",
              )?.map((n) => {
                const a = new Date(n.start_date * 1e3),
                  i = new Date(n.end_date * 1e3);
                return {
                  title: n.title,
                  startDate: a,
                  endDate: i,
                  eventType: "event",
                  id: n.gid,
                  eventTypeName: (0, o.we)(
                    "#Dashboard_UpcomingEvents_EventType_MarketingMessagePreview",
                  ),
                  getElement: () => (0, t.jsx)(nn, { marketingMessage: n }),
                  getCapsuleElement: () =>
                    (0, t.jsx)(on, { marketingMessage: n }),
                  passesFilter: (l) => l == me,
                };
              }) ?? [],
            [],
          );
        }
        function At(s) {
          let e = X.c6.Ep;
          return (
            s == we.OT.vy
              ? (e = X.c6.qI)
              : s == we.OT.jA
                ? (e = X.c6.RD)
                : s == we.OT.uA && (e = X.c6.xO),
            e
          );
        }
        function nn(s) {
          const { marketingMessage: e } = s,
            n = Ie(),
            a = e.visibility === we.V$.QP,
            i = e.visibility === we.V$.Mj,
            l = At(e.association_type),
            [r] = (0, K.G6)(e.associated_id, l, {
              include_basic_info: !0,
              include_assets: !0,
            }),
            d = r,
            m = d?.GetAssets().GetHeaderURL() || null,
            c = d
              ? h.TS.PARTNER_BASE_URL + "apps/landing/" + d.GetAppID()
              : null,
            u =
              a || i
                ? h.TS.PARTNER_BASE_URL +
                  "promotion/marketingmessages/partnerpreview/" +
                  e.gid
                : void 0,
            { bReady: f, bReadyExceptLiveEvent: v } = (0, en._p)(null, e, !0),
            D = n.bShowWarnings
              ? ct.Hm.GetMarketingMesssageEditURL(e.gid)
              : void 0,
            R = ee();
          let b,
            C,
            N,
            y,
            w = g.di;
          a && e.start_date > R.getTime() / 1e3
            ? ((C = (0, o.we)(
                "#Dashboard_UpcomingEvents_Events_MarketingMessage_Event_StatusVisibleOn",
                (0, o.$z)(e.start_date),
              )),
              (y = (0, o.we)(
                "#Dashboard_UpcomingEvents_Events_MarketingMessage_ViewButton",
              )),
              (w = g.QK))
            : a
              ? ((C = (0, o.we)(
                  "#Dashboard_UpcomingEvents_Events_MarketingMessage_StatusPublic",
                )),
                (y = (0, o.we)(
                  "#Dashboard_UpcomingEvents_Events_MarketingMessage_ViewButton",
                )),
                (w = g.QK))
              : i
                ? ((b = (0, o.we)(
                    "#Dashboard_UpcomingEvents_Events_MarketingMessage_StatusReadyToPublish",
                  )),
                  (C = (0, o.we)(
                    "#Dashboard_UpcomingEvents_Events_MarketingMessage_StatusApproved",
                  )),
                  (y = (0, o.we)(
                    "#Dashboard_UpcomingEvents_Events_MarketingMessage_PreviewPublishButton",
                  )))
                : f || v
                  ? ((b = (0, o.we)(
                      "#Dashboard_UpcomingEvents_Events_MarketingMessage_StatusValveReview_Overall",
                    )),
                    (C = (0, o.we)(
                      "#Dashboard_UpcomingEvents_Events_MarketingMessage_StatusValveReview",
                    )),
                    (N = (0, o.we)(
                      "#Dashboard_UpcomingEvents_Events_MarketingMessage_StatusValveReview_ttip",
                    )),
                    (w = g.vf))
                  : ((C = (0, o.we)(
                      "#Dashboard_UpcomingEvents_Events_MarketingMessage_StatusNotReady",
                    )),
                    (N = (0, o.we)(
                      "#Dashboard_UpcomingEvents_Events_MarketingMessage_StatusNotReady_ttip",
                    )));
          const A = w === g.vf ? g.QK : w,
            B = an(e);
          return (0, t.jsxs)(g.b1, {
            hasImage: !!m,
            buttonPosition: "top",
            children: [
              (0, t.jsx)(g.zS, { imageUrl: m, url: c }),
              (0, t.jsx)(g.Q1, {
                hasImage: !!m,
                children: (0, t.jsxs)(g.Hg, {
                  children: [
                    (0, t.jsx)(g.Pz, { text: e.title, url: c }),
                    (0, t.jsx)("div", {
                      children: (0, t.jsx)(g.ek, {
                        startTimestamp: e.start_date,
                        endTimestamp: e.end_date,
                      }),
                    }),
                  ],
                }),
              }),
              (0, t.jsxs)(g.FV, {
                children: [
                  (0, t.jsx)(g.hq, { complete: A, overrideText: b }),
                  (0, t.jsx)(g.Pj, {
                    complete: w,
                    label: (0, o.we)(
                      "#Dashboard_UpcomingEvents_Events_MarketingMessage_Status",
                    ),
                    status: C,
                    tooltip: N,
                    actionStatus: y,
                    actionUrl: u,
                  }),
                  B,
                ],
              }),
              D &&
                (0, t.jsx)(g.m2, {
                  children: (0, t.jsx)(g.z9, {
                    url: D,
                    children: "Edit MM (VO)...",
                  }),
                }),
            ],
          });
        }
        function an(s) {
          const e =
              s.template_vars_json?.length > 0
                ? JSON.parse(s.template_vars_json)
                : void 0,
            n = e?.custom_display == "partner_event" && e?.update_event_gid,
            { eventModel: a } = (0, Ce.B9)(
              e.update_event_clan_accountid,
              e.update_event_gid,
              !0,
            ),
            i = (0, tn.fj)(e.update_event_clan_accountid, e.update_event_gid),
            l = a?.visibility_state == qs.zv.k_EEventStateVisible,
            r = (0, Fe.Bw)(a, Fe.PH.k_eCommunityEdit, "allowRelative");
          if (!n) return;
          let d =
            a && a.BIsVisibleEvent()
              ? (0, o.we)(
                  "#Dashboard_UpcomingEvents_Events_MarketingMessage_Event_StatusPublic",
                )
              : (0, o.we)(
                  "#Dashboard_UpcomingEvents_Events_MarketingMessage_Event_StatusNotLive",
                );
          const m =
              i?.oPrivateData?.jsonData
                ?.strMarketingMessageMajorUpdateHelpTicketReferenceCode,
            c = !!m;
          let u = c
            ? (0, o.we)(
                "#Dashboard_UpcomingEvents_Events_MarketingMessage_Ticket_Created",
              )
            : (0, o.we)(
                "#Dashboard_UpcomingEvents_Events_MarketingMessage_Ticket_ReviewNotSubmitted",
              );
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(g.Pj, {
                complete: l,
                label: (0, o.we)(
                  "#Dashboard_UpcomingEvents_Events_MarketingMessage_Event_Status",
                ),
                status: d,
                actionStatus: (0, o.we)(
                  "#Dashboard_UpcomingEvents_Events_MarketingMessage_Event_ViewButton",
                ),
                actionUrl: r,
              }),
              (0, t.jsx)(g.Pj, {
                complete: c,
                label: (0, o.we)(
                  "#Dashboard_UpcomingEvents_Events_MarketingMessage_Ticket_Status",
                ),
                tooltip: (0, o.we)(
                  "#Dashboard_UpcomingEvents_Events_MarketingMessage_Ticket_ttip",
                ),
                status: u,
                actionStatus: (0, o.we)(
                  "#Dashboard_UpcomingEvents_Events_MarketingMessage_Ticket_ViewButton",
                ),
                actionUrl: c
                  ? `${h.TS.HELP_BASE_URL}en/wizard/HelpRequest/${m}`
                  : void 0,
              }),
            ],
          });
        }
        function on(s) {
          const { marketingMessage: e } = s,
            n = At(e.association_type),
            [a] = (0, K.G6)(e.associated_id, n, {
              include_basic_info: !0,
              include_assets: !0,
            }),
            l = a?.GetAssets().GetHeaderURL() || null;
          return (0, t.jsx)(g.aV, { imageUrl: l });
        }
        var ve = _(99661);
        const it = new Date(Date.UTC(2024, 10, 15, 17, 0, 0));
        function rn(s) {
          return p.useMemo(() => {
            const e = (0, h.Tc)(
              "rgGermanRatingMissingApps",
              "application_config",
            );
            return e?.length > 0
              ? [
                  {
                    title: (0, o.we)(
                      "#Dashboard_UpcomingEvents_GermanRatingMissing_Title",
                    ),
                    startDate: it,
                    endDate: it,
                    eventType: "deadline-urgent",
                    id: "storelinkdeprecationnotice",
                    eventTypeName: (0, o.we)(
                      "#Dashboard_UpcomingEvents_EventType_GermanRatingMissing",
                    ),
                    getElement: () => (0, t.jsx)(ln, { apps: e, partnerId: s }),
                    passesFilter: (n) => n == me,
                  },
                ]
              : [];
          }, [s]);
        }
        function ln(s) {
          const { apps: e, partnerId: n } = s,
            a = `${h.TS.PARTNER_BASE_URL}doc/gettingstarted/contentsurvey/germany`,
            i = `${h.TS.PARTNER_BASE_URL}recommended_actions/missingratingforgermany/?partnerid=${n}`,
            r = new Intl.DateTimeFormat(navigator.language, {
              month: "long",
              day: "numeric",
            }).format(it),
            m = e
              .sort((u, f) => u.name.localeCompare(f.name))
              .slice(0, 30)
              .map((u) => (0, t.jsx)("div", { children: u.name }, u.appid)),
            c = (0, t.jsxs)("div", {
              className: ve.AppsCountTooltip,
              children: [
                m,
                e.length > 30 ? (0, t.jsx)("div", { children: "..." }) : void 0,
              ],
            });
          return (0, t.jsxs)(g.b1, {
            children: [
              (0, t.jsx)(g.Q1, {
                children: (0, t.jsxs)(g.Hg, {
                  children: [
                    (0, t.jsx)(g.Pz, {
                      text: (0, o.we)(
                        "#Dashboard_UpcomingEvents_GermanRatingMissing_Title",
                      ),
                      url: i,
                    }),
                    (0, t.jsx)("div", {
                      className: (0, j.A)(ve.HeaderText),
                      children: (0, o.we)(
                        e.length == 1
                          ? "#Dashboard_UpcomingEvents_GermanRatingMissing_Desc"
                          : "#Dashboard_UpcomingEvents_GermanRatingMissing_Desc_Plural",
                        r,
                      ),
                    }),
                    (0, t.jsx)(oe.m9, {
                      className: ve.AppsCountToolTipSource,
                      toolTipContent: c,
                      children: (0, t.jsx)("a", {
                        className: ve.AppsCountText,
                        href: i,
                        children: (0, t.jsxs)("div", {
                          className: ve.AppsCount,
                          children: [
                            (0, t.jsx)("div", {
                              className: ve.AppsCountLabel,
                              children: (0, o.we)(
                                "#Dashboard_UpcomingEvents_GermanRatingMissing_Count",
                              ),
                            }),
                            (0, t.jsx)("div", {
                              className: ve.AppsCountText,
                              children: e.length,
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              (0, t.jsxs)(g.m2, {
                children: [
                  (0, t.jsx)(g.z9, {
                    url: a,
                    children: (0, o.we)(
                      "#Dashboard_UpcomingEvents_General_ReadDocumentation",
                    ),
                  }),
                  (0, t.jsx)(g.z9, {
                    url: i,
                    children: (0, o.we)(
                      "#Dashboard_UpcomingEvents_General_AffectedApps",
                    ),
                  }),
                ],
              }),
            ],
          });
        }
        var cn = _(46406),
          dn = _(36118),
          mn = _(38884),
          pn = _(16369),
          un = _(76559);
        function _n() {
          const s = p.useMemo(() => hn(), []);
          return p.useMemo(() => {
            if (!s) return [];
            const { setRegistrations: e, mapEvents: n } = s,
              a = (0, se.sfN)(h.TS.LANGUAGE);
            return (
              Array.from(n.values()).map((l) => {
                const r = e.has(l.GID);
                return {
                  title: l.GetNameWithFallback(a),
                  startDate: new Date(l.startTime * 1e3),
                  endDate: new Date(l.endTime * 1e3),
                  eventType: "event",
                  id: l.GID,
                  eventTypeName: (0, o.we)(
                    "#Dashboard_UpcomingEvents_EventType_MeetSteam",
                  ),
                  getElement: () =>
                    (0, t.jsx)(gn, { eventModel: l, registered: r }),
                  getCapsuleElement: () => (0, t.jsx)(vn, { eventModel: l }),
                  passesFilter: (d) => d == me,
                };
              }) ?? []
            );
          }, [s]);
        }
        function gn(s) {
          const { eventModel: e, registered: n } = s,
            a = (0, se.sfN)(h.TS.LANGUAGE),
            i = n
              ? e.GetNameWithFallback(a)
              : (0, o.we)(
                  "#Dashboard_UpcomingEvents_Events_MeetSteam_Invited_Title",
                  e.GetNameWithFallback(a),
                ),
            l = (0, Fe.Bw)(e, Fe.PH.k_eView, "allowRelative"),
            r = e.GetImageURL("capsule", a, _e.wI.capsule_main);
          return (0, t.jsxs)(g.b1, {
            hasImage: !!r,
            buttonPosition: "top",
            children: [
              (0, t.jsx)(g.zS, { imageUrl: r, url: l }),
              (0, t.jsx)(g.Q1, {
                hasImage: !!r,
                children: (0, t.jsxs)(g.Hg, {
                  children: [
                    (0, t.jsx)(g.Pz, { text: i, url: l }),
                    (0, t.jsx)(g.ek, {
                      startTimestamp: e.startTime,
                      endTimestamp: e.endTime,
                      showTime: !0,
                    }),
                    (0, t.jsx)("div", {
                      children: e.GetSummaryWithFallback(a),
                    }),
                    n &&
                      (0, t.jsxs)("div", {
                        className: cn.YoureRegistered,
                        children: [
                          (0, t.jsx)(dn.Jlk, {}),
                          (0, o.we)(
                            "#Dashboard_UpcomingEvents_Events_MeetSteam_Invited_YoureRegistered",
                          ),
                        ],
                      }),
                  ],
                }),
              }),
              (0, t.jsx)(g.m2, {
                children: (0, t.jsx)(g.z9, {
                  url: l,
                  children: n
                    ? (0, o.we)(
                        "#Dashboard_UpcomingEvents_Events_MeetSteam_Invited_Button_EditRegistration",
                      )
                    : (0, o.we)(
                        "#Dashboard_UpcomingEvents_Events_MeetSteam_Invited_Button_Register",
                      ),
                }),
              }),
            ],
          });
        }
        function vn(s) {
          const { eventModel: e } = s,
            n = (0, se.sfN)(h.TS.LANGUAGE);
          return (
            !!e &&
            (0, t.jsx)(g.aV, {
              imageUrl: e.GetImageURL("capsule", n, _e.wI.capsule_main),
            })
          );
        }
        function hn() {
          const s = (0, h.Tc)("rgMeetSteam", "application_config");
          if (!s?.rgEvents) return null;
          const e = new Map();
          for (const n in s.rgEvents)
            try {
              const a = un.b.InitFromAccountID((0, pn.H)()),
                i = (0, mn.oE)(a, s.rgEvents[n]);
              e.set(n, i);
            } catch {}
          return {
            setInvitations: new Set(s.rgInvitations),
            setRegistrations: new Set(s.rgRegistrations),
            mapEvents: e,
          };
        }
        function wt(s, e, n, a) {
          const i = p.useMemo(
              () => (0, Te.Tc)("sEventIds", "application_config")?.split(","),
              [],
            ),
            l = s.now,
            r = s.bShowWarnings,
            d = Ds(),
            m = as(e),
            c = sn(),
            u = Wt(),
            f = fs(),
            v = Os(e),
            D = Ys(),
            R = rn(e),
            b = _n(),
            C = O(s.additionalEventStore),
            N = J(s.additionalEventStore),
            y = kt();
          return p.useMemo(() => {
            const B = m
                .concat(u, c, f, v, D, R, b, C, a ? d : [])
                .filter((T) => Dn(l, T, i, N, r)),
              P = B.length;
            return {
              rgShownEvents: B.filter((T) => (n == Se) == y.has(St(T))),
              nShouldBeShownCount: P,
            };
          }, [m, u, c, f, v, D, R, b, C, a, d, l, i, N, y, n, r]);
        }
        function Dn(s, e, n, a, i) {
          return !(
            (e.valveOnly && !i) ||
            (n?.length > 0 && !n.includes(e.id)) ||
            a.has(e.id) ||
            (e.dimmed && s >= e.startDate) ||
            new Date(e.startDate.getTime() + 21 * ne.Kp.PerDay * 1e3) < s
          );
        }
        function St(s) {
          return JSON.stringify({ usage: "dashboard", eventId: s.id });
        }
        const le = 0,
          me = 1,
          bt = 2,
          Se = 3,
          be = p.createContext({
            now: new Date(),
            bShowWarnings: !1,
            additionalEventStore: void 0,
            setManageDiscountsAppIDs: void 0,
          });
        function Ie() {
          return p.useContext(be);
        }
        function ee() {
          return p.useContext(be).now;
        }
        function ot() {
          return p.useContext(be).additionalEventStore;
        }
        function En(s) {
          const { showWarnings: e } = s,
            n = p.useMemo(
              () =>
                new Set(
                  (0, Te.Tc)(
                    "rgManageDiscountsAppIDs",
                    "application_config",
                  )?.map((r) => Number(r)) ?? [],
                ),
              [],
            ),
            a = p.useMemo(() => new U(), []),
            i = p.useMemo(() => new Date(), []),
            l = p.useMemo(
              () => ({
                now: i,
                bShowWarnings: e,
                additionalEventStore: a,
                setManageDiscountsAppIDs: n,
              }),
              [i, e, a, n],
            );
          return (0, t.jsx)(be.Provider, {
            value: l,
            children: (0, t.jsx)(fn, { ...s }),
          });
        }
        function fn(s) {
          const { partnerId: e, testData: n } = s,
            [a] = (0, ze.QD)("expanded", !1),
            [i, l] = p.useState(!!a),
            r = p.useCallback((Y) => {
              l(Y), !Y && L.current.scrollIntoView();
            }, []),
            [d, m] = p.useState(!1),
            c = p.useCallback(
              (Y) => {
                m(Y), Y && l(!0);
              },
              [l, m],
            ),
            [u, f] = p.useState(!1),
            v = p.useCallback(
              (Y) => {
                f(Y), Y && l(!0);
              },
              [l, f],
            ),
            [D, R] = p.useState(""),
            b = p.useCallback(
              (Y) => {
                Y && (l(!0), c(!0), v(!0)), R(Y);
              },
              [c, v],
            ),
            [C, N] = p.useState(le),
            y = () => {
              N(le), R("");
            },
            w = Ie(),
            { rgShownEvents: A, nShouldBeShownCount: B } = wt(w, e, C, n),
            P = xn(A, C, d, c, u, v),
            I = p.useMemo(
              () => P.filter((Y) => Pn(w.now, Y, D, C)),
              [w.now, P, D, C],
            ),
            T = Mn(A, I),
            F = C != le || (D && D.trim().length > 0),
            W = p.useMemo(() => new Map(), []),
            L = p.useRef(void 0),
            Q = Nn(i, l),
            G = p.useCallback(
              (Y) => {
                if ((0, S.xi)(Y).getTime() == (0, S.xi)(w.now).getTime()) {
                  L.current.scrollIntoView();
                  return;
                }
                const Bt = W?.get((0, S.xi)(Y).getTime() / 1e3);
                Bt && Q(Bt.element);
              },
              [w.now, W, Q],
            ),
            [$, pe] = p.useState();
          p.useEffect(() => pe(void 0), [A]);
          const ie = p.useMemo(
              () =>
                (0, t.jsxs)("div", {
                  className: E.FilterHeader,
                  children: [
                    (0, t.jsx)(yn, { filterType: C, setFilterType: N }),
                    (0, t.jsx)(Tn, { filterText: D, setFilterText: b }),
                  ],
                }),
              [D, C, b],
            ),
            rt = B > 0 || C != le,
            Ee = C == le && I != null && I?.length == 0;
          return (0, t.jsx)(t.Fragment, {
            children:
              rt &&
              (0, t.jsx)(ue.$, {
                title: (0, o.we)("#Dashboard_UpcomingEvents_Title"),
                ref: L,
                beta: !0,
                headerElement: ie,
                children: (0, t.jsx)("div", {
                  className: E.SectionContainer,
                  children: (0, t.jsxs)("div", {
                    className: E.ListArea,
                    children: [
                      Ee &&
                        (0, t.jsx)("div", {
                          className: E.AllEventsFiltered,
                          children: (0, o.PP)(
                            "#Dashboard_UpcomingEvents_Filter_DismissedAllDismissed",
                            (0, t.jsx)("a", {
                              onClick: () => {
                                N(Se), R("");
                              },
                              children: (0, o.we)(
                                "#Dashboard_UpcomingEvents_Filter_DismissedAllDismissed_LinkText",
                              ),
                            }),
                          ),
                        }),
                      !Ee &&
                        (0, t.jsx)(Cn, {
                          events: I,
                          filterVisibleEventIds: T,
                          dayRefsToScrollTo: W,
                          fnScrollToDay: G,
                          isExpanded: i,
                          fnSetExpanded: r,
                          filterEnabled: F,
                          filterType: C,
                          clearAllFilters: y,
                          hoverEvent: $,
                          setHoverEvent: pe,
                        }),
                    ],
                  }),
                }),
              }),
          });
        }
        function Ge(s, e) {
          return e.startDate != e.endDate && s >= e.startDate && s <= e.endDate;
        }
        function Be(s, e) {
          return s > e.endDate;
        }
        function xn(s, e, n, a, i, l) {
          const r = ee();
          return (
            p.useMemo(
              () =>
                s.forEach((d) =>
                  (0, Re.wT)(
                    !Ge(r, d) || !Be(r, d),
                    "An event can't be both live and a recap",
                  ),
                ),
              [r, s],
            ),
            p.useMemo(() => {
              let d = s;
              if (e == le) {
                const m = (c, u, f) => {
                  const v = c.filter((D) => u(D));
                  return v.length > 1 ? c.filter((D) => !u(D)).concat(f(v)) : c;
                };
                n ||
                  (d = m(
                    d,
                    (c) => Ge(r, c),
                    (c) => ({
                      title: (0, o.we)(
                        "#Dashboard_UpcomingEvents_Events_Placeholder_Live",
                      ),
                      startDate: c[0].startDate,
                      endDate: c[0].endDate,
                      eventType: "event",
                      id: "live_placeholder",
                      eventTypeName: "",
                      getElement: () =>
                        (0, t.jsx)(Nt, {
                          text: (0, o.we)(
                            "#Dashboard_UpcomingEvents_Events_Placeholder_Live",
                          ),
                          events: c,
                          expanded: n,
                          setExpanded: a,
                        }),
                    }),
                  )),
                  i ||
                    (d = m(
                      d,
                      (c) => Be(r, c),
                      (c) => ({
                        title: (0, o.we)(
                          "#Dashboard_UpcomingEvents_Events_Placeholder_Recap",
                        ),
                        startDate: c[0].startDate,
                        endDate: c[0].endDate,
                        eventType: "event",
                        id: "recap_placeholder",
                        eventTypeName: "",
                        getElement: () =>
                          (0, t.jsx)(Nt, {
                            text: (0, o.we)(
                              "#Dashboard_UpcomingEvents_Events_Placeholder_Recap",
                            ),
                            events: c,
                            expanded: i,
                            setExpanded: l,
                          }),
                      }),
                    ));
              }
              return d;
            }, [r, s, e, n, a, i, l])
          );
        }
        function Tn(s) {
          const { filterText: e, setFilterText: n } = s;
          return (0, t.jsxs)("div", {
            className: E.FilterTextArea,
            children: [
              (0, t.jsx)("input", {
                className: E.FilterTextInput,
                type: "text",
                value: e,
                onChange: (a) => n(a.target.value),
                placeholder: (0, o.we)(
                  "#Dashboard_UpcomingEvents_Events_FilterEmpty",
                ),
              }),
              (0, t.jsx)("button", {
                className: E.FilterTextClearButton,
                onClick: () => n(""),
                children: "\u2716",
              }),
              (0, t.jsx)("span", {
                className: E.FilterTextIcon,
                children: "\u{1F50D}",
              }),
            ],
          });
        }
        function yn(s) {
          const { filterType: e, setFilterType: n } = s,
            a = p.useMemo(
              () => [
                {
                  type: le,
                  text: (0, o.we)("#Dashboard_UpcomingEvents_Filter_All"),
                },
                {
                  type: me,
                  text: (0, o.we)("#Dashboard_UpcomingEvents_Filter_Events"),
                },
                {
                  type: bt,
                  text: (0, o.we)("#Dashboard_UpcomingEvents_Filter_Releases"),
                },
                {
                  type: Se,
                  text: (0, o.we)("#Dashboard_UpcomingEvents_Filter_Dismissed"),
                },
              ],
              [],
            );
          return (0, t.jsx)("div", {
            className: E.FilterOptionsContainer,
            children: a.map((i) =>
              (0, t.jsx)(
                "div",
                {
                  className: (0, j.A)(
                    E.FilterOption,
                    e == i.type && E.Highlighted,
                  ),
                  onClick: () => n(i.type),
                  children: i.text,
                },
                i.type,
              ),
            ),
          });
        }
        function Rn(s) {
          const { partnerId: e, showWarnings: n, testData: a } = s,
            i = p.useMemo(() => new Date(), []),
            l = p.useMemo(() => new U(), []),
            r = p.useMemo(
              () =>
                new Set(
                  (0, Te.Tc)(
                    "rgManageDiscountsAppIDs",
                    "application_config",
                  )?.map((u) => Number(u)) ?? [],
                ),
              [],
            ),
            d = p.useMemo(
              () => ({
                now: i,
                bShowWarnings: n,
                bExpanded: !0,
                additionalEventStore: l,
                setManageDiscountsAppIDs: r,
              }),
              [i, n, l, r],
            ),
            { rgShownEvents: m } = wt(d, e, le, a),
            c = p.useMemo(
              () =>
                m.map((u) =>
                  (0, t.jsx)(
                    jt,
                    {
                      event: u,
                      setHoverEvent: () => {},
                      showHeader: !1,
                      showDateInHeader: !1,
                    },
                    u.id,
                  ),
                ),
              [m],
            );
          return (0, t.jsx)(be.Provider, {
            value: d,
            children: (0, t.jsx)("div", {
              className: E.ListDayGroup,
              children: c,
            }),
          });
        }
        function Cn(s) {
          const {
              events: e,
              filterVisibleEventIds: n,
              dayRefsToScrollTo: a,
              fnScrollToDay: i,
              filterEnabled: l,
              filterType: r,
              clearAllFilters: d,
              isExpanded: m,
              fnSetExpanded: c,
              hoverEvent: u,
              setHoverEvent: f,
            } = s,
            v = ee(),
            D = p.useMemo(() => e.filter((T) => Be(v, T)), [e, v]),
            R = p.useMemo(() => e.filter((T) => Ge(v, T)), [e, v]),
            b = p.useMemo(
              () =>
                Array.from(
                  jn(
                    (0, S.bv)(
                      e.filter((T) => !Be(v, T) && !Ge(v, T)),
                      (T) => (0, S.J2)(T.startDate),
                    ),
                  ),
                ).sort(Ut),
              [e, v],
            ),
            [C, N] = p.useState(!1),
            y = p.useRef(void 0);
          p.useLayoutEffect(() => {
            const T = () => {
              if (y.current) {
                const F = y.current.scrollHeight > y.current.offsetHeight;
                N(F);
              }
            };
            return (
              T(),
              window.addEventListener("resize", T),
              () => window.removeEventListener("resize", T)
            );
          });
          const w = p.useCallback(
              (T, F, W, L, Q) =>
                F.length > 0
                  ? (0, t.jsx)(
                      An,
                      {
                        date: new Date(T * 1e3),
                        events: F,
                        filterVisibleEventIds: n,
                        dayRefsToScrollTo: a,
                        fnScrollToDay: i,
                        firstMonth: W == 0,
                        lastMonth: W == b.length - 1,
                        hoverEvent: u,
                        setHoverEvent: f,
                        eventTimeGroup: L,
                        showHeader: Q,
                      },
                      `${L != "normal" ? L + "_" : ""}${T}`,
                    )
                  : void 0,
              [a, b.length, n, i, u, f],
            ),
            A = p.useCallback(
              (T, F, W) =>
                T.map(([L, Q], G) => w(L, Q, G, F, W)).filter((L) => !!L),
              [w],
            ),
            B = p.useMemo(
              () =>
                w(
                  0,
                  D,
                  0,
                  "recap",
                  D.length != 1 || D[0].eventTypeName.length > 0,
                ),
              [w, D],
            ),
            P = p.useMemo(
              () =>
                w(
                  0,
                  R,
                  0,
                  "live",
                  R.length != 1 || R[0].eventTypeName.length > 0,
                ),
              [w, R],
            ),
            I = p.useMemo(() => A(b, "normal", !0), [b, A]);
          return (0, t.jsxs)("div", {
            className: E.ListContainer,
            children: [
              (0, t.jsxs)("div", {
                className: (0, j.A)(E.List, m && E.Expanded, C && E.Overflows),
                ref: y,
                children: [
                  B,
                  P,
                  I,
                  l &&
                    e.length == 0 &&
                    (0, t.jsx)("div", {
                      className: E.AllEventsFiltered,
                      children: (0, o.PP)(
                        r != Se
                          ? "#Dashboard_UpcomingEvents_Filter_NoEvents"
                          : "#Dashboard_UpcomingEvents_Filter_DismissedNoEvents",
                        (0, t.jsx)("a", {
                          onClick: () => d(),
                          children: (0, o.we)(
                            "#Dashboard_UpcomingEvents_Filter_NoEvents_LinkText",
                          ),
                        }),
                      ),
                    }),
                ],
              }),
              C &&
                !m &&
                e.length > 0 &&
                (0, t.jsx)("button", {
                  className: E.ExpandButton,
                  onClick: () => c(!0),
                  children: (0, o.we)("#Dashboard_UpcomingEvents_ShowMore"),
                }),
              m &&
                e.length > 0 &&
                (0, t.jsx)("button", {
                  className: E.ExpandButton,
                  onClick: () => c(!1),
                  children: (0, o.we)("#Dashboard_UpcomingEvents_ShowLess"),
                }),
            ],
          });
        }
        function An(s) {
          const {
              date: e,
              events: n,
              eventTimeGroup: a,
              filterVisibleEventIds: i,
              dayRefsToScrollTo: l,
              fnScrollToDay: r,
              firstMonth: d,
              lastMonth: m,
              hoverEvent: c,
              setHoverEvent: u,
              showHeader: f,
            } = s,
            v = ee(),
            D = p.useMemo(
              () =>
                v.getFullYear() == e.getFullYear()
                  ? new Intl.DateTimeFormat(navigator.language, {
                      month: "long",
                    }).format(e)
                  : new Intl.DateTimeFormat(navigator.language, {
                      year: "numeric",
                      month: "long",
                    }).format(e),
              [v, e],
            ),
            R = p.useMemo(
              () =>
                Array.from((0, S.bv)(n, (I) => (0, S.xi)(I.startDate))).sort(
                  Ut,
                ),
              [n],
            ),
            b = p.useRef(void 0),
            C = p.useMemo(
              () =>
                R.reduce(
                  (I, [T]) =>
                    I.set(T, (F) =>
                      l.set(T, { element: F, header: b.current }),
                    ),
                  new Map(),
                ),
              [R, l],
            ),
            N = p.useMemo(
              () =>
                R.map(([I, T]) =>
                  (0, t.jsx)(
                    wn,
                    {
                      events: T,
                      showHeader: f,
                      showDateInHeader: !0,
                      refScrollTo: C.get(I),
                      setHoverEvent: u,
                    },
                    I,
                  ),
                ),
              [R, C, u, f],
            ),
            y = p.useMemo(() => n.map((I) => [I, It(I)]), [n]),
            w = p.useMemo(
              () => y.reduce((I, T) => I.set(T[1], T[0]), new Map()),
              [y],
            ),
            A = p.useMemo(() => y.map((I) => I[1]), [y]),
            B = p.useCallback((I, T) => Pt(w.get(I), w.get(T)), [w]),
            P = p.useCallback((I, T) => In(w.get(I), w.get(T)), [w]);
          return (0, t.jsxs)("div", {
            className: E.ListMonthContainer,
            children: [
              n.length > 0 &&
                (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsxs)("div", {
                      className: E.ListMonthCalendarMovingContainer,
                      children: [
                        a == "normal" &&
                          (0, t.jsxs)("div", {
                            className: E.ListMonthCalendar,
                            children: [
                              (0, t.jsx)(xe, { viewDate: e }),
                              (0, t.jsx)(Ve, {}),
                              (0, t.jsx)(ke, {
                                now: v,
                                viewDate: e,
                                events: A,
                                filterVisibleEventIds: i,
                                fnScrollToDay: r,
                                hoverEvent: It(c),
                                bShowPreceedingWeeks: d,
                                bShowFollowingWeeks: m,
                                compareEvents: B,
                                colorPriority: P,
                              }),
                            ],
                          }),
                        a == "live" &&
                          (0, t.jsx)("div", {
                            className: E.ListMonthCalendarAlt,
                            children: (0, t.jsx)("div", {
                              className: (0, j.A)(
                                E.ListMonthCalendarAltFlag,
                                E.Live,
                              ),
                              children: (0, t.jsx)("div", {
                                className: E.ListMonthCalendarAltLiveText,
                                children: (0, o.we)(
                                  "#Dashboard_UpcomingEvents_EventIsLive",
                                ),
                              }),
                            }),
                          }),
                        a == "recap" &&
                          (0, t.jsx)("div", {
                            className: E.ListMonthCalendarAlt,
                            children: (0, t.jsx)("div", {
                              className: (0, j.A)(
                                E.ListMonthCalendarAltFlag,
                                E.Past,
                              ),
                              children: (0, t.jsx)("div", {
                                className: E.ListMonthCalendarAltPastText,
                                children: (0, o.we)(
                                  "#Dashboard_UpcomingEvents_EventIsRecap",
                                ),
                              }),
                            }),
                          }),
                      ],
                    }),
                    (0, t.jsx)("div", { className: E.ListMonth, children: N }),
                  ],
                }),
              n.length == 0 &&
                (0, t.jsx)("div", {
                  className: E.EmptyMonth,
                  children: (0, o.we)(
                    "#Dashboard_UpcomingEvents_NoEventsInMonth",
                    D,
                  ),
                }),
            ],
          });
        }
        function It(s) {
          if (!s) return;
          let e,
            n = !1;
          switch (s.eventType) {
            case "deadline":
              (e = "#cf980c"), (n = !0);
              break;
            case "deadline-urgent":
              (e = "#cf520c"), (n = !0);
              break;
            case "release-game":
              e = "#426283";
              break;
            case "release-dlc":
              e = "#a655b2";
              break;
            case "event":
              e = "#657f2d";
              break;
          }
          return { ...s, note: n, color: e };
        }
        function wn(s) {
          const {
              events: e,
              showHeader: n,
              showDateInHeader: a,
              refScrollTo: i,
              setHoverEvent: l,
            } = s,
            r = p.useMemo(() => {
              const m = e.reduce((c, u) => {
                const f = `${u.eventType}_${u.eventTypeName}`,
                  v = c.get(f) || [];
                return c.set(f, [...v, u]), c;
              }, new Map());
              for (const c of m.values()) c.sort(Pt);
              return Array.from(m).sort(([c, u], [f, v]) =>
                (u[0].eventTypeSortWeight ?? 0) !=
                (v[0].eventTypeSortWeight ?? 0)
                  ? (u[0].eventTypeSortWeight ?? 0) -
                    (v[0].eventTypeSortWeight ?? 0)
                  : c.localeCompare(f),
              );
            }, [e]),
            d = p.useMemo(
              () =>
                r.map(([m, c]) =>
                  (0, t.jsx)(
                    Sn,
                    {
                      events: c,
                      showHeader: n,
                      showDateInHeader: a,
                      refScrollTo: i,
                      setHoverEvent: l,
                    },
                    m,
                  ),
                ),
              [r, i, l, n, a],
            );
          return (0, t.jsx)("div", {
            ref: i,
            className: E.ListDay,
            children: d,
          });
        }
        function Sn(s) {
          const {
              events: e,
              showHeader: n,
              showDateInHeader: a,
              refScrollTo: i,
              setHoverEvent: l,
            } = s,
            r = p.useMemo(
              () =>
                e.map((d, m) =>
                  (0, t.jsx)(
                    jt,
                    {
                      event: d,
                      setHoverEvent: l,
                      showHeader: n && m == 0,
                      showDateInHeader: a,
                    },
                    d.id,
                  ),
                ),
              [e, l, n, a],
            );
          return (0, t.jsx)("div", {
            ref: i,
            className: E.ListDayGroup,
            children: r,
          });
        }
        function jt(s) {
          const {
              event: e,
              showHeader: n,
              showDateInHeader: a,
              setHoverEvent: i,
            } = s,
            l = Ie();
          Un(e);
          const r = e.eventType == "deadline",
            d = e.eventType == "deadline-urgent",
            m = e.eventType == "release-game",
            c = e.eventType == "release-dlc",
            u = e.eventType == "event",
            f = (0, j.A)(
              E.ListDayNumber,
              r && E.Deadline,
              d && E.DeadlineUrgent,
              m && E.GameRelease,
              c && E.DLCRelease,
              u && E.Event,
            ),
            v = (0, j.A)(
              E.ListEventType,
              r && E.Deadline,
              d && E.DeadlineUrgent,
              m && E.GameRelease,
              c && E.DLCRelease,
              u && E.Event,
            ),
            D = e.getElement(),
            R = St(e),
            b = te.Get().GetDismissState(R),
            C = p.useCallback(
              (y) =>
                y
                  ? te.Get().SetDismiss(R, e.endDate)
                  : te.Get().ClearDismiss(R),
              [e.endDate, R],
            ),
            N = bn(e.id);
          return (
            D &&
            (0, t.jsxs)("div", {
              className: (0, j.A)(
                E.ListEvent,
                d && E.DeadlineUrgent,
                e.dimmed && E.Dimmed,
              ),
              onPointerEnter: () => i(e),
              onPointerLeave: () => i(void 0),
              children: [
                n &&
                  (0, t.jsxs)("div", {
                    className: E.ListEventHeader,
                    children: [
                      a &&
                        (0, t.jsx)(oe.he, {
                          className: f,
                          toolTipContent: new Intl.DateTimeFormat(
                            navigator.language,
                            {
                              month: "numeric",
                              day: "numeric",
                              year: "2-digit",
                            },
                          ).format(e.startDate),
                          children: a ? e.startDate.getDate() : "",
                        }),
                      (0, t.jsxs)("div", {
                        className: v,
                        children: [
                          (0, t.jsx)("span", {
                            className: (0, j.A)(!a && E.NoDate),
                            children: e.eventTypeName,
                          }),
                          e.valveOnly &&
                            (0, t.jsx)("span", {
                              className: E.ValveOnly,
                              children: "(VO)",
                            }),
                          (0, t.jsx)("span", { className: E.Spacer }),
                          N &&
                            (0, t.jsxs)("span", {
                              className: E.Edit,
                              children: [
                                (0, t.jsx)("a", {
                                  href: N,
                                  target: "_blank",
                                  children: "isolate",
                                }),
                                "\xA0(dev)",
                              ],
                            }),
                          l.bShowWarnings &&
                            e.editURL &&
                            (0, t.jsxs)("span", {
                              className: E.Edit,
                              children: [
                                (0, t.jsx)("a", {
                                  href: e.editURL,
                                  target: "_blank",
                                  children: "edit",
                                }),
                                "\xA0(VO)",
                              ],
                            }),
                          !b &&
                            (0, t.jsxs)("span", {
                              className: E.Dismiss,
                              onClick: () => C(!0),
                              children: [
                                (0, o.we)("#Dashboard_UpcomingEvents_Dismiss"),
                                (0, t.jsx)(re.o, {
                                  tooltip: (0, o.we)(
                                    "#Dashboard_UpcomingEvents_Dismiss_ttip",
                                  ),
                                }),
                              ],
                            }),
                          b &&
                            (0, t.jsx)("span", {
                              className: E.Dismiss,
                              onClick: () => C(!1),
                              children: (0, o.we)(
                                "#Dashboard_UpcomingEvents_Undismiss",
                              ),
                            }),
                        ],
                      }),
                    ],
                  }),
                (0, t.jsxs)("div", {
                  className: (0, j.A)(
                    E.ListEventEventSection,
                    je.ListEventEventSection,
                  ),
                  children: [
                    (0, t.jsx)("div", {
                      className: (0, j.A)(
                        E.ListEventEventGutter,
                        e.loading && E.Loading,
                      ),
                      children: (0, t.jsx)(Ke.t, { size: "small" }),
                    }),
                    (0, t.jsx)("div", {
                      className: E.ListEventEventElement,
                      children: (0, t.jsx)(de.tH, { children: D }),
                    }),
                  ],
                }),
              ],
            })
          );
        }
        function bn(s) {
          return null;
        }
        function Nt(s) {
          const { text: e, events: n, expanded: a, setExpanded: i } = s,
            r = n
              .slice(0, 4)
              .map((d) => ({ event: d, element: d.getCapsuleElement?.() }));
          return (0, t.jsxs)("div", {
            className: E.GroupPlaceholder,
            children: [
              !a &&
                (0, t.jsx)("div", {
                  className: E.ExpandContainer,
                  children: (0, t.jsx)("button", {
                    className: E.ExpandButton,
                    onClick: () => i(!0),
                    children: e,
                  }),
                }),
              (0, t.jsx)("div", {
                className: E.GroupPlaceholderCapsules,
                children: r.map((d) =>
                  (0, t.jsx)(
                    de.tH,
                    {
                      children: (0, t.jsx)("div", {
                        className: E.GroupPlaceholderCapsule,
                        children:
                          d.element ||
                          (0, t.jsx)("div", {
                            className: E.GroupPlaceholderCapsuleMissing,
                            children: d.event.title,
                          }),
                      }),
                    },
                    d.event.id,
                  ),
                ),
              }),
            ],
          });
        }
        function Ut(s, e) {
          return s[0] - e[0];
        }
        function Pt(s, e) {
          return s.startDate.getTime() < e.startDate.getTime()
            ? -1
            : s.startDate.getTime() > e.startDate.getTime()
              ? 1
              : s.eventType < e.eventType
                ? -1
                : s.eventType > e.eventType
                  ? 1
                  : s?.id < e?.id
                    ? -1
                    : s?.id > e?.id
                      ? 1
                      : 0;
        }
        function In(s, e) {
          const n = (a) => {
            switch (a) {
              case "deadline":
                return 4;
              case "deadline-urgent":
                return 3;
              case "release-game":
                return 0;
              case "release-dlc":
                return 1;
              case "event":
                return 2;
            }
          };
          return n(s.eventType) < n(e.eventType)
            ? -1
            : n(s.eventType) > n(e.eventType)
              ? 1
              : s.id < e.id
                ? -1
                : s.id > e.id
                  ? 1
                  : 0;
        }
        function jn(s) {
          const e = Math.min(...s.keys()),
            n = Math.max(...s.keys());
          let a = new Date(e);
          for (a.setMonth(a.getMonth() + 1); a.getTime() < n; )
            s.has(a.getTime()) || s.set(a.getTime(), []),
              (a = new Date(a)),
              a.setMonth(a.getMonth() + 1);
          return s;
        }
        function Nn(s, e) {
          const n = p.useRef(void 0),
            a = p.useCallback(
              (i) => {
                s ? i.scrollIntoView() : (e(!0), (n.current = i));
              },
              [s, e],
            );
          return (
            p.useEffect(() => {
              s &&
                n.current &&
                (n.current.scrollIntoView(), (n.current = void 0));
            }, [s]),
            a
          );
        }
        function Un(s) {
          const e = (0, q.CH)();
          p.useEffect(() => {
            const n = s.registerForChange?.(() => e());
            return () => n?.Unregister();
          }, [s, e]);
        }
        function Pn(s, e, n, a) {
          return !(
            (n &&
              n.trim().length > 0 &&
              ((n = n.trim()),
              !e.title.toLocaleLowerCase().includes(n.toLocaleLowerCase()) &&
                !e.eventTypeName
                  .toLocaleLowerCase()
                  .includes(n.toLocaleLowerCase()))) ||
            (a != le && a != Se && (!e.passesFilter || !e.passesFilter(a)))
          );
        }
        function Mn(s, e) {
          return p.useMemo(() => {
            const n = new Set(e.map((a) => a.id));
            return new Set(s.filter((a) => n.has(a.id)).map((a) => a.id));
          }, [s, e]);
        }
        var Mt = _(61266),
          Ln = _(77959),
          Fn = _(93964),
          ce = _(60103);
        function Lt(s) {
          return (0, t.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 60 39",
            fill: "none",
            ...s,
            children: [
              (0, t.jsx)("path", {
                fill: "currentColor",
                d: "M20.2544 28.0733H21.8805C22.6505 28.0733 23.3893 27.7674 23.9338 27.2226C24.4782 26.6782 24.7841 25.9397 24.7841 25.1697V22.5369C24.7841 21.9376 24.5491 21.3626 24.1288 20.9351C23.7088 20.5079 23.1379 20.2628 22.5386 20.2527H20.2544V28.0733Z",
              }),
              (0, t.jsx)("path", {
                fill: "currentColor",
                d: "M53.0371 23.7372C53.0371 24.5497 52.3783 25.2085 51.5658 25.2085C50.7535 25.2085 50.0947 24.5497 50.0947 23.7372C50.0947 22.9246 50.7535 22.2661 51.5658 22.2661C52.3783 22.2661 53.0371 22.9246 53.0371 23.7372Z",
              }),
              (0, t.jsx)("path", {
                fill: "currentColor",
                d: "M13.7505 13.4774V16.0812C13.7635 16.6785 14.0095 17.2472 14.4364 17.665C14.8637 18.0831 15.4374 18.3169 16.0348 18.3169H18.319V10.4963H16.6835C15.8946 10.4881 15.1365 10.8012 14.5832 11.3636C14.0303 11.9257 13.7297 12.6889 13.7505 13.4774Z",
              }),
              (0, t.jsx)("path", {
                fill: "currentColor",
                d: "M32.421 17.4362C32.421 17.1362 32.4985 16.8265 32.5467 16.5263C32.5952 16.2263 32.6242 16.168 32.6724 15.9938C32.721 15.8196 32.7887 15.4613 32.8659 15.1904C32.9434 14.9194 32.9821 14.8227 33.0401 14.6387C33.0981 14.4547 33.2046 14.1355 33.3013 13.8935C33.398 13.6516 33.4563 13.5259 33.5335 13.3419C33.611 13.1579 33.7367 12.8771 33.853 12.6449C33.9693 12.4127 34.0464 12.2867 34.1435 12.1125C34.2402 11.9382 34.3952 11.6673 34.521 11.4543C34.6467 11.2413 34.7437 11.1058 34.8596 10.9413C34.9759 10.7769 35.1501 10.5251 35.2951 10.3317L35.6921 9.83797L35.9243 9.54747L35.9249 9.5481C33.7871 5.89204 30.5051 3.0416 26.5855 1.43715C22.666 -0.167213 18.327 -0.436528 14.2392 0.670589C10.1512 1.77802 6.54175 4.20066 3.96828 7.56433C1.39449 10.9277 0 15.0453 0 19.2807C0 23.5159 1.39449 27.6328 3.96828 30.9962C6.54175 34.3599 10.1512 36.7824 14.2392 37.89C18.327 38.9974 22.6656 38.7281 26.5855 37.1234C30.505 35.519 33.7871 32.6687 35.9249 29.0124L35.6927 28.722L35.3055 28.2282C35.1505 28.025 35.0055 27.8218 34.8603 27.6088L34.5216 27.0959C34.3861 26.8829 34.2604 26.6605 34.1344 26.4377C34.0086 26.2149 33.9409 26.0892 33.8536 25.9052C33.7667 25.7212 33.6309 25.4405 33.5341 25.1985C33.4374 24.9566 33.3697 24.8403 33.3019 24.6566C33.2342 24.4726 33.1277 24.1629 33.0407 23.9115C32.9538 23.6597 32.915 23.5532 32.8665 23.3598C32.818 23.1663 32.731 22.8273 32.6731 22.5564C32.6151 22.2854 32.5861 22.2079 32.5568 22.0239C32.5278 21.8399 32.4601 21.4237 32.4213 21.114C32.4213 20.959 32.4213 20.814 32.3633 20.659C32.3633 20.2041 32.2956 19.6911 32.2956 19.2749C32.2956 18.8587 32.2956 18.307 32.3633 17.8908C32.3728 17.7462 32.4018 17.5912 32.421 17.4362ZM22.5388 18.3171C23.6573 18.3196 24.7292 18.7651 25.52 19.5559C26.3108 20.3468 26.7563 21.4186 26.7588 22.5371V25.0924C26.7588 26.3759 26.2491 27.6069 25.3414 28.5143C24.434 29.4221 23.2029 29.9318 21.9194 29.9318H20.2545V32.2161C20.2545 32.7507 19.8213 33.1839 19.2866 33.1839C18.7523 33.1839 18.3187 32.7507 18.3187 32.2161V30.0093H16.0345C14.9154 30.0093 13.8419 29.5648 13.0505 28.7733C12.2593 27.9819 11.8145 26.9084 11.8145 25.7893C11.8145 25.2547 12.248 24.8214 12.7824 24.8214C13.317 24.8214 13.7503 25.2547 13.7503 25.7893C13.7503 26.3952 13.991 26.9762 14.4195 27.4043C14.8477 27.8328 15.429 28.0735 16.0345 28.0735H18.3187V20.2529H16.0345C14.9154 20.2529 13.8419 19.8083 13.0505 19.0169C12.2593 18.2254 11.8145 17.152 11.8145 16.0329V13.4776C11.8145 12.194 12.3246 10.963 13.2319 10.0556C14.1397 9.14792 15.3707 8.63816 16.6539 8.63816H18.2898V6.27642C18.2898 5.74206 18.723 5.30853 19.2576 5.30853C19.7923 5.30853 20.2255 5.74206 20.2255 6.27642V8.56065H22.5098C23.6283 8.56317 24.7001 9.00868 25.491 9.79948C26.2818 10.5903 26.7273 11.6622 26.7298 12.7807C26.7298 13.3153 26.2966 13.7486 25.7619 13.7486C25.2272 13.7486 24.794 13.3153 24.794 12.7807C24.794 12.1748 24.5533 11.5938 24.1248 11.1657C23.6966 10.7372 23.1156 10.4964 22.5098 10.4964H20.2545V18.3171H22.5388Z",
              }),
              (0, t.jsx)("path", {
                fill: "currentColor",
                d: "M44.1421 14.8326C44.1421 15.6451 43.4836 16.3036 42.6711 16.3036C41.8585 16.3036 41.1997 15.6451 41.1997 14.8326C41.1997 14.02 41.8585 13.3612 42.6711 13.3612C43.4836 13.3612 44.1421 14.02 44.1421 14.8326Z",
              }),
              (0, t.jsx)("path", {
                fill: "currentColor",
                d: "M47.1135 32.1772C51.1064 32.1754 54.873 30.3237 57.3127 27.1629C59.7526 24.0024 60.5903 19.8898 59.5812 16.0265C58.572 12.1634 55.8299 8.98595 52.1562 7.42192C48.4822 5.8582 44.2911 6.08509 40.8077 8.0363C37.324 9.98725 34.9411 13.4422 34.3547 17.3918C33.7684 21.3415 35.0453 25.3397 37.8119 28.2185C40.2456 30.7473 43.6039 32.1764 47.1134 32.177L47.1135 32.1772ZM51.5657 27.1538C50.6624 27.1538 49.7957 26.7949 49.1567 26.156C48.5177 25.517 48.1589 24.6506 48.1589 23.747C48.1589 22.8434 48.5178 21.9769 49.1567 21.338C49.7957 20.699 50.6624 20.3398 51.5657 20.3398C52.4693 20.3398 53.3361 20.699 53.975 21.338C54.614 21.9769 54.9729 22.8434 54.9729 23.747C54.9678 24.6481 54.6067 25.5107 53.9688 26.1469C53.3307 26.7833 52.4671 27.1419 51.5657 27.1444V27.1538ZM42.6708 11.4255C43.5744 11.4255 44.4408 11.7847 45.0798 12.4237C45.7187 13.0623 46.0776 13.9291 46.0776 14.8327C46.0776 15.7363 45.7187 16.6027 45.0798 17.2417C44.4408 17.8806 43.5744 18.2395 42.6708 18.2395C41.7672 18.2395 40.9004 17.8806 40.2618 17.2417C39.6228 16.6027 39.2636 15.7363 39.2636 14.8327C39.2661 13.9297 39.626 13.0648 40.2643 12.4262C40.9029 11.7878 41.7678 11.428 42.6708 11.4255ZM39.5443 25.489L53.3271 11.7159C53.7112 11.387 54.2836 11.409 54.6413 11.7666C54.9989 12.1242 55.0209 12.6967 54.692 13.0805L40.9189 26.8536C40.5351 27.1825 39.9627 27.1605 39.605 26.8028C39.2474 26.4452 39.2254 25.8728 39.5543 25.489H39.5443Z",
              }),
            ],
          });
        }
        function Qn(s) {
          return jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 38 52",
            fill: "none",
            ...s,
            children: jsx("path", {
              fill: "currentColor",
              d: "M2.7132 20.0669H27.7701V14.0606C27.768 12.459 27.3415 10.8874 26.5353 9.51096C25.7293 8.13446 24.5732 7.00399 23.1886 6.23815C21.8041 5.47214 20.2421 5.09907 18.6663 5.15808C13.9205 5.3359 10.2318 9.4486 10.2318 14.2732V14.9705C10.2318 15.8908 9.74855 16.7413 8.96409 17.2014C8.1795 17.6615 7.21306 17.6615 6.42847 17.2014C5.64405 16.7413 5.16072 15.8909 5.16072 14.9705V14.0603C5.16446 10.3739 6.59161 6.83591 9.13553 4.2071C11.6796 1.57828 15.1373 0.0682987 18.7655 0.00187115C26.5062 -0.127612 32.8412 6.48066 32.8412 14.3455V20.0667H35.2869C36.0064 20.0669 36.6965 20.3573 37.2052 20.8742C37.714 21.3911 38 22.092 38 22.823V49.2438C38.0007 49.9749 37.715 50.6764 37.2061 51.1934C36.6971 51.7105 36.0067 52.0007 35.287 52H2.71307C1.99356 51.9998 1.30346 51.7094 0.79464 51.1925C0.286034 50.6757 0 49.9747 0 49.2437V22.823C0.000850677 22.0923 0.286854 21.3917 0.795467 20.875C1.30407 20.3583 1.99369 20.0676 2.71303 20.0667L2.7132 20.0669ZM16.008 42.4476C15.9903 42.676 16.0674 42.9015 16.2207 43.0695C16.3742 43.2375 16.5897 43.3328 16.8152 43.3321H21.189C21.4142 43.3326 21.6292 43.2371 21.7819 43.069C21.9345 42.901 22.0107 42.6755 21.992 42.4476L21.4891 36.261C22.4138 35.5509 23.0014 34.4782 23.1083 33.3058C23.2153 32.1334 22.8315 30.9693 22.0509 30.0988C21.2704 29.2284 20.1653 28.7317 19.0064 28.7308C17.8472 28.7298 16.7415 29.2244 15.9594 30.0937C15.1775 30.9628 14.7918 32.1262 14.8966 33.2988C15.0016 34.4714 15.5876 35.5451 16.511 36.2567L16.008 42.4476Z",
            }),
          });
        }
        function Ft(s) {
          return (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 55 37",
            fill: "none",
            ...s,
            children: (0, t.jsx)("path", {
              fill: "currentColor",
              d: "M33.6009 7.90708H50.8782C52.0142 7.90708 53.0449 8.3717 53.791 9.12055C54.5374 9.86976 55 10.9044 55 12.0447V25.672C55 27.9496 53.1458 29.8097 50.8783 29.8097H48.12C47.3373 31.81 45.8447 33.5566 43.8136 34.8285C41.6511 36.1828 38.8737 37 35.704 37C34.988 37 34.4074 36.4171 34.4074 35.6983C34.4074 35.1888 34.699 34.7479 35.1234 34.534C36.2956 33.8138 36.9901 33.0738 37.3857 32.1952C37.6859 31.5282 37.8413 30.7449 37.9168 29.8096H25.5205C23.2519 29.8096 21.3991 27.9482 21.3991 25.6719V21.9028H17.0836C17.1592 22.8378 17.3146 23.6212 17.6148 24.2881C18.0105 25.167 18.7048 25.9068 19.8768 26.6272C20.3014 26.8411 20.5928 27.2819 20.5928 27.7913C20.5928 28.5101 20.0122 29.093 19.2961 29.093C16.1265 29.093 13.3488 28.2756 11.1865 26.9217C9.15546 25.6497 7.66267 23.9032 6.88002 21.9029H4.12174C1.854 21.9029 0 20.0436 0 17.7653V4.13753C0 1.86138 1.85313 0 4.12174 0H29.4796C31.7473 0 33.6011 1.85943 33.6011 4.13753L33.6009 7.90708ZM23.9921 21.9028V25.6719C23.9921 26.5196 24.676 27.2063 25.5202 27.2063C30.1078 27.2063 34.7063 27.2113 39.2871 27.2113C40.0005 27.2225 40.5695 27.8123 40.5584 28.5282C40.5267 30.4189 40.346 31.9294 39.7456 33.2629C39.6428 33.4912 39.529 33.7121 39.4031 33.9267C40.5378 33.6214 41.5597 33.1767 42.4457 32.6218C44.2148 31.5141 45.4374 29.9682 45.9188 28.231C46.0452 27.6452 46.5644 27.2064 47.1859 27.2064H50.8781C51.7206 27.2064 52.4066 26.5198 52.4066 25.6721V12.0448C52.4066 11.623 52.2346 11.2396 51.9574 10.9613C51.6804 10.6832 51.2983 10.5106 50.8781 10.5106H33.6009V17.7653C33.6009 18.9021 33.138 19.9352 32.3921 20.6842L32.387 20.6892C31.6407 21.4382 30.6117 21.9027 29.4793 21.9027H23.992L23.9921 21.9028ZM9.08081 20.3238C9.56237 22.061 10.7848 23.607 12.5541 24.7148C13.4403 25.2696 14.4621 25.7144 15.5971 26.0197C15.4712 25.8051 15.3572 25.584 15.2544 25.3557C14.654 24.0223 14.473 22.5121 14.4412 20.6215C14.4301 19.9054 14.9992 19.3156 15.7125 19.3046C18.0317 19.3046 20.3694 19.2996 22.6953 19.2996H29.479C29.9011 19.2996 30.284 19.128 30.5608 18.8512C30.8365 18.5733 31.0074 18.1891 31.0074 17.7654V4.13759C31.0074 3.29058 30.3211 2.60342 29.4792 2.60342H4.12137C3.27726 2.60342 2.59295 3.29187 2.59295 4.13759V17.7654C2.59295 18.6124 3.27947 19.2995 4.12137 19.2995H7.81361C8.43495 19.2995 8.95412 19.7383 9.08072 20.3239L9.08081 20.3238Z",
            }),
          });
        }
        function Gn(s) {
          return (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 42 35",
            fill: "none",
            ...s,
            children: (0, t.jsx)("path", {
              fill: "currentColor",
              d: "M2.86369 0C1.57321 0 0.471511 0.88952 0.119285 2.09452L20.185 19.8661C20.6574 20.2845 21.3421 20.2845 21.8145 19.8661L41.8802 2.09452C41.528 0.88952 40.4264 0 39.136 0H2.86369ZM0 4.5631V30.4371L14.6054 17.5003L0 4.5631ZM42 4.5631L27.3946 17.4999L42 30.4367V4.5631ZM16.0615 18.7892L0.119413 32.9055C0.471605 34.1103 1.57316 35 2.86382 35H39.1363C40.4268 35 41.5284 34.1105 41.8807 32.9055L25.9386 18.7892L23.0675 21.3318C21.8876 22.3767 20.1122 22.3767 18.9324 21.3318L16.0615 18.7892Z",
            }),
          });
        }
        function Bn(s) {
          const e = (0, h.Tc)("rgDailyDealInvitations", "application_config");
          if (!s && (!e || e.length == 0)) return [];
          const n = [],
            a = 14,
            i = e.some(
              (l) =>
                new Date().getTime() / 1e3 >= l.rtexpiretime - a * ne.Kp.PerDay,
            );
          return (
            n.push({
              id: "dailydeal",
              title: (0, o.we)("#Dashboard_ImportantActions_DailyDeals_Title"),
              image: (0, t.jsx)(Lt, {}),
              description: i
                ? (0, o.we)(
                    "#Dashboard_ImportantActions_DailyDeals_Desc_Expiring",
                  )
                : (0, o.we)("#Dashboard_ImportantActions_DailyDeals_Desc"),
              priority: i ? He : On,
              actionDescription: (0, o.we)("#DailyDeals_Dashboard"),
              action: `${h.TS.PARTNER_BASE_URL}promotion/dailydeals/dashboard`,
            }),
            n
          );
        }
        function Hn(s) {
          const e = (0, h.Tc)("publisherid", "application_config"),
            n = (0, h.Tc)("rgImportantActionData", "application_config");
          if (!s && !n) return [];
          const a = [];
          if (
            ((s || !n.bHasCommunicationRightUser) &&
              a.push({
                id: "communicationrights",
                title: (0, o.we)(
                  "#Dashboard_ImportantActions_CommRights_Title",
                ),
                image: (0, t.jsx)(Ft, {}),
                description: (0, o.we)(
                  "#Dashboard_ImportantActions_CommRights_Desc",
                ),
                details: (0, o.we)(
                  "#Dashboard_ImportantActions_CommRights_Details",
                ),
                actionDescription: (0, o.we)(
                  "#Dashboard_ImportantActions_CommRights_Action",
                ),
                action: `${h.TS.PARTNER_BASE_URL}doc/gettingstarted/managing_users/communication`,
              }),
            (s || n.bRemindAddMailingAddress) &&
              a.push({
                id: "mailingaddr",
                title: (0, o.we)(
                  "#Dashboard_ImportantActions_MailingAddr_Title",
                ),
                image: (0, t.jsx)(Gn, {}),
                description: (0, o.we)(
                  "#Dashboard_ImportantActions_MailingAddr_Desc",
                ),
                details: (0, o.we)(
                  "#Dashboard_ImportantActions_MailingAddr_Details",
                ),
                actionDescription: (0, o.we)(
                  "#Dashboard_ImportantActions_MailingAddr_Action",
                ),
                action: `${h.TS.PARTNER_BASE_URL}pub/mailingaddresses/${e}`,
              }),
            (s || n.bRemindAddPhoneNumber) &&
              a.push({
                id: "phonenumber",
                title: (0, o.we)(
                  "#Dashboard_ImportantActions_PhoneNumber_Title",
                ),
                image: (0, t.jsx)(Ft, {}),
                description: (0, o.we)(
                  "#Dashboard_ImportantActions_PhoneNumber_Desc",
                ),
                actionDescription: (0, o.we)(
                  "#Dashboard_ImportantActions_PhoneNumber_Action",
                ),
                action: `${h.TS.STORE_BASE_URL}phone/add`,
              }),
            s || n.bNeedToVerifyPaymentInfo)
          ) {
            const i =
                n.rtPaymentInfoExpires > 0
                  ? n.rtPaymentInfoExpires
                  : s
                    ? new Date().getTime() / 1e3 + ne.Kp.PerDay * 7
                    : 0,
              l = new Date(i * 1e3).toLocaleDateString(
                o.pf.GetPreferredLocales(),
                { month: "short", day: "numeric", year: "numeric" },
              );
            a.push({
              id: "bankingexpiration",
              title: (0, o.we)(
                "#Dashboard_ImportantActions_BankingExpiring_Title",
              ),
              image: (0, t.jsx)(Lt, {}),
              description: (0, o.we)(
                "#Dashboard_ImportantActions_BankingExpiring_Desc",
                l,
              ),
              details: (0, o.we)(
                "#Dashboard_ImportantActions_BankingExpiring_Details",
                l,
              ),
              priority: He,
              actionDescription: (0, o.we)(
                "#Dashboard_ImportantActions_BankingExpiring_Action",
              ),
              action: `${h.TS.PARTNER_BASE_URL}pub/view`,
            });
          }
          return a;
        }
        function kn(s) {
          const e = Bn(s),
            n = Hn(s);
          return p.useMemo(() => {
            const i = e.concat(n);
            return (
              i.sort((l, r) => {
                const d = Gt(l.priority),
                  m = Gt(r.priority);
                return d !== m ? m - d : 0;
              }),
              i
            );
          }, [e, n]);
        }
        function Gt(s) {
          return s === He ? 1 : 0;
        }
        const On = 0,
          He = 1;
        function Vn(s) {
          const [e] = (0, ze.QD)("testactions", !1),
            n = kn(e);
          return n.length == 0
            ? null
            : (0, t.jsx)(ue.$, {
                title: (0, o.we)("#Dashboard_ImportantActions_Title"),
                count: n.length,
                children: (0, t.jsx)("div", {
                  className: ce.ImportantActions,
                  children: n.map((a) => (0, t.jsx)(Wn, { ...a }, a.id)),
                }),
              });
        }
        function Wn(s) {
          const {
              title: e,
              image: n,
              description: a,
              details: i,
              priority: l,
              actionDescription: r,
              action: d,
            } = s,
            m = () => {
              typeof d == "function" && d(), window.open(d, "_blank");
            };
          return (0, t.jsxs)("div", {
            className: (0, j.A)(ce.ImportantAction, l == He && ce.Urgent),
            children: [
              (0, t.jsxs)("div", {
                className: ce.Header,
                children: [
                  (0, t.jsx)("div", { className: ce.Image, children: n }),
                  (0, t.jsxs)("div", {
                    className: ce.Body,
                    children: [
                      (0, t.jsx)("div", { className: ce.Title, children: e }),
                      (0, t.jsxs)("div", {
                        className: ce.Description,
                        children: [a, i && (0, t.jsx)(re.o, { tooltip: i })],
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsx)("button", {
                className: (0, j.A)(ce.Button),
                onClick: m,
                children: r,
              }),
            ],
          });
        }
        function zn(s) {
          const e = (0, Fn.V)(),
            n = (0, h.Tc)("bShowWarnings", "application_config"),
            a = (0, h.Tc)("bTestData", "application_config"),
            i = (0, h.Tc)("bPartnerOnboarding", "application_config");
          return $n(e)
            ? null
            : i
              ? (0, t.jsx)(Mt.m, {
                  children: (0, t.jsx)(Rn, {
                    partnerId: e,
                    showWarnings: n,
                    testData: a,
                  }),
                })
              : (0, t.jsxs)(Mt.m, {
                  children: [
                    (0, t.jsx)(Vn, {}),
                    (0, t.jsx)(Ln.a, {}),
                    (0, t.jsx)(En, {
                      partnerId: e,
                      showWarnings: n,
                      testData: a,
                    }),
                  ],
                });
        }
        function $n(s) {
          const [e, n] = p.useState(!0);
          return (
            p.useEffect(() => {
              at.O3.Init(),
                Le.c.Get(),
                (async () => (
                  await te.Get().Init(h.iA.accountid, Number.isNaN(s) ? 0 : s),
                  n(!1)
                ))();
            }, [s]),
            e
          );
        }
      },
      77959: (V, he, _) => {
        "use strict";
        _.d(he, { b: () => Ne, a: () => fe });
        var t = _(7850),
          p = _(40358),
          h = _(90626),
          E = _(98609);
        function je(H, U) {
          if (!(!H?.asset_url_format || typeof H[U] != "string"))
            return (
              E.TS.BASE_URL_SHARED_CDN +
              "/store_item_assets/" +
              H.asset_url_format.replace("${FILENAME}", H[U])
            );
        }
        var j = _(71421),
          ue = _(36707),
          o = _(18210),
          q = _(3166),
          S = _(28325),
          z = _(6777),
          oe = _(33654);
        function fe(H) {
          const U = h.useMemo(() => Te(), []);
          return (0, t.jsx)(z.$, {
            title: (0, o.we)("#Dashboard_RecentApps_Title"),
            headerElement: (0, t.jsx)(ke, {}),
            children: (0, t.jsxs)("div", {
              className: S.AppTileContainer,
              children: [
                !U.length && (0, t.jsx)(xe, {}),
                U.map((O) => (0, t.jsx)(Oe, { app: O }, O.appid)),
              ],
            }),
          });
        }
        function xe(H) {
          const U = q.TS.PARTNER_BASE_URL + "apps/";
          return (0, t.jsxs)("div", {
            className: S.NoRecentApps,
            children: [
              (0, o.we)("#Dashboard_RecentApps_NoRecent"),
              " ",
              (0, t.jsxs)("a", {
                href: U,
                target: "_blank",
                children: [" ", (0, o.we)("#Dashboard_RecentApps_ViewAll")],
              }),
            ],
          });
        }
        function ke(H) {
          const U = q.TS.PARTNER_BASE_URL + "apps/";
          return (0, t.jsx)("div", {
            className: S.ViewAppsContainer,
            children: (0, t.jsx)("div", {
              className: S.ViewAppsLink,
              children: (0, t.jsx)("a", {
                href: U,
                children: (0, o.we)("#Dashboard_RecentApps_ViewAllShort"),
              }),
            }),
          });
        }
        function Oe(H) {
          const { app: U } = H,
            O = U.appid,
            { data: J } = (0, p.lv)({ appid: O }),
            de = q.TS.PARTNER_BASE_URL + "apps/landing/" + O,
            M = je(J, "header");
          return (0, t.jsxs)("div", {
            className: S.AppTile,
            children: [
              M &&
                (0, t.jsx)(j.he, {
                  toolTipContent: U.name,
                  children: (0, t.jsx)("div", {
                    className: S.AppTileImage,
                    children: (0, t.jsx)("a", {
                      href: de,
                      target: "_blank",
                      children: (0, t.jsx)("img", { src: M }),
                    }),
                  }),
                }),
              !M &&
                (0, t.jsx)("div", {
                  className: S.AppTileImagePlaceholder,
                  children: (0, t.jsx)("a", {
                    href: de,
                    target: "_blank",
                    children: U.name,
                  }),
                }),
              (0, t.jsx)(Ne, { app: U }),
            ],
          });
        }
        function Ne(H) {
          const { app: U } = H,
            O = U.appid,
            { data: J } = (0, p.J$)({ appid: O });
          return (0, t.jsxs)("div", {
            className: S.AppLabels,
            children: [
              (0, t.jsx)(Ve, { appType: U.type }),
              (0, t.jsx)(We, {
                releaseState: U.releasestate,
                hasStoreItem: J?.visible,
              }),
            ],
          });
        }
        function Ve(H) {
          const { appType: U } = H;
          let O = null,
            J = null;
          return (
            U == "Game"
              ? (O = (0, o.we)("#Dashboard_RecentApps_Game"))
              : U == "DLC"
                ? ((O = (0, o.we)("#Dashboard_RecentApps_DLC")), (J = S.DLC))
                : U == "Beta"
                  ? ((O = (0, o.we)("#Dashboard_RecentApps_Playtest")),
                    (J = S.Playtest))
                  : U == "Demo"
                    ? ((O = (0, o.we)("#Dashboard_RecentApps_Demo")),
                      (J = S.Demo))
                    : U == "Music" &&
                      ((O = (0, o.we)("#Dashboard_RecentApps_Music")),
                      (J = S.Music)),
            !!O &&
              (0, t.jsx)("div", {
                className: (0, ue.A)(S.AppType, J),
                children: O,
              })
          );
        }
        function We(H) {
          const { releaseState: U, hasStoreItem: O } = H,
            J = (0, oe.pc)(U, O);
          return (
            U != "released" &&
            (0, t.jsx)("div", {
              className: (0, ue.A)(S.AppRelease),
              children: J.sText,
            })
          );
        }
        function Te() {
          const H = (0, q.Tc)("rgRecentApps", "application_config"),
            U = H ? Object.keys(H).map((M) => H[M]) : [],
            O = (0, q.Tc)("rgRecentUnreleasedApps", "application_config"),
            J = O ? Object.keys(O).map((M) => O[M]) : [],
            de = (0, oe.Gx)(U, J);
          return de.sort((M, ye) => M.nOrder - ye.nOrder), de;
        }
      },
      6777: (V, he, _) => {
        "use strict";
        _.d(he, { $: () => j });
        var t = _(7850),
          p = _(90626),
          h = _(18210),
          E = _(6853),
          je = _.n(E);
        const j = p.forwardRef((ue, o) => {
          const {
            title: q,
            count: S,
            description: z,
            children: oe,
            beta: fe,
            headerElement: xe,
          } = ue;
          return (0, t.jsxs)("div", {
            className: E.Section,
            ref: o,
            children: [
              (0, t.jsxs)("div", {
                className: E.Header,
                children: [
                  (0, t.jsxs)("div", {
                    className: E.Title,
                    children: [
                      q,
                      S != null &&
                        (0, t.jsx)("span", { className: E.Count, children: S }),
                      fe &&
                        (0, t.jsx)("span", {
                          className: E.BetaCallout,
                          children: (0, h.we)("#NewToolTitleSuffix_Beta"),
                        }),
                    ],
                  }),
                  xe,
                ],
              }),
              z && (0, t.jsx)("div", { className: E.Body, children: z }),
              oe,
            ],
          });
        });
      },
      27989: (V) => {
        V.exports = {
          ReleaseInfoCtn: "_3pyc1rLbsfwxBzJyo5sSGH",
          ReleaseInfoRow: "_3xlpWtlLHzeEs867WmkEco",
          ReleaseDateLabel: "_1c-xWcy3xU5-9w4WMDBaBk",
          ReleaseDateText: "Uds1EW8cCKznZViXJR7rK",
          AdvancedAccess: "_3DjEDzcUQfco8bzr0S8lKa",
          ItemReleaseInfoContainer: "_1foxJ51_vcGLTtrIYUsdBR",
          ItemReleaseStatusCtn: "lHnZkWzyYDDvLGib3I4dC",
          ItemReleaseStatusLabel: "lY-QD7LQpsurzqbEFbpsw",
          ItemReleaseStatusText: "_3tS9x4mCXvmP5SeWCFVOAI",
          Released: "_2hafZfeaVn-Ck28i_mCCJ6",
          Prerelease: "_3dm-qRXJQ5IvnxASEaUR-i",
        };
      },
      95013: (V) => {
        V.exports = {
          DateDesc: "_1ieLjZCscUCDEoq5WxDnos",
          StatusIndicatorSection: "EQDUb2VLFwQpPfjQ3skm3",
          StatusIndicator: "_35mLhsittFJqY9y-lWL7CS",
          Complete: "_1d04fBazUEIUkD2m2dR1gy",
          CapsuleContainer: "_tube1QAlHBP0R_WZC6dh",
          RecapCapsuleContainer: "_32lDgxMiFkyQH0J8KoHa-A",
          DailyDealTitle: "_37u7YGTUEm2-ajGx7pneh4",
          DailyDeal_RecapContainer: "_3vG59rd5Y0j_Pa-c5gTTXK",
          PromoTitle: "_1Cz2tiprzZPFDYi0LkcW8c",
          FeaturedDate: "_1b9mTzy-chexcZrxryciDC",
          DailyDeal_RecapTable: "_3-BsuwqeYHzZrvrMxr9f8l",
          Cell: "_3zi3mQCKUh5E-EVcrnE5W1",
          GameCount: "_1v3nuicMA4m8d-yT1Lxngj",
          SalesRow: "_3FYdeynVLeJjVl03fQxHZM",
          VerticalCell: "_2Tcw8t9uK7YLhiSbX2_G2e",
          HighlightHeader: "RUh8sWtNrvoTofQcmnk6b",
          ActiveSortColumn: "_39AoV7z9NYbz4kuO7UE8Im",
          HighlightValue: "og1MY8q_G9yAnCnV67kWf",
          HighlightText: "LB8RZGgOGPpYM_l0O2qMF",
          DailyDealLinkButtonContainer: "XH1ExHdILVi7Zr4DMv4TC",
        };
      },
      79198: (V) => {
        V.exports = {
          DeadlineWarning: "_3BQrnzyxSMAp9_XcJ5QXDi",
          DeadlineWarningUrgent: "_2imXbqSxgLF07RmC5yVqF1",
          CapsuleTax: "_3HedtZyM0AdhJpVYJd2Q0d",
        };
      },
      46406: (V) => {
        V.exports = { YoureRegistered: "_3Cq5dkjja40hD3OIyYgGTT" };
      },
      99661: (V) => {
        V.exports = {
          HeaderText: "Oe9oC2iVrZ7AB3HsaBubl",
          AppsCountToolTipSource: "qxDLjxP1x2ZNb4BNJAlSu",
          AppsCount: "_3Hr1U8j8JMaOg44NLkJB7V",
          AppsCountLabel: "HEzBa-bMLz3OzjR-oDLiA",
          AppsCountText: "LmhKHrKzvyM11tzm3FDiN",
          AppsCountTooltip: "_18_kvxy_eVzHR3zVcCH3d_",
        };
      },
      84865: (V) => {
        V.exports = {
          ItemDeadlineHeaderText: "_3fFB6RwbLIvb3W_fir7Fv3",
          Urgent: "_3feZl2DmA-9yyeeh-tmdf4",
          ItemWarning: "xmbXoWyepJf7XgOtlx24Q",
          StatusItemBox: "_2I9APf3zBd0y9Dy6m91yjj",
          Hidden: "j2neDc031KN1cmo26Ei6_",
          StatusItemBoxLabel: "_3M2fCNpPmbrNLgY80Bhk3M",
          StatusItemBoxText: "_2MTf_HzUX_pOLW_hVcWMvy",
          OptInGamesToolTipContainer: "_2wZAa6sQ5jUKKtGlmQZa-W",
          OptInGamesToolTipRegistered: "_2UcamIrl4fDV8Y3QluKc0x",
          OptInTodoColumn: "_2-Q_jkGsQoCOHrkWPn4Q9z",
          AssetRequestDateLabel: "sWDKwjiyTGn96CJ0ZdvTx",
          AssetRequestDate: "_2ln4ptn8kLvItsyKLaJ540",
          RecapItemContainer: "_3vV4PdOkt6H3Yw2tTOMxXv",
          RecapItemImage: "cX4qxY3gY-nMmFoUjvaQW",
          RecapTextSection: "xdXlywbPh1SdznUFYFa9O",
          RecapTextHeader: "BBLLWhWNzK-dvqeY2Ovsw",
          RecapTextSummary: "_3ekRTHs6e0OqTpVnIDNmcM",
          RecapTextGameDescription: "SQ1uTbpEI6KOojtvBdxp5",
          RecapTextGameCount: "_1BOaL8odwV4gc58ghgHmFX",
          RecapTextGameAdditionalCount: "_1rKyO1IvboXJa--nsLfZLz",
          RecapTextFullSummaryButton: "_2Xox3wRxZgJxPUvZ3_MHh2",
          RecapBox: "_3-ZU0agFUhd91WH7-tT2i-",
          Plays: "_50Mf8lJB1o0WznsExh2of",
          Wishlists: "_2Z9kv2MrH07LEZ406knsTb",
          Conversions: "_34M1ZaK1GneG_3n5qvMF2x",
          RecapBoxDesc: "_3KIqQC9CBrvxKEXQQVJMJ3",
          Disabled: "Af1aLJDTNe8AI4DbSpoTz",
          RecapBoxCount: "_29-6ZFNwvCqNGYfH4DyPlg",
          RecapSurveyArea: "_20FGvb5Uu58MtRiGzdhNYt",
          RecapSurveyText: "_1w0h8JHJTV1cgSgcs63oVz",
          RecapSurveyButton: "_1DPl-Nj8358nc1vRjPsify",
        };
      },
      60103: (V) => {
        V.exports = {
          ImportantActions: "_3B6xrYury1Ts_o0GPsES40",
          ImportantAction: "_36_x3k8M7bu0VPnRw3kEKo",
          Urgent: "_2E-Xc2EIqw2Ys0CBmskA2f",
          Header: "_1oROkaRIwmWGZZhwR_K-3V",
          Image: "wCDccZ-H1N79RGSMAkd0s",
          Body: "_1nP1m4D-ktueuGdy0ZWCcs",
          Title: "_2JXyQG5OEaS_nB-9nL6djv",
          Description: "_1YIlp5jGDrHfOHv5l9JUm3",
          Button: "_3RzWyIa8BeEnaQhjZVP5xy",
        };
      },
      28325: (V) => {
        V.exports = {
          AppTileContainer: "_1MNwvHXvTQh_nlTEGVL-9G",
          NoRecentApps: "l73IMu5N0BMAEv5-wk3NU",
          ViewAppsContainer: "_3bhAuHTe2QDmn7qVPrbhTn",
          ViewAppsLink: "_1DXsI6kGhs4saDdMEB5Zhp",
          AppTile: "_1ET9Is2SXz9L6oBuMGkhyc",
          AppTileImage: "_2ib4C2NrFHUrt3df5FaIkA",
          AppTileImagePlaceholder: "_1v97yYXETM1gTfYqCF1MYJ",
          AppLabels: "_1gCoNWQfTPQf4Oo6uJLX9",
          AppType: "_2ZrhAQm3GQlhhKkqzdGwsF",
          DLC: "_3joD2YzY0xQ4OQFjl8vTK1",
          Playtest: "_2BpsHGvYJ2BpGraZ66oN_-",
          Demo: "_2RgXBp9gOVTZDwSY533Aiz",
          Music: "_1yUcqupOCPqJJkEMvpmNyu",
          AppRelease: "_1XsM2jNRjoVa7SfxlYIXAb",
        };
      },
      6853: (V) => {
        V.exports = {
          Section: "_1FrGxLLJNyWZswyE9TGS3N",
          Body: "_1CaApUvC8ichAOgldt6XZm",
          Header: "WnpaUxHTbHM6dHV4JNyog",
          Title: "f3pCBilbcCpf8q3EUD2fp",
          Count: "tYEaq1iQcl91w3W4gzbeX",
          BetaCallout: "_3F09B-c90Mi_ABQSFt8qlI",
        };
      },
      61318: (V) => {
        V.exports = {
          MonthPickerContainer: "_3RPpq_xpBk5aqnkSKWVHVs",
          MonthPickerToday: "_3Z1nRXcAXthFz1XwG4CG6_",
          Inactive: "_2wy3c-dsJGU8oH5Mc6NMBM",
          MonthPickerDate: "_3lblbnrG1uWyf8ojK1KAf9",
          Week: "KTqepp4E9ikcTpO5fCimg",
          DayName: "_19XW3yoje51USmF5O_vlm6",
          Day: "UsC29fNWjFaEowXT-tS0_",
          OtherMonth: "_2yLjZFQdmMnBeACk4bW4Es",
          Note: "jAqjN_z3kEcEHKRIk2_NF",
          Today: "_2tUBbw1tOXkA3VpPyrjwdM",
          Event: "_3hw9L-H1pFlrOzQgoSCNM8",
          Hovered: "rFU9Cu_E_GnoyNN1jVaas",
          DayTooltipContainer: "PNwYvjONfVxOKzAJtrCr-",
          DayTooltipDate: "_1LCnP6v7YPgx3OAgTx_nO1",
          DayTooltipEvent: "_337ZibrUsfSdN8cl0VELZe",
        };
      },
    },
  ]);
})();
