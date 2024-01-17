/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [1909],
  {
    28319: (t) => {
      t.exports = {
        notificationRowHeight: "72px",
        NotificationPageCtn: "notifications_NotificationPageCtn_2DCeN",
        NotificationsBody: "notifications_NotificationsBody_35hlM",
        NotificationsHeader: "notifications_NotificationsHeader_1bLYa",
        NotificationsHeaderTitle:
          "notifications_NotificationsHeaderTitle_39iFF",
        NotificationsHeaderUnread:
          "notifications_NotificationsHeaderUnread_3iXuG",
        NotificationListCtn: "notifications_NotificationListCtn_1cj-7",
        NotificationsList: "notifications_NotificationsList_KG3qM",
        AllNotificationsRowCtn: "notifications_AllNotificationsRowCtn_3Y-y3",
        NotificationFiltersCtn: "notifications_NotificationFiltersCtn_1uSw_",
        EmptyNotifications: "notifications_EmptyNotifications_3t24B",
        EmptyNotificationsTitle: "notifications_EmptyNotificationsTitle__uGFL",
        EmptyNotificationsBody: "notifications_EmptyNotificationsBody_3Iomc",
        SettingsButtons: "notifications_SettingsButtons_3B7mJ",
        SettingsTooltip: "notifications_SettingsTooltip_3ZlbZ",
        MarkAllReadButton: "notifications_MarkAllReadButton_37Ujw",
        SettingsButton: "notifications_SettingsButton_T8q00",
        SettingsImg: "notifications_SettingsImg_1XXJX",
        SettingsFiltersTitle: "notifications_SettingsFiltersTitle_4T-jW",
        SettingsFilters: "notifications_SettingsFilters_1YDIA",
        FilterCheckbox: "notifications_FilterCheckbox_2C4dM",
        ResetButton: "notifications_ResetButton_3Z8ot",
        CommentIcon: "notifications_CommentIcon_o_I3v",
        CommentFilterCtn: "notifications_CommentFilterCtn_-GWy_",
        AdvancedCommentFilters: "notifications_AdvancedCommentFilters_irq6k",
        Expanded: "notifications_Expanded_2hRRl",
        CommentRadioGroup: "notifications_CommentRadioGroup_2_xVH",
        Expander: "notifications_Expander_MjW-I",
      };
    },
    66714: (t, e, i) => {
      "use strict";
      i.r(e), i.d(e, { default: () => q });
      var n,
        s = i(47427),
        o = i(85082),
        a = i(37563),
        r = i(65255),
        l = i(62613),
        c = i(77936),
        m = i(40057),
        f = i(1485),
        d = i(31846),
        p = i(28319),
        u = i.n(p),
        _ = i(85556),
        y = i(54842),
        h = i(30750),
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
          (this.rgFilterState = new Map()),
            (this.commentFilter = {
              type: n.k_All,
              setItemTypes: new Set([]),
              fnFilter: () => !0,
            }),
            (this.k_rgFilterCheckboxes = [
              {
                type: 3,
                display: (0, d.Xx)("#NotificationsFilters_Comments"),
                hash: "comments",
              },
              {
                type: 8,
                display: (0, d.Xx)("#NotificationsFilters_Wishlist"),
                hash: "wishlist",
              },
              {
                type: 5,
                display: (0, d.Xx)("#NotificationsFilters_FriendRequest"),
                hash: "invites",
              },
              {
                type: 2,
                display: (0, d.Xx)("#NotificationsFilters_Gifts"),
                hash: "gifts",
              },
              {
                type: 4,
                display: (0, d.Xx)("#NotificationsFilters_Inventory"),
                hash: "inventory",
              },
              {
                type: 12,
                display: (0, d.Xx)("#NotificationsFilters_AsyncGame"),
                hash: "asyncgame",
              },
              {
                type: 11,
                display: (0, d.Xx)("#NotificationsFilters_HelpRequest"),
                hash: "help",
              },
              {
                type: 9,
                display: (0, d.Xx)("#NotificationsFilters_TradeOffer"),
                hash: "trade",
              },
              {
                type: 10,
                display: (0, d.Xx)("#NotificationsFilters_General"),
                hash: "general",
              },
            ]),
            (this.k_rgCommentFilters = [
              {
                type: n.k_All,
                display: (0, d.Xx)("#NotificationsList_CommentFilters_All"),
                fnFilter: () => !0,
              },
              {
                type: n.k_Owned,
                display: (0, d.Xx)(
                  "#NotificationsList_CommentFilters_YourItems",
                ),
                fnFilter: this.IsCommentOwned,
              },
              {
                type: n.k_Subscribed,
                display: (0, d.Xx)(
                  "#NotificationsList_CommentFilters_Subscribed",
                ),
                fnFilter: this.IsCommentSubscribed,
              },
            ]),
            (0, y.rC)(this);
        }
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
          var e;
          (this.commentFilter = t),
            (this.commentFilter.fnFilter =
              null ===
                (e = this.k_rgCommentFilters.find((e) => e.type == t.type)) ||
              void 0 === e
                ? void 0
                : e.fnFilter),
            this.UpdateLocationHash();
        }
        UpdateLocationHash() {
          let t = "";
          this.rgFilterState.forEach((e, i) => {
            var n;
            e &&
              (t +=
                (t ? "," : "") +
                (null ===
                  (n = this.k_rgFilterCheckboxes.find((t) => t.type == i)) ||
                void 0 === n
                  ? void 0
                  : n.hash));
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
        (0, h.SZ)(() => [...x.rgFilterState]);
        let t = 0;
        return (
          x.rgFilterState.forEach((e) => {
            t += e ? 1 : 0;
          }),
          { numActive: t, filters: x.rgFilterState }
        );
      }
      function k() {
        return (0, h.SZ)(() => x.commentFilter);
      }
      function S() {
        return s.useMemo(() => {
          var t;
          const e = new Map();
          for (const i of b.m_rgNotificationRollups.filter(
            (t) => 3 == t.type,
          )) {
            const n = (0, o.dh)(
              null === (t = i.item) || void 0 === t ? void 0 : t.body_data,
            );
            e.set(n.comment_type, 1 + (e.get(n.comment_type) || 0));
          }
          return e;
        }, []);
      }
      function v() {
        const { numActive: t, filters: e } = C(),
          i = k(),
          s = (0, N.M)(),
          { settings: a } = (0, g.X1)(s).data,
          r = (0, g.T8)();
        return (
          (0, h.SZ)(() => (0, o.RY)(b.m_summary)),
          b.m_rgNotificationRollups.filter((l) => {
            if (t && !e.get(l.type)) return !1;
            const c = (0, o.nM)(l.type);
            if ((0, g.Bu)(a, c.eFeature, r)) return !1;
            if (
              t &&
              3 == l.type &&
              (i.type != n.k_All || i.setItemTypes.size > 0)
            ) {
              const t = (0, o.dh)(l.item.body_data);
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
      (0, _.gn)([y.LO], E.prototype, "rgFilterState", void 0),
        (0, _.gn)([y.LO], E.prototype, "commentFilter", void 0);
      const x = new E(),
        b = new o.tL();
      var T = i(91618),
        I = i(20417),
        w = i(13129),
        R = i(19067),
        L = i(25006);
      function X(t) {
        const { hash: e } = t;
        (0, s.useEffect)(() => {
          x.ProcessHash(e);
        }, [e]);
        const i = (0, m.bY)();
        (0, s.useEffect)(() => {
          b.setTransport(i), b.m_nUnviewed > 0 && b.MarkAllItemsViewed();
        }, [i]);
        const n = (0, a.kQ)("notifications", "application_config");
        return (
          b.ProcessNewNotificationPayload(n),
          b.m_rgNotificationRollups.length
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
                      (0, d.Xx)("#NotificationsList_Header"),
                    ),
                    s.createElement(A, null),
                  ),
                  s.createElement(
                    "div",
                    { className: u().NotificationsBody },
                    s.createElement(
                      "div",
                      { className: u().NotificationListCtn },
                      s.createElement(B, null),
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
                s.createElement(M, null),
              )
        );
      }
      function A() {
        const t = (function () {
            const t = v(),
              e = (0, o.fw)();
            return (
              t.map((t) => {
                var i;
                t.item.hidden ||
                  (0, o.UN)(
                    e,
                    t.type,
                    null === (i = t.rgunread) || void 0 === i
                      ? void 0
                      : i.length,
                  );
              }),
              (0, o.RY)(e)
            );
          })(),
          e = (0, d.Xx)("#NotificationsList_Unread", t);
        return s.createElement(
          "span",
          { className: u().NotificationsHeaderUnread },
          e,
        );
      }
      function B() {
        const t = v();
        return s.createElement(
          T.s,
          { className: u().NotificationsList },
          t.map((t, e) => s.createElement(z, { key: e, rollup: t })),
        );
      }
      function M() {
        return s.createElement(
          T.s,
          { className: u().EmptyNotifications },
          s.createElement(
            T.s,
            { className: u().EmptyNotificationsTitle },
            (0, d.Xx)("#NotificationsList_EmptyTitle"),
          ),
          s.createElement(
            T.s,
            { className: u().EmptyNotificationsBody },
            (0, d.Xx)("#NotificationsList_EmptyBody"),
          ),
        );
      }
      function H() {
        const t = v(),
          e = s.useMemo(() => {
            const t = new Map();
            for (const e of b.m_rgNotificationRollups)
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
                f.zx,
                {
                  className: u().MarkAllReadButton,
                  onClick: () => b.MarkAllItemsRead(t),
                },
                (0, d.Xx)("#NotificationsList_MarkAllRead"),
              ),
            ),
            s.createElement(
              f.zx,
              {
                className: u().SettingsButton,
                onClick: () =>
                  window.location.assign(
                    `${r.De.STORE_BASE_URL}account/notificationsettings`,
                  ),
              },
              s.createElement(l.Zrf, { className: u().SettingsImg }),
              (0, d.Xx)("#NotificationsList_Settings"),
            ),
          ),
          s.createElement(
            "div",
            { className: u().SettingsFiltersTitle },
            (0, d.Xx)("#NotificationsList_FilterTo"),
          ),
          s.createElement(
            "div",
            { className: u().SettingsFilters },
            x.k_rgFilterCheckboxes
              .filter((t) => e.has(t.type))
              .map((t) =>
                s.createElement(O, { key: t.type, filterOptions: t }),
              ),
          ),
          s.createElement(
            f.zx,
            {
              className: u().ResetButton,
              onClick: () => x.SetFilter(null, !1, !0),
            },
            (0, d.Xx)("#NotificationsList_Reset"),
          ),
        );
      }
      function O(t) {
        const { filterOptions: e } = t,
          { filters: i } = C();
        return 3 == e.type
          ? s.createElement(P, { filterOptions: e, checked: i.get(e.type) })
          : s.createElement(f.ji, {
              className: u().FilterCheckbox,
              key: e.type,
              label: e.display,
              checked: i.get(e.type),
              onChange: (t) => x.SetFilter(e.type, t),
            });
      }
      function U(t) {
        const { threadType: e } = t,
          i = k();
        return s.createElement(f.ji, {
          className: u().AdvancedCommentFilterCheckbox,
          label: (0, d.Xx)("#CommentThreadType_" + e),
          checked: i.setItemTypes.has(e),
          onChange: (t) => {
            t
              ? (i.setItemTypes.add(Number(e)),
                x.SetCommentFilter({
                  type: i.type,
                  setItemTypes: i.setItemTypes,
                }))
              : (i.setItemTypes.delete(Number(e)),
                x.SetCommentFilter({
                  type: i.type,
                  setItemTypes: i.setItemTypes,
                }));
          },
        });
      }
      function Z(t) {
        const { className: e } = t,
          i = S();
        return s.createElement(
          "div",
          { className: (0, w.Z)(u().AdvancedCommentFilters, e) },
          Array.from(i.keys()).map((t) =>
            s.createElement(U, { key: t, threadType: t }),
          ),
        );
      }
      function G(t) {
        const { expanded: e, children: i } = t,
          [n, o] = (0, s.useState)(void 0),
          a = (0, I.yU)((t) => {
            const e = t.target;
            o(e.scrollHeight);
          });
        return s.createElement(
          "div",
          {
            className: (0, w.Z)(u().Expander, u().Expanded),
            style: { height: e ? n : 0 },
          },
          s.createElement("div", { ref: a }, i),
        );
      }
      function P(t) {
        const { filterOptions: e, checked: i } = t,
          n = (function () {
            const t = (0, N.M)();
            return s.useMemo(() => {
              var e;
              const i = new Map();
              for (const n of x.k_rgCommentFilters)
                for (const s of b.m_rgNotificationRollups.filter(
                  (t) => 3 == t.type,
                )) {
                  const a = (0, o.dh)(
                    null === (e = s.item) || void 0 === e
                      ? void 0
                      : e.body_data,
                  );
                  n.fnFilter(a, t) && i.set(n.type, 1 + (i.get(n.type) || 0));
                }
              return i;
            }, [t]);
          })(),
          a = S(),
          r = n.size > 2,
          l = a.size > 1,
          c = r || l;
        return s.createElement(
          s.Fragment,
          null,
          s.createElement(f.ji, {
            className: u().FilterCheckbox,
            key: e.type,
            label: e.display,
            checked: i,
            onChange: (t) => {
              x.SetFilter(e.type, t);
            },
          }),
          c &&
            s.createElement(
              "div",
              { className: (0, w.Z)(u().CommentFilterCtn, i && u().Expanded) },
              s.createElement(
                G,
                { expanded: i },
                s.createElement(
                  "div",
                  { className: u().CommentFilters },
                  l && s.createElement(Z, { className: u().Expanded }),
                ),
              ),
            ),
        );
      }
      function j(t, e, i) {
        e.read ||
          (i && 0 != i.button && 1 != i.button) ||
          b.MarkItemRead(e.notification_id),
          t();
      }
      function z(t) {
        const { rollup: e } = t;
        (0, h.SZ)(() => e.item.hidden);
        const i = (0, o.Sh)(e.type),
          [n, a] = s.useState(!1),
          r = (0, I.S1)(
            (0, s.useCallback)((t) => {
              t.isIntersecting && a(!0);
            }, []),
            { rootMargin: "600px" },
          ),
          l = (0, s.useCallback)(() => {
            b.MarkItemHidden(e.item.notification_id);
          }, [e.item.notification_id]);
        if (e.item.hidden) return null;
        if (e.item.hidden && 5 == e.type) {
          const t = (0, o.gs)(e.item.body_data);
          if ((0, c.fk)(t.state) || 1 == t.state) return null;
        }
        const m = R.L2[i.eRenderID];
        return m
          ? s.createElement(
              L.ZP,
              {
                controller: "notification",
                method: (3).toString(),
                submethod: (4).toString(),
              },
              s.createElement(
                Y,
                { ref: r },
                n &&
                  s.createElement(m, {
                    rollup: e,
                    onNotificationClick: j,
                    onHide: l,
                    location: 4,
                    uimode: 3,
                  }),
              ),
            )
          : null;
      }
      const Y = s.forwardRef((t, e) =>
        s.createElement(
          "div",
          { className: u().AllNotificationsRowCtn, ref: e },
          t.children,
        ),
      );
      function q(t) {
        let e = t.location.hash;
        return (
          e && e.startsWith("#") && (e = e.slice(1)),
          s.createElement(X, { hash: e })
        );
      }
    },
  },
]);
