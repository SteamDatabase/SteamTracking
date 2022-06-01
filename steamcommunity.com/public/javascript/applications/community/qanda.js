/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [119],
  {
    KVeB: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "QAndARoutes", function () {
          return i;
        });
      var a = n("JCps"),
        r = n("q1tI"),
        s = n("EC67"),
        o = n("WplJ"),
        c = n("lkRc");
      const i = {
        Dashboard: (e) => `/questions/${e}/dashboard`,
        FullPageView: (e, t) => `/questions/${e}/view/${t}`,
      };
      function u(e) {
        return "dev" !== c.c.WEB_UNIVERSE
          ? r.createElement(s.b, { to: "/" })
          : r.createElement(
              "div",
              null,
              "Unknown Route - Check ui/routes/questions.tsx to see if this page has been added to the list of routes."
            );
      }
      t.default = function (e) {
        return r.createElement(
          s.e,
          null,
          r.createElement(s.c, {
            path: i.Dashboard(":vanity_str"),
            render: (e) =>
              r.createElement(o.a, {
                config: {
                  "qanda-root": () => {
                    const { vanity_str: t } = e.match.params;
                    return r.createElement(a.a, { vanity_str: t });
                  },
                },
              }),
          }),
          r.createElement(s.c, {
            path: i.FullPageView(":vanity_str", ":session_gid"),
            render: (e) =>
              r.createElement(o.a, {
                config: {
                  "qanda-root": () => {
                    const { vanity_str: t, session_gid: n } = e.match.params;
                    return r.createElement(a.b, { gidSession: n });
                  },
                },
              }),
          }),
          r.createElement(s.c, { component: u })
        );
      };
    },
  },
]);
