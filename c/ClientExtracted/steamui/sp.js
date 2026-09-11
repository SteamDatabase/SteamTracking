"use strict";
(() => {
  (self.webpackChunksteamui = self.webpackChunksteamui || []).push([
    [3714],
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = "10986482";
        const _ = _.memo(function (_) {
          return (0, _.jsxs)(_._, {
            children: [
              (0, _.jsx)(_._, {}),
              (0, _.jsx)(_._, {}),
              (0, _.jsx)(_._, {}),
              (0, _.jsx)(_._, {}),
            ],
          });
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = "10986482";
        const _ = new _._("ReactQuery").Debug;
        function _() {
          const [_] = _.useState(() => ({
            focusedPopup: void 0,
            timeoutFocusTransfer: void 0,
          }));
          _.useEffect(
            () => (
              _(`focusManager isVisible: ${_._.isFocused()}`),
              _._.subscribe((_) => _(`focusManager isVisible: ${_}`))
            ),
            [],
          );
          const _ = _.useCallback(
            (_) => {
              const _ = _.window.document,
                _ = () => {
                  _.timeoutFocusTransfer &&
                    (window.clearTimeout(_.timeoutFocusTransfer),
                    (_.timeoutFocusTransfer = void 0));
                },
                _ = () => {
                  _(), (_.focusedPopup = _), _._.setFocused(!0);
                },
                _ = () => {
                  _.focusedPopup == _ &&
                    ((_.focusedPopup = void 0),
                    (_.timeoutFocusTransfer = window.setTimeout(() => {
                      console.assert(!_.focusedPopup),
                        _.focusedPopup || _._.setFocused(!1);
                    }, 50)));
                };
              return (
                _.window.addEventListener("focus", _),
                _.window.addEventListener("blur", _),
                _.hasFocus() && _(),
                () => {
                  _.window.removeEventListener("focus", _),
                    _.window.removeEventListener("blur", _),
                    _._.setFocused(!1);
                }
              );
            },
            [_],
          );
          (0, _._)(_);
        }
        var _ = "10986482";
        function _(_) {
          const _ = (0, _._)();
          return (
            _(),
            (0, _.jsx)(_.Fragment, {
              children: (0, _.jsxs)(_._, {
                bOnlyPopups: !0,
                children: [
                  (0, _.jsx)(_, {}),
                  _ &&
                    (0, _.jsx)(_._, {
                      controller: _._.NavigationManager,
                      children: (0, _.jsx)(_._, {
                        children: (0, _.jsxs)(_._, {
                          eAdultOnlyMediaBehavior: "allowed",
                          children: [
                            (0, _.jsx)(_._, {
                              _: _._,
                            }),
                            (0, _.jsx)(_, {}),
                          ],
                        }),
                      }),
                    }),
                ],
              }),
            })
          );
        }
        const _ = _.memo(function () {
          return (0, _._)()
            ? (0, _.jsx)(_._, {
                children: (0, _.jsx)(_._, {}),
              })
            : null;
        });
        var _ = __webpack_require__("chunkid"),
          _ = "10986482";
        (0, _._)({
          enforceActions: "never",
        });
        function _() {
          let _ = window;
          (_.ClearBackgroundInterval = window.clearInterval),
            (_.ClearBackgroundTimeout = window.clearTimeout),
            (_.SetBackgroundInterval = window.setInterval),
            (_.SetBackgroundTimeout = window.setTimeout);
        }
        async function _() {
          _(), await (0, _._)().Init(window._);
        }
        _();
        const _ = _;
      },
    },
  ]);
})();
