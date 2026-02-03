(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [6966],
  {
    chunkid: (module) => {
      module.exports = {
        LoginContainer: "_2kLRmRsLwjGDlm-ZfUpChG",
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
        const { redirectUrl: _ = _._.STORE_BASE_URL } = _,
          _ = (0, _._)(),
          [_, _] = (0, _.useState)(!1),
          _ = _.guest;
        return _.createElement(
          "div",
          {
            className: _.LoginContainer,
          },
          _
            ? _.createElement(_._, null)
            : _.createElement(
                _._,
                {
                  autoFocus: !0,
                  transport: _,
                  platform: 2,
                  onComplete: (_) => {
                    _ == _._.k_PrimaryDomainFail
                      ? _(!0)
                      : window.location.assign(_);
                  },
                  redirectUrl: _,
                },
                _ &&
                  _.createElement(_._, {
                    redirectURL: _.redirectUrl,
                  }),
              ),
        );
      }
    },
  },
]);
