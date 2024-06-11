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
    56190: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => T });
      var a = n(760),
        o = n(47427),
        s = n(73941);
      const i = (e) =>
        o.createElement(
          s.R0,
          Object.assign({}, e, {
            key: e.match.params.oldAnnouncementGID,
            bClearDirty: !0,
            bPreview: !1,
            bPreventRedirect: !0,
          }),
        );
      var r = n(8285),
        l = n(77581),
        c = n(45944),
        d = n(42855),
        p = n(82071),
        m = n(81913),
        u = n(7765),
        h = n.n(u),
        v = n(69406),
        E = n(37563),
        _ = n(85556),
        S = n(27605),
        I = n(20417),
        L = n(27784),
        w = n(46882),
        b = n(93243),
        D = n(31846),
        g = n(54842);
      let G = class extends o.Component {
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
          return (0, _.mG)(this, void 0, void 0, function* () {
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
                ? yield b.sV.LoadOGGClanInfoForGroupVanity(
                    this.props.match.params.appid_or_vanity_str,
                  )
                : yield b.sV.LoadOGGClanInfoForIdentifier(
                    this.props.match.params.appid_or_vanity_str,
                  );
            if ((console.log("output: ", (0, g.ZN)(o), a), o))
              if (o.partner_events_enabled) {
                const t = yield p.j1.LoadAdjacentPartnerEventsByAnnouncement(
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
            ? o.createElement(L.x, {
                appid: this.state.appid,
                announcementGID: this.state.announcementGID,
                clanSteamID: this.state.clanSteamID,
                closeModal: this.HideModal,
                partnerEventStore: p.j1,
                trackingLocation: this.props.trackingLocation,
                showAppHeader: !0,
                bPrimaryPageFeature: e,
              })
            : this.state.bLoadedLandingState
              ? o.createElement(w.V, { string: (0, D.Xx)("#Loading") })
              : o.createElement("div", null);
        }
      };
      (0, _.gn)([I.ak], G.prototype, "HideModal", null),
        (G = (0, _.gn)([S.Pi], G));
      var f = n(82493),
        k = n(91618),
        C = n(3783),
        M = n(13049),
        A = n(32144),
        B = n(62613),
        y = n(92242);
      class U extends o.Component {
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
          const t = (0, M.b)("EventWebRowEmbed");
          this.ValidateStoreDefault(t) &&
            ((this.state.bPreLoaded = t.bPreLoaded),
            (this.state.announcementGIDList = t.announcementGIDList),
            (this.state.last_update_event = t.last_update_event),
            (this.state.events = []),
            this.state.announcementGIDList.forEach((e) => {
              const t = p.j1.GetClanEventFromAnnouncementGID(e);
              t && this.state.events.push(t);
            }));
        }
        componentDidMount() {
          return (0, _.mG)(this, void 0, void 0, function* () {
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
              { className: h().FlexCenter },
              o.createElement(w.V, { size: "medium", position: "center" }),
            );
          const s = window.screen.width <= 500 ? 1 : 2,
            i = Boolean(null == a ? void 0 : a.length),
            r = this.BHasLastUpdateEvent(),
            l = this.BShouldShowLastUpdateEvent()
              ? this.state.last_update_event.announcement_gid
              : void 0,
            { strClassName: c } = this.props;
          return o.createElement(
            f.Ks,
            { className: c },
            this.state.bShowModal &&
              o.createElement(
                P,
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
            i &&
              o.createElement(
                "div",
                null,
                o.createElement(
                  "h2",
                  null,
                  (0, D.Xx)("#EventBrowse_RecentEvents"),
                ),
                !(null === (t = this.context) || void 0 === t
                  ? void 0
                  : t.IN_GAMEPADUI) &&
                  o.createElement(
                    "div",
                    { className: y.SectionButtonCtn },
                    this.props.bViewAllShowInfiniteScroll
                      ? o.createElement(
                          f.Ks,
                          {
                            className: y.SectionButton,
                            onClick: () => this.ShowModal(a[0]),
                          },
                          (0, D.Xx)("#EventBrowse_MoreEventsBtn"),
                        )
                      : o.createElement(
                          m.JW,
                          {
                            eventModel: a[0],
                            route: m.Ue.k_eViewWebSiteHub,
                            className: y.SectionButton,
                          },
                          (0, D.Xx)("#EventBrowse_MoreEventsBtn"),
                        ),
                  ),
                o.createElement(
                  "div",
                  { className: y.EventsSummariesCtn },
                  a.slice(0, s).map((e) => {
                    const t =
                      1 === a.length && window.screen.width > 500 ? A.KE : A.T4;
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
            Boolean(r && l) &&
              o.createElement(x, {
                nUpdateTime: this.state.last_update_event.rtime,
                announcementGID: l,
                onClick: this.ShowLatestUpdateModal,
              }),
            Boolean(
              r &&
                !l &&
                !(null === (n = this.context) || void 0 === n
                  ? void 0
                  : n.IN_GAMEPADUI),
            ) &&
              o.createElement(N, {
                nUpdateTime: this.state.last_update_event.rtime,
                onClick: this.ShowLatestUpdateModal,
              }),
          );
        }
      }
      function P(e) {
        const {
            appid: t,
            partnerEventStore: n,
            trackingLocation: a,
            announcementGID: s,
            eventModel: i,
            closeModal: r,
          } = e,
          l = (0, E.id)();
        return o.createElement(L.x, {
          className: l ? void 0 : y.StoreHeaderAdjust,
          eventClassName: l ? y.GamePadUIWidthAdjust : void 0,
          appid: t,
          trackingLocation: a,
          announcementGID: s,
          partnerEventStore: n,
          eventModel: i,
          closeModal: r,
        });
      }
      function N(e) {
        return o.createElement(
          "div",
          { className: y.LatestUpdateButtonCtn },
          o.createElement(
            "div",
            { className: y.LatestUpdateIcon },
            o.createElement(B.BNo, null),
          ),
          o.createElement(
            f.Ks,
            { className: y.LatestUpdateButton, onClick: e.onClick },
            (0, D.Xx)(
              "#EventBrowse_LatestUpdateTime_Button",
              (0, D.m9)(e.nUpdateTime),
            ),
          ),
        );
      }
      function x(e) {
        const { nUpdateTime: t, announcementGID: n, onClick: a } = e,
          s = n ? p.j1.GetClanEventFromAnnouncementGID(n) : null,
          i = (e) => {
            null == a || a(), e.stopPropagation(), e.preventDefault();
          };
        return o.createElement(
          "div",
          null,
          o.createElement(
            "h2",
            null,
            (0, D.Xx)("#EventBrowse_LastUpdateDate", (0, D.m9)(t)),
          ),
          o.createElement(
            "div",
            { className: y.SectionButtonCtn },
            o.createElement(
              "div",
              { className: y.SectionButton, onClick: i },
              (0, D.Xx)("#EventBrowse_ViewLatestUpdate"),
            ),
          ),
          Boolean(s) &&
            o.createElement(
              k.s,
              {
                className: y.EventsSummariesCtn,
                "flow-children": "column",
                navEntryPreferPosition: C.c4.PREFERRED_CHILD,
              },
              o.createElement(A.KE, { event: s, onClick: i }),
            ),
        );
      }
      (U.contextType = E.E_),
        (0, _.gn)([I.ak], U.prototype, "ShowModal", null),
        (0, _.gn)([I.ak], U.prototype, "ShowLatestUpdateModal", null),
        (0, _.gn)([I.ak], U.prototype, "CloseModal", null);
      var j = n(74257),
        W = n(64936);
      class H extends o.Component {
        render() {
          const { appid: e } = this.props;
          let t = W.JW.GetTimeNowWithOverrideAsDate(),
            n = new Date(t.setUTCHours(0, 0, 0, 0) - 15552e6),
            a = Math.floor(n.getTime() / 1e3);
          return o.createElement(
            "div",
            {
              className:
                "detailBox altFooter greenlight_home_box section announcements_row",
            },
            o.createElement(U, {
              appid: e,
              partnerEventStore: j.wk,
              event_customization: {
                require_tags: ["workshop"],
                rtime_oldestevent: a,
              },
              strClassName: y.Container,
              trackingLocation: 6,
              bViewAllShowInfiniteScroll: !0,
            }),
          );
        }
      }
      function T(e) {
        const [t, n] = o.useState(!0);
        return (
          o.useEffect(() => {
            c.Q8.Init(new l.J(E.De.WEBAPI_BASE_URL)),
              p.j1.Init(),
              Promise.all([d.cb.InitGlobal()]).then(() => n(!1));
          }, []),
          t
            ? null
            : o.createElement(
                m.uX.Provider,
                { value: { bCanUseLink: !0 } },
                o.createElement(
                  r.rs,
                  null,
                  o.createElement(r.AW, {
                    exact: !0,
                    path: a.W3.ViewEventDetails(
                      ":appid_or_vanity_str",
                      ":oldAnnouncementGID(\\d+)",
                    ),
                    render: (e) => o.createElement(i, Object.assign({}, e)),
                  }),
                  o.createElement(r.AW, {
                    exact: !0,
                    path: a.W3.Listing(":appid_or_vanity_str"),
                    render: (e) =>
                      o.createElement(
                        G,
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
                  o.createElement(r.AW, {
                    exact: !0,
                    path: a.W3.WorkshopHub(":appid(\\d+)"),
                    render: (e) =>
                      o.createElement(
                        H,
                        Object.assign({}, e, {
                          appid: +e.match.params.appid,
                          key: "Workshop" + e.match.params.appid,
                        }),
                      ),
                  }),
                  o.createElement(r.AW, {
                    path: a.W3.AppHub(":appid"),
                    render: (e) =>
                      o.createElement(
                        G,
                        Object.assign({}, e, {
                          key: "InfScroll_App_" + e.match.params.appid,
                          trackingLocation: 6,
                        }),
                      ),
                  }),
                  o.createElement(r.AW, {
                    path: a.W3.GroupHub(":group_vanity"),
                    render: (e) =>
                      o.createElement(
                        G,
                        Object.assign({}, e, {
                          key: "InfScroll_App_" + e.match.params.group_vanity,
                          trackingLocation: 6,
                        }),
                      ),
                  }),
                  o.createElement(r.AW, { component: v.R }),
                ),
              )
        );
      }
    },
  },
]);
