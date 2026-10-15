/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [74268],
    {
      11161: (T, N, e) => {
        "use strict";
        e.r(N), e.d(N, { default: () => wt });
        var n = e(7850),
          c = e(90626),
          P = e(98112),
          C = e(58732),
          X = e(9608);
        const Y = (a) =>
          (0, c.createElement)(X.Io, {
            ...a,
            key: a.match.params.oldAnnouncementGID,
            bClearDirty: !0,
            bPreview: !1,
            bPreventRedirect: !0,
          });
        var L = e(92757),
          K = e(77008),
          $ = e(85528),
          y = e(77495),
          q = e(10303),
          xt = e(64641),
          _ = e(90783),
          x = e(3166),
          tt = e(75844),
          O = e(54963),
          H = e(19188),
          nt = e(85599),
          k = e(813),
          A = e(18210),
          et = e(14947),
          ot = Object.defineProperty,
          at = Object.getOwnPropertyDescriptor,
          W = (a, o, i, t) => {
            for (
              var s = t > 1 ? void 0 : t ? at(o, i) : o, r = a.length - 1, l;
              r >= 0;
              r--
            )
              (l = a[r]) && (s = (t ? l(o, i, s) : l(s)) || s);
            return t && s && ot(o, i, s), s;
          };
        let j = class extends c.Component {
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
              : (window.fnPartnerEvent_ShowInfiniteScroll = (a, o) => {
                  this.setState({
                    bShowModal: !0,
                    appid: a,
                    announcementGID: o,
                  });
                });
          }
          async LoadAppAndFirstEvent() {
            var a;
            const o = (0, x.Tc)(
              "eventinfinitescrolllanding",
              "application_config",
            );
            let i;
            o && typeof o == "string" && (i = o);
            const t = window.location.href.startsWith(
                x.TS.COMMUNITY_BASE_URL + "groups",
              ),
              s = t
                ? await k.ac.LoadOGGClanInfoForGroupVanity(
                    this.props.match.params.appid_or_vanity_str,
                  )
                : await k.ac.LoadOGGClanInfoForIdentifier(
                    this.props.match.params.appid_or_vanity_str,
                  );
            if ((console.log("output: ", (0, et.HO)(s), t), s))
              if (s.partner_events_enabled) {
                const r = await y.O3.LoadAdjacentPartnerEventsByAnnouncement(
                  i,
                  s.clanSteamID,
                  s.appid,
                  3,
                  3,
                );
                this.setState({
                  bLoadedLandingState: !1,
                  bShowModal: !0,
                  appid: s.appid,
                  clanSteamID: s.clanSteamID,
                  announcementGID:
                    (a = r == null ? void 0 : r[0]) == null
                      ? void 0
                      : a.AnnouncementGID,
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
            const { bPreventDismiss: a } = this.props;
            return this.state.bShowModal
              ? (0, n.jsx)(H.N, {
                  appid: this.state.appid,
                  announcementGID: this.state.announcementGID,
                  clanSteamID: this.state.clanSteamID,
                  closeModal: this.HideModal,
                  partnerEventStore: y.O3,
                  trackingLocation: this.props.trackingLocation,
                  showAppHeader: !0,
                  bPrimaryPageFeature: a,
                })
              : this.state.bLoadedLandingState
                ? (0, n.jsx)(nt.t, { string: (0, A.we)("#Loading") })
                : (0, n.jsx)("div", {});
          }
        };
        W([O.oI], j.prototype, "HideModal", 1), (j = W([tt.PA], j));
        var st = e(72609),
          it = e(75372),
          Z = e(71157),
          V = e(90537),
          U = e(24660),
          z = e(19298),
          rt = e(20169),
          J = e(95174),
          G = e(39905),
          m = e(12037),
          lt = e(36118);
        function dt(a) {
          return (0, n.jsxs)("div", {
            className: m.LatestUpdateButtonCtn,
            children: [
              (0, n.jsx)("div", {
                className: m.LatestUpdateIcon,
                children: (0, n.jsx)(lt.UTF, { role: "presentation" }),
              }),
              (0, n.jsx)(U.ml, {
                className: m.LatestUpdateButton,
                onClick: a.onClick,
                children: G.Z.Localize(
                  "#EventBrowse_LatestUpdateTime_Button",
                  (0, A._l)(a.nUpdateTime),
                ),
              }),
            ],
          });
        }
        function ct(a) {
          const { nUpdateTime: o, announcementGID: i, onClick: t } = a,
            s = i ? y.O3.GetClanEventFromAnnouncementGID(i) : null,
            r = J.u;
          return (0, n.jsxs)("div", {
            className: m.Container,
            children: [
              (0, n.jsxs)("h2", {
                children: [
                  (0, A.we)("#EventBrowse_LastUpdateDate", (0, A._l)(o)),
                  (0, n.jsx)(U.ml, {
                    className: m.SectionButton,
                    onClick: (l) => {
                      t == null || t(), l.stopPropagation(), l.preventDefault();
                    },
                    children: (0, A.we)("#EventBrowse_MoreEventsBtn"),
                  }),
                ],
              }),
              !!s &&
                (0, n.jsx)(z.Z, {
                  className: m.EventsSummariesCtn,
                  "flow-children": "column",
                  navEntryPreferPosition: rt.iU.PREFERRED_CHILD,
                  children: (0, n.jsx)(r, {
                    event: s,
                    onClick: (l) => {
                      t == null || t(), l.stopPropagation(), l.preventDefault();
                    },
                  }),
                }),
            ],
          });
        }
        var vt = e(54130),
          b = e(56492),
          mt = e(33902),
          ut = e(71568);
        const Q = 500;
        function pt(a) {
          const {
              strClassName: o,
              rgEvents: i,
              fnEventShowModal: t,
              elPostRowElement: s,
              bViewAllShowInfiniteScroll: r,
              nSummaryMaxLength: l,
            } = a,
            h = (0, mt.d)(),
            u = (0, ut.R7)(),
            w = (0, x.Qn)();
          let f = 2,
            v = Q + 1;
          return (
            u.ownerWindow.window
              ? (v = u.ownerWindow.window.innerWidth)
              : h.viewportWidth && (v = h.viewportWidth.value),
            (f = v <= Q ? 1 : 2),
            i && i.length == 0 && !s
              ? null
              : (0, n.jsxs)(z.Z, {
                  className: o,
                  "flow-children": "row",
                  children: [
                    !!i &&
                      i.length > 0 &&
                      (0, n.jsx)("div", {
                        className: m.Container,
                        children: (0, n.jsxs)(vt.q, {
                          children: [
                            (0, n.jsxs)("h2", {
                              children: [
                                G.Z.Localize("#EventBrowse_RecentEvents"),
                                !w &&
                                  !!i &&
                                  (0, n.jsx)(n.Fragment, {
                                    children:
                                      r && t
                                        ? (0, n.jsx)(U.ml, {
                                            className: m.SectionButton,
                                            onClick: () => t(i[0]),
                                            children: G.Z.Localize(
                                              "#EventBrowse_MoreEventsBtn",
                                            ),
                                          })
                                        : (0, n.jsx)(b.tj, {
                                            eventModel: i[0],
                                            route: b.PH.k_eViewWebSiteHub,
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
                              children: i.slice(0, f).map((E) => {
                                const p =
                                  t && !(0, b.sY)()
                                    ? (d) => {
                                        t(E),
                                          d.stopPropagation(),
                                          d.preventDefault();
                                      }
                                    : void 0;
                                return (0, n.jsx)(
                                  J.u,
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
                    s,
                  ],
                })
          );
        }
        var ht = e(49984),
          ft = e(2801);
        function Et(a) {
          const {
              trackingLocation: o,
              strClassName: i,
              bViewAllShowInfiniteScroll: t,
            } = a,
            [s, r, l] = (0, O.uD)(),
            [h, u] = (0, c.useState)(null),
            [w, f] = (0, c.useState)(void 0),
            v = (0, V.Y)(),
            E = (0, c.useCallback)(() => {
              u(null), l();
            }, [l]),
            p = (0, c.useCallback)(
              (D) => {
                o &&
                  D &&
                  D.BIsPartnerEvent() &&
                  v.MarkEventRead(D.GID, D.clanSteamID.GetAccountID(), o) &&
                  v.Flush(),
                  u(D),
                  f(void 0),
                  r();
              },
              [o, v, r],
            ),
            { last_update_event: d, rgEvents: I } = It({
              ...a,
              fnEventShowModal: p,
            }),
            S = (0, c.useCallback)(() => {
              const {
                event_gid: D,
                announcement_gid: M,
                clan_account_id: Lt,
              } = d;
              o && D && v.MarkEventRead(D, Lt, o) && v.Flush(),
                f(M),
                u(null),
                r();
            }, [d, r, v, o]);
          (0, c.useEffect)(
            () => (
              (window.fnPartnerEvent_ShowInfiniteScroll = (D, M) => {
                f(M), u(null), f(M), r();
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
            F =
              B && !!d.announcement_gid && (!I || I.length == 0)
                ? d.announcement_gid
                : void 0;
          let R;
          return (
            B && F
              ? (R = (0, n.jsx)(ct, {
                  nUpdateTime: d.rtime,
                  announcementGID: F,
                  onClick: S,
                }))
              : B &&
                !F &&
                !g &&
                (R = (0, n.jsx)(dt, { nUpdateTime: d.rtime, onClick: S })),
            (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)(ft.EN, {
                  active: s,
                  children: (0, n.jsx)(gt, {
                    ...a,
                    announcementGID:
                      w || (h == null ? void 0 : h.AnnouncementGID),
                    eventModel: h,
                    closeModal: E,
                  }),
                }),
                (0, n.jsx)(pt, {
                  elPostRowElement: R,
                  rgEvents: I,
                  fnEventShowModal: p,
                  bViewAllShowInfiniteScroll: t,
                  strClassName: i,
                }),
              ],
            })
          );
        }
        function It(a) {
          const {
              appid: o,
              event_customization: i,
              partnerEventStore: t,
              trackingLocation: s,
              fnEventShowModal: r,
            } = a,
            [l, h] = (0, c.useState)(null),
            [u, w] = (0, c.useState)(null),
            f = (0, V.Y)(),
            [v] = (0, Z.Q)("emgid", void 0),
            [E] = (0, Z.Q)("announce_gid", void 0);
          return (
            (0, c.useEffect)(() => {
              const p = (0, ht.v)("EventWebRowEmbed");
              let d = !1;
              if (St(p)) {
                (d = p.bPreLoaded), h(p.last_update_event);
                const I = [];
                p.announcementGIDList.forEach((S) => {
                  const g = y.O3.GetClanEventFromAnnouncementGID(S);
                  g && I.push(g);
                }),
                  w(I);
              }
              d ||
                (async () => {
                  const S = await t.LoadAdjacentPartnerEvents(
                    void 0,
                    void 0,
                    o,
                    0,
                    2,
                    i,
                  );
                  w(S),
                    s &&
                      S &&
                      S.length > 0 &&
                      (S.filter((g) => g.BIsPartnerEvent()).forEach((g) =>
                        f.MarkEventShown(
                          g.GID,
                          g.clanSteamID.GetAccountID(),
                          s,
                        ),
                      ),
                      f.Flush());
                })();
            }, [o, i, r, t, f, s]),
            (0, c.useEffect)(() => {
              if (u != null && (v || E)) {
                const p = u.find((d) => d.GID === v || d.AnnouncementGID == E);
                p
                  ? r(p)
                  : (async () => {
                      const I = v
                        ? await t.LoadPartnerEventFromClanEventGID(o, v, 0)
                        : await t.LoadPartnerEventFromAnnoucementGID(o, E, 0);
                      I && w([...u, I]);
                    })();
              }
            }, [v, E, u, r, w, t, o]),
            { last_update_event: l, rgEvents: u }
          );
        }
        function St(a) {
          const o = a;
          return o && typeof o == "object"
            ? o.bPreLoaded !== void 0 &&
                typeof o.bPreLoaded == "boolean" &&
                Array.isArray(o.announcementGIDList)
            : !1;
        }
        function gt(a) {
          const {
              appid: o,
              partnerEventStore: i,
              trackingLocation: t,
              announcementGID: s,
              eventModel: r,
              closeModal: l,
            } = a,
            h = (0, x.Qn)();
          return (0, n.jsx)(H.N, {
            className: h ? void 0 : m.StoreHeaderAdjust,
            eventClassName: h ? m.GamePadUIWidthAdjust : void 0,
            appid: o,
            trackingLocation: t,
            announcementGID: s,
            partnerEventStore: i,
            eventModel: r != null ? r : void 0,
            closeModal: l,
          });
        }
        function Dt(a) {
          const { appid: o } = a;
          let i = new Date(st.TS.NOW * 1e3),
            t = new Date(i.setUTCHours(0, 0, 0, 0) - 4320 * 60 * 60 * 1e3),
            s = Math.floor(t.getTime() / 1e3);
          return (0, n.jsx)("div", {
            className:
              "detailBox altFooter greenlight_home_box section announcements_row",
            children: (0, n.jsx)(Et, {
              appid: o,
              partnerEventStore: it.mh,
              event_customization: {
                require_tags: ["workshop"],
                rtime_oldestevent: s,
              },
              strClassName: m.Container,
              trackingLocation: P.Tc.My,
              bViewAllShowInfiniteScroll: !0,
            }),
          });
        }
        function wt(a) {
          const [o, i] = c.useState(!0);
          return (
            c.useEffect(() => {
              $.Vw.Init(new K.D(x.TS.WEBAPI_BASE_URL)), y.O3.Init(), i(!1);
            }, []),
            o
              ? null
              : (0, n.jsx)(q.I.Provider, {
                  value: { bCanUseLink: !0 },
                  children: (0, n.jsxs)(L.dO, {
                    children: [
                      (0, n.jsx)(L.qh, {
                        exact: !0,
                        path: C.g5.ViewEventDetails(
                          ":appid_or_vanity_str",
                          ":oldAnnouncementGID(\\d+)",
                        ),
                        render: (t) => (0, n.jsx)(Y, { ...t }),
                      }),
                      (0, n.jsx)(L.qh, {
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
                      (0, n.jsx)(L.qh, {
                        exact: !0,
                        path: C.g5.WorkshopHub(":appid(\\d+)"),
                        render: (t) =>
                          (0, c.createElement)(Dt, {
                            ...t,
                            appid: +t.match.params.appid,
                            key: "Workshop" + t.match.params.appid,
                          }),
                      }),
                      (0, n.jsx)(L.qh, {
                        path: C.g5.AppHub(":appid"),
                        render: (t) =>
                          (0, c.createElement)(j, {
                            ...t,
                            key: "InfScroll_App_" + t.match.params.appid,
                            trackingLocation: P.Tc.My,
                          }),
                      }),
                      (0, n.jsx)(L.qh, {
                        path: C.g5.GroupHub(":group_vanity"),
                        render: (t) =>
                          (0, c.createElement)(j, {
                            ...t,
                            key: "InfScroll_App_" + t.match.params.group_vanity,
                            trackingLocation: P.Tc.My,
                          }),
                      }),
                      (0, n.jsx)(L.qh, { component: _.a }),
                    ],
                  }),
                })
          );
        }
      },
      12037: (T) => {
        T.exports = {
          "duration-app-launch": "800ms",
          Container: "_2Jd3MGaOu0C9Ydswf8Q4Tn",
          SectionButton: "_3n8swQFM3I_ARVM_5bPhAs",
          StoreHeaderAdjust: "_3YyCpH32HRhZtt4BOM5wM5",
          EventsSummariesCtn: "_1snIw0RvJduvDtqpmwtKJ9",
          LatestUpdateButtonCtn: "_2vEwZPNBe2qcTuxZf5cpiD",
          LatestUpdateIcon: "mq3ROvmcn5_HdCKG6JXDa",
          LatestUpdateButton: "_1TRFtE8IfXpDQ_loHnB_bU",
          BackgroundAnimation: "_295HzH0_Gg7fchG1zO9Km7",
          "ItemFocusAnim-darkerGrey-nocolor": "_291aUneSnsR7SSD43BPEYt",
          "ItemFocusAnim-darkerGrey": "_3T-aeBZd_novjXZhPEqJ_L",
          "ItemFocusAnim-darkGreySettings": "ekd5ku98aKtUXOuTnlUpj",
          "ItemFocusAnim-darkGrey": "peNld_fsioxlGFxQfdd8I",
          "ItemFocusAnim-grey": "_1433gddOHXCko3qPvXFRFS",
          "ItemFocusAnim-translucent-white-10": "_3ZEmb3nXVV6Jl3vO3gd3n2",
          "ItemFocusAnim-translucent-white-20": "EoCuk2lmX0KUPR7Ja5J0J",
          "ItemFocusAnimBorder-darkGrey": "_3FtKchinLpLv8OXrbvS81w",
          "ItemFocusAnim-green": "_23vh8vhEvEmJ5bnq2YZfx8",
          focusAnimation: "wTWp1KqP_zaAfiOc2ovCo",
          hoverAnimation: "_2knkM4Dk-kiPNpW81PgE0Y",
        };
      },
    },
  ]);
})();
