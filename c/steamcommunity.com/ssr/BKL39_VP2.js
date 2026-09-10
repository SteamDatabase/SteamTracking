var _ = _(_());
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
export { _ };
