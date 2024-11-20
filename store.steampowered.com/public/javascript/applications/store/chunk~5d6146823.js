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
    17083: (e, t, a) => {
      "use strict";
      a.d(t, { N_: () => u, k2: () => g });
      var n = a(92757),
        s = a(42891),
        r = a(90626),
        l = a(29248),
        i = a(58584),
        o = a(81115),
        c = a(68841);
      r.Component;
      r.Component;
      var m = function (e, t) {
          return "function" == typeof e ? e(t) : e;
        },
        d = function (e, t) {
          return "string" == typeof e ? (0, l.yJ)(e, null, null, t) : e;
        },
        _ = function (e) {
          return e;
        },
        p = r.forwardRef;
      void 0 === p && (p = _);
      var v = p(function (e, t) {
        var a = e.innerRef,
          n = e.navigate,
          s = e.onClick,
          l = (0, o.A)(e, ["innerRef", "navigate", "onClick"]),
          c = l.target,
          m = (0, i.A)({}, l, {
            onClick: function (e) {
              try {
                s && s(e);
              } catch (t) {
                throw (e.preventDefault(), t);
              }
              e.defaultPrevented ||
                0 !== e.button ||
                (c && "_self" !== c) ||
                (function (e) {
                  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
                })(e) ||
                (e.preventDefault(), n());
            },
          });
        return (m.ref = (_ !== p && t) || a), r.createElement("a", m);
      });
      var u = p(function (e, t) {
          var a = e.component,
            s = void 0 === a ? v : a,
            u = e.replace,
            E = e.to,
            h = e.innerRef,
            g = (0, o.A)(e, ["component", "replace", "to", "innerRef"]);
          return r.createElement(n.XZ.Consumer, null, function (e) {
            e || (0, c.A)(!1);
            var a = e.history,
              n = d(m(E, e.location), e.location),
              o = n ? a.createHref(n) : "",
              v = (0, i.A)({}, g, {
                href: o,
                navigate: function () {
                  var t = m(E, e.location),
                    n = (0, l.AO)(e.location) === (0, l.AO)(d(t));
                  (u || n ? a.replace : a.push)(t);
                },
              });
            return (
              _ !== p ? (v.ref = t || h) : (v.innerRef = h),
              r.createElement(s, v)
            );
          });
        }),
        E = function (e) {
          return e;
        },
        h = r.forwardRef;
      void 0 === h && (h = E);
      var g = h(function (e, t) {
        var a = e["aria-current"],
          s = void 0 === a ? "page" : a,
          l = e.activeClassName,
          _ = void 0 === l ? "active" : l,
          p = e.activeStyle,
          v = e.className,
          g = e.exact,
          S = e.isActive,
          w = e.location,
          y = e.sensitive,
          D = e.strict,
          b = e.style,
          A = e.to,
          f = e.innerRef,
          N = (0, o.A)(e, [
            "aria-current",
            "activeClassName",
            "activeStyle",
            "className",
            "exact",
            "isActive",
            "location",
            "sensitive",
            "strict",
            "style",
            "to",
            "innerRef",
          ]);
        return r.createElement(n.XZ.Consumer, null, function (e) {
          e || (0, c.A)(!1);
          var a = w || e.location,
            l = d(m(A, a), a),
            o = l.pathname,
            C = o && o.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
            I = C
              ? (0, n.B6)(a.pathname, {
                  path: C,
                  exact: g,
                  sensitive: y,
                  strict: D,
                })
              : null,
            T = !!(S ? S(I, a) : I),
            B = "function" == typeof v ? v(T) : v,
            G = "function" == typeof b ? b(T) : b;
          T &&
            ((B = (function () {
              for (
                var e = arguments.length, t = new Array(e), a = 0;
                a < e;
                a++
              )
                t[a] = arguments[a];
              return t
                .filter(function (e) {
                  return e;
                })
                .join(" ");
            })(B, _)),
            (G = (0, i.A)({}, G, p)));
          var P = (0, i.A)(
            { "aria-current": (T && s) || null, className: B, style: G, to: l },
            N,
          );
          return (
            E !== h ? (P.ref = t || f) : (P.innerRef = f), r.createElement(u, P)
          );
        });
      });
    },
    22305: (e, t, a) => {
      "use strict";
      a.d(t, { r: () => c });
      var n = a(90626),
        s = a(66272),
        r = a(52038),
        l = a(17083),
        i = a(45699),
        o = a(76217);
      function c(e) {
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
        c = a(65946),
        m = a(90626),
        d = a(77516),
        _ = a(4796),
        p = a(44165),
        v = a(60746),
        u = a(78327),
        E = a(14947),
        h = a(68797),
        g = a(17720);
      class S {
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
      (0, n.Cg)([E.sH], S.prototype, "m_stats", void 0),
        (0, n.Cg)([E.sH], S.prototype, "m_lastUpdateTime", void 0);
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
              this.m_mapSummaryStats.set(e.clan_account_id, new S(e));
            let t = (0, u.Tc)("trackingdataevents", "application_config");
            this.ValidateStoreDefaultList(t) &&
              t.forEach((e) => {
                let t = g.b.InitFromClanID(e.clan_account_id),
                  a = this.GetKey(t, e.event_gid);
                this.m_mapPerEventStats.set(a, new S(e));
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
              this.m_mapPerEventStats.set(a, new S(null)),
            this.m_mapPerEventStats.get(a)
          );
        }
        GetTotalStats(e) {
          return (
            this.LazyInit(),
            this.m_mapSummaryStats.has(e.GetAccountID()) ||
              this.m_mapSummaryStats.set(e.GetAccountID(), new S(null)),
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
                  new S(t.data.summary),
                ),
                  t.data.events_detail.forEach((t) => {
                    let a = this.GetKey(e, t.event_gid);
                    if (this.m_mapPerEventStats.has(a)) {
                      this.m_mapPerEventStats.get(a).reset(t);
                    } else this.m_mapPerEventStats.set(a, new S(t));
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
          let a = g.b.InitFromClanID(e),
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
        f = a(41550),
        N = a(32541),
        C = a(42011),
        I = a(48628),
        T = a(75113),
        B = a(43667),
        G = a(64940),
        P = a(90316),
        L = a.n(P),
        k = a(67417),
        H = a(96971),
        R = a(71746),
        M = a(95695),
        F = a.n(M),
        U = a(52038),
        V = a(61859),
        O = a(5065),
        j = a(82227);
      let x = class extends m.Component {
        render() {
          const {
            summary: e,
            bEventIsInModerationQueue: t,
            bIsAllowedInLibrary: a,
            bIncludeDescription: n,
          } = this.props;
          return 0 == e.total_read + e.total_showm
            ? null
            : m.createElement(
                "div",
                null,
                m.createElement(
                  "div",
                  {
                    className: (0, U.A)(
                      O.StatsCtnTitle,
                      n ? O.NormalStatsMode : O.SmallStatsMode,
                    ),
                  },
                  m.createElement(
                    "h1",
                    null,
                    (0, V.we)("#EventDashBoard_SummaryStats_Title"),
                  ),
                  Boolean(n) &&
                    m.createElement(
                      "p",
                      null,
                      (0, V.we)("#EventDashBoard_SummaryStats_Desc"),
                      " ",
                      m.createElement(
                        "a",
                        {
                          href: "https://partner.steamgames.com/doc/marketing/event_tools/stats",
                          target: "_blank",
                        },
                        (0, V.we)("#EventDashBoard_SummaryStats_Link"),
                      ),
                    ),
                ),
                m.createElement(
                  "div",
                  {
                    className: (0, U.A)(
                      O.TotalsCtn,
                      n ? O.NormalStatsMode : O.SmallStatsMode,
                    ),
                  },
                  m.createElement(
                    "div",
                    { className: O.StatsTitle },
                    m.createElement(
                      "span",
                      { className: O.StatDescription },
                      (0, V.we)(
                        "#EventDashBoard_SummaryStats_TotalImpressions",
                      ),
                    ),
                    m.createElement(
                      "span",
                      { className: O.StatFigure },
                      (0, j.Dq)(e.total_showm),
                    ),
                  ),
                  m.createElement(
                    "div",
                    { className: O.StatsTitle },
                    m.createElement(
                      "span",
                      { className: O.StatDescription },
                      (0, V.we)("#EventDashBoard_SummaryStats_TotalViews"),
                    ),
                    m.createElement(
                      "span",
                      { className: O.StatFigure },
                      (0, j.Dq)(e.total_read),
                    ),
                  ),
                ),
                Boolean(a && t) &&
                  m.createElement(
                    "div",
                    { className: O.ModerationWarningCtn },
                    m.createElement(
                      "div",
                      { className: O.ModerationWarning },
                      (0, V.we)("#EventDashBoard_ModerationQueueWarning"),
                    ),
                    m.createElement(
                      "a",
                      {
                        href:
                          u.TS.PARTNER_BASE_URL +
                          "doc/marketing/event_tools/moderation",
                      },
                      (0, V.we)("#EventDashBoard_Location_ModerationTitle"),
                    ),
                  ),
                m.createElement(
                  "div",
                  {
                    className: (0, U.A)(
                      O.StatsCtn,
                      n ? O.NormalStatsMode : O.SmallStatsMode,
                    ),
                  },
                  a &&
                    m.createElement(
                      "div",
                      {
                        className: (0, U.A)(
                          O.StatsLeftSection,
                          t && O.DisabledStats,
                        ),
                      },
                      m.createElement(
                        "div",
                        { className: O.StatsTitle_ctn },
                        m.createElement(
                          "span",
                          null,
                          (0, V.we)("#EventDashBoard_Location_LibraryHome"),
                        ),
                        m.createElement(
                          "span",
                          { className: O.ModerationNote },
                          "( ",
                          (0, V.we)(
                            "#EventDashBoard_Location_WaitingModeraion",
                          ),
                          " )",
                        ),
                      ),
                      m.createElement(
                        "div",
                        { className: O.StatsTitle },
                        m.createElement(
                          "span",
                          null,
                          (0, V.we)(
                            "#EventDashBoard_Summary_LibraryHome_Shown",
                          ),
                        ),
                        m.createElement(
                          "span",
                          null,
                          (0, j.Dq)(e.library_overview_shown),
                        ),
                      ),
                      m.createElement(
                        "div",
                        { className: O.StatsTitle },
                        m.createElement(
                          "span",
                          null,
                          (0, V.we)("#EventDashBoard_Summary_LibraryHome_Read"),
                        ),
                        m.createElement(
                          "span",
                          null,
                          (0, j.Dq)(e.library_overview_read),
                        ),
                      ),
                      m.createElement("br", null),
                      m.createElement(
                        "div",
                        { className: O.StatsTitle_ctn },
                        m.createElement(
                          "span",
                          null,
                          (0, V.we)("#EventDashBoard_Location_LibraryDetail"),
                        ),
                        m.createElement(
                          "span",
                          { className: O.ModerationNote },
                          "( ",
                          (0, V.we)(
                            "#EventDashBoard_Location_WaitingModeraion",
                          ),
                          " )",
                        ),
                      ),
                      m.createElement(
                        "div",
                        { className: O.StatsTitle },
                        m.createElement(
                          "span",
                          null,
                          (0, V.we)(
                            "#EventDashBoard_Summary_AppDetailSpotlight_Shown",
                          ),
                        ),
                        m.createElement(
                          "span",
                          null,
                          (0, j.Dq)(e.app_details_spotlight_shown),
                        ),
                      ),
                      m.createElement(
                        "div",
                        { className: O.StatsTitle },
                        m.createElement(
                          "span",
                          null,
                          (0, V.we)(
                            "#EventDashBoard_Summary_AppDetailSpotlight_Read",
                          ),
                        ),
                        m.createElement(
                          "span",
                          null,
                          (0, j.Dq)(e.app_details_spotlight_read),
                        ),
                      ),
                      m.createElement(
                        "div",
                        { className: O.StatsTitle },
                        m.createElement(
                          "span",
                          null,
                          (0, V.we)(
                            "#EventDashBoard_Summary_AppDetailActivity_Shown",
                          ),
                        ),
                        m.createElement(
                          "span",
                          null,
                          (0, j.Dq)(e.app_details_activity_shown),
                        ),
                      ),
                      m.createElement(
                        "div",
                        { className: O.StatsTitle },
                        m.createElement(
                          "span",
                          null,
                          (0, V.we)(
                            "#EventDashBoard_Summary_AppDetailActivity_Read",
                          ),
                        ),
                        m.createElement(
                          "span",
                          null,
                          (0, j.Dq)(e.app_details_activity_read),
                        ),
                      ),
                    ),
                  m.createElement(
                    "div",
                    { className: O.StatsRightSection },
                    m.createElement(
                      "div",
                      { className: O.StatsTitle_ctn },
                      m.createElement(
                        "span",
                        null,
                        (0, V.we)("#EventDashBoard_Location_StoreDetail"),
                      ),
                    ),
                    m.createElement(
                      "div",
                      { className: O.StatsTitle },
                      m.createElement(
                        "span",
                        null,
                        (0, V.we)("#EventDashBoard_Summary_StoreAppPage_Shown"),
                      ),
                      m.createElement(
                        "span",
                        null,
                        (0, j.Dq)(e.store_app_page_shown),
                      ),
                    ),
                    m.createElement(
                      "div",
                      { className: O.StatsTitle },
                      m.createElement(
                        "span",
                        null,
                        (0, V.we)("#EventDashBoard_Summary_StoreAppPage_Read"),
                      ),
                      m.createElement(
                        "span",
                        null,
                        (0, j.Dq)(e.store_app_page_read),
                      ),
                    ),
                    m.createElement("br", null),
                    m.createElement(
                      "div",
                      { className: O.StatsTitle_ctn },
                      m.createElement(
                        "span",
                        null,
                        (0, V.we)("#EventDashBoard_Location_CommunityDetail"),
                      ),
                    ),
                    m.createElement(
                      "div",
                      { className: O.StatsTitle },
                      m.createElement(
                        "span",
                        null,
                        (0, V.we)("#EventDashBoard_Summary_Community_Shown"),
                      ),
                      m.createElement(
                        "span",
                        null,
                        (0, j.Dq)(e.community_hub_shown),
                      ),
                    ),
                    m.createElement(
                      "div",
                      { className: O.StatsTitle },
                      m.createElement(
                        "span",
                        null,
                        (0, V.we)("#EventDashBoard_Summary_Community_Read"),
                      ),
                      m.createElement(
                        "span",
                        null,
                        (0, j.Dq)(e.community_hub_read),
                      ),
                    ),
                    m.createElement("br", null),
                    m.createElement(
                      "div",
                      { className: O.StatsTitle_ctn },
                      m.createElement(
                        "span",
                        null,
                        (0, V.we)("#EventDashBoard_Location_NewsHubDetail"),
                      ),
                    ),
                    m.createElement(
                      "div",
                      { className: O.StatsTitle },
                      m.createElement(
                        "span",
                        null,
                        (0, V.we)("#EventDashBoard_Summary_NewsHub_Shown"),
                      ),
                      m.createElement(
                        "span",
                        null,
                        (0, j.Dq)(e.news_hub_shown),
                      ),
                    ),
                    m.createElement(
                      "div",
                      { className: O.StatsTitle },
                      m.createElement(
                        "span",
                        null,
                        (0, V.we)("#EventDashBoard_Summary_NewsHub_Read"),
                      ),
                      m.createElement("span", null, (0, j.Dq)(e.news_hub_read)),
                    ),
                  ),
                ),
              );
        }
      };
      x = (0, n.Cg)([o.PA], x);
      var q = a(45359),
        W = a(69409),
        K = a(46416),
        z = a(14326),
        Q = a(64641),
        $ = a.n(Q),
        Z = a(22797),
        J = a(51272),
        X = a(17289),
        Y = a(44332),
        ee = a(73745),
        te = a(61336),
        ae = a(92007);
      const ne = m.lazy(() =>
          Promise.all([
            a.e(4359),
            a.e(6341),
            a.e(2828),
            a.e(6649),
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
              otherEventRow: c,
              titleBar: d,
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
            [g, S] = (0, _.TB)(v);
          if (
            (m.useEffect(() => window.scrollTo(0, 0), [p, v]),
            !t.bLoaded || !S || (p && !E && 2 !== h))
          )
            return m.createElement(
              "div",
              { className: $().FlexCenter, style: { height: "400px" } },
              m.createElement(Z.t, {
                size: "medium",
                string: (0, V.we)("#Loading"),
              }),
            );
          let w = t.GetDescriptionWithFallback(a);
          const y = (0, T.qT)(t, T.PH.k_eStoreNewsHub, "allowRelative");
          return m.createElement(re, {
            event: t,
            lang: a,
            titleBar: d,
            body: m.createElement(
              A.tH,
              null,
              m.createElement(
                "div",
                { className: L().EventDetailTitleContainer },
                m.createElement(b.r, {
                  crumbs: [
                    {
                      name: (0, V.we)("#BreadCrumbs_AllEvents"),
                      url: (0, T.qT)(
                        t,
                        T.PH.k_eStoreUsersNewsHub,
                        "allowRelative",
                      ),
                    },
                    {
                      name: (0, V.we)(
                        "#BreadCrumbs_GameEvents",
                        E?.GetName() || S.group_name,
                      ),
                      url: y,
                    },
                  ],
                }),
                m.createElement(
                  "div",
                  { className: L().EventDetailTitle },
                  t.GetNameWithFallback(a),
                ),
                t.BHasSubTitle(a) &&
                  m.createElement(
                    "div",
                    { className: L().EventDetailsSubTitle },
                    t.GetSubTitle(a),
                  ),
              ),
              Boolean(t.BEventCanShowBroadcastWidget(u)) &&
                m.createElement(
                  "div",
                  { className: L().EventBroadcastCtn },
                  m.createElement(
                    m.Suspense,
                    { fallback: null },
                    m.createElement(ne, {
                      event: t,
                      bIsPreview: u,
                      accountIDs: u ? t.jsondata.broadcast_whitelist : void 0,
                    }),
                  ),
                ),
              m.createElement(
                "div",
                { className: (0, U.A)(L().EventColumns, "EventDetail") },
                m.createElement(
                  "div",
                  { className: L().EventDetailsDescription },
                  m.createElement(
                    A.tH,
                    null,
                    t.BHasTag("steam_award_nomination_request") &&
                      m.createElement(G.EventDisplaySteamAwardNomination, {
                        event: t,
                        lang: a,
                        previewMode: u,
                      }),
                    t.BHasTag("steam_award_vote_request") &&
                      m.createElement(G.WinterSaleSteamAwardVoteWrapper, {
                        appID: t.appid,
                        bIsEventActionEnabled: t.BIsEventActionEnabled(),
                        voteCategories: t.GetSteamAwardNomineeCategories(),
                      }),
                  ),
                  m.createElement(
                    A.tH,
                    null,
                    m.createElement(
                      "div",
                      {
                        className: (0, U.A)(
                          "EventDetailsBody",
                          L().EventDetailsBody,
                        ),
                      },
                      m.createElement(I.f, {
                        text: w || "",
                        partnerEventStore: n,
                        showErrorInfo: u,
                        event: t,
                        languageOverride: a,
                      }),
                      Boolean(
                        t.jsondata.bSaleEnabled && t.jsondata.sale_vanity_id,
                      ) &&
                        m.createElement(
                          "div",
                          { className: (0, U.A)(L().ReadMoreCnt) },
                          m.createElement(W.m, { gidEvent: t.GID }),
                          m.createElement(
                            "a",
                            {
                              className: (0, U.A)(F().Button, "LinkButton"),
                              href: (0, te.k2)(t.GetSaleURL()),
                            },
                            (0, V.we)("#Event_Button_VisitSalePage"),
                          ),
                        ),
                      Boolean(t.jsondata.associated_appid) &&
                        m.createElement(ae.e, {
                          id: t.jsondata.associated_appid,
                          inputType: "game",
                        }),
                    ),
                  ),
                  m.createElement(
                    A.tH,
                    null,
                    m.createElement(R._, { event: t }),
                  ),
                  Boolean(t.jsondata.read_more_link) &&
                    m.createElement(
                      "div",
                      { className: (0, U.A)(L().ReadMoreCnt) },
                      m.createElement(
                        J.uU,
                        {
                          className: (0, U.A)(F().Button),
                          href: t.jsondata.read_more_link,
                        },
                        (0, V.we)("#EventEmail_Button_ClickForMoreDetails"),
                      ),
                    ),
                  m.createElement("span", { className: F().Clear }),
                  m.createElement(
                    A.tH,
                    null,
                    m.createElement(k.lS, { appid: t.appid }),
                  ),
                ),
                m.createElement(
                  A.tH,
                  null,
                  m.createElement(oe, {
                    event: t,
                    lang: a,
                    nOverrideStartTime: l,
                    nOverrideEndTime: i,
                  }),
                ),
              ),
              m.createElement(C.F, {
                eventModel: t,
                emoticonStore: s,
                partnerEventStore: n,
              }),
            ),
            postbody: m.createElement(A.tH, null, o, c),
            footer: m.createElement(
              A.tH,
              null,
              m.createElement(
                "div",
                { className: L().AppSummaryCtn },
                m.createElement(
                  "div",
                  { className: L().EventBodyPosition },
                  Boolean(E) &&
                    m.createElement(
                      "div",
                      { className: L().AppSummaryWidgetTitleCtn },
                      m.createElement(
                        "span",
                        { className: L().Title },
                        (0, V.we)("#CreatorHome_ThisGame"),
                      ),
                      m.createElement(
                        "div",
                        {
                          className: (0, U.A)(
                            L().AppSummaryWidgetCtn,
                            "AppSummaryWidgetCtn",
                          ),
                        },
                        m.createElement(q.pb, {
                          id: t.appid,
                          type: (0, r.U)(E.GetAppType()),
                        }),
                      ),
                    ),
                  m.createElement(N.LG, { appid: t.appid, bSmallFormat: !0 }),
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
            c = t.BIsImageSafeForAllAges("background", a),
            d = "lang_" + (0, s.ww)(a),
            _ = !!o && t.BImageNeedScreenshotFallback("background", a);
          return m.createElement(
            "div",
            {
              className: (0, U.A)(
                L().EventDetailsPageContainer,
                d,
                F().PartnerEventFont,
                c
                  ? L().DetailArtworkAgeAppropriate
                  : L().DetailArtworkAgeNotAppropriate,
                !o && L().NoTitleArtwork,
                _ && L().ScreenshotInsteadOfCover,
              ),
            },
            m.createElement(f.vA, {
              appId: t.appid,
              clanId: t.clanSteamID.GetAccountID(),
            }),
            n,
            m.createElement(le, { strImageURL: o }),
            m.createElement(ie, { strImageURL: o, body: r, postbody: l }),
            Boolean(i) && m.createElement(A.tH, null, i),
          );
        }),
        le = (e) => {
          const { strImageURL: t } = e;
          return m.createElement(
            "div",
            { className: L().EventCoverImageCtn },
            m.createElement(
              "div",
              { className: L().EventCoverImageBlr },
              t &&
                m.createElement(
                  m.Fragment,
                  null,
                  m.createElement("div", {
                    className: L().EventCoverImageFuzz,
                    style: {
                      backgroundColor: "rgb(37, 41, 46)",
                      backgroundImage: `url(${t})`,
                    },
                  }),
                  m.createElement("div", {
                    className: L().EventCoverImage,
                    style: {
                      backgroundColor: "rgb(37, 41, 46)",
                      backgroundImage: `url(${t})`,
                    },
                  }),
                ),
            ),
            t && m.createElement("div", { className: L().CoverImageGradient }),
          );
        },
        ie = (e) => {
          const { body: t, postbody: a, strImageURL: n } = e;
          return m.createElement(
            "div",
            { className: L().EventBodyCtn },
            m.createElement("div", { className: L().EventBackgroundBlurCtn }),
            m.createElement(
              "div",
              { className: L().EventBodyPosition },
              m.createElement(
                "div",
                { className: L().EventBody },
                Boolean(n) &&
                  m.createElement("div", {
                    className: L().EventBackgroundBlur,
                    style: { backgroundImage: `url(${n})` },
                  }),
                m.createElement(A.tH, null, t),
              ),
              Boolean(a) && m.createElement(A.tH, null, a),
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
          [r, l, i, o, d, v] = (0, c.q3)(() => [
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
          [E, h] = (0, _.TB)(l.GetAccountID());
        return h
          ? t.appid && !u
            ? null
            : m.createElement(
                "div",
                { className: L().EventDetailTitleDesc },
                m.createElement(
                  "div",
                  { className: L().EventDetailsSticky },
                  h.is_ogg
                    ? m.createElement(ce, { appid: h.appid })
                    : m.createElement(me, { clanSteamID: l }),
                  m.createElement(k.j6, {
                    event: t,
                    nOverrideEndTime: s,
                    nOverrideStartTime: n,
                  }),
                  28 !== v &&
                    i < o &&
                    m.createElement(
                      "div",
                      { className: L().EventDetailTimeInfo },
                      m.createElement(B.j, { eventModel: t, lang: a }),
                    ),
                  m.createElement(
                    "div",
                    { className: L().EventDetailUserType },
                    m.createElement(
                      "div",
                      { className: L().RightSideTitles },
                      (0, V.we)("#EventDisplay_RightColumnTitle_EventType"),
                    ),
                    m.createElement(
                      "div",
                      { className: L().EventDetailsType },
                      d,
                      " ",
                    ),
                  ),
                  m.createElement(pe, { event: t, bIsOGG: h.is_ogg }),
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
      function ce(e) {
        const { appid: t } = e;
        (0, Y.w)(t && 0 != t, "Expected Appid In Game Info Section");
        const [a] = (0, D.t7)(t, {
          include_assets: !0,
          include_platforms: !0,
          include_release: !0,
        });
        return m.createElement(
          "div",
          { className: L().EventDetailGameCallToAction },
          m.createElement(
            "div",
            { className: L().RightSideTitles },
            d.zK.some((e) => t === e)
              ? (0, V.we)("#EventDisplay_RightColumnTitle_Blog")
              : (0, V.we)("#EventDisplay_RightColumnTitle_Game"),
          ),
          m.createElement(K.W, {
            imageType: "header",
            capsule: { id: t, type: "game" },
            bHidePriceIfOwned: !0,
            bHideStatusBanners: !0,
          }),
          m.createElement(
            "div",
            { className: (0, U.A)(L().GameActions) },
            a
              ? m.createElement(z._, {
                  appid: t,
                  bIsFree: a.BIsFree(),
                  bIsComingSoon: a.BIsComingSoon(),
                  className: L().ActionButton,
                })
              : m.createElement(Z.t, { size: "small", position: "center" }),
          ),
        );
      }
      function me(e) {
        const { clanSteamID: t } = e,
          [a, n] = (0, _.TB)(t.GetAccountID());
        return n
          ? m.createElement(
              "div",
              { className: L().EventDetailGameCallToAction },
              m.createElement(
                "div",
                { className: L().RightSideTitles },
                n.group_name,
              ),
              m.createElement(
                X.m,
                { href: (0, te.k2)(_.ac.GetCreatorStoreURL(t)) },
                m.createElement("div", {
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
      const de = ["", "en-US", "en-GB", "zh-CN", "es-ES", "br-BR"];
      let _e = class extends m.Component {
        GenerateOptions() {
          let e = new Array();
          return (
            de.forEach((t) =>
              e.push(m.createElement("option", { key: t, value: t }, t)),
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
            return m.createElement("div", null);
          let e = this.GenerateOptions();
          return m.createElement(
            "div",
            { style: { paddingTop: 10 } },
            m.createElement(
              "div",
              {
                className: (0, U.A)(
                  F().FlexColumnContainer,
                  F().ValveOnlyBackground,
                ),
              },
              m.createElement(
                "div",
                {
                  className: (0, U.A)(
                    F().EventEditorTextTitle,
                    F().ValveSupportOnly,
                  ),
                },
                "Valve Support Tools (VO)",
              ),
              m.createElement("span", null, "Override Locale"),
              m.createElement("select", { onChange: this.OnLanguageChange }, e),
            ),
          );
        }
      };
      (0, n.Cg)([ee.oI], _e.prototype, "OnLanguageChange", null),
        (_e = (0, n.Cg)([o.PA], _e));
      let pe = class extends m.Component {
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
          return m.createElement(
            A.tH,
            null,
            m.createElement(
              "div",
              { className: L().EditorStatsCtn },
              m.createElement(
                "div",
                { className: L().EditorStatsRow },
                m.createElement(
                  "span",
                  null,
                  (0, V.we)("#EventEditor_Comments"),
                ),
                m.createElement("span", null, (0, j.Dq)(e.nCommentCount)),
              ),
              m.createElement(
                "div",
                { className: L().EditorStatsRow },
                m.createElement(
                  "span",
                  null,
                  (0, V.we)("#EventEditor_UpVotes"),
                ),
                m.createElement(
                  "span",
                  null,
                  e.nVotesUp ? (0, j.Dq)(e.nVotesUp) : 0,
                ),
              ),
              m.createElement(
                "div",
                { className: L().EditorStatsRow },
                m.createElement(
                  "span",
                  null,
                  (0, V.we)("#EventEditor_DownVotes"),
                ),
                m.createElement(
                  "span",
                  null,
                  e.nVotesDown ? (0, j.Dq)(e.nVotesDown) : 0,
                ),
              ),
            ),
            Boolean(a) &&
              m.createElement(
                "div",
                { className: L().EditorStatsCtn },
                (0, V.we)("#EventDashBoard_SummaryStats_Admin_Title"),
                m.createElement(x, {
                  summary: a.m_stats,
                  bIsAllowedInLibrary: t,
                  bEventIsInModerationQueue: (0, d.Dn)(e),
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
        c = a(2160);
      class m {
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
          return m.s_Singleton || (m.s_Singleton = new m()), m.s_Singleton;
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
            : (i.iA.logged_in && i.TS.EREALM === c.TU.k_ESteamRealmChina) ||
              (this.m_objApprovalPriviledge = { bHasAccess: !1 });
        }
        ValidateStoreDefault(e) {
          return e && "object" == typeof e && "boolean" == typeof e.bHasAccess;
        }
      }
      (0, r.Cg)([l.sH], m.prototype, "m_objApprovalPriviledge", void 0);
      var d = a(75844),
        _ = a(90626),
        p = a(17720),
        v = a(60746),
        u = a(30756),
        E = a(90316),
        h = a(95695),
        g = a(51706),
        S = a(738),
        w = a(22797),
        y = a(52038),
        D = a(56011),
        b = a(61859);
      const A = (0, d.PA)((e) => {
          const [t, a] = _.useState(null),
            { eventModel: n } = e;
          let r = n.clanSteamID.GetAccountID();
          _.useEffect(() => {
            const e = s().CancelToken.source();
            return (
              (async () => {
                const t = p.b.InitFromClanID(r),
                  n = await v.KN.Get().LoadSingleAppEventPermissions(t),
                  s = await m.Get().HintLoadAppApprovalPriviledge();
                e.token.reason ||
                  a(i.iA.is_support || n.can_edit || s.bHasAccess);
              })(),
              () => e.cancel("SteamChinaAdminPanel is unmounting")
            );
          }, [r]);
          const l = p.b.InitFromClanID(r);
          return i.iA.is_support ||
            v.KN.Get().GetPartnerEventPermissions(l).can_edit
            ? _.createElement(u.g, {
                eventModel: n,
                partnerEventStore: e.partnerEventStore,
                addtionalAdminButtons: t
                  ? [
                      _.createElement(f, {
                        key: "removesteamchina",
                        eventModel: n,
                      }),
                    ]
                  : void 0,
              })
            : m.Get().BHasSteamChinaAppApprovalPriviledge()
              ? _.createElement(
                  "div",
                  { className: E.DisplayAdminPanel },
                  _.createElement(
                    "span",
                    { className: E.DisplayAdminPanel_Title },
                    (0, b.we)("#EventDisplay_Admin_Title"),
                  ),
                  _.createElement(f, {
                    key: "removesteamchina",
                    eventModel: n,
                  }),
                )
              : null;
        }),
        f = (e) => {
          const { eventModel: t } = e;
          return _.createElement(
            "div",
            {
              className: (0, y.A)(
                h.Button,
                E.AdminButton,
                h.ValveOnlyBackground,
              ),
              onClick: (a) => {
                let n = !1;
                (0, S.pg)(
                  _.createElement(
                    g.o0,
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
                              (0, S.pg)(
                                n
                                  ? _.createElement(
                                      g.o0,
                                      { bAlertDialog: !0 },
                                      (0, b.we)("#EventDisplay_Share_Success"),
                                    )
                                  : _.createElement(
                                      g.KG,
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
                      _.createElement(w.t, {
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
