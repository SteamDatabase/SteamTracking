var _ = _(_(), 1),
  _ = _(_(), 1);
function _(_, _, _) {
  let _ = _.initialDeps ?? [],
    _;
  function _() {
    var _;
    let _;
    _.key && _.debug?.call(_) && (_ = Date.now());
    let _ = _();
    if (!(_.length !== _.length || _.some((_, _) => _[_] !== _))) return _;
    _ = _;
    let _;
    if (
      (_.key && _.debug?.call(_) && (_ = Date.now()),
      (_ = _(..._)),
      _.key && _.debug?.call(_))
    ) {
      let _ = Math.round((Date.now() - _) * 100) / 100,
        _ = Math.round((Date.now() - _) * 100) / 100,
        _ = _ / 16,
        _ = (_, _) => {
          for (_ = String(_); _.length < _; ) _ = ` ` + _;
          return _;
        };
      console.info(
        `%c⏱ ${_(_, 5)} /${_(_, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * _, 120))}deg 100% 31%);`,
        _?.key,
      );
    }
    return (_ = _?.onChange) == null || _.call(_, _), _;
  }
  return (
    (_.updateDeps = (_) => {
      _ = _;
    }),
    _
  );
}
function _(_, _) {
  if (_ === void 0) throw Error(`Unexpected undefined${_ ? `: ${_}` : ``}`);
  return _;
}
var _ = (_, _) => Math.abs(_ - _) < 1.01,
  _ = (_, _, _) => {
    let _;
    return function (..._) {
      _.clearTimeout(_), (_ = _.setTimeout(() => _.apply(this, _), _));
    };
  },
  _ = (_) => {
    let { offsetWidth: _, offsetHeight: _ } = _;
    return {
      width: _,
      height: _,
    };
  },
  _ = (_) => _,
  _ = (_) => {
    let _ = Math.max(_.startIndex - _.overscan, 0),
      _ = Math.min(_.endIndex + _.overscan, _.count - 1),
      _ = [];
    for (let _ = _; _ <= _; _++) _.push(_);
    return _;
  },
  _ = (_, _) => {
    let _ = _.scrollElement;
    if (!_) return;
    let _ = _.targetWindow;
    if (!_) return;
    let _ = (_) => {
      let { width: _, height: _ } = _;
      _({
        width: Math.round(_),
        height: Math.round(_),
      });
    };
    if ((_(_(_)), !_.ResizeObserver)) return () => {};
    let _ = new _.ResizeObserver((_) => {
      let _ = () => {
        let _ = _[0];
        if (_?.borderBoxSize) {
          let _ = _.borderBoxSize[0];
          if (_) {
            _({
              width: _.inlineSize,
              height: _.blockSize,
            });
            return;
          }
        }
        _(_(_));
      };
      _.options.useAnimationFrameWithResizeObserver
        ? requestAnimationFrame(_)
        : _();
    });
    return (
      _.observe(_, {
        box: `border-box`,
      }),
      () => {
        _.unobserve(_);
      }
    );
  },
  _ = {
    passive: !0,
  },
  _ = (_, _) => {
    let _ = _.scrollElement;
    if (!_) return;
    let _ = () => {
      _({
        width: _.innerWidth,
        height: _.innerHeight,
      });
    };
    return (
      _(),
      _.addEventListener(`resize`, _, _),
      () => {
        _.removeEventListener(`resize`, _);
      }
    );
  },
  _ = typeof window > `u` || `onscrollend` in window,
  _ = (_, _) => {
    let _ = _.scrollElement;
    if (!_) return;
    let _ = _.targetWindow;
    if (!_) return;
    let _ = 0,
      _ =
        _.options.useScrollendEvent && _
          ? () => void 0
          : _(
              _,
              () => {
                _(_, !1);
              },
              _.options.isScrollingResetDelay,
            ),
      _ = (_) => () => {
        let { horizontal: _, isRtl: _ } = _.options;
        (_ = _ ? _.scrollLeft * ((_ && -1) || 1) : _.scrollTop), _(), _(_, _);
      },
      _ = _(!0),
      _ = _(!1);
    _(), _.addEventListener(`scroll`, _, _);
    let _ = _.options.useScrollendEvent && _;
    return (
      _ && _.addEventListener(`scrollend`, _, _),
      () => {
        _.removeEventListener(`scroll`, _),
          _ && _.removeEventListener(`scrollend`, _);
      }
    );
  },
  _ = (_, _) => {
    let _ = _.scrollElement;
    if (!_) return;
    let _ = _.targetWindow;
    if (!_) return;
    let _ = 0,
      _ =
        _.options.useScrollendEvent && _
          ? () => void 0
          : _(
              _,
              () => {
                _(_, !1);
              },
              _.options.isScrollingResetDelay,
            ),
      _ = (_) => () => {
        (_ = _[_.options.horizontal ? `scrollX` : `scrollY`]), _(), _(_, _);
      },
      _ = _(!0),
      _ = _(!1);
    _(), _.addEventListener(`scroll`, _, _);
    let _ = _.options.useScrollendEvent && _;
    return (
      _ && _.addEventListener(`scrollend`, _, _),
      () => {
        _.removeEventListener(`scroll`, _),
          _ && _.removeEventListener(`scrollend`, _);
      }
    );
  },
  _ = (_, _, _) => {
    if (_?.borderBoxSize) {
      let _ = _.borderBoxSize[0];
      if (_)
        return Math.round(_[_.options.horizontal ? `inlineSize` : `blockSize`]);
    }
    return _[_.options.horizontal ? `offsetWidth` : `offsetHeight`];
  },
  _ = (_, { adjustments: _ = 0, behavior: _ }, _) => {
    var _, _;
    let _ = _ + _;
    (_ = (_ = _.scrollElement)?.scrollTo) == null ||
      _.call(_, {
        [_.options.horizontal ? `left` : `top`]: _,
        behavior: _,
      });
  },
  _ = (_, { adjustments: _ = 0, behavior: _ }, _) => {
    var _, _;
    let _ = _ + _;
    (_ = (_ = _.scrollElement)?.scrollTo) == null ||
      _.call(_, {
        [_.options.horizontal ? `left` : `top`]: _,
        behavior: _,
      });
  },
  _ = class {
    constructor(_) {
      (this.unsubs = []),
        (this.scrollElement = null),
        (this.targetWindow = null),
        (this.isScrolling = !1),
        (this.measurementsCache = []),
        (this.itemSizeCache = new Map()),
        (this.pendingMeasuredCacheIndexes = []),
        (this.scrollRect = null),
        (this.scrollOffset = null),
        (this.scrollDirection = null),
        (this.scrollAdjustments = 0),
        (this.elementsCache = new Map()),
        (this.observer = (() => {
          let _ = null,
            _ = () =>
              _ ||
              (!this.targetWindow || !this.targetWindow.ResizeObserver
                ? null
                : (_ = new this.targetWindow.ResizeObserver((_) => {
                    _.forEach((_) => {
                      let _ = () => {
                        this._measureElement(_.target, _);
                      };
                      this.options.useAnimationFrameWithResizeObserver
                        ? requestAnimationFrame(_)
                        : _();
                    });
                  })));
          return {
            disconnect: () => {
              var _;
              (_ = _()) == null || _.disconnect(), (_ = null);
            },
            observe: (_) =>
              _()?.observe(_, {
                box: `border-box`,
              }),
            unobserve: (_) => _()?.unobserve(_),
          };
        })()),
        (this.range = null),
        (this.setOptions = (_) => {
          Object.entries(_).forEach(([_, _]) => {
            _ === void 0 && delete _[_];
          }),
            (this.options = {
              debug: !1,
              initialOffset: 0,
              overscan: 1,
              paddingStart: 0,
              paddingEnd: 0,
              scrollPaddingStart: 0,
              scrollPaddingEnd: 0,
              horizontal: !1,
              getItemKey: _,
              rangeExtractor: _,
              onChange: () => {},
              measureElement: _,
              initialRect: {
                width: 0,
                height: 0,
              },
              scrollMargin: 0,
              gap: 0,
              indexAttribute: `data-index`,
              initialMeasurementsCache: [],
              lanes: 1,
              isScrollingResetDelay: 150,
              enabled: !0,
              isRtl: !1,
              useScrollendEvent: !1,
              useAnimationFrameWithResizeObserver: !1,
              ..._,
            });
        }),
        (this.notify = (_) => {
          var _, _;
          (_ = (_ = this.options).onChange) == null || _.call(_, this, _);
        }),
        (this.maybeNotify = _(
          () => (
            this.calculateRange(),
            [
              this.isScrolling,
              this.range ? this.range.startIndex : null,
              this.range ? this.range.endIndex : null,
            ]
          ),
          (_) => {
            this.notify(_);
          },
          {
            key: !1,
            debug: () => this.options.debug,
            initialDeps: [
              this.isScrolling,
              this.range ? this.range.startIndex : null,
              this.range ? this.range.endIndex : null,
            ],
          },
        )),
        (this.cleanup = () => {
          this.unsubs.filter(Boolean).forEach((_) => _()),
            (this.unsubs = []),
            this.observer.disconnect(),
            (this.scrollElement = null),
            (this.targetWindow = null);
        }),
        (this._didMount = () => () => {
          this.cleanup();
        }),
        (this._willUpdate = () => {
          let _ = this.options.enabled ? this.options.getScrollElement() : null;
          if (this.scrollElement !== _) {
            if ((this.cleanup(), !_)) {
              this.maybeNotify();
              return;
            }
            (this.scrollElement = _),
              this.scrollElement && `ownerDocument` in this.scrollElement
                ? (this.targetWindow =
                    this.scrollElement.ownerDocument.defaultView)
                : (this.targetWindow = this.scrollElement?.window ?? null),
              this.elementsCache.forEach((_) => {
                this.observer.observe(_);
              }),
              this._scrollToOffset(this.getScrollOffset(), {
                adjustments: void 0,
                behavior: void 0,
              }),
              this.unsubs.push(
                this.options.observeElementRect(this, (_) => {
                  (this.scrollRect = _), this.maybeNotify();
                }),
              ),
              this.unsubs.push(
                this.options.observeElementOffset(this, (_, _) => {
                  (this.scrollAdjustments = 0),
                    (this.scrollDirection = _
                      ? this.getScrollOffset() < _
                        ? `forward`
                        : `backward`
                      : null),
                    (this.scrollOffset = _),
                    (this.isScrolling = _),
                    this.maybeNotify();
                }),
              );
          }
        }),
        (this.getSize = () =>
          this.options.enabled
            ? ((this.scrollRect = this.scrollRect ?? this.options.initialRect),
              this.scrollRect[this.options.horizontal ? `width` : `height`])
            : ((this.scrollRect = null), 0)),
        (this.getScrollOffset = () =>
          this.options.enabled
            ? ((this.scrollOffset =
                this.scrollOffset ??
                (typeof this.options.initialOffset == `function`
                  ? this.options.initialOffset()
                  : this.options.initialOffset)),
              this.scrollOffset)
            : ((this.scrollOffset = null), 0)),
        (this.getFurthestMeasurement = (_, _) => {
          let _ = new Map(),
            _ = new Map();
          for (let _ = _ - 1; _ >= 0; _--) {
            let _ = _[_];
            if (_.has(_.lane)) continue;
            let _ = _.get(_.lane);
            if (
              (_ == null || _.end > _.end
                ? _.set(_.lane, _)
                : _.end < _.end && _.set(_.lane, !0),
              _.size === this.options.lanes)
            )
              break;
          }
          return _.size === this.options.lanes
            ? Array.from(_.values()).sort((_, _) =>
                _.end === _.end ? _.index - _.index : _.end - _.end,
              )[0]
            : void 0;
        }),
        (this.getMeasurementOptions = _(
          () => [
            this.options.count,
            this.options.paddingStart,
            this.options.scrollMargin,
            this.options.getItemKey,
            this.options.enabled,
          ],
          (_, _, _, _, _) => (
            (this.pendingMeasuredCacheIndexes = []),
            {
              count: _,
              paddingStart: _,
              scrollMargin: _,
              getItemKey: _,
              enabled: _,
            }
          ),
          {
            key: !1,
          },
        )),
        (this.getMeasurements = _(
          () => [this.getMeasurementOptions(), this.itemSizeCache],
          (
            {
              count: _,
              paddingStart: _,
              scrollMargin: _,
              getItemKey: _,
              enabled: _,
            },
            _,
          ) => {
            if (!_)
              return (
                (this.measurementsCache = []), this.itemSizeCache.clear(), []
              );
            this.measurementsCache.length === 0 &&
              ((this.measurementsCache = this.options.initialMeasurementsCache),
              this.measurementsCache.forEach((_) => {
                this.itemSizeCache.set(_.key, _.size);
              }));
            let _ =
              this.pendingMeasuredCacheIndexes.length > 0
                ? Math.min(...this.pendingMeasuredCacheIndexes)
                : 0;
            this.pendingMeasuredCacheIndexes = [];
            let _ = this.measurementsCache.slice(0, _);
            for (let _ = _; _ < _; _++) {
              let _ = _(_),
                _ =
                  this.options.lanes === 1
                    ? _[_ - 1]
                    : this.getFurthestMeasurement(_, _),
                _ = _ ? _.end + this.options.gap : _ + _,
                _ = _.get(_),
                _ = typeof _ == `number` ? _ : this.options.estimateSize(_),
                _ = _ + _,
                _ = _ ? _.lane : _ % this.options.lanes;
              _[_] = {
                index: _,
                start: _,
                size: _,
                end: _,
                key: _,
                lane: _,
              };
            }
            return (this.measurementsCache = _), _;
          },
          {
            key: !1,
            debug: () => this.options.debug,
          },
        )),
        (this.calculateRange = _(
          () => [
            this.getMeasurements(),
            this.getSize(),
            this.getScrollOffset(),
            this.options.lanes,
          ],
          (_, _, _, _) =>
            (this.range =
              _.length > 0 && _ > 0
                ? _({
                    measurements: _,
                    outerSize: _,
                    scrollOffset: _,
                    lanes: _,
                  })
                : null),
          {
            key: !1,
            debug: () => this.options.debug,
          },
        )),
        (this.getVirtualIndexes = _(
          () => {
            let _ = null,
              _ = null,
              _ = this.calculateRange();
            return (
              _ && ((_ = _.startIndex), (_ = _.endIndex)),
              this.maybeNotify.updateDeps([this.isScrolling, _, _]),
              [
                this.options.rangeExtractor,
                this.options.overscan,
                this.options.count,
                _,
                _,
              ]
            );
          },
          (_, _, _, _, _) =>
            _ === null || _ === null
              ? []
              : _({
                  startIndex: _,
                  endIndex: _,
                  overscan: _,
                  count: _,
                }),
          {
            key: !1,
            debug: () => this.options.debug,
          },
        )),
        (this.indexFromElement = (_) => {
          let _ = this.options.indexAttribute,
            _ = _.getAttribute(_);
          return _
            ? parseInt(_, 10)
            : (console.warn(
                `Missing attribute name '${_}={index}' on measured element.`,
              ),
              -1);
        }),
        (this._measureElement = (_, _) => {
          let _ = this.indexFromElement(_),
            _ = this.measurementsCache[_];
          if (!_) return;
          let _ = _.key,
            _ = this.elementsCache.get(_);
          _ !== _ &&
            (_ && this.observer.unobserve(_),
            this.observer.observe(_),
            this.elementsCache.set(_, _)),
            _.isConnected &&
              this.resizeItem(_, this.options.measureElement(_, _, this));
        }),
        (this.resizeItem = (_, _) => {
          let _ = this.measurementsCache[_];
          if (!_) return;
          let _ = _ - (this.itemSizeCache.get(_.key) ?? _.size);
          _ !== 0 &&
            ((this.shouldAdjustScrollPositionOnItemSizeChange === void 0
              ? _.start < this.getScrollOffset() + this.scrollAdjustments
              : this.shouldAdjustScrollPositionOnItemSizeChange(_, _, this)) &&
              this._scrollToOffset(this.getScrollOffset(), {
                adjustments: (this.scrollAdjustments += _),
                behavior: void 0,
              }),
            this.pendingMeasuredCacheIndexes.push(_.index),
            (this.itemSizeCache = new Map(this.itemSizeCache.set(_.key, _))),
            this.notify(!1));
        }),
        (this.measureElement = (_) => {
          if (!_) {
            this.elementsCache.forEach((_, _) => {
              _.isConnected ||
                (this.observer.unobserve(_), this.elementsCache.delete(_));
            });
            return;
          }
          this._measureElement(_, void 0);
        }),
        (this.getVirtualItems = _(
          () => [this.getVirtualIndexes(), this.getMeasurements()],
          (_, _) => {
            let _ = [];
            for (let _ = 0, _ = _.length; _ < _; _++) {
              let _ = _[_[_]];
              _.push(_);
            }
            return _;
          },
          {
            key: !1,
            debug: () => this.options.debug,
          },
        )),
        (this.getVirtualItemForOffset = (_) => {
          let _ = this.getMeasurements();
          if (_.length !== 0)
            return _(_[_(0, _.length - 1, (_) => _(_[_]).start, _)]);
        }),
        (this.getOffsetForAlignment = (_, _, _ = 0) => {
          let _ = this.getSize(),
            _ = this.getScrollOffset();
          _ === `auto` && (_ = _ >= _ + _ ? `end` : `start`),
            _ === `center` ? (_ += (_ - _) / 2) : _ === `end` && (_ -= _);
          let _ = this.getTotalSize() + this.options.scrollMargin - _;
          return Math.max(Math.min(_, _), 0);
        }),
        (this.getOffsetForIndex = (_, _ = `auto`) => {
          _ = Math.max(0, Math.min(_, this.options.count - 1));
          let _ = this.measurementsCache[_];
          if (!_) return;
          let _ = this.getSize(),
            _ = this.getScrollOffset();
          if (_ === `auto`)
            if (_.end >= _ + _ - this.options.scrollPaddingEnd) _ = `end`;
            else if (_.start <= _ + this.options.scrollPaddingStart)
              _ = `start`;
            else return [_, _];
          let _ =
            _ === `end`
              ? _.end + this.options.scrollPaddingEnd
              : _.start - this.options.scrollPaddingStart;
          return [this.getOffsetForAlignment(_, _, _.size), _];
        }),
        (this.isDynamicMode = () => this.elementsCache.size > 0),
        (this.scrollToOffset = (
          _,
          { align: _ = `start`, behavior: _ } = {},
        ) => {
          _ === `smooth` &&
            this.isDynamicMode() &&
            console.warn(
              "The `smooth` scroll behavior is not fully supported with dynamic size.",
            ),
            this._scrollToOffset(this.getOffsetForAlignment(_, _), {
              adjustments: void 0,
              behavior: _,
            });
        }),
        (this.scrollToIndex = (_, { align: _ = `auto`, behavior: _ } = {}) => {
          _ === `smooth` &&
            this.isDynamicMode() &&
            console.warn(
              "The `smooth` scroll behavior is not fully supported with dynamic size.",
            ),
            (_ = Math.max(0, Math.min(_, this.options.count - 1)));
          let _ = 0,
            _ = (_) => {
              if (!this.targetWindow) return;
              let _ = this.getOffsetForIndex(_, _);
              if (!_) {
                console.warn(`Failed to get offset for index:`, _);
                return;
              }
              let [_, _] = _;
              this._scrollToOffset(_, {
                adjustments: void 0,
                behavior: _,
              }),
                this.targetWindow.requestAnimationFrame(() => {
                  let _ = this.getScrollOffset(),
                    _ = this.getOffsetForIndex(_, _);
                  if (!_) {
                    console.warn(`Failed to get offset for index:`, _);
                    return;
                  }
                  _(_[0], _) || _(_);
                });
            },
            _ = (_) => {
              this.targetWindow &&
                (_++,
                _ < 10
                  ? this.targetWindow.requestAnimationFrame(() => _(_))
                  : console.warn(
                      `Failed to scroll to index ${_} after 10 attempts.`,
                    ));
            };
          _(_);
        }),
        (this.scrollBy = (_, { behavior: _ } = {}) => {
          _ === `smooth` &&
            this.isDynamicMode() &&
            console.warn(
              "The `smooth` scroll behavior is not fully supported with dynamic size.",
            ),
            this._scrollToOffset(this.getScrollOffset() + _, {
              adjustments: void 0,
              behavior: _,
            });
        }),
        (this.getTotalSize = () => {
          let _ = this.getMeasurements(),
            _;
          if (_.length === 0) _ = this.options.paddingStart;
          else if (this.options.lanes === 1) _ = _[_.length - 1]?.end ?? 0;
          else {
            let _ = Array(this.options.lanes).fill(null),
              _ = _.length - 1;
            for (; _ >= 0 && _.some((_) => _ === null); ) {
              let _ = _[_];
              _[_.lane] === null && (_[_.lane] = _.end), _--;
            }
            _ = Math.max(..._.filter((_) => _ !== null));
          }
          return Math.max(
            _ - this.options.scrollMargin + this.options.paddingEnd,
            0,
          );
        }),
        (this._scrollToOffset = (_, { adjustments: _, behavior: _ }) => {
          this.options.scrollToFn(
            _,
            {
              behavior: _,
              adjustments: _,
            },
            this,
          );
        }),
        (this.measure = () => {
          (this.itemSizeCache = new Map()), this.notify(!1);
        }),
        this.setOptions(_);
    }
  },
  _ = (_, _, _, _) => {
    for (; _ <= _; ) {
      let _ = ((_ + _) / 2) | 0,
        _ = _(_);
      if (_ < _) _ = _ + 1;
      else if (_ > _) _ = _ - 1;
      else return _;
    }
    return _ > 0 ? _ - 1 : 0;
  };
