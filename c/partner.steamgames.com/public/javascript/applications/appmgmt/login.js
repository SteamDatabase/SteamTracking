"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [6966],
  {
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports),
        __webpack_require__._(module_exports, {
          default: () => _,
        });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _() {
        return (
          (0, _.useEffect)(
            () => (
              (window.g_ShowLoginDialog = (_) =>
                (0, _._)(
                  _.createElement(_, {
                    redirectUrl: _,
                  }),
                  window,
                  {
                    popupWidth: 700,
                    popupHeight: 440,
                  },
                )),
              () => {
                delete window.g_ShowLoginDialog;
              }
            ),
            [],
          ),
          null
        );
      }
      function _(_) {
        const {
            redirectUrl: _ = _._.PARTNER_BASE_URL,
            closeModal: __webpack_require__,
          } = _,
          _ = (0, _.useRef)(
            new _._(_._.WEBAPI_BASE_URL).GetServiceTransport(),
          ).current,
          [_, _] = (0, _.useState)(!1);
        return _.createElement(
          _._,
          {
            onEscKeypress: __webpack_require__,
            hideTopBar: !0,
            bDisableBackgroundDismiss: !0,
          },
          _
            ? _.createElement(_._, null)
            : _.createElement(_._, {
                platform: 2,
                transport: _,
                onComplete: (_) => {
                  _ == _._.k_PrimaryDomainFail
                    ? _(!0)
                    : window.location.assign(_);
                },
                autoFocus: !0,
                theme: "modal",
                redirectUrl: _,
              }),
        );
      }
    },
  },
]);
