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
          GreenEnvelope: () => T,
          default: () => R,
          useSteamNotifications: () => U,
        });
      var n = i(22837),
        o = i(9344),
        r = i(65946),
        s = i(90626),
        l = i(68950),
        a = i(60011),
        c = i(23809),
        m = i(88997),
        u = i(88080),
        d = i(60395),
        f = i(12155),
        _ = i(52038),
        p = i(61859),
        v = i(30470),
        h = i(84811),
        N = i(29553),
        E = i.n(N),
        g = i(16264),
        y = i(60383);
      const b = new u.cE(),
        T = (0, h.Nr)(function (e) {
          const { bResponsiveHeader: t, notifications: i } = e;
          s.useEffect(() => {
            i && !b.m_bLoaded && b.ProcessNewNotificationPayload(i);
          }, [i]);
          const o = (0, c.KV)();
          (0, s.useEffect)(() => {
            b.setTransport(o),
              (window.RefreshSteamNotifications = () =>
                (async function (e) {
                  let t = null;
                  try {
                    t = await (0, u.tM)(
                      e,
                      v.iA.steamid,
                      (0, n.sf)(v.TS.LANGUAGE),
                      void 0,
                      !1,
                      !1,
                    );
                  } catch (e) {}
                  t && b.ProcessNewNotificationPayload(t);
                })(o));
          }, [o]);
          const r = U();
          return t
            ? s.createElement(
                s.Fragment,
                null,
                s.createElement(L, null),
                s.createElement(S, null),
              )
            : s.createElement(w, { nTotalUnviewed: r.nUnviewed });
        });
      function U() {
        return (0, r.q3)(() => ({
          notifications: b.m_rgNotificationRollups,
          summary: b.m_summary,
          loaded: b.m_bLoaded,
          nUnviewed: b.m_nUnviewed,
        }));
      }
      function A() {
        const e = U(),
          t = (0, l.LH)(),
          { data: i } = (0, a.S0)(t),
          n = (0, a.BM)(),
          o = null == i ? void 0 : i.settings;
        return e.notifications.filter(
          (e) => !(0, u.jb)(e.type, o, n) && !(0, u.XT)(e.item),
        );
      }
      function w(e) {
        const { nTotalUnviewed: t } = e,
          i = s.useRef(null),
          n = A(),
          [o, r] = s.useState(E().AnimateBell);
        s.useEffect(() => {
          i.current ||
            ((i.current = (0, m.lX)(
              s.createElement(M, { popupRef: i }),
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
            window.setTimeout(() => r(null), 2e3);
        }, []);
        const l = s.useCallback(
          (e) => {
            var t;
            !e &&
              (null === (t = i.current) || void 0 === t ? void 0 : t.visible) &&
              i.current.Hide();
          },
          [i],
        );
        return s.createElement(
          y.J,
          { trigger: "repeated", onVisibilityChange: l },
          s.createElement(
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
                    b.MarkAllItemsViewed();
                }
              },
              id: "green_envelope_menu_root",
              className: (0, _.A)(
                E().NotificationsButton,
                t ? E().Green : E().Grey,
                o,
              ),
            },
            s.createElement(d.$0s, {
              className: E().SVGNotifications,
              "aria-label": (0, p.we)("#NotificationsMenu_Title"),
            }),
          ),
        );
      }
      const M = (e) => {
          var t;
          const { popupRef: i } = e,
            n = s.useRef(null),
            [o, r] = s.useState(!1);
          s.useEffect(() => {
            var e, t;
            r(
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
          const l = o ? void 0 : E().MenuScrollbarHidden;
          return s.createElement(
            "div",
            {
              className: E().NotificationsMenu,
              onClick: () => {
                var e;
                return null === (e = null == i ? void 0 : i.current) ||
                  void 0 === e
                  ? void 0
                  : e.Hide();
              },
            },
            s.createElement(k, null),
            s.createElement(
              "div",
              {
                className: (0, _.A)(E().NotificationsMenuScrollable, l),
                ref: n,
              },
              s.createElement(L, null),
              s.createElement(B, null),
              s.createElement(O, null),
            ),
          );
        },
        k = () => {
          const e = `${v.TS.COMMUNITY_BASE_URL}profiles/${v.iA.steamid}/notifications`;
          return s.createElement(
            "div",
            { className: (0, _.A)(E().NotificationHeader) },
            s.createElement(
              "div",
              { className: E().AllNotificationsTitle },
              (0, p.we)("#NotificationsMenu_Title"),
            ),
            s.createElement(
              "a",
              { href: e },
              s.createElement(
                "div",
                { className: E().AllNotificationsButton },
                (0, p.we)("#NotificationsMenu_ViewAll"),
              ),
            ),
          );
        },
        S = () => {
          const e = `${v.TS.COMMUNITY_BASE_URL}profiles/${v.iA.steamid}/notifications`;
          return s.createElement(
            "div",
            {
              className: (0, _.A)(
                E().NotificationHeader,
                E().ResponsiveViewAll,
              ),
            },
            s.createElement(
              "a",
              { href: e },
              s.createElement(
                "div",
                { className: E().AllNotificationsButton },
                (0, p.we)("#NotificationsMenu_ViewAll"),
              ),
            ),
          );
        };
      function I(e, t, i) {
        t.read ||
          (i && 0 != i.button && 1 != i.button) ||
          !t.notification_id ||
          b.MarkItemRead(t.notification_id),
          e();
      }
      function B() {
        const e = A();
        return 0 == e.length
          ? null
          : s.createElement(
              "div",
              { className: E().NotificationsMenuEntriesContainer },
              e.map((e, t) =>
                s.createElement(g.R1, {
                  key: t,
                  rollup: e,
                  onNotificationClick: I,
                  uimode: n.lq.k_EUIMode_Web,
                  location: n.wZ.Tray,
                }),
              ),
            );
      }
      const C = [
        {
          fnUrl: () =>
            `${v.TS.COMMUNITY_BASE_URL}profiles/${v.iA.steamid}/inventory/#pending_gifts`,
          countItem: "pending_gifts",
          icon: f.pD,
          strLocToken: "#Notification_NewGiftsPinned_Body",
          feature: o.H9.k_EFeatureStore,
        },
        {
          fnUrl: () =>
            `${v.TS.COMMUNITY_BASE_URL}profiles/${v.iA.steamid}/home/invites`,
          countItem: "pending_invites",
          icon: f.sdo,
          strLocToken: "#Notification_FriendInvitePinned_Body",
          feature: o.H9.k_EFeatureFriends,
        },
        {
          fnUrl: () =>
            `${v.TS.COMMUNITY_BASE_URL}profiles/${v.iA.steamid}/notifications#comments`,
          countItem: "comments",
          icon: f.MwB,
          strLocToken: "#Notification_NewCommentPinned_Body",
          feature: o.H9.k_EFeatureCommunity,
        },
        {
          fnUrl: () =>
            `${v.TS.COMMUNITY_BASE_URL}profiles/${v.iA.steamid}/inventory`,
          countItem: "inventory_items",
          icon: f.rI_,
          strLocToken: "#Notification_NewItemAnnouncementPinned_Body",
          feature: o.H9.k_EFeatureProfile,
        },
        {
          fnUrl: () =>
            `${v.TS.COMMUNITY_BASE_URL}profiles/${v.iA.steamid}/tradeoffers`,
          countItem: "trade_offers",
          icon: f.h20,
          strLocToken: "#Notification_NewTradeOffersPinned_Body",
          feature: o.H9.k_EFeatureTrading,
        },
        {
          fnUrl: () =>
            `${v.TS.COMMUNITY_BASE_URL}profiles/${v.iA.steamid}/gamenotifications`,
          countItem: "async_game_updates",
          icon: f.wC1,
          strLocToken: "#Notification_NewAsyncGamePinned_Body",
        },
        {
          fnUrl: () => `${v.TS.COMMUNITY_BASE_URL}my/moderatormessages`,
          countItem: "moderator_messages",
          icon: d.hJ4,
          strLocToken: "#Notification_NewModeratorMessagePinned_Body",
          feature: o.H9.k_EFeatureCommunity,
        },
        {
          fnUrl: () => `${v.TS.HELP_BASE_URL}wizard/HelpRequests`,
          countItem: "help_request_replies",
          icon: f.Cv4,
          strLocToken: "#Notification_NewHelpRequestRepliesPinned_Body",
        },
        {
          fnUrl: () =>
            `${v.TS.STORE_BASE_URL}account/familymanagement/join?ft=${v.iA.steamid}`,
          countItem: "family_invites",
          icon: f.Qte,
          strLocToken: "#Notification_FamilyInvitePinned_Body",
        },
      ];
      function L() {
        const e = U();
        return s.createElement(
          s.Fragment,
          null,
          C.map((t) =>
            s.createElement(g.QR, {
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
      function O() {
        return s.createElement(
          "div",
          { className: E().EmptyNotificationsCtn },
          s.createElement(
            "div",
            { className: E().EmptyNotificationsTitle },
            (0, p.we)("#NotificationsList_EmptyTitle_New"),
          ),
          s.createElement(
            "div",
            { className: E().EmptyNotificationsBody },
            (0, p.we)("#NotificationsList_EmptyBody"),
          ),
        );
      }
      const R = T;
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
