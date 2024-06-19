/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [8676],
  {
    28953: (e, t, a) => {
      a.r(t), a.d(t, { RecapHubRoutes: () => S, default: () => A });
      var n = a(47427),
        r = a(69406),
        s = a(28017),
        l = a(8285),
        m = a(760),
        c = a(77936),
        i = a(4771),
        p = a(81070),
        o = a(71363),
        d = a(77681),
        u = a.n(d),
        _ = a(24827),
        E = a(13129),
        g = a(31846),
        v = a(65255),
        N = a(82756),
        f = a(91398),
        h = a(4942);
      function x(e) {
        const { pagePostFix: t, nPartnerID: a } = e,
          r = "sale_nextfest_" + t,
          s = (0, p.r)(r),
          l = (0, o.C)(v.L7.accountid, a),
          m = (0, i.Xj)(s.event_title, (0, c.jM)(v.De.LANGUAGE)),
          d = (0, h.fV)(s),
          { rgDemoStats: x, rgAppSansPermissions: S } = (function () {
            const [e] = (0, n.useState)(() =>
              (0, N.kQ)("demo_stats", "application_config"),
            );
            return {
              rgDemoStats: e.stats || [],
              rgAppSansPermissions: Array.from(
                new Set(e.appid_without_permissions || []),
              ),
            };
          })(),
          [A, C, P] = (0, n.useMemo)(
            () => [
              x.reduce(
                (e, t) =>
                  t.rt_last_update_time > e ? t.rt_last_update_time : e,
                0,
              ),
              x.reduce((e, t) => (t.rt_end_time > e ? t.rt_end_time : e), 0),
              new Set(x.map((e) => e.appid)).size,
            ],
            [x],
          );
        return n.createElement(
          "div",
          { className: (0, E.Z)(u().AdminPageCtn) },
          n.createElement(
            "div",
            { className: u().PageTitle },
            (0, g.Xx)("#Recap_NextFest_Title", m),
          ),
          n.createElement("hr", null),
          n.createElement(
            "div",
            { className: u().ColumnCtn },
            n.createElement(
              "div",
              { className: u().LeftCol },
              n.createElement(
                "div",
                { className: u().ColHeader },
                n.createElement("div", {
                  className: u().ColHeaderImg,
                  style: { backgroundImage: `url( '${d}' )` },
                }),
              ),
            ),
            n.createElement(
              "div",
              { className: u().RightCol },
              n.createElement(
                "div",
                { className: u().SectionCtn },
                n.createElement(
                  "div",
                  null,
                  (0, g.Xx)(
                    "#Recap_ForPartner",
                    null == l ? void 0 : l.partner_name,
                  ),
                ),
                Boolean(0 == x.length)
                  ? n.createElement(
                      "div",
                      null,
                      (0, g.Xx)("#Recap_Stats_NoAppsIncluded"),
                    )
                  : n.createElement(
                      "div",
                      null,
                      (0, g.Xx)(
                        "#Recap_Stats_Computed",
                        (0, g.$1)(A),
                        (0, _.Kj)(A),
                      ),
                    ),
              ),
            ),
          ),
          Boolean(0 == x.length && 0 == S.length)
            ? n.createElement(
                "div",
                null,
                (0, g.Xx)("#Recap_Stats_NoAppsIncluded"),
              )
            : n.createElement(
                n.Fragment,
                null,
                Boolean(P > 1) &&
                  n.createElement(f.by, {
                    rgDemo: x,
                    rtLatestEndDate: C,
                    rgAppSansPermissions: S,
                  }),
                n.createElement(f.Iy, {
                  rgDemo: x,
                  rtLatestEndDate: C,
                  nUniqueApps: P,
                  bShowDiscoveryGraph: !0,
                  rgAppSansPermissions: S,
                }),
              ),
        );
      }
      const S = { NextFestRecap: (e, t) => `/nextfest/${e}/${t}` };
      function A(e) {
        return n.createElement(
          s.VK,
          { basename: (0, m.l)() + "recap/" },
          n.createElement(
            l.rs,
            null,
            n.createElement(l.AW, {
              path: S.NextFestRecap(":postfix", ":partnerid(\\d+)"),
              render: (e) =>
                n.createElement(x, {
                  pagePostFix: e.match.params.postfix,
                  nPartnerID: Number.parseInt(e.match.params.partnerid),
                }),
            }),
            n.createElement(l.AW, { component: r.R }),
          ),
        );
      }
    },
  },
]);
