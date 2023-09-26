/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [1909],
  {
    33008: (t) => {
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
        s = i(70534),
        a = i(26),
        c = i(32765),
        l = i(44973),
        r = i(701),
        m = i(75457),
        f = i(27070),
        d = i(57605),
        p = i(77427),
        _ = i(14826),
        y = i(33008),
        u = i.n(y),
        N = i(33940),
        h = i(50265),
        g = i(25125),
        E = i(47742),
        F = i(47165),
        k = i(24448),
        S = i(36041);
      !(function (t) {
        (t[(t.k_All = 0)] = "k_All"),
          (t[(t.k_Owned = 1)] = "k_Owned"),
          (t[(t.k_Subscribed = 2)] = "k_Subscribed");
      })(n || (n = {}));
      class C {
        constructor() {
          (this.rgFilterState = new Map()),
            (this.commentFilter = {
              type: n.k_All,
              setItemTypes: new Set([]),
              fnFilter: () => !0,
            }),
            (this.k_rgFilterCheckboxes = [
              {
                type: s.gH.k_ESteamNotificationType_Comment,
                display: (0, _.Xx)("#NotificationsFilters_Comments"),
                hash: "comments",
              },
              {
                type: s.gH.k_ESteamNotificationType_Wishlist,
                display: (0, _.Xx)("#NotificationsFilters_Wishlist"),
                hash: "wishlist",
              },
              {
                type: s.gH.k_ESteamNotificationType_FriendInvite,
                display: (0, _.Xx)("#NotificationsFilters_FriendRequest"),
                hash: "invites",
              },
              {
                type: s.gH.k_ESteamNotificationType_Gift,
                display: (0, _.Xx)("#NotificationsFilters_Gifts"),
                hash: "gifts",
              },
              {
                type: s.gH.k_ESteamNotificationType_Item,
                display: (0, _.Xx)("#NotificationsFilters_Inventory"),
                hash: "inventory",
              },
              {
                type: s.gH.k_ESteamNotificationType_AsyncGame,
                display: (0, _.Xx)("#NotificationsFilters_AsyncGame"),
                hash: "asyncgame",
              },
              {
                type: s.gH.k_ESteamNotificationType_HelpRequest,
                display: (0, _.Xx)("#NotificationsFilters_HelpRequest"),
                hash: "help",
              },
              {
                type: s.gH.k_ESteamNotificationType_TradeOffer,
                display: (0, _.Xx)("#NotificationsFilters_TradeOffer"),
                hash: "trade",
              },
              {
                type: s.gH.k_ESteamNotificationType_General,
                display: (0, _.Xx)("#NotificationsFilters_General"),
                hash: "general",
              },
            ]),
            (this.k_rgCommentFilters = [
              {
                type: n.k_All,
                display: (0, _.Xx)("#NotificationsList_CommentFilters_All"),
                fnFilter: () => !0,
              },
              {
                type: n.k_Owned,
                display: (0, _.Xx)(
                  "#NotificationsList_CommentFilters_YourItems",
                ),
                fnFilter: this.IsCommentOwned,
              },
              {
                type: n.k_Subscribed,
                display: (0, _.Xx)(
                  "#NotificationsList_CommentFilters_Subscribed",
                ),
                fnFilter: this.IsCommentSubscribed,
              },
            ]);
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
                : (0, S.kE)(t) &&
                  this.rgFilterState.has(
                    s.gH.k_ESteamNotificationType_Comment,
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
              t != s.gH.k_ESteamNotificationType_Comment ||
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
            this.rgFilterState.has(s.gH.k_ESteamNotificationType_Comment) &&
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
      function T() {
        (0, g.SZ)(() => [...H.rgFilterState]);
        let t = 0;
        return (
          H.rgFilterState.forEach((e) => {
            t += e ? 1 : 0;
          }),
          { numActive: t, filters: H.rgFilterState }
        );
      }
      function v() {
        return (0, g.SZ)(() => H.commentFilter);
      }
      function I() {
        return o.useMemo(() => {
          var t;
          const e = new Map();
          for (const i of w.m_rgNotificationRollups.filter(
            (t) => t.type == s.gH.k_ESteamNotificationType_Comment,
          )) {
            const n = (0, a.dh)(
              null === (t = i.item) || void 0 === t ? void 0 : t.body_data,
            );
            e.set(n.comment_type, 1 + (e.get(n.comment_type) || 0));
          }
          return e;
        }, []);
      }
      function b() {
        const { numActive: t, filters: e } = T(),
          i = v(),
          o = (0, E.M)();
        return (
          (0, g.SZ)(() => (0, a.RY)(w.m_summary)),
          t
            ? w.m_rgNotificationRollups.filter((t) => {
                if (!e.get(t.type)) return !1;
                if (
                  t.type == s.gH.k_ESteamNotificationType_Comment &&
                  (i.type != n.k_All || i.setItemTypes.size > 0)
                ) {
                  const e = (0, a.dh)(t.item.body_data);
                  let n = !i.fnFilter || i.fnFilter(e, o);
                  return (
                    i.setItemTypes.size > 0 &&
                      !i.setItemTypes.has(e.comment_type) &&
                      (n = !1),
                    n
                  );
                }
                return !0;
              })
            : w.m_rgNotificationRollups
        );
      }
      (0, N.gn)([h.LO], C.prototype, "rgFilterState", void 0),
        (0, N.gn)([h.LO], C.prototype, "commentFilter", void 0);
      const x = 300;
      const H = new C(),
        w = new a.tL();
      var R = i(51438),
        A = i(4306),
        L = i(19304),
        B = i(86770);
      function X(t) {
        const { hash: e } = t;
        (0, o.useEffect)(() => {
          H.ProcessHash(e);
        }, [e]);
        const i = (0, f.bY)();
        (0, o.useEffect)(() => {
          w.setTransport(i), w.m_nUnviewed > 0 && w.MarkAllItemsViewed();
        }, [i]);
        const n = (0, c.kQ)("notifications", "application_config");
        return (
          w.ProcessNewNotificationPayload(n),
          (function () {
            let t = [];
            w.m_rgNotificationRollups.forEach((e) => {
              var i;
              let n = null;
              if (e.type == s.gH.k_ESteamNotificationType_Comment) {
                const o = (0, a.dh)(e.item.body_data);
                if ((0, a.gt)(o)) {
                  let e =
                    null === (i = null == o ? void 0 : o.account_steam_id) ||
                    void 0 === i
                      ? void 0
                      : i.ConvertTo64BitString();
                  e && !t.includes(e) && t.push(e);
                }
                (0, a.g1)(o) && (n = null == o ? void 0 : o.owner_steam_id);
              } else if (e.type == s.gH.k_ESteamNotificationType_FriendInvite) {
                const t = (0, a.gs)(e.item.body_data);
                n = F.K.InitFromAccountID(parseInt(t.requestorID));
              } else if (e.type == s.gH.k_ESteamNotificationType_TradeOffer) {
                const t = (0, a.VE)(e.item.body_data);
                n = F.K.InitFromAccountID(parseInt(t));
              } else if (e.type == s.gH.k_ESteamNotificationType_Gift) {
                const t = (0, a.sS)(e.item.body_data);
                n = F.K.InitFromAccountID(parseInt(t));
              }
              let o = null == n ? void 0 : n.ConvertTo64BitString();
              n && !t.includes(o) && t.push(o);
            });
            do {
              k.y$.LoadProfiles(t.splice(0, x));
            } while (t.length > x);
            k.y$.LoadProfiles(t);
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
                      (0, _.Xx)("#NotificationsList_Header"),
                    ),
                    o.createElement(M, null),
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
                      o.createElement(G, null),
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
      function M() {
        const t = (function () {
            const t = b(),
              e = (0, a.fw)();
            return (
              t.map((t) => {
                var i;
                t.item.hidden ||
                  (0, a.UN)(
                    e,
                    t.type,
                    null === (i = t.rgunread) || void 0 === i
                      ? void 0
                      : i.length,
                  );
              }),
              (0, a.RY)(e)
            );
          })(),
          e = (0, _.Xx)("#NotificationsList_Unread", t);
        return o.createElement(
          "span",
          { className: u().NotificationsHeaderUnread },
          e,
        );
      }
      function O() {
        const t = b();
        return o.createElement(
          R.s,
          { className: u().NotificationsList },
          t.map((t, e) => o.createElement(Y, { key: e, rollup: t })),
        );
      }
      function U() {
        return o.createElement(
          R.s,
          { className: u().EmptyNotifications },
          o.createElement(
            R.s,
            { className: u().EmptyNotificationsTitle },
            (0, _.Xx)("#NotificationsList_EmptyTitle"),
          ),
          o.createElement(
            R.s,
            { className: u().EmptyNotificationsBody },
            (0, _.Xx)("#NotificationsList_EmptyBody"),
          ),
        );
      }
      function G() {
        const t = b(),
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
                (0, _.Xx)("#NotificationsList_MarkAllRead"),
              ),
            ),
            o.createElement(
              d.zx,
              {
                className: u().SettingsButton,
                onClick: () =>
                  window.location.assign(
                    `${l.De.STORE_BASE_URL}account/notificationsettings`,
                  ),
              },
              o.createElement(r.Zrf, { className: u().SettingsImg }),
              (0, _.Xx)("#NotificationsList_Settings"),
            ),
          ),
          o.createElement(
            "div",
            { className: u().SettingsFiltersTitle },
            (0, _.Xx)("#NotificationsList_FilterTo"),
          ),
          o.createElement(
            "div",
            { className: u().SettingsFilters },
            H.k_rgFilterCheckboxes
              .filter((t) => e.has(t.type))
              .map((t) =>
                o.createElement(Z, { key: t.type, filterOptions: t }),
              ),
          ),
          o.createElement(
            d.zx,
            {
              className: u().ResetButton,
              onClick: () => H.SetFilter(null, !1, !0),
            },
            (0, _.Xx)("#NotificationsList_Reset"),
          ),
        );
      }
      function Z(t) {
        const { filterOptions: e } = t,
          { filters: i } = T();
        return e.type == s.gH.k_ESteamNotificationType_Comment
          ? o.createElement(q, { filterOptions: e, checked: i.get(e.type) })
          : o.createElement(d.ji, {
              className: u().FilterCheckbox,
              key: e.type,
              label: e.display,
              checked: i.get(e.type),
              onChange: (t) => H.SetFilter(e.type, t),
            });
      }
      function P(t) {
        const { threadType: e } = t,
          i = v();
        return o.createElement(d.ji, {
          className: u().AdvancedCommentFilterCheckbox,
          label: (0, _.Xx)("#CommentThreadType_" + e),
          checked: i.setItemTypes.has(e),
          onChange: (t) => {
            t
              ? (i.setItemTypes.add(Number(e)),
                H.SetCommentFilter({
                  type: i.type,
                  setItemTypes: i.setItemTypes,
                }))
              : (i.setItemTypes.delete(Number(e)),
                H.SetCommentFilter({
                  type: i.type,
                  setItemTypes: i.setItemTypes,
                }));
          },
        });
      }
      function j(t) {
        const { className: e } = t,
          i = I();
        return o.createElement(
          "div",
          { className: (0, L.Z)(u().AdvancedCommentFilters, e) },
          Array.from(i.keys()).map((t) =>
            o.createElement(P, { key: t, threadType: t }),
          ),
        );
      }
      function D(t) {
        const { expanded: e, children: i } = t,
          [n, s] = (0, o.useState)(void 0),
          a = (0, A.yU)((t) => {
            const e = t.target;
            s(e.scrollHeight);
          });
        return o.createElement(
          "div",
          {
            className: (0, L.Z)(u().Expander, u().Expanded),
            style: { height: e ? n : 0 },
          },
          o.createElement("div", { ref: a }, i),
        );
      }
      function q(t) {
        const { filterOptions: e, checked: i } = t,
          n = (function () {
            const t = (0, E.M)();
            return o.useMemo(() => {
              var e;
              const i = new Map();
              for (const n of H.k_rgCommentFilters)
                for (const o of w.m_rgNotificationRollups.filter(
                  (t) => t.type == s.gH.k_ESteamNotificationType_Comment,
                )) {
                  const s = (0, a.dh)(
                    null === (e = o.item) || void 0 === e
                      ? void 0
                      : e.body_data,
                  );
                  n.fnFilter(s, t) && i.set(n.type, 1 + (i.get(n.type) || 0));
                }
              return i;
            }, [t]);
          })(),
          c = I(),
          l = n.size > 2,
          r = c.size > 1,
          m = l || r;
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(d.ji, {
            className: u().FilterCheckbox,
            key: e.type,
            label: e.display,
            checked: i,
            onChange: (t) => {
              H.SetFilter(e.type, t);
            },
          }),
          m &&
            o.createElement(
              "div",
              { className: (0, L.Z)(u().CommentFilterCtn, i && u().Expanded) },
              o.createElement(
                D,
                { expanded: i },
                o.createElement(
                  "div",
                  { className: u().CommentFilters },
                  r && o.createElement(j, { className: u().Expanded }),
                ),
              ),
            ),
        );
      }
      function z(t, e, i) {
        e.read ||
          (i && 0 != i.button && 1 != i.button) ||
          w.MarkItemRead(e.notification_id),
          t();
      }
      function Y(t) {
        const { rollup: e } = t;
        (0, g.SZ)(() => e.item.hidden);
        const i = a.Zm[e.type],
          [n, c] = o.useState(!1),
          l = (0, A.S1)(
            (0, o.useCallback)((t) => {
              t.isIntersecting && c(!0);
            }, []),
            { rootMargin: "600px" },
          ),
          r = (0, o.useCallback)(() => {
            w.MarkItemHidden(e.item.notification_id);
          }, [e.item.notification_id]);
        if (e.item.hidden) return null;
        if (
          e.item.hidden &&
          e.type == s.gH.k_ESteamNotificationType_FriendInvite
        ) {
          const t = (0, a.gs)(e.item.body_data);
          if (
            (0, m.fk)(t.state) ||
            t.state == m.of.k_EFriendRelationshipBlocked
          )
            return null;
        }
        const f = i.bBasic ? B.oj : B.k6[e.type];
        return f
          ? o.createElement(
              W,
              { ref: l },
              n &&
                o.createElement(f, {
                  rollup: e,
                  onNotificationClick: z,
                  onHide: r,
                  location: p.IS.AllNotificationsTray,
                  uimode: m.se.k_EUIMode_DesktopUI,
                }),
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
          o.createElement(X, { hash: e })
        );
      }
    },
  },
]);
