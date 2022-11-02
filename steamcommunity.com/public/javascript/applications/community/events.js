/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [2136],
  {
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
    34425: (e, t, n) => {
      "use strict";
      n.d(t, { p: () => c });
      var a = n(70655),
        o = n(67294),
        s = n(7707),
        r = n(27745),
        i = n(64839),
        l = n(90666);
      function c(e) {
        const { children: t, navTreeRef: n } = e,
          c = (0, a._T)(e, ["children", "navTreeRef"]),
          d = o.useRef(),
          p = (0, i.BE)(d, n);
        if ((0, l.id)()) {
          const e = window.__nav_tree_root;
          return o.createElement(
            s.Fe,
            Object.assign({}, c, {
              navTreeRef: p,
              secondary: !0,
              parentEmbeddedNavTree: e,
            }),
            o.createElement(r.O, null, t)
          );
        }
        return o.createElement(o.Fragment, null, t);
      }
    },
    91799: (e, t, n) => {
      "use strict";
      n.d(t, { M: () => I, q: () => b });
      var a = n(70655),
        o = n(67294),
        s = n(29323),
        r = n(90666),
        i = n(26149),
        l = n(3389),
        c = (n(9355), n(14627)),
        d = n(10669),
        p = n(74449),
        m = n(36067),
        u = n(67754),
        v = n(70350),
        h = n(89694),
        E = (n(68002), n(32548)),
        _ = n(55310),
        w = n(70882);
      let S = class extends o.Component {
        constructor() {
          super(...arguments), (this.m_clanSteamID = new l.K(r.JA.CLANSTEAMID));
        }
        componentDidMount() {
          d.wk.GetEditModel() &&
            "view" === this.props.mode &&
            d.wk.GetEditModel().ClearDirty();
        }
        componentDidUpdate(e) {
          d.wk.GetEditModel() &&
            "view" === this.props.mode &&
            d.wk.GetEditModel().ClearDirty();
        }
        render() {
          const { mode: e } = this.props;
          if ("view" === e) {
            let e = d.wk.GetEditModel().GetEventModel(),
              t = (0, i.jM)(r.De.LANGUAGE);
            return e.BHasSaleEnabled()
              ? o.createElement(
                  E.S,
                  null,
                  o.createElement(_.o, {
                    eventModel: e,
                    bIsPreview: !0,
                    language: t,
                  })
                )
              : o.createElement(
                  o.Fragment,
                  null,
                  o.createElement(c.TY, {
                    event: e,
                    lang: t,
                    partnerEventStore: d.wk,
                    emoticonStore: h.F,
                    adminPanel: o.createElement(u.H, {
                      eventModel: e,
                      partnerEventStore: d.wk,
                    }),
                    otherEventRow: o.createElement(v._G, {
                      clanAccountID: e.clanSteamID.GetAccountID(),
                      trackingLocation: 6,
                      gidAnnouncement: e.AnnouncementGID,
                      partnerEventStore: d.wk,
                      bViewAllShowInfiniteScroll: !e.BIsOGGEvent(),
                    }),
                  })
                );
          }
          return o.createElement(p.H, {
            editModel: d.wk.GetEditModel(),
            appid_or_vanity_str: this.props.match.params.appid_or_vanity_str,
            gid: this.props.match.params.gid,
            bDisplaySale: "previewsale" === e,
          });
        }
      };
      S = (0, a.gn)([s.Pi], S);
      const b = (0, m.M)(S),
        I = (e) =>
          o.createElement(
            w.R0,
            Object.assign({}, e, {
              key: e.match.params.oldAnnouncementGID,
              bClearDirty: !0,
              bPreview: !1,
              bPreventRedirect: !0,
            })
          );
    },
    2218: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => F });
      var a = n(9355),
        o = n(91799),
        s = n(67294),
        r = n(78587),
        i = n(65902),
        l = n(86605),
        c = (n(68002), n(9915)),
        d = n(7200),
        p = n(27991),
        m = n(23937),
        u = n(69491),
        v = n.n(u),
        h = n(13596),
        E = n(74163),
        _ = n(41311),
        w = n(90666),
        S = n(70655),
        b = n(29323),
        I = (n(54698), n(64839)),
        D = n(3044),
        L = n(76776),
        g = (n(49186), n(3389), n(22188));
      let G = class extends s.Component {
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
          return (0, S.mG)(this, void 0, void 0, function* () {
            const t = (0, w.kQ)(
              "eventinfinitescrolllanding",
              "application_config"
            );
            let n;
            t && "string" == typeof t && (n = t);
            const a = window.location.href.startsWith(
                w.De.COMMUNITY_BASE_URL + "groups"
              ),
              o = a
                ? yield L.sV.LoadOGGClanInfoForGroupVanity(
                    this.props.match.params.appid_or_vanity_str
                  )
                : yield L.sV.LoadOGGClanInfoForIdentifier(
                    this.props.match.params.appid_or_vanity_str
                  );
            if ((console.log("output: ", (0, g.ZN)(o), a), o))
              if (o.partner_events_enabled) {
                const t = yield d.j1.LoadAdjacentPartnerEventsByAnnouncement(
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
            ? s.createElement(D.x, {
                appid: this.state.appid,
                announcementGID: this.state.announcementGID,
                clanSteamID: this.state.clanSteamID,
                closeModal: this.HideModal,
                partnerEventStore: d.j1,
                trackingLocation: this.props.trackingLocation,
                showAppHeader: !0,
                bPrimaryPageFeature: e,
              })
            : this.state.bLoadedLandingState
            ? s.createElement(h.V, { string: (0, _.Xx)("#Loading") })
            : s.createElement("div", null);
        }
      };
      (0, S.gn)([I.ak], G.prototype, "HideModal", null),
        (G = (0, S.gn)([b.Pi], G));
      n(34425);
      var M = n(7707),
        f = n(35921),
        k = n(39746),
        A = (n(12505), n(71174), n(24020)),
        C = n(70350),
        B = n(95598),
        y = n(13045);
      class U extends s.Component {
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
              const t = d.j1.GetClanEventFromAnnouncementGID(e);
              t && this.state.events.push(t);
            }));
        }
        componentDidMount() {
          return (0, S.mG)(this, void 0, void 0, function* () {
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
                const e = c.cb.Get().GetTracker();
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
          const n = c.cb.Get().GetTracker();
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
          const o = c.cb.Get().GetTracker();
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
          var e, t, n;
          const a = this.state.events;
          if (!a)
            return s.createElement(
              "div",
              { className: v().FlexCenter },
              s.createElement(h.V, { size: "medium", position: "center" })
            );
          const o = window.screen.width <= 500 ? 1 : 2,
            r = Boolean(null == a ? void 0 : a.length),
            i = this.BHasLastUpdateEvent(),
            l = this.BShouldShowLastUpdateEvent()
              ? this.state.last_update_event.announcement_gid
              : void 0,
            { strClassName: c } = this.props;
          return s.createElement(
            M.Ks,
            { className: c },
            this.state.bShowModal &&
              s.createElement(
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
            r &&
              s.createElement(
                "div",
                null,
                s.createElement(
                  "h2",
                  null,
                  (0, _.Xx)("#EventBrowse_RecentEvents")
                ),
                !(null === (t = this.context) || void 0 === t
                  ? void 0
                  : t.IN_GAMEPADUI) &&
                  s.createElement(
                    "div",
                    { className: y.SectionButtonCtn },
                    this.props.bViewAllShowInfiniteScroll
                      ? s.createElement(
                          M.Ks,
                          {
                            className: y.SectionButton,
                            onClick: () => this.ShowModal(a[0]),
                          },
                          (0, _.Xx)("#EventBrowse_MoreEventsBtn")
                        )
                      : s.createElement(
                          m.JW,
                          {
                            eventModel: a[0],
                            route: m.Ue.k_eViewWebSiteHub,
                            className: y.SectionButton,
                          },
                          (0, _.Xx)("#EventBrowse_MoreEventsBtn")
                        )
                  ),
                s.createElement(
                  "div",
                  { className: y.EventsSummariesCtn },
                  a.slice(0, o).map((e) => {
                    const t =
                      1 === a.length && window.screen.width > 500 ? C.KE : C.T4;
                    return s.createElement(t, {
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
            Boolean(i && l) &&
              s.createElement(x, {
                nUpdateTime: this.state.last_update_event.rtime,
                announcementGID: l,
                onClick: this.ShowLatestUpdateModal,
              }),
            Boolean(
              i &&
                !l &&
                !(null === (n = this.context) || void 0 === n
                  ? void 0
                  : n.IN_GAMEPADUI)
            ) &&
              s.createElement(N, {
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
          } = e,
          l = (0, w.id)();
        return s.createElement(D.x, {
          className: l ? void 0 : y.StoreHeaderAdjust,
          eventClassName: l ? y.GamePadUIWidthAdjust : void 0,
          appid: t,
          trackingLocation: a,
          announcementGID: o,
          partnerEventStore: n,
          eventModel: r,
          closeModal: i,
        });
      }
      function N(e) {
        return s.createElement(
          "div",
          { className: y.LatestUpdateButtonCtn },
          s.createElement(
            "div",
            { className: y.LatestUpdateIcon },
            s.createElement(B.BNo, null)
          ),
          s.createElement(
            M.Ks,
            { className: y.LatestUpdateButton, onClick: e.onClick },
            (0, _.Xx)(
              "#EventBrowse_LatestUpdateTime_Button",
              (0, _.m9)(e.nUpdateTime)
            )
          )
        );
      }
      function x(e) {
        const { nUpdateTime: t, announcementGID: n, onClick: a } = e,
          o = n ? d.j1.GetClanEventFromAnnouncementGID(n) : null,
          r = (e) => {
            null == a || a(), e.stopPropagation(), e.preventDefault();
          };
        return s.createElement(
          "div",
          null,
          s.createElement(
            "h2",
            null,
            (0, _.Xx)("#EventBrowse_LastUpdateDate", (0, _.m9)(t))
          ),
          s.createElement(
            "div",
            { className: y.SectionButtonCtn },
            s.createElement(
              "div",
              { className: y.SectionButton, onClick: r },
              (0, _.Xx)("#EventBrowse_ViewLatestUpdate")
            )
          ),
          Boolean(o) &&
            s.createElement(
              f.s,
              {
                className: y.EventsSummariesCtn,
                "flow-children": "column",
                navEntryPreferPosition: k.c4.PREFERRED_CHILD,
              },
              s.createElement(C.KE, { event: o, onClick: r })
            )
        );
      }
      (U.contextType = w.E_),
        (0, S.gn)([I.ak], U.prototype, "ShowModal", null),
        (0, S.gn)([I.ak], U.prototype, "ShowLatestUpdateModal", null),
        (0, S.gn)([I.ak], U.prototype, "CloseModal", null);
      var T = n(10669),
        j = n(5525);
      class H extends s.Component {
        render() {
          const { appid: e } = this.props;
          let t = j.JW.GetTimeNowWithOverrideAsDate(),
            n = new Date(t.setUTCHours(0, 0, 0, 0) - 15552e6),
            a = Math.floor(n.getTime() / 1e3);
          return s.createElement(
            "div",
            {
              className:
                "detailBox altFooter greenlight_home_box section announcements_row",
            },
            s.createElement(U, {
              appid: e,
              partnerEventStore: T.wk,
              event_customization: {
                require_tags: ["workshop"],
                rtime_oldestevent: a,
              },
              strClassName: y.Container,
              trackingLocation: 6,
              bViewAllShowInfiniteScroll: !0,
            })
          );
        }
      }
      var W = n(92244);
      function F(e) {
        const [t, n] = s.useState(!0),
          u = (0, E.T)();
        return (
          s.useEffect(() => {
            l.Q8.Init(new i.J(w.De.WEBAPI_BASE_URL)),
              d.j1.Init(),
              (0, p.nf)(null),
              Promise.all([c.cb.InitGlobal()]).then(() => {
                u.token.reason || n(!1);
              });
          }, []),
          t
            ? s.createElement(h.V, {
                position: "center",
                size: "medium",
                string: (0, _.Xx)("#Loading"),
              })
            : s.createElement(
                m.uX.Provider,
                { value: { bCanUseLink: !0 } },
                s.createElement(
                  r.rs,
                  null,
                  s.createElement(r.AW, {
                    exact: !0,
                    path: a.W3.ViewEventDetails(
                      ":appid_or_vanity_str",
                      ":oldAnnouncementGID(\\d+)"
                    ),
                    render: (e) => s.createElement(o.M, Object.assign({}, e)),
                  }),
                  s.createElement(r.AW, {
                    exact: !0,
                    path: a.W3.Listing(":appid_or_vanity_str"),
                    render: (e) =>
                      s.createElement(
                        G,
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
                  s.createElement(r.AW, {
                    exact: !0,
                    path: a.W3.WorkshopHub(":appid(\\d+)"),
                    render: (e) =>
                      s.createElement(
                        H,
                        Object.assign({}, e, {
                          appid: +e.match.params.appid,
                          key: "Workshop" + e.match.params.appid,
                        })
                      ),
                  }),
                  s.createElement(r.AW, {
                    path: a.W3.AppHub(":appid"),
                    render: (e) =>
                      s.createElement(
                        G,
                        Object.assign({}, e, {
                          key: "InfScroll_App_" + e.match.params.appid,
                          trackingLocation: 6,
                        })
                      ),
                  }),
                  s.createElement(r.AW, {
                    path: a.W3.GroupHub(":group_vanity"),
                    render: (e) =>
                      s.createElement(
                        G,
                        Object.assign({}, e, {
                          key: "InfScroll_App_" + e.match.params.group_vanity,
                          trackingLocation: 6,
                        })
                      ),
                  }),
                  s.createElement(r.AW, { component: W.R })
                )
              )
        );
      }
    },
  },
]);
