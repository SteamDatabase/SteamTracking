/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [908],
  {
    47330: (r, e, s) => {
      s.d(e, { l: () => a });
      s(6960);
      var o = s(52868),
        t = s.n(o),
        n = s(17922);
      function a(r) {
        if (t().isCancel(r))
          return { strErrorMsg: "Action Cancelled:" + r, errorCode: 52 };
        if (
          void 0 !== r.response &&
          r.response.data &&
          "object" == typeof r.response.data
        ) {
          if ("msg" in r.response.data)
            return {
              strErrorMsg: r.response.data.msg,
              errorCode: r.response.data.success,
            };
          if ("err_msg" in r.response.data)
            return {
              strErrorMsg: r.response.data.err_msg,
              errorCode: r.response.data.success,
            };
          if ("message" in r.response.data)
            return {
              strErrorMsg: r.response.data.message,
              errorCode: r.response.data.success,
            };
        } else if ("object" == typeof r.data) {
          if ("msg" in r.data)
            return { strErrorMsg: r.data.msg, errorCode: r.data.success };
          if ("err_msg" in r.data)
            return { strErrorMsg: r.data.err_msg, errorCode: r.data.success };
          if ("message" in r.response.data)
            return { strErrorMsg: r.data.message, errorCode: r.data.success };
        } else {
          if (void 0 !== r.success && void 0 !== r.msg)
            return { strErrorMsg: r.msg, errorCode: r.success };
          if (void 0 !== r.success && void 0 !== r.message)
            return { strErrorMsg: r.message, errorCode: r.success };
          if (void 0 !== r.success && void 0 !== r.err_msg)
            return { strErrorMsg: r.err_msg, errorCode: r.success };
          if ("string" == typeof r && r.length > 1024)
            console.groupCollapsed(
              "GetMsgAndErrorCodeFromResponse cannot parse: "
            ),
              console.error(r),
              console.groupEnd();
          else {
            if ("object" == typeof r && r instanceof n.gA)
              return {
                strErrorMsg: "" + r.GetEResult(),
                errorCode: r.GetEResult(),
              };
            console.error("GetMsgAndErrorCodeFromResponse cannot parse: ", r);
          }
        }
        return "object" == typeof r && "status" in r
          ? {
              strErrorMsg: "Unknown Error: " + r + "\nStatus Code:" + r.status,
              errorCode: 2,
            }
          : { strErrorMsg: "Unknown Error: " + r, errorCode: 2 };
      }
    },
    56597: (r, e, s) => {
      s.r(e), s.d(e, { QAndARoutes: () => c, default: () => i });
      var o = s(52601),
        t = s(89526),
        n = s(59934),
        a = s(20352),
        d = s(83215);
      const c = {
        Dashboard: (r) => `/questions/${r}/dashboard`,
        FullPageView: (r, e) => `/questions/${r}/view/${e}`,
      };
      const i = function (r) {
        return t.createElement(
          n.rs,
          null,
          t.createElement(n.AW, {
            path: c.Dashboard(":vanity_str"),
            render: (r) =>
              t.createElement(a.d, {
                config: {
                  "qanda-root": () => {
                    const { vanity_str: e } = r.match.params;
                    return t.createElement(o.A, { vanity_str: e });
                  },
                },
              }),
          }),
          t.createElement(n.AW, {
            path: c.FullPageView(":vanity_str", ":session_gid"),
            render: (r) =>
              t.createElement(a.d, {
                config: {
                  "qanda-root": () => {
                    const { vanity_str: e, session_gid: s } = r.match.params;
                    return t.createElement(o.EI, { gidSession: s });
                  },
                },
              }),
          }),
          t.createElement(n.AW, { component: d.R })
        );
      };
    },
  },
]);
