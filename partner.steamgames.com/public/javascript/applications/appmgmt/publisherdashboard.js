/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [3863],
  {
    92151: (a) => {
      a.exports = {
        DailyDealInvite: "publisherdashboardlanding_DailyDealInvite_3eCJT",
        Title: "publisherdashboardlanding_Title_3se9d",
        Body: "publisherdashboardlanding_Body_uGv7K",
        ButtonDailyDealDashboard:
          "publisherdashboardlanding_ButtonDailyDealDashboard_2rZlP",
      };
    },
    94912: (a, e, l) => {
      "use strict";
      l.r(e), l.d(e, { default: () => d });
      var i = l(47427),
        n = l(37563),
        t = l(92151),
        s = l(31846),
        r = l(53040);
      function d(a) {
        const e = (0, n.kQ)("rgDailyDealInvitations", "application_config");
        return (null == e ? void 0 : e.length) > 0
          ? i.createElement(o, null)
          : null;
      }
      function o() {
        return i.createElement(
          "div",
          { className: t.DailyDealInvite },
          i.createElement(
            "div",
            { className: t.Title },
            (0, s.Xx)("#DailyDeals_PartnerDashboard_Title"),
          ),
          i.createElement(
            "div",
            { className: t.Body },
            (0, s.Xx)("#DailyDeals_PartnerDashboard_Invite_Body"),
          ),
          i.createElement(
            r.zx,
            {
              className: t.ButtonDailyDealDashboard,
              onClick: () => {
                window.location.assign(
                  `${n.De.PARTNER_BASE_URL}promotion/dailydeals/dashboard`,
                );
              },
            },
            (0, s.Xx)("#DailyDeals_Dashboard"),
          ),
        );
      }
    },
  },
]);
