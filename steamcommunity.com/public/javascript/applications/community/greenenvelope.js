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
          GreenEnvelope: () => E,
          default: () => H,
          useSteamNotifications: () => b,
        });
      var i = n(89526),
        o = n(65756),
        r = n(19304),
        l = n(14826),
        s = n(40103),
        a = n(15937),
        c = n.n(a),
        m = n(44973),
        u = n(77427),
        d = n(28106),
        f = n(16826),
        _ = n(25125),
        v = n(86770),
        p = n(27070),
        N = n(41576);
      const g = new o.tL();
      function E(e) {
        const { bResponsiveHeader: t, notifications: n } = e;
        i.useEffect(() => {
          n && !g.m_bLoaded && g.ProcessNewNotificationPayload(n);
        }, [n]);
        const o = (0, p.bY)();
        (0, i.useEffect)(() => {
          g.setTransport(o);
        }, [o]);
        const r = b();
        return t
          ? i.createElement(
              i.Fragment,
              null,
              i.createElement(U, null),
              i.createElement(A, null)
            )
          : i.createElement(h, { nTotalUnviewed: r.nUnviewed });
      }
      function b() {
        return (0, _.SZ)(() => ({
          notifications: g.m_rgNotificationRollups,
          summary: Object.assign({}, g.m_summary),
          loaded: g.m_bLoaded,
          nUnviewed: g.m_nUnviewed,
        }));
      }
      function y() {
        return b().notifications.filter((e) => !(0, o.sA)(e.item));
      }
      function h(e) {
        const { nTotalUnviewed: t } = e,
          n = i.useRef(),
          o = y(),
          [l, a] = i.useState(c().AnimateBell);
        i.useEffect(() => {
          n.current ||
            ((n.current = (0, s.yV)(
              i.createElement(w, { popupRef: n }),
              document.getElementById("green_envelope_menu_root"),
              {
                bPreferPopLeft: !0,
                bOverlapHorizontal: !0,
                strClassName: "GreenEnvelopeMenu",
              }
            )),
            n.current.Hide()),
            window.setTimeout(() => a(null), 2e3);
        }, []);
        const m = i.useCallback(
          (e) => {
            var t;
            !e &&
              (null === (t = n.current) || void 0 === t ? void 0 : t.visible) &&
              n.current.Hide();
          },
          [n]
        );
        return i.createElement(
          N.U,
          { trigger: "repeated", onVisibilityChange: m },
          i.createElement(
            "div",
            {
              onClick: () => {
                if (!n.current.visible) {
                  n.current.Show();
                  -1 != o.findIndex((e) => !e.item.viewed) &&
                    g.MarkAllItemsViewed();
                }
              },
              id: "green_envelope_menu_root",
              className: (0, r.Z)(
                c().Button,
                c().NotificationsButton,
                t ? c().Green : c().Grey,
                l
              ),
            },
            i.createElement(f.Tx5, { className: c().SVGNotifications })
          )
        );
      }
      const w = (e) => {
          var t;
          const { popupRef: n } = e,
            o = i.useRef(),
            [l, s] = i.useState(!1);
          i.useEffect(() => {
            var e, t;
            s(
              (null === (e = o.current) || void 0 === e
                ? void 0
                : e.scrollHeight) >
                (null === (t = o.current) || void 0 === t
                  ? void 0
                  : t.clientHeight)
            );
          }, [
            null === (t = o.current) || void 0 === t ? void 0 : t.scrollHeight,
            l,
          ]);
          const a = l ? void 0 : c().MenuScrollbarHidden;
          return i.createElement(
            "div",
            {
              className: c().NotificationsMenu,
              onClick: () => {
                var e;
                return null === (e = null == n ? void 0 : n.current) ||
                  void 0 === e
                  ? void 0
                  : e.Hide();
              },
            },
            i.createElement(M, null),
            i.createElement(
              "div",
              {
                className: (0, r.Z)(c().NotificationsMenuScrollable, a),
                ref: o,
              },
              i.createElement(U, null),
              i.createElement(T, null)
            )
          );
        },
        M = () =>
          i.createElement(
            "div",
            { className: (0, r.Z)(c().NotificationHeader) },
            i.createElement(
              "div",
              { className: c().AllNotificationsTitle },
              (0, l.Xx)("#NotificationsMenu_Title")
            ),
            i.createElement(
              "button",
              {
                className: c().AllNotificationsButton,
                onClick: () =>
                  window.location.assign(
                    `${m.De.COMMUNITY_BASE_URL}profiles/${m.L7.steamid}/notifications`
                  ),
              },
              (0, l.Xx)("#NotificationsMenu_ViewAll")
            )
          ),
        A = () =>
          i.createElement(
            "div",
            {
              className: (0, r.Z)(
                c().NotificationHeader,
                c().ResponsiveViewAll
              ),
            },
            i.createElement(
              "button",
              {
                className: c().AllNotificationsButton,
                onClick: () =>
                  window.location.assign(
                    `${m.De.COMMUNITY_BASE_URL}profiles/${m.L7.steamid}/notifications`
                  ),
              },
              (0, l.Xx)("#NotificationsMenu_ViewAll")
            )
          );
      function B(e, t) {
        t.read
          ? console.log("Not marking notification read")
          : (console.log("Marking notification read"),
            g.MarkItemRead(t.notification_id)),
          e();
      }
      function T() {
        const e = b(),
          t = y();
        return t.length || (0, o.ft)(e.summary)
          ? i.createElement(
              "div",
              { className: c().NotificationsMenuEntriesContainer },
              t.map((e, t) =>
                i.createElement(v.RW, {
                  key: t,
                  rollup: e,
                  onNotificationClick: B,
                  uimode: 3,
                  location: u.IS.Tray,
                })
              )
            )
          : i.createElement(D, null);
      }
      function U() {
        return i.createElement(
          "div",
          null,
          i.createElement(C, null),
          i.createElement(L, null),
          i.createElement(S, null),
          i.createElement(I, null),
          i.createElement(k, null),
          i.createElement(O, null),
          i.createElement($, null),
          i.createElement(R, null)
        );
      }
      function C() {
        const e = b();
        return i.createElement(u.a$, {
          icon: i.createElement(d.ncs, null),
          count: e.summary.pending_gifts,
          onActivate: () =>
            window.location.assign(
              `${m.De.COMMUNITY_BASE_URL}profiles/${m.L7.steamid}/inventory/#pending_gifts`
            ),
          strLocToken: "#Notification_NewGiftsPinned_Body",
          bAlwaysShow: !1,
          eUIMode: 3,
          visible: !0,
        });
      }
      function S() {
        const e = b();
        return i.createElement(u.a$, {
          icon: i.createElement(d.svY, null),
          count: e.summary.comments,
          onActivate: () =>
            window.location.assign(
              `${m.De.COMMUNITY_BASE_URL}profiles/${m.L7.steamid}/notifications#comments`
            ),
          strLocToken: "#Notification_NewCommentPinned_Body",
          bAlwaysShow: !1,
          eUIMode: 3,
          visible: !0,
        });
      }
      function L() {
        const e = b();
        return i.createElement(u.a$, {
          icon: i.createElement(f.yBp, null),
          count: e.summary.pending_invites,
          onActivate: () =>
            window.location.assign(
              `${m.De.COMMUNITY_BASE_URL}profiles/${m.L7.steamid}/home/invites`
            ),
          strLocToken: "#Notification_FriendInvitePinned_Body",
          bAlwaysShow: !1,
          eUIMode: 3,
          visible: !0,
        });
      }
      function I() {
        const e = b();
        return i.createElement(u.a$, {
          icon: i.createElement(d.F8F, null),
          count: e.summary.inventory_items,
          onActivate: () =>
            window.location.assign(
              `${m.De.COMMUNITY_BASE_URL}profiles/${m.L7.steamid}/inventory`
            ),
          strLocToken: "#Notification_NewItemAnnouncementPinned_Body",
          bAlwaysShow: !1,
          eUIMode: 3,
          visible: !0,
        });
      }
      function k() {
        const e = b();
        return i.createElement(u.a$, {
          count: e.summary.trade_offers,
          icon: i.createElement(d.hoX, null),
          onActivate: () =>
            window.location.assign(
              `${m.De.COMMUNITY_BASE_URL}profiles/${m.L7.steamid}/tradeoffers`
            ),
          strLocToken: "#Notification_NewTradeOffersPinned_Body",
          eUIMode: 3,
          visible: !0,
        });
      }
      function O() {
        const e = b();
        return i.createElement(u.a$, {
          count: e.summary.async_game_updates,
          icon: i.createElement(d.ydL, null),
          onActivate: () =>
            window.location.assign(
              `${m.De.COMMUNITY_BASE_URL}profiles/${m.L7.steamid}/gamenotifications`
            ),
          strLocToken: "#Notification_NewAsyncGamePinned_Body",
          eUIMode: 3,
          visible: !0,
        });
      }
      function R() {
        const e = b();
        return i.createElement(u.a$, {
          count: e.summary.help_request_replies,
          icon: i.createElement(d.t6e, null),
          onActivate: () =>
            window.location.assign(`${m.De.HELP_BASE_URL}wizard/HelpRequests`),
          strLocToken: "#Notification_NewHelpRequestRepliesPinned_Body",
          eUIMode: 3,
          visible: !0,
        });
      }
      function $() {
        const e = b();
        return i.createElement(u.a$, {
          count: e.summary.moderator_messages,
          icon: i.createElement(f.dqu, null),
          onActivate: () =>
            window.location.assign(
              `${m.De.COMMUNITY_BASE_URL}my/moderatormessages`
            ),
          strLocToken: "#Notification_NewModeratorMessagePinned_Body",
          eUIMode: 3,
          visible: !0,
        });
      }
      function D() {
        return i.createElement(
          "div",
          { className: c().EmptyNotificationsCtn },
          i.createElement(
            "div",
            { className: c().EmptyNotificationsTitle },
            (0, l.Xx)("#NotificationsList_EmptyTitle_New")
          ),
          i.createElement(
            "div",
            { className: c().EmptyNotificationsBody },
            (0, l.Xx)("#NotificationsList_EmptyBody")
          )
        );
      }
      const H = E;
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
            this.props.children
          );
        }
      }
      (0, i.gn)([l.ak], s.prototype, "OnIntersection", null);
    },
  },
]);
