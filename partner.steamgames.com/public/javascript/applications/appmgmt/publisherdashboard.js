/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [3863],
  {
    15798: (e) => {
      e.exports = {
        ButtonDailyDealDashboard: "dailydeals_ButtonDailyDealDashboard_IJS5R",
      };
    },
    25406: (e) => {
      e.exports = {
        Section: "section_Section_1FrGx",
        Title: "section_Title_f3pCB",
        Body: "section_Body_1CaAp",
      };
    },
    10173: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, { default: () => D });
      var n = t(47427),
        l = t(37563),
        i = t(15798),
        o = t(31846),
        s = t(53040),
        r = t(25406);
      function c(e) {
        const { title: a, description: t, children: l } = e;
        return n.createElement(
          "div",
          { className: r.Section },
          n.createElement("div", { className: r.Title }, a),
          t && n.createElement("div", { className: r.Body }, t),
          l,
        );
      }
      function d() {
        return n.createElement(
          c,
          {
            title: (0, o.Xx)("#DailyDeals_PartnerDashboard_Title"),
            description: (0, o.Xx)("#DailyDeals_PartnerDashboard_Invite_Body"),
          },
          n.createElement(
            s.zx,
            {
              className: i.ButtonDailyDealDashboard,
              onClick: () => {
                window.location.assign(
                  `${l.De.PARTNER_BASE_URL}promotion/dailydeals/dashboard`,
                );
              },
            },
            (0, o.Xx)("#DailyDeals_Dashboard"),
          ),
        );
      }
      function D(e) {
        const a = (0, l.kQ)("rgDailyDealInvitations", "application_config");
        return n.createElement(
          n.Fragment,
          null,
          (null == a ? void 0 : a.length) > 0 && n.createElement(d, null),
        );
      }
    },
  },
]);
