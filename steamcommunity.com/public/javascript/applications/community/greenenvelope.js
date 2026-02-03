/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [976],
  {
    29553: (e) => {
      e.exports = {
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
    24830: (e, t, i) => {
      "use strict";
      i.r(t),
        i.d(t, {
          GreenEnvelope: () => b,
          default: () => O,
          useSteamNotifications: () => T,
        });
      var n = i(22837),
        o = i(65946),
        r = i(90626),
        s = i(68950),
        l = i(60011),
        a = i(23809),
        c = i(88997),
        m = i(88080),
        u = i(4869),
        d = i(12155),
        f = i(52038),
        _ = i(61859),
        p = i(30470),
        v = i(84811),
        h = i(29553),
        N = i.n(h),
        E = i(16264),
        g = i(60383);
      const y = new m.cE(),
        b = (0, v.Nr)(function (e) {
          const { bResponsiveHeader: t, notifications: i } = e;
          r.useEffect(() => {
            i && !y.m_bLoaded && y.ProcessNewNotificationPayload(i);
          }, [i]);
          const o = (0, a.KV)();
          (0, r.useEffect)(() => {
            y.setTransport(o),
              (window.RefreshSteamNotifications = () =>
                (async function (e) {
                  let t = null;
                  try {
                    t = await (0, m.tM)(
                      e,
                      p.iA.steamid,
                      (0, n.sf)(p.TS.LANGUAGE),
                      void 0,
                      !1,
                      !1,
                    );
                  } catch (e) {}
                  t && y.ProcessNewNotificationPayload(t);
                })(o));
          }, [o]);
          const s = T();
          return t
            ? r.createElement(
                r.Fragment,
                null,
                r.createElement(C, null),
                r.createElement(S, null),
              )
            : r.createElement(A, { nTotalUnviewed: s.nUnviewed });
        });
      function T() {
        return (0, o.q3)(() => ({
          notifications: y.m_rgNotificationRollups,
          summary: y.m_summary,
          loaded: y.m_bLoaded,
          nUnviewed: y.m_nUnviewed,
        }));
      }
      function U() {
        const e = T(),
          t = (0, s.LH)(),
          { data: i } = (0, l.S0)(t),
          n = (0, l.BM)(),
          o = null == i ? void 0 : i.settings;
        return e.notifications.filter(
          (e) => !(0, m.jb)(e.type, o, n) && !(0, m.XT)(e.item),
        );
      }
      function A(e) {
        const { nTotalUnviewed: t } = e,
          i = r.useRef(null),
          n = U(),
          [o, s] = r.useState(N().AnimateBell);
        r.useEffect(() => {
          i.current ||
            ((i.current = (0, c.lX)(
              r.createElement(w, { popupRef: i }),
              document.getElementById("green_envelope_menu_root"),
              {
                bPreferPopLeft: !0,
                bOverlapHorizontal: !0,
                strClassName: "GreenEnvelopeMenu",
              },
            )),
            i.current.Hide());
          const e = document.getElementById("header_notification_link");
          e && (e.style.cssText = "background-color: rgba(0,0,0,0)"),
            window.setTimeout(() => s(null), 2e3);
        }, []);
        const l = r.useCallback(
          (e) => {
            var t;
            !e &&
              (null === (t = i.current) || void 0 === t ? void 0 : t.visible) &&
              i.current.Hide();
          },
          [i],
        );
        return r.createElement(
          g.J,
          { trigger: "repeated", onVisibilityChange: l },
          r.createElement(
            "button",
            {
              onClick: () => {
                var e, t;
                if (
                  !(null === (e = i.current) || void 0 === e
                    ? void 0
                    : e.visible)
                ) {
                  null === (t = i.current) || void 0 === t || t.Show();
                  -1 != n.findIndex((e) => !e.item.viewed) &&
                    y.MarkAllItemsViewed();
                }
              },
              id: "green_envelope_menu_root",
              className: (0, f.A)(
                N().NotificationsButton,
                t ? N().Green : N().Grey,
                o,
              ),
            },
            r.createElement(u.$0s, {
              className: N().SVGNotifications,
              "aria-label": (0, _.we)("#NotificationsMenu_Title"),
            }),
          ),
        );
      }
      const w = (e) => {
          var t;
          const { popupRef: i } = e,
            n = r.useRef(null),
            [o, s] = r.useState(!1);
          r.useEffect(() => {
            var e, t;
            s(
              null != n.current &&
                (null === (e = n.current) || void 0 === e
                  ? void 0
                  : e.scrollHeight) >
                  (null === (t = n.current) || void 0 === t
                    ? void 0
                    : t.clientHeight),
            );
          }, [
            null === (t = n.current) || void 0 === t ? void 0 : t.scrollHeight,
            o,
          ]);
          const l = o ? void 0 : N().MenuScrollbarHidden;
          return r.createElement(
            "div",
            {
              className: N().NotificationsMenu,
              onClick: () => {
                var e;
                return null === (e = null == i ? void 0 : i.current) ||
                  void 0 === e
                  ? void 0
                  : e.Hide();
              },
            },
            r.createElement(M, null),
            r.createElement(
              "div",
              {
                className: (0, f.A)(N().NotificationsMenuScrollable, l),
                ref: n,
              },
              r.createElement(C, null),
              r.createElement(I, null),
              r.createElement(L, null),
            ),
          );
        },
        M = () => {
          const e = `${p.TS.COMMUNITY_BASE_URL}profiles/${p.iA.steamid}/notifications`;
          return r.createElement(
            "div",
            { className: (0, f.A)(N().NotificationHeader) },
            r.createElement(
              "div",
              { className: N().AllNotificationsTitle },
              (0, _.we)("#NotificationsMenu_Title"),
            ),
            r.createElement(
              "a",
              { href: e },
              r.createElement(
                "div",
                { className: N().AllNotificationsButton },
                (0, _.we)("#NotificationsMenu_ViewAll"),
              ),
            ),
          );
        },
        S = () => {
          const e = `${p.TS.COMMUNITY_BASE_URL}profiles/${p.iA.steamid}/notifications`;
          return r.createElement(
            "div",
            {
              className: (0, f.A)(
                N().NotificationHeader,
                N().ResponsiveViewAll,
              ),
            },
            r.createElement(
              "a",
              { href: e },
              r.createElement(
                "div",
                { className: N().AllNotificationsButton },
                (0, _.we)("#NotificationsMenu_ViewAll"),
              ),
            ),
          );
        };
      function B(e, t, i) {
        t.read ||
          (i && 0 != i.button && 1 != i.button) ||
          !t.notification_id ||
          y.MarkItemRead(t.notification_id),
          e();
      }
      function I() {
        const e = U();
        return 0 == e.length
          ? null
          : r.createElement(
              "div",
              { className: N().NotificationsMenuEntriesContainer },
              e.map((e, t) =>
                r.createElement(E.R1, {
                  key: t,
                  rollup: e,
                  onNotificationClick: B,
                  uimode: 3,
                  location: 3,
                }),
              ),
            );
      }
      const k = [
        {
          fnUrl: () =>
            `${p.TS.COMMUNITY_BASE_URL}profiles/${p.iA.steamid}/inventory/#pending_gifts`,
          countItem: "pending_gifts",
          icon: d.pD,
          strLocToken: "#Notification_NewGiftsPinned_Body",
          feature: 1,
        },
        {
          fnUrl: () =>
            `${p.TS.COMMUNITY_BASE_URL}profiles/${p.iA.steamid}/home/invites`,
          countItem: "pending_invites",
          icon: d.sdo,
          strLocToken: "#Notification_FriendInvitePinned_Body",
          feature: 4,
        },
        {
          fnUrl: () =>
            `${p.TS.COMMUNITY_BASE_URL}profiles/${p.iA.steamid}/notifications#comments`,
          countItem: "comments",
          icon: d.MwB,
          strLocToken: "#Notification_NewCommentPinned_Body",
          feature: 2,
        },
        {
          fnUrl: () =>
            `${p.TS.COMMUNITY_BASE_URL}profiles/${p.iA.steamid}/inventory`,
          countItem: "inventory_items",
          icon: d.rI_,
          strLocToken: "#Notification_NewItemAnnouncementPinned_Body",
          feature: 3,
        },
        {
          fnUrl: () =>
            `${p.TS.COMMUNITY_BASE_URL}profiles/${p.iA.steamid}/tradeoffers`,
          countItem: "trade_offers",
          icon: d.h20,
          strLocToken: "#Notification_NewTradeOffersPinned_Body",
          feature: 6,
        },
        {
          fnUrl: () =>
            `${p.TS.COMMUNITY_BASE_URL}profiles/${p.iA.steamid}/gamenotifications`,
          countItem: "async_game_updates",
          icon: d.wC1,
          strLocToken: "#Notification_NewAsyncGamePinned_Body",
        },
        {
          fnUrl: () => `${p.TS.COMMUNITY_BASE_URL}my/moderatormessages`,
          countItem: "moderator_messages",
          icon: u.hJ4,
          strLocToken: "#Notification_NewModeratorMessagePinned_Body",
          feature: 2,
        },
        {
          fnUrl: () => `${p.TS.HELP_BASE_URL}wizard/HelpRequests`,
          countItem: "help_request_replies",
          icon: d.Cv4,
          strLocToken: "#Notification_NewHelpRequestRepliesPinned_Body",
        },
        {
          fnUrl: () =>
            `${p.TS.STORE_BASE_URL}account/familymanagement/join?ft=${p.iA.steamid}`,
          countItem: "family_invites",
          icon: d.Qte,
          strLocToken: "#Notification_FamilyInvitePinned_Body",
        },
      ];
      function C() {
        const e = T();
        return r.createElement(
          r.Fragment,
          null,
          k.map((t) =>
            r.createElement(E.QR, {
              key: t.countItem,
              url: t.fnUrl(),
              count: e.summary[t.countItem],
              icon: t.icon,
              strLocToken: t.strLocToken,
              eFeature: t.feature,
            }),
          ),
        );
      }
      function L() {
        return r.createElement(
          "div",
          { className: N().EmptyNotificationsCtn },
          r.createElement(
            "div",
            { className: N().EmptyNotificationsTitle },
            (0, _.we)("#NotificationsList_EmptyTitle_New"),
          ),
          r.createElement(
            "div",
            { className: N().EmptyNotificationsBody },
            (0, _.we)("#NotificationsList_EmptyBody"),
          ),
        );
      }
      const O = b;
    },
    60383: (e, t, i) => {
      "use strict";
      i.d(t, { J: () => l });
      var n = i(34629),
        o = i(90626),
        r = i(56011),
        s = i(73745);
      class l extends o.Component {
        constructor() {
          super(...arguments),
            (this.m_observer = null),
            (this.m_refElement = o.createRef()),
            (this.m_elTracked = null),
            (this.m_bPreviouslyIntersecting = !1);
        }
        static GetScrollableClassname() {
          return "vt-scrollable";
        }
        BTriggerOnce() {
          return "once" == (this.props.trigger || "once");
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
        componentDidUpdate(e) {
          this.UpdateObserver(e);
        }
        UpdateObserver(e) {
          if (this.m_bPreviouslyIntersecting && this.BTriggerOnce()) return;
          this.m_observer &&
            e &&
            (e.rootMargin != this.m_observer.rootMargin ||
              e.thresholds != this.m_observer.thresholds) &&
            this.DestroyObserver();
          let t = this.m_refElement.current;
          if (
            (this.m_observer &&
              t != this.m_elTracked &&
              (this.m_elTracked && this.m_observer.unobserve(this.m_elTracked),
              (this.m_elTracked = null)),
            !this.m_observer && t)
          ) {
            let e = { root: this.FindScrollableAncestor(t) };
            this.props.rootMargin && (e.rootMargin = this.props.rootMargin),
              this.props.thresholds && (e.threshold = this.props.thresholds),
              (this.m_observer = (0, s.md)(t, this.OnIntersection, e));
          }
          this.m_observer &&
            t &&
            t != this.m_elTracked &&
            (this.m_observer.observe(t), (this.m_elTracked = t));
        }
        FindScrollableAncestor(e) {
          return r.Kf(e, (e) => {
            const t = this.props.horizontal
              ? window.getComputedStyle(e).overflowX
              : window.getComputedStyle(e).overflowY;
            return (
              "scroll" == t ||
              "auto" == t ||
              !!e.classList.contains(l.GetScrollableClassname())
            );
          });
        }
        OnIntersection(e, t) {
          let i = !1;
          for (const t of e)
            if (t.isIntersecting) {
              i = !0;
              break;
            }
          this.m_bPreviouslyIntersecting != i &&
            ((this.m_bPreviouslyIntersecting = i),
            this.props.onVisibilityChange && this.props.onVisibilityChange(i),
            i && this.BTriggerOnce() && this.DestroyObserver());
        }
        render() {
          let {
            onVisibilityChange: e,
            rootMargin: t,
            trigger: i,
            horizontal: n,
            ...r
          } = this.props;
          return o.createElement(
            "div",
            { ref: this.m_refElement, ...r },
            this.props.children,
          );
        }
      }
      (0, n.Cg)([s.oI], l.prototype, "OnIntersection", null);
    },
  },
]);
