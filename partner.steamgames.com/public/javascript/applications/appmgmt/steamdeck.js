/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [4226],
  {
    34044: (r, e, s) => {
      s.r(e), s.d(e, { default: () => a });
      var o = s(90626),
        t = s(23539);
      function a(r) {
        const { dataprops: e, results: s } = r;
        let a = null;
        if (s && s.length > 0) {
          const r = e.appid ?? null;
          if (r) {
            let e = s.findIndex((e) => e.appid == r);
            a = -1 != e ? s[e] : null;
          }
          const o = e.search_id ?? null;
          if (!a && o) {
            let r = s.findIndex((r) => r.search_id == o);
            a = -1 != r ? s[r] : null;
          }
        }
        return a
          ? o.createElement(t.default, { results: a, bIncludeSteamOS: !0 })
          : null;
      }
    },
    68797: (r, e, s) => {
      s.d(e, { H: () => d });
      var o = s(37085),
        t = s(41735),
        a = s.n(t),
        n = s(56545);
      function d(r) {
        if (a().isCancel(r))
          return {
            strErrorMsg: "Action Cancelled:" + r,
            errorCode: o.d.k_EResultCancelled,
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
            if ("object" == typeof r && r instanceof n.w)
              return {
                strErrorMsg: "" + r.GetErrorMessage(),
                errorCode: r.GetEResult(),
              };
            console.warn("GetMsgAndErrorCodeFromResponse cannot parse: ", r);
          }
        }
        return "object" == typeof r && "status" in r
          ? {
              strErrorMsg: "Unknown Error: " + r + "\nStatus Code:" + r.status,
              errorCode: o.d.k_EResultFail,
            }
          : {
              strErrorMsg: "Unknown Error: " + r,
              errorCode: o.d.k_EResultFail,
            };
      }
    },
  },
]);
