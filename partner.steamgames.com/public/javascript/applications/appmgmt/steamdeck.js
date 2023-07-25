/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [6699],
  {
    96405: (r, e, s) => {
      s.r(e), s.d(e, { default: () => n });
      var o = s(89526),
        t = s(14965);
      function n(r) {
        var e, s;
        const { dataprops: n, results: a } = r;
        let d = null;
        if (a && a.length > 0) {
          const r = null !== (e = n.appid) && void 0 !== e ? e : null;
          if (r) {
            let e = a.findIndex((e) => e.appid == r);
            d = -1 != e ? a[e] : null;
          }
          const o = null !== (s = n.search_id) && void 0 !== s ? s : null;
          if (!d && o) {
            let r = a.findIndex((r) => r.search_id == o);
            d = -1 != r ? a[r] : null;
          }
        }
        return d ? o.createElement(t.default, { results: d }) : null;
      }
    },
    23217: (r, e, s) => {
      s.d(e, { l: () => a });
      var o = s(52868),
        t = s.n(o),
        n = s(54856);
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
              console.warn(r),
              console.groupEnd();
          else {
            if ("object" == typeof r && r instanceof n.gA)
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
              errorCode: 2,
            }
          : { strErrorMsg: "Unknown Error: " + r, errorCode: 2 };
      }
    },
  },
]);
