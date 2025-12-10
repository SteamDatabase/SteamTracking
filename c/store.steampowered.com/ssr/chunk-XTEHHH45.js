import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _, _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
function _(_) {
  for (
    var _ = arguments.length, _ = new Array(_ > 1 ? _ - 1 : 0), _ = 1;
    _ < _;
    _++
  )
    _[_ - 1] = arguments[_];
  if (0) var _;
  throw new Error(
    typeof _ == "number"
      ? "[MobX] minified error nr: " +
          _ +
          (_.length ? " " + _.map(String).join(",") : "") +
          ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts"
      : "[MobX] " + _,
  );
}
var _ = {};
function _() {
  return typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : _;
}
var _ = Object.assign,
  _ = Object.getOwnPropertyDescriptor,
  _ = Object.defineProperty,
  _ = Object.prototype,
  _ = [];
Object.freeze(_);
var _ = {};
Object.freeze(_);
var _ = typeof Proxy < "u",
  _ = Object.toString();
function _() {
  _ || _("Proxy not available");
}
function _(_) {
  var _ = !1;
  return function () {
    if (!_) return (_ = !0), _.apply(this, arguments);
  };
}
var _ = function () {};
function _(_) {
  return typeof _ == "function";
}
function _(_) {
  var _ = typeof _;
  switch (_) {
    case "string":
    case "symbol":
    case "number":
      return !0;
  }
  return !1;
}
function _(_) {
  return _ !== null && typeof _ == "object";
}
function _(_) {
  if (!_(_)) return !1;
  var _ = Object.getPrototypeOf(_);
  if (_ == null) return !0;
  var _ = Object.hasOwnProperty.call(_, "constructor") && _.constructor;
  return typeof _ == "function" && _.toString() === _;
}
function _(_) {
  var _ = _?.constructor;
  return _
    ? _.name === "GeneratorFunction" || _.displayName === "GeneratorFunction"
    : !1;
}
function _(_, _, _) {
  _(_, _, {
    enumerable: !1,
    writable: !0,
    configurable: !0,
    value: _,
  });
}
function _(_, _, _) {
  _(_, _, {
    enumerable: !1,
    writable: !1,
    configurable: !0,
    value: _,
  });
}
function _(_, _) {
  var _ = "isMobX" + _;
  return (
    (_.prototype[_] = !0),
    function (_) {
      return _(_) && _[_] === !0;
    }
  );
}
function _(_) {
  return _ != null && Object.prototype.toString.call(_) === "[object Map]";
}
function _(_) {
  var _ = Object.getPrototypeOf(_),
    _ = Object.getPrototypeOf(_),
    _ = Object.getPrototypeOf(_);
  return _ === null;
}
function _(_) {
  return _ != null && Object.prototype.toString.call(_) === "[object Set]";
}
var _ = typeof Object.getOwnPropertySymbols < "u";
function _(_) {
  var _ = Object.keys(_);
  if (!_) return _;
  var _ = Object.getOwnPropertySymbols(_);
  return _.length
    ? [].concat(
        _,
        _.filter(function (_) {
          return _.propertyIsEnumerable.call(_, _);
        }),
      )
    : _;
}
var _ =
  typeof Reflect < "u" && Reflect.ownKeys
    ? Reflect.ownKeys
    : _
      ? function (_) {
          return Object.getOwnPropertyNames(_).concat(
            Object.getOwnPropertySymbols(_),
          );
        }
      : Object.getOwnPropertyNames;
function _(_) {
  return _ === null ? null : typeof _ == "object" ? "" + _ : _;
}
function _(_, _) {
  return _.hasOwnProperty.call(_, _);
}
var _ =
  Object.getOwnPropertyDescriptors ||
  function (_) {
    var _ = {};
    return (
      _(_).forEach(function (_) {
        _[_] = _(_, _);
      }),
      _
    );
  };
