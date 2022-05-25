/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [22],
  {
    CY4d: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return w;
      }),
        n.d(t, "b", function () {
          return I;
        });
      var a = n("mrSG"),
        o = n("q1tI"),
        r = n("TyAF"),
        s = n("lkRc"),
        i = n("mgoM"),
        c = n("kLLr"),
        l = (n("1fPh"), n("YNty")),
        d = n("t0uJ"),
        p = n("buwe"),
        m = n("FRkE"),
        u = n("YWVM"),
        v = n("SdTr"),
        h = n("UWWC"),
        E = (n("MUT6"), n("IjL/")),
        b = n("6AJf"),
        S = n("EGVG");
      let _ = class extends o.Component {
        constructor() {
          super(...arguments), (this.m_clanSteamID = new c.a(s.b.CLANSTEAMID));
        }
        componentDidMount() {
          d.c.GetEditModel() &&
            "view" === this.props.mode &&
            d.c.GetEditModel().ClearDirty();
        }
        componentDidUpdate(e) {
          d.c.GetEditModel() &&
            "view" === this.props.mode &&
            d.c.GetEditModel().ClearDirty();
        }
        render() {
          const { mode: e } = this.props;
          if ("view" === e) {
            let e = d.c.GetEditModel().GetEventModel(),
              t = Object(i.d)(s.c.LANGUAGE);
            return e.BHasSaleEnabled()
              ? o.createElement(
                  E.a,
                  null,
                  o.createElement(b.c, {
                    eventModel: e,
                    bIsPreview: !0,
                    language: t,
                  })
                )
              : o.createElement(
                  o.Fragment,
                  null,
                  o.createElement(l.a, {
                    event: e,
                    lang: t,
                    partnerEventStore: d.c,
                    emoticonStore: h.b,
                    adminPanel: o.createElement(u.a, {
                      eventModel: e,
                      partnerEventStore: d.c,
                    }),
                    otherEventRow: o.createElement(v.a, {
                      clanAccountID: e.clanSteamID.GetAccountID(),
                      trackingLocation: 6,
                      gidAnnouncement: e.AnnouncementGID,
                      partnerEventStore: d.c,
                      bViewAllShowInfiniteScroll: !e.BIsOGGEvent(),
                    }),
                  })
                );
          }
          return o.createElement(p.a, {
            editModel: d.c.GetEditModel(),
            appid_or_vanity_str: this.props.match.params.appid_or_vanity_str,
            gid: this.props.match.params.gid,
            bDisplaySale: "previewsale" === e,
          });
        }
      };
      _ = Object(a.b)([r.a], _);
      const w = Object(m.a)(_),
        I = (e) =>
          o.createElement(
            S.c,
            Object.assign({}, e, {
              key: e.match.params.oldAnnouncementGID,
              bClearDirty: !0,
              bPreview: !1,
              bPreventRedirect: !0,
            })
          );
    },
    "IY+y": function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "default", function () {
          return R;
        });
      var a = n("1fPh"),
        o = (n("jZUi"), n("CY4d")),
        r = n("q1tI"),
        s = n.n(r),
        i = (n("M1X1"), n("Y9L4"), n("EC67")),
        c = n("WBba"),
        l = n("qD+2"),
        d = (n("MUT6"), n("9w6b")),
        p = n("6oCP"),
        m = n("hKFG"),
        u = n("mB/g"),
        v = n("xnZ7"),
        h = n.n(v),
        E = (n("idvb"), n("0OaU")),
        b = n("X2UP"),
        S = n("TLQK"),
        _ = n("lkRc"),
        w = n("mrSG"),
        I = n("TyAF"),
        L = (n("65aj"), n("opsS")),
        D = n("r3N9"),
        G = n("TQGK"),
        f = (n("3+zv"), n("kLLr"), n("2vnA"));
      let M = class extends r.Component {
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
          return Object(w.a)(this, void 0, void 0, function* () {
            const t = Object(_.f)(
              "eventinfinitescrolllanding",
              "application_config"
            );
            let n;
            t && "string" == typeof t && (n = t);
            const a = window.location.href.startsWith(
                _.c.COMMUNITY_BASE_URL + "groups"
              ),
              o = a
                ? yield G.a.LoadOGGClanInfoForGroupVanity(
                    this.props.match.params.appid_or_vanity_str
                  )
                : yield G.a.LoadOGGClanInfoForIdentifier(
                    this.props.match.params.appid_or_vanity_str
                  );
            if ((console.log("output: ", Object(f.I)(o), a), o))
              if (o.partner_events_enabled) {
                const t = yield p.b.LoadAdjacentPartnerEventsByAnnouncement(
                  n,
                  o.clanSteamID,
                  o.appid,
                  3,
                  3
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
                  this.props.match.params.appid_or_vanity_str
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
            ? r.createElement(D.a, {
                appid: this.state.appid,
                announcementGID: this.state.announcementGID,
                clanSteamID: this.state.clanSteamID,
                closeModal: this.HideModal,
                partnerEventStore: p.b,
                trackingLocation: this.props.trackingLocation,
                showAppHeader: !0,
                bPrimaryPageFeature: e,
              })
            : this.state.bLoadedLandingState
            ? r.createElement(E.a, { string: Object(S.f)("#Loading") })
            : r.createElement("div", null);
        }
      };
      Object(w.b)([L.b], M.prototype, "HideModal", null),
        (M = Object(w.b)([I.a], M));
      var g = n("av+R");
      n("yLGM");
      var A = n("qDk6"),
        C = n("j+5p"),
        k = (n("kKgT"), n("hwrv"), n("apHd")),
        B = n("SdTr"),
        U = n("6Y59"),
        j = n("r+ba");
      class y extends s.a.Component {
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
          const t = Object(k.a)("EventWebRowEmbed");
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
          return Object(w.a)(this, void 0, void 0, function* () {
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
                t
              );
              if ((this.setState({ events: o }), a && o && o.length > 0)) {
                const e = d.a.Get().GetTracker();
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
          const n = d.a.Get().GetTracker();
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
          const o = d.a.Get().GetTracker();
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
              { className: h.a.FlexCenter },
              s.a.createElement(E.a, { size: "medium", position: "center" })
            );
          const n = window.screen.width <= 500 ? 1 : 2,
            a = Boolean(null == t ? void 0 : t.length),
            o = this.BHasLastUpdateEvent(),
            r = this.BShouldShowLastUpdateEvent()
              ? this.state.last_update_event.announcement_gid
              : void 0,
            { strClassName: i } = this.props;
          return s.a.createElement(
            g.e,
            { className: i },
            this.state.bShowModal &&
              s.a.createElement(
                P,
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
              s.a.createElement(
                "div",
                null,
                s.a.createElement(
                  "h2",
                  null,
                  Object(S.f)("#EventBrowse_RecentEvents")
                ),
                !_.c.IN_GAMEPADUI &&
                  s.a.createElement(
                    "div",
                    { className: j.SectionButtonCtn },
                    this.props.bViewAllShowInfiniteScroll
                      ? s.a.createElement(
                          g.e,
                          {
                            className: j.SectionButton,
                            onClick: () => this.ShowModal(t[0]),
                          },
                          Object(S.f)("#EventBrowse_MoreEventsBtn")
                        )
                      : s.a.createElement(
                          u.c,
                          {
                            eventModel: t[0],
                            route: u.a.k_eViewWebSiteHub,
                            className: j.SectionButton,
                          },
                          Object(S.f)("#EventBrowse_MoreEventsBtn")
                        )
                  ),
                s.a.createElement(
                  "div",
                  { className: j.EventsSummariesCtn },
                  t.slice(0, n).map((e) => {
                    const n =
                      1 === t.length && window.screen.width > 500 ? B.c : B.b;
                    return s.a.createElement(n, {
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
              s.a.createElement(N, {
                nUpdateTime: this.state.last_update_event.rtime,
                announcementGID: r,
                onClick: this.ShowLatestUpdateModal,
              }),
            Boolean(o && !r && !_.c.IN_GAMEPADUI) &&
              s.a.createElement(O, {
                nUpdateTime: this.state.last_update_event.rtime,
                onClick: this.ShowLatestUpdateModal,
              })
          );
        }
      }
      function P(e) {
        const {
          appid: t,
          partnerEventStore: n,
          trackingLocation: a,
          announcementGID: o,
          eventModel: r,
          closeModal: i,
        } = e;
        return s.a.createElement(D.a, {
          className: _.c.IN_GAMEPADUI ? void 0 : j.StoreHeaderAdjust,
          eventClassName: _.c.IN_GAMEPADUI ? j.GamePadUIWidthAdjust : void 0,
          appid: t,
          trackingLocation: a,
          announcementGID: o,
          partnerEventStore: n,
          eventModel: r,
          closeModal: i,
        });
      }
      function O(e) {
        return s.a.createElement(
          "div",
          { className: j.LatestUpdateButtonCtn },
          s.a.createElement(
            "div",
            { className: j.LatestUpdateIcon },
            s.a.createElement(U.tb, null)
          ),
          s.a.createElement(
            g.e,
            { className: j.LatestUpdateButton, onClick: e.onClick },
            Object(S.f)(
              "#EventBrowse_LatestUpdateTime_Button",
              Object(S.p)(e.nUpdateTime)
            )
          )
        );
      }
      function N(e) {
        const { nUpdateTime: t, announcementGID: n, onClick: a } = e,
          o = n ? p.b.GetClanEventFromAnnouncementGID(n) : null,
          r = (e) => {
            null == a || a(), e.stopPropagation(), e.preventDefault();
          };
        return s.a.createElement(
          "div",
          null,
          s.a.createElement(
            "h2",
            null,
            Object(S.f)("#EventBrowse_LastUpdateDate", Object(S.p)(t))
          ),
          s.a.createElement(
            "div",
            { className: j.SectionButtonCtn },
            s.a.createElement(
              "div",
              { className: j.SectionButton, onClick: r },
              Object(S.f)("#EventBrowse_ViewLatestUpdate")
            )
          ),
          Boolean(o) &&
            s.a.createElement(
              A.a,
              {
                className: j.EventsSummariesCtn,
                "flow-children": "column",
                navEntryPreferPosition: C.d.PREFERRED_CHILD,
              },
              s.a.createElement(B.c, { event: o, onClick: r })
            )
        );
      }
      Object(w.b)([L.b], y.prototype, "ShowModal", null),
        Object(w.b)([L.b], y.prototype, "ShowLatestUpdateModal", null),
        Object(w.b)([L.b], y.prototype, "CloseModal", null);
      var T = n("t0uJ"),
        F = n("5izx");
      class H extends s.a.Component {
        render() {
          const { appid: e } = this.props;
          let t = F.a.GetTimeNowWithOverrideAsDate(),
            n = new Date(t.setUTCHours(0, 0, 0, 0) - 15552e6),
            a = Math.floor(n.getTime() / 1e3);
          return s.a.createElement(
            "div",
            {
              className:
                "detailBox altFooter greenlight_home_box section announcements_row",
            },
            s.a.createElement(y, {
              appid: e,
              partnerEventStore: T.c,
              event_customization: {
                require_tags: ["workshop"],
                rtime_oldestevent: a,
              },
              strClassName: j.Container,
              trackingLocation: 6,
              bViewAllShowInfiniteScroll: !0,
            })
          );
        }
      }
      function R(e) {
        const [t, n] = s.a.useState(!0),
          r = Object(b.a)();
        return (
          s.a.useEffect(() => {
            l.a.Init(new c.a(_.c.WEBAPI_BASE_URL)),
              p.b.Init(),
              Object(m.a)(null),
              Promise.all([d.a.InitGlobal()]).then(() => {
                r.token.reason || n(!1);
              });
          }, []),
          t
            ? s.a.createElement(E.a, {
                position: "center",
                size: "medium",
                string: Object(S.f)("#Loading"),
              })
            : s.a.createElement(
                u.d.Provider,
                { value: { bCanUseLink: !0 } },
                s.a.createElement(
                  i.e,
                  null,
                  s.a.createElement(i.c, {
                    exact: !0,
                    path: a.c.ViewEventDetails(
                      ":appid_or_vanity_str",
                      ":oldAnnouncementGID(\\d+)"
                    ),
                    render: (e) => s.a.createElement(o.b, Object.assign({}, e)),
                  }),
                  s.a.createElement(i.c, {
                    exact: !0,
                    path: a.c.Listing(":appid_or_vanity_str"),
                    render: (e) =>
                      s.a.createElement(
                        M,
                        Object.assign(
                          {
                            key:
                              "InfScroll_NoDismissApp_" + e.match.params.appid,
                          },
                          e,
                          { bPreventDismiss: !0, trackingLocation: 6 }
                        )
                      ),
                  }),
                  s.a.createElement(i.c, {
                    exact: !0,
                    path: a.c.WorkshopHub(":appid(\\d+)"),
                    render: (e) =>
                      s.a.createElement(
                        H,
                        Object.assign({}, e, {
                          appid: +e.match.params.appid,
                          key: "Workshop" + e.match.params.appid,
                        })
                      ),
                  }),
                  s.a.createElement(i.c, {
                    path: a.c.AppHub(":appid"),
                    render: (e) =>
                      s.a.createElement(
                        M,
                        Object.assign({}, e, {
                          key: "InfScroll_App_" + e.match.params.appid,
                          trackingLocation: 6,
                        })
                      ),
                  }),
                  s.a.createElement(i.c, {
                    path: a.c.GroupHub(":group_vanity"),
                    render: (e) =>
                      s.a.createElement(
                        M,
                        Object.assign({}, e, {
                          key: "InfScroll_App_" + e.match.params.group_vanity,
                          trackingLocation: 6,
                        })
                      ),
                  }),
                  s.a.createElement(i.c, { component: x })
                )
              )
        );
      }
      function x(e) {
        return "dev" !== _.c.WEB_UNIVERSE
          ? s.a.createElement(i.b, { push: !0, to: "/" })
          : s.a.createElement("div", null, "Unknown route");
      }
    },
    "r+ba": function (e, t, n) {
      e.exports = {
        "duration-app-launch": "800ms",
        Container: "partnereventwebrowembed_Container_2Jd3M",
        StoreHeaderAdjust: "partnereventwebrowembed_StoreHeaderAdjust_3YyCp",
        SectionButtonCtn: "partnereventwebrowembed_SectionButtonCtn_1HP0y",
        SectionButton: "partnereventwebrowembed_SectionButton_3n8sw",
        EventsSummariesCtn: "partnereventwebrowembed_EventsSummariesCtn_1snIw",
        LatestUpdateButtonCtn:
          "partnereventwebrowembed_LatestUpdateButtonCtn_2vEwZ",
        LatestUpdateIcon: "partnereventwebrowembed_LatestUpdateIcon_mq3RO",
        LatestUpdateButton: "partnereventwebrowembed_LatestUpdateButton_1TRFt",
      };
    },
  },
]);