function _({ measurements: _, outerSize: _, scrollOffset: _, lanes: _ }) {
  let _ = _.length - 1,
    _ = (_) => _[_].start;
  if (_.length <= _)
    return {
      startIndex: 0,
      endIndex: _,
    };
  let _ = _(0, _, _, _),
    _ = _;
  if (_ === 1) for (; _ < _ && _[_].end < _ + _; ) _++;
  else if (_ > 1) {
    let _ = Array(_).fill(0);
    for (; _ < _ && _.some((_) => _ < _ + _); ) {
      let _ = _[_];
      (_[_.lane] = _.end), _++;
    }
    let _ = Array(_).fill(_ + _);
    for (; _ >= 0 && _.some((_) => _ >= _); ) {
      let _ = _[_];
      (_[_.lane] = _.start), _--;
    }
    (_ = Math.max(0, _ - (_ % _))), (_ = Math.min(_, _ + (_ - 1 - (_ % _))));
  }
  return {
    startIndex: _,
    endIndex: _,
  };
}
var _ = typeof document < `u` ? _.useLayoutEffect : _.useEffect;
function _(_) {
  let _ = _.useReducer(() => ({}), {})[1],
    _ = {
      ..._,
      onChange: (_, _) => {
        var _;
        _ ? (0, _.flushSync)(_) : _(),
          (_ = _.onChange) == null || _.call(_, _, _);
      },
    },
    [_] = _.useState(() => new _(_));
  return (
    _.setOptions(_), _(() => _._didMount(), []), _(() => _._willUpdate()), _
  );
}
function _(_) {
  return _({
    observeElementRect: _,
    observeElementOffset: _,
    scrollToFn: _,
    ..._,
  });
}
function _(_) {
  return _({
    getScrollElement: () => (typeof document < `u` ? window : null),
    observeElementRect: _,
    observeElementOffset: _,
    scrollToFn: _,
    initialOffset: () => (typeof document < `u` ? window.scrollY : 0),
    ..._,
  });
}
function _() {
  return {
    accessor: (_, _) =>
      typeof _ == `function`
        ? {
            ..._,
            accessorFn: _,
          }
        : {
            ..._,
            accessorKey: _,
          },
    display: (_) => _,
    group: (_) => _,
  };
}
function _(_, _) {
  return typeof _ == `function` ? _(_) : _;
}
function _(_, _) {
  return (_) => {
    _.setState((_) => ({
      ..._,
      [_]: _(_, _[_]),
    }));
  };
}
function _(_) {
  return _ instanceof Function;
}
function _(_) {
  return Array.isArray(_) && _.every((_) => typeof _ == `number`);
}
function _(_, _) {
  let _ = [],
    _ = (_) => {
      _.forEach((_) => {
        _.push(_);
        let _ = _(_);
        _ != null && _.length && _(_);
      });
    };
  return _(_), _;
}
function _(_, _, _) {
  let _ = [],
    _;
  return (_) => {
    let _;
    _.key && _.debug && (_ = Date.now());
    let _ = _(_);
    if (!(_.length !== _.length || _.some((_, _) => _[_] !== _))) return _;
    _ = _;
    let _;
    if (
      (_.key && _.debug && (_ = Date.now()),
      (_ = _(..._)),
      _ == null || _.onChange == null || _.onChange(_),
      _.key && _.debug && _ != null && _.debug())
    ) {
      let _ = Math.round((Date.now() - _) * 100) / 100,
        _ = Math.round((Date.now() - _) * 100) / 100,
        _ = _ / 16,
        _ = (_, _) => {
          for (_ = String(_); _.length < _; ) _ = ` ` + _;
          return _;
        };
      console.info(
        `%c⏱ ${_(_, 5)} /${_(_, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * _, 120))}deg 100% 31%);`,
        _?.key,
      );
    }
    return _;
  };
}
function _(_, _, _, _) {
  return {
    debug: () => _?.debugAll ?? _[_],
    key: !1,
    onChange: _,
  };
}
function _(_, _, _, _) {
  let _ = {
    _: `${_._}_${_._}`,
    row: _,
    column: _,
    getValue: () => _.getValue(_),
    renderValue: () => _.getValue() ?? _.options.renderFallbackValue,
    getContext: _(
      () => [_, _, _, _],
      (_, _, _, _) => ({
        table: _,
        column: _,
        row: _,
        cell: _,
        getValue: _.getValue,
        renderValue: _.renderValue,
      }),
      _(_.options, `debugCells`, `cell.getContext`),
    ),
  };
  return (
    _._features.forEach((_) => {
      _.createCell == null || _.createCell(_, _, _, _);
    }, {}),
    _
  );
}
function _(_, _, _, _) {
  let _ = {
      ..._._getDefaultColumnDef(),
      ..._,
    },
    _ = _.accessorKey,
    _ =
      _._ ??
      (_
        ? typeof String.prototype.replaceAll == `function`
          ? _.replaceAll(`.`, `_`)
          : _.replace(/\./g, `_`)
        : void 0) ??
      (typeof _.header == `string` ? _.header : void 0),
    _;
  if (
    (_.accessorFn
      ? (_ = _.accessorFn)
      : _ &&
        (_ = _.includes(`.`)
          ? (_) => {
              let _ = _;
              for (let _ of _.split(`.`)) _ = _?.[_];
              return _;
            }
          : (_) => _[_.accessorKey]),
    !_)
  )
    throw Error();
  let _ = {
    _: `${String(_)}`,
    accessorFn: _,
    parent: _,
    depth: _,
    columnDef: _,
    columns: [],
    getFlatColumns: _(
      () => [!0],
      () => [_, ..._.columns?.flatMap((_) => _.getFlatColumns())],
      _(_.options, `debugColumns`, `column.getFlatColumns`),
    ),
    getLeafColumns: _(
      () => [_._getOrderColumnsFn()],
      (_) => {
        var _;
        return (_ = _.columns) != null && _.length
          ? _(_.columns.flatMap((_) => _.getLeafColumns()))
          : [_];
      },
      _(_.options, `debugColumns`, `column.getLeafColumns`),
    ),
  };
  for (let _ of _._features) _.createColumn == null || _.createColumn(_, _);
  return _;
}
var _ = `debugHeaders`;
function _(_, _, _) {
  let _ = {
    _: _._ ?? _._,
    column: _,
    index: _.index,
    isPlaceholder: !!_.isPlaceholder,
    placeholderId: _.placeholderId,
    depth: _.depth,
    subHeaders: [],
    colSpan: 0,
    rowSpan: 0,
    headerGroup: null,
    getLeafHeaders: () => {
      let _ = [],
        _ = (_) => {
          _.subHeaders && _.subHeaders.length && _.subHeaders.map(_), _.push(_);
        };
      return _(_), _;
    },
    getContext: () => ({
      table: _,
      header: _,
      column: _,
    }),
  };
  return (
    _._features.forEach((_) => {
      _.createHeader == null || _.createHeader(_, _);
    }),
    _
  );
}
var _ = {
  createTable: (_) => {
    (_.getHeaderGroups = _(
      () => [
        _.getAllColumns(),
        _.getVisibleLeafColumns(),
        _.getState().columnPinning.left,
        _.getState().columnPinning.right,
      ],
      (_, _, _, _) => {
        let _ = _?.map((_) => _.find((_) => _._ === _)).filter(Boolean) ?? [],
          _ = _?.map((_) => _.find((_) => _._ === _)).filter(Boolean) ?? [],
          _ = _.filter(
            (_) =>
              !(_ != null && _.includes(_._)) &&
              !(_ != null && _.includes(_._)),
          );
        return _(_, [..._, ..._, ..._], _);
      },
      _(_.options, _, `getHeaderGroups`),
    )),
      (_.getCenterHeaderGroups = _(
        () => [
          _.getAllColumns(),
          _.getVisibleLeafColumns(),
          _.getState().columnPinning.left,
          _.getState().columnPinning.right,
        ],
        (_, _, _, _) => (
          (_ = _.filter(
            (_) =>
              !(_ != null && _.includes(_._)) &&
              !(_ != null && _.includes(_._)),
          )),
          _(_, _, _, `center`)
        ),
        _(_.options, _, `getCenterHeaderGroups`),
      )),
      (_.getLeftHeaderGroups = _(
        () => [
          _.getAllColumns(),
          _.getVisibleLeafColumns(),
          _.getState().columnPinning.left,
        ],
        (_, _, _) =>
          _(
            _,
            _?.map((_) => _.find((_) => _._ === _)).filter(Boolean) ?? [],
            _,
            `left`,
          ),
        _(_.options, _, `getLeftHeaderGroups`),
      )),
      (_.getRightHeaderGroups = _(
        () => [
          _.getAllColumns(),
          _.getVisibleLeafColumns(),
          _.getState().columnPinning.right,
        ],
        (_, _, _) =>
          _(
            _,
            _?.map((_) => _.find((_) => _._ === _)).filter(Boolean) ?? [],
            _,
            `right`,
          ),
        _(_.options, _, `getRightHeaderGroups`),
      )),
      (_.getFooterGroups = _(
        () => [_.getHeaderGroups()],
        (_) => [..._].reverse(),
        _(_.options, _, `getFooterGroups`),
      )),
      (_.getLeftFooterGroups = _(
        () => [_.getLeftHeaderGroups()],
        (_) => [..._].reverse(),
        _(_.options, _, `getLeftFooterGroups`),
      )),
      (_.getCenterFooterGroups = _(
        () => [_.getCenterHeaderGroups()],
        (_) => [..._].reverse(),
        _(_.options, _, `getCenterFooterGroups`),
      )),
      (_.getRightFooterGroups = _(
        () => [_.getRightHeaderGroups()],
        (_) => [..._].reverse(),
        _(_.options, _, `getRightFooterGroups`),
      )),
      (_.getFlatHeaders = _(
        () => [_.getHeaderGroups()],
        (_) => _.map((_) => _.headers).flat(),
        _(_.options, _, `getFlatHeaders`),
      )),
      (_.getLeftFlatHeaders = _(
        () => [_.getLeftHeaderGroups()],
        (_) => _.map((_) => _.headers).flat(),
        _(_.options, _, `getLeftFlatHeaders`),
      )),
      (_.getCenterFlatHeaders = _(
        () => [_.getCenterHeaderGroups()],
        (_) => _.map((_) => _.headers).flat(),
        _(_.options, _, `getCenterFlatHeaders`),
      )),
      (_.getRightFlatHeaders = _(
        () => [_.getRightHeaderGroups()],
        (_) => _.map((_) => _.headers).flat(),
        _(_.options, _, `getRightFlatHeaders`),
      )),
      (_.getCenterLeafHeaders = _(
        () => [_.getCenterFlatHeaders()],
        (_) =>
          _.filter((_) => {
            var _;
            return !((_ = _.subHeaders) != null && _.length);
          }),
        _(_.options, _, `getCenterLeafHeaders`),
      )),
      (_.getLeftLeafHeaders = _(
        () => [_.getLeftFlatHeaders()],
        (_) =>
          _.filter((_) => {
            var _;
            return !((_ = _.subHeaders) != null && _.length);
          }),
        _(_.options, _, `getLeftLeafHeaders`),
      )),
      (_.getRightLeafHeaders = _(
        () => [_.getRightFlatHeaders()],
        (_) =>
          _.filter((_) => {
            var _;
            return !((_ = _.subHeaders) != null && _.length);
          }),
        _(_.options, _, `getRightLeafHeaders`),
      )),
      (_.getLeafHeaders = _(
        () => [
          _.getLeftHeaderGroups(),
          _.getCenterHeaderGroups(),
          _.getRightHeaderGroups(),
        ],
        (_, _, _) =>
          [
            ...(_[0]?.headers ?? []),
            ...(_[0]?.headers ?? []),
            ...(_[0]?.headers ?? []),
          ]
            .map((_) => _.getLeafHeaders())
            .flat(),
        _(_.options, _, `getLeafHeaders`),
      ));
  },
};
function _(_, _, _, _) {
  let _ = 0,
    _ = function (_, _) {
      _ === void 0 && (_ = 1),
        (_ = Math.max(_, _)),
        _.filter((_) => _.getIsVisible()).forEach((_) => {
          var _;
          (_ = _.columns) != null && _.length && _(_.columns, _ + 1);
        }, 0);
    };
  _(_);
  let _ = [],
    _ = (_, _) => {
      let _ = {
          depth: _,
          _: [_, `${_}`].filter(Boolean).join(`_`),
          headers: [],
        },
        _ = [];
      _.forEach((_) => {
        let _ = [..._].reverse()[0],
          _ = _.column.depth === _.depth,
          _,
          _ = !1;
        if (
          (_ && _.column.parent
            ? (_ = _.column.parent)
            : ((_ = _.column), (_ = !0)),
          _ && _?.column === _)
        )
          _.subHeaders.push(_);
        else {
          let _ = _(_, _, {
            _: [_, _, _._, _?._].filter(Boolean).join(`_`),
            isPlaceholder: _,
            placeholderId: _
              ? `${_.filter((_) => _.column === _).length}`
              : void 0,
            depth: _,
            index: _.length,
          });
          _.subHeaders.push(_), _.push(_);
        }
        _.headers.push(_), (_.headerGroup = _);
      }),
        _.push(_),
        _ > 0 && _(_, _ - 1);
    };
  _(
    _.map((_, _) =>
      _(_, _, {
        depth: _,
        index: _,
      }),
    ),
    _ - 1,
  ),
    _.reverse();
  let _ = (_) =>
    _.filter((_) => _.column.getIsVisible()).map((_) => {
      let _ = 0,
        _ = 0,
        _ = [0];
      _.subHeaders && _.subHeaders.length
        ? ((_ = []),
          _(_.subHeaders).forEach((_) => {
            let { colSpan: _, rowSpan: _ } = _;
            (_ += _), _.push(_);
          }))
        : (_ = 1);
      let _ = Math.min(..._);
      return (
        (_ += _),
        (_.colSpan = _),
        (_.rowSpan = _),
        {
          colSpan: _,
          rowSpan: _,
        }
      );
    });
  return _(_[0]?.headers ?? []), _;
}
var _ = (_, _, _, _, _, _, _) => {
    let _ = {
      _: _,
      index: _,
      original: _,
      depth: _,
      parentId: _,
      _valuesCache: {},
      _uniqueValuesCache: {},
      getValue: (_) => {
        if (_._valuesCache.hasOwnProperty(_)) return _._valuesCache[_];
        let _ = _.getColumn(_);
        if (_ != null && _.accessorFn)
          return (
            (_._valuesCache[_] = _.accessorFn(_.original, _)), _._valuesCache[_]
          );
      },
      getUniqueValues: (_) => {
        if (_._uniqueValuesCache.hasOwnProperty(_))
          return _._uniqueValuesCache[_];
        let _ = _.getColumn(_);
        if (_ != null && _.accessorFn)
          return _.columnDef.getUniqueValues
            ? ((_._uniqueValuesCache[_] = _.columnDef.getUniqueValues(
                _.original,
                _,
              )),
              _._uniqueValuesCache[_])
            : ((_._uniqueValuesCache[_] = [_.getValue(_)]),
              _._uniqueValuesCache[_]);
      },
      renderValue: (_) => _.getValue(_) ?? _.options.renderFallbackValue,
      subRows: _ ?? [],
      getLeafRows: () => _(_.subRows, (_) => _.subRows),
      getParentRow: () => (_.parentId ? _.getRow(_.parentId, !0) : void 0),
      getParentRows: () => {
        let _ = [],
          _ = _;
        for (;;) {
          let _ = _.getParentRow();
          if (!_) break;
          _.push(_), (_ = _);
        }
        return _.reverse();
      },
      getAllCells: _(
        () => [_.getAllLeafColumns()],
        (_) => _.map((_) => _(_, _, _, _._)),
        _(_.options, `debugRows`, `getAllCells`),
      ),
      _getAllCellsByColumnId: _(
        () => [_.getAllCells()],
        (_) => _.reduce((_, _) => ((_[_.column._] = _), _), {}),
        _(_.options, `debugRows`, `getAllCellsByColumnId`),
      ),
    };
    for (let _ = 0; _ < _._features.length; _++) {
      let _ = _._features[_];
      _ == null || _.createRow == null || _.createRow(_, _);
    }
    return _;
  },
  _ = {
    createColumn: (_, _) => {
      (_._getFacetedRowModel =
        _.options.getFacetedRowModel && _.options.getFacetedRowModel(_, _._)),
        (_.getFacetedRowModel = () =>
          _._getFacetedRowModel
            ? _._getFacetedRowModel()
            : _.getPreFilteredRowModel()),
        (_._getFacetedUniqueValues =
          _.options.getFacetedUniqueValues &&
          _.options.getFacetedUniqueValues(_, _._)),
        (_.getFacetedUniqueValues = () =>
          _._getFacetedUniqueValues ? _._getFacetedUniqueValues() : new Map()),
        (_._getFacetedMinMaxValues =
          _.options.getFacetedMinMaxValues &&
          _.options.getFacetedMinMaxValues(_, _._)),
        (_.getFacetedMinMaxValues = () => {
          if (_._getFacetedMinMaxValues) return _._getFacetedMinMaxValues();
        });
    },
  },
  _ = (_, _, _) => {
    var _, _;
    let _ = _ == null || (_ = _.toString()) == null ? void 0 : _.toLowerCase();
    return !!(
      !(
        (_ = _.getValue(_)) == null ||
        (_ = _.toString()) == null ||
        (_ = _.toLowerCase()) == null
      ) && _.includes(_)
    );
  };
