import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
function _(_, _, _) {
  let _ = _.initialDeps ?? [],
    _;
  return () => {
    var _, _, _, _;
    let _;
    _.key && (_ = _.debug) != null && _.call(_) && (_ = Date.now());
    let _ = _();
    if (!(_.length !== _.length || _.some((_, _) => _[_] !== _))) return _;
    _ = _;
    let _;
    if (
      (_.key && (_ = _.debug) != null && _.call(_) && (_ = Date.now()),
      (_ = _(..._)),
      _.key && (_ = _.debug) != null && _.call(_))
    ) {
      let _ = Math.round((Date.now() - _) * 100) / 100,
        _ = Math.round((Date.now() - _) * 100) / 100,
        _ = _ / 16,
        _ = (_, _) => {
          for (_ = String(_); _.length < _; ) _ = " " + _;
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
  };
}
function _(_, _) {
  if (_ === void 0) throw new Error(`Unexpected undefined${_ ? `: ${_}` : ""}`);
  return _;
}
var _ = (_, _) => Math.abs(_ - _) < 1,
  _ = (_, _, _) => {
    let _;
    return function (..._) {
      _.clearTimeout(_), (_ = _.setTimeout(() => _.apply(this, _), _));
    };
  };
var _ = (_) => _,
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
    if ((_(_.getBoundingClientRect()), !_.ResizeObserver)) return () => {};
    let _ = new _.ResizeObserver((_) => {
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
      _(_.getBoundingClientRect());
    });
    return (
      _.observe(_, {
        box: "border-box",
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
      _.addEventListener("resize", _, _),
      () => {
        _.removeEventListener("resize", _);
      }
    );
  },
  _ = typeof window > "u" ? !0 : "onscrollend" in window,
  _ = (_, _) => {
    let _ = _.scrollElement;
    if (!_) return;
    let _ = _.targetWindow;
    if (!_) return;
    let _ = 0,
      _ = _
        ? () => {}
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
    return (
      _(),
      _.addEventListener("scroll", _, _),
      _.addEventListener("scrollend", _, _),
      () => {
        _.removeEventListener("scroll", _),
          _.removeEventListener("scrollend", _);
      }
    );
  },
  _ = (_, _) => {
    let _ = _.scrollElement;
    if (!_) return;
    let _ = _.targetWindow;
    if (!_) return;
    let _ = 0,
      _ = _
        ? () => {}
        : _(
            _,
            () => {
              _(_, !1);
            },
            _.options.isScrollingResetDelay,
          ),
      _ = (_) => () => {
        (_ = _[_.options.horizontal ? "scrollX" : "scrollY"]), _(), _(_, _);
      },
      _ = _(!0),
      _ = _(!1);
    return (
      _(),
      _.addEventListener("scroll", _, _),
      _.addEventListener("scrollend", _, _),
      () => {
        _.removeEventListener("scroll", _),
          _.removeEventListener("scrollend", _);
      }
    );
  },
  _ = (_, _, _) => {
    if (_?.borderBoxSize) {
      let _ = _.borderBoxSize[0];
      if (_)
        return Math.round(_[_.options.horizontal ? "inlineSize" : "blockSize"]);
    }
    return Math.round(
      _.getBoundingClientRect()[_.options.horizontal ? "width" : "height"],
    );
  },
  _ = (_, { adjustments: _ = 0, behavior: _ }, _) => {
    var _, _;
    let _ = _ + _;
    (_ = (_ = _.scrollElement) == null ? void 0 : _.scrollTo) == null ||
      _.call(_, {
        [_.options.horizontal ? "left" : "top"]: _,
        behavior: _,
      });
  },
  _ = (_, { adjustments: _ = 0, behavior: _ }, _) => {
    var _, _;
    let _ = _ + _;
    (_ = (_ = _.scrollElement) == null ? void 0 : _.scrollTo) == null ||
      _.call(_, {
        [_.options.horizontal ? "left" : "top"]: _,
        behavior: _,
      });
  },
  _ = class {
    constructor(_) {
      (this.unsubs = []),
        (this.scrollElement = null),
        (this.targetWindow = null),
        (this.isScrolling = !1),
        (this.scrollToIndexTimeoutId = null),
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
                      this._measureElement(_.target, _);
                    });
                  })));
          return {
            disconnect: () => {
              var _;
              return (_ = _()) == null ? void 0 : _.disconnect();
            },
            observe: (_) => {
              var _;
              return (_ = _()) == null
                ? void 0
                : _.observe(_, {
                    box: "border-box",
                  });
            },
            unobserve: (_) => {
              var _;
              return (_ = _()) == null ? void 0 : _.unobserve(_);
            },
          };
        })()),
        (this.range = null),
        (this.setOptions = (_) => {
          Object.entries(_).forEach(([_, _]) => {
            typeof _ > "u" && delete _[_];
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
              indexAttribute: "data-index",
              initialMeasurementsCache: [],
              lanes: 1,
              isScrollingResetDelay: 150,
              enabled: !0,
              isRtl: !1,
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
            (this.scrollElement = null),
            (this.targetWindow = null),
            this.observer.disconnect(),
            this.elementsCache.clear();
        }),
        (this._didMount = () => () => {
          this.cleanup();
        }),
        (this._willUpdate = () => {
          var _;
          let _ = this.options.enabled ? this.options.getScrollElement() : null;
          if (this.scrollElement !== _) {
            if ((this.cleanup(), !_)) {
              this.maybeNotify();
              return;
            }
            (this.scrollElement = _),
              this.scrollElement && "ownerDocument" in this.scrollElement
                ? (this.targetWindow =
                    this.scrollElement.ownerDocument.defaultView)
                : (this.targetWindow =
                    ((_ = this.scrollElement) == null ? void 0 : _.window) ??
                    null),
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
                        ? "forward"
                        : "backward"
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
              this.scrollRect[this.options.horizontal ? "width" : "height"])
            : ((this.scrollRect = null), 0)),
        (this.getScrollOffset = () =>
          this.options.enabled
            ? ((this.scrollOffset =
                this.scrollOffset ??
                (typeof this.options.initialOffset == "function"
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
                _ = typeof _ == "number" ? _ : this.options.estimateSize(_),
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
          ],
          (_, _, _) =>
            (this.range =
              _.length > 0 && _ > 0
                ? _({
                    measurements: _,
                    outerSize: _,
                    scrollOffset: _,
                  })
                : null),
          {
            key: !1,
            debug: () => this.options.debug,
          },
        )),
        (this.getIndexes = _(
          () => [
            this.options.rangeExtractor,
            this.calculateRange(),
            this.options.overscan,
            this.options.count,
          ],
          (_, _, _, _) =>
            _ === null
              ? []
              : _({
                  startIndex: _.startIndex,
                  endIndex: _.endIndex,
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
          let _ = this.itemSizeCache.get(_.key) ?? _.size,
            _ = _ - _;
          _ !== 0 &&
            ((this.shouldAdjustScrollPositionOnItemSizeChange !== void 0
              ? this.shouldAdjustScrollPositionOnItemSizeChange(_, _, this)
              : _.start < this.getScrollOffset() + this.scrollAdjustments) &&
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
          () => [this.getIndexes(), this.getMeasurements()],
          (_, _) => {
            let _ = [];
            for (let _ = 0, _ = _.length; _ < _; _++) {
              let _ = _[_],
                _ = _[_];
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
        (this.getOffsetForAlignment = (_, _) => {
          let _ = this.getSize(),
            _ = this.getScrollOffset();
          _ === "auto" &&
            (_ <= _ ? (_ = "start") : _ >= _ + _ ? (_ = "end") : (_ = "start")),
            _ === "start"
              ? (_ = _)
              : _ === "end"
                ? (_ = _ - _)
                : _ === "center" && (_ = _ - _ / 2);
          let _ = this.options.horizontal ? "scrollWidth" : "scrollHeight",
            _ =
              (this.scrollElement
                ? "document" in this.scrollElement
                  ? this.scrollElement.document.documentElement[_]
                  : this.scrollElement[_]
                : 0) - _;
          return Math.max(Math.min(_, _), 0);
        }),
        (this.getOffsetForIndex = (_, _ = "auto") => {
          _ = Math.max(0, Math.min(_, this.options.count - 1));
          let _ = this.measurementsCache[_];
          if (!_) return;
          let _ = this.getSize(),
            _ = this.getScrollOffset();
          if (_ === "auto")
            if (_.end >= _ + _ - this.options.scrollPaddingEnd) _ = "end";
            else if (_.start <= _ + this.options.scrollPaddingStart)
              _ = "start";
            else return [_, _];
          let _ =
            _ === "end"
              ? _.end + this.options.scrollPaddingEnd
              : _.start - this.options.scrollPaddingStart;
          return [this.getOffsetForAlignment(_, _), _];
        }),
        (this.isDynamicMode = () => this.elementsCache.size > 0),
        (this.cancelScrollToIndex = () => {
          this.scrollToIndexTimeoutId !== null &&
            this.targetWindow &&
            (this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId),
            (this.scrollToIndexTimeoutId = null));
        }),
        (this.scrollToOffset = (
          _,
          { align: _ = "start", behavior: _ } = {},
        ) => {
          this.cancelScrollToIndex(),
            _ === "smooth" &&
              this.isDynamicMode() &&
              console.warn(
                "The `smooth` scroll behavior is not fully supported with dynamic size.",
              ),
            this._scrollToOffset(this.getOffsetForAlignment(_, _), {
              adjustments: void 0,
              behavior: _,
            });
        }),
        (this.scrollToIndex = (_, { align: _ = "auto", behavior: _ } = {}) => {
          (_ = Math.max(0, Math.min(_, this.options.count - 1))),
            this.cancelScrollToIndex(),
            _ === "smooth" &&
              this.isDynamicMode() &&
              console.warn(
                "The `smooth` scroll behavior is not fully supported with dynamic size.",
              );
          let _ = this.getOffsetForIndex(_, _);
          if (!_) return;
          let [_, _] = _;
          this._scrollToOffset(_, {
            adjustments: void 0,
            behavior: _,
          }),
            _ !== "smooth" &&
              this.isDynamicMode() &&
              this.targetWindow &&
              (this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(
                () => {
                  if (
                    ((this.scrollToIndexTimeoutId = null),
                    this.elementsCache.has(this.options.getItemKey(_)))
                  ) {
                    let [_] = _(this.getOffsetForIndex(_, _));
                    _(_, this.getScrollOffset()) ||
                      this.scrollToIndex(_, {
                        align: _,
                        behavior: _,
                      });
                  } else
                    this.scrollToIndex(_, {
                      align: _,
                      behavior: _,
                    });
                },
              ));
        }),
        (this.scrollBy = (_, { behavior: _ } = {}) => {
          this.cancelScrollToIndex(),
            _ === "smooth" &&
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
          var _;
          let _ = this.getMeasurements(),
            _;
          return (
            _.length === 0
              ? (_ = this.options.paddingStart)
              : (_ =
                  this.options.lanes === 1
                    ? (((_ = _[_.length - 1]) == null ? void 0 : _.end) ?? 0)
                    : Math.max(
                        ..._.slice(-this.options.lanes).map((_) => _.end),
                      )),
            _ - this.options.scrollMargin + this.options.paddingEnd
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
function _({ measurements: _, outerSize: _, scrollOffset: _ }) {
  let _ = _.length - 1,
    _ = _(0, _, (_) => _[_].start, _),
    _ = _;
  for (; _ < _ && _[_].end < _ + _; ) _++;
  return {
    startIndex: _,
    endIndex: _,
  };
}
var _ = _(_()),
  _ = _(_());
var _ = typeof document < "u" ? _.useLayoutEffect : _.useEffect;
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
    _.setOptions(_),
    _.useEffect(() => _._didMount(), []),
    _(() => _._willUpdate()),
    _
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
    getScrollElement: () => (typeof document < "u" ? window : null),
    observeElementRect: _,
    observeElementOffset: _,
    scrollToFn: _,
    initialOffset: () => (typeof document < "u" ? window.scrollY : 0),
    ..._,
  });
}
var _ = _(_(), 1);
var _ = _(_(), 1),
  _ = _.default.memo(function (_) {
    let { virtualizer: _, bDynamic: _, idx: _, rowGap: _, renderItem: _ } = _,
      _ = _.default.useCallback(
        (_, _, _) => (
          _.scrollToIndex(_, {
            align: "center",
          }),
          !0
        ),
        [_, _],
      );
    return (0, _.jsx)(_, {
      ref: _ ? _.measureElement : void 0,
      "data-index": _,
      fnScrollIntoViewHandler: _,
      scrollIntoViewWhenChildFocused: "force",
      style: {
        width: "100%",
        paddingBottom: _,
      },
      children: _(_),
    });
  }),
  _ = _.default.forwardRef(function (_, _) {
    let {
        nRows: _,
        nItemHeight: _,
        nRowGap: _,
        overscan: _,
        renderItem: _,
        bDynamic: _,
        className: _,
        forceVirtualizeType: _,
        initialOffset: _,
        onOffsetChange: _,
        ..._
      } = _,
      [_, _] = (0, _.useState)(_),
      [_, _] = _.default.useState(),
      [_, _] = _.default.useState(),
      _ = _.default.useCallback(
        (_) => {
          if (!_ || _ == "window") return;
          let _ = _(_, "y");
          (0, _.startTransition)(() => {
            _(_ || void 0), _(_.offsetTop), _ || _(_ ? "element" : "window");
          });
        },
        [_],
      ),
      _ = _(_, _),
      _ = {
        nRows: _,
        nItemHeight: _,
        nRowGap: _,
        overscan: _,
        renderItem: _,
        bDynamic: _,
        forceVirtualizeType: _,
        initialOffset: _,
        onOffsetChange: _,
      };
    return (0, _.jsx)(_, {
      className: _,
      ref: _,
      ..._,
      children: (0, _.jsxs)(_.Suspense, {
        children: [
          _ === "element" &&
            (0, _.jsx)(_, {
              ..._,
              nScrollMargin: _ || 0,
              elScrollable: _,
            }),
          _ === "window" &&
            (0, _.jsx)(_, {
              ..._,
              nScrollMargin: _,
            }),
        ],
      }),
    });
  });
function _(_) {
  let {
      nScrollMargin: _,
      nRows: _,
      nItemHeight: _,
      nRowGap: _ = 10,
      overscan: _ = 6,
      initialOffset: _,
      onOffsetChange: _,
    } = _,
    _ = _ + _,
    _ = _({
      count: _,
      scrollMargin: _,
      estimateSize: _.default.useCallback(() => _, [_]),
      overscan: _,
      initialOffset: _,
      initialRect: {
        height: 1e3,
        width: 1e3,
      },
      observeElementOffset: _,
      observeElementRect: _,
      onChange(_, _) {
        _?.(_.scrollOffset);
      },
    });
  return (
    _.default.useEffect(() => {
      (0, _.startTransition)(() => {
        _.measure();
      });
    }, [_, _]),
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
    } = _,
    _ = _ + _,
    _ = _({
      count: _,
      scrollMargin: _ - (_?.offsetTop || 0),
      getScrollElement: () => _,
      estimateSize: _.default.useCallback(() => _, [_]),
      overscan: _,
      initialRect: {
        height: 1e3,
        width: 1e3,
      },
      initialOffset: _,
      observeElementOffset: _,
      observeElementRect: _,
      onChange(_, _) {
        _?.(_.scrollOffset);
      },
    });
  return (
    _.default.useEffect(() => {
      (0, _.startTransition)(() => {
        _.measure();
      });
    }, [_, _]),
    (0, _.jsx)(_, {
      ..._,
      virtualizer: _,
    })
  );
}
function _(_) {
  let { virtualizer: _, nRowGap: _, renderItem: _, bDynamic: _ } = _,
    _ = _.getVirtualItems(),
    _ = _.length ? _[0].start - _.options.scrollMargin : 0,
    _ = Math.max(0, _.getTotalSize());
  return (0, _.jsx)(_, {
    "flow-children": "column",
    navEntryPreferPosition: 3,
    style: {
      height: `${_}px`,
      width: "100%",
      position: "relative",
    },
    children: (0, _.jsx)("div", {
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        transform: `translateY( ${_}px )`,
      },
      children: _.map((_) =>
        (0, _.jsx)(
          _,
          {
            virtualizer: _,
            bDynamic: _,
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
  "scrollX" in _
    ? (_ = _((_) => _(_[_.options.horizontal ? "scrollX" : "scrollY"], _)))
    : (_ = _((_) =>
        _(_[_.options.horizontal ? "scrollLeft" : "scrollTop"], _),
      ));
  let _ = () => _(!0),
    _ = () => _(!1);
  return (
    _(),
    _.addEventListener("scroll", _, {
      passive: !0,
    }),
    _.addEventListener("scrollend", _, {
      passive: !0,
    }),
    () => {
      _.removeEventListener("scroll", _), _.removeEventListener("scrollend", _);
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
    _.addEventListener("resize", _, {
      passive: !0,
    }),
    () => {
      _.removeEventListener("resize", _);
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
      box: "border-box",
    }),
    () => {
      _.unobserve(_);
    }
  );
}
export { _, _, _, _, _ };
