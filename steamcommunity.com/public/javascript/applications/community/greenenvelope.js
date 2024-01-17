/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [3068],
  {
    88234: (e) => {
      e.exports = {
        NotificationsMenu: "greenenvelope_NotificationsMenu_DHpNP",
        NotificationsMenuEntriesContainer:
          "greenenvelope_NotificationsMenuEntriesContainer_1UQTO",
        NotificationsMenuScrollable:
          "greenenvelope_NotificationsMenuScrollable_3t5NP",
        MenuScrollbarHidden: "greenenvelope_MenuScrollbarHidden_20aP8",
        NotificationHeader: "greenenvelope_NotificationHeader_2CF6o",
        ResponsiveViewAll: "greenenvelope_ResponsiveViewAll_3jVNI",
        AllNotificationsTitle: "greenenvelope_AllNotificationsTitle_nyDUh",
        AllNotificationsButton: "greenenvelope_AllNotificationsButton__Oohj",
        NotificationsButton: "greenenvelope_NotificationsButton_2Z7Ed",
        SVGNotifications: "greenenvelope_SVGNotifications_D68s6",
        Grey: "greenenvelope_Grey_2Sj0M",
        Disabled: "greenenvelope_Disabled_3KMlw",
        Green: "greenenvelope_Green_1ad8S",
        AnimateBell: "greenenvelope_AnimateBell_2YD8w",
        NotificationBellAnimation:
          "greenenvelope_NotificationBellAnimation_1a4Fd",
        NotificationBellUvula: "greenenvelope_NotificationBellUvula_21Ilh",
        EmptyNotificationsCtn: "greenenvelope_EmptyNotificationsCtn_1-M8K",
        EmptyNotificationsTitle: "greenenvelope_EmptyNotificationsTitle_m0jm4",
        EmptyNotificationsBody: "greenenvelope_EmptyNotificationsBody_3YAs6",
      };
    },
    38965: (e, t, n) => {
      "use strict";
      n.r(t),
        n.d(t, {
          GreenEnvelope: () => M,
          default: () => O,
          useSteamNotifications: () => T,
        });
      var i = n(85556),
        o = n(47427),
        r = n(62613),
        s = n(85082),
        l = n(13129),
        a = n(31846),
        c = n(95315),
        m = n(88234),
        u = n.n(m),
        d = n(65255),
        f = n(58538),
        _ = n(30750),
        v = n(19067),
        p = n(77936),
        N = n(40057),
        h = n(44500),
        g = n(53923),
        y = n(75683),
        E = n(10162);
      const b = new s.tL(),
        M = (0, E.AP)(function (e) {
          const { bResponsiveHeader: t, notifications: n } = e;
          o.useEffect(() => {
            n && !b.m_bLoaded && b.ProcessNewNotificationPayload(n);
          }, [n]);
          const r = (0, N.bY)();
          (0, o.useEffect)(() => {
            b.setTransport(r),
              (window.RefreshSteamNotifications = () =>
                (function (e) {
                  return (0, i.mG)(this, void 0, void 0, function* () {
                    let t = null;
                    try {
                      t = yield (0, s.gQ)(
                        e,
                        d.L7.steamid,
                        (0, p.jM)(d.De.LANGUAGE),
                        !1,
                      );
                    } catch (e) {}
                    t && b.ProcessNewNotificationPayload(t);
                  });
                })(r));
          }, [r]);
          const l = T();
          return t
            ? o.createElement(
                o.Fragment,
                null,
                o.createElement(S, null),
                o.createElement(A, null),
              )
            : o.createElement(U, { nTotalUnviewed: l.nUnviewed });
        });
      function T() {
        return (0, _.SZ)(() => ({
          notifications: b.m_rgNotificationRollups,
          summary: b.m_summary,
          loaded: b.m_bLoaded,
          nUnviewed: b.m_nUnviewed,
        }));
      }
      function B() {
        const e = T(),
          t = (0, g.M)(),
          { data: n } = (0, y.X1)(t),
          i = (0, y.T8)(),
          o = null == n ? void 0 : n.settings;
        return e.notifications.filter((e) => {
          const t = (0, s.nM)(e.type);
          return !(0, y.Bu)(o, t.eFeature, i) && !(0, s.sA)(e.item);
        });
      }
      function U(e) {
        const { nTotalUnviewed: t } = e,
          n = o.useRef(),
          i = B(),
          [r, s] = o.useState(u().AnimateBell);
        o.useEffect(() => {
          n.current ||
            ((n.current = (0, c.yV)(
              o.createElement(L, { popupRef: n }),
              document.getElementById("green_envelope_menu_root"),
              {
                bPreferPopLeft: !0,
                bOverlapHorizontal: !0,
                strClassName: "GreenEnvelopeMenu",
              },
            )),
            n.current.Hide());
          const e = document.getElementById("header_notification_link");
          e && (e.style.cssText = "background-color: rgba(0,0,0,0)"),
            window.setTimeout(() => s(null), 2e3);
        }, []);
        const a = o.useCallback(
          (e) => {
            var t;
            !e &&
              (null === (t = n.current) || void 0 === t ? void 0 : t.visible) &&
              n.current.Hide();
          },
          [n],
        );
        return o.createElement(
          h.U,
          { trigger: "repeated", onVisibilityChange: a },
          o.createElement(
            "div",
            {
              onClick: () => {
                if (!n.current.visible) {
                  n.current.Show();
                  -1 != i.findIndex((e) => !e.item.viewed) &&
                    b.MarkAllItemsViewed();
                }
              },
              id: "green_envelope_menu_root",
              className: (0, l.Z)(
                u().Button,
                u().NotificationsButton,
                t ? u().Green : u().Grey,
                r,
              ),
            },
            o.createElement(f.Tx5, { className: u().SVGNotifications }),
          ),
        );
      }
      const L = (e) => {
          var t;
          const { popupRef: n } = e,
            i = o.useRef(),
            [r, s] = o.useState(!1);
          o.useEffect(() => {
            var e, t;
            s(
              (null === (e = i.current) || void 0 === e
                ? void 0
                : e.scrollHeight) >
                (null === (t = i.current) || void 0 === t
                  ? void 0
                  : t.clientHeight),
            );
          }, [
            null === (t = i.current) || void 0 === t ? void 0 : t.scrollHeight,
            r,
          ]);
          const a = r ? void 0 : u().MenuScrollbarHidden;
          return o.createElement(
            "div",
            {
              className: u().NotificationsMenu,
              onClick: () => {
                var e;
                return null === (e = null == n ? void 0 : n.current) ||
                  void 0 === e
                  ? void 0
                  : e.Hide();
              },
            },
            o.createElement(w, null),
            o.createElement(
              "div",
              {
                className: (0, l.Z)(u().NotificationsMenuScrollable, a),
                ref: i,
              },
              o.createElement(S, null),
              o.createElement(C, null),
              o.createElement(R, null),
            ),
          );
        },
        w = () => {
          const e = `${d.De.COMMUNITY_BASE_URL}profiles/${d.L7.steamid}/notifications`;
          return o.createElement(
            "div",
            { className: (0, l.Z)(u().NotificationHeader) },
            o.createElement(
              "div",
              { className: u().AllNotificationsTitle },
              (0, a.Xx)("#NotificationsMenu_Title"),
            ),
            o.createElement(
              "a",
              { href: e },
              o.createElement(
                "div",
                { className: u().AllNotificationsButton },
                (0, a.Xx)("#NotificationsMenu_ViewAll"),
              ),
            ),
          );
        },
        A = () => {
          const e = `${d.De.COMMUNITY_BASE_URL}profiles/${d.L7.steamid}/notifications`;
          return o.createElement(
            "div",
            {
              className: (0, l.Z)(
                u().NotificationHeader,
                u().ResponsiveViewAll,
              ),
            },
            o.createElement(
              "a",
              { href: e },
              o.createElement(
                "div",
                { className: u().AllNotificationsButton },
                (0, a.Xx)("#NotificationsMenu_ViewAll"),
              ),
            ),
          );
        };
      function I(e, t, n) {
        t.read ||
          (n && 0 != n.button && 1 != n.button) ||
          b.MarkItemRead(t.notification_id),
          e();
      }
      function C() {
        const e = B();
        return 0 == e.length
          ? null
          : o.createElement(
              "div",
              { className: u().NotificationsMenuEntriesContainer },
              e.map((e, t) =>
                o.createElement(v.RW, {
                  key: t,
                  rollup: e,
                  onNotificationClick: I,
                  uimode: 3,
                  location: 3,
                }),
              ),
            );
      }
      const k = [
        {
          fnUrl: () =>
            `${d.De.COMMUNITY_BASE_URL}profiles/${d.L7.steamid}/inventory/#pending_gifts`,
          countItem: "pending_gifts",
          icon: r.ncs,
          strLocToken: "#Notification_NewGiftsPinned_Body",
          feature: 1,
        },
        {
          fnUrl: () =>
            `${d.De.COMMUNITY_BASE_URL}profiles/${d.L7.steamid}/home/invites`,
          countItem: "pending_invites",
          icon: r.yBp,
          strLocToken: "#Notification_FriendInvitePinned_Body",
          feature: 4,
        },
        {
          fnUrl: () =>
            `${d.De.COMMUNITY_BASE_URL}profiles/${d.L7.steamid}/notifications#comments`,
          countItem: "comments",
          icon: r.svY,
          strLocToken: "#Notification_NewCommentPinned_Body",
          feature: 2,
        },
        {
          fnUrl: () =>
            `${d.De.COMMUNITY_BASE_URL}profiles/${d.L7.steamid}/inventory`,
          countItem: "inventory_items",
          icon: r.F8F,
          strLocToken: "#Notification_NewItemAnnouncementPinned_Body",
          feature: 3,
        },
        {
          fnUrl: () =>
            `${d.De.COMMUNITY_BASE_URL}profiles/${d.L7.steamid}/tradeoffers`,
          countItem: "trade_offers",
          icon: r.hoX,
          strLocToken: "#Notification_NewTradeOffersPinned_Body",
          feature: 6,
        },
        {
          fnUrl: () =>
            `${d.De.COMMUNITY_BASE_URL}profiles/${d.L7.steamid}/gamenotifications`,
          countItem: "async_game_updates",
          icon: r.ydL,
          strLocToken: "#Notification_NewAsyncGamePinned_Body",
        },
        {
          fnUrl: () => `${d.De.COMMUNITY_BASE_URL}my/moderatormessages`,
          countItem: "moderator_messages",
          icon: f.dqu,
          strLocToken: "#Notification_NewModeratorMessagePinned_Body",
          feature: 2,
        },
        {
          fnUrl: () => `${d.De.HELP_BASE_URL}wizard/HelpRequests`,
          countItem: "help_request_replies",
          icon: r.t6e,
          strLocToken: "#Notification_NewHelpRequestRepliesPinned_Body",
        },
        {
          fnUrl: () =>
            `${d.De.STORE_BASE_URL}account/familymanagement/join?ft=${d.L7.steamid}`,
          countItem: "family_invites",
          icon: r.ui7,
          strLocToken: "#Notification_FamilyInvitePinned_Body",
        },
      ];
      function S() {
        const e = T();
        return o.createElement(
          o.Fragment,
          null,
          k.map((t) =>
            o.createElement(v.sz, {
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
      function R() {
        return o.createElement(
          "div",
          { className: u().EmptyNotificationsCtn },
          o.createElement(
            "div",
            { className: u().EmptyNotificationsTitle },
            (0, a.Xx)("#NotificationsList_EmptyTitle_New"),
          ),
          o.createElement(
            "div",
            { className: u().EmptyNotificationsBody },
            (0, a.Xx)("#NotificationsList_EmptyBody"),
          ),
        );
      }
      const O = M;
    },
    44500: (e, t, n) => {
      "use strict";
      n.d(t, { U: () => l });
      var i = n(85556),
        o = n(47427),
        r = n(50423),
        s = n(20417);
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
              (this.m_observer.unobserve(this.m_elTracked),
              (this.m_elTracked = null)),
            !this.m_observer && t)
          ) {
            let e = { root: this.FindScrollableAncestor(t) };
            this.props.rootMargin && (e.rootMargin = this.props.rootMargin),
              this.props.thresholds && (e.threshold = this.props.thresholds),
              (this.m_observer = (0, s.Gt)(t, this.OnIntersection, e));
          }
          this.m_observer &&
            t &&
            t != this.m_elTracked &&
            (this.m_observer.observe(t), (this.m_elTracked = t));
        }
        FindScrollableAncestor(e) {
          return r.Jk(e, (e) => {
            const t = this.props.bHorizontal
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
          let n = !1;
          for (const t of e)
            if (t.isIntersecting) {
              n = !0;
              break;
            }
          this.m_bPreviouslyIntersecting != n &&
            ((this.m_bPreviouslyIntersecting = n),
            this.props.onVisibilityChange && this.props.onVisibilityChange(n),
            n && this.BTriggerOnce() && this.DestroyObserver());
        }
        render() {
          let e = this.props,
            {
              onVisibilityChange: t,
              rootMargin: n,
              trigger: r,
              bHorizontal: s,
            } = e,
            l = (0, i._T)(e, [
              "onVisibilityChange",
              "rootMargin",
              "trigger",
              "bHorizontal",
            ]);
          return o.createElement(
            "div",
            Object.assign({ ref: this.m_refElement }, l),
            this.props.children,
          );
        }
      }
      (0, i.gn)([s.ak], l.prototype, "OnIntersection", null);
    },
  },
]);