_.autoRemove = (_) => _(_);
var _ = (_, _, _) => {
  var _;
  return !!(
    !((_ = _.getValue(_)) == null || (_ = _.toString()) == null) &&
    _.includes(_)
  );
};
_.autoRemove = (_) => _(_);
var _ = (_, _, _) => {
  var _;
  return (
    ((_ = _.getValue(_)) == null || (_ = _.toString()) == null
      ? void 0
      : _.toLowerCase()) === _?.toLowerCase()
  );
};
_.autoRemove = (_) => _(_);
var _ = (_, _, _) => _.getValue(_)?.includes(_);
_.autoRemove = (_) => _(_) || !(_ != null && _.length);
var _ = (_, _, _) =>
  !_.some((_) => {
    var _;
    return !((_ = _.getValue(_)) != null && _.includes(_));
  });
_.autoRemove = (_) => _(_) || !(_ != null && _.length);
var _ = (_, _, _) => _.some((_) => _.getValue(_)?.includes(_));
_.autoRemove = (_) => _(_) || !(_ != null && _.length);
var _ = (_, _, _) => _.getValue(_) === _;
_.autoRemove = (_) => _(_);
var _ = (_, _, _) => _.getValue(_) == _;
_.autoRemove = (_) => _(_);
var _ = (_, _, _) => {
  let [_, _] = _,
    _ = _.getValue(_);
  return _ >= _ && _ <= _;
};
(_.resolveFilterValue = (_) => {
  let [_, _] = _,
    _ = typeof _ == `number` ? _ : parseFloat(_),
    _ = typeof _ == `number` ? _ : parseFloat(_),
    _ = _ === null || Number.isNaN(_) ? -1 / 0 : _,
    _ = _ === null || Number.isNaN(_) ? 1 / 0 : _;
  if (_ > _) {
    let _ = _;
    (_ = _), (_ = _);
  }
  return [_, _];
}),
  (_.autoRemove = (_) => _(_) || (_(_[0]) && _(_[1])));
var _ = {
  includesString: _,
  includesStringSensitive: _,
  equalsString: _,
  arrIncludes: _,
  arrIncludesAll: _,
  arrIncludesSome: _,
  equals: _,
  weakEquals: _,
  inNumberRange: _,
};
function _(_) {
  return _ == null || _ === ``;
}
var _ = {
  getDefaultColumnDef: () => ({
    filterFn: `auto`,
  }),
  getInitialState: (_) => ({
    columnFilters: [],
    ..._,
  }),
  getDefaultOptions: (_) => ({
    onColumnFiltersChange: _(`columnFilters`, _),
    filterFromLeafRows: !1,
    maxLeafRowFilterDepth: 100,
  }),
  createColumn: (_, _) => {
    (_.getAutoFilterFn = () => {
      let _ = _.getCoreRowModel().flatRows[0]?.getValue(_._);
      return typeof _ == `string`
        ? _.includesString
        : typeof _ == `number`
          ? _.inNumberRange
          : typeof _ == `boolean` || (typeof _ == `object` && _)
            ? _.equals
            : Array.isArray(_)
              ? _.arrIncludes
              : _.weakEquals;
    }),
      (_.getFilterFn = () =>
        _(_.columnDef.filterFn)
          ? _.columnDef.filterFn
          : _.columnDef.filterFn === `auto`
            ? _.getAutoFilterFn()
            : (_.options.filterFns?.[_.columnDef.filterFn] ??
              _[_.columnDef.filterFn])),
      (_.getCanFilter = () =>
        (_.columnDef.enableColumnFilter ?? !0) &&
        (_.options.enableColumnFilters ?? !0) &&
        (_.options.enableFilters ?? !0) &&
        !!_.accessorFn),
      (_.getIsFiltered = () => _.getFilterIndex() > -1),
      (_.getFilterValue = () => {
        var _;
        return (_ = _.getState().columnFilters) == null ||
          (_ = _.find((_) => _._ === _._)) == null
          ? void 0
          : _.value;
      }),
      (_.getFilterIndex = () =>
        _.getState().columnFilters?.findIndex((_) => _._ === _._) ?? -1),
      (_.setFilterValue = (_) => {
        _.setColumnFilters((_) => {
          let _ = _.getFilterFn(),
            _ = _?.find((_) => _._ === _._),
            _ = _(_, _ ? _.value : void 0);
          if (_(_, _, _)) return _?.filter((_) => _._ !== _._) ?? [];
          let _ = {
            _: _._,
            value: _,
          };
          return _
            ? (_?.map((_) => (_._ === _._ ? _ : _)) ?? [])
            : _ != null && _.length
              ? [..._, _]
              : [_];
        });
      });
  },
  createRow: (_, _) => {
    (_.columnFilters = {}), (_.columnFiltersMeta = {});
  },
  createTable: (_) => {
    (_.setColumnFilters = (_) => {
      let _ = _.getAllLeafColumns();
      _.options.onColumnFiltersChange == null ||
        _.options.onColumnFiltersChange((_) =>
          _(_, _)?.filter((_) => {
            let _ = _.find((_) => _._ === _._);
            return !(_ && _(_.getFilterFn(), _.value, _));
          }),
        );
    }),
      (_.resetColumnFilters = (_) => {
        _.setColumnFilters(_ ? [] : (_.initialState?.columnFilters ?? []));
      }),
      (_.getPreFilteredRowModel = () => _.getCoreRowModel()),
      (_.getFilteredRowModel = () => (
        !_._getFilteredRowModel &&
          _.options.getFilteredRowModel &&
          (_._getFilteredRowModel = _.options.getFilteredRowModel(_)),
        _.options.manualFiltering || !_._getFilteredRowModel
          ? _.getPreFilteredRowModel()
          : _._getFilteredRowModel()
      ));
  },
};
function _(_, _, _) {
  return (
    (_ && _.autoRemove ? _.autoRemove(_, _) : !1) ||
    _ === void 0 ||
    (typeof _ == `string` && !_)
  );
}
var _ = {
    sum: (_, _, _) =>
      _.reduce((_, _) => {
        let _ = _.getValue(_);
        return _ + (typeof _ == `number` ? _ : 0);
      }, 0),
    min: (_, _, _) => {
      let _;
      return (
        _.forEach((_) => {
          let _ = _.getValue(_);
          _ != null && (_ > _ || (_ === void 0 && _ >= _)) && (_ = _);
        }),
        _
      );
    },
    max: (_, _, _) => {
      let _;
      return (
        _.forEach((_) => {
          let _ = _.getValue(_);
          _ != null && (_ < _ || (_ === void 0 && _ >= _)) && (_ = _);
        }),
        _
      );
    },
    extent: (_, _, _) => {
      let _, _;
      return (
        _.forEach((_) => {
          let _ = _.getValue(_);
          _ != null &&
            (_ === void 0
              ? _ >= _ && (_ = _ = _)
              : (_ > _ && (_ = _), _ < _ && (_ = _)));
        }),
        [_, _]
      );
    },
    mean: (_, _) => {
      let _ = 0,
        _ = 0;
      if (
        (_.forEach((_) => {
          let _ = _.getValue(_);
          _ != null && (_ = +_) >= _ && (++_, (_ += _));
        }),
        _)
      )
        return _ / _;
    },
    median: (_, _) => {
      if (!_.length) return;
      let _ = _.map((_) => _.getValue(_));
      if (!_(_)) return;
      if (_.length === 1) return _[0];
      let _ = Math.floor(_.length / 2),
        _ = _.sort((_, _) => _ - _);
      return _.length % 2 == 0 ? (_[_ - 1] + _[_]) / 2 : _[_];
    },
    unique: (_, _) => Array.from(new Set(_.map((_) => _.getValue(_))).values()),
    uniqueCount: (_, _) => new Set(_.map((_) => _.getValue(_))).size,
    count: (_, _) => _.length,
  },
  _ = {
    getDefaultColumnDef: () => ({
      aggregatedCell: (_) => {
        var _;
        return (
          ((_ = _.getValue()) == null || _.toString == null
            ? void 0
            : _.toString()) ?? null
        );
      },
      aggregationFn: `auto`,
    }),
    getInitialState: (_) => ({
      grouping: [],
      ..._,
    }),
    getDefaultOptions: (_) => ({
      onGroupingChange: _(`grouping`, _),
      groupedColumnMode: `reorder`,
    }),
    createColumn: (_, _) => {
      (_.toggleGrouping = () => {
        _.setGrouping((_) =>
          _ != null && _.includes(_._)
            ? _.filter((_) => _ !== _._)
            : [...(_ ?? []), _._],
        );
      }),
        (_.getCanGroup = () =>
          (_.columnDef.enableGrouping ?? !0) &&
          (_.options.enableGrouping ?? !0) &&
          (!!_.accessorFn || !!_.columnDef.getGroupingValue)),
        (_.getIsGrouped = () => _.getState().grouping?.includes(_._)),
        (_.getGroupedIndex = () => _.getState().grouping?.indexOf(_._)),
        (_.getToggleGroupingHandler = () => {
          let _ = _.getCanGroup();
          return () => {
            _ && _.toggleGrouping();
          };
        }),
        (_.getAutoAggregationFn = () => {
          let _ = _.getCoreRowModel().flatRows[0]?.getValue(_._);
          if (typeof _ == `number`) return _.sum;
          if (Object.prototype.toString.call(_) === `[object Date]`)
            return _.extent;
        }),
        (_.getAggregationFn = () => {
          if (!_) throw Error();
          return _(_.columnDef.aggregationFn)
            ? _.columnDef.aggregationFn
            : _.columnDef.aggregationFn === `auto`
              ? _.getAutoAggregationFn()
              : (_.options.aggregationFns?.[_.columnDef.aggregationFn] ??
                _[_.columnDef.aggregationFn]);
        });
    },
    createTable: (_) => {
      (_.setGrouping = (_) =>
        _.options.onGroupingChange == null
          ? void 0
          : _.options.onGroupingChange(_)),
        (_.resetGrouping = (_) => {
          _.setGrouping(_ ? [] : (_.initialState?.grouping ?? []));
        }),
        (_.getPreGroupedRowModel = () => _.getFilteredRowModel()),
        (_.getGroupedRowModel = () => (
          !_._getGroupedRowModel &&
            _.options.getGroupedRowModel &&
            (_._getGroupedRowModel = _.options.getGroupedRowModel(_)),
          _.options.manualGrouping || !_._getGroupedRowModel
            ? _.getPreGroupedRowModel()
            : _._getGroupedRowModel()
        ));
    },
    createRow: (_, _) => {
      (_.getIsGrouped = () => !!_.groupingColumnId),
        (_.getGroupingValue = (_) => {
          if (_._groupingValuesCache.hasOwnProperty(_))
            return _._groupingValuesCache[_];
          let _ = _.getColumn(_);
          return _ != null && _.columnDef.getGroupingValue
            ? ((_._groupingValuesCache[_] = _.columnDef.getGroupingValue(
                _.original,
              )),
              _._groupingValuesCache[_])
            : _.getValue(_);
        }),
        (_._groupingValuesCache = {});
    },
    createCell: (_, _, _, _) => {
      (_.getIsGrouped = () => _.getIsGrouped() && _._ === _.groupingColumnId),
        (_.getIsPlaceholder = () => !_.getIsGrouped() && _.getIsGrouped()),
        (_.getIsAggregated = () => {
          var _;
          return (
            !_.getIsGrouped() &&
            !_.getIsPlaceholder() &&
            !!((_ = _.subRows) != null && _.length)
          );
        });
    },
  };
