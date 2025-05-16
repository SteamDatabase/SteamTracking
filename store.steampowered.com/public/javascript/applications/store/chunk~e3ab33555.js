/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [3318],
  {
    66272: (e) => {
      e.exports = { BreadContainer: "_3jswbLK3E0Uf47oGyc6qUG" };
    },
    12916: (e) => {
      e.exports = {
        EventTimeSection: "_3HyTVTASSmLacvaM964sgu",
        EventTimeTitle: "_2lG5hFYhu9PGPn6RoFeQOL",
        EventVisibilityItem: "_1she-lvNiCP3ASjTnl4q7x",
        EventEditorInputPaneContainer: "_1fCy4cz5Hyj9wDivcVseuc",
        TimeWidth: "_3JGsBe8Ou5QGqfihv0OPed",
        EventPublishTimeCtn: "_2QIVvn2p9gUwsAlifi-nkM",
        DateWidth: "_2P2kw0vHZogg7Ny7cAjQBo",
        PacificTimeHint: "_18FxDrpsfO5Tt8EFui49hV",
        TimeZone: "-x3Rw6W2fJfWRMs7vKr1I",
        InputBorder: "_1_H1sN2GVTzxSaz55gv03s",
        TimeBlock: "_2xLBsAMYVDoygyWbl2YIzI",
        TimeRowContainer: "BWmgg29ZeDbO6oj7Z1U7T",
        TimeRowDropDown: "_3ECiyuGLUqPzuS1hKCdfDm",
        EndDateAmountCtn: "_1BIlZEGSO_4tw5Lmc1Kkbf",
        EndRound: "jwuNowbLB28M6nkqFkF_C",
        VisibilityItemList: "_3B0QM3cOEqER2AD2Y85NFy",
        VisibilityItems: "_1WleIEEiF-9nJ57tLWkRmS",
        EventEditorVisibilityCtn: "_4gWwydbAbp2t1NCeW9LLV",
        DateErrorCtn: "_1Ao_g72kBAdoOo0lGUG7Mr",
      };
    },
    5065: (e) => {
      e.exports = {
        DashboardView: "_1QwMyGKe9F8g1QnNoMz1JP",
        HeaderCtn: "_3KXER7qT57ii-dLNJO926C",
        TotalsCtn: "FQKvUJASJ1JVJ28HSbIt-",
        EventDetailView: "_2xYo3SIDAveAIlOqU6Tolu",
        HeaderStat: "_3VEmudDnkNmWv6uoQEicRy",
        StatFigure: "_30CaMtSkoYlQf82iQSskB6",
        StatsTitle_ctn: "_1QGGF04ktVe1bIIhdEtXaD",
        StatsTitle: "_3YLaBiVHp_mPV3f8YD9MrK",
        StatsCtnTitle: "_1LlRFhVuQF26o2UG7Vg5s3",
        StatTitle: "_1SPyq_BoQrA60DbjY_Eoke",
        VisibilityNote: "_1G-k1HX2M60Sx-vP4SEe5k",
        StatsActionRow: "_23Ra5sX6-aVU2ayKSkIzE5",
        StatsCtn: "hWCs41T0tFwuGLTHxvthv",
        StatsLeftSection: "_3L-uhfyc1hVkz4mrHwVm9x",
        StatsRightSection: "_1yibDM6eeZtYQXEdjO_Scg",
        ModerationWarningCtn: "_3Jwi3DKhGEzxba2BP4X8wo",
        ModerationWarning: "_1aIU0L2u2GWHUvc2oV1zyd",
        ModerationNote: "_11Z9Iz4InEbE8AVPdJ6iFY",
        DisabledStats: "_2Zp-jzTV09Qjj3uTxcFLN3",
      };
    },
    92451: (e) => {
      e.exports = { DialogCtn: "e7i0Hs6j09gCdPXXjl7Lk" };
    },
    22305: (e, t, a) => {
      "use strict";
      a.d(t, { r: () => m });
      var n = a(90626),
        s = a(66272),
        i = a(52038),
        r = a(17083),
        l = a(45699),
        o = a(76217);
      function m(e) {
        const { crumbs: t, className: a } = e;
        return t && 0 != t.length
          ? n.createElement(
              "div",
              { className: (0, i.A)(s.BreadContainer, a) },
              n.createElement(
                o.Z,
                { className: "blockbg", "flow-children": "row" },
                t.map((e) => {
                  const t = new Array();
                  return (
                    e.url.startsWith("http")
                      ? t.push(
                          n.createElement(
                            l.Ii,
                            { key: "anchor_" + e.name, href: e.url },
                            e.name,
                          ),
                        )
                      : t.push(
                          n.createElement(
                            r.N_,
                            { key: "link_" + e.name, to: e.url },
                            e.name,
                          ),
                        ),
                    t.push(
                      n.createElement("span", { key: e.name + "span" }, " > "),
                    ),
                    t
                  );
                }),
              ),
              n.createElement("div", { style: { clear: "left" } }),
            )
          : null;
      }
    },
    40224: (e, t, a) => {
      "use strict";
      a.d(t, { K8: () => Te, P2: () => Ae, jA: () => ye });
      var n = a(34629),
        s = a(22837),
        i = a(20019),
        r = a(41735),
        l = a.n(r),
        o = a(75844),
        m = a(65946),
        c = a(90626),
        d = a(77516),
        _ = a(4796),
        p = a(44165),
        u = a(60746),
        v = a(78327),
        E = a(14947),
        h = a(68797),
        S = a(17720);
      class g {
        constructor(e) {
          (0, E.Gn)(this),
            (this.m_stats = {
              event_gid: "0",
              library_overview_shown: 0,
              library_overview_read: 0,
              app_details_spotlight_shown: 0,
              app_details_spotlight_read: 0,
              app_details_activity_shown: 0,
              app_details_activity_read: 0,
              store_app_page_shown: 0,
              store_app_page_read: 0,
              store_front_page_shown: 0,
              store_front_page_read: 0,
              community_hub_shown: 0,
              community_hub_read: 0,
              news_hub_shown: 0,
              news_hub_read: 0,
              event_scroller_read: 0,
              ...e,
            }),
            (this.m_stats.total_showm =
              this.m_stats.library_overview_shown +
              this.m_stats.app_details_activity_shown +
              this.m_stats.app_details_spotlight_shown +
              this.m_stats.store_app_page_shown +
              this.m_stats.store_front_page_shown +
              this.m_stats.community_hub_shown +
              this.m_stats.news_hub_shown),
            (this.m_stats.total_read =
              this.m_stats.library_overview_read +
              this.m_stats.app_details_activity_read +
              this.m_stats.app_details_spotlight_read +
              this.m_stats.store_app_page_read +
              this.m_stats.store_front_page_read +
              this.m_stats.community_hub_read +
              this.m_stats.news_hub_read +
              this.m_stats.event_scroller_read),
            (this.m_lastUpdateTime = e ? Math.floor(Date.now() / 1e3) : 0);
        }
        reset(e) {
          (this.m_stats.library_overview_shown = e.library_overview_shown),
            (this.m_stats.library_overview_read = e.library_overview_read),
            (this.m_stats.app_details_spotlight_shown =
              e.app_details_spotlight_shown),
            (this.m_stats.app_details_spotlight_read =
              e.app_details_spotlight_read),
            (this.m_stats.app_details_activity_shown =
              e.app_details_activity_shown),
            (this.m_stats.app_details_activity_read =
              e.app_details_activity_read),
            (this.m_stats.store_app_page_shown = e.store_app_page_shown),
            (this.m_stats.store_app_page_read = e.store_app_page_read),
            (this.m_stats.store_front_page_shown = e.store_front_page_shown),
            (this.m_stats.store_front_page_read = e.store_front_page_read),
            (this.m_stats.community_hub_shown = e.community_hub_shown),
            (this.m_stats.community_hub_read = e.community_hub_read),
            (this.m_stats.news_hub_shown = e.news_hub_shown),
            (this.m_stats.news_hub_read = e.news_hub_read),
            (this.m_stats.event_scroller_read = e.event_scroller_read),
            (this.m_stats.total_showm =
              e.library_overview_shown +
              e.app_details_activity_shown +
              e.app_details_spotlight_shown +
              e.store_app_page_shown +
              e.store_front_page_shown +
              e.community_hub_shown +
              e.news_hub_shown),
            (this.m_stats.total_read =
              e.library_overview_read +
              e.app_details_activity_read +
              e.app_details_spotlight_read +
              e.store_app_page_read +
              e.store_front_page_read +
              e.community_hub_read +
              e.news_hub_read +
              e.event_scroller_read),
            (this.m_lastUpdateTime = Date.now() / 1e3);
        }
        m_stats = void 0;
        m_lastUpdateTime = void 0;
      }
      (0, n.Cg)([E.sH], g.prototype, "m_stats", void 0),
        (0, n.Cg)([E.sH], g.prototype, "m_lastUpdateTime", void 0);
      class w {
        m_mapPerEventStats = new Map();
        m_mapSummaryStats = new Map();
        m_bLoadedFromConfig = !1;
        constructor() {
          (0, E.Gn)(this);
        }
        LazyInit() {
          if (!this.m_bLoadedFromConfig) {
            let e = (0, v.Tc)("trackingdatasummary", "application_config");
            this.ValidateStoreDefault(e) &&
              this.m_mapSummaryStats.set(e.clan_account_id, new g(e));
            let t = (0, v.Tc)("trackingdataevents", "application_config");
            this.ValidateStoreDefaultList(t) &&
              t.forEach((e) => {
                let t = S.b.InitFromClanID(e.clan_account_id),
                  a = this.GetKey(t, e.event_gid);
                this.m_mapPerEventStats.set(a, new g(e));
              }),
              (this.m_bLoadedFromConfig = !0);
          }
        }
        ValidateStoreDefault(e) {
          const t = e;
          return (
            !(!t || "object" != typeof t || !t.clan_account_id) &&
            "number" == typeof t.clan_account_id &&
            t.clan_account_id > 0
          );
        }
        ValidateStoreDefaultList(e) {
          const t = e;
          return (
            !!(
              t &&
              Array.isArray(t) &&
              t.length > 0 &&
              "object" == typeof t[0]
            ) &&
            "number" == typeof t[0].clan_account_id &&
            t[0].clan_account_id > 0
          );
        }
        GetStatsFor(e, t) {
          this.LazyInit();
          let a = this.GetKey(e, t);
          return (
            this.m_mapPerEventStats.has(a) ||
              this.m_mapPerEventStats.set(a, new g(null)),
            this.m_mapPerEventStats.get(a)
          );
        }
        GetTotalStats(e) {
          return (
            this.LazyInit(),
            this.m_mapSummaryStats.has(e.GetAccountID()) ||
              this.m_mapSummaryStats.set(e.GetAccountID(), new g(null)),
            this.m_mapSummaryStats.get(e.GetAccountID())
          );
        }
        GetKey(e, t) {
          return e.GetAccountID() + "_" + t;
        }
        async LoadStatsForEvents(e, t, a) {
          this.LazyInit();
          let n = Date.now() / 1e3,
            s = t.filter((t) => {
              let a = this.GetKey(e, t),
                s = this.m_mapPerEventStats.get(a);
              return !s || null == s.m_stats || s.m_lastUpdateTime < n - 3600;
            });
          if (!s || 0 == s.length) return !0;
          let i = (0, v.xv)() + "actions/ajaxgetpartnereventsreport",
            r = {
              sessionid: v.TS.SESSIONID,
              clan_account_id: e.GetAccountID(),
              gidlist: s.join(","),
            };
          try {
            let t = await l().get(i, {
              params: r,
              withCredentials: !0,
              cancelToken: a?.token,
            });
            return (
              (0, E.h5)(() => {
                this.m_mapSummaryStats.set(
                  e.GetAccountID(),
                  new g(t.data.summary),
                ),
                  t.data.events_detail.forEach((t) => {
                    let a = this.GetKey(e, t.event_gid);
                    if (this.m_mapPerEventStats.has(a)) {
                      this.m_mapPerEventStats.get(a).reset(t);
                    } else this.m_mapPerEventStats.set(a, new g(t));
                  });
              }),
              !0
            );
          } catch (e) {
            let t = (0, h.H)(e);
            console.error("CPartnerEventReportingStore " + t.strErrorMsg, t);
          }
          return !1;
        }
        BHasEventStats(e, t) {
          let a = S.b.InitFromClanID(e),
            n = this.GetKey(a, t),
            s = this.m_mapPerEventStats.get(n);
          return Boolean(s && s.m_stats);
        }
      }
      (0, n.Cg)([E.sH], w.prototype, "m_mapPerEventStats", void 0),
        (0, n.Cg)([E.sH], w.prototype, "m_mapSummaryStats", void 0),
        (0, n.Cg)([E.XI], w.prototype, "LazyInit", null);
      const D = new w();
      var y = a(55263),
        b = a(22305),
        T = a(84811),
        A = a(41550),
        I = a(32541),
        C = a(42011),
        N = a(43616),
        f = a(75113),
        B = a(43667),
        G = a(64940),
        P = a(90316),
        L = a.n(P),
        k = a(67417),
        H = a(96971),
        F = a(71746),
        R = a(95695),
        O = a.n(R),
        V = a(52038),
        x = a(61859),
        M = a(5065),
        U = a(82227),
        W = a(738),
        j = a(10981),
        z = a(51272),
        K = a(6379),
        q = a(99637),
        Q = a(51706),
        Y = a(22797),
        Z = a(94649),
        X = a.n(Z);
      class J {
        static ParseCSVFile(e) {
          return new Promise((t, a) => {
            const n = {
              header: !0,
              skipEmptyLines: "greedy",
              complete: t,
              error: (e) => a({ errors: [e] }),
            };
            X().parse(e, n);
          });
        }
        static ReadFile(e) {
          return new Promise((t, a) => {
            const n = new FileReader();
            (n.onload = (e) => t(n.result)), n.readAsText(e);
          });
        }
        static WriteFile(e, t) {
          let a = document.createElement("a");
          if (navigator.msSaveBlob) navigator.msSaveBlob(e, t);
          else {
            const t = window.URL.createObjectURL(e);
            a.href = t;
          }
          a.setAttribute("download", t), a.click();
          try {
            document.removeChild(a);
          } catch (e) {}
        }
        static WriteCSVToFile(e, t) {
          const a = X().unparse(e, { header: !0 });
          J.WriteFile(new Blob([a], { type: "text/csv:charset=utf-8;" }), t);
        }
        static m_DummyValueForQuestionHack = 0;
        static WriteXMLToFile(e, t) {
          const a = () =>
            this.m_DummyValueForQuestionHack ? "never returned" : "?";
          let n =
            "<" + a() + 'xml version="1.0" encoding="UTF-8" ' + a() + ">\n";
          (n += new XMLSerializer().serializeToString(e)),
            J.WriteFile(
              new Blob([n], { type: "application/xml:charset=utf-8;" }),
              t,
            );
        }
      }
      var $ = a(91675),
        ee = a(14771),
        te = a(92451),
        ae = a.n(te);
      const ne = { include_basic_info: !0 };
      function se(e) {
        const { clanInfo: t, closeModal: a } = e,
          [n] = (0, y.t7)(t.appid, ne),
          [i, r] = c.useState(!0),
          [o, m] = c.useState(!0),
          d = 1063339200,
          _ = p.HD.GetTimeNowWithOverride(),
          [u, E] = c.useState(_ - ee.Kp.PerMonth),
          [h, S] = c.useState(_),
          [g, w] = c.useState(-1),
          b = g >= 0;
        return c.createElement(
          Q.o0,
          {
            strTitle: (0, x.we)("#EventDashboard_Stats_title"),
            strDescription: (0, x.we)("#EventDashboard_Stats_desc"),
            closeModal: a,
            bDisableBackgroundDismiss: !0,
            bOKDisabled: b,
            onOK: () =>
              (async function (e, t, a, n, i) {
                const r = new Array(),
                  o = l().CancelToken.source();
                let m = 0;
                i(m);
                const c = 100;
                let d,
                  _ = 0,
                  p = new Array();
                const u = (0, s.sf)(v.TS.LANGUAGE);
                do {
                  if (
                    ((_ += 1),
                    (p = await K.O3.LoadAdjacentPartnerEvents(
                      d,
                      e.clanSteamID,
                      void 0,
                      0,
                      c,
                      { rtime_oldestevent: a, only_summaries: !0 },
                      o,
                    )),
                    p?.length > 0)
                  ) {
                    (m += p.length), i(m), (d = p[p.length - 1].GID);
                    const a = p
                      .filter((e) => e.startTime <= n && e.BIsVisibleEvent())
                      .map((e) => e.GID);
                    a.length > 0 &&
                      (await D.LoadStatsForEvents(e.clanSteamID, a, o),
                      (m += a.length),
                      i(m),
                      a.forEach((a) => {
                        const n = D.GetStatsFor(e.clanSteamID, a),
                          s = K.O3.GetClanEventModel(a),
                          i = s.GetStartTimeAndDateUnixSeconds(),
                          l = s.GetEndTimeAndDateUnixSeconds();
                        r.push({
                          appid: e.appid,
                          app_name: t?.GetName() || "",
                          event_name: s.GetNameWithFallback(u),
                          event_type: s.GetEventTypeAsString(),
                          event_start_date: (0, x.TW)(i) + " @ " + (0, $.KC)(i),
                          event_end_date: (0, x.TW)(l) + " @ " + (0, $.KC)(l),
                          ...n.m_stats,
                          event_gid: "'" + a,
                        });
                      }));
                  }
                } while (p.length == c && _ < 100);
                return (
                  J.WriteCSVToFile(
                    r,
                    "event_stats_" +
                      e.group_name.toLocaleLowerCase().replace(/\s/g, "_") +
                      ".csv",
                  ),
                  !0
                );
              })(t, n, i ? d : u, o ? Number.MAX_SAFE_INTEGER : h, w).then(() =>
                a(),
              ),
          },
          Boolean(t.appid && !n)
            ? c.createElement(Y.t, {
                string: (0, x.we)("#Loading"),
                position: "center",
                size: "medium",
              })
            : c.createElement(
                "div",
                { className: ae().DialogCtn },
                c.createElement(
                  "div",
                  { className: "DialogLabel" },
                  (0, x.we)("#EventDashboard_Stats_Oldest_Title"),
                ),
                c.createElement(
                  "div",
                  { className: "_DialogInputContainer _DialogLayout" },
                  c.createElement(j.Yh, {
                    label: (0, x.we)("#EventDashboard_Stats_Oldest"),
                    onChange: r,
                    checked: i,
                    disabled: b,
                  }),
                  !i &&
                    c.createElement(
                      "div",
                      null,
                      (0, x.we)("#EventDashboard_Stats_Oldest_Override"),
                      c.createElement(q.K, {
                        nEarliestTime: d,
                        nLatestTime: o ? void 0 : h,
                        bShowTimeZone: !0,
                        fnGetTimeToUpdate: () => u,
                        fnSetTimeToUpdate: E,
                        disabled: b,
                      }),
                    ),
                ),
                c.createElement(
                  "div",
                  { className: "DialogLabel" },
                  (0, x.we)("#EventDashboard_Stats_Newest_Title"),
                ),
                c.createElement(
                  "div",
                  { className: "_DialogInputContainer _DialogLayout" },
                  c.createElement(j.Yh, {
                    label: (0, x.we)("#EventDashboard_Stats_Newest"),
                    onChange: m,
                    checked: o,
                    disabled: b,
                  }),
                  !o &&
                    c.createElement(
                      "div",
                      null,
                      (0, x.we)("#EventDashboard_Stats_Newest_Override"),
                      c.createElement(q.K, {
                        nEarliestTime: i ? d : u,
                        bShowTimeZone: !0,
                        fnGetTimeToUpdate: () => h,
                        fnSetTimeToUpdate: S,
                        disabled: b,
                      }),
                    ),
                ),
                b &&
                  c.createElement(Y.t, {
                    position: "center",
                    size: "medium",
                    string: (0, x.we)("#EventDashboard_Stats_Progress", g),
                  }),
              ),
        );
      }
      var ie = a(56011),
        re = a(26408),
        le = a(95034);
      function oe(e) {
        const {
            summary: t,
            clanSteamID: a,
            bEventIsInModerationQueue: n,
            bIsAllowedInLibrary: s,
            bCompact: i,
          } = e,
          r = t.total_read + t.total_showm,
          [l] = (0, le.QD)("expanded", !1),
          [o, m] = c.useState(!!l || i);
        if (0 == r) return null;
        const d = _.ac.GetClanInfoByClanAccountID(a.GetAccountID());
        return c.createElement(
          "div",
          { className: (0, V.A)(i ? M.EventDetailView : M.DashboardView) },
          c.createElement(
            "div",
            { className: (0, V.A)(M.HeaderCtn) },
            !i &&
              c.createElement(
                "div",
                { className: M.StatsCtnTitle },
                c.createElement(
                  "div",
                  { className: M.StatTitle },
                  (0, x.we)("#EventDashBoard_SummaryStats_Title"),
                  c.createElement(re.o, {
                    tooltip: (0, x.we)("#EventDashBoard_SummaryStats_Desc"),
                  }),
                ),
                c.createElement(
                  "div",
                  { className: M.StatsActionRow },
                  c.createElement(
                    j.$n,
                    {
                      onClick: (e) =>
                        (0, z.EP)(
                          e,
                          `${v.TS.PARTNER_BASE_URL}/doc/marketing/event_tools/stats`,
                        ),
                    },
                    (0, x.we)("#EventDashBoard_SummaryStats_AboutStats"),
                  ),
                  c.createElement(
                    j.$n,
                    {
                      onClick: (e) =>
                        (0, W.pg)(
                          c.createElement(se, { clanInfo: d }),
                          (0, ie.uX)(e),
                        ),
                    },
                    (0, x.we)("#EventDashBoard_SummaryStats_Export"),
                  ),
                ),
                c.createElement(
                  "div",
                  { className: M.StatsActionRow },
                  c.createElement(
                    j.$n,
                    { onClick: () => m(!o) },
                    (0, x.we)("#EventDashBoard_SummaryStats_Details"),
                  ),
                ),
              ),
            c.createElement(
              "div",
              { className: M.TotalsCtn },
              c.createElement(
                "div",
                { className: M.HeaderStat },
                c.createElement(
                  "span",
                  { className: M.StatDescription },
                  (0, x.we)("#EventDashBoard_SummaryStats_TotalImpressions"),
                ),
                c.createElement(
                  "span",
                  { className: M.StatFigure },
                  (0, U.Dq)(t.total_showm),
                ),
              ),
              c.createElement(
                "div",
                { className: M.HeaderStat },
                c.createElement(
                  "span",
                  { className: M.StatDescription },
                  (0, x.we)("#EventDashBoard_SummaryStats_TotalViews"),
                ),
                c.createElement(
                  "span",
                  { className: M.StatFigure },
                  (0, U.Dq)(t.total_read),
                ),
              ),
            ),
          ),
          Boolean(s && n) &&
            c.createElement(
              "div",
              { className: M.ModerationWarningCtn },
              c.createElement(
                "div",
                { className: M.ModerationWarning },
                (0, x.we)("#EventDashBoard_ModerationQueueWarning"),
              ),
              c.createElement(
                "a",
                {
                  href:
                    v.TS.PARTNER_BASE_URL +
                    "doc/marketing/event_tools/moderation",
                },
                (0, x.we)("#EventDashBoard_Location_ModerationTitle"),
              ),
            ),
          o &&
            c.createElement(
              "div",
              { className: (0, V.A)(M.StatsCtn) },
              s &&
                c.createElement(
                  "div",
                  {
                    className: (0, V.A)(
                      M.StatsLeftSection,
                      n && M.DisabledStats,
                    ),
                  },
                  c.createElement(
                    "div",
                    { className: M.StatsTitle_ctn },
                    c.createElement(
                      "span",
                      null,
                      (0, x.we)("#EventDashBoard_Location_LibraryHome"),
                    ),
                    c.createElement(
                      "span",
                      { className: M.ModerationNote },
                      "( ",
                      (0, x.we)("#EventDashBoard_Location_WaitingModeraion"),
                      " )",
                    ),
                  ),
                  c.createElement(
                    "div",
                    { className: M.StatsTitle },
                    c.createElement(
                      "span",
                      null,
                      (0, x.we)("#EventDashBoard_Summary_LibraryHome_Shown"),
                    ),
                    c.createElement(
                      "span",
                      null,
                      (0, U.Dq)(t.library_overview_shown),
                    ),
                  ),
                  c.createElement(
                    "div",
                    { className: M.StatsTitle },
                    c.createElement(
                      "span",
                      null,
                      (0, x.we)("#EventDashBoard_Summary_LibraryHome_Read"),
                    ),
                    c.createElement(
                      "span",
                      null,
                      (0, U.Dq)(t.library_overview_read),
                    ),
                  ),
                  c.createElement(
                    "div",
                    { className: M.StatsTitle_ctn },
                    c.createElement(
                      "span",
                      null,
                      (0, x.we)("#EventDashBoard_Location_LibraryDetail"),
                    ),
                    c.createElement(
                      "span",
                      { className: M.ModerationNote },
                      "( ",
                      (0, x.we)("#EventDashBoard_Location_WaitingModeraion"),
                      " )",
                    ),
                  ),
                  t.app_details_spotlight_shown > 0 &&
                    c.createElement(
                      c.Fragment,
                      null,
                      c.createElement(
                        "div",
                        { className: M.StatsTitle },
                        c.createElement(
                          "span",
                          null,
                          (0, x.we)(
                            "#EventDashBoard_Summary_AppDetailSpotlight_Shown",
                          ),
                        ),
                        c.createElement(
                          "span",
                          null,
                          (0, U.Dq)(t.app_details_spotlight_shown),
                        ),
                      ),
                      c.createElement(
                        "div",
                        { className: M.StatsTitle },
                        c.createElement(
                          "span",
                          null,
                          (0, x.we)(
                            "#EventDashBoard_Summary_AppDetailSpotlight_Read",
                          ),
                        ),
                        c.createElement(
                          "span",
                          null,
                          (0, U.Dq)(t.app_details_spotlight_read),
                        ),
                      ),
                    ),
                  c.createElement(
                    "div",
                    { className: M.StatsTitle },
                    c.createElement(
                      "span",
                      null,
                      (0, x.we)(
                        "#EventDashBoard_Summary_AppDetailActivity_Shown",
                      ),
                    ),
                    c.createElement(
                      "span",
                      null,
                      (0, U.Dq)(t.app_details_activity_shown),
                    ),
                  ),
                  c.createElement(
                    "div",
                    { className: M.StatsTitle },
                    c.createElement(
                      "span",
                      null,
                      (0, x.we)(
                        "#EventDashBoard_Summary_AppDetailActivity_Read",
                      ),
                    ),
                    c.createElement(
                      "span",
                      null,
                      (0, U.Dq)(t.app_details_activity_read),
                    ),
                  ),
                ),
              c.createElement(
                "div",
                { className: M.StatsRightSection },
                c.createElement(
                  "div",
                  { className: M.StatsTitle_ctn },
                  c.createElement(
                    "span",
                    null,
                    (0, x.we)("#EventDashBoard_Location_StoreDetail"),
                  ),
                ),
                c.createElement(
                  "div",
                  { className: M.StatsTitle },
                  c.createElement(
                    "span",
                    null,
                    (0, x.we)("#EventDashBoard_Summary_StoreAppPage_Shown"),
                  ),
                  c.createElement(
                    "span",
                    null,
                    (0, U.Dq)(t.store_app_page_shown),
                  ),
                ),
                c.createElement(
                  "div",
                  { className: M.StatsTitle },
                  c.createElement(
                    "span",
                    null,
                    (0, x.we)("#EventDashBoard_Summary_StoreAppPage_Read"),
                  ),
                  c.createElement(
                    "span",
                    null,
                    (0, U.Dq)(t.store_app_page_read),
                  ),
                ),
                c.createElement(
                  "div",
                  { className: M.StatsTitle_ctn },
                  c.createElement(
                    "span",
                    null,
                    (0, x.we)("#EventDashBoard_Location_CommunityDetail"),
                  ),
                ),
                c.createElement(
                  "div",
                  { className: M.StatsTitle },
                  c.createElement(
                    "span",
                    null,
                    (0, x.we)("#EventDashBoard_Summary_Community_Shown"),
                  ),
                  c.createElement(
                    "span",
                    null,
                    (0, U.Dq)(t.community_hub_shown),
                  ),
                ),
                c.createElement(
                  "div",
                  { className: M.StatsTitle },
                  c.createElement(
                    "span",
                    null,
                    (0, x.we)("#EventDashBoard_Summary_Community_Read"),
                  ),
                  c.createElement(
                    "span",
                    null,
                    (0, U.Dq)(t.community_hub_read),
                  ),
                ),
                c.createElement(
                  "div",
                  { className: M.StatsTitle_ctn },
                  c.createElement(
                    "span",
                    null,
                    (0, x.we)("#EventDashBoard_Location_NewsHubDetail"),
                  ),
                ),
                c.createElement(
                  "div",
                  { className: M.StatsTitle },
                  c.createElement(
                    "span",
                    null,
                    (0, x.we)("#EventDashBoard_Summary_NewsHub_Shown"),
                  ),
                  c.createElement("span", null, (0, U.Dq)(t.news_hub_shown)),
                ),
                c.createElement(
                  "div",
                  { className: M.StatsTitle },
                  c.createElement(
                    "span",
                    null,
                    (0, x.we)("#EventDashBoard_Summary_NewsHub_Read"),
                  ),
                  c.createElement("span", null, (0, U.Dq)(t.news_hub_read)),
                ),
              ),
            ),
        );
      }
      var me = a(45359),
        ce = a(69409),
        de = a(46416),
        _e = a(14326),
        pe = a(64641),
        ue = a.n(pe),
        ve = a(17289),
        Ee = a(44332),
        he = a(73745),
        Se = a(61336),
        ge = a(92007),
        we = a(18663);
      const De = c.lazy(() =>
          Promise.all([
            a.e(8970),
            a.e(6597),
            a.e(4607),
            a.e(4539),
            a.e(2797),
            a.e(7436),
            a.e(7403),
            a.e(9214),
            a.e(5487),
            a.e(3270),
            a.e(4796),
            a.e(9063),
            a.e(4095),
            a.e(6883),
            a.e(9105),
            a.e(283),
            a.e(177),
            a.e(8396),
          ]).then(a.bind(a, 70834)),
        ),
        ye = (0, o.PA)((e) => {
          const {
              event: t,
              lang: a,
              partnerEventStore: n,
              emoticonStore: s,
              nOverrideStartTime: r,
              nOverrideEndTime: l,
              adminPanel: o,
              otherEventRow: m,
              titleBar: d,
            } = e,
            p = t.appid,
            u = t.clanSteamID.GetAccountID(),
            v = (0, H.MU)(),
            [E, h] = (0, y.t7)(p, {
              include_assets: !0,
              include_platforms: !0,
              include_basic_info: !0,
              include_release: !0,
            }),
            [S, g] = (0, _.TB)(u);
          if (
            (c.useEffect(() => window.scrollTo(0, 0), [p, u]),
            !t.bLoaded || !g || (p && !E && 2 !== h))
          )
            return c.createElement(
              "div",
              { className: ue().FlexCenter, style: { height: "400px" } },
              c.createElement(Y.t, {
                size: "medium",
                string: (0, x.we)("#Loading"),
              }),
            );
          let w = t.GetDescriptionWithFallback(a);
          const D = (0, f.qT)(t, f.PH.k_eStoreNewsHub, "allowRelative");
          return c.createElement(be, {
            event: t,
            lang: a,
            titleBar: d,
            body: c.createElement(
              T.tH,
              null,
              c.createElement(
                "div",
                { className: L().EventDetailTitleContainer },
                c.createElement(b.r, {
                  crumbs: [
                    {
                      name: (0, x.we)("#BreadCrumbs_AllEvents"),
                      url: (0, f.qT)(
                        t,
                        f.PH.k_eStoreUsersNewsHub,
                        "allowRelative",
                      ),
                    },
                    {
                      name: (0, x.we)(
                        "#BreadCrumbs_GameEvents",
                        E?.GetName() || g.group_name,
                      ),
                      url: D,
                    },
                  ],
                }),
                c.createElement(
                  "div",
                  { className: L().EventDetailTitle },
                  t.GetNameWithFallback(a),
                ),
                t.BHasSubTitle(a) &&
                  c.createElement(
                    "div",
                    { className: L().EventDetailsSubTitle },
                    t.GetSubTitle(a),
                  ),
              ),
              Boolean(t.BEventCanShowBroadcastWidget(v)) &&
                c.createElement(
                  "div",
                  { className: L().EventBroadcastCtn },
                  c.createElement(
                    c.Suspense,
                    { fallback: null },
                    c.createElement(De, {
                      event: t,
                      bIsPreview: v,
                      accountIDs: v ? t.jsondata.broadcast_whitelist : void 0,
                    }),
                  ),
                ),
              c.createElement(
                "div",
                { className: (0, V.A)(L().EventColumns, "EventDetail") },
                c.createElement(
                  "div",
                  { className: L().EventDetailsDescription },
                  c.createElement(
                    T.tH,
                    null,
                    t.BHasTag("steam_award_nomination_request") &&
                      c.createElement(G.EventDisplaySteamAwardNomination, {
                        event: t,
                        lang: a,
                        previewMode: v,
                      }),
                    t.BHasTag("steam_award_vote_request") &&
                      c.createElement(G.WinterSaleSteamAwardVoteWrapper, {
                        appID: t.appid,
                        bIsEventActionEnabled: t.BIsEventActionEnabled(),
                        voteCategories: t.GetSteamAwardNomineeCategories(),
                      }),
                  ),
                  c.createElement(
                    T.tH,
                    null,
                    c.createElement(
                      "div",
                      {
                        className: (0, V.A)(
                          "EventDetailsBody",
                          L().EventDetailsBody,
                        ),
                      },
                      c.createElement(N.f, {
                        text: w || "",
                        partnerEventStore: n,
                        showErrorInfo: v,
                        event: t,
                        languageOverride: a,
                      }),
                      Boolean(
                        t.jsondata.bSaleEnabled && t.jsondata.sale_vanity_id,
                      ) &&
                        c.createElement(
                          "div",
                          { className: (0, V.A)(L().ReadMoreCnt) },
                          c.createElement(ce.m, { gidEvent: t.GID }),
                          c.createElement(
                            "a",
                            {
                              className: (0, V.A)(O().Button, "LinkButton"),
                              href: (0, Se.k2)(t.GetSaleURL()),
                            },
                            (0, x.we)("#Event_Button_VisitSalePage"),
                          ),
                        ),
                      Boolean(t.jsondata.associated_appid) &&
                        c.createElement(ge.e, {
                          id: t.jsondata.associated_appid,
                          inputType: "game",
                        }),
                    ),
                  ),
                  c.createElement(
                    T.tH,
                    null,
                    c.createElement(F._, { event: t }),
                  ),
                  Boolean(t.jsondata.read_more_link) &&
                    c.createElement(
                      "div",
                      { className: (0, V.A)(L().ReadMoreCnt) },
                      c.createElement(
                        z.uU,
                        {
                          className: (0, V.A)(O().Button),
                          href: t.jsondata.read_more_link,
                        },
                        (0, x.we)("#EventEmail_Button_ClickForMoreDetails"),
                      ),
                    ),
                  c.createElement("span", { className: O().Clear }),
                  c.createElement(
                    T.tH,
                    null,
                    Boolean(t.appid) &&
                      c.createElement(we.lS, { appid: t.appid }),
                    Boolean(t.jsondata.sale_social_media_items) &&
                      c.createElement(we.lz, {
                        gidClanEvent: t.GID,
                        rgSocial: t.jsondata.sale_social_media_items,
                      }),
                  ),
                ),
                c.createElement(
                  T.tH,
                  null,
                  c.createElement(Ie, {
                    event: t,
                    lang: a,
                    nOverrideStartTime: r,
                    nOverrideEndTime: l,
                  }),
                ),
              ),
              c.createElement(C.F, {
                eventModel: t,
                emoticonStore: s,
                partnerEventStore: n,
              }),
            ),
            postbody: c.createElement(T.tH, null, o, m),
            footer: c.createElement(
              T.tH,
              null,
              c.createElement(
                "div",
                { className: L().AppSummaryCtn },
                c.createElement(
                  "div",
                  { className: L().EventBodyPosition },
                  Boolean(E) &&
                    c.createElement(
                      "div",
                      { className: L().AppSummaryWidgetTitleCtn },
                      c.createElement(
                        "span",
                        { className: L().Title },
                        (0, x.we)("#CreatorHome_ThisGame"),
                      ),
                      c.createElement(
                        "div",
                        {
                          className: (0, V.A)(
                            L().AppSummaryWidgetCtn,
                            "AppSummaryWidgetCtn",
                          ),
                        },
                        c.createElement(me.pb, {
                          id: t.appid,
                          type: (0, i.U)(E.GetAppType()),
                        }),
                      ),
                    ),
                  c.createElement(I.LG, { appid: t.appid, bSmallFormat: !0 }),
                ),
              ),
            ),
          });
        }),
        be = (0, o.PA)((e) => {
          const {
              event: t,
              lang: a,
              titleBar: n,
              body: i,
              postbody: r,
              footer: l,
            } = e,
            o = t.GetImageURLWithFallback("background", a),
            m = t.BIsImageSafeForAllAges("background", a),
            d = "lang_" + (0, s.ww)(a),
            _ = !!o && t.BImageNeedScreenshotFallback("background", a);
          return c.createElement(
            "div",
            {
              className: (0, V.A)(
                L().EventDetailsPageContainer,
                d,
                O().PartnerEventFont,
                m
                  ? L().DetailArtworkAgeAppropriate
                  : L().DetailArtworkAgeNotAppropriate,
                !o && L().NoTitleArtwork,
                _ && L().ScreenshotInsteadOfCover,
              ),
            },
            c.createElement(A.vA, {
              appId: t.appid,
              clanId: t.clanSteamID.GetAccountID(),
            }),
            n,
            c.createElement(Te, { strImageURL: o }),
            c.createElement(Ae, { strImageURL: o, body: i, postbody: r }),
            Boolean(l) && c.createElement(T.tH, null, l),
          );
        }),
        Te = (e) => {
          const { strImageURL: t } = e;
          return c.createElement(
            "div",
            { className: L().EventCoverImageCtn },
            c.createElement(
              "div",
              { className: L().EventCoverImageBlr },
              t &&
                c.createElement(
                  c.Fragment,
                  null,
                  c.createElement("div", {
                    className: L().EventCoverImageFuzz,
                    style: {
                      backgroundColor: "rgb(37, 41, 46)",
                      backgroundImage: `url(${t})`,
                    },
                  }),
                  c.createElement("div", {
                    className: L().EventCoverImage,
                    style: {
                      backgroundColor: "rgb(37, 41, 46)",
                      backgroundImage: `url(${t})`,
                    },
                  }),
                ),
            ),
            t && c.createElement("div", { className: L().CoverImageGradient }),
          );
        },
        Ae = (e) => {
          const { body: t, postbody: a, strImageURL: n } = e;
          return c.createElement(
            "div",
            { className: L().EventBodyCtn },
            c.createElement("div", { className: L().EventBackgroundBlurCtn }),
            c.createElement(
              "div",
              { className: L().EventBodyPosition },
              c.createElement(
                "div",
                { className: L().EventBody },
                Boolean(n) &&
                  c.createElement("div", {
                    className: L().EventBackgroundBlur,
                    style: { backgroundImage: `url(${n})` },
                  }),
                c.createElement(T.tH, null, t),
              ),
              Boolean(a) && c.createElement(T.tH, null, a),
            ),
          );
        };
      function Ie(e) {
        const {
            event: t,
            lang: a,
            nOverrideStartTime: n,
            nOverrideEndTime: s,
          } = e,
          [i, r, l, o, d, u] = (0, m.q3)(() => [
            t.appid,
            t.clanSteamID,
            p.HD.GetTimeNowWithOverride(),
            n || t.GetStartTimeAndDateUnixSeconds(),
            t.GetCategoryAsString(),
            t.type,
          ]),
          [v] = (0, y.t7)(i, {
            include_assets: !0,
            include_platforms: !0,
            include_release: !0,
          }),
          [E, h] = (0, _.TB)(r.GetAccountID());
        return h
          ? t.appid && !v
            ? null
            : c.createElement(
                "div",
                { className: L().EventDetailTitleDesc },
                c.createElement(
                  "div",
                  { className: L().EventDetailsSticky },
                  h.is_ogg
                    ? c.createElement(Ce, { appid: h.appid })
                    : c.createElement(Ne, { clanSteamID: r }),
                  c.createElement(k.j, {
                    event: t,
                    nOverrideEndTime: s,
                    nOverrideStartTime: n,
                  }),
                  28 !== u &&
                    l < o &&
                    c.createElement(
                      "div",
                      { className: L().EventDetailTimeInfo },
                      c.createElement(B.j, { eventModel: t, lang: a }),
                    ),
                  c.createElement(
                    "div",
                    { className: L().EventDetailUserType },
                    c.createElement(
                      "div",
                      { className: L().RightSideTitles },
                      (0, x.we)("#EventDisplay_RightColumnTitle_EventType"),
                    ),
                    c.createElement(
                      "div",
                      { className: L().EventDetailsType },
                      d,
                      " ",
                    ),
                  ),
                  c.createElement(Ge, { event: t, bIsOGG: h.is_ogg }),
                ),
              )
          : ((0, Ee.w)(
              h,
              "EventDetailsRightColumn - clan info (" +
                r.GetAccountID() +
                ") is missing",
            ),
            null);
      }
      function Ce(e) {
        const { appid: t } = e;
        (0, Ee.w)(t && 0 != t, "Expected Appid In Game Info Section");
        const [a] = (0, y.t7)(t, {
          include_assets: !0,
          include_platforms: !0,
          include_release: !0,
        });
        return c.createElement(
          "div",
          { className: L().EventDetailGameCallToAction },
          c.createElement(
            "div",
            { className: L().RightSideTitles },
            d.zK.some((e) => t === e)
              ? (0, x.we)("#EventDisplay_RightColumnTitle_Blog")
              : (0, x.we)("#EventDisplay_RightColumnTitle_Game"),
          ),
          c.createElement(de.W, {
            imageType: "header",
            capsule: { id: t, type: "game" },
            bHidePriceIfOwned: !0,
            bHideStatusBanners: !0,
          }),
          c.createElement(
            "div",
            { className: (0, V.A)(L().GameActions) },
            a
              ? c.createElement(_e._, {
                  appid: t,
                  bIsFree: a.BIsFree(),
                  bIsComingSoon: a.BIsComingSoon(),
                  className: L().ActionButton,
                })
              : c.createElement(Y.t, { size: "small", position: "center" }),
          ),
        );
      }
      function Ne(e) {
        const { clanSteamID: t } = e,
          [a, n] = (0, _.TB)(t.GetAccountID());
        return n
          ? c.createElement(
              "div",
              { className: L().EventDetailGameCallToAction },
              c.createElement(
                "div",
                { className: L().RightSideTitles },
                n.group_name,
              ),
              c.createElement(
                ve.m,
                { href: (0, Se.k2)(_.ac.GetCreatorStoreURL(t)) },
                c.createElement("div", {
                  className: L().EventDetailsAvatar,
                  style: { backgroundImage: `url(${n.avatar_full_url})` },
                }),
              ),
            )
          : ((0, Ee.w)(
              n,
              "EventDetailsRightCreatorInfo - clan info (" +
                t.GetAccountID() +
                ") is missing",
            ),
            null);
      }
      const fe = ["", "en-US", "en-GB", "zh-CN", "es-ES", "br-BR"];
      let Be = class extends c.Component {
        GenerateOptions() {
          let e = new Array();
          return (
            fe.forEach((t) =>
              e.push(c.createElement("option", { key: t, value: t }, t)),
            ),
            e
          );
        }
        OnLanguageChange(e) {
          this.props.fnOverrideLocale(e.currentTarget.value);
        }
        render() {
          if (
            !u.KN.Get().GetPartnerEventPermissions(this.props.event.clanSteamID)
              .valve_admin
          )
            return c.createElement("div", null);
          let e = this.GenerateOptions();
          return c.createElement(
            "div",
            { style: { paddingTop: 10 } },
            c.createElement(
              "div",
              {
                className: (0, V.A)(
                  O().FlexColumnContainer,
                  O().ValveOnlyBackground,
                ),
              },
              c.createElement(
                "div",
                {
                  className: (0, V.A)(
                    O().EventEditorTextTitle,
                    O().ValveSupportOnly,
                  ),
                },
                "Valve Support Tools (VO)",
              ),
              c.createElement("span", null, "Override Locale"),
              c.createElement("select", { onChange: this.OnLanguageChange }, e),
            ),
          );
        }
      };
      (0, n.Cg)([he.oI], Be.prototype, "OnLanguageChange", null),
        (Be = (0, n.Cg)([o.PA], Be));
      let Ge = class extends c.Component {
        m_cancelSignal = l().CancelToken.source();
        componentDidMount() {
          const { event: e } = this.props;
          e.BIsPartnerEvent() &&
            e.BIsVisibleEvent() &&
            u.KN.Get()
              .LoadSingleAppEventPermissions(e.clanSteamID)
              .then((t) => {
                t &&
                  t.can_edit &&
                  D.LoadStatsForEvents(
                    e.clanSteamID,
                    [e.GID],
                    this.m_cancelSignal,
                  );
              });
        }
        componentWillUnmount() {
          this.m_cancelSignal.cancel("EventDisplayEditorInfo cancelled");
        }
        render() {
          const { event: e, bIsOGG: t } = this.props;
          if (!u.KN.Get().GetPartnerEventPermissions(e.clanSteamID).can_edit)
            return null;
          const a =
            e.BIsPartnerEvent() &&
            e.BIsVisibleEvent() &&
            D.GetStatsFor(e.clanSteamID, e.GID);
          return c.createElement(
            T.tH,
            null,
            c.createElement(
              "div",
              { className: L().EditorStatsCtn },
              c.createElement(
                "div",
                { className: L().EditorStatsRow },
                c.createElement(
                  "span",
                  null,
                  (0, x.we)("#EventEditor_Comments"),
                ),
                c.createElement("span", null, (0, U.Dq)(e.nCommentCount)),
              ),
              c.createElement(
                "div",
                { className: L().EditorStatsRow },
                c.createElement(
                  "span",
                  null,
                  (0, x.we)("#EventEditor_UpVotes"),
                ),
                c.createElement(
                  "span",
                  null,
                  e.nVotesUp ? (0, U.Dq)(e.nVotesUp) : 0,
                ),
              ),
              c.createElement(
                "div",
                { className: L().EditorStatsRow },
                c.createElement(
                  "span",
                  null,
                  (0, x.we)("#EventEditor_DownVotes"),
                ),
                c.createElement(
                  "span",
                  null,
                  e.nVotesDown ? (0, U.Dq)(e.nVotesDown) : 0,
                ),
              ),
            ),
            Boolean(a) &&
              c.createElement(
                "div",
                { className: L().EditorStatsCtn },
                (0, x.we)("#EventDashBoard_SummaryStats_Admin_Title"),
                c.createElement(oe, {
                  summary: a.m_stats,
                  clanSteamID: e.clanSteamID,
                  bIsAllowedInLibrary: t,
                  bEventIsInModerationQueue: (0, d.Dn)(e),
                  bCompact: !0,
                }),
              ),
          );
        }
      };
      Ge = (0, n.Cg)([o.PA], Ge);
    },
    99637: (e, t, a) => {
      "use strict";
      a.d(t, { K: () => g });
      var n = a(90626),
        s = a(92298),
        i = a.n(s),
        r = a(44894),
        l = a(44165),
        o = a(95695),
        m = a.n(o),
        c = a(52038),
        d = a(61859),
        _ = a(32754),
        p = a(12916),
        u = a.n(p),
        v = a(87937),
        E = a.n(v);
      const h = "hh:mm a",
        S = "HH:mm";
      function g(e) {
        const {
          nLatestTime: t,
          nEarliestTime: a,
          fnGetTimeToUpdate: s,
          onError: o,
          strAlsoShowTimeZone: p,
          disabled: v,
          bNoDefaultDate: g,
          className: b,
          strDescToolTip: T,
          strDescription: A,
          bShowTimeZone: I,
          strInvalidDateTimeLocalizedMsg: C,
          fnIsValidDateTime: N,
          bWeekdaysOnly: f,
          fnSetTimeToUpdate: B,
          bForce24HourFormat: G,
        } = e;
        let P =
          (function () {
            const e = E()("2025-01-14T13:00:00");
            return e.format("LT").toLowerCase().includes("13");
          })() || G
            ? S
            : h;
        const L = s(),
          [k, H] = n.useState(L > 0 ? E()(1e3 * L) : null),
          [F, R] = n.useState(),
          [O, V] = n.useState(),
          x = (function (e, t, a, s, i) {
            const r = s && s(),
              l = t && !D(t).isValid(),
              o = e && !y(e).isValid();
            let m = null;
            (o || l || "string" == typeof r || !1 === r) &&
              ((m = (0, d.we)(
                a || "#DateTimePicker_Fallback_Invalid_DateTime",
              )),
              o
                ? (m = (0, d.we)("#DateTimePicker_Time_CannotParse"))
                : l
                  ? (m = (0, d.we)("#DateTimePicker_Date_CannotParse"))
                  : "string" == typeof r && (m = r));
            return (
              n.useEffect(() => {
                i && i(m);
              }, [m, i]),
              m
            );
          })(F, O, C, N, o),
          M = !o && x;
        let U, W;
        if (t && a && t == a && a > l.HD.GetTimeNowWithOverride()) {
          const e = E().unix(a);
          (U = {
            hours: { max: e.hour(), min: e.hour(), step: 0 },
            minutes: { max: e.minute(), min: e.minute(), step: 0 },
            seconds: { max: e.seconds(), min: e.seconds(), step: 0 },
            milliseconds: { max: 0, min: 0, step: 0 },
          }),
            (P = S);
        }
        L || !a || g || (W = E().unix(a));
        const j = E().tz.guess(),
          z = E().unix(L).tz(j),
          K = !!p && j != p && E().unix(L).tz(p),
          {
            fnOnInput: q,
            fnOnInputBlur: Q,
            fnOnChange: Y,
          } = w(
            D,
            (e) => {
              if (v) return;
              V(null);
              const t = s(),
                a = E().unix(t || l.HD.GetTimeNowWithOverride());
              (e = e.clone()).hour(a.hour()),
                e.minute(a.minute()),
                e.second(0),
                B(e.unix()),
                H(e);
            },
            V,
          ),
          {
            fnOnInput: Z,
            fnOnInputBlur: X,
            fnOnChange: J,
          } = w(
            y,
            (e) => {
              if (v) return;
              R(null);
              let t = s(),
                n = 0;
              if (t) {
                const a = E().unix(t);
                (e = e.clone()).year(a.year()),
                  e.month(a.month()),
                  e.date(a.date()),
                  (n = e.unix());
              } else {
                n =
                  E().unix(a).hour(0).second(0).minutes(0).unix() +
                  3600 * e.hour() +
                  60 * e.minutes();
              }
              B(n), H(E().unix(n));
            },
            R,
          );
        return n.createElement(
          "div",
          { className: (0, c.A)(u().EventTimeSection, b) },
          n.createElement(
            "div",
            { className: (0, c.A)(u().EventTimeTitle, "DialogLabel") },
            n.createElement(
              _.he,
              { toolTipContent: T, direction: "top" },
              Boolean(A) && n.createElement("span", null, A),
            ),
            M &&
              n.createElement(
                "span",
                { className: u().DateErrorCtn },
                n.createElement("img", { src: r.A }),
                M,
              ),
          ),
          n.createElement(
            "div",
            { className: m().FlexRowContainer },
            n.createElement(
              "div",
              { className: (0, c.A)(m().InputBorder, u().TimeBlock) },
              n.createElement(i(), {
                onChange: Y,
                timeFormat: !1,
                value: null != O ? O : k,
                isValidDate: (e) =>
                  !v &&
                  (function (e, t, a, n) {
                    const s = E().unix(e).hour(0).seconds(0).minute(0);
                    let i = n.unix() >= s.unix();
                    if (i && t && t >= e) {
                      const e = E().unix(t).hour(23).minute(59).seconds(59);
                      i = n.unix() <= e.unix();
                    }
                    i &&
                      a &&
                      ((0 != n.weekday() && 6 != n.weekday()) || (i = !1));
                    return i;
                  })(a, t, f, e),
                initialValue: W,
                inputProps: {
                  placeholder: (0, d.we)("#DateTimePicker_Enter_Date"),
                  className: (0, c.A)(
                    u().DateWidth,
                    "DialogInput",
                    "DialogTextInputBase",
                  ),
                  disabled: v,
                  onChange: (e) => q(e.currentTarget.value),
                  onBlur: (e) => Q(e.currentTarget.value),
                },
              }),
              !!K &&
                n.createElement(
                  "div",
                  { className: u().PacificTimeHint },
                  K.format("L"),
                ),
            ),
            n.createElement(
              "div",
              { className: (0, c.A)(m().InputBorder, u().TimeBlock) },
              n.createElement(i(), {
                onChange: J,
                dateFormat: !1,
                timeFormat: P,
                timeConstraints: U,
                value: null != F ? F : k,
                inputProps: {
                  placeholder: (0, d.we)("#DateTimePicker_Enter_Time"),
                  className: (0, c.A)(
                    u().TimeWidth,
                    "DialogInput",
                    "DialogTextInputBase",
                  ),
                  disabled: v,
                  onChange: (e) => Z(e.currentTarget.value),
                  onBlur: (e) => X(e.currentTarget.value),
                },
              }),
              !!K &&
                n.createElement(
                  "div",
                  { className: u().PacificTimeHint },
                  K.format("LT"),
                ),
            ),
            I &&
              n.createElement(
                "div",
                null,
                n.createElement(
                  "div",
                  { className: u().TimeZone },
                  z.zoneAbbr(),
                ),
                !!K &&
                  n.createElement(
                    "div",
                    { className: u().TimeZone },
                    K.zoneAbbr(),
                  ),
              ),
          ),
          Boolean(U) &&
            n.createElement(
              "div",
              null,
              (0, d.we)("#DateTimePicker_DateTime_Fixed"),
            ),
        );
      }
      function w(e, t, a) {
        const [s, i] = n.useState(!1);
        return {
          fnOnInput: (e) => {
            a(e), i(!0);
          },
          fnOnInputBlur: (a) => {
            if (s) {
              const n = e(a);
              n.isValid() && t(n);
            }
            i(!1);
          },
          fnOnChange: (a) => {
            if (!s)
              if ("string" == typeof a) {
                const n = e(a);
                n.isValid() && t(n);
              } else t(a);
          },
        };
      }
      function D(e) {
        return E()(
          e,
          (function () {
            const e = E()("2025-01-14").format("L").split(/[-/.]/),
              t = e.indexOf("14");
            return e.indexOf("01") < t;
          })()
            ? "M/D/YYYY"
            : "D/M/YYYY",
          !1,
        );
      }
      function y(e) {
        return E()(e, [h, S], !1);
      }
    },
    43068: (e, t, a) => {
      "use strict";
      a.d(t, { P: () => T });
      var n = a(41735),
        s = a.n(n),
        i = a(34629),
        r = a(14947),
        l = a(78327),
        o = a(68797),
        m = a(2160);
      class c {
        m_objApprovalPriviledge = null;
        m_LoadingPriviledgePromise = null;
        BHasSteamChinaAppApprovalPriviledge() {
          return this.m_objApprovalPriviledge?.bHasAccess;
        }
        async HintLoadAppApprovalPriviledge() {
          return this.m_objApprovalPriviledge
            ? this.m_objApprovalPriviledge
            : (this.m_LoadingPriviledgePromise ||
                (this.m_LoadingPriviledgePromise =
                  this.InternalLoadAppApprovalPriviledge()),
              this.m_LoadingPriviledgePromise);
        }
        async InternalLoadAppApprovalPriviledge() {
          const e =
            l.TS.STORE_BASE_URL + "events_admin/ajaxgetscapprovalpriviledge";
          try {
            const t = await s().get(e, { withCredentials: !0 });
            if (1 == t?.data?.success)
              return (
                (this.m_objApprovalPriviledge = {
                  bHasAccess: t.data.bHasAccess,
                }),
                this.m_objApprovalPriviledge
              );
          } catch (e) {
            const t = (0, o.H)(e);
            console.error(
              "CCuratorListStore.InternalLoadAppApprovalPriviledge: error on load: " +
                t.strErrorMsg,
              t,
            );
          }
          return { bHasAccess: !1 };
        }
        static s_Singleton;
        static Get() {
          return c.s_Singleton || (c.s_Singleton = new c()), c.s_Singleton;
        }
        constructor() {
          (0, r.Gn)(this);
          let e = (0, l.Tc)("sc_app_privildge", "application_config");
          this.ValidateStoreDefault(e)
            ? ("dev" === l.TS.WEB_UNIVERSE &&
                console.log(
                  "DEV_DEBUG: CSteamChinaStore: Loading payload from data-*, bHasAccess: " +
                    e.bHasAccess,
                ),
              (this.m_objApprovalPriviledge = e),
              (this.m_LoadingPriviledgePromise = null))
            : (l.iA.logged_in && l.TS.EREALM === m.TU.k_ESteamRealmChina) ||
              (this.m_objApprovalPriviledge = { bHasAccess: !1 });
        }
        ValidateStoreDefault(e) {
          return e && "object" == typeof e && "boolean" == typeof e.bHasAccess;
        }
      }
      (0, i.Cg)([r.sH], c.prototype, "m_objApprovalPriviledge", void 0);
      var d = a(75844),
        _ = a(90626),
        p = a(17720),
        u = a(60746),
        v = a(30756),
        E = a(90316),
        h = a(95695),
        S = a(51706),
        g = a(738),
        w = a(22797),
        D = a(52038),
        y = a(56011),
        b = a(61859);
      const T = (0, d.PA)((e) => {
          const [t, a] = _.useState(null),
            { eventModel: n } = e;
          let i = n.clanSteamID.GetAccountID();
          _.useEffect(() => {
            const e = s().CancelToken.source();
            return (
              (async () => {
                const t = p.b.InitFromClanID(i),
                  n = await u.KN.Get().LoadSingleAppEventPermissions(t),
                  s = await c.Get().HintLoadAppApprovalPriviledge();
                e.token.reason ||
                  a(l.iA.is_support || n.can_edit || s.bHasAccess);
              })(),
              () => e.cancel("SteamChinaAdminPanel is unmounting")
            );
          }, [i]);
          const r = p.b.InitFromClanID(i);
          return l.iA.is_support ||
            u.KN.Get().GetPartnerEventPermissions(r).can_edit
            ? _.createElement(v.g, {
                eventModel: n,
                partnerEventStore: e.partnerEventStore,
                addtionalAdminButtons: t
                  ? [
                      _.createElement(A, {
                        key: "removesteamchina",
                        eventModel: n,
                      }),
                    ]
                  : void 0,
              })
            : c.Get().BHasSteamChinaAppApprovalPriviledge()
              ? _.createElement(
                  "div",
                  { className: E.DisplayAdminPanel },
                  _.createElement(
                    "span",
                    { className: E.DisplayAdminPanel_Title },
                    (0, b.we)("#EventDisplay_Admin_Title"),
                  ),
                  _.createElement(A, {
                    key: "removesteamchina",
                    eventModel: n,
                  }),
                )
              : null;
        }),
        A = (e) => {
          const { eventModel: t } = e;
          return _.createElement(
            "div",
            {
              className: (0, D.A)(
                h.Button,
                E.AdminButton,
                h.ValveOnlyBackground,
              ),
              onClick: (a) => {
                let n = !1;
                (0, g.pg)(
                  _.createElement(
                    S.o0,
                    {
                      strTitle: (0, b.we)(
                        "#EventAdmin_Moderation_HideEventInSC",
                      ),
                      strDescription: (0, b.we)(
                        "#EventAdmin_Moderation_HideEventInSC_Desc",
                      ),
                      bDestructiveWarning: !0,
                      closeModal: e.closeModal,
                      onOK: () => {
                        (n = !0),
                          (async () => {
                            let a = new URLSearchParams();
                            a.append("sessionid", l.TS.SESSIONID),
                              a.append(
                                "clan_accountid",
                                "" + t.clanSteamID.GetAccountID(),
                              ),
                              a.append("gid_clan_event", "" + t.GID);
                            let n = !1,
                              i = 0;
                            try {
                              const e = `${l.TS.STORE_BASE_URL}/events_admin/ajaxhidefromsteamchina`,
                                r = await s().post(e, a, {
                                  withCredentials: !0,
                                });
                              (n =
                                1 == r?.data?.success ||
                                29 == r?.data?.success),
                                29 == r?.data?.success &&
                                  console.warn(
                                    `RemoveEventFromSteamChinaButton: we receive duplicate request ${t.clanSteamID.GetAccountID()} : ${t.GID}; event is still removed from SC`,
                                  ),
                                (i = r?.data?.success);
                            } catch (e) {
                              const t = (0, o.H)(e);
                              (i = t.errorCode),
                                console.error(
                                  "RemoveEventFromSteamChinaButton: error " +
                                    t.strErrorMsg,
                                  t,
                                );
                            }
                            e.closeModal && e.closeModal(),
                              (0, g.pg)(
                                n
                                  ? _.createElement(
                                      S.o0,
                                      { bAlertDialog: !0 },
                                      (0, b.we)("#EventDisplay_Share_Success"),
                                    )
                                  : _.createElement(
                                      S.KG,
                                      null,
                                      (0, b.we)("#EventDisplay_Share_Failure") +
                                        " " +
                                        i,
                                    ),
                                window,
                              );
                          })();
                      },
                    },
                    n &&
                      _.createElement(w.t, {
                        size: "medium",
                        position: "center",
                      }),
                  ),
                  (0, y.uX)(a),
                );
              },
            },
            (0, b.we)("#EventAdmin_Moderation_HideEventInSC"),
          );
        };
    },
  },
]);
