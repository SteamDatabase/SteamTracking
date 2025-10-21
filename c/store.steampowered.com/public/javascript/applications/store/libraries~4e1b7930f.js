"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [9099],
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
        _: () => _,
      });
      var _ = __webpack_require__("chunkid");
      function _(_, _) {
        var _ = Object.keys(_);
        if (Object.getOwnPropertySymbols) {
          var _ = Object.getOwnPropertySymbols(_);
          _ &&
            (_ = _.filter(function (_) {
              return Object.getOwnPropertyDescriptor(_, _).enumerable;
            })),
            _.push.apply(_, _);
        }
        return _;
      }
      function _(_) {
        for (var _ = 1; _ < arguments.length; _++) {
          var _ = null != arguments[_] ? arguments[_] : {};
          _ % 2
            ? _(Object(_), !0).forEach(function (_) {
                _(_, _, _[_]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(_))
              : _(Object(_)).forEach(function (_) {
                  Object.defineProperty(
                    _,
                    _,
                    Object.getOwnPropertyDescriptor(_, _),
                  );
                });
        }
        return _;
      }
      function _(_, _) {
        if (!(_ instanceof _))
          throw new TypeError("Cannot call a class as a function");
      }
      function _(_, _) {
        for (var _ = 0; _ < _.length; _++) {
          var _ = _[_];
          (_.enumerable = _.enumerable || !1),
            (_.configurable = !0),
            "value" in _ && (_.writable = !0),
            Object.defineProperty(_, _.key, _);
        }
      }
      function _(_, _, _) {
        return (
          _ && _(_.prototype, _),
          _ && _(_, _),
          Object.defineProperty(_, "prototype", {
            writable: !1,
          }),
          _
        );
      }
      function _(_, _, _) {
        return (
          _ in _
            ? Object.defineProperty(_, _, {
                value: _,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (_[_] = _),
          _
        );
      }
      function _() {
        return (_ = Object.assign
          ? Object.assign.bind()
          : function (_) {
              for (var _ = 1; _ < arguments.length; _++) {
                var _ = arguments[_];
                for (var _ in _)
                  Object.prototype.hasOwnProperty.call(_, _) && (_[_] = _[_]);
              }
              return _;
            }).apply(this, arguments);
      }
      function _(_, _) {
        if ("function" != typeof _ && null !== _)
          throw new TypeError(
            "Super expression must either be null or a function",
          );
        (_.prototype = Object.create(_ && _.prototype, {
          constructor: {
            value: _,
            writable: !0,
            configurable: !0,
          },
        })),
          Object.defineProperty(_, "prototype", {
            writable: !1,
          }),
          _ && _(_, _);
      }
      function _(_) {
        return (_ = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (_) {
              return _.__proto__ || Object.getPrototypeOf(_);
            })(_);
      }
      function _(_, _) {
        return (_ = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (_, _) {
              return (_.__proto__ = _), _;
            })(_, _);
      }
      function _(_, _) {
        if (null == _) return {};
        var _,
          _,
          _ = (function (_, _) {
            if (null == _) return {};
            var _,
              _,
              _ = {},
              _ = Object.keys(_);
            for (_ = 0; _ < _.length; _++)
              (_ = _[_]), _.indexOf(_) >= 0 || (_[_] = _[_]);
            return _;
          })(_, _);
        if (Object.getOwnPropertySymbols) {
          var _ = Object.getOwnPropertySymbols(_);
          for (_ = 0; _ < _.length; _++)
            (_ = _[_]),
              _.indexOf(_) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(_, _) &&
                  (_[_] = _[_]));
        }
        return _;
      }
      function _(_) {
        if (void 0 === _)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return _;
      }
      function _(_) {
        var _ = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {}),
              ),
              !0
            );
          } catch (_) {
            return !1;
          }
        })();
        return function () {
          var _,
            _ = _(_);
          if (_) {
            var _ = _(this).constructor;
            _ = Reflect.construct(_, arguments, _);
          } else _ = _.apply(this, arguments);
          return (function (_, _) {
            if (_ && ("object" == typeof _ || "function" == typeof _)) return _;
            if (void 0 !== _)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return _(_);
          })(this, _);
        };
      }
      function _(_) {
        return (
          (function (_) {
            if (Array.isArray(_)) return _(_);
          })(_) ||
          (function (_) {
            if (
              ("undefined" != typeof Symbol && null != _[Symbol.iterator]) ||
              null != _["@@iterator"]
            )
              return Array.from(_);
          })(_) ||
          (function (_, _) {
            if (_) {
              if ("string" == typeof _) return _(_, _);
              var _ = Object.prototype.toString.call(_).slice(8, -1);
              return (
                "Object" === _ && _.constructor && (_ = _.constructor.name),
                "Map" === _ || "Set" === _
                  ? Array.from(_)
                  : "Arguments" === _ ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_)
                    ? _(_, _)
                    : void 0
              );
            }
          })(_) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function _(_, _) {
        (null == _ || _ > _.length) && (_ = _.length);
        for (var _ = 0, _ = new Array(_); _ < _; _++) _[_] = _[_];
        return _;
      }
      function _(_, _) {
        return (
          _(
            (_ = {
              exports: {},
            }),
            _.exports,
          ),
          _.exports
        );
      }
      function _() {}
      function _() {}
      function _(_) {
        return _.map(function (_) {
          return !1 === _ ? null : _;
        })
          .join(" ")
          .replace(/\s+/g, " ")
          .trim();
      }
      function _(_, _) {
        return ((100 / _) * _) / _;
      }
      function _(_, _) {
        return (100 * _) / _;
      }
      function _(_) {
        return "".concat(_, "%");
      }
      function _(_, _, _) {
        if (_ === _) return !0;
        var _ = _[_(_)],
          _ = _[_(_)];
        return !(!_ || _ !== _) && _(_, _, _);
      }
      function _(_) {
        return function (_, _, _) {
          if (!_) return _(_, _, []);
          for (var _, _ = _.length; (_ = _[--_]); )
            if (_[0] === _ && _[1] === _) return !0;
          return _(_, _, _);
        };
      }
      function _(_) {
        var _ = [];
        for (var _ in _) "constructor" !== _ && _.push(_);
        return _;
      }
      function _(_) {
        var _ = Object.prototype.toString.call(_);
        return (
          "[object RegExp]" === _ ||
          "[object Date]" === _ ||
          (function (_) {
            return _.$$typeof === _;
          })(_)
        );
      }
      function _(_, _) {
        return !1 !== _.clone && _.isMergeableObject(_)
          ? _(
              (function (_) {
                return Array.isArray(_) ? [] : {};
              })(_),
              _,
              _,
            )
          : _;
      }
      function _(_, _, _) {
        return _.concat(_).map(function (_) {
          return _(_, _);
        });
      }
      function _(_, _, _) {
        ((_ = _ || {}).arrayMerge = _.arrayMerge || _),
          (_.isMergeableObject = _.isMergeableObject || _);
        var _ = Array.isArray(_);
        return _ === Array.isArray(_)
          ? _
            ? __webpack_require__.arrayMerge(_, _, _)
            : (function (_, _, _) {
                var _ = {};
                return (
                  __webpack_require__.isMergeableObject(_) &&
                    Object.keys(_).forEach(function (_) {
                      _[_] = _(_[_], _);
                    }),
                  Object.keys(_).forEach(function (_) {
                    __webpack_require__.isMergeableObject(_[_]) && _[_]
                      ? (_[_] = _(_[_], _[_], _))
                      : (_[_] = _(_[_], _));
                  }),
                  _
                );
              })(_, _, _)
          : _(_, _);
      }
      function _(_) {
        var _ =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : function () {
                  return {};
                },
          _ = (function (_) {
            function _(_, _) {
              var _;
              return (
                _(this, _),
                ((_ = _.call(this, _, _)).state = _(_({}, _.state))),
                (_.updateStateProps = _.updateStateProps.bind(_(_))),
                _
              );
            }
            _(_, _);
            var _ = _(_);
            return (
              _(_, [
                {
                  key: "componentDidMount",
                  value: function () {
                    this.context.subscribe(this.updateStateProps);
                  },
                },
                {
                  key: "shouldComponentUpdate",
                  value: function (_, _) {
                    return !_(_, this.state) || !_(_, this.props);
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    this.context.unsubscribe(this.updateStateProps);
                  },
                },
                {
                  key: "updateStateProps",
                  value: function () {
                    this.setState(_(_({}, this.context.state)));
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var _ = this,
                      _ = _(this.state, this.props);
                    return _.createElement(
                      _,
                      _(
                        {
                          ref: function (_) {
                            _.instance = _;
                          },
                        },
                        _,
                        {
                          carouselStore: {
                            getStoreState: this.context.getStoreState,
                            masterSpinnerError: this.context.masterSpinnerError,
                            masterSpinnerSuccess:
                              this.context.masterSpinnerSuccess,
                            setStoreState: this.context.setStoreState,
                            subscribeMasterSpinner:
                              this.context.subscribeMasterSpinner,
                            unsubscribeAllMasterSpinner:
                              this.context.unsubscribeAllMasterSpinner,
                            unsubscribeMasterSpinner:
                              this.context.unsubscribeMasterSpinner,
                          },
                        },
                      ),
                      this.props.children,
                    );
                  },
                },
              ]),
              _
            );
          })(_.Component);
        return (
          _(_, "contextType", _),
          _(_, "propTypes", {
            children: _.children,
          }),
          _(_, "defaultProps", {
            children: null,
          }),
          _
        );
      }
      _.resetWarningCache = _;
      var _ = _(function (_) {
          _.exports = (function () {
            function _(_, _, _, _, _, _) {
              if ("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED" !== _) {
                var _ = new Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
                );
                throw ((_.name = "Invariant Violation"), _);
              }
            }
            function _() {
              return _;
            }
            _.isRequired = _;
            var _ = {
              array: _,
              bigint: _,
              bool: _,
              func: _,
              number: _,
              object: _,
              string: _,
              symbol: _,
              any: _,
              arrayOf: _,
              element: _,
              elementType: _,
              instanceOf: _,
              node: _,
              objectOf: _,
              oneOf: _,
              oneOfType: _,
              shape: _,
              exact: _,
              checkPropTypes: _,
              resetWarningCache: _,
            };
            return (_.PropTypes = _), _;
          })();
        }),
        _ = "loading",
        _ = "success",
        _ = "error",
        _ = {
          children: _.oneOfType([_.arrayOf(_.node), _.node]),
          direction: _.oneOf(["forward", "backward"]),
          height: function (_, _) {
            var _ = _[_];
            return "vertical" !== _.orientation ||
              (null !== _ && "number" == typeof _)
              ? null
              : new Error(
                  "Missing required property '".concat(
                    _,
                    "' when orientation is vertical.  You must supply a number representing the height in pixels",
                  ),
                );
          },
          orientation: _.oneOf(["horizontal", "vertical"]),
          isBgImage: function (_, _) {
            return !0 === _[_] && "img" === _.tag
              ? new Error(
                  "HTML img elements should not have a backgroundImage.  Please use ".concat(
                    _,
                    " for other block-level HTML tags, like div, a, section, etc...",
                  ),
                )
              : null;
          },
        },
        _ = function (_) {
          var _ = _.min,
            _ = _.max,
            _ = _._;
          return Math.min(_, Math.max(_, _));
        },
        _ = "buttonBack___1mlaL",
        _ = [
          "carouselStore",
          "className",
          "currentSlide",
          "disabled",
          "onClick",
          "step",
          "totalSlides",
          "visibleSlides",
          "infinite",
        ],
        _ = (function (_) {
          function _(_) {
            var _;
            return (
              _(this, _),
              ((_ = __webpack_require__.call(this, _)).handleOnClick =
                _.handleOnClick.bind(_(_))),
              _
            );
          }
          _(_, _);
          var _ = _(_);
          return (
            _(
              _,
              [
                {
                  key: "handleOnClick",
                  value: function (_) {
                    var _ = this.props,
                      _ = _.carouselStore,
                      _ = _.currentSlide,
                      _ = _.onClick,
                      _ = _.step,
                      _ = _.infinite,
                      _ = _.visibleSlides,
                      _ = _.totalSlides - _,
                      _ = Math.max(_ - _, 0);
                    _ && (_ = 0 === _ ? _ : _),
                      __webpack_require__.setStoreState(
                        {
                          currentSlide: _,
                          isPlaying: !1,
                        },
                        null !== _ && _.call(this, _),
                      );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var _ = this.props,
                      _ = (_.carouselStore, _.className),
                      _ =
                        (_.currentSlide,
                        _.disabled,
                        _.onClick,
                        _.step,
                        _.totalSlides,
                        _.visibleSlides,
                        _.infinite),
                      _ = _(_, _),
                      _ = _([_, "carousel__back-button", _]),
                      _ = _.setDisabled(
                        this.props.disabled,
                        this.props.currentSlide,
                        _,
                      );
                    return _.createElement(
                      "button",
                      _(
                        {
                          type: "button",
                          "aria-label": "previous",
                          className: _,
                          onClick: this.handleOnClick,
                          disabled: _,
                        },
                        _,
                      ),
                      this.props.children,
                    );
                  },
                },
              ],
              [
                {
                  key: "setDisabled",
                  value: function (_, _, _) {
                    return null !== _ ? _ : 0 === _ && !_;
                  },
                },
              ],
            ),
            _
          );
        })(_.Component);
      _(_, "propTypes", {
        carouselStore: _.object.isRequired,
        children: _.children.isRequired,
        className: _.string,
        currentSlide: _.number.isRequired,
        disabled: _.bool,
        onClick: _.func,
        step: _.number.isRequired,
        totalSlides: _.number.isRequired,
        visibleSlides: _.number.isRequired,
        infinite: _.bool,
      }),
        _(_, "defaultProps", {
          className: null,
          disabled: null,
          onClick: null,
          infinite: !1,
        });
      var _ = _(function (_, _) {
          var _ = {}.toString,
            _ = "undefined" != typeof window ? window.Node : Function;
          _.exports = _ = function (_) {
            var _ = typeof _;
            if ("object" != _) return _;
            if ("object" == (_ = _[__webpack_require__.call(_)]))
              return _ instanceof Map
                ? "map"
                : _ instanceof Set
                  ? "set"
                  : "object";
            if (_) return _;
            if (_ instanceof _)
              switch (_.nodeType) {
                case 1:
                  return "element";
                case 3:
                  return "text-node";
                case 9:
                  return "document";
                case 11:
                  return "document-fragment";
                default:
                  return "dom-node";
              }
          };
          var _ = (_.types = {
            "[object Function]": "function",
            "[object Date]": "date",
            "[object RegExp]": "regexp",
            "[object Arguments]": "arguments",
            "[object Array]": "array",
            "[object Set]": "set",
            "[object String]": "string",
            "[object Null]": "null",
            "[object Undefined]": "undefined",
            "[object Number]": "number",
            "[object Boolean]": "boolean",
            "[object Object]": "object",
            "[object Map]": "map",
            "[object Text]": "text-node",
            "[object Uint8Array]": "bit-array",
            "[object Uint16Array]": "bit-array",
            "[object Uint32Array]": "bit-array",
            "[object Uint8ClampedArray]": "bit-array",
            "[object Error]": "error",
            "[object FormData]": "form-data",
            "[object File]": "file",
            "[object Blob]": "blob",
          });
        }),
        _ =
          (_.types,
          {
            number: function (_, _) {
              return _ != _ && _ != _;
            },
            function: function (_, _, _) {
              return (
                _.toString() === _.toString() &&
                _.object(_, _, _) &&
                _(_.prototype, _.prototype)
              );
            },
            date: function (_, _) {
              return +_ == +_;
            },
            regexp: function (_, _) {
              return _.toString() === _.toString();
            },
            element: function (_, _) {
              return _.outerHTML === _.outerHTML;
            },
            textnode: function (_, _) {
              return _.textContent === _.textContent;
            },
          });
      (_.arguments =
        _["bit-array"] =
        _.array =
          _(function (_, _, _) {
            var _ = _.length;
            if (_ !== _.length) return !1;
            for (__webpack_require__.push([_, _]); _--; )
              if (!_(_[_], _[_], _)) return !1;
            return !0;
          })),
        (_.object = _(function (_, _, _) {
          if ("function" == typeof _.equal)
            return __webpack_require__.push([_, _]), _.equal(_, _);
          var _ = _(_),
            _ = _(_),
            _ = _.length;
          if (_ !== _.length) return !1;
          for (_.sort(), _.sort(); _--; ) if (_[_] !== _[_]) return !1;
          for (__webpack_require__.push([_, _]), _ = _.length; _--; ) {
            var _ = _[_];
            if (!_(_[_], _[_], _)) return !1;
          }
          return !0;
        }));
      var _ = _,
        _ = function (_) {
          return (
            (function (_) {
              return !!_ && "object" == typeof _;
            })(_) && !_(_)
          );
        },
        _ =
          "function" == typeof Symbol && Symbol.for
            ? Symbol.for("react.element")
            : 60103;
      _.all = function (_, _) {
        if (!Array.isArray(_))
          throw new Error("first argument should be an array");
        return _.reduce(function (_, _) {
          return _(_, _, _);
        }, {});
      };
      var _,
        _ = _,
        _ = _.createContext(),
        _ = function _(_) {
          return (
            Object.freeze(_),
            Object.getOwnPropertyNames(_).forEach(function (_) {
              !_.hasOwnProperty(_) ||
                null === _[_] ||
                ("object" != typeof _[_] && "function" != typeof _[_]) ||
                Object.isFrozen(_[_]) ||
                _(_[_]);
            }),
            _
          );
        },
        _ = {
          masterSpinnerFinished: !1,
        },
        _ = (function () {
          function _(_) {
            _(this, _),
              (this.state = _(_(_, _))),
              (this.subscriptions = []),
              (this.masterSpinnerSubscriptions = {}),
              (this.setStoreState = this.setStoreState.bind(this)),
              (this.getStoreState = this.getStoreState.bind(this)),
              (this.subscribe = this.subscribe.bind(this)),
              (this.unsubscribe = this.unsubscribe.bind(this)),
              (this.updateSubscribers = this.updateSubscribers.bind(this)),
              (this.subscribeMasterSpinner =
                this.subscribeMasterSpinner.bind(this)),
              (this.unsubscribeMasterSpinner =
                this.unsubscribeMasterSpinner.bind(this)),
              (this.unsubscribeAllMasterSpinner =
                this.unsubscribeAllMasterSpinner.bind(this)),
              (this.masterSpinnerSuccess =
                this.masterSpinnerSuccess.bind(this)),
              (this.masterSpinnerError = this.masterSpinnerError.bind(this));
          }
          return (
            _(_, [
              {
                key: "setStoreState",
                value: function (_, _) {
                  (this.state = _(_(this.state, _))), this.updateSubscribers(_);
                },
              },
              {
                key: "getStoreState",
                value: function () {
                  return _({}, this.state);
                },
              },
              {
                key: "subscribe",
                value: function (_) {
                  this.subscriptions.push(_);
                },
              },
              {
                key: "unsubscribe",
                value: function (_) {
                  var _ = this.subscriptions.indexOf(_);
                  -1 !== _ && this.subscriptions.splice(_, 1);
                },
              },
              {
                key: "updateSubscribers",
                value: function (_) {
                  this.subscriptions.forEach(function (_) {
                    return _();
                  }),
                    "function" == typeof _ && _(this.getStoreState());
                },
              },
              {
                key: "subscribeMasterSpinner",
                value: function (_) {
                  -1 ===
                    Object.keys(this.masterSpinnerSubscriptions).indexOf(_) &&
                    (this.masterSpinnerSubscriptions[_] = {
                      success: !1,
                      error: !1,
                      complete: !1,
                    });
                },
              },
              {
                key: "unsubscribeMasterSpinner",
                value: function (_) {
                  return (
                    -1 !==
                      Object.keys(this.masterSpinnerSubscriptions).indexOf(_) &&
                    (this.setMasterSpinnerFinished(),
                    delete this.masterSpinnerSubscriptions[_])
                  );
                },
              },
              {
                key: "unsubscribeAllMasterSpinner",
                value: function () {
                  (this.masterSpinnerSubscriptions = {}),
                    this.setMasterSpinnerFinished();
                },
              },
              {
                key: "masterSpinnerSuccess",
                value: function (_) {
                  (this.masterSpinnerSubscriptions[_].success = !0),
                    (this.masterSpinnerSubscriptions[_].complete = !0),
                    this.setMasterSpinnerFinished();
                },
              },
              {
                key: "masterSpinnerError",
                value: function (_) {
                  (this.masterSpinnerSubscriptions[_].error = !0),
                    (this.masterSpinnerSubscriptions[_].complete = !0),
                    this.setMasterSpinnerFinished();
                },
              },
              {
                key: "setMasterSpinnerFinished",
                value: function () {
                  this.setStoreState({
                    masterSpinnerFinished: this.isMasterSpinnerFinished(),
                  });
                },
              },
              {
                key: "isMasterSpinnerFinished",
                value: function () {
                  var _ = this;
                  return (
                    0 ===
                    Object.keys(this.masterSpinnerSubscriptions).filter(
                      function (_) {
                        return !0 !== _.masterSpinnerSubscriptions[_].complete;
                      },
                    ).length
                  );
                },
              },
            ]),
            _
          );
        })(),
        _ = [
          "children",
          "className",
          "currentSlide",
          "disableAnimation",
          "disableKeyboard",
          "hasMasterSpinner",
          "interval",
          "isPageScrollLocked",
          "isPlaying",
          "lockOnWindowScroll",
          "naturalSlideHeight",
          "naturalSlideWidth",
          "orientation",
          "playDirection",
          "step",
          "dragStep",
          "tag",
          "totalSlides",
          "touchEnabled",
          "dragEnabled",
          "visibleSlides",
          "infinite",
          "isIntrinsicHeight",
        ],
        _ =
          (_(
            (_ = (function (_) {
              function _(_) {
                var _;
                if (
                  (_(this, _),
                  (_ = __webpack_require__.call(this, _)),
                  _.isIntrinsicHeight && "horizontal" !== _.orientation)
                )
                  throw Error(
                    'isIntrinsicHeight can only be used in "horizontal" orientation. See Readme for more information.',
                  );
                var _ = {
                  currentSlide: _.currentSlide,
                  disableAnimation: _.disableAnimation,
                  disableKeyboard: _.disableKeyboard,
                  hasMasterSpinner: _.hasMasterSpinner,
                  imageErrorCount: 0,
                  imageSuccessCount: 0,
                  interval: _.interval,
                  isPageScrollLocked: _.isPageScrollLocked,
                  isPlaying: _.isPlaying,
                  lockOnWindowScroll: _.lockOnWindowScroll,
                  masterSpinnerThreshold: 0,
                  naturalSlideHeight: _.naturalSlideHeight,
                  naturalSlideWidth: _.naturalSlideWidth,
                  orientation: _.orientation,
                  playDirection: _.playDirection,
                  privateUnDisableAnimation: !1,
                  slideSize: _(_.totalSlides, _.visibleSlides),
                  slideTraySize: _(_.totalSlides, _.visibleSlides),
                  step: _.step,
                  dragStep: _.dragStep,
                  totalSlides: _.totalSlides,
                  touchEnabled: _.touchEnabled,
                  dragEnabled: _.dragEnabled,
                  visibleSlides: _.visibleSlides,
                  infinite: _.infinite,
                  isIntrinsicHeight: _.isIntrinsicHeight,
                };
                return (_.carouselStore = new _(_)), _;
              }
              _(_, _);
              var _ = _(_);
              return (
                _(_, [
                  {
                    key: "componentDidUpdate",
                    value: function (_) {
                      var _ = this,
                        _ = {};
                      [
                        "currentSlide",
                        "disableAnimation",
                        "disableKeyboard",
                        "hasMasterSpinner",
                        "interval",
                        "isPlaying",
                        "naturalSlideHeight",
                        "naturalSlideWidth",
                        "lockOnWindowScroll",
                        "orientation",
                        "playDirection",
                        "step",
                        "dragStep",
                        "totalSlides",
                        "touchEnabled",
                        "dragEnabled",
                        "visibleSlides",
                      ].forEach(function (_) {
                        _[_] !== _.props[_] && (_[_] = _.props[_]);
                      }),
                        this.props.currentSlide !== _.currentSlide &&
                          !this.props.disableAnimation &&
                          ((_.disableAnimation = !0),
                          (_.privateUnDisableAnimation = !0)),
                        (this.props.totalSlides === _.totalSlides &&
                          this.props.visibleSlides === _.visibleSlides) ||
                          ((_.slideSize = _(
                            this.props.totalSlides,
                            this.props.visibleSlides,
                          )),
                          (_.slideTraySize = _(
                            this.props.totalSlides,
                            this.props.visibleSlides,
                          ))),
                        this.carouselStore.state.currentSlide >=
                          this.props.totalSlides &&
                          (_.currentSlide = Math.max(
                            this.props.totalSlides - 1,
                            0,
                          )),
                        Object.keys(_).length > 0 &&
                          this.carouselStore.setStoreState(_);
                    },
                  },
                  {
                    key: "componentWillUnmount",
                    value: function () {
                      this.carouselStore.unsubscribeAllMasterSpinner();
                    },
                  },
                  {
                    key: "getStore",
                    value: function () {
                      return this.carouselStore;
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var _ = this.props,
                        _ =
                          (_.children,
                          _.className,
                          _.currentSlide,
                          _.disableAnimation,
                          _.disableKeyboard,
                          _.hasMasterSpinner,
                          _.interval,
                          _.isPageScrollLocked,
                          _.isPlaying,
                          _.lockOnWindowScroll,
                          _.naturalSlideHeight,
                          _.naturalSlideWidth,
                          _.orientation,
                          _.playDirection,
                          _.step,
                          _.dragStep,
                          _.tag),
                        _ =
                          (_.totalSlides,
                          _.touchEnabled,
                          _.dragEnabled,
                          _.visibleSlides,
                          _.infinite,
                          _.isIntrinsicHeight,
                          _(_, _)),
                        _ = _(["carousel", this.props.className]);
                      return _.createElement(
                        _,
                        _(
                          {
                            className: _,
                          },
                          _,
                        ),
                        _.createElement(
                          _.Provider,
                          {
                            value: this.carouselStore,
                          },
                          this.props.children,
                        ),
                      );
                    },
                  },
                ]),
                _
              );
            })(_.Component)),
            "propTypes",
            {
              children: _.children.isRequired,
              className: _.string,
              currentSlide: _.number,
              disableAnimation: _.bool,
              disableKeyboard: _.bool,
              hasMasterSpinner: _.bool,
              interval: _.number,
              isPageScrollLocked: _.bool,
              isPlaying: _.bool,
              lockOnWindowScroll: _.bool,
              naturalSlideHeight: _.number.isRequired,
              naturalSlideWidth: _.number.isRequired,
              orientation: _.orientation,
              playDirection: _.direction,
              step: _.number,
              dragStep: _.number,
              tag: _.string,
              totalSlides: _.number.isRequired,
              touchEnabled: _.bool,
              dragEnabled: _.bool,
              visibleSlides: _.number,
              infinite: _.bool,
              isIntrinsicHeight: _.bool,
            },
          ),
          _(_, "defaultProps", {
            className: null,
            currentSlide: 0,
            disableAnimation: !1,
            disableKeyboard: !1,
            hasMasterSpinner: !1,
            interval: 5e3,
            isPageScrollLocked: !1,
            isPlaying: !1,
            lockOnWindowScroll: !1,
            orientation: "horizontal",
            playDirection: "forward",
            step: 1,
            dragStep: 1,
            tag: "div",
            touchEnabled: !0,
            dragEnabled: !0,
            visibleSlides: 1,
            infinite: !1,
            isIntrinsicHeight: !1,
          }),
          _);
      _.Consumer;
      var _,
        _,
        _,
        _,
        _,
        _,
        _ = _(_, function (_) {
          return {
            currentSlide: _.currentSlide,
            step: _.step,
            totalSlides: _.totalSlides,
            visibleSlides: _.visibleSlides,
            infinite: _.infinite,
          };
        }),
        _ = "buttonFirst___2rhFr",
        _ = [
          "carouselStore",
          "className",
          "currentSlide",
          "disabled",
          "onClick",
          "totalSlides",
        ],
        _ =
          ((_ = (function (_) {
            function _() {
              var _;
              return (
                _(this, _),
                ((_ = __webpack_require__.call(this)).handleOnClick =
                  _.handleOnClick.bind(_(_))),
                _
              );
            }
            _(_, _);
            var _ = _(_);
            return (
              _(_, [
                {
                  key: "handleOnClick",
                  value: function (_) {
                    var _ = this.props,
                      _ = _.carouselStore,
                      _ = _.onClick;
                    __webpack_require__.setStoreState(
                      {
                        currentSlide: 0,
                        isPlaying: !1,
                      },
                      null !== _ && _.call(this, _),
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var _ = this.props,
                      _ = (_.carouselStore, _.className),
                      _ = _.currentSlide,
                      _ = _.disabled,
                      _ = (_.onClick, _.totalSlides, _(_, _)),
                      _ = _([_, "carousel__first-button", _]),
                      _ = null !== _ ? _ : 0 === _;
                    return _.createElement(
                      "button",
                      _(
                        {
                          type: "button",
                          "aria-label": "first",
                          className: _,
                          onClick: this.handleOnClick,
                          disabled: _,
                        },
                        _,
                      ),
                      this.props.children,
                    );
                  },
                },
              ]),
              _
            );
          })(_.Component)),
          _(_, "propTypes", {
            carouselStore: _.object.isRequired,
            children: _.children.isRequired,
            className: _.string,
            currentSlide: _.number.isRequired,
            disabled: _.bool,
            onClick: _.func,
            totalSlides: _.number.isRequired,
          }),
          _(_, "defaultProps", {
            className: null,
            disabled: null,
            onClick: null,
          }),
          _),
        _ =
          (_(_, function (_) {
            return {
              currentSlide: _.currentSlide,
              totalSlides: _.totalSlides,
            };
          }),
          "buttonLast___2yuh0"),
        _ = [
          "carouselStore",
          "className",
          "currentSlide",
          "disabled",
          "onClick",
          "totalSlides",
          "visibleSlides",
        ],
        _ =
          ((_ = (function (_) {
            function _() {
              var _;
              return (
                _(this, _),
                ((_ = __webpack_require__.call(this)).handleOnClick =
                  _.handleOnClick.bind(_(_))),
                _
              );
            }
            _(_, _);
            var _ = _(_);
            return (
              _(_, [
                {
                  key: "handleOnClick",
                  value: function (_) {
                    var _ = this.props,
                      _ = _.carouselStore,
                      _ = _.onClick,
                      _ = _.totalSlides,
                      _ = _.visibleSlides;
                    __webpack_require__.setStoreState(
                      {
                        currentSlide: _ - _,
                        isPlaying: !1,
                      },
                      null !== _ && _.call(this, _),
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var _ = this.props,
                      _ = (_.carouselStore, _.className),
                      _ = _.currentSlide,
                      _ = _.disabled,
                      _ = (_.onClick, _.totalSlides),
                      _ = _.visibleSlides,
                      _ = _(_, _),
                      _ = _([_, "carousel__last-button", _]),
                      _ = null !== _ ? _ : _ >= _ - _;
                    return _.createElement(
                      "button",
                      _(
                        {
                          type: "button",
                          "aria-label": "last",
                          className: _,
                          onClick: this.handleOnClick,
                          disabled: _,
                        },
                        _,
                      ),
                      this.props.children,
                    );
                  },
                },
              ]),
              _
            );
          })(_.Component)),
          _(_, "propTypes", {
            carouselStore: _.object.isRequired,
            children: _.children.isRequired,
            className: _.string,
            currentSlide: _.number.isRequired,
            disabled: _.bool,
            onClick: _.func,
            totalSlides: _.number.isRequired,
            visibleSlides: _.number.isRequired,
          }),
          _(_, "defaultProps", {
            className: null,
            disabled: null,
            onClick: null,
          }),
          _),
        _ =
          (_(_, function (_) {
            return {
              currentSlide: _.currentSlide,
              totalSlides: _.totalSlides,
              visibleSlides: _.visibleSlides,
            };
          }),
          "buttonNext___2mOCa"),
        _ = [
          "carouselStore",
          "className",
          "currentSlide",
          "disabled",
          "onClick",
          "step",
          "totalSlides",
          "visibleSlides",
          "infinite",
        ],
        _ =
          ((_ = (function (_) {
            function _(_) {
              var _;
              return (
                _(this, _),
                ((_ = __webpack_require__.call(this, _)).handleOnClick =
                  _.handleOnClick.bind(_(_))),
                _
              );
            }
            _(_, _);
            var _ = _(_);
            return (
              _(
                _,
                [
                  {
                    key: "handleOnClick",
                    value: function (_) {
                      var _ = this.props,
                        _ = _.currentSlide,
                        _ = _.onClick,
                        _ = _.step,
                        _ = _.carouselStore,
                        _ = _.infinite,
                        _ = _.totalSlides - _.visibleSlides,
                        _ = _ + _,
                        _ = Math.min(_, _);
                      _ && (_ = _ === _ ? 0 : _),
                        _.setStoreState(
                          {
                            currentSlide: _,
                            isPlaying: !1,
                          },
                          null !== _ && _.call(this, _),
                        );
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var _ = this.props,
                        _ = (_.carouselStore, _.className),
                        _ = _.currentSlide,
                        _ = _.disabled,
                        _ = (_.onClick, _.step, _.totalSlides),
                        _ = _.visibleSlides,
                        _ = _.infinite,
                        _ = _(_, _),
                        _ = _([_, "carousel__next-button", _]),
                        _ = _.setDisabled(_, _, _, _, _);
                      return _.createElement(
                        "button",
                        _(
                          {
                            type: "button",
                            "aria-label": "next",
                            className: _,
                            onClick: this.handleOnClick,
                            disabled: _,
                          },
                          _,
                        ),
                        this.props.children,
                      );
                    },
                  },
                ],
                [
                  {
                    key: "setDisabled",
                    value: function (_, _, _, _, _) {
                      return null !== _ ? _ : _ >= _ - _ && !_;
                    },
                  },
                ],
              ),
              _
            );
          })(_.PureComponent)),
          _(_, "propTypes", {
            carouselStore: _.object.isRequired,
            children: _.children.isRequired,
            className: _.string,
            currentSlide: _.number.isRequired,
            disabled: _.bool,
            onClick: _.func,
            step: _.number.isRequired,
            totalSlides: _.number.isRequired,
            visibleSlides: _.number.isRequired,
            infinite: _.bool,
          }),
          _(_, "defaultProps", {
            className: null,
            disabled: null,
            onClick: null,
            infinite: !1,
          }),
          _),
        _ = _(_, function (_) {
          return {
            currentSlide: _.currentSlide,
            step: _.step,
            totalSlides: _.totalSlides,
            visibleSlides: _.visibleSlides,
            infinite: _.infinite,
          };
        }),
        _ = "buttonNext___3Lm3s",
        _ = [
          "carouselStore",
          "children",
          "childrenPaused",
          "childrenPlaying",
          "className",
          "isPlaying",
          "onClick",
        ],
        _ =
          ((_ = (function (_) {
            function _(_) {
              var _;
              return (
                _(this, _),
                ((_ = __webpack_require__.call(this, _)).handleOnClick =
                  _.handleOnClick.bind(_(_))),
                _
              );
            }
            _(_, _);
            var _ = _(_);
            return (
              _(_, [
                {
                  key: "handleOnClick",
                  value: function (_) {
                    var _ = this.props.onClick;
                    this.props.carouselStore.setStoreState(
                      {
                        isPlaying: !this.props.isPlaying,
                      },
                      null !== _ && _.call(this, _),
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var _ = this.props,
                      _ = (_.carouselStore, _.children, _.childrenPaused),
                      _ = _.childrenPlaying,
                      _ = _.className,
                      _ = _.isPlaying,
                      _ = (_.onClick, _(_, _)),
                      _ = _([_, "carousel__play-button", _]);
                    return _.createElement(
                      "button",
                      _(
                        {
                          type: "button",
                          "aria-label": "play",
                          className: _,
                          onClick: this.handleOnClick,
                        },
                        _,
                      ),
                      _ && _,
                      !_ && _,
                      this.props.children,
                    );
                  },
                },
              ]),
              _
            );
          })(_.PureComponent)),
          _(_, "propTypes", {
            carouselStore: _.object.isRequired,
            children: _.node,
            childrenPaused: _.node,
            childrenPlaying: _.node,
            className: _.string,
            isPlaying: _.bool.isRequired,
            onClick: _.func,
          }),
          _(_, "defaultProps", {
            children: null,
            childrenPaused: null,
            childrenPlaying: null,
            className: null,
            onClick: null,
          }),
          _),
        _ =
          (_(_, function (_) {
            return {
              isPlaying: _.isPlaying,
            };
          }),
          {
            dot: "dot___3c3SI",
          }),
        _ = [
          "carouselStore",
          "children",
          "className",
          "currentSlide",
          "disabled",
          "onClick",
          "selected",
          "slide",
          "totalSlides",
          "visibleSlides",
        ],
        _ =
          ((_ = (function (_) {
            function _(_) {
              var _;
              return (
                _(this, _),
                ((_ = __webpack_require__.call(this, _)).handleOnClick =
                  _.handleOnClick.bind(_(_))),
                _
              );
            }
            _(_, _);
            var _ = _(_);
            return (
              _(_, [
                {
                  key: "handleOnClick",
                  value: function (_) {
                    var _ = this.props,
                      _ = _.carouselStore,
                      _ = _.onClick,
                      _ = _.slide,
                      _ = _.totalSlides,
                      _ = _.visibleSlides,
                      _ = _ >= _ - _ ? _ - _ : _;
                    __webpack_require__.setStoreState(
                      {
                        currentSlide: _,
                        isPlaying: !1,
                      },
                      null !== _ && _.call(this, _),
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var _ = this.props,
                      _ = (_.carouselStore, _.children, _.className),
                      _ = _.currentSlide,
                      _ = _.disabled,
                      _ = (_.onClick, _.selected),
                      _ = _.slide,
                      _ = (_.totalSlides, _.visibleSlides),
                      _ = _(_, _),
                      _ = _ >= _ && _ < _ + _,
                      _ = "boolean" == typeof _ ? _ : _,
                      _ = "boolean" == typeof _ ? _ : !0 === _,
                      _ = _([
                        _.dot,
                        _ && _.dotSelected,
                        "carousel__dot",
                        "carousel__dot--".concat(_),
                        _ && "carousel__dot--selected",
                        _,
                      ]);
                    return _.createElement(
                      "button",
                      _(
                        {
                          "aria-label": "slide dot",
                          type: "button",
                          onClick: this.handleOnClick,
                          className: _,
                          disabled: _,
                        },
                        _,
                      ),
                      this.props.children,
                    );
                  },
                },
              ]),
              _
            );
          })(_.Component)),
          _(_, "propTypes", {
            carouselStore: _.object.isRequired,
            children: _.children,
            className: _.string,
            currentSlide: _.number.isRequired,
            disabled: _.bool,
            onClick: _.func,
            selected: _.bool,
            slide: _.number.isRequired,
            totalSlides: _.number.isRequired,
            visibleSlides: _.number.isRequired,
          }),
          _(_, "defaultProps", {
            children: null,
            className: null,
            disabled: null,
            onClick: null,
            selected: null,
          }),
          _),
        _ = _(_, function (_) {
          return {
            currentSlide: _.currentSlide,
            totalSlides: _.totalSlides,
            visibleSlides: _.visibleSlides,
          };
        }),
        _ = {},
        _ = ["renderDots"],
        _ = [
          "carouselStore",
          "children",
          "className",
          "currentSlide",
          "dotNumbers",
          "totalSlides",
          "visibleSlides",
          "disableActiveDots",
          "showAsSelectedForCurrentSlideOnly",
          "renderDots",
        ],
        _ =
          ((_ = (function (_) {
            function _() {
              return _(this, _), __webpack_require__.apply(this, arguments);
            }
            _(_, _);
            var _ = _(_);
            return (
              _(_, [
                {
                  key: "renderDots",
                  value: function () {
                    var _ = this.props,
                      _ = _.currentSlide,
                      _ = _.totalSlides,
                      _ = _.visibleSlides,
                      _ = _.disableActiveDots,
                      _ = _.showAsSelectedForCurrentSlideOnly,
                      _ = _.renderDots;
                    if (_) {
                      var _ = this.props;
                      return _.renderDots, _(_(_, _));
                    }
                    for (var _ = [], _ = 0; _ < _; _ += 1) {
                      var _ = _ ? _ === _ : _ >= _ && _ < _ + _,
                        _ = _ >= _ - _ ? _ - _ : _;
                      _.push(
                        _.createElement(
                          _,
                          {
                            key: _,
                            slide: _,
                            selected: _,
                            disabled: !!_ && _,
                          },
                          _.createElement(
                            "span",
                            {
                              className: _["carousel__dot-group-dot"],
                            },
                            this.props.dotNumbers && _ + 1,
                          ),
                        ),
                      );
                    }
                    return _;
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var _ = this.props,
                      _ = (_.carouselStore, _.children),
                      _ = _.className,
                      _ =
                        (_.currentSlide,
                        _.dotNumbers,
                        _.totalSlides,
                        _.visibleSlides,
                        _.disableActiveDots,
                        _.showAsSelectedForCurrentSlideOnly,
                        _.renderDots,
                        _(_, _)),
                      _ = _([_.DotGroup, "carousel__dot-group", _]);
                    return _.createElement(
                      "div",
                      _(
                        {
                          className: _,
                        },
                        _,
                      ),
                      this.renderDots(),
                      _,
                    );
                  },
                },
              ]),
              _
            );
          })(_.Component)),
          _(_, "propTypes", {
            children: _.children,
            className: _.string,
            currentSlide: _.number.isRequired,
            carouselStore: _.object.isRequired,
            totalSlides: _.number.isRequired,
            visibleSlides: _.number.isRequired,
            dotNumbers: _.bool,
            disableActiveDots: _.bool,
            showAsSelectedForCurrentSlideOnly: _.bool,
            renderDots: _.func,
          }),
          _(_, "defaultProps", {
            children: null,
            className: null,
            dotNumbers: !1,
            disableActiveDots: !0,
            showAsSelectedForCurrentSlideOnly: !1,
            renderDots: null,
          }),
          _),
        _ =
          (_(_, function (_) {
            return {
              currentSlide: _.currentSlide,
              totalSlides: _.totalSlides,
              visibleSlides: _.visibleSlides,
            };
          }),
          {
            image: "image___xtQGH",
          }),
        _ = ["src", "alt"],
        _ = [
          "carouselStore",
          "children",
          "className",
          "hasMasterSpinner",
          "isBgImage",
          "onError",
          "onLoad",
          "renderError",
          "renderLoading",
          "style",
          "tag",
        ],
        _ = (function (_) {
          function _(_) {
            var _;
            return (
              _(this, _),
              ((_ = __webpack_require__.call(this, _)).state = {
                imageStatus: _,
              }),
              (_.handleImageLoad = _.handleImageLoad.bind(_(_))),
              (_.handleImageError = _.handleImageError.bind(_(_))),
              (_.image = null),
              _
            );
          }
          _(_, _);
          var _ = _(_);
          return (
            _(
              _,
              [
                {
                  key: "componentDidMount",
                  value: function () {
                    _.subscribeMasterSpinner(this.props), this.initImage();
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function (_) {
                    _.src !== this.props.src &&
                      (_.unsubscribeMasterSpinner(_),
                      _.subscribeMasterSpinner(this.props),
                      this.initImage());
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    _.unsubscribeMasterSpinner(this.props),
                      this.image.removeEventListener(
                        "load",
                        this.handleImageLoad,
                      ),
                      this.image.removeEventListener(
                        "error",
                        this.handleImageError,
                      ),
                      (this.image = null);
                  },
                },
                {
                  key: "initImage",
                  value: function () {
                    if (
                      (this.setState({
                        imageStatus: _,
                      }),
                      (this.image = document.createElement("img")),
                      this.image.addEventListener(
                        "load",
                        this.handleImageLoad,
                        !1,
                      ),
                      this.image.addEventListener(
                        "error",
                        this.handleImageError,
                        !1,
                      ),
                      (this.image.src = this.props.src),
                      this.image.readyState || this.image.complete)
                    ) {
                      var _ = this.image.src;
                      (this.image.src =
                        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="),
                        (this.image.src = _);
                    }
                  },
                },
                {
                  key: "handleImageLoad",
                  value: function (_) {
                    this.setState({
                      imageStatus: _,
                    }),
                      this.props.hasMasterSpinner &&
                        this.props.carouselStore.masterSpinnerSuccess(
                          this.props.src,
                        ),
                      this.props.onLoad && this.props.onLoad(_);
                  },
                },
                {
                  key: "handleImageError",
                  value: function (_) {
                    this.setState({
                      imageStatus: _,
                    }),
                      this.props.hasMasterSpinner &&
                        this.props.carouselStore.masterSpinnerError(
                          this.props.src,
                        ),
                      this.props.onError && this.props.onError(_);
                  },
                },
                {
                  key: "tempTag",
                  value: function () {
                    return "img" === this.props.tag ? "div" : this.props.tag;
                  },
                },
                {
                  key: "customRender",
                  value: function (_) {
                    return "function" == typeof this.props[_]
                      ? this.props[_]()
                      : this.props.children;
                  },
                },
                {
                  key: "renderLoading",
                  value: function (_) {
                    var _ = this.tempTag(),
                      _ = _([
                        _.image,
                        _.imageLoading,
                        "carousel__image",
                        this.props.isBgImage &&
                          "carousel__image--with-background",
                        "carousel__image--loading",
                        this.props.className,
                      ]);
                    return _.createElement(
                      _,
                      _(
                        {
                          className: _,
                        },
                        _,
                      ),
                      this.customRender("renderLoading"),
                    );
                  },
                },
                {
                  key: "renderError",
                  value: function (_) {
                    var _ = this.tempTag(),
                      _ = _([
                        _.image,
                        _.imageError,
                        "carousel__image",
                        this.props.isBgImage &&
                          "carousel__image--with-background",
                        "carousel__image--error",
                        this.props.className,
                      ]);
                    return _.createElement(
                      _,
                      _(
                        {
                          className: _,
                        },
                        _,
                      ),
                      this.customRender("renderError"),
                    );
                  },
                },
                {
                  key: "renderSuccess",
                  value: function (_) {
                    var _ = this.props,
                      _ = _.style,
                      _ = _.tag,
                      _ = _([
                        _.image,
                        "carousel__image",
                        this.props.isBgImage &&
                          "carousel__image--with-background",
                        "carousel__image--success",
                        this.props.className,
                      ]),
                      _ = _({}, _),
                      _ = _;
                    if ("img" !== _) {
                      var _ = _.src;
                      _.alt,
                        (_ = _(_, _)),
                        (_ = _({}, _, {
                          backgroundImage: 'url("'.concat(_, '")'),
                          backgroundSize: "cover",
                        }));
                    }
                    return _.createElement(
                      _,
                      _(
                        {
                          className: _,
                          style: _,
                        },
                        _,
                      ),
                      this.props.children,
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var _ = this.props,
                      _ =
                        (_.carouselStore,
                        _.children,
                        _.className,
                        _.hasMasterSpinner,
                        _.isBgImage,
                        _.onError,
                        _.onLoad,
                        _.renderError,
                        _.renderLoading,
                        _.style,
                        _.tag,
                        _(_, _));
                    switch (this.state.imageStatus) {
                      case _:
                        return this.renderLoading(_);
                      case _:
                        return this.renderSuccess(_);
                      case _:
                        return this.renderError(_);
                      default:
                        throw new Error(
                          "unknown value for this.state.imageStatus",
                        );
                    }
                  },
                },
              ],
              [
                {
                  key: "subscribeMasterSpinner",
                  value: function (_) {
                    _.hasMasterSpinner &&
                      _.carouselStore.subscribeMasterSpinner(_.src);
                  },
                },
                {
                  key: "unsubscribeMasterSpinner",
                  value: function (_) {
                    _.hasMasterSpinner &&
                      _.carouselStore.unsubscribeMasterSpinner(_.src);
                  },
                },
              ],
            ),
            _
          );
        })(_.Component);
      _(_, "propTypes", {
        alt: _.string,
        carouselStore: _.object.isRequired,
        children: _.children,
        className: _.string,
        hasMasterSpinner: _.bool.isRequired,
        isBgImage: _.isBgImage,
        onError: _.func,
        onLoad: _.func,
        renderError: _.func,
        renderLoading: _.func,
        src: _.string.isRequired,
        style: _.object,
        tag: _.string,
      }),
        _(_, "defaultProps", {
          alt: "",
          children: null,
          className: null,
          isBgImage: !1,
          onError: null,
          onLoad: null,
          renderError: null,
          renderLoading: null,
          style: null,
          tag: "img",
        });
      var _,
        _,
        _,
        _,
        _ = _(_, function (_) {
          return {
            hasMasterSpinner: _.hasMasterSpinner,
            orientation: _.orientation,
          };
        }),
        _ = "spinner___27VUp",
        _ = ["className"],
        _ =
          (_(
            (_ = (function (_) {
              function _() {
                return _(this, _), __webpack_require__.apply(this, arguments);
              }
              _(_, _);
              var _ = _(_);
              return (
                _(_, [
                  {
                    key: "render",
                    value: function () {
                      var _ = this.props,
                        _ = _.className,
                        _ = _(_, _),
                        _ = _([_, "carousel__spinner", _]);
                      return _.createElement(
                        "div",
                        _(
                          {
                            className: _,
                          },
                          _,
                        ),
                      );
                    },
                  },
                ]),
                _
              );
            })(_.PureComponent)),
            "propTypes",
            {
              className: _.string,
            },
          ),
          _(_, "defaultProps", {
            className: null,
          }),
          _),
        _ = {
          container: "container___2O72F",
          overlay: "overlay___IV4qY",
          hover: "hover___MYy31",
          zoom: "zoom___3kqYk",
          loading: "loading___1pvNI",
          imageLoadingSpinnerContainer: "imageLoadingSpinnerContainer___3UIPD",
        },
        _ = [
          "alt",
          "bgImageProps",
          "bgImageTag",
          "carouselStore",
          "className",
          "imageClassName",
          "overlayClassName",
          "isPinchZoomEnabled",
          "spinner",
          "src",
          "srcZoomed",
          "tag",
        ],
        _ =
          ((_ = (function (_) {
            function _(_) {
              var _;
              return (
                _(this, _),
                ((_ = __webpack_require__.call(this, _)).state = {
                  isImageLoading: !0,
                  isImageLoadingError: !0,
                  isHovering: !1,
                  isZooming: !1,
                  _: null,
                  _: null,
                  scale: 1,
                }),
                (_.tpCache = {}),
                (_.handleImageComplete = _.handleImageComplete.bind(_(_))),
                (_.handleImageLoadError = _.handleImageLoadError.bind(_(_))),
                (_.handleOnMouseMove = _.handleOnMouseMove.bind(_(_))),
                (_.handleOnMouseOut = _.handleOnMouseOut.bind(_(_))),
                (_.handleOnMouseOver = _.handleOnMouseOver.bind(_(_))),
                (_.handleOnTouchEnd = _.handleOnTouchEnd.bind(_(_))),
                (_.handleOnTouchMove = _.handleOnTouchMove.bind(_(_))),
                (_.handleOnTouchStart = _.handleOnTouchStart.bind(_(_))),
                _
              );
            }
            _(_, _);
            var _ = _(_);
            return (
              _(
                _,
                [
                  {
                    key: "componentDidUpdate",
                    value: function (_, _) {
                      !1 === _.isZooming &&
                        !0 === this.state.isZooming &&
                        this.props.carouselStore.setStoreState({
                          isPageScrollLocked: !0,
                        }),
                        !0 === _.isZooming &&
                          !1 === this.state.isZooming &&
                          this.props.carouselStore.setStoreState({
                            isPageScrollLocked: !1,
                          });
                    },
                  },
                  {
                    key: "handleImageComplete",
                    value: function (_) {
                      this.setState({
                        isImageLoading: !1,
                      }),
                        this.props && this.props.onLoad && this.props.onLoad(_);
                    },
                  },
                  {
                    key: "handleImageLoadError",
                    value: function (_) {
                      this.setState({
                        isImageLoadingError: !0,
                        isImageLoading: !1,
                      }),
                        this.props &&
                          this.props.onError &&
                          this.props.onError(_);
                    },
                  },
                  {
                    key: "handleOnMouseOver",
                    value: function () {
                      this.state.isZooming ||
                        this.setState({
                          isHovering: !0,
                          scale: 2,
                        });
                    },
                  },
                  {
                    key: "handleOnMouseOut",
                    value: function () {
                      this.state.isZooming ||
                        this.setState({
                          isHovering: !1,
                          scale: 1,
                        });
                    },
                  },
                  {
                    key: "handleOnMouseMove",
                    value: function (_) {
                      if (!this.state.isZooming) {
                        var _ = _(
                            (_.nativeEvent.offsetX / _.target.offsetWidth) *
                              100,
                          ),
                          _ = _(
                            (_.nativeEvent.offsetY / _.target.offsetHeight) *
                              100,
                          );
                        this.setState({
                          _: _,
                          _: _,
                        });
                      }
                    },
                  },
                  {
                    key: "handleOnTouchStart",
                    value: function (_) {
                      var _ = this;
                      this.props.isPinchZoomEnabled &&
                        (_(_.targetTouches).forEach(function (_) {
                          _.tpCache[_.identifier] = {
                            clientX: _.clientX,
                            clientY: _.clientY,
                          };
                        }),
                        this.setState(function (_) {
                          return {
                            isZooming:
                              _.isZooming || Object.keys(_.tpCache).length > 1,
                          };
                        }));
                    },
                  },
                  {
                    key: "handleOnTouchMove",
                    value: function (_) {
                      var _ = this;
                      if (this.state.isZooming) {
                        _.persist();
                        var _ = _(_.targetTouches)
                          .filter(function (_) {
                            return _.tpCache[_.identifier];
                          })
                          .slice(0, 2);
                        if (2 === _.length) {
                          _.stopPropagation();
                          var _ = _.target.getBoundingClientRect(),
                            _ = _[0].identifier,
                            _ = _[1].identifier,
                            _ = {
                              _: this.tpCache[_].clientX,
                              _: this.tpCache[_].clientY,
                              _: this.tpCache[_].clientX,
                              _: this.tpCache[_].clientY,
                            };
                          _.distance = _.distanceBetweenTwoTouches(_({}, _));
                          var _ = _.midpointBetweenTwoTouches(_({}, _));
                          (_._ = _._), (_._ = _._);
                          var _ = {
                            _: _[0].clientX,
                            _: _[0].clientY,
                            _: _[1].clientX,
                            _: _[1].clientY,
                          };
                          _.distance = _.distanceBetweenTwoTouches(_({}, _));
                          var _ = _.midpointBetweenTwoTouches(_({}, _));
                          (_._ = _._), (_._ = _._);
                          var _ = _(
                              _({
                                min: 0,
                                max: 100,
                                _: ((_._ - _.left) / _.width) * 100,
                              }),
                            ),
                            _ = _(
                              _({
                                min: 0,
                                max: 100,
                                _: ((_._ - _.top) / _.height) * 100,
                              }),
                            ),
                            _ = function (_) {
                              return _({
                                min: 1,
                                max: 3,
                                _: _.scale + (_.distance - _.distance) / 100,
                              });
                            };
                          this.setState(function (_) {
                            return {
                              isZooming: 1 !== _(_),
                              scale: _(_),
                              _: _,
                              _: _,
                            };
                          });
                        }
                      }
                    },
                  },
                  {
                    key: "handleOnTouchEnd",
                    value: function (_) {
                      var _ = this;
                      this.props.isPinchZoomEnabled &&
                        (_(_.changedTouches).forEach(function (_) {
                          delete _.tpCache[_.identifier];
                        }),
                        0 === Object.keys(this.tpCache).length &&
                          this.setState({
                            isZooming: !1,
                          }));
                    },
                  },
                  {
                    key: "renderLoading",
                    value: function () {
                      if (this.state.isImageLoading) {
                        var _ = this.props.spinner;
                        return _.createElement(
                          "div",
                          {
                            className: _([
                              _.imageLoadingSpinnerContainer,
                              "carousel__image-loading-spinner-container",
                            ]),
                          },
                          _ && _(),
                          !_ && _.createElement(_, null),
                        );
                      }
                      return null;
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var _ = this.props,
                        _ = _.alt,
                        _ = _.bgImageProps,
                        _ = _.bgImageTag,
                        _ = (_.carouselStore, _.className),
                        _ = _.imageClassName,
                        _ = _.overlayClassName,
                        _ = (_.isPinchZoomEnabled, _.spinner, _.src),
                        _ = _.srcZoomed,
                        _ = _.tag,
                        _ = _(_, _),
                        _ = _([_.container, _]),
                        _ = _([_.image, "carousel__zoom-image", _]),
                        _ = _([
                          _.overlay,
                          "carousel__zoom-image-overlay",
                          this.state.isHovering && _.hover,
                          this.state.isZooming && _.zoom,
                          this.state.isHovering &&
                            "carousel__zoom-image-overlay--hovering",
                          this.state.isZooming &&
                            "carousel__zoom-image-overlay--zooming",
                          _,
                        ]),
                        _ = {};
                      return (
                        (this.state.isHovering || this.state.isZooming) &&
                          ((_.transformOrigin = ""
                            .concat(this.state._, " ")
                            .concat(this.state._)),
                          (_.transform = "scale(".concat(
                            this.state.scale,
                            ")",
                          ))),
                        _.createElement(
                          _,
                          _(
                            {
                              className: _,
                            },
                            _,
                          ),
                          _.createElement(
                            _,
                            _(
                              {
                                alt: _,
                                className: _,
                                tag: _,
                                src: _,
                                onLoad: this.handleImageComplete,
                                onError: this.handleImageLoadError,
                              },
                              _,
                            ),
                          ),
                          _.createElement(_, {
                            className: _,
                            tag: "div",
                            src: _ || _,
                            style: _,
                            isBgImage: !0,
                            onFocus: this.handleOnMouseOver,
                            onMouseOver: this.handleOnMouseOver,
                            onBlur: this.handleOnMouseOut,
                            onMouseOut: this.handleOnMouseOut,
                            onMouseMove: this.handleOnMouseMove,
                            onTouchStart: this.handleOnTouchStart,
                            onTouchEnd: this.handleOnTouchEnd,
                            onTouchMove: this.handleOnTouchMove,
                          }),
                          this.renderLoading(),
                        )
                      );
                    },
                  },
                ],
                [
                  {
                    key: "midpointBetweenTwoTouches",
                    value: function (_) {
                      var _ = _._,
                        _ = _._;
                      return {
                        _: (_ + _._) / 2,
                        _: (_ + _._) / 2,
                      };
                    },
                  },
                  {
                    key: "distanceBetweenTwoTouches",
                    value: function (_) {
                      var _ = _._,
                        _ = _._,
                        _ = _._,
                        _ = _._;
                      return Math.sqrt(Math.pow(_ - _, 2) + Math.pow(_ - _, 2));
                    },
                  },
                ],
              ),
              _
            );
          })(_.Component)),
          _(_, "propTypes", {
            alt: _.string,
            bgImageProps: _.object,
            bgImageTag: _.string,
            carouselStore: _.object.isRequired,
            className: _.string,
            imageClassName: _.string,
            overlayClassName: _.string,
            spinner: _.func,
            onLoad: _.func,
            onError: _.func,
            src: _.string.isRequired,
            srcZoomed: _.string,
            tag: _.string,
            isPinchZoomEnabled: _.bool,
          }),
          _(_, "defaultProps", {
            alt: void 0,
            bgImageProps: {},
            bgImageTag: "div",
            className: null,
            imageClassName: null,
            overlayClassName: null,
            isPinchZoomEnabled: !0,
            spinner: null,
            onLoad: null,
            onError: null,
            srcZoomed: null,
            tag: "div",
          }),
          _),
        _ =
          (_(_, function () {
            return {};
          }),
          {
            slide: "slide___3-Nqo",
            slideHorizontal: "slideHorizontal___1NzNV",
            slideInner: "slideInner___2mfX9",
            focusRing: "focusRing___1airF",
          }),
        _ = [
          "ariaLabel",
          "carouselStore",
          "children",
          "className",
          "classNameHidden",
          "classNameVisible",
          "currentSlide",
          "index",
          "innerClassName",
          "innerTag",
          "naturalSlideHeight",
          "naturalSlideWidth",
          "onBlur",
          "onFocus",
          "orientation",
          "slideSize",
          "style",
          "tag",
          "totalSlides",
          "visibleSlides",
          "isIntrinsicHeight",
        ],
        _ =
          ((_ = (function (_) {
            function _(_) {
              var _;
              return (
                _(this, _),
                ((_ = __webpack_require__.call(this, _)).handleOnFocus =
                  _.handleOnFocus.bind(_(_))),
                (_.handleOnBlur = _.handleOnBlur.bind(_(_))),
                (_.state = {
                  focused: !1,
                }),
                _
              );
            }
            _(_, _);
            var _ = _(_);
            return (
              _(_, [
                {
                  key: "isVisible",
                  value: function () {
                    var _ = this.props,
                      _ = _.currentSlide,
                      _ = _.index,
                      _ = _.visibleSlides;
                    return _ >= _ && _ < _ + _;
                  },
                },
                {
                  key: "handleOnFocus",
                  value: function (_) {
                    var _ = this,
                      _ = this.props.onFocus;
                    this.setState(
                      {
                        focused: !0,
                      },
                      function () {
                        null !== _ && __webpack_require__.call(_, _);
                      },
                    );
                  },
                },
                {
                  key: "handleOnBlur",
                  value: function (_) {
                    var _ = this,
                      _ = this.props.onBlur;
                    this.setState(
                      {
                        focused: !1,
                      },
                      function () {
                        null !== _ && __webpack_require__.call(_, _);
                      },
                    );
                  },
                },
                {
                  key: "renderFocusRing",
                  value: function () {
                    return this.state.focused
                      ? _.createElement("div", {
                          className: [
                            _.focusRing,
                            "carousel__slide-focus-ring",
                          ].join(" "),
                        })
                      : null;
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var _ = this,
                      _ = this.props,
                      _ = _.ariaLabel,
                      _ = (_.carouselStore, _.children, _.className),
                      _ = _.classNameHidden,
                      _ = _.classNameVisible,
                      _ = (_.currentSlide, _.index, _.innerClassName),
                      _ = _.innerTag,
                      _ = _.naturalSlideHeight,
                      _ = _.naturalSlideWidth,
                      _ = (_.onBlur, _.onFocus, _.orientation),
                      _ = _.slideSize,
                      _ = _.style,
                      _ = _.tag,
                      _ = _.totalSlides,
                      _ = (_.visibleSlides, _.isIntrinsicHeight),
                      _ = _(_, _),
                      _ = {};
                    "horizontal" === _
                      ? ((_.width = _(_)),
                        (_.paddingBottom = _((100 * _) / (_ * _))))
                      : ((_.width = _(100)),
                        (_.paddingBottom = _((100 * _) / _)));
                    var _ = {};
                    _ &&
                      ("horizontal" === _
                        ? (_.height = "unset")
                        : (_.width = "unset"),
                      (_.paddingBottom = "unset"),
                      (_.position = "unset"));
                    var _ = _({}, _, _),
                      _ = this.isVisible(),
                      _ = _([
                        _.slide,
                        "horizontal" === _ && _.slideHorizontal,
                        "carousel__slide",
                        this.state.focused && "carousel__slide--focused",
                        _ && _,
                        _ && "carousel__slide--visible",
                        !_ && _,
                        !_ && "carousel__slide--hidden",
                        _,
                      ]),
                      _ = _([_.slideInner, "carousel__inner-slide", _]);
                    return _.createElement(
                      _,
                      _(
                        {
                          ref: function (_) {
                            _.tagRef = _;
                          },
                          "aria-selected": this.isVisible(),
                          "aria-label": _,
                          role: this.props.role,
                          onFocus: this.handleOnFocus,
                          onBlur: this.handleOnBlur,
                          className: _,
                          style: _,
                        },
                        _,
                      ),
                      _.createElement(
                        _,
                        {
                          ref: function (_) {
                            _.innerTagRef = _;
                          },
                          className: _,
                          style: _,
                        },
                        this.props.children,
                        this.renderFocusRing(),
                      ),
                    );
                  },
                },
              ]),
              _
            );
          })(_.PureComponent)),
          _(_, "propTypes", {
            ariaLabel: _.string,
            carouselStore: _.object,
            children: _.children,
            className: _.string,
            classNameHidden: _.string,
            classNameVisible: _.string,
            currentSlide: _.number.isRequired,
            index: _.number.isRequired,
            innerClassName: _.string,
            innerTag: _.string,
            naturalSlideHeight: _.number.isRequired,
            naturalSlideWidth: _.number.isRequired,
            onBlur: _.func,
            onFocus: _.func,
            orientation: _.orientation.isRequired,
            slideSize: _.number.isRequired,
            role: _.string,
            style: _.object,
            tag: _.string,
            totalSlides: _.number.isRequired,
            visibleSlides: _.number.isRequired,
            isIntrinsicHeight: _.bool,
          }),
          _(_, "defaultProps", {
            ariaLabel: "slide",
            carouselStore: null,
            children: null,
            className: null,
            classNameHidden: null,
            classNameVisible: null,
            innerClassName: null,
            innerTag: "div",
            onBlur: null,
            onFocus: null,
            role: "option",
            style: {},
            tag: "div",
            isIntrinsicHeight: !1,
          }),
          _),
        _ = _(_, function (_) {
          return {
            currentSlide: _.currentSlide,
            naturalSlideHeight: _.naturalSlideHeight,
            naturalSlideWidth: _.naturalSlideWidth,
            orientation: _.orientation,
            slideSize: _.slideSize,
            totalSlides: _.totalSlides,
            visibleSlides: _.visibleSlides,
            isIntrinsicHeight: _.isIntrinsicHeight,
          };
        }),
        _ = (function () {
          function _() {
            _(this, _);
          }
          return (
            _(
              _,
              [
                {
                  key: "parents",
                  value: function (_, _) {
                    return null === _.parentNode
                      ? _
                      : this.parents(_.parentNode, _.concat([_]));
                  },
                },
                {
                  key: "scrollParent",
                  value: function (_) {
                    for (
                      var _ = this.parents(_.parentNode, []), _ = 0;
                      _ < _.length;
                      _ += 1
                    )
                      if (_.scroll(_[_])) return _[_];
                    return (
                      document.scrollingElement || document.documentElement
                    );
                  },
                },
                {
                  key: "getScrollParent",
                  value: function (_) {
                    return _.isNodeValid(_) ? this.scrollParent(_) : null;
                  },
                },
              ],
              [
                {
                  key: "style",
                  value: function (_, _) {
                    return getComputedStyle(_, null).getPropertyValue(_);
                  },
                },
                {
                  key: "overflow",
                  value: function (_) {
                    return (
                      _.style(_, "overflow") +
                      _.style(_, "overflow-y") +
                      _.style(_, "overflow-x")
                    );
                  },
                },
                {
                  key: "scroll",
                  value: function (_) {
                    return /(auto|scroll)/.test(_.overflow(_));
                  },
                },
                {
                  key: "isNodeValid",
                  value: function (_) {
                    return _ instanceof HTMLElement || _ instanceof SVGElement;
                  },
                },
              ],
            ),
            _
          );
        })(),
        _ = {
          horizontalSlider: "horizontalSlider___281Ls",
          touchDisabled: "touchDisabled___2qs4y",
          horizontalSliderTray: "horizontalSliderTray___1L-0W",
          verticalSlider: "verticalSlider___34ZFD",
          verticalSliderTray: "verticalSliderTray___267D8",
          verticalTray: "verticalTray___12Key",
          verticalSlideTrayWrap: "verticalSlideTrayWrap___2nO7o",
          sliderTray: "sliderTray___-vHFQ",
          sliderAnimation: "sliderAnimation___300FY",
          masterSpinnerContainer: "masterSpinnerContainer___1Z6hB",
        },
        _ = [
          "ariaLabel",
          "carouselStore",
          "children",
          "className",
          "classNameAnimation",
          "classNameTray",
          "classNameTrayWrap",
          "currentSlide",
          "disableAnimation",
          "disableKeyboard",
          "dragEnabled",
          "hasMasterSpinner",
          "interval",
          "isPageScrollLocked",
          "isPlaying",
          "lockOnWindowScroll",
          "masterSpinnerFinished",
          "moveThreshold",
          "naturalSlideHeight",
          "naturalSlideWidth",
          "onMasterSpinner",
          "orientation",
          "playDirection",
          "privateUnDisableAnimation",
          "slideSize",
          "slideTraySize",
          "spinner",
          "style",
          "totalSlides",
          "touchEnabled",
          "trayProps",
          "trayTag",
          "visibleSlides",
          "isIntrinsicHeight",
        ],
        _ = [
          "dragStep",
          "step",
          "infinite",
          "preventVerticalScrollOnTouch",
          "preventingVerticalScroll",
          "horizontalPixelThreshold",
          "verticalPixelThreshold",
        ],
        _ = [
          "className",
          "onClickCapture",
          "onMouseDown",
          "onTouchCancel",
          "onTouchEnd",
          "onTouchMove",
          "onTouchStart",
          "ref",
          "style",
        ],
        _ =
          ((_ = (function (_) {
            function _(_) {
              var _;
              return (
                _(this, _),
                ((_ = __webpack_require__.call(this, _)).getSliderRef =
                  _.getSliderRef.bind(_(_))),
                (_.handleDocumentScroll = _.handleDocumentScroll.bind(_(_))),
                (_.handleOnClickCapture = _.handleOnClickCapture.bind(_(_))),
                (_.handleOnKeyDown = _.handleOnKeyDown.bind(_(_))),
                (_.handleOnMouseDown = _.handleOnMouseDown.bind(_(_))),
                (_.handleOnMouseMove = _.handleOnMouseMove.bind(_(_))),
                (_.handleOnMouseUp = _.handleOnMouseUp.bind(_(_))),
                (_.handleOnTouchCancel = _.handleOnTouchCancel.bind(_(_))),
                (_.handleOnTouchEnd = _.handleOnTouchEnd.bind(_(_))),
                (_.handleOnTouchMove = _.handleOnTouchMove.bind(_(_))),
                (_.handleOnTouchStart = _.handleOnTouchStart.bind(_(_))),
                (_.playBackward = _.playBackward.bind(_(_))),
                (_.playForward = _.playForward.bind(_(_))),
                (_.callCallback = _.callCallback.bind(_(_))),
                (_.blockWindowScroll = _.blockWindowScroll.bind(_(_))),
                (_.state = {
                  cancelNextClick: !1,
                  deltaX: 0,
                  deltaY: 0,
                  isBeingMouseDragged: !1,
                  isBeingTouchDragged: !1,
                  preventingVerticalScroll: !1,
                  startX: 0,
                  startY: 0,
                }),
                (_.interval = null),
                (_.isDocumentScrolling = null),
                (_.moveTimer = null),
                (_.originalOverflow = null),
                (_.scrollParent = null),
                (_.scrollStopTimer = null),
                _
              );
            }
            _(_, _);
            var _ = _(_);
            return (
              _(
                _,
                [
                  {
                    key: "componentDidMount",
                    value: function () {
                      this.props.lockOnWindowScroll &&
                        window.addEventListener(
                          "scroll",
                          this.handleDocumentScroll,
                          !1,
                        ),
                        (this.props.touchEnabled ||
                          this.props.preventVerticalScrollOnTouch) &&
                          window.addEventListener(
                            "touchmove",
                            this.blockWindowScroll,
                            !1,
                          ),
                        document.documentElement.addEventListener(
                          "mouseleave",
                          this.handleOnMouseUp,
                          !1,
                        ),
                        document.documentElement.addEventListener(
                          "mousemove",
                          this.handleOnMouseMove,
                          !1,
                        ),
                        document.documentElement.addEventListener(
                          "mouseup",
                          this.handleOnMouseUp,
                          !1,
                        ),
                        this.props.isPlaying && this.play();
                    },
                  },
                  {
                    key: "componentDidUpdate",
                    value: function (_) {
                      !_.isPlaying && this.props.isPlaying && this.play(),
                        _.isPlaying && !this.props.isPlaying && this.stop(),
                        !_.isPageScrollLocked &&
                          this.props.isPageScrollLocked &&
                          this.lockScroll(),
                        _.isPageScrollLocked &&
                          !this.props.isPageScrollLocked &&
                          this.unlockScroll(),
                        !1 === _.privateUnDisableAnimation &&
                          !0 === this.props.privateUnDisableAnimation &&
                          this.props.carouselStore.setStoreState({
                            privateUnDisableAnimation: !1,
                            disableAnimation: !1,
                          });
                    },
                  },
                  {
                    key: "componentWillUnmount",
                    value: function () {
                      document.documentElement.removeEventListener(
                        "mouseleave",
                        this.handleOnMouseUp,
                        !1,
                      ),
                        document.documentElement.removeEventListener(
                          "mousemove",
                          this.handleOnMouseMove,
                          !1,
                        ),
                        document.documentElement.removeEventListener(
                          "mouseup",
                          this.handleOnMouseUp,
                          !1,
                        ),
                        window.removeEventListener(
                          "scroll",
                          this.handleDocumentScroll,
                          !1,
                        ),
                        window.removeEventListener(
                          "touchmove",
                          this.blockWindowScroll,
                          !1,
                        ),
                        this.stop(),
                        window.cancelAnimationFrame.call(
                          window,
                          this.moveTimer,
                        ),
                        window.clearTimeout(this.scrollStopTimer),
                        (this.isDocumentScrolling = null),
                        (this.moveTimer = null),
                        (this.scrollStopTimer = null);
                    },
                  },
                  {
                    key: "getSliderRef",
                    value: function (_) {
                      if (((this.sliderTrayElement = _), _ && window)) {
                        var _ = _.closest(".carousel");
                        _ &&
                          (this.rtl =
                            "rtl" ===
                            window
                              .getComputedStyle(_, null)
                              .getPropertyValue("direction"));
                      }
                    },
                  },
                  {
                    key: "fakeOnDragStart",
                    value: function (_) {
                      var _ = _.screenX,
                        _ = _.screenY,
                        _ = _.touchDrag,
                        _ = void 0 !== _ && _,
                        _ = _.mouseDrag,
                        _ = void 0 !== _ && _;
                      this.props.carouselStore.setStoreState({
                        isPlaying: !1,
                      }),
                        window.cancelAnimationFrame.call(
                          window,
                          this.moveTimer,
                        ),
                        "vertical" === this.props.orientation &&
                          this.props.carouselStore.setStoreState({
                            isPageScrollLocked: !0,
                          }),
                        this.setState({
                          isBeingTouchDragged: _,
                          isBeingMouseDragged: _,
                          startX: _,
                          startY: _,
                        });
                    },
                  },
                  {
                    key: "fakeOnDragMove",
                    value: function (_, _) {
                      var _ = this;
                      window.cancelAnimationFrame.call(window, this.moveTimer),
                        (this.moveTimer = window.requestAnimationFrame.call(
                          window,
                          function () {
                            __webpack_require__.setState(function (_) {
                              return {
                                deltaX: (_ - _.startX) * (_.rtl ? -1 : 1),
                                deltaY: _ - _.startY,
                                preventingVerticalScroll:
                                  Math.abs(_ - _.startY) <=
                                    _.props.verticalPixelThreshold &&
                                  Math.abs(_ - _.startX) >=
                                    _.props.horizontalPixelThreshold,
                              };
                            });
                          },
                        ));
                    },
                  },
                  {
                    key: "fakeOnDragEnd",
                    value: function () {
                      window.cancelAnimationFrame.call(window, this.moveTimer),
                        this.computeCurrentSlide(),
                        "vertical" === this.props.orientation &&
                          this.props.carouselStore.setStoreState({
                            isPageScrollLocked: !1,
                          }),
                        this.setState({
                          deltaX: 0,
                          deltaY: 0,
                          isBeingTouchDragged: !1,
                          isBeingMouseDragged: !1,
                        }),
                        (this.isDocumentScrolling =
                          !this.props.lockOnWindowScroll && null);
                    },
                  },
                  {
                    key: "callCallback",
                    value: function (_, _) {
                      var _ = this.props.trayProps;
                      _ &&
                        "function" == typeof _[_] &&
                        (_.persist(), __webpack_require__[_](_));
                    },
                  },
                  {
                    key: "handleOnMouseDown",
                    value: function (_) {
                      this.props.dragEnabled
                        ? (_.preventDefault(),
                          this.fakeOnDragStart({
                            screenX: _.screenX,
                            screenY: _.screenY,
                            mouseDrag: !0,
                          }),
                          this.callCallback("onMouseDown", _))
                        : this.callCallback("onMouseDown", _);
                    },
                  },
                  {
                    key: "handleOnMouseMove",
                    value: function (_) {
                      this.state.isBeingMouseDragged &&
                        (this.setState({
                          cancelNextClick: !0,
                        }),
                        _.preventDefault(),
                        this.fakeOnDragMove(_.screenX, _.screenY));
                    },
                  },
                  {
                    key: "handleOnMouseUp",
                    value: function (_) {
                      this.state.isBeingMouseDragged &&
                        (_.preventDefault(), this.fakeOnDragEnd());
                    },
                  },
                  {
                    key: "handleOnClickCapture",
                    value: function (_) {
                      this.state.cancelNextClick
                        ? (_.preventDefault(),
                          this.setState({
                            cancelNextClick: !1,
                          }),
                          this.callCallback("onClickCapture", _))
                        : this.callCallback("onClickCapture", _);
                    },
                  },
                  {
                    key: "handleOnTouchStart",
                    value: function (_) {
                      if (this.props.touchEnabled) {
                        "vertical" === this.props.orientation &&
                          _.preventDefault();
                        var _ = _.targetTouches[0];
                        this.fakeOnDragStart({
                          screenX: _.screenX,
                          screenY: _.screenY,
                          touchDrag: !0,
                        }),
                          this.callCallback("onTouchStart", _);
                      } else this.callCallback("onTouchStart", _);
                    },
                  },
                  {
                    key: "handleDocumentScroll",
                    value: function () {
                      var _ = this;
                      this.props.touchEnabled &&
                        ((this.isDocumentScrolling = !0),
                        window.clearTimeout(this.scrollStopTimer),
                        (this.scrollStopTimer = window.setTimeout(function () {
                          _.isDocumentScrolling = !1;
                        }, 66)));
                    },
                  },
                  {
                    key: "handleOnTouchMove",
                    value: function (_) {
                      if (
                        !this.props.touchEnabled ||
                        (this.props.lockOnWindowScroll &&
                          this.isDocumentScrolling)
                      )
                        this.callCallback("onTouchMove", _);
                      else {
                        var _ = _.targetTouches[0];
                        _ &&
                          (this.fakeOnDragMove(_.screenX, _.screenY),
                          this.callCallback("onTouchMove", _));
                      }
                    },
                  },
                  {
                    key: "forward",
                    value: function () {
                      var _ = this.props,
                        _ = _.currentSlide,
                        _ = _.step,
                        _ = _.totalSlides,
                        _ = _.visibleSlides;
                      return Math.min(_ + _, _ - _);
                    },
                  },
                  {
                    key: "backward",
                    value: function () {
                      var _ = this.props,
                        _ = _.currentSlide,
                        _ = _.step;
                      return Math.max(_ - _, 0);
                    },
                  },
                  {
                    key: "handleOnKeyDown",
                    value: function (_) {
                      var _ = _.keyCode,
                        _ = this.props,
                        _ = _.carouselStore,
                        _ = _.currentSlide,
                        _ = _.disableKeyboard,
                        _ = _.totalSlides,
                        _ = _.visibleSlides,
                        _ = {};
                      !0 === _ ||
                        _ <= _ ||
                        (37 === _ &&
                          (_.preventDefault(),
                          this.focus(),
                          (_.currentSlide = Math.max(0, _ - 1)),
                          (_.isPlaying = !1)),
                        39 === _ &&
                          (_.preventDefault(),
                          this.focus(),
                          (_.currentSlide = Math.min(_ - _, _ + 1)),
                          (_.isPlaying = !1)),
                        _.setStoreState(_));
                    },
                  },
                  {
                    key: "playForward",
                    value: function () {
                      var _ = this.props,
                        _ = _.carouselStore,
                        _ = _.currentSlide;
                      _.setStoreState({
                        currentSlide: this.forward() === _ ? 0 : this.forward(),
                      });
                    },
                  },
                  {
                    key: "playBackward",
                    value: function () {
                      var _ = this.props,
                        _ = _.carouselStore,
                        _ = _.currentSlide,
                        _ = _.totalSlides,
                        _ = _.visibleSlides;
                      _.setStoreState({
                        currentSlide:
                          this.backward() === _ ? _ - _ : this.backward(),
                      });
                    },
                  },
                  {
                    key: "play",
                    value: function () {
                      var _ = this.props.playDirection;
                      this.interval = setInterval(
                        "forward" === _ ? this.playForward : this.playBackward,
                        this.props.interval,
                      );
                    },
                  },
                  {
                    key: "stop",
                    value: function () {
                      window.clearInterval(this.interval),
                        (this.interval = null);
                    },
                  },
                  {
                    key: "lockScroll",
                    value: function () {
                      var _ = new _();
                      (this.scrollParent = _.getScrollParent(
                        this.sliderTrayElement,
                      )),
                        this.scrollParent &&
                          ((this.originalOverflow =
                            this.originalOverflow ||
                            this.scrollParent.style.overflow),
                          (this.scrollParent.style.overflow = "hidden"));
                    },
                  },
                  {
                    key: "unlockScroll",
                    value: function () {
                      this.scrollParent &&
                        ((this.scrollParent.style.overflow =
                          this.originalOverflow),
                        (this.originalOverflow = null),
                        (this.scrollParent = null));
                    },
                  },
                  {
                    key: "blockWindowScroll",
                    value: function (_) {
                      this.state.preventingVerticalScroll &&
                        (_.preventDefault(), _.stopImmediatePropagation());
                    },
                  },
                  {
                    key: "computeCurrentSlide",
                    value: function () {
                      var _ = _.slideSizeInPx(
                          this.props.orientation,
                          this.sliderTrayElement.clientWidth,
                          this.sliderTrayElement.clientHeight,
                          this.props.totalSlides,
                        ),
                        _ = _.slidesMoved(
                          this.props.moveThreshold,
                          this.props.orientation,
                          this.state.deltaX,
                          this.state.deltaY,
                          _,
                          this.props.dragStep,
                        ),
                        _ =
                          this.props.totalSlides -
                          Math.min(
                            this.props.totalSlides,
                            this.props.visibleSlides,
                          ),
                        _ = _({
                          min: 0,
                          max: _,
                          _: this.props.currentSlide + _,
                        });
                      this.props.infinite &&
                        (this.props.currentSlide >= _ && _ > 0 && (_ = 0),
                        0 === this.props.currentSlide && _ < 0 && (_ = _)),
                        this.props.carouselStore.setStoreState({
                          currentSlide: _,
                        });
                    },
                  },
                  {
                    key: "focus",
                    value: function () {
                      this.sliderElement.focus();
                    },
                  },
                  {
                    key: "handleOnTouchEnd",
                    value: function (_) {
                      this.endTouchMove(), this.callCallback("onTouchEnd", _);
                    },
                  },
                  {
                    key: "handleOnTouchCancel",
                    value: function (_) {
                      this.endTouchMove(),
                        this.callCallback("onTouchCancel", _);
                    },
                  },
                  {
                    key: "endTouchMove",
                    value: function () {
                      this.props.touchEnabled && this.fakeOnDragEnd();
                    },
                  },
                  {
                    key: "renderMasterSpinner",
                    value: function () {
                      var _ = this.props,
                        _ = _.hasMasterSpinner,
                        _ = _.masterSpinnerFinished,
                        _ = _.spinner;
                      return _ && !_
                        ? ("function" == typeof this.props.onMasterSpinner &&
                            this.props.onMasterSpinner(),
                          _.createElement(
                            "div",
                            {
                              className: _([
                                _.masterSpinnerContainer,
                                "carousel__master-spinner-container",
                              ]),
                            },
                            _ && _(),
                            !_ && _.createElement(_, null),
                          ))
                        : null;
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var _ = this,
                        _ = this.props,
                        _ = _.ariaLabel,
                        _ = (_.carouselStore, _.children),
                        _ = _.className,
                        _ = _.classNameAnimation,
                        _ = _.classNameTray,
                        _ = _.classNameTrayWrap,
                        _ = _.currentSlide,
                        _ = _.disableAnimation,
                        _ =
                          (_.disableKeyboard,
                          _.dragEnabled,
                          _.hasMasterSpinner,
                          _.interval,
                          _.isPageScrollLocked,
                          _.isPlaying,
                          _.lockOnWindowScroll,
                          _.masterSpinnerFinished,
                          _.moveThreshold,
                          _.naturalSlideHeight),
                        _ = _.naturalSlideWidth,
                        _ = (_.onMasterSpinner, _.orientation),
                        _ =
                          (_.playDirection,
                          _.privateUnDisableAnimation,
                          _.slideSize),
                        _ = _.slideTraySize,
                        _ = (_.spinner, _.style),
                        _ = (_.totalSlides, _.touchEnabled),
                        _ = _.trayProps,
                        _ = _.trayTag,
                        _ = _.visibleSlides,
                        _ = _.isIntrinsicHeight,
                        _ = _(_, _),
                        _ = _({}, _),
                        _ = {};
                      "vertical" === _ &&
                        ((_.height = 0),
                        (_.paddingBottom = _((100 * _ * _) / _)),
                        (_.width = _(100)));
                      var _ = {},
                        _ = _(_ * _ * -1);
                      (this.state.isBeingTouchDragged ||
                        this.state.isBeingMouseDragged ||
                        _) &&
                        (_.transition = "none"),
                        _ && ((_.display = "flex"), (_.alignItems = "stretch")),
                        "vertical" === _
                          ? ((_.transform = "translateY("
                              .concat(_, ") translateY(")
                              .concat(this.state.deltaY, "px)")),
                            (_.width = _(100)),
                            (_.flexDirection = "column"))
                          : ((_.width = _(_)),
                            (_.transform = "translateX("
                              .concat(_, ") translateX(")
                              .concat(this.state.deltaX, "px)")),
                            (_.flexDirection = "row"));
                      var _ = _([
                          "vertical" === _
                            ? _.verticalSlider
                            : _.horizontalSlider,
                          !_ && _.touchDisabled,
                          "carousel__slider",
                          "vertical" === _
                            ? "carousel__slider--vertical"
                            : "carousel__slider--horizontal",
                          _,
                        ]),
                        _ = _([
                          _.sliderTrayWrap,
                          "carousel__slider-tray-wrapper",
                          "vertical" === _
                            ? _.verticalSlideTrayWrap
                            : _.horizontalTrayWrap,
                          "vertical" === _
                            ? "carousel__slider-tray-wrap--vertical"
                            : "carousel__slider-tray-wrap--horizontal",
                          _,
                        ]),
                        _ = _([
                          _.sliderTray,
                          _ || _.sliderAnimation,
                          "carousel__slider-tray",
                          "vertical" === _ ? _.verticalTray : _.horizontalTray,
                          "vertical" === _
                            ? "carousel__slider-tray--vertical"
                            : "carousel__slider-tray--horizontal",
                          _,
                        ]),
                        _ =
                          (_.dragStep,
                          _.step,
                          _.infinite,
                          _.preventVerticalScrollOnTouch,
                          _.preventingVerticalScroll,
                          _.horizontalPixelThreshold,
                          _.verticalPixelThreshold,
                          _(_, _)),
                        _ =
                          (_.className,
                          _.onClickCapture,
                          _.onMouseDown,
                          _.onTouchCancel,
                          _.onTouchEnd,
                          _.onTouchMove,
                          _.onTouchStart,
                          _.ref,
                          _.style,
                          _(_, _));
                      return _.createElement(
                        "div",
                        _(
                          {
                            ref: function (_) {
                              _.sliderElement = _;
                            },
                            className: _,
                            "aria-live": "polite",
                            "aria-label": _,
                            role: this.props.role,
                            style: _,
                            onKeyDown: this.handleOnKeyDown,
                          },
                          _,
                        ),
                        _.createElement(
                          "div",
                          {
                            className: _,
                            style: _,
                          },
                          _.createElement(
                            _,
                            _(
                              {
                                ref: this.getSliderRef,
                                className: _,
                                style: _,
                                onTouchStart: this.handleOnTouchStart,
                                onTouchMove: this.handleOnTouchMove,
                                onTouchEnd: this.handleOnTouchEnd,
                                onTouchCancel: this.handleOnTouchCancel,
                                onMouseDown: this.handleOnMouseDown,
                                onClickCapture: this.handleOnClickCapture,
                              },
                              _,
                            ),
                            _,
                          ),
                          this.renderMasterSpinner(),
                        ),
                      );
                    },
                  },
                ],
                [
                  {
                    key: "slideSizeInPx",
                    value: function (_, _, _, _) {
                      return ("horizontal" === _ ? _ : _) / _;
                    },
                  },
                  {
                    key: "slidesMoved",
                    value: function (_, _, _, _, _, _) {
                      var _ = "horizontal" === _ ? _ : _,
                        _ = Math.abs(Math.round(_ / _)),
                        _ = Math.abs(_) >= _ * _ ? _ : 0,
                        _ = Math.max(_, _);
                      if (_ < 0) return _;
                      var _ = -_;
                      return 0 === _ ? 0 : _;
                    },
                  },
                ],
              ),
              _
            );
          })(_.Component)),
          _(_, "propTypes", {
            ariaLabel: _.string,
            carouselStore: _.object.isRequired,
            children: _.node.isRequired,
            className: _.string,
            classNameAnimation: _.string,
            classNameTray: _.string,
            classNameTrayWrap: _.string,
            currentSlide: _.number.isRequired,
            disableAnimation: _.bool,
            disableKeyboard: _.bool,
            dragEnabled: _.bool.isRequired,
            dragStep: _.number,
            hasMasterSpinner: _.bool.isRequired,
            infinite: _.bool,
            interval: _.number.isRequired,
            isPageScrollLocked: _.bool.isRequired,
            isPlaying: _.bool.isRequired,
            lockOnWindowScroll: _.bool.isRequired,
            preventVerticalScrollOnTouch: _.bool,
            horizontalPixelThreshold: _.number,
            verticalPixelThreshold: _.number,
            masterSpinnerFinished: _.bool.isRequired,
            moveThreshold: _.number,
            naturalSlideHeight: _.number.isRequired,
            naturalSlideWidth: _.number.isRequired,
            onMasterSpinner: _.func,
            orientation: _.orientation.isRequired,
            playDirection: _.direction.isRequired,
            privateUnDisableAnimation: _.bool,
            role: _.string,
            slideSize: _.number.isRequired,
            slideTraySize: _.number.isRequired,
            spinner: _.func,
            step: _.number.isRequired,
            style: _.object,
            totalSlides: _.number.isRequired,
            touchEnabled: _.bool.isRequired,
            trayProps: _.shape({
              className: _.string,
              onClickCapture: _.func,
              onMouseDown: _.func,
              onTouchCancel: _.func,
              onTouchEnd: _.func,
              onTouchMove: _.func,
              onTouchStart: _.func,
              ref: _.shape({}),
              style: _.string,
            }),
            trayTag: _.string,
            visibleSlides: _.number,
            isIntrinsicHeight: _.bool,
          }),
          _(_, "defaultProps", {
            ariaLabel: "slider",
            className: null,
            classNameAnimation: null,
            classNameTray: null,
            classNameTrayWrap: null,
            disableAnimation: !1,
            disableKeyboard: !1,
            dragStep: 1,
            infinite: !1,
            preventVerticalScrollOnTouch: !0,
            horizontalPixelThreshold: 15,
            verticalPixelThreshold: 10,
            moveThreshold: 0.1,
            onMasterSpinner: null,
            privateUnDisableAnimation: !1,
            role: "listbox",
            spinner: null,
            style: {},
            trayProps: {},
            trayTag: "div",
            visibleSlides: 1,
            isIntrinsicHeight: !1,
          }),
          _),
        _ = _(_, function (_) {
          return {
            currentSlide: _.currentSlide,
            disableAnimation: _.disableAnimation,
            privateUnDisableAnimation: _.privateUnDisableAnimation,
            disableKeyboard: _.disableKeyboard,
            dragEnabled: _.dragEnabled,
            hasMasterSpinner: _.hasMasterSpinner,
            infinite: _.infinite,
            interval: _.interval,
            isPageScrollLocked: _.isPageScrollLocked,
            isPlaying: _.isPlaying,
            lockOnWindowScroll: _.lockOnWindowScroll,
            preventingVerticalScroll: _.preventingVerticalScroll,
            masterSpinnerFinished: _.masterSpinnerFinished,
            naturalSlideHeight: _.naturalSlideHeight,
            naturalSlideWidth: _.naturalSlideWidth,
            orientation: _.orientation,
            playDirection: _.playDirection,
            slideSize: _.slideSize,
            slideTraySize: _.slideTraySize,
            step: _.step,
            dragStep: _.dragStep,
            totalSlides: _.totalSlides,
            touchEnabled: _.touchEnabled,
            visibleSlides: _.visibleSlides,
            isIntrinsicHeight: _.isIntrinsicHeight,
          };
        });
    },
  },
]);
