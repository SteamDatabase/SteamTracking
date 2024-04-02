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
          GreenEnvelope: () => T,
          default: () => O,
          useSteamNotifications: () => M,
        });
      var i = n(85556),
        o = n(77936),
        r = n(30750),
        s = n(47427),
        l = n(53923),
        a = n(75683),
        c = n(40057),
        m = n(95315),
        u = n(85082),
        d = n(58538),
        f = n(62613),
        _ = n(13129),
        v = n(31846),
        p = n(65255),
        h = n(10162),
        N = n(88234),
        E = n.n(N),
        y = n(19067),
        g = n(44500);
      const b = new u.tL(),
        T = (0, h.AP)(function (e) {
          const { bResponsiveHeader: t, notifications: n } = e;
          s.useEffect(() => {
            n && !b.m_bLoaded && b.ProcessNewNotificationPayload(n);
          }, [n]);
          const r = (0, c.bY)();
          (0, s.useEffect)(() => {
            b.setTransport(r),
              (window.RefreshSteamNotifications = () =>
                (function (e) {
                  return (0, i.mG)(this, void 0, void 0, function* () {
                    let t = null;
                    try {
                      t = yield (0, u.gQ)(
                        e,
                        p.L7.steamid,
                        (0, o.jM)(p.De.LANGUAGE),
                        void 0,
                        !1,
                        !1,
                      );
                    } catch (e) {}
                    t && b.ProcessNewNotificationPayload(t);
                  });
                })(r));
          }, [r]);
          const l = M();
          return t
            ? s.createElement(
                s.Fragment,
                null,
                s.createElement(S, null),
                s.createElement(k, null),
              )
            : s.createElement(U, { nTotalUnviewed: l.nUnviewed });
        });
      function M() {
        return (0, r.SZ)(() => ({
          notifications: b.m_rgNotificationRollups,
          summary: b.m_summary,
          loaded: b.m_bLoaded,
          nUnviewed: b.m_nUnviewed,
        }));
      }
      function L() {
        const e = M(),
          t = (0, l.M)(),
          { data: n } = (0, a.X1)(t),
          i = (0, a.T8)(),
          o = null == n ? void 0 : n.settings;
        return e.notifications.filter((e) => {
          const t = (0, u.nM)(e.type);
          return !(0, a.Bu)(o, t.eFeature, i) && !(0, u.sA)(e.item);
        });
      }
      function U(e) {
        const { nTotalUnviewed: t } = e,
          n = s.useRef(null),
          i = L(),
          [o, r] = s.useState(E().AnimateBell);
        s.useEffect(() => {
          n.current ||
            ((n.current = (0, m.yV)(
              s.createElement(B, { popupRef: n }),
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
            window.setTimeout(() => r(null), 2e3);
        }, []);
        const l = s.useCallback(
          (e) => {
            var t;
            !e &&
              (null === (t = n.current) || void 0 === t ? void 0 : t.visible) &&
              n.current.Hide();
          },
          [n],
        );
        return s.createElement(
          g.U,
          { trigger: "repeated", onVisibilityChange: l },
          s.createElement(
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
                    b.MarkAllItemsViewed();
                }
              },
              id: "green_envelope_menu_root",
              className: (0, _.Z)(
                E().NotificationsButton,
                t ? E().Green : E().Grey,
                o,
              ),
            },
            s.createElement(d.Tx5, { className: E().SVGNotifications }),
          ),
        );
      }
      const B = (e) => {
          var t;
          const { popupRef: n } = e,
            i = s.useRef(null),
            [o, r] = s.useState(!1);
          s.useEffect(() => {
            var e, t;
            r(
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
          const l = o ? void 0 : E().MenuScrollbarHidden;
          return s.createElement(
            "div",
            {
              className: E().NotificationsMenu,
              onClick: () => {
                var e;
                return null === (e = null == n ? void 0 : n.current) ||
                  void 0 === e
                  ? void 0
                  : e.Hide();
              },
            },
            s.createElement(w, null),
            s.createElement(
              "div",
              {
                className: (0, _.Z)(E().NotificationsMenuScrollable, l),
                ref: i,
              },
              s.createElement(S, null),
              s.createElement(A, null),
              s.createElement(R, null),
            ),
          );
        },
        w = () => {
          const e = `${p.De.COMMUNITY_BASE_URL}profiles/${p.L7.steamid}/notifications`;
          return s.createElement(
            "div",
            { className: (0, _.Z)(E().NotificationHeader) },
            s.createElement(
              "div",
              { className: E().AllNotificationsTitle },
              (0, v.Xx)("#NotificationsMenu_Title"),
            ),
            s.createElement(
              "a",
              { href: e },
              s.createElement(
                "div",
                { className: E().AllNotificationsButton },
                (0, v.Xx)("#NotificationsMenu_ViewAll"),
              ),
            ),
          );
        },
        k = () => {
          const e = `${p.De.COMMUNITY_BASE_URL}profiles/${p.L7.steamid}/notifications`;
          return s.createElement(
            "div",
            {
              className: (0, _.Z)(
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
                (0, v.Xx)("#NotificationsMenu_ViewAll"),
              ),
            ),
          );
        };
      function I(e, t, n) {
        t.read ||
          (n && 0 != n.button && 1 != n.button) ||
          !t.notification_id ||
          b.MarkItemRead(t.notification_id),
          e();
      }
      function A() {
        const e = L();
        return 0 == e.length
          ? null
          : s.createElement(
              "div",
              { className: E().NotificationsMenuEntriesContainer },
              e.map((e, t) =>
                s.createElement(y.RW, {
                  key: t,
                  rollup: e,
                  onNotificationClick: I,
                  uimode: 3,
                  location: 3,
                }),
              ),
            );
      }
      const C = [
        {
          fnUrl: () =>
            `${p.De.COMMUNITY_BASE_URL}profiles/${p.L7.steamid}/inventory/#pending_gifts`,
          countItem: "pending_gifts",
          icon: f.ncs,
          strLocToken: "#Notification_NewGiftsPinned_Body",
          feature: 1,
        },
        {
          fnUrl: () =>
            `${p.De.COMMUNITY_BASE_URL}profiles/${p.L7.steamid}/home/invites`,
          countItem: "pending_invites",
          icon: f.yBp,
          strLocToken: "#Notification_FriendInvitePinned_Body",
          feature: 4,
        },
        {
          fnUrl: () =>
            `${p.De.COMMUNITY_BASE_URL}profiles/${p.L7.steamid}/notifications#comments`,
          countItem: "comments",
          icon: f.svY,
          strLocToken: "#Notification_NewCommentPinned_Body",
          feature: 2,
        },
        {
          fnUrl: () =>
            `${p.De.COMMUNITY_BASE_URL}profiles/${p.L7.steamid}/inventory`,
          countItem: "inventory_items",
          icon: f.F8F,
          strLocToken: "#Notification_NewItemAnnouncementPinned_Body",
          feature: 3,
        },
        {
          fnUrl: () =>
            `${p.De.COMMUNITY_BASE_URL}profiles/${p.L7.steamid}/tradeoffers`,
          countItem: "trade_offers",
          icon: f.hoX,
          strLocToken: "#Notification_NewTradeOffersPinned_Body",
          feature: 6,
        },
        {
          fnUrl: () =>
            `${p.De.COMMUNITY_BASE_URL}profiles/${p.L7.steamid}/gamenotifications`,
          countItem: "async_game_updates",
          icon: f.ydL,
          strLocToken: "#Notification_NewAsyncGamePinned_Body",
        },
        {
          fnUrl: () => `${p.De.COMMUNITY_BASE_URL}my/moderatormessages`,
          countItem: "moderator_messages",
          icon: d.dqu,
          strLocToken: "#Notification_NewModeratorMessagePinned_Body",
          feature: 2,
        },
        {
          fnUrl: () => `${p.De.HELP_BASE_URL}wizard/HelpRequests`,
          countItem: "help_request_replies",
          icon: f.t6e,
          strLocToken: "#Notification_NewHelpRequestRepliesPinned_Body",
        },
        {
          fnUrl: () =>
            `${p.De.STORE_BASE_URL}account/familymanagement/join?ft=${p.L7.steamid}`,
          countItem: "family_invites",
          icon: f.ui7,
          strLocToken: "#Notification_FamilyInvitePinned_Body",
        },
      ];
      function S() {
        const e = M();
        return s.createElement(
          s.Fragment,
          null,
          C.map((t) =>
            s.createElement(y.sz, {
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
        return s.createElement(
          "div",
          { className: E().EmptyNotificationsCtn },
          s.createElement(
            "div",
            { className: E().EmptyNotificationsTitle },
            (0, v.Xx)("#NotificationsList_EmptyTitle_New"),
          ),
          s.createElement(
            "div",
            { className: E().EmptyNotificationsBody },
            (0, v.Xx)("#NotificationsList_EmptyBody"),
          ),
        );
      }
      const O = T;
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
