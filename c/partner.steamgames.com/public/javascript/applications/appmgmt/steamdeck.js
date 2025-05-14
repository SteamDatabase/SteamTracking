"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [4226],
  {
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports),
        __webpack_require__._(module_exports, {
          default: () => _,
        });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const { dataprops: _, results: __webpack_require__ } = _;
        let _ = null;
        if (__webpack_require__ && __webpack_require__.length > 0) {
          const _ = _.appid ?? null;
          if (_) {
            let _ = __webpack_require__.findIndex((_) => _.appid == _);
            _ = -1 != _ ? __webpack_require__[_] : null;
          }
          const _ = _.search_id ?? null;
          if (!_ && _) {
            let _ = __webpack_require__.findIndex((_) => _.search_id == _);
            _ = -1 != _ ? __webpack_require__[_] : null;
          }
        }
        return _
          ? _.createElement(_.default, {
              results: _,
              bIncludeSteamOS: !0,
            })
          : null;
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid");
      function _(_) {
        if (_().isCancel(_))
          return {
            strErrorMsg: "Action Cancelled:" + _,
            errorCode: 52,
          };
        if (
          void 0 !== _.response &&
          _.response.data &&
          "object" == typeof _.response.data
        ) {
          if ("msg" in _.response.data)
            return {
              strErrorMsg: _.response.data.msg,
              errorCode: _.response.data.success,
            };
          if ("err_msg" in _.response.data)
            return {
              strErrorMsg: _.response.data.err_msg,
              errorCode: _.response.data.success,
            };
          if ("message" in _.response.data)
            return {
              strErrorMsg: _.response.data.message,
              errorCode: _.response.data.success,
            };
          if ("success" in _.response.data)
            return {
              strErrorMsg: "error code: " + _.response.data.success,
              errorCode: _.response.data.success,
            };
        } else if ("object" == typeof _.data) {
          if ("msg" in _.data)
            return {
              strErrorMsg: _.data.msg,
              errorCode: _.data.success,
            };
          if ("err_msg" in _.data)
            return {
              strErrorMsg: _.data.err_msg,
              errorCode: _.data.success,
            };
          if ("message" in _.data)
            return {
              strErrorMsg: _.data.message,
              errorCode: _.data.success,
            };
          if ("success" in _.data)
            return {
              strErrorMsg: "error code: " + _.data.success,
              errorCode: _.data.success,
            };
        } else {
          if (void 0 !== _.success && void 0 !== _.msg)
            return {
              strErrorMsg: _.msg,
              errorCode: _.success,
            };
          if (void 0 !== _.success && void 0 !== _.message)
            return {
              strErrorMsg: _.message,
              errorCode: _.success,
            };
          if (void 0 !== _.success && void 0 !== _.err_msg)
            return {
              strErrorMsg: _.err_msg,
              errorCode: _.success,
            };
          if ("string" == typeof _ && _.length > 1024)
            console.groupCollapsed(
              "GetMsgAndErrorCodeFromResponse cannot parse: ",
            ),
              console.warn(_),
              console.groupEnd();
          else {
            if ("object" == typeof _ && _ instanceof _._)
              return {
                strErrorMsg: "" + _.GetErrorMessage(),
                errorCode: _.GetEResult(),
              };
            console.warn("GetMsgAndErrorCodeFromResponse cannot parse: ", _);
          }
        }
        return "object" == typeof _ && "status" in _
          ? {
              strErrorMsg: "Unknown Error: " + _ + "\nStatus Code:" + _.status,
              errorCode: 2,
            }
          : {
              strErrorMsg: "Unknown Error: " + _,
              errorCode: 2,
            };
      }
    },
  },
]);
