var _ = function () {};
function _(_) {
  throw Error(`[mobx-utils] ` + _);
}
function _(_, _) {
  _ === void 0 && (_ = `Illegal state`), _ || _(_);
}
var _ = function (_) {
    return (
      _ &&
      _ !== Object.prototype &&
      Object.getOwnPropertyNames(_).concat(_(Object.getPrototypeOf(_)) || [])
    );
  },
  _ = function (_) {
    var _ = _(_);
    return _.filter(function (_, _) {
      return _.indexOf(_) === _;
    });
  },
  _ = function (_) {
    return _(_).filter(function (_) {
      return _ !== `constructor` && !~_.indexOf(`__`);
    });
  },
  _ = `pending`,
  _ = `fulfilled`,
  _ = `rejected`;
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
    (_(arguments.length <= 2, `fromPromise expects up to two arguments`),
    _(
      typeof _ == `function` ||
        (typeof _ == `object` && _ && typeof _.then == `function`),
      `Please pass a promise or function to fromPromise`,
    ),
    _.isPromiseBasedObservable === !0)
  )
    return _;
  typeof _ == `function` && (_ = new Promise(_));
  var _ = _;
  return (
    _.then(
      _(`observableFromPromise-resolve`, function (_) {
        (_.value = _), (_.state = _);
      }),
      _(`observableFromPromise-reject`, function (_) {
        (_.value = _), (_.state = _);
      }),
    ),
    (_.isPromiseBasedObservable = !0),
    (_.case = _),
    _(
      _,
      {
        value:
          _ && (_.state === `fulfilled` || _.state === `pending`)
            ? _.value
            : void 0,
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
  _.reject = _(`fromPromise.reject`, function (_) {
    var _ = _(Promise.reject(_));
    return (_.state = _), (_.value = _), _;
  });
  function _(_) {
    _ === void 0 && (_ = void 0);
    var _ = _(Promise.resolve(_));
    return (_.state = _), (_.value = _), _;
  }
  _.resolve = _(`fromPromise.resolve`, _);
})((_ ||= {}));
function _(_, _, _) {
  _ === void 0 && (_ = _), _ === void 0 && (_ = void 0);
  var _ = !1,
    _ = !1,
    _ = _,
    _ = function () {
      _ && ((_ = !1), _());
    },
    _ = _(
      `ResourceBasedObservable`,
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
      return (
        _(!_, `subscribingObservable has already been disposed`),
        !_.reportObserved() &&
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
  if (typeof Reflect == `object` && typeof Reflect.decorate == `function`)
    _ = Reflect.decorate(_, _, _, _);
  else
    for (var _ = _.length - 1; _ >= 0; _--)
      (_ = _[_]) && (_ = (_ < 3 ? _(_) : _ > 3 ? _(_, _, _) : _(_, _)) || _);
  return _ > 3 && _ && Object.defineProperty(_, _, _), _;
};
(function () {
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
    _([_.ref], _.prototype, `current`, void 0),
    _([_.bound], _.prototype, `next`, null),
    _([_.bound], _.prototype, `complete`, null),
    _([_.bound], _.prototype, `error`, null),
    _
  );
})();
var _ = function () {
    return (
      (_ =
        Object.assign ||
        function (_) {
          for (var _, _ = 1, _ = arguments.length; _ < _; _++)
            for (var _ in ((_ = arguments[_]), _))
              Object.prototype.hasOwnProperty.call(_, _) && (_[_] = _[_]);
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
    if (typeof Reflect == `object` && typeof Reflect.decorate == `function`)
      _ = Reflect.decorate(_, _, _, _);
    else
      for (var _ = _.length - 1; _ >= 0; _--)
        (_ = _[_]) && (_ = (_ < 3 ? _(_) : _ > 3 ? _(_, _, _) : _(_, _)) || _);
    return _ > 3 && _ && Object.defineProperty(_, _, _), _;
  },
  _ = [
    `model`,
    `reset`,
    `submit`,
    `isDirty`,
    `isPropertyDirty`,
    `resetProperty`,
  ];
(function () {
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
      _(_(_), `createViewModel expects an observable object`);
    var _ = _(this);
    _(_).forEach(function (_) {
      if (
        !_.includes(_) &&
        !(_ === _ || _ === `__mobxDidRunLazyInitializers`)
      ) {
        if (
          (_(
            _.indexOf(_) === -1,
            `The propertyname ` +
              _ +
              ` is reserved and cannot be used with viewModels`,
          ),
          _(_, _))
        ) {
          var _ = _(_, _),
            _ = _.derivation.bind(_),
            _ = _.setter_?.bind(_);
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
                : _ === _.model[_]
                  ? _.localValues.delete(_)
                  : _.localValues.set(_, _);
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
    _([_], _.prototype, `isDirty`, null),
    _([_], _.prototype, `changedValues`, null),
    _([_.bound], _.prototype, `submit`, null),
    _([_.bound], _.prototype, `reset`, null),
    _([_.bound], _.prototype, `resetProperty`, null),
    _
  );
})();
var _ = {};
function _(_) {
  return (
    _ === void 0 && (_ = 1e3),
    _()
      ? (_[_] || (typeof _ == `number` ? (_[_] = _(_)) : (_[_] = _())),
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
})();
(function (_) {
  _(_, _);
  function _(_, _, _) {
    var _ = _ === void 0 ? {} : _,
      _ = _.name,
      _ = _ === void 0 ? `ogm` + ((Math.random() * 1e3) | 0) : _,
      _ = _.keyToName,
      _ =
        _ === void 0
          ? function (_) {
              return `` + _;
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
      (_._ogmInfoKey = Symbol(`ogmInfo` + _)),
      (_._base = _);
    for (var _ = 0; _ < _.length; _++) _._addItem(_[_]);
    return (
      (_._disposeBaseObserver = _(_._base, function (_) {
        if (_.type === `splice`)
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
        else if (_.type === `update`)
          _(function () {
            _._removeItem(_.oldValue), _._addItem(_.newValue);
          });
        else throw Error(`illegal state`);
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
        throw Error(`not supported`);
      },
    }),
    Object.defineProperty(_.prototype, "delete", {
      enumerable: !1,
      configurable: !0,
      writable: !0,
      value: function (_) {
        throw Error(`not supported`);
      },
    }),
    Object.defineProperty(_.prototype, "set", {
      enumerable: !1,
      configurable: !0,
      writable: !0,
      value: function (_, _) {
        throw Error(`not supported`);
      },
    }),
    Object.defineProperty(_.prototype, "dispose", {
      enumerable: !1,
      configurable: !0,
      writable: !0,
      value: function () {
        this._disposeBaseObserver();
        for (var _ = 0; _ < this._base.length; _++) {
          var _ = this._base[_];
          _[this._ogmInfoKey].reaction(), delete _[this._ogmInfoKey];
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
              name: `GroupArray[` + this._keyToName(_) + `]`,
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
          : _ === _.length - 1
            ? _.length--
            : ((_[_] = _[_.length - 1]),
              (_[_][this._ogmInfoKey].groupArrIndex = _),
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
})(_);
var _ = (function () {
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
          throw Error(`Entry doesn't exist`);
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
          throw Error(`Entry doesn't exist`);
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
        if (this.isDisposed) throw Error(`Concurrent modification exception`);
      },
    }),
    _
  );
})();
(function () {
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
          throw Error(
            `DeepMap should be used with functions with a consistent length, expected: ` +
              this.argsLength +
              `, got: ` +
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
  _ =
    typeof _ == `boolean`
      ? {
          eSuffix: +!_,
          bForceSingleUnits: _,
          bHighGranularity: !1,
        }
      : {
          eSuffix: 1,
          bForceSingleUnits: !1,
          bHighGranularity: !1,
          ..._,
        };
  let _ = `#TimeInterval_`;
  _.eSuffix == 1
    ? (_ = `#TimeSince_`)
    : _.eSuffix == 2 && (_ = `#TimeRemaining_`);
  let _ = (_) => Math.floor(_);
  if (
    (_.bAllowDecimal && (_ = (_) => Math.round(_ * 10) / 10),
    _ >= _.PerYear * 2)
  )
    return _(_ + `XYears`, _(_ / _.PerYear));
  if (_ >= _.PerYear)
    return (
      (_ -= _.PerYear),
      _ >= _.PerMonth * 2 && !_.bForceSingleUnits
        ? _(_ + `1YearXMonths`, _(_ / _.PerMonth))
        : _(_ + `1Year`)
    );
  if (_ >= _.PerMonth * 2) return _(_ + `XMonths`, _(_ / _.PerMonth));
  if (_ >= _.PerWeek * 2) return _(_ + `XWeeks`, _(_ / _.PerWeek));
  if (_ >= _.PerWeek) return _(_ + `1Week`, _(_ / _.PerWeek));
  if (_ >= _.PerDay * 2) return _(_ + `XDays`, _(_ / _.PerDay));
  if (_ >= _.PerDay)
    return (
      (_ -= _.PerDay),
      _ >= _.PerHour * 2 && !_.bForceSingleUnits
        ? _(_ + `1DayXHours`, _(_ / _.PerHour))
        : _(_ + `1Day`)
    );
  if (_ >= _.PerHour * 2) return _(_ + `XHours`, _(_ / _.PerHour));
  if (_ >= _.PerHour)
    return (
      (_ -= _.PerHour),
      _ >= _.PerMinute * 2 && !_.bForceSingleUnits
        ? _(_ + `1HourXMinutes`, _(_ / _.PerMinute))
        : _(_ + `1Hour`)
    );
  if (_ >= _.PerMinute * 2) {
    let _ = Math.floor(_ / _.PerMinute),
      _ = _ % _.PerMinute;
    return !_.bHighGranularity || _ == 0
      ? _(_ + `XMinutes`, _(_ / _.PerMinute))
      : _ == 1
        ? _(_ + `XMinutes1Second`, _)
        : _(_ + `XMinutesXSeconds`, _, _);
  } else if (_ >= _.PerMinute) {
    let _ = _ % _.PerMinute;
    return !_.bHighGranularity || _ == 0
      ? _(_ + `1Minute`)
      : _ == 1
        ? _(_ + `1Minute1Second`)
        : _(_ + `1MinuteXSeconds`, _);
  } else
    return _.bHighGranularity
      ? _ == 1
        ? _(_ + `1Second`)
        : _(_ + `XSeconds`, _)
      : _(_ + `LessThanAMinute`);
}
function _(_, _, _) {
  let _;
  _ =
    _ === void 0 || _ === !0 || _ === !1
      ? {
          weekday: _ ? `long` : `short`,
          year: _ ? void 0 : `numeric`,
        }
      : _;
  let _ = new Date(_ * 1e3),
    _ = {
      weekday: `short`,
      month: `long`,
      day: `numeric`,
      year: `numeric`,
      ..._,
    };
  return _.toLocaleDateString(_.GetPreferredLocales(), _);
}
function _(_, _) {
  let _ = new Date(_ * 1e3),
    _ = {
      year: `numeric`,
      month: `short`,
      day: `numeric`,
      ..._,
    };
  return _.toLocaleDateString(_.GetPreferredLocales(), _);
}
var _ = new Map();
function _(_) {
  let _ = _.get(_);
  if (_ === !0 || _ === !1) return _;
  let _ = new Date();
  return (
    _.setHours(15),
    (_ =
      _.toLocaleTimeString(_, {
        hour: `numeric`,
      }) ==
      _.toLocaleTimeString(_, {
        hour: `numeric`,
        hour12: !1,
      })),
    _.set(_, _),
    _
  );
}
function _(_, _, _) {
  let _ = new Date(_ * 1e3),
    _ = {
      hour: `numeric`,
      minute: `2-digit`,
      hourCycle: `h23`,
    },
    _ = {
      hour: `numeric`,
      minute: `2-digit`,
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
      if ((_.setDate(_.getDate() + 1), _ < _)) return _(`#Time_Today`);
      if ((_.setDate(_.getDate() + 1), _ < _)) return _(`#Time_Tomorrow`);
    } else if ((_.setDate(_.getDate() - 1), _ >= _))
      return _(`#Time_Yesterday`);
  }
  let _ = {
    month: _ ? `long` : `short`,
    day: `numeric`,
  };
  _ && (_.weekday = `long`);
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
      year: `numeric`,
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
      month: `long`,
      year: `numeric`,
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
        _ ? `#Time_QuarterOfYear_Expanded_Q1` : `#Time_QuarterOfYear_Q1`,
        _.getUTCFullYear(),
      );
    case 3:
    case 4:
    case 5:
      return _(
        _ ? `#Time_QuarterOfYear_Expanded_Q2` : `#Time_QuarterOfYear_Q2`,
        _.getUTCFullYear(),
      );
    case 6:
    case 7:
    case 8:
      return _(
        _ ? `#Time_QuarterOfYear_Expanded_Q3` : `#Time_QuarterOfYear_Q3`,
        _.getUTCFullYear(),
      );
    default:
      return _(
        _ ? `#Time_QuarterOfYear_Expanded_Q4` : `#Time_QuarterOfYear_Q4`,
        _.getUTCFullYear(),
      );
  }
}
function _(_, _, _) {
  for (; _.length < _; ) _ = _ + _;
  return _;
}
function _(_) {
  return (
    (_ === void 0 || isNaN(_)) && (_ = 0),
    {
      hours: Math.floor(_ / 3600),
      minutes: Math.floor((_ % 3600) / 60),
      seconds: Math.floor(_ % 60),
      fraction: _ - Math.floor(_),
    }
  );
}
function _(_, _, _) {
  let _ = _ < 0;
  _ = _ ? 0 - _ : _;
  let _ = _(_),
    _ = _(_.seconds.toString(), 2, `0`),
    _ = _.fraction.toFixed(2).split(`.`)[1],
    _ = _ ?? !0,
    _ = !_ || _ == `00`;
  _ && _.hours == 0 && _.minutes == 0 && _.seconds == 0 && _ && (_ = !1);
  let _ = ``;
  if (_.hours) {
    let _ = _(_.minutes.toString(), 2, `0`);
    _ = _(
      _
        ? `#Duration_HourMinuteSecondMillisecond`
        : `#Duration_HourMinuteSecond`,
      _.hours,
      _,
      _,
      _,
    );
  } else {
    let _ = _.minutes.toString(),
      _ = _ ? `#Duration_MinuteSecondMillisecond` : `#Duration_MinuteSecond`;
    _ = _.Localize(_, _, _, _);
  }
  return _ && (_ = _ ? _.Localize(`#Duration_WrittenNegation`, _) : `-` + _), _;
}
var _ = _(_()),
  _ = class _ {
    m_mapTokens = new Map();
    m_mapFallbackTokens = new Map();
    m_cbkTokensChanged = new _();
    m_rgLocalesToUse;
    m_bReportIndividualMissingTokens = !0;
    m_bReady = !1;
    static GetLanguageFallback(_) {
      return _ === `sc_schinese` ? `schinese` : `english`;
    }
    static GetELanguageFallback(_) {
      return _ === 29 ? 6 : 0;
    }
    static IsELanguageValidInRealm(_, _) {
      return _ === (_ === 29 ? _.k_ESteamRealmChina : _.k_ESteamRealmGlobal);
    }
    static GetLanguageListForRealms(_) {
      let _ = [];
      for (let _ = 0; _ < 32; _++)
        for (let _ of _)
          if (this.IsELanguageValidInRealm(_, _)) {
            _.push(_);
            break;
          }
      return _;
    }
    InitFromObjects(_, _, _, _) {
      _ && (this.m_bReportIndividualMissingTokens = !1),
        _ || this.m_mapTokens.clear(),
        this.AddTokens(_, _ || {}),
        this.m_cbkTokensChanged.Dispatch();
    }
    InitDirect(_, _) {
      this.m_mapTokens.clear(),
        this.m_mapFallbackTokens.clear(),
        this.AddTokens(_, _),
        this.m_cbkTokensChanged.Dispatch();
    }
    SetReady(_) {
      this.m_bReady = _;
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
          : [`en-US`];
    }
    GetELanguageFallbackOrder(_ = null) {
      let _ = [];
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
      return !!_ && _.length > 0 && _.charAt(0) == `#`;
    }
    LocalizeIfToken(_, _) {
      return this.BLooksLikeToken(_) ? this.LocalizeString(_, _) : _;
    }
    LocalizeString(_, _) {
      if (!this.BLooksLikeToken(_)) return;
      let _ = this.m_mapTokens.get(_.substring(1));
      if (_ === void 0) {
        if (_.HasKey(_)) return _.Localize(_);
        this.m_mapTokens.size === 0
          ? _(
              !1,
              `Attempting to localize token '${_}' with no tokens in our map for language '${_.LANGUAGE}'. SharedLoc ready: ${_.IsReady()}. site has inited: ${this.m_bReady}`,
            )
          : !_ &&
            this.m_bReportIndividualMissingTokens &&
            _().ReportError(
              Error(
                `Unable to find localization token '${_}' for language '${_.LANGUAGE}', ${this.m_mapTokens.size} tokens in map. SharedLoc ready: ${_.IsReady()}. site has inited: ${this.m_bReady}`,
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
      if (!_ || _.length == 0 || _.charAt(0) != `#`) return;
      let _ = this.m_mapFallbackTokens.get(_.substring(1));
      if (_ !== void 0) return _;
    }
    static GetTokenWithFallback(_) {
      if (!_) return ``;
      let _ = _(_.LANGUAGE),
        _ = _.find((_) => _.language == _);
      if (_) return _.localized_string;
      let _ = _.GetELanguageFallback(_);
      return _.find((_) => _.language == _)?.localized_string ?? ``;
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
function _(_, ..._) {
  let _ = _.LocalizeIfToken(_);
  return _ === void 0 ? _ : _(_, ..._);
}
function _(_, ..._) {
  let _ = [],
    _ = new RegExp(/(.*?)<(\d+)>(.*?)<\/(\2)>/, `gs`),
    _ = 0,
    _;
  for (; (_ = _.exec(_)); ) {
    (_ += _[0].length), _.push(_[1]);
    let _ = parseInt(_[2]),
      _ = _[3] || ``,
      _ = _(_, ..._),
      _ =
        _ >= 1 && _ <= _.length && _[_ - 1]
          ? _.cloneElement(_[_ - 1], {}, _ ? _ : null)
          : _;
    _.push(_);
  }
  return _.push(_.substr(_)), _.createElement(_.Fragment, null, ..._);
}
function _(_, _, ..._) {
  return _(_ === 1 || _ === `1` ? _ : _ + `_Plural`, _, ..._);
}
function _(_, ..._) {
  return (
    _.length == 0 ||
      (_ = _.replace(/%(?:(\d+)\$)?s/g, function (_, _) {
        if (_ <= _.length && _ >= 1) {
          let _ = _[_ - 1];
          return String(_ ?? ``);
        }
        return _;
      })),
    _
  );
}
var _ = class _ {
    static Set(_, _, _) {
      if (((_ ||= _([], 32, null)), _.length <= _)) {
        if (_ >= 32) return _;
        _ = _(_, _ + 1, null);
      }
      return (_[_] = _), _;
    }
    static Get(_, _) {
      return (_ && _.length > _ && _[_]) || ``;
    }
    static GetWithFallback(_, _) {
      return _ ? _.Get(_, _) || _.Get(_, _.GetELanguageFallback(_)) : null;
    }
    static BHas(_, _) {
      return !!(_ && _.length > _ && _[_]);
    }
  },
  _ = {
    english: `en`,
    german: `de`,
    french: `fr`,
    italian: `it`,
    korean: `ko`,
    latam: `es-419`,
    spanish: `es`,
    schinese: `zh-cn`,
    tchinese: `zh-tw`,
    russian: `ru`,
    thai: `th`,
    japanese: `ja`,
    brazilian: `pt-br`,
    portuguese: `pt`,
    polish: `pl`,
    danish: `da`,
    dutch: `nl`,
    finnish: `fi`,
    norwegian: `no`,
    swedish: `sv`,
    hungarian: `hu`,
    czech: `cs`,
    romanian: `ro`,
    turkish: `tr`,
    arabic: `ar`,
    bulgarian: `bg`,
    greek: `el`,
    ukrainian: `uk`,
    vietnamese: `vi`,
    indonesian: `id`,
    malay: `ms`,
    sc_schinese: `zh-cn`,
    koreana: `ko`,
  },
  _ = {
    _: 0,
    "en-US": 0,
    _: 1,
    "de-DE": 1,
    _: 2,
    "fr-FR": 2,
    _: 3,
    "it-IT": 3,
    _: 4,
    "ko-KR": 4,
    _: 5,
    "es-ES": 5,
    "zh-cn": 6,
    "zh-CN": 6,
    "zh-tw": 7,
    "zh-TW": 7,
    _: 8,
    "ru-RU": 8,
    _: 9,
    "th-TH": 9,
    _: 10,
    "ja-JP": 10,
    _: 11,
    "pt-PT": 11,
    _: 12,
    "pl-PL": 12,
    _: 13,
    "da-DK": 13,
    _: 14,
    "nl-NL": 14,
    _: 15,
    "fi-FI": 15,
    _: 16,
    "nb-NO": 16,
    _: 17,
    "sv-SE": 17,
    _: 18,
    "hu-HU": 18,
    _: 19,
    "cs-CZ": 19,
    _: 20,
    "ro-RO": 20,
    _: 21,
    "tr-TR": 21,
    "pt-BR": 22,
    _: 23,
    "bg-BG": 23,
    _: 24,
    "el-GR": 24,
    _: 25,
    "ar-SA": 25,
    _: 26,
    "uk-UA": 26,
    "es-419": 27,
    _: 28,
    "vi-VN": 28,
    _: 30,
    "id-ID": 30,
    _: 30,
    "ms-MY": 30,
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
          console.error(`Failed to load localization file: ` + _),
            (_[_] = {}),
            _--,
            _ == 0 && _(_);
        });
    }),
    _
  );
}
function _(_) {
  return (
    typeof _ == `number` && (_ = _(_)),
    _ === `none` ? `None` : _(`#language_selection_${_}`)
  );
}
var _ = new _();
window.LocalizationManager = _;
export { _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _ };
