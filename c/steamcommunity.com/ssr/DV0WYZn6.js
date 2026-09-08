var _ = _(_(), 1),
  _ = _(),
  _ = {
    _: `rotate( 180 0 0 )`,
    left: `rotate( 90 0 0 )`,
    right: `rotate( 270 0 0 )`,
  };
function _(_) {
  let { direction: _ = `down` } = _,
    _ = _[_];
  return (0, _.jsxs)(_, {
    ..._,
    viewBoxSize: 13,
    transform: _,
    children: [
      (0, _.jsx)(`path`, {
        _: `M9.62081 0.266515L6.49597 3.80182L3.37114 0.266515C3.05705 -0.0888382 2.54966 -0.0888382 2.23557 0.266515C1.92148 0.621868 1.92148 1.1959 2.23557 1.55125L5.93221 5.73349C6.24631 6.08884 6.75369 6.08884 7.06779 5.73349L10.7644 1.55125C11.0785 1.1959 11.0785 0.621868 10.7644 0.266515C10.4503 -0.0797266 9.9349 -0.0888382 9.62081 0.266515Z`,
        fill: `currentColor`,
      }),
      (0, _.jsx)(`path`, {
        _: `M9.62081 6.26651L6.49597 9.80182L3.37114 6.26651C3.05705 5.91116 2.54966 5.91116 2.23557 6.26651C1.92148 6.62187 1.92148 7.1959 2.23557 7.55125L5.93221 11.7335C6.24631 12.0888 6.75369 12.0888 7.06779 11.7335L10.7644 7.55125C11.0785 7.1959 11.0785 6.62187 10.7644 6.26651C10.4503 5.92027 9.9349 5.91116 9.62081 6.26651Z`,
        fill: `currentColor`,
      }),
    ],
  });
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
var _ = (_, _, _, _, _, _, _) => {
    var { _: _, _: _, _: _, _: _ } = _;
    if (_ == null || _ == null) return null;
    var _ = _({
        _: _,
        _: _,
      }),
      _ = {
        _: _
          ? _._.apply(_, {
              position: `start`,
            })
          : _._.rangeMin,
        _: _
          ? _._.apply(_, {
              position: `start`,
            })
          : _._.rangeMin,
      },
      _ = {
        _: _
          ? _._.apply(_, {
              position: `end`,
            })
          : _._.rangeMax,
        _: _
          ? _._.apply(_, {
              position: `end`,
            })
          : _._.rangeMax,
      };
    return _.ifOverflow === `discard` && (!_.isInRange(_) || !_.isInRange(_))
      ? null
      : _(_, _);
  },
  _ = (_, _) =>
    _.isValidElement(_)
      ? _.cloneElement(_, _)
      : typeof _ == `function`
        ? _(_)
        : _.createElement(
            _,
            _({}, _, {
              className: `recharts-reference-area-rect`,
            }),
          );
function _(_) {
  var _ = _();
  return (
    (0, _.useEffect)(
      () => (
        _(_(_)),
        () => {
          _(_(_));
        }
      ),
    ),
    null
  );
}
function _(_) {
  var {
      _: _,
      _: _,
      _: _,
      _: _,
      className: _,
      shape: _,
      xAxisId: _,
      yAxisId: _,
    } = _,
    _ = _(),
    _ = _(),
    _ = _((_) => _(_, `xAxis`, _, _)),
    _ = _((_) => _(_, `yAxis`, _, _));
  if (_ == null || !_ == null) return null;
  var _ = _(_),
    _ = _(_),
    _ = _(_),
    _ = _(_);
  if (!_ && !_ && !_ && !_ && !_) return null;
  var _ = _(_, _, _, _, _, _, _);
  if (!_ && !_) return null;
  var _ = _.ifOverflow === `hidden` ? `url(#${_})` : void 0;
  return _.createElement(
    _,
    {
      className: _(`recharts-reference-area`, _),
    },
    _(
      _,
      _(
        _(
          {
            clipPath: _,
          },
          _(_),
        ),
        _,
      ),
    ),
    _.createElement(
      _,
      _,
      _.createElement(_, {
        label: _.label,
      }),
      _.children,
    ),
  );
}
function _(_) {
  return _.createElement(
    _.Fragment,
    null,
    _.createElement(_, {
      yAxisId: _.yAxisId,
      xAxisId: _.xAxisId,
      ifOverflow: _.ifOverflow,
      _: _._,
      _: _._,
      _: _._,
      _: _._,
    }),
    _.createElement(_, _),
  );
}
var _ = class extends _.Component {
  render() {
    return _.createElement(_, this.props);
  }
};
_(_, `displayName`, `ReferenceArea`),
  _(_, `defaultProps`, {
    ifOverflow: `discard`,
    xAxisId: 0,
    yAxisId: 0,
    _: 10,
    fill: `#ccc`,
    fillOpacity: 0.5,
    stroke: `none`,
    strokeWidth: 1,
  });
function _(_, _, _ = NaN) {
  let { strSymbol: _, strDecimalSymbol: _, strThousandsSeparator: _ } = _(_);
  (_ = _.replace(_, ``)
    .replace(`.--`, `.00`)
    .replace(/ /g, ``)
    .replace(_(_), ``)),
    _ !== `.` && (_ = _.replace(_(_), `.`));
  let _ = _.indexOf(`.`),
    _ = _.lastIndexOf(`.`);
  if (_ !== -1 && _ !== _) {
    let _ = _.split(`.`);
    _[_.length - 1].length > 0 &&
      (_ = `${_.slice(0, -1).join(``)}.${_[_.length - 1]}`);
  }
  let _ = parseFloat(_) * 100;
  return isNaN(_) ? _ : Math.floor(_ + 1e-6);
}
function _(_) {
  return _ === `.` ? /\./g : new RegExp(_, `g`);
}
function _(_) {
  let { children: _ } = _;
  return (0, _.jsx)(_, {
    isAnimationActive: !1,
    content: (_) =>
      (0, _.jsx)(_, {
        background: `dull-7`,
        radius: `md`,
        padding: `2`,
        elevation: `1`,
        children: typeof _ == `function` ? _(_) : _,
      }),
  });
}
var _ = _.memo(function () {
  return (0, _.jsx)(_, {
    stroke: `#FFFFFF10`,
  });
});
function _(_) {
  let [_, _] = (0, _.useState)(null);
  return {
    props: {
      onMouseDown: (_, _) => {
        _.activeCoordinate &&
          (_([_, _]), _.preventDefault(), _.stopPropagation());
      },
      onMouseUp: (_, _) => {
        if (
          _ &&
          _.activeCoordinate &&
          _[0].activeCoordinate._ !== _.activeCoordinate._
        ) {
          let _ = _[0];
          _.activeCoordinate._ < _.activeCoordinate._
            ? _.onSelection(_, _)
            : _.onSelection(_, _);
        }
        _(null);
      },
      onMouseMove: _ ? (_) => _((_) => _ && [_[0], _]) : void 0,
    },
    activeDrag: _,
  };
}
function _(_) {
  let { dataKey: _, color: _, numPoints: _, ..._ } = _;
  return (0, _.jsx)(_, {
    dataKey: _,
    stroke: _,
    dot: _ === 1,
    strokeWidth: 2,
    yAxisId: `price`,
    isAnimationActive: !1,
    connectNulls: !0,
    ..._,
  });
}
function _(_) {
  let { scale: _, dataKey: _ } = _,
    _ = {
      dataKey: _,
      fill: `var(--color-blue-9)`,
      opacity: 0.25,
      yAxisId: `purchases`,
      isAnimationActive: !1,
    };
  return _ === `lifetime`
    ? (0, _.jsx)(_, {
        ..._,
        connectNulls: !0,
      })
    : (0, _.jsx)(_, {
        ..._,
      });
}
function _(_) {
  let { book: _ } = _,
    _ = _(_),
    _ = Intl.NumberFormat(),
    _ = _(_.rgBuyOrders, _.rgSellOrders),
    _ = _(_.rgBuyOrders, _),
    _ = _(_.rgSellOrders, _),
    _ = [`dataMin`, `dataMax`];
  return (
    _.rgBuyOrders.length === 0 || _.rgSellOrders.length === 0
      ? (_ = [0, `dataMax`])
      : _ > _ && (_ = [`dataMin`, _.rgSellOrders[0].price + _]),
    (0, _.jsxs)(_, {
      children: [
        (0, _.jsx)(_, {
          size: `5`,
          marginBottom: `2`,
          contrast: `subtitle`,
          children: _.Localize(`#OrderBook_Graph_Title`),
        }),
        (0, _.jsx)(_, {
          background: `dull-6`,
          padding: `4`,
          children: (0, _.jsxs)(_, {
            style: {
              width: `100%`,
              maxHeight: `min( 70vh, 350px )`,
              minHeight: `320px`,
              fontSize: `var(--text-size-3)`,
            },
            data: _,
            responsive: !0,
            children: [
              (0, _.jsx)(_, {}),
              (0, _.jsx)(_, {
                dataKey: `price`,
                tickFormatter: (_) => _(_, _.eCurrency),
                type: `number`,
                domain: _,
                allowDataOverflow: !0,
              }),
              (0, _.jsx)(_, {
                type: `number`,
                tickFormatter: (_) => _.format(Math.round(_)),
                domain: [`dataMin`, (_) => _ * 1.2],
                width: `auto`,
              }),
              (0, _.jsx)(_, {
                dot: _.rgBuyOrders.length === 1,
                type: `monotone`,
                dataKey: `buyOrders`,
                stroke: `var(--color-blue-9)`,
                fill: `var(--color-blue-8)`,
                isAnimationActive: !1,
              }),
              (0, _.jsx)(_, {
                dot: _.rgSellOrders.length === 1,
                type: `monotone`,
                dataKey: `sellOrders`,
                stroke: `var(--color-green-9)`,
                fill: `var(--color-green-8)`,
                isAnimationActive: !1,
              }),
              (0, _.jsx)(_, {
                currency: _.eCurrency,
              }),
            ],
          }),
        }),
      ],
    })
  );
}
function _(_, _) {
  return _.length < 2
    ? _ == 1 / 0
      ? 1 / 0
      : Math.abs(_)
    : Math.abs(_[0].price - _[_.length - 1].price);
}
function _(_, _) {
  return _.length == 0 || _.length == 0 ? 1 / 0 : _[0].price - _[0].price;
}
function _(_) {
  let { currency: _ } = _;
  return (0, _.jsx)(_, {
    children: (_) => {
      if (!_.active || !_.payload?.length || !_.payload[0].payload) return null;
      let _ = new Intl.NumberFormat(),
        { price: _, buyOrders: _, sellOrders: _ } = _.payload[0].payload,
        _ = _ ? `#OrderBook_Graph_BuyTooltip` : `#OrderBook_Graph_SellTooltip`,
        _ = _ || _,
        _ = _.format(_);
      return (0, _.jsx)(_, {
        contrast: `title`,
        children: _.LocalizePlural(_, _, _(_, _)),
      });
    },
  });
}
function _(_) {
  return (0, _.useMemo)(() => {
    let _ = _(_.rgBuyOrders)
        .reverse()
        .map(({ price: _, cumulative: _ }) => ({
          price: _,
          buyOrders: _,
        })),
      _ = _(_.rgSellOrders).map(({ price: _, cumulative: _ }) => ({
        price: _,
        sellOrders: _,
      }));
    return [..._, ..._];
  }, [_]);
}
function _(_) {
  let _ = 0,
    _ = [];
  for (let _ of _)
    (_ += _.quantity),
      _.push({
        price: _.price,
        cumulative: _,
      });
  return _;
}
var _ = 3600 * 24,
  _ = 3600 * 24 * 7;
typeof _ == `function`
  ? _({
      measureText: (_, _) => {
        let _ = _.toString(),
          _ = typeof _?.fontSize == `number` ? _.fontSize : 13;
        return {
          width: _.length * 8,
          height: _ * 1.3,
        };
      },
    })
  : console.error(
      `Cannot find configureTextMeasurement. Recharts not patched correctly for this context.`,
    );
var _ = {
  week: _ / 4,
  month: _,
  year: _,
  lifetime: _,
};
function _(_, _) {
  let _ = new Date(_ * 1e3);
  switch (_) {
    case `week`:
      _.setDate(_.getDate() - 7);
      break;
    case `month`:
      _.setMonth(_.getMonth() - 1);
      break;
    case `year`:
    case `lifetime`:
      _.setFullYear(_.getFullYear() - 1);
      break;
    default:
      _(_, `Unhandled graph scale: ${_}`);
  }
  return Math.floor(_.getTime() / 1e3);
}
function _(_) {
  let { priceHistory: _ } = _,
    [_, _] = _(`priceTimeScale`),
    _ = _(_, _),
    _ = (0, _.useMemo)(
      () => _.reduce((_, _) => _ + +(_.purchases > 0), 0),
      [_],
    );
  return (0, _.jsxs)(_, {
    currency: _.ecurrency,
    data: _,
    scale: _,
    onScaleChange: _,
    children: [
      (0, _.jsx)(_, {
        dataKey: `price`,
        color: `var(--color-green-9)`,
        numPoints: _,
      }),
      (0, _.jsx)(_, {
        dataKey: `purchases`,
        scale: _,
      }),
      _.length === 0 &&
        (0, _.jsx)(_, {
          position: `center`,
          children: _.Localize(`#Graph_NoData`),
        }),
    ],
  });
}
function _(_) {
  let {
      children: _,
      currency: _,
      data: _,
      scale: _,
      onScaleChange: _,
      tooltipComponent: _,
    } = _,
    _ = _ === `week` || _ === `month`,
    _ = new Intl.DateTimeFormat(void 0, {
      year: `numeric`,
      month: `numeric`,
      day: `numeric`,
      hour: _ ? `numeric` : void 0,
    }),
    [_, _] = (0, _.useState)(null),
    { props: _, activeDrag: _ } = _({
      onSelection: (_, _) =>
        _.activeLabel && _.activeLabel && _([_.activeLabel, _.activeLabel]),
    }),
    _ = !!_,
    _ = (_) => {
      _(null), _ && _(_);
    },
    _ = _() === `initial`,
    _ =
      _ &&
      (0, _.jsx)(_, {
        value: _ ? null : _,
        onValueChange: _,
        options: [`week`, `month`, `year`, `lifetime`],
        getOptionLabel: _,
        radius: `sm`,
        variant: `dim`,
      });
  return (0, _.jsxs)(_, {
    children: [
      (0, _.jsxs)(_, {
        align: `end`,
        justify: `between`,
        marginBottom: `2`,
        children: [
          (0, _.jsx)(_, {
            size: `5`,
            contrast: `subtitle`,
            children: _.Localize(`#MedianSalePrice_Graph_Title`),
          }),
          !_ &&
            (0, _.jsxs)(_, {
              justify: `center`,
              gap: `2`,
              children: [
                _ &&
                  (0, _.jsxs)(_, {
                    color: `dull`,
                    onClick: () => _(null),
                    children: [
                      (0, _.jsxs)(_, {
                        size: `2`,
                        contrast: `title`,
                        children: [
                          _.format(_[0] * 1e3),
                          ` - `,
                          _.format(_[1] * 1e3),
                        ],
                      }),
                      (0, _.jsx)(_, {
                        marginLeft: `2`,
                      }),
                    ],
                  }),
                _,
              ],
            }),
        ],
      }),
      (0, _.jsx)(_, {
        background: `dull-6`,
        padding: {
          initial: `1`,
          _: `4`,
        },
        paddingTop: `5`,
        children: (0, _.jsxs)(_, {
          style: {
            width: `100%`,
            maxHeight: `min( 70vh, 350px )`,
            minHeight: `320px`,
            fontSize: `var(--text-size-3)`,
          },
          data: _,
          responsive: !0,
          ..._,
          margin: _
            ? void 0
            : {
                left: 20,
                right: 20,
              },
          children: [
            (0, _.jsx)(_, {
              currency: _,
              scale: _,
              customDomain: _,
              tooltipComponent: _,
            }),
            _ &&
              (0, _.jsx)(_, {
                _: _[0].activeLabel,
                _: _[1].activeLabel,
                fill: `#FFFFFF`,
                fillOpacity: 0.3,
                yAxisId: `price`,
                ifOverflow: `visible`,
              }),
            _,
          ],
        }),
      }),
      _ &&
        (0, _.jsx)(_, {
          marginTop: `2`,
          children: _,
        }),
    ],
  });
}
var _ = _.memo(function (_) {
    let { scale: _, currency: _, customDomain: _, tooltipComponent: _ } = _,
      [
        {
          rtMount: _,
          dayDateFormatter: _,
          hourDateFormatter: _,
          numberFormatter: _,
        },
      ] = (0, _.useState)(() => ({
        rtMount: Math.floor(Date.now() / 1e3),
        dayDateFormatter: new Intl.DateTimeFormat(_(), {
          year: `numeric`,
          month: `numeric`,
          day: `numeric`,
          hour: void 0,
        }),
        hourDateFormatter: new Intl.DateTimeFormat(_(), {
          year: `numeric`,
          month: `numeric`,
          day: `numeric`,
          hour: `numeric`,
        }),
        numberFormatter: new Intl.NumberFormat(_()),
      })),
      _ = _ || _,
      _ = _ === `week` || _ === `month` ? _ : _,
      _ = (0, _.useCallback)((_) => _.format(_), [_]),
      _ = (0, _.useCallback)((_) => _(Math.round(_ * 100), _), [_]);
    return (0, _.jsxs)(_.Fragment, {
      children: [
        (0, _.jsx)(_, {
          dateFormatter: _,
          mountTime: _,
          scale: _,
          customDomain: _,
        }),
        (0, _.jsx)(_, {
          yAxisId: `price`,
          tickMargin: 3,
          tickFormatter: _,
          width: `auto`,
          children: (0, _.jsx)(_, {
            angle: -90,
            position: `left`,
            offset: 10,
            fill: `var(--color-green-8)`,
            children: _.Localize(`#Graph_Label_Price`),
          }),
        }),
        (0, _.jsx)(_, {
          yAxisId: `purchases`,
          tickMargin: 3,
          orientation: `right`,
          tickFormatter: _,
          width: `auto`,
          allowDecimals: !1,
          children: (0, _.jsx)(_, {
            angle: 90,
            position: `right`,
            offset: 10,
            fill: `var(--color-blue-8)`,
            children: _.Localize(`#Graph_Label_Volume`),
          }),
        }),
        (0, _.jsx)(_, {
          dateFormatter: _,
          currency: _,
        }),
      ],
    });
  }),
  _ = _.memo(function (_) {
    let { dateFormatter: _, mountTime: _, scale: _, customDomain: _ } = _,
      _ = (0, _.useMemo)(
        () => [
          (_) => Math.min(_ - _[_], _(_, _)),
          (_) => Math.max(_ + _[_], _),
        ],
        [_, _],
      ),
      _ = _ || _;
    return (0, _.jsx)(_, {
      dataKey: `time`,
      tickMargin: 3,
      minTickGap: 24,
      tickFormatter: (0, _.useCallback)((_) => _.format(_ * 1e3), [_]),
      scale: `time`,
      type: `number`,
      domain: _,
      allowDataOverflow: !0,
    });
  });
function _(_) {
  let {
      dateFormatter: _,
      currency: _,
      priceKey: _ = `price`,
      purchasesKey: _ = `purchases`,
    } = _,
    _ = new Intl.NumberFormat();
  return (0, _.jsx)(_, {
    children: (_) => {
      if (!_.active || !_.payload?.length || !_.payload[0].payload) return null;
      let _ = _.payload[0].payload,
        _ = _[_],
        _ = _[_],
        _ = _.time;
      if (_ === void 0 || _ === void 0) return null;
      let _ = _(Math.round(_ * 100), _),
        _ = _.Localize(`#Graph_NumberSold`, _.format(_));
      return (0, _.jsxs)(_, {
        direction: `column`,
        gap: `2`,
        children: [
          (0, _.jsx)(_, {
            weight: `medium`,
            contrast: `title`,
            children: _.format(_ * 1e3),
          }),
          (0, _.jsx)(_, {
            contrast: `title`,
            children: _,
          }),
          (0, _.jsx)(_, {
            contrast: `title`,
            children: _,
          }),
        ],
      });
    },
  });
}
var _ = {
  week: `#Graph_TimeScale_Week`,
  month: `#Graph_TimeScale_Month`,
  year: `#Graph_TimeScale_Year`,
  lifetime: `#Graph_TimeScale_Lifetime`,
};
function _(_) {
  return _.Localize(_[_]);
}
function _(_, _) {
  let [_] = (0, _.useState)(() => Math.floor(Date.now() / 1e3));
  return (0, _.useMemo)(() => _(_, _), [_, _])[_];
}
function _(_, _) {
  let _ = {
      week: [],
      month: [],
      year: [],
      lifetime: [],
    },
    _,
    _ = new Date();
  _.setDate(_.getDate() - 7);
  let _ = Math.floor(_.getTime() / 1e3),
    _ = new Date();
  _.setMonth(_.getMonth() - 1);
  let _ = Math.floor(_.getTime() / 1e3),
    _ = new Date();
  _.setFullYear(_.getFullYear() - 1);
  let _ = Math.floor(_.getTime() / 1e3);
  for (let _ of _.prices || []) {
    let _ = _(_);
    _.time >= _ && _.week.push(_), _.time >= _ && _.month.push(_);
    let _ = !!_ && _(_.time, _.time);
    if (_.time >= _)
      if (!_) _.year.push(_);
      else {
        let _ = _.year[_.year.length - 1];
        Array.isArray(_) ? _.push(_) : (_.year[_.year.length - 1] = [_, _]);
      }
    if (!_) _.lifetime.push(_);
    else {
      let _ = _.lifetime[_.lifetime.length - 1];
      Array.isArray(_)
        ? _.push(_)
        : (_.lifetime[_.lifetime.length - 1] = [_, _]);
    }
    _ = _;
  }
  let _ = (_, _) => {
    if (_.length === 0) return [];
    let _ = _.map((_) => (Array.isArray(_) ? _(_) : _));
    return [..._(_, _, _), ..._(_, _), ..._(_, _, _)];
  };
  return {
    week: _(`week`, _.week),
    month: _(`month`, _.month),
    year: _(`year`, _.year),
    lifetime: _(`lifetime`, _.lifetime),
  };
}
function _(_, _) {
  if (_.length <= 1) return _;
  let _ = [_[0]];
  for (let _ = 1; _ < _.length; _++) {
    let _ = _[_ - 1],
      _ = _[_],
      _ = _.time + _[_];
    for (; _ < _.time && !_(_, _.time, _); )
      _.push({
        time: _,
        price: void 0,
        purchases: 0,
      }),
        (_ += _[_]);
    _.push(_);
  }
  return _;
}
function _(_, _, _) {
  let _ = _(_, _);
  if (!_.length || _(_, _[0].time, _)) return [];
  let _ = _,
    _ = [];
  for (; _ < _[0].time && !_(_, _[0].time, _); )
    _.push({
      time: _,
      price: void 0,
      purchases: 0,
    }),
      (_ += _[_]);
  return _;
}
function _(_, _, _) {
  if (!_.length || _(_, _[_.length - 1].time, _)) return [];
  let _ = _,
    _ = [],
    _ = _[_.length - 1].time;
  for (; _ > _ && !_(_, _, _); )
    _.push({
      time: _,
      price: void 0,
      purchases: 0,
    }),
      (_ -= _[_]);
  return _.reverse();
}
function _(_, _, _) {
  switch (_) {
    case `lifetime`:
    case `year`:
      return _(_, _);
    case `month`:
    case `week`:
      return _(_, _);
    default:
      return _(_, `Unhandled time scale "${_}"`), !1;
  }
}
function _(_, _) {
  return new Date(_ * 1e3).getDay() === new Date(_ * 1e3).getDay();
}
function _(_, _) {
  return new Date(_ * 1e3).getHours() === new Date(_ * 1e3).getHours();
}
function _(_) {
  return {
    time: _.time,
    price: _.price_median,
    purchases: _.purchases,
  };
}
function _(_) {
  if ((_(_.length, `Cannot merge a list of zero data points!`), _.length === 1))
    return _[0];
  let { unAvgSum: _, cTotal: _ } = _.reduce(
      (_, _) =>
        _.price === void 0 || _.purchases === void 0
          ? _
          : ((_.unAvgSum += _.price * _.purchases),
            (_.cTotal += _.purchases),
            _),
      {
        unAvgSum: 0,
        cTotal: 0,
      },
    ),
    _ = _ / _;
  return {
    time: _[0].time,
    price: _,
    purchases: _,
  };
}
var _ = _.memo(function (_) {
  let { groups: _, activeGroupID: _ } = _,
    [_, _] = _(`priceTimeScale`),
    _ = _(),
    _ = _(_, _),
    _ = (0, _.useMemo)(() => {
      let _ = {};
      for (let _ of _) {
        let _ = _._,
          _ = 0;
        for (let _ of _) _[`${_}_price`] && _[`${_}_price`] > 0 && _++;
        _[_] = _;
      }
      return _;
    }, [_, _]);
  return (0, _.jsx)(_, {
    value: _,
    children: (0, _.jsxs)(_, {
      currency:
        _.length > 0 ? _[0].priceHistory.ecurrency : _.currency.eCurrency,
      scale: _,
      onScaleChange: _,
      data: _,
      tooltipComponent: (_) =>
        (0, _.jsx)(_, {
          ..._,
          activeGroupID: _,
        }),
      children: [
        _.map(
          (_) =>
            (!_ || _._ === _) &&
            (0, _.jsx)(
              _,
              {
                numPoints: _[_._],
                ..._,
              },
              _._,
            ),
        ),
        (0, _.jsx)(_, {
          dataKey: _ ? `${_}_purchases` : `purchases`,
          scale: _,
        }),
        _.length === 0 &&
          (0, _.jsx)(_, {
            position: `center`,
            children: _.Localize(`#Graph_NoData`),
          }),
      ],
    }),
  });
});
function _(_) {
  let { _: _, color: _, numPoints: _ } = _;
  return (0, _.jsx)(_, {
    dataKey: `${_}_price`,
    color: _,
    numPoints: _,
    style: {
      transition: `opacity 300ms ease-in-out`,
    },
  });
}
function _(_, _) {
  let [_] = (0, _.useState)(() => Math.floor(Date.now() / 1e3));
  return (0, _.useMemo)(() => {
    let _ = _.map((_) => ({
      data: _(_.priceHistory, _),
      ..._,
    }));
    return {
      week: _(`week`, _),
      month: _(`month`, _),
      year: _(`year`, _),
      lifetime: _(`lifetime`, _),
    };
  }, [_, _])[_];
}
function _(_, _) {
  let _ = _.map(({ _: _, data: _ }) => ({
    _: _,
    data: _[_],
  })).filter(({ data: _ }) => _.length > 0);
  if (_.length === 0) return [];
  let _ = [],
    _ = _.reduce((_, _) => Math.min(_, _.data[0].time), 1 / 0),
    _ = Array(_.length).fill(0);
  for (; _.some((_, _) => _ < _[_].data.length); ) {
    let _ = 1 / 0,
      _ = {
        time: _,
        purchases: 0,
      };
    for (let _ = 0; _ < _.length; _++) {
      let _ = _[_];
      if (_[_] >= _.data.length) continue;
      let _ = _.data[_[_]];
      _(_, _.time, _) &&
        (_.purchases &&
          ((_.purchases += _.purchases),
          (_[`${_._}_purchases`] = _.purchases),
          (_[`${_._}_price`] = _.price),
          (_.price = Math.max(_.price ?? 0, _.price ?? 0))),
        _[_]++),
        _[_] < _.data.length && (_ = Math.min(_, _.data[_[_]].time));
    }
    if ((_.push(_), (_ = _), _ === 1 / 0)) break;
  }
  return _;
}
function _(_) {
  let { dateFormatter: _, currency: _, activeGroupID: _ } = _,
    _ = new Intl.NumberFormat(),
    _ = (0, _.useContext)(_);
  return _
    ? (0, _.jsx)(_, {
        dateFormatter: _,
        currency: _,
        priceKey: `${_}_price`,
        purchasesKey: `${_}_purchases`,
      })
    : (0, _.jsx)(_, {
        children: (_) => {
          if (!_.active || !_.payload?.length || !_.payload[0].payload)
            return null;
          let _ = _.payload[0].payload,
            { purchases: _, time: _ } = _,
            _ = _.format(_ * 1e3);
          if (_ === void 0 || _ === 0)
            return (0, _.jsxs)(_, {
              direction: `column`,
              gap: `2`,
              children: [
                (0, _.jsx)(_, {
                  weight: `medium`,
                  contrast: `title`,
                  children: _,
                }),
                (0, _.jsx)(_, {
                  children: _.Localize(`#Graph_Tooltip_NoPurchaseData`),
                }),
              ],
            });
          let _ = _.Localize(`#Graph_NumberSold`, _.format(_));
          return (0, _.jsxs)(_, {
            direction: `column`,
            gap: `2`,
            children: [
              (0, _.jsx)(_, {
                weight: `medium`,
                contrast: `title`,
                children: _,
              }),
              _.map((_) =>
                (0, _.jsx)(
                  _,
                  {
                    group: _,
                    currency: _,
                    price: _[`${_._}_price`],
                  },
                  _._,
                ),
              ),
              (0, _.jsx)(_, {
                contrast: `title`,
                children: _,
              }),
            ],
          });
        },
      });
}
function _(_) {
  let {
      price: _,
      currency: _,
      group: { color: _, label: _ },
    } = _,
    _ =
      _ === void 0
        ? _.Localize(`#Graph_Tooltip_NA`)
        : _(Math.round(_ * 100), _);
  return (0, _.jsxs)(_, {
    style: {
      color: _,
    },
    children: [_, ` - `, _],
  });
}
var _ = (0, _.createContext)([]);
function _(_) {
  let { state: _, onStateChange: _, property: _, facet: _ } = _;
  _(_.float_max !== void 0 && _.float_min !== void 0, ``);
  let _ = (_) => {
      let _ = {
        ..._.properties,
      };
      if ((delete _[_._], _))
        _(
          {
            ..._,
            properties: _,
            facets: {
              ..._.facets,
              Exterior: {
                [_]: !0,
              },
            },
          },
          !0,
        );
      else {
        let _ = {
          ..._.facets,
        };
        delete _.Exterior,
          _(
            {
              ..._,
              properties: _,
              facets: _,
            },
            !0,
          );
      }
    },
    _ = _.properties[_._],
    _ = (_) => (_) => {
      let _ = _[0] <= _.float_min,
        _ = _[1] >= _.float_max,
        _ = {
          ..._.facets,
        };
      delete _.Exterior;
      let _ = {
        ..._,
        facets: _,
      };
      if (_ && _) {
        let _ = {
          ..._.properties,
        };
        delete _[_._], (_.properties = _);
      } else {
        let _ = _
          ? {
              ..._,
            }
          : {
              property_id: _._,
            };
        (_.float_max = _[1]),
          (_.float_min = _[0]),
          (_.properties = {
            ..._.properties,
            [_._]: _,
          });
      }
      _(_, _);
    },
    _ = _.facets.Exterior,
    _ = [_.float_min, _.float_max],
    _ = 0;
  if (_) _ = [_.float_min || _.float_min, _.float_max || _.float_max];
  else if (_) {
    let _ = 1 / 0,
      _ = -1 / 0;
    for (let _ of _)
      _[_.tag] &&
        ((_ = Math.min(_, _.start || _.float_min)),
        (_ = Math.max(_, _.stop || _.float_max)),
        (_ += 1));
    _ > 0 && (_ = [_, _]);
  }
  let _ = _[0] <= _.float_min,
    _ = _[1] >= _.float_max,
    _ = _ && _,
    _ = _ === 1 ? Object.keys(_)[0] : null,
    _ = (_) => (_) => {
      let _ = [..._];
      (_[_] = _), _(!0)(_);
    };
  return (0, _.jsxs)(_, {
    direction: `column`,
    gap: `2`,
    paddingBottom: `2`,
    marginTop: `2`,
    children: [
      (0, _.jsx)(_, {
        weight: `medium`,
        contrast: `subtitle`,
        children: _.localized_label,
      }),
      (0, _.jsx)(_, {
        selectedValue: _,
        onSelectionChange: _,
        facet: _,
      }),
      (0, _.jsxs)(_, {
        direction: `row`,
        align: `center`,
        gap: `2`,
        children: [
          (0, _.jsx)(_, {
            variant: `inset-focus`,
            value: _ && !_ ? void 0 : _[0],
            onChange: _(0),
            placeholder: _.Localize(`#AssetProperty_Range_MinPlaceholder`),
          }),
          (0, _.jsx)(_, {
            size: `4`,
            weight: `medium`,
            children: `-`,
          }),
          (0, _.jsx)(_, {
            variant: `inset-focus`,
            value: _ && !_ ? void 0 : _[1],
            onChange: _(1),
            placeholder: _.Localize(`#AssetProperty_Range_MaxPlaceholder`),
          }),
        ],
      }),
      (0, _.jsx)(_.Root, {
        min: _.float_min,
        max: _.float_max,
        step: (_.float_max - _.float_min) / 100,
        value: _,
        onValueChange: _(!1),
        onValueSettled: _(!0),
        color: _ ? `dull` : void 0,
        children: (0, _.jsxs)(_.Track, {
          render: (0, _.jsx)(_, {
            buckets: _,
            min: 0,
            max: 1,
          }),
          children: [
            (0, _.jsx)(_.Handle, {
              render: (_, { value: _, bDragActive: _ }) =>
                (0, _.jsx)(_, {
                  value: _,
                  animate: !_,
                  ..._,
                }),
            }),
            (0, _.jsx)(_.Handle, {
              render: (_, { value: _, bDragActive: _ }) =>
                (0, _.jsx)(_, {
                  value: _,
                  animate: !_,
                  ..._,
                }),
            }),
          ],
        }),
      }),
    ],
  });
}
function _(_) {
  let { selectedValue: _, onSelectionChange: _, facet: _ } = _,
    _ = _({
      onSelectionChange: _,
      selectedValue: _,
      rgOptions: _.map((_) => _.tag),
    }),
    _ = (_) => (_.tags && _.tags[_] && _.tags[_].localized_name) ?? ``,
    _ = _ != null;
  return (0, _.jsxs)(_.Root, {
    state: _,
    status: _ ? `highlight` : void 0,
    radius: `sm`,
    clearable: !0,
    children: [
      (0, _.jsxs)(_.Trigger, {
        children: [
          _ &&
            (0, _.jsxs)(_.Value, {
              children: [
                _.localized_name,
                `: `,
                (0, _.jsx)(_, {
                  color: `accent-8`,
                  children: _(_),
                }),
              ],
            }),
          !_ &&
            (0, _.jsx)(_.Value, {
              children: _.localized_name,
            }),
        ],
      }),
      (0, _.jsx)(_.Options, {
        children: _.rgOptions.map((_, _) =>
          (0, _.jsx)(
            _.Option,
            {
              value: _,
              children: (_.tags && _.tags[_] && _.tags[_].localized_name) ?? ``,
            },
            _,
          ),
        ),
      }),
    ],
  });
}
function _(_) {
  let { value: _, onChange: _, placeholder: _, defaultValue: _ = 0 } = _,
    [_, _] = (0, _.useState)(null),
    _ = _ ?? _?.toString() ?? ``;
  return (0, _.jsx)(_, {
    flexGrow: `1`,
    children: (0, _.jsx)(_, {
      variant: `inset-focus`,
      value: _,
      onTextChange: (_) => {
        (_ === `` || !isNaN(parseFloat(_))) && _(_);
      },
      onBlur: () => {
        _ ? (_(parseFloat(_)), _(null)) : _ === `` && (_(_), _(null));
      },
      placeholder: _,
    }),
  });
}
var _ = {
  1: _,
  2: _,
  3: _,
};
function _(_) {
  let _ = _[_.property.type || 0];
  return _
    ? (0, _.jsx)(_, {
        ..._,
      })
    : (console.error(
        `No component handler for asset property type ${_.property.type}!`,
      ),
      null);
}
function _(_) {
  let {
      state: _,
      onStateChange: _,
      property: {
        float_max: _ = 1,
        float_min: _ = 0,
        localized_label: _,
        _: _,
      },
    } = _,
    _ = _.properties[_],
    _ = (_) => (_) => {
      let _ = _[0] <= _,
        _ = _[1] >= _;
      if (_ && _) {
        let _ = {
          ..._.properties,
        };
        delete _[_],
          _(
            {
              ..._,
              properties: _,
            },
            _,
          );
      } else {
        let _ = _
          ? {
              ..._,
            }
          : {
              property_id: _,
            };
        (_.float_max = _[1]),
          (_.float_min = _[0]),
          _(
            {
              ..._,
              properties: {
                ..._.properties,
                [_]: _,
              },
            },
            _,
          );
      }
    },
    _ = [_?.float_min ?? _, _?.float_max ?? _],
    _ = _[0] <= _,
    _ = _[1] >= _,
    _ = _ && _,
    _ = (_) => (_) => {
      let _ = [..._];
      (_[_] = _), _(!0)(_);
    };
  return (0, _.jsxs)(_, {
    direction: `column`,
    gap: `2`,
    marginTop: `2`,
    children: [
      (0, _.jsx)(_, {
        weight: `medium`,
        contrast: `subtitle`,
        children: _,
      }),
      (0, _.jsxs)(_, {
        direction: `row`,
        align: `center`,
        gap: `2`,
        children: [
          (0, _.jsx)(_, {
            variant: `inset-focus`,
            value: _ ? void 0 : _[0],
            onChange: _(0),
            placeholder: _.Localize(`#AssetProperty_Range_MinPlaceholder`),
          }),
          (0, _.jsx)(_, {
            size: `4`,
            weight: `medium`,
            children: `-`,
          }),
          (0, _.jsx)(_, {
            variant: `inset-focus`,
            value: _ ? void 0 : _[1],
            onChange: _(1),
            placeholder: _.Localize(`#AssetProperty_Range_MaxPlaceholder`),
          }),
        ],
      }),
      (0, _.jsx)(_, {
        min: _,
        max: _,
        step: (_ - _) / 100,
        value: _,
        onValueChange: _(!1),
        onValueSettled: _(!0),
        color: _ ? `dull` : void 0,
      }),
    ],
  });
}
function _(_) {
  let {
      state: _,
      onStateChange: _,
      property: { int_max: _, int_min: _, localized_label: _, _: _ },
    } = _,
    _ = _.properties[_],
    _ = (_) => (_) => {
      let _ = _[0] <= parseInt(_),
        _ = _[1] >= parseInt(_);
      if (_ && _) {
        let _ = {
          ..._.properties,
        };
        delete _[_],
          _(
            {
              ..._,
              properties: _,
            },
            _,
          );
      } else {
        let _ = _
          ? {
              ..._,
            }
          : {
              property_id: _,
            };
        (_.int_max = _[1].toString()),
          (_.int_min = _[0].toString()),
          _(
            {
              ..._,
              properties: {
                ..._.properties,
                [_]: _,
              },
            },
            _,
          );
      }
    },
    _ = [parseInt(_?.int_min ?? _), parseInt(_?.int_max ?? _)],
    _ = _[0] <= parseInt(_),
    _ = _[1] >= parseInt(_),
    _ = _ && _,
    _ = (_) => (_) => {
      let _ = [..._];
      (_[_] = _), _(!0)(_);
    };
  return (0, _.jsxs)(_, {
    direction: `column`,
    gap: `2`,
    marginTop: `2`,
    children: [
      (0, _.jsx)(_, {
        weight: `medium`,
        contrast: `subtitle`,
        children: _,
      }),
      (0, _.jsxs)(_, {
        direction: `row`,
        align: `center`,
        gap: `2`,
        children: [
          (0, _.jsx)(_, {
            variant: `inset-focus`,
            value: _ ? void 0 : _[0],
            onChange: _(0),
            placeholder: _.Localize(`#AssetProperty_Range_MinPlaceholder`),
          }),
          (0, _.jsx)(_, {
            size: `4`,
            weight: `medium`,
            children: `-`,
          }),
          (0, _.jsx)(_, {
            variant: `inset-focus`,
            value: _ ? void 0 : _[1],
            onChange: _(1),
            placeholder: _.Localize(`#AssetProperty_Range_MaxPlaceholder`),
          }),
        ],
      }),
      (0, _.jsx)(_, {
        min: parseInt(_),
        max: parseInt(_),
        step: 1,
        value: _,
        onValueChange: _(!1),
        onValueSettled: _(!0),
        color: _ ? `dull` : void 0,
      }),
    ],
  });
}
function _(_) {
  return null;
}
function _(_) {
  let {
      appid: _,
      facets: _,
      facetingInfo: _,
      accessories: _,
      assetProperties: _,
      state: _,
      onStateChange: _,
    } = _,
    _ = (0, _.useMemo)(() => _(_, _), [_, _]),
    _ = (0, _.useMemo)(() => _(_, _), [_, _]),
    _ = _(_, _, _, _.facets);
  return (0, _.jsxs)(_, {
    direction: `column`,
    gap: `2`,
    maxWidth: `300px`,
    marginTop: `2`,
    children: [
      (0, _.jsx)(_, {
        children: _.Localize(`#AdvancedSearch_PriceFieldLabel`),
      }),
      (0, _.jsx)(_, {
        state: _,
        onStateChange: _,
      }),
      _(_.app?.appid) &&
        (0, _.jsx)(_, {
          ..._,
        }),
      _.flatMap((_, _) => [
        (0, _.jsx)(
          _.Fragment,
          {
            children: _.map((_) =>
              (0, _.jsx)(
                _,
                {
                  facet: _,
                  state: _,
                  onStateChange: (_) => _(_, !0),
                },
                _.strLabel,
              ),
            ),
          },
          `facets_${_}`,
        ),
        _ < _.length - 1
          ? (0, _.jsx)(
              _,
              {
                color: `dull-9`,
                size: `4`,
                marginTop: `4`,
              },
              `sep_${_}`,
            )
          : null,
      ]),
      _.map((_) =>
        (0, _.jsx)(
          _,
          {
            property: _,
            state: _,
            onStateChange: _,
          },
          _._,
        ),
      ),
      _.length > 0 &&
        (0, _.jsx)(_, {
          children: _.Localize(`#Accessories_FieldSectionLabel`),
        }),
      _.map((_) =>
        (0, _.jsx)(
          _,
          {
            facet: _,
            state: _,
            onStateChange: (_) => _(_, !0),
          },
          _.internal_type,
        ),
      ),
    ],
  });
}
function _(_) {
  let { state: _, onStateChange: _, assetProperties: _, facets: _ } = _,
    _ = _.find((_) => _._ === 2),
    _ = Object.values(_).find((_) => _.name === `Exterior`),
    _ = Object.values(_).find((_) => _.name === `Quality`);
  return _
    ? (0, _.jsxs)(_.Fragment, {
        children: [
          !!_ &&
            (0, _.jsx)(_, {
              state: _,
              onStateChange: _,
              property: _,
              facet: _,
            }),
          !!_ &&
            (0, _.jsx)(_, {
              state: _,
              onStateChange: _,
              facet: _,
            }),
        ],
      })
    : null;
}
function _(_) {
  let { state: _, onStateChange: _, facet: _ } = _;
  return (0, _.jsxs)(_, {
    direction: `column`,
    gap: `2`,
    paddingBottom: `2`,
    marginTop: `2`,
    children: [
      (0, _.jsx)(_, {
        weight: `medium`,
        contrast: `subtitle`,
        children: _.localized_name,
      }),
      (0, _.jsx)(_, {
        state: _,
        onChange: _,
        ..._(_),
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    contrast: `subtitle`,
    weight: `medium`,
    _: `div`,
    marginTop: `2`,
    ..._,
  });
}
function _(_, _) {
  if (!_(_) || !_) return _;
  let _ = {
    ..._,
  };
  return delete _.Exterior, delete _.Quality, _;
}
function _(_, _) {
  return _(_) ? _.filter((_) => _._ !== 2) : _;
}
function _(_) {
  let {
      listing: { asset: _ },
      expectEnhancedAppearance: _,
      ..._
    } = _,
    {
      bWarnMissingAppearance: _,
      color: _,
      rgAccessories: _,
      rgProperties: _,
      strPrimaryImageURL: _,
      strType: _,
      strName: _,
      bMine: _,
      bAvailable: _,
    } = _(_);
  return (0, _.jsxs)(_, {
    ..._,
    children: [
      (0, _.jsxs)(_.Header, {
        children: [
          (0, _.jsx)(_.ItemColor, {
            color: _,
          }),
          _ &&
            (0, _.jsx)(_.Subtitle, {
              children: _,
            }),
          (0, _.jsx)(_.Title, {
            children: _,
          }),
        ],
      }),
      (0, _.jsxs)(_.Body, {
        children: [
          (0, _.jsx)(_.PrimaryImage, {
            src: _,
            dim: _,
          }),
          (0, _.jsx)(_, {
            justify: `end`,
            align: `end`,
            position: `absolute`,
            inset: `0`,
            children:
              _ &&
              (0, _.jsx)(`div`, {
                title: _.Localize(`#Listing_EnhancedAppearance_Missing`),
                children: (0, _.jsx)(_, {
                  width: `18px`,
                }),
              }),
          }),
        ],
      }),
      (0, _.jsxs)(_.Footer, {
        children: [
          _.length > 0 &&
            (0, _.jsx)(_, {
              align: `center`,
              minHeight: `0`,
              children: _.map((_, _) =>
                (0, _.jsx)(
                  _,
                  {
                    accessory: _,
                  },
                  _,
                ),
              ),
            }),
          (0, _.jsx)(_, {
            wrap: `wrap`,
            gap: `2`,
            marginTop: `2`,
            children: _.map((_) =>
              (0, _.jsx)(
                _,
                {
                  appid: _.appid,
                  property: _,
                  size: `2`,
                  color: `dull-11`,
                  truncate: !0,
                },
                _.propertyid,
              ),
            ),
          }),
          (0, _.jsx)(_, {
            appid: _.appid,
            properties: _,
          }),
          (0, _.jsx)(_, {
            mine: _,
            available: _,
            listing: _.listing,
            gap: `3`,
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { total: _, state: _, onChange: _, facets: _ } = _,
    _ = _.bSteamItems ? _.filterSteam : _.filterInGame,
    _ = _({
      appid: _.bSteamItems ? 753 : (_.app?.appid ?? 0),
      state: _,
      onStateChange: (_) =>
        _({
          ..._,
          filterSteam: _.bSteamItems ? _ : _.filterSteam,
          filterInGame: _.bSteamItems ? _.filterSteam : _,
        }),
      textFilter: _.strSearch,
      onClearText: () =>
        _({
          ..._,
          strSearch: void 0,
        }),
      facets: _,
    }),
    _ = _(_.length, _);
  return (0, _.jsxs)(_, {
    align: `center`,
    gap: `2`,
    wrap: `wrap`,
    children: [
      _
        ? (0, _.jsx)(_, {
            contrast: `description`,
            children: _,
          })
        : null,
      _.map(({ key: _, label: _, onClear: _ }) =>
        (0, _.jsxs)(
          _,
          {
            color: `dull`,
            onClick: _,
            children: [
              _,
              (0, _.jsx)(_, {
                marginLeft: `2`,
              }),
            ],
          },
          _,
        ),
      ),
    ],
  });
}
function _(_) {
  let { total: _, facetingInfo: _, facets: _, ..._ } = _,
    _ = (0, _.useMemo)(() => {
      let _ = {};
      if (!(!_ || !_)) {
        for (let _ of Object.keys(_))
          _(_[_], `select`, !0, void 0, _) && (_[_] = !0);
        return (_) => !!_[_];
      }
    }, [_, _]),
    _ = _({
      appid: _.state.app?.appid ?? 0,
      includeFacet: _,
      facets: _,
      ..._,
    }),
    _ = _(_.length, _);
  return (0, _.jsxs)(_, {
    align: `center`,
    gap: `2`,
    wrap: `wrap`,
    children: [
      _
        ? (0, _.jsx)(_, {
            contrast: `description`,
            children: _,
          })
        : null,
      _.map(({ key: _, label: _, onClear: _ }) =>
        (0, _.jsxs)(
          _,
          {
            color: `dull`,
            onClick: _,
            children: [
              _,
              (0, _.jsx)(_, {
                marginLeft: `2`,
              }),
            ],
          },
          _,
        ),
      ),
    ],
  });
}
function _(_, _) {
  let _ = ``;
  return (
    typeof _ == `number` && _ > 0
      ? (_ = _.LocalizePlural(`#Search_AmountFoundFor`, _(_)))
      : typeof _ == `number`
        ? (_ = _.LocalizePlural(`#Search_AmountFound`, _(_)))
        : _ > 0 && (_ = _.Localize(`#Search_ResultsFoundFor`)),
    _
  );
}
function _(_) {
  let {
      appid: _,
      state: _,
      onStateChange: _,
      textFilter: _,
      onClearText: _,
      includeFacet: _,
      facets: _,
    } = _,
    _ = _(),
    _ = [];
  _ &&
    _.push({
      key: `q`,
      label: `"${_}"`,
      onClear: _,
    });
  let _ = _(_),
    _ = _(_);
  if (_(_.price, _.maxPrice)) {
    let [_, _] = _.price,
      _ = _(_, _.currency.eCurrency),
      _ = _ < _.maxPrice ? _(_, _.currency.eCurrency) : null,
      _ = ``;
    (_ = _ && !_ ? _.Localize(`#PriceFilter_ValueAndUp`, _) : `${_} - ${_}`),
      _.push({
        key: `p`,
        label: _,
        onClear: () =>
          _({
            ..._,
            price: [0, _.maxPrice],
          }),
      });
  }
  for (let [_, _] of Object.entries(_.facets))
    if (!(_ && !_(_)))
      for (let _ of Object.keys(_)) {
        let _ = (_ && _[_])?.tags,
          _ = _ ? _[_] : void 0,
          _ = _ ? _.localized_name : _;
        _.push({
          key: `f_${_}_${_}`,
          label: _,
          onClear: () =>
            _({
              ..._,
              facets: _(_.facets, _, _, !1),
            }),
        });
      }
  for (let [_, _] of Object.entries(_.accessories)) {
    let _ = _.data ? _.data.find((_) => _.internal_type === _) : void 0;
    for (let _ of Object.keys(_)) {
      let _ = _;
      _ === `$any$` &&
        ((_ = _.Localize(`#Accessories_AnyFilter`)),
        _ &&
          (_ = _.Localize(
            `#Accessories_TypeAndValue_Breadcrumb`,
            _.localized_type,
            _,
          ))),
        _ === `$none$` &&
          ((_ = _.Localize(`#Accessories_NoneFilter`)),
          _ &&
            (_ = _.Localize(
              `#Accessories_TypeAndValue_Breadcrumb`,
              _.localized_type,
              _,
            ))),
        _.push({
          key: `a_${_}_${_}`,
          label: _,
          onClear: () =>
            _({
              ..._,
              accessories: _(_.accessories, _, _, !1),
            }),
        });
    }
  }
  for (let [_, _] of Object.entries(_.properties)) {
    let _ = _.data ? _.data.get(parseInt(_)) : void 0;
    if (!_) continue;
    let _ = [0, 0];
    _.type === 1
      ? ((_[0] = _.float_min ?? _.float_min ?? 0),
        (_[1] = _.float_max ?? _.float_max ?? 1))
      : _.type === 2 &&
        ((_[0] = _.int_min ?? _.int_min ?? 0),
        (_[1] = _.int_max ?? _.int_max ?? 0));
    let _ = _.Localize(
        `#AssetPropertyNumberFilterRange`,
        _.localized_label ?? ``,
        _[0],
        _[1],
      ),
      _ = `ap_${_}`;
    _.push({
      key: _,
      label: _,
      onClear: () => {
        let _ = {
          ..._,
          properties: {
            ..._.properties,
          },
        };
        delete _.properties[_._], _(_);
      },
    });
  }
  return _;
}
function _(_, _) {
  let [_, _] = _;
  return (_ > 0 && _ < _) || (_ < _ && _ > 0);
}
function _(_, _, _, _) {
  let _ = {
    ..._,
    [_]: {
      ..._[_],
    },
  };
  return (
    (_[_][_] = !0),
    _ || (Object.keys(_[_]).length === 1 ? delete _[_] : delete _[_][_]),
    _
  );
}
var _ = _(_(), 1);
function _(_) {
  let { appid: _, onClose: _, buckets: _, activeBucketID: _ } = _,
    [_, _] = (0, _.useState)(() =>
      _ ? _.find(({ bucket_id: _ }) => _ === _) : void 0,
    ),
    _ = _(),
    _ = _(_, _?.bucket_id),
    _ = _(_, _?.bucket_id, !1),
    _ = !!_.data && !!_.data && !_.isPending && !!_;
  return (0, _.jsxs)(_, {
    onClose: _,
    children: [
      (0, _.jsx)(_.Heading, {
        size: `6`,
        children: _.Localize(`#BuyOrderDialog_Header_NoItem`),
      }),
      (_.length > 1 || !_) &&
        (0, _.jsxs)(_, {
          justify: `start`,
          gap: `3`,
          align: `center`,
          direction: {
            initial: `column`,
            _: `row`,
          },
          children: [
            (0, _.jsx)(_, {
              contrast: `title`,
              children: _.Localize(`#BuyOrderDialog_BucketPicker_Label`),
            }),
            (0, _.jsx)(_, {
              onSelectionChange: _,
              options: _,
              selectedValue: _ || null,
              placeholder: _.Localize(
                `#BuyOrderDialog_BucketPicker_Placeholder`,
              ),
              getOptionLabel: (_) =>
                _.localized_name_inside_group || _.localized_name,
            }),
          ],
        }),
      !_ && _ && (0, _.jsx)(_.Loading, {}),
      _ &&
        (0, _.jsx)(
          _,
          {
            buyOrderBucket: _,
            description: _.data,
            serverInfo: _.data,
            initialPrice: _.data?.amtMinSellOrder || void 0,
          },
          _.bucket_id,
        ),
    ],
  });
}
function _(_) {
  let { buyOrderBucket: _, description: _, serverInfo: _, initialPrice: _ } = _,
    [_, _] = (0, _.useState)({
      price: _ || 0,
      quantity: 1,
    }),
    [_, _] = (0, _.useState)({});
  (0, _.useEffect)(() => {
    let {
      billing_address: {
        firstname: _,
        lastname: _,
        address1: _,
        address2: _,
        city: _,
        state: _,
        postcode: _,
      } = {},
    } = _;
    _({
      address: _,
      addressTwo: _,
      firstName: _,
      lastName: _,
      city: _,
      state: _,
      postalCode: _,
      bSaveAddress: !0,
    });
  }, [_]);
  let _ = _.wallet_info ? _.wallet_info.wallet_currency : _(_.country_code),
    _ = _.wallet_info ? _(parseInt(_.wallet_info.wallet_balance), _) : ``,
    { mutation: _, confirmation: _ } = _(_, _, _, _, _),
    _ = _(_.appid ?? 0, _).data ?? {},
    _ = _.isIdle || (_.isError && _.error.bFatal === !1),
    _ = _.require_billing_info && _,
    _ = _.error?.bFatal ? _.error : void 0,
    _ = _(_, _.wallet_info),
    _ = _(_, _, _),
    _ = _.price * _.quantity + _,
    _ = _(_.wallet_info, _);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsxs)(_, {
        wrap: `wrap`,
        justify: `between`,
        align: `start`,
        gap: `2`,
        children: [
          (0, _.jsx)(_, {
            buyOrderBucket: _,
            description: _,
          }),
          (0, _.jsx)(_, {
            info: _,
            onChange: _,
            serverInfo: _,
            currency: _,
            fees: _,
            disabled: !_,
          }),
        ],
      }),
      _ &&
        (0, _.jsx)(_.FatalError, {
          children:
            _.message || _.Localize(`#PurchaseDialog_Error_ServerGeneric`),
        }),
      !_ &&
        (0, _.jsxs)(_.Fragment, {
          children: [
            _.isSuccess &&
              _.data?.buy_orderid &&
              (0, _.jsx)(_, {
                _: _.data.buy_orderid,
              }),
            _ &&
              (0, _.jsx)(_.ConfirmationPoller, {
                confirmation: _,
                onRetry: _.mutate,
                serverInfo: _,
              }),
            _ &&
              (0, _.jsx)(_.BillingInfoSection, {
                state: _,
                onChange: _,
                accountName: _.account_name,
                walletBalance: _,
                billingCountry: _.localized_country,
                billingStates: _.billing_states,
                hasFunds: _,
              }),
            !_.isSuccess &&
              !_ &&
              (0, _.jsx)(_, {
                hideSSA: !_,
                serverInfo: _,
                order: _,
                onPurchase: _.mutate,
                disabled: !_ || !_,
                hasFunds: _,
              }),
            _.error?.bFatal === !1 &&
              (0, _.jsx)(_.NonFatalError, {
                children:
                  _.error.message ||
                  _.Localize(`#PurchaseDialog_Error_ServerGeneric`),
              }),
          ],
        }),
    ],
  });
}
function _(_, _, _, _, _) {
  let [_, _] = (0, _.useState)(null),
    _ =
      _(_.appid ?? 0, _.wallet_info ? _.wallet_info.wallet_currency : 1).data ??
      {};
  return {
    mutation: _({
      mutationFn: async () => {
        if (_.require_billing_info) {
          let _ = _(_, _);
          if (_)
            throw {
              bFatal: !1,
              message: _,
            };
        }
        let _ = _.price * _.quantity,
          _ = _(_, _, _),
          _ = {
            sessionid: _(),
            currency: _(_.country_code),
            appid: _.appid || 0,
            market_hash_name: _.bucket_id || ``,
            price_total: _,
            tradefee_tax: _,
            quantity: _.quantity,
            first_name: _.firstName ?? ``,
            last_name: _.lastName ?? ``,
            billing_address: _.address ?? ``,
            billing_address_two: _.addressTwo ?? ``,
            billing_country: _.country_code ?? ``,
            billing_city: _.city ?? ``,
            billing_state: _.state ?? ``,
            billing_postal_code: _.postalCode ?? ``,
            confirmation: _ ? _._ : `0`,
            save_my_address: _.bSaveAddress ? `1` : `0`,
          },
          _ = new FormData();
        for (let [_, _] of Object.entries(_))
          _.set(_, typeof _ == `string` ? _ : _.toString());
        let _ = await fetch(`/market/createbuyorder/`, {
          method: `POST`,
          credentials: `include`,
          body: _,
        });
        try {
          let _ = await _.json();
          if (_._ && _.success == 1) {
            if ((_ && _(null), _.message))
              throw {
                bFatal: !0,
                message: _.message,
              };
            return _;
          } else if (_?.need_confirmation)
            _({
              _: _.confirmation.confirmation_id,
              cAttempts: _ ? _.cAttempts + 1 : 0,
            });
          else if (_)
            throw (
              (_(null),
              {
                bFatal: !0,
                message: _.Localize(`#PurchaseDialog_Error_NoConfirmation`),
              })
            );
          else
            throw _?.message
              ? {
                  bFatal: !0,
                  message: _.message,
                }
              : {
                  bFatal: !0,
                  message: _.Localize(`#BuyOrderDialog_Status_GenericError`),
                };
          return _;
        } catch (_) {
          throw _?.bFatal
            ? _
            : {
                bFatal: !0,
                message: _.Localize(`#BuyOrderDialog_Status_GenericError`),
              };
        }
      },
    }),
    confirmation: _,
  };
}
function _(_) {
  let { description: _, buyOrderBucket: _ } = _,
    { appid: _ } = _,
    _ = _(_),
    { data: _ } = _({
      appid: _,
    });
  return (0, _.jsxs)(_, {
    gap: `2`,
    align: `center`,
    children: [
      (0, _.jsx)(_, {
        width: `64px`,
        height: `64px`,
        objectFit: `contain`,
        src: _,
        alt: ``,
      }),
      (0, _.jsxs)(_, {
        direction: `column`,
        children: [
          (0, _.jsx)(_, {
            size: `4`,
            contrast: `subtitle`,
            truncate: !0,
            children: _.localized_name || _.bucket_id,
          }),
          (0, _.jsx)(_, {
            size: `3`,
            truncate: !0,
            children: _?.name,
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let _ = 1;
  return (
    _ && _.wallet_market_minimum && (_ = parseInt(_.wallet_market_minimum)),
    3 * _
  );
}
function _(_, _) {
  let _ = _(_);
  return _.price >= _;
}
function _(_) {
  let {
      info: _,
      onChange: _,
      serverInfo: _,
      fees: _,
      currency: _,
      disabled: _,
    } = _,
    [_, _] = (0, _.useState)(null),
    _ = (_) => {
      let _ = _(_, _);
      _(_),
        isNaN(_) ||
          _({
            ..._,
            price: _,
          });
    },
    _ = () => _(null),
    _ = (_) => {
      _({
        ..._,
        quantity: _,
      });
    },
    _ = _(_, _, _),
    _ = _.price * _.quantity + _,
    _ = _(_, _.wallet_info);
  return (0, _.jsxs)(_, {
    columns: `1fr 100px max-content`,
    justifyItems: `end`,
    alignItems: `center`,
    gap: `2`,
    children: [
      (0, _.jsx)(_, {
        label: _.Localize(`#BuyOrderDialog_PriceField`),
        suffix: _.Localize(`#BuyOrderDialog_PriceField_Suffix`),
        error: !_,
        children: (0, _.jsx)(_, {
          value: typeof _ == `string` ? _ : _(_.price, _),
          onTextChange: _,
          size: `1`,
          onBlur: _,
          disabled: _,
        }),
      }),
      (0, _.jsx)(_, {
        label: _.Localize(`#BuyOrderDialog_QuantityField`),
        children: (0, _.jsx)(_, {
          value: _.quantity,
          onValueChange: _,
          valueToString: (_) => _.toString(),
          valueFromString: (_) => (isNaN(parseInt(_)) ? _ : parseInt(_)),
          size: `1`,
          disabled: _,
        }),
      }),
      _ > 0 &&
        (0, _.jsx)(_, {
          label: _.Localize(
            `#PurchaseDialog_LocalTax_Label`,
            _.tax_rate.tax_region,
          ),
          children: (0, _.jsx)(_, {
            contrast: `subtitle`,
            size: `3`,
            children: _(_, _),
          }),
        }),
      (0, _.jsx)(_, {
        label: _.LocalizeReact(`#BuyOrderDialog_MaxPrice`, (0, _.jsx)(_, {})),
        children: (0, _.jsx)(_, {
          contrast: `title`,
          size: `3`,
          children: _(_, _),
        }),
      }),
      (0, _.jsx)(_, {
        size: `3`,
        color: `text-red`,
        align: `center`,
        children: _
          ? `\xA0`
          : _.Localize(`#BuyOrderDialog_MinPriceError`, _(_(_.wallet_info), _)),
      }),
    ],
  });
}
function _(_, _) {
  if (!_?.tradefee_addtax || (_?.tradefee_taxrate || 0) <= 0) return 0;
  let _ = _.tradefee_taxrate,
    _ = _.price * _.quantity;
  if (_ < 3) return 0;
  let _ = 0;
  if (_ - 2 <= 200 / 10) _ = 2;
  else {
    let _ = Math.floor((_ * 100) / 115);
    for (let _ = 0; _ < 3; _++)
      if (
        ((_ =
          Math.max(1, Math.floor((_ * 10) / 100)) +
          Math.max(1, Math.floor((_ * 5) / 100))),
        _ + _ < _)
      )
        _++;
      else {
        _ + _ > _ && _--;
        break;
      }
  }
  return Math.floor((_ * _) / 100 + 0.5);
}
function _(_, _, _) {
  return _(_, _.tax_rate);
}
function _(_) {
  let { label: _, children: _, suffix: _, error: _ } = _;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        size: `3`,
        color: _ ? `text-red` : void 0,
        children: _,
      }),
      _,
      (0, _.jsx)(_, {
        size: `3`,
        children: _,
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    color: `accent-9`,
    title: _.Localize(`#BuyOrderDialog_MaxPrice_Tip`),
    children: `(?)`,
  });
}
function _(_) {
  let { _: _ } = _,
    _ = _(_);
  if (_.isError)
    return (0, _.jsx)(_.FatalError, {
      children:
        _.error?.message || _.Localize(`#BuyOrderDialog_Status_GenericError`),
    });
  let _ = new URLSearchParams(location.search);
  _.delete(`buy`);
  let _ = `?${_.toString()}`;
  switch (_.data?.status || `pending`) {
    case `pending`:
      return (0, _.jsxs)(_, {
        align: `center`,
        children: [
          (0, _.jsx)(_, {
            size: `5`,
          }),
          (0, _.jsx)(_, {
            align: `center`,
            contrast: `subtitle`,
            size: `4`,
            children: _.Localize(`#BuyOrderDialog_Status_Pending`),
          }),
        ],
      });
    case `filled`: {
      let { strAmountText: _, hrefInventory: _ } = _.data;
      return (0, _.jsxs)(_, {
        children: [
          (0, _.jsx)(_, {
            contrast: `subtitle`,
            size: `4`,
            children: _.Localize(`#BuyOrderDialog_Status_Filled`),
          }),
          !!_ &&
            (0, _.jsx)(_, {
              size: `3`,
              children: _,
            }),
          !!_ &&
            (0, _.jsxs)(_, {
              justify: `end`,
              gap: `2`,
              children: [
                (0, _.jsx)(_, {
                  color: `dull`,
                  href: _,
                  children: _.Localize(`#PurchaseDialog_Close`),
                }),
                (0, _.jsx)(_, {
                  variant: `vibrant`,
                  color: `green`,
                  href: _,
                  children: _.Localize(`#PurchaseDialog_ViewInventory`),
                }),
              ],
            }),
        ],
      });
    }
    default:
      return (0, _.jsxs)(_, {
        children: [
          (0, _.jsx)(_, {
            contrast: `title`,
            size: `4`,
            children: _.Localize(`#BuyOrderDialog_Status_Settled`),
          }),
          (0, _.jsx)(_, {
            contrast: `subtitle`,
            size: `3`,
            children: _.Localize(`#BuyOrderDialog_Status_Settled_Note`),
          }),
          (0, _.jsx)(_, {
            justify: `end`,
            children: (0, _.jsx)(_, {
              color: `dull`,
              href: _,
              children: _.Localize(`#PurchaseDialog_Close`),
            }),
          }),
        ],
      });
  }
}
function _(_) {
  return (0, _.jsx)(_, {
    background: `dull-5`,
    padding: `5`,
    gap: `2`,
    direction: `column`,
    ..._,
  });
}
var _ = 5e3;
function _(_) {
  let [_, _] = (0, _.useState)(Date.now());
  return (
    (0, _.useEffect)(() => _(Date.now()), [_]),
    _({
      queryKey: [`market`, `buyorderstatus`, _],
      queryFn: async () => {
        let _ = new URLSearchParams();
        _.set(`sessionid`, _()), _.set(`buy_orderid`, _);
        let _ = await fetch(`/market/getbuyorderstatus/?${_.toString()}`);
        if (!_._) throw _.Localize(`#BuyOrderDialog_Status_GenericError`);
        let _ = await _.json();
        if (_?.success && _.purchased) {
          let _ = (_.purchases || []).find((_) => _.assetid && _.contextid);
          return {
            status: `filled`,
            strAmountText: _.purchase_amount_text,
            hrefInventory: _
              ? `/my/inventory/#${_.appid}_${_.contextid}_${_.assetid}`
              : void 0,
          };
        }
        return Date.now() - _ > _
          ? {
              status: `settled`,
            }
          : {
              status: `pending`,
            };
      },
      refetchInterval: (_) => {
        if (_.state.status === `error`) return !1;
        if (_.state.data) {
          let _ = _.state.data;
          if (_.status === `filled` || _.status === `settled`) return !1;
        }
        return 1e3;
      },
    })
  );
}
function _(_) {
  let {
      onPurchase: _,
      disabled: _,
      hideSSA: _,
      hasFunds: _,
      serverInfo: {
        ssa: { last_update: _, eu_ssa: _ },
      },
    } = _,
    _ = ``;
  if (!_) {
    let _ = new URL(location.href);
    _.searchParams.set(`buy`, `1`);
    let _ = _.toString();
    _ = `${_.STORE_BASE_URL}steamaccount/addfunds?marketlisting=1&returnurl=${encodeURIComponent(_)}`;
  }
  let _ = () => {
      _ && _();
    },
    [_, _] = (0, _.useState)(!1),
    _ = {
      variant: `vibrant`,
      color: `green`,
      width: {
        initial: `100%`,
        _: void 0,
      },
    };
  return (0, _.jsxs)(_, {
    columns: {
      initial: `1fr`,
      _: `1fr max-content`,
    },
    gap: {
      initial: `2`,
      _: void 0,
    },
    alignContent: `end`,
    justifyContent: `end`,
    children: [
      (0, _.jsxs)(_, {
        direction: `column`,
        gap: `2`,
        children: [
          _ &&
            !_ &&
            (0, _.jsx)(_.SSAAgreement, {
              lastUpdate: _,
              agreed: _,
              onAgreeChange: _,
            }),
          _ && !_ && _ && (0, _.jsx)(_.EUSSAAgreement, {}),
        ],
      }),
      _ &&
        (0, _.jsx)(_, {
          type: `submit`,
          ..._,
          disabled: !_ || _,
          onClick: _,
          children: _.Localize(`#PurchaseDialog_Action_Purchase`),
        }),
      !_ &&
        (0, _.jsx)(_, {
          ..._,
          href: _,
          disabled: _,
          children: _.Localize(`#PurchaseDialog_Action_AddFunds`),
        }),
    ],
  });
}
function _(_) {
  let { appid: _, activeBucketID: _, buckets: _, loading: _, ..._ } = _,
    [_, _] = _();
  if (!_.logged_in) {
    let _ = new URL(location.href);
    return (
      _.searchParams.set(`buy`, `1`),
      (0, _.jsx)(_, {
        href: `${_.COMMUNITY_BASE_URL}login/home/?goto=${encodeURIComponent(_.toString())}`,
        ..._,
      })
    );
  }
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        onClick: () => _(!0),
        loading: _,
        ..._,
      }),
      _ &&
        (0, _.jsx)(_, {
          appid: _,
          onClose: () => _(!1),
          activeBucketID: _,
          buckets: _,
        }),
    ],
  });
}
function _(_) {
  let { description: _ } = _,
    _ = _() === `initial`;
  if (!_) return null;
  let _ = _.descriptions ?? [];
  if (_(_.appid)) {
    let _ = !1,
      _ = !1,
      _ = !1;
    _ = _.filter((_) => {
      if (_.name === `exterior_wear` || _.name === `sticker_info`) return !1;
      if (_.name === `attribute` && !_.commodity)
        if (!_) _ = !0;
        else return !1;
      return _.name === `blank` && (!_ || _)
        ? !1
        : ((_ = _.name === `blank`), (_ ||= !_), !0);
    });
  }
  return (0, _.jsx)(_, {
    direction: `column`,
    justify: `center`,
    minWidth: `0`,
    gap: `2`,
    paddingTop: `4`,
    paddingRight: `4`,
    children: (0, _.jsxs)(_.Root, {
      description: {
        ..._,
        descriptions: _,
      },
      children: [
        !_ && (0, _.jsx)(_.Name, {}),
        !_ &&
          (0, _.jsx)(_.GameInfo, {
            hrefGame: _.AppHome(_.appid),
          }),
        (0, _.jsx)(_.Descriptions, {}),
      ],
    }),
  });
}
function _(_ = {}) {
  return _({
    mutationKey: [`market`, `cancelbuyorder`],
    mutationFn: async (_) => {
      let _ = new FormData();
      _.set(`sessionid`, _()), _.set(`buy_orderid`, _._);
      let _ = await fetch(`/market/cancelbuyorder/`, {
        method: `POST`,
        credentials: `include`,
        body: _,
      });
      if (!_._) throw Error(_.Localize(`#CancelBuyOrder_GenericError`));
      let _ = await _.json();
      if (!_.success)
        throw typeof _.error == `string`
          ? Error(_.error)
          : Error(_.Localize(`#CancelBuyOrder_GenericError`));
    },
    ..._,
  });
}
function _(_ = {}) {
  return _({
    mutationKey: [`market`, `cancellisting`],
    mutationFn: async (_) => {
      let _ = new FormData();
      if (
        (_.set(`sessionid`, _()),
        !(
          await fetch(`/market/removelisting/${_._}`, {
            method: `POST`,
            credentials: `include`,
            body: _,
          })
        )._)
      )
        throw Error(_.Localize(`#CancelListing_GenericError`));
    },
    ..._,
  });
}
function _(_) {
  let { onClose: _, children: _, listingID: _, description: _, ..._ } = _,
    _ = _(),
    _ = _({
      onSuccess: () => _(),
    }),
    _ = () =>
      _.mutate({
        _: _,
      }),
    _ = _.isPending,
    _ = _.isError || _.isSuccess;
  return (0, _.jsxs)(_, {
    onClose: _,
    ..._,
    children: [
      (0, _.jsx)(_.Heading, {
        children: _.Localize(`#CancelListing_Dialog_Header`),
      }),
      _ &&
        (0, _.jsx)(_, {
          children: _.LocalizeReact(
            `#CancelListing_Dialog_Prompt`,
            (0, _.jsx)(_, {
              weight: `heavy`,
              children: _.market_name,
            }),
          ),
        }),
      !_ &&
        (0, _.jsx)(_, {
          children: _.Localize(`#CancelListing_Dialog_Prompt_Generic`),
        }),
      (0, _.jsxs)(_, {
        justify: `end`,
        align: `center`,
        gap: `2`,
        marginTop: `2`,
        children: [
          _.isSuccess &&
            (0, _.jsx)(_, {
              type: `success`,
              children: _.Localize(`#CancelListing_Dialog_Success`),
            }),
          _.isError &&
            (0, _.jsx)(_, {
              type: `error`,
              children: _.error.message,
            }),
          !_ &&
            (0, _.jsx)(_, {
              onClick: _,
              loading: _,
              children: _.Localize(`#CancelListing_Dialog_Yes`),
            }),
          !_ &&
            (0, _.jsx)(_, {
              onClick: _,
              color: `dull`,
              disabled: _,
              children: _.Localize(`#CancelListing_Dialog_No`),
            }),
          _ &&
            (0, _.jsx)(_, {
              onClick: _,
              color: `dull`,
              children: _.Localize(`#Button_Close`),
            }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { children: _, type: _ } = _;
  return (0, _.jsx)(_, {
    flexGrow: `1`,
    children: (0, _.jsx)(_, {
      size: `2`,
      color: _ === `error` ? `text-red` : `text-green`,
      children: _,
    }),
  });
}
function _(_) {
  let { orders: _, ..._ } = _;
  return _
    ? (0, _.jsx)(_, {
        buy: _.rgBuyOrders,
        sell: _.rgSellOrders,
        ..._,
      })
    : (0, _.jsx)(_, {
        error: !0,
        children: (0, _.jsx)(_, {
          color: `text-red`,
          children: _.Localize(`#MyOrders_FailedToLoad`),
        }),
      });
}
function _(_) {
  let { buy: _, sell: _, ..._ } = _,
    _ = _.length + _.length > 0,
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(!1);
  if (!_) return (0, _.jsx)(_, {});
  let _ = {
      initial: `max-content max-content 1fr`,
      _: `2fr max-content max-content 1fr`,
    },
    _ = _.length > 5,
    _ = _.slice(0, 5),
    _ = _.length > 5,
    _ = _.slice(0, 5);
  return (0, _.jsx)(_, {
    children: (0, _.jsxs)(_, {
      columns: _,
      gap: `1`,
      alignContent: `center`,
      children: [
        _.length > 0 &&
          (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_, {
                children: _.Localize(`#MyOrders_Heading_MyPurchaseOffers`),
              }),
              (0, _.jsx)(_, {
                orders: _,
                ..._,
              }),
            ],
          }),
        _ &&
          !_ &&
          (0, _.jsx)(_, {
            onClick: () => _(!0),
            children: _.Localize(`#MyOrders_SeeAllN`, _.length),
          }),
        _.length > 0 &&
          (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_, {
                children: _.Localize(`#MyOrders_Heading_MyListings`),
              }),
              (0, _.jsx)(_, {
                orders: _,
                ..._,
              }),
            ],
          }),
        _ &&
          !_ &&
          (0, _.jsx)(_, {
            onClick: () => _(!0),
            children: _.Localize(`#MyOrders_SeeAllN`, _.length),
          }),
      ],
    }),
  });
}
function _(_) {
  let { children: _, onClick: _ } = _;
  return (0, _.jsx)(_, {
    gridColumn: `1 / -1`,
    children: (0, _.jsx)(_, {
      color: `text-body`,
      underline: `always`,
      onClick: _,
      children: _,
    }),
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    gridColumn: `1 / -1`,
    children: (0, _.jsx)(_, {
      size: {
        initial: `4`,
        _: `5`,
      },
      children: _.children,
    }),
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    children: (0, _.jsx)(_, {
      children: _.Localize(`#MyOrders_NoActiveOrders_Item`),
    }),
  });
}
function _(_) {
  let { children: _, error: _ } = _;
  return (0, _.jsx)(_, {
    radius: `md`,
    direction: `column`,
    gap: `2`,
    background: `dull-5`,
    padding: `2`,
    borderColor: _ ? `red-8` : `accent-8`,
    border: `2px solid`,
    children: _,
  });
}
function _(_) {
  let { orders: _, ..._ } = _,
    _ = _() === `initial`;
  if (_.length === 0)
    return (0, _.jsx)(_, {
      gridColumn: `1 / -1`,
      background: `dull-9 20%`,
      children: (0, _.jsx)(_, {
        contrast: `note`,
        children: _.Localize(`#MyOrders_NoBuyOrders_Item`),
      }),
    });
  let _ = (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        textAlign: `start`,
        children: _.Localize(`#MyOrders_GridHeader_Name`),
      }),
      (0, _.jsx)(_, {
        children: _.Localize(`#MyOrders_GridHeader_Quantity`),
      }),
      (0, _.jsx)(_, {
        children: _.Localize(`#MyOrders_GridHeader_Price`),
      }),
      (0, _.jsx)(_, {}),
    ],
  });
  return (0, _.jsxs)(_.Fragment, {
    children: [
      !_ && _,
      _.map((_) =>
        (0, _.jsx)(
          _,
          {
            order: _,
            ..._,
          },
          _.buy_orderid,
        ),
      ),
    ],
  });
}
function _(_) {
  let {
      order: {
        appid: _,
        hash_name: _,
        price: _,
        quantity: _,
        quantity_remaining: _,
        wallet_currency: _,
        buy_orderid: _,
      },
    } = _,
    _ = _(),
    _ = _({
      onSuccess: () => _(),
    }),
    _ = _(_, _),
    _ = _() === `initial`;
  if (_.isSuccess) return null;
  let _ = {
    price: _(_, _),
    appid: _,
    quantity: _ ?? _,
    description: _.data,
    cancelMutation: _,
    _: _,
  };
  return _
    ? (0, _.jsx)(_, {
        ..._,
      })
    : (0, _.jsx)(_, {
        ..._,
      });
}
function _(_) {
  let {
    _: _,
    appid: _,
    quantity: _,
    description: _,
    cancelMutation: _,
    price: _,
  } = _;
  return (0, _.jsxs)(_, {
    columns: `subgrid`,
    background: `dull-9 20%`,
    gridColumn: `1 / -1`,
    alignItems: `center`,
    justifyItems: `center`,
    children: [
      (0, _.jsx)(_, {
        justifySelf: `start`,
        children: (0, _.jsx)(_, {
          appid: _,
          description: _,
        }),
      }),
      (0, _.jsx)(_, {
        textAlign: `center`,
        children: (0, _.jsx)(_, {
          children: _,
        }),
      }),
      (0, _.jsx)(_, {
        textAlign: `center`,
        children: (0, _.jsx)(_, {
          children: _,
        }),
      }),
      (0, _.jsx)(_, {
        children: (0, _.jsx)(_, {
          variant: `ghost`,
          color: `dull`,
          loading: _.isPending,
          onClick: () =>
            _.mutate({
              _: _,
            }),
          children: _.Localize(`#MyOrders_Cancel`),
        }),
      }),
      _.isError &&
        (0, _.jsx)(_, {
          gridColumn: `1 / -1`,
          marginBottom: `2`,
          children: (0, _.jsx)(_, {
            _: `div`,
            color: `text-red`,
            size: `2`,
            children: _.Localize(`#CancelBuyOrder_GenericError`),
          }),
        }),
    ],
  });
}
function _(_) {
  let {
    _: _,
    description: _,
    appid: _,
    price: _,
    quantity: _,
    cancelMutation: _,
  } = _;
  return (0, _.jsxs)(_, {
    columns: `subgrid`,
    background: `dull-9 20%`,
    gridColumn: `1 / -1`,
    alignItems: `center`,
    justifyItems: `center`,
    children: [
      (0, _.jsx)(_, {
        justifySelf: `start`,
        gridColumn: `1 / -1`,
        children: (0, _.jsx)(_, {
          compact: !0,
          appid: _,
          description: _,
        }),
      }),
      (0, _.jsx)(_, {
        textAlign: `center`,
        children: (0, _.jsx)(_, {
          children: _ ? _.Localize(`#MyOrders_QuantityWithValue`, _) : ``,
        }),
      }),
      (0, _.jsx)(_, {
        textAlign: `center`,
        children: (0, _.jsx)(_, {
          children: _,
        }),
      }),
      (0, _.jsx)(_, {
        justifySelf: `end`,
        children: (0, _.jsx)(_, {
          variant: `ghost`,
          color: `dull`,
          loading: _.isPending,
          onClick: () =>
            _.mutate({
              _: _,
            }),
          children: _.Localize(`#MyOrders_Cancel`),
        }),
      }),
      _.isError &&
        (0, _.jsx)(_, {
          gridColumn: `1 / -1`,
          marginBottom: `2`,
          children: (0, _.jsx)(_, {
            _: `div`,
            color: `text-red`,
            size: `2`,
            children: _.Localize(`#CancelBuyOrder_GenericError`),
          }),
        }),
    ],
  });
}
function _(_) {
  let { orders: _, ..._ } = _,
    [_, _] = (0, _.useState)(null),
    _ = _() === `initial`;
  if (_.length === 0)
    return (0, _.jsx)(_, {
      gridColumn: `1 / -1`,
      background: `dull-9 20%`,
      children: (0, _.jsx)(_, {
        contrast: `note`,
        children: _.Localize(`#MyOrders_NoSellOrders_Item`),
      }),
    });
  let _ = (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        textAlign: `start`,
        children: _.Localize(`#MyOrders_GridHeader_Name`),
      }),
      (0, _.jsx)(_, {
        children: _.Localize(`#MyOrders_GridHeader_DateListed`),
      }),
      (0, _.jsx)(_, {
        children: _.Localize(`#MyOrders_GridHeader_Price`),
      }),
      (0, _.jsx)(_, {}),
    ],
  });
  return (0, _.jsxs)(_.Fragment, {
    children: [
      !_ && _,
      _.map((_) =>
        (0, _.jsx)(
          _,
          {
            order: _,
            onRemove: _,
            ..._,
          },
          _.listingid,
        ),
      ),
      _ &&
        (0, _.jsx)(_, {
          onClose: () => _(null),
          ..._,
        }),
    ],
  });
}
function _(_) {
  let {
      order: {
        listingid: _,
        rtListed: _,
        strBuyerPrice: _,
        strSellerPrice: _,
        appid: _,
        classid: _,
        assetid: _,
      },
      onRemove: _,
      focusedSellOrderAssetID: _,
    } = _,
    _ = !!_ && _ === _,
    _ = _(_, _),
    _ = () =>
      _({
        listingID: _,
        description: _.data || void 0,
      }),
    _ = _() === `initial`,
    _ = {
      highlight: _,
      description: _.data,
      appid: _,
      onRemove: _,
      buyerPrice: _,
      sellerPrice: _,
      timeListed: _,
    };
  return _
    ? (0, _.jsx)(_, {
        ..._,
      })
    : (0, _.jsx)(_, {
        ..._,
      });
}
function _(_) {
  let {
    highlight: _,
    appid: _,
    description: _,
    buyerPrice: _,
    sellerPrice: _,
    onRemove: _,
    timeListed: _,
  } = _;
  return (0, _.jsxs)(_, {
    columns: `subgrid`,
    background: _ ? `accent-9 20%` : `dull-9 20%`,
    gridColumn: `1 / -1`,
    alignItems: `center`,
    justifyItems: `center`,
    children: [
      (0, _.jsx)(_, {
        justifySelf: `start`,
        children: (0, _.jsx)(_, {
          appid: _,
          description: _,
        }),
      }),
      (0, _.jsx)(_, {
        textAlign: `center`,
        children: (0, _.jsx)(_, {
          children: new Intl.DateTimeFormat().format(_ * 1e3),
        }),
      }),
      (0, _.jsxs)(_, {
        textAlign: `center`,
        children: [
          (0, _.jsx)(_, {
            _: `div`,
            children: _,
          }),
          (0, _.jsxs)(_, {
            contrast: `note`,
            children: [`(`, _, `)`],
          }),
        ],
      }),
      (0, _.jsx)(_, {
        children: (0, _.jsx)(_, {
          variant: `ghost`,
          color: `dull`,
          onClick: _,
          children: _.Localize(`#MyOrders_Cancel`),
        }),
      }),
    ],
  });
}
function _(_) {
  let {
    highlight: _,
    appid: _,
    description: _,
    buyerPrice: _,
    sellerPrice: _,
    onRemove: _,
    timeListed: _,
  } = _;
  return (0, _.jsxs)(_, {
    columns: `subgrid`,
    background: _ ? `accent-9 20%` : `dull-9 20%`,
    gridColumn: `1 / -1`,
    alignItems: `center`,
    justifyItems: `center`,
    children: [
      (0, _.jsx)(_, {
        justifySelf: `start`,
        gridColumn: `1 / -1`,
        children: (0, _.jsx)(_, {
          compact: !0,
          appid: _,
          description: _,
        }),
      }),
      (0, _.jsx)(_, {
        textAlign: `center`,
        children: (0, _.jsx)(_, {
          children: new Intl.DateTimeFormat().format(_ * 1e3),
        }),
      }),
      (0, _.jsxs)(_, {
        textAlign: `center`,
        children: [
          (0, _.jsx)(_, {
            _: `div`,
            children: _,
          }),
          (0, _.jsxs)(_, {
            contrast: `note`,
            children: [`(`, _, `)`],
          }),
        ],
      }),
      (0, _.jsx)(_, {
        justifySelf: `end`,
        children: (0, _.jsx)(_, {
          variant: `ghost`,
          color: `dull`,
          onClick: _,
          children: _.Localize(`#MyOrders_Cancel`),
        }),
      }),
    ],
  });
}
function _(_) {
  let { children: _, ..._ } = _;
  return (0, _.jsx)(_, {
    background: `dull-9 20%`,
    textAlign: `center`,
    ..._,
    children: (0, _.jsx)(_, {
      contrast: `subtitle`,
      children: _,
    }),
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    paddingY: `1`,
    paddingX: `2`,
    ..._,
  });
}
function _(_) {
  let { appid: _, description: _, compact: _ } = _,
    { data: _ } = _({
      appid: _,
    });
  return (0, _.jsxs)(_, {
    gap: `2`,
    align: `center`,
    children: [
      !_ &&
        _ &&
        (0, _.jsx)(_, {
          width: `48px`,
          height: `48px`,
          objectFit: `contain`,
          src: _(_),
          alt: ``,
        }),
      !_ &&
        !_ &&
        (0, _.jsx)(_, {
          width: `48px`,
          height: `48px`,
          radius: `md`,
        }),
      (0, _.jsxs)(_, {
        direction: `column`,
        children: [
          !_ &&
            (0, _.jsx)(_, {
              width: `18ch`,
              height: `20px`,
              radius: `md`,
            }),
          _ &&
            (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsx)(_, {
                  size: `4`,
                  contrast: `title`,
                  truncate: !0,
                  weight: `medium`,
                  children: _.market_name,
                }),
                (0, _.jsx)(_, {
                  size: `3`,
                  truncate: !0,
                  children: _?.name,
                }),
              ],
            }),
        ],
      }),
    ],
  });
}
var _ = `APEAY0rnAbo-`,
  _ = `JqPNuuugB1c-`;
