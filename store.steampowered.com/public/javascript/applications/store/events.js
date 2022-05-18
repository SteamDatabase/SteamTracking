/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [24],
  {
    "2+/j": function (e, t, a) {
      e.exports = {
        TotalsCtn: "partnereventstats_TotalsCtn_19vOo",
        SmallStatsMode: "partnereventstats_SmallStatsMode_kgm3s",
        StatsTitle: "partnereventstats_StatsTitle_OK8fz",
        StatsCtnTitle: "partnereventstats_StatsCtnTitle_1MBiN",
        VisibilityNote: "partnereventstats_VisibilityNote_3d3UX",
        NormalStatsMode: "partnereventstats_NormalStatsMode_1_k55",
        StatFigure: "partnereventstats_StatFigure_20Ce1",
        StatsCtn: "partnereventstats_StatsCtn_cwuZd",
        StatsLeftSection: "partnereventstats_StatsLeftSection_3Ff1q",
        StatsRightSection: "partnereventstats_StatsRightSection_1kxxO",
        ModerationWarningCtn: "partnereventstats_ModerationWarningCtn_Jrwlw",
        ModerationWarning: "partnereventstats_ModerationWarning_1A_Ln",
        ModerationNote: "partnereventstats_ModerationNote_HMIPL",
        DisabledStats: "partnereventstats_DisabledStats_G7mXJ",
      };
    },
    "4yG/": function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a("1fPh"),
        r = a("q1tI"),
        s = a.n(r),
        l = a("EC67"),
        i = a("oleE"),
        o = a("C1a2"),
        c = a("71ll"),
        m = a("vDqi"),
        d = a.n(m),
        _ = a("TyAF"),
        u = a("msu0"),
        p = a("Zdsb"),
        v = a("XrGS"),
        E = (a("KjDl"), a("wijF")),
        b = a("cXRO"),
        h = a("+aRA"),
        S = a("mR6x"),
        g = a("09aD"),
        f = a("j4v3"),
        w = a("gU2e"),
        I = a("mrSG"),
        y = a("QY55"),
        O = a("/dWE"),
        j = a("cFM5"),
        D = a("pr76"),
        A = a("+zS6"),
        G = a("6qRO"),
        C = a.n(G),
        N = a("EYmU"),
        L = a("w4f7"),
        T = a("4EJs"),
        B = a("kWcV"),
        k = a("tQrp"),
        M = a("+of3"),
        P = a("aoTL"),
        U = (a("QwK/"), a("ue1x")),
        R = a("AM5O"),
        H = a("/Q1a"),
        F = a("2vnA"),
        V = (a("sTxY"), a("TqgT"));
      class x {
        constructor(e) {
          (this.m_stats = Object.assign(
            {
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
            },
            e
          )),
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
      }
      Object(I.b)([F.C], x.prototype, "m_stats", void 0),
        Object(I.b)([F.C], x.prototype, "m_lastUpdateTime", void 0);
      class W {
        constructor() {
          (this.m_mapPerEventStats = new Map()),
            (this.m_mapSummaryStats = new Map()),
            (this.m_bLoadedFromConfig = !1);
        }
        LazyInit() {
          if (!this.m_bLoadedFromConfig) {
            let e = Object(H.h)("trackingdatasummary", "application_config");
            this.ValidateStoreDefault(e) &&
              this.m_mapSummaryStats.set(e.clan_account_id, new x(e));
            let t = Object(H.h)("trackingdataevents", "application_config");
            this.ValidateStoreDefaultList(t) &&
              t.forEach((e) => {
                let t = i.a.InitFromClanID(e.clan_account_id),
                  a = this.GetKey(t, e.event_gid);
                this.m_mapPerEventStats.set(a, new x(e));
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
              this.m_mapPerEventStats.set(a, new x(null)),
            this.m_mapPerEventStats.get(a)
          );
        }
        GetTotalStats(e) {
          return (
            this.LazyInit(),
            this.m_mapSummaryStats.has(e.GetAccountID()) ||
              this.m_mapSummaryStats.set(e.GetAccountID(), new x(null)),
            this.m_mapSummaryStats.get(e.GetAccountID())
          );
        }
        GetKey(e, t) {
          return e.GetAccountID() + "_" + t;
        }
        LoadStatsForEvents(e, t, a) {
          return Object(I.a)(this, void 0, void 0, function* () {
            this.LazyInit();
            let n = Date.now() / 1e3,
              r = t.filter((t) => {
                let a = this.GetKey(e, t),
                  r = this.m_mapPerEventStats.get(a);
                return !r || null == r.m_stats || r.m_lastUpdateTime < n - 3600;
              });
            if (!r || 0 == r.length) return !0;
            let s = Object(H.f)() + "actions/ajaxgetpartnereventsreport",
              l = {
                sessionid: H.d.SESSIONID,
                clan_account_id: e.GetAccountID(),
                gidlist: r.join(","),
              };
            try {
              let t = yield d.a.get(s, {
                params: l,
                withCredentials: !0,
                cancelToken: null == a ? void 0 : a.token,
              });
              return (
                Object(F.G)(() => {
                  this.m_mapSummaryStats.set(
                    e.GetAccountID(),
                    new x(t.data.summary)
                  ),
                    t.data.events_detail.forEach((t) => {
                      let a = this.GetKey(e, t.event_gid);
                      if (this.m_mapPerEventStats.has(a)) {
                        this.m_mapPerEventStats.get(a).reset(t);
                      } else this.m_mapPerEventStats.set(a, new x(t));
                    });
                }),
                !0
              );
            } catch (e) {
              let t = Object(V.a)(e);
              console.error("CPartnerEventReportingStore " + t.strErrorMsg, t);
            }
            return !1;
          });
        }
        BHasEventStats(e, t) {
          let a = i.a.InitFromClanID(e),
            n = this.GetKey(a, t),
            r = this.m_mapPerEventStats.get(n);
          return Boolean(r && r.m_stats);
        }
      }
      Object(I.b)([F.C], W.prototype, "m_mapPerEventStats", void 0),
        Object(I.b)([F.C], W.prototype, "m_mapSummaryStats", void 0),
        Object(I.b)([F.k], W.prototype, "LazyInit", null);
      const q = new W();
      a("KVor");
      var z = a("RrtU"),
        K = a("f+IU"),
        Q = a("nWW+"),
        Y = a("+VGL"),
        X = a.n(Y),
        $ = a("GbHM"),
        J = a("GXif"),
        Z = a("2+/j");
      let ee = class extends r.Component {
        render() {
          const {
            summary: e,
            bEventIsInModerationQueue: t,
            bIsAllowedInLibrary: a,
            bIncludeDescription: n,
          } = this.props;
          return 0 == e.total_read + e.total_showm
            ? null
            : r.createElement(
                "div",
                null,
                r.createElement(
                  "div",
                  {
                    className: Object($.a)(
                      Z.StatsCtnTitle,
                      n ? Z.NormalStatsMode : Z.SmallStatsMode
                    ),
                  },
                  r.createElement(
                    "h1",
                    null,
                    Object(J.f)("#EventDashBoard_SummaryStats_Title")
                  ),
                  Boolean(n) &&
                    r.createElement(
                      "p",
                      null,
                      Object(J.f)("#EventDashBoard_SummaryStats_Desc"),
                      " ",
                      r.createElement(
                        "a",
                        {
                          href:
                            "https://partner.steamgames.com/doc/marketing/event_tools/stats",
                          target: "_blank",
                        },
                        Object(J.f)("#EventDashBoard_SummaryStats_Link")
                      )
                    )
                ),
                r.createElement(
                  "div",
                  {
                    className: Object($.a)(
                      Z.TotalsCtn,
                      n ? Z.NormalStatsMode : Z.SmallStatsMode
                    ),
                  },
                  r.createElement(
                    "div",
                    { className: Z.StatsTitle },
                    r.createElement(
                      "span",
                      { className: Z.StatDescription },
                      Object(J.f)(
                        "#EventDashBoard_SummaryStats_TotalImpressions"
                      )
                    ),
                    r.createElement(
                      "span",
                      { className: Z.StatFigure },
                      e.total_showm.toLocaleString(J.e.GetPreferredLocales())
                    )
                  ),
                  r.createElement(
                    "div",
                    { className: Z.StatsTitle },
                    r.createElement(
                      "span",
                      { className: Z.StatDescription },
                      Object(J.f)("#EventDashBoard_SummaryStats_TotalViews")
                    ),
                    r.createElement(
                      "span",
                      { className: Z.StatFigure },
                      e.total_read.toLocaleString(J.e.GetPreferredLocales())
                    )
                  )
                ),
                Boolean(a && t) &&
                  r.createElement(
                    "div",
                    { className: Z.ModerationWarningCtn },
                    r.createElement(
                      "div",
                      { className: Z.ModerationWarning },
                      Object(J.f)("#EventDashBoard_ModerationQueueWarning")
                    ),
                    r.createElement(
                      "a",
                      {
                        href:
                          H.d.PARTNER_BASE_URL +
                          "doc/marketing/event_tools/moderation",
                      },
                      Object(J.f)("#EventDashBoard_Location_ModerationTitle")
                    )
                  ),
                r.createElement(
                  "div",
                  {
                    className: Object($.a)(
                      Z.StatsCtn,
                      n ? Z.NormalStatsMode : Z.SmallStatsMode
                    ),
                  },
                  a &&
                    r.createElement(
                      "div",
                      {
                        className: Object($.a)(
                          Z.StatsLeftSection,
                          t && Z.DisabledStats
                        ),
                      },
                      r.createElement(
                        "div",
                        { className: Z.StatsTitle_ctn },
                        r.createElement(
                          "span",
                          null,
                          Object(J.f)("#EventDashBoard_Location_LibraryHome")
                        ),
                        r.createElement(
                          "span",
                          { className: Z.ModerationNote },
                          "( ",
                          Object(J.f)(
                            "#EventDashBoard_Location_WaitingModeraion"
                          ),
                          " )"
                        )
                      ),
                      r.createElement(
                        "div",
                        { className: Z.StatsTitle },
                        r.createElement(
                          "span",
                          null,
                          Object(J.f)(
                            "#EventDashBoard_Summary_LibraryHome_Shown"
                          )
                        ),
                        r.createElement(
                          "span",
                          null,
                          e.library_overview_shown.toLocaleString(
                            J.e.GetPreferredLocales()
                          )
                        )
                      ),
                      r.createElement(
                        "div",
                        { className: Z.StatsTitle },
                        r.createElement(
                          "span",
                          null,
                          Object(J.f)(
                            "#EventDashBoard_Summary_LibraryHome_Read"
                          )
                        ),
                        r.createElement(
                          "span",
                          null,
                          e.library_overview_read.toLocaleString(
                            J.e.GetPreferredLocales()
                          )
                        )
                      ),
                      r.createElement("br", null),
                      r.createElement(
                        "div",
                        { className: Z.StatsTitle_ctn },
                        r.createElement(
                          "span",
                          null,
                          Object(J.f)("#EventDashBoard_Location_LibraryDetail")
                        ),
                        r.createElement(
                          "span",
                          { className: Z.ModerationNote },
                          "( ",
                          Object(J.f)(
                            "#EventDashBoard_Location_WaitingModeraion"
                          ),
                          " )"
                        )
                      ),
                      r.createElement(
                        "div",
                        { className: Z.StatsTitle },
                        r.createElement(
                          "span",
                          null,
                          Object(J.f)(
                            "#EventDashBoard_Summary_AppDetailSpotlight_Shown"
                          )
                        ),
                        r.createElement(
                          "span",
                          null,
                          e.app_details_spotlight_shown.toLocaleString(
                            J.e.GetPreferredLocales()
                          )
                        )
                      ),
                      r.createElement(
                        "div",
                        { className: Z.StatsTitle },
                        r.createElement(
                          "span",
                          null,
                          Object(J.f)(
                            "#EventDashBoard_Summary_AppDetailSpotlight_Read"
                          )
                        ),
                        r.createElement(
                          "span",
                          null,
                          e.app_details_spotlight_read.toLocaleString(
                            J.e.GetPreferredLocales()
                          )
                        )
                      ),
                      r.createElement(
                        "div",
                        { className: Z.StatsTitle },
                        r.createElement(
                          "span",
                          null,
                          Object(J.f)(
                            "#EventDashBoard_Summary_AppDetailActivity_Shown"
                          )
                        ),
                        r.createElement(
                          "span",
                          null,
                          e.app_details_activity_shown.toLocaleString(
                            J.e.GetPreferredLocales()
                          )
                        )
                      ),
                      r.createElement(
                        "div",
                        { className: Z.StatsTitle },
                        r.createElement(
                          "span",
                          null,
                          Object(J.f)(
                            "#EventDashBoard_Summary_AppDetailActivity_Read"
                          )
                        ),
                        r.createElement(
                          "span",
                          null,
                          e.app_details_activity_read.toLocaleString(
                            J.e.GetPreferredLocales()
                          )
                        )
                      )
                    ),
                  r.createElement(
                    "div",
                    { className: Z.StatsRightSection },
                    r.createElement(
                      "div",
                      { className: Z.StatsTitle_ctn },
                      r.createElement(
                        "span",
                        null,
                        Object(J.f)("#EventDashBoard_Location_StoreDetail")
                      )
                    ),
                    r.createElement(
                      "div",
                      { className: Z.StatsTitle },
                      r.createElement(
                        "span",
                        null,
                        Object(J.f)(
                          "#EventDashBoard_Summary_StoreAppPage_Shown"
                        )
                      ),
                      r.createElement(
                        "span",
                        null,
                        e.store_app_page_shown.toLocaleString(
                          J.e.GetPreferredLocales()
                        )
                      )
                    ),
                    r.createElement(
                      "div",
                      { className: Z.StatsTitle },
                      r.createElement(
                        "span",
                        null,
                        Object(J.f)("#EventDashBoard_Summary_StoreAppPage_Read")
                      ),
                      r.createElement(
                        "span",
                        null,
                        e.store_app_page_read.toLocaleString(
                          J.e.GetPreferredLocales()
                        )
                      )
                    ),
                    r.createElement("br", null),
                    r.createElement(
                      "div",
                      { className: Z.StatsTitle_ctn },
                      r.createElement(
                        "span",
                        null,
                        Object(J.f)("#EventDashBoard_Location_CommunityDetail")
                      )
                    ),
                    r.createElement(
                      "div",
                      { className: Z.StatsTitle },
                      r.createElement(
                        "span",
                        null,
                        Object(J.f)("#EventDashBoard_Summary_Community_Shown")
                      ),
                      r.createElement(
                        "span",
                        null,
                        e.community_hub_shown.toLocaleString(
                          J.e.GetPreferredLocales()
                        )
                      )
                    ),
                    r.createElement(
                      "div",
                      { className: Z.StatsTitle },
                      r.createElement(
                        "span",
                        null,
                        Object(J.f)("#EventDashBoard_Summary_Community_Read")
                      ),
                      r.createElement(
                        "span",
                        null,
                        e.community_hub_read.toLocaleString(
                          J.e.GetPreferredLocales()
                        )
                      )
                    ),
                    r.createElement("br", null),
                    r.createElement(
                      "div",
                      { className: Z.StatsTitle_ctn },
                      r.createElement(
                        "span",
                        null,
                        Object(J.f)("#EventDashBoard_Location_NewsHubDetail")
                      )
                    ),
                    r.createElement(
                      "div",
                      { className: Z.StatsTitle },
                      r.createElement(
                        "span",
                        null,
                        Object(J.f)("#EventDashBoard_Summary_NewsHub_Shown")
                      ),
                      r.createElement(
                        "span",
                        null,
                        e.news_hub_shown.toLocaleString(
                          J.e.GetPreferredLocales()
                        )
                      )
                    ),
                    r.createElement(
                      "div",
                      { className: Z.StatsTitle },
                      r.createElement(
                        "span",
                        null,
                        Object(J.f)("#EventDashBoard_Summary_NewsHub_Read")
                      ),
                      r.createElement(
                        "span",
                        null,
                        e.news_hub_read.toLocaleString(
                          J.e.GetPreferredLocales()
                        )
                      )
                    )
                  )
                )
              );
        }
      };
      ee = Object(I.b)([_.a], ee);
      var te = a("6bdu"),
        ae = a("E4gw"),
        ne = a("hNBN"),
        re = a("KSg0"),
        se = a.n(re),
        le = a("f5iL"),
        ie = a("hCpY"),
        oe = a("pSt8");
      const ce = r.lazy(() =>
          Promise.all([
            a.e(1),
            a.e(13),
            a.e(16),
            a.e(0),
            a.e(2),
            a.e(3),
            a.e(4),
            a.e(5),
            a.e(6),
            a.e(7),
            a.e(9),
            a.e(10),
            a.e(8),
            a.e(14),
            a.e(12),
            a.e(11),
            a.e(15),
            a.e(20),
          ]).then(a.bind(null, "3fR/"))
        ),
        me = Object(_.a)((e) => {
          const {
              event: t,
              lang: a,
              partnerEventStore: n,
              emoticonStore: s,
              nOverrideStartTime: l,
              nOverrideEndTime: i,
              adminPanel: o,
              previewMode: c,
              otherEventRow: m,
              titleBar: d,
            } = e,
            _ = t.appid,
            u = t.clanSteamID.GetAccountID(),
            [v] = Object(z.b)(_, {
              include_assets: !0,
              include_platforms: !0,
              include_basic_info: !0,
              include_release: !0,
            }),
            [b, S] = Object(E.b)(u);
          if (
            (r.useEffect(() => window.scrollTo(0, 0), [_, u]),
            !t.bLoaded || !S || (_ && !v))
          )
            return r.createElement(
              "div",
              { className: se.a.FlexCenter, style: { height: "400px" } },
              r.createElement(B.a, {
                size: "medium",
                string: Object(J.f)("#Loading"),
              })
            );
          let g = t.GetDescriptionWithFallback(a);
          const w = Object(f.d)(t, f.a.k_eStoreNewsHub, "allowRelative");
          return r.createElement(de, {
            event: t,
            lang: a,
            titleBar: d,
            body: r.createElement(
              h.a,
              null,
              r.createElement(
                "div",
                { className: C.a.EventDetailTitleContainer },
                r.createElement(y.a, {
                  crumbs: [
                    {
                      name: Object(J.f)("#BreadCrumbs_AllEvents"),
                      url: Object(f.d)(
                        t,
                        f.a.k_eStoreUsersNewsHub,
                        "allowRelative"
                      ),
                    },
                    {
                      name: Object(J.f)(
                        "#BreadCrumbs_GameEvents",
                        (null == v ? void 0 : v.GetName()) || S.group_name
                      ),
                      url: w,
                    },
                  ],
                }),
                r.createElement(
                  "div",
                  { className: C.a.EventDetailTitle },
                  t.GetNameWithFallback(a)
                ),
                t.BHasSubTitle(a) &&
                  r.createElement(
                    "div",
                    { className: C.a.EventDetailsSubTitle },
                    t.GetSubTitle(a)
                  )
              ),
              Boolean(t.BEventCanShowBroadcastWidget(c)) &&
                r.createElement(
                  "div",
                  { className: C.a.EventBroadcastCtn },
                  r.createElement(
                    r.Suspense,
                    { fallback: r.createElement("div", null) },
                    r.createElement(ce, {
                      event: t,
                      bIsPreview: c,
                      accountIDs: c ? t.jsondata.broadcast_whitelist : void 0,
                    })
                  )
                ),
              r.createElement(
                "div",
                { className: Object($.a)(C.a.EventColumns, "EventDetail") },
                r.createElement(
                  "div",
                  { className: C.a.EventDetailsDescription },
                  r.createElement(
                    h.a,
                    null,
                    t.BHasTag("steam_award_nomination_request") &&
                      r.createElement(A.EventDisplaySteamAwardNomination, {
                        event: t,
                        lang: a,
                        previewMode: c,
                      }),
                    t.BHasTag("steam_award_vote_request") &&
                      r.createElement(A.WinterSaleSteamAwardVoteWrapper, {
                        appID: t.appid,
                        bIsEventActionEnabled: t.BIsEventActionEnabled(),
                        voteCategories: t.GetSteamAwardNomineeCategories(),
                      })
                  ),
                  r.createElement(
                    h.a,
                    null,
                    r.createElement(
                      "div",
                      {
                        className: Object($.a)(
                          "EventDetailsBody",
                          C.a.EventDetailsBody
                        ),
                      },
                      r.createElement(D.a, {
                        text: g || "",
                        partnerEventStore: n,
                        showErrorInfo: c,
                        event: t,
                        languageOverride: a,
                      }),
                      Boolean(
                        t.jsondata.bSaleEnabled && t.jsondata.sale_vanity_id
                      ) &&
                        r.createElement(
                          "div",
                          { className: Object($.a)(C.a.ReadMoreCnt) },
                          r.createElement(te.a, { gidEvent: t.GID }),
                          r.createElement(
                            k.b,
                            {
                              className: Object($.a)(X.a.Button),
                              href: Object(oe.h)(t.GetSaleURL()),
                            },
                            Object(J.f)("#Event_Button_VisitSalePage")
                          )
                        )
                    )
                  ),
                  r.createElement(
                    h.a,
                    null,
                    r.createElement(L.a, { event: t })
                  ),
                  Boolean(t.jsondata.read_more_link) &&
                    r.createElement(
                      "div",
                      { className: Object($.a)(C.a.ReadMoreCnt) },
                      r.createElement(
                        k.b,
                        {
                          className: Object($.a)(X.a.Button),
                          href: t.jsondata.read_more_link,
                        },
                        Object(J.f)("#EventEmail_Button_ClickForMoreDetails")
                      )
                    ),
                  r.createElement("span", { className: X.a.Clear }),
                  r.createElement(
                    h.a,
                    null,
                    r.createElement(N.a, { appid: t.appid })
                  )
                ),
                r.createElement(
                  h.a,
                  null,
                  r.createElement(pe, {
                    event: t,
                    lang: a,
                    nOverrideStartTime: l,
                    nOverrideEndTime: i,
                  })
                )
              ),
              r.createElement(j.b, {
                eventModel: t,
                emoticonStore: s,
                partnerEventStore: n,
              })
            ),
            postbody: r.createElement(h.a, null, o, m),
            footer: r.createElement(
              h.a,
              null,
              r.createElement(
                "div",
                { className: C.a.AppSummaryCtn },
                r.createElement(
                  "div",
                  { className: C.a.EventBodyPosition },
                  Boolean(v) &&
                    r.createElement(
                      "div",
                      { className: C.a.AppSummaryWidgetTitleCtn },
                      r.createElement(
                        "span",
                        { className: C.a.Title },
                        Object(J.f)("#CreatorHome_ThisGame")
                      ),
                      r.createElement(
                        "div",
                        {
                          className: Object($.a)(
                            C.a.AppSummaryWidgetCtn,
                            "AppSummaryWidgetCtn"
                          ),
                        },
                        r.createElement(T.j, {
                          id: t.appid,
                          type: Object(p.a)(v.GetAppType()),
                        })
                      )
                    ),
                  r.createElement(O.b, { appid: t.appid, bSmallFormat: !0 })
                )
              )
            ),
          });
        }),
        de = Object(_.a)((e) => {
          const {
              event: t,
              lang: a,
              titleBar: n,
              body: s,
              postbody: l,
              footer: i,
            } = e,
            o = t.GetImageURLWithFallback("background", a),
            c = t.BIsImageSafeForAllAges("background", a),
            m = "lang_" + Object(u.e)(a),
            d = !!o && t.BImageNeedScreenshotFallback("background", a);
          return r.createElement(
            "div",
            {
              className: Object($.a)(
                C.a.EventDetailsPageContainer,
                m,
                X.a.PartnerEventFont,
                c
                  ? C.a.DetailArtworkAgeAppropriate
                  : C.a.DetailArtworkAgeNotAppropriate,
                !o && C.a.NoTitleArtwork,
                d && C.a.ScreenshotInsteadOfCover
              ),
            },
            r.createElement(K.b, {
              appId: t.appid,
              clanId: t.clanSteamID.GetAccountID(),
            }),
            n,
            r.createElement(_e, { strImageURL: o }),
            r.createElement(ue, { strImageURL: o, body: s, postbody: l }),
            Boolean(i) && r.createElement(h.a, null, i)
          );
        }),
        _e = (e) => {
          const { strImageURL: t } = e;
          return r.createElement(
            "div",
            { className: C.a.EventCoverImageCtn },
            r.createElement(
              "div",
              { className: C.a.EventCoverImageBlr },
              t &&
                r.createElement(
                  r.Fragment,
                  null,
                  r.createElement("div", {
                    className: C.a.EventCoverImageFuzz,
                    style: {
                      backgroundColor: "rgb(37, 41, 46)",
                      backgroundImage: `url(${t})`,
                    },
                  }),
                  r.createElement("div", {
                    className: C.a.EventCoverImage,
                    style: {
                      backgroundColor: "rgb(37, 41, 46)",
                      backgroundImage: `url(${t})`,
                    },
                  })
                )
            ),
            t && r.createElement("div", { className: C.a.CoverImageGradient })
          );
        },
        ue = (e) => {
          const { body: t, postbody: a, strImageURL: n } = e;
          return r.createElement(
            "div",
            { className: C.a.EventBodyCtn },
            r.createElement("div", { className: C.a.EventBackgroundBlurCtn }),
            r.createElement(
              "div",
              { className: C.a.EventBodyPosition },
              r.createElement(
                "div",
                { className: C.a.EventBody },
                Boolean(n) &&
                  r.createElement("div", {
                    className: C.a.EventBackgroundBlur,
                    style: { backgroundImage: `url(${n})` },
                  }),
                r.createElement(h.a, null, t)
              ),
              Boolean(a) && r.createElement(h.a, null, a)
            )
          );
        };
      function pe(e) {
        const {
            event: t,
            lang: a,
            nOverrideStartTime: n,
            nOverrideEndTime: s,
          } = e,
          [l, i, o, c, m, d] = Object(P.d)(() => [
            t.appid,
            t.clanSteamID,
            U.a.GetTimeNowWithOverride(),
            n || t.GetStartTimeAndDateUnixSeconds(),
            t.GetCategoryAsString(),
            t.type,
          ]),
          [_] = Object(z.b)(l, {
            include_assets: !0,
            include_platforms: !0,
            include_release: !0,
          }),
          [u, p] = Object(E.b)(i.GetAccountID());
        return p
          ? t.appid && !_
            ? null
            : r.createElement(
                "div",
                { className: C.a.EventDetailTitleDesc },
                r.createElement(
                  "div",
                  { className: C.a.EventDetailsSticky },
                  p.is_ogg
                    ? r.createElement(ve, { appid: p.appid })
                    : r.createElement(Ee, { clanSteamID: i }),
                  r.createElement(N.b, {
                    event: t,
                    nOverrideEndTime: s,
                    nOverrideStartTime: n,
                  }),
                  28 !== d &&
                    o < c &&
                    r.createElement(
                      "div",
                      { className: C.a.EventDetailTimeInfo },
                      r.createElement(Q.b, { eventModel: t, lang: a })
                    ),
                  r.createElement(
                    "div",
                    { className: C.a.EventDetailUserType },
                    r.createElement(
                      "div",
                      { className: C.a.RightSideTitles },
                      Object(J.f)("#EventDisplay_RightColumnTitle_EventType")
                    ),
                    r.createElement(
                      "div",
                      { className: C.a.EventDetailsType },
                      m,
                      " "
                    )
                  ),
                  r.createElement(Se, { event: t, bIsOGG: p.is_ogg })
                )
              )
          : (Object(le.a)(
              p,
              "EventDetailsRightColumn - clan info (" +
                i.GetAccountID() +
                ") is missing"
            ),
            null);
      }
      function ve(e) {
        const { appid: t } = e;
        Object(le.a)(t && 0 != t, "Expected Appid In Game Info Section");
        const [a] = Object(z.b)(t, {
          include_assets: !0,
          include_platforms: !0,
          include_release: !0,
        });
        return r.createElement(
          "div",
          { className: C.a.EventDetailGameCallToAction },
          r.createElement(
            "div",
            { className: C.a.RightSideTitles },
            v.y.some((e) => t === e)
              ? Object(J.f)("#EventDisplay_RightColumnTitle_Blog")
              : Object(J.f)("#EventDisplay_RightColumnTitle_Game")
          ),
          r.createElement(ae.b, {
            imageType: "header",
            capsule: { id: t, type: "game" },
            bHidePriceIfOwned: !0,
            bHideStatusBanners: !0,
          }),
          r.createElement(
            "div",
            { className: Object($.a)(C.a.GameActions) },
            a
              ? r.createElement(ne.a, {
                  appid: t,
                  bIsFree: a.BIsFree(),
                  bIsComingSoon: a.BIsComingSoon(),
                  className: C.a.ActionButton,
                })
              : r.createElement(B.a, { size: "small", position: "center" })
          )
        );
      }
      function Ee(e) {
        const { clanSteamID: t } = e,
          [a, n] = Object(E.b)(t.GetAccountID());
        return n
          ? r.createElement(
              "div",
              { className: C.a.EventDetailGameCallToAction },
              r.createElement(
                "div",
                { className: C.a.RightSideTitles },
                n.group_name
              ),
              r.createElement(
                M.a,
                { href: Object(oe.h)(E.a.GetCreatorStoreURL(t)) },
                r.createElement("div", {
                  className: C.a.EventDetailsAvatar,
                  style: { backgroundImage: `url(${n.avatar_full_url})` },
                })
              )
            )
          : (Object(le.a)(
              n,
              "EventDetailsRightCreatorInfo - clan info (" +
                t.GetAccountID() +
                ") is missing"
            ),
            null);
      }
      const be = ["", "en-US", "en-GB", "zh-CN", "es-ES", "br-BR"];
      let he = class extends r.Component {
        GenerateOptions() {
          let e = new Array();
          return (
            be.forEach((t) =>
              e.push(r.createElement("option", { key: t, value: t }, t))
            ),
            e
          );
        }
        OnLanguageChange(e) {
          this.props.fnOverrideLocale(e.currentTarget.value);
        }
        render() {
          if (
            !R.a.Get().GetPartnerEventPermissions(this.props.event.clanSteamID)
              .valve_admin
          )
            return r.createElement("div", null);
          let e = this.GenerateOptions();
          return r.createElement(
            "div",
            { style: { paddingTop: 10 } },
            r.createElement(
              "div",
              {
                className: Object($.a)(
                  X.a.FlexColumnContainer,
                  X.a.ValveOnlyBackground
                ),
              },
              r.createElement(
                "div",
                {
                  className: Object($.a)(
                    X.a.EventEditorTextTitle,
                    X.a.ValveSupportOnly
                  ),
                },
                "Valve Support Tools (VO)"
              ),
              r.createElement("span", null, "Override Locale"),
              r.createElement("select", { onChange: this.OnLanguageChange }, e)
            )
          );
        }
      };
      Object(I.b)([ie.b], he.prototype, "OnLanguageChange", null),
        (he = Object(I.b)([_.a], he));
      let Se = class extends r.Component {
        constructor() {
          super(...arguments), (this.m_cancelSignal = d.a.CancelToken.source());
        }
        componentDidMount() {
          const { event: e } = this.props;
          e.BIsPartnerEvent() &&
            e.BIsVisibleEvent() &&
            R.a
              .Get()
              .LoadSingleAppEventPermissions(e.clanSteamID)
              .then((t) => {
                t &&
                  t.can_edit &&
                  q.LoadStatsForEvents(
                    e.clanSteamID,
                    [e.GID],
                    this.m_cancelSignal
                  );
              });
        }
        componentWillUnmount() {
          this.m_cancelSignal.cancel("EventDisplayEditorInfo cancelled");
        }
        render() {
          const { event: e, bIsOGG: t } = this.props;
          if (!R.a.Get().GetPartnerEventPermissions(e.clanSteamID).can_edit)
            return null;
          const a =
            e.BIsPartnerEvent() &&
            e.BIsVisibleEvent() &&
            q.GetStatsFor(e.clanSteamID, e.GID);
          return r.createElement(
            h.a,
            null,
            r.createElement(
              "div",
              { className: C.a.EditorStatsCtn },
              r.createElement(
                "div",
                { className: C.a.EditorStatsRow },
                r.createElement(
                  "span",
                  null,
                  Object(J.f)("#EventEditor_Comments")
                ),
                r.createElement(
                  "span",
                  null,
                  e.nCommentCount.toLocaleString(J.e.GetPreferredLocales())
                )
              ),
              r.createElement(
                "div",
                { className: C.a.EditorStatsRow },
                r.createElement(
                  "span",
                  null,
                  Object(J.f)("#EventEditor_UpVotes")
                ),
                r.createElement(
                  "span",
                  null,
                  e.nVotesUp
                    ? e.nVotesUp.toLocaleString(J.e.GetPreferredLocales())
                    : 0
                )
              ),
              r.createElement(
                "div",
                { className: C.a.EditorStatsRow },
                r.createElement(
                  "span",
                  null,
                  Object(J.f)("#EventEditor_DownVotes")
                ),
                r.createElement(
                  "span",
                  null,
                  e.nVotesDown
                    ? e.nVotesDown.toLocaleString(J.e.GetPreferredLocales())
                    : 0
                )
              )
            ),
            Boolean(a) &&
              r.createElement(
                "div",
                { className: C.a.EditorStatsCtn },
                Object(J.f)("#EventDashBoard_SummaryStats_Admin_Title"),
                r.createElement(ee, {
                  summary: a.m_stats,
                  bIsAllowedInLibrary: t,
                  bEventIsInModerationQueue: Object(v.e)(e),
                })
              )
          );
        }
      };
      Se = Object(I.b)([_.a], Se);
      var ge = a("A8Lc"),
        fe = a.n(ge);
      class we {
        constructor() {
          (this.m_objApprovalPriviledge = null),
            (this.m_LoadingPriviledgePromise = null);
          let e = Object(H.h)("sc_app_privildge", "application_config");
          this.ValidateStoreDefault(e)
            ? ("dev" === H.d.WEB_UNIVERSE &&
                console.log(
                  "DEV_DEBUG: CSteamChinaStore: Loading payload from data-*, bHasAccess: " +
                    e.bHasAccess
                ),
              (this.m_objApprovalPriviledge = e),
              (this.m_LoadingPriviledgePromise = null))
            : (H.l.logged_in && H.d.EREALM === p.h.k_ESteamRealmChina) ||
              (this.m_objApprovalPriviledge = { bHasAccess: !1 });
        }
        BHasSteamChinaAppApprovalPriviledge() {
          var e;
          return null === (e = this.m_objApprovalPriviledge) || void 0 === e
            ? void 0
            : e.bHasAccess;
        }
        HintLoadAppApprovalPriviledge() {
          return Object(I.a)(this, void 0, void 0, function* () {
            return this.m_objApprovalPriviledge
              ? this.m_objApprovalPriviledge
              : (this.m_LoadingPriviledgePromise ||
                  (this.m_LoadingPriviledgePromise = this.InternalLoadAppApprovalPriviledge()),
                this.m_LoadingPriviledgePromise);
          });
        }
        InternalLoadAppApprovalPriviledge() {
          var e;
          return Object(I.a)(this, void 0, void 0, function* () {
            const t =
              H.d.STORE_BASE_URL + "events_admin/ajaxgetscapprovalpriviledge";
            try {
              const a = yield d.a.get(t, { withCredentials: !0 });
              if (
                1 ==
                (null === (e = null == a ? void 0 : a.data) || void 0 === e
                  ? void 0
                  : e.success)
              )
                return (
                  (this.m_objApprovalPriviledge = {
                    bHasAccess: a.data.bHasAccess,
                  }),
                  this.m_objApprovalPriviledge
                );
            } catch (e) {
              const t = Object(V.a)(e);
              console.error(
                "CCuratorListStore.InternalLoadAppApprovalPriviledge: error on load: " +
                  t.strErrorMsg,
                t
              );
            }
            return { bHasAccess: !1 };
          });
        }
        static Get() {
          return we.s_Singleton || (we.s_Singleton = new we()), we.s_Singleton;
        }
        ValidateStoreDefault(e) {
          return e && "object" == typeof e && "boolean" == typeof e.bHasAccess;
        }
      }
      Object(I.b)([F.C], we.prototype, "m_objApprovalPriviledge", void 0);
      var Ie = a("thkD"),
        ye = a("jIgc"),
        Oe = a("rSrx");
      const je = Object(_.a)((e) => {
          const [t, a] = r.useState(null),
            { eventModel: n } = e;
          let s = n.clanSteamID.GetAccountID();
          r.useEffect(() => {
            const e = d.a.CancelToken.source();
            return (
              Object(I.a)(void 0, void 0, void 0, function* () {
                const t = i.a.InitFromClanID(s),
                  n = yield R.a.Get().LoadSingleAppEventPermissions(t),
                  r = yield we.Get().HintLoadAppApprovalPriviledge();
                e.token.reason ||
                  a(H.l.is_support || n.can_edit || r.bHasAccess);
              }),
              () => e.cancel("SteamChinaAdminPanel is unmounting")
            );
          }, [s]);
          const l = i.a.InitFromClanID(s);
          return H.l.is_support ||
            R.a.Get().GetPartnerEventPermissions(l).can_edit
            ? r.createElement(S.a, {
                eventModel: n,
                partnerEventStore: e.partnerEventStore,
                addtionalAdminButtons: t
                  ? [
                      r.createElement(De, {
                        key: "removesteamchina",
                        eventModel: n,
                      }),
                    ]
                  : void 0,
              })
            : we.Get().BHasSteamChinaAppApprovalPriviledge()
            ? r.createElement(
                "div",
                { className: G.DisplayAdminPanel },
                r.createElement(
                  "span",
                  { className: G.DisplayAdminPanel_Title },
                  Object(J.f)("#EventDisplay_Admin_Title")
                ),
                r.createElement(De, { key: "removesteamchina", eventModel: n })
              )
            : null;
        }),
        De = (e) => {
          const { eventModel: t } = e;
          return r.createElement(
            "div",
            {
              className: Object($.a)(
                Y.Button,
                G.AdminButton,
                Y.ValveOnlyBackground
              ),
              onClick: (a) => {
                let n = !1;
                Object(ye.d)(
                  r.createElement(
                    Ie.e,
                    {
                      strTitle: Object(J.f)(
                        "#EventAdmin_Moderation_HideEventInSC"
                      ),
                      strDescription: Object(J.f)(
                        "#EventAdmin_Moderation_HideEventInSC_Desc"
                      ),
                      bDestructiveWarning: !0,
                      closeModal: e.closeModal,
                      onOK: () => {
                        (n = !0),
                          Object(I.a)(void 0, void 0, void 0, function* () {
                            var a, n, s, l;
                            let i = new URLSearchParams();
                            i.append("sessionid", H.d.SESSIONID),
                              i.append(
                                "clan_accountid",
                                "" + t.clanSteamID.GetAccountID()
                              ),
                              i.append("gid_clan_event", "" + t.GID);
                            let o = !1,
                              c = 0;
                            try {
                              const e = `${H.d.STORE_BASE_URL}/events_admin/ajaxhidefromsteamchina`,
                                r = yield d.a.post(e, i, {
                                  withCredentials: !0,
                                });
                              (o =
                                1 ==
                                  (null === (a = null == r ? void 0 : r.data) ||
                                  void 0 === a
                                    ? void 0
                                    : a.success) ||
                                29 ==
                                  (null === (n = null == r ? void 0 : r.data) ||
                                  void 0 === n
                                    ? void 0
                                    : n.success)),
                                29 ==
                                  (null === (s = null == r ? void 0 : r.data) ||
                                  void 0 === s
                                    ? void 0
                                    : s.success) &&
                                  console.warn(
                                    `RemoveEventFromSteamChinaButton: we receive duplicate request ${t.clanSteamID.GetAccountID()} : ${
                                      t.GID
                                    }; event is still removed from SC`
                                  ),
                                (c =
                                  null === (l = null == r ? void 0 : r.data) ||
                                  void 0 === l
                                    ? void 0
                                    : l.success);
                            } catch (e) {
                              const t = Object(V.a)(e);
                              (c = t.errorCode),
                                console.error(
                                  "RemoveEventFromSteamChinaButton: error " +
                                    t.strErrorMsg,
                                  t
                                );
                            }
                            e.closeModal && e.closeModal(),
                              Object(ye.d)(
                                o
                                  ? r.createElement(
                                      Ie.e,
                                      { bAlertDialog: !0 },
                                      Object(J.f)("#EventDisplay_Share_Success")
                                    )
                                  : r.createElement(
                                      Ie.g,
                                      null,
                                      Object(J.f)(
                                        "#EventDisplay_Share_Failure"
                                      ) +
                                        " " +
                                        c
                                    ),
                                window
                              );
                          });
                      },
                    },
                    n &&
                      r.createElement(B.a, {
                        size: "medium",
                        position: "center",
                      })
                  ),
                  Object(Oe.o)(a)
                );
              },
            },
            Object(J.f)("#EventAdmin_Moderation_HideEventInSC")
          );
        };
      var Ae = a("Ys0h");
      const Ge = b.a.Get();
      function Ce() {
        document.body.classList.contains("events_hub") &&
          document.body.classList.remove("events_hub");
      }
      const Ne = Object(_.a)((e) => {
        const {
            bInfiniteScroll: t,
            event_gid: a,
            announcement_gid: n,
            clansteamid: l,
            appid: i,
          } = e,
          [o, c] = Object(r.useState)(a ? Ge.GetClanEventModel(a) : void 0),
          [m] = Object(z.b)(null == o ? void 0 : o.appid, {
            include_assets: !0,
            include_release: !0,
            include_platforms: !0,
            include_screenshots: !0,
          }),
          [_, v] = Object(r.useState)(!1),
          b = (e, t) => {
            t.token.reason ||
              (c(e),
              (function (e) {
                var t;
                let a;
                if (e && e.appid)
                  a =
                    null === (t = Ae.a.Get().GetApp(e.appid)) || void 0 === t
                      ? void 0
                      : t.GetName();
                else if (e && e.clanSteamID) {
                  const t = E.a.GetClanInfoByClanAccountID(
                    e.clanSteamID.GetAccountID()
                  );
                  a = t && t.group_name;
                }
                const n = e && e.GetNameWithFallback(Object(u.g)(H.d.LANGUAGE));
                if (e && a && n) {
                  const e = Object(J.f)(
                    "#EventCalendar_TabTitle_GroupNameAndEventDetail",
                    a,
                    n
                  );
                  document.title != e && (document.title = e);
                }
              })(e));
          },
          I = (e) => {
            const t = Object(V.a)(e);
            console.error("StoreEventDetailView failed " + t.strErrorMsg, t),
              v(!0);
          };
        if (
          (Object(r.useEffect)(Ce, []),
          Object(r.useEffect)(() => {
            const e = d.a.CancelToken.source();
            return (
              o ||
                (a && !Ge.GetClanEventModel(a)
                  ? Ge.LoadPartnerEventGeneric(l, i, a, void 0, 0)
                      .then((t) => b(t, e))
                      .catch(() => {
                        e.token.reason ||
                          Ge.LoadPartnerEventGeneric(l, i, void 0, a, 0)
                            .then((t) => b(t, e))
                            .catch(I);
                      })
                  : n &&
                    !Ge.GetClanEventGIDFromAnnouncementGID(n) &&
                    Ge.LoadPartnerEventGeneric(l, i, void 0, n, 0)
                      .then((t) => b(t, e))
                      .catch(I)),
              () => {
                e.cancel("StoreEventDetailView: unmounting");
              }
            );
          }, [a, l, i, n, o]),
          _ || !o || ((null == o ? void 0 : o.appid) && !m))
        ) {
          const e = "lang_" + Object(u.e)(Object(u.g)(H.d.LANGUAGE)),
            t = "";
          return s.a.createElement(
            "div",
            {
              className: Object($.a)(
                C.a.EventDetailsPageContainer,
                e,
                X.a.PartnerEventFont,
                C.a.NoTitleArtwork
              ),
            },
            s.a.createElement("div", { style: { height: "100px" } }),
            s.a.createElement(_e, { strImageURL: t }),
            s.a.createElement(ue, {
              strImageURL: t,
              body: _
                ? s.a.createElement(
                    "div",
                    { className: fe.a.ErrorMsg },
                    Object(J.n)(
                      "#Events_FailedToFind",
                      s.a.createElement(
                        "a",
                        { href: H.d.STORE_BASE_URL + "news/" },
                        Object(J.f)("#EventDisplay_NewsHubSubtitle")
                      )
                    )
                  )
                : s.a.createElement(B.a, {
                    string: Object(J.f)("#Loading"),
                    size: "medium",
                    position: "center",
                  }),
              postbody: Boolean(_ && l)
                ? s.a.createElement(w.a, {
                    clanAccountID: l.GetAccountID(),
                    partnerEventStore: Ge,
                  })
                : void 0,
            })
          );
        }
        return t
          ? s.a.createElement(
              h.a,
              null,
              s.a.createElement(g.a, {
                appid: o.appid,
                trackingLocation: 7,
                announcementGID: o.GetAnnouncementGID(),
                partnerEventStore: Ge,
                eventModel: o,
                showAppHeader: !0,
                closeModal: () =>
                  e.history.push(
                    Object(f.d)(o, f.a.k_eStoreNewsHub, "allowRelative")
                  ),
              })
            )
          : s.a.createElement(
              h.a,
              null,
              s.a.createElement(me, {
                lang: Object(u.g)(H.d.LANGUAGE),
                partnerEventStore: Ge,
                event: o,
                adminPanel:
                  H.d.EREALM === p.h.k_ESteamRealmChina
                    ? s.a.createElement(je, { eventModel: o })
                    : s.a.createElement(S.a, {
                        eventModel: o,
                        partnerEventStore: Ge,
                      }),
                otherEventRow: s.a.createElement(w.a, {
                  clanAccountID: o.clanSteamID.GetAccountID(),
                  gidAnnouncement: o.AnnouncementGID,
                  partnerEventStore: Ge,
                }),
              })
            );
      });
      var Le = Object(l.j)(Ne),
        Te = a("RPnj"),
        Be = a("rkHy");
      t.default = (e) => {
        const [t] = Object(c.d)("byday", !1),
          [a] = Object(c.d)("upcoming", !1);
        return Object(o.b)()
          ? s.a.createElement(
              Be.a,
              null,
              s.a.createElement(
                l.d,
                null,
                s.a.createElement(l.b, {
                  exact: !0,
                  path: n.b.EventViewByApp(
                    ":appid(\\d+)",
                    ":event_gid(\\d+)",
                    ":vanity?"
                  ),
                  render: (e) =>
                    s.a.createElement(
                      Le,
                      Object.assign(
                        { key: "detailview_" + e.match.params.event_gid },
                        e,
                        {
                          appid:
                            e.match.params.appid &&
                            Number.parseInt(e.match.params.appid),
                          event_gid: e.match.params.event_gid,
                          bInfiniteScroll: "inline" == e.match.params.viewtype,
                        }
                      )
                    ),
                }),
                s.a.createElement(l.b, {
                  exact: !0,
                  path: n.b.EventViewByGroup(
                    ":groupid(\\d+)",
                    ":event_gid(\\d+)",
                    ":vanity?"
                  ),
                  render: (e) =>
                    s.a.createElement(
                      Le,
                      Object.assign(
                        { key: "detailview_" + e.match.params.event_gid },
                        e,
                        {
                          clansteamid: new i.a(e.match.params.groupid),
                          event_gid: e.match.params.event_gid,
                          bInfiniteScroll: "inline" == e.match.params.viewtype,
                        }
                      )
                    ),
                }),
                s.a.createElement(l.b, {
                  exact: !0,
                  path: n.b.OldAnnouncementViewByApp(
                    ":appid(\\d+)",
                    ":announcement_gid(\\d+)",
                    ":vanity?"
                  ),
                  render: (e) =>
                    s.a.createElement(
                      Le,
                      Object.assign(
                        {
                          key:
                            "detailoldview_" + e.match.params.announcement_gid,
                        },
                        e,
                        {
                          appid:
                            e.match.params.appid &&
                            Number.parseInt(e.match.params.appid),
                          announcement_gid: e.match.params.announcement_gid,
                          bInfiniteScroll:
                            "old_inline" == e.match.params.viewtype,
                        }
                      )
                    ),
                }),
                s.a.createElement(l.b, {
                  exact: !0,
                  path: n.b.OldAnnouncementViewByGroup(
                    ":groupid(\\d+)",
                    ":announcement_gid(\\d+)",
                    ":vanity?"
                  ),
                  render: (e) =>
                    s.a.createElement(
                      Le,
                      Object.assign(
                        {
                          key:
                            "detailoldview_" + e.match.params.announcement_gid,
                        },
                        e,
                        {
                          clansteamid: new i.a(e.match.params.groupid),
                          announcement_gid: e.match.params.announcement_gid,
                          bInfiniteScroll:
                            "old_inline" == e.match.params.viewtype,
                        }
                      )
                    ),
                }),
                s.a.createElement(l.b, {
                  exact: !0,
                  path: n.b.NewsHubApp(":appid(\\d+)", ":vanity?"),
                  render: (e) =>
                    s.a.createElement(
                      Te.c,
                      Object.assign({ key: e.match.params.appid }, e, {
                        filter_to_appids: [Number(e.match.params.appid)],
                        section_by_day: t,
                      })
                    ),
                }),
                s.a.createElement(l.b, {
                  exact: !0,
                  path: n.b.NewsHubGroup(":groupid(\\d+)", ":vanity?"),
                  render: (e) =>
                    s.a.createElement(
                      Te.c,
                      Object.assign({ key: e.match.params.groupid }, e, {
                        filter_to_clanids: [Number(e.match.params.groupid)],
                        section_by_day: t,
                      })
                    ),
                }),
                s.a.createElement(l.b, {
                  exact: !0,
                  path: n.b.NewsHubCollection(":collectionid", ":vanity?"),
                  render: (e) =>
                    s.a.createElement(
                      Te.c,
                      Object.assign({ key: e.match.params.collectionid }, e, {
                        filter_to_collection: e.match.params.collectionid,
                        section_by_day: t,
                      })
                    ),
                }),
                s.a.createElement(l.b, {
                  exact: !0,
                  path: n.b.NewsHubSale(":saleid", ":vanity?"),
                  render: (e) =>
                    s.a.createElement(
                      Te.c,
                      Object.assign({ key: e.match.params.saleid }, e, {
                        filter_to_saleid: e.match.params.saleid,
                        section_by_day: t || a,
                      })
                    ),
                }),
                s.a.createElement(l.b, {
                  exact: !0,
                  path: n.b.NewsHub(),
                  render: (e) =>
                    s.a.createElement(
                      Te.c,
                      Object.assign({ key: "global" }, e, { section_by_day: t })
                    ),
                })
              )
            )
          : null;
      };
    },
    "6bdu": function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return _;
      });
      var n = a("q1tI"),
        r = a.n(n),
        s = a("rB+X"),
        l = a("GXif"),
        i = a("msu0"),
        o = a("/Q1a"),
        c = a("DgOg"),
        m = a("GbHM"),
        d = a("tQrp");
      function _(e) {
        const { gidEvent: t } = e,
          a = Object(s.b)(t),
          [_, u] = Object(n.useMemo)(() => {
            var e, t, n, r;
            if (
              (null ===
                (t =
                  null === (e = null == a ? void 0 : a.jsondata) || void 0 === e
                    ? void 0
                    : e.localized_sale_product_banner) || void 0 === t
                ? void 0
                : t.length) > 0 &&
              (null ===
                (r =
                  null === (n = null == a ? void 0 : a.jsondata) || void 0 === n
                    ? void 0
                    : n.localized_sale_product_mobile_banner) || void 0 === r
                ? void 0
                : r.length) > 0
            ) {
              const e = Object(i.g)(o.d.LANGUAGE),
                t = l.a.GetWithFallback(
                  a.jsondata.localized_sale_product_banner,
                  e
                ),
                n = l.a.GetWithFallback(
                  a.jsondata.localized_sale_product_mobile_banner,
                  e
                ),
                r = a.clanSteamID.GetAccountID();
              return [
                o.d.MEDIA_CDN_COMMUNITY_URL + `images/clans/${r}/${t}`,
                o.d.MEDIA_CDN_COMMUNITY_URL + `images/clans/${r}/${n}`,
              ];
            }
            return [null, null];
          }, [a]);
        return _ && u
          ? r.a.createElement(
              d.b,
              { href: a.GetSaleURL(), className: c.Link },
              r.a.createElement("img", {
                src: _,
                className: Object(m.a)(c.Banner, c.Big),
              }),
              r.a.createElement("img", {
                src: u,
                className: Object(m.a)(c.Banner, c.Mobile),
              })
            )
          : null;
      }
    },
    A8Lc: function (e, t, a) {
      e.exports = { ErrorMsg: "eventdetailview_ErrorMsg_1ZEL9" };
    },
    C1a2: function (e, t, a) {
      "use strict";
      a.d(t, "c", function () {
        return d;
      }),
        a.d(t, "a", function () {
          return _;
        }),
        a.d(t, "b", function () {
          return u;
        });
      var n = a("mrSG"),
        r = a("/cMS"),
        s = a("q1tI"),
        l = a("rmVU"),
        i = a("Ys0h"),
        o = a("2VXD"),
        c = a("f5iL"),
        m = a("/Q1a");
      function d() {
        const e = Object(o.a)("usePartnerStoreBrowseAPI"),
          [t, a] = Object(s.useState)(!1);
        return (
          Object(s.useEffect)(() => {
            (function (e = !1) {
              return Object(n.a)(this, void 0, void 0, function* () {
                if (e && i.a.BIsInitialized()) return;
                const t = Object(m.h)(
                  "partnerbrowse_webapi_token",
                  "application_config"
                );
                Object(c.a)(Boolean(t), "require partnerbrowse_webapi_token");
                const a = new l.a(m.d.WEBAPI_BASE_URL, t);
                return (
                  ("dev" != m.d.WEB_UNIVERSE && "beta" != m.d.WEB_UNIVERSE) ||
                    console.log(
                      "DEV_DEBUG: Initializing CStoreItemCache with access token",
                      t
                    ),
                  _(t),
                  i.a.Initialize(a, m.l.is_partner_member)
                );
              });
            })().then(() => {
              var t;
              (null === (t = null == e ? void 0 : e.token) || void 0 === t
                ? void 0
                : t.reason) || a(!0);
            });
          }, []),
          t
        );
      }
      function _(e) {
        r.a.BIsInitialized() || r.a.Initialize(new l.a(m.d.WEBAPI_BASE_URL, e));
      }
      function u(e) {
        return r.a.BIsInitialized() || _(e || null), !0;
      }
    },
    DgOg: function (e, t, a) {
      e.exports = {
        Link: "salebanner_Link_26cHo",
        Banner: "salebanner_Banner_2df4N",
        Big: "salebanner_Big_1m7WT",
        Mobile: "salebanner_Mobile_2w3oX",
      };
    },
    QY55: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return c;
      });
      var n = a("q1tI"),
        r = a("TGWf"),
        s = a("GbHM"),
        l = a("55Ip"),
        i = a("fsrB"),
        o = a("Lsvi");
      function c(e) {
        const { crumbs: t, className: a } = e;
        return t && 0 != t.length
          ? n.createElement(
              "div",
              { className: Object(s.a)(r.BreadContainer, a) },
              n.createElement(
                o.a,
                { className: "blockbg", "flow-children": "row" },
                t.map((e) => {
                  const t = new Array();
                  return (
                    e.url.startsWith("http")
                      ? t.push(
                          n.createElement(
                            i.c,
                            { key: "anchor_" + e.name, href: e.url },
                            e.name
                          )
                        )
                      : t.push(
                          n.createElement(
                            l.b,
                            { key: "link_" + e.name, to: e.url },
                            e.name
                          )
                        ),
                    t.push(
                      n.createElement("span", { key: e.name + "span" }, " > ")
                    ),
                    t
                  );
                })
              ),
              n.createElement("div", { style: { clear: "left" } })
            )
          : null;
      }
    },
    Rpai: function (e, t, a) {
      e.exports = {
        TileContainer: "demoandquickpitch_TileContainer_3rhAA",
        TileTitleContainer: "demoandquickpitch_TileTitleContainer_2Tucp",
        TileTitleInnerContainer:
          "demoandquickpitch_TileTitleInnerContainer_18fsE",
        TileTitle: "demoandquickpitch_TileTitle_3egdD",
        TileActionButton: "demoandquickpitch_TileActionButton_fEkpK",
        TileSubtitle: "demoandquickpitch_TileSubtitle_3qqT7",
        TileActionContainer: "demoandquickpitch_TileActionContainer_2K-Yf",
        TileActionInnerContainer:
          "demoandquickpitch_TileActionInnerContainer_3Tso4",
        TileActionInner: "demoandquickpitch_TileActionInner_2hCPY",
        TileActionInnerTitle: "demoandquickpitch_TileActionInnerTitle_2mauG",
        TileActionInnerText: "demoandquickpitch_TileActionInnerText_2p_X8",
      };
    },
    TGWf: function (e, t, a) {
      e.exports = { BreadContainer: "breadcrumbs_BreadContainer_1QPim" };
    },
    Wym2: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "Events", function () {
          return z;
        }),
        a.d(t, "DemoAndQuickPitch", function () {
          return K;
        });
      var n = a("rkHy"),
        r = a("q1tI"),
        s = a.n(r),
        l = a("mrSG"),
        i = (a("XrGS"), a("RrtU")),
        o = a("vDqi"),
        c = a.n(o),
        m = a("TyAF"),
        d = a("msu0"),
        _ = (a("Zdsb"), a("44wC")),
        u = a("KVor"),
        p = a("8r/D"),
        v = a("f+IU"),
        E = a("rSrx"),
        b = a("GXif"),
        h = a("/Q1a"),
        S = a("fmsa"),
        g = a("jIgc"),
        f = a("Rpai"),
        w = a("KQHr"),
        I = a("4EJs");
      const y = Object(m.a)((e) => {
        const t = Object(r.useRef)(null),
          a = Number(e.appID),
          n = Object(r.useMemo)(() => ({ id: a, type: "game" }), [a]),
          [o] = Object(i.b)(a, {}),
          [m, y] = Object(r.useState)(null),
          [O, j] = Object(r.useState)(null);
        Object(r.useEffect)(
          () => (
            Object(l.a)(void 0, void 0, void 0, function* () {
              const e = c.a.CancelToken.source();
              (t.current = e.cancel), yield _.a.Get().LoadAppIDsBatch([a], e);
              const n = _.a.Get().GetDemoEventInfo(a),
                r = yield u.b.LoadAdjacentPartnerEvents(null, null, a, 0, 1, {
                  exclude_tags: ["steam_game_festival_artist_statement"],
                  require_tags: ["steam_game_festival_broadcast"],
                });
              e.token.reason || (y(n), r.length > 0 && j(r[0]));
            }),
            () => {
              t.current && t.current("DemoAndQuickPitch: Unmounting");
            }
          ),
          [a]
        );
        const D = m && m.demo_appid > 0,
          A = O ? O.GetNameWithFallback(Object(d.g)(h.d.LANGUAGE)) : null,
          G = !O || O.BHasEventEnded();
        return D
          ? s.a.createElement(
              s.a.Fragment,
              null,
              s.a.createElement(
                "div",
                { className: f.TileContainer },
                s.a.createElement(
                  "div",
                  { className: f.TileTitleContainer },
                  s.a.createElement(
                    "div",
                    { className: f.TileTitleInnerContainer },
                    s.a.createElement(
                      "div",
                      { className: f.TileTitle },
                      Object(b.f)(
                        "#Sale_DownloadDemo",
                        null == o ? void 0 : o.GetName()
                      )
                    ),
                    s.a.createElement(I.i, { item: n })
                  ),
                  s.a.createElement(w.a, {
                    info: n,
                    className: f.TileActionButton,
                  })
                ),
                s.a.createElement(
                  "div",
                  { className: f.TileActionContainer },
                  A &&
                    s.a.createElement(
                      "div",
                      { className: f.TileActionInnerContainer },
                      G
                        ? s.a.createElement(
                            "h1",
                            null,
                            Object(b.f)("#EventBrowse_RecentUpdates")
                          )
                        : s.a.createElement(
                            "h1",
                            null,
                            Object(b.f)("#EventCalendar_TuneIn")
                          ),
                      s.a.createElement(
                        "div",
                        {
                          className: f.TileActionInner,
                          onClick: (e) => {
                            Object(g.d)(
                              s.a.createElement(v.a, {
                                initialEvent: O,
                                bShowOnlyInitialEvent: !1,
                                partnerEventStore: u.b,
                                emoticonStore: p.b,
                                showAppHeader: !0,
                              }),
                              E.o(e)
                            );
                          },
                        },
                        s.a.createElement(
                          "div",
                          { className: f.TileActionInnerTitle },
                          A
                        ),
                        s.a.createElement(
                          "div",
                          { className: f.TileActionInnerText },
                          s.a.createElement(S.a, {
                            dateAndTime: O.GetStartTimeAndDateUnixSeconds(),
                            bSingleLine: !0,
                          })
                        )
                      )
                    )
                )
              )
            )
          : null;
      });
      a("QAsS"), a("KjDl");
      var O = a("ue1x"),
        j = a("cXRO"),
        D = (a("lo3/"), a("fsrB")),
        A = a("Lsvi"),
        G = a("O8Yk"),
        C = (a("ROh0"), a("Sn0s"), a("AM5O")),
        N = a("nGID"),
        L = a("gU2e"),
        T = a("KSg0"),
        B = a.n(T),
        k = a("e356"),
        M = a("kWcV"),
        P = a("hCpY"),
        U = a("09aD"),
        R = a("j4v3"),
        H = a("YqLl");
      class F extends s.a.Component {
        constructor(e) {
          super(e),
            (this.state = {
              events: null,
              bShowModal: !1,
              modalInitialEvent: null,
              bPreLoaded: !1,
              announcementGIDList: [],
              last_update_event: null,
            });
          const t = Object(N.a)("EventWebRowEmbed");
          this.ValidateStoreDefault(t) &&
            ((this.state.bPreLoaded = t.bPreLoaded),
            (this.state.announcementGIDList = t.announcementGIDList),
            (this.state.last_update_event = t.last_update_event),
            (this.state.events = []),
            this.state.announcementGIDList.forEach((e) => {
              const t = u.b.GetClanEventFromAnnouncementGID(e);
              t && this.state.events.push(t);
            }));
        }
        componentDidMount() {
          return Object(l.a)(this, void 0, void 0, function* () {
            const {
              appid: e,
              event_customization: t,
              partnerEventStore: a,
              trackingLocation: n,
            } = this.props;
            if (!this.state.bPreLoaded) {
              const r = yield a.LoadAdjacentPartnerEvents(
                null,
                null,
                e,
                0,
                2,
                t
              );
              if ((this.setState({ events: r }), n && r && r.length > 0)) {
                const e = C.a.Get().GetTracker();
                this.state.events
                  .filter((e) => e.BIsPartnerEvent())
                  .forEach((t) =>
                    e.MarkEventShown(t.GID, t.clanSteamID.GetAccountID(), n)
                  ),
                  e.Flush();
              }
            }
            window.fnPartnerEvent_ShowInfiniteScroll = (e, t) => {
              this.setState({
                bShowModal: !0,
                announcementGID: t,
                modalInitialEvent: void 0,
              });
            };
          });
        }
        ValidateStoreDefault(e) {
          const t = e;
          return (
            !(!t || "object" != typeof t) &&
            void 0 !== t.bPreLoaded &&
            "boolean" == typeof t.bPreLoaded &&
            Array.isArray(t.announcementGIDList)
          );
        }
        ShowModal(e) {
          const { trackingLocation: t } = this.props;
          this.setState({
            bShowModal: !0,
            modalInitialEvent: e,
            announcementGID: void 0,
          });
          const a = C.a.Get().GetTracker();
          e &&
            e.BIsPartnerEvent() &&
            a.MarkEventRead(e.GID, e.clanSteamID.GetAccountID(), t) &&
            a.Flush();
        }
        ShowLatestUpdateModal() {
          const {
              event_gid: e,
              announcement_gid: t,
              clan_account_id: a,
            } = this.state.last_update_event,
            { trackingLocation: n } = this.props;
          this.setState({
            bShowModal: !0,
            modalInitialEvent: void 0,
            announcementGID: t,
          });
          const r = C.a.Get().GetTracker();
          e && r.MarkEventRead(e, a, n) && r.Flush();
        }
        CloseModal() {
          this.setState({ bShowModal: !1, modalInitialEvent: null });
        }
        BHasLastUpdateEvent() {
          var e;
          return Boolean(
            null === (e = this.state.last_update_event) || void 0 === e
              ? void 0
              : e.rtime
          );
        }
        BShouldShowLastUpdateEvent() {
          const { last_update_event: e, events: t } = this.state;
          return (
            !(
              !this.BHasLastUpdateEvent() ||
              !(null == e ? void 0 : e.announcement_gid)
            ) && !(null == t ? void 0 : t.length)
          );
        }
        render() {
          var e;
          const t = this.state.events;
          if (!t)
            return s.a.createElement(
              "div",
              { className: B.a.FlexCenter },
              s.a.createElement(M.a, { size: "medium", position: "center" })
            );
          const a = window.screen.width <= 500 ? 1 : 2,
            n = Boolean(null == t ? void 0 : t.length),
            r = this.BHasLastUpdateEvent(),
            l = this.BShouldShowLastUpdateEvent()
              ? this.state.last_update_event.announcement_gid
              : void 0,
            { strClassName: i } = this.props;
          return s.a.createElement(
            D.e,
            { className: i },
            this.state.bShowModal &&
              s.a.createElement(
                V,
                Object.assign({}, this.props, {
                  announcementGID:
                    this.state.announcementGID ||
                    (null === (e = this.state.modalInitialEvent) || void 0 === e
                      ? void 0
                      : e.AnnouncementGID),
                  eventModel: this.state.modalInitialEvent,
                  closeModal: this.CloseModal,
                })
              ),
            n &&
              s.a.createElement(
                "div",
                null,
                s.a.createElement(
                  "h2",
                  null,
                  Object(b.f)("#EventBrowse_RecentEvents")
                ),
                !h.d.IN_GAMEPADUI &&
                  s.a.createElement(
                    "div",
                    { className: H.SectionButtonCtn },
                    this.props.bViewAllShowInfiniteScroll
                      ? s.a.createElement(
                          D.e,
                          {
                            className: H.SectionButton,
                            onClick: () => this.ShowModal(t[0]),
                          },
                          Object(b.f)("#EventBrowse_MoreEventsBtn")
                        )
                      : s.a.createElement(
                          R.c,
                          {
                            eventModel: t[0],
                            route: R.a.k_eViewWebSiteHub,
                            className: H.SectionButton,
                          },
                          Object(b.f)("#EventBrowse_MoreEventsBtn")
                        )
                  ),
                s.a.createElement(
                  "div",
                  { className: H.EventsSummariesCtn },
                  t.slice(0, a).map((e) => {
                    const a =
                      1 === t.length && window.screen.width > 500 ? L.c : L.b;
                    return s.a.createElement(a, {
                      key: e.GID,
                      event: e,
                      onClick: (t) => {
                        this.ShowModal(e),
                          t.stopPropagation(),
                          t.preventDefault();
                      },
                    });
                  })
                )
              ),
            Boolean(r && l) &&
              s.a.createElement(W, {
                nUpdateTime: this.state.last_update_event.rtime,
                announcementGID: l,
                onClick: this.ShowLatestUpdateModal,
              }),
            Boolean(r && !l && !h.d.IN_GAMEPADUI) &&
              s.a.createElement(x, {
                nUpdateTime: this.state.last_update_event.rtime,
                onClick: this.ShowLatestUpdateModal,
              })
          );
        }
      }
      function V(e) {
        const {
          appid: t,
          partnerEventStore: a,
          trackingLocation: n,
          announcementGID: r,
          eventModel: l,
          closeModal: i,
        } = e;
        return s.a.createElement(U.a, {
          className: h.d.IN_GAMEPADUI ? void 0 : H.StoreHeaderAdjust,
          eventClassName: h.d.IN_GAMEPADUI ? H.GamePadUIWidthAdjust : void 0,
          appid: t,
          trackingLocation: n,
          announcementGID: r,
          partnerEventStore: a,
          eventModel: l,
          closeModal: i,
        });
      }
      function x(e) {
        return s.a.createElement(
          "div",
          { className: H.LatestUpdateButtonCtn },
          s.a.createElement(
            "div",
            { className: H.LatestUpdateIcon },
            s.a.createElement(k.wb, null)
          ),
          s.a.createElement(
            D.e,
            { className: H.LatestUpdateButton, onClick: e.onClick },
            Object(b.f)(
              "#EventBrowse_LatestUpdateTime_Button",
              Object(b.p)(e.nUpdateTime)
            )
          )
        );
      }
      function W(e) {
        const { nUpdateTime: t, announcementGID: a, onClick: n } = e,
          r = a ? u.b.GetClanEventFromAnnouncementGID(a) : null,
          l = (e) => {
            null == n || n(), e.stopPropagation(), e.preventDefault();
          };
        return s.a.createElement(
          "div",
          null,
          s.a.createElement(
            "h2",
            null,
            Object(b.f)("#EventBrowse_LastUpdateDate", Object(b.p)(t))
          ),
          s.a.createElement(
            "div",
            { className: H.SectionButtonCtn },
            s.a.createElement(
              "div",
              { className: H.SectionButton, onClick: l },
              Object(b.f)("#EventBrowse_ViewLatestUpdate")
            )
          ),
          Boolean(r) &&
            s.a.createElement(
              A.a,
              {
                className: H.EventsSummariesCtn,
                "flow-children": "column",
                navEntryPreferPosition: G.d.PREFERRED_CHILD,
              },
              s.a.createElement(L.c, { event: r, onClick: l })
            )
        );
      }
      function q(e) {
        return (t) => s.a.createElement(n.a, null, s.a.createElement(e, t));
      }
      Object(l.b)([P.b], F.prototype, "ShowModal", null),
        Object(l.b)([P.b], F.prototype, "ShowLatestUpdateModal", null),
        Object(l.b)([P.b], F.prototype, "CloseModal", null);
      const z = q(function (e) {
          const t = Object(O.b)(),
            a = new Date(t.setUTCHours(0, 0, 0, 0) - 15552e6),
            n = Math.floor(a.getTime() / 1e3),
            { appid: r } = e;
          return s.a.createElement(F, {
            appid: r,
            partnerEventStore: j.a.Get(),
            event_customization: {
              rtime_oldestevent: n,
              exclude_tags: ["patchnotes", "hide_store", "mod_hide_store"],
              exclude_event_types: [34],
            },
            strClassName: "early_access_announcements",
            trackingLocation: 3,
          });
        }),
        K = q(y);
    },
    YqLl: function (e, t, a) {
      e.exports = {
        "duration-app-launch": "800ms",
        Container: "partnereventwebrowembed_Container_3DZHU",
        StoreHeaderAdjust: "partnereventwebrowembed_StoreHeaderAdjust_1BdU3",
        SectionButtonCtn: "partnereventwebrowembed_SectionButtonCtn_1GTuE",
        SectionButton: "partnereventwebrowembed_SectionButton_1-yPT",
        EventsSummariesCtn: "partnereventwebrowembed_EventsSummariesCtn_2UHto",
        LatestUpdateButtonCtn:
          "partnereventwebrowembed_LatestUpdateButtonCtn_fKrIt",
        LatestUpdateIcon: "partnereventwebrowembed_LatestUpdateIcon_zbw9b",
        LatestUpdateButton: "partnereventwebrowembed_LatestUpdateButton_3F6YM",
      };
    },
    "lo3/": function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return m;
      });
      var n = a("mrSG"),
        r = a("q1tI"),
        s = a.n(r),
        l = a("fsrB"),
        i = a("ez+p"),
        o = a("hCpY"),
        c = a("/Q1a");
      function m(e) {
        const { children: t, navTreeRef: a } = e,
          r = Object(n.c)(e, ["children", "navTreeRef"]),
          m = s.a.useRef(),
          d = Object(o.g)(m, a);
        if (c.d.IN_GAMEPADUI) {
          const e = window.__nav_tree_root;
          return s.a.createElement(
            l.b,
            Object.assign({}, r, {
              navTreeRef: d,
              secondary: !0,
              parentEmbeddedNavTree: e,
            }),
            s.a.createElement(i.a, null, t)
          );
        }
        return s.a.createElement(s.a.Fragment, null, t);
      }
    },
    rkHy: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return _;
      });
      var n = a("wd/R"),
        r = a("q1tI"),
        s = a("rmVU"),
        l = a("FKEV"),
        i = a("AM5O"),
        o = a("KVor"),
        c = a("C1a2"),
        m = a("GXif"),
        d = a("/Q1a");
      function _(e) {
        const [t, a] = r.useState(i.a.IsInitialized());
        return (
          r.useEffect(() => {
            l.a.Init(new s.a(d.d.WEBAPI_BASE_URL)),
              o.b.Init(),
              i.a.InitGlobal().then(() => a(!0)),
              Object(c.a)(null);
          }, []),
          r.useEffect(() => {
            const e = Object(m.c)();
            e && n.locale(e);
          }, []),
          t ? e.children : null
        );
      }
    },
  },
]);
