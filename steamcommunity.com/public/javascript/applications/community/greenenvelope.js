/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [3068],
  {
    88234: (e) => {
      e.exports = {
        NotificationsMenu: "DHpNPo4VknQQgZ-Endjnr",
        NotificationsMenuEntriesContainer: "_1UQTO5JHEeKV5-jO0lZLJn",
        NotificationsMenuScrollable: "_3t5NPou8z4TK-P2_w3zZeG",
        MenuScrollbarHidden: "_20aP8h5zqDN-E-A9xRuIpj",
        NotificationHeader: "_2CF6oPHsaCLQ5tLo3ThpA8",
        ResponsiveViewAll: "_3jVNImLETg7K6nmBlKrr17",
        AllNotificationsTitle: "nyDUhA2in_idbdfRysxhy",
        AllNotificationsButton: "_OohjXs6g1bZWWSDjc3sQ",
        NotificationsButton: "_2Z7EdkE4UF7dnGM4VibIvZ",
        SVGNotifications: "D68s6aL7C_YAjt1Vw77Sw",
        Grey: "_2Sj0MS5lHpROEv7qTMLEsn",
        Disabled: "_3KMlwWjyKj6H0MWpR9jscq",
        Green: "_1ad8S4q3EoWrectZjRucjc",
        AnimateBell: "_2YD8wdg8zcTlmlysT-dNWz",
        NotificationBellAnimation: "_1a4Fd8zgf-zfcy2INky5BM",
        NotificationBellUvula: "_21Ilh43U_kNoYvs-CnYkU9",
        EmptyNotificationsCtn: "_1-M8KMwgL_DOmQZBALEpWx",
        EmptyNotificationsTitle: "m0jm4f6OZD7WSl06uabEs",
        EmptyNotificationsBody: "_3YAs6zz26YfBaANe6L3uJS",
      };
    },
    38965: (e, t, n) => {
      "use strict";
      n.r(t),
        n.d(t, {
          GreenEnvelope: () => b,
          default: () => R,
          useSteamNotifications: () => T,
        });
      var i = n(77936),
        o = n(30750),
        r = n(47427),
        s = n(53923),
        l = n(75683),
        a = n(40057),
        c = n(95315),
        m = n(85082),
        u = n(58538),
        d = n(62613),
        f = n(13129),
        _ = n(31846),
        v = n(65255),
        p = n(10162),
        N = n(88234),
        h = n.n(N),
        E = n(76742),
        y = n(44500);
      const g = new m.tL(),
        b = (0, p.AP)(function (e) {
          const { bResponsiveHeader: t, notifications: n } = e;
          r.useEffect(() => {
            n && !g.m_bLoaded && g.ProcessNewNotificationPayload(n);
          }, [n]);
          const o = (0, a.bY)();
          (0, r.useEffect)(() => {
            g.setTransport(o),
              (window.RefreshSteamNotifications = () =>
                (async function (e) {
                  let t = null;
                  try {
                    t = await (0, m.gQ)(
                      e,
                      v.L7.steamid,
                      (0, i.jM)(v.De.LANGUAGE),
                      void 0,
                      !1,
                      !1,
                    );
                  } catch (e) {}
                  t && g.ProcessNewNotificationPayload(t);
                })(o));
          }, [o]);
          const s = T();
          return t
            ? r.createElement(
                r.Fragment,
                null,
                r.createElement(S, null),
                r.createElement(w, null),
              )
            : r.createElement(M, { nTotalUnviewed: s.nUnviewed });
        });
      function T() {
        return (0, o.SZ)(() => ({
          notifications: g.m_rgNotificationRollups,
          summary: g.m_summary,
          loaded: g.m_bLoaded,
          nUnviewed: g.m_nUnviewed,
        }));
      }
      function L() {
        const e = T(),
          t = (0, s.M)(),
          { data: n } = (0, l.X1)(t),
          i = (0, l.T8)(),
          o = null == n ? void 0 : n.settings;
        return e.notifications.filter(
          (e) => !(0, m.pH)(e.type, o, i) && !(0, m.sA)(e.item),
        );
      }
      function M(e) {
        const { nTotalUnviewed: t } = e,
          n = r.useRef(null),
          i = L(),
          [o, s] = r.useState(h().AnimateBell);
        r.useEffect(() => {
          n.current ||
            ((n.current = (0, c.yV)(
              r.createElement(U, { popupRef: n }),
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
        const l = r.useCallback(
          (e) => {
            var t;
            !e &&
              (null === (t = n.current) || void 0 === t ? void 0 : t.visible) &&
              n.current.Hide();
          },
          [n],
        );
        return r.createElement(
          y.U,
          { trigger: "repeated", onVisibilityChange: l },
          r.createElement(
            "div",
            {
              onClick: () => {
                var e, t;
                if (
                  !(null === (e = n.current) || void 0 === e
                    ? void 0
                    : e.visible)
                ) {
                  null === (t = n.current) || void 0 === t || t.Show();
                  -1 != i.findIndex((e) => !e.item.viewed) &&
                    g.MarkAllItemsViewed();
                }
              },
              id: "green_envelope_menu_root",
              className: (0, f.Z)(
                h().NotificationsButton,
                t ? h().Green : h().Grey,
                o,
              ),
            },
            r.createElement(u.Tx5, { className: h().SVGNotifications }),
          ),
        );
      }
      const U = (e) => {
          var t;
          const { popupRef: n } = e,
            i = r.useRef(null),
            [o, s] = r.useState(!1);
          r.useEffect(() => {
            var e, t;
            s(
              null != i.current &&
                (null === (e = i.current) || void 0 === e
                  ? void 0
                  : e.scrollHeight) >
                  (null === (t = i.current) || void 0 === t
                    ? void 0
                    : t.clientHeight),
            );
          }, [
            null === (t = i.current) || void 0 === t ? void 0 : t.scrollHeight,
            o,
          ]);
          const l = o ? void 0 : h().MenuScrollbarHidden;
          return r.createElement(
            "div",
            {
              className: h().NotificationsMenu,
              onClick: () => {
                var e;
                return null === (e = null == n ? void 0 : n.current) ||
                  void 0 === e
                  ? void 0
                  : e.Hide();
              },
            },
            r.createElement(B, null),
            r.createElement(
              "div",
              {
                className: (0, f.Z)(h().NotificationsMenuScrollable, l),
                ref: i,
              },
              r.createElement(S, null),
              r.createElement(I, null),
              r.createElement(C, null),
            ),
          );
        },
        B = () => {
          const e = `${v.De.COMMUNITY_BASE_URL}profiles/${v.L7.steamid}/notifications`;
          return r.createElement(
            "div",
            { className: (0, f.Z)(h().NotificationHeader) },
            r.createElement(
              "div",
              { className: h().AllNotificationsTitle },
              (0, _.Xx)("#NotificationsMenu_Title"),
            ),
            r.createElement(
              "a",
              { href: e },
              r.createElement(
                "div",
                { className: h().AllNotificationsButton },
                (0, _.Xx)("#NotificationsMenu_ViewAll"),
              ),
            ),
          );
        },
        w = () => {
          const e = `${v.De.COMMUNITY_BASE_URL}profiles/${v.L7.steamid}/notifications`;
          return r.createElement(
            "div",
            {
              className: (0, f.Z)(
                h().NotificationHeader,
                h().ResponsiveViewAll,
              ),
            },
            r.createElement(
              "a",
              { href: e },
              r.createElement(
                "div",
                { className: h().AllNotificationsButton },
                (0, _.Xx)("#NotificationsMenu_ViewAll"),
              ),
            ),
          );
        };
      function k(e, t, n) {
        t.read ||
          (n && 0 != n.button && 1 != n.button) ||
          !t.notification_id ||
          g.MarkItemRead(t.notification_id),
          e();
      }
      function I() {
        const e = L();
        return 0 == e.length
          ? null
          : r.createElement(
              "div",
              { className: h().NotificationsMenuEntriesContainer },
              e.map((e, t) =>
                r.createElement(E.RW, {
                  key: t,
                  rollup: e,
                  onNotificationClick: k,
                  uimode: 3,
                  location: 3,
                }),
              ),
            );
      }
      const A = [
        {
          fnUrl: () =>
            `${v.De.COMMUNITY_BASE_URL}profiles/${v.L7.steamid}/inventory/#pending_gifts`,
          countItem: "pending_gifts",
          icon: d.ncs,
          strLocToken: "#Notification_NewGiftsPinned_Body",
          feature: 1,
        },
        {
          fnUrl: () =>
            `${v.De.COMMUNITY_BASE_URL}profiles/${v.L7.steamid}/home/invites`,
          countItem: "pending_invites",
          icon: d.yBp,
          strLocToken: "#Notification_FriendInvitePinned_Body",
          feature: 4,
        },
        {
          fnUrl: () =>
            `${v.De.COMMUNITY_BASE_URL}profiles/${v.L7.steamid}/notifications#comments`,
          countItem: "comments",
          icon: d.svY,
          strLocToken: "#Notification_NewCommentPinned_Body",
          feature: 2,
        },
        {
          fnUrl: () =>
            `${v.De.COMMUNITY_BASE_URL}profiles/${v.L7.steamid}/inventory`,
          countItem: "inventory_items",
          icon: d.F8F,
          strLocToken: "#Notification_NewItemAnnouncementPinned_Body",
          feature: 3,
        },
        {
          fnUrl: () =>
            `${v.De.COMMUNITY_BASE_URL}profiles/${v.L7.steamid}/tradeoffers`,
          countItem: "trade_offers",
          icon: d.hoX,
          strLocToken: "#Notification_NewTradeOffersPinned_Body",
          feature: 6,
        },
        {
          fnUrl: () =>
            `${v.De.COMMUNITY_BASE_URL}profiles/${v.L7.steamid}/gamenotifications`,
          countItem: "async_game_updates",
          icon: d.ydL,
          strLocToken: "#Notification_NewAsyncGamePinned_Body",
        },
        {
          fnUrl: () => `${v.De.COMMUNITY_BASE_URL}my/moderatormessages`,
          countItem: "moderator_messages",
          icon: u.dqu,
          strLocToken: "#Notification_NewModeratorMessagePinned_Body",
          feature: 2,
        },
        {
          fnUrl: () => `${v.De.HELP_BASE_URL}wizard/HelpRequests`,
          countItem: "help_request_replies",
          icon: d.t6e,
          strLocToken: "#Notification_NewHelpRequestRepliesPinned_Body",
        },
        {
          fnUrl: () =>
            `${v.De.STORE_BASE_URL}account/familymanagement/join?ft=${v.L7.steamid}`,
          countItem: "family_invites",
          icon: d.ui7,
          strLocToken: "#Notification_FamilyInvitePinned_Body",
        },
      ];
      function S() {
        const e = T();
        return r.createElement(
          r.Fragment,
          null,
          A.map((t) =>
            r.createElement(E.sz, {
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
      function C() {
        return r.createElement(
          "div",
          { className: h().EmptyNotificationsCtn },
          r.createElement(
            "div",
            { className: h().EmptyNotificationsTitle },
            (0, _.Xx)("#NotificationsList_EmptyTitle_New"),
          ),
          r.createElement(
            "div",
            { className: h().EmptyNotificationsBody },
            (0, _.Xx)("#NotificationsList_EmptyBody"),
          ),
        );
      }
      const R = b;
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
              (this.m_elTracked && this.m_observer.unobserve(this.m_elTracked),
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
          let {
            onVisibilityChange: e,
            rootMargin: t,
            trigger: n,
            bHorizontal: i,
            ...r
          } = this.props;
          return o.createElement(
            "div",
            { ref: this.m_refElement, ...r },
            this.props.children,
          );
        }
      }
      (0, i.gn)([s.ak], l.prototype, "OnIntersection", null);
    },
  },
]);