function _(_) {
  let { currency: _, orders: _ } = _,
    _ = _.slice(0, 6),
    _ = _.length < _.length;
  return (
    _ && _.pop(),
    (0, _.jsxs)(`table`, {
      className: _,
      children: [
        (0, _.jsx)(`thead`, {
          children: (0, _.jsxs)(`tr`, {
            children: [
              (0, _.jsx)(`th`, {
                children: (0, _.jsx)(_, {
                  size: `4`,
                  children: _.Localize(`#OrderBook_Table_Price`),
                }),
              }),
              (0, _.jsx)(`th`, {
                children: (0, _.jsx)(_, {
                  size: `4`,
                  children: _.Localize(`#OrderBook_Table_Quantity`),
                }),
              }),
            ],
          }),
        }),
        (0, _.jsxs)(`tbody`, {
          children: [
            _.map((_) =>
              (0, _.jsx)(
                _,
                {
                  quantity: _.quantity,
                  price: _(_.price, _),
                },
                _.price,
              ),
            ),
            _ &&
              (0, _.jsx)(_, {
                featuredOrders: _,
                ..._,
              }),
          ],
        }),
      ],
    })
  );
}
function _(_) {
  let { price: _, quantity: _ } = _,
    _ = new Intl.NumberFormat();
  return (0, _.jsxs)(`tr`, {
    children: [
      (0, _.jsx)(`td`, {
        children: (0, _.jsx)(_, {
          children: _,
        }),
      }),
      (0, _.jsx)(`td`, {
        children: (0, _.jsx)(_, {
          children: _.format(_),
        }),
      }),
    ],
  });
}
function _(_) {
  let { featuredOrders: _, totalOrders: _, orders: _, currency: _ } = _,
    _ =
      _[0].price < _[1].price
        ? `#OrderBook_Table_PriceOrMore`
        : `#OrderBook_Table_PriceOrLess`,
    _ = _[_.length].price,
    _ = _ - _.reduce((_, _) => _ + _.quantity, 0),
    _ = new Intl.NumberFormat();
  return (0, _.jsxs)(`tr`, {
    children: [
      (0, _.jsx)(`td`, {
        children: (0, _.jsx)(_, {
          children: _.Localize(_, _(_, _)),
        }),
      }),
      (0, _.jsx)(`td`, {
        children: (0, _.jsx)(_, {
          children: _.format(_),
        }),
      }),
    ],
  });
}
function _() {
  let [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)();
  return (
    (0, _.useEffect)(() => {
      _(!1), _(_);
    }, [_]),
    {
      flash: (0, _.useCallback)(() => {
        _(!0), _(void 0);
      }, []),
      strClassName: _,
    }
  );
}
function _(_) {
  let { className: _, ..._ } = _,
    { flash: _, strClassName: _ } = _(),
    _ = (0, _.useRef)(!1);
  return (
    (0, _.useEffect)(() => {
      _.current ? _() : (_.current = !0);
    }, [_, _.children]),
    (0, _.jsx)(_, {
      ..._,
      className: (0, _.default)(_, _),
    })
  );
}
var _ = `roMraLJYHfY-`,
  _ = `Gfv8gLv9Z74-`;