function _(_, _, _) {
  if (!(_ != null && _.length) || !_) return _;
  let _ = _.filter((_) => !_.includes(_._));
  return _ === `remove`
    ? _
    : [..._.map((_) => _.find((_) => _._ === _)).filter(Boolean), ..._];
}
var _ = {
    getInitialState: (_) => ({
      columnOrder: [],
      ..._,
    }),
    getDefaultOptions: (_) => ({
      onColumnOrderChange: _(`columnOrder`, _),
    }),
    createColumn: (_, _) => {
      (_.getIndex = _(
        (_) => [_(_, _)],
        (_) => _.findIndex((_) => _._ === _._),
        _(_.options, `debugColumns`, `getIndex`),
      )),
        (_.getIsFirstColumn = (_) => _(_, _)[0]?._ === _._),
        (_.getIsLastColumn = (_) => {
          let _ = _(_, _);
          return _[_.length - 1]?._ === _._;
        });
    },
    createTable: (_) => {
      (_.setColumnOrder = (_) =>
        _.options.onColumnOrderChange == null
          ? void 0
          : _.options.onColumnOrderChange(_)),
        (_.resetColumnOrder = (_) => {
          _.setColumnOrder(_ ? [] : (_.initialState.columnOrder ?? []));
        }),
        (_._getOrderColumnsFn = _(
          () => [
            _.getState().columnOrder,
            _.getState().grouping,
            _.options.groupedColumnMode,
          ],
          (_, _, _) => (_) => {
            let _ = [];
            if (!(_ != null && _.length)) _ = _;
            else {
              let _ = [..._],
                _ = [..._];
              for (; _.length && _.length; ) {
                let _ = _.shift(),
                  _ = _.findIndex((_) => _._ === _);
                _ > -1 && _.push(_.splice(_, 1)[0]);
              }
              _ = [..._, ..._];
            }
            return _(_, _, _);
          },
          _(_.options, `debugTable`, `_getOrderColumnsFn`),
        ));
    },
  },
  _ = () => ({
    left: [],
    right: [],
  }),
  _ = {
    getInitialState: (_) => ({
      columnPinning: _(),
      ..._,
    }),
    getDefaultOptions: (_) => ({
      onColumnPinningChange: _(`columnPinning`, _),
    }),
    createColumn: (_, _) => {
      (_.pin = (_) => {
        let _ = _.getLeafColumns()
          .map((_) => _._)
          .filter(Boolean);
        _.setColumnPinning((_) =>
          _ === `right`
            ? {
                left: (_?.left ?? []).filter(
                  (_) => !(_ != null && _.includes(_)),
                ),
                right: [
                  ...(_?.right ?? []).filter(
                    (_) => !(_ != null && _.includes(_)),
                  ),
                  ..._,
                ],
              }
            : _ === `left`
              ? {
                  left: [
                    ...(_?.left ?? []).filter(
                      (_) => !(_ != null && _.includes(_)),
                    ),
                    ..._,
                  ],
                  right: (_?.right ?? []).filter(
                    (_) => !(_ != null && _.includes(_)),
                  ),
                }
              : {
                  left: (_?.left ?? []).filter(
                    (_) => !(_ != null && _.includes(_)),
                  ),
                  right: (_?.right ?? []).filter(
                    (_) => !(_ != null && _.includes(_)),
                  ),
                },
        );
      }),
        (_.getCanPin = () =>
          _.getLeafColumns().some(
            (_) =>
              (_.columnDef.enablePinning ?? !0) &&
              (_.options.enableColumnPinning ?? _.options.enablePinning ?? !0),
          )),
        (_.getIsPinned = () => {
          let _ = _.getLeafColumns().map((_) => _._),
            { left: _, right: _ } = _.getState().columnPinning,
            _ = _.some((_) => _?.includes(_)),
            _ = _.some((_) => _?.includes(_));
          return _ ? `left` : _ ? `right` : !1;
        }),
        (_.getPinnedIndex = () => {
          var _;
          let _ = _.getIsPinned();
          return _
            ? (((_ = _.getState().columnPinning) == null || (_ = _[_]) == null
                ? void 0
                : _.indexOf(_._)) ?? -1)
            : 0;
        });
    },
    createRow: (_, _) => {
      (_.getCenterVisibleCells = _(
        () => [
          _._getAllVisibleCells(),
          _.getState().columnPinning.left,
          _.getState().columnPinning.right,
        ],
        (_, _, _) => {
          let _ = [...(_ ?? []), ...(_ ?? [])];
          return _.filter((_) => !_.includes(_.column._));
        },
        _(_.options, `debugRows`, `getCenterVisibleCells`),
      )),
        (_.getLeftVisibleCells = _(
          () => [_._getAllVisibleCells(), _.getState().columnPinning.left],
          (_, _) =>
            (_ ?? [])
              .map((_) => _.find((_) => _.column._ === _))
              .filter(Boolean)
              .map((_) => ({
                ..._,
                position: `left`,
              })),
          _(_.options, `debugRows`, `getLeftVisibleCells`),
        )),
        (_.getRightVisibleCells = _(
          () => [_._getAllVisibleCells(), _.getState().columnPinning.right],
          (_, _) =>
            (_ ?? [])
              .map((_) => _.find((_) => _.column._ === _))
              .filter(Boolean)
              .map((_) => ({
                ..._,
                position: `right`,
              })),
          _(_.options, `debugRows`, `getRightVisibleCells`),
        ));
    },
    createTable: (_) => {
      (_.setColumnPinning = (_) =>
        _.options.onColumnPinningChange == null
          ? void 0
          : _.options.onColumnPinningChange(_)),
        (_.resetColumnPinning = (_) =>
          _.setColumnPinning(_ ? _() : (_.initialState?.columnPinning ?? _()))),
        (_.getIsSomeColumnsPinned = (_) => {
          let _ = _.getState().columnPinning;
          return _ ? !!_[_]?.length : !!(_.left?.length || _.right?.length);
        }),
        (_.getLeftLeafColumns = _(
          () => [_.getAllLeafColumns(), _.getState().columnPinning.left],
          (_, _) =>
            (_ ?? []).map((_) => _.find((_) => _._ === _)).filter(Boolean),
          _(_.options, `debugColumns`, `getLeftLeafColumns`),
        )),
        (_.getRightLeafColumns = _(
          () => [_.getAllLeafColumns(), _.getState().columnPinning.right],
          (_, _) =>
            (_ ?? []).map((_) => _.find((_) => _._ === _)).filter(Boolean),
          _(_.options, `debugColumns`, `getRightLeafColumns`),
        )),
        (_.getCenterLeafColumns = _(
          () => [
            _.getAllLeafColumns(),
            _.getState().columnPinning.left,
            _.getState().columnPinning.right,
          ],
          (_, _, _) => {
            let _ = [...(_ ?? []), ...(_ ?? [])];
            return _.filter((_) => !_.includes(_._));
          },
          _(_.options, `debugColumns`, `getCenterLeafColumns`),
        ));
    },
  },
  _ = {
    size: 150,
    minSize: 20,
    maxSize: 2 ** 53 - 1,
  },
  _ = () => ({
    startOffset: null,
    startSize: null,
    deltaOffset: null,
    deltaPercentage: null,
    isResizingColumn: !1,
    columnSizingStart: [],
  }),
  _ = {
    getDefaultColumnDef: () => _,
    getInitialState: (_) => ({
      columnSizing: {},
      columnSizingInfo: _(),
      ..._,
    }),
    getDefaultOptions: (_) => ({
      columnResizeMode: `onEnd`,
      columnResizeDirection: `ltr`,
      onColumnSizingChange: _(`columnSizing`, _),
      onColumnSizingInfoChange: _(`columnSizingInfo`, _),
    }),
    createColumn: (_, _) => {
      (_.getSize = () => {
        let _ = _.getState().columnSizing[_._];
        return Math.min(
          Math.max(
            _.columnDef.minSize ?? _.minSize,
            _ ?? _.columnDef.size ?? _.size,
          ),
          _.columnDef.maxSize ?? _.maxSize,
        );
      }),
        (_.getStart = _(
          (_) => [_, _(_, _), _.getState().columnSizing],
          (_, _) =>
            _.slice(0, _.getIndex(_)).reduce((_, _) => _ + _.getSize(), 0),
          _(_.options, `debugColumns`, `getStart`),
        )),
        (_.getAfter = _(
          (_) => [_, _(_, _), _.getState().columnSizing],
          (_, _) =>
            _.slice(_.getIndex(_) + 1).reduce((_, _) => _ + _.getSize(), 0),
          _(_.options, `debugColumns`, `getAfter`),
        )),
        (_.resetSize = () => {
          _.setColumnSizing((_) => {
            let { [_._]: _, ..._ } = _;
            return _;
          });
        }),
        (_.getCanResize = () =>
          (_.columnDef.enableResizing ?? !0) &&
          (_.options.enableColumnResizing ?? !0)),
        (_.getIsResizing = () =>
          _.getState().columnSizingInfo.isResizingColumn === _._);
    },
    createHeader: (_, _) => {
      (_.getSize = () => {
        let _ = 0,
          _ = (_) => {
            _.subHeaders.length
              ? _.subHeaders.forEach(_)
              : (_ += _.column.getSize() ?? 0);
          };
        return _(_), _;
      }),
        (_.getStart = () => {
          if (_.index > 0) {
            let _ = _.headerGroup.headers[_.index - 1];
            return _.getStart() + _.getSize();
          }
          return 0;
        }),
        (_.getResizeHandler = (_) => {
          let _ = _.getColumn(_.column._),
            _ = _?.getCanResize();
          return (_) => {
            if (
              !_ ||
              !_ ||
              (_.persist == null || _.persist(),
              _(_) && _.touches && _.touches.length > 1)
            )
              return;
            let _ = _.getSize(),
              _ = _
                ? _.getLeafHeaders().map((_) => [
                    _.column._,
                    _.column.getSize(),
                  ])
                : [[_._, _.getSize()]],
              _ = _(_) ? Math.round(_.touches[0].clientX) : _.clientX,
              _ = {},
              _ = (_, _) => {
                typeof _ == `number` &&
                  (_.setColumnSizingInfo((_) => {
                    let _ = _.options.columnResizeDirection === `rtl` ? -1 : 1,
                      _ = (_ - (_?.startOffset ?? 0)) * _,
                      _ = Math.max(_ / (_?.startSize ?? 0), -0.999999);
                    return (
                      _.columnSizingStart.forEach((_) => {
                        let [_, _] = _;
                        _[_] = Math.round(Math.max(_ + _ * _, 0) * 100) / 100;
                      }),
                      {
                        ..._,
                        deltaOffset: _,
                        deltaPercentage: _,
                      }
                    );
                  }),
                  (_.options.columnResizeMode === `onChange` || _ === `end`) &&
                    _.setColumnSizing((_) => ({
                      ..._,
                      ..._,
                    })));
              },
              _ = (_) => _(`move`, _),
              _ = (_) => {
                _(`end`, _),
                  _.setColumnSizingInfo((_) => ({
                    ..._,
                    isResizingColumn: !1,
                    startOffset: null,
                    startSize: null,
                    deltaOffset: null,
                    deltaPercentage: null,
                    columnSizingStart: [],
                  }));
              },
              _ = _ || typeof document < `u` ? document : null,
              _ = {
                moveHandler: (_) => _(_.clientX),
                upHandler: (_) => {
                  _?.removeEventListener(`mousemove`, _.moveHandler),
                    _?.removeEventListener(`mouseup`, _.upHandler),
                    _(_.clientX);
                },
              },
              _ = {
                moveHandler: (_) => (
                  _.cancelable && (_.preventDefault(), _.stopPropagation()),
                  _(_.touches[0].clientX),
                  !1
                ),
                upHandler: (_) => {
                  _?.removeEventListener(`touchmove`, _.moveHandler),
                    _?.removeEventListener(`touchend`, _.upHandler),
                    _.cancelable && (_.preventDefault(), _.stopPropagation()),
                    _(_.touches[0]?.clientX);
                },
              },
              _ = _()
                ? {
                    passive: !1,
                  }
                : !1;
            _(_)
              ? (_?.addEventListener(`touchmove`, _.moveHandler, _),
                _?.addEventListener(`touchend`, _.upHandler, _))
              : (_?.addEventListener(`mousemove`, _.moveHandler, _),
                _?.addEventListener(`mouseup`, _.upHandler, _)),
              _.setColumnSizingInfo((_) => ({
                ..._,
                startOffset: _,
                startSize: _,
                deltaOffset: 0,
                deltaPercentage: 0,
                columnSizingStart: _,
                isResizingColumn: _._,
              }));
          };
        });
    },
    createTable: (_) => {
      (_.setColumnSizing = (_) =>
        _.options.onColumnSizingChange == null
          ? void 0
          : _.options.onColumnSizingChange(_)),
        (_.setColumnSizingInfo = (_) =>
          _.options.onColumnSizingInfoChange == null
            ? void 0
            : _.options.onColumnSizingInfoChange(_)),
        (_.resetColumnSizing = (_) => {
          _.setColumnSizing(_ ? {} : (_.initialState.columnSizing ?? {}));
        }),
        (_.resetHeaderSizeInfo = (_) => {
          _.setColumnSizingInfo(
            _ ? _() : (_.initialState.columnSizingInfo ?? _()),
          );
        }),
        (_.getTotalSize = () =>
          _.getHeaderGroups()[0]?.headers.reduce(
            (_, _) => _ + _.getSize(),
            0,
          ) ?? 0),
        (_.getLeftTotalSize = () =>
          _.getLeftHeaderGroups()[0]?.headers.reduce(
            (_, _) => _ + _.getSize(),
            0,
          ) ?? 0),
        (_.getCenterTotalSize = () =>
          _.getCenterHeaderGroups()[0]?.headers.reduce(
            (_, _) => _ + _.getSize(),
            0,
          ) ?? 0),
        (_.getRightTotalSize = () =>
          _.getRightHeaderGroups()[0]?.headers.reduce(
            (_, _) => _ + _.getSize(),
            0,
          ) ?? 0);
    },
  },
  _ = null;
