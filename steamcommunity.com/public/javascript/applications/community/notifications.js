/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [1909],
  {
    28319: (t) => {
      t.exports = {
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
      };
    },
    66714: (t, e, i) => {
      "use strict";
      i.r(e), i.d(e, { default: () => K });
      var n,
        s = i(47427),
        a = i(85082),
        o = i(37563),
        r = i(65255),
        l = i(62613),
        c = i(77936),
        m = i(40057),
        d = i(1485),
        p = i(31846),
        f = i(28319),
        u = i.n(f),
        y = i(85556),
        h = i(54842),
        _ = i(30750),
        N = i(53923),
        F = i(45651),
        g = i(75683);
      !(function (t) {
        (t[(t.k_All = 0)] = "k_All"),
          (t[(t.k_Owned = 1)] = "k_Owned"),
          (t[(t.k_Subscribed = 2)] = "k_Subscribed");
      })(n || (n = {}));
      class E {
        constructor() {
          (0, h.rC)(this);
        }
        rgFilterState = new Map();
        commentFilter = {
          type: n.k_All,
          setItemTypes: new Set([]),
          fnFilter: () => !0,
        };
        k_rgFilterCheckboxes = [
          {
            type: 3,
            display: (0, p.Xx)("#NotificationsFilters_Comments"),
            hash: "comments",
          },
          {
            type: 8,
            display: (0, p.Xx)("#NotificationsFilters_Wishlist"),
            hash: "wishlist",
          },
          {
            type: 5,
            display: (0, p.Xx)("#NotificationsFilters_FriendRequest"),
            hash: "invites",
          },
          {
            type: 2,
            display: (0, p.Xx)("#NotificationsFilters_Gifts"),
            hash: "gifts",
          },
          {
            type: 4,
            display: (0, p.Xx)("#NotificationsFilters_Inventory"),
            hash: "inventory",
          },
          {
            type: 12,
            display: (0, p.Xx)("#NotificationsFilters_AsyncGame"),
            hash: "asyncgame",
          },
          {
            type: 11,
            display: (0, p.Xx)("#NotificationsFilters_HelpRequest"),
            hash: "help",
          },
          {
            type: 9,
            display: (0, p.Xx)("#NotificationsFilters_TradeOffer"),
            hash: "trade",
          },
          {
            type: 10,
            display: (0, p.Xx)("#NotificationsFilters_General"),
            hash: "general",
          },
        ];
        k_rgCommentFilters = [
          {
            type: n.k_All,
            display: (0, p.Xx)("#NotificationsList_CommentFilters_All"),
            fnFilter: () => !0,
          },
          {
            type: n.k_Owned,
            display: (0, p.Xx)("#NotificationsList_CommentFilters_YourItems"),
            fnFilter: this.IsCommentOwned,
          },
          {
            type: n.k_Subscribed,
            display: (0, p.Xx)("#NotificationsList_CommentFilters_Subscribed"),
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
          if (
            (this.rgFilterState.clear(),
            this.commentFilter.setItemTypes.clear(),
            t)
          ) {
            t.split(",").forEach((t) => {
              const e = this.k_rgFilterCheckboxes.findIndex((e) => e.hash == t);
              -1 !== e
                ? this.rgFilterState.set(this.k_rgFilterCheckboxes[e].type, !0)
                : (0, F.kE)(t) &&
                  this.rgFilterState.has(3) &&
                  this.commentFilter.setItemTypes.add(parseInt(t));
            });
          }
        }
        SetFilter(t, e, i) {
          i &&
            (this.rgFilterState.clear(),
            this.commentFilter.setItemTypes.clear()),
            t &&
              (this.rgFilterState.set(t, e),
              3 != t || e || this.commentFilter.setItemTypes.clear()),
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
          this.rgFilterState.forEach((e, i) => {
            e &&
              (t +=
                (t ? "," : "") +
                this.k_rgFilterCheckboxes.find((t) => t.type == i)?.hash);
          }),
            this.rgFilterState.has(3) &&
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
      function C() {
        (0, _.SZ)(() => [...b.rgFilterState]);
        let t = 0;
        return (
          b.rgFilterState.forEach((e) => {
            t += e ? 1 : 0;
          }),
          { numActive: t, filters: b.rgFilterState }
        );
      }
      function k() {
        return (0, _.SZ)(() => b.commentFilter);
      }
      function S() {
        return s.useMemo(() => {
          const t = new Map();
          for (const e of I.m_rgNotificationRollups.filter(
            (t) => 3 == t.type,
          )) {
            const i = (0, a.Zz)(e);
            t.set(i.comment_type, 1 + (t.get(i.comment_type) || 0));
          }
          return t;
        }, []);
      }
      function x() {
        const { numActive: t, filters: e } = C(),
          i = k(),
          s = (0, N.M)(),
          { settings: o } = (0, g.X1)(s).data,
          r = (0, g.T8)();
        return (
          (0, _.SZ)(() => (0, a.RY)(I.m_summary)),
          I.m_rgNotificationRollups.filter((l) => {
            if (t && !e.get(l.type)) return !1;
            if ((0, a.pH)(l.type, o, r)) return !1;
            if (
              t &&
              3 == l.type &&
              (i.type != n.k_All || i.setItemTypes.size > 0)
            ) {
              const t = (0, a.Zz)(l);
              let e = !i.fnFilter || i.fnFilter(t, s);
              return (
                i.setItemTypes.size > 0 &&
                  !i.setItemTypes.has(t.comment_type) &&
                  (e = !1),
                e
              );
            }
            return !0;
          })
        );
      }
      (0, y.gn)([h.LO], E.prototype, "rgFilterState", void 0),
        (0, y.gn)([h.LO], E.prototype, "commentFilter", void 0);
      const b = new E(),
        I = new a.tL();
      var T = i(91618),
        w = i(20417),
        v = i(13129),
        X = i(76742),
        L = i(25006);
      function A(t) {
        const { hash: e } = t;
        (0, s.useEffect)(() => {
          b.ProcessHash(e);
        }, [e]);
        const i = (0, m.bY)();
        (0, s.useEffect)(() => {
          I.setTransport(i), I.m_nUnviewed > 0 && I.MarkAllItemsViewed();
        }, [i]);
        const n = (0, o.kQ)("notifications", "application_config");
        return (
          I.ProcessNewNotificationPayload(n),
          I.m_rgNotificationRollups.length
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
                      (0, p.Xx)("#NotificationsList_Header"),
                    ),
                    s.createElement(R, null),
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
                      s.createElement(H, null),
                    ),
                  ),
                ),
              )
            : s.createElement(
                "div",
                { className: u().NotificationPageCtn },
                s.createElement(B, null),
              )
        );
      }
      function R() {
        const t = (function () {
            const t = x(),
              e = (0, a.fw)();
            return (
              t.map((t) => {
                t.item.hidden || (0, a.UN)(e, t.type, t.rgunread?.length);
              }),
              (0, a.RY)(e)
            );
          })(),
          e = (0, p.Xx)("#NotificationsList_Unread", t);
        return s.createElement(
          "span",
          { className: u().NotificationsHeaderUnread },
          e,
        );
      }
      function M() {
        const t = x();
        return s.createElement(
          T.s,
          { className: u().NotificationsList },
          t.map((t, e) => s.createElement(q, { key: e, rollup: t })),
        );
      }
      function B() {
        return s.createElement(
          T.s,
          { className: u().EmptyNotifications },
          s.createElement(
            T.s,
            { className: u().EmptyNotificationsTitle },
            (0, p.Xx)("#NotificationsList_EmptyTitle"),
          ),
          s.createElement(
            T.s,
            { className: u().EmptyNotificationsBody },
            (0, p.Xx)("#NotificationsList_EmptyBody"),
          ),
        );
      }
      function H() {
        const t = x(),
          e = s.useMemo(() => {
            const t = new Map();
            for (const e of I.m_rgNotificationRollups)
              t.set(e.type, 1 + (t.get(e.type) || 0));
            return t;
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
                d.zx,
                {
                  className: u().MarkAllReadButton,
                  onClick: () => I.MarkAllItemsRead(t),
                },
                (0, p.Xx)("#NotificationsList_MarkAllRead"),
              ),
            ),
            s.createElement(
              d.zx,
              {
                className: u().SettingsButton,
                onClick: () =>
                  window.location.assign(
                    `${r.De.STORE_BASE_URL}account/notificationsettings`,
                  ),
              },
              s.createElement(l.Zrf, { className: u().SettingsImg }),
              (0, p.Xx)("#NotificationsList_Settings"),
            ),
          ),
          s.createElement(
            "div",
            { className: u().SettingsFiltersTitle },
            (0, p.Xx)("#NotificationsList_FilterTo"),
          ),
          s.createElement(
            "div",
            { className: u().SettingsFilters },
            b.k_rgFilterCheckboxes
              .filter((t) => e.has(t.type))
              .map((t) =>
                s.createElement(O, { key: t.type, filterOptions: t }),
              ),
          ),
          s.createElement(
            d.zx,
            {
              className: u().ResetButton,
              onClick: () => b.SetFilter(null, !1, !0),
            },
            (0, p.Xx)("#NotificationsList_Reset"),
          ),
        );
      }
      function O(t) {
        const { filterOptions: e } = t,
          { filters: i } = C();
        return 3 == e.type
          ? s.createElement(P, { filterOptions: e, checked: i.get(e.type) })
          : s.createElement(d.ji, {
              className: u().FilterCheckbox,
              key: e.type,
              label: e.display,
              checked: i.get(e.type),
              onChange: (t) => b.SetFilter(e.type, t),
            });
      }
      function Z(t) {
        const { threadType: e } = t,
          i = k();
        return s.createElement(d.ji, {
          className: u().AdvancedCommentFilterCheckbox,
          label: (0, p.Xx)("#CommentThreadType_" + e),
          checked: i.setItemTypes.has(e),
          onChange: (t) => {
            t
              ? (i.setItemTypes.add(Number(e)),
                b.SetCommentFilter({
                  type: i.type,
                  setItemTypes: i.setItemTypes,
                }))
              : (i.setItemTypes.delete(Number(e)),
                b.SetCommentFilter({
                  type: i.type,
                  setItemTypes: i.setItemTypes,
                }));
          },
        });
      }
      function z(t) {
        const { className: e } = t,
          i = S();
        return s.createElement(
          "div",
          { className: (0, v.Z)(u().AdvancedCommentFilters, e) },
          Array.from(i.keys()).map((t) =>
            s.createElement(Z, { key: t, threadType: t }),
          ),
        );
      }
      function U(t) {
        const { expanded: e, children: i } = t,
          [n, a] = (0, s.useState)(void 0),
          o = (0, w.yU)((t) => {
            const e = t.target;
            a(e.scrollHeight);
          });
        return s.createElement(
          "div",
          {
            className: (0, v.Z)(u().Expander, u().Expanded),
            style: { height: e ? n : 0 },
          },
          s.createElement("div", { ref: o }, i),
        );
      }
      function P(t) {
        const { filterOptions: e, checked: i } = t,
          n = (function () {
            const t = (0, N.M)();
            return s.useMemo(() => {
              const e = new Map();
              for (const i of b.k_rgCommentFilters)
                for (const n of I.m_rgNotificationRollups.filter(
                  (t) => 3 == t.type,
                )) {
                  const s = (0, a.Zz)(n);
                  i.fnFilter(s, t) && e.set(i.type, 1 + (e.get(i.type) || 0));
                }
              return e;
            }, [t]);
          })(),
          o = S(),
          r = n.size > 2,
          l = o.size > 1,
          c = r || l;
        return s.createElement(
          s.Fragment,
          null,
          s.createElement(d.ji, {
            className: u().FilterCheckbox,
            key: e.type,
            label: e.display,
            checked: i,
            onChange: (t) => {
              b.SetFilter(e.type, t);
            },
          }),
          c &&
            s.createElement(
              "div",
              { className: (0, v.Z)(u().CommentFilterCtn, i && u().Expanded) },
              s.createElement(
                U,
                { expanded: i },
                s.createElement(
                  "div",
                  { className: u().CommentFilters },
                  l && s.createElement(z, { className: u().Expanded }),
                ),
              ),
            ),
        );
      }
      function G(t, e, i) {
        e.read ||
          (i && 0 != i.button && 1 != i.button) ||
          I.MarkItemRead(e.notification_id),
          t();
      }
      function q(t) {
        const { rollup: e } = t;
        (0, _.SZ)(() => e.item.hidden);
        const [i, n] = s.useState(!1),
          o = (0, w.S1)(
            (0, s.useCallback)((t) => {
              t.isIntersecting && n(!0);
            }, []),
            { rootMargin: "600px" },
          ),
          r = (0, s.useCallback)(() => {
            I.MarkItemHidden(e.item.notification_id);
          }, [e.item.notification_id]);
        if (e.item.hidden) return null;
        if (e.item.hidden && 5 == e.type) {
          const t = (0, a.Zz)(e);
          if ((0, c.fk)(t.state) || 1 == t.state) return null;
        }
        const l = (0, X.$I)(e.type);
        return l
          ? s.createElement(
              L.ZP,
              {
                controller: "notification",
                method: (0, c.Zl)(3),
                submethod: (0, c.bM)(4),
              },
              s.createElement(
                J,
                { ref: o },
                i &&
                  s.createElement(l, {
                    rollup: e,
                    onNotificationClick: G,
                    onHide: r,
                    location: 4,
                    uimode: 3,
                  }),
              ),
            )
          : null;
      }
      const J = s.forwardRef((t, e) =>
        s.createElement(
          "div",
          { className: u().AllNotificationsRowCtn, ref: e },
          t.children,
        ),
      );
      function K(t) {
        let e = t.location.hash;
        return (
          e && e.startsWith("#") && (e = e.slice(1)),
          s.createElement(A, { hash: e })
        );
      }
    },
  },
]);
