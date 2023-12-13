/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [1909],
  {
    48194: (t) => {
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
    6914: (t, e, i) => {
      "use strict";
      i.r(e), i.d(e, { default: () => K });
      var n,
        o = i(89526),
        s = i(711),
        a = i(32765),
        r = i(44973),
        l = i(701),
        c = i(40442),
        m = i(27070),
        d = i(57605),
        f = i(14826),
        p = i(48194),
        u = i.n(p),
        _ = i(33940),
        y = i(59621),
        h = i(83315),
        N = i(47742),
        g = i(47165),
        F = i(24448),
        E = i(36041),
        C = i(19934);
      !(function (t) {
        (t[(t.k_All = 0)] = "k_All"),
          (t[(t.k_Owned = 1)] = "k_Owned"),
          (t[(t.k_Subscribed = 2)] = "k_Subscribed");
      })(n || (n = {}));
      class S {
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
                display: (0, f.Xx)("#NotificationsFilters_Comments"),
                hash: "comments",
              },
              {
                type: 8,
                display: (0, f.Xx)("#NotificationsFilters_Wishlist"),
                hash: "wishlist",
              },
              {
                type: 5,
                display: (0, f.Xx)("#NotificationsFilters_FriendRequest"),
                hash: "invites",
              },
              {
                type: 2,
                display: (0, f.Xx)("#NotificationsFilters_Gifts"),
                hash: "gifts",
              },
              {
                type: 4,
                display: (0, f.Xx)("#NotificationsFilters_Inventory"),
                hash: "inventory",
              },
              {
                type: 12,
                display: (0, f.Xx)("#NotificationsFilters_AsyncGame"),
                hash: "asyncgame",
              },
              {
                type: 11,
                display: (0, f.Xx)("#NotificationsFilters_HelpRequest"),
                hash: "help",
              },
              {
                type: 9,
                display: (0, f.Xx)("#NotificationsFilters_TradeOffer"),
                hash: "trade",
              },
              {
                type: 10,
                display: (0, f.Xx)("#NotificationsFilters_General"),
                hash: "general",
              },
            ]),
            (this.k_rgCommentFilters = [
              {
                type: n.k_All,
                display: (0, f.Xx)("#NotificationsList_CommentFilters_All"),
                fnFilter: () => !0,
              },
              {
                type: n.k_Owned,
                display: (0, f.Xx)(
                  "#NotificationsList_CommentFilters_YourItems",
                ),
                fnFilter: this.IsCommentOwned,
              },
              {
                type: n.k_Subscribed,
                display: (0, f.Xx)(
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
                : (0, E.kE)(t) &&
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
      function k() {
        (0, h.SZ)(() => [...T.rgFilterState]);
        let t = 0;
        return (
          T.rgFilterState.forEach((e) => {
            t += e ? 1 : 0;
          }),
          { numActive: t, filters: T.rgFilterState }
        );
      }
      function v() {
        return (0, h.SZ)(() => T.commentFilter);
      }
      function b() {
        return o.useMemo(() => {
          var t;
          const e = new Map();
          for (const i of w.m_rgNotificationRollups.filter(
            (t) => 3 == t.type,
          )) {
            const n = (0, s.dh)(
              null === (t = i.item) || void 0 === t ? void 0 : t.body_data,
            );
            e.set(n.comment_type, 1 + (e.get(n.comment_type) || 0));
          }
          return e;
        }, []);
      }
      function x() {
        const { numActive: t, filters: e } = k(),
          i = v(),
          o = (0, N.M)(),
          { settings: a } = (0, C.X1)(o).data,
          r = (0, C.T8)();
        return (
          (0, h.SZ)(() => (0, s.RY)(w.m_summary)),
          w.m_rgNotificationRollups.filter((l) => {
            if (t && !e.get(l.type)) return !1;
            const c = (0, s.nM)(l.type);
            if ((0, C.Bu)(a, c.eFeature, r)) return !1;
            if (
              t &&
              3 == l.type &&
              (i.type != n.k_All || i.setItemTypes.size > 0)
            ) {
              const t = (0, s.dh)(l.item.body_data);
              let e = !i.fnFilter || i.fnFilter(t, o);
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
      (0, _.gn)([y.LO], S.prototype, "rgFilterState", void 0),
        (0, _.gn)([y.LO], S.prototype, "commentFilter", void 0);
      const I = 300;
      const T = new S(),
        w = new s.tL();
      var R = i(51438),
        L = i(4306),
        A = i(19304),
        B = i(88778),
        X = i(71161);
      function M(t) {
        const { hash: e } = t;
        (0, o.useEffect)(() => {
          T.ProcessHash(e);
        }, [e]);
        const i = (0, m.bY)();
        (0, o.useEffect)(() => {
          w.setTransport(i), w.m_nUnviewed > 0 && w.MarkAllItemsViewed();
        }, [i]);
        const n = (0, a.kQ)("notifications", "application_config");
        return (
          w.ProcessNewNotificationPayload(n),
          (function () {
            let t = [];
            w.m_rgNotificationRollups.forEach((e) => {
              var i;
              let n = null;
              if (3 == e.type) {
                const o = (0, s.dh)(e.item.body_data);
                if ((0, s.gt)(o)) {
                  let e =
                    null === (i = null == o ? void 0 : o.account_steam_id) ||
                    void 0 === i
                      ? void 0
                      : i.ConvertTo64BitString();
                  e && !t.includes(e) && t.push(e);
                }
                (0, s.g1)(o) && (n = null == o ? void 0 : o.owner_steam_id);
              } else if (5 == e.type) {
                const t = (0, s.gs)(e.item.body_data);
                n = g.K.InitFromAccountID(parseInt(t.requestorID));
              } else if (9 == e.type) {
                const t = (0, s.VE)(e.item.body_data);
                n = g.K.InitFromAccountID(parseInt(t));
              } else if (2 == e.type) {
                const t = (0, s.sS)(e.item.body_data);
                n = g.K.InitFromAccountID(parseInt(t));
              }
              let o = null == n ? void 0 : n.ConvertTo64BitString();
              n && !t.includes(o) && t.push(o);
            });
            do {
              F.y$.LoadProfiles(t.splice(0, I));
            } while (t.length > I);
            F.y$.LoadProfiles(t);
          })(),
          w.m_rgNotificationRollups.length
            ? o.createElement(
                o.Fragment,
                null,
                o.createElement(
                  "div",
                  { className: u().NotificationPageCtn },
                  o.createElement(
                    "div",
                    { className: u().NotificationsHeader },
                    o.createElement(
                      "span",
                      { className: u().NotificationsHeaderTitle },
                      (0, f.Xx)("#NotificationsList_Header"),
                    ),
                    o.createElement(H, null),
                  ),
                  o.createElement(
                    "div",
                    { className: u().NotificationsBody },
                    o.createElement(
                      "div",
                      { className: u().NotificationListCtn },
                      o.createElement(O, null),
                    ),
                    o.createElement(
                      "div",
                      { className: u().NotificationFiltersCtn },
                      o.createElement(Z, null),
                    ),
                  ),
                ),
              )
            : o.createElement(
                "div",
                { className: u().NotificationPageCtn },
                o.createElement(U, null),
              )
        );
      }
      function H() {
        const t = (function () {
            const t = x(),
              e = (0, s.fw)();
            return (
              t.map((t) => {
                var i;
                t.item.hidden ||
                  (0, s.UN)(
                    e,
                    t.type,
                    null === (i = t.rgunread) || void 0 === i
                      ? void 0
                      : i.length,
                  );
              }),
              (0, s.RY)(e)
            );
          })(),
          e = (0, f.Xx)("#NotificationsList_Unread", t);
        return o.createElement(
          "span",
          { className: u().NotificationsHeaderUnread },
          e,
        );
      }
      function O() {
        const t = x();
        return o.createElement(
          R.s,
          { className: u().NotificationsList },
          t.map((t, e) => o.createElement(q, { key: e, rollup: t })),
        );
      }
      function U() {
        return o.createElement(
          R.s,
          { className: u().EmptyNotifications },
          o.createElement(
            R.s,
            { className: u().EmptyNotificationsTitle },
            (0, f.Xx)("#NotificationsList_EmptyTitle"),
          ),
          o.createElement(
            R.s,
            { className: u().EmptyNotificationsBody },
            (0, f.Xx)("#NotificationsList_EmptyBody"),
          ),
        );
      }
      function Z() {
        const t = x(),
          e = o.useMemo(() => {
            const t = new Map();
            for (const e of w.m_rgNotificationRollups)
              t.set(e.type, 1 + (t.get(e.type) || 0));
            return t;
          }, []);
        return o.createElement(
          "div",
          { className: u().NotificationsFilterCtn },
          o.createElement(
            "div",
            { className: u().SettingsButtons },
            o.createElement(
              "div",
              { className: u().SettingsTooltip },
              o.createElement(
                d.zx,
                {
                  className: u().MarkAllReadButton,
                  onClick: () => w.MarkAllItemsRead(t),
                },
                (0, f.Xx)("#NotificationsList_MarkAllRead"),
              ),
            ),
            o.createElement(
              d.zx,
              {
                className: u().SettingsButton,
                onClick: () =>
                  window.location.assign(
                    `${r.De.STORE_BASE_URL}account/notificationsettings`,
                  ),
              },
              o.createElement(l.Zrf, { className: u().SettingsImg }),
              (0, f.Xx)("#NotificationsList_Settings"),
            ),
          ),
          o.createElement(
            "div",
            { className: u().SettingsFiltersTitle },
            (0, f.Xx)("#NotificationsList_FilterTo"),
          ),
          o.createElement(
            "div",
            { className: u().SettingsFilters },
            T.k_rgFilterCheckboxes
              .filter((t) => e.has(t.type))
              .map((t) =>
                o.createElement(P, { key: t.type, filterOptions: t }),
              ),
          ),
          o.createElement(
            d.zx,
            {
              className: u().ResetButton,
              onClick: () => T.SetFilter(null, !1, !0),
            },
            (0, f.Xx)("#NotificationsList_Reset"),
          ),
        );
      }
      function P(t) {
        const { filterOptions: e } = t,
          { filters: i } = k();
        return 3 == e.type
          ? o.createElement(z, { filterOptions: e, checked: i.get(e.type) })
          : o.createElement(d.ji, {
              className: u().FilterCheckbox,
              key: e.type,
              label: e.display,
              checked: i.get(e.type),
              onChange: (t) => T.SetFilter(e.type, t),
            });
      }
      function G(t) {
        const { threadType: e } = t,
          i = v();
        return o.createElement(d.ji, {
          className: u().AdvancedCommentFilterCheckbox,
          label: (0, f.Xx)("#CommentThreadType_" + e),
          checked: i.setItemTypes.has(e),
          onChange: (t) => {
            t
              ? (i.setItemTypes.add(Number(e)),
                T.SetCommentFilter({
                  type: i.type,
                  setItemTypes: i.setItemTypes,
                }))
              : (i.setItemTypes.delete(Number(e)),
                T.SetCommentFilter({
                  type: i.type,
                  setItemTypes: i.setItemTypes,
                }));
          },
        });
      }
      function D(t) {
        const { className: e } = t,
          i = b();
        return o.createElement(
          "div",
          { className: (0, A.Z)(u().AdvancedCommentFilters, e) },
          Array.from(i.keys()).map((t) =>
            o.createElement(G, { key: t, threadType: t }),
          ),
        );
      }
      function j(t) {
        const { expanded: e, children: i } = t,
          [n, s] = (0, o.useState)(void 0),
          a = (0, L.yU)((t) => {
            const e = t.target;
            s(e.scrollHeight);
          });
        return o.createElement(
          "div",
          {
            className: (0, A.Z)(u().Expander, u().Expanded),
            style: { height: e ? n : 0 },
          },
          o.createElement("div", { ref: a }, i),
        );
      }
      function z(t) {
        const { filterOptions: e, checked: i } = t,
          n = (function () {
            const t = (0, N.M)();
            return o.useMemo(() => {
              var e;
              const i = new Map();
              for (const n of T.k_rgCommentFilters)
                for (const o of w.m_rgNotificationRollups.filter(
                  (t) => 3 == t.type,
                )) {
                  const a = (0, s.dh)(
                    null === (e = o.item) || void 0 === e
                      ? void 0
                      : e.body_data,
                  );
                  n.fnFilter(a, t) && i.set(n.type, 1 + (i.get(n.type) || 0));
                }
              return i;
            }, [t]);
          })(),
          a = b(),
          r = n.size > 2,
          l = a.size > 1,
          c = r || l;
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(d.ji, {
            className: u().FilterCheckbox,
            key: e.type,
            label: e.display,
            checked: i,
            onChange: (t) => {
              T.SetFilter(e.type, t);
            },
          }),
          c &&
            o.createElement(
              "div",
              { className: (0, A.Z)(u().CommentFilterCtn, i && u().Expanded) },
              o.createElement(
                j,
                { expanded: i },
                o.createElement(
                  "div",
                  { className: u().CommentFilters },
                  l && o.createElement(D, { className: u().Expanded }),
                ),
              ),
            ),
        );
      }
      function Y(t, e, i) {
        e.read ||
          (i && 0 != i.button && 1 != i.button) ||
          w.MarkItemRead(e.notification_id),
          t();
      }
      function q(t) {
        const { rollup: e } = t;
        (0, h.SZ)(() => e.item.hidden);
        const i = (0, s.Sh)(e.type),
          [n, a] = o.useState(!1),
          r = (0, L.S1)(
            (0, o.useCallback)((t) => {
              t.isIntersecting && a(!0);
            }, []),
            { rootMargin: "600px" },
          ),
          l = (0, o.useCallback)(() => {
            w.MarkItemHidden(e.item.notification_id);
          }, [e.item.notification_id]);
        if (e.item.hidden) return null;
        if (e.item.hidden && 5 == e.type) {
          const t = (0, s.gs)(e.item.body_data);
          if ((0, c.fk)(t.state) || 1 == t.state) return null;
        }
        const m = B.L2[i.eRenderID];
        return m
          ? o.createElement(
              X.ZP,
              {
                controller: "notification",
                method: (3).toString(),
                submethod: (4).toString(),
              },
              o.createElement(
                W,
                { ref: r },
                n &&
                  o.createElement(m, {
                    rollup: e,
                    onNotificationClick: Y,
                    onHide: l,
                    location: 4,
                    uimode: 3,
                  }),
              ),
            )
          : null;
      }
      const W = o.forwardRef((t, e) =>
        o.createElement(
          "div",
          { className: u().AllNotificationsRowCtn, ref: e },
          t.children,
        ),
      );
      function K(t) {
        let e = t.location.hash;
        return (
          e && e.startsWith("#") && (e = e.slice(1)),
          o.createElement(M, { hash: e })
        );
      }
    },
  },
]);