function _() {
  if (typeof _ == `boolean`) return _;
  let _ = !1;
  try {
    let _ = {
        get passive() {
          return (_ = !0), !1;
        },
      },
      _ = () => {};
    window.addEventListener(`test`, _, _),
      window.removeEventListener(`test`, _);
  } catch {
    _ = !1;
  }
  return (_ = _), _;
}
function _(_) {
  return _.type === `touchstart`;
}
var _ = {
  getInitialState: (_) => ({
    columnVisibility: {},
    ..._,
  }),
  getDefaultOptions: (_) => ({
    onColumnVisibilityChange: _(`columnVisibility`, _),
  }),
  createColumn: (_, _) => {
    (_.toggleVisibility = (_) => {
      _.getCanHide() &&
        _.setColumnVisibility((_) => ({
          ..._,
          [_._]: _ ?? !_.getIsVisible(),
        }));
    }),
      (_.getIsVisible = () => {
        let _ = _.columns;
        return (
          (_.length
            ? _.some((_) => _.getIsVisible())
            : _.getState().columnVisibility?.[_._]) ?? !0
        );
      }),
      (_.getCanHide = () =>
        (_.columnDef.enableHiding ?? !0) && (_.options.enableHiding ?? !0)),
      (_.getToggleVisibilityHandler = () => (_) => {
        _.toggleVisibility == null || _.toggleVisibility(_.target.checked);
      });
  },
  createRow: (_, _) => {
    (_._getAllVisibleCells = _(
      () => [_.getAllCells(), _.getState().columnVisibility],
      (_) => _.filter((_) => _.column.getIsVisible()),
      _(_.options, `debugRows`, `_getAllVisibleCells`),
    )),
      (_.getVisibleCells = _(
        () => [
          _.getLeftVisibleCells(),
          _.getCenterVisibleCells(),
          _.getRightVisibleCells(),
        ],
        (_, _, _) => [..._, ..._, ..._],
        _(_.options, `debugRows`, `getVisibleCells`),
      ));
  },
  createTable: (_) => {
    let _ = (_, _) =>
      _(
        () => [
          _(),
          _()
            .filter((_) => _.getIsVisible())
            .map((_) => _._)
            .join(`_`),
        ],
        (_) =>
          _.filter((_) => (_.getIsVisible == null ? void 0 : _.getIsVisible())),
        _(_.options, `debugColumns`, _),
      );
    (_.getVisibleFlatColumns = _(`getVisibleFlatColumns`, () =>
      _.getAllFlatColumns(),
    )),
      (_.getVisibleLeafColumns = _(`getVisibleLeafColumns`, () =>
        _.getAllLeafColumns(),
      )),
      (_.getLeftVisibleLeafColumns = _(`getLeftVisibleLeafColumns`, () =>
        _.getLeftLeafColumns(),
      )),
      (_.getRightVisibleLeafColumns = _(`getRightVisibleLeafColumns`, () =>
        _.getRightLeafColumns(),
      )),
      (_.getCenterVisibleLeafColumns = _(`getCenterVisibleLeafColumns`, () =>
        _.getCenterLeafColumns(),
      )),
      (_.setColumnVisibility = (_) =>
        _.options.onColumnVisibilityChange == null
          ? void 0
          : _.options.onColumnVisibilityChange(_)),
      (_.resetColumnVisibility = (_) => {
        _.setColumnVisibility(_ ? {} : (_.initialState.columnVisibility ?? {}));
      }),
      (_.toggleAllColumnsVisible = (_) => {
        (_ ??= !_.getIsAllColumnsVisible()),
          _.setColumnVisibility(
            _.getAllLeafColumns().reduce(
              (_, _) => ({
                ..._,
                [_._]: _ || !(_.getCanHide != null && _.getCanHide()),
              }),
              {},
            ),
          );
      }),
      (_.getIsAllColumnsVisible = () =>
        !_.getAllLeafColumns().some(
          (_) => !(_.getIsVisible != null && _.getIsVisible()),
        )),
      (_.getIsSomeColumnsVisible = () =>
        _.getAllLeafColumns().some((_) =>
          _.getIsVisible == null ? void 0 : _.getIsVisible(),
        )),
      (_.getToggleAllColumnsVisibilityHandler = () => (_) => {
        _.toggleAllColumnsVisible(_.target?.checked);
      });
  },
};
function _(_, _) {
  return _
    ? _ === `center`
      ? _.getCenterVisibleLeafColumns()
      : _ === `left`
        ? _.getLeftVisibleLeafColumns()
        : _.getRightVisibleLeafColumns()
    : _.getVisibleLeafColumns();
}
var _ = {
    createTable: (_) => {
      (_._getGlobalFacetedRowModel =
        _.options.getFacetedRowModel &&
        _.options.getFacetedRowModel(_, `__global__`)),
        (_.getGlobalFacetedRowModel = () =>
          _.options.manualFiltering || !_._getGlobalFacetedRowModel
            ? _.getPreFilteredRowModel()
            : _._getGlobalFacetedRowModel()),
        (_._getGlobalFacetedUniqueValues =
          _.options.getFacetedUniqueValues &&
          _.options.getFacetedUniqueValues(_, `__global__`)),
        (_.getGlobalFacetedUniqueValues = () =>
          _._getGlobalFacetedUniqueValues
            ? _._getGlobalFacetedUniqueValues()
            : new Map()),
        (_._getGlobalFacetedMinMaxValues =
          _.options.getFacetedMinMaxValues &&
          _.options.getFacetedMinMaxValues(_, `__global__`)),
        (_.getGlobalFacetedMinMaxValues = () => {
          if (_._getGlobalFacetedMinMaxValues)
            return _._getGlobalFacetedMinMaxValues();
        });
    },
  },
  _ = {
    getInitialState: (_) => ({
      globalFilter: void 0,
      ..._,
    }),
    getDefaultOptions: (_) => ({
      onGlobalFilterChange: _(`globalFilter`, _),
      globalFilterFn: `auto`,
      getColumnCanGlobalFilter: (_) => {
        var _;
        let _ =
          (_ = _.getCoreRowModel().flatRows[0]) == null ||
          (_ = _._getAllCellsByColumnId()[_._]) == null
            ? void 0
            : _.getValue();
        return typeof _ == `string` || typeof _ == `number`;
      },
    }),
    createColumn: (_, _) => {
      _.getCanGlobalFilter = () =>
        (_.columnDef.enableGlobalFilter ?? !0) &&
        (_.options.enableGlobalFilter ?? !0) &&
        (_.options.enableFilters ?? !0) &&
        ((_.options.getColumnCanGlobalFilter == null
          ? void 0
          : _.options.getColumnCanGlobalFilter(_)) ??
          !0) &&
        !!_.accessorFn;
    },
    createTable: (_) => {
      (_.getGlobalAutoFilterFn = () => _.includesString),
        (_.getGlobalFilterFn = () => {
          let { globalFilterFn: _ } = _.options;
          return _(_)
            ? _
            : _ === `auto`
              ? _.getGlobalAutoFilterFn()
              : (_.options.filterFns?.[_] ?? _[_]);
        }),
        (_.setGlobalFilter = (_) => {
          _.options.onGlobalFilterChange == null ||
            _.options.onGlobalFilterChange(_);
        }),
        (_.resetGlobalFilter = (_) => {
          _.setGlobalFilter(_ ? void 0 : _.initialState.globalFilter);
        });
    },
  },
  _ = {
    getInitialState: (_) => ({
      expanded: {},
      ..._,
    }),
    getDefaultOptions: (_) => ({
      onExpandedChange: _(`expanded`, _),
      paginateExpandedRows: !0,
    }),
    createTable: (_) => {
      let _ = !1,
        _ = !1;
      (_._autoResetExpanded = () => {
        if (!_) {
          _._queue(() => {
            _ = !0;
          });
          return;
        }
        if (
          _.options.autoResetAll ??
          _.options.autoResetExpanded ??
          !_.options.manualExpanding
        ) {
          if (_) return;
          (_ = !0),
            _._queue(() => {
              _.resetExpanded(), (_ = !1);
            });
        }
      }),
        (_.setExpanded = (_) =>
          _.options.onExpandedChange == null
            ? void 0
            : _.options.onExpandedChange(_)),
        (_.toggleAllRowsExpanded = (_) => {
          (_ ?? !_.getIsAllRowsExpanded())
            ? _.setExpanded(!0)
            : _.setExpanded({});
        }),
        (_.resetExpanded = (_) => {
          _.setExpanded(_ ? {} : (_.initialState?.expanded ?? {}));
        }),
        (_.getCanSomeRowsExpand = () =>
          _.getPrePaginationRowModel().flatRows.some((_) => _.getCanExpand())),
        (_.getToggleAllRowsExpandedHandler = () => (_) => {
          _.persist == null || _.persist(), _.toggleAllRowsExpanded();
        }),
        (_.getIsSomeRowsExpanded = () => {
          let _ = _.getState().expanded;
          return _ === !0 || Object.values(_).some(Boolean);
        }),
        (_.getIsAllRowsExpanded = () => {
          let _ = _.getState().expanded;
          return typeof _ == `boolean`
            ? _ === !0
            : !(
                !Object.keys(_).length ||
                _.getRowModel().flatRows.some((_) => !_.getIsExpanded())
              );
        }),
        (_.getExpandedDepth = () => {
          let _ = 0;
          return (
            (_.getState().expanded === !0
              ? Object.keys(_.getRowModel().rowsById)
              : Object.keys(_.getState().expanded)
            ).forEach((_) => {
              let _ = _.split(`.`);
              _ = Math.max(_, _.length);
            }),
            _
          );
        }),
        (_.getPreExpandedRowModel = () => _.getSortedRowModel()),
        (_.getExpandedRowModel = () => (
          !_._getExpandedRowModel &&
            _.options.getExpandedRowModel &&
            (_._getExpandedRowModel = _.options.getExpandedRowModel(_)),
          _.options.manualExpanding || !_._getExpandedRowModel
            ? _.getPreExpandedRowModel()
            : _._getExpandedRowModel()
        ));
    },
    createRow: (_, _) => {
      (_.toggleExpanded = (_) => {
        _.setExpanded((_) => {
          let _ = _ === !0 || !!(_ != null && _[_._]),
            _ = {};
          if (
            (_ === !0
              ? Object.keys(_.getRowModel().rowsById).forEach((_) => {
                  _[_] = !0;
                })
              : (_ = _),
            (_ ??= !_),
            !_ && _)
          )
            return {
              ..._,
              [_._]: !0,
            };
          if (_ && !_) {
            let { [_._]: _, ..._ } = _;
            return _;
          }
          return _;
        });
      }),
        (_.getIsExpanded = () => {
          let _ = _.getState().expanded;
          return !!(
            (_.options.getIsRowExpanded == null
              ? void 0
              : _.options.getIsRowExpanded(_)) ??
            (_ === !0 || _?.[_._])
          );
        }),
        (_.getCanExpand = () => {
          var _;
          return (
            (_.options.getRowCanExpand == null
              ? void 0
              : _.options.getRowCanExpand(_)) ??
            ((_.options.enableExpanding ?? !0) &&
              !!((_ = _.subRows) != null && _.length))
          );
        }),
        (_.getIsAllParentsExpanded = () => {
          let _ = !0,
            _ = _;
          for (; _ && _.parentId; )
            (_ = _.getRow(_.parentId, !0)), (_ = _.getIsExpanded());
          return _;
        }),
        (_.getToggleExpandedHandler = () => {
          let _ = _.getCanExpand();
          return () => {
            _ && _.toggleExpanded();
          };
        });
    },
  },
  _ = 0,
  _ = 10,
  _ = () => ({
    pageIndex: _,
    pageSize: _,
  }),
  _ = {
    getInitialState: (_) => ({
      ..._,
      pagination: {
        ..._(),
        ..._?.pagination,
      },
    }),
    getDefaultOptions: (_) => ({
      onPaginationChange: _(`pagination`, _),
    }),
    createTable: (_) => {
      let _ = !1,
        _ = !1;
      (_._autoResetPageIndex = () => {
        if (!_) {
          _._queue(() => {
            _ = !0;
          });
          return;
        }
        if (
          _.options.autoResetAll ??
          _.options.autoResetPageIndex ??
          !_.options.manualPagination
        ) {
          if (_) return;
          (_ = !0),
            _._queue(() => {
              _.resetPageIndex(), (_ = !1);
            });
        }
      }),
        (_.setPagination = (_) =>
          _.options.onPaginationChange == null
            ? void 0
            : _.options.onPaginationChange((_) => _(_, _))),
        (_.resetPagination = (_) => {
          _.setPagination(_ ? _() : (_.initialState.pagination ?? _()));
        }),
        (_.setPageIndex = (_) => {
          _.setPagination((_) => {
            let _ = _(_, _.pageIndex),
              _ =
                _.options.pageCount === void 0 || _.options.pageCount === -1
                  ? 2 ** 53 - 1
                  : _.options.pageCount - 1;
            return (
              (_ = Math.max(0, Math.min(_, _))),
              {
                ..._,
                pageIndex: _,
              }
            );
          });
        }),
        (_.resetPageIndex = (_) => {
          var _;
          _.setPageIndex(
            _
              ? _
              : (((_ = _.initialState) == null || (_ = _.pagination) == null
                  ? void 0
                  : _.pageIndex) ?? _),
          );
        }),
        (_.resetPageSize = (_) => {
          var _;
          _.setPageSize(
            _
              ? _
              : (((_ = _.initialState) == null || (_ = _.pagination) == null
                  ? void 0
                  : _.pageSize) ?? _),
          );
        }),
        (_.setPageSize = (_) => {
          _.setPagination((_) => {
            let _ = Math.max(1, _(_, _.pageSize)),
              _ = _.pageSize * _.pageIndex,
              _ = Math.floor(_ / _);
            return {
              ..._,
              pageIndex: _,
              pageSize: _,
            };
          });
        }),
        (_.setPageCount = (_) =>
          _.setPagination((_) => {
            let _ = _(_, _.options.pageCount ?? -1);
            return (
              typeof _ == `number` && (_ = Math.max(-1, _)),
              {
                ..._,
                pageCount: _,
              }
            );
          })),
        (_.getPageOptions = _(
          () => [_.getPageCount()],
          (_) => {
            let _ = [];
            return (
              _ && _ > 0 && (_ = [...Array(_)].fill(null).map((_, _) => _)), _
            );
          },
          _(_.options, `debugTable`, `getPageOptions`),
        )),
        (_.getCanPreviousPage = () => _.getState().pagination.pageIndex > 0),
        (_.getCanNextPage = () => {
          let { pageIndex: _ } = _.getState().pagination,
            _ = _.getPageCount();
          return _ === -1 || (_ !== 0 && _ < _ - 1);
        }),
        (_.previousPage = () => _.setPageIndex((_) => _ - 1)),
        (_.nextPage = () => _.setPageIndex((_) => _ + 1)),
        (_.firstPage = () => _.setPageIndex(0)),
        (_.lastPage = () => _.setPageIndex(_.getPageCount() - 1)),
        (_.getPrePaginationRowModel = () => _.getExpandedRowModel()),
        (_.getPaginationRowModel = () => (
          !_._getPaginationRowModel &&
            _.options.getPaginationRowModel &&
            (_._getPaginationRowModel = _.options.getPaginationRowModel(_)),
          _.options.manualPagination || !_._getPaginationRowModel
            ? _.getPrePaginationRowModel()
            : _._getPaginationRowModel()
        )),
        (_.getPageCount = () =>
          _.options.pageCount ??
          Math.ceil(_.getRowCount() / _.getState().pagination.pageSize)),
        (_.getRowCount = () =>
          _.options.rowCount ?? _.getPrePaginationRowModel().rows.length);
    },
  },
  _ = () => ({
    top: [],
    bottom: [],
  }),
  _ = {
    getInitialState: (_) => ({
      rowPinning: _(),
      ..._,
    }),
    getDefaultOptions: (_) => ({
      onRowPinningChange: _(`rowPinning`, _),
    }),
    createRow: (_, _) => {
      (_.pin = (_, _, _) => {
        let _ = _
            ? _.getLeafRows().map((_) => {
                let { _: _ } = _;
                return _;
              })
            : [],
          _ = _
            ? _.getParentRows().map((_) => {
                let { _: _ } = _;
                return _;
              })
            : [],
          _ = new Set([..._, _._, ..._]);
        _.setRowPinning((_) =>
          _ === `bottom`
            ? {
                top: (_?.top ?? []).filter((_) => !(_ != null && _.has(_))),
                bottom: [
                  ...(_?.bottom ?? []).filter((_) => !(_ != null && _.has(_))),
                  ...Array.from(_),
                ],
              }
            : _ === `top`
              ? {
                  top: [
                    ...(_?.top ?? []).filter((_) => !(_ != null && _.has(_))),
                    ...Array.from(_),
                  ],
                  bottom: (_?.bottom ?? []).filter(
                    (_) => !(_ != null && _.has(_)),
                  ),
                }
              : {
                  top: (_?.top ?? []).filter((_) => !(_ != null && _.has(_))),
                  bottom: (_?.bottom ?? []).filter(
                    (_) => !(_ != null && _.has(_)),
                  ),
                },
        );
      }),
        (_.getCanPin = () => {
          let { enableRowPinning: _, enablePinning: _ } = _.options;
          return typeof _ == `function` ? _(_) : (_ ?? _ ?? !0);
        }),
        (_.getIsPinned = () => {
          let _ = [_._],
            { top: _, bottom: _ } = _.getState().rowPinning,
            _ = _.some((_) => _?.includes(_)),
            _ = _.some((_) => _?.includes(_));
          return _ ? `top` : _ ? `bottom` : !1;
        }),
        (_.getPinnedIndex = () => {
          let _ = _.getIsPinned();
          return _
            ? ((_ === `top` ? _.getTopRows() : _.getBottomRows())
                ?.map((_) => {
                  let { _: _ } = _;
                  return _;
                })
                ?.indexOf(_._) ?? -1)
            : -1;
        });
    },
    createTable: (_) => {
      (_.setRowPinning = (_) =>
        _.options.onRowPinningChange == null
          ? void 0
          : _.options.onRowPinningChange(_)),
        (_.resetRowPinning = (_) =>
          _.setRowPinning(_ ? _() : (_.initialState?.rowPinning ?? _()))),
        (_.getIsSomeRowsPinned = (_) => {
          let _ = _.getState().rowPinning;
          return _ ? !!_[_]?.length : !!(_.top?.length || _.bottom?.length);
        }),
        (_._getPinnedRows = (_, _, _) =>
          ((_.options.keepPinnedRows ?? !0)
            ? (_ ?? []).map((_) => {
                let _ = _.getRow(_, !0);
                return _.getIsAllParentsExpanded() ? _ : null;
              })
            : (_ ?? []).map((_) => _.find((_) => _._ === _))
          )
            .filter(Boolean)
            .map((_) => ({
              ..._,
              position: _,
            }))),
        (_.getTopRows = _(
          () => [_.getRowModel().rows, _.getState().rowPinning.top],
          (_, _) => _._getPinnedRows(_, _, `top`),
          _(_.options, `debugRows`, `getTopRows`),
        )),
        (_.getBottomRows = _(
          () => [_.getRowModel().rows, _.getState().rowPinning.bottom],
          (_, _) => _._getPinnedRows(_, _, `bottom`),
          _(_.options, `debugRows`, `getBottomRows`),
        )),
        (_.getCenterRows = _(
          () => [
            _.getRowModel().rows,
            _.getState().rowPinning.top,
            _.getState().rowPinning.bottom,
          ],
          (_, _, _) => {
            let _ = new Set([...(_ ?? []), ...(_ ?? [])]);
            return _.filter((_) => !_.has(_._));
          },
          _(_.options, `debugRows`, `getCenterRows`),
        ));
    },
  },
  _ = {
    getInitialState: (_) => ({
      rowSelection: {},
      ..._,
    }),
    getDefaultOptions: (_) => ({
      onRowSelectionChange: _(`rowSelection`, _),
      enableRowSelection: !0,
      enableMultiRowSelection: !0,
      enableSubRowSelection: !0,
    }),
    createTable: (_) => {
      (_.setRowSelection = (_) =>
        _.options.onRowSelectionChange == null
          ? void 0
          : _.options.onRowSelectionChange(_)),
        (_.resetRowSelection = (_) =>
          _.setRowSelection(_ ? {} : (_.initialState.rowSelection ?? {}))),
        (_.toggleAllRowsSelected = (_) => {
          _.setRowSelection((_) => {
            _ = _ === void 0 ? !_.getIsAllRowsSelected() : _;
            let _ = {
                ..._,
              },
              _ = _.getPreGroupedRowModel().flatRows;
            return (
              _
                ? _.forEach((_) => {
                    _.getCanSelect() && (_[_._] = !0);
                  })
                : _.forEach((_) => {
                    delete _[_._];
                  }),
              _
            );
          });
        }),
        (_.toggleAllPageRowsSelected = (_) =>
          _.setRowSelection((_) => {
            let _ = _ === void 0 ? !_.getIsAllPageRowsSelected() : _,
              _ = {
                ..._,
              };
            return (
              _.getRowModel().rows.forEach((_) => {
                _(_, _._, _, !0, _);
              }),
              _
            );
          })),
        (_.getPreSelectedRowModel = () => _.getCoreRowModel()),
        (_.getSelectedRowModel = _(
          () => [_.getState().rowSelection, _.getCoreRowModel()],
          (_, _) =>
            Object.keys(_).length
              ? _(_, _)
              : {
                  rows: [],
                  flatRows: [],
                  rowsById: {},
                },
          _(_.options, `debugTable`, `getSelectedRowModel`),
        )),
        (_.getFilteredSelectedRowModel = _(
          () => [_.getState().rowSelection, _.getFilteredRowModel()],
          (_, _) =>
            Object.keys(_).length
              ? _(_, _)
              : {
                  rows: [],
                  flatRows: [],
                  rowsById: {},
                },
          _(_.options, `debugTable`, `getFilteredSelectedRowModel`),
        )),
        (_.getGroupedSelectedRowModel = _(
          () => [_.getState().rowSelection, _.getSortedRowModel()],
          (_, _) =>
            Object.keys(_).length
              ? _(_, _)
              : {
                  rows: [],
                  flatRows: [],
                  rowsById: {},
                },
          _(_.options, `debugTable`, `getGroupedSelectedRowModel`),
        )),
        (_.getIsAllRowsSelected = () => {
          let _ = _.getFilteredRowModel().flatRows,
            { rowSelection: _ } = _.getState(),
            _ = !!(_.length && Object.keys(_).length);
          return _ && _.some((_) => _.getCanSelect() && !_[_._]) && (_ = !1), _;
        }),
        (_.getIsAllPageRowsSelected = () => {
          let _ = _.getPaginationRowModel().flatRows.filter((_) =>
              _.getCanSelect(),
            ),
            { rowSelection: _ } = _.getState(),
            _ = !!_.length;
          return _ && _.some((_) => !_[_._]) && (_ = !1), _;
        }),
        (_.getIsSomeRowsSelected = () => {
          let _ = Object.keys(_.getState().rowSelection ?? {}).length;
          return _ > 0 && _ < _.getFilteredRowModel().flatRows.length;
        }),
        (_.getIsSomePageRowsSelected = () => {
          let _ = _.getPaginationRowModel().flatRows;
          return (
            !_.getIsAllPageRowsSelected() &&
            _.filter((_) => _.getCanSelect()).some(
              (_) => _.getIsSelected() || _.getIsSomeSelected(),
            )
          );
        }),
        (_.getToggleAllRowsSelectedHandler = () => (_) => {
          _.toggleAllRowsSelected(_.target.checked);
        }),
        (_.getToggleAllPageRowsSelectedHandler = () => (_) => {
          _.toggleAllPageRowsSelected(_.target.checked);
        });
    },
    createRow: (_, _) => {
      (_.toggleSelected = (_, _) => {
        let _ = _.getIsSelected();
        _.setRowSelection((_) => {
          if (((_ = _ === void 0 ? !_ : _), _.getCanSelect() && _ === _))
            return _;
          let _ = {
            ..._,
          };
          return _(_, _._, _, _?.selectChildren ?? !0, _), _;
        });
      }),
        (_.getIsSelected = () => {
          let { rowSelection: _ } = _.getState();
          return _(_, _);
        }),
        (_.getIsSomeSelected = () => {
          let { rowSelection: _ } = _.getState();
          return _(_, _) === `some`;
        }),
        (_.getIsAllSubRowsSelected = () => {
          let { rowSelection: _ } = _.getState();
          return _(_, _) === `all`;
        }),
        (_.getCanSelect = () =>
          typeof _.options.enableRowSelection == `function`
            ? _.options.enableRowSelection(_)
            : (_.options.enableRowSelection ?? !0)),
        (_.getCanSelectSubRows = () =>
          typeof _.options.enableSubRowSelection == `function`
            ? _.options.enableSubRowSelection(_)
            : (_.options.enableSubRowSelection ?? !0)),
        (_.getCanMultiSelect = () =>
          typeof _.options.enableMultiRowSelection == `function`
            ? _.options.enableMultiRowSelection(_)
            : (_.options.enableMultiRowSelection ?? !0)),
        (_.getToggleSelectedHandler = () => {
          let _ = _.getCanSelect();
          return (_) => {
            _ && _.toggleSelected(_.target?.checked);
          };
        });
    },
  },
  _ = (_, _, _, _, _) => {
    var _;
    let _ = _.getRow(_, !0);
    _
      ? (_.getCanMultiSelect() || Object.keys(_).forEach((_) => delete _[_]),
        _.getCanSelect() && (_[_] = !0))
      : delete _[_],
      _ &&
        (_ = _.subRows) != null &&
        _.length &&
        _.getCanSelectSubRows() &&
        _.subRows.forEach((_) => _(_, _._, _, _, _));
  };
