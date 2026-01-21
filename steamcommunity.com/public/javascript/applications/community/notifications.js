/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [6893],
  {
    68e3: (e) => {
      e.exports = {
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
    32664: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => W });
      var n,
        s = i(90626),
        a = i(88080),
        o = i(78327),
        r = i(30470),
        l = i(12155),
        c = i(22837),
        m = i(23809),
        d = i(68255),
        f = i(61859),
        p = i(68e3),
        u = i.n(p),
        h = i(34629),
        y = i(14947),
        _ = i(65946),
        N = i(68950),
        F = i(25489),
        g = i(60011);
      !(function (e) {
        (e[(e.k_All = 0)] = "k_All"),
          (e[(e.k_Owned = 1)] = "k_Owned"),
          (e[(e.k_Subscribed = 2)] = "k_Subscribed");
      })(n || (n = {}));
      class E {
        constructor() {
          (this.rgFilterState = new Map()),
            (this.commentFilter = {
              type: n.k_All,
              setItemTypes: new Set([]),
              fnFilter: () => !0,
            }),
            (this.k_rgFilterCheckboxes = [
              {
                type: 3,
                display: (0, f.we)("#NotificationsFilters_Comments"),
                hash: "comments",
              },
              {
                type: 8,
                display: (0, f.we)("#NotificationsFilters_Wishlist"),
                hash: "wishlist",
              },
              {
                type: 5,
                display: (0, f.we)("#NotificationsFilters_FriendRequest"),
                hash: "invites",
              },
              {
                type: 2,
                display: (0, f.we)("#NotificationsFilters_Gifts"),
                hash: "gifts",
              },
              {
                type: 4,
                display: (0, f.we)("#NotificationsFilters_Inventory"),
                hash: "inventory",
              },
              {
                type: 12,
                display: (0, f.we)("#NotificationsFilters_AsyncGame"),
                hash: "asyncgame",
              },
              {
                type: 11,
                display: (0, f.we)("#NotificationsFilters_HelpRequest"),
                hash: "help",
              },
              {
                type: 9,
                display: (0, f.we)("#NotificationsFilters_TradeOffer"),
                hash: "trade",
              },
              {
                type: 10,
                display: (0, f.we)("#NotificationsFilters_General"),
                hash: "general",
              },
            ]),
            (this.k_rgCommentFilters = [
              {
                type: n.k_All,
                display: (0, f.we)("#NotificationsList_CommentFilters_All"),
                fnFilter: () => !0,
              },
              {
                type: n.k_Owned,
                display: (0, f.we)(
                  "#NotificationsList_CommentFilters_YourItems",
                ),
                fnFilter: this.IsCommentOwned,
              },
              {
                type: n.k_Subscribed,
                display: (0, f.we)(
                  "#NotificationsList_CommentFilters_Subscribed",
                ),
                fnFilter: this.IsCommentSubscribed,
              },
            ]),
            (0, y.Gn)(this);
        }
        IsCommentOwned(e, t) {
          return e.bis_owner || e.owner_steam_id.ConvertTo64BitString() == t;
        }
        IsCommentSubscribed(e, t) {
          return e.bsubscribed;
        }
        ProcessHash(e) {
          if (
            (this.rgFilterState.clear(),
            this.commentFilter.setItemTypes.clear(),
            e)
          ) {
            e.split(",").forEach((e) => {
              const t = this.k_rgFilterCheckboxes.findIndex((t) => t.hash == e);
              -1 !== t
                ? this.rgFilterState.set(this.k_rgFilterCheckboxes[t].type, !0)
                : (0, F.TT)(e) &&
                  this.rgFilterState.has(3) &&
                  this.commentFilter.setItemTypes.add(parseInt(e));
            });
          }
        }
        SetFilter(e, t, i) {
          i &&
            (this.rgFilterState.clear(),
            this.commentFilter.setItemTypes.clear()),
            e &&
              (this.rgFilterState.set(e, t),
              3 != e || t || this.commentFilter.setItemTypes.clear()),
            this.UpdateLocationHash();
        }
        SetCommentFilter(e) {
          var t;
          (this.commentFilter = e),
            (this.commentFilter.fnFilter =
              null ===
                (t = this.k_rgCommentFilters.find((t) => t.type == e.type)) ||
              void 0 === t
                ? void 0
                : t.fnFilter),
            this.UpdateLocationHash();
        }
        UpdateLocationHash() {
          let e = "";
          this.rgFilterState.forEach((t, i) => {
            var n;
            t &&
              (e +=
                (e ? "," : "") +
                (null ===
                  (n = this.k_rgFilterCheckboxes.find((e) => e.type == i)) ||
                void 0 === n
                  ? void 0
                  : n.hash));
          }),
            this.rgFilterState.has(3) &&
              this.commentFilter.setItemTypes.forEach(
                (t) => (e += (e ? "," : "") + t),
              ),
            window.history.pushState(
              {},
              null,
              window.location.pathname + (e ? "#" + e : ""),
            );
        }
      }
      function C() {
        (0, _.q3)(() => [...b.rgFilterState]);
        let e = 0;
        return (
          b.rgFilterState.forEach((t) => {
            e += t ? 1 : 0;
          }),
          { numActive: e, filters: b.rgFilterState }
        );
      }
      function w() {
        return (0, _.q3)(() => b.commentFilter);
      }
      function k() {
        return s.useMemo(() => {
          const e = new Map();
          for (const t of v.m_rgNotificationRollups.filter(
            (e) => 3 == e.type,
          )) {
            const i = (0, a.bP)(t);
            e.set(i.comment_type, 1 + (e.get(i.comment_type) || 0));
          }
          return e;
        }, []);
      }
      function S() {
        const { numActive: e, filters: t } = C(),
          i = w(),
          s = (0, N.LH)(),
          { settings: o } = (0, g.S0)(s).data,
          r = (0, g.BM)();
        return (
          (0, _.q3)(() => (0, a.PI)(v.m_summary)),
          v.m_rgNotificationRollups.filter((l) => {
            if (e && !t.get(l.type)) return !1;
            if ((0, a.jb)(l.type, o, r)) return !1;
            if (
              e &&
              3 == l.type &&
              (i.type != n.k_All || i.setItemTypes.size > 0)
            ) {
              const e = (0, a.bP)(l);
              let t = !i.fnFilter || i.fnFilter(e, s);
              return (
                i.setItemTypes.size > 0 &&
                  !i.setItemTypes.has(e.comment_type) &&
                  (t = !1),
                t
              );
            }
            return !0;
          })
        );
      }
      (0, h.Cg)([y.sH], E.prototype, "rgFilterState", void 0),
        (0, h.Cg)([y.sH], E.prototype, "commentFilter", void 0);
      const b = new E(),
        v = new a.cE();
      var I = i(76217),
        T = i(73745),
        A = i(52038),
        L = i(16264),
        R = i(32630),
        x = i(45699);
      function B(e) {
        const { hash: t } = e;
        (0, s.useEffect)(() => {
          b.ProcessHash(t);
        }, [t]);
        const i = (0, m.KV)();
        (0, s.useEffect)(() => {
          v.setTransport(i), v.m_nUnviewed > 0 && v.MarkAllItemsViewed();
        }, [i]);
        const n = (0, o.Tc)("notifications", "application_config");
        return (
          v.ProcessNewNotificationPayload(n),
          v.m_rgNotificationRollups.length
            ? s.createElement(
                s.Fragment,
                null,
                s.createElement(
                  "div",
                  { className: u().NotificationPageCtn },
                  s.createElement(
                    "div",
                    { className: u().NotificationsHeader },
                    s.createElement(
                      "span",
                      { className: u().NotificationsHeaderTitle },
                      (0, f.we)("#NotificationsList_Header"),
                    ),
                    s.createElement(H, null),
                  ),
                  s.createElement(
                    "div",
                    { className: u().NotificationsBody },
                    s.createElement(
                      "div",
                      { className: u().NotificationListCtn },
                      s.createElement(M, null),
                    ),
                    s.createElement(
                      "div",
                      { className: u().NotificationFiltersCtn },
                      s.createElement(O, null),
                      s.createElement(
                        "div",
                        { className: u().NotificationActions },
                        s.createElement(
                          x.Ii,
                          { href: "/my/moderatormessages" },
                          (0, f.we)("#CommunityActivity"),
                        ),
                      ),
                    ),
                  ),
                ),
              )
            : s.createElement(
                "div",
                { className: u().NotificationPageCtn },
                s.createElement(P, null),
              )
        );
      }
      function H() {
        const e = (function () {
            const e = S(),
              t = (0, a.V8)();
            return (
              e.map((e) => {
                var i;
                e.item.hidden ||
                  (0, a.kE)(
                    t,
                    e.type,
                    null === (i = e.rgunread) || void 0 === i
                      ? void 0
                      : i.length,
                  );
              }),
              (0, a.PI)(t)
            );
          })(),
          t = (0, f.we)("#NotificationsList_Unread", e);
        return s.createElement(
          "span",
          { className: u().NotificationsHeaderUnread },
          t,
        );
      }
      function M() {
        const e = S();
        return s.createElement(
          I.Z,
          { className: u().NotificationsList },
          e.map((e, t) => s.createElement(K, { key: t, rollup: e })),
        );
      }
      function P() {
        return s.createElement(
          I.Z,
          { className: u().EmptyNotifications },
          s.createElement(
            I.Z,
            { className: u().EmptyNotificationsTitle },
            (0, f.we)("#NotificationsList_EmptyTitle"),
          ),
          s.createElement(
            I.Z,
            { className: u().EmptyNotificationsBody },
            (0, f.we)("#NotificationsList_EmptyBody"),
          ),
        );
      }
      function O() {
        const e = S(),
          t = s.useMemo(() => {
            const e = new Map();
            for (const t of v.m_rgNotificationRollups)
              e.set(t.type, 1 + (e.get(t.type) || 0));
            return e;
          }, []);
        return s.createElement(
          "div",
          { className: u().NotificationsFilterCtn },
          s.createElement(
            "div",
            { className: u().SettingsButtons },
            s.createElement(
              "div",
              { className: u().SettingsTooltip },
              s.createElement(
                d.$n,
                {
                  className: u().MarkAllReadButton,
                  onClick: () => v.MarkAllItemsRead(e),
                },
                (0, f.we)("#NotificationsList_MarkAllRead"),
              ),
            ),
            s.createElement(
              d.$n,
              {
                className: u().SettingsButton,
                onClick: () =>
                  window.location.assign(
                    `${r.TS.STORE_BASE_URL}account/notificationsettings`,
                  ),
              },
              s.createElement(l.wB_, { className: u().SettingsImg }),
              (0, f.we)("#NotificationsList_Settings"),
            ),
          ),
          s.createElement(
            "div",
            { className: u().SettingsFiltersTitle },
            (0, f.we)("#NotificationsList_FilterTo"),
          ),
          s.createElement(
            "div",
            { className: u().SettingsFilters },
            b.k_rgFilterCheckboxes
              .filter((e) => t.has(e.type))
              .map((e) =>
                s.createElement(U, { key: e.type, filterOptions: e }),
              ),
          ),
          s.createElement(
            d.$n,
            {
              className: u().ResetButton,
              onClick: () => b.SetFilter(null, !1, !0),
            },
            (0, f.we)("#NotificationsList_Reset"),
          ),
        );
      }
      function U(e) {
        const { filterOptions: t } = e,
          { filters: i } = C();
        return 3 == t.type
          ? s.createElement(V, { filterOptions: t, checked: i.get(t.type) })
          : s.createElement(d.Yh, {
              className: u().FilterCheckbox,
              key: t.type,
              label: t.display,
              checked: i.get(t.type),
              onChange: (e) => b.SetFilter(t.type, e),
            });
      }
      function q(e) {
        const { threadType: t } = e,
          i = w();
        return s.createElement(d.Yh, {
          className: u().AdvancedCommentFilterCheckbox,
          label: (0, f.we)("#CommentThreadType_" + t),
          checked: i.setItemTypes.has(t),
          onChange: (e) => {
            e
              ? (i.setItemTypes.add(Number(t)),
                b.SetCommentFilter({
                  type: i.type,
                  setItemTypes: i.setItemTypes,
                }))
              : (i.setItemTypes.delete(Number(t)),
                b.SetCommentFilter({
                  type: i.type,
                  setItemTypes: i.setItemTypes,
                }));
          },
        });
      }
      function X(e) {
        const { className: t } = e,
          i = k();
        return s.createElement(
          "div",
          { className: (0, A.A)(u().AdvancedCommentFilters, t) },
          Array.from(i.keys()).map((e) =>
            s.createElement(q, { key: e, threadType: e }),
          ),
        );
      }
      function G(e) {
        const { expanded: t, children: i } = e,
          [n, a] = (0, s.useState)(void 0),
          o = (0, T.wY)((e) => {
            const t = e.target;
            a(t.scrollHeight);
          });
        return s.createElement(
          "div",
          {
            className: (0, A.A)(u().Expander, u().Expanded),
            style: { height: t ? n : 0 },
          },
          s.createElement("div", { ref: o }, i),
        );
      }
      function V(e) {
        const { filterOptions: t, checked: i } = e,
          n = (function () {
            const e = (0, N.LH)();
            return s.useMemo(() => {
              const t = new Map();
              for (const i of b.k_rgCommentFilters)
                for (const n of v.m_rgNotificationRollups.filter(
                  (e) => 3 == e.type,
                )) {
                  const s = (0, a.bP)(n);
                  i.fnFilter(s, e) && t.set(i.type, 1 + (t.get(i.type) || 0));
                }
              return t;
            }, [e]);
          })(),
          o = k(),
          r = n.size > 2,
          l = o.size > 1,
          c = r || l;
        return s.createElement(
          s.Fragment,
          null,
          s.createElement(d.Yh, {
            className: u().FilterCheckbox,
            key: t.type,
            label: t.display,
            checked: i,
            onChange: (e) => {
              b.SetFilter(t.type, e);
            },
          }),
          c &&
            s.createElement(
              "div",
              { className: (0, A.A)(u().CommentFilterCtn, i && u().Expanded) },
              s.createElement(
                G,
                { expanded: i },
                s.createElement(
                  "div",
                  { className: u().CommentFilters },
                  l && s.createElement(X, { className: u().Expanded }),
                ),
              ),
            ),
        );
      }
      function z(e, t, i) {
        t.read ||
          (i && 0 != i.button && 1 != i.button) ||
          v.MarkItemRead(t.notification_id),
          e();
      }
      function K(e) {
        const { rollup: t } = e;
        (0, _.q3)(() => t.item.hidden);
        const [i, n] = s.useState(!1),
          o = (0, T.BL)(
            (0, s.useCallback)((e) => {
              e.isIntersecting && n(!0);
            }, []),
            { rootMargin: "600px" },
          ),
          r = (0, s.useCallback)(() => {
            v.MarkItemHidden(t.item.notification_id);
          }, [t.item.notification_id]);
        if (t.item.hidden) return null;
        if (t.item.hidden && 5 == t.type) {
          const e = (0, a.bP)(t);
          if ((0, c.aP)(e.state) || 1 == e.state) return null;
        }
        const l = (0, L.Rd)(t.type);
        return l
          ? s.createElement(
              R.Ay,
              {
                controller: "notification",
                method: (0, c.fL)(3),
                submethod: (0, c.ey)(4),
              },
              s.createElement(
                J,
                { ref: o },
                i &&
                  s.createElement(l, {
                    rollup: t,
                    onNotificationClick: z,
                    onHide: r,
                    location: 4,
                    uimode: 3,
                  }),
              ),
            )
          : null;
      }
      const J = s.forwardRef((e, t) =>
        s.createElement(
          "div",
          { className: u().AllNotificationsRowCtn, ref: t },
          e.children,
        ),
      );
      function W(e) {
        let t = e.location.hash;
        return (
          t && t.startsWith("#") && (t = t.slice(1)),
          s.createElement(B, { hash: t })
        );
      }
    },
  },
]);
