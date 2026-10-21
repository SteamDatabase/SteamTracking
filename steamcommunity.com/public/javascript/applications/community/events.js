/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [74268],
    {
      11161: (N, H, e) => {
        "use strict";
        e.r(H), e.d(H, { default: () => Lt });
        var n = e(7850),
          c = e(90626),
          P = e(98112),
          C = e(58732),
          J = e(9608);
        const K = (o) =>
          (0, c.createElement)(J.Io, {
            ...o,
            key: o.match.params.oldAnnouncementGID,
            bClearDirty: !0,
            bPreview: !1,
            bPreventRedirect: !0,
          });
        var w = e(92757),
          X = e(77008),
          $ = e(85528),
          M = e(77495),
          q = e(10303),
          xt = e(64641),
          _ = e(90783),
          x = e(3166),
          tt = e(75844),
          F = e(54963),
          O = e(19188),
          nt = e(85599),
          W = e(813),
          y = e(18210),
          et = e(14947),
          at = Object.defineProperty,
          ot = Object.getOwnPropertyDescriptor,
          V = (o, a, s, t) => {
            for (
              var i = t > 1 ? void 0 : t ? ot(a, s) : a, r = o.length - 1, l;
              r >= 0;
              r--
            )
              (l = o[r]) && (i = (t ? l(a, s, i) : l(i)) || i);
            return t && i && at(a, s, i), i;
          };
        let j = class extends c.Component {
          state = {
            bShowModal: !1,
            bLoadedLandingState: this.props.bPreventDismiss,
          };
          componentDidMount() {
            this.props.bPreventDismiss
              ? this.LoadAppAndFirstEvent()
              : (window.fnPartnerEvent_ShowInfiniteScroll = (o, a) => {
                  this.setState({
                    bShowModal: !0,
                    appid: o,
                    announcementGID: a,
                  });
                });
          }
          async LoadAppAndFirstEvent() {
            const o = (0, x.Tc)(
              "eventinfinitescrolllanding",
              "application_config",
            );
            let a;
            o && typeof o == "string" && (a = o);
            const s = window.location.href.startsWith(
                x.TS.COMMUNITY_BASE_URL + "groups",
              ),
              t = s
                ? await W.ac.LoadOGGClanInfoForGroupVanity(
                    this.props.match.params.appid_or_vanity_str,
                  )
                : await W.ac.LoadOGGClanInfoForIdentifier(
                    this.props.match.params.appid_or_vanity_str,
                  );
            if ((console.log("output: ", (0, et.HO)(t), s), t))
              if (t.partner_events_enabled) {
                const i = await M.O3.LoadAdjacentPartnerEventsByAnnouncement(
                  a,
                  t.clanSteamID,
                  t.appid,
                  3,
                  3,
                );
                this.setState({
                  bLoadedLandingState: !1,
                  bShowModal: !0,
                  appid: t.appid,
                  clanSteamID: t.clanSteamID,
                  announcementGID: i?.[0]?.AnnouncementGID,
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
            const { bPreventDismiss: o } = this.props;
            return this.state.bShowModal
              ? (0, n.jsx)(O.N, {
                  appid: this.state.appid,
                  announcementGID: this.state.announcementGID,
                  clanSteamID: this.state.clanSteamID,
                  closeModal: this.HideModal,
                  partnerEventStore: M.O3,
                  trackingLocation: this.props.trackingLocation,
                  showAppHeader: !0,
                  bPrimaryPageFeature: o,
                })
              : this.state.bLoadedLandingState
                ? (0, n.jsx)(nt.t, { string: (0, y.we)("#Loading") })
                : (0, n.jsx)("div", {});
          }
        };
        V([F.oI], j.prototype, "HideModal", 1), (j = V([tt.PA], j));
        var st = e(72609),
          it = e(75372),
          Z = e(71157),
          Q = e(90537),
          b = e(24660),
          z = e(19298),
          rt = e(20169),
          Y = e(95174),
          G = e(39905),
          m = e(12037),
          lt = e(36118);
        function dt(o) {
          return (0, n.jsxs)("div", {
            className: m.LatestUpdateButtonCtn,
            children: [
              (0, n.jsx)("div", {
                className: m.LatestUpdateIcon,
                children: (0, n.jsx)(lt.UTF, { role: "presentation" }),
              }),
              (0, n.jsx)(b.ml, {
                className: m.LatestUpdateButton,
                onClick: o.onClick,
                children: G.Z.Localize(
                  "#EventBrowse_LatestUpdateTime_Button",
                  (0, y._l)(o.nUpdateTime),
                ),
              }),
            ],
          });
        }
        function ct(o) {
          const { nUpdateTime: a, announcementGID: s, onClick: t } = o,
            i = s ? M.O3.GetClanEventFromAnnouncementGID(s) : null,
            r = Y.u;
          return (0, n.jsxs)("div", {
            className: m.Container,
            children: [
              (0, n.jsxs)("h2", {
                children: [
                  (0, y.we)("#EventBrowse_LastUpdateDate", (0, y._l)(a)),
                  (0, n.jsx)(b.ml, {
                    className: m.SectionButton,
                    onClick: (l) => {
                      t?.(), l.stopPropagation(), l.preventDefault();
                    },
                    children: (0, y.we)("#EventBrowse_MoreEventsBtn"),
                  }),
                ],
              }),
              !!i &&
                (0, n.jsx)(z.Z, {
                  className: m.EventsSummariesCtn,
                  "flow-children": "column",
                  navEntryPreferPosition: rt.iU.PREFERRED_CHILD,
                  children: (0, n.jsx)(r, {
                    event: i,
                    onClick: (l) => {
                      t?.(), l.stopPropagation(), l.preventDefault();
                    },
                  }),
                }),
            ],
          });
        }
        var vt = e(54130),
          U = e(56492),
          mt = e(33902),
          ut = e(71568);
        const k = 500;
        function pt(o) {
          const {
              strClassName: a,
              rgEvents: s,
              fnEventShowModal: t,
              elPostRowElement: i,
              bViewAllShowInfiniteScroll: r,
              nSummaryMaxLength: l,
            } = o,
            f = (0, mt.d)(),
            u = (0, ut.R7)(),
            L = (0, x.Qn)();
          let h = 2,
            v = k + 1;
          return (
            u.ownerWindow.window
              ? (v = u.ownerWindow.window.innerWidth)
              : f.viewportWidth && (v = f.viewportWidth.value),
            (h = v <= k ? 1 : 2),
            s && s.length == 0 && !i
              ? null
              : (0, n.jsxs)(z.Z, {
                  className: a,
                  "flow-children": "row",
                  children: [
                    !!s &&
                      s.length > 0 &&
                      (0, n.jsx)("div", {
                        className: m.Container,
                        children: (0, n.jsxs)(vt.q, {
                          children: [
                            (0, n.jsxs)("h2", {
                              children: [
                                G.Z.Localize("#EventBrowse_RecentEvents"),
                                !L &&
                                  !!s &&
                                  (0, n.jsx)(n.Fragment, {
                                    children:
                                      r && t
                                        ? (0, n.jsx)(b.ml, {
                                            className: m.SectionButton,
                                            onClick: () => t(s[0]),
                                            children: G.Z.Localize(
                                              "#EventBrowse_MoreEventsBtn",
                                            ),
                                          })
                                        : (0, n.jsx)(U.tj, {
                                            eventModel: s[0],
                                            route: U.PH.k_eViewWebSiteHub,
                                            className: m.SectionButton,
                                            children: G.Z.Localize(
                                              "#EventBrowse_MoreEventsBtn",
                                            ),
                                          }),
                                  }),
                              ],
                            }),
                            (0, n.jsx)("div", {
                              className: m.EventsSummariesCtn,
                              children: s.slice(0, h).map((E) => {
                                const p =
                                  t && !(0, U.sY)()
                                    ? (d) => {
                                        t(E),
                                          d.stopPropagation(),
                                          d.preventDefault();
                                      }
                                    : void 0;
                                return (0, n.jsx)(
                                  Y.u,
                                  {
                                    event: E,
                                    onClick: p,
                                    nSummaryMaxLength: l,
                                  },
                                  E.GID,
                                );
                              }),
                            }),
                          ],
                        }),
                      }),
                    i,
                  ],
                })
          );
        }
        var ht = e(49984),
          ft = e(2801);
        function Et(o) {
          const {
              trackingLocation: a,
              strClassName: s,
              bViewAllShowInfiniteScroll: t,
            } = o,
            [i, r, l] = (0, F.uD)(),
            [f, u] = (0, c.useState)(null),
            [L, h] = (0, c.useState)(void 0),
            v = (0, Q.Y)(),
            E = (0, c.useCallback)(() => {
              u(null), l();
            }, [l]),
            p = (0, c.useCallback)(
              (D) => {
                a &&
                  D &&
                  D.BIsPartnerEvent() &&
                  v.MarkEventRead(D.GID, D.clanSteamID.GetAccountID(), a) &&
                  v.Flush(),
                  u(D),
                  h(void 0),
                  r();
              },
              [a, v, r],
            ),
            { last_update_event: d, rgEvents: S } = St({
              ...o,
              fnEventShowModal: p,
            }),
            I = (0, c.useCallback)(() => {
              const {
                event_gid: D,
                announcement_gid: A,
                clan_account_id: wt,
              } = d;
              a && D && v.MarkEventRead(D, wt, a) && v.Flush(),
                h(A),
                u(null),
                r();
            }, [d, r, v, a]);
          (0, c.useEffect)(
            () => (
              (window.fnPartnerEvent_ShowInfiniteScroll = (D, A) => {
                h(A), u(null), h(A), r();
              }),
              () => {
                window.fnPartnerEvent_ShowInfiniteScroll &&
                  delete window.fnPartnerEvent_ShowInfiniteScroll;
              }
            ),
            [r],
          );
          const g = (0, x.Qn)(),
            B = !!d && !!d.rtime,
            R =
              B && !!d.announcement_gid && (!S || S.length == 0)
                ? d.announcement_gid
                : void 0;
          let T;
          return (
            B && R
              ? (T = (0, n.jsx)(ct, {
                  nUpdateTime: d.rtime,
                  announcementGID: R,
                  onClick: I,
                }))
              : B &&
                !R &&
                !g &&
                (T = (0, n.jsx)(dt, { nUpdateTime: d.rtime, onClick: I })),
            (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)(ft.EN, {
                  active: i,
                  children: (0, n.jsx)(gt, {
                    ...o,
                    announcementGID: L || f?.AnnouncementGID,
                    eventModel: f,
                    closeModal: E,
                  }),
                }),
                (0, n.jsx)(pt, {
                  elPostRowElement: T,
                  rgEvents: S,
                  fnEventShowModal: p,
                  bViewAllShowInfiniteScroll: t,
                  strClassName: s,
                }),
              ],
            })
          );
        }
        function St(o) {
          const {
              appid: a,
              event_customization: s,
              partnerEventStore: t,
              trackingLocation: i,
              fnEventShowModal: r,
            } = o,
            [l, f] = (0, c.useState)(null),
            [u, L] = (0, c.useState)(null),
            h = (0, Q.Y)(),
            [v] = (0, Z.Q)("emgid", void 0),
            [E] = (0, Z.Q)("announce_gid", void 0);
          return (
            (0, c.useEffect)(() => {
              const p = (0, ht.v)("EventWebRowEmbed");
              let d = !1;
              if (It(p)) {
                (d = p.bPreLoaded), f(p.last_update_event);
                const S = [];
                p.announcementGIDList.forEach((I) => {
                  const g = M.O3.GetClanEventFromAnnouncementGID(I);
                  g && S.push(g);
                }),
                  L(S);
              }
              d ||
                (async () => {
                  const I = await t.LoadAdjacentPartnerEvents(
                    void 0,
                    void 0,
                    a,
                    0,
                    2,
                    s,
                  );
                  L(I),
                    i &&
                      I &&
                      I.length > 0 &&
                      (I.filter((g) => g.BIsPartnerEvent()).forEach((g) =>
                        h.MarkEventShown(
                          g.GID,
                          g.clanSteamID.GetAccountID(),
                          i,
                        ),
                      ),
                      h.Flush());
                })();
            }, [a, s, r, t, h, i]),
            (0, c.useEffect)(() => {
              if (u != null && (v || E)) {
                const p = u.find((d) => d.GID === v || d.AnnouncementGID == E);
                p
                  ? r(p)
                  : (async () => {
                      const S = v
                        ? await t.LoadPartnerEventFromClanEventGID(a, v, 0)
                        : await t.LoadPartnerEventFromAnnoucementGID(a, E, 0);
                      S && L([...u, S]);
                    })();
              }
            }, [v, E, u, r, L, t, a]),
            { last_update_event: l, rgEvents: u }
          );
        }
        function It(o) {
          const a = o;
          return a && typeof a == "object"
            ? a.bPreLoaded !== void 0 &&
                typeof a.bPreLoaded == "boolean" &&
                Array.isArray(a.announcementGIDList)
            : !1;
        }
        function gt(o) {
          const {
              appid: a,
              partnerEventStore: s,
              trackingLocation: t,
              announcementGID: i,
              eventModel: r,
              closeModal: l,
            } = o,
            f = (0, x.Qn)();
          return (0, n.jsx)(O.N, {
            className: f ? void 0 : m.StoreHeaderAdjust,
            eventClassName: f ? m.GamePadUIWidthAdjust : void 0,
            appid: a,
            trackingLocation: t,
            announcementGID: i,
            partnerEventStore: s,
            eventModel: r ?? void 0,
            closeModal: l,
          });
        }
        function Dt(o) {
          const { appid: a } = o;
          let s = new Date(st.TS.NOW * 1e3),
            t = new Date(s.setUTCHours(0, 0, 0, 0) - 4320 * 60 * 60 * 1e3),
            i = Math.floor(t.getTime() / 1e3);
          return (0, n.jsx)("div", {
            className:
              "detailBox altFooter greenlight_home_box section announcements_row",
            children: (0, n.jsx)(Et, {
              appid: a,
              partnerEventStore: it.mh,
              event_customization: {
                require_tags: ["workshop"],
                rtime_oldestevent: i,
              },
              strClassName: m.Container,
              trackingLocation: P.Tc.My,
              bViewAllShowInfiniteScroll: !0,
            }),
          });
        }
        function Lt(o) {
          const [a, s] = c.useState(!0);
          return (
            c.useEffect(() => {
              $.Vw.Init(new X.D(x.TS.WEBAPI_BASE_URL)), M.O3.Init(), s(!1);
            }, []),
            a
              ? null
              : (0, n.jsx)(q.I.Provider, {
                  value: { bCanUseLink: !0 },
                  children: (0, n.jsxs)(w.dO, {
                    children: [
                      (0, n.jsx)(w.qh, {
                        exact: !0,
                        path: C.g5.ViewEventDetails(
                          ":appid_or_vanity_str",
                          ":oldAnnouncementGID(\\d+)",
                        ),
                        render: (t) => (0, n.jsx)(K, { ...t }),
                      }),
                      (0, n.jsx)(w.qh, {
                        exact: !0,
                        path: C.g5.Listing(":appid_or_vanity_str"),
                        render: (t) =>
                          (0, n.jsx)(
                            j,
                            {
                              ...t,
                              bPreventDismiss: !0,
                              trackingLocation: P.Tc.My,
                            },
                            "InfScroll_NoDismissApp_" + t.match.params.appid,
                          ),
                      }),
                      (0, n.jsx)(w.qh, {
                        exact: !0,
                        path: C.g5.WorkshopHub(":appid(\\d+)"),
                        render: (t) =>
                          (0, c.createElement)(Dt, {
                            ...t,
                            appid: +t.match.params.appid,
                            key: "Workshop" + t.match.params.appid,
                          }),
                      }),
                      (0, n.jsx)(w.qh, {
                        path: C.g5.AppHub(":appid"),
                        render: (t) =>
                          (0, c.createElement)(j, {
                            ...t,
                            key: "InfScroll_App_" + t.match.params.appid,
                            trackingLocation: P.Tc.My,
                          }),
                      }),
                      (0, n.jsx)(w.qh, {
                        path: C.g5.GroupHub(":group_vanity"),
                        render: (t) =>
                          (0, c.createElement)(j, {
                            ...t,
                            key: "InfScroll_App_" + t.match.params.group_vanity,
                            trackingLocation: P.Tc.My,
                          }),
                      }),
                      (0, n.jsx)(w.qh, { component: _.a }),
                    ],
                  }),
                })
          );
        }
      },
      12037: (N) => {
        N.exports = {
          "duration-app-launch": "800ms",
          Container: "_2Jd3MGaOu0C9Ydswf8Q4Tn",
          SectionButton: "_3n8swQFM3I_ARVM_5bPhAs",
          StoreHeaderAdjust: "_3YyCpH32HRhZtt4BOM5wM5",
          EventsSummariesCtn: "_1snIw0RvJduvDtqpmwtKJ9",
          LatestUpdateButtonCtn: "_2vEwZPNBe2qcTuxZf5cpiD",
          LatestUpdateIcon: "mq3ROvmcn5_HdCKG6JXDa",
          LatestUpdateButton: "_1TRFtE8IfXpDQ_loHnB_bU",
        };
      },
    },
  ]);
})();