function _(_, _) {
  let _ = _.getState().rowSelection,
    _ = [],
    _ = {},
    _ = function (_, _) {
      return _.map((_) => {
        var _;
        let _ = _(_, _);
        if (
          (_ && (_.push(_), (_[_._] = _)),
          (_ = _.subRows) != null &&
            _.length &&
            (_ = {
              ..._,
              subRows: _(_.subRows),
            }),
          _)
        )
          return _;
      }).filter(Boolean);
    };
  return {
    rows: _(_.rows),
    flatRows: _,
    rowsById: _,
  };
}
function _(_, _) {
  return _[_._] ?? !1;
}
function _(_, _, _) {
  var _;
  if (!((_ = _.subRows) != null && _.length)) return !1;
  let _ = !0,
    _ = !1;
  return (
    _.subRows.forEach((_) => {
      if (
        !(_ && !_) &&
        (_.getCanSelect() && (_(_, _) ? (_ = !0) : (_ = !1)),
        _.subRows && _.subRows.length)
      ) {
        let _ = _(_, _);
        _ === `all` ? (_ = !0) : (_ === `some` && (_ = !0), (_ = !1));
      }
    }),
    _ ? `all` : _ ? `some` : !1
  );
}
var _ = /([0-9]+)/gm,
  _ = (_, _, _) =>
    _(_(_.getValue(_)).toLowerCase(), _(_.getValue(_)).toLowerCase()),
  _ = (_, _, _) => _(_(_.getValue(_)), _(_.getValue(_))),
  _ = (_, _, _) =>
    _(_(_.getValue(_)).toLowerCase(), _(_.getValue(_)).toLowerCase()),
  _ = (_, _, _) => _(_(_.getValue(_)), _(_.getValue(_))),
  _ = (_, _, _) => {
    let _ = _.getValue(_),
      _ = _.getValue(_);
    return _ > _ ? 1 : _ < _ ? -1 : 0;
  },
  _ = (_, _, _) => _(_.getValue(_), _.getValue(_));
function _(_, _) {
  return _ === _ ? 0 : _ > _ ? 1 : -1;
}
function _(_) {
  return typeof _ == `number`
    ? isNaN(_) || _ === 1 / 0 || _ === -1 / 0
      ? ``
      : String(_)
    : typeof _ == `string`
      ? _
      : ``;
}
function _(_, _) {
  let _ = _.split(_).filter(Boolean),
    _ = _.split(_).filter(Boolean);
  for (; _.length && _.length; ) {
    let _ = _.shift(),
      _ = _.shift(),
      _ = parseInt(_, 10),
      _ = parseInt(_, 10),
      _ = [_, _].sort();
    if (isNaN(_[0])) {
      if (_ > _) return 1;
      if (_ > _) return -1;
      continue;
    }
    if (isNaN(_[1])) return isNaN(_) ? -1 : 1;
    if (_ > _) return 1;
    if (_ > _) return -1;
  }
  return _.length - _.length;
}
var _ = {
    alphanumeric: _,
    alphanumericCaseSensitive: _,
    text: _,
    textCaseSensitive: _,
    datetime: _,
    basic: _,
  },
  _ = [
    _,
    _,
    _,
    _,
    _,
    _,
    _,
    _,
    {
      getInitialState: (_) => ({
        sorting: [],
        ..._,
      }),
      getDefaultColumnDef: () => ({
        sortingFn: `auto`,
        sortUndefined: 1,
      }),
      getDefaultOptions: (_) => ({
        onSortingChange: _(`sorting`, _),
        isMultiSortEvent: (_) => _.shiftKey,
      }),
      createColumn: (_, _) => {
        (_.getAutoSortingFn = () => {
          let _ = _.getFilteredRowModel().flatRows.slice(10),
            _ = !1;
          for (let _ of _) {
            let _ = _?.getValue(_._);
            if (Object.prototype.toString.call(_) === `[object Date]`)
              return _.datetime;
            if (typeof _ == `string` && ((_ = !0), _.split(_).length > 1))
              return _.alphanumeric;
          }
          return _ ? _.text : _.basic;
        }),
          (_.getAutoSortDir = () =>
            typeof _.getFilteredRowModel().flatRows[0]?.getValue(_._) ==
            `string`
              ? `asc`
              : `desc`),
          (_.getSortingFn = () => {
            if (!_) throw Error();
            return _(_.columnDef.sortingFn)
              ? _.columnDef.sortingFn
              : _.columnDef.sortingFn === `auto`
                ? _.getAutoSortingFn()
                : (_.options.sortingFns?.[_.columnDef.sortingFn] ??
                  _[_.columnDef.sortingFn]);
          }),
          (_.toggleSorting = (_, _) => {
            let _ = _.getNextSortingOrder(),
              _ = _ != null;
            _.setSorting((_) => {
              let _ = _?.find((_) => _._ === _._),
                _ = _?.findIndex((_) => _._ === _._),
                _ = [],
                _,
                _ = _ ? _ : _ === `desc`;
              return (
                (_ =
                  _ != null && _.length && _.getCanMultiSort() && _
                    ? _
                      ? `toggle`
                      : `add`
                    : _ != null && _.length && _ !== _.length - 1
                      ? `replace`
                      : _
                        ? `toggle`
                        : `replace`),
                _ === `toggle` && (_ || _ || (_ = `remove`)),
                _ === `add`
                  ? ((_ = [
                      ..._,
                      {
                        _: _._,
                        desc: _,
                      },
                    ]),
                    _.splice(
                      0,
                      _.length -
                        (_.options.maxMultiSortColCount ?? 2 ** 53 - 1),
                    ))
                  : (_ =
                      _ === `toggle`
                        ? _.map((_) =>
                            _._ === _._
                              ? {
                                  ..._,
                                  desc: _,
                                }
                              : _,
                          )
                        : _ === `remove`
                          ? _.filter((_) => _._ !== _._)
                          : [
                              {
                                _: _._,
                                desc: _,
                              },
                            ]),
                _
              );
            });
          }),
          (_.getFirstSortDir = () =>
            (_.columnDef.sortDescFirst ??
            _.options.sortDescFirst ??
            _.getAutoSortDir() === `desc`)
              ? `desc`
              : `asc`),
          (_.getNextSortingOrder = (_) => {
            let _ = _.getFirstSortDir(),
              _ = _.getIsSorted();
            return _
              ? _ !== _ &&
                (_.options.enableSortingRemoval ?? !0) &&
                (!_ || (_.options.enableMultiRemove ?? !0))
                ? !1
                : _ === `desc`
                  ? `asc`
                  : `desc`
              : _;
          }),
          (_.getCanSort = () =>
            (_.columnDef.enableSorting ?? !0) &&
            (_.options.enableSorting ?? !0) &&
            !!_.accessorFn),
          (_.getCanMultiSort = () =>
            _.columnDef.enableMultiSort ??
            _.options.enableMultiSort ??
            !!_.accessorFn),
          (_.getIsSorted = () => {
            let _ = _.getState().sorting?.find((_) => _._ === _._);
            return _ ? (_.desc ? `desc` : `asc`) : !1;
          }),
          (_.getSortIndex = () =>
            _.getState().sorting?.findIndex((_) => _._ === _._) ?? -1),
          (_.clearSorting = () => {
            _.setSorting((_) =>
              _ != null && _.length ? _.filter((_) => _._ !== _._) : [],
            );
          }),
          (_.getToggleSortingHandler = () => {
            let _ = _.getCanSort();
            return (_) => {
              _ &&
                (_.persist == null || _.persist(),
                _.toggleSorting == null ||
                  _.toggleSorting(
                    void 0,
                    _.getCanMultiSort()
                      ? _.options.isMultiSortEvent == null
                        ? void 0
                        : _.options.isMultiSortEvent(_)
                      : !1,
                  ));
            };
          });
      },
      createTable: (_) => {
        (_.setSorting = (_) =>
          _.options.onSortingChange == null
            ? void 0
            : _.options.onSortingChange(_)),
          (_.resetSorting = (_) => {
            _.setSorting(_ ? [] : (_.initialState?.sorting ?? []));
          }),
          (_.getPreSortedRowModel = () => _.getGroupedRowModel()),
          (_.getSortedRowModel = () => (
            !_._getSortedRowModel &&
              _.options.getSortedRowModel &&
              (_._getSortedRowModel = _.options.getSortedRowModel(_)),
            _.options.manualSorting || !_._getSortedRowModel
              ? _.getPreSortedRowModel()
              : _._getSortedRowModel()
          ));
      },
    },
    _,
    _,
    _,
    _,
    _,
    _,
  ];
