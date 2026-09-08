/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [7383],
  {
    73850: () => {},
    38603: (t, e, n) => {
      "use strict";
      n.r(e), n.d(e, { default: () => s });
      var i = n(7850),
        o = n(64399),
        a = n(90626),
        c = n(22797),
        r = n(30470),
        d = n(28268),
        u = n(73850);
      function s(t) {
        const e = (0, o.jo)(),
          n = (0, a.useMemo)(() => {
            if (e) {
              const t = Math.floor(Date.now() / 1e3) - 345600,
                n = t + 1728e3;
              return e
                .filter(
                  (e) =>
                    e.start_date > t &&
                    e.start_date < n &&
                    ((!e.owner_account_id &&
                      e.creator_account_id == r.iA.accountid) ||
                      e.owner_account_id == r.iA.accountid ||
                      (e.artwork_owner_account_id == r.iA.accountid &&
                        !e.artwork_completed_time) ||
                      e.operator_account_id == r.iA.accountid ||
                      e.watch_list?.includes(r.iA.accountid)),
                )
                .map((t) => t.id);
            }
            return null;
          }, [e]);
        return r.iA.is_support
          ? n && 0 != e.length
            ? 0 == n.length
              ? (0, i.jsx)("div", {
                  children:
                    "You're all good! Nothing of yours needs attention :)",
                })
              : (0, i.jsx)("div", {
                  className: u.Ctn,
                  children: (0, i.jsx)(d.U, {
                    planIDs: n,
                    bExcludeHideButton: !0,
                    bHideTypeField: !0,
                    bHideDoneByDefault: !0,
                  }),
                })
            : (0, i.jsx)(c.t, {
                string: "loading",
                size: "medium",
                position: "center",
              })
          : null;
      }
    },
  },
]);
