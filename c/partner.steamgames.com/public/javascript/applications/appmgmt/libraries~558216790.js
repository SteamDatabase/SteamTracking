"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [6853],
  {
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = function (_) {
          var _ = _.top,
            _ = _.right,
            _ = _.bottom,
            _ = _.left;
          return {
            top: _,
            right: _,
            bottom: _,
            left: _,
            width: _ - _,
            height: _ - _,
            _: _,
            _: _,
            center: {
              _: (_ + _) / 2,
              _: (_ + _) / 2,
            },
          };
        },
        _ = function (_, _) {
          return {
            top: _.top - _.top,
            left: _.left - _.left,
            bottom: _.bottom + _.bottom,
            right: _.right + _.right,
          };
        },
        _ = function (_, _) {
          return {
            top: _.top + _.top,
            left: _.left + _.left,
            bottom: _.bottom - _.bottom,
            right: _.right - _.right,
          };
        },
        _ = {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
        _ = function (_) {
          var _ = _.borderBox,
            _ = _.margin,
            _ = void 0 === _ ? _ : _,
            _ = _.border,
            _ = void 0 === _ ? _ : _,
            _ = _.padding,
            _ = void 0 === _ ? _ : _,
            _ = _(_(_, _)),
            _ = _(_(_, _)),
            _ = _(_(_, _));
          return {
            marginBox: _,
            borderBox: _(_),
            paddingBox: _,
            contentBox: _,
            margin: _,
            border: _,
            padding: _,
          };
        },
        _ = function (_) {
          var _ = _.slice(0, -2);
          if ("px" !== _.slice(-2)) return 0;
          var _ = Number(_);
          return isNaN(_) && (0, _._)(!1), _;
        },
        _ = function (_, _) {
          var _,
            _,
            _ = _.borderBox,
            _ = _.border,
            _ = _.margin,
            _ = _.padding,
            _ =
              ((_ = _),
              {
                top: (_ = _).top + _._,
                left: _.left + _._,
                bottom: _.bottom + _._,
                right: _.right + _._,
              });
          return _({
            borderBox: _,
            border: _,
            margin: _,
            padding: _,
          });
        },
        _ = function (_, _) {
          return (
            void 0 === _ &&
              (_ = {
                _: window.pageXOffset,
                _: window.pageYOffset,
              }),
            _(_, _)
          );
        },
        _ = function (_, _) {
          var _ = {
              top: _(_.marginTop),
              right: _(_.marginRight),
              bottom: _(_.marginBottom),
              left: _(_.marginLeft),
            },
            _ = {
              top: _(_.paddingTop),
              right: _(_.paddingRight),
              bottom: _(_.paddingBottom),
              left: _(_.paddingLeft),
            },
            _ = {
              top: _(_.borderTopWidth),
              right: _(_.borderRightWidth),
              bottom: _(_.borderBottomWidth),
              left: _(_.borderLeftWidth),
            };
          return _({
            borderBox: _,
            margin: _,
            padding: _,
            border: _,
          });
        },
        _ = function (_) {
          var _ = _.getBoundingClientRect(),
            _ = window.getComputedStyle(_);
          return _(_, _);
        };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      const _ = function (_) {
        var _ = [],
          _ = null,
          _ = function () {
            for (var _ = arguments.length, _ = new Array(_), _ = 0; _ < _; _++)
              _[_] = arguments[_];
            (_ = _),
              _ ||
                (_ = requestAnimationFrame(function () {
                  (_ = null), _.apply(void 0, _);
                }));
          };
        return (
          (_.cancel = function () {
            _ && (cancelAnimationFrame(_), (_ = null));
          }),
          _
        );
      };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid");
      function _(_) {
        return (
          "Minified Redux error #" +
          _ +
          "; visit https://redux.js.org/Errors?code=" +
          _ +
          " for the full message or use the non-minified dev environment for full errors. "
        );
      }
      var _ =
          ("function" == typeof Symbol && Symbol.observable) || "@@observable",
        _ = function () {
          return Math.random().toString(36).substring(7).split("").join(".");
        },
        _ = {
          INIT: "@@redux/INIT" + _(),
          REPLACE: "@@redux/REPLACE" + _(),
          PROBE_UNKNOWN_ACTION: function () {
            return "@@redux/PROBE_UNKNOWN_ACTION" + _();
          },
        };
      function _(_) {
        if ("object" != typeof _ || null === _) return !1;
        for (var _ = _; null !== Object.getPrototypeOf(_); )
          _ = Object.getPrototypeOf(_);
        return Object.getPrototypeOf(_) === _;
      }
      function _(_, _, _) {
        var _;
        if (
          ("function" == typeof _ && "function" == typeof _) ||
          ("function" == typeof _ && "function" == typeof arguments[3])
        )
          throw new Error(_(0));
        if (
          ("function" == typeof _ && void 0 === _ && ((_ = _), (_ = void 0)),
          void 0 !== _)
        ) {
          if ("function" != typeof _) throw new Error(_(1));
          return __webpack_require__(_)(_, _);
        }
        if ("function" != typeof _) throw new Error(_(2));
        var _ = _,
          _ = _,
          _ = [],
          _ = _,
          _ = !1;
        function _() {
          _ === _ && (_ = _.slice());
        }
        function _() {
          if (_) throw new Error(_(3));
          return _;
        }
        function _(_) {
          if ("function" != typeof _) throw new Error(_(4));
          if (_) throw new Error(_(5));
          var _ = !0;
          return (
            _(),
            _.push(_),
            function () {
              if (_) {
                if (_) throw new Error(_(6));
                (_ = !1), _();
                var _ = _.indexOf(_);
                _.splice(_, 1), (_ = null);
              }
            }
          );
        }
        function _(_) {
          if (!_(_)) throw new Error(_(7));
          if (void 0 === _.type) throw new Error(_(8));
          if (_) throw new Error(_(9));
          try {
            (_ = !0), (_ = _(_, _));
          } finally {
            _ = !1;
          }
          for (var _ = (_ = _), _ = 0; _ < _.length; _++) {
            (0, _[_])();
          }
          return _;
        }
        return (
          _({
            type: _.INIT,
          }),
          ((_ = {
            dispatch: _,
            subscribe: _,
            getState: _,
            replaceReducer: function (_) {
              if ("function" != typeof _) throw new Error(_(10));
              (_ = _),
                _({
                  type: _.REPLACE,
                });
            },
          })[_] = function () {
            var _,
              _ = _;
            return (
              ((_ = {
                subscribe: function (_) {
                  if ("object" != typeof _ || null === _)
                    throw new Error(_(11));
                  function _() {
                    _.next && _.next(_());
                  }
                  return (
                    __webpack_require__(),
                    {
                      unsubscribe: _(_),
                    }
                  );
                },
              })[_] = function () {
                return this;
              }),
              _
            );
          }),
          _
        );
      }
      function _(_, _) {
        return function () {
          return _(_.apply(this, arguments));
        };
      }
      function _(_, _) {
        if ("function" == typeof _) return _(_, _);
        if ("object" != typeof _ || null === _) throw new Error(_(16));
        var _ = {};
        for (var _ in _) {
          var _ = _[_];
          "function" == typeof _ && (_[_] = _(_, _));
        }
        return _;
      }
      function _() {
        for (var _ = arguments.length, _ = new Array(_), _ = 0; _ < _; _++)
          _[_] = arguments[_];
        return 0 === _.length
          ? function (_) {
              return _;
            }
          : 1 === _.length
            ? _[0]
            : _.reduce(function (_, _) {
                return function () {
                  return _(_.apply(void 0, arguments));
                };
              });
      }
      function _() {
        for (var _ = arguments.length, _ = new Array(_), _ = 0; _ < _; _++)
          _[_] = arguments[_];
        return function (_) {
          return function () {
            var _ = _.apply(void 0, arguments),
              _ = function () {
                throw new Error(_(15));
              },
              _ = {
                getState: _.getState,
                dispatch: function () {
                  return _.apply(void 0, arguments);
                },
              },
              _ = _.map(function (_) {
                return _(_);
              });
            return (
              (_ = _.apply(void 0, _)(_.dispatch)),
              (0, _._)(
                (0, _._)({}, _),
                {},
                {
                  dispatch: _,
                },
              )
            );
          };
        };
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid");
      function _(_, _) {
        var _ = (0, _.useState)(function () {
            return {
              inputs: _,
              result: _(),
            };
          })[0],
          _ = (0, _.useRef)(!0),
          _ = (0, _.useRef)(_),
          _ =
            _.current ||
            Boolean(
              _ &&
                _.current.inputs &&
                (function (_, _) {
                  if (_.length !== _.length) return !1;
                  for (var _ = 0; _ < _.length; _++)
                    if (_[_] !== _[_]) return !1;
                  return !0;
                })(_, _.current.inputs),
            )
              ? _.current
              : {
                  inputs: _,
                  result: _(),
                };
        return (
          (0, _.useEffect)(
            function () {
              (_.current = !1), (_.current = _);
            },
            [_],
          ),
          _.result
        );
      }
      var _ = _,
        _ = function (_, _) {
          return _(function () {
            return _;
          }, _);
        };
    },
  },
]);
