var _ = _(_());
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
var _ = (_) => {
  var { _: _, _: _, _, className: _ } = _,
    _ = _(`recharts-dot`, _);
  return _ === +_ && _ === +_ && _ === +_
    ? _.createElement(
        `circle`,
        _({}, _(_), _(_), {
          className: _,
          _: _,
          _: _,
          _,
        }),
      )
    : null;
};
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
var _ = (_) => {
  var { point: _, childIndex: _, mainColor: _, activeDot: _, dataKey: _ } = _;
  if (_ === !1 || _._ == null || _._ == null) return null;
  var _ = _(
      _(
        {
          index: _,
          dataKey: _,
          _: _._,
          _: _._,
          _: 4,
          fill: _ ?? `none`,
          strokeWidth: 2,
          stroke: `#fff`,
          payload: _.payload,
          value: _.value,
        },
        _(_),
      ),
      _(_),
    ),
    _ = (0, _.isValidElement)(_)
      ? (0, _.cloneElement)(_, _)
      : typeof _ == `function`
        ? _(_)
        : _.createElement(_, _);
  return _.createElement(
    _,
    {
      className: `recharts-active-dot`,
    },
    _,
  );
};
function _(_) {
  var { points: _, mainColor: _, activeDot: _, itemDataKey: _ } = _,
    _ = _(_),
    _ = _();
  if (_ == null || _ == null) return null;
  var _ = _.find((_) => _.includes(_.payload));
  return _(_)
    ? null
    : _({
        point: _,
        childIndex: Number(_),
        mainColor: _,
        dataKey: _,
        activeDot: _,
      });
}
var _ = (_, _, _, _) => _(_, `xAxis`, _, _),
  _ = (_, _, _, _) => _(_, `xAxis`, _, _),
  _ = (_, _, _, _) => _(_, `yAxis`, _, _),
  _ = (_, _, _, _) => _(_, `yAxis`, _, _),
  _ = _([_, _, _, _, _], (_, _, _, _, _) =>
    _(_, `xAxis`) ? _(_, _, !1) : _(_, _, !1),
  ),
  _ = (_, _, _, _, _) => _;
