/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [8647],
  {
    48760: (r, s, e) => {
      e.d(s, { U: () => a, W: () => t });
      var o = e(37563);
      const t = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
      function a(r, s) {
        let e = ".jpg";
        (r && "0000000000000000000000000000000000000000" !== r) || (r = t),
          44 == r.length && ((e = r.substr(-4)), (r = r.substr(0, 40)));
        let a = o.De.AVATAR_BASE_URL;
        return (
          a ||
            ((a = o.De.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
            (a += r.substr(0, 2) + "/")),
          (a += r),
          s && "small" != s && (a += "_" + s),
          (a += e),
          a
        );
      }
    },
    16649: (r, s, e) => {
      e.d(s, { l: () => n });
      var o = e(80751),
        t = e.n(o),
        a = e(21928);
      function n(r) {
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
                strErrorMsg: "" + r.GetErrorMessage(),
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
    16567: (r, s, e) => {
      e.r(s), e.d(s, { default: () => a });
      var o = e(47427),
        t = e(79896);
      function a() {
        return o.createElement(t.gu, null);
      }
    },
  },
]);
