/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [3068],
  {
    15937: (e) => {
      e.exports = {
        NotificationsMenu: "greenenvelope_NotificationsMenu_DHpNP",
        NotificationsMenuScrollable:
          "greenenvelope_NotificationsMenuScrollable_3t5NP",
        MenuScrollbarHidden: "greenenvelope_MenuScrollbarHidden_20aP8",
        NotificationMenuHeader: "greenenvelope_NotificationMenuHeader_lTdQS",
        ResponsiveViewAll: "greenenvelope_ResponsiveViewAll_3jVNI",
        AllNotificationsTitle: "greenenvelope_AllNotificationsTitle_nyDUh",
        AllNotificationsButton: "greenenvelope_AllNotificationsButton__Oohj",
        NotificationsButton: "greenenvelope_NotificationsButton_2Z7Ed",
        Grey: "greenenvelope_Grey_2Sj0M",
        Disabled: "greenenvelope_Disabled_3KMlw",
        Green: "greenenvelope_Green_1ad8S",
        NotificationImageCtn: "greenenvelope_NotificationImageCtn_k6OOc",
      };
    },
    58564: (e, n, t) => {
      "use strict";
      t.r(n),
        t.d(n, {
          GreenEnvelope: () => v,
          default: () => U,
          useSteamNotifications: () => g,
        });
      var i = t(89526),
        o = t(65756),
        a = t(19304),
        l = t(14826),
        c = t(40103),
        s = t(15937),
        r = t.n(s),
        u = t(44973),
        m = t(77427),
        f = t(701),
        d = t(16826),
        _ = t(25125),
        N = t(86770),
        E = t(27070);
      const p = new o.tL();
      function v(e) {
        const { bResponsiveHeader: n, notifications: t } = e;
        i.useEffect(() => {
          t && p.ProcessNewNotificationPayload(t);
        }, [t]);
        const o = (0, E.bY)();
        (0, i.useEffect)(() => {
          p.setTransport(o);
        }, [o]);
        const a = g();
        return n
          ? i.createElement(
              i.Fragment,
              null,
              i.createElement(B, null),
              i.createElement(M, null)
            )
          : i.createElement(w, { total: a.total });
      }
      function g() {
        return (0, _.SZ)(() => ({
          notifications: p.m_rgNotificationRollups,
          summary: Object.assign({}, p.m_summary),
          loaded: p.m_bLoaded,
          total: (0, o.RY)(p.m_summary),
        }));
      }
      function w(e) {
        const { total: n } = e,
          t = i.useRef();
        i.useEffect(() => {
          t.current ||
            ((t.current = (0, c.yV)(
              i.createElement(y, { popupRef: t }),
              document.getElementById("green_envelope_root"),
              { bPreferPopLeft: !0 }
            )),
            t.current.Hide());
        }, []);
        return i.createElement(
          "div",
          {
            id: "green_envelope_root",
            className: (0, a.Z)(
              r().NotificationsButton,
              n ? r().Green : r().Grey
            ),
            onClick: () => {
              t.current.visible || t.current.Show();
            },
          },
          !!n &&
            i.createElement("span", { className: r().NotificationTotal }, n),
          i.createElement(
            "span",
            { className: r().NotificationImageCtn },
            i.createElement("img", {
              src:
                u.De.PUBLIC_SHARED_URL +
                "images/responsive/header_menu_notifications.png",
              width: "11",
              height: "8",
            })
          )
        );
      }
      const y = (e) => {
          const { popupRef: n } = e;
          return i.createElement(
            "div",
            {
              className: r().NotificationsMenu,
              onClick: () => {
                var e;
                return null === (e = null == n ? void 0 : n.current) ||
                  void 0 === e
                  ? void 0
                  : e.Hide();
              },
            },
            i.createElement(A, null),
            i.createElement(B, null),
            i.createElement(L, null)
          );
        },
        A = () =>
          i.createElement(
            "div",
            { className: (0, a.Z)(r().NotificationMenuHeader) },
            i.createElement(
              "div",
              { className: r().AllNotificationsTitle },
              (0, l.Xx)("#NotificationsMenu_Title")
            ),
            i.createElement(
              "button",
              {
                className: r().AllNotificationsButton,
                onClick: () =>
                  window.location.assign(
                    `${u.De.COMMUNITY_BASE_URL}profiles/${u.L7.steamid}/notifications`
                  ),
              },
              (0, l.Xx)("#NotificationsMenu_ViewAll")
            )
          ),
        M = () =>
          i.createElement(
            "div",
            {
              className: (0, a.Z)(
                r().NotificationMenuHeader,
                r().ResponsiveViewAll
              ),
            },
            i.createElement(
              "button",
              {
                className: r().AllNotificationsButton,
                disabled: !0,
                onClick: () => {},
              },
              (0, l.Xx)("#NotificationsMenu_ViewAll")
            )
          );
      function b(e, n) {
        n.read
          ? console.log("Not marking notification read")
          : (console.log("Marking notification read"),
            p.MarkItemRead(n.notification_id)),
          e();
      }
      function L() {
        const e = g();
        return e.notifications.length
          ? i.createElement(
              "div",
              { className: r().NotificationsMenuScrollable },
              e.notifications.map((e, n) =>
                i.createElement(N.RW, {
                  key: n,
                  rollup: e,
                  onNotificationClick: b,
                  uimode: 3,
                  location: m.IS.Tray,
                })
              )
            )
          : null;
      }
      function B() {
        return i.createElement(
          "div",
          null,
          i.createElement(R, null),
          i.createElement($, null),
          i.createElement(T, null),
          i.createElement(S, null),
          i.createElement(k, null),
          i.createElement(C, null),
          i.createElement(h, null)
        );
      }
      function S() {
        const e = g();
        return i.createElement(m.a$, {
          icon: i.createElement(f.ncs, null),
          count: e.summary.pending_gifts,
          onActivate: () =>
            window.location.assign(
              `${u.De.COMMUNITY_BASE_URL}profiles/${u.L7.steamid}/inventory/#pending_gifts`
            ),
          strLocToken: "#Notification_NewGiftsPinned_Body",
          bAlwaysShow: !0,
          visible: !0,
        });
      }
      function R() {
        const e = g();
        return i.createElement(m.a$, {
          icon: i.createElement(f.svY, null),
          count: e.summary.comments,
          onActivate: () =>
            window.location.assign(
              `${u.De.COMMUNITY_BASE_URL}profiles/${u.L7.steamid}/notifications#comments`
            ),
          strLocToken: "#Notification_NewCommentPinned_Body",
          bAlwaysShow: !0,
          visible: !0,
        });
      }
      function T() {
        const e = g();
        return i.createElement(m.a$, {
          icon: i.createElement(d.yBp, null),
          count: e.summary.pending_invites,
          onActivate: () =>
            window.location.assign(
              `${u.De.COMMUNITY_BASE_URL}profiles/${u.L7.steamid}/home/invites`
            ),
          strLocToken: "#Notification_FriendInvitePinned_Body",
          bAlwaysShow: !0,
          visible: !0,
        });
      }
      function $() {
        const e = g();
        return i.createElement(m.a$, {
          icon: i.createElement(f.F8F, null),
          count: e.summary.inventory_items,
          onActivate: () =>
            window.location.assign(
              `${u.De.COMMUNITY_BASE_URL}profiles/${u.L7.steamid}/inventory`
            ),
          strLocToken: "#Notification_NewItemAnnouncementPinned_Body",
          bAlwaysShow: !0,
          visible: !0,
        });
      }
      function k() {
        const e = g();
        return i.createElement(m.a$, {
          count: e.summary.trade_offers,
          icon: i.createElement(f.hoX, null),
          onActivate: () =>
            window.location.assign(
              `${u.De.COMMUNITY_BASE_URL}profiles/${u.L7.steamid}/tradeoffers`
            ),
          strLocToken: "#Notification_NewTradeOffersPinned_Body",
          visible: !0,
        });
      }
      function C() {
        const e = g();
        return i.createElement(m.a$, {
          count: e.summary.async_game_updates,
          icon: i.createElement(f.ydL, null),
          onActivate: () =>
            window.location.assign(
              `${u.De.COMMUNITY_BASE_URL}profiles/${u.L7.steamid}/gamenotifications`
            ),
          strLocToken: "#Notification_NewAsyncGamePinned_Body",
          visible: !0,
        });
      }
      function h() {
        const e = g();
        return i.createElement(m.a$, {
          count: e.summary.help_request_replies,
          icon: i.createElement(f.t6e, null),
          onActivate: () =>
            window.location.assign(`${u.De.HELP_BASE_URL}wizard/HelpRequests`),
          strLocToken: "#Notification_NewHelpRequestRepliesPinned_Body",
          visible: !0,
        });
      }
      const U = v;
    },
  },
]);
