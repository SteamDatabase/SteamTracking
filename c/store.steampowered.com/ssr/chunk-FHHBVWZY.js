import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
var _ = _((_) => {
  "use strict";
  var _ = _();
  function _(_) {
    var _ = "https://react.dev/errors/" + _;
    if (1 < arguments.length) {
      _ += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var _ = 2; _ < arguments.length; _++)
        _ += "&args[]=" + encodeURIComponent(arguments[_]);
    }
    return (
      "Minified React error #" +
      _ +
      "; visit " +
      _ +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function _() {}
  var _ = {
      _: {
        _: _,
        _: function () {
          throw Error(_(522));
        },
        _: _,
        _: _,
        _: _,
        _: _,
        _: _,
        _: _,
        _: _,
      },
      _: 0,
      findDOMNode: null,
    },
    _ = Symbol.for("react.portal");
  function _(_, _, _) {
    var _ =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: _,
      key: _ == null ? null : "" + _,
      children: _,
      containerInfo: _,
      implementation: _,
    };
  }
  var _ = _.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function _(_, _) {
    if (_ === "font") return "";
    if (typeof _ == "string") return _ === "use-credentials" ? _ : "";
  }
  _.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = _;
  _.createPortal = function (_, _) {
    var _ =
      2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!_ || (_.nodeType !== 1 && _.nodeType !== 9 && _.nodeType !== 11))
      throw Error(_(299));
    return _(_, _, null, _);
  };
  _.flushSync = function (_) {
    var _ = _._,
      _ = _._;
    try {
      if (((_._ = null), (_._ = 2), _)) return _();
    } finally {
      (_._ = _), (_._ = _), _._._();
    }
  };
  _.preconnect = function (_, _) {
    typeof _ == "string" &&
      (_
        ? ((_ = _.crossOrigin),
          (_ =
            typeof _ == "string" ? (_ === "use-credentials" ? _ : "") : void 0))
        : (_ = null),
      _._._(_, _));
  };
  _.prefetchDNS = function (_) {
    typeof _ == "string" && _._._(_);
  };
  _.preinit = function (_, _) {
    if (typeof _ == "string" && _ && typeof _._ == "string") {
      var _ = _._,
        _ = _(_, _.crossOrigin),
        _ = typeof _.integrity == "string" ? _.integrity : void 0,
        _ = typeof _.fetchPriority == "string" ? _.fetchPriority : void 0;
      _ === "style"
        ? _._._(_, typeof _.precedence == "string" ? _.precedence : void 0, {
            crossOrigin: _,
            integrity: _,
            fetchPriority: _,
          })
        : _ === "script" &&
          _._._(_, {
            crossOrigin: _,
            integrity: _,
            fetchPriority: _,
            nonce: typeof _.nonce == "string" ? _.nonce : void 0,
          });
    }
  };
  _.preinitModule = function (_, _) {
    if (typeof _ == "string")
      if (typeof _ == "object" && _ !== null) {
        if (_._ == null || _._ === "script") {
          var _ = _(_._, _.crossOrigin);
          _._._(_, {
            crossOrigin: _,
            integrity: typeof _.integrity == "string" ? _.integrity : void 0,
            nonce: typeof _.nonce == "string" ? _.nonce : void 0,
          });
        }
      } else _ == null && _._._(_);
  };
  _.preload = function (_, _) {
    if (
      typeof _ == "string" &&
      typeof _ == "object" &&
      _ !== null &&
      typeof _._ == "string"
    ) {
      var _ = _._,
        _ = _(_, _.crossOrigin);
      _._._(_, _, {
        crossOrigin: _,
        integrity: typeof _.integrity == "string" ? _.integrity : void 0,
        nonce: typeof _.nonce == "string" ? _.nonce : void 0,
        type: typeof _.type == "string" ? _.type : void 0,
        fetchPriority:
          typeof _.fetchPriority == "string" ? _.fetchPriority : void 0,
        referrerPolicy:
          typeof _.referrerPolicy == "string" ? _.referrerPolicy : void 0,
        imageSrcSet: typeof _.imageSrcSet == "string" ? _.imageSrcSet : void 0,
        imageSizes: typeof _.imageSizes == "string" ? _.imageSizes : void 0,
        media: typeof _.media == "string" ? _.media : void 0,
      });
    }
  };
  _.preloadModule = function (_, _) {
    if (typeof _ == "string")
      if (_) {
        var _ = _(_._, _.crossOrigin);
        _._._(_, {
          _: typeof _._ == "string" && _._ !== "script" ? _._ : void 0,
          crossOrigin: _,
          integrity: typeof _.integrity == "string" ? _.integrity : void 0,
        });
      } else _._._(_);
  };
  _.requestFormReset = function (_) {
    _._._(_);
  };
  _.unstable_batchedUpdates = function (_, _) {
    return _(_);
  };
  _.useFormState = function (_, _, _) {
    return _._.useFormState(_, _, _);
  };
  _.useFormStatus = function () {
    return _._.useHostTransitionStatus();
  };
  _.version = "19.1.1";
});
var _ = _((_, _) => {
  "use strict";
  function _() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_);
      } catch (_) {
        console.error(_);
      }
  }
  _(), (_.exports = _());
});
export { _ };
