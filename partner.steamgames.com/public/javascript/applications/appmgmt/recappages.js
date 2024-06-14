/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [8676],
  {
    28953: (e, t, a) => {
      a.r(t), a.d(t, { RecapHubRoutes: () => C, default: () => R });
      var n = a(47427),
        r = a(69406),
        l = a(28017),
        c = a(8285),
        s = a(760),
        m = a(77936),
        i = a(4771),
        p = a(81070),
        o = a(71363),
        d = a(77681),
        u = a.n(d),
        _ = a(13129),
        E = a(31846),
        g = a(65255),
        v = a(82756),
        N = a(91398),
        x = a(4942),
        f = a(24827);
      function h(e) {
        const { pagePostFix: t, nPartnerID: a } = e,
          r = "sale_nextfest_" + t,
          l = (0, p.r)(r),
          c = (0, o.C)(g.L7.accountid, a),
          s = (0, i.Xj)(l.event_title, (0, m.jM)(g.De.LANGUAGE)),
          d = (0, x.fV)(l),
          h = (function () {
            const [e] = (0, n.useState)(() =>
              (0, v.kQ)("demo_stats", "application_config"),
            );
            return e;
          })(),
          [C, R, b] = (0, n.useMemo)(
            () => [
              h.reduce(
                (e, t) =>
                  t.rt_last_update_time > e ? t.rt_last_update_time : e,
                0,
              ),
              h.reduce((e, t) => (t.rt_end_time > e ? t.rt_end_time : e), 0),
              new Set(h.map((e) => e.appid)).size,
            ],
            [h],
          );
        return n.createElement(
          "div",
          { className: (0, _.Z)(u().AdminPageCtn) },
          n.createElement(
            "div",
            { className: u().PageTitle },
            (0, E.Xx)("#Recap_NextFest_Title", s),
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
                  (0, E.Xx)(
                    "#Recap_ForPartner",
                    null == c ? void 0 : c.partner_name,
                  ),
                ),
                Boolean(0 == h.length)
                  ? n.createElement(
                      "div",
                      null,
                      (0, E.Xx)("#Recap_Stats_NoAppsIncluded"),
                    )
                  : n.createElement(
                      "div",
                      null,
                      (0, E.Xx)(
                        "#Recap_Stats_Computed",
                        (0, E.$1)(C),
                        (0, f.Kj)(C),
                      ),
                    ),
              ),
            ),
          ),
          Boolean(0 == h.length)
            ? n.createElement(
                "div",
                null,
                (0, E.Xx)("#Recap_Stats_NoAppsIncluded"),
              )
            : n.createElement(
                n.Fragment,
                null,
                Boolean(b > 1) &&
                  n.createElement(N.by, { rgDemo: h, rtLatestEndDate: R }),
                n.createElement(N.Iy, {
                  rgDemo: h,
                  rtLatestEndDate: R,
                  nUniqueApps: b,
                  bShowDiscoveryGraph: !0,
                }),
              ),
        );
      }
      const C = { NextFestRecap: (e, t) => `/nextfest/${e}/${t}` };
      function R(e) {
        return n.createElement(
          l.VK,
          { basename: (0, s.l)() + "recap/" },
          n.createElement(
            c.rs,
            null,
            n.createElement(c.AW, {
              path: C.NextFestRecap(":postfix", ":partnerid(\\d+)"),
              render: (e) =>
                n.createElement(h, {
                  pagePostFix: e.match.params.postfix,
                  nPartnerID: Number.parseInt(e.match.params.partnerid),
                }),
            }),
            n.createElement(c.AW, { component: r.R }),
          ),
        );
      }
    },
  },
]);
