/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [20976],
    {
      81944: (y, B, i) => {
        "use strict";
        i.d(B, { J: () => M });
        var e = i(7850),
          N = i(19298),
          u = i(90626),
          A = i(79089),
          f = i(18938),
          P = i(2259);
        class M extends u.Component {
          static GetScrollableClassname() {
            return "vt-scrollable";
          }
          m_observer = null;
          m_refElement = u.createRef();
          m_elTracked = null;
          m_bPreviouslyIntersecting = !1;
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
          componentDidUpdate(c) {
            this.UpdateObserver(c);
          }
          UpdateObserver(c) {
            if (this.m_bPreviouslyIntersecting && this.BTriggerOnce()) return;
            this.m_observer &&
              c &&
              (c.rootMargin != this.m_observer.rootMargin ||
                c.thresholds != this.m_observer.thresholds) &&
              this.DestroyObserver();
            let s = this.m_refElement.current;
            if (
              (this.m_observer &&
                s != this.m_elTracked &&
                (this.m_elTracked &&
                  this.m_observer.unobserve(this.m_elTracked),
                (this.m_elTracked = null)),
              !this.m_observer && s)
            ) {
              let _ = { root: this.FindScrollableAncestor(s) };
              this.props.rootMargin && (_.rootMargin = this.props.rootMargin),
                this.props.thresholds && (_.threshold = this.props.thresholds),
                (this.m_observer = (0, P.md)(s, this.OnIntersection, _));
            }
            this.m_observer &&
              s &&
              s != this.m_elTracked &&
              (this.m_observer.observe(s), (this.m_elTracked = s));
          }
          FindScrollableAncestor(c) {
            return (0, A.Kf)(c, (s) => {
              const E = this.props.horizontal
                ? window.getComputedStyle(s).overflowX
                : window.getComputedStyle(s).overflowY;
              return !!(
                E == "scroll" ||
                E == "auto" ||
                s.classList.contains(M.GetScrollableClassname())
              );
            });
          }
          HandleRef = (c) => {
            (0, f.cZ)(this.m_refElement, c),
              this.props.containerRef && (0, f.cZ)(this.props.containerRef, c);
          };
          OnIntersection = (c) => {
            let s = !1;
            for (const E of c)
              if (E.isIntersecting) {
                s = !0;
                break;
              }
            this.m_bPreviouslyIntersecting != s &&
              ((this.m_bPreviouslyIntersecting = s),
              this.props.onVisibilityChange && this.props.onVisibilityChange(s),
              s && this.BTriggerOnce() && this.DestroyObserver());
          };
          render() {
            let {
              onVisibilityChange: c,
              rootMargin: s,
              trigger: E,
              horizontal: _,
              containerRef: p,
              ...l
            } = this.props;
            return (0, e.jsx)(N.Z, {
              ref: this.HandleRef,
              ...l,
              children: this.props.children,
            });
          }
        }
      },
      72845: (y, B, i) => {
        "use strict";
        i.r(B),
          i.d(B, {
            GreenEnvelope: () => T,
            default: () => G,
            useSteamNotifications: () => O,
          });
        var e = i(7850),
          N = i(99412),
          u = i(79365),
          A = i(65946),
          f = i(90626),
          P = i(42993),
          M = i(3692),
          R = i(68312),
          c = i(16346),
          s = i(80862),
          E = i(56718),
          _ = i(36118),
          p = i(36707),
          l = i(18210),
          r = i(98609),
          L = i(25792),
          S = i(29553),
          a = i.n(S),
          U = i(90297),
          b = i(81944);
        const d = new s.cE(),
          T = (0, L.Nr)(function (o) {
            const { bResponsiveHeader: n, notifications: m } = o;
            f.useEffect(() => {
              m && !d.m_bLoaded && d.ProcessNewNotificationPayload(m);
            }, [m]);
            const h = (0, R.KV)();
            (0, f.useEffect)(() => {
              d.setTransport(h),
                (window.RefreshSteamNotifications = () => $(h));
            }, [h]);
            const v = O();
            return n
              ? (0, e.jsxs)(e.Fragment, {
                  children: [(0, e.jsx)(D, {}), (0, e.jsx)(W, {})],
                })
              : (0, e.jsx)(j, { nTotalUnviewed: v.nUnviewed });
          });
        function O() {
          return (0, A.q3)(() => ({
            notifications: d.m_rgNotificationRollups,
            summary: d.m_summary,
            loaded: d.m_bLoaded,
            nUnviewed: d.m_nUnviewed,
          }));
        }
        function I() {
          const t = O(),
            o = (0, P.LH)(),
            { data: n } = (0, M.S0)(o),
            m = (0, M.BM)(),
            h = n?.settings;
          return t.notifications.filter(
            (v) => !(0, s.jb)(v.type, h, m) && !(0, s.XT)(v.item),
          );
        }
        function j(t) {
          const { nTotalUnviewed: o } = t,
            n = f.useRef(null),
            m = I(),
            [h, v] = f.useState(a().AnimateBell);
          f.useEffect(() => {
            n.current ||
              ((n.current = (0, c.lX)(
                (0, e.jsx)(x, { popupRef: n }),
                document.getElementById("green_envelope_menu_root"),
                {
                  bPreferPopLeft: !0,
                  bOverlapHorizontal: !0,
                  strClassName: "GreenEnvelopeMenu",
                },
              )),
              n.current.Hide());
            const g = document.getElementById("header_notification_link");
            g && (g.style.cssText = "background-color: rgba(0,0,0,0)"),
              window.setTimeout(() => v(null), 2e3);
          }, []);
          const C = () => {
              n.current?.visible ||
                (n.current?.Show(),
                m.findIndex((F) => !F.item.viewed) != -1 &&
                  d.MarkAllItemsViewed());
            },
            V = f.useCallback(
              (g) => {
                !g && n.current?.visible && n.current.Hide();
              },
              [n],
            );
          return (0, e.jsx)(b.J, {
            trigger: "repeated",
            onVisibilityChange: V,
            children: (0, e.jsx)("button", {
              onClick: C,
              id: "green_envelope_menu_root",
              className: (0, p.A)(
                a().NotificationsButton,
                o ? a().Green : a().Grey,
                h,
              ),
              children: (0, e.jsx)(E.$0s, {
                className: a().SVGNotifications,
                "aria-label": (0, l.we)("#NotificationsMenu_Title"),
              }),
            }),
          });
        }
        const x = (t) => {
            const { popupRef: o } = t,
              n = f.useRef(null),
              [m, h] = f.useState(!1);
            f.useEffect(() => {
              h(
                n.current != null &&
                  n.current?.scrollHeight > n.current?.clientHeight,
              );
            }, [n.current?.scrollHeight, m]);
            const v = m ? void 0 : a().MenuScrollbarHidden;
            return (0, e.jsxs)("div", {
              className: a().NotificationsMenu,
              onClick: () => o?.current?.Hide(),
              children: [
                (0, e.jsx)(K, {}),
                (0, e.jsxs)("div", {
                  className: (0, p.A)(a().NotificationsMenuScrollable, v),
                  ref: n,
                  children: [
                    (0, e.jsx)(D, {}),
                    (0, e.jsx)(H, {}),
                    (0, e.jsx)(z, {}),
                  ],
                }),
              ],
            });
          },
          K = () => {
            const t = `${r.TS.COMMUNITY_BASE_URL}profiles/${r.iA.steamid}/notifications`;
            return (0, e.jsxs)("div", {
              className: (0, p.A)(a().NotificationHeader),
              children: [
                (0, e.jsx)("div", {
                  className: a().AllNotificationsTitle,
                  children: (0, l.we)("#NotificationsMenu_Title"),
                }),
                (0, e.jsx)("a", {
                  href: t,
                  children: (0, e.jsx)("div", {
                    className: a().AllNotificationsButton,
                    children: (0, l.we)("#NotificationsMenu_ViewAll"),
                  }),
                }),
              ],
            });
          },
          W = () => {
            const t = `${r.TS.COMMUNITY_BASE_URL}profiles/${r.iA.steamid}/notifications`;
            return (0, e.jsx)("div", {
              className: (0, p.A)(
                a().NotificationHeader,
                a().ResponsiveViewAll,
              ),
              children: (0, e.jsx)("a", {
                href: t,
                children: (0, e.jsx)("div", {
                  className: a().AllNotificationsButton,
                  children: (0, l.we)("#NotificationsMenu_ViewAll"),
                }),
              }),
            });
          };
        function w(t, o, n) {
          !o.read &&
            (!n || n.button == 0 || n.button == 1) &&
            o.notification_id &&
            d.MarkItemRead(o.notification_id),
            t();
        }
        function H() {
          const t = I();
          return t.length == 0
            ? null
            : (0, e.jsx)("div", {
                className: a().NotificationsMenuEntriesContainer,
                children: t.map((o, n) =>
                  (0, e.jsx)(
                    U.R1,
                    {
                      rollup: o,
                      onNotificationClick: w,
                      uimode: N.yrU,
                      location: N.B3I,
                    },
                    n,
                  ),
                ),
              });
        }
        const Y = [
          {
            fnUrl: () =>
              `${r.TS.COMMUNITY_BASE_URL}profiles/${r.iA.steamid}/inventory/#pending_gifts`,
            countItem: "pending_gifts",
            icon: _.pD,
            fnLocalizeBody: (t) =>
              (0, l.Yp)("#Notification_NewGiftsPinned_Body", t),
            feature: u.ip,
          },
          {
            fnUrl: () =>
              `${r.TS.COMMUNITY_BASE_URL}profiles/${r.iA.steamid}/home/invites`,
            countItem: "pending_invites",
            icon: _.sdo,
            fnLocalizeBody: (t) =>
              (0, l.Yp)("#Notification_FriendInvitePinned_Body", t),
            feature: u.M,
          },
          {
            fnUrl: () =>
              `${r.TS.COMMUNITY_BASE_URL}profiles/${r.iA.steamid}/notifications#comments`,
            countItem: "comments",
            icon: _.MwB,
            fnLocalizeBody: (t) =>
              (0, l.Yp)("#Notification_NewCommentPinned_Body", t),
            feature: u.qR,
          },
          {
            fnUrl: () =>
              `${r.TS.COMMUNITY_BASE_URL}profiles/${r.iA.steamid}/inventory`,
            countItem: "inventory_items",
            icon: _.rI_,
            fnLocalizeBody: (t) =>
              (0, l.Yp)("#Notification_NewItemAnnouncementPinned_Body", t),
            feature: u.WJ,
          },
          {
            fnUrl: () =>
              `${r.TS.COMMUNITY_BASE_URL}profiles/${r.iA.steamid}/tradeoffers`,
            countItem: "trade_offers",
            icon: _.h20,
            fnLocalizeBody: (t) =>
              (0, l.Yp)("#Notification_NewTradeOffersPinned_Body", t),
            feature: u.ut,
          },
          {
            fnUrl: () =>
              `${r.TS.COMMUNITY_BASE_URL}profiles/${r.iA.steamid}/gamenotifications`,
            countItem: "async_game_updates",
            icon: _.wC1,
            fnLocalizeBody: (t) =>
              (0, l.Yp)("#Notification_NewAsyncGamePinned_Body", t),
          },
          {
            fnUrl: () => `${r.TS.COMMUNITY_BASE_URL}my/moderatormessages`,
            countItem: "moderator_messages",
            icon: E.hJ4,
            fnLocalizeBody: (t) =>
              (0, l.Yp)("#Notification_NewModeratorMessagePinned_Body", t),
            feature: u.qR,
          },
          {
            fnUrl: () => `${r.TS.HELP_BASE_URL}wizard/HelpRequests`,
            countItem: "help_request_replies",
            icon: _.Cv4,
            fnLocalizeBody: (t) =>
              (0, l.Yp)("#Notification_NewHelpRequestRepliesPinned_Body", t),
          },
          {
            fnUrl: () =>
              `${r.TS.STORE_BASE_URL}account/familymanagement/join?ft=${r.iA.steamid}`,
            countItem: "family_invites",
            icon: _.Qte,
            fnLocalizeBody: (t) =>
              (0, l.Yp)("#Notification_FamilyInvitePinned_Body", t),
          },
        ];
        function D() {
          const t = O();
          return (0, e.jsx)(e.Fragment, {
            children: Y.map((o) =>
              (0, e.jsx)(
                U.QR,
                {
                  url: o.fnUrl(),
                  count: t.summary[o.countItem],
                  icon: o.icon,
                  strBody: o.fnLocalizeBody(t.summary[o.countItem]),
                  eFeature: o.feature,
                },
                o.countItem,
              ),
            ),
          });
        }
        function z() {
          return (0, e.jsxs)("div", {
            className: a().EmptyNotificationsCtn,
            children: [
              (0, e.jsx)("div", {
                className: a().EmptyNotificationsTitle,
                children: (0, l.we)("#NotificationsList_EmptyTitle_New"),
              }),
              (0, e.jsx)("div", {
                className: a().EmptyNotificationsBody,
                children: (0, l.we)("#NotificationsList_EmptyBody"),
              }),
            ],
          });
        }
        const G = T;
        async function $(t) {
          let o = null;
          try {
            o = await (0, s.tM)(
              t,
              r.iA.steamid,
              (0, N.sfN)(r.TS.LANGUAGE),
              void 0,
              !1,
              !1,
            );
          } catch {}
          o && d.ProcessNewNotificationPayload(o);
        }
      },
      29553: (y) => {
        y.exports = {
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
