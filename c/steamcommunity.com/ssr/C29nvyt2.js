var _ = (_) => null;
_.displayName = `Cell`;
var _ = _((_) => {
    Object.defineProperty(_, Symbol.toStringTag, {
      value: `Module`,
    });
    function _(_) {
      if (typeof _ != `object` || !_) return !1;
      if (Object.getPrototypeOf(_) === null) return !0;
      if (Object.prototype.toString.call(_) !== `[object Object]`) {
        let _ = _[Symbol.toStringTag];
        return _ == null ||
          !Object.getOwnPropertyDescriptor(_, Symbol.toStringTag)?.writable
          ? !1
          : _.toString() === `[object ${_}]`;
      }
      let _ = _;
      for (; Object.getPrototypeOf(_) !== null; ) _ = Object.getPrototypeOf(_);
      return Object.getPrototypeOf(_) === _;
    }
    _.isPlainObject = _;
  }),
  _ = _((_, _) => {
    _.exports = _().isPlainObject;
  }),
  _ = _(_());
function _(_, _) {
  var _ = Object.keys(_);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(_);
    _ &&
      (_ = _.filter(function (_) {
        return Object.getOwnPropertyDescriptor(_, _).enumerable;
      })),
      _.push.apply(_, _);
  }
  return _;
}
function _(_) {
  for (var _ = 1; _ < arguments.length; _++) {
    var _ = arguments[_] == null ? {} : arguments[_];
    _ % 2
      ? _(Object(_), !0).forEach(function (_) {
          _(_, _, _[_]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(_))
        : _(Object(_)).forEach(function (_) {
            Object.defineProperty(_, _, Object.getOwnPropertyDescriptor(_, _));
          });
  }
  return _;
}
function _(_, _, _) {
  return (
    (_ = _(_)) in _
      ? Object.defineProperty(_, _, {
          value: _,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (_[_] = _),
    _
  );
}
function _(_) {
  var _ = _(_, `string`);
  return typeof _ == `symbol` ? _ : _ + ``;
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
var _ = (_, _, _, _, _) => {
    var _ = _ - _,
      _ = `M ${_},${_}`;
    return (
      (_ += `L ${_ + _},${_}`),
      (_ += `L ${_ + _ - _ / 2},${_ + _}`),
      (_ += `L ${_ + _ - _ / 2 - _},${_ + _}`),
      (_ += `L ${_},${_} Z`),
      _
    );
  },
  _ = {
    _: 0,
    _: 0,
    upperWidth: 0,
    lowerWidth: 0,
    height: 0,
    isUpdateAnimationActive: !1,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: `ease`,
  },
  _ = (_) => {
    var _ = _(_, _),
      { _: _, _: _, upperWidth: _, lowerWidth: _, height: _, className: _ } = _,
      {
        animationEasing: _,
        animationDuration: _,
        animationBegin: _,
        isUpdateAnimationActive: _,
      } = _,
      _ = (0, _.useRef)(null),
      [_, _] = (0, _.useState)(-1),
      _ = (0, _.useRef)(_),
      _ = (0, _.useRef)(_),
      _ = (0, _.useRef)(_),
      _ = (0, _.useRef)(_),
      _ = (0, _.useRef)(_),
      _ = _(_, `trapezoid-`);
    if (
      ((0, _.useEffect)(() => {
        if (_.current && _.current.getTotalLength)
          try {
            var _ = _.current.getTotalLength();
            _ && _(_);
          } catch {}
      }, []),
      _ !== +_ ||
        _ !== +_ ||
        _ !== +_ ||
        _ !== +_ ||
        _ !== +_ ||
        (_ === 0 && _ === 0) ||
        _ === 0)
    )
      return null;
    var _ = _(`recharts-trapezoid`, _);
    if (!_)
      return _.createElement(
        `g`,
        null,
        _.createElement(
          `path`,
          _({}, _(_), {
            className: _,
            _: _(_, _, _, _, _),
          }),
        ),
      );
    var _ = _.current,
      _ = _.current,
      _ = _.current,
      _ = _.current,
      _ = _.current,
      _ = `0px ${_ === -1 ? 1 : _}px`,
      _ = `${_}px 0px`,
      _ = _([`strokeDasharray`], _, _);
    return _.createElement(
      _,
      {
        animationId: _,
        key: _,
        canBegin: _ > 0,
        duration: _,
        easing: _,
        isActive: _,
        begin: _,
      },
      (_) => {
        var _ = _(_, _, _),
          _ = _(_, _, _),
          _ = _(_, _, _),
          _ = _(_, _, _),
          _ = _(_, _, _);
        _.current &&
          ((_.current = _),
          (_.current = _),
          (_.current = _),
          (_.current = _),
          (_.current = _));
        var _ =
          _ > 0
            ? {
                transition: _,
                strokeDasharray: _,
              }
            : {
                strokeDasharray: _,
              };
        return _.createElement(
          `path`,
          _({}, _(_), {
            className: _,
            _: _(_, _, _, _, _),
            ref: _,
            style: _(_({}, _), _.style),
          }),
        );
      },
    );
  },
  _ = _(_()),
  _ = [`option`, `shapeType`, `propTransformer`, `activeClassName`, `isActive`];
function _(_, _) {
  if (_ == null) return {};
  var _,
    _,
    _ = _(_, _);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(_);
    for (_ = 0; _ < _.length; _++)
      (_ = _[_]),
        _.indexOf(_) === -1 &&
          {}.propertyIsEnumerable.call(_, _) &&
          (_[_] = _[_]);
  }
  return _;
}
function _(_, _) {
  if (_ == null) return {};
  var _ = {};
  for (var _ in _)
    if ({}.hasOwnProperty.call(_, _)) {
      if (_.indexOf(_) !== -1) continue;
      _[_] = _[_];
    }
  return _;
}
function _(_, _) {
  var _ = Object.keys(_);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(_);
    _ &&
      (_ = _.filter(function (_) {
        return Object.getOwnPropertyDescriptor(_, _).enumerable;
      })),
      _.push.apply(_, _);
  }
  return _;
}
function _(_) {
  for (var _ = 1; _ < arguments.length; _++) {
    var _ = arguments[_] == null ? {} : arguments[_];
    _ % 2
      ? _(Object(_), !0).forEach(function (_) {
          _(_, _, _[_]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(_))
        : _(Object(_)).forEach(function (_) {
            Object.defineProperty(_, _, Object.getOwnPropertyDescriptor(_, _));
          });
  }
  return _;
}
function _(_, _, _) {
  return (
    (_ = _(_)) in _
      ? Object.defineProperty(_, _, {
          value: _,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (_[_] = _),
    _
  );
}
function _(_) {
  var _ = _(_, `string`);
  return typeof _ == `symbol` ? _ : _ + ``;
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
function _(_, _) {
  return _(_({}, _), _);
}
function _(_, _) {
  return _ === `symbols`;
}
function _(_) {
  var { shapeType: _, elementProps: _ } = _;
  switch (_) {
    case `rectangle`:
      return _.createElement(_, _);
    case `trapezoid`:
      return _.createElement(_, _);
    case `sector`:
      return _.createElement(_, _);
    case `symbols`:
      if (_(_, _)) return _.createElement(_, _);
      break;
    default:
      return null;
  }
}
function _(_) {
  return (0, _.isValidElement)(_) ? _.props : _;
}
function _(_) {
  var {
      option: _,
      shapeType: _,
      propTransformer: _ = _,
      activeClassName: _ = `recharts-active-shape`,
      isActive: _,
    } = _,
    _ = _(_, _),
    _;
  if ((0, _.isValidElement)(_)) _ = (0, _.cloneElement)(_, _(_({}, _), _(_)));
  else if (typeof _ == `function`) _ = _(_);
  else if ((0, _.default)(_) && typeof _ != `boolean`) {
    var _ = _(_, _);
    _ = _.createElement(_, {
      shapeType: _,
      elementProps: _,
    });
  } else {
    var _ = _;
    _ = _.createElement(_, {
      shapeType: _,
      elementProps: _,
    });
  }
  return _
    ? _.createElement(
        _,
        {
          className: _,
        },
        _,
      )
    : _;
}
var _ = (_, _) => {
    var _ = _();
    return (_, _) => (_) => {
      _?.(_, _, _),
        _(
          _({
            activeIndex: String(_),
            activeDataKey: _,
            activeCoordinate: _.tooltipPosition,
          }),
        );
    };
  },
  _ = (_) => {
    var _ = _();
    return (_, _) => (_) => {
      _?.(_, _, _), _(_());
    };
  },
  _ = (_, _) => {
    var _ = _();
    return (_, _) => (_) => {
      _?.(_, _, _),
        _(
          _({
            activeIndex: String(_),
            activeDataKey: _,
            activeCoordinate: _.tooltipPosition,
          }),
        );
    };
  },
  _ = [`x`, `y`];
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
  var _ = Object.keys(_);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(_);
    _ &&
      (_ = _.filter(function (_) {
        return Object.getOwnPropertyDescriptor(_, _).enumerable;
      })),
      _.push.apply(_, _);
  }
  return _;
}
function _(_) {
  for (var _ = 1; _ < arguments.length; _++) {
    var _ = arguments[_] == null ? {} : arguments[_];
    _ % 2
      ? _(Object(_), !0).forEach(function (_) {
          _(_, _, _[_]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(_))
        : _(Object(_)).forEach(function (_) {
            Object.defineProperty(_, _, Object.getOwnPropertyDescriptor(_, _));
          });
  }
  return _;
}
function _(_, _, _) {
  return (
    (_ = _(_)) in _
      ? Object.defineProperty(_, _, {
          value: _,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (_[_] = _),
    _
  );
}
function _(_) {
  var _ = _(_, `string`);
  return typeof _ == `symbol` ? _ : _ + ``;
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
function _(_, _) {
  if (_ == null) return {};
  var _,
    _,
    _ = _(_, _);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(_);
    for (_ = 0; _ < _.length; _++)
      (_ = _[_]),
        _.indexOf(_) === -1 &&
          {}.propertyIsEnumerable.call(_, _) &&
          (_[_] = _[_]);
  }
  return _;
}
function _(_, _) {
  if (_ == null) return {};
  var _ = {};
  for (var _ in _)
    if ({}.hasOwnProperty.call(_, _)) {
      if (_.indexOf(_) !== -1) continue;
      _[_] = _[_];
    }
  return _;
}
function _(_, _) {
  var { _: _, _: _ } = _,
    _ = _(_, _),
    _ = `${_}`,
    _ = parseInt(_, 10),
    _ = `${_}`,
    _ = parseInt(_, 10),
    _ = `${_.height || _.height}`,
    _ = parseInt(_, 10),
    _ = `${_.width || _.width}`,
    _ = parseInt(_, 10);
  return _(
    _(
      _(
        _(_({}, _), _),
        _
          ? {
              _: _,
            }
          : {},
      ),
      _
        ? {
            _: _,
          }
        : {},
    ),
    {},
    {
      height: _,
      width: _,
      name: _.name,
      radius: _.radius,
    },
  );
}
function _(_) {
  return _.createElement(
    _,
    _(
      {
        shapeType: `rectangle`,
        propTransformer: _,
        activeClassName: `recharts-active-bar`,
      },
      _,
    ),
  );
}
var _ = function (_) {
    var _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return (_, _) => {
      if (_(_)) return _;
      var _ = _(_) || _(_);
      return _ ? _(_, _) : (!_ && _(!1), _);
    };
  },
  _ = [`onMouseEnter`, `onMouseLeave`, `onClick`],
  _ = [`value`, `background`, `tooltipPosition`],
  _ = [`id`],
  _ = [`onMouseEnter`, `onClick`, `onMouseLeave`];
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
  var _ = Object.keys(_);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(_);
    _ &&
      (_ = _.filter(function (_) {
        return Object.getOwnPropertyDescriptor(_, _).enumerable;
      })),
      _.push.apply(_, _);
  }
  return _;
}
function _(_) {
  for (var _ = 1; _ < arguments.length; _++) {
    var _ = arguments[_] == null ? {} : arguments[_];
    _ % 2
      ? _(Object(_), !0).forEach(function (_) {
          _(_, _, _[_]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(_))
        : _(Object(_)).forEach(function (_) {
            Object.defineProperty(_, _, Object.getOwnPropertyDescriptor(_, _));
          });
  }
  return _;
}
function _(_, _, _) {
  return (
    (_ = _(_)) in _
      ? Object.defineProperty(_, _, {
          value: _,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (_[_] = _),
    _
  );
}
function _(_) {
  var _ = _(_, `string`);
  return typeof _ == `symbol` ? _ : _ + ``;
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
function _(_, _) {
  if (_ == null) return {};
  var _,
    _,
    _ = _(_, _);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(_);
    for (_ = 0; _ < _.length; _++)
      (_ = _[_]),
        _.indexOf(_) === -1 &&
          {}.propertyIsEnumerable.call(_, _) &&
          (_[_] = _[_]);
  }
  return _;
}
function _(_, _) {
  if (_ == null) return {};
  var _ = {};
  for (var _ in _)
    if ({}.hasOwnProperty.call(_, _)) {
      if (_.indexOf(_) !== -1) continue;
      _[_] = _[_];
    }
  return _;
}
var _ = (_) => {
  var { dataKey: _, name: _, fill: _, legendType: _, hide: _ } = _;
  return [
    {
      inactive: _,
      dataKey: _,
      type: _,
      color: _,
      value: _(_, _),
      payload: _,
    },
  ];
};
function _(_) {
  var {
    dataKey: _,
    stroke: _,
    strokeWidth: _,
    fill: _,
    name: _,
    hide: _,
    unit: _,
  } = _;
  return {
    dataDefinedOnItem: void 0,
    positions: void 0,
    settings: {
      stroke: _,
      strokeWidth: _,
      fill: _,
      dataKey: _,
      nameKey: void 0,
      name: _(_, _),
      hide: _,
      type: _.tooltipType,
      color: _.fill,
      unit: _,
    },
  };
}
function _(_) {
  var _ = _(_),
    { data: _, dataKey: _, background: _, allOtherBarProps: _ } = _,
    { onMouseEnter: _, onMouseLeave: _, onClick: _ } = _,
    _ = _(_, _),
    _ = _(_, _),
    _ = _(_),
    _ = _(_, _);
  if (!_ || _ == null) return null;
  var _ = _(_);
  return _.createElement(
    _.Fragment,
    null,
    _.map((_, _) => {
      var { value: _, background: _, tooltipPosition: _ } = _,
        _ = _(_, _);
      if (!_) return null;
      var _ = _(_, _),
        _ = _(_, _),
        _ = _(_, _),
        _ = _(
          _(
            _(
              _(
                _(
                  {
                    option: _,
                    isActive: String(_) === _,
                  },
                  _,
                ),
                {},
                {
                  fill: `#eee`,
                },
                _,
              ),
              _,
            ),
            _(_, _, _),
          ),
          {},
          {
            onMouseEnter: _,
            onMouseLeave: _,
            onClick: _,
            dataKey: _,
            index: _,
            className: `recharts-bar-background-rectangle`,
          },
        );
      return _.createElement(
        _,
        _(
          {
            key: `background-bar-${_}`,
          },
          _,
        ),
      );
    }),
  );
}
function _(_) {
  var { showLabels: _, children: _, rects: _ } = _,
    _ = _?.map((_) => {
      var _ = {
        _: _._,
        _: _._,
        width: _.width,
        height: _.height,
      };
      return _(
        _({}, _),
        {},
        {
          value: _.value,
          payload: _.payload,
          parentViewBox: _.parentViewBox,
          viewBox: _,
          fill: _.fill,
        },
      );
    });
  return _.createElement(
    _,
    {
      value: _ ? _ : void 0,
    },
    _,
  );
}
function _(_) {
  var {
      shape: _,
      activeBar: _,
      baseProps: _,
      entry: _,
      index: _,
      dataKey: _,
    } = _,
    _ = _(_),
    _ = _(_),
    _ = _ && String(_) === _ && (_ == null || _ === _),
    _ = _ ? _ : _;
  return _.createElement(
    _,
    _(
      {},
      _,
      {
        name: String(_.name),
      },
      _,
      {
        isActive: _,
        option: _,
        index: _,
        dataKey: _,
      },
    ),
  );
}
function _(_) {
  var { shape: _, baseProps: _, entry: _, index: _, dataKey: _ } = _;
  return _.createElement(
    _,
    _(
      {},
      _,
      {
        name: String(_.name),
      },
      _,
      {
        isActive: !1,
        option: _,
        index: _,
        dataKey: _,
      },
    ),
  );
}
function _(_) {
  var { data: _, props: _ } = _,
    _ = _(_),
    { _: _ } = _,
    _ = _(_, _),
    { shape: _, dataKey: _, activeBar: _ } = _,
    { onMouseEnter: _, onClick: _, onMouseLeave: _ } = _,
    _ = _(_, _),
    _ = _(_, _),
    _ = _(_),
    _ = _(_, _);
  return _
    ? _.createElement(
        _.Fragment,
        null,
        _.map((_, _) =>
          _.createElement(
            _,
            _(
              {
                key: `rectangle-${_?._}-${_?._}-${_?.value}-${_}`,
                className: `recharts-bar-rectangle`,
              },
              _(_, _, _),
              {
                onMouseEnter: _(_, _),
                onMouseLeave: _(_, _),
                onClick: _(_, _),
              },
            ),
            _
              ? _.createElement(_, {
                  shape: _,
                  activeBar: _,
                  baseProps: _,
                  entry: _,
                  index: _,
                  dataKey: _,
                })
              : _.createElement(_, {
                  shape: _,
                  baseProps: _,
                  entry: _,
                  index: _,
                  dataKey: _,
                }),
          ),
        ),
      )
    : null;
}
function _(_) {
  var { props: _, previousRectanglesRef: _ } = _,
    {
      data: _,
      layout: _,
      isAnimationActive: _,
      animationBegin: _,
      animationDuration: _,
      animationEasing: _,
      onAnimationEnd: _,
      onAnimationStart: _,
    } = _,
    _ = _.current,
    _ = _(_, `recharts-bar-`),
    [_, _] = (0, _.useState)(!1),
    _ = !_,
    _ = (0, _.useCallback)(() => {
      typeof _ == `function` && _(), _(!1);
    }, [_]),
    _ = (0, _.useCallback)(() => {
      typeof _ == `function` && _(), _(!0);
    }, [_]);
  return _.createElement(
    _,
    {
      showLabels: _,
      rects: _,
    },
    _.createElement(
      _,
      {
        animationId: _,
        begin: _,
        duration: _,
        isActive: _,
        easing: _,
        onAnimationEnd: _,
        onAnimationStart: _,
        key: _,
      },
      (_) => {
        var _ =
          _ === 1
            ? _
            : _?.map((_, _) => {
                var _ = _ && _[_];
                if (_)
                  return _(
                    _({}, _),
                    {},
                    {
                      _: _(_._, _._, _),
                      _: _(_._, _._, _),
                      width: _(_.width, _.width, _),
                      height: _(_.height, _.height, _),
                    },
                  );
                if (_ === `horizontal`) {
                  var _ = _(0, _.height, _);
                  return _(
                    _({}, _),
                    {},
                    {
                      _: _._ + _.height - _,
                      height: _,
                    },
                  );
                }
                var _ = _(0, _.width, _);
                return _(
                  _({}, _),
                  {},
                  {
                    width: _,
                  },
                );
              });
        return (
          _ > 0 && (_.current = _ ?? null),
          _ == null
            ? null
            : _.createElement(
                _,
                null,
                _.createElement(_, {
                  props: _,
                  data: _,
                }),
              )
        );
      },
    ),
    _.createElement(_, {
      label: _.label,
    }),
    _.children,
  );
}
function _(_) {
  var _ = (0, _.useRef)(null);
  return _.createElement(_, {
    previousRectanglesRef: _,
    props: _,
  });
}
var _ = 0,
  _ = (_, _) => {
    var _ = Array.isArray(_.value) ? _.value[1] : _.value;
    return {
      _: _._,
      _: _._,
      value: _,
      errorVal: _(_, _),
    };
  },
  _ = class extends _.PureComponent {
    render() {
      var {
        hide: _,
        data: _,
        dataKey: _,
        className: _,
        xAxisId: _,
        yAxisId: _,
        needClip: _,
        background: _,
        _: _,
      } = this.props;
      if (_ || _ == null) return null;
      var _ = _(`recharts-bar`, _),
        _ = _;
      return _.createElement(
        _,
        {
          className: _,
          _: _,
        },
        _ &&
          _.createElement(
            `defs`,
            null,
            _.createElement(_, {
              clipPathId: _,
              xAxisId: _,
              yAxisId: _,
            }),
          ),
        _.createElement(
          _,
          {
            className: `recharts-bar-rectangles`,
            clipPath: _ ? `url(#clipPath-${_})` : void 0,
          },
          _.createElement(_, {
            data: _,
            dataKey: _,
            background: _,
            allOtherBarProps: this.props,
          }),
          _.createElement(_, this.props),
        ),
      );
    }
  },
  _ = {
    activeBar: !1,
    animationBegin: 0,
    animationDuration: 400,
    animationEasing: `ease`,
    hide: !1,
    isAnimationActive: !_.isSsr,
    legendType: `rect`,
    minPointSize: _,
    xAxisId: 0,
    yAxisId: 0,
  };
function _(_) {
  var {
      xAxisId: _,
      yAxisId: _,
      hide: _,
      legendType: _,
      minPointSize: _,
      activeBar: _,
      animationBegin: _,
      animationDuration: _,
      animationEasing: _,
      isAnimationActive: _,
    } = _,
    { needClip: _ } = _(_, _),
    _ = _(),
    _ = _(),
    _ = _(_.children, _),
    _ = _((_) => _(_, _, _, _, _._, _));
  if (_ !== `vertical` && _ !== `horizontal`) return null;
  var _,
    _ = _?.[0];
  return (
    (_ =
      _ == null || _.height == null || _.width == null
        ? 0
        : _ === `vertical`
          ? _.height / 2
          : _.width / 2),
    _.createElement(
      _,
      {
        xAxisId: _,
        yAxisId: _,
        data: _,
        dataPointFormatter: _,
        errorBarOffset: _,
      },
      _.createElement(
        _,
        _({}, _, {
          layout: _,
          needClip: _,
          data: _,
          xAxisId: _,
          yAxisId: _,
          hide: _,
          legendType: _,
          minPointSize: _,
          activeBar: _,
          animationBegin: _,
          animationDuration: _,
          animationEasing: _,
          isAnimationActive: _,
        }),
      ),
    )
  );
}
function _(_) {
  var {
      layout: _,
      barSettings: { dataKey: _, minPointSize: _ },
      pos: _,
      bandSize: _,
      xAxis: _,
      yAxis: _,
      xAxisTicks: _,
      yAxisTicks: _,
      stackedData: _,
      displayedData: _,
      offset: _,
      cells: _,
      parentViewBox: _,
    } = _,
    _ = _ === `horizontal` ? _ : _,
    _ = _ ? _.scale.domain() : null,
    _ = _({
      numericAxis: _,
    });
  return _.map((_, _) => {
    var _, _, _, _, _, _;
    _ ? (_ = _(_[_], _)) : ((_ = _(_, _)), Array.isArray(_) || (_ = [_, _]));
    var _ = _(_, _)(_[1], _);
    if (_ === `horizontal`) {
      var [_, _] = [_.scale(_[0]), _.scale(_[1])];
      (_ = _({
        axis: _,
        ticks: _,
        bandSize: _,
        offset: _.offset,
        entry: _,
        index: _,
      })),
        (_ = _ ?? _ ?? void 0),
        (_ = _.size);
      var _ = _ - _;
      if (
        ((_ = _(_) ? 0 : _),
        (_ = {
          _: _,
          _: _.top,
          width: _,
          height: _.height,
        }),
        Math.abs(_) > 0 && Math.abs(_) < Math.abs(_))
      ) {
        var _ = _(_ || _) * (Math.abs(_) - Math.abs(_));
        (_ -= _), (_ += _);
      }
    } else {
      var [_, _] = [_.scale(_[0]), _.scale(_[1])];
      if (
        ((_ = _),
        (_ = _({
          axis: _,
          ticks: _,
          bandSize: _,
          offset: _.offset,
          entry: _,
          index: _,
        })),
        (_ = _ - _),
        (_ = _.size),
        (_ = {
          _: _.left,
          _: _,
          width: _.width,
          height: _,
        }),
        Math.abs(_) > 0 && Math.abs(_) < Math.abs(_))
      ) {
        var _ = _(_ || _) * (Math.abs(_) - Math.abs(_));
        _ += _;
      }
    }
    return _ == null || _ == null || _ == null || _ == null
      ? null
      : _(
          _({}, _),
          {},
          {
            _: _,
            _: _,
            width: _,
            height: _,
            value: _ ? _ : _[1],
            payload: _,
            background: _,
            tooltipPosition: {
              _: _ + _ / 2,
              _: _ + _ / 2,
            },
            parentViewBox: _,
          },
          _ && _[_] && _[_].props,
        );
  }).filter(Boolean);
}
function _(_) {
  var _ = _(_, _),
    _ = _();
  return _.createElement(
    _,
    {
      _: _._,
      type: `bar`,
    },
    (_) =>
      _.createElement(
        _.Fragment,
        null,
        _.createElement(_, {
          legendPayload: _(_),
        }),
        _.createElement(_, {
          _: _,
          args: _,
        }),
        _.createElement(_, {
          type: `bar`,
          _: _,
          data: void 0,
          xAxisId: _.xAxisId,
          yAxisId: _.yAxisId,
          zAxisId: 0,
          dataKey: _.dataKey,
          stackId: _(_.stackId),
          hide: _.hide,
          barSize: _.barSize,
          minPointSize: _.minPointSize,
          maxBarSize: _.maxBarSize,
          isPanorama: _,
        }),
        _.createElement(
          _,
          _({}, _, {
            _: _,
          }),
        ),
      ),
  );
}
var _ = _.memo(_);
_.displayName = `Bar`;
function _(_, _) {
  var _ = Object.keys(_);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(_);
    _ &&
      (_ = _.filter(function (_) {
        return Object.getOwnPropertyDescriptor(_, _).enumerable;
      })),
      _.push.apply(_, _);
  }
  return _;
}
function _(_) {
  for (var _ = 1; _ < arguments.length; _++) {
    var _ = arguments[_] == null ? {} : arguments[_];
    _ % 2
      ? _(Object(_), !0).forEach(function (_) {
          _(_, _, _[_]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(_))
        : _(Object(_)).forEach(function (_) {
            Object.defineProperty(_, _, Object.getOwnPropertyDescriptor(_, _));
          });
  }
  return _;
}
function _(_, _, _) {
  return (
    (_ = _(_)) in _
      ? Object.defineProperty(_, _, {
          value: _,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (_[_] = _),
    _
  );
}
function _(_) {
  var _ = _(_, `string`);
  return typeof _ == `symbol` ? _ : _ + ``;
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
var _ = (_, _) => _,
  _ = (_, _, _) => _,
  _ = (_, _, _, _) => _,
  _ = _([_, (_, _, _, _, _) => _], (_, _) =>
    _.filter((_) => _.type === `bar`).find((_) => _._ === _),
  ),
  _ = _([_], (_) => _?.maxBarSize),
  _ = (_, _, _, _, _, _) => _,
  _ = (_, _, _) => {
    var _ = _ ?? _;
    if (!_(_)) return _(_, _, 0);
  },
  _ = _([_, _, _, _, _], (_, _, _, _, _) =>
    _.filter((_) => (_ === `horizontal` ? _.xAxisId === _ : _.yAxisId === _))
      .filter((_) => _.isPanorama === _)
      .filter((_) => _.hide === !1)
      .filter((_) => _.type === `bar`),
  ),
  _ = (_, _, _, _) =>
    _(_) === `horizontal` ? _(_, `yAxis`, _, _) : _(_, `xAxis`, _, _),
  _ = _(
    [
      _,
      _,
      (_, _, _) =>
        _(_) === `horizontal` ? _(_, `xAxis`, _) : _(_, `yAxis`, _),
    ],
    (_, _, _) => {
      var _ = {},
        _ = _.filter(_),
        _ = _.filter((_) => _.stackId == null),
        _ = _.reduce(
          (_, _) => (
            _[_.stackId] || (_[_.stackId] = []), _[_.stackId].push(_), _
          ),
          _,
        ),
        _ = Object.entries(_).map((_) => {
          var [_, _] = _;
          return {
            stackId: _,
            dataKeys: _.map((_) => _.dataKey),
            barSize: _(_, _, _[0].barSize),
          };
        }),
        _ = _.map((_) => ({
          stackId: void 0,
          dataKeys: [_.dataKey].filter((_) => _ != null),
          barSize: _(_, _, _.barSize),
        }));
      return [..._, ..._];
    },
  ),
  _ = (_, _, _, _, _) => {
    var _ = _(_, _, _, _, _);
    if (_ != null) {
      var _ = _(_),
        _ = _(_),
        { maxBarSize: _ } = _,
        _ = _(_) ? _ : _,
        _,
        _;
      return (
        _ === `horizontal`
          ? ((_ = _(_, `xAxis`, _, _)), (_ = _(_, `xAxis`, _, _)))
          : ((_ = _(_, `yAxis`, _, _)), (_ = _(_, `yAxis`, _, _))),
        _(_, _, !0) ?? _ ?? 0
      );
    }
  },
  _ = (_, _, _, _) => {
    var _ = _(_),
      _,
      _;
    return (
      _ === `horizontal`
        ? ((_ = _(_, `xAxis`, _, _)), (_ = _(_, `xAxis`, _, _)))
        : ((_ = _(_, `yAxis`, _, _)), (_ = _(_, `yAxis`, _, _))),
      _(_, _)
    );
  };
function _(_, _, _, _, _) {
  var _ = _.length;
  if (!(_ < 1)) {
    var _ = _(_, _, 0, !0),
      _,
      _ = [];
    if (_(_[0].barSize)) {
      var _ = !1,
        _ = _ / _,
        _ = _.reduce((_, _) => _ + (_.barSize || 0), 0);
      (_ += (_ - 1) * _),
        _ >= _ && ((_ -= (_ - 1) * _), (_ = 0)),
        _ >= _ && _ > 0 && ((_ = !0), (_ *= 0.9), (_ = _ * _));
      var _ = {
        offset: (((_ - _) / 2) >> 0) - _,
        size: 0,
      };
      _ = _.reduce((_, _) => {
        var _ = {
            stackId: _.stackId,
            dataKeys: _.dataKeys,
            position: {
              offset: _.offset + _.size + _,
              size: _ ? _ : (_.barSize ?? 0),
            },
          },
          _ = [..._, _];
        return (_ = _[_.length - 1].position), _;
      }, _);
    } else {
      var _ = _(_, _, 0, !0);
      _ - 2 * _ - (_ - 1) * _ <= 0 && (_ = 0);
      var _ = (_ - 2 * _ - (_ - 1) * _) / _;
      _ > 1 && (_ >>= 0);
      var _ = _(_) ? Math.min(_, _) : _;
      _ = _.reduce(
        (_, _, _) => [
          ..._,
          {
            stackId: _.stackId,
            dataKeys: _.dataKeys,
            position: {
              offset: _ + (_ + _) * _ + (_ - _) / 2,
              size: _,
            },
          },
        ],
        _,
      );
    }
    return _;
  }
}
var _ = _(
  [
    _,
    _,
    (_, _, _, _) => _(_, `xAxis`, _, _),
    (_, _, _, _) => _(_, `yAxis`, _, _),
    (_, _, _, _) => _(_, `xAxis`, _, _),
    (_, _, _, _) => _(_, `yAxis`, _, _),
    _(
      [
        _([_, _, _, _, _, _, _], (_, _, _, _, _, _, _) => {
          var _ = _(_) ? _ : _,
            _ = _(_, _, _ === _ ? _ : _, _, _);
          return (
            _ !== _ &&
              _ != null &&
              (_ = _.map((_) =>
                _(
                  _({}, _),
                  {},
                  {
                    position: _(
                      _({}, _.position),
                      {},
                      {
                        offset: _.position.offset - _ / 2,
                      },
                    ),
                  },
                ),
              )),
            _
          );
        }),
        _,
      ],
      (_, _) => {
        if (!(_ == null || _ == null)) {
          var _ = _.find(
            (_) =>
              _.stackId === _.stackId &&
              _.dataKey != null &&
              _.dataKeys.includes(_.dataKey),
          );
          if (_ != null) return _.position;
        }
      },
    ),
    _,
    _,
    _,
    _([_, _], (_, _) => {
      var _ = _(_);
      if (!(!_ || _ == null || _ == null)) {
        var { stackId: _ } = _;
        if (_ != null) {
          var _ = _[_];
          if (_) {
            var { stackedData: _ } = _;
            if (_) return _.find((_) => _.key === _);
          }
        }
      }
    }),
    _,
    _,
  ],
  (_, _, _, _, _, _, _, _, _, _, _, _, _) => {
    var { chartData: _, dataStartIndex: _, dataEndIndex: _ } = _;
    if (
      !(
        _ == null ||
        _ == null ||
        _ == null ||
        (_ !== `horizontal` && _ !== `vertical`) ||
        _ == null ||
        _ == null ||
        _ == null ||
        _ == null ||
        _ == null
      )
    ) {
      var { data: _ } = _,
        _ = _ != null && _.length > 0 ? _ : _?.slice(_, _ + 1);
      if (_ != null)
        return _({
          layout: _,
          barSettings: _,
          pos: _,
          parentViewBox: _,
          bandSize: _,
          xAxis: _,
          yAxis: _,
          xAxisTicks: _,
          yAxisTicks: _,
          stackedData: _,
          displayedData: _,
          offset: _,
          cells: _,
        });
    }
  },
);
export { _ };
