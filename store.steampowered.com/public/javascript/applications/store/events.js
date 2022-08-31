/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [2136],
  {
    21807: (e) => {
      e.exports = { BreadContainer: "breadcrumbs_BreadContainer_1QPim" };
    },
    3671: (e) => {
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
    30185: (e) => {
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
    13045: (e) => {
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
    77723: (e) => {
      e.exports = {
        Link: "salebanner_Link_26cHo",
        Banner: "salebanner_Banner_2df4N",
        Big: "salebanner_Big_1m7WT",
        Mobile: "salebanner_Mobile_2w3oX",
      };
    },
    7210: (e) => {
      e.exports = { ErrorMsg: "eventdetailview_ErrorMsg_1ZEL9" };
    },
    34425: (e, t, a) => {
      "use strict";
      a.d(t, { p: () => c });
      var n = a(70655),
        s = a(67294),
        r = a(7707),
        l = a(27745),
        i = a(22975),
        o = a(90666);
      function c(e) {
        const { children: t, navTreeRef: a } = e,
          c = (0, n._T)(e, ["children", "navTreeRef"]),
          m = s.useRef(),
          d = (0, i.BE)(m, a);
        if (o.De.IN_GAMEPADUI) {
          const e = window.__nav_tree_root;
          return s.createElement(
            r.Fe,
            Object.assign({}, c, {
              navTreeRef: d,
              secondary: !0,
              parentEmbeddedNavTree: e,
            }),
            s.createElement(l.O, null, t)
          );
        }
        return s.createElement(s.Fragment, null, t);
      }
    },
    54881: (e, t, a) => {
      "use strict";
      a.d(t, { b: () => c });
      var n = a(67294),
        s = a(21807),
        r = a(7573),
        l = a(73727),
        i = a(7707),
        o = a(35921);
      function c(e) {
        const { crumbs: t, className: a } = e;
        return t && 0 != t.length
          ? n.createElement(
              "div",
              { className: (0, r.Z)(s.BreadContainer, a) },
              n.createElement(
                o.s,
                { className: "blockbg", "flow-children": "row" },
                t.map((e) => {
                  const t = new Array();
                  return (
                    e.url.startsWith("http")
                      ? t.push(
                          n.createElement(
                            i.IS,
                            { key: "anchor_" + e.name, href: e.url },
                            e.name
                          )
                        )
                      : t.push(
                          n.createElement(
                            l.rU,
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
    93612: (e, t, a) => {
      "use strict";
      a.d(t, { i: () => d });
      var n = a(67294),
        s = a(26149),
        r = a(50153),
        l = a(7573),
        i = a(41311),
        o = a(35092),
        c = a(90666),
        m = a(77723);
      function d(e) {
        const { gidEvent: t } = e,
          a = (0, r.XC)(t),
          [d, _] = (0, n.useMemo)(() => {
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
              const e = (0, s.jM)(c.De.LANGUAGE),
                t = i.LZ.GetWithFallback(
                  a.jsondata.localized_sale_product_banner,
                  e
                ),
                n = i.LZ.GetWithFallback(
                  a.jsondata.localized_sale_product_mobile_banner,
                  e
                ),
                r = a.clanSteamID.GetAccountID();
              return [
                c.De.MEDIA_CDN_COMMUNITY_URL + `images/clans/${r}/${t}`,
                c.De.MEDIA_CDN_COMMUNITY_URL + `images/clans/${r}/${n}`,
              ];
            }
            return [null, null];
          }, [a]);
        return d && _
          ? n.createElement(
              "a",
              { href: (0, o.OL)(a.GetSaleURL()), className: m.Link },
              n.createElement("img", {
                src: d,
                className: (0, l.Z)(m.Banner, m.Big),
              }),
              n.createElement("img", {
                src: _,
                className: (0, l.Z)(m.Banner, m.Mobile),
              })
            )
          : null;
      }
    },
    53888: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { DemoAndQuickPitch: () => W, Events: () => Z });
      var n = a(54086),
        s = a(67294),
        r = a(70655),
        l = (a(37662), a(52114)),
        i = a(9669),
        o = a.n(i),
        c = a(29323),
        m = a(26149),
        d = (a(92398), a(39388)),
        _ = a(7200),
        p = a(89694),
        u = a(27535),
        v = a(53622),
        E = a(41311),
        h = a(90666),
        g = a(96602),
        S = a(59650),
        b = a(3671),
        y = a(84282),
        w = a(56274);
      const D = (0, c.Pi)((e) => {
        const t = (0, s.useRef)(null),
          a = Number(e.appID),
          n = (0, s.useMemo)(() => ({ id: a, type: "game" }), [a]),
          [i] = (0, l.vs)(a, {}),
          [c, D] = (0, s.useState)(null),
          [A, I] = (0, s.useState)(null);
        (0, s.useEffect)(
          () => (
            (0, r.mG)(void 0, void 0, void 0, function* () {
              const e = o().CancelToken.source();
              (t.current = e.cancel), yield d.ZP.Get().LoadAppIDsBatch([a], e);
              const n = d.ZP.Get().GetDemoEventInfo(a),
                s = yield _.j1.LoadAdjacentPartnerEvents(null, null, a, 0, 1, {
                  exclude_tags: ["steam_game_festival_artist_statement"],
                  require_tags: ["steam_game_festival_broadcast"],
                });
              e.token.reason || (D(n), s.length > 0 && I(s[0]));
            }),
            () => {
              t.current && t.current("DemoAndQuickPitch: Unmounting");
            }
          ),
          [a]
        );
        const N = c && c.demo_appid > 0,
          C = A ? A.GetNameWithFallback((0, m.jM)(h.De.LANGUAGE)) : null,
          T = !A || A.BHasEventEnded();
        return N
          ? s.createElement(
              s.Fragment,
              null,
              s.createElement(
                "div",
                { className: b.TileContainer },
                s.createElement(
                  "div",
                  { className: b.TileTitleContainer },
                  s.createElement(
                    "div",
                    { className: b.TileTitleInnerContainer },
                    s.createElement(
                      "div",
                      { className: b.TileTitle },
                      (0, E.Xx)(
                        "#Sale_DownloadDemo",
                        null == i ? void 0 : i.GetName()
                      )
                    ),
                    s.createElement(w.a, { item: n })
                  ),
                  s.createElement(y.f, {
                    info: n,
                    className: b.TileActionButton,
                  })
                ),
                s.createElement(
                  "div",
                  { className: b.TileActionContainer },
                  C &&
                    s.createElement(
                      "div",
                      { className: b.TileActionInnerContainer },
                      T
                        ? s.createElement(
                            "h1",
                            null,
                            (0, E.Xx)("#EventBrowse_RecentUpdates")
                          )
                        : s.createElement(
                            "h1",
                            null,
                            (0, E.Xx)("#EventCalendar_TuneIn")
                          ),
                      s.createElement(
                        "div",
                        {
                          className: b.TileActionInner,
                          onClick: (e) => {
                            (0, S.AM)(
                              s.createElement(u.m$, {
                                initialEvent: A,
                                bShowOnlyInitialEvent: !1,
                                partnerEventStore: _.j1,
                                emoticonStore: p.F,
                                showAppHeader: !0,
                              }),
                              v.RA(e)
                            );
                          },
                        },
                        s.createElement(
                          "div",
                          { className: b.TileActionInnerTitle },
                          C
                        ),
                        s.createElement(
                          "div",
                          { className: b.TileActionInnerText },
                          s.createElement(g.H6, {
                            dateAndTime: A.GetStartTimeAndDateUnixSeconds(),
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
      a(39799), a(68002);
      var A = a(5525),
        I = a(35577),
        N = (a(34425), a(7707)),
        C = a(35921),
        T = a(39746),
        f = (a(12505), a(71174), a(9915)),
        G = a(24020),
        B = a(70350),
        L = a(69491),
        k = a.n(L),
        M = a(95598),
        P = a(13596),
        x = a(22975),
        U = a(3044),
        R = a(38600),
        X = a(13045);
      class H extends s.Component {
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
          const t = (0, G.b)("EventWebRowEmbed");
          this.ValidateStoreDefault(t) &&
            ((this.state.bPreLoaded = t.bPreLoaded),
            (this.state.announcementGIDList = t.announcementGIDList),
            (this.state.last_update_event = t.last_update_event),
            (this.state.events = []),
            this.state.announcementGIDList.forEach((e) => {
              const t = _.j1.GetClanEventFromAnnouncementGID(e);
              t && this.state.events.push(t);
            }));
        }
        componentDidMount() {
          return (0, r.mG)(this, void 0, void 0, function* () {
            const {
              appid: e,
              event_customization: t,
              partnerEventStore: a,
              trackingLocation: n,
            } = this.props;
            if (!this.state.bPreLoaded) {
              const s = yield a.LoadAdjacentPartnerEvents(
                null,
                null,
                e,
                0,
                2,
                t
              );
              if ((this.setState({ events: s }), n && s && s.length > 0)) {
                const e = f.cb.Get().GetTracker();
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
          const a = f.cb.Get().GetTracker();
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
          const s = f.cb.Get().GetTracker();
          e && s.MarkEventRead(e, a, n) && s.Flush();
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
            return s.createElement(
              "div",
              { className: k().FlexCenter },
              s.createElement(P.V, { size: "medium", position: "center" })
            );
          const a = window.screen.width <= 500 ? 1 : 2,
            n = Boolean(null == t ? void 0 : t.length),
            r = this.BHasLastUpdateEvent(),
            l = this.BShouldShowLastUpdateEvent()
              ? this.state.last_update_event.announcement_gid
              : void 0,
            { strClassName: i } = this.props;
          return s.createElement(
            N.Ks,
            { className: i },
            this.state.bShowModal &&
              s.createElement(
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
              s.createElement(
                "div",
                null,
                s.createElement(
                  "h2",
                  null,
                  (0, E.Xx)("#EventBrowse_RecentEvents")
                ),
                !h.De.IN_GAMEPADUI &&
                  s.createElement(
                    "div",
                    { className: X.SectionButtonCtn },
                    this.props.bViewAllShowInfiniteScroll
                      ? s.createElement(
                          N.Ks,
                          {
                            className: X.SectionButton,
                            onClick: () => this.ShowModal(t[0]),
                          },
                          (0, E.Xx)("#EventBrowse_MoreEventsBtn")
                        )
                      : s.createElement(
                          R.JW,
                          {
                            eventModel: t[0],
                            route: R.Ue.k_eViewWebSiteHub,
                            className: X.SectionButton,
                          },
                          (0, E.Xx)("#EventBrowse_MoreEventsBtn")
                        )
                  ),
                s.createElement(
                  "div",
                  { className: X.EventsSummariesCtn },
                  t.slice(0, a).map((e) => {
                    const a =
                      1 === t.length && window.screen.width > 500 ? B.KE : B.T4;
                    return s.createElement(a, {
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
              s.createElement(j, {
                nUpdateTime: this.state.last_update_event.rtime,
                announcementGID: l,
                onClick: this.ShowLatestUpdateModal,
              }),
            Boolean(r && !l && !h.De.IN_GAMEPADUI) &&
              s.createElement(O, {
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
        return s.createElement(U.x, {
          className: h.De.IN_GAMEPADUI ? void 0 : X.StoreHeaderAdjust,
          eventClassName: h.De.IN_GAMEPADUI ? X.GamePadUIWidthAdjust : void 0,
          appid: t,
          trackingLocation: n,
          announcementGID: r,
          partnerEventStore: a,
          eventModel: l,
          closeModal: i,
        });
      }
      function O(e) {
        return s.createElement(
          "div",
          { className: X.LatestUpdateButtonCtn },
          s.createElement(
            "div",
            { className: X.LatestUpdateIcon },
            s.createElement(M.BNo, null)
          ),
          s.createElement(
            N.Ks,
            { className: X.LatestUpdateButton, onClick: e.onClick },
            (0, E.Xx)(
              "#EventBrowse_LatestUpdateTime_Button",
              (0, E.m9)(e.nUpdateTime)
            )
          )
        );
      }
      function j(e) {
        const { nUpdateTime: t, announcementGID: a, onClick: n } = e,
          r = a ? _.j1.GetClanEventFromAnnouncementGID(a) : null,
          l = (e) => {
            null == n || n(), e.stopPropagation(), e.preventDefault();
          };
        return s.createElement(
          "div",
          null,
          s.createElement(
            "h2",
            null,
            (0, E.Xx)("#EventBrowse_LastUpdateDate", (0, E.m9)(t))
          ),
          s.createElement(
            "div",
            { className: X.SectionButtonCtn },
            s.createElement(
              "div",
              { className: X.SectionButton, onClick: l },
              (0, E.Xx)("#EventBrowse_ViewLatestUpdate")
            )
          ),
          Boolean(r) &&
            s.createElement(
              C.s,
              {
                className: X.EventsSummariesCtn,
                "flow-children": "column",
                navEntryPreferPosition: T.c4.PREFERRED_CHILD,
              },
              s.createElement(B.KE, { event: r, onClick: l })
            )
        );
      }
      function F(e) {
        return (t) => s.createElement(n.n, null, s.createElement(e, t));
      }
      (0, r.gn)([x.ak], H.prototype, "ShowModal", null),
        (0, r.gn)([x.ak], H.prototype, "ShowLatestUpdateModal", null),
        (0, r.gn)([x.ak], H.prototype, "CloseModal", null);
      const Z = F(function (e) {
          const t = (0, A.rw)(),
            a = new Date(t.setUTCHours(0, 0, 0, 0) - 15552e6),
            n = Math.floor(a.getTime() / 1e3),
            { appid: r } = e;
          return s.createElement(H, {
            appid: r,
            partnerEventStore: I.M.Get(),
            event_customization: {
              rtime_oldestevent: n,
              exclude_tags: ["patchnotes", "hide_store", "mod_hide_store"],
              exclude_event_types: [34],
            },
            strClassName: "early_access_announcements",
            trackingLocation: 3,
          });
        }),
        W = F(D);
    },
    5571: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => Pe });
      var n = a(9355),
        s = a(67294),
        r = a(78587),
        l = a(3389),
        i = a(27991),
        o = a(31933),
        c = a(9669),
        m = a.n(c),
        d = a(29323),
        _ = a(26149),
        p = a(92398),
        u = a(37662),
        v = (a(68002), a(76776)),
        E = a(35577),
        h = a(32548),
        g = a(14900),
        S = a(3044),
        b = a(38600),
        y = a(70350),
        w = a(70655),
        D = a(13271),
        A = (a(29139), a(5525)),
        I = a(9915),
        N = a(90666),
        C = a(22188),
        T = (a(82946), a(93976));
      class f {
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
      (0, w.gn)([C.LO], f.prototype, "m_stats", void 0),
        (0, w.gn)([C.LO], f.prototype, "m_lastUpdateTime", void 0);
      class G {
        constructor() {
          (this.m_mapPerEventStats = new Map()),
            (this.m_mapSummaryStats = new Map()),
            (this.m_bLoadedFromConfig = !1);
        }
        LazyInit() {
          if (!this.m_bLoadedFromConfig) {
            let e = (0, N.kQ)("trackingdatasummary", "application_config");
            this.ValidateStoreDefault(e) &&
              this.m_mapSummaryStats.set(e.clan_account_id, new f(e));
            let t = (0, N.kQ)("trackingdataevents", "application_config");
            this.ValidateStoreDefaultList(t) &&
              t.forEach((e) => {
                let t = l.K.InitFromClanID(e.clan_account_id),
                  a = this.GetKey(t, e.event_gid);
                this.m_mapPerEventStats.set(a, new f(e));
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
              this.m_mapPerEventStats.set(a, new f(null)),
            this.m_mapPerEventStats.get(a)
          );
        }
        GetTotalStats(e) {
          return (
            this.LazyInit(),
            this.m_mapSummaryStats.has(e.GetAccountID()) ||
              this.m_mapSummaryStats.set(e.GetAccountID(), new f(null)),
            this.m_mapSummaryStats.get(e.GetAccountID())
          );
        }
        GetKey(e, t) {
          return e.GetAccountID() + "_" + t;
        }
        LoadStatsForEvents(e, t, a) {
          return (0, w.mG)(this, void 0, void 0, function* () {
            this.LazyInit();
            let n = Date.now() / 1e3,
              s = t.filter((t) => {
                let a = this.GetKey(e, t),
                  s = this.m_mapPerEventStats.get(a);
                return !s || null == s.m_stats || s.m_lastUpdateTime < n - 3600;
              });
            if (!s || 0 == s.length) return !0;
            let r = (0, N.Kc)() + "actions/ajaxgetpartnereventsreport",
              l = {
                sessionid: N.De.SESSIONID,
                clan_account_id: e.GetAccountID(),
                gidlist: s.join(","),
              };
            try {
              let t = yield m().get(r, {
                params: l,
                withCredentials: !0,
                cancelToken: null == a ? void 0 : a.token,
              });
              return (
                (0, C.z)(() => {
                  this.m_mapSummaryStats.set(
                    e.GetAccountID(),
                    new f(t.data.summary)
                  ),
                    t.data.events_detail.forEach((t) => {
                      let a = this.GetKey(e, t.event_gid);
                      if (this.m_mapPerEventStats.has(a)) {
                        this.m_mapPerEventStats.get(a).reset(t);
                      } else this.m_mapPerEventStats.set(a, new f(t));
                    });
                }),
                !0
              );
            } catch (e) {
              let t = (0, T.l)(e);
              console.error("CPartnerEventReportingStore " + t.strErrorMsg, t);
            }
            return !1;
          });
        }
        BHasEventStats(e, t) {
          let a = l.K.InitFromClanID(e),
            n = this.GetKey(a, t),
            s = this.m_mapPerEventStats.get(n);
          return Boolean(s && s.m_stats);
        }
      }
      (0, w.gn)([C.LO], G.prototype, "m_mapPerEventStats", void 0),
        (0, w.gn)([C.LO], G.prototype, "m_mapSummaryStats", void 0),
        (0, w.gn)([C.aD], G.prototype, "LazyInit", null);
      const B = new G();
      a(7200);
      var L = a(52114),
        k = a(54881),
        M = a(27535),
        P = a(22093),
        x = a(20190),
        U = a(19395),
        R = a(50949),
        X = a(63543),
        H = a(96944),
        V = a.n(H),
        O = a(34948),
        j = a(30100),
        F = a(34133),
        Z = a.n(F),
        W = a(7573),
        K = a(41311),
        z = a(30185),
        q = a(47808);
      let $ = class extends s.Component {
        render() {
          const {
            summary: e,
            bEventIsInModerationQueue: t,
            bIsAllowedInLibrary: a,
            bIncludeDescription: n,
          } = this.props;
          return 0 == e.total_read + e.total_showm
            ? null
            : s.createElement(
                "div",
                null,
                s.createElement(
                  "div",
                  {
                    className: (0, W.Z)(
                      z.StatsCtnTitle,
                      n ? z.NormalStatsMode : z.SmallStatsMode
                    ),
                  },
                  s.createElement(
                    "h1",
                    null,
                    (0, K.Xx)("#EventDashBoard_SummaryStats_Title")
                  ),
                  Boolean(n) &&
                    s.createElement(
                      "p",
                      null,
                      (0, K.Xx)("#EventDashBoard_SummaryStats_Desc"),
                      " ",
                      s.createElement(
                        "a",
                        {
                          href: "https://partner.steamgames.com/doc/marketing/event_tools/stats",
                          target: "_blank",
                        },
                        (0, K.Xx)("#EventDashBoard_SummaryStats_Link")
                      )
                    )
                ),
                s.createElement(
                  "div",
                  {
                    className: (0, W.Z)(
                      z.TotalsCtn,
                      n ? z.NormalStatsMode : z.SmallStatsMode
                    ),
                  },
                  s.createElement(
                    "div",
                    { className: z.StatsTitle },
                    s.createElement(
                      "span",
                      { className: z.StatDescription },
                      (0, K.Xx)("#EventDashBoard_SummaryStats_TotalImpressions")
                    ),
                    s.createElement(
                      "span",
                      { className: z.StatFigure },
                      (0, q.AV)(e.total_showm)
                    )
                  ),
                  s.createElement(
                    "div",
                    { className: z.StatsTitle },
                    s.createElement(
                      "span",
                      { className: z.StatDescription },
                      (0, K.Xx)("#EventDashBoard_SummaryStats_TotalViews")
                    ),
                    s.createElement(
                      "span",
                      { className: z.StatFigure },
                      (0, q.AV)(e.total_read)
                    )
                  )
                ),
                Boolean(a && t) &&
                  s.createElement(
                    "div",
                    { className: z.ModerationWarningCtn },
                    s.createElement(
                      "div",
                      { className: z.ModerationWarning },
                      (0, K.Xx)("#EventDashBoard_ModerationQueueWarning")
                    ),
                    s.createElement(
                      "a",
                      {
                        href:
                          N.De.PARTNER_BASE_URL +
                          "doc/marketing/event_tools/moderation",
                      },
                      (0, K.Xx)("#EventDashBoard_Location_ModerationTitle")
                    )
                  ),
                s.createElement(
                  "div",
                  {
                    className: (0, W.Z)(
                      z.StatsCtn,
                      n ? z.NormalStatsMode : z.SmallStatsMode
                    ),
                  },
                  a &&
                    s.createElement(
                      "div",
                      {
                        className: (0, W.Z)(
                          z.StatsLeftSection,
                          t && z.DisabledStats
                        ),
                      },
                      s.createElement(
                        "div",
                        { className: z.StatsTitle_ctn },
                        s.createElement(
                          "span",
                          null,
                          (0, K.Xx)("#EventDashBoard_Location_LibraryHome")
                        ),
                        s.createElement(
                          "span",
                          { className: z.ModerationNote },
                          "( ",
                          (0, K.Xx)(
                            "#EventDashBoard_Location_WaitingModeraion"
                          ),
                          " )"
                        )
                      ),
                      s.createElement(
                        "div",
                        { className: z.StatsTitle },
                        s.createElement(
                          "span",
                          null,
                          (0, K.Xx)("#EventDashBoard_Summary_LibraryHome_Shown")
                        ),
                        s.createElement(
                          "span",
                          null,
                          (0, q.AV)(e.library_overview_shown)
                        )
                      ),
                      s.createElement(
                        "div",
                        { className: z.StatsTitle },
                        s.createElement(
                          "span",
                          null,
                          (0, K.Xx)("#EventDashBoard_Summary_LibraryHome_Read")
                        ),
                        s.createElement(
                          "span",
                          null,
                          (0, q.AV)(e.library_overview_read)
                        )
                      ),
                      s.createElement("br", null),
                      s.createElement(
                        "div",
                        { className: z.StatsTitle_ctn },
                        s.createElement(
                          "span",
                          null,
                          (0, K.Xx)("#EventDashBoard_Location_LibraryDetail")
                        ),
                        s.createElement(
                          "span",
                          { className: z.ModerationNote },
                          "( ",
                          (0, K.Xx)(
                            "#EventDashBoard_Location_WaitingModeraion"
                          ),
                          " )"
                        )
                      ),
                      s.createElement(
                        "div",
                        { className: z.StatsTitle },
                        s.createElement(
                          "span",
                          null,
                          (0, K.Xx)(
                            "#EventDashBoard_Summary_AppDetailSpotlight_Shown"
                          )
                        ),
                        s.createElement(
                          "span",
                          null,
                          (0, q.AV)(e.app_details_spotlight_shown)
                        )
                      ),
                      s.createElement(
                        "div",
                        { className: z.StatsTitle },
                        s.createElement(
                          "span",
                          null,
                          (0, K.Xx)(
                            "#EventDashBoard_Summary_AppDetailSpotlight_Read"
                          )
                        ),
                        s.createElement(
                          "span",
                          null,
                          (0, q.AV)(e.app_details_spotlight_read)
                        )
                      ),
                      s.createElement(
                        "div",
                        { className: z.StatsTitle },
                        s.createElement(
                          "span",
                          null,
                          (0, K.Xx)(
                            "#EventDashBoard_Summary_AppDetailActivity_Shown"
                          )
                        ),
                        s.createElement(
                          "span",
                          null,
                          (0, q.AV)(e.app_details_activity_shown)
                        )
                      ),
                      s.createElement(
                        "div",
                        { className: z.StatsTitle },
                        s.createElement(
                          "span",
                          null,
                          (0, K.Xx)(
                            "#EventDashBoard_Summary_AppDetailActivity_Read"
                          )
                        ),
                        s.createElement(
                          "span",
                          null,
                          (0, q.AV)(e.app_details_activity_read)
                        )
                      )
                    ),
                  s.createElement(
                    "div",
                    { className: z.StatsRightSection },
                    s.createElement(
                      "div",
                      { className: z.StatsTitle_ctn },
                      s.createElement(
                        "span",
                        null,
                        (0, K.Xx)("#EventDashBoard_Location_StoreDetail")
                      )
                    ),
                    s.createElement(
                      "div",
                      { className: z.StatsTitle },
                      s.createElement(
                        "span",
                        null,
                        (0, K.Xx)("#EventDashBoard_Summary_StoreAppPage_Shown")
                      ),
                      s.createElement(
                        "span",
                        null,
                        (0, q.AV)(e.store_app_page_shown)
                      )
                    ),
                    s.createElement(
                      "div",
                      { className: z.StatsTitle },
                      s.createElement(
                        "span",
                        null,
                        (0, K.Xx)("#EventDashBoard_Summary_StoreAppPage_Read")
                      ),
                      s.createElement(
                        "span",
                        null,
                        (0, q.AV)(e.store_app_page_read)
                      )
                    ),
                    s.createElement("br", null),
                    s.createElement(
                      "div",
                      { className: z.StatsTitle_ctn },
                      s.createElement(
                        "span",
                        null,
                        (0, K.Xx)("#EventDashBoard_Location_CommunityDetail")
                      )
                    ),
                    s.createElement(
                      "div",
                      { className: z.StatsTitle },
                      s.createElement(
                        "span",
                        null,
                        (0, K.Xx)("#EventDashBoard_Summary_Community_Shown")
                      ),
                      s.createElement(
                        "span",
                        null,
                        (0, q.AV)(e.community_hub_shown)
                      )
                    ),
                    s.createElement(
                      "div",
                      { className: z.StatsTitle },
                      s.createElement(
                        "span",
                        null,
                        (0, K.Xx)("#EventDashBoard_Summary_Community_Read")
                      ),
                      s.createElement(
                        "span",
                        null,
                        (0, q.AV)(e.community_hub_read)
                      )
                    ),
                    s.createElement("br", null),
                    s.createElement(
                      "div",
                      { className: z.StatsTitle_ctn },
                      s.createElement(
                        "span",
                        null,
                        (0, K.Xx)("#EventDashBoard_Location_NewsHubDetail")
                      )
                    ),
                    s.createElement(
                      "div",
                      { className: z.StatsTitle },
                      s.createElement(
                        "span",
                        null,
                        (0, K.Xx)("#EventDashBoard_Summary_NewsHub_Shown")
                      ),
                      s.createElement("span", null, (0, q.AV)(e.news_hub_shown))
                    ),
                    s.createElement(
                      "div",
                      { className: z.StatsTitle },
                      s.createElement(
                        "span",
                        null,
                        (0, K.Xx)("#EventDashBoard_Summary_NewsHub_Read")
                      ),
                      s.createElement("span", null, (0, q.AV)(e.news_hub_read))
                    )
                  )
                )
              );
        }
      };
      $ = (0, w.gn)([d.Pi], $);
      var Q = a(85732),
        Y = a(93612),
        J = a(87541),
        ee = a(51483),
        te = a(69491),
        ae = a.n(te),
        ne = a(13596),
        se = a(72258),
        re = a(41498),
        le = a(77520),
        ie = a(22975),
        oe = a(35092);
      const ce = s.lazy(() =>
          Promise.all([
            a.e(1164),
            a.e(5959),
            a.e(8511),
            a.e(1320),
            a.e(8535),
            a.e(7804),
            a.e(4030),
            a.e(8374),
            a.e(166),
            a.e(3345),
            a.e(2301),
            a.e(7131),
            a.e(3456),
            a.e(6431),
            a.e(6614),
            a.e(7599),
            a.e(9698),
            a.e(930),
            a.e(5136),
            a.e(73),
            a.e(9332),
            a.e(1979),
            a.e(4601),
          ]).then(a.bind(a, 67199))
        ),
        me = (0, d.Pi)((e) => {
          const {
              event: t,
              lang: a,
              partnerEventStore: n,
              emoticonStore: r,
              nOverrideStartTime: l,
              nOverrideEndTime: i,
              adminPanel: o,
              previewMode: c,
              otherEventRow: m,
              titleBar: d,
            } = e,
            _ = t.appid,
            u = t.clanSteamID.GetAccountID(),
            [E, g] = (0, L.vs)(_, {
              include_assets: !0,
              include_platforms: !0,
              include_basic_info: !0,
              include_release: !0,
            }),
            [S, y] = (0, v.KU)(u);
          if (
            (s.useEffect(() => window.scrollTo(0, 0), [_, u]),
            !t.bLoaded || !y || (_ && !E && 2 !== g))
          )
            return s.createElement(
              "div",
              { className: ae().FlexCenter, style: { height: "400px" } },
              s.createElement(ne.V, {
                size: "medium",
                string: (0, K.Xx)("#Loading"),
              })
            );
          let w = t.GetDescriptionWithFallback(a);
          const D = (0, b.q)(t, b.Ue.k_eStoreNewsHub, "allowRelative");
          return s.createElement(de, {
            event: t,
            lang: a,
            titleBar: d,
            body: s.createElement(
              h.S,
              null,
              s.createElement(
                "div",
                { className: V().EventDetailTitleContainer },
                s.createElement(k.b, {
                  crumbs: [
                    {
                      name: (0, K.Xx)("#BreadCrumbs_AllEvents"),
                      url: (0, b.q)(
                        t,
                        b.Ue.k_eStoreUsersNewsHub,
                        "allowRelative"
                      ),
                    },
                    {
                      name: (0, K.Xx)(
                        "#BreadCrumbs_GameEvents",
                        (null == E ? void 0 : E.GetName()) || y.group_name
                      ),
                      url: D,
                    },
                  ],
                }),
                s.createElement(
                  "div",
                  { className: V().EventDetailTitle },
                  t.GetNameWithFallback(a)
                ),
                t.BHasSubTitle(a) &&
                  s.createElement(
                    "div",
                    { className: V().EventDetailsSubTitle },
                    t.GetSubTitle(a)
                  )
              ),
              Boolean(t.BEventCanShowBroadcastWidget(c)) &&
                s.createElement(
                  "div",
                  { className: V().EventBroadcastCtn },
                  s.createElement(
                    s.Suspense,
                    { fallback: s.createElement("div", null) },
                    s.createElement(ce, {
                      event: t,
                      bIsPreview: c,
                      accountIDs: c ? t.jsondata.broadcast_whitelist : void 0,
                    })
                  )
                ),
              s.createElement(
                "div",
                { className: (0, W.Z)(V().EventColumns, "EventDetail") },
                s.createElement(
                  "div",
                  { className: V().EventDetailsDescription },
                  s.createElement(
                    h.S,
                    null,
                    t.BHasTag("steam_award_nomination_request") &&
                      s.createElement(X.EventDisplaySteamAwardNomination, {
                        event: t,
                        lang: a,
                        previewMode: c,
                      }),
                    t.BHasTag("steam_award_vote_request") &&
                      s.createElement(X.WinterSaleSteamAwardVoteWrapper, {
                        appID: t.appid,
                        bIsEventActionEnabled: t.BIsEventActionEnabled(),
                        voteCategories: t.GetSteamAwardNomineeCategories(),
                      })
                  ),
                  s.createElement(
                    h.S,
                    null,
                    s.createElement(
                      "div",
                      {
                        className: (0, W.Z)(
                          "EventDetailsBody",
                          V().EventDetailsBody
                        ),
                      },
                      s.createElement(U.d, {
                        text: w || "",
                        partnerEventStore: n,
                        showErrorInfo: c,
                        event: t,
                        languageOverride: a,
                      }),
                      Boolean(
                        t.jsondata.bSaleEnabled && t.jsondata.sale_vanity_id
                      ) &&
                        s.createElement(
                          "div",
                          { className: (0, W.Z)(V().ReadMoreCnt) },
                          s.createElement(Y.i, { gidEvent: t.GID }),
                          s.createElement(
                            "a",
                            {
                              className: (0, W.Z)(Z().Button),
                              href: (0, oe.OL)(t.GetSaleURL()),
                            },
                            (0, K.Xx)("#Event_Button_VisitSalePage")
                          )
                        )
                    )
                  ),
                  s.createElement(
                    h.S,
                    null,
                    s.createElement(j.D, { event: t })
                  ),
                  Boolean(t.jsondata.read_more_link) &&
                    s.createElement(
                      "div",
                      { className: (0, W.Z)(V().ReadMoreCnt) },
                      s.createElement(
                        se.ns,
                        {
                          className: (0, W.Z)(Z().Button),
                          href: t.jsondata.read_more_link,
                        },
                        (0, K.Xx)("#EventEmail_Button_ClickForMoreDetails")
                      )
                    ),
                  s.createElement("span", { className: Z().Clear }),
                  s.createElement(
                    h.S,
                    null,
                    s.createElement(O.HQ, { appid: t.appid })
                  )
                ),
                s.createElement(
                  h.S,
                  null,
                  s.createElement(ue, {
                    event: t,
                    lang: a,
                    nOverrideStartTime: l,
                    nOverrideEndTime: i,
                  })
                )
              ),
              s.createElement(x.Le, {
                eventModel: t,
                emoticonStore: r,
                partnerEventStore: n,
              })
            ),
            postbody: s.createElement(h.S, null, o, m),
            footer: s.createElement(
              h.S,
              null,
              s.createElement(
                "div",
                { className: V().AppSummaryCtn },
                s.createElement(
                  "div",
                  { className: V().EventBodyPosition },
                  Boolean(E) &&
                    s.createElement(
                      "div",
                      { className: V().AppSummaryWidgetTitleCtn },
                      s.createElement(
                        "span",
                        { className: V().Title },
                        (0, K.Xx)("#CreatorHome_ThisGame")
                      ),
                      s.createElement(
                        "div",
                        {
                          className: (0, W.Z)(
                            V().AppSummaryWidgetCtn,
                            "AppSummaryWidgetCtn"
                          ),
                        },
                        s.createElement(Q.ju, {
                          id: t.appid,
                          type: (0, p.Yd)(E.GetAppType()),
                        })
                      )
                    ),
                  s.createElement(P.sE, { appid: t.appid, bSmallFormat: !0 })
                )
              )
            ),
          });
        }),
        de = (0, d.Pi)((e) => {
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
            m = "lang_" + (0, _.dt)(a),
            d = !!o && t.BImageNeedScreenshotFallback("background", a);
          return s.createElement(
            "div",
            {
              className: (0, W.Z)(
                V().EventDetailsPageContainer,
                m,
                Z().PartnerEventFont,
                c
                  ? V().DetailArtworkAgeAppropriate
                  : V().DetailArtworkAgeNotAppropriate,
                !o && V().NoTitleArtwork,
                d && V().ScreenshotInsteadOfCover
              ),
            },
            s.createElement(M.v6, {
              appId: t.appid,
              clanId: t.clanSteamID.GetAccountID(),
            }),
            n,
            s.createElement(_e, { strImageURL: o }),
            s.createElement(pe, { strImageURL: o, body: r, postbody: l }),
            Boolean(i) && s.createElement(h.S, null, i)
          );
        }),
        _e = (e) => {
          const { strImageURL: t } = e;
          return s.createElement(
            "div",
            { className: V().EventCoverImageCtn },
            s.createElement(
              "div",
              { className: V().EventCoverImageBlr },
              t &&
                s.createElement(
                  s.Fragment,
                  null,
                  s.createElement("div", {
                    className: V().EventCoverImageFuzz,
                    style: {
                      backgroundColor: "rgb(37, 41, 46)",
                      backgroundImage: `url(${t})`,
                    },
                  }),
                  s.createElement("div", {
                    className: V().EventCoverImage,
                    style: {
                      backgroundColor: "rgb(37, 41, 46)",
                      backgroundImage: `url(${t})`,
                    },
                  })
                )
            ),
            t && s.createElement("div", { className: V().CoverImageGradient })
          );
        },
        pe = (e) => {
          const { body: t, postbody: a, strImageURL: n } = e;
          return s.createElement(
            "div",
            { className: V().EventBodyCtn },
            s.createElement("div", { className: V().EventBackgroundBlurCtn }),
            s.createElement(
              "div",
              { className: V().EventBodyPosition },
              s.createElement(
                "div",
                { className: V().EventBody },
                Boolean(n) &&
                  s.createElement("div", {
                    className: V().EventBackgroundBlur,
                    style: { backgroundImage: `url(${n})` },
                  }),
                s.createElement(h.S, null, t)
              ),
              Boolean(a) && s.createElement(h.S, null, a)
            )
          );
        };
      function ue(e) {
        const {
            event: t,
            lang: a,
            nOverrideStartTime: n,
            nOverrideEndTime: r,
          } = e,
          [l, i, o, c, m, d] = (0, D.SZ)(() => [
            t.appid,
            t.clanSteamID,
            A.JW.GetTimeNowWithOverride(),
            n || t.GetStartTimeAndDateUnixSeconds(),
            t.GetCategoryAsString(),
            t.type,
          ]),
          [_] = (0, L.vs)(l, {
            include_assets: !0,
            include_platforms: !0,
            include_release: !0,
          }),
          [p, u] = (0, v.KU)(i.GetAccountID());
        return u
          ? t.appid && !_
            ? null
            : s.createElement(
                "div",
                { className: V().EventDetailTitleDesc },
                s.createElement(
                  "div",
                  { className: V().EventDetailsSticky },
                  u.is_ogg
                    ? s.createElement(ve, { appid: u.appid })
                    : s.createElement(Ee, { clanSteamID: i }),
                  s.createElement(O.wM, {
                    event: t,
                    nOverrideEndTime: r,
                    nOverrideStartTime: n,
                  }),
                  28 !== d &&
                    o < c &&
                    s.createElement(
                      "div",
                      { className: V().EventDetailTimeInfo },
                      s.createElement(R.m, { eventModel: t, lang: a })
                    ),
                  s.createElement(
                    "div",
                    { className: V().EventDetailUserType },
                    s.createElement(
                      "div",
                      { className: V().RightSideTitles },
                      (0, K.Xx)("#EventDisplay_RightColumnTitle_EventType")
                    ),
                    s.createElement(
                      "div",
                      { className: V().EventDetailsType },
                      m,
                      " "
                    )
                  ),
                  s.createElement(Se, { event: t, bIsOGG: u.is_ogg })
                )
              )
          : ((0, le.X)(
              u,
              "EventDetailsRightColumn - clan info (" +
                i.GetAccountID() +
                ") is missing"
            ),
            null);
      }
      function ve(e) {
        const { appid: t } = e;
        (0, le.X)(t && 0 != t, "Expected Appid In Game Info Section");
        const [a] = (0, L.vs)(t, {
          include_assets: !0,
          include_platforms: !0,
          include_release: !0,
        });
        return s.createElement(
          "div",
          { className: V().EventDetailGameCallToAction },
          s.createElement(
            "div",
            { className: V().RightSideTitles },
            u.bN.some((e) => t === e)
              ? (0, K.Xx)("#EventDisplay_RightColumnTitle_Blog")
              : (0, K.Xx)("#EventDisplay_RightColumnTitle_Game")
          ),
          s.createElement(J.B, {
            imageType: "header",
            capsule: { id: t, type: "game" },
            bHidePriceIfOwned: !0,
            bHideStatusBanners: !0,
          }),
          s.createElement(
            "div",
            { className: (0, W.Z)(V().GameActions) },
            a
              ? s.createElement(ee.s, {
                  appid: t,
                  bIsFree: a.BIsFree(),
                  bIsComingSoon: a.BIsComingSoon(),
                  className: V().ActionButton,
                })
              : s.createElement(ne.V, { size: "small", position: "center" })
          )
        );
      }
      function Ee(e) {
        const { clanSteamID: t } = e,
          [a, n] = (0, v.KU)(t.GetAccountID());
        return n
          ? s.createElement(
              "div",
              { className: V().EventDetailGameCallToAction },
              s.createElement(
                "div",
                { className: V().RightSideTitles },
                n.group_name
              ),
              s.createElement(
                re.V,
                { href: (0, oe.OL)(v.sV.GetCreatorStoreURL(t)) },
                s.createElement("div", {
                  className: V().EventDetailsAvatar,
                  style: { backgroundImage: `url(${n.avatar_full_url})` },
                })
              )
            )
          : ((0, le.X)(
              n,
              "EventDetailsRightCreatorInfo - clan info (" +
                t.GetAccountID() +
                ") is missing"
            ),
            null);
      }
      const he = ["", "en-US", "en-GB", "zh-CN", "es-ES", "br-BR"];
      let ge = class extends s.Component {
        GenerateOptions() {
          let e = new Array();
          return (
            he.forEach((t) =>
              e.push(s.createElement("option", { key: t, value: t }, t))
            ),
            e
          );
        }
        OnLanguageChange(e) {
          this.props.fnOverrideLocale(e.currentTarget.value);
        }
        render() {
          if (
            !I.cb.Get().GetPartnerEventPermissions(this.props.event.clanSteamID)
              .valve_admin
          )
            return s.createElement("div", null);
          let e = this.GenerateOptions();
          return s.createElement(
            "div",
            { style: { paddingTop: 10 } },
            s.createElement(
              "div",
              {
                className: (0, W.Z)(
                  Z().FlexColumnContainer,
                  Z().ValveOnlyBackground
                ),
              },
              s.createElement(
                "div",
                {
                  className: (0, W.Z)(
                    Z().EventEditorTextTitle,
                    Z().ValveSupportOnly
                  ),
                },
                "Valve Support Tools (VO)"
              ),
              s.createElement("span", null, "Override Locale"),
              s.createElement("select", { onChange: this.OnLanguageChange }, e)
            )
          );
        }
      };
      (0, w.gn)([ie.ak], ge.prototype, "OnLanguageChange", null),
        (ge = (0, w.gn)([d.Pi], ge));
      let Se = class extends s.Component {
        constructor() {
          super(...arguments), (this.m_cancelSignal = m().CancelToken.source());
        }
        componentDidMount() {
          const { event: e } = this.props;
          e.BIsPartnerEvent() &&
            e.BIsVisibleEvent() &&
            I.cb
              .Get()
              .LoadSingleAppEventPermissions(e.clanSteamID)
              .then((t) => {
                t &&
                  t.can_edit &&
                  B.LoadStatsForEvents(
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
          if (!I.cb.Get().GetPartnerEventPermissions(e.clanSteamID).can_edit)
            return null;
          const a =
            e.BIsPartnerEvent() &&
            e.BIsVisibleEvent() &&
            B.GetStatsFor(e.clanSteamID, e.GID);
          return s.createElement(
            h.S,
            null,
            s.createElement(
              "div",
              { className: V().EditorStatsCtn },
              s.createElement(
                "div",
                { className: V().EditorStatsRow },
                s.createElement(
                  "span",
                  null,
                  (0, K.Xx)("#EventEditor_Comments")
                ),
                s.createElement("span", null, (0, q.AV)(e.nCommentCount))
              ),
              s.createElement(
                "div",
                { className: V().EditorStatsRow },
                s.createElement(
                  "span",
                  null,
                  (0, K.Xx)("#EventEditor_UpVotes")
                ),
                s.createElement(
                  "span",
                  null,
                  e.nVotesUp ? (0, q.AV)(e.nVotesUp) : 0
                )
              ),
              s.createElement(
                "div",
                { className: V().EditorStatsRow },
                s.createElement(
                  "span",
                  null,
                  (0, K.Xx)("#EventEditor_DownVotes")
                ),
                s.createElement(
                  "span",
                  null,
                  e.nVotesDown ? (0, q.AV)(e.nVotesDown) : 0
                )
              )
            ),
            Boolean(a) &&
              s.createElement(
                "div",
                { className: V().EditorStatsCtn },
                (0, K.Xx)("#EventDashBoard_SummaryStats_Admin_Title"),
                s.createElement($, {
                  summary: a.m_stats,
                  bIsAllowedInLibrary: t,
                  bEventIsInModerationQueue: (0, u.Kt)(e),
                })
              )
          );
        }
      };
      Se = (0, w.gn)([d.Pi], Se);
      var be = a(7210),
        ye = a.n(be);
      class we {
        constructor() {
          (this.m_objApprovalPriviledge = null),
            (this.m_LoadingPriviledgePromise = null);
          let e = (0, N.kQ)("sc_app_privildge", "application_config");
          this.ValidateStoreDefault(e)
            ? ("dev" === N.De.WEB_UNIVERSE &&
                console.log(
                  "DEV_DEBUG: CSteamChinaStore: Loading payload from data-*, bHasAccess: " +
                    e.bHasAccess
                ),
              (this.m_objApprovalPriviledge = e),
              (this.m_LoadingPriviledgePromise = null))
            : (N.L7.logged_in && N.De.EREALM === p.IN.k_ESteamRealmChina) ||
              (this.m_objApprovalPriviledge = { bHasAccess: !1 });
        }
        BHasSteamChinaAppApprovalPriviledge() {
          var e;
          return null === (e = this.m_objApprovalPriviledge) || void 0 === e
            ? void 0
            : e.bHasAccess;
        }
        HintLoadAppApprovalPriviledge() {
          return (0, w.mG)(this, void 0, void 0, function* () {
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
          return (0, w.mG)(this, void 0, void 0, function* () {
            const t =
              N.De.STORE_BASE_URL + "events_admin/ajaxgetscapprovalpriviledge";
            try {
              const a = yield m().get(t, { withCredentials: !0 });
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
              const t = (0, T.l)(e);
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
      (0, w.gn)([C.LO], we.prototype, "m_objApprovalPriviledge", void 0);
      var De = a(84351),
        Ae = a(59650),
        Ie = a(53622);
      const Ne = (0, d.Pi)((e) => {
          const [t, a] = s.useState(null),
            { eventModel: n } = e;
          let r = n.clanSteamID.GetAccountID();
          s.useEffect(() => {
            const e = m().CancelToken.source();
            return (
              (0, w.mG)(void 0, void 0, void 0, function* () {
                const t = l.K.InitFromClanID(r),
                  n = yield I.cb.Get().LoadSingleAppEventPermissions(t),
                  s = yield we.Get().HintLoadAppApprovalPriviledge();
                e.token.reason ||
                  a(N.L7.is_support || n.can_edit || s.bHasAccess);
              }),
              () => e.cancel("SteamChinaAdminPanel is unmounting")
            );
          }, [r]);
          const i = l.K.InitFromClanID(r);
          return N.L7.is_support ||
            I.cb.Get().GetPartnerEventPermissions(i).can_edit
            ? s.createElement(g.H, {
                eventModel: n,
                partnerEventStore: e.partnerEventStore,
                addtionalAdminButtons: t
                  ? [
                      s.createElement(Ce, {
                        key: "removesteamchina",
                        eventModel: n,
                      }),
                    ]
                  : void 0,
              })
            : we.Get().BHasSteamChinaAppApprovalPriviledge()
            ? s.createElement(
                "div",
                { className: H.DisplayAdminPanel },
                s.createElement(
                  "span",
                  { className: H.DisplayAdminPanel_Title },
                  (0, K.Xx)("#EventDisplay_Admin_Title")
                ),
                s.createElement(Ce, { key: "removesteamchina", eventModel: n })
              )
            : null;
        }),
        Ce = (e) => {
          const { eventModel: t } = e;
          return s.createElement(
            "div",
            {
              className: (0, W.Z)(
                F.Button,
                H.AdminButton,
                F.ValveOnlyBackground
              ),
              onClick: (a) => {
                let n = !1;
                (0, Ae.AM)(
                  s.createElement(
                    De.uH,
                    {
                      strTitle: (0, K.Xx)(
                        "#EventAdmin_Moderation_HideEventInSC"
                      ),
                      strDescription: (0, K.Xx)(
                        "#EventAdmin_Moderation_HideEventInSC_Desc"
                      ),
                      bDestructiveWarning: !0,
                      closeModal: e.closeModal,
                      onOK: () => {
                        (n = !0),
                          (0, w.mG)(void 0, void 0, void 0, function* () {
                            var a, n, r, l;
                            let i = new URLSearchParams();
                            i.append("sessionid", N.De.SESSIONID),
                              i.append(
                                "clan_accountid",
                                "" + t.clanSteamID.GetAccountID()
                              ),
                              i.append("gid_clan_event", "" + t.GID);
                            let o = !1,
                              c = 0;
                            try {
                              const e = `${N.De.STORE_BASE_URL}/events_admin/ajaxhidefromsteamchina`,
                                s = yield m().post(e, i, {
                                  withCredentials: !0,
                                });
                              (o =
                                1 ==
                                  (null === (a = null == s ? void 0 : s.data) ||
                                  void 0 === a
                                    ? void 0
                                    : a.success) ||
                                29 ==
                                  (null === (n = null == s ? void 0 : s.data) ||
                                  void 0 === n
                                    ? void 0
                                    : n.success)),
                                29 ==
                                  (null === (r = null == s ? void 0 : s.data) ||
                                  void 0 === r
                                    ? void 0
                                    : r.success) &&
                                  console.warn(
                                    `RemoveEventFromSteamChinaButton: we receive duplicate request ${t.clanSteamID.GetAccountID()} : ${
                                      t.GID
                                    }; event is still removed from SC`
                                  ),
                                (c =
                                  null === (l = null == s ? void 0 : s.data) ||
                                  void 0 === l
                                    ? void 0
                                    : l.success);
                            } catch (e) {
                              const t = (0, T.l)(e);
                              (c = t.errorCode),
                                console.error(
                                  "RemoveEventFromSteamChinaButton: error " +
                                    t.strErrorMsg,
                                  t
                                );
                            }
                            e.closeModal && e.closeModal(),
                              (0, Ae.AM)(
                                o
                                  ? s.createElement(
                                      De.uH,
                                      { bAlertDialog: !0 },
                                      (0, K.Xx)("#EventDisplay_Share_Success")
                                    )
                                  : s.createElement(
                                      De.JX,
                                      null,
                                      (0, K.Xx)("#EventDisplay_Share_Failure") +
                                        " " +
                                        c
                                    ),
                                window
                              );
                          });
                      },
                    },
                    n &&
                      s.createElement(ne.V, {
                        size: "medium",
                        position: "center",
                      })
                  ),
                  (0, Ie.RA)(a)
                );
              },
            },
            (0, K.Xx)("#EventAdmin_Moderation_HideEventInSC")
          );
        };
      var Te = a(159);
      const fe = E.M.Get();
      function Ge() {
        document.body.classList.contains("events_hub") &&
          document.body.classList.remove("events_hub");
      }
      const Be = (0, d.Pi)((e) => {
          const {
              bInfiniteScroll: t,
              event_gid: a,
              announcement_gid: n,
              clansteamid: r,
              appid: l,
            } = e,
            [i, o] = (0, s.useState)(a ? fe.GetClanEventModel(a) : void 0),
            [c] = (0, L.vs)(null == i ? void 0 : i.appid, {
              include_assets: !0,
              include_release: !0,
              include_platforms: !0,
              include_screenshots: !0,
            }),
            [d, u] = (0, s.useState)(!1),
            E = (e, t) => {
              t.token.reason ||
                (o(e),
                (function (e) {
                  var t;
                  let a;
                  if (e && e.appid)
                    a =
                      null === (t = Te.Z.Get().GetApp(e.appid)) || void 0 === t
                        ? void 0
                        : t.GetName();
                  else if (e && e.clanSteamID) {
                    const t = v.sV.GetClanInfoByClanAccountID(
                      e.clanSteamID.GetAccountID()
                    );
                    a = t && t.group_name;
                  }
                  const n =
                    e && e.GetNameWithFallback((0, _.jM)(N.De.LANGUAGE));
                  if (e && a && n) {
                    const e = (0, K.Xx)(
                      "#EventCalendar_TabTitle_GroupNameAndEventDetail",
                      a,
                      n
                    );
                    document.title != e && (document.title = e);
                  }
                })(e));
            },
            w = (e) => {
              const t = (0, T.l)(e);
              console.error("StoreEventDetailView failed " + t.strErrorMsg, t),
                u(!0);
            };
          if (
            ((0, s.useEffect)(Ge, []),
            (0, s.useEffect)(() => {
              const e = m().CancelToken.source();
              return (
                i ||
                  (a && !fe.GetClanEventModel(a)
                    ? fe
                        .LoadPartnerEventGeneric(r, l, a, void 0, 0)
                        .then((t) => E(t, e))
                        .catch(() => {
                          e.token.reason ||
                            fe
                              .LoadPartnerEventGeneric(r, l, void 0, a, 0)
                              .then((t) => E(t, e))
                              .catch(w);
                        })
                    : n &&
                      !fe.GetClanEventGIDFromAnnouncementGID(n) &&
                      fe
                        .LoadPartnerEventGeneric(r, l, void 0, n, 0)
                        .then((t) => E(t, e))
                        .catch(w)),
                () => {
                  e.cancel("StoreEventDetailView: unmounting");
                }
              );
            }, [a, r, l, n, i]),
            d || !i || ((null == i ? void 0 : i.appid) && !c))
          ) {
            const e = "lang_" + (0, _.dt)((0, _.jM)(N.De.LANGUAGE)),
              t = "";
            return s.createElement(
              "div",
              {
                className: (0, W.Z)(
                  V().EventDetailsPageContainer,
                  e,
                  Z().PartnerEventFont,
                  V().NoTitleArtwork
                ),
              },
              s.createElement("div", { style: { height: "100px" } }),
              s.createElement(_e, { strImageURL: t }),
              s.createElement(pe, {
                strImageURL: t,
                body: d
                  ? s.createElement(
                      "div",
                      { className: ye().ErrorMsg },
                      (0, K.kQ)(
                        "#Events_FailedToFind",
                        s.createElement(
                          "a",
                          { href: N.De.STORE_BASE_URL + "news/" },
                          (0, K.Xx)("#EventDisplay_NewsHubSubtitle")
                        )
                      )
                    )
                  : s.createElement(ne.V, {
                      string: (0, K.Xx)("#Loading"),
                      size: "medium",
                      position: "center",
                    }),
                postbody: Boolean(d && r)
                  ? s.createElement(y._G, {
                      clanAccountID: r.GetAccountID(),
                      partnerEventStore: fe,
                    })
                  : void 0,
              })
            );
          }
          return t
            ? s.createElement(
                h.S,
                null,
                s.createElement(S.x, {
                  appid: i.appid,
                  trackingLocation: 7,
                  announcementGID: i.GetAnnouncementGID(),
                  partnerEventStore: fe,
                  eventModel: i,
                  showAppHeader: !0,
                  closeModal: () =>
                    e.history.push(
                      (0, b.q)(i, b.Ue.k_eStoreNewsHub, "allowRelative")
                    ),
                })
              )
            : s.createElement(
                h.S,
                null,
                s.createElement(me, {
                  lang: (0, _.jM)(N.De.LANGUAGE),
                  partnerEventStore: fe,
                  event: i,
                  adminPanel:
                    N.De.EREALM === p.IN.k_ESteamRealmChina
                      ? s.createElement(Ne, { eventModel: i })
                      : s.createElement(g.H, {
                          eventModel: i,
                          partnerEventStore: fe,
                        }),
                  otherEventRow: s.createElement(y._G, {
                    clanAccountID: i.clanSteamID.GetAccountID(),
                    gidAnnouncement: i.AnnouncementGID,
                    partnerEventStore: fe,
                  }),
                })
              );
        }),
        Le = (0, r.EN)(Be);
      var ke = a(84297),
        Me = a(54086);
      const Pe = (e) => {
        const [t] = (0, o.Ar)("byday", !1),
          [a] = (0, o.Ar)("upcoming", !1);
        return (0, i.ue)()
          ? s.createElement(
              Me.n,
              { bSalePage: !0 },
              s.createElement(
                r.rs,
                null,
                s.createElement(r.AW, {
                  exact: !0,
                  path: n.Z.EventViewByApp(
                    ":appid(\\d+)",
                    ":event_gid(\\d+)",
                    ":vanity?"
                  ),
                  render: (e) =>
                    s.createElement(
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
                s.createElement(r.AW, {
                  exact: !0,
                  path: n.Z.EventViewByGroup(
                    ":groupid(\\d+)",
                    ":event_gid(\\d+)",
                    ":vanity?"
                  ),
                  render: (e) =>
                    s.createElement(
                      Le,
                      Object.assign(
                        { key: "detailview_" + e.match.params.event_gid },
                        e,
                        {
                          clansteamid: new l.K(e.match.params.groupid),
                          event_gid: e.match.params.event_gid,
                          bInfiniteScroll: "inline" == e.match.params.viewtype,
                        }
                      )
                    ),
                }),
                s.createElement(r.AW, {
                  exact: !0,
                  path: n.Z.OldAnnouncementViewByApp(
                    ":appid(\\d+)",
                    ":announcement_gid(\\d+)",
                    ":vanity?"
                  ),
                  render: (e) =>
                    s.createElement(
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
                s.createElement(r.AW, {
                  exact: !0,
                  path: n.Z.OldAnnouncementViewByGroup(
                    ":groupid(\\d+)",
                    ":announcement_gid(\\d+)",
                    ":vanity?"
                  ),
                  render: (e) =>
                    s.createElement(
                      Le,
                      Object.assign(
                        {
                          key:
                            "detailoldview_" + e.match.params.announcement_gid,
                        },
                        e,
                        {
                          clansteamid: new l.K(e.match.params.groupid),
                          announcement_gid: e.match.params.announcement_gid,
                          bInfiniteScroll:
                            "old_inline" == e.match.params.viewtype,
                        }
                      )
                    ),
                }),
                s.createElement(r.AW, {
                  exact: !0,
                  path: n.Z.NewsHubApp(":appid(\\d+)", ":vanity?"),
                  render: (e) =>
                    s.createElement(
                      ke.ZP,
                      Object.assign({ key: e.match.params.appid }, e, {
                        filter_to_appids: [Number(e.match.params.appid)],
                        section_by_day: t,
                      })
                    ),
                }),
                s.createElement(r.AW, {
                  exact: !0,
                  path: n.Z.NewsHubGroup(":groupid(\\d+)", ":vanity?"),
                  render: (e) =>
                    s.createElement(
                      ke.ZP,
                      Object.assign({ key: e.match.params.groupid }, e, {
                        filter_to_clanids: [Number(e.match.params.groupid)],
                        section_by_day: t,
                      })
                    ),
                }),
                s.createElement(r.AW, {
                  exact: !0,
                  path: n.Z.NewsHubCollection(":collectionid", ":vanity?"),
                  render: (e) =>
                    s.createElement(
                      ke.ZP,
                      Object.assign({ key: e.match.params.collectionid }, e, {
                        filter_to_collection: e.match.params.collectionid,
                        section_by_day: t,
                      })
                    ),
                }),
                s.createElement(r.AW, {
                  exact: !0,
                  path: n.Z.NewsHubSale(":saleid", ":vanity?"),
                  render: (e) =>
                    s.createElement(
                      ke.ZP,
                      Object.assign({ key: e.match.params.saleid }, e, {
                        filter_to_saleid: e.match.params.saleid,
                        section_by_day: t || a,
                      })
                    ),
                }),
                s.createElement(r.AW, {
                  exact: !0,
                  path: n.Z.NewsHubContentHub(
                    ":hubtype",
                    ":category_or_language?",
                    ":tag_name?"
                  ),
                  render: (e) =>
                    s.createElement(
                      ke.ZP,
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
                s.createElement(r.AW, {
                  exact: !0,
                  path: n.Z.NewsHub(),
                  render: (e) =>
                    s.createElement(
                      ke.ZP,
                      Object.assign({ key: "global" }, e, { section_by_day: t })
                    ),
                })
              )
            )
          : null;
      };
    },
  },
]);