function _(_) {
  let { description: _, ..._ } = _,
    _ = _.appid,
    _ = _.market_name || _.name,
    _ = _.market_hash_name;
  if (!_ || !_ || !_) return null;
  let _ = `Cancel all listings`,
    _ = `Delete item bucket`,
    _ = (_) => {
      switch (_) {
        case _:
          confirm(`Are you sure you want to cancel all listings for "${_}"?`) &&
            _(_, _);
          break;
        case _:
          confirm(
            `Are you sure you want to remove "${_}" from the market index? If there are listings for this item, please cancel them first or the bucket will come back.`,
          ) && _(_, _);
          break;
      }
    };
  return (0, _.jsx)(_, {
    ..._,
    children: (0, _.jsx)(_, {
      options: [_, _],
      selectedValue: `Admin`,
      onSelectionChange: _,
      size: `1`,
    }),
  });
}
async function _(_, _) {
  try {
    let _ = new FormData();
    _.set(`appid`, _.toString()),
      _.set(`market_hash_name`, _),
      _.set(`sessionid`, _());
    let _ = await fetch(`${_.COMMUNITY_BASE_URL}market/cancelalllistings/`, {
        method: `POST`,
        body: _,
      }),
      _ = await _.json();
    if (!_._) {
      alert(`Failed to cancel. ${_?.error ?? ``}`);
      return;
    }
    alert(
      `The cancel request was received. The Market servers have begun working on canceling all listings.`,
    );
  } catch {
    alert(`Failed to cancel`);
  }
}
async function _(_, _) {
  try {
    let _ = new FormData();
    _.set(`appid`, _.toString()),
      _.set(`market_hash_name`, _),
      _.set(`sessionid`, _());
    let _ = await fetch(`${_.COMMUNITY_BASE_URL}market/deleteitembucket`, {
        method: `POST`,
        body: _,
      }),
      _ = await _.json();
    if (!_._) {
      alert(`Failed to cancel. ${_?.error ?? ``}`);
      return;
    }
    alert(
      `The request was received. It should be removed from the search index shortly.`,
    );
  } catch {
    alert(`Failed to delete`);
  }
}
var _ = `j5hLl0uc0ew-`,
  _ = `KY4I1XHH9WA-`;
