"use strict";
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
        _ = __webpack_require__("chunkid");
      const _ = _.memo(function () {
        const _ = (0, _._)(),
          _ = (0, _._)(() => _._.IsSteamVRRunning);
        return (
          _.useEffect(() => {
            _ &&
              SteamClient?.OpenVR?.PathProperties?.SetBoolPathProperty(
                "/steam/oobe",
                _,
              );
          }, [_, _]),
          null
        );
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = _.memo(function (_) {
        return _.createElement(
          _._,
          null,
          _.createElement(_._, null),
          _.createElement(_._, null),
          _.createElement(_, null),
        );
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = new (__webpack_require__("chunkid")._)("ReactQuery").Debug;
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
                  (_.timeoutFocusTransfer = void 0)),
                  (_.focusedPopup = _),
                  _._.setFocused(!0);
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
              __webpack_require__.hasFocus() && _(),
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
      const _ = _.memo(function () {
        return (0, _._)()
          ? _.createElement(_._, null, _.createElement(_._, null))
          : null;
      });
      (0, __webpack_require__("chunkid")._)({
        enforceActions: "never",
      }),
        (async function () {
          !(function () {
            let _ = window;
            (_.ClearBackgroundInterval = window.clearInterval),
              (_.ClearBackgroundTimeout = window.clearTimeout),
              (_.SetBackgroundInterval = window.setInterval),
              (_.SetBackgroundTimeout = window.setTimeout);
          })();
          let _ = (0, _._)();
          await _.Init(window._);
        })();
      const _ = function (_) {
        const _ = (0, _._)();
        return (
          _(),
          _.createElement(
            _.Fragment,
            null,
            _.createElement(
              _._,
              {
                bOnlyPopups: !0,
              },
              _.createElement(_, null),
              _ &&
                _.createElement(
                  _._,
                  {
                    controller: _._.NavigationManager,
                  },
                  _.createElement(
                    _._,
                    null,
                    _.createElement(
                      _._,
                      {
                        eAdultOnlyMediaBehavior: "allowed",
                      },
                      _.createElement(_._, {
                        _: _._,
                      }),
                      _.createElement(_, null),
                    ),
                  ),
                ),
            ),
          )
        );
      };
    },
  },
]);