function _(_) {
  return _.type === `line`;
}
var _ = _(
  [
    _,
    _,
    _,
    _,
    _,
    _([_, _], (_, _) => _.filter(_).find((_) => _._ === _)),
    _,
    _,
  ],
  (_, _, _, _, _, _, _, _) => {
    var { chartData: _, dataStartIndex: _, dataEndIndex: _ } = _;
    if (
      !(
        _ == null ||
        _ == null ||
        _ == null ||
        _ == null ||
        _ == null ||
        _.length === 0 ||
        _.length === 0 ||
        _ == null
      )
    ) {
      var { dataKey: _, data: _ } = _,
        _ = _ != null && _.length > 0 ? _ : _?.slice(_, _ + 1);
      if (_ != null)
        return _({
          layout: _,
          xAxis: _,
          yAxis: _,
          xAxisTicks: _,
          yAxisTicks: _,
          dataKey: _,
          bandSize: _,
          displayedData: _,
        });
    }
  },
);
function _(_) {
  var _ = _(_),
    _ = 3,
    _ = 2;
  if (_ != null) {
    var { _: _, strokeWidth: _ } = _,
      _ = Number(_),
      _ = Number(_);
    return (
      (Number.isNaN(_) || _ < 0) && (_ = _),
      (Number.isNaN(_) || _ < 0) && (_ = _),
      {
        _: _,
        strokeWidth: _,
      }
    );
  }
  return {
    _: _,
    strokeWidth: _,
  };
}
var _ = [`id`],
  _ = [`type`, `layout`, `connectNulls`, `needClip`],
  _ = [
    `activeDot`,
    `animateNewValues`,
    `animationBegin`,
    `animationDuration`,
    `animationEasing`,
    `connectNulls`,
    `dot`,
    `hide`,
    `isAnimationActive`,
    `label`,
    `legendType`,
    `xAxisId`,
    `yAxisId`,
    `id`,
  ];
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
var _ = (_) => {
  var { dataKey: _, name: _, stroke: _, legendType: _, hide: _ } = _;
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
    data: _,
    stroke: _,
    strokeWidth: _,
    fill: _,
    name: _,
    hide: _,
    unit: _,
  } = _;
  return {
    dataDefinedOnItem: _,
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
      color: _.stroke,
      unit: _,
    },
  };
}
var _ = (_, _) => `${_}px ${_ - _}px`;
function _(_, _) {
  for (var _ = _.length % 2 == 0 ? _ : [..._, 0], _ = [], _ = 0; _ < _; ++_)
    _ = [..._, ..._];
  return _;
}
var _ = (_, _, _) => {
  var _ = _.reduce((_, _) => _ + _);
  if (!_) return _(_, _);
  for (
    var _ = Math.floor(_ / _), _ = _ % _, _ = _ - _, _ = [], _ = 0, _ = 0;
    _ < _.length;
    _ += _[_], ++_
  )
    if (_ + _[_] > _) {
      _ = [..._.slice(0, _), _ - _];
      break;
    }
  var _ = _.length % 2 == 0 ? [0, _] : [_];
  return [..._(_, _), ..._, ..._].map((_) => `${_}px`).join(`, `);
};
function _(_, _) {
  var _;
  if (_.isValidElement(_)) _ = _.cloneElement(_, _);
  else if (typeof _ == `function`) _ = _(_);
  else {
    var _ = _(`recharts-line-dot`, typeof _ == `boolean` ? `` : _.className);
    _ = _.createElement(
      _,
      _({}, _, {
        className: _,
      }),
    );
  }
  return _;
}
function _(_, _) {
  return _ == null ? !1 : _ ? !0 : _.length === 1;
}
function _(_) {
  var { clipPathId: _, points: _, props: _ } = _,
    { dot: _, dataKey: _, needClip: _ } = _;
  if (!_(_, _)) return null;
  var { _: _ } = _,
    _ = _(_, _),
    _ = _(_),
    _ = _(_),
    _ = _(_),
    _ = _.map((_, _) =>
      _(
        _,
        _(
          _(
            _(
              {
                key: `dot-${_}`,
                _: 3,
              },
              _,
            ),
            _,
          ),
          {},
          {
            index: _,
            _: _._,
            _: _._,
            dataKey: _,
            value: _.value,
            payload: _.payload,
            points: _,
          },
        ),
      ),
    ),
    _ = {
      clipPath: _ ? `url(#clipPath-${_ ? `` : `dots-`}${_})` : void 0,
    };
  return _.createElement(
    _,
    _(
      {
        className: `recharts-line-dots`,
        key: `dots`,
      },
      _,
    ),
    _,
  );
}
function _(_) {
  var { showLabels: _, children: _, points: _ } = _,
    _ = (0, _.useMemo)(
      () =>
        _?.map((_) => {
          var _ = {
            _: _._,
            _: _._,
            width: 0,
            height: 0,
          };
          return _(
            _({}, _),
            {},
            {
              value: _.value,
              payload: _.payload,
              viewBox: _,
              parentViewBox: void 0,
              fill: void 0,
            },
          );
        }),
      [_],
    );
  return _.createElement(
    _,
    {
      value: _ ? _ : null,
    },
    _,
  );
}
function _(_) {
  var {
      clipPathId: _,
      pathRef: _,
      points: _,
      strokeDasharray: _,
      props: _,
    } = _,
    { type: _, layout: _, connectNulls: _, needClip: _ } = _,
    _ = _(
      _({}, _(_(_, _))),
      {},
      {
        fill: `none`,
        className: `recharts-line-curve`,
        clipPath: _ ? `url(#clipPath-${_})` : void 0,
        points: _,
        type: _,
        layout: _,
        connectNulls: _,
        strokeDasharray: _ ?? _.strokeDasharray,
      },
    );
  return _.createElement(
    _.Fragment,
    null,
    _?.length > 1 &&
      _.createElement(
        _,
        _({}, _, {
          pathRef: _,
        }),
      ),
    _.createElement(_, {
      points: _,
      clipPathId: _,
      props: _,
    }),
  );
}
function _(_) {
  try {
    return (_ && _.getTotalLength && _.getTotalLength()) || 0;
  } catch {
    return 0;
  }
}
function _(_) {
  var {
      clipPathId: _,
      props: _,
      pathRef: _,
      previousPointsRef: _,
      longestAnimatedLengthRef: _,
    } = _,
    {
      points: _,
      strokeDasharray: _,
      isAnimationActive: _,
      animationBegin: _,
      animationDuration: _,
      animationEasing: _,
      animateNewValues: _,
      width: _,
      height: _,
      onAnimationEnd: _,
      onAnimationStart: _,
    } = _,
    _ = _.current,
    _ = _(_, `recharts-line-`),
    [_, _] = (0, _.useState)(!1),
    _ = !_,
    _ = (0, _.useCallback)(() => {
      typeof _ == `function` && _(), _(!1);
    }, [_]),
    _ = (0, _.useCallback)(() => {
      typeof _ == `function` && _(), _(!0);
    }, [_]),
    _ = _(_.current),
    _ = _.current;
  return _.createElement(
    _,
    {
      points: _,
      showLabels: _,
    },
    _.children,
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
        var _ = _(_, _ + _, _),
          _ = Math.min(_, _),
          _ = _
            ? _
              ? _(
                  _,
                  _,
                  `${_}`.split(/[,\s]+/gim).map((_) => parseFloat(_)),
                )
              : _(_, _)
            : _ == null
              ? void 0
              : String(_);
        if (_) {
          var _ = _.length / _.length,
            _ =
              _ === 1
                ? _
                : _.map((_, _) => {
                    var _ = Math.floor(_ * _);
                    if (_[_]) {
                      var _ = _[_];
                      return _(
                        _({}, _),
                        {},
                        {
                          _: _(_._, _._, _),
                          _: _(_._, _._, _),
                        },
                      );
                    }
                    return _
                      ? _(
                          _({}, _),
                          {},
                          {
                            _: _(_ * 2, _._, _),
                            _: _(_ / 2, _._, _),
                          },
                        )
                      : _(
                          _({}, _),
                          {},
                          {
                            _: _._,
                            _: _._,
                          },
                        );
                  });
          return (
            (_.current = _),
            _.createElement(_, {
              props: _,
              points: _,
              clipPathId: _,
              pathRef: _,
              strokeDasharray: _,
            })
          );
        }
        return (
          _ > 0 && _ > 0 && ((_.current = _), (_.current = _)),
          _.createElement(_, {
            props: _,
            points: _,
            clipPathId: _,
            pathRef: _,
            strokeDasharray: _,
          })
        );
      },
    ),
    _.createElement(_, {
      label: _.label,
    }),
  );
}
function _(_) {
  var { clipPathId: _, props: _ } = _,
    _ = (0, _.useRef)(null),
    _ = (0, _.useRef)(0),
    _ = (0, _.useRef)(null);
  return _.createElement(_, {
    props: _,
    clipPathId: _,
    previousPointsRef: _,
    longestAnimatedLengthRef: _,
    pathRef: _,
  });
}
var _ = (_, _) => ({
    _: _._,
    _: _._,
    value: _.value,
    errorVal: _(_.payload, _),
  }),
  _ = class extends _.Component {
    render() {
      var {
        hide: _,
        dot: _,
        points: _,
        className: _,
        xAxisId: _,
        yAxisId: _,
        top: _,
        left: _,
        width: _,
        height: _,
        _: _,
        needClip: _,
      } = this.props;
      if (_) return null;
      var _ = _(`recharts-line`, _),
        _ = _,
        { _: _, strokeWidth: _ } = _(_),
        _ = _(_),
        _ = _ * 2 + _;
      return _.createElement(
        _.Fragment,
        null,
        _.createElement(
          _,
          {
            className: _,
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
              !_ &&
                _.createElement(
                  `clipPath`,
                  {
                    _: `clipPath-dots-${_}`,
                  },
                  _.createElement(`rect`, {
                    _: _ - _ / 2,
                    _: _ - _ / 2,
                    width: _ + _,
                    height: _ + _,
                  }),
                ),
            ),
          _.createElement(
            _,
            {
              xAxisId: _,
              yAxisId: _,
              data: _,
              dataPointFormatter: _,
              errorBarOffset: 0,
            },
            _.createElement(_, {
              props: this.props,
              clipPathId: _,
            }),
          ),
        ),
        _.createElement(_, {
          activeDot: this.props.activeDot,
          points: _,
          mainColor: this.props.stroke,
          itemDataKey: this.props.dataKey,
        }),
      );
    }
  },
  _ = {
    activeDot: !0,
    animateNewValues: !0,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: `ease`,
    connectNulls: !1,
    dot: !0,
    fill: `#fff`,
    hide: !1,
    isAnimationActive: !_.isSsr,
    label: !1,
    legendType: `line`,
    stroke: `#3182bd`,
    strokeWidth: 1,
    xAxisId: 0,
    yAxisId: 0,
  };