function _(_) {
  let { buckets: _, description: _ } = _;
  return _.length
    ? _(_)
      ? (0, _.jsx)(_, {
          ..._,
        })
      : _.length === 1
        ? null
        : (0, _.jsx)(_, {
            ..._,
          })
    : null;
}
function _(_) {
  let { value: _, onChange: _, buckets: _ } = _,
    _ = (0, _.useMemo)(() => {
      let _ = new Intl.Collator(_(), {
        numeric: !0,
      });
      return [..._].sort((_, _) =>
        _.compare(_.localized_name || ``, _.localized_name || ``),
      );
    }, [_]),
    _ = {
      initial: 0,
      _: 2,
      _: 5,
      _: 5,
    },
    _ = _(),
    _ = _.length > _[_],
    _ = (_) =>
      _.localized_name_inside_group
        ? _.localized_name_inside_group
        : _.localized_name;
  return _ && _.length > 0
    ? (0, _.jsx)(_, {
        justify: `center`,
        marginBottom: `1`,
        children: (0, _.jsx)(_.length > 8 ? _ : _, {
          selectedValue: _.find(({ bucket_id: _ }) => _ === _) || null,
          onSelectionChange: (_) => _(_ ? _.bucket_id : null),
          options: _,
          placeholder: _.Localize(`#ItemBucketPicker_Overflow_Placeholder`),
          filterPlaceholder: _.Localize(
            `#ItemBucketPicker_Overflow_FilterPlaceholder`,
          ),
          getOptionLabel: _,
        }),
      })
    : (0, _.jsx)(_, {
        children: _.map((_) =>
          (0, _.jsx)(
            _,
            {
              selected: _ === _.bucket_id,
              onSelect: () => _(_ === _.bucket_id ? null : _.bucket_id || ``),
              title: _(_),
            },
            _.bucket_id,
          ),
        ),
      });
}
function _(_) {
  let {
      buckets: _,
      filter: _,
      onFilterChange: _,
      onChange: _,
      description: _,
      onPreviewBucketChange: _,
      onFallbackBucketChange: _,
    } = _,
    _ = _(_.appid, _),
    _ = _() === `initial`;
  if (!_ || !_ || !_) return null;
  let _ = _(_),
    { rgWears: _, qualityFacet: _, bHasSouvenir: _, bHasStatTrak: _ } = _,
    _ = _.facets[_[0].category] && Object.keys(_.facets[_[0].category]),
    _ = _ && _.length === 1 ? _[0] : null,
    _ = (_) => {
      let _ = {
        ..._,
        facets: {
          ..._.facets,
        },
      };
      _ === _.tag
        ? (delete _.facets[_.category], _(null))
        : ((_.facets[_.category] = {
            [_.tag]: !0,
          }),
          _[_] && _(_[_]._)),
        _(_);
    },
    _ = (_, _) => {
      let _ = {
        ..._,
        facets: {
          ..._.facets,
        },
      };
      if (
        (_
          ? (_.facets[_.name] = {
              [_]: !0,
            })
          : delete _.facets[_.name],
        _(_),
        _ && _(void 0),
        _)
      ) {
        let _ = _ ? _ : `normal`,
          _ = _(
            _.filter(
              (_) =>
                _.filters &&
                _.filters.some(([_, _]) => _ === `Quality` && _ === _),
            ),
          );
        _?.bucket_id && _(_.bucket_id);
      }
    },
    _;
  _ ? (_ = `strange`) : _ && (_ = `tournament`);
  let _ = (0, _.jsxs)(_.Fragment, {
      children: [
        _ &&
          (0, _.jsx)(_, {
            quality: `strange`,
            facet: _,
            filter: _,
            onToggle: _,
          }),
        _ &&
          (0, _.jsx)(_, {
            quality: `tournament`,
            facet: _,
            filter: _,
            onToggle: _,
          }),
      ],
    }),
    _ = (_) => {
      if (_[_]) return () => _(_);
    },
    _ = (0, _.jsxs)(_, {
      onMouseLeave: _ ? () => _(void 0) : void 0,
      paddingX: {
        initial: `2`,
        _: void 0,
      },
      children: [
        _.map((_) =>
          (0, _.jsx)(
            _,
            {
              appid: _.appid,
              wear: _,
              selected: _.tag === _,
              onSelect: _(_),
              onMouseEnter: !_ || !_[_] ? void 0 : () => _(_[_]._),
              activeType: _,
              qualityFacet: _,
              specialType: _,
            },
            _.tag,
          ),
        ),
        !_ && _,
      ],
    });
  return _
    ? (0, _.jsxs)(_, {
        direction: `column`,
        gap: {
          initial: `1`,
          _: `3`,
        },
        children: [
          (0, _.jsx)(_, {
            overflow: `auto`,
            maxWidth: `100vw`,
            children: _,
          }),
          !_ &&
            (0, _.jsx)(_, {
              alignSelf: `center`,
              children: _,
            }),
        ],
      })
    : _;
}
function _(_) {
  let {
      appid: _,
      wear: _,
      activeType: _,
      qualityFacet: _,
      specialType: _,
      ..._
    } = _,
    { tag: _, label: _, color: _ } = _;
  return (0, _.jsx)(
    _,
    {
      title: _,
      subtitle: (0, _.jsx)(_, {
        wear: _,
        activeType: _,
        qualityFacet: _,
        specialType: _,
      }),
      color: _,
      ..._,
    },
    _,
  );
}
function _(_) {
  let {
      wear: { normal: _, strange: _, tournament: _ },
      activeType: _,
      qualityFacet: _,
      specialType: _,
    } = _,
    _ = _ && _.tags && _.tags[_],
    _ = _ && `#${_.color}`,
    _ = _ || _,
    [_, _] = _ === `normal` ? [`3`, `1`] : [`1`, `3`];
  return (0, _.jsxs)(_, {
    direction: `column`,
    align: `center`,
    children: [
      (0, _.jsx)(_, {
        align: `center`,
        size: _,
        title: _?.label,
        children: _?.price ? _.price : `--`,
      }),
      !!_ &&
        (0, _.jsx)(_, {
          align: `center`,
          size: _,
          style: {
            color: _,
          },
          title: _?.label,
          children: _?.price ? _.price : `--`,
        }),
    ],
  });
}
function _(_) {
  let { style: _, ..._ } = _;
  return (0, _.jsx)(_, {
    align: `center`,
    style: {
      ..._,
      transition: `font-size 100ms ease-in-out`,
    },
    ..._,
  });
}
function _(_) {
  let { quality: _, facet: _, filter: _, onToggle: _ } = _,
    _ = _.tags[_],
    _ = _.facets[_.name] && _.facets[_.name][_];
  return (0, _.jsxs)(_, {
    align: `center`,
    gap: `2`,
    children: [
      (0, _.jsx)(_, {
        style: {
          color: _.color ? `#${_.color}` : void 0,
        },
        children: _.localized_name,
      }),
      (0, _.jsx)(_, {
        value: _,
        onChange: (_) => _(_, _),
      }),
    ],
  });
}
function _(_) {
  let { title: _, subtitle: _, selected: _, onSelect: _, color: _, ..._ } = _,
    _ = !_,
    _ = _() === `initial`,
    _ = _(`(max-width: 400px)`),
    _ = `subtitle`;
  return (
    _ && (_ = `title`),
    _ && (_ = `note`),
    (0, _.jsxs)(_, {
      position: `relative`,
      className: (0, _.default)(_, _ && `SbfLWsqqQgc-`, _ && `H-J1b9f0kM0-`),
      style: _
        ? {
            "--tab-tag-color": _,
          }
        : void 0,
      cursor: _ ? void 0 : `pointer`,
      "data-selected": !!_,
      paddingY: `3`,
      paddingX: `4`,
      onClick: _,
      justify: `center`,
      align: `center`,
      ..._,
      children: [
        !_ &&
          _ &&
          !!_ &&
          (0, _.jsx)(_, {
            className: `OWksInE-UIo-`,
          }),
        (0, _.jsxs)(_, {
          direction: `column`,
          align: `center`,
          justify: `center`,
          zIndex: `0`,
          gap: `1`,
          children: [
            (0, _.jsx)(_, {
              weight: _ ? `medium` : void 0,
              contrast: _,
              align: `center`,
              whiteSpace: `nowrap`,
              children: _,
            }),
            (0, _.jsx)(_, {
              size: `2`,
              contrast: _,
              children: _,
            }),
          ],
        }),
        (0, _.jsx)(_, {
          className: _,
        }),
      ],
    })
  );
}
function _(_) {
  return (0, _.jsx)(_, {
    gap: `3`,
    justify: {
      initial: `start`,
      _: `center`,
    },
    align: `center`,
    ..._,
  });
}
var _ = `BzGyPMSERKc-`,
  _ = `ku8rdka7UQE-`,
  _ = `PiDrpFUJIpU-`,
  _ = `mBE6fUK0cts-`,
  _ = 32;
