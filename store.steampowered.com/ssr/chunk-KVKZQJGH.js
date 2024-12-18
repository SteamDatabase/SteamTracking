const CLSTAMP = 9421178;

import { b as S } from "./chunk-L3HTMYAC.js";
var K = S((i) => {
  "use strict";
  var E = Symbol.for("react.element"),
    re = Symbol.for("react.portal"),
    oe = Symbol.for("react.fragment"),
    ie = Symbol.for("react.strict_mode"),
    se = Symbol.for("react.profiler"),
    ue = Symbol.for("react.provider"),
    fe = Symbol.for("react.context"),
    _e = Symbol.for("react.forward_ref"),
    le = Symbol.for("react.suspense"),
    ce = Symbol.for("react.memo"),
    ae = Symbol.for("react.lazy"),
    w = Symbol.iterator;
  function Ee(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (w && e[w]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var G = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    V = Object.assign,
    j = {};
  function a(e, t, r) {
    (this.props = e),
      (this.context = t),
      (this.refs = j),
      (this.updater = r || G);
  }
  a.prototype.isReactComponent = {};
  a.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
      throw Error(
        "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
      );
    this.updater.enqueueSetState(this, e, t, "setState");
  };
  a.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
  };
  function H() {}
  H.prototype = a.prototype;
  function O(e, t, r) {
    (this.props = e),
      (this.context = t),
      (this.refs = j),
      (this.updater = r || G);
  }
  var L = (O.prototype = new H());
  L.constructor = O;
  V(L, a.prototype);
  L.isPureReactComponent = !0;
  var x = Array.isArray,
    $ = Object.prototype.hasOwnProperty,
    y = { current: null },
    F = { key: !0, ref: !0, __self: !0, __source: !0 };
  function W(e, t, r) {
    var n,
      o = {},
      s = null,
      u = null;
    if (t != null)
      for (n in (t.ref !== void 0 && (u = t.ref),
      t.key !== void 0 && (s = "" + t.key),
      t))
        $.call(t, n) && !F.hasOwnProperty(n) && (o[n] = t[n]);
    var _ = arguments.length - 2;
    if (_ === 1) o.children = r;
    else if (1 < _) {
      for (var f = Array(_), c = 0; c < _; c++) f[c] = arguments[c + 2];
      o.children = f;
    }
    if (e && e.defaultProps)
      for (n in ((_ = e.defaultProps), _)) o[n] === void 0 && (o[n] = _[n]);
    return {
      $$typeof: E,
      type: e,
      key: s,
      ref: u,
      props: o,
      _owner: y.current,
    };
  }
  function Se(e, t) {
    return {
      $$typeof: E,
      type: e.type,
      key: t,
      ref: e.ref,
      props: e.props,
      _owner: e._owner,
    };
  }
  function b(e) {
    return typeof e == "object" && e !== null && e.$$typeof === E;
  }
  function pe(e) {
    var t = { "=": "=0", ":": "=2" };
    return (
      "$" +
      e.replace(/[=:]/g, function (r) {
        return t[r];
      })
    );
  }
  var k = /\/+/g;
  function U(e, t) {
    return typeof e == "object" && e !== null && e.key != null
      ? pe("" + e.key)
      : t.toString(36);
  }
  function N(e, t, r, n, o) {
    var s = typeof e;
    (s === "undefined" || s === "boolean") && (e = null);
    var u = !1;
    if (e === null) u = !0;
    else
      switch (s) {
        case "string":
        case "number":
          u = !0;
          break;
        case "object":
          switch (e.$$typeof) {
            case E:
            case re:
              u = !0;
          }
      }
    if (u)
      return (
        (u = e),
        (o = o(u)),
        (e = n === "" ? "." + U(u, 0) : n),
        x(o)
          ? ((r = ""),
            e != null && (r = e.replace(k, "$&/") + "/"),
            N(o, t, r, "", function (c) {
              return c;
            }))
          : o != null &&
            (b(o) &&
              (o = Se(
                o,
                r +
                  (!o.key || (u && u.key === o.key)
                    ? ""
                    : ("" + o.key).replace(k, "$&/") + "/") +
                  e,
              )),
            t.push(o)),
        1
      );
    if (((u = 0), (n = n === "" ? "." : n + ":"), x(e)))
      for (var _ = 0; _ < e.length; _++) {
        s = e[_];
        var f = n + U(s, _);
        u += N(s, t, r, f, o);
      }
    else if (((f = Ee(e)), typeof f == "function"))
      for (e = f.call(e), _ = 0; !(s = e.next()).done; )
        (s = s.value), (f = n + U(s, _++)), (u += N(s, t, r, f, o));
    else if (s === "object")
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
    return u;
  }
  function R(e, t, r) {
    if (e == null) return e;
    var n = [],
      o = 0;
    return (
      N(e, n, "", "", function (s) {
        return t.call(r, s, o++);
      }),
      n
    );
  }
  function ge(e) {
    if (e._status === -1) {
      var t = e._result;
      (t = t()),
        t.then(
          function (r) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 1), (e._result = r));
          },
          function (r) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 2), (e._result = r));
          },
        ),
        e._status === -1 && ((e._status = 0), (e._result = t));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
  }
  var l = { current: null },
    I = { transition: null },
    Ce = {
      ReactCurrentDispatcher: l,
      ReactCurrentBatchConfig: I,
      ReactCurrentOwner: y,
    };
  function Y() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  i.Children = {
    map: R,
    forEach: function (e, t, r) {
      R(
        e,
        function () {
          t.apply(this, arguments);
        },
        r,
      );
    },
    count: function (e) {
      var t = 0;
      return (
        R(e, function () {
          t++;
        }),
        t
      );
    },
    toArray: function (e) {
      return (
        R(e, function (t) {
          return t;
        }) || []
      );
    },
    only: function (e) {
      if (!b(e))
        throw Error(
          "React.Children.only expected to receive a single React element child.",
        );
      return e;
    },
  };
  i.Component = a;
  i.Fragment = oe;
  i.Profiler = se;
  i.PureComponent = O;
  i.StrictMode = ie;
  i.Suspense = le;
  i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ce;
  i.act = Y;
  i.cloneElement = function (e, t, r) {
    if (e == null)
      throw Error(
        "React.cloneElement(...): The argument must be a React element, but you passed " +
          e +
          ".",
      );
    var n = V({}, e.props),
      o = e.key,
      s = e.ref,
      u = e._owner;
    if (t != null) {
      if (
        (t.ref !== void 0 && ((s = t.ref), (u = y.current)),
        t.key !== void 0 && (o = "" + t.key),
        e.type && e.type.defaultProps)
      )
        var _ = e.type.defaultProps;
      for (f in t)
        $.call(t, f) &&
          !F.hasOwnProperty(f) &&
          (n[f] = t[f] === void 0 && _ !== void 0 ? _[f] : t[f]);
    }
    var f = arguments.length - 2;
    if (f === 1) n.children = r;
    else if (1 < f) {
      _ = Array(f);
      for (var c = 0; c < f; c++) _[c] = arguments[c + 2];
      n.children = _;
    }
    return { $$typeof: E, type: e.type, key: o, ref: s, props: n, _owner: u };
  };
  i.createContext = function (e) {
    return (
      (e = {
        $$typeof: fe,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null,
      }),
      (e.Provider = { $$typeof: ue, _context: e }),
      (e.Consumer = e)
    );
  };
  i.createElement = W;
  i.createFactory = function (e) {
    var t = W.bind(null, e);
    return (t.type = e), t;
  };
  i.createRef = function () {
    return { current: null };
  };
  i.forwardRef = function (e) {
    return { $$typeof: _e, render: e };
  };
  i.isValidElement = b;
  i.lazy = function (e) {
    return { $$typeof: ae, _payload: { _status: -1, _result: e }, _init: ge };
  };
  i.memo = function (e, t) {
    return { $$typeof: ce, type: e, compare: t === void 0 ? null : t };
  };
  i.startTransition = function (e) {
    var t = I.transition;
    I.transition = {};
    try {
      e();
    } finally {
      I.transition = t;
    }
  };
  i.unstable_act = Y;
  i.useCallback = function (e, t) {
    return l.current.useCallback(e, t);
  };
  i.useContext = function (e) {
    return l.current.useContext(e);
  };
  i.useDebugValue = function () {};
  i.useDeferredValue = function (e) {
    return l.current.useDeferredValue(e);
  };
  i.useEffect = function (e, t) {
    return l.current.useEffect(e, t);
  };
  i.useId = function () {
    return l.current.useId();
  };
  i.useImperativeHandle = function (e, t, r) {
    return l.current.useImperativeHandle(e, t, r);
  };
  i.useInsertionEffect = function (e, t) {
    return l.current.useInsertionEffect(e, t);
  };
  i.useLayoutEffect = function (e, t) {
    return l.current.useLayoutEffect(e, t);
  };
  i.useMemo = function (e, t) {
    return l.current.useMemo(e, t);
  };
  i.useReducer = function (e, t, r) {
    return l.current.useReducer(e, t, r);
  };
  i.useRef = function (e) {
    return l.current.useRef(e);
  };
  i.useState = function (e) {
    return l.current.useState(e);
  };
  i.useSyncExternalStore = function (e, t, r) {
    return l.current.useSyncExternalStore(e, t, r);
  };
  i.useTransition = function () {
    return l.current.useTransition();
  };
  i.version = "18.3.1";
});
var J = S((Ye, q) => {
  "use strict";
  q.exports = K();
});
var X = S((A) => {
  "use strict";
  var Re = J(),
    Ne = Symbol.for("react.element"),
    Ie = Symbol.for("react.fragment"),
    Ae = Object.prototype.hasOwnProperty,
    Te =
      Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    de = { key: !0, ref: !0, __self: !0, __source: !0 };
  function z(e, t, r) {
    var n,
      o = {},
      s = null,
      u = null;
    r !== void 0 && (s = "" + r),
      t.key !== void 0 && (s = "" + t.key),
      t.ref !== void 0 && (u = t.ref);
    for (n in t) Ae.call(t, n) && !de.hasOwnProperty(n) && (o[n] = t[n]);
    if (e && e.defaultProps)
      for (n in ((t = e.defaultProps), t)) o[n] === void 0 && (o[n] = t[n]);
    return {
      $$typeof: Ne,
      type: e,
      key: s,
      ref: u,
      props: o,
      _owner: Te.current,
    };
  }
  A.Fragment = Ie;
  A.jsx = z;
  A.jsxs = z;
});
var me = S((qe, Q) => {
  "use strict";
  Q.exports = X();
});
function D(e, t) {
  return (
    (e = Math.ceil(e)),
    (t = Math.floor(t)),
    Math.floor(Math.random() * (t - e + 1)) + e
  );
}
function Z(e, t, r) {
  return e == null || isNaN(e) ? e : Math.max(t, Math.min(r, e));
}
function Ue(e, t, r, n, o) {
  return n + ((o - n) * (e - t)) / (r - t);
}
function Oe(e, t, r, n, o) {
  return Z(n + ((o - n) * (e - t)) / (r - t), Math.min(n, o), Math.max(n, o));
}
function M(e) {
  if (!p() || !window.document.cookie) return null;
  let t = document.cookie.match("(^|; )" + e + "=([^;]*)");
  return t && t[2] ? decodeURIComponent(t[2]) : null;
}
function B(e, t, r, n) {
  if (!p()) return;
  n || (n = "/");
  let o = "";
  if (typeof r < "u" && r) {
    let s = new Date();
    s.setTime(s.getTime() + 1e3 * 60 * 60 * 24 * r),
      (o = "; expires=" + s.toUTCString());
  }
  document.cookie =
    encodeURIComponent(e) + "=" + encodeURIComponent(t) + o + ";path=" + n;
}
function p() {
  return !!window.document;
}
var d = "webui_config",
  T;