function _(_) {
  var _ = _(_, _),
    {
      activeDot: _,
      animateNewValues: _,
      animationBegin: _,
      animationDuration: _,
      animationEasing: _,
      connectNulls: _,
      dot: _,
      hide: _,
      isAnimationActive: _,
      label: _,
      legendType: _,
      xAxisId: _,
      yAxisId: _,
      _: _,
    } = _,
    _ = _(_, _),
    { needClip: _ } = _(_, _),
    _ = _(),
    _ = _(),
    _ = _(),
    _ = _((_) => _(_, _, _, _, _));
  if ((_ !== `horizontal` && _ !== `vertical`) || _ == null || _ == null)
    return null;
  var { height: _, width: _, _: _, _: _ } = _;
  return _.createElement(
    _,
    _({}, _, {
      _: _,
      connectNulls: _,
      dot: _,
      activeDot: _,
      animateNewValues: _,
      animationBegin: _,
      animationDuration: _,
      animationEasing: _,
      isAnimationActive: _,
      hide: _,
      label: _,
      legendType: _,
      xAxisId: _,
      yAxisId: _,
      points: _,
      layout: _,
      height: _,
      width: _,
      left: _,
      top: _,
      needClip: _,
    }),
  );
}
function _(_) {
  var {
    layout: _,
    xAxis: _,
    yAxis: _,
    xAxisTicks: _,
    yAxisTicks: _,
    dataKey: _,
    bandSize: _,
    displayedData: _,
  } = _;
  return _.map((_, _) => {
    var _ = _(_, _);
    if (_ === `horizontal`)
      return {
        _: _({
          axis: _,
          ticks: _,
          bandSize: _,
          entry: _,
          index: _,
        }),
        _: _(_) ? null : _.scale(_),
        value: _,
        payload: _,
      };
    var _ = _(_) ? null : _.scale(_),
      _ = _({
        axis: _,
        ticks: _,
        bandSize: _,
        entry: _,
        index: _,
      });
    return _ == null || _ == null
      ? null
      : {
          _: _,
          _: _,
          value: _,
          payload: _,
        };
  }).filter(Boolean);
}
function _(_) {
  var _ = _(_, _),
    _ = _();
  return _.createElement(
    _,
    {
      _: _._,
      type: `line`,
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
          type: `line`,
          _: _,
          data: _.data,
          xAxisId: _.xAxisId,
          yAxisId: _.yAxisId,
          zAxisId: 0,
          dataKey: _.dataKey,
          hide: _.hide,
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
_.displayName = `Line`;
var _ = (_, _, _, _) => _(_, `xAxis`, _, _),
  _ = (_, _, _, _) => _(_, `xAxis`, _, _),
  _ = (_, _, _, _) => _(_, `yAxis`, _, _),
  _ = (_, _, _, _) => _(_, `yAxis`, _, _),
  _ = _([_, _, _, _, _], (_, _, _, _, _) =>
    _(_, `xAxis`) ? _(_, _, !1) : _(_, _, !1),
  ),
  _ = _([_, (_, _, _, _, _) => _], (_, _) =>
    _.filter((_) => _.type === `area`).find((_) => _._ === _),
  ),
  _ = _(
    [
      _,
      _,
      _,
      _,
      _,
      (_, _, _, _, _) => {
        var _ = _(_, _, _, _, _);
        if (_ != null) {
          var _ = _(_(_), `xAxis`) ? _(_, `yAxis`, _, _) : _(_, `xAxis`, _, _);
          if (_ != null) {
            var { stackId: _ } = _,
              _ = _(_);
            if (!(_ == null || _ == null))
              return _[_]?.stackedData?.find((_) => _.key === _);
          }
        }
      },
      _,
      _,
      _,
    ],
    (_, _, _, _, _, _, _, _, _) => {
      var { chartData: _, dataStartIndex: _, dataEndIndex: _ } = _;
      if (
        !(
          _ == null ||
          (_ !== `horizontal` && _ !== `vertical`) ||
          _ == null ||
          _ == null ||
          _ == null ||
          _ == null ||
          _.length === 0 ||
          _.length === 0 ||
          _ == null
        )
      ) {
        var { data: _ } = _,
          _ = _ && _.length > 0 ? _ : _?.slice(_, _ + 1);
        if (_ != null)
          return _({
            layout: _,
            xAxis: _,
            yAxis: _,
            xAxisTicks: _,
            yAxisTicks: _,
            dataStartIndex: _,
            areaSettings: _,
            stackedData: _,
            displayedData: _,
            chartBaseValue: void 0,
            bandSize: _,
          });
      }
    },
  ),
  _ = [`id`],
  _ = [
    `activeDot`,
    `animationBegin`,
    `animationDuration`,
    `animationEasing`,
    `connectNulls`,
    `dot`,
    `fill`,
    `fillOpacity`,
    `hide`,
    `isAnimationActive`,
    `legendType`,
    `stroke`,
    `xAxisId`,
    `yAxisId`,
  ];
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
  return _ && _ !== `none` ? _ : _;
}
var _ = (_) => {
  var { dataKey: _, name: _, stroke: _, fill: _, legendType: _, hide: _ } = _;
  return [
    {
      inactive: _,
      dataKey: _,
      type: _,
      color: _(_, _),
      value: _(_, _),
      payload: _,
    },
  ];
};
function _(_) {
  var {
    dataKey: _,
    data: _,
    stroke: _,
    strokeWidth: _,
    fill: _,
    name: _,
    hide: _,
    unit: _,
  } = _;
  return {
    dataDefinedOnItem: _,
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
      color: _(_, _),
      unit: _,
    },
  };
}
var _ = (_, _) => {
  var _;
  if (_.isValidElement(_)) _ = _.cloneElement(_, _);
  else if (typeof _ == `function`) _ = _(_);
  else {
    var _ = _(`recharts-area-dot`, typeof _ == `boolean` ? `` : _.className);
    _ = _.createElement(
      _,
      _({}, _, {
        className: _,
      }),
    );
  }
  return _;
};
function _(_, _) {
  return _ == null ? !1 : _ ? !0 : _.length === 1;
}
function _(_) {
  var { clipPathId: _, points: _, props: _ } = _,
    { needClip: _, dot: _, dataKey: _ } = _;
  if (!_(_, _)) return null;
  var _ = _(_),
    _ = _(_),
    _ = _(_),
    _ = _.map((_, _) =>
      _(
        _,
        _(
          _(
            _(
              {
                key: `dot-${_}`,
                _: 3,
              },
              _,
            ),
            _,
          ),
          {},
          {
            index: _,
            _: _._,
            _: _._,
            dataKey: _,
            value: _.value,
            payload: _.payload,
            points: _,
          },
        ),
      ),
    ),
    _ = {
      clipPath: _ ? `url(#clipPath-${_ ? `` : `dots-`}${_})` : void 0,
    };
  return _.createElement(
    _,
    _(
      {
        className: `recharts-area-dots`,
      },
      _,
    ),
    _,
  );
}
function _(_) {
  var { showLabels: _, children: _, points: _ } = _,
    _ = _.map((_) => {
      var _ = {
        _: _._,
        _: _._,
        width: 0,
        height: 0,
      };
      return _(
        _({}, _),
        {},
        {
          value: _.value,
          payload: _.payload,
          parentViewBox: void 0,
          viewBox: _,
          fill: void 0,
        },
      );
    });
  return _.createElement(
    _,
    {
      value: _ ? _ : null,
    },
    _,
  );
}
function _(_) {
  var { points: _, baseLine: _, needClip: _, clipPathId: _, props: _ } = _,
    { layout: _, type: _, stroke: _, connectNulls: _, isRange: _ } = _,
    { _: _ } = _,
    _ = _(_, _),
    _ = _(_);
  return _.createElement(
    _.Fragment,
    null,
    _?.length > 1 &&
      _.createElement(
        _,
        {
          clipPath: _ ? `url(#clipPath-${_})` : void 0,
        },
        _.createElement(
          _,
          _({}, _, {
            _: _,
            points: _,
            connectNulls: _,
            type: _,
            baseLine: _,
            layout: _,
            stroke: `none`,
            className: `recharts-area-area`,
          }),
        ),
        _ !== `none` &&
          _.createElement(
            _,
            _({}, _, {
              className: `recharts-area-curve`,
              layout: _,
              type: _,
              connectNulls: _,
              fill: `none`,
              points: _,
            }),
          ),
        _ !== `none` &&
          _ &&
          _.createElement(
            _,
            _({}, _, {
              className: `recharts-area-curve`,
              layout: _,
              type: _,
              connectNulls: _,
              fill: `none`,
              points: _,
            }),
          ),
      ),
    _.createElement(_, {
      points: _,
      props: _,
      clipPathId: _,
    }),
  );
}
function _(_) {
  var { alpha: _, baseLine: _, points: _, strokeWidth: _ } = _,
    _ = _[0]._,
    _ = _[_.length - 1]._;
  if (!_(_) || !_(_)) return null;
  var _ = _ * Math.abs(_ - _),
    _ = Math.max(..._.map((_) => _._ || 0));
  return (
    _(_)
      ? (_ = Math.max(_, _))
      : _ &&
        Array.isArray(_) &&
        _.length &&
        (_ = Math.max(..._.map((_) => _._ || 0), _)),
    _(_)
      ? _.createElement(`rect`, {
          _: 0,
          _: _ < _ ? _ : _ - _,
          width: _ + (_ ? parseInt(`${_}`, 10) : 1),
          height: Math.floor(_),
        })
      : null
  );
}
function _(_) {
  var { alpha: _, baseLine: _, points: _, strokeWidth: _ } = _,
    _ = _[0]._,
    _ = _[_.length - 1]._;
  if (!_(_) || !_(_)) return null;
  var _ = _ * Math.abs(_ - _),
    _ = Math.max(..._.map((_) => _._ || 0));
  return (
    _(_)
      ? (_ = Math.max(_, _))
      : _ &&
        Array.isArray(_) &&
        _.length &&
        (_ = Math.max(..._.map((_) => _._ || 0), _)),
    _(_)
      ? _.createElement(`rect`, {
          _: _ < _ ? _ : _ - _,
          _: 0,
          width: _,
          height: Math.floor(_ + (_ ? parseInt(`${_}`, 10) : 1)),
        })
      : null
  );
}
function _(_) {
  var { alpha: _, layout: _, points: _, baseLine: _, strokeWidth: _ } = _;
  return _ === `vertical`
    ? _.createElement(_, {
        alpha: _,
        points: _,
        baseLine: _,
        strokeWidth: _,
      })
    : _.createElement(_, {
        alpha: _,
        points: _,
        baseLine: _,
        strokeWidth: _,
      });
}
function _(_) {
  var {
      needClip: _,
      clipPathId: _,
      props: _,
      previousPointsRef: _,
      previousBaselineRef: _,
    } = _,
    {
      points: _,
      baseLine: _,
      isAnimationActive: _,
      animationBegin: _,
      animationDuration: _,
      animationEasing: _,
      onAnimationStart: _,
      onAnimationEnd: _,
    } = _,
    _ = _(_, `recharts-area-`),
    [_, _] = (0, _.useState)(!1),
    _ = !_,
    _ = (0, _.useCallback)(() => {
      typeof _ == `function` && _(), _(!1);
    }, [_]),
    _ = (0, _.useCallback)(() => {
      typeof _ == `function` && _(), _(!0);
    }, [_]),
    _ = _.current,
    _ = _.current;
  return _.createElement(
    _,
    {
      showLabels: _,
      points: _,
    },
    _.children,
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
        if (_) {
          var _ = _.length / _.length,
            _ =
              _ === 1
                ? _
                : _.map((_, _) => {
                    var _ = Math.floor(_ * _);
                    if (_[_]) {
                      var _ = _[_];
                      return _(
                        _({}, _),
                        {},
                        {
                          _: _(_._, _._, _),
                          _: _(_._, _._, _),
                        },
                      );
                    }
                    return _;
                  }),
            _ = _(_)
              ? _(_, _, _)
              : _(_) || _(_)
                ? _(_, 0, _)
                : _.map((_, _) => {
                    var _ = Math.floor(_ * _);
                    if (Array.isArray(_) && _[_]) {
                      var _ = _[_];
                      return _(
                        _({}, _),
                        {},
                        {
                          _: _(_._, _._, _),
                          _: _(_._, _._, _),
                        },
                      );
                    }
                    return _;
                  });
          return (
            _ > 0 && ((_.current = _), (_.current = _)),
            _.createElement(_, {
              points: _,
              baseLine: _,
              needClip: _,
              clipPathId: _,
              props: _,
            })
          );
        }
        return (
          _ > 0 && ((_.current = _), (_.current = _)),
          _.createElement(
            _,
            null,
            _ &&
              _.createElement(
                `defs`,
                null,
                _.createElement(
                  `clipPath`,
                  {
                    _: `animationClipPath-${_}`,
                  },
                  _.createElement(_, {
                    alpha: _,
                    points: _,
                    baseLine: _,
                    layout: _.layout,
                    strokeWidth: _.strokeWidth,
                  }),
                ),
              ),
            _.createElement(
              _,
              {
                clipPath: `url(#animationClipPath-${_})`,
              },
              _.createElement(_, {
                points: _,
                baseLine: _,
                needClip: _,
                clipPathId: _,
                props: _,
              }),
            ),
          )
        );
      },
    ),
    _.createElement(_, {
      label: _.label,
    }),
  );
}
function _(_) {
  var { needClip: _, clipPathId: _, props: _ } = _,
    _ = (0, _.useRef)(null),
    _ = (0, _.useRef)();
  return _.createElement(_, {
    needClip: _,
    clipPathId: _,
    props: _,
    previousPointsRef: _,
    previousBaselineRef: _,
  });
}
var _ = class extends _.PureComponent {
    render() {
      var {
        hide: _,
        dot: _,
        points: _,
        className: _,
        top: _,
        left: _,
        needClip: _,
        xAxisId: _,
        yAxisId: _,
        width: _,
        height: _,
        _: _,
        baseLine: _,
      } = this.props;
      if (_) return null;
      var _ = _(`recharts-area`, _),
        _ = _,
        { _: _, strokeWidth: _ } = _(_),
        _ = _(_),
        _ = _ * 2 + _;
      return _.createElement(
        _.Fragment,
        null,
        _.createElement(
          _,
          {
            className: _,
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
              !_ &&
                _.createElement(
                  `clipPath`,
                  {
                    _: `clipPath-dots-${_}`,
                  },
                  _.createElement(`rect`, {
                    _: _ - _ / 2,
                    _: _ - _ / 2,
                    width: _ + _,
                    height: _ + _,
                  }),
                ),
            ),
          _.createElement(_, {
            needClip: _,
            clipPathId: _,
            props: this.props,
          }),
        ),
        _.createElement(_, {
          points: _,
          mainColor: _(this.props.stroke, this.props.fill),
          itemDataKey: this.props.dataKey,
          activeDot: this.props.activeDot,
        }),
        this.props.isRange &&
          Array.isArray(_) &&
          _.createElement(_, {
            points: _,
            mainColor: _(this.props.stroke, this.props.fill),
            itemDataKey: this.props.dataKey,
            activeDot: this.props.activeDot,
          }),
      );
    }
  },
  _ = {
    activeDot: !0,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: `ease`,
    connectNulls: !1,
    dot: !1,
    fill: `#3182bd`,
    fillOpacity: 0.6,
    hide: !1,
    isAnimationActive: !_.isSsr,
    legendType: `line`,
    stroke: `#3182bd`,
    xAxisId: 0,
    yAxisId: 0,
  };
