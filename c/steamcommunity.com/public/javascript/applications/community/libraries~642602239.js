"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [9536],
  {
    chunkid: (_, _) => {
      var _,
        _ = Symbol.for("react.element"),
        _ = Symbol.for("react.portal"),
        _ = Symbol.for("react.fragment"),
        _ = Symbol.for("react.strict_mode"),
        _ = Symbol.for("react.profiler"),
        _ = Symbol.for("react.provider"),
        _ = Symbol.for("react.context"),
        _ = Symbol.for("react.server_context"),
        _ = Symbol.for("react.forward_ref"),
        _ = Symbol.for("react.suspense"),
        _ = Symbol.for("react.suspense_list"),
        _ = Symbol.for("react.memo"),
        _ = Symbol.for("react.lazy"),
        _ = Symbol.for("react.offscreen");
      function _(_) {
        if ("object" == typeof _ && null !== _) {
          var _ = _.$$typeof;
          switch (_) {
            case _:
              switch ((_ = _.type)) {
                case _:
                case _:
                case _:
                case _:
                case _:
                  return _;
                default:
                  switch ((_ = _ && _.$$typeof)) {
                    case _:
                    case _:
                    case _:
                    case _:
                    case _:
                    case _:
                      return _;
                    default:
                      return _;
                  }
              }
            case _:
              return _;
          }
        }
      }
      (_ = Symbol.for("react.module.reference")),
        (_.isForwardRef = function (_) {
          return _(_) === _;
        });
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      module.exports = __webpack_require__("chunkid");
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = !(
          "undefined" == typeof window ||
          !window.document ||
          !window.document.createElement
        );
      var _ = void 0;
      function _() {
        return (
          void 0 === _ &&
            (_ = (function () {
              if (!_) return !1;
              if (
                !window.addEventListener ||
                !window.removeEventListener ||
                !Object.defineProperty
              )
                return !1;
              var _ = !1;
              try {
                var _ = Object.defineProperty({}, "passive", {
                    get: function () {
                      _ = !0;
                    },
                  }),
                  _ = function () {};
                window.addEventListener("testPassiveEventSupport", _, _),
                  window.removeEventListener("testPassiveEventSupport", _, _);
              } catch (_) {}
              return _;
            })()),
          _
        );
      }
      function _(_) {
        _.handlers === _.nextHandlers && (_.nextHandlers = _.handlers.slice());
      }
      function _(_) {
        (this.target = _), (this.events = {});
      }
      (_.prototype.getEventHandlers = function (_, _) {
        var _,
          _ =
            String(_) +
            " " +
            String(
              (_ = _)
                ? !0 === _
                  ? 100
                  : (_.capture << 0) + (_.passive << 1) + (_.once << 2)
                : 0,
            );
        return (
          this.events[_] ||
            ((this.events[_] = {
              handlers: [],
              handleEvent: void 0,
            }),
            (this.events[_].nextHandlers = this.events[_].handlers)),
          this.events[_]
        );
      }),
        (_.prototype.handleEvent = function (_, _, _) {
          var _ = this.getEventHandlers(_, _);
          (_.handlers = _.nextHandlers),
            _.handlers.forEach(function (_) {
              _ && _(_);
            });
        }),
        (_.prototype.add = function (_, _, _) {
          var _ = this,
            _ = this.getEventHandlers(_, _);
          _(_),
            0 === _.nextHandlers.length &&
              ((_.handleEvent = this.handleEvent.bind(this, _, _)),
              this.target.addEventListener(_, _.handleEvent, _)),
            _.nextHandlers.push(_);
          var _ = !0;
          return function () {
            if (_) {
              (_ = !1), _(_);
              var _ = _.nextHandlers.indexOf(_);
              _.nextHandlers.splice(_, 1),
                0 === _.nextHandlers.length &&
                  (_.target &&
                    _.target.removeEventListener(_, _.handleEvent, _),
                  (_.handleEvent = void 0));
            }
          };
        });
      var _ = "__consolidated_events_handlers__";
      function _(_, _, _, _) {
        _[_] || (_[_] = new _(_));
        var _ = (function (_) {
          if (_) return _() ? _ : !!_.capture;
        })(_);
        return _[_].add(_, _, _);
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_, _) {
        var _,
          _ =
            ((_ = _),
            !isNaN(parseFloat(_)) && isFinite(_)
              ? parseFloat(_)
              : "px" === __webpack_require__.slice(-2)
                ? parseFloat(__webpack_require__.slice(0, -2))
                : void 0);
        if ("number" == typeof _) return _;
        var _ = (function (_) {
          if ("%" === _.slice(-1)) return parseFloat(_.slice(0, -1)) / 100;
        })(_);
        return "number" == typeof _ ? _ * _ : void 0;
      }
      var _ = "above",
        _ = "inside",
        _ = "below",
        _ = "invisible";
      function _(_) {
        return "string" == typeof _.type;
      }
      var _;
      var _ = [];
      function _(_) {
        _.push(_),
          _ ||
            (_ = setTimeout(function () {
              var _;
              for (_ = null; (_ = _.shift()); ) _();
            }, 0));
        var _ = !0;
        return function () {
          if (_) {
            _ = !1;
            var _ = _.indexOf(_);
            -1 !== _ &&
              (_.splice(_, 1), !_.length && _ && (clearTimeout(_), (_ = null)));
          }
        };
      }
      var _ = "undefined" != typeof window,
        _ = {
          debug: !1,
          scrollableAncestor: void 0,
          children: void 0,
          topOffset: "0px",
          bottomOffset: "0px",
          horizontal: !1,
          onEnter: function () {},
          onLeave: function () {},
          onPositionChange: function () {},
          fireOnRapidScroll: !0,
        },
        _ = (function (_) {
          function _(_) {
            var _;
            return (
              ((_ = _.call(this, _) || this).refElement = function (_) {
                _._ref = _;
              }),
              _
            );
          }
          (0, _._)(_, _);
          var _ = _.prototype;
          return (
            (_.componentDidMount = function () {
              var _ = this;
              _ &&
                (this.cancelOnNextTick = _(function () {
                  _.cancelOnNextTick = null;
                  var _ = _.props,
                    _ = _.children;
                  _.debug;
                  !(function (_, _) {
                    if (_ && !_(_) && !_)
                      throw new Error(
                        "<Waypoint> needs a DOM element to compute boundaries. The child you passed is neither a DOM element (e.g. <div>) nor does it use the innerRef prop.\n\nSee https://goo.gl/LrBNgw for more info.",
                      );
                  })(_, _._ref),
                    (_._handleScroll = _._handleScroll.bind(_)),
                    (_.scrollableAncestor = _._findScrollableAncestor()),
                    (_.scrollEventListenerUnsubscribe = _(
                      _.scrollableAncestor,
                      "scroll",
                      _._handleScroll,
                      {
                        passive: !0,
                      },
                    )),
                    (_.resizeEventListenerUnsubscribe = _(
                      window,
                      "resize",
                      _._handleScroll,
                      {
                        passive: !0,
                      },
                    )),
                    _._handleScroll(null);
                }));
            }),
            (_.componentDidUpdate = function () {
              var _ = this;
              _ &&
                this.scrollableAncestor &&
                (this.cancelOnNextTick ||
                  (this.cancelOnNextTick = _(function () {
                    (_.cancelOnNextTick = null), _._handleScroll(null);
                  })));
            }),
            (_.componentWillUnmount = function () {
              _ &&
                (this.scrollEventListenerUnsubscribe &&
                  this.scrollEventListenerUnsubscribe(),
                this.resizeEventListenerUnsubscribe &&
                  this.resizeEventListenerUnsubscribe(),
                this.cancelOnNextTick && this.cancelOnNextTick());
            }),
            (_._findScrollableAncestor = function () {
              var _ = this.props,
                _ = _.horizontal,
                _ = _.scrollableAncestor;
              if (_)
                return (function (_) {
                  return "window" === _ ? __webpack_require__._.window : _;
                })(_);
              for (var _ = this._ref; _.parentNode; ) {
                if ((_ = _.parentNode) === document.body) return window;
                var _ = window.getComputedStyle(_),
                  _ =
                    (_
                      ? _.getPropertyValue("overflow-x")
                      : _.getPropertyValue("overflow-y")) ||
                    _.getPropertyValue("overflow");
                if ("auto" === _ || "scroll" === _ || "overlay" === _) return _;
              }
              return window;
            }),
            (_._handleScroll = function (_) {
              if (this._ref) {
                var _ = this._getBounds(),
                  _ = (function (_) {
                    return _.viewportBottom - _.viewportTop == 0
                      ? _
                      : (_.viewportTop <= _.waypointTop &&
                            _.waypointTop <= _.viewportBottom) ||
                          (_.viewportTop <= _.waypointBottom &&
                            _.waypointBottom <= _.viewportBottom) ||
                          (_.waypointTop <= _.viewportTop &&
                            _.viewportBottom <= _.waypointBottom)
                        ? _
                        : _.viewportBottom < _.waypointTop
                          ? _
                          : _.waypointTop < _.viewportTop
                            ? _
                            : _;
                  })(_),
                  _ = this._previousPosition,
                  _ = this.props,
                  _ = (_.debug, _.onPositionChange),
                  _ = _.onEnter,
                  _ = _.onLeave,
                  _ = _.fireOnRapidScroll;
                if (((this._previousPosition = _), _ !== _)) {
                  var _ = {
                    currentPosition: _,
                    previousPosition: _,
                    event: _,
                    waypointTop: _.waypointTop,
                    waypointBottom: _.waypointBottom,
                    viewportTop: _.viewportTop,
                    viewportBottom: _.viewportBottom,
                  };
                  _.call(this, _),
                    _ === _ ? _.call(this, _) : _ === _ && _.call(this, _),
                    _ &&
                      ((_ === _ && _ === _) || (_ === _ && _ === _)) &&
                      (_.call(this, {
                        currentPosition: _,
                        previousPosition: _,
                        event: _,
                        waypointTop: _.waypointTop,
                        waypointBottom: _.waypointBottom,
                        viewportTop: _.viewportTop,
                        viewportBottom: _.viewportBottom,
                      }),
                      _.call(this, {
                        currentPosition: _,
                        previousPosition: _,
                        event: _,
                        waypointTop: _.waypointTop,
                        waypointBottom: _.waypointBottom,
                        viewportTop: _.viewportTop,
                        viewportBottom: _.viewportBottom,
                      }));
                }
              }
            }),
            (_._getBounds = function () {
              var _,
                _,
                _ = this.props,
                _ = _.horizontal,
                _ = (_.debug, this._ref.getBoundingClientRect()),
                _ = _.left,
                _ = _.top,
                _ = _.right,
                _ = _.bottom,
                _ = _ ? _ : _,
                _ = _ ? _ : _;
              this.scrollableAncestor === window
                ? ((_ = _ ? window.innerWidth : window.innerHeight), (_ = 0))
                : ((_ = _
                    ? this.scrollableAncestor.offsetWidth
                    : this.scrollableAncestor.offsetHeight),
                  (_ = _
                    ? this.scrollableAncestor.getBoundingClientRect().left
                    : this.scrollableAncestor.getBoundingClientRect().top));
              var _ = this.props,
                _ = _.bottomOffset;
              return {
                waypointTop: _,
                waypointBottom: _,
                viewportTop: _ + _(_.topOffset, _),
                viewportBottom: _ + _ - _(_, _),
              };
            }),
            (_.render = function () {
              var _ = this,
                _ = this.props.children;
              if (!_)
                return _.createElement("span", {
                  ref: this.refElement,
                  style: {
                    fontSize: 0,
                  },
                });
              if (_(_) || (0, _.isForwardRef)(_)) {
                return _.cloneElement(_, {
                  ref: function (_) {
                    _.refElement(_),
                      _.ref &&
                        ("function" == typeof _.ref
                          ? _.ref(_)
                          : (_.ref.current = _));
                  },
                });
              }
              return _.cloneElement(_, {
                innerRef: this.refElement,
              });
            }),
            _
          );
        })(_.PureComponent);
      (_.above = _),
        (_.below = _),
        (_.inside = _),
        (_.invisible = _),
        (_.defaultProps = _),
        (_.displayName = "Waypoint");
    },
  },
]);