function _(_) {
  let _ = [..._, ...(_._features ?? [])],
    _ = {
      _features: _,
    },
    _ = _._features.reduce(
      (_, _) =>
        Object.assign(
          _,
          _.getDefaultOptions == null ? void 0 : _.getDefaultOptions(_),
        ),
      {},
    ),
    _ = (_) =>
      _.options.mergeOptions
        ? _.options.mergeOptions(_, _)
        : {
            ..._,
            ..._,
          },
    _ = {
      ...(_.initialState ?? {}),
    };
  _._features.forEach((_) => {
    _ = (_.getInitialState == null ? void 0 : _.getInitialState(_)) ?? _;
  });
  let _ = [],
    _ = !1,
    _ = {
      _features: _,
      options: {
        ..._,
        ..._,
      },
      initialState: _,
      _queue: (_) => {
        _.push(_),
          _ ||
            ((_ = !0),
            Promise.resolve()
              .then(() => {
                for (; _.length; ) _.shift()();
                _ = !1;
              })
              .catch((_) =>
                setTimeout(() => {
                  throw _;
                }),
              ));
      },
      reset: () => {
        _.setState(_.initialState);
      },
      setOptions: (_) => {
        let _ = _(_, _.options);
        _.options = _(_);
      },
      getState: () => _.options.state,
      setState: (_) => {
        _.options.onStateChange == null || _.options.onStateChange(_);
      },
      _getRowId: (_, _, _) =>
        (_.options.getRowId == null ? void 0 : _.options.getRowId(_, _, _)) ??
        `${_ ? [_._, _].join(`.`) : _}`,
      getCoreRowModel: () => (
        (_._getCoreRowModel ||= _.options.getCoreRowModel(_)),
        _._getCoreRowModel()
      ),
      getRowModel: () => _.getPaginationRowModel(),
      getRow: (_, _) => {
        let _ = (_ ? _.getPrePaginationRowModel() : _.getRowModel()).rowsById[
          _
        ];
        if (!_ && ((_ = _.getCoreRowModel().rowsById[_]), !_)) throw Error();
        return _;
      },
      _getDefaultColumnDef: _(
        () => [_.options.defaultColumn],
        (_) => (
          (_ ??= {}),
          {
            header: (_) => {
              let _ = _.header.column.columnDef;
              return _.accessorKey ? _.accessorKey : _.accessorFn ? _._ : null;
            },
            cell: (_) => {
              var _;
              return (
                ((_ = _.renderValue()) == null || _.toString == null
                  ? void 0
                  : _.toString()) ?? null
              );
            },
            ..._._features.reduce(
              (_, _) =>
                Object.assign(
                  _,
                  _.getDefaultColumnDef == null
                    ? void 0
                    : _.getDefaultColumnDef(),
                ),
              {},
            ),
            ..._,
          }
        ),
        _(_, `debugColumns`, `_getDefaultColumnDef`),
      ),
      _getColumnDefs: () => _.options.columns,
      getAllColumns: _(
        () => [_._getColumnDefs()],
        (_) => {
          let _ = function (_, _, _) {
            return (
              _ === void 0 && (_ = 0),
              _.map((_) => {
                let _ = _(_, _, _, _),
                  _ = _;
                return (_.columns = _.columns ? _(_.columns, _, _ + 1) : []), _;
              })
            );
          };
          return _(_);
        },
        _(_, `debugColumns`, `getAllColumns`),
      ),
      getAllFlatColumns: _(
        () => [_.getAllColumns()],
        (_) => _.flatMap((_) => _.getFlatColumns()),
        _(_, `debugColumns`, `getAllFlatColumns`),
      ),
      _getAllFlatColumnsById: _(
        () => [_.getAllFlatColumns()],
        (_) => _.reduce((_, _) => ((_[_._] = _), _), {}),
        _(_, `debugColumns`, `getAllFlatColumnsById`),
      ),
      getAllLeafColumns: _(
        () => [_.getAllColumns(), _._getOrderColumnsFn()],
        (_, _) => _(_.flatMap((_) => _.getLeafColumns())),
        _(_, `debugColumns`, `getAllLeafColumns`),
      ),
      getColumn: (_) => _._getAllFlatColumnsById()[_],
    };
  Object.assign(_, _);
  for (let _ = 0; _ < _._features.length; _++) {
    let _ = _._features[_];
    _ == null || _.createTable == null || _.createTable(_);
  }
  return _;
}
function _() {
  return (_) =>
    _(
      () => [_.options.data],
      (_) => {
        let _ = {
            rows: [],
            flatRows: [],
            rowsById: {},
          },
          _ = function (_, _, _) {
            _ === void 0 && (_ = 0);
            let _ = [];
            for (let _ = 0; _ < _.length; _++) {
              let _ = _(_, _._getRowId(_[_], _, _), _[_], _, _, void 0, _?._);
              if (
                (_.flatRows.push(_),
                (_.rowsById[_._] = _),
                _.push(_),
                _.options.getSubRows)
              ) {
                var _;
                (_.originalSubRows = _.options.getSubRows(_[_], _)),
                  (_ = _.originalSubRows) != null &&
                    _.length &&
                    (_.subRows = _(_.originalSubRows, _ + 1, _));
              }
            }
            return _;
          };
        return (_.rows = _(_)), _;
      },
      _(_.options, `debugTable`, `getRowModel`, () => _._autoResetPageIndex()),
    );
}
function _(_, _, _) {
  return _.options.filterFromLeafRows ? _(_, _, _) : _(_, _, _);
}
function _(_, _, _) {
  let _ = [],
    _ = {},
    _ = _.options.maxLeafRowFilterDepth ?? 100,
    _ = function (_, _) {
      _ === void 0 && (_ = 0);
      let _ = [];
      for (let _ = 0; _ < _.length; _++) {
        var _;
        let _ = _[_],
          _ = _(_, _._, _.original, _.index, _.depth, void 0, _.parentId);
        if (
          ((_.columnFilters = _.columnFilters),
          (_ = _.subRows) != null && _.length && _ < _)
        ) {
          if (
            ((_.subRows = _(_.subRows, _ + 1)),
            (_ = _),
            _(_) && !_.subRows.length)
          ) {
            _.push(_), (_[_._] = _), _.push(_);
            continue;
          }
          if (_(_) || _.subRows.length) {
            _.push(_), (_[_._] = _), _.push(_);
            continue;
          }
        } else (_ = _), _(_) && (_.push(_), (_[_._] = _), _.push(_));
      }
      return _;
    };
  return {
    rows: _(_),
    flatRows: _,
    rowsById: _,
  };
}
function _(_, _, _) {
  let _ = [],
    _ = {},
    _ = _.options.maxLeafRowFilterDepth ?? 100,
    _ = function (_, _) {
      _ === void 0 && (_ = 0);
      let _ = [];
      for (let _ = 0; _ < _.length; _++) {
        let _ = _[_];
        if (_(_)) {
          var _;
          if ((_ = _.subRows) != null && _.length && _ < _) {
            let _ = _(_, _._, _.original, _.index, _.depth, void 0, _.parentId);
            (_.subRows = _(_.subRows, _ + 1)), (_ = _);
          }
          _.push(_), _.push(_), (_[_._] = _);
        }
      }
      return _;
    };
  return {
    rows: _(_),
    flatRows: _,
    rowsById: _,
  };
}
function _() {
  return (_) =>
    _(
      () => [
        _.getPreFilteredRowModel(),
        _.getState().columnFilters,
        _.getState().globalFilter,
      ],
      (_, _, _) => {
        if (!_.rows.length || (!(_ != null && _.length) && !_)) {
          for (let _ = 0; _ < _.flatRows.length; _++)
            (_.flatRows[_].columnFilters = {}),
              (_.flatRows[_].columnFiltersMeta = {});
          return _;
        }
        let _ = [],
          _ = [];
        (_ ?? []).forEach((_) => {
          let _ = _.getColumn(_._);
          if (!_) return;
          let _ = _.getFilterFn();
          _ &&
            _.push({
              _: _._,
              filterFn: _,
              resolvedValue:
                (_.resolveFilterValue == null
                  ? void 0
                  : _.resolveFilterValue(_.value)) ?? _.value,
            });
        });
        let _ = (_ ?? []).map((_) => _._),
          _ = _.getGlobalFilterFn(),
          _ = _.getAllLeafColumns().filter((_) => _.getCanGlobalFilter());
        _ &&
          _ &&
          _.length &&
          (_.push(`__global__`),
          _.forEach((_) => {
            _.push({
              _: _._,
              filterFn: _,
              resolvedValue:
                (_.resolveFilterValue == null
                  ? void 0
                  : _.resolveFilterValue(_)) ?? _,
            });
          }));
        let _, _;
        for (let _ = 0; _ < _.flatRows.length; _++) {
          let _ = _.flatRows[_];
          if (((_.columnFilters = {}), _.length))
            for (let _ = 0; _ < _.length; _++) {
              _ = _[_];
              let _ = _._;
              _.columnFilters[_] = _.filterFn(_, _, _.resolvedValue, (_) => {
                _.columnFiltersMeta[_] = _;
              });
            }
          if (_.length) {
            for (let _ = 0; _ < _.length; _++) {
              _ = _[_];
              let _ = _._;
              if (
                _.filterFn(_, _, _.resolvedValue, (_) => {
                  _.columnFiltersMeta[_] = _;
                })
              ) {
                _.columnFilters.__global__ = !0;
                break;
              }
            }
            _.columnFilters.__global__ !== !0 &&
              (_.columnFilters.__global__ = !1);
          }
        }
        return _(
          _.rows,
          (_) => {
            for (let _ = 0; _ < _.length; _++)
              if (_.columnFilters[_[_]] === !1) return !1;
            return !0;
          },
          _,
        );
      },
      _(_.options, `debugTable`, `getFilteredRowModel`, () =>
        _._autoResetPageIndex(),
      ),
    );
}
function _() {
  return (_) =>
    _(
      () => [_.getState().grouping, _.getPreGroupedRowModel()],
      (_, _) => {
        if (!_.rows.length || !_.length)
          return (
            _.rows.forEach((_) => {
              (_.depth = 0), (_.parentId = void 0);
            }),
            _
          );
        let _ = _.filter((_) => _.getColumn(_)),
          _ = [],
          _ = {},
          _ = function (_, _, _) {
            if ((_ === void 0 && (_ = 0), _ >= _.length))
              return _.map(
                (_) => (
                  (_.depth = _),
                  _.push(_),
                  (_[_._] = _),
                  (_.subRows &&= _(_.subRows, _ + 1, _._)),
                  _
                ),
              );
            let _ = _[_],
              _ = _(_, _);
            return Array.from(_.entries()).map((_, _) => {
              let [_, _] = _,
                _ = `${_}:${_}`;
              _ = _ ? `${_}>${_}` : _;
              let _ = _(_, _ + 1, _);
              _.forEach((_) => {
                _.parentId = _;
              });
              let _ = _ ? _(_, (_) => _.subRows) : _,
                _ = _(_, _, _[0].original, _, _, void 0, _);
              return (
                Object.assign(_, {
                  groupingColumnId: _,
                  groupingValue: _,
                  subRows: _,
                  leafRows: _,
                  getValue: (_) => {
                    if (_.includes(_))
                      return (
                        _._valuesCache.hasOwnProperty(_) ||
                          (_[0] &&
                            (_._valuesCache[_] = _[0].getValue(_) ?? void 0)),
                        _._valuesCache[_]
                      );
                    if (_._groupingValuesCache.hasOwnProperty(_))
                      return _._groupingValuesCache[_];
                    let _ = _.getColumn(_)?.getAggregationFn();
                    if (_)
                      return (
                        (_._groupingValuesCache[_] = _(_, _, _)),
                        _._groupingValuesCache[_]
                      );
                  },
                }),
                _.forEach((_) => {
                  _.push(_), (_[_._] = _);
                }),
                _
              );
            });
          },
          _ = _(_.rows, 0);
        return (
          _.forEach((_) => {
            _.push(_), (_[_._] = _);
          }),
          {
            rows: _,
            flatRows: _,
            rowsById: _,
          }
        );
      },
      _(_.options, `debugTable`, `getGroupedRowModel`, () => {
        _._queue(() => {
          _._autoResetExpanded(), _._autoResetPageIndex();
        });
      }),
    );
}
function _(_, _) {
  let _ = new Map();
  return _.reduce((_, _) => {
    let _ = `${_.getGroupingValue(_)}`,
      _ = _.get(_);
    return _ ? _.push(_) : _.set(_, [_]), _;
  }, _);
}
function _() {
  return (_) =>
    _(
      () => [_.getState().sorting, _.getPreSortedRowModel()],
      (_, _) => {
        if (!_.rows.length || !(_ != null && _.length)) return _;
        let _ = _.getState().sorting,
          _ = [],
          _ = _.filter((_) => _.getColumn(_._)?.getCanSort()),
          _ = {};
        _.forEach((_) => {
          let _ = _.getColumn(_._);
          _ &&
            (_[_._] = {
              sortUndefined: _.columnDef.sortUndefined,
              invertSorting: _.columnDef.invertSorting,
              sortingFn: _.getSortingFn(),
            });
        });
        let _ = (_) => {
          let _ = _.map((_) => ({
            ..._,
          }));
          return (
            _.sort((_, _) => {
              for (let _ = 0; _ < _.length; _ += 1) {
                let _ = _[_],
                  _ = _[_._],
                  _ = _.sortUndefined,
                  _ = _?.desc ?? !1,
                  _ = 0;
                if (_) {
                  let _ = _.getValue(_._),
                    _ = _.getValue(_._),
                    _ = _ === void 0,
                    _ = _ === void 0;
                  if (_ || _) {
                    if (_ === `first`) return _ ? -1 : 1;
                    if (_ === `last`) return _ ? 1 : -1;
                    _ = _ && _ ? 0 : _ ? _ : -_;
                  }
                }
                if ((_ === 0 && (_ = _.sortingFn(_, _, _._)), _ !== 0))
                  return _ && (_ *= -1), _.invertSorting && (_ *= -1), _;
              }
              return _.index - _.index;
            }),
            _.forEach((_) => {
              var _;
              _.push(_),
                (_ = _.subRows) != null &&
                  _.length &&
                  (_.subRows = _(_.subRows));
            }),
            _
          );
        };
        return {
          rows: _(_.rows),
          flatRows: _,
          rowsById: _.rowsById,
        };
      },
      _(_.options, `debugTable`, `getSortedRowModel`, () =>
        _._autoResetPageIndex(),
      ),
    );
}
function _(_, _) {
  return _ ? (_(_) ? _.createElement(_, _) : _) : null;
}
function _(_) {
  return _(_) || typeof _ == `function` || _(_);
}
function _(_) {
  return (
    typeof _ == `function` &&
    (() => {
      let _ = Object.getPrototypeOf(_);
      return _.prototype && _.prototype.isReactComponent;
    })()
  );
}
function _(_) {
  return (
    typeof _ == `object` &&
    typeof _.$$typeof == `symbol` &&
    [`react.memo`, `react.forward_ref`].includes(_.$$typeof.description)
  );
}
function _(_) {
  let _ = {
      state: {},
      onStateChange: () => {},
      renderFallbackValue: null,
      ..._,
    },
    [_] = _.useState(() => ({
      current: _(_),
    })),
    [_, _] = _.useState(() => _.current.initialState);
  return (
    _.current.setOptions((_) => ({
      ..._,
      ..._,
      state: {
        ..._,
        ..._.state,
      },
      onStateChange: (_) => {
        _(_), _.onStateChange == null || _.onStateChange(_);
      },
    })),
    _.current
  );
}
var _ = _(_(), 1),
  _ = `-SglDQW4JCw-`,
  _ = `_5CKEsnJcFZ4-`,
  _ = `Fi8Mmml9Xiw-`,
  _ = `zjSagSmki10-`,
  _ = `arN6EhfAmTc-`,
  _ = `_9t3ADNiQOSY-`,
  _ = _(),
  _ = _.memo(function (_) {
    let {
        virtualizer: _,
        bDynamic: _,
        scrollAlign: _,
        bNativeScrollIntoView: _,
        idx: _,
        rowGap: _,
        renderItem: _,
      } = _,
      _ = _.useCallback(
        (_, _, _) => (
          _.scrollToIndex(_, {
            align: _,
          }),
          !0
        ),
        [_, _, _],
      );
    return (0, _.jsx)(_, {
      ref: _ ? _.measureElement : void 0,
      navKey: `VirtualizedListIndex-${_}`,
      "data-index": _,
      fnScrollIntoViewHandler: _ ? void 0 : _,
      scrollIntoViewWhenChildFocused: `force`,
      style: {
        width: `100%`,
        paddingBottom: _,
      },
      children: _(_),
    });
  });