function _(_) {
  var _ = _(_, _),
    {
      activeDot: _,
      animationBegin: _,
      animationDuration: _,
      animationEasing: _,
      connectNulls: _,
      dot: _,
      fill: _,
      fillOpacity: _,
      hide: _,
      isAnimationActive: _,
      legendType: _,
      stroke: _,
      xAxisId: _,
      yAxisId: _,
    } = _,
    _ = _(_, _),
    _ = _(),
    _ = _(),
    { needClip: _ } = _(_, _),
    _ = _(),
    { points: _, isRange: _, baseLine: _ } = _((_) => _(_, _, _, _, _._)) ?? {},
    _ = _();
  if (
    (_ !== `horizontal` && _ !== `vertical`) ||
    _ == null ||
    (_ !== `AreaChart` && _ !== `ComposedChart`)
  )
    return null;
  var { height: _, width: _, _: _, _: _ } = _;
  return !_ || !_.length
    ? null
    : _.createElement(
        _,
        _({}, _, {
          activeDot: _,
          animationBegin: _,
          animationDuration: _,
          animationEasing: _,
          baseLine: _,
          connectNulls: _,
          dot: _,
          fill: _,
          fillOpacity: _,
          height: _,
          hide: _,
          layout: _,
          isAnimationActive: _,
          isRange: _,
          legendType: _,
          needClip: _,
          points: _,
          stroke: _,
          width: _,
          left: _,
          top: _,
          xAxisId: _,
          yAxisId: _,
        }),
      );
}
var _ = (_, _, _, _, _) => {
  var _ = _ ?? _;
  if (_(_)) return _;
  var _ = _ === `horizontal` ? _ : _,
    _ = _.scale.domain();
  if (_.type === `number`) {
    var _ = Math.max(_[0], _[1]),
      _ = Math.min(_[0], _[1]);
    return _ === `dataMin`
      ? _
      : _ === `dataMax` || _ < 0
        ? _
        : Math.max(Math.min(_[0], _[1]), 0);
  }
  return _ === `dataMin` ? _[0] : _ === `dataMax` ? _[1] : _[0];
};
function _(_) {
  var {
      areaSettings: { connectNulls: _, baseValue: _, dataKey: _ },
      stackedData: _,
      layout: _,
      chartBaseValue: _,
      xAxis: _,
      yAxis: _,
      displayedData: _,
      dataStartIndex: _,
      xAxisTicks: _,
      yAxisTicks: _,
      bandSize: _,
    } = _,
    _ = _ && _.length,
    _ = _(_, _, _, _, _),
    _ = _ === `horizontal`,
    _ = !1,
    _ = _.map((_, _) => {
      var _;
      _
        ? (_ = _[_ + _])
        : ((_ = _(_, _)), Array.isArray(_) ? (_ = !0) : (_ = [_, _]));
      var _ = _[1] == null || (_ && !_ && _(_, _) == null);
      return _
        ? {
            _: _({
              axis: _,
              ticks: _,
              bandSize: _,
              entry: _,
              index: _,
            }),
            _: _ ? null : _.scale(_[1]),
            value: _,
            payload: _,
          }
        : {
            _: _ ? null : _.scale(_[1]),
            _: _({
              axis: _,
              ticks: _,
              bandSize: _,
              entry: _,
              index: _,
            }),
            value: _,
            payload: _,
          };
    });
  return {
    points: _,
    baseLine:
      _ || _
        ? _.map((_) => {
            var _ = Array.isArray(_.value) ? _.value[0] : null;
            return _
              ? {
                  _: _._,
                  _: _ != null && _._ != null ? _.scale(_) : null,
                  payload: _.payload,
                }
              : {
                  _: _ == null ? null : _.scale(_),
                  _: _._,
                  payload: _.payload,
                };
          })
        : _
          ? _.scale(_)
          : _.scale(_),
    isRange: _,
  };
}
function _(_) {
  var _ = _(_, _),
    _ = _();
  return _.createElement(
    _,
    {
      _: _._,
      type: `area`,
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
          type: `area`,
          _: _,
          data: _.data,
          dataKey: _.dataKey,
          xAxisId: _.xAxisId,
          yAxisId: _.yAxisId,
          zAxisId: 0,
          stackId: _(_.stackId),
          hide: _.hide,
          barSize: void 0,
          baseValue: _.baseValue,
          isPanorama: _,
          connectNulls: _.connectNulls,
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
_.displayName = `Area`;
var _ = [`axis`],
  _ = (0, _.forwardRef)((_, _) =>
    _.createElement(_, {
      chartName: `AreaChart`,
      defaultTooltipEventType: `axis`,
      validateTooltipEventTypes: _,
      tooltipPayloadSearcher: _,
      categoricalChartProps: _,
      ref: _,
    }),
  ),
  _ = [`axis`],
  _ = (0, _.forwardRef)((_, _) =>
    _.createElement(_, {
      chartName: `ComposedChart`,
      defaultTooltipEventType: `axis`,
      validateTooltipEventTypes: _,
      tooltipPayloadSearcher: _,
      categoricalChartProps: _,
      ref: _,
    }),
  );
export { _, _, _, _ };
