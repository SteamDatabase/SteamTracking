/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [6893],
    {
      29914: (T, A, a) => {
        "use strict";
        a.r(A), a.d(A, { default: () => lt });
        var s = a(7850),
          u = a(90626),
          l = a(48453),
          y = a(80862),
          B = a(3166),
          M = a(98609),
          O = a(36118),
          N = a(99412),
          P = a(68312),
          g = a(19316),
          c = a(18210),
          k = a(68e3),
          o = a.n(k),
          x = a(14947),
          F = a(65946),
          w = a(42993),
          U = a(13854),
          b = a(3692),
          X = Object.defineProperty,
          G = Object.getOwnPropertyDescriptor,
          L = (i, t, e, n) => {
            for (
              var r = n > 1 ? void 0 : n ? G(t, e) : t, f = i.length - 1, m;
              f >= 0;
              f--
            )
              (m = i[f]) && (r = (n ? m(t, e, r) : m(r)) || r);
            return n && r && X(t, e, r), r;
          },
          Y = ((i) => (
            (i[(i.k_All = 0)] = "k_All"),
            (i[(i.k_Owned = 1)] = "k_Owned"),
            (i[(i.k_Subscribed = 2)] = "k_Subscribed"),
            i
          ))(Y || {});
        class S {
          constructor() {
            (0, x.Gn)(this);
          }
          rgFilterState = new Map();
          commentFilter = {
            type: 0,
            setItemTypes: new Set([]),
            fnFilter: () => !0,
          };
          k_rgFilterCheckboxes = [
            {
              type: l.Vv.v_,
              display: (0, c.we)("#NotificationsFilters_Comments"),
              hash: "comments",
            },
            {
              type: l.Vv.XJ,
              display: (0, c.we)("#NotificationsFilters_Wishlist"),
              hash: "wishlist",
            },
            {
              type: l.Vv.pZ,
              display: (0, c.we)("#NotificationsFilters_FriendRequest"),
              hash: "invites",
            },
            {
              type: l.Vv.K,
              display: (0, c.we)("#NotificationsFilters_Gifts"),
              hash: "gifts",
            },
            {
              type: l.Vv.hW,
              display: (0, c.we)("#NotificationsFilters_Inventory"),
              hash: "inventory",
            },
            {
              type: l.Vv.Y9,
              display: (0, c.we)("#NotificationsFilters_AsyncGame"),
              hash: "asyncgame",
            },
            {
              type: l.Vv.wY,
              display: (0, c.we)("#NotificationsFilters_HelpRequest"),
              hash: "help",
            },
            {
              type: l.Vv.an,
              display: (0, c.we)("#NotificationsFilters_TradeOffer"),
              hash: "trade",
            },
            {
              type: l.Vv.e9,
              display: (0, c.we)("#NotificationsFilters_General"),
              hash: "general",
            },
          ];
          k_rgCommentFilters = [
            {
              type: 0,
              display: (0, c.we)("#NotificationsList_CommentFilters_All"),
              fnFilter: () => !0,
            },
            {
              type: 1,
              display: (0, c.we)("#NotificationsList_CommentFilters_YourItems"),
              fnFilter: this.IsCommentOwned,
            },
            {
              type: 2,
              display: (0, c.we)(
                "#NotificationsList_CommentFilters_Subscribed",
              ),
              fnFilter: this.IsCommentSubscribed,
            },
          ];
          IsCommentOwned(t, e) {
            return t.bis_owner || t.owner_steam_id.ConvertTo64BitString() == e;
          }
          IsCommentSubscribed(t, e) {
            return t.bsubscribed;
          }
          ProcessHash(t) {
            this.rgFilterState.clear(),
              this.commentFilter.setItemTypes.clear(),
              t &&
                t.split(",").forEach((n) => {
                  const r = this.k_rgFilterCheckboxes.findIndex(
                    (f) => f.hash == n,
                  );
                  r !== -1
                    ? this.rgFilterState.set(
                        this.k_rgFilterCheckboxes[r].type,
                        !0,
                      )
                    : (0, U.TG)(n) &&
                      this.rgFilterState.has(l.Vv.v_) &&
                      this.commentFilter.setItemTypes.add(parseInt(n));
                });
          }
          SetFilter(t, e, n) {
            n &&
              (this.rgFilterState.clear(),
              this.commentFilter.setItemTypes.clear()),
              t &&
                (this.rgFilterState.set(t, e),
                t == l.Vv.v_ && !e && this.commentFilter.setItemTypes.clear()),
              this.UpdateLocationHash();
          }
          SetCommentFilter(t) {
            (this.commentFilter = t),
              (this.commentFilter.fnFilter = this.k_rgCommentFilters.find(
                (e) => e.type == t.type,
              )?.fnFilter),
              this.UpdateLocationHash();
          }
          UpdateLocationHash() {
            let t = "";
            this.rgFilterState.forEach((e, n) => {
              e &&
                (t +=
                  (t ? "," : "") +
                  this.k_rgFilterCheckboxes.find((r) => r.type == n)?.hash);
            }),
              this.rgFilterState.has(l.Vv.v_) &&
                this.commentFilter.setItemTypes.forEach(
                  (e) => (t += (t ? "," : "") + e),
                ),
              window.history.pushState(
                {},
                null,
                window.location.pathname + (t ? "#" + t : ""),
              );
          }
        }
        L([x.sH], S.prototype, "rgFilterState", 2),
          L([x.sH], S.prototype, "commentFilter", 2);
        function R() {
          (0, F.q3)(() => [...h.rgFilterState]);
          let i = 0;
          return (
            h.rgFilterState.forEach((t) => {
              i += t ? 1 : 0;
            }),
            { numActive: i, filters: h.rgFilterState }
          );
        }
        function z() {
          const i = j(),
            t = (0, y.V8)();
          return (
            i.map((e) => {
              e.item.hidden || (0, y.kE)(t, e.type, e.rgunread?.length);
            }),
            (0, y.PI)(t)
          );
        }
        function V() {
          return (0, F.q3)(() => h.commentFilter);
        }
        function K() {
          return u.useMemo(() => {
            const i = new Map();
            for (const t of d.m_rgNotificationRollups)
              i.set(t.type, 1 + (i.get(t.type) || 0));
            return i;
          }, []);
        }
        function J() {
          const i = (0, w.LH)();
          return u.useMemo(() => {
            const t = new Map();
            for (const e of h.k_rgCommentFilters)
              for (const n of d.m_rgNotificationRollups.filter(
                (r) => r.type == l.Vv.v_,
              )) {
                const r = (0, y.bP)(n);
                e.fnFilter(r, i) && t.set(e.type, 1 + (t.get(e.type) || 0));
              }
            return t;
          }, [i]);
        }
        function H() {
          return u.useMemo(() => {
            const i = new Map();
            for (const t of d.m_rgNotificationRollups.filter(
              (e) => e.type == l.Vv.v_,
            )) {
              const e = (0, y.bP)(t);
              i.set(e.comment_type, 1 + (i.get(e.comment_type) || 0));
            }
            return i;
          }, []);
        }
        function j() {
          const { numActive: i, filters: t } = R(),
            e = V(),
            n = (0, w.LH)(),
            { settings: r } = (0, b.S0)(n).data,
            f = (0, b.BM)();
          return (
            (0, F.q3)(() => (0, y.PI)(d.m_summary)),
            d.m_rgNotificationRollups.filter((m) => {
              if ((i && !t.get(m.type)) || (0, y.jb)(m.type, r, f)) return !1;
              if (
                i &&
                m.type == l.Vv.v_ &&
                (e.type != 0 || e.setItemTypes.size > 0)
              ) {
                const p = (0, y.bP)(m);
                let v = !e.fnFilter || e.fnFilter(p, n);
                return (
                  e.setItemTypes.size > 0 &&
                    !e.setItemTypes.has(p.comment_type) &&
                    (v = !1),
                  v
                );
              }
              return !0;
            })
          );
        }
        function ft() {
          return d.m_summary;
        }
        const h = new S(),
          d = new y.cE();
        var C = a(19298),
          E = a(54963),
          I = a(36707),
          Z = a(90297),
          W = a(51079),
          D = a(24660);
        function Q(i) {
          const { hash: t } = i;
          (0, u.useEffect)(() => {
            h.ProcessHash(t);
          }, [t]);
          const e = (0, P.KV)();
          (0, u.useEffect)(() => {
            d.setTransport(e), d.m_nUnviewed > 0 && d.MarkAllItemsViewed();
          }, [e]);
          const n = (0, B.Tc)("notifications", "application_config");
          return (
            d.ProcessNewNotificationPayload(n),
            d.m_rgNotificationRollups.length
              ? (0, s.jsx)(s.Fragment, {
                  children: (0, s.jsxs)("div", {
                    className: o().NotificationPageCtn,
                    children: [
                      (0, s.jsxs)("div", {
                        className: o().NotificationsHeader,
                        children: [
                          (0, s.jsx)("span", {
                            className: o().NotificationsHeaderTitle,
                            children: (0, c.we)("#NotificationsList_Header"),
                          }),
                          (0, s.jsx)($, {}),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: o().NotificationsBody,
                        children: [
                          (0, s.jsx)("div", {
                            className: o().NotificationListCtn,
                            children: (0, s.jsx)(_, {}),
                          }),
                          (0, s.jsxs)("div", {
                            className: o().NotificationFiltersCtn,
                            children: [
                              (0, s.jsx)(tt, {}),
                              (0, s.jsx)("div", {
                                className: o().NotificationActions,
                                children: (0, s.jsx)(D.Ii, {
                                  href: "/my/moderatormessages",
                                  children: (0, c.we)("#CommunityActivity"),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                })
              : (0, s.jsx)("div", {
                  className: o().NotificationPageCtn,
                  children: (0, s.jsx)(q, {}),
                })
          );
        }
        function $() {
          const i = z(),
            t = (0, c.we)("#NotificationsList_Unread", i);
          return (0, s.jsx)("span", {
            className: o().NotificationsHeaderUnread,
            children: t,
          });
        }
        function _() {
          const i = j();
          return (0, s.jsx)(C.Z, {
            className: o().NotificationsList,
            children: i.map((t, e) => (0, s.jsx)(rt, { rollup: t }, e)),
          });
        }
        function q() {
          return (0, s.jsxs)(C.Z, {
            className: o().EmptyNotifications,
            children: [
              (0, s.jsx)(C.Z, {
                className: o().EmptyNotificationsTitle,
                children: (0, c.we)("#NotificationsList_EmptyTitle"),
              }),
              (0, s.jsx)(C.Z, {
                className: o().EmptyNotificationsBody,
                children: (0, c.we)("#NotificationsList_EmptyBody"),
              }),
            ],
          });
        }
        function tt() {
          const i = j(),
            t = K(),
            e = () =>
              window.location.assign(
                `${M.TS.STORE_BASE_URL}account/notificationsettings`,
              );
          return (0, s.jsxs)("div", {
            className: o().NotificationsFilterCtn,
            children: [
              (0, s.jsxs)("div", {
                className: o().SettingsButtons,
                children: [
                  (0, s.jsx)("div", {
                    className: o().SettingsTooltip,
                    children: (0, s.jsx)(g.$n, {
                      className: o().MarkAllReadButton,
                      onClick: () => d.MarkAllItemsRead(i),
                      children: (0, c.we)("#NotificationsList_MarkAllRead"),
                    }),
                  }),
                  (0, s.jsxs)(g.$n, {
                    className: o().SettingsButton,
                    onClick: e,
                    children: [
                      (0, s.jsx)(O.wB_, { className: o().SettingsImg }),
                      (0, c.we)("#NotificationsList_Settings"),
                    ],
                  }),
                ],
              }),
              (0, s.jsx)("div", {
                className: o().SettingsFiltersTitle,
                children: (0, c.we)("#NotificationsList_FilterTo"),
              }),
              (0, s.jsx)("div", {
                className: o().SettingsFilters,
                children: h.k_rgFilterCheckboxes
                  .filter((n) => t.has(n.type))
                  .map((n) => (0, s.jsx)(et, { filterOptions: n }, n.type)),
              }),
              (0, s.jsx)(g.$n, {
                className: o().ResetButton,
                onClick: () => h.SetFilter(null, !1, !0),
                children: (0, c.we)("#NotificationsList_Reset"),
              }),
            ],
          });
        }
        function et(i) {
          const { filterOptions: t } = i,
            { filters: e } = R();
          return t.type == l.Vv.v_
            ? (0, s.jsx)(ot, { filterOptions: t, checked: e.get(t.type) })
            : (0, s.jsx)(
                g.Yh,
                {
                  className: o().FilterCheckbox,
                  label: t.display,
                  checked: e.get(t.type),
                  onChange: (n) => h.SetFilter(t.type, n),
                },
                t.type,
              );
        }
        function it(i) {
          const { threadType: t } = i,
            e = V(),
            n = (r) => {
              r
                ? (e.setItemTypes.add(Number(t)),
                  h.SetCommentFilter({
                    type: e.type,
                    setItemTypes: e.setItemTypes,
                  }))
                : (e.setItemTypes.delete(Number(t)),
                  h.SetCommentFilter({
                    type: e.type,
                    setItemTypes: e.setItemTypes,
                  }));
            };
          return (0, s.jsx)(g.Yh, {
            className: o().AdvancedCommentFilterCheckbox,
            label: (0, c.we)("#CommentThreadType_" + t),
            checked: e.setItemTypes.has(t),
            onChange: n,
          });
        }
        function st(i) {
          const { className: t } = i,
            e = H();
          return (0, s.jsx)("div", {
            className: (0, I.A)(o().AdvancedCommentFilters, t),
            children: Array.from(e.keys()).map((n) =>
              (0, s.jsx)(it, { threadType: n }, n),
            ),
          });
        }
        function nt(i) {
          const { expanded: t, children: e } = i,
            [n, r] = (0, u.useState)(void 0),
            f = (p) => {
              const v = p.target;
              r(v.scrollHeight);
            },
            m = (0, E.wY)(f);
          return (0, s.jsx)("div", {
            className: (0, I.A)(o().Expander, o().Expanded),
            style: { height: t ? n : 0 },
            children: (0, s.jsx)("div", { ref: m, children: e }),
          });
        }
        function ot(i) {
          const { filterOptions: t, checked: e } = i,
            n = J(),
            r = H(),
            f = (dt) => {
              h.SetFilter(t.type, dt);
            },
            m = !1,
            p = m || n.size > 2,
            v = m || r.size > 1,
            mt = p || v;
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(
                g.Yh,
                {
                  className: o().FilterCheckbox,
                  label: t.display,
                  checked: e,
                  onChange: f,
                },
                t.type,
              ),
              mt &&
                (0, s.jsx)("div", {
                  className: (0, I.A)(o().CommentFilterCtn, e && o().Expanded),
                  children: (0, s.jsx)(nt, {
                    expanded: e,
                    children: (0, s.jsx)("div", {
                      className: o().CommentFilters,
                      children:
                        v && (0, s.jsx)(st, { className: o().Expanded }),
                    }),
                  }),
                }),
            ],
          });
        }
        function at(i, t, e) {
          !t.read &&
            (!e || e.button == 0 || e.button == 1) &&
            d.MarkItemRead(t.notification_id),
            i();
        }
        function rt(i) {
          const { rollup: t } = i;
          (0, F.q3)(() => t.item.hidden);
          const [e, n] = u.useState(!1),
            r = (0, E.BL)(
              (0, u.useCallback)((p) => {
                p.isIntersecting && n(!0);
              }, []),
              { rootMargin: "600px" },
            ),
            f = (0, u.useCallback)(() => {
              d.MarkItemHidden(t.item.notification_id);
            }, [t.item.notification_id]);
          if (t.item.hidden) return null;
          if (t.item.hidden && t.type == l.Vv.pZ) {
            const p = (0, y.bP)(t);
            if ((0, N.aPS)(p.state) || p.state == N.Yjh) return null;
          }
          const m = (0, Z.Rd)(t.type);
          return m
            ? (0, s.jsx)(W.Ay, {
                controller: "notification",
                method: (0, N.fLp)(N.yrU),
                submethod: (0, N.ey3)(N.oYe),
                children: (0, s.jsx)(ct, {
                  ref: r,
                  children:
                    e &&
                    (0, s.jsx)(m, {
                      rollup: t,
                      onNotificationClick: at,
                      onHide: f,
                      location: N.oYe,
                      uimode: N.yrU,
                    }),
                }),
              })
            : null;
        }
        const ct = u.forwardRef((i, t) =>
          (0, s.jsx)("div", {
            className: o().AllNotificationsRowCtn,
            ref: t,
            children: i.children,
          }),
        );
        function lt(i) {
          let t = i.location.hash;
          return (
            t && t.startsWith("#") && (t = t.slice(1)),
            (0, s.jsx)(Q, { hash: t })
          );
        }
      },
      68e3: (T) => {
        T.exports = {
          narrowWidth: "500px",
          notificationRowHeight: "72px",
          NotificationPageCtn: "_2DCeN21MQJGwVpPCXcT2QJ",
          NotificationsBody: "_35hlMprL--UdgfHJGuGnJR",
          NotificationsHeader: "_1bLYafVT6_4DisbgdimwXc",
          NotificationsHeaderTitle: "_39iFFMnPRQXd5IL6PGoOcn",
          NotificationsHeaderUnread: "_3iXuG9K_6ttnP8gOhOR7Iv",
          NotificationListCtn: "_1cj-7JmCC_IQ4ZdxxUo43Q",
          NotificationsList: "KG3qM6Y1DpK-afn15yeaT",
          AllNotificationsRowCtn: "_3Y-y3pAcXpqgpuUTLQkz86",
          NotificationFiltersCtn: "_1uSw_aqus0W7yb3vT9_-22",
          EmptyNotifications: "_3t24BJeKfB-KBIct4_UuX8",
          EmptyNotificationsTitle: "_uGFLI7t_2emsn37l93hZ",
          EmptyNotificationsBody: "_3Iomc0Ep9lyBB_QNlE8p4n",
          SettingsButtons: "_3B7mJdJw-FhqV6l5q-IFO_",
          SettingsTooltip: "_3ZlbZ5ev0L-hcx-z4JItgd",
          MarkAllReadButton: "_37UjwIEFODwKdnz3d90mdF",
          SettingsButton: "T8q00Eg6Sx2u-N2ySzMrg",
          SettingsImg: "_1XXJX0-wXgz7O3Bd0qimBX",
          SettingsFiltersTitle: "_4T-jWhXP-AWt4AatyamIk",
          SettingsFilters: "_1YDIAzUAWf7ueOLgHLbGeF",
          FilterCheckbox: "_2C4dM9ELcMmtBLz8SavLK4",
          ResetButton: "_3Z8otCycVht4XocANv_EPb",
          CommentIcon: "o_I3vYqgbLhw7c8iXVwb3",
          CommentFilterCtn: "-GWy_nsP_d9rJnCNgx8NK",
          AdvancedCommentFilters: "irq6koPKVmtQ5H7U8EAoA",
          Expanded: "_2hRRl_cNi9X4Veh7FeK-F4",
          CommentRadioGroup: "_2_xVHbSZ7fCv3LUz-THkR5",
          Expander: "MjW-ILAVK028V2xI8eCfW",
          NotificationActions: "_3R-McPl3j1ANvRa0U9reMV",
        };
      },
    },
  ]);
})();