function _(_) {
  let { children: _, height: _, slop: _ = 0 } = _,
    [_, _] = (0, _.useState)(null),
    _ = _((_) => _(_.contentRect)),
    [_, _] = (0, _.useState)(!1),
    _ = _?.height,
    _ = _(_),
    _ = (!_ || _ - _ > _) && !_,
    _;
  return (
    _ ? (_ = `${_}px`) : _ && (_ = `${_}px`),
    (0, _.jsxs)(_, {
      position: `relative`,
      style: {
        paddingBottom: `${_}px`,
      },
      children: [
        (0, _.jsx)(_, {
          maxHeight: _,
          overflow: `hidden`,
          className: _,
          children: (0, _.jsx)(`div`, {
            ref: _,
            children: _,
          }),
        }),
        _ &&
          (0, _.jsx)(_, {
            onClick: () => _(!0),
          }),
      ],
    })
  );
}
function _(_) {
  let { onClick: _ } = _;
  return (0, _.jsxs)(_, {
    className: _,
    children: [
      (0, _.jsx)(_, {
        className: _,
      }),
      (0, _.jsx)(_, {
        gap: `2`,
        align: `center`,
        justify: `center`,
        height: `${_}px`,
        onClick: _,
        cursor: `pointer`,
        children: (0, _.jsx)(_, {
          className: _,
          children: `Show More`,
        }),
      }),
    ],
  });
}
function _(_) {
  let {
      buckets: _,
      myOrders: _,
      listingQuery: _,
      initialFallbackBucketID: _,
      focusedSellOrderAssetID: _,
    } = _,
    _ = _ && _.rgBuyOrders.length + _.rgSellOrders.length > 0,
    [_, _] = (0, _.useState)(_),
    _ = _(_.appid, _),
    _ = (0, _.useMemo)(() => (_.data ? _(_.data) : null), [_.data]),
    _ = _(_.appid, _, {
      placeholderData: (_) => _,
    }),
    _ = _(_.appid, _, {
      placeholderData: (_) => _,
    }),
    _ = _(),
    _ = _() === `initial`;
  if (!_.data) return null;
  let _ = _.data,
    _ = _ && _.rgBuyOrders.length + _.rgSellOrders.length > 0,
    _ = _.container_properties?.contained_items || [],
    _ = _.length > 0;
  return (0, _.jsxs)(_, {
    marginLeft: {
      initial: `0`,
      _: `2`,
    },
    marginRight: {
      initial: `0`,
      _: `2`,
    },
    children: [
      (0, _.jsx)(_, {
        children: (0, _.jsxs)(_, {
          direction: `column`,
          children: [
            (0, _.jsxs)(_, {
              direction: `column`,
              gap: `1`,
              marginX: {
                initial: `2`,
                _: `1`,
                _: `0`,
              },
              marginTop: `1`,
              marginBottom: `3`,
              children: [
                (0, _.jsx)(_, {
                  query: _,
                  item: _,
                }),
                _ &&
                  (0, _.jsx)(_, {
                    description: _,
                  }),
                _ &&
                  (0, _.jsx)(_, {
                    orders: _,
                    focusedSellOrderAssetID: _,
                  }),
              ],
            }),
            (0, _.jsx)(_, {
              description: _,
              children:
                _ &&
                (0, _.jsx)(_, {
                  description: _,
                  marginTop: `3`,
                }),
            }),
          ],
        }),
      }),
      (0, _.jsxs)(_, {
        flexGrow: `1`,
        marginTop: {
          initial: `0`,
          _: `3`,
        },
        children: [
          (0, _.jsx)(_, {
            buckets: _,
            description: _,
            value: _.market_hash_name,
            onChange: (_) => {
              _ && _(_);
            },
          }),
          (0, _.jsx)(_, {
            background: `dull-3`,
            paddingY: {
              initial: `2`,
              _: `5`,
            },
            className: _,
            children: (0, _.jsx)(_, {
              children: (0, _.jsxs)(_, {
                direction: `column`,
                gap: `6`,
                marginLeft: `2`,
                marginRight: `2`,
                children: [
                  (0, _.jsx)(_, {
                    appid: _.appid,
                    buckets: _,
                    activeBucketID: _,
                    description: _,
                    orderBook: _,
                  }),
                  (0, _.jsxs)(_, {
                    direction: `column`,
                    gap: `6`,
                    children: [
                      _.data &&
                        (0, _.jsx)(_, {
                          priceHistory: _.data,
                        }),
                      _ &&
                        _ &&
                        (0, _.jsx)(_, {
                          book: _,
                        }),
                      _ &&
                        (0, _.jsx)(_, {
                          appid: _.appid || 0,
                          contents: _,
                        }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { description: _, children: _ } = _,
    [_, _] = (0, _.useState)(0),
    _ = _(
      (0, _.useCallback)(
        (_) => _((_) => Math.max(_.contentRect.height, _)),
        [],
      ),
    );
  if (!_) return null;
  let _ = _(_);
  return (0, _.jsx)(_.Root, {
    description: _,
    children: (0, _.jsxs)(_, {
      direction: `column`,
      gap: {
        initial: `0`,
        _: `3`,
      },
      ref: _,
      minHeight: `${_}px`,
      children: [
        (0, _.jsxs)(_, {
          background: `dull-5`,
          padding: `3`,
          radius: `sm`,
          direction: {
            initial: `column`,
            _: `row`,
          },
          overflow: `hidden`,
          children: [
            (0, _.jsxs)(_, {
              radius: `sm`,
              padding: `3`,
              justify: `center`,
              align: `center`,
              flexGrow: `1`,
              flexBasis: `50%`,
              maxHeight: `330px`,
              position: `relative`,
              children: [
                (0, _.jsx)(_, {
                  src: _,
                }),
                (0, _.jsx)(_, {
                  src: _,
                  alt: ``,
                  height: `auto`,
                  maxHeight: `100%`,
                  maxWidth: `100%`,
                  objectFit: `contain`,
                  zIndex: `1`,
                }),
              ],
            }),
            (0, _.jsxs)(_, {
              flexGrow: `1`,
              children: [
                (0, _.jsx)(_, {
                  height: {
                    initial: 200,
                    _: 300,
                  },
                  slop: 40,
                  children: (0, _.jsx)(_, {
                    description: _,
                  }),
                }),
                (0, _.jsx)(_.MarketActions, {}),
                _,
              ],
            }),
          ],
        }),
        (0, _.jsx)(_, {
          justify: `center`,
          padding: `4`,
          radius: `sm`,
          background: `dull-3 50%`,
          children: (0, _.jsx)(_, {
            contrast: `description`,
            align: `center`,
            children: _.Localize(`#CommodityExplanation`),
          }),
        }),
      ],
    }),
  });
}
function _(_) {
  let { description: _ } = _;
  return (0, _.jsx)(_.Root, {
    description: _,
    children: (0, _.jsxs)(_, {
      direction: `column`,
      justify: `center`,
      minWidth: `0`,
      gap: `2`,
      paddingX: {
        initial: `1`,
        _: `3`,
      },
      paddingY: `3`,
      children: [
        (0, _.jsx)(_.Name, {}),
        (0, _.jsx)(_.GameInfo, {
          hrefGame: _.AppHome(_.appid),
        }),
      ],
    }),
  });
}
function _(_) {
  let { src: _ } = _;
  return (0, _.jsx)(_, {
    style: {
      "--img-url": `url("${_}")`,
    },
    className: _,
  });
}
function _(_) {
  let {
      description: _,
      orderBook: _,
      appid: _,
      buckets: _,
      activeBucketID: _,
    } = _,
    _ = !_().bEligible;
  if (!_ || !_) return null;
  let _ = _(_),
    _ = _(_),
    _ = _ || _,
    _ = _ || _,
    _ = new Intl.NumberFormat(),
    _ = _.Localize(`#OrderBook_SellOrder_Description_None`),
    _ = _.cSellOrders > 0;
  _ &&
    (_ = _.LocalizeReact(
      `#OrderBook_SellOrder_Description`,
      (0, _.jsx)(_, {
        contrast: `title`,
        children: _.format(_.cSellOrders),
      }),
      (0, _.jsx)(_, {
        contrast: `title`,
        children: _(_.amtMinSellOrder || 0, _.eCurrency),
      }),
    ));
  let _ = _.Localize(`#OrderBook_BuyOrder_Description_None`),
    _ = _.cBuyOrders > 0;
  return (
    _ &&
      (_ = _.LocalizeReact(
        `#OrderBook_BuyOrder_Description`,
        (0, _.jsx)(_, {
          contrast: `title`,
          children: _.format(_.cBuyOrders),
        }),
        (0, _.jsx)(_, {
          contrast: `title`,
          children: _(_.amtMaxBuyOrder || 0, _.eCurrency),
        }),
      )),
    (0, _.jsxs)(_.Fragment, {
      children: [
        (_ || _) &&
          (0, _.jsx)(_, {
            buy: _,
            sell: _,
          }),
        (0, _.jsxs)(_, {
          gap: `3`,
          wrap: `wrap`,
          children: [
            (0, _.jsxs)(_, {
              background: `dull-6`,
              padding: `5`,
              direction: `column`,
              gap: `3`,
              flexGrow: `1`,
              align: `center`,
              children: [
                (0, _.jsxs)(_, {
                  direction: `column`,
                  gap: `2`,
                  justify: `start`,
                  children: [
                    (0, _.jsx)(_, {
                      size: `4`,
                      contrast: `body`,
                      children: _,
                    }),
                    _ &&
                      (0, _.jsx)(_, {
                        orders: _.rgSellOrders,
                        currency: _.eCurrency,
                        totalOrders: _.cSellOrders,
                      }),
                  ],
                }),
                !_ &&
                  (0, _.jsx)(_, {
                    appid: _,
                    buckets: _,
                    activeBucketID: _,
                    color: `green`,
                    variant: `vibrant`,
                    size: {
                      initial: `2`,
                      _: `3`,
                    },
                    minWidth: {
                      initial: `90%`,
                      _: `150px`,
                    },
                    children: _.Localize(`#Button_Buy`),
                  }),
              ],
            }),
            (0, _.jsxs)(_, {
              background: `dull-6`,
              padding: `5`,
              direction: `column`,
              gap: `3`,
              flexGrow: `1`,
              align: `center`,
              children: [
                (0, _.jsxs)(_, {
                  direction: `column`,
                  justify: `start`,
                  gap: `2`,
                  children: [
                    (0, _.jsx)(_, {
                      size: `4`,
                      contrast: `body`,
                      children: _,
                    }),
                    _ &&
                      (0, _.jsx)(_, {
                        orders: _.rgBuyOrders,
                        currency: _.eCurrency,
                        totalOrders: _.cBuyOrders,
                      }),
                  ],
                }),
                !_ &&
                  (0, _.jsx)(_, {
                    description: _,
                  }),
              ],
            }),
          ],
        }),
      ],
    })
  );
}
function _(_) {
  let { description: _ } = _,
    [_, _] = (0, _.useState)(!1),
    _ = _() === `initial`,
    _ = {
      color: `blue`,
      variant: `vibrant`,
      size: {
        initial: `2`,
        _: `3`,
      },
      minWidth: {
        initial: `90%`,
        _: `150px`,
      },
      children: _.Localize(`#Button_Sell`),
    };
  if (!_.logged_in) {
    let _ = new URL(location.href);
    _.searchParams.set(`buy`, `1`);
    let _ = `${_.COMMUNITY_BASE_URL}login/home/?goto=${encodeURIComponent(_.toString())}`;
    return (0, _.jsx)(_, {
      ..._,
      href: _,
    });
  }
  return _
    ? (0, _.jsx)(_, {
        ..._,
        href: _(_, !1),
      })
    : (0, _.jsxs)(_.Fragment, {
        children: [
          (0, _.jsx)(_, {
            ..._,
            onClick: () => _(!0),
            children: _.Localize(`#Button_Sell`),
          }),
          _ &&
            (0, _.jsx)(_, {
              onClose: () => _(!1),
              description: _,
            }),
        ],
      });
}
function _(_) {
  let { description: _, onClose: _ } = _,
    [_, _] = (0, _.useState)(!0);
  return (0, _.jsx)(_, {
    onClose: _,
    children: (0, _.jsxs)(_, {
      direction: `column`,
      padding: `2`,
      width: {
        initial: void 0,
        _: `min(90vw, 1200px)`,
      },
      children: [
        (0, _.jsxs)(_, {
          justify: `between`,
          align: `center`,
          marginBottom: `2`,
          children: [
            (0, _.jsx)(_, {
              _: `div`,
              contrast: `title`,
              size: `3`,
              truncate: !0,
              children: _.Localize(`#SellDialog_Frame_Title`),
            }),
            (0, _.jsx)(_, {
              cursor: `pointer`,
              onClick: _,
            }),
          ],
        }),
        (0, _.jsxs)(_, {
          flexGrow: `1`,
          children: [
            _ &&
              (0, _.jsx)(_, {
                minHeight: `20vh`,
                align: `center`,
                justify: `center`,
                children: (0, _.jsx)(_, {
                  size: `5`,
                }),
              }),
            (0, _.jsx)(`iframe`, {
              style: {
                width: `min(100%, 1200px)`,
                height: _ ? `0` : `90vh`,
                visibility: _ ? `hidden` : `visible`,
                border: `none`,
              },
              src: _(_, !0),
              title: _.Localize(`#SellDialog_Frame_Title`),
              onLoad: () => _(!1),
            }),
          ],
        }),
      ],
    }),
  });
}
function _(_, _) {
  let { appid: _, name: _ } = _;
  return `${_.COMMUNITY_BASE_URL}my/inventory/?${_ ? `modal=1&` : ``}market=1#${_}___${encodeURIComponent(_ ?? ``)}`;
}
function _(_) {
  let { contents: _, appid: _ } = _;
  return (0, _.jsxs)(_, {
    marginTop: `2`,
    children: [
      (0, _.jsx)(_, {
        size: `4`,
        children: _.Localize(`#Container_ContentsLabel`),
      }),
      (0, _.jsx)(_, {
        gap: `2`,
        columns: `repeat(auto-fill, minmax(250px, 1fr))`,
        autoRows: `1fr`,
        marginTop: `1`,
        children: _.map((_) =>
          (0, _.jsx)(
            _,
            {
              appid: _,
              _: _,
            },
            _.instanceid === `0` ? _.classid : _.instanceid,
          ),
        ),
      }),
    ],
  });
}
function _(_) {
  let { appid: _, _: _ } = _,
    _ = _(_, _);
  if (!_.data) return null;
  let {
      name: _,
      market_name: _,
      market_hash_name: _,
      market_bucket_group_id: _,
      type: _,
    } = _.data,
    _ = _(_.data);
  return (0, _.jsx)(_, {
    _: _.Item(_, _ || _),
    external: !1,
    className: _(),
    children: (0, _.jsxs)(_, {
      background: `dull-8`,
      radius: `sm`,
      padding: `3`,
      align: `center`,
      gap: `2`,
      cursor: `pointer`,
      children: [
        (0, _.jsx)(_, {
          width: `64px`,
          height: `64px`,
          objectFit: `contain`,
          src: _,
          alt: ``,
        }),
        (0, _.jsxs)(_, {
          children: [
            (0, _.jsx)(_, {
              _: `div`,
              size: `4`,
              contrast: `title`,
              weight: `medium`,
              children: _ || _,
            }),
            _ &&
              (0, _.jsx)(_, {
                _: `div`,
                size: `2`,
                children: _,
              }),
          ],
        }),
      ],
    }),
  });
}
function _(_) {
  let { buy: _, sell: _ } = _;
  return (0, _.jsx)(_, {
    children: _.Localize(
      _ && _ ? `#Item_CountryBuySellRestricted` : `#Item_CountryBuyRestricted`,
    ),
  });
}
var _ = `_3DSXa7TwSCo-`,
  _ = `DbqWsFmrBJU-`,
  _ = `-RfAozBAXnc-`;
function _() {
  return (0, _.jsx)(_, {
    position: `relative`,
    inset: `0`,
    radius: `sm`,
    direction: `column`,
    align: `center`,
    justify: `center`,
    marginTop: `2`,
    className: _,
    style: {
      pointerEvents: `none`,
    },
    children: (0, _.jsx)(_, {
      align: `center`,
      _: `div`,
      size: `7`,
      weight: `heavy`,
      children: _.Localize(`#Listings_NoneFound`),
    }),
  });
}
function _(_) {
  let {
      view: _ = `grid`,
      onViewChange: _,
      children: _,
      breadcrumbs: _ = (0, _.jsx)(`div`, {}),
      sort: _,
      onLoadMore: _,
      loadingMore: _,
      loadingNew: _ = !0,
      loadingError: _,
      empty: _,
      resetScrollIdentity: _,
    } = _,
    _ = _() === `initial`,
    _ = !_,
    _ = (0, _.useRef)(null),
    _ = (0, _.useRef)(!0);
  return (
    (0, _.useEffect)(() => {
      _.current &&
        !_.current &&
        _.current.getBoundingClientRect().top < 0 &&
        _.current.scrollIntoView(!0),
        (_.current = !1);
    }, [_]),
    (0, _.jsxs)(_, {
      ref: _,
      children: [
        (0, _.jsxs)(_, {
          justify: `between`,
          align: `center`,
          gap: `2`,
          marginBottom: `2`,
          wrap: `wrap`,
          children: [
            _,
            (0, _.jsxs)(_, {
              gap: `2`,
              align: `center`,
              children: [
                !1,
                !_ &&
                  (0, _.jsx)(_, {
                    children: _.Localize(`#SortBy_Label`),
                  }),
                _,
              ],
            }),
          ],
        }),
        (0, _.jsxs)(_, {
          position: `relative`,
          children: [
            _ === `grid` &&
              (0, _.jsxs)(_, {
                columns: {
                  initial: `repeat(auto-fill, minmax(136px, 1fr))`,
                  _: `repeat(auto-fill, minmax(260px, 1fr))`,
                },
                gap: {
                  initial: `2`,
                  _: `4`,
                },
                children: [
                  _,
                  _ &&
                    (0, _.jsx)(_, {
                      onTrigger: _,
                    }),
                ],
              }),
            _ === `list` &&
              (0, _.jsxs)(_, {
                direction: `column`,
                gap: `4`,
                children: [
                  _,
                  _ &&
                    (0, _.jsx)(_, {
                      onTrigger: _,
                    }),
                ],
              }),
            _ && (0, _.jsx)(_, {}),
            _ &&
              (0, _.jsx)(_, {
                justify: `center`,
                margin: `5`,
                children: (0, _.jsx)(_, {
                  size: `4`,
                }),
              }),
            _ &&
              (0, _.jsx)(_, {
                position: `absolute`,
                inset: `0`,
                background: `dull-4 80%`,
                radius: `sm`,
                paddingX: `4`,
                paddingTop: `9`,
                children: (0, _.jsx)(_, {
                  justify: `center`,
                  align: `center`,
                  children: (0, _.jsx)(_, {
                    size: `5`,
                  }),
                }),
              }),
            _ && (0, _.jsx)(_, {}),
          ],
        }),
      ],
    })
  );
}
function _() {
  return (0, _.jsx)(_, {
    justify: `center`,
    align: `center`,
    radius: `sm`,
    background: `red-3`,
    outline: `red-5`,
    padding: `4`,
    marginTop: `4`,
    children: (0, _.jsx)(_, {
      size: `5`,
      contrast: `subtitle`,
      children: _.Localize(`#Results_PageLoadError`),
    }),
  });
}
var _ = `CqWwAJioCoU-`,
  _ = `CXcCYctqKOs-`;
function _() {
  return _(`sm`);
}
function _(_) {
  let { children: _ } = _;
  return _()
    ? (0, _.jsx)(_, {
        ..._,
      })
    : (0, _.jsx)(_, {
        gap: `2`,
        direction: `column`,
        width: `300px`,
        maxWidth: `300px`,
        position: `sticky`,
        inset: `var(--spacing-2) auto auto auto`,
        children: _,
      });
}
function _(_) {
  let { children: _, onClose: _, open: _ } = _;
  return _
    ? (0, _.jsx)(_.Root, {
        onClose: _,
        children: (0, _.jsxs)(_, {
          gap: `2`,
          direction: `column`,
          width: `min( 300px, 95vw )`,
          maxWidth: `min( 300px, 95vw )`,
          elevation: `2`,
          background: `dull-3`,
          position: `relative`,
          maxHeight: `95vh`,
          overflow: `auto`,
          onClick: (_) => _.stopPropagation(),
          children: [
            (0, _.jsxs)(_, {
              direction: `column`,
              gap: `2`,
              padding: `3`,
              children: [
                (0, _.jsx)(_, {
                  inset: `12px 12px auto auto`,
                  position: `absolute`,
                  children: (0, _.jsx)(_, {
                    onClick: _,
                    hitSlop: !0,
                  }),
                }),
                _,
              ],
            }),
            (0, _.jsx)(_, {
              padding: `3`,
              paddingTop: `4`,
              position: `sticky`,
              marginTop: `2`,
              inset: `auto auto 0 auto`,
              className: _,
              children: (0, _.jsx)(_, {
                variant: `inverted`,
                width: `100%`,
                color: `green`,
                onClick: _,
                children: _.Localize(`#Filter_ViewResults`),
              }),
            }),
          ],
        }),
      })
    : null;
}
function _(_) {
  let { children: _ } = _;
  return (0, _.jsx)(_, {
    weight: `heavy`,
    size: `4`,
    className: _,
    children: _,
  });
}
function _(_) {
  let { onReset: _ } = _;
  return (0, _.jsx)(_, {
    alignSelf: `center`,
    children: (0, _.jsx)(_, {
      color: `dull`,
      variant: `ghost`,
      onClick: _,
      children: _.Localize(`#MarketSearch_Reset`),
    }),
  });
}
var _ = Object.assign(_, {
  Title: _,
  ResetButton: _,
});
function _(_, _) {
  let _ = _(_),
    [_, _] = (0, _.useState)(null),
    _ = _(_, {
      nTimeoutMS: 300,
      nTimeoutExtensionMS: 300,
      nMaxTimeoutExtensions: 1 / 0,
    }),
    _ = _(_);
  return (
    (0, _.useEffect)(() => {
      _ !== null && _ !== null && _ !== _ && (_(_), _(null));
    }, [_, _, _, _]),
    (0, _.useEffect)(() => {
      _ !== _ && _ !== null && _ !== null && _(null);
    }, [_, _, _]),
    [_ === null ? _ : _, _]
  );
}
var _ = _.memo(function (_) {
  let {
      filter: _,
      onFilterChange: _,
      facetingInfo: _,
      description: _,
      relevantAssetProperties: _,
      open: _,
      onShowFilters: _,
    } = _,
    _ = _(),
    [_, _] = (0, _.useState)(),
    _ = (_, _) => {
      _ ? (_(_), _(void 0)) : _(_);
    },
    _ = _ || _,
    _ =
      _.price[0] !== 0 ||
      _.price[1] !== _.maxPrice ||
      Object.keys(_.facets).length > 0 ||
      Object.keys(_.accessories).length > 0,
    _ = () => {
      _(
        {
          ..._,
          facets: {},
          accessories: {},
          price: [0, _.maxPrice],
        },
        !0,
      );
    };
  return (0, _.jsxs)(_, {
    open: _,
    onClose: () => _(!1),
    children: [
      (0, _.jsx)(_.Title, {
        children: _.Localize(`#ListingFilter_Title`),
      }),
      (0, _.jsx)(_, {
        ..._,
      }),
      (0, _.jsx)(_, {
        filter: _,
        onFilterChange: _,
        facetingInfo: _,
        description: _,
        relevantAssetProperties: _,
      }),
      _ &&
        (0, _.jsx)(_.ResetButton, {
          onReset: _,
        }),
    ],
  });
});
function _(_) {
  let {
    filter: _,
    onFilterChange: _,
    facetingInfo: _,
    description: _,
    relevantAssetProperties: _ = {},
  } = _;
  _(_.app, `Attempted to render app filters without an app!`);
  let _ = _(_.app.appid),
    _ = (0, _.useMemo)(() => _(_.trigger), [])(_?.tags),
    _ = _(_ ? _.app.appid : 0),
    _ = _(_.app.appid);
  if (!_.isSuccess || _.isError || !_.isSuccess) return null;
  let _ = (_.data?.property_schemas || []).filter(
      (_) => !_.hide_from_description && !!_[_._],
    ),
    _ = [];
  return (
    _ && _.isSuccess && (_ = _.data),
    (0, _.jsx)(_, {
      appid: _.app.appid,
      facets: _.data,
      facetingInfo: _,
      accessories: _,
      assetProperties: _,
      state: _,
      onStateChange: _,
    })
  );
}
function _(_) {
  let { textFilter: _, onTextFilterChange: _ } = _,
    [_, _] = (0, _.useState)(void 0),
    _ = (0, _.useCallback)(() => {
      _ !== void 0 && (_(_), _(void 0));
    }, [_, _]);
  return (
    (0, _.useEffect)(() => {
      if (_) {
        let _ = window.setTimeout(() => _(), 500);
        return () => window.clearTimeout(_);
      } else return () => {};
    }, [_, _]),
    (0, _.jsx)(_, {
      dullColor: {
        8: `var(--color-dull-6)`,
        9: `var(--color-dull-7)`,
      },
      children: (0, _.jsx)(_, {
        value: _ ?? _ ?? ``,
        onTextChange: _,
        onBlur: _,
        placeholder: _.Localize(`#Listings_TextFilter_Placeholder`),
        variant: `inset-focus`,
        maxLength: 90,
      }),
    })
  );
}
function _(_) {
  let { title: _, children: _, ..._ } = _,
    [_, _] = (0, _.useState)(!1),
    _ = () => _((_) => !_);
  return (0, _.jsxs)(_, {
    marginX: `3`,
    marginTop: `2`,
    ..._,
    children: [
      (0, _.jsxs)(_, {
        background: `dull-7`,
        radius: `md`,
        padding: `2`,
        align: `center`,
        justify: `between`,
        minWidth: `0`,
        onClick: _,
        children: [
          (0, _.jsx)(_, {
            contrast: `title`,
            children: _,
          }),
          (0, _.jsx)(_, {
            direction: _ ? `up` : `down`,
          }),
        ],
      }),
      _ &&
        (0, _.jsx)(_, {
          background: `dull-7`,
          padding: `2`,
          marginTop: `1`,
          radius: `md`,
          children: _,
        }),
    ],
  });
}
function _(_) {
  let {
      listingQuery: _,
      buckets: _,
      initialSelectedBucketID: _,
      initialFallbackBucketID: _,
      initialSelectedListing: _,
      relevantAssetProperties: _,
      myOrders: _,
      focusedSellOrderAssetID: _,
    } = _,
    [_, _] = (0, _.useState)(_),
    [_, _] = (0, _.useState)(_ || void 0),
    [_, _] = (0, _.useState)(),
    [_, _] = (0, _.useState)(window.history?.state?.marketQuery || _),
    _ = _(_.appid, _ || _ || _, {
      placeholderData: (_) => _,
    }),
    _ = _ && _.rgBuyOrders.length + _.rgSellOrders.length > 0,
    _ = _(),
    _ = (0, _.useCallback)(
      (_) => {
        let _ = new URL(window.location.href);
        (_.search = _(_, _.maxPrice).toString()),
          _(
            (_) => ({
              ..._,
              marketQuery: _,
            }),
            _,
          ),
          _(_);
      },
      [_],
    ),
    [_, _] = _(),
    _ = (0, _.useCallback)(
      (_) => {
        _({
          ..._,
          sort: _ || void 0,
        });
      },
      [_, _],
    ),
    _ = (0, _.useRef)(!1);
  (0, _.useEffect)(() => {
    if (!_.current) {
      _.current = !0;
      return;
    }
    let _ = new URL(window.location.href);
    _.sort
      ? (_.searchParams.set(`sort`, _.sort.field.toString()),
        _.sort.direction === void 0
          ? _.searchParams.delete(`dir`)
          : _.searchParams.set(`dir`, _.sort.direction.toString()),
        _.sort.field === 1
          ? (_(
              typeof _.sort.assetpropertyid == `number`,
              `Property sort must include property id`,
            ),
            _.searchParams.set(`propertyid`, _.sort.assetpropertyid.toString()))
          : _.searchParams.delete(`propertyid`),
        _((_) => ({
          ..._,
          itemSort: _.sort?.field,
          itemSortDir: _.sort?.direction,
          itemSortProperty: _.sort?.assetpropertyid,
        })))
      : (_.searchParams.delete(`sort`),
        _.searchParams.delete(`dir`),
        _((_) => ({
          ..._,
          itemSort: void 0,
          itemSortDir: void 0,
          itemSortProperty: void 0,
        }))),
      _(_);
  }, [_.sort, _]);
  let [_, _] = (0, _.useState)(() => _(_, _)),
    _ = (0, _.useCallback)(
      (_) => {
        _({
          ..._,
          ..._(_.strItemName, _, _),
        }),
          _(_);
      },
      [_, _, _],
    ),
    _ = (0, _.useCallback)(
      (_) => {
        _ !== _ &&
          (_({
            ..._,
            strItemName: _ || _.strItemName,
            disableGrouping: !!_,
          }),
          _(_ || void 0));
      },
      [_, _, _, _],
    ),
    _ = (0, _.useCallback)(
      (_) =>
        _({
          ..._,
          strQuery: _,
        }),
      [_, _],
    ),
    [_, _] = (0, _.useState)(!1),
    _ = _(),
    _ = _() === `initial`,
    _ = _(_),
    _ = _(_.data),
    _ = !_().bEligible;
  if (!_.data) return null;
  let _ = _.data,
    _ = _(_),
    _ = _ || _;
  return (0, _.jsx)(_, {
    filter: _,
    children: (0, _.jsxs)(_, {
      direction: `column`,
      children: [
        (0, _.jsxs)(_, {
          children: [
            (0, _.jsxs)(_, {
              gap: `1`,
              direction: `column`,
              marginX: {
                initial: `2`,
                _: `1`,
                _: `0`,
              },
              marginTop: `1`,
              marginBottom: `3`,
              children: [
                (0, _.jsx)(_, {
                  query: _,
                  item: _,
                }),
                _ &&
                  (0, _.jsx)(_, {
                    description: _,
                  }),
                _ &&
                  (0, _.jsx)(_, {
                    direction: `column`,
                    gap: `2`,
                    background: `dull-4`,
                    children: (0, _.jsx)(_, {
                      orders: _,
                      focusedSellOrderAssetID: _,
                    }),
                  }),
              ],
            }),
            (0, _.jsx)(_, {
              description: _,
              children:
                _ &&
                (0, _.jsx)(_, {
                  description: _,
                  marginTop: `3`,
                }),
            }),
          ],
        }),
        (0, _.jsxs)(_, {
          marginTop: {
            initial: `0`,
            _: `3`,
          },
          flexGrow: `1`,
          background: {
            initial: `dull-3`,
            _: void 0,
          },
          children: [
            (0, _.jsx)(_, {
              filter: _,
              onFilterChange: _,
              buckets: _,
              description: _,
              value: _ || null,
              onChange: _,
              onPreviewBucketChange: _,
              onFallbackBucketChange: _,
            }),
            (0, _.jsxs)(_, {
              background: `dull-3`,
              paddingY: {
                initial: void 0,
                _: `5`,
              },
              children: [
                (0, _.jsxs)(_, {
                  marginX: {
                    initial: `0`,
                    _: `2`,
                  },
                  children: [
                    _ &&
                      (0, _.jsx)(_, {
                        description: _,
                      }),
                    (0, _.jsx)(_, {
                      appid: _.appid,
                      bucketID: _ || _,
                      buckets: _,
                      filter: _,
                      description: _,
                      activeBucketID: _,
                      previewBucketID: _,
                    }),
                    !_ &&
                      (0, _.jsx)(_, {
                        appid: _.appid,
                        activeBucketID: _,
                        buckets: _,
                      }),
                    _ && (0, _.jsx)(_, {}),
                  ],
                }),
                (0, _.jsxs)(_, {
                  total: _.data?.pages[0]?.total_count,
                  children: [
                    (0, _.jsx)(_, {
                      filter: _,
                      onFilterChange: _,
                      facetingInfo: _,
                      description: _,
                      relevantAssetProperties: _,
                      textFilter: _.strQuery,
                      onTextFilterChange: _,
                      open: _,
                      onShowFilters: _,
                    }),
                    (0, _.jsxs)(_, {
                      flexGrow: `1`,
                      children: [
                        !1,
                        (0, _.jsx)(_, {
                          appid: _.appid,
                          query: _,
                          activeSort: _.sort,
                          onActiveSortChanged: _,
                          initialSelectedListing: _,
                          relevantAssetProperties: _,
                          onShowFilters: _,
                          activeBucketDescription: _,
                          filter: _,
                          onFilterChange: _,
                          textFilter: _.strQuery,
                          onTextFilterChange: _,
                          facetingInfo: _,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function _(_) {
  if (!_ || !_.pages || !_.pages[0] || !_.pages[0].facets) return;
  let _ = _.pages[0],
    _ = _.facets,
    _ = {};
  for (let _ of _)
    typeof _.listings == `number` &&
      _.tag &&
      _.tag.category &&
      _.tag.internal_name &&
      (_[_.tag.category]
        ? (_[_.tag.category][_.tag.internal_name] = _.listings)
        : (_[_.tag.category] = {
            [_.tag.internal_name]: _.listings,
          }));
  return {
    counts: _,
    total: _.total_count,
  };
}
function _(_) {
  let { children: _, total: _ } = _,
    _ = (0, _.useRef)(!1);
  return (
    _ && _ > 3 && (_.current = !0),
    _.current
      ? (0, _.jsx)(_, {
          gap: `5`,
          paddingTop: {
            initial: void 0,
            _: `5`,
            _: `7`,
          },
          padding: {
            initial: `3`,
            _: `7`,
          },
          align: `start`,
          position: `relative`,
          children: _,
        })
      : (0, _.jsx)(_, {
          children: (0, _.jsx)(_, {
            gap: `5`,
            paddingTop: {
              initial: void 0,
              _: `6`,
            },
            position: `relative`,
            children: _,
          }),
        })
  );
}
function _(_) {
  let { filter: _, children: _ } = _;
  if (!_.app || !_(_.app.appid))
    return (0, _.jsx)(_.Fragment, {
      children: _,
    });
  let _ = _.facets.Exterior ? Object.keys(_.facets.Exterior) : [];
  return (0, _.jsx)(_, {
    focusedWear: _.length === 1 ? _.find(({ tag: _ }) => _ === _[0]) : void 0,
    children: _,
  });
}
function _(_, _) {
  if (!_) return ``;
  let { field: _, direction: _, assetpropertyid: _ } = _,
    _ = _ === 0;
  switch (_) {
    case 0:
      return _.Localize(_ ? `#SortBy_Price_Asc` : `#SortBy_Price_Desc`);
    case 1: {
      _(_, `Missing asset property id from sort!`);
      let _ = _?.get(_);
      return _
        ? _.Localize(
            _ ? `#SortBy_AssetProperty_Asc` : `#SortBy_AssetProperty_Desc`,
            _.localized_label,
          )
        : (console.error(
            `Could not find property for asset property id "${_}"`,
          ),
          ``);
    }
    default:
      return ``;
  }
}
var _ = _.memo(function (_) {
  let {
      appid: _,
      query: _,
      activeSort: _,
      onActiveSortChanged: _,
      initialSelectedListing: _,
      relevantAssetProperties: _,
      onShowFilters: _,
      activeBucketDescription: _,
      filter: _,
      onFilterChange: _,
      textFilter: _,
      onTextFilterChange: _,
      facetingInfo: _,
    } = _,
    { isFetchingNextPage: _, fetchNextPage: _, isFetchNextPageError: _ } = _,
    _ = (0, _.useCallback)(() => {
      !_ && !_ && _();
    }, [_, _, _]),
    [_, _] = _(`resultsView`),
    _ = _() === `initial`,
    [_, _] = _(
      _
        ? {
            listing: _,
          }
        : null,
      _,
    ),
    _ = _.data?.pages[0],
    { data: _ } = _(_),
    _ = (0, _.useMemo)(() => {
      let _ = [
        {
          field: 0,
          direction: 0,
        },
        {
          field: 0,
          direction: 1,
        },
      ];
      if (!_ || !_.listings) return _;
      let _ = new Set();
      for (let _ of _.listings)
        for (let _ of _.asset?.asset_properties || [])
          _.propertyid && _.add(_.propertyid);
      for (let _ of _) {
        let _ = _?.get(_);
        !_ ||
          _.hide_from_description ||
          _.type === 3 ||
          (_ && !_[_._]) ||
          _.push(
            {
              field: 1,
              direction: 0,
              assetpropertyid: _._,
            },
            {
              field: 1,
              direction: 1,
              assetpropertyid: _._,
            },
          );
      }
      return _;
    }, [_, _, _]),
    [_, _] = (0, _.useState)(() => _(_.data?.pages));
  (0, _.useEffect)(() => {
    _ || (_(_.data?.pages) && _(!0));
  }, [_.data?.pages, _]);
  let _ = _(),
    _ = _(_);
  if (!_.data?.pages?.length) return null;
  let _ = _.data.pages[0]?.total_count || 0,
    _ = _ === `list` ? _ : _,
    _ = (0, _.jsxs)(_, {
      gap: `2`,
      align: `center`,
      children: [
        _ &&
          (0, _.jsx)(_, {
            color: `dull`,
            onClick: () => _(!0),
            children: _.Localize(`#Mobile_FiltersButton`),
          }),
        !_ &&
          (0, _.jsx)(_, {
            total: _,
            state: _,
            onStateChange: _,
            textFilter: _,
            onClearText: () => _(``),
            facetingInfo: _,
            facets: _.data,
          }),
      ],
    }),
    _ = (0, _.jsx)(_, {
      radius: `sm`,
      options: _,
      selectedValue: _ ?? {
        field: 0,
        direction: 0,
      },
      onSelectionChange: _,
      getOptionLabel: (_) => _(_, _),
    }),
    _ = {};
  return (0, _.jsxs)(_, {
    view: _,
    onViewChange: _,
    onLoadMore: _,
    loadingMore: _,
    loadingNew: _.isFetching && _.isPlaceholderData,
    loadingError: _,
    breadcrumbs: _,
    sort: _,
    empty: _ === 0,
    resetScrollIdentity: _.data.pages[0],
    children: [
      _.data.pages.flatMap((_, _) =>
        !_ || !_.listings
          ? null
          : _.listings.map((_, _) =>
              _[_.listingid]
                ? null
                : ((_[_.listingid] = !0),
                  (0, _.jsx)(
                    _,
                    {
                      listing: _,
                      onClick: () =>
                        _({
                          pageIndex: _,
                          itemIndex: _,
                        }),
                      expectEnhancedAppearance: _,
                    },
                    _.listingid,
                  )),
            ),
      ),
      _ &&
        `listing` in _ &&
        (0, _.jsx)(_, {
          activeBucketDescription: _,
          listing: _.listing,
          onClose: () => _(null),
          expectEnhancedAppearance: _,
        }),
      _ &&
        `pageIndex` in _ &&
        (0, _.jsx)(_, {
          activeBucketDescription: _,
          ..._,
          query: _,
          onClose: () => _(null),
          onIndexChange: _,
          expectEnhancedAppearance: _,
        }),
    ],
  });
});
function _(_ = []) {
  return _.some((_) =>
    !_ || !_.listings
      ? !1
      : _.listings.some(
          (_) => _.enhanced_appearances && _.enhanced_appearances.length > 0,
        ),
  );
}
function _(_, _) {
  let [_, _] = (0, _.useState)(_),
    _ = _.data?.pages;
  return [
    _,
    (0, _.useCallback)(
      (_) => {
        let _ = new URLSearchParams(window.location.search);
        if (_ && `listing` in _) _.set(`detail`, _.listing.listingid);
        else if (_) {
          if (!_) return;
          let _ = _[_.pageIndex];
          if (!_) return;
          let _ = _.listings[_.itemIndex];
          _ && _.set(`detail`, _.listingid);
        } else _.delete(`detail`);
        _(`?${_.toString()}`), _(_);
      },
      [_],
    ),
  ];
}
function _(_) {
  let { description: _, children: _ } = _,
    [_, _] = (0, _.useState)(0),
    _ = _(
      (0, _.useCallback)(
        (_) => _((_) => Math.max(_.contentRect.height, _)),
        [],
      ),
    ),
    _ = !_(`sm`);
  if (!_) return null;
  let _ = _(_);
  return (0, _.jsxs)(_, {
    marginBottom: _ ? void 0 : `6`,
    ref: _,
    minHeight: _ ? void 0 : `${_}px`,
    children: [
      (0, _.jsxs)(_, {
        align: `center`,
        background: `dull-4`,
        padding: `2`,
        marginBottom: _ ? void 0 : `3`,
        children: [
          (0, _.jsxs)(_, {
            flexGrow: `2`,
            align: `center`,
            justify: `center`,
            padding: `2`,
            position: `relative`,
            children: [
              (0, _.jsx)(_, {
                src: _,
              }),
              (0, _.jsx)(_, {
                src: _,
                alt: ``,
                width: `min( 360px, 95vw )`,
                zIndex: `1`,
              }),
            ],
          }),
          !_ &&
            (0, _.jsxs)(_, {
              flexGrow: `1`,
              flexBasis: `33%`,
              direction: `column`,
              children: [
                (0, _.jsx)(_, {
                  height: {
                    initial: 200,
                    _: 300,
                  },
                  slop: 40,
                  children: (0, _.jsx)(_, {
                    description: _,
                  }),
                }),
                _,
              ],
            }),
        ],
      }),
      !_ &&
        (0, _.jsx)(_, {
          description: _,
        }),
    ],
  });
}
function _(_) {
  let {
      description: { tags: _ = [], appid: _ },
    } = _,
    _ = _.reduce(
      (_, _) =>
        !_.category || !_.localized_category_name || !_.localized_tag_name
          ? _
          : (_[_.category] || (_[_.category] = []), _[_.category].push(_), _),
      {},
    ),
    _ = Object.values(_);
  return (0, _.jsx)(_, {
    gap: `4`,
    justify: `center`,
    wrap: `wrap`,
    children:
      _.length > 1 &&
      _.map((_) =>
        (0, _.jsx)(
          _,
          {
            appid: _,
            tags: _,
            itemTags: _,
          },
          _[0].category,
        ),
      ),
  });
}
function _(_) {
  let { appid: _, tags: _, itemTags: _ } = _;
  _(_.length > 0, `Attempted to render tag info without any tags!`);
  let _ = _[0].localized_category_name,
    _ = _.map(({ localized_tag_name: _ }) => _),
    _ = _(_, _, _);
  return (0, _.jsx)(_, {
    className: (0, _.default)(_(), _),
    _: _,
    external: !1,
    children: (0, _.jsxs)(_, {
      truncate: !0,
      className: _,
      children: [
        (0, _.jsxs)(_, {
          contrast: `note`,
          children: [_, `:`],
        }),
        ` `,
        _.join(`, `),
      ],
    }),
  });
}
function _(_, _, _) {
  let _ = _(),
    _ = _.slice();
  if (_ === 730) {
    let _ = _(),
      _ = _.some(({ category: _ }) => _.some((_) => _ === _)),
      _ = _.some(({ category: _ }) => _ === `Type`);
    _ && !_ && _.Type && _.Type.length > 0 && _.push(_.Type[0]);
  }
  let _ = _(
    {
      appid: _,
      filters: _(_, _),
    },
    _.maxPrice,
  );
  return _.Search({
    search: _,
  });
}
function _(_) {
  let { description: _ } = _;
  return (0, _.jsx)(_.Root, {
    description: _,
    children: (0, _.jsxs)(_, {
      direction: `column`,
      justify: `center`,
      minWidth: `0`,
      gap: `2`,
      paddingX: {
        initial: `1`,
        _: `3`,
      },
      paddingY: `3`,
      children: [
        (0, _.jsx)(_.Name, {}),
        (0, _.jsx)(_.GameInfo, {
          hrefGame: _.AppHome(_.appid),
        }),
      ],
    }),
  });
}
function _(_) {
  let { description: _ } = _;
  return (0, _.jsx)(_.Root, {
    description: _,
    children: (0, _.jsx)(_, {
      title: _.Localize(`#Mobile_InfoSection`),
      children: (0, _.jsx)(_.Descriptions, {}),
    }),
  });
}
function _(_) {
  let _ = _() === `initial`,
    _ = (0, _.jsx)(_, {
      ..._,
    });
  return _
    ? (0, _.jsx)(_, {
        title: _.Localize(`#Mobile_GraphSection`),
        children: _,
      })
    : _;
}
function _(_) {
  let { description: _, ..._ } = _;
  return _(_)
    ? (0, _.jsx)(_, {
        ..._,
      })
    : (0, _.jsx)(_, {
        ..._,
      });
}
var _ = _.memo(function (_) {
    let { appid: _, bucketID: _ } = _,
      _ = _(_, _, {
        placeholderData: (_) => _,
      });
    return _.data
      ? (0, _.jsx)(_, {
          priceHistory: _.data,
        })
      : null;
  }),
  _ = _.memo(function (_) {
    let {
        appid: _,
        buckets: _,
        filter: _,
        activeBucketID: _,
        previewBucketID: _,
      } = _,
      _ = _(_, _),
      _ = _(_),
      { rgWears: _ = [] } = _ || {},
      _ = _({
        queries: _.filter((_) => !!_[_]).map((_) =>
          _(_, _[_]._, {
            placeholderData: (_) => _,
          }),
        ),
        combine: (_) => _.filter((_) => _.isSuccess).map((_) => _.data),
      }),
      { rgGraphGroups: _, rgColors: _ } = (0, _.useMemo)(() => {
        let _ = _.filter((_) => !!_[_]),
          _ = [],
          _ = [];
        for (let _ = 0; _ < _.length; _++)
          if (_[_]) {
            let _ = _[_][_]._,
              { color: _, label: _ } = _[_],
              _ = `--graphcolor-${_}`;
            _.push([_, _, _]),
              _.push({
                _: _,
                color: `var(${_})`,
                label: _,
                priceHistory: _[_],
              });
          }
        return {
          rgGraphGroups: _,
          rgColors: _,
        };
      }, [_, _, _]),
      _ = !_ && !!_,
      _ = {
        display: `contents`,
      };
    for (let [_, _, _] of _)
      _ && _ !== _ ? (_[_] = `rgb( from ${_} r g b / 30% )`) : (_[_] = _);
    return (0, _.jsx)(`div`, {
      style: _,
      children: (0, _.jsx)(_, {
        groups: _,
        activeGroupID: _,
      }),
    });
  });
function _(_) {
  let { appid: _, activeBucketID: _, buckets: _ } = _,
    _ = _(_, _, !1),
    [_, _] = (0, _.useState)(!1),
    _ = _.data ? _(_.data) : null,
    _ = _.isSuccess,
    _ = _ && _.cBuyOrders > 0;
  return _() === `initial`
    ? (0, _.jsx)(_, {
        title: _.Localize(`#Mobile_BuyOrderSection`),
        children: (0, _.jsxs)(_, {
          direction: `column`,
          gap: `1`,
          children: [
            _ &&
              (0, _.jsx)(_, {
                orders: _.rgBuyOrders,
                currency: _.eCurrency,
                totalOrders: _.cBuyOrders,
              }),
            (0, _.jsxs)(_, {
              background: `dull-6`,
              padding: `3`,
              radius: `sm`,
              flexGrow: `1`,
              children: [
                (0, _.jsx)(_, {
                  size: `4`,
                  children: _.Localize(`#UniqueBuyOrder_Explanation_Header`),
                }),
                (0, _.jsx)(_, {
                  _: `p`,
                  children: _.Localize(`#UniqueBuyOrder_Explanation_1`),
                }),
                (0, _.jsx)(_, {
                  _: `p`,
                  children: _.Localize(`#UniqueBuyOrder_Explanation_2`),
                }),
                (0, _.jsx)(_, {
                  _: `p`,
                  children: _.Localize(`#UniqueBuyOrder_Explanation_3`),
                }),
              ],
            }),
            (0, _.jsx)(_, {
              appid: _,
              loading: _.isLoading,
              color: `dull`,
              buckets: _,
              activeBucketID: _,
              minWidth: `100%`,
              children: _.Localize(`#Button_BuyOrder`),
            }),
          ],
        }),
      })
    : (0, _.jsxs)(_, {
        direction: `column`,
        gap: `2`,
        marginTop: `4`,
        children: [
          (0, _.jsx)(_, {
            size: `5`,
            children: _.Localize(`#BuyOrder_PlaceOrderHeader`),
          }),
          (0, _.jsxs)(_, {
            radius: `sm`,
            background: `dull-6`,
            direction: `column`,
            gap: `3`,
            padding: `3`,
            children: [
              (0, _.jsxs)(_, {
                gap: `2`,
                justify: `between`,
                align: `center`,
                children: [
                  (0, _.jsxs)(_, {
                    align: `center`,
                    gap: `2`,
                    onClick: () => _(!_),
                    cursor: `pointer`,
                    children: [
                      (0, _.jsx)(_, {}),
                      _ &&
                        (0, _.jsxs)(_, {
                          children: [
                            (0, _.jsxs)(_, {
                              weight: `medium`,
                              color: `text-body`,
                              contrast: `body`,
                              children: [
                                _ &&
                                  _(
                                    _.LocalizePlural(
                                      `#OrderBook_PlaceOrder_BuyRequests`,
                                      _.cBuyOrders,
                                      _(_.amtMaxBuyOrder || 0, _.eCurrency),
                                      Intl.NumberFormat(_()).format(
                                        _.cBuyOrders,
                                      ),
                                    ),
                                  ),
                                !_ &&
                                  _.Localize(
                                    `#OrderBook_BuyOrder_Description_None`,
                                  ),
                                `\xA0`,
                              ],
                            }),
                            (0, _.jsx)(_, {
                              direction: _ ? `up` : `down`,
                            }),
                          ],
                        }),
                      !_ &&
                        !_ &&
                        (0, _.jsxs)(_, {
                          children: [
                            _.Localize(`#OrderBook_BuyOrder_NeedBucket`),
                            `\xA0`,
                            (0, _.jsx)(_, {
                              direction: _ ? `up` : `down`,
                            }),
                          ],
                        }),
                    ],
                  }),
                  (0, _.jsxs)(_, {
                    direction: `row`,
                    gap: `2`,
                    align: `center`,
                    children: [
                      (0, _.jsx)(_, {
                        children: _.Localize(
                          `#OrderBook_BuyOrder_Explanation_Unique`,
                        ),
                      }),
                      (0, _.jsx)(_, {
                        appid: _,
                        loading: _.isLoading,
                        color: `dull`,
                        buckets: _,
                        activeBucketID: _,
                        children: _.Localize(`#Button_BuyOrder`),
                      }),
                    ],
                  }),
                ],
              }),
              _ &&
                (0, _.jsxs)(_, {
                  gap: `3`,
                  children: [
                    _ &&
                      (0, _.jsx)(_, {
                        orders: _.rgBuyOrders,
                        currency: _.eCurrency,
                        totalOrders: _.cBuyOrders,
                      }),
                    (0, _.jsxs)(_, {
                      background: `dull-6`,
                      padding: `3`,
                      radius: `sm`,
                      flexGrow: `1`,
                      children: [
                        (0, _.jsx)(_, {
                          size: `4`,
                          children: _.Localize(
                            `#UniqueBuyOrder_Explanation_Header`,
                          ),
                        }),
                        (0, _.jsx)(_, {
                          _: `p`,
                          children: _.Localize(`#UniqueBuyOrder_Explanation_1`),
                        }),
                        (0, _.jsx)(_, {
                          _: `p`,
                          children: _.Localize(`#UniqueBuyOrder_Explanation_2`),
                        }),
                        (0, _.jsx)(_, {
                          _: `p`,
                          children: _.Localize(`#UniqueBuyOrder_Explanation_3`),
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          }),
        ],
      });
}
function _() {
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    width: `1.5em`,
    height: `1.5em`,
    viewBox: `0 0 30 30`,
    fill: `none`,
    children: (0, _.jsx)(`path`, {
      _: `M8.33203 9.16602H10.832V5.83301H28.333V24.166H10.832V20.833H8.33203V24.166H1.66602V17.5C3.04662 17.5 4.16584 16.3806 4.16602 15C4.16602 13.6193 3.04673 12.5 1.66602 12.5V5.83301H8.33203V9.16602ZM19.1602 13.125C18.9205 13.562 18.561 13.9215 18.124 14.1611L15.832 15.416L18.124 16.6719C18.5611 16.9115 18.9206 17.2709 19.1602 17.708L20.4229 20L21.6709 17.708H21.6914C21.9263 17.2744 22.2784 16.9156 22.707 16.6719L24.999 15.416L22.707 14.1611C22.268 13.9216 21.9056 13.5624 21.6631 13.125L20.415 10.833L19.1602 13.125ZM8.33203 19.166H10.832V15.833H8.33203V19.166ZM8.33203 14.166H10.832V10.833H8.33203V14.166Z`,
      fill: `currentColor`,
    }),
  });
}
function _(_, _) {
  let _ = {};
  for (let [_, _] of Object.entries(_.accessoryFilters || {}))
    if (_.startsWith(`accessory_`)) {
      let _ = _.slice(10);
      if (!_.length) continue;
      for (let _ of _) _ in _ || (_[_] = {}), (_[_][_] = !0);
    }
  let _ = {};
  for (let [_, _] of Object.entries(_.filters || {}))
    if (_.length)
      for (let _ of _) _.length && (_[_] || (_[_] = {}), (_[_][_] = !0));
  return {
    app: {
      appid: _.appid,
      icon: ``,
      name: ``,
    },
    accessories: _,
    facets: _,
    properties: _.propertyFilters || {},
    price: [_.price?.unMin ?? 0, _.price?.unMax ?? _.maxPrice],
  };
}
function _(_, _, _) {
  let _ = {},
    _ = {},
    _ = _.app.appid;
  if (typeof _ == `number`) {
    for (let _ of Object.keys(_.facets)) {
      let _ = _.facets[_];
      if (_) for (let _ of Object.keys(_)) _[_] ? _[_].push(_) : (_[_] = [_]);
    }
    for (let _ of Object.keys(_.accessories)) {
      let _ = `accessory_${_}`;
      for (let _ of Object.keys(_.accessories[_]))
        _[_] ? _[_].push(_) : (_[_] = [_]);
    }
  }
  let _ = {
      appid: _,
      strItemName: _,
      filters: _,
      accessoryFilters: _,
      propertyFilters: _.properties,
    },
    _ = _.price[0] ?? 0,
    _ = _.price[1] ?? _.maxPrice,
    _;
  return (
    (_ || (_ && _ < _.maxPrice)) &&
      (_ = {
        eCurrency: _.currency.eCurrency,
        unMin: _ > 0 ? _ : void 0,
        unMax: _ > _ && _ < _.maxPrice ? _ : void 0,
      }),
    (_.price = _),
    _
  );
}
function _() {
  return (0, _.jsx)(_, {
    marginTop: `4`,
    children: _.Localize(`#Item_CountryBuyRestricted`),
  });
}
export { _, _, _, _, _, _, _, _, _ };
