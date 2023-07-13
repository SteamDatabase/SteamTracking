/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [3068],
  {
    15937: (e) => {
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
    58564: (e, t, n) => {
      "use strict";
      n.r(t),
        n.d(t, {
          GreenEnvelope: () => y,
          default: () => G,
          useSteamNotifications: () => h,
        });
      var i = n(33940),
        o = n(89526),
        r = n(65756),
        l = n(19304),
        s = n(14826),
        a = n(40103),
        c = n(15937),
        m = n.n(c),
        u = n(44973),
        d = n(77427),
        f = n(28106),
        _ = n(16826),
        v = n(25125),
        p = n(86770),
        N = n(67727),
        E = n(27070),
        g = n(41576);
      const b = new r.tL();
      function y(e) {
        const { bResponsiveHeader: t, notifications: n } = e;
        o.useEffect(() => {
          n && !b.m_bLoaded && b.ProcessNewNotificationPayload(n);
        }, [n]);
        const l = (0, E.bY)();
        (0, o.useEffect)(() => {
          b.setTransport(l),
            (window.RefreshSteamNotifications = () =>
              (function (e) {
                return (0, i.mG)(this, void 0, void 0, function* () {
                  let t = null;
                  try {
                    t = yield (0, r.gQ)(
                      e,
                      u.L7.steamid,
                      (0, N.jM)(u.De.LANGUAGE),
                      !1,
                    );
                  } catch (e) {}
                  t && b.ProcessNewNotificationPayload(t);
                });
              })(l));
        }, [l]);
        const s = h();
        return t
          ? o.createElement(
              o.Fragment,
              null,
              o.createElement(S, null),
              o.createElement(T, null),
            )
          : o.createElement(M, { nTotalUnviewed: s.nUnviewed });
      }
      function h() {
        return (0, v.SZ)(() => ({
          notifications: b.m_rgNotificationRollups,
          summary: Object.assign({}, b.m_summary),
          loaded: b.m_bLoaded,
          nUnviewed: b.m_nUnviewed,
        }));
      }
      function w() {
        return h().notifications.filter((e) => !(0, r.sA)(e.item));
      }
      function M(e) {
        const { nTotalUnviewed: t } = e,
          n = o.useRef(),
          i = w(),
          [r, s] = o.useState(m().AnimateBell);
        o.useEffect(() => {
          n.current ||
            ((n.current = (0, a.yV)(
              o.createElement(A, { popupRef: n }),
              document.getElementById("green_envelope_menu_root"),
              {
                bPreferPopLeft: !0,
                bOverlapHorizontal: !0,
                strClassName: "GreenEnvelopeMenu",
              },
            )),
            n.current.Hide()),
            window.setTimeout(() => s(null), 2e3);
        }, []);
        const c = o.useCallback(
          (e) => {
            var t;
            !e &&
              (null === (t = n.current) || void 0 === t ? void 0 : t.visible) &&
              n.current.Hide();
          },
          [n],
        );
        return o.createElement(
          g.U,
          { trigger: "repeated", onVisibilityChange: c },
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
                m().Button,
                m().NotificationsButton,
                t ? m().Green : m().Grey,
                r,
              ),
            },
            o.createElement(_.Tx5, { className: m().SVGNotifications }),
          ),
        );
      }
      const A = (e) => {
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
          const a = r ? void 0 : m().MenuScrollbarHidden;
          return o.createElement(
            "div",
            {
              className: m().NotificationsMenu,
              onClick: () => {
                var e;
                return null === (e = null == n ? void 0 : n.current) ||
                  void 0 === e
                  ? void 0
                  : e.Hide();
              },
            },
            o.createElement(B, null),
            o.createElement(
              "div",
              {
                className: (0, l.Z)(m().NotificationsMenuScrollable, a),
                ref: i,
              },
              o.createElement(S, null),
              o.createElement(C, null),
            ),
          );
        },
        B = () =>
          o.createElement(
            "div",
            { className: (0, l.Z)(m().NotificationHeader) },
            o.createElement(
              "div",
              { className: m().AllNotificationsTitle },
              (0, s.Xx)("#NotificationsMenu_Title"),
            ),
            o.createElement(
              "button",
              {
                className: m().AllNotificationsButton,
                onClick: () =>
                  window.location.assign(
                    `${u.De.COMMUNITY_BASE_URL}profiles/${u.L7.steamid}/notifications`,
                  ),
              },
              (0, s.Xx)("#NotificationsMenu_ViewAll"),
            ),
          ),
        T = () =>
          o.createElement(
            "div",
            {
              className: (0, l.Z)(
                m().NotificationHeader,
                m().ResponsiveViewAll,
              ),
            },
            o.createElement(
              "button",
              {
                className: m().AllNotificationsButton,
                onClick: () =>
                  window.location.assign(
                    `${u.De.COMMUNITY_BASE_URL}profiles/${u.L7.steamid}/notifications`,
                  ),
              },
              (0, s.Xx)("#NotificationsMenu_ViewAll"),
            ),
          );
      function U(e, t, n) {
        t.read ||
          (n && 0 != n.button && 1 != n.button) ||
          b.MarkItemRead(t.notification_id),
          e();
      }
      function C() {
        const e = h(),
          t = w();
        return t.length || (0, r.ft)(e.summary)
          ? o.createElement(
              "div",
              { className: m().NotificationsMenuEntriesContainer },
              t.map((e, t) =>
                o.createElement(p.RW, {
                  key: t,
                  rollup: e,
                  onNotificationClick: U,
                  uimode: 3,
                  location: d.IS.Tray,
                }),
              ),
            )
          : o.createElement(P, null);
      }
      function S() {
        return o.createElement(
          "div",
          null,
          o.createElement(L, null),
          o.createElement(k, null),
          o.createElement(I, null),
          o.createElement(O, null),
          o.createElement(R, null),
          o.createElement($, null),
          o.createElement(H, null),
          o.createElement(D, null),
        );
      }
      function L() {
        const e = h();
        return o.createElement(d.a$, {
          icon: o.createElement(f.ncs, null),
          count: e.summary.pending_gifts,
          onActivate: () =>
            window.location.assign(
              `${u.De.COMMUNITY_BASE_URL}profiles/${u.L7.steamid}/inventory/#pending_gifts`,
            ),
          strLocToken: "#Notification_NewGiftsPinned_Body",
          bAlwaysShow: !1,
          eUIMode: 3,
          visible: !0,
        });
      }
      function I() {
        const e = h();
        return o.createElement(d.a$, {
          icon: o.createElement(f.svY, null),
          count: e.summary.comments,
          onActivate: () =>
            window.location.assign(
              `${u.De.COMMUNITY_BASE_URL}profiles/${u.L7.steamid}/notifications#comments`,
            ),
          strLocToken: "#Notification_NewCommentPinned_Body",
          bAlwaysShow: !1,
          eUIMode: 3,
          visible: !0,
        });
      }
      function k() {
        const e = h();
        return o.createElement(d.a$, {
          icon: o.createElement(_.yBp, null),
          count: e.summary.pending_invites,
          onActivate: () =>
            window.location.assign(
              `${u.De.COMMUNITY_BASE_URL}profiles/${u.L7.steamid}/home/invites`,
            ),
          strLocToken: "#Notification_FriendInvitePinned_Body",
          bAlwaysShow: !1,
          eUIMode: 3,
          visible: !0,
        });
      }
      function O() {
        const e = h();
        return o.createElement(d.a$, {
          icon: o.createElement(f.F8F, null),
          count: e.summary.inventory_items,
          onActivate: () =>
            window.location.assign(
              `${u.De.COMMUNITY_BASE_URL}profiles/${u.L7.steamid}/inventory`,
            ),
          strLocToken: "#Notification_NewItemAnnouncementPinned_Body",
          bAlwaysShow: !1,
          eUIMode: 3,
          visible: !0,
        });
      }
      function R() {
        const e = h();
        return o.createElement(d.a$, {
          count: e.summary.trade_offers,
          icon: o.createElement(f.hoX, null),
          onActivate: () =>
            window.location.assign(
              `${u.De.COMMUNITY_BASE_URL}profiles/${u.L7.steamid}/tradeoffers`,
            ),
          strLocToken: "#Notification_NewTradeOffersPinned_Body",
          eUIMode: 3,
          visible: !0,
        });
      }
      function $() {
        const e = h();
        return o.createElement(d.a$, {
          count: e.summary.async_game_updates,
          icon: o.createElement(f.ydL, null),
          onActivate: () =>
            window.location.assign(
              `${u.De.COMMUNITY_BASE_URL}profiles/${u.L7.steamid}/gamenotifications`,
            ),
          strLocToken: "#Notification_NewAsyncGamePinned_Body",
          eUIMode: 3,
          visible: !0,
        });
      }
      function D() {
        const e = h();
        return o.createElement(d.a$, {
          count: e.summary.help_request_replies,
          icon: o.createElement(f.t6e, null),
          onActivate: () =>
            window.location.assign(`${u.De.HELP_BASE_URL}wizard/HelpRequests`),
          strLocToken: "#Notification_NewHelpRequestRepliesPinned_Body",
          eUIMode: 3,
          visible: !0,
        });
      }
      function H() {
        const e = h();
        return o.createElement(d.a$, {
          count: e.summary.moderator_messages,
          icon: o.createElement(_.dqu, null),
          onActivate: () =>
            window.location.assign(
              `${u.De.COMMUNITY_BASE_URL}my/moderatormessages`,
            ),
          strLocToken: "#Notification_NewModeratorMessagePinned_Body",
          eUIMode: 3,
          visible: !0,
        });
      }
      function P() {
        return o.createElement(
          "div",
          { className: m().EmptyNotificationsCtn },
          o.createElement(
            "div",
            { className: m().EmptyNotificationsTitle },
            (0, s.Xx)("#NotificationsList_EmptyTitle_New"),
          ),
          o.createElement(
            "div",
            { className: m().EmptyNotificationsBody },
            (0, s.Xx)("#NotificationsList_EmptyBody"),
          ),
        );
      }
      const G = y;
    },
    41576: (e, t, n) => {
      "use strict";
      n.d(t, { U: () => s });
      var i = n(33940),
        o = n(89526),
        r = n(60161),
        l = n(4306);
      class s extends o.Component {
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
            e.rootMargin != this.m_observer.rootMargin &&
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
              (this.m_observer = (0, l.Gt)(t, this.OnIntersection, e));
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
              !!e.classList.contains(s.GetScrollableClassname())
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
              bHorizontal: l,
            } = e,
            s = (0, i._T)(e, [
              "onVisibilityChange",
              "rootMargin",
              "trigger",
              "bHorizontal",
            ]);
          return o.createElement(
            "div",
            Object.assign({ ref: this.m_refElement }, s),
            this.props.children,
          );
        }
      }
      (0, i.gn)([l.ak], s.prototype, "OnIntersection", null);
    },
  },
]);
