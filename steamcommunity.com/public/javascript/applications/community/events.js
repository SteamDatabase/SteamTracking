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
      n.r(e), n.d(e, { default: () => F });
      var a = n(37403),
        o = n(43527),
        s = n(90626),
        i = n(6503);
      const r = (t) =>
        s.createElement(i.Io, {
          ...t,
          key: t.match.params.oldAnnouncementGID,
          bClearDirty: !0,
          bPreview: !1,
          bPreventRedirect: !0,
        });
      var l = n(92757),
        c = n(96059),
        d = n(51006),
        p = n(60746),
        m = n(91254),
        u = n(3919),
        h = (n(64641), n(97058)),
        v = n(78327),
        E = n(34629),
        _ = n(75844),
        w = n(73745),
        S = n(8107),
        I = n(22797),
        D = n(4796),
        L = n(61859),
        b = n(14947);
      let g = class extends s.Component {
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
          const e = (0, v.Tc)(
            "eventinfinitescrolllanding",
            "application_config",
          );
          let n;
          e && "string" == typeof e && (n = e);
          const a = window.location.href.startsWith(
              v.TS.COMMUNITY_BASE_URL + "groups",
            ),
            o = a
              ? await D.ac.LoadOGGClanInfoForGroupVanity(
                  this.props.match.params.appid_or_vanity_str,
                )
              : await D.ac.LoadOGGClanInfoForIdentifier(
                  this.props.match.params.appid_or_vanity_str,
                );
          if ((console.log("output: ", (0, b.HO)(o), a), o))
            if (o.partner_events_enabled) {
              const e = await m.O3.LoadAdjacentPartnerEventsByAnnouncement(
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
            ? s.createElement(S.N, {
                appid: this.state.appid,
                announcementGID: this.state.announcementGID,
                clanSteamID: this.state.clanSteamID,
                closeModal: this.HideModal,
                partnerEventStore: m.O3,
                trackingLocation: this.props.trackingLocation,
                showAppHeader: !0,
                bPrimaryPageFeature: t,
              })
            : this.state.bLoadedLandingState
              ? s.createElement(I.t, { string: (0, L.we)("#Loading") })
              : s.createElement("div", null);
        }
      };
      (0, E.Cg)([w.oI], g.prototype, "HideModal", null),
        (g = (0, E.Cg)([_.PA], g));
      var f = n(45699),
        C = n(76217),
        G = n(23310),
        M = n(55563),
        k = n(35685),
        y = n(12155),
        P = n(34418);
      class B extends s.Component {
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
                const e = m.O3.GetClanEventFromAnnouncementGID(t);
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
              const t = p.KN.Get().GetTracker();
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
          const n = p.KN.Get().GetTracker();
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
          const o = p.KN.Get().GetTracker();
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
            o = window.screen.width <= 500 ? 1 : 2,
            i = Boolean(null == a ? void 0 : a.length),
            r = this.BHasLastUpdateEvent(),
            l = this.BShouldShowLastUpdateEvent()
              ? this.state.last_update_event.announcement_gid
              : void 0,
            { strClassName: c } = this.props;
          return s.createElement(
            f.ml,
            { className: c },
            this.state.bShowModal &&
              s.createElement(A, {
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
              s.createElement(
                "div",
                null,
                s.createElement(
                  "h2",
                  null,
                  (0, L.we)("#EventBrowse_RecentEvents"),
                ),
                !(null === (e = this.context) || void 0 === e
                  ? void 0
                  : e.IN_GAMEPADUI) &&
                  s.createElement(
                    "div",
                    { className: P.SectionButtonCtn },
                    this.props.bViewAllShowInfiniteScroll
                      ? s.createElement(
                          f.ml,
                          {
                            className: P.SectionButton,
                            onClick: () => this.ShowModal(a[0]),
                          },
                          (0, L.we)("#EventBrowse_MoreEventsBtn"),
                        )
                      : s.createElement(
                          u.tj,
                          {
                            eventModel: a[0],
                            route: u.PH.k_eViewWebSiteHub,
                            className: P.SectionButton,
                          },
                          (0, L.we)("#EventBrowse_MoreEventsBtn"),
                        ),
                  ),
                s.createElement(
                  "div",
                  { className: P.EventsSummariesCtn },
                  a.slice(0, o).map((t) => {
                    const e =
                      1 === a.length && window.screen.width > 500 ? k.kH : k.uY;
                    return s.createElement(e, {
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
              s.createElement(H, {
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
              s.createElement(U, {
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
            announcementGID: o,
            eventModel: i,
            closeModal: r,
          } = t,
          l = (0, v.Qn)();
        return s.createElement(S.N, {
          className: l ? void 0 : P.StoreHeaderAdjust,
          eventClassName: l ? P.GamePadUIWidthAdjust : void 0,
          appid: e,
          trackingLocation: a,
          announcementGID: o,
          partnerEventStore: n,
          eventModel: i,
          closeModal: r,
        });
      }
      function U(t) {
        return s.createElement(
          "div",
          { className: P.LatestUpdateButtonCtn },
          s.createElement(
            "div",
            { className: P.LatestUpdateIcon },
            s.createElement(y.UTF, { role: "presentation" }),
          ),
          s.createElement(
            f.ml,
            { className: P.LatestUpdateButton, onClick: t.onClick },
            (0, L.we)(
              "#EventBrowse_LatestUpdateTime_Button",
              (0, L._l)(t.nUpdateTime),
            ),
          ),
        );
      }
      function H(t) {
        const { nUpdateTime: e, announcementGID: n, onClick: a } = t,
          o = n ? m.O3.GetClanEventFromAnnouncementGID(n) : null,
          i = (t) => {
            null == a || a(), t.stopPropagation(), t.preventDefault();
          },
          r = window.screen.width > 500 ? k.kH : k.uY;
        return s.createElement(
          "div",
          null,
          s.createElement(
            "h2",
            null,
            (0, L.we)("#EventBrowse_LastUpdateDate", (0, L._l)(e)),
          ),
          s.createElement(
            "div",
            { className: P.SectionButtonCtn },
            s.createElement(
              "div",
              { className: P.SectionButton, onClick: i },
              (0, L.we)("#EventBrowse_ViewLatestUpdate"),
            ),
          ),
          Boolean(o) &&
            s.createElement(
              C.Z,
              {
                className: P.EventsSummariesCtn,
                "flow-children": "column",
                navEntryPreferPosition: G.iU.PREFERRED_CHILD,
              },
              s.createElement(r, { event: o, onClick: i }),
            ),
        );
      }
      (B.contextType = v.QO),
        (0, E.Cg)([w.oI], B.prototype, "ShowModal", null),
        (0, E.Cg)([w.oI], B.prototype, "ShowLatestUpdateModal", null),
        (0, E.Cg)([w.oI], B.prototype, "CloseModal", null);
      var N = n(25918),
        T = n(44165);
      class R extends s.Component {
        render() {
          const { appid: t } = this.props;
          let e = T.HD.GetTimeNowWithOverrideAsDate(),
            n = new Date(e.setUTCHours(0, 0, 0, 0) - 15552e6),
            o = Math.floor(n.getTime() / 1e3);
          return s.createElement(
            "div",
            {
              className:
                "detailBox altFooter greenlight_home_box section announcements_row",
            },
            s.createElement(B, {
              appid: t,
              partnerEventStore: N.mh,
              event_customization: {
                require_tags: ["workshop"],
                rtime_oldestevent: o,
              },
              strClassName: P.Container,
              trackingLocation:
                a.Tc.k_EPartnerEventDisplayLocation_CommunityHub,
              bViewAllShowInfiniteScroll: !0,
            }),
          );
        }
      }
      function F(t) {
        const [e, n] = s.useState(!0);
        return (
          s.useEffect(() => {
            d.Vw.Init(new c.D(v.TS.WEBAPI_BASE_URL)),
              m.O3.Init(),
              Promise.all([p.KN.InitGlobal()]).then(() => n(!1));
          }, []),
          e
            ? null
            : s.createElement(
                u.IQ.Provider,
                { value: { bCanUseLink: !0 } },
                s.createElement(
                  l.dO,
                  null,
                  s.createElement(l.qh, {
                    exact: !0,
                    path: o.g5.ViewEventDetails(
                      ":appid_or_vanity_str",
                      ":oldAnnouncementGID(\\d+)",
                    ),
                    render: (t) => s.createElement(r, { ...t }),
                  }),
                  s.createElement(l.qh, {
                    exact: !0,
                    path: o.g5.Listing(":appid_or_vanity_str"),
                    render: (t) =>
                      s.createElement(g, {
                        key: "InfScroll_NoDismissApp_" + t.match.params.appid,
                        ...t,
                        bPreventDismiss: !0,
                        trackingLocation:
                          a.Tc.k_EPartnerEventDisplayLocation_CommunityHub,
                      }),
                  }),
                  s.createElement(l.qh, {
                    exact: !0,
                    path: o.g5.WorkshopHub(":appid(\\d+)"),
                    render: (t) =>
                      s.createElement(R, {
                        ...t,
                        appid: +t.match.params.appid,
                        key: "Workshop" + t.match.params.appid,
                      }),
                  }),
                  s.createElement(l.qh, {
                    path: o.g5.AppHub(":appid"),
                    render: (t) =>
                      s.createElement(g, {
                        ...t,
                        key: "InfScroll_App_" + t.match.params.appid,
                        trackingLocation:
                          a.Tc.k_EPartnerEventDisplayLocation_CommunityHub,
                      }),
                  }),
                  s.createElement(l.qh, {
                    path: o.g5.GroupHub(":group_vanity"),
                    render: (t) =>
                      s.createElement(g, {
                        ...t,
                        key: "InfScroll_App_" + t.match.params.group_vanity,
                        trackingLocation:
                          a.Tc.k_EPartnerEventDisplayLocation_CommunityHub,
                      }),
                  }),
                  s.createElement(l.qh, { component: h.a }),
                ),
              )
        );
      }
    },
  },
]);
