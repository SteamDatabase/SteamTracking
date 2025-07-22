import { c as w } from "./chunk-6LV3XD5Z.js";
var q = w((r) => {
  "use strict";
  var y = Symbol.for("react.element"),
    T = Symbol.for("react.portal"),
    A = Symbol.for("react.fragment"),
    N = Symbol.for("react.strict_mode"),
    U = Symbol.for("react.profiler"),
    F = Symbol.for("react.provider"),
    L = Symbol.for("react.context"),
    M = Symbol.for("react.forward_ref"),
    z = Symbol.for("react.suspense"),
    B = Symbol.for("react.memo"),
    H = Symbol.for("react.lazy"),
    R = Symbol.iterator;
  function W(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (R && e[R]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var C = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    j = Object.assign,
    O = {};
  function p(e, t, n) {
    (this.props = e),
      (this.context = t),
      (this.refs = O),
      (this.updater = n || C);
  }
  p.prototype.isReactComponent = {};
  p.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
      throw Error(
        "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
      );
    this.updater.enqueueSetState(this, e, t, "setState");
  };
  p.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
  };
  function x() {}
  x.prototype = p.prototype;
  function m(e, t, n) {
    (this.props = e),
      (this.context = t),
      (this.refs = O),
      (this.updater = n || C);
  }
  var S = (m.prototype = new x());
  S.constructor = m;
  j(S, p.prototype);
  S.isPureReactComponent = !0;
  var $ = Array.isArray,
    g = Object.prototype.hasOwnProperty,
    E = { current: null },
    P = { key: !0, ref: !0, __self: !0, __source: !0 };
  function I(e, t, n) {
    var u,
      o = {},
      c = null,
      f = null;
    if (t != null)
      for (u in (t.ref !== void 0 && (f = t.ref),
      t.key !== void 0 && (c = "" + t.key),
      t))
        g.call(t, u) && !P.hasOwnProperty(u) && (o[u] = t[u]);
    var s = arguments.length - 2;
    if (s === 1) o.children = n;
    else if (1 < s) {
      for (var i = Array(s), a = 0; a < s; a++) i[a] = arguments[a + 2];
      o.children = i;
    }
    if (e && e.defaultProps)
      for (u in ((s = e.defaultProps), s)) o[u] === void 0 && (o[u] = s[u]);
    return {
      $$typeof: y,
      type: e,
      key: c,
      ref: f,
      props: o,
      _owner: E.current,
    };
  }
  function G(e, t) {
    return {
      $$typeof: y,
      type: e.type,
      key: t,
      ref: e.ref,
      props: e.props,
      _owner: e._owner,
    };
  }
  function k(e) {
    return typeof e == "object" && e !== null && e.$$typeof === y;
  }
  function J(e) {
    var t = { "=": "=0", ":": "=2" };
    return (
      "$" +
      e.replace(/[=:]/g, function (n) {
        return t[n];
      })
    );
  }
  var b = /\/+/g;
  function v(e, t) {
    return typeof e == "object" && e !== null && e.key != null
      ? J("" + e.key)
      : t.toString(36);
  }
  function _(e, t, n, u, o) {
    var c = typeof e;
    (c === "undefined" || c === "boolean") && (e = null);
    var f = !1;
    if (e === null) f = !0;
    else
      switch (c) {
        case "string":
        case "number":
          f = !0;
          break;
        case "object":
          switch (e.$$typeof) {
            case y:
            case T:
              f = !0;
          }
      }
    if (f)
      return (
        (f = e),
        (o = o(f)),
        (e = u === "" ? "." + v(f, 0) : u),
        $(o)
          ? ((n = ""),
            e != null && (n = e.replace(b, "$&/") + "/"),
            _(o, t, n, "", function (a) {
              return a;
            }))
          : o != null &&
            (k(o) &&
              (o = G(
                o,
                n +
                  (!o.key || (f && f.key === o.key)
                    ? ""
                    : ("" + o.key).replace(b, "$&/") + "/") +
                  e,
              )),
            t.push(o)),
        1
      );
    if (((f = 0), (u = u === "" ? "." : u + ":"), $(e)))
      for (var s = 0; s < e.length; s++) {
        c = e[s];
        var i = u + v(c, s);
        f += _(c, t, n, i, o);
      }
    else if (((i = W(e)), typeof i == "function"))
      for (e = i.call(e), s = 0; !(c = e.next()).done; )
        (c = c.value), (i = u + v(c, s++)), (f += _(c, t, n, i, o));
    else if (c === "object")
      throw (
        ((t = String(e)),
        Error(
          "Objects are not valid as a React child (found: " +
            (t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t) +
            "). If you meant to render a collection of children, use an array instead.",
        ))
      );
    return f;
  }
  function d(e, t, n) {
    if (e == null) return e;
    var u = [],
      o = 0;
    return (
      _(e, u, "", "", function (c) {
        return t.call(n, c, o++);
      }),
      u
    );
  }
  function K(e) {
    if (e._status === -1) {
      var t = e._result;
      (t = t()),
        t.then(
          function (n) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 1), (e._result = n));
          },
          function (n) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 2), (e._result = n));
          },
        ),
        e._status === -1 && ((e._status = 0), (e._result = t));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
  }
  var l = { current: null },
    h = { transition: null },
    Q = {
      ReactCurrentDispatcher: l,
      ReactCurrentBatchConfig: h,
      ReactCurrentOwner: E,
    };
  function V() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  r.Children = {
    map: d,
    forEach: function (e, t, n) {
      d(
        e,
        function () {
          t.apply(this, arguments);
        },
        n,
      );
    },
    count: function (e) {
      var t = 0;
      return (
        d(e, function () {
          t++;
        }),
        t
      );
    },
    toArray: function (e) {
      return (
        d(e, function (t) {
          return t;
        }) || []
      );
    },
    only: function (e) {
      if (!k(e))
        throw Error(
          "React.Children.only expected to receive a single React element child.",
        );
      return e;
    },
  };
  r.Component = p;
  r.Fragment = A;
  r.Profiler = U;
  r.PureComponent = m;
  r.StrictMode = N;
  r.Suspense = z;
  r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Q;
  r.act = V;
  r.cloneElement = function (e, t, n) {
    if (e == null)
      throw Error(
        "React.cloneElement(...): The argument must be a React element, but you passed " +
          e +
          ".",
      );
    var u = j({}, e.props),
      o = e.key,
      c = e.ref,
      f = e._owner;
    if (t != null) {
      if (
        (t.ref !== void 0 && ((c = t.ref), (f = E.current)),
        t.key !== void 0 && (o = "" + t.key),
        e.type && e.type.defaultProps)
      )
        var s = e.type.defaultProps;
      for (i in t)
        g.call(t, i) &&
          !P.hasOwnProperty(i) &&
          (u[i] = t[i] === void 0 && s !== void 0 ? s[i] : t[i]);
    }
    var i = arguments.length - 2;
    if (i === 1) u.children = n;
    else if (1 < i) {
      s = Array(i);
      for (var a = 0; a < i; a++) s[a] = arguments[a + 2];
      u.children = s;
    }
    return { $$typeof: y, type: e.type, key: o, ref: c, props: u, _owner: f };
  };
  r.createContext = function (e) {
    return (
      (e = {
        $$typeof: L,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null,
      }),
      (e.Provider = { $$typeof: F, _context: e }),
      (e.Consumer = e)
    );
  };
  r.createElement = I;
  r.createFactory = function (e) {
    var t = I.bind(null, e);
    return (t.type = e), t;
  };
  r.createRef = function () {
    return { current: null };
  };
  r.forwardRef = function (e) {
    return { $$typeof: M, render: e };
  };
  r.isValidElement = k;
  r.lazy = function (e) {
    return { $$typeof: H, _payload: { _status: -1, _result: e }, _init: K };
  };
  r.memo = function (e, t) {
    return { $$typeof: B, type: e, compare: t === void 0 ? null : t };
  };
  r.startTransition = function (e) {
    var t = h.transition;
    h.transition = {};
    try {
      e();
    } finally {
      h.transition = t;
    }
  };
  r.unstable_act = V;
  r.useCallback = function (e, t) {
    return l.current.useCallback(e, t);
  };
  r.useContext = function (e) {
    return l.current.useContext(e);
  };
  r.useDebugValue = function () {};
  r.useDeferredValue = function (e) {
    return l.current.useDeferredValue(e);
  };
  r.useEffect = function (e, t) {
    return l.current.useEffect(e, t);
  };
  r.useId = function () {
    return l.current.useId();
  };
  r.useImperativeHandle = function (e, t, n) {
    return l.current.useImperativeHandle(e, t, n);
  };
  r.useInsertionEffect = function (e, t) {
    return l.current.useInsertionEffect(e, t);
  };
  r.useLayoutEffect = function (e, t) {
    return l.current.useLayoutEffect(e, t);
  };
  r.useMemo = function (e, t) {
    return l.current.useMemo(e, t);
  };
  r.useReducer = function (e, t, n) {
    return l.current.useReducer(e, t, n);
  };
  r.useRef = function (e) {
    return l.current.useRef(e);
  };
  r.useState = function (e) {
    return l.current.useState(e);
  };
  r.useSyncExternalStore = function (e, t, n) {
    return l.current.useSyncExternalStore(e, t, n);
  };
  r.useTransition = function () {
    return l.current.useTransition();
  };
  r.version = "18.3.1";
});
var X = w((Z, D) => {
  "use strict";
  D.exports = q();
});
export { X as a };
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
