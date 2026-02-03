/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [4268],
  {
    34418: (t) => {
      t.exports = {
        "duration-app-launch": "800ms",
        Container: "_2Jd3MGaOu0C9Ydswf8Q4Tn",
        StoreHeaderAdjust: "_3YyCpH32HRhZtt4BOM5wM5",
        SectionButtonCtn: "_1HP0yfVUrZ-TPBYhiQkye2",
        SectionButton: "_3n8swQFM3I_ARVM_5bPhAs",
        EventsSummariesCtn: "_1snIw0RvJduvDtqpmwtKJ9",
        LatestUpdateButtonCtn: "_2vEwZPNBe2qcTuxZf5cpiD",
        LatestUpdateIcon: "mq3ROvmcn5_HdCKG6JXDa",
        LatestUpdateButton: "_1TRFtE8IfXpDQ_loHnB_bU",
      };
    },
    16053: (t, e, n) => {
      "use strict";
      n.r(e), n.d(e, { default: () => R });
      var a = n(43527),
        o = n(90626),
        s = n(6503);
      const i = (t) =>
        o.createElement(s.Io, {
          ...t,
          key: t.match.params.oldAnnouncementGID,
          bClearDirty: !0,
          bPreview: !1,
          bPreventRedirect: !0,
        });
      var r = n(92757),
        l = n(96059),
        c = n(51006),
        d = n(60746),
        p = n(91254),
        m = n(3919),
        h = (n(64641), n(97058)),
        u = n(78327),
        v = n(34629),
        E = n(75844),
        _ = n(73745),
        w = n(8107),
        S = n(22797),
        I = n(4796),
        D = n(61859),
        L = n(14947);
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
            : (window.fnPartnerEvent_ShowInfiniteScroll = (t, e) => {
                this.setState({ bShowModal: !0, appid: t, announcementGID: e });
              });
        }
        async LoadAppAndFirstEvent() {
          var t;
          const e = (0, u.Tc)(
            "eventinfinitescrolllanding",
            "application_config",
          );
          let n;
          e && "string" == typeof e && (n = e);
          const a = window.location.href.startsWith(
              u.TS.COMMUNITY_BASE_URL + "groups",
            ),
            o = a
              ? await I.ac.LoadOGGClanInfoForGroupVanity(
                  this.props.match.params.appid_or_vanity_str,
                )
              : await I.ac.LoadOGGClanInfoForIdentifier(
                  this.props.match.params.appid_or_vanity_str,
                );
          if ((console.log("output: ", (0, L.HO)(o), a), o))
            if (o.partner_events_enabled) {
              const e = await p.O3.LoadAdjacentPartnerEventsByAnnouncement(
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
                  null === (t = null == e ? void 0 : e[0]) || void 0 === t
                    ? void 0
                    : t.AnnouncementGID,
              });
            } else this.setState({ bLoadedLandingState: !1 });
          else
            console.error(
              "EventInfiniteScrollLanding: failed to load clan info for " +
                this.props.match.params.appid_or_vanity_str,
            ),
              this.setState({ bLoadedLandingState: !1 });
        }
        HideModal() {
          this.props.bPreventDismiss || this.setState({ bShowModal: !1 });
        }
        render() {
          const { bPreventDismiss: t } = this.props;
          return this.state.bShowModal
            ? o.createElement(w.N, {
                appid: this.state.appid,
                announcementGID: this.state.announcementGID,
                clanSteamID: this.state.clanSteamID,
                closeModal: this.HideModal,
                partnerEventStore: p.O3,
                trackingLocation: this.props.trackingLocation,
                showAppHeader: !0,
                bPrimaryPageFeature: t,
              })
            : this.state.bLoadedLandingState
              ? o.createElement(S.t, { string: (0, D.we)("#Loading") })
              : o.createElement("div", null);
        }
      };
      (0, v.Cg)([_.oI], g.prototype, "HideModal", null),
        (g = (0, v.Cg)([E.PA], g));
      var f = n(45699),
        b = n(76217),
        G = n(23310),
        M = n(55563),
        C = n(35685),
        k = n(12155),
        B = n(34418);
      class P extends o.Component {
        constructor(t) {
          super(t),
            (this.state = {
              events: null,
              bShowModal: !1,
              modalInitialEvent: null,
              bPreLoaded: !1,
              announcementGIDList: [],
              last_update_event: null,
            });
          const e = (0, M.v)("EventWebRowEmbed");
          if (this.ValidateStoreDefault(e)) {
            (this.state.bPreLoaded = e.bPreLoaded),
              (this.state.announcementGIDList = e.announcementGIDList),
              (this.state.last_update_event = e.last_update_event),
              (this.state.events = []),
              this.state.announcementGIDList.forEach((t) => {
                const e = p.O3.GetClanEventFromAnnouncementGID(t);
                e && this.state.events.push(e);
              });
            const t = new URLSearchParams(window.location.search),
              n = null == t ? void 0 : t.get("emgid");
            if (n) {
              const t = this.state.events.find((t) => t.GID === n);
              t &&
                ((this.state.modalInitialEvent = t),
                (this.state.bShowModal = !0));
            }
          }
        }
        async componentDidMount() {
          const {
            appid: t,
            event_customization: e,
            partnerEventStore: n,
            trackingLocation: a,
          } = this.props;
          if (!this.state.bPreLoaded) {
            const o = await n.LoadAdjacentPartnerEvents(null, null, t, 0, 2, e);
            if ((this.setState({ events: o }), a && o && o.length > 0)) {
              const t = d.KN.Get().GetTracker();
              this.state.events
                .filter((t) => t.BIsPartnerEvent())
                .forEach((e) =>
                  t.MarkEventShown(e.GID, e.clanSteamID.GetAccountID(), a),
                ),
                t.Flush();
            }
          }
          window.fnPartnerEvent_ShowInfiniteScroll = (t, e) => {
            this.setState({
              bShowModal: !0,
              announcementGID: e,
              modalInitialEvent: void 0,
            });
          };
        }
        ValidateStoreDefault(t) {
          const e = t;
          return (
            !(!e || "object" != typeof e) &&
            void 0 !== e.bPreLoaded && "boolean" == typeof e.bPreLoaded &&
            Array.isArray(e.announcementGIDList)
          );
        }
        ShowModal(t) {
          const { trackingLocation: e } = this.props;
          this.setState({
            bShowModal: !0,
            modalInitialEvent: t,
            announcementGID: void 0,
          });
          const n = d.KN.Get().GetTracker();
          t &&
            t.BIsPartnerEvent() &&
            n.MarkEventRead(t.GID, t.clanSteamID.GetAccountID(), e) &&
            n.Flush();
        }
        ShowLatestUpdateModal() {
          const {
              event_gid: t,
              announcement_gid: e,
              clan_account_id: n,
            } = this.state.last_update_event,
            { trackingLocation: a } = this.props;
          this.setState({
            bShowModal: !0,
            modalInitialEvent: void 0,
            announcementGID: e,
          });
          const o = d.KN.Get().GetTracker();
          t && o.MarkEventRead(t, n, a) && o.Flush();
        }
        CloseModal() {
          this.setState({ bShowModal: !1, modalInitialEvent: null });
        }
        BHasLastUpdateEvent() {
          var t;
          return Boolean(
            null === (t = this.state.last_update_event) || void 0 === t
              ? void 0
              : t.rtime,
          );
        }
        BShouldShowLastUpdateEvent() {
          const { last_update_event: t, events: e } = this.state;
          return (
            !(
              !this.BHasLastUpdateEvent() ||
              !(null == t ? void 0 : t.announcement_gid)
            ) && !(null == e ? void 0 : e.length)
          );
        }
        render() {
          var t, e, n;
          const a = this.state.events,
            s = window.screen.width <= 500 ? 1 : 2,
            i = Boolean(null == a ? void 0 : a.length),
            r = this.BHasLastUpdateEvent(),
            l = this.BShouldShowLastUpdateEvent()
              ? this.state.last_update_event.announcement_gid
              : void 0,
            { strClassName: c } = this.props;
          return o.createElement(
            f.ml,
            { className: c },
            this.state.bShowModal &&
              o.createElement(A, {
                ...this.props,
                announcementGID:
                  this.state.announcementGID ||
                  (null === (t = this.state.modalInitialEvent) || void 0 === t
                    ? void 0
                    : t.AnnouncementGID),
                eventModel: this.state.modalInitialEvent,
                closeModal: this.CloseModal,
              }),
            i &&
              o.createElement(
                "div",
                null,
                o.createElement(
                  "h2",
                  null,
                  (0, D.we)("#EventBrowse_RecentEvents"),
                ),
                !(null === (e = this.context) || void 0 === e
                  ? void 0
                  : e.IN_GAMEPADUI) &&
                  o.createElement(
                    "div",
                    { className: B.SectionButtonCtn },
                    this.props.bViewAllShowInfiniteScroll
                      ? o.createElement(
                          f.ml,
                          {
                            className: B.SectionButton,
                            onClick: () => this.ShowModal(a[0]),
                          },
                          (0, D.we)("#EventBrowse_MoreEventsBtn"),
                        )
                      : o.createElement(
                          m.tj,
                          {
                            eventModel: a[0],
                            route: m.PH.k_eViewWebSiteHub,
                            className: B.SectionButton,
                          },
                          (0, D.we)("#EventBrowse_MoreEventsBtn"),
                        ),
                  ),
                o.createElement(
                  "div",
                  { className: B.EventsSummariesCtn },
                  a.slice(0, s).map((t) => {
                    const e =
                      1 === a.length && window.screen.width > 500 ? C.kH : C.uY;
                    return o.createElement(e, {
                      key: t.GID,
                      event: t,
                      onClick: (e) => {
                        this.ShowModal(t),
                          e.stopPropagation(),
                          e.preventDefault();
                      },
                    });
                  }),
                ),
              ),
            Boolean(r && l) &&
              o.createElement(U, {
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
              o.createElement(y, {
                nUpdateTime: this.state.last_update_event.rtime,
                onClick: this.ShowLatestUpdateModal,
              }),
          );
        }
      }
      function A(t) {
        const {
            appid: e,
            partnerEventStore: n,
            trackingLocation: a,
            announcementGID: s,
            eventModel: i,
            closeModal: r,
          } = t,
          l = (0, u.Qn)();
        return o.createElement(w.N, {
          className: l ? void 0 : B.StoreHeaderAdjust,
          eventClassName: l ? B.GamePadUIWidthAdjust : void 0,
          appid: e,
          trackingLocation: a,
          announcementGID: s,
          partnerEventStore: n,
          eventModel: i,
          closeModal: r,
        });
      }
      function y(t) {
        return o.createElement(
          "div",
          { className: B.LatestUpdateButtonCtn },
          o.createElement(
            "div",
            { className: B.LatestUpdateIcon },
            o.createElement(k.UTF, { role: "presentation" }),
          ),
          o.createElement(
            f.ml,
            { className: B.LatestUpdateButton, onClick: t.onClick },
            (0, D.we)(
              "#EventBrowse_LatestUpdateTime_Button",
              (0, D._l)(t.nUpdateTime),
            ),
          ),
        );
      }
      function U(t) {
        const { nUpdateTime: e, announcementGID: n, onClick: a } = t,
          s = n ? p.O3.GetClanEventFromAnnouncementGID(n) : null,
          i = (t) => {
            null == a || a(), t.stopPropagation(), t.preventDefault();
          },
          r = window.screen.width > 500 ? C.kH : C.uY;
        return o.createElement(
          "div",
          null,
          o.createElement(
            "h2",
            null,
            (0, D.we)("#EventBrowse_LastUpdateDate", (0, D._l)(e)),
          ),
          o.createElement(
            "div",
            { className: B.SectionButtonCtn },
            o.createElement(
              "div",
              { className: B.SectionButton, onClick: i },
              (0, D.we)("#EventBrowse_ViewLatestUpdate"),
            ),
          ),
          Boolean(s) &&
            o.createElement(
              b.Z,
              {
                className: B.EventsSummariesCtn,
                "flow-children": "column",
                navEntryPreferPosition: G.iU.PREFERRED_CHILD,
              },
              o.createElement(r, { event: s, onClick: i }),
            ),
        );
      }
      (P.contextType = u.QO),
        (0, v.Cg)([_.oI], P.prototype, "ShowModal", null),
        (0, v.Cg)([_.oI], P.prototype, "ShowLatestUpdateModal", null),
        (0, v.Cg)([_.oI], P.prototype, "CloseModal", null);
      var N = n(25918),
        H = n(44165);
      class T extends o.Component {
        render() {
          const { appid: t } = this.props;
          let e = H.HD.GetTimeNowWithOverrideAsDate(),
            n = new Date(e.setUTCHours(0, 0, 0, 0) - 15552e6),
            a = Math.floor(n.getTime() / 1e3);
          return o.createElement(
            "div",
            {
              className:
                "detailBox altFooter greenlight_home_box section announcements_row",
            },
            o.createElement(P, {
              appid: t,
              partnerEventStore: N.mh,
              event_customization: {
                require_tags: ["workshop"],
                rtime_oldestevent: a,
              },
              strClassName: B.Container,
              trackingLocation: 6,
              bViewAllShowInfiniteScroll: !0,
            }),
          );
        }
      }
      function R(t) {
        const [e, n] = o.useState(!0);
        return (
          o.useEffect(() => {
            c.Vw.Init(new l.D(u.TS.WEBAPI_BASE_URL)),
              p.O3.Init(),
              Promise.all([d.KN.InitGlobal()]).then(() => n(!1));
          }, []),
          e
            ? null
            : o.createElement(
                m.IQ.Provider,
                { value: { bCanUseLink: !0 } },
                o.createElement(
                  r.dO,
                  null,
                  o.createElement(r.qh, {
                    exact: !0,
                    path: a.g5.ViewEventDetails(
                      ":appid_or_vanity_str",
                      ":oldAnnouncementGID(\\d+)",
                    ),
                    render: (t) => o.createElement(i, { ...t }),
                  }),
                  o.createElement(r.qh, {
                    exact: !0,
                    path: a.g5.Listing(":appid_or_vanity_str"),
                    render: (t) =>
                      o.createElement(g, {
                        key: "InfScroll_NoDismissApp_" + t.match.params.appid,
                        ...t,
                        bPreventDismiss: !0,
                        trackingLocation: 6,
                      }),
                  }),
                  o.createElement(r.qh, {
                    exact: !0,
                    path: a.g5.WorkshopHub(":appid(\\d+)"),
                    render: (t) =>
                      o.createElement(T, {
                        ...t,
                        appid: +t.match.params.appid,
                        key: "Workshop" + t.match.params.appid,
                      }),
                  }),
                  o.createElement(r.qh, {
                    path: a.g5.AppHub(":appid"),
                    render: (t) =>
                      o.createElement(g, {
                        ...t,
                        key: "InfScroll_App_" + t.match.params.appid,
                        trackingLocation: 6,
                      }),
                  }),
                  o.createElement(r.qh, {
                    path: a.g5.GroupHub(":group_vanity"),
                    render: (t) =>
                      o.createElement(g, {
                        ...t,
                        key: "InfScroll_App_" + t.match.params.group_vanity,
                        trackingLocation: 6,
                      }),
                  }),
                  o.createElement(r.qh, { component: h.a }),
                ),
              )
        );
      }
    },
  },
]);
