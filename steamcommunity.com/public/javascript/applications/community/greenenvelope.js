/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [20976],
    {
      81944: (U, B, n) => {
        "use strict";
        n.d(B, { J: () => h });
        var e = n(7850),
          g = n(19298),
          v = n(90626),
          T = n(79089),
          f = n(18938),
          I = n(2259),
          P = Object.defineProperty,
          D = (M, i, o) =>
            i in M
              ? P(M, i, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: o,
                })
              : (M[i] = o),
          E = (M, i, o) => D(M, typeof i != "symbol" ? i + "" : i, o);
        class h extends v.Component {
          constructor() {
            super(...arguments),
              E(this, "m_observer", null),
              E(this, "m_refElement", v.createRef()),
              E(this, "m_elTracked", null),
              E(this, "m_bPreviouslyIntersecting", !1),
              E(this, "HandleRef", (i) => {
                (0, f.cZ)(this.m_refElement, i),
                  this.props.containerRef &&
                    (0, f.cZ)(this.props.containerRef, i);
              }),
              E(this, "OnIntersection", (i) => {
                let o = !1;
                for (const l of i)
                  if (l.isIntersecting) {
                    o = !0;
                    break;
                  }
                this.m_bPreviouslyIntersecting != o &&
                  ((this.m_bPreviouslyIntersecting = o),
                  this.props.onVisibilityChange &&
                    this.props.onVisibilityChange(o),
                  o && this.BTriggerOnce() && this.DestroyObserver());
              });
          }
          static GetScrollableClassname() {
            return "vt-scrollable";
          }
          BTriggerOnce() {
            return (this.props.trigger || "once") == "once";
          }
          GetBoundingClientRect() {
            return this.m_refElement.current
              ? this.m_refElement.current.getBoundingClientRect()
              : null;
          }
          DestroyObserver() {
            this.m_observer &&
              (this.m_observer.disconnect(),
              (this.m_observer = null),
              (this.m_elTracked = null));
          }
          componentWillUnmount() {
            this.DestroyObserver();
          }
          componentDidMount() {
            this.UpdateObserver(null);
          }
          componentDidUpdate(i) {
            this.UpdateObserver(i);
          }
          UpdateObserver(i) {
            if (this.m_bPreviouslyIntersecting && this.BTriggerOnce()) return;
            this.m_observer &&
              i &&
              (i.rootMargin != this.m_observer.rootMargin ||
                i.thresholds != this.m_observer.thresholds) &&
              this.DestroyObserver();
            let o = this.m_refElement.current;
            if (
              (this.m_observer &&
                o != this.m_elTracked &&
                (this.m_elTracked &&
                  this.m_observer.unobserve(this.m_elTracked),
                (this.m_elTracked = null)),
              !this.m_observer && o)
            ) {
              let s = { root: this.FindScrollableAncestor(o) };
              this.props.rootMargin && (s.rootMargin = this.props.rootMargin),
                this.props.thresholds && (s.threshold = this.props.thresholds),
                (this.m_observer = (0, I.md)(o, this.OnIntersection, s));
            }
            this.m_observer &&
              o &&
              o != this.m_elTracked &&
              (this.m_observer.observe(o), (this.m_elTracked = o));
          }
          FindScrollableAncestor(i) {
            return (0, T.Kf)(i, (o) => {
              const l = this.props.horizontal
                ? window.getComputedStyle(o).overflowX
                : window.getComputedStyle(o).overflowY;
              return !!(
                l == "scroll" ||
                l == "auto" ||
                o.classList.contains(h.GetScrollableClassname())
              );
            });
          }
          render() {
            let {
              onVisibilityChange: i,
              rootMargin: o,
              trigger: l,
              horizontal: s,
              containerRef: R,
              ...C
            } = this.props;
            return (0, e.jsx)(g.Z, {
              ref: this.HandleRef,
              ...C,
              children: this.props.children,
            });
          }
        }
      },
      72845: (U, B, n) => {
        "use strict";
        n.r(B),
          n.d(B, {
            GreenEnvelope: () => b,
            default: () => V,
            useSteamNotifications: () => y,
          });
        var e = n(7850),
          g = n(99412),
          v = n(79365),
          T = n(65946),
          f = n(90626),
          I = n(42993),
          P = n(3692),
          D = n(68312),
          E = n(16346),
          h = n(80862),
          M = n(56718),
          i = n(36118),
          o = n(36707),
          l = n(18210),
          s = n(98609),
          R = n(25792),
          C = n(29553),
          c = n.n(C),
          L = n(90297),
          x = n(81944);
        const d = new h.cE(),
          b = (0, R.Nr)(function (r) {
            const { bResponsiveHeader: a, notifications: _ } = r;
            f.useEffect(() => {
              _ && !d.m_bLoaded && d.ProcessNewNotificationPayload(_);
            }, [_]);
            const u = (0, D.KV)();
            (0, f.useEffect)(() => {
              d.setTransport(u),
                (window.RefreshSteamNotifications = () => F(u));
            }, [u]);
            const p = y();
            return a
              ? (0, e.jsxs)(e.Fragment, {
                  children: [(0, e.jsx)(j, {}), (0, e.jsx)(H, {})],
                })
              : (0, e.jsx)(K, { nTotalUnviewed: p.nUnviewed });
          });
        function y() {
          return (0, T.q3)(() => ({
            notifications: d.m_rgNotificationRollups,
            summary: d.m_summary,
            loaded: d.m_bLoaded,
            nUnviewed: d.m_nUnviewed,
          }));
        }
        function S() {
          const t = y(),
            r = (0, I.LH)(),
            { data: a } = (0, P.S0)(r),
            _ = (0, P.BM)(),
            u = a == null ? void 0 : a.settings;
          return t.notifications.filter(
            (p) => !(0, h.jb)(p.type, u, _) && !(0, h.XT)(p.item),
          );
        }
        function K(t) {
          const { nTotalUnviewed: r } = t,
            a = f.useRef(null),
            _ = S(),
            [u, p] = f.useState(c().AnimateBell);
          f.useEffect(() => {
            a.current ||
              ((a.current = (0, E.lX)(
                (0, e.jsx)(W, { popupRef: a }),
                document.getElementById("green_envelope_menu_root"),
                {
                  bPreferPopLeft: !0,
                  bOverlapHorizontal: !0,
                  strClassName: "GreenEnvelopeMenu",
                },
              )),
              a.current.Hide());
            const m = document.getElementById("header_notification_link");
            m && (m.style.cssText = "background-color: rgba(0,0,0,0)"),
              window.setTimeout(() => p(null), 2e3);
          }, []);
          const A = () => {
              var m, O;
              ((m = a.current) != null && m.visible) ||
                ((O = a.current) == null || O.Show(),
                _.findIndex((J) => !J.item.viewed) != -1 &&
                  d.MarkAllItemsViewed());
            },
            N = f.useCallback(
              (m) => {
                var O;
                !m && (O = a.current) != null && O.visible && a.current.Hide();
              },
              [a],
            );
          return (0, e.jsx)(x.J, {
            trigger: "repeated",
            onVisibilityChange: N,
            children: (0, e.jsx)("button", {
              onClick: A,
              id: "green_envelope_menu_root",
              className: (0, o.A)(
                c().NotificationsButton,
                r ? c().Green : c().Grey,
                u,
              ),
              children: (0, e.jsx)(M.$0s, {
                className: c().SVGNotifications,
                "aria-label": (0, l.we)("#NotificationsMenu_Title"),
              }),
            }),
          });
        }
        const W = (t) => {
            var r;
            const { popupRef: a } = t,
              _ = f.useRef(null),
              [u, p] = f.useState(!1);
            f.useEffect(() => {
              var N, m;
              p(
                _.current != null &&
                  ((N = _.current) == null ? void 0 : N.scrollHeight) >
                    ((m = _.current) == null ? void 0 : m.clientHeight),
              );
            }, [(r = _.current) == null ? void 0 : r.scrollHeight, u]);
            const A = u ? void 0 : c().MenuScrollbarHidden;
            return (0, e.jsxs)("div", {
              className: c().NotificationsMenu,
              onClick: () => {
                var N;
                return (N = a == null ? void 0 : a.current) == null
                  ? void 0
                  : N.Hide();
              },
              children: [
                (0, e.jsx)(w, {}),
                (0, e.jsxs)("div", {
                  className: (0, o.A)(c().NotificationsMenuScrollable, A),
                  ref: _,
                  children: [
                    (0, e.jsx)(j, {}),
                    (0, e.jsx)(z, {}),
                    (0, e.jsx)($, {}),
                  ],
                }),
              ],
            });
          },
          w = () => {
            const t = `${s.TS.COMMUNITY_BASE_URL}profiles/${s.iA.steamid}/notifications`;
            return (0, e.jsxs)("div", {
              className: (0, o.A)(c().NotificationHeader),
              children: [
                (0, e.jsx)("div", {
                  className: c().AllNotificationsTitle,
                  children: (0, l.we)("#NotificationsMenu_Title"),
                }),
                (0, e.jsx)("a", {
                  href: t,
                  children: (0, e.jsx)("div", {
                    className: c().AllNotificationsButton,
                    children: (0, l.we)("#NotificationsMenu_ViewAll"),
                  }),
                }),
              ],
            });
          },
          H = () => {
            const t = `${s.TS.COMMUNITY_BASE_URL}profiles/${s.iA.steamid}/notifications`;
            return (0, e.jsx)("div", {
              className: (0, o.A)(
                c().NotificationHeader,
                c().ResponsiveViewAll,
              ),
              children: (0, e.jsx)("a", {
                href: t,
                children: (0, e.jsx)("div", {
                  className: c().AllNotificationsButton,
                  children: (0, l.we)("#NotificationsMenu_ViewAll"),
                }),
              }),
            });
          };
        function Y(t, r, a) {
          !r.read &&
            (!a || a.button == 0 || a.button == 1) &&
            r.notification_id &&
            d.MarkItemRead(r.notification_id),
            t();
        }
        function z() {
          const t = S();
          return t.length == 0
            ? null
            : (0, e.jsx)("div", {
                className: c().NotificationsMenuEntriesContainer,
                children: t.map((r, a) =>
                  (0, e.jsx)(
                    L.R1,
                    {
                      rollup: r,
                      onNotificationClick: Y,
                      uimode: g.yrU,
                      location: g.B3I,
                    },
                    a,
                  ),
                ),
              });
        }
        const G = [
          {
            fnUrl: () =>
              `${s.TS.COMMUNITY_BASE_URL}profiles/${s.iA.steamid}/inventory/#pending_gifts`,
            countItem: "pending_gifts",
            icon: i.pD,
            fnLocalizeBody: (t) =>
              (0, l.Yp)("#Notification_NewGiftsPinned_Body", t),
            feature: v.ip,
          },
          {
            fnUrl: () =>
              `${s.TS.COMMUNITY_BASE_URL}profiles/${s.iA.steamid}/home/invites`,
            countItem: "pending_invites",
            icon: i.sdo,
            fnLocalizeBody: (t) =>
              (0, l.Yp)("#Notification_FriendInvitePinned_Body", t),
            feature: v.M,
          },
          {
            fnUrl: () =>
              `${s.TS.COMMUNITY_BASE_URL}profiles/${s.iA.steamid}/notifications#comments`,
            countItem: "comments",
            icon: i.MwB,
            fnLocalizeBody: (t) =>
              (0, l.Yp)("#Notification_NewCommentPinned_Body", t),
            feature: v.qR,
          },
          {
            fnUrl: () =>
              `${s.TS.COMMUNITY_BASE_URL}profiles/${s.iA.steamid}/inventory`,
            countItem: "inventory_items",
            icon: i.rI_,
            fnLocalizeBody: (t) =>
              (0, l.Yp)("#Notification_NewItemAnnouncementPinned_Body", t),
            feature: v.WJ,
          },
          {
            fnUrl: () =>
              `${s.TS.COMMUNITY_BASE_URL}profiles/${s.iA.steamid}/tradeoffers`,
            countItem: "trade_offers",
            icon: i.h20,
            fnLocalizeBody: (t) =>
              (0, l.Yp)("#Notification_NewTradeOffersPinned_Body", t),
            feature: v.ut,
          },
          {
            fnUrl: () =>
              `${s.TS.COMMUNITY_BASE_URL}profiles/${s.iA.steamid}/gamenotifications`,
            countItem: "async_game_updates",
            icon: i.wC1,
            fnLocalizeBody: (t) =>
              (0, l.Yp)("#Notification_NewAsyncGamePinned_Body", t),
          },
          {
            fnUrl: () => `${s.TS.COMMUNITY_BASE_URL}my/moderatormessages`,
            countItem: "moderator_messages",
            icon: M.hJ4,
            fnLocalizeBody: (t) =>
              (0, l.Yp)("#Notification_NewModeratorMessagePinned_Body", t),
            feature: v.qR,
          },
          {
            fnUrl: () => `${s.TS.HELP_BASE_URL}wizard/HelpRequests`,
            countItem: "help_request_replies",
            icon: i.Cv4,
            fnLocalizeBody: (t) =>
              (0, l.Yp)("#Notification_NewHelpRequestRepliesPinned_Body", t),
          },
          {
            fnUrl: () =>
              `${s.TS.STORE_BASE_URL}account/familymanagement/join?ft=${s.iA.steamid}`,
            countItem: "family_invites",
            icon: i.Qte,
            fnLocalizeBody: (t) =>
              (0, l.Yp)("#Notification_FamilyInvitePinned_Body", t),
          },
        ];
        function j() {
          const t = y();
          return (0, e.jsx)(e.Fragment, {
            children: G.map((r) =>
              (0, e.jsx)(
                L.QR,
                {
                  url: r.fnUrl(),
                  count: t.summary[r.countItem],
                  icon: r.icon,
                  strBody: r.fnLocalizeBody(t.summary[r.countItem]),
                  eFeature: r.feature,
                },
                r.countItem,
              ),
            ),
          });
        }
        function $() {
          return (0, e.jsxs)("div", {
            className: c().EmptyNotificationsCtn,
            children: [
              (0, e.jsx)("div", {
                className: c().EmptyNotificationsTitle,
                children: (0, l.we)("#NotificationsList_EmptyTitle_New"),
              }),
              (0, e.jsx)("div", {
                className: c().EmptyNotificationsBody,
                children: (0, l.we)("#NotificationsList_EmptyBody"),
              }),
            ],
          });
        }
        const V = b;
        async function F(t) {
          let r = null;
          try {
            r = await (0, h.tM)(
              t,
              s.iA.steamid,
              (0, g.sfN)(s.TS.LANGUAGE),
              void 0,
              !1,
              !1,
            );
          } catch {}
          r && d.ProcessNewNotificationPayload(r);
        }
      },
      29553: (U) => {
        U.exports = {
          NotificationsMenu: "_3EPagkYPxulGbe-5invUhK",
          NotificationsMenuEntriesContainer: "m0H4PhlsBcw0NzlQje7q",
          NotificationsMenuScrollable: "_2hgxpK_sWS7mDF66uPetpF",
          MenuScrollbarHidden: "_2Qeur5RWXHnW-xneBJUfH-",
          NotificationHeader: "_1Uh_y1atXoMOUxGyUQK8vC",
          ResponsiveViewAll: "_2q-LyEsEZpxFZBbqO07xgp",
          AllNotificationsTitle: "-Dpw5WXg2gjckpFAkP_lg",
          AllNotificationsButton: "_1OH7OiFxIJo5Y7Z4Z6U6iO",
          NotificationsButton: "_1jW5_Ycv6jGKu28A1OSIQK",
          SVGNotifications: "_13fwmIK8Ajo0qndUS5zb7E",
          Grey: "_34A9kjlnmgfUWSmr16VjXE",
          Disabled: "_3h1sV2qrp20U37VwC47pM2",
          Green: "_2Hpe0_DGY0TBz45Lg0zUr9",
          AnimateBell: "_34o7mvTYzowbNAllqYUQuJ",
          NotificationBellAnimation: "_3W6ngOzFfcJJpftaQ5t9bk",
          NotificationBellUvula: "xpAr9gP3YAkKomrGUivf8",
          EmptyNotificationsCtn: "_2a4xLIvDI3rmLxVfLMQFTz",
          EmptyNotificationsTitle: "_2SIA4NMfduV_HWDptv6cAK",
          EmptyNotificationsBody: "EpEznkfiKxcqI9p52OmRx",
        };
      },
    },
  ]);
})();