function _(_) {
  return _(
    (_) => {
      if (!_) return;
      let _ = new _.ownerDocument.defaultView.ResizeObserver((_) => {
          _(_[0]);
        }),
        _ = [],
        _ = _;
      for (; _ && _ != null; ) _.observe(_), _.push(_), (_ = _.parentElement);
      return () => {
        _.forEach((_) => _.unobserve(_));
      };
    },
    [_],
  );
}
function _(_, _) {
  let _ = _.getBoundingClientRect().top;
  return _
    ? _ - _.getBoundingClientRect().top - _.clientTop + _.scrollTop
    : _ + (_.ownerDocument.defaultView?.scrollY ?? 0);
}
_.forwardRef(function (_, _) {
  let {
      nRows: _,
      nItemHeight: _,
      nRowGap: _,
      overscan: _,
      renderItem: _,
      bDynamic: _,
      measureElement: _,
      className: _,
      forceVirtualizeType: _,
      hintVirtualizeType: _,
      scrollAlign: _,
      bNativeScrollIntoView: _,
      initialOffset: _,
      onOffsetChange: _,
      ..._
    } = _,
    [_, _] = (0, _.useState)(_ ?? _),
    [_, _] = _.useState(),
    [_, _] = _.useState(),
    _ = _.useRef(null),
    _ = _(
      _.useCallback(
        (_) => {
          if (!_) return;
          let _ = _(_, `y`),
            _ = _(_, _ == `window` ? null : _);
          (0, _.startTransition)(() => {
            _ != `window` && _(_ || void 0),
              _(_),
              _ || _(_ ? `element` : `window`);
          });
        },
        [_],
      ),
      _,
      _((_) => {
        if (!_.current) return;
        let _ = _(_.current, _);
        (0, _.startTransition)(() => {
          _(_);
        });
      }),
      _,
    ),
    _ = {
      nRows: _,
      nItemHeight: _,
      nRowGap: _,
      overscan: _,
      renderItem: _,
      bDynamic: _,
      measureElement: _,
      forceVirtualizeType: _,
      hintVirtualizeType: _,
      scrollAlign: _,
      bNativeScrollIntoView: _,
      initialOffset: _,
      onOffsetChange: _,
    };
  return (0, _.jsx)(_, {
    className: _,
    ref: _,
    ..._,
    children: (0, _.jsxs)(_.Suspense, {
      children: [
        _ === `element` &&
          (0, _.jsx)(_, {
            ..._,
            nScrollMargin: _ || 0,
            elScrollable: _,
          }),
        _ === `window` &&
          (0, _.jsx)(_, {
            ..._,
            nScrollMargin: _,
          }),
      ],
    }),
  });
});
function _(_, _, _) {
  _.useEffect(() => {
    _ ||
      (0, _.startTransition)(() => {
        _.measure();
      });
  }, [_, _, _]);
}
function _(_) {
  let {
      nScrollMargin: _,
      nRows: _,
      nItemHeight: _,
      nRowGap: _ = 10,
      overscan: _ = 6,
      initialOffset: _,
      onOffsetChange: _,
      measureElement: _,
      bDynamic: _,
    } = _,
    _ = _(),
    _ = _ + _,
    _ = _({
      count: _,
      scrollMargin: _,
      estimateSize: _.useCallback(() => _, [_]),
      measureElement: _,
      overscan: _,
      initialOffset: _ ?? (() => window.scrollY),
      initialRect: {
        height: _.viewportHeight?.value ?? 1e3,
        width: _.viewportWidth?.value ?? 1e3,
      },
      observeElementOffset: _,
      observeElementRect: _,
      onChange(_, _) {
        _?.(_.scrollOffset);
      },
    });
  return (
    (_.shouldAdjustScrollPositionOnItemSizeChange = (_) =>
      _ !== void 0 && _.start < (_.scrollOffset ?? 0)),
    _(_, _, _),
    (0, _.jsx)(_, {
      ..._,
      virtualizer: _,
    })
  );
}
function _(_) {
  let {
      nRows: _,
      nScrollMargin: _,
      elScrollable: _,
      nItemHeight: _,
      nRowGap: _ = 10,
      overscan: _ = 6,
      initialOffset: _,
      onOffsetChange: _,
      measureElement: _,
      bDynamic: _,
    } = _,
    _ = _ + _,
    _ = _(),
    _ = _({
      count: _,
      scrollMargin: _,
      getScrollElement: () => (
        _ &&
          _.scrollElement !== _ &&
          _ === void 0 &&
          (_.scrollOffset = _.scrollTop),
        _ ?? null
      ),
      estimateSize: _.useCallback(() => _, [_]),
      measureElement: _,
      overscan: _,
      initialRect: {
        height: _.viewportHeight?.value ?? 1e3,
        width: _.viewportWidth?.value ?? 1e3,
      },
      initialOffset: _,
      observeElementOffset: _,
      observeElementRect: _,
      onChange(_, _) {
        _?.(_.scrollOffset);
      },
    });
  return (
    (_.shouldAdjustScrollPositionOnItemSizeChange = (_) =>
      _ !== void 0 && _.start < (_.scrollOffset ?? 0)),
    _(_, _, _),
    (0, _.jsx)(_, {
      ..._,
      virtualizer: _,
    })
  );
}
function _(_) {
  let {
      virtualizer: _,
      nRowGap: _,
      renderItem: _,
      bDynamic: _,
      scrollAlign: _ = `center`,
      bNativeScrollIntoView: _,
    } = _,
    _ = _.getVirtualItems(),
    _ = _.length ? _[0].start - _.options.scrollMargin : 0,
    _ = Math.max(0, _.getTotalSize());
  return (0, _.jsx)(_, {
    "flow-children": `column`,
    navEntryPreferPosition: _.MAINTAIN_Y,
    style: {
      height: `${_}px`,
      width: `100%`,
      position: `relative`,
    },
    children: (0, _.jsx)(`div`, {
      style: {
        position: `absolute`,
        top: 0,
        left: 0,
        width: `100%`,
        transform: `translateY( ${_}px )`,
      },
      children: _.map((_) =>
        (0, _.jsx)(
          _,
          {
            virtualizer: _,
            bDynamic: _,
            scrollAlign: _,
            bNativeScrollIntoView: _,
            idx: _.index,
            rowGap: _,
            renderItem: _,
          },
          _.key,
        ),
      ),
    }),
  });
}
function _(_) {
  return (..._) => {
    queueMicrotask(() => {
      (0, _.startTransition)(() => {
        _(..._);
      });
    });
  };
}
function _(_, _) {
  let _ = _.scrollElement;
  if (!_) return;
  let _;
  _ =
    `scrollX` in _
      ? _((_) => _(_[_.options.horizontal ? `scrollX` : `scrollY`], _))
      : _((_) => _(_[_.options.horizontal ? `scrollLeft` : `scrollTop`], _));
  let _ = () => _(!0),
    _ = () => _(!1);
  return (
    _(),
    _.addEventListener(`scroll`, _, {
      passive: !0,
    }),
    _.addEventListener(`scrollend`, _, {
      passive: !0,
    }),
    () => {
      _.removeEventListener(`scroll`, _), _.removeEventListener(`scrollend`, _);
    }
  );
}
function _(_, _) {
  let _ = _.scrollElement;
  if (!_) return;
  let _ = _(() =>
    _({
      width: _.innerWidth,
      height: _.innerHeight,
    }),
  );
  return (
    _(),
    _.addEventListener(`resize`, _, {
      passive: !0,
    }),
    () => {
      _.removeEventListener(`resize`, _);
    }
  );
}
function _(_, _) {
  let _ = _.scrollElement;
  if (!_) return;
  let _ = _((_) =>
    _({
      width: Math.round(_.width),
      height: Math.round(_.height),
    }),
  );
  _(_.getBoundingClientRect());
  let _ = _.ownerDocument.defaultView;
  if (!_?.ResizeObserver) return () => {};
  let _ = new _.ResizeObserver((_) => {
    if (_[0]?.borderBoxSize[0]) {
      _({
        width: _[0].borderBoxSize[0].inlineSize,
        height: _[0].borderBoxSize[0].blockSize,
      });
      return;
    }
    _(_.getBoundingClientRect());
  });
  return (
    _.observe(_, {
      box: `border-box`,
    }),
    () => {
      _.unobserve(_);
    }
  );
}
var _ = _.createContext(void 0);
function _(_) {
  let { table: _, setColumnSizeOverride: _ } = _,
    _ = (0, _.useRef)(_);
  _.current = _;
  let _ = (0, _.useMemo)(
    () => ({
      table: _.current,
      setColumnSizeOverride: _,
    }),
    [_],
  );
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _.children,
  });
}
var _ = _.forwardRef(function (_, _) {
  let {
      data: _,
      columns: _,
      className: _,
      width: _,
      height: _,
      nScrollMargin: _,
      nItemHeight: _,
      nHeaderHeight: _,
      overscan: _ = 6,
      stickyHeader: _,
      getRowKey: _,
      initialSorting: _,
      initialColumnFilters: _,
      initialGrouping: _,
      initialExpanded: _,
      initialColumnPinning: _,
      initialColumnVisibility: _,
      onGroupingChange: _,
      onVisibleRowsChange: _,
      renderGroup: _,
      virtualizeType: _ = `element`,
    } = _,
    _ = (0, _.useRef)(null),
    [_, _] = (0, _.useState)({}),
    [_, _] = (0, _.useState)({}),
    _ = _.map((_) =>
      `accessorKey` in _
        ? {
            ..._,
            filterFn: _[_.accessorKey] ?? _.filterFn,
          }
        : _,
    ),
    _ = _({
      data: _,
      columns: _.map((_) => {
        let _ = _[_._];
        return (
          _ === void 0 && `accessorKey` in _ && (_ = _[_.accessorKey]),
          (_ ??= _.size),
          {
            ..._,
            size: _,
          }
        );
      }),
      defaultColumn: {
        minSize: 60,
        maxSize: 800,
      },
      initialState: {
        sorting: _,
        grouping: _ ?? [],
        expanded: _,
        columnPinning: _ ?? {},
        columnFilters: _,
        columnVisibility: _,
      },
      getCoreRowModel: _(),
      getSortedRowModel: _(),
      getFilteredRowModel: _(),
      getGroupedRowModel: _(),
      columnResizeMode: `onChange`,
    }),
    { rows: _, flatRows: _ } = _.getRowModel(),
    _ = _.flatMap((_) => (_.getIsExpanded() ? [_, ..._.subRows] : _)),
    _ = _.getState().grouping;
  (0, _.useEffect)(() => {
    _?.(_);
  }, [_, _]),
    (0, _.useEffect)(() => {
      _?.(_);
    }, [_, _.length]);
  let _ = _({
      count: _.length,
      scrollMargin: _,
      getScrollElement: _.useCallback(
        () => (_ === `element` ? _.current : window),
        [_],
      ),
      scrollToFn(_, _, _) {
        return _ === `window` ? _(_, _, _) : _(_, _, _);
      },
      estimateSize: _.useCallback(() => _, [_]),
      overscan: _,
      initialRect: {
        height: 1e3,
        width: 1e3,
      },
      observeElementOffset: _,
      observeElementRect(_, _) {
        return _ === `window` ? _(_, _) : _(_, _);
      },
      getItemKey(_) {
        let _ = _[_];
        return `${_.parentId ?? ``}${_(_, _.original)}`;
      },
    }),
    _ = (0, _.useRef)(0),
    _ = _.useMemo(() => {
      let _ = _.getFlatHeaders(),
        _ = {};
      for (let _ = 0; _ < _.length; _++) {
        let _ = _[_];
        (_[`--header-${_._}-size`] = `${_.getSize()}px`),
          (_[`--col-${_.column._}-size`] = `${_.column.getSize()}px`);
      }
      return (_.current += 1), _;
    }, [_.getState().columnSizingInfo, _.getState().columnSizing, _]);
  _.useEffect(() => {
    (0, _.startTransition)(() => {
      _.measure();
    });
  }, [_, _]);
  let _ = _.getVirtualItems(),
    _ = _[0]?.start ?? 0,
    _ = _.getTotalSize(),
    _ = _({
      estimateSize(_) {
        return _[0]?.getVisibleCells()[_].column.getSize() ?? 0;
      },
      count: _[0]?.getVisibleCells().length ?? 0,
      overscan: 6,
      horizontal: !0,
      getScrollElement: _.useCallback(
        () => (_ === `element` ? _.current : window),
        [_],
      ),
      scrollToFn(_, _, _) {
        return _ === `window` ? _(_, _, _) : _(_, _, _);
      },
      rangeExtractor(_) {
        let _ = _[0]?.getVisibleCells() ?? [],
          _ = new Set(_(_));
        return (
          _.forEach((_, _) => {
            _.column.getIsPinned() && _.add(_);
          }),
          Array.from(_).sort((_, _) => _ - _)
        );
      },
      observeElementOffset: _,
      observeElementRect(_, _) {
        return _ === `window` ? _(_, _) : _(_, _);
      },
    });
  (0, _.useEffect)(() => {
    _.measure();
  }, [_.current]),
    (0, _.useImperativeHandle)(
      _,
      () => ({
        getData() {
          return _.map((_) => _.original);
        },
        getVisibleRows() {
          return _;
        },
        getState: _.getState,
        getColumns: _.getAllColumns,
        getColumnDefs() {
          return _;
        },
        setColumnFilters: _.setColumnFilters,
        resetColumnFilters: _.resetColumnFilters,
        setColumnFilterFnOverride: _,
        getColumnFilterFnOverride() {
          return _;
        },
        getContainerElement() {
          return _.current;
        },
        getTableElement() {
          return _.current;
        },
        scrollToColumn(_, _) {
          _.scrollToIndex(_.getIndex(), _);
        },
      }),
      [
        _,
        _,
        _.setColumnFilters,
        _.resetColumnFilters,
        _.getState,
        _.getAllColumns,
        _,
        _,
        _,
      ],
    );
  let _ = (0, _.useRef)(null),
    _ = _ ? (_ ?? 0) : 0,
    _ = 0,
    _ = _[0]?.getVisibleCells(),
    _ = _.getVirtualItems(),
    _ = _[_.length - 1]?.end;
  for (let _ of _) _[_.index]?.column.getIsPinned() && (_ += _.size);
  return (0, _.jsx)(_, {
    table: _,
    setColumnSizeOverride: _,
    children: (0, _.jsx)(`div`, {
      className: _,
      ref: _,
      style: {
        width: _,
        height: _,
        overflow: _ === `element` ? `auto` : void 0,
        maxWidth: `fit-content`,
        scrollPadding: `${_}px 0 0 ${_}px`,
      },
      children: (0, _.jsxs)(`div`, {
        role: `table`,
        ref: _,
        "aria-rowcount": _.length,
        style: {
          minHeight: _,
          width: _.getTotalSize(),
          "--virtualPos": `${_}px`,
          ..._,
        },
        children: [
          _.getHeaderGroups().map((_) =>
            (0, _.jsx)(
              _,
              {
                group: _,
                sticky: _,
                nHeaderHeight: _,
              },
              _._,
            ),
          ),
          _.map((_) =>
            (0, _.jsx)(
              _,
              {
                row: _[_.index],
                size: _.size,
                rowVirtualizer: _,
                index: _.index,
                measureRef: _.measureElement,
                scrollContainerRef: _,
                nItemHeight: _,
                renderGroup: _,
                rowEnd: _,
              },
              _.key,
            ),
          ),
        ],
      }),
    }),
  });
});
function _(_) {
  let _ = _.getIsPinned(),
    _ = _ === `left` && _.getIsLastColumn(`left`),
    _ = _ === `right` && _.getIsFirstColumn(`right`);
  return {
    borderRight: _
      ? `var(--fancy-table-last-pinned-border, var(--fancy-table-cell-border, 1px solid #aaa))`
      : void 0,
    borderLeft: _
      ? `var(--fancy-table-last-pinned-border,var(--fancy-table-cell-border, 1px solid #aaa))`
      : void 0,
    left: _ === `left` ? `${_.getStart(`left`)}px` : void 0,
    right: _ === `right` ? `${_.getAfter(`right`)}px` : void 0,
    position: _ ? `sticky` : `relative`,
    minWidth: _.getSize(),
    zIndex: +!!_,
  };
}
function _(_) {
  let { group: _, sticky: _, nHeaderHeight: _ } = _;
  return (0, _.jsx)(`div`, {
    role: `row`,
    className: (0, _.default)(_, _, _ && `n0oy6VHMt10-`),
    children: _.headers.map((_, _) => {
      let _ = _.headers[_ - 1],
        _ = {},
        _ = _.column.getIsSorted();
      _ &&
        !_.column.columnDef.meta?.bDisableSortButton &&
        (_[`aria-sort`] = _ === `asc` ? `ascending` : `descending`);
      let _ = `div`;
      return (
        _.column.getCanSort() &&
          !_.column.columnDef.meta?.bDisableSortButton &&
          ((_ = `button`), (_.onClick = _.column.getToggleSortingHandler())),
        (0, _.jsx)(
          _,
          {
            header: _,
            prevHeader: _,
            HeaderElement: _,
            nHeaderHeight: _,
            sortDirection: _,
            strTooltip: _.column.columnDef.meta?.strHeaderTooltip,
            conditionalProps: _,
          },
          _._,
        )
      );
    }),
  });
}
var _ = _.memo(function (_) {
  let {
    row: _,
    size: _,
    rowVirtualizer: _,
    measureRef: _,
    index: _,
    nItemHeight: _,
    renderGroup: _,
  } = _;
  return (0, _.jsx)(`div`, {
    role: `row`,
    className: (0, _.default)(_, _.getCanExpand() && `_5jFPEmApcnI-`),
    style: {
      minHeight: _.getCanExpand() ? void 0 : `${_}px`,
      transform: `translateY(var(--virtualPos))`,
    },
    "data-even": _ % 2 == 0,
    "data-index": _,
    ref: _,
    children: (0, _.jsx)(_, {
      row: _,
      rowVirtualizer: _,
      nItemHeight: _,
      renderGroup: _,
    }),
  });
});
function _(_) {
  let { row: _, rowVirtualizer: _, renderGroup: _ } = _;
  if (_.getCanExpand()) {
    let _ = _ ?? (() => _.groupingValue);
    return (0, _.jsxs)(`button`, {
      className: _,
      "aria-expanded": _.getIsExpanded(),
      onClick: _.getToggleExpandedHandler(),
      children: [
        (0, _.jsx)(`div`, {
          className: _,
        }),
        _(_),
      ],
    });
  }
  let _ = _.getVirtualItems(),
    _ = _.getVisibleCells(),
    _ = 0,
    _;
  return (0, _.jsx)(_.Fragment, {
    children: _.map((_) => {
      let _ = _[_.index],
        _ = _.column.getIsPinned();
      return (
        _ ? (_ += _.size) : _ === void 0 && (_ = _.start),
        (0, _.jsx)(
          _,
          {
            cell: _,
            rowVirtualizer: _,
            index: _.index,
            transform: _ ? void 0 : `translateX(${_ - _}px)`,
          },
          _._,
        )
      );
    }),
  });
}
function _(_, _) {
  let _ = (0, _.useContext)(_),
    _ = _.columnDef.meta?.bGrowToFit,
    _ = _._,
    _ = _ ? _.getSize() : 0;
  (0, _.useLayoutEffect)(() => {
    if (!_ || !_.current) return;
    let _ = _.current?.scrollWidth;
    if (!_) return;
    let _ = _.current.getBoundingClientRect().width,
      _ = window.getComputedStyle(_.current),
      _ = _;
    if (_ > _) {
      if (_.paddingLeft) {
        let _ = parseInt(_.paddingLeft);
        isNaN(_) || (_ += _);
      }
      if (_.paddingRight) {
        let _ = parseInt(_.paddingRight);
        isNaN(_) || (_ += _);
      }
    }
    _ > _ &&
      _.setColumnSizeOverride((_) =>
        _[_] > _
          ? _
          : {
              ..._,
              [_]: _,
            },
      );
  }, [_, _, _, _, _, _.getIsSorted()]);
}
function _(_) {
  let {
      header: _,
      prevHeader: _,
      HeaderElement: _,
      nHeaderHeight: _,
      sortDirection: _,
      strTooltip: _,
      conditionalProps: _,
    } = _,
    _ = (0, _.useRef)(null);
  return (
    _(_.column, _),
    (0, _.jsxs)(
      _,
      {
        role: `columnheader`,
        ref: _,
        "data-pinned": !!_.column.getIsPinned(),
        className: (0, _.default)(
          _,
          _ === `button` && `TspXOZgdFyE-`,
          _.column.columnDef.meta?.headerClassname,
        ),
        style: {
          width: `var(--header-${_._}-size)`,
          height: _ === void 0 ? void 0 : `${_}px`,
          ..._(_.column),
        },
        ..._,
        children: [
          _?.column.getCanResize() &&
            (0, _.jsx)(`div`, {
              role: `presentation`,
              onDoubleClick: () => _.column.resetSize(),
              onMouseDown: _.getResizeHandler(),
              onTouchStart: _.getResizeHandler(),
              onClick: (_) => _.stopPropagation(),
              className: (0, _.default)(`xLOn3i2kI6w-`, `BMuxqw936no-`),
            }),
          _.isPlaceholder ? null : _(_.column.columnDef.header, _.getContext()),
          _ &&
            (0, _.jsx)(_, {
              tooltip: _,
            }),
          _ &&
            !_.column.columnDef.meta?.bDisableSortButton &&
            (0, _.jsx)(`div`, {
              className: `uHMQKVKbTdQ-`,
            }),
          _.column.getCanResize() &&
            (0, _.jsx)(`div`, {
              role: `presentation`,
              onDoubleClick: () => _.column.resetSize(),
              onMouseDown: _.getResizeHandler(),
              onTouchStart: _.getResizeHandler(),
              onClick: (_) => _.stopPropagation(),
              className: (0, _.default)(
                `xLOn3i2kI6w-`,
                _.column.getIsResizing() && void 0,
              ),
            }),
        ],
      },
      _._,
    )
  );
}
function _(_) {
  let { cell: _, rowVirtualizer: _, index: _, transform: _ } = _,
    _ = _.useRef(null),
    _ = _(_, _.measure);
  return (
    _(_.column, _),
    (0, _.jsx)(`div`, {
      className: (0, _.default)(_, _.column.columnDef.meta?.cellClassname),
      "data-index": _,
      "data-table-column-id": _.column._,
      ref: _,
      style: {
        width: `var(--col-${_.column._}-size)`,
        transform: _,
        ..._(_.column),
      },
      children: (0, _.jsx)(_, {
        CellComponent: _.column.columnDef.cell,
        context: _.getContext(),
      }),
    })
  );
}
function _(_) {
  return _(_.CellComponent, _.context);
}
var _ = _.memo(_, (_, _) => _.context.getValue() === _.context.getValue()),
  _ = {
    DefaultFancyTable: `hqqGkrapjks-`,
    NoColumnBorders: `_33jqkFIBWcU-`,
  };
export { _, _, _ };
