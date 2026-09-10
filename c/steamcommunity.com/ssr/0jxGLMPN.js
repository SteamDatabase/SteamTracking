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
var _ = `yPh9MQ-4OAA-`,
  _ = `HT4JBJW1PvU-`,
  _ = `K9k-Nmci3GE-`,
  _ = _();
function _(_) {
  let {
      children: _,
      state: _,
      placement: _ = `bottom-end`,
      popoverWidth: _ = `dropdown`,
      popoverMaxHeight: _,
      ..._
    } = _,
    [_, _] = (0, _.useState)(void 0);
  (0, _.useEffect)(() => _(void 0), [_.bOpen]);
  let _ = _(),
    _ = (0, _.useRef)(null),
    _ = (0, _.useRef)(null),
    _ = (0, _.useMemo)(
      () => _.rgFilteredOptions.findIndex((_) => _ === _.selectedValue),
      [_.selectedValue, _.rgFilteredOptions],
    ),
    _ = _({
      open: _.bOpen,
      onOpenChange: _.setOpen,
      width: _,
      maxHeight: _,
      placement: _,
      gutter: `4`,
      activeIndex: _.activeIndex,
      setActiveIndex: _.setActiveIndex,
      selectedIndex: _,
      setSelectedIndex: (_) => _.onItemSelectionChange(_.rgFilteredOptions[_]),
      interactions: {
        click: !0,
        virtualItemFocus: !_,
      },
      role: `combobox`,
      scroll: !1,
    }),
    _ = {
      ..._,
      ..._,
      focusedValue: _,
      onFocusChange: _,
      refPopover: _,
      refScrollElement: _,
      setOpen: (_) => {
        if (_) {
          let _ = null;
          (_ = _.multiselect
            ? Array.isArray(_.selectedValue)
              ? _.selectedValue[0]
              : null
            : _.selectedValue),
            _(_),
            _.onInputChange(``);
        }
        _.setOpen(_);
      },
      onIndexSelected: (_) => {
        let _ = _.elementsRef.current;
        _ && _[_] && _[_].click();
      },
      popoverPlacement: _.floating.placement,
    };
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: (0, _.jsx)(_.Root, {
      state: _,
      children: _,
    }),
  });
}
function _(_) {
  let {
      refPopover: _,
      inputValue: _,
      onInputChange: _,
      activeIndex: _,
      popoverPlacement: _,
      multiselect: _,
      setActiveIndex: _,
      setOpen: _,
      filterPlaceholder: _,
      onIndexSelected: _,
      refScrollElement: _,
    } = _(`<Combobox.Options>`),
    _ = (_) => {
      _ &&
        _.focus({
          preventScroll: !0,
        });
    },
    _ = (_) => {
      _.key === `Enter` &&
        _ !== null &&
        (_(_), _ || (_(null), _(!1)), _.preventDefault(), _.stopPropagation());
    },
    _ = _.startsWith(`top`),
    _ = (0, _.jsx)(_, {
      overflow: `auto`,
      ref: _,
      style: {
        overscrollBehavior: `contain`,
      },
      children: _.children,
    });
  return (0, _.jsx)(_.Positioner, {
    ref: _,
    children: (0, _.jsxs)(_, {
      direction: `column`,
      maxHeight: `var(--popover-max-height)`,
      children: [
        _ && _,
        (0, _.jsx)(_, {
          flexShrink: `0`,
          className: _(_, _ ? _ : _),
          children: (0, _.jsx)(_, {
            margin: `3`,
            variant: `inset`,
            radius: `sm`,
            value: _,
            onTextChange: _,
            onKeyDown: _,
            onKeyDownCapture: (_) => {
              (_.key === `Home` || _.key === `End`) && _.stopPropagation();
            },
            placeholder: _,
            inputRef: _,
            autoComplete: `off`,
          }),
        }),
        !_ && _,
      ],
    }),
  });
}
var _ = (0, _.createContext)(null);
function _(_) {
  let { items: _, renderItem: _, overscan: _ = 5, ..._ } = _,
    {
      bOpen: _,
      refPopover: _,
      refScrollElement: _,
    } = _(`<ComboboxVirtualizedOptions>`),
    [_, _] = (0, _.useState)(!1),
    _ = _ && !!_.current && !!_.current;
  (0, _.useEffect)(() => {
    _ !== _ && _(_);
  }, [_, _]);
  let _ = _({
    count: _ ? _.length : Math.min(_.length, 3),
    getScrollElement: () => _.current,
    enabled: _,
    measureElement: _,
    ..._,
  });
  return (0, _.jsx)(_, {
    children: (0, _.jsx)(_, {
      value: _,
      children: (0, _.jsx)(_, {
        height: `${_.getTotalSize()}px`,
        position: `relative`,
        width: `100%`,
        children: _.getVirtualItems().map((_) => _(_[_.index], _, _)),
      }),
    }),
  });
}
function _(_) {
  let { virtualItem: _, children: _ } = _,
    _ = (0, _.useContext)(_);
  return (
    _(_, `Virtual item rendered outside of a virtualizer!`),
    (0, _.jsx)(_, {
      position: `absolute`,
      width: `100%`,
      style: {
        top: 0,
        left: 0,
        transform: `translateY(${_.start}px)`,
      },
      ref: _.measureElement,
      "data-index": _.index,
      children: _,
    })
  );
}
function _(_) {
  let { virtualItem: _, ..._ } = _;
  return (0, _.jsx)(_, {
    virtualItem: _,
    children: (0, _.jsx)(_, {
      ..._,
    }),
  });
}
function _(_) {
  let { virtualItem: _, children: _ } = _;
  return (0, _.jsx)(_, {
    virtualItem: _,
    children: _,
  });
}
function _(_) {
  let { value: _, children: _, disabled: _ } = _,
    {
      onItemSelectionChange: _,
      selectedValue: _,
      multiselect: _,
      maxSelected: _,
    } = _(`<ComboboxTrigger>`),
    _ = !1,
    _ = !1;
  _
    ? ((_ = Array.isArray(_) && _.includes(_)),
      (_ = !!_ && Array.isArray(_) && _.length >= _))
    : (_ = _ === _);
  let _ = _ || (_ && !_);
  return (0, _.jsxs)(_.Item, {
    onSelect: () => _(_),
    selected: _,
    disabled: _,
    children: [
      _ &&
        (0, _.jsxs)(_, {
          gap: `2`,
          align: `center`,
          children: [
            (0, _.jsx)(_, {
              checked: _,
              variant: `dark`,
            }),
            _,
          ],
        }),
      !_ && _,
    ],
  });
}
function _(_) {
  let { children: _, beforeContent: _, render: _ } = _,
    {
      bOpen: _,
      setOpen: _,
      inputValue: _,
      onInputChange: _,
      selectedValue: _,
      focusedValue: _,
      refScrollElement: _,
      onItemSelectionChange: _,
      activeIndex: _,
      setActiveIndex: _,
      onFocusChange: _,
      rgFilteredOptions: _,
      onSelectionChange: _,
      multiselect: _,
      onClear: _,
      refPopover: _,
      clearable: _,
      filterPlaceholder: _,
      onIndexSelected: _,
      popoverPlacement: _,
      maxSelected: _,
      variant: _,
      ..._
    } = _(`<ComboboxTrigger>`),
    _ = {
      tabIndex: 0,
      children: _,
    },
    _ = _ ? Array.isArray(_) && _.length > 0 : !!_,
    _ = _(
      _,
      (0, _.jsx)(_, {
        beforeContent: _,
        afterContent:
          _ && _
            ? (0, _.jsx)(_, {
                onClick: _,
                cursor: `pointer`,
                hitSlop: !0,
              })
            : (0, _.jsx)(_, {}),
        hasValue: _,
        cursor: `pointer`,
        tabIndex: 0,
        variant: _(`Combobox`, _),
        ..._,
      }),
      _,
      void 0,
    );
  return (0, _.jsx)(_.Anchor, {
    children: _,
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    weight: `medium`,
    truncate: !0,
    contrast: `title`,
    ..._,
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    contrast: `description`,
    truncate: !0,
    ..._,
  });
}
function _(_, _) {
  if (typeof _ == `string`)
    return _.toLocaleLowerCase().includes(_.toLocaleLowerCase());
  try {
    return JSON.stringify(_)
      .toLocaleLowerCase()
      .includes(_.toLocaleLowerCase());
  } catch {}
  return (
    console.error(
      `Could not use default option filter on provided Comboxbox option. Custom filter function required.`,
    ),
    !1
  );
}
function _(_) {
  return _(_, !1);
}
function _(_, _) {
  let {
      rgOptions: _,
      filter: _ = _,
      filterPlaceholder: _,
      selectedValue: _,
      onSelectionChange: _,
      maxSelected: _,
    } = _,
    [_, _] = (0, _.useState)(``),
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(null),
    _ = (0, _.useMemo)(() => _.filter((_) => _(_, _)), [_, _, _]),
    _ = typeof _ == `number`,
    _ = _.length > 0,
    _ = (0, _.useCallback)(
      (_) => {
        _ && !_ && _ && _(0), _(_);
      },
      [_, _],
    ),
    _ = (0, _.useCallback)(
      (_) => {
        _ || _(``), _(_);
      },
      [_],
    ),
    _ = (0, _.useCallback)(
      (_) => {
        _(_), _ || _(!1);
      },
      [_, _, _],
    );
  return {
    activeIndex: _,
    setActiveIndex: _,
    rgFilteredOptions: _,
    selectedValue: _,
    onSelectionChange: _,
    onItemSelectionChange: (0, _.useCallback)(
      (_) => {
        if (!_) _(_);
        else if (!_) _([_]);
        else {
          let _ = _,
            _ = _.indexOf(_);
          if (_ === -1) _(_.concat(_));
          else return _(_.slice(0, _).concat(_.slice(_ + 1)));
        }
      },
      [_, _, _],
    ),
    onClear: (_) => {
      _(_ ? [] : null), _.stopPropagation(), _.preventDefault();
    },
    inputValue: _,
    onInputChange: _,
    bOpen: _,
    setOpen: _,
    filterPlaceholder: _,
    multiselect: _,
    maxSelected: _,
  };
}
var _ = {
  Root: _,
  Option: _,
  Options: _,
  VirtualizedOptions: _,
  VirtualizedOption: _,
  VirtualizedContent: _,
  Trigger: _,
  DefaultOptionFilter: _,
  Value: _,
  Placeholder: _,
};
function _(_) {
  return _
    ? typeof _ == `string`
      ? _
      : typeof _ == `number`
        ? _.toString()
        : (console.error(
            `Could not use default option labeler on Combobox option value. Custom labeler requried`,
            _,
          ),
          ``)
    : ``;
}
function _(_) {
  let {
      selectedValue: _,
      onSelectionChange: _,
      options: _,
      filter: _,
      filterPlaceholder: _,
      placeholder: _,
      getOptionLabel: _ = _,
      ..._
    } = _,
    _ = _({
      onSelectionChange: _,
      selectedValue: _,
      rgOptions: _,
      filter: (0, _.useCallback)((_, _) => (_ ? _(_, _) : _(_, _(_))), [_, _]),
      filterPlaceholder: _,
    }),
    _ = _ != null;
  return (0, _.jsxs)(_.Root, {
    state: _,
    ..._,
    children: [
      (0, _.jsxs)(_.Trigger, {
        children: [
          _ &&
            (0, _.jsx)(_.Value, {
              children: _(_),
            }),
          !_ &&
            (0, _.jsx)(_.Placeholder, {
              children: _,
            }),
        ],
      }),
      (0, _.jsx)(_.Options, {
        children: _.rgFilteredOptions.map((_) =>
          (0, _.jsx)(
            _,
            {
              value: _,
              children: _(_),
            },
            _(_),
          ),
        ),
      }),
    ],
  });
}
var _ = Object.assign(_, _);
function _(_) {
  return _(_, !0);
}
function _(_) {
  let {
      selectedValue: _,
      onSelectionChange: _,
      options: _,
      filter: _,
      filterPlaceholder: _,
      placeholder: _,
      getOptionLabel: _ = _,
      maxSelected: _,
      ..._
    } = _,
    _ = _({
      onSelectionChange: _,
      selectedValue: _,
      rgOptions: _,
      filter: (0, _.useCallback)((_, _) => (_ ? _(_, _) : _(_, _(_))), [_, _]),
      filterPlaceholder: _,
      maxSelected: _,
    }),
    _ = Array.isArray(_) && _.length > 0,
    _ = ``;
  if (_) {
    let _ = _.map((_) => _(_));
    _ =
      `ListFormat` in Intl
        ? new Intl.ListFormat(_().strISOCode).format(_)
        : _.join(`, `);
  }
  return (0, _.jsxs)(_.Root, {
    state: _,
    ..._,
    children: [
      (0, _.jsxs)(_.Trigger, {
        children: [
          _ &&
            (0, _.jsx)(_.Value, {
              children: _,
            }),
          !_ &&
            (0, _.jsx)(_.Placeholder, {
              children: _,
            }),
        ],
      }),
      (0, _.jsx)(_.Options, {
        children: _.rgFilteredOptions.map((_) =>
          (0, _.jsx)(
            _.Option,
            {
              value: _,
              children: _(_),
            },
            _(_),
          ),
        ),
      }),
    ],
  });
}
var _ = Object.assign(_, _),
  _ = (0, _.createContext)(null);
function _(_) {
  let _ = (0, _.useContext)(_);
  return _ || console.error(`${_} must be used within a <Combobox>!`), _;
}
export { _, _, _, _, _, _ };
