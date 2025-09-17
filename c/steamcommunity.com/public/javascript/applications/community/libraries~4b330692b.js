"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [5633],
  {
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
      });
      var _ = _(),
        _ = (_) => _(_, _),
        _ = _();
      _.write = (_) => _(_, _);
      var _ = _();
      _.onStart = (_) => _(_, _);
      var _ = _();
      _.onFrame = (_) => _(_, _);
      var _ = _();
      _.onFinish = (_) => _(_, _);
      var _ = [];
      _.setTimeout = (_, _) => {
        const _ = _.now() + _,
          _ = () => {
            const _ = _.findIndex((_) => _.cancel == _);
            ~_ && _.splice(_, 1), (_ -= ~_ ? 1 : 0);
          },
          _ = {
            time: _,
            handler: _,
            cancel: _,
          };
        return _.splice(_(_), 0, _), (_ += 1), _(), _;
      };
      var _ = (_) => ~(~_.findIndex((_) => _.time > _) || ~_.length);
      (_.cancel = (_) => {
        _.delete(_), _.delete(_), _.delete(_), _.delete(_), _.delete(_);
      }),
        (_.sync = (_) => {
          (_ = !0), _.batchedUpdates(_), (_ = !1);
        }),
        (_.throttle = (_) => {
          let _;
          function _() {
            try {
              _(..._);
            } finally {
              _ = null;
            }
          }
          function _(..._) {
            (_ = _), _.onStart(_);
          }
          return (
            (_.handler = _),
            (_.cancel = () => {
              _.delete(_), (_ = null);
            }),
            _
          );
        });
      var _ =
        "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      (_.use = (_) => (_ = _)),
        (_.now =
          "undefined" != typeof performance
            ? () => performance.now()
            : Date.now),
        (_.batchedUpdates = (_) => _()),
        (_.catch = console.error),
        (_.frameLoop = "always"),
        (_.advance = () => {
          "demand" !== _.frameLoop
            ? console.warn(
                "Cannot call the manual advancement of rafz whilst frameLoop is not set as demand",
              )
            : _();
        });
      var _ = -1,
        _ = 0,
        _ = !1;
      function _(_, _) {
        _ ? (_.delete(_), _(0)) : (_.add(_), _());
      }
      function _() {
        _ < 0 && ((_ = 0), "demand" !== _.frameLoop && _(_));
      }
      function _() {
        ~_ && (_(_), _.batchedUpdates(_));
      }
      function _() {
        const _ = _;
        _ = _.now();
        const _ = _(_);
        _ && (_(_.splice(0, _), (_) => _.handler()), (_ -= _)),
          _
            ? (_.flush(),
              _.flush(_ ? Math.min(64, _ - _) : 16.667),
              _.flush(),
              _.flush(),
              _.flush())
            : (_ = -1);
      }
      function _() {
        let _ = new Set(),
          _ = _;
        return {
          add(_) {
            (_ += _ != _ || _.has(_) ? 0 : 1), _.add(_);
          },
          delete: (_) => ((_ -= _ == _ && _.has(_) ? 1 : 0), _.delete(_)),
          flush(_) {
            _.size &&
              ((_ = new Set()),
              (_ -= _.size),
              _(_, (_) => _(_) && _.add(_)),
              (_ += _.size),
              (_ = _));
          },
        };
      }
      function _(_, _) {
        _.forEach((_) => {
          try {
            _(_);
          } catch (_) {
            _.catch(_);
          }
        });
      }
      var _ = __webpack_require__("chunkid"),
        _ = Object.defineProperty,
        _ = {};
      function _() {}
      ((_, _) => {
        for (var _ in _)
          _(_, _, {
            get: _[_],
            enumerable: !0,
          });
      })(_, {
        assign: () => _,
        colors: () => _,
        createStringInterpolator: () => _,
        skipAnimation: () => _,
        _: () => _,
        willAdvance: () => _,
      });
      var _ = {
        arr: Array.isArray,
        obj: (_) => !!_ && "Object" === _.constructor.name,
        fun: (_) => "function" == typeof _,
        str: (_) => "string" == typeof _,
        num: (_) => "number" == typeof _,
        und: (_) => void 0 === _,
      };
      function _(_, _) {
        if (_.arr(_)) {
          if (!_.arr(_) || _.length !== _.length) return !1;
          for (let _ = 0; _ < _.length; _++) if (_[_] !== _[_]) return !1;
          return !0;
        }
        return _ === _;
      }
      var _ = (_, _) => _.forEach(_);
      function _(_, _, _) {
        if (_.arr(_))
          for (let _ = 0; _ < _.length; _++) _.call(_, _[_], `${_}`);
        else for (const _ in _) _.hasOwnProperty(_) && _.call(_, _[_], _);
      }
      var _ = (_) => (_.und(_) ? [] : _.arr(_) ? _ : [_]);
      function _(_, _) {
        if (_.size) {
          const _ = Array.from(_);
          _.clear(), _(_, _);
        }
      }
      var _,
        _,
        _ = (_, ..._) => _(_, (_) => _(..._)),
        _ = () =>
          "undefined" == typeof window ||
          !window.navigator ||
          /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        _ = null,
        _ = !1,
        _ = _,
        _ = (_) => {
          _._ && (_ = _._),
            _.now && (_.now = _.now),
            void 0 !== _.colors && (_ = _.colors),
            null != _.skipAnimation && (_ = _.skipAnimation),
            _.createStringInterpolator && (_ = _.createStringInterpolator),
            _.requestAnimationFrame && _.use(_.requestAnimationFrame),
            _.batchedUpdates && (_.batchedUpdates = _.batchedUpdates),
            _.willAdvance && (_ = _.willAdvance),
            _.frameLoop && (_.frameLoop = _.frameLoop);
        },
        _ = new Set(),
        _ = [],
        _ = [],
        _ = 0,
        _ = {
          get idle() {
            return !_.size && !_.length;
          },
          start(_) {
            _ > _.priority ? (_.add(_), _.onStart(_)) : (_(_), _(_));
          },
          advance: _,
          sort(_) {
            if (_) _.onFrame(() => _.sort(_));
            else {
              const _ = _.indexOf(_);
              ~_ && (_.splice(_, 1), _(_));
            }
          },
          clear() {
            (_ = []), _.clear();
          },
        };
      function _() {
        _.forEach(_), _.clear(), _(_);
      }
      function _(_) {
        _.includes(_) || _(_);
      }
      function _(_) {
        _.splice(
          (function (_, _) {
            const _ = _.findIndex(_);
            return _ < 0 ? _.length : _;
          })(_, (_) => _.priority > _.priority),
          0,
          _,
        );
      }
      function _(_) {
        const _ = _;
        for (let _ = 0; _ < _.length; _++) {
          const _ = _[_];
          (_ = _.priority), _.idle || (_(_), _.advance(_), _.idle || _.push(_));
        }
        return (_ = 0), ((_ = _).length = 0), (_ = _).length > 0;
      }
      var _ = "[-+]?\\d*\\.?\\d+",
        _ = _ + "%";
      function _(..._) {
        return "\\(\\s*(" + _.join(")\\s*,\\s*(") + ")\\s*\\)";
      }
      var _ = new RegExp("rgb" + _(_, _, _)),
        _ = new RegExp("rgba" + _(_, _, _, _)),
        _ = new RegExp("hsl" + _(_, _, _)),
        _ = new RegExp("hsla" + _(_, _, _, _)),
        _ = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        _ =
          /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        _ = /^#([0-9a-fA-F]{6})$/,
        _ = /^#([0-9a-fA-F]{8})$/;
      function _(_, _, _) {
        return (
          _ < 0 && (_ += 1),
          _ > 1 && (_ -= 1),
          _ < 1 / 6
            ? _ + 6 * (_ - _) * _
            : _ < 0.5
              ? _
              : _ < 2 / 3
                ? _ + (_ - _) * (2 / 3 - _) * 6
                : _
        );
      }
      function _(_, _, _) {
        const _ = _ < 0.5 ? _ * (1 + _) : _ + _ - _ * _,
          _ = 2 * _ - _,
          _ = _(_, _, _ + 1 / 3),
          _ = _(_, _, _),
          _ = _(_, _, _ - 1 / 3);
        return (
          (Math.round(255 * _) << 24) |
          (Math.round(255 * _) << 16) |
          (Math.round(255 * _) << 8)
        );
      }
      function _(_) {
        const _ = parseInt(_, 10);
        return _ < 0 ? 0 : _ > 255 ? 255 : _;
      }
      function _(_) {
        return (((parseFloat(_) % 360) + 360) % 360) / 360;
      }
      function _(_) {
        const _ = parseFloat(_);
        return _ < 0 ? 0 : _ > 1 ? 255 : Math.round(255 * _);
      }
      function _(_) {
        const _ = parseFloat(_);
        return _ < 0 ? 0 : _ > 100 ? 1 : _ / 100;
      }
      function _(_) {
        let _ = (function (_) {
          let _;
          return "number" == typeof _
            ? _ >>> 0 === _ && _ >= 0 && _ <= 4294967295
              ? _
              : null
            : (_ = _.exec(_))
              ? parseInt(_[1] + "ff", 16) >>> 0
              : _ && void 0 !== _[_]
                ? _[_]
                : (_ = _.exec(_))
                  ? ((_(_[1]) << 24) |
                      (_(_[2]) << 16) |
                      (_(_[3]) << 8) |
                      255) >>>
                    0
                  : (_ = _.exec(_))
                    ? ((_(_[1]) << 24) |
                        (_(_[2]) << 16) |
                        (_(_[3]) << 8) |
                        _(_[4])) >>>
                      0
                    : (_ = _.exec(_))
                      ? parseInt(
                          _[1] + _[1] + _[2] + _[2] + _[3] + _[3] + "ff",
                          16,
                        ) >>> 0
                      : (_ = _.exec(_))
                        ? parseInt(_[1], 16) >>> 0
                        : (_ = _.exec(_))
                          ? parseInt(
                              _[1] +
                                _[1] +
                                _[2] +
                                _[2] +
                                _[3] +
                                _[3] +
                                _[4] +
                                _[4],
                              16,
                            ) >>> 0
                          : (_ = _.exec(_))
                            ? (255 | _(_(_[1]), _(_[2]), _(_[3]))) >>> 0
                            : (_ = _.exec(_))
                              ? (_(_(_[1]), _(_[2]), _(_[3])) | _(_[4])) >>> 0
                              : null;
        })(_);
        if (null === _) return _;
        _ = _ || 0;
        return `rgba(${(4278190080 & _) >>> 24}, ${(16711680 & _) >>> 16}, ${(65280 & _) >>> 8}, ${(255 & _) / 255})`;
      }
      var _ = (_, _, _) => {
        if (_.fun(_)) return _;
        if (_.arr(_))
          return _({
            range: _,
            output: _,
            extrapolate: _,
          });
        if (_.str(_.output[0])) return _(_);
        const _ = _,
          _ = _.output,
          _ = _.range || [0, 1],
          _ = _.extrapolateLeft || _.extrapolate || "extend",
          _ = _.extrapolateRight || _.extrapolate || "extend",
          _ = _.easing || ((_) => _);
        return (_) => {
          const _ = (function (_, _) {
            for (var _ = 1; _ < _.length - 1 && !(_[_] >= _); ++_);
            return _ - 1;
          })(_, _);
          return (function (_, _, _, _, _, _, _, _, _) {
            let _ = _ ? _(_) : _;
            if (_ < _) {
              if ("identity" === _) return _;
              "clamp" === _ && (_ = _);
            }
            if (_ > _) {
              if ("identity" === _) return _;
              "clamp" === _ && (_ = _);
            }
            if (_ === _) return _;
            if (_ === _) return _ <= _ ? _ : _;
            _ === -1 / 0
              ? (_ = -_)
              : _ === 1 / 0
                ? (_ -= _)
                : (_ = (_ - _) / (_ - _));
            (_ = _(_)),
              _ === -1 / 0
                ? (_ = -_)
                : _ === 1 / 0
                  ? (_ += _)
                  : (_ = _ * (_ - _) + _);
            return _;
          })(_, _[_], _[_ + 1], _[_], _[_ + 1], _, _, _, _.map);
        };
      };
      var _ = 1.70158,
        _ = 1.525 * _,
        _ = _ + 1,
        _ = (2 * Math._) / 3,
        _ = (2 * Math._) / 4.5,
        _ = (_) => {
          const _ = 7.5625,
            _ = 2.75;
          return _ < 1 / _
            ? _ * _ * _
            : _ < 2 / _
              ? _ * (_ -= 1.5 / _) * _ + 0.75
              : _ < 2.5 / _
                ? _ * (_ -= 2.25 / _) * _ + 0.9375
                : _ * (_ -= 2.625 / _) * _ + 0.984375;
        },
        _ = {
          linear: (_) => _,
          easeInQuad: (_) => _ * _,
          easeOutQuad: (_) => 1 - (1 - _) * (1 - _),
          easeInOutQuad: (_) =>
            _ < 0.5 ? 2 * _ * _ : 1 - Math.pow(-2 * _ + 2, 2) / 2,
          easeInCubic: (_) => _ * _ * _,
          easeOutCubic: (_) => 1 - Math.pow(1 - _, 3),
          easeInOutCubic: (_) =>
            _ < 0.5 ? 4 * _ * _ * _ : 1 - Math.pow(-2 * _ + 2, 3) / 2,
          easeInQuart: (_) => _ * _ * _ * _,
          easeOutQuart: (_) => 1 - Math.pow(1 - _, 4),
          easeInOutQuart: (_) =>
            _ < 0.5 ? 8 * _ * _ * _ * _ : 1 - Math.pow(-2 * _ + 2, 4) / 2,
          easeInQuint: (_) => _ * _ * _ * _ * _,
          easeOutQuint: (_) => 1 - Math.pow(1 - _, 5),
          easeInOutQuint: (_) =>
            _ < 0.5 ? 16 * _ * _ * _ * _ * _ : 1 - Math.pow(-2 * _ + 2, 5) / 2,
          easeInSine: (_) => 1 - Math.cos((_ * Math._) / 2),
          easeOutSine: (_) => Math.sin((_ * Math._) / 2),
          easeInOutSine: (_) => -(Math.cos(Math._ * _) - 1) / 2,
          easeInExpo: (_) => (0 === _ ? 0 : Math.pow(2, 10 * _ - 10)),
          easeOutExpo: (_) => (1 === _ ? 1 : 1 - Math.pow(2, -10 * _)),
          easeInOutExpo: (_) =>
            0 === _
              ? 0
              : 1 === _
                ? 1
                : _ < 0.5
                  ? Math.pow(2, 20 * _ - 10) / 2
                  : (2 - Math.pow(2, -20 * _ + 10)) / 2,
          easeInCirc: (_) => 1 - Math.sqrt(1 - Math.pow(_, 2)),
          easeOutCirc: (_) => Math.sqrt(1 - Math.pow(_ - 1, 2)),
          easeInOutCirc: (_) =>
            _ < 0.5
              ? (1 - Math.sqrt(1 - Math.pow(2 * _, 2))) / 2
              : (Math.sqrt(1 - Math.pow(-2 * _ + 2, 2)) + 1) / 2,
          easeInBack: (_) => _ * _ * _ * _ - _ * _ * _,
          easeOutBack: (_) =>
            1 + _ * Math.pow(_ - 1, 3) + _ * Math.pow(_ - 1, 2),
          easeInOutBack: (_) =>
            _ < 0.5
              ? (Math.pow(2 * _, 2) * (7.189819 * _ - _)) / 2
              : (Math.pow(2 * _ - 2, 2) * ((_ + 1) * (2 * _ - 2) + _) + 2) / 2,
          easeInElastic: (_) =>
            0 === _
              ? 0
              : 1 === _
                ? 1
                : -Math.pow(2, 10 * _ - 10) * Math.sin((10 * _ - 10.75) * _),
          easeOutElastic: (_) =>
            0 === _
              ? 0
              : 1 === _
                ? 1
                : Math.pow(2, -10 * _) * Math.sin((10 * _ - 0.75) * _) + 1,
          easeInOutElastic: (_) =>
            0 === _
              ? 0
              : 1 === _
                ? 1
                : _ < 0.5
                  ? (-Math.pow(2, 20 * _ - 10) *
                      Math.sin((20 * _ - 11.125) * _)) /
                    2
                  : (Math.pow(2, -20 * _ + 10) *
                      Math.sin((20 * _ - 11.125) * _)) /
                      2 +
                    1,
          easeInBounce: (_) => 1 - _(1 - _),
          easeOutBounce: _,
          easeInOutBounce: (_) =>
            _ < 0.5 ? (1 - _(1 - 2 * _)) / 2 : (1 + _(2 * _ - 1)) / 2,
          steps:
            (_, _ = "end") =>
            (_) => {
              const _ =
                  (_ = "end" === _ ? Math.min(_, 0.999) : Math.max(_, 0.001)) *
                  _,
                _ = "end" === _ ? Math.floor(_) : Math.ceil(_);
              return (_ = 0), (_ = 1), (_ = _ / _), Math.min(Math.max(_, _), _);
              var _, _, _;
            },
        },
        _ = Symbol.for("FluidValue.get"),
        _ = Symbol.for("FluidValue.observers"),
        _ = (_) => Boolean(_ && _[_]),
        _ = (_) => (_ && _[_] ? _[_]() : _),
        _ = (_) => _[_] || null;
      function _(_, _) {
        const _ = _[_];
        _ &&
          __webpack_require__.forEach((_) => {
            !(function (_, _) {
              _.eventObserved ? _.eventObserved(_) : _(_);
            })(_, _);
          });
      }
      var _ = class {
          constructor(_) {
            if (!_ && !(_ = this.get)) throw Error("Unknown getter");
            _(this, _);
          }
        },
        _ = (_, _) => _(_, _, _);
      function _(_, _) {
        if (_[_]) {
          let _ = _[_];
          _ || _(_, _, (_ = new Set())),
            __webpack_require__.has(_) ||
              (__webpack_require__.add(_),
              _.observerAdded && _.observerAdded(_.size, _));
        }
        return _;
      }
      function _(_, _) {
        const _ = _[_];
        if (_ && __webpack_require__.has(_)) {
          const _ = _.size - 1;
          _ ? __webpack_require__.delete(_) : (_[_] = null),
            _.observerRemoved && _.observerRemoved(_, _);
        }
      }
      var _,
        _ = (_, _, _) =>
          Object.defineProperty(_, _, {
            value: _,
            writable: !0,
            configurable: !0,
          }),
        _ = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        _ =
          /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        _ = new RegExp(`(${_.source})(%|[a-z]+)`, "i"),
        _ = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        _ = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        _ = (_) => {
          const [_, __webpack_require__] = _(_);
          if (!_ || _()) return _;
          const _ = window
            .getComputedStyle(document.documentElement)
            .getPropertyValue(_);
          if (_) return _.trim();
          if (__webpack_require__ && __webpack_require__.startsWith("--")) {
            const _ = window
              .getComputedStyle(document.documentElement)
              .getPropertyValue(__webpack_require__);
            return _ || _;
          }
          return __webpack_require__ && _.test(__webpack_require__)
            ? _(__webpack_require__)
            : __webpack_require__ || _;
        },
        _ = (_) => {
          const _ = _.exec(_);
          if (!_) return [,];
          const [, __webpack_require__, _] = _;
          return [__webpack_require__, _];
        },
        _ = (_, _, _, _, _) =>
          `rgba(${Math.round(_)}, ${Math.round(_)}, ${Math.round(_)}, ${_})`,
        _ = (_) => {
          _ ||
            (_ = _
              ? new RegExp(`(${Object.keys(_).join("|")})(?!\\w)`, "g")
              : /^\b$/);
          const _ = _.output.map((_) =>
              _(_).replace(_, _).replace(_, _).replace(_, _),
            ),
            _ = _.map((_) => _.match(_).map(Number)),
            _ = _[0]
              .map((_, _) =>
                __webpack_require__.map((_) => {
                  if (!(_ in _))
                    throw Error(
                      'The arity of each "output" value must be equal',
                    );
                  return _[_];
                }),
              )
              .map((_) =>
                _({
                  ..._,
                  output: _,
                }),
              );
          return (_) => {
            const _ = !_.test(_[0]) && _.find((_) => _.test(_))?.replace(_, "");
            let _ = 0;
            return _[0]
              .replace(_, () => `${_[_++](_)}${_ || ""}`)
              .replace(_, _);
          };
        },
        _ = "react-spring: ",
        _ = (_) => {
          const _ = _;
          let _ = !1;
          if ("function" != typeof _)
            throw new TypeError(`${_}once requires a function parameter`);
          return (..._) => {
            _ || (_(..._), (_ = !0));
          };
        },
        _ = _(console.warn);
      var _ = _(console.warn);
      function _(_) {
        return (
          _.str(_) &&
          ("#" == _[0] || /\d/.test(_) || (!_() && _.test(_)) || _ in (_ || {}))
        );
      }
      var _ = _() ? _.useEffect : _.useLayoutEffect,
        _ = () => {
          const _ = (0, _.useRef)(!1);
          return (
            _(
              () => (
                (_.current = !0),
                () => {
                  _.current = !1;
                }
              ),
              [],
            ),
            _
          );
        };
      function _() {
        const _ = (0, _.useState)()[1],
          _ = _();
        return () => {
          _.current && _(Math.random());
        };
      }
      var _ = (_) => (0, _.useEffect)(_, _),
        _ = [];
      function _(_) {
        const _ = (0, _.useRef)(void 0);
        return (
          (0, _.useEffect)(() => {
            _.current = _;
          }),
          _.current
        );
      }
      var _ = Symbol.for("Animated:node"),
        _ = (_) => _ && _[_],
        _ = (_, _) => {
          return (
            (__webpack_require__ = _),
            (_ = _),
            (_ = _),
            Object.defineProperty(__webpack_require__, _, {
              value: _,
              writable: !0,
              configurable: !0,
            })
          );
          var _, _, _;
        },
        _ = (_) => _ && _[_] && _[_].getPayload(),
        _ = class {
          constructor() {
            _(this, this);
          }
          getPayload() {
            return this.payload || [];
          }
        },
        _ = class module extends _ {
          constructor(_) {
            super(),
              (this._value = _),
              (this.done = !0),
              (this.durationProgress = 0),
              _.num(this._value) && (this.lastPosition = this._value);
          }
          static create(_) {
            return new _(_);
          }
          getPayload() {
            return [this];
          }
          getValue() {
            return this._value;
          }
          setValue(_, _) {
            return (
              _.num(_) &&
                ((this.lastPosition = _),
                _ &&
                  ((_ = Math.round(_ / _) * _),
                  this.done && (this.lastPosition = _))),
              this._value !== _ && ((this._value = _), !0)
            );
          }
          reset() {
            const { done: _ } = this;
            (this.done = !1),
              _.num(this._value) &&
                ((this.elapsedTime = 0),
                (this.durationProgress = 0),
                (this.lastPosition = this._value),
                _ && (this.lastVelocity = null),
                (this._ = null));
          }
        },
        _ = class module extends _ {
          constructor(_) {
            super(0),
              (this._string = null),
              (this._toString = _({
                output: [_, _],
              }));
          }
          static create(_) {
            return new _(_);
          }
          getValue() {
            const _ = this._string;
            return null == _ ? (this._string = this._toString(this._value)) : _;
          }
          setValue(_) {
            if (_.str(_)) {
              if (_ == this._string) return !1;
              (this._string = _), (this._value = 1);
            } else {
              if (!super.setValue(_)) return !1;
              this._string = null;
            }
            return !0;
          }
          reset(_) {
            _ &&
              (this._toString = _({
                output: [this.getValue(), _],
              })),
              (this._value = 0),
              super.reset();
          }
        },
        _ = {
          dependencies: null,
        },
        _ = class extends _ {
          constructor(_) {
            super(), (this.source = _), this.setValue(_);
          }
          getValue(_) {
            const _ = {};
            return (
              _(this.source, (_, _) => {
                var _;
                (_ = _) && _[_] === _
                  ? (_[_] = __webpack_require__.getValue(_))
                  : _(_)
                    ? (_[_] = _(_))
                    : _ || (_[_] = _);
              }),
              _
            );
          }
          setValue(_) {
            (this.source = _), (this.payload = this._makePayload(_));
          }
          reset() {
            this.payload && _(this.payload, (_) => _.reset());
          }
          _makePayload(_) {
            if (_) {
              const _ = new Set();
              return _(_, this._addToPayload, _), Array.from(_);
            }
          }
          _addToPayload(_) {
            _.dependencies && _(_) && _.dependencies.add(_);
            const _ = _(_);
            _ && _(_, (_) => this.add(_));
          }
        },
        _ = class module extends _ {
          constructor(_) {
            super(_);
          }
          static create(_) {
            return new _(_);
          }
          getValue() {
            return this.source.map((_) => _.getValue());
          }
          setValue(_) {
            const _ = this.getPayload();
            return _.length == _.length
              ? _.map((_, _) => _.setValue(_[_])).some(Boolean)
              : (super.setValue(_.map(_)), !0);
          }
        };
      function _(_) {
        return (_(_) ? _ : _).create(_);
      }
      function _(_) {
        const _ = _(_);
        return _ ? _.constructor : _.arr(_) ? _ : _(_) ? _ : _;
      }
      var _ = (_, _) => {
          const _ = !_.fun(_) || (_.prototype && _.prototype.isReactComponent);
          return (0, _.forwardRef)((_, _) => {
            const _ = (0, _.useRef)(null),
              _ =
                _ &&
                (0, _.useCallback)(
                  (_) => {
                    _.current = (function (_, _) {
                      _ && (_.fun(_) ? _(_) : (_.current = _));
                      return _;
                    })(_, _);
                  },
                  [_],
                ),
              [_, _] = (function (_, _) {
                const _ = new Set();
                (_.dependencies = _),
                  _.style &&
                    (_ = {
                      ..._,
                      style: _.createAnimatedStyle(_.style),
                    });
                return (_ = new _(_)), (_.dependencies = null), [_, _];
              })(_, _),
              _ = _(),
              _ = () => {
                const _ = _.current;
                if (_ && !_) return;
                !1 === (!!_ && _.applyAnimatedValues(_, _.getValue(!0))) && _();
              },
              _ = new _(_, _),
              _ = (0, _.useRef)(void 0);
            _(
              () => (
                (_.current = _),
                _(_, (_) => _(_, _)),
                () => {
                  _.current &&
                    (_(_.current.deps, (_) => _(_, _.current)),
                    _.cancel(_.current.update));
                }
              ),
            ),
              (0, _.useEffect)(_, []),
              _(() => () => {
                const _ = _.current;
                _(_.deps, (_) => _(_, _));
              });
            const _ = _.getComponentProps(_.getValue());
            return _.createElement(_, {
              ..._,
              ref: _,
            });
          });
        },
        _ = class {
          constructor(_, _) {
            (this.update = _), (this.deps = _);
          }
          eventObserved(_) {
            "change" == _.type && _.write(this.update);
          }
        };
      var _ = Symbol.for("AnimatedComponent"),
        _ = (_) =>
          _.str(_)
            ? _
            : _ && _.str(_.displayName)
              ? _.displayName
              : (_.fun(_) && _.name) || null;
      function _(_, ..._) {
        return _.fun(_) ? _(..._) : _;
      }
      var _ = (_, _) =>
          !0 === _ || !!(_ && _ && (_.fun(_) ? _(_) : _(_).includes(_))),
        _ = (_, _) => (_.obj(_) ? _ && _[_] : _),
        _ = (_, _) =>
          !0 === _.default ? _[_] : _.default ? _.default[_] : void 0,
        _ = (_) => _,
        _ = (_, _ = _) => {
          let _ = _;
          _.default &&
            !0 !== _.default &&
            ((_ = _.default), (_ = Object.keys(_)));
          const _ = {};
          for (const _ of _) {
            const _ = _(_[_], _);
            _.und(_) || (_[_] = _);
          }
          return _;
        },
        _ = [
          "config",
          "onProps",
          "onStart",
          "onChange",
          "onPause",
          "onResume",
          "onRest",
        ],
        _ = {
          config: 1,
          from: 1,
          _: 1,
          ref: 1,
          loop: 1,
          reset: 1,
          pause: 1,
          cancel: 1,
          reverse: 1,
          immediate: 1,
          default: 1,
          delay: 1,
          onProps: 1,
          onStart: 1,
          onChange: 1,
          onPause: 1,
          onResume: 1,
          onRest: 1,
          onResolve: 1,
          items: 1,
          trail: 1,
          sort: 1,
          expires: 1,
          initial: 1,
          enter: 1,
          update: 1,
          leave: 1,
          children: 1,
          onDestroyed: 1,
          keys: 1,
          callId: 1,
          parentId: 1,
        };
      function _(_) {
        const _ = (function (_) {
          const _ = {};
          let _ = 0;
          if (
            (_(_, (_, _) => {
              _[_] || ((_[_] = _), _++);
            }),
            _)
          )
            return _;
        })(_);
        if (_) {
          const _ = {
            _: _,
          };
          return _(_, (_, _) => _ in _ || (_[_] = _)), _;
        }
        return {
          ..._,
        };
      }
      function _(_) {
        return (
          (_ = _(_)),
          _.arr(_)
            ? _.map(_)
            : _(_)
              ? _.createStringInterpolator({
                  range: [0, 1],
                  output: [_, _],
                })(1)
              : _
        );
      }
      function _(_) {
        for (const _ in _) return !0;
        return !1;
      }
      function _(_) {
        return _.fun(_) || (_.arr(_) && _.obj(_[0]));
      }
      function _(_, _) {
        _.ref?.delete(_), _?.delete(_);
      }
      function _(_, _) {
        _ && _.ref !== _ && (_.ref?.delete(_), _.add(_), (_.ref = _));
      }
      var _ = {
          tension: 170,
          friction: 26,
          mass: 1,
          damping: 1,
          easing: _.linear,
          clamp: !1,
        },
        _ = class {
          constructor() {
            (this.velocity = 0), Object.assign(this, _);
          }
        };
      function _(_, _) {
        if (_.und(_.decay)) {
          const _ = !_.und(_.tension) || !_.und(_.friction);
          (!_ && _.und(_.frequency) && _.und(_.damping) && _.und(_.mass)) ||
            ((_.duration = void 0), (_.decay = void 0)),
            _ && (_.frequency = void 0);
        } else _.duration = void 0;
      }
      var _ = [],
        _ = class {
          constructor() {
            (this.changed = !1),
              (this.values = _),
              (this.toValues = null),
              (this.fromValues = _),
              (this.config = new _()),
              (this.immediate = !1);
          }
        };
      function _(
        _,
        {
          key: _,
          props: __webpack_require__,
          defaultProps: _,
          state: _,
          actions: _,
        },
      ) {
        return new Promise((_, _) => {
          let _,
            _,
            _ = _(__webpack_require__.cancel ?? _?.cancel, _);
          if (_) _();
          else {
            _.und(__webpack_require__.pause) ||
              (_.paused = _(__webpack_require__.pause, _));
            let _ = _?.pause;
            !0 !== _ && (_ = _.paused || _(_, _)),
              (_ = _(__webpack_require__.delay || 0, _)),
              _ ? (_.resumeQueue.add(_), _.pause()) : (_.resume(), _());
          }
          function _() {
            _.resumeQueue.add(_),
              _.timeouts.delete(_),
              _.cancel(),
              (_ = _.time - _.now());
          }
          function _() {
            _ > 0 && !_.skipAnimation
              ? ((_.delayed = !0),
                (_ = _.setTimeout(_, _)),
                _.pauseQueue.add(_),
                _.timeouts.add(_))
              : _();
          }
          function _() {
            _.delayed && (_.delayed = !1),
              _.pauseQueue.delete(_),
              _.timeouts.delete(_),
              _ <= (_.cancelId || 0) && (_ = !0);
            try {
              _.start(
                {
                  ...__webpack_require__,
                  callId: _,
                  cancel: _,
                },
                _,
              );
            } catch (_) {
              _(_);
            }
          }
        });
      }
      var _ = (_, _) =>
          1 == _.length
            ? _[0]
            : _.some((_) => _.cancelled)
              ? _(_.get())
              : _.every((_) => _.noop)
                ? _(_.get())
                : _(
                    _.get(),
                    _.every((_) => _.finished),
                  ),
        _ = (_) => ({
          value: _,
          noop: !0,
          finished: !0,
          cancelled: !1,
        }),
        _ = (_, _, __webpack_require__ = !1) => ({
          value: _,
          finished: _,
          cancelled: __webpack_require__,
        }),
        _ = (_) => ({
          value: _,
          cancelled: !0,
          finished: !1,
        });
      function _(_, _, _, _) {
        const { callId: _, parentId: _, onRest: _ } = _,
          { asyncTo: _, promise: _ } = _;
        return _ || _ !== _ || _.reset
          ? (_.promise = (async () => {
              (_.asyncId = _), (_.asyncTo = _);
              const _ = _(_, (_, _) => ("onRest" === _ ? void 0 : _));
              let _, _;
              const _ = new Promise((_, _) => ((_ = _), (_ = _))),
                _ = (_) => {
                  const _ =
                    (_ <= (_.cancelId || 0) && _(_)) ||
                    (_ !== _.asyncId && _(_, !1));
                  if (_) throw ((_.result = _), _(_), _);
                },
                _ = (_, _) => {
                  const _ = new _(),
                    _ = new _();
                  return (async () => {
                    if (_.skipAnimation)
                      throw (_(_), (_.result = _(_, !1)), _(_), _);
                    _(_);
                    const _ = _.obj(_)
                      ? {
                          ..._,
                        }
                      : {
                          ..._,
                          _: _,
                        };
                    (_.parentId = _),
                      _(_, (_, _) => {
                        _.und(_[_]) && (_[_] = _);
                      });
                    const _ = await _.start(_);
                    return (
                      _(_),
                      _.paused &&
                        (await new Promise((_) => {
                          _.resumeQueue.add(_);
                        })),
                      _
                    );
                  })();
                };
              let _;
              if (_.skipAnimation) return _(_), _(_, !1);
              try {
                let _;
                (_ = _.arr(_)
                  ? (async (_) => {
                      for (const _ of _) await _(_);
                    })(_)
                  : Promise.resolve(_(_, _.stop.bind(_)))),
                  await Promise.all([_.then(_), _]),
                  (_ = _(_.get(), !0, !1));
              } catch (_) {
                if (_ instanceof _) _ = _.result;
                else {
                  if (!(_ instanceof _)) throw _;
                  _ = _.result;
                }
              } finally {
                _ == _.asyncId &&
                  ((_.asyncId = _),
                  (_.asyncTo = _ ? _ : void 0),
                  (_.promise = _ ? _ : void 0));
              }
              return (
                _.fun(_) &&
                  _.batchedUpdates(() => {
                    _(_, _, _.item);
                  }),
                _
              );
            })())
          : _;
      }
      function _(_, _) {
        _(_.timeouts, (_) => _.cancel()),
          _.pauseQueue.clear(),
          _.resumeQueue.clear(),
          (_.asyncId = _.asyncTo = _.promise = void 0),
          _ && (_.cancelId = _);
      }
      var _ = class extends Error {
          constructor() {
            super(
              "An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.",
            );
          }
        },
        _ = class extends Error {
          constructor() {
            super("SkipAnimationSignal");
          }
        },
        _ = (_) => _ instanceof _,
        _ = 1,
        _ = class extends _ {
          constructor() {
            super(...arguments), (this._ = _++), (this._priority = 0);
          }
          get priority() {
            return this._priority;
          }
          set priority(_) {
            this._priority != _ &&
              ((this._priority = _), this._onPriorityChange(_));
          }
          get() {
            const _ = _(this);
            return _ && _.getValue();
          }
          to(..._) {
            return _._(this, _);
          }
          interpolate(..._) {
            return (
              _(
                `${_}The "interpolate" function is deprecated in v9 (use "to" instead)`,
              ),
              _._(this, _)
            );
          }
          toJSON() {
            return this.get();
          }
          observerAdded(_) {
            1 == _ && this._attach();
          }
          observerRemoved(_) {
            0 == _ && this._detach();
          }
          _attach() {}
          _detach() {}
          _onChange(_, _ = !1) {
            _(this, {
              type: "change",
              parent: this,
              value: _,
              idle: _,
            });
          }
          _onPriorityChange(_) {
            this.idle || _.sort(this),
              _(this, {
                type: "priority",
                parent: this,
                priority: _,
              });
          }
        },
        _ = Symbol.for("SpringPhase"),
        _ = (_) => (1 & _[_]) > 0,
        _ = (_) => (2 & _[_]) > 0,
        _ = (_) => (4 & _[_]) > 0,
        _ = (_, _) => (_ ? (_[_] |= 3) : (_[_] &= -3)),
        _ = (_, _) => (_ ? (_[_] |= 4) : (_[_] &= -5)),
        _ = class extends _ {
          constructor(_, _) {
            if (
              (super(),
              (this.animation = new _()),
              (this.defaultProps = {}),
              (this._state = {
                paused: !1,
                delayed: !1,
                pauseQueue: new Set(),
                resumeQueue: new Set(),
                timeouts: new Set(),
              }),
              (this._pendingCalls = new Set()),
              (this._lastCallId = 0),
              (this._lastToId = 0),
              (this._memoizedDuration = 0),
              !_.und(_) || !_.und(_))
            ) {
              const _ = _.obj(_)
                ? {
                    ..._,
                  }
                : {
                    ..._,
                    from: _,
                  };
              _.und(_.default) && (_.default = !0), this.start(_);
            }
          }
          get idle() {
            return !(_(this) || this._state.asyncTo) || _(this);
          }
          get goal() {
            return _(this.animation._);
          }
          get velocity() {
            const _ = _(this);
            return _ instanceof _
              ? _.lastVelocity || 0
              : _.getPayload().map((_) => _.lastVelocity || 0);
          }
          get hasAnimated() {
            return _(this);
          }
          get isAnimating() {
            return _(this);
          }
          get isPaused() {
            return _(this);
          }
          get isDelayed() {
            return this._state.delayed;
          }
          advance(_) {
            let _ = !0,
              _ = !1;
            const _ = this.animation;
            let { toValues: _ } = _;
            const { config: _ } = _,
              _ = _(_._);
            !_ && _(_._) && (_ = _(_(_._))),
              _.values.forEach((_, _) => {
                if (_.done) return;
                const _ = _.constructor == _ ? 1 : _ ? _[_].lastPosition : _[_];
                let _ = _.immediate,
                  _ = _;
                if (!_) {
                  if (((_ = _.lastPosition), _.tension <= 0))
                    return void (_.done = !0);
                  let _ = (_.elapsedTime += _);
                  const _ = _.fromValues[_],
                    _ =
                      null != _._
                        ? _._
                        : (_._ = _.arr(_.velocity)
                            ? _.velocity[_]
                            : _.velocity);
                  let _;
                  const _ =
                    _.precision ||
                    (_ == _ ? 0.005 : Math.min(1, 0.001 * Math.abs(_ - _)));
                  if (_.und(_.duration))
                    if (_.decay) {
                      const _ = !0 === _.decay ? 0.998 : _.decay,
                        _ = Math.exp(-(1 - _) * _);
                      (_ = _ + (_ / (1 - _)) * (1 - _)),
                        (_ = Math.abs(_.lastPosition - _) <= _),
                        (_ = _ * _);
                    } else {
                      _ = null == _.lastVelocity ? _ : _.lastVelocity;
                      const _ = _.restVelocity || _ / 10,
                        _ = _.clamp ? 0 : _.bounce,
                        _ = !_.und(_),
                        _ = _ == _ ? _._ > 0 : _ < _;
                      let _,
                        _ = !1;
                      const _ = 1,
                        _ = Math.ceil(_ / _);
                      for (
                        let _ = 0;
                        _ < _ &&
                        ((_ = Math.abs(_) > _),
                        _ || ((_ = Math.abs(_ - _) <= _), !_));
                        ++_
                      ) {
                        _ &&
                          ((_ = _ == _ || _ > _ == _),
                          _ && ((_ = -_ * _), (_ = _)));
                        (_ +=
                          ((1e-6 * -_.tension * (_ - _) +
                            0.001 * -_.friction * _) /
                            _.mass) *
                          _),
                          (_ += _ * _);
                      }
                    }
                  else {
                    let _ = 1;
                    _.duration > 0 &&
                      (this._memoizedDuration !== _.duration &&
                        ((this._memoizedDuration = _.duration),
                        _.durationProgress > 0 &&
                          ((_.elapsedTime = _.duration * _.durationProgress),
                          (_ = _.elapsedTime += _))),
                      (_ = (_.progress || 0) + _ / this._memoizedDuration),
                      (_ = _ > 1 ? 1 : _ < 0 ? 0 : _),
                      (_.durationProgress = _)),
                      (_ = _ + _.easing(_) * (_ - _)),
                      (_ = (_ - _.lastPosition) / _),
                      (_ = 1 == _);
                  }
                  (_.lastVelocity = _),
                    Number.isNaN(_) &&
                      (console.warn("Got NaN while animating:", this),
                      (_ = !0));
                }
                _ && !_[_].done && (_ = !1),
                  _ ? (_.done = !0) : (_ = !1),
                  _.setValue(_, _.round) && (_ = !0);
              });
            const _ = _(this),
              _ = _.getValue();
            if (_) {
              const _ = _(_._);
              (_ === _ && !_) || _.decay
                ? _ && _.decay && this._onChange(_)
                : (_.setValue(_), this._onChange(_)),
                this._stop();
            } else _ && this._onChange(_);
          }
          set(_) {
            return (
              _.batchedUpdates(() => {
                this._stop(), this._focus(_), this._set(_);
              }),
              this
            );
          }
          pause() {
            this._update({
              pause: !0,
            });
          }
          resume() {
            this._update({
              pause: !1,
            });
          }
          finish() {
            if (_(this)) {
              const { _: _, config: _ } = this.animation;
              _.batchedUpdates(() => {
                this._onStart(), _.decay || this._set(_, !1), this._stop();
              });
            }
            return this;
          }
          update(_) {
            return (this.queue || (this.queue = [])).push(_), this;
          }
          start(_, _) {
            let _;
            return (
              _.und(_)
                ? ((_ = this.queue || []), (this.queue = []))
                : (_ = [
                    _.obj(_)
                      ? _
                      : {
                          ..._,
                          _: _,
                        },
                  ]),
              Promise.all(__webpack_require__.map((_) => this._update(_))).then(
                (_) => _(this, _),
              )
            );
          }
          stop(_) {
            const { _: _ } = this.animation;
            return (
              this._focus(this.get()),
              _(this._state, _ && this._lastCallId),
              _.batchedUpdates(() => this._stop(_, _)),
              this
            );
          }
          reset() {
            this._update({
              reset: !0,
            });
          }
          eventObserved(_) {
            "change" == _.type
              ? this._start()
              : "priority" == _.type && (this.priority = _.priority + 1);
          }
          _prepareNode(_) {
            const _ = this.key || "";
            let { _: __webpack_require__, from: _ } = _;
            (__webpack_require__ = _.obj(__webpack_require__)
              ? __webpack_require__[_]
              : __webpack_require__),
              (null == __webpack_require__ || _(__webpack_require__)) &&
                (__webpack_require__ = void 0),
              (_ = _.obj(_) ? _[_] : _),
              null == _ && (_ = void 0);
            const _ = {
              _: __webpack_require__,
              from: _,
            };
            return (
              _(this) ||
                (_.reverse &&
                  ([__webpack_require__, _] = [_, __webpack_require__]),
                (_ = _(_)),
                _.und(_)
                  ? _(this) || this._set(__webpack_require__)
                  : this._set(_)),
              _
            );
          }
          _update({ ..._ }, _) {
            const { key: __webpack_require__, defaultProps: _ } = this;
            _.default &&
              Object.assign(
                _,
                _(_, (_, _) => (/^on/.test(_) ? _(_, __webpack_require__) : _)),
              ),
              _(this, _, "onProps"),
              _(this, "onProps", _, this);
            const _ = this._prepareNode(_);
            if (Object.isFrozen(this))
              throw Error(
                "Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?",
              );
            const _ = this._state;
            return _(++this._lastCallId, {
              key: __webpack_require__,
              props: _,
              defaultProps: _,
              state: _,
              actions: {
                pause: () => {
                  _(this) ||
                    (_(this, !0),
                    _(_.pauseQueue),
                    _(
                      this,
                      "onPause",
                      _(this, _(this, this.animation._)),
                      this,
                    ));
                },
                resume: () => {
                  _(this) &&
                    (_(this, !1),
                    _(this) && this._resume(),
                    _(_.resumeQueue),
                    _(
                      this,
                      "onResume",
                      _(this, _(this, this.animation._)),
                      this,
                    ));
                },
                start: this._merge.bind(this, _),
              },
            }).then((_) => {
              if (_.loop && _.finished && (!_ || !_.noop)) {
                const _ = _(_);
                if (_) return this._update(_, !0);
              }
              return _;
            });
          }
          _merge(_, _, _) {
            if (_.cancel) return this.stop(!0), __webpack_require__(_(this));
            const _ = !_.und(_._),
              _ = !_.und(_.from);
            if (_ || _) {
              if (!(_.callId > this._lastToId))
                return __webpack_require__(_(this));
              this._lastToId = _.callId;
            }
            const { key: _, defaultProps: _, animation: _ } = this,
              { _: _, from: _ } = _;
            let { _: _ = _, from: _ = _ } = _;
            !_ || _ || (_.default && !_.und(_)) || (_ = _),
              _.reverse && ([_, _] = [_, _]);
            const _ = !_(_, _);
            _ && (_.from = _), (_ = _(_));
            const _ = !_(_, _);
            _ && this._focus(_);
            const _ = _(_._),
              { config: _ } = _,
              { decay: _, velocity: _ } = _;
            (_ || _) && (_.velocity = 0),
              _.config &&
                !_ &&
                (function (_, _, _) {
                  _ &&
                    (_(
                      (_ = {
                        ..._,
                      }),
                      _,
                    ),
                    (_ = {
                      ..._,
                      ..._,
                    })),
                    _(_, _),
                    Object.assign(_, _);
                  for (const _ in _) null == _[_] && (_[_] = _[_]);
                  let { frequency: _, damping: _ } = _;
                  const { mass: _ } = _;
                  _.und(_) ||
                    (_ < 0.01 && (_ = 0.01),
                    _ < 0 && (_ = 0),
                    (_.tension = Math.pow((2 * Math._) / _, 2) * _),
                    (_.friction = (4 * Math._ * _ * _) / _));
                })(
                  _,
                  _(_.config, _),
                  _.config !== _.config ? _(_.config, _) : void 0,
                );
            let _ = _(this);
            if (!_ || _.und(_)) return __webpack_require__(_(this, !0));
            const _ = _.und(_.reset)
                ? _ && !_.default
                : !_.und(_) && _(_.reset, _),
              _ = _ ? _ : this.get(),
              _ = _(_),
              _ = _.num(_) || _.arr(_) || _(_),
              _ = !_ && (!_ || _(_.immediate || _.immediate, _));
            if (_) {
              const _ = _(_);
              if (_ !== _.constructor) {
                if (!_)
                  throw Error(
                    `Cannot animate between ${_.constructor.name} and ${_.name}, as the "to" prop suggests`,
                  );
                _ = this._set(_);
              }
            }
            const _ = _.constructor;
            let _ = _(_),
              _ = !1;
            if (!_) {
              const _ = _ || (!_(this) && _);
              (_ || _) && ((_ = _(_(_), _)), (_ = !_)),
                ((_(_.immediate, _) || _) &&
                  _(_.decay, _) &&
                  _(_.velocity, _)) ||
                  (_ = !0);
            }
            if (
              (_ &&
                _(this) &&
                (_.changed && !_ ? (_ = !0) : _ || this._stop(_)),
              !_ &&
                ((_ || _(_)) &&
                  ((_.values = _.getPayload()),
                  (_.toValues = _(_) ? null : _ == _ ? [1] : _(_))),
                _.immediate != _ && ((_.immediate = _), _ || _ || this._set(_)),
                _))
            ) {
              const { onRest: _ } = _;
              _(_, (_) => _(this, _, _));
              const _ = _(this, _(this, _));
              _(this._pendingCalls, _),
                this._pendingCalls.add(_),
                _.changed &&
                  _.batchedUpdates(() => {
                    (_.changed = !_),
                      _?.(_, this),
                      _ ? _(_.onRest, _) : _.onStart?.(_, this);
                  });
            }
            _ && this._set(_),
              _
                ? __webpack_require__(_(_._, _, this._state, this))
                : _
                  ? this._start()
                  : _(this) && !_
                    ? this._pendingCalls.add(_)
                    : __webpack_require__(_(_));
          }
          _focus(_) {
            const _ = this.animation;
            _ !== _._ &&
              (_(this) && this._detach(), (_._ = _), _(this) && this._attach());
          }
          _attach() {
            let _ = 0;
            const { _: _ } = this.animation;
            _(_) && (_(_, this), _(_) && (_ = _.priority + 1)),
              (this.priority = _);
          }
          _detach() {
            const { _: _ } = this.animation;
            _(_) && _(_, this);
          }
          _set(_, _ = !0) {
            const _ = _(_);
            if (!_.und(_)) {
              const _ = _(this);
              if (!_ || !_(_, _.getValue())) {
                const _ = _(_);
                _ && _.constructor == _ ? _.setValue(_) : _(this, _.create(_)),
                  _ &&
                    _.batchedUpdates(() => {
                      this._onChange(_, _);
                    });
              }
            }
            return _(this);
          }
          _onStart() {
            const _ = this.animation;
            _.changed ||
              ((_.changed = !0),
              _(this, "onStart", _(this, _(this, _._)), this));
          }
          _onChange(_, _) {
            _ || (this._onStart(), _(this.animation.onChange, _, this)),
              _(this.defaultProps.onChange, _, this),
              super._onChange(_, _);
          }
          _start() {
            const _ = this.animation;
            _(this).reset(_(_._)),
              _.immediate ||
                (_.fromValues = _.values.map((_) => _.lastPosition)),
              _(this) || (_(this, !0), _(this) || this._resume());
          }
          _resume() {
            _.skipAnimation ? this.finish() : _.start(this);
          }
          _stop(_, _) {
            if (_(this)) {
              _(this, !1);
              const _ = this.animation;
              _(_.values, (_) => {
                _.done = !0;
              }),
                _.toValues && (_.onChange = _.onPause = _.onResume = void 0),
                _(this, {
                  type: "idle",
                  parent: this,
                });
              const _ = _ ? _(this.get()) : _(this.get(), _(this, _ ?? _._));
              _(this._pendingCalls, _),
                _.changed && ((_.changed = !1), _(this, "onRest", _, this));
            }
          }
        };
      function _(_, _) {
        const _ = _(_);
        return _(_(_.get()), _);
      }
      function _(_, _ = _.loop, __webpack_require__ = _._) {
        const _ = _(_);
        if (_) {
          const _ = !0 !== _ && _(_),
            _ = (_ || _).reverse,
            _ = !_ || _.reset;
          return _({
            ..._,
            loop: _,
            default: !1,
            pause: void 0,
            _: !_ || _(__webpack_require__) ? __webpack_require__ : void 0,
            from: _ ? _.from : void 0,
            reset: _,
            ..._,
          });
        }
      }
      function _(_) {
        const { _: _, from: __webpack_require__ } = (_ = _(_)),
          _ = new Set();
        return (
          _.obj(_) && _(_, _),
          _.obj(__webpack_require__) && _(__webpack_require__, _),
          (_.keys = _.size ? Array.from(_) : null),
          _
        );
      }
      function _(_) {
        const _ = _(_);
        return _.und(_.default) && (_.default = _(_)), _;
      }
      function _(_, _) {
        _(_, (_, _) => null != _ && _.add(_));
      }
      var _ = ["onStart", "onRest", "onChange", "onPause", "onResume"];
      function _(_, _, _) {
        _.animation[_] = _[_] !== _(_, _) ? _(_[_], _.key) : void 0;
      }
      function _(_, _, ...__webpack_require__) {
        _.animation[_]?.(...__webpack_require__),
          _.defaultProps[_]?.(...__webpack_require__);
      }
      var _ = ["onStart", "onChange", "onRest"],
        _ = 1,
        _ = class {
          constructor(_, _) {
            (this._ = _++),
              (this.springs = {}),
              (this.queue = []),
              (this._lastAsyncId = 0),
              (this._active = new Set()),
              (this._changed = new Set()),
              (this._started = !1),
              (this._state = {
                paused: !1,
                pauseQueue: new Set(),
                resumeQueue: new Set(),
                timeouts: new Set(),
              }),
              (this._events = {
                onStart: new Map(),
                onChange: new Map(),
                onRest: new Map(),
              }),
              (this._onFrame = this._onFrame.bind(this)),
              _ && (this._flush = _),
              _ &&
                this.start({
                  default: !0,
                  ..._,
                });
          }
          get idle() {
            return (
              !this._state.asyncTo &&
              Object.values(this.springs).every(
                (_) => _.idle && !_.isDelayed && !_.isPaused,
              )
            );
          }
          get item() {
            return this._item;
          }
          set item(_) {
            this._item = _;
          }
          get() {
            const _ = {};
            return this.each((_, _) => (_[_] = _.get())), _;
          }
          set(_) {
            for (const _ in _) {
              const _ = _[_];
              _.und(_) || this.springs[_].set(_);
            }
          }
          update(_) {
            return _ && this.queue.push(_(_)), this;
          }
          start(_) {
            let { queue: _ } = this;
            return (
              _ ? (_ = _(_).map(_)) : (this.queue = []),
              this._flush ? this._flush(this, _) : (_(this, _), _(this, _))
            );
          }
          stop(_, _) {
            if ((_ !== !!_ && (_ = _), _)) {
              const _ = this.springs;
              _(_(_), (_) => _[_].stop(!!_));
            } else
              _(this._state, this._lastAsyncId), this.each((_) => _.stop(!!_));
            return this;
          }
          pause(_) {
            if (_.und(_))
              this.start({
                pause: !0,
              });
            else {
              const _ = this.springs;
              _(_(_), (_) => _[_].pause());
            }
            return this;
          }
          resume(_) {
            if (_.und(_))
              this.start({
                pause: !1,
              });
            else {
              const _ = this.springs;
              _(_(_), (_) => _[_].resume());
            }
            return this;
          }
          each(_) {
            _(this.springs, _);
          }
          _onFrame() {
            const {
                onStart: _,
                onChange: _,
                onRest: __webpack_require__,
              } = this._events,
              _ = this._active.size > 0,
              _ = this._changed.size > 0;
            ((_ && !this._started) || (_ && !this._started)) &&
              ((this._started = !0),
              _(_, ([_, _]) => {
                (_.value = this.get()), _(_, this, this._item);
              }));
            const _ = !_ && this._started,
              _ = _ || (_ && __webpack_require__.size) ? this.get() : null;
            _ &&
              _.size &&
              _(_, ([_, _]) => {
                (_.value = _), _(_, this, this._item);
              }),
              _ &&
                ((this._started = !1),
                _(__webpack_require__, ([_, _]) => {
                  (_.value = _), _(_, this, this._item);
                }));
          }
          eventObserved(_) {
            if ("change" == _.type)
              this._changed.add(_.parent), _.idle || this._active.add(_.parent);
            else {
              if ("idle" != _.type) return;
              this._active.delete(_.parent);
            }
            _.onFrame(this._onFrame);
          }
        };
      function _(_, _) {
        return Promise.all(_.map((_) => _(_, _))).then((_) => _(_, _));
      }
      async function _(_, _, _) {
        const { keys: _, _: _, from: _, loop: _, onRest: _, onResolve: _ } = _,
          _ = _.obj(_.default) && _.default;
        _ && (_.loop = !1),
          !1 === _ && (_._ = null),
          !1 === _ && (_.from = null);
        const _ = _.arr(_) || _.fun(_) ? _ : void 0;
        _
          ? ((_._ = void 0), (_.onRest = void 0), _ && (_.onRest = void 0))
          : _(_, (_) => {
              const _ = _[_];
              if (_.fun(_)) {
                const _ = _._events[_];
                (_[_] = ({ finished: _, cancelled: _ }) => {
                  const _ = _.get(_);
                  _
                    ? (_ || (_.finished = !1), _ && (_.cancelled = !0))
                    : _.set(_, {
                        value: null,
                        finished: _ || !1,
                        cancelled: _ || !1,
                      });
                }),
                  _ && (_[_] = _[_]);
              }
            });
        const _ = _._state;
        _.pause === !_.paused
          ? ((_.paused = _.pause), _(_.pause ? _.pauseQueue : _.resumeQueue))
          : _.paused && (_.pause = !0);
        const _ = (_ || Object.keys(_.springs)).map((_) =>
            _.springs[_].start(_),
          ),
          _ = !0 === _.cancel || !0 === _(_, "cancel");
        (_ || (_ && _.asyncId)) &&
          _.push(
            _(++_._lastAsyncId, {
              props: _,
              state: _,
              actions: {
                pause: _,
                resume: _,
                start(_, _) {
                  _
                    ? (_(_, _._lastAsyncId), __webpack_require__(_(_)))
                    : ((_.onRest = _), __webpack_require__(_(_, _, _, _)));
                },
              },
            }),
          ),
          _.paused &&
            (await new Promise((_) => {
              _.resumeQueue.add(_);
            }));
        const _ = _(_, await Promise.all(_));
        if (_ && _.finished && (!_ || !_.noop)) {
          const _ = _(_, _, _);
          if (_) return _(_, [_]), _(_, _, !0);
        }
        return _ && _.batchedUpdates(() => _(_, _, _.item)), _;
      }
      function _(_, _) {
        const _ = {
          ..._.springs,
        };
        return (
          _ &&
            _(_(_), (_) => {
              _.und(_.keys) && (_ = _(_)),
                _.obj(_._) ||
                  (_ = {
                    ..._,
                    _: void 0,
                  }),
                _(_, _, (_) => _(_));
            }),
          _(_, _),
          _
        );
      }
      function _(_, _) {
        _(_, (_, _) => {
          _.springs[_] || ((_.springs[_] = _), _(_, _));
        });
      }
      function _(_, _) {
        const _ = new _();
        return (_.key = _), _ && _(_, _), _;
      }
      function _(_, _, _) {
        _.keys &&
          _(_.keys, (_) => {
            (_[_] || (_[_] = __webpack_require__(_)))._prepareNode(_);
          });
      }
      function _(_, _) {
        _(_, (_) => {
          _(_.springs, _, (_) => _(_, _));
        });
      }
      var _ = _.createContext({
          pause: !1,
          immediate: !1,
        }),
        _ = () => {
          const _ = [],
            _ = function (_) {
              _(
                `${_}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`,
              );
              const _ = [];
              return (
                _(_, (_, _) => {
                  if (_.und(_)) _.push(_.start());
                  else {
                    const _ = __webpack_require__(_, _, _);
                    _ && _.push(_.start(_));
                  }
                }),
                _
              );
            };
          (_.current = _),
            (_.add = function (_) {
              _.includes(_) || _.push(_);
            }),
            (_.delete = function (_) {
              const _ = _.indexOf(_);
              ~_ && _.splice(_, 1);
            }),
            (_.pause = function () {
              return _(_, (_) => _.pause(...arguments)), this;
            }),
            (_.resume = function () {
              return _(_, (_) => _.resume(...arguments)), this;
            }),
            (_.set = function (_) {
              _(_, (_, _) => {
                const _ = _.fun(_) ? _(_, _) : _;
                _ && _.set(_);
              });
            }),
            (_.start = function (_) {
              const _ = [];
              return (
                _(_, (_, _) => {
                  if (_.und(_)) __webpack_require__.push(_.start());
                  else {
                    const _ = this._getProps(_, _, _);
                    _ && __webpack_require__.push(_.start(_));
                  }
                }),
                _
              );
            }),
            (_.stop = function () {
              return _(_, (_) => _.stop(...arguments)), this;
            }),
            (_.update = function (_) {
              return _(_, (_, _) => _.update(this._getProps(_, _, _))), this;
            });
          const _ = function (_, _, _) {
            return _.fun(_) ? _(_, _) : _;
          };
          return (_._getProps = _), _;
        };
      function _(_, _, _) {
        const _ = _.fun(_) && _;
        _ && !_ && (_ = []);
        const _ = (0, _.useMemo)(
            () => (_ || 3 == arguments.length ? _() : void 0),
            [],
          ),
          _ = (0, _.useRef)(0),
          _ = _(),
          _ = (0, _.useMemo)(
            () => ({
              ctrls: [],
              queue: [],
              flush(_, _) {
                const _ = _(_, _);
                return _.current > 0 &&
                  !_.queue.length &&
                  !Object.keys(_).some((_) => !_.springs[_])
                  ? _(_, _)
                  : new Promise((_) => {
                      _(_, _),
                        _.queue.push(() => {
                          _(_(_, _));
                        }),
                        _();
                    });
              },
            }),
            [],
          ),
          _ = (0, _.useRef)([..._.ctrls]),
          _ = (0, _.useRef)([]),
          _ = _(_) || 0;
        function _(_, _) {
          for (let _ = _; _ < _; _++) {
            const _ = _.current[_] || (_.current[_] = new _(null, _.flush)),
              _ = _ ? _(_, _) : _[_];
            _ && (_.current[_] = _(_));
          }
        }
        (0, _.useMemo)(() => {
          _(_.current.slice(_, _), (_) => {
            _(_, _), _.stop(!0);
          }),
            (_.current.length = _),
            _(_, _);
        }, [_]),
          (0, _.useMemo)(() => {
            _(0, Math.min(_, _));
          }, _);
        const _ = _.current.map((_, _) => _(_, _.current[_])),
          _ = (0, _.useContext)(_),
          _ = _(_),
          _ = _ !== _ && _(_);
        _(() => {
          _.current++, (_.ctrls = _.current);
          const { queue: _ } = _;
          _.length && ((_.queue = []), _(_, (_) => _())),
            _(_.current, (_, _) => {
              _?.add(_),
                _ &&
                  _.start({
                    default: _,
                  });
              const _ = _.current[_];
              _ && (_(_, _.ref), _.ref ? _.queue.push(_) : _.start(_));
            });
        }),
          _(() => () => {
            _(_.ctrls, (_) => _.stop(!0));
          });
        const _ = _.map((_) => ({
          ..._,
        }));
        return _ ? [_, _] : _;
      }
      function _(_, _) {
        const _ = _.fun(_),
          [[_], _] = _(1, _ ? _ : [_], _ ? _ || [] : _);
        return _ || 2 == arguments.length ? [_, _] : _;
      }
      var _ = class extends _ {
        constructor(_, _) {
          super(),
            (this.source = _),
            (this.idle = !0),
            (this._active = new Set()),
            (this.calc = _(..._));
          const _ = this._get(),
            _ = _(_);
          _(this, _.create(_));
        }
        advance(_) {
          const _ = this._get();
          _(_, this.get()) ||
            (_(this).setValue(_), this._onChange(_, this.idle)),
            !this.idle && _(this._active) && _(this);
        }
        _get() {
          const _ = _.arr(this.source) ? this.source.map(_) : _(_(this.source));
          return this.calc(..._);
        }
        _start() {
          this.idle &&
            !_(this._active) &&
            ((this.idle = !1),
            _(_(this), (_) => {
              _.done = !1;
            }),
            _.skipAnimation
              ? (_.batchedUpdates(() => this.advance()), _(this))
              : _.start(this));
        }
        _attach() {
          let _ = 1;
          _(_(this.source), (_) => {
            _(_) && _(_, this),
              _(_) &&
                (_.idle || this._active.add(_),
                (_ = Math.max(_, _.priority + 1)));
          }),
            (this.priority = _),
            this._start();
        }
        _detach() {
          _(_(this.source), (_) => {
            _(_) && _(_, this);
          }),
            this._active.clear(),
            _(this);
        }
        eventObserved(_) {
          "change" == _.type
            ? _.idle
              ? this.advance()
              : (this._active.add(_.parent), this._start())
            : "idle" == _.type
              ? this._active.delete(_.parent)
              : "priority" == _.type &&
                (this.priority = _(this.source).reduce(
                  (_, _) => Math.max(_, (_(_) ? _.priority : 0) + 1),
                  0,
                ));
        }
      };
      function _(_) {
        return !1 !== _.idle;
      }
      function _(_) {
        return !_.size || Array.from(_).every(_);
      }
      function _(_) {
        _.idle ||
          ((_.idle = !0),
          _(_(_), (_) => {
            _.done = !0;
          }),
          _(_, {
            type: "idle",
            parent: _,
          }));
      }
      _.assign({
        createStringInterpolator: _,
        _: (_, _) => new _(_, _),
      });
      _.advance;
      var _ = __webpack_require__("chunkid"),
        _ = /^--/;
      function _(_, _) {
        return null == _ || "boolean" == typeof _ || "" === _
          ? ""
          : "number" != typeof _ ||
              0 === _ ||
              _.test(_) ||
              (_.hasOwnProperty(_) && _[_])
            ? ("" + _).trim()
            : _ + "px";
      }
      var _ = {};
      var _ = {
          animationIterationCount: !0,
          borderImageOutset: !0,
          borderImageSlice: !0,
          borderImageWidth: !0,
          boxFlex: !0,
          boxFlexGroup: !0,
          boxOrdinalGroup: !0,
          columnCount: !0,
          columns: !0,
          flex: !0,
          flexGrow: !0,
          flexPositive: !0,
          flexShrink: !0,
          flexNegative: !0,
          flexOrder: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowSpan: !0,
          gridRowStart: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnSpan: !0,
          gridColumnStart: !0,
          fontWeight: !0,
          lineClamp: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          tabSize: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          stopOpacity: !0,
          strokeDasharray: !0,
          strokeDashoffset: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
          strokeWidth: !0,
        },
        _ = ["Webkit", "Ms", "Moz", "O"];
      _ = Object.keys(_).reduce(
        (_, _) => (
          _.forEach(
            (_) =>
              (_[
                ((_, _) => _ + _.charAt(0).toUpperCase() + _.substring(1))(_, _)
              ] = _[_]),
          ),
          _
        ),
        _,
      );
      var _ = /^(matrix|translate|scale|rotate|skew)/,
        _ = /^(translate)/,
        _ = /^(rotate|skew)/,
        _ = (_, _) => (_.num(_) && 0 !== _ ? _ + _ : _),
        _ = (_, _) =>
          _.arr(_)
            ? _.every((_) => _(_, _))
            : _.num(_)
              ? _ === _
              : parseFloat(_) === _,
        _ = class extends _ {
          constructor({ _: _, _: _, _: __webpack_require__, ..._ }) {
            const _ = [],
              _ = [];
            (_ || _ || __webpack_require__) &&
              (_.push([_ || 0, _ || 0, __webpack_require__ || 0]),
              _.push((_) => [
                `translate3d(${_.map((_) => _(_, "px")).join(",")})`,
                _(_, 0),
              ])),
              _(_, (_, _) => {
                if ("transform" === _)
                  _.push([_ || ""]), _.push((_) => [_, "" === _]);
                else if (_.test(_)) {
                  if ((delete _[_], _.und(_))) return;
                  const _ = _.test(_) ? "px" : _.test(_) ? "deg" : "";
                  _.push(_(_)),
                    _.push(
                      "rotate3d" === _
                        ? ([_, _, _, _]) => [
                            `rotate3d(${_},${_},${_},${_(_, _)})`,
                            _(_, 0),
                          ]
                        : (_) => [
                            `${_}(${_.map((_) => _(_, _)).join(",")})`,
                            _(_, _.startsWith("scale") ? 1 : 0),
                          ],
                    );
                }
              }),
              _.length && (_.transform = new _(_, _)),
              super(_);
          }
        },
        _ = class extends _ {
          constructor(_, _) {
            super(),
              (this.inputs = _),
              (this.transforms = _),
              (this._value = null);
          }
          get() {
            return this._value || (this._value = this._get());
          }
          _get() {
            let _ = "",
              _ = !0;
            return (
              _(this.inputs, (_, _) => {
                const _ = _(_[0]),
                  [_, _] = this.transforms[_](
                    _.arr(_) ? _ : __webpack_require__.map(_),
                  );
                (_ += " " + _), (_ = _ && _);
              }),
              _ ? "none" : _
            );
          }
          observerAdded(_) {
            1 == _ && _(this.inputs, (_) => _(_, (_) => _(_) && _(_, this)));
          }
          observerRemoved(_) {
            0 == _ && _(this.inputs, (_) => _(_, (_) => _(_) && _(_, this)));
          }
          eventObserved(_) {
            "change" == _.type && (this._value = null), _(this, _);
          }
        };
      _.assign({
        batchedUpdates: _.unstable_batchedUpdates,
        createStringInterpolator: _,
        colors: {
          transparent: 0,
          aliceblue: 4042850303,
          antiquewhite: 4209760255,
          aqua: 16777215,
          aquamarine: 2147472639,
          azure: 4043309055,
          beige: 4126530815,
          bisque: 4293182719,
          black: 255,
          blanchedalmond: 4293643775,
          blue: 65535,
          blueviolet: 2318131967,
          brown: 2771004159,
          burlywood: 3736635391,
          burntsienna: 3934150143,
          cadetblue: 1604231423,
          chartreuse: 2147418367,
          chocolate: 3530104575,
          coral: 4286533887,
          cornflowerblue: 1687547391,
          cornsilk: 4294499583,
          crimson: 3692313855,
          cyan: 16777215,
          darkblue: 35839,
          darkcyan: 9145343,
          darkgoldenrod: 3095792639,
          darkgray: 2846468607,
          darkgreen: 6553855,
          darkgrey: 2846468607,
          darkkhaki: 3182914559,
          darkmagenta: 2332068863,
          darkolivegreen: 1433087999,
          darkorange: 4287365375,
          darkorchid: 2570243327,
          darkred: 2332033279,
          darksalmon: 3918953215,
          darkseagreen: 2411499519,
          darkslateblue: 1211993087,
          darkslategray: 793726975,
          darkslategrey: 793726975,
          darkturquoise: 13554175,
          darkviolet: 2483082239,
          deeppink: 4279538687,
          deepskyblue: 12582911,
          dimgray: 1768516095,
          dimgrey: 1768516095,
          dodgerblue: 512819199,
          firebrick: 2988581631,
          floralwhite: 4294635775,
          forestgreen: 579543807,
          fuchsia: 4278255615,
          gainsboro: 3705462015,
          ghostwhite: 4177068031,
          gold: 4292280575,
          goldenrod: 3668254975,
          gray: 2155905279,
          green: 8388863,
          greenyellow: 2919182335,
          grey: 2155905279,
          honeydew: 4043305215,
          hotpink: 4285117695,
          indianred: 3445382399,
          indigo: 1258324735,
          ivory: 4294963455,
          khaki: 4041641215,
          lavender: 3873897215,
          lavenderblush: 4293981695,
          lawngreen: 2096890111,
          lemonchiffon: 4294626815,
          lightblue: 2916673279,
          lightcoral: 4034953471,
          lightcyan: 3774873599,
          lightgoldenrodyellow: 4210742015,
          lightgray: 3553874943,
          lightgreen: 2431553791,
          lightgrey: 3553874943,
          lightpink: 4290167295,
          lightsalmon: 4288707327,
          lightseagreen: 548580095,
          lightskyblue: 2278488831,
          lightslategray: 2005441023,
          lightslategrey: 2005441023,
          lightsteelblue: 2965692159,
          lightyellow: 4294959359,
          lime: 16711935,
          limegreen: 852308735,
          linen: 4210091775,
          magenta: 4278255615,
          maroon: 2147483903,
          mediumaquamarine: 1724754687,
          mediumblue: 52735,
          mediumorchid: 3126187007,
          mediumpurple: 2473647103,
          mediumseagreen: 1018393087,
          mediumslateblue: 2070474495,
          mediumspringgreen: 16423679,
          mediumturquoise: 1221709055,
          mediumvioletred: 3340076543,
          midnightblue: 421097727,
          mintcream: 4127193855,
          mistyrose: 4293190143,
          moccasin: 4293178879,
          navajowhite: 4292783615,
          navy: 33023,
          oldlace: 4260751103,
          olive: 2155872511,
          olivedrab: 1804477439,
          orange: 4289003775,
          orangered: 4282712319,
          orchid: 3664828159,
          palegoldenrod: 4008225535,
          palegreen: 2566625535,
          paleturquoise: 2951671551,
          palevioletred: 3681588223,
          papayawhip: 4293907967,
          peachpuff: 4292524543,
          peru: 3448061951,
          pink: 4290825215,
          plum: 3718307327,
          powderblue: 2967529215,
          purple: 2147516671,
          rebeccapurple: 1714657791,
          red: 4278190335,
          rosybrown: 3163525119,
          royalblue: 1097458175,
          saddlebrown: 2336560127,
          salmon: 4202722047,
          sandybrown: 4104413439,
          seagreen: 780883967,
          seashell: 4294307583,
          sienna: 2689740287,
          silver: 3233857791,
          skyblue: 2278484991,
          slateblue: 1784335871,
          slategray: 1887473919,
          slategrey: 1887473919,
          snow: 4294638335,
          springgreen: 16744447,
          steelblue: 1182971135,
          tan: 3535047935,
          teal: 8421631,
          thistle: 3636451583,
          tomato: 4284696575,
          turquoise: 1088475391,
          violet: 4001558271,
          wheat: 4125012991,
          white: 4294967295,
          whitesmoke: 4126537215,
          yellow: 4294902015,
          yellowgreen: 2597139199,
        },
      });
      var _ = ((
          _,
          {
            applyAnimatedValues: _ = () => !1,
            createAnimatedStyle: __webpack_require__ = (_) => new _(_),
            getComponentProps: _ = (_) => _,
          } = {},
        ) => {
          const _ = {
              applyAnimatedValues: _,
              createAnimatedStyle: __webpack_require__,
              getComponentProps: _,
            },
            _ = (_) => {
              const _ = _(_) || "Anonymous";
              return (
                ((_ = _.str(_)
                  ? _[_] || (_[_] = _(_, _))
                  : _[_] || (_[_] = _(_, _))).displayName = `Animated(${_})`),
                _
              );
            };
          return (
            _(_, (_, _) => {
              _.arr(_) && (_ = _(_)), (_[_] = _(_));
            }),
            {
              animated: _,
            }
          );
        })(
          [
            "a",
            "abbr",
            "address",
            "area",
            "article",
            "aside",
            "audio",
            "b",
            "base",
            "bdi",
            "bdo",
            "big",
            "blockquote",
            "body",
            "br",
            "button",
            "canvas",
            "caption",
            "cite",
            "code",
            "col",
            "colgroup",
            "data",
            "datalist",
            "dd",
            "del",
            "details",
            "dfn",
            "dialog",
            "div",
            "dl",
            "dt",
            "em",
            "embed",
            "fieldset",
            "figcaption",
            "figure",
            "footer",
            "form",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "head",
            "header",
            "hgroup",
            "hr",
            "html",
            "i",
            "iframe",
            "img",
            "input",
            "ins",
            "kbd",
            "keygen",
            "label",
            "legend",
            "li",
            "link",
            "main",
            "map",
            "mark",
            "menu",
            "menuitem",
            "meta",
            "meter",
            "nav",
            "noscript",
            "object",
            "ol",
            "optgroup",
            "option",
            "output",
            "p",
            "param",
            "picture",
            "pre",
            "progress",
            "q",
            "rp",
            "rt",
            "ruby",
            "s",
            "samp",
            "script",
            "section",
            "select",
            "small",
            "source",
            "span",
            "strong",
            "style",
            "sub",
            "summary",
            "sup",
            "table",
            "tbody",
            "td",
            "textarea",
            "tfoot",
            "th",
            "thead",
            "time",
            "title",
            "tr",
            "track",
            "u",
            "ul",
            "var",
            "video",
            "wbr",
            "circle",
            "clipPath",
            "defs",
            "ellipse",
            "foreignObject",
            "g",
            "image",
            "line",
            "linearGradient",
            "mask",
            "path",
            "pattern",
            "polygon",
            "polyline",
            "radialGradient",
            "rect",
            "stop",
            "svg",
            "text",
            "tspan",
          ],
          {
            applyAnimatedValues: function (_, _) {
              if (!_.nodeType || !_.setAttribute) return !1;
              const _ =
                  "filter" === _.nodeName ||
                  (_.parentNode && "filter" === _.parentNode.nodeName),
                {
                  className: _,
                  style: _,
                  children: _,
                  scrollTop: _,
                  scrollLeft: _,
                  viewBox: _,
                  ..._
                } = _,
                _ = Object.values(_),
                _ = Object.keys(_).map((_) =>
                  _ || _.hasAttribute(_)
                    ? _
                    : _[_] ||
                      (_[_] = _.replace(
                        /([A-Z])/g,
                        (_) => "-" + _.toLowerCase(),
                      )),
                );
              void 0 !== _ && (_.textContent = _);
              for (const _ in _)
                if (_.hasOwnProperty(_)) {
                  const _ = _(_, _[_]);
                  _.test(_) ? _.style.setProperty(_, _) : (_.style[_] = _);
                }
              _.forEach((_, _) => {
                _.setAttribute(_, _[_]);
              }),
                void 0 !== _ && (_.className = _),
                void 0 !== _ && (_.scrollTop = _),
                void 0 !== _ && (_.scrollLeft = _),
                void 0 !== _ && _.setAttribute("viewBox", _);
            },
            createAnimatedStyle: (_) => new _(_),
            getComponentProps: ({
              scrollTop: _,
              scrollLeft: _,
              ...__webpack_require__
            }) => __webpack_require__,
          },
        ),
        _ = _.animated;
    },
  },
]);
