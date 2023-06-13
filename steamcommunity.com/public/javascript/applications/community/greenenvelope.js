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
      };
    },
    58564: (e, n, t) => {
      "use strict";
      t.r(n),
        t.d(n, {
          GreenEnvelope: () => p,
          default: () => h,
          useSteamNotifications: () => w,
        });
      var i = t(89526),
        o = t(65756),
        l = t(19304),
        a = t(14826),
        c = t(40103),
        r = t(15937),
        s = t.n(r),
        u = t(44973),
        m = t(77427),
        d = t(701),
        f = t(16826),
        _ = t(25125),
        v = t(86770),
        N = t(27070);
      const E = new o.tL();
      function p(e) {
        const { bResponsiveHeader: n, notifications: t } = e;
        i.useEffect(() => {
          t && E.ProcessNewNotificationPayload(t);
        }, [t]);
        const o = (0, N.bY)();
        (0, i.useEffect)(() => {
          E.setTransport(o);
        }, [o]);
        const l = w();
        return n
          ? i.createElement(
              i.Fragment,
              null,
              i.createElement(S, null),
              i.createElement(b, null)
            )
          : i.createElement(g, { nTotalUnviewed: l.nUnviewed });
      }
      function w() {
        return (0, _.SZ)(() => ({
          notifications: E.m_rgNotificationRollups,
          summary: Object.assign({}, E.m_summary),
          loaded: E.m_bLoaded,
          nUnviewed: E.m_nUnviewed,
        }));
      }
      function M() {
        return w().notifications.filter((e) => !(0, o.sA)(e.item));
      }
      function g(e) {
        const { nTotalUnviewed: n } = e,
          t = i.useRef(),
          o = M();
        i.useEffect(() => {
          t.current ||
            ((t.current = (0, c.yV)(
              i.createElement(y, { popupRef: t }),
              document.getElementById("green_envelope_menu_root"),
              { bPreferPopLeft: !0, bOverlapHorizontal: !0 }
            )),
            t.current.Hide());
        }, []);
        return i.createElement(
          "div",
          {
            onClick: () => {
              if (!t.current.visible) {
                t.current.Show();
                -1 != o.findIndex((e) => !e.item.viewed) &&
                  E.MarkAllItemsViewed();
              }
            },
            id: "green_envelope_menu_root",
            className: (0, l.Z)(
              s().Button,
              s().NotificationsButton,
              n ? s().Green : s().Grey
            ),
          },
          i.createElement(f.Tx5, { className: s().SVGNotifications })
        );
      }
      const y = (e) => {
          var n;
          const { popupRef: t } = e,
            o = i.useRef(),
            [a, c] = i.useState(!1);
          i.useEffect(() => {
            var e, n;
            c(
              (null === (e = o.current) || void 0 === e
                ? void 0
                : e.scrollHeight) >
                (null === (n = o.current) || void 0 === n
                  ? void 0
                  : n.clientHeight)
            );
          }, [
            null === (n = o.current) || void 0 === n ? void 0 : n.scrollHeight,
            a,
          ]);
          const r = a ? void 0 : s().MenuScrollbarHidden;
          return i.createElement(
            "div",
            {
              className: s().NotificationsMenu,
              onClick: () => {
                var e;
                return null === (e = null == t ? void 0 : t.current) ||
                  void 0 === e
                  ? void 0
                  : e.Hide();
              },
            },
            i.createElement(A, null),
            i.createElement(
              "div",
              {
                className: (0, l.Z)(s().NotificationsMenuScrollable, r),
                ref: o,
              },
              i.createElement(S, null),
              i.createElement(L, null)
            )
          );
        },
        A = () =>
          i.createElement(
            "div",
            { className: (0, l.Z)(s().NotificationHeader) },
            i.createElement(
              "div",
              { className: s().AllNotificationsTitle },
              (0, a.Xx)("#NotificationsMenu_Title")
            ),
            i.createElement(
              "button",
              {
                className: s().AllNotificationsButton,
                onClick: () =>
                  window.location.assign(
                    `${u.De.COMMUNITY_BASE_URL}profiles/${u.L7.steamid}/notifications`
                  ),
              },
              (0, a.Xx)("#NotificationsMenu_ViewAll")
            )
          ),
        b = () =>
          i.createElement(
            "div",
            {
              className: (0, l.Z)(
                s().NotificationMenuHeader,
                s().ResponsiveViewAll
              ),
            },
            i.createElement(
              "button",
              {
                className: s().AllNotificationsButton,
                disabled: !0,
                onClick: () => {},
              },
              (0, a.Xx)("#NotificationsMenu_ViewAll")
            )
          );
      function U(e, n) {
        n.read
          ? console.log("Not marking notification read")
          : (console.log("Marking notification read"),
            E.MarkItemRead(n.notification_id)),
          e();
      }
      function L() {
        const e = M();
        return e.length
          ? i.createElement(
              "div",
              { className: s().NotificationsMenuEntriesContainer },
              e.map((e, n) =>
                i.createElement(v.RW, {
                  key: n,
                  rollup: e,
                  onNotificationClick: U,
                  uimode: 3,
                  location: m.IS.Tray,
                })
              )
            )
          : null;
      }
      function S() {
        return i.createElement(
          "div",
          null,
          i.createElement(B, null),
          i.createElement(I, null),
          i.createElement(T, null),
          i.createElement($, null),
          i.createElement(R, null),
          i.createElement(k, null),
          i.createElement(H, null),
          i.createElement(C, null)
        );
      }
      function B() {
        const e = w();
        return i.createElement(m.a$, {
          icon: i.createElement(d.ncs, null),
          count: e.summary.pending_gifts,
          onActivate: () =>
            window.location.assign(
              `${u.De.COMMUNITY_BASE_URL}profiles/${u.L7.steamid}/inventory/#pending_gifts`
            ),
          strLocToken: "#Notification_NewGiftsPinned_Body",
          bAlwaysShow: !0,
          eUIMode: 3,
          visible: !0,
        });
      }
      function T() {
        const e = w();
        return i.createElement(m.a$, {
          icon: i.createElement(d.svY, null),
          count: e.summary.comments,
          onActivate: () =>
            window.location.assign(
              `${u.De.COMMUNITY_BASE_URL}profiles/${u.L7.steamid}/notifications#comments`
            ),
          strLocToken: "#Notification_NewCommentPinned_Body",
          bAlwaysShow: !0,
          eUIMode: 3,
          visible: !0,
        });
      }
      function I() {
        const e = w();
        return i.createElement(m.a$, {
          icon: i.createElement(f.yBp, null),
          count: e.summary.pending_invites,
          onActivate: () =>
            window.location.assign(
              `${u.De.COMMUNITY_BASE_URL}profiles/${u.L7.steamid}/home/invites`
            ),
          strLocToken: "#Notification_FriendInvitePinned_Body",
          bAlwaysShow: !0,
          eUIMode: 3,
          visible: !0,
        });
      }
      function $() {
        const e = w();
        return i.createElement(m.a$, {
          icon: i.createElement(d.F8F, null),
          count: e.summary.inventory_items,
          onActivate: () =>
            window.location.assign(
              `${u.De.COMMUNITY_BASE_URL}profiles/${u.L7.steamid}/inventory`
            ),
          strLocToken: "#Notification_NewItemAnnouncementPinned_Body",
          bAlwaysShow: !1,
          eUIMode: 3,
          visible: !0,
        });
      }
      function R() {
        const e = w();
        return i.createElement(m.a$, {
          count: e.summary.trade_offers,
          icon: i.createElement(d.hoX, null),
          onActivate: () =>
            window.location.assign(
              `${u.De.COMMUNITY_BASE_URL}profiles/${u.L7.steamid}/tradeoffers`
            ),
          strLocToken: "#Notification_NewTradeOffersPinned_Body",
          eUIMode: 3,
          visible: !0,
        });
      }
      function k() {
        const e = w();
        return i.createElement(m.a$, {
          count: e.summary.async_game_updates,
          icon: i.createElement(d.ydL, null),
          onActivate: () =>
            window.location.assign(
              `${u.De.COMMUNITY_BASE_URL}profiles/${u.L7.steamid}/gamenotifications`
            ),
          strLocToken: "#Notification_NewAsyncGamePinned_Body",
          eUIMode: 3,
          visible: !0,
        });
      }
      function C() {
        const e = w();
        return i.createElement(m.a$, {
          count: e.summary.help_request_replies,
          icon: i.createElement(d.t6e, null),
          onActivate: () =>
            window.location.assign(`${u.De.HELP_BASE_URL}wizard/HelpRequests`),
          strLocToken: "#Notification_NewHelpRequestRepliesPinned_Body",
          eUIMode: 3,
          visible: !0,
        });
      }
      function H() {
        const e = w();
        return i.createElement(m.a$, {
          count: e.summary.moderator_messages,
          icon: i.createElement(f.dqu, null),
          onActivate: () =>
            window.location.assign(
              `${u.De.COMMUNITY_BASE_URL}my/moderatormessages`
            ),
          strLocToken: "#Notification_NewModeratorMessagePinned_Body",
          eUIMode: 3,
          visible: !0,
        });
      }
      const h = p;
    },
  },
]);
