/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [3599],
  {
    14080: () => {},
    91183: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => d });
      var a = n(49675),
        o = n(89526),
        c = n(3301),
        r = n(44973),
        i = n(44989),
        u = n(14080);
      function d(e) {
        const t = (0, a.yw)(),
          n = (0, o.useMemo)(() => {
            if (t) {
              const e = Math.floor(Date.now() / 1e3) - 345600,
                n = e + 1641600;
              return t
                .filter((t) => {
                  var a;
                  return (
                    t.start_date > e &&
                    t.start_date < n &&
                    !t.reviewed_by_account &&
                    (t.creator_account_id == r.L7.accountid ||
                      t.owner_account_id == r.L7.accountid ||
                      t.artwork_owner_account_id == r.L7.accountid ||
                      t.operator_account_id == r.L7.accountid ||
                      (null === (a = t.watch_list) || void 0 === a
                        ? void 0
                        : a.includes(r.L7.accountid)))
                  );
                })
                .map((e) => e.id);
            }
            return null;
          }, [t]);
        return r.L7.is_support
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
                  o.createElement(i.N, {
                    planIDs: n,
                    bExcludeHideButton: !0,
                    bHideTypeField: !0,
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
