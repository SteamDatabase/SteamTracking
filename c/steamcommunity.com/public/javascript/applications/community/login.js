(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [6966],
  {
    chunkid: (module) => {
      module.exports = {
        LoginContainer: "_2vAS_iK_bJ7iv_7pRL7Zdk",
      };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports),
        __webpack_require__._(module_exports, {
          default: () => _,
        });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const { redirectUrl: _ = _._.COMMUNITY_BASE_URL } = _,
          [__webpack_require__] = (0, _.useState)(
            new _._(_._.WEBAPI_BASE_URL).GetAnonymousServiceTransport(),
          ),
          [_, _] = (0, _.useState)(!1);
        return _.createElement(
          "div",
          {
            className: _.LoginContainer,
          },
          _
            ? _.createElement(_._, null)
            : _.createElement(_._, {
                autoFocus: !0,
                transport: __webpack_require__,
                platform: 2,
                onComplete: (_) => {
                  _ == _._.k_PrimaryDomainFail
                    ? _(!0)
                    : window.location.assign(_);
                },
                redirectUrl: _,
              }),
        );
      }
    },
  },
]);
