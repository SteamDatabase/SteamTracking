/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [7383],
  {
    73850: () => {},
    38603: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => d });
      var o = n(64399),
        a = n(90626),
        i = n(22797),
        c = n(30470),
        r = n(28268),
        u = n(73850);
      function d(e) {
        const t = (0, o.jo)(),
          n = (0, a.useMemo)(() => {
            if (t) {
              const e = Math.floor(Date.now() / 1e3) - 345600,
                n = e + 1728e3;
              return t
                .filter(
                  (t) =>
                    t.start_date > e &&
                    t.start_date < n &&
                    ((!t.owner_account_id &&
                      t.creator_account_id == c.iA.accountid) ||
                      t.owner_account_id == c.iA.accountid ||
                      (t.artwork_owner_account_id == c.iA.accountid &&
                        !t.artwork_completed_time) ||
                      t.operator_account_id == c.iA.accountid ||
                      t.watch_list?.includes(c.iA.accountid)),
                )
                .map((e) => e.id);
            }
            return null;
          }, [t]);
        return c.iA.is_support
          ? n && 0 != t.length
            ? 0 == n.length
              ? a.createElement(
                  "div",
                  null,
                  "You're all good! Nothing of yours needs attention :)",
                )
              : a.createElement(
                  "div",
                  { className: u.Ctn },
                  a.createElement(r.U, {
                    planIDs: n,
                    bExcludeHideButton: !0,
                    bHideTypeField: !0,
                    bHideDoneByDefault: !0,
                  }),
                )
            : a.createElement(i.t, {
                string: "loading",
                size: "medium",
                position: "center",
              })
          : null;
      }
    },
  },
]);
