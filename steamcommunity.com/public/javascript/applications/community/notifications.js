/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [6893],
  {
    68e3: (t) => {
      t.exports = {
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
      };
    },
    32664: (t, e, i) => {
      "use strict";
      i.r(e), i.d(e, { default: () => Z });
      var n,
        s = i(90626),
        o = i(97788),
        a = i(88080),
        r = i(78327),
        l = i(30470),
        c = i(12155),
        m = i(22837),
        f = i(23809),
        p = i(68255),
        d = i(61859),
        y = i(68e3),
        _ = i.n(y),
        h = i(34629),
        u = i(14947),
        N = i(65946),
        E = i(68950),
        F = i(25489),
        g = i(60011);
      !(function (t) {
        (t[(t.k_All = 0)] = "k_All"),
          (t[(t.k_Owned = 1)] = "k_Owned"),
          (t[(t.k_Subscribed = 2)] = "k_Subscribed");
      })(n || (n = {}));
      class k {
        constructor() {
          (this.rgFilterState = new Map()),
            (this.commentFilter = {
              type: n.k_All,
              setItemTypes: new Set([]),
              fnFilter: () => !0,
            }),
            (this.k_rgFilterCheckboxes = [
              {
                type: o.Vv.k_ESteamNotificationType_Comment,
                display: (0, d.we)("#NotificationsFilters_Comments"),
                hash: "comments",
              },
              {
                type: o.Vv.k_ESteamNotificationType_Wishlist,
                display: (0, d.we)("#NotificationsFilters_Wishlist"),
                hash: "wishlist",
              },
              {
                type: o.Vv.k_ESteamNotificationType_FriendInvite,
                display: (0, d.we)("#NotificationsFilters_FriendRequest"),
                hash: "invites",
              },
              {
                type: o.Vv.k_ESteamNotificationType_Gift,
                display: (0, d.we)("#NotificationsFilters_Gifts"),
                hash: "gifts",
              },
              {
                type: o.Vv.k_ESteamNotificationType_Item,
                display: (0, d.we)("#NotificationsFilters_Inventory"),
                hash: "inventory",
              },
              {
                type: o.Vv.k_ESteamNotificationType_AsyncGame,
                display: (0, d.we)("#NotificationsFilters_AsyncGame"),
                hash: "asyncgame",
              },
              {
                type: o.Vv.k_ESteamNotificationType_HelpRequest,
                display: (0, d.we)("#NotificationsFilters_HelpRequest"),
                hash: "help",
              },
              {
                type: o.Vv.k_ESteamNotificationType_TradeOffer,
                display: (0, d.we)("#NotificationsFilters_TradeOffer"),
                hash: "trade",
              },
              {
                type: o.Vv.k_ESteamNotificationType_General,
                display: (0, d.we)("#NotificationsFilters_General"),
                hash: "general",
              },
            ]),
            (this.k_rgCommentFilters = [
              {
                type: n.k_All,
                display: (0, d.we)("#NotificationsList_CommentFilters_All"),
                fnFilter: () => !0,
              },
              {
                type: n.k_Owned,
                display: (0, d.we)(
                  "#NotificationsList_CommentFilters_YourItems",
                ),
                fnFilter: this.IsCommentOwned,
              },
              {
                type: n.k_Subscribed,
                display: (0, d.we)(
                  "#NotificationsList_CommentFilters_Subscribed",
                ),
                fnFilter: this.IsCommentSubscribed,
              },
            ]),
            (0, u.Gn)(this);
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
                : (0, F.TT)(t) &&
                  this.rgFilterState.has(
                    o.Vv.k_ESteamNotificationType_Comment,
                  ) &&
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
              t != o.Vv.k_ESteamNotificationType_Comment ||
                e ||
                this.commentFilter.setItemTypes.clear()),
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
            this.rgFilterState.has(o.Vv.k_ESteamNotificationType_Comment) &&
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
        (0, N.q3)(() => [...w.rgFilterState]);
        let t = 0;
        return (
          w.rgFilterState.forEach((e) => {
            t += e ? 1 : 0;
          }),
          { numActive: t, filters: w.rgFilterState }
        );
      }
      function S() {
        return (0, N.q3)(() => w.commentFilter);
      }
      function v() {
        return s.useMemo(() => {
          const t = new Map();
          for (const e of b.m_rgNotificationRollups.filter(
            (t) => t.type == o.Vv.k_ESteamNotificationType_Comment,
          )) {
            const i = (0, a.bP)(e);
            t.set(i.comment_type, 1 + (t.get(i.comment_type) || 0));
          }
          return t;
        }, []);
      }
      function T() {
        const { numActive: t, filters: e } = C(),
          i = S(),
          s = (0, E.LH)(),
          { settings: r } = (0, g.S0)(s).data,
          l = (0, g.BM)();
        return (
          (0, N.q3)(() => (0, a.PI)(b.m_summary)),
          b.m_rgNotificationRollups.filter((c) => {
            if (t && !e.get(c.type)) return !1;
            if ((0, a.jb)(c.type, r, l)) return !1;
            if (
              t &&
              c.type == o.Vv.k_ESteamNotificationType_Comment &&
              (i.type != n.k_All || i.setItemTypes.size > 0)
            ) {
              const t = (0, a.bP)(c);
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
      (0, h.Cg)([u.sH], k.prototype, "rgFilterState", void 0),
        (0, h.Cg)([u.sH], k.prototype, "commentFilter", void 0);
      const w = new k(),
        b = new a.cE();
      var I = i(76217),
        A = i(73745),
        L = i(52038),
        R = i(16264),
        V = i(32630);
      function x(t) {
        const { hash: e } = t;
        (0, s.useEffect)(() => {
          w.ProcessHash(e);
        }, [e]);
        const i = (0, f.KV)();
        (0, s.useEffect)(() => {
          b.setTransport(i), b.m_nUnviewed > 0 && b.MarkAllItemsViewed();
        }, [i]);
        const n = (0, r.Tc)("notifications", "application_config");
        return (
          b.ProcessNewNotificationPayload(n),
          b.m_rgNotificationRollups.length
            ? s.createElement(
                s.Fragment,
                null,
                s.createElement(
                  "div",
                  { className: _().NotificationPageCtn },
                  s.createElement(
                    "div",
                    { className: _().NotificationsHeader },
                    s.createElement(
                      "span",
                      { className: _().NotificationsHeaderTitle },
                      (0, d.we)("#NotificationsList_Header"),
                    ),
                    s.createElement(B, null),
                  ),
                  s.createElement(
                    "div",
                    { className: _().NotificationsBody },
                    s.createElement(
                      "div",
                      { className: _().NotificationListCtn },
                      s.createElement(H, null),
                    ),
                    s.createElement(
                      "div",
                      { className: _().NotificationFiltersCtn },
                      s.createElement(P, null),
                    ),
                  ),
                ),
              )
            : s.createElement(
                "div",
                { className: _().NotificationPageCtn },
                s.createElement(M, null),
              )
        );
      }
      function B() {
        const t = (function () {
            const t = T(),
              e = (0, a.V8)();
            return (
              t.map((t) => {
                var i;
                t.item.hidden ||
                  (0, a.kE)(
                    e,
                    t.type,
                    null === (i = t.rgunread) || void 0 === i
                      ? void 0
                      : i.length,
                  );
              }),
              (0, a.PI)(e)
            );
          })(),
          e = (0, d.we)("#NotificationsList_Unread", t);
        return s.createElement(
          "span",
          { className: _().NotificationsHeaderUnread },
          e,
        );
      }
      function H() {
        const t = T();
        return s.createElement(
          I.Z,
          { className: _().NotificationsList },
          t.map((t, e) => s.createElement(z, { key: e, rollup: t })),
        );
      }
      function M() {
        return s.createElement(
          I.Z,
          { className: _().EmptyNotifications },
          s.createElement(
            I.Z,
            { className: _().EmptyNotificationsTitle },
            (0, d.we)("#NotificationsList_EmptyTitle"),
          ),
          s.createElement(
            I.Z,
            { className: _().EmptyNotificationsBody },
            (0, d.we)("#NotificationsList_EmptyBody"),
          ),
        );
      }
      function P() {
        const t = T(),
          e = s.useMemo(() => {
            const t = new Map();
            for (const e of b.m_rgNotificationRollups)
              t.set(e.type, 1 + (t.get(e.type) || 0));
            return t;
          }, []);
        return s.createElement(
          "div",
          { className: _().NotificationsFilterCtn },
          s.createElement(
            "div",
            { className: _().SettingsButtons },
            s.createElement(
              "div",
              { className: _().SettingsTooltip },
              s.createElement(
                p.$n,
                {
                  className: _().MarkAllReadButton,
                  onClick: () => b.MarkAllItemsRead(t),
                },
                (0, d.we)("#NotificationsList_MarkAllRead"),
              ),
            ),
            s.createElement(
              p.$n,
              {
                className: _().SettingsButton,
                onClick: () =>
                  window.location.assign(
                    `${l.TS.STORE_BASE_URL}account/notificationsettings`,
                  ),
              },
              s.createElement(c.wB_, { className: _().SettingsImg }),
              (0, d.we)("#NotificationsList_Settings"),
            ),
          ),
          s.createElement(
            "div",
            { className: _().SettingsFiltersTitle },
            (0, d.we)("#NotificationsList_FilterTo"),
          ),
          s.createElement(
            "div",
            { className: _().SettingsFilters },
            w.k_rgFilterCheckboxes
              .filter((t) => e.has(t.type))
              .map((t) =>
                s.createElement(O, { key: t.type, filterOptions: t }),
              ),
          ),
          s.createElement(
            p.$n,
            {
              className: _().ResetButton,
              onClick: () => w.SetFilter(null, !1, !0),
            },
            (0, d.we)("#NotificationsList_Reset"),
          ),
        );
      }
      function O(t) {
        const { filterOptions: e } = t,
          { filters: i } = C();
        return e.type == o.Vv.k_ESteamNotificationType_Comment
          ? s.createElement(X, { filterOptions: e, checked: i.get(e.type) })
          : s.createElement(p.Yh, {
              className: _().FilterCheckbox,
              key: e.type,
              label: e.display,
              checked: i.get(e.type),
              onChange: (t) => w.SetFilter(e.type, t),
            });
      }
      function q(t) {
        const { threadType: e } = t,
          i = S();
        return s.createElement(p.Yh, {
          className: _().AdvancedCommentFilterCheckbox,
          label: (0, d.we)("#CommentThreadType_" + e),
          checked: i.setItemTypes.has(e),
          onChange: (t) => {
            t
              ? (i.setItemTypes.add(Number(e)),
                w.SetCommentFilter({
                  type: i.type,
                  setItemTypes: i.setItemTypes,
                }))
              : (i.setItemTypes.delete(Number(e)),
                w.SetCommentFilter({
                  type: i.type,
                  setItemTypes: i.setItemTypes,
                }));
          },
        });
      }
      function U(t) {
        const { className: e } = t,
          i = v();
        return s.createElement(
          "div",
          { className: (0, L.A)(_().AdvancedCommentFilters, e) },
          Array.from(i.keys()).map((t) =>
            s.createElement(q, { key: t, threadType: t }),
          ),
        );
      }
      function G(t) {
        const { expanded: e, children: i } = t,
          [n, o] = (0, s.useState)(void 0),
          a = (0, A.wY)((t) => {
            const e = t.target;
            o(e.scrollHeight);
          });
        return s.createElement(
          "div",
          {
            className: (0, L.A)(_().Expander, _().Expanded),
            style: { height: e ? n : 0 },
          },
          s.createElement("div", { ref: a }, i),
        );
      }
      function X(t) {
        const { filterOptions: e, checked: i } = t,
          n = (function () {
            const t = (0, E.LH)();
            return s.useMemo(() => {
              const e = new Map();
              for (const i of w.k_rgCommentFilters)
                for (const n of b.m_rgNotificationRollups.filter(
                  (t) => t.type == o.Vv.k_ESteamNotificationType_Comment,
                )) {
                  const s = (0, a.bP)(n);
                  i.fnFilter(s, t) && e.set(i.type, 1 + (e.get(i.type) || 0));
                }
              return e;
            }, [t]);
          })(),
          r = v(),
          l = n.size > 2,
          c = r.size > 1,
          m = l || c;
        return s.createElement(
          s.Fragment,
          null,
          s.createElement(p.Yh, {
            className: _().FilterCheckbox,
            key: e.type,
            label: e.display,
            checked: i,
            onChange: (t) => {
              w.SetFilter(e.type, t);
            },
          }),
          m &&
            s.createElement(
              "div",
              { className: (0, L.A)(_().CommentFilterCtn, i && _().Expanded) },
              s.createElement(
                G,
                { expanded: i },
                s.createElement(
                  "div",
                  { className: _().CommentFilters },
                  c && s.createElement(U, { className: _().Expanded }),
                ),
              ),
            ),
        );
      }
      function W(t, e, i) {
        e.read ||
          (i && 0 != i.button && 1 != i.button) ||
          b.MarkItemRead(e.notification_id),
          t();
      }
      function z(t) {
        const { rollup: e } = t;
        (0, N.q3)(() => e.item.hidden);
        const [i, n] = s.useState(!1),
          r = (0, A.BL)(
            (0, s.useCallback)((t) => {
              t.isIntersecting && n(!0);
            }, []),
            { rootMargin: "600px" },
          ),
          l = (0, s.useCallback)(() => {
            b.MarkItemHidden(e.item.notification_id);
          }, [e.item.notification_id]);
        if (e.item.hidden) return null;
        if (
          e.item.hidden &&
          e.type == o.Vv.k_ESteamNotificationType_FriendInvite
        ) {
          const t = (0, a.bP)(e);
          if (
            (0, m.aP)(t.state) ||
            t.state == m.SX.k_EFriendRelationshipBlocked
          )
            return null;
        }
        const c = (0, R.Rd)(e.type);
        return c
          ? s.createElement(
              V.Ay,
              {
                controller: "notification",
                method: (0, m.fL)(m.lq.k_EUIMode_Web),
                submethod: (0, m.ey)(m.wZ.AllNotificationsTray),
              },
              s.createElement(
                K,
                { ref: r },
                i &&
                  s.createElement(c, {
                    rollup: e,
                    onNotificationClick: W,
                    onHide: l,
                    location: m.wZ.AllNotificationsTray,
                    uimode: m.lq.k_EUIMode_Web,
                  }),
              ),
            )
          : null;
      }
      const K = s.forwardRef((t, e) =>
        s.createElement(
          "div",
          { className: _().AllNotificationsRowCtn, ref: e },
          t.children,
        ),
      );
      function Z(t) {
        let e = t.location.hash;
        return (
          e && e.startsWith("#") && (e = e.slice(1)),
          s.createElement(x, { hash: e })
        );
      }
    },
  },
]);
