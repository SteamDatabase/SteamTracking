/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [4268],
  {
    12037: (e) => {
      e.exports = {
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
    59561: (e, n, t) => {
      "use strict";
      t.r(n), t.d(n, { default: () => Q });
      var a = t(90626),
        o = t(7850),
        i = t(43261),
        s = t(43527),
        r = t(6503);
      const c = (e) =>
        (0, a.createElement)(r.Io, {
          ...e,
          key: e.match.params.oldAnnouncementGID,
          bClearDirty: !0,
          bPreview: !1,
          bPreventRedirect: !0,
        });
      var l = t(92757),
        d = t(96059),
        p = t(51006),
        u = t(91254),
        m = t(16180),
        v = (t(64641), t(97058)),
        h = t(78327),
        _ = t(34629),
        w = t(75844),
        S = t(73745),
        f = t(8107),
        E = t(22797),
        I = t(4796),
        g = t(61859),
        D = t(14947);
      let L = class extends a.Component {
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
            : (window.fnPartnerEvent_ShowInfiniteScroll = (e, n) => {
                this.setState({ bShowModal: !0, appid: e, announcementGID: n });
              });
        }
        async LoadAppAndFirstEvent() {
          var e;
          const n = (0, h.Tc)(
            "eventinfinitescrolllanding",
            "application_config",
          );
          let t;
          n && "string" == typeof n && (t = n);
          const a = window.location.href.startsWith(
              h.TS.COMMUNITY_BASE_URL + "groups",
            ),
            o = a
              ? await I.ac.LoadOGGClanInfoForGroupVanity(
                  this.props.match.params.appid_or_vanity_str,
                )
              : await I.ac.LoadOGGClanInfoForIdentifier(
                  this.props.match.params.appid_or_vanity_str,
                );
          if ((console.log("output: ", (0, D.HO)(o), a), o))
            if (o.partner_events_enabled) {
              const n = await u.O3.LoadAdjacentPartnerEventsByAnnouncement(
                t,
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
                  null === (e = null == n ? void 0 : n[0]) || void 0 === e
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
            ? (0, o.jsx)(f.N, {
                appid: this.state.appid,
                announcementGID: this.state.announcementGID,
                clanSteamID: this.state.clanSteamID,
                closeModal: this.HideModal,
                partnerEventStore: u.O3,
                trackingLocation: this.props.trackingLocation,
                showAppHeader: !0,
                bPrimaryPageFeature: e,
              })
            : this.state.bLoadedLandingState
              ? (0, o.jsx)(E.t, { string: (0, g.we)("#Loading") })
              : (0, o.jsx)("div", {});
        }
      };
      (0, _.Cg)([S.oI], L.prototype, "HideModal", null),
        (L = (0, _.Cg)([w.PA], L));
      var x = t(66418),
        k = t(25888),
        A = t(88386),
        j = t(87652),
        b = t(45699),
        C = t(76217),
        G = t(84143),
        P = t(50433),
        M = t(78686),
        y = t(12037),
        B = t(12155);
      function F(e) {
        return (0, o.jsxs)("div", {
          className: y.LatestUpdateButtonCtn,
          children: [
            (0, o.jsx)("div", {
              className: y.LatestUpdateIcon,
              children: (0, o.jsx)(B.UTF, { role: "presentation" }),
            }),
            (0, o.jsx)(b.ml, {
              className: y.LatestUpdateButton,
              onClick: e.onClick,
              children: M.Z.Localize(
                "#EventBrowse_LatestUpdateTime_Button",
                (0, g._l)(e.nUpdateTime),
              ),
            }),
          ],
        });
      }
      function N(e) {
        const { nUpdateTime: n, announcementGID: t, onClick: a } = e,
          i = t ? u.O3.GetClanEventFromAnnouncementGID(t) : null,
          s = P.u;
        return (0, o.jsxs)("div", {
          className: y.Container,
          children: [
            (0, o.jsxs)("h2", {
              children: [
                (0, g.we)("#EventBrowse_LastUpdateDate", (0, g._l)(n)),
                (0, o.jsx)(b.ml, {
                  className: y.SectionButton,
                  onClick: (e) => {
                    null == a || a(), e.stopPropagation(), e.preventDefault();
                  },
                  children: (0, g.we)("#EventBrowse_MoreEventsBtn"),
                }),
              ],
            }),
            !!i &&
              (0, o.jsx)(C.Z, {
                className: y.EventsSummariesCtn,
                "flow-children": "column",
                navEntryPreferPosition: G.iU.PREFERRED_CHILD,
                children: (0, o.jsx)(s, {
                  event: i,
                  onClick: (e) => {
                    null == a || a(), e.stopPropagation(), e.preventDefault();
                  },
                }),
              }),
          ],
        });
      }
      var U = t(7445),
        T = t(32803),
        H = t(9646),
        R = t(13871);
      const O = 500;
      function q(e) {
        const {
            strClassName: n,
            rgEvents: t,
            fnEventShowModal: a,
            elPostRowElement: i,
            bViewAllShowInfiniteScroll: s,
            nSummaryMaxLength: r,
          } = e,
          c = (0, H.d)(),
          l = (0, R.R7)(),
          d = (0, h.Qn)();
        let p = 2,
          u = O + 1;
        return (
          l.ownerWindow.window
            ? (u = l.ownerWindow.window.innerWidth)
            : c.viewportWidth && (u = c.viewportWidth.value),
          (p = u <= O ? 1 : 2),
          t && 0 == t.length && !i
            ? null
            : (0, o.jsxs)(C.Z, {
                className: n,
                "flow-children": "row",
                children: [
                  !!t &&
                    t.length > 0 &&
                    (0, o.jsx)("div", {
                      className: y.Container,
                      children: (0, o.jsxs)(U.q, {
                        children: [
                          (0, o.jsxs)("h2", {
                            children: [
                              M.Z.Localize("#EventBrowse_RecentEvents"),
                              !d &&
                                !!t &&
                                (0, o.jsx)(o.Fragment, {
                                  children:
                                    s && a
                                      ? (0, o.jsx)(b.ml, {
                                          className: y.SectionButton,
                                          onClick: () => a(t[0]),
                                          children: M.Z.Localize(
                                            "#EventBrowse_MoreEventsBtn",
                                          ),
                                        })
                                      : (0, o.jsx)(T.tj, {
                                          eventModel: t[0],
                                          route: T.PH.k_eViewWebSiteHub,
                                          className: y.SectionButton,
                                          children: M.Z.Localize(
                                            "#EventBrowse_MoreEventsBtn",
                                          ),
                                        }),
                                }),
                            ],
                          }),
                          (0, o.jsx)("div", {
                            className: y.EventsSummariesCtn,
                            children: t.slice(0, p).map((e) => {
                              const n =
                                a && !(0, T.sY)()
                                  ? (n) => {
                                      a(e),
                                        n.stopPropagation(),
                                        n.preventDefault();
                                    }
                                  : void 0;
                              return (0, o.jsx)(
                                P.u,
                                { event: e, onClick: n, nSummaryMaxLength: r },
                                e.GID,
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
      var W = t(55563),
        Z = t(9154);
      function V(e) {
        const {
            trackingLocation: n,
            strClassName: t,
            bViewAllShowInfiniteScroll: i,
          } = e,
          [s, r, c] = (0, S.uD)(),
          [l, d] = (0, a.useState)(null),
          [p, m] = (0, a.useState)(void 0),
          v = (0, j.Y)(),
          _ = (0, a.useCallback)(() => {
            d(null), c();
          }, [c]),
          w = (0, a.useCallback)(
            (e) => {
              n &&
                e &&
                e.BIsPartnerEvent() &&
                v.MarkEventRead(e.GID, e.clanSteamID.GetAccountID(), n) &&
                v.Flush(),
                d(e),
                m(void 0),
                r();
            },
            [n, v, r],
          ),
          { last_update_event: f, rgEvents: E } = (function (e) {
            const {
                appid: n,
                event_customization: t,
                partnerEventStore: o,
                trackingLocation: i,
                fnEventShowModal: s,
              } = e,
              [r, c] = (0, a.useState)(null),
              [l, d] = (0, a.useState)(null),
              p = (0, j.Y)(),
              [m] = (0, A.Q)("emgid", void 0),
              [v] = (0, A.Q)("announce_gid", void 0);
            return (
              (0, a.useEffect)(() => {
                const e = (0, W.v)("EventWebRowEmbed");
                let a = !1;
                if (
                  (function (e) {
                    const n = e;
                    if (n && "object" == typeof n)
                      return (
                        void 0 !== n.bPreLoaded &&
                        "boolean" == typeof n.bPreLoaded &&
                        Array.isArray(n.announcementGIDList)
                      );
                    return !1;
                  })(e)
                ) {
                  (a = e.bPreLoaded), c(e.last_update_event);
                  const n = [];
                  e.announcementGIDList.forEach((e) => {
                    const t = u.O3.GetClanEventFromAnnouncementGID(e);
                    t && n.push(t);
                  }),
                    d(n);
                }
                if (!a) {
                  (async () => {
                    const e = await o.LoadAdjacentPartnerEvents(
                      void 0,
                      void 0,
                      n,
                      0,
                      2,
                      t,
                    );
                    d(e),
                      i &&
                        e &&
                        e.length > 0 &&
                        (e
                          .filter((e) => e.BIsPartnerEvent())
                          .forEach((e) =>
                            p.MarkEventShown(
                              e.GID,
                              e.clanSteamID.GetAccountID(),
                              i,
                            ),
                          ),
                        p.Flush());
                  })();
                }
              }, [n, t, s, o, p, i]),
              (0, a.useEffect)(() => {
                if (null != l && (m || v)) {
                  const e = l.find(
                    (e) => e.GID === m || e.AnnouncementGID == v,
                  );
                  if (e) s(e);
                  else {
                    (async () => {
                      const e = m
                        ? await o.LoadPartnerEventFromClanEventGID(n, m, 0)
                        : await o.LoadPartnerEventFromAnnoucementGID(n, v, 0);
                      e && d([...l, e]);
                    })();
                  }
                }
              }, [m, v, l, s, d, o, n]),
              { last_update_event: r, rgEvents: l }
            );
          })({ ...e, fnEventShowModal: w }),
          I = (0, a.useCallback)(() => {
            const { event_gid: e, announcement_gid: t, clan_account_id: a } = f;
            n && e && v.MarkEventRead(e, a, n) && v.Flush(), m(t), d(null), r();
          }, [f, r, v, n]);
        (0, a.useEffect)(
          () => (
            (window.fnPartnerEvent_ShowInfiniteScroll = (e, n) => {
              m(n), d(null), m(n), r();
            }),
            () => {
              window.fnPartnerEvent_ShowInfiniteScroll &&
                delete window.fnPartnerEvent_ShowInfiniteScroll;
            }
          ),
          [r],
        );
        const g = (0, h.Qn)(),
          D = !!f && !!f.rtime,
          L =
            D && !!f.announcement_gid && (!E || 0 == E.length)
              ? f.announcement_gid
              : void 0;
        let x;
        return (
          D && L
            ? (x = (0, o.jsx)(N, {
                nUpdateTime: f.rtime,
                announcementGID: L,
                onClick: I,
              }))
            : !D ||
              L ||
              g ||
              (x = (0, o.jsx)(F, { nUpdateTime: f.rtime, onClick: I })),
          (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)(Z.EN, {
                active: s,
                children: (0, o.jsx)(J, {
                  ...e,
                  announcementGID:
                    p || (null == l ? void 0 : l.AnnouncementGID),
                  eventModel: l,
                  closeModal: _,
                }),
              }),
              (0, o.jsx)(q, {
                elPostRowElement: x,
                rgEvents: E,
                fnEventShowModal: w,
                bViewAllShowInfiniteScroll: i,
                strClassName: t,
              }),
            ],
          })
        );
      }
      function J(e) {
        const {
            appid: n,
            partnerEventStore: t,
            trackingLocation: a,
            announcementGID: i,
            eventModel: s,
            closeModal: r,
          } = e,
          c = (0, h.Qn)();
        return (0, o.jsx)(f.N, {
          className: c ? void 0 : y.StoreHeaderAdjust,
          eventClassName: c ? y.GamePadUIWidthAdjust : void 0,
          appid: n,
          trackingLocation: a,
          announcementGID: i,
          partnerEventStore: t,
          eventModel: null != s ? s : void 0,
          closeModal: r,
        });
      }
      function z(e) {
        const { appid: n } = e;
        let t = new Date(1e3 * x.TS.NOW),
          a = new Date(t.setUTCHours(0, 0, 0, 0) - 15552e6),
          s = Math.floor(a.getTime() / 1e3);
        return (0, o.jsx)("div", {
          className:
            "detailBox altFooter greenlight_home_box section announcements_row",
          children: (0, o.jsx)(V, {
            appid: n,
            partnerEventStore: k.mh,
            event_customization: {
              require_tags: ["workshop"],
              rtime_oldestevent: s,
            },
            strClassName: y.Container,
            trackingLocation: i.Tc.My,
            bViewAllShowInfiniteScroll: !0,
          }),
        });
      }
      function Q(e) {
        const [n, t] = a.useState(!0);
        return (
          a.useEffect(() => {
            p.Vw.Init(new d.D(h.TS.WEBAPI_BASE_URL)), u.O3.Init(), t(!1);
          }, []),
          n
            ? null
            : (0, o.jsx)(m.I.Provider, {
                value: { bCanUseLink: !0 },
                children: (0, o.jsxs)(l.dO, {
                  children: [
                    (0, o.jsx)(l.qh, {
                      exact: !0,
                      path: s.g5.ViewEventDetails(
                        ":appid_or_vanity_str",
                        ":oldAnnouncementGID(\\d+)",
                      ),
                      render: (e) => (0, o.jsx)(c, { ...e }),
                    }),
                    (0, o.jsx)(l.qh, {
                      exact: !0,
                      path: s.g5.Listing(":appid_or_vanity_str"),
                      render: (e) =>
                        (0, o.jsx)(
                          L,
                          {
                            ...e,
                            bPreventDismiss: !0,
                            trackingLocation: i.Tc.My,
                          },
                          "InfScroll_NoDismissApp_" + e.match.params.appid,
                        ),
                    }),
                    (0, o.jsx)(l.qh, {
                      exact: !0,
                      path: s.g5.WorkshopHub(":appid(\\d+)"),
                      render: (e) =>
                        (0, a.createElement)(z, {
                          ...e,
                          appid: +e.match.params.appid,
                          key: "Workshop" + e.match.params.appid,
                        }),
                    }),
                    (0, o.jsx)(l.qh, {
                      path: s.g5.AppHub(":appid"),
                      render: (e) =>
                        (0, a.createElement)(L, {
                          ...e,
                          key: "InfScroll_App_" + e.match.params.appid,
                          trackingLocation: i.Tc.My,
                        }),
                    }),
                    (0, o.jsx)(l.qh, {
                      path: s.g5.GroupHub(":group_vanity"),
                      render: (e) =>
                        (0, a.createElement)(L, {
                          ...e,
                          key: "InfScroll_App_" + e.match.params.group_vanity,
                          trackingLocation: i.Tc.My,
                        }),
                    }),
                    (0, o.jsx)(l.qh, { component: v.a }),
                  ],
                }),
              })
        );
      }
    },
  },
]);