function _(_, _) {
  return !!(_ & _);
}
function _(_, _, _) {
  return _ ? (_ |= _) : (_ &= ~_), _;
}
function _(_, _) {
  (_ == null || _ > _.length) && (_ = _.length);
  for (var _ = 0, _ = Array(_); _ < _; _++) _[_] = _[_];
  return _;
}
function _(_, _) {
  for (var _ = 0; _ < _.length; _++) {
    var _ = _[_];
    (_.enumerable = _.enumerable || !1),
      (_.configurable = !0),
      "value" in _ && (_.writable = !0),
      Object.defineProperty(_, _(_.key), _);
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
function _(_, _) {
  var _ = (typeof Symbol < "u" && _[Symbol.iterator]) || _["@@iterator"];
  if (_) return (_ = _.call(_)).next.bind(_);
  if (
    Array.isArray(_) ||
    (_ = _(_)) ||
    (_ && _ && typeof _.length == "number")
  ) {
    _ && (_ = _);
    var _ = 0;
    return function () {
      return _ >= _.length
        ? {
            done: !0,
          }
        : {
            done: !1,
            value: _[_++],
          };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _() {
  return (
    (_ = Object.assign
      ? Object.assign.bind()
      : function (_) {
          for (var _ = 1; _ < arguments.length; _++) {
            var _ = arguments[_];
            for (var _ in _) ({}).hasOwnProperty.call(_, _) && (_[_] = _[_]);
          }
          return _;
        }),
    _.apply(null, arguments)
  );
}
function _(_, _) {
  (_.prototype = Object.create(_.prototype)),
    (_.prototype.constructor = _),
    _(_, _);
}
function _(_, _) {
  return (
    (_ = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (_, _) {
          return (_.__proto__ = _), _;
        }),
    _(_, _)
  );
}
function _(_, _) {
  if (typeof _ != "object" || !_) return _;
  var _ = _[Symbol.toPrimitive];
  if (_ !== void 0) {
    var _ = _.call(_, _ || "default");
    if (typeof _ != "object") return _;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_ === "string" ? String : Number)(_);
}
function _(_) {
  var _ = _(_, "string");
  return typeof _ == "symbol" ? _ : _ + "";
}
function _(_, _) {
  if (_) {
    if (typeof _ == "string") return _(_, _);
    var _ = {}.toString.call(_).slice(8, -1);
    return (
      _ === "Object" && _.constructor && (_ = _.constructor.name),
      _ === "Map" || _ === "Set"
        ? Array.from(_)
        : _ === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_)
          ? _(_, _)
          : void 0
    );
  }
}
var _ = Symbol("mobx-stored-annotations");
function _(_) {
  function _(_, _) {
    if (_(_)) return _.decorate_20223_(_, _);
    _(_, _, _);
  }
  return Object.assign(_, _);
}
function _(_, _, _) {
  if ((_(_, _) || _(_, _, _({}, _[_])), 0)) var _;
  _(_, _, _), _(_) || (_[_][_] = _);
}
function _(_, _, _) {
  if (0) var _, _, _;
}
function _(_) {
  return _(_, _) || _(_, _, _({}, _[_])), _[_];
}
function _(_) {
  return typeof _ == "object" && typeof _.kind == "string";
}
var _ = Symbol("mobx administration"),
  _ = (function () {
    function _(_) {
      _ === void 0 && (_ = "Atom"),
        (this.name_ = void 0),
        (this.flags_ = 0),
        (this.observers_ = new Set()),
        (this.lastAccessedBy_ = 0),
        (this.lowestObserverState_ = _.NOT_TRACKING_),
        (this.onBOL = void 0),
        (this.onBUOL = void 0),
        (this.name_ = _);
    }
    var _ = _.prototype;
    return (
      (_.onBO = function () {
        this.onBOL &&
          this.onBOL.forEach(function (_) {
            return _();
          });
      }),
      (_.onBUO = function () {
        this.onBUOL &&
          this.onBUOL.forEach(function (_) {
            return _();
          });
      }),
      (_.reportObserved = function () {
        return _(this);
      }),
      (_.reportChanged = function () {
        _(), _(this), _();
      }),
      (_.toString = function () {
        return this.name_;
      }),
      _(_, [
        {
          key: "isBeingObserved",
          get: function () {
            return _(this.flags_, _.isBeingObservedMask_);
          },
          set: function (_) {
            this.flags_ = _(this.flags_, _.isBeingObservedMask_, _);
          },
        },
        {
          key: "isPendingUnobservation",
          get: function () {
            return _(this.flags_, _.isPendingUnobservationMask_);
          },
          set: function (_) {
            this.flags_ = _(this.flags_, _.isPendingUnobservationMask_, _);
          },
        },
        {
          key: "diffValue",
          get: function () {
            return _(this.flags_, _.diffValueMask_) ? 1 : 0;
          },
          set: function (_) {
            this.flags_ = _(this.flags_, _.diffValueMask_, _ === 1);
          },
        },
      ])
    );
  })();
_.isBeingObservedMask_ = 1;
_.isPendingUnobservationMask_ = 2;
_.diffValueMask_ = 4;
var _ = _("Atom", _);
function _(_, _, _) {
  _ === void 0 && (_ = _), _ === void 0 && (_ = _);
  var _ = new _(_);
  return _ !== _ && _(_, _), _ !== _ && _(_, _), _;
}
function _(_, _) {
  return _ === _;
}
function _(_, _) {
  return _(_, _);
}
function _(_, _) {
  return _(_, _, 1);
}
function _(_, _) {
  return Object._
    ? Object._(_, _)
    : _ === _
      ? _ !== 0 || 1 / _ === 1 / _
      : _ !== _ && _ !== _;
}
var _ = {
  identity: _,
  structural: _,
  default: _,
  shallow: _,
};
function _(_, _, _) {
  return _(_)
    ? _
    : Array.isArray(_)
      ? _.array(_, {
          name: _,
        })
      : _(_)
        ? _.object(_, void 0, {
            name: _,
          })
        : _(_)
          ? _.map(_, {
              name: _,
            })
          : _(_)
            ? _.set(_, {
                name: _,
              })
            : typeof _ == "function" && !_(_) && !_(_)
              ? _(_)
                ? _(_)
                : _(_, _)
              : _;
}
function _(_, _, _) {
  if (_ == null || _(_) || _(_) || _(_) || _(_)) return _;
  if (Array.isArray(_))
    return _.array(_, {
      name: _,
      deep: !1,
    });
  if (_(_))
    return _.object(_, void 0, {
      name: _,
      deep: !1,
    });
  if (_(_))
    return _.map(_, {
      name: _,
      deep: !1,
    });
  if (_(_))
    return _.set(_, {
      name: _,
      deep: !1,
    });
}
function _(_) {
  return _;
}
function _(_, _) {
  return _(_, _) ? _ : _;
}
var _ = "override";
function _(_) {
  return _.annotationType_ === _;
}
function _(_, _) {
  return {
    annotationType_: _,
    options_: _,
    make_: _,
    extend_: _,
    decorate_20223_: _,
  };
}
function _(_, _, _, _) {
  var _;
  if ((_ = this.options_) != null && _.bound)
    return this.extend_(_, _, _, !1) === null ? 0 : 1;
  if (_ === _.target_) return this.extend_(_, _, _, !1) === null ? 0 : 2;
  if (_(_.value)) return 1;
  var _ = _(_, this, _, _, !1);
  return _(_, _, _), 2;
}
function _(_, _, _, _) {
  var _ = _(_, this, _, _);
  return _.defineProperty_(_, _, _);
}
function _(_, _) {
  var _ = _.kind,
    _ = _.name,
    _ = _.addInitializer,
    _ = this,
    _ = function (_) {
      var _, _, _, _;
      return _(
        (_ = (_ = _.options_) == null ? void 0 : _.name) != null
          ? _
          : _.toString(),
        _,
        (_ = (_ = _.options_) == null ? void 0 : _.autoAction) != null ? _ : !1,
      );
    };
  if (_ == "field")
    return function (_) {
      var _,
        _ = _;
      return (
        _(_) || (_ = _(_)),
        (_ = _.options_) != null &&
          _.bound &&
          ((_ = _.bind(this)), (_.isMobxAction = !0)),
        _
      );
    };
  if (_ == "method") {
    var _;
    return (
      _(_) || (_ = _(_)),
      (_ = this.options_) != null &&
        _.bound &&
        _(function () {
          var _ = this,
            _ = _[_].bind(_);
          (_.isMobxAction = !0), (_[_] = _);
        }),
      _
    );
  }
  _(
    "Cannot apply '" +
      _.annotationType_ +
      "' to '" +
      String(_) +
      "' (kind: " +
      _ +
      "):" +
      (`
'` +
        _.annotationType_ +
        "' can only be used on properties with a function value."),
  );
}
function _(_, _, _, _) {
  var _ = _.annotationType_,
    _ = _.value;
}
function _(_, _, _, _, _) {
  var _, _, _, _, _, _, _;
  _ === void 0 && (_ = _.safeDescriptors), _(_, _, _, _);
  var _ = _.value;
  if ((_ = _.options_) != null && _.bound) {
    var _;
    _ = _.bind((_ = _.proxy_) != null ? _ : _.target_);
  }
  return {
    value: _(
      (_ = (_ = _.options_) == null ? void 0 : _.name) != null
        ? _
        : _.toString(),
      _,
      (_ = (_ = _.options_) == null ? void 0 : _.autoAction) != null ? _ : !1,
      (_ = _.options_) != null && _.bound
        ? (_ = _.proxy_) != null
          ? _
          : _.target_
        : void 0,
    ),
    configurable: _ ? _.isPlainObject_ : !0,
    enumerable: !1,
    writable: !_,
  };
}
function _(_, _) {
  return {
    annotationType_: _,
    options_: _,
    make_: _,
    extend_: _,
    decorate_20223_: _,
  };
}
function _(_, _, _, _) {
  var _;
  if (_ === _.target_) return this.extend_(_, _, _, !1) === null ? 0 : 2;
  if (
    (_ = this.options_) != null &&
    _.bound &&
    (!_(_.target_, _) || !_(_.target_[_])) &&
    this.extend_(_, _, _, !1) === null
  )
    return 0;
  if (_(_.value)) return 1;
  var _ = _(_, this, _, _, !1, !1);
  return _(_, _, _), 2;
}
function _(_, _, _, _) {
  var _,
    _ = _(_, this, _, _, (_ = this.options_) == null ? void 0 : _.bound);
  return _.defineProperty_(_, _, _);
}
function _(_, _) {
  var _,
    _ = _.name,
    _ = _.addInitializer;
  return (
    _(_) || (_ = _(_)),
    (_ = this.options_) != null &&
      _.bound &&
      _(function () {
        var _ = this,
          _ = _[_].bind(_);
        (_.isMobXFlow = !0), (_[_] = _);
      }),
    _
  );
}
function _(_, _, _, _) {
  var _ = _.annotationType_,
    _ = _.value;
}
function _(_, _, _, _, _, _) {
  _ === void 0 && (_ = _.safeDescriptors), _(_, _, _, _);
  var _ = _.value;
  if ((_(_) || (_ = _(_)), _)) {
    var _;
    (_ = _.bind((_ = _.proxy_) != null ? _ : _.target_)), (_.isMobXFlow = !0);
  }
  return {
    value: _,
    configurable: _ ? _.isPlainObject_ : !0,
    enumerable: !1,
    writable: !_,
  };
}
function _(_, _) {
  return {
    annotationType_: _,
    options_: _,
    make_: _,
    extend_: _,
    decorate_20223_: _,
  };
}
function _(_, _, _) {
  return this.extend_(_, _, _, !1) === null ? 0 : 1;
}
function _(_, _, _, _) {
  return (
    _(_, this, _, _),
    _.defineComputedProperty_(
      _,
      _({}, this.options_, {
        get: _.get,
        set: _.set,
      }),
      _,
    )
  );
}
function _(_, _) {
  var _ = this,
    _ = _.name,
    _ = _.addInitializer;
  return (
    _(function () {
      var _ = _(this)[_],
        _ = _({}, _.options_, {
          get: _,
          context: this,
        });
      _.name || (_.name = "ObservableObject." + _.toString()),
        _.values_.set(_, new _(_));
    }),
    function () {
      return this[_].getObservablePropValue_(_);
    }
  );
}
function _(_, _, _, _) {
  var _ = _.annotationType_,
    _ = _.get;
}
function _(_, _) {
  return {
    annotationType_: _,
    options_: _,
    make_: _,
    extend_: _,
    decorate_20223_: _,
  };
}
function _(_, _, _) {
  return this.extend_(_, _, _, !1) === null ? 0 : 1;
}
function _(_, _, _, _) {
  var _, _;
  return (
    _(_, this, _, _),
    _.defineObservableProperty_(
      _,
      _.value,
      (_ = (_ = this.options_) == null ? void 0 : _.enhancer) != null ? _ : _,
      _,
    )
  );
}
function _(_, _) {
  var _ = this,
    _ = _.kind,
    _ = _.name,
    _ = new WeakSet();
  function _(_, _) {
    var _,
      _,
      _ = _(_)[_],
      _ = new _(
        _,
        (_ = (_ = _.options_) == null ? void 0 : _.enhancer) != null ? _ : _,
        "ObservableObject." + _.toString(),
        !1,
      );
    _.values_.set(_, _), _.add(_);
  }
  if (_ == "accessor")
    return {
      get: function () {
        return (
          _.has(this) || _(this, _.get.call(this)),
          this[_].getObservablePropValue_(_)
        );
      },
      set: function (_) {
        return _.has(this) || _(this, _), this[_].setObservablePropValue_(_, _);
      },
      init: function (_) {
        return _.has(this) || _(this, _), _;
      },
    };
}
function _(_, _, _, _) {
  var _ = _.annotationType_;
}
var _ = "true",
  _ = _();
function _(_) {
  return {
    annotationType_: _,
    options_: _,
    make_: _,
    extend_: _,
    decorate_20223_: _,
  };
}
function _(_, _, _, _) {
  var _, _;
  if (_.get) return _.make_(_, _, _, _);
  if (_.set) {
    var _ = _(_.set) ? _.set : _(_.toString(), _.set);
    return _ === _.target_
      ? _.defineProperty_(_, {
          configurable: _.safeDescriptors ? _.isPlainObject_ : !0,
          set: _,
        }) === null
        ? 0
        : 2
      : (_(_, _, {
          configurable: !0,
          set: _,
        }),
        2);
  }
  if (_ !== _.target_ && typeof _.value == "function") {
    var _;
    if (_(_.value)) {
      var _,
        _ = (_ = this.options_) != null && _.autoBind ? _.bound : _;
      return _.make_(_, _, _, _);
    }
    var _ = (_ = this.options_) != null && _.autoBind ? _.bound : _;
    return _.make_(_, _, _, _);
  }
  var _ = ((_ = this.options_) == null ? void 0 : _.deep) === !1 ? _.ref : _;
  if (
    typeof _.value == "function" &&
    (_ = this.options_) != null &&
    _.autoBind
  ) {
    var _;
    _.value = _.value.bind((_ = _.proxy_) != null ? _ : _.target_);
  }
  return _.make_(_, _, _, _);
}
function _(_, _, _, _) {
  var _, _;
  if (_.get) return _.extend_(_, _, _, _);
  if (_.set)
    return _.defineProperty_(
      _,
      {
        configurable: _.safeDescriptors ? _.isPlainObject_ : !0,
        set: _(_.toString(), _.set),
      },
      _,
    );
  if (
    typeof _.value == "function" &&
    (_ = this.options_) != null &&
    _.autoBind
  ) {
    var _;
    _.value = _.value.bind((_ = _.proxy_) != null ? _ : _.target_);
  }
  var _ = ((_ = this.options_) == null ? void 0 : _.deep) === !1 ? _.ref : _;
  return _.extend_(_, _, _, _);
}
function _(_, _) {
  _("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var _ = "observable",
  _ = "observable.ref",
  _ = "observable.shallow",
  _ = "observable.struct",
  _ = {
    deep: !0,
    name: void 0,
    defaultDecorator: void 0,
    proxy: !0,
  };
Object.freeze(_);
function _(_) {
  return _ || _;
}
var _ = _(_),
  _ = _(_, {
    enhancer: _,
  }),
  _ = _(_, {
    enhancer: _,
  }),
  _ = _(_, {
    enhancer: _,
  }),
  _ = _(_);
function _(_) {
  return _.deep === !0 ? _ : _.deep === !1 ? _ : _(_.defaultDecorator);
}
function _(_) {
  var _;
  return _ ? ((_ = _.defaultDecorator) != null ? _ : _(_)) : void 0;
}
function _(_) {
  var _, _;
  return _ && (_ = (_ = _.options_) == null ? void 0 : _.enhancer) != null
    ? _
    : _;
}
function _(_, _, _) {
  if (_(_)) return _.decorate_20223_(_, _);
  if (_(_)) {
    _(_, _, _);
    return;
  }
  return _(_)
    ? _
    : _(_)
      ? _.object(_, _, _)
      : Array.isArray(_)
        ? _.array(_, _)
        : _(_)
          ? _.map(_, _)
          : _(_)
            ? _.set(_, _)
            : typeof _ == "object" && _ !== null
              ? _
              : _.box(_, _);
}
_(_, _);
var _ = {
    box: function (_, _) {
      var _ = _(_);
      return new _(_, _(_), _.name, !0, _.equals);
    },
    array: function (_, _) {
      var _ = _(_);
      return (_.useProxies === !1 || _.proxy === !1 ? _ : _)(_, _(_), _.name);
    },
    map: function (_, _) {
      var _ = _(_);
      return new _(_, _(_), _.name);
    },
    set: function (_, _) {
      var _ = _(_);
      return new _(_, _(_), _.name);
    },
    object: function (_, _, _) {
      return _(function () {
        return _(
          _.useProxies === !1 || _?.proxy === !1 ? _({}, _) : _({}, _),
          _,
          _,
        );
      });
    },
    ref: _(_),
    shallow: _(_),
    deep: _,
    struct: _(_),
  },
  _ = _(_, _),
  _ = "computed",
  _ = "computed.struct",
  _ = _(_),
  _ = _(_, {
    equals: _.structural,
  }),
  _ = function (_, _) {
    if (_(_)) return _.decorate_20223_(_, _);
    if (_(_)) return _(_, _, _);
    if (_(_)) return _(_(_, _));
    var _ = _(_) ? _ : {};
    return (_.get = _), _.name || (_.name = _.name || ""), new _(_);
  };
Object.assign(_, _);
_.struct = _(_);
var _,
  _,
  _ = 0,
  _ = 1,
  _ =
    (_ = (_ = _(function () {}, "name")) == null ? void 0 : _.configurable) !=
    null
      ? _
      : !1,
  _ = {
    value: "action",
    configurable: !0,
    writable: !1,
    enumerable: !1,
  };
function _(_, _, _, _) {
  _ === void 0 && (_ = !1);
  function _() {
    return _(_, _, _, _ || this, arguments);
  }
  return (
    (_.isMobxAction = !0),
    (_.toString = function () {
      return _.toString();
    }),
    _ && ((_.value = _), _(_, "name", _)),
    _
  );
}
function _(_, _, _, _, _) {
  var _ = _(_, _, _, _);
  try {
    return _.apply(_, _);
  } catch (_) {
    throw ((_.error_ = _), _);
  } finally {
    _(_);
  }
}
function _(_, _, _, _) {
  var _ = !1,
    _ = 0;
  if (0) var _;
  var _ = _.trackingDerivation,
    _ = !_ || !_;
  _();
  var _ = _.allowStateChanges;
  _ && (_(), (_ = _(!0)));
  var _ = _(!0),
    _ = {
      runAsAction_: _,
      prevDerivation_: _,
      prevAllowStateChanges_: _,
      prevAllowStateReads_: _,
      notifySpy_: _,
      startTime_: _,
      actionId_: _++,
      parentActionId_: _,
    };
  return (_ = _.actionId_), _;
}
function _(_) {
  _ !== _.actionId_ && _(30),
    (_ = _.parentActionId_),
    _.error_ !== void 0 && (_.suppressReactionErrors = !0),
    _(_.prevAllowStateChanges_),
    _(_.prevAllowStateReads_),
    _(),
    _.runAsAction_ && _(_.prevDerivation_),
    (_.suppressReactionErrors = !1);
}
function _(_, _) {
  var _ = _(_);
  try {
    return _();
  } finally {
    _(_);
  }
}
function _(_) {
  var _ = _.allowStateChanges;
  return (_.allowStateChanges = _), _;
}
function _(_) {
  _.allowStateChanges = _;
}
var _ = (function (_) {
    function _(_, _, _, _, _) {
      var _;
      if (
        (_ === void 0 && (_ = "ObservableValue"),
        _ === void 0 && (_ = !0),
        _ === void 0 && (_ = _.default),
        (_ = _.call(this, _) || this),
        (_.enhancer = void 0),
        (_.name_ = void 0),
        (_.equals = void 0),
        (_.hasUnreportedChange_ = !1),
        (_.interceptors_ = void 0),
        (_.changeListeners_ = void 0),
        (_.value_ = void 0),
        (_.dehancer = void 0),
        (_.enhancer = _),
        (_.name_ = _),
        (_.equals = _),
        (_.value_ = _(_, void 0, _)),
        0)
      )
        var _;
      return _;
    }
    _(_, _);
    var _ = _.prototype;
    return (
      (_.dehanceValue = function (_) {
        return this.dehancer !== void 0 ? this.dehancer(_) : _;
      }),
      (_.set = function (_) {
        var _ = this.value_;
        if (((_ = this.prepareNewValue_(_)), _ !== _.UNCHANGED)) {
          var _ = _();
          this.setNewValue_(_);
        }
      }),
      (_.prepareNewValue_ = function (_) {
        if ((_(this), _(this))) {
          var _ = _(this, {
            object: this,
            type: _,
            newValue: _,
          });
          if (!_) return _.UNCHANGED;
          _ = _.newValue;
        }
        return (
          (_ = this.enhancer(_, this.value_, this.name_)),
          this.equals(this.value_, _) ? _.UNCHANGED : _
        );
      }),
      (_.setNewValue_ = function (_) {
        var _ = this.value_;
        (this.value_ = _),
          this.reportChanged(),
          _(this) &&
            _(this, {
              type: _,
              object: this,
              newValue: _,
              oldValue: _,
            });
      }),
      (_.get = function () {
        return this.reportObserved(), this.dehanceValue(this.value_);
      }),
      (_.intercept_ = function (_) {
        return _(this, _);
      }),
      (_.observe_ = function (_, _) {
        return (
          _ &&
            _({
              observableKind: "value",
              debugObjectName: this.name_,
              object: this,
              type: _,
              newValue: this.value_,
              oldValue: void 0,
            }),
          _(this, _)
        );
      }),
      (_.raw = function () {
        return this.value_;
      }),
      (_.toJSON = function () {
        return this.get();
      }),
      (_.toString = function () {
        return this.name_ + "[" + this.value_ + "]";
      }),
      (_.valueOf = function () {
        return _(this.get());
      }),
      (_[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      _
    );
  })(_),
  _ = _("ObservableValue", _),
  _ = (function () {
    function _(_) {
      (this.dependenciesState_ = _.NOT_TRACKING_),
        (this.observing_ = []),
        (this.newObserving_ = null),
        (this.observers_ = new Set()),
        (this.runId_ = 0),
        (this.lastAccessedBy_ = 0),
        (this.lowestObserverState_ = _.UP_TO_DATE_),
        (this.unboundDepsCount_ = 0),
        (this.value_ = new _(null)),
        (this.name_ = void 0),
        (this.triggeredBy_ = void 0),
        (this.flags_ = 0),
        (this.derivation = void 0),
        (this.setter_ = void 0),
        (this.isTracing_ = _.NONE),
        (this.scope_ = void 0),
        (this.equals_ = void 0),
        (this.requiresReaction_ = void 0),
        (this.keepAlive_ = void 0),
        (this.onBOL = void 0),
        (this.onBUOL = void 0),
        _.get || _(31),
        (this.derivation = _.get),
        (this.name_ = _.name || "ComputedValue"),
        _.set && (this.setter_ = _("ComputedValue-setter", _.set)),
        (this.equals_ =
          _.equals ||
          (_.compareStructural || _.struct ? _.structural : _.default)),
        (this.scope_ = _.context),
        (this.requiresReaction_ = _.requiresReaction),
        (this.keepAlive_ = !!_.keepAlive);
    }
    var _ = _.prototype;
    return (
      (_.onBecomeStale_ = function () {
        _(this);
      }),
      (_.onBO = function () {
        this.onBOL &&
          this.onBOL.forEach(function (_) {
            return _();
          });
      }),
      (_.onBUO = function () {
        this.onBUOL &&
          this.onBUOL.forEach(function (_) {
            return _();
          });
      }),
      (_.get = function () {
        if (
          (this.isComputing && _(32, this.name_, this.derivation),
          _.inBatch === 0 && this.observers_.size === 0 && !this.keepAlive_)
        )
          _(this) &&
            (this.warnAboutUntrackedRead_(),
            _(),
            (this.value_ = this.computeValue_(!1)),
            _());
        else if ((_(this), _(this))) {
          var _ = _.trackingContext;
          this.keepAlive_ && !_ && (_.trackingContext = this),
            this.trackAndCompute() && _(this),
            (_.trackingContext = _);
        }
        var _ = this.value_;
        if (_(_)) throw _.cause;
        return _;
      }),
      (_.set = function (_) {
        if (this.setter_) {
          this.isRunningSetter && _(33, this.name_),
            (this.isRunningSetter = !0);
          try {
            this.setter_.call(this.scope_, _);
          } finally {
            this.isRunningSetter = !1;
          }
        } else _(34, this.name_);
      }),
      (_.trackAndCompute = function () {
        var _ = this.value_,
          _ = this.dependenciesState_ === _.NOT_TRACKING_,
          _ = this.computeValue_(!0),
          _ = _ || _(_) || _(_) || !this.equals_(_, _);
        return _ && (this.value_ = _), _;
      }),
      (_.computeValue_ = function (_) {
        this.isComputing = !0;
        var _ = _(!1),
          _;
        if (_) _ = _(this, this.derivation, this.scope_);
        else if (_.disableErrorBoundaries === !0)
          _ = this.derivation.call(this.scope_);
        else
          try {
            _ = this.derivation.call(this.scope_);
          } catch (_) {
            _ = new _(_);
          }
        return _(_), (this.isComputing = !1), _;
      }),
      (_.suspend_ = function () {
        this.keepAlive_ || (_(this), (this.value_ = void 0));
      }),
      (_.observe_ = function (_, _) {
        var _ = this,
          _ = !0,
          _ = void 0;
        return _(function () {
          var _ = _.get();
          if (!_ || _) {
            var _ = _();
            _({
              observableKind: "computed",
              debugObjectName: _.name_,
              type: _,
              object: _,
              newValue: _,
              oldValue: _,
            }),
              _(_);
          }
          (_ = !1), (_ = _);
        });
      }),
      (_.warnAboutUntrackedRead_ = function () {}),
      (_.toString = function () {
        return this.name_ + "[" + this.derivation.toString() + "]";
      }),
      (_.valueOf = function () {
        return _(this.get());
      }),
      (_[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      _(_, [
        {
          key: "isComputing",
          get: function () {
            return _(this.flags_, _.isComputingMask_);
          },
          set: function (_) {
            this.flags_ = _(this.flags_, _.isComputingMask_, _);
          },
        },
        {
          key: "isRunningSetter",
          get: function () {
            return _(this.flags_, _.isRunningSetterMask_);
          },
          set: function (_) {
            this.flags_ = _(this.flags_, _.isRunningSetterMask_, _);
          },
        },
        {
          key: "isBeingObserved",
          get: function () {
            return _(this.flags_, _.isBeingObservedMask_);
          },
          set: function (_) {
            this.flags_ = _(this.flags_, _.isBeingObservedMask_, _);
          },
        },
        {
          key: "isPendingUnobservation",
          get: function () {
            return _(this.flags_, _.isPendingUnobservationMask_);
          },
          set: function (_) {
            this.flags_ = _(this.flags_, _.isPendingUnobservationMask_, _);
          },
        },
        {
          key: "diffValue",
          get: function () {
            return _(this.flags_, _.diffValueMask_) ? 1 : 0;
          },
          set: function (_) {
            this.flags_ = _(this.flags_, _.diffValueMask_, _ === 1);
          },
        },
      ])
    );
  })();
_.isComputingMask_ = 1;
_.isRunningSetterMask_ = 2;
_.isBeingObservedMask_ = 4;
_.isPendingUnobservationMask_ = 8;
_.diffValueMask_ = 16;
var _ = _("ComputedValue", _),
  _;
(function (_) {
  (_[(_.NOT_TRACKING_ = -1)] = "NOT_TRACKING_"),
    (_[(_.UP_TO_DATE_ = 0)] = "UP_TO_DATE_"),
    (_[(_.POSSIBLY_STALE_ = 1)] = "POSSIBLY_STALE_"),
    (_[(_.STALE_ = 2)] = "STALE_");
})(_ || (_ = {}));
var _;
(function (_) {
  (_[(_.NONE = 0)] = "NONE"),
    (_[(_.LOG = 1)] = "LOG"),
    (_[(_.BREAK = 2)] = "BREAK");
})(_ || (_ = {}));
var _ = function (_) {
  (this.cause = void 0), (this.cause = _);
};
function _(_) {
  return _ instanceof _;
}
function _(_) {
  switch (_.dependenciesState_) {
    case _.UP_TO_DATE_:
      return !1;
    case _.NOT_TRACKING_:
    case _.STALE_:
      return !0;
    case _.POSSIBLY_STALE_: {
      for (
        var _ = _(!0), _ = _(), _ = _.observing_, _ = _.length, _ = 0;
        _ < _;
        _++
      ) {
        var _ = _[_];
        if (_(_)) {
          if (_.disableErrorBoundaries) _.get();
          else
            try {
              _.get();
            } catch {
              return _(_), _(_), !0;
            }
          if (_.dependenciesState_ === _.STALE_) return _(_), _(_), !0;
        }
      }
      return _(_), _(_), _(_), !1;
    }
  }
}
function _() {
  return _.trackingDerivation !== null;
}
function _(_) {
  return;
  var _;
}
function _(_, _, _) {
  var _ = _(!0);
  _(_),
    (_.newObserving_ = new Array(_.runId_ === 0 ? 100 : _.observing_.length)),
    (_.unboundDepsCount_ = 0),
    (_.runId_ = ++_.runId);
  var _ = _.trackingDerivation;
  (_.trackingDerivation = _), _.inBatch++;
  var _;
  if (_.disableErrorBoundaries === !0) _ = _.call(_);
  else
    try {
      _ = _.call(_);
    } catch (_) {
      _ = new _(_);
    }
  return _.inBatch--, (_.trackingDerivation = _), _(_), _(_), _;
}
function _(_) {
  for (
    var _ = _.observing_,
      _ = (_.observing_ = _.newObserving_),
      _ = _.UP_TO_DATE_,
      _ = 0,
      _ = _.unboundDepsCount_,
      _ = 0;
    _ < _;
    _++
  ) {
    var _ = _[_];
    _.diffValue === 0 && ((_.diffValue = 1), _ !== _ && (_[_] = _), _++),
      _.dependenciesState_ > _ && (_ = _.dependenciesState_);
  }
  for (_.length = _, _.newObserving_ = null, _ = _.length; _--; ) {
    var _ = _[_];
    _.diffValue === 0 && _(_, _), (_.diffValue = 0);
  }
  for (; _--; ) {
    var _ = _[_];
    _.diffValue === 1 && ((_.diffValue = 0), _(_, _));
  }
  _ !== _.UP_TO_DATE_ && ((_.dependenciesState_ = _), _.onBecomeStale_());
}
function _(_) {
  var _ = _.observing_;
  _.observing_ = [];
  for (var _ = _.length; _--; ) _(_[_], _);
  _.dependenciesState_ = _.NOT_TRACKING_;
}
function _(_) {
  var _ = _();
  try {
    return _();
  } finally {
    _(_);
  }
}
function _() {
  var _ = _.trackingDerivation;
  return (_.trackingDerivation = null), _;
}
function _(_) {
  _.trackingDerivation = _;
}
function _(_) {
  var _ = _.allowStateReads;
  return (_.allowStateReads = _), _;
}
function _(_) {
  _.allowStateReads = _;
}
function _(_) {
  if (_.dependenciesState_ !== _.UP_TO_DATE_) {
    _.dependenciesState_ = _.UP_TO_DATE_;
    for (var _ = _.observing_, _ = _.length; _--; )
      _[_].lowestObserverState_ = _.UP_TO_DATE_;
  }
}
var _ = function () {
    (this.version = 6),
      (this.UNCHANGED = {}),
      (this.trackingDerivation = null),
      (this.trackingContext = null),
      (this.runId = 0),
      (this.mobxGuid = 0),
      (this.inBatch = 0),
      (this.pendingUnobservations = []),
      (this.pendingReactions = []),
      (this.isRunningReactions = !1),
      (this.allowStateChanges = !1),
      (this.allowStateReads = !0),
      (this.enforceActions = !0),
      (this.spyListeners = []),
      (this.globalReactionErrorHandlers = []),
      (this.computedRequiresReaction = !1),
      (this.reactionRequiresObservable = !1),
      (this.observableRequiresReaction = !1),
      (this.disableErrorBoundaries = !1),
      (this.suppressReactionErrors = !1),
      (this.useProxies = !0),
      (this.verifyProxies = !1),
      (this.safeDescriptors = !0);
  },
  _ = !0,
  _ = !1,
  _ = (function () {
    var _ = _();
    return (
      _.__mobxInstanceCount > 0 && !_.__mobxGlobals && (_ = !1),
      _.__mobxGlobals &&
        _.__mobxGlobals.version !== new _().version &&
        (_ = !1),
      _
        ? _.__mobxGlobals
          ? ((_.__mobxInstanceCount += 1),
            _.__mobxGlobals.UNCHANGED || (_.__mobxGlobals.UNCHANGED = {}),
            _.__mobxGlobals)
          : ((_.__mobxInstanceCount = 1), (_.__mobxGlobals = new _()))
        : (setTimeout(function () {
            _ || _(35);
          }, 1),
          new _())
    );
  })();
function _() {
  if (
    ((_.pendingReactions.length || _.inBatch || _.isRunningReactions) && _(36),
    (_ = !0),
    _)
  ) {
    var _ = _();
    --_.__mobxInstanceCount === 0 && (_.__mobxGlobals = void 0), (_ = new _());
  }
}
function _(_, _) {
  _.observers_.add(_),
    _.lowestObserverState_ > _.dependenciesState_ &&
      (_.lowestObserverState_ = _.dependenciesState_);
}
function _(_, _) {
  _.observers_.delete(_), _.observers_.size === 0 && _(_);
}
function _(_) {
  _.isPendingUnobservation === !1 &&
    ((_.isPendingUnobservation = !0), _.pendingUnobservations.push(_));
}
function _() {
  _.inBatch++;
}
function _() {
  if (--_.inBatch === 0) {
    _();
    for (var _ = _.pendingUnobservations, _ = 0; _ < _.length; _++) {
      var _ = _[_];
      (_.isPendingUnobservation = !1),
        _.observers_.size === 0 &&
          (_.isBeingObserved && ((_.isBeingObserved = !1), _.onBUO()),
          _ instanceof _ && _.suspend_());
    }
    _.pendingUnobservations = [];
  }
}
function _(_) {
  var _ = _.trackingDerivation;
  return _ !== null
    ? (_.runId_ !== _.lastAccessedBy_ &&
        ((_.lastAccessedBy_ = _.runId_),
        (_.newObserving_[_.unboundDepsCount_++] = _),
        !_.isBeingObserved &&
          _.trackingContext &&
          ((_.isBeingObserved = !0), _.onBO())),
      _.isBeingObserved)
    : (_.observers_.size === 0 && _.inBatch > 0 && _(_), !1);
}
function _(_) {
  _.lowestObserverState_ !== _.STALE_ &&
    ((_.lowestObserverState_ = _.STALE_),
    _.observers_.forEach(function (_) {
      _.dependenciesState_ === _.UP_TO_DATE_ && _.onBecomeStale_(),
        (_.dependenciesState_ = _.STALE_);
    }));
}
function _(_) {
  _.lowestObserverState_ !== _.STALE_ &&
    ((_.lowestObserverState_ = _.STALE_),
    _.observers_.forEach(function (_) {
      _.dependenciesState_ === _.POSSIBLY_STALE_
        ? (_.dependenciesState_ = _.STALE_)
        : _.dependenciesState_ === _.UP_TO_DATE_ &&
          (_.lowestObserverState_ = _.UP_TO_DATE_);
    }));
}
function _(_) {
  _.lowestObserverState_ === _.UP_TO_DATE_ &&
    ((_.lowestObserverState_ = _.POSSIBLY_STALE_),
    _.observers_.forEach(function (_) {
      _.dependenciesState_ === _.UP_TO_DATE_ &&
        ((_.dependenciesState_ = _.POSSIBLY_STALE_), _.onBecomeStale_());
    }));
}
var _ = (function () {
  function _(_, _, _, _) {
    _ === void 0 && (_ = "Reaction"),
      (this.name_ = void 0),
      (this.onInvalidate_ = void 0),
      (this.errorHandler_ = void 0),
      (this.requiresObservable_ = void 0),
      (this.observing_ = []),
      (this.newObserving_ = []),
      (this.dependenciesState_ = _.NOT_TRACKING_),
      (this.runId_ = 0),
      (this.unboundDepsCount_ = 0),
      (this.flags_ = 0),
      (this.isTracing_ = _.NONE),
      (this.name_ = _),
      (this.onInvalidate_ = _),
      (this.errorHandler_ = _),
      (this.requiresObservable_ = _);
  }
  var _ = _.prototype;
  return (
    (_.onBecomeStale_ = function () {
      this.schedule_();
    }),
    (_.schedule_ = function () {
      this.isScheduled ||
        ((this.isScheduled = !0), _.pendingReactions.push(this), _());
    }),
    (_.runReaction_ = function () {
      if (!this.isDisposed) {
        _(), (this.isScheduled = !1);
        var _ = _.trackingContext;
        if (((_.trackingContext = this), _(this))) {
          this.isTrackPending = !0;
          try {
            this.onInvalidate_();
          } catch (_) {
            this.reportExceptionInDerivation_(_);
          }
        }
        (_.trackingContext = _), _();
      }
    }),
    (_.track = function (_) {
      if (!this.isDisposed) {
        _();
        var _ = _(),
          _;
        this.isRunning = !0;
        var _ = _.trackingContext;
        _.trackingContext = this;
        var _ = _(this, _, void 0);
        (_.trackingContext = _),
          (this.isRunning = !1),
          (this.isTrackPending = !1),
          this.isDisposed && _(this),
          _(_) && this.reportExceptionInDerivation_(_.cause),
          _();
      }
    }),
    (_.reportExceptionInDerivation_ = function (_) {
      var _ = this;
      if (this.errorHandler_) {
        this.errorHandler_(_, this);
        return;
      }
      if (_.disableErrorBoundaries) throw _;
      var _ = "[mobx] uncaught error in '" + this + "'";
      _.suppressReactionErrors || console.error(_, _),
        _.globalReactionErrorHandlers.forEach(function (_) {
          return _(_, _);
        });
    }),
    (_.dispose = function () {
      this.isDisposed ||
        ((this.isDisposed = !0), this.isRunning || (_(), _(this), _()));
    }),
    (_.getDisposer_ = function (_) {
      var _ = this,
        _ = function _() {
          _.dispose(),
            _ == null ||
              _.removeEventListener == null ||
              _.removeEventListener("abort", _);
        };
      return (
        _ == null ||
          _.addEventListener == null ||
          _.addEventListener("abort", _),
        (_[_] = this),
        "dispose" in Symbol &&
          typeof Symbol.dispose == "symbol" &&
          (_[Symbol.dispose] = _),
        _
      );
    }),
    (_.toString = function () {
      return "Reaction[" + this.name_ + "]";
    }),
    (_.trace = function (_) {
      _ === void 0 && (_ = !1), _(this, _);
    }),
    _(_, [
      {
        key: "isDisposed",
        get: function () {
          return _(this.flags_, _.isDisposedMask_);
        },
        set: function (_) {
          this.flags_ = _(this.flags_, _.isDisposedMask_, _);
        },
      },
      {
        key: "isScheduled",
        get: function () {
          return _(this.flags_, _.isScheduledMask_);
        },
        set: function (_) {
          this.flags_ = _(this.flags_, _.isScheduledMask_, _);
        },
      },
      {
        key: "isTrackPending",
        get: function () {
          return _(this.flags_, _.isTrackPendingMask_);
        },
        set: function (_) {
          this.flags_ = _(this.flags_, _.isTrackPendingMask_, _);
        },
      },
      {
        key: "isRunning",
        get: function () {
          return _(this.flags_, _.isRunningMask_);
        },
        set: function (_) {
          this.flags_ = _(this.flags_, _.isRunningMask_, _);
        },
      },
      {
        key: "diffValue",
        get: function () {
          return _(this.flags_, _.diffValueMask_) ? 1 : 0;
        },
        set: function (_) {
          this.flags_ = _(this.flags_, _.diffValueMask_, _ === 1);
        },
      },
    ])
  );
})();
_.isDisposedMask_ = 1;
_.isScheduledMask_ = 2;
_.isTrackPendingMask_ = 4;
_.isRunningMask_ = 8;
_.diffValueMask_ = 16;
var _ = 100,
  _ = function (_) {
    return _();
  };
function _() {
  _.inBatch > 0 || _.isRunningReactions || _(_);
}
function _() {
  _.isRunningReactions = !0;
  for (var _ = _.pendingReactions, _ = 0; _.length > 0; ) {
    ++_ === _ &&
      (console.error("[mobx] cycle in reaction: " + _[0]), _.splice(0));
    for (var _ = _.splice(0), _ = 0, _ = _.length; _ < _; _++)
      _[_].runReaction_();
  }
  _.isRunningReactions = !1;
}
var _ = _("Reaction", _);
function _(_) {
  var _ = _;
  _ = function (_) {
    return _(function () {
      return _(_);
    });
  };
}
function _() {
  return !1;
}
function _(_) {
  return (
    console.warn("[mobx.spy] Is a no-op in production builds"), function () {}
  );
}
var _ = "action",
  _ = "action.bound",
  _ = "autoAction",
  _ = "autoAction.bound",
  _ = "<unnamed action>",
  _ = _(_),
  _ = _(_, {
    bound: !0,
  }),
  _ = _(_, {
    autoAction: !0,
  }),
  _ = _(_, {
    autoAction: !0,
    bound: !0,
  });
function _(_) {
  var _ = function (_, _) {
    if (_(_)) return _(_.name || _, _, _);
    if (_(_)) return _(_, _, _);
    if (_(_)) return (_ ? _ : _).decorate_20223_(_, _);
    if (_(_)) return _(_, _, _ ? _ : _);
    if (_(_))
      return _(
        _(_ ? _ : _, {
          name: _,
          autoAction: _,
        }),
      );
  };
  return _;
}
var _ = _(!1);
Object.assign(_, _);
var _ = _(!0);
Object.assign(_, _);
_.bound = _(_);
_.bound = _(_);
function _(_) {
  return _(_.name || _, !1, _, this, void 0);
}
function _(_) {
  return _(_) && _.isMobxAction === !0;
}
function _(_, _) {
  var _, _, _, _;
  _ === void 0 && (_ = _);
  var _ = (_ = (_ = _) == null ? void 0 : _.name) != null ? _ : "Autorun",
    _ = !_.scheduler && !_.delay,
    _;
  if (_)
    _ = new _(
      _,
      function () {
        this.track(_);
      },
      _.onError,
      _.requiresObservable,
    );
  else {
    var _ = _(_),
      _ = !1;
    _ = new _(
      _,
      function () {
        _ ||
          ((_ = !0),
          _(function () {
            (_ = !1), _.isDisposed || _.track(_);
          }));
      },
      _.onError,
      _.requiresObservable,
    );
  }
  function _() {
    _(_);
  }
  return (
    ((_ = _) != null && (_ = _.signal) != null && _.aborted) || _.schedule_(),
    _.getDisposer_((_ = _) == null ? void 0 : _.signal)
  );
}
var _ = function (_) {
  return _();
};
function _(_) {
  return _.scheduler
    ? _.scheduler
    : _.delay
      ? function (_) {
          return setTimeout(_, _.delay);
        }
      : _;
}
function _(_, _, _) {
  var _, _, _;
  _ === void 0 && (_ = _);
  var _ = (_ = _.name) != null ? _ : "Reaction",
    _ = _(_, _.onError ? _(_.onError, _) : _),
    _ = !_.scheduler && !_.delay,
    _ = _(_),
    _ = !0,
    _ = !1,
    _,
    _ = _.compareStructural ? _.structural : _.equals || _.default,
    _ = new _(
      _,
      function () {
        _ || _ ? _() : _ || ((_ = !0), _(_));
      },
      _.onError,
      _.requiresObservable,
    );
  function _() {
    if (((_ = !1), !_.isDisposed)) {
      var _ = !1,
        _ = _;
      _.track(function () {
        var _ = _(!1, function () {
          return _(_);
        });
        (_ = _ || !_(_, _)), (_ = _);
      }),
        ((_ && _.fireImmediately) || (!_ && _)) && _(_, _, _),
        (_ = !1);
    }
  }
  return (
    ((_ = _) != null && (_ = _.signal) != null && _.aborted) || _.schedule_(),
    _.getDisposer_((_ = _) == null ? void 0 : _.signal)
  );
}
function _(_, _) {
  return function () {
    try {
      return _.apply(this, arguments);
    } catch (_) {
      _.call(this, _);
    }
  };
}
var _ = "onBO",
  _ = "onBUO";
function _(_, _, _) {
  return _(_, _, _, _);
}
function _(_, _, _) {
  return _(_, _, _, _);
}
function _(_, _, _, _) {
  var _ = typeof _ == "function" ? _(_, _) : _(_),
    _ = _(_) ? _ : _,
    _ = _ + "L";
  return (
    _[_] ? _[_].add(_) : (_[_] = new Set([_])),
    function () {
      var _ = _[_];
      _ && (_.delete(_), _.size === 0 && delete _[_]);
    }
  );
}
var _ = "never",
  _ = "always",
  _ = "observed";
function _(_) {
  _.isolateGlobalState === !0 && _();
  var _ = _.useProxies,
    _ = _.enforceActions;
  if (
    (_ !== void 0 &&
      (_.useProxies = _ === _ ? !0 : _ === _ ? !1 : typeof Proxy < "u"),
    _ === "ifavailable" && (_.verifyProxies = !0),
    _ !== void 0)
  ) {
    var _ = _ === _ ? _ : _ === _;
    (_.enforceActions = _), (_.allowStateChanges = !(_ === !0 || _ === _));
  }
  [
    "computedRequiresReaction",
    "reactionRequiresObservable",
    "observableRequiresReaction",
    "disableErrorBoundaries",
    "safeDescriptors",
  ].forEach(function (_) {
    _ in _ && (_[_] = !!_[_]);
  }),
    (_.allowStateReads = !_.observableRequiresReaction),
    _.reactionScheduler && _(_.reactionScheduler);
}
function _(_, _, _, _) {
  var _ = _(_);
  return (
    _(function () {
      var _ = _(_, _)[_];
      _(_).forEach(function (_) {
        _.extend_(_, _[_], _ && _ in _ ? _[_] : !0);
      });
    }),
    _
  );
}
function _(_, _) {
  return _(_(_, _));
}
function _(_) {
  var _ = {
    name: _.name_,
  };
  return (
    _.observing_ &&
      _.observing_.length > 0 &&
      (_.dependencies = _(_.observing_).map(_)),
    _
  );
}
function _(_) {
  return Array.from(new Set(_));
}
var _ = 0;
function _() {
  this.message = "FLOW_CANCELLED";
}
_.prototype = Object.create(Error.prototype);
var _ = _("flow"),
  _ = _("flow.bound", {
    bound: !0,
  }),
  _ = Object.assign(function (_, _) {
    if (_(_)) return _.decorate_20223_(_, _);
    if (_(_)) return _(_, _, _);
    var _ = _,
      _ = _.name || "<unnamed flow>",
      _ = function () {
        var _ = this,
          _ = arguments,
          _ = ++_,
          _ = _(_ + " - runid: " + _ + " - init", _).apply(_, _),
          _,
          _ = void 0,
          _ = new Promise(function (_, _) {
            var _ = 0;
            _ = _;
            function _(_) {
              _ = void 0;
              var _;
              try {
                _ = _(_ + " - runid: " + _ + " - yield " + _++, _.next).call(
                  _,
                  _,
                );
              } catch (_) {
                return _(_);
              }
              _(_);
            }
            function _(_) {
              _ = void 0;
              var _;
              try {
                _ = _(_ + " - runid: " + _ + " - yield " + _++, _.throw).call(
                  _,
                  _,
                );
              } catch (_) {
                return _(_);
              }
              _(_);
            }
            function _(_) {
              if (_(_?.then)) {
                _.then(_, _);
                return;
              }
              return _.done
                ? _(_.value)
                : ((_ = Promise.resolve(_.value)), _.then(_, _));
            }
            _(void 0);
          });
        return (
          (_.cancel = _(_ + " - runid: " + _ + " - cancel", function () {
            try {
              _ && _(_);
              var _ = _.return(void 0),
                _ = Promise.resolve(_.value);
              _.then(_, _), _(_), _(new _());
            } catch (_) {
              _(_);
            }
          })),
          _
        );
      };
    return (_.isMobXFlow = !0), _;
  }, _);
_.bound = _(_);
function _(_) {
  _(_.cancel) && _.cancel();
}
function _(_) {
  return _?.isMobXFlow === !0;
}
function _(_, _) {
  if (_ === void 0) return _(_);
  if (_(_) === !1 || !_[_].values_.has(_)) return !1;
  var _ = _(_, _);
  return _(_);
}
function _(_) {
  return _(_);
}
function _(_, _) {
  return _(_, _);
}
function _(_, _) {
  return _
    ? _ !== void 0
      ? _(_)
        ? _[_].values_.has(_)
        : !1
      : _(_) || !!_[_] || _(_) || _(_) || _(_)
    : !1;
}
function _(_) {
  return _(_);
}
function _(_) {
  if (_(_)) return _[_].keys_();
  if (_(_) || _(_)) return Array.from(_.keys());
  if (_(_))
    return _.map(function (_, _) {
      return _;
    });
  _(5);
}
function _(_) {
  if (_(_)) return _[_].ownKeys_();
  _(38);
}
function _(_, _, _, _) {
  return _(_) ? _(_, _, _, _) : _(_, _, _);
}
function _(_, _, _) {
  return _(_).observe_(_, _);
}
function _(_, _, _, _) {
  return _(_, _).observe_(_, _);
}
function _(_, _, _) {
  return _.set(_, _), _;
}
function _(_, _) {
  if (_ == null || typeof _ != "object" || _ instanceof Date || !_(_)) return _;
  if (_(_) || _(_)) return _(_.get(), _);
  if (_.has(_)) return _.get(_);
  if (_(_)) {
    var _ = _(_, _, new Array(_.length));
    return (
      _.forEach(function (_, _) {
        _[_] = _(_, _);
      }),
      _
    );
  }
  if (_(_)) {
    var _ = _(_, _, new Set());
    return (
      _.forEach(function (_) {
        _.add(_(_, _));
      }),
      _
    );
  }
  if (_(_)) {
    var _ = _(_, _, new Map());
    return (
      _.forEach(function (_, _) {
        _.set(_, _(_, _));
      }),
      _
    );
  } else {
    var _ = _(_, _, {});
    return (
      _(_).forEach(function (_) {
        _.propertyIsEnumerable.call(_, _) && (_[_] = _(_[_], _));
      }),
      _
    );
  }
}
function _(_, _) {
  return _(_, new Map());
}
function _() {
  return;
  for (var _, _, _, _; _ < _; _++) _[_] = arguments[_];
  var _;
}
function _(_) {
  switch (_.length) {
    case 0:
      return _.trackingDerivation;
    case 1:
      return _(_[0]);
    case 2:
      return _(_[0], _[1]);
  }
}
function _(_, _) {
  _ === void 0 && (_ = void 0), _();
  try {
    return _.apply(_);
  } finally {
    _();
  }
}
function _(_, _, _) {
  return arguments.length === 1 || (_ && typeof _ == "object")
    ? _(_, _)
    : _(_, _, _ || {});
}
function _(_, _, _) {
  var _;
  if (typeof _.timeout == "number") {
    var _ = new Error("WHEN_TIMEOUT");
    _ = setTimeout(function () {
      if (!_[_].isDisposed)
        if ((_(), _.onError)) _.onError(_);
        else throw _;
    }, _.timeout);
  }
  _.name = "When";
  var _ = _("When-effect", _),
    _ = _(function (_) {
      var _ = _(!1, _);
      _ && (_.dispose(), _ && clearTimeout(_), _());
    }, _);
  return _;
}
function _(_, _) {
  var _;
  if (_ != null && (_ = _.signal) != null && _.aborted)
    return Object.assign(Promise.reject(new Error("WHEN_ABORTED")), {
      cancel: function () {
        return null;
      },
    });
  var _,
    _,
    _ = new Promise(function (_, _) {
      var _,
        _ = _(
          _,
          _,
          _({}, _, {
            onError: _,
          }),
        );
      (_ = function () {
        _(), _(new Error("WHEN_CANCELLED"));
      }),
        (_ = function () {
          _(), _(new Error("WHEN_ABORTED"));
        }),
        _ == null ||
          (_ = _.signal) == null ||
          _.addEventListener == null ||
          _.addEventListener("abort", _);
    }).finally(function () {
      var _;
      return _ == null ||
        (_ = _.signal) == null ||
        _.removeEventListener == null
        ? void 0
        : _.removeEventListener("abort", _);
    });
  return (_.cancel = _), _;
}
function _(_) {
  return _[_];
}
var _ = {
  has: function (_, _) {
    return _(_).has_(_);
  },
  get: function (_, _) {
    return _(_).get_(_);
  },
  set: function (_, _, _) {
    var _;
    return _(_) ? ((_ = _(_).set_(_, _, !0)) != null ? _ : !0) : !1;
  },
  deleteProperty: function (_, _) {
    var _;
    return _(_) ? ((_ = _(_).delete_(_, !0)) != null ? _ : !0) : !1;
  },
  defineProperty: function (_, _, _) {
    var _;
    return (_ = _(_).defineProperty_(_, _)) != null ? _ : !0;
  },
  ownKeys: function (_) {
    return _(_).ownKeys_();
  },
  preventExtensions: function (_) {
    _(13);
  },
};
function _(_, _) {
  var _, _;
  return (
    _(),
    (_ = _(_, _)),
    (_ = (_ = _[_]).proxy_) != null ? _ : (_.proxy_ = new Proxy(_, _))
  );
}
function _(_) {
  return _.interceptors_ !== void 0 && _.interceptors_.length > 0;
}
function _(_, _) {
  var _ = _.interceptors_ || (_.interceptors_ = []);
  return (
    _.push(_),
    _(function () {
      var _ = _.indexOf(_);
      _ !== -1 && _.splice(_, 1);
    })
  );
}
function _(_, _) {
  var _ = _();
  try {
    for (
      var _ = [].concat(_.interceptors_ || []), _ = 0, _ = _.length;
      _ < _ && ((_ = _[_](_)), _ && !_.type && _(14), !!_);
      _++
    );
    return _;
  } finally {
    _(_);
  }
}
function _(_) {
  return _.changeListeners_ !== void 0 && _.changeListeners_.length > 0;
}
function _(_, _) {
  var _ = _.changeListeners_ || (_.changeListeners_ = []);
  return (
    _.push(_),
    _(function () {
      var _ = _.indexOf(_);
      _ !== -1 && _.splice(_, 1);
    })
  );
}
function _(_, _) {
  var _ = _(),
    _ = _.changeListeners_;
  if (_) {
    _ = _.slice();
    for (var _ = 0, _ = _.length; _ < _; _++) _[_](_);
    _(_);
  }
}
function _(_, _, _) {
  return (
    _(function () {
      var _,
        _ = _(_, _)[_];
      (_ = _) != null || (_ = _(_)),
        _(_).forEach(function (_) {
          return _.make_(_, _[_]);
        });
    }),
    _
  );
}
var _ = "splice",
  _ = "update",
  _ = 1e4,
  _ = {
    get: function (_, _) {
      var _ = _[_];
      return _ === _
        ? _
        : _ === "length"
          ? _.getArrayLength_()
          : typeof _ == "string" && !isNaN(_)
            ? _.get_(parseInt(_))
            : _(_, _)
              ? _[_]
              : _[_];
    },
    set: function (_, _, _) {
      var _ = _[_];
      return (
        _ === "length" && _.setArrayLength_(_),
        typeof _ == "symbol" || isNaN(_) ? (_[_] = _) : _.set_(parseInt(_), _),
        !0
      );
    },
    preventExtensions: function () {
      _(15);
    },
  },
  _ = (function () {
    function _(_, _, _, _) {
      _ === void 0 && (_ = "ObservableArray"),
        (this.owned_ = void 0),
        (this.legacyMode_ = void 0),
        (this.atom_ = void 0),
        (this.values_ = []),
        (this.interceptors_ = void 0),
        (this.changeListeners_ = void 0),
        (this.enhancer_ = void 0),
        (this.dehancer = void 0),
        (this.proxy_ = void 0),
        (this.lastKnownLength_ = 0),
        (this.owned_ = _),
        (this.legacyMode_ = _),
        (this.atom_ = new _(_)),
        (this.enhancer_ = function (_, _) {
          return _(_, _, "ObservableArray[..]");
        });
    }
    var _ = _.prototype;
    return (
      (_.dehanceValue_ = function (_) {
        return this.dehancer !== void 0 ? this.dehancer(_) : _;
      }),
      (_.dehanceValues_ = function (_) {
        return this.dehancer !== void 0 && _.length > 0
          ? _.map(this.dehancer)
          : _;
      }),
      (_.intercept_ = function (_) {
        return _(this, _);
      }),
      (_.observe_ = function (_, _) {
        return (
          _ === void 0 && (_ = !1),
          _ &&
            _({
              observableKind: "array",
              object: this.proxy_,
              debugObjectName: this.atom_.name_,
              type: "splice",
              index: 0,
              added: this.values_.slice(),
              addedCount: this.values_.length,
              removed: [],
              removedCount: 0,
            }),
          _(this, _)
        );
      }),
      (_.getArrayLength_ = function () {
        return this.atom_.reportObserved(), this.values_.length;
      }),
      (_.setArrayLength_ = function (_) {
        (typeof _ != "number" || isNaN(_) || _ < 0) && _("Out of range: " + _);
        var _ = this.values_.length;
        if (_ !== _)
          if (_ > _) {
            for (var _ = new Array(_ - _), _ = 0; _ < _ - _; _++) _[_] = void 0;
            this.spliceWithArray_(_, 0, _);
          } else this.spliceWithArray_(_, _ - _);
      }),
      (_.updateArrayLength_ = function (_, _) {
        _ !== this.lastKnownLength_ && _(16),
          (this.lastKnownLength_ += _),
          this.legacyMode_ && _ > 0 && _(_ + _ + 1);
      }),
      (_.spliceWithArray_ = function (_, _, _) {
        var _ = this;
        _(this.atom_);
        var _ = this.values_.length;
        if (
          (_ === void 0
            ? (_ = 0)
            : _ > _
              ? (_ = _)
              : _ < 0 && (_ = Math.max(0, _ + _)),
          arguments.length === 1
            ? (_ = _ - _)
            : _ == null
              ? (_ = 0)
              : (_ = Math.max(0, Math.min(_, _ - _))),
          _ === void 0 && (_ = _),
          _(this))
        ) {
          var _ = _(this, {
            object: this.proxy_,
            type: _,
            index: _,
            removedCount: _,
            added: _,
          });
          if (!_) return _;
          (_ = _.removedCount), (_ = _.added);
        }
        if (
          ((_ =
            _.length === 0
              ? _
              : _.map(function (_) {
                  return _.enhancer_(_, void 0);
                })),
          this.legacyMode_)
        ) {
          var _ = _.length - _;
          this.updateArrayLength_(_, _);
        }
        var _ = this.spliceItemsIntoValues_(_, _, _);
        return (
          (_ !== 0 || _.length !== 0) && this.notifyArraySplice_(_, _, _),
          this.dehanceValues_(_)
        );
      }),
      (_.spliceItemsIntoValues_ = function (_, _, _) {
        if (_.length < _) {
          var _;
          return (_ = this.values_).splice.apply(_, [_, _].concat(_));
        } else {
          var _ = this.values_.slice(_, _ + _),
            _ = this.values_.slice(_ + _);
          this.values_.length += _.length - _;
          for (var _ = 0; _ < _.length; _++) this.values_[_ + _] = _[_];
          for (var _ = 0; _ < _.length; _++)
            this.values_[_ + _.length + _] = _[_];
          return _;
        }
      }),
      (_.notifyArrayChildUpdate_ = function (_, _, _) {
        var _ = !this.owned_ && _(),
          _ = _(this),
          _ =
            _ || _
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  type: _,
                  debugObjectName: this.atom_.name_,
                  index: _,
                  newValue: _,
                  oldValue: _,
                }
              : null;
        this.atom_.reportChanged(), _ && _(this, _);
      }),
      (_.notifyArraySplice_ = function (_, _, _) {
        var _ = !this.owned_ && _(),
          _ = _(this),
          _ =
            _ || _
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  debugObjectName: this.atom_.name_,
                  type: _,
                  index: _,
                  removed: _,
                  added: _,
                  removedCount: _.length,
                  addedCount: _.length,
                }
              : null;
        this.atom_.reportChanged(), _ && _(this, _);
      }),
      (_.get_ = function (_) {
        if (this.legacyMode_ && _ >= this.values_.length) {
          console.warn("[mobx] Out of bounds read: " + _);
          return;
        }
        return this.atom_.reportObserved(), this.dehanceValue_(this.values_[_]);
      }),
      (_.set_ = function (_, _) {
        var _ = this.values_;
        if (
          (this.legacyMode_ && _ > _.length && _(17, _, _.length), _ < _.length)
        ) {
          _(this.atom_);
          var _ = _[_];
          if (_(this)) {
            var _ = _(this, {
              type: _,
              object: this.proxy_,
              index: _,
              newValue: _,
            });
            if (!_) return;
            _ = _.newValue;
          }
          _ = this.enhancer_(_, _);
          var _ = _ !== _;
          _ && ((_[_] = _), this.notifyArrayChildUpdate_(_, _, _));
        } else {
          for (
            var _ = new Array(_ + 1 - _.length), _ = 0;
            _ < _.length - 1;
            _++
          )
            _[_] = void 0;
          (_[_.length - 1] = _), this.spliceWithArray_(_.length, 0, _);
        }
      }),
      _
    );
  })();
function _(_, _, _, _) {
  return (
    _ === void 0 && (_ = "ObservableArray"),
    _ === void 0 && (_ = !1),
    _(),
    _(function () {
      var _ = new _(_, _, _, !1);
      _(_.values_, _, _);
      var _ = new Proxy(_.values_, _);
      return (_.proxy_ = _), _ && _.length && _.spliceWithArray_(0, 0, _), _;
    })
  );
}
var _ = {
  clear: function () {
    return this.splice(0);
  },
  replace: function (_) {
    var _ = this[_];
    return _.spliceWithArray_(0, _.values_.length, _);
  },
  toJSON: function () {
    return this.slice();
  },
  splice: function (_, _) {
    for (
      var _ = arguments.length, _ = new Array(_ > 2 ? _ - 2 : 0), _ = 2;
      _ < _;
      _++
    )
      _[_ - 2] = arguments[_];
    var _ = this[_];
    switch (arguments.length) {
      case 0:
        return [];
      case 1:
        return _.spliceWithArray_(_);
      case 2:
        return _.spliceWithArray_(_, _);
    }
    return _.spliceWithArray_(_, _, _);
  },
  spliceWithArray: function (_, _, _) {
    return this[_].spliceWithArray_(_, _, _);
  },
  push: function () {
    for (
      var _ = this[_], _ = arguments.length, _ = new Array(_), _ = 0;
      _ < _;
      _++
    )
      _[_] = arguments[_];
    return _.spliceWithArray_(_.values_.length, 0, _), _.values_.length;
  },
  pop: function () {
    return this.splice(Math.max(this[_].values_.length - 1, 0), 1)[0];
  },
  shift: function () {
    return this.splice(0, 1)[0];
  },
  unshift: function () {
    for (
      var _ = this[_], _ = arguments.length, _ = new Array(_), _ = 0;
      _ < _;
      _++
    )
      _[_] = arguments[_];
    return _.spliceWithArray_(0, 0, _), _.values_.length;
  },
  reverse: function () {
    return (
      _.trackingDerivation && _(37, "reverse"),
      this.replace(this.slice().reverse()),
      this
    );
  },
  sort: function () {
    _.trackingDerivation && _(37, "sort");
    var _ = this.slice();
    return _.sort.apply(_, arguments), this.replace(_), this;
  },
  remove: function (_) {
    var _ = this[_],
      _ = _.dehanceValues_(_.values_).indexOf(_);
    return _ > -1 ? (this.splice(_, 1), !0) : !1;
  },
};
_("at", _);
_("concat", _);
_("flat", _);
_("includes", _);
_("indexOf", _);
_("join", _);
_("lastIndexOf", _);
_("slice", _);
_("toString", _);
_("toLocaleString", _);
_("toSorted", _);
_("toSpliced", _);
_("with", _);
_("every", _);
_("filter", _);
_("find", _);
_("findIndex", _);
_("findLast", _);
_("findLastIndex", _);
_("flatMap", _);
_("forEach", _);
_("map", _);
_("some", _);
_("toReversed", _);
_("reduce", _);
_("reduceRight", _);
function _(_, _) {
  typeof Array.prototype[_] == "function" && (_[_] = _(_));
}
function _(_) {
  return function () {
    var _ = this[_];
    _.atom_.reportObserved();
    var _ = _.dehanceValues_(_.values_);
    return _[_].apply(_, arguments);
  };
}
function _(_) {
  return function (_, _) {
    var _ = this,
      _ = this[_];
    _.atom_.reportObserved();
    var _ = _.dehanceValues_(_.values_);
    return _[_](function (_, _) {
      return _.call(_, _, _, _);
    });
  };
}
function _(_) {
  return function () {
    var _ = this,
      _ = this[_];
    _.atom_.reportObserved();
    var _ = _.dehanceValues_(_.values_),
      _ = arguments[0];
    return (
      (arguments[0] = function (_, _, _) {
        return _(_, _, _, _);
      }),
      _[_].apply(_, arguments)
    );
  };
}
var _ = _("ObservableArrayAdministration", _);
function _(_) {
  return _(_) && _(_[_]);
}
var _ = {},
  _ = "add",
  _ = "delete",
  _ = (function () {
    function _(_, _, _) {
      var _ = this;
      _ === void 0 && (_ = _),
        _ === void 0 && (_ = "ObservableMap"),
        (this.enhancer_ = void 0),
        (this.name_ = void 0),
        (this[_] = _),
        (this.data_ = void 0),
        (this.hasMap_ = void 0),
        (this.keysAtom_ = void 0),
        (this.interceptors_ = void 0),
        (this.changeListeners_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = _),
        (this.name_ = _),
        _(Map) || _(18),
        _(function () {
          (_.keysAtom_ = _("ObservableMap.keys()")),
            (_.data_ = new Map()),
            (_.hasMap_ = new Map()),
            _ && _.merge(_);
        });
    }
    var _ = _.prototype;
    return (
      (_.has_ = function (_) {
        return this.data_.has(_);
      }),
      (_.has = function (_) {
        var _ = this;
        if (!_.trackingDerivation) return this.has_(_);
        var _ = this.hasMap_.get(_);
        if (!_) {
          var _ = (_ = new _(this.has_(_), _, "ObservableMap.key?", !1));
          this.hasMap_.set(_, _),
            _(_, function () {
              return _.hasMap_.delete(_);
            });
        }
        return _.get();
      }),
      (_.set = function (_, _) {
        var _ = this.has_(_);
        if (_(this)) {
          var _ = _(this, {
            type: _ ? _ : _,
            object: this,
            newValue: _,
            name: _,
          });
          if (!_) return this;
          _ = _.newValue;
        }
        return _ ? this.updateValue_(_, _) : this.addValue_(_, _), this;
      }),
      (_.delete = function (_) {
        var _ = this;
        if ((_(this.keysAtom_), _(this))) {
          var _ = _(this, {
            type: _,
            object: this,
            name: _,
          });
          if (!_) return !1;
        }
        if (this.has_(_)) {
          var _ = _(),
            _ = _(this),
            _ =
              _ || _
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: _,
                    object: this,
                    oldValue: this.data_.get(_).value_,
                    name: _,
                  }
                : null;
          return (
            _(function () {
              var _;
              _.keysAtom_.reportChanged(),
                (_ = _.hasMap_.get(_)) == null || _.setNewValue_(!1);
              var _ = _.data_.get(_);
              _.setNewValue_(void 0), _.data_.delete(_);
            }),
            _ && _(this, _),
            !0
          );
        }
        return !1;
      }),
      (_.updateValue_ = function (_, _) {
        var _ = this.data_.get(_);
        if (((_ = _.prepareNewValue_(_)), _ !== _.UNCHANGED)) {
          var _ = _(),
            _ = _(this),
            _ =
              _ || _
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: _,
                    object: this,
                    oldValue: _.value_,
                    name: _,
                    newValue: _,
                  }
                : null;
          _.setNewValue_(_), _ && _(this, _);
        }
      }),
      (_.addValue_ = function (_, _) {
        var _ = this;
        _(this.keysAtom_),
          _(function () {
            var _,
              _ = new _(_, _.enhancer_, "ObservableMap.key", !1);
            _.data_.set(_, _),
              (_ = _.value_),
              (_ = _.hasMap_.get(_)) == null || _.setNewValue_(!0),
              _.keysAtom_.reportChanged();
          });
        var _ = _(),
          _ = _(this),
          _ =
            _ || _
              ? {
                  observableKind: "map",
                  debugObjectName: this.name_,
                  type: _,
                  object: this,
                  name: _,
                  newValue: _,
                }
              : null;
        _ && _(this, _);
      }),
      (_.get = function (_) {
        return this.has(_)
          ? this.dehanceValue_(this.data_.get(_).get())
          : this.dehanceValue_(void 0);
      }),
      (_.dehanceValue_ = function (_) {
        return this.dehancer !== void 0 ? this.dehancer(_) : _;
      }),
      (_.keys = function () {
        return this.keysAtom_.reportObserved(), this.data_.keys();
      }),
      (_.values = function () {
        var _ = this,
          _ = this.keys();
        return _({
          next: function () {
            var _ = _.next(),
              _ = _.done,
              _ = _.value;
            return {
              done: _,
              value: _ ? void 0 : _.get(_),
            };
          },
        });
      }),
      (_.entries = function () {
        var _ = this,
          _ = this.keys();
        return _({
          next: function () {
            var _ = _.next(),
              _ = _.done,
              _ = _.value;
            return {
              done: _,
              value: _ ? void 0 : [_, _.get(_)],
            };
          },
        });
      }),
      (_[Symbol.iterator] = function () {
        return this.entries();
      }),
      (_.forEach = function (_, _) {
        for (var _ = _(this), _; !(_ = _()).done; ) {
          var _ = _.value,
            _ = _[0],
            _ = _[1];
          _.call(_, _, _, this);
        }
      }),
      (_.merge = function (_) {
        var _ = this;
        return (
          _(_) && (_ = new Map(_)),
          _(function () {
            _(_)
              ? _(_).forEach(function (_) {
                  return _.set(_, _[_]);
                })
              : Array.isArray(_)
                ? _.forEach(function (_) {
                    var _ = _[0],
                      _ = _[1];
                    return _.set(_, _);
                  })
                : _(_)
                  ? (_(_) || _(19, _),
                    _.forEach(function (_, _) {
                      return _.set(_, _);
                    }))
                  : _ != null && _(20, _);
          }),
          this
        );
      }),
      (_.clear = function () {
        var _ = this;
        _(function () {
          _(function () {
            for (var _ = _(_.keys()), _; !(_ = _()).done; ) {
              var _ = _.value;
              _.delete(_);
            }
          });
        });
      }),
      (_.replace = function (_) {
        var _ = this;
        return (
          _(function () {
            for (
              var _ = _(_), _ = new Map(), _ = !1, _ = _(_.data_.keys()), _;
              !(_ = _()).done;
            ) {
              var _ = _.value;
              if (!_.has(_)) {
                var _ = _.delete(_);
                if (_) _ = !0;
                else {
                  var _ = _.data_.get(_);
                  _.set(_, _);
                }
              }
            }
            for (var _ = _(_.entries()), _; !(_ = _()).done; ) {
              var _ = _.value,
                _ = _[0],
                _ = _[1],
                _ = _.data_.has(_);
              if ((_.set(_, _), _.data_.has(_))) {
                var _ = _.data_.get(_);
                _.set(_, _), _ || (_ = !0);
              }
            }
            if (!_)
              if (_.data_.size !== _.size) _.keysAtom_.reportChanged();
              else
                for (
                  var _ = _.data_.keys(),
                    _ = _.keys(),
                    _ = _.next(),
                    _ = _.next();
                  !_.done;
                ) {
                  if (_.value !== _.value) {
                    _.keysAtom_.reportChanged();
                    break;
                  }
                  (_ = _.next()), (_ = _.next());
                }
            _.data_ = _;
          }),
          this
        );
      }),
      (_.toString = function () {
        return "[object ObservableMap]";
      }),
      (_.toJSON = function () {
        return Array.from(this);
      }),
      (_.observe_ = function (_, _) {
        return _(this, _);
      }),
      (_.intercept_ = function (_) {
        return _(this, _);
      }),
      _(_, [
        {
          key: "size",
          get: function () {
            return this.keysAtom_.reportObserved(), this.data_.size;
          },
        },
        {
          key: Symbol.toStringTag,
          get: function () {
            return "Map";
          },
        },
      ])
    );
  })(),
  _ = _("ObservableMap", _);
function _(_) {
  return (_[Symbol.toStringTag] = "MapIterator"), _(_);
}
function _(_) {
  if (_(_) || _(_)) return _;
  if (Array.isArray(_)) return new Map(_);
  if (_(_)) {
    var _ = new Map();
    for (var _ in _) _.set(_, _[_]);
    return _;
  } else return _(21, _);
}
var _ = {},
  _ = (function () {
    function _(_, _, _) {
      var _ = this;
      _ === void 0 && (_ = _),
        _ === void 0 && (_ = "ObservableSet"),
        (this.name_ = void 0),
        (this[_] = _),
        (this.data_ = new Set()),
        (this.atom_ = void 0),
        (this.changeListeners_ = void 0),
        (this.interceptors_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = void 0),
        (this.name_ = _),
        _(Set) || _(22),
        (this.enhancer_ = function (_, _) {
          return _(_, _, _);
        }),
        _(function () {
          (_.atom_ = _(_.name_)), _ && _.replace(_);
        });
    }
    var _ = _.prototype;
    return (
      (_.dehanceValue_ = function (_) {
        return this.dehancer !== void 0 ? this.dehancer(_) : _;
      }),
      (_.clear = function () {
        var _ = this;
        _(function () {
          _(function () {
            for (var _ = _(_.data_.values()), _; !(_ = _()).done; ) {
              var _ = _.value;
              _.delete(_);
            }
          });
        });
      }),
      (_.forEach = function (_, _) {
        for (var _ = _(this), _; !(_ = _()).done; ) {
          var _ = _.value;
          _.call(_, _, _, this);
        }
      }),
      (_.add = function (_) {
        var _ = this;
        if ((_(this.atom_), _(this))) {
          var _ = _(this, {
            type: _,
            object: this,
            newValue: _,
          });
          if (!_) return this;
          _ = _.newValue;
        }
        if (!this.has(_)) {
          _(function () {
            _.data_.add(_.enhancer_(_, void 0)), _.atom_.reportChanged();
          });
          var _ = !1,
            _ = _(this),
            _ =
              _ || _
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: _,
                    object: this,
                    newValue: _,
                  }
                : null;
          _ && _(this, _);
        }
        return this;
      }),
      (_.delete = function (_) {
        var _ = this;
        if (_(this)) {
          var _ = _(this, {
            type: _,
            object: this,
            oldValue: _,
          });
          if (!_) return !1;
        }
        if (this.has(_)) {
          var _ = !1,
            _ = _(this),
            _ =
              _ || _
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: _,
                    object: this,
                    oldValue: _,
                  }
                : null;
          return (
            _(function () {
              _.atom_.reportChanged(), _.data_.delete(_);
            }),
            _ && _(this, _),
            !0
          );
        }
        return !1;
      }),
      (_.has = function (_) {
        return (
          this.atom_.reportObserved(), this.data_.has(this.dehanceValue_(_))
        );
      }),
      (_.entries = function () {
        var _ = this.values();
        return _({
          next: function () {
            var _ = _.next(),
              _ = _.value,
              _ = _.done;
            return _
              ? {
                  value: void 0,
                  done: _,
                }
              : {
                  value: [_, _],
                  done: _,
                };
          },
        });
      }),
      (_.keys = function () {
        return this.values();
      }),
      (_.values = function () {
        this.atom_.reportObserved();
        var _ = this,
          _ = this.data_.values();
        return _({
          next: function () {
            var _ = _.next(),
              _ = _.value,
              _ = _.done;
            return _
              ? {
                  value: void 0,
                  done: _,
                }
              : {
                  value: _.dehanceValue_(_),
                  done: _,
                };
          },
        });
      }),
      (_.intersection = function (_) {
        if (_(_) && !_(_)) return _.intersection(this);
        var _ = new Set(this);
        return _.intersection(_);
      }),
      (_.union = function (_) {
        if (_(_) && !_(_)) return _.union(this);
        var _ = new Set(this);
        return _.union(_);
      }),
      (_.difference = function (_) {
        return new Set(this).difference(_);
      }),
      (_.symmetricDifference = function (_) {
        if (_(_) && !_(_)) return _.symmetricDifference(this);
        var _ = new Set(this);
        return _.symmetricDifference(_);
      }),
      (_.isSubsetOf = function (_) {
        return new Set(this).isSubsetOf(_);
      }),
      (_.isSupersetOf = function (_) {
        return new Set(this).isSupersetOf(_);
      }),
      (_.isDisjointFrom = function (_) {
        if (_(_) && !_(_)) return _.isDisjointFrom(this);
        var _ = new Set(this);
        return _.isDisjointFrom(_);
      }),
      (_.replace = function (_) {
        var _ = this;
        return (
          _(_) && (_ = new Set(_)),
          _(function () {
            Array.isArray(_)
              ? (_.clear(),
                _.forEach(function (_) {
                  return _.add(_);
                }))
              : _(_)
                ? (_.clear(),
                  _.forEach(function (_) {
                    return _.add(_);
                  }))
                : _ != null && _("Cannot initialize set from " + _);
          }),
          this
        );
      }),
      (_.observe_ = function (_, _) {
        return _(this, _);
      }),
      (_.intercept_ = function (_) {
        return _(this, _);
      }),
      (_.toJSON = function () {
        return Array.from(this);
      }),
      (_.toString = function () {
        return "[object ObservableSet]";
      }),
      (_[Symbol.iterator] = function () {
        return this.values();
      }),
      _(_, [
        {
          key: "size",
          get: function () {
            return this.atom_.reportObserved(), this.data_.size;
          },
        },
        {
          key: Symbol.toStringTag,
          get: function () {
            return "Set";
          },
        },
      ])
    );
  })(),
  _ = _("ObservableSet", _);
function _(_) {
  return (_[Symbol.toStringTag] = "SetIterator"), _(_);
}
var _ = Object.create(null),
  _ = "remove",
  _ = (function () {
    function _(_, _, _, _) {
      _ === void 0 && (_ = new Map()),
        _ === void 0 && (_ = _),
        (this.target_ = void 0),
        (this.values_ = void 0),
        (this.name_ = void 0),
        (this.defaultAnnotation_ = void 0),
        (this.keysAtom_ = void 0),
        (this.changeListeners_ = void 0),
        (this.interceptors_ = void 0),
        (this.proxy_ = void 0),
        (this.isPlainObject_ = void 0),
        (this.appliedAnnotations_ = void 0),
        (this.pendingKeys_ = void 0),
        (this.target_ = _),
        (this.values_ = _),
        (this.name_ = _),
        (this.defaultAnnotation_ = _),
        (this.keysAtom_ = new _("ObservableObject.keys")),
        (this.isPlainObject_ = _(this.target_));
    }
    var _ = _.prototype;
    return (
      (_.getObservablePropValue_ = function (_) {
        return this.values_.get(_).get();
      }),
      (_.setObservablePropValue_ = function (_, _) {
        var _ = this.values_.get(_);
        if (_ instanceof _) return _.set(_), !0;
        if (_(this)) {
          var _ = _(this, {
            type: _,
            object: this.proxy_ || this.target_,
            name: _,
            newValue: _,
          });
          if (!_) return null;
          _ = _.newValue;
        }
        if (((_ = _.prepareNewValue_(_)), _ !== _.UNCHANGED)) {
          var _ = _(this),
            _ = !1,
            _ =
              _ || _
                ? {
                    type: _,
                    observableKind: "object",
                    debugObjectName: this.name_,
                    object: this.proxy_ || this.target_,
                    oldValue: _.value_,
                    name: _,
                    newValue: _,
                  }
                : null;
          _.setNewValue_(_), _ && _(this, _);
        }
        return !0;
      }),
      (_.get_ = function (_) {
        return (
          _.trackingDerivation && !_(this.target_, _) && this.has_(_),
          this.target_[_]
        );
      }),
      (_.set_ = function (_, _, _) {
        return (
          _ === void 0 && (_ = !1),
          _(this.target_, _)
            ? this.values_.has(_)
              ? this.setObservablePropValue_(_, _)
              : _
                ? Reflect.set(this.target_, _, _)
                : ((this.target_[_] = _), !0)
            : this.extend_(
                _,
                {
                  value: _,
                  enumerable: !0,
                  writable: !0,
                  configurable: !0,
                },
                this.defaultAnnotation_,
                _,
              )
        );
      }),
      (_.has_ = function (_) {
        if (!_.trackingDerivation) return _ in this.target_;
        this.pendingKeys_ || (this.pendingKeys_ = new Map());
        var _ = this.pendingKeys_.get(_);
        return (
          _ ||
            ((_ = new _(_ in this.target_, _, "ObservableObject.key?", !1)),
            this.pendingKeys_.set(_, _)),
          _.get()
        );
      }),
      (_.make_ = function (_, _) {
        if ((_ === !0 && (_ = this.defaultAnnotation_), _ !== !1)) {
          if ((_(this, _, _), !(_ in this.target_))) {
            var _;
            if ((_ = this.target_[_]) != null && _[_]) return;
            _(1, _.annotationType_, this.name_ + "." + _.toString());
          }
          for (var _ = this.target_; _ && _ !== _; ) {
            var _ = _(_, _);
            if (_) {
              var _ = _.make_(this, _, _, _);
              if (_ === 0) return;
              if (_ === 1) break;
            }
            _ = Object.getPrototypeOf(_);
          }
          _(this, _, _);
        }
      }),
      (_.extend_ = function (_, _, _, _) {
        if (
          (_ === void 0 && (_ = !1),
          _ === !0 && (_ = this.defaultAnnotation_),
          _ === !1)
        )
          return this.defineProperty_(_, _, _);
        _(this, _, _);
        var _ = _.extend_(this, _, _, _);
        return _ && _(this, _, _), _;
      }),
      (_.defineProperty_ = function (_, _, _) {
        _ === void 0 && (_ = !1), _(this.keysAtom_);
        try {
          _();
          var _ = this.delete_(_);
          if (!_) return _;
          if (_(this)) {
            var _ = _(this, {
              object: this.proxy_ || this.target_,
              name: _,
              type: _,
              newValue: _.value,
            });
            if (!_) return null;
            var _ = _.newValue;
            _.value !== _ &&
              (_ = _({}, _, {
                value: _,
              }));
          }
          if (_) {
            if (!Reflect.defineProperty(this.target_, _, _)) return !1;
          } else _(this.target_, _, _);
          this.notifyPropertyAddition_(_, _.value);
        } finally {
          _();
        }
        return !0;
      }),
      (_.defineObservableProperty_ = function (_, _, _, _) {
        _ === void 0 && (_ = !1), _(this.keysAtom_);
        try {
          _();
          var _ = this.delete_(_);
          if (!_) return _;
          if (_(this)) {
            var _ = _(this, {
              object: this.proxy_ || this.target_,
              name: _,
              type: _,
              newValue: _,
            });
            if (!_) return null;
            _ = _.newValue;
          }
          var _ = _(_),
            _ = {
              configurable: _.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !0,
              get: _.get,
              set: _.set,
            };
          if (_) {
            if (!Reflect.defineProperty(this.target_, _, _)) return !1;
          } else _(this.target_, _, _);
          var _ = new _(_, _, "ObservableObject.key", !1);
          this.values_.set(_, _), this.notifyPropertyAddition_(_, _.value_);
        } finally {
          _();
        }
        return !0;
      }),
      (_.defineComputedProperty_ = function (_, _, _) {
        _ === void 0 && (_ = !1), _(this.keysAtom_);
        try {
          _();
          var _ = this.delete_(_);
          if (!_) return _;
          if (_(this)) {
            var _ = _(this, {
              object: this.proxy_ || this.target_,
              name: _,
              type: _,
              newValue: void 0,
            });
            if (!_) return null;
          }
          _.name || (_.name = "ObservableObject.key"),
            (_.context = this.proxy_ || this.target_);
          var _ = _(_),
            _ = {
              configurable: _.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !1,
              get: _.get,
              set: _.set,
            };
          if (_) {
            if (!Reflect.defineProperty(this.target_, _, _)) return !1;
          } else _(this.target_, _, _);
          this.values_.set(_, new _(_)),
            this.notifyPropertyAddition_(_, void 0);
        } finally {
          _();
        }
        return !0;
      }),
      (_.delete_ = function (_, _) {
        if ((_ === void 0 && (_ = !1), _(this.keysAtom_), !_(this.target_, _)))
          return !0;
        if (_(this)) {
          var _ = _(this, {
            object: this.proxy_ || this.target_,
            name: _,
            type: _,
          });
          if (!_) return null;
        }
        try {
          var _;
          _();
          var _ = _(this),
            _ = !1,
            _ = this.values_.get(_),
            _ = void 0;
          if (!_ && (_ || _)) {
            var _;
            _ = (_ = _(this.target_, _)) == null ? void 0 : _.value;
          }
          if (_) {
            if (!Reflect.deleteProperty(this.target_, _)) return !1;
          } else delete this.target_[_];
          if (
            (_ &&
              (this.values_.delete(_), _ instanceof _ && (_ = _.value_), _(_)),
            this.keysAtom_.reportChanged(),
            (_ = this.pendingKeys_) == null ||
              (_ = _.get(_)) == null ||
              _.set(_ in this.target_),
            _ || _)
          ) {
            var _ = {
              type: _,
              observableKind: "object",
              object: this.proxy_ || this.target_,
              debugObjectName: this.name_,
              oldValue: _,
              name: _,
            };
            _ && _(this, _);
          }
        } finally {
          _();
        }
        return !0;
      }),
      (_.observe_ = function (_, _) {
        return _(this, _);
      }),
      (_.intercept_ = function (_) {
        return _(this, _);
      }),
      (_.notifyPropertyAddition_ = function (_, _) {
        var _,
          _ = _(this),
          _ = !1;
        if (_ || _) {
          var _ =
            _ || _
              ? {
                  type: _,
                  observableKind: "object",
                  debugObjectName: this.name_,
                  object: this.proxy_ || this.target_,
                  name: _,
                  newValue: _,
                }
              : null;
          _ && _(this, _);
        }
        (_ = this.pendingKeys_) == null || (_ = _.get(_)) == null || _.set(!0),
          this.keysAtom_.reportChanged();
      }),
      (_.ownKeys_ = function () {
        return this.keysAtom_.reportObserved(), _(this.target_);
      }),
      (_.keys_ = function () {
        return this.keysAtom_.reportObserved(), Object.keys(this.target_);
      }),
      _
    );
  })();
function _(_, _) {
  var _;
  if (_(_, _)) return _;
  var _ = (_ = _?.name) != null ? _ : "ObservableObject",
    _ = new _(_, new Map(), String(_), _(_));
  return _(_, _, _), _;
}
var _ = _("ObservableObjectAdministration", _);
function _(_) {
  return (
    _[_] ||
    (_[_] = {
      get: function () {
        return this[_].getObservablePropValue_(_);
      },
      set: function (_) {
        return this[_].setObservablePropValue_(_, _);
      },
    })
  );
}
function _(_) {
  return _(_) ? _(_[_]) : !1;
}
function _(_, _, _) {
  var _;
  (_ = _.target_[_]) == null || delete _[_];
}
function _(_, _, _) {
  if (0) var _, _, _;
}
var _ = _(0),
  _ = (function () {
    var _ = !1,
      _ = {};
    return (
      Object.defineProperty(_, "0", {
        set: function () {
          _ = !0;
        },
      }),
      (Object.create(_)[0] = 1),
      _ === !1
    );
  })(),
  _ = 0,
  _ = function () {};
function _(_, _) {
  Object.setPrototypeOf
    ? Object.setPrototypeOf(_.prototype, _)
    : _.prototype.__proto__ !== void 0
      ? (_.prototype.__proto__ = _)
      : (_.prototype = _);
}
_(_, Array.prototype);
var _ = (function (_) {
  function _(_, _, _, _) {
    var _;
    return (
      _ === void 0 && (_ = "ObservableArray"),
      _ === void 0 && (_ = !1),
      (_ = _.call(this) || this),
      _(function () {
        var _ = new _(_, _, _, !0);
        (_.proxy_ = _),
          _(_, _, _),
          _ && _.length && _.spliceWithArray(0, 0, _),
          _ && Object.defineProperty(_, "0", _);
      }),
      _
    );
  }
  _(_, _);
  var _ = _.prototype;
  return (
    (_.concat = function () {
      this[_].atom_.reportObserved();
      for (var _ = arguments.length, _ = new Array(_), _ = 0; _ < _; _++)
        _[_] = arguments[_];
      return Array.prototype.concat.apply(
        this.slice(),
        _.map(function (_) {
          return _(_) ? _.slice() : _;
        }),
      );
    }),
    (_[Symbol.iterator] = function () {
      var _ = this,
        _ = 0;
      return _({
        next: function () {
          return _ < _.length
            ? {
                value: _[_++],
                done: !1,
              }
            : {
                done: !0,
                value: void 0,
              };
        },
      });
    }),
    _(_, [
      {
        key: "length",
        get: function () {
          return this[_].getArrayLength_();
        },
        set: function (_) {
          this[_].setArrayLength_(_);
        },
      },
      {
        key: Symbol.toStringTag,
        get: function () {
          return "Array";
        },
      },
    ])
  );
})(_);
Object.entries(_).forEach(function (_) {
  var _ = _[0],
    _ = _[1];
  _ !== "concat" && _(_.prototype, _, _);
});
function _(_) {
  return {
    enumerable: !1,
    configurable: !0,
    get: function () {
      return this[_].get_(_);
    },
    set: function (_) {
      this[_].set_(_, _);
    },
  };
}
function _(_) {
  _(_.prototype, "" + _, _(_));
}
function _(_) {
  if (_ > _) {
    for (var _ = _; _ < _ + 100; _++) _(_);
    _ = _;
  }
}
_(1e3);
function _(_, _, _) {
  return new _(_, _, _);
}
function _(_, _) {
  if (typeof _ == "object" && _ !== null) {
    if (_(_)) return _ !== void 0 && _(23), _[_].atom_;
    if (_(_)) return _.atom_;
    if (_(_)) {
      if (_ === void 0) return _.keysAtom_;
      var _ = _.data_.get(_) || _.hasMap_.get(_);
      return _ || _(25, _, _(_)), _;
    }
    if (_(_)) {
      if (!_) return _(26);
      var _ = _[_].values_.get(_);
      return _ || _(27, _, _(_)), _;
    }
    if (_(_) || _(_) || _(_)) return _;
  } else if (_(_) && _(_[_])) return _[_];
  _(28);
}
function _(_, _) {
  if ((_ || _(29), _ !== void 0)) return _(_(_, _));
  if (_(_) || _(_) || _(_) || _(_) || _(_)) return _;
  if (_[_]) return _[_];
  _(24, _);
}
function _(_, _) {
  var _;
  if (_ !== void 0) _ = _(_, _);
  else {
    if (_(_)) return _.name;
    _(_) || _(_) || _(_) ? (_ = _(_)) : (_ = _(_));
  }
  return _.name_;
}
function _(_) {
  var _ = _(),
    _ = _(!0);
  _();
  try {
    return _();
  } finally {
    _(), _(_), _(_);
  }
}
var _ = _.toString;
function _(_, _, _) {
  return _ === void 0 && (_ = -1), _(_, _, _);
}
function _(_, _, _, _, _) {
  if (_ === _) return _ !== 0 || 1 / _ === 1 / _;
  if (_ == null || _ == null) return !1;
  if (_ !== _) return _ !== _;
  var _ = typeof _;
  if (_ !== "function" && _ !== "object" && typeof _ != "object") return !1;
  var _ = _.call(_);
  if (_ !== _.call(_)) return !1;
  switch (_) {
    case "[object RegExp]":
    case "[object String]":
      return "" + _ == "" + _;
    case "[object Number]":
      return +_ != +_ ? +_ != +_ : +_ == 0 ? 1 / +_ === 1 / _ : +_ == +_;
    case "[object Date]":
    case "[object Boolean]":
      return +_ == +_;
    case "[object Symbol]":
      return (
        typeof Symbol < "u" && Symbol.valueOf.call(_) === Symbol.valueOf.call(_)
      );
    case "[object Map]":
    case "[object Set]":
      _ >= 0 && _++;
      break;
  }
  (_ = _(_)), (_ = _(_));
  var _ = _ === "[object Array]";
  if (!_) {
    if (typeof _ != "object" || typeof _ != "object") return !1;
    var _ = _.constructor,
      _ = _.constructor;
    if (
      _ !== _ &&
      !(_(_) && _ instanceof _ && _(_) && _ instanceof _) &&
      "constructor" in _ &&
      "constructor" in _
    )
      return !1;
  }
  if (_ === 0) return !1;
  _ < 0 && (_ = -1), (_ = _ || []), (_ = _ || []);
  for (var _ = _.length; _--; ) if (_[_] === _) return _[_] === _;
  if ((_.push(_), _.push(_), _)) {
    if (((_ = _.length), _ !== _.length)) return !1;
    for (; _--; ) if (!_(_[_], _[_], _ - 1, _, _)) return !1;
  } else {
    var _ = Object.keys(_),
      _ = _.length;
    if (Object.keys(_).length !== _) return !1;
    for (var _ = 0; _ < _; _++) {
      var _ = _[_];
      if (!(_(_, _) && _(_[_], _[_], _ - 1, _, _))) return !1;
    }
  }
  return _.pop(), _.pop(), !0;
}
function _(_) {
  return _(_)
    ? _.slice()
    : _(_) || _(_) || _(_) || _(_)
      ? Array.from(_.entries())
      : _;
}
var _,
  _ = ((_ = _().Iterator) == null ? void 0 : _.prototype) || {};
function _(_) {
  return (_[Symbol.iterator] = _), Object.assign(Object.create(_), _);
}
function _() {
  return this;
}
["Symbol", "Map", "Set"].forEach(function (_) {
  var _ = _();
  typeof _[_] > "u" &&
    _("MobX requires global '" + _ + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" &&
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
    spy: _,
    extras: {
      getDebugName: _,
    },
    $mobx: _,
  });
var _ = _(_());
var _ = function () {};
function _(_) {
  throw new Error("[mobx-utils] " + _);
}
function _(_, _) {
  _ === void 0 && (_ = "Illegal state"), _ || _(_);
}
var _ = function (_) {
    return (
      _ &&
      _ !== Object.prototype &&
      Object.getOwnPropertyNames(_).concat(_(Object.getPrototypeOf(_)) || [])
    );
  },
  _ = function (_) {
    var _ = _(_),
      _ = _.filter(function (_, _) {
        return _.indexOf(_) === _;
      });
    return _;
  },
  _ = function (_) {
    return _(_).filter(function (_) {
      return _ !== "constructor" && !~_.indexOf("__");
    });
  },
  _ = "pending",
  _ = "fulfilled",
  _ = "rejected";
function _(_) {
  switch (this.state) {
    case _:
      return _.pending && _.pending(this.value);
    case _:
      return _.rejected && _.rejected(this.value);
    case _:
      return _.fulfilled ? _.fulfilled(this.value) : this.value;
  }
}
function _(_, _) {
  if (
    (_(arguments.length <= 2, "fromPromise expects up to two arguments"),
    _(
      typeof _ == "function" ||
        (typeof _ == "object" && _ && typeof _.then == "function"),
      "Please pass a promise or function to fromPromise",
    ),
    _.isPromiseBasedObservable === !0)
  )
    return _;
  typeof _ == "function" && (_ = new Promise(_));
  var _ = _;
  _.then(
    _("observableFromPromise-resolve", function (_) {
      (_.value = _), (_.state = _);
    }),
    _("observableFromPromise-reject", function (_) {
      (_.value = _), (_.state = _);
    }),
  ),
    (_.isPromiseBasedObservable = !0),
    (_.case = _);
  var _ = _ && (_.state === _ || _.state === _) ? _.value : void 0;
  return (
    _(
      _,
      {
        value: _,
        state: _,
      },
      {},
      {
        deep: !1,
      },
    ),
    _
  );
}
(function (_) {
  _.reject = _("fromPromise.reject", function (_) {
    var _ = _(Promise.reject(_));
    return (_.state = _), (_.value = _), _;
  });
  function _(_) {
    _ === void 0 && (_ = void 0);
    var _ = _(Promise.resolve(_));
    return (_.state = _), (_.value = _), _;
  }
  _.resolve = _("fromPromise.resolve", _);
})(_ || (_ = {}));
function _(_, _, _) {
  _ === void 0 && (_ = _), _ === void 0 && (_ = void 0);
  var _ = !1,
    _ = !1,
    _ = _,
    _ = function () {
      _ && ((_ = !1), _());
    },
    _ = _(
      "ResourceBasedObservable",
      function () {
        _(!_ && !_),
          (_ = !0),
          _(function (_) {
            _(!0, function () {
              (_ = _), _.reportChanged();
            });
          });
      },
      _,
    );
  return {
    current: function () {
      _(!_, "subscribingObservable has already been disposed");
      var _ = _.reportObserved();
      return (
        !_ &&
          !_ &&
          console.warn(
            "Called `get` of a subscribingObservable outside a reaction. Current value will be returned but no new subscription has started",
          ),
        _
      );
    },
    dispose: function () {
      (_ = !0), _();
    },
    isAlive: function () {
      return _;
    },
  };
}
var _ = function (_, _, _, _) {
  var _ = arguments.length,
    _ =
      _ < 3 ? _ : _ === null ? (_ = Object.getOwnPropertyDescriptor(_, _)) : _,
    _;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _ = Reflect.decorate(_, _, _, _);
  else
    for (var _ = _.length - 1; _ >= 0; _--)
      (_ = _[_]) && (_ = (_ < 3 ? _(_) : _ > 3 ? _(_, _, _) : _(_, _)) || _);
  return _ > 3 && _ && Object.defineProperty(_, _, _), _;
};
var _ = (function () {
  function _(_, _) {
    var _ = this;
    Object.defineProperty(this, "current", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0,
    }),
      Object.defineProperty(this, "subscription", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      _(this),
      _(function () {
        (_.current = _), (_.subscription = _.subscribe(_));
      });
  }
  return (
    Object.defineProperty(_.prototype, "dispose", {
      enumerable: !1,
      configurable: !0,
      writable: !0,
      value: function () {
        this.subscription && this.subscription.unsubscribe();
      },
    }),
    Object.defineProperty(_.prototype, "next", {
      enumerable: !1,
      configurable: !0,
      writable: !0,
      value: function (_) {
        this.current = _;
      },
    }),
    Object.defineProperty(_.prototype, "complete", {
      enumerable: !1,
      configurable: !0,
      writable: !0,
      value: function () {
        this.dispose();
      },
    }),
    Object.defineProperty(_.prototype, "error", {
      enumerable: !1,
      configurable: !0,
      writable: !0,
      value: function (_) {
        (this.current = _), this.dispose();
      },
    }),
    _([_.ref], _.prototype, "current", void 0),
    _([_.bound], _.prototype, "next", null),
    _([_.bound], _.prototype, "complete", null),
    _([_.bound], _.prototype, "error", null),
    _
  );
})();
var _ = function () {
    return (
      (_ =
        Object.assign ||
        function (_) {
          for (var _, _ = 1, _ = arguments.length; _ < _; _++) {
            _ = arguments[_];
            for (var _ in _)
              Object.prototype.hasOwnProperty.call(_, _) && (_[_] = _[_]);
          }
          return _;
        }),
      _.apply(this, arguments)
    );
  },
  _ = function (_, _, _, _) {
    var _ = arguments.length,
      _ =
        _ < 3
          ? _
          : _ === null
            ? (_ = Object.getOwnPropertyDescriptor(_, _))
            : _,
      _;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      _ = Reflect.decorate(_, _, _, _);
    else
      for (var _ = _.length - 1; _ >= 0; _--)
        (_ = _[_]) && (_ = (_ < 3 ? _(_) : _ > 3 ? _(_, _, _) : _(_, _)) || _);
    return _ > 3 && _ && Object.defineProperty(_, _, _), _;
  },
  _ = [
    "model",
    "reset",
    "submit",
    "isDirty",
    "isPropertyDirty",
    "resetProperty",
  ],
  _ = (function () {
    function _(_) {
      var _ = this;
      Object.defineProperty(this, "model", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: _,
      }),
        Object.defineProperty(this, "localValues", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: _.map({}),
        }),
        Object.defineProperty(this, "localComputedValues", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: _.map({}),
        }),
        Object.defineProperty(this, "isPropertyDirty", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: function (_) {
            return _.localValues.has(_);
          },
        }),
        _(this),
        _(_(_), "createViewModel expects an observable object");
      var _ = _(this);
      _(_).forEach(function (_) {
        var _;
        if (
          !_.includes(_) &&
          !(_ === _ || _ === "__mobxDidRunLazyInitializers")
        ) {
          if (
            (_(
              _.indexOf(_) === -1,
              "The propertyname " +
                _ +
                " is reserved and cannot be used with viewModels",
            ),
            _(_, _))
          ) {
            var _ = _(_, _),
              _ = _.derivation.bind(_),
              _ = (_ = _.setter_) === null || _ === void 0 ? void 0 : _.bind(_);
            _.localComputedValues.set(
              _,
              _(_, {
                set: _,
              }),
            );
          }
          var _ = Object.getOwnPropertyDescriptor(_, _),
            _ = _
              ? {
                  enumerable: _.enumerable,
                }
              : {};
          Object.defineProperty(
            _,
            _,
            _(_({}, _), {
              configurable: !0,
              get: function () {
                return _(_, _)
                  ? _.localComputedValues.get(_).get()
                  : _.isPropertyDirty(_)
                    ? _.localValues.get(_)
                    : _.model[_];
              },
              set: _(function (_) {
                _(_, _)
                  ? _.localComputedValues.get(_).set(_)
                  : _ !== _.model[_]
                    ? _.localValues.set(_, _)
                    : _.localValues.delete(_);
              }),
            }),
          );
        }
      });
    }
    return (
      Object.defineProperty(_.prototype, "isDirty", {
        get: function () {
          return this.localValues.size > 0;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(_.prototype, "changedValues", {
        get: function () {
          return new Map(this.localValues);
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(_.prototype, "submit", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function () {
          var _ = this;
          _(this.localValues).forEach(function (_) {
            var _ = _.localValues.get(_),
              _ = _.model[_];
            _(_)
              ? _.replace(_)
              : _(_)
                ? (_.clear(), _.merge(_))
                : _(_) || (_.model[_] = _);
          }),
            this.localValues.clear();
        },
      }),
      Object.defineProperty(_.prototype, "reset", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function () {
          this.localValues.clear();
        },
      }),
      Object.defineProperty(_.prototype, "resetProperty", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (_) {
          this.localValues.delete(_);
        },
      }),
      _([_], _.prototype, "isDirty", null),
      _([_], _.prototype, "changedValues", null),
      _([_.bound], _.prototype, "submit", null),
      _([_.bound], _.prototype, "reset", null),
      _([_.bound], _.prototype, "resetProperty", null),
      _
    );
  })();
var _ = {};
function _(_) {
  return (
    _ === void 0 && (_ = 1e3),
    _()
      ? (_[_] || (typeof _ == "number" ? (_[_] = _(_)) : (_[_] = _())),
        _[_].current())
      : Date.now()
  );
}
function _(_) {
  var _;
  return _(
    function (_) {
      _(Date.now()),
        (_ = setInterval(function () {
          return _(Date.now());
        }, _));
    },
    function () {
      clearInterval(_);
    },
    Date.now(),
  );
}
function _() {
  var _ = _(
    function (_) {
      _(Date.now());
      function _() {
        window.requestAnimationFrame(function () {
          _(Date.now()), _.isAlive() && _();
        });
      }
      _();
    },
    function () {},
    Date.now(),
  );
  return _;
}
var _ = (function () {
    var _ = function (_, _) {
      return (
        (_ =
          Object.setPrototypeOf ||
          ({
            __proto__: [],
          } instanceof Array &&
            function (_, _) {
              _.__proto__ = _;
            }) ||
          function (_, _) {
            for (var _ in _)
              Object.prototype.hasOwnProperty.call(_, _) && (_[_] = _[_]);
          }),
        _(_, _)
      );
    };
    return function (_, _) {
      _(_, _);
      function _() {
        this.constructor = _;
      }
      _.prototype =
        _ === null ? Object.create(_) : ((_.prototype = _.prototype), new _());
    };
  })(),
  _ = (function (_) {
    _(_, _);
    function _(_, _, _) {
      var _ = _ === void 0 ? {} : _,
        _ = _.name,
        _ = _ === void 0 ? "ogm" + ((Math.random() * 1e3) | 0) : _,
        _ = _.keyToName,
        _ =
          _ === void 0
            ? function (_) {
                return "" + _;
              }
            : _,
        _ = _.call(this) || this;
      Object.defineProperty(_, "_base", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
        Object.defineProperty(_, "_ogmInfoKey", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(_, "_groupBy", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(_, "_keyToName", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(_, "_disposeBaseObserver", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (_._keyToName = _),
        (_._groupBy = _),
        (_._ogmInfoKey = Symbol("ogmInfo" + _)),
        (_._base = _);
      for (var _ = 0; _ < _.length; _++) _._addItem(_[_]);
      return (
        (_._disposeBaseObserver = _(_._base, function (_) {
          if (_.type === "splice")
            _(function () {
              for (var _ = 0, _ = _.removed; _ < _.length; _++) {
                var _ = _[_];
                _._removeItem(_);
              }
              for (var _ = 0, _ = _.added; _ < _.length; _++) {
                var _ = _[_];
                _._addItem(_);
              }
            });
          else if (_.type === "update")
            _(function () {
              _._removeItem(_.oldValue), _._addItem(_.newValue);
            });
          else throw new Error("illegal state");
        })),
        _
      );
    }
    return (
      Object.defineProperty(_.prototype, "clear", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function () {
          throw new Error("not supported");
        },
      }),
      Object.defineProperty(_.prototype, "delete", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (_) {
          throw new Error("not supported");
        },
      }),
      Object.defineProperty(_.prototype, "set", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (_, _) {
          throw new Error("not supported");
        },
      }),
      Object.defineProperty(_.prototype, "dispose", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function () {
          this._disposeBaseObserver();
          for (var _ = 0; _ < this._base.length; _++) {
            var _ = this._base[_],
              _ = _[this._ogmInfoKey];
            _.reaction(), delete _[this._ogmInfoKey];
          }
        },
      }),
      Object.defineProperty(_.prototype, "_getGroupArr", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (_) {
          var _ = _.prototype.get.call(this, _);
          return (
            _ === void 0 &&
              ((_ = _([], {
                name: "GroupArray[" + this._keyToName(_) + "]",
                deep: !1,
              })),
              _.prototype.set.call(this, _, _)),
            _
          );
        },
      }),
      Object.defineProperty(_.prototype, "_removeFromGroupArr", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (_, _) {
          var _ = _.prototype.get.call(this, _);
          _.length === 1
            ? _.prototype.delete.call(this, _)
            : (_ === _.length - 1 ||
                ((_[_] = _[_.length - 1]),
                (_[_][this._ogmInfoKey].groupArrIndex = _)),
              _.length--);
        },
      }),
      Object.defineProperty(_.prototype, "_addItem", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (_) {
          var _ = this,
            _ = this._groupBy(_),
            _ = this._getGroupArr(_),
            _ = {
              groupByValue: _,
              groupArrIndex: _.length,
              reaction: _(
                function () {
                  return _._groupBy(_);
                },
                function (_, _) {
                  var _ = _[_._ogmInfoKey];
                  _._removeFromGroupArr(_.groupByValue, _.groupArrIndex);
                  var _ = _._getGroupArr(_),
                    _ = _.length;
                  _.push(_), (_.groupByValue = _), (_.groupArrIndex = _);
                },
              ),
            };
          Object.defineProperty(_, this._ogmInfoKey, {
            configurable: !0,
            enumerable: !1,
            value: _,
          }),
            _.push(_);
        },
      }),
      Object.defineProperty(_.prototype, "_removeItem", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (_) {
          var _ = _[this._ogmInfoKey];
          this._removeFromGroupArr(_.groupByValue, _.groupArrIndex),
            _.reaction(),
            delete _[this._ogmInfoKey];
        },
      }),
      _
    );
  })(_),
  _ = (function () {
    function _(_, _) {
      Object.defineProperty(this, "base", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: _,
      }),
        Object.defineProperty(this, "args", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: _,
        }),
        Object.defineProperty(this, "root", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "closest", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "closestIdx", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 0,
        }),
        Object.defineProperty(this, "isDisposed", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: !1,
        });
      for (
        var _ = (this.closest = this.root = _), _ = 0;
        _ < this.args.length - 1 && ((_ = _.get(_[_])), _);
        _++
      )
        this.closest = _;
      this.closestIdx = _;
    }
    return (
      Object.defineProperty(_.prototype, "exists", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function () {
          this.assertNotDisposed();
          var _ = this.args.length;
          return this.closestIdx >= _ - 1 && this.closest.has(this.args[_ - 1]);
        },
      }),
      Object.defineProperty(_.prototype, "get", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function () {
          if ((this.assertNotDisposed(), !this.exists()))
            throw new Error("Entry doesn't exist");
          return this.closest.get(this.args[this.args.length - 1]);
        },
      }),
      Object.defineProperty(_.prototype, "set", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (_) {
          this.assertNotDisposed();
          for (
            var _ = this.args.length, _ = this.closest, _ = this.closestIdx;
            _ < _ - 1;
            _++
          ) {
            var _ = new Map();
            _.set(this.args[_], _), (_ = _);
          }
          (this.closestIdx = _ - 1),
            (this.closest = _),
            _.set(this.args[_ - 1], _);
        },
      }),
      Object.defineProperty(_.prototype, "delete", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function () {
          if ((this.assertNotDisposed(), !this.exists()))
            throw new Error("Entry doesn't exist");
          var _ = this.args.length;
          this.closest.delete(this.args[_ - 1]);
          for (var _ = this.root, _ = [_], _ = 0; _ < _ - 1; _++)
            (_ = _.get(this.args[_])), _.push(_);
          for (var _ = _.length - 1; _ > 0; _--)
            _[_].size === 0 && _[_ - 1].delete(this.args[_ - 1]);
          this.isDisposed = !0;
        },
      }),
      Object.defineProperty(_.prototype, "assertNotDisposed", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function () {
          if (this.isDisposed)
            throw new Error("Concurrent modification exception");
        },
      }),
      _
    );
  })(),
  _ = (function () {
    function _() {
      Object.defineProperty(this, "store", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: new Map(),
      }),
        Object.defineProperty(this, "argsLength", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: -1,
        }),
        Object.defineProperty(this, "last", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        });
    }
    return (
      Object.defineProperty(_.prototype, "entry", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (_) {
          if (this.argsLength === -1) this.argsLength = _.length;
          else if (this.argsLength !== _.length)
            throw new Error(
              "DeepMap should be used with functions with a consistent length, expected: " +
                this.argsLength +
                ", got: " +
                _.length,
            );
          return (
            this.last && (this.last.isDisposed = !0),
            (this.last = new _(this.store, _))
          );
        },
      }),
      _
    );
  })();
