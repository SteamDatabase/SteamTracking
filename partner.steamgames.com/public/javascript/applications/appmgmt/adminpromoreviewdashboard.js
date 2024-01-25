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
      var o = n(87380),
        a = n(47427),
        r = n(46882),
        c = n(65255),
        i = n(89654),
        u = n(66387);
      function d(e) {
        const t = (0, o.yw)(),
          n = (0, a.useMemo)(() => {
            if (t) {
              const e = Math.floor(Date.now() / 1e3) - 345600,
                n = e + 1728e3;
              return t
                .filter((t) => {
                  var o;
                  return (
                    t.start_date > e &&
                    t.start_date < n &&
                    ((!t.owner_account_id &&
                      t.creator_account_id == c.L7.accountid) ||
                      t.owner_account_id == c.L7.accountid ||
                      (t.artwork_owner_account_id == c.L7.accountid &&
                        !t.artwork_completed_time) ||
                      t.operator_account_id == c.L7.accountid ||
                      (null === (o = t.watch_list) || void 0 === o
                        ? void 0
                        : o.includes(c.L7.accountid)))
                  );
                })
                .map((e) => e.id);
            }
            return null;
          }, [t]);
        return c.L7.is_support
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
                  a.createElement(i.N, {
                    planIDs: n,
                    bExcludeHideButton: !0,
                    bHideTypeField: !0,
                    bHideDoneByDefault: !0,
                  }),
                )
            : a.createElement(r.V, {
                string: "loading",
                size: "medium",
                position: "center",
              })
          : null;
      }
    },
  },
]);
