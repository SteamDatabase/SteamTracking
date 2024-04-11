/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [2136],
  {
    92242: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        Container: "_3DZHUf7uLxFhqpWQ03npUj",
        StoreHeaderAdjust: "_1BdU3ODLnmsZ3KbvtJiHnd",
        SectionButtonCtn: "_1GTuE6_ao1Qwvew5Lusg6U",
        SectionButton: "_1-yPTyNLjIAr7TpssNaC3w",
        EventsSummariesCtn: "_2UHtoCnFCyDjJS4BJk7mwt",
        LatestUpdateButtonCtn: "fKrItA-LyyNbtBHpBCjT7",
        LatestUpdateIcon: "zbw9bsuwCymNm_EVq-TxJ",
        LatestUpdateButton: "_3F6YMCF6Zs8AuGfzk0Ir85",
      };
    },
    87699: (e, t, n) => {
      "use strict";
      n.d(t, { C: () => c, R: () => l });
      var a = n(85556),
        o = n(54842),
        s = n(35427),
        r = n(64936),
        i = n(82071);
      class l {
        constructor() {
          (this.m_mapBroadcasterSteamIDToEvents = new Map()),
            (this.m_mapBroadcasterSteamIDData = new Map()),
            (0, o.rC)(this);
        }
        static GetBBCodeParam(e, t, n = "") {
          const a = new RegExp(`\\W${t}\\W*=\\W*\\"(.*?)\\"`, "gmi").exec(e);
          return a ? a[1] : n;
        }
        static ParseCalendarEventPresentersFromText(e) {
          const t = /\[\W*speaker(\W[\s\S]*?)\]([\s\S]*?)\[\W*\/speaker\W*\]/gi,
            n = new Array();
          for (;;) {
            const a = t.exec(e);
            if (null === a) break;
            const o = a[1],
              r = a[2],
              i = l.GetBBCodeParam(o, "steamid"),
              c = {
                steamID: i ? new s.K(i) : void 0,
                name: l.GetBBCodeParam(o, "name"),
                title: l.GetBBCodeParam(o, "title"),
                company: l.GetBBCodeParam(o, "company"),
                photo: l.GetBBCodeParam(o, "photo"),
                bio: r,
              };
            n.push(c);
          }
          return n;
        }
        static ParseEventModelPresenters(e, t) {
          const n = e.GetDescriptionWithFallback(t);
          return l.ParseCalendarEventPresentersFromText(n);
        }
        static ParseEventAppReferencesFromText(e) {
          const t = /\/\/store\.steampowered\.com\/app\/(\d+)/gi,
            n = new Set();
          for (;;) {
            const a = t.exec(e);
            if (null === a) break;
            const o = a[1];
            n.add(Number(o));
          }
          return n;
        }
        static ParseEventModelAppReferences(e, t) {
          var n;
          const a = e.GetDescriptionWithFallback(t),
            o = l.ParseEventAppReferencesFromText(a);
          if (
            null === (n = e.jsondata) || void 0 === n
              ? void 0
              : n.referenced_appids
          )
            for (const t of e.jsondata.referenced_appids) o.add(t);
          return o;
        }
        BuildBroadcasterSteamIDToActiveEventMap(e) {
          return (0, a.mG)(this, void 0, void 0, function* () {
            const t = r.JW.GetTimeNowWithOverride(),
              n = e.GetCalendarItemsInTimeRange(t - 3600, t);
            for (const e of n.rgCalendarItems)
              i.j1.QueueLoadPartnerEvent(e.clanid, e.unique_id);
            const a = n.rgCalendarItems.map((e) =>
                i.j1.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                  s.K.InitFromClanID(e.clanid),
                  e.unique_id,
                  0,
                ),
              ),
              o = yield Promise.all(a),
              l = new Map();
            for (const e of o)
              if (e && !(e.endTime && e.endTime < t))
                for (const t of e.GetBroadcastWhitelistAsSteamIDs())
                  l.has(t) ? l.get(t).push(e) : l.set(t, [e]);
            return l;
          });
        }
        IsBroadcasterAlreadyBound(e, t) {
          const n = this.m_mapBroadcasterSteamIDToEvents.get(e),
            a = n ? n.length : 0;
          if ((t ? t.length : 0) != a) return !1;
          for (let e = 0; e < a; e++) if (n[e] != t[e].GID) return !1;
          return !0;
        }
        static BuildSteamIDToPresenterMapFromEventList(e, t) {
          let n = new Map();
          for (const a of e) {
            if (!a) continue;
            const e = l.ParseEventModelPresenters(a, t);
            for (const t of e)
              t.steamID && n.set(t.steamID.ConvertTo64BitString(), t);
          }
          return n;
        }
        RemoveCachedDataIfNotInMap(e) {
          const t = new Array();
          this.m_mapBroadcasterSteamIDToEvents.forEach((n, a) => {
            e.has(a) || t.push(a);
          }),
            t.forEach((e) => {
              this.m_mapBroadcasterSteamIDData.delete(e),
                this.m_mapBroadcasterSteamIDToEvents.delete(e);
            });
        }
        static BuildAppIDRefsForEventList(e, t) {
          const n = new Set();
          for (const a of e) {
            l.ParseEventModelAppReferences(a, t).forEach((e) => n.add(e));
          }
          return Array.from(n);
        }
        UpdateCachedDataFromEvents(e, t) {
          e.forEach((e, n) => {
            if (this.IsBroadcasterAlreadyBound(n, e)) return;
            const a = {
              m_mapPresenters: l.BuildSteamIDToPresenterMapFromEventList(e, t),
              m_rgAppIDs: l.BuildAppIDRefsForEventList(e, t),
            };
            this.m_mapBroadcasterSteamIDData.set(n, a),
              this.m_mapBroadcasterSteamIDToEvents.set(
                n,
                e.map((e) => e.GID),
              );
          });
        }
        SynchronizeEventsWithBroadcasts(e, t) {
          return (0, a.mG)(this, void 0, void 0, function* () {
            const n = yield this.BuildBroadcasterSteamIDToActiveEventMap(e);
            this.RemoveCachedDataIfNotInMap(n),
              this.UpdateCachedDataFromEvents(n, t);
          });
        }
        GetPresenterMapForBroadcasterSteamID(e) {
          var t;
          return null === (t = this.m_mapBroadcasterSteamIDData.get(e)) ||
            void 0 === t
            ? void 0
            : t.m_mapPresenters;
        }
        GetAppIDListForBroadcasterSteamID(e) {
          var t;
          return null === (t = this.m_mapBroadcasterSteamIDData.get(e)) ||
            void 0 === t
            ? void 0
            : t.m_rgAppIDs;
        }
      }
      (0, a.gn)([o.LO], l.prototype, "m_mapBroadcasterSteamIDData", void 0);
      const c = new l();
    },
    56190: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => j });
      var a = n(760),
        o = n(47427),
        s = n(73941);
      const r = (e) =>
        o.createElement(
          s.R0,
          Object.assign({}, e, {
            key: e.match.params.oldAnnouncementGID,
            bClearDirty: !0,
            bPreview: !1,
            bPreventRedirect: !0,
          }),
        );
      var i = n(8285),
        l = n(77581),
        c = n(45944),
        d = n(42855),
        m = n(82071),
        p = n(81913),
        u = n(7765),
        v = n.n(u),
        h = n(69406),
        E = n(37563),
        I = n(85556),
        S = n(27605),
        D = n(20417),
        _ = n(27784),
        f = n(46882),
        B = n(93243),
        w = n(31846),
        L = n(54842);
      let g = class extends o.Component {
        constructor() {
          super(...arguments),
            (this.state = {
              bShowModal: !1,
              bLoadedLandingState: this.props.bPreventDismiss,
            });
        }
        componentDidMount() {
          this.props.bPreventDismiss
            ? this.LoadAppAndFirstEvent()
            : (window.fnPartnerEvent_ShowInfiniteScroll = (e, t) => {
                this.setState({ bShowModal: !0, appid: e, announcementGID: t });
              });
        }
        LoadAppAndFirstEvent() {
          var e;
          return (0, I.mG)(this, void 0, void 0, function* () {
            const t = (0, E.kQ)(
              "eventinfinitescrolllanding",
              "application_config",
            );
            let n;
            t && "string" == typeof t && (n = t);
            const a = window.location.href.startsWith(
                E.De.COMMUNITY_BASE_URL + "groups",
              ),
              o = a
                ? yield B.sV.LoadOGGClanInfoForGroupVanity(
                    this.props.match.params.appid_or_vanity_str,
                  )
                : yield B.sV.LoadOGGClanInfoForIdentifier(
                    this.props.match.params.appid_or_vanity_str,
                  );
            if ((console.log("output: ", (0, L.ZN)(o), a), o))
              if (o.partner_events_enabled) {
                const t = yield m.j1.LoadAdjacentPartnerEventsByAnnouncement(
                  n,
                  o.clanSteamID,
                  o.appid,
                  3,
                  3,
                );
                this.setState({
                  bLoadedLandingState: !1,
                  bShowModal: !0,
                  appid: o.appid,
                  clanSteamID: o.clanSteamID,
                  announcementGID:
                    null === (e = null == t ? void 0 : t[0]) || void 0 === e
                      ? void 0
                      : e.AnnouncementGID,
                });
              } else this.setState({ bLoadedLandingState: !1 });
            else
              console.error(
                "EventInfiniteScrollLanding: failed to load clan info for " +
                  this.props.match.params.appid_or_vanity_str,
              ),
                this.setState({ bLoadedLandingState: !1 });
          });
        }
        HideModal() {
          this.props.bPreventDismiss || this.setState({ bShowModal: !1 });
        }
        render() {
          const { bPreventDismiss: e } = this.props;
          return this.state.bShowModal
            ? o.createElement(_.x, {
                appid: this.state.appid,
                announcementGID: this.state.announcementGID,
                clanSteamID: this.state.clanSteamID,
                closeModal: this.HideModal,
                partnerEventStore: m.j1,
                trackingLocation: this.props.trackingLocation,
                showAppHeader: !0,
                bPrimaryPageFeature: e,
              })
            : this.state.bLoadedLandingState
              ? o.createElement(f.V, { string: (0, w.Xx)("#Loading") })
              : o.createElement("div", null);
        }
      };
      (0, I.gn)([D.ak], g.prototype, "HideModal", null),
        (g = (0, I.gn)([S.Pi], g));
      var b = n(82493),
        G = n(91618),
        C = n(3783),
        A = n(13049),
        M = n(32144),
        P = n(62613),
        k = n(92242);
      class y extends o.Component {
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
          const t = (0, A.b)("EventWebRowEmbed");
          this.ValidateStoreDefault(t) &&
            ((this.state.bPreLoaded = t.bPreLoaded),
            (this.state.announcementGIDList = t.announcementGIDList),
            (this.state.last_update_event = t.last_update_event),
            (this.state.events = []),
            this.state.announcementGIDList.forEach((e) => {
              const t = m.j1.GetClanEventFromAnnouncementGID(e);
              t && this.state.events.push(t);
            }));
        }
        componentDidMount() {
          return (0, I.mG)(this, void 0, void 0, function* () {
            const {
              appid: e,
              event_customization: t,
              partnerEventStore: n,
              trackingLocation: a,
            } = this.props;
            if (!this.state.bPreLoaded) {
              const o = yield n.LoadAdjacentPartnerEvents(
                null,
                null,
                e,
                0,
                2,
                t,
              );
              if ((this.setState({ events: o }), a && o && o.length > 0)) {
                const e = d.cb.Get().GetTracker();
                this.state.events
                  .filter((e) => e.BIsPartnerEvent())
                  .forEach((t) =>
                    e.MarkEventShown(t.GID, t.clanSteamID.GetAccountID(), a),
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
          const n = d.cb.Get().GetTracker();
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
          const o = d.cb.Get().GetTracker();
          e && o.MarkEventRead(e, n, a) && o.Flush();
        }
        CloseModal() {
          this.setState({ bShowModal: !1, modalInitialEvent: null });
        }
        BHasLastUpdateEvent() {
          var e;
          return Boolean(
            null === (e = this.state.last_update_event) || void 0 === e
              ? void 0
              : e.rtime,
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
          var e, t, n;
          const a = this.state.events;
          if (!a)
            return o.createElement(
              "div",
              { className: v().FlexCenter },
              o.createElement(f.V, { size: "medium", position: "center" }),
            );
          const s = window.screen.width <= 500 ? 1 : 2,
            r = Boolean(null == a ? void 0 : a.length),
            i = this.BHasLastUpdateEvent(),
            l = this.BShouldShowLastUpdateEvent()
              ? this.state.last_update_event.announcement_gid
              : void 0,
            { strClassName: c } = this.props;
          return o.createElement(
            b.Ks,
            { className: c },
            this.state.bShowModal &&
              o.createElement(
                U,
                Object.assign({}, this.props, {
                  announcementGID:
                    this.state.announcementGID ||
                    (null === (e = this.state.modalInitialEvent) || void 0 === e
                      ? void 0
                      : e.AnnouncementGID),
                  eventModel: this.state.modalInitialEvent,
                  closeModal: this.CloseModal,
                }),
              ),
            r &&
              o.createElement(
                "div",
                null,
                o.createElement(
                  "h2",
                  null,
                  (0, w.Xx)("#EventBrowse_RecentEvents"),
                ),
                !(null === (t = this.context) || void 0 === t
                  ? void 0
                  : t.IN_GAMEPADUI) &&
                  o.createElement(
                    "div",
                    { className: k.SectionButtonCtn },
                    this.props.bViewAllShowInfiniteScroll
                      ? o.createElement(
                          b.Ks,
                          {
                            className: k.SectionButton,
                            onClick: () => this.ShowModal(a[0]),
                          },
                          (0, w.Xx)("#EventBrowse_MoreEventsBtn"),
                        )
                      : o.createElement(
                          p.JW,
                          {
                            eventModel: a[0],
                            route: p.Ue.k_eViewWebSiteHub,
                            className: k.SectionButton,
                          },
                          (0, w.Xx)("#EventBrowse_MoreEventsBtn"),
                        ),
                  ),
                o.createElement(
                  "div",
                  { className: k.EventsSummariesCtn },
                  a.slice(0, s).map((e) => {
                    const t =
                      1 === a.length && window.screen.width > 500 ? M.KE : M.T4;
                    return o.createElement(t, {
                      key: e.GID,
                      event: e,
                      onClick: (t) => {
                        this.ShowModal(e),
                          t.stopPropagation(),
                          t.preventDefault();
                      },
                    });
                  }),
                ),
              ),
            Boolean(i && l) &&
              o.createElement(W, {
                nUpdateTime: this.state.last_update_event.rtime,
                announcementGID: l,
                onClick: this.ShowLatestUpdateModal,
              }),
            Boolean(
              i &&
                !l &&
                !(null === (n = this.context) || void 0 === n
                  ? void 0
                  : n.IN_GAMEPADUI),
            ) &&
              o.createElement(T, {
                nUpdateTime: this.state.last_update_event.rtime,
                onClick: this.ShowLatestUpdateModal,
              }),
          );
        }
      }
      function U(e) {
        const {
            appid: t,
            partnerEventStore: n,
            trackingLocation: a,
            announcementGID: s,
            eventModel: r,
            closeModal: i,
          } = e,
          l = (0, E.id)();
        return o.createElement(_.x, {
          className: l ? void 0 : k.StoreHeaderAdjust,
          eventClassName: l ? k.GamePadUIWidthAdjust : void 0,
          appid: t,
          trackingLocation: a,
          announcementGID: s,
          partnerEventStore: n,
          eventModel: r,
          closeModal: i,
        });
      }
      function T(e) {
        return o.createElement(
          "div",
          { className: k.LatestUpdateButtonCtn },
          o.createElement(
            "div",
            { className: k.LatestUpdateIcon },
            o.createElement(P.BNo, null),
          ),
          o.createElement(
            b.Ks,
            { className: k.LatestUpdateButton, onClick: e.onClick },
            (0, w.Xx)(
              "#EventBrowse_LatestUpdateTime_Button",
              (0, w.m9)(e.nUpdateTime),
            ),
          ),
        );
      }
      function W(e) {
        const { nUpdateTime: t, announcementGID: n, onClick: a } = e,
          s = n ? m.j1.GetClanEventFromAnnouncementGID(n) : null,
          r = (e) => {
            null == a || a(), e.stopPropagation(), e.preventDefault();
          };
        return o.createElement(
          "div",
          null,
          o.createElement(
            "h2",
            null,
            (0, w.Xx)("#EventBrowse_LastUpdateDate", (0, w.m9)(t)),
          ),
          o.createElement(
            "div",
            { className: k.SectionButtonCtn },
            o.createElement(
              "div",
              { className: k.SectionButton, onClick: r },
              (0, w.Xx)("#EventBrowse_ViewLatestUpdate"),
            ),
          ),
          Boolean(s) &&
            o.createElement(
              G.s,
              {
                className: k.EventsSummariesCtn,
                "flow-children": "column",
                navEntryPreferPosition: C.c4.PREFERRED_CHILD,
              },
              o.createElement(M.KE, { event: s, onClick: r }),
            ),
        );
      }
      (y.contextType = E.E_),
        (0, I.gn)([D.ak], y.prototype, "ShowModal", null),
        (0, I.gn)([D.ak], y.prototype, "ShowLatestUpdateModal", null),
        (0, I.gn)([D.ak], y.prototype, "CloseModal", null);
      var F = n(74257),
        x = n(64936);
      class N extends o.Component {
        render() {
          const { appid: e } = this.props;
          let t = x.JW.GetTimeNowWithOverrideAsDate(),
            n = new Date(t.setUTCHours(0, 0, 0, 0) - 15552e6),
            a = Math.floor(n.getTime() / 1e3);
          return o.createElement(
            "div",
            {
              className:
                "detailBox altFooter greenlight_home_box section announcements_row",
            },
            o.createElement(y, {
              appid: e,
              partnerEventStore: F.wk,
              event_customization: {
                require_tags: ["workshop"],
                rtime_oldestevent: a,
              },
              strClassName: k.Container,
              trackingLocation: 6,
              bViewAllShowInfiniteScroll: !0,
            }),
          );
        }
      }
      function j(e) {
        const [t, n] = o.useState(!0);
        return (
          o.useEffect(() => {
            c.Q8.Init(new l.J(E.De.WEBAPI_BASE_URL)),
              m.j1.Init(),
              Promise.all([d.cb.InitGlobal()]).then(() => n(!1));
          }, []),
          t
            ? null
            : o.createElement(
                p.uX.Provider,
                { value: { bCanUseLink: !0 } },
                o.createElement(
                  i.rs,
                  null,
                  o.createElement(i.AW, {
                    exact: !0,
                    path: a.W3.ViewEventDetails(
                      ":appid_or_vanity_str",
                      ":oldAnnouncementGID(\\d+)",
                    ),
                    render: (e) => o.createElement(r, Object.assign({}, e)),
                  }),
                  o.createElement(i.AW, {
                    exact: !0,
                    path: a.W3.Listing(":appid_or_vanity_str"),
                    render: (e) =>
                      o.createElement(
                        g,
                        Object.assign(
                          {
                            key:
                              "InfScroll_NoDismissApp_" + e.match.params.appid,
                          },
                          e,
                          { bPreventDismiss: !0, trackingLocation: 6 },
                        ),
                      ),
                  }),
                  o.createElement(i.AW, {
                    exact: !0,
                    path: a.W3.WorkshopHub(":appid(\\d+)"),
                    render: (e) =>
                      o.createElement(
                        N,
                        Object.assign({}, e, {
                          appid: +e.match.params.appid,
                          key: "Workshop" + e.match.params.appid,
                        }),
                      ),
                  }),
                  o.createElement(i.AW, {
                    path: a.W3.AppHub(":appid"),
                    render: (e) =>
                      o.createElement(
                        g,
                        Object.assign({}, e, {
                          key: "InfScroll_App_" + e.match.params.appid,
                          trackingLocation: 6,
                        }),
                      ),
                  }),
                  o.createElement(i.AW, {
                    path: a.W3.GroupHub(":group_vanity"),
                    render: (e) =>
                      o.createElement(
                        g,
                        Object.assign({}, e, {
                          key: "InfScroll_App_" + e.match.params.group_vanity,
                          trackingLocation: 6,
                        }),
                      ),
                  }),
                  o.createElement(i.AW, { component: h.R }),
                ),
              )
        );
      }
    },
  },
]);
