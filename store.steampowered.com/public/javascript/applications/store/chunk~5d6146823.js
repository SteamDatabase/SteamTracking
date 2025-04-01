/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [6115],
  {
    66272: (e) => {
      e.exports = { BreadContainer: "_3jswbLK3E0Uf47oGyc6qUG" };
    },
    5065: (e) => {
      e.exports = {
        TotalsCtn: "FQKvUJASJ1JVJ28HSbIt-",
        SmallStatsMode: "_2A2-p9rNzm72Zu74g7dQCs",
        StatsTitle: "_3YLaBiVHp_mPV3f8YD9MrK",
        StatsCtnTitle: "_1LlRFhVuQF26o2UG7Vg5s3",
        VisibilityNote: "_1G-k1HX2M60Sx-vP4SEe5k",
        NormalStatsMode: "_281bvRTUxUmexZdtBNTNPI",
        StatFigure: "_30CaMtSkoYlQf82iQSskB6",
        StatsCtn: "hWCs41T0tFwuGLTHxvthv",
        StatsLeftSection: "_3L-uhfyc1hVkz4mrHwVm9x",
        StatsRightSection: "_1yibDM6eeZtYQXEdjO_Scg",
        ModerationWarningCtn: "_3Jwi3DKhGEzxba2BP4X8wo",
        ModerationWarning: "_1aIU0L2u2GWHUvc2oV1zyd",
        ModerationNote: "_11Z9Iz4InEbE8AVPdJ6iFY",
        DisabledStats: "_2Zp-jzTV09Qjj3uTxcFLN3",
      };
    },
    22305: (e, t, a) => {
      "use strict";
      a.d(t, { r: () => m });
      var n = a(90626),
        s = a(66272),
        r = a(52038),
        l = a(17083),
        i = a(45699),
        o = a(76217);
      function m(e) {
        const { crumbs: t, className: a } = e;
        return t && 0 != t.length
          ? n.createElement(
              "div",
              { className: (0, r.A)(s.BreadContainer, a) },
              n.createElement(
                o.Z,
                { className: "blockbg", "flow-children": "row" },
                t.map((e) => {
                  const t = new Array();
                  return (
                    e.url.startsWith("http")
                      ? t.push(
                          n.createElement(
                            i.Ii,
                            { key: "anchor_" + e.name, href: e.url },
                            e.name,
                          ),
                        )
                      : t.push(
                          n.createElement(
                            l.N_,
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
    77156: (e, t, a) => {
      "use strict";
      a.d(t, { K8: () => le, P2: () => ie, jA: () => se });
      var n = a(34629),
        s = a(22837),
        r = a(20019),
        l = a(41735),
        i = a.n(l),
        o = a(75844),
        m = a(65946),
        c = a(90626),
        _ = a(77516),
        d = a(4796),
        p = a(44165),
        v = a(60746),
        u = a(78327),
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
            let e = (0, u.Tc)("trackingdatasummary", "application_config");
            this.ValidateStoreDefault(e) &&
              this.m_mapSummaryStats.set(e.clan_account_id, new g(e));
            let t = (0, u.Tc)("trackingdataevents", "application_config");
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
          let r = (0, u.xv)() + "actions/ajaxgetpartnereventsreport",
            l = {
              sessionid: u.TS.SESSIONID,
              clan_account_id: e.GetAccountID(),
              gidlist: s.join(","),
            };
          try {
            let t = await i().get(r, {
              params: l,
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
      const y = new w();
      var D = a(55263),
        b = a(22305),
        A = a(84811),
        N = a(41550),
        I = a(32541),
        C = a(42011),
        T = a(43616),
        B = a(75113),
        f = a(43667),
        G = a(64940),
        P = a(90316),
        L = a.n(P),
        k = a(67417),
        H = a(96971),
        M = a(71746),
        R = a(95695),
        F = a.n(R),
        U = a(52038),
        V = a(61859),
        j = a(5065),
        O = a(82227);
      let q = class extends c.Component {
        render() {
          const {
            summary: e,
            bEventIsInModerationQueue: t,
            bIsAllowedInLibrary: a,
            bIncludeDescription: n,
          } = this.props;
          return 0 == e.total_read + e.total_showm
            ? null
            : c.createElement(
                "div",
                null,
                c.createElement(
                  "div",
                  {
                    className: (0, U.A)(
                      j.StatsCtnTitle,
                      n ? j.NormalStatsMode : j.SmallStatsMode,
                    ),
                  },
                  c.createElement(
                    "h1",
                    null,
                    (0, V.we)("#EventDashBoard_SummaryStats_Title"),
                  ),
                  Boolean(n) &&
                    c.createElement(
                      "p",
                      null,
                      (0, V.we)("#EventDashBoard_SummaryStats_Desc"),
                      " ",
                      c.createElement(
                        "a",
                        {
                          href: "https://partner.steamgames.com/doc/marketing/event_tools/stats",
                          target: "_blank",
                        },
                        (0, V.we)("#EventDashBoard_SummaryStats_Link"),
                      ),
                    ),
                ),
                c.createElement(
                  "div",
                  {
                    className: (0, U.A)(
                      j.TotalsCtn,
                      n ? j.NormalStatsMode : j.SmallStatsMode,
                    ),
                  },
                  c.createElement(
                    "div",
                    { className: j.StatsTitle },
                    c.createElement(
                      "span",
                      { className: j.StatDescription },
                      (0, V.we)(
                        "#EventDashBoard_SummaryStats_TotalImpressions",
                      ),
                    ),
                    c.createElement(
                      "span",
                      { className: j.StatFigure },
                      (0, O.Dq)(e.total_showm),
                    ),
                  ),
                  c.createElement(
                    "div",
                    { className: j.StatsTitle },
                    c.createElement(
                      "span",
                      { className: j.StatDescription },
                      (0, V.we)("#EventDashBoard_SummaryStats_TotalViews"),
                    ),
                    c.createElement(
                      "span",
                      { className: j.StatFigure },
                      (0, O.Dq)(e.total_read),
                    ),
                  ),
                ),
                Boolean(a && t) &&
                  c.createElement(
                    "div",
                    { className: j.ModerationWarningCtn },
                    c.createElement(
                      "div",
                      { className: j.ModerationWarning },
                      (0, V.we)("#EventDashBoard_ModerationQueueWarning"),
                    ),
                    c.createElement(
                      "a",
                      {
                        href:
                          u.TS.PARTNER_BASE_URL +
                          "doc/marketing/event_tools/moderation",
                      },
                      (0, V.we)("#EventDashBoard_Location_ModerationTitle"),
                    ),
                  ),
                c.createElement(
                  "div",
                  {
                    className: (0, U.A)(
                      j.StatsCtn,
                      n ? j.NormalStatsMode : j.SmallStatsMode,
                    ),
                  },
                  a &&
                    c.createElement(
                      "div",
                      {
                        className: (0, U.A)(
                          j.StatsLeftSection,
                          t && j.DisabledStats,
                        ),
                      },
                      c.createElement(
                        "div",
                        { className: j.StatsTitle_ctn },
                        c.createElement(
                          "span",
                          null,
                          (0, V.we)("#EventDashBoard_Location_LibraryHome"),
                        ),
                        c.createElement(
                          "span",
                          { className: j.ModerationNote },
                          "( ",
                          (0, V.we)(
                            "#EventDashBoard_Location_WaitingModeraion",
                          ),
                          " )",
                        ),
                      ),
                      c.createElement(
                        "div",
                        { className: j.StatsTitle },
                        c.createElement(
                          "span",
                          null,
                          (0, V.we)(
                            "#EventDashBoard_Summary_LibraryHome_Shown",
                          ),
                        ),
                        c.createElement(
                          "span",
                          null,
                          (0, O.Dq)(e.library_overview_shown),
                        ),
                      ),
                      c.createElement(
                        "div",
                        { className: j.StatsTitle },
                        c.createElement(
                          "span",
                          null,
                          (0, V.we)("#EventDashBoard_Summary_LibraryHome_Read"),
                        ),
                        c.createElement(
                          "span",
                          null,
                          (0, O.Dq)(e.library_overview_read),
                        ),
                      ),
                      c.createElement("br", null),
                      c.createElement(
                        "div",
                        { className: j.StatsTitle_ctn },
                        c.createElement(
                          "span",
                          null,
                          (0, V.we)("#EventDashBoard_Location_LibraryDetail"),
                        ),
                        c.createElement(
                          "span",
                          { className: j.ModerationNote },
                          "( ",
                          (0, V.we)(
                            "#EventDashBoard_Location_WaitingModeraion",
                          ),
                          " )",
                        ),
                      ),
                      c.createElement(
                        "div",
                        { className: j.StatsTitle },
                        c.createElement(
                          "span",
                          null,
                          (0, V.we)(
                            "#EventDashBoard_Summary_AppDetailSpotlight_Shown",
                          ),
                        ),
                        c.createElement(
                          "span",
                          null,
                          (0, O.Dq)(e.app_details_spotlight_shown),
                        ),
                      ),
                      c.createElement(
                        "div",
                        { className: j.StatsTitle },
                        c.createElement(
                          "span",
                          null,
                          (0, V.we)(
                            "#EventDashBoard_Summary_AppDetailSpotlight_Read",
                          ),
                        ),
                        c.createElement(
                          "span",
                          null,
                          (0, O.Dq)(e.app_details_spotlight_read),
                        ),
                      ),
                      c.createElement(
                        "div",
                        { className: j.StatsTitle },
                        c.createElement(
                          "span",
                          null,
                          (0, V.we)(
                            "#EventDashBoard_Summary_AppDetailActivity_Shown",
                          ),
                        ),
                        c.createElement(
                          "span",
                          null,
                          (0, O.Dq)(e.app_details_activity_shown),
                        ),
                      ),
                      c.createElement(
                        "div",
                        { className: j.StatsTitle },
                        c.createElement(
                          "span",
                          null,
                          (0, V.we)(
                            "#EventDashBoard_Summary_AppDetailActivity_Read",
                          ),
                        ),
                        c.createElement(
                          "span",
                          null,
                          (0, O.Dq)(e.app_details_activity_read),
                        ),
                      ),
                    ),
                  c.createElement(
                    "div",
                    { className: j.StatsRightSection },
                    c.createElement(
                      "div",
                      { className: j.StatsTitle_ctn },
                      c.createElement(
                        "span",
                        null,
                        (0, V.we)("#EventDashBoard_Location_StoreDetail"),
                      ),
                    ),
                    c.createElement(
                      "div",
                      { className: j.StatsTitle },
                      c.createElement(
                        "span",
                        null,
                        (0, V.we)("#EventDashBoard_Summary_StoreAppPage_Shown"),
                      ),
                      c.createElement(
                        "span",
                        null,
                        (0, O.Dq)(e.store_app_page_shown),
                      ),
                    ),
                    c.createElement(
                      "div",
                      { className: j.StatsTitle },
                      c.createElement(
                        "span",
                        null,
                        (0, V.we)("#EventDashBoard_Summary_StoreAppPage_Read"),
                      ),
                      c.createElement(
                        "span",
                        null,
                        (0, O.Dq)(e.store_app_page_read),
                      ),
                    ),
                    c.createElement("br", null),
                    c.createElement(
                      "div",
                      { className: j.StatsTitle_ctn },
                      c.createElement(
                        "span",
                        null,
                        (0, V.we)("#EventDashBoard_Location_CommunityDetail"),
                      ),
                    ),
                    c.createElement(
                      "div",
                      { className: j.StatsTitle },
                      c.createElement(
                        "span",
                        null,
                        (0, V.we)("#EventDashBoard_Summary_Community_Shown"),
                      ),
                      c.createElement(
                        "span",
                        null,
                        (0, O.Dq)(e.community_hub_shown),
                      ),
                    ),
                    c.createElement(
                      "div",
                      { className: j.StatsTitle },
                      c.createElement(
                        "span",
                        null,
                        (0, V.we)("#EventDashBoard_Summary_Community_Read"),
                      ),
                      c.createElement(
                        "span",
                        null,
                        (0, O.Dq)(e.community_hub_read),
                      ),
                    ),
                    c.createElement("br", null),
                    c.createElement(
                      "div",
                      { className: j.StatsTitle_ctn },
                      c.createElement(
                        "span",
                        null,
                        (0, V.we)("#EventDashBoard_Location_NewsHubDetail"),
                      ),
                    ),
                    c.createElement(
                      "div",
                      { className: j.StatsTitle },
                      c.createElement(
                        "span",
                        null,
                        (0, V.we)("#EventDashBoard_Summary_NewsHub_Shown"),
                      ),
                      c.createElement(
                        "span",
                        null,
                        (0, O.Dq)(e.news_hub_shown),
                      ),
                    ),
                    c.createElement(
                      "div",
                      { className: j.StatsTitle },
                      c.createElement(
                        "span",
                        null,
                        (0, V.we)("#EventDashBoard_Summary_NewsHub_Read"),
                      ),
                      c.createElement("span", null, (0, O.Dq)(e.news_hub_read)),
                    ),
                  ),
                ),
              );
        }
      };
      q = (0, n.Cg)([o.PA], q);
      var W = a(45359),
        x = a(69409),
        z = a(46416),
        K = a(14326),
        Q = a(64641),
        $ = a.n(Q),
        J = a(22797),
        Z = a(51272),
        X = a(17289),
        Y = a(44332),
        ee = a(73745),
        te = a(61336),
        ae = a(92007);
      const ne = c.lazy(() =>
          Promise.all([
            a.e(8970),
            a.e(6597),
            a.e(4607),
            a.e(4539),
            a.e(7436),
            a.e(2797),
            a.e(7403),
            a.e(9214),
            a.e(3270),
            a.e(4796),
            a.e(4095),
            a.e(7843),
            a.e(4339),
            a.e(8199),
            a.e(1437),
            a.e(177),
            a.e(8396),
          ]).then(a.bind(a, 70834)),
        ),
        se = (0, o.PA)((e) => {
          const {
              event: t,
              lang: a,
              partnerEventStore: n,
              emoticonStore: s,
              nOverrideStartTime: l,
              nOverrideEndTime: i,
              adminPanel: o,
              otherEventRow: m,
              titleBar: _,
            } = e,
            p = t.appid,
            v = t.clanSteamID.GetAccountID(),
            u = (0, H.MU)(),
            [E, h] = (0, D.t7)(p, {
              include_assets: !0,
              include_platforms: !0,
              include_basic_info: !0,
              include_release: !0,
            }),
            [S, g] = (0, d.TB)(v);
          if (
            (c.useEffect(() => window.scrollTo(0, 0), [p, v]),
            !t.bLoaded || !g || (p && !E && 2 !== h))
          )
            return c.createElement(
              "div",
              { className: $().FlexCenter, style: { height: "400px" } },
              c.createElement(J.t, {
                size: "medium",
                string: (0, V.we)("#Loading"),
              }),
            );
          let w = t.GetDescriptionWithFallback(a);
          const y = (0, B.qT)(t, B.PH.k_eStoreNewsHub, "allowRelative");
          return c.createElement(re, {
            event: t,
            lang: a,
            titleBar: _,
            body: c.createElement(
              A.tH,
              null,
              c.createElement(
                "div",
                { className: L().EventDetailTitleContainer },
                c.createElement(b.r, {
                  crumbs: [
                    {
                      name: (0, V.we)("#BreadCrumbs_AllEvents"),
                      url: (0, B.qT)(
                        t,
                        B.PH.k_eStoreUsersNewsHub,
                        "allowRelative",
                      ),
                    },
                    {
                      name: (0, V.we)(
                        "#BreadCrumbs_GameEvents",
                        E?.GetName() || g.group_name,
                      ),
                      url: y,
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
              Boolean(t.BEventCanShowBroadcastWidget(u)) &&
                c.createElement(
                  "div",
                  { className: L().EventBroadcastCtn },
                  c.createElement(
                    c.Suspense,
                    { fallback: null },
                    c.createElement(ne, {
                      event: t,
                      bIsPreview: u,
                      accountIDs: u ? t.jsondata.broadcast_whitelist : void 0,
                    }),
                  ),
                ),
              c.createElement(
                "div",
                { className: (0, U.A)(L().EventColumns, "EventDetail") },
                c.createElement(
                  "div",
                  { className: L().EventDetailsDescription },
                  c.createElement(
                    A.tH,
                    null,
                    t.BHasTag("steam_award_nomination_request") &&
                      c.createElement(G.EventDisplaySteamAwardNomination, {
                        event: t,
                        lang: a,
                        previewMode: u,
                      }),
                    t.BHasTag("steam_award_vote_request") &&
                      c.createElement(G.WinterSaleSteamAwardVoteWrapper, {
                        appID: t.appid,
                        bIsEventActionEnabled: t.BIsEventActionEnabled(),
                        voteCategories: t.GetSteamAwardNomineeCategories(),
                      }),
                  ),
                  c.createElement(
                    A.tH,
                    null,
                    c.createElement(
                      "div",
                      {
                        className: (0, U.A)(
                          "EventDetailsBody",
                          L().EventDetailsBody,
                        ),
                      },
                      c.createElement(T.f, {
                        text: w || "",
                        partnerEventStore: n,
                        showErrorInfo: u,
                        event: t,
                        languageOverride: a,
                      }),
                      Boolean(
                        t.jsondata.bSaleEnabled && t.jsondata.sale_vanity_id,
                      ) &&
                        c.createElement(
                          "div",
                          { className: (0, U.A)(L().ReadMoreCnt) },
                          c.createElement(x.m, { gidEvent: t.GID }),
                          c.createElement(
                            "a",
                            {
                              className: (0, U.A)(F().Button, "LinkButton"),
                              href: (0, te.k2)(t.GetSaleURL()),
                            },
                            (0, V.we)("#Event_Button_VisitSalePage"),
                          ),
                        ),
                      Boolean(t.jsondata.associated_appid) &&
                        c.createElement(ae.e, {
                          id: t.jsondata.associated_appid,
                          inputType: "game",
                        }),
                    ),
                  ),
                  c.createElement(
                    A.tH,
                    null,
                    c.createElement(M._, { event: t }),
                  ),
                  Boolean(t.jsondata.read_more_link) &&
                    c.createElement(
                      "div",
                      { className: (0, U.A)(L().ReadMoreCnt) },
                      c.createElement(
                        Z.uU,
                        {
                          className: (0, U.A)(F().Button),
                          href: t.jsondata.read_more_link,
                        },
                        (0, V.we)("#EventEmail_Button_ClickForMoreDetails"),
                      ),
                    ),
                  c.createElement("span", { className: F().Clear }),
                  c.createElement(
                    A.tH,
                    null,
                    c.createElement(k.lS, { appid: t.appid }),
                  ),
                ),
                c.createElement(
                  A.tH,
                  null,
                  c.createElement(oe, {
                    event: t,
                    lang: a,
                    nOverrideStartTime: l,
                    nOverrideEndTime: i,
                  }),
                ),
              ),
              c.createElement(C.F, {
                eventModel: t,
                emoticonStore: s,
                partnerEventStore: n,
              }),
            ),
            postbody: c.createElement(A.tH, null, o, m),
            footer: c.createElement(
              A.tH,
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
                        (0, V.we)("#CreatorHome_ThisGame"),
                      ),
                      c.createElement(
                        "div",
                        {
                          className: (0, U.A)(
                            L().AppSummaryWidgetCtn,
                            "AppSummaryWidgetCtn",
                          ),
                        },
                        c.createElement(W.pb, {
                          id: t.appid,
                          type: (0, r.U)(E.GetAppType()),
                        }),
                      ),
                    ),
                  c.createElement(I.LG, { appid: t.appid, bSmallFormat: !0 }),
                ),
              ),
            ),
          });
        }),
        re = (0, o.PA)((e) => {
          const {
              event: t,
              lang: a,
              titleBar: n,
              body: r,
              postbody: l,
              footer: i,
            } = e,
            o = t.GetImageURLWithFallback("background", a),
            m = t.BIsImageSafeForAllAges("background", a),
            _ = "lang_" + (0, s.ww)(a),
            d = !!o && t.BImageNeedScreenshotFallback("background", a);
          return c.createElement(
            "div",
            {
              className: (0, U.A)(
                L().EventDetailsPageContainer,
                _,
                F().PartnerEventFont,
                m
                  ? L().DetailArtworkAgeAppropriate
                  : L().DetailArtworkAgeNotAppropriate,
                !o && L().NoTitleArtwork,
                d && L().ScreenshotInsteadOfCover,
              ),
            },
            c.createElement(N.vA, {
              appId: t.appid,
              clanId: t.clanSteamID.GetAccountID(),
            }),
            n,
            c.createElement(le, { strImageURL: o }),
            c.createElement(ie, { strImageURL: o, body: r, postbody: l }),
            Boolean(i) && c.createElement(A.tH, null, i),
          );
        }),
        le = (e) => {
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
        ie = (e) => {
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
                c.createElement(A.tH, null, t),
              ),
              Boolean(a) && c.createElement(A.tH, null, a),
            ),
          );
        };
      function oe(e) {
        const {
            event: t,
            lang: a,
            nOverrideStartTime: n,
            nOverrideEndTime: s,
          } = e,
          [r, l, i, o, _, v] = (0, m.q3)(() => [
            t.appid,
            t.clanSteamID,
            p.HD.GetTimeNowWithOverride(),
            n || t.GetStartTimeAndDateUnixSeconds(),
            t.GetCategoryAsString(),
            t.type,
          ]),
          [u] = (0, D.t7)(r, {
            include_assets: !0,
            include_platforms: !0,
            include_release: !0,
          }),
          [E, h] = (0, d.TB)(l.GetAccountID());
        return h
          ? t.appid && !u
            ? null
            : c.createElement(
                "div",
                { className: L().EventDetailTitleDesc },
                c.createElement(
                  "div",
                  { className: L().EventDetailsSticky },
                  h.is_ogg
                    ? c.createElement(me, { appid: h.appid })
                    : c.createElement(ce, { clanSteamID: l }),
                  c.createElement(k.j6, {
                    event: t,
                    nOverrideEndTime: s,
                    nOverrideStartTime: n,
                  }),
                  28 !== v &&
                    i < o &&
                    c.createElement(
                      "div",
                      { className: L().EventDetailTimeInfo },
                      c.createElement(f.j, { eventModel: t, lang: a }),
                    ),
                  c.createElement(
                    "div",
                    { className: L().EventDetailUserType },
                    c.createElement(
                      "div",
                      { className: L().RightSideTitles },
                      (0, V.we)("#EventDisplay_RightColumnTitle_EventType"),
                    ),
                    c.createElement(
                      "div",
                      { className: L().EventDetailsType },
                      _,
                      " ",
                    ),
                  ),
                  c.createElement(pe, { event: t, bIsOGG: h.is_ogg }),
                ),
              )
          : ((0, Y.w)(
              h,
              "EventDetailsRightColumn - clan info (" +
                l.GetAccountID() +
                ") is missing",
            ),
            null);
      }
      function me(e) {
        const { appid: t } = e;
        (0, Y.w)(t && 0 != t, "Expected Appid In Game Info Section");
        const [a] = (0, D.t7)(t, {
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
            _.zK.some((e) => t === e)
              ? (0, V.we)("#EventDisplay_RightColumnTitle_Blog")
              : (0, V.we)("#EventDisplay_RightColumnTitle_Game"),
          ),
          c.createElement(z.W, {
            imageType: "header",
            capsule: { id: t, type: "game" },
            bHidePriceIfOwned: !0,
            bHideStatusBanners: !0,
          }),
          c.createElement(
            "div",
            { className: (0, U.A)(L().GameActions) },
            a
              ? c.createElement(K._, {
                  appid: t,
                  bIsFree: a.BIsFree(),
                  bIsComingSoon: a.BIsComingSoon(),
                  className: L().ActionButton,
                })
              : c.createElement(J.t, { size: "small", position: "center" }),
          ),
        );
      }
      function ce(e) {
        const { clanSteamID: t } = e,
          [a, n] = (0, d.TB)(t.GetAccountID());
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
                X.m,
                { href: (0, te.k2)(d.ac.GetCreatorStoreURL(t)) },
                c.createElement("div", {
                  className: L().EventDetailsAvatar,
                  style: { backgroundImage: `url(${n.avatar_full_url})` },
                }),
              ),
            )
          : ((0, Y.w)(
              n,
              "EventDetailsRightCreatorInfo - clan info (" +
                t.GetAccountID() +
                ") is missing",
            ),
            null);
      }
      const _e = ["", "en-US", "en-GB", "zh-CN", "es-ES", "br-BR"];
      let de = class extends c.Component {
        GenerateOptions() {
          let e = new Array();
          return (
            _e.forEach((t) =>
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
            !v.KN.Get().GetPartnerEventPermissions(this.props.event.clanSteamID)
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
                className: (0, U.A)(
                  F().FlexColumnContainer,
                  F().ValveOnlyBackground,
                ),
              },
              c.createElement(
                "div",
                {
                  className: (0, U.A)(
                    F().EventEditorTextTitle,
                    F().ValveSupportOnly,
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
      (0, n.Cg)([ee.oI], de.prototype, "OnLanguageChange", null),
        (de = (0, n.Cg)([o.PA], de));
      let pe = class extends c.Component {
        m_cancelSignal = i().CancelToken.source();
        componentDidMount() {
          const { event: e } = this.props;
          e.BIsPartnerEvent() &&
            e.BIsVisibleEvent() &&
            v.KN.Get()
              .LoadSingleAppEventPermissions(e.clanSteamID)
              .then((t) => {
                t &&
                  t.can_edit &&
                  y.LoadStatsForEvents(
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
          if (!v.KN.Get().GetPartnerEventPermissions(e.clanSteamID).can_edit)
            return null;
          const a =
            e.BIsPartnerEvent() &&
            e.BIsVisibleEvent() &&
            y.GetStatsFor(e.clanSteamID, e.GID);
          return c.createElement(
            A.tH,
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
                  (0, V.we)("#EventEditor_Comments"),
                ),
                c.createElement("span", null, (0, O.Dq)(e.nCommentCount)),
              ),
              c.createElement(
                "div",
                { className: L().EditorStatsRow },
                c.createElement(
                  "span",
                  null,
                  (0, V.we)("#EventEditor_UpVotes"),
                ),
                c.createElement(
                  "span",
                  null,
                  e.nVotesUp ? (0, O.Dq)(e.nVotesUp) : 0,
                ),
              ),
              c.createElement(
                "div",
                { className: L().EditorStatsRow },
                c.createElement(
                  "span",
                  null,
                  (0, V.we)("#EventEditor_DownVotes"),
                ),
                c.createElement(
                  "span",
                  null,
                  e.nVotesDown ? (0, O.Dq)(e.nVotesDown) : 0,
                ),
              ),
            ),
            Boolean(a) &&
              c.createElement(
                "div",
                { className: L().EditorStatsCtn },
                (0, V.we)("#EventDashBoard_SummaryStats_Admin_Title"),
                c.createElement(q, {
                  summary: a.m_stats,
                  bIsAllowedInLibrary: t,
                  bEventIsInModerationQueue: (0, _.Dn)(e),
                }),
              ),
          );
        }
      };
      pe = (0, n.Cg)([o.PA], pe);
    },
    43068: (e, t, a) => {
      "use strict";
      a.d(t, { P: () => A });
      var n = a(41735),
        s = a.n(n),
        r = a(34629),
        l = a(14947),
        i = a(78327),
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
            i.TS.STORE_BASE_URL + "events_admin/ajaxgetscapprovalpriviledge";
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
          (0, l.Gn)(this);
          let e = (0, i.Tc)("sc_app_privildge", "application_config");
          this.ValidateStoreDefault(e)
            ? ("dev" === i.TS.WEB_UNIVERSE &&
                console.log(
                  "DEV_DEBUG: CSteamChinaStore: Loading payload from data-*, bHasAccess: " +
                    e.bHasAccess,
                ),
              (this.m_objApprovalPriviledge = e),
              (this.m_LoadingPriviledgePromise = null))
            : (i.iA.logged_in && i.TS.EREALM === m.TU.k_ESteamRealmChina) ||
              (this.m_objApprovalPriviledge = { bHasAccess: !1 });
        }
        ValidateStoreDefault(e) {
          return e && "object" == typeof e && "boolean" == typeof e.bHasAccess;
        }
      }
      (0, r.Cg)([l.sH], c.prototype, "m_objApprovalPriviledge", void 0);
      var _ = a(75844),
        d = a(90626),
        p = a(17720),
        v = a(60746),
        u = a(30756),
        E = a(90316),
        h = a(95695),
        S = a(51706),
        g = a(738),
        w = a(22797),
        y = a(52038),
        D = a(56011),
        b = a(61859);
      const A = (0, _.PA)((e) => {
          const [t, a] = d.useState(null),
            { eventModel: n } = e;
          let r = n.clanSteamID.GetAccountID();
          d.useEffect(() => {
            const e = s().CancelToken.source();
            return (
              (async () => {
                const t = p.b.InitFromClanID(r),
                  n = await v.KN.Get().LoadSingleAppEventPermissions(t),
                  s = await c.Get().HintLoadAppApprovalPriviledge();
                e.token.reason ||
                  a(i.iA.is_support || n.can_edit || s.bHasAccess);
              })(),
              () => e.cancel("SteamChinaAdminPanel is unmounting")
            );
          }, [r]);
          const l = p.b.InitFromClanID(r);
          return i.iA.is_support ||
            v.KN.Get().GetPartnerEventPermissions(l).can_edit
            ? d.createElement(u.g, {
                eventModel: n,
                partnerEventStore: e.partnerEventStore,
                addtionalAdminButtons: t
                  ? [
                      d.createElement(N, {
                        key: "removesteamchina",
                        eventModel: n,
                      }),
                    ]
                  : void 0,
              })
            : c.Get().BHasSteamChinaAppApprovalPriviledge()
              ? d.createElement(
                  "div",
                  { className: E.DisplayAdminPanel },
                  d.createElement(
                    "span",
                    { className: E.DisplayAdminPanel_Title },
                    (0, b.we)("#EventDisplay_Admin_Title"),
                  ),
                  d.createElement(N, {
                    key: "removesteamchina",
                    eventModel: n,
                  }),
                )
              : null;
        }),
        N = (e) => {
          const { eventModel: t } = e;
          return d.createElement(
            "div",
            {
              className: (0, y.A)(
                h.Button,
                E.AdminButton,
                h.ValveOnlyBackground,
              ),
              onClick: (a) => {
                let n = !1;
                (0, g.pg)(
                  d.createElement(
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
                            a.append("sessionid", i.TS.SESSIONID),
                              a.append(
                                "clan_accountid",
                                "" + t.clanSteamID.GetAccountID(),
                              ),
                              a.append("gid_clan_event", "" + t.GID);
                            let n = !1,
                              r = 0;
                            try {
                              const e = `${i.TS.STORE_BASE_URL}/events_admin/ajaxhidefromsteamchina`,
                                l = await s().post(e, a, {
                                  withCredentials: !0,
                                });
                              (n =
                                1 == l?.data?.success ||
                                29 == l?.data?.success),
                                29 == l?.data?.success &&
                                  console.warn(
                                    `RemoveEventFromSteamChinaButton: we receive duplicate request ${t.clanSteamID.GetAccountID()} : ${t.GID}; event is still removed from SC`,
                                  ),
                                (r = l?.data?.success);
                            } catch (e) {
                              const t = (0, o.H)(e);
                              (r = t.errorCode),
                                console.error(
                                  "RemoveEventFromSteamChinaButton: error " +
                                    t.strErrorMsg,
                                  t,
                                );
                            }
                            e.closeModal && e.closeModal(),
                              (0, g.pg)(
                                n
                                  ? d.createElement(
                                      S.o0,
                                      { bAlertDialog: !0 },
                                      (0, b.we)("#EventDisplay_Share_Success"),
                                    )
                                  : d.createElement(
                                      S.KG,
                                      null,
                                      (0, b.we)("#EventDisplay_Share_Failure") +
                                        " " +
                                        r,
                                    ),
                                window,
                              );
                          })();
                      },
                    },
                    n &&
                      d.createElement(w.t, {
                        size: "medium",
                        position: "center",
                      }),
                  ),
                  (0, D.uX)(a),
                );
              },
            },
            (0, b.we)("#EventAdmin_Moderation_HideEventInSC"),
          );
        };
    },
  },
]);
