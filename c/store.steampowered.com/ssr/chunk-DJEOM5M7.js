import { _ } from "./chunk-XXXXXXXX.js";
var _ = _((_) => {
  "use strict";
  var _ = Symbol.for("react.transitional.element"),
    _ = Symbol.for("react.portal"),
    _ = Symbol.for("react.fragment"),
    _ = Symbol.for("react.strict_mode"),
    _ = Symbol.for("react.profiler"),
    _ = Symbol.for("react.consumer"),
    _ = Symbol.for("react.context"),
    _ = Symbol.for("react.forward_ref"),
    _ = Symbol.for("react.suspense"),
    _ = Symbol.for("react.memo"),
    _ = Symbol.for("react.lazy"),
    _ = Symbol.iterator;
  function _(_) {
    return _ === null || typeof _ != "object"
      ? null
      : ((_ = (_ && _[_]) || _["@@iterator"]),
        typeof _ == "function" ? _ : null);
  }
  var _ = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    _ = Object.assign,
    _ = {};
  function _(_, _, _) {
    (this.props = _),
      (this.context = _),
      (this.refs = _),
      (this.updater = _ || _);
  }
  _.prototype.isReactComponent = {};
  _.prototype.setState = function (_, _) {
    if (typeof _ != "object" && typeof _ != "function" && _ != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables.",
      );
    this.updater.enqueueSetState(this, _, _, "setState");
  };
  _.prototype.forceUpdate = function (_) {
    this.updater.enqueueForceUpdate(this, _, "forceUpdate");
  };
  function _() {}
  _.prototype = _.prototype;
  function _(_, _, _) {
    (this.props = _),
      (this.context = _),
      (this.refs = _),
      (this.updater = _ || _);
  }
  var _ = (_.prototype = new _());
  _.constructor = _;
  _(_, _.prototype);
  _.isPureReactComponent = !0;
  var _ = Array.isArray,
    _ = {
      _: null,
      _: null,
      _: null,
      _: null,
      _: null,
    },
    _ = Object.prototype.hasOwnProperty;
  function _(_, _, _, _, _, _) {
    return (
      (_ = _.ref),
      {
        $$typeof: _,
        type: _,
        key: _,
        ref: _ !== void 0 ? _ : null,
        props: _,
      }
    );
  }
  function _(_, _) {
    return _(_.type, _, void 0, void 0, void 0, _.props);
  }
  function _(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === _;
  }
  function _(_) {
    var _ = {
      "=": "=0",
      ":": "=2",
    };
    return (
      "$" +
      _.replace(/[=:]/g, function (_) {
        return _[_];
      })
    );
  }
  var _ = /\/+/g;
  function _(_, _) {
    return typeof _ == "object" && _ !== null && _.key != null
      ? _("" + _.key)
      : _.toString(36);
  }
  function _() {}
  function _(_) {
    switch (_.status) {
      case "fulfilled":
        return _.value;
      case "rejected":
        throw _.reason;
      default:
        switch (
          (typeof _.status == "string"
            ? _.then(_, _)
            : ((_.status = "pending"),
              _.then(
                function (_) {
                  _.status === "pending" &&
                    ((_.status = "fulfilled"), (_.value = _));
                },
                function (_) {
                  _.status === "pending" &&
                    ((_.status = "rejected"), (_.reason = _));
                },
              )),
          _.status)
        ) {
          case "fulfilled":
            return _.value;
          case "rejected":
            throw _.reason;
        }
    }
    throw _;
  }
  function _(_, _, _, _, _) {
    var _ = typeof _;
    (_ === "undefined" || _ === "boolean") && (_ = null);
    var _ = !1;
    if (_ === null) _ = !0;
    else
      switch (_) {
        case "bigint":
        case "string":
        case "number":
          _ = !0;
          break;
        case "object":
          switch (_.$$typeof) {
            case _:
            case _:
              _ = !0;
              break;
            case _:
              return (_ = _._init), _(_(_._payload), _, _, _, _);
          }
      }
    if (_)
      return (
        (_ = _(_)),
        (_ = _ === "" ? "." + _(_, 0) : _),
        _(_)
          ? ((_ = ""),
            _ != null && (_ = _.replace(_, "$&/") + "/"),
            _(_, _, _, "", function (_) {
              return _;
            }))
          : _ != null &&
            (_(_) &&
              (_ = _(
                _,
                _ +
                  (_.key == null || (_ && _.key === _.key)
                    ? ""
                    : ("" + _.key).replace(_, "$&/") + "/") +
                  _,
              )),
            _.push(_)),
        1
      );
    _ = 0;
    var _ = _ === "" ? "." : _ + ":";
    if (_(_))
      for (var _ = 0; _ < _.length; _++)
        (_ = _[_]), (_ = _ + _(_, _)), (_ += _(_, _, _, _, _));
    else if (((_ = _(_)), typeof _ == "function"))
      for (_ = _.call(_), _ = 0; !(_ = _.next()).done; )
        (_ = _.value), (_ = _ + _(_, _++)), (_ += _(_, _, _, _, _));
    else if (_ === "object") {
      if (typeof _.then == "function") return _(_(_), _, _, _, _);
      throw (
        ((_ = String(_)),
        Error(
          "Objects are not valid as a React child (found: " +
            (_ === "[object Object]"
              ? "object with keys {" + Object.keys(_).join(", ") + "}"
              : _) +
            "). If you meant to render a collection of children, use an array instead.",
        ))
      );
    }
    return _;
  }
  function _(_, _, _) {
    if (_ == null) return _;
    var _ = [],
      _ = 0;
    return (
      _(_, _, "", "", function (_) {
        return _.call(_, _, _++);
      }),
      _
    );
  }
  function _(_) {
    if (_._status === -1) {
      var _ = _._result;
      (_ = _()),
        _.then(
          function (_) {
            (_._status === 0 || _._status === -1) &&
              ((_._status = 1), (_._result = _));
          },
          function (_) {
            (_._status === 0 || _._status === -1) &&
              ((_._status = 2), (_._result = _));
          },
        ),
        _._status === -1 && ((_._status = 0), (_._result = _));
    }
    if (_._status === 1) return _._result.default;
    throw _._result;
  }
  var _ =
    typeof reportError == "function"
      ? reportError
      : function (_) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var _ = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof _ == "object" &&
                _ !== null &&
                typeof _.message == "string"
                  ? String(_.message)
                  : String(_),
              error: _,
            });
            if (!window.dispatchEvent(_)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", _);
            return;
          }
          console.error(_);
        };
  function _() {}
  _.Children = {
    map: _,
    forEach: function (_, _, _) {
      _(
        _,
        function () {
          _.apply(this, arguments);
        },
        _,
      );
    },
    count: function (_) {
      var _ = 0;
      return (
        _(_, function () {
          _++;
        }),
        _
      );
    },
    toArray: function (_) {
      return (
        _(_, function (_) {
          return _;
        }) || []
      );
    },
    only: function (_) {
      if (!_(_))
        throw Error(
          "React.Children.only expected to receive a single React element child.",
        );
      return _;
    },
  };
  _.Component = _;
  _.Fragment = _;
  _.Profiler = _;
  _.PureComponent = _;
  _.StrictMode = _;
  _.Suspense = _;
  _.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = _;
  _.__COMPILER_RUNTIME = {
    __proto__: null,
    _: function (_) {
      return _._.useMemoCache(_);
    },
  };
  _.cache = function (_) {
    return function () {
      return _.apply(null, arguments);
    };
  };
  _.cloneElement = function (_, _, _) {
    if (_ == null)
      throw Error(
        "The argument must be a React element, but you passed " + _ + ".",
      );
    var _ = _({}, _.props),
      _ = _.key,
      _ = void 0;
    if (_ != null)
      for (_ in (_.ref !== void 0 && (_ = void 0),
      _.key !== void 0 && (_ = "" + _.key),
      _))
        !_.call(_, _) ||
          _ === "key" ||
          _ === "__self" ||
          _ === "__source" ||
          (_ === "ref" && _.ref === void 0) ||
          (_[_] = _[_]);
    var _ = arguments.length - 2;
    if (_ === 1) _.children = _;
    else if (1 < _) {
      for (var _ = Array(_), _ = 0; _ < _; _++) _[_] = arguments[_ + 2];
      _.children = _;
    }
    return _(_.type, _, void 0, void 0, _, _);
  };
  _.createContext = function (_) {
    return (
      (_ = {
        $$typeof: _,
        _currentValue: _,
        _currentValue2: _,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
      }),
      (_.Provider = _),
      (_.Consumer = {
        $$typeof: _,
        _context: _,
      }),
      _
    );
  };
  _.createElement = function (_, _, _) {
    var _,
      _ = {},
      _ = null;
    if (_ != null)
      for (_ in (_.key !== void 0 && (_ = "" + _.key), _))
        _.call(_, _) &&
          _ !== "key" &&
          _ !== "__self" &&
          _ !== "__source" &&
          (_[_] = _[_]);
    var _ = arguments.length - 2;
    if (_ === 1) _.children = _;
    else if (1 < _) {
      for (var _ = Array(_), _ = 0; _ < _; _++) _[_] = arguments[_ + 2];
      _.children = _;
    }
    if (_ && _.defaultProps)
      for (_ in ((_ = _.defaultProps), _)) _[_] === void 0 && (_[_] = _[_]);
    return _(_, _, void 0, void 0, null, _);
  };
  _.createRef = function () {
    return {
      current: null,
    };
  };
  _.forwardRef = function (_) {
    return {
      $$typeof: _,
      render: _,
    };
  };
  _.isValidElement = _;
  _.lazy = function (_) {
    return {
      $$typeof: _,
      _payload: {
        _status: -1,
        _result: _,
      },
      _init: _,
    };
  };
  _.memo = function (_, _) {
    return {
      $$typeof: _,
      type: _,
      compare: _ === void 0 ? null : _,
    };
  };
  _.startTransition = function (_) {
    var _ = _._,
      _ = {};
    _._ = _;
    try {
      var _ = _(),
        _ = _._;
      _ !== null && _(_, _),
        typeof _ == "object" &&
          _ !== null &&
          typeof _.then == "function" &&
          _.then(_, _);
    } catch (_) {
      _(_);
    } finally {
      _._ = _;
    }
  };
  _.unstable_useCacheRefresh = function () {
    return _._.useCacheRefresh();
  };
  _.use = function (_) {
    return _._.use(_);
  };
  _.useActionState = function (_, _, _) {
    return _._.useActionState(_, _, _);
  };
  _.useCallback = function (_, _) {
    return _._.useCallback(_, _);
  };
  _.useContext = function (_) {
    return _._.useContext(_);
  };
  _.useDebugValue = function () {};
  _.useDeferredValue = function (_, _) {
    return _._.useDeferredValue(_, _);
  };
  _.useEffect = function (_, _, _) {
    var _ = _._;
    if (typeof _ == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React.",
      );
    return _.useEffect(_, _);
  };
  _.useId = function () {
    return _._.useId();
  };
  _.useImperativeHandle = function (_, _, _) {
    return _._.useImperativeHandle(_, _, _);
  };
  _.useInsertionEffect = function (_, _) {
    return _._.useInsertionEffect(_, _);
  };
  _.useLayoutEffect = function (_, _) {
    return _._.useLayoutEffect(_, _);
  };
  _.useMemo = function (_, _) {
    return _._.useMemo(_, _);
  };
  _.useOptimistic = function (_, _) {
    return _._.useOptimistic(_, _);
  };
  _.useReducer = function (_, _, _) {
    return _._.useReducer(_, _, _);
  };
  _.useRef = function (_) {
    return _._.useRef(_);
  };
  _.useState = function (_) {
    return _._.useState(_);
  };
  _.useSyncExternalStore = function (_, _, _) {
    return _._.useSyncExternalStore(_, _, _);
  };
  _.useTransition = function () {
    return _._.useTransition();
  };
  _.version = "19.1.1";
});
var _ = _((_, _) => {
  "use strict";
  _.exports = _();
});
export { _ };
