var _ = _(_());
if (!_.useState)
  throw Error(`mobx-react-lite requires React with Hooks support`);
if (!_)
  throw Error(
    `mobx-react-lite@3 requires mobx at least version 6 to be available`,
  );
var _ = _(_());
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
export { _, _, _, _ };
