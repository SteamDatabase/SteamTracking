/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [1825],
  {
    23217: (r, s, e) => {
      e.d(s, { l: () => a });
      var o = e(52868),
        t = e.n(o),
        n = e(54856);
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
              "GetMsgAndErrorCodeFromResponse cannot parse: ",
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
    74839: (r, s, e) => {
      e.r(s), e.d(s, { default: () => o });
      const o = e(53913).$g;
    },
  },
]);
