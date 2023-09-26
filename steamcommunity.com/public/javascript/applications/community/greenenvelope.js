/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [3068],
  {
    159: (e) => {
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
          GreenEnvelope: () => b,
          default: () => $,
          useSteamNotifications: () => h,
        });
      var i = n(33940),
        o = n(89526),
        r = n(26),
        l = n(19304),
        s = n(14826),
        a = n(40103),
        c = n(159),
        u = n.n(c),
        m = n(44973),
        d = n(77427),
        f = n(16826),
        _ = n(25125),
        v = n(86770),
        p = n(75457),
        E = n(27070),
        g = n(41576);
      const N = new r.tL();
      function b(e) {
        const { bResponsiveHeader: t, notifications: n } = e;
        o.useEffect(() => {
          n && !N.m_bLoaded && N.ProcessNewNotificationPayload(n);
        }, [n]);
        const l = (0, E.bY)();
        (0, o.useEffect)(() => {
          N.setTransport(l),
            (window.RefreshSteamNotifications = () =>
              (function (e) {
                return (0, i.mG)(this, void 0, void 0, function* () {
                  let t = null;
                  try {
                    t = yield (0, r.gQ)(
                      e,
                      m.L7.steamid,
                      (0, p.jM)(m.De.LANGUAGE),
                      !1,
                    );
                  } catch (e) {}
                  t && N.ProcessNewNotificationPayload(t);
                });
              })(l));
        }, [l]);
        const s = h();
        return t
          ? o.createElement(
              o.Fragment,
              null,
              o.createElement(S, null),
              o.createElement(C, null),
            )
          : o.createElement(M, { nTotalUnviewed: s.nUnviewed });
      }
      function h() {
        return (0, _.SZ)(() => ({
          notifications: N.m_rgNotificationRollups,
          summary: Object.assign({}, N.m_summary),
          loaded: N.m_bLoaded,
          nUnviewed: N.m_nUnviewed,
        }));
      }
      function y() {
        return h().notifications.filter((e) => !(0, r.sA)(e.item));
      }
      function M(e) {
        const { nTotalUnviewed: t } = e,
          n = o.useRef(),
          i = y(),
          [r, s] = o.useState(u().AnimateBell);
        o.useEffect(() => {
          n.current ||
            ((n.current = (0, a.yV)(
              o.createElement(U, { popupRef: n }),
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
                    N.MarkAllItemsViewed();
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
      const U = (e) => {
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
              o.createElement(B, null),
            ),
          );
        },
        w = () =>
          o.createElement(
            "div",
            { className: (0, l.Z)(u().NotificationHeader) },
            o.createElement(
              "div",
              { className: u().AllNotificationsTitle },
              (0, s.Xx)("#NotificationsMenu_Title"),
            ),
            o.createElement(
              "button",
              {
                className: u().AllNotificationsButton,
                onClick: () =>
                  window.location.assign(
                    `${m.De.COMMUNITY_BASE_URL}profiles/${m.L7.steamid}/notifications`,
                  ),
              },
              (0, s.Xx)("#NotificationsMenu_ViewAll"),
            ),
          ),
        C = () =>
          o.createElement(
            "div",
            {
              className: (0, l.Z)(
                u().NotificationHeader,
                u().ResponsiveViewAll,
              ),
            },
            o.createElement(
              "button",
              {
                className: u().AllNotificationsButton,
                onClick: () =>
                  window.location.assign(
                    `${m.De.COMMUNITY_BASE_URL}profiles/${m.L7.steamid}/notifications`,
                  ),
              },
              (0, s.Xx)("#NotificationsMenu_ViewAll"),
            ),
          );
      function T(e, t, n) {
        t.read ||
          (n && 0 != n.button && 1 != n.button) ||
          N.MarkItemRead(t.notification_id),
          e();
      }
      function B() {
        const e = h(),
          t = y();
        return t.length || (0, r.ft)(e.summary)
          ? o.createElement(
              "div",
              { className: u().NotificationsMenuEntriesContainer },
              t.map((e, t) =>
                o.createElement(v.RW, {
                  key: t,
                  rollup: e,
                  onNotificationClick: T,
                  uimode: p.se.k_EUIMode_Web,
                  location: d.IS.Tray,
                }),
              ),
            )
          : o.createElement(G, null);
      }
      function S() {
        return o.createElement(
          "div",
          null,
          o.createElement(A, null),
          o.createElement(O, null),
          o.createElement(L, null),
          o.createElement(k, null),
          o.createElement(I, null),
          o.createElement(R, null),
          o.createElement(H, null),
          o.createElement(D, null),
        );
      }
      function A() {
        const e = h(),
          t = `${m.De.COMMUNITY_BASE_URL}profiles/${m.L7.steamid}/inventory/#pending_gifts`;
        return o.createElement(v.wY, {
          url: t,
          count: e.summary.pending_gifts,
        });
      }
      function L() {
        const e = h(),
          t = `${m.De.COMMUNITY_BASE_URL}profiles/${m.L7.steamid}/notifications#comments`;
        return o.createElement(v.DY, { url: t, count: e.summary.comments });
      }
      function O() {
        const e = h(),
          t = `${m.De.COMMUNITY_BASE_URL}profiles/${m.L7.steamid}/home/invites`;
        return o.createElement(v.b9, {
          url: t,
          count: e.summary.pending_invites,
        });
      }
      function k() {
        const e = h(),
          t = `${m.De.COMMUNITY_BASE_URL}profiles/${m.L7.steamid}/inventory`;
        return o.createElement(v.TO, {
          url: t,
          count: e.summary.inventory_items,
        });
      }
      function I() {
        const e = h(),
          t = `${m.De.COMMUNITY_BASE_URL}profiles/${m.L7.steamid}/tradeoffers`;
        return o.createElement(v.OU, { url: t, count: e.summary.trade_offers });
      }
      function R() {
        const e = h(),
          t = `${m.De.COMMUNITY_BASE_URL}profiles/${m.L7.steamid}/gamenotifications`;
        return o.createElement(v.Lo, {
          url: t,
          count: e.summary.async_game_updates,
        });
      }
      function D() {
        const e = h(),
          t = `${m.De.HELP_BASE_URL}wizard/HelpRequests`;
        return o.createElement(v.ZS, {
          url: t,
          count: e.summary.help_request_replies,
        });
      }
      function H() {
        const e = h(),
          t = `${m.De.COMMUNITY_BASE_URL}my/moderatormessages`;
        return o.createElement(v.V2, {
          url: t,
          count: e.summary.moderator_messages,
        });
      }
      function G() {
        return o.createElement(
          "div",
          { className: u().EmptyNotificationsCtn },
          o.createElement(
            "div",
            { className: u().EmptyNotificationsTitle },
            (0, s.Xx)("#NotificationsList_EmptyTitle_New"),
          ),
          o.createElement(
            "div",
            { className: u().EmptyNotificationsBody },
            (0, s.Xx)("#NotificationsList_EmptyBody"),
          ),
        );
      }
      const $ = b;
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
