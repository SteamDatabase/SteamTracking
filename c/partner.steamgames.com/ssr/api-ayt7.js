function _(_) {
  var _ = [...arguments].slice(1);
  throw Error(
    typeof _ == `number`
      ? `[MobX] minified error nr: ` +
          _ +
          (_.length ? ` ` + _.map(String).join(`,`) : ``) +
          `. Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts`
      : `[MobX] ` + _,
  );
}
var _ = {};
function _() {
  return typeof globalThis < `u`
    ? globalThis
    : typeof window < `u`
      ? window
      : typeof global < `u`
        ? global
        : typeof self < `u`
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
var _ = typeof Proxy < `u`,
  _ = Object.toString();
function _() {
  _ || _(`Proxy not available`);
}
function _(_) {
  var _ = !1;
  return function () {
    if (!_) return (_ = !0), _.apply(this, arguments);
  };
}
var _ = function () {};
function _(_) {
  return typeof _ == `function`;
}
function _(_) {
  switch (typeof _) {
    case `string`:
    case `symbol`:
    case `number`:
      return !0;
  }
  return !1;
}
function _(_) {
  return typeof _ == `object` && !!_;
}
function _(_) {
  if (!_(_)) return !1;
  var _ = Object.getPrototypeOf(_);
  if (_ == null) return !0;
  var _ = Object.hasOwnProperty.call(_, `constructor`) && _.constructor;
  return typeof _ == `function` && _.toString() === _;
}
function _(_) {
  var _ = _?.constructor;
  return _
    ? _.name === `GeneratorFunction` || _.displayName === `GeneratorFunction`
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
  var _ = `isMobX` + _;
  return (
    (_.prototype[_] = !0),
    function (_) {
      return _(_) && _[_] === !0;
    }
  );
}
function _(_) {
  return _ != null && Object.prototype.toString.call(_) === `[object Map]`;
}
function _(_) {
  var _ = Object.getPrototypeOf(_),
    _ = Object.getPrototypeOf(_);
  return Object.getPrototypeOf(_) === null;
}
function _(_) {
  return _ != null && Object.prototype.toString.call(_) === `[object Set]`;
}
var _ = Object.getOwnPropertySymbols !== void 0;
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
  typeof Reflect < `u` && Reflect.ownKeys
    ? Reflect.ownKeys
    : _
      ? function (_) {
          return Object.getOwnPropertyNames(_).concat(
            Object.getOwnPropertySymbols(_),
          );
        }
      : Object.getOwnPropertyNames;
function _(_) {
  return _ === null ? null : typeof _ == `object` ? `` + _ : _;
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
      `value` in _ && (_.writable = !0),
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
  var _ = (typeof Symbol < `u` && _[Symbol.iterator]) || _[`@@iterator`];
  if (_) return (_ = _.call(_)).next.bind(_);
  if (
    Array.isArray(_) ||
    (_ = _(_)) ||
    (_ && _ && typeof _.length == `number`)
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
  throw TypeError(`Invalid attempt to iterate non-iterable instance.
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
  if (typeof _ != `object` || !_) return _;
  var _ = _[Symbol.toPrimitive];
  if (_ !== void 0) {
    var _ = _.call(_, _ || `default`);
    if (typeof _ != `object`) return _;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (_ === `string` ? String : Number)(_);
}
function _(_) {
  var _ = _(_, `string`);
  return typeof _ == `symbol` ? _ : _ + ``;
}
function _(_, _) {
  if (_) {
    if (typeof _ == `string`) return _(_, _);
    var _ = {}.toString.call(_).slice(8, -1);
    return (
      _ === `Object` && _.constructor && (_ = _.constructor.name),
      _ === `Map` || _ === `Set`
        ? Array.from(_)
        : _ === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_)
          ? _(_, _)
          : void 0
    );
  }
}
var _ = Symbol(`mobx-stored-annotations`);
function _(_) {
  function _(_, _) {
    if (_(_)) return _.decorate_20223_(_, _);
    _(_, _, _);
  }
  return Object.assign(_, _);
}
function _(_, _, _) {
  _(_, _) || _(_, _, _({}, _[_])), _(_) || (_[_][_] = _);
}
function _(_) {
  return _(_, _) || _(_, _, _({}, _[_])), _[_];
}
function _(_) {
  return typeof _ == `object` && typeof _.kind == `string`;
}
var _ = Symbol(`mobx administration`),
  _ = (function () {
    function _(_) {
      _ === void 0 && (_ = `Atom`),
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
          key: `isBeingObserved`,
          get: function () {
            return _(this.flags_, _.isBeingObservedMask_);
          },
          set: function (_) {
            this.flags_ = _(this.flags_, _.isBeingObservedMask_, _);
          },
        },
        {
          key: `isPendingUnobservation`,
          get: function () {
            return _(this.flags_, _.isPendingUnobservationMask_);
          },
          set: function (_) {
            this.flags_ = _(this.flags_, _.isPendingUnobservationMask_, _);
          },
        },
        {
          key: `diffValue`,
          get: function () {
            return +!!_(this.flags_, _.diffValueMask_);
          },
          set: function (_) {
            this.flags_ = _(this.flags_, _.diffValueMask_, _ === 1);
          },
        },
      ])
    );
  })();
(_.isBeingObservedMask_ = 1),
  (_.isPendingUnobservationMask_ = 2),
  (_.diffValueMask_ = 4);
var _ = _(`Atom`, _);
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
      ? _ !== 0 || 1 / _ == 1 / _
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
            : typeof _ == `function` && !_(_) && !_(_)
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
var _ = `override`;
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
  return (_ = this.options_) != null && _.bound
    ? this.extend_(_, _, _, !1) === null
      ? 0
      : 1
    : _ === _.target_
      ? this.extend_(_, _, _, !1) === null
        ? 0
        : 2
      : _(_.value)
        ? 1
        : (_(_, _, _(_, this, _, _, !1)), 2);
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
      return _(
        _.options_?.name ?? _.toString(),
        _,
        _.options_?.autoAction ?? !1,
      );
    };
  if (_ == `field`)
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
  if (_ == `method`) {
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
    `Cannot apply '` +
      _.annotationType_ +
      `' to '` +
      String(_) +
      `' (kind: ` +
      _ +
      `):` +
      (`
'` +
        _.annotationType_ +
        `' can only be used on properties with a function value.`),
  );
}
function _(_, _, _, _) {
  _.annotationType_, _.value;
}
function _(_, _, _, _, _) {
  var _, _;
  _ === void 0 && (_ = _.safeDescriptors), _(_, _, _, _);
  var _ = _.value;
  return (
    (_ = _.options_) != null && _.bound && (_ = _.bind(_.proxy_ ?? _.target_)),
    {
      value: _(
        _.options_?.name ?? _.toString(),
        _,
        _.options_?.autoAction ?? !1,
        (_ = _.options_) != null && _.bound ? (_.proxy_ ?? _.target_) : void 0,
      ),
      configurable: !_ || _.isPlainObject_,
      enumerable: !1,
      writable: !_,
    }
  );
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
  return _ === _.target_
    ? this.extend_(_, _, _, !1) === null
      ? 0
      : 2
    : (_ = this.options_) != null &&
        _.bound &&
        (!_(_.target_, _) || !_(_.target_[_])) &&
        this.extend_(_, _, _, !1) === null
      ? 0
      : _(_.value)
        ? 1
        : (_(_, _, _(_, this, _, _, !1, !1)), 2);
}
function _(_, _, _, _) {
  var _ = _(_, this, _, _, this.options_?.bound);
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
  _.annotationType_, _.value;
}
function _(_, _, _, _, _, _) {
  _ === void 0 && (_ = _.safeDescriptors), _(_, _, _, _);
  var _ = _.value;
  return (
    _(_) || (_ = _(_)),
    _ && ((_ = _.bind(_.proxy_ ?? _.target_)), (_.isMobXFlow = !0)),
    {
      value: _,
      configurable: !_ || _.isPlainObject_,
      enumerable: !1,
      writable: !_,
    }
  );
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
      (_.name ||= `ObservableObject.` + _.toString()),
        _.values_.set(_, new _(_));
    }),
    function () {
      return this[_].getObservablePropValue_(_);
    }
  );
}
function _(_, _, _, _) {
  _.annotationType_, _.get;
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
    _.defineObservableProperty_(_, _.value, this.options_?.enhancer ?? _, _)
  );
}
function _(_, _) {
  var _ = this,
    _ = _.kind,
    _ = _.name,
    _ = new WeakSet();
  function _(_, _) {
    var _ = _(_)[_],
      _ = new _(
        _,
        _.options_?.enhancer ?? _,
        `ObservableObject.` + _.toString(),
        !1,
      );
    _.values_.set(_, _), _.add(_);
  }
  if (_ == `accessor`)
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
  _.annotationType_;
}
var _ = `true`,
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
  var _;
  if (_.get) return _.make_(_, _, _, _);
  if (_.set) {
    var _ = _(_.set) ? _.set : _(_.toString(), _.set);
    return _ === _.target_
      ? _.defineProperty_(_, {
          configurable: !_.safeDescriptors || _.isPlainObject_,
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
  if (_ !== _.target_ && typeof _.value == `function`) {
    var _;
    if (_(_.value)) {
      var _;
      return ((_ = this.options_) != null && _.autoBind ? _.bound : _).make_(
        _,
        _,
        _,
        _,
      );
    }
    return ((_ = this.options_) != null && _.autoBind ? _.bound : _).make_(
      _,
      _,
      _,
      _,
    );
  }
  var _ = this.options_?.deep === !1 ? _.ref : _;
  return (
    typeof _.value == `function` &&
      (_ = this.options_) != null &&
      _.autoBind &&
      (_.value = _.value.bind(_.proxy_ ?? _.target_)),
    _.make_(_, _, _, _)
  );
}
function _(_, _, _, _) {
  var _;
  return _.get
    ? _.extend_(_, _, _, _)
    : _.set
      ? _.defineProperty_(
          _,
          {
            configurable: !_.safeDescriptors || _.isPlainObject_,
            set: _(_.toString(), _.set),
          },
          _,
        )
      : (typeof _.value == `function` &&
          (_ = this.options_) != null &&
          _.autoBind &&
          (_.value = _.value.bind(_.proxy_ ?? _.target_)),
        (this.options_?.deep === !1 ? _.ref : _).extend_(_, _, _, _));
}
function _(_, _) {
  _(`'` + this.annotationType_ + `' cannot be used as a decorator`);
}
var _ = `observable`,
  _ = `observable.ref`,
  _ = `observable.shallow`,
  _ = `observable.struct`,
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
  return _ ? (_.defaultDecorator ?? _(_)) : void 0;
}
function _(_) {
  return _ ? (_.options_?.enhancer ?? _) : _;
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
            : typeof _ == `object` && _
              ? _
              : _.box(_, _);
}
_(_, _);
var _ = _(_, {
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
  }),
  _ = `computed`,
  _ = `computed.struct`,
  _ = _(_),
  _ = _(_, {
    equals: _.structural,
  }),
  _ = function (_, _) {
    if (_(_)) return _.decorate_20223_(_, _);
    if (_(_)) return _(_, _, _);
    if (_(_)) return _(_(_, _));
    var _ = _(_) ? _ : {};
    return (_.get = _), (_.name ||= _.name || ``), new _(_);
  };
Object.assign(_, _), (_.struct = _(_));
var _ = 0,
  _ = 1,
  _ = _(function () {}, `name`)?.configurable ?? !1,
  _ = {
    value: `action`,
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
    _ && ((_.value = _), _(_, `name`, _)),
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
    _ = 0,
    _ = _.trackingDerivation,
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
      return (
        _ === void 0 && (_ = `ObservableValue`),
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
        _
      );
    }
    _(_, _);
    var _ = _.prototype;
    return (
      (_.dehanceValue = function (_) {
        return this.dehancer === void 0 ? _ : this.dehancer(_);
      }),
      (_.set = function (_) {
        this.value_,
          (_ = this.prepareNewValue_(_)),
          _ !== _.UNCHANGED && this.setNewValue_(_);
      }),
      (_.prepareNewValue_ = function (_) {
        if (_(this)) {
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
              observableKind: `value`,
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
        return this.name_ + `[` + this.value_ + `]`;
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
  _ = _(`ObservableValue`, _),
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
        (this.name_ = _.name || `ComputedValue`),
        _.set && (this.setter_ = _(`ComputedValue-setter`, _.set)),
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
              observableKind: `computed`,
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
        return this.name_ + `[` + this.derivation.toString() + `]`;
      }),
      (_.valueOf = function () {
        return _(this.get());
      }),
      (_[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      _(_, [
        {
          key: `isComputing`,
          get: function () {
            return _(this.flags_, _.isComputingMask_);
          },
          set: function (_) {
            this.flags_ = _(this.flags_, _.isComputingMask_, _);
          },
        },
        {
          key: `isRunningSetter`,
          get: function () {
            return _(this.flags_, _.isRunningSetterMask_);
          },
          set: function (_) {
            this.flags_ = _(this.flags_, _.isRunningSetterMask_, _);
          },
        },
        {
          key: `isBeingObserved`,
          get: function () {
            return _(this.flags_, _.isBeingObservedMask_);
          },
          set: function (_) {
            this.flags_ = _(this.flags_, _.isBeingObservedMask_, _);
          },
        },
        {
          key: `isPendingUnobservation`,
          get: function () {
            return _(this.flags_, _.isPendingUnobservationMask_);
          },
          set: function (_) {
            this.flags_ = _(this.flags_, _.isPendingUnobservationMask_, _);
          },
        },
        {
          key: `diffValue`,
          get: function () {
            return +!!_(this.flags_, _.diffValueMask_);
          },
          set: function (_) {
            this.flags_ = _(this.flags_, _.diffValueMask_, _ === 1);
          },
        },
      ])
    );
  })();
(_.isComputingMask_ = 1),
  (_.isRunningSetterMask_ = 2),
  (_.isBeingObservedMask_ = 4),
  (_.isPendingUnobservationMask_ = 8),
  (_.diffValueMask_ = 16);
var _ = _(`ComputedValue`, _),
  _;
(function (_) {
  (_[(_.NOT_TRACKING_ = -1)] = `NOT_TRACKING_`),
    (_[(_.UP_TO_DATE_ = 0)] = `UP_TO_DATE_`),
    (_[(_.POSSIBLY_STALE_ = 1)] = `POSSIBLY_STALE_`),
    (_[(_.STALE_ = 2)] = `STALE_`);
})((_ ||= {}));
var _;
(function (_) {
  (_[(_.NONE = 0)] = `NONE`),
    (_[(_.LOG = 1)] = `LOG`),
    (_[(_.BREAK = 2)] = `BREAK`);
})((_ ||= {}));
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
    case _.POSSIBLY_STALE_:
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
function _(_, _, _) {
  var _ = _(!0);
  _(_),
    (_.newObserving_ = Array(_.runId_ === 0 ? 100 : _.observing_.length)),
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
  return _ === null
    ? (_.observers_.size === 0 && _.inBatch > 0 && _(_), !1)
    : (_.runId_ !== _.lastAccessedBy_ &&
        ((_.lastAccessedBy_ = _.runId_),
        (_.newObserving_[_.unboundDepsCount_++] = _),
        !_.isBeingObserved &&
          _.trackingContext &&
          ((_.isBeingObserved = !0), _.onBO())),
      _.isBeingObserved);
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
    _ === void 0 && (_ = `Reaction`),
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
        _(), (this.isRunning = !0);
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
      var _ = `[mobx] uncaught error in '` + this + `'`;
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
              _.removeEventListener(`abort`, _);
        };
      return (
        _ == null ||
          _.addEventListener == null ||
          _.addEventListener(`abort`, _),
        (_[_] = this),
        `dispose` in Symbol &&
          typeof Symbol.dispose == `symbol` &&
          (_[Symbol.dispose] = _),
        _
      );
    }),
    (_.toString = function () {
      return `Reaction[` + this.name_ + `]`;
    }),
    (_.trace = function (_) {
      _ === void 0 && (_ = !1);
    }),
    _(_, [
      {
        key: `isDisposed`,
        get: function () {
          return _(this.flags_, _.isDisposedMask_);
        },
        set: function (_) {
          this.flags_ = _(this.flags_, _.isDisposedMask_, _);
        },
      },
      {
        key: `isScheduled`,
        get: function () {
          return _(this.flags_, _.isScheduledMask_);
        },
        set: function (_) {
          this.flags_ = _(this.flags_, _.isScheduledMask_, _);
        },
      },
      {
        key: `isTrackPending`,
        get: function () {
          return _(this.flags_, _.isTrackPendingMask_);
        },
        set: function (_) {
          this.flags_ = _(this.flags_, _.isTrackPendingMask_, _);
        },
      },
      {
        key: `isRunning`,
        get: function () {
          return _(this.flags_, _.isRunningMask_);
        },
        set: function (_) {
          this.flags_ = _(this.flags_, _.isRunningMask_, _);
        },
      },
      {
        key: `diffValue`,
        get: function () {
          return +!!_(this.flags_, _.diffValueMask_);
        },
        set: function (_) {
          this.flags_ = _(this.flags_, _.diffValueMask_, _ === 1);
        },
      },
    ])
  );
})();
(_.isDisposedMask_ = 1),
  (_.isScheduledMask_ = 2),
  (_.isTrackPendingMask_ = 4),
  (_.isRunningMask_ = 8),
  (_.diffValueMask_ = 16);
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
      (console.error(`[mobx] cycle in reaction: ` + _[0]), _.splice(0));
    for (var _ = _.splice(0), _ = 0, _ = _.length; _ < _; _++)
      _[_].runReaction_();
  }
  _.isRunningReactions = !1;
}
var _ = _(`Reaction`, _);
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
    console.warn(`[mobx.spy] Is a no-op in production builds`), function () {}
  );
}
var _ = `action`,
  _ = `action.bound`,
  _ = `autoAction`,
  _ = `autoAction.bound`,
  _ = `<unnamed action>`,
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
  return function (_, _) {
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
}
var _ = _(!1);
Object.assign(_, _);
var _ = _(!0);
Object.assign(_, _), (_.bound = _(_)), (_.bound = _(_));
function _(_) {
  return _(_) && _.isMobxAction === !0;
}
function _(_, _) {
  var _;
  _ === void 0 && (_ = _);
  var _ = _?.name ?? `Autorun`,
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
    _.getDisposer_(_?.signal)
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
var _ = `onBO`,
  _ = `onBUO`;
function _(_, _, _) {
  return _(_, _, _, _);
}
function _(_, _, _) {
  return _(_, _, _, _);
}
function _(_, _, _, _) {
  var _ = typeof _ == `function` ? _(_, _) : _(_),
    _ = _(_) ? _ : _,
    _ = _ + `L`;
  return (
    _[_] ? _[_].add(_) : (_[_] = new Set([_])),
    function () {
      var _ = _[_];
      _ && (_.delete(_), _.size === 0 && delete _[_]);
    }
  );
}
var _ = `never`,
  _ = `always`,
  _ = `observed`;
function _(_) {
  _.isolateGlobalState === !0 && _();
  var _ = _.useProxies,
    _ = _.enforceActions;
  if (
    (_ !== void 0 &&
      (_.useProxies = _ === _ || (_ !== _ && typeof Proxy < `u`)),
    _ === `ifavailable` && (_.verifyProxies = !0),
    _ !== void 0)
  ) {
    var _ = _ === _ ? _ : _ === _;
    (_.enforceActions = _), (_.allowStateChanges = !(_ === !0 || _ === _));
  }
  [
    `computedRequiresReaction`,
    `reactionRequiresObservable`,
    `observableRequiresReaction`,
    `disableErrorBoundaries`,
    `safeDescriptors`,
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
  this.message = `FLOW_CANCELLED`;
}
_.prototype = Object.create(Error.prototype);
var _ = _(`flow`),
  _ = _(`flow.bound`, {
    bound: !0,
  }),
  _ = Object.assign(function (_, _) {
    if (_(_)) return _.decorate_20223_(_, _);
    if (_(_)) return _(_, _, _);
    var _ = _,
      _ = _.name || `<unnamed flow>`,
      _ = function () {
        var _ = this,
          _ = arguments,
          _ = ++_,
          _ = _(_ + ` - runid: ` + _ + ` - init`, _).apply(_, _),
          _,
          _ = void 0,
          _ = new Promise(function (_, _) {
            var _ = 0;
            _ = _;
            function _(_) {
              _ = void 0;
              var _;
              try {
                _ = _(_ + ` - runid: ` + _ + ` - yield ` + _++, _.next).call(
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
                _ = _(_ + ` - runid: ` + _ + ` - yield ` + _++, _.throw).call(
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
          (_.cancel = _(_ + ` - runid: ` + _ + ` - cancel`, function () {
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
  return _
    ? _ === void 0
      ? _(_) || !!_[_] || _(_) || _(_) || _(_)
      : _(_)
        ? _[_].values_.has(_)
        : !1
    : !1;
}
function _(_) {
  return _(_);
}
function _(_) {
  if (_(_)) return _[_].ownKeys_();
  _(38);
}
function _(_, _, _) {
  return _.set(_, _), _;
}
function _(_, _) {
  if (typeof _ != `object` || !_ || _ instanceof Date || !_(_)) return _;
  if (_(_) || _(_)) return _(_.get(), _);
  if (_.has(_)) return _.get(_);
  if (_(_)) {
    var _ = _(_, _, Array(_.length));
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
function _(_, _) {
  _ === void 0 && (_ = void 0), _();
  try {
    return _.apply(_);
  } finally {
    _();
  }
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
    return _(_) ? (_(_).set_(_, _, !0) ?? !0) : !1;
  },
  deleteProperty: function (_, _) {
    return _(_) ? (_(_).delete_(_, !0) ?? !0) : !1;
  },
  defineProperty: function (_, _, _) {
    return _(_).defineProperty_(_, _) ?? !0;
  },
  ownKeys: function (_) {
    return _(_).ownKeys_();
  },
  preventExtensions: function (_) {
    _(13);
  },
};
function _(_, _) {
  var _;
  return _(), (_ = _(_, _)), (_ = _[_]).proxy_ ?? (_.proxy_ = new Proxy(_, _));
}
function _(_) {
  return _.interceptors_ !== void 0 && _.interceptors_.length > 0;
}
function _(_, _) {
  var _ = (_.interceptors_ ||= []);
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
      _ < _ && ((_ = _[_](_)), _ && !_.type && _(14), _);
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
  var _ = (_.changeListeners_ ||= []);
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
      var _ = _(_, _)[_];
      (_ ??= _(_)),
        _(_).forEach(function (_) {
          return _.make_(_, _[_]);
        });
    }),
    _
  );
}
var _ = `splice`,
  _ = `update`,
  _ = 1e4,
  _ = {
    get: function (_, _) {
      var _ = _[_];
      return _ === _
        ? _
        : _ === `length`
          ? _.getArrayLength_()
          : typeof _ == `string` && !isNaN(_)
            ? _.get_(parseInt(_))
            : _(_, _)
              ? _[_]
              : _[_];
    },
    set: function (_, _, _) {
      var _ = _[_];
      return (
        _ === `length` && _.setArrayLength_(_),
        typeof _ == `symbol` || isNaN(_) ? (_[_] = _) : _.set_(parseInt(_), _),
        !0
      );
    },
    preventExtensions: function () {
      _(15);
    },
  },
  _ = (function () {
    function _(_, _, _, _) {
      _ === void 0 && (_ = `ObservableArray`),
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
          return _(_, _, `ObservableArray[..]`);
        });
    }
    var _ = _.prototype;
    return (
      (_.dehanceValue_ = function (_) {
        return this.dehancer === void 0 ? _ : this.dehancer(_);
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
              observableKind: `array`,
              object: this.proxy_,
              debugObjectName: this.atom_.name_,
              type: `splice`,
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
        (typeof _ != `number` || isNaN(_) || _ < 0) && _(`Out of range: ` + _);
        var _ = this.values_.length;
        if (_ !== _)
          if (_ > _) {
            for (var _ = Array(_ - _), _ = 0; _ < _ - _; _++) _[_] = void 0;
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
        this.atom_;
        var _ = this.values_.length;
        if (
          (_ === void 0
            ? (_ = 0)
            : _ > _
              ? (_ = _)
              : _ < 0 && (_ = Math.max(0, _ + _)),
          (_ =
            arguments.length === 1
              ? _ - _
              : _ == null
                ? 0
                : Math.max(0, Math.min(_, _ - _))),
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
                  observableKind: `array`,
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
                  observableKind: `array`,
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
          console.warn(`[mobx] Out of bounds read: ` + _);
          return;
        }
        return this.atom_.reportObserved(), this.dehanceValue_(this.values_[_]);
      }),
      (_.set_ = function (_, _) {
        var _ = this.values_;
        if (
          (this.legacyMode_ && _ > _.length && _(17, _, _.length), _ < _.length)
        ) {
          this.atom_;
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
          (_ = this.enhancer_(_, _)),
            _ !== _ && ((_[_] = _), this.notifyArrayChildUpdate_(_, _, _));
        } else {
          for (var _ = Array(_ + 1 - _.length), _ = 0; _ < _.length - 1; _++)
            _[_] = void 0;
          (_[_.length - 1] = _), this.spliceWithArray_(_.length, 0, _);
        }
      }),
      _
    );
  })();
function _(_, _, _, _) {
  return (
    _ === void 0 && (_ = `ObservableArray`),
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
    var _ = [...arguments].slice(2),
      _ = this[_];
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
    var _ = this[_],
      _ = [...arguments];
    return _.spliceWithArray_(_.values_.length, 0, _), _.values_.length;
  },
  pop: function () {
    return this.splice(Math.max(this[_].values_.length - 1, 0), 1)[0];
  },
  shift: function () {
    return this.splice(0, 1)[0];
  },
  unshift: function () {
    var _ = this[_],
      _ = [...arguments];
    return _.spliceWithArray_(0, 0, _), _.values_.length;
  },
  reverse: function () {
    return (
      _.trackingDerivation && _(37, `reverse`),
      this.replace(this.slice().reverse()),
      this
    );
  },
  sort: function () {
    _.trackingDerivation && _(37, `sort`);
    var _ = this.slice();
    return _.sort.apply(_, arguments), this.replace(_), this;
  },
  remove: function (_) {
    var _ = this[_],
      _ = _.dehanceValues_(_.values_).indexOf(_);
    return _ > -1 ? (this.splice(_, 1), !0) : !1;
  },
};
_(`at`, _),
  _(`concat`, _),
  _(`flat`, _),
  _(`includes`, _),
  _(`indexOf`, _),
  _(`join`, _),
  _(`lastIndexOf`, _),
  _(`slice`, _),
  _(`toString`, _),
  _(`toLocaleString`, _),
  _(`toSorted`, _),
  _(`toSpliced`, _),
  _(`with`, _),
  _(`every`, _),
  _(`filter`, _),
  _(`find`, _),
  _(`findIndex`, _),
  _(`findLast`, _),
  _(`findLastIndex`, _),
  _(`flatMap`, _),
  _(`forEach`, _),
  _(`map`, _),
  _(`some`, _),
  _(`toReversed`, _),
  _(`reduce`, _),
  _(`reduceRight`, _);
function _(_, _) {
  typeof Array.prototype[_] == `function` && (_[_] = _(_));
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
    return (
      _.atom_.reportObserved(),
      _.dehanceValues_(_.values_)[_](function (_, _) {
        return _.call(_, _, _, _);
      })
    );
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
var _ = _(`ObservableArrayAdministration`, _);
function _(_) {
  return _(_) && _(_[_]);
}
var _ = {},
  _ = `add`,
  _ = `delete`,
  _ = (function () {
    function _(_, _, _) {
      var _ = this;
      _ === void 0 && (_ = _),
        _ === void 0 && (_ = `ObservableMap`),
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
          (_.keysAtom_ = _(`ObservableMap.keys()`)),
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
          var _ = (_ = new _(this.has_(_), _, `ObservableMap.key?`, !1));
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
        if (
          (this.keysAtom_,
          _(this) &&
            !_(this, {
              type: _,
              object: this,
              name: _,
            }))
        )
          return !1;
        if (this.has_(_)) {
          var _ = _(),
            _ = _(this),
            _ =
              _ || _
                ? {
                    observableKind: `map`,
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
                (_ = _.hasMap_.get(_)) == null || _.setNewValue_(!1),
                _.data_.get(_).setNewValue_(void 0),
                _.data_.delete(_);
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
                    observableKind: `map`,
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
        this.keysAtom_,
          _(function () {
            var _,
              _ = new _(_, _.enhancer_, `ObservableMap.key`, !1);
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
                  observableKind: `map`,
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
        return this.dehancer === void 0 ? _ : this.dehancer(_);
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
              if (!_.has(_))
                if (_.delete(_)) _ = !0;
                else {
                  var _ = _.data_.get(_);
                  _.set(_, _);
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
        return `[object ObservableMap]`;
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
          key: `size`,
          get: function () {
            return this.keysAtom_.reportObserved(), this.data_.size;
          },
        },
        {
          key: Symbol.toStringTag,
          get: function () {
            return `Map`;
          },
        },
      ])
    );
  })(),
  _ = _(`ObservableMap`, _);
function _(_) {
  return (_[Symbol.toStringTag] = `MapIterator`), _(_);
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
        _ === void 0 && (_ = `ObservableSet`),
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
        return this.dehancer === void 0 ? _ : this.dehancer(_);
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
        if ((this.atom_, _(this))) {
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
          var _ = _(this),
            _ = _
              ? {
                  observableKind: `set`,
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
        if (
          _(this) &&
          !_(this, {
            type: _,
            object: this,
            oldValue: _,
          })
        )
          return !1;
        if (this.has(_)) {
          var _ = _(this),
            _ = _
              ? {
                  observableKind: `set`,
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
        return _(_) && !_(_)
          ? _.intersection(this)
          : new Set(this).intersection(_);
      }),
      (_.union = function (_) {
        return _(_) && !_(_) ? _.union(this) : new Set(this).union(_);
      }),
      (_.difference = function (_) {
        return new Set(this).difference(_);
      }),
      (_.symmetricDifference = function (_) {
        return _(_) && !_(_)
          ? _.symmetricDifference(this)
          : new Set(this).symmetricDifference(_);
      }),
      (_.isSubsetOf = function (_) {
        return new Set(this).isSubsetOf(_);
      }),
      (_.isSupersetOf = function (_) {
        return new Set(this).isSupersetOf(_);
      }),
      (_.isDisjointFrom = function (_) {
        return _(_) && !_(_)
          ? _.isDisjointFrom(this)
          : new Set(this).isDisjointFrom(_);
      }),
      (_.replace = function (_) {
        var _ = this;
        return (
          _(_) && (_ = new Set(_)),
          _(function () {
            Array.isArray(_) || _(_)
              ? (_.clear(),
                _.forEach(function (_) {
                  return _.add(_);
                }))
              : _ != null && _(`Cannot initialize set from ` + _);
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
        return `[object ObservableSet]`;
      }),
      (_[Symbol.iterator] = function () {
        return this.values();
      }),
      _(_, [
        {
          key: `size`,
          get: function () {
            return this.atom_.reportObserved(), this.data_.size;
          },
        },
        {
          key: Symbol.toStringTag,
          get: function () {
            return `Set`;
          },
        },
      ])
    );
  })(),
  _ = _(`ObservableSet`, _);
function _(_) {
  return (_[Symbol.toStringTag] = `SetIterator`), _(_);
}
var _ = Object.create(null),
  _ = `remove`,
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
        (this.keysAtom_ = new _(`ObservableObject.keys`)),
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
            _ = _
              ? {
                  type: _,
                  observableKind: `object`,
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
        this.pendingKeys_ ||= new Map();
        var _ = this.pendingKeys_.get(_);
        return (
          _ ||
            ((_ = new _(_ in this.target_, _, `ObservableObject.key?`, !1)),
            this.pendingKeys_.set(_, _)),
          _.get()
        );
      }),
      (_.make_ = function (_, _) {
        if ((_ === !0 && (_ = this.defaultAnnotation_), _ !== !1)) {
          if (!(_ in this.target_)) {
            var _;
            if ((_ = this.target_[_]) != null && _[_]) return;
            _(1, _.annotationType_, this.name_ + `.` + _.toString());
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
        var _ = _.extend_(this, _, _, _);
        return _ && _(this, _, _), _;
      }),
      (_.defineProperty_ = function (_, _, _) {
        _ === void 0 && (_ = !1), this.keysAtom_;
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
        _ === void 0 && (_ = !1), this.keysAtom_;
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
              configurable: !_.safeDescriptors || this.isPlainObject_,
              enumerable: !0,
              get: _.get,
              set: _.set,
            };
          if (_) {
            if (!Reflect.defineProperty(this.target_, _, _)) return !1;
          } else _(this.target_, _, _);
          var _ = new _(_, _, `ObservableObject.key`, !1);
          this.values_.set(_, _), this.notifyPropertyAddition_(_, _.value_);
        } finally {
          _();
        }
        return !0;
      }),
      (_.defineComputedProperty_ = function (_, _, _) {
        _ === void 0 && (_ = !1), this.keysAtom_;
        try {
          _();
          var _ = this.delete_(_);
          if (!_) return _;
          if (
            _(this) &&
            !_(this, {
              object: this.proxy_ || this.target_,
              name: _,
              type: _,
              newValue: void 0,
            })
          )
            return null;
          (_.name ||= `ObservableObject.key`),
            (_.context = this.proxy_ || this.target_);
          var _ = _(_),
            _ = {
              configurable: !_.safeDescriptors || this.isPlainObject_,
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
        if ((_ === void 0 && (_ = !1), this.keysAtom_, !_(this.target_, _)))
          return !0;
        if (
          _(this) &&
          !_(this, {
            object: this.proxy_ || this.target_,
            name: _,
            type: _,
          })
        )
          return null;
        try {
          var _;
          _();
          var _ = _(this),
            _ = this.values_.get(_),
            _ = void 0;
          if ((!_ && _ && (_ = _(this.target_, _)?.value), _)) {
            if (!Reflect.deleteProperty(this.target_, _)) return !1;
          } else delete this.target_[_];
          if (
            (_ &&
              (this.values_.delete(_), _ instanceof _ && (_ = _.value_), _(_)),
            this.keysAtom_.reportChanged(),
            (_ = this.pendingKeys_) == null ||
              (_ = _.get(_)) == null ||
              _.set(_ in this.target_),
            _)
          ) {
            var _ = {
              type: _,
              observableKind: `object`,
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
          _ = _(this);
        if (_) {
          var _ = _
            ? {
                type: _,
                observableKind: `object`,
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
  if (_(_, _)) return _;
  var _ = _?.name ?? `ObservableObject`;
  return _(_, _, new _(_, new Map(), String(_), _(_))), _;
}
var _ = _(`ObservableObjectAdministration`, _);
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
    : _.prototype.__proto__ === void 0
      ? (_.prototype = _)
      : (_.prototype.__proto__ = _);
}
_(_, Array.prototype);
var _ = (function (_) {
  function _(_, _, _, _) {
    var _;
    return (
      _ === void 0 && (_ = `ObservableArray`),
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
      var _ = [...arguments];
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
        key: `length`,
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
          return `Array`;
        },
      },
    ])
  );
})(_);
Object.entries(_).forEach(function (_) {
  var _ = _[0],
    _ = _[1];
  _ !== `concat` && _(_.prototype, _, _);
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
  _(_.prototype, `` + _, _(_));
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
  if (typeof _ == `object` && _) {
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
  else if (_(_)) return _.name;
  else _ = _(_) || _(_) || _(_) ? _(_) : _(_);
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
  if (_ === _) return _ !== 0 || 1 / _ == 1 / _;
  if (_ == null || _ == null) return !1;
  if (_ !== _) return _ !== _;
  var _ = typeof _;
  if (_ !== `function` && _ !== `object` && typeof _ != `object`) return !1;
  var _ = _.call(_);
  if (_ !== _.call(_)) return !1;
  switch (_) {
    case `[object RegExp]`:
    case `[object String]`:
      return `` + _ == `` + _;
    case `[object Number]`:
      return +_ == +_ ? (+_ == 0 ? 1 / _ == 1 / _ : +_ == +_) : +_ != +_;
    case `[object Date]`:
    case `[object Boolean]`:
      return +_ == +_;
    case `[object Symbol]`:
      return (
        typeof Symbol < `u` && Symbol.valueOf.call(_) === Symbol.valueOf.call(_)
      );
    case `[object Map]`:
    case `[object Set]`:
      _ >= 0 && _++;
      break;
  }
  (_ = _(_)), (_ = _(_));
  var _ = _ === `[object Array]`;
  if (!_) {
    if (typeof _ != `object` || typeof _ != `object`) return !1;
    var _ = _.constructor,
      _ = _.constructor;
    if (
      _ !== _ &&
      !(_(_) && _ instanceof _ && _(_) && _ instanceof _) &&
      `constructor` in _ &&
      `constructor` in _
    )
      return !1;
  }
  if (_ === 0) return !1;
  _ < 0 && (_ = -1), (_ ||= []), (_ ||= []);
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
var _ = _().Iterator?.prototype || {};
function _(_) {
  return (_[Symbol.iterator] = _), Object.assign(Object.create(_), _);
}
function _() {
  return this;
}
[`Symbol`, `Map`, `Set`].forEach(function (_) {
  _()[_] === void 0 &&
    _(`MobX requires global '` + _ + `' to be available or polyfilled`);
}),
  typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == `object` &&
    __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
      spy: _,
      extras: {
        getDebugName: _,
      },
      $mobx: _,
    });
var _ = _(_()),
  _ = _(_()),
  _ = Object.seal({
    onMoveUp: _,
    onMoveDown: _,
  });
Object.seal({
  onMoveRight: _,
  onMoveLeft: _,
});
function _(_, _) {
  if (_.is_repeat) return !1;
  let _ = _.GetRelativeDirection(_.button);
  return _ == _.FORWARD
    ? _.BFocusFirstChild(_.GAMEPAD)
    : _ == _.BACKWARD && _.BFocusLastChild(_.GAMEPAD);
}
if (!_.useState)
  throw Error(`mobx-react-lite requires React with Hooks support`);
if (!_)
  throw Error(
    `mobx-react-lite@3 requires mobx at least version 6 to be available`,
  );
function _(_) {
  _();
}
function _(_) {
  (_ ||= _),
    _({
      reactionScheduler: _,
    });
}
function _(_) {
  return _(_);
}
var _ = !1;
function _() {
  return _;
}
var _ = 1e4,
  _ = 1e4,
  _ = (function () {
    function _(_) {
      var _ = this;
      Object.defineProperty(this, "finalize", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: _,
      }),
        Object.defineProperty(this, "registrations", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: new Map(),
        }),
        Object.defineProperty(this, "sweepTimeout", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "sweep", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: function (_) {
            _ === void 0 && (_ = _),
              clearTimeout(_.sweepTimeout),
              (_.sweepTimeout = void 0);
            var _ = Date.now();
            _.registrations.forEach(function (_, _) {
              _ - _.registeredAt >= _ &&
                (_.finalize(_.value), _.registrations.delete(_));
            }),
              _.registrations.size > 0 && _.scheduleSweep();
          },
        }),
        Object.defineProperty(this, "finalizeAllImmediately", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: function () {
            _.sweep(0);
          },
        });
    }
    return (
      Object.defineProperty(_.prototype, "register", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (_, _, _) {
          this.registrations.set(_, {
            value: _,
            registeredAt: Date.now(),
          }),
            this.scheduleSweep();
        },
      }),
      Object.defineProperty(_.prototype, "unregister", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (_) {
          this.registrations.delete(_);
        },
      }),
      Object.defineProperty(_.prototype, "scheduleSweep", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function () {
          this.sweepTimeout === void 0 &&
            (this.sweepTimeout = setTimeout(this.sweep, _));
        },
      }),
      _
    );
  })(),
  _ = new (typeof FinalizationRegistry < `u` ? FinalizationRegistry : _)(
    function (_) {
      var _;
      (_ = _.reaction) == null || _.dispose(), (_.reaction = null);
    },
  ),
  _ = _(),
  _ = function () {};
function _(_) {
  _.reaction = new _(`observer${_.name}`, function () {
    var _;
    (_.stateVersion = Symbol()), (_ = _.onStoreChange) == null || _.call(_);
  });
}
function _(_, _) {
  if ((_ === void 0 && (_ = `observed`), _())) return _();
  var _ = _.useRef(null);
  if (!_.current) {
    var _ = {
      reaction: null,
      onStoreChange: null,
      stateVersion: Symbol(),
      name: _,
      subscribe: function (_) {
        return (
          _.unregister(_),
          (_.onStoreChange = _),
          _.reaction || (_(_), (_.stateVersion = Symbol())),
          function () {
            var _;
            (_.onStoreChange = null),
              (_ = _.reaction) == null || _.dispose(),
              (_.reaction = null);
          }
        );
      },
      getSnapshot: function () {
        return _.stateVersion;
      },
    };
    _.current = _;
  }
  var _ = _.current;
  _.reaction || (_(_), _.register(_, _, _)),
    _.useDebugValue(_.reaction, _),
    (0, _.useSyncExternalStore)(_.subscribe, _.getSnapshot, _);
  var _, _;
  if (
    (_.reaction.track(function () {
      try {
        _ = _();
      } catch (_) {
        _ = _;
      }
    }),
    _)
  )
    throw _;
  return _;
}
var _ = typeof Symbol == `function` && Symbol.for,
  _ = _
    ? Symbol.for(`react.forward_ref`)
    : typeof _.forwardRef == `function` &&
      (0, _.forwardRef)(function (_) {
        return null;
      }).$$typeof,
  _ = _
    ? Symbol.for(`react.memo`)
    : typeof _.memo == `function` &&
      (0, _.memo)(function (_) {
        return null;
      }).$$typeof;
function _(_, _) {
  if (_ && _.$$typeof === _)
    throw Error(
      "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
    );
  if (_()) return _;
  var _ = _?.forwardRef ?? !1,
    _ = _,
    _ = _.displayName || _.name;
  if (
    _ &&
    _.$$typeof === _ &&
    ((_ = !0), (_ = _.render), typeof _ != `function`)
  )
    throw Error(
      "[mobx-react-lite] `render` property of ForwardRef was not a function",
    );
  var _ = function (_, _) {
    return _(function () {
      return _(_, _);
    }, _);
  };
  return (
    (_.displayName = _.displayName),
    Object.defineProperty(_, "name", {
      value: _.name,
      writable: !0,
      configurable: !0,
    }),
    _.contextTypes && (_.contextTypes = _.contextTypes),
    _ && (_ = (0, _.forwardRef)(_)),
    (_ = (0, _.memo)(_)),
    _(_, _),
    _
  );
}
var _ = {
  $$typeof: !0,
  render: !0,
  compare: !0,
  type: !0,
  displayName: !0,
};
function _(_, _) {
  Object.keys(_).forEach(function (_) {
    _[_] || Object.defineProperty(_, _, Object.getOwnPropertyDescriptor(_, _));
  });
}
function _(_) {
  var _ = _.children,
    _ = _.render,
    _ = _ || _;
  return typeof _ == `function` ? _(_) : null;
}
(_.displayName = `Observer`),
  _(_.unstable_batchedUpdates),
  _.finalizeAllImmediately;
function _(_, _) {
  return _ === void 0 && (_ = `observed`), _(_, _);
}
function _(_, _) {
  if (_(_, _)) return !0;
  if (typeof _ != `object` || !_ || typeof _ != `object` || !_) return !1;
  var _ = Object.keys(_),
    _ = Object.keys(_);
  if (_.length !== _.length) return !1;
  for (var _ = 0; _ < _.length; _++)
    if (!Object.hasOwnProperty.call(_, _[_]) || !_(_[_[_]], _[_[_]])) return !1;
  return !0;
}
function _(_, _) {
  return _ === _ ? _ !== 0 || 1 / _ == 1 / _ : _ !== _ && _ !== _;
}
var _ = Symbol(`patchMixins`),
  _ = Symbol(`patchedDefinition`);
function _(_, _) {
  var _ = (_[_] = _[_] || {}),
    _ = (_[_] = _[_] || {});
  return (_.locks = _.locks || 0), (_.methods = _.methods || []), _;
}
function _(_, _) {
  var _ = this,
    _ = [...arguments].slice(2);
  _.locks++;
  try {
    var _;
    return _ != null && (_ = _.apply(this, _)), _;
  } finally {
    _.locks--,
      _.locks === 0 &&
        _.methods.forEach(function (_) {
          _.apply(_, _);
        });
  }
}
function _(_, _) {
  return function () {
    var _ = [...arguments];
    _.call.apply(_, [this, _, _].concat(_));
  };
}
function _(_, _, _) {
  var _ = _(_, _);
  _.methods.indexOf(_) < 0 && _.methods.push(_);
  var _ = Object.getOwnPropertyDescriptor(_, _);
  if (!(_ && _[_])) {
    var _ = _[_],
      _ = _(_, _, _ ? _.enumerable : void 0, _, _);
    Object.defineProperty(_, _, _);
  }
}
function _(_, _, _, _, _) {
  var _,
    _ = _(_, _);
  return (
    (_ = {}),
    (_[_] = !0),
    (_.get = function () {
      return _;
    }),
    (_.set = function (_) {
      if (this === _) _ = _(_, _);
      else {
        var _ = _(this, _, _, _, _);
        Object.defineProperty(this, _, _);
      }
    }),
    (_.configurable = !0),
    (_.enumerable = _),
    _
  );
}
var _ = Symbol(`ObserverAdministration`),
  _ = Symbol(`isMobXReactObserver`);
function _(_) {
  return (
    _[_] ??
    (_[_] = {
      reaction: null,
      mounted: !1,
      reactionInvalidatedBeforeMount: !1,
      forceUpdate: null,
      name: _(_.constructor),
      state: void 0,
      props: void 0,
      context: void 0,
    })
  );
}
function _(_) {
  var _ = _.prototype;
  if (_[_]) {
    var _ = _(_);
    throw Error(
      `The provided component class (` +
        _ +
        `) has already been declared as an observer component.`,
    );
  } else _[_] = !0;
  if (_.componentWillReact)
    throw Error(
      `The componentWillReact life-cycle event is no longer supported`,
    );
  if (_.__proto__ !== _.PureComponent) {
    if (!_.shouldComponentUpdate) _.shouldComponentUpdate = _;
    else if (_.shouldComponentUpdate !== _)
      throw Error(
        `It is not allowed to use shouldComponentUpdate in observer based components.`,
      );
  }
  var _ = _.render;
  if (typeof _ != `function`) {
    var _ = _(_);
    throw Error(
      `[mobx-react] class component (` +
        _ +
        ") is missing `render` method.\n`observer` requires `render` being a function defined on prototype.\n`render = () => {}` or `render = function() {}` is not supported.",
    );
  }
  _.render = function () {
    return (
      Object.defineProperty(this, "render", {
        configurable: !1,
        writable: !1,
        value: _() ? _ : _.call(this, _),
      }),
      this.render()
    );
  };
  var _ = _.componentDidMount;
  return (
    (_.componentDidMount = function () {
      var _ = this,
        _ = _(this);
      return (
        (_.mounted = !0),
        _.unregister(this),
        (_.forceUpdate = function () {
          return _.forceUpdate();
        }),
        (!_.reaction || _.reactionInvalidatedBeforeMount) && _.forceUpdate(),
        _?.apply(this, arguments)
      );
    }),
    _(_, `componentWillUnmount`, function () {
      var _;
      if (!_()) {
        var _ = _(this);
        (_ = _.reaction) == null || _.dispose(),
          (_.reaction = null),
          (_.forceUpdate = null),
          (_.mounted = !1),
          (_.reactionInvalidatedBeforeMount = !1);
      }
    }),
    _
  );
}
function _(_) {
  return _.displayName || _.name || `<component>`;
}
function _(_) {
  var _ = _.bind(this),
    _ = _(this);
  function _() {
    _.reaction || ((_.reaction = _(_)), _.mounted || _.register(this, _, this));
    var _ = void 0,
      _ = void 0;
    if (
      (_.reaction.track(function () {
        try {
          _ = _(!1, _);
        } catch (_) {
          _ = _;
        }
      }),
      _)
    )
      throw _;
    return _;
  }
  return _;
}
function _(_) {
  return new _(_.name + `.render()`, function () {
    if (!_.mounted) {
      _.reactionInvalidatedBeforeMount = !0;
      return;
    }
    try {
      _.forceUpdate == null || _.forceUpdate();
    } catch {
      var _;
      (_ = _.reaction) == null || _.dispose(), (_.reaction = null);
    }
  });
}
function _(_, _) {
  return (
    _() &&
      console.warn(
        `[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side.`,
      ),
    this.state !== _ || !_(this.props, _)
  );
}
function _(_, _) {
  if (_ && _.kind !== `class`)
    throw Error(`The @observer decorator can be used on classes only`);
  return (
    _.isMobxInjector === !0 &&
      console.warn(
        "Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`",
      ),
    Object.prototype.isPrototypeOf.call(_.Component, _) ||
    Object.prototype.isPrototypeOf.call(_.PureComponent, _)
      ? _(_)
      : _(_)
  );
}
function _() {
  return (
    (_ = Object.assign
      ? Object.assign.bind()
      : function (_) {
          for (var _ = 1; _ < arguments.length; _++) {
            var _ = arguments[_];
            for (var _ in _)
              Object.prototype.hasOwnProperty.call(_, _) && (_[_] = _[_]);
          }
          return _;
        }),
    _.apply(this, arguments)
  );
}
function _(_, _) {
  if (_ == null) return {};
  var _ = {},
    _ = Object.keys(_),
    _,
    _;
  for (_ = 0; _ < _.length; _++)
    (_ = _[_]), !(_.indexOf(_) >= 0) && (_[_] = _[_]);
  return _;
}
var _ = [`children`],
  _ = _.createContext({});
function _(_) {
  var _ = _.children,
    _ = _(_, _),
    _ = _.useContext(_),
    _ = _.useRef(_({}, _, _)).current;
  return _.createElement(
    _.Provider,
    {
      value: _,
    },
    _,
  );
}
if (((_.displayName = `MobXProvider`), `19.1.1`.split(`.`)[0], !_.Component))
  throw Error(`mobx-react requires React to be available`);
if (!_) throw Error(`mobx-react requires mobx to be available`);
var _ = _({
    Arrow: () => _,
    BackgroundAnimation: () => _,
    ContextMenuHRSeparator: () => _,
    ContextMenuMouseOverlay: () => _,
    ContextMenuPopup: () => _,
    ContextMenuPosition: () => _,
    ContextMenuSeparator: () => _,
    ForceDesktop: () => _,
    IconContainer: () => _,
    "ItemFocusAnim-darkGrey": () => _,
    "ItemFocusAnim-darkGreySettings": () => _,
    "ItemFocusAnim-darkerGrey": () => _,
    "ItemFocusAnim-darkerGrey-nocolor": () => _,
    "ItemFocusAnim-green": () => _,
    "ItemFocusAnim-grey": () => _,
    "ItemFocusAnim-translucent-white-10": () => _,
    "ItemFocusAnim-translucent-white-20": () => _,
    "ItemFocusAnimBorder-darkGrey": () => _,
    Label: () => _,
    MenuSectionHeader: () => _,
    NoSeparation: () => _,
    PopoutSubMenu: () => _,
    PopoutSubMenuItems: () => _,
    SubMenu: () => _,
    UpperCase: () => _,
    active: () => _,
    contextMenu: () => _,
    contextMenuContents: () => _,
    contextMenuItem: () => _,
    default: () => _,
    "duration-app-launch": () => _,
    focusAnimation: () => _,
    hoverAnimation: () => _,
  }),
  _ = `800ms`,
  _ = `Sh0nMmOtiGE-`,
  _ = `_0vrlGZS6wmI-`,
  _ = `l39SV-qhMqE-`,
  _ = `PT57ChBwUTo-`,
  _ = `MFfvw00hboM-`,
  _ = `_3YQBiPw99ow-`,
  _ = `bXBe68p03Eg-`,
  _ = `iztQl-5VVEc-`,
  _ = `SNXKQ17UnZs-`,
  _ = `eoswxWmsBhM-`,
  _ = `PwRu0DuFKDA-`,
  _ = `xq09rw7LEzQ-`,
  _ = `_8JIa-ve-pTo-`,
  _ = `hPtVXzKMNSo-`,
  _ = `szfM-Lwvr-I-`,
  _ = `mUg-VUDlsZc-`,
  _ = `Bt-bKSbPJI0-`,
  _ = `l8nElul3pe4-`,
  _ = `M-WJlJuVASk-`,
  _ = `VPqs-CHGadE-`,
  _ = `JYbktHJALW8-`,
  _ = `X-PKt5HEp44-`,
  _ = `Yd9K9B7coH8-`,
  _ = `fQrYNIb71v0-`,
  _ = `_5VQ8GXnqx4E-`,
  _ = `OTI-14yoz6s-`,
  _ = `_5bB4d-7G3Zs-`,
  _ = `emwM5eYFAj4-`,
  _ = `nUW2-A-V3rw-`,
  _ = `_91xOK1nRcXE-`,
  _ = `BIzQwc9BvEQ-`,
  _ = {
    "duration-app-launch": `800ms`,
    ContextMenuMouseOverlay: _,
    ContextMenuPosition: _,
    contextMenu: _,
    ContextMenuPopup: _,
    contextMenuContents: _,
    contextMenuItem: _,
    active: _,
    MenuSectionHeader: _,
    ContextMenuSeparator: _,
    NoSeparation: _,
    UpperCase: _,
    SubMenu: _,
    Label: _,
    Arrow: _,
    IconContainer: _,
    ContextMenuHRSeparator: _,
    ForceDesktop: _,
    PopoutSubMenu: _,
    PopoutSubMenuItems: _,
    BackgroundAnimation: _,
    "ItemFocusAnim-darkerGrey-nocolor": `JYbktHJALW8-`,
    "ItemFocusAnim-darkerGrey": `X-PKt5HEp44-`,
    "ItemFocusAnim-darkGreySettings": `Yd9K9B7coH8-`,
    "ItemFocusAnim-darkGrey": `fQrYNIb71v0-`,
    "ItemFocusAnim-grey": `_5VQ8GXnqx4E-`,
    "ItemFocusAnim-translucent-white-10": `OTI-14yoz6s-`,
    "ItemFocusAnim-translucent-white-20": `_5bB4d-7G3Zs-`,
    "ItemFocusAnimBorder-darkGrey": `emwM5eYFAj4-`,
    "ItemFocusAnim-green": `nUW2-A-V3rw-`,
    focusAnimation: _,
    hoverAnimation: _,
  },
  _ = _(),
  _ = _.forwardRef((_, _) => {
    let { className: _, contextMenuStyles: _, disabled: _, ..._ } = _;
    return (0, _.jsx)(`div`, {
      ..._,
      ref: _,
      className: _(
        _,
        (_ || _).contextMenuItem,
        `contextMenuItem`,
        _ && `disabled`,
      ),
    });
  });
_.displayName = `MenuItem`;
function _(_, _ = !0) {
  return function (_, _, _) {
    let _ = _.value;
    _.value = function (..._) {
      let _ = this[_ + `_DebounceProperties`];
      _ === void 0 &&
        (_ = this[_ + `_DebounceProperties`] =
          {
            hTimer: void 0,
            nPending: 0,
          }),
        _.hTimer === void 0
          ? (_ ? _.apply(this, _) : (_.nPending += 1),
            (_.hTimer = window.setInterval(() => {
              _.nPending > 0
                ? (_.apply(this, _), (_.nPending = 0))
                : (window.clearInterval(_.hTimer), (_.hTimer = void 0));
            }, _)))
          : (_.nPending += 1);
    };
  };
}
function _(_, _) {
  return _(
    (_) => {
      if (!_) return;
      let _ = _(_.ownerDocument.defaultView, (_) => {
        _(_[0]);
      });
      return _.observe(_), () => _.unobserve(_);
    },
    [_, _],
  );
}
function _(_) {
  return _(
    _,
    _.useCallback(
      (_, _) =>
        _.ResizeObserver
          ? new _.ResizeObserver(_)
          : (_(!1, `ResizeObserver is not available`),
            {
              observe: () => {},
              unobserve: () => {},
              disconnect: () => {},
            }),
      [],
    ),
  );
}
var _ = _.createContext(null),
  _ = class extends _.Component {
    static contextType = _;
    m_navRef = _();
    get instance() {
      return this.context.instance;
    }
    componentDidMount() {
      this.instance.SetLabel(this.props.label),
        this.m_navRef.current?.TakeFocus(),
        _(this.props.refInstance, this.instance);
    }
    componentDidUpdate(_) {
      _.label !== this.props.label &&
        this.context &&
        this.instance.SetLabel(this.props.label);
    }
    HideIfSubmenu() {
      return this.instance.BIsSubMenu() ? (this.instance.HideSelf(), !0) : !1;
    }
    HideMenu() {
      return (
        this.instance.BIsSubMenu()
          ? this.instance.HideSelf()
          : this.instance.Hide(),
        !0
      );
    }
    render() {
      let {
          children: _,
          className: _,
          label: _,
          onCancel: _,
          cancelText: _,
          refInstance: _,
          bForceDesktopPresentation: _,
          footer: _,
          role: _ = `menu`,
          labelId: _,
          style: _ = {},
          refScrollable: _,
          ..._
        } = this.props,
        _ = this.context.styles ?? _,
        _ = _ ?? `#Button_Cancel`;
      if (this.context.presentation == 1 && !_) {
        let _ = () => {
          _ && _(), this.instance.Hide();
        };
        return (
          (_.overflowY = this.instance.BIsSubMenuVisible() ? `hidden` : void 0),
          (0, _.jsxs)(_, {
            ..._,
            className: _(
              _.contextMenuContents,
              {
                [_.hasSubMenu]: this.instance.BIsSubMenuVisible(),
              },
              _,
            ),
            "flow-children": `column`,
            onMoveLeft: this.HideIfSubmenu,
            onCancel: this.instance.BIsSubMenu() ? this.HideMenu : _,
            style: _,
            navEntryPreferPosition: _.PREFERRED_CHILD,
            navRef: this.m_navRef,
            ref: _,
            role: _,
            "aria-labelledby": _ ? _ : void 0,
            ..._,
            children: [
              _,
              _ &&
                (0, _.jsx)(`div`, {
                  _: _,
                  style: {
                    display: `none`,
                  },
                  children: _,
                }),
              !this.instance.BIsSubMenu() &&
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)(_, {}),
                    (0, _.jsx)(_, {
                      className: _.Cancel,
                      onSelected: _,
                      children: _(_),
                    }),
                    _,
                  ],
                }),
              this.instance.BIsSubMenuVisible() &&
                (0, _.jsx)(`div`, {
                  className: _.contextMenuFade,
                  onClick: () => this.instance.HideSubMenu(),
                }),
            ],
          })
        );
      } else
        return (0, _.jsx)(`div`, {
          ref: _,
          style: _,
          ..._,
          className: _(
            {
              [_.contextMenuContents]: !0,
              [_.hasSubMenu]: this.instance.BIsSubMenuVisible(),
              [_.ForceDesktop]: _,
            },
            _,
          ),
          children: _,
        });
    }
  };
_([_], _.prototype, `HideIfSubmenu`, null),
  _([_], _.prototype, `HideMenu`, null),
  (_ = _([_], _));
function _(_) {
  let _ = _.useId();
  return (0, _.jsx)(_, {
    labelId: _,
    ..._,
  });
}
var _ = class extends _.PureComponent {
  static contextType = _;
  m_ref = _.createRef();
  m_refDiv = _.createRef();
  get element() {
    return this.m_refDiv.current;
  }
  get instance() {
    return this.context.instance;
  }
  OnClick(_) {
    if (this.props.disabled) {
      this.context.callbacks?.onDisabledItemSelected &&
        this.context.callbacks.onDisabledItemSelected();
      return;
    }
    this.props.onClick && this.props.onClick(_),
      !this.props.bInteractableItem &&
        (this.props.onSelected && this.props.onSelected(_),
        this.context && this.instance.ForceHide());
  }
  OnOKButton(_) {
    this.m_refDiv.current?.click();
  }
  OnMouseEnter(_) {
    this.context.presentation == 0 && this.instance.HideSubMenu();
  }
  Focus() {
    this.m_ref.current
      ? this.m_ref.current.TakeFocus()
      : this.m_refDiv.current && this.m_refDiv.current.focus();
  }
  render() {
    let {
        onSelected: _,
        bInteractableItem: _,
        onMoveRight: _,
        ..._
      } = this.props,
      _ = this.context?.styles ?? _;
    return this.context.presentation == 1
      ? (0, _.jsx)(_, {
          noFocusRing: !0,
          preferredFocus: this.props.selected,
          ref: this.m_refDiv,
          navRef: this.m_ref,
          onMouseEnter: this.OnMouseEnter,
          ..._,
          className: _(
            this.props.className,
            _.contextMenuItem,
            `contextMenuItem`,
            this.props.disabled && `disabled`,
            this.props.selected && _.Selected,
            this.props.tone == `positive` && _.Positive,
            this.props.tone == `emphasis` && _.Emphasis,
            this.props.tone == `destructive` && _.Destructive,
          ),
          focusClassName: _.Focused,
          onClick: this.props.disabled ? void 0 : this.OnClick,
          focusable: !this.props.disabled,
          onOKButton: this.OnOKButton,
          onMoveRight: _,
          unselectable: this.props.unselectable,
          role: _.role ?? `menuitem`,
          "aria-selected": this.props.selected,
          children: this.props.children,
        })
      : (0, _.jsx)(_, {
          ref: this.m_refDiv,
          onMouseEnter: this.OnMouseEnter,
          ..._,
          onClick: this.OnClick,
          unselectable: this.props.unselectable,
          className: this.props.className,
          role: _.role ?? `menuitem`,
          "aria-selected": this.props.selected,
          children: this.props.children,
        });
  }
};
_([_], _.prototype, `OnClick`, null),
  _([_], _.prototype, `OnOKButton`, null),
  _([_], _.prototype, `OnMouseEnter`, null),
  _([_], _.prototype, `Focus`, null),
  _.PureComponent,
  _.PureComponent;
function _(_) {
  return (0, _.jsx)(`div`, {
    className: (_.useContext(_).styles ?? _).ContextMenuSeparator,
    role: `separator`,
  });
}
var _ = (_) => {
    let _ = _();
    return (0, _.jsx)(_, {
      ..._,
      bInGamepadUI: _,
    });
  },
  _ = class extends _.PureComponent {
    static contextType = _;
    m_refItem = _.createRef();
    constructor(_) {
      super(_),
        (this.state = {
          bActive: !1,
        });
    }
    get instance() {
      return this.context.instance;
    }
    OnSubMenuMouseEnter() {
      this.instance.CancelHideSubMenuTimer();
    }
    OnSubMenuHidden() {
      this.setState({
        bActive: !1,
      }),
        this.props.bInGamepadUI &&
          this.context.presentation == 1 &&
          this.m_refItem.current &&
          this.m_refItem.current.Focus();
    }
    ShowSubMenu(_) {
      let _ = _ || this.m_refItem.current.element,
        _ = this.instance.ShowSubMenu(_, this.RenderSubMenu);
      return _
        ? (this.setState({
            bActive: !0,
          }),
          _.SetOnHideCallback(this.OnSubMenuHidden),
          !0)
        : !1;
    }
    RenderSubMenu() {
      return (0, _.jsx)(_, {
        onMouseEnter: this.OnSubMenuMouseEnter,
        label: this.props.label,
        children: this.props.children,
      });
    }
    OnMouseEnter(_) {
      this.context.presentation == 0 && this.ShowSubMenu(_.currentTarget);
    }
    OnClick(_) {
      this.OnMouseEnter(_),
        this.props.onClick && this.props.onClick(_),
        this.props.bInGamepadUI &&
          this.context.presentation == 1 &&
          this.ShowSubMenu(_.currentTarget);
    }
    render() {
      let {
          label: _,
          selectedWithin: _,
          children: _,
          className: _,
          bInGamepadUI: _,
          ..._
        } = this.props,
        _ = this.context.styles ?? _;
      return (0, _.jsxs)(_, {
        ..._,
        ref: this.m_refItem,
        onClick: this.OnClick,
        selected: _ && !this.state.bActive,
        className: _(_, _.SubMenu, this.state.bActive && _.active),
        onMouseEnter: this.OnMouseEnter,
        bInteractableItem: !0,
        onMoveRight: () => this.ShowSubMenu(),
        children: [
          (0, _.jsx)(`div`, {
            className: _.Label,
            children: _,
          }),
          (0, _.jsx)(`div`, {
            className: _.Arrow,
            children: (0, _.jsx)(_, {}),
          }),
        ],
      });
    }
  };
_([_], _.prototype, `OnSubMenuMouseEnter`, null),
  _([_], _.prototype, `OnSubMenuHidden`, null),
  _([_], _.prototype, `ShowSubMenu`, null),
  _([_], _.prototype, `RenderSubMenu`, null),
  _([_], _.prototype, `OnMouseEnter`, null),
  _([_], _.prototype, `OnClick`, null);
var _ = class extends _.Component {
  m_elMenu = void 0;
  m_cReenteranceGuard = 1;
  m_mutationObserver;
  constructor(_) {
    super(_),
      (this.state = {
        ready: !1,
        menuLeft: void 0,
        menuTop: void 0,
        menuRight: void 0,
        menuBottom: void 0,
        menuWidth: void 0,
        menuHeight: void 0,
        menuMinWidth: void 0,
      }),
      (this.m_mutationObserver = new MutationObserver(this.OnMenuMutation));
  }
  get parentWin() {
    return (
      this.props.element?.ownerDocument.defaultView || this.props.parentWin
    );
  }
  BindMenuElement(_) {
    this.props.instance.SetElement(_),
      this.m_elMenu &&
        (this.m_mutationObserver.disconnect(),
        (!this.props.popup || this.props.options.bScreenCoordinates) &&
          this.m_elMenu.ownerDocument.defaultView?.removeEventListener(
            `resize`,
            this.OnWindowResize,
          )),
      _ &&
        (this.m_mutationObserver.observe(_, {
          childList: !0,
          subtree: !0,
        }),
        (!this.props.popup || this.props.options.bScreenCoordinates) &&
          _.ownerDocument.defaultView?.addEventListener(
            `resize`,
            this.OnWindowResize,
          )),
      (this.m_elMenu = _ || void 0),
      _.IN_CLIENT && this.props.popup && this.m_elMenu
        ? this.m_elMenu.ownerDocument.fonts.ready.then(() => {
            this.PositionMenu();
          })
        : this.PositionMenu(),
      this.state.ready ||
        (this.props.instance.SetTakeFocus(this.TakeFocus.bind(this)),
        this.setState(
          {
            ready: !0,
          },
          () => {
            this.props.options?.bSkipFocusWhenReady || this.TakeFocus();
          },
        ));
  }
  OnMenuMutation(_, _) {
    this.PositionMenu();
  }
  OnWindowResize() {
    this.PositionMenu();
  }
  OnBlur(_) {
    if (
      !(_.relatedTarget && _(_.currentTarget, _.relatedTarget)) &&
      !(
        _.relatedTarget &&
        this.props.instance.BIsElementInMenuHierarchy(_.relatedTarget)
      ) &&
      !this.props.instance.BIsSubMenuVisible() &&
      this.state.ready &&
      this.props.instance.visible
    ) {
      let _ = _() ? 150 : 0;
      this.props.instance.OnCancel(_);
    }
  }
  OnKeyDown(_) {
    _.keyCode == 27 &&
      this.state.ready &&
      (this.props.instance.Hide(), _.preventDefault(), _.stopPropagation());
  }
  componentDidUpdate() {
    this.m_cReenteranceGuard-- > 0
      ? this.PositionMenu()
      : (this.m_cReenteranceGuard = 2);
  }
  TakeFocus() {
    if (
      this.m_elMenu &&
      this.state.ready &&
      this.props.instance.visible &&
      (this.props.popup ||
        !_(this.m_elMenu, this.m_elMenu.ownerDocument.activeElement))
    ) {
      let _ = this.m_elMenu.querySelector(`.ContextMenuAutoFocus`);
      _ && _.focus ? _.focus() : this.m_elMenu.focus();
    }
  }
  PositionMenu(_ = !1) {
    let _ = this.props.options,
      _ = this.m_elMenu,
      _ = this.props.element;
    if (!_) return;
    let _ = this.props.popup != null,
      _ = this.parentWin;
    if (!_ || (_ && _.getComputedStyle(_).display === `none`)) return;
    let _ = this.props.clientX,
      _ = this.props.clientY,
      _ = 0,
      _ = 0,
      _ = _.innerWidth,
      _ = _.innerHeight,
      _ = _?.getBoundingClientRect();
    if (_)
      if (
        (!_.bScreenCoordinates &&
          _ !== void 0 &&
          _ !== void 0 &&
          ((_ += _.screenLeft), (_ += _.screenTop)),
        (_ &&= _(_, _)),
        _.targetMonitor)
      )
        (_ = _.targetMonitor.nScreenLeft),
          (_ = _.targetMonitor.nScreenTop),
          (_ = _.targetMonitor.nScreenWidth),
          (_ = _.targetMonitor.nScreenHeight);
      else {
        let _ = _.screen,
          _ = 0,
          _ = 0;
        _.availLeft && (_ = _.availLeft),
          _.availTop && (_ = _.availTop),
          (_ = _),
          (_ = _),
          (_ = _.availWidth),
          (_ = _.availHeight);
      }
    (_.bOverlapHorizontal || _.bOverlapVertical) && (_ = _ = void 0);
    let _ = _.getBoundingClientRect(),
      _ = {
        menuLeft: void 0,
        menuRight: void 0,
        menuTop: void 0,
        menuBottom: void 0,
        menuWidth: void 0,
        menuHeight: void 0,
        menuMinWidth: void 0,
      },
      _ = _ ?? _.left,
      _ = _ ?? _.right,
      _ = _.width;
    _.bMatchWidth && ((_ = _ - _), (_.menuWidth = _)),
      _.bGrowToElementWidth && (_.menuMinWidth = Math.max(_, _ - _));
    let _ = (_.bOverlapHorizontal ? _ : _) - _ - _,
      _ = _ > 0,
      _ = _ + _ - (_.bOverlapHorizontal ? _ : _) - _,
      _ = _ > 0,
      _ = _.bPreferPopLeft;
    _?.matches(`:dir(rtl)`) && (_ = !_);
    let _ = (_ || !_) && _;
    !_ &&
      !_ &&
      ((_ = _ > _),
      _.bFitToWindow && ((_ += (_ ? _ : _) - 8), (_.menuWidth = _))),
      _
        ? (_.menuRight = _ - (_.bOverlapHorizontal ? _ : _))
        : (_.menuLeft = _.bOverlapHorizontal ? _ : _);
    let _ = _ ?? _.top,
      _ = _ ?? _.bottom,
      _ = _.scrollHeight;
    _.bMatchHeight && ((_ = _ - _), (_.menuHeight = _));
    let _ = (_.bOverlapVertical ? _ : _) - _ - _,
      _ = _ > 0,
      _ = _ + _ - (_.bOverlapVertical ? _ : _) - _,
      _ = _ > 0,
      _ = (_.bPreferPopTop || !_) && _ && !_.bDisablePopTop;
    if (!_ && !_) {
      let _ =
        _.bShiftToFitWindow === void 0
          ? !!_.bFitToWindow && !_.bOverlapHorizontal
          : _.bShiftToFitWindow;
      (_ = _ > _ && !_.bDisablePopTop),
        _ && (_ ? (_.menuTop = 4) : (_.menuBottom = 4)),
        _.bFitToWindow &&
          (_ ? (_ = Math.min(_, _ - 8)) : (_ += _ ? _ : _),
          (_.menuHeight = _ - 8));
    }
    _.menuBottom === void 0 &&
      _.menuTop === void 0 &&
      (_
        ? (_.menuBottom = _ - (_.bOverlapVertical ? _ : _))
        : (_.menuTop = _.bOverlapVertical ? _ : _)),
      _
        ? ((_.menuHeight ||= _.height),
          (_.menuWidth ||= _.width),
          _.menuBottom &&
            !_.menuTop &&
            ((_.menuTop = _ - _.menuBottom - _.menuHeight),
            (_.menuBottom = void 0)),
          _.menuRight &&
            !_.menuLeft &&
            ((_.menuLeft = _ - _.menuRight - _.menuWidth),
            (_.menuRight = void 0)))
        : _.getComputedStyle(_).position != `fixed` &&
          (_.menuLeft && (_.menuLeft += _.scrollX),
          _.menuTop && (_.menuTop += _.scrollY),
          _.menuBottom &&
            (_.menuBottom +=
              _.document.body.clientHeight - _.scrollY - _.innerHeight),
          _.menuRight &&
            (_.menuRight +=
              _.document.body.clientWidth - _.scrollX - _.innerWidth)),
      (_ ||
        _.menuLeft !== this.state.menuLeft ||
        _.menuRight !== this.state.menuRight ||
        _.menuTop !== this.state.menuTop ||
        _.menuBottom !== this.state.menuBottom ||
        _.menuWidth !== this.state.menuWidth ||
        _.menuHeight !== this.state.menuHeight) &&
        this.setState(_);
  }
  PositionPopupWindow() {
    if (
      !(
        this.state.menuLeft !== void 0 &&
        this.state.menuTop !== void 0 &&
        this.state.menuWidth !== void 0 &&
        this.state.menuHeight !== void 0
      )
    )
      return;
    let _ = this.props.popup?.window,
      _ = this.props.options;
    if (_.bScreenCoordinates) {
      let _ =
        _.targetMonitor?.flScaleToTargetMonitor ??
        this.parentWin?.devicePixelRatio;
      _?.SteamClient.Window.MoveTo(
        this.state.menuLeft,
        this.state.menuTop,
        _ ?? !0,
      ),
        _?.SteamClient.Window.ResizeTo(
          this.state.menuWidth,
          this.state.menuHeight,
          _ ?? !0,
        );
      return;
    }
    this.parentWin?.SteamClient.Window.GetWindowRestoreDetails().then((_) => {
      let _ = this.state.menuLeft - this.parentWin.screenX,
        _ = this.state.menuTop - this.parentWin.screenY;
      try {
        _?.SteamClient.Window.PositionWindowRelative(
          _,
          _,
          _,
          this.state.menuWidth,
          this.state.menuHeight,
        );
      } catch (_) {
        console.error(_);
      }
    });
  }
  render() {
    let _ = {
      visibility: this.state.ready ? `visible` : `hidden`,
    };
    this.props.options.flElementZoom &&
      this.props.options.flElementZoom > 0 &&
      (_.zoom = this.props.options.flElementZoom),
      this.props.popup
        ? (this.PositionPopupWindow(),
          this.state.menuMinWidth !== void 0 &&
            (_.minWidth = Math.floor(this.state.menuMinWidth)))
        : (this.state.menuTop === void 0
            ? this.state.menuBottom !== void 0 &&
              (_.bottom = this.state.menuBottom)
            : (_.top = this.state.menuTop),
          this.state.menuLeft === void 0
            ? this.state.menuRight !== void 0 &&
              (_.right = this.state.menuRight)
            : (_.left = this.state.menuLeft),
          this.state.menuHeight !== void 0 &&
            (_.height = this.state.menuHeight),
          this.state.menuWidth !== void 0 && (_.width = this.state.menuWidth),
          this.state.menuMinWidth !== void 0 &&
            (_.minWidth = this.state.menuMinWidth));
    let _ = this.props.options.strClassName || `l39SV-qhMqE-`;
    return (
      (this.props.options.bCreateHidden ||
        (this.props.instance.visible && this.state.ready)) &&
        (_ += ` visible`),
      this.props.instance.visible && this.state.ready && (_ += ` ready`),
      (_ += ` ` + _),
      this.props.options.bStandalone && (_ += ` undefined`),
      (0, _.jsx)(`div`, {
        className: _,
        ref: this.BindMenuElement,
        style: _,
        onBlur: this.OnBlur,
        onKeyDown: this.OnKeyDown,
        tabIndex: 0,
        children: this.props.children,
      })
    );
  }
};
_([_], _.prototype, `BindMenuElement`, null),
  _([_, _(100)], _.prototype, `OnMenuMutation`, null),
  _([_], _.prototype, `OnWindowResize`, null),
  _([_], _.prototype, `OnBlur`, null),
  _([_], _.prototype, `OnKeyDown`, null),
  (_ = _([_], _));
function _(_) {
  return (0, _.jsx)(`div`, {
    className: _,
  });
}
function _(_, _) {
  let _ = _.createEvent(`HTMLEvents`);
  _.initEvent(`change`, !0, !1), _.dispatchEvent(_);
}
function _(_) {
  let _ = [],
    _ = _(_),
    _ = _.getSelection(),
    _ = _ && _.rangeCount > 0 && _.toString().length > 0,
    _ = _.target,
    _ = !1,
    _ = _.clientY,
    _ = _.clientX;
  if (
    (_ &&
      `tagName` in _ &&
      (_.tagName == `INPUT` || _.tagName == `TEXTAREA`) &&
      (_ = !0),
    _.IN_CLIENT && _ && _(_, `Browser.GetSpellingSuggestions`))
  ) {
    let [_, ..._] = _.SteamClient.Browser.GetSpellingSuggestions(),
      _ = _;
    _ &&
      _.forEach((_, _) => {
        _.push(
          (0, _.jsx)(
            _,
            {
              onSelected: () => {
                _.setRangeText(_),
                  _(_, _.document),
                  _.setSelectionRange(_.selectionEnd, _.selectionEnd),
                  _.focus();
              },
              className: _,
              children: _,
            },
            `spelling_${_}_${_}`,
          ),
        );
      }),
      _ &&
        _(_, `Browser.AddWordToDictionary`) &&
        ((_ = _.trim()),
        _.push(
          (0, _.jsx)(
            _,
            {
              onSelected: () => _.SteamClient.Browser.AddWordToDictionary(_),
              children: _(
                `#ContextMenu_AddToDictionary`,
                _.length < 30 ? _ : _.substring(0, 30) + `...`,
              ),
            },
            `addtodictionary_${_}`,
          ),
        ));
  }
  if (
    ((_.document.queryCommandEnabled(`cut`) || (_ && _)) &&
      _.push(
        (0, _.jsx)(
          _,
          {
            onSelected: () => {
              _.document.execCommand(`cut`);
            },
            children: _(`#ContextMenu_Cut`),
          },
          `cut`,
        ),
      ),
    (_.document.queryCommandEnabled(`copy`) || _) &&
      _.push(
        (0, _.jsx)(
          _,
          {
            onSelected: () => {
              _.document.execCommand(`copy`);
            },
            className: _,
            children: _(`#ContextMenu_Copy`),
          },
          `copy`,
        ),
      ),
    _.IN_CLIENT &&
      _ &&
      _(_, `Browser.Paste`) &&
      _.push(
        (0, _.jsx)(
          _,
          {
            onSelected: () => {
              _.focus(), _.SteamClient.Browser.Paste();
            },
            className: _,
            children: _(`#ContextMenu_Paste`),
          },
          `paste`,
        ),
      ),
    _.IN_CLIENT && _.DEV_MODE)
  ) {
    let _ = [];
    _(_, `Browser.OpenDevTools`) &&
      _.push(
        (0, _.jsx)(
          _,
          {
            onSelected: () => {
              _.focus(), _.SteamClient.Browser.OpenDevTools();
            },
            children: `Open Dev Tools`,
          },
          `opendevtools`,
        ),
      ),
      _(_, `Browser.InspectElement`) &&
        _.push(
          (0, _.jsx)(
            _,
            {
              onSelected: () => {
                _.focus(), _.SteamClient.Browser.InspectElement(_, _);
              },
              className: _,
              children: `Inspect Element`,
            },
            `inspectelement`,
          ),
        ),
      _.length > 0 &&
        (_.push((0, _.jsx)(_, {}, `devtools-separator`)), _.push(..._));
  }
  if (_.length)
    _(
      (0, _.jsx)(_, {
        children: _,
      }),
      _,
      {
        bRootContextMenu: !0,
      },
    );
  else {
    if (_.shiftKey) return;
    _.preventDefault(), _.stopPropagation();
  }
}
var _ = `EnableContextMenuBlurDelay3`;
function _() {
  return (window.localStorage && window.localStorage.getItem(_)) === `true`;
}
var _ = class _ {
  static s_nNextKeyValue = 1;
  m_nKey = null;
  m_ContextMenuManager;
  m_bVisible = !1;
  m_fnTakeFocus;
  m_element;
  m_rctElement;
  m_rctLabel = void 0;
  m_popupContextMenu;
  m_timerHideMenu = 0;
  m_options;
  m_position;
  m_submenu;
  m_parentInstance;
  m_elSubmenuItem = null;
  m_timerHideSubMenu = 0;
  m_fnOnHideCallback;
  constructor(_, _) {
    _(this), (this.m_ContextMenuManager = _), (this.m_rctElement = _);
  }
  get Manager() {
    return this.m_ContextMenuManager;
  }
  get key() {
    return (
      this.m_nKey ?? ((this.m_nKey = _.s_nNextKeyValue), _.s_nNextKeyValue++),
      this.m_nKey
    );
  }
  SetElement(_) {
    this.m_element = _;
  }
  SetPopup(_) {
    this.m_popupContextMenu = _;
  }
  get ReactElement() {
    return this.m_rctElement;
  }
  get label() {
    return this.m_rctLabel;
  }
  get submenu() {
    return this.m_submenu;
  }
  get visible() {
    return this.m_bVisible;
  }
  get options() {
    return this.m_options;
  }
  get position() {
    return this.m_position;
  }
  SetOnHideCallback(_) {
    this.m_fnOnHideCallback = _;
  }
  Show() {
    this.CancelHideMenuTimer(),
      (this.m_bVisible = !0),
      this.m_ContextMenuManager.ShowMenu(this);
  }
  OnCancel(_ = 0) {
    this.options?.onCancel && this.options.onCancel(), this.Hide(_);
  }
  Hide(_ = 0) {
    _ > 0
      ? (this.m_timerHideMenu = window.setTimeout(() => {
          (this.m_timerHideMenu = 0), this.InternalHide();
        }, _))
      : this.InternalHide();
  }
  CancelHideMenuTimer() {
    this.m_timerHideMenu > 0 &&
      (clearTimeout(this.m_timerHideMenu), (this.m_timerHideMenu = 0));
  }
  SetPosition(_, _, _) {
    (this.m_options = {
      ...this.m_options,
      ..._,
    }),
      (this.m_position.clientX = _),
      (this.m_position.clientY = _),
      (this.m_position.options = this.m_options);
  }
  ForceHide() {
    this.InternalHide();
  }
  HideIfNotInFocus() {
    !this.BHasFocus() && !this.BIsFocusInChildHierarchy() && this.Hide();
  }
  InternalHide() {
    this.CancelHideMenuTimer(),
      this.m_bVisible &&
        ((this.m_bVisible = !1),
        this.InternalHideSubMenu(),
        this.m_fnOnHideCallback && this.m_fnOnHideCallback(),
        this.m_ContextMenuManager.HideMenu(this));
  }
  SetTakeFocus(_) {
    this.m_fnTakeFocus = _;
  }
  ShowSubMenu(_, _) {
    return this.m_elSubmenuItem == _
      ? (this.CancelHideSubMenuTimer(), this.m_submenu?.TakeFocus(), null)
      : (this.InternalHideSubMenu(),
        (this.m_elSubmenuItem = _),
        (this.m_submenu = new _(this, _(), _, this.m_options.bForcePopup)),
        this.m_submenu.Show(),
        this.m_submenu);
  }
  CancelHideSubMenuTimer() {
    this.m_timerHideSubMenu > 0 &&
      (clearTimeout(this.m_timerHideSubMenu), (this.m_timerHideSubMenu = 0));
  }
  HideSubMenu() {
    if (!this.m_submenu) {
      this.CancelHideSubMenuTimer();
      return;
    }
    this.m_timerHideSubMenu > 0 ||
      (this.m_timerHideSubMenu = window.setTimeout(() => {
        this.InternalHideSubMenu(), (this.m_timerHideSubMenu = 0);
      }, 150));
  }
  OnSubMenuDismissed(_) {
    this.m_submenu == _ && this.InternalHideSubMenu();
  }
  HideSelf() {
    this.m_parentInstance
      ? this.m_parentInstance.OnSubMenuDismissed(this)
      : this.InternalHide();
  }
  InternalHideSubMenu() {
    this.CancelHideSubMenuTimer(),
      (this.m_submenu &&=
        (this.m_submenu.m_element &&
          this.BIsFocusInChildHierarchy() &&
          this.TakeFocus(_.k_EWindowBringToFrontAndForceOS),
        (this.m_elSubmenuItem = null),
        this.m_submenu.InternalHide(),
        void 0));
  }
  TakeFocus(_ = _.k_EWindowBringToFrontAndForceOS) {
    this.m_popupContextMenu && this.m_popupContextMenu.Focus(_),
      this.m_fnTakeFocus && this.m_fnTakeFocus();
  }
  BInternalElementInParentHierarchy(_) {
    return (
      this.m_parentInstance != null &&
      (this.m_parentInstance.BIsChildElement(_) ||
        this.m_parentInstance.BInternalElementInParentHierarchy(_))
    );
  }
  BInternalElementInChildHierarchy(_) {
    return (
      this.m_submenu != null &&
      (this.m_submenu.BIsChildElement(_) ||
        this.m_submenu.BInternalElementInChildHierarchy(_))
    );
  }
  BIsChildElement(_) {
    return this.m_element
      ? _(this.m_element, _)
      : _(this.m_popupContextMenu?.root_element, _);
  }
  BHasFocus() {
    return this.m_popupContextMenu
      ? this.m_popupContextMenu.focused
      : _(this.m_element, this.m_element?.ownerDocument.activeElement);
  }
  BIsFocusInChildHierarchy() {
    return (
      this.m_submenu != null &&
      (this.m_submenu.BHasFocus() || this.m_submenu.BIsFocusInChildHierarchy())
    );
  }
  BIsElementInMenuHierarchy(_) {
    return (
      this.BInternalElementInParentHierarchy(_) ||
      this.BInternalElementInChildHierarchy(_)
    );
  }
  BIsSubMenuVisible() {
    return !!this.m_submenu;
  }
  SetLabel(_) {
    this.m_rctLabel = _;
  }
};
_([_], _.prototype, `m_bVisible`, void 0),
  _([_.ref], _.prototype, `m_rctLabel`, void 0);
var _ = class extends _ {
    constructor(_, _, _, _, _, _) {
      super(_, _),
        (this.m_options = _ || {}),
        (this.m_position = {
          element: _,
          clientX: _,
          clientY: _,
          instance: this,
          options: this.m_options,
          fnOnMenuItemSelected: () => {
            this.Hide();
          },
        });
    }
    Show() {
      super.Show();
    }
    Hide(_ = 0) {
      super.Hide(_);
    }
    ForceHide() {
      super.ForceHide();
    }
    BIsSubMenu() {
      return !1;
    }
  },
  _ = class extends _ {
    constructor(_, _, _, _) {
      super(_.Manager, _),
        (this.m_parentInstance = _),
        (this.m_options = {
          bOverlapVertical: !0,
          strClassName: _.options.strClassName,
          bFitToWindow: _.options.bFitToWindow,
          bShiftToFitWindow: _.options.bShiftToFitWindow,
          bForcePopup: _,
        }),
        (this.m_position = {
          element: _,
          clientX: void 0,
          clientY: void 0,
          instance: this,
          options: this.m_options,
          fnOnMenuItemSelected: () => {
            this.Hide();
          },
          bSubmenu: !0,
        });
    }
    Hide() {
      this.m_popupContextMenu
        ? window.setTimeout(() => {
            this.m_parentInstance?.HideIfNotInFocus();
          }, 10)
        : this.m_parentInstance?.Hide();
    }
    ForceHide() {
      this.m_parentInstance?.ForceHide();
    }
    BIsSubMenu() {
      return !0;
    }
  },
  _ = class {
    m_callbacksMenusChanged = new _();
    m_ActiveMenu;
    m_rgActiveSubmenus = [];
    m_setHiddenMenus = new Set();
    constructor() {}
    CreateContextMenuInstance(_, _, _, _, _) {
      let _ = new _(this, _, _, _, _, _);
      return (
        _?.bCreateHidden &&
          (this.m_setHiddenMenus.add(_),
          this.m_callbacksMenusChanged.Dispatch()),
        _
      );
    }
    get OnMenusChanged() {
      return this.m_callbacksMenusChanged;
    }
    HideActiveMenu() {
      this.m_ActiveMenu?.options.bRetainOnHide
        ? this.m_setHiddenMenus.add(this.m_ActiveMenu)
        : this.m_rgActiveSubmenus.length && (this.m_rgActiveSubmenus = []),
        (this.m_ActiveMenu = void 0);
    }
    get ActiveMenu() {
      return this.m_ActiveMenu;
    }
    GetVisibleMenus() {
      return this.m_ActiveMenu
        ? [this.m_ActiveMenu, ...this.m_rgActiveSubmenus]
        : [];
    }
    GetHiddenMenus() {
      return Array.from(this.m_setHiddenMenus);
    }
    GetAllMenus() {
      let _;
      return (
        (_ = this.m_ActiveMenu
          ? [
              this.m_ActiveMenu,
              ...this.m_rgActiveSubmenus,
              ...Array.from(this.m_setHiddenMenus),
            ]
          : [...this.m_rgActiveSubmenus, ...Array.from(this.m_setHiddenMenus)]),
        _.sort((_, _) => _.key - _.key)
      );
    }
    BShouldRenderMouseOverlay() {
      return (
        this.m_ActiveMenu && !this.m_ActiveMenu.options.bDisableMouseOverlay
      );
    }
    ShowMenu(_) {
      if (_.BIsSubMenu()) this.m_rgActiveSubmenus.push(_);
      else {
        if (_ == this.m_ActiveMenu) return;
        this.m_ActiveMenu &&
          (this.m_ActiveMenu.options.bRetainOnHide &&
            this.m_setHiddenMenus.add(this.m_ActiveMenu),
          this.m_ActiveMenu.Hide()),
          (this.m_ActiveMenu = _),
          this.m_setHiddenMenus.delete(_);
      }
      this.m_callbacksMenusChanged.Dispatch();
    }
    HideMenu(_) {
      _.BIsSubMenu()
        ? _(this.m_rgActiveSubmenus, _) &&
          this.m_callbacksMenusChanged.Dispatch()
        : (_(_ == this.m_ActiveMenu, `Call to hide inactive menu`),
          _ == this.m_ActiveMenu &&
            (this.HideActiveMenu(), this.m_callbacksMenusChanged.Dispatch()));
    }
    ReleaseHiddenMenu(_) {
      this.m_setHiddenMenus.delete(_);
    }
  },
  _ = new (class {
    m_mapManagers = new WeakMap();
    GetContextMenuManagerFromWindow(_) {
      let _ = _?.ownerDocument?.defaultView || window;
      return this.GetContextMenuManager(_);
    }
    GetContextMenuManager(_) {
      let _ = this.m_mapManagers.get(_);
      if (!_) {
        let _ = _;
        for (; !_ && _.opener; )
          (_ = _.opener), (_ = this.m_mapManagers.get(_));
      }
      return _ || ((_ = new _()), this.m_mapManagers.set(_, _)), _;
    }
    SetMenuManager(_, _) {
      _(
        this.m_mapManagers.get(_) === void 0 || !_ || _ == window,
        `Stomping CContextMenuManager for ${_.document.title}!`,
      ),
        this.m_mapManagers.set(_, _);
    }
    RegisterChildWindow(_, _) {
      return (
        this.m_mapManagers.set(_, this.GetContextMenuManager(_)),
        () => this.m_mapManagers.delete(_)
      );
    }
  })();
function _(_, _, _) {
  let _,
    _,
    _,
    _ = _;
  if (_?.preventDefault && _?.stopPropagation) {
    if (_.shiftKey || (_.altKey && !_?.bRootContextMenu)) return null;
    _.preventDefault(),
      _.stopPropagation(),
      (_ = _.currentTarget),
      (_ = _.clientX),
      (_ = _.clientY);
  } else _ = _;
  let _ = _.GetContextMenuManagerFromWindow(_).CreateContextMenuInstance(
    _,
    _,
    _,
    _,
    _,
  );
  return _.Show(), _?.bCreateHidden && _.Hide(), _;
}
var _ = (_) =>
  (0, _.jsx)(_.Fragment, {
    children: _.condition ? _.wrap(_.children) : _.children,
  });
_(
  [_],
  class {
    m_Promise;
    m_Value = void 0;
    constructor(_) {
      _(this), (this.promise = _);
    }
    set promise(_) {
      (this.m_Promise = _),
        (this.m_Value = void 0),
        _?.then((_) => {
          this.m_Promise === _ && (this.m_Value = _);
        });
    }
    get promise() {
      return this.m_Promise;
    }
    get value() {
      return this.m_Value;
    }
  }.prototype,
  `m_Value`,
  void 0,
);
function _(_, _, _) {
  return _.forwardRef(function (_, _) {
    return (0, _.jsx)(`div`, {
      ..._,
      role: _,
      ..._,
      className: _(_, _.className),
      ref: _,
    });
  });
}
function _(_, _) {
  return Array.from(Array.from(Array(_ - _ + 1).keys()).map((_) => _ + _));
}
function _(_) {
  if (typeof _ != `string`) return NaN;
  let _ = !_.includes(`ms`) && _.includes(`s`),
    _ = Number.parseFloat(_);
  return _ && (_ *= 1e3), _;
}
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
};
