import { _ } from "./chunk-XXXXXXXX.js";
var _ = _((_) => {
  "use strict";
  var _ = Symbol.for("react.element"),
    _ = Symbol.for("react.portal"),
    _ = Symbol.for("react.fragment"),
    _ = Symbol.for("react.strict_mode"),
    _ = Symbol.for("react.profiler"),
    _ = Symbol.for("react.provider"),
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
        "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
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
    _ = Object.prototype.hasOwnProperty,
    _ = {
      current: null,
    },
    _ = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0,
    };
  function _(_, _, _) {
    var _,
      _ = {},
      _ = null,
      _ = null;
    if (_ != null)
      for (_ in (_.ref !== void 0 && (_ = _.ref),
      _.key !== void 0 && (_ = "" + _.key),
      _))
        _.call(_, _) && !_.hasOwnProperty(_) && (_[_] = _[_]);
    var _ = arguments.length - 2;
    if (_ === 1) _.children = _;
    else if (1 < _) {
      for (var _ = Array(_), _ = 0; _ < _; _++) _[_] = arguments[_ + 2];
      _.children = _;
    }
    if (_ && _.defaultProps)
      for (_ in ((_ = _.defaultProps), _)) _[_] === void 0 && (_[_] = _[_]);
    return {
      $$typeof: _,
      type: _,
      key: _,
      ref: _,
      props: _,
      _owner: _.current,
    };
  }
  function _(_, _) {
    return {
      $$typeof: _,
      type: _.type,
      key: _,
      ref: _.ref,
      props: _.props,
      _owner: _._owner,
    };
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
  function _(_, _, _, _, _) {
    var _ = typeof _;
    (_ === "undefined" || _ === "boolean") && (_ = null);
    var _ = !1;
    if (_ === null) _ = !0;
    else
      switch (_) {
        case "string":
        case "number":
          _ = !0;
          break;
        case "object":
          switch (_.$$typeof) {
            case _:
            case _:
              _ = !0;
          }
      }
    if (_)
      return (
        (_ = _),
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
                  (!_.key || (_ && _.key === _.key)
                    ? ""
                    : ("" + _.key).replace(_, "$&/") + "/") +
                  _,
              )),
            _.push(_)),
        1
      );
    if (((_ = 0), (_ = _ === "" ? "." : _ + ":"), _(_)))
      for (var _ = 0; _ < _.length; _++) {
        _ = _[_];
        var _ = _ + _(_, _);
        _ += _(_, _, _, _, _);
      }
    else if (((_ = _(_)), typeof _ == "function"))
      for (_ = _.call(_), _ = 0; !(_ = _.next()).done; )
        (_ = _.value), (_ = _ + _(_, _++)), (_ += _(_, _, _, _, _));
    else if (_ === "object")
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
  var _ = {
      current: null,
    },
    _ = {
      transition: null,
    },
    _ = {
      ReactCurrentDispatcher: _,
      ReactCurrentBatchConfig: _,
      ReactCurrentOwner: _,
    };
  function _() {
    throw Error("act(...) is not supported in production builds of React.");
  }
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
  _.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _;
  _.act = _;
  _.cloneElement = function (_, _, _) {
    if (_ == null)
      throw Error(
        "React.cloneElement(...): The argument must be a React element, but you passed " +
          _ +
          ".",
      );
    var _ = _({}, _.props),
      _ = _.key,
      _ = _.ref,
      _ = _._owner;
    if (_ != null) {
      if (
        (_.ref !== void 0 && ((_ = _.ref), (_ = _.current)),
        _.key !== void 0 && (_ = "" + _.key),
        _.type && _.type.defaultProps)
      )
        var _ = _.type.defaultProps;
      for (_ in _)
        _.call(_, _) &&
          !_.hasOwnProperty(_) &&
          (_[_] = _[_] === void 0 && _ !== void 0 ? _[_] : _[_]);
    }
    var _ = arguments.length - 2;
    if (_ === 1) _.children = _;
    else if (1 < _) {
      _ = Array(_);
      for (var _ = 0; _ < _; _++) _[_] = arguments[_ + 2];
      _.children = _;
    }
    return {
      $$typeof: _,
      type: _.type,
      key: _,
      ref: _,
      props: _,
      _owner: _,
    };
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
        _defaultValue: null,
        _globalName: null,
      }),
      (_.Provider = {
        $$typeof: _,
        _context: _,
      }),
      (_.Consumer = _)
    );
  };
  _.createElement = _;
  _.createFactory = function (_) {
    var _ = _.bind(null, _);
    return (_.type = _), _;
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
    var _ = _.transition;
    _.transition = {};
    try {
      _();
    } finally {
      _.transition = _;
    }
  };
  _.unstable_act = _;
  _.useCallback = function (_, _) {
    return _.current.useCallback(_, _);
  };
  _.useContext = function (_) {
    return _.current.useContext(_);
  };
  _.useDebugValue = function () {};
  _.useDeferredValue = function (_) {
    return _.current.useDeferredValue(_);
  };
  _.useEffect = function (_, _) {
    return _.current.useEffect(_, _);
  };
  _.useId = function () {
    return _.current.useId();
  };
  _.useImperativeHandle = function (_, _, _) {
    return _.current.useImperativeHandle(_, _, _);
  };
  _.useInsertionEffect = function (_, _) {
    return _.current.useInsertionEffect(_, _);
  };
  _.useLayoutEffect = function (_, _) {
    return _.current.useLayoutEffect(_, _);
  };
  _.useMemo = function (_, _) {
    return _.current.useMemo(_, _);
  };
  _.useReducer = function (_, _, _) {
    return _.current.useReducer(_, _, _);
  };
  _.useRef = function (_) {
    return _.current.useRef(_);
  };
  _.useState = function (_) {
    return _.current.useState(_);
  };
  _.useSyncExternalStore = function (_, _, _) {
    return _.current.useSyncExternalStore(_, _, _);
  };
  _.useTransition = function () {
    return _.current.useTransition();
  };
  _.version = "18.3.1";
});
var _ = _((_, _) => {
  "use strict";
  _.exports = _();
});
export { _ };
