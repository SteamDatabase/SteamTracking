/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [6699],
  {
    96405: (r, s, e) => {
      e.r(s), e.d(s, { default: () => n });
      var o = e(89526),
        t = e(14965);
      function n(r) {
        var s, e;
        const { dataprops: n, results: a } = r;
        let d = null;
        if (a && a.length > 0) {
          const r = null !== (s = n.appid) && void 0 !== s ? s : null;
          if (r) {
            let s = a.findIndex((s) => s.appid == r);
            d = -1 != s ? a[s] : null;
          }
          const o = null !== (e = n.search_id) && void 0 !== e ? e : null;
          if (!d && o) {
            let r = a.findIndex((r) => r.search_id == o);
            d = -1 != r ? a[r] : null;
          }
        }
        return d ? o.createElement(t.default, { results: d }) : null;
      }
    },
    23217: (r, s, e) => {
      e.d(s, { l: () => d });
      var o = e(42735),
        t = e(52868),
        n = e.n(t),
        a = e(67328);
      function d(r) {
        if (n().isCancel(r))
          return {
            strErrorMsg: "Action Cancelled:" + r,
            errorCode: o.s.k_EResultCancelled,
          };
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
          if ("success" in r.response.data)
            return {
              strErrorMsg: "error code: " + r.response.data.success,
              errorCode: r.response.data.success,
            };
        } else if ("object" == typeof r.data) {
          if ("msg" in r.data)
            return { strErrorMsg: r.data.msg, errorCode: r.data.success };
          if ("err_msg" in r.data)
            return { strErrorMsg: r.data.err_msg, errorCode: r.data.success };
          if ("message" in r.data)
            return { strErrorMsg: r.data.message, errorCode: r.data.success };
          if ("success" in r.data)
            return {
              strErrorMsg: "error code: " + r.data.success,
              errorCode: r.data.success,
            };
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
              console.warn(r),
              console.groupEnd();
          else {
            if ("object" == typeof r && r instanceof a.gA)
              return {
                strErrorMsg: "" + r.GetEResult(),
                errorCode: r.GetEResult(),
              };
            console.warn("GetMsgAndErrorCodeFromResponse cannot parse: ", r);
          }
        }
        return "object" == typeof r && "status" in r
          ? {
              strErrorMsg: "Unknown Error: " + r + "\nStatus Code:" + r.status,
              errorCode: o.s.k_EResultFail,
            }
          : {
              strErrorMsg: "Unknown Error: " + r,
              errorCode: o.s.k_EResultFail,
            };
      }
    },
  },
]);
