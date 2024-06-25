/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [3599],
  {
    66387: () => {},
    75907: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => d });
      var a = n(87380),
        o = n(47427),
        c = n(46882),
        i = n(65255),
        r = n(69176),
        u = n(66387);
      function d(e) {
        const t = (0, a.yw)(),
          n = (0, o.useMemo)(() => {
            if (t) {
              const e = Math.floor(Date.now() / 1e3) - 345600,
                n = e + 1728e3;
              return t
                .filter(
                  (t) =>
                    t.start_date > e &&
                    t.start_date < n &&
                    ((!t.owner_account_id &&
                      t.creator_account_id == i.L7.accountid) ||
                      t.owner_account_id == i.L7.accountid ||
                      (t.artwork_owner_account_id == i.L7.accountid &&
                        !t.artwork_completed_time) ||
                      t.operator_account_id == i.L7.accountid ||
                      t.watch_list?.includes(i.L7.accountid)),
                )
                .map((e) => e.id);
            }
            return null;
          }, [t]);
        return i.L7.is_support
          ? n && 0 != t.length
            ? 0 == n.length
              ? o.createElement(
                  "div",
                  null,
                  "You're all good! Nothing of yours needs attention :)",
                )
              : o.createElement(
                  "div",
                  { className: u.Ctn },
                  o.createElement(r.N, {
                    planIDs: n,
                    bExcludeHideButton: !0,
                    bHideTypeField: !0,
                    bHideDoneByDefault: !0,
                  }),
                )
            : o.createElement(c.V, {
                string: "loading",
                size: "medium",
                position: "center",
              })
          : null;
      }
    },
  },
]);
