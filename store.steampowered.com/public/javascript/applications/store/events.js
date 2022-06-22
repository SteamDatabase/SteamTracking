/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [29],
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
        p = a("msu0"),
        u = a("Zdsb"),
        v = a("XrGS"),
        E = (a("KjDl"), a("wijF")),
        b = a("cXRO"),
        h = a("+aRA"),
        g = a("mR6x"),
        S = a("09aD"),
        y = a("j4v3"),
        w = a("gU2e"),
        O = a("mrSG"),
        j = a("aoTL"),
        I = (a("QwK/"), a("ue1x")),
        D = a("AM5O"),
        A = a("/Q1a"),
        f = a("2vnA"),
        N = (a("sTxY"), a("TqgT"));
      class C {
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
      Object(O.b)([f.C], C.prototype, "m_stats", void 0),
        Object(O.b)([f.C], C.prototype, "m_lastUpdateTime", void 0);
      class T {
        constructor() {
          (this.m_mapPerEventStats = new Map()),
            (this.m_mapSummaryStats = new Map()),
            (this.m_bLoadedFromConfig = !1);
        }
        LazyInit() {
          if (!this.m_bLoadedFromConfig) {
            let e = Object(A.h)("trackingdatasummary", "application_config");
            this.ValidateStoreDefault(e) &&
              this.m_mapSummaryStats.set(e.clan_account_id, new C(e));
            let t = Object(A.h)("trackingdataevents", "application_config");
            this.ValidateStoreDefaultList(t) &&
              t.forEach((e) => {
                let t = i.a.InitFromClanID(e.clan_account_id),
                  a = this.GetKey(t, e.event_gid);
                this.m_mapPerEventStats.set(a, new C(e));
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
              this.m_mapPerEventStats.set(a, new C(null)),
            this.m_mapPerEventStats.get(a)
          );
        }
        GetTotalStats(e) {
          return (
            this.LazyInit(),
            this.m_mapSummaryStats.has(e.GetAccountID()) ||
              this.m_mapSummaryStats.set(e.GetAccountID(), new C(null)),
            this.m_mapSummaryStats.get(e.GetAccountID())
          );
        }
        GetKey(e, t) {
          return e.GetAccountID() + "_" + t;
        }
        LoadStatsForEvents(e, t, a) {
          return Object(O.a)(this, void 0, void 0, function* () {
            this.LazyInit();
            let n = Date.now() / 1e3,
              r = t.filter((t) => {
                let a = this.GetKey(e, t),
                  r = this.m_mapPerEventStats.get(a);
                return !r || null == r.m_stats || r.m_lastUpdateTime < n - 3600;
              });
            if (!r || 0 == r.length) return !0;
            let s = Object(A.f)() + "actions/ajaxgetpartnereventsreport",
              l = {
                sessionid: A.d.SESSIONID,
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
                Object(f.G)(() => {
                  this.m_mapSummaryStats.set(
                    e.GetAccountID(),
                    new C(t.data.summary)
                  ),
                    t.data.events_detail.forEach((t) => {
                      let a = this.GetKey(e, t.event_gid);
                      if (this.m_mapPerEventStats.has(a)) {
                        this.m_mapPerEventStats.get(a).reset(t);
                      } else this.m_mapPerEventStats.set(a, new C(t));
                    });
                }),
                !0
              );
            } catch (e) {
              let t = Object(N.a)(e);
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
      Object(O.b)([f.C], T.prototype, "m_mapPerEventStats", void 0),
        Object(O.b)([f.C], T.prototype, "m_mapSummaryStats", void 0),
        Object(O.b)([f.k], T.prototype, "LazyInit", null);
      const G = new T();
      a("KVor");
      var B = a("RrtU"),
        L = a("QY55"),
        k = a("f+IU"),
        M = a("/dWE"),
        P = a("cFM5"),
        U = a("pr76"),
        R = a("nWW+"),
        H = a("+zS6"),
        F = a("6qRO"),
        x = a.n(F),
        V = a("EYmU"),
        W = a("w4f7"),
        q = a("+VGL"),
        z = a.n(q),
        K = a("GbHM"),
        Q = a("GXif"),
        Y = a("2+/j"),
        X = a("r0f0");
      let $ = class extends r.Component {
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
                    className: Object(K.a)(
                      Y.StatsCtnTitle,
                      n ? Y.NormalStatsMode : Y.SmallStatsMode
                    ),
                  },
                  r.createElement(
                    "h1",
                    null,
                    Object(Q.g)("#EventDashBoard_SummaryStats_Title")
                  ),
                  Boolean(n) &&
                    r.createElement(
                      "p",
                      null,
                      Object(Q.g)("#EventDashBoard_SummaryStats_Desc"),
                      " ",
                      r.createElement(
                        "a",
                        {
                          href: "https://partner.steamgames.com/doc/marketing/event_tools/stats",
                          target: "_blank",
                        },
                        Object(Q.g)("#EventDashBoard_SummaryStats_Link")
                      )
                    )
                ),
                r.createElement(
                  "div",
                  {
                    className: Object(K.a)(
                      Y.TotalsCtn,
                      n ? Y.NormalStatsMode : Y.SmallStatsMode
                    ),
                  },
                  r.createElement(
                    "div",
                    { className: Y.StatsTitle },
                    r.createElement(
                      "span",
                      { className: Y.StatDescription },
                      Object(Q.g)(
                        "#EventDashBoard_SummaryStats_TotalImpressions"
                      )
                    ),
                    r.createElement(
                      "span",
                      { className: Y.StatFigure },
                      Object(X.a)(e.total_showm)
                    )
                  ),
                  r.createElement(
                    "div",
                    { className: Y.StatsTitle },
                    r.createElement(
                      "span",
                      { className: Y.StatDescription },
                      Object(Q.g)("#EventDashBoard_SummaryStats_TotalViews")
                    ),
                    r.createElement(
                      "span",
                      { className: Y.StatFigure },
                      Object(X.a)(e.total_read)
                    )
                  )
                ),
                Boolean(a && t) &&
                  r.createElement(
                    "div",
                    { className: Y.ModerationWarningCtn },
                    r.createElement(
                      "div",
                      { className: Y.ModerationWarning },
                      Object(Q.g)("#EventDashBoard_ModerationQueueWarning")
                    ),
                    r.createElement(
                      "a",
                      {
                        href:
                          A.d.PARTNER_BASE_URL +
                          "doc/marketing/event_tools/moderation",
                      },
                      Object(Q.g)("#EventDashBoard_Location_ModerationTitle")
                    )
                  ),
                r.createElement(
                  "div",
                  {
                    className: Object(K.a)(
                      Y.StatsCtn,
                      n ? Y.NormalStatsMode : Y.SmallStatsMode
                    ),
                  },
                  a &&
                    r.createElement(
                      "div",
                      {
                        className: Object(K.a)(
                          Y.StatsLeftSection,
                          t && Y.DisabledStats
                        ),
                      },
                      r.createElement(
                        "div",
                        { className: Y.StatsTitle_ctn },
                        r.createElement(
                          "span",
                          null,
                          Object(Q.g)("#EventDashBoard_Location_LibraryHome")
                        ),
                        r.createElement(
                          "span",
                          { className: Y.ModerationNote },
                          "( ",
                          Object(Q.g)(
                            "#EventDashBoard_Location_WaitingModeraion"
                          ),
                          " )"
                        )
                      ),
                      r.createElement(
                        "div",
                        { className: Y.StatsTitle },
                        r.createElement(
                          "span",
                          null,
                          Object(Q.g)(
                            "#EventDashBoard_Summary_LibraryHome_Shown"
                          )
                        ),
                        r.createElement(
                          "span",
                          null,
                          Object(X.a)(e.library_overview_shown)
                        )
                      ),
                      r.createElement(
                        "div",
                        { className: Y.StatsTitle },
                        r.createElement(
                          "span",
                          null,
                          Object(Q.g)(
                            "#EventDashBoard_Summary_LibraryHome_Read"
                          )
                        ),
                        r.createElement(
                          "span",
                          null,
                          Object(X.a)(e.library_overview_read)
                        )
                      ),
                      r.createElement("br", null),
                      r.createElement(
                        "div",
                        { className: Y.StatsTitle_ctn },
                        r.createElement(
                          "span",
                          null,
                          Object(Q.g)("#EventDashBoard_Location_LibraryDetail")
                        ),
                        r.createElement(
                          "span",
                          { className: Y.ModerationNote },
                          "( ",
                          Object(Q.g)(
                            "#EventDashBoard_Location_WaitingModeraion"
                          ),
                          " )"
                        )
                      ),
                      r.createElement(
                        "div",
                        { className: Y.StatsTitle },
                        r.createElement(
                          "span",
                          null,
                          Object(Q.g)(
                            "#EventDashBoard_Summary_AppDetailSpotlight_Shown"
                          )
                        ),
                        r.createElement(
                          "span",
                          null,
                          Object(X.a)(e.app_details_spotlight_shown)
                        )
                      ),
                      r.createElement(
                        "div",
                        { className: Y.StatsTitle },
                        r.createElement(
                          "span",
                          null,
                          Object(Q.g)(
                            "#EventDashBoard_Summary_AppDetailSpotlight_Read"
                          )
                        ),
                        r.createElement(
                          "span",
                          null,
                          Object(X.a)(e.app_details_spotlight_read)
                        )
                      ),
                      r.createElement(
                        "div",
                        { className: Y.StatsTitle },
                        r.createElement(
                          "span",
                          null,
                          Object(Q.g)(
                            "#EventDashBoard_Summary_AppDetailActivity_Shown"
                          )
                        ),
                        r.createElement(
                          "span",
                          null,
                          Object(X.a)(e.app_details_activity_shown)
                        )
                      ),
                      r.createElement(
                        "div",
                        { className: Y.StatsTitle },
                        r.createElement(
                          "span",
                          null,
                          Object(Q.g)(
                            "#EventDashBoard_Summary_AppDetailActivity_Read"
                          )
                        ),
                        r.createElement(
                          "span",
                          null,
                          Object(X.a)(e.app_details_activity_read)
                        )
                      )
                    ),
                  r.createElement(
                    "div",
                    { className: Y.StatsRightSection },
                    r.createElement(
                      "div",
                      { className: Y.StatsTitle_ctn },
                      r.createElement(
                        "span",
                        null,
                        Object(Q.g)("#EventDashBoard_Location_StoreDetail")
                      )
                    ),
                    r.createElement(
                      "div",
                      { className: Y.StatsTitle },
                      r.createElement(
                        "span",
                        null,
                        Object(Q.g)(
                          "#EventDashBoard_Summary_StoreAppPage_Shown"
                        )
                      ),
                      r.createElement(
                        "span",
                        null,
                        Object(X.a)(e.store_app_page_shown)
                      )
                    ),
                    r.createElement(
                      "div",
                      { className: Y.StatsTitle },
                      r.createElement(
                        "span",
                        null,
                        Object(Q.g)("#EventDashBoard_Summary_StoreAppPage_Read")
                      ),
                      r.createElement(
                        "span",
                        null,
                        Object(X.a)(e.store_app_page_read)
                      )
                    ),
                    r.createElement("br", null),
                    r.createElement(
                      "div",
                      { className: Y.StatsTitle_ctn },
                      r.createElement(
                        "span",
                        null,
                        Object(Q.g)("#EventDashBoard_Location_CommunityDetail")
                      )
                    ),
                    r.createElement(
                      "div",
                      { className: Y.StatsTitle },
                      r.createElement(
                        "span",
                        null,
                        Object(Q.g)("#EventDashBoard_Summary_Community_Shown")
                      ),
                      r.createElement(
                        "span",
                        null,
                        Object(X.a)(e.community_hub_shown)
                      )
                    ),
                    r.createElement(
                      "div",
                      { className: Y.StatsTitle },
                      r.createElement(
                        "span",
                        null,
                        Object(Q.g)("#EventDashBoard_Summary_Community_Read")
                      ),
                      r.createElement(
                        "span",
                        null,
                        Object(X.a)(e.community_hub_read)
                      )
                    ),
                    r.createElement("br", null),
                    r.createElement(
                      "div",
                      { className: Y.StatsTitle_ctn },
                      r.createElement(
                        "span",
                        null,
                        Object(Q.g)("#EventDashBoard_Location_NewsHubDetail")
                      )
                    ),
                    r.createElement(
                      "div",
                      { className: Y.StatsTitle },
                      r.createElement(
                        "span",
                        null,
                        Object(Q.g)("#EventDashBoard_Summary_NewsHub_Shown")
                      ),
                      r.createElement(
                        "span",
                        null,
                        Object(X.a)(e.news_hub_shown)
                      )
                    ),
                    r.createElement(
                      "div",
                      { className: Y.StatsTitle },
                      r.createElement(
                        "span",
                        null,
                        Object(Q.g)("#EventDashBoard_Summary_NewsHub_Read")
                      ),
                      r.createElement(
                        "span",
                        null,
                        Object(X.a)(e.news_hub_read)
                      )
                    )
                  )
                )
              );
        }
      };
      $ = Object(O.b)([_.a], $);
      var J = a("4EJs"),
        Z = a("6bdu"),
        ee = a("E4gw"),
        te = a("hNBN"),
        ae = a("KSg0"),
        ne = a.n(ae),
        re = a("kWcV"),
        se = a("tQrp"),
        le = a("+of3"),
        ie = a("f5iL"),
        oe = a("hCpY"),
        ce = a("pSt8");
      const me = r.lazy(() =>
          Promise.all([
            a.e(1),
            a.e(13),
            a.e(16),
            a.e(0),
            a.e(2),
            a.e(3),
            a.e(4),
            a.e(6),
            a.e(5),
            a.e(7),
            a.e(9),
            a.e(10),
            a.e(8),
            a.e(12),
            a.e(11),
            a.e(15),
            a.e(19),
            a.e(25),
          ]).then(a.bind(null, "3fR/"))
        ),
        de = Object(_.a)((e) => {
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
            p = t.clanSteamID.GetAccountID(),
            [v] = Object(B.b)(_, {
              include_assets: !0,
              include_platforms: !0,
              include_basic_info: !0,
              include_release: !0,
            }),
            [b, g] = Object(E.b)(p);
          if (
            (r.useEffect(() => window.scrollTo(0, 0), [_, p]),
            !t.bLoaded || !g || (_ && !v))
          )
            return r.createElement(
              "div",
              { className: ne.a.FlexCenter, style: { height: "400px" } },
              r.createElement(re.a, {
                size: "medium",
                string: Object(Q.g)("#Loading"),
              })
            );
          let S = t.GetDescriptionWithFallback(a);
          const w = Object(y.d)(t, y.a.k_eStoreNewsHub, "allowRelative");
          return r.createElement(_e, {
            event: t,
            lang: a,
            titleBar: d,
            body: r.createElement(
              h.a,
              null,
              r.createElement(
                "div",
                { className: x.a.EventDetailTitleContainer },
                r.createElement(L.a, {
                  crumbs: [
                    {
                      name: Object(Q.g)("#BreadCrumbs_AllEvents"),
                      url: Object(y.d)(
                        t,
                        y.a.k_eStoreUsersNewsHub,
                        "allowRelative"
                      ),
                    },
                    {
                      name: Object(Q.g)(
                        "#BreadCrumbs_GameEvents",
                        (null == v ? void 0 : v.GetName()) || g.group_name
                      ),
                      url: w,
                    },
                  ],
                }),
                r.createElement(
                  "div",
                  { className: x.a.EventDetailTitle },
                  t.GetNameWithFallback(a)
                ),
                t.BHasSubTitle(a) &&
                  r.createElement(
                    "div",
                    { className: x.a.EventDetailsSubTitle },
                    t.GetSubTitle(a)
                  )
              ),
              Boolean(t.BEventCanShowBroadcastWidget(c)) &&
                r.createElement(
                  "div",
                  { className: x.a.EventBroadcastCtn },
                  r.createElement(
                    r.Suspense,
                    { fallback: r.createElement("div", null) },
                    r.createElement(me, {
                      event: t,
                      bIsPreview: c,
                      accountIDs: c ? t.jsondata.broadcast_whitelist : void 0,
                    })
                  )
                ),
              r.createElement(
                "div",
                { className: Object(K.a)(x.a.EventColumns, "EventDetail") },
                r.createElement(
                  "div",
                  { className: x.a.EventDetailsDescription },
                  r.createElement(
                    h.a,
                    null,
                    t.BHasTag("steam_award_nomination_request") &&
                      r.createElement(H.EventDisplaySteamAwardNomination, {
                        event: t,
                        lang: a,
                        previewMode: c,
                      }),
                    t.BHasTag("steam_award_vote_request") &&
                      r.createElement(H.WinterSaleSteamAwardVoteWrapper, {
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
                        className: Object(K.a)(
                          "EventDetailsBody",
                          x.a.EventDetailsBody
                        ),
                      },
                      r.createElement(U.a, {
                        text: S || "",
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
                          { className: Object(K.a)(x.a.ReadMoreCnt) },
                          r.createElement(Z.a, { gidEvent: t.GID }),
                          r.createElement(
                            "a",
                            {
                              className: Object(K.a)(z.a.Button),
                              href: Object(ce.h)(t.GetSaleURL()),
                            },
                            Object(Q.g)("#Event_Button_VisitSalePage")
                          )
                        )
                    )
                  ),
                  r.createElement(
                    h.a,
                    null,
                    r.createElement(W.a, { event: t })
                  ),
                  Boolean(t.jsondata.read_more_link) &&
                    r.createElement(
                      "div",
                      { className: Object(K.a)(x.a.ReadMoreCnt) },
                      r.createElement(
                        se.b,
                        {
                          className: Object(K.a)(z.a.Button),
                          href: t.jsondata.read_more_link,
                        },
                        Object(Q.g)("#EventEmail_Button_ClickForMoreDetails")
                      )
                    ),
                  r.createElement("span", { className: z.a.Clear }),
                  r.createElement(
                    h.a,
                    null,
                    r.createElement(V.a, { appid: t.appid })
                  )
                ),
                r.createElement(
                  h.a,
                  null,
                  r.createElement(ve, {
                    event: t,
                    lang: a,
                    nOverrideStartTime: l,
                    nOverrideEndTime: i,
                  })
                )
              ),
              r.createElement(P.b, {
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
                { className: x.a.AppSummaryCtn },
                r.createElement(
                  "div",
                  { className: x.a.EventBodyPosition },
                  Boolean(v) &&
                    r.createElement(
                      "div",
                      { className: x.a.AppSummaryWidgetTitleCtn },
                      r.createElement(
                        "span",
                        { className: x.a.Title },
                        Object(Q.g)("#CreatorHome_ThisGame")
                      ),
                      r.createElement(
                        "div",
                        {
                          className: Object(K.a)(
                            x.a.AppSummaryWidgetCtn,
                            "AppSummaryWidgetCtn"
                          ),
                        },
                        r.createElement(J.e, {
                          id: t.appid,
                          type: Object(u.a)(v.GetAppType()),
                        })
                      )
                    ),
                  r.createElement(M.b, { appid: t.appid, bSmallFormat: !0 })
                )
              )
            ),
          });
        }),
        _e = Object(_.a)((e) => {
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
            m = "lang_" + Object(p.e)(a),
            d = !!o && t.BImageNeedScreenshotFallback("background", a);
          return r.createElement(
            "div",
            {
              className: Object(K.a)(
                x.a.EventDetailsPageContainer,
                m,
                z.a.PartnerEventFont,
                c
                  ? x.a.DetailArtworkAgeAppropriate
                  : x.a.DetailArtworkAgeNotAppropriate,
                !o && x.a.NoTitleArtwork,
                d && x.a.ScreenshotInsteadOfCover
              ),
            },
            r.createElement(k.b, {
              appId: t.appid,
              clanId: t.clanSteamID.GetAccountID(),
            }),
            n,
            r.createElement(pe, { strImageURL: o }),
            r.createElement(ue, { strImageURL: o, body: s, postbody: l }),
            Boolean(i) && r.createElement(h.a, null, i)
          );
        }),
        pe = (e) => {
          const { strImageURL: t } = e;
          return r.createElement(
            "div",
            { className: x.a.EventCoverImageCtn },
            r.createElement(
              "div",
              { className: x.a.EventCoverImageBlr },
              t &&
                r.createElement(
                  r.Fragment,
                  null,
                  r.createElement("div", {
                    className: x.a.EventCoverImageFuzz,
                    style: {
                      backgroundColor: "rgb(37, 41, 46)",
                      backgroundImage: `url(${t})`,
                    },
                  }),
                  r.createElement("div", {
                    className: x.a.EventCoverImage,
                    style: {
                      backgroundColor: "rgb(37, 41, 46)",
                      backgroundImage: `url(${t})`,
                    },
                  })
                )
            ),
            t && r.createElement("div", { className: x.a.CoverImageGradient })
          );
        },
        ue = (e) => {
          const { body: t, postbody: a, strImageURL: n } = e;
          return r.createElement(
            "div",
            { className: x.a.EventBodyCtn },
            r.createElement("div", { className: x.a.EventBackgroundBlurCtn }),
            r.createElement(
              "div",
              { className: x.a.EventBodyPosition },
              r.createElement(
                "div",
                { className: x.a.EventBody },
                Boolean(n) &&
                  r.createElement("div", {
                    className: x.a.EventBackgroundBlur,
                    style: { backgroundImage: `url(${n})` },
                  }),
                r.createElement(h.a, null, t)
              ),
              Boolean(a) && r.createElement(h.a, null, a)
            )
          );
        };
      function ve(e) {
        const {
            event: t,
            lang: a,
            nOverrideStartTime: n,
            nOverrideEndTime: s,
          } = e,
          [l, i, o, c, m, d] = Object(j.d)(() => [
            t.appid,
            t.clanSteamID,
            I.a.GetTimeNowWithOverride(),
            n || t.GetStartTimeAndDateUnixSeconds(),
            t.GetCategoryAsString(),
            t.type,
          ]),
          [_] = Object(B.b)(l, {
            include_assets: !0,
            include_platforms: !0,
            include_release: !0,
          }),
          [p, u] = Object(E.b)(i.GetAccountID());
        return u
          ? t.appid && !_
            ? null
            : r.createElement(
                "div",
                { className: x.a.EventDetailTitleDesc },
                r.createElement(
                  "div",
                  { className: x.a.EventDetailsSticky },
                  u.is_ogg
                    ? r.createElement(Ee, { appid: u.appid })
                    : r.createElement(be, { clanSteamID: i }),
                  r.createElement(V.b, {
                    event: t,
                    nOverrideEndTime: s,
                    nOverrideStartTime: n,
                  }),
                  28 !== d &&
                    o < c &&
                    r.createElement(
                      "div",
                      { className: x.a.EventDetailTimeInfo },
                      r.createElement(R.b, { eventModel: t, lang: a })
                    ),
                  r.createElement(
                    "div",
                    { className: x.a.EventDetailUserType },
                    r.createElement(
                      "div",
                      { className: x.a.RightSideTitles },
                      Object(Q.g)("#EventDisplay_RightColumnTitle_EventType")
                    ),
                    r.createElement(
                      "div",
                      { className: x.a.EventDetailsType },
                      m,
                      " "
                    )
                  ),
                  r.createElement(Se, { event: t, bIsOGG: u.is_ogg })
                )
              )
          : (Object(ie.a)(
              u,
              "EventDetailsRightColumn - clan info (" +
                i.GetAccountID() +
                ") is missing"
            ),
            null);
      }
      function Ee(e) {
        const { appid: t } = e;
        Object(ie.a)(t && 0 != t, "Expected Appid In Game Info Section");
        const [a] = Object(B.b)(t, {
          include_assets: !0,
          include_platforms: !0,
          include_release: !0,
        });
        return r.createElement(
          "div",
          { className: x.a.EventDetailGameCallToAction },
          r.createElement(
            "div",
            { className: x.a.RightSideTitles },
            v.y.some((e) => t === e)
              ? Object(Q.g)("#EventDisplay_RightColumnTitle_Blog")
              : Object(Q.g)("#EventDisplay_RightColumnTitle_Game")
          ),
          r.createElement(ee.a, {
            imageType: "header",
            capsule: { id: t, type: "game" },
            bHidePriceIfOwned: !0,
            bHideStatusBanners: !0,
          }),
          r.createElement(
            "div",
            { className: Object(K.a)(x.a.GameActions) },
            a
              ? r.createElement(te.a, {
                  appid: t,
                  bIsFree: a.BIsFree(),
                  bIsComingSoon: a.BIsComingSoon(),
                  className: x.a.ActionButton,
                })
              : r.createElement(re.a, { size: "small", position: "center" })
          )
        );
      }
      function be(e) {
        const { clanSteamID: t } = e,
          [a, n] = Object(E.b)(t.GetAccountID());
        return n
          ? r.createElement(
              "div",
              { className: x.a.EventDetailGameCallToAction },
              r.createElement(
                "div",
                { className: x.a.RightSideTitles },
                n.group_name
              ),
              r.createElement(
                le.a,
                { href: Object(ce.h)(E.a.GetCreatorStoreURL(t)) },
                r.createElement("div", {
                  className: x.a.EventDetailsAvatar,
                  style: { backgroundImage: `url(${n.avatar_full_url})` },
                })
              )
            )
          : (Object(ie.a)(
              n,
              "EventDetailsRightCreatorInfo - clan info (" +
                t.GetAccountID() +
                ") is missing"
            ),
            null);
      }
      const he = ["", "en-US", "en-GB", "zh-CN", "es-ES", "br-BR"];
      let ge = class extends r.Component {
        GenerateOptions() {
          let e = new Array();
          return (
            he.forEach((t) =>
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
            !D.a.Get().GetPartnerEventPermissions(this.props.event.clanSteamID)
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
                className: Object(K.a)(
                  z.a.FlexColumnContainer,
                  z.a.ValveOnlyBackground
                ),
              },
              r.createElement(
                "div",
                {
                  className: Object(K.a)(
                    z.a.EventEditorTextTitle,
                    z.a.ValveSupportOnly
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
      Object(O.b)([oe.b], ge.prototype, "OnLanguageChange", null),
        (ge = Object(O.b)([_.a], ge));
      let Se = class extends r.Component {
        constructor() {
          super(...arguments), (this.m_cancelSignal = d.a.CancelToken.source());
        }
        componentDidMount() {
          const { event: e } = this.props;
          e.BIsPartnerEvent() &&
            e.BIsVisibleEvent() &&
            D.a
              .Get()
              .LoadSingleAppEventPermissions(e.clanSteamID)
              .then((t) => {
                t &&
                  t.can_edit &&
                  G.LoadStatsForEvents(
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
          if (!D.a.Get().GetPartnerEventPermissions(e.clanSteamID).can_edit)
            return null;
          const a =
            e.BIsPartnerEvent() &&
            e.BIsVisibleEvent() &&
            G.GetStatsFor(e.clanSteamID, e.GID);
          return r.createElement(
            h.a,
            null,
            r.createElement(
              "div",
              { className: x.a.EditorStatsCtn },
              r.createElement(
                "div",
                { className: x.a.EditorStatsRow },
                r.createElement(
                  "span",
                  null,
                  Object(Q.g)("#EventEditor_Comments")
                ),
                r.createElement("span", null, Object(X.a)(e.nCommentCount))
              ),
              r.createElement(
                "div",
                { className: x.a.EditorStatsRow },
                r.createElement(
                  "span",
                  null,
                  Object(Q.g)("#EventEditor_UpVotes")
                ),
                r.createElement(
                  "span",
                  null,
                  e.nVotesUp ? Object(X.a)(e.nVotesUp) : 0
                )
              ),
              r.createElement(
                "div",
                { className: x.a.EditorStatsRow },
                r.createElement(
                  "span",
                  null,
                  Object(Q.g)("#EventEditor_DownVotes")
                ),
                r.createElement(
                  "span",
                  null,
                  e.nVotesDown ? Object(X.a)(e.nVotesDown) : 0
                )
              )
            ),
            Boolean(a) &&
              r.createElement(
                "div",
                { className: x.a.EditorStatsCtn },
                Object(Q.g)("#EventDashBoard_SummaryStats_Admin_Title"),
                r.createElement($, {
                  summary: a.m_stats,
                  bIsAllowedInLibrary: t,
                  bEventIsInModerationQueue: Object(v.e)(e),
                })
              )
          );
        }
      };
      Se = Object(O.b)([_.a], Se);
      var ye = a("A8Lc"),
        we = a.n(ye);
      class Oe {
        constructor() {
          (this.m_objApprovalPriviledge = null),
            (this.m_LoadingPriviledgePromise = null);
          let e = Object(A.h)("sc_app_privildge", "application_config");
          this.ValidateStoreDefault(e)
            ? ("dev" === A.d.WEB_UNIVERSE &&
                console.log(
                  "DEV_DEBUG: CSteamChinaStore: Loading payload from data-*, bHasAccess: " +
                    e.bHasAccess
                ),
              (this.m_objApprovalPriviledge = e),
              (this.m_LoadingPriviledgePromise = null))
            : (A.l.logged_in && A.d.EREALM === u.h.k_ESteamRealmChina) ||
              (this.m_objApprovalPriviledge = { bHasAccess: !1 });
        }
        BHasSteamChinaAppApprovalPriviledge() {
          var e;
          return null === (e = this.m_objApprovalPriviledge) || void 0 === e
            ? void 0
            : e.bHasAccess;
        }
        HintLoadAppApprovalPriviledge() {
          return Object(O.a)(this, void 0, void 0, function* () {
            return this.m_objApprovalPriviledge
              ? this.m_objApprovalPriviledge
              : (this.m_LoadingPriviledgePromise ||
                  (this.m_LoadingPriviledgePromise =
                    this.InternalLoadAppApprovalPriviledge()),
                this.m_LoadingPriviledgePromise);
          });
        }
        InternalLoadAppApprovalPriviledge() {
          var e;
          return Object(O.a)(this, void 0, void 0, function* () {
            const t =
              A.d.STORE_BASE_URL + "events_admin/ajaxgetscapprovalpriviledge";
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
              const t = Object(N.a)(e);
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
          return Oe.s_Singleton || (Oe.s_Singleton = new Oe()), Oe.s_Singleton;
        }
        ValidateStoreDefault(e) {
          return e && "object" == typeof e && "boolean" == typeof e.bHasAccess;
        }
      }
      Object(O.b)([f.C], Oe.prototype, "m_objApprovalPriviledge", void 0);
      var je = a("thkD"),
        Ie = a("jIgc"),
        De = a("rSrx");
      const Ae = Object(_.a)((e) => {
          const [t, a] = r.useState(null),
            { eventModel: n } = e;
          let s = n.clanSteamID.GetAccountID();
          r.useEffect(() => {
            const e = d.a.CancelToken.source();
            return (
              Object(O.a)(void 0, void 0, void 0, function* () {
                const t = i.a.InitFromClanID(s),
                  n = yield D.a.Get().LoadSingleAppEventPermissions(t),
                  r = yield Oe.Get().HintLoadAppApprovalPriviledge();
                e.token.reason ||
                  a(A.l.is_support || n.can_edit || r.bHasAccess);
              }),
              () => e.cancel("SteamChinaAdminPanel is unmounting")
            );
          }, [s]);
          const l = i.a.InitFromClanID(s);
          return A.l.is_support ||
            D.a.Get().GetPartnerEventPermissions(l).can_edit
            ? r.createElement(g.a, {
                eventModel: n,
                partnerEventStore: e.partnerEventStore,
                addtionalAdminButtons: t
                  ? [
                      r.createElement(fe, {
                        key: "removesteamchina",
                        eventModel: n,
                      }),
                    ]
                  : void 0,
              })
            : Oe.Get().BHasSteamChinaAppApprovalPriviledge()
            ? r.createElement(
                "div",
                { className: F.DisplayAdminPanel },
                r.createElement(
                  "span",
                  { className: F.DisplayAdminPanel_Title },
                  Object(Q.g)("#EventDisplay_Admin_Title")
                ),
                r.createElement(fe, { key: "removesteamchina", eventModel: n })
              )
            : null;
        }),
        fe = (e) => {
          const { eventModel: t } = e;
          return r.createElement(
            "div",
            {
              className: Object(K.a)(
                q.Button,
                F.AdminButton,
                q.ValveOnlyBackground
              ),
              onClick: (a) => {
                let n = !1;
                Object(Ie.d)(
                  r.createElement(
                    je.e,
                    {
                      strTitle: Object(Q.g)(
                        "#EventAdmin_Moderation_HideEventInSC"
                      ),
                      strDescription: Object(Q.g)(
                        "#EventAdmin_Moderation_HideEventInSC_Desc"
                      ),
                      bDestructiveWarning: !0,
                      closeModal: e.closeModal,
                      onOK: () => {
                        (n = !0),
                          Object(O.a)(void 0, void 0, void 0, function* () {
                            var a, n, s, l;
                            let i = new URLSearchParams();
                            i.append("sessionid", A.d.SESSIONID),
                              i.append(
                                "clan_accountid",
                                "" + t.clanSteamID.GetAccountID()
                              ),
                              i.append("gid_clan_event", "" + t.GID);
                            let o = !1,
                              c = 0;
                            try {
                              const e = `${A.d.STORE_BASE_URL}/events_admin/ajaxhidefromsteamchina`,
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
                              const t = Object(N.a)(e);
                              (c = t.errorCode),
                                console.error(
                                  "RemoveEventFromSteamChinaButton: error " +
                                    t.strErrorMsg,
                                  t
                                );
                            }
                            e.closeModal && e.closeModal(),
                              Object(Ie.d)(
                                o
                                  ? r.createElement(
                                      je.e,
                                      { bAlertDialog: !0 },
                                      Object(Q.g)("#EventDisplay_Share_Success")
                                    )
                                  : r.createElement(
                                      je.g,
                                      null,
                                      Object(Q.g)(
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
                      r.createElement(re.a, {
                        size: "medium",
                        position: "center",
                      })
                  ),
                  Object(De.o)(a)
                );
              },
            },
            Object(Q.g)("#EventAdmin_Moderation_HideEventInSC")
          );
        };
      var Ne = a("Ys0h");
      const Ce = b.a.Get();
      function Te() {
        document.body.classList.contains("events_hub") &&
          document.body.classList.remove("events_hub");
      }
      const Ge = Object(_.a)((e) => {
        const {
            bInfiniteScroll: t,
            event_gid: a,
            announcement_gid: n,
            clansteamid: l,
            appid: i,
          } = e,
          [o, c] = Object(r.useState)(a ? Ce.GetClanEventModel(a) : void 0),
          [m] = Object(B.b)(null == o ? void 0 : o.appid, {
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
                    null === (t = Ne.a.Get().GetApp(e.appid)) || void 0 === t
                      ? void 0
                      : t.GetName();
                else if (e && e.clanSteamID) {
                  const t = E.a.GetClanInfoByClanAccountID(
                    e.clanSteamID.GetAccountID()
                  );
                  a = t && t.group_name;
                }
                const n = e && e.GetNameWithFallback(Object(p.g)(A.d.LANGUAGE));
                if (e && a && n) {
                  const e = Object(Q.g)(
                    "#EventCalendar_TabTitle_GroupNameAndEventDetail",
                    a,
                    n
                  );
                  document.title != e && (document.title = e);
                }
              })(e));
          },
          O = (e) => {
            const t = Object(N.a)(e);
            console.error("StoreEventDetailView failed " + t.strErrorMsg, t),
              v(!0);
          };
        if (
          (Object(r.useEffect)(Te, []),
          Object(r.useEffect)(() => {
            const e = d.a.CancelToken.source();
            return (
              o ||
                (a && !Ce.GetClanEventModel(a)
                  ? Ce.LoadPartnerEventGeneric(l, i, a, void 0, 0)
                      .then((t) => b(t, e))
                      .catch(() => {
                        e.token.reason ||
                          Ce.LoadPartnerEventGeneric(l, i, void 0, a, 0)
                            .then((t) => b(t, e))
                            .catch(O);
                      })
                  : n &&
                    !Ce.GetClanEventGIDFromAnnouncementGID(n) &&
                    Ce.LoadPartnerEventGeneric(l, i, void 0, n, 0)
                      .then((t) => b(t, e))
                      .catch(O)),
              () => {
                e.cancel("StoreEventDetailView: unmounting");
              }
            );
          }, [a, l, i, n, o]),
          _ || !o || ((null == o ? void 0 : o.appid) && !m))
        ) {
          const e = "lang_" + Object(p.e)(Object(p.g)(A.d.LANGUAGE)),
            t = "";
          return s.a.createElement(
            "div",
            {
              className: Object(K.a)(
                x.a.EventDetailsPageContainer,
                e,
                z.a.PartnerEventFont,
                x.a.NoTitleArtwork
              ),
            },
            s.a.createElement("div", { style: { height: "100px" } }),
            s.a.createElement(pe, { strImageURL: t }),
            s.a.createElement(ue, {
              strImageURL: t,
              body: _
                ? s.a.createElement(
                    "div",
                    { className: we.a.ErrorMsg },
                    Object(Q.p)(
                      "#Events_FailedToFind",
                      s.a.createElement(
                        "a",
                        { href: A.d.STORE_BASE_URL + "news/" },
                        Object(Q.g)("#EventDisplay_NewsHubSubtitle")
                      )
                    )
                  )
                : s.a.createElement(re.a, {
                    string: Object(Q.g)("#Loading"),
                    size: "medium",
                    position: "center",
                  }),
              postbody: Boolean(_ && l)
                ? s.a.createElement(w.a, {
                    clanAccountID: l.GetAccountID(),
                    partnerEventStore: Ce,
                  })
                : void 0,
            })
          );
        }
        return t
          ? s.a.createElement(
              h.a,
              null,
              s.a.createElement(S.a, {
                appid: o.appid,
                trackingLocation: 7,
                announcementGID: o.GetAnnouncementGID(),
                partnerEventStore: Ce,
                eventModel: o,
                showAppHeader: !0,
                closeModal: () =>
                  e.history.push(
                    Object(y.d)(o, y.a.k_eStoreNewsHub, "allowRelative")
                  ),
              })
            )
          : s.a.createElement(
              h.a,
              null,
              s.a.createElement(de, {
                lang: Object(p.g)(A.d.LANGUAGE),
                partnerEventStore: Ce,
                event: o,
                adminPanel:
                  A.d.EREALM === u.h.k_ESteamRealmChina
                    ? s.a.createElement(Ae, { eventModel: o })
                    : s.a.createElement(g.a, {
                        eventModel: o,
                        partnerEventStore: Ce,
                      }),
                otherEventRow: s.a.createElement(w.a, {
                  clanAccountID: o.clanSteamID.GetAccountID(),
                  gidAnnouncement: o.AnnouncementGID,
                  partnerEventStore: Ce,
                }),
              })
            );
      });
      var Be = Object(l.j)(Ge),
        Le = a("RPnj"),
        ke = a("rkHy");
      t.default = (e) => {
        const [t] = Object(c.d)("byday", !1),
          [a] = Object(c.d)("upcoming", !1);
        return Object(o.b)()
          ? s.a.createElement(
              ke.a,
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
                      Be,
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
                      Be,
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
                      Be,
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
                      Be,
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
                      Le.c,
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
                      Le.c,
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
                      Le.c,
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
                      Le.c,
                      Object.assign({ key: e.match.params.saleid }, e, {
                        filter_to_saleid: e.match.params.saleid,
                        section_by_day: t || a,
                      })
                    ),
                }),
                s.a.createElement(l.b, {
                  exact: !0,
                  path: n.b.NewsHubContentHub(
                    ":hubtype",
                    ":category_or_language?",
                    ":tag_name?"
                  ),
                  render: (e) =>
                    s.a.createElement(
                      Le.c,
                      Object.assign(
                        {
                          key:
                            e.match.params.hubtype +
                            "_" +
                            e.match.params.category_or_language +
                            "_" +
                            e.match.params.tag_name,
                        },
                        e,
                        {
                          filter_to_contenthub_hubtype: e.match.params.hubtype,
                          filter_to_contenthub_category_or_language:
                            e.match.params.category_or_language,
                          filter_to_contenthub_tag_name:
                            e.match.params.tag_name,
                          section_by_day: t,
                        }
                      )
                    ),
                }),
                s.a.createElement(l.b, {
                  exact: !0,
                  path: n.b.NewsHub(),
                  render: (e) =>
                    s.a.createElement(
                      Le.c,
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
        s = a("msu0"),
        l = a("rB+X"),
        i = a("GbHM"),
        o = a("GXif"),
        c = a("pSt8"),
        m = a("/Q1a"),
        d = a("DgOg");
      function _(e) {
        const { gidEvent: t } = e,
          a = Object(l.b)(t),
          [_, p] = Object(n.useMemo)(() => {
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
              const e = Object(s.g)(m.d.LANGUAGE),
                t = o.a.GetWithFallback(
                  a.jsondata.localized_sale_product_banner,
                  e
                ),
                n = o.a.GetWithFallback(
                  a.jsondata.localized_sale_product_mobile_banner,
                  e
                ),
                r = a.clanSteamID.GetAccountID();
              return [
                m.d.MEDIA_CDN_COMMUNITY_URL + `images/clans/${r}/${t}`,
                m.d.MEDIA_CDN_COMMUNITY_URL + `images/clans/${r}/${n}`,
              ];
            }
            return [null, null];
          }, [a]);
        return _ && p
          ? r.a.createElement(
              "a",
              { href: Object(c.h)(a.GetSaleURL()), className: d.Link },
              r.a.createElement("img", {
                src: _,
                className: Object(i.a)(d.Banner, d.Big),
              }),
              r.a.createElement("img", {
                src: p,
                className: Object(i.a)(d.Banner, d.Mobile),
              })
            )
          : null;
      }
    },
    A8Lc: function (e, t, a) {
      e.exports = { ErrorMsg: "eventdetailview_ErrorMsg_1ZEL9" };
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
        p = a("KVor"),
        u = a("8r/D"),
        v = a("f+IU"),
        E = a("rSrx"),
        b = a("GXif"),
        h = a("/Q1a"),
        g = a("fmsa"),
        S = a("jIgc"),
        y = a("Rpai"),
        w = a("KQHr"),
        O = a("qpfI");
      const j = Object(m.a)((e) => {
        const t = Object(r.useRef)(null),
          a = Number(e.appID),
          n = Object(r.useMemo)(() => ({ id: a, type: "game" }), [a]),
          [o] = Object(i.b)(a, {}),
          [m, j] = Object(r.useState)(null),
          [I, D] = Object(r.useState)(null);
        Object(r.useEffect)(
          () => (
            Object(l.a)(void 0, void 0, void 0, function* () {
              const e = c.a.CancelToken.source();
              (t.current = e.cancel), yield _.a.Get().LoadAppIDsBatch([a], e);
              const n = _.a.Get().GetDemoEventInfo(a),
                r = yield p.b.LoadAdjacentPartnerEvents(null, null, a, 0, 1, {
                  exclude_tags: ["steam_game_festival_artist_statement"],
                  require_tags: ["steam_game_festival_broadcast"],
                });
              e.token.reason || (j(n), r.length > 0 && D(r[0]));
            }),
            () => {
              t.current && t.current("DemoAndQuickPitch: Unmounting");
            }
          ),
          [a]
        );
        const A = m && m.demo_appid > 0,
          f = I ? I.GetNameWithFallback(Object(d.g)(h.d.LANGUAGE)) : null,
          N = !I || I.BHasEventEnded();
        return A
          ? s.a.createElement(
              s.a.Fragment,
              null,
              s.a.createElement(
                "div",
                { className: y.TileContainer },
                s.a.createElement(
                  "div",
                  { className: y.TileTitleContainer },
                  s.a.createElement(
                    "div",
                    { className: y.TileTitleInnerContainer },
                    s.a.createElement(
                      "div",
                      { className: y.TileTitle },
                      Object(b.g)(
                        "#Sale_DownloadDemo",
                        null == o ? void 0 : o.GetName()
                      )
                    ),
                    s.a.createElement(O.a, { item: n })
                  ),
                  s.a.createElement(w.a, {
                    info: n,
                    className: y.TileActionButton,
                  })
                ),
                s.a.createElement(
                  "div",
                  { className: y.TileActionContainer },
                  f &&
                    s.a.createElement(
                      "div",
                      { className: y.TileActionInnerContainer },
                      N
                        ? s.a.createElement(
                            "h1",
                            null,
                            Object(b.g)("#EventBrowse_RecentUpdates")
                          )
                        : s.a.createElement(
                            "h1",
                            null,
                            Object(b.g)("#EventCalendar_TuneIn")
                          ),
                      s.a.createElement(
                        "div",
                        {
                          className: y.TileActionInner,
                          onClick: (e) => {
                            Object(S.d)(
                              s.a.createElement(v.a, {
                                initialEvent: I,
                                bShowOnlyInitialEvent: !1,
                                partnerEventStore: p.b,
                                emoticonStore: u.b,
                                showAppHeader: !0,
                              }),
                              E.o(e)
                            );
                          },
                        },
                        s.a.createElement(
                          "div",
                          { className: y.TileActionInnerTitle },
                          f
                        ),
                        s.a.createElement(
                          "div",
                          { className: y.TileActionInnerText },
                          s.a.createElement(g.a, {
                            dateAndTime: I.GetStartTimeAndDateUnixSeconds(),
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
      var I = a("ue1x"),
        D = a("cXRO"),
        A = (a("lo3/"), a("fsrB")),
        f = a("Lsvi"),
        N = a("O8Yk"),
        C = (a("ROh0"), a("Sn0s"), a("AM5O")),
        T = a("nGID"),
        G = a("gU2e"),
        B = a("KSg0"),
        L = a.n(B),
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
          const t = Object(T.a)("EventWebRowEmbed");
          this.ValidateStoreDefault(t) &&
            ((this.state.bPreLoaded = t.bPreLoaded),
            (this.state.announcementGIDList = t.announcementGIDList),
            (this.state.last_update_event = t.last_update_event),
            (this.state.events = []),
            this.state.announcementGIDList.forEach((e) => {
              const t = p.b.GetClanEventFromAnnouncementGID(e);
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
              { className: L.a.FlexCenter },
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
            A.e,
            { className: i },
            this.state.bShowModal &&
              s.a.createElement(
                x,
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
                  Object(b.g)("#EventBrowse_RecentEvents")
                ),
                !h.d.IN_GAMEPADUI &&
                  s.a.createElement(
                    "div",
                    { className: H.SectionButtonCtn },
                    this.props.bViewAllShowInfiniteScroll
                      ? s.a.createElement(
                          A.e,
                          {
                            className: H.SectionButton,
                            onClick: () => this.ShowModal(t[0]),
                          },
                          Object(b.g)("#EventBrowse_MoreEventsBtn")
                        )
                      : s.a.createElement(
                          R.c,
                          {
                            eventModel: t[0],
                            route: R.a.k_eViewWebSiteHub,
                            className: H.SectionButton,
                          },
                          Object(b.g)("#EventBrowse_MoreEventsBtn")
                        )
                  ),
                s.a.createElement(
                  "div",
                  { className: H.EventsSummariesCtn },
                  t.slice(0, a).map((e) => {
                    const a =
                      1 === t.length && window.screen.width > 500 ? G.c : G.b;
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
              s.a.createElement(V, {
                nUpdateTime: this.state.last_update_event.rtime,
                onClick: this.ShowLatestUpdateModal,
              })
          );
        }
      }
      function x(e) {
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
      function V(e) {
        return s.a.createElement(
          "div",
          { className: H.LatestUpdateButtonCtn },
          s.a.createElement(
            "div",
            { className: H.LatestUpdateIcon },
            s.a.createElement(k.yb, null)
          ),
          s.a.createElement(
            A.e,
            { className: H.LatestUpdateButton, onClick: e.onClick },
            Object(b.g)(
              "#EventBrowse_LatestUpdateTime_Button",
              Object(b.r)(e.nUpdateTime)
            )
          )
        );
      }
      function W(e) {
        const { nUpdateTime: t, announcementGID: a, onClick: n } = e,
          r = a ? p.b.GetClanEventFromAnnouncementGID(a) : null,
          l = (e) => {
            null == n || n(), e.stopPropagation(), e.preventDefault();
          };
        return s.a.createElement(
          "div",
          null,
          s.a.createElement(
            "h2",
            null,
            Object(b.g)("#EventBrowse_LastUpdateDate", Object(b.r)(t))
          ),
          s.a.createElement(
            "div",
            { className: H.SectionButtonCtn },
            s.a.createElement(
              "div",
              { className: H.SectionButton, onClick: l },
              Object(b.g)("#EventBrowse_ViewLatestUpdate")
            )
          ),
          Boolean(r) &&
            s.a.createElement(
              f.a,
              {
                className: H.EventsSummariesCtn,
                "flow-children": "column",
                navEntryPreferPosition: N.d.PREFERRED_CHILD,
              },
              s.a.createElement(G.c, { event: r, onClick: l })
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
          const t = Object(I.b)(),
            a = new Date(t.setUTCHours(0, 0, 0, 0) - 15552e6),
            n = Math.floor(a.getTime() / 1e3),
            { appid: r } = e;
          return s.a.createElement(F, {
            appid: r,
            partnerEventStore: D.a.Get(),
            event_customization: {
              rtime_oldestevent: n,
              exclude_tags: ["patchnotes", "hide_store", "mod_hide_store"],
              exclude_event_types: [34],
            },
            strClassName: "early_access_announcements",
            trackingLocation: 3,
          });
        }),
        K = q(j);
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
  },
]);