function _(_, _, _) {
  let _;
  typeof _ == "boolean"
    ? (_ = {
        eSuffix: _ ? 0 : 1,
        bForceSingleUnits: _,
        bHighGranularity: !1,
      })
    : (_ = {
        eSuffix: 1,
        bForceSingleUnits: !1,
        bHighGranularity: !1,
        ..._,
      });
  let _ = "#TimeInterval_";
  _.eSuffix == 1
    ? (_ = "#TimeSince_")
    : _.eSuffix == 2 && (_ = "#TimeRemaining_");
  let _ = (_) => Math.floor(_);
  if (
    (_.bAllowDecimal && (_ = (_) => Math.round(_ * 10) / 10),
    _ >= _.PerYear * 2)
  )
    return _(_ + "XYears", _(_ / _.PerYear));
  if (_ >= _.PerYear)
    return (
      (_ -= _.PerYear),
      _ >= _.PerMonth * 2 && !_.bForceSingleUnits
        ? _(_ + "1YearXMonths", _(_ / _.PerMonth))
        : _(_ + "1Year")
    );
  if (_ >= _.PerMonth * 2) return _(_ + "XMonths", _(_ / _.PerMonth));
  if (_ >= _.PerWeek * 2) return _(_ + "XWeeks", _(_ / _.PerWeek));
  if (_ >= _.PerWeek) return _(_ + "1Week", _(_ / _.PerWeek));
  if (_ >= _.PerDay * 2) return _(_ + "XDays", _(_ / _.PerDay));
  if (_ >= _.PerDay)
    return (
      (_ -= _.PerDay),
      _ >= _.PerHour * 2 && !_.bForceSingleUnits
        ? _(_ + "1DayXHours", _(_ / _.PerHour))
        : _(_ + "1Day")
    );
  if (_ >= _.PerHour * 2) return _(_ + "XHours", _(_ / _.PerHour));
  if (_ >= _.PerHour)
    return (
      (_ -= _.PerHour),
      _ >= _.PerMinute * 2 && !_.bForceSingleUnits
        ? _(_ + "1HourXMinutes", _(_ / _.PerMinute))
        : _(_ + "1Hour")
    );
  if (_ >= _.PerMinute * 2) {
    let _ = Math.floor(_ / _.PerMinute),
      _ = _ % _.PerMinute;
    return !_.bHighGranularity || _ == 0
      ? _(_ + "XMinutes", _(_ / _.PerMinute))
      : _ == 1
        ? _(_ + "XMinutes1Second", _)
        : _(_ + "XMinutesXSeconds", _, _);
  } else if (_ >= _.PerMinute) {
    let _ = _ % _.PerMinute;
    return !_.bHighGranularity || _ == 0
      ? _(_ + "1Minute")
      : _ == 1
        ? _(_ + "1Minute1Second")
        : _(_ + "1MinuteXSeconds", _);
  } else
    return _.bHighGranularity
      ? _ == 1
        ? _(_ + "1Second")
        : _(_ + "XSeconds", _)
      : _(_ + "LessThanAMinute");
}
function _(_, _) {
  let _ = new Date(_ * 1e3),
    _ = {
      year: "numeric",
      month: "short",
      day: "numeric",
      ..._,
    };
  return _.toLocaleDateString(_.GetPreferredLocales(), _);
}
var _ = new Map();
function _(_) {
  let _ = _.get(_);
  if (_ === !0 || _ === !1) return _;
  let _ = new Date();
  _.setHours(15);
  let _ = _.toLocaleTimeString(_, {
      hour: "numeric",
    }),
    _ = _.toLocaleTimeString(_, {
      hour: "numeric",
      hour12: !1,
    });
  return (_ = _ == _), _.set(_, _), _;
}
function _(_, _, _) {
  let _ = new Date(_ * 1e3),
    _ = {
      hour: "numeric",
      minute: "2-digit",
      hourCycle: "h23",
    },
    _ = {
      hour: "numeric",
      minute: "2-digit",
    },
    _ = _.GetPreferredLocales(),
    _ = {
      ...(_?.bForce24HourClock || _(_[0]) ? _ : _),
      ..._,
    };
  return _.toLocaleTimeString(_, _);
}
var _ = new Map();
function _(_, _, _ = !0, _ = !0, _ = !1) {
  let _ = new Date(),
    _ = new Date(_ * 1e3);
  if (_.getFullYear() != _.getFullYear()) return _(_);
  _ && _(new Date().setHours(24, 0, 0, 0) - _.getTime());
  let _ = new Date();
  if ((_.setHours(0, 0, 0, 0), _)) {
    if (_ >= _) {
      if ((_.setDate(_.getDate() + 1), _ < _)) return _("#Time_Today");
      if ((_.setDate(_.getDate() + 1), _ < _)) return _("#Time_Tomorrow");
    } else if ((_.setDate(_.getDate() - 1), _ >= _))
      return _("#Time_Yesterday");
  }
  let _ = {
    month: _ ? "long" : "short",
    day: "numeric",
  };
  _ && (_.weekday = "long");
  let _ = _.setHours(0, 0, 0, 0) + _.month,
    _ = _.get(_);
  return (
    _ ||
    ((_ = _.toLocaleDateString(_.GetPreferredLocales(), _)), _.set(_, _), _)
  );
}
var _ = new Map(),
  _ = new Map();
