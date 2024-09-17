/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [4268],
  {
    34418: (e) => {
      e.exports = {
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
    16053: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => R });
      var a = n(43527),
        o = n(90626),
        s = n(6503);
      const i = (e) =>
        o.createElement(s.Io, {
          ...e,
          key: e.match.params.oldAnnouncementGID,
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
        u = n(64641),
        h = n.n(u),
        v = n(97058),
        E = n(78327),
        _ = n(34629),
        S = n(75844),
        w = n(56093),
        I = n(8107),
        D = n(22797),
        L = n(4796),
        g = n(61859),
        b = n(14947);
      let f = class extends o.Component {
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
        async LoadAppAndFirstEvent() {
          var e;
          const t = (0, E.Tc)(
            "eventinfinitescrolllanding",
            "application_config",
          );
          let n;
          t && "string" == typeof t && (n = t);
          const a = window.location.href.startsWith(
              E.TS.COMMUNITY_BASE_URL + "groups",
            ),
            o = a
              ? await L.ac.LoadOGGClanInfoForGroupVanity(
                  this.props.match.params.appid_or_vanity_str,
                )
              : await L.ac.LoadOGGClanInfoForIdentifier(
                  this.props.match.params.appid_or_vanity_str,
                );
          if ((console.log("output: ", (0, b.HO)(o), a), o))
            if (o.partner_events_enabled) {
              const t = await p.O3.LoadAdjacentPartnerEventsByAnnouncement(
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
        }
        HideModal() {
          this.props.bPreventDismiss || this.setState({ bShowModal: !1 });
        }
        render() {
          const { bPreventDismiss: e } = this.props;
          return this.state.bShowModal
            ? o.createElement(I.N, {
                appid: this.state.appid,
                announcementGID: this.state.announcementGID,
                clanSteamID: this.state.clanSteamID,
                closeModal: this.HideModal,
                partnerEventStore: p.O3,
                trackingLocation: this.props.trackingLocation,
                showAppHeader: !0,
                bPrimaryPageFeature: e,
              })
            : this.state.bLoadedLandingState
              ? o.createElement(D.t, { string: (0, g.we)("#Loading") })
              : o.createElement("div", null);
        }
      };
      (0, _.Cg)([w.oI], f.prototype, "HideModal", null),
        (f = (0, _.Cg)([S.PA], f));
      var G = n(71513),
        M = n(32381),
        C = n(40094),
        k = n(55563),
        B = n(35685),
        A = n(12155),
        P = n(34418);
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
          const t = (0, k.v)("EventWebRowEmbed");
          this.ValidateStoreDefault(t) &&
            ((this.state.bPreLoaded = t.bPreLoaded),
            (this.state.announcementGIDList = t.announcementGIDList),
            (this.state.last_update_event = t.last_update_event),
            (this.state.events = []),
            this.state.announcementGIDList.forEach((e) => {
              const t = p.O3.GetClanEventFromAnnouncementGID(e);
              t && this.state.events.push(t);
            }));
        }
        async componentDidMount() {
          const {
            appid: e,
            event_customization: t,
            partnerEventStore: n,
            trackingLocation: a,
          } = this.props;
          if (!this.state.bPreLoaded) {
            const o = await n.LoadAdjacentPartnerEvents(null, null, e, 0, 2, t);
            if ((this.setState({ events: o }), a && o && o.length > 0)) {
              const e = d.KN.Get().GetTracker();
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
          const n = d.KN.Get().GetTracker();
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
          const o = d.KN.Get().GetTracker();
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
              o.createElement(D.t, { size: "medium", position: "center" }),
            );
          const s = window.screen.width <= 500 ? 1 : 2,
            i = Boolean(null == a ? void 0 : a.length),
            r = this.BHasLastUpdateEvent(),
            l = this.BShouldShowLastUpdateEvent()
              ? this.state.last_update_event.announcement_gid
              : void 0,
            { strClassName: c } = this.props;
          return o.createElement(
            G.ml,
            { className: c },
            this.state.bShowModal &&
              o.createElement(U, {
                ...this.props,
                announcementGID:
                  this.state.announcementGID ||
                  (null === (e = this.state.modalInitialEvent) || void 0 === e
                    ? void 0
                    : e.AnnouncementGID),
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
                  (0, g.we)("#EventBrowse_RecentEvents"),
                ),
                !(null === (t = this.context) || void 0 === t
                  ? void 0
                  : t.IN_GAMEPADUI) &&
                  o.createElement(
                    "div",
                    { className: P.SectionButtonCtn },
                    this.props.bViewAllShowInfiniteScroll
                      ? o.createElement(
                          G.ml,
                          {
                            className: P.SectionButton,
                            onClick: () => this.ShowModal(a[0]),
                          },
                          (0, g.we)("#EventBrowse_MoreEventsBtn"),
                        )
                      : o.createElement(
                          m.tj,
                          {
                            eventModel: a[0],
                            route: m.PH.k_eViewWebSiteHub,
                            className: P.SectionButton,
                          },
                          (0, g.we)("#EventBrowse_MoreEventsBtn"),
                        ),
                  ),
                o.createElement(
                  "div",
                  { className: P.EventsSummariesCtn },
                  a.slice(0, s).map((e) => {
                    const t =
                      1 === a.length && window.screen.width > 500 ? B.kH : B.uY;
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
              o.createElement(H, {
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
      function U(e) {
        const {
            appid: t,
            partnerEventStore: n,
            trackingLocation: a,
            announcementGID: s,
            eventModel: i,
            closeModal: r,
          } = e,
          l = (0, E.Qn)();
        return o.createElement(I.N, {
          className: l ? void 0 : P.StoreHeaderAdjust,
          eventClassName: l ? P.GamePadUIWidthAdjust : void 0,
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
          { className: P.LatestUpdateButtonCtn },
          o.createElement(
            "div",
            { className: P.LatestUpdateIcon },
            o.createElement(A.UTF, null),
          ),
          o.createElement(
            G.ml,
            { className: P.LatestUpdateButton, onClick: e.onClick },
            (0, g.we)(
              "#EventBrowse_LatestUpdateTime_Button",
              (0, g._l)(e.nUpdateTime),
            ),
          ),
        );
      }
      function H(e) {
        const { nUpdateTime: t, announcementGID: n, onClick: a } = e,
          s = n ? p.O3.GetClanEventFromAnnouncementGID(n) : null,
          i = (e) => {
            null == a || a(), e.stopPropagation(), e.preventDefault();
          };
        return o.createElement(
          "div",
          null,
          o.createElement(
            "h2",
            null,
            (0, g.we)("#EventBrowse_LastUpdateDate", (0, g._l)(t)),
          ),
          o.createElement(
            "div",
            { className: P.SectionButtonCtn },
            o.createElement(
              "div",
              { className: P.SectionButton, onClick: i },
              (0, g.we)("#EventBrowse_ViewLatestUpdate"),
            ),
          ),
          Boolean(s) &&
            o.createElement(
              M.Z,
              {
                className: P.EventsSummariesCtn,
                "flow-children": "column",
                navEntryPreferPosition: C.iU.PREFERRED_CHILD,
              },
              o.createElement(B.kH, { event: s, onClick: i }),
            ),
        );
      }
      (y.contextType = E.QO),
        (0, _.Cg)([w.oI], y.prototype, "ShowModal", null),
        (0, _.Cg)([w.oI], y.prototype, "ShowLatestUpdateModal", null),
        (0, _.Cg)([w.oI], y.prototype, "CloseModal", null);
      var T = n(25918),
        F = n(44165);
      class O extends o.Component {
        render() {
          const { appid: e } = this.props;
          let t = F.HD.GetTimeNowWithOverrideAsDate(),
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
              partnerEventStore: T.mh,
              event_customization: {
                require_tags: ["workshop"],
                rtime_oldestevent: a,
              },
              strClassName: P.Container,
              trackingLocation: 6,
              bViewAllShowInfiniteScroll: !0,
            }),
          );
        }
      }
      function R(e) {
        const [t, n] = o.useState(!0);
        return (
          o.useEffect(() => {
            c.Vw.Init(new l.D(E.TS.WEBAPI_BASE_URL)),
              p.O3.Init(),
              Promise.all([d.KN.InitGlobal()]).then(() => n(!1));
          }, []),
          t
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
                    render: (e) => o.createElement(i, { ...e }),
                  }),
                  o.createElement(r.qh, {
                    exact: !0,
                    path: a.g5.Listing(":appid_or_vanity_str"),
                    render: (e) =>
                      o.createElement(f, {
                        key: "InfScroll_NoDismissApp_" + e.match.params.appid,
                        ...e,
                        bPreventDismiss: !0,
                        trackingLocation: 6,
                      }),
                  }),
                  o.createElement(r.qh, {
                    exact: !0,
                    path: a.g5.WorkshopHub(":appid(\\d+)"),
                    render: (e) =>
                      o.createElement(O, {
                        ...e,
                        appid: +e.match.params.appid,
                        key: "Workshop" + e.match.params.appid,
                      }),
                  }),
                  o.createElement(r.qh, {
                    path: a.g5.AppHub(":appid"),
                    render: (e) =>
                      o.createElement(f, {
                        ...e,
                        key: "InfScroll_App_" + e.match.params.appid,
                        trackingLocation: 6,
                      }),
                  }),
                  o.createElement(r.qh, {
                    path: a.g5.GroupHub(":group_vanity"),
                    render: (e) =>
                      o.createElement(f, {
                        ...e,
                        key: "InfScroll_App_" + e.match.params.group_vanity,
                        trackingLocation: 6,
                      }),
                  }),
                  o.createElement(r.qh, { component: v.a }),
                ),
              )
        );
      }
    },
  },
]);
