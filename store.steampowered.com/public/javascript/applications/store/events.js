/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [2136],
  {
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
    7210: (e) => {
      e.exports = { ErrorMsg: "eventdetailview_ErrorMsg_1ZEL9" };
    },
    34425: (e, t, n) => {
      "use strict";
      n.d(t, { p: () => c });
      var a = n(70655),
        i = n(67294),
        o = n(7707),
        r = n(27745),
        l = n(22975),
        s = n(90666);
      function c(e) {
        const { children: t, navTreeRef: n } = e,
          c = (0, a._T)(e, ["children", "navTreeRef"]),
          d = i.useRef(),
          m = (0, l.BE)(d, n);
        if (s.De.IN_GAMEPADUI) {
          const e = window.__nav_tree_root;
          return i.createElement(
            o.Fe,
            Object.assign({}, c, {
              navTreeRef: m,
              secondary: !0,
              parentEmbeddedNavTree: e,
            }),
            i.createElement(r.O, null, t)
          );
        }
        return i.createElement(i.Fragment, null, t);
      }
    },
    53888: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { DemoAndQuickPitch: () => W, Events: () => X });
      var a = n(54086),
        i = n(67294),
        o = n(70655),
        r = (n(37662), n(52114)),
        l = n(9669),
        s = n.n(l),
        c = n(29323),
        d = n(26149),
        m = (n(54698), n(39388)),
        u = n(7200),
        p = n(89694),
        v = n(27535),
        _ = n(53622),
        E = n(41311),
        h = n(90666),
        g = n(96602),
        A = n(59650),
        b = n(3671),
        S = n(84282),
        I = n(56274);
      const D = (0, c.Pi)((e) => {
        const t = (0, i.useRef)(null),
          n = Number(e.appID),
          a = (0, i.useMemo)(() => ({ id: n, type: "game" }), [n]),
          [l] = (0, r.vs)(n, {}),
          [c, D] = (0, i.useState)(null),
          [w, G] = (0, i.useState)(null);
        (0, i.useEffect)(
          () => (
            (0, o.mG)(void 0, void 0, void 0, function* () {
              const e = s().CancelToken.source();
              (t.current = e.cancel), yield m.ZP.Get().LoadAppIDsBatch([n], e);
              const a = m.ZP.Get().GetDemoEventInfo(n),
                i = yield u.j1.LoadAdjacentPartnerEvents(null, null, n, 0, 1, {
                  exclude_tags: ["steam_game_festival_artist_statement"],
                  require_tags: ["steam_game_festival_broadcast"],
                });
              e.token.reason || (D(a), i.length > 0 && G(i[0]));
            }),
            () => {
              t.current && t.current("DemoAndQuickPitch: Unmounting");
            }
          ),
          [n]
        );
        const y = c && c.demo_appid > 0,
          f = w ? w.GetNameWithFallback((0, d.jM)(h.De.LANGUAGE)) : null,
          C = !w || w.BHasEventEnded();
        return y
          ? i.createElement(
              i.Fragment,
              null,
              i.createElement(
                "div",
                { className: b.TileContainer },
                i.createElement(
                  "div",
                  { className: b.TileTitleContainer },
                  i.createElement(
                    "div",
                    { className: b.TileTitleInnerContainer },
                    i.createElement(
                      "div",
                      { className: b.TileTitle },
                      (0, E.Xx)(
                        "#Sale_DownloadDemo",
                        null == l ? void 0 : l.GetName()
                      )
                    ),
                    i.createElement(I.a, { item: a })
                  ),
                  i.createElement(S.f, {
                    info: a,
                    className: b.TileActionButton,
                  })
                ),
                i.createElement(
                  "div",
                  { className: b.TileActionContainer },
                  f &&
                    i.createElement(
                      "div",
                      { className: b.TileActionInnerContainer },
                      C
                        ? i.createElement(
                            "h1",
                            null,
                            (0, E.Xx)("#EventBrowse_RecentUpdates")
                          )
                        : i.createElement(
                            "h1",
                            null,
                            (0, E.Xx)("#EventCalendar_TuneIn")
                          ),
                      i.createElement(
                        "div",
                        {
                          className: b.TileActionInner,
                          onClick: (e) => {
                            (0, A.AM)(
                              i.createElement(v.m$, {
                                initialEvent: w,
                                bShowOnlyInitialEvent: !1,
                                partnerEventStore: u.j1,
                                emoticonStore: p.F,
                                showAppHeader: !0,
                              }),
                              _.RA(e)
                            );
                          },
                        },
                        i.createElement(
                          "div",
                          { className: b.TileActionInnerTitle },
                          f
                        ),
                        i.createElement(
                          "div",
                          { className: b.TileActionInnerText },
                          i.createElement(g.H6, {
                            dateAndTime: w.GetStartTimeAndDateUnixSeconds(),
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
      n(39799), n(68002);
      var w = n(5525),
        G = n(35577),
        y = (n(34425), n(7707)),
        f = n(35921),
        C = n(39746),
        T = (n(12505), n(71174), n(9915)),
        L = n(24020),
        P = n(70350),
        k = n(69491),
        M = n.n(k),
        N = n(95598),
        B = n(13596),
        U = n(22975),
        x = n(3044),
        H = n(38600),
        j = n(13045);
      class R extends i.Component {
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
          const t = (0, L.b)("EventWebRowEmbed");
          this.ValidateStoreDefault(t) &&
            ((this.state.bPreLoaded = t.bPreLoaded),
            (this.state.announcementGIDList = t.announcementGIDList),
            (this.state.last_update_event = t.last_update_event),
            (this.state.events = []),
            this.state.announcementGIDList.forEach((e) => {
              const t = u.j1.GetClanEventFromAnnouncementGID(e);
              t && this.state.events.push(t);
            }));
        }
        componentDidMount() {
          return (0, o.mG)(this, void 0, void 0, function* () {
            const {
              appid: e,
              event_customization: t,
              partnerEventStore: n,
              trackingLocation: a,
            } = this.props;
            if (!this.state.bPreLoaded) {
              const i = yield n.LoadAdjacentPartnerEvents(
                null,
                null,
                e,
                0,
                2,
                t
              );
              if ((this.setState({ events: i }), a && i && i.length > 0)) {
                const e = T.cb.Get().GetTracker();
                this.state.events
                  .filter((e) => e.BIsPartnerEvent())
                  .forEach((t) =>
                    e.MarkEventShown(t.GID, t.clanSteamID.GetAccountID(), a)
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
          const n = T.cb.Get().GetTracker();
          e &&
            e.BIsPartnerEvent() &&
            n.MarkEventRead(e.GID, e.clanSteamID.GetAccountID(), t) &&
            n.Flush();
        }
        ShowLatestUpdateModal() {
          const {
              event_gid: e,
              announcement_gid: t,
              clan_account_id: n,
            } = this.state.last_update_event,
            { trackingLocation: a } = this.props;
          this.setState({
            bShowModal: !0,
            modalInitialEvent: void 0,
            announcementGID: t,
          });
          const i = T.cb.Get().GetTracker();
          e && i.MarkEventRead(e, n, a) && i.Flush();
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
            return i.createElement(
              "div",
              { className: M().FlexCenter },
              i.createElement(B.V, { size: "medium", position: "center" })
            );
          const n = window.screen.width <= 500 ? 1 : 2,
            a = Boolean(null == t ? void 0 : t.length),
            o = this.BHasLastUpdateEvent(),
            r = this.BShouldShowLastUpdateEvent()
              ? this.state.last_update_event.announcement_gid
              : void 0,
            { strClassName: l } = this.props;
          return i.createElement(
            y.Ks,
            { className: l },
            this.state.bShowModal &&
              i.createElement(
                F,
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
            a &&
              i.createElement(
                "div",
                null,
                i.createElement(
                  "h2",
                  null,
                  (0, E.Xx)("#EventBrowse_RecentEvents")
                ),
                !h.De.IN_GAMEPADUI &&
                  i.createElement(
                    "div",
                    { className: j.SectionButtonCtn },
                    this.props.bViewAllShowInfiniteScroll
                      ? i.createElement(
                          y.Ks,
                          {
                            className: j.SectionButton,
                            onClick: () => this.ShowModal(t[0]),
                          },
                          (0, E.Xx)("#EventBrowse_MoreEventsBtn")
                        )
                      : i.createElement(
                          H.JW,
                          {
                            eventModel: t[0],
                            route: H.Ue.k_eViewWebSiteHub,
                            className: j.SectionButton,
                          },
                          (0, E.Xx)("#EventBrowse_MoreEventsBtn")
                        )
                  ),
                i.createElement(
                  "div",
                  { className: j.EventsSummariesCtn },
                  t.slice(0, n).map((e) => {
                    const n =
                      1 === t.length && window.screen.width > 500 ? P.KE : P.T4;
                    return i.createElement(n, {
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
            Boolean(o && r) &&
              i.createElement(Z, {
                nUpdateTime: this.state.last_update_event.rtime,
                announcementGID: r,
                onClick: this.ShowLatestUpdateModal,
              }),
            Boolean(o && !r && !h.De.IN_GAMEPADUI) &&
              i.createElement(O, {
                nUpdateTime: this.state.last_update_event.rtime,
                onClick: this.ShowLatestUpdateModal,
              })
          );
        }
      }
      function F(e) {
        const {
          appid: t,
          partnerEventStore: n,
          trackingLocation: a,
          announcementGID: o,
          eventModel: r,
          closeModal: l,
        } = e;
        return i.createElement(x.x, {
          className: h.De.IN_GAMEPADUI ? void 0 : j.StoreHeaderAdjust,
          eventClassName: h.De.IN_GAMEPADUI ? j.GamePadUIWidthAdjust : void 0,
          appid: t,
          trackingLocation: a,
          announcementGID: o,
          partnerEventStore: n,
          eventModel: r,
          closeModal: l,
        });
      }
      function O(e) {
        return i.createElement(
          "div",
          { className: j.LatestUpdateButtonCtn },
          i.createElement(
            "div",
            { className: j.LatestUpdateIcon },
            i.createElement(N.BNo, null)
          ),
          i.createElement(
            y.Ks,
            { className: j.LatestUpdateButton, onClick: e.onClick },
            (0, E.Xx)(
              "#EventBrowse_LatestUpdateTime_Button",
              (0, E.m9)(e.nUpdateTime)
            )
          )
        );
      }
      function Z(e) {
        const { nUpdateTime: t, announcementGID: n, onClick: a } = e,
          o = n ? u.j1.GetClanEventFromAnnouncementGID(n) : null,
          r = (e) => {
            null == a || a(), e.stopPropagation(), e.preventDefault();
          };
        return i.createElement(
          "div",
          null,
          i.createElement(
            "h2",
            null,
            (0, E.Xx)("#EventBrowse_LastUpdateDate", (0, E.m9)(t))
          ),
          i.createElement(
            "div",
            { className: j.SectionButtonCtn },
            i.createElement(
              "div",
              { className: j.SectionButton, onClick: r },
              (0, E.Xx)("#EventBrowse_ViewLatestUpdate")
            )
          ),
          Boolean(o) &&
            i.createElement(
              f.s,
              {
                className: j.EventsSummariesCtn,
                "flow-children": "column",
                navEntryPreferPosition: C.c4.PREFERRED_CHILD,
              },
              i.createElement(P.KE, { event: o, onClick: r })
            )
        );
      }
      function V(e) {
        return (t) => i.createElement(a.n, null, i.createElement(e, t));
      }
      (0, o.gn)([U.ak], R.prototype, "ShowModal", null),
        (0, o.gn)([U.ak], R.prototype, "ShowLatestUpdateModal", null),
        (0, o.gn)([U.ak], R.prototype, "CloseModal", null);
      const X = V(function (e) {
          const t = (0, w.rw)(),
            n = new Date(t.setUTCHours(0, 0, 0, 0) - 15552e6),
            a = Math.floor(n.getTime() / 1e3),
            { appid: o } = e;
          return i.createElement(R, {
            appid: o,
            partnerEventStore: G.M.Get(),
            event_customization: {
              rtime_oldestevent: a,
              exclude_tags: ["patchnotes", "hide_store", "mod_hide_store"],
              exclude_event_types: [34],
            },
            strClassName: "early_access_announcements",
            trackingLocation: 3,
          });
        }),
        W = V(D);
    },
    98692: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => Y });
      var a = n(9355),
        i = n(67294),
        o = n(78587),
        r = n(3389),
        l = n(27991),
        s = n(31933),
        c = n(9669),
        d = n.n(c),
        m = n(29323),
        u = n(26149),
        p = n(54698),
        v = (n(37662), n(68002), n(76776)),
        _ = n(35577),
        E = n(32548),
        h = n(14900),
        g = n(3044),
        A = n(38600),
        b = n(70350),
        S = n(31189),
        I = n(96944),
        D = n.n(I),
        w = n(34133),
        G = n.n(w),
        y = n(13596),
        f = n(7573),
        C = n(41311),
        T = n(93976),
        L = n(90666),
        P = n(7210),
        k = n.n(P),
        M = n(70655),
        N = n(22188);
      n(82946);
      class B {
        constructor() {
          (this.m_objApprovalPriviledge = null),
            (this.m_LoadingPriviledgePromise = null);
          let e = (0, L.kQ)("sc_app_privildge", "application_config");
          this.ValidateStoreDefault(e)
            ? ("dev" === L.De.WEB_UNIVERSE &&
                console.log(
                  "DEV_DEBUG: CSteamChinaStore: Loading payload from data-*, bHasAccess: " +
                    e.bHasAccess
                ),
              (this.m_objApprovalPriviledge = e),
              (this.m_LoadingPriviledgePromise = null))
            : (L.L7.logged_in && L.De.EREALM === p.IN.k_ESteamRealmChina) ||
              (this.m_objApprovalPriviledge = { bHasAccess: !1 });
        }
        BHasSteamChinaAppApprovalPriviledge() {
          var e;
          return null === (e = this.m_objApprovalPriviledge) || void 0 === e
            ? void 0
            : e.bHasAccess;
        }
        HintLoadAppApprovalPriviledge() {
          return (0, M.mG)(this, void 0, void 0, function* () {
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
          return (0, M.mG)(this, void 0, void 0, function* () {
            const t =
              L.De.STORE_BASE_URL + "events_admin/ajaxgetscapprovalpriviledge";
            try {
              const n = yield d().get(t, { withCredentials: !0 });
              if (
                1 ==
                (null === (e = null == n ? void 0 : n.data) || void 0 === e
                  ? void 0
                  : e.success)
              )
                return (
                  (this.m_objApprovalPriviledge = {
                    bHasAccess: n.data.bHasAccess,
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
          return B.s_Singleton || (B.s_Singleton = new B()), B.s_Singleton;
        }
        ValidateStoreDefault(e) {
          return e && "object" == typeof e && "boolean" == typeof e.bHasAccess;
        }
      }
      (0, M.gn)([N.LO], B.prototype, "m_objApprovalPriviledge", void 0);
      var U = n(9915),
        x = n(84351),
        H = n(59650),
        j = n(53622);
      const R = (0, m.Pi)((e) => {
          const [t, n] = i.useState(null),
            { eventModel: a } = e;
          let o = a.clanSteamID.GetAccountID();
          i.useEffect(() => {
            const e = d().CancelToken.source();
            return (
              (0, M.mG)(void 0, void 0, void 0, function* () {
                const t = r.K.InitFromClanID(o),
                  a = yield U.cb.Get().LoadSingleAppEventPermissions(t),
                  i = yield B.Get().HintLoadAppApprovalPriviledge();
                e.token.reason ||
                  n(L.L7.is_support || a.can_edit || i.bHasAccess);
              }),
              () => e.cancel("SteamChinaAdminPanel is unmounting")
            );
          }, [o]);
          const l = r.K.InitFromClanID(o);
          return L.L7.is_support ||
            U.cb.Get().GetPartnerEventPermissions(l).can_edit
            ? i.createElement(h.H, {
                eventModel: a,
                partnerEventStore: e.partnerEventStore,
                addtionalAdminButtons: t
                  ? [
                      i.createElement(F, {
                        key: "removesteamchina",
                        eventModel: a,
                      }),
                    ]
                  : void 0,
              })
            : B.Get().BHasSteamChinaAppApprovalPriviledge()
            ? i.createElement(
                "div",
                { className: I.DisplayAdminPanel },
                i.createElement(
                  "span",
                  { className: I.DisplayAdminPanel_Title },
                  (0, C.Xx)("#EventDisplay_Admin_Title")
                ),
                i.createElement(F, { key: "removesteamchina", eventModel: a })
              )
            : null;
        }),
        F = (e) => {
          const { eventModel: t } = e;
          return i.createElement(
            "div",
            {
              className: (0, f.Z)(
                w.Button,
                I.AdminButton,
                w.ValveOnlyBackground
              ),
              onClick: (n) => {
                let a = !1;
                (0, H.AM)(
                  i.createElement(
                    x.uH,
                    {
                      strTitle: (0, C.Xx)(
                        "#EventAdmin_Moderation_HideEventInSC"
                      ),
                      strDescription: (0, C.Xx)(
                        "#EventAdmin_Moderation_HideEventInSC_Desc"
                      ),
                      bDestructiveWarning: !0,
                      closeModal: e.closeModal,
                      onOK: () => {
                        (a = !0),
                          (0, M.mG)(void 0, void 0, void 0, function* () {
                            var n, a, o, r;
                            let l = new URLSearchParams();
                            l.append("sessionid", L.De.SESSIONID),
                              l.append(
                                "clan_accountid",
                                "" + t.clanSteamID.GetAccountID()
                              ),
                              l.append("gid_clan_event", "" + t.GID);
                            let s = !1,
                              c = 0;
                            try {
                              const e = `${L.De.STORE_BASE_URL}/events_admin/ajaxhidefromsteamchina`,
                                i = yield d().post(e, l, {
                                  withCredentials: !0,
                                });
                              (s =
                                1 ==
                                  (null === (n = null == i ? void 0 : i.data) ||
                                  void 0 === n
                                    ? void 0
                                    : n.success) ||
                                29 ==
                                  (null === (a = null == i ? void 0 : i.data) ||
                                  void 0 === a
                                    ? void 0
                                    : a.success)),
                                29 ==
                                  (null === (o = null == i ? void 0 : i.data) ||
                                  void 0 === o
                                    ? void 0
                                    : o.success) &&
                                  console.warn(
                                    `RemoveEventFromSteamChinaButton: we receive duplicate request ${t.clanSteamID.GetAccountID()} : ${
                                      t.GID
                                    }; event is still removed from SC`
                                  ),
                                (c =
                                  null === (r = null == i ? void 0 : i.data) ||
                                  void 0 === r
                                    ? void 0
                                    : r.success);
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
                              (0, H.AM)(
                                s
                                  ? i.createElement(
                                      x.uH,
                                      { bAlertDialog: !0 },
                                      (0, C.Xx)("#EventDisplay_Share_Success")
                                    )
                                  : i.createElement(
                                      x.JX,
                                      null,
                                      (0, C.Xx)("#EventDisplay_Share_Failure") +
                                        " " +
                                        c
                                    ),
                                window
                              );
                          });
                      },
                    },
                    a &&
                      i.createElement(y.V, {
                        size: "medium",
                        position: "center",
                      })
                  ),
                  (0, j.RA)(n)
                );
              },
            },
            (0, C.Xx)("#EventAdmin_Moderation_HideEventInSC")
          );
        };
      var O = n(159),
        Z = n(52114);
      const V = _.M.Get();
      function X() {
        document.body.classList.contains("events_hub") &&
          document.body.classList.remove("events_hub");
      }
      const W = (0, m.Pi)((e) => {
          const {
              bInfiniteScroll: t,
              event_gid: n,
              announcement_gid: a,
              clansteamid: o,
              appid: r,
            } = e,
            [l, s] = (0, i.useState)(n ? V.GetClanEventModel(n) : void 0),
            [c] = (0, Z.vs)(null == l ? void 0 : l.appid, {
              include_assets: !0,
              include_release: !0,
              include_platforms: !0,
              include_screenshots: !0,
            }),
            [m, _] = (0, i.useState)(!1),
            I = (e, t) => {
              t.token.reason ||
                (s(e),
                (function (e) {
                  var t;
                  let n;
                  if (e && e.appid)
                    n =
                      null === (t = O.Z.Get().GetApp(e.appid)) || void 0 === t
                        ? void 0
                        : t.GetName();
                  else if (e && e.clanSteamID) {
                    const t = v.sV.GetClanInfoByClanAccountID(
                      e.clanSteamID.GetAccountID()
                    );
                    n = t && t.group_name;
                  }
                  const a =
                    e && e.GetNameWithFallback((0, u.jM)(L.De.LANGUAGE));
                  if (e && n && a) {
                    const e = (0, C.Xx)(
                      "#EventCalendar_TabTitle_GroupNameAndEventDetail",
                      n,
                      a
                    );
                    document.title != e && (document.title = e);
                  }
                })(e));
            },
            w = (e) => {
              const t = (0, T.l)(e);
              console.error("StoreEventDetailView failed " + t.strErrorMsg, t),
                _(!0);
            };
          if (
            ((0, i.useEffect)(X, []),
            (0, i.useEffect)(() => {
              const e = d().CancelToken.source();
              return (
                l ||
                  (n && !V.GetClanEventModel(n)
                    ? V.LoadPartnerEventGeneric(o, r, n, void 0, 0)
                        .then((t) => I(t, e))
                        .catch(() => {
                          e.token.reason ||
                            V.LoadPartnerEventGeneric(o, r, void 0, n, 0)
                              .then((t) => I(t, e))
                              .catch(w);
                        })
                    : a &&
                      !V.GetClanEventGIDFromAnnouncementGID(a) &&
                      V.LoadPartnerEventGeneric(o, r, void 0, a, 0)
                        .then((t) => I(t, e))
                        .catch(w)),
                () => {
                  e.cancel("StoreEventDetailView: unmounting");
                }
              );
            }, [n, o, r, a, l]),
            m || !l || ((null == l ? void 0 : l.appid) && !c))
          ) {
            const e = "lang_" + (0, u.dt)((0, u.jM)(L.De.LANGUAGE)),
              t = "";
            return i.createElement(
              "div",
              {
                className: (0, f.Z)(
                  D().EventDetailsPageContainer,
                  e,
                  G().PartnerEventFont,
                  D().NoTitleArtwork
                ),
              },
              i.createElement("div", { style: { height: "100px" } }),
              i.createElement(S.Y9, { strImageURL: t }),
              i.createElement(S.vr, {
                strImageURL: t,
                body: m
                  ? i.createElement(
                      "div",
                      { className: k().ErrorMsg },
                      (0, C.kQ)(
                        "#Events_FailedToFind",
                        i.createElement(
                          "a",
                          { href: L.De.STORE_BASE_URL + "news/" },
                          (0, C.Xx)("#EventDisplay_NewsHubSubtitle")
                        )
                      )
                    )
                  : i.createElement(y.V, {
                      string: (0, C.Xx)("#Loading"),
                      size: "medium",
                      position: "center",
                    }),
                postbody: Boolean(m && o)
                  ? i.createElement(b._G, {
                      clanAccountID: o.GetAccountID(),
                      partnerEventStore: V,
                    })
                  : void 0,
              })
            );
          }
          return t
            ? i.createElement(
                E.S,
                null,
                i.createElement(g.x, {
                  appid: l.appid,
                  trackingLocation: 7,
                  announcementGID: l.GetAnnouncementGID(),
                  partnerEventStore: V,
                  eventModel: l,
                  showAppHeader: !0,
                  closeModal: () =>
                    e.history.push(
                      (0, A.q)(l, A.Ue.k_eStoreNewsHub, "allowRelative")
                    ),
                })
              )
            : i.createElement(
                E.S,
                null,
                i.createElement(S.TY, {
                  lang: (0, u.jM)(L.De.LANGUAGE),
                  partnerEventStore: V,
                  event: l,
                  adminPanel:
                    L.De.EREALM === p.IN.k_ESteamRealmChina
                      ? i.createElement(R, { eventModel: l })
                      : i.createElement(h.H, {
                          eventModel: l,
                          partnerEventStore: V,
                        }),
                  otherEventRow: i.createElement(b._G, {
                    clanAccountID: l.clanSteamID.GetAccountID(),
                    gidAnnouncement: l.AnnouncementGID,
                    partnerEventStore: V,
                  }),
                })
              );
        }),
        q = (0, o.EN)(W);
      var K = n(77143),
        z = n(54086);
      const Y = (e) => {
        const [t] = (0, s.Ar)("byday", !1),
          [n] = (0, s.Ar)("upcoming", !1);
        return (0, l.ue)()
          ? i.createElement(
              z.n,
              { bSalePage: !0 },
              i.createElement(
                o.rs,
                null,
                i.createElement(o.AW, {
                  exact: !0,
                  path: a.Z.EventViewByApp(
                    ":appid(\\d+)",
                    ":event_gid(\\d+)",
                    ":vanity?"
                  ),
                  render: (e) =>
                    i.createElement(
                      q,
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
                i.createElement(o.AW, {
                  exact: !0,
                  path: a.Z.EventViewByGroup(
                    ":groupid(\\d+)",
                    ":event_gid(\\d+)",
                    ":vanity?"
                  ),
                  render: (e) =>
                    i.createElement(
                      q,
                      Object.assign(
                        { key: "detailview_" + e.match.params.event_gid },
                        e,
                        {
                          clansteamid: new r.K(e.match.params.groupid),
                          event_gid: e.match.params.event_gid,
                          bInfiniteScroll: "inline" == e.match.params.viewtype,
                        }
                      )
                    ),
                }),
                i.createElement(o.AW, {
                  exact: !0,
                  path: a.Z.OldAnnouncementViewByApp(
                    ":appid(\\d+)",
                    ":announcement_gid(\\d+)",
                    ":vanity?"
                  ),
                  render: (e) =>
                    i.createElement(
                      q,
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
                i.createElement(o.AW, {
                  exact: !0,
                  path: a.Z.OldAnnouncementViewByGroup(
                    ":groupid(\\d+)",
                    ":announcement_gid(\\d+)",
                    ":vanity?"
                  ),
                  render: (e) =>
                    i.createElement(
                      q,
                      Object.assign(
                        {
                          key:
                            "detailoldview_" + e.match.params.announcement_gid,
                        },
                        e,
                        {
                          clansteamid: new r.K(e.match.params.groupid),
                          announcement_gid: e.match.params.announcement_gid,
                          bInfiniteScroll:
                            "old_inline" == e.match.params.viewtype,
                        }
                      )
                    ),
                }),
                i.createElement(o.AW, {
                  exact: !0,
                  path: a.Z.NewsHubApp(":appid(\\d+)", ":vanity?"),
                  render: (e) =>
                    i.createElement(
                      K.ZP,
                      Object.assign({ key: e.match.params.appid }, e, {
                        filter_to_appids: [Number(e.match.params.appid)],
                        section_by_day: t,
                      })
                    ),
                }),
                i.createElement(o.AW, {
                  exact: !0,
                  path: a.Z.NewsHubGroup(":groupid(\\d+)", ":vanity?"),
                  render: (e) =>
                    i.createElement(
                      K.ZP,
                      Object.assign({ key: e.match.params.groupid }, e, {
                        filter_to_clanids: [Number(e.match.params.groupid)],
                        section_by_day: t,
                      })
                    ),
                }),
                i.createElement(o.AW, {
                  exact: !0,
                  path: a.Z.NewsHubCollection(":collectionid", ":vanity?"),
                  render: (e) =>
                    i.createElement(
                      K.ZP,
                      Object.assign({ key: e.match.params.collectionid }, e, {
                        filter_to_collection: e.match.params.collectionid,
                        section_by_day: t,
                      })
                    ),
                }),
                i.createElement(o.AW, {
                  exact: !0,
                  path: a.Z.NewsHubSale(":saleid", ":vanity?"),
                  render: (e) =>
                    i.createElement(
                      K.ZP,
                      Object.assign({ key: e.match.params.saleid }, e, {
                        filter_to_saleid: e.match.params.saleid,
                        section_by_day: t || n,
                      })
                    ),
                }),
                i.createElement(o.AW, {
                  exact: !0,
                  path: a.Z.NewsHubContentHub(
                    ":hubtype",
                    ":category_or_language?",
                    ":tag_name?"
                  ),
                  render: (e) =>
                    i.createElement(
                      K.ZP,
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
                i.createElement(o.AW, {
                  exact: !0,
                  path: a.Z.NewsHub(),
                  render: (e) =>
                    i.createElement(
                      K.ZP,
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
