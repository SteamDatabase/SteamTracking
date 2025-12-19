var CLSTAMP = "steamdb";
(() => {
  "use strict";
  var _,
    _,
    _ = {
      chunkid: (module, module_exports, __webpack_require__) => {
        __webpack_require__._(_, {
          _: () => _,
          _: () => _,
          _: () => _,
        });
        var _,
          _,
          _,
          _ = __webpack_require__("chunkid");
        class _ {
          m_ActiveInputId;
          m_ActiveInputTimeout;
          m_config;
          constructor(_) {
            this.m_config = _;
          }
          Reset() {
            (this.m_ActiveInputId = void 0),
              null != this.m_ActiveInputTimeout &&
                (clearInterval(this.m_ActiveInputTimeout),
                (this.m_ActiveInputTimeout = void 0));
          }
          HandleInputButtonDown(_, _) {
            if (this.m_ActiveInputId !== _ && null != _) {
              this.Reset(), (this.m_ActiveInputId = _);
              const _ = () => {
                this.m_ActiveInputTimeout = window.setInterval(() => {
                  _();
                }, this.m_config.repeatInterval_ms);
              };
              null == this.m_config.firstRepeatInterval_ms ||
              this.m_config.firstRepeatInterval_ms ===
                this.m_config.repeatInterval_ms
                ? __webpack_require__()
                : (this.m_ActiveInputTimeout = window.setTimeout(() => {
                    _(), __webpack_require__();
                  }, this.m_config.firstRepeatInterval_ms));
            }
          }
        }
        !(function (_) {
          (_[(_.None = 0)] = "None"),
            (_[(_.Horizontal = 1)] = "Horizontal"),
            (_[(_.Vertical = 2)] = "Vertical");
        })(_ || (_ = {}));
        class _ {
          m_config;
          m_inputRepeatGenerator;
          m_repeatOnAxis = _.None;
          m_fnRepeatAllowed = () => !0;
          constructor(_) {
            (this.m_config = _), (this.m_inputRepeatGenerator = new _(_));
          }
          Reset() {
            this.m_inputRepeatGenerator.Reset();
          }
          SetRepeatAllowed(_) {
            _ || (_ = () => !0), (this.m_fnRepeatAllowed = _);
          }
          HandleInputButtonDown(_, _, _) {
            this.m_fnRepeatAllowed() && this.m_config.inputsThatRepeat.has(_)
              ? this.m_repeatOnAxis == _.None &&
                ((_ != _.DIR_UP && _ != _.DIR_DOWN) ||
                  (this.m_repeatOnAxis = _.Vertical),
                (_ != _.DIR_LEFT && _ != _.DIR_RIGHT) ||
                  (this.m_repeatOnAxis = _.Horizontal),
                _(),
                this.m_inputRepeatGenerator.HandleInputButtonDown(_, _))
              : (_(), this.m_inputRepeatGenerator.Reset());
          }
          HandleInputButtonUp(_) {
            if (
              this.m_config.inputsThatRepeat.has(_) &&
              this.m_repeatOnAxis != _.None
            ) {
              const _ = _ == _.DIR_UP || _ == _.DIR_DOWN,
                _ = _ == _.DIR_LEFT || _ == _.DIR_RIGHT;
              ((this.m_repeatOnAxis == _.Vertical && _) ||
                (this.m_repeatOnAxis == _.Horizontal && _)) &&
                ((this.m_repeatOnAxis = _.None),
                this.m_inputRepeatGenerator.Reset());
            } else this.m_inputRepeatGenerator.Reset();
          }
        }
        !(function (_) {
          (_[(_.INVALID = 0)] = "INVALID"),
            (_[(_._ = 1)] = "OK"),
            (_[(_.CANCEL = 2)] = "CANCEL"),
            (_[(_.SECONDARY = 3)] = "SECONDARY"),
            (_[(_.OPTIONS = 4)] = "OPTIONS"),
            (_[(_.BUMPER_LEFT = 5)] = "BUMPER_LEFT"),
            (_[(_.BUMPER_RIGHT = 6)] = "BUMPER_RIGHT"),
            (_[(_.TRIGGER_LEFT = 7)] = "TRIGGER_LEFT"),
            (_[(_.TRIGGER_RIGHT = 8)] = "TRIGGER_RIGHT"),
            (_[(_.DIR_UP = 9)] = "DIR_UP"),
            (_[(_.DIR_DOWN = 10)] = "DIR_DOWN"),
            (_[(_.DIR_LEFT = 11)] = "DIR_LEFT"),
            (_[(_.DIR_RIGHT = 12)] = "DIR_RIGHT"),
            (_[(_.SELECT = 13)] = "SELECT"),
            (_[(_.START = 14)] = "START"),
            (_[(_.LSTICK_CLICK = 15)] = "LSTICK_CLICK"),
            (_[(_.RSTICK_CLICK = 16)] = "RSTICK_CLICK"),
            (_[(_.LSTICK_TOUCH = 17)] = "LSTICK_TOUCH"),
            (_[(_.RSTICK_TOUCH = 18)] = "RSTICK_TOUCH"),
            (_[(_.LPAD_TOUCH = 19)] = "LPAD_TOUCH"),
            (_[(_.LPAD_CLICK = 20)] = "LPAD_CLICK"),
            (_[(_.RPAD_TOUCH = 21)] = "RPAD_TOUCH"),
            (_[(_.RPAD_CLICK = 22)] = "RPAD_CLICK"),
            (_[(_.REAR_LEFT_UPPER = 23)] = "REAR_LEFT_UPPER"),
            (_[(_.REAR_LEFT_LOWER = 24)] = "REAR_LEFT_LOWER"),
            (_[(_.REAR_RIGHT_UPPER = 25)] = "REAR_RIGHT_UPPER"),
            (_[(_.REAR_RIGHT_LOWER = 26)] = "REAR_RIGHT_LOWER"),
            (_[(_.STEAM_GUIDE = 27)] = "STEAM_GUIDE"),
            (_[(_.STEAM_QUICK_MENU = 28)] = "STEAM_QUICK_MENU");
        })(_ || (_ = {})),
          (function (_) {
            (_[(_.UNKNOWN = 0)] = "UNKNOWN"),
              (_[(_.GAMEPAD = 1)] = "GAMEPAD"),
              (_[(_.KEYBOARD_SIMULATOR = 2)] = "KEYBOARD_SIMULATOR"),
              (_[(_.MOUSE = 3)] = "MOUSE"),
              (_[(_.TOUCH = 4)] = "TOUCH"),
              (_[(_.LPAD = 5)] = "LPAD"),
              (_[(_.RPAD = 6)] = "RPAD");
          })(_ || (_ = {}));
        class _ {
          m_OnGamepadDetectedCallbacks = new _._();
          m_ButtonDownCallbacks = new _._();
          m_ButtonUpCallbacks = new _._();
          m_AnalogCallbacks = new _._();
          m_NavigationTypeChangeCallbacks = new _._();
          m_eNavigationSourceType;
          m_fLastActiveTime;
          m_nLastActiveControllerIndex = -1;
          m_ButtonRepeatHandler = new _({
            inputsThatRepeat: new Set([
              _.DIR_UP,
              _.DIR_DOWN,
              _.DIR_LEFT,
              _.DIR_RIGHT,
            ]),
            firstRepeatInterval_ms: 400,
            repeatInterval_ms: 50,
          });
          m_bGamepadDetected = !1;
          RegisterForGamepadDetected(_) {
            return this.m_OnGamepadDetectedCallbacks.Register(_);
          }
          RegisterForGamepadButtonDown(_) {
            return this.m_ButtonDownCallbacks.Register(_);
          }
          RegisterForGamepadButtonUp(_) {
            return this.m_ButtonUpCallbacks.Register(_);
          }
          RegisterForAnalog(_) {
            return this.m_AnalogCallbacks.Register(_);
          }
          RegisterForNavigationTypeChange(_) {
            return this.m_NavigationTypeChangeCallbacks.Register(_);
          }
          SetSourceType(_) {
            this.m_eNavigationSourceType = _;
          }
          GetSourceType() {
            return this.m_eNavigationSourceType;
          }
          SetControllerActive(_) {
            (this.m_nLastActiveControllerIndex = _),
              (this.m_fLastActiveTime = Date.now());
          }
          GetActiveControllerIndex() {
            return this.m_nLastActiveControllerIndex;
          }
          GetActiveControllerTime() {
            return this.m_fLastActiveTime;
          }
          SetRepeatAllowed(_) {
            this.m_ButtonRepeatHandler.SetRepeatAllowed(_);
          }
          OnGamepadDetected() {
            console.log("Gamepad detected"),
              (this.m_bGamepadDetected = !0),
              this.m_OnGamepadDetectedCallbacks.Dispatch();
          }
          OnButtonDown(_, _) {
            void 0 === _ && (_ = -1),
              this.SetControllerActive(_),
              this.m_ButtonRepeatHandler.HandleInputButtonDown(
                _,
                () => this.DispatchButtonDown(_, !1),
                () => this.DispatchButtonDown(_, !0),
              );
          }
          OnButtonUp(_, _) {
            void 0 === _ && (_ = -1),
              this.SetControllerActive(_),
              this.m_ButtonRepeatHandler.HandleInputButtonUp(_),
              this.m_ButtonUpCallbacks.Dispatch(
                _,
                this.m_eNavigationSourceType,
                this.m_nLastActiveControllerIndex,
              );
          }
          DispatchButtonDown(_, _) {
            this.m_ButtonDownCallbacks.Dispatch(
              _,
              this.m_eNavigationSourceType,
              this.m_nLastActiveControllerIndex,
              _,
            );
          }
          OnAnalogPad(_, _, _, _) {
            void 0 === _ && (_ = -1),
              this.SetControllerActive(_),
              this.m_AnalogCallbacks.Dispatch(
                _,
                this.m_nLastActiveControllerIndex,
                _,
                _,
              );
          }
          OnNavigationTypeChanged(_) {
            this.m_NavigationTypeChangeCallbacks.Dispatch(_);
          }
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        function _(_, _) {
          return (function (_, _) {
            const _ = _.findIndex(_);
            return _ >= 0 && (_.splice(_, 1), !0);
          })(_, (_) => _ == _);
        }
        __webpack_require__._(_, {
          _: () => _,
        });
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        function _(_, _, _) {
          return {
            get() {
              let _ = _.value.bind(this);
              return (
                Object.prototype.hasOwnProperty.call(this, _) ||
                  Object.defineProperty(this, _, {
                    value: _,
                  }),
                _
              );
            },
          };
        }
        __webpack_require__._(_, {
          _: () => _,
        });
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        __webpack_require__._(_, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid");
        class _ {
          m_vecCallbacks = [];
          Register(_) {
            this.m_vecCallbacks.push(_);
            return {
              Unregister: () => {
                _._(this.m_vecCallbacks, _);
              },
            };
          }
          Dispatch(..._) {
            for (const _ of Array.from(this.m_vecCallbacks)) _(..._);
          }
          ClearAllCallbacks() {
            this.m_vecCallbacks = [];
          }
          CountRegistered() {
            return this.m_vecCallbacks.length;
          }
          static PromiseFromAny(_) {
            return new Promise((_) => {
              let _ = [];
              const _ = () => {
                __webpack_require__.forEach((_) => _.Unregister()), _();
              };
              for (const _ of _) __webpack_require__.push(_.Register(_));
            });
          }
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        function _(_, _) {
          return !!_ && "object" == typeof _.SteamClient && _ in _.SteamClient;
        }
        function _(_) {
          return (function (_, _) {
            if (!_) return !1;
            const [_, _] = _.split(".", 2);
            return _ && _ && _(_, _) && _ in _.SteamClient[_];
          })(window, _);
        }
        __webpack_require__._(_, {
          _: () => _,
        });
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "VALVE_PUBLIC_PATH" in window
          ? (_._ = window.VALVE_PUBLIC_PATH)
          : console.error(
              "VALVE_PUBLIC_PATH not defined; check for a call to CHTMLHelpers::WebpackConfigScriptlet",
            ),
          123 !== Array.from(new Set([123]))[0] &&
            console.error("Should not include prototypejs.");
      },
      chunkid: (module) => {
        _.exports = jQuery;
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        __webpack_require__._(_, {
          _: () => _,
        });
        function _(_, _, _, _) {
          var _,
            _ = arguments.length,
            _ =
              _ < 3
                ? _
                : null === _
                  ? (_ = Object.getOwnPropertyDescriptor(_, _))
                  : _;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            _ = Reflect.decorate(_, _, _, _);
          else
            for (var _ = _.length - 1; _ >= 0; _--)
              (_ = _[_]) &&
                (_ = (_ < 3 ? _(_) : _ > 3 ? _(_, _, _) : _(_, _)) || _);
          return _ > 3 && _ && Object.defineProperty(_, _, _), _;
        }
        Object.create;
        Object.create;
        "function" == typeof SuppressedError && SuppressedError;
      },
    },
    _ = {};
  function _(_) {
    var _ = _[_];
    if (void 0 !== _) return _.exports;
    var _ = (_[_] = {
      exports: {},
    });
    return __webpack_require__[_](_, _.exports, _), _.exports;
  }
  (_._ = _),
    (_._ = (_) => {
      var _ = _ && _.__esModule ? () => _.default : () => _;
      return (
        _._(_, {
          _: _,
        }),
        _
      );
    }),
    (_._ = (_, _) => {
      for (var _ in _)
        _._(_, _) &&
          !_._(_, _) &&
          Object.defineProperty(_, _, {
            enumerable: !0,
            get: _[_],
          });
    }),
    (_._ = {}),
    (_._ = (_) =>
      Promise.all(Object.keys(_._).reduce((_, _) => (_._[_](_, _), _), []))),
    (_._ = (_) =>
      "javascript/legacy_web/" +
      ({
        97: "desktop",
        616: "gamepad",
      }[_] || _) +
      ".js?contenthash=" +
      {
        97: "cc7578bf4494c123750e",
        616: "b65463883f47d5e6b9a5",
        699: "ffae7596255b20411bd0",
      }[_]),
    (_.miniCssF = (_) =>
      "css/legacy_web/gamepad.css?contenthash=8f8038e8f8c48763e2ca"),
    (_._ = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (_) {
        if ("object" == typeof window) return window;
      }
    })()),
    (_._ = (_, _) => Object.prototype.hasOwnProperty.call(_, _)),
    (_ = {}),
    (_ = "legacy_web:"),
    (_._ = (_, _, _, _) => {
      if (_[_]) _[_].push(_);
      else {
        var _, _;
        if (void 0 !== _)
          for (
            var _ = document.getElementsByTagName("script"), _ = 0;
            _ < _.length;
            _++
          ) {
            var _ = _[_];
            if (
              _.getAttribute("src") == _ ||
              _.getAttribute("data-webpack") == _ + _
            ) {
              _ = _;
              break;
            }
          }
        _ ||
          ((_ = !0),
          ((_ = document.createElement("script")).charset = "utf-8"),
          (_.timeout = 120),
          _._ && _.setAttribute("nonce", _._),
          _.setAttribute("data-webpack", _ + _),
          (_.src = _)),
          (_[_] = [_]);
        var _ = (_, _) => {
            (_.onerror = _.onload = null), clearTimeout(_);
            var _ = _[_];
            if (
              (delete _[_],
              _.parentNode && _.parentNode.removeChild(_),
              _ && _.forEach((_) => _(_)),
              _)
            )
              return _(_);
          },
          _ = setTimeout(
            _.bind(null, void 0, {
              type: "timeout",
              target: _,
            }),
            12e4,
          );
        (_.onerror = _.bind(null, _.onerror)),
          (_.onload = _.bind(null, _.onload)),
          _ && document.head.appendChild(_);
      }
    }),
    (() => {
      var _;
      _._.importScripts && (_ = _._.location + "");
      var _ = _._.document;
      if (!_ && _ && (_.currentScript && (_ = _.currentScript.src), !_)) {
        var _ = _.getElementsByTagName("script");
        if (_.length)
          for (var _ = _.length - 1; _ > -1 && (!_ || !/^http(s?):/.test(_)); )
            _ = _[_--].src;
      }
      if (!_)
        throw new Error(
          "Automatic publicPath is not supported in this browser",
        );
      (_ = _.replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (_._ = _ + "../../");
    })(),
    (() => {
      if ("undefined" != typeof document) {
        var _ = (_) =>
            new Promise((_, _) => {
              var _ = _.miniCssF(_),
                _ = _._ + _;
              if (
                ((_, _) => {
                  for (
                    var _ = document.getElementsByTagName("link"), _ = 0;
                    _ < _.length;
                    _++
                  ) {
                    var _ =
                      (_ = _[_]).getAttribute("data-href") ||
                      _.getAttribute("href");
                    if ("stylesheet" === _.rel && (_ === _ || _ === _))
                      return _;
                  }
                  var _ = document.getElementsByTagName("style");
                  for (_ = 0; _ < _.length; _++) {
                    var _;
                    if (
                      (_ = (_ = _[_]).getAttribute("data-href")) === _ ||
                      _ === _
                    )
                      return _;
                  }
                })(_, _)
              )
                return _();
              ((_, _, _, _, _) => {
                var _ = document.createElement("link");
                (_.rel = "stylesheet"),
                  (_.type = "text/css"),
                  (_.onerror = _.onload =
                    (_) => {
                      if (((_.onerror = _.onload = null), "load" === _.type))
                        _();
                      else {
                        var _ = _ && _.type,
                          _ = (_ && _.target && _.target.href) || _,
                          _ = new Error(
                            "Loading CSS chunk " +
                              _ +
                              " failed.\n(" +
                              _ +
                              ": " +
                              _ +
                              ")",
                          );
                        (_.name = "ChunkLoadError"),
                          (_.code = "CSS_CHUNK_LOAD_FAILED"),
                          (_.type = _),
                          (_.request = _),
                          _.parentNode && _.parentNode.removeChild(_),
                          _(_);
                      }
                    }),
                  (_.href = _),
                  _
                    ? _.parentNode.insertBefore(_, _.nextSibling)
                    : document.head.appendChild(_);
              })(_, _, null, _, _);
            }),
          _ = {
            792: 0,
          };
        _._.miniCss = (_, _) => {
          _[_]
            ? _.push(_[_])
            : 0 !== _[_] &&
              {
                616: 1,
              }[_] &&
              _.push(
                (_[_] = _(_).then(
                  () => {
                    _[_] = 0;
                  },
                  (_) => {
                    throw (delete _[_], _);
                  },
                )),
              );
        };
      }
    })(),
    (() => {
      var _ = {
        792: 0,
      };
      _._._ = (_, _) => {
        var _ = _._(_, _) ? _[_] : void 0;
        if (0 !== _)
          if (_) __webpack_require__.push(_[2]);
          else {
            var _ = new Promise((_, _) => (_ = _[_] = [_, _]));
            __webpack_require__.push((_[2] = _));
            var _ = _._ + _._(_),
              _ = new Error();
            _._(
              _,
              (_) => {
                if (_._(_, _) && (0 !== (_ = _[_]) && (_[_] = void 0), _)) {
                  var _ = _ && ("load" === _.type ? "missing" : _.type),
                    _ = _ && _.target && _.target.src;
                  (_.message =
                    "Loading chunk " + _ + " failed.\n(" + _ + ": " + _ + ")"),
                    (_.name = "ChunkLoadError"),
                    (_.type = _),
                    (_.request = _),
                    _[1](_);
                }
              },
              "chunk-" + _,
              _,
            );
          }
      };
      var _ = (_, _) => {
          var _,
            _,
            [_, _, _] = _,
            _ = 0;
          if (_.some((_) => 0 !== _[_])) {
            for (_ in _) _._(_, _) && (_._[_] = _[_]);
            if (_) _(_);
          }
          for (_ && _(_); _ < _.length; _++)
            (_ = _[_]), _._(_, _) && _[_] && _[_][0](), (_[_] = 0);
        },
        _ = (self.webpackChunklegacy_web = self.webpackChunklegacy_web || []);
      __webpack_require__.forEach(_.bind(null, 0)),
        (_.push = _.bind(null, _.push.bind(_)));
    })();
  _(105);
  var _ = _(669),
    _ = _._(_),
    _ = _(629),
    _ = _(259),
    _ = _(230);
  let _ = [
    {
      index: 0,
      type: _._._,
      category: "action",
    },
    {
      index: 1,
      type: _._.CANCEL,
      category: "action",
    },
    {
      index: 2,
      type: _._.SECONDARY,
      category: "action",
    },
    {
      index: 3,
      type: _._.OPTIONS,
      category: "action",
    },
    {
      index: 4,
      type: _._.BUMPER_LEFT,
      category: "action",
    },
    {
      index: 5,
      type: _._.BUMPER_RIGHT,
      category: "action",
    },
    {
      index: 6,
      type: _._.TRIGGER_LEFT,
      category: "action",
    },
    {
      index: 7,
      type: _._.TRIGGER_RIGHT,
      category: "action",
    },
    {
      index: 8,
      type: _._.SELECT,
      category: "action",
    },
    {
      index: 9,
      type: _._.START,
      category: "action",
    },
    {
      index: 10,
      type: _._.LSTICK_CLICK,
      category: "action",
    },
    {
      index: 11,
      type: _._.RSTICK_CLICK,
      category: "action",
    },
    {
      index: 12,
      type: _._.DIR_UP,
      category: "navigation",
    },
    {
      index: 13,
      type: _._.DIR_DOWN,
      category: "navigation",
    },
    {
      index: 14,
      type: _._.DIR_LEFT,
      category: "navigation",
    },
    {
      index: 15,
      type: _._.DIR_RIGHT,
      category: "navigation",
    },
    {
      index: 16,
      type: _._.STEAM_GUIDE,
      category: "action",
    },
    {
      index: 17,
      type: _._.SELECT,
      category: "action",
    },
  ];
  class _ extends _._ {
    m_rgGamepadStatus = [];
    constructor() {
      super(),
        this.SetSourceType(_._.GAMEPAD),
        window.addEventListener("gamepadconnected", (_) => {
          this.m_bGamepadDetected ||
            (this.OnGamepadDetected(), this.PollGamepads());
        });
    }
    PollGamepads() {
      let _ = navigator.getGamepads(),
        _ = !1;
      for (let _ = 0; _ < _.length; _++) {
        let _ = _[_];
        if (!_) continue;
        this.m_rgGamepadStatus[_] ||
          (this.m_rgGamepadStatus[_] = {
            buttons: [],
          });
        let _ = this.m_rgGamepadStatus[_];
        for (let _ = 0; _ < _.length; _++) {
          let _ = _[_],
            _ = _.index;
          _.buttons[_] &&
            (_.buttons[_].pressed
              ? ((_ = !0),
                _.buttons[_] ||
                  ((_.buttons[_] = !0), this.OnButtonDown(_.type)))
              : _.buttons[_] && (this.OnButtonUp(_.type), (_.buttons[_] = !1)));
        }
      }
      requestAnimationFrame(this.PollGamepads);
    }
  }
  (0, _._)([_._], _.prototype, "PollGamepads", null);
  var _ = _(832);
  async function _(_) {
    const { InitializeGamepadNavigation: _ } = await Promise.all([
      _._(699),
      _._(616),
    ]).then(_.bind(_, 416));
    _(_);
  }
  _._.endsWith("shared/") || (_._ = _._ + "shared/"),
    _()(function () {
      !(function () {
        const _ = new _();
        navigator.userAgent.includes("Valve Steam Gamepad")
          ? _(_)
          : (0, _._)("BrowserView.RegisterForMessageFromParent") &&
              (0, _._)("BrowserView.PostMessageToParent")
            ? (async function () {
                const { InitializeForDesktop: _ } = await _._(97).then(
                  _.bind(_, 44),
                );
                _();
              })()
            : _.RegisterForGamepadDetected(() => _(_));
      })();
    });
})();