function _(_) {
  let _ = _.get(_.getFullYear());
  return (
    _ ||
    ((_ = _.toLocaleDateString(_.GetPreferredLocales(), {
      year: "numeric",
    })),
    _.set(_.getFullYear(), _),
    _)
  );
}
function _(_) {
  let _ = _.getMonth() + 12 * _.getFullYear(),
    _ = _.get(_);
  return (
    _ ||
    ((_ = _.toLocaleDateString(_.GetPreferredLocales(), {
      month: "long",
      year: "numeric",
    })),
    _.set(_, _),
    _)
  );
}
function _(_, _) {
  switch (_.getUTCMonth()) {
    case 0:
    case 1:
    case 2:
      return _(
        _ ? "#Time_QuarterOfYear_Expanded_Q1" : "#Time_QuarterOfYear_Q1",
        _.getUTCFullYear(),
      );
    case 3:
    case 4:
    case 5:
      return _(
        _ ? "#Time_QuarterOfYear_Expanded_Q2" : "#Time_QuarterOfYear_Q2",
        _.getUTCFullYear(),
      );
    case 6:
    case 7:
    case 8:
      return _(
        _ ? "#Time_QuarterOfYear_Expanded_Q3" : "#Time_QuarterOfYear_Q3",
        _.getUTCFullYear(),
      );
    case 9:
    case 10:
    case 11:
    default:
      return _(
        _ ? "#Time_QuarterOfYear_Expanded_Q4" : "#Time_QuarterOfYear_Q4",
        _.getUTCFullYear(),
      );
  }
}
var _ = class _ {
  m_mapTokens = new Map();
  m_mapFallbackTokens = new Map();
  m_cbkTokensChanged = new _();
  m_rgLocalesToUse;
  m_bReportIndividualMissingTokens = !0;
  static sm_ErrorReportingStore;
  static InstallErrorReportingStore(_) {
    this.sm_ErrorReportingStore = _;
  }
  static GetLanguageFallback(_) {
    return _ === "sc_schinese" ? "schinese" : "english";
  }
  static GetELanguageFallback(_) {
    return _ === 29 ? 6 : 0;
  }
  static IsELanguageValidInRealm(_, _) {
    let _ = _ === 29 ? 2 : 1;
    return _ === _;
  }
  static GetLanguageListForRealms(_) {
    let _ = new Array();
    for (let _ = 0; _ < 31; _++)
      for (let _ of _)
        if (this.IsELanguageValidInRealm(_, _)) {
          _.push(_);
          break;
        }
    return _;
  }
  InitFromObjects(_, _, _, _, _, _) {
    _ && (this.m_bReportIndividualMissingTokens = !1),
      _ || this.m_mapTokens.clear();
    let _ = {
        ...(_ || {}),
        ..._,
      },
      _ = {
        ...(_ || {}),
        ...(_ || {}),
      };
    this.AddTokens(_, _), this.m_cbkTokensChanged.Dispatch();
  }
  InitDirect(_, _) {
    this.m_mapTokens.clear(),
      this.m_mapFallbackTokens.clear(),
      this.AddTokens(_, _),
      this.m_cbkTokensChanged.Dispatch();
  }
  AddTokens(_, _) {
    Object.keys(_).forEach((_) => {
      this.m_mapTokens.set(_, _[_]);
    }),
      _ &&
        Object.keys(_).forEach((_) => {
          this.m_mapTokens.has(_) || this.m_mapTokens.set(_, _[_]),
            this.m_mapFallbackTokens.set(_, _[_]);
        });
  }
  GetTokensChangedCallbackList() {
    return this.m_cbkTokensChanged;
  }
  GetPreferredLocales() {
    return this.m_rgLocalesToUse
      ? this.m_rgLocalesToUse
      : navigator && navigator.languages
        ? navigator.languages
        : ["en-US"];
  }
  GetELanguageFallbackOrder(_ = null) {
    let _ = new Array();
    return (
      _.push(_(_.LANGUAGE)),
      (_.SUPPORTED_LANGUAGES || []).forEach((_) => {
        _.value != _.LANGUAGE && _.push(_(_.value));
      }),
      _ &&
        _.GetLanguageListForRealms(_).forEach((_) => {
          _.indexOf(_) == -1 && _.push(_);
        }),
      _
    );
  }
  SetPreferredLocales(_) {
    this.m_rgLocalesToUse = _;
  }
  BLooksLikeToken(_) {
    return !!_ && _.length > 0 && _.charAt(0) == "#";
  }
  LocalizeIfToken(_, _) {
    return this.BLooksLikeToken(_) ? this.LocalizeString(_, _) : _;
  }
  LocalizeString(_, _) {
    let _ = this.m_mapTokens.size == 0;
    if (
      (_(!_, `Attempting to localize token '${_}' with no tokens in our map.`),
      !this.BLooksLikeToken(_))
    )
      return;
    let _ = this.m_mapTokens.get(_.substring(1));
    if (_ === void 0) {
      !_ &&
        _.sm_ErrorReportingStore &&
        !_ &&
        this.m_bReportIndividualMissingTokens &&
        _.sm_ErrorReportingStore.ReportError(
          new Error(
            `Unable to find localization token '${_}' for language '${_.LANGUAGE}', ${this.m_mapTokens.size} tokens in map`,
          ),
          {
            bIncludeMessageInIdentifier: !0,
          },
        );
      return;
    }
    return _;
  }
  LocalizeStringFromFallback(_) {
    if (!_ || _.length == 0 || _.charAt(0) != "#") return;
    let _ = this.m_mapFallbackTokens.get(_.substring(1));
    if (_ !== void 0) return _;
  }
  static GetTokenWithFallback(_) {
    if (!_) return "";
    let _ = _(_.LANGUAGE),
      _ = _.find((_) => _.language == _);
    if (_) return _.localized_string;
    let _ = _.GetELanguageFallback(_);
    return _.find((_) => _.language == _)?.localized_string ?? "";
  }
  static BHasTokenLanguage(_, _) {
    return !!_.find((_) => _.language == _);
  }
};
function _(_, ..._) {
  let _ = _.LocalizeString(_);
  return _ === void 0 ? _ : _(_, ..._);
}
function _(_, ..._) {
  let _ = _.LocalizeString(_);
  if (_ === void 0) return _;
  let _ = [],
    _ = /(.*?)%(\d+)\$s/g,
    _ = 0,
    _;
  for (; (_ = _.exec(_)); ) {
    (_ += _[0].length), _.push(_[1]);
    let _ = parseInt(_[2]);
    _ >= 1 && _ <= _.length && _.push(_[_ - 1]);
  }
  return _.push(_.substr(_)), _.createElement(_.Fragment, null, ..._);
}
function _(_, _, ..._) {
  return _ === 1 || _ === "1" ? _(_, _, ..._) : _(_ + "_Plural", _, ..._);
}
function _(_, ..._) {
  return (
    _.length == 0 ||
      (_ = _.replace(/%(?:(\d+)\$)?s/g, function (_, _) {
        if (_ <= _.length && _ >= 1) {
          let _ = _[_ - 1];
          return String(_ ?? "");
        }
        return _;
      })),
    _
  );
}
var _ = {
    english: "en",
    german: "de",
    french: "fr",
    italian: "it",
    korean: "ko",
    latam: "es-419",
    spanish: "es",
    schinese: "zh-cn",
    tchinese: "zh-tw",
    russian: "ru",
    thai: "th",
    japanese: "ja",
    brazilian: "pt-br",
    portuguese: "pt",
    polish: "pl",
    danish: "da",
    dutch: "nl",
    finnish: "fi",
    norwegian: "no",
    swedish: "sv",
    hungarian: "hu",
    czech: "cs",
    romanian: "ro",
    turkish: "tr",
    arabic: "ar",
    bulgarian: "bg",
    greek: "el",
    ukrainian: "uk",
    vietnamese: "vi",
    indonesian: "id",
    sc_schinese: "zh-cn",
    koreana: "ko",
  },
  _ = {
    "en-US": 0,
    "de-DE": 1,
    "fr-FR": 2,
    "it-IT": 3,
    "ko-KR": 4,
    "es-ES": 5,
    "zh-CH": 6,
    "zh-CN": 7,
    "ru-RU": 8,
    "th-TH": 9,
    "ja-JP": 10,
    "pt-PT": 11,
    "pl-PL": 12,
    "da-DK": 13,
    "nl-NL": 14,
    "fi-FI": 15,
    "nb-NO": 16,
    "sv-SE": 17,
    "hu-HU": 18,
    "cs-CZ": 19,
    "ro-RO": 20,
    "tr-TR": 21,
    "pt-BR": 22,
    "bg-BG": 23,
    "el-GR": 24,
    "ar-SA": 25,
    "uk-UA": 26,
    "es-419": 27,
    "vi-VN": 28,
    "id-ID": 30,
  };
function _() {
  return _[_.LANGUAGE] || null;
}
function _(_) {
  let _,
    _ = new Promise((_) => (_ = _)),
    _ = Array(_.length),
    _ = _.length;
  return (
    _.forEach((_, _) => {
      Promise.resolve(_)
        .then((_) => {
          (_[_] = _), _--, _ == 0 && _(_);
        })
        .catch((_) => {
          console.error("Failed to load localization file: " + _),
            (_[_] = {}),
            _--,
            _ == 0 && _(_);
        });
    }),
    _
  );
}
var _ = new _();
window.LocalizationManager = _;
export {
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
};