function P() {
  if (!p()) return T || (T = h()), T;
  let e = M("sessionid");
  return e || (e = h()), e;
}
function ee() {
  let e = "";
  for (let t = 0; t < 24; t++) e += D(0, 35).toString(36);
  return e;
}
function h() {
  let e = ee();
  return B("sessionid", e, 0), e;
}
function Be(e, t = d) {
  return v(e, t, !0);
}
function he(e, t = d) {
  return v(e, t, !1);
}
function v(e, t = d, r) {
  let n;
  if ((typeof t == "string" ? (n = document.getElementById(t)) : (n = t), n))
    try {
      return n.hasAttribute("data-" + e)
        ? JSON.parse(n.getAttribute("data-" + e))
        : null;
    } catch (o) {
      console.error(
        "Failed to parse config for " +
          C.steamid +
          " (" +
          window.location.href +
          ")",
        o,
      );
    }
  else r && console.error("Missing config element #", t);
}
var g = {
    EUNIVERSE: 0,
    WEB_UNIVERSE: "",
    LANGUAGE: "english",
    SUPPORTED_LANGUAGES: [],
    COUNTRY: "",
    AVATAR_BASE_URL: "",
    MEDIA_CDN_COMMUNITY_URL: "",
    MEDIA_CDN_URL: "",
    CLAN_CDN_ASSET_URL: "",
    VIDEO_CDN_URL: "",
    COMMUNITY_CDN_URL: "",
    COMMUNITY_CDN_ASSET_URL: "",
    BASE_URL_SHARED_CDN: "",
    STORE_CDN_URL: "",
    PUBLIC_SHARED_URL: "",
    COMMUNITY_BASE_URL: "",
    CHAT_BASE_URL: "",
    STORE_BASE_URL: "",
    STORE_CHECKOUT_BASE_URL: "",
    LOGIN_BASE_URL: "",
    SUPPORT_BASE_URL: "",
    STORE_ICON_BASE_URL: "",
    STORE_ITEM_BASE_URL: "",
    IMG_URL: "",
    STEAMTV_BASE_URL: "",
    HELP_BASE_URL: "",
    PARTNER_BASE_URL: "",
    STATS_BASE_URL: "",
    INTERNAL_STATS_BASE_URL: "",
    BASE_URL_STORE_CDN_ASSETS: "",
    IN_CLIENT: !1,
    USE_POPUPS: !1,
    IN_MOBILE: !1,
    IN_MOBILE_WEBVIEW: !1,
    IN_TENFOOT: !1,
    PLATFORM: "",
    SNR: "",
    LAUNCHER_TYPE: 0,
    EREALM: 0,
    IN_CHROMEOS: !1,
    TESLA: !1,
    LOCAL_HOSTNAME: "",
    WEBAPI_BASE_URL: "",
    TOKEN_URL: "",
    BUILD_TIMESTAMP: 0,
    PAGE_TIMESTAMP: 0,
    FROM_WEB: !1,
    WEBSITE_ID: "Unknown",
    get SESSIONID() {
      return P();
    },
    FRIENDSUI_BETA: !1,
    STEAM_TV: !1,
    DEV_MODE: !1,
    IN_STEAMUI: !1,
    IN_GAMEPADUI: !1,
    IN_STEAMUI_SHARED_CONTEXT: !1,
    DECK_DISPLAY_MODE: !1,
    ON_DECK: !1,
    ON_STEAMOS: !1,
    IN_GAMESCOPE: !1,
    IN_LOGIN: !1,
    IN_LOGIN_REFRESH: !1,
    USE_LONGEST_LOC_STRING: !1,
    SILENT_STARTUP: !1,
    CLIENT_SESSION: 0,
  },
  C = {
    logged_in: !1,
    steamid: "",
    accountid: 0,
    account_name: "",
    token: void 0,
    token_use_id: void 0,
    webapi_token: "",
    authwgtoken: "",
    is_support: !1,
    is_limited: !1,
    is_partner_member: !1,
    short_url: "",
    country_code: "",
  };
function te(e) {
  return "PUBLIC_PATH" in m ? m.PUBLIC_PATH + e : e;
}
var m = window.Config ?? g,
  ne = window.UserConfig ?? C;
window.Config && Object.assign(g, window.Config);
window.UserConfig && Object.assign(ne, window.UserConfig);
export {
  Z as a,
  Ue as b,
  Oe as c,
  M as d,
  Be as e,
  he as f,
  g,
  C as h,
  te as i,
  m as j,
  ne as k,
  J as l,
  me as m,
};
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

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
